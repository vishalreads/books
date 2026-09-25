/**
 * BKRS Universal Data Adapter Layer
 * Transforms canonical knowledge-units.json into structured render-ready view models
 * supporting Fiction, Analytical Nonfiction, and Historical Biography per BKRS v1.0 specifications.
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

  const rawGenre = data.genre || (data.subgenre ? 'nonfiction' : 'literary_fiction');
  const isHistorical = rawGenre === 'historical_biography' || rawGenre === 'history' || rawGenre === 'biography';
  const isNonFiction = rawGenre === 'nonfiction' || rawGenre === 'analytical_nonfiction' || rawGenre === 'technical';
  const isFiction = rawGenre === 'literary_fiction' || (!isHistorical && !isNonFiction);

  const chaptersMap = new Map();
  const allCharacters = new Set();
  const allMotifs = new Set();
  const allStudies = [];
  const allHeuristics = [];
  const allEntitiesMap = new Map();
  const allCausalEdges = [];
  const allRelationalEdges = [];
  const allPlates = [];
  const allDisputes = [];
  const searchIndex = [];

  rawUnits.forEach((unit, index) => {
    // Determine chapter number and key
    let chNum = 1;
    if (unit.chapter !== undefined) {
      chNum = unit.chapter;
    } else if (unit.source_location && unit.source_location.chapter_number !== undefined) {
      chNum = unit.source_location.chapter_number;
    } else if (unit.source_location && unit.source_location.chapter !== undefined) {
      chNum = unit.source_location.chapter;
    }

    let chKey = String(chNum);
    let chTitle = '';

    if (isHistorical) {
      if (chNum === 0) {
        if (unit.unit_id && unit.unit_id.includes('EPIGRAPH')) {
          chKey = '0-epigraph';
          chTitle = 'Epigraph';
        } else {
          chKey = '0-prologue';
          chTitle = 'Prologue: A Life in Revolution';
        }
      } else if (chNum === 56) {
        chKey = '56-appendix';
        chTitle = 'Appendix: Archival Document Plates';
      } else {
        chTitle = (unit.source_location && unit.source_location.chapter_title) ||
                  (unit.structural_position && unit.structural_position.chapter) ||
                  `Chapter ${chNum}`;
      }
    } else {
      if (data.book_id === 'norwegian-wood') {
        const nwTitles = {
          1: "The Boeing 747 at Hamburg & The Phantom Meadow",
          2: "The Kobe Triad & Kizuki's Silent Exhaust Pipe",
          3: "Sunday Walks in Tokyo & Naoko's 20th Birthday",
          4: "The Electra Lecture & The Shadow of Nagasawa",
          5: "Fire on the Rooftop & The Kobayashi Bookstore",
          6: "Ami Hostel & The Pine Wood Confessions",
          7: "The Strike Collapses & Midori's Hospital Vigil",
          8: "The Terminal Ward & The Cucumber Vigil",
          9: "The Farewell Dinner & Hatsumi's Doomed Billiard Game",
          10: "Naoko's Relapse & The Final Winter in Kyoto",
          11: "The Requiem Wake, Coastal Wandering & The Telephone Booth"
        };
        chTitle = nwTitles[chNum] || `Chapter ${chNum}`;
      } else {
        chTitle = unit.chapter_title || (chNum === 0 ? "Introduction" : (chNum === 21 && isNonFiction ? "Postscript" : `Chapter ${chNum}`));
      }
    }

    if (!chaptersMap.has(chKey)) {
      chaptersMap.set(chKey, {
        chapter_key: chKey,
        chapter_number: chNum,
        chapter_title: chTitle,
        part: unit.structural_position ? unit.structural_position.part : null,
        units: []
      });
    }

    const prevUnitId = index > 0 ? (rawUnits[index - 1].unit_id || rawUnits[index - 1].scene_id) : null;
    const nextUnitId = index < rawUnits.length - 1 ? (rawUnits[index + 1].unit_id || rawUnits[index + 1].scene_id) : null;

    const unitId = unit.unit_id || unit.scene_id;
    const adaptedUnit = {
      ...unit,
      unit_id: unitId,
      scene_id: unitId, // for backward compatibility with existing templates
      prev_unit_id: prevUnitId,
      next_unit_id: nextUnitId,
      unit_index: index + 1,
      total_units: rawUnits.length,
      chapter: chNum,
      chapter_title: chTitle
    };

    chaptersMap.get(chKey).units.push(adaptedUnit);

    // Extraction for fiction
    if (isFiction) {
      if (unit.participants && Array.isArray(unit.participants)) {
        unit.participants.forEach(p => allCharacters.add(p.split('(')[0].trim()));
      }
      if (unit.motifs && Array.isArray(unit.motifs)) {
        unit.motifs.forEach(m => allMotifs.add(m.replace('motif-', '').replace(/-/g, ' ')));
      }
    }

    // Extraction for analytical nonfiction
    if (isNonFiction) {
      if (unit.genre_payload) {
        const gp = unit.genre_payload;
        if (gp.empirical_studies && Array.isArray(gp.empirical_studies)) {
          gp.empirical_studies.forEach(s => allStudies.push({ ...s, unit_id: unitId, chapter: chNum }));
        }
        if (gp.actionable_heuristic) {
          allHeuristics.push({ heuristic: gp.actionable_heuristic, unit_id: unitId, chapter: chNum, title: chTitle });
        }
      }
    }

    // Extraction for historical biography
    if (isHistorical) {
      if (unit.entities && Array.isArray(unit.entities)) {
        unit.entities.forEach(ent => {
          const eid = ent.entity_id || ent.name;
          if (!allEntitiesMap.has(eid)) {
            allEntitiesMap.set(eid, { ...ent, appearances: [] });
          }
          allEntitiesMap.get(eid).appearances.push(unitId);
        });
      }
      if (unit.causal_relationships && Array.isArray(unit.causal_relationships)) {
        unit.causal_relationships.forEach(cr => {
          allCausalEdges.push({
            source_unit_id: unitId,
            source_title: unit.title,
            ...cr
          });
        });
      }
      if (unit.relationships && Array.isArray(unit.relationships)) {
        unit.relationships.forEach(rel => {
          allRelationalEdges.push({
            source_unit_id: unitId,
            source_title: unit.title,
            ...rel
          });
        });
      }
      if (unit.unit_type === "DOCUMENT_UNIT" && unit.genre_specific_payload) {
        allPlates.push({
          unit_id: unitId,
          title: unit.title,
          source_location: unit.source_location,
          payload: unit.genre_specific_payload
        });
      }
      if (unit.competing_accounts && Array.isArray(unit.competing_accounts) && unit.competing_accounts.length > 0) {
        allDisputes.push({
          unit_id: unitId,
          title: unit.title,
          competing_accounts: unit.competing_accounts
        });
      }
    }

    // Build Static Search Index
    let titleStr = '';
    let bodySnippet = '';
    let fullText = '';
    let searchEntities = [];

    if (isHistorical) {
      titleStr = unit.title || `Unit ${unitId}`;
      bodySnippet = unit.summary_statement || '';
      searchEntities = unit.entities && Array.isArray(unit.entities) ? unit.entities.map(e => e.name) : [];
      fullText = [
        chTitle,
        unit.title || '',
        unit.summary_statement || '',
        unit.epistemic_status || '',
        unit.materiality_reason || '',
        searchEntities.join(' '),
        JSON.stringify(unit.source_evidence || []),
        JSON.stringify(unit.causal_relationships || []),
        JSON.stringify(unit.competing_accounts || []),
        JSON.stringify(unit.context || {}),
        JSON.stringify(unit.genre_specific_payload || {})
      ].join(' ');
    } else if (isNonFiction) {
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
      chapter: chNum,
      title: titleStr,
      snippet: bodySnippet.substring(0, 160) + (bodySnippet.length > 160 ? '...' : ''),
      content: fullText,
      entities: searchEntities,
      characters: unit.participants || [],
      motifs: unit.motifs || []
    });
  });

  const chapters = Array.from(chaptersMap.values());
  chapters.sort((a, b) => {
    if (a.chapter_number !== b.chapter_number) {
      return a.chapter_number - b.chapter_number;
    }
    if (a.chapter_key && a.chapter_key.includes('epigraph')) return -1;
    if (b.chapter_key && b.chapter_key.includes('epigraph')) return 1;
    return 0;
  });

  return {
    metadata: {
      book_id: data.book_id,
      title: data.title,
      author: data.author,
      translator: data.translator || null,
      year: data.original_publication_year,
      publisher: data.publisher || null,
      genre: rawGenre,
      subgenre: data.subgenre || null,
      epistemic_classification: data.epistemic_classification || null,
      system_version: data.system_version || '1.0',
      reconstruction_metadata: data.reconstruction_metadata || {}
    },
    genre: rawGenre,
    is_nonfiction: isNonFiction,
    is_fiction: isFiction,
    is_historical: isHistorical,
    total_units: rawUnits.length,
    chapters: chapters,
    units: rawUnits,
    facets: {
      characters: Array.from(allCharacters).sort(),
      motifs: Array.from(allMotifs).sort(),
      empirical_studies: allStudies,
      actionable_heuristics: allHeuristics,
      entities: Array.from(allEntitiesMap.values()),
      causal_relationships: allCausalEdges,
      relationships: allRelationalEdges,
      archival_plates: allPlates,
      competing_accounts: allDisputes
    },
    search_index: searchIndex
  };
}

module.exports = {
  adaptKnowledgeUnits
};
