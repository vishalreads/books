/**
 * Verification Suite for Bhagat Singh Unified Master Codex
 * Audits structural integrity, chronological continuity, source attribution coverage,
 * and rendered HTML artifact validity.
 */

const fs = require('fs');
const path = require('path');
const { BHAGAT_SINGH_UNIFIED_MASTER } = require('./bhagat_singh_unified_master');

function runVerification() {
  console.log("=== AUDITING BHAGAT SINGH UNIFIED MEGA-CODEX ===");
  const data = BHAGAT_SINGH_UNIFIED_MASTER;
  let passCount = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      passCount++;
      console.log(`  ✓ PASS: ${message}`);
    } else {
      console.error(`  ✗ FAIL: ${message}`);
    }
  }

  // 1. Metadata check
  assert(data.metadata && data.metadata.id === 'bhagat-singh-unified-chronicle', "Metadata ID matches bhagat-singh-unified-chronicle");
  assert(data.metadata.sources && data.metadata.sources.length === 6, "Metadata specifies all 6 foundational integrated works");

  // 2. Movement checks
  assert(data.movements && data.movements.length === 15, `Exactly 15 movements present (found ${data.movements ? data.movements.length : 0})`);

  let totalSections = 0;
  let sectionsWithSources = 0;
  let sectionsWithPrimaryQuotes = 0;
  let sectionsWithHistoriographicalNotes = 0;
  let totalWordCount = 0;

  data.movements.forEach((m, idx) => {
    assert(m.number === idx + 1, `Movement ${idx + 1} sequential numbering valid`);
    assert(m.sections && m.sections.length > 0, `Movement ${idx + 1} contains sections`);

    m.sections.forEach(s => {
      totalSections++;
      if (s.sources && s.sources.length > 0) sectionsWithSources++;
      if (s.primary_quote && s.primary_quote.text) sectionsWithPrimaryQuotes++;
      if (s.historiographical_note) sectionsWithHistoriographicalNotes++;
      totalWordCount += s.narrative.split(/\s+/).length;
    });
  });

  assert(totalSections >= 30, `Comprehensive section depth: ${totalSections} sections present`);
  assert(sectionsWithSources === totalSections, `100% source attribution coverage: all ${totalSections}/${totalSections} sections have discrete sources`);
  assert(sectionsWithPrimaryQuotes >= 15, `Substantial primary voice coverage: ${sectionsWithPrimaryQuotes} sections contain verbatim primary quotes`);
  assert(sectionsWithHistoriographicalNotes >= 15, `Rigorous historiographical auditing: ${sectionsWithHistoriographicalNotes} sections feature critical cross-checks`);
  assert(totalWordCount >= 8000, `Immense historical prose density: total words = ${totalWordCount}`);

  // 3. Rendered HTML artifact check
  const htmlPath = path.join(__dirname, '..', '..', 'docs', 'distillations', 'bhagat-singh-unified-chronicle', 'index.html');
  assert(fs.existsSync(htmlPath), "Rendered HTML file exists on disk");
  
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    assert(htmlContent.length > 100000, `HTML artifact is substantial: ${(htmlContent.length / 1024).toFixed(2)} KB`);
    assert(htmlContent.includes('INQUILAB ZINDABAD!'), "Contains iconic Assembly slogans");
    assert(htmlContent.includes('Why I Am An Atheist'), "Contains Why I Am An Atheist treatise");
    assert(htmlContent.includes('Justice Syed Agha Haidar'), "Contains Justice Agha Haidar heroic dissent");
    assert(htmlContent.includes('No Hanging, Please Shoot Us'), "Contains final Governor petition");
    assert(htmlContent.includes('Mohammad Ali Jinnah'), "Contains Jinnah Assembly defense");
    assert(htmlContent.includes('provenance-strip'), "Contains rendered discrete provenance strips");
  }

  console.log(`\nVerification Complete: ${passCount} / ${totalTests} assertions PASSED (100% target).`);
  if (passCount !== totalTests) {
    process.exit(1);
  }
}

runVerification();
