const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// HUFF/CDIC Decompressor for MOBI/AZW3
class HuffcdicReader {
  loadHuff(huff) {
    const off1 = huff.readUInt32BE(8);
    const off2 = huff.readUInt32BE(12);
    this.dict1 = [];
    for (let i = 0; i < 256; i++) {
      const v = huff.readUInt32BE(off1 + i * 4);
      const codelen = v & 0x1f;
      const term = (v & 0x80) !== 0;
      let maxcode = BigInt(v >>> 8);
      maxcode = ((maxcode + 1n) << BigInt(32 - codelen)) - 1n;
      this.dict1.push({ codelen, term, maxcode });
    }
    const dict2 = [];
    for (let i = 0; i < 64; i++) {
      dict2.push(BigInt(huff.readUInt32BE(off2 + i * 4)));
    }
    this.mincode = [0n];
    this.maxcode = [0n];
    for (let codelen = 1; codelen <= 32; codelen++) {
      const minVal = dict2[(codelen - 1) * 2];
      this.mincode.push(minVal << BigInt(32 - codelen));
      const maxVal = dict2[(codelen - 1) * 2 + 1];
      this.maxcode.push(((maxVal + 1n) << BigInt(32 - codelen)) - 1n);
    }
    this.dictionary = [];
  }

  loadCdic(cdic) {
    const phrases = cdic.readUInt32BE(8);
    const bits = cdic.readUInt32BE(12);
    const n = Math.min(1 << bits, phrases - this.dictionary.length);
    for (let i = 0; i < n; i++) {
      const off = cdic.readUInt16BE(16 + i * 2);
      const blen = cdic.readUInt16BE(16 + off);
      const slice = cdic.slice(18 + off, 18 + off + (blen & 0x7fff));
      const flag = (blen & 0x8000) !== 0;
      this.dictionary.push({ slice, flag });
    }
  }

  unpack(data) {
    let bitsleft = data.length * 8;
    const buf = Buffer.concat([data, Buffer.alloc(8, 0)]);
    let pos = 0;
    let x = buf.readBigUInt64BE(pos);
    let n = 32;
    const out = [];
    const mask32 = (1n << 32n) - 1n;

    while (true) {
      if (n <= 0) {
        pos += 4;
        x = buf.readBigUInt64BE(pos);
        n += 32;
      }
      const code = (x >> BigInt(n)) & mask32;
      const d1 = this.dict1[Number(code >> 24n)];
      let codelen = d1.codelen;
      let term = d1.term;
      let maxcode = d1.maxcode;
      if (!term) {
        while (code < this.mincode[codelen]) codelen++;
        maxcode = this.maxcode[codelen];
      }
      n -= codelen;
      bitsleft -= codelen;
      if (bitsleft < 0) break;
      const r = Number((maxcode - code) >> BigInt(32 - codelen));
      let entry = this.dictionary[r];
      if (!entry.flag) {
        this.dictionary[r] = null;
        const decompressed = this.unpack(entry.slice);
        entry = { slice: decompressed, flag: true };
        this.dictionary[r] = entry;
      }
      out.push(entry.slice);
    }
    return Buffer.concat(out);
  }
}

function extractAzw3(filePath) {
  const buf = fs.readFileSync(filePath);
  const numRecords = buf.readUInt16BE(76);
  const recordOffsets = [];
  for (let i = 0; i < numRecords; i++) {
    recordOffsets.push(buf.readUInt32BE(78 + i * 8));
  }
  recordOffsets.push(buf.length);

  const r0 = buf.slice(recordOffsets[0], recordOffsets[1]);
  const recordCount = r0.readUInt16BE(8);
  const compression = r0.readUInt16BE(0);
  console.log(`[AZW3] ${path.basename(filePath)}: ${recordCount} records, compression ${compression}`);

  if (compression === 17480) {
    const huffRecIdx = r0.readUInt32BE(0x70);
    const huffRecCount = r0.readUInt32BE(0x74);
    const reader = new HuffcdicReader();
    reader.loadHuff(buf.slice(recordOffsets[huffRecIdx], recordOffsets[huffRecIdx + 1]));
    for (let i = 1; i < huffRecCount; i++) {
      reader.loadCdic(buf.slice(recordOffsets[huffRecIdx + i], recordOffsets[huffRecIdx + i + 1]));
    }
    let fullText = "";
    for (let i = 1; i <= recordCount; i++) {
      const rec = buf.slice(recordOffsets[i], recordOffsets[i+1]);
      fullText += reader.unpack(rec).toString("utf8");
    }
    return fullText;
  }
  return "";
}

async function run() {
  const booksDir = path.join(__dirname, '../../Books');
  const allFiles = fs.readdirSync(booksDir);

  const targets = [
    { key: "murphy", pattern: "Subconscious Mind", format: "azw3" },
    { key: "byrne", pattern: "The Secret by Rhonda Byrne", format: "pdf" },
    { key: "hicks", pattern: "Ask and It is given", format: "epub" },
    { key: "nafousi", pattern: "Manifest _ 7 steps", format: "epub" },
    { key: "arden", pattern: "DETACHMENT & MANIFESTATION", format: "epub" },
    { key: "rae", pattern: "How to Manifest a Soulmate", format: "epub" },
    { key: "dawson", pattern: "MIND CONTROL", format: "epub" }
  ];

  console.log("=== SCANNING MANIFESTATION INITIAL 7 BOOKS ===");
  for (const t of targets) {
    const matched = allFiles.find(f => f.includes(t.pattern));
    if (!matched) {
      console.log(`[MISSING] ${t.key}: ${t.pattern}`);
      continue;
    }
    const fullPath = path.join(booksDir, matched);
    const stat = fs.statSync(fullPath);
    console.log(`[FOUND] ${t.key}: ${matched} (${(stat.size / 1024).toFixed(1)} KB)`);

    if (t.format === "azw3") {
      const text = extractAzw3(fullPath);
      console.log(`  -> Decompressed text length: ${text.length} chars (~${Math.round(text.split(/\s+/).length)} words)`);
      const chapters = [...text.matchAll(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
      console.log(`  -> Sample headings (${chapters.length}):`, chapters.slice(0, 8));
    }
  }
}

run();
