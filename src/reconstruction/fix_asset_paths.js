const fs = require('fs');
const path = require('path');

const books = [
  'the-great-gatsby',
  'heart-of-darkness',
  'the-picture-of-dorian-gray',
  'the-metamorphosis-and-other-stories',
  'elon-musk'
];

books.forEach(b => {
  const p = path.join(__dirname, '..', '..', 'docs', 'distillations', b, 'index.html');
  if (fs.existsSync(p)) {
    let html = fs.readFileSync(p, 'utf8');
    html = html.replace('href="../../css/reader-shell.css"', 'href="../../assets/css/reader-shell.css"');
    html = html.replace('src="../../js/reader-controls.js"', 'src="../../assets/js/reader-controls.js"');
    fs.writeFileSync(p, html, 'utf8');
    console.log('Fixed asset paths in:', b);
  }
});
