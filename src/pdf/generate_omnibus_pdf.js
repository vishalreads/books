/**
 * The Intellectualist Master Omnibus Generator
 * Compiles all 37 Master Reconstructions into a single, comprehensive,
 * beautifully typeset A4 Book-Grade Master PDF with full Table of Contents / Index.
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

marked.setOptions({
  gfm: true,
  breaks: false
});

// Thematic Volumes Arrangement
const VOLUMES = [
  {
    num: 'I',
    title: 'Classical Strategy, Realpolitik & Civilizational Power',
    description: 'Foundational doctrines of warfare, strategic calculation, statecraft, ideological struggle, and the martial ethos across millennia.',
    slugs: [
      'the-art-of-war',
      '48-laws-of-power',
      'bhagat-singh-a-life-in-revolution',
      'bhagat-singh-unified-chronicle',
      'rajput-unified-codex',
      'homage-to-catalonia',
      'the-mosquito'
    ]
  },
  {
    num: 'II',
    title: 'Philosophy of Mind, Metaphysics & Spiritual Science',
    description: 'The exploration of consciousness, existential lucidity, non-dual metaphysics, yogic science, ascetic practice, and the architecture of belief.',
    slugs: [
      'autobiography-of-a-yogi',
      'the-myth-of-sisyphus',
      'manifestation-unified-codex',
      'ajahn-dtun-autobiography',
      'gandhi-experiments-with-truth',
      'the-metaphysical-club',
      'tuesdays-with-morrie'
    ]
  },
  {
    num: 'III',
    title: 'World Literature, Existentialism & Human Longing',
    description: 'Forensic literary autopsies of social class, moral decay, total surveillance, bureaucratic terror, war, love, and the human search for meaning.',
    slugs: [
      'war-and-peace',
      'the-great-gatsby',
      'the-picture-of-dorian-gray',
      'the-metamorphosis-and-other-stories',
      'heart-of-darkness',
      'norwegian-wood',
      'lolita',
      'master-and-margarita',
      'siddhartha',
      'brave-new-world',
      'it-ends-with-us'
    ]
  },
  {
    num: 'IV',
    title: 'Extreme Survival, Crisis Leadership & Situational Psychology',
    description: 'Empirical investigations into human survival thresholds, trauma inoculation, cognitive breakdown in mortal peril, and mental toughness.',
    slugs: [
      'cant-hurt-me',
      'deep-survival',
      'endurance',
      'open-agassi',
      'the-urge-history-of-addiction'
    ]
  },
  {
    num: 'V',
    title: 'Systems, Wealth Architecture, Technology & Applied Science',
    description: 'Operational heuristics for capital velocity, behavioral economic psychology, atomic habit loops, industrial physics, and digital counter-surveillance.',
    slugs: [
      'the-psychology-of-money',
      'rich-dad-poor-dad',
      'atomic-habits',
      'elon-musk',
      'scientific-autobiography-planck',
      'open-source-intelligence-techniques',
      'dont-bug-me'
    ]
  }
];

function buildOmnibusHtml() {
  console.log('Assembling Table of Contents and Book Content...');

  let tocHtml = `
  <section class="toc-container">
    <div class="toc-header">
      <div class="toc-kicker">Master Library Architecture</div>
      <h2 class="toc-title">Table of Contents &amp; Topical Index</h2>
      <p class="toc-subtitle">A thematic classification of all 37 master reconstructions across 5 foundational volumes of human inquiry.</p>
    </div>
  `;

  let booksHtml = '';
  let globalIndex = 1;

  VOLUMES.forEach(vol => {
    tocHtml += `
      <div class="toc-volume-block">
        <div class="toc-vol-header">
          <span class="toc-vol-num">VOLUME ${vol.num}</span>
          <h3 class="toc-vol-title">${vol.title}</h3>
        </div>
        <p class="toc-vol-desc">${vol.description}</p>
        <div class="toc-book-list">
    `;

    // Volume divider page in book body
    booksHtml += `
      <section class="volume-divider-page">
        <div class="volume-kicker">THE INTELLECTUALIST MASTER CODEX</div>
        <div class="volume-roman">VOLUME ${vol.num}</div>
        <h1 class="volume-display-title">${vol.title}</h1>
        <div class="volume-rule"></div>
        <p class="volume-display-desc">${vol.description}</p>
        <div class="volume-contents-box">
          <div class="volume-contents-label">VOLUMETRIC RECONSTRUCTIONS</div>
          <ul class="volume-contents-list">
            ${vol.slugs.map(slug => {
              const meta = metadataRegistry[slug] || { title: slug, author: '' };
              return `<li><strong>${meta.title}</strong> — ${meta.author}</li>`;
            }).join('')}
          </ul>
        </div>
      </section>
    `;

    vol.slugs.forEach(slug => {
      const meta = metadataRegistry[slug] || {
        title: slug,
        author: 'BKRS Master',
        subtitle: '',
        category: 'Master Distillation'
      };

      const mdPath = path.join(DIST_DIR, slug, 'master-notes.md');
      let bookBodyHtml = '<p><em>Content pending.</em></p>';
      if (fs.existsSync(mdPath)) {
        const md = fs.readFileSync(mdPath, 'utf8');
        bookBodyHtml = marked.parse(md);
      }

      // Add to TOC
      tocHtml += `
        <div class="toc-entry">
          <div class="toc-entry-left">
            <span class="toc-entry-num">${String(globalIndex).padStart(2, '0')}</span>
            <a href="#book-${slug}" class="toc-entry-title">${meta.title}</a>
            <span class="toc-entry-author">by ${meta.author}</span>
          </div>
          <div class="toc-entry-meta">
            <span class="toc-pill">${meta.category || 'Master Codex'}</span>
          </div>
        </div>
      `;

      // Add to Books HTML
      booksHtml += `
        <article class="book-start-section" id="book-${slug}">
          <header class="book-cover-banner">
            <div class="book-kicker">Volume ${vol.num} · Book ${globalIndex} · BKRS Production Master</div>
            <h1 class="book-main-title">${meta.title}</h1>
            <div class="book-main-author">${meta.author}${meta.subtitle ? ' · <em>' + meta.subtitle + '</em>' : ''}</div>
            
            <div class="book-specs-bar">
              <div><strong>Volume:</strong> Vol. ${vol.num} (${vol.title.split(',')[0]})</div>
              <div><strong>Category:</strong> ${meta.category || 'Master Codex'}</div>
              <div><strong>Fidelity Standard:</strong> Total Forensic Depth (100% Replacement Grade)</div>
            </div>
          </header>

          <div class="book-content-body">
            ${bookBodyHtml}
          </div>
        </article>
      `;

      globalIndex++;
    });

    tocHtml += `
        </div>
      </div>
    `;
  });

  tocHtml += `
  </section>
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Intellectualist Master Codex — Complete 37-Title Library</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 22mm 20mm 22mm 20mm;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    html, body {
      background: #ffffff;
      color: #111111;
      font-family: Georgia, 'EB Garamond', 'Baskerville', 'Times New Roman', serif;
      font-size: 10pt;
      line-height: 1.54;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* ==========================================================================
       MAJESTIC COVER / TITLE PAGE
       ========================================================================== */
    .grand-cover-page {
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 250mm;
      padding: 20mm 0 10mm 0;
      text-align: center;
      border-top: 4pt solid #111111;
      border-bottom: 2pt solid #111111;
    }

    .cover-top-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 9pt;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #333333;
      margin-bottom: 20mm;
    }

    .cover-main-title {
      font-size: 30pt;
      font-weight: 700;
      line-height: 1.15;
      color: #000000;
      letter-spacing: -0.02em;
      margin: 0 0 12pt 0;
      text-transform: uppercase;
    }

    .cover-main-subtitle {
      font-size: 13pt;
      font-style: italic;
      color: #333333;
      max-width: 140mm;
      margin: 0 auto 16mm auto;
      line-height: 1.45;
    }

    .cover-ornament {
      font-size: 16pt;
      color: #555555;
      margin-bottom: 16mm;
    }

    .cover-meta-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12pt;
      max-width: 150mm;
      margin: 0 auto;
      text-align: left;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8.5pt;
      color: #444444;
      border-top: 1pt solid #111111;
      border-bottom: 1pt solid #111111;
      padding: 10pt 0;
    }

    .cover-meta-grid strong {
      color: #000000;
    }

    .cover-bottom-colophon {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      color: #666666;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ==========================================================================
       PHILOSOPHICAL PREAMBLE / GOLDEN TEST
       ========================================================================== */
    .preamble-page {
      page-break-after: always;
      padding: 15mm 10mm;
      max-width: 150mm;
      margin: 0 auto;
    }

    .preamble-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #555555;
      margin-bottom: 8pt;
      text-align: center;
    }

    .preamble-heading {
      font-size: 18pt;
      font-weight: 700;
      text-align: center;
      margin-bottom: 16pt;
      color: #000000;
    }

    .preamble-quote {
      font-size: 11pt;
      font-style: italic;
      line-height: 1.6;
      text-align: justify;
      border-left: 2.5pt solid #111111;
      padding: 10pt 16pt;
      margin: 16pt 0;
      background: #fafafa;
    }

    .preamble-text {
      font-size: 9.5pt;
      line-height: 1.55;
      text-align: justify;
      color: #222222;
      margin-bottom: 10pt;
    }

    /* ==========================================================================
       TABLE OF CONTENTS & MASTER INDEX
       ========================================================================== */
    .toc-container {
      page-break-after: always;
      padding-top: 5mm;
    }

    .toc-header {
      border-bottom: 2pt solid #111111;
      padding-bottom: 10pt;
      margin-bottom: 16pt;
    }

    .toc-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #444444;
      margin-bottom: 4pt;
    }

    .toc-title {
      font-size: 20pt;
      font-weight: 700;
      margin: 0 0 4pt 0;
      color: #000000;
    }

    .toc-subtitle {
      font-size: 10pt;
      font-style: italic;
      color: #444444;
      margin: 0;
    }

    .toc-volume-block {
      margin-bottom: 16pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .toc-vol-header {
      display: flex;
      align-items: baseline;
      gap: 8pt;
      border-bottom: 0.75pt solid #222222;
      padding-bottom: 3pt;
      margin-bottom: 4pt;
    }

    .toc-vol-num {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.1em;
      background: #111111;
      color: #ffffff;
      padding: 1.5pt 5pt;
      border-radius: 2pt;
    }

    .toc-vol-title {
      font-size: 12pt;
      font-weight: 700;
      margin: 0;
      color: #000000;
    }

    .toc-vol-desc {
      font-size: 8.5pt;
      font-style: italic;
      color: #555555;
      margin: 3pt 0 6pt 0;
      line-height: 1.35;
    }

    .toc-entry {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      padding: 3.5pt 0;
      border-bottom: 0.25pt dotted #bbbbbb;
      font-size: 9pt;
    }

    .toc-entry-left {
      display: flex;
      align-items: baseline;
      gap: 6pt;
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .toc-entry-num {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      color: #666666;
      width: 16pt;
    }

    .toc-entry-title {
      font-weight: 700;
      color: #111111;
      text-decoration: none;
    }

    .toc-entry-title:hover {
      text-decoration: underline;
    }

    .toc-entry-author {
      font-style: italic;
      color: #555555;
      font-size: 8.5pt;
    }

    .toc-pill {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7pt;
      font-weight: 600;
      color: #333333;
      border: 0.5pt solid #888888;
      padding: 1pt 4pt;
      border-radius: 2pt;
      white-space: nowrap;
      margin-left: 8pt;
    }

    /* ==========================================================================
       VOLUME DIVIDER PAGES
       ========================================================================== */
    .volume-divider-page {
      page-break-before: always;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 220mm;
      padding: 30mm 15mm;
    }

    .volume-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #555555;
      margin-bottom: 12pt;
    }

    .volume-roman {
      font-size: 32pt;
      font-weight: 700;
      color: #000000;
      margin-bottom: 6pt;
      letter-spacing: 0.05em;
    }

    .volume-display-title {
      font-size: 20pt;
      font-weight: 700;
      color: #000000;
      line-height: 1.25;
      max-width: 140mm;
      margin: 0 auto 12pt auto;
    }

    .volume-rule {
      width: 40mm;
      height: 1.5pt;
      background: #111111;
      margin: 0 auto 16pt auto;
    }

    .volume-display-desc {
      font-size: 10.5pt;
      font-style: italic;
      color: #333333;
      max-width: 130mm;
      line-height: 1.5;
      margin: 0 auto 24pt auto;
    }

    .volume-contents-box {
      border: 0.75pt solid #333333;
      padding: 12pt 16pt;
      max-width: 120mm;
      text-align: left;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      background: #fafafa;
    }

    .volume-contents-label {
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #111111;
      margin-bottom: 6pt;
      border-bottom: 0.5pt solid #666666;
      padding-bottom: 3pt;
    }

    .volume-contents-list {
      margin: 0;
      padding-left: 14pt;
      line-height: 1.45;
      color: #222222;
    }

    /* ==========================================================================
       INDIVIDUAL BOOK OPENING & BODY
       ========================================================================== */
    .book-start-section {
      page-break-before: always;
      padding-top: 4mm;
    }

    .book-cover-banner {
      border-bottom: 1.75pt solid #111111;
      padding-bottom: 10pt;
      margin-bottom: 16pt;
      break-after: avoid;
      page-break-after: avoid;
    }

    .book-kicker {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #444444;
      margin-bottom: 4pt;
    }

    .book-main-title {
      font-size: 21pt;
      font-weight: 700;
      line-height: 1.18;
      color: #000000;
      margin: 0 0 4pt 0;
      letter-spacing: -0.01em;
      break-after: avoid;
      page-break-after: avoid;
    }

    .book-main-author {
      font-size: 11pt;
      color: #222222;
      margin-bottom: 8pt;
    }

    .book-specs-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14pt;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 8pt;
      color: #444444;
      border-top: 0.5pt solid #cccccc;
      padding-top: 5pt;
    }

    .book-specs-bar strong {
      color: #111111;
    }

    /* Headings inside Books */
    h1 {
      font-size: 17pt;
      font-weight: 700;
      color: #000000;
      margin: 20pt 0 6pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h2 {
      font-size: 13pt;
      font-weight: 700;
      line-height: 1.25;
      color: #000000;
      border-bottom: 0.75pt solid #222222;
      padding-bottom: 2pt;
      margin: 16pt 0 7pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h3 {
      font-size: 11pt;
      font-weight: 700;
      line-height: 1.3;
      color: #111111;
      margin: 12pt 0 4pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    h4 {
      font-size: 10pt;
      font-weight: 700;
      color: #222222;
      margin: 9pt 0 3pt 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 7.5pt 0;
      text-align: justify;
      text-justify: inter-word;
      hyphens: auto;
    }

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

  <!-- 1. MAJESTIC COVER PAGE -->
  <section class="grand-cover-page">
    <div class="cover-top-kicker">BKRS ARCHITECTURAL COMPENDIUM · CANONICAL OMNIBUS EDITION</div>
    <div>
      <h1 class="cover-main-title">The Intellectualist<br>Master Codex</h1>
      <p class="cover-main-subtitle">The Complete 37-Title Library of Human Strategy, Realpolitik, Consciousness, World Literature, Extreme Survival, and Systemic Wealth Reconstructed to 100% Replacement-Grade Fidelity.</p>
      <div class="cover-ornament">❧ ❖ ☙</div>
    </div>
    
    <div class="cover-meta-grid">
      <div><strong>Total Volumes:</strong> 5 Thematic Volumes</div>
      <div><strong>Total Reconstructed Titles:</strong> 37 Masterworks</div>
      <div><strong>Epistemic Standard:</strong> BKRS v2.0 Production Master</div>
      <div><strong>Typographic Architecture:</strong> ISO A4 Book Typography</div>
      <div><strong>Content Methodology:</strong> Total Forensic Reconstruction</div>
      <div><strong>Print Optimization:</strong> High-Contrast Monochrome (Zero Bleed)</div>
    </div>

    <div class="cover-bottom-colophon">
      The Book Knowledge Reconstruction System (BKRS) · Global Master Library Edition
    </div>
  </section>

  <!-- 2. PHILOSOPHICAL PREAMBLE -->
  <section class="preamble-page">
    <div class="preamble-kicker">The Operating Constitution</div>
    <h2 class="preamble-heading">The Golden Test of Total Replacement</h2>
    
    <div class="preamble-quote">
      "If the reader never opens the original multi-hundred-page source volumes, they will not miss a single causal link, psychological mechanism, empirical experiment, verbatim dialogue, philosophical argument, operational heuristic, or historical nuance."
    </div>

    <p class="preamble-text">
      This compendium rejects the shallow, extractive summaries that dominate contemporary digital reading. It does not compress a 500-page philosophical or historical work into five disposable bullet points. Instead, every work collected in this volume has been reconstructed from first principles according to the Book Knowledge Reconstruction System (BKRS).
    </p>

    <p class="preamble-text">
      Every scene, chapter, and argument has been forensically preserved. The reader is invited to engage with these texts not as hurried summaries, but as deep intellectual territory—to be read with a pencil in hand, studied across physical pages, and internalized as permanent operational knowledge.
    </p>
  </section>

  <!-- 3. MASTER TABLE OF CONTENTS & TOPICAL INDEX -->
  ${tocHtml}

  <!-- 4. ALL 37 BOOKS ORGANIZED BY VOLUME -->
  ${booksHtml}

</body>
</html>`;
}

console.log("================================================================================");
console.log("  BKRS MASTER OMNIBUS COMPILER (37 TITLES IN 1 UNIFIED VOLUME)");
console.log("================================================================================\n");

const html = buildOmnibusHtml();
const tempHtml = path.join(REPO_ROOT, 'temp_omnibus.html');
const outPdf = path.join(PDF_DEPOT, 'the-intellectualist-master-omnibus.pdf');

console.log(`Writing omnibus HTML (${(Buffer.byteLength(html, 'utf8') / 1024 / 1024).toFixed(2)} MB)...`);
fs.writeFileSync(tempHtml, html, 'utf8');

const headerHtml = `<div style="font-size:7.5pt;font-family:Georgia,serif;color:#555;width:100%;text-align:center;text-transform:uppercase;letter-spacing:1.5px;margin:0 20mm;border-bottom:0.5pt solid #888;padding-bottom:1.5mm;">The Intellectualist Master Codex · Complete Canonical Library</div>`;
const footerHtml = `<div style="font-size:8pt;font-family:Georgia,serif;color:#444;width:100%;text-align:center;margin:0 20mm;border-top:0.5pt solid #888;padding-top:1.5mm;">— Page <span class="pageNumber"></span> —</div>`;

const cmd = `"${CHROME_PATH}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outPdf}" --print-to-pdf-no-header --display-header-footer --header-template="${headerHtml.replace(/"/g, '\\"')}" --footer-template="${footerHtml.replace(/"/g, '\\"')}" "file:///${tempHtml.replace(/\\/g, '/')}"`;

console.log('Spawning Chrome headless compositor for complete Master Omnibus...');
console.log('Compiling 37 complete books across 5 Volumes into single PDF...');

const t0 = Date.now();
try {
  execSync(cmd, { stdio: 'inherit' });
  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  const sizeMb = (fs.statSync(outPdf).size / 1024 / 1024).toFixed(2);

  // Estimate page count
  let pageCount = '?';
  try {
    const buf = fs.readFileSync(outPdf, 'latin1');
    const matches = buf.match(/\/Type\s*\/Page[^s]/g);
    pageCount = matches ? matches.length : '?';
  } catch(e) {}

  console.log(`\n================================================================================`);
  console.log(`  MASTER OMNIBUS SUCCESSFULLY GENERATED IN ${dt}s!`);
  console.log(`  File: ${outPdf}`);
  console.log(`  Total Pages: ${pageCount} Pages`);
  console.log(`  Total File Size: ${sizeMb} MB`);
  console.log(`================================================================================\n`);
} catch (err) {
  console.error('[ERROR] Compilation failed:', err.message);
} finally {
  if (fs.existsSync(tempHtml)) {
    try { fs.unlinkSync(tempHtml); } catch(e) {}
  }
}
