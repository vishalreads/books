/**
 * BKRS Universal Data Adapter Layer
 * Transforms canonical knowledge-units.json into structured render-ready view models
 * supporting both Fiction and Non-Fiction genres per BKRS v1.0 specifications.
 */

const fs = require('fs');
const path = require('path');

function adaptKnowledgeUnits(kuPath) {
  const raw = fs.readFileSync(kuPath, 'utf8');
  const data = JSON.parse(raw);

  const rawUnits = data.content_units || data.scenes || data.arguments;
  if (!data.book_id || !rawUnits || !Array.isArray(rawUnits)) {
    throw new Error(`Invalid BKRS Knowledge Units file at ${kuPath}: missing book_id or valid units array.`);
  }

  const genre = data.genre || (data.subgenre ? 'nonfiction' : 'literary_fiction');
  const isNonFiction = genre === 'nonfiction' || genre === 'analytical_nonfiction' || genre === 'technical';

  const chaptersMap = new Map();
  const allCharacters = new Set();
  const allMotifs = new Set();
  const allStudies = [];
  const allHeuristics = [];
  const searchIndex = [];

  rawUnits.forEach((unit, index) => {
    const ch = unit.chapter !== undefined ? unit.chapter : (unit.source_location?.chapter || 1);
    const chTitle = unit.chapter_title || (ch === 0 ? "Introduction" : (ch === 21 && isNonFiction ? "Postscript" : `Chapter ${ch}`));

    if (!chaptersMap.has(ch)) {
      chaptersMap.set(ch, {
        chapter_number: ch,
        chapter_title: chTitle,
        units: []
      });
    }

    const prevUnitId = index > 0 ? (rawUnits[index - 1].unit_id || rawUnits[index - 1].scene_id) : null;
    const nextUnitId = index < rawUnits.length - 1 ? (rawUnits[index + 1].unit_id || rawUnits[index + 1].scene_id) : null;

    const unitId = unit.unit_id || unit.scene_id;
    const adaptedUnit = {
      ...unit,
      unit_id: unitId,
      scene_id: unitId, // for backward compatibility with existing reader templates
      prev_unit_id: prevUnitId,
      next_unit_id: nextUnitId,
      unit_index: index + 1,
      total_units: rawUnits.length
    };

    chaptersMap.get(ch).units.push(adaptedUnit);

    // Extraction for fiction
    if (unit.participants && Array.isArray(unit.participants)) {
      unit.participants.forEach(p => allCharacters.add(p.split('(')[0].trim()));
    }
    if (unit.motifs && Array.isArray(unit.motifs)) {
      unit.motifs.forEach(m => allMotifs.add(m.replace('motif-', '').replace(/-/g, ' ')));
    }

    // Extraction for nonfiction
    if (unit.genre_payload) {
      const gp = unit.genre_payload;
      if (gp.empirical_studies && Array.isArray(gp.empirical_studies)) {
        gp.empirical_studies.forEach(s => allStudies.push({ ...s, unit_id: unitId, chapter: ch }));
      }
      if (gp.actionable_heuristic) {
        allHeuristics.push({ heuristic: gp.actionable_heuristic, unit_id: unitId, chapter: ch, title: chTitle });
      }
    }

    // Static Search Index
    let titleStr = '';
    let bodySnippet = '';
    let fullText = '';

    if (isNonFiction) {
      const gp = unit.genre_payload || {};
      titleStr = `${chTitle}: ${gp.argument_id || unitId}`;
      bodySnippet = gp.thesis_claim || unit.summary_statement || '';
      fullText = [
        chTitle,
        unit.summary_statement || '',
        gp.thesis_claim || '',
        gp.actionable_heuristic || '',
        JSON.stringify(gp.logical_chain || []),
        JSON.stringify(gp.primary_evidence || []),
        JSON.stringify(gp.historical_cases || []),
        JSON.stringify(gp.quantitative_models || []),
        unit.materiality_reason || ''
      ].join(' ');
    } else {
      titleStr = unit.location || `Scene ${unitId}`;
      bodySnippet = unit.what_happens ? unit.what_happens.substring(0, 140) + '...' : '';
      fullText = [
        unit.what_happens || '',
        unit.why_this_matters || '',
        (unit.mundane_texture || []).join(' '),
        unit.dialogue_significance || ''
      ].join(' ');
    }

    searchIndex.push({
      id: unitId,
      chapter: ch,
      title: titleStr,
      snippet: bodySnippet.substring(0, 160) + (bodySnippet.length > 160 ? '...' : ''),
      content: fullText,
      characters: unit.participants || [],
      motifs: unit.motifs || []
    });
  });

  const chapters = Array.from(chaptersMap.values()).sort((a, b) => a.chapter_number - b.chapter_number);

  return {
    metadata: {
      book_id: data.book_id,
      title: data.title,
      author: data.author,
      translator: data.translator || null,
      year: data.original_publication_year,
      publisher: data.publisher || null,
      genre: genre,
      subgenre: data.subgenre || null,
      epistemic_classification: data.epistemic_classification || null,
      system_version: data.system_version || '1.0',
      reconstruction_metadata: data.reconstruction_metadata || {}
    },
    genre: genre,
    is_nonfiction: isNonFiction,
    total_units: rawUnits.length,
    chapters: chapters,
    units: rawUnits,
    facets: {
      characters: Array.from(allCharacters).sort(),
      motifs: Array.from(allMotifs).sort(),
      empirical_studies: allStudies,
      actionable_heuristics: allHeuristics
    },
    search_index: searchIndex
  };
}

module.exports = {
  adaptKnowledgeUnits
};
