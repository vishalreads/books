const fs = require('fs');
const path = require('path');

const slugs = [
  'astrology-for-beginners',
  'astrology-speed-of-light',
  'predict-with-navamsha',
  'ancient-hindu-astrology-braha',
  'black-love-signs'
];

slugs.forEach(slug => {
  const htmlPath = path.join(__dirname, '..', '..', 'docs', 'distillations', slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error(`Missing HTML for ${slug}`);
    return;
  }
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Ensure data-theme="cream"
  html = html.replace(/<html([^>]*)>/i, (match, p1) => {
    let attrs = p1;
    if (attrs.includes('data-theme=')) {
      attrs = attrs.replace(/data-theme=["'][^"']*["']/i, 'data-theme="cream"');
    } else {
      attrs += ' data-theme="cream"';
    }
    return `<html${attrs}>`;
  });

  // Ensure reader-shell.css link in <head>
  if (!html.includes('reader-shell.css')) {
    html = html.replace(/<head>/i, '<head>\n  <link rel="stylesheet" href="../../assets/css/reader-shell.css">');
  }

  // Ensure reader-controls.js script in <body>
  if (!html.includes('reader-controls.js')) {
    html = html.replace(/<\/body>/i, '  <script src="../../assets/js/reader-controls.js"></script>\n</body>');
  }

  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`Updated ${slug}/index.html`);
});
