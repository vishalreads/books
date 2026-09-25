const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution', 'ingestion-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const questionsPath = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution', 'validation', 'questions.json');
const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

// Build set of all unit IDs in manifest
const manifestUnitIds = new Set();
manifest.documents.forEach(d => {
  d.units.forEach(u => manifestUnitIds.add(u.elementId));
});

console.log(`Total units in manifest: ${manifestUnitIds.size}`);
console.log(`Total questions in validation set: ${questions.length}`);

let missingUnitCount = 0;
questions.forEach(q => {
  q.source_provenance.unit_ids.forEach(uid => {
    if (!manifestUnitIds.has(uid)) {
      console.log(`MISSING UNIT ID: Question ${q.question_id} references unit ${uid} which is NOT in manifest!`);
      missingUnitCount++;
    }
  });
});

if (missingUnitCount === 0) {
  console.log('PROVENANCE VERIFICATION PASSED: 100% of unit IDs referenced across all 50 questions exist in manifest.');
} else {
  console.log(`FAILED: ${missingUnitCount} unit IDs missing!`);
}

// Check dimension counts
const dimCounts = {};
questions.forEach(q => {
  dimCounts[q.dimension] = (dimCounts[q.dimension] || 0) + 1;
});
console.log('\nDimension counts:', dimCounts);
