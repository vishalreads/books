/**
 * BKRS Data Adapter Layer
 * Transforms canonical knowledge-units.json into structured render-ready view models
 * while strictly preserving all source fields and metadata.
 */

const fs = require('fs');
const path = require('path');

function adaptKnowledgeUnits(kuPath) {
  const raw = fs.readFileSync(kuPath, 'utf8');
  const data = JSON.parse(raw);

  // Validate critical fields
  if (!data.book_id || !data.scenes || !Array.isArray(data.scenes)) {
    throw new Error(`Invalid BKRS Knowledge Units file at ${kuPath}: missing book_id or scenes array.`);
  }

  // 1. Group scenes by chapter
  const chaptersMap = new Map();
  const allCharacters = new Set();
  const allMotifs = new Set();
  const searchIndex = [];

  data.scenes.forEach((scene, index) => {
    const ch = scene.chapter || 1;
    if (!chaptersMap.has(ch)) {
      chaptersMap.set(ch, {
        chapter_number: ch,
        chapter_title: `Chapter ${ch}`,
        scenes: []
      });
    }

    // Attach previous and next navigation links
    const prevScene = index > 0 ? data.scenes[index - 1].scene_id : null;
    const nextScene = index < data.scenes.length - 1 ? data.scenes[index + 1].scene_id : null;

    const adaptedScene = {
      ...scene,
      prev_scene_id: prevScene,
      next_scene_id: nextScene,
      unit_index: index + 1,
      total_units: data.scenes.length
    };

    chaptersMap.get(ch).scenes.push(adaptedScene);

    // Collect characters and motifs
    (scene.participants || []).forEach(p => allCharacters.add(p.split('(')[0].trim()));
    (scene.motifs || []).forEach(m => allMotifs.add(m.replace('motif-', '').replace(/-/g, ' ')));

    // Build static search item
    searchIndex.push({
      id: scene.scene_id,
      chapter: scene.chapter,
      title: scene.location || `Scene ${scene.scene_id}`,
      snippet: scene.what_happens ? scene.what_happens.substring(0, 140) + '...' : '',
      content: [
        scene.what_happens,
        scene.why_this_matters,
        (scene.mundane_texture || []).join(' '),
        scene.dialogue_significance || ''
      ].join(' '),
      characters: scene.participants || [],
      motifs: scene.motifs || []
    });
  });

  const chapters = Array.from(chaptersMap.values()).sort((a, b) => a.chapter_number - b.chapter_number);

  return {
    metadata: {
      book_id: data.book_id,
      title: data.title,
      author: data.author,
      translator: data.translator,
      year: data.original_publication_year,
      setting: data.setting,
      genre: data.genre,
      system_version: data.system_version,
      reconstruction_metadata: data.reconstruction_metadata || {}
    },
    total_scenes: data.scenes.length,
    chapters: chapters,
    scenes: data.scenes,
    characters: Array.from(allCharacters).sort(),
    motifs: Array.from(allMotifs).sort(),
    search_index: searchIndex
  };
}

module.exports = {
  adaptKnowledgeUnits
};
