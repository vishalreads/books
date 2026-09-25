const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const booksDir = path.join(__dirname, '..', '..', 'Books');
const files = fs.readdirSync(booksDir);
const enduranceFile = files.find(f => f.startsWith('Endurance') && f.endsWith('.epub'));

if (!enduranceFile) {
  console.error('Endurance EPUB not found!');
  process.exit(1);
}

const fullPath = path.join(booksDir, enduranceFile);
console.log('Found Endurance:', fullPath);

const targetDir = path.join(__dirname, '..', '..', 'scratch', 'endurance_extracted');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Listing files in EPUB:');
try {
  const listing = execSync(`tar -tf "${fullPath}"`).toString();
  console.log(listing.split('\n').filter(Boolean).slice(0, 30).join('\n'));
  console.log('Extracting text/html files...');
  execSync(`tar -xf "${fullPath}" -C "${targetDir}" --exclude "*.jpg" --exclude "*.png"`);
  console.log('Extraction complete without image errors!');
} catch (e) {
  console.error('Error during tar operation:', e.message);
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const p = path.join(dir, file);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p);
    } else {
      console.log(' - ' + path.relative(targetDir, p) + ` (${stat.size} bytes)`);
    }
  });
}
walk(targetDir);
