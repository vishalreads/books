const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('docs/distillations');
dirs.forEach(d => {
  const p = path.join('docs/distillations', d, 'index.html');
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    if (!content.includes('reader-shell.css')) {
      const links = content.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/g) || [];
      const titleM = content.match(/<title>([^<]+)<\/title>/);
      const title = titleM ? titleM[1] : d;
      console.log(`\n=== ${d} ===`);
      console.log(`Title: ${title}`);
      console.log(`Links:`, links);
      const htmlTag = content.match(/<html[^>]*>/);
      console.log(`HTML tag:`, htmlTag ? htmlTag[0] : 'no html tag');
      const bodyTag = content.match(/<body[^>]*>/);
      console.log(`Body tag:`, bodyTag ? bodyTag[0] : 'no body tag');
    }
  }
});
