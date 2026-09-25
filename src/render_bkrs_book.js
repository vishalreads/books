/**
 * BKRS Canonical Book Renderer
 * Renders the production BKRS Reading Interface directly from knowledge-units.json
 * Preserves the editorial aesthetic (Cream/Sepia/Midnight, serif typography, classical accents)
 */

const fs = require('fs');
const path = require('path');
const { adaptKnowledgeUnits } = require('./bkrs/bkrs_adapter');

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

  // Build View A: Source Journey Content
  let journeyHtml = '';
  model.chapters.forEach(ch => {
    journeyHtml += `
      <section class="chapter-block" id="chapter-${ch.chapter_number}">
        <div style="margin: 40px 0 20px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
          <span class="meta-label">Source Sequence</span>
          <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">Chapter ${ch.chapter_number}</h2>
        </div>
    `;

    ch.scenes.forEach(scene => {
      const matClass = `badge-${scene.materiality || 'important'}`;
      const matLabel = scene.materiality ? scene.materiality.toUpperCase() : 'IMPORTANT';

      journeyHtml += `
        <article class="content-unit" id="${scene.scene_id}">
          <div class="unit-top-meta">
            <div class="unit-badges">
              <span class="badge badge-source-fact">${escapeHtml(scene.epistemic_status ? scene.epistemic_status.toUpperCase().replace('_', ' ') : 'SOURCE FACT')}</span>
              <span class="badge ${matClass}">LEVEL: ${escapeHtml(matLabel)}</span>
            </div>
            <div class="unit-chronology-tag">
              ${escapeHtml(scene.time || '')} • ${escapeHtml(scene.location || '')}
            </div>
          </div>

          <h3 class="unit-title">${escapeHtml(scene.location ? scene.location.split(',')[0] : `Unit ${scene.scene_id}`)}</h3>

          <div class="unit-narrative-body reading-prose">
            <p>${escapeHtml(scene.what_happens)}</p>
          </div>

          <div class="unit-secondary-box">
            ${scene.why_this_matters ? `
              <div class="unit-secondary-item">
                <span class="unit-secondary-label">Why This Matters:</span>
                <span>${escapeHtml(scene.why_this_matters)}</span>
              </div>
            ` : ''}
            ${scene.mundane_texture && scene.mundane_texture.length > 0 ? `
              <div class="unit-secondary-item">
                <span class="unit-secondary-label">Mundane Texture:</span>
                <span>${escapeHtml(scene.mundane_texture.join('; '))}</span>
              </div>
            ` : ''}
            ${scene.emotional_transition ? `
              <div class="unit-secondary-item">
                <span class="unit-secondary-label">Emotional Shift:</span>
                <span>${escapeHtml(scene.emotional_transition)}</span>
              </div>
            ` : ''}
            ${scene.dialogue_significance ? `
              <div class="unit-secondary-item">
                <span class="unit-secondary-label">Dialogue Subtext:</span>
                <span>${escapeHtml(scene.dialogue_significance)}</span>
              </div>
            ` : ''}
          </div>

          <footer class="unit-footer">
            <div style="color: var(--text-subtle);">
              Ch. ${scene.chapter} • ${escapeHtml(scene.source_location || 'Sequence')}
            </div>
            <button class="source-trace-trigger" onclick="openSourceTrace('${scene.scene_id}')" title="Inspect source provenance and materiality">
              Source Trace ↗
            </button>
          </footer>

          <script type="application/json" id="trace-data-${scene.scene_id}">
            ${JSON.stringify(scene).replace(/</g, '\\u003c')}
          </script>
        </article>
      `;
    });

    journeyHtml += `</section>`;
  });

  // Build View B: Knowledge Map (Faithfully structured from the canonical V2.5 matrices)
  const knowledgeMapHtml = `
    <section class="knowledge-map-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Systemic Architecture</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Knowledge Map</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Reorganized structural matrices for retrieval, relationship trajectories across 6 stages, temporal motifs, and dual timelines.
        </p>
      </div>

      <!-- 1. The 7 Relationship Trajectories -->
      <div class="knowledge-matrix-card" id="km-relationships">
        <h3 class="matrix-title">1. The 7 Relationship Trajectories Across 6 Developmental Stages</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Tracking interpersonal evolution from Initial Condition &rarr; Development &rarr; Micro-Texture &rarr; Transformation &rarr; Crisis &rarr; Late State.
        </p>

        <!-- Trajectory 1: Toru ↔ Naoko -->
        <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectory 1: Toru Watanabe ↔ Naoko</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 1: Initial</div>
              <div>High school triad in Kobe. Toru is the passive external bridge allowing Kizuki and Naoko's hermetic union to breathe.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 2: Development</div>
              <div>Reconnection on the Tokyo Chuo Line train in May 1968. A bond founded on mutual survival and shared memory.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 3: Micro-Texture</div>
              <div>Sunday silent walks across Tokyo (Yotsuya, Iidabashi, Ochanomizu). Walking for hours without speaking; avoiding Kizuki's name.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 4: Transformation</div>
              <div>Naoko's 20th birthday (October 1969). Uncontrollable weeping fit; sexual intimacy; discovery of virginity; sudden disappearance.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 5: Crisis</div>
              <div>Ami Hostel visits. Two-part confession: sexual guilt with Toru and childhood discovery of her 17-year-old sister's hanging suicide; followed by psychotic relapse.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 6: Late State</div>
              <div>Forest suicide by hanging. Toru metabolizes her ghost through coastal wandering and Reiko's wake, carrying her memory into adulthood.</div>
            </div>
          </div>
        </div>

        <!-- Trajectory 2: Toru ↔ Midori -->
        <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectory 2: Toru Watanabe ↔ Midori Kobayashi</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 1: Initial</div>
              <div>April 1970 Euripides drama lecture. Midori borrows notes; short hair, dark sunglasses, uninhibited candor.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 2: Development</div>
              <div>Courtyard lunches, exploring Shinjuku backstreets, casual discussions of food and family.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 3: Micro-Texture</div>
              <div>Shinjuku porn cinema date; visiting Otsuka bookstore; eating home-cooked miso soup; Toru ironing shirts while talking.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 4: Transformation</div>
              <div>Rooftop fire (June 1970). Drinking cold beer, eating dried squid, singing folk songs, the smoke-flavored kiss.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 5: Crisis</div>
              <div>Spring 1971 feast in Kichijoji. 'Strawberry Shortcake' demand for unconditional love; Toru paralyzed by vow to Naoko; months of silence.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 6: Late State</div>
              <div>Winter 1972 tea shop reconciliation; Toru calls her from the station phone booth declaring love from the center of nowhere.</div>
            </div>
          </div>
        </div>

        <!-- Trajectory 3: Toru ↔ Reiko -->
        <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectory 3: Toru Watanabe ↔ Reiko Ishida</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 1: Initial</div>
              <div>October 1970 Ami Hostel. Reiko is Naoko's 38-year-old roommate, chain-smoker, and guide in the cashless sanctuary.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 2: Development</div>
              <div>Reiko recounts her concert breakdown and 13-year-old piano student slander backstory; mutual trust formed.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 3: Micro-Texture</div>
              <div>Dawn cabbage harvesting, drinking tea, listening to acoustic guitar tuning and fingerpicking.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 4: Transformation</div>
              <div>Letter in autumn 1971 giving Toru moral permission to live and love Midori.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 5: Crisis</div>
              <div>Reiko leaves the hostel after Naoko's suicide and travels to Toru's house in Tokyo.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 6: Late State</div>
              <div>Secular wake of 51 songs, somatic lovemaking as survival communion, clean train departure for Hokkaido.</div>
            </div>
          </div>
        </div>

        <!-- Trajectories 4 & 5: Nagasawa, Hatsumi, Kizuki -->
        <div>
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectories 4, 5, 6 & 7: Secondary Relational Matrix</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Toru ↔ Nagasawa</div>
              <div>Gatsby bond in dorm &rarr; Shinjuku bar hunting &rarr; Toru's moral nausea &rarr; Farewell dinner &rarr; Permanent severance after Hatsumi's death.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Nagasawa ↔ Hatsumi</div>
              <div>Aristocratic pool elegance &rarr; Enduring infidelities &rarr; Unconditional devotion &rarr; Abandonment for Frankfurt &rarr; Suicide at 24 by slitting wrists.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Naoko ↔ Reiko</div>
              <div>Roommates &rarr; Maternal protection & surrogate sisterhood &rarr; Nursing in decompensation &rarr; Grief, wake, wearing Naoko's blue sweater.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Toru ↔ Kizuki (Memory)</div>
              <div>Kobe triad &rarr; Final pool match (2-1) &rarr; Garage asphyxiation at 17 &rarr; Frozen phantom embedded inside Toru's living cells.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Temporal Motif Matrix -->
      <div class="knowledge-matrix-card" id="km-motifs">
        <h3 class="matrix-title">2. Temporal Motif Progression Matrix</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Tracking symbolic lifecycles from Inception &rarr; Recurrence &rarr; Context Shift &rarr; Final Significance.
        </p>
        <div style="overflow-x: auto;">
          <table class="data-table" style="width: 100%; border-collapse: collapse; font-size: 0.88rem;">
            <thead>
              <tr style="background: var(--bg-subtle); border-bottom: 2px solid var(--border-light); text-align: left;">
                <th style="padding: 10px 12px;">Motif</th>
                <th style="padding: 10px 12px;">First Appearance & Context</th>
                <th style="padding: 10px 12px;">Recurrence & Semantic Shift</th>
                <th style="padding: 10px 12px;">Final Appearance & Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">"Norwegian Wood"</td>
                <td style="padding: 10px 12px;">Ch. 1: Muzak on 747 in Hamburg; triggers violent panic.</td>
                <td style="padding: 10px 12px;">Ch. 6: Played by Reiko at Ami Hostel; provokes Naoko's weeping.</td>
                <td style="padding: 10px 12px;">Ch. 11: Song #51 at wake; funeral liturgy releasing ghost.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">The Meadow Well</td>
                <td style="padding: 10px 12px;">Ch. 1: Bottomless unrimmed pit in pampas grass.</td>
                <td style="padding: 10px 12px;">Ch. 6 & 10: Reiko's warning: "Don't jump down the well with her."</td>
                <td style="padding: 10px 12px;">Ch. 11: Survives the well, but left in the void of the phone booth.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">Fire & Smoke</td>
                <td style="padding: 10px 12px;">Ch. 5: Rooftop fire; smoke-flavored beer kiss (vitality).</td>
                <td style="padding: 10px 12px;">Ch. 8: Crematorium chimney smoke (bodily decay).</td>
                <td style="padding: 10px 12px;">Ch. 11: Reiko's continuous cigarettes during wake (mourning).</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">Firefly in the Jar</td>
                <td style="padding: 10px 12px;">Ch. 3: Storm Trooper's Nescafe jar on water tower.</td>
                <td style="padding: 10px 12px;">Hesitates on finger before vanishing into black night.</td>
                <td style="padding: 10px 12px;">Ch. 10: Extinguishing of the spark in the mountain forest.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">The Nori Cucumber</td>
                <td style="padding: 10px 12px;">Ch. 8: Fed to dying father in cancer ward with soy sauce.</td>
                <td style="padding: 10px 12px;">Basic physical nourishment cutting through terminal disease.</td>
                <td style="padding: 10px 12px;">Epitomizes Midori's world: somatic, unpretentious, living.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">Blue Sweater</td>
                <td style="padding: 10px 12px;">Ch. 1: Worn by Naoko in the autumn meadow.</td>
                <td style="padding: 10px 12px;">Left at Ami Hostel as physical relic of the dead.</td>
                <td style="padding: 10px 12px;">Ch. 11: Worn by Reiko boarding train north (living protection).</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: 700; color: var(--accent-crimson);">Station Phone Booth</td>
                <td style="padding: 10px 12px;">Ch. 11: Public glass booth in Tokyo station.</td>
                <td style="padding: 10px 12px;">Dialing Midori, coins dropping, anonymous crowds.</td>
                <td style="padding: 10px 12px;">Fragile lifeline calling to the living from the center of nowhere.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. Dual Timelines -->
      <div class="knowledge-matrix-card" id="km-timelines">
        <h3 class="matrix-title">3. Chronological Order (Timeline A) vs. Narrative Revelation (Timeline B)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 14px;">
          <div style="background: var(--bg-subtle); padding: 16px; border-radius: 6px;">
            <h4 style="color: var(--accent-slate); font-size: 0.95rem; margin-bottom: 10px;">Timeline A: True Chronological Sequence</h4>
            <ol style="margin-left: 20px; font-size: 0.85rem; line-height: 1.6;">
              <li>1965–1967: Kobe adolescent triad (Kizuki, Naoko, Toru).</li>
              <li>May 1967: Kizuki's final pool match (2-1) & garage asphyxiation at 17.</li>
              <li>April 1968: Toru moves to Tokyo dorm with Storm Trooper; Shibuya record job.</li>
              <li>May 1968: Train reunion with Naoko; Sunday walks begin.</li>
              <li>Oct 1969: Naoko's 20th birthday; breakdown, virginity discovery, departure.</li>
              <li>April 1970: Toru meets Midori in Electra lecture; befriends Nagasawa.</li>
              <li>June 1970: Otsuka rooftop fire and smoke-flavored kiss.</li>
              <li>Oct 1970: First visit to Ami Hostel; sister suicide confession; "Norwegian Wood".</li>
              <li>Winter 1970: Feeding cucumbers to Midori's dying father; cremation.</li>
              <li>Spring 1971: Strawberry Shortcake impasse; Hatsumi farewell dinner.</li>
              <li>Aug 1971: Second Ami Hostel visit; Naoko's severe psychotic relapse.</li>
              <li>Oct 1971: Telegram arrives; Naoko hangs herself in the forest.</li>
              <li>Oct–Nov 1971: Toru's month of coastal vagrancy along Pacific beaches.</li>
              <li>Winter 1972: 51-song wake with Reiko, somatic lovemaking, phone booth call.</li>
              <li>Nov 1986: 37-year-old Toru lands at Hamburg, hears Muzak, writes memoir.</li>
            </ol>
          </div>
          <div style="background: var(--bg-subtle); padding: 16px; border-radius: 6px;">
            <h4 style="color: var(--accent-slate); font-size: 0.95rem; margin-bottom: 10px;">Timeline B: Authorial Revelation Structure</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 10px;">
              Murakami frames the entire work from the 1986 airplane landing, immediately establishing elegiac dramatic irony: the reader knows from page one that Naoko is gone.
            </p>
            <p style="font-size: 0.88rem; line-height: 1.6;">
              By planting the eerie meadow walk and bottomless well before revealing Kizuki's suicide in Chapter 2, the text cultivates deep psychological suspense regarding *when* and *how* Naoko will plunge into darkness.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Build View C: Experience Reconstruction & Active Recall
  const experienceHtml = `
    <section class="experience-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Phenomenological Depth</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: Experience Reconstruction</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Qualitative reconstruction of emotional weather, somatic intimacy, narrative tension, and active recall.
        </p>
      </div>

      <div class="experience-panel" id="exp-weather">
        <h3 class="experience-title">1. The Pacing of Emotional Weather</h3>
        <div class="reading-prose">
          <p>
            <strong>The Rain of Memory:</strong> Rain falls during Kizuki's final pool match, during Naoko's 20th birthday breakdown, during the tea shop reconciliation, and at Hamburg Airport. Rain is Murakami's sensory medium of emotional remembering and psychic collapse.
          </p>
          <p>
            <strong>The Cold Pine Air of Ami Hostel:</strong> The mountain sanctuary is defined by the sharp, clean scent of cedar needles, biting mountain drafts, and woodsmoke. It feels like an emotional sanatorium where breathing is gentle, but reality is dangerously attenuated.
          </p>
          <p>
            <strong>The Grimy Heat of Tokyo:</strong> Loud, humid, smelling of asphalt, frying oil, and tear gas. It is chaotic, noisy, and exhausted, yet it is the only place where living human beings can love, eat cucumbers, work in record shops, and build a future.
          </p>
        </div>
      </div>

      <div class="experience-panel" id="exp-tension">
        <h3 class="experience-title">2. The Core Dramatic Tension: The Tug-of-War Between Past and Present</h3>
        <div class="reading-prose">
          <p>
            The reader experiences an agonizing, protracted suspension: every time Toru moves toward Midori (sunshine, cold beer, rooftop fires, candid talk, crisp cucumbers), the gravitational pull of Naoko (letters, mountain air, weeping, virginity, forest suicide) drags him back into the underworld.
          </p>
          <div class="quote-box">
            "To choose Midori feels like murdering Naoko; to choose Naoko feels like committing suicide."
          </div>
          <p>
            When Naoko hangs herself, the tension snaps like a high-tension cable, hurling Toru into a month of coastal vagrancy along Pacific rocks until his voice is exhausted.
          </p>
        </div>
      </div>

      <div class="experience-panel" id="exp-lenses">
        <h3 class="experience-title">3. Quarantined External Analytical Lenses</h3>
        <p style="font-size: 0.86rem; color: var(--text-subtle); margin-bottom: 14px;">
          <strong>[MANDATORY BKRS EPISTEMIC DEMARCATION]:</strong> The models below are NOT part of Murakami's source text or authorial framework. These are external analytical tools applied strictly for critical interpretation.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px;">
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.88rem; margin-bottom: 4px;">Thanatos vs. Eros (Freudian Drive Theory)</div>
            <div style="font-size: 0.84rem; line-height: 1.5;">Naoko embodies Thanatos (regression to silence, nature, death). Midori embodies Eros (appetite, fire, libido, speech). Toru is the embattled ego caught between them.</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.88rem; margin-bottom: 4px;">Suicide Contagion & The Werther Effect (Phillips, 1974)</div>
            <div style="font-size: 0.84rem; line-height: 1.5;">Sociological research proves unheralded peer suicide drastically elevates risk within intimate triads. Kizuki's death infects Naoko (suicide at 21) and shadows Hatsumi (suicide at 24).</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.88rem; margin-bottom: 4px;">Prolonged Grief Disorder (ICD-11 / Prigerson)</div>
            <div style="font-size: 0.84rem; line-height: 1.5;">Toru's 4-year emotional paralysis, numbness, coastal vagrancy, and feeling that part of him died in 1967 match clinical criteria for unintegrated bereavement.</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-crimson); font-size: 0.88rem; margin-bottom: 4px;">Psychogenic Conversion Reaction</div>
            <div style="font-size: 0.84rem; line-height: 1.5;">Reiko's sudden hand tremor and finger paralysis on stage exemplifies intense psychological panic and perfectionism converting into physical neuromuscular blockage.</div>
          </div>
        </div>
      </div>

      <!-- 4. Socratic Active Recall Engine -->
      <div class="experience-panel" id="exp-recall">
        <h3 class="experience-title">4. Socratic Active Recall Engine (7 Canonical Flashcards)</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Test your mastery of the novel's deepest causal and somatic mechanics.
        </p>

        <div class="flashcard-deck">
          <div class="flashcard">
            <div class="flashcard-q">1. Describe Kizuki's final afternoon with Toru before his suicide, and explain why its ordinary details haunt Toru.</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              On a rainy May weekday in 1967, Kizuki skipped afternoon classes and invited Toru to play pool. Kizuki, who normally lost, played with eerie, intense concentration, winning 2 games to 1. He gave Toru a strange, quiet half-smile and said, "See ya, Watanabe." Hours later, he asphyxiated himself in his garage with car exhaust. The scene haunts Toru because Kizuki concealed his fatal intent behind an ordinary game of pool, turning a mundane match into an unannounced farewell.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">2. What is the philosophical and somatic function of the "Sliced Cucumber" scene in the Red Cross Hospital (Chapter 8)?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              While visiting Midori's dying father in the terminal cancer ward, Toru is left alone with the emaciated, half-blind man. When the father whispers for food, Toru buys fresh cucumbers, wraps slices in roasted nori with soy sauce, and feeds them to him. The dying man eats ravenously with wordless, intense gratitude. The scene demonstrates that compassion is not an abstract theory, but a physical, somatic act of nourishment that honors human dignity in the face of bodily decay.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">3. Explain the exact circumstances and emotional meaning of Toru and Reiko's lovemaking in Chapter 11.</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Following Naoko's suicide and the all-night secular wake where Reiko played 51 songs on guitar, Toru and Reiko hold each other and make love four times in the dark. It is not romantic betrayal or lust; it is an instinctive, sacred communion between two broken survivors clinging to warm, breathing human flesh to drive back the freezing chill of death and affirm their ongoing existence.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">4. What is Midori's "Strawberry Shortcake Heuristic" (Chapter 9) and what does it reveal about trauma survivors?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Midori tells Toru that she wants a totally selfish, unreasonable love: if she asks for strawberry shortcake, and her lover rushes out to buy it, and she throws it out the window saying she doesn't want it, she demands that he accept her outburst without anger. Having spent her youth nursing dying parents through brain cancer, she was emotionally starved; she demands an unconditional love durable enough to withstand irrational emotional storms without abandonment.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">5. What is the significance of the final scene in the telephone booth, and why is Toru in "the center of nowhere"?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              After seeing Reiko off on the train, Toru enters a glass phone booth in a Tokyo station and dials Midori, declaring his love and commitment to life. When Midori asks, "Where are you now, Toru?", Toru looks out through the scratched glass at thousands of rushing commuters and realizes with terror that he cannot identify his location or coordinate. Having chosen life over death, he is nonetheless left unmoored and disoriented, calling to the living from the center of existential nowhere.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">6. What family revelation does Naoko make during the walk in the pine woods (Chapter 6), and how does it reshape the understanding of her tragedy?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Naoko reveals that when she was in the sixth grade (eleven years old), her seventeen-year-old elder sister—an exceptionally brilliant, beautiful, and flawless student—locked herself in her bedroom and hanged herself from the ceiling beam without warning or farewell note. Naoko was the one who unlocked the door and discovered her body. Naoko reflects that she lived ever since with the quiet, terrifying awareness of an unexplained darkness within her family, fearing she would eventually be drawn into that same silence. This demonstrates that Naoko's psychological vulnerability did not originate with Kizuki's suicide, but was a deep-seated domestic trauma that preceded it.
            </div>
          </div>

          <div class="flashcard">
            <div class="flashcard-q">7. How does Toru support himself financially in Tokyo, and how does his employment relate to his character and musical literacy?</div>
            <button class="flashcard-reveal-btn" onclick="toggleFlashcard(this)">Show Answer ▼</button>
            <div class="flashcard-a">
              Toru works part-time at a jazz and rock record store in Shibuya. Sorting imported vinyl LPs and listening to music gives him independent wages that pay his dormitory fees and later his rent in Kichijoji. It also explains his extensive familiarity with Western jazz (Coltrane, Monk, Evans) and rock (The Beatles, Rolling Stones, Cream), grounding his contemplative, solitary personality outside institutional university politics.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Build Full HTML Document
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(meta.title)} by ${escapeHtml(meta.author)} | Intellectualist Reader</title>
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
</head>
<body>

  <!-- Top Fixed Application Bar -->
  <header class="reader-topbar">
    <div class="topbar-left">
      <button class="sidebar-toggle-btn" id="sidebarToggleBtn" title="Toggle Sidebar (Ctrl+\\)">☰</button>
      <a href="../../index.html" class="brand-link" title="Return to Intellectualist Library">
        <div class="brand-glyph">I</div>
        <span class="brand-text">Intellectualist</span>
      </a>
    </div>

    <div class="topbar-center">
      <span class="book-title-crumb">${escapeHtml(meta.title)}</span>
      <span>•</span>
      <span>${escapeHtml(meta.author)}</span>
      <span style="font-size: 0.8rem; color: var(--accent-crimson); font-weight: 700;">[${escapeHtml(meta.system_version || 'BKRS-V2.5')}]</span>
    </div>

    <div class="topbar-right">
      <button class="ctrl-btn" id="searchTriggerBtn" title="Search all units (Shortcut: /)">🔍 Search <kbd>/</kbd></button>
      <button class="ctrl-btn" id="focusToggleBtn" title="Toggle Focus Mode (Shortcut: F)">📖 Focus <kbd>F</kbd></button>
      <button class="ctrl-btn" id="sansToggleBtn" title="Toggle Serif / Sans">Aa</button>
      <button class="ctrl-btn" id="fontDecBtn" title="Decrease font size">A-</button>
      <button class="ctrl-btn" id="fontIncBtn" title="Increase font size">A+</button>
      <button class="ctrl-btn" id="themeToggleBtn" title="Cycle Theme (Cream / Night / Sepia)">☀ Cream</button>
      <a href="../../index.html" class="ctrl-btn" title="Back to Master Catalog">Library ↗</a>
    </div>
  </header>

  <!-- Application Shell Layout -->
  <div class="reader-layout">

    <!-- Collapsible Sidebar -->
    <aside class="reader-sidebar" id="readerSidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-book-title">${escapeHtml(meta.title)}</h2>
        <div class="sidebar-book-author">${escapeHtml(meta.author)} (Tr. ${escapeHtml(meta.translator || 'Jay Rubin')})</div>
        <div style="margin-top: 6px; font-size: 0.74rem; color: var(--accent-crimson); font-weight: 700;">
          CANONICAL • CONTENTUAL SUBSTITUTION READY
        </div>
      </div>

      <div class="sidebar-nav-group">
        <div class="sidebar-heading">Three-View Architecture</div>
        <a href="#journey" class="sidebar-link active" onclick="switchView('journey')">View A: Source Journey (36 Scenes)</a>
        <a href="#knowledge" class="sidebar-link" onclick="switchView('knowledge')">View B: Knowledge Map (Matrices)</a>
        <a href="#experience" class="sidebar-link" onclick="switchView('experience')">View C: Experience & Recall</a>
      </div>

      <div class="sidebar-nav-group">
        <div class="sidebar-heading">Chapter Navigator (View A)</div>
        ${model.chapters.map(ch => `
          <a href="#chapter-${ch.chapter_number}" class="sidebar-link" onclick="switchView('journey')">
            Ch. ${ch.chapter_number} (${ch.scenes.length} Units)
          </a>
        `).join('')}
      </div>

      <div class="sidebar-nav-group">
        <div class="sidebar-heading">Knowledge Map Shortcuts (View B)</div>
        <a href="#km-relationships" class="sidebar-link" onclick="switchView('knowledge')">7 Relationship Trajectories</a>
        <a href="#km-motifs" class="sidebar-link" onclick="switchView('knowledge')">7 Motif Lifecycles</a>
        <a href="#km-timelines" class="sidebar-link" onclick="switchView('knowledge')">Dual Timelines (A vs B)</a>
      </div>

      <div class="sidebar-nav-group">
        <div class="sidebar-heading">Deep Experience (View C)</div>
        <a href="#exp-weather" class="sidebar-link" onclick="switchView('experience')">Emotional Weather & Pacing</a>
        <a href="#exp-tension" class="sidebar-link" onclick="switchView('experience')">Past vs. Present Tension</a>
        <a href="#exp-lenses" class="sidebar-link" onclick="switchView('experience')">External Analytical Lenses</a>
        <a href="#exp-recall" class="sidebar-link" onclick="switchView('experience')">Active Recall Engine (7 Qs)</a>
      </div>
    </aside>

    <!-- Main Reading Area -->
    <main class="reader-canvas-wrapper">
      <div class="reading-canvas">

        <!-- Executive Orientation Card -->
        <div class="content-unit" style="border-top: 5px solid var(--accent-crimson); margin-bottom: 30px;">
          <span class="meta-label">Canonical Orientation</span>
          <h1 style="font-size: 2.1rem; color: var(--accent-crimson); margin: 6px 0 12px 0;">${escapeHtml(meta.title)}</h1>
          <div style="font-size: 0.95rem; font-style: italic; color: var(--text-muted); margin-bottom: 16px;">
            A Forensic Autopsy of Grief, Suicide Contagion, and the Integration of Death into Life
          </div>
          <div class="quote-box" style="margin: 14px 0;">
            <strong>[SOURCE FACT / NARRATOR'S AXIOM]:</strong> "Death exists, not as the opposite, but as an active, structural part of life. By living our lives, we nurture death. It is already inside us, an invisible knot of compressed air lodged in the chest, growing larger with every breath."
          </div>
          <p class="reading-prose" style="font-size: 0.98rem; margin-bottom: 0;">
            Set against late-1960s Tokyo, <em>Norwegian Wood</em> anatomizes the gravitational pull of death on the living. This canonical Book Master is compiled directly from 36 granular knowledge units, guaranteeing <strong>Zero Material Understanding Loss</strong> across narrative, relationships, motifs, and emotional progression.
          </p>
        </div>

        <!-- View Switcher Tabs -->
        <div class="view-switcher-bar">
          <div class="view-switcher">
            <button class="view-btn active" id="btn-view-journey">VIEW A: SOURCE JOURNEY</button>
            <button class="view-btn" id="btn-view-knowledge">VIEW B: KNOWLEDGE MAP</button>
            <button class="view-btn" id="btn-view-experience">VIEW C: EXPERIENCE</button>
          </div>
        </div>

        <!-- VIEW A CONTAINER -->
        <div id="view-journey">
          ${journeyHtml}
        </div>

        <!-- VIEW B CONTAINER -->
        <div id="view-knowledge" style="display: none;">
          ${knowledgeMapHtml}
        </div>

        <!-- VIEW C CONTAINER -->
        <div id="view-experience" style="display: none;">
          ${experienceHtml}
        </div>

      </div>
    </main>
  </div>

  <!-- Source Trace Drawer -->
  <div class="trace-modal-backdrop" id="traceBackdrop"></div>
  <aside class="trace-drawer" id="sourceTraceDrawer">
    <div class="trace-drawer-header">
      <h3 class="trace-drawer-title">Source Trace & Metadata</h3>
      <button class="trace-drawer-close" id="traceDrawerClose">&times;</button>
    </div>
    <div id="traceDrawerContent"></div>
  </aside>

  <!-- Static Search Modal -->
  <div class="search-modal-backdrop" id="searchModal">
    <div class="search-dialog">
      <div class="search-input-wrapper">
        <span style="font-size: 1.2rem; color: var(--text-muted);">🔍</span>
        <input type="text" id="searchInput" class="search-input" placeholder="Search 36 scenes, characters, or motifs (Esc to close)...">
        <button class="ctrl-btn" id="searchModalClose" style="padding: 2px 8px;">Esc</button>
      </div>
      <div class="search-results-list" id="searchResultsList"></div>
    </div>
  </div>

  <!-- Static Search Index (Embedded JSON) -->
  <script type="application/json" id="bkrs-search-index">
    ${JSON.stringify(model.search_index).replace(/</g, '\\u003c')}
  </script>

  <!-- Reader Interactive Controls -->
  <script src="../../assets/js/reader-controls.js"></script>

</body>
</html>
  `;

  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`Successfully compiled canonical BKRS reader to: ${outputPath} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
  return { outputPath, totalScenes: model.total_scenes, chaptersCount: model.chapters.length };
}

if (require.main === module) {
  const bookSlug = process.argv[2] || 'norwegian-wood';
  renderBookMaster(bookSlug);
}

module.exports = {
  renderBookMaster
};
