const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function getTOC() {
  const dir = path.join(__dirname, '..', 'Books');
  const files = fs.readdirSync(dir);
  const bazzellFile = files.find(f => f.includes('Open Source Intelligence Techniques'));
  const shannonFile = files.find(f => f.includes("Don't Bug Me"));

  console.log('Extracting Bazzell TOC...');
  const bazzellBuf = fs.readFileSync(path.join(dir, bazzellFile));
  const bazzellParser = new PDFParse({ data: bazzellBuf });
  const bazzellResult = await bazzellParser.getText();
  const bazzellText = bazzellResult.text;
  
  const bazzellContentsStart = bazzellText.indexOf('C o n t e n t s');
  const bazzellTOC = bazzellText.substring(bazzellContentsStart, bazzellContentsStart + 22000);
  fs.writeFileSync(path.join(__dirname, 'bazzell_toc.txt'), bazzellTOC, 'utf-8');
  console.log('Saved bazzell_toc.txt');

  console.log('Extracting Shannon TOC...');
  const shannonBuf = fs.readFileSync(path.join(dir, shannonFile));
  const shannonParser = new PDFParse({ data: shannonBuf });
  const shannonResult = await shannonParser.getText();
  const shannonText = shannonResult.text;
  
  const shannonContentsStart = shannonText.indexOf('Contents');
  const shannonTOC = shannonText.substring(shannonContentsStart, shannonContentsStart + 10000);
  fs.writeFileSync(path.join(__dirname, 'shannon_toc.txt'), shannonTOC, 'utf-8');
  console.log('Saved shannon_toc.txt');
}

getTOC().catch(console.error);
