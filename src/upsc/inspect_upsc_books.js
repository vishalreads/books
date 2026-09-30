const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const outDir = path.join(__dirname, '..', '..', 'src', 'upsc');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function auditBooks() {
  const allFiles = fs.readdirSync(booksDir).filter(f => f.endsWith('.pdf'));
  console.log(`Found ${allFiles.length} PDF books in ${booksDir}`);

  const results = [];

  for (const file of allFiles) {
    const filePath = path.join(booksDir, file);
    const stats = fs.statSync(filePath);
    const mb = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`Auditing: ${file} (${mb} MB)...`);

    try {
      const buf = fs.readFileSync(filePath);
      const parser = new PDFParse({ data: buf });
      const textResult = await parser.getText();
      const infoResult = await parser.getInfo();
      await parser.destroy();

      const text = typeof textResult === 'string' ? textResult : (textResult.text || '');
      const pages = infoResult.total || infoResult.numPages || textResult.totalPages || '?';
      const isDigital = text.length > 5000;

      console.log(`  -> [${isDigital ? 'DIGITAL' : 'WARN: SCANNED'}] Pages: ${pages}, Chars: ${text.length}`);

      results.push({
        filename: file,
        sizeMb: mb,
        pages: pages,
        totalChars: text.length,
        isDigitalText: isDigital,
        sampleSnippet: text.slice(0, 1500).replace(/\s+/g, ' ')
      });
    } catch (err) {
      console.error(`  -> Error reading ${file}:`, err.message);
      results.push({
        filename: file,
        sizeMb: mb,
        error: err.message
      });
    }
  }

  fs.writeFileSync(path.join(outDir, 'upsc_audit.json'), JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nAudit complete! Saved to src/upsc/upsc_audit.json`);
}

auditBooks();
