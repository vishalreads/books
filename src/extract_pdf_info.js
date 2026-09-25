const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function inspectPdf(filename, maxPages = 20) {
  const filePath = path.join(__dirname, '..', 'Books', filename);
  console.log(`Loading ${filename}...`);
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({ data: buffer });
  
  // Let's get page count or total text
  const textResult = await parser.getText();
  console.log(`Total characters: ${textResult.text.length}`);
  
  // Find Table of Contents or first 5000 characters
  console.log('--- FIRST 3000 CHARACTERS ---');
  console.log(textResult.text.substring(0, 3000));
}

async function run() {
  const files = fs.readdirSync(path.join(__dirname, '..', 'Books'));
  const bazzell = files.find(f => f.includes('Open Source Intelligence Techniques'));
  const shannon = files.find(f => f.includes("Don't Bug Me"));
  
  console.log('Bazzell file:', bazzell);
  console.log('Shannon file:', shannon);

  if (bazzell) {
    console.log('=== BAZZELL ===');
    await inspectPdf(bazzell);
  }
}

run().catch(console.error);
