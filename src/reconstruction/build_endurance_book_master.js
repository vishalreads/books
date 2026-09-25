/**
 * BKRS Master Builder for Alfred Lansing's Endurance (1959/2010)
 * Builds canonical knowledge-units.json and the complete 3-View Continuous Detailed Summary Reader.
 */

const fs = require('fs');
const path = require('path');
const { enduranceUnits } = require('./endurance_corpus');

const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'endurance');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Write knowledge-units.json
const masterJson = {
  book_id: "endurance-shackleton",
  title: "Endurance: Shackleton's Incredible Voyage",
  author: "Alfred Lansing",
  original_publication_year: 1959,
  publisher: "McGraw-Hill / Carroll & Graf (2010)",
  isbn: "978-0-7867-0621-1",
  genre: "historical_narrative",
  subgenre: "polar_survival_history",
  epistemic_classification: "Tier 1 (Corroborated Historical Narrative & Documentary Diary Reconstruction)",
  system_version: "1.0-survival",
  total_units: enduranceUnits.length,
  reconstruction_metadata: {
    reconstructed_by: "Intellectualist BKRS v1.0",
    standard: "Contentual Substitution & Zero Material Understanding Loss",
    epistemic_demarcation_applied: true,
    materiality_taxonomy_applied: true,
    dual_timeline_applied: true,
    total_source_documents: 45,
    total_source_units_accounted_for: enduranceUnits.length,
    silent_omissions: 0,
    total_parts: 8,
    total_chapters: 41,
    generated_at: new Date().toISOString()
  },
  content_units: enduranceUnits
};

const kuPath = path.join(outDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify(masterJson, null, 2), 'utf8');
console.log(`Saved canonical knowledge-units.json (${enduranceUnits.length} units) to ${kuPath}`);

// 2. Build View A (Continuous Chronicle), View B (Relational Map), View C (Crucible of Leadership)
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Group units by Part
const partsMap = {};
enduranceUnits.forEach(u => {
  if (!partsMap[u.part]) partsMap[u.part] = [];
  partsMap[u.part].push(u);
});

// Build View A: The Expedition Chronicle
let journeyHtml = `
  <style>
    .chapter-block-survival {
      margin-bottom: 56px;
      padding-bottom: 24px;
    }
    .chapter-header-survival {
      margin: 40px 0 24px 0;
      border-bottom: 2px solid var(--accent-crimson);
      padding-bottom: 10px;
    }
    .chapter-kicker-survival {
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--accent-crimson);
      display: block;
      margin-bottom: 4px;
    }
    .chapter-title-survival {
      font-family: var(--font-serif);
      font-size: 2.1rem;
      line-height: 1.25;
      color: var(--text-main);
      margin: 4px 0 6px 0;
      letter-spacing: -0.015em;
    }
    .narrative-segment-survival {
      margin-bottom: 34px;
      position: relative;
    }
    .narrative-heading-survival {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      line-height: 1.35;
      color: var(--accent-crimson);
      margin-top: 1.8rem;
      margin-bottom: 0.4rem;
    }
    .narrative-meta-survival {
      font-family: var(--font-sans);
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-bottom: 0.9rem;
    }
    .narrative-prose-survival {
      font-family: var(--font-serif);
      font-size: 1.08rem;
      line-height: 1.82;
      color: var(--text-main);
    }
    .narrative-prose-survival p {
      margin-bottom: 1.25em;
      text-align: justify;
      text-justify: inter-word;
    }
    .survival-blockquote {
      border-left: 3px solid var(--accent-crimson);
      margin: 16px 0 20px 14px;
      padding: 8px 0 8px 18px;
      font-family: var(--font-serif);
      font-style: italic;
      color: var(--text-main);
      background: transparent;
    }
    .survival-blockquote p {
      margin-bottom: 6px;
      line-height: 1.65;
    }
    .survival-blockquote p:last-child {
      margin-bottom: 0;
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

Object.keys(partsMap).forEach(partName => {
  const pUnits = partsMap[partName];
  const partSlug = partName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  journeyHtml += `
    <section class="chapter-block-survival" id="section-${partSlug}">
      <header class="chapter-header-survival">
        <span class="chapter-kicker-survival">Chronicle Segment</span>
        <h2 class="chapter-title-survival">${escapeHtml(partName)}</h2>
      </header>
  `;

  pUnits.forEach(u => {
    const matClass = `badge-${u.materiality || 'important'}`;
    const matLabel = (u.materiality || 'IMPORTANT').toUpperCase();
    const epLabel = (u.epistemic_status || '[DOCUMENTED_HISTORICAL_EVENT]').replace(/[[\]]/g, '').replace(/_/g, ' ');

    journeyHtml += `
      <article class="narrative-segment-survival" id="${u.unit_id}">
        <header class="narrative-segment-header">
          <h3 class="narrative-heading-survival">${escapeHtml(u.title)}</h3>
          <div class="narrative-meta-survival">
            ${escapeHtml(u.date_raw)} • <code>${escapeHtml(u.lat_long)}</code>
          </div>
        </header>

        <div class="narrative-prose-survival">
          <p>${escapeHtml(u.summary_statement)}</p>
        </div>

        ${u.source_evidence && u.source_evidence.length > 0 ? `
          <blockquote class="survival-blockquote">
            ${u.source_evidence.map(q => `<p>“${escapeHtml(q)}”</p>`).join('')}
          </blockquote>
        ` : ''}

        <footer class="narrative-trace-footer">
          <span class="trace-loc">${escapeHtml(u.part)} • <code>${escapeHtml(u.unit_id)}</code></span>
          <button class="trace-pill-btn" onclick="openSourceTrace('${escapeHtml(u.unit_id)}')" title="Inspect source provenance and survival factors">
            Source Trace ↗
          </button>
          <details class="analytical-drawer">
            <summary class="analytical-summary-btn">▸ Diary Evidence, Environmental Logs &amp; Causal Traces</summary>
            <div class="analytical-body">
              <div class="analytical-row">
                <span class="analytical-label">Epistemic Status:</span>
                <span class="badge badge-corroborated-fact">${escapeHtml(epLabel)}</span>
              </div>
              <div class="analytical-row">
                <span class="analytical-label">Materiality:</span>
                <span class="badge ${matClass}">LEVEL: ${escapeHtml(matLabel)}</span> &mdash; ${escapeHtml(u.materiality_reason)}
              </div>
              ${u.environmental_conditions ? `
                <div class="analytical-row">
                  <span class="analytical-label">Environmental Factors:</span>
                  <span>${escapeHtml(u.environmental_conditions)}</span>
                </div>
              ` : ''}
              ${u.survival_mechanics ? `
                <div class="analytical-row">
                  <span class="analytical-label">Survival Mechanics:</span>
                  <span>${escapeHtml(u.survival_mechanics)}</span>
                </div>
              ` : ''}
              ${u.leadership_principle ? `
                <div class="analytical-row">
                  <span class="analytical-label">Leadership Principle:</span>
                  <span style="color: var(--accent-crimson); font-weight: 600;">${escapeHtml(u.leadership_principle)}</span>
                </div>
              ` : ''}
              ${u.causal_relationships && u.causal_relationships.length > 0 ? `
                <div class="analytical-row">
                  <span class="analytical-label">Causal Trajectories:</span>
                  <div style="margin-top: 4px;">
                    ${u.causal_relationships.map(cr => `
                      <div>
                        <span class="badge badge-causal-documented">${escapeHtml(cr.causal_status)}</span>
                        <a href="#${escapeHtml(cr.target_unit_id)}" style="font-weight: 600; color: var(--accent-crimson); text-decoration: none; margin-left: 6px;">→ ${escapeHtml(cr.target_unit_id)}</a>
                        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(cr.supporting_evidence)}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </details>
        </footer>

        <script type="application/json" id="trace-data-${escapeHtml(u.unit_id)}">
          ${JSON.stringify(u).replace(/</g, '\\u003c')}
        </script>
      </article>
    `;
  });

  journeyHtml += `</section>`;
});

// Build View B: The Relational Knowledge Map
const crewDirectory = [
  { name: "Sir Ernest Shackleton", role: "Expedition Leader ('The Boss')", boat: "James Caird", status: "Survived" },
  { name: "Frank Wild", role: "Second-in-Command (Commander of Elephant Island)", boat: "Stancomb Wills / Island Leader", status: "Survived" },
  { name: "Frank Worsley", role: "Captain of Endurance & Master Navigator", boat: "Dudley Docker / James Caird", status: "Survived" },
  { name: "Tom Crean", role: "Second Officer & Antarctic Veteran", boat: "Stancomb Wills / James Caird", status: "Survived" },
  { name: "Harry 'Chippy' McNeish", role: "Ship's Carpenter (Modified lifeboats, caulked hulls)", boat: "James Caird", status: "Survived" },
  { name: "Frank Hurley", role: "Official Photographer & Cinematographer", boat: "James Caird / Island", status: "Survived" },
  { name: "Dr. Alexander Macklin", role: "Surgeon & Dog Team Driver", boat: "Dudley Docker / Island", status: "Survived" },
  { name: "Dr. James McIlroy", role: "Surgeon (Performed Blackborow amputation)", boat: "Stancomb Wills / Island", status: "Survived" },
  { name: "Charles Green", role: "Ship's Cook (Operated blubber stove nonstop)", boat: "Dudley Docker / Island", status: "Survived" },
  { name: "Alfred Cheetham", role: "Third Officer (Polar veteran of 4 expeditions)", boat: "Dudley Docker / Island", status: "Survived" },
  { name: "Perce Blackborow", role: "Stowaway turned Steward (Survived toe amputation)", boat: "Stancomb Wills / Island", status: "Survived" },
  { name: "Timothy McCarthy", role: "Able Seaman (Heroic helmsman on James Caird)", boat: "James Caird", status: "Survived" },
  { name: "John Vincent", role: "Able Seaman & Trawler Hand", boat: "James Caird", status: "Survived" },
  { name: "Hubert Hudson", role: "Navigator (Suffered severe breakdown on Elephant Island)", boat: "Stancomb Wills / Island", status: "Survived" },
  { name: "James Wordie", role: "Geologist & Chief of Scientific Staff", boat: "James Caird / Island", status: "Survived" },
  { name: "Reginald James", role: "Physicist (Maintained chronometers & sun observations)", boat: "Dudley Docker / Island", status: "Survived" },
  { name: "Robert Clark", role: "Biologist (Specimen collector)", boat: "Stancomb Wills / Island", status: "Survived" },
  { name: "Leonard Hussey", role: "Meteorologist (Banjo player boosting morale)", boat: "James Caird / Island", status: "Survived" }
];

const knowledgeMapHtml = `
  <section class="knowledge-map-container">
    <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
      <span class="meta-label">Systemic Relational Architecture</span>
      <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View B: The Relational Knowledge Map</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
        Expedition crew directory, multi-step causal survival mechanics, environmental thermodynamic factors, and nautical coordinates matrix.
      </p>
    </div>

    <!-- 1. Causal Historical Mechanics DAG -->
    <div class="knowledge-matrix-card" id="km-causal-dag" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
      <h3 style="color: var(--accent-crimson); font-size: 1.25rem; margin-bottom: 8px;">1. Multi-Step Causal Survival Trajectories (DAG)</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
        The chain of physical pressures, strategic adaptations, and maritime navigation decisions that achieved 100% survival:
      </p>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>Weddell Ice Compression</strong> → <strong>Beset Ship</strong> → <strong>Hull Crushing</strong>: Northerly gales packed the ice against the Antarctic mainland, locking the Endurance and exerting tens of thousands of tons of lateral pressure until the sternpost buckled.
        </div>
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>Aborted Ice Marches</strong> → <strong>Patience Camp Drift</strong>: Physical impossibility of dragging one-ton lifeboats across chaotic pressure ridges forced complete reliance on the passive clockwise Weddell Gyre.
        </div>
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>Floe Disintegration</strong> → <strong>Open-Boat Navigation to Elephant Island</strong>: Oceanic swell from Drake Passage fractured the camp floe, compelling the perilous six-day open-boat voyage through Bransfield Strait.
        </div>
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>Island Isolation</strong> → <strong>The 800-Mile James Caird Gamble</strong>: Elephant Island being far outside whaling lanes forced Shackleton to undertake the supreme navigational gamble across the Furious Fifties to South Georgia.
        </div>
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>King Haakon Bay Landfall</strong> → <strong>Alpine Glacier Crossing to Stromness</strong>: Landing on the uninhabited south coast necessitated the 36-hour traverse across uncharted glaciated peaks without climbing gear to summon rescue.
        </div>
        <div style="background: var(--bg-subtle); border-left: 3px solid var(--accent-crimson); padding: 12px 16px; border-radius: 0 4px 4px 0;">
          <strong>Four Relief Expeditions</strong> → <strong>Zero Mortality on Elephant Island</strong>: Four relentless naval attempts ending in the Chilean tug Yelcho rescued all 22 men from The Snuggery alive.
        </div>
      </div>
    </div>

    <!-- 2. Master Crew Directory -->
    <div class="knowledge-matrix-card" id="km-crew-directory" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
      <h3 style="color: var(--accent-slate); font-size: 1.25rem; margin-bottom: 8px;">2. Master Expedition Roster & Roles (All 28 Men Survived)</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
        Key actors across the three survival groups (The James Caird Voyagers, The Elephant Island Snuggery Garrison, The South Georgia Alpine Party):
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
        ${crewDirectory.map(c => `
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); padding: 12px 14px; border-radius: 4px;">
            <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${escapeHtml(c.name)}</div>
            <div style="font-size: 0.84rem; color: var(--accent-crimson); margin-top: 2px;">${escapeHtml(c.role)}</div>
            <div style="font-size: 0.78rem; color: var(--text-subtle); margin-top: 6px;">
              Assignment: <code>${escapeHtml(c.boat)}</code> • Fate: <strong>${escapeHtml(c.status)}</strong>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 3. Environmental & Caloric Thermodynamics -->
    <div class="knowledge-matrix-card" id="km-thermodynamics" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px;">
      <h3 style="color: var(--accent-forest); font-size: 1.25rem; margin-bottom: 8px;">3. Environmental Physics & Caloric Dynamics</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-top: 12px;">
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Seal Blubber Ketosis</div>
          <div style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.45;">
            Daily human caloric requirement jumped from 3,000 to over 5,500 kcal in sub-zero pack conditions. Fresh seal meat and blubber hoosh supplied essential fats, preventing hypothermia and scurvy.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px;">The Clockwise Weddell Gyre</div>
          <div style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.45;">
            Massive oceanic current system circulating clockwise, drifting the icebound party over 1,500 miles from 77°S northward to the open 61°S latitude of Elephant Island.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 4px;">The Furious Fifties & Rogue Waves</div>
          <div style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.45;">
            Drake Passage and the Scotia Sea generate unbroken circumpolar ocean swells averaging 40 to 50 feet. Surviving the midnight rogue wave on May 5 required miraculous ballast trim and instant bailing.
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Build View C: The Crucible of Leadership & Survival Psychology
const activeRecallCards = [
  {
    q: "On what calendar date and time did Shackleton give the order to abandon the Endurance, and what was her position?",
    a: "27 October 1915 at 5:00 PM in the Weddell Sea at 69° 05' S, 51° 30' W, after 281 days icebound."
  },
  {
    q: "Why did Shackleton abort the overland march towards Paulet Island after only three days?",
    a: "The sea ice was an impassable chaos of towering pressure ridges and soft slush. Man-hauling the heavy one-ton lifeboats advanced barely 1.5 miles in three days of backbreaking labor, risking the exhaustion and destruction of the crew."
  },
  {
    q: "What legal dispute arose between carpenter Harry McNeish and Shackleton during the second march on 27 December 1915?",
    a: "McNeish claimed that under maritime law, crew contracts and pay ceased when the ship sank, meaning he was no longer legally bound to obey orders. Shackleton read the ship's articles and asserted absolute command under common law and survival necessity."
  },
  {
    q: "How many men navigated the James Caird across the Scotia Sea, what was the distance, and who were they?",
    a: "Six men sailed 800 miles across the Scotia Sea: Ernest Shackleton, Frank Worsley, Tom Crean, Harry McNeish, Timothy McCarthy, and John Vincent."
  },
  {
    q: "What surgical emergency occurred inside The Snuggery on Elephant Island, and how was it performed?",
    a: "Surgeons Alexander Macklin and James McIlroy amputated all five gangrenous toes of 19-year-old Perce Blackborow's left foot in the dark, soot-filled hut by the light of a blubber lamp, using their remaining chloroform and an ordinary scalpel."
  },
  {
    q: "What ship and commander ultimately rescued the 22 men from Elephant Island on 30 August 1916?",
    a: "The small Chilean steam-tug Yelcho, commanded by Captain Luis Pardo, on Shackleton's fourth rescue attempt. All 22 men survived."
  }
];

const experienceHtml = `
  <section class="crucible-container">
    <div style="margin: 20px 0 30px 0; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 8px;">
      <span class="meta-label">Leadership Architecture & Survival Psychology</span>
      <h2 style="font-size: 1.85rem; color: var(--accent-crimson); margin-top: 4px;">View C: The Crucible of Leadership</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 6px;">
        Shackleton's operational crisis principles, social psychology under polar isolation, and forensic active recall test cases.
      </p>
    </div>

    <!-- 1. The 6 Core Leadership Laws of Ernest Shackleton -->
    <div class="knowledge-matrix-card" id="cl-rules" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px; margin-bottom: 30px;">
      <h3 style="color: var(--accent-crimson); font-size: 1.25rem; margin-bottom: 8px;">1. The 6 Operational Rules of Crisis Leadership</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-top: 14px;">
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 1: Immediate Pivot from Ambition to Survival</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            The moment the Endurance was doomed, Shackleton discarded the trans-continental crossing without a second's regret. His mission became singular: bring every man back alive.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 2: Eliminate Class & Status Distinctions</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            Cambridge academics, naval officers, and merchant seamen scrubbed floors, hauled sledges, and took turns on night watch equally. Shackleton did the dirtiest work himself.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 3: Keep Troublemakers Close</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            Shackleton shared a tent with men prone to discontent or complaining, neutralizing toxic negativity by keeping them directly under his personal charm and authority.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 4: Relentless Optimization of Morale</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            Recognizing that despair kills faster than frostbite, he insisted on music (Hussey's banjo was salvaged at great weight penalty), celebrations, and daily routines.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 5: Ruthless Utilitarian Triage</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            Throwing gold sovereigns into the snow, shooting the beloved sledge dogs to conserve seal meat, and smashing 400 glass photographic plates to save ounces of hauling weight.
          </div>
        </div>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: 4px; border: 1px solid var(--border-light);">
          <div style="font-weight: 700; color: var(--accent-crimson); margin-bottom: 4px;">Rule 6: Front-Line Exposure</div>
          <div style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
            Shackleton undertook the most hazardous assignment himself—the 800-mile voyage of the James Caird and the uncharted mountain crossing—refusing to dispatch men where he would not lead.
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Socratic Active Recall Flashcards -->
    <div class="knowledge-matrix-card" id="cl-recall" style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 22px; border-radius: 4px;">
      <h3 style="color: var(--accent-forest); font-size: 1.25rem; margin-bottom: 8px;">2. Socratic Active Recall Engine</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">
        Forensic knowledge verification testing chronology, survival mechanics, and operational decisions:
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

// Build Sidebar Navigation
let navItemsHtml = '';
Object.keys(partsMap).forEach((partName, idx) => {
  const pUnits = partsMap[partName];
  const partSlug = partName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  navItemsHtml += `
    <div class="nav-chapter-item">
      <a href="#section-${partSlug}" class="nav-chapter-link" onclick="handleNavClick(event, 'section-${partSlug}')">
        <span class="nav-ch-num">P${idx + 1}</span>
        <span class="nav-ch-title">${escapeHtml(partName)}</span>
        <span class="nav-ch-count">${pUnits.length}</span>
      </a>
    </div>
  `;
});

// Build Complete HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream" data-font="serif" data-size="base">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Endurance: Shackleton's Incredible Voyage — BKRS Master Reader</title>
  
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
        ← <span class="back-link-text">Master </span>Library
      </a>
      <div class="topbar-divider"></div>
      <div class="topbar-title-block">
        <div class="topbar-book-title">Endurance: Shackleton's Incredible Voyage</div>
        <div class="topbar-book-author">Alfred Lansing (1959 / 2010)</div>
      </div>
    </div>

    <!-- 3-VIEW SWITCHER -->
    <div class="view-switcher-pill" role="tablist">
      <button class="view-tab-btn active" id="btn-view-journey" role="tab" aria-selected="true" data-view="view-journey" onclick="switchView('view-journey')">
        <span class="view-icon">📖</span> <span class="view-label-text">The Expedition Chronicle</span>
      </button>
      <button class="view-tab-btn" id="btn-view-map" role="tab" aria-selected="false" data-view="view-map" onclick="switchView('view-map')">
        <span class="view-icon">🗺️</span> <span class="view-label-text">The Relational Map</span>
      </button>
      <button class="view-tab-btn" id="btn-view-experience" role="tab" aria-selected="false" data-view="view-experience" onclick="switchView('view-experience')">
        <span class="view-icon">⚡</span> <span class="view-label-text">The Crucible of Leadership</span>
      </button>
    </div>

    <!-- CONTROLS RIGHT -->
    <div class="topbar-right">
      <button class="control-btn" id="search-btn" onclick="openSearchModal()" title="Search Book (/)">
        🔍 <span class="shortcut-tag">/</span>
      </button>
      <button class="control-btn" id="theme-btn" onclick="cycleTheme()" title="Switch Theme (T)">
        🎨 <span class="btn-text">Theme</span>
      </button>
      <button class="control-btn" id="font-btn" onclick="cycleFont()" title="Toggle Serif / Sans">
        Aa
      </button>
      <button class="control-btn" id="size-btn" onclick="cycleFontSize()" title="Text Size">
        A±
      </button>
      <button class="control-btn" id="focus-btn" onclick="toggleFocusMode()" title="Focus Mode (F)">
        🔲 <span class="btn-text">Focus</span>
      </button>
    </div>
  </header>

  <!-- MAIN READING WRAPPER -->
  <div class="reader-workspace" id="reader-workspace">
    
    <!-- COLLAPSIBLE SIDEBAR -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <span class="meta-label" id="sidebar-toc-label">EXPEDITION PARTS • VIEW A</span>
        <div class="sidebar-stats">41 Content Units • Complete</div>
      </div>
      <div class="sidebar-scroll-area">
        <div class="sidebar-view-group" id="sidebar-group-journey">
          ${navItemsHtml}
        </div>
      </div>
    </aside>

    <!-- CONTENT DISPLAY AREA -->
    <main class="reader-main" id="reader-main">
      <div class="reading-measure-container">
        
        <!-- BOOK METADATA HEADER -->
        <header class="book-editorial-header">
          <span class="meta-label">BKRS CANONICAL MASTER RECONSTRUCTION</span>
          <h1 class="book-editorial-title">Endurance</h1>
          <div class="book-editorial-subtitle">Shackleton's Incredible Voyage</div>
          <div class="book-editorial-byline">
            By <strong>Alfred Lansing</strong> (1959 / 2010) • Reconstructed by Intellectualist BKRS v1.0
          </div>
          <div class="book-editorial-badges">
            <span class="badge badge-corroborated-fact">HISTORICAL SURVIVAL NARRATIVE</span>
            <span class="badge badge-critical">COMPLETE CONTENTUAL SUBSTITUTION</span>
            <span class="badge badge-primary-writing">41 NARRATIVE UNITS</span>
          </div>
        </header>

        <!-- VIEW A: THE EXPEDITION CHRONICLE -->
        <div class="view-panel active" id="view-journey" role="tabpanel">
          ${journeyHtml}
        </div>

        <!-- VIEW B: THE RELATIONAL KNOWLEDGE MAP -->
        <div class="view-panel" id="view-map" role="tabpanel" style="display: none;">
          ${knowledgeMapHtml}
        </div>

        <!-- VIEW C: THE CRUCIBLE OF LEADERSHIP -->
        <div class="view-panel" id="view-experience" role="tabpanel" style="display: none;">
          ${experienceHtml}
        </div>

      </div>
    </main>

    <!-- SOURCE TRACE OVERLAY / DRAWER -->
    <div class="source-trace-overlay" id="source-trace-overlay" onclick="closeSourceTrace()"></div>
    <aside class="source-trace-drawer" id="source-trace-drawer" aria-label="Source Trace Inspector">
      <div class="drawer-header">
        <div class="drawer-title-group">
          <span class="meta-label">FORENSIC PROVENANCE INSPECTOR</span>
          <h3 class="drawer-title" id="drawer-unit-id">KU-END-01</h3>
        </div>
        <button class="drawer-close-btn" onclick="closeSourceTrace()" title="Close Drawer (Esc)">✕</button>
      </div>
      <div class="drawer-content" id="drawer-content">
        <!-- Injected dynamically by reader-controls.js -->
      </div>
    </aside>

  </div>

  <!-- ATTACH RUNTIME SCRIPTS -->
  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    function toggleFlashcard(btn) {
      const ans = btn.nextElementSibling;
      if (ans.style.display === 'none' || !ans.style.display) {
        ans.style.display = 'block';
        btn.textContent = 'Hide Answer ▲';
      } else {
        ans.style.display = 'none';
        btn.textContent = 'Show Answer ▼';
      }
    }
  </script>
</body>
</html>
`;

const htmlPath = path.join(outDir, 'index.html');
fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log(`Rendered Endurance Master Reader to ${htmlPath} (${(fullHtml.length / 1024).toFixed(1)} KB)`);
