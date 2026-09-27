const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Add CSS styles for A4 PDF links and Print Depot banner if not already present
if (!html.includes('.book-pdf-link')) {
  const customStyles = `
    .book-actions-group {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .book-pdf-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--text-main);
      background: var(--bg-card);
      border: 1px solid var(--border-dark);
      padding: 4px 9px;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all 0.15s ease;
      white-space: nowrap;
    }
    .book-pdf-link:hover {
      background: var(--text-main);
      color: #ffffff;
      border-color: var(--text-main);
    }
    .a4-depot-banner {
      background: #ffffff;
      border: 1.5px solid var(--border-dark);
      border-left: 4px solid var(--text-main);
      padding: 16px 20px;
      border-radius: var(--radius-sm);
      margin-bottom: 28px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: var(--shadow-sm);
    }
    .a4-depot-content h3 {
      font-size: 17px;
      margin-bottom: 4px;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .a4-depot-content p {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.45;
    }
    .a4-depot-pill {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background: var(--bg-subtle);
      border: 1px solid var(--border-medium);
      color: var(--text-main);
      padding: 4px 10px;
      border-radius: 12px;
    }
  `;
  html = html.replace('</style>', customStyles + '\n  </style>');
}

// 2. Add A4 Print PDF buttons into book cards
const enterLinkRegex = /<a href="distillations\/([a-z0-9-]+)\/index\.html" class="book-enter-link">Enter Reader &rarr;<\/a>/g;

let count = 0;
html = html.replace(enterLinkRegex, (match, slug) => {
  count++;
  return `<div class="book-actions-group">
                <a href="pdf/${slug}-a4-print.pdf" target="_blank" class="book-pdf-link" title="Download Black & White A4 Print PDF (Optimized for Paper & Toner)">📄 A4 Print PDF</a>
                <a href="distillations/${slug}/index.html" class="book-enter-link">Enter Reader &rarr;</a>
              </div>`;
});

console.log(`Updated ${count} book cards with A4 PDF links.`);

// 3. Add an A4 Print Depot notice banner right above the grid/shelf if not present
if (!html.includes('class="a4-depot-banner"')) {
  const bannerHtml = `
      <!-- A4 Physical Print Edition Depot Banner -->
      <div class="a4-depot-banner">
        <div class="a4-depot-content">
          <h3>🖨️ A4 Black &amp; White Physical Print Editions Available</h3>
          <p>Every book in the Intellectualist library now features a dedicated, toner-friendly monochrome A4 PDF designed specifically for physical reading, marginal notes, and paper binding. Clean typography, running headers, and zero ink bleed.</p>
        </div>
        <div>
          <span class="a4-depot-pill">37 / 37 Books Ready</span>
        </div>
      </div>
  `;

  // Insert before books container/grid
  if (html.includes('<div class="books-grid" id="booksGrid">')) {
    html = html.replace('<div class="books-grid" id="booksGrid">', bannerHtml + '\n      <div class="books-grid" id="booksGrid">');
  } else if (html.includes('<main class="container')) {
    const mainPos = html.indexOf('<main class="container');
    const nextClose = html.indexOf('>', mainPos);
    html = html.slice(0, nextClose + 1) + '\n' + bannerHtml + html.slice(nextClose + 1);
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated docs/index.html with A4 Print PDF links and banner.');
