const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const file = '_OceanofPDF.com_Indian_Economy_key_concept_by_sankarganesh_k_-_Sankarganesh_k.pdf';

async function inspectSankarganesh() {
  const fullPath = path.join(booksDir, file);
  const buf = fs.readFileSync(fullPath);
  const parser = new PDFParse({ data: buf });
  const textResult = await parser.getText();
  await parser.destroy();
  const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
  
  console.log('Total characters:', text.length);
  // Find Table of contents or Chapters
  const lines = text.split('\n');
  console.log('--- Scanning for Chapters / Sections ---');
  const chapterLines = lines.filter(l => /^(Chapter|Part|CHAPTER|PART|\d+\.)\s+[A-Za-z]/i.test(l.trim()));
  console.log(chapterLines.slice(0, 40).join('\n'));
}

inspectSankarganesh();
