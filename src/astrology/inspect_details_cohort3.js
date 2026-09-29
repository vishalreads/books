const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

async function dumpMoreDetails() {
  const books = [
    { slug: 'gallagher', file: '_OceanofPDF.com_Astrology_for_the_Light_Side_of_the_Brain_-_Kim_Rogers-Gallagher.pdf' },
    { slug: 'casey', file: '_OceanofPDF.com_Making_the_gods_work_for_you_-_Caroline_W_Casey.pdf' },
    { slug: 'freed', file: '_OceanofPDF.com_Use_your_planets_wisely_-_Jennifer_Freed.pdf' }
  ];

  for (const b of books) {
    const fullPath = path.join(booksDir, b.file);
    const buf = fs.readFileSync(fullPath);
    const parser = new PDFParse({ data: buf });
    const textResult = await parser.getText();
    await parser.destroy();
    const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
    
    console.log(`\n================== ${b.slug.toUpperCase()} ==================`);
    const lower = text.toLowerCase();
    let tocIdx = lower.indexOf('contents');
    if (tocIdx !== -1) {
      console.log(text.slice(tocIdx, tocIdx + 3500).replace(/\r?\n\s*\r?\n/g, '\n'));
    }
  }
}

dumpMoreDetails();
