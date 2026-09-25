/**
 * BKRS Nonfiction Renderer
 * Implements View A (The Argument Journey), View B (The Conceptual Blueprint),
 * and View C (The Operational Heuristic Engine) for Analytical Nonfiction.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderNonfictionViews(model) {
  // 1. Build View A: The Argument Journey
  let journeyHtml = '';

  model.chapters.forEach(ch => {
    journeyHtml += `
      <section class="chapter-block" id="chapter-${ch.chapter_number}">
        <div style="margin: 40px 0 20px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
          <span class="meta-label">Argument Sequence</span>
          <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">${escapeHtml(ch.chapter_title)}</h2>
        </div>
    `;

    ch.units.forEach(unit => {
      const gp = unit.genre_payload || {};
      const matClass = `badge-${unit.materiality || 'important'}`;
      const matLabel = (unit.materiality || 'IMPORTANT').toUpperCase();
      const epistemicLabel = (unit.epistemic_status || 'source_argument').toUpperCase().replace(/_/g, ' ');

      journeyHtml += `
        <article class="content-unit" id="${unit.unit_id}">
          <div class="unit-top-meta">
            <div class="unit-badges">
              <span class="badge badge-source-fact">${escapeHtml(epistemicLabel)}</span>
              <span class="badge ${matClass}">LEVEL: ${escapeHtml(matLabel)}</span>
            </div>
            <div class="unit-chronology-tag">
              Ch. ${unit.chapter} • ${escapeHtml(unit.pages || 'Source Text')}
            </div>
          </div>

          <h3 class="unit-title" style="margin-bottom: 12px;">${escapeHtml(gp.thesis_claim || unit.summary_statement)}</h3>

          ${unit.summary_statement && unit.summary_statement !== gp.thesis_claim ? `
            <div style="font-style: italic; color: var(--text-muted); margin-bottom: 14px; font-size: 0.96rem;">
              "${escapeHtml(unit.summary_statement)}"
            </div>
          ` : ''}

          <!-- Logical Chain -->
          ${gp.logical_chain && gp.logical_chain.length > 0 ? `
            <div class="unit-secondary-box" style="margin-bottom: 16px; background: var(--bg-subtle);">
              <span class="unit-secondary-label" style="display:block; margin-bottom: 6px;">Causal Deduction & Logical Chain:</span>
              <ol style="margin: 0; padding-left: 20px; font-size: 0.92rem; line-height: 1.6;">
                ${gp.logical_chain.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
              </ol>
            </div>
          ` : ''}

          <!-- Empirical Studies -->
          ${gp.empirical_studies && gp.empirical_studies.length > 0 ? `
            <div style="margin-bottom: 16px;">
              ${gp.empirical_studies.map(study => `
                <div style="background: rgba(184, 134, 11, 0.08); border-left: 3px solid var(--accent-gold); padding: 12px 16px; border-radius: 4px; margin-bottom: 10px;">
                  <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem; margin-bottom: 4px;">
                    🔬 Landmark Study: ${escapeHtml(study.researchers)} (${study.year}) — ${escapeHtml(study.institution)}
                  </div>
                  <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 4px;">
                    <strong>Methodology:</strong> ${escapeHtml(study.methodology)}
                  </div>
                  <div style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 4px;">
                    <strong>Findings:</strong> ${escapeHtml(study.findings)}
                  </div>
                  <div style="font-size: 0.86rem; color: var(--accent-crimson); font-weight: 600;">
                    <strong>Causal Impact:</strong> ${escapeHtml(study.causal_conclusion)}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Quantitative Models -->
          ${gp.quantitative_models && gp.quantitative_models.length > 0 ? `
            <div style="margin-bottom: 16px;">
              ${gp.quantitative_models.map(qm => `
                <div style="background: rgba(30, 77, 107, 0.08); border-left: 3px solid var(--accent-teal); padding: 12px 16px; border-radius: 4px; margin-bottom: 10px;">
                  <div style="font-weight: 700; color: var(--accent-teal); font-size: 0.92rem; margin-bottom: 4px;">
                    📊 Quantitative Model: ${escapeHtml(qm.model_name || 'Distribution')}
                  </div>
                  ${qm.formula ? `<div style="font-family: monospace; font-size: 0.95rem; margin-bottom: 4px;">${escapeHtml(qm.formula)}</div>` : ''}
                  ${qm.data ? `<div style="font-size: 0.88rem; color: var(--text-main);">${escapeHtml(qm.data)}</div>` : ''}
                  ${qm.counterfactual ? `<div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;"><em>Counterfactual:</em> ${escapeHtml(qm.counterfactual)}</div>` : ''}
                  ${qm.distribution ? `<div style="font-size: 0.88rem; color: var(--text-main);">${escapeHtml(qm.distribution)}</div>` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Historical Cases -->
          ${gp.historical_cases && gp.historical_cases.length > 0 ? `
            <div style="margin-bottom: 16px;">
              ${gp.historical_cases.map(hc => `
                <div style="border: 1px solid var(--border-light); background: var(--bg-card); padding: 12px 16px; border-radius: 4px; margin-bottom: 8px;">
                  <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.92rem; margin-bottom: 4px;">
                    🏛️ Case Evidence: ${escapeHtml(hc.entity)}
                  </div>
                  <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
                    ${escapeHtml(hc.event || hc.mechanism || '')}
                  </div>
                  ${hc.outcome ? `
                    <div style="font-size: 0.88rem; color: var(--text-main); margin-top: 4px;">
                      <strong>Outcome / Lesson:</strong> ${escapeHtml(hc.outcome)}
                    </div>
                  ` : ''}
                  ${hc.bifurcated_destiny ? `
                    <div style="font-size: 0.88rem; color: var(--text-main); margin-top: 4px;">
                      <strong>Bifurcation:</strong> ${escapeHtml(hc.bifurcated_destiny)}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Analogies -->
          ${gp.analogies && gp.analogies.length > 0 ? `
            <div style="margin-bottom: 16px;">
              ${gp.analogies.map(an => `
                <div style="background: var(--bg-subtle); border-left: 3px solid var(--text-subtle); padding: 10px 14px; border-radius: 4px; font-size: 0.88rem;">
                  <strong>Physical Analogy (${escapeHtml(an.name)}):</strong> ${escapeHtml(an.mechanism)}
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Actionable Heuristic Callout -->
          ${gp.actionable_heuristic ? `
            <div style="background: rgba(142, 40, 0, 0.06); border: 1px solid rgba(142, 40, 0, 0.2); border-left: 4px solid var(--accent-crimson); padding: 12px 16px; border-radius: 4px; margin-top: 14px;">
              <span class="unit-secondary-label" style="color: var(--accent-crimson); font-weight: 700; display:block; margin-bottom: 4px;">
                ⚡ Actionable Operational Rule:
              </span>
              <span style="font-size: 0.94rem; color: var(--text-main); line-height: 1.5; font-weight: 500;">
                ${escapeHtml(gp.actionable_heuristic)}
              </span>
            </div>
          ` : ''}

          <footer class="unit-footer" style="margin-top: 20px;">
            <div style="color: var(--text-subtle);">
              Ch. ${unit.chapter} • ${escapeHtml(unit.pages || 'Sequence')} • ID: ${escapeHtml(unit.unit_id)}
            </div>
            <button class="source-trace-trigger" onclick="openSourceTrace('${unit.unit_id}')" title="Inspect source provenance and materiality">
              Source Trace ↗
            </button>
          </footer>

          <script type="application/json" id="trace-data-${unit.unit_id}">
            ${JSON.stringify(unit).replace(/</g, '\\u003c')}
          </script>
        </article>
      `;
    });

    journeyHtml += `</section>`;
  });

  // 2. Build View B: The Conceptual Blueprint
  const knowledgeMapHtml = `
    <section class="knowledge-map-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Systemic Architecture</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Conceptual Blueprint</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Analytical dependency graphs, foundational epistemic traditions, master empirical studies corpus, and offensive vs. defensive loop asymmetry.
        </p>
      </div>

      <!-- 1. Four Theoretical Pillars -->
      <div class="knowledge-matrix-card" id="bp-pillars">
        <h3 class="matrix-title">1. The Four Foundational Intellectual Traditions</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          <em>The Psychology of Money</em> synthesizes four major 20th-century frameworks to demolish sterile spreadsheet economics:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 1rem; margin-bottom: 6px;">Behavioral Economics</div>
            <div style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 8px;">Daniel Kahneman, Amos Tversky, Richard Thaler</div>
            <p style="font-size: 0.88rem; line-height: 1.5;">Loss aversion, mental accounting, ego-driven status signaling, and emotional overreaction dictate balance-sheet survival far more than rational utility optimization.</p>
          </div>
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-teal); font-size: 1rem; margin-bottom: 6px;">Classical Value Investing</div>
            <div style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 8px;">Benjamin Graham & Charlie Munger</div>
            <p style="font-size: 0.88rem; line-height: 1.5;">Graham's <em>Margin of Safety</em> and Munger's multi-disciplinary models (inversion, lollapalooza effects, and acknowledging systemic luck) establish the structural defense against ruin.</p>
          </div>
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--accent-gold); font-size: 1rem; margin-bottom: 6px;">Indexation & "Enough"</div>
            <div style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 8px;">John C. Bogle (Vanguard Founder)</div>
            <p style="font-size: 0.88rem; line-height: 1.5;">Low-cost broad market compounding combined with the internal boundary of "Enough"—recognizing that risking essential security for unneeded luxuries is irrational madness.</p>
          </div>
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 16px; border-radius: 4px;">
            <div style="font-weight: 700; color: #5a3e85; font-size: 1rem; margin-bottom: 6px;">Epistemology of Tail Risk</div>
            <div style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 8px;">Nassim Nicholas Taleb</div>
            <p style="font-size: 0.88rem; line-height: 1.5;">Power-law distributions rule corporate survival, venture capital, and market indices. A tiny percentage of tail events drives 100% of historical net gains.</p>
          </div>
        </div>
      </div>

      <!-- 2. Master Empirical Corpus Table -->
      <div class="knowledge-matrix-card" id="bp-empirical">
        <h3 class="matrix-title">2. Landmark Empirical Corpus & Primary Research Studies</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Full provenance of primary peer-reviewed literature and empirical data sets cited in the work:
        </p>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 2px solid var(--accent-crimson); background: var(--bg-subtle);">
                <th style="padding: 10px 12px;">Study / Data</th>
                <th style="padding: 10px 12px;">Researchers</th>
                <th style="padding: 10px 12px;">Year & Pub</th>
                <th style="padding: 10px 12px;">Methodology & Sample</th>
                <th style="padding: 10px 12px;">Causal Finding</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-light);">
                <td style="padding: 10px 12px; font-weight: 600;">Generative Scars</td>
                <td style="padding: 10px 12px;">Ulrike Malmendier & Stefan Nagel</td>
                <td style="padding: 10px 12px;">2011 (NBER)</td>
                <td style="padding: 10px 12px;">50 years of Fed Survey of Consumer Finances cohorts</td>
                <td style="padding: 10px 12px;">Teen/early-20s inflation or depression experience permanently imprints adult risk aversion.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light); background: var(--bg-subtle);">
                <td style="padding: 10px 12px; font-weight: 600;">Subjective Autonomy</td>
                <td style="padding: 10px 12px;">Angus Campbell</td>
                <td style="padding: 10px 12px;">1981 (Univ of Michigan)</td>
                <td style="padding: 10px 12px;">Nationally representative survey of well-being determinants</td>
                <td style="padding: 10px 12px;">Autonomous daily control over time predicts happiness far higher than income or career tier.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light);">
                <td style="padding: 10px 12px; font-weight: 600;">End of History Illusion</td>
                <td style="padding: 10px 12px;">Jordi Quoidbach, Daniel Gilbert, Timothy Wilson</td>
                <td style="padding: 10px 12px;">2013 (Science)</td>
                <td style="padding: 10px 12px;">19,000 participants aged 18-68 comparing past vs expected future change</td>
                <td style="padding: 10px 12px;">Humans recognize past changes but underestimate future changes, creating severe 30-year planning sunk cost traps.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light); background: var(--bg-subtle);">
                <td style="padding: 10px 12px; font-weight: 600;">Russell 3000 Tails</td>
                <td style="padding: 10px 12px;">J.P. Morgan Asset Management</td>
                <td style="padding: 10px 12px;">2014 Study</td>
                <td style="padding: 10px 12px;">1980–2014 returns of 3,000 public U.S. equities</td>
                <td style="padding: 10px 12px;">40% of companies catastrophic loss (-70%+); 7% generated virtually all net index gains.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light);">
                <td style="padding: 10px 12px; font-weight: 600;">VC Power Laws</td>
                <td style="padding: 10px 12px;">Correlation Ventures Data</td>
                <td style="padding: 10px 12px;">2004–2014 Sample</td>
                <td style="padding: 10px 12px;">21,000 venture financings across a decade</td>
                <td style="padding: 10px 12px;">65% lose money; exactly 0.5% (100 companies) produce 50x+ returns, driving entire industry profit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. The Core Asymmetry Engine -->
      <div class="knowledge-matrix-card" id="bp-asymmetry">
        <h3 class="matrix-title">3. The Core Asymmetry: Getting Wealthy vs. Staying Wealthy</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Capital accumulation and capital preservation require contradictory psychological temperaments:
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background: rgba(30, 77, 107, 0.06); border: 1px solid rgba(30, 77, 107, 0.2); padding: 16px; border-radius: 4px;">
            <h4 style="color: var(--accent-teal); margin-top: 0;">GETTING WEALTHY (Offensive Loop)</h4>
            <ul style="font-size: 0.88rem; line-height: 1.6; padding-left: 20px;">
              <li><strong>Core Mindset:</strong> Aggressive optimism, audacity, high risk appetite.</li>
              <li><strong>Driver:</strong> Embracing variance and concentrating execution on winning assets.</li>
              <li><strong>Vulnerability:</strong> Lethal overconfidence during market windfalls.</li>
              <li><strong>Archetype:</strong> Jesse Livermore shorting 1929; Richard Fuscone building 18,000 sq ft mansion.</li>
            </ul>
          </div>
          <div style="background: rgba(142, 40, 0, 0.06); border: 1px solid rgba(142, 40, 0, 0.2); padding: 16px; border-radius: 4px;">
            <h4 style="color: var(--accent-crimson); margin-top: 0;">STAYING WEALTHY (Defensive Loop)</h4>
            <ul style="font-size: 0.88rem; line-height: 1.6; padding-left: 20px;">
              <li><strong>Core Mindset:</strong> Paranoid vigilance, frugality, room for error.</li>
              <li><strong>Driver:</strong> Holding cash reserves to prevent involuntary liquidation at market bottoms.</li>
              <li><strong>Strength:</strong> Anti-fragile endurance across multi-decade market crashes.</li>
              <li><strong>Archetype:</strong> Ronald Read chopping firewood; Warren Buffett holding $100B+ cash buffer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  // 3. Build View C: The Operational Heuristic Engine
  const experienceHtml = `
    <section class="experience-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Applied Execution</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: The Operational Heuristic Engine</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Interactive decision flowcharts, skeptical boundary conditions, and Socratic active recall flashcards for personal balance sheet defense.
        </p>
      </div>

      <!-- 1. Diagnostic Decision Tree: The Enough Protocol -->
      <div class="experience-panel" id="exp-trees">
        <h3 class="experience-title">1. Diagnostic Decision Protocol: The "Enough" Test</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Use this operational script whenever contemplating leverage or speculative ventures:
        </p>

        <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 20px; border-radius: 6px; font-family: monospace; font-size: 0.88rem; line-height: 1.6;">
          <div>[STEP 1: EVALUATING SPECULATIVE OR LEVERAGED OPPORTUNITY]</div>
          <div style="color: var(--accent-crimson); margin-left: 15px;">│</div>
          <div style="color: var(--accent-crimson); margin-left: 15px;">▼</div>
          <div style="background: var(--bg-subtle); padding: 8px 12px; border-radius: 4px;">
            <strong>Question 1:</strong> Is the capital at risk required for your core family security, housing, or basic autonomy?
          </div>
          <div style="margin-left: 30px; margin-top: 6px;">
            ├─► <strong>[YES]:</strong> <span style="color: var(--accent-crimson); font-weight: 700;">ABORT TRANSACTION IMMEDIATELY.</span> (Rajat Gupta Rule: Never risk what you need for what you do not need).<br>
            └─► <strong>[NO]:</strong> Proceed to Question 2.
          </div>
          <div style="color: var(--accent-teal); margin-left: 15px; margin-top: 10px;">│</div>
          <div style="color: var(--accent-teal); margin-left: 15px;">▼</div>
          <div style="background: var(--bg-subtle); padding: 8px 12px; border-radius: 4px;">
            <strong>Question 2:</strong> Does this prospective venture trigger social comparison envy against richer peers?
          </div>
          <div style="margin-left: 30px; margin-top: 6px;">
            ├─► <strong>[YES]:</strong> <span style="color: var(--accent-crimson); font-weight: 700;">HALT OPERATION.</span> Calibrate internal ego thermostat. Social comparison is a ceiling-less ceiling.<br>
            └─► <strong>[NO]:</strong> Proceed with small discretionary allocation (&le; 5% of net worth).
          </div>
        </div>
      </div>

      <!-- 2. Volatility Reframing Protocol -->
      <div class="experience-panel" id="exp-fee">
        <h3 class="experience-title">2. Volatility Fee vs. Fine Calibration Protocol</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          When an inevitable 20%–40% equity drawdown occurs, execute this cognitive script:
        </p>
        <div style="background: rgba(30, 77, 107, 0.08); border-left: 4px solid var(--accent-teal); padding: 16px 20px; border-radius: 4px; font-size: 0.92rem; line-height: 1.6;">
          <p style="margin-top: 0; font-weight: 600; color: var(--text-main);">
            "This market decline is NOT a fine or traffic ticket for making a mistake. It is the Disneyland admission ticket required to capture decades of compounding equity returns. If market returns were smooth and guaranteed, there would be zero equity risk premium. Do not sell; turn off the screen; allow compounding to operate undisturbed."
          </p>
        </div>
      </div>

      <!-- 3. Skeptical Auditor's Demarcation -->
      <div class="experience-panel" id="exp-boundaries">
        <h3 class="experience-title">3. Skeptical Auditor's Demarcation & Boundary Conditions</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Where Housel's heuristics encounter critical limits or require analytical qualification:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.92rem; margin-bottom: 4px;">1. Survivorship Bias in Compounding</div>
            <div style="font-size: 0.86rem; line-height: 1.5;">Buffett compounded through the American Century (unprecedented superpower dominance). In nations experiencing hyperinflation, revolution, or conquest, buy-and-hold equity compounding resulted in total loss.</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.92rem; margin-bottom: 4px;">2. The "Reasonable" Cash Trap</div>
            <div style="font-size: 0.86rem; line-height: 1.5;">While holding cash delivers serenity, excessive cash allocations (e.g. 50%+) during high-inflation regimes guarantee mathematical destruction of real purchasing power.</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.92rem; margin-bottom: 4px;">3. Structural Poverty Limits</div>
            <div style="font-size: 0.86rem; line-height: 1.5;">The dictum "Savings = Income - Ego" assumes discretionary income. For the working poor whose income is absorbed by food, rent, and medicine, poverty is a cash-flow deficit, not an ego defect.</div>
          </div>
        </div>
      </div>

      <!-- 4. Socratic Active Recall Suite -->
      <div class="experience-panel" id="exp-recall">
        <h3 class="experience-title">4. Socratic Active Recall Engine (8 Forensic Flashcards)</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Test your mastery of the work's primary causal mechanisms and empirical datasets:
        </p>

        <div class="flashcard-deck">
          <div class="flashcard">
            <div class="flashcard-q">1. What is the fundamental difference between being "rich" and being "wealthy" according to Morgan Housel?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Rich is current income spent on visible consumption (cars, homes, luxury); Wealth is financial options not yet spent—hidden in bank accounts and investment assets, granting autonomy and resilience against the unexpected.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">2. How did Ronald Read amass an $8 million fortune despite working as a gas station attendant and janitor?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              He bought blue-chip dividend stocks, lived modestly below his means, and allowed non-linear compounding to operate undisturbed across six decades without ever panicking or over-leveraging.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">3. What is the core lesson of the "Man in the Car Paradox"?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              When you see someone driving a Ferrari, you don't admire the driver; you imagine yourself in the car being admired. People buy luxury goods to signal status, but true admiration comes from humility, kindness, and empathy, not horsepower.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">4. Why was Warren Buffett's age the primary driver of his multi-billion dollar net worth?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Over 99% of Buffett's net worth was accumulated after age 50. If he had retired at 60 like normal professionals, his net worth would have been approximately $11.9 million instead of $84+ billion.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">5. What did the NBER study by Malmendier and Nagel (2011) prove regarding people's investment habits?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Formative macroeconomic conditions during youth permanently imprint neural risk tolerance: people who came of age during high inflation or the Great Depression carried aversion to bonds or equities for their entire adult lives.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">6. How does Housel reframe market volatility and drawdowns using the Disneyland metaphor?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Market drawdowns are an admission fee, not a fine. You don't try to evade ticket prices at Disneyland; you pay the fee to enjoy the park. Similarly, emotional volatility is the fee you pay for superior equity compounding.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">7. What is the "End of History Illusion" documented by Quoidbach, Gilbert, and Wilson (2013), and how does it hurt financial plans?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              The psychological tendency to recognize how much you have changed in the past while underestimating how much you will change in the future, causing people to lock themselves into extreme 30-year financial lifestyles they eventually outgrow and regret.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">8. What was Joseph Heller's reply to Kurt Vonnegut regarding their billionaire hedge fund host?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              "Yes, but I have something he will never have: enough."
            </div>
          </div>
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
  renderNonfictionViews
};
