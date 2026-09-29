const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

const cohort3 = [
  { slug: 'astrology-light-side-brain-gallagher', file: '_OceanofPDF.com_Astrology_for_the_Light_Side_of_the_Brain_-_Kim_Rogers-Gallagher.pdf', title: 'Astrology for the Light Side of the Brain', author: 'Kim Rogers-Gallagher' },
  { slug: 'making-the-gods-work-for-you-casey', file: '_OceanofPDF.com_Making_the_gods_work_for_you_-_Caroline_W_Casey.pdf', title: 'Making the Gods Work for You', author: 'Caroline W. Casey' },
  { slug: 'use-your-planets-wisely-freed', file: '_OceanofPDF.com_Use_your_planets_wisely_-_Jennifer_Freed.pdf', title: 'Use Your Planets Wisely', author: 'Dr. Jennifer Freed' }
];

async function inspectCohort3() {
  console.log('=== INSPECTING COHORT 3 (BOOKS 4, 5, 6) ===');
  for (const b of cohort3) {
    const fullPath = path.join(booksDir, b.file);
    if (!fs.existsSync(fullPath)) {
      console.log('[MISSING]', b.file);
      continue;
    }
    const stat = fs.statSync(fullPath);
    const mb = (stat.size / 1024 / 1024).toFixed(2);
    try {
      const buf = fs.readFileSync(fullPath);
      const parser = new PDFParse({ data: buf });
      const textResult = await parser.getText();
      const infoResult = await parser.getInfo();
      await parser.destroy();
      const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
      const pages = infoResult.total || infoResult.numPages || textResult.totalPages || '?';
      console.log('==================================================');
      console.log(`${b.title} by ${b.author} (${mb} MB, ${pages} pages)`);
      console.log(`Total chars: ${text.length}`);
      
      // Look for Table of Contents or search for Chapter / Contents
      const lower = text.toLowerCase();
      let tocIdx = lower.indexOf('contents');
      if (tocIdx !== -1) {
        console.log('\n--- CONTENTS SNIPPET ---');
        console.log(text.slice(tocIdx, tocIdx + 2000).replace(/\r?\n\s*\r?\n/g, '\n'));
      } else {
        console.log('\n--- FIRST 2000 CHARS ---');
        console.log(text.slice(0, 2000).replace(/\r?\n\s*\r?\n/g, '\n'));
      }
    } catch (err) {
      console.error(`Error on ${b.file}:`, err.message);
    }
  }
}

inspectCohort3();
