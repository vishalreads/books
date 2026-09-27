const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { marked } = require('marked');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const slug = 'the-great-gatsby';
const bookDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
const mdPath = path.join(bookDir, 'master-notes.md');

if (!fs.existsSync(mdPath)) {
  console.error(`Master notes not found: ${mdPath}`);
  process.exit(1);
}

const mdContent = fs.readFileSync(mdPath, 'utf8');
const bodyHtml = marked.parse(mdContent);

const title = 'The Great Gatsby';
const author = 'F. Scott Fitzgerald';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} — A4 Print Edition</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 20mm 18mm 20mm 18mm;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      background: #ffffff;
      color: #111111;
      font-family: Georgia, 'EB Garamond', 'Times New Roman', serif;
      font-size: 10pt;
      line-height: 1.54;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* Front Matter Cover Kicker */
    .print-header {
      border-bottom: 2pt solid #111111;
      padding-bottom: 12pt;
      margin-bottom: 18pt;
    }

    .kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 4pt;
    }

    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14pt;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      color: #444444;
      border-top: 0.5pt solid #cccccc;
      padding-top: 6pt;
      margin-top: 10pt;
    }

    .meta-bar strong {
      color: #111111;
    }

    /* Headings */
    h1 {
      font-size: 20pt;
      font-weight: 700;
      line-height: 1.2;
      color: #000000;
      margin: 0 0 6pt 0;
      letter-spacing: -0.01em;
      break-after: avoid;
      page-break-after: avoid;
    }

    h2 {
      font-size: 13pt;
      font-weight: 700;
      line-height: 1.25;
      color: #000000;
      border-bottom: 0.75pt solid #222222;
      padding-bottom: 3pt;
      margin: 18pt 0 8pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-size: 11pt;
      font-weight: 700;
      line-height: 1.3;
      color: #111111;
      margin: 12pt 0 5pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h4 {
      font-size: 10pt;
      font-weight: 700;
      line-height: 1.35;
      color: #222222;
      margin: 10pt 0 4pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 7.5pt 0;
      text-align: justify;
      text-justify: inter-word;
      hyphens: auto;
    }

    /* Callouts & Quotes */
    blockquote {
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 9pt 0;
      padding: 6pt 12pt;
      border-left: 2.5pt solid #111111;
      font-style: italic;
      color: #222222;
      background: #ffffff;
      line-height: 1.48;
    }

    blockquote p {
      margin-bottom: 4pt;
    }

    blockquote p:last-child {
      margin-bottom: 0;
    }

    /* Code Blocks / ASCII Models */
    pre {
      break-inside: avoid;
      page-break-inside: avoid;
      font-family: "Courier New", Courier, monospace;
      font-size: 8pt;
      line-height: 1.35;
      border: 0.5pt solid #555555;
      padding: 6pt 8pt;
      background: #fafafa;
      color: #000000;
      white-space: pre-wrap;
      word-break: break-all;
      margin: 8pt 0;
    }

    code {
      font-family: "Courier New", Courier, monospace;
      font-size: 8.5pt;
      color: #111111;
      background: #f4f4f4;
      padding: 1pt 3pt;
      border-radius: 2pt;
    }

    pre code {
      background: transparent;
      padding: 0;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10pt 0;
      break-inside: avoid;
      page-break-inside: avoid;
      font-size: 8.5pt;
      line-height: 1.4;
    }

    th, td {
      border: 0.5pt solid #444444;
      padding: 4pt 6pt;
      text-align: left;
      vertical-align: top;
    }

    th {
      font-weight: 700;
      background: #f2f2f2;
      border-bottom: 1pt solid #111111;
      color: #000000;
    }

    /* Lists */
    ul, ol {
      margin: 0 0 8pt 0;
      padding-left: 18pt;
    }

    li {
      margin-bottom: 3.5pt;
      text-align: justify;
    }

    hr {
      border: none;
      border-top: 0.5pt solid #888888;
      margin: 14pt 0;
    }

    a {
      color: #111111;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <header class="print-header">
    <div class="kicker">BKRS Master Distillation · A4 Black &amp; White Print Edition</div>
    <div class="meta-bar">
      <div><strong>Title:</strong> ${title}</div>
      <div><strong>Author:</strong> ${author}</div>
      <div><strong>Format:</strong> ISO A4 Monochrome (Ink &amp; Toner Optimized)</div>
      <div><strong>Fidelity:</strong> 100% Replacement Grade</div>
    </div>
  </header>

  <main>
    ${bodyHtml}
  </main>

</body>
</html>`;

const tempHtml = path.join(bookDir, 'print_temp.html');
const outPdf = path.join(bookDir, `${slug}-a4-print.pdf`);

fs.writeFileSync(tempHtml, htmlContent, 'utf8');

const headerHtml = `<div style="font-size:7.5pt;font-family:Georgia,serif;color:#555;width:100%;text-align:center;text-transform:uppercase;letter-spacing:1px;margin:0 18mm;border-bottom:0.5pt solid #888;padding-bottom:1.5mm;">${author} · ${title} (BKRS Master Print Edition)</div>`;
const footerHtml = `<div style="font-size:8pt;font-family:Georgia,serif;color:#444;width:100%;text-align:center;margin:0 18mm;border-top:0.5pt solid #888;padding-top:1.5mm;">— <span class="pageNumber"></span> —</div>`;

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outPdf}" --print-to-pdf-no-header --display-header-footer --header-template="${headerHtml.replace(/"/g, '\\"')}" --footer-template="${footerHtml.replace(/"/g, '\\"')}" "file:///${tempHtml.replace(/\\/g, '/')}"`;

console.log(`Generating A4 PDF for ${title}...`);
execSync(cmd);

if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);

const stat = fs.statSync(outPdf);
console.log(`SUCCESS: ${outPdf} (${(stat.size / 1024).toFixed(1)} KB)`);
