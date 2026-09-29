const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

const testCohort = [
  { slug: 'the-book-of-neptune-forrest', file: '_OceanofPDF.com_The_Book_of_Neptune_-_Steven_Forrest.pdf', title: 'The Book of Neptune', author: 'Steven Forrest' },
  { slug: 'skymates-2-composite-forrest', file: '_OceanofPDF.com_Skymates_II_The_Composite_Chart_-_Steven_Forrest.pdf', title: 'Skymates II: The Composite Chart', author: 'Steven Forrest' },
  { slug: 'scientific-basis-of-astrology-seymour', file: '_OceanofPDF.com_The_Scientific_Basis_of_Astrology_-_Percy_Seymour.pdf', title: 'The Scientific Basis of Astrology', author: 'Dr. Percy Seymour' },
  { slug: 'midlife-is-not-a-crisis-bell', file: '_OceanofPDF.com_Midlife_Is_Not_a_Crisis_Using_Astrology_to_Thrive_in_the_Second_Half_of_Life_-_Virginia_Bell.pdf', title: 'Midlife Is Not a Crisis', author: 'Virginia Bell' },
  { slug: 'your-place-among-the-stars-adams', file: '_OceanofPDF.com_Astrology_Your_Place_Among_the_Stars_-_Evangeline_Adams.pdf', title: 'Astrology: Your Place Among the Stars', author: 'Evangeline Adams' },
  { slug: 'complete-astrological-writings-crowley', file: '_OceanofPDF.com_The_Complete_Astrological_Writings_-_Aleister_Crowley.pdf', title: 'The Complete Astrological Writings', author: 'Aleister Crowley' }
];

async function inspectTestCohort() {
  console.log('=== INSPECTING COHORT 2 ===');
  for (const b of testCohort) {
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
      const clean = text.replace(/\s+/g, ' ').trim();
      console.log('--------------------------------------------------');
      console.log(`${b.title} by ${b.author} (${mb} MB, ${pages} pages)`);
      console.log(`Total characters: ${text.length} | Digital text: ${clean.length > 500 ? 'YES' : 'SCANNED'}`);
      console.log(`Preview: "${clean.slice(0, 200)}..."`);
    } catch (err) {
      console.error(`Error on ${b.file}:`, err.message);
    }
  }
}

inspectTestCohort();
