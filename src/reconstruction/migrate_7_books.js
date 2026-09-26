const fs = require('fs');
const path = require('path');

const books = [
  'brave-new-world',
  'gandhi-experiments-with-truth',
  'homage-to-catalonia',
  'open-agassi',
  'scientific-autobiography-planck',
  'siddhartha',
  'tuesdays-with-morrie'
];

books.forEach(b => {
  const filePath = path.join('docs/distillations', b, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Add data-theme="cream" to html tag if not present
  if (!html.includes('data-theme=')) {
    html = html.replace('<html lang="en">', '<html lang="en" data-theme="cream">');
  }

  // 2. Fix broken reader-style.css link
  const targetCss = `  <link rel="stylesheet" href="../../assets/css/theme.css">\n  <link rel="stylesheet" href="../../assets/css/typography.css">\n  <link rel="stylesheet" href="../../assets/css/reader-shell.css">`;
  html = html.replace(/<link[^>]+href=["']\.\.\/\.\.\/css\/reader-style\.css["'][^>]*>/g, targetCss);

  // 3. Add reader-controls.js before </body> if not present
  if (!html.includes('reader-controls.js')) {
    html = html.replace('</body>', '  <script src="../../assets/js/reader-controls.js"></script>\n</body>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Migrated: ${b}`);
});
