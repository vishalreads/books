/**
 * Definitive BKRS Historical Master Codex Generator for Rajput Civilization
 * Operationalizes BKRS Rules 1–12, 20–23:
 * - Default Editorial Cream Theme (warm ivory, high-contrast serif typography)
 * - Strict 1,200-Year Chronological Sequence (734–1947+ CE) across 8 Movements & 34 Chapters
 * - Deep Continuous Historical Narrative Prose with Tactical, Archival, and Epistemic Detail
 * - Explicit Causal Transition Bridges Connecting Every Epoch
 * - Full BKRS Reader Shell Integration (Sidebar TOC, Theme Switcher, Search, Epistemic Guide)
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/rajput-unified-codex');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 Decoded Terms for Rosetta Stone
const rosettaTerms = [
  {
    term: "Naukar / Naukari",
    category: "Military Ethnohistory",
    traditional_claim: "The feudal vassal bound by blood and sacred oath to an absolute liege lord. (Tod)",
    modern_audit: "The soldier-for-hire in the competitive North Indian military labour market, moving freely between Sultanates, Mughals, and regional chieftains before 16th-century caste closure. (Dirk Kolff)",
    analogy: "A free-agent professional athlete in the modern draft market choosing the franchise offering the highest signing bonus and status, rather than a medieval serf."
  },
  {
    term: "Rajputization",
    category: "Sociology & Caste Formation",
    traditional_claim: "The pure, unbroken biological transmission of ancient Vedic solar and lunar Kshatriya bloodlines. (Tod)",
    modern_audit: "The socio-cultural process where successful pastoral, tribal, or mercenary warrior leaders patronized Brahmins and Charans to manufacture clean solar/lunar genealogies and close caste boundaries. (Kolff & Chattopadhyaya)",
    analogy: "A wildly successful startup founder hiring a prestigious public relations and branding firm to write a corporate myth proving his family was aristocratic for seven generations."
  },
  {
    term: "Jauhar & Saka",
    category: "Chivalric Protocol & Sacrificial Warfare",
    traditional_claim: "Tragic romantic mass suicide by women in response to medieval besiegers. (Tod)",
    modern_audit: "The formal, sacred two-stage battle protocol of unconditional resistance: Jauhar (women immolating in fire to prevent capture, eliminate hostage capital, and release men from domestic concern) followed immediately by Saka (men donning saffron robes, opening gates, and charging into death). (Harlan & Tod)",
    analogy: "A scuttling protocol on a naval battleship under absolute siege: destroying the ship and firing all munitions so zero intelligence, honor, or spoils are captured by the adversary."
  },
  {
    term: "Purbiya",
    category: "Military Labour Market",
    traditional_claim: "A regional geographical label for warriors from the eastern Gangetic plain.",
    modern_audit: "The vast infantry mercenary class from Awadh, Bihar, and Bundelkhand who identified as Rajputs through arms-bearing, playing a decisive role in Malwa and Gujarat before forming the backbone of the British Bengal Army. (Kolff)",
    analogy: "The Swiss pikemen of Renaissance Europe—peasant warriors whose regional reputation for elite martial contracts made their name synonymous with mercenary infantry service."
  },
  {
    term: "Kuldevi & Sati",
    category: "Anthropology & Religion",
    traditional_claim: "Folk goddesses and tragic mythological figures in folklore.",
    modern_audit: "The twin supernatural pillars of Rajput lineage continuity: the Kuldevi (goddess protecting the clan's biological and political survival) and the Sati (the heroic ancestor whose curse or blessing polices lineage morality). (Lindsey Harlan)",
    analogy: "A constitutional court and supreme guardian angel of a dynasty: safeguarding the family from extinction so long as members uphold strict behavioral honor."
  },
  {
    term: "Watan Jagir",
    category: "Mughal-Rajput Statecraft",
    traditional_claim: "Submission and loss of sovereign Rajput homeland to imperial overlords.",
    modern_audit: "The brilliant imperial compromise created by Akbar: the Rajput raja's ancestral kingdom was confirmed as an inalienable, hereditary estate (watan) while granting him imperial ranks (mansabs) and revenues outside Rajasthan. (Hallissey & Banerjee)",
    analogy: "A semi-autonomous state government retaining 100% control over its domestic territory while its governor simultaneously serves as a federal cabinet secretary with national revenue perks."
  },
  {
    term: "Agnikula (Fire-born Clans)",
    category: "Mythology & Genealogy",
    traditional_claim: "The miraculous creation of four warrior clans (Paramara, Parihara, Chalukya, Chauhan) from a sacrificial fire-pit on Mount Abu by sage Vashistha. (Tod / Prithviraj Raso)",
    modern_audit: "A bardic purification and legitimation metaphor developed between the 10th and 14th centuries to assimilate diverse martial lineages (including assimilated Central Asian and indigenous warriors) into orthodox Kshatriya status. (Modern Epigraphy & Banerjee)",
    analogy: "A naturalization ceremony for elite foreign recruits, granting them full honorary citizenship and sacred pedigree through an elaborate national ritual."
  },
  {
    term: "Asymmetric Fortress Architecture",
    category: "Military Engineering",
    traditional_claim: "Provincial copies of Persian and Mughal palaces and citadels. (Colonial surveys)",
    modern_audit: "An autonomous indigenous tradition of organic rock architecture, moulding bastions, cisterns, and palaces directly into jagged basalt ridges to withstand artillery and siege warfare. (Giles Tillotson)",
    analogy: "A stealth aircraft designed to match rugged radar-defying terrain rather than a symmetric neoclassical palace built on an open French lawn."
  },
  {
    term: "Dewan of Eklingji",
    category: "Sacred Kingship",
    traditional_claim: "The Maharana of Mewar as absolute divine monarch. (Tod)",
    modern_audit: "A radical constitutional theology where Lord Shiva (Eklingji) is the sole sovereign king of Mewar, and the Maharana is merely His mortal prime minister (Dewan), making territorial surrender an act of cosmic sacrilege. (Tod & Epigraphy)",
    analogy: "The Prime Minister of the United Kingdom acting strictly in the name of the Crown, unable to alienate British territory because it belongs to an eternal constitutional entity."
  },
  {
    term: "Charan & Bhat",
    category: "Diplomacy & Social Institutions",
    traditional_claim: "Simple court poets singing flattering eulogies to local rajas.",
    modern_audit: "The institutional genealogists, diplomatic ambassadors, and treaty guarantors of Western India. Their sacred inviolability meant an assault on a Charan led to suicide-curses (chandi) that destroyed the violator's legitimacy. (Kolff & Tod)",
    analogy: "An international credit rating agency merged with an accredited diplomatic ambassador: their word verified sovereign honor, and defying their guarantee ruined your political existence."
  },
  {
    term: "The Padmavat Trajectory",
    category: "Literary Memory & Historiography",
    traditional_claim: "An uninterrupted historical chronicle of Queen Padmini from 1303 CE onward. (Tod)",
    modern_audit: "A 400-year evolution: originating in 1540 as an Awadhi Sufi mystical allegory by Malik Muhammad Jayasi, adopted in 1589 by Jain poet Hemratan, codified into official Mewar dynastic memory in 17th-century Sisodia chronicles, and popularized globally by Tod and Bengali nationalists. (Ramya Sreenivasan)",
    analogy: "King Arthur and the Holy Grail: beginning as chivalric poetry, evolving into royal English state ideology, and ultimately becoming a global cinematic icon."
  },
  {
    term: "The Intelligence of Tradition",
    category: "Art History & Visual Culture",
    traditional_claim: "Crude, flat folk illustrations copying Mughal imperial realism with less technical finesse.",
    modern_audit: "A deliberate, highly sophisticated aesthetic system using saturated colour fields, continuous narrative, and emotional rasas (vir and shringara) to assert sacred legitimacy and dynastic continuity against imperial homogenisation. (Molly Emma Aitken & Basil Gray)",
    analogy: "Modernist expressionism (e.g. Matisse or Rothko) choosing emotive color planes and symbolic space over photographic camera realism to convey psychological and spiritual truth."
  },
  {
    term: "Pahari Rajput Statecraft",
    category: "Himalayan Geopolitics",
    traditional_claim: "Isolated mountain tribes untouched by North Indian dynastic politics.",
    modern_audit: "A sophisticated network of hill dynasties (Katoch of Kangra, Bilaspur, Sirmaur, Chamba) that adopted Rajput genealogies and martial statecraft to rule diverse mountain populations, navigating Mughal suzerainty, Gorkha expansion, and British indirect rule. (Arik Moran)",
    analogy: "The Swiss canton confederacies: mountainous bastions maintaining autonomous legal identity while acting as strategic buffer states between surrounding empires."
  },
  {
    term: "Ranis' Executive Agency",
    category: "Gender & Political Authority",
    traditional_claim: "Passive, cloistered royal women destined solely for tragic immolation on funeral pyres.",
    modern_audit: "Elite royal dowagers and regents (such as the Guleri Rani or Sirmauri Ranis) who controlled state treasuries, negotiated with British political agents, mobilised monastic armies, and actively shaped dynastic successions. (Arik Moran & Lindsey Harlan)",
    analogy: "Queen Elizabeth I or Catherine de' Medici: operating from behind court protocols to command statecraft, finance, and foreign diplomacy with ruthless acumen."
  },
  {
    term: "Bhai-Bandh & Pattavat Council",
    category: "Constitutional Clan Structure",
    traditional_claim: "Absolute feudal monarchy ruling over docile peasant serfs.",
    modern_audit: "An agnatic kinship fraternity where the Raja was only primus inter pares (first among equals) and major estates (thikanas) were held by clan brethren (Pattavats/Umraos) who possessed constitutional veto power over royal succession. (A.C. Banerjee)",
    analogy: "A corporate board of co-founders holding equity and veto power over the CEO, preventing central despotism through distributed ownership."
  },
  {
    term: "Madhurya-Bhakti vs. Khatridharma",
    category: "Spiritual & Social Dialectic",
    traditional_claim: "Meerabai as a gentle singing saint peacefully absorbed into court folklore.",
    modern_audit: "The profound ideological collision between Meerabai's radical, unmediated bridal devotion to Krishna and the Sisodia royal house's demand for patriarchal purdah, Kuldevi blood-sacrifice, and dynastic submission. (Jyoti Jafa & Lindsey Harlan)",
    analogy: "Antigone defying the decree of King Creon: prioritizing sacred cosmic law over the secular demands of royal statecraft."
  },
  {
    term: "Nath Yogic Cosmology in Art",
    category: "Esoteric Visual Philosophy",
    traditional_claim: "Standard Hindu temple devotional scenes in Rajasthani painting.",
    modern_audit: "A revolutionary metaphysical school of Marwar painting under Maharaja Man Singh (1803–1843) visualizing esoteric Nath yogic texts (Siddha Siddhanta Paddhati) with massive cosmic golden voids, chakras, and subtle-body energy conduits. (Rosemary Crill)",
    analogy: "Abstract metaphysical quantum visualizations representing the origins of the cosmos before the emergence of physical form."
  },
  {
    term: "Bani Thani Aesthetic Canon",
    category: "Classical Painting Aesthetics",
    traditional_claim: "A generic portrait of a royal court dancer in Kishangarh.",
    modern_audit: "The supreme masterpiece of Indian lyricism created by Nihal Chand under Savant Singh (Nagari Das), transforming a historical royal poetess into the transcendental aesthetic embodiment of Sri Radha through exaggerated, ethereal facial geometry. (Jai Singh Neeraj & Sherman Lee)",
    analogy: "Leonardo da Vinci's Mona Lisa or Botticelli's Birth of Venus: elevating an individual human subject into an eternal cultural archetype of divine beauty."
  },
  {
    term: "Alha-Khand Chivalric Code (Vair)",
    category: "Epic Ballad Lore",
    traditional_claim: "Fictional folk poetry sung by wandering beggars.",
    modern_audit: "The living oral warrior epic of Bundelkhand celebrating the Banaphar champions Alha and Udal, codifying the absolute North Indian Rajput code of generational blood-feud (vair), refuge protection (sharan), and tragic self-destructive chivalry on the eve of the Turkish conquest. (Waterfield & Grierson)",
    analogy: "The Song of Roland or Beowulf: preserving the tragic heroic memory of a warrior nobility on the precipice of civilizational change."
  },
  {
    term: "Maratha Chauth & Rajput Decline",
    category: "18th-Century Geopolitics",
    traditional_claim: "A peaceful post-Mughal golden age of Rajput chivalry.",
    modern_audit: "The devastating 18th-century extraction of chauth (tribute) by Maratha warlords (Holkar, Scindia) exploiting internecine Rajput succession civil wars, draining treasuries and prompting the 1818 British Subsidiary Treaties. (A.C. Banerjee)",
    analogy: "Predatory subprime debt restructuring: external creditors exploiting internal corporate infighting to seize assets and force receivership."
  }
];

// 9 Historiographical Disputes
const disputeMatrix = [
  {
    subject: "1. The Origin & Nature of Rajputs",
    romantic_view: "An unbroken, biologically pure Vedic Kshatriya caste descending from Sun and Moon gods. (Tod)",
    academic_finding: "An open martial identity in the North Indian military labour market that closed its boundaries in the 16th c. through 'Rajputization'. (Dirk Kolff)",
    sources: "Dirk Kolff (Naukar, Rajput, and Sepoy) • B. D. Chattopadhyaya • Inscriptional Epigraphy",
    verdict: "Function preceded caste; genealogical closure was an early modern political construction."
  },
  {
    subject: "2. Feudalism vs. Agnatic Brotherhood",
    romantic_view: "A European-style contractual feudalism where monarchs leased land to noble tenants in exchange for serf labour. (Tod)",
    academic_finding: "An agnatic clan fraternity (Bhai-Bandh) where land belonged to the clan, nobles were kinsmen (Pattavats), and monarchs were strictly primus inter pares. (A.C. Banerjee)",
    sources: "Anil Chandra Banerjee (Aspects of Rajput State and Society) • Royal Pattas",
    verdict: "Rajput governance was rooted in kinship brotherhood and constitutional noble councils, not European feudal contracts."
  },
  {
    subject: "3. Historicity of Queen Padmini",
    romantic_view: "A literal 1303 historical queen whose beauty caused the siege of Chittor by Alauddin Khalji. (Tod)",
    academic_finding: "A 1540 Awadhi Sufi mystical allegory by Jayasi that was adopted by Jain and Sisodia bards over 400 years into dynastic scripture. (Ramya Sreenivasan)",
    sources: "Ramya Sreenivasan (The Many Lives of a Rajput Queen) • Amir Khusrau (1303)",
    verdict: "The 1303 siege is historical; Padmini was an allegorical figure transformed into royal memory."
  },
  {
    subject: "4. The 1679 Rebellion Against Aurangzeb",
    romantic_view: "A holy war of total Hindu resistance against a fanatical Muslim emperor seeking to destroy temples. (J. N. Sarkar / Tod)",
    academic_finding: "An administrative succession blunder and strategic conflict over the vital Delhi-Surat trade route and watan jagir autonomy. (Robert Hallissey)",
    sources: "Robert C. Hallissey (The Rajput Rebellion Against Aurangzeb) • Mughal Waqai",
    verdict: "Geopolitical and succession violation (watan) drove the war, though religious rhetoric was deployed."
  },
  {
    subject: "5. Haldighati Outcome (1576)",
    romantic_view: "A total Mughal victory crushing Mewar independence (Mughal chronicles) OR a total victory by Pratap (bardic poetry).",
    academic_finding: "A tactical Mughal field success (holding the pass) that was a total strategic failure: Pratap escaped and recaptured 90% of Mewar. (Badauni)",
    sources: "Abdul Qadir Badauni (Muntakhab-ut-Tawarikh) • Mewar stone inscriptions",
    verdict: "Tactical draw/Mughal field win, but decisive strategic failure for Akbar; Mewar was reclaimed by 1597."
  },
  {
    subject: "6. Autonomy of Rajput Painting",
    romantic_view: "A crude, provincial imitation of Mughal court realism with inferior perspective. (Early colonial art historians)",
    academic_finding: "An autonomous, philosophically coherent aesthetic system utilizing flat color fields and rasas (shringara, vir) to assert sacred sovereignty. (Aitken & Gray)",
    sources: "Molly Emma Aitken (The Intelligence of Tradition) • Basil Gray • Rosemary Crill",
    verdict: "Rajput art made deliberate anti-naturalistic philosophical choices to evoke emotional immersion and dynastic legitimacy."
  },
  {
    subject: "7. Meerabai's Historical Conflict",
    romantic_view: "A gentle mythological singer peacefully absorbed into court lore.",
    academic_finding: "A radical, subversive Bhakti spiritual revolt that rejected Sisodia patriarchal purdah, clan goddess (Kuldevi) blood-sacrifice, and royal widowhood. (Jyoti Jafa)",
    sources: "Jyoti Jafa (Meera, Sanga and Mewar) • Lindsey Harlan • Historical Padas",
    verdict: "Meerabai's life was a fierce ideological clash between egalitarian Vaishnava mysticism and aristocratic Khatridharma."
  },
  {
    subject: "8. Himalayan Pahari Kingship",
    romantic_view: "Primitive mountain hill tribes isolated from the mainstream political currents of India. (Colonial Gazettes)",
    academic_finding: "An interconnected network of sophisticated Rajput dynasties (Kangra, Bilaspur, Sirmaur) practicing agile diplomacy, clan assemblies (jheras), and fine art. (Arik Moran)",
    sources: "Arik Moran (Kingship and Polity on the Himalayan Borderland)",
    verdict: "The Western Himalayas were deeply integrated into North Indian Rajputization, Gorkha expansion, and British politics."
  },
  {
    subject: "9. Agency of Rajput Royal Women",
    romantic_view: "Tragic, passive, cloistered victims whose only historical function was immolation on the funeral pyre (sati).",
    academic_finding: "Astute political regents and dowagers (such as the Guleri Rani or Sirmauri Ranis) who held state power, managed treasuries, and commanded armies. (Arik Moran & Lindsey Harlan)",
    sources: "Arik Moran • Lindsey Harlan (Religion and Rajput Women)",
    verdict: "Elite women wielded immense executive, economic, and moral authority behind court protocols."
  }
];

// Read chapter data generator from separate module or assemble deeply here
console.log('Building definitive narrative engine...');

// Load chapter builder
const chapterBuilder = require('./rajput_narrative_chapters.js');
const epochs = chapterBuilder.epochs;

console.log(`Loaded ${epochs.length} historical epochs with ${epochs.reduce((acc, ep) => acc + ep.chapters.length, 0)} forensic chapters.`);

// Generate standalone HTML adhering to BKRS standards
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream" data-font="serif" data-size="base">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Rajput Chronicles: A Master Historiographical Synthesis (734–1947+ CE) — BKRS</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="apple-touch-icon" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <style>
    /* Editorial Enhancements for the Rajput Master Reader */
    .epoch-block {
      margin-bottom: 70px;
      padding-bottom: 30px;
    }
    .epoch-header {
      margin: 48px 0 28px 0;
      border-bottom: 2px solid var(--accent-crimson);
      padding-bottom: 14px;
    }
    .epoch-kicker {
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent-crimson);
      display: block;
      margin-bottom: 6px;
    }
    .epoch-title {
      font-family: var(--font-serif);
      font-size: 2.25rem;
      line-height: 1.25;
      color: var(--text-main);
      margin: 4px 0 8px 0;
      letter-spacing: -0.015em;
    }
    .epoch-desc {
      font-family: var(--font-serif);
      font-size: 1.1rem;
      font-style: italic;
      color: var(--text-muted);
      line-height: 1.6;
      max-width: 900px;
    }
    .chapter-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 36px 38px;
      margin-bottom: 40px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      position: relative;
    }
    .chapter-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 12px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 12px;
    }
    .chapter-date-badge {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--accent-crimson);
      background: var(--bg-subtle);
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-light);
    }
    .chapter-heading-deep {
      font-family: var(--font-serif);
      font-size: 1.65rem;
      line-height: 1.35;
      color: var(--text-main);
      margin-bottom: 16px;
    }
    .narrative-prose-deep {
      font-family: var(--font-serif);
      font-size: 1.08rem;
      line-height: 1.85;
      color: var(--text-main);
    }
    .narrative-prose-deep p {
      margin-bottom: 1.3em;
      text-align: justify;
      text-justify: inter-word;
    }
    .historical-blockquote {
      border-left: 3px solid var(--accent-crimson);
      margin: 22px 0 26px 16px;
      padding: 10px 0 10px 22px;
      font-family: var(--font-serif);
      font-style: italic;
      color: var(--text-main);
      background: var(--bg-subtle);
      border-radius: 0 4px 4px 0;
    }
    .historical-blockquote p {
      margin-bottom: 8px;
      line-height: 1.7;
    }
    .historical-blockquote cite {
      display: block;
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-style: normal;
      font-weight: 600;
      color: var(--accent-crimson);
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .causal-bridge {
      background: #faf4ea;
      border-left: 4px solid var(--accent-gold);
      padding: 18px 22px;
      margin: 30px 0;
      border-radius: 0 4px 4px 0;
    }
    .causal-bridge-title {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-gold);
      margin-bottom: 6px;
    }
    .causal-bridge-text {
      font-family: var(--font-serif);
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--text-main);
      font-style: italic;
    }
    .evidence-badge {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 3px 8px;
      border-radius: 3px;
      border: 1px solid var(--border-light);
      background: var(--bg-surface);
      color: var(--text-muted);
    }
    .table-container {
      overflow-x: auto;
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      margin: 28px 0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.92rem;
    }
    th, td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--border-subtle);
    }
    th {
      background: var(--bg-subtle);
      color: var(--accent-crimson);
      font-family: var(--font-serif);
      font-weight: 700;
      font-size: 0.96rem;
    }
    tr:hover td {
      background: var(--bg-subtle);
    }
    .sidebar-epoch-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent-crimson);
      padding: 12px 16px 4px;
      display: block;
    }
  </style>
</head>
<body class="bkrs-app">

  <!-- TOP APPLICATION BAR -->
  <header class="reader-topbar" id="reader-topbar">
    <div class="topbar-left">
      <button class="topbar-btn" id="sidebar-toggle" onclick="toggleSidebar()" title="Toggle Sidebar (Ctrl+\\)">
        ☰
      </button>
      <a href="../../index.html" class="topbar-back-link" title="Return to Intellectualist Library" style="display: inline-flex; align-items: center; gap: 6px;">
        <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon" style="width: 22px; height: 22px; object-fit: contain;">
        <span>← <span class="back-link-text">Master </span>Library</span>
      </a>
      <div class="topbar-divider"></div>
      <div class="topbar-title-block">
        <div class="topbar-book-title">The Rajput Chronicles (734–1947+ CE)</div>
        <div class="topbar-book-author">20+ Landmark Historical Volumes Synthesized</div>
      </div>
    </div>

    <!-- 3-VIEW SWITCHER -->
    <div class="view-switcher-pill" role="tablist">
      <button class="view-tab-btn active" id="btn-view-journey" role="tab" aria-selected="true" data-view="view-journey" onclick="switchView('view-journey')">
        <span class="view-icon">📖</span> <span class="view-label-text">The Chronological Journey</span>
      </button>
      <button class="view-tab-btn" id="btn-view-map" role="tab" aria-selected="false" data-view="view-map" onclick="switchView('view-map')">
        <span class="view-icon">🗺️</span> <span class="view-label-text">The Dynastic Compass</span>
      </button>
      <button class="view-tab-btn" id="btn-view-experience" role="tab" aria-selected="false" data-view="view-experience" onclick="switchView('view-experience')">
        <span class="view-icon">⚖️</span> <span class="view-label-text">Rosetta Stone & Disputes</span>
      </button>
    </div>

    <!-- CONTROLS RIGHT -->
    <div class="topbar-right">
      <button class="control-btn" id="theme-btn" onclick="cycleTheme()" title="Switch Theme (T)">
        🎨 <span class="btn-text">Theme</span>
      </button>
      <button class="control-btn" id="font-scale-btn" onclick="cycleFontScale()" title="Toggle Font Size">
        Aa
      </button>
    </div>
  </header>

  <!-- APP CONTAINER -->
  <div class="reader-shell-container">
    
    <!-- SIDEBAR NAVIGATION -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <span class="meta-label">TABLE OF CONTENTS</span>
        <div class="sidebar-stats">8 Epochs • 34 Forensic Chapters</div>
      </div>
      <div class="sidebar-scroll-area">
        ${epochs.map((ep, epIdx) => `
          <div class="sidebar-epoch-title">Epoch ${ep.roman}: ${ep.title.split(':')[0]}</div>
          ${ep.chapters.map(ch => `
            <div class="nav-chapter-item">
              <a href="#${ch.id}" class="nav-chapter-link" onclick="handleNavClick(event, '${ch.id}')">
                <span class="nav-ch-num">${ch.number}</span>
                <span class="nav-ch-title">${ch.title}</span>
                <span class="nav-ch-count">${ch.date}</span>
              </a>
            </div>
          `).join('')}
        `).join('')}
      </div>
    </aside>

    <!-- MAIN READING VIEWPORT -->
    <main class="reader-viewport" id="reader-viewport">
      <div class="reader-measure" id="reader-measure">

        <!-- VIEW A: THE MASTER CHRONOLOGICAL JOURNEY -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Multi-Source Canonical Master
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              The Rajput Chronicles
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A continuous, forensic 1,200-year history of Rajput civilization from the basalt crag of Chittor to the modern era. Synthesizing 20+ canonical volumes into an unbroken narrative of clan statecraft, mountain fortress architecture, military labour markets, female protective theology, painting workshops, and epic chivalry.
            </div>
          </div>

          <!-- THE 8 CHRONOLOGICAL EPOCHS -->
          ${epochs.map((ep, epIdx) => `
            <article class="epoch-block" id="epoch-${ep.roman.toLowerCase()}">
              <div class="epoch-header">
                <span class="epoch-kicker">Epoch ${ep.roman} • Chronological Movement</span>
                <h2 class="epoch-title">${ep.title}</h2>
                <p class="epoch-desc">${ep.description}</p>
              </div>

              ${ep.chapters.map(ch => `
                <div class="chapter-card-deep" id="${ch.id}">
                  <div class="chapter-meta-line">
                    <div>
                      <span class="chapter-date-badge">${ch.date}</span>
                      <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
                        Chapter ${ch.number} • ${ch.scope}
                      </span>
                    </div>
                    <span class="evidence-badge">${ch.epistemic_tag}</span>
                  </div>

                  <h3 class="chapter-heading-deep">${ch.title}</h3>

                  <div class="narrative-prose-deep">
                    ${ch.paragraphs.map(p => `<p>${p}</p>`).join('')}

                    ${ch.blockquote ? `
                      <blockquote class="historical-blockquote">
                        <p>${ch.blockquote.text}</p>
                        <cite>— ${ch.blockquote.citation}</cite>
                      </blockquote>
                    ` : ''}

                    ${ch.analysis_paragraphs ? ch.analysis_paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
                  </div>

                  ${ch.causal_bridge ? `
                    <div class="causal-bridge">
                      <div class="causal-bridge-title">Causal Consequence & Historical Transition</div>
                      <div class="causal-bridge-text">${ch.causal_bridge}</div>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </article>
          `).join('')}

        </section>

        <!-- VIEW B: THE DYNASTIC COMPASS -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Dynastic Compass</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Four Geopolitical Pillars of Rajput Sovereignty</p>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Royal House & Lineage</th>
                  <th>Capitals & Mountain Strongholds</th>
                  <th>Core Ethos & Sovereignty</th>
                  <th>Landmark Historical Monarchs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>House of Mewar</strong><br><em>(Sisodia Clan)</em><br>Solar Dynasty (Suryavansha)</td>
                  <td>Chittorgarh • Kumbhalgarh • Udaipur • Chawand</td>
                  <td><strong>Uncompromising Sovereignty.</strong> Ruled not as mortal kings, but as prime ministers (Dewan) of Shiva (Eklingji). Never gave daughters in marriage to Mughals.</td>
                  <td>Bappa Rawal (734)<br>Rana Kumbha (1433–68)<br>Rana Sanga (1508–27)<br>Maharana Pratap (1572–97)<br>Amar Singh I (1615)<br>Raj Singh I (1679)</td>
                </tr>
                <tr>
                  <td><strong>House of Marwar</strong><br><em>(Rathore Clan)</em><br>Rashtrakuta Lineage</td>
                  <td>Mandore • Jodhpur (Mehrangarh) • Bikaner</td>
                  <td><strong>Desert Chivalry & Agnatic Tenacity.</strong> Masters of desert cavalry charges and kinship brotherhood (Bhai-Bandh). Sustained 30-year resistance against Aurangzeb and pioneered Nath yogic painting.</td>
                  <td>Rao Jodha (1459)<br>Rao Maldeo (1532–62)<br>Rao Chandrasen (1562–81)<br>Jaswant Singh I (1638–78)<br>Durga Das Rathore (1679–1707)<br>Man Singh (1803–43)</td>
                </tr>
                <tr>
                  <td><strong>House of Amber / Jaipur</strong><br><em>(Kachwaha Clan)</em><br>Solar Dynasty</td>
                  <td>Dausa • Amber Citadel • Jaipur City</td>
                  <td><strong>Astute Realpolitik & High Command.</strong> Governed Kabul, Bengal, and Deccan for the Mughals, financing grand Hindu revival temples and astronomical science.</td>
                  <td>Raja Bharmal (1562)<br>Raja Bhagwant Das<br>Raja Man Singh I (1589–1614)<br>Mirza Raja Jai Singh I<br>Sawai Jai Singh II (1699–1743)</td>
                </tr>
                <tr>
                  <td><strong>Himalayan Hill States</strong><br><em>(Pahari Dynasties)</em><br>Trigarta / Mountain Clans</td>
                  <td>Kangra • Bilaspur (Kot Kahlur) • Sirmaur (Nahan)</td>
                  <td><strong>Mountain Sovereignty & Lyrical Devotion.</strong> Formed hill kingdoms using clan assemblies (jheras), patronizing the delicate Kangra miniature painting tradition.</td>
                  <td>Raja Sansar Chand of Kangra<br>Raja Mahan Chand of Bilaspur<br>Guleri Rani of Sirmaur<br>Amar Singh Thapa (Gorkha Commander)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-top: 40px;">
            <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--accent-crimson); margin-bottom: 16px;">The Agnatic Clan Commonwealth (Bhai-Bandh)</h3>
            <p style="font-family: var(--font-serif); line-height: 1.8; margin-bottom: 16px; text-align: justify;">
              As proven by constitutional historian Anil Chandra Banerjee, the Rajput state was not a European feudal hierarchy where an absolute monarch leased soil to subservient tenants. The territory belonged collectively to the clan by right of sword and ancestral blood. The Maharaja was merely <em>primus inter pares</em> (first among equals). 
            </p>
            <p style="font-family: var(--font-serif); line-height: 1.8; margin-bottom: 16px; text-align: justify;">
              The noble chiefs (Pattavats in Marwar, Umraos in Mewar) held their estates (thikanas) by hereditary right. In times of crisis, the council of nobles retained the constitutional authority to veto royal decrees and depose unfit rulers. When Maharana Udai Singh attempted to pass the crown of Mewar to his favorite younger son Jagmal in 1572, the nobles intercepted the procession, removed Jagmal from the throne, and girded the royal sword upon Maharana Pratap—preserving the survival of the state through distributed aristocratic governance.
            </p>
          </div>
        </section>

        <!-- VIEW C: ROSETTA STONE & DISPUTES -->
        <section id="view-experience" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Beginner's Rosetta Stone & Dispute Matrix</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">Deconstructing Folklore, Military Terminology, and Modern Historiographical Debates</p>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--accent-crimson); margin-bottom: 14px;">The 20 Essential Rajput Terms Decoded</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Term & Category</th>
                  <th>Traditional / Romantic Notion</th>
                  <th>Modern Historical Reality</th>
                  <th>Everyday Analogy</th>
                </tr>
              </thead>
              <tbody>
                ${rosettaTerms.map(t => `
                  <tr>
                    <td><strong>${t.term}</strong><br><span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">${t.category}</span></td>
                    <td>${t.traditional_claim}</td>
                    <td><strong style="color:var(--accent-crimson);">${t.modern_audit}</strong></td>
                    <td><em style="color:var(--accent-slate);">${t.analogy}</em></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--accent-crimson); margin: 44px 0 14px;">The 9-Point Historiographical Dispute Matrix</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Debate Subject</th>
                  <th>Romantic / Bardic Myth</th>
                  <th>Peer-Reviewed Academic Finding</th>
                  <th>Consensus Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${disputeMatrix.map(d => `
                  <tr>
                    <td><strong>${d.subject}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${d.sources}</span></td>
                    <td>${d.romantic_view}</td>
                    <td>${d.academic_finding}</td>
                    <td><strong style="color:var(--accent-forest);">${d.verdict}</strong></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  </div>

  <!-- READER ENGINE SCRIPT -->
  <script src="../../assets/js/reader-controls.js"></script>

  <script>
    function handleNavClick(e, targetId) {
      e.preventDefault();
      switchView('view-journey');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (window.innerWidth < 900) {
        toggleSidebar();
      }
    }

    function switchView(viewId) {
      document.querySelectorAll('.view-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
      });

      const activeBtn = document.getElementById('btn-' + viewId);
      const activePanel = document.getElementById(viewId);
      if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-selected', 'true');
      }
      if (activePanel) {
        activePanel.style.display = 'block';
        activePanel.classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log(`Saved index.html (Definitive BKRS Reader Shell with ${epochs.length} Epochs and 34 Chapters)`);

// Generate complete master-notes.md with deep narrative prose
let markdownContent = `# The Rajput Chronicles: A Master Historiographical Synthesis (734–1947+ CE)
**Corpus Scope:** 20+ Landmark Historical Volumes Synthesized  
**System Standard:** BKRS v1.0 Historical Multi-Source Master Codex  
**Corpus Architecture:** 8 Epochs | 34 Deep Forensic Chapters | 20 Rosetta Terms | 9-Point Dispute Matrix  
**Objective:** Replace fragmented summaries with a continuous, forensic, book-replacement chronicle tracing the 1,200-year history of Rajput civilization from antiquity to modern memory.

---

## The Dynastic Compass: Four Primary Anchors

| Royal House & Lineage | Capitals & Primary Strongholds | Core Ethos & Sovereignty | Landmark Historical Monarchs |
| :--- | :--- | :--- | :--- |
| **House of Mewar** *(Sisodia Clan)*<br>Solar Dynasty (Suryavansha) | Chittorgarh • Kumbhalgarh • Udaipur • Chawand | **Uncompromising Sovereignty.** Ruled as prime ministers (*Dewan*) of Shiva (Eklingji). Never attended Mughal court or gave daughters in marriage. | Bappa Rawal (734), Rana Kumbha (1433–68), Rana Sanga (1508–27), Maharana Pratap (1572–97), Amar Singh I (1615), Raj Singh I (1679) |
| **House of Marwar** *(Rathore Clan)*<br>Rashtrakuta Lineage | Mandore • Jodhpur (Mehrangarh) • Bikaner | **Desert Chivalry & Agnatic Tenacity.** Masters of rapid cavalry charges and kinship fraternity (*Bhai-Bandh*). 30-year resistance against Aurangzeb. | Rao Jodha (1459), Rao Maldeo (1532–62), Rao Chandrasen (1562–81), Jaswant Singh I (1638–78), Durga Das Rathore (1679–1707), Man Singh (1803–43) |
| **House of Amber / Jaipur** *(Kachwaha Clan)*<br>Solar Dynasty | Dausa • Amber Citadel • Jaipur City | **Astute Realpolitik & High Command.** Governed Kabul, Bengal, and Deccan for Mughals, financing Hindu revival temples and science. | Raja Bharmal (1562), Raja Man Singh I (1589–1614), Mirza Raja Jai Singh I, Sawai Jai Singh II (1699–1743) |
| **Himalayan Hill States** *(Pahari Dynasties)* | Kangra • Bilaspur (Kot Kahlur) • Sirmaur | **Mountain Sovereignty & Lyrical Devotion.** Established hill kingdoms via clan assemblies (*jheras*), patronizing Kangra miniature painting. | Raja Sansar Chand of Kangra, Raja Mahan Chand of Bilaspur, Guleri Rani of Sirmaur, Amar Singh Thapa (Gorkha) |

---

## The Master Chronological Journey

`;

epochs.forEach(ep => {
  markdownContent += `\n# Epoch ${ep.roman}: ${ep.title}\n*${ep.description}*\n\n`;
  ep.chapters.forEach(ch => {
    markdownContent += `### Chapter ${ch.number}: ${ch.title} (${ch.date})\n`;
    markdownContent += `**Scope:** ${ch.scope} | **Epistemic Status:** \`[${ch.epistemic_tag}]\`\n\n`;
    ch.paragraphs.forEach(p => {
      markdownContent += `${p}\n\n`;
    });
    if (ch.blockquote) {
      markdownContent += `> *"${ch.blockquote.text}"*\n> — **${ch.blockquote.citation}**\n\n`;
    }
    if (ch.analysis_paragraphs) {
      ch.analysis_paragraphs.forEach(p => {
        markdownContent += `${p}\n\n`;
      });
    }
    if (ch.causal_bridge) {
      markdownContent += `**Causal Transition:** *${ch.causal_bridge}*\n\n---\n\n`;
    }
  });
});

markdownContent += `\n## The Beginner's Rosetta Stone: 20 Essential Terms Decoded\n\n`;
markdownContent += `| Term & Category | Traditional / Romantic Notion | Modern Historical Reality | Everyday Analogy |\n| :--- | :--- | :--- | :--- |\n`;
rosettaTerms.forEach(t => {
  markdownContent += `| **${t.term}**<br>*\`${t.category}\`* | ${t.traditional_claim} | **${t.modern_audit}** | ${t.analogy} |\n`;
});

markdownContent += `\n## The 9-Point Historiographical Dispute Matrix\n\n`;
markdownContent += `| Dispute Subject | Traditional / Romantic View | Modern Historiographical Finding | Key Sources & Verdict |\n| :--- | :--- | :--- | :--- |\n`;
disputeMatrix.forEach(d => {
  markdownContent += `| **${d.subject}** | ${d.romantic_view} | ${d.academic_finding} | **${d.verdict}** (${d.sources}) |\n`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), markdownContent, 'utf8');
console.log('Saved master-notes.md (Full-length narrative chronicle)');

// Generate and save canonical knowledge-units.json
const knowledgeUnits = [];
epochs.forEach(epoch => {
  epoch.chapters.forEach(ch => {
    knowledgeUnits.push({
      id: ch.id,
      unit_number: ch.number,
      title: ch.title,
      movement: epoch.title,
      movement_period: epoch.period,
      scope: ch.scope,
      date: ch.date,
      epistemic_status: ch.epistemic_tag,
      primary_excerpt: ch.blockquote ? ch.blockquote.text : "",
      citation: ch.blockquote ? ch.blockquote.citation : "",
      narrative_paragraphs: ch.paragraphs,
      analysis_paragraphs: ch.analysis_paragraphs || [],
      causal_bridge: ch.causal_bridge,
      materiality: "CRITICAL"
    });
  });
});
fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${knowledgeUnits.length} canonical units)`);

// Save rosetta-stone.json
fs.writeFileSync(path.join(targetDir, 'rosetta-stone.json'), JSON.stringify(rosettaTerms, null, 2), 'utf8');
console.log(`Saved rosetta-stone.json (${rosettaTerms.length} decoded terms)`);

// Update library index
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
if (fs.existsSync(libIndexPath)) {
  const lib = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
  const rajputItem = lib.books.find(b => b.id === 'rajput-unified-codex');
  if (rajputItem) {
    rajputItem.author = "James Tod, Dirk H.A. Kolff, Anil Chandra Banerjee, Ramya Sreenivasan, Molly Emma Aitken, Rosemary Crill, Jyoti Jafa, Arik Moran, Lindsey Harlan, Giles Tillotson, Robert C. Hallissey, William Waterfield, George Abraham Grierson, Sherman E. Lee, Jai Singh Neeraj, Basil Gray, Eva Ulian";
    rajputItem.original_volume = "20+ Landmark Volumes Synthesized (8 Epochs, 34 Forensic Chapters, 20 Rosetta Terms, 9-Point Dispute Matrix)";
    rajputItem.reading_time_saved = "250.0 hrs saved";
    rajputItem.hours_val = 250;
    fs.writeFileSync(libIndexPath, JSON.stringify(lib, null, 2), 'utf8');
    console.log('Updated docs/library-index.json');
  }
}
