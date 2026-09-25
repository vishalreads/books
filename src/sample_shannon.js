const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function inspectShannon() {
  const filePath = path.join(__dirname, '..', 'Books', fs.readdirSync(path.join(__dirname, '..', 'Books')).find(f => f.includes("Don't Bug Me")));
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  const text = result.text;
  
  const parts = [
    'PART & TNSTDE DWTCES',
    'PART I',
    'PART II: TELEPIIOI\\E',
    'PART II',
    'PART III: FII\\DING',
    'PART III',
    'PARTIV: OUISIDE',
    'PART IV',
    'PAaT Ys COMPUIER',
    'PART V',
    'PART Vb VIDEO',
    'PART VI',
    'PARTVtr:(}III3R',
    'PART VII',
    'PART VIII: PREVENTING',
    'PART VIII',
    'PARTDS OBIAII\\ING',
    'PART IX',
    'PARTIG USING',
    'PART X'
  ];

  let snippets = [];
  for (let p of parts) {
    let idx = text.indexOf(p, 5000);
    if (idx !== -1) {
      snippets.push(`=== ${p} (pos: ${idx}) ===\n` + text.substring(idx, idx + 1500));
    }
  }
  fs.writeFileSync(path.join(__dirname, 'shannon_parts_preview.txt'), snippets.join('\n\n---\n\n'), 'utf-8');
  console.log('Saved shannon_parts_preview.txt');
}

inspectShannon().catch(console.error);
