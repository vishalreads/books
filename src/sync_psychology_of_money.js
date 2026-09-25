const fs = require('fs');
const path = require('path');

// 1. Update docs/library-index.json
const libIndexPath = path.join(__dirname, '..', 'docs', 'library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf-8'));

const pomEntry = {
  id: "the-psychology-of-money",
  title: "The Psychology of Money",
  subtitle: "Timeless Lessons on Wealth, Greed, and Happiness",
  author: "Morgan Housel",
  year: 2020,
  publisher: "Harriman House",
  epistemic_tier: "Tier 2: Behavioral Finance & Applied Economic Psychology",
  tier_short: "Tier 2",
  category: "Applied Financial Mindset & Cash Flow Architecture",
  original_volume: "242 Pages (20 Chapters + Introduction & Postscript)",
  reading_time_saved: "6.5 hrs saved",
  hours_val: 6.5,
  core_axiom: "Doing well with money is not a science of mathematics or finance; it is a soft skill of psychology and behavior control.",
  tags: [
    "Behavioral Finance",
    "Compounding",
    "Frugality",
    "Margin of Safety",
    "Psychology",
    "Wealth"
  ],
  key_models: [
    "The Wealth Asymmetry (Getting Wealthy vs. Staying Wealthy)",
    "Wealth is What You Don't See (Hidden Options vs. Conspicuous Display)",
    "The Man in the Car Paradox (Admiration vs. Object Fetishization)",
    "Reasonable > Rational (Psychological Durability over Mathematical Perfection)",
    "Tails Rule Everything (Fat-Tail Distributions in Returns)",
    "The End of History Illusion (Underestimating Future Personal Change)"
  ],
  landmark_studies: [
    "Ulrike Malmendier & Stefan Nagel Generational Risk Tolerance NBER Study (2011)",
    "Angus Campbell University of Michigan Sense of Well-Being Survey (1981)",
    "Jordi Quoidbach & Daniel Gilbert End of History Illusion (Science, 2013)",
    "Russell 3000 Index 34-Year Tail-Return Deconstruction (J.P. Morgan, 2014)"
  ],
  html_path: "distillations/the-psychology-of-money/index.html",
  markdown_path: "distillations/the-psychology-of-money/master-notes.md",
  featured: true
};

const existingIdx = libIndex.books.findIndex(b => b.id === "the-psychology-of-money");
if (existingIdx >= 0) {
  libIndex.books[existingIdx] = pomEntry;
} else {
  libIndex.books.push(pomEntry);
  libIndex.total_books = libIndex.books.length;
  libIndex.total_hours_saved = parseFloat((libIndex.total_hours_saved + 6.5).toFixed(1));
}
libIndex.last_updated = "2026-09-25";

fs.writeFileSync(libIndexPath, JSON.stringify(libIndex, null, 2), 'utf-8');
console.log(`Updated library-index.json: total_books = ${libIndex.total_books}, total_hours_saved = ${libIndex.total_hours_saved}`);

// 2. Update docs/catalog-500.json
const catalogPath = path.join(__dirname, '..', 'docs', 'catalog-500.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

let catPom = catalog.books.find(b => b.id === "the-psychology-of-money");
if (catPom) {
  catPom.status = "distilled";
  catPom.markdown_path = "distillations/the-psychology-of-money/master-notes.md";
  catPom.html_path = "distillations/the-psychology-of-money/index.html";
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`Updated catalog-500.json with The Psychology of Money marked as distilled!`);
