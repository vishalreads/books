const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace the book-actions-group containing the individual PDF link back to just the enter reader/codex link
const groupRegex = /<div class="book-actions-group">\s*<a href="pdf\/[a-z0-9-]+-a4-print\.pdf"[^>]*>📄 A4 Print PDF<\/a>\s*(<a href="distillations\/[a-z0-9-]+\/index\.html" class="book-enter-link">[^<]+<\/a>)\s*<\/div>/g;

let count = 0;
html = html.replace(groupRegex, (match, enterLink) => {
  count++;
  return enterLink;
});

console.log(`Reverted ${count} card action groups back to standard reader links.`);

// Update the Omnibus depot banner text to cleanly showcase the unified Master Omnibus
const oldBannerRegex = /<!-- A4 Print & Master Omnibus Depot Banner -->[\s\S]*?<\/div>\s*<\/div>/;
const newBannerHtml = `<!-- Master Omnibus Banner -->
      <div class="a4-depot-banner">
        <div class="a4-depot-content">
          <h3>📖 The Complete Intellectualist Master Omnibus (37 Books in 1 Volume)</h3>
          <p>Download the grand unified <strong>789-page Master Omnibus</strong> containing all 37 reconstructed masterworks organized across 5 thematic volumes. Features a comprehensive Table of Contents, topical index, and book-grade ISO A4 typography optimized for physical printouts and deep reading.</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
          <a href="pdf/the-intellectualist-master-omnibus.pdf" target="_blank" class="btn btn-primary" style="padding: 9px 18px; font-size: 13.5px; white-space: nowrap; box-shadow: var(--shadow-sm); display: inline-flex; align-items: center; gap: 6px;">
            📥 Download Master Omnibus (789 Pgs · 14.1 MB)
          </a>
          <span class="a4-depot-pill">37 / 37 Books Unified</span>
        </div>
      </div>`;

if (oldBannerRegex.test(html)) {
  html = html.replace(oldBannerRegex, newBannerHtml);
  console.log('Updated Master Omnibus banner text.');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated docs/index.html');
