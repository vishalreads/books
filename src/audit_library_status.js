const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('docs/distillations');
const rows = [];

dirs.forEach(d => {
  const p = path.join('docs/distillations', d);
  if (!fs.statSync(p).isDirectory()) return;
  const htmlPath = path.join(p, 'index.html');
  const mdPath = path.join(p, 'master-notes.md');
  const kuPath = path.join(p, 'knowledge-units.json');
  
  let htmlExists = fs.existsSync(htmlPath);
  let theme = 'none';
  let hasShell = false;
  let hasControls = false;
  if (htmlExists) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const m = html.match(/data-theme=["']([^"']+)["']/);
    theme = m ? m[1] : (html.includes('#0f172a') || html.includes('#090a0f') || html.includes('#0d1117') ? 'dark-inline' : 'unspecified');
    hasShell = html.includes('reader-shell.css');
    hasControls = html.includes('reader-controls.js');
  }
  
  let mdChars = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8').length : 0;
  let kuCount = 0;
  if (fs.existsSync(kuPath)) {
    try {
      const ku = JSON.parse(fs.readFileSync(kuPath, 'utf8'));
      kuCount = Array.isArray(ku) ? ku.length : (ku.units ? ku.units.length : (ku.scenes ? ku.scenes.length : Object.keys(ku).length));
    } catch(e) { kuCount = 'err'; }
  }
  rows.push({ slug: d, theme, hasShell, hasControls, kuCount, mdChars });
});

console.table(rows);
