const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

const files = [
  { slug: 'astrology-for-beginners-raman', file: '_OceanofPDF.com_Astrology_for_Beginners_-_BV_Raman.pdf', title: 'Astrology for Beginners', author: 'B.V. Raman' },
  { slug: 'astrology-speed-light-raaj', file: '_OceanofPDF.com_Astrology_Speed_light_-_Kapiel_Raaj.pdf', title: 'Astrology at the Speed of Light', author: 'Kapiel Raaj' },
  { slug: 'predict-with-navamsha-goel', file: '_OceanofPDF.com_Predict_with_navamsha_-_VpGoel.pdf', title: 'Predict with Navamsha', author: 'V.P. Goel' },
  { slug: 'ancient-hindu-astrology-braha', file: '_OceanofPDF.com_The_Art_and_Practice_of_Ancient_Hindu_Astrology_-_James_Braha.pdf', title: 'The Art and Practice of Ancient Hindu Astrology', author: 'James T. Braha' },
  { slug: 'black-love-signs-balfour', file: '_OceanofPDF.com_Black_Love_Signs_-_Thelma_Balfour.pdf', title: 'Black Love Signs', author: 'Thelma Balfour' }
];

async function inspectAll() {
  console.log('================================================================================');
  console.log('  INSPECTING NEW ASTROLOGY CORPUS (5 TITLES)');
  console.log('================================================================================\n');

  for (const b of files) {
    const fullPath = path.join(booksDir, b.file);
    if (!fs.existsSync(fullPath)) {
      console.log(`[MISSING] ${b.file}`);
      continue;
    }

    const stat = fs.statSync(fullPath);
    const sizeMb = (stat.size / 1024 / 1024).toFixed(2);

    try {
      const dataBuffer = fs.readFileSync(fullPath);
      const parser = new PDFParse({ data: dataBuffer });
      const textResult = await parser.getText();
      const infoResult = await parser.getInfo();
      await parser.destroy();

      const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
      const numPages = infoResult.total || infoResult.numPages || textResult.totalPages || '?';

      console.log(`--------------------------------------------------------------------------------`);
      console.log(`BOOK: ${b.title} by ${b.author}`);
      console.log(`File: ${b.file} (${sizeMb} MB)`);
      console.log(`Pages: ${numPages} | Total Characters: ${text.length}`);

      const cleanText = text.replace(/\s+/g, ' ').trim();
      console.log(`Extractable Text: ${cleanText.length > 500 ? 'YES (Digital Text Available)' : 'SCANNED / OCR NEEDED'}`);
      console.log(`Preview: "${cleanText.slice(0, 300)}..."\n`);
    } catch (err) {
      console.error(`[ERROR] Parsing ${b.file}:`, err.message);
    }
  }
}

inspectAll();
