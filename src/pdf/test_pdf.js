const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve('test_print.html');
const pdfPath = path.resolve('test_print.pdf');

fs.writeFileSync(htmlPath, `<!DOCTYPE html>
<html>
<head>
  <style>
    @page { size: A4; margin: 20mm; }
    body { font-family: Georgia, serif; font-size: 11pt; color: #000; line-height: 1.6; }
    h1 { font-size: 20pt; border-bottom: 1px solid #000; padding-bottom: 4px; }
  </style>
</head>
<body>
  <h1>Print Test: A4 Black & White Edition</h1>
  <p>This is a test of high-fidelity A4 PDF generation for physical laser printing.</p>
</body>
</html>`, 'utf8');

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;
console.log('Running cmd:', cmd);
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(pdfPath)) {
  console.log('SUCCESS! PDF generated:', pdfPath, 'Size:', fs.statSync(pdfPath).size, 'bytes');
} else {
  console.error('FAILED to generate PDF');
}
