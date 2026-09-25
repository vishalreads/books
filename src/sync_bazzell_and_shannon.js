const fs = require('fs');
const path = require('path');

// 1. Update docs/library-index.json
const libIndexPath = path.join(__dirname, '..', 'docs', 'library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf-8'));

if (!libIndex.categories.includes("Security, Cryptography, Privacy & Tradecraft")) {
  libIndex.categories.push("Security, Cryptography, Privacy & Tradecraft");
}

const bazzellEntry = {
  id: "open-source-intelligence-techniques",
  title: "Open Source Intelligence Techniques",
  subtitle: "Resources for Searching and Analyzing Online Information (6th Edition)",
  author: "Michael Bazzell",
  year: 2018,
  publisher: "CreateSpace / IntelTechniques",
  epistemic_tier: "Tier 1: Operational Tradecraft & Digital Forensics",
  tier_short: "Tier 1",
  category: "Security, Cryptography, Privacy & Tradecraft",
  original_volume: "480 Pages (24 Chapters)",
  reading_time_saved: "16.0 hrs saved",
  hours_val: 16.0,
  core_axiom: "95% of actionable intelligence value derives from the disciplined, lawful exploitation of public digital exhaust across fragmented namespaces without alerting the target.",
  tags: [
    "OSINT",
    "Digital Forensics",
    "Investigation",
    "Dorking",
    "OPSEC",
    "Social Engineering",
    "Privacy"
  ],
  key_models: [
    "The Multi-Vector Identity Resolution & Triangulation Doctrine",
    "The Sock Puppet Isolation & Demographic Genesis Architecture",
    "The Advanced Boolean Dorking Matrix (site:, intitle:, inurl:, filetype:)",
    "The WebRTC & Network Leak Containment Model",
    "The Mobile Contact Synchronization Exploitation Engine",
    "The Multi-Tier Investigative Pivot Flowchart (Email, Username, Phone, Domain)"
  ],
  landmark_studies: [
    "Smith v. Maryland / Carpenter v. United States Third-Party Doctrine",
    "Computer Fraud and Abuse Act (18 U.S.C. § 1030) Access Boundaries",
    "Electronic Communications Privacy Act (18 U.S.C. § 2510) Standards",
    "Buscador Linux Investigative Forensic Architecture (Bazzell & Westcott, 2018)"
  ],
  html_path: "distillations/open-source-intelligence-techniques/index.html",
  markdown_path: "distillations/open-source-intelligence-techniques/master-notes.md",
  featured: true
};

const shannonEntry = {
  id: "dont-bug-me",
  title: "Don't Bug Me: The Latest High-Tech Spy Methods",
  subtitle: "A Manual for Self-Defense Against Eavesdroppers & Technical Surveillance Countermeasures (TSCM)",
  author: "M.L. Shannon",
  year: 1992,
  publisher: "Paladin Press",
  epistemic_tier: "Tier 1: Physical TSCM & Electronic Countersurveillance",
  tier_short: "Tier 1",
  category: "Security, Cryptography, Privacy & Tradecraft",
  original_volume: "150 Pages (10 Parts + 10 Appendices)",
  reading_time_saved: "6.0 hrs saved",
  hours_val: 6.0,
  core_axiom: "Surveillance is constrained by immutable physical laws; every transmitter radiates energy, every semiconductor harmonic reflects RF, and every physical tap alters line impedance.",
  tags: [
    "TSCM",
    "Countersurveillance",
    "Wiretaps",
    "RF Bugs",
    "NLJD",
    "Physical Security",
    "TEMPEST"
  ],
  key_models: [
    "The Acoustic Transducer to Modulation Pipeline",
    "The Non-Linear Junction Detector Harmonic Principle (2nd vs 3rd Harmonic)",
    "Series vs. Parallel Wiretap Electrical Displacement (Voltage/Resistance Mismatch)",
    "The Infinity Transmitter Acoustic Seizure Architecture",
    "The Time-Domain Reflectometry (TDR) Pulse Echo Mapping Engine",
    "The Systematic 3-Level Physical & RF Sweep Protocol"
  ],
  landmark_studies: [
    "Wim van Eck Electromagnetic Radiation from Video Display Units (Computers & Security, 1985)",
    "Bell System Technical Journal: Analog POTS Loop Electrical Standards",
    "U.S. Department of Defense TEMPEST / NACSIM 5100A Standards",
    "Principles of Non-Linear Junction Detection in Semiconductor Physics"
  ],
  html_path: "distillations/dont-bug-me/index.html",
  markdown_path: "distillations/dont-bug-me/master-notes.md",
  featured: true
};

// Add or update Bazzell
const bazzellIdx = libIndex.books.findIndex(b => b.id === "open-source-intelligence-techniques");
if (bazzellIdx >= 0) {
  libIndex.books[bazzellIdx] = bazzellEntry;
} else {
  libIndex.books.push(bazzellEntry);
}

// Add or update Shannon
const shannonIdx = libIndex.books.findIndex(b => b.id === "dont-bug-me");
if (shannonIdx >= 0) {
  libIndex.books[shannonIdx] = shannonEntry;
} else {
  libIndex.books.push(shannonEntry);
}

// Recalculate totals
libIndex.total_books = libIndex.books.length;
libIndex.total_hours_saved = parseFloat(libIndex.books.reduce((acc, b) => acc + (b.hours_val || 0), 0).toFixed(1));
libIndex.last_updated = "2026-09-25";

fs.writeFileSync(libIndexPath, JSON.stringify(libIndex, null, 2), 'utf-8');
console.log(`Updated library-index.json: total_books = ${libIndex.total_books}, total_hours_saved = ${libIndex.total_hours_saved}`);

// 2. Update docs/catalog-500.json
const catalogPath = path.join(__dirname, '..', 'docs', 'catalog-500.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

// Check Bazzell in catalog
let catBazzell = catalog.books.find(b => b.id === "open-source-intelligence-techniques");
if (catBazzell) {
  catBazzell.status = "distilled";
  catBazzell.markdown_path = "distillations/open-source-intelligence-techniques/master-notes.md";
  catBazzell.html_path = "distillations/open-source-intelligence-techniques/index.html";
} else {
  catalog.books.push({
    id: "open-source-intelligence-techniques",
    title: "Open Source Intelligence Techniques",
    subtitle: "Resources for Searching and Analyzing Online Information (6th Edition)",
    author: "Michael Bazzell",
    year: 2018,
    pillar_id: 6,
    pillar_name: "Science, Technology & Computing",
    epistemic_tier: "Tier 1: Operational Tradecraft & Digital Forensics",
    tier_short: "Tier 1",
    status: "distilled",
    core_axiom: bazzellEntry.core_axiom,
    emotional_stakes: "The constant psychological tension of operational exposure: realizing that the moment an investigator queries a target's assets using unhardened browsers or sloppy personas, the investigator becomes the hunted.",
    key_models: bazzellEntry.key_models,
    landmark_studies: bazzellEntry.landmark_studies,
    reading_time_saved: bazzellEntry.reading_time_saved,
    original_volume: bazzellEntry.original_volume,
    markdown_path: "distillations/open-source-intelligence-techniques/master-notes.md",
    html_path: "distillations/open-source-intelligence-techniques/index.html"
  });
}

// Check Shannon in catalog
let catShannon = catalog.books.find(b => b.id === "dont-bug-me");
if (catShannon) {
  catShannon.status = "distilled";
  catShannon.markdown_path = "distillations/dont-bug-me/master-notes.md";
  catShannon.html_path = "distillations/dont-bug-me/index.html";
} else {
  catalog.books.push({
    id: "dont-bug-me",
    title: "Don't Bug Me: The Latest High-Tech Spy Methods",
    subtitle: "A Manual for Self-Defense Against Eavesdroppers & Technical Surveillance Countermeasures (TSCM)",
    author: "M.L. Shannon",
    year: 1992,
    pillar_id: 6,
    pillar_name: "Science, Technology & Computing",
    epistemic_tier: "Tier 1: Physical TSCM & Electronic Countersurveillance",
    tier_short: "Tier 1",
    status: "distilled",
    core_axiom: shannonEntry.core_axiom,
    emotional_stakes: "The psychological boundary between paranoid delusion and forensic vigilance: conquering the fear of invisible adversaries by grounding defense in measurable electrical and physical realities.",
    key_models: shannonEntry.key_models,
    landmark_studies: shannonEntry.landmark_studies,
    reading_time_saved: shannonEntry.reading_time_saved,
    original_volume: shannonEntry.original_volume,
    markdown_path: "distillations/dont-bug-me/master-notes.md",
    html_path: "distillations/dont-bug-me/index.html"
  });
}

catalog.foundation_tier_count = catalog.books.filter(b => b.status === "distilled").length;
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`Updated catalog-500.json: distilled books = ${catalog.foundation_tier_count}, total = ${catalog.books.length}`);
