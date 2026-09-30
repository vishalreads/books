const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const file = '_OceanofPDF.com_Indian_Economy_-_Sanjeev_Verma.pdf';

async function inspectSanjeevVerma() {
  const fullPath = path.join(booksDir, file);
  const buf = fs.readFileSync(fullPath);
  const parser = new PDFParse({ data: buf });
  const textResult = await parser.getText();
  await parser.destroy();
  const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
  
  console.log('Total characters:', text.length);
  const lines = text.split('\n');
  console.log('--- Chapters in Sanjeev Verma ---');
  const chs = lines.filter(l => /^(CHAPTER|Chapter|\d+\.)\s+[A-Za-z]/i.test(l.trim()));
  console.log(chs.slice(0, 50).join('\n'));
}

inspectSanjeevVerma();
