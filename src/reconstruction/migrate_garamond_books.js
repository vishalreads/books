const fs = require('fs');
const path = require('path');

const books = [
  'ajahn-dtun-autobiography',
  'lolita',
  'master-and-margarita',
  'the-metaphysical-club',
  'the-mosquito',
  'the-urge-history-of-addiction'
];

books.forEach(b => {
  const filePath = path.join('docs/distillations', b, 'index.html');
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Add data-theme="cream" to html tag
  if (!html.includes('data-theme=')) {
    html = html.replace('<html lang="en">', '<html lang="en" data-theme="cream">');
  }

  // 2. Add reader-shell stylesheets after favicon
  const shellLinks = `  <link rel="stylesheet" href="../../assets/css/theme.css">\n  <link rel="stylesheet" href="../../assets/css/typography.css">\n  <link rel="stylesheet" href="../../assets/css/reader-shell.css">\n`;
  if (!html.includes('reader-shell.css')) {
    html = html.replace('<link rel="preconnect" href="https://fonts.googleapis.com">', shellLinks + '  <link rel="preconnect" href="https://fonts.googleapis.com">');
  }

  // 3. Add reader-controls.js before </body>
  if (!html.includes('reader-controls.js')) {
    html = html.replace('</body>', '  <script src="../../assets/js/reader-controls.js"></script>\n</body>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Migrated: ${b}`);
});
