const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', '..', 'docs', 'distillations');
const dirs = fs.readdirSync(distDir).filter(d => fs.statSync(path.join(distDir, d)).isDirectory());

const results = [];

dirs.forEach(d => {
  const mdPath = path.join(distDir, d, 'master-notes.md');
  const jsonPath = path.join(distDir, d, 'knowledge-units.json');
  let title = d;
  let author = 'BKRS Master';

  if (fs.existsSync(mdPath)) {
    const lines = fs.readFileSync(mdPath, 'utf8').split('\n').slice(0, 15);
    for (const line of lines) {
      if (line.startsWith('# ')) {
        title = line.replace(/^#\s+/, '').replace(/\s*[:—].*$/, '').replace(/\*+/g, '').trim();
      }
      if (line.includes('**Author:**') || line.includes('**Author**:') || line.includes('- **Author**:')) {
        author = line.replace(/.*?\*\*Author:?\*\*:?\s*/i, '').replace(/\s*\(.*?\)/, '').trim();
      }
    }
  }

  results.push({ slug: d, title, author });
});

console.log(JSON.stringify(results, null, 2));
