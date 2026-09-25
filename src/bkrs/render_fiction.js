/**
 * BKRS Fiction Renderer
 * Implements View A (The Source Journey), View B (The Knowledge Map),
 * and View C (The Experience Reconstruction) for Literary Fiction (Norwegian Wood).
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderFictionViews(model) {
  let journeyHtml = '';
  model.chapters.forEach(ch => {
    journeyHtml += `
      <section class="chapter-block" id="chapter-${ch.chapter_number}">
        <div style="margin: 40px 0 20px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
          <span class="meta-label">Source Sequence</span>
          <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">Chapter ${ch.chapter_number}</h2>
        </div>
    `;

    ch.units.forEach(scene => {
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

  const knowledgeMapHtml = `
    <section class="knowledge-map-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Systemic Architecture</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Knowledge Map</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Reorganized structural matrices for retrieval, relationship trajectories across 6 stages, temporal motifs, and dual timelines.
        </p>
      </div>

      <div class="knowledge-matrix-card" id="km-relationships">
        <h3 class="matrix-title">1. The 7 Relationship Trajectories Across 6 Developmental Stages</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
          Tracking interpersonal evolution from Initial Condition &rarr; Development &rarr; Micro-Texture &rarr; Transformation &rarr; Crisis &rarr; Late State.
        </p>

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

        <div style="margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectory 2: Toru Watanabe ↔ Midori Kobayashi</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 1: Initial</div>
              <div>First meeting in university history lecture; mutual identification as eccentric outsiders; lunch in the student dining hall.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 2: Development</div>
              <div>The fire on the bookstore roof: eating rolled eggs, drinking beer, singing folk songs while an adjacent house burns.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 3: Micro-Texture</div>
              <div>Hospital vigil for Midori's dying father: feeding him sliced cucumbers wrapped in nori; raw emotional vulnerability.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 4: Transformation</div>
              <div>Midori breaks up with her respectable boyfriend; delivers the 'Strawberry Shortcake' declaration of unconditional love.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 5: Crisis</div>
              <div>Midori's prolonged silent boycott when Toru's letters remain emotionally preoccupied with Naoko in Kyoto.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 6: Late State</div>
              <div>The climactic phone call from a suburban phone booth: Toru declares his love, but stands paralyzed in the nowhere of adulthood.</div>
            </div>
          </div>
        </div>

        <div>
          <h4 style="color: var(--text-main); margin-bottom: 8px;">Trajectory 3: Toru Watanabe ↔ Reiko Ishida</h4>
          <div class="trajectory-timeline">
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 1: Initial</div>
              <div>Meeting at Ami Hostel: 38-year-old resident with fine wrinkles, playing bossa nova guitar in the cedar cottage.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 2: Development</div>
              <div>Reiko acts as emotional translator between Toru and Naoko, facilitating visits and interpreting Naoko's mental decline.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 3: Micro-Texture</div>
              <div>Sharing Seven Stars cigarettes; communal guitar concerts in the mountain air; pruning hostel flowerbeds.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 4: Transformation</div>
              <div>Reiko's harrowing confession of past breakdown: musical prodigy panic, marriage, and sociopathic adolescent student seduction/blackmail.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 5: Crisis</div>
              <div>Following Naoko's suicide, Reiko leaves Ami Hostel after 8 years, traveling to Toru's Tokyo apartment with her guitar case.</div>
            </div>
            <div class="trajectory-stage-box">
              <div class="trajectory-stage-title">Stage 6: Late State</div>
              <div>A 51-song secular wake followed by communal lovemaking four times in the dark—an act of shared survival and farewell before boarding the train to Asahikawa.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="knowledge-matrix-card" id="km-motifs">
        <h3 class="matrix-title">2. Symbolic Motif Lifecycle Matrix</h3>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 2px solid var(--accent-crimson); background: var(--bg-subtle);">
                <th style="padding: 8px 12px;">Motif</th>
                <th style="padding: 8px 12px;">First Occurrence</th>
                <th style="padding: 8px 12px;">Evolution / Mutation</th>
                <th style="padding: 8px 12px;">Climactic Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-light);">
                <td style="padding: 8px 12px; font-weight: 600;">The Meadow Well</td>
                <td style="padding: 8px 12px;">Ch. 1 (Toru's memory of Naoko's warning)</td>
                <td style="padding: 8px 12px;">Described as an unfenced, hidden shaft in the tall grass where victims rot forever.</td>
                <td style="padding: 8px 12px;">Embodies the invisible, fatal psychological abyss beneath everyday pastoral reality.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light); background: var(--bg-subtle);">
                <td style="padding: 8px 12px; font-weight: 600;">Firefly in the Instant Coffee Jar</td>
                <td style="padding: 8px 12px;">Ch. 3 (Gift from Storm Trooper on roof)</td>
                <td style="padding: 8px 12px;">Glows faintly green in water; released into the twilight air from the water tank.</td>
                <td style="padding: 8px 12px;">The fragile, fading light of lost youth and dead companions drifting into darkness.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light);">
                <td style="padding: 8px 12px; font-weight: 600;">The Red Cross Sliced Cucumber</td>
                <td style="padding: 8px 12px;">Ch. 8 (Terminal cancer ward with Midori)</td>
                <td style="padding: 8px 12px;">Wrapped in roasted nori dipped in soy sauce; fed to dying father.</td>
                <td style="padding: 8px 12px;">Somatic compassion; concrete, earthly nourishment in the face of bodily dissolution.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-light); background: var(--bg-subtle);">
                <td style="padding: 8px 12px; font-weight: 600;">The 51-Song Wake</td>
                <td style="padding: 8px 12px;">Ch. 11 (Toru's Tokyo apartment with Reiko)</td>
                <td style="padding: 8px 12px;">Guitar playing spanning Beatles, bossa nova, Bach, and pop songs with wine.</td>
                <td style="padding: 8px 12px;">A living memorial metabolizing grief through music rather than Buddhist incantations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;

  const experienceHtml = `
    <section class="experience-container">
      <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
        <span class="meta-label">Experiential Core</span>
        <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: The Experience Reconstruction</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
          Preserving the emotional weather, somatic textures, and existential vertigo of the work.
        </p>
      </div>

      <div class="experience-panel" id="exp-arc">
        <h3 class="experience-title">1. The Emotional Weather Arc: From 1967 Kobe to 1987 Hamburg</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 14px;">
          The novel operates not as an intellectual argument, but as an affective sensory experience moving through five seasonal weather systems:
        </p>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="border-left: 3px solid #8e2800; padding-left: 12px;">
            <strong>System 1: Spring 1967 (Kobe) &mdash; Inert Hermetic Arcadia</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">The sealed universe of Toru, Kizuki, and Naoko. Carefree pool halls, rain, and sudden catastrophic fracture.</div>
          </div>
          <div style="border-left: 3px solid #b8860b; padding-left: 12px;">
            <strong>System 2: 1968–1969 (Tokyo) &mdash; Grey Anonymity & Urban Wandering</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Concrete dormitories, flag-raising ceremonies, Sunday silent walks across Yotsuya, and emotional muteness.</div>
          </div>
          <div style="border-left: 3px solid #1e4d6b; padding-left: 12px;">
            <strong>System 3: Autumn 1969 & Summer 1970 (Kyoto Mountains) &mdash; The Ami Sanatorium Sanctuary</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Smell of mountain pine, cold mountain streams, bossa nova guitar, grape harvests, and creeping madness.</div>
          </div>
          <div style="border-left: 3px solid #5a3e85; padding-left: 12px;">
            <strong>System 4: Autumn 1970 (Tokyo & Pacific Coast) &mdash; Thanatos vs. Eros Crucifixion</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Rooftop fire, dying fathers, suicide telegrams, coastal vagrancy, and Reiko's secular wake.</div>
          </div>
          <div style="border-left: 3px solid #333333; padding-left: 12px;">
            <strong>System 5: November 1987 (Hamburg Airport) &mdash; The Chilling Vertigo of Adulthood</strong>
            <div style="font-size: 0.88rem; color: var(--text-muted);">Orchestral Muzak playing "Norwegian Wood" on the tarmac, triggering somatic nausea and the recognition of 18 years lost to memory.</div>
          </div>
        </div>
      </div>

      <div class="experience-panel" id="exp-recall">
        <h3 class="experience-title">2. Socratic Active Recall Engine (Canonical Flashcards)</h3>
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
  renderFictionViews
};
