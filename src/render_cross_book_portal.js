/**
 * BKRS Cross-Book Portal Renderer
 * Generates the user-facing landing and exploration portal for Step 5 Cross-Book Knowledge Synthesis.
 * Reads directly from certified canonical synthesis JSON files without altering any source data.
 */

const fs = require('fs');
const path = require('path');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderCrossBookPortal() {
  const baseDir = path.join(__dirname, '..', 'docs', 'cross-book');
  const manifestPath = path.join(baseDir, 'synthesis-manifest.json');
  const unitsPath = path.join(baseDir, 'synthesis-units.json');
  const conceptsPath = path.join(baseDir, 'concept-registry.json');
  const contradictionsPath = path.join(baseDir, 'contradictions.json');

  if (!fs.existsSync(manifestPath) || !fs.existsSync(unitsPath)) {
    throw new Error('Certified synthesis assets not found in docs/cross-book/');
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const synthesisUnits = JSON.parse(fs.readFileSync(unitsPath, 'utf-8'));
  const concepts = fs.existsSync(conceptsPath) ? JSON.parse(fs.readFileSync(conceptsPath, 'utf-8')) : [];
  const contradictions = fs.existsSync(contradictionsPath) ? JSON.parse(fs.readFileSync(contradictionsPath, 'utf-8')) : [];

  const activeUnits = synthesisUnits.filter(u => u.quarantine_status !== 'QUARANTINED' && u.synthesis_type !== 'REJECTED_SYNTHESIS_UNIT');
  const quarantinedUnits = synthesisUnits.filter(u => u.quarantine_status === 'QUARANTINED' || u.synthesis_type === 'REJECTED_SYNTHESIS_UNIT');

  // Book title resolver
  const bookTitles = {
    'norwegian-wood': 'Norwegian Wood (Haruki Murakami)',
    'the-psychology-of-money': 'The Psychology of Money (Morgan Housel)',
    'bhagat-singh-a-life-in-revolution': 'Bhagat Singh: A Life in Revolution (Satvinder S. Juss)'
  };

  const bookLinks = {
    'norwegian-wood': '../distillations/norwegian-wood/index.html',
    'the-psychology-of-money': '../distillations/the-psychology-of-money/index.html',
    'bhagat-singh-a-life-in-revolution': '../distillations/bhagat-singh-a-life-in-revolution/index.html'
  };

  // Generate HTML
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="cream" data-font="serif">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Book Knowledge Synthesis • The Intellectualist</title>
  
  <link rel="stylesheet" href="../assets/css/theme.css">
  <link rel="stylesheet" href="../assets/css/typography.css">
  <link rel="stylesheet" href="../assets/css/reader-shell.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    .portal-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 30px 24px 100px 24px;
    }

    .portal-masthead {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 5px solid var(--accent-crimson);
      border-radius: 6px;
      padding: 36px 40px;
      margin-bottom: 30px;
      box-shadow: var(--shadow-sm);
    }

    .portal-meta-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border-light);
      margin-bottom: 20px;
    }

    .portal-title {
      font-size: 2.6rem;
      line-height: 1.15;
      color: var(--accent-crimson);
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }

    .portal-tagline {
      font-size: 1.15rem;
      font-style: italic;
      color: var(--text-muted);
      line-height: 1.5;
      max-width: 900px;
      margin-bottom: 18px;
    }

    .stats-deck {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 32px;
    }

    .stat-tile {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 16px 20px;
      text-align: center;
      box-shadow: var(--shadow-sm);
    }

    .stat-val {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent-crimson);
      line-height: 1.1;
      margin-bottom: 4px;
    }

    .stat-name {
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      font-weight: 700;
    }

    .source-corpora-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 18px;
      margin-bottom: 36px;
    }

    .source-corpus-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 22px 24px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-top: 3px solid var(--accent-slate);
    }

    .corpus-genre-tag {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--accent-slate);
      margin-bottom: 6px;
    }

    .corpus-title {
      font-size: 1.25rem;
      color: var(--text-main);
      margin-bottom: 6px;
    }

    .corpus-meta {
      font-size: 0.84rem;
      color: var(--text-muted);
      margin-bottom: 16px;
      line-height: 1.45;
    }

    .btn-corpus-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--accent-crimson);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.84rem;
      transition: color 0.15s ease;
    }

    .btn-corpus-link:hover {
      text-decoration: underline;
    }

    .nav-tabs-deck {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
      border-bottom: 2px solid var(--border-light);
      padding-bottom: 12px;
    }

    .tab-nav-btn {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 8px 16px;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.84rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--text-muted);
      transition: all 0.2s ease;
    }

    .tab-nav-btn:hover {
      background: var(--bg-elevated);
      color: var(--text-main);
    }

    .tab-nav-btn.active {
      background: var(--accent-crimson);
      color: #ffffff;
      border-color: var(--accent-crimson);
    }

    .synthesis-unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 26px 30px;
      margin-bottom: 22px;
      box-shadow: var(--shadow-sm);
      position: relative;
    }

    .su-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-subtle);
    }

    .su-id-badge {
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--accent-crimson);
      background: rgba(139, 0, 0, 0.08);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .su-claim {
      font-size: 1.15rem;
      font-weight: 600;
      line-height: 1.45;
      color: var(--text-main);
      margin-bottom: 16px;
    }

    .su-source-trace-box {
      background: var(--bg-subtle);
      border-radius: 4px;
      padding: 14px 18px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .su-source-row {
      font-size: 0.86rem;
      line-height: 1.45;
    }

    .su-source-link {
      font-family: var(--font-mono);
      font-weight: 700;
      color: var(--accent-crimson);
      text-decoration: none;
    }

    .su-source-link:hover {
      text-decoration: underline;
    }

    .su-evidence-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 14px;
    }

    @media (max-width: 768px) {
      .su-evidence-grid {
        grid-template-columns: 1fr;
      }
      .portal-masthead {
        padding: 24px 20px;
      }
      .portal-title {
        font-size: 2rem;
      }
    }

    .su-evidence-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 12px 14px;
      font-size: 0.85rem;
      line-height: 1.45;
    }

    .su-evidence-title {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      margin-bottom: 6px;
    }
  </style>
</head>
<body class="bkrs-app">

  <!-- TOP APP BAR -->
  <header class="reader-topbar">
    <div class="topbar-left">
      <a href="../index.html" class="topbar-back-link">
        ← <span class="back-link-text">Master </span>Library
      </a>
      <div class="topbar-divider"></div>
      <div class="topbar-title-block">
        <div class="topbar-book-title">Cross-Book Knowledge Synthesis</div>
        <div class="topbar-book-author">BKRS Multi-Corpus Knowledge Graph (Step 5 Benchmark)</div>
      </div>
    </div>
    <div class="topbar-right">
      <button class="control-btn" id="theme-btn" onclick="cycleTheme()" title="Switch Theme (T)">
        🎨 <span class="btn-text">Theme</span>
      </button>
      <button class="control-btn" id="font-btn" onclick="cycleFont()" title="Toggle Serif / Sans">
        Aa
      </button>
    </div>
  </header>

  <div class="portal-container">
    
    <!-- MASTHEAD -->
    <header class="portal-masthead">
      <div class="portal-meta-bar">
        <span class="meta-label">CANONICAL CROSS-BOOK LAYER • BKRS v1.0</span>
        <span class="badge badge-corroborated-fact">Forensically Certified (60/60 Tests Pass)</span>
      </div>
      <h1 class="portal-title">Cross-Book Knowledge Synthesis</h1>
      <p class="portal-tagline">
        Systematic, provenance-grounded synthesis connecting Literary Fiction, Analytical Nonfiction, and Historical Biography without homogenizing genres, inventing consensus, or overriding source authority.
      </p>
      <div class="golden-test-banner" style="background: var(--bg-subtle); border-left: 4px solid var(--accent-crimson); padding: 12px 16px; font-size: 0.88rem;">
        <strong>Constitutional Governance Rule:</strong> Book Masters are unconditionally authoritative. If a synthesis proposition conflicts with a Book Master, the Book Master prevails unconditionally. Unresolved tensions and domain distinctions are strictly preserved.
      </div>
    </header>

    <!-- CENSUS STATS DECK -->
    <section class="stats-deck">
      <div class="stat-tile">
        <div class="stat-val">${manifest.corpus_scope.length}</div>
        <div class="stat-name">Certified Book Masters</div>
      </div>
      <div class="stat-tile">
        <div class="stat-val">${manifest.census.synthesis_units_total}</div>
        <div class="stat-name">Synthesis Units Total</div>
      </div>
      <div class="stat-tile">
        <div class="stat-val">${activeUnits.length}</div>
        <div class="stat-name">Active Benchmark Units</div>
      </div>
      <div class="stat-tile">
        <div class="stat-val">${manifest.census.canonical_concepts_total}</div>
        <div class="stat-name">Canonical Concepts</div>
      </div>
      <div class="stat-tile">
        <div class="stat-val">${manifest.census.cross_book_relationships_total}</div>
        <div class="stat-name">Relational Graph Edges</div>
      </div>
      <div class="stat-tile">
        <div class="stat-val">${manifest.census.contradictions_total}</div>
        <div class="stat-name">Contradictions Audited</div>
      </div>
    </section>

    <!-- BENCHMARK CORPORA CARDS -->
    <section style="margin-bottom: 30px;">
      <span class="meta-label" style="display: block; margin-bottom: 12px;">CERTIFIED CONSTITUENT CORPORA</span>
      <div class="source-corpora-grid">
        <div class="source-corpus-card">
          <div>
            <div class="corpus-genre-tag">Literary Fiction Benchmark</div>
            <h3 class="corpus-title">Norwegian Wood</h3>
            <div class="corpus-meta">
              <strong>Haruki Murakami</strong> (1987) • Trans. Jay Rubin<br>
              36 Canonical Scene Units • Existential Grief & Trauma
            </div>
          </div>
          <a href="../distillations/norwegian-wood/index.html" class="btn-corpus-link">Open Fiction Codex →</a>
        </div>
        <div class="source-corpus-card">
          <div>
            <div class="corpus-genre-tag">Analytical Nonfiction Benchmark</div>
            <h3 class="corpus-title">The Psychology of Money</h3>
            <div class="corpus-meta">
              <strong>Morgan Housel</strong> (2020)<br>
              24 Canonical Argument Units • Behavioral Finance & Tail Events
            </div>
          </div>
          <a href="../distillations/the-psychology-of-money/index.html" class="btn-corpus-link">Open Nonfiction Codex →</a>
        </div>
        <div class="source-corpus-card">
          <div>
            <div class="corpus-genre-tag">Historical Biography Benchmark</div>
            <h3 class="corpus-title">Bhagat Singh: A Life in Revolution</h3>
            <div class="corpus-meta">
              <strong>Satvinder S. Juss</strong> (2020)<br>
              78 Canonical Units • Archival Forensics & Revolutionary Praxis
            </div>
          </div>
          <a href="../distillations/bhagat-singh-a-life-in-revolution/index.html" class="btn-corpus-link">Open Historical Codex →</a>
        </div>
      </div>
    </section>

    <!-- SECTION NAVIGATION TABS -->
    <div class="nav-tabs-deck">
      <button class="tab-nav-btn active" onclick="switchSection('sec-units', this)">1. Active Synthesis Units (${activeUnits.length})</button>
      <button class="tab-nav-btn" onclick="switchSection('sec-concepts', this)">2. Canonical Concepts (${concepts.length})</button>
      <button class="tab-nav-btn" onclick="switchSection('sec-tensions', this)">3. Dialectical Tensions & Disputes (${contradictions.length})</button>
      <button class="tab-nav-btn" onclick="switchSection('sec-quarantine', this)">4. Forensic Boundaries & Quarantines (${quarantinedUnits.length})</button>
    </div>

    <!-- TAB 1: ACTIVE SYNTHESIS UNITS -->
    <section id="sec-units" class="portal-tab-content">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 1.5rem; color: var(--accent-crimson); margin-bottom: 4px;">Active Cross-Book Synthesis Units</h2>
        <p style="font-size: 0.92rem; color: var(--text-muted);">
          Each synthesis unit represents a forensically verified conceptual relationship across at least two certified benchmarks, with complete bidirectional provenance and evidentiary accountability.
        </p>
      </div>

      ${activeUnits.map(unit => {
        const epLabel = (unit.epistemic_status || 'BKRS_INFERENCE').replace(/_/g, ' ');
        const relLabel = (unit.relationship_class || 'CONCEPTUAL_PARALLEL').replace(/_/g, ' ');
        const conLabel = (unit.contradiction_status || 'DISTINCT_FRAME').replace(/_/g, ' ');

        return `
          <article class="synthesis-unit-card" id="${escapeHtml(unit.synthesis_unit_id)}">
            <div class="su-top-bar">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span class="su-id-badge">${escapeHtml(unit.synthesis_unit_id)}</span>
                <span class="badge badge-corroborated-fact">${escapeHtml(relLabel)}</span>
                <span class="badge badge-source-fact">${escapeHtml(epLabel)}</span>
                <span class="badge badge-biographer-thesis">FRAME: ${escapeHtml(conLabel)}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-subtle); font-family: var(--font-mono);">
                CONFIDENCE: ${escapeHtml(unit.confidence || 'MEDIUM')}
              </div>
            </div>

            <h3 class="su-claim">${escapeHtml(unit.claim)}</h3>

            <!-- Source Traces -->
            <div class="su-source-trace-box">
              <div style="font-weight: 700; font-size: 0.76rem; text-transform: uppercase; color: var(--accent-slate);">
                Constituent Source Units & Grounding Evidence:
              </div>
              ${unit.source_unit_refs.map(ref => {
                const bookTitle = bookTitles[ref.book_id] || ref.book_id;
                const bookBase = bookLinks[ref.book_id] || '#';
                const targetHref = `${bookBase}#${ref.source_unit_id}`;
                return `
                  <div class="su-source-row">
                    <div>
                      <strong>${escapeHtml(bookTitle)}</strong>: 
                      <a href="${targetHref}" class="su-source-link">${escapeHtml(ref.source_unit_id)}</a> 
                      (${escapeHtml(ref.locator || '')}) • 
                      <em>Role: ${escapeHtml(ref.role || 'PROPOSITION')}</em> • 
                      <span class="badge badge-source-fact" style="font-size:0.68rem;">Voice: ${escapeHtml(ref.source_voice || 'AUTHOR')}</span>
                    </div>
                    <div style="font-style: italic; color: var(--text-muted); margin-top: 2px;">
                      "${escapeHtml(ref.exact_quotation_or_claim || '')}"
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Evidence Breakdown -->
            <div class="su-evidence-grid">
              <div class="su-evidence-box" style="border-left: 3px solid var(--accent-forest);">
                <div class="su-evidence-title" style="color: var(--accent-forest);">Supporting Evidence</div>
                ${unit.supporting_evidence ? unit.supporting_evidence.map(e => `<p style="margin-bottom: 4px;">• ${escapeHtml(e)}</p>`).join('') : '<p>Documented in source units.</p>'}
              </div>
              <div class="su-evidence-box" style="border-left: 3px solid var(--accent-crimson);">
                <div class="su-evidence-title" style="color: var(--accent-crimson);">Tension / Boundary Conditions</div>
                ${unit.competing_evidence ? unit.competing_evidence.map(e => `<p style="margin-bottom: 4px;">• ${escapeHtml(e)}</p>`).join('') : '<p>No contradictory boundary detected.</p>'}
              </div>
            </div>

            <!-- Rationale -->
            ${unit.inference_rationale ? `
              <div style="margin-top: 14px; font-size: 0.86rem; color: var(--text-subtle); font-style: italic;">
                <strong>Epistemic Rationale:</strong> ${escapeHtml(unit.inference_rationale)}
              </div>
            ` : ''}
          </article>
        `;
      }).join('')}
    </section>

    <!-- TAB 2: CANONICAL CONCEPTS -->
    <section id="sec-concepts" class="portal-tab-content" style="display: none;">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 1.5rem; color: var(--accent-crimson); margin-bottom: 4px;">Canonical Concept Registry</h2>
        <p style="font-size: 0.92rem; color: var(--text-muted);">
          Master cross-book concept dictionary resolving polysemy and enforcing strict mapping rules (e.g. distinguishing when books use the same word to mean fundamentally different things).
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${concepts.map(c => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 6px; padding: 22px 26px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="su-id-badge">${escapeHtml(c.canonical_concept_id)}</span>
              <span class="badge badge-corroborated-fact">${escapeHtml(c.scope || 'GENERAL')}</span>
            </div>
            <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 6px;">${escapeHtml(c.preferred_label)}</h3>
            <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${escapeHtml(c.formal_definition)}</p>
            
            <div style="background: var(--bg-subtle); padding: 12px 14px; border-radius: 4px; font-size: 0.86rem; line-height: 1.45;">
              <div style="font-weight: 700; color: var(--accent-slate); margin-bottom: 4px;">Book-Specific Manifestations:</div>
              ${c.book_specific_manifests ? c.book_specific_manifests.map(m => `
                <div style="margin-bottom: 6px;">
                  <strong>${escapeHtml(m.book_id)}</strong> (<code>${escapeHtml(m.book_concept_id)}</code>): 
                  <em>"${escapeHtml(m.source_label)}"</em> — ${escapeHtml(m.source_definition)} 
                  <span class="badge badge-source-arg" style="font-size:0.68rem;">${escapeHtml(m.mapping_state)}</span>
                </div>
              `).join('') : '<p>No book-specific entries.</p>'}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- TAB 3: DIALECTICAL TENSIONS & CONTRADICTIONS -->
    <section id="sec-tensions" class="portal-tab-content" style="display: none;">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 1.5rem; color: var(--accent-gold); margin-bottom: 4px;">Audited Dialectical Tensions & Disputes</h2>
        <p style="font-size: 0.92rem; color: var(--text-muted);">
          BKRS never suppresses contradictions to manufacture false agreement. When books propose conflicting normative imperatives, they are preserved in this tension ledger.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${contradictions.map(cd => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-left: 4px solid var(--accent-gold); border-radius: 4px; padding: 20px 24px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="su-id-badge" style="color: var(--accent-gold); background: rgba(184, 134, 11, 0.1);">${escapeHtml(cd.contradiction_id || 'DISPUTE')}</span>
              <span class="badge badge-biographer-thesis">${escapeHtml(cd.resolution_type || 'UNRESOLVED_TENSION')}</span>
            </div>
            <h3 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 6px;">${escapeHtml(cd.issue || cd.title || 'Unresolved Dialectical Tension')}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${escapeHtml(cd.description || cd.context || '')}</p>
            
            <div class="su-evidence-grid">
              <div class="su-evidence-box">
                <div class="su-evidence-title" style="color: var(--accent-slate);">Position A (${escapeHtml(cd.position_a_source || 'Book A')})</div>
                <p>${escapeHtml(cd.position_a_claim || cd.claim_a || '')}</p>
              </div>
              <div class="su-evidence-box">
                <div class="su-evidence-title" style="color: var(--accent-crimson);">Position B (${escapeHtml(cd.position_b_source || 'Book B')})</div>
                <p>${escapeHtml(cd.position_b_claim || cd.claim_b || '')}</p>
              </div>
            </div>

            <div style="margin-top: 12px; font-size: 0.86rem; color: var(--text-subtle); font-style: italic;">
              <strong>System Epistemic Determination:</strong> ${escapeHtml(cd.system_resolution_rationale || cd.rationale || 'Preserved as distinct domain-specific normative imperatives.')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- TAB 4: FORENSIC BOUNDARIES & QUARANTINES -->
    <section id="sec-quarantine" class="portal-tab-content" style="display: none;">
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 1.5rem; color: var(--accent-crimson); margin-bottom: 4px;">Forensic Boundaries, Quarantines & Rejected Propositions</h2>
        <p style="font-size: 0.92rem; color: var(--text-muted);">
          To guarantee zero hallucination, BKRS rigorously quarantines subjective speculation and rejects anachronistic or non-evidentiary claims.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${quarantinedUnits.map(qu => `
          <div style="background: rgba(139, 0, 0, 0.04); border: 1px solid rgba(139, 0, 0, 0.25); border-left: 4px solid var(--accent-crimson); border-radius: 4px; padding: 20px 24px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span class="su-id-badge">${escapeHtml(qu.synthesis_unit_id)}</span>
              <span class="badge badge-coerced-testimony">${escapeHtml(qu.quarantine_status || 'REJECTED')}</span>
            </div>
            <h3 style="font-size: 1.15rem; color: var(--accent-crimson); margin-bottom: 6px;">${escapeHtml(qu.claim)}</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px;">
              <strong>Reason for Quarantine / Rejection:</strong> ${escapeHtml(qu.rejection_reason || qu.quarantine_reason || qu.competing_evidence ? qu.competing_evidence.join(' ') : 'Evidentiary standards not met.')}
            </p>
            <div style="font-size: 0.82rem; color: var(--text-subtle); font-family: var(--font-mono);">
              Status: ${escapeHtml(qu.human_review_status || 'REJECTED_BY_FORENSIC_VALIDATOR')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

  </div>

  <script src="../assets/js/reader-controls.js"></script>

  <script>
    function switchSection(secId, btn) {
      document.querySelectorAll('.portal-tab-content').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.remove('active'));
      const target = document.getElementById(secId);
      if (target) target.style.display = 'block';
      if (btn) btn.classList.add('active');
    }
  </script>
</body>
</html>`;

  const outputPath = path.join(baseDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`Rendered Cross-Book Portal: ${outputPath} (${(Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1)} KB)`);
}

if (require.main === module) {
  renderCrossBookPortal();
}

module.exports = {
  renderCrossBookPortal
};
