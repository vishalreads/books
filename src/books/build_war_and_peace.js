/**
 * Definitive BKRS Reconstruction Engine for War and Peace (Leo Tolstoy)
 * Migrates to canonical BKRS Editorial Cream Reader Shell:
 * - 20 Invariant Units covering 15 Books + 2 Epilogues
 * - View A (The 20 Epic Units), View B (The 4 Families & The Calculus of History)
 * - Full integration with reader-shell.css, theme.css, and reader-controls.js
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/war-and-peace');
const ku = JSON.parse(fs.readFileSync(path.join(targetDir, 'knowledge-units.json'), 'utf8'));
const units = ku;

// Group into 4 Chronological Volumes
const volumes = [
  {
    roman: "I",
    title: "Volume I: Peace, Salon Vanity, and the Austrian Campaign (1805)",
    units: units.filter(u => u.unit_number >= 1 && u.unit_number <= 5)
  },
  {
    roman: "II",
    title: "Volume II: Freemasonry, Spiritual Crisis, and Love (1806–1811)",
    units: units.filter(u => u.unit_number >= 6 && u.unit_number <= 9)
  },
  {
    roman: "III",
    title: "Volume III: The Napoleonic Invasion & The Cataclysm of Borodino (1812)",
    units: units.filter(u => u.unit_number >= 10 && u.unit_number <= 15)
  },
  {
    roman: "IV",
    title: "Volume IV & Epilogues: The Burning of Moscow, Retreat, & The Calculus of History (1812–1820)",
    units: units.filter(u => u.unit_number >= 16 && u.unit_number <= 20)
  }
];

// GENERATE HTML WITH BKRS CREAM READER SHELL
console.log("Compiling index.html with BKRS Editorial Cream Reader Shell for War and Peace...");
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>War and Peace (Война и миръ) — Leo Tolstoy | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --accent-crimson: #8b181b;
      --accent-gold: #b38628;
      --accent-forest: #225e43;
      --border-color: #e5e0d3;
    }

    [data-theme="cream"] {
      --bg-canvas: #fbf9f4;
      --bg-card: #f5f2ea;
      --bg-card-subtle: #efebe0;
      --border-color: #e2dccf;
      --border-color-focus: #b5a895;
      --text-main: #24211e;
      --text-muted: #5c5549;
      --text-subtle: #857b6c;
      --accent-crimson: #8b181b;
      --accent-gold: #966b1d;
      --accent-forest: #225e43;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-serif, "EB Garamond", Georgia, serif);
      font-size: 1.15rem;
      line-height: 1.8;
      transition: background-color 0.25s ease, color 0.25s ease;
      -webkit-font-smoothing: antialiased;
    }

    .volume-block {
      margin-bottom: 56px;
    }

    .unit-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 38px 46px;
      margin-bottom: 36px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    @media (max-width: 768px) {
      .unit-card-deep { padding: 24px 20px; margin-bottom: 26px; }
    }

    .unit-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      flex-wrap: wrap;
      gap: 10px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 10px;
    }
    .unit-badge {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 3px 10px;
      background: #8b181b15;
      color: var(--accent-crimson);
      border: 1px solid var(--accent-crimson);
      border-radius: 4px;
    }
    .unit-epistemic {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      background: var(--bg-card-subtle);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-heading-deep {
      font-family: var(--font-serif);
      font-size: 1.9rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 16px;
    }

    .insight-box {
      font-size: 1.15rem;
      line-height: 1.75;
      margin-bottom: 18px;
      font-weight: 500;
      color: var(--text-main);
    }

    .quote-box {
      margin: 20px 0;
      padding: 18px 24px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.12rem;
    }

    .heuristic-box {
      margin-top: 20px;
      padding: 16px 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
    }

    .nav-epoch-title {
      font-family: var(--font-sans);
      font-size: 0.74rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent-crimson);
      padding: 12px 16px 4px;
      display: block;
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
        <a href="../../index.html" class="brand-link">
          <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo">
          <div class="brand-meta">
            <span class="brand-title">THE INTELLECTUALIST</span>
            <span class="brand-sub">BKRS Master Distillation Series</span>
          </div>
        </a>
      </div>

      <!-- VIEW SELECTOR BUTTONS -->
      <div class="view-pills" style="display: flex; gap: 6px;">
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The 20 Units</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: Calculus of History</button>
      </div>

      <!-- THEME SELECTOR -->
      <div class="top-controls">
        <select class="theme-select" id="theme-select" onchange="setTheme(this.value)">
          <option value="cream" selected>Editorial Cream</option>
          <option value="light">Crisp Light</option>
          <option value="sepia">Warm Sepia</option>
          <option value="dark">Nocturne Dark</option>
        </select>
        <div class="font-toggle" style="display: flex; gap: 4px;">
          <button class="icon-btn" onclick="setFont('serif')" title="Serif Font" style="font-family: serif; font-weight: bold;">T</button>
          <button class="icon-btn" onclick="setFont('sans')" title="Sans Font" style="font-family: sans-serif; font-weight: bold;">S</button>
        </div>
      </div>
    </div>
  </header>

  <div class="reader-shell" id="reader-shell">
    
    <!-- LEFT SIDEBAR TOC -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <div class="sidebar-title">Tolstoy's Epic</div>
        <div class="sidebar-meta">4 Volumes • 20 Invariant Units</div>
      </div>
      <div class="sidebar-toc" id="sidebar-toc">
        ${volumes.map(v => `
          <div class="nav-epoch-title">${v.title}</div>
          ${v.units.map(u => `
            <div class="nav-ch-item">
              <a href="#${u.id}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
                <span class="nav-ch-num">${u.unit_number}</span>
                <span class="nav-ch-title">${u.title}</span>
              </a>
            </div>
          `).join('')}
        `).join('')}
      </div>
    </aside>

    <!-- MAIN READING VIEWPORT -->
    <main class="reader-viewport" id="reader-viewport">
      <div class="reader-measure" id="reader-measure">

        <!-- VIEW A: THE 20 UNITS -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Single-Volume Master Reconstruction
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              War and Peace (Война и миръ)
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A comprehensive philosophical and narrative reconstruction of Leo Tolstoy’s epic. Dismantling the Myth of the Great Man, analyzing the psychology of the Bolkonsky, Bezukhov, and Rostov dynasties, and demonstrating the calculus of human history through Austerlitz, Borodino, and the Burning of Moscow.
            </div>
          </div>

          <!-- THE 4 VOLUMES -->
          ${volumes.map(v => `
            <div class="volume-block" id="volume-${v.roman.toLowerCase()}">
              <div style="margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--border-color);">
                <span style="font-family: var(--font-sans); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); display: block; margin-bottom: 4px;">
                  Movement ${v.roman}
                </span>
                <h2 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--text-main);">${v.title}</h2>
              </div>

              ${v.units.map(u => `
                <div class="unit-card-deep" id="${u.id}">
                  <div class="unit-meta-line">
                    <div>
                      <span class="unit-badge">Unit ${u.unit_number}</span>
                      <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
                        ${u.book_part || ''} ${u.chapters ? `(${u.chapters})` : ''}
                      </span>
                    </div>
                    <span class="unit-epistemic">${u.epistemic_status}</span>
                  </div>

                  <h3 class="unit-heading-deep">${u.title}</h3>

                  <div style="font-family: var(--font-sans); font-size: 0.85rem; color: var(--text-subtle); margin-bottom: 16px;">
                    <strong>Primary Figures:</strong> ${Array.isArray(u.primary_figures) ? u.primary_figures.join(', ') : u.primary_figures}
                  </div>

                  <div class="insight-box">
                    ${u.core_insight}
                  </div>

                  <div class="narrative-prose">
                    ${u.historical_context ? `<p style="margin-bottom: 14px;"><strong>Historical Context:</strong> ${u.historical_context}</p>` : ''}
                    ${Array.isArray(u.key_experiences) ? u.key_experiences.map(exp => `<p style="margin-bottom: 12px;">• ${exp}</p>`).join('') : ''}
                  </div>

                  <div class="quote-box">
                    "${u.verbatim_quote}"
                    <cite style="display: block; font-family: var(--font-sans); font-size: 0.82rem; font-style: normal; color: var(--text-muted); text-align: right; margin-top: 8px;">
                      — Leo Tolstoy (War and Peace, ${u.book_part || 'Unit ' + u.unit_number})
                    </cite>
                  </div>

                  <div class="heuristic-box">
                    <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
                      Tolstoyan Philosophical Heuristic:
                    </strong>
                    ${Array.isArray(u.operational_heuristics) ? u.operational_heuristics.join(' • ') : u.operational_heuristics}
                  </div>
                </div>
              `).join('')}
            </div>
          `).join('')}

        </section>

        <!-- VIEW B: CALCULUS OF HISTORY -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">Tolstoy's Calculus of History</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Mathematical Refutation of the 'Great Man' Theory</p>
          </div>

          <div style="padding: 28px; background: var(--bg-card); border-left: 4px solid var(--accent-crimson); border-radius: 8px; margin-bottom: 32px;">
            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--accent-crimson); margin-bottom: 12px;">
              The Integration of Infinitesimals (dx)
            </h3>
            <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
              Tolstoy rejects the historians who believe that Napoleon, Alexander, or Kutuzov caused millions of men to slaughter each other. A king is history's slave: monarchical decrees merely reflect the predetermined convergence of millions of independent human wills.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.7; font-style: italic; color: var(--text-muted);">
              "To study the laws of history we must completely change the subject of our examination, leave aside the kings, ministers, and generals, and study the common, infinitesimal elements by which the masses are driven."
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div style="padding: 22px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
              <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--accent-gold); margin-bottom: 8px;">The Bolkonskys (Prince Andrei & Princess Marya)</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The intellect, stoic duty, military glory, and the discovery of the 'infinite sky of Austerlitz'—transcending vanity through mortality and divine forgiveness.</p>
            </div>
            <div style="padding: 22px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
              <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--accent-forest); margin-bottom: 8px;">The Bezukhovs (Pierre Bezukhov)</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The seeker of truth: wandering through wealth, dissipation, Freemasonry, and the duel with Dolokhov, finding salvation through peasant Platon Karataev.</p>
            </div>
            <div style="padding: 22px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
              <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #2b6cb0; margin-bottom: 8px;">The Rostovs (Natasha & Nikolai)</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The instinctive life: passion, hunting, music, financial ruin, and the regenerative power of organic human affection over intellectual calculation.</p>
            </div>
            <div style="padding: 22px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
              <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #6b46c1; margin-bottom: 8px;">The Kuragins (Helene & Anatole)</h4>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The predatory Petersburg vanity: social climbing, cynicism, physical beauty without soul, and moral bankruptcy.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    function switchView(viewName) {
      document.querySelectorAll('.view-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));

      if (viewName === 'journey') {
        document.getElementById('view-journey').style.display = 'block';
        document.getElementById('btn-view-journey').classList.add('active');
      } else if (viewName === 'map') {
        document.getElementById('view-map').style.display = 'block';
        document.getElementById('btn-view-map').classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeSidebarOnMobile() {
      if (window.innerWidth <= 1024) {
        document.getElementById('reader-shell').classList.remove('sidebar-open');
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Saved index.html (Definitive BKRS Reader Shell with 20 Units and Calculus of History)');
