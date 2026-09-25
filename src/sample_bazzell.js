const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function inspectBazzell() {
  const filePath = path.join(__dirname, '..', 'Books', fs.readdirSync(path.join(__dirname, '..', 'Books')).find(f => f.includes('Open Source Intelligence')));
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  const text = result.text;
  
  // Let's search for key chapters and print snippets
  const chapters = [
    'C H AP T E R 1: P repare Y our C om puter',
    'C H AP T E R 2: B usc ador',
    'C H AP T E R 3: Searc h E ng ines',
    'C H AP T E R 4: Soc ial N etworks: F ac ebook',
    'C H AP T E R 5: Soc ial N etworks: T witter',
    'C H AP T E R 6: Soc ial N etworks: O thers',
    'C H AP T E R 7: O nline C om m unities',
    'C H AP T E R 8: E m ail Addresses',
    'C H AP T E R 9: U ser N am es',
    'C H AP T E R 10: P eople Searc h',
    'C H AP T E R 11: T elephone',
    'C H AP T E R 12: O nline M aps',
    'C H AP T E R 13: D oc um ents',
    'C H AP T E R 14: P hotog raphs',
    'C H AP T E R 15: Videos',
    'C H AP T E R 16: D om ain N am es',
    'C H AP T E R 17: IP Addresses',
    'C H AP T E R 18: Governm ent R ec ords',
    'C H AP T E R 19: Software Applic ations',
    'C H AP T E R 20: Applic ation P rog ram m ing',
    'C H AP T E R 21: Android E m ulation',
    'C H AP T E R 22: R ec on-ng',
    'C H AP T E R 23: R adio F requenc y',
    'C H AP T E R 24: O SIN T W orkflow'
  ];

  let summary = [];
  for (let ch of chapters) {
    let idx = text.indexOf(ch, 15000); // after TOC
    if (idx !== -1) {
      summary.push(`=== ${ch} (pos: ${idx}) ===\n` + text.substring(idx, idx + 1500));
    } else {
      summary.push(`=== ${ch} NOT FOUND DIRECTLY ===`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'bazzell_chapters_preview.txt'), summary.join('\n\n---\n\n'), 'utf-8');
  console.log('Saved bazzell_chapters_preview.txt');
}

inspectBazzell().catch(console.error);
