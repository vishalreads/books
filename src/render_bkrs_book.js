/**
 * BKRS Canonical Book Renderer
 * Renders production BKRS Reading Interfaces directly from knowledge-units.json
 * Supports multi-genre rendering (Literary Fiction, Analytical Nonfiction, and Historical Biography)
 */

const fs = require('fs');
const path = require('path');
const { adaptKnowledgeUnits } = require('./bkrs/bkrs_adapter');
const { renderFictionViews } = require('./bkrs/render_fiction');
const { renderNonfictionViews } = require('./bkrs/render_nonfiction');
const { renderHistoricalViews } = require('./bkrs/render_historical');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderBookMaster(bookSlug) {
  const baseDir = path.join(__dirname, '..', 'docs', 'distillations', bookSlug);
  const kuPath = path.join(baseDir, 'knowledge-units.json');
  const outputPath = path.join(baseDir, 'index.html');

  if (!fs.existsSync(kuPath)) {
    throw new Error(`Cannot render book: ${kuPath} does not exist.`);
  }

  const model = adaptKnowledgeUnits(kuPath);
  const meta = model.metadata;
  const isHistorical = model.is_historical;
  const isNonfiction = model.is_nonfiction;

  // Render Views according to genre
  let views;
  let viewALabel;
  let viewBLabel;
  let viewCLabel;

  if (isHistorical) {
    views = renderHistoricalViews(model);
    viewALabel = "The Source Journey";
    viewBLabel = "The Relational Map";
    viewCLabel = "The Dialectical Engine";
  } else if (isNonfiction) {
    views = renderNonfictionViews(model);
    viewALabel = "The Argument Journey";
    viewBLabel = "The Conceptual Blueprint";
    viewCLabel = "The Operational Engine";
  } else {
    views = renderFictionViews(model);
    viewALabel = "The Source Journey";
    viewBLabel = "The Knowledge Map";
    viewCLabel = "The Experience";
  }

  // Build Sidebar Navigation List
  let navItemsHtml = '';
  model.chapters.forEach(ch => {
    const unitCount = ch.units ? ch.units.length : (ch.scenes ? ch.scenes.length : 0);
    let chTag = '';
    if (isHistorical) {
      if (ch.chapter_key.includes('epigraph')) chTag = 'Epi';
      else if (ch.chapter_key.includes('prologue')) chTag = 'Pro';
      else if (ch.chapter_number === 56 || ch.chapter_key.includes('appendix')) chTag = 'App';
      else chTag = 'Ch ' + ch.chapter_number;
    } else {
      chTag = ch.chapter_number === 0 ? 'Intro' : (ch.chapter_number === 21 && isNonfiction ? 'Post' : 'Ch ' + ch.chapter_number);
    }

    const anchorId = isHistorical ? `section-${ch.chapter_key}` : `chapter-${ch.chapter_number}`;

    navItemsHtml += `
      <div class="nav-chapter-item">
        <a href="#${anchorId}" class="nav-chapter-link" onclick="handleNavClick(event, '${anchorId}')">
          <span class="nav-ch-num">${chTag}</span>
          <span class="nav-ch-title">${escapeHtml(ch.chapter_title)}</span>
          <span class="nav-ch-count">${unitCount}</span>
        </a>
      </div>
    `;
  });

  const fullHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream" data-font="serif" data-size="base">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(meta.title)} — BKRS Canonical Book Master</title>
  
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body class="bkrs-app">

  <!-- TOP APPLICATION BAR -->
  <header class="reader-topbar" id="reader-topbar">
    <div class="topbar-left">
      <button class="topbar-btn" id="sidebar-toggle" onclick="toggleSidebar()" title="Toggle Sidebar (Ctrl+\\)">
        ☰
      </button>
      <a href="../../index.html" class="topbar-back-link" title="Return to Intellectualist Library">
        ← Master Library
      </a>
      <div class="topbar-divider"></div>
      <div class="topbar-title-block">
        <div class="topbar-book-title">${escapeHtml(meta.title)}</div>
        <div class="topbar-book-author">${escapeHtml(meta.author)}${meta.translator ? ' • Trans. ' + escapeHtml(meta.translator) : ''} (${meta.year || 'Canonical'})</div>
      </div>
    </div>

    <!-- 3-VIEW SWITCHER -->
    <div class="view-switcher-pill" role="tablist">
      <button class="view-tab-btn active" id="btn-view-journey" role="tab" aria-selected="true" data-view="view-journey" onclick="switchView('view-journey')">
        <span class="view-icon">📖</span> ${viewALabel}
      </button>
      <button class="view-tab-btn" id="btn-view-map" role="tab" aria-selected="false" data-view="view-map" onclick="switchView('view-map')">
        <span class="view-icon">🗺️</span> ${viewBLabel}
      </button>
      <button class="view-tab-btn" id="btn-view-experience" role="tab" aria-selected="false" data-view="view-experience" onclick="switchView('view-experience')">
        <span class="view-icon">⚡</span> ${viewCLabel}
      </button>
    </div>

    <!-- CONTROLS RIGHT -->
    <div class="topbar-right">
      <button class="control-btn" id="search-btn" onclick="openSearchModal()" title="Search Book (/)">
        🔍 <span class="shortcut-tag">/</span>
      </button>
      <button class="control-btn" id="theme-btn" onclick="cycleTheme()" title="Switch Theme (T)">
        🎨 Theme
      </button>
      <button class="control-btn" id="font-btn" onclick="cycleFont()" title="Toggle Serif / Sans">
        Aa
      </button>
      <button class="control-btn" id="size-btn" onclick="cycleFontSize()" title="Text Size">
        A±
      </button>
      <button class="control-btn" id="focus-btn" onclick="toggleFocusMode()" title="Focus Mode (F)">
        🔲 Focus
      </button>
    </div>
  </header>

  <!-- MAIN READING WRAPPER -->
  <div class="reader-workspace" id="reader-workspace">
    
    <!-- COLLAPSIBLE SIDEBAR -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <span class="meta-label">TABLE OF CONTENTS</span>
        <div class="sidebar-stats">${model.total_units} Content Units • Complete</div>
      </div>
      <div class="sidebar-scroll-area">
        ${navItemsHtml}
      </div>
      <div class="sidebar-footer">
        <span class="badge badge-source-fact">BKRS v${meta.system_version}</span>
        <span style="font-size:0.75rem; color:var(--text-subtle);">${isHistorical ? 'Historical Engine' : (isNonfiction ? 'Nonfiction Engine' : 'Fiction Engine')}</span>
      </div>
    </aside>

    <!-- CENTRAL READING COLUMN -->
    <main class="reading-viewport" id="reading-viewport">
      <div class="reading-measure-container">
        
        <!-- BOOK MASTHEAD -->
        <header class="book-masthead">
          <span class="meta-label">BKRS CANONICAL MASTER CODEX</span>
          <h1 class="book-display-title">${escapeHtml(meta.title)}</h1>
          <div class="book-display-meta">
            <span><strong>Author:</strong> ${escapeHtml(meta.author)}</span>
            <span><strong>Year:</strong> ${meta.year || 'N/A'}</span>
            <span><strong>Genre:</strong> ${escapeHtml(meta.genre || 'historical_biography')}</span>
            <span><strong>Units:</strong> ${model.total_units} Canonical Units</span>
          </div>
        </header>

        <!-- VIEW A CONTAINER -->
        <div class="view-panel active" id="view-journey">
          ${views.journeyHtml}
        </div>

        <!-- VIEW B CONTAINER -->
        <div class="view-panel" id="view-map" style="display: none;">
          ${views.knowledgeMapHtml}
        </div>

        <!-- VIEW C CONTAINER -->
        <div class="view-panel" id="view-experience" style="display: none;">
          ${views.experienceHtml}
        </div>

      </div>
    </main>
  </div>

  <!-- SOURCE TRACE DRAWER -->
  <div class="source-trace-overlay" id="trace-overlay" onclick="closeSourceTrace()"></div>
  <aside class="source-trace-drawer" id="trace-drawer">
    <div class="drawer-header">
      <div>
        <span class="meta-label">EPISTEMIC TRACE & MATERIALITY</span>
        <h3 id="drawer-unit-id" style="color: var(--accent-crimson); font-size: 1.15rem; margin-top: 4px;">Unit Details</h3>
      </div>
      <button class="drawer-close-btn" onclick="closeSourceTrace()">✕</button>
    </div>
    <div class="drawer-body" id="drawer-body">
      <!-- Populated via JavaScript -->
    </div>
  </aside>

  <!-- SEARCH MODAL -->
  <div class="search-modal-backdrop" id="search-modal" style="display: none;" onclick="handleModalBackdropClick(event)">
    <div class="search-modal-box">
      <div class="search-input-wrapper">
        <span class="search-input-icon">🔍</span>
        <input type="text" id="bkrs-search-input" placeholder="Search arguments, evidence, studies, or keywords..." oninput="handleSearchQuery(this.value)">
        <button class="search-close-x" onclick="closeSearchModal()">✕</button>
      </div>
      <div class="search-results-list" id="search-results-list">
        <div class="search-empty-state">Type a search query above to inspect canonical units.</div>
      </div>
    </div>
  </div>

  <!-- STATIC SEARCH PAYLOAD -->
  <script type="application/json" id="bkrs-search-data">
    ${JSON.stringify(model.search_index).replace(/</g, '\\u003c')}
  </script>

  <!-- READER ENGINE SCRIPT -->
  <script src="../../assets/js/reader-controls.js"></script>

  <script>
    function toggleFlashcard(btn) {
      if (window.toggleFlashcard) {
        window.toggleFlashcard(btn);
      }
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(outputPath, fullHtml, 'utf-8');
  console.log(`Rendered BKRS Book Master: ${outputPath} (${(Buffer.byteLength(fullHtml, 'utf-8') / 1024).toFixed(1)} KB)`);
}

if (require.main === module) {
  const slug = process.argv[2] || 'bhagat-singh-a-life-in-revolution';
  renderBookMaster(slug);
}

module.exports = {
  renderBookMaster
};
