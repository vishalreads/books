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

  console.log("================================================================================");
  console.log("  FINAL REGRESSION SUMMARY:");
  console.log(`  - Norwegian Wood (Fiction)           : ${results.norwegian_wood.status}`);
  console.log(`  - The Psychology of Money (Nonfiction): ${results.psychology_of_money.status}`);
  console.log(`  - Bhagat Singh (Historical Biography): ${results.bhagat_singh.status}`);
  console.log(`  - Endurance (Survival History)       : ${results.endurance.status}`);
  console.log(`  - Rajput Unified Mega-Codex (History): ${results.rajput_codex.status}`);
  console.log("================================================================================");

  const allPass = Object.values(results).every(r => r.status === "PASS");
  if (!allPass) process.exit(1);
}

runRegressionSuite();
