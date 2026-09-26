const fs = require('fs');
const path = require('path');

const fb2File = path.join(__dirname, '..', '..', 'Books', 'War and Peace -- Leo Tolstoy -- null, null -- Random House, Inc_ -- 7d111e9a4055b40a15139b4927585d0b -- Anna’s Archive.fb2');
console.log('Reading:', fb2File);

const content = fs.readFileSync(fb2File, 'utf8');
console.log('FB2 raw size:', content.length, 'characters');

const destDir = path.join(__dirname, '..', '..', 'Books', 'extracted', 'war-and-peace');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

let clean = content
  .replace(/<empty-line\s*\/>/g, '\n\n')
  .replace(/<\/p>/g, '\n\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&apos;/g, "'");

clean = clean.replace(/\n{3,}/g, '\n\n').trim();

const targetTxt = path.join(destDir, 'clean_book.txt');
fs.writeFileSync(targetTxt, clean, 'utf8');
console.log(`Saved clean_book.txt to ${targetTxt} (${clean.length} characters)`);
