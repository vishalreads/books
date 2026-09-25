const fs = require('fs');
const path = require('path');

// 1. Load catalog data
const catalogPath = path.join(__dirname, '..', 'docs', 'catalog-500.json');
const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

// 2. Load distilled book contents
const distilledBooks = [
  { id: 'atomic-habits', name: 'Atomic Habits', file: 'docs/distillations/atomic-habits/master-notes.md' },
  { id: '48-laws-of-power', name: 'The 48 Laws of Power', file: 'docs/distillations/48-laws-of-power/master-notes.md' },
  { id: 'autobiography-of-a-yogi', name: 'Autobiography of a Yogi', file: 'docs/distillations/autobiography-of-a-yogi/master-notes.md' },
  { id: 'it-ends-with-us', name: 'It Ends with Us', file: 'docs/distillations/it-ends-with-us/master-notes.md' },
  { id: 'rich-dad-poor-dad', name: 'Rich Dad Poor Dad', file: 'docs/distillations/rich-dad-poor-dad/master-notes.md' }
];

const renderedCodices = {};
const flashcardsList = [];

// Lightweight, resilient Markdown to HTML converter
function parseMarkdown(md) {
  if (!md) return '';
  
  // Normalize line breaks
  let lines = md.replace(/\r\n/g, '\n').split('\n');
  let html = [];
  let inList = false;
  let inOrderedList = false;
  let inBlockquote = false;
  let inCodeBlock = false;
  let codeBuffer = [];
  let inTable = false;
  let tableBuffer = [];

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function inlineFormat(text) {
    // Bold italic
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/_(.*?)_/g, '<em>$1</em>');
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Math
    text = text.replace(/\$\$([^$]+)\$\$/g, '<div class="math-block">$$$1$$</div>');
    text = text.replace(/\$([^$]+)\$/g, '<span class="math-inline">\\($1\\)</span>');
    // Arrow entities
    text = text.replace(/&rarr;/g, '→').replace(/->/g, '→');
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    // Code blocks
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        html.push('<pre><code>' + escapeHtml(codeBuffer.join('\n')) + '</code></pre>');
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeBuffer = [];
      }
      continue;
    }
    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Tables
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableBuffer = [];
      }
      tableBuffer.push(trimmed);
      continue;
    } else if (inTable) {
      // Process table
      if (tableBuffer.length >= 2) {
        let tableHtml = '<div class="table-responsive"><table class="codex-table">';
        let headerRow = tableBuffer[0];
        let headers = headerRow.split('|').filter((c, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
        tableHtml += '<thead><tr>' + headers.map(h => `<th>${inlineFormat(h)}</th>`).join('') + '</tr></thead><tbody>';
        for (let t = 2; t < tableBuffer.length; t++) {
          let rowCells = tableBuffer[t].split('|').filter((c, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
          tableHtml += '<tr>' + rowCells.map(c => `<td>${inlineFormat(c)}</td>`).join('') + '</tr>';
        }
        tableHtml += '</tbody></table></div>';
        html.push(tableHtml);
      }
      inTable = false;
      tableBuffer = [];
    }

    // Close lists if non-list line
    if (!trimmed.startsWith('- ') && !trimmed.startsWith('* ') && inList) {
      html.push('</ul>');
      inList = false;
    }
    if (!/^\d+\.\s/.test(trimmed) && inOrderedList) {
      html.push('</ol>');
      inOrderedList = false;
    }
    // Close blockquote
    if (!trimmed.startsWith('>') && inBlockquote) {
      html.push('</blockquote>');
      inBlockquote = false;
    }

    // Blank line
    if (trimmed === '') {
      continue;
    }

    // Horizontal Rule
    if (/^(---|___|\*\*\*)$/.test(trimmed)) {
      html.push('<hr class="codex-divider" />');
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      if (!inBlockquote) {
        html.push('<blockquote class="codex-quote">');
        inBlockquote = true;
      }
      let content = trimmed.replace(/^>\s*/, '');
      html.push('<p>' + inlineFormat(content) + '</p>');
      continue;
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      let title = trimmed.substring(2);
      let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h1 id="${id}" class="codex-h1">${inlineFormat(title)}</h1>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      let title = trimmed.substring(3);
      let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h2 id="${id}" class="codex-h2">${inlineFormat(title)}</h2>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      let title = trimmed.substring(4);
      let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h3 id="${id}" class="codex-h3">${inlineFormat(title)}</h3>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      let title = trimmed.substring(5);
      let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h4 id="${id}" class="codex-h4">${inlineFormat(title)}</h4>`);
      continue;
    }

    // Unordered List
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        html.push('<ul class="codex-list">');
        inList = true;
      }
      let content = trimmed.substring(2);
      html.push('<li>' + inlineFormat(content) + '</li>');
      continue;
    }

    // Ordered List
    let matchOrdered = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (matchOrdered) {
      if (!inOrderedList) {
        html.push('<ol class="codex-ordered-list">');
        inOrderedList = true;
      }
      html.push('<li>' + inlineFormat(matchOrdered[2]) + '</li>');
      continue;
    }

    // Regular Paragraph
    html.push('<p class="codex-p">' + inlineFormat(trimmed) + '</p>');
  }

  if (inList) html.push('</ul>');
  if (inOrderedList) html.push('</ol>');
  if (inBlockquote) html.push('</blockquote>');
  if (inTable && tableBuffer.length >= 2) {
    html.push('<div class="table-responsive"><table class="codex-table">...</table></div>');
  }

  return html.join('\n');
}

// Read markdown files and convert
distilledBooks.forEach(b => {
  const fullPath = path.join(__dirname, '..', b.file);
  if (fs.existsSync(fullPath)) {
    const rawMd = fs.readFileSync(fullPath, 'utf-8');
    renderedCodices[b.id] = {
      name: b.name,
      html: parseMarkdown(rawMd),
      rawMd: rawMd
    };
  }
});

// Seed sample interactive active recall flashcards from core books
const FLASHCARDS = [
  {
    book: "Atomic Habits",
    pillar: "Mind & Cognition",
    question: "Why does James Clear assert that focusing primarily on goals is a flawed behavioral strategy?",
    answer: "Clear identifies 4 fundamental flaws of goals: (1) Survivor Bias: Winners and losers share the exact same goals (e.g. every Olympian wants gold); (2) Momentary fix: Solving an outcome only fixes the symptom, not the root cause; (3) Happiness postponement: Restricts satisfaction to a distant future binary ('Once I reach X, then I will be happy'); (4) The Yo-Yo Effect: Effort ceases as soon as the goal threshold is crossed because the finish line extinguishes motivation. Systems govern continuous long-term compounding."
  },
  {
    book: "Atomic Habits",
    pillar: "Mind & Cognition",
    question: "How does Wolfram Schultz's dopamine prediction error research explain the mechanics of craving?",
    answer: "Schultz demonstrated that dopamine spikes not upon reward consumption, but upon the perception of the preceding environmental Cue. Dopamine is neurobiologically an anticipation/craving molecule, not a pleasure molecule. The brain computes a Prediction Error: if the anticipated reward exceeds reality, craving amplifies; if reward falls short, motivation is extinguished. Hence, cue visibility dictates craving intensity."
  },
  {
    book: "The 48 Laws of Power",
    pillar: "Power & Strategy",
    question: "What is the core psychological mechanism behind Law 1: 'Never Outshine the Master', as illustrated by Nicolas Fouquet?",
    answer: "All masters suffer from deep-seated vanity and insecurity regarding their status. When a subordinate displays superior brilliance, luxury, or charisma, they inflict a narcissistic injury on the superior, triggering latent envy and existential paranoia. In 1661, Fouquet threw the most extravagant fête in French history at Vaux-le-Vicomte to impress young King Louis XIV; instead of earning gratitude, Louis felt eclipsed, humiliated, and secretly threatened. Weeks later, Louis had d'Artagnan arrest Fouquet, locking him in solitary fortress confinement for life."
  },
  {
    book: "The 48 Laws of Power",
    pillar: "Power & Strategy",
    question: "What is 'The Courtier's Dilemma' and why does indirect power always outlast brute force?",
    answer: "In any court or corporate hierarchy, overt displays of aggression or raw ambition provoke immediate coalitions of defensive rivals who unite to destroy you. The courtier must therefore master the art of indirection: praising rivals while subtly undermining them, veiling orders as suggestions, yielding gracefully in public while maneuvering levers behind the scenes. Direct force creates open friction and resistance; indirection achieves aims while keeping opponents unaware they are being manipulated."
  },
  {
    book: "Autobiography of a Yogi",
    pillar: "Philosophy & Metaphysics",
    question: "Explain the physiological and energetic mechanism of Kriya Yoga decarbonization (Kevala Kumbhaka).",
    answer: "Kriya Yoga operates as an internal psychophysiological combustion engine. By mentally directing life-force energy (prana) continuously up and down the six spinal centers (chakras), venous blood is supercharged with oxygen and cellular decarbonization is accelerated. This calms the breath and slows cardiac activity into Kevala Kumbhaka (breathless stillness), freeing sensory currents from bodily servitude and allowing the practitioner to perceive consciousness as unconditioned pure light."
  },
  {
    book: "It Ends with Us",
    pillar: "Master Fiction & Human Condition",
    question: "How does Dutton & Painter's theory of Traumatic Bonding explain Lily Bloom's difficulty breaking away from Ryle Kincaid?",
    answer: "Traumatic bonding is forged through two essential conditions: an extreme power imbalance and an intermittent, unpredictable schedule of abuse followed by passionate contrition and affection. When violence is followed by tears, heartfelt apologies, and references to childhood trauma, the victim's nervous system experiences intense neurochemical relief (dopamine/oxytocin rebound). This cycle creates an addictive psychological bond far stronger than continuous kindness or continuous cruelty."
  },
  {
    book: "Rich Dad Poor Dad",
    pillar: "Wealth & Capital",
    question: "What is Robert Kiyosaki's strict structural definition of an Asset vs. a Liability, and why is a primary residence often a liability?",
    answer: "An asset is something that puts cash flow directly into your pocket without ongoing labor. A liability is something that takes cash out of your pocket. A personal primary residence is fundamentally a liability because it drains continuous cash flow through mortgage interest, property taxes, insurance, utility bills, and maintenance. It only produces wealth if sold at a speculative gain, whereas true assets (income-generating real estate, businesses, royalties, dividend stocks) generate net positive cash flow every single month."
  },
  {
    book: "Thinking in Systems",
    pillar: "Systems Thinking",
    question: "Why do delays in balancing feedback loops cause oscillations and extreme systemic boom-bust crashes?",
    answer: "Balancing feedback loops are designed to stabilize a system around a target state. However, if there is a temporal lag between an action and its feedback result (e.g. supply chain orders, hiring cycles, or climate responses), decision-makers perceive that the initial intervention was insufficient. They continue pushing the lever, resulting in massive systemic overshoot. By the time the feedback registers, the system has swung far beyond equilibrium, forcing an aggressive over-correction in the opposite direction."
  },
  {
    book: "Man's Search for Meaning",
    pillar: "Philosophy & Metaphysics",
    question: "What did Viktor Frankl observe regarding inmate survival rates around Christmas 1944 in concentration camps?",
    answer: "Frankl and the camp chief medical officer documented a dramatic, unprecedented spike in inmate deaths between Christmas 1944 and New Year's 1945. The deaths were not caused by colder weather or decreased rations, but by the collapse of hope. Tens of thousands of prisoners had sustained themselves with the naïve conviction that they would be home by Christmas. When the holiday passed with no liberation in sight, their psychological immune resistance collapsed, allowing latent typhus and infections to overwhelm their bodies."
  },
  {
    book: "Why We Sleep",
    pillar: "Physiology & Neuroscience",
    question: "How does the brain's Glymphatic System operate during deep NREM sleep to prevent neurodegeneration?",
    answer: "During slow-wave deep NREM sleep, the brain's glial cells shrink in volume by approximately 60%, significantly widening the interstitial spaces between neurons. Cerebrospinal fluid (CSF) surges rhythmically through the brain tissue like a high-pressure dishwasher, flushing out metabolic waste products accumulated during waking metabolic activity, specifically amyloid-beta and tau proteins associated with Alzheimer's disease."
  }
];

// Compile HTML template
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Intellectualist 500 • Grand Replacement Notebook</title>
  <style>
    /* CSS Variables for 3 Reading Themes */
    :root {
      --bg-canvas: #f8f6f0;
      --bg-card: #ffffff;
      --bg-subtle: #f0ebe1;
      --bg-elevated: #faf7f2;
      --text-main: #181715;
      --text-muted: #5c574e;
      --accent-crimson: #85221c;
      --accent-slate: #1f3347;
      --accent-gold: #966e14;
      --border-light: #ded7c8;
      --border-dark: #7a7060;
      --code-bg: #ece6d8;
      --badge-ready-bg: #e6f4ea;
      --badge-ready-text: #137333;
      --badge-queue-bg: #fef7e0;
      --badge-queue-text: #b06000;
      --shadow-sm: 0 2px 6px rgba(0,0,0,0.04);
      --shadow-md: 0 6px 18px rgba(0,0,0,0.07);
      --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
      --font-scale: 16px;
    }

    body.theme-midnight {
      --bg-canvas: #0f1115;
      --bg-card: #181b22;
      --bg-subtle: #212631;
      --bg-elevated: #1a1e27;
      --text-main: #e6edf3;
      --text-muted: #8b949e;
      --accent-crimson: #ff6b6b;
      --accent-slate: #58a6ff;
      --accent-gold: #e3b341;
      --border-light: #30363d;
      --border-dark: #6e7681;
      --code-bg: #161b22;
      --badge-ready-bg: #1f3829;
      --badge-ready-text: #7ee787;
      --badge-queue-bg: #3d2f13;
      --badge-queue-text: #f2cc60;
      --shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
      --shadow-md: 0 6px 18px rgba(0,0,0,0.4);
      --shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
    }

    body.theme-sepia {
      --bg-canvas: #f4ecd8;
      --bg-card: #fcf6e8;
      --bg-subtle: #e9dec4;
      --bg-elevated: #f8f1df;
      --text-main: #33261a;
      --text-muted: #6b5541;
      --accent-crimson: #8c2d19;
      --accent-slate: #2d4559;
      --accent-gold: #825f16;
      --border-light: #d6c6a8;
      --border-dark: #826f53;
      --code-bg: #e2d5b8;
      --badge-ready-bg: #d7e8d5;
      --badge-ready-text: #1d5b24;
      --badge-queue-bg: #f2e3be;
      --badge-queue-text: #8c5b08;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: var(--font-scale);
      line-height: 1.68;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    h1, h2, h3, h4, .serif {
      font-family: "Georgia", "Cambria", "Times New Roman", serif;
      font-weight: 700;
      color: var(--text-main);
      letter-spacing: -0.015em;
    }

    .container {
      max-width: 1340px;
      margin: 0 auto;
      padding: 24px 20px 100px 20px;
    }

    /* Fixed Top App Bar */
    .top-app-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-card);
      border-bottom: 2px solid var(--accent-crimson);
      box-shadow: var(--shadow-sm);
      padding: 10px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .app-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      width: 32px;
      height: 32px;
      background: var(--accent-crimson);
      color: #ffffff;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-family: "Georgia", serif;
      font-size: 1.1rem;
    }

    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .brand-subtitle {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .app-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-ctrl {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.84rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .btn-ctrl:hover {
      background: var(--accent-crimson);
      color: #ffffff;
      border-color: var(--accent-crimson);
    }

    .btn-ctrl.active {
      background: var(--accent-slate);
      color: #ffffff;
      border-color: var(--accent-slate);
    }

    /* Master Gazette Header */
    .gazette-header {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 6px solid var(--accent-crimson);
      padding: 32px 36px;
      margin: 24px 0;
      box-shadow: var(--shadow-sm);
    }

    .gazette-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 10px;
      margin-bottom: 16px;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-slate);
      font-weight: 700;
    }

    .gazette-title {
      font-size: 2.8rem;
      line-height: 1.12;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }

    .gazette-tagline {
      font-size: 1.25rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 20px;
    }

    .stats-ribbon {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 16px 20px;
      border-radius: 6px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-val {
      font-size: 1.7rem;
      font-weight: 800;
      color: var(--accent-crimson);
      font-family: "Georgia", serif;
      line-height: 1.1;
    }

    .stat-lbl {
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      font-weight: 700;
      margin-top: 4px;
    }

    /* Tab Navigation */
    .tab-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      border-bottom: 2px solid var(--border-light);
      margin-bottom: 24px;
    }

    .tab-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-bottom: none;
      padding: 12px 20px;
      font-size: 0.94rem;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 6px 6px 0 0;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .tab-btn:hover {
      color: var(--accent-crimson);
      background: var(--bg-elevated);
    }

    .tab-btn.active {
      color: var(--accent-crimson);
      background: var(--bg-canvas);
      border-top: 3px solid var(--accent-crimson);
      border-left-color: var(--border-light);
      border-right-color: var(--border-light);
      position: relative;
      bottom: -2px;
      border-bottom: 2px solid var(--bg-canvas);
    }

    /* Filter & Search Bar */
    .filter-bar {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 18px 24px;
      margin-bottom: 24px;
      border-radius: 6px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .search-row {
      display: flex;
      gap: 12px;
    }

    .search-input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid var(--border-light);
      border-radius: 6px;
      background: var(--bg-elevated);
      color: var(--text-main);
      font-size: 1rem;
      outline: none;
    }

    .search-input:focus {
      border-color: var(--accent-crimson);
      background: var(--bg-card);
    }

    .filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip-btn {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .chip-btn:hover, .chip-btn.active {
      background: var(--accent-crimson);
      color: #ffffff;
      border-color: var(--accent-crimson);
    }

    /* Catalog Cards Grid */
    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
      gap: 24px;
    }

    .book-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 24px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .book-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .book-card.distilled-card {
      border-left: 5px solid var(--badge-ready-text);
    }

    .card-top {
      margin-bottom: 16px;
    }

    .card-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      margin-bottom: 12px;
    }

    .badge-status {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .badge-ready {
      background: var(--badge-ready-bg);
      color: var(--badge-ready-text);
    }

    .badge-queue {
      background: var(--badge-queue-bg);
      color: var(--badge-queue-text);
    }

    .badge-pillar {
      background: var(--bg-subtle);
      color: var(--accent-slate);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid var(--border-light);
    }

    .book-title {
      font-size: 1.45rem;
      line-height: 1.25;
      margin-bottom: 4px;
      color: var(--text-main);
    }

    .book-author {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--accent-crimson);
      margin-bottom: 12px;
    }

    .book-axiom-box {
      background: var(--bg-subtle);
      border-left: 3px solid var(--accent-crimson);
      padding: 10px 14px;
      font-style: italic;
      font-size: 0.88rem;
      margin-bottom: 14px;
      color: var(--text-main);
    }

    .section-title-sm {
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      margin-bottom: 6px;
      display: block;
    }

    .emotional-stakes-box {
      font-size: 0.86rem;
      color: var(--text-muted);
      margin-bottom: 14px;
      line-height: 1.55;
    }

    .model-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-bottom: 16px;
    }

    .model-tag {
      background: var(--bg-elevated);
      border: 1px solid var(--border-light);
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 0.76rem;
      color: var(--text-main);
    }

    .card-footer {
      border-top: 1px solid var(--border-light);
      padding-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .saved-time-txt {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent-gold);
    }

    .btn-read-codex {
      background: var(--accent-crimson);
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .btn-read-codex:hover {
      background: #6a1813;
    }

    /* Codex Reader Layout */
    .reader-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 28px;
      align-items: start;
    }

    @media (max-width: 900px) {
      .reader-layout {
        grid-template-columns: 1fr;
      }
    }

    .reader-sidebar {
      position: sticky;
      top: 75px;
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 20px;
      box-shadow: var(--shadow-sm);
      max-height: calc(100vh - 100px);
      overflow-y: auto;
    }

    .reader-book-picker {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--border-light);
      border-radius: 6px;
      background: var(--bg-elevated);
      color: var(--text-main);
      font-size: 0.92rem;
      font-weight: 700;
      margin-bottom: 16px;
      outline: none;
    }

    .reader-toc-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 800;
      color: var(--text-muted);
      margin-bottom: 10px;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 6px;
    }

    .reader-toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .reader-toc-list a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.84rem;
      padding: 4px 8px;
      border-radius: 4px;
      display: block;
      transition: all 0.15s ease;
    }

    .reader-toc-list a:hover {
      background: var(--bg-subtle);
      color: var(--accent-crimson);
    }

    .reader-article {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 40px 48px;
      box-shadow: var(--shadow-sm);
    }

    @media (max-width: 600px) {
      .reader-article {
        padding: 24px 18px;
      }
    }

    /* Codex Typography inside reader */
    .codex-h1 {
      font-size: 2.3rem;
      color: var(--accent-crimson);
      margin-bottom: 16px;
      border-bottom: 2px solid var(--border-light);
      padding-bottom: 12px;
    }

    .codex-h2 {
      font-size: 1.65rem;
      color: var(--accent-slate);
      margin-top: 36px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 8px;
    }

    .codex-h3 {
      font-size: 1.25rem;
      color: var(--text-main);
      margin-top: 24px;
      margin-bottom: 10px;
    }

    .codex-h4 {
      font-size: 1.05rem;
      color: var(--accent-crimson);
      margin-top: 18px;
      margin-bottom: 8px;
    }

    .codex-p {
      margin-bottom: 16px;
    }

    .codex-quote {
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-crimson);
      padding: 14px 18px;
      margin: 20px 0;
      border-radius: 0 6px 6px 0;
      font-style: italic;
    }

    .codex-divider {
      border: 0;
      border-top: 1px solid var(--border-light);
      margin: 32px 0;
    }

    .codex-list, .codex-ordered-list {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .codex-list li, .codex-ordered-list li {
      margin-bottom: 6px;
    }

    .codex-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 0.88rem;
    }

    .codex-table th, .codex-table td {
      border: 1px solid var(--border-light);
      padding: 10px 14px;
      text-align: left;
    }

    .codex-table th {
      background: var(--bg-subtle);
      font-weight: 700;
    }

    /* Flashcard Suite */
    .flashcard-deck {
      max-width: 800px;
      margin: 0 auto;
    }

    .flashcard-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 5px solid var(--accent-crimson);
      border-radius: 8px;
      padding: 32px;
      box-shadow: var(--shadow-md);
      margin-bottom: 24px;
    }

    .fc-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-slate);
    }

    .fc-question {
      font-size: 1.3rem;
      font-family: "Georgia", serif;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--text-main);
    }

    .fc-answer-box {
      display: none;
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-gold);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
      margin-top: 16px;
      font-size: 0.95rem;
      line-height: 1.65;
    }

    .fc-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    /* Matrix & Lab Tabs */
    .matrix-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }

    .matrix-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 20px;
      box-shadow: var(--shadow-sm);
    }

    .matrix-title {
      font-size: 1.15rem;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }

    .matrix-desc {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 12px;
    }

    .matrix-books {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--accent-slate);
    }

    .lab-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 32px;
      box-shadow: var(--shadow-sm);
      max-width: 900px;
      margin: 0 auto;
    }

    .lab-prompt-area {
      width: 100%;
      height: 280px;
      background: var(--code-bg);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 16px;
      font-family: monospace;
      font-size: 0.88rem;
      color: var(--text-main);
      margin-bottom: 16px;
      outline: none;
    }

    /* Utility */
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    .hidden { display: none !important; }
  </style>
</head>
<body>

  <!-- Sticky Top Application Bar -->
  <header class="top-app-bar">
    <div class="app-brand">
      <div class="brand-logo">500</div>
      <div>
        <div class="brand-title">The Intellectualist 500</div>
        <div class="brand-subtitle">The Universal Codex & Total Replacement Notebook</div>
      </div>
    </div>
    <div class="app-controls">
      <button class="btn-ctrl" onclick="setTheme('ivory')">🏛️ Ivory</button>
      <button class="btn-ctrl" onclick="setTheme('midnight')">🌙 Midnight</button>
      <button class="btn-ctrl" onclick="setTheme('sepia')">📜 Sepia</button>
      <span style="border-left: 1px solid var(--border-light); height: 20px; margin: 0 4px;"></span>
      <button class="btn-ctrl" onclick="adjustFontSize(-1)">A-</button>
      <button class="btn-ctrl" onclick="adjustFontSize(1)">A+</button>
    </div>
  </header>

  <div class="container">

    <!-- Master Header Gazette -->
    <section class="gazette-header">
      <div class="gazette-meta">
        <span>The Master Library Foundation</span>
        <span>Standard: The Golden Test of Total Replacement</span>
        <span>Version 2.0 • Offline Self-Contained Edition</span>
      </div>
      <h1 class="gazette-title">The Grand Codex of 500 Books</h1>
      <p class="gazette-tagline">
        An encyclopedic master notebook codifying 500 foundational works of human thought, psychology, strategy, and science into exhaustive notes that eliminate the need to read the original texts.
      </p>
      <div class="stats-ribbon">
        <div class="stat-item">
          <span class="stat-val">500</span>
          <span class="stat-lbl">Universal Canon Target</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">50</span>
          <span class="stat-lbl">Foundation Titles Curated</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">6</span>
          <span class="stat-lbl">Replacement Codices Ready</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">227.5+</span>
          <span class="stat-lbl">Hours of Reading Saved</span>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <nav class="tab-nav">
      <button class="tab-btn active" onclick="switchTab('catalog')">📚 1. Foundation Catalog (50 Books)</button>
      <button class="tab-btn" onclick="switchTab('reader')">📖 2. Embedded Codex Reader</button>
      <button class="tab-btn" onclick="switchTab('flashcards')">⚡ 3. Active Recall Suite</button>
      <button class="tab-btn" onclick="switchTab('models')">🧠 4. Mental Model Matrix</button>
      <button class="tab-btn" onclick="switchTab('lab')">⚙️ 5. Distillation Engine Lab</button>
    </nav>

    <!-- TAB 1: THE FOUNDATION CATALOG -->
    <section id="tab-catalog" class="tab-content active">
      <div class="filter-bar">
        <div class="search-row">
          <input type="text" id="catalog-search" class="search-input" placeholder="🔍 Search across 50 books by title, author, mental model, or core thesis..." oninput="filterBooks()" />
        </div>
        <div class="filter-chips" id="pillar-chips">
          <button class="chip-btn active" onclick="filterByPillar('all', this)">All Pillars (50)</button>
          <button class="chip-btn" onclick="filterByPillar('distilled', this)">⭐ Replacement Ready (5)</button>
          <button class="chip-btn" onclick="filterByPillar(1, this)">Pillar 1: Mind & Cognition</button>
          <button class="chip-btn" onclick="filterByPillar(2, this)">Pillar 2: Power & Strategy</button>
          <button class="chip-btn" onclick="filterByPillar(3, this)">Pillar 3: Philosophy & Ethics</button>
          <button class="chip-btn" onclick="filterByPillar(4, this)">Pillar 4: Wealth & Capital</button>
          <button class="chip-btn" onclick="filterByPillar(5, this)">Pillar 5: Systems & Complexity</button>
          <button class="chip-btn" onclick="filterByPillar(6, this)">Pillar 6: Science & AI</button>
          <button class="chip-btn" onclick="filterByPillar(7, this)">Pillar 7: Leadership & Ops</button>
          <button class="chip-btn" onclick="filterByPillar(8, this)">Pillar 8: Biographies & History</button>
          <button class="chip-btn" onclick="filterByPillar(9, this)">Pillar 9: Master Fiction & Trauma</button>
          <button class="chip-btn" onclick="filterByPillar(10, this)">Pillar 10: Physiology & Sleep</button>
        </div>
      </div>

      <div class="books-grid" id="books-grid">
        <!-- Rendered via JavaScript -->
      </div>
    </section>

    <!-- TAB 2: EMBEDDED CODEX READER -->
    <section id="tab-reader" class="tab-content">
      <div class="reader-layout">
        <aside class="reader-sidebar">
          <label class="reader-toc-title">Select Replacement Codex:</label>
          <select id="reader-select" class="reader-book-picker" onchange="loadSelectedCodex(this.value)">
            <option value="atomic-habits">Atomic Habits — James Clear</option>
            <option value="48-laws-of-power">The 48 Laws of Power — Robert Greene</option>
            <option value="autobiography-of-a-yogi">Autobiography of a Yogi — Paramahansa Yogananda</option>
            <option value="it-ends-with-us">It Ends with Us — Colleen Hoover</option>
            <option value="rich-dad-poor-dad">Rich Dad Poor Dad — Robert Kiyosaki</option>
          </select>
          <div class="reader-toc-title">Table of Contents</div>
          <ul class="reader-toc-list" id="reader-toc">
            <!-- Dynamically populated -->
          </ul>
        </aside>
        <article class="reader-article" id="reader-content">
          <!-- Dynamically populated with parsed codex -->
        </article>
      </div>
    </section>

    <!-- TAB 3: ACTIVE RECALL SUITE -->
    <section id="tab-flashcards" class="tab-content">
      <div class="flashcard-deck">
        <div style="margin-bottom: 24px; text-align: center;">
          <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 8px;">Spaced Repetition & Causal Recall Engine</h2>
          <p style="color: var(--text-muted);">Test your grasp of core causal mechanisms, experimental proofs, and operational algorithms across the distilled codices.</p>
        </div>
        <div id="flashcard-container">
          <!-- Rendered via JS -->
        </div>
      </div>
    </section>

    <!-- TAB 4: MENTAL MODEL MATRIX -->
    <section id="tab-models" class="tab-content">
      <div style="margin-bottom: 24px;">
        <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 8px;">The Universal Mental Model Index</h2>
        <p style="color: var(--text-muted);">Cross-indexed mental models, laws, and cognitive tools extracted from the 500-book foundation.</p>
      </div>
      <div class="matrix-grid" id="matrix-grid">
        <!-- Rendered via JS -->
      </div>
    </section>

    <!-- TAB 5: DISTILLATION ENGINE LAB -->
    <section id="tab-lab" class="tab-content">
      <div class="lab-box">
        <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 12px; color: var(--accent-crimson);">The 7-Layer Distillation Engine Blueprint</h2>
        <p style="margin-bottom: 20px; color: var(--text-muted);">
          To maintain replacement-grade fidelity across all 500 books, use this exact prompt instruction blueprint when digesting and distilling raw book texts:
        </p>
        <textarea class="lab-prompt-area" readonly id="lab-prompt-template">
# CODEX DISTILLATION PROTOCOL (7-LAYER STANDARD)

Target Book: [INSERT BOOK TITLE & AUTHOR]
Objective: Produce an exhaustive, replacement-grade master codex that eliminates the need to read the source text.

Structure Required:
1. Master Theoretical Architecture: Epistemic classification, theoretical pedigree, core mechanical thesis, quantitative/compounding formulas.
2. Emotional Resonance & Narrative Arc: The human crucible, visceral personal stakes, master analogies, and emotional inflection points.
3. Forensic Chapter-by-Chapter Codification: For EVERY SINGLE chapter:
   - Irreducible Axiom
   - Causal & Mechanical Logic
   - Primary Empirical Study / Anchor Evidence (Researcher, year, sample, data)
   - Actionable Heuristics & Verbatim Formulas
   - Nuances, Edge Cases & Failure Modes
4. Landmark Empirical Corpus: Full catalog of experiments, trials, and historical case studies.
5. Operational Field Manual: Diagnostic decision trees, verbatim conversational scripts, habit tracking scorecards, and typology calibration.
6. Skeptical Auditor's Critique: Author biases, cherry-picked data, peer-reviewed limits, and shadow states.
7. Active Recall Flashcard Suite: 15-30 causal mechanism Q&As for spaced repetition.
        </textarea>
        <button class="btn-ctrl" onclick="copyLabPrompt()">📋 Copy Distillation Prompt Template</button>
      </div>
    </section>

  </div>

  <script>
    // Embedded Catalog Data
    const BOOKS = ${JSON.stringify(catalogData.books)};
    const CODICES = ${JSON.stringify(renderedCodices)};
    const FLASHCARDS = ${JSON.stringify(FLASHCARDS)};

    let currentPillarFilter = 'all';
    let currentSearchTerm = '';

    // Initialize UI
    window.addEventListener('DOMContentLoaded', () => {
      renderBooksGrid();
      loadSelectedCodex('atomic-habits');
      renderFlashcards();
      renderMentalModels();
    });

    // Tab Navigation
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
      if (targetBtn) targetBtn.classList.add('active');

      const targetContent = document.getElementById('tab-' + tabId);
      if (targetContent) targetContent.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Book Catalog Rendering
    function renderBooksGrid() {
      const grid = document.getElementById('books-grid');
      grid.innerHTML = '';

      const filtered = BOOKS.filter(b => {
        const matchesPillar = (currentPillarFilter === 'all') 
          || (currentPillarFilter === 'distilled' && b.status === 'distilled')
          || (b.pillar_id == currentPillarFilter);

        const searchLower = currentSearchTerm.toLowerCase();
        const matchesSearch = !currentSearchTerm 
          || b.title.toLowerCase().includes(searchLower)
          || b.author.toLowerCase().includes(searchLower)
          || b.core_axiom.toLowerCase().includes(searchLower)
          || (b.key_models && b.key_models.some(m => m.toLowerCase().includes(searchLower)));

        return matchesPillar && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">No books found matching criteria.</div>';
        return;
      }

      filtered.forEach(b => {
        const isDistilled = b.status === 'distilled';
        const card = document.createElement('div');
        card.className = 'book-card ' + (isDistilled ? 'distilled-card' : '');

        let modelsHtml = '';
        if (b.key_models && b.key_models.length > 0) {
          modelsHtml = b.key_models.slice(0, 4).map(m => '<span class="model-tag">' + m + '</span>').join('');
        }

        card.innerHTML = \`
          <div class="card-top">
            <div class="card-badges">
              <span class="badge-status \${isDistilled ? 'badge-ready' : 'badge-queue'}">
                \${isDistilled ? '⭐ Replacement Ready' : '⏳ Queued for Ingestion'}
              </span>
              <span class="badge-pillar">Pillar \${b.pillar_id}: \${b.pillar_name.split(',')[0]}</span>
            </div>
            <h3 class="book-title serif">\${b.title}</h3>
            <div class="book-author">\${b.author} (\${b.year})</div>
            <div class="book-axiom-box">"\${b.core_axiom}"</div>
            
            <span class="section-title-sm">Emotional Stakes & Human Crucible:</span>
            <div class="emotional-stakes-box">\${b.emotional_stakes}</div>

            <span class="section-title-sm">Core Mental Models:</span>
            <div class="model-tags">\${modelsHtml}</div>
          </div>

          <div class="card-footer">
            <span class="saved-time-txt">⏱️ \${b.reading_time_saved}</span>
            \${isDistilled ? \`<button class="btn-read-codex" onclick="openBookInReader('\${b.id}')">Read Full Codex →</button>\` : \`<span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">In Pipeline</span>\`}
          </div>
        \`;
        grid.appendChild(card);
      });
    }

    function filterByPillar(pillarId, btn) {
      document.querySelectorAll('#pillar-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPillarFilter = pillarId;
      renderBooksGrid();
    }

    function filterBooks() {
      currentSearchTerm = document.getElementById('catalog-search').value;
      renderBooksGrid();
    }

    // Codex Reader Engine
    function openBookInReader(bookId) {
      switchTab('reader');
      const select = document.getElementById('reader-select');
      select.value = bookId;
      loadSelectedCodex(bookId);
    }

    function loadSelectedCodex(bookId) {
      const article = document.getElementById('reader-content');
      const toc = document.getElementById('reader-toc');
      
      const codex = CODICES[bookId];
      if (!codex) {
        article.innerHTML = '<div style="padding:40px; text-align:center;">Codex in queue for distillation.</div>';
        toc.innerHTML = '';
        return;
      }

      article.innerHTML = codex.html;

      // Extract Headings to populate TOC
      toc.innerHTML = '';
      const headings = article.querySelectorAll('h2, h3, h4');
      headings.forEach((h, idx) => {
        if (!h.id) {
          h.id = 'heading-' + idx;
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        toc.appendChild(li);
      });
    }

    // Flashcards Engine
    function renderFlashcards() {
      const container = document.getElementById('flashcard-container');
      container.innerHTML = '';

      FLASHCARDS.forEach((fc, idx) => {
        const card = document.createElement('div');
        card.className = 'flashcard-card';
        card.innerHTML = \`
          <div class="fc-header">
            <span>\${fc.book}</span>
            <span>\${fc.pillar}</span>
          </div>
          <div class="fc-question">\${fc.question}</div>
          <div class="fc-answer-box" id="fc-ans-\${idx}">\${fc.answer}</div>
          <div class="fc-controls">
            <button class="btn-ctrl" onclick="toggleAnswer(\${idx}, this)">👁️ Reveal Causal Mechanism</button>
            <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">Active Recall Drill</span>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    function toggleAnswer(idx, btn) {
      const ansBox = document.getElementById('fc-ans-' + idx);
      if (ansBox.style.display === 'block') {
        ansBox.style.display = 'none';
        btn.textContent = '👁️ Reveal Causal Mechanism';
      } else {
        ansBox.style.display = 'block';
        btn.textContent = 'Hide Mechanism';
      }
    }

    // Mental Models Matrix
    function renderMentalModels() {
      const grid = document.getElementById('matrix-grid');
      grid.innerHTML = '';

      const modelMap = {};
      BOOKS.forEach(b => {
        if (b.key_models) {
          b.key_models.forEach(m => {
            if (!modelMap[m]) {
              modelMap[m] = [];
            }
            modelMap[m].push(b.title);
          });
        }
      });

      Object.keys(modelMap).forEach(m => {
        const card = document.createElement('div');
        card.className = 'matrix-card';
        card.innerHTML = \`
          <h4 class="matrix-title serif">\${m}</h4>
          <div class="matrix-desc">Foundational operational heuristic and analytical model.</div>
          <div class="matrix-books">Anchored in: \${modelMap[m].join(', ')}</div>
        \`;
        grid.appendChild(card);
      });
    }

    // Theme Switcher
    function setTheme(theme) {
      document.body.className = '';
      if (theme === 'midnight') document.body.classList.add('theme-midnight');
      if (theme === 'sepia') document.body.classList.add('theme-sepia');
    }

    // Font Sizer
    let currentFontSize = 16;
    function adjustFontSize(delta) {
      currentFontSize = Math.max(13, Math.min(22, currentFontSize + delta));
      document.documentElement.style.setProperty('--font-scale', currentFontSize + 'px');
    }

    // Copy Prompt
    function copyLabPrompt() {
      const text = document.getElementById('lab-prompt-template').value;
      navigator.clipboard.writeText(text).then(() => {
        alert('Distillation prompt copied to clipboard!');
      });
    }
  </script>
</body>
</html>`;

// Write to docs/notebook.html
const outPath = path.join(__dirname, '..', 'docs', 'notebook.html');
fs.writeFileSync(outPath, htmlTemplate, 'utf-8');
console.log(`Successfully compiled all-in-one Single HTML Notebook at: ${outPath} (${(htmlTemplate.length / 1024).toFixed(1)} KB)`);
