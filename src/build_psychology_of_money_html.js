const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'docs', 'distillations', 'the-psychology-of-money', 'master-notes.md');
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

    if (!trimmed.startsWith('- ') && !trimmed.startsWith('* ') && inList) {
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

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        html.push('<ul style="margin-left: 24px; margin-bottom: 16px;">');
        inList = true;
      }
      let content = trimmed.substring(2);
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
  <title>Master Codex: The Psychology of Money by Morgan Housel | Intellectualist</title>
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
      --accent-forest: #1e4d2b;
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
      border-top: 6px solid var(--accent-crimson);
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
      background: var(--accent-slate);
      color: #fff;
      padding: 4px 10px;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    .title {
      font-size: 2.75rem;
      line-height: 1.15;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 1.35rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 16px;
      font-family: "Georgia", serif;
    }

    .golden-test-banner {
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-crimson);
      padding: 16px 20px;
      font-style: italic;
      font-size: 0.96rem;
      color: var(--text-main);
      margin-top: 18px;
    }

    .section-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 40px;
      margin-bottom: 35px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    }

    .section-tag {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-crimson);
      font-weight: 700;
      margin-bottom: 6px;
    }

    h2.section-title {
      font-size: 2.1rem;
      border-bottom: 2px solid var(--border-light);
      padding-bottom: 14px;
      margin-bottom: 28px;
    }

    h3.sub-title {
      font-size: 1.4rem;
      margin: 32px 0 14px 0;
      color: var(--accent-slate);
      border-left: 4px solid var(--accent-slate);
      padding-left: 12px;
    }

    p { margin-bottom: 16px; text-align: justify; }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 22px 0;
      font-size: 0.92rem;
    }

    .data-table th, .data-table td {
      border: 1px solid var(--border-light);
      padding: 12px 15px;
      text-align: left;
      vertical-align: top;
    }

    .data-table th {
      background-color: var(--bg-subtle);
      color: var(--accent-slate);
      font-family: "Georgia", serif;
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .data-table tr:nth-child(even) td { background-color: #faf7f0; }

    .quote-box {
      font-family: "Georgia", serif;
      font-size: 1.1rem;
      font-style: italic;
      color: #1a1a1a;
      padding: 14px 22px;
      background: #ffffff;
      border: 1px solid var(--border-light);
      border-left: 4px solid var(--accent-slate);
      margin: 16px 0;
    }

    .formula-box {
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 0.88rem;
      background: var(--code-bg);
      border: 1px solid #dcd5c4;
      padding: 14px 18px;
      margin: 16px 0;
      white-space: pre-wrap;
    }

    .chapter-card {
      border: 1px solid var(--border-light);
      background: #fff;
      padding: 24px 28px;
      margin: 22px 0;
      border-top: 3px solid var(--accent-slate);
    }

    .chapter-card h4 {
      font-size: 1.25rem;
      color: var(--accent-slate);
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

<div class="container">
  <header class="gazette-header">
    <div style="margin-bottom: 16px;">
      <a href="../../index.html" style="display: inline-flex; align-items: center; gap: 6px; color: var(--accent-slate); text-decoration: none; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 6px 12px; background: var(--bg-subtle); border: 1px solid var(--border-light);">&larr; Return to Master Library</a>
    </div>
    <div class="meta-bar">
      <span>INTELLECTUALIST MASTER CODEX SERIES • NO. 008</span>
      <span class="badge-tier">Tier 2: Behavioral Finance & Applied Economic Psychology</span>
    </div>
    <h1 class="title">Master Codex: The Psychology of Money</h1>
    <div class="subtitle">Morgan Housel's Definitive Treatise on Wealth, Greed, Compounding, and Behavioral Endurance</div>
    <div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 12px;">
      <strong>Source Provenance:</strong> Harriman House (2020) • 242 Pages (20 Chapters + Introduction & Postscript) • 6.5 hrs saved
    </div>
    <div class="golden-test-banner">
      <strong>The Standard of Total Replacement:</strong> Engineered to eliminate the need to read the source text. Every single chapter is forensic, capturing the Ronald Read vs. Richard Fuscone divergence, the non-linear math of compounding, the Man in the Car Paradox, and the "Enough" heuristic.
    </div>
  </header>

  <main>
    ${parsedBody}
  </main>
</div>

</body>
</html>`;

const outHtmlPath = path.join(__dirname, '..', 'docs', 'distillations', 'the-psychology-of-money', 'index.html');
fs.writeFileSync(outHtmlPath, htmlTemplate, 'utf-8');
console.log(`Saved index.html to: ${outHtmlPath} (${(htmlTemplate.length / 1024).toFixed(1)} KB)`);
