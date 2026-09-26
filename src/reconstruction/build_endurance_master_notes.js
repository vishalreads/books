const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../../docs/distillations/endurance/knowledge-units.json');
const outputPath = path.join(__dirname, '../../docs/distillations/endurance/master-notes.md');

const ku = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
const units = ku.content_units || ku;

let md = '# Endurance: Shackleton\'s Incredible Voyage\n\n';
md += '**Author:** Alfred Lansing (1959)\n';
md += '**Subject:** Sir Ernest Shackleton and the Imperial Trans-Antarctic Expedition (1914–1916)\n';
md += '**System Standard:** BKRS v1.0 Total Replacement Master Codex\n';
md += '**Corpus Architecture:** 7 Parts | 41 Invariant Units | Full Survival & Leadership Traceability\n\n---\n\n';
md += '## Executive Epistemic Summary\n\n';
md += 'In August 1914, Sir Ernest Shackleton set sail aboard the *Endurance* with twenty-seven men to achieve the last great polar conquest: crossing the Antarctic continent overland from the Weddell Sea to the Ross Sea. In January 1915, within one day\'s sail of the Antarctic continent, the ship was trapped in pack ice. For the next ten months, the ice drifted relentlessly northward, gradually crushing the wooden hull like an eggshell. For twenty-eight men, the expedition transformed from a geographical triumph into an unprecedented twenty-two-month battle for physical and psychological survival on drifting ice floes, through sub-zero hurricane-force blizzards, across 800 miles of the world\'s deadliest ocean in a twenty-two-foot open wooden lifeboat (the *James Caird*), and over the uncharted, glaciated mountain precipices of South Georgia Island. Every single man survived.\n\n---\n\n';

units.forEach((u, idx) => {
  md += `### Unit ${idx + 1}: ${u.title}\n`;
  md += `**Part:** ${u.part} • **Chapter:** ${u.chapter} | **Date:** ${u.date_raw}${u.lat_long ? ` (${u.lat_long})` : ''}\n`;
  md += `**Epistemic Classification:** \`${u.epistemic_status}\` | **Materiality:** \`${u.materiality}\`\n\n`;
  md += `#### Summary & Narrative Context\n${u.summary_statement}\n\n`;
  if (u.context) md += `${u.context}\n\n`;
  if (u.environmental_conditions) md += `**Environmental Conditions:** ${u.environmental_conditions}\n\n`;
  if (u.survival_mechanics) md += `**Survival Mechanics:** ${u.survival_mechanics}\n\n`;
  if (u.leadership_principle) md += `**Leadership Principle:** ${u.leadership_principle}\n\n`;
  if (u.source_evidence && u.source_evidence.verbatim_excerpt) {
    md += `> "${u.source_evidence.verbatim_excerpt}"\n>\n> — *${u.source_evidence.attribution || 'Expedition Journal'}${u.source_evidence.source_location ? `, ${u.source_evidence.source_location}` : ''}*\n\n`;
  }
  if (u.causal_relationships) {
    md += `**Causal Transition & Consequences:**\n`;
    if (u.causal_relationships.antecedents) md += `- *Antecedents:* ${u.causal_relationships.antecedents.join('; ')}\n`;
    if (u.causal_relationships.consequences) md += `- *Consequences:* ${u.causal_relationships.consequences.join('; ')}\n`;
    md += `\n`;
  }
  md += `---\n\n`;
});

fs.writeFileSync(outputPath, md, 'utf8');
console.log(`Compiled docs/distillations/endurance/master-notes.md successfully! Total chars: ${md.length}`);
