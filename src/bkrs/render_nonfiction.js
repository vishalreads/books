/**
 * BKRS Nonfiction Renderer
 * Implements View A (The Argument Journey), View B (The Conceptual Blueprint),
 * and View C (The Operational Heuristic Engine) for Analytical Nonfiction.
 * 
 * View A upgraded to Continuous Detailed Book Summary / Reconstruction Standard.
 */

const { PSYCHOLOGY_OF_MONEY_CHAPTERS } = require('./psychology_of_money_narrative');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderNonfictionViews(model) {
  // 1. Build View A: The Argument Journey (Continuous Detailed Summary)
  let journeyHtml = `
    <style>
      .narrative-stream-container {
        max-width: 760px;
        margin: 0 auto;
        padding: 10px 0 60px 0;
      }
      .chapter-block-editorial {
        margin-bottom: 72px;
      }
      .chapter-header-editorial {
        margin: 48px 0 28px 0;
        border-bottom: 2px solid var(--accent-crimson);
        padding-bottom: 12px;
      }
      .chapter-kicker-editorial {
        font-family: var(--font-sans);
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--accent-crimson);
        display: block;
        margin-bottom: 4px;
      }
      .chapter-title-editorial {
        font-family: var(--font-serif);
        font-size: 2.1rem;
        line-height: 1.25;
        color: var(--text-main);
        margin: 4px 0 6px 0;
        letter-spacing: -0.015em;
      }
      .chapter-temporal-anchor {
        font-size: 0.88rem;
        color: var(--text-muted);
        font-style: italic;
      }
      .narrative-segment {
        margin-bottom: 32px;
        position: relative;
      }
      .narrative-prose-stream {
        font-family: var(--font-serif);
        font-size: 1.08rem;
        line-height: 1.82;
        color: var(--text-main);
      }
      .narrative-prose-stream p {
        margin-bottom: 1.35em;
        text-align: justify;
        text-justify: inter-word;
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
        margin-bottom: 6px;
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
        margin-right: 6px;
      }
    </style>
    <div class="narrative-stream-container">
  `;

  model.chapters.forEach(ch => {
    const chData = PSYCHOLOGY_OF_MONEY_CHAPTERS[ch.chapter_number] || {};
    const chTitle = chData.title || ch.chapter_title;

    journeyHtml += `
      <section class="chapter-block-editorial" id="chapter-${ch.chapter_number}">
        <header class="chapter-header-editorial">
          <span class="chapter-kicker-editorial">Argument Progression • ${ch.chapter_number === 0 ? 'Introduction' : (ch.chapter_number === 21 ? 'Postscript' : 'Chapter ' + ch.chapter_number)}</span>
          <h2 class="chapter-title-editorial">${escapeHtml(chTitle)}</h2>
        </header>
    `;

    ch.units.forEach(unit => {
      const gp = unit.genre_payload || {};
      const matClass = `badge-${unit.materiality || 'important'}`;
      const matLabel = (unit.materiality || 'IMPORTANT').toUpperCase();
      const epistemicLabel = (unit.epistemic_status || 'source_argument').toUpperCase().replace(/_/g, ' ');

      const unitParagraphs = (chData.units && chData.units[unit.unit_id]) || [
        gp.thesis_claim || unit.summary_statement,
        unit.summary_statement !== gp.thesis_claim ? unit.summary_statement : ''
      ].filter(Boolean);

      journeyHtml += `
        <article class="narrative-segment" id="${unit.unit_id}">
          <div class="narrative-prose-stream">
            ${unitParagraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('\n')}
          </div>

          <footer class="narrative-trace-footer">
            <span class="trace-loc">Ch. ${unit.chapter} • ${escapeHtml(unit.pages || 'Source Text')}</span>
            <button class="trace-pill-btn" onclick="openSourceTrace('${unit.unit_id}')" title="Inspect source trace">Source Trace ↗</button>
            <details class="analytical-drawer">
              <summary class="analytical-summary-btn">Analytical Detail & Epistemic Trace</summary>
              <div class="analytical-body">
                <div class="analytical-row">
                  <span class="analytical-label">Epistemic Status:</span>
                  <span class="badge badge-source-fact">${escapeHtml(epistemicLabel)}</span>
                </div>
                <div class="analytical-row">
                  <span class="analytical-label">Materiality:</span>
                  <span class="badge ${matClass}">${escapeHtml(matLabel)}</span> &mdash; ${escapeHtml(unit.materiality_reason || '')}
                </div>
                ${gp.thesis_claim ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Thesis Claim:</span>
                    <span>${escapeHtml(gp.thesis_claim)}</span>
                  </div>
                ` : ''}
                ${gp.logical_chain && gp.logical_chain.length > 0 ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Causal Deduction:</span>
                    <ol style="margin: 4px 0 0 18px; line-height: 1.5;">
                      ${gp.logical_chain.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                    </ol>
                  </div>
                ` : ''}
                ${gp.actionable_heuristic ? `
                  <div class="analytical-row">
                    <span class="analytical-label">Actionable Rule:</span>
                    <span>${escapeHtml(gp.actionable_heuristic)}</span>
                  </div>
                ` : ''}
              </div>
            </details>
          </footer>

          <script type="application/json" id="trace-data-${unit.unit_id}">
            ${JSON.stringify(unit).replace(/</g, '\\u003c')}
          </script>
        </article>
      `;
    });

    journeyHtml += `</section>`;
  });

  journeyHtml += `</div>`;

  // 2. Build View B: The Conceptual Blueprint
  const blueprintHtml = `
    <section class="blueprint-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Systemic Architecture</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Conceptual Blueprint</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Reorganized thematic matrix mapping 6 core behavioral laws, empirical studies, and causal dependency graphs.
        </p>
      </div>

      <div class="blueprint-card" id="bp-thematic-matrix">
        <h3 class="matrix-title">1. The 6 Behavioral Laws of Financial Longevity</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 1: The Wealth Asymmetry</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Getting wealthy requires risk and optimism; staying wealthy requires paranoia, frugality, and avoiding wipeout risk.</div>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 2: Tails Drive Everything</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">In financial portfolios, business ventures, and careers, a tiny fraction of outlier events generates the entire net outcome.</div>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 3: Reasonable > Rational</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">A strategy that lets you sleep at night and endure bear markets outperforms an optimal spreadsheet model that causes panic.</div>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 4: Wealth is Invisible</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Wealth is the cars not bought, the watches not worn, and the luxury skipped. Wealth is unexercised freedom.</div>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 5: The Goalpost Trap</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">If expectations expand in lockstep with income, you will never have enough. Knowing when to stop is the ultimate financial skill.</div>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Law 6: Room for Error</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">The most important part of any plan is planning for your plan not going according to plan. Margin of safety prevents ruin.</div>
          </div>
        </div>
      </div>
    </section>
  `;

  // 3. Build View C: The Operational Engine
  const engineHtml = `
    <section class="engine-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Actionable System</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: The Operational Engine</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Executable decision heuristics, personal finance checklists, and empirical study audits.
        </p>
      </div>

      <div class="engine-card" id="engine-rules">
        <h3 class="matrix-title">1. The 10 Invariant Operational Rules of Personal Finance</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 14px;">
          <div style="border-left: 3px solid var(--accent-crimson); padding-left: 14px;">
            <strong>Rule 1: Never Risk What You Have and Need for What You Don't Have and Don't Need.</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Reputation, freedom, family, and health have infinite value. Never leverage them for incremental financial return.</div>
          </div>
          <div style="border-left: 3px solid var(--accent-crimson); padding-left: 14px;">
            <strong>Rule 2: Measure Financial Progress by Freedom, Not Consumption.</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">The ability to wake up and do whatever you want is the highest dividend money can pay.</div>
          </div>
          <div style="border-left: 3px solid var(--accent-crimson); padding-left: 14px;">
            <strong>Rule 3: Build an Irrational Margin of Safety.</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Hold cash reserves that feel excessive on a spreadsheet. In an unpredictable world, liquidity buys survival.</div>
          </div>
          <div style="border-left: 3px solid var(--accent-crimson); padding-left: 14px;">
            <strong>Rule 4: Accept Volatility as an Admission Fee, Not a Fine.</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Market downturns are the ticket price for long-term compounding. Do not treat price drops as punishment.</div>
          </div>
          <div style="border-left: 3px solid var(--accent-crimson); padding-left: 14px;">
            <strong>Rule 5: Define Your Own Game and Ignore Other Players.</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Never take pricing cues or financial advice from individuals operating with a different investment horizon.</div>
          </div>
        </div>
      </div>
    </section>
  `;

  return {
    journeyHtml,
    knowledgeMapHtml: blueprintHtml,
    experienceHtml: engineHtml
  };
}

module.exports = {
  renderNonfictionViews
};
