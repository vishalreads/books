/**
 * Generates the Interactive Multi-Source Subject Master Interface for Bhagat Singh
 * Operationalizing BKRS Rules 13–19 & 33–35.
 */

const fs = require('fs');
const path = require('path');

const archPath = path.join(__dirname, '..', '..', 'docs', 'cross-book', 'bhagat_singh_multi_source_architecture.json');
const arch = JSON.parse(fs.readFileSync(archPath, 'utf8'));

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const html = `<!DOCTYPE html>
<html lang="en" data-theme="cream" data-font="serif" data-size="base">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bhagat Singh: Multi-Source Subject Master — BKRS Synthesis Engine</title>
  
  <link rel="stylesheet" href="../assets/css/theme.css">
  <link rel="stylesheet" href="../assets/css/typography.css">
  <link rel="stylesheet" href="../assets/css/reader-shell.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    .synthesis-header {
      padding: 48px 0 32px 0;
      border-bottom: 2px solid var(--accent-crimson);
      margin-bottom: 40px;
    }
    .synthesis-title {
      font-family: var(--font-serif);
      font-size: 2.4rem;
      color: var(--text-main);
      margin: 8px 0;
      letter-spacing: -0.015em;
    }
    .synthesis-sub {
      font-size: 1.05rem;
      color: var(--text-muted);
      font-style: italic;
      max-width: 800px;
      line-height: 1.5;
    }
    .sources-roster {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin: 28px 0 40px 0;
    }
    .source-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 16px 18px;
      border-radius: 4px;
      border-top: 3px solid var(--accent-crimson);
    }
    .source-role {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-crimson);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .source-name {
      font-weight: 700;
      font-size: 0.96rem;
      color: var(--text-main);
    }
    .source-desc {
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-top: 6px;
      line-height: 1.4;
    }
    .node-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 28px;
      margin-bottom: 36px;
      box-shadow: var(--shadow-sm);
    }
    .node-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .node-rel-badge {
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .rel-agreement { background: #edf7ef; color: var(--accent-forest); border: 1px solid #c2e2c8; }
    .rel-dispute { background: #fdf3e7; color: var(--accent-gold); border: 1px solid #f3d4a0; }
    .rel-qualification { background: #f4f6f8; color: var(--accent-slate); border: 1px solid #d0d7de; }
    .node-title {
      font-family: var(--font-serif);
      font-size: 1.45rem;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }
    .node-issue {
      font-size: 0.95rem;
      color: var(--text-main);
      font-style: italic;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .perspectives-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }
    .persp-item {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 14px 16px;
      border-radius: 4px;
    }
    .persp-source {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--accent-crimson);
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
    }
    .persp-claim {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--text-main);
    }
    .node-resolution {
      background: var(--bg-elevated);
      border-left: 3px solid var(--accent-crimson);
      padding: 12px 16px;
      border-radius: 0 4px 4px 0;
      font-size: 0.88rem;
      color: var(--text-main);
      line-height: 1.5;
    }
  </style>
</head>
<body class="bkrs-app">

  <!-- TOP BAR -->
  <header class="reader-topbar">
    <div class="topbar-left">
      <a href="../index.html" class="topbar-back-link">
        ← <span class="back-link-text">Master </span>Library
      </a>
      <div class="topbar-divider"></div>
      <a href="index.html" class="topbar-back-link">
        Synthesis Portal
      </a>
      <div class="topbar-divider"></div>
      <div class="topbar-title-block">
        <div class="topbar-book-title">Bhagat Singh: Multi-Source Subject Master</div>
        <div class="topbar-book-author">Comparative Forensic Synthesis (Juss, Noorani, Waraich &amp; Primary Writings)</div>
      </div>
    </div>
    <div class="topbar-right">
      <button class="control-btn" onclick="cycleTheme()" title="Switch Theme">🎨 Theme</button>
      <button class="control-btn" onclick="cycleFont()" title="Font">Aa</button>
      <button class="control-btn" onclick="cycleFontSize()" title="Size">A±</button>
    </div>
  </header>

  <div class="reader-workspace" style="display: block; max-width: 1040px; margin: 0 auto; padding: 40px 24px;">
    
    <header class="synthesis-header">
      <span class="meta-label">BKRS MULTI-SOURCE SUBJECT MASTER • CONSTITUTIONAL SPECIFICATION</span>
      <h1 class="synthesis-title">Bhagat Singh: Ideology, Legality &amp; Martyrdom</h1>
      <p class="synthesis-sub">
        Cross-source comparative synthesis triangulating newly unsealed Punjab Archives records (Juss, 2022), constitutional jurisprudence (Noorani, 2001), judicial approver dossiers (Waraich, 2007), and Bhagat Singh's authentic primary writings (1928–1931).
      </p>
    </header>

    <!-- Source Roster -->
    <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-main); margin-bottom: 8px;">The Four Interlocking Source Layers</h3>
    <div class="sources-roster">
      <div class="source-box">
        <div class="source-role">Primary Subject Voice</div>
        <div class="source-name">Bhagat Singh (1928–1931)</div>
        <div class="source-desc">Why I Am an Atheist, Jail Notebook, Court Statements, and Red Leaflets. Authentic motives, philosophy, and worldview.</div>
      </div>
      <div class="source-box">
        <div class="source-role">Archival &amp; Biographical Record</div>
        <div class="source-name">Satvinder S. Juss (2022)</div>
        <div class="source-desc">A Life in Revolution. Newly unsealed Punjab Archives files, 21 archival plates, and definitive chronological reconstruction.</div>
      </div>
      <div class="source-box">
        <div class="source-role">Constitutional Jurisprudence</div>
        <div class="source-name">A.G. Noorani (2001)</div>
        <div class="source-desc">The Trial of Bhagat Singh: Politics of Justice. Rigorous common-law analysis of Ordinance III of 1930 and Section 72 ultra vires doctrine.</div>
      </div>
      <div class="source-box">
        <div class="source-role">Forensic Judicial Dossier</div>
        <div class="source-name">Malwinderjit Singh Waraich (2007)</div>
        <div class="source-desc">The Hanging of Bhagat Singh. Verbatim approver confessions, Black Warrants, and Ganda Singh Wala clandestine disposal orders.</div>
      </div>
    </div>

    <!-- The 7 Synthesis Nodes -->
    <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--accent-crimson); margin-bottom: 24px;">The 7 Core Historiographical &amp; Legal Synthesis Nodes</h3>

    ${arch.synthesis_nodes.map((node, idx) => {
      let badgeClass = 'rel-qualification';
      if (node.synthesis_relationship.includes('AGREEMENT') || node.synthesis_relationship.includes('CONSENSUS')) {
        badgeClass = 'rel-agreement';
      } else if (node.synthesis_relationship.includes('DISPUTE') || node.synthesis_relationship.includes('DIVERGENCE')) {
        badgeClass = 'rel-dispute';
      }

      return `
        <article class="node-card" id="${escapeHtml(node.node_id)}">
          <div class="node-meta">
            <span class="meta-label">Node 0${idx + 1} • <code>${escapeHtml(node.node_id)}</code></span>
            <span class="node-rel-badge ${badgeClass}">${escapeHtml(node.synthesis_relationship)}</span>
          </div>

          <h4 class="node-title">${escapeHtml(node.thematic_domain)}</h4>
          <div class="node-issue">Contested Issue: ${escapeHtml(node.contested_issue)}</div>

          <div class="perspectives-grid">
            ${node.perspectives.map(p => `
              <div class="persp-item">
                <div class="persp-source">
                  <span>${escapeHtml(p.source_id)}</span>
                  <span style="font-size: 0.68rem; color: var(--text-subtle);">${escapeHtml(p.epistemic_status)}</span>
                </div>
                <div class="persp-claim">${escapeHtml(p.claim)}</div>
              </div>
            `).join('')}
          </div>

          <div class="node-resolution">
            <strong>Historiographical &amp; Epistemic Resolution:</strong> ${escapeHtml(node.unresolved_elements)}
          </div>
        </article>
      `;
    }).join('')}

    <footer style="margin-top: 60px; padding-top: 24px; border-top: 1px solid var(--border-light); font-size: 0.85rem; color: var(--text-muted); text-align: center;">
      Intellectualist BKRS v1.0 • Multi-Source Historiographical Subject Engine • Zero Unsupported Assertions
    </footer>

  </div>

  <script src="../assets/js/reader-controls.js"></script>
</body>
</html>
`;

const outPath = path.join(__dirname, '..', '..', 'docs', 'cross-book', 'bhagat-singh-synthesis.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log(`Saved Bhagat Singh Multi-Source Synthesis Portal to ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
