const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');

const ecoBooks = [
  { slug: 'worker-identity-hill', file: '_OceanofPDF.com_Worker_Identity_Agency_and_Economic_Development_-_Elizabeth_Hill.pdf', title: "Worker Identity, Agency and Economic Development", author: "Elizabeth Hill" },
  { slug: 'indian-economy-singhania', file: '_OceanofPDF.com_Indian_economy_-_Nitin_Singhania.pdf', title: "Indian Economy", author: "Nitin Singhania" },
  { slug: 'roman-empire-indian-ocean-mclaughlin', file: '_OceanofPDF.com_The_Roman_Empire_and_the_Indian_Ocean_The_Ancient_World_Economy_n_the_Kingdoms_of_Africa_Arabia_n_India_-_Raoul_McLaughlin.pdf', title: "The Roman Empire and the Indian Ocean", author: "Raoul McLaughlin" },
  { slug: 'ten-trillion-dream-garg', file: '_OceanofPDF.com_The_Ten_Trillion_Dream_-_Subhash_Chandra_Garg.pdf', title: "The $10 Trillion Dream", author: "Subhash Chandra Garg" },
  { slug: 'indian-economy-since-1991-prakash', file: '_OceanofPDF.com_The_Indian_Economy_Since_1991_-_BA_Prakash.pdf', title: "The Indian Economy Since 1991", author: "B.A. Prakash" },
  { slug: 'indian-economy-ramesh-singh', file: '_OceanofPDF.com_Indian_Economy_-_Ramesh_Singh.pdf', title: "Indian Economy", author: "Ramesh Singh" },
  { slug: 'indian-economy-vivek-singh', file: '_OceanofPDF.com_Indian_economy_-_Vivek_singh.pdf', title: "Indian Economy", author: "Vivek Singh" },
  { slug: 'indian-economy-key-concepts-sankarganesh', file: '_OceanofPDF.com_Indian_Economy_key_concept_by_sankarganesh_k_-_Sankarganesh_k.pdf', title: "Indian Economy: Key Concepts", author: "Sankarganesh K." },
  { slug: 'indian-economy-sanjeev-verma', file: '_OceanofPDF.com_Indian_Economy_-_Sanjeev_Verma.pdf', title: "The Indian Economy", author: "Sanjeev Verma" },
  { slug: 'unshakeable-tony-robbins', file: '_OceanofPDF.com_Unshakable_-_Tony_Robins.pdf', title: "Unshakeable", author: "Tony Robbins" }
];

async function inspectEcoBooks() {
  console.log('=== AUDITING 10 ECONOMICS BOOKS ===\n');
  const results = [];
  for (const b of ecoBooks) {
    const fullPath = path.join(booksDir, b.file);
    if (!fs.existsSync(fullPath)) {
      console.log(`[MISSING] ${b.file}`);
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
      const isDigital = text.length > 5000;
      console.log(`[${isDigital ? 'DIGITAL' : 'WARN: SCANNED'}] ${b.title} | ${b.author} (${mb} MB, ${pages} pages, ${text.length} chars)`);
      results.push({ ...b, mb, pages, chars: text.length, isDigital });
    } catch (err) {
      console.log(`[ERROR] ${b.title}: ${err.message}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'economics_audit.json'), JSON.stringify(results, null, 2), 'utf-8');
  console.log('\nAudit complete! Wrote economics_audit.json');
}

inspectEcoBooks();
