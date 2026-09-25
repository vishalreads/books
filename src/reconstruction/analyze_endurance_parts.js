const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'scratch', 'endurance_extracted');

const parts = [
  { part: 'PART I', name: 'The Pack', splits: [3, 4, 5, 6, 7, 8, 9, 10] },
  { part: 'PART II', name: 'Ocean Camp & Sinking', splits: [11, 12, 13, 14, 15, 16] },
  { part: 'PART III', name: 'Patience Camp & The Drift', splits: [17, 18, 19, 20, 21, 22] },
  { part: 'PART IV', name: 'Escape in Open Boats', splits: [23, 24, 25, 26, 27] },
  { part: 'PART V', name: 'Elephant Island Vigil', splits: [28, 29, 30, 31, 32, 33] },
  { part: 'PART VI', name: 'Voyage of the James Caird', splits: [34, 35, 36, 37, 38, 39] },
  { part: 'PART VII', name: 'South Georgia Mountain Crossing', splits: [40, 41, 42] },
  { part: 'EPILOGUE', name: 'The Rescue & Legacy', splits: [43] }
];

parts.forEach(p => {
  console.log(`\n=== ${p.part}: ${p.name} ===`);
  p.splits.forEach(s => {
    const filename = `book_split_${String(s).padStart(3, '0')}.html`;
    const fPath = path.join(targetDir, filename);
    if (!fs.existsSync(fPath)) return;
    const txt = fs.readFileSync(fPath, 'utf8').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const preview = txt.substring(0, 160);
    console.log(` Split ${s} (${txt.length} chars): ${preview}...`);
  });
});
