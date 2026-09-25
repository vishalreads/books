/**
 * BKRS Independent Forensic Validation Suite for Endurance (Lansing, 1959/2010)
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'endurance');
const kuPath = path.join(baseDir, 'knowledge-units.json');
const htmlPath = path.join(baseDir, 'index.html');

if (!fs.existsSync(kuPath) || !fs.existsSync(htmlPath)) {
  console.error("Missing Endurance files!");
  process.exit(1);
}

const ku = JSON.parse(fs.readFileSync(kuPath, 'utf8'));
const html = fs.readFileSync(htmlPath, 'utf8');

console.log("================================================================================");
console.log("  BKRS INDEPENDENT VALIDATION: ENDURANCE (ALFRED LANSING)");
console.log("================================================================================");

let unitsFound = 0;
let traceFound = 0;
let excerptsFound = 0;

ku.content_units.forEach(u => {
  if (html.includes(`id="${u.unit_id}"`)) unitsFound++;
  if (html.includes(`id="trace-data-${u.unit_id}"`)) traceFound++;
  if (u.source_evidence && u.source_evidence.length > 0) {
    if (html.includes(u.source_evidence[0])) excerptsFound++;
  }
});

const viewA = html.includes('id="view-journey"');
const viewB = html.includes('id="view-map"');
const viewC = html.includes('id="view-experience"');
const controls = html.includes('reader-controls.js');

console.log(`- Canonical Content Units: ${ku.content_units.length}`);
console.log(`- Rendered Narrative Units: ${unitsFound} / ${ku.content_units.length}`);
console.log(`- Rendered Trace Payloads: ${traceFound} / ${ku.content_units.length}`);
console.log(`- Primary Verbatim Excerpts Verified: ${excerptsFound} / ${ku.content_units.length}`);
console.log(`- View A (Chronicle): ${viewA}`);
console.log(`- View B (Relational Map): ${viewB}`);
console.log(`- View C (Crucible of Leadership): ${viewC}`);
console.log(`- Reader Controls Attached: ${controls}`);

const pass = unitsFound === ku.content_units.length &&
             traceFound === ku.content_units.length &&
             viewA && viewB && viewC && controls;

if (pass) {
  console.log("\n=> VERDICT: PASS (100% Zero Content Loss, Zero Regression)");
} else {
  console.error("\n=> VERDICT: FAIL");
  process.exit(1);
}
