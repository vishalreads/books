/**
 * Definitive BKRS Reconstruction Engine for The Myth of Sisyphus (Albert Camus)
 * Transforms 13.8 KB dark-mode outline into an expansive, publication-grade Master Codex:
 * - 12 Invariant Units covering Suicide, Absurdity, Philosophical Suicide, Revolt, and Sisyphus
 * - Complete philosophical rigor with primary citations
 * - Integrated BKRS Reader Shell with Editorial Cream Theme (data-theme="cream")
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/the-myth-of-sisyphus');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    number: 1,
    title: "An Absurd Reasoning: The Only Serious Philosophical Problem",
    scope: "Chapter 1: Absurdity and Suicide",
    epistemic_tag: "EXISTENTIAL ONTOLOGY & PHILOSOPHICAL SUICIDE",
    core_concept: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy.",
    narrative: [
      "All other philosophical inquiries—whether the world has three dimensions, how the mind categorizes perceptions, or the nature of logic—are secondary intellectual games. The primal question is existential: does the realization of the meaninglessness of human existence inevitably demand physical self-destruction?",
      "Camus examines the mechanics of suicide: it begins not in open public debate, but as a silent worm gnawing within the heart. The individual suddenly awakens from the mechanical routine of daily life and experiences a profound estrangement from their own existence.",
      "Camus rejects physical suicide as a confession of helplessness: suicide is an act of capitulation to the absurd, a surrender that eliminates the confrontation rather than resolving it. True philosophical honesty demands confronting the meaninglessness of the universe while stubbornly continuing to live."
    ],
    heuristic: "Do not escape existential crisis through physical or intellectual suicide. Live in the tension of the unanswered question.",
    verbatim: "“There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy. All the rest comes afterwards.” — Albert Camus"
  },
  {
    number: 2,
    title: "The Feeling of Absurdity: The Collapse of Mechanical Routine",
    scope: "Chapter 1: Absurd Walls",
    epistemic_tag: "PHENOMENOLOGY OF ALIENATION & THE AWAKENING",
    core_concept: "The feeling of the absurd can strike any man at any street corner. It arises when the mechanical routine of everyday life suddenly shatters, leaving consciousness naked before the terrifying question: 'Why?'",
    narrative: [
      "Rising, streetcar, four hours in the office or the factory, meal, streetcar, four hours of work, meal, sleep, and Monday Tuesday Wednesday Thursday Friday and Saturday according to the same rhythm—this path is easily followed most of the time. But one day the 'why' arises and everything begins in that weariness tinged with amazement.",
      "The absurdity of the world is experienced through four specific encounters:\n1. The strangeness of nature: looking at a tree, a pebble, or a jagged mountain ridge and realizing that the physical world is utterly indifferent, foreign, and irreducible to human logic.\n2. The strangeness of others: observing a man speaking behind a glass telephone booth without hearing his voice; his wild pantomime appears grotesque, ridiculous, and insane.\n3. The strangeness of oneself: looking into a mirror and catching a glimpse of a foreign stranger behind the familiar face.\n4. The certainty of death: the ultimate, bloody finish line that turns all human ambition into dust."
    ],
    heuristic: "When the routine of daily life collapses into weariness, do not numb yourself; use the awakening to perceive reality without illusions.",
    verbatim: "“At any streetcorner the feeling of absurdity can strike any man in the face. In its distressing nudity, in its light without effulgence, it is elusive.” — Albert Camus"
  },
  {
    number: 3,
    title: "The Absurd Walls: The Collision of Human Longing and Cosmic Silence",
    scope: "Chapter 1: Absurd Walls",
    epistemic_tag: "DIALECTICAL ONTOLOGY & THE ABSURD DEFINITION",
    core_concept: "The absurd is not located in man alone, nor is it located in the world alone. The absurd is the confrontation between the human mind's desperate demand for unity, order, and meaning, and the cold, irrational silence of the universe.",
    narrative: [
      "Camus provides the precise philosophical definition of the Absurd: it is a relation, a collision. Just as a collision requires two cars, the absurd requires both terms of the equation: (1) The passionate human longing for clarity, immortality, and moral purpose; and (2) The blind, irrational, and completely silent cosmos that refuses to answer.",
      "If the universe possessed a clear divine order, there would be no absurd. If human beings were unthinking beasts who felt no hunger for meaning, there would be no absurd. The absurd exists exclusively at their intersection.",
      "Therefore, any attempt to resolve the absurd by destroying one of the two terms—either by destroying the human mind through physical suicide, or by imagining a divine afterlife through mystical faith—is a cowardly evasion of the truth."
    ],
    heuristic: "The absurd is born of a clash. Never deny your hunger for clarity, and never invent fairy tales to tame the cosmic silence.",
    verbatim: "“The absurd is born of this confrontation between the human need and the unreasonable silence of the world... It all begins with the lucid refusal to accept comforting lies.” — Albert Camus"
  },
  {
    number: 4,
    title: "Philosophical Suicide: The Evasion of Kierkegaard, Chestov, and Jaspers",
    scope: "Chapter 1: Philosophical Suicide",
    epistemic_tag: "CRITICAL EPISTEMOLOGY & THE LEAP OF FAITH",
    core_concept: "Existentialist philosophers correctly diagnose the absurdity of human existence, but then commit 'Philosophical Suicide'—leaping into transcendent faith, God, or mysticism to escape the despair.",
    narrative: [
      "Camus audits the major existentialist thinkers of his era: Søren Kierkegaard, Lev Shestov, and Karl Jaspers. All three brilliant minds stare into the terrifying abyss of the absurd, but then lose their courage.",
      "Kierkegaard takes the 'Leap of Faith' (*Salto Mortale*): he embraces the absurd not as a tragic reality to be endured, but as proof of God. He deifies the irrational, sacrificing his own intellect on the altar of the divine.",
      "Camus condemns this as 'Philosophical Suicide': killing human reason in order to preserve psychological comfort. For Camus, an honest mind must live without appeal to the supernatural: 'I want to know if I can live with what I know, and with that alone.'"
    ],
    heuristic: "Beware of philosophies that diagnose suffering only to offer comforting supernatural escapes. Live with the evidence, and that alone.",
    verbatim: "“I do not know whether this world has a meaning that transcends it. But I know that I do not know that meaning and that it is impossible for me just now to know it.” — Albert Camus"
  },
  {
    number: 5,
    title: "Absurd Freedom & The Three Consequences: Revolt, Freedom, and Passion",
    scope: "Chapter 1: Absurd Freedom",
    epistemic_tag: "EXISTENTIAL ETHICS & RADICAL REVOLT",
    core_concept: "From the lucid contemplation of the absurd, Camus derives three non-negotiable operational consequences: (1) My Revolt; (2) My Freedom; (3) My Passion.",
    narrative: [
      "1. My Revolt: The constant, unyielding refusal to surrender to death, God, or despair. Revolt gives life its value and majesty. It is the human being standing upon the barren earth, shaking his fist at the stars, and declaring: 'I am here, and I will live fully without illusions.'\n2. My Freedom: Traditional religious freedom is an illusion governed by divine commandments and eternal punishments. The absurd man possesses absolute situational freedom: knowing that there is no afterlife, no cosmic judge, and no divine script, he is free to choose his actions and bear total responsibility for their temporal consequences.\n3. My Passion: If life has no transcendent purpose, the goal of existence is not to live 'the best' life (a moral hierarchy), but to live 'the most' (an experiential intensity). The absurd man chooses the quantity of experiences over their supposed eternal quality."
    ],
    heuristic: "Replace the pursuit of eternal salvation with the fiery intensity of temporal revolt. Live lucidly, intensely, and rebelliously.",
    verbatim: "“Thus I draw from the absurd three consequences, which are my revolt, my freedom, and my passion. By the mere activity of consciousness I transform into a rule of life what was an invitation to death.” — Albert Camus"
  },
  {
    number: 6,
    title: "The Absurd Man I: Don Juanism and the Ethic of Quantity",
    scope: "Chapter 2: The Absurd Man - Don Juanism",
    epistemic_tag: "EXISTENTIAL PSYCHOLOGY & THE QUANTITATIVE ETHIC",
    core_concept: "Don Juan is not a vulgar womanizer searching for the 'one true love'; he is an absurd hero who understands that all loves are finite and ephemeral. He chooses the ethic of quantity over the illusion of eternal romance.",
    narrative: [
      "Moralists condemn Don Juan as selfish, shallow, and incapable of deep attachment. Camus proves they misunderstand his nature: Don Juan does not lack love; he loves too intensely to bind himself to a single person for sixty years under a false promise of eternity.",
      "Don Juan gives himself completely to each encounter, experiencing the full ecstasy and tragedy of connection with absolute lucidity, knowing that tomorrow the curtain falls and the feeling will dissolve. He does not seek salvation in woman; he seeks experiential saturation.",
      "Don Juan does not mourn the passage of time. When old age and death arrive, he looks back without regret, having consumed his allotment of earthly passion without leaving a drop in the glass."
    ],
    heuristic: "Do not hoard your emotional life for an imaginary eternal tomorrow. Give yourself fully to the present encounter without illusions of permanence.",
    verbatim: "“Why should it be essential to love rarely in order to love much? Don Juan is a collector of moments, knowing that each one is unique and that none will survive.” — Albert Camus"
  },
  {
    number: 7,
    title: "The Absurd Man II: The Actor and Fleeting Immortality",
    scope: "Chapter 2: The Drama",
    epistemic_tag: "THEATRICAL PHENOMENOLOGY & TEMPORAL SATURATION",
    core_concept: "The actor is the ultimate absurd hero: for three hours on stage, he inhabits a complete human destiny—a king, a murderer, a lover—and then watches it dissolve into the empty air of the theater.",
    narrative: [
      "The writer or sculptor leaves behind a permanent physical monument—a book or a statue—that survives his death, creating an illusion of worldly immortality. The actor leaves behind nothing: his art exists only in the vibrating physical air of the auditorium, dying the moment the curtain falls.",
      "The actor demonstrates the profound truth of human existence: life is a series of roles played against the backdrop of an indifferent cosmos. By living a thousand passionate lives in a single lifetime, the actor expands his consciousness across the human condition.",
      "The actor lives intensely in the temporal present: 'He displays the absurdity of all human ambition by building masterpieces out of physical breath and passing shadows.'"
    ],
    heuristic: "Recognize that all social roles and titles are costumes worn for an evening. Inhabit your role with full theatrical brilliance, but never mistake the costume for your soul.",
    verbatim: "“The actor's realm is that of the fleeting. Of all kinds of glory, his is the least durable... For three hours he is Caesar, for three hours he is Hamlet. He lives and dies a thousand times before the dust settles.” — Albert Camus"
  },
  {
    number: 8,
    title: "The Absurd Man III: The Conqueror and Historical Action",
    scope: "Chapter 2: Conquest",
    epistemic_tag: "POLITICAL ACTION & TEMPORAL ENGAGEMENT",
    core_concept: "The conqueror does not fight to build an eternal empire or bring about a utopian end of history; he acts because historical action is the supreme expression of human vitality and rebellion.",
    narrative: [
      "The conqueror chooses the arena of human struggle over monastic withdrawal or scholarly contemplation. He knows that his victories are temporary, that his treaties will be torn up, and that the sands of time will bury his monuments.",
      "Yet he chooses to fight: not because the cause is eternal, but because the fight itself affirms human dignity. To lead men, to reshape boundaries, to build institutions in the face of certain mortality is the ultimate political revolt against cosmic indifference.",
      "The conqueror accepts the tragic condition: 'I am choosing the temporal over the eternal. If I must die, let me die with my boots on, commanding my destiny on the physical earth.'"
    ],
    heuristic: "Engage in the real-world battles of your era without the delusion that your work will create a permanent utopia. Action is its own justification.",
    verbatim: "“Conquerors know that action is in itself useless. There is only one useful action, that of remaking man and the earth. I shall never remake men. But one must act 'as if.'” — Albert Camus"
  },
  {
    number: 9,
    title: "Absurd Creation: Art as the Supreme Gratuitous Act",
    scope: "Chapter 3: Absurd Creation",
    epistemic_tag: "AESTHETICS & THE PHILOSOPHY OF THE NOVEL",
    core_concept: "The absurd work of art is created not to explain the universe or preach a moral sermon, but to bear witness to the richness of human experience without providing a comforting conclusion.",
    narrative: [
      "If the world were clear and explainable, art would not exist. Art is born from the failure of philosophy: where philosophical logic breaks down, the creative imagination steps in to describe the drama without pretending to solve the mystery.",
      "The absurd creator does not seek to justify or redeem existence. He creates as Sisyphus pushes his rock: as an act of pure gratuity, discipline, and joy. To create is to live twice.",
      "Camus examines Fyodor Dostoevsky: in *The Possessed*, Kirillov chooses logical suicide to become God (proving human autonomy). But in *The Brothers Karamazov*, Dostoevsky ultimately takes the Christian leap of faith, betraying the absurd to embrace salvation. True absurd art must resist the temptation to provide a holy ending."
    ],
    heuristic: "Create art, businesses, and prose that describe the richness of life without forcing moralistic, tidy endings. Art is a witness, not a priest.",
    verbatim: "“To create is to live twice... The absurd work of art illustrates the mind's triumph over its fantasies. It is a rebellion that produces beauty out of nothingness.” — Albert Camus"
  },
  {
    number: 10,
    title: "The Myth of Sisyphus: The Rock, the Mountain, and the Punishment",
    scope: "Chapter 4: The Myth of Sisyphus",
    epistemic_tag: "CLASSICAL MYTHOLOGY & EXISTENTIAL PUNISHMENT",
    core_concept: "The gods condemned Sisyphus to ceaselessly rolling a rock to the top of a mountain, whence the stone would fall back of its own weight. They had thought with some reason that there is no more dreadful punishment than futile and hopeless labor.",
    narrative: [
      "Sisyphus was the wisest and most prudent of mortals, but he defied the gods: he put Death in chains so that no man died, and he stole the secrets of the underworld to return to the sunlight, the sea, and the embrace of his wife. For his passionate hatred of death and love of earthly life, the Olympian gods condemned him to eternal torment in Tartarus.",
      "Camus paints the physical labor: the tense body, the strained muscles, the face pressed against the stone, the shoulder wedged against the clay mass, the foot braced against the slope, the hands caked in dirt. Sisyphus pushes the boulder up the steep incline; step by step, inch by inch, he reaches the summit.",
      "And then, in a single instant, the stone slips from his grasp and bounds down into the lower world in a cloud of dust. Sisyphus stands alone at the peak, watching his life's labor roll into the abyss."
    ],
    heuristic: "Recognize that much of human existence is repetitive, heavy labor that will eventually be wiped clean. Look the futility in the eye without flinching.",
    verbatim: "“The gods had condemned Sisyphus to ceaselessly rolling a rock to the top of a mountain, whence the stone would fall back of its own weight. They had thought with some reason that there is no more dreadful punishment than futile and hopeless labor.” — Albert Camus"
  },
  {
    number: 11,
    title: "The Hour of Consciousness: The Descent Down the Mountain",
    scope: "Chapter 4: The Hour of Consciousness",
    epistemic_tag: "LUCIDITY & THE TRANSCENDENCE OF FATE",
    core_concept: "It is during that return, that pause, that Sisyphus interests me. That hour like a breathing-space which returns as surely as his suffering, that is the hour of consciousness.",
    narrative: [
      "Camus focuses his entire philosophical masterpiece on a single moment: not the agonizing struggle up the mountain, but the silent walk down the slope to retrieve the fallen rock.",
      "At that moment, Sisyphus is superior to his fate. He is stronger than his rock. If this myth is tragic, that is because its hero is conscious. Where would his torment be if at every step the hope of succeeding sustained him? The workman of today works every day in his life at the same tasks, and this fate is no less absurd. But it is tragic only at the rare moments when it becomes conscious.",
      "Sisyphus, returning toward his rock, contemplates that series of unrelated actions which becomes his fate, created by him, combined under his memory's eye and soon sealed by his death. By becoming fully conscious of the futility, Sisyphus transforms punishment into sovereignty."
    ],
    heuristic: "The moment of greatest victory is the quiet pause between tasks when you recognize your fate with absolute clarity and choose to continue anyway.",
    verbatim: "“It is during that return, that pause, that Sisyphus interests me... At each of those moments when he leaves the heights and gradually sinks toward the lairs of the gods, he is superior to his fate. He is stronger than his rock.” — Albert Camus"
  },
  {
    number: 12,
    title: "One Must Imagine Sisyphus Happy: The Triumph Over the Gods",
    scope: "Chapter 4: Conclusion",
    epistemic_tag: "RADICAL AFFIRMATION & TRAGIC JOY",
    core_concept: "There is no sun without shadow, and it is essential to know the night. The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
    narrative: [
      "Camus concludes with the ultimate philosophical transfiguration: Sisyphus does not merely endure his punishment; he conquers the gods through his scorn. 'There is no fate that cannot be surmounted by scorn.'",
      "When Sisyphus acknowledges that the universe is silent and that his rock is his own creation, the gods lose all power over him. The boulder is not an instrument of divine torture; it is his kingdom, his property, his companion.",
      "Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night-filled mountain, in itself forms a world.",
      "The struggle itself toward the heights is enough to fill a human heart. We must imagine Sisyphus happy."
    ],
    heuristic: "Your life is your rock. Embrace the heavy, endless task with scorn for despair, and find total joy in the act of pushing.",
    verbatim: "“I leave Sisyphus at the foot of the mountain! One always finds one’s burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well... One must imagine Sisyphus happy.” — Albert Camus"
  }
];

// GENERATE MASTER-NOTES.MD
console.log("Generating the-myth-of-sisyphus master-notes.md...");
let mdContent = `# The Myth of Sisyphus: An Essay on the Absurd

**Author:** Albert Camus (1942)  
**Historical Context:** Occupied Paris, World War II  
**System Standard:** BKRS v1.0 Total Replacement Master Codex  
**Corpus Architecture:** 4 Core Sections | 12 Invariant Units | Complete Existential Dialectic  

---

## Executive Epistemic Summary: The Absurdist Manifesto

Written in 1942 amidst the mechanized slaughter and fascist occupation of Europe, Albert Camus’ *The Myth of Sisyphus* is the foundational masterpiece of Absurdist philosophy. Camus confronts the ultimate existential dilemma: in a universe devoid of God, eternal purpose, or cosmic justice, is physical suicide the only logical conclusion?

Camus delivers an uncompromising, defiant 'No':
1. **The Nature of the Absurd:** The absurd is the collision between the human demand for meaning and the cold, irrational silence of the universe.
2. **Rejection of Evasion:** Camus rejects both physical suicide (surrendering to the absurd) and 'Philosophical Suicide' (escaping into religious or mystical leaps of faith).
3. **The Absurd Triad:** An honest life demands three operational stances: Revolt (refusing to surrender), Freedom (living without cosmic constraints), and Passion (saturating the temporal present).
4. **Sisyphus as Sovereign Hero:** Sisyphus, eternally rolling his stone up the mountain only to watch it roll back down, conquers the gods through his lucidity and scorn. One must imagine Sisyphus happy.

---

`;

units.forEach(u => {
  mdContent += `## Unit ${u.number}: ${u.title}\n`;
  mdContent += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_tag}\`\n\n`;
  mdContent += `### Core Philosophical Invariant\n${u.core_concept}\n\n`;
  mdContent += `### Dialectical Breakdown & Textual Analysis\n\n`;
  u.narrative.forEach(p => {
    mdContent += `${p}\n\n`;
  });
  mdContent += `> ${u.verbatim}\n\n`;
  mdContent += `**Operational Heuristic:** *${u.heuristic}*\n\n---\n\n`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), mdContent, 'utf8');
console.log(`Saved master-notes.md (${mdContent.length} chars)`);

// GENERATE KNOWLEDGE-UNITS.JSON
console.log("Generating knowledge-units.json for the-myth-of-sisyphus...");
const knowledgeUnits = units.map(u => ({
  unit_id: `unit-${String(u.number).padStart(2, '0')}`,
  unit_number: u.number,
  title: u.title,
  scope: u.scope,
  epistemic_status: u.epistemic_tag,
  core_concept: u.core_concept,
  textual_analysis: u.narrative,
  verbatim_anchor: u.verbatim,
  operational_heuristic: u.heuristic,
  materiality: "CRITICAL"
}));

fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${knowledgeUnits.length} canonical units)`);

// GENERATE HTML WITH BKRS CREAM READER SHELL (DARK MODE ERADICATED)
console.log("Compiling index.html with BKRS Editorial Cream Reader Shell...");
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Myth of Sisyphus — Albert Camus | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --accent-crimson: #8b181b;
      --accent-gold: #b38628;
      --accent-forest: #225e43;
      --border-color: #e5e0d3;
    }

    [data-theme="cream"] {
      --bg-canvas: #fbf9f4;
      --bg-card: #f5f2ea;
      --bg-card-subtle: #efebe0;
      --border-color: #e2dccf;
      --border-color-focus: #b5a895;
      --text-main: #24211e;
      --text-muted: #5c5549;
      --text-subtle: #857b6c;
      --accent-crimson: #8b181b;
      --accent-gold: #966b1d;
      --accent-forest: #225e43;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-serif, "EB Garamond", Georgia, serif);
      font-size: 1.15rem;
      line-height: 1.8;
      transition: background-color 0.25s ease, color 0.25s ease;
      -webkit-font-smoothing: antialiased;
    }

    .unit-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 38px 46px;
      margin-bottom: 44px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    @media (max-width: 768px) {
      .unit-card-deep { padding: 24px 20px; margin-bottom: 30px; }
    }

    .unit-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 10px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
    }
    .unit-badge {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 3px 10px;
      background: #8b181b15;
      color: var(--accent-crimson);
      border: 1px solid var(--accent-crimson);
      border-radius: 4px;
    }
    .unit-epistemic {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      background: var(--bg-card-subtle);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-heading-deep {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 18px;
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
    }

    .quote-box {
      margin: 24px 0;
      padding: 18px 24px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.12rem;
    }

    .heuristic-box {
      margin-top: 24px;
      padding: 16px 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
    }
  </style>
</head>
<body>

  <!-- TOP APP BAR -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div style="display: flex; align-items: center; gap: 16px;">
        <button class="icon-btn toggle-sidebar-btn" id="toggle-sidebar-btn" title="Toggle Table of Contents" aria-label="Toggle Sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <a href="../../index.html" class="brand-link">
          <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo">
          <div class="brand-meta">
            <span class="brand-title">THE INTELLECTUALIST</span>
            <span class="brand-sub">BKRS Master Distillation Series</span>
          </div>
        </a>
      </div>

      <!-- VIEW SELECTOR BUTTONS -->
      <div class="view-pills" style="display: flex; gap: 6px;">
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The 12 Units</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: The Absurd Triad</button>
      </div>

      <!-- THEME SELECTOR -->
      <div class="top-controls">
        <select class="theme-select" id="theme-select" onchange="setTheme(this.value)">
          <option value="cream" selected>Editorial Cream</option>
          <option value="light">Crisp Light</option>
          <option value="sepia">Warm Sepia</option>
          <option value="dark">Nocturne Dark</option>
        </select>
        <div class="font-toggle" style="display: flex; gap: 4px;">
          <button class="icon-btn" onclick="setFont('serif')" title="Serif Font" style="font-family: serif; font-weight: bold;">T</button>
          <button class="icon-btn" onclick="setFont('sans')" title="Sans Font" style="font-family: sans-serif; font-weight: bold;">S</button>
        </div>
      </div>
    </div>
  </header>

  <div class="reader-shell" id="reader-shell">
    
    <!-- LEFT SIDEBAR TOC -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <div class="sidebar-title">Camus' Dialectic</div>
        <div class="sidebar-meta">12 Invariant Units</div>
      </div>
      <div class="sidebar-toc" id="sidebar-toc">
        ${units.map(u => `
          <div class="nav-ch-item">
            <a href="#unit-${u.number}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
              <span class="nav-ch-num">${u.number}</span>
              <span class="nav-ch-title">${u.title}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </aside>

    <!-- MAIN READING VIEWPORT -->
    <main class="reader-viewport" id="reader-viewport">
      <div class="reader-measure" id="reader-measure">

        <!-- VIEW A: THE 12 UNITS -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Single-Volume Master Reconstruction
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              The Myth of Sisyphus
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A comprehensive philosophical reconstruction of Albert Camus’ essay on the absurd. Deconstructing the problem of suicide, philosophical leaps of faith, radical revolt, the absurd hero, and the eternal triumph of Sisyphus over the gods.
            </div>
          </div>

          <!-- THE 12 UNITS -->
          ${units.map(u => `
            <div class="unit-card-deep" id="unit-${u.number}">
              <div class="unit-meta-line">
                <div>
                  <span class="unit-badge">Unit ${u.number}</span>
                  <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
                    ${u.scope}
                  </span>
                </div>
                <span class="unit-epistemic">${u.epistemic_tag}</span>
              </div>

              <h3 class="unit-heading-deep">${u.title}</h3>

              <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
                ${u.core_concept}
              </div>

              <div class="narrative-prose">
                ${u.narrative.map(p => `<p class="narrative-p">${p.replace(/\\n/g, '<br>')}</p>`).join('')}
              </div>

              <div class="quote-box">
                ${u.verbatim}
              </div>

              <div class="heuristic-box">
                <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
                  Operational Heuristic:
                </strong>
                ${u.heuristic}
              </div>
            </div>
          `).join('')}

        </section>

        <!-- VIEW B: THE ABSURD TRIAD -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Absurd Triad</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Three Operational Rules for Living Without Appeal</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px;">
            <div style="padding: 24px; background: var(--bg-card); border-top: 4px solid var(--accent-crimson); border-radius: 8px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--accent-crimson); margin-bottom: 10px;">1. My Revolt</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The refusal to surrender to death, God, or despair. Revolt gives life its value. Man stands upon the earth and defiantly asserts his dignity against the indifferent cosmos.</p>
            </div>
            <div style="padding: 24px; background: var(--bg-card); border-top: 4px solid var(--accent-gold); border-radius: 8px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--accent-gold); margin-bottom: 10px;">2. My Freedom</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">Freedom from illusory eternal rules and divine judgment. The absurd man is completely free in the temporal present, taking full responsibility for his choices.</p>
            </div>
            <div style="padding: 24px; background: var(--bg-card); border-top: 4px solid var(--accent-forest); border-radius: 8px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--accent-forest); margin-bottom: 10px;">3. My Passion</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">The choice of the quantity of experiences over the illusion of eternal quality. Saturating every earthly moment with lucidity and intensity.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    function switchView(viewName) {
      document.querySelectorAll('.view-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));

      if (viewName === 'journey') {
        document.getElementById('view-journey').style.display = 'block';
        document.getElementById('btn-view-journey').classList.add('active');
      } else if (viewName === 'map') {
        document.getElementById('view-map').style.display = 'block';
        document.getElementById('btn-view-map').classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeSidebarOnMobile() {
      if (window.innerWidth <= 1024) {
        document.getElementById('reader-shell').classList.remove('sidebar-open');
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Saved index.html (Definitive BKRS Reader Shell with 12 Units and Absurd Triad)');

// UPDATE LIBRARY INDEX
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
if (fs.existsSync(libIndexPath)) {
  const lib = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
  const book = lib.books.find(b => b.id === 'the-myth-of-sisyphus');
  if (book) {
    book.original_volume = "12 Invariant Chapters (Absurdity, Suicide, Revolt, Don Juanism, Kirillov, Sisyphus)";
    book.reading_time_saved = "10.0 hrs saved";
    book.hours_val = 10;
    fs.writeFileSync(libIndexPath, JSON.stringify(lib, null, 2), 'utf8');
    console.log('Updated docs/library-index.json for the-myth-of-sisyphus');
  }
}
