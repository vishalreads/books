const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

function extractHtmlDir(dirPath) {
  if (!fs.existsSync(dirPath)) return "";
  let fullText = "";
  function walk(current) {
    const items = fs.readdirSync(current);
    for (const item of items) {
      const p = path.join(current, item);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        walk(p);
      } else if (item.endsWith('.xhtml') || item.endsWith('.html') || item.endsWith('.htm')) {
        const raw = fs.readFileSync(p, 'utf8');
        const clean = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        fullText += clean + "\n\n";
      }
    }
  }
  walk(dirPath);
  return fullText;
}

async function run() {
  const booksDir = path.join(__dirname, '../../Books');
  const unpackedDir = path.join(__dirname, 'unpacked_batch_3');
  const allFiles = fs.readdirSync(booksDir);

  console.log("=== EXTRACTING BATCH 3 (4 BOOKS) ===");

  // 1. Doty: Mind Magic
  const dotyText = extractHtmlDir(path.join(unpackedDir, 'doty_mind_magic'));
  console.log(`[EPUB] Dr. James R. Doty - Mind Magic: ${dotyText.length} chars (~${Math.round(dotyText.split(/\s+/).length)} words)`);

  // 2. Bernstein: The Universe Has Your Back
  const bernsteinText = extractHtmlDir(path.join(unpackedDir, 'bernstein_universe_back'));
  console.log(`[EPUB] Gabrielle Bernstein - The Universe Has Your Back: ${bernsteinText.length} chars (~${Math.round(bernsteinText.split(/\s+/).length)} words)`);

  // 3. Goddard: Infinite Potential
  const infiniteText = extractHtmlDir(path.join(unpackedDir, 'goddard_infinite_potential'));
  console.log(`[EPUB] Neville Goddard - Infinite Potential: ${infiniteText.length} chars (~${Math.round(infiniteText.split(/\s+/).length)} words)`);

  // 4. Rhonda Byrne: The Power of Feelings
  const byrneFile = allFiles.find(f => f.includes('Power of Feelings') || (f.includes('Rhonda Byrne') && f.endsWith('.pdf')));
  if (byrneFile) {
    const buf = fs.readFileSync(path.join(booksDir, byrneFile));
    const parser = new PDFParse({ data: buf });
    const res = await parser.getText();
    console.log(`[PDF] Rhonda Byrne - The Power of Feelings: ${res.text.length} chars (~${Math.round(res.text.split(/\s+/).length)} words)`);
  } else {
    console.log("[MISSING PDF] Rhonda Byrne - The Power of Feelings not found in Books/");
  }
}

run().catch(console.error);
