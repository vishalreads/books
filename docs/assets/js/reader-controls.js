/* ==========================================================================
   BKRS Reading Interface — Unified Client Controls & Progressive Interactions
   Supports Literary Fiction, Analytical Nonfiction, and Historical Biography
   ========================================================================== */

(function () {
  'use strict';

  // 1. THEME CONTROLLER
  const themes = ['theme-cream', 'theme-midnight', 'theme-sepia'];
  let currentThemeIdx = 0;

  function initTheme() {
    const saved = localStorage.getItem('bkrs-theme');
    if (saved && (themes.includes(saved) || ['cream', 'midnight', 'sepia'].includes(saved))) {
      const normalizedTheme = saved.startsWith('theme-') ? saved : 'theme-' + saved;
      applyTheme(normalizedTheme);
      currentThemeIdx = themes.indexOf(normalizedTheme);
    } else {
      applyTheme('theme-cream');
      currentThemeIdx = 0;
    }
  }

  function applyTheme(themeClass) {
    document.body.classList.remove('theme-cream', 'theme-midnight', 'theme-sepia');
    document.body.classList.add(themeClass);
    const themeName = themeClass.replace('theme-', '');
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('bkrs-theme', themeClass);
    updateThemeBtnLabel(themeClass);
  }

  function cycleTheme() {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    applyTheme(themes[currentThemeIdx]);
  }

  function updateThemeBtnLabel(themeClass) {
    const btns = [document.getElementById('theme-btn'), document.getElementById('themeToggleBtn')].filter(Boolean);
    const labels = {
      'theme-cream': '☀ Cream',
      'theme-midnight': '☾ Night',
      'theme-sepia': '📜 Sepia'
    };
    const label = labels[themeClass] || 'Theme';
    btns.forEach(btn => {
      btn.innerHTML = `🎨 ${label}`;
    });
  }

  // 2. TYPOGRAPHY CONTROLLER
  let fontScale = parseInt(localStorage.getItem('bkrs-font-scale') || '16', 10);
  let isSansMode = localStorage.getItem('bkrs-font-sans') === 'true';

  function initTypography() {
    document.documentElement.style.setProperty('--font-scale', fontScale + 'px');
    if (isSansMode) {
      document.body.classList.add('font-sans-mode');
      document.documentElement.setAttribute('data-font', 'sans');
    } else {
      document.body.classList.remove('font-sans-mode');
      document.documentElement.setAttribute('data-font', 'serif');
    }
    updateFontBtnLabel();
  }

  function adjustFontSize(delta) {
    fontScale = Math.min(22, Math.max(13, fontScale + delta));
    document.documentElement.style.setProperty('--font-scale', fontScale + 'px');
    localStorage.setItem('bkrs-font-scale', fontScale);
  }

  function cycleFontSize() {
    const scales = [14, 16, 18, 20];
    const nextIdx = (scales.indexOf(fontScale) + 1) % scales.length;
    fontScale = scales[nextIdx];
    document.documentElement.style.setProperty('--font-scale', fontScale + 'px');
    localStorage.setItem('bkrs-font-scale', fontScale);
  }

  function toggleSansMode() {
    isSansMode = !isSansMode;
    document.body.classList.toggle('font-sans-mode', isSansMode);
    document.documentElement.setAttribute('data-font', isSansMode ? 'sans' : 'serif');
    localStorage.setItem('bkrs-font-sans', isSansMode);
    updateFontBtnLabel();
  }

  function cycleFont() {
    toggleSansMode();
  }

  function updateFontBtnLabel() {
    const btns = [document.getElementById('font-btn'), document.getElementById('sansToggleBtn')].filter(Boolean);
    btns.forEach(btn => {
      btn.innerHTML = isSansMode ? 'Sans' : 'Serif';
    });
  }

  // 3. SIDEBAR & FOCUS MODE CONTROLLERS
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
    const btns = [document.getElementById('focus-btn'), document.getElementById('focusToggleBtn')].filter(Boolean);
    btns.forEach(btn => btn.classList.toggle('active', isFocus));
    if (isFocus) {
      document.body.classList.add('sidebar-collapsed');
    }
  }

  function handleNavClick(event, targetId) {
    if (event) event.preventDefault();
    // Switch to View A if in another view
    switchView('view-journey');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Mobile: auto close sidebar
    if (window.innerWidth <= 960) {
      document.body.classList.remove('sidebar-open');
    }
  }

  // 4. THREE-VIEW CONTROLLER
  function normalizeViewId(v) {
    if (!v) return 'view-journey';
    v = v.replace('view-', '');
    if (v === 'journey') return 'view-journey';
    if (v === 'map' || v === 'knowledge') return 'view-map';
    if (v === 'experience' || v === 'deep' || v === 'dialectical' || v === 'engine') return 'view-experience';
    return 'view-journey';
  }

  function switchView(viewId) {
    const normalized = normalizeViewId(viewId);
    const viewList = ['view-journey', 'view-map', 'view-experience'];

    viewList.forEach(v => {
      // Containers: support view-map and view-knowledge, view-experience and view-deep
      const c1 = document.getElementById(v);
      const altId = v === 'view-map' ? 'view-knowledge' : (v === 'view-experience' ? 'view-deep' : null);
      const c2 = altId ? document.getElementById(altId) : null;

      const isTarget = (v === normalized);
      if (c1) {
        c1.style.display = isTarget ? 'block' : 'none';
        c1.classList.toggle('active', isTarget);
      }
      if (c2) {
        c2.style.display = isTarget ? 'block' : 'none';
        c2.classList.toggle('active', isTarget);
      }
    });

    // Update tab button states
    const allTabBtns = document.querySelectorAll('.view-tab-btn, [role="tab"]');
    allTabBtns.forEach(btn => {
      const bView = btn.getAttribute('data-view') || btn.id.replace('btn-', '');
      const btnNormalized = normalizeViewId(bView);
      const isMatch = (btnNormalized === normalized);
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    history.replaceState(null, '', '#' + normalized.replace('view-', ''));
  }

  // 5. SOURCE TRACE DRAWER CONTROLLER
  function openSourceTrace(unitId) {
    const drawer = document.getElementById('trace-drawer') || document.getElementById('sourceTraceDrawer');
    const overlay = document.getElementById('trace-overlay') || document.getElementById('traceBackdrop');
    const bodyBox = document.getElementById('drawer-body') || document.getElementById('traceDrawerContent');
    const titleBox = document.getElementById('drawer-unit-id');
    const dataNode = document.getElementById('trace-data-' + unitId);

    if (!drawer || !overlay || !bodyBox || !dataNode) {
      console.warn("Source trace element missing for", unitId);
      return;
    }

    try {
      const data = JSON.parse(dataNode.textContent);
      if (titleBox) {
        titleBox.innerHTML = `<code>${data.unit_id || data.scene_id || unitId}</code>`;
      }

      let html = '';

      // 1. Primary Metadata
      html += `
        <div class="trace-field" style="margin-bottom: 14px;">
          <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Title & Summary</div>
          <div style="font-size: 1rem; font-weight: 600; color: var(--text-main); margin-bottom: 4px;">${data.title || data.location || ''}</div>
          <div style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${data.summary_statement || data.what_happens || ''}</div>
        </div>
      `;

      // 2. Epistemic Status & Materiality
      const epLabel = (data.epistemic_status || 'SOURCE FACT').replace(/_/g, ' ');
      const matLabel = (data.materiality || 'IMPORTANT').toUpperCase();
      html += `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
          <span class="badge badge-source-fact">${epLabel}</span>
          <span class="badge badge-${data.materiality || 'important'}">LEVEL: ${matLabel}</span>
        </div>
      `;

      if (data.materiality_reason) {
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Materiality Justification</div>
            <div style="font-size: 0.88rem; font-style: italic; color: var(--text-main);">${data.materiality_reason}</div>
          </div>
        `;
      }

      // 3. Source Location & Archival Provenance
      const loc = data.source_location || {};
      const prov = data.source_provenance || {};
      html += `
        <div class="trace-field" style="margin-bottom: 14px; background: var(--bg-subtle); padding: 10px 12px; border-radius: 4px;">
          <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Source Provenance & Coordinates</div>
          <div style="font-size: 0.88rem; color: var(--text-main);">
            <strong>Chapter / Section:</strong> ${loc.chapter_title || ('Chapter ' + (loc.chapter_number !== undefined ? loc.chapter_number : data.chapter))}<br>
            <strong>Document File:</strong> <code>${loc.document || 'N/A'}</code><br>
            ${loc.element_ids && loc.element_ids.length > 0 ? `<strong>Ingestion Unit IDs:</strong> <code>${loc.element_ids.slice(0, 5).join(', ')}${loc.element_ids.length > 5 ? ' (+' + (loc.element_ids.length - 5) + ' more)' : ''}</code><br>` : ''}
            ${prov.notes_referenced && prov.notes_referenced.length > 0 ? `<strong>Referenced Notes:</strong> ${prov.notes_referenced.join(', ')}<br>` : ''}
            ${prov.archival_citations && prov.archival_citations.length > 0 ? `<strong>Archival Citations:</strong> ${prov.archival_citations.join('; ')}` : ''}
          </div>
        </div>
      `;

      // 4. Dual Timeline (Historical Books)
      if (data.dual_timeline) {
        const dt = data.dual_timeline;
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Dual Timeline Anchors</div>
            <div style="font-size: 0.86rem; color: var(--text-main); line-height: 1.5;">
              ${dt.event_time ? `<div>🕒 <strong>Event Time:</strong> ${dt.event_time.date_raw} — <em>${dt.event_time.context || ''}</em></div>` : ''}
              ${dt.record_revelation_time ? `<div>📜 <strong>Record Revelation Time:</strong> ${dt.record_revelation_time.date_raw} — <em>${dt.record_revelation_time.context || ''}</em></div>` : ''}
              ${dt.source_time ? `<div>📖 <strong>Source Monograph Time:</strong> ${dt.source_time.publication_year} — <em>${dt.source_time.author_analysis || ''}</em></div>` : ''}
            </div>
          </div>
        `;
      }

      // 5. Causal Relationships
      if (data.causal_relationships && data.causal_relationships.length > 0) {
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Causal Graph Links</div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${data.causal_relationships.map(cr => `
                <div style="background: var(--bg-card); border-left: 3px solid var(--accent-crimson); padding: 6px 10px; font-size: 0.86rem;">
                  <div><strong>→ ${cr.target_unit_id}</strong> <span class="badge" style="font-size:0.7rem; padding: 2px 6px;">${cr.causal_status}</span></div>
                  <div style="color: var(--text-muted); font-size: 0.82rem; margin-top: 2px;">${cr.supporting_evidence || ''}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // 6. Forensic Evidence Assessment
      if (data.evidence && data.evidence.length > 0) {
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Forensic Evidence Reliability</div>
            ${data.evidence.map(ev => `
              <div style="background: var(--bg-subtle); padding: 8px 10px; border-radius: 4px; font-size: 0.84rem; margin-bottom: 6px;">
                <div><strong>Type:</strong> ${ev.type || 'N/A'} • <strong>Proximity:</strong> ${ev.temporal_proximity || 'N/A'}</div>
                <div><strong>Independence:</strong> ${ev.source_independence || 'N/A'} • <strong>Corroboration:</strong> ${ev.corroboration_state || 'N/A'}</div>
                <div style="color: var(--accent-gold); margin-top: 2px;"><em>${ev.evidentiary_reliability_assessment || ''}</em></div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 7. Competing Accounts / Disputes
      if (data.competing_accounts && data.competing_accounts.length > 0) {
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--accent-crimson);">Historiographical Disputes</div>
            ${data.competing_accounts.map(ca => `
              <div style="background: rgba(184, 134, 11, 0.08); border-left: 3px solid var(--accent-gold); padding: 8px 10px; border-radius: 4px; font-size: 0.84rem; margin-bottom: 6px;">
                <div style="font-weight: 600;">Issue: ${ca.issue || 'Contested Historical Point'}</div>
                <div><strong>Account A:</strong> ${ca.account_a || ''}</div>
                <div><strong>Account B:</strong> ${ca.account_b || ''}</div>
                ${ca.historiographical_evaluation ? `<div style="font-style: italic; margin-top: 2px;">Resolution: ${ca.historiographical_evaluation}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      // 8. Source Evidence Excerpts
      if (data.source_evidence && data.source_evidence.length > 0) {
        html += `
          <div class="trace-field" style="margin-bottom: 14px;">
            <div class="trace-field-label" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; color: var(--text-subtle);">Direct Verbatim Excerpts</div>
            <div style="font-size: 0.88rem; font-style: italic; color: var(--text-muted); line-height: 1.5; border-left: 2px solid var(--border-dark); padding-left: 10px;">
              ${data.source_evidence.map(se => `<p style="margin-bottom: 6px;">"${se}"</p>`).join('')}
            </div>
          </div>
        `;
      }

      bodyBox.innerHTML = html;
      drawer.classList.add('open');
      overlay.classList.add('open');
    } catch (e) {
      console.error("Failed to parse trace data for unit", unitId, e);
    }
  }

  function closeSourceTrace() {
    const drawer = document.getElementById('trace-drawer') || document.getElementById('sourceTraceDrawer');
    const overlay = document.getElementById('trace-overlay') || document.getElementById('traceBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  // 6. SEARCH CONTROLLER (STATIC LIVE CLIENT SEARCH)
  let searchIndex = [];

  function initSearch() {
    const dataNode = document.getElementById('bkrs-search-data') || document.getElementById('bkrs-search-index');
    if (dataNode) {
      try {
        searchIndex = JSON.parse(dataNode.textContent);
      } catch (e) {
        console.error("Failed to parse static search index", e);
      }
    }
  }

  function openSearch() {
    const modal = document.getElementById('search-modal') || document.getElementById('searchModal');
    const input = document.getElementById('bkrs-search-input') || document.getElementById('searchInput');
    if (modal && input) {
      modal.style.display = 'flex';
      modal.classList.add('open');
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }

  function closeSearch() {
    const modal = document.getElementById('search-modal') || document.getElementById('searchModal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('open');
    }
  }

  function handleModalBackdropClick(event) {
    if (event.target.id === 'search-modal' || event.target.id === 'searchModal') {
      closeSearch();
    }
  }

  function renderSearchResults(query) {
    const list = document.getElementById('search-results-list') || document.getElementById('searchResultsList');
    if (!list) return;

    query = (query || '').toLowerCase().trim();
    if (!query) {
      list.innerHTML = '<div class="search-empty-state" style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Type to search all canonical units, arguments, quotes, and entities...</div>';
      return;
    }

    const matches = searchIndex.filter(item => {
      const q = query;
      const inTitle = item.title && item.title.toLowerCase().includes(q);
      const inContent = item.content && item.content.toLowerCase().includes(q);
      const inSnippet = item.snippet && item.snippet.toLowerCase().includes(q);
      const inEntities = item.entities && Array.isArray(item.entities) && item.entities.some(e => e.toLowerCase().includes(q));
      const inCharacters = item.characters && Array.isArray(item.characters) && item.characters.some(c => c.toLowerCase().includes(q));
      const inMotifs = item.motifs && Array.isArray(item.motifs) && item.motifs.some(m => m.toLowerCase().includes(q));
      return inTitle || inContent || inSnippet || inEntities || inCharacters || inMotifs;
    }).slice(0, 15);

    if (matches.length === 0) {
      list.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching units found for "<strong>${escapeHtml(query)}</strong>".</div>`;
      return;
    }

    list.innerHTML = matches.map(m => `
      <a href="#${m.id}" class="search-result-item" onclick="closeSearch(); handleNavClick(event, '${m.id}')" style="display: block; padding: 12px 16px; border-bottom: 1px solid var(--border-light); text-decoration: none; color: inherit;">
        <div style="font-weight: 600; color: var(--accent-crimson); font-size: 0.95rem; margin-bottom: 4px;">
          ${m.chapter !== undefined ? (m.chapter === 0 ? 'Intro' : (m.chapter === 56 ? 'Appendix' : 'Ch ' + m.chapter)) + ' • ' : ''}${escapeHtml(m.title)}
        </div>
        <div style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.4;">${escapeHtml(m.snippet || '')}</div>
      </a>
    `).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 7. ACTIVE RECALL FLASHCARD CONTROLLER
  function toggleFlashcard(btn) {
    const card = btn.closest('.flashcard') || btn.parentElement;
    const answer = card ? (card.querySelector('.flashcard-a') || btn.nextElementSibling) : null;
    if (!answer) return;

    if (answer.style.display === 'block' || (card && card.classList.contains('revealed'))) {
      answer.style.display = 'none';
      if (card) card.classList.remove('revealed');
      btn.textContent = 'Show Answer ▼';
    } else {
      answer.style.display = 'block';
      if (card) card.classList.add('revealed');
      btn.textContent = 'Hide Answer ▲';
    }
  }

  // 8. GLOBAL SHORTCUTS
  document.addEventListener('keydown', function (e) {
    // Focus mode: F
    if ((e.key === 'f' || e.key === 'F') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      toggleFocusMode();
    }
    // Search: /
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
    // Escape: close modal or drawer
    if (e.key === 'Escape') {
      closeSearch();
      closeSourceTrace();
    }
    // Sidebar: Ctrl + \
    if (e.ctrlKey && e.key === '\\') {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // 9. DOM READY ATTACHMENT
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initTypography();
    initSearch();

    // Theme buttons
    const themeBtns = [document.getElementById('theme-btn'), document.getElementById('themeToggleBtn')].filter(Boolean);
    themeBtns.forEach(btn => btn.addEventListener('click', cycleTheme));

    // Font buttons
    const fontBtns = [document.getElementById('font-btn'), document.getElementById('sansToggleBtn')].filter(Boolean);
    fontBtns.forEach(btn => btn.addEventListener('click', cycleFont));

    const sizeBtns = [document.getElementById('size-btn')].filter(Boolean);
    sizeBtns.forEach(btn => btn.addEventListener('click', cycleFontSize));

    const incBtns = [document.getElementById('fontIncBtn')].filter(Boolean);
    incBtns.forEach(btn => btn.addEventListener('click', () => adjustFontSize(1)));

    const decBtns = [document.getElementById('fontDecBtn')].filter(Boolean);
    decBtns.forEach(btn => btn.addEventListener('click', () => adjustFontSize(-1)));

    // Sidebar buttons
    const sidebarBtns = [document.getElementById('sidebar-toggle'), document.getElementById('sidebarToggleBtn')].filter(Boolean);
    sidebarBtns.forEach(btn => btn.addEventListener('click', toggleSidebar));

    // Focus buttons
    const focusBtns = [document.getElementById('focus-btn'), document.getElementById('focusToggleBtn')].filter(Boolean);
    focusBtns.forEach(btn => btn.addEventListener('click', toggleFocusMode));

    // Search buttons
    const searchBtns = [document.getElementById('search-btn'), document.getElementById('searchTriggerBtn')].filter(Boolean);
    searchBtns.forEach(btn => btn.addEventListener('click', openSearch));

    const searchCloses = document.querySelectorAll('.search-close-x, #searchModalClose');
    searchCloses.forEach(btn => btn.addEventListener('click', closeSearch));

    const searchInput = document.getElementById('bkrs-search-input') || document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
    }

    // Modal background click
    const searchModal = document.getElementById('search-modal') || document.getElementById('searchModal');
    if (searchModal) {
      searchModal.addEventListener('click', handleModalBackdropClick);
    }

    const traceOverlay = document.getElementById('trace-overlay') || document.getElementById('traceBackdrop');
    if (traceOverlay) {
      traceOverlay.addEventListener('click', closeSourceTrace);
    }

    const drawerCloses = document.querySelectorAll('.drawer-close-btn, #traceDrawerClose');
    drawerCloses.forEach(btn => btn.addEventListener('click', closeSourceTrace));

    // View tab buttons
    const tabBtns = document.querySelectorAll('.view-tab-btn, [role="tab"]');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const v = this.getAttribute('data-view') || this.id.replace('btn-', '');
        switchView(v);
      });
    });

    // Check hash for initial view
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      if (['journey', 'view-journey'].includes(hash)) switchView('view-journey');
      else if (['map', 'knowledge', 'view-map', 'view-knowledge'].includes(hash)) switchView('view-map');
      else if (['experience', 'deep', 'view-experience', 'view-deep'].includes(hash)) switchView('view-experience');
    }
  });

  // Export to global window scope for inline onclicks and external callers
  window.toggleSidebar = toggleSidebar;
  window.cycleTheme = cycleTheme;
  window.cycleFont = cycleFont;
  window.cycleFontSize = cycleFontSize;
  window.toggleSansMode = toggleSansMode;
  window.toggleFocusMode = toggleFocusMode;
  window.switchView = switchView;
  window.handleNavClick = handleNavClick;
  window.openSearch = openSearch;
  window.openSearchModal = openSearch;
  window.closeSearch = closeSearch;
  window.closeSearchModal = closeSearch;
  window.handleModalBackdropClick = handleModalBackdropClick;
  window.handleSearchQuery = renderSearchResults;
  window.openSourceTrace = openSourceTrace;
  window.closeSourceTrace = closeSourceTrace;
  window.toggleFlashcard = toggleFlashcard;
})();
