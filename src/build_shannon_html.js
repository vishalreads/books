const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'docs', 'distillations', 'dont-bug-me', 'master-notes.md');
const mdContent = fs.readFileSync(mdPath, 'utf-8');

function parseMarkdown(md) {
  let lines = md.replace(/\r\n/g, '\n').split('\n');
  let html = [];
  let inList = false;
  let inBlockquote = false;
  let inCodeBlock = false;
  let codeBuffer = [];
  let inTable = false;
  let tableBuffer = [];

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inlineFormat(text) {
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\$\$([^$]+)\$\$/g, '<div class="formula-box">$$$1$$</div>');
    text = text.replace(/\$([^$]+)\$/g, '<span style="font-family:monospace; background:var(--code-bg); padding:1px 4px;">\\($1\\)</span>');
    text = text.replace(/&rarr;/g, '→').replace(/->/g, '→');
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        html.push('<div class="formula-box"><pre><code>' + escapeHtml(codeBuffer.join('\n')) + '</code></pre></div>');
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

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableBuffer = [];
      }
      tableBuffer.push(trimmed);
      continue;
    } else if (inTable) {
      if (tableBuffer.length >= 2) {
        let tableHtml = '<div style="overflow-x:auto;"><table class="data-table">';
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

    if (!trimmed.startsWith('- ') && !trimmed.startsWith('* ') && !/^\d+\.\s/.test(trimmed) && inList) {
      html.push('</ul>');
      inList = false;
    }
    if (!trimmed.startsWith('>') && inBlockquote) {
      html.push('</blockquote>');
      inBlockquote = false;
    }

    if (trimmed === '') continue;

    if (/^(---|___|\*\*\*)$/.test(trimmed)) {
      html.push('<hr style="border:0; border-top:1px solid var(--border-light); margin:32px 0;" />');
      continue;
    }

    if (trimmed.startsWith('>')) {
      if (!inBlockquote) {
        html.push('<div class="quote-box">');
        inBlockquote = true;
      }
      let content = trimmed.replace(/^>\s*/, '');
      html.push('<p>' + inlineFormat(content) + '</p>');
      continue;
    }

    if (trimmed.startsWith('# ')) {
      let title = trimmed.substring(2);
      html.push(`<h1 class="title">${inlineFormat(title)}</h1>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      let title = trimmed.substring(3);
      html.push(`</section><section class="section-box"><div class="section-tag">${inlineFormat(title.split(':')[0])}</div><h2 class="section-title">${inlineFormat(title)}</h2>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      let title = trimmed.substring(4);
      html.push(`<h3 class="sub-title">${inlineFormat(title)}</h3>`);
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      let title = trimmed.substring(5);
      html.push(`<div class="chapter-card"><h4>${inlineFormat(title)}</h4>`);
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        html.push('<ul style="margin-left: 24px; margin-bottom: 16px;">');
        inList = true;
      }
      let content = trimmed.replace(/^[-*]\s+|\d+\.\s+/, '');
      html.push('<li style="margin-bottom: 6px;">' + inlineFormat(content) + '</li>');
      continue;
    }

    html.push('<p>' + inlineFormat(trimmed) + '</p>');
  }

  if (inList) html.push('</ul>');
  if (inBlockquote) html.push('</div>');

  return html.join('\n');
}

const parsedBody = parseMarkdown(mdContent);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Master Codex: Don't Bug Me by M.L. Shannon | Intellectualist</title>
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-subtle: #f4efe4;
      --bg-dark: #1e1b18;
      --text-main: #1c1b18;
      --text-muted: #575249;
      --accent-crimson: #85221c;
      --accent-slate: #22384a;
      --accent-gold: #966b1a;
      --border-light: #ded7c8;
      --border-dark: #7a7060;
      --code-bg: #ece6d8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.7;
    }

    h1, h2, h3, h4, .serif {
      font-family: "Georgia", "Cambria", "Times New Roman", serif;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: var(--text-main);
    }

    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 30px 20px 120px 20px;
    }

    .gazette-header {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 6px solid var(--accent-gold);
      padding: 36px 40px;
      margin-bottom: 30px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.03);
    }

    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 14px;
      margin-bottom: 20px;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.09em;
      color: var(--accent-slate);
      font-weight: 700;
    }

    .badge-tier {
      background: var(--accent-gold);
      color: #fff;
      padding: 4px 10px;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    .title {
      font-size: 2.3rem;
      line-height: 1.2;
      margin-bottom: 14px;
      color: var(--bg-dark);
    }

    .author-line {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 18px;
      font-style: italic;
    }

    .nav-links {
      display: flex;
      gap: 16px;
      margin-top: 15px;
    }

    .nav-link {
      color: var(--accent-crimson);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      border-bottom: 1px dotted var(--accent-crimson);
    }

    .nav-link:hover {
      border-bottom-style: solid;
    }

    .section-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 36px 40px;
      margin-bottom: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }

    .section-tag {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-gold);
      margin-bottom: 8px;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-light);
    }

    .sub-title {
      font-size: 1.25rem;
      margin: 24px 0 12px 0;
      color: var(--accent-slate);
    }

    p {
      margin-bottom: 16px;
      text-align: justify;
    }

    code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.88em;
      background: var(--code-bg);
      padding: 2px 5px;
      border-radius: 3px;
      color: #7a221c;
    }

    .formula-box {
      background: #1e1b18;
      color: #ded7c8;
      padding: 16px 20px;
      border-left: 4px solid var(--accent-gold);
      margin: 20px 0;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 0.88rem;
      line-height: 1.5;
      overflow-x: auto;
    }

    .formula-box code {
      background: transparent;
      color: #9cdcfe;
      padding: 0;
    }

    .quote-box {
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-gold);
      padding: 16px 20px;
      margin: 18px 0;
      font-style: italic;
      color: #38342e;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 0.92rem;
    }

    .data-table th, .data-table td {
      border: 1px solid var(--border-light);
      padding: 10px 14px;
      text-align: left;
    }

    .data-table th {
      background: var(--bg-subtle);
      font-weight: 700;
      color: var(--accent-slate);
    }

    .data-table tr:nth-child(even) {
      background: #faf7f0;
    }

    .chapter-card {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 18px 22px;
      margin: 16px 0;
    }

    .chapter-card h4 {
      color: var(--accent-slate);
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="gazette-header">
      <div class="meta-bar">
        <span>Intellectualist Master Codex &bull; Track A</span>
        <span class="badge-tier">Pillar 10: Security &amp; Tradecraft</span>
      </div>
      <h1 class="title">Don't Bug Me: The Latest High-Tech Spy Methods</h1>
      <div class="author-line">Technical Surveillance Countermeasures (TSCM) &bull; M.L. Shannon &bull; Paladin Press</div>
      <p style="font-size: 1.05rem; color: var(--text-muted);">
        Exhaustive operational distillation capturing the physical mechanics of audio bugs, telephone taps, nonlinear junction detection, RF spectrum sweeps, and defensive TSCM protocols.
      </p>
      <div class="nav-links">
        <a class="nav-link" href="../../index.html">&larr; Return to Master Library</a>
        <a class="nav-link" href="../../notebook.html">Open Interactive Notebook</a>
        <a class="nav-link" href="master-notes.md">Download Markdown Codex</a>
      </div>
    </header>

    <main>
      ${parsedBody}
    </main>

    <footer style="margin-top: 50px; text-align: center; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-light); padding-top: 25px;">
      <p>The Intellectualist Codex Library &bull; Designed for Zero-Fidelity Replacement &bull; Strictly Defensive Technical Analysis</p>
    </footer>
  </div>
</body>
</html>`;

const outPath = path.join(__dirname, '..', 'docs', 'distillations', 'dont-bug-me', 'index.html');
fs.writeFileSync(outPath, htmlTemplate, 'utf-8');
console.log('Successfully generated:', outPath);
