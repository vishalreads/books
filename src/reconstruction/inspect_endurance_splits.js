const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'scratch', 'endurance_extracted');

for (let i = 0; i <= 44; i++) {
  const numStr = String(i).padStart(3, '0');
  const filename = `book_split_${numStr}.html`;
  const filePath = path.join(targetDir, filename);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf8');
  // Strip tags for preview
  const titleMatch = content.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'No Title';
  
  const pMatches = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const firstP = pMatches[0] ? pMatches[0].replace(/<[^>]+>/g, '').trim().substring(0, 100) : '';
  
  console.log(`[${numStr}] Title: ${title} | Length: ${content.length} chars | First P: ${firstP}`);
}
