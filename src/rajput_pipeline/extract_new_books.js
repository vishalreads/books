const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '../../scratch/new_rajput_extracted');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractPDF(pdfPath, outTxtPath) {
  console.log(`Extracting: ${path.basename(pdfPath)}...`);
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    fs.writeFileSync(outTxtPath, data.text, 'utf-8');
    console.log(`Saved: ${outTxtPath} (${data.numpages} pages, ${data.text.length} chars)`);
  } catch (err) {
    console.error(`Error extracting ${pdfPath}:`, err.message);
  }
}

async function run() {
  const booksDir = path.join(__dirname, '../../Books');
  const files = fs.readdirSync(booksDir);

  for (const f of files) {
    const fullPath = path.join(booksDir, f);
    if (f.endsWith('.pdf')) {
      let outName = '';
      if (f.includes('HIMALAYAN')) outName = 'moran_himalayan.txt';
      else if (f.includes('Aitken')) outName = 'aitken_painting.txt';
      else if (f.includes('Faber Gallery')) outName = 'gray_faber_painting.txt';
      else if (f.includes('Ulian')) outName = 'ulian_rajput.txt';
      else if (f.includes('Harlan')) outName = 'harlan_religion.txt';
      else if (f.includes('Hallissey')) outName = 'hallissey_rebellion.txt';
      
      if (outName) {
        const outTxt = path.join(outDir, outName);
        if (!fs.existsSync(outTxt)) {
          await extractPDF(fullPath, outTxt);
        } else {
          console.log(`Already extracted: ${outName}`);
        }
      }
    } else if (f.endsWith('.epub')) {
      console.log(`Extracting EPUB: ${f}`);
      const epubUnzipDir = path.join(outDir, 'sreenivasan_epub');
      if (!fs.existsSync(epubUnzipDir)) {
        fs.mkdirSync(epubUnzipDir, { recursive: true });
        execSync(`powershell -command "Expand-Archive -Path '${fullPath}' -DestinationPath '${epubUnzipDir}' -Force"`);
        console.log(`Expanded EPUB to ${epubUnzipDir}`);
      }
    }
  }
  console.log('Extraction pass complete!');
}

run();
