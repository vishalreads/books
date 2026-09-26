const fs = require('fs');
const path = require('path');

const part1 = require('./war_and_peace_data_part1');
const part2 = require('./war_and_peace_data_part2');

const warAndPeaceUnits = [...part1, ...part2];

console.log(`Loaded ${warAndPeaceUnits.length} total units for War and Peace.`);

function buildMasterNotesMarkdown(units) {
  let md = `# Master Notes: War and Peace (Война и миръ)\n\n`;
  md += `**Author:** Leo Tolstoy (1869)  \n`;
  md += `**Authorized Translation:** Random House / Louise & Aylmer Maude Standard  \n`;
  md += `**Genre:** Epic Historical Fiction / Philosophy of History  \n`;
  md += `**System Standard:** BKRS v2.0 Total Replacement Codex  \n`;
  md += `**Corpus Scope:** 15 Books + 2 Epilogues | 20 Invariant Units | Full Archival Traceability  \n\n`;
  md += `---\n\n`;

  md += `## Executive Summary: The Architecture of Tolstoy's Epic\n\n`;
  md += `Leo Tolstoy's *War and Peace* is not merely the greatest novel of world literature; it is a monumental investigation into the mechanics of human consciousness, historical causation, and spiritual transformation under the pressure of total civilizational war. Set against the panoramic backdrop of the Napoleonic Wars (1805–1820), the work weaves the intimate lives of four aristocratic Russian families—the Bezukhovs, Bolkonskys, Rostovs, and Kuragins—with the cataclysmic clash between Napoleonic imperial ambition and the enduring soul of the Russian people.\n\n`;
  md += `Tolstoy systematically demolishes the 'Great Man' theory of history, demonstrating that monarchs and commanders are merely the titular figureheads carried upon the ocean of millions of microscopic individual human decisions. Authentic human fulfillment, Tolstoy reveals, is discovered not through battlefield glory, courtly ambition, or abstract philosophical systems, but through the elemental simplicity of selfless love, rural labor, family devotion, and the quiet acceptance of Providence.\n\n`;

  md += `---\n\n`;
  md += `## 20 Invariant Units: Complete Chapter-by-Chapter Forensic Codex\n\n`;

  units.forEach(u => {
    md += `### [Unit ${u.unit_number.toString().padStart(2, '0')}] ${u.title}\n\n`;
    md += `- **Structural Scope:** ${u.book_part} | ${u.chapters}\n`;
    md += `- **Epistemic Classification:** \`${u.epistemic_status}\` | Materiality: **${u.materiality}**\n`;
    md += `- **Key Dramatis Personae:** ${u.primary_figures.join(', ')}\n`;
    md += `- **Geographical & Historical Setting:** ${u.historical_context}\n\n`;

    md += `#### Core Invariant Insight\n${u.core_insight}\n\n`;

    md += `#### Detailed Forensic Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });

    md += `#### Operational Heuristics & Philosophical Maxims\n`;
    md += `> *${u.operational_heuristics}*\n\n`;

    md += `#### Verbatim Archival Anchor\n`;
    md += `“${u.verbatim_quote}”\n\n`;

    md += `---\n\n`;
  });

  return md;
}

function buildHtmlReader(units) {
  const sidebarLinks = units.map(u => 
    `<div class="nav-chapter-item">
      <a href="#${u.id}" class="nav-chapter-link">
        <span class="nav-ch-num">Unit ${u.unit_number}</span>
        <span class="nav-ch-title">${u.title}</span>
      </a>
    </div>`
  ).join('\n');

  const unitCards = units.map(u => {
    const prose = u.textual_analysis.map(p => `<p class="narrative-p">${p}</p>`).join('\n');

    return `
      <article class="unit-card-deep" id="${u.id}">
        <div class="unit-meta-line" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="unit-badge" style="background: var(--accent-crimson); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.05em;">Unit ${u.unit_number}</span>
            <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">${u.book_part}</span>
          </div>
          <div>
            <span style="font-size: 0.78rem; color: var(--text-muted); background: var(--bg-card-subtle); padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border-color);">${u.epistemic_status}</span>
            <span style="font-size: 0.78rem; color: var(--accent-gold); background: var(--bg-card-subtle); padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border-color); font-weight: 700;">${u.materiality}</span>
          </div>
        </div>

        <h2 class="unit-heading-deep" style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; line-height: 1.3; color: var(--text-main); margin-bottom: 12px;">${u.title}</h2>

        <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 24px; font-weight: 500; color: var(--text-main); border-left: 3px solid var(--accent-gold); padding-left: 14px;">
          <strong>Core Insight:</strong> ${u.core_insight}
        </div>

        <div class="narrative-prose">
          ${prose}
        </div>

        <div class="quote-box" style="margin: 24px 0; padding: 18px 24px; background: var(--bg-card-subtle); border-left: 4px solid var(--accent-crimson); border-radius: 0 6px 6px 0; font-style: italic; font-size: 1.12rem;">
          “${u.verbatim_quote}” — Leo Tolstoy
        </div>

        <div class="heuristic-box" style="margin-top: 24px; padding: 16px 20px; background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-gold); border-radius: 0 6px 6px 0; font-size: 1.02rem;">
          <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">Operational Heuristic:</strong>
          ${u.operational_heuristics}
        </div>

        <div style="margin-top: 18px; font-size: 0.92rem; color: var(--text-muted);">
          <strong>Figures:</strong> ${u.primary_figures.join(' · ')}
        </div>
      </article>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>War and Peace (Война и миръ) — Leo Tolstoy | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --accent-crimson: #8b181b;
      --accent-gold: #966b1d;
      --accent-forest: #225e43;
      --font-serif: 'EB Garamond', Georgia, serif;
      --font-sans: 'Inter', -apple-system, sans-serif;
    }

    [data-theme="cream"] {
      --bg-base: #fbf9f4;
      --bg-surface: #ffffff;
      --bg-card: #f5f2ea;
      --bg-card-subtle: #efebe0;
      --text-main: #24211e;
      --text-muted: #5c5549;
      --border-color: #e2dccf;
      --accent-crimson: #8b181b;
      --accent-gold: #966b1d;
    }

    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
    }

    .unit-card-deep {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 40px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-family: var(--font-serif);
      font-size: 1.18rem;
      line-height: 1.82;
      text-align: justify;
    }
  </style>
</head>
<body>

  <!-- TOP APP BAR -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div style="display: flex; align-items: center; gap: 16px;">
        <button class="icon-btn toggle-sidebar-btn" id="toggle-sidebar-btn" title="Toggle Table of Contents" aria-label="Toggle Sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <span class="brand-title">WAR AND PEACE • MASTER CODEX</span>
      </div>
      
      <div class="top-bar-controls">
        <a href="../../index.html" class="icon-btn" title="Return to Library" aria-label="Library">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <div class="app-layout">
    
    <!-- SIDEBAR NAVIGATION -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-book-title">War and Peace</div>
        <div class="sidebar-book-meta">Leo Tolstoy · 20 Invariant Units</div>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section-title">Table of Contents</div>
        <div class="nav-ch-list">
${sidebarLinks}
        </div>
      </nav>
    </aside>

    <!-- MAIN READING CONTAINER -->
    <main class="reader-container" id="reader-container">
      <div class="reader-content-wrap">
        
        <!-- BOOK COVER & INTRO CARD -->
        <article class="hero-card" style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px; padding: 40px; margin-bottom: 40px;">
          <div class="hero-badge" style="background: var(--accent-crimson); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 4px; display: inline-block; margin-bottom: 12px;">Epic Literature · Philosophy of History</div>
          <h1 class="hero-title" style="font-family: var(--font-serif); font-size: 2.8rem; font-weight: 700; margin-bottom: 8px;">War and Peace (Война и миръ)</h1>
          <div class="hero-subtitle" style="font-size: 1.15rem; color: var(--text-muted); margin-bottom: 24px;">Leo Tolstoy (1869) · Complete 20-Unit Total Replacement Codex</div>
          
          <div class="hero-meta-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div class="meta-item">
              <span class="meta-label" style="display: block; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Corpus Scope</span>
              <span class="meta-value" style="font-weight: 700;">15 Books + 2 Epilogues</span>
            </div>
            <div class="meta-item">
              <span class="meta-label" style="display: block; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Total Units</span>
              <span class="meta-value" style="font-weight: 700;">20 Invariant Units</span>
            </div>
            <div class="meta-item">
              <span class="meta-label" style="display: block; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Standard</span>
              <span class="meta-value" style="font-weight: 700;">BKRS v2.0 Production Master</span>
            </div>
            <div class="meta-item">
              <span class="meta-label" style="display: block; font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Fidelity</span>
              <span class="meta-value" style="font-weight: 700;">100% Replacement Grade</span>
            </div>
          </div>

          <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); text-align: justify;">
            <p><strong>The Definitive Epic of Human Existence:</strong> Tolstoy's unmatched panoramic masterpiece deconstructing the Napoleonic invasion of Russia, tracing the spiritual evolutions of Pierre Bezukhov, Prince Andrew Bolkonsky, Natasha Rostova, Princess Marya, and Nikolai Rostov against the supreme philosophical inquiry into historical determinism and the infinite sky.</p>
          </div>
        </article>

        <!-- UNITS CONTENT -->
        <section class="units-container">
${unitCards}
        </section>

      </div>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;
}

// Execution
const destDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'war-and-peace');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

console.log('Writing War and Peace master-notes.md...');
const masterNotesMd = buildMasterNotesMarkdown(warAndPeaceUnits);
fs.writeFileSync(path.join(destDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

console.log('Writing knowledge-units.json...');
fs.writeFileSync(path.join(destDir, 'knowledge-units.json'), JSON.stringify(warAndPeaceUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${warAndPeaceUnits.length} units)`);

console.log('Writing index.html...');
const html = buildHtmlReader(warAndPeaceUnits);
fs.writeFileSync(path.join(destDir, 'index.html'), html, 'utf8');
console.log(`Saved index.html (${html.length} characters)`);

console.log('War and Peace deep expansion complete!');
