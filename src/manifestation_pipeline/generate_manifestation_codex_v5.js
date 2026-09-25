const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/manifestation-unified-codex');
const unitsPath = path.join(targetDir, 'knowledge-units.json');
let manifestationUnits = JSON.parse(fs.readFileSync(unitsPath, 'utf8'));

// Filter to keep 1-30 clean
manifestationUnits = manifestationUnits.filter(u => u.unit_number <= 30);

const zelandUnits = [
  {
    id: "unit-31-zeland-pendulums-egregors",
    unit_number: 31,
    title: "Pendulums & Energy Egregors: Neutralizing Socio-Cognitive Energy Traps",
    movement: "Movement XVII: Transurfing & The Space of Variations (Vadim Zeland)",
    scope: "Zeland (Reality Transurfing, Step I: Ch. 2)",
    primary_authors: ["Vadim Zeland"],
    core_concept: "Human societies are dominated by 'Pendulums'—autonomous energy-informational structures (political movements, corporations, social media trends, ideologies) that capture individuals' attention and feed on their emotional resonance, regardless of whether that emotion is passionate loyalty or bitter indignation.",
    epistemic_audit: "SYSTEMS DYNAMICS & SOCIO-COGNITIVE THEORY. Strips Zeland's literal esoteric 'energy vampire' language; maps directly to modern mimetic theory (René Girard), algorithmic rage baiting, attentional capture, and social contagion.",
    key_tenets: [
      "A pendulum traps you whenever you react with emotional friction: fighting a pendulum, complaining about it, or hating it feeds it exactly the same attentional currency as worshipping it (Zeland).",
      "Defeating a Pendulum: The only two methods are (1) Extinguishing it through radical indifference (refusing to engage or assign significance), or (2) Collapsing it through absurd, unexpected playfulness (humor or agreeing pleasantly with hostility) (Zeland).",
      "True sovereignty requires renting your attention to society while keeping your internal identity entirely independent."
    ],
    operational_heuristic: "Never fight toxic systems or outrage bait; extinguish pendulums with cool indifference or collapse them with absurd humor.",
    verbatim_anchor: "“To extinguish a pendulum, you have to ignore it, completely... To collapse a pendulum, you respond with an unexpected, absurd reaction.” — Vadim Zeland (Reality Transurfing)",
    epistemic_status: "SYSTEMS DYNAMICS",
    materiality: "CRITICAL"
  },
  {
    id: "unit-32-zeland-excess-potential-importance",
    unit_number: 32,
    title: "Excess Potential & Balancing Forces: The Homeostatic Law of Dropping Importance",
    movement: "Movement XVII: Transurfing & The Space of Variations (Vadim Zeland)",
    scope: "Zeland (Reality Transurfing, Step I: Ch. 3–4)",
    primary_authors: ["Vadim Zeland"],
    core_concept: "Assigning excessive internal importance ('I am pathetic if I fail') or external importance ('This person/opportunity is a divine miracle') creates an 'excess energetic potential'. Nature abhors vacuums and asymmetries, immediately deploying psychological and situational 'Balancing Forces' that destroy the desired goal to restore equilibrium.",
    epistemic_audit: "HOMEOSTATIC PSYCHOLOGY & STRESS PHYSIOLOGY. Matches Yerkes-Dodson law of optimal arousal; extreme emotional over-investment causes motor tension, cognitive impairment, and perceptual narrowing ('choking').",
    key_tenets: [
      "Internal Importance creates guilt, unworthiness, or arrogance; External Importance creates idolatry, panic, and manic desperation (Zeland).",
      "Balancing Forces: The moment you treat an outcome as life-or-death, the universe balances the tension by ensuring the very circumstance you fear manifests (Zeland).",
      "Dropping Importance: Accept the possibility of defeat ahead of time, take pragmatic action without drama, and view your goal as casually as walking to the mailbox to collect the morning newspaper."
    ],
    operational_heuristic: "Drop importance to zero: want outcomes with the casual calm of walking to the mailbox; if you treat a goal as life-or-death, you invite ruin.",
    verbatim_anchor: "“Desire is the striving to possess an outcome while attaching massive importance to it... Eliminate importance, and balancing forces will have nothing to act against.” — Vadim Zeland",
    epistemic_status: "HOMEOSTATIC PSYCHOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-33-zeland-outer-intention-variations",
    unit_number: 33,
    title: "Outer Intention vs. Inner Intention: Navigating the Space of Variations",
    movement: "Movement XVII: Transurfing & The Space of Variations (Vadim Zeland)",
    scope: "Zeland (Reality Transurfing, Step I: Ch. 1, Step IV: Ch. 1)",
    primary_authors: ["Vadim Zeland"],
    core_concept: "Reality is an infinite information matrix containing all potential outcomes ('The Space of Variations'). Inner Intention is the exhausting struggle of the ego to manipulate the physical world by force; Outer Intention is the serene decision to allow the target sector of reality to unfold on its own through harmonious unity of mind and heart.",
    epistemic_audit: "PHENOMENOLOGY & COGNITIVE AGENCY. Bridges Eastern Wu Wei (effortless action) with modern cybernetics and probabilistic Bayesian state selection.",
    key_tenets: [
      "Inner Intention says 'I will force this door open with sheer muscle'; Outer Intention says 'I choose the corridor where the door is already wide open' (Zeland).",
      "Unity of Soul and Mind: When the intellectual mind wants wealth but the deep emotional self feels unworthy, outer intention is paralyzed; manifestation occurs only when logic and somatic feeling agree.",
      "The Fraile Principle: Respect the inner uniqueness of others; never attempt to force someone to submit to your will. 'Allow yourself to be yourself, and allow others to be others.'"
    ],
    operational_heuristic: "Cease straining against locked doors; shift from inner force to outer intention by aligning emotional peace with pragmatic behavioral selection.",
    verbatim_anchor: "“Inner intention is the determination to act; outer intention is the determination to have. Inner intention is effort; outer intention is choice.” — Vadim Zeland (Reality Transurfing)",
    epistemic_status: "PHENOMENOLOGY & CYBERNETICS",
    materiality: "CRITICAL"
  }
];

manifestationUnits.push(...zelandUnits);

fs.writeFileSync(unitsPath, JSON.stringify(manifestationUnits, null, 2), 'utf8');
console.log(`Updated knowledge-units.json to ${manifestationUnits.length} units!`);

// 23 Rosetta Stone Terms
const rosettaStonePath = path.join(targetDir, 'rosetta-stone.json');
let rosettaStoneTerms = JSON.parse(fs.readFileSync(rosettaStonePath, 'utf8'));

const zelandTerms = [
  {
    term: "Pendulums (Energy Egregors)",
    category: "Systems Dynamics & Attention",
    jargon_claim: "“Energy vampires feeding on human emotional vibration.” (Reality Transurfing)",
    plain_english: "Large social institutions, trends, or internet outrage mobs that hijack your attention and suck your emotional energy, regardless of whether you love them or hate them.",
    analogy: "A screaming toddler throwing a tantrum in a grocery store. If you scream back or argue, he screams louder; if you look away with complete indifference, he stops because he has no audience.",
    origin_authors: ["Vadim Zeland"],
    actionable_rule: "Whenever news or social media outrages you, refuse to react; extinguish the pendulum by turning off the screen."
  },
  {
    term: "Excess Potential & Balancing Forces",
    category: "Homeostatic Psychology",
    jargon_claim: "“Distorting the energy balance of the universe.” (Reality Transurfing)",
    plain_english: "When you obsess over something so desperately that you make it life-or-death, your anxiety triggers performance choking and ruins the opportunity.",
    analogy: "Carrying a glass of water filled to the absolute brim across a crowded room. If you obsess over not spilling a drop, your hands shake violently and you spill it. If you relax, you walk smoothly.",
    origin_authors: ["Vadim Zeland"],
    actionable_rule: "Drop the drama: accept that you can survive happily without this goal, and pursue it with calm, playful nonchalance."
  },
  {
    term: "Outer Intention vs. Inner Intention",
    category: "Phenomenology & Agency",
    jargon_claim: "“Choosing your sector in the space of variations.” (Reality Transurfing)",
    plain_english: "Inner intention is grinding yourself to exhaustion trying to force reality to change. Outer intention is choosing the right direction calmly and letting opportunities open naturally.",
    analogy: "Inner intention is swimming furiously against a raging river until your muscles cramp. Outer intention is turning your boat and riding the swift, smooth current downstream.",
    origin_authors: ["Vadim Zeland"],
    actionable_rule: "Stop forcing resistant people or dead-end negotiations; focus on the open doors where cooperation flows naturally."
  }
];

rosettaStoneTerms = rosettaStoneTerms.filter(t => !zelandTerms.some(b => b.term === t.term));
rosettaStoneTerms.push(...zelandTerms);

fs.writeFileSync(rosettaStonePath, JSON.stringify(rosettaStoneTerms, null, 2), 'utf8');
console.log(`Updated rosetta-stone.json to ${rosettaStoneTerms.length} terms!`);

// Generate master-notes.md
const masterNotesContent = `# The Master Codex of Manifestation: A Unified Cross-Source Synthesis
**Corpus Scope:** 19 Canonical Works Synthesized (Dr. Joseph Murphy, Neville Goddard [3 Works], Vadim Zeland [Reality Transurfing I–V], Florence Scovel Shinn, Dr. Joe Dispenza [2 Works], Eckhart Tolle, Shakti Gawain, Dr. James R. Doty, MD [Stanford], Gabrielle Bernstein, Rhonda Byrne [2 Works], Esther & Jerry Hicks, Roxie Nafousi, Arden G., Z Z Rae, Jeffery Dawson)  
**System Standard:** BKRS v1.0 Total Replacement Codex  
**Corpus Architecture:** 17 Movements | 33 Invariant Knowledge Units | Comprehensive Epistemic Audit  
**Objective:** Transform disparate manifestation literature into a scientifically grounded, source-faithful, and genuinely followable master codex.  

---

## Executive Summary: The Complete Epistemic Architecture

For over a century, manifestation literature has oscillated between profound psychological insight and absurd, predatory pseudoscience. When stripped of New Age mysticism and commercialization, manifestation is not a magical method for altering the gravitational or quantum properties of the universe through wishful thinking. Rather, it is **the systematic convergence of subconscious identity, cognitive salience (the Reticular Activating System & Salience Network), neurobiological heart-brain coherence, vagal parasympathetic regulation, systems awareness (neutralizing socio-cognitive pendulums), and high-probability behavioral action.**

This Unified Master Codex synthesizes the core contributions of all 19 canonical works:
1. **Dr. Joseph Murphy (*The Power of Your Subconscious Mind*):** The mechanics of the subjective subconscious mind, autosuggestion, the Law of Reversed Effort, and hypnagogic sleep-state imprinting (Baudouin technique).
2. **Neville Goddard (*Feeling Is the Secret*, *The Power of Awareness*, & *Infinite Potential*):** The Law of Assumption, "I AM" consciousness, first-person sensory imagery, the SATS hypnagogic loop, the Law of the Reversible Process, and the Pruning Shears of Revision.
3. **Vadim Zeland (*Reality Transurfing: Steps I–V*):** The cybernetics of reality selection: the Space of Variations, neutralizing destructive Pendulums (egregors), eliminating Excess Potential by dropping importance, and replacing Inner Strain with Outer Intention.
4. **Florence Scovel Shinn (*The Game of Life and How to Play It*):** The Law of the Spoken Word, casting the burden, non-resistance, karmic boomerangs, and the Divine Design.
5. **Dr. Joe Dispenza (*Breaking the Habit of Being Yourself* & *Becoming Supernatural*):** The neurobiology of transformation: breaking emotional addictions to past trauma, crossing the river of change, heart-brain coherence, epigenetics, and collapsing the quantum wave function.
6. **Eckhart Tolle (*The Power of Now*):** The philosophy of presence: disidentifying from the egoic mind, transcending psychological time, surrender, and creating from the timeless Unmanifested Now.
7. **Shakti Gawain (*Creative Visualization*):** The classic holistic visualization toolkit: the Four Basic Steps, the Pink Bubble technique, mental sanctuary, and clearing energy blocks.
8. **Dr. James R. Doty, MD (*Mind Magic: The Neuroscience of Manifestation and How It Changes Everything*, 2024):** The Stanford clinical neurosurgical framework: down-regulating the Default Mode Network (DMN), recruiting the Salience Network, and the biological power of prosocial compassion over selfish scarcity.
9. **Gabrielle Bernstein (*The Universe Has Your Back: Transform Fear to Faith*):** Transforming panic into radical trust, the practice of the Holy Instant, overcoming manic control, and reframing obstacles as divine detours.
10. **Rhonda Byrne (*The Secret* & *The Power of Feelings*):** The global popularization of the Law of Attraction, the 51% Emotional Tipping Point, feeling as the fuel of thought, and gratitude mechanics.
11. **Esther & Jerry Hicks (*Ask and It Is Given*):** The 22-rung Emotional Guidance Scale, the mechanics of non-resistance, the "Art of Allowing", and navigating cognitive contrast.
12. **Roxie Nafousi (*Manifest: 7 Steps to Living Your Best Life*):** The modern cognitive-behavioral translation: grounding manifestation in self-worth, comfort-zone expansion, passing "universe tests", and turning envy into inspiration.
13. **Arden G. (*Detachment & Manifestation: Stop Chasing, Start Attracting*):** The paradox of surrender, attachment theory, eliminating needy desperation, and nervous system regulation.
14. **Z Z Rae (*How to Manifest a Soulmate*):** Relational self-concept, clearing past relationship trauma, and interpersonal boundary mechanics.
15. **Jeffery Dawson (*Mind Control: Manipulation, Deception and Persuasion*):** The psychological mirror: linguistic framing, covert suggestion, detecting manipulative gurus, and intellectual self-defense.

---

## The Beginner's Rosetta Stone: 23 Essential Terms Decoded in Plain English

If you are reading this literature for the first time, you will encounter a wall of esoteric New Age jargon and dense neurological terms. Use this table as your master translation guide:

| Term & Category | What the Books Say (Jargon) | What It Actually Means (Plain English) | The Everyday Analogy | Origin Authors |
| :--- | :--- | :--- | :--- | :--- |
${rosettaStoneTerms.map(t => `| **${t.term}**<br>*\`${t.category}\`* | ${t.jargon_claim} | **${t.plain_english}** | ${t.analogy} | ${t.origin_authors.join(', ')} |`).join('\n')}

---

## 33 Unified Invariant Knowledge Units

${manifestationUnits.map(u => `### [Unit ${String(u.unit_number).padStart(2, '0')}] ${u.title}
- **Structural Movement:** ${u.movement}
- **Corpus Sources:** ${u.scope}
- **Primary Authors:** ${u.primary_authors.join(', ')}
- **Epistemic Classification:** \`${u.epistemic_status}\` | Materiality: **${u.materiality}**

#### Core Invariant Concept
${u.core_concept}

#### Epistemic Audit & Scientific Translation
${u.epistemic_audit}

#### Systematic Tenets & Cross-Source Principles
${u.key_tenets.map(t => `1. ${t}`).join('\n')}

#### Operational Heuristic & Behavioral Maxim
> *${u.operational_heuristic}*

#### Verbatim Archival Anchor
${u.verbatim_anchor}

---`).join('\n\n')}

## The Grand Dispute Matrix: Where the Authors Contradict

### Dispute 1: Action vs. Pure Vibrational Alignment
- **The Byrne/Hicks Position:** Rhonda Byrne and Esther Hicks argue that physical action is secondary. Hicks asserts that "99% of your creation is completed before you see any physical evidence" and that forcing action when out of alignment causes failure.
- **The Dispenza/Doty/Nafousi/Murphy Counter-Position:** Dr. James R. Doty (Stanford), Dr. Joe Dispenza, Dr. Joseph Murphy, and Roxie Nafousi insist that action is the physical currency of reality. Nafousi calls passive visualization without uncomfortable action the "Secret Couch Fallacy."
- **Unified Synthesis:** Alignment without action is delusional fantasy; action without alignment is burnout and friction. True manifestation is **aligned, proactive behavioral execution**: visualization prepares the nervous system to execute difficult, high-leverage actions without paralysis.

### Dispute 2: Future Desires vs. The Present Moment
- **The Neville/Byrne Position:** Neville Goddard demands "living in the end"—mentally dwelling in a future accomplished reality to collapse time.
- **The Eckhart Tolle Warning:** In *The Power of Now*, Tolle warns that chronic future-projection is an egoic delusion that breeds anxiety and denies the only reality that actually exists: the Now.
- **Unified Synthesis:** Anchor your **being in the present moment** without resistance, while using **assumption to calibrate intentional direction**. You do not escape the present; you bring the fullness of the vision into the present Now.

### Dispute 3: Quantum Physics vs. Cognitive Attention
- **The Byrne Error:** *The Secret* asserts that the human brain operates like a radio transmission tower broadcasting electromagnetic frequencies that gravitationally attract physical circumstances.
- **The Neurobiological Truth (Doty & Dispenza):** The human brain emits micro-voltage EEG waves that dissipate within millimeters of the skull. The real mechanism is the **Reticular Activating System (RAS)**, **Salience Network**, and **heart-brain coherence**: when a goal is emotionally prioritized, neural filters clear away noise, enabling you to spot opportunities and resources that were already physically present but previously ignored.

### Dispute 4: Inner Willpower vs. Outer Intention
- **The Pop-Self-Help Dogma (Byrne / Typical Hustle Culture):** Demands unrelenting mental striving, grit, and forceful willpower to bend reality to your desires.
- **The Transurfing Stance (Vadim Zeland):** Forceful striving creates "Excess Potential," triggering Balancing Forces that ruin your chances. True mastery is **Outer Intention**: dropping importance, cultivating non-attachment, and stepping into the natural flow of reality.
- **Unified Synthesis:** Inner intention handles daily task execution; Outer intention governs strategic emotional detachment. Do the work diligently, but drop the desperate drama.

### Dispute 5: Selfish Materialism vs. Prosocial Compassion
- **The Pop-Culture Jargon (Byrne / Commercial Gurus):** Manifestation is framed as a personal weapon to obtain luxury watches, mansions, and romantic conquests to satisfy egoic vanity.
- **The Stanford Neurosurgical Finding (Dr. James R. Doty):** Scans demonstrate that selfish vanity intentions activate amygdala threat circuits, elevating cortisol and restricting visual bandwidth. Prosocial, compassionate intentions stimulate the vagus nerve and release oxytocin and dopamine, unlocking prefrontal creativity and attracting human cooperation.
- **Unified Synthesis:** Material security is valid, but it must be detached from egoic unworthiness; aligning goals with service to others optimizes neural wiring and commands human cooperation.

### Dispute 6: Specificity vs. General Surrender
- **The Hyper-Specific Camp (Murphy, Byrne, Rae, Shinn):** Demand exact numbers, detailed partner specifications, and precise visual details.
- **The General Alignment Camp (Hicks, Bernstein, Arden G., Tolle, Zeland):** Argue that hyper-specificity triggers anxiety and resistance ("How will this happen? What if it doesn't?"). Recommends surrendering details and focusing purely on the underlying emotional state of freedom and relief.
- **Unified Synthesis:** Use specificity to define the **target direction**, but use general surrender to release **attachment to the timeline and mechanism**.

### Dispute 7: The Victim-Blaming Fallacy
- **The Pop-Manifestation Hazard:** Extreme proponents of the Law of Attraction claim that individuals in poverty, victims of war, or people diagnosed with terminal illnesses "attracted" their suffering through low-vibrational thoughts.
- **The Unified Codex Verdict:** This is a monstrous philosophical error rooted in survivor bias and the Just-World Fallacy. Biological illness, geopolitical conflict, and socioeconomic structural oppression operate on external physical and historical laws. Manifestation applies strictly to an individual's **subjective mindset, behavioral choices, and perceptual agency**, never as a moral explanation for collective external catastrophes.

---

## The Master 24-Hour Operational Protocol (The Actionable Practice Engine)

### Phase 1: Morning Priming Protocol (First 25 Minutes)
1. **Digital Fast:** No smartphone, email, or social media for the first 25 minutes. Protect theta/alpha brainwave plasticity.
2. **Somatic Breath Reset (3 Mins):** Three minutes of physiological sighs or box breathing to silence the Default Mode Network (DMN) (Doty).
3. **Heart-Brain Coherence Meditation (5 Mins - Dispenza):** Focus attention on the center of the chest. Breathe deeply into the heart and generate an elevated somatic emotion: gratitude, awe, or compassion.
4. **Sensory Gratitude Drill (3 Mins - Gawain/Hicks):** Viscerally feel bodily appreciation for 3 specific, mundane realities.
5. **RAS, Salience & Outer Intention Calibration (10 Mins - Nafousi/Doty/Zeland):** Review primary quarterly objective. Clarify the single most uncomfortable high-leverage action required today. Consciously **drop importance**: declare that success or delay both leave your internal dignity intact.

### Phase 2: Daytime Execution & Aligned Action (Working Hours)
1. **The Comfort-Zone Step:** Execute the single most intimidating, high-leverage task early in the day (the pitch, the cold email, the boundary conversation).
2. **The Pendulum Neutralizer (Zeland):** When colleagues, news, or social media try to drag you into drama, extinguish the pendulum through calm indifference or humor.
3. **The Detachment & Detour Anchor (Arden G. / Bernstein):** When timeline anxiety surfaces, repeat: *“What is meant for me will not pass me. Obstacles are detours in the right direction. I control my input; I release the outcome.”*
4. **The Tolle Presence Reset:** When feeling overwhelmed, pause for 60 seconds, feel the inner energy of your hands and feet, and witness the thinking mind without judgment.
5. **The 51% Tipping Point Guard (Byrne):** Ensure slightly more than half of your daily reactions are grounded in appreciation rather than complaints.
6. **Envy Transmutation Trigger:** The moment you feel envy or comparison on social media, immediately bless that person: *“I celebrate your success, and I recognize it as empirical proof that this level of abundance is achievable in human reality.”*

### Phase 3: Evening SATS & Revision Routine (Last 20 Minutes Pre-Sleep - Neville Goddard / Murphy / Zeland)
1. **Subconscious De-Escalation:** Cease television, stimulating media, and work discussions 30 minutes before sleep.
2. **The Pruning Shears of Revision (5 Mins - Goddard):** Review any difficult or negative encounter that occurred today; mentally rewrite the scene in your imagination until it ends with harmony, respect, and peace.
3. **Enter the Drowsy State (Baudouin Technique):** Lie comfortably in bed, relax all muscles from scalp to toes, and allow the body to enter the heavy, sleepy hypnagogic state.
4. **The Short-Loop Imaginal Scene (Neville Goddard):** Run a single 5-to-10 second first-person scene that naturally implies your desire is already an accomplished fact.
5. **Somatic Feeling Consolidation:** Do not strive; gently loop the scene until the feeling of naturalness, zero importance, and relief settles into the chest. Drift into sleep holding that emotional atmosphere.

### Phase 4: The Empirical Falsification Journal (Weekly Tracking)
Maintain a strict weekly log with four columns:
- **Date & Target Goal**
- **Mental Baseline (Average rung on Emotional Scale 1–22 & Heart Coherence)**
- **Concrete Aligned Actions Taken (Objective behavioral count)**
- **Real-World Synchronicities, Opportunities, & Concrete Outcomes**

*Treat your own mind as an objective scientific laboratory: track your inputs, ruthlessly evaluate your outputs, and discard whatever does not yield verifiable peace, agency, and growth.*
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesContent, 'utf8');
console.log("Updated master-notes.md (33 Units, 23 Rosetta Terms, 7 Disputes, 24-hr Protocol)");

// Generate Standalone index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Master Codex of Manifestation — 19-Book Unified Synthesis | BKRS Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fcfbf9;
      --bg-card: #ffffff;
      --bg-card-subtle: #f8f6f0;
      --border-color: #e5e0d3;
      --border-color-focus: #c5bba6;
      --text-main: #1d1b18;
      --text-muted: #5e5950;
      --text-subtle: #8a8376;
      --accent-gold: #b38628;
      --accent-bronze: #8c531b;
      --accent-forest: #225e43;
      --accent-crimson: #8b181b;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
      --shadow-lg: 0 12px 28px rgba(0,0,0,0.12);
      --font-serif: "EB Garamond", Georgia, serif;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: "Cinzel", Georgia, serif;
      --measure: 820px;
    }

    [data-theme="dark"] {
      --bg-canvas: #121316;
      --bg-card: #1a1c22;
      --bg-card-subtle: #21242d;
      --border-color: #2e323f;
      --border-color-focus: #4b5266;
      --text-main: #e8e6e3;
      --text-muted: #a6a39b;
      --text-subtle: #726f67;
      --accent-gold: #d4a342;
      --accent-bronze: #b87333;
      --accent-forest: #38a374;
      --accent-crimson: #d1494d;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
      --shadow-lg: 0 12px 28px rgba(0,0,0,0.5);
    }

    [data-theme="sepia"] {
      --bg-canvas: #f4ecd8;
      --bg-card: #fbf5e6;
      --bg-card-subtle: #ede2c5;
      --border-color: #ded0b0;
      --border-color-focus: #b5a37f;
      --text-main: #2b261f;
      --text-muted: #665b4c;
      --text-subtle: #8a7c68;
      --accent-gold: #966b1d;
      --accent-bronze: #784212;
      --accent-forest: #225e43;
      --accent-crimson: #7d1a1b;
    }

    body[data-font="sans"] { --font-body: var(--font-sans); }
    body[data-font="serif"] { --font-body: var(--font-serif); }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body, var(--font-serif));
      font-size: 1.14rem;
      line-height: 1.78;
      transition: background-color 0.25s ease, color 0.25s ease;
      -webkit-font-smoothing: antialiased;
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-canvas);
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .top-bar-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }
    .brand-meta {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      color: var(--accent-gold);
    }
    .brand-sub {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      color: var(--text-subtle);
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .ctrl-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 5px 12px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .ctrl-btn:hover {
      border-color: var(--accent-gold);
      color: var(--text-main);
    }
    .ctrl-btn.active {
      background: var(--accent-gold);
      border-color: var(--accent-gold);
      color: #ffffff;
    }

    .hero-header {
      padding: 64px 24px 32px;
      text-align: center;
      max-width: 1000px;
      margin: 0 auto;
    }
    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-gold);
      margin-bottom: 12px;
      display: inline-block;
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 4.8vw, 3.6rem);
      line-height: 1.15;
      font-weight: 800;
      letter-spacing: 0.02em;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 28px;
    }
    .cert-pill {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      letter-spacing: 0.04em;
    }
    .cert-pill.highlight {
      background: #b3862818;
      border-color: var(--accent-gold);
      color: var(--accent-gold);
    }

    .hero-axiom {
      background: var(--bg-card);
      border-left: 3px solid var(--accent-gold);
      border-radius: 0 8px 8px 0;
      padding: 20px 28px;
      max-width: 860px;
      margin: 0 auto 36px;
      text-align: left;
      box-shadow: var(--shadow-sm);
    }
    .hero-axiom-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 800;
      color: var(--accent-gold);
      margin-bottom: 6px;
    }
    .hero-axiom-quote {
      font-family: var(--font-serif);
      font-size: 1.16rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

    .view-navigation {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1180px;
      margin-left: auto;
      margin-right: auto;
      flex-wrap: wrap;
    }
    .tab-btn {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 10px 18px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tab-btn span {
      font-size: 0.7rem;
      color: var(--accent-gold);
      font-weight: 800;
    }
    .tab-btn:hover {
      border-color: var(--accent-gold);
      color: var(--text-main);
    }
    .tab-btn.active {
      background: var(--bg-card);
      border-color: var(--accent-gold);
      color: var(--accent-gold);
      box-shadow: var(--shadow-sm);
    }

    .main-container {
      max-width: var(--measure);
      margin: 0 auto;
      padding: 0 24px 80px;
    }

    .search-box-wrapper {
      margin-bottom: 30px;
    }
    .search-input {
      width: 100%;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 14px 18px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
      transition: border-color 0.2s;
    }
    .search-input:focus {
      outline: none;
      border-color: var(--accent-gold);
    }

    /* ROSETTA STONE STYLES */
    .rosetta-intro-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-sm);
    }
    .rosetta-intro-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: var(--accent-gold);
      margin-bottom: 8px;
    }
    .rosetta-intro-p {
      font-size: 1.05rem;
      color: var(--text-muted);
      line-height: 1.65;
    }
    .rosetta-filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }
    .rosetta-chip {
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      padding: 6px 14px;
      border-radius: 20px;
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.2s;
    }
    .rosetta-chip:hover, .rosetta-chip.active {
      background: var(--accent-gold);
      border-color: var(--accent-gold);
      color: #ffffff;
    }

    .rosetta-term-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 26px 28px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-sm);
      transition: transform 0.15s, border-color 0.15s;
    }
    .rosetta-term-card:hover {
      border-color: var(--border-color-focus);
    }
    .rosetta-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .rosetta-term-title {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .rosetta-category-badge {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 4px;
      background: #b3862818;
      color: var(--accent-gold);
      border: 1px solid var(--accent-gold);
    }
    .rosetta-jargon-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-crimson);
      padding: 10px 16px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 0.96rem;
      color: var(--text-muted);
      border-radius: 0 4px 4px 0;
      margin-bottom: 16px;
    }
    .rosetta-definition {
      font-size: 1.12rem;
      line-height: 1.65;
      color: var(--text-main);
      margin-bottom: 14px;
    }
    .rosetta-analogy-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-forest);
      padding: 12px 18px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 14px;
      font-size: 1.02rem;
      line-height: 1.6;
    }
    .rosetta-analogy-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-forest);
      margin-bottom: 4px;
    }
    .rosetta-rule-box {
      font-family: var(--font-sans);
      font-size: 0.88rem;
      color: var(--text-muted);
      display: flex;
      align-items: baseline;
      gap: 6px;
      border-top: 1px solid var(--border-color);
      padding-top: 12px;
    }
    .rosetta-authors {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      color: var(--text-subtle);
      margin-top: 8px;
    }

    /* UNIT CARD STYLES */
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .unit-card-header {
      margin-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }
    .unit-meta-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .unit-number-tag {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
      color: var(--accent-gold);
    }
    .unit-badge-epistemic {
      font-family: var(--font-sans);
      font-size: 0.68rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 4px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
    }
    .unit-title {
      font-family: var(--font-display);
      font-size: 1.55rem;
      line-height: 1.3;
      margin-bottom: 8px;
      color: var(--text-main);
    }
    .unit-scope-bar {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      color: var(--text-subtle);
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .unit-core-concept {
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 20px;
      font-weight: 500;
      color: var(--text-main);
    }
    .unit-audit-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-gold);
      padding: 14px 18px;
      font-size: 0.95rem;
      margin-bottom: 20px;
      border-radius: 0 4px 4px 0;
      line-height: 1.6;
    }
    .unit-section-title {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-gold);
      margin-bottom: 12px;
    }
    .unit-tenets-list {
      list-style: none;
      margin-bottom: 24px;
    }
    .unit-tenet-item {
      position: relative;
      padding-left: 24px;
      margin-bottom: 12px;
      font-size: 1.04rem;
      line-height: 1.68;
      color: var(--text-main);
    }
    .unit-tenet-item::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: var(--accent-gold);
      font-size: 1.3rem;
      line-height: 1;
      top: 4px;
    }
    .unit-heuristic-box {
      border: 1px dashed var(--border-color);
      border-radius: 6px;
      padding: 14px 18px;
      margin-bottom: 20px;
      font-family: var(--font-sans);
      font-size: 0.88rem;
      line-height: 1.6;
      color: var(--text-muted);
    }
    .unit-heuristic-title {
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 4px;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
    }
    .unit-quote-box {
      background: var(--bg-card-subtle);
      border-radius: 6px;
      padding: 16px 22px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--text-main);
      border-left: 2px solid var(--accent-gold);
    }

    #view-stone { display: block; }
    #view-a, #view-b, #view-c { display: none; }

    /* MATRIX STYLES */
    .matrix-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }
    .matrix-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .matrix-sides {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }
    .matrix-side {
      background: var(--bg-card-subtle);
      padding: 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .matrix-side strong {
      display: block;
      margin-bottom: 6px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--accent-gold);
    }
    .matrix-synthesis {
      background: #b3862810;
      border-left: 3px solid var(--accent-gold);
      padding: 16px 20px;
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
      line-height: 1.65;
    }

    /* PROTOCOL STYLES */
    .protocol-step {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }
    .protocol-time {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-gold);
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .protocol-heading {
      font-family: var(--font-display);
      font-size: 1.35rem;
      margin-bottom: 12px;
    }
    .protocol-items {
      list-style: decimal inside;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 1.02rem;
    }

    .site-footer {
      border-top: 1px solid var(--border-color);
      padding: 48px 24px;
      text-align: center;
      font-family: var(--font-sans);
      font-size: 0.82rem;
      color: var(--text-subtle);
    }
    .footer-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 14px;
    }
    .footer-links a { color: var(--text-muted); text-decoration: none; }
    .footer-links a:hover { color: var(--accent-gold); }

    @media (max-width: 720px) {
      .hero-title { font-size: 2.2rem; }
      .unit-card { padding: 24px 20px; }
      .matrix-sides { grid-template-columns: 1fr; }
      .view-navigation { flex-wrap: wrap; }
    }
  </style>
</head>
<body data-theme="dark" data-font="serif">

  <header class="top-bar">
    <div class="top-bar-inner">
      <a href="../../index.html" class="brand-link">
        <img src="../../assets/images/logo.png" alt="Intellectualist Logo" class="brand-logo">
        <div class="brand-meta">
          <span class="brand-title">INTELLECTUALIST</span>
          <span class="brand-sub">Master Replacement Codex &bull; 19 Works Synthesized</span>
        </div>
      </a>
      <div class="top-controls">
        <div class="theme-toggle-group">
          <button class="ctrl-btn" onclick="setTheme('light')">Light</button>
          <button class="ctrl-btn" onclick="setTheme('sepia')">Sepia</button>
          <button class="ctrl-btn active" onclick="setTheme('dark')">Dark</button>
        </div>
        <div class="font-toggle-group">
          <button class="ctrl-btn active" onclick="setFont('serif')">Serif</button>
          <button class="ctrl-btn" onclick="setFont('sans')">Sans</button>
        </div>
      </div>
    </div>
  </header>

  <header class="hero-header">
    <span class="hero-kicker">BKRS v1.0 Unified Subject Master</span>
    <h1 class="hero-title">THE MANIFESTATION CODEX</h1>
    <p class="hero-subtitle">Neurosurgical Salience, Reality Transurfing, Epigenetics & Egoless Action Across 19 Canonical Works</p>
    
    <div class="hero-badges">
      <span class="cert-pill highlight">★ 19 Works Synthesized</span>
      <span class="cert-pill">33 Invariant Units</span>
      <span class="cert-pill">23 Decoded Key Terms</span>
      <span class="cert-pill">17 Movements</span>
      <span class="cert-pill">Stanford Neurosurgical & Transurfing Audit</span>
    </div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">System Invariant Foundation</div>
      <div class="hero-axiom-quote">
        “Manifestation is not magical physics or light-bending wishcraft. It is the systematic convergence of subconscious identity, cognitive salience filtering (the Reticular Activating System & Salience Network), neutralizing socio-cognitive pendulums, neurobiological heart-brain coherence, and courageous, high-integrity behavioral execution.”
      </div>
    </div>
  </header>

  <nav class="view-navigation">
    <button class="tab-btn active" id="tab-stone" onclick="switchView('stone')">
      <span>01.</span> Beginner's Rosetta Stone (Plain-English Decoder)
    </button>
    <button class="tab-btn" id="tab-a" onclick="switchView('a')">
      <span>02.</span> Unified Synthesis Journey (33 Units)
    </button>
    <button class="tab-btn" id="tab-b" onclick="switchView('b')">
      <span>03.</span> Cross-Source Dispute Matrix & Contradiction Index
    </button>
    <button class="tab-btn" id="tab-c" onclick="switchView('c')">
      <span>04.</span> The 24-Hour Master Operational Protocol
    </button>
  </nav>

  <main class="main-container">

    <!-- VIEW STONE: BEGINNER ROSETTA STONE -->
    <section id="view-stone">
      <div class="rosetta-intro-card">
        <h2 class="rosetta-intro-title">The Beginner's Plain-English Decoder (23 Terms)</h2>
        <p class="rosetta-intro-p">
          If this is your first time reading manifestation or neuroscience literature, don't be intimidated by the jargon. Every complex phrase in the 19 books maps to an intuitive psychological mechanism or an everyday physical habit. Use this interactive decoder to search or filter any term.
        </p>
      </div>

      <div class="search-box-wrapper">
        <input type="text" id="rosetta-search" class="search-input" placeholder="Search any term (e.g. SATS, RAS, Pendulum, Coherence, Hebbian, DMN, Revision, Importance)..." oninput="filterRosetta()">
      </div>

      <div class="rosetta-filter-chips">
        <button class="rosetta-chip active" onclick="filterRosettaCategory('all')">All Terms (23)</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('neuro')">Neuroscience & Mind</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('mystic')">Mystical Decoded</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('action')">Behavioral Action</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('defense')">Critical Defense</button>
      </div>

      <div id="rosetta-wrapper">
        ${rosettaStoneTerms.map(t => {
          let catClass = 'neuro';
          if (t.category.includes('Mystic') || t.category.includes('Hypnagogia') || t.category.includes('Intuitive') || t.category.includes('Phenomenology')) catClass = 'mystic';
          if (t.category.includes('Behavioral') || t.category.includes('Identity') || t.category.includes('Emotional') || t.category.includes('Reconsolidation') || t.category.includes('Momentum') || t.category.includes('Homeostatic')) catClass = 'action';
          if (t.category.includes('Defense') || t.category.includes('Persuasion') || t.category.includes('Critical') || t.category.includes('Systems')) catClass = 'defense';
          
          return `
          <article class="rosetta-term-card" data-category="${catClass}" data-term="${t.term.toLowerCase()}" data-text="${t.plain_english.toLowerCase()} ${t.jargon_claim.toLowerCase()} ${t.analogy.toLowerCase()}">
            <header class="rosetta-header">
              <h3 class="rosetta-term-title">${t.term}</h3>
              <span class="rosetta-category-badge">${t.category}</span>
            </header>

            <div class="rosetta-jargon-box">
              <strong>What the Books Claim:</strong> ${t.jargon_claim}
            </div>

            <div class="rosetta-definition">
              ${t.plain_english}
            </div>

            <div class="rosetta-analogy-box">
              <div class="rosetta-analogy-title">The Everyday Analogy</div>
              ${t.analogy}
            </div>

            <div class="rosetta-rule-box">
              <strong>Action Rule:</strong> <span>${t.actionable_rule}</span>
            </div>

            <div class="rosetta-authors">
              <strong>Source Footprint:</strong> ${t.origin_authors.join(' • ')}
            </div>
          </article>
          `;
        }).join('')}
      </div>
    </section>

    <!-- VIEW A: 33 INVARIANT UNITS -->
    <section id="view-a">
      <div class="search-box-wrapper">
        <input type="text" id="unit-search" class="search-input" placeholder="Search concepts or authors (e.g. Zeland, Doty, Neville, Dispenza, SATS, Bernstein, Tolle, Shinn)..." oninput="filterUnits()">
      </div>

      <div id="units-wrapper">
        ${manifestationUnits.map(unit => `
        <article class="unit-card" data-title="${unit.title.toLowerCase()}" data-authors="${unit.primary_authors.join(' ').toLowerCase()}" data-text="${unit.key_tenets.join(' ').toLowerCase()} ${unit.core_concept.toLowerCase()} ${unit.operational_heuristic.toLowerCase()}">
          <header class="unit-card-header">
            <div class="unit-meta-top">
              <span class="unit-number-tag">Unit ${String(unit.unit_number).padStart(2, '0')} &bull; ${unit.movement}</span>
              <span class="unit-badge-epistemic">${unit.epistemic_status}</span>
            </div>
            <h2 class="unit-title">${unit.title}</h2>
            <div class="unit-scope-bar">
              <span><strong>Sources:</strong> ${unit.scope}</span>
              <span>&bull;</span>
              <span><strong>Authors:</strong> ${unit.primary_authors.join(', ')}</span>
            </div>
          </header>

          <div class="unit-core-concept">
            ${unit.core_concept}
          </div>

          <div class="unit-audit-box">
            <strong>Scientific & Epistemic Audit:</strong> ${unit.epistemic_audit}
          </div>

          <div class="unit-section-title">Systematic Tenets & Cross-Source Principles</div>
          <ul class="unit-tenets-list">
            ${unit.key_tenets.map(t => `<li class="unit-tenet-item">${t}</li>`).join('')}
          </ul>

          <div class="unit-heuristic-box">
            <div class="unit-heuristic-title">Operational Heuristic & Behavioral Maxim</div>
            <div>${unit.operational_heuristic}</div>
          </div>

          <div class="unit-quote-box">
            ${unit.verbatim_anchor}
          </div>
        </article>
        `).join('')}
      </div>
    </section>

    <!-- VIEW B: DISPUTE MATRIX -->
    <section id="view-b">
      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 1: Action vs. Pure Vibrational Alignment</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Byrne & Hicks Stance</strong>
            Physical action is secondary. Hicks asserts that 99% of your creation is completed before any physical evidence appears; forcing action without alignment causes friction and failure.
          </div>
          <div class="matrix-side">
            <strong>The Doty, Dispenza, Murphy & Nafousi Stance</strong>
            Action is the physical currency of reality. Dr. James R. Doty and Dr. Joe Dispenza prove that visualization primes the motor cortex and salience network, but real-world high-leverage physical action is required to instantiate results.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Alignment without action is delusional fantasy; action without alignment produces burnout. Visualization conditions the nervous system so high-leverage, uncomfortable physical execution can occur without paralysis.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 2: Future Desires vs. Radical Presence</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Neville Goddard Stance</strong>
            Mentally dwelling in an imaginal future accomplished reality is essential to collapse time and impress the subconscious mind.
          </div>
          <div class="matrix-side">
            <strong>The Eckhart Tolle Stance</strong>
            Chronic future-projection is an egoic delusion that feeds dissatisfaction and denies the only reality that actually exists: the present Now.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Anchor your psychological being in the present moment without resistance, while using imaginal assumption to calibrate your intentional vector.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 3: Inner Willpower vs. Outer Intention</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Hustle / Willpower Dogma</strong>
            Believes reality yields to aggressive mental pushing, obsessive willpower, and grinding against obstacles with clenched teeth.
          </div>
          <div class="matrix-side">
            <strong>The Transurfing Stance (Vadim Zeland)</strong>
            Extreme striving creates 'Excess Potential', triggering Balancing Forces that ruin the manifestation. Outer Intention allows reality to unfold by choosing rather than fighting.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Inner intention manages daily micro-actions; outer intention governs strategic attitude. Execute your duties diligently, but completely drop the manic importance and emotional desperation.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 4: Quantum Physics vs. Cognitive Attention</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Pop-Manifestation Fallacy (The Secret)</strong>
            The human brain operates like a radio broadcast tower emitting electromagnetic waves that bend physical light and gravitationally pull objects to you.
          </div>
          <div class="matrix-side">
            <strong>The Empirical Neurobiological Reality (Doty & Dispenza)</strong>
            Brainwaves dissipate millimeters outside the cranium. The true mechanism is the <em>Reticular Activating System (RAS)</em>, <em>Salience Network</em>, and <em>heart-brain coherence</em>.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> When an intention is prioritized emotionally, the RAS and Salience Network strip away background sensory noise, allowing you to recognize opportunities and resources that were already physically present but previously filtered out.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 5: Selfish Materialism vs. Prosocial Compassion</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Commercial Pop Stance</strong>
            Manifesting is a technique to accumulate luxury cars, immense wealth, and social dominance over others to prove personal superiority.
          </div>
          <div class="matrix-side">
            <strong>The Stanford Neurosurgical Finding (Dr. Doty)</strong>
            Selfish intent fires the amygdala's threat and scarcity networks, spiking cortisol and impairing the prefrontal cortex. Prosocial intent stimulates the vagus nerve and oxytocin, expanding cognitive flexibility.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Material security is valid, but it must be detached from egoic unworthiness; aligning goals with service to others optimizes neural wiring and commands human cooperation.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 6: The Victim-Blaming Fallacy</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Toxic Positivity Trap</strong>
            Claims that people experiencing poverty, war, illness, or trauma 'vibrated at a low frequency' and attracted their misfortune.
          </div>
          <div class="matrix-side">
            <strong>The Intellectualist Forensic Audit</strong>
            This is a catastrophic manifestation of the Just-World Fallacy and survivor bias. External tragedies obey physical, biological, and historical causality.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Manifestation is strictly an internal cybernetic model for personal agency and perceptual focus—never an ethical explanation for external geopolitical or biological catastrophes.
        </div>
      </div>
    </section>

    <!-- VIEW C: 24-HOUR PROTOCOL -->
    <section id="view-c">
      <div class="protocol-step">
        <div class="protocol-time">06:00 – 06:25 | Morning Priming</div>
        <h3 class="protocol-heading">Phase 1: Neural & Autonomic Calibration</h3>
        <ol class="protocol-items">
          <li><strong>Digital Fast (25 mins):</strong> No smartphone or emails upon waking; protect theta-alpha brainwave plasticity.</li>
          <li><strong>Physiological Sigh & DMN Silence (3 mins - Doty):</strong> Double inhale through the nose, long unforced exhale through the mouth to discharge cortisol and mute the Default Mode Network.</li>
          <li><strong>Heart-Brain Coherence (5 mins - Dispenza):</strong> Focus attention in the center of the chest; breathe slowly and cultivate gratitude.</li>
          <li><strong>Sensory Gratitude (3 mins - Gawain/Hicks):</strong> Viscerally appreciate 3 mundane physical realities.</li>
          <li><strong>RAS, Salience & Dropping Importance (10 mins - Nafousi/Doty/Zeland):</strong> Review primary quarterly milestone and select today's high-leverage task. Drop importance to zero: accept defeat ahead of time so balancing forces have nothing to fight against.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">09:00 – 17:00 | Working Hours</div>
        <h3 class="protocol-heading">Phase 2: Aligned Action & Mind Defense</h3>
        <ol class="protocol-items">
          <li><strong>The Comfort-Zone Step:</strong> Execute your most intimidating task early before decision fatigue sets in.</li>
          <li><strong>The Pendulum Neutralizer (Zeland):</strong> Extinguish social media and workplace rage bait through total indifference or humorous non-reactivity.</li>
          <li><strong>The Detachment & Detour Anchor (Arden G. / Bernstein):</strong> Repeat: <em>“I control my inputs; obstacles are detours in the right direction; I release attachment to the timeline.”</em></li>
          <li><strong>The Tolle Presence Reset:</strong> When overwhelmed, take 60 seconds to feel the energy in your hands and feet.</li>
          <li><strong>The 51% Tipping Point Guard (Byrne):</strong> Ensure slightly more than half of your daily reactions are grounded in appreciation rather than complaints.</li>
          <li><strong>Envy Transmutation Trigger:</strong> Bless anyone whose success triggers comparison as proof of what is possible.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">21:45 – 22:30 | Evening Slumber</div>
        <h3 class="protocol-heading">Phase 3: The Revision, Non-Importance & SATS Routine</h3>
        <ol class="protocol-items">
          <li><strong>Subconscious De-escalation:</strong> Eliminate television and work emails 30 minutes before sleep.</li>
          <li><strong>The Pruning Shears of Revision (5 mins - Goddard):</strong> Review any discordant daily conversation; mentally replay and rewrite it into ideal harmony.</li>
          <li><strong>Baudouin Drowsy State:</strong> Lie comfortably in bed, relax all muscles from scalp to toes, and enter the heavy hypnagogic state.</li>
          <li><strong>The 10-Second Looping Scene (Neville Goddard):</strong> Loop a single first-person sensory scene implying the goal is an accomplished fact.</li>
          <li><strong>Consolidation into Sleep:</strong> Hold the feeling of naturalness, zero importance, and calm relief as sleep overtakes you.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">Weekly Review | Sunday Evening</div>
        <h3 class="protocol-heading">Phase 4: The Empirical Falsification Journal</h3>
        <ol class="protocol-items">
          <li>Audit weekly emotional baseline (where on the 22-rung scale and heart coherence did you dwell most of the week?).</li>
          <li>Count objective high-leverage behavioral actions executed versus avoided.</li>
          <li>Record unexpected synchronicities, opportunities, and concrete outcomes.</li>
          <li>Treat your mind as an objective laboratory: refine what works and discard what triggers self-delusion.</li>
        </ol>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-links">
      <a href="../../index.html">&larr; Return to Intellectualist Master Library</a>
      <a href="master-notes.md" target="_blank">Download Master Notes (Markdown)</a>
      <a href="rosetta-stone.json" target="_blank">Rosetta Stone JSON</a>
      <a href="knowledge-units.json" target="_blank">Canonical JSON Payload</a>
    </div>
    <div>Intellectualist &bull; Book Knowledge Reconstruction System (BKRS v1.0) &bull; The Manifestation Mega-Codex</div>
  </footer>

  <script>
    function setTheme(theme) {
      document.body.setAttribute('data-theme', theme);
      document.querySelectorAll('.theme-toggle-group .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === theme);
      });
      localStorage.setItem('bkrs_theme', theme);
    }

    function setFont(font) {
      document.body.setAttribute('data-font', font);
      document.querySelectorAll('.font-toggle-group .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === font);
      });
      localStorage.setItem('bkrs_font', font);
    }

    function switchView(view) {
      document.getElementById('view-stone').style.display = (view === 'stone') ? 'block' : 'none';
      document.getElementById('view-a').style.display = (view === 'a') ? 'block' : 'none';
      document.getElementById('view-b').style.display = (view === 'b') ? 'block' : 'none';
      document.getElementById('view-c').style.display = (view === 'c') ? 'block' : 'none';

      document.getElementById('tab-stone').classList.toggle('active', view === 'stone');
      document.getElementById('tab-a').classList.toggle('active', view === 'a');
      document.getElementById('tab-b').classList.toggle('active', view === 'b');
      document.getElementById('tab-c').classList.toggle('active', view === 'c');
    }

    function filterRosetta() {
      const q = document.getElementById('rosetta-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.rosetta-term-card');
      cards.forEach(card => {
        const term = card.getAttribute('data-term') || '';
        const text = card.getAttribute('data-text') || '';
        const match = !q || term.includes(q) || text.includes(q);
        card.style.display = match ? 'block' : 'none';
      });
    }

    let activeRosettaCategory = 'all';
    function filterRosettaCategory(cat) {
      activeRosettaCategory = cat;
      document.querySelectorAll('.rosetta-chip').forEach(chip => {
        const onclickAttr = chip.getAttribute('onclick');
        chip.classList.toggle('active', onclickAttr.includes("'" + cat + "'"));
      });
      const cards = document.querySelectorAll('.rosetta-term-card');
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const match = (cat === 'all' || cardCat === cat);
        card.style.display = match ? 'block' : 'none';
      });
    }

    function filterUnits() {
      const q = document.getElementById('unit-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const authors = card.getAttribute('data-authors') || '';
        const text = card.getAttribute('data-text') || '';
        const match = !q || title.includes(q) || authors.includes(q) || text.includes(q);
        card.style.display = match ? 'block' : 'none';
      });
    }

    const savedTheme = localStorage.getItem('bkrs_theme');
    if (savedTheme) setTheme(savedTheme);
    const savedFont = localStorage.getItem('bkrs_font');
    if (savedFont) setFont(savedFont);
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log("Updated index.html to 19-Book Codex with 33 Units and 23 Rosetta terms!");

// Update library-index.json
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
libIndex.total_books = 36;
libIndex.total_hours_saved = 745.0;
const manifestEntry = libIndex.books.find(d => d.id === 'manifestation-unified-codex');
if (manifestEntry) {
  manifestEntry.title = "The Master Codex of Manifestation: 19 Canonical Works Synthesized";
  manifestEntry.original_volume = "19 Volumes Synthesized (33 Invariant Units, 23 Rosetta Terms, 17 Movements)";
  manifestEntry.reading_time_saved = "145.0 hrs saved";
  manifestEntry.hours_val = 145;
  manifestEntry.core_axiom = "Manifestation is not magical physics or light-bending wishcraft. It is the systematic convergence of subconscious identity, cognitive salience filtering (the Reticular Activating System & Salience Network), neutralizing socio-cognitive pendulums, neurobiological heart-brain coherence, and courageous, high-integrity behavioral execution.";
  manifestEntry.tags = [
    "Subject Master Codex",
    "19 Canonical Works",
    "Reality Transurfing (Vadim Zeland)",
    "Stanford Neurosurgery (Dr. Doty)",
    "Subconscious Mind (Dr. Murphy)",
    "Law of Assumption (Neville Goddard)",
    "Revision Technique",
    "Neuroplasticity (Dr. Dispenza)",
    "Radical Presence (Eckhart Tolle)",
    "23-Term Rosetta Stone",
    "Grand Dispute Matrix",
    "24-Hour Behavioral Engine"
  ];
  fs.writeFileSync(libIndexPath, JSON.stringify(libIndex, null, 2), 'utf8');
  console.log("Updated docs/library-index.json!");
}

console.log("All 19-book Manifestation Codex files updated successfully!");
