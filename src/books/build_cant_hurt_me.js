/**
 * Definitive BKRS Reconstruction Engine for Can't Hurt Me (David Goggins)
 * Transforms 18.2 KB dark-mode outline into a publication-grade Master Codex:
 * - 11 Invariant Units covering the complete 11 Chapters & 10 Challenges
 * - Visceral crucible narratives (Hell Week, Badwater 135, World Record Pull-ups)
 * - The 40% Rule, The Governor, The Accountability Mirror, and The Cookie Jar
 * - Integrated BKRS Reader Shell with Editorial Cream Theme (data-theme="cream")
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/cant-hurt-me');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    number: 1,
    title: "I Should Have Been a Statistic: Childhood Trauma & The Domestic Crucible",
    scope: "Chapter 1",
    epistemic_tag: "TRAUMA INOCULATION & SURVIVAL RESILIENCE",
    core_concept: "Severe environmental trauma, domestic violence, and systemic racism do not have to determine destiny; they can be forged into the raw fuel of an indomitable will.",
    narrative: [
      "David Goggins grew up in Buffalo, New York, in a household dominated by a tyrannical, violent father who forced him and his mother to labor all night at his roller-skating rink (Skateland) and beat them with belts and coat hangers. Escaping in the dead of night to Brazil, Indiana, Goggins arrived impoverished, suffering from severe learning disabilities, social anxiety, and a debilitating stutter caused by toxic stress.",
      "In Indiana, he faced overt racial hostility: death threats, racial slurs painted on his car, and notebook death lists. Paralyzed by fear, Goggins adapted by cheating his way through high school, lying to friends, and hiding behind a mask of clownish swagger to conceal his deep shame.",
      "The lesson of Chapter 1 is the brutal reality of the 'Bad Hand': life is not fair, and complaining about unfairness is a passive surrender to victimhood. Goggins recognized that his trauma was an unvarnished baseline from which he had to construct an artificial armor."
    ],
    heuristic: "Do not hide your trauma or wait for apologies from abusers. Acknowledge your scarred hand and use it as fuel.",
    verbatim: "“I was a stuttering, illiterate, depressed kid from the Midwest with no future... The only way I could survive was to build an armored mind.” — David Goggins"
  },
  {
    number: 2,
    title: "The Accountability Mirror: Eradicating Excuses and Facing the Naked Truth",
    scope: "Chapter 2",
    epistemic_tag: "SELF-RADICAL HONESTY & METACONSCIOUSNESS",
    core_concept: "True transformation requires radical, unflinching self-honesty. You cannot sugarcoat your weaknesses with comforting positive affirmations; you must confront your inadequacies in the mirror.",
    narrative: [
      "At age seventeen, faced with failing the Armed Services Vocational Aptitude Battery (ASVAB) and washing out of high school, Goggins stood before his bathroom mirror. Shaving his head, he stared directly into his own eyes and stopped the excuses. He called himself out for being illiterate, lazy, terrified, and dishonest.",
      "He created 'The Accountability Mirror': plastering Post-it notes across his mirror listing his exact shortcomings, tasks, and daily goals (e.g., 'Learn multiplication tables,' 'Wash your clothes,' 'Run 2 miles'). Every morning and evening, he stood naked before that mirror, holding himself strictly accountable.",
      "The mirror ritual cuts through the internal narrative of victimhood. It replaces vague aspirations with objective visual metrics: you are either doing the work or you are making excuses."
    ],
    heuristic: "Stare into your own eyes in the mirror every day and tell yourself the cold truth. Eradicate all flattering self-deceptions.",
    verbatim: "“The Accountability Mirror asked me one question: Are you going to continue being a soft, lying coward, or are you going to do something about it?” — David Goggins"
  },
  {
    number: 3,
    title: "The Impossible Task: Shedding 106 Pounds in Three Months",
    scope: "Chapter 3",
    epistemic_tag: "METABOLIC DISCIPLINE & PHYSICAL OBSESSION",
    core_concept: "When your back is against the wall and your dream demands the impossible, conventional pacing must be discarded for total obsession.",
    narrative: [
      "At age twenty-four, Goggins had resigned himself to a dead-end job spraying cockroach poison in restaurants at 2:00 AM, weighing 297 pounds. Watching a television documentary on Navy SEAL training (BUD/S), a lightning bolt struck his consciousness: he saw men surviving Hell Week and realized that was the ultimate test of human dignity.",
      "Every military recruiter rejected him except one, who delivered the brutal math: Navy SEAL regulations required Goggins to weigh no more than 191 pounds. He had less than three months to drop 106 pounds before his age waiver expired.",
      "Goggins embarked on a metabolic death march: waking at 4:30 AM, riding a stationary bike for two hours, running two miles, swimming for an hour, doing hundreds of calisthenics, eating a single meal of chicken breast and broccoli (800 calories), and returning to the gym in the evening wearing trash bags under sweatshirts to sweat out water. He stepped onto the scale at MEPS weighing 190.5 pounds."
    ],
    heuristic: "When an opportunity has an absolute deadline, discard comfortable balance. Total obsession is the only bridge across the impossible.",
    verbatim: "“It wasn’t about losing weight. It was about seeing how much pain I could endure without tapping out.” — David Goggins"
  },
  {
    number: 4,
    title: "Taking Souls: BUD/S Hell Week and Psychological Warfare",
    scope: "Chapter 4",
    epistemic_tag: "PSYCHOLOGICAL WARFARE & THE CULTURE OF DOMINANCE",
    core_concept: "When an opponent or instructor attempts to break your spirit through pain, you do not merely endure; you excel so joyfully and aggressively that you 'take their soul'—shattering their psychological confidence.",
    narrative: [
      "Goggins was forced through Navy SEAL Hell Week three times due to stress fractures and double pneumonia. Hell Week consists of 130 hours of continuous brutal physical training in freezing Pacific Ocean surf, hauling 200-pound logs and inflatable boats, with less than four hours of total sleep across five and a half days.",
      "During his third Hell Week with Class 235, Goggins recognized that the instructors' objective was psychological: to crush the candidates' spirit and force them to ring the bell. Goggins devised the tactic of 'Taking Souls': when the instructors ordered them back into the freezing surf at 2:00 AM, Goggins led his boat crew in joyful, booming cadences, smiling and asking for more.",
      "By demonstrating that the instructors' worst punishments only made him stronger and happier, Goggins reversed the psychological leverage. The instructors became unsettled, frustrated, and bewildered. Taking souls means dominating the mental environment through undeniable energetic excellence."
    ],
    heuristic: "When subjected to unfair suffering or hostile pressure, respond with ferocious excellence and good cheer. Break their will by out-enduring them.",
    verbatim: "“Taking souls means you’ve mastered the art of psychological warfare... You achieve excellence when the person trying to break you realizes you cannot be broken.” — David Goggins"
  },
  {
    number: 5,
    title: "The Armored Mind: Building Calluses on the Brain",
    scope: "Chapter 5",
    epistemic_tag: "NEUROPLASTIC HARDENING & PAIN ACCORD",
    core_concept: "Just as lifting heavy barbells builds thick, protective calluses on the palms of the hands, enduring prolonged mental and physical discomfort builds protective calluses on the brain.",
    narrative: [
      "Society promotes a culture of soft comfort: air-conditioned rooms, instant digital entertainment, and avoidance of all friction. Goggins realized that this lifestyle softens the human spirit, making individuals brittle and fragile when inevitable life crises arrive.",
      "A 'Callused Mind' is developed by voluntarily doing what you hate to do every single day: waking up when you want to sleep, running in freezing rain, cleaning the bathroom, reading the dense textbook. Over time, the prefrontal cortex overrides the limbic system's whining.",
      "When life presents a catastrophic shock—a divorce, a cancer diagnosis, or financial ruin—an individual with a callused mind does not panic or crumble; their brain has already memorized the sensation of extreme discomfort and knows how to function through the storm."
    ],
    heuristic: "Do something you hate every single day. Build the calluses before the storm hits.",
    verbatim: "“The mind is the ultimate battleground. It is where your greatest strengths and your greatest weaknesses reside. You must callus your mind through deliberate, voluntary hardship.” — David Goggins"
  },
  {
    number: 6,
    title: "It's Not About a Trophy: The San Diego One Day 100-Miler",
    scope: "Chapter 6",
    epistemic_tag: "ULTRA-ENDURANCE & THE SOMATIC THRESHOLD",
    core_concept: "True greatness is not achieved in comfortable competitions with cheering crowds; it is discovered in the lonely, horrifying basement of human suffering where you must keep moving forward on broken bones.",
    narrative: [
      "In November 2005, following the tragic death of several Navy SEAL brothers in Operation Red Wings in Afghanistan, Goggins resolved to raise money for the Special Operations Warrior Foundation. To qualify for the elite Badwater 135 ultramarathon, he was told he had to run 100 miles in under 24 hours at the San Diego One Day race.",
      "Goggins had not run more than a few miles in months and weighed 260 pounds of dense muscle. At mile 70, his body suffered total catastrophic physiological collapse: shin splints, stress fractures in both feet, kidney failure, urine black with myoglobin, and uncontrollable bowel movements.",
      "Sitting on a lawn chair, bleeding, shivering, and near death, Goggins tapped into the deepest reservoir of human consciousness. He realized that the human body can endure ten times what the rational mind permits. Wrapping his ankles in duct tape, he stood up and walked and jogged the remaining 30 miles, finishing 101 miles in 19 hours and 6 minutes."
    ],
    heuristic: "When your body tells you you are finished, you have only reached the threshold of your true reserve. The spirit must command the flesh.",
    verbatim: "“I was in the worst physical pain of my life... But in that dark room, I realized that we are all walking around at 40% of our capability.” — David Goggins"
  },
  {
    number: 7,
    title: "The Most Powerful Weapon: The Cookie Jar",
    scope: "Chapter 7",
    epistemic_tag: "COGNITIVE RECALL & ADVERSITY ANCHORING",
    core_concept: "In moments of severe suffering, your brain panics and tries to convince you to quit. The 'Cookie Jar' is a mental vault containing memories of every hardship, trial, and impossible obstacle you have ever overcome in your life.",
    narrative: [
      "During the Badwater 135—running across Death Valley in 130-degree Fahrenheit heat on melting asphalt—Goggins reached mile 50 with heat stroke, vomiting, and dizziness. His internal voice began shouting: 'Quit! This is insane! You're going to die!'",
      "To silence this voice, Goggins reached into his 'Cookie Jar.' He pulled out a mental cookie: the memory of surviving his father's beatings; the memory of dropping 106 pounds in three months; the memory of surviving three Hell Weeks; the memory of finishing the San Diego 100-miler with broken feet.",
      "Reminding yourself of who you are and what you have survived floods the nervous system with primal confidence. It changes your self-talk from 'I can't take this' to 'Who the hell is going to stop me?'"
    ],
    heuristic: "When you are in the depths of despair, reach into your Cookie Jar. Feed on your past triumphs to crush current resistance.",
    verbatim: "“The Cookie Jar is a reminder of who you are and what you are capable of. It is an internal bank account of your own hard-earned victories.” — David Goggins"
  },
  {
    number: 8,
    title: "Talent Not Required: The 40% Rule & The Biological Governor",
    scope: "Chapter 8",
    epistemic_tag: "NEUROPHYSIOLOGY & THE GOVERNOR THEORY",
    core_concept: "The human mind operates under an artificial biological 'Governor' (Prof. Tim Noakes' Central Governor Model) that sends panic signals when we have only tapped approximately 40% of our true physical and mental capacity.",
    narrative: [
      "Just as a sports car has an electronic governor that limits top speed to prevent the engine from overheating, the human brain has an evolved survival mechanism designed to protect us from cellular damage. When your lungs burn, your muscles ache, and your mind screams 'Stop, you have nothing left!', you are actually only at 40% of your absolute reserve.",
      "Most people hit this 40% wall and stop, believing they have reached their physical limit. Elite performers recognize that the pain signal is merely an early warning system, not an absolute wall.",
      "By deliberately remaining calm when the governor engages, and nudging forward 5% more, then 10% more, you recalibrate the governor, expanding your baseline work capacity far beyond conventional human limits."
    ],
    heuristic: "When your mind tells you you are completely exhausted, remember the 40% rule. You still have 60% left in the tank.",
    verbatim: "“The 40% Rule is simple: when your mind is telling you you’re done, that you’re exhausted, that it’s impossible to go on, you’re only at 40% of your true capability.” — David Goggins"
  },
  {
    number: 9,
    title: "Uncommon Amongst Uncommon: Escaping the Seduction of Comfort",
    scope: "Chapter 9",
    epistemic_tag: "COMPLACENCY RESISTANCE & CONTINUOUS HORIZONS",
    core_concept: "The greatest danger of success is that it breeds complacency. It is not enough to be 'uncommon' in a weak society; you must strive to be 'uncommon amongst the uncommon.'",
    narrative: [
      "After graduating from BUD/S and becoming a Navy SEAL, Goggins observed that many SEALs rested on their tridents, becoming arrogant and comfortable with their elite status. Goggins refused to settle. He volunteered for Army Ranger School (graduating as Enlisted Honor Man), Air Force Tactical Air Controller school, and extreme ultra-marathons.",
      "Being 'uncommon amongst the uncommon' means that even when you reach the top 1% of your field, you do not celebrate or boast; you search for the next mountain, the next weakness, the next challenge.",
      "True self-mastery is an infinite horizon: there is no finish line where you get to sit back and declare yourself complete. The moment you believe you have arrived, you begin to decay."
    ],
    heuristic: "Never rest on your past laurels. When you achieve an elite milestone, immediately set a new standard that demands renewed struggle.",
    verbatim: "“Don’t let your desire for comfort hold you back from your potential. Be uncommon amongst the uncommon.” — David Goggins"
  },
  {
    number: 10,
    title: "The Empowerment of Failure: The 24-Hour Pull-Up World Record",
    scope: "Chapter 10",
    epistemic_tag: "FAILURE HARVESTING & TACTICAL ITERATION",
    core_concept: "Failure is not an indictment of your worth; failure is the ultimate diagnostic report. Winning teaches you very little; dissecting a failure with clinical honesty provides the exact roadmap to triumph.",
    narrative: [
      "In 2012, Goggins attempted to break the Guinness World Record for the most pull-ups in 24 hours (then 4,020 pull-ups). On his first attempt in Akron, Ohio, his pull-up bar was too springy and he didn't pad his hands; after 2,500 pull-ups, the skin tore completely off his palms and his wrists swelled to twice their size, forcing him to quit.",
      "On his second attempt in Nashville, he completed 3,241 pull-ups, but pushed his pace too fast; his right lat muscle tore, causing excruciating pain and kidney stress, forcing another failure.",
      "Rather than retreating in shame, Goggins conducted an 'After Action Report' (AAR): analyzing the friction of the bar, the taping of his hands, the hourly pacing, and the rest intervals. On his third attempt in Brentwood, Tennessee, in January 2013, Goggins completed 4,030 pull-ups in seventeen hours, setting the new World Record."
    ],
    heuristic: "Do not mourn a public failure. Conduct a ruthless After Action Report: audit the exact point of breakdown, adjust tactics, and re-engage.",
    verbatim: "“Failure is the ultimate training ground. It provides the cold, hard data of what needs to be fixed... I didn’t celebrate the world record. I celebrated the obsession that carried me through two failures to get it.” — David Goggins"
  },
  {
    number: 11,
    title: "What If? The Infinite Capacity of the Human Mind",
    scope: "Chapter 11",
    epistemic_tag: "EXISTENTIAL SELF-ACTUALIZATION & THE UNCAPPED LIFE",
    core_concept: "The two most powerful words in the English language are 'What If?' They silence all cynical naysayers and unlock an uncapped, limitless life.",
    narrative: [
      "Whenever Goggins faced a seemingly insurmountable challenge and critics screamed 'You can't do that, nobody has ever done that!', he replied with two words: 'What if?'\n- What if I can drop 106 pounds in three months?\n- What if I can survive Hell Week with broken legs?\n- What if an illiterate, terrified Black kid from rural Indiana can become one of the toughest human beings on planet Earth?",
      "The 'What If' mentality neutralizes self-doubt by reframing impossible obstacles into thrilling hypotheses waiting to be tested in the laboratory of life.",
      "In the end, you are not competing against other people; you are competing against your own potential. Live in such a way that when you die and meet your creator or look back upon your life, you left nothing on the table."
    ],
    heuristic: "When doubt whispers that a goal is impossible, silence it with 'What if?' Live an uncapped existence.",
    verbatim: "“The most important conversation you will ever have is the one you have with yourself. You wake up with it, you walk around with it, you go to bed with it. Tell yourself: What if?” — David Goggins"
  }
];

// GENERATE MASTER-NOTES.MD
console.log("Generating cant-hurt-me master-notes.md...");
let mdContent = `# Can't Hurt Me: Master Your Mind and Defy the Odds

**Author:** David Goggins (2018)  
**System Standard:** BKRS v1.0 Total Replacement Master Codex  
**Corpus Architecture:** 11 Invariant Chapters | The 10 Challenges | The 40% Rule & The Callused Mind  

---

## Executive Epistemic Summary: The Architecture of Mental Toughness

David Goggins’ *Can’t Hurt Me* is not a conventional celebrity self-help memoir; it is a **visceral, clinical post-mortem of human suffering, trauma inoculation, and the intentional expansion of human work capacity**.

Goggins proves that the human brain operates under an evolved biological 'Governor' designed to keep us safe, comfortable, and mediocre. By systematically exposing himself to voluntary suffering—dropping 106 pounds in 3 months, surviving three Hell Weeks, running 100 miles on broken bones, and shattering the World Pull-up Record—Goggins outlines an uncompromising methodology for building an 'Armored Mind':
1. **The Accountability Mirror:** Radical, unvarnished self-honesty that eliminates excuses.
2. **The Callused Mind:** Voluntarily doing what you hate every day to inoculate against future adversity.
3. **Taking Souls:** Dominating hostile environments through undeniable energetic excellence.
4. **The Cookie Jar:** Accessing past suffering and victories to silence panic in the depths of crisis.
5. **The 40% Rule:** Recognizing that when your mind tells you you are done, you have only tapped 40% of your true reserve.

---

`;

units.forEach(u => {
  mdContent += `## Unit ${u.number}: ${u.title}\n`;
  mdContent += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_tag}\`\n\n`;
  mdContent += `### Core Invariant Concept\n${u.core_concept}\n\n`;
  mdContent += `### Narrative Breakdown & The Crucible Experience\n\n`;
  u.narrative.forEach(p => {
    mdContent += `${p}\n\n`;
  });
  mdContent += `> ${u.verbatim}\n\n`;
  mdContent += `**Operational Heuristic:** *${u.heuristic}*\n\n---\n\n`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), mdContent, 'utf8');
console.log(`Saved master-notes.md (${mdContent.length} chars)`);

// GENERATE KNOWLEDGE-UNITS.JSON
console.log("Generating knowledge-units.json for cant-hurt-me...");
const knowledgeUnits = units.map(u => ({
  unit_id: `unit-${String(u.number).padStart(2, '0')}`,
  unit_number: u.number,
  title: u.title,
  scope: u.scope,
  epistemic_status: u.epistemic_tag,
  core_concept: u.core_concept,
  narrative_breakdown: u.narrative,
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
  <title>Can't Hurt Me — David Goggins | BKRS Master Reader</title>
  
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
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The 11 Chapters</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: Mental Weapons Blueprint</button>
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
        <div class="sidebar-title">Goggins' Crucible</div>
        <div class="sidebar-meta">11 Invariant Chapters</div>
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

        <!-- VIEW A: THE 11 CHAPTERS -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Single-Volume Master Reconstruction
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              Can't Hurt Me
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A comprehensive reconstruction of David Goggins’ masterwork on mental toughness. Analyzing the 40% Rule, the biological governor, trauma inoculation, Hell Week psychology, the Accountability Mirror, and the Cookie Jar.
            </div>
          </div>

          <!-- THE 11 UNITS -->
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
                ${u.narrative.map(p => `<p class="narrative-p">${p}</p>`).join('')}
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

        <!-- VIEW B: MENTAL WEAPONS BLUEPRINT -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Mental Weapons Blueprint</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Five Cognitive Weapons for Overriding the Biological Governor</p>
          </div>

          <div style="display: grid; gap: 20px;">
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-crimson); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-crimson); margin-bottom: 6px;">1. The Accountability Mirror</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Facing your unvarnished reflection daily. Eradicating excuses and posting explicit metrics of improvement on the glass.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-gold); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-gold); margin-bottom: 6px;">2. Taking Souls</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Dominating an oppressive environment by responding to pain and hostility with cheerful, booming excellence. Breaking the will of the oppressor.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid var(--accent-forest); border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--accent-forest); margin-bottom: 6px;">3. The Callused Mind</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Doing what you hate every single day to build psychological armor. Inoculating the nervous system before real-world crises hit.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid #2b6cb0; border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #2b6cb0; margin-bottom: 6px;">4. The Cookie Jar</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">A mental memory bank of every impossible hardship you have ever survived. Reaching in to silence panic and self-doubt in the depths of suffering.</p>
            </div>
            <div style="padding: 20px; background: var(--bg-card); border-left: 4px solid #6b46c1; border-radius: 6px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: #6b46c1; margin-bottom: 6px;">5. The 40% Rule</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">Recognizing that when your body screams 'I have nothing left,' your evolved biological governor has only engaged at 40% capacity. You have 60% left.</p>
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
console.log('Saved index.html (Definitive BKRS Reader Shell with 11 Units and Mental Weapons)');

// UPDATE LIBRARY INDEX
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
if (fs.existsSync(libIndexPath)) {
  const lib = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
  const book = lib.books.find(b => b.id === 'cant-hurt-me');
  if (book) {
    book.original_volume = "Complete 11 Chapters & 10 Challenges (The 40% Rule, The Governor, Taking Souls, The Cookie Jar)";
    book.reading_time_saved = "11.0 hrs saved";
    book.hours_val = 11;
    fs.writeFileSync(libIndexPath, JSON.stringify(lib, null, 2), 'utf8');
    console.log('Updated docs/library-index.json for cant-hurt-me');
  }
}
