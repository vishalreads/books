const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'library-index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

if (!data.books.find(b => b.id === 'the-art-of-war')) {
  const newBook = {
    id: "the-art-of-war",
    title: "The Art of War",
    subtitle: "The Definitive Translation and Strategic Commentary of the Thirteen Classical Chapters",
    author: "Sun Tzu (trans. Thomas Cleary & Lionel Giles)",
    year: "5th Century BC / 2011",
    publisher: "Shambhala Publications / Intellectualist Classical Strategy Series",
    epistemic_tier: "Tier 1: Foundational Military Philosophy & Heuristics",
    tier_short: "Tier 1",
    category: "Realpolitik, Strategy & Courtier Dynamics",
    original_volume: "13 Chapters (26 Irreducible Strategic Units, Complete Heuristic Trees)",
    reading_time_saved: "12.0 hrs saved",
    hours_val: 12.0,
    core_axiom: "Supreme excellence consists in breaking the enemy's resistance without fighting. All warfare is based on deception.",
    tags: [
      "Sun Tzu",
      "Strategy",
      "Deception",
      "Zheng and Qi",
      "Terrain Calculus",
      "Espionage",
      "Realpolitik"
    ],
    key_models: [
      "The Five Constant Factors (Tao, Heaven, Earth, General, Discipline)",
      "The Deception Matrix (12 Asymmetrical Inversions)",
      "The Four-Tiered Hierarchy of Victory (Strategy > Alliances > Army > Cities)",
      "The Five Force Ratios (10:1 surround, 5:1 attack, 2:1 divide)",
      "Direct (Zheng) and Indirect (Qi) Forces",
      "The Mount Chang Serpent (Shuai-ran Mutual Defense)",
      "The Five Classes of Spies (Converted Spy Linchpin)"
    ],
    landmark_studies: [
      "Thirteen Classical Chapters of Sun Wu (Spring and Autumn Period)",
      "Commentaries of Cao Cao (Three Kingdoms Era)",
      "Commentaries of Du Mu and Zhang Yu (Tang and Song Dynasties)",
      "Lionel Giles British Museum Critical Translation (1910)",
      "Thomas Cleary Shambhala Classics Edition (1988/2011)"
    ],
    html_path: "distillations/the-art-of-war/index.html",
    markdown_path: "distillations/the-art-of-war/master-notes.md",
    featured: false
  };

  data.books.push(newBook);
  data.total_books = data.books.length;
  data.total_hours_saved += 12.0;
  fs.writeFileSync(indexPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log("Successfully added the-art-of-war to library-index.json!");
  console.log("Total books:", data.total_books, "Total hours saved:", data.total_hours_saved);
} else {
  console.log("the-art-of-war already exists in library-index.json");
}
