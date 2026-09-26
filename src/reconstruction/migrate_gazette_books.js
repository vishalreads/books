const fs = require('fs');
const path = require('path');

const books = [
  'autobiography-of-a-yogi',
  'dont-bug-me',
  'it-ends-with-us',
  'open-source-intelligence-techniques'
];

books.forEach(b => {
  const filePath = path.join('docs/distillations', b, 'index.html');
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Add data-theme="cream" to html tag
  if (!html.includes('data-theme=')) {
    html = html.replace('<html lang="en">', '<html lang="en" data-theme="cream">');
  }

  // 2. Add shell stylesheets after title
  const shellLinks = `\n  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">\n  <link rel="stylesheet" href="../../assets/css/theme.css">\n  <link rel="stylesheet" href="../../assets/css/typography.css">\n  <link rel="stylesheet" href="../../assets/css/reader-shell.css">`;
  if (!html.includes('reader-shell.css')) {
    html = html.replace(/<title>[^<]+<\/title>/, (m) => m + shellLinks);
  }

  // 3. Add reader-controls.js before </body>
  if (!html.includes('reader-controls.js')) {
    html = html.replace('</body>', '  <script src="../../assets/js/reader-controls.js"></script>\n</body>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Migrated: ${b}`);
});
