/* ==========================================================================
   BKRS Reading Interface — Client Controls & Progressive Interactions
   ========================================================================== */

(function () {
  'use strict';

  // 1. Theme Controller
  const themes = ['theme-cream', 'theme-midnight', 'theme-sepia'];
  let currentThemeIdx = 0;

  function initTheme() {
    const saved = localStorage.getItem('bkrs-theme');
    if (saved && themes.includes(saved)) {
      document.body.classList.remove('theme-midnight', 'theme-sepia');
      if (saved !== 'theme-cream') {
        document.body.classList.add(saved);
      }
      currentThemeIdx = themes.indexOf(saved);
    }
    updateThemeBtnLabel();
  }

  function cycleTheme() {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const nextTheme = themes[currentThemeIdx];
    document.body.classList.remove('theme-midnight', 'theme-sepia');
    if (nextTheme !== 'theme-cream') {
      document.body.classList.add(nextTheme);
    }
    localStorage.setItem('bkrs-theme', nextTheme);
    updateThemeBtnLabel();
  }

  function updateThemeBtnLabel() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    const labels = {
      'theme-cream': '☀ Cream',
      'theme-midnight': '☾ Night',
      'theme-sepia': '📜 Sepia'
    };
    btn.innerHTML = labels[themes[currentThemeIdx]] || 'Theme';
  }

  // 2. Typography Controller
  let fontScale = parseInt(localStorage.getItem('bkrs-font-scale') || '16', 10);
  let isSansMode = localStorage.getItem('bkrs-font-sans') === 'true';

  function initTypography() {
    document.documentElement.style.setProperty('--font-scale', fontScale + 'px');
    if (isSansMode) {
      document.body.classList.add('font-sans-mode');
    }
  }

  function adjustFontSize(delta) {
    fontScale = Math.min(22, Math.max(13, fontScale + delta));
    document.documentElement.style.setProperty('--font-scale', fontScale + 'px');
    localStorage.setItem('bkrs-font-scale', fontScale);
  }

  function toggleSansMode() {
    isSansMode = !isSansMode;
    document.body.classList.toggle('font-sans-mode', isSansMode);
    localStorage.setItem('bkrs-font-sans', isSansMode);
  }

  // 3. Sidebar & Focus Mode Controllers
  function toggleSidebar() {
    const isMobile = window.innerWidth <= 960;
    if (isMobile) {
      document.body.classList.toggle('sidebar-open');
    } else {
      document.body.classList.toggle('sidebar-collapsed');
    }
  }

  function toggleFocusMode() {
    document.body.classList.toggle('focus-mode');
    const isFocus = document.body.classList.contains('focus-mode');
    const btn = document.getElementById('focusToggleBtn');
    if (btn) {
      btn.classList.toggle('active', isFocus);
    }
    if (isFocus) {
      document.body.classList.add('sidebar-collapsed');
    }
  }

  // 4. View Switcher Controller (View A / View B / View C)
  function switchView(viewId) {
    const views = ['journey', 'knowledge', 'experience'];
    if (!views.includes(viewId)) viewId = 'journey';

    views.forEach(v => {
      const container = document.getElementById('view-' + v);
      const btn = document.getElementById('btn-view-' + v);
      if (container) {
        container.style.display = (v === viewId) ? 'block' : 'none';
      }
      if (btn) {
        btn.classList.toggle('active', v === viewId);
      }
    });

    history.replaceState(null, '', '#' + viewId);
  }

  // 5. Source Trace Drawer Controller
  window.openSourceTrace = function (unitId) {
    const drawer = document.getElementById('sourceTraceDrawer');
    const backdrop = document.getElementById('traceBackdrop');
    const contentBox = document.getElementById('traceDrawerContent');
    const dataNode = document.getElementById('trace-data-' + unitId);

    if (!drawer || !backdrop || !contentBox || !dataNode) return;

    try {
      const data = JSON.parse(dataNode.textContent);
      contentBox.innerHTML = `
        <div class="trace-field">
          <div class="trace-field-label">Unit Identifier</div>
          <div class="trace-field-val"><code>${data.scene_id || unitId}</code></div>
        </div>
        <div class="trace-field">
          <div class="trace-field-label">Source Location</div>
          <div class="trace-field-val">Chapter ${data.chapter}, ${data.source_location || 'Textual Sequence'}</div>
        </div>
        <div class="trace-field">
          <div class="trace-field-label">Epistemic Status</div>
          <div class="trace-field-val"><span class="badge badge-source-fact">${data.epistemic_status || 'SOURCE FACT'}</span></div>
        </div>
        <div class="trace-field">
          <div class="trace-field-label">Materiality Classification</div>
          <div class="trace-field-val"><span class="badge badge-${data.materiality || 'important'}">${data.materiality || 'Important'}</span> — <em>${data.materiality_reason || 'Core narrative continuity'}</em></div>
        </div>
        <div class="trace-field">
          <div class="trace-field-label">Chronological Position</div>
          <div class="trace-field-val">${data.time || 'Relative sequence'} (${data.location || 'Setting'})</div>
        </div>
        <div class="trace-field">
          <div class="trace-field-label">Foreshadowing & Callbacks</div>
          <div class="trace-field-val">${(data.foreshadowing || []).concat(data.callbacks || []).join('; ') || 'Direct episode'}</div>
        </div>
      `;
      drawer.classList.add('open');
      backdrop.classList.add('open');
    } catch (e) {
      console.error("Failed to parse trace data for unit", unitId, e);
    }
  };

  window.closeSourceTrace = function () {
    const drawer = document.getElementById('sourceTraceDrawer');
    const backdrop = document.getElementById('traceBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  };

  // 6. Search Controller (Static Live Search)
  let searchIndex = [];

  function initSearch() {
    const indexNode = document.getElementById('bkrs-search-index');
    if (indexNode) {
      try {
        searchIndex = JSON.parse(indexNode.textContent);
      } catch (e) {
        console.error("Failed to parse search index", e);
      }
    }
  }

  function openSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    if (modal && input) {
      modal.classList.add('open');
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }

  function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('open');
  }

  function renderSearchResults(query) {
    const list = document.getElementById('searchResultsList');
    if (!list) return;

    query = (query || '').toLowerCase().trim();
    if (!query) {
      list.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Type to search all 36 scenes, characters, and motifs...</div>';
      return;
    }

    const matches = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             item.content.toLowerCase().includes(query) ||
             (item.motifs && item.motifs.join(' ').toLowerCase().includes(query)) ||
             (item.characters && item.characters.join(' ').toLowerCase().includes(query));
    }).slice(0, 10);

    if (matches.length === 0) {
      list.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching units found.</div>';
      return;
    }

    list.innerHTML = matches.map(m => `
      <a href="#${m.id}" class="search-result-item" onclick="closeSearch(); switchView('journey');">
        <div class="search-result-title">Ch. ${m.chapter}: ${m.title}</div>
        <div class="search-result-snippet">${m.snippet}</div>
      </a>
    `).join('');
  }

  // 7. Active Recall Card Toggles
  window.toggleFlashcard = function (btn) {
    const card = btn.closest('.flashcard');
    if (card) {
      card.classList.toggle('revealed');
      btn.textContent = card.classList.contains('revealed') ? 'Hide Answer ▲' : 'Show Answer ▼';
    }
  };

  // 8. Global Keyboard Shortcuts
  document.addEventListener('keydown', function (e) {
    // Focus Mode: F
    if (e.key === 'f' || e.key === 'F') {
      if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        toggleFocusMode();
      }
    }
    // Search: /
    if (e.key === '/') {
      if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch();
      }
    }
    // Escape closes modals
    if (e.key === 'Escape') {
      closeSearch();
      closeSourceTrace();
    }
    // Sidebar toggle: Ctrl + \
    if (e.ctrlKey && e.key === '\\') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // 9. Document Ready Initialization
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initTypography();
    initSearch();

    // Attach listeners
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) themeBtn.addEventListener('click', cycleTheme);

    const fontIncBtn = document.getElementById('fontIncBtn');
    if (fontIncBtn) fontIncBtn.addEventListener('click', () => adjustFontSize(1));

    const fontDecBtn = document.getElementById('fontDecBtn');
    if (fontDecBtn) fontDecBtn.addEventListener('click', () => adjustFontSize(-1));

    const sansToggleBtn = document.getElementById('sansToggleBtn');
    if (sansToggleBtn) sansToggleBtn.addEventListener('click', toggleSansMode);

    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);

    const focusBtn = document.getElementById('focusToggleBtn');
    if (focusBtn) focusBtn.addEventListener('click', toggleFocusMode);

    const searchBtn = document.getElementById('searchTriggerBtn');
    if (searchBtn) searchBtn.addEventListener('click', openSearch);

    const searchClose = document.getElementById('searchModalClose');
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
    }

    const searchBackdrop = document.getElementById('searchModal');
    if (searchBackdrop) {
      searchBackdrop.addEventListener('click', (e) => {
        if (e.target === searchBackdrop) closeSearch();
      });
    }

    const traceBackdrop = document.getElementById('traceBackdrop');
    if (traceBackdrop) traceBackdrop.addEventListener('click', closeSourceTrace);

    const traceClose = document.getElementById('traceDrawerClose');
    if (traceClose) traceClose.addEventListener('click', closeSourceTrace);

    // View Switcher Buttons
    ['journey', 'knowledge', 'experience'].forEach(v => {
      const btn = document.getElementById('btn-view-' + v);
      if (btn) btn.addEventListener('click', () => switchView(v));
    });

    // Check URL hash for initial view
    const hash = window.location.hash.replace('#', '');
    if (['journey', 'knowledge', 'experience'].includes(hash)) {
      switchView(hash);
    } else {
      switchView('journey');
    }
  });

  // Export functions to global scope
  window.switchView = switchView;
  window.closeSearch = closeSearch;
})();
