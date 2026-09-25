const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

// MOBI / PalmDOC LZ77 / HUFF Unpacker
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

function decompressPalmDOC(buf, recordOffsets, recordCount) {
  let fullText = "";
  for (let i = 1; i <= recordCount; i++) {
    const rec = buf.slice(recordOffsets[i], recordOffsets[i+1]);
    let pos = 0;
    const out = [];
    while (pos < rec.length) {
      const b = rec[pos++];
      if (b >= 1 && b <= 8) {
        for (let j = 0; j < b; j++) out.push(rec[pos++]);
      } else if (b < 128) {
        out.push(b);
      } else if (b >= 192) {
        out.push(32); // space
        out.push(b ^ 128);
      } else {
        if (pos < rec.length) {
          const b2 = rec[pos++];
          const val = ((b << 8) | b2) & 0x3FFF;
          const dist = val >> 3;
          const len = (b2 & 0x07) + 3;
          const start = out.length - dist;
          for (let k = 0; k < len; k++) {
            out.push(out[start + k]);
          }
        }
      }
    }
    fullText += Buffer.from(out).toString("utf8");
  }
  return fullText;
}

function extractMobi(filePath) {
  const buf = fs.readFileSync(filePath);
  const numRecords = buf.readUInt16BE(76);
  const recordOffsets = [];
  for (let i = 0; i < numRecords; i++) {
    recordOffsets.push(buf.readUInt32BE(78 + i * 8));
  }
  recordOffsets.push(buf.length);

  const r0 = buf.slice(recordOffsets[0], recordOffsets[1]);
  const compression = r0.readUInt16BE(0);
  const recordCount = r0.readUInt16BE(8);
  console.log(`[MOBI/AZW3] ${path.basename(filePath)}: ${recordCount} records, compression ${compression}`);

  if (compression === 2) {
    return decompressPalmDOC(buf, recordOffsets, recordCount);
  } else if (compression === 17480) {
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

  const batch2Targets = [
    { key: "goddard_feeling", pattern: "Feeling Is the Secret", format: "epub" },
    { key: "goddard_awareness", pattern: "The Power of Awareness", format: "epub" },
    { key: "shinn", pattern: "The Game of Life and How to Play It", format: "epub" },
    { key: "dispenza_habit", pattern: "Breaking The Habit of Being Yourself", format: "pdf" },
    { key: "dispenza_supernatural", pattern: "Becoming Supernatural", format: "epub" },
    { key: "tolle_now", pattern: "The Power of Now", format: "mobi" },
    { key: "gawain_visualization", pattern: "Creative Visualization", format: "epub" }
  ];

  console.log("=== SCANNING BATCH 2 MANIFESTATION BOOKS (7 TITLES) ===");
  for (const t of batch2Targets) {
    const matched = allFiles.find(f => f.includes(t.pattern));
    if (!matched) {
      console.log(`[MISSING] ${t.key}: ${t.pattern}`);
      continue;
    }
    const fullPath = path.join(booksDir, matched);
    const stat = fs.statSync(fullPath);
    console.log(`[FOUND] ${t.key}: ${matched} (${(stat.size / 1024).toFixed(1)} KB)`);

    if (t.format === "mobi") {
      const text = extractMobi(fullPath);
      console.log(`  -> MOBI text extracted: ${text.length} chars (~${Math.round(text.split(/\s+/).length)} words)`);
    } else if (t.format === "pdf") {
      const buf = fs.readFileSync(fullPath);
      const parser = new PDFParse({ data: buf });
      const res = await parser.getText();
      console.log(`  -> PDF text extracted: ${res.text.length} chars (~${Math.round(res.text.split(/\s+/).length)} words)`);
    }
  }
}

run().catch(console.error);
