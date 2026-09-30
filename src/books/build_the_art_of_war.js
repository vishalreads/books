/**
 * Definitive BKRS Reconstruction Engine for The Art of War (Sun Tzu)
 * Migrates from legacy dark-mode shell to canonical BKRS Editorial Cream Reader Shell:
 * - 26 Canonical Units across the 13 Classical Chapters
 * - View A (The 13 Strategic Chapters), View B (The 5 Strategic Factors & Terrain Compass)
 * - Full integration with reader-shell.css, theme.css, and reader-controls.js
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/the-art-of-war');
const ku = JSON.parse(fs.readFileSync(path.join(targetDir, 'knowledge-units.json'), 'utf8'));
const units = ku.units;

// Group units by chapter
const chaptersMap = new Map();
units.forEach(u => {
  const chNum = u.chapter_number;
  if (!chaptersMap.has(chNum)) {
    chaptersMap.set(chNum, {
      number: chNum,
      title: u.chapter_title,
      units: []
    });
  }
  chaptersMap.get(chNum).units.push(u);
});

const chapters = Array.from(chaptersMap.values()).sort((a, b) => a.number - b.number);

// GENERATE HTML WITH BKRS CREAM READER SHELL
console.log("Compiling index.html with BKRS Editorial Cream Reader Shell for The Art of War...");
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Art of War — Sun Tzu | BKRS Master Reader</title>
  
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

    .chapter-block {
      margin-bottom: 56px;
    }

    .unit-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 36px 44px;
      margin-bottom: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    @media (max-width: 768px) {
      .unit-card-deep { padding: 22px 18px; margin-bottom: 24px; }
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
      font-size: 1.85rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 16px;
    }

    .claim-box {
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
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The 13 Chapters</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: Strategic Compass</button>
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
        <div class="sidebar-title">The 13 Chapters</div>
        <div class="sidebar-meta">13 Chapters • 26 Invariant Units</div>
      </div>
      <div class="sidebar-toc" id="sidebar-toc">
        ${chapters.map(ch => `
          <div class="nav-epoch-title">Chapter ${ch.number}: ${ch.title}</div>
          ${ch.units.map(u => `
            <div class="nav-ch-item">
              <a href="#${u.id}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
                <span class="nav-ch-num">${u.id.split('-').pop()}</span>
                <span class="nav-ch-title">${u.section_title || u.primary_axiom || u.id}</span>
              </a>
            </div>
          `).join('')}
        `).join('')}
      </div>
    </aside>

    <!-- MAIN READING VIEWPORT -->
    <main class="reader-viewport" id="reader-viewport">
      <div class="reader-measure" id="reader-measure">

        <!-- VIEW A: THE 13 CHAPTERS -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Single-Volume Master Reconstruction
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              The Art of War (孫子兵法)
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A comprehensive strategic reconstruction of Sun Tzu’s classical treatise. Analyzing deception, the five fundamental factors, formlessness, energy manipulation, tactical terrain, and the supreme art of winning without fighting.
            </div>
          </div>

          <!-- THE 13 CHAPTERS -->
          ${chapters.map(ch => `
            <div class="chapter-block" id="chapter-${ch.number}">
              <div style="margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid var(--border-color);">
                <span style="font-family: var(--font-sans); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); display: block; margin-bottom: 4px;">
                  Chapter ${ch.number}
                </span>
                <h2 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--text-main);">${ch.title}</h2>
              </div>

              ${ch.units.map(u => `
                <div class="unit-card-deep" id="${u.id}">
                  <div class="unit-meta-line">
                    <span class="unit-badge">${u.id}</span>
                    <span class="unit-epistemic">${u.epistemic_status}</span>
                  </div>

                  <h3 class="unit-heading-deep">${u.section_title || u.primary_axiom}</h3>

                  <div class="claim-box">
                    ${u.claim}
                  </div>

                  <div class="quote-box">
                    "${u.verbatim_quote}"
                    <cite style="display: block; font-family: var(--font-sans); font-size: 0.82rem; font-style: normal; color: var(--text-muted); text-align: right; margin-top: 8px;">
                      — Sun Tzu (${u.source_coordinates || u.chapter_title})
                    </cite>
                  </div>

                  <div class="heuristic-box">
                    <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
                      Operational Heuristic:
                    </strong>
                    ${Array.isArray(u.actionable_heuristics) ? u.actionable_heuristics.join(' • ') : u.actionable_heuristics}
                  </div>
                </div>
              `).join('')}
            </div>
          `).join('')}

        </section>

        <!-- VIEW B: STRATEGIC COMPASS -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The 5 Fundamental Strategic Factors</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Core Invariants Determining Victory Before Combat Begins</p>
          </div>

          <div style="display: grid; gap: 20px;">
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-crimson); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-crimson); margin-bottom: 6px;">1. The Moral Law (Tao)</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Causes the people to be in complete accord with their ruler, so that they will follow him regardless of their lives, undismayed by any danger.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-gold); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-gold); margin-bottom: 6px;">2. Heaven (Cosmic & Seasonal Timing)</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Signifies night and day, cold and heat, times and seasons. Aligning operations with the natural temporal rhythms of reality.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-forest); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-forest); margin-bottom: 6px;">3. Earth (Physical Terrain & Distance)</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Comprises distances, great and small; danger and security; open ground and narrow passes; the chances of life and death.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid #2b6cb0; border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #2b6cb0; margin-bottom: 6px;">4. The Commander (Virtues of Leadership)</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Stands for the five cardinal virtues of the sovereign general: Wisdom, Sincerity, Benevolence, Courage, and Strictness.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid #6b46c1; border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #6b46c1; margin-bottom: 6px;">5. Method and Discipline (Logistical Systems)</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">The marshaling of the army in its proper subdivisions, the graduations of rank among the officers, the maintenance of roads, and control of expenditure.</p>
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
console.log('Saved index.html (Definitive BKRS Reader Shell with 26 Units and Strategic Compass)');
