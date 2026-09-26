const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const { execSync } = require('child_process');

const booksDir = path.join(__dirname, '../../Books');
const outDir = path.join(__dirname, '../../scratch/new_rajput_extracted');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractPDF(filePath, outName) {
  const destPath = path.join(outDir, outName);
  if (fs.existsSync(destPath)) {
    console.log(`Already exists: ${outName}`);
    return;
  }
  console.log(`Processing PDF: ${outName}...`);
  try {
    const buf = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buf });
    const res = await parser.getText();
    fs.writeFileSync(destPath, res.text, 'utf-8');
    console.log(`Successfully extracted ${outName}: ${res.total} pages, ${res.text.length} characters.`);
    await parser.destroy();
  } catch (err) {
    console.error(`Error on ${outName}:`, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(booksDir);
  console.log('Books in directory:', files.length);

  for (const f of files) {
    const fullPath = path.join(booksDir, f);
    if (f.endsWith('.pdf')) {
      if (f.includes('HIMALAYAN')) {
        await extractPDF(fullPath, 'moran_himalayan.txt');
      } else if (f.includes('Aitken')) {
        await extractPDF(fullPath, 'aitken_painting.txt');
      } else if (f.includes('Faber Gallery')) {
        await extractPDF(fullPath, 'gray_faber_painting.txt');
      } else if (f.includes('Ulian')) {
        await extractPDF(fullPath, 'ulian_rajput.txt');
      } else if (f.includes('Harlan')) {
        await extractPDF(fullPath, 'harlan_religion.txt');
      } else if (f.includes('Hallissey')) {
        await extractPDF(fullPath, 'hallissey_rebellion.txt');
      }
    } else if (f.endsWith('.epub')) {
      console.log('Found EPUB:', f);
      // Copy to short name in scratch
      const shortEpub = path.join(outDir, 'sreenivasan.zip');
      fs.copyFileSync(fullPath, shortEpub);
      const epubUnpackDir = path.join(outDir, 'sreenivasan_epub');
      if (!fs.existsSync(epubUnpackDir)) {
        fs.mkdirSync(epubUnpackDir, { recursive: true });
      }
      try {
        execSync(`powershell -command "Expand-Archive -LiteralPath '${shortEpub}' -DestinationPath '${epubUnpackDir}' -Force"`);
        console.log('Successfully expanded sreenivasan.zip');
      } catch (err) {
        console.error('Error expanding EPUB:', err.message);
      }
    }
  }

  // Parse HTML/XHTML files from sreenivasan_epub if extracted
  const epubUnpackDir = path.join(outDir, 'sreenivasan_epub');
  if (fs.existsSync(epubUnpackDir)) {
    function findHtmlFiles(dir) {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat && stat.isDirectory()) {
          results = results.concat(findHtmlFiles(full));
        } else if (file.endsWith('.html') || file.endsWith('.xhtml')) {
          results.push(full);
        }
      });
      return results;
    }

    const htmlFiles = findHtmlFiles(epubUnpackDir);
    console.log(`Found ${htmlFiles.length} chapter files in Sreenivasan EPUB.`);
    let fullText = '';
    htmlFiles.sort().forEach(hf => {
      const content = fs.readFileSync(hf, 'utf-8');
      const clean = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      fullText += `\n\n--- FILE: ${path.basename(hf)} ---\n` + clean;
    });
    fs.writeFileSync(path.join(outDir, 'sreenivasan_padmini.txt'), fullText, 'utf-8');
    console.log(`Saved sreenivasan_padmini.txt (${fullText.length} chars).`);
  }
}

main();
