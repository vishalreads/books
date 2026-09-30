const fs = require('fs');
const path = require('path');

const slug = 'indian-economy-vivek-singh';
const title = 'Indian Economy';
const author = 'Vivek Singh';
const distDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

const masterNotes = fs.readFileSync(path.join(distDir, 'master-notes.md'), 'utf8');
const knowledgeUnits = JSON.parse(fs.readFileSync(path.join(distDir, 'knowledge-units.json'), 'utf8'));

const proseHtml = masterNotes.replace(/# Master Codex:[\s\S]*?---\n/, '').split('\n\n').map(p => {
  const trimmed = p.trim();
  if (trimmed.startsWith('## ')) return `<h2>${trimmed.replace('## ', '')}</h2>`;
  if (trimmed.startsWith('### ')) return `<h3>${trimmed.replace('### ', '')}</h3>`;
  if (trimmed.startsWith('#### ')) return `<h4>${trimmed.replace('#### ', '')}</h4>`;
  if (trimmed.startsWith('$$')) return `<div class="formula-box">${trimmed.replace(/\$\$/g, '')}</div>`;
  if (trimmed.startsWith('- ')) return `<ul>${trimmed.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('')}</ul>`;
  if (trimmed.startsWith('```')) {
    const codeContent = trimmed.replace(/```[a-z]*\n?/g, '').trim();
    return `<pre><code>${codeContent}</code></pre>`;
  }
  if (trimmed.startsWith('| ')) return `<p><em>[Comparative Table rendered in Master Codex Markdown]</em></p>`;
  return `<p>${trimmed}</p>`;
}).join('\n');

const unitsHtml = knowledgeUnits.map(ku => `
  <div class="unit-card" id="${ku.id}">
    <span class="econ-badge badge-${ku.materiality === 'critical' ? 'critical' : 'fiscal'}">${ku.unitType}</span>
    <h3>Unit ${ku.order}: ${ku.title}</h3>
    <p class="unit-summary">${ku.summary}</p>
    <div class="unit-meta">
      <span>Status: <strong>${ku.epistemicStatus}</strong></span> •
      <span>Materiality: <strong>${ku.materiality}</strong></span>
    </div>
  </div>
`).join('');

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Master Knowledge Codex</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    .econ-badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    .badge-critical { background: #fee2e2; color: #991b1b; }
    .badge-regulatory { background: #e0f2fe; color: #075985; }
    .badge-fiscal { background: #fef3c7; color: #92400e; }
    .badge-macro { background: #dcfce7; color: #166534; }
    .formula-box {
      background: var(--bg-surface-secondary, #f8fafc);
      border-left: 4px solid var(--accent, #3b82f6);
      padding: 1rem;
      margin: 1rem 0;
      font-family: monospace;
      font-size: 0.95rem;
      border-radius: 0 4px 4px 0;
    }
    .econ-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .econ-card {
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 8px;
      padding: 1.25rem;
      background: var(--bg-surface, #ffffff);
    }
    .econ-card h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--text-primary, #0f172a);
    }
    pre {
      background: var(--bg-surface-secondary, #f8fafc);
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 0.85rem;
      line-height: 1.4;
      border: 1px solid var(--border-color, #e2e8f0);
    }
  </style>
</head>
<body class="reader-mode">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="breadcrumb">
          <a href="../../index.html">Library</a> &rsaquo;
          <a href="../../index.html#economics">Economic Sciences & Policy</a> &rsaquo;
          <span>${title}</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
          <div class="view-toggles">
            <button class="view-btn active" data-view="journey">Source Journey</button>
            <button class="view-btn" data-view="map">Knowledge Units</button>
            <button class="view-btn" data-view="policy">Policy Matrix</button>
          </div>
        </div>
      </div>
    </header>

    <main class="reader-main">
      <section class="codex-hero">
        <div class="hero-content">
          <div class="domain-tag">Comprehensive Macroeconomic & Policy Architecture</div>
          <h1 class="codex-title">${title}</h1>
          <p class="codex-subtitle">Seventh Edition (2023–24) • By <strong>${author}</strong></p>
          <div class="codex-meta">
            <span>BKRS v2.0 Standard</span> •
            <span>10 Atomic Knowledge Units</span> •
            <span>Complete Structural Substitution</span>
          </div>
        </div>
      </section>

      <!-- VIEW A: SOURCE JOURNEY -->
      <section id="view-journey" class="view-section active">
        <article class="prose-content">
          ${proseHtml}
        </article>
      </section>

      <!-- VIEW B: KNOWLEDGE MAP -->
      <section id="view-map" class="view-section">
        <div class="units-grid">
          ${unitsHtml}
        </div>
      </section>

      <!-- VIEW C: POLICY MATRIX & OPERATIONAL ARCHITECTURE -->
      <section id="view-policy" class="view-section">
        <div class="econ-grid">
          <div class="econ-card">
            <h4>LAF Monetary Corridor</h4>
            <div class="formula-box">Floor: SDF ◄── REPO RATE ──► Ceiling: MSF</div>
            <p><strong>Standing Deposit Facility (SDF):</strong> Uncollateralized liquidity absorption window (Repo - 25 bps).</p>
            <p><strong>Marginal Standing Facility (MSF):</strong> Overnight penal borrowing window dipping into SLR (Repo + 25 bps).</p>
          </div>
          <div class="econ-card">
            <h4>External Benchmark Lending Rate (EBLR)</h4>
            <div class="formula-box">Lending Rate = External Benchmark + Credit Risk Spread</div>
            <p><strong>Mandatory:</strong> Linked to RBI Repo Rate or 91/182-day T-Bill yield for all retail & MSME floating loans.</p>
            <p>Eliminates opacity in transmission inherent in Base Rate and MCLR systems.</p>
          </div>
          <div class="econ-card">
            <h4>Insolvency & Bankruptcy Code (IBC 2016)</h4>
            <div class="formula-box">CIRP: 180 Days (Max 330 Days) | CoC Threshold: 66%</div>
            <p><strong>Paradigm Shift:</strong> From "Debtor-in-Possession" to "Creditor-in-Control".</p>
            <p><strong>Resolution:</strong> Managed by Resolution Professional; failure triggers liquidation.</p>
          </div>
          <div class="econ-card">
            <h4>Labor Law Modernization (4 Codes)</h4>
            <div class="formula-box">29 Central Labor Acts ──► 4 Unified Labor Codes</div>
            <p><strong>Codes:</strong> Wages (2019), Industrial Relations (2020), Social Security (2020), Occupational Safety (2020).</p>
            <p>Raises lay-off threshold to 300 workers; universalizes minimum wages and gig worker protections.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Indian Economy</em> by Vivek Singh (7th Edition 2023–24)</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully generated index.html for ${title} (${readerHtml.length} chars)`);
