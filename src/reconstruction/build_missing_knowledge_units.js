const fs = require('fs');
const path = require('path');

// 1. It Ends With Us
function buildItEndsWithUs() {
  const content = fs.readFileSync('docs/distillations/it-ends-with-us/master-notes.md', 'utf8');
  const units = [];
  const lines = content.split('\n');
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('#### Chapter ') || line.startsWith('#### Epilogue') || line.startsWith('#### Author\'s Note')) {
      if (currentUnit) units.push(currentUnit);
      const title = line.replace(/^####\s+/, '').trim();
      currentUnit = {
        id: `IEWU-U${(units.length + 1).toString().padStart(2, '0')}`,
        title: title,
        type: 'narrative_scene',
        content: [],
        takeaways: []
      };
    } else if (currentUnit) {
      if (line.startsWith('## ') || line.startsWith('### PART')) {
        units.push(currentUnit);
        currentUnit = null;
      } else if (line.trim().length > 0) {
        currentUnit.content.push(line.trim());
      }
    }
  }
  if (currentUnit) units.push(currentUnit);

  const formatted = units.map(u => ({
    id: u.id,
    title: u.title,
    genre: 'psychological_fiction',
    summary: u.content.slice(0, 3).join(' ').substring(0, 280),
    materiality: 'CRITICAL',
    epistemic_status: 'SOURCE_FACT',
    text_length: u.content.join('\n').length
  }));

  fs.writeFileSync('docs/distillations/it-ends-with-us/knowledge-units.json', JSON.stringify({ units: formatted }, null, 2));
  console.log(`It Ends With Us: generated ${formatted.length} units.`);
}

// 2. Autobiography of a Yogi
function buildYogi() {
  const content = fs.readFileSync('docs/distillations/autobiography-of-a-yogi/master-notes.md', 'utf8');
  const units = [];
  const lines = content.split('\n');
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('#### Chapter ') || line.startsWith('#### Model ')) {
      if (currentUnit) units.push(currentUnit);
      const title = line.replace(/^####\s+/, '').trim();
      currentUnit = {
        id: `YOGI-U${(units.length + 1).toString().padStart(2, '0')}`,
        title: title,
        type: line.startsWith('#### Model') ? 'metaphysical_model' : 'spiritual_narrative',
        content: []
      };
    } else if (currentUnit) {
      if (line.startsWith('## ') || line.startsWith('### PART')) {
        units.push(currentUnit);
        currentUnit = null;
      } else if (line.trim().length > 0) {
        currentUnit.content.push(line.trim());
      }
    }
  }
  if (currentUnit) units.push(currentUnit);

  const formatted = units.map(u => ({
    id: u.id,
    title: u.title,
    type: u.type,
    summary: u.content.slice(0, 3).join(' ').substring(0, 280),
    materiality: 'CRITICAL',
    epistemic_status: 'SOURCE_ARGUMENT',
    text_length: u.content.join('\n').length
  }));

  fs.writeFileSync('docs/distillations/autobiography-of-a-yogi/knowledge-units.json', JSON.stringify({ units: formatted }, null, 2));
  console.log(`Autobiography of a Yogi: generated ${formatted.length} units.`);
}

// 3. Don't Bug Me
function buildDontBugMe() {
  const content = fs.readFileSync('docs/distillations/dont-bug-me/master-notes.md', 'utf8');
  const units = [];
  const lines = content.split('\n');
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('### PART ') || (line.startsWith('#### ') && !line.startsWith('##### '))) {
      if (currentUnit) units.push(currentUnit);
      const title = line.replace(/^###+\s+/, '').trim();
      currentUnit = {
        id: `BUG-U${(units.length + 1).toString().padStart(2, '0')}`,
        title: title,
        type: 'technical_protocol',
        content: []
      };
    } else if (currentUnit) {
      if (line.startsWith('## ')) {
        units.push(currentUnit);
        currentUnit = null;
      } else if (line.trim().length > 0) {
        currentUnit.content.push(line.trim());
      }
    }
  }
  if (currentUnit) units.push(currentUnit);

  const formatted = units.map(u => ({
    id: u.id,
    title: u.title,
    type: u.type,
    summary: u.content.slice(0, 3).join(' ').substring(0, 280),
    materiality: 'CRITICAL',
    epistemic_status: 'SOURCE_FACT',
    text_length: u.content.join('\n').length
  }));

  fs.writeFileSync('docs/distillations/dont-bug-me/knowledge-units.json', JSON.stringify({ units: formatted }, null, 2));
  console.log(`Don't Bug Me: generated ${formatted.length} units.`);
}

// 4. OSINT Techniques
function buildOsint() {
  const content = fs.readFileSync('docs/distillations/open-source-intelligence-techniques/master-notes.md', 'utf8');
  const units = [];
  const lines = content.split('\n');
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('### Chapter ') || line.startsWith('### 1.') || line.startsWith('### 2.')) {
      if (currentUnit) units.push(currentUnit);
      const title = line.replace(/^###\s+/, '').trim();
      currentUnit = {
        id: `OSINT-U${(units.length + 1).toString().padStart(2, '0')}`,
        title: title,
        type: 'investigative_methodology',
        content: []
      };
    } else if (currentUnit) {
      if (line.startsWith('## ') && !line.includes('LAYER 3') && !line.includes('LAYER 2') && !line.includes('LAYER 1')) {
        units.push(currentUnit);
        currentUnit = null;
      } else if (line.trim().length > 0) {
        currentUnit.content.push(line.trim());
      }
    }
  }
  if (currentUnit) units.push(currentUnit);

  const formatted = units.map(u => ({
    id: u.id,
    title: u.title,
    type: u.type,
    summary: u.content.slice(0, 3).join(' ').substring(0, 280),
    materiality: 'CRITICAL',
    epistemic_status: 'SOURCE_FACT',
    text_length: u.content.join('\n').length
  }));

  fs.writeFileSync('docs/distillations/open-source-intelligence-techniques/knowledge-units.json', JSON.stringify({ units: formatted }, null, 2));
  console.log(`OSINT: generated ${formatted.length} units.`);
}

// 5. Bhagat Singh Unified Chronicle
function buildBhagatChronicle() {
  const content = fs.readFileSync('docs/distillations/bhagat-singh-unified-chronicle/master-notes.md', 'utf8');
  const units = [];
  const lines = content.split('\n');
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## Movement ') || (line.startsWith('### ') && !line.includes('Table of Chronological'))) {
      if (currentUnit) units.push(currentUnit);
      const title = line.replace(/^##+\s+/, '').replace(/\{#[^}]+\}/, '').trim();
      currentUnit = {
        id: `BSUC-U${(units.length + 1).toString().padStart(2, '0')}`,
        title: title,
        type: 'historical_movement',
        content: []
      };
    } else if (currentUnit) {
      if (line.startsWith('# ') || line.startsWith('## Integrated Foundational')) {
        units.push(currentUnit);
        currentUnit = null;
      } else if (line.trim().length > 0) {
        currentUnit.content.push(line.trim());
      }
    }
  }
  if (currentUnit) units.push(currentUnit);

  const formatted = units.map(u => ({
    id: u.id,
    title: u.title,
    type: u.type,
    summary: u.content.slice(0, 3).join(' ').substring(0, 280),
    materiality: 'CRITICAL',
    epistemic_status: 'SOURCE_FACT',
    text_length: u.content.join('\n').length
  }));

  fs.writeFileSync('docs/distillations/bhagat-singh-unified-chronicle/knowledge-units.json', JSON.stringify({ units: formatted }, null, 2));
  console.log(`Bhagat Singh Chronicle: generated ${formatted.length} units.`);
}

buildItEndsWithUs();
buildYogi();
buildDontBugMe();
buildOsint();
buildBhagatChronicle();
