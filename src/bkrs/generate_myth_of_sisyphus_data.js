/**
 * BKRS Canonical Generator for The Myth of Sisyphus (Albert Camus)
 * Constructs canonical knowledge-units.json, master-notes.md, and renders the 3-view portal.
 */

const fs = require('fs');
const path = require('path');

const bookSlug = 'the-myth-of-sisyphus';
const outputDir = path.join(__dirname, '..', '..', 'docs', 'distillations', bookSlug);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const CHAPTERS = [
  {
    part: "Section I: An Absurd Reasoning",
    num: 1,
    id: "ch-01",
    title: "Absurdity and Suicide (The Fundamental Question of Philosophy)",
    pages: "pp. 3–14",
    axiom: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living constitutes the fundamental question of philosophy.",
    mechanism: "All other philosophical inquiries—whether the world has three dimensions or twelve categories of mind—are secondary games. Men die for ideas, or kill themselves because they judge life is not worth the trouble. Camus examines why someone commits suicide: the feeling of absurdity arises when the human longing for clarity and meaning collides violently with the cold, irrational silence of the universe. Suicide is an evasion—a confession that one is outstripped by life or that one does not understand it.",
    heuristics: [
      "Distinguish between physical suicide (terminating biological life) and philosophical suicide (evading reality through spiritual leaps).",
      "Refuse to escape the friction of existence: to live is to keep the absurd alive.",
      "Acknowledge that life can be lived all the better if it has no ultimate transcendental meaning."
    ],
    quote: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy."
  },
  {
    part: "Section I: An Absurd Reasoning",
    num: 2,
    id: "ch-02",
    title: "An Absurd Walls (The Mechanical Daily Collapse into 'Why?')",
    pages: "pp. 15–28",
    axiom: "At any street corner, the feeling of absurdity can strike any man in the face: rising, streetcar, four hours in the office, meal, sleep, Monday-Tuesday-Wednesday-Thursday-Friday in the same rhythm—until one day the 'Why?' arises.",
    mechanism: "The absurd feeling is triggered by four distinct existential shocks: (1) The breakdown of mechanical daily habits: the routine suddenly collapses, and consciousness awakens; (2) The strangeness of nature: seeing the world stripped of human metaphors, recognizing that nature is alien, hostile, and indifferent; (3) The strangeness of other people and oneself: watching a man speak behind a glass booth, gesturing meaninglessly, or staring at one's own hands in a mirror as an unrecognizable stranger; (4) The visceral reality of physical death: time becomes our mortal enemy, bearing us toward irrevocable annihilation.",
    heuristics: [
      "When the 'Why?' arises, do not numb it with distraction or social sedation; use it as an invitation to lucid consciousness.",
      "Strip nature of anthropomorphic myths: the universe does not care about human happiness or suffering.",
      "Confront your mortality without flinching: awareness of death is the supreme engine of lucidity."
    ],
    quote: "Rising, streetcar, four hours in the office or the factory, meal, streetcar, four hours of work, meal, sleep, and Monday Tuesday Wednesday Thursday Friday and Saturday according to the same rhythm—this path is easily followed most of the time. But one day the 'why' arises and everything begins in that weariness tinged with amazement."
  },
  {
    part: "Section I: An Absurd Reasoning",
    num: 3,
    id: "ch-03",
    title: "Philosophical Suicide (The Escape into Transcendence)",
    pages: "pp. 29–48",
    axiom: "Existential thinkers deify the very irrational that crushes them; taking a leap of faith to escape the absurd is an act of intellectual cowardice—a philosophical suicide.",
    mechanism: "Camus critiques the great existentialists and phenomenologists: Søren Kierkegaard, Lev Chestov, Karl Jaspers, and Edmund Husserl. Each rightly diagnoses the absurdity of the human condition, but when faced with the unbearable void, each makes an irrational 'leap' (Kierkegaard leaps into Christian paradox; Chestov into arbitrary divine miracle; Husserl into eternal essences). Camus brands this 'Philosophical Suicide': killing the rational intellect in order to manufacture a comforting illusion of eternal hope. True integrity demands living in the tension without making the leap.",
    heuristics: [
      "Never reconcile contradictions by inventing comforting dogmas.",
      "Reject the 'leap of faith': if the universe is irrational, accept its irrationality rather than turning it into God.",
      "Live with what you know: maintain lucid reason while acknowledging its severe empirical boundaries."
    ],
    quote: "I do not know whether this world has a meaning that transcends it. But I know that I do not know that meaning and that it is impossible for me just now to know it. What can a meaning outside my condition mean to me? I can understand only in human terms."
  },
  {
    part: "Section I: An Absurd Reasoning",
    num: 4,
    id: "ch-04",
    title: "Absurd Freedom (Revolt, Freedom, and Passion)",
    pages: "pp. 49–68",
    axiom: "By eliminating eternal hope and illusory destiny, the absurd man achieves absolute earthly liberty; the three consequences are my revolt, my freedom, and my passion.",
    mechanism: "Discarding eternal meaning yields three profound operational consequences: (1) **Revolt**: An ongoing, constant defiance against one's mortal condition and the silence of the world. Revolt gives life its value and majesty. (2) **Freedom**: Liberated from the illusion of an afterlife, future goals, or divine purpose, one gains absolute present liberty. The condemned prisoner waiting for dawn is the freest human on earth because he has no tomorrow. (3) **Passion**: If quality of life is no longer measured by divine virtue, what matters is the **quantity of experiences**—burning through life with maximal intensity, awareness, and lucidity.",
    heuristics: [
      "Replace the search for the 'best' life with the pursuit of the most lived life.",
      "Live entirely in the present: hope for a better tomorrow is an opiate that steals the only reality you possess.",
      "Maintain active revolt: defying an indifferent universe through conscious presence is the highest human triumph."
    ],
    quote: "The absurd man realizes that hitherto he was bound to the postulate of hope... Now he feels free of that bondage. The present and the succession of presents before a constantly conscious soul—that is the ideal of the absurd man."
  },
  {
    part: "Section II: The Absurd Man",
    num: 5,
    id: "ch-05",
    title: "The Absurd Archetypes: Don Juan, The Actor, and The Conqueror",
    pages: "pp. 69–92",
    axiom: "The absurd man does not seek eternal ideals; he multiplies his presence in the world through ephemeral roles, transient conquests, and embodied passion.",
    mechanism: "Camus presents three personifications of the absurd mindset: (1) **Don Juan**: He does not lack love; he loves too intensely to settle for the myth of a single, lifelong romance. He multiplies his loves quantitatively, knowing each is transient and finite. (2) **The Actor**: The actor reigns over the ephemeral. He inhabits dozens of human souls and destinies for three hours on stage, then disappears into the dressing room. He proves that human identity is a series of transient masks. (3) **The Conqueror**: The political or military man of action who chooses historical struggle over contemplation. He knows that his empire will crumble to dust, but prefers the tactile clash of earthly forces over cowardly monastic withdrawal.",
    heuristics: [
      "Do not hoard emotions for a mythical future; expend them generously across your lifetime.",
      "Treat your social roles as an actor treats his script: commit to the role fully while recognizing it is a construct.",
      "Embrace direct worldly engagement: action without illusions is superior to passive contemplation."
    ],
    quote: "Don Juan does not think of 'collecting' women. He exhausts their number and with them his chances of life. 'Collecting' belongs to the man who wants to possess; Don Juan wants to experience."
  },
  {
    part: "Section III: Absurd Creation",
    num: 6,
    id: "ch-06",
    title: "Philosophy, Fiction, and Kirilov (The Artist as the Ultimate Rebel)",
    pages: "pp. 93–118",
    axiom: "Art is the supreme absurd triumph: to create without explaining, to sculpt a world knowing it will vanish into dust, is the ultimate gesture of rebellion.",
    mechanism: "The absurd artist creates without illusion. Unlike the dogmatic philosopher who constructs rigid metaphysical systems to explain away chaos, the novelist and artist simply describe reality in its concrete texture. Camus analyzes Kirilov in Dostoevsky's *Demons*: Kirilov realizes that if God does not exist, man is God, and the supreme act of divine sovereignty is to kill oneself without fear. Yet Dostoevsky himself ultimately retreats into Christian faith in *The Brothers Karamazov*, demonstrating how difficult it is for even genius creators to sustain the absurd without leaping.",
    heuristics: [
      "Express reality through description and sensory detail rather than moralistic preaching.",
      "Create freely without demanding that your work achieve immortality.",
      "A work of art that attempts to provide a universal philosophical answer ceases to be art; true art merely reflects human struggle."
    ],
    quote: "To create is to live twice. The creator's path is to observe, to enrich, and to multiply his images without adding an illusory doctrine to them."
  },
  {
    part: "Section IV: The Myth of Sisyphus",
    num: 7,
    id: "ch-07",
    title: "The Descent Down the Mountain (One Must Imagine Sisyphus Happy)",
    pages: "pp. 119–128",
    axiom: "There is no fate that cannot be surmounted by scorn. The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
    mechanism: "The gods condemned Sisyphus to ceaselessly roll a massive boulder up to the summit of a mountain, only to watch it roll back down to the plains by its own weight. They had thought with some reason that there is no more dreadful punishment than futile and hopeless labor. Camus focuses on the **hour of the descent**: the moment Sisyphus turns and walks down the slope to retrieve the boulder. In that pause, Sisyphus is conscious of his condition. His fate belongs to him; the rock is his thing. By accepting the eternal toil without appeal to the gods and without despair, he conquers his punishment. His scorn for the gods renders him free.",
    heuristics: [
      "Conquer tragedy through lucidity: when you recognize and claim your struggle as your own, fate loses its sting.",
      "Find fulfillment in the process rather than the destination: the boulder is your life's work.",
      "Never look for divine redemption: your mountain, your rock, and your effort are your supreme kingdom."
    ],
    quote: "I leave Sisyphus at the foot of the mountain! One always finds one's burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks... The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy."
  },
  {
    part: "Section V: Mediterranean Essays",
    num: 8,
    id: "ch-08",
    title: "Summer in Algiers & The Minotaur in Oran (The Pagan Splendor of the Earth)",
    pages: "pp. 129–176",
    axiom: "To live in the sun and by the sea is to know that the body has its own truth, superior to all the sterile metaphysical treatises of the North.",
    mechanism: "In *Summer in Algiers* and *The Minotaur*, Camus explores the Mediterranean sensory experience. In Algiers, young men spend their days swimming in the sea and sunbathing on warm stone docks. They live intensely with their bodies, possessing no interest in abstract theology or afterlife. They know that beauty is fleeting and that aging and death are swift, but they embrace the sensual immediacy of the physical earth. This pagan lucidity represents Camus's ultimate alternative to Northern European intellectual nihilism.",
    heuristics: [
      "Ground your philosophy in somatic embodiment: swim in the sea, feel the sun, touch the earth.",
      "Do not trade the palpable beauty of this world for the promised perfection of a mythical heaven.",
      "Embrace sensory lucidity: to appreciate the finite transience of youth and nature is the highest wisdom."
    ],
    quote: "If there is a sin against life, it consists perhaps not so much in despairing of life as in hoping for another life and in eluding the implacable grandeur of this life."
  }
];

// Generate canonical knowledge-units.json
const knowledgeUnits = CHAPTERS.map(ch => ({
  id: `KU-MOS-${ch.id.toUpperCase()}`,
  chapter_number: ch.num,
  chapter_title: ch.title,
  source_coordinates: `${ch.part}, ${ch.pages}`,
  epistemic_status: "EXISTENTIAL_PHILOSOPHICAL_AXIOM",
  materiality: "CRITICAL",
  claim: ch.mechanism,
  actionable_heuristics: ch.heuristics,
  verbatim_quote: ch.quote,
  primary_axiom: ch.axiom
}));

const kuModel = {
  schema_version: "1.0.0",
  book_metadata: {
    id: bookSlug,
    title: "The Myth of Sisyphus and Other Essays",
    subtitle: "An Essay on the Absurd, Philosophical Suicide, and the Lucidity of Revolt",
    author: "Albert Camus",
    translator: "Justin O'Brien",
    year: "1942 / 1955",
    publisher: "Alfred A. Knopf / Intellectualist Classical Philosophy Series",
    category: "Philosophy & Classical Ethics",
    epistemic_tier: "Tier 1: Foundational Existential Philosophy & Absurdism",
    total_units: knowledgeUnits.length,
    reading_time_saved: "9.5 hrs saved"
  },
  units: knowledgeUnits
};

fs.writeFileSync(path.join(outputDir, 'knowledge-units.json'), JSON.stringify(kuModel, null, 2), 'utf-8');
console.log("Wrote canonical knowledge-units.json for The Myth of Sisyphus with", knowledgeUnits.length, "units.");

// Generate 7-layer master-notes.md
let md = `# The Myth of Sisyphus and Other Essays (Albert Camus) — The Total Replacement Codex\n\n`;
md += `> **Core Thesis**: *There is but one truly serious philosophical problem, and that is suicide. When the human longing for meaning collides with the cold silence of the universe, the absurd is born. Refusing both physical suicide and the philosophical suicide of religious leaps, the absurd man lives in perpetual revolt, absolute freedom, and passionate engagement. One must imagine Sisyphus happy.*\n\n`;
md += `- **Author**: Albert Camus\n`;
md += `- **Translator**: Justin O'Brien (1955)\n`;
md += `- **Epistemic Tier**: Tier 1 (Classical Philosophy & Absurdist Ethics)\n`;
md += `- **Format**: Complete 8-Unit Replacement Codex\n\n`;
md += `---\n\n`;

md += `## The 7-Layer Master Architecture\n\n`;
md += `1. **Layer 1: The Metaphysical Triad**: The Human Mind + The Silent Universe = The Absurd.\n`;
md += `2. **Layer 2: The Rejection of Philosophical Suicide**: Critiquing Kierkegaard, Chestov, Jaspers, and Husserl's leaps of faith.\n`;
md += `3. **Layer 3: The Three Invariant Consequences**: Revolt, Freedom, Passion (Quantity over quality of experiences).\n`;
md += `4. **Layer 4: The Absurd Archetypes**: Don Juan (Sensual Quantity), The Actor (Ephemeral Sovereignty), The Conqueror (Earthly Struggle).\n`;
md += `5. **Layer 5: Absurd Creation & Kirilov**: Dostoevsky's metaphysical suicide vs. artistic descriptive creation.\n`;
md += `6. **Layer 6: The Myth of Sisyphus**: The hour of consciousness during the mountain descent.\n`;
md += `7. **Layer 7: The Mediterranean Ethos**: Summer in Algiers, bodily lucidity, and living without afterlife.\n\n`;
md += `---\n\n`;

CHAPTERS.forEach(ch => {
  md += `## Chapter ${ch.num}: ${ch.title}\n`;
  md += `*Source Coordinates: ${ch.part}, ${ch.pages}*\n\n`;
  md += `> **Irreducible Axiom**: ${ch.axiom}\n\n`;
  md += `**Philosophical Mechanism**: ${ch.mechanism}\n\n`;
  md += `**Actionable Heuristics**:\n`;
  ch.heuristics.forEach(h => md += `- ${h}\n`);
  md += `\n> *" ${ch.quote} "*\n\n`;
  md += `---\n\n`;
});

fs.writeFileSync(path.join(outputDir, 'master-notes.md'), md, 'utf-8');
console.log("Wrote master-notes.md (Size:", (md.length / 1024).toFixed(2), "KB)");

// Generate interactive index.html with pantheon logo and favicon
function generateHtml() {
  const meta = kuModel.book_metadata;
  
  const tocItemsHtml = CHAPTERS.map(ch => `
    <a href="#${ch.id}" class="nav-ch-link">
      <span class="nav-ch-num">${ch.num}</span>
      <span class="nav-ch-title">${ch.title}</span>
    </a>
  `).join('\n');

  const chaptersHtml = CHAPTERS.map(ch => `
    <section class="chapter-wrapper" id="${ch.id}">
      <header class="chapter-header">
        <div class="chapter-kicker">${ch.part} • Chapter ${ch.num}</div>
        <h2 class="chapter-title">${ch.title}</h2>
        <div class="chapter-axiom">✦ <strong>Master Axiom:</strong> ${ch.axiom}</div>
      </header>
      
      <div class="camus-block">
        <h3 class="camus-heading">Philosophical Mechanism &amp; Dialectic</h3>
        <p class="camus-text">${ch.mechanism}</p>

        <div class="heuristics-container">
          <div class="heuristics-title">⚡ Absurdist Heuristics for Living Without Appeal</div>
          <ul class="heuristics-list">
            ${ch.heuristics.map(h => `<li>${h}</li>`).join('\n')}
          </ul>
        </div>

        <blockquote class="camus-quote">
          <span class="quote-symbol">“</span>
          ${ch.quote}
        </blockquote>
      </div>
    </section>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} — BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="apple-touch-icon" href="../../assets/images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #0f1016;
      --bg-surface: #181924;
      --bg-surface-elevated: #222332;
      --border-subtle: #2d2f42;
      --text-main: #f1f3f9;
      --text-secondary: #9aa0b8;
      --color-gold: #fbbf24;
      --color-crimson: #f43f5e;
      --font-display: 'Cinzel', serif;
      --font-serif: 'Merriweather', Georgia, serif;
      --font-sans: 'Inter', sans-serif;
    }

    [data-theme="light"] {
      --bg-base: #f8fafc;
      --bg-surface: #ffffff;
      --bg-surface-elevated: #f1f5f9;
      --border-subtle: #e2e8f0;
      --text-main: #0f172a;
      --text-secondary: #475569;
      --color-gold: #d97706;
      --color-crimson: #e11d48;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-serif);
      line-height: 1.85;
      font-size: 1.08rem;
    }

    /* TOP HEADER */
    .top-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-subtle);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(8px);
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    .brand-title {
      font-family: var(--font-display);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.1em;
      color: var(--color-gold);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-action {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
    }

    /* APP GRID */
    .app-layout {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: calc(100vh - 60px);
    }

    @media (max-width: 1024px) {
      .app-layout { grid-template-columns: 1fr; }
      .app-sidebar { display: none; }
    }

    /* SIDEBAR */
    .app-sidebar {
      background: var(--bg-surface);
      border-right: 1px solid var(--border-subtle);
      padding: 24px 16px;
      height: calc(100vh - 60px);
      position: sticky;
      top: 60px;
      overflow-y: auto;
    }

    .sidebar-title {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-secondary);
      margin-bottom: 16px;
      padding-left: 8px;
    }

    .nav-ch-link {
      display: flex;
      gap: 10px;
      align-items: baseline;
      padding: 8px 10px;
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      border-radius: 6px;
      transition: all 0.15s ease;
      line-height: 1.35;
    }

    .nav-ch-link:hover {
      background: var(--bg-surface-elevated);
      color: var(--text-main);
    }

    .nav-ch-num {
      font-weight: 700;
      color: var(--color-gold);
      min-width: 18px;
    }

    /* MAIN CONTENT */
    .reading-surface {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px 100px;
      width: 100%;
    }

    /* HERO */
    .hero-box {
      border-bottom: 2px solid var(--border-subtle);
      padding-bottom: 36px;
      margin-bottom: 50px;
    }

    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-gold);
      font-weight: 700;
      margin-bottom: 10px;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 2.8rem;
      line-height: 1.15;
      font-weight: 900;
      color: var(--text-main);
      margin-bottom: 14px;
    }

    .hero-subtitle {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .badge {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      padding: 4px 10px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .badge.highlight {
      background: rgba(251, 191, 36, 0.12);
      border-color: rgba(251, 191, 36, 0.35);
      color: var(--color-gold);
      font-weight: 600;
    }

    /* CHAPTERS */
    .chapter-wrapper {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px dashed var(--border-subtle);
    }

    .chapter-header {
      margin-bottom: 32px;
    }

    .chapter-kicker {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold);
      margin-bottom: 6px;
    }

    .chapter-title {
      font-family: var(--font-display);
      font-size: 2.1rem;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .chapter-axiom {
      background: var(--bg-surface);
      border-left: 4px solid var(--color-gold);
      padding: 12px 18px;
      border-radius: 0 8px 8px 0;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    /* CAMUS BLOCK */
    .camus-block {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 32px;
    }

    .camus-heading {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .camus-text {
      color: var(--text-main);
      margin-bottom: 20px;
      line-height: 1.85;
    }

    /* HEURISTICS */
    .heuristics-container {
      background: var(--bg-surface-elevated);
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 20px;
      border: 1px solid var(--border-subtle);
    }

    .heuristics-title {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold);
      margin-bottom: 10px;
    }

    .heuristics-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      color: var(--text-secondary);
    }

    .heuristics-list li {
      position: relative;
      padding-left: 20px;
    }

    .heuristics-list li::before {
      content: "•";
      color: var(--color-gold);
      font-weight: bold;
      position: absolute;
      left: 6px;
    }

    /* QUOTE */
    .camus-quote {
      border-left: 3px solid var(--color-crimson);
      padding: 12px 20px;
      margin-top: 20px;
      font-style: italic;
      color: var(--text-main);
      background: rgba(244, 63, 94, 0.05);
      border-radius: 0 6px 6px 0;
      font-size: 1.05rem;
    }

    .quote-symbol {
      color: var(--color-crimson);
      font-family: var(--font-display);
      font-size: 1.4rem;
      line-height: 0;
      margin-right: 4px;
    }
  </style>
</head>
<body>

  <header class="top-header">
    <a href="../../index.html" class="brand-group">
      <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo-img">
      <span class="brand-title">INTELLECTUALIST</span>
    </a>
    <div class="nav-actions">
      <button class="btn-action" id="theme-btn">🌓 Theme</button>
      <a href="../../index.html" class="btn-action">← Library</a>
    </div>
  </header>

  <div class="app-layout">
    <aside class="app-sidebar">
      <div class="sidebar-title">The Myth of Sisyphus</div>
      <nav>
        ${tocItemsHtml}
      </nav>
    </aside>

    <main class="reading-surface">
      <div class="hero-box">
        <div class="hero-kicker">BKRS Master Replacement Codex • Classical Philosophy</div>
        <h1 class="hero-title">${meta.title}</h1>
        <p class="hero-subtitle">${meta.subtitle}</p>
        <div class="meta-badges">
          <span class="badge highlight">✦ ${meta.epistemic_tier}</span>
          <span class="badge">⏱ ${meta.reading_time_saved}</span>
          <span class="badge">🏛 8 Foundational Treatises</span>
          <span class="badge">⚖ Uncapped Revolt &amp; Lucidity</span>
        </div>
      </div>

      ${chaptersHtml}
    </main>
  </div>

  <script>
    const themeBtn = document.getElementById('theme-btn');
    const htmlEl = document.documentElement;
    let theme = localStorage.getItem('intellectualist_theme') || 'dark';
    htmlEl.setAttribute('data-theme', theme);
    themeBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', theme);
      localStorage.setItem('intellectualist_theme', theme);
    });
  </script>
</body>
</html>`;
}

const renderedHtml = generateHtml();
fs.writeFileSync(path.join(outputDir, 'index.html'), renderedHtml, 'utf-8');
console.log("Successfully rendered The Myth of Sisyphus index.html (Size:", (renderedHtml.length / 1024).toFixed(2), "KB)");
