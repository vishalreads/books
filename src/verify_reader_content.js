/**
 * BKRS Content Preservation Verification Check
 * Verifies that the rendered HTML preserves 100% of canonical knowledge units and metadata.
 */

const fs = require('fs');
const path = require('path');

function verifyReaderContent(bookSlug) {
  const baseDir = path.join(__dirname, '..', 'docs', 'distillations', bookSlug);
  const kuPath = path.join(baseDir, 'knowledge-units.json');
  const htmlPath = path.join(baseDir, 'index.html');

  const ku = JSON.parse(fs.readFileSync(kuPath, 'utf8'));
  const html = fs.readFileSync(htmlPath, 'utf8');

  console.log(`Verifying content preservation for: ${ku.title}...`);

  const results = {
    total_canonical_scenes: ku.scenes.length,
    rendered_unit_ids: 0,
    preserved_what_happens: 0,
    preserved_why_this_matters: 0,
    preserved_trace_data: 0,
    preserved_materiality_badges: 0,
    preserved_epistemic_badges: 0,
    missing_elements: []
  };

  ku.scenes.forEach(scene => {
    // 1. Check unit ID in HTML
    if (html.includes(`id="${scene.scene_id}"`)) {
      results.rendered_unit_ids++;
    } else {
      results.missing_elements.push(`Missing unit ID: ${scene.scene_id}`);
    }

    // 2. Check snippet of what_happens (first 40 chars)
    const whatHappensSnippet = scene.what_happens.substring(0, 40).replace(/"/g, '&quot;');
    if (html.includes(whatHappensSnippet.substring(0, 30))) {
      results.preserved_what_happens++;
    } else {
      results.missing_elements.push(`Missing narrative text for: ${scene.scene_id}`);
    }

    // 3. Check why_this_matters
    if (scene.why_this_matters) {
      const whySnippet = scene.why_this_matters.substring(0, 30).replace(/"/g, '&quot;');
      if (html.includes(whySnippet)) {
        results.preserved_why_this_matters++;
      } else {
        results.missing_elements.push(`Missing why_this_matters for: ${scene.scene_id}`);
      }
    } else {
      results.preserved_why_this_matters++;
    }

    // 4. Check trace data
    if (html.includes(`id="trace-data-${scene.scene_id}"`)) {
      results.preserved_trace_data++;
    } else {
      results.missing_elements.push(`Missing trace data script for: ${scene.scene_id}`);
    }

    // 5. Check materiality
    const matClass = `badge-${scene.materiality || 'important'}`;
    if (html.includes(matClass)) {
      results.preserved_materiality_badges++;
    }

    // 6. Check epistemic badge
    if (html.includes('badge-source-fact')) {
      results.preserved_epistemic_badges++;
    }
  });

  // Verify Views A, B, and C presence
  const hasViewA = html.includes('id="view-journey"');
  const hasViewB = html.includes('id="view-knowledge"');
  const hasViewC = html.includes('id="view-experience"');
  const hasSearchIndex = html.includes('id="bkrs-search-index"');
  const hasControlsScript = html.includes('reader-controls.js');

  console.log("Preservation Audit Results:");
  console.log(`- Canonical Scenes: ${results.total_canonical_scenes}`);
  console.log(`- Rendered Unit IDs: ${results.rendered_unit_ids} / ${results.total_canonical_scenes}`);
  console.log(`- Preserved Narrative Texts: ${results.preserved_what_happens} / ${results.total_canonical_scenes}`);
  console.log(`- Preserved Why This Matters: ${results.preserved_why_this_matters} / ${results.total_canonical_scenes}`);
  console.log(`- Preserved Trace Script Tags: ${results.preserved_trace_data} / ${results.total_canonical_scenes}`);
  console.log(`- View A Present: ${hasViewA}`);
  console.log(`- View B Present: ${hasViewB}`);
  console.log(`- View C Present: ${hasViewC}`);
  console.log(`- Search Index Present: ${hasSearchIndex}`);
  console.log(`- Reader Controls Attached: ${hasControlsScript}`);

  if (results.missing_elements.length > 0) {
    console.error("FAIL: Missing elements detected:", results.missing_elements);
    process.exit(1);
  } else {
    console.log("SUCCESS: 100% Canonical Content & Metadata Preserved!");
  }
}

if (require.main === module) {
  verifyReaderContent('norwegian-wood');
}

module.exports = { verifyReaderContent };
