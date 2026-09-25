const fs = require('fs');
const path = require('path');

// 1. Update docs/library-index.json
const libIndexPath = path.join(__dirname, '..', 'docs', 'library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf-8'));

const nwEntry = {
  id: "norwegian-wood",
  title: "Norwegian Wood",
  subtitle: "A Forensic Autopsy of Grief, Suicide Contagion, and the Integration of Death into Life",
  author: "Haruki Murakami",
  year: 1987,
  publisher: "Kodansha / Vintage International (Jay Rubin Translation)",
  epistemic_tier: "Tier 1/2: Elegiac Existential Realism & Forensic Trauma",
  tier_short: "Tier 1/2",
  category: "Trauma Dynamics, IPV & Narrative Psychology",
  original_volume: "3,630 Paragraphs (11 Chapters)",
  reading_time_saved: "10.5 hrs saved",
  hours_val: 10.5,
  core_axiom: "Death exists, not as the opposite but as a part of life. By living our lives, we nurture death.",
  tags: [
    "Grief",
    "Suicide Contagion",
    "Trauma",
    "Thanatos vs Eros",
    "Ami Hostel",
    "Elegiac Realism"
  ],
  key_models: [
    "The Integration of Death Axiom (Compressed Node inside Life)",
    "The Dichotomy of the Two Women: Thanatos (Naoko) vs Eros (Midori)",
    "The Phantom Meadow Well (Latent Clinical Madness)",
    "The Strawberry Shortcake Heuristic for Unconditional Acceptance",
    "The Werther Effect in Adolescent Triads",
    "The Kichijoji Requiem Wake (51 Guitar Songs as Secular Exorcism)"
  ],
  landmark_studies: [
    "David Phillips' Werther Effect / Suicide Contagion Epidemiology (1974)",
    "ICD-11 / Prigerson Prolonged Grief Disorder Criteria",
    "Functional Neurological Disorder / Psychogenic Conversion Paralysis (Reiko)",
    "Thomas Mann's Sanatorium Inversion Dynamics (The Magic Mountain / Ami Hostel)"
  ],
  html_path: "distillations/norwegian-wood/index.html",
  markdown_path: "distillations/norwegian-wood/master-notes.md",
  featured: true
};

// Check if already in library-index.json
const existingIdx = libIndex.books.findIndex(b => b.id === "norwegian-wood");
if (existingIdx >= 0) {
  libIndex.books[existingIdx] = nwEntry;
} else {
  libIndex.books.push(nwEntry);
  libIndex.total_books = libIndex.books.length;
  libIndex.total_hours_saved = parseFloat((libIndex.total_hours_saved + 10.5).toFixed(1));
}
libIndex.last_updated = "2026-09-25";

fs.writeFileSync(libIndexPath, JSON.stringify(libIndex, null, 2), 'utf-8');
console.log(`Updated library-index.json: total_books = ${libIndex.total_books}, total_hours_saved = ${libIndex.total_hours_saved}`);

// 2. Update docs/catalog-500.json
const catalogPath = path.join(__dirname, '..', 'docs', 'catalog-500.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

// Check if norwegian-wood exists in catalog or add it to Pillar 9
let catNw = catalog.books.find(b => b.id === "norwegian-wood");
if (!catNw) {
  catNw = {
    id: "norwegian-wood",
    title: "Norwegian Wood",
    subtitle: "A Forensic Autopsy of Grief, Suicide Contagion, and the Integration of Death into Life",
    author: "Haruki Murakami",
    year: 1987,
    pillar_id: 9,
    pillar_name: "Master Narrative Fiction, Trauma & The Human Condition",
    epistemic_tier: "Tier 1/2: Elegiac Existential Realism & Forensic Trauma",
    tier_short: "Tier 1/2",
    status: "distilled",
    core_axiom: "Death exists, not as the opposite but as a part of life; by living our lives, we nurture death.",
    emotional_stakes: "The violent acoustic shudder of hearing 'Norwegian Wood' at Hamburg; the bottomless well in the meadow; the agony of loving someone whose soul is permanently entombed with the dead; Midori's rooftop beer in the fire smoke; the final cry into the phone booth void: 'Where are you now?' 'I was nowhere.'",
    key_models: [
      "The Integration of Death Axiom (Death inside Life)",
      "Thanatos (Naoko) vs Eros (Midori) Dichotomy",
      "The Phantom Meadow Well",
      "The Strawberry Shortcake Heuristic for Unconditional Love",
      "Werther Effect Suicide Contagion Clusters"
    ],
    landmark_studies: [
      "David Phillips Werther Effect / Suicide Contagion Research (1974)",
      "ICD-11 Prolonged Grief Disorder Criteria",
      "Functional Neurological Disorder / Psychogenic Paralysis (Reiko)",
      "Thomas Mann Sanatorium Inversion Dynamics (Ami Hostel)"
    ],
    reading_time_saved: "10.5 hrs saved",
    original_volume: "3,630 Paragraphs (11 Chapters)",
    markdown_path: "distillations/norwegian-wood/master-notes.md",
    html_path: "distillations/norwegian-wood/index.html"
  };
  catalog.books.push(catNw);
} else {
  catNw.status = "distilled";
  catNw.markdown_path = "distillations/norwegian-wood/master-notes.md";
  catNw.html_path = "distillations/norwegian-wood/index.html";
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`Updated catalog-500.json with Norwegian Wood!`);
