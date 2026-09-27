/**
 * Universal A4 Black & White Print PDF Generator for Intellectualist (BKRS)
 * 
 * Generates toner-friendly, high-contrast, perfectly paginated A4 monochrome
 * PDFs for each book in the library using headless Google Chrome.
 * 
 * Outputs:
 * 1. docs/distillations/<slug>/<slug>-a4-print.pdf
 * 2. docs/pdf/<slug>-a4-print.pdf (Centralized Print Depot)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { marked } = require('marked');
const metadataRegistry = require('./book_metadata');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const REPO_ROOT = path.join(__dirname, '..', '..');
const DIST_DIR = path.join(REPO_ROOT, 'docs', 'distillations');
const PDF_DEPOT = path.join(REPO_ROOT, 'docs', 'pdf');

// Ensure central PDF depot exists
if (!fs.existsSync(PDF_DEPOT)) {
  fs.mkdirSync(PDF_DEPOT, { recursive: true });
}

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: false
});

function getPageCount(pdfPath) {
  try {
    const buf = fs.readFileSync(pdfPath, 'latin1');
    const matches = buf.match(/\/Type\s*\/Page[^s]/g);
    return matches ? matches.length : '?';
  } catch (e) {
    return '?';
  }
}

function buildPrintHtml(meta, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${meta.title} — A4 Print Edition</title>
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
      line-height: 1.53;
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
      margin-bottom: 5pt;
    }

    .doc-title {
      font-size: 21pt;
      font-weight: 700;
      line-height: 1.18;
      color: #000000;
      margin: 0 0 5pt 0;
      letter-spacing: -0.01em;
    }

    .doc-subtitle {
      font-size: 11pt;
      font-style: italic;
      color: #333333;
      margin-bottom: 10pt;
      line-height: 1.35;
    }

    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 16pt;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      color: #444444;
      border-top: 0.5pt solid #cccccc;
      padding-top: 6pt;
    }

    .meta-bar strong {
      color: #111111;
    }

    /* Headings */
    h1 {
      font-size: 18pt;
      font-weight: 700;
      line-height: 1.2;
      color: #000000;
      margin: 22pt 0 6pt 0;
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
    <div class="doc-title">${meta.title}</div>
    <div class="doc-subtitle">${meta.author}${meta.subtitle ? ' · ' + meta.subtitle : ''}</div>
    <div class="meta-bar">
      <div><strong>Category:</strong> ${meta.category || 'Master Codex'}</div>
      <div><strong>Format:</strong> ISO A4 Monochrome (Toner-Optimized)</div>
      <div><strong>Fidelity:</strong> 100% Replacement Grade</div>
      <div><strong>Engine:</strong> BKRS v2.0 Production Standard</div>
    </div>
  </header>

  <main>
    ${bodyHtml}
  </main>

</body>
</html>`;
}

function generatePdfForBook(slug) {
  const bookDir = path.join(DIST_DIR, slug);
  const mdPath = path.join(bookDir, 'master-notes.md');

  if (!fs.existsSync(mdPath)) {
    console.warn(`[SKIP] No master-notes.md found for: ${slug}`);
    return null;
  }

  const meta = metadataRegistry[slug] || {
    title: slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    author: 'BKRS Master',
    subtitle: '',
    category: 'Master Distillation'
  };

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const bodyHtml = marked.parse(mdContent);
  const fullHtml = buildPrintHtml(meta, bodyHtml);

  const tempHtml = path.join(bookDir, `temp_print_${Date.now()}.html`);
  const localPdf = path.join(bookDir, `${slug}-a4-print.pdf`);
  const depotPdf = path.join(PDF_DEPOT, `${slug}-a4-print.pdf`);

  fs.writeFileSync(tempHtml, fullHtml, 'utf8');

  const safeTitle = meta.title.replace(/"/g, "'");
  const safeAuthor = meta.author.replace(/"/g, "'");

  const headerHtml = `<div style="font-size:7.5pt;font-family:Georgia,serif;color:#555;width:100%;text-align:center;text-transform:uppercase;letter-spacing:1px;margin:0 18mm;border-bottom:0.5pt solid #888;padding-bottom:1.5mm;">${safeAuthor} · ${safeTitle} (BKRS Master Print Edition)</div>`;
  const footerHtml = `<div style="font-size:8pt;font-family:Georgia,serif;color:#444;width:100%;text-align:center;margin:0 18mm;border-top:0.5pt solid #888;padding-top:1.5mm;">— <span class="pageNumber"></span> —</div>`;

  const cmd = `"${CHROME_PATH}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${localPdf}" --print-to-pdf-no-header --display-header-footer --header-template="${headerHtml.replace(/"/g, '\\"')}" --footer-template="${footerHtml.replace(/"/g, '\\"')}" "file:///${tempHtml.replace(/\\/g, '/')}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
    // Copy to central depot
    fs.copyFileSync(localPdf, depotPdf);

    const sizeBytes = fs.statSync(localPdf).size;
    const pageCount = getPageCount(localPdf);

    return {
      slug,
      title: meta.title,
      author: meta.author,
      pages: pageCount,
      sizeKb: (sizeBytes / 1024).toFixed(1),
      localPath: localPdf,
      depotPath: depotPdf
    };
  } catch (err) {
    console.error(`[ERROR] Failed to generate PDF for ${slug}:`, err.message);
    return null;
  } finally {
    if (fs.existsSync(tempHtml)) {
      try { fs.unlinkSync(tempHtml); } catch (e) {}
    }
  }
}

// Main execution
const targetSlugs = process.argv.slice(2);

let queue = [];
if (targetSlugs.length > 0) {
  queue = targetSlugs;
} else {
  // Process all keys in metadataRegistry, or all directories in distillations
  const allDirs = fs.readdirSync(DIST_DIR).filter(d => fs.statSync(path.join(DIST_DIR, d)).isDirectory());
  // Sort priority: metadata keys first in order, then any extras
  const metaKeys = Object.keys(metadataRegistry);
  const extras = allDirs.filter(d => !metaKeys.includes(d));
  queue = [...metaKeys, ...extras];
}

console.log("================================================================================");
console.log("  BKRS UNIVERSAL A4 BLACK & WHITE PRINT PDF GENERATION ENGINE");
console.log(`  Queue Size: ${queue.length} Books | Output Format: ISO A4 Grayscale`);
console.log("================================================================================\n");

const startTime = Date.now();
const results = [];

queue.forEach((slug, idx) => {
  const label = `[${idx + 1}/${queue.length}] ${slug}`;
  process.stdout.write(`>>> ${label.padEnd(52, ' ')} ... `);
  const t0 = Date.now();
  const res = generatePdfForBook(slug);
  const dt = ((Date.now() - t0) / 1000).toFixed(1);

  if (res) {
    console.log(`OK (${res.pages} pgs, ${res.sizeKb} KB, ${dt}s)`);
    results.push(res);
  } else {
    console.log(`FAILED / SKIPPED (${dt}s)`);
  }
});

const totalElapsed = ((Date.now() - startTime) / 1000).toFixed(1);

console.log("\n================================================================================");
console.log(`  GENERATION COMPLETE IN ${totalElapsed}s`);
console.log(`  Successfully Generated: ${results.length} / ${queue.length} A4 Print PDFs`);
console.log("================================================================================\n");

console.table(results.map(r => ({
  Book: r.title,
  Author: r.author,
  Pages: r.pages,
  'Size (KB)': r.sizeKb
})));
