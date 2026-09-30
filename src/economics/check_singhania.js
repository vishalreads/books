const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const file = '_OceanofPDF.com_Indian_economy_-_Nitin_Singhania.pdf';

async function checkSinghania() {
  const fullPath = path.join(booksDir, file);
  const buf = fs.readFileSync(fullPath);
  const parser = new PDFParse({ data: buf });
  const textResult = await parser.getText();
  await parser.destroy();
  const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
  console.log('Total text length:', text.length);
  console.log('Sample text:\n', text.slice(0, 3000));
}

checkSinghania();
