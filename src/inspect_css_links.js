const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('docs/distillations');
dirs.forEach(d => {
  const p = path.join('docs/distillations', d, 'index.html');
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const links = content.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/g) || [];
    const broken = links.filter(l => l.includes('css/reader-style.css'));
    if (broken.length > 0) {
      console.log(`${d}: has broken reader-style.css link`);
    }
  }
});
