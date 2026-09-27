const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const testHtml = path.resolve('test_hf.html');
const testPdf = path.resolve('test_hf.pdf');

fs.writeFileSync(testHtml, `<!DOCTYPE html>
<html>
<head>
  <style>
    @page { size: A4; margin: 25mm 20mm 25mm 20mm; }
    body { font-family: Georgia, serif; font-size: 11pt; line-height: 1.6; color: #111; }
    h1 { font-size: 22pt; margin-bottom: 8pt; }
    p { margin-bottom: 12pt; text-align: justify; }
    .page-break { page-break-after: always; }
  </style>
</head>
<body>
  <h1>The Great Gatsby: Master Notes</h1>
  <p>Page 1 content for print testing. Checking running headers and footers.</p>
  <div class="page-break"></div>
  <h1>Chapter 2: The Valley of Ashes</h1>
  <p>Page 2 content for print testing. Checking page numbering.</p>
</body>
</html>`, 'utf8');

const header = '<div style="font-size:8pt;font-family:Georgia,serif;color:#555;width:100%;text-align:center;text-transform:uppercase;letter-spacing:1px;margin:0 20mm;border-bottom:0.5pt solid #bbb;padding-bottom:2mm;">F. Scott Fitzgerald · The Great Gatsby (BKRS Codex)</div>';
const footer = '<div style="font-size:8.5pt;font-family:Georgia,serif;color:#444;width:100%;text-align:center;margin:0 20mm;border-top:0.5pt solid #bbb;padding-top:2mm;">— <span class="pageNumber"></span> —</div>';

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${testPdf}" --print-to-pdf-no-header --display-header-footer --header-template="${header.replace(/"/g, '\\"')}" --footer-template="${footer.replace(/"/g, '\\"')}" "file:///${testHtml.replace(/\\/g, '/')}"`;

console.log('Running Chrome print command...');
execSync(cmd);
console.log('Generated test_hf.pdf:', fs.existsSync(testPdf), 'Size:', fs.statSync(testPdf).size, 'bytes');
