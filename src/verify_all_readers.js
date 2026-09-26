/**
 * BKRS Multi-Genre Master Reader Regression Harness
 * Audits compiled HTML readers for:
 * 1. Norwegian Wood (Literary Fiction)
 * 2. The Psychology of Money (Analytical Nonfiction)
 * 3. Bhagat Singh: A Life in Revolution (Historical Biography)
 */

const fs = require('fs');
const path = require('path');

function runRegressionSuite() {
  console.log("================================================================================");
  console.log("  BKRS MULTI-GENRE MASTER READER REGRESSION SUITE");
  console.log("================================================================================\n");

  const results = {
    norwegian_wood: { status: "PENDING" },
    psychology_of_money: { status: "PENDING" },
    bhagat_singh: { status: "PENDING" }
  };

  // 1. NORWEGIAN WOOD (FICTION)
  console.log(">>> [1/3] Auditing: Norwegian Wood (Fiction Benchmark)...");
  const nwDir = path.join(__dirname, '..', 'docs', 'distillations', 'norwegian-wood');
  const nwKu = JSON.parse(fs.readFileSync(path.join(nwDir, 'knowledge-units.json'), 'utf8'));
  const nwHtml = fs.readFileSync(path.join(nwDir, 'index.html'), 'utf8');

  let nwUnitsRendered = 0;
  nwKu.scenes.forEach(s => {
    if (nwHtml.includes(`id="${s.scene_id}"`) && nwHtml.includes(`id="trace-data-${s.scene_id}"`)) {
      nwUnitsRendered++;
    }
  });

  const nwViewA = nwHtml.includes('id="view-journey"');
  const nwViewB = nwHtml.includes('id="view-map"');
  const nwViewC = nwHtml.includes('id="view-experience"');
  const nwControls = nwHtml.includes('reader-controls.js');

  console.log(`    - Canonical Scenes: ${nwKu.scenes.length}`);
  console.log(`    - Rendered Unit Cards & Trace Payloads: ${nwUnitsRendered} / ${nwKu.scenes.length}`);
  console.log(`    - View A (Journey): ${nwViewA}, View B (Map): ${nwViewB}, View C (Experience): ${nwViewC}`);
  console.log(`    - Reader Controls Script Attached: ${nwControls}`);

  if (nwUnitsRendered === 36 && nwViewA && nwViewB && nwViewC && nwControls) {
    results.norwegian_wood = { status: "PASS", units: "36/36", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Regression)\n");
  } else {
    results.norwegian_wood = { status: "FAIL", units: `${nwUnitsRendered}/36` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 2. THE PSYCHOLOGY OF MONEY (NONFICTION)
  console.log(">>> [2/3] Auditing: The Psychology of Money (Analytical Nonfiction Benchmark)...");
  const pmDir = path.join(__dirname, '..', 'docs', 'distillations', 'the-psychology-of-money');
  const pmKu = JSON.parse(fs.readFileSync(path.join(pmDir, 'knowledge-units.json'), 'utf8'));
  const pmHtml = fs.readFileSync(path.join(pmDir, 'index.html'), 'utf8');

  let pmUnitsRendered = 0;
  const pmUnits = pmKu.content_units || pmKu.arguments || [];
  pmUnits.forEach(arg => {
    if (pmHtml.includes(`id="${arg.unit_id}"`) && pmHtml.includes(`id="trace-data-${arg.unit_id}"`)) {
      pmUnitsRendered++;
    }
  });

  const pmViewA = pmHtml.includes('id="view-journey"');
  const pmViewB = pmHtml.includes('id="view-map"');
  const pmViewC = pmHtml.includes('id="view-experience"');
  const pmControls = pmHtml.includes('reader-controls.js');

  console.log(`    - Canonical Arguments: ${pmUnits.length}`);
  console.log(`    - Rendered Unit Cards & Trace Payloads: ${pmUnitsRendered} / ${pmUnits.length}`);
  console.log(`    - View A (Journey): ${pmViewA}, View B (Blueprint): ${pmViewB}, View C (Engine): ${pmViewC}`);
  console.log(`    - Reader Controls Script Attached: ${pmControls}`);

  if (pmUnitsRendered === 24 && pmViewA && pmViewB && pmViewC && pmControls) {
    results.psychology_of_money = { status: "PASS", units: "24/24", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Regression)\n");
  } else {
    results.psychology_of_money = { status: "FAIL", units: `${pmUnitsRendered}/24` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 3. BHAGAT SINGH: A LIFE IN REVOLUTION (HISTORICAL BIOGRAPHY)
  console.log(">>> [3/3] Auditing: Bhagat Singh: A Life in Revolution (Historical Benchmark)...");
  const bsDir = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution');
  const bsKu = JSON.parse(fs.readFileSync(path.join(bsDir, 'knowledge-units.json'), 'utf8'));
  const bsHtml = fs.readFileSync(path.join(bsDir, 'index.html'), 'utf8');

  let bsUnitsRendered = 0;
  let bsTracePayloads = 0;
  bsKu.content_units.forEach(u => {
    if (bsHtml.includes(`id="${u.unit_id}"`)) bsUnitsRendered++;
    if (bsHtml.includes(`id="trace-data-${u.unit_id}"`)) bsTracePayloads++;
  });

  // Verify all 21 Archival Plates
  let bsPlatesRendered = 0;
  for (let p = 1; p <= 21; p++) {
    const pId = "KU-BS-APP-" + String(p).padStart(2, "0");
    if (bsHtml.includes(pId)) bsPlatesRendered++;
  }

  // Verify historical epistemic badges
  const epistemicBadges = [
    'badge-corroborated-fact',
    'badge-contemporary-record',
    'badge-primary-writing',
    'badge-biographer-thesis',
    'badge-coerced-testimony',
    'badge-biographer-conjecture'
  ];
  let badgesFound = 0;
  epistemicBadges.forEach(b => {
    if (bsHtml.includes(b)) badgesFound++;
  });

  // Verify Causal statuses
  const causalStatuses = [
    'DOCUMENTED_CAUSATION',
    'CORROBORATED_CAUSAL_INFERENCE',
    'HISTORIAN_CAUSAL_HYPOTHESIS'
  ];
  let causalFound = 0;
  causalStatuses.forEach(cs => {
    if (bsHtml.includes(cs)) causalFound++;
  });

  // Verify 9 Qualified Directives
  const qualifiedDirectives = [
    "VAL-HIST-D1-03", // Clandestine rail escape
    "VAL-HIST-D5-33", // Letter on love vs Kanpur romance
    "VAL-HIST-D5-34", // FIR 121 namelessness
    "VAL-HIST-D6-40", // Gandhi-Irwin private talks
    "VAL-HIST-D6-41", // Gandhi commutation leverage
    "VAL-HIST-D6-42", // Saunders auditory shots vs autopsy
    "VAL-HIST-D6-43", // Ganda Singh Wala secret disposal
    "VAL-HIST-D6-44", // Scientific socialism vs revolutionary romanticism
    "VAL-HIST-D6-45"  // Jail Notebook custody
  ];
  let qualifiedFound = 0;
  qualifiedDirectives.forEach(qd => {
    // Check either the prompt directive ID or the specific content in HTML
    if (bsHtml.includes(qd) || bsHtml.includes(qd.replace('VAL-HIST-', ''))) qualifiedFound++;
  });

  const bsViewA = bsHtml.includes('id="view-journey"');
  const bsViewB = bsHtml.includes('id="view-map"');
  const bsViewC = bsHtml.includes('id="view-experience"');
  const bsControls = bsHtml.includes('reader-controls.js');

  console.log(`    - Canonical Content Units: ${bsKu.content_units.length}`);
  console.log(`    - Rendered Unit Cards: ${bsUnitsRendered} / ${bsKu.content_units.length}`);
  console.log(`    - Rendered Trace Script Payloads: ${bsTracePayloads} / ${bsKu.content_units.length}`);
  console.log(`    - Archival Document Plates Rendered: ${bsPlatesRendered} / 21`);
  console.log(`    - Historical Epistemic Badge Classes Found: ${badgesFound} / ${epistemicBadges.length}`);
  console.log(`    - Causal Status Tags Found: ${causalFound} / ${causalStatuses.length}`);
  console.log(`    - Qualified Directives Preserved: ${qualifiedFound} / ${qualifiedDirectives.length}`);
  console.log(`    - View A (Journey): ${bsViewA}, View B (Relational Map): ${bsViewB}, View C (Dialectical): ${bsViewC}`);
  console.log(`    - Reader Controls Script Attached: ${bsControls}`);

  if (bsUnitsRendered === 78 && bsTracePayloads === 78 && bsPlatesRendered === 21 && bsViewA && bsViewB && bsViewC && bsControls) {
    results.bhagat_singh = { status: "PASS", units: "78/78", plates: "21/21", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.bhagat_singh = { status: "FAIL", units: `${bsUnitsRendered}/78` };
    console.error("    => VERDICT: FAIL\n");
  }

  // -------------------------------------------------------------------------
  // 4. Endurance: Shackleton's Incredible Voyage (Polar Survival Benchmark)
  // -------------------------------------------------------------------------
  console.log(">>> [4/4] Auditing: Endurance: Shackleton's Incredible Voyage (Survival Benchmark)...");
  const endDir = path.join(__dirname, '..', 'docs', 'distillations', 'endurance');
  const endKu = JSON.parse(fs.readFileSync(path.join(endDir, 'knowledge-units.json'), 'utf8'));
  const endHtml = fs.readFileSync(path.join(endDir, 'index.html'), 'utf8');

  let endUnitsRendered = 0;
  let endTracePayloads = 0;
  let endExcerptsFound = 0;
  endKu.content_units.forEach(u => {
    if (endHtml.includes(`id="${u.unit_id}"`)) endUnitsRendered++;
    if (endHtml.includes(`id="trace-data-${u.unit_id}"`)) endTracePayloads++;
    if (u.source_evidence && u.source_evidence.length > 0) {
      if (endHtml.includes(u.source_evidence[0])) endExcerptsFound++;
    }
  });

  const endViewA = endHtml.includes('id="view-journey"');
  const endViewB = endHtml.includes('id="view-map"');
  const endViewC = endHtml.includes('id="view-experience"');
  const endControls = endHtml.includes('reader-controls.js');

  console.log(`    - Canonical Narrative Units: ${endKu.content_units.length}`);
  console.log(`    - Rendered Unit Segments: ${endUnitsRendered} / ${endKu.content_units.length}`);
  console.log(`    - Rendered Trace Script Payloads: ${endTracePayloads} / ${endKu.content_units.length}`);
  console.log(`    - Primary Verbatim Excerpts Preserved: ${endExcerptsFound} / ${endKu.content_units.length}`);
  console.log(`    - View A (Chronicle): ${endViewA}, View B (Relational Map): ${endViewB}, View C (Leadership): ${endViewC}`);
  console.log(`    - Reader Controls Script Attached: ${endControls}`);

  if (endUnitsRendered === 41 && endTracePayloads === 41 && endExcerptsFound === 41 && endViewA && endViewB && endViewC && endControls) {
    results.endurance = { status: "PASS", units: "41/41", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.endurance = { status: "FAIL", units: `${endUnitsRendered}/41` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 5. RAJPUT UNIFIED CODEX (HISTORICAL CIVILIZATION SYNTHESIS)
  console.log(">>> [5/5] Auditing: The Rajput Unified Mega-Codex (Civilizational Synthesis)...");
  const rajDir = path.join(__dirname, '..', 'docs', 'distillations', 'rajput-unified-codex');
  const rajKu = JSON.parse(fs.readFileSync(path.join(rajDir, 'knowledge-units.json'), 'utf8'));
  const rajHtml = fs.readFileSync(path.join(rajDir, 'index.html'), 'utf8');

  let rajChaptersRendered = 0;
  rajKu.forEach(u => {
    if (rajHtml.includes(`id="${u.id}"`)) {
      rajChaptersRendered++;
    }
  });

  const rajCausalBridges = (rajHtml.match(/class="causal-bridge"/g) || []).length;
  const rajBlockquotes = (rajHtml.match(/<blockquote/g) || []).length;
  const rajCreamTheme = rajHtml.includes('data-theme="cream"');
  const rajViewA = rajHtml.includes('id="view-journey"');
  const rajViewB = rajHtml.includes('id="view-map"');
  const rajViewC = rajHtml.includes('id="view-experience"');
  const rajControls = rajHtml.includes('reader-controls.js');

  console.log(`    - Canonical Narrative Chapters: ${rajKu.length}`);
  console.log(`    - Rendered Chapter Cards: ${rajChaptersRendered} / ${rajKu.length}`);
  console.log(`    - Causal Connective Bridges: ${rajCausalBridges} / ${rajKu.length}`);
  console.log(`    - Primary Source Blockquotes: ${rajBlockquotes} / ${rajKu.length}`);
  console.log(`    - Editorial Cream Theme Default: ${rajCreamTheme}`);
  console.log(`    - View A (Journey): ${rajViewA}, View B (Dynastic Compass): ${rajViewB}, View C (Rosetta/Disputes): ${rajViewC}`);
  console.log(`    - Reader Controls Script Attached: ${rajControls}`);

  if (rajChaptersRendered === 34 && rajCausalBridges === 34 && rajBlockquotes === 34 && rajCreamTheme && rajViewA && rajViewB && rajViewC && rajControls) {
    results.rajput_codex = { status: "PASS", units: "34/34", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.rajput_codex = { status: "FAIL", units: `${rajChaptersRendered}/34` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 6. MANIFESTATION UNIFIED CODEX (MENTAL SCIENCE & COGNITIVE SYNTHESIS)
  console.log(">>> [6/6] Auditing: The Manifestation Unified Mega-Codex (120-Year Cognitive Synthesis)...");
  const manDir = path.join(__dirname, '..', 'docs', 'distillations', 'manifestation-unified-codex');
  const manKu = JSON.parse(fs.readFileSync(path.join(manDir, 'knowledge-units.json'), 'utf8'));
  const manHtml = fs.readFileSync(path.join(manDir, 'index.html'), 'utf8');

  let manChaptersRendered = 0;
  manKu.forEach(u => {
    if (manHtml.includes(`id="${u.id}"`)) {
      manChaptersRendered++;
    }
  });

  const manCausalBridges = (manHtml.match(/class="causal-bridge"/g) || []).length;
  const manBlockquotes = (manHtml.match(/<blockquote/g) || []).length;
  const manCreamTheme = manHtml.includes('data-theme="cream"');
  const manViewA = manHtml.includes('id="view-journey"');
  const manViewB = manHtml.includes('id="view-map"');
  const manViewC = manHtml.includes('id="view-experience"');
  const manControls = manHtml.includes('reader-controls.js');

  console.log(`    - Canonical Narrative Chapters: ${manKu.length}`);
  console.log(`    - Rendered Chapter Cards: ${manChaptersRendered} / ${manKu.length}`);
  console.log(`    - Causal Connective Bridges: ${manCausalBridges} / ${manKu.length}`);
  console.log(`    - Primary Source Blockquotes: ${manBlockquotes} / ${manKu.length}`);
  console.log(`    - Editorial Cream Theme Default: ${manCreamTheme}`);
  console.log(`    - View A (Journey): ${manViewA}, View B (Neuro Compass): ${manViewB}, View C (Rosetta/Disputes): ${manViewC}`);
  console.log(`    - Reader Controls Script Attached: ${manControls}`);

  if (manChaptersRendered === 20 && manCausalBridges === 20 && manBlockquotes === 20 && manCreamTheme && manViewA && manViewB && manViewC && manControls) {
    results.manifestation_codex = { status: "PASS", units: "20/20", views: "3/3" };
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.manifestation_codex = { status: "FAIL", units: `${manChaptersRendered}/20` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 7. THE 48 LAWS OF POWER
  console.log(">>> [7/13] Auditing: The 48 Laws of Power...");
  const flDir = path.join(__dirname, '..', 'docs', 'distillations', '48-laws-of-power');
  const flKu = JSON.parse(fs.readFileSync(path.join(flDir, 'knowledge-units.json'), 'utf8'));
  const flHtml = fs.readFileSync(path.join(flDir, 'index.html'), 'utf8');
  let flRendered = 0;
  flKu.forEach(u => { if (flHtml.includes(`id="law-${u.unit_number}"`)) flRendered++; });
  const flCream = flHtml.includes('data-theme="cream"');
  const flControls = flHtml.includes('reader-controls.js');
  if (flRendered === 48 && flCream && flControls) {
    results.laws_of_power = { status: "PASS", units: "48/48" };
    console.log(`    - Rendered Laws: ${flRendered}/48 | Editorial Cream: ${flCream} | Controls: ${flControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.laws_of_power = { status: "FAIL", units: `${flRendered}/48` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 8. RICH DAD POOR DAD
  console.log(">>> [8/13] Auditing: Rich Dad Poor Dad & CASHFLOW Quadrant...");
  const rdDir = path.join(__dirname, '..', 'docs', 'distillations', 'rich-dad-poor-dad');
  const rdKu = JSON.parse(fs.readFileSync(path.join(rdDir, 'knowledge-units.json'), 'utf8'));
  const rdHtml = fs.readFileSync(path.join(rdDir, 'index.html'), 'utf8');
  const rdUnits = Array.isArray(rdKu) ? rdKu : (rdKu.units || []);
  let rdRendered = 0;
  rdUnits.forEach(u => {
    const num = u.unit_number || u.num;
    if (rdHtml.includes(`id="unit-${num}"`)) rdRendered++;
  });
  const rdCream = rdHtml.includes('data-theme="cream"');
  const rdControls = rdHtml.includes('reader-controls.js');
  if (rdRendered === 10 && rdCream && rdControls) {
    results.rich_dad = { status: "PASS", units: "10/10" };
    console.log(`    - Rendered Units: ${rdRendered}/10 | Editorial Cream: ${rdCream} | Controls: ${rdControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.rich_dad = { status: "FAIL", units: `${rdRendered}/10` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 9. ATOMIC HABITS
  console.log(">>> [9/13] Auditing: Atomic Habits...");
  const ahDir = path.join(__dirname, '..', 'docs', 'distillations', 'atomic-habits');
  const ahKu = JSON.parse(fs.readFileSync(path.join(ahDir, 'knowledge-units.json'), 'utf8'));
  const ahHtml = fs.readFileSync(path.join(ahDir, 'index.html'), 'utf8');
  let ahRendered = 0;
  ahKu.forEach(u => { if (ahHtml.includes(`id="unit-${u.unit_number}"`)) ahRendered++; });
  const ahCream = ahHtml.includes('data-theme="cream"');
  const ahControls = ahHtml.includes('reader-controls.js');
  if (ahRendered === 20 && ahCream && ahControls) {
    results.atomic_habits = { status: "PASS", units: "20/20" };
    console.log(`    - Rendered Units: ${ahRendered}/20 | Editorial Cream: ${ahCream} | Controls: ${ahControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.atomic_habits = { status: "FAIL", units: `${ahRendered}/20` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 10. THE MYTH OF SISYPHUS
  console.log(">>> [10/13] Auditing: The Myth of Sisyphus...");
  const msDir = path.join(__dirname, '..', 'docs', 'distillations', 'the-myth-of-sisyphus');
  const msKu = JSON.parse(fs.readFileSync(path.join(msDir, 'knowledge-units.json'), 'utf8'));
  const msHtml = fs.readFileSync(path.join(msDir, 'index.html'), 'utf8');
  let msRendered = 0;
  msKu.forEach(u => { if (msHtml.includes(`id="unit-${u.unit_number}"`)) msRendered++; });
  const msCream = msHtml.includes('data-theme="cream"');
  const msControls = msHtml.includes('reader-controls.js');
  if (msRendered === 12 && msCream && msControls) {
    results.myth_of_sisyphus = { status: "PASS", units: "12/12" };
    console.log(`    - Rendered Units: ${msRendered}/12 | Editorial Cream: ${msCream} | Controls: ${msControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.myth_of_sisyphus = { status: "FAIL", units: `${msRendered}/12` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 11. CAN'T HURT ME
  console.log(">>> [11/13] Auditing: Can't Hurt Me...");
  const chmDir = path.join(__dirname, '..', 'docs', 'distillations', 'cant-hurt-me');
  const chmKu = JSON.parse(fs.readFileSync(path.join(chmDir, 'knowledge-units.json'), 'utf8'));
  const chmHtml = fs.readFileSync(path.join(chmDir, 'index.html'), 'utf8');
  let chmRendered = 0;
  const chmUnits = Array.isArray(chmKu) ? chmKu : (chmKu.units || []);
  chmUnits.forEach(u => {
    const num = u.unit_number || u.chapter_num;
    if (chmHtml.includes(`id="unit-${num}"`)) chmRendered++;
  });
  const chmCream = chmHtml.includes('data-theme="cream"');
  const chmControls = chmHtml.includes('reader-controls.js');
  if (chmRendered === 11 && chmCream && chmControls) {
    results.cant_hurt_me = { status: "PASS", units: "11/11" };
    console.log(`    - Rendered Units: ${chmRendered}/11 | Editorial Cream: ${chmCream} | Controls: ${chmControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.cant_hurt_me = { status: "FAIL", units: `${chmRendered}/11` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 12. THE ART OF WAR
  console.log(">>> [12/13] Auditing: The Art of War...");
  const aowDir = path.join(__dirname, '..', 'docs', 'distillations', 'the-art-of-war');
  const aowKu = JSON.parse(fs.readFileSync(path.join(aowDir, 'knowledge-units.json'), 'utf8'));
  const aowUnits = aowKu.units || aowKu;
  const aowHtml = fs.readFileSync(path.join(aowDir, 'index.html'), 'utf8');
  let aowRendered = 0;
  aowUnits.forEach(u => { if (aowHtml.includes(`id="${u.id}"`)) aowRendered++; });
  const aowCream = aowHtml.includes('data-theme="cream"');
  const aowControls = aowHtml.includes('reader-controls.js');
  if (aowRendered === 26 && aowCream && aowControls) {
    results.art_of_war = { status: "PASS", units: "26/26" };
    console.log(`    - Rendered Units: ${aowRendered}/26 | Editorial Cream: ${aowCream} | Controls: ${aowControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.art_of_war = { status: "FAIL", units: `${aowRendered}/26` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 13. WAR AND PEACE
  console.log(">>> [13/13] Auditing: War and Peace...");
  const wapDir = path.join(__dirname, '..', 'docs', 'distillations', 'war-and-peace');
  const wapKu = JSON.parse(fs.readFileSync(path.join(wapDir, 'knowledge-units.json'), 'utf8'));
  const wapHtml = fs.readFileSync(path.join(wapDir, 'index.html'), 'utf8');
  let wapRendered = 0;
  wapKu.forEach(u => { if (wapHtml.includes(`id="${u.id}"`)) wapRendered++; });
  const wapCream = wapHtml.includes('data-theme="cream"');
  const wapControls = wapHtml.includes('reader-controls.js');
  if (wapRendered === 20 && wapCream && wapControls) {
    results.war_and_peace = { status: "PASS", units: "20/20" };
    console.log(`    - Rendered Units: ${wapRendered}/20 | Editorial Cream: ${wapCream} | Controls: ${wapControls}`);
    console.log("    => VERDICT: PASS (Zero Content Loss)\n");
  } else {
    results.war_and_peace = { status: "FAIL", units: `${wapRendered}/20` };
    console.error("    => VERDICT: FAIL\n");
  }

  // 14. COMPREHENSIVE 32-TITLE REPOSITORY AUDIT SWEEP
  console.log(">>> [14/14] Auditing Complete 32-Title Library Corpus for Standard BKRS Compliance...");
  const distillationsDir = path.join(__dirname, '..', 'docs', 'distillations');
  const allDirs = fs.readdirSync(distillationsDir).filter(d => fs.statSync(path.join(distillationsDir, d)).isDirectory());
  
  let libraryPassCount = 0;
  allDirs.forEach(slug => {
    const dir = path.join(distillationsDir, slug);
    const htmlPath = path.join(dir, 'index.html');
    const mdPath = path.join(dir, 'master-notes.md');
    const kuPath = path.join(dir, 'knowledge-units.json');

    const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';
    const hasCream = html.includes('data-theme="cream"');
    const hasShell = html.includes('reader-shell.css');
    const hasControls = html.includes('reader-controls.js');
    const hasMd = fs.existsSync(mdPath) && fs.readFileSync(mdPath, 'utf8').length > 15000;
    const hasKu = fs.existsSync(kuPath);

    if (hasCream && hasShell && hasControls && hasMd && hasKu) {
      libraryPassCount++;
    } else {
      console.error(`    [FAIL] ${slug}: cream=${hasCream}, shell=${hasShell}, controls=${hasControls}, md=${hasMd}, ku=${hasKu}`);
    }
  });

  console.log(`    - Fully Verified BKRS Compliant Titles: ${libraryPassCount} / ${allDirs.length}`);
  if (libraryPassCount === allDirs.length) {
    results.full_library = { status: "PASS", count: `${libraryPassCount}/${allDirs.length}` };
    console.log("    => VERDICT: PASS (100% Repository-Wide Standard Met)\n");
  } else {
    results.full_library = { status: "FAIL", count: `${libraryPassCount}/${allDirs.length}` };
    console.error("    => VERDICT: FAIL\n");
  }

  console.log("================================================================================");
  console.log("  FINAL REGRESSION SUMMARY:");
  console.log(`  - Norwegian Wood (Fiction)           : ${results.norwegian_wood.status}`);
  console.log(`  - The Psychology of Money (Nonfiction): ${results.psychology_of_money.status}`);
  console.log(`  - Bhagat Singh (Historical Biography): ${results.bhagat_singh.status}`);
  console.log(`  - Endurance (Survival History)       : ${results.endurance.status}`);
  console.log(`  - Rajput Unified Mega-Codex (History): ${results.rajput_codex.status}`);
  console.log(`  - Manifestation Unified Codex (Mind) : ${results.manifestation_codex.status}`);
  console.log(`  - The 48 Laws of Power (Realpolitik) : ${results.laws_of_power.status}`);
  console.log(`  - Rich Dad Poor Dad (Finance)        : ${results.rich_dad.status}`);
  console.log(`  - Atomic Habits (Behavior)           : ${results.atomic_habits.status}`);
  console.log(`  - The Myth of Sisyphus (Philosophy)  : ${results.myth_of_sisyphus.status}`);
  console.log(`  - Can't Hurt Me (Mental Toughness)   : ${results.cant_hurt_me.status}`);
  console.log(`  - The Art of War (Strategy)          : ${results.art_of_war.status}`);
  console.log(`  - War and Peace (Epic Literature)    : ${results.war_and_peace.status}`);
  console.log(`  - Full 32-Title Library Standard     : ${results.full_library.status} (${results.full_library.count})`);
  console.log("================================================================================");

  const allPass = Object.values(results).every(r => r.status === "PASS");
  if (!allPass) process.exit(1);
}

runRegressionSuite();
