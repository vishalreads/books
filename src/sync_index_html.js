const fs = require('fs');
const path = require('path');

const libIndexPath = path.join(__dirname, '..', 'docs', 'library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf-8'));

const indexPath = path.join(__dirname, '..', 'docs', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Calculate total studies across all books
let totalStudies = 0;
libIndex.books.forEach(b => {
  if (b.landmark_studies) totalStudies += b.landmark_studies.length;
});

// Update stat counters in HTML
indexHtml = indexHtml.replace(/<div class="stat-val" id="statBooks">\d+<\/div>/, `<div class="stat-val" id="statBooks">${libIndex.total_books}</div>`);
indexHtml = indexHtml.replace(/<div class="stat-val" id="statHours">[\d\.]+ hrs<\/div>/, `<div class="stat-val" id="statHours">${libIndex.total_hours_saved} hrs</div>`);
indexHtml = indexHtml.replace(/<div class="stat-val" id="statStudies">\d+ Trials<\/div>/, `<div class="stat-val" id="statStudies">${totalStudies} Trials</div>`);

// Update category select options
const categoryOptions = ['<option value="all">All Disciplines (10 Total)</option>'];
libIndex.categories.forEach(cat => {
  categoryOptions.push(`<option value="${cat}">${cat}</option>`);
});
const catSelectRegex = /<select id="categorySelect" class="filter-select" onchange="applyFilters\(\)">[\s\S]*?<\/select>/;
indexHtml = indexHtml.replace(catSelectRegex, `<select id="categorySelect" class="filter-select" onchange="applyFilters()">\n        ${categoryOptions.join('\n        ')}\n      </select>`);

// Update const libraryData = { ... };
const libraryDataRegex = /const libraryData = \{[\s\S]*?\n\};/;
const newLibraryDataStr = `const libraryData = ${JSON.stringify(libIndex, null, 2)};`;
indexHtml = indexHtml.replace(libraryDataRegex, newLibraryDataStr);

fs.writeFileSync(indexPath, indexHtml, 'utf-8');
console.log(`Successfully synced docs/index.html with ${libIndex.total_books} books, ${libIndex.total_hours_saved} hrs saved, and ${totalStudies} studies!`);
