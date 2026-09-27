const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const gatsbyDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-great-gatsby');
const units = JSON.parse(fs.readFileSync(path.join(gatsbyDir, 'knowledge-units.json'), 'utf8'));

console.log(`Loaded ${units.length} units for Gatsby.`);

function buildPrintHtml(title, author, subtitle, units) {
  const unitHtml = units.map(u => {
    const num = u.chapter_number || u.unit_number || u.unit_id;
    const scope = u.scope || u.book_part || '';
    const epistemic = u.epistemic_status || '';
    const materiality = u.materiality || '';
    const core = u.core_theme || u.core_insight || '';
    const analysis = u.textual_analysis || u.key_experiences || [];
    const quote = u.verbatim_quote || '';
    const heuristic = u.operational_heuristic || u.operational_heuristics || '';
    const motifs = u.key_motifs || u.primary_figures || [];

    const paragraphs = Array.isArray(analysis) 
      ? analysis.map(p => `<p>${p}</p>`).join('\n')
      : `<p>${analysis}</p>`;

    return `
      <section class="unit-section">
        <div class="unit-header">
          <div class="unit-tag-row">
            <span class="tag tag-bold">UNIT ${num}</span>
            ${scope ? `<span class="tag">${scope}</span>` : ''}
            ${epistemic ? `<span class="tag">${epistemic}</span>` : ''}
            ${materiality ? `<span class="tag tag-right">${materiality}</span>` : ''}
          </div>
          <h2 class="unit-title">${u.title}</h2>
          ${core ? `<div class="unit-core"><strong>Core Insight:</strong> ${core}</div>` : ''}
        </div>

        <div class="unit-body">
          ${paragraphs}
        </div>

        ${quote ? `
          <blockquote class="quote-box">
            “${quote.replace(/^“|”$/g, '')}”
          </blockquote>
        ` : ''}

        ${heuristic ? `
          <div class="heuristic-box">
            <div class="heuristic-label">OPERATIONAL HEURISTIC</div>
            <div class="heuristic-text">${heuristic}</div>
          </div>
        ` : ''}

        ${motifs.length ? `
          <div class="motifs-row">
            <strong>Key Motifs:</strong> ${motifs.join(' · ')}
          </div>
        ` : ''}
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} — A4 Print Edition</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 22mm 18mm 22mm 18mm;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    body {
      background: #ffffff;
      color: #111111;
      font-family: Georgia, 'EB Garamond', 'Times New Roman', serif;
      font-size: 10.5pt;
      line-height: 1.58;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* Cover / Front Matter */
    .front-matter {
      border-bottom: 2pt solid #111111;
      padding-bottom: 16pt;
      margin-bottom: 22pt;
    }

    .doc-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 6pt;
    }

    .doc-title {
      font-size: 22pt;
      font-weight: 700;
      line-height: 1.15;
      margin: 0 0 6pt 0;
      color: #000000;
      letter-spacing: -0.01em;
    }

    .doc-subtitle {
      font-size: 11pt;
      font-style: italic;
      color: #333333;
      margin-bottom: 12pt;
    }

    .meta-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16pt;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8.5pt;
      color: #444444;
      border-top: 0.5pt solid #cccccc;
      padding-top: 8pt;
    }

    .meta-item strong {
      color: #000000;
    }

    /* Unit Section */
    .unit-section {
      margin-bottom: 24pt;
      padding-bottom: 18pt;
      border-bottom: 0.5pt solid #dddddd;
    }

    .unit-header {
      break-after: avoid;
      page-break-after: avoid;
      margin-bottom: 10pt;
    }

    .unit-tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 5pt;
      align-items: center;
      margin-bottom: 6pt;
    }

    .tag {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 1.5pt 5pt;
      border: 0.75pt solid #333333;
      color: #111111;
      background: #ffffff;
      border-radius: 2pt;
    }

    .tag-bold {
      background: #111111;
      color: #ffffff;
      border-color: #111111;
    }

    .tag-right {
      margin-left: auto;
    }

    .unit-title {
      font-size: 14pt;
      font-weight: 700;
      line-height: 1.25;
      margin: 4pt 0 6pt 0;
      color: #000000;
      break-after: avoid;
      page-break-after: avoid;
    }

    .unit-core {
      font-size: 10pt;
      font-style: italic;
      color: #222222;
      border-left: 2pt solid #444444;
      padding-left: 8pt;
      margin: 6pt 0 10pt 0;
      line-height: 1.45;
    }

    .unit-body p {
      margin: 0 0 8pt 0;
      text-align: justify;
      text-justify: inter-word;
    }

    /* Callout: Quote */
    .quote-box {
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 10pt 0;
      padding: 6pt 12pt;
      border-left: 2.5pt solid #111111;
      font-style: italic;
      font-size: 10pt;
      color: #222222;
      background: #ffffff;
      line-height: 1.5;
    }

    /* Callout: Heuristic */
    .heuristic-box {
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 10pt 0;
      padding: 8pt 10pt;
      border: 0.75pt solid #333333;
      border-left: 3pt solid #111111;
      background: #ffffff;
    }

    .heuristic-label {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #111111;
      margin-bottom: 2pt;
    }

    .heuristic-text {
      font-size: 9.5pt;
      line-height: 1.45;
      color: #111111;
    }

    .motifs-row {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      color: #444444;
      margin-top: 8pt;
    }

    h1, h2, h3 {
      break-after: avoid;
      page-break-after: avoid;
    }
  </style>
</head>
<body>

  <!-- FRONT MATTER -->
  <header class="front-matter">
    <div class="doc-kicker">BKRS Master Distillation · A4 Print Edition</div>
    <h1 class="doc-title">${title}</h1>
    <div class="doc-subtitle">${author} · ${subtitle}</div>
    
    <div class="meta-grid">
      <div class="meta-item"><strong>Format:</strong> A4 Monochrome Print</div>
      <div class="meta-item"><strong>Total Units:</strong> ${units.length} Forensic Units</div>
      <div class="meta-item"><strong>Standard:</strong> BKRS v2.0 Production Master</div>
      <div class="meta-item"><strong>Fidelity:</strong> 100% Replacement Grade</div>
    </div>
  </header>

  <!-- UNITS -->
  <main>
    ${unitHtml}
  </main>

</body>
</html>`;
}

const htmlContent = buildPrintHtml(
  'The Great Gatsby',
  'F. Scott Fitzgerald (1925)',
  'The Anatomy of Carelessness and Longing',
  units
);

const tempHtml = path.join(gatsbyDir, 'print_temp.html');
const outPdf = path.join(gatsbyDir, 'the-great-gatsby-a4-print.pdf');

fs.writeFileSync(tempHtml, htmlContent, 'utf8');

const header = '<div style="font-size:7.5pt;font-family:Georgia,serif;color:#555;width:100%;text-align:center;text-transform:uppercase;letter-spacing:1px;margin:0 18mm;border-bottom:0.5pt solid #888;padding-bottom:1.5mm;">F. Scott Fitzgerald · The Great Gatsby (BKRS Master Print Edition)</div>';
const footer = '<div style="font-size:8pt;font-family:Georgia,serif;color:#444;width:100%;text-align:center;margin:0 18mm;border-top:0.5pt solid #888;padding-top:1.5mm;">— <span class="pageNumber"></span> —</div>';

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outPdf}" --print-to-pdf-no-header --display-header-footer --header-template="${header.replace(/"/g, '\\"')}" --footer-template="${footer.replace(/"/g, '\\"')}" "file:///${tempHtml.replace(/\\/g, '/')}"`;

console.log('Generating Gatsby PDF...');
execSync(cmd);

if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);

console.log(`Generated: ${outPdf} (${fs.statSync(outPdf).size} bytes)`);
