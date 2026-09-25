/**
 * BKRS Read-Only Cross-Book Normalization Adapter
 * Standard: BKRS Constitution v1.0 (§13-§19, §33-§35) & Step 5.1 Specification
 * 
 * Projects certified Book Master knowledge units into NormalizedCrossBookUnit (NXU)
 * strictly without mutating the underlying Book Masters.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..', '..');

const BOOK_CONFIGS = {
  'norwegian-wood': {
    slug: 'norwegian-wood',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    genre: 'literary_fiction',
    unitsKey: 'scenes',
    unitType: 'SCENE',
    idKey: 'scene_id',
    idPrefix: 'NW-SC-'
  },
  'the-psychology-of-money': {
    slug: 'the-psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'analytical_nonfiction',
    unitsKey: 'content_units',
    unitType: 'ARGUMENT_UNIT',
    idKey: 'unit_id',
    idPrefix: 'PM-'
  },
  'bhagat-singh-a-life-in-revolution': {
    slug: 'bhagat-singh-a-life-in-revolution',
    title: 'Bhagat Singh: A Life in Revolution',
    author: 'Satvinder S. Juss',
    genre: 'historical_biography',
    unitsKey: 'content_units',
    unitType: 'HISTORICAL_EPISODE',
    idKey: 'unit_id',
    idPrefix: 'KU-BS-'
  }
};

/**
 * Computes SHA-256 hash of a file
 */
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

/**
 * Normalizes a single Literary Fiction scene (Norwegian Wood)
 */
function normalizeFictionScene(scene, idx, bookSlug, config) {
  const sourceUnitId = scene.scene_id;
  const normalizedId = `NXU-NW-${sourceUnitId}`;

  // Voice determination: Fictional narration vs character dialogue
  let sourceVoice = 'NARRATOR';
  let assertionModality = 'NARRATIVE_EXPERIENCE';
  if (scene.dialogue_significance && scene.dialogue_significance.includes(':')) {
    assertionModality = 'FICTIONAL_CHARACTER_CONVICTION';
  }

  // Participants as entities
  const entities = (scene.participants || []).map(p => ({
    name: p,
    entity_type: 'FICTIONAL_CHARACTER',
    resolved_id: `ENT-NW-${p.toLowerCase().replace(/[^a-z0-9]/g, '_')}`
  }));

  // Concepts from themes and motifs
  const concepts = (scene.themes || []).concat(scene.motifs || []).map(t => ({
    book_specific_concept_id: `BSC-NW-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    mapped_canonical_concept_id: null,
    mapping_status: 'UNMAPPED',
    source_label: t
  }));

  // Relationships (narrative transitions, callbacks, consequences)
  const relationships = [];
  if (scene.callbacks && Array.isArray(scene.callbacks)) {
    scene.callbacks.forEach(cb => {
      relationships.push({
        target_source_unit_id: String(cb),
        relationship_type: 'CALLBACK',
        relationship_category: 'THEMATIC',
        details: 'Narrative callback across scenes'
      });
    });
  }
  if (scene.consequences && Array.isArray(scene.consequences)) {
    scene.consequences.forEach(cq => {
      relationships.push({
        target_source_unit_id: 'DOWNSTREAM_SCENE',
        relationship_type: 'NARRATIVE_CONSEQUENCE',
        relationship_category: 'RELATIONAL',
        details: cq
      });
    });
  }

  // Claims
  const claims = [];
  if (scene.why_this_matters) {
    claims.push({
      claim_id: `NC-NW-${sourceUnitId}-01`,
      source_unit_id: sourceUnitId,
      book_id: bookSlug,
      claimant: 'Murakami / Narrator',
      proposition: scene.why_this_matters,
      qualification: null,
      scope: 'EXISTENTIAL_NARRATIVE',
      evidence: scene.dialogue_significance ? [scene.dialogue_significance] : [],
      epistemic_status: scene.epistemic_status || 'SOURCE FACT',
      assertion_modality: assertionModality,
      source_explicitness: 'PARAPHRASED_SOURCE_CLAIM',
      provenance: `Chapter ${scene.chapter} • Scene ${sourceUnitId}`,
      materiality: (scene.materiality || 'CRITICAL').toUpperCase()
    });
  }

  return {
    normalized_unit_id: normalizedId,
    book_id: bookSlug,
    source_unit_id: sourceUnitId,
    source_unit_type: 'SCENE',
    genre: 'literary_fiction',
    source_location: {
      chapter: scene.chapter,
      chapter_title: `Chapter ${scene.chapter}`,
      locator: scene.source_location || `Chapter ${scene.chapter}`,
      document_file: 'canonical_text',
      element_ids: []
    },
    structural_position: {
      narrative_order: scene.narrative_position || idx + 1,
      chronological_order: scene.chronological_position || idx + 1,
      logical_level: null,
      book_percentage: parseFloat(((idx + 1) / 36 * 100).toFixed(1))
    },
    source_sequence: idx + 1,
    title: scene.location ? `Scene ${sourceUnitId}: ${scene.location}` : `Scene ${sourceUnitId}`,
    statement: scene.what_happens,
    source_claims: claims,
    entities: entities,
    concepts: concepts,
    relationships: relationships,
    epistemic_status: scene.epistemic_status || 'SOURCE FACT',
    source_voice: sourceVoice,
    assertion_modality: assertionModality,
    source_explicitness: 'SOURCE_EXPLICIT',
    confidence: 'HIGH',
    materiality: (scene.materiality || 'CRITICAL').toUpperCase(),
    materiality_reason: scene.materiality_reason || scene.why_this_matters || '',
    temporal: {
      event_time: scene.time ? { raw: scene.time } : null,
      record_time: null,
      source_time: { publication_year: 1987 },
      date_precision: 'NARRATIVE_TEMPORAL'
    },
    provenance: {
      source_evidence: scene.dialogue_significance ? [scene.dialogue_significance] : [],
      source_trace: `Chapter ${scene.chapter} • Scene ${sourceUnitId}`,
      original_unit_reference: `${bookSlug}:scenes[${idx}]`
    },
    genre_specific_payload_reference: {
      genre: 'literary_fiction',
      payload_pointer: `/scenes/${idx}`
    },
    genre_specific_payload: {
      what_happens: scene.what_happens,
      emotional_transition: scene.emotional_transition || '',
      character_states_before: scene.character_states_before || {},
      character_states_after: scene.character_states_after || {},
      motifs: scene.motifs || [],
      atmosphere: scene.atmosphere || '',
      mundane_texture: scene.mundane_texture || [],
      dialogue_significance: scene.dialogue_significance || ''
    },
    normalization: {
      concept_mappings: [],
      entity_mappings: [],
      claim_mappings: [],
      normalization_notes: 'Literary fiction scene projected via Profile A without loss of somatic texture'
    }
  };
}

/**
 * Normalizes a single Analytical Nonfiction argument unit (The Psychology of Money)
 */
function normalizeNonfictionUnit(unit, idx, bookSlug, config) {
  const sourceUnitId = unit.unit_id;
  const normalizedId = `NXU-PM-${sourceUnitId}`;
  const payload = unit.genre_payload || {};

  // Concepts
  const concepts = [];
  if (payload.core_concept) {
    concepts.push({
      book_specific_concept_id: `BSC-PM-${payload.core_concept.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      mapped_canonical_concept_id: null,
      mapping_status: 'UNMAPPED',
      source_label: payload.core_concept
    });
  }

  // Entities (historical/empirical cases)
  const entities = (payload.historical_cases || []).map(c => ({
    name: c,
    entity_type: 'HISTORICAL_OR_EMPIRICAL_CASE',
    resolved_id: null
  }));

  // Relationships
  const relationships = (unit.relationships || []).map(r => ({
    target_source_unit_id: r.target_unit_id || r.target,
    relationship_type: r.relationship_type || r.type || 'SUPPORTS',
    relationship_category: 'CONCEPTUAL',
    details: r.nature || r.details || ''
  }));

  // Claims
  const claims = [];
  if (payload.thesis_claim) {
    claims.push({
      claim_id: `NC-PM-${sourceUnitId}-01`,
      source_unit_id: sourceUnitId,
      book_id: bookSlug,
      claimant: 'Morgan Housel (AUTHOR)',
      proposition: payload.thesis_claim,
      qualification: payload.boundary_conditions || null,
      scope: 'BEHAVIORAL_FINANCE',
      evidence: payload.primary_evidence ? [payload.primary_evidence] : [],
      epistemic_status: unit.epistemic_status || 'SOURCE ARGUMENT',
      assertion_modality: 'EXPLICIT_SOURCE_ASSERTION',
      source_explicitness: 'SOURCE_CLAIM',
      provenance: `Chapter ${unit.chapter} • Argument ${sourceUnitId}`,
      materiality: (unit.materiality || 'CRITICAL').toUpperCase()
    });
  }

  return {
    normalized_unit_id: normalizedId,
    book_id: bookSlug,
    source_unit_id: sourceUnitId,
    source_unit_type: unit.unit_type || 'ARGUMENT_UNIT',
    genre: 'analytical_nonfiction',
    source_location: {
      chapter: unit.chapter,
      chapter_title: unit.chapter_title || `Chapter ${unit.chapter}`,
      locator: unit.pages ? `pp. ${unit.pages}` : `Ch ${unit.chapter}`,
      document_file: 'canonical_text',
      element_ids: []
    },
    structural_position: {
      narrative_order: idx + 1,
      chronological_order: null,
      logical_level: 1,
      book_percentage: parseFloat(((idx + 1) / 24 * 100).toFixed(1))
    },
    source_sequence: idx + 1,
    title: unit.chapter_title ? `Ch ${unit.chapter}: ${unit.chapter_title}` : `Argument ${sourceUnitId}`,
    statement: payload.thesis_claim || unit.summary_statement || '',
    source_claims: claims,
    entities: entities,
    concepts: concepts,
    relationships: relationships,
    epistemic_status: unit.epistemic_status || 'SOURCE ARGUMENT',
    source_voice: 'AUTHOR',
    assertion_modality: 'EXPLICIT_SOURCE_ASSERTION',
    source_explicitness: 'SOURCE_EXPLICIT',
    confidence: unit.confidence ? unit.confidence.toUpperCase() : 'HIGH',
    materiality: (unit.materiality || 'CRITICAL').toUpperCase(),
    materiality_reason: unit.materiality_reason || '',
    temporal: {
      event_time: null,
      record_time: null,
      source_time: { publication_year: 2020 },
      date_precision: 'ANALYTICAL_NON_TEMPORAL'
    },
    provenance: {
      source_evidence: payload.quotes || [],
      source_trace: `Chapter ${unit.chapter} • Argument ${sourceUnitId}`,
      original_unit_reference: `${bookSlug}:content_units[${idx}]`
    },
    genre_specific_payload_reference: {
      genre: 'analytical_nonfiction',
      payload_pointer: `/content_units/${idx}/genre_payload`
    },
    genre_specific_payload: payload,
    normalization: {
      concept_mappings: [],
      entity_mappings: [],
      claim_mappings: [],
      normalization_notes: 'Analytical nonfiction argument projected via Profile B preserving logical chain and heuristics'
    }
  };
}

/**
 * Normalizes a single Historical Biography unit (Bhagat Singh: A Life in Revolution)
 */
function normalizeHistoricalUnit(unit, idx, bookSlug, config) {
  const sourceUnitId = unit.unit_id;
  const normalizedId = `NXU-BS-${sourceUnitId}`;
  const payload = unit.genre_specific_payload || {};
  const loc = unit.source_location || {};
  const dt = unit.dual_timeline || {};

  // Voice and Modality determination
  let sourceVoice = 'BIOGRAPHER';
  let assertionModality = 'HISTORICAL_EVENT_RECORD';

  if (unit.epistemic_status === '[PRIMARY_SUBJECT_WRITING]') {
    sourceVoice = 'HISTORICAL_SUBJECT';
    assertionModality = 'EXPLICIT_SOURCE_ASSERTION';
  } else if (unit.epistemic_status === '[BIOGRAPHER_THESIS]') {
    sourceVoice = 'BIOGRAPHER';
    assertionModality = 'BIOGRAPHER_INTERPRETIVE_THESIS';
  } else if (unit.epistemic_status === '[CONTEMPORARY_RECORD]') {
    sourceVoice = 'PRIMARY_DOCUMENT_AUTHOR';
    assertionModality = 'CONTEMPORARY_RECORD_WITNESS';
  } else if (unit.epistemic_status === '[COERCED_TESTIMONY]') {
    sourceVoice = 'CONTEMPORARY_WITNESS';
    assertionModality = 'COERCED_WITNESS_DEPOSITION';
  } else if (unit.unit_type === 'LIFE_EPISODE') {
    sourceVoice = 'HISTORICAL_SUBJECT';
    assertionModality = 'HISTORICAL_EVENT_RECORD';
  }

  // Entities
  const entities = (unit.entities || []).map(e => {
    if (typeof e === 'string') {
      return { name: e, entity_type: 'HISTORICAL_ACTOR', resolved_id: null };
    }
    return {
      name: e.name || 'Unknown',
      entity_type: e.role || e.type || 'HISTORICAL_ACTOR',
      resolved_id: null
    };
  });

  // Concepts
  const concepts = [];
  if (payload.ideological_construct) {
    concepts.push({
      book_specific_concept_id: `BSC-BS-${payload.ideological_construct.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      mapped_canonical_concept_id: null,
      mapping_status: 'UNMAPPED',
      source_label: payload.ideological_construct
    });
  }

  // Unified Relationships: Relational + Causal + Contested
  const relationships = [];
  (unit.relationships || []).forEach(r => {
    relationships.push({
      target_source_unit_id: r.target_unit_id || r.target,
      relationship_type: r.relationship_type || r.type || 'RELATIONAL',
      relationship_category: 'RELATIONAL',
      details: r.nature || r.details || ''
    });
  });

  (unit.causal_relationships || []).forEach(cr => {
    relationships.push({
      target_source_unit_id: cr.target_unit_id,
      relationship_type: cr.causal_status,
      relationship_category: 'CAUSAL',
      details: cr.supporting_evidence || ''
    });
  });

  (unit.competing_accounts || []).forEach(ca => {
    relationships.push({
      target_source_unit_id: sourceUnitId,
      relationship_type: 'HISTORIOGRAPHICAL_DISPUTE',
      relationship_category: 'CONTESTED',
      details: ca.contested_issue || ca.issue || 'Contested Historical Issue'
    });
  });

  // Claims
  const claims = [];
  if (unit.epistemic_status === '[PRIMARY_SUBJECT_WRITING]') {
    claims.push({
      claim_id: `NC-BS-${sourceUnitId}-01`,
      source_unit_id: sourceUnitId,
      book_id: bookSlug,
      claimant: 'Bhagat Singh (HISTORICAL_SUBJECT)',
      proposition: unit.summary_statement,
      qualification: null,
      scope: 'REVOLUTIONARY_POLITICAL_PHILOSOPHY',
      evidence: unit.source_evidence || [],
      epistemic_status: unit.epistemic_status,
      assertion_modality: 'EXPLICIT_SOURCE_ASSERTION',
      source_explicitness: 'SOURCE_CLAIM',
      provenance: `${loc.chapter_title || 'Chapter ' + loc.chapter_number} • Unit ${sourceUnitId}`,
      materiality: (unit.materiality || 'CRITICAL').toUpperCase()
    });
  } else if (unit.epistemic_status === '[BIOGRAPHER_THESIS]') {
    claims.push({
      claim_id: `NC-BS-${sourceUnitId}-01`,
      source_unit_id: sourceUnitId,
      book_id: bookSlug,
      claimant: 'Satvinder S. Juss (BIOGRAPHER)',
      proposition: unit.summary_statement,
      qualification: null,
      scope: 'HISTORIOGRAPHICAL_INTERPRETATION',
      evidence: unit.source_evidence || [],
      epistemic_status: unit.epistemic_status,
      assertion_modality: 'BIOGRAPHER_INTERPRETIVE_THESIS',
      source_explicitness: 'SOURCE_CLAIM',
      provenance: `${loc.chapter_title || 'Chapter ' + loc.chapter_number} • Unit ${sourceUnitId}`,
      materiality: (unit.materiality || 'CRITICAL').toUpperCase()
    });
  }

  return {
    normalized_unit_id: normalizedId,
    book_id: bookSlug,
    source_unit_id: sourceUnitId,
    source_unit_type: unit.unit_type || 'HISTORICAL_EPISODE',
    genre: 'historical_biography',
    source_location: {
      chapter: loc.chapter_number !== undefined ? loc.chapter_number : loc.chapter,
      chapter_title: loc.chapter_title || '',
      locator: (loc.element_ids && loc.element_ids.length > 0) ? `${loc.element_ids[0]}..${loc.element_ids[loc.element_ids.length - 1]}` : (loc.document || ''),
      document_file: loc.document || '',
      element_ids: loc.element_ids || []
    },
    structural_position: {
      narrative_order: unit.structural_position ? unit.structural_position.relative_order : idx + 1,
      chronological_order: idx + 1,
      logical_level: null,
      book_percentage: unit.structural_position ? unit.structural_position.book_percentage : parseFloat(((idx + 1) / 78 * 100).toFixed(1))
    },
    source_sequence: idx + 1,
    title: unit.title || `Unit ${sourceUnitId}`,
    statement: unit.summary_statement,
    source_claims: claims,
    entities: entities,
    concepts: concepts,
    relationships: relationships,
    epistemic_status: unit.epistemic_status,
    source_voice: sourceVoice,
    assertion_modality: assertionModality,
    source_explicitness: 'SOURCE_EXPLICIT',
    confidence: unit.confidence ? unit.confidence.toUpperCase() : 'HIGH',
    materiality: (unit.materiality || 'CRITICAL').toUpperCase(),
    materiality_reason: unit.materiality_reason || '',
    temporal: {
      event_time: dt.event_time ? dt.event_time : (unit.temporal_anchor ? { raw: unit.temporal_anchor.date_raw } : null),
      record_time: dt.record_revelation_time ? dt.record_revelation_time : null,
      source_time: dt.source_time ? dt.source_time : { publication_year: 2022 },
      date_precision: (dt.event_time && dt.event_time.date_normalized) ? 'EXACT_DAY' : 'YEAR_OR_MONTH'
    },
    provenance: {
      source_evidence: unit.source_evidence || [],
      source_trace: (unit.source_provenance && unit.source_provenance.archival_citations ? unit.source_provenance.archival_citations.join('; ') : '') +
                    ' • Notes: ' + (unit.source_provenance && unit.source_provenance.notes_referenced ? unit.source_provenance.notes_referenced.join(', ') : ''),
      original_unit_reference: `${bookSlug}:content_units[${idx}]`
    },
    genre_specific_payload_reference: {
      genre: 'historical_biography',
      payload_pointer: `/content_units/${idx}/genre_specific_payload`
    },
    genre_specific_payload: payload,
    normalization: {
      concept_mappings: [],
      entity_mappings: [],
      claim_mappings: [],
      normalization_notes: 'Historical biography unit projected via Profile C preserving dual timeline and causal DAGs'
    }
  };
}

/**
 * Normalizes a certified Book Master and saves normalized artifacts
 */
function normalizeBookMaster(bookSlug) {
  const config = BOOK_CONFIGS[bookSlug];
  if (!config) {
    throw new Error(`Unknown book slug: ${bookSlug}`);
  }

  const bookDir = path.join(BASE_DIR, 'docs', 'distillations', bookSlug);
  const kuPath = path.join(bookDir, 'knowledge-units.json');

  if (!fs.existsSync(kuPath)) {
    throw new Error(`Knowledge units not found at: ${kuPath}`);
  }

  // Pre-normalization SHA-256
  const preHash = getFileHash(kuPath);

  // Read source Book Master in strictly read-only mode
  const sourceData = JSON.parse(fs.readFileSync(kuPath, 'utf-8'));
  const rawUnits = sourceData[config.unitsKey] || [];

  const normalizedUnits = [];

  rawUnits.forEach((unit, idx) => {
    let nxu;
    if (config.genre === 'literary_fiction') {
      nxu = normalizeFictionScene(unit, idx, bookSlug, config);
    } else if (config.genre === 'analytical_nonfiction') {
      nxu = normalizeNonfictionUnit(unit, idx, bookSlug, config);
    } else if (config.genre === 'historical_biography') {
      nxu = normalizeHistoricalUnit(unit, idx, bookSlug, config);
    }
    normalizedUnits.push(nxu);
  });

  // Post-normalization SHA-256 check
  const postHash = getFileHash(kuPath);
  if (preHash !== postHash) {
    throw new Error(`FATAL: Book Master was mutated during normalization! Pre: ${preHash}, Post: ${postHash}`);
  }

  const targetDir = path.join(bookDir, 'cross-book-normalized');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const unitsOutputPath = path.join(targetDir, 'normalized-units.json');
  const manifestOutputPath = path.join(targetDir, 'normalization-manifest.json');

  // Build Manifest (Deterministic: no random values or live timestamps in content)
  const manifest = {
    book_id: bookSlug,
    title: config.title,
    author: config.author,
    genre: config.genre,
    source_units_count: rawUnits.length,
    normalized_units_count: normalizedUnits.length,
    source_file_sha256: preHash,
    normalization_standard: 'BKRS Core Schema v1.0 / Step 5.1',
    schema_compliance: 'STRICT_READ_ONLY',
    reversibility: '100%_SOURCE_TRACEABLE',
    concept_mappings_populated: false,
    synthesis_units_generated: false,
    cross_book_relationships_generated: false
  };

  // Write deterministically with 2-space indentation
  fs.writeFileSync(unitsOutputPath, JSON.stringify(normalizedUnits, null, 2), 'utf-8');
  fs.writeFileSync(manifestOutputPath, JSON.stringify(manifest, null, 2), 'utf-8');

  console.log(`Normalized ${bookSlug}: ${normalizedUnits.length}/${rawUnits.length} units -> ${unitsOutputPath}`);
  return { manifest, normalizedUnits };
}

/**
 * Normalizes all three certified benchmarks
 */
function normalizeAll() {
  console.log("================================================================================");
  console.log("BKRS STEP 5.2: EXECUTING READ-ONLY CROSS-BOOK NORMALIZATION");
  console.log("================================================================================\n");

  const results = {};
  for (const slug of Object.keys(BOOK_CONFIGS)) {
    results[slug] = normalizeBookMaster(slug);
  }
  console.log("\nAll benchmarks normalized successfully.");
  return results;
}

if (require.main === module) {
  normalizeAll();
}

module.exports = {
  BOOK_CONFIGS,
  getFileHash,
  normalizeBookMaster,
  normalizeAll
};
