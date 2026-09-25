const fs = require('fs');
const path = require('path');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const files = fs.readdirSync(booksDir);

console.log(`Found ${files.length} files in Books directory:`);
files.forEach((f, i) => {
  const stat = fs.statSync(path.join(booksDir, f));
  console.log(`[${i+1}] ${f} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
});
