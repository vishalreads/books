const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const { execSync } = require('child_process');

const booksDir = path.join(__dirname, '../../Books');
const outDir = path.join(__dirname, '../../scratch/batch3_extracted');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractPDF(filePath, outName) {
  const destPath = path.join(outDir, outName);
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
    console.log(`Already exists: ${outName} (${(fs.statSync(destPath).size / 1024).toFixed(1)} KB)`);
    return;
  }
  console.log(`Starting extraction for ${outName}...`);
  try {
    const buf = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buf });
    const res = await parser.getText();
    fs.writeFileSync(destPath, res.text, 'utf-8');
    console.log(`Extracted ${outName}: ${res.total} pages, ${res.text.length} chars.`);
    await parser.destroy();
  } catch (err) {
    console.error(`Error on ${outName}:`, err.message);
  }
}

function extractEpub(filePath, folderName, outName) {
  const destPath = path.join(outDir, outName);
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
    console.log(`Already exists: ${outName}`);
    return;
  }
  console.log(`Extracting EPUB: ${outName}...`);
  const epubDir = path.join(outDir, folderName);
  if (!fs.existsSync(epubDir)) {
    fs.mkdirSync(epubDir, { recursive: true });
  }
  const zipPath = path.join(outDir, folderName + '.zip');
  fs.copyFileSync(filePath, zipPath);
  try {
    execSync(`tar -xf "${zipPath}" -C "${epubDir}"`);
  } catch (e) {
    console.error('Tar error on epub:', e.message);
  }

  function findHtml(d) {
    let res = [];
    fs.readdirSync(d).forEach(f => {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) res = res.concat(findHtml(p));
      else if (f.endsWith('.html') || f.endsWith('.xhtml')) res.push(p);
    });
    return res;
  }

  const htmlFiles = findHtml(epubDir).sort();
  let full = '';
  htmlFiles.forEach(hf => {
    const c = fs.readFileSync(hf, 'utf-8').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    full += `\n\n=== ${path.basename(hf)} ===\n` + c;
  });
  fs.writeFileSync(destPath, full, 'utf-8');
  console.log(`Saved ${outName}: ${full.length} chars.`);
}

async function run() {
  const files = fs.readdirSync(booksDir);
  for (const f of files) {
    const fullPath = path.join(booksDir, f);
    if (f.includes('Aspects of Rajput State')) {
      await extractPDF(fullPath, 'banerjee_state_society.txt');
    } else if (f.includes('lectures on rajput history')) {
      await extractPDF(fullPath, 'lectures_rajput_history.txt');
    } else if (f.includes('Marwar painting')) {
      await extractPDF(fullPath, 'crill_marwar_painting.txt');
    } else if (f.includes('Meera, Sanga and Mewar')) {
      extractEpub(fullPath, 'meera_epub', 'jafa_meera_sanga.txt');
    } else if (f.includes('Rajasthan Through the Ages')) {
      await extractPDF(fullPath, 'gupta_bakshi_chivalry.txt');
    } else if (f.includes('Rajput Military System')) {
      await extractPDF(fullPath, 'kumar_military_system.txt');
    } else if (f.includes('Rajput painting; with an introductory')) {
      await extractPDF(fullPath, 'lee_rajput_painting.txt');
    } else if (f.includes('Splendour of Rajasthani')) {
      await extractPDF(fullPath, 'neeraj_splendour_painting.txt');
    } else if (f.includes('The lay of A')) {
      await extractPDF(fullPath, 'alha_waterfield_grierson.txt');
    }
  }
  console.log('All Batch 3 extractions complete!');
}

run();
