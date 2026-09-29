const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

const cohort = [
  { slug: 'prometheus-tarnas', file: '_OceanofPDF.com_Prometheus_the_Awakener_-_Richard_Tarnas.pdf', title: 'Prometheus the Awakener', author: 'Richard Tarnas' },
  { slug: 'horoscope-in-manifestation-greene', file: '_OceanofPDF.com_The_Horoscope_in_Manifestation_-_Liz_Greene.pdf', title: 'The Horoscope in Manifestation', author: 'Liz Greene' },
  { slug: 'planets-in-aspect-pelletier', file: '_OceanofPDF.com_Planets_in_Aspect_Understanding_Your_Inner_Dynamics_-_Robert_Pelletier.pdf', title: 'Planets in Aspect', author: 'Robert Pelletier' },
  { slug: 'art-of-chart-interpretation-marks', file: '_OceanofPDF.com_The_Art_of_Chart_Interpretation_-_Tracy_Marks.pdf', title: 'The Art of Chart Interpretation', author: 'Tracy Marks' },
  { slug: 'your-secret-self-marks', file: '_OceanofPDF.com_Your_Secret_Self_-_Tracy_Marks.pdf', title: 'Your Secret Self: Illuminating the Twelfth House', author: 'Tracy Marks' },
  { slug: 'accurate-predictive-methodology-taneja', file: '_OceanofPDF.com_Accurate_Predictive_Methodology_-_Umang_Taneja.pdf', title: 'Accurate Predictive Methodology', author: 'Umang Taneja' }
];

async function inspectCohort() {
  console.log('================================================================================');
  console.log('  INSPECTING COHORT 1 (6 BOOKS FOR NEXT DISTILLATION)');
  console.log('================================================================================\n');

  for (const b of cohort) {
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

inspectCohort();
