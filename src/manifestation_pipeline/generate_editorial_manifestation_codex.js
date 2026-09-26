/**
 * Definitive BKRS Master Codex Generator for Manifestation & Mental Science
 * Synthesizes 19 Canonical Works across 120 Years (1903–2024).
 * Operationalizes BKRS Standard:
 * - Default Editorial Cream Theme (--bg-canvas: #fbf9f4, warm paper, serif typography)
 * - 9 Chronological & Intellectual Movements across 20 Deep Narrative Chapters
 * - Multi-paragraph continuous prose, primary source blockquotes, and causal bridges
 * - View A (Journey), View B (Neurobiological Compass), View C (Rosetta Stone & Disputes)
 * - Seamless integration with BKRS reader-shell.css, theme.css, and reader-controls.js
 */

const fs = require('fs');
const path = require('path');
const { movements } = require('./manifestation_narrative_chapters.js');

const targetDir = path.join(__dirname, '../../docs/distillations/manifestation-unified-codex');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 24 Decoded Rosetta Stone Terms
const rosettaTerms = [
  {
    term: "Reticular Activating System (RAS)",
    category: "Neuroscience & Attentional Filtering",
    jargon_claim: "“The universe aligns synchronicities when you vibrate at the right frequency.” (The Secret)",
    plain_english: "A bundle of nerves in your brainstem that acts as a sensory spam filter, screening out 99.9% of background noise and letting through only what you have emotionally tagged as critically important.",
    analogy: "The search bar on Amazon. When you search for 'red running shoes', Amazon doesn't manufacture shoes on the spot—it simply filters out the blue shirts and jackets so the red shoes you previously ignored immediately catch your eye.",
    origin_authors: "Dr. James R. Doty, MD • Dr. Joe Dispenza"
  },
  {
    term: "State Akin to Sleep (SATS)",
    category: "Cognitive State & Hypnagogia",
    jargon_claim: "“Entering the fourth dimension where imagination becomes physical fact.” (Neville Goddard)",
    plain_english: "The drowsy, deeply relaxed mental state (alpha and theta brainwaves) experienced in the 5 to 10 minutes right before you fall asleep at night or immediately upon waking.",
    analogy: "Your conscious mind is a strict security guard at the gate of your brain. During SATS, the guard gets sleepy and nods off, allowing you to walk right into your subconscious memory bank and install new software without an argument.",
    origin_authors: "Neville Goddard • Charles Baudouin • Dr. Joseph Murphy"
  },
  {
    term: "The Law of Reversed Effort",
    category: "Autonomic Stress Physiology",
    jargon_claim: "“Force negates itself; trying too hard repels your manifestation.” (Arden G.)",
    plain_english: "When your conscious will ('I must force this to happen!') clashes with your subconscious imagination ('I am terrified I will fail'), your imagination always wins, triggering performance anxiety.",
    analogy: "A Chinese finger trap. The harder and more frantically you yank your fingers outward, the tighter the woven mesh traps you. To get free, you must relax, push inward, and soften the tension.",
    origin_authors: "Émile Coué • Charles Baudouin • Dr. Joseph Murphy"
  },
  {
    term: "Heart-Brain Coherence & HRV",
    category: "Psychoneuroimmunology & Somatics",
    jargon_claim: "“Broadcasting an elevated electromagnetic signal into the quantum field.” (Becoming Supernatural)",
    plain_english: "Synchronizing your breathing and heart rhythm (Heart Rate Variability) with calm brainwaves, signaling to your body that you are safe rather than in emergency fight-or-flight survival.",
    analogy: "An orchestra tuning their instruments before a performance. When musicians play out of rhythm, it's painful racket (stress & cortisol). When they lock into the same smooth tempo, it becomes powerful, harmonious music.",
    origin_authors: "Dr. Joe Dispenza • HeartMath Institute"
  },
  {
    term: "Pendulums (Energy Egregors)",
    category: "Systems Dynamics & Social Contagion",
    jargon_claim: "“Energy vampires feeding on human emotional vibration.” (Reality Transurfing)",
    plain_english: "Large social institutions, internet outrage mobs, corporate cultures, or political parties that hijack your attention and suck your emotional energy, regardless of whether you love them or hate them.",
    analogy: "A screaming toddler throwing a tantrum in a grocery store. If you scream back or argue, he screams louder; if you look away with complete indifference, he stops because he has no audience.",
    origin_authors: "Vadim Zeland"
  },
  {
    term: "Excess Potential & Balancing Forces",
    category: "Homeostatic Psychology",
    jargon_claim: "“Distorting the energy balance of the universe.” (Reality Transurfing)",
    plain_english: "When you obsess over something so desperately that you make it life-or-death, your anxiety triggers performance choking and ruins the opportunity.",
    analogy: "Carrying a glass of water filled to the absolute brim across a crowded room. If you obsess over not spilling a drop, your hands shake violently and you spill it. If you relax, you walk smoothly.",
    origin_authors: "Vadim Zeland"
  },
  {
    term: "Outer Intention vs. Inner Intention",
    category: "Phenomenology & Agency Selection",
    jargon_claim: "“Choosing your sector in the space of variations.” (Reality Transurfing)",
    plain_english: "Inner intention is grinding yourself to exhaustion trying to force reality to change with muscle. Outer intention is choosing the right direction calmly and letting opportunities open naturally.",
    analogy: "Inner intention is swimming furiously against a raging river until your muscles cramp. Outer intention is turning your boat and riding the swift, smooth current downstream.",
    origin_authors: "Vadim Zeland"
  },
  {
    term: "The Law of Assumption & 'Living in the End'",
    category: "Identity & Subconscious Thermostat",
    jargon_claim: "“Assume the feeling of the wish fulfilled until it hardens into fact.” (Feeling Is the Secret)",
    plain_english: "Adopting the internal identity, confidence, and calmness of the person who already possesses the result, preventing you from acting like a needy beggar in real-world negotiations.",
    analogy: "Ordering a package on Amazon. You don't spend three days pacing by the front door chewing your fingernails wondering if Amazon exists; you receive the confirmation, assume the box is arriving, and calmly go about your life.",
    origin_authors: "Neville Goddard"
  },
  {
    term: "The Pruning Shears of Revision",
    category: "Cognitive Memory Reconsolidation",
    jargon_claim: "“Changing the past in the spiritual 4th dimension.” (The Law and the Promise)",
    plain_english: "Mentally rewriting a stressful argument or rejection before you go to sleep, replacing it with the outcome you wished had happened so your brain doesn't store the trauma.",
    analogy: "Editing a rough draft in a Word document before hitting Save. If a bad paragraph happened at 2 PM, you delete it and type the clean sentence before closing your laptop for the night.",
    origin_authors: "Neville Goddard"
  },
  {
    term: "Hebbian Neuroplasticity ('Fire & Wire')",
    category: "Neurobiology & Habit Formation",
    jargon_claim: "“Quantum rewiring of your cellular vibration.” (Dispenza)",
    plain_english: "Neurons that fire together wire together. Whenever you repeat a thought, emotion, or action, your brain builds and insulates a physical highway so doing it again requires zero conscious effort.",
    analogy: "Walking across a wild, overgrown grassy field every morning. On day one, the tall grass trips you up. By day 30, your repeated footsteps have carved a smooth dirt trail that you can walk with your eyes closed.",
    origin_authors: "Donald Hebb • Dr. Joe Dispenza"
  },
  {
    term: "The Default Mode Network (DMN)",
    category: "Cognitive Neuroscience & Rumination",
    jargon_claim: "“Quieting the ego to enter the universal quantum matrix.” (Mind Magic)",
    plain_english: "The interconnected brain regions that generate wandering thoughts, self-doubt, past regrets, and future catastrophizing. Quieting the DMN allows high-focus creative action.",
    analogy: "Having ten television sets blaring noisy, conflicting talk shows in the background. Quieting the DMN mutes those televisions so you can hear the important doorbell ring.",
    origin_authors: "Dr. James R. Doty, MD"
  },
  {
    term: "Prosocial Compassion vs. Selfish Scarcity",
    category: "Evolutionary Biology & Vagal Regulation",
    jargon_claim: "“Aligning your soul frequency with cosmic love.” (Bernstein)",
    plain_english: "When you want something just to flex or show off, your brain triggers threat and cortisol. When your goal genuinely helps others, your brain floods with oxytocin and dopamine, widening your intelligence.",
    analogy: "A pack of wolves. An isolated wolf hoarding food stays anxious and hyper-vigilant (cortisol). A wolf sharing with the pack rests calmly because the entire pack has its back.",
    origin_authors: "Dr. James R. Doty, MD"
  },
  {
    term: "The 22-Rung Emotional Guidance Scale",
    category: "Emotional Reframing & Dialectics",
    jargon_claim: "“Vibrational frequencies ranging from Joy at Rung 1 down to Grief at Rung 22.” (Ask and It Is Given)",
    plain_english: "A psychological map showing that you cannot jump instantly from deep depression to joy. Stepping into anger or frustration is actually healthy progress because it has more agency than helpless despair.",
    analogy: "Shifting gears in a manual transmission car. You cannot shift straight from reverse gear into fifth gear on the highway without destroying the transmission; you must shift through neutral, first, second, and third.",
    origin_authors: "Esther & Jerry Hicks"
  },
  {
    term: "The Pain-Body",
    category: "Somatic Trauma & Ego Dynamics",
    jargon_claim: "“A semi-autonomous energetic life-form feeding on emotional misery.” (The Power of Now)",
    plain_english: "The accumulated backlog of old emotional trauma and unresolved childhood grievances that temporarily takes over your thoughts, provoking fights or drama just to re-experience familiarity.",
    analogy: "An argumentative roommate inside your head who feeds on drama. The key is not to fight or argue with him, but to simply watch him quietly until he runs out of breath and sits down.",
    origin_authors: "Eckhart Tolle"
  },
  {
    term: "The Unmanifested / Radical Presence",
    category: "Contemplative Phenomenology",
    jargon_claim: "“The formless realm of Being from which all physical matter arises.” (The Power of Now)",
    plain_english: "The quiet, spacious awareness behind your racing thoughts, accessible only when you stop reliving yesterday's guilt or dreading tomorrow's meetings and ground your senses in the present room.",
    analogy: "The vast blue sky behind heavy storm clouds. The stormy clouds (worries, bills, arguments) rage and drift, but the sky itself is never scratched, burned, or destroyed.",
    origin_authors: "Eckhart Tolle"
  },
  {
    term: "The Creative Plane vs. The Competitive Plane",
    category: "Economic Philosophy & Ethics",
    jargon_claim: "“Harmonizing with the formless thinking substance.” (The Science of Getting Rich)",
    plain_english: "Creating new value that expands the pie for everyone versus scheming to steal, manipulate, or extract wealth from others in a zero-sum battle.",
    analogy: "Baking a brand-new, giant fresh pizza for the entire neighborhood versus elbowing someone in the face to grab the last remaining cold crust from their plate.",
    origin_authors: "Wallace D. Wattles"
  },
  {
    term: "The 'Universe Test'",
    category: "Behavioral Resilience & Exposure",
    jargon_claim: "“The cosmos testing your energetic vibration before granting your manifestation.” (Manifest)",
    plain_english: "A predictable psychological obstacle or temptation (like a toxic ex texting or an underpaying client) that tests whether you have genuinely changed your standards or will slide back into old patterns.",
    analogy: "A pop quiz on day 10 of a healthy diet when a colleague brings a box of warm chocolate donuts to the office. It's not a mystical trap; it's a test of whether your new identity has a spine.",
    origin_authors: "Roxie Nafousi"
  },
  {
    term: "The Just-World Fallacy (Victim-Blaming Error)",
    category: "Critical Epistemology & Ethics",
    jargon_claim: "“There are no accidents; people attract their own poverty, disease, and abuse.” (The Secret)",
    plain_english: "A cruel cognitive bias where people falsely believe the universe always rewards good people and punishes bad people, leading them to blame victims of war, cancer, or natural disasters for their 'bad thoughts.'",
    analogy: "Claiming someone whose house was leveled by a category 5 hurricane lost their home because they 'didn't smile enough,' rather than recognizing the meteorological reality of 160-mph winds. It is pseudoscientific delusion.",
    origin_authors: "Forensic Epistemic Audit (BKRS)"
  },
  {
    term: "The Secret Couch Fallacy (Aligned Action)",
    category: "Behavioral Execution",
    jargon_claim: "“Vibrational alignment is 99% of creation; physical effort is secondary.” (The Secret / Hicks)",
    plain_english: "Visualization and mindset conditioning exist to calm your nervous system so you can take terrifying, high-leverage physical actions in the real world—not to sit on the couch waiting for money to fall from the sky.",
    analogy: "An Olympic archer visualizing the arrow piercing the center of the bullseye 100 times before drawing the bow. The mental rehearsal ensures steady nerves, but she still has to pull the string and release the arrow.",
    origin_authors: "Dr. Joe Dispenza • Roxie Nafousi • Wallace Wattles"
  },
  {
    term: "The Fraile Principle",
    category: "Relational Cybernetics",
    jargon_claim: "“Attuning to the individual soul frequency of others.” (Reality Transurfing)",
    plain_english: "Never attempt to force, manipulate, or bend someone else's personality to match yours. Allow yourself to be yourself, and allow others to be others.",
    analogy: "Letting a cat come curl up on your lap when it's ready, rather than chasing it around the living room and grabbing it by the tail.",
    origin_authors: "Vadim Zeland"
  },
  {
    term: "Pacing and Leading",
    category: "Persuasion & Guru Defense",
    jargon_claim: "“Charismatic vibrational resonance.” (Commercial Gurus)",
    plain_english: "A psychological persuasion tactic where an influencer matches your body language, tone, and private complaints (pacing) to win your trust, then steers your wallet toward their expensive masterclass (leading).",
    analogy: "A street tour guide matching your slow walking pace for three minutes so you feel at ease, then casually turning a corner and leading you straight into his cousin's overpriced rug shop.",
    origin_authors: "Jeffery Dawson (Mind Control)"
  },
  {
    term: "Concept of Self / 'I AM' Consciousness",
    category: "Subconscious Self-Worth",
    jargon_claim: "“You never attract what you want; you attract what you ARE.” (The Power of Awareness)",
    plain_english: "Your subconscious internal thermostat—the baseline level of wealth, love, and respect you privately believe you deserve and feel comfortable tolerating.",
    analogy: "An air conditioner set to 68 degrees. If a sudden blast of heat enters the room (e.g., an unexpected financial windfall), the AC blasts cold air until the room is back at 68 (spending it all) unless you manually reprogram the dial.",
    origin_authors: "Neville Goddard • Dr. Joseph Murphy"
  },
  {
    term: "The 51% Tipping Point Rule",
    category: "Behavioral Momentum",
    jargon_claim: "“Tipping the cosmic scales into the frequency of love.” (The Power of Feelings)",
    plain_english: "You do not need to be a cheerful saint 100% of the day. Choosing appreciation over complaints just 51% of the time creates an irreversible upward momentum loop.",
    analogy: "A sports team winning 51 out of 100 games. You don't need a clean sweep blowout; winning by a single point tipping past 50% guarantees a championship season over time.",
    origin_authors: "Rhonda Byrne"
  },
  {
    term: "Definiteness of Purpose & Master Mind",
    category: "Strategic Organization",
    jargon_claim: "“Tapping into the Infinite Intelligence of the ether.” (Think and Grow Rich)",
    plain_english: "Formulating a laser-precise objective with deadlines and trade-offs, and coordinating with trusted, brilliant peers in harmony to solve complex problems together.",
    analogy: "Connecting multiple batteries in series to generate high voltage rather than expecting a single AA flashlight battery to power an entire factory.",
    origin_authors: "Napoleon Hill"
  }
];

// 9 Grand Disputes Matrix
const disputeMatrix = [
  {
    subject: "1. The Mechanism: Quantum Physics vs. Cognitive Salience",
    romantic_view: "Thoughts emit electromagnetic frequencies that bend the quantum field and collapse subatomic wave functions to attract physical matter. (The Secret, Dispenza)",
    scientific_finding: "The quantum observer effect applies exclusively to subatomic particles in isolated laboratory vacuums, not macroscopic objects. Manifestation functions through the Reticular Activating System (RAS) filtering perceptual noise and neuroplastic habit formation. (Doty, Hebb)",
    sources: "Dr. James R. Doty, MD (Mind Magic) • Modern Neurobiology • Standard Model of Physics",
    verdict: "Cognitive Salience & Neurological Conditioning. The brain reprogrammed its sensory filters; it did not alter subatomic physics."
  },
  {
    subject: "2. The Action Paradox: The 'Secret Couch' vs. High-Leverage Execution",
    romantic_view: "Vibrational alignment is 99% of reality creation. Taking physical action is secondary, exhausting, and demonstrates lack of faith. (Hicks, Byrne)",
    scientific_finding: "Mental rehearsal calms the autonomic nervous system and primes motor circuitry, but physical outcomes require concrete behavioral intervention in physical reality. (Wattles, Nafousi, Dispenza)",
    sources: "Wallace D. Wattles (The Science of Getting Rich) • Roxie Nafousi (Manifest) • Locke & Latham",
    verdict: "Mental rehearsal enables courageous, high-leverage execution; visualization without action is passive hallucination."
  },
  {
    subject: "3. The Moral Crisis: The Just-World Fallacy & Victim-Blaming",
    romantic_view: "There are no accidents. Anyone suffering from poverty, chronic illness, abuse, or war 'attracted' it through bad vibrations or unresolved karma. (Pop Law of Attraction)",
    scientific_finding: "Physical determinism (pathogens, natural disasters) and socio-economic macro structures operate independently of individual thought. Blaming victims is cruel cognitive bias. (Forensic Epistemic Audit)",
    sources: "Bioethics • Structural Sociology • Epictetus (Stoic Dichotomy of Control)",
    verdict: "Total refutation of victim-blaming. Internal agency governs reactions, character, and pro-social excellence, not macroscopic tectonic plates or viral pathogens."
  },
  {
    subject: "4. Desiring vs. Being: Can You Manifest While Transcending the Ego?",
    romantic_view: "Manifestation is an infinite cosmic shopping cart for acquiring luxury vehicles, mansions, and dominance over competitors. (1980s–2000s Pop New Thought)",
    scientific_finding: "Manifesting from psychological lack merely inflates the egoic pain-body and locks the brain in chronic sympathetic stress. True creation emerges from presence and Being. (Tolle)",
    sources: "Eckhart Tolle (The Power of Now) • Contemplative Neuroscience",
    verdict: "Manifesting from unconditioned Being produces peace and sustainable value; manifesting from egoic deficit produces chronic anxiety and burnout."
  },
  {
    subject: "5. Force vs. Flow: Straining Willpower vs. The Law of Reversed Effort",
    romantic_view: "You must grit your teeth, repeat affirmations 10,000 times a day with intense fury, and conquer resistance by sheer conscious force. (Macho Hustle Culture)",
    scientific_finding: "When conscious will and subconscious imagination clash, imagination wins. Straining increases cortisol, triggering performance choking and autonomic freeze. (Coué, Murphy, Zeland)",
    sources: "Émile Coué • Charles Baudouin • Dr. Joseph Murphy • Vadim Zeland",
    verdict: "Effortless emotional acceptance in the drowsy state (SATS/Baudouin) permanently outperforms aggressive conscious strain."
  },
  {
    subject: "6. Solipsism vs. Interdependence: 'Everyone Is Yourself Pushed Out'",
    romantic_view: "Other human beings have no autonomous free will; they are literal puppets reflecting your private assumptions and can be mentally puppet-mastered. (Extreme Neville interpretation)",
    scientific_finding: "Other humans are sovereign neuro-cognitive agents. Projecting secure, respectful self-concepts alters non-verbal cues and social dynamics, prompting cooperative responses via empathy and status perception. (Zeland, Dawson)",
    sources: "Vadim Zeland (Fraile Principle) • Relational Psychology • Jeffery Dawson",
    verdict: "Relational projection changes social dynamics and mirror-neuron responses, but does not override another human being's biological autonomy."
  },
  {
    subject: "7. Toxic Positivity: The Repression of Negative Emotions",
    romantic_view: "You must never feel sad, angry, or fearful for even a second, or the universe will instantly manifest your nightmare. (Pop LOA Paranoia)",
    scientific_finding: "Emotional repression dysregulates the autonomic nervous system and exacerbates somatic trauma. Emotions carry vital evolutionary data; anger restores boundaries, while grief allows release. (Hicks, Gross)",
    sources: "Esther & Jerry Hicks (Emotional Guidance Scale) • Somatic Experiencing • Dialectical Behavior Therapy",
    verdict: "Emotions are navigational coordinates, not cosmic crimes. Moving incrementally from despair to anger is positive neurological progress."
  },
  {
    subject: "8. Importance & Obsession: The Paradox of Detachment",
    romantic_view: "You must burn with manic obsession 24 hours a day, thinking of nothing else until you force the universe to yield. (Hill / Pop interpretations)",
    scientific_finding: "Attributing colossal life-or-death importance creates excess potential, triggering homeostatic balancing forces and performance choking. Desiring with calm nonchalance ensures peak execution. (Zeland)",
    sources: "Vadim Zeland (Reality Transurfing) • Yerkes-Dodson Law of Arousal",
    verdict: "Drop importance to zero. Want outcomes with the relaxed certainty of walking to the mailbox to get the morning paper."
  },
  {
    subject: "9. Motivation: Selfish Narcissism vs. Prosocial Compassion",
    romantic_view: "Manifesting is an individualistic power flex designed to prove your superiority over those who doubted you. (Commercial Guru Tropes)",
    scientific_finding: "Selfish, dominance-driven intentions activate the sympathetic threat network, causing cognitive rigidity and paranoia. Prosocial, compassionate intentions stimulate the vagus nerve, releasing oxytocin and maximizing prefrontal intelligence. (Doty)",
    sources: "Dr. James R. Doty, MD (Mind Magic) • Polyvagal Theory • Evolutionary Biology",
    verdict: "Prosocial compassion is neurobiologically superior to narcissistic extraction; the brain is hardwired for collective flourishing."
  }
];

// 7 Competing Schools of Manifestation for View B
const competingSchools = [
  {
    school: "1. Classical New Thought & Mental Science (1903–1912)",
    authors: "James Allen, Wallace D. Wattles, Charles F. Haanel",
    core_mechanism: "Thought as physical architecture; operating on the Creative Plane; the Solar Plexus as the autonomic dynamo.",
    failure_mode: "Tendency toward excessive physical strain and conscious concentration; unaddressed subconscious trauma.",
    neurological_counterpart: "Enteric nervous system (gut-brain axis) regulation; focused attention meditation; cognitive framing."
  },
  {
    school: "2. Autosuggestion & Subconscious Cybernetics (1920–1963)",
    authors: "Émile Coué, Charles Baudouin, Dr. Joseph Murphy, Napoleon Hill",
    core_mechanism: "The Law of Reversed Effort; bypassing conscious criticism via hypnagogia (State Akin to Sleep); Definiteness of Purpose.",
    failure_mode: "Religious and theological framing that alienated rationalists; occasional magical thinking regarding physical healing.",
    neurological_counterpart: "Theta-band neuroplasticity; downregulation of the dorsolateral prefrontal cortex during sleep onset."
  },
  {
    school: "3. Radical Subjective Idealism (1944–1961)",
    authors: "Neville Goddard",
    core_mechanism: "The Law of Assumption; 'Living in the End'; SATS sensory loops; the Pruning Shears of Revision (memory reconsolidation).",
    failure_mode: "Extreme solipsistic worldview ('everyone is yourself pushed out'); risk of dissociating from real-world external constraints.",
    neurological_counterpart: "Synaptic memory reconsolidation (Nader et al.); somatic marker realignment; executive identity priming."
  },
  {
    school: "4. Contemplative Presence & Ego Transcendence (1997–2005)",
    authors: "Eckhart Tolle",
    core_mechanism: "Dismantling psychological time; witnessing the Pain-Body; manifesting from the stillness of Being rather than egoic lack.",
    failure_mode: "Can be misunderstood as total ascetic passivity, causing practitioners to abandon constructive real-world ambitions.",
    neurological_counterpart: "Default Mode Network (DMN) quieting; activation of the insula and present-moment somatosensory cortex."
  },
  {
    school: "5. Reality Transurfing & Systems Cybernetics (2004–2006)",
    authors: "Vadim Zeland",
    core_mechanism: "Neutralizing energy pendulums with indifference; eliminating excess potential by dropping importance; choosing via Outer Intention.",
    failure_mode: "Highly abstract Russian cybernetic vocabulary; absence of clinical biomarkers to measure real-time bodily changes.",
    neurological_counterpart: "Yerkes-Dodson arousal optimization; mimetic contagion resistance; Bayesian probability state selection."
  },
  {
    school: "6. Neurobiology, Epigenetics & HeartMath (2012–2017)",
    authors: "Dr. Joe Dispenza",
    core_mechanism: "Breaking biochemical addictions to familiar stress hormones; crossing the river of change; Heart-Brain Coherence (HRV).",
    failure_mode: "Pseudoscientific literalization of quantum mechanics mathematics into macroscopic desire-manifestation.",
    neurological_counterpart: "Heart Rate Variability synchronization; Hebbian neuroplasticity ('fire and wire'); parasympathetic vagal stimulation."
  },
  {
    school: "7. Neurosurgical Demystification & Prosocial Biology (2016–2024)",
    authors: "Dr. James R. Doty, MD (Stanford University)",
    core_mechanism: "Reticular Activating System (RAS) sensory filtering; DMN taming; Salience Network recruitment; vagal brake activation via prosocial compassion.",
    failure_mode: "Requires rigorous, unglamorous daily meditation and behavioral accountability; provides zero mystical guarantees.",
    neurological_counterpart: "Polyvagal ventral vagal complex activation; prefrontal metabolic optimization; oxytocin/dopamine neurochemistry."
  }
];

// BUILD THE DEFINITIVE HTML READER
console.log("Compiling Definitive BKRS Manifestation Reader...");

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Master Codex of Manifestation: A 120-Year Unified Synthesis of 19 Canonical Works | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* Warm Editorial Cream Theme & Typography */
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

    .chapter-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 40px 48px;
      margin-bottom: 48px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    @media (max-width: 768px) {
      .chapter-card-deep { padding: 24px 20px; margin-bottom: 32px; }
    }

    .chapter-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 12px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
    }
    .chapter-date-badge {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 3px 10px;
      background: #8b181b15;
      color: var(--accent-crimson);
      border: 1px solid var(--accent-crimson);
      border-radius: 4px;
    }
    .evidence-badge {
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

    .chapter-heading-deep {
      font-family: var(--font-serif);
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 22px;
      letter-spacing: -0.01em;
    }
    @media (max-width: 768px) {
      .chapter-heading-deep { font-size: 1.6rem; }
    }

    .narrative-prose-deep p {
      margin-bottom: 1.45em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
      color: var(--text-main);
    }

    .historical-blockquote {
      margin: 28px 0;
      padding: 20px 28px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
    }
    .historical-blockquote p {
      margin-bottom: 10px !important;
      font-size: 1.12rem;
      line-height: 1.7;
      color: var(--text-main);
    }
    .historical-blockquote cite {
      display: block;
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-weight: 600;
      font-style: normal;
      color: var(--text-muted);
      text-align: right;
    }

    .causal-bridge {
      margin-top: 32px;
      padding: 20px 24px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
    }
    .causal-bridge-title {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent-gold);
      margin-bottom: 6px;
    }
    .causal-bridge-text {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.08rem;
      line-height: 1.65;
      color: var(--text-main);
    }

    .epoch-block {
      margin-bottom: 64px;
    }
    .epoch-header {
      margin-bottom: 28px;
      padding-bottom: 16px;
      border-bottom: 2px solid var(--border-color);
    }
    .epoch-kicker {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent-crimson);
      display: block;
      margin-bottom: 6px;
    }
    .epoch-title {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .epoch-desc {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.15rem;
      color: var(--text-muted);
    }

    /* Comparison Tables */
    .table-container {
      overflow-x: auto;
      margin: 28px 0;
      border: 1px solid var(--border-color);
      border-radius: 6px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.98rem;
      text-align: left;
    }
    th, td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--border-color);
      vertical-align: top;
    }
    th {
      background: var(--bg-card-subtle);
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-main);
    }
    td strong { color: var(--accent-crimson); }

    .nav-epoch-title {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent-crimson);
      padding: 12px 16px 4px;
      display: block;
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
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The Master Journey</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: Neurobiological Compass</button>
        <button class="pill-btn" id="btn-view-experience" onclick="switchView('experience')">View C: Rosetta Stone & Disputes</button>
      </div>

      <!-- THEME & FONT SELECTORS -->
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
        <div class="sidebar-title">Movements & Chapters</div>
        <div class="sidebar-meta">19 Works • 9 Movements • 20 Chapters</div>
      </div>
      <div class="sidebar-toc" id="sidebar-toc">
        ${movements.map((m, mIdx) => `
          <div class="nav-epoch-title">Movement ${m.roman} (${m.period})</div>
          ${m.chapters.map(ch => `
            <div class="nav-ch-item">
              <a href="#${ch.id}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
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

        <!-- VIEW A: THE MASTER INTELLECTUAL JOURNEY -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Multi-Source Canonical Master
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              The Master Codex of Manifestation
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A 120-year forensic synthesis of 19 canonical works across New Thought, autosuggestion, Neville Goddard’s mystical revision, reality transurfing, heart-brain coherence, and Stanford neurosurgery. Grounding intentionality in cognitive neuroscience and prosocial biology while permanently excising magical pseudoscience and victim-blaming.
            </div>
          </div>

          <!-- THE 9 INTELLECTUAL MOVEMENTS -->
          ${movements.map((m, mIdx) => `
            <article class="epoch-block" id="movement-${m.roman.toLowerCase()}">
              <div class="epoch-header">
                <span class="epoch-kicker">Movement ${m.roman} • Intellectual Evolution</span>
                <h2 class="epoch-title">${m.title}</h2>
                <p class="epoch-desc">${m.description}</p>
              </div>

              ${m.chapters.map(ch => `
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
                      <div class="causal-bridge-title">Causal Consequence & Intellectual Transition</div>
                      <div class="causal-bridge-text">${ch.causal_bridge}</div>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </article>
          `).join('')}

        </section>

        <!-- VIEW B: THE NEUROBIOLOGICAL COMPASS -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Neurobiological Compass</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The 7 Competing Intellectual Schools & Their Modern Neurological Counterparts</p>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>School & Primary Authors</th>
                  <th>Core Mechanism & Method</th>
                  <th>Psychological Danger / Failure Mode</th>
                  <th>Modern Neurological & Behavioral Counterpart</th>
                </tr>
              </thead>
              <tbody>
                ${competingSchools.map(s => `
                  <tr>
                    <td><strong>${s.school}</strong><br><em>${s.authors}</em></td>
                    <td>${s.core_mechanism}</td>
                    <td><strong>${s.failure_mode}</strong></td>
                    <td>${s.neurological_counterpart}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- THE 24-HOUR BEHAVIORAL PROTOCOL SUMMARY -->
          <div style="margin-top: 48px; padding: 28px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px;">
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--accent-crimson); margin-bottom: 16px;">
              The 24-Hour Behavioral Execution Cycle
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="padding: 16px; background: var(--bg-card-subtle); border-left: 3px solid var(--accent-gold); border-radius: 4px;">
                <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--accent-gold); margin-bottom: 6px;">Phase 1: Morning Priming (06:00–07:00)</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">15 min Heart Coherence meditation (0.1 Hz breathing); Reticular Activating System (RAS) priming on 2 high-leverage physical actions; zero phone/social media exposure.</p>
              </div>
              <div style="padding: 16px; background: var(--bg-card-subtle); border-left: 3px solid var(--accent-forest); border-radius: 4px;">
                <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--accent-forest); margin-bottom: 6px;">Phase 2: Midday Execution (09:00–18:00)</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">Operate on the Creative Plane (surplus use-value); extinguish outrage pendulums with cool indifference; drop importance to zero; execute high-courage aligned actions.</p>
              </div>
              <div style="padding: 16px; background: var(--bg-card-subtle); border-left: 3px solid var(--accent-crimson); border-radius: 4px;">
                <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--accent-crimson); margin-bottom: 6px;">Phase 3: Evening Revision (21:30–23:00)</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">Screen-free 60 min; execute Pruning Shears of Revision (mentally rewriting discord); enter SATS in bed; loop 5-second sensory scene of fulfillment into sleep.</p>
              </div>
              <div style="padding: 16px; background: var(--bg-card-subtle); border-left: 3px solid #4a5568; border-radius: 4px;">
                <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">Phase 4: Weekly Audit (Sunday Review)</h4>
                <p style="font-size: 0.95rem; line-height: 1.6;">Audit objective results in 4 columns: Target Goal, Heart Baseline, Real-world Actions Taken, Objective Outcomes. Discard what fails; refine what produces peace and agency.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- VIEW C: ROSETTA STONE & DISPUTES -->
        <section id="view-experience" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The Demystified Rosetta Stone & 9 Grand Disputes</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">Translating Esoteric Jargon into Plain English Neurobiology and Resolving Historical Controversies</p>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: 1.7rem; color: var(--accent-crimson); margin-bottom: 16px;">
            The 24 Essential Terms Decoded
          </h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Term & Category</th>
                  <th>Esoteric Jargon / Traditional Claim</th>
                  <th>Plain English / Neurobiology</th>
                  <th>Everyday Analogy</th>
                </tr>
              </thead>
              <tbody>
                ${rosettaTerms.map(t => `
                  <tr>
                    <td><strong>${t.term}</strong><br><em style="font-size: 0.8rem; color: var(--text-muted);">${t.category}</em><br><span style="font-size: 0.72rem; color: var(--accent-gold);">${t.origin_authors}</span></td>
                    <td style="color: var(--text-muted);">${t.jargon_claim}</td>
                    <td><strong>${t.plain_english}</strong></td>
                    <td style="font-style: italic;">${t.analogy}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: 1.7rem; color: var(--accent-crimson); margin: 48px 0 16px;">
            The 9-Point Grand Historiographical & Philosophical Dispute Matrix
          </h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Dispute Subject</th>
                  <th>Pop New Age / Romantic View</th>
                  <th>Scientific / Forensic Finding</th>
                  <th>Key Sources & Final Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${disputeMatrix.map(d => `
                  <tr>
                    <td><strong>${d.subject}</strong></td>
                    <td style="color: var(--text-muted);">${d.romantic_view}</td>
                    <td>${d.scientific_finding}</td>
                    <td><strong>${d.verdict}</strong><br><em style="font-size: 0.78rem; color: var(--text-muted);">${d.sources}</em></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
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
      } else if (viewName === 'experience') {
        document.getElementById('view-experience').style.display = 'block';
        document.getElementById('btn-view-experience').classList.add('active');
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
console.log('Saved index.html (Definitive BKRS Reader Shell with 9 Movements and 20 Chapters)');

// BUILD MASTER-NOTES.MD
let markdownContent = `# The Master Codex of Manifestation: A 120-Year Unified Synthesis of 19 Canonical Works

**Corpus Scope:** 19 Canonical Works Synthesized (Wallace D. Wattles, Charles F. Haanel, James Allen, The Three Initiates, Napoleon Hill, Émile Coué, Dr. Joseph Murphy, Neville Goddard [3 Works], Florence Scovel Shinn, Esther & Jerry Hicks, Eckhart Tolle [2 Works], Jeffery Dawson, Vadim Zeland [Reality Transurfing I–V], Dr. Joe Dispenza [2 Works], Dr. James R. Doty, MD [Stanford], Roxie Nafousi, Arden G.)  
**System Standard:** BKRS v1.0 Total Replacement Master Codex  
**Corpus Architecture:** 9 Historical & Intellectual Movements | 20 Forensic Chapters | 24-Term Rosetta Stone | 9-Point Dispute Matrix | 24-Hour Circadian Protocol  

---

## Executive Summary: The Epistemic Architecture

For over a century, manifestation literature has oscillated between profound psychological insight and absurd, predatory pseudoscience. When stripped of New Age mysticism and commercialization, manifestation is not a magical method for altering the gravitational or quantum properties of the universe through wishful thinking. Rather, it is **the systematic convergence of subconscious identity, cognitive salience (the Reticular Activating System & Salience Network), neurobiological heart-brain coherence, vagal parasympathetic regulation, systems awareness (neutralizing socio-cognitive pendulums), and courageous, high-probability behavioral action.**

---

`;

movements.forEach(m => {
  markdownContent += `## ${m.title}\n*${m.period} • ${m.description}*\n\n`;
  m.chapters.forEach(ch => {
    markdownContent += `### Chapter ${ch.number}: ${ch.title}\n`;
    markdownContent += `**Date/Scope:** ${ch.date} • ${ch.scope} | **Epistemic Classification:** \`${ch.epistemic_tag}\`\n\n`;
    ch.paragraphs.forEach(p => {
      markdownContent += `${p}\n\n`;
    });
    if (ch.blockquote) {
      markdownContent += `> ${ch.blockquote.text}\n>\n> — *${ch.blockquote.citation}*\n\n`;
    }
    if (ch.analysis_paragraphs) {
      ch.analysis_paragraphs.forEach(ap => {
        markdownContent += `${ap}\n\n`;
      });
    }
    if (ch.causal_bridge) {
      markdownContent += `**Causal Transition:** *${ch.causal_bridge}*\n\n---\n\n`;
    }
  });
});

markdownContent += `\n## The Beginner's Rosetta Stone: 24 Essential Terms Decoded\n\n`;
markdownContent += `| Term & Category | Jargon / Traditional Claim | Modern Neurobiology / Plain English | Everyday Analogy |\n| :--- | :--- | :--- | :--- |\n`;
rosettaTerms.forEach(t => {
  markdownContent += `| **${t.term}**<br>*\`${t.category}\`* | ${t.jargon_claim} | **${t.plain_english}** | ${t.analogy} |\n`;
});

markdownContent += `\n## The 9-Point Grand Historiographical & Philosophical Dispute Matrix\n\n`;
markdownContent += `| Dispute Subject | Pop New Age / Romantic View | Scientific / Forensic Finding | Key Sources & Verdict |\n| :--- | :--- | :--- | :--- |\n`;
disputeMatrix.forEach(d => {
  markdownContent += `| **${d.subject}** | ${d.romantic_view} | ${d.scientific_finding} | **${d.verdict}** (${d.sources}) |\n`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), markdownContent, 'utf8');
console.log('Saved master-notes.md (Full-length narrative chronicle)');

// GENERATE AND SAVE CANONICAL KNOWLEDGE-UNITS.JSON
const knowledgeUnits = [];
movements.forEach(m => {
  m.chapters.forEach(ch => {
    knowledgeUnits.push({
      id: ch.id,
      unit_number: ch.number,
      title: ch.title,
      movement: m.title,
      movement_period: m.period,
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

// SAVE ROSETTA-STONE.JSON
fs.writeFileSync(path.join(targetDir, 'rosetta-stone.json'), JSON.stringify(rosettaTerms, null, 2), 'utf8');
console.log(`Saved rosetta-stone.json (${rosettaTerms.length} decoded terms)`);

// UPDATE LIBRARY INDEX
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
if (fs.existsSync(libIndexPath)) {
  const lib = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
  const manifestItem = lib.books.find(b => b.id === 'manifestation-unified-codex');
  if (manifestItem) {
    manifestItem.title = "The Master Codex of Manifestation: 19 Canonical Works Synthesized";
    manifestItem.author = "Wallace D. Wattles, Charles F. Haanel, James Allen, The Three Initiates, Napoleon Hill, Émile Coué, Dr. Joseph Murphy, Neville Goddard, Florence Scovel Shinn, Esther & Jerry Hicks, Eckhart Tolle, Jeffery Dawson, Vadim Zeland, Dr. Joe Dispenza, Dr. James R. Doty, MD, Roxie Nafousi, Arden G.";
    manifestItem.original_volume = "19 Canonical Volumes Synthesized (9 Movements, 20 Forensic Chapters, 24 Rosetta Terms, 9 Grand Disputes)";
    manifestItem.reading_time_saved = "165.0 hrs saved";
    manifestItem.hours_val = 165;
    manifestItem.core_axiom = "Manifestation is not magical physics or light-bending wishcraft. It is the systematic convergence of subconscious identity, cognitive salience filtering (the Reticular Activating System & Salience Network), neutralizing socio-cognitive pendulums, neurobiological heart-brain coherence, and courageous, high-integrity behavioral execution.";
    fs.writeFileSync(libIndexPath, JSON.stringify(lib, null, 2), 'utf8');
    console.log('Updated docs/library-index.json');
  }
}
