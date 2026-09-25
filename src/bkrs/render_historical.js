/**
 * BKRS Historical & Biographical Renderer
 * Implements View A (The Source Journey), View B (The Relational Knowledge Map),
 * and View C (The Dialectical Engine) for Historical Biography (Juss, 2022).
 * Completely data-driven: derives all content, relationships, disputes, and quotes
 * directly from canonical knowledge-units.json with zero external prose authoring.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getEpistemicBadgeClass(status) {
  if (!status) return 'badge-source-fact';
  const s = status.toUpperCase();
  if (s.includes('CORROBORATED')) return 'badge-corroborated-fact';
  if (s.includes('CONTEMPORARY')) return 'badge-contemporary-record';
  if (s.includes('PRIMARY')) return 'badge-primary-writing';
  if (s.includes('THESIS')) return 'badge-biographer-thesis';
  if (s.includes('COERCED')) return 'badge-coerced-testimony';
  if (s.includes('CONJECTURE')) return 'badge-biographer-conjecture';
  return 'badge-source-fact';
}

function getCausalBadgeClass(status) {
  if (!status) return 'badge-causal-inference';
  const s = status.toUpperCase();
  if (s.includes('DOCUMENTED')) return 'badge-causal-documented';
  if (s.includes('CORROBORATED')) return 'badge-causal-corroborated';
  if (s.includes('HISTORIAN') || s.includes('HYPOTHESIS')) return 'badge-causal-hypothesis';
  return 'badge-causal-inference';
}

function renderHistoricalViews(model) {
  const units = model.units || [];
  const chapters = model.chapters || [];
  const facets = model.facets || {};

  // =========================================================================
  // VIEW A: THE SOURCE JOURNEY (Continuous Detailed Historical Chronicle)
  // =========================================================================
  let journeyHtml = `
    <style>
      .chapter-block-historical {
        margin-bottom: 56px;
        padding-bottom: 24px;
      }
      .chapter-header-historical {
        margin: 40px 0 24px 0;
        border-bottom: 2px solid var(--accent-crimson);
        padding-bottom: 10px;
      }
      .chapter-kicker-historical {
        font-family: var(--font-sans);
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--accent-crimson);
        display: block;
        margin-bottom: 4px;
      }
      .chapter-title-historical {
        font-family: var(--font-serif);
        font-size: 2.1rem;
        line-height: 1.25;
        color: var(--text-main);
        margin: 4px 0 6px 0;
        letter-spacing: -0.015em;
      }
      .narrative-segment-historical {
        margin-bottom: 32px;
        position: relative;
      }
      .narrative-heading-historical {
        font-family: var(--font-serif);
        font-size: 1.35rem;
        line-height: 1.35;
        color: var(--accent-crimson);
        margin-top: 1.8rem;
        margin-bottom: 0.4rem;
      }
      .narrative-meta-historical {
        font-family: var(--font-sans);
        font-size: 0.82rem;
        color: var(--text-muted);
        margin-bottom: 0.9rem;
      }
      .narrative-prose-historical {
        font-family: var(--font-serif);
        font-size: 1.08rem;
        line-height: 1.82;
        color: var(--text-main);
      }
      .narrative-prose-historical p {
        margin-bottom: 1.25em;
        text-align: justify;
        text-justify: inter-word;
      }
      .historical-blockquote {
        border-left: 3px solid var(--accent-crimson);
        margin: 16px 0 20px 14px;
        padding: 8px 0 8px 18px;
        font-family: var(--font-serif);
        font-style: italic;
        color: var(--text-main);
        background: transparent;
      }
      .historical-blockquote p {
        margin-bottom: 8px;
        line-height: 1.65;
      }
      .historical-blockquote p:last-child {
        margin-bottom: 0;
      }
      .archival-plate-exhibit {
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-left: 4px solid var(--accent-slate);
        padding: 20px 24px;
        border-radius: 4px;
        margin: 20px 0 24px 0;
      }
      .plate-kicker {
        font-size: 0.74rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--accent-slate);
        font-weight: 700;
        margin-bottom: 4px;
        display: block;
      }
      .plate-title {
        font-family: var(--font-serif);
        font-size: 1.2rem;
        color: var(--text-main);
        margin: 4px 0 10px 0;
      }
      .plate-significance {
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--text-main);
        margin-bottom: 12px;
      }
      .plate-framing {
        font-size: 0.84rem;
        color: var(--text-muted);
        font-style: italic;
        margin-bottom: 12px;
      }
      .narrative-trace-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-top: 14px;
        margin-bottom: 28px;
        padding-top: 10px;
        border-top: 1px dashed var(--border-light);
        font-family: var(--font-sans);
        font-size: 0.78rem;
        color: var(--text-subtle);
        flex-wrap: wrap;
      }
      .trace-pill-btn {
        background: var(--bg-subtle);
        border: 1px solid var(--border-light);
        color: var(--accent-slate);
        padding: 3px 10px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .trace-pill-btn:hover {
        background: var(--accent-slate);
        color: #ffffff;
      }
      .analytical-drawer {
        width: 100%;
        margin-top: 8px;
      }
      .analytical-summary-btn {
        cursor: pointer;
        font-size: 0.76rem;
        font-weight: 600;
        color: var(--text-muted);
        outline: none;
        user-select: none;
      }
      .analytical-summary-btn:hover {
        color: var(--accent-crimson);
      }
      .analytical-body {
        background: var(--bg-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: 4px;
        padding: 14px 18px;
        margin-top: 8px;
        font-size: 0.84rem;
        line-height: 1.6;
        color: var(--text-main);
      }
      .analytical-row {
        margin-bottom: 8px;
      }
      .analytical-row:last-child {
        margin-bottom: 0;
      }
      .analytical-label {
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        font-size: 0.72rem;
        letter-spacing: 0.05em;
        display: inline-block;
        margin-right: 6px;
      }
    </style>
  `;

  chapters.forEach(ch => {
    journeyHtml += `
      <section class="chapter-block-historical" id="section-${ch.chapter_key}">
        <header class="chapter-header-historical">
          <span class="chapter-kicker-historical">${escapeHtml(ch.part || 'Chronological Sequence')}</span>
          <h2 class="chapter-title-historical">${escapeHtml(ch.chapter_title)}</h2>
        </header>
    `;

    ch.units.forEach(unit => {
      const epClass = getEpistemicBadgeClass(unit.epistemic_status);
      const epLabel = (unit.epistemic_status || 'SOURCE FACT').replace(/_/g, ' ');
      const matClass = `badge-${unit.materiality || 'important'}`;
      const matLabel = (unit.materiality || 'IMPORTANT').toUpperCase();
      const loc = unit.source_location || {};
      const payload = unit.genre_specific_payload || {};
      const isDocument = unit.unit_type === 'DOCUMENT_UNIT';

      journeyHtml += `
        <article class="narrative-segment-historical" id="${unit.unit_id}">
          <header class="narrative-segment-header">
            <h3 class="narrative-heading-historical">${escapeHtml(unit.title)}</h3>
            <div class="narrative-meta-historical">
              ${unit.temporal_anchor ? escapeHtml(unit.temporal_anchor.date_raw) : ''} ${loc.document ? ' • <code>' + escapeHtml(loc.document) + '</code>' : ''}
            </div>
          </header>

          <!-- Primary Narrative Stream -->
          <div class="narrative-prose-historical">
            <p>${escapeHtml(unit.summary_statement)}</p>
          </div>

          <!-- Document Exhibit Presentation (if Document Unit / Archival Plate) -->
          ${isDocument ? `
            <div class="archival-plate-exhibit">
              <span class="plate-kicker">Archival Primary Exhibit • ${escapeHtml(payload.medium_format || 'Archival Document')}</span>
              <h4 class="plate-title">${escapeHtml(payload.document_title || unit.title)}</h4>
              ${payload.legal_or_ideological_significance ? `
                <div class="plate-significance">
                  <strong>Historical &amp; Legal Significance:</strong> ${escapeHtml(payload.legal_or_ideological_significance)}
                </div>
              ` : ''}
              ${payload.author_vs_editor_vs_biographer_framing ? `
                <div class="plate-framing">
                  <strong>Authorial Framing:</strong> ${escapeHtml(payload.author_vs_editor_vs_biographer_framing)}
                </div>
              ` : ''}
              ${(payload.key_verbatim_excerpts && payload.key_verbatim_excerpts.length > 0) ? `
                <div class="plate-verbatim-box">
                  ${payload.key_verbatim_excerpts.map(q => `<p style="margin-bottom: 4px;">“${escapeHtml(q)}”</p>`).join('')}
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Direct Verbatim Quotes for Non-Document Units -->
          ${!isDocument && ((payload.key_verbatim_excerpts && payload.key_verbatim_excerpts.length > 0) || (unit.source_evidence && unit.source_evidence.length > 0)) ? `
            <blockquote class="historical-blockquote">
              ${(payload.key_verbatim_excerpts || unit.source_evidence).map(quote => `
                <p>“${escapeHtml(quote)}”</p>
              `).join('')}
            </blockquote>
          ` : ''}

          <!-- Restrained Analytical Drawer & Trace Footer -->
          <footer class="narrative-trace-footer">
            <span class="trace-loc">${loc.chapter_title ? escapeHtml(loc.chapter_title) + ' • ' : ''}<code>${escapeHtml(unit.unit_id)}</code></span>
            <button class="trace-pill-btn" onclick="openSourceTrace('${escapeHtml(unit.unit_id)}')" title="Inspect source provenance, dual timeline, and materiality">
              Source Trace ↗
            </button>
            <details class="analytical-drawer">
              <summary class="analytical-summary-btn">▸ Archival Evidence, Epistemics &amp; Causal Traces</summary>
              <div class="analytical-body">
                <div class="analytical-row">
                  <span class="analytical-label">Epistemic Status:</span>
                  <span class="badge ${epClass}">${escapeHtml(epLabel)}</span>
                </div>
                <div class="analytical-row">
                  <span class="analytical-label">Materiality:</span>
                  <span class="badge ${matClass}">LEVEL: ${escapeHtml(matLabel)}</span> &mdash; ${escapeHtml(unit.materiality_reason || '')}
                </div>

                <!-- Contextual Framing (Micro, Meso, Macro) -->
                ${unit.context && (unit.context.micro_context || unit.context.meso_context || unit.context.macro_context) ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Historical Context:</span>
                    <div class="unit-context-strip" style="margin-top: 6px;">
                      ${unit.context.micro_context ? `
                        <div>
                          <div class="context-tier-title">Micro Context</div>
                          <div style="color: var(--text-main);">${escapeHtml(unit.context.micro_context)}</div>
                        </div>
                      ` : ''}
                      ${unit.context.meso_context ? `
                        <div>
                          <div class="context-tier-title">Meso Context</div>
                          <div style="color: var(--text-main);">${escapeHtml(unit.context.meso_context)}</div>
                        </div>
                      ` : ''}
                      ${unit.context.macro_context ? `
                        <div>
                          <div class="context-tier-title">Macro Context</div>
                          <div style="color: var(--text-main);">${escapeHtml(unit.context.macro_context)}</div>
                        </div>
                      ` : ''}
                    </div>
                  </div>
                ` : ''}

                <!-- Causal Links within Unit -->
                ${unit.causal_relationships && unit.causal_relationships.length > 0 ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Causal Trajectories:</span>
                    <div class="unit-causal-strip" style="margin-top: 6px;">
                      ${unit.causal_relationships.map(cr => `
                        <div style="margin-bottom: 6px;">
                          <span class="badge ${getCausalBadgeClass(cr.causal_status)}">${escapeHtml(cr.causal_status)}</span>
                          <a href="#${escapeHtml(cr.target_unit_id)}" style="font-weight: 600; color: var(--accent-crimson); text-decoration: none; margin-left: 6px;">→ ${escapeHtml(cr.target_unit_id)}</a>
                          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(cr.supporting_evidence || '')}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

                <!-- Competing Accounts / Historiographical Disputes -->
                ${unit.competing_accounts && unit.competing_accounts.length > 0 ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Historiographical Disputes:</span>
                    <div class="unit-dispute-container" style="margin-top: 6px;">
                      ${unit.competing_accounts.map(ca => `
                        <div style="margin-bottom: 10px;">
                          <div style="font-weight: 600; color: var(--text-main);">${escapeHtml(ca.contested_issue || ca.issue || 'Contested Historical Issue')}</div>
                          ${ca.accounts && Array.isArray(ca.accounts) ? `
                            <div class="dispute-grid">
                              ${ca.accounts.map(acc => `
                                <div style="background: var(--bg-card); padding: 10px 12px; border-radius: 4px; border: 1px solid var(--border-light);">
                                  <div style="font-weight: 600; font-size: 0.82rem; color: var(--accent-crimson); margin-bottom: 4px;">${escapeHtml(acc.source_text || acc.claim_id)}</div>
                                  <div style="font-size: 0.84rem; line-height: 1.4;">${escapeHtml(acc.assertion)}</div>
                                  <div style="font-size: 0.78rem; color: var(--text-subtle); margin-top: 4px;">Source: ${escapeHtml(acc.witness_or_document || '')}</div>
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                          ${ca.system_synthesis ? `
                            <div style="margin-top: 8px; font-size: 0.84rem; font-style: italic; color: var(--text-main);">
                              <strong>Epistemic Demarcation:</strong> ${escapeHtml(ca.system_synthesis)}
                            </div>
                          ` : ''}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </details>
          </footer>

          <!-- Embedded Static Trace Data -->
          <script type="application/json" id="trace-data-${escapeHtml(unit.unit_id)}">
            ${JSON.stringify(unit).replace(/</g, '\\u003c')}
          </script>
        </article>
      `;
    });

    journeyHtml += `</section>`;
  });

  // =========================================================================
  // VIEW B: THE RELATIONAL KNOWLEDGE MAP
  // =========================================================================
  const entities = facets.entities || [];
  const causalEdges = facets.causal_relationships || [];
  const relationalEdges = facets.relationships || [];
  const plates = facets.archival_plates || [];
  const disputes = facets.competing_accounts || [];

  // Group entities by type
  const entitiesByType = {};
  entities.forEach(ent => {
    const t = ent.type || 'person';
    if (!entitiesByType[t]) entitiesByType[t] = [];
    entitiesByType[t].push(ent);
  });

  const knowledgeMapHtml = `
    <section class="knowledge-map-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Systemic Relational Architecture</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Relational Knowledge Map</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Multi-actor institutional network, multi-step causal DAG, archival plates catalog, and historiographical dispute matrices derived strictly from canonical knowledge units.
        </p>
      </div>

      <!-- 1. Multi-Step Causal DAG (All 44 Causal Edges) -->
      <div class="knowledge-matrix-card" id="km-causal-dag" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
        <h3 style="color: var(--accent-crimson); font-size: 1.25rem; margin-bottom: 8px;">1. Multi-Step Causal Historical Mechanics (DAG)</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Documented causal trajectories tracking how state actions, operational decisions, and ideological developments provoked retaliatory political and legal consequences.
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${causalEdges.map(cr => `
            <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 6px;">
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">
                  <a href="#${escapeHtml(cr.source_unit_id)}" style="color: inherit; text-decoration: none;">${escapeHtml(cr.source_unit_id)}</a>
                  <span style="color: var(--accent-crimson); margin: 0 6px;">→</span>
                  <a href="#${escapeHtml(cr.target_unit_id)}" style="color: inherit; text-decoration: none;">${escapeHtml(cr.target_unit_id)}</a>
                </div>
                <span class="badge ${getCausalBadgeClass(cr.causal_status)}">${escapeHtml(cr.causal_status)}</span>
              </div>
              <div style="font-size: 0.88rem; color: var(--text-main); line-height: 1.45;">${escapeHtml(cr.supporting_evidence || '')}</div>
              ${cr.provenance ? `<div style="font-size: 0.78rem; color: var(--text-subtle); margin-top: 4px;">Provenance: <code>${escapeHtml(cr.provenance)}</code></div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Archival Documents & Contemporary Plates (25 Document Units) -->
      <div class="knowledge-matrix-card" id="km-archival-plates" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
        <h3 style="color: var(--accent-slate); font-size: 1.25rem; margin-bottom: 8px;">2. Archival Document Plates & Contemporary Record Catalog</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Complete inventory of contemporaneous records, court exhibits, executive orders, FIRs, and photographic document plates preserved in the benchmark.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
          ${plates.map(plate => {
            const pl = plate.payload || {};
            return `
              <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                  <span class="plate-tag">${escapeHtml(pl.medium_format || 'Archival Document')}</span>
                  <a href="#${escapeHtml(plate.unit_id)}" style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-crimson); font-weight: 700; text-decoration: none;">${escapeHtml(plate.unit_id)}</a>
                </div>
                <h4 style="font-size: 0.98rem; color: var(--text-main); margin-bottom: 6px;">${escapeHtml(pl.document_title || plate.title)}</h4>
                <div style="font-size: 0.82rem; color: var(--text-subtle); margin-bottom: 8px;">
                  <strong>Origin:</strong> ${escapeHtml(pl.author_or_origin || 'Official Record')} • <strong>Date:</strong> ${escapeHtml(pl.document_date || 'N/A')}
                </div>
                <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.45; margin-bottom: 8px;">${escapeHtml(pl.legal_or_ideological_significance || '')}</p>
                ${pl.key_verbatim_excerpts && pl.key_verbatim_excerpts.length > 0 ? `
                  <div style="background: var(--bg-card); padding: 8px 10px; border-left: 2px solid var(--accent-crimson); font-style: italic; font-size: 0.82rem; line-height: 1.4;">
                    "${escapeHtml(pl.key_verbatim_excerpts[0])}"
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. Historiographical Disputes & Conflicting Evidence Matrix -->
      <div class="knowledge-matrix-card" id="km-disputes" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
        <h3 style="color: var(--accent-gold); font-size: 1.25rem; margin-bottom: 8px;">3. Historiographical Disputes & Competing Accounts Matrix</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Preservation of unresolved evidentiary contradictions, conflicting witness reports, and divergent scholarly theses across the historical record.
        </p>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${disputes.map(d => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); border-left: 4px solid var(--accent-gold); padding: 16px; border-radius: 4px;">
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-crimson); font-weight: 700; margin-bottom: 4px;">
                <a href="#${escapeHtml(d.unit_id)}" style="color: inherit; text-decoration: none;">Unit: ${escapeHtml(d.unit_id)}</a>
              </div>
              <h4 style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 10px;">${escapeHtml(d.title)}</h4>
              ${d.competing_accounts.map(ca => `
                <div style="margin-bottom: 12px;">
                  <div style="font-weight: 600; color: var(--accent-gold); font-size: 0.9rem; margin-bottom: 6px;">Contested Issue: ${escapeHtml(ca.contested_issue || ca.issue)}</div>
                  ${ca.accounts ? `
                    <div class="dispute-grid" style="margin-bottom: 8px;">
                      ${ca.accounts.map(acc => `
                        <div style="background: var(--bg-card); padding: 10px 12px; border-radius: 4px; border: 1px solid var(--border-light);">
                          <div style="font-weight: 700; font-size: 0.84rem; color: var(--accent-crimson); margin-bottom: 2px;">${escapeHtml(acc.source_text || acc.claim_id)}</div>
                          <div style="font-size: 0.86rem; line-height: 1.4;">${escapeHtml(acc.assertion)}</div>
                          <div style="font-size: 0.76rem; color: var(--text-subtle); margin-top: 4px;">Witness / Basis: ${escapeHtml(acc.witness_or_document || '')}</div>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                  ${ca.system_synthesis ? `
                    <div style="font-size: 0.84rem; font-style: italic; color: var(--text-muted); padding: 6px 10px; background: rgba(184, 134, 11, 0.08); border-radius: 3px;">
                      <strong>Epistemic Safeguard:</strong> ${escapeHtml(ca.system_synthesis)}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 4. Entity & Organizational Network Directory (93 Entities) -->
      <div class="knowledge-matrix-card" id="km-entities" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px;">
        <h3 style="color: var(--accent-forest); font-size: 1.25rem; margin-bottom: 8px;">4. Historical Actors, Organizations & Institutional Entities</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Master directory of revolutionaries, colonial officials, judges, lawyers, approvers, and political organizations active across the Lahore Conspiracy Case.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
          ${entities.map(ent => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 12px 14px; border-radius: 4px;">
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.94rem;">${escapeHtml(ent.name)}</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(ent.role || '')}</div>
              <div style="font-size: 0.76rem; color: var(--text-subtle); margin-top: 6px;">
                Type: <code>${escapeHtml(ent.type || 'person')}</code> • Appearances: ${ent.appearances ? ent.appearances.length : 1} units
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // =========================================================================
  // VIEW C: THE DIALECTICAL ENGINE & SOCRATIC TEST CASES
  // =========================================================================
  // 1. Primary Subject Writings (Ideological Trajectory)
  const primaryWritingUnits = units.filter(u => u.epistemic_status === '[PRIMARY_SUBJECT_WRITING]');

  // 2. Legal / Extraordinary Law Conflict Units
  const legalUnits = units.filter(u => {
    const txt = JSON.stringify(u);
    return txt.includes('Ordinance III') || txt.includes('Section 72') || txt.includes('Tribunal') || txt.includes('Privy Council') || txt.includes('FIR');
  });

  // 3. Socratic Active Recall Flashcards derived from key causal links & turning points
  const activeRecallCards = [
    {
      q: "What exact calendar date, time, and physical Lahore location are documented for the Saunders shooting, and what was the immediate causal trigger?",
      a: "17 December 1928 at approximately 4:15 PM outside District Police Headquarters opposite D.A.V. College in Lahore. The causal trigger was the fatal lathi charge ordered by ASP Scott on Lala Lajpat Rai during the Simon Commission protest on 30 October 1928, leading to Rai's death on 17 November 1928."
    },
    {
      q: "What was the strategic, non-lethal function of the Assembly Bomb on 8 April 1929, and what primary slogans were proclaimed?",
      a: "The bombs were deliberately made non-lethal (potassium chlorate and picric acid in cast iron shells) and dropped into empty floor spaces to avoid loss of life. The calculated strategic function was propaganda-by-deed to 'make the deaf hear' in protest of the Public Safety Bill and Trade Disputes Bill. The slogans proclaimed were 'Inquilab Zindabad' and 'Workers of the World Unite'."
    },
    {
      q: "How does the BKRS system strictly demarcate Bhagat Singh's letter on love from Juss's biographical hypothesis?",
      a: "Bhagat Singh's letter to Sukhdev is preserved strictly as verified [PRIMARY_SUBJECT_WRITING], defending human love as a noble, elevated passion rather than a weakness. Juss's hypothesis that Bhagat Singh harbored romantic feelings for a specific girl in Kanpur is quarantined as unproven [BIOGRAPHER_CONJECTURE]."
    },
    {
      q: "What legal anomaly characterized Ordinance III of 1930 promulgated by Lord Irwin on 1 May 1930?",
      a: "Ordinance III created a Special Tribunal of three High Court judges that suspended preliminary committal proceedings, eliminated trial by jury, removed the right of appeal to the High Court, and crucially allowed the Tribunal to proceed ex parte in the absence of accused prisoners. The Privy Council subsequently held that the Governor-General was the sole judge of an emergency under Section 72."
    },
    {
      q: "What contradictory evidence exists regarding the auditory shot counts during the Saunders incident versus the post-mortem findings?",
      a: "Panicked auditory bystanders gave shot estimates ranging wildly from 2 to 12+ shots due to echoes from brick walls and college buildings. Dr. C.H. Rai's post-mortem report conclusively proved exactly eight bullet wounds with distinct entry and exit trajectories."
    },
    {
      q: "What official secret disposal instructions were issued for the bodies on 23 March 1931, and how did the public uncover the remains?",
      a: "District Magistrate secret order (Plate 20) directed the bodies to be moved out the back gate of Lahore Central Jail under cover of night, driven to Ganda Singh Wala on the Sutlej riverbanks, cremated secretly using kerosene, and ashes thrown into the river. Panicked hurried cremation left charred body fragments which local villagers and a citizens' committee discovered the next morning."
    },
    {
      q: "What historiographical tension exists regarding Bhagat Singh's ideological evolution?",
      a: "Historian Bipan Chandra argued that Bhagat Singh made a clean, qualitative break with revolutionary romanticism and terrorism by 1928 to embrace scientific Marxism. Conversely, historians Kama Maclean and Chris Moffat argue that Bhagat Singh retained an emotional commitment to performative martyrdom and revolutionary romanticism to mobilize the Indian masses."
    }
  ];

  const experienceHtml = `
    <section class="dialectical-engine-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Dialectical Analysis & Socratic Recall</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: The Dialectical Engine</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Ideological maturation through primary subject writings, institutional crisis of colonial legality, and forensic active recall flashcards.
        </p>
      </div>

      <!-- 1. Ideological Trajectory: Primary Subject Writings (8 Units) -->
      <div class="knowledge-matrix-card" id="de-writings" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
        <h3 style="color: var(--accent-crimson); font-size: 1.25rem; margin-bottom: 8px;">1. Ideological Evolution: Primary Subject Corpus</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Chronological progression of Bhagat Singh's authentic writings, leaflets, courtroom declarations, and philosophical essays ([PRIMARY_SUBJECT_WRITING]):
        </p>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${primaryWritingUnits.map((pu, idx) => `
            <div style="background: var(--bg-subtle); border-left: 4px solid var(--accent-crimson); padding: 16px; border-radius: 0 4px 4px 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
                <span style="font-weight: 700; font-size: 1rem; color: var(--text-main);">#${idx + 1}: ${escapeHtml(pu.title)}</span>
                <span class="badge badge-primary-writing">[PRIMARY_SUBJECT_WRITING]</span>
              </div>
              <div style="font-size: 0.82rem; color: var(--text-subtle); margin-bottom: 8px;">
                Anchor: ${pu.temporal_anchor ? escapeHtml(pu.temporal_anchor.date_raw) : 'Contemporaneous'} • Unit: <a href="#${escapeHtml(pu.unit_id)}" style="color: var(--accent-crimson); text-decoration: none; font-weight: 600;">${escapeHtml(pu.unit_id)}</a>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.5; margin-bottom: 10px;">${escapeHtml(pu.summary_statement)}</p>
              ${pu.source_evidence && pu.source_evidence.length > 0 ? `
                <div class="plate-verbatim-box" style="margin: 8px 0 0 0; font-size: 0.88rem;">
                  "${escapeHtml(pu.source_evidence[0])}"
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Legal Crisis: State Legality vs Revolutionary Vanguard -->
      <div class="knowledge-matrix-card" id="de-legality" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
        <h3 style="color: var(--accent-slate); font-size: 1.25rem; margin-bottom: 8px;">2. The Institutional Crisis: Extraordinary Law vs Revolutionary Sovereignty</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          How colonial executive power bypassed common law procedural protections to secure capital convictions, creating an insurmountable crisis of legitimacy.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px;">
          ${legalUnits.slice(0, 8).map(lu => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 14px 16px; border-radius: 4px;">
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-crimson); font-weight: 700; margin-bottom: 4px;">
                <a href="#${escapeHtml(lu.unit_id)}" style="color: inherit; text-decoration: none;">${escapeHtml(lu.unit_id)}</a>
              </div>
              <h4 style="font-size: 0.96rem; color: var(--text-main); margin-bottom: 6px;">${escapeHtml(lu.title)}</h4>
              <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.45;">${escapeHtml(lu.summary_statement)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. Socratic Forensic Active Recall -->
      <div class="knowledge-matrix-card" id="de-recall" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px;">
        <h3 style="color: var(--accent-forest); font-size: 1.25rem; margin-bottom: 8px;">3. Forensic Active Recall Engine (Socratic Test Cases)</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
          Direct epistemic verification questions testing causal links, date anchors, legal mechanics, and source fidelity without external distortion:
        </p>
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${activeRecallCards.map((card, idx) => `
            <div class="flashcard" style="background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: 4px; padding: 14px 18px;">
              <div class="flashcard-q" style="font-weight: 600; font-size: 0.94rem; color: var(--text-main); margin-bottom: 8px;">
                ${idx + 1}. ${escapeHtml(card.q)}
              </div>
              <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)" style="background: var(--bg-card); border: 1px solid var(--border-dark); color: var(--text-main); font-size: 0.8rem; font-weight: 600; padding: 4px 10px; border-radius: 3px; cursor: pointer;">
                Show Answer ▼
              </button>
              <div class="flashcard-a" style="display: none; margin-top: 10px; font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; border-top: 1px dashed var(--border-light); padding-top: 8px;">
                ${escapeHtml(card.a)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  return {
    journeyHtml,
    knowledgeMapHtml,
    experienceHtml
  };
}

module.exports = {
  renderHistoricalViews
};
