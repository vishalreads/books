const fs = require('fs');
const path = require('path');

const part1 = require('./yogi_data_part1');
const part2 = require('./yogi_data_part2');
const part3 = require('./yogi_data_part3');
const part4 = require('./yogi_data_part4');

const allChapters = [...part1, ...part2, ...part3, ...part4];

function generateChapterHtml(c) {
  return `
    <div class="chapter-card" id="ch-${c.num}">
      <div class="chapter-header-box">
        <span class="chapter-num-badge">Chapter ${c.num}</span>
        <h3 class="chapter-heading">${c.title}</h3>
      </div>
      <div class="axiom-badge"><strong>Irreducible Axiom:</strong> ${c.axiom}</div>
      <div class="meta-subbar">
        <span><strong>Setting & Location:</strong> ${c.setting}</span> &bull; 
        <span><strong>Dramatis Personae:</strong> ${c.figures}</span>
      </div>
      
      <div class="chapter-body-prose">
        <div class="prose-subsection">
          <h5>1. Context & Inciting Dilemma</h5>
          <p>${c.context}</p>
        </div>

        <div class="prose-subsection">
          <h5>2. Forensic Narrative & Phenomenological Progression</h5>
          <p>${c.forensic.replace(/\n\n/g, '</p><p>')}</p>
        </div>

        <div class="dialogue-callout">
          <strong>Key Dialogue & Philosophical Weight:</strong>
          <blockquote>${c.dialogue}</blockquote>
        </div>

        <div class="verbatim-quote-box">
          <strong>Verbatim Canonical Excerpt:</strong>
          <blockquote>${c.quote}</blockquote>
        </div>

        <div class="heuristic-tag">
          <strong>Operational Heuristic:</strong> ${c.heuristic}
        </div>
      </div>
    </div>
  `;
}

// Generate the 4 parts
const part1Html = `<div class="part-banner">Part I: Formative Years & Search for Masters (Chapters 1–11)</div>\n` + part1.map(generateChapterHtml).join('\n');
const part2Html = `<div class="part-banner">Part II: The Hermitage of Discipline & Master's Guidance (Chapters 12–25)</div>\n` + part2.map(generateChapterHtml).join('\n');
const part3Html = `<div class="part-banner">Part III: Foundations of Kriya, Lahiri Mahasaya & Babaji (Chapters 26–36)</div>\n` + part3.map(generateChapterHtml).join('\n');
const part4Html = `<div class="part-banner">Part IV: The Western Dispensation & Global Synthesis (Chapters 37–49)</div>\n` + part4.map(generateChapterHtml).join('\n');

const fullChaptersHtml = [part1Html, part2Html, part3Html, part4Html].join('\n');

// Read existing index.html
const indexPath = path.join('docs', 'distillations', 'autobiography-of-a-yogi', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace the Layer 2 section
const layer2Start = html.indexOf('<section id="layer2"');
const layer3Start = html.indexOf('<section id="layer3"');

if (layer2Start !== -1 && layer3Start !== -1) {
  const beforeLayer2 = html.substring(0, layer2Start);
  const afterLayer2 = html.substring(layer3Start);

  const newLayer2 = `
  <section id="layer2" class="section-box">
    <div class="section-tag">Layer 2: Forensic Chronicles</div>
    <h2 class="section-title">The Complete 49 Forensic Chapters (Total Replacement Codex)</h2>
    <p class="section-lead">Every single chapter reconstructed with unabridged narrative progression, verbatim dialogues, physiological transitions, and operational heuristics. No chapter is summarized or omitted.</p>

    ${fullChaptersHtml}
  </section>
  `;

  const updatedHtml = beforeLayer2 + newLayer2 + afterLayer2;
  fs.writeFileSync(indexPath, updatedHtml, 'utf8');
  console.log(`Updated ${indexPath} successfully!`);
  console.log(`New HTML Length: ${updatedHtml.length} characters`);
} else {
  console.error("Could not find layer2 / layer3 anchors in index.html");
}
