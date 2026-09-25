const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/manifestation-unified-codex');
const unitsPath = path.join(targetDir, 'knowledge-units.json');
const manifestationUnits = JSON.parse(fs.readFileSync(unitsPath, 'utf8'));

const rosettaStoneTerms = [
  {
    term: "Reticular Activating System (RAS)",
    category: "Neuroscience & Attention",
    jargon_claim: "“The universe aligns synchronicities when you vibrate at the right frequency.” (The Secret)",
    plain_english: "A bundle of nerves in your brainstem that acts as a spam filter, screening out 99.9% of sensory noise and only letting through what you have emotionally marked as critically important.",
    analogy: "The search filter on an online store. When you search for 'red sneakers', the store doesn't magically manufacture shoes on the spot—it simply hides all the blue shirts so the red sneakers you previously ignored immediately catch your eye.",
    origin_authors: ["Dr. Joe Dispenza", "Roxie Nafousi"],
    actionable_rule: "Write down your single highest-priority goal every morning so your brain's radar spots relevant people, emails, and opportunities during the day."
  },
  {
    term: "State Akin to Sleep (SATS)",
    category: "Cognitive State & Hypnagogia",
    jargon_claim: "“Entering the fourth dimension where imagination becomes physical fact.” (Neville Goddard)",
    plain_english: "The drowsy, relaxed mental state (theta brainwave rhythm) experienced in the 5–10 minutes right before you fall asleep at night or immediately upon waking.",
    analogy: "Your conscious mind is like a strict security guard at the gate of your brain. During SATS, the guard gets sleepy and nods off, allowing you to walk right into your subconscious memory bank and install new beliefs without argument.",
    origin_authors: ["Neville Goddard", "Dr. Joseph Murphy (Baudouin Technique)"],
    actionable_rule: "Never fall asleep scrolling bad news or worrying about bills; loop a 5-second mental clip of your desired outcome being already true until you drift off."
  },
  {
    term: "The Law of Reversed Effort",
    category: "Behavioral Psychology",
    jargon_claim: "“Force negates itself; trying too hard repels your manifestation.” (Arden G.)",
    plain_english: "When your conscious will ('I must force this to happen!') clashes with your subconscious imagination ('I am terrified I will fail'), your imagination always wins and the fear gets amplified.",
    analogy: "A Chinese finger trap. The harder and more frantically you yank your fingers outward, the tighter the woven mesh traps you. To get free, you must relax, push inward, and soften the tension.",
    origin_authors: ["Dr. Joseph Murphy", "Émile Coué", "Arden G."],
    actionable_rule: "Stop straining to 'force' positive thinking. Instead, relax your body completely and focus solely on the quiet relief of the end result."
  },
  {
    term: "Heart-Brain Coherence & HRV",
    category: "Psychoneuroimmunology & Somatics",
    jargon_claim: "“Broadcasting an elevated electromagnetic signal into the quantum field.” (Becoming Supernatural)",
    plain_english: "Synchronizing your breathing and heart rhythm (Heart Rate Variability) with calm brainwaves, signaling to your body that you are safe rather than in emergency fight-or-flight survival.",
    analogy: "An orchestra tuning their instruments before a performance. When musicians play out of rhythm, it's painful racket (stress & cortisol). When they lock into the same smooth tempo, it becomes powerful, harmonious music.",
    origin_authors: ["Dr. Joe Dispenza", "HeartMath Institute"],
    actionable_rule: "Place your hand on your chest, breathe slowly in and out through your heart for 3 minutes, and recall a memory of profound gratitude."
  },
  {
    term: "Hebbian Neuroplasticity ('Fire & Wire')",
    category: "Neuroscience",
    jargon_claim: "“Quantum rewiring of your cellular vibration.” (Dispenza)",
    plain_english: "Neurons that fire together wire together. Whenever you repeat a thought, emotion, or action, your brain builds and insulates a physical highway so doing it again requires zero conscious effort.",
    analogy: "Walking across a wild, overgrown grassy field every morning. On day one, the tall grass trips you up. By day 30, your repeated footsteps have carved a smooth dirt trail that you can walk with your eyes closed.",
    origin_authors: ["Donald Hebb", "Dr. Joe Dispenza"],
    actionable_rule: "Catching yourself in an old negative thought pattern isn't a failure—it is the literal moment you starve the old neural highway of electricity."
  },
  {
    term: "The Law of Assumption & 'Living in the End'",
    category: "Mindset & Subconscious Identity",
    jargon_claim: "“Assume the feeling of the wish fulfilled until it hardens into fact.” (Feeling Is the Secret)",
    plain_english: "Adopting the internal identity, confidence, and calmness of the person who already possesses the result, preventing you from acting like a needy beggar in real-world negotiations.",
    analogy: "Ordering a package on Amazon. You don't spend three days pacing by the front door chewing your fingernails wondering if Amazon exists; you receive the confirmation, assume the box is arriving, and calmly go about your life.",
    origin_authors: ["Neville Goddard"],
    actionable_rule: "Ask yourself: 'If this goal were already guaranteed, how would I walk, breathe, and speak to people today?' Then act from that calm assurance."
  },
  {
    term: "Detachment / The Art of Allowing",
    category: "Emotional Regulation",
    jargon_claim: "“Surrendering your desires to the universe to allow them into your physical reality.” (Ask and It Is Given)",
    plain_english: "Putting 100% of your effort into the daily work while letting go of the obsessive need to control the exact timeline, person, or mechanism that delivers the result.",
    analogy: "Dating. If someone on a first date is frantic, clingy, and demands an immediate lifetime marriage commitment, they scare everyone away. Confidence means being your best self without demanding an instant guarantee.",
    origin_authors: ["Arden G.", "Esther & Jerry Hicks", "Florence Scovel Shinn"],
    actionable_rule: "Commit ruthlessly to your daily inputs (the pitch, the workout, the study session), but surrender attachment to whether the answer arrives on Tuesday or next month."
  },
  {
    term: "Concept of Self / 'I AM' Consciousness",
    category: "Self-Worth & Identity",
    jargon_claim: "“You never attract what you want; you attract what you ARE.” (The Power of Awareness)",
    plain_english: "Your subconscious internal thermostat—the baseline level of wealth, love, and respect you privately believe you deserve and feel comfortable tolerating.",
    analogy: "An air conditioner set to 68 degrees. If a sudden blast of heat enters the room (e.g., an unexpected financial windfall), the AC blasts cold air until the room is back at 68 (spending it all) unless you manually reprogram the dial.",
    origin_authors: ["Neville Goddard", "Dr. Joseph Murphy", "Roxie Nafousi"],
    actionable_rule: "Elevate your self-worth before chasing the external prize; otherwise, you will unconsciously sabotage what you acquire."
  },
  {
    term: "The Emotional Guidance Scale (22 Rungs)",
    category: "Emotional Reframing",
    jargon_claim: "“Vibrational frequencies ranging from Joy/Freedom at Rung 1 down to Fear/Grief at Rung 22.” (Hicks)",
    plain_english: "A psychological map showing that you cannot jump instantly from deep depression to joy. Stepping into anger or frustration is actually healthy progress because it has more energy and agency than helpless despair.",
    analogy: "Shifting gears in a manual car. You cannot shift straight from reverse gear into fifth gear on the highway without destroying the transmission; you must shift through neutral, first, second, and third.",
    origin_authors: ["Esther & Jerry Hicks"],
    actionable_rule: "If you feel depressed or helpless, don't force fake positivity. Channel anger or constructive frustration into cleaning your desk or taking a brisk walk."
  },
  {
    term: "The Pain-Body",
    category: "Ego Transcendence & Mindfulness",
    jargon_claim: "“A semi-autonomous energetic life-form feeding on emotional misery.” (The Power of Now)",
    plain_english: "The accumulated backlog of old emotional trauma and unresolved childhood grievances that temporarily takes over your thoughts, provoking fights or drama just to re-experience familiarity.",
    analogy: "An argumentative roommate inside your head who feeds on drama. The key is not to fight or argue with him, but to simply watch him quietly until he runs out of breath and sits down.",
    origin_authors: ["Eckhart Tolle"],
    actionable_rule: "When you feel an irrational urge to start an argument or wallow in old resentment, pause and say: 'The pain-body is trying to feed. I am the conscious watcher, not the drama.'"
  },
  {
    term: "The Divine Design & Casting the Burden",
    category: "Intuitive Metaphysics",
    jargon_claim: "“The divine pattern for your life which cannot be defeated by human will.” (The Game of Life)",
    plain_english: "Trusting that your unique strengths and values have a natural, harmonious place in the world, and stopping the exhausting struggle to force outcomes that violate your integrity.",
    analogy: "Floating down a gentle river in a kayak instead of furiously paddling upstream against rapids until your shoulders dislocate.",
    origin_authors: ["Florence Scovel Shinn"],
    actionable_rule: "When facing an insurmountable bureaucratic or personal deadlock, say: 'I cast this burden onto my deeper intelligence, and I accept the harmonious solution under grace.'"
  },
  {
    term: "The 'Universe Test'",
    category: "Behavioral Resilience",
    jargon_claim: "“The cosmos testing your energetic vibration before granting your manifestation.” (Manifest)",
    plain_english: "A predictable psychological obstacle or temptation (like a toxic ex-partner texting or an easy shortcut) that tests whether you have genuinely changed your standards or will slide back into old patterns.",
    analogy: "A pop quiz on day 10 of a healthy diet when a colleague brings a box of warm chocolate donuts to the office. It's not a mystical trap; it's a test of whether your new identity has a spine.",
    origin_authors: ["Roxie Nafousi"],
    actionable_rule: "When an old toxic situation reappears just as your life is improving, treat it as a test: uphold your boundary, smile, and say no without drama."
  },
  {
    term: "The Just-World Fallacy (The Victim-Blaming Error)",
    category: "Critical Defense & Ethics",
    jargon_claim: "“There are no accidents; people attract their own poverty, disease, and abuse.” (The Secret / Pop Law of Attraction)",
    plain_english: "A toxic cognitive bias where people falsely believe the universe always rewards good people and punishes bad people, leading them to cruelly blame victims of war, cancer, or natural disasters for their 'bad thoughts.'",
    analogy: "Claiming someone whose house was destroyed by a hurricane lost their home because they 'didn't smile enough,' instead of recognizing the physical category 5 hurricane. It is pseudoscientific delusion.",
    origin_authors: ["Forensic Refutation by Intellectualist Codex"],
    actionable_rule: "Use manifestation exclusively to govern your own psychology and daily choices; never use it to judge, blame, or invalidate the real-world suffering of others."
  },
  {
    term: "Pacing and Leading",
    category: "Persuasion & Guru Defense",
    jargon_claim: "“Charismatic vibrational resonance.” (Commercial Gurus)",
    plain_english: "A psychological persuasion tactic where an influencer matches your body language, tone, and private complaints (pacing) to win your trust, then steers your wallet toward their expensive masterclass (leading).",
    analogy: "A street tour guide matching your slow walking pace for three minutes so you feel at ease, then casually turning a corner and leading you straight into his cousin's overpriced rug shop.",
    origin_authors: ["Jeffery Dawson (Mind Control)"],
    actionable_rule: "Whenever a manifestation coach makes you feel deeply understood before asking for a $2,000 credit card swipe, step back and ask: 'What concrete skill am I actually buying?'"
  },
  {
    term: "The Unmanifested / Psychological Time",
    category: "Existential Philosophy",
    jargon_claim: "“The formless realm of Being from which all physical matter arises.” (The Power of Now)",
    plain_english: "The quiet, spacious awareness behind your racing thoughts, accessible only when you stop reliving yesterday's guilt or dreading tomorrow's meetings and ground your senses in the present room.",
    analogy: "The vast blue sky behind heavy storm clouds. The stormy clouds (worries, bills, arguments) rage and drift, but the sky itself is never scratched, burned, or destroyed.",
    origin_authors: ["Eckhart Tolle"],
    actionable_rule: "Take 60 seconds right now: feel the weight of your feet on the floor and the air moving into your nostrils. Your worries exist only in thought; the room is peaceful."
  },
  {
    term: "Aligned Action vs. 'Secret Couch Fallacy'",
    category: "Behavioral Execution",
    jargon_claim: "“Vibrational alignment is 99% of creation; physical effort is secondary.” (The Secret / Hicks)",
    plain_english: "Visualization and mindset conditioning exist to calm your nervous system so you can take terrifying, high-leverage physical actions in the real world—not to sit on the couch waiting for money to fall from the sky.",
    analogy: "An Olympic archer visualizing the arrow piercing the center of the bullseye 100 times before drawing the bow. The mental rehearsal ensures steady nerves, but she still has to pull the string and release the arrow.",
    origin_authors: ["Dr. Joe Dispenza", "Roxie Nafousi", "Dr. Joseph Murphy"],
    actionable_rule: "Never conclude a morning visualization session without identifying the single most uncomfortable real-world action you will execute today."
  }
];

// 1. Save canonical rosetta-stone.json
fs.writeFileSync(
  path.join(targetDir, 'rosetta-stone.json'),
  JSON.stringify(rosettaStoneTerms, null, 2),
  'utf8'
);
console.log(`Saved rosetta-stone.json (${rosettaStoneTerms.length} terms)`);

// 2. Generate updated master-notes.md with Rosetta Stone
const masterNotesContent = `# The Master Codex of Manifestation: A Unified Cross-Source Synthesis
**Corpus Scope:** 14 Canonical Works Synthesized (Dr. Joseph Murphy, Neville Goddard [2 Works], Florence Scovel Shinn, Dr. Joe Dispenza [2 Works], Eckhart Tolle, Shakti Gawain, Rhonda Byrne, Esther & Jerry Hicks, Roxie Nafousi, Arden G., Z Z Rae, Jeffery Dawson)  
**System Standard:** BKRS v1.0 Total Replacement Codex  
**Corpus Architecture:** 14 Movements | 25 Invariant Knowledge Units | Comprehensive Epistemic Audit  
**Objective:** Transform disparate manifestation literature into a scientifically grounded, source-faithful, and genuinely followable master codex.  

---

## Executive Summary: The Complete Epistemic Architecture

For over a century, manifestation literature has oscillated between profound psychological insight and absurd, predatory pseudoscience. When stripped of New Age mysticism and commercialization, manifestation is not a magical method for altering the gravitational or quantum properties of the universe through wishful thinking. Rather, it is **the systematic alignment of subconscious identity, cognitive salience (the Reticular Activating System), neurobiological heart-brain coherence, emotional regulation, and high-probability behavioral action.**

This Unified Master Codex synthesizes the core contributions of all 14 canonical works:
1. **Dr. Joseph Murphy (*The Power of Your Subconscious Mind*):** The mechanics of the subjective subconscious mind, autosuggestion, the Law of Reversed Effort, and hypnagogic sleep-state imprinting (Baudouin technique).
2. **Neville Goddard (*Feeling Is the Secret* & *The Power of Awareness*):** The Law of Assumption, "I AM" consciousness, first-person sensory imagery, the SATS hypnagogic loop, and the collapse of external cause.
3. **Florence Scovel Shinn (*The Game of Life and How to Play It*):** The Law of the Spoken Word, casting the burden, non-resistance, karmic boomerangs, and the Divine Design.
4. **Dr. Joe Dispenza (*Breaking the Habit of Being Yourself* & *Becoming Supernatural*):** The neurobiology of transformation: breaking emotional addictions to past trauma, crossing the river of change, heart-brain coherence, epigenetics, and collapsing the quantum wave function.
5. **Eckhart Tolle (*The Power of Now*):** The philosophy of presence: disidentifying from the egoic mind, transcending psychological time, surrender, and creating from the timeless Unmanifested Now.
6. **Shakti Gawain (*Creative Visualization*):** The classic holistic visualization toolkit: the Four Basic Steps, the Pink Bubble technique, mental sanctuary, and clearing energy blocks.
7. **Rhonda Byrne (*The Secret*):** The global popularization of the Law of Attraction, the three-step creative formula (*Ask, Believe, Receive*), gratitude mechanics, and the psychology of emotional frequency.
8. **Esther & Jerry Hicks (*Ask and It Is Given*):** The 22-rung Emotional Guidance Scale, the mechanics of non-resistance, the "Art of Allowing", and navigating cognitive contrast.
9. **Roxie Nafousi (*Manifest: 7 Steps to Living Your Best Life*):** The modern cognitive-behavioral translation: grounding manifestation in self-worth, comfort-zone expansion, passing "universe tests", and turning envy into inspiration.
10. **Arden G. (*Detachment & Manifestation: Stop Chasing, Start Attracting*):** The paradox of surrender, attachment theory, eliminating needy desperation, and nervous system regulation.
11. **Z Z Rae (*How to Manifest a Soulmate*):** Relational self-concept, clearing past relationship trauma, and interpersonal boundary mechanics.
12. **Jeffery Dawson (*Mind Control: Manipulation, Deception and Persuasion*):** The psychological mirror: linguistic framing, covert suggestion, detecting manipulative gurus, and intellectual self-defense.

---

## The Beginner's Rosetta Stone: 16 Essential Terms Decoded in Plain English

If you are reading this literature for the first time, you will encounter a wall of esoteric New Age jargon and dense neurological terms. Use this table as your master translation guide:

| Term & Category | What the Books Say (Jargon) | What It Actually Means (Plain English) | The Everyday Analogy | Origin Authors |
| :--- | :--- | :--- | :--- | :--- |
${rosettaStoneTerms.map(t => `| **${t.term}**<br>*\`${t.category}\`* | ${t.jargon_claim} | **${t.plain_english}** | ${t.analogy} | ${t.origin_authors.join(', ')} |`).join('\n')}

---

## 25 Unified Invariant Knowledge Units

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
- **The Dispenza/Nafousi/Murphy/Dawson Counter-Position:** Dr. Joe Dispenza, Dr. Joseph Murphy, Roxie Nafousi, and Jeffery Dawson insist that action is the physical currency of reality. Nafousi calls passive visualization without uncomfortable action the "Secret Couch Fallacy."
- **Unified Synthesis:** Alignment without action is delusional fantasy; action without alignment is burnout and friction. True manifestation is **aligned, proactive behavioral execution**: visualization prepares the nervous system to execute difficult, high-leverage actions without paralysis.

### Dispute 2: Future Desires vs. The Present Moment
- **The Neville/Byrne Position:** Neville Goddard demands "living in the end"—mentally dwelling in a future accomplished reality to collapse time.
- **The Eckhart Tolle Warning:** In *The Power of Now*, Tolle warns that chronic future-projection is an egoic delusion that breeds anxiety and denies the only reality that actually exists: the Now.
- **Unified Synthesis:** Anchor your **being in the present moment** without resistance, while using **assumption to calibrate intentional direction**. You do not escape the present; you bring the fullness of the vision into the present Now.

### Dispute 3: Quantum Physics vs. Cognitive Attention
- **The Byrne Error:** *The Secret* asserts that the human brain operates like a radio transmission tower broadcasting electromagnetic frequencies that gravitationally attract physical circumstances.
- **The Neurobiological Truth:** The human brain emits micro-voltage EEG waves that dissipate within millimeters of the skull. The real mechanism is the **Reticular Activating System (RAS)** and **heart-brain coherence** (Dispenza): when a goal is emotionally prioritized, the RAS filters out environmental noise, enabling the brain to spot opportunities, patterns, and resources that were already physically present but previously ignored.

### Dispute 4: Specificity vs. General Surrender
- **The Hyper-Specific Camp (Murphy, Byrne, Rae, Shinn):** Demand exact numbers, detailed partner specifications, and precise visual details.
- **The General Alignment Camp (Hicks, Arden G., Tolle):** Argue that hyper-specificity triggers anxiety and resistance ("How will this happen? What if it doesn't?"). Recommends surrendering details and focusing purely on the underlying emotional state of freedom and relief.
- **Unified Synthesis:** Use specificity to define the **target direction**, but use general surrender to release **attachment to the timeline and mechanism**.

### Dispute 5: The Victim-Blaming Fallacy
- **The Pop-Manifestation Hazard:** Extreme proponents of the Law of Attraction claim that individuals in poverty, victims of war, or people diagnosed with terminal illnesses "attracted" their suffering through low-vibrational thoughts.
- **The Unified Codex Verdict:** This is a monstrous philosophical error rooted in survivor bias and the Just-World Fallacy. Biological illness, geopolitical conflict, and socioeconomic structural oppression operate on external physical and historical laws. Manifestation applies strictly to an individual's **subjective mindset, behavioral choices, and perceptual agency**, never as a moral explanation for collective external catastrophes.

---

## The Master 24-Hour Operational Protocol (The Actionable Practice Engine)

### Phase 1: Morning Priming Protocol (First 25 Minutes)
1. **Digital Fast:** No smartphone, email, or social media for the first 25 minutes. Protect theta/alpha brainwaves from external reactive hijacking.
2. **Somatic Breath Reset (3 Mins):** Three minutes of physiological sighs (double inhale through nose, long unforced exhale through mouth) to lower sympathetic heart rate.
3. **Heart-Brain Coherence Meditation (5 Mins - Dispenza):** Focus attention on the center of the chest. Breathe deeply into the heart and generate an elevated somatic emotion: gratitude, awe, or profound appreciation.
4. **Sensory Gratitude Drill (3 Mins - Gawain/Hicks):** Viscerally feel bodily appreciation for 3 specific, mundane realities (warm water, shelter, heartbeat). Avoid caveats.
5. **RAS Vision Calibration (10 Mins - Nafousi):** Review primary quarterly objective. Clarify the single most uncomfortable high-leverage action required today.

### Phase 2: Daytime Execution & Aligned Action (Working Hours)
1. **The Comfort-Zone Step:** Execute the single most intimidating, high-leverage task early in the day (the pitch, the cold email, the boundary conversation).
2. **The Arden G. Detachment Anchor:** When timeline anxiety or fear of rejection surfaces, repeat: *“What is meant for me will not pass me. I control my input; I release my attachment to the immediate outcome.”*
3. **The Tolle Presence Reset:** When feeling overwhelmed, pause for 60 seconds, feel the inner energy of your hands and feet, and witness the thinking mind without judgment.
4. **The Florence Scovel Shinn Spoken Word Guard:** Never speak self-deprecating words about poverty or illness. Declare: *“My supply is limitless and comes under grace in harmonious ways.”*
5. **The Envy Transmutation Trigger:** The moment you feel envy or comparison on social media, immediately bless that person: *“I celebrate your success, and I recognize it as empirical proof that this level of abundance is achievable in human reality.”*

### Phase 3: Evening SATS Routine (Last 15 Minutes Pre-Sleep - Neville Goddard / Murphy)
1. **Subconscious De-Escalation:** Cease television, stimulating media, and work discussions 30 minutes before sleep.
2. **Enter the Drowsy State (Baudouin Technique):** Lie comfortably in bed, relax all muscles from scalp to toes, and allow the body to enter the heavy, sleepy, hypnagogic state.
3. **The Short-Loop Imaginal Scene (Neville Goddard):** Run a single 5-to-10 second first-person scene that naturally implies your desire is already an accomplished fact (shaking a mentor's hand, looking at an official approval email, resting your head on a loving partner's chest).
4. **Somatic Feeling Consolidation:** Do not strive; gently loop the scene until the feeling of naturalness and relief settles into the chest. Drift into sleep holding that emotional atmosphere.

### Phase 4: The Empirical Falsification Journal (Weekly Tracking)
Maintain a strict weekly log with four columns:
- **Date & Target Goal**
- **Mental Baseline (Average rung on Emotional Scale 1–22 & Heart Coherence)**
- **Concrete Aligned Actions Taken (Objective behavioral count)**
- **Real-World Synchronicities, Opportunities, & Concrete Outcomes**

*Treat your own mind as an objective scientific laboratory: track your inputs, ruthlessly evaluate your outputs, and discard whatever does not yield verifiable peace, agency, and growth.*
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesContent, 'utf8');
console.log("Saved master-notes.md with Rosetta Stone table");

// 3. Generate index.html with 4 Views (Rosetta Stone, Units, Dispute Matrix, Protocol)
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Master Codex of Manifestation — 14-Book Unified Synthesis | BKRS Reader</title>
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
      max-width: 960px;
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
      max-width: 1160px;
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
          <span class="brand-sub">Master Replacement Codex &bull; 14 Works Synthesized</span>
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
    <p class="hero-subtitle">Subconscious Mechanics, Neurobiology, Epigenetics & Egoless Action Across 14 Canonical Works</p>
    
    <div class="hero-badges">
      <span class="cert-pill highlight">★ 14 Works Synthesized</span>
      <span class="cert-pill">25 Invariant Units</span>
      <span class="cert-pill">16 Decoded Key Terms</span>
      <span class="cert-pill">14 Movements</span>
      <span class="cert-pill">Epistemic Pseudoscience Audit</span>
    </div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">System Invariant Foundation</div>
      <div class="hero-axiom-quote">
        “Manifestation is not magical physics or light-bending wishcraft. It is the systematic convergence of subconscious identity, cognitive salience filtering (the Reticular Activating System), neurobiological heart-brain coherence, and courageous, high-integrity behavioral execution.”
      </div>
    </div>
  </header>

  <nav class="view-navigation">
    <button class="tab-btn active" id="tab-stone" onclick="switchView('stone')">
      <span>01.</span> Beginner's Rosetta Stone (Plain-English Decoder)
    </button>
    <button class="tab-btn" id="tab-a" onclick="switchView('a')">
      <span>02.</span> Unified Synthesis Journey (25 Units)
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
        <h2 class="rosetta-intro-title">The Beginner's Plain-English Decoder</h2>
        <p class="rosetta-intro-p">
          If this is your first time reading manifestation or neuroscience literature, don't be intimidated by the jargon. Every complex phrase in the 14 books maps to an intuitive psychological mechanism or an everyday physical habit. Use this interactive decoder to search or filter any term.
        </p>
      </div>

      <div class="search-box-wrapper">
        <input type="text" id="rosetta-search" class="search-input" placeholder="Search any term (e.g. SATS, RAS, Coherence, Hebbian, Allowing, Pain-Body)..." oninput="filterRosetta()">
      </div>

      <div class="rosetta-filter-chips">
        <button class="rosetta-chip active" onclick="filterRosettaCategory('all')">All Terms (16)</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('neuro')">Neuroscience & Mind</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('mystic')">Mystical Decoded</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('action')">Behavioral Action</button>
        <button class="rosetta-chip" onclick="filterRosettaCategory('defense')">Critical Defense</button>
      </div>

      <div id="rosetta-wrapper">
        ${rosettaStoneTerms.map(t => {
          let catClass = 'neuro';
          if (t.category.includes('Mystic') || t.category.includes('Hypnagogia') || t.category.includes('Intuitive')) catClass = 'mystic';
          if (t.category.includes('Behavioral') || t.category.includes('Identity') || t.category.includes('Emotional')) catClass = 'action';
          if (t.category.includes('Defense') || t.category.includes('Persuasion') || t.category.includes('Critical')) catClass = 'defense';
          
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

    <!-- VIEW A: 25 INVARIANT UNITS -->
    <section id="view-a">
      <div class="search-box-wrapper">
        <input type="text" id="unit-search" class="search-input" placeholder="Search concepts or authors (e.g. Dispenza, Neville, SATS, Tolle, Shinn, Heart Coherence)..." oninput="filterUnits()">
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
            <strong>The Dispenza, Murphy & Nafousi Stance</strong>
            Action is the physical currency of reality. Visualizing without uncomfortable action is merely the "Secret Couch Fallacy"; action creates the physical conduit for opportunities.
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
        <h3 class="matrix-title">Dispute 3: Quantum Physics vs. Cognitive Neuroscience</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Pop-Manifestation Fallacy (The Secret)</strong>
            The human brain operates like a radio broadcast tower emitting electromagnetic waves that bend physical light and gravitationally pull objects to you.
          </div>
          <div class="matrix-side">
            <strong>The Empirical Neurobiological Reality</strong>
            Brainwaves dissipate millimeters outside the cranium. The true mechanism is the <em>Reticular Activating System (RAS)</em> and <em>heart-brain coherence</em>.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> When an intention is prioritized emotionally, the RAS strips away background sensory noise, allowing you to recognize opportunities and resources that were already physically present but previously filtered out.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 4: The Victim-Blaming Fallacy</h3>
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
          <li><strong>Physiological Sigh (3 mins):</strong> Double inhale through the nose, long unforced exhale through the mouth to discharge cortisol.</li>
          <li><strong>Heart-Brain Coherence (5 mins - Dispenza):</strong> Focus attention in the center of the chest; breathe slowly and cultivate gratitude.</li>
          <li><strong>Sensory Gratitude (3 mins - Gawain/Hicks):</strong> Viscerally appreciate 3 mundane physical realities.</li>
          <li><strong>RAS Vision Calibration (10 mins - Nafousi):</strong> Review the primary quarterly milestone and select the day's most intimidating high-leverage task.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">09:00 – 17:00 | Working Hours</div>
        <h3 class="protocol-heading">Phase 2: Aligned Action & Mind Defense</h3>
        <ol class="protocol-items">
          <li><strong>The Comfort-Zone Step:</strong> Execute your most intimidating task early before decision fatigue sets in.</li>
          <li><strong>The Detachment Anchor (Arden G.):</strong> Repeat: <em>“I control my inputs; I release attachment to the timeline.”</em></li>
          <li><strong>The Tolle Presence Reset:</strong> When overwhelmed, take 60 seconds to feel the energy in your hands and feet.</li>
          <li><strong>The Spoken Word Guard (Shinn):</strong> Eliminate self-deprecating humor regarding lack or poverty.</li>
          <li><strong>Envy Transmutation Trigger:</strong> Bless anyone whose success triggers comparison as proof of what is possible.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">22:00 – 22:30 | Evening Slumber</div>
        <h3 class="protocol-heading">Phase 3: The SATS Hypnagogic Routine</h3>
        <ol class="protocol-items">
          <li><strong>Subconscious De-escalation:</strong> Eliminate television and work emails 30 minutes before sleep.</li>
          <li><strong>Baudouin Drowsy State:</strong> Lie comfortably in bed, relax all muscles from scalp to toes, and enter the heavy hypnagogic state.</li>
          <li><strong>The 10-Second Looping Scene (Neville Goddard):</strong> Loop a single first-person sensory scene implying the goal is an accomplished fact.</li>
          <li><strong>Consolidation into Sleep:</strong> Hold the feeling of naturalness and relief as sleep overtakes you.</li>
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
console.log("Written index.html with interactive Beginner Rosetta Stone!");

console.log("All Manifestation Codex artifacts updated with Rosetta Stone successfully!");
