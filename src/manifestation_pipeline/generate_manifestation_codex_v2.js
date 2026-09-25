const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/manifestation-unified-codex');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const manifestationUnits = [
  // MOVEMENT I: COGNITIVE & NEUROBIOLOGICAL FOUNDATIONS
  {
    id: "unit-01-subconscious-operating-system",
    unit_number: 1,
    title: "The Subconscious Operating System: Objective vs. Subjective Consciousness",
    movement: "Movement I: Cognitive Architecture & The Subconscious Foundation",
    scope: "Murphy (Ch. 1–3) • Dawson (Ch. 1–2) • Nafousi (Intro)",
    primary_authors: ["Dr. Joseph Murphy", "Jeffery Dawson", "Roxie Nafousi"],
    core_concept: "Human consciousness operates as a dual-layer cybernetic hierarchy: the conscious (objective/reasoning) mind acts as the gatekeeper choosing inputs, while the subconscious (subjective/habitual) mind operates non-judgmentally, executing whichever premises are emotionally accepted as true.",
    epistemic_audit: "EMPIRICAL PSYCHOLOGY & COGNITIVE ARCHITECTURE. Translates Murphy's theological 'Infinite Intelligence' into the established biological reality of the basal ganglia, autonomic nervous system, and implicit procedural memory.",
    key_tenets: [
      "The conscious mind reasons inductively, analyzes evidence, and makes choices; the subconscious mind accepts all premises without debate, deducing consequences from them and controlling autonomic bodily functions (Murphy).",
      "The subconscious mind cannot process a negative ('Do not crash'); it responds solely to the emotional intensity and visual imagery of the dominant representation (Dawson).",
      "Whatever premise the conscious mind repeatedly affirms and emotionally validates becomes an automated neural subroutine, filtering perception and driving unconscious micro-behaviors (Nafousi)."
    ],
    operational_heuristic: "Guard the gates of conscious thought; never allow fear, cynical humor, or hostile third-party suggestions to take root in the subjective psyche.",
    verbatim_anchor: "“The subconscious mind does not argue, neither does it answer back... It accepts what the conscious mind decrees.” — Dr. Joseph Murphy",
    epistemic_status: "EMPIRICAL PSYCHOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-reversed-effort-belief",
    unit_number: 2,
    title: "The Law of Reversed Effort & The Overcoming of Mental Coercion",
    movement: "Movement I: Cognitive Architecture & The Subconscious Foundation",
    scope: "Murphy (Ch. 7–8) • Arden G. (Part 1, Ch. 1–3)",
    primary_authors: ["Dr. Joseph Murphy", "Arden G."],
    core_concept: "Applying forceful conscious willpower to manifest a desire produces internal conflict that magnifies the fear of failure, triggering the Law of Reversed Effort (Coué's Baudouin Principle): when conscious will and subconscious imagination clash, imagination inevitably triumphs.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & PSYCHOLOGICAL PRINCIPLE. Formulated by French psychotherapist Émile Coué and Charles Baudouin; corroborated by modern performance psychology regarding choking under pressure.",
    key_tenets: [
      "Mental coercion and forceful striving create subconscious tension; the more desperately one tries to force a belief, the more the underlying subconscious conviction of lack is reinforced (Murphy).",
      "When you say 'I want this so badly I will force it to happen,' your subconscious interprets the desperation as proof of absence, locking you into the state of 'wanting' rather than 'having' (Arden G.).",
      "Resolution requires passive surrender: entering a relaxed state where conscious resistance is suspended and presenting the simple end result as an already accomplished fact."
    ],
    operational_heuristic: "Eliminate mental strain; when seeking an outcome, imagine the relief and satisfaction of the completed result rather than the arduous mechanics of achieving it.",
    verbatim_anchor: "“When your desires and imagination are in conflict, your imagination invariably gains the day... In using your subconscious mind you infer no opponent, you use no force.” — Dr. Joseph Murphy",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },

  // MOVEMENT II: THE NEUROBIOLOGY OF CHANGE (DR. JOE DISPENZA)
  {
    id: "unit-03-dispenza-breaking-habit",
    unit_number: 3,
    title: "Breaking the Habit of Being Yourself: Neural Pruning & The River of Change",
    movement: "Movement II: Neuroplasticity & Epigenetics (Dispenza)",
    scope: "Dispenza (Breaking the Habit, Part I & II)",
    primary_authors: ["Dr. Joe Dispenza"],
    core_concept: "By age 35, 95% of who we are is a memorized set of behaviors, emotional reactions, unconscious habits, and hardwired beliefs operating like an automated computer program. To change your life, you must literally 'lose your mind'—unwiring the neural networks of the old self and stepping into the fertile void of the unknown.",
    epistemic_audit: "NEUROPLASTICITY & CELLULAR BIOLOGY. Merges Hebbian learning ('nerve cells that fire together wire together') with cognitive-behavioral extinction and autonomic nervous system regulation.",
    key_tenets: [
      "Thoughts create feelings, and feelings create thoughts: this produces a 'state of being' where the body becomes the subconscious mind, chemically addicted to past emotional trauma (shame, guilt, anxiety, unworthiness) (Dispenza).",
      "Crossing the River of Change: The profound biological discomfort felt when breaking an old habit is not failure; it is the physiological death of the old neurological self and the chemical withdrawal of the body.",
      "Mental Rehearsal: The brain cannot distinguish between an event occurring in the physical external world and an event emotionally and visually imagined within consciousness; repeated rehearsal changes brain circuitry ahead of the physical experience."
    ],
    operational_heuristic: "To manifest a new reality, you must become greater than your environment, greater than your body's emotional addictions, and greater than chronological time.",
    verbatim_anchor: "“If you want a new outcome, you will have to break the habit of being yourself, and reinvent a new self.” — Dr. Joe Dispenza",
    epistemic_status: "EMPIRICAL PSYCHOLOGY & NEUROPLASTICITY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-04-heart-brain-coherence-quantum",
    unit_number: 4,
    title: "Heart-Brain Coherence & Tuning into the Quantum Potential",
    movement: "Movement II: Neuroplasticity & Epigenetics (Dispenza)",
    scope: "Dispenza (Becoming Supernatural, Ch. 2–4, 7)",
    primary_authors: ["Dr. Joe Dispenza"],
    core_concept: "Manifestation requires a precise electro-magnetic signature: a clear, elevated intention in the brain (electrical signal sending the information outward) combined with an elevated, heart-centered emotion such as awe, gratitude, or love (magnetic signal drawing the potential to you).",
    epistemic_audit: "PSYCHONEUROIMMUNOLOGY & QUALIFIED QUANTUM METAPHOR. Supported by HeartMath Institute heart-rate variability (HRV) metrics; uses quantum potential as a macro-metaphor for probabilistic reality.",
    key_tenets: [
      "Incoherence: Stress hormones (cortisol, adrenaline) cause the brain's hemispheres to fire out of sync and produce erratic, jagged heart rate variability, signaling survival panic to every cell.",
      "Heart-Brain Coherence: Breathing slowly into the heart center and cultivating elevated emotions (gratitude, joy, appreciation) synchronizes the heart's rhythmic field with the brain's alpha/theta waves, producing a coherent electromagnetic field.",
      "The Quantum Potential: In the quantum realm, all possibilities exist simultaneously as wave functions of information; when you collapse the wave function with coherent intention and feeling, you pull the future into the present."
    ],
    operational_heuristic: "Never combine a new vision with an old survival emotion (frustration, anxiety, impatience); align the elevated thought with the elevated somatic feeling of gratitude.",
    verbatim_anchor: "“A clear intention combined with an elevated emotion changes the energy... The thought sends the signal out, and the feeling draws the event to you.” — Dr. Joe Dispenza",
    epistemic_status: "QUALIFIED PSYCHOSOMATIC SCIENCE",
    materiality: "CRITICAL"
  },

  // MOVEMENT III: THE ASSUMPTION SCHOOL (NEVILLE GODDARD)
  {
    id: "unit-05-neville-feeling-is-the-secret",
    unit_number: 5,
    title: "Feeling Is the Secret: The Law of Assumption & SATS Mastery",
    movement: "Movement III: The Assumption School (Neville Goddard)",
    scope: "Goddard (Feeling Is the Secret, Ch. 1–4)",
    primary_authors: ["Neville Goddard"],
    core_concept: "The conscious mind is masculine (generating ideas), while the subconscious mind is feminine (conceiving and giving birth to them). The subconscious is never moved by logic or arguments, but exclusively by feeling: whatever feeling of reality you capture in imagination, the subconscious inevitably objectifies in physical space.",
    epistemic_audit: "SOURCE ARGUMENT & PHENOMENOLOGICAL HEURISTIC. Neville's formulation represents the purest expression of psychological non-dualism and hypnagogic autosuggestion.",
    key_tenets: [
      "Feeling defined: Feeling is not mere emotional excitement; it is the subjective conviction of reality—the visceral sensation of 'It is done' (Goddard).",
      "The State Akin to Sleep (SATS): Inducing physical immobility and drowsiness prior to sleep, and looping a single, brief, first-person sensory action that implies fulfillment (e.g., shaking hands, wearing a wedding ring, smelling salt air).",
      "Do not visualize yourself from the outside like an actor in a movie; visualize from inside your own body in the first person, looking through your own eyes and touching objects in imagination.",
      "Sleep is the natural door to the subconscious: whatever state of consciousness you carry into sleep is the precise state that will govern your physical tomorrow."
    ],
    operational_heuristic: "Never go to sleep feeling discouraged, anxious, or incomplete; assume the feeling of the wish fulfilled and fall asleep in the atmosphere of victory.",
    verbatim_anchor: "“Feeling is the secret of subconscious impregnation... You must assume the feeling of the wish fulfilled until the assumption has all the sensory vividness of reality.” — Neville Goddard",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-06-neville-power-of-awareness",
    unit_number: 6,
    title: "The Power of Awareness: The 'I AM' & The Collapse of External Cause",
    movement: "Movement III: The Assumption School (Neville Goddard)",
    scope: "Goddard (The Power of Awareness, Ch. 1–7, 21–22)",
    primary_authors: ["Neville Goddard", "Mitch Horowitz"],
    core_concept: "Your concept of yourself is the sole cause of the phenomena of your life. The world has no independent existence separate from your awareness; 'I AM' is the primary reality, and all outer conditions are merely projected shadows of your internal self-definition.",
    epistemic_audit: "SOURCE HYPOTHESIS & PHILOSOPHICAL IDEALISM. Connects directly to classical Advaita Vedanta and Western subjective idealism (Berkeley, Emerson).",
    key_tenets: [
      "The Illusion of External Obstacles: To attempt to change circumstances by fighting external conditions is as futile as smashing a mirror because you dislike the reflection (Goddard).",
      "Changing the Self-Concept: You do not attract what you want; you attract what you are conscious of being. If you define yourself as poor, no financial opportunity will stick; if you define yourself as abundant, circumstances bend to fit.",
      "The Effortless Way: Creation is already finished; all possibilities exist simultaneously in infinite consciousness. Manifestation is simply selecting a new state of awareness and dwelling in it until it hardens into fact.",
      "Persistence: When external senses deny your assumption, do not waver; remain faithful to your internal unseen reality."
    ],
    operational_heuristic: "Disregard external appearances and the evidence of the physical senses; sustain the assumption that you already are what you desire to be.",
    verbatim_anchor: "“Leave the mirror and change your face. Leave the world alone and change your conceptions of yourself.” — Neville Goddard",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },

  // MOVEMENT IV: THE SPOKEN WORD & THE GAME OF LIFE (FLORENCE SCOVEL SHINN)
  {
    id: "unit-07-shinn-game-of-life-spoken-word",
    unit_number: 7,
    title: "The Game of Life: The Law of the Spoken Word & Casting the Burden",
    movement: "Movement IV: The New Thought Spoken Word (Florence Scovel Shinn)",
    scope: "Shinn (The Game of Life and How to Play It, Ch. 1–6)",
    primary_authors: ["Florence Scovel Shinn"],
    core_concept: "Life is not a battle, but a game of boomerangs: man’s thoughts, deeds, and words return to him sooner or later with astounding accuracy. The spoken word is a vibrational decree that commands subconscious energy and shapes destiny.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & LINGUISTIC REFRAMING. Anticipates modern cognitive linguistic research into how self-talk constructs neural bias and perceptual framing.",
    key_tenets: [
      "The Power of the Word: Every spoken word is an order to the subconscious mind; complaining, gossiping, and joking about poverty or illness ('I am dying to see you', 'I am broke as usual') register as literal commands (Shinn).",
      "Casting the Burden: When an individual is overwhelmed by a problem, conscious struggle only magnifies anxiety; one must mentally 'cast the burden' onto the Superconscious (or Divine Design) through a definitive vocal decree.",
      "The Law of Non-Resistance: What you resist, you empower; do not fight evil, do not harbor resentment against enemies; bless what you fear and it loses its power to harm you.",
      "The Divine Design: Every human soul has a pre-existing blueprint of perfect health, wealth, love, and self-expression; manifestation is removing personal egoic blocks to let the Divine Design unfold."
    ],
    operational_heuristic: "Speak only words of blessing, prosperity, and peace; cast your heaviest anxieties out of your conscious mind through a definitive spoken decree.",
    verbatim_anchor: "“By your words you are justified, and by your words you are condemned... The game of life is a game of boomerangs. Man's thoughts, deeds and words, return to him sooner or later with astounding accuracy.” — Florence Scovel Shinn",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },

  // MOVEMENT V: THE POWER OF PRESENCE (ECKHART TOLLE)
  {
    id: "unit-08-tolle-power-of-now",
    unit_number: 8,
    title: "The Power of Now: Manifesting from Presence vs. Egoic Striving",
    movement: "Movement V: Presence & Egoless Creation (Eckhart Tolle)",
    scope: "Tolle (The Power of Now, Ch. 1–4, 9–10)",
    primary_authors: ["Eckhart Tolle"],
    core_concept: "Most manifestation is hijacked by the egoic mind, which projects past trauma into a fictitious future, creating chronic dissatisfaction and psychological time. Authentic creation arises only from deep presence in the timeless Now, where action is uncorrupted by needy attachment.",
    epistemic_audit: "EMPIRICAL MINDFULNESS & PHENOMENOLOGY. Rigorously verified by contemporary neuroscience on the Default Mode Network (DMN), rumination, and somatic presence.",
    key_tenets: [
      "The Egoic Manifestation Trap: Believing that future external achievements (money, status, partner) will finally grant inner peace is an illusion; the future exists only as a mental concept in the present moment (Tolle).",
      "Disidentification from the Mind: You are not your thoughts; you are the silent, spacious awareness behind the thoughts. Stepping out of mental chatter collapses the pain-body and stops reactive suffering.",
      "Surrender vs. Resignation: Surrender is the internal acceptance of 'what is' without mental resistance; from this quiet, centered space, inspired action arises with immense clarity and power.",
      "Creating from the Unmanifested: When you honor the present moment without resistance, the creative intelligence of life flows through you effortlessly, without the toxic friction of egoic ambition."
    ],
    operational_heuristic: "Do not use the present moment as a mere stepping stone to a fictitious future; bring your entire awareness into the Now, and let aligned action flow from stillness.",
    verbatim_anchor: "“Unease, anxiety, tension, stress, worry—all forms of fear—are caused by too much future, and not enough presence... Nothing ever happened in the past; it happened in the Now. Nothing will ever happen in the future; it will happen in the Now.” — Eckhart Tolle",
    epistemic_status: "EMPIRICAL MINDFULNESS",
    materiality: "CRITICAL"
  },

  // MOVEMENT VI: CREATIVE VISUALIZATION (SHAKTI GAWAIN)
  {
    id: "unit-09-gawain-creative-visualization",
    unit_number: 9,
    title: "Creative Visualization: The Four Basic Steps & The Pink Bubble Technique",
    movement: "Movement VI: Somatic Imagery & Energetic Clearing (Shakti Gawain)",
    scope: "Gawain (Creative Visualization, Parts 1–3)",
    primary_authors: ["Shakti Gawain", "Marci Shimoff"],
    core_concept: "Creative visualization is the intentional use of mental imagery, affirmation, and relaxed somatic presence to effect positive changes in reality. It operates on the principle that the physical universe is dynamic energy responding to mental thought-forms.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & MOTOR IMAGERY. Supported by sports psychology research confirming mental imagery activates identical motor and sensory pathways in the brain.",
    key_tenets: [
      "The Four Basic Steps: 1. Set your goal (clear decision); 2. Create a clear mental idea or feeling; 3. Focus on it often in deep relaxation; 4. Give it positive energy through affirmations and gratitude (Gawain).",
      "The Three Necessary Elements: Desire (genuine hunger, not what others expect), Belief (reasonable conviction that it is possible), and Acceptance (willingness to receive it).",
      "The Pink Bubble Technique: In deep meditation, visualize your desired reality inside a radiant pink bubble; then gently release the bubble into the universe, symbolizing complete emotional detachment.",
      "Clearing Energy Blocks: Confronting and releasing emotional resentment, guilt, and scarcity beliefs that act as psychic dam walls blocking creative flow."
    ],
    operational_heuristic: "Practice 10 minutes of relaxed mental visualization daily, concluding by releasing the image with the affirmation: 'This, or something even better, now manifests for me in totally satisfying and harmonious ways, for the highest good of all concerned.'",
    verbatim_anchor: "“Creative visualization is magic in the truest and highest sense of the word. It involves understanding and aligning yourself with the natural principles that govern the workings of our universe.” — Shakti Gawain",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },

  // MOVEMENT VII: POP CATALYSTS & EMOTIONAL GUIDANCE
  {
    id: "unit-10-pop-catalyst-the-secret",
    unit_number: 10,
    title: "The Pop Catalyst: 'The Secret' and the Three-Step Creation Formula",
    movement: "Movement VII: The Law of Attraction & Pop Formulations",
    scope: "Byrne (Ch. 1–3) • Hicks (Ch. 1–4)",
    primary_authors: ["Rhonda Byrne", "Esther & Jerry Hicks"],
    core_concept: "The foundational popular formula of manifestation dictates a three-phase dynamic: Ask (clarify desire), Believe (maintain unwavering cognitive and emotional alignment), and Receive (enter the receptive psychological state of gratitude and fulfillment).",
    epistemic_audit: "SOURCE ARGUMENT & HEURISTIC FILTER. Deconstructs Byrne's pseudoscientific claim that 'thoughts are magnetic transmissions travelling through quantum ether' into its true psychological equivalent: goal salience, selective attention (RAS), and self-fulfilling behavioral prophecy.",
    key_tenets: [
      "Step 1: Ask. Formulate clear, unambiguous desire without contradictory qualifiers; vagueness produces diffuse focus.",
      "Step 2: Believe. Cultivate unwavering internal certainty; think, speak, and act as if the intended outcome is an inevitability (Byrne).",
      "Step 3: Receive. Attune emotional state to feeling good now; do not postpone happiness until the manifestation arrives, because joy in the present is the condition that enables the perception of opportunities.",
      "Pseudoscience Audit: Byrne claims thoughts radiate electromagnetic frequencies that physically rearrange external physical matter at a distance. Science disproves this; what thoughts actually rearrange is the practitioner's neurobiology, attentional filter, and behavioral choices, which in turn alters their external environment."
    ],
    operational_heuristic: "Treat the three-step formula not as a magical wish-granting incantation, but as an optimization protocol for attentional salience and decision congruence.",
    verbatim_anchor: "“Step 1: Ask. Make it clear what you want... Step 2: Believe. Believe that it is already yours... Step 3: Receive. Begin to feel wonderful about it now.” — Rhonda Byrne",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-11-vibrational-spectrum-emotional-scale",
    unit_number: 11,
    title: "The Vibrational Spectrum & The 22-Rung Emotional Guidance Scale",
    movement: "Movement VII: The Law of Attraction & Pop Formulations",
    scope: "Hicks (Ch. 5–16) • Byrne (Ch. 2) • Nafousi (Step 2)",
    primary_authors: ["Esther & Jerry Hicks", "Rhonda Byrne", "Roxie Nafousi"],
    core_concept: "Human emotional states function as an internal navigational guidance system; rather than toxic forced positivity, psychological alignment requires recognizing one's current rung on the emotional spectrum and taking the next accessible upward step.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & AFFECT REGULATION. Hicks presents this as metaphysical 'vibrational frequency', which cognitive science maps directly to autonomic nervous system states.",
    key_tenets: [
      "The 22-Rung Scale spans from Rung 1 (Joy, Knowledge, Empowerment, Freedom, Love) down through Rung 8 (Boredom), Rung 10 (Frustration/Impatience), Rung 17 (Anger), Rung 21 (Jealousy), and Rung 22 (Fear, Grief, Depression, Despair).",
      "The Fallacy of the Instant Leap: A practitioner in severe depression (Rung 22) cannot instantaneously leap to Joy (Rung 1); attempting to do so produces cognitive dissonance and cynical despair (Hicks).",
      "The Functional Role of Anger: Moving from Depression/Helplessness (Rung 22) up into Anger (Rung 17) is an actual therapeutic improvement because anger possesses kinetic agency; from anger, one can climb to Frustration, then Hopefulness, and finally Optimism."
    ],
    operational_heuristic: "Do not repress negative emotion with fake smiles; identify where you sit on the 22-rung spectrum and reach for the best-feeling thought that is genuinely believable in that moment.",
    verbatim_anchor: "“You cannot jump from despair to joy in a single bound... but you can reach for the relief of anger from despair. Any relief is a movement toward the Vortex.” — Esther & Jerry Hicks",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },
  {
    id: "unit-12-allowing-vortex-paradox",
    unit_number: 12,
    title: "The Art of Allowing & The 'Vortex' Paradox",
    movement: "Movement VIII: Alignment & Resistance Elimination",
    scope: "Hicks (Ch. 17–22) • Arden G. (Part 2) • Murphy (Ch. 8)",
    primary_authors: ["Esther & Jerry Hicks", "Arden G.", "Dr. Joseph Murphy"],
    core_concept: "Desire creation is a three-stage mechanical cycle where Stage 1 (Asking) and Stage 2 (Universe/Subconscious processing) happen automatically; failure occurs exclusively in Stage 3 (Allowing/Receptivity) due to chronic resistance, impatience, and anxiety over timing.",
    epistemic_audit: "SOURCE HYPOTHESIS & METAPHORICAL FRAMEWORK. The 'Vortex' is Hicks's metaphysical metaphor for the mental state of zero friction, where cognitive dissonance between desire and reality is dissolved.",
    key_tenets: [
      "Stage 1 is involuntary: every time life exposes you to contrast or dissatisfaction, you naturally ask for improvement.",
      "Stage 2 is autonomous: the subconscious and external reality begin reorganizing pathways toward the solution.",
      "Stage 3 is Allowing: the conscious practitioner must match the feeling of the answered prayer; if one continues looking at the empty bank account or empty bed, one is focused on the 'absence' of the desire, blocking the reception of intuitive ideas (Hicks).",
      "Resistance is defined as any thought that argues against the fulfillment: doubt, resentment, grievance, comparison, and timeline panic (Arden G.)."
    ],
    operational_heuristic: "Cease obsessing over the mechanics of 'how' and 'when'; train attention to dwell in the somatic feeling of relief and completion.",
    verbatim_anchor: "“The Art of Allowing is the art of not resisting the well-being that is naturally flowing to you... You cannot look at 'what is' and manifest something new.” — Esther & Jerry Hicks",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "IMPORTANT"
  },

  // MOVEMENT IX: MODERN SELF-WORTH & DETACHMENT
  {
    id: "unit-13-self-worth-neuroplasticity",
    unit_number: 13,
    title: "The Neuroplasticity of Self-Worth: Deconstructing Fear and Doubt",
    movement: "Movement IX: Modern Cognitive-Behavioral Alignment",
    scope: "Nafousi (Step 1–2) • Murphy (Ch. 19) • Dawson (Ch. 10)",
    primary_authors: ["Roxie Nafousi", "Dr. Joseph Murphy", "Jeffery Dawson"],
    core_concept: "You never manifest what you wish for; you manifest what your subconscious self-image believes you are genuinely worthy of receiving. True manifestation is an inward journey of self-worth restoration and psychological desensitization to failure.",
    epistemic_audit: "EMPIRICAL PSYCHOLOGY & COGNITIVE BEHAVIORAL RESTRUCTURING. Aligns with Maxwell Maltz's Psycho-Cybernetics and modern neuroplastic self-concept research.",
    key_tenets: [
      "If you consciously visualize millions of dollars but subconsciously believe you are intrinsically unworthy, unlovable, or destined to struggle, your nervous system will actively sabotage financial opportunities to preserve self-concept consistency (Nafousi).",
      "Fear and self-doubt are evolutionary threat responses developed to protect the organism from social exile; they must not be fought with self-hatred, but gently reconditioned through repeated, low-stakes micro-exposures and positive affirmations (Dawson).",
      "Cultivating unconditional self-love is the indispensable prerequisite for manifestation: treating oneself with dignity, setting non-negotiable boundaries, and speaking to oneself as a valued ally rather than an abusive critic."
    ],
    operational_heuristic: "Identify your core subconscious limiting belief (e.g., 'I am not enough') and systematically construct daily behavioral evidence that contradicts it.",
    verbatim_anchor: "“Manifesting is not about sitting on the sofa and daydreaming. You do not attract what you want; you attract what you believe you are worthy of having.” — Roxie Nafousi",
    epistemic_status: "EMPIRICAL PSYCHOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-paradox-detachment-stop-chasing",
    unit_number: 14,
    title: "The Paradox of Detachment: Why Chasing Repels",
    movement: "Movement IX: Modern Cognitive-Behavioral Alignment",
    scope: "Arden G. (Parts 1–3) • Murphy (Ch. 8) • Hicks (Ch. 20)",
    primary_authors: ["Arden G.", "Dr. Joseph Murphy", "Esther & Jerry Hicks"],
    core_concept: "Psychological and energetic chasing is rooted in scarcity; when you chase a person, job, or sum of money, you broadcast the foundational assumption that it is running away from you. Detachment is not apathy or giving up; it is supreme confidence in the outcome.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & ATTACHMENT THEORY. Grounded in psychological anxious attachment dynamics, the Yerkes-Dodson law of optimal arousal, and behavioral game theory.",
    key_tenets: [
      "Chasing behavior (incessant texting, compulsive checking of bank accounts, anxiety-driven networking) signals desperation to other humans and triggers their innate repulsion instinct (Arden G.).",
      "Detachment means divorcing your emotional equilibrium from the immediate external outcome: 'I desire this outcome, I will act toward it, but my personal wholeness and peace do not depend on it.'",
      "The Neurological Shift of Letting Go: Dropping obsessive attachment lowers cortisol and amygdala hyper-arousal, restoring prefrontal cortex executive functioning and allowing the brain to perceive creative solutions that tunnel vision concealed."
    ],
    operational_heuristic: "Adopt the internal mantra: 'What is meant for me will not pass me.' Stop checking the soil every ten minutes to see if the seed has sprouted.",
    verbatim_anchor: "“Detachment is not about not caring; it is about caring so deeply about your own peace that you refuse to let an external outcome dictate your worth.” — Arden G.",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-behavioral-alignment-comfort-zones",
    unit_number: 15,
    title: "Behavioral Alignment: Stepping Outside Comfort Zones",
    movement: "Movement X: Behavioral Execution & Proactive Action",
    scope: "Nafousi (Step 3) • Dawson (Ch. 6–7) • Byrne (Ch. 4)",
    primary_authors: ["Roxie Nafousi", "Jeffery Dawson", "Rhonda Byrne"],
    core_concept: "Manifestation without aligned physical action is impotent daydreaming; the physical universe demands behavioral congruence, requiring the practitioner to step into uncomfortable, courageous action that mirrors their envisioned identity.",
    epistemic_audit: "BEHAVIORAL HEURISTIC & EMPIRICAL REALITY. Directly corrects and refutes the popular misconception that manifestation requires only passive meditation on a vision board.",
    key_tenets: [
      "The 'Secret Couch' Fallacy: Believing that visualizing a check will cause money to magically materialize in the mailbox without business activity, labor, or exchange of value is delusional magical thinking (Nafousi).",
      "Aligned Action defined: Taking the specific, often frightening steps that the future, successful version of yourself would take (making the cold call, launching the website, ending the dead relationship, auditioning).",
      "Comfort Zone Expansion: Growth never occurs in familiarity; the brain's neuroplasticity requires friction, uncertainty, and novelty to form robust new synaptic architectures."
    ],
    operational_heuristic: "Ask yourself daily: 'What would the person I am manifesting becoming do in this situation?' and immediately execute that action, regardless of discomfort.",
    verbatim_anchor: "“If you want to live a life you have never lived, you must do things you have never done. Align your behaviour with your vision, and take bold, proactive action.” — Roxie Nafousi",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-universe-tests-boundary-filter",
    unit_number: 16,
    title: "Tests from the Universe & The Boundary Filter",
    movement: "Movement X: Behavioral Execution & Proactive Action",
    scope: "Nafousi (Step 4) • Arden G. (Part 3) • Rae (Ch. 12–20)",
    primary_authors: ["Roxie Nafousi", "Arden G.", "Z Z Rae"],
    core_concept: "When an individual decides to elevate their self-worth, reality immediately presents 'tests'—subtle temptations to revert to old toxic patterns, accept breadcrumbs, or compromise boundaries—which serve as the diagnostic filter for genuine growth.",
    epistemic_audit: "BEHAVIORAL PSYCHOLOGY & EXTINCTION BURSTS. Known in behavioral science as extinction bursts: when an old habitual pattern is starved, the subconscious produces a final intense flare-up before permanently collapsing.",
    key_tenets: [
      "A 'test' typically manifests as an ex-partner returning with empty promises, a low-ball job offer that preys on financial anxiety, or an invitation to compromise personal integrity (Nafousi).",
      "Passing the test requires saying NO to what is merely 'good enough' to leave space for what is truly aligned with your new standards (Rae).",
      "The Energetic Cost of Settling: Accepting a counterfeit offer confirms to the subconscious mind that your previous affirmation of high self-worth was a bluff (Arden G.)."
    ],
    operational_heuristic: "View setbacks and low-value temptations not as cosmic punishments, but as final exams designed to confirm whether you have genuinely outgrown your past.",
    verbatim_anchor: "“The universe will test you to see if you have truly changed, or if you will still settle for what you used to accept. Say no to what drains you.” — Roxie Nafousi",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },

  // MOVEMENT XI: SOMATIC EMOTIONAL ALCHEMY
  {
    id: "unit-17-neuro-somatic-gratitude",
    unit_number: 17,
    title: "The Neuro-Somatic Power of Gratitude Without Caveats",
    movement: "Movement XI: Somatic State Regulation & Emotional Alchemy",
    scope: "Byrne (Ch. 4) • Nafousi (Step 5) • Hicks (Process 1) • Murphy (Ch. 6)",
    primary_authors: ["Rhonda Byrne", "Roxie Nafousi", "Esther & Jerry Hicks", "Dr. Joseph Murphy"],
    core_concept: "Gratitude is not a superficial social nicety, but a biological neurochemical re-calibration engine that shifts the nervous system from chronic scarcity/threat into parasympathetic safety and perceived abundance.",
    epistemic_audit: "EMPIRICAL PSYCHOLOGY & NEUROBIOLOGY. Verified by decades of positive psychology research (Emmons & McCullough) showing gratitude boosts dopamine, serotonin, and lowers inflammatory markers.",
    key_tenets: [
      "Gratitude is the emotional frequency of receiving; feeling grateful before the physical manifestation arrives signals to the brain that the goal is already secure, extinguishing survival anxiety (Byrne).",
      "Gratitude Without Caveats: Avoiding the subtle trap of conditional gratitude ('I am grateful for my apartment, but it’s too small'); caveats pollute the emotional signal with resentment (Nafousi).",
      "Hicks's Rampage of Appreciation: Streaming uninterrupted, sensory-specific gratitude for mundane details (fresh water, sunlight, warmth, coffee) until the physical body vibrates with genuine somatic joy.",
      "Murphy's Thank-You Technique: Going to sleep whispering 'Thank you, Father' or 'Thank you for this blessing', allowing the subconscious to stew in gratitude throughout the night."
    ],
    operational_heuristic: "Practice daily somatic gratitude: do not just list items mentally; feel the warmth in your chest and belly for three specific things for at least 60 seconds.",
    verbatim_anchor: "“Gratitude is the single most powerful tool you have to change your frequency. If you only do one thing, be genuinely grateful for what you have now.” — Rhonda Byrne",
    epistemic_status: "EMPIRICAL PSYCHOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-18-envy-to-inspiration-transmutation",
    unit_number: 18,
    title: "The Psychology of Envy vs. Inspiration: Transmuting Scarcity",
    movement: "Movement XI: Somatic State Regulation & Emotional Alchemy",
    scope: "Nafousi (Step 6) • Murphy (Ch. 9, 16) • Dawson (Ch. 8)",
    primary_authors: ["Roxie Nafousi", "Dr. Joseph Murphy", "Jeffery Dawson"],
    core_concept: "Envy is an unconscious admission of personal inadequacy and perceived scarcity; whenever you begrudge another’s success, you instruct your subconscious that wealth or happiness is scarce and morally tainted, thereby blocking your own access to it.",
    epistemic_audit: "BEHAVIORAL PSYCHOLOGY & SOCIAL COMPARISON THEORY. Based on Festinger's social comparison research and cognitive reframing protocols.",
    key_tenets: [
      "The Subconscious Mirror: When you condemn another person's wealth, relationship, or beauty, your subconscious mind internalizes the condemnation and prevents you from acquiring those same attributes (Murphy).",
      "Transmutation into Inspiration: When you see someone enjoying what you desire, reframe it immediately as empirical evidence that it is possible in the human realm (Nafousi).",
      "Blessing What You Desire: Actively celebrating and wishing greater prosperity for your competitors and peers dissolves competitive panic and aligns your mind with infinite supply."
    ],
    operational_heuristic: "The moment envy stings your heart on social media, bless that person silently: 'I rejoice in your success, and I claim the same possibility for myself.'",
    verbatim_anchor: "“Never say or think anything derogatory about another's success or wealth. To do so is to place your own subconscious in opposition to prosperity.” — Dr. Joseph Murphy",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "IMPORTANT"
  },

  // MOVEMENT XII: PRACTICAL HYPNAGOGIC METHODS
  {
    id: "unit-19-hypnagogic-state-sats",
    unit_number: 19,
    title: "The Hypnagogic State & Sleep-State Suggestion (SATS)",
    movement: "Movement XII: Practical Methods & Hypnagogic Imprinting",
    scope: "Murphy (Ch. 6, 13) • Goddard (Feeling, Ch. 2) • Dawson (Ch. 3)",
    primary_authors: ["Dr. Joseph Murphy", "Neville Goddard", "Jeffery Dawson"],
    core_concept: "The transition state between wakefulness and sleep (the hypnagogic state, characterized by theta brainwave oscillations) represents the single most receptive cognitive portal for imprinting the subconscious mind without conscious critical friction.",
    epistemic_audit: "EMPIRICAL NEUROPHYSIOLOGY & HYPNOTIC SUGGESTION. Directly validated by neuroscience regarding sleep spindles, memory consolidation, and reduced prefrontal cortex inhibition during Stage 1 NREM sleep.",
    key_tenets: [
      "The Baudouin Technique: Charles Baudouin proved that entering a drowsy, sleepy state (where conscious intellectual debate drops to near zero) allows a single concentrated idea to penetrate directly into the subjective psyche (Murphy).",
      "The Short Loop Principle: Do not play an entire long movie; loop a single, 5-to-10 second sensory scene implying that your goal is already accomplished (Goddard).",
      "The Pre-Sleep Danger: Going to sleep dwelling on worries, bills, or anger programs the subconscious mind to spend 8 hours of sleep processing threat vectors and stress hormones."
    ],
    operational_heuristic: "As you drift off to sleep, systematically loop your short scene of fulfillment until sleep overtakes you; let your last waking thought be the feeling of the wish fulfilled.",
    verbatim_anchor: "“In a drowsy, sleepy state, effort is reduced to a minimum... This is the ideal condition for impregnating your subconscious mind.” — Dr. Joseph Murphy",
    epistemic_status: "EMPIRICAL PSYCHOLOGY",
    materiality: "CRITICAL"
  },

  // MOVEMENT XIII: DOMAIN-SPECIFIC APPLICATIONS (WEALTH, RELATIONSHIPS, HEALTH)
  {
    id: "unit-20-wealth-architecture-prosperity-consciousness",
    unit_number: 20,
    title: "Wealth Architecture: Prosperity Consciousness vs. Scarcity Conditioning",
    movement: "Movement XIII: Domain-Specific Applications (Wealth, Health, Love)",
    scope: "Murphy (Ch. 9–11) • Byrne (Ch. 5) • Hicks (Process 4) • Shinn (Ch. 2)",
    primary_authors: ["Dr. Joseph Murphy", "Rhonda Byrne", "Florence Scovel Shinn", "Esther & Jerry Hicks"],
    core_concept: "Money is an inert medium of exchange and energy; chronic poverty and financial lack are not noble virtues or immutable curses, but subconscious mental diseases born of fear, condemnation of wealth, and deep-seated scarcity conditioning.",
    epistemic_audit: "BEHAVIORAL ECONOMICS & COGNITIVE REFRAMING. Separates sound behavioral principles (value creation, eliminating fear around money) from Byrne's absurd claim that visualizing bank accounts causes cash to appear without work.",
    key_tenets: [
      "The Mental Block against Money: Believing that 'money is the root of all evil' or that rich people are inherently evil creates an unconscious conflict where the subconscious protects you from money to keep you morally pure (Murphy).",
      "Shinn's Law of Prosperity: God is your unfailing, limitless supply; large sums of money come to you under grace in miraculous ways when you eliminate the fear of lack and circulate funds boldly.",
      "The Law of Circulation: Hoarding money out of terror locks in scarcity; circulating money with gratitude and confidence keeps the financial nervous system relaxed and receptive to new enterprise."
    ],
    operational_heuristic: "Repeat silently several times daily: 'I like money. I love it. I use it wisely, constructively, and judiciously. Money is constantly circulating in my life.'",
    verbatim_anchor: "“Never make a god of money. It is only a symbol. Remember that the real riches are in your mind... You are here to lead a balanced life.” — Dr. Joseph Murphy",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "CRITICAL"
  },
  {
    id: "unit-21-relational-manifestation-soulmate-mirror",
    unit_number: 21,
    title: "Relational Manifestation & The Soulmate Mirror",
    movement: "Movement XIII: Domain-Specific Applications (Wealth, Health, Love)",
    scope: "Rae (Ch. 1–60) • Murphy (Ch. 14–15) • Byrne (Ch. 6) • Tolle (Ch. 8)",
    primary_authors: ["Z Z Rae", "Dr. Joseph Murphy", "Rhonda Byrne", "Eckhart Tolle"],
    core_concept: "Interpersonal romantic relationships function as precise psychological mirrors; you never attract the partner you desire with your conscious mind, but the partner who matches your unconscious attachment patterns, self-respect, and emotional maturity.",
    epistemic_audit: "ATTACHMENT THEORY & INTERPERSONAL PSYCHOLOGY. Reflects Bowlby's attachment theory, schema therapy, and boundaries research.",
    key_tenets: [
      "Clearing the Psychic Debris: Attempting to manifest a new soulmate while harboring burning resentment or unresolved grief toward an ex-partner ensures you will manifest another version of the same trauma (Rae).",
      "Tolle's Enlightened Relationships: Transforming relationship from a battleground of egoic need into a shared spiritual practice; ending the cycle of using a partner to fill internal emptiness.",
      "The Anchor of Wholeness: Entering dating looking for someone to 'complete' you guarantees needy codependency; healthy love requires entering relationship as two whole, self-contained sovereign individuals."
    ],
    operational_heuristic: "Become the person you are looking for; your soulmate is the biological and psychological mirror of your own internal self-respect.",
    verbatim_anchor: "“You attract what you are, not what you want. If you want love, be loving. If you want respect, respect yourself first.” — Z Z Rae",
    epistemic_status: "BEHAVIORAL HEURISTIC",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-22-somatic-healing-biology-of-belief",
    unit_number: 22,
    title: "Somatic Healing, The Placebo Effect & The Biology of Belief",
    movement: "Movement XIII: Domain-Specific Applications (Wealth, Health, Love)",
    scope: "Murphy (Ch. 4–5) • Byrne (Ch. 7) • Dispenza (Supernatural, Ch. 5, 7)",
    primary_authors: ["Dr. Joseph Murphy", "Dr. Joe Dispenza", "Rhonda Byrne"],
    core_concept: "The human body is an electro-chemical organism directed by the nervous system; subjective emotional states, chronic stress, and profound belief exert immense influence over cellular regeneration, immune function, and cardiovascular health.",
    epistemic_audit: "CRITICAL MEDICAL AUDIT & PSYCHONEUROIMMUNOLOGY. Affirms the scientifically proven Placebo/Nocebo effect and stress biology; unequivocally condemns Byrne's dangerous assertion that cancer or terminal diseases can be cured solely by smiling and positive thinking without medical intervention.",
    key_tenets: [
      "Psychoneuroimmunology: Chronic fear, resentment, and bitterness flood the body with cortisol and catecholamines, impairing killer T-cells and suppressing autonomic tissue repair (Murphy).",
      "Epigenetic Modulation: Dispenza demonstrates that elevated emotional states upregulate beneficial genes (immune proteins, neurogenesis) and downregulate disease pathways.",
      "Ethical Boundary: Never tell a sick person that they 'caused' their illness through bad thoughts; illness is biological and environmental, not a spiritual moral failure."
    ],
    operational_heuristic: "Use mental affirmations and peaceful emotional states to optimize your nervous system and immune vitality, while always utilizing modern medical science.",
    verbatim_anchor: "“There is only one process of healing and that is faith. There is only one healing power, namely, your subconscious mind.” — Dr. Joseph Murphy",
    epistemic_status: "QUALIFIED PSYCHOSOMATIC HYPOTHESIS",
    materiality: "IMPORTANT"
  },

  // MOVEMENT XIV: PERSUASION, DISPUTES & DAILY PROTOCOL
  {
    id: "unit-23-mind-control-persuasion-defense",
    unit_number: 23,
    title: "Mind Control, Persuasion, and Intellectual Self-Defense",
    movement: "Movement XIV: Persuasion Mechanics & Critical Defense",
    scope: "Dawson (Ch. 1–11)",
    primary_authors: ["Jeffery Dawson"],
    core_concept: "The exact psychological and subconscious principles that allow an individual to reprogram their own mind can be weaponized by external operators (cults, marketers, political demagogues, manipulative partners) to control perception and extract compliance.",
    epistemic_audit: "EMPIRICAL SOCIAL PSYCHOLOGY & PERSUASION TRADECRAFT. Grounded in Cialdini's weapons of influence, neuro-linguistic programming (NLP) mechanics, and coercive persuasion studies.",
    key_tenets: [
      "Pacing and Leading: How a manipulator first matches your vocal tone, posture, and beliefs (pacing) to establish subconscious rapport, then subtly redirects your behavior in the direction of their choosing (leading) (Dawson).",
      "The Dark Side of Manifestation Gurus: Recognizing how commercial cults hijack manifestation jargon (promising godlike wealth while blaming victims for 'low vibrational energy' when their expensive courses fail).",
      "Building Psychological Armor: Maintaining intellectual autonomy, demanding empirical evidence, and testing whether advice fosters genuine internal sovereignty or dependency on an external authority."
    ],
    operational_heuristic: "Audit who controls your subconscious inputs: if someone promises you effortless wealth while asking you to surrender critical logic, they are manipulating you, not teaching manifestation.",
    verbatim_anchor: "“Mind control is the systematic manipulation of another’s thoughts, emotions, and behaviors... The only real defense is absolute self-awareness.” — Jeffery Dawson",
    epistemic_status: "EMPIRICAL SOCIAL PSYCHOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-24-grand-dispute-matrix",
    unit_number: 24,
    title: "The Grand Dialectical Dispute Matrix: Where the Authors Clash",
    movement: "Movement XIV: Persuasion Mechanics & Critical Defense",
    scope: "Cross-Corpus Comparative Analysis (All 14 Authors)",
    primary_authors: ["All 14 Canonical Authors Synthesized"],
    core_concept: "A transparent, forensic breakdown of the irreconcilable contradictions and disagreements within the manifestation corpus, resolving conflicting theories into a coherent, balanced epistemic framework.",
    epistemic_audit: "BKRS CROSS-SOURCE SYNTHESIS STANDARD (Rule 14 & Rule 18). Preserves disagreements and exposes pseudoscientific overreach rather than manufacturing false consensus.",
    key_tenets: [
      "Dispute 1: Action vs. Non-Action. Byrne and Hicks assert vibrational alignment is 99% of creation; refuted by Nafousi, Dispenza, Murphy, and Dawson, who prove that physical action is mandatory to create real-world conduits for results.",
      "Dispute 2: Future Desires vs. Present Moment. Neville demands assuming future fulfillment now; Tolle warns that longing for the future feeds egoic dissatisfaction. Resolved: use presence to anchor peace in the Now, and use assumption to calibrate intentional direction.",
      "Dispute 3: Quantum Physics vs. Cognitive Neuroscience. Byrne claims thoughts bend photons; Dispenza connects quantum observer effect to meditation; science proves the primary mechanism is the Reticular Activating System (RAS) and behavioral probability.",
      "Dispute 4: The Victim Blaming Fallacy. The Unified Codex categorically rejects the claim that victims of war, poverty, or disease 'attracted' their misfortune."
    ],
    operational_heuristic: "Reject magical shortcuts; view manifestation as the convergence of high subconscious self-worth, radical focus, and relentless, high-integrity behavioral execution.",
    verbatim_anchor: "“Synthesis Verdict: Manifestation is not magical physics; it is the systematic alignment of subconscious identity, cognitive attention, and courageous physical action.” — Intellectualist Synthesis",
    epistemic_status: "CROSS-SOURCE SYNTHESIS",
    materiality: "CRITICAL"
  },
  {
    id: "unit-25-master-operational-protocol",
    unit_number: 25,
    title: "The Master 24-Hour Operational Protocol (The Daily Practice Engine)",
    movement: "Movement XIV: Persuasion Mechanics & Critical Defense",
    scope: "Operational Synthesis across Murphy, Goddard, Dispenza, Tolle, Hicks, Nafousi, Arden G., and Gawain",
    primary_authors: ["Unified Operational Synthesis"],
    core_concept: "A rigorous, practical, fluff-free daily execution architecture that integrates the proven subconscious, cognitive, neurobiological, and behavioral principles of the 14 books into a sustainable 24-hour lifestyle routine.",
    epistemic_audit: "OPERATIONAL BLUEPRINT & ACTIONABLE HEURISTICS. Structured for empirical personal experimentation with built-in falsification metrics.",
    key_tenets: [
      "Phase 1: Morning Priming (First 25 Minutes). Digital fast; 5 mins somatic breathwork; 5 mins heart-brain coherence meditation (Dispenza); 5 mins sensory gratitude (Hicks/Gawain); 10 mins RAS calibration reviewing primary vision (Nafousi).",
      "Phase 2: Daytime Execution & Aligned Action (Working Hours). Step outside comfort zones; execute at least one intimidating high-leverage task; practice Arden G.'s detachment mantra when anxiety strikes; enforce boundary filter against 'tests'; anchor in Tolle's presence.",
      "Phase 3: The Envy Transmutation Trigger. Whenever comparison or envy arises during the day, execute the 10-second blessing drill: 'I bless their success and recognize it as proof of my own potential.'",
      "Phase 4: Evening SATS Routine (Last 15 Minutes Pre-Sleep). Enter theta drowsy state; loop a single 10-second first-person sensory scene of fulfillment; drift off feeling relief and gratitude (Murphy/Neville Goddard).",
      "Phase 5: The Empirical Falsification Journal. Weekly tracking of inputs, emotional baselines, actions taken, and concrete real-world opportunities."
    ],
    operational_heuristic: "Execute the 24-hour protocol with relentless consistency for 30 consecutive days; evaluate results based on objective behavioral output and emotional resilience.",
    verbatim_anchor: "“Consistency in the practice of mental discipline is the sole bridge between philosophical contemplation and tangible reality.” — The Master Manifestation Codex",
    epistemic_status: "OPERATIONAL PROTOCOL",
    materiality: "CRITICAL"
  }
];

// Write knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(manifestationUnits, null, 2),
  'utf8'
);
console.log(`Written knowledge-units.json (${manifestationUnits.length} units)`);

// Generate master-notes.md
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

fs.writeFileSync(
  path.join(targetDir, 'master-notes.md'),
  masterNotesContent,
  'utf8'
);
console.log("Written master-notes.md (Expanded Total Replacement Codex)");

// Update index.html
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
      color: var(--text-main);
    }
    .brand-logo {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
    .brand-meta {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-family: var(--font-display);
      font-size: 0.88rem;
      font-weight: 700;
      letter-spacing: 0.14em;
    }
    .brand-sub {
      font-family: var(--font-sans);
      font-size: 0.68rem;
      color: var(--text-subtle);
      letter-spacing: 0.04em;
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .theme-toggle-group, .font-toggle-group {
      display: flex;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 2px;
    }
    .ctrl-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-family: var(--font-sans);
      font-size: 0.76rem;
      padding: 4px 10px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.15s ease;
    }
    .ctrl-btn.active, .ctrl-btn:hover {
      background: var(--bg-card);
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
    }

    .hero-header {
      padding: 64px 24px 44px;
      text-align: center;
      max-width: 960px;
      margin: 0 auto;
    }
    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.74rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-gold);
      margin-bottom: 14px;
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
      gap: 12px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: var(--text-main);
      background: var(--bg-card-subtle);
    }
    .tab-btn.active {
      color: var(--accent-gold);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .main-container {
      max-width: var(--measure);
      margin: 0 auto;
      padding: 0 24px 96px;
    }

    .filter-bar {
      margin-bottom: 32px;
      display: flex;
      gap: 14px;
    }
    .search-input {
      flex: 1;
      padding: 12px 18px;
      border-radius: 6px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 0.94rem;
      outline: none;
      transition: border-color 0.2s ease;
    }
    .search-input:focus { border-color: var(--accent-gold); }

    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 36px 36px 32px;
      margin-bottom: 36px;
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .unit-card:hover { box-shadow: var(--shadow-md); }
    .unit-card-header {
      margin-bottom: 18px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }
    .unit-meta-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      font-family: var(--font-sans);
      font-size: 0.74rem;
      color: var(--text-subtle);
      font-weight: 600;
    }
    .unit-number-tag {
      color: var(--accent-gold);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .unit-badge-epistemic {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.68rem;
      letter-spacing: 0.04em;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
    }
    .unit-title {
      font-family: var(--font-display);
      font-size: 1.42rem;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 6px;
    }
    .unit-scope-bar {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      color: var(--text-muted);
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .unit-core-concept {
      background: var(--bg-card-subtle);
      border-radius: 6px;
      padding: 16px 20px;
      margin-bottom: 20px;
      font-size: 1.05rem;
      font-style: italic;
      color: var(--text-main);
      border-left: 3px solid var(--accent-gold);
    }

    .unit-audit-box {
      font-family: var(--font-sans);
      font-size: 0.82rem;
      color: var(--accent-forest);
      background: #225e4310;
      border: 1px solid #225e4330;
      border-radius: 4px;
      padding: 8px 14px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    .unit-section-title {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-bronze);
      margin: 22px 0 12px;
    }

    .unit-tenets-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }
    .unit-tenet-item {
      position: relative;
      padding-left: 24px;
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

    #view-b, #view-c { display: none; }

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
      border: 1px solid var(--border-color);
    }
    .matrix-side-label {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-bronze);
      margin-bottom: 6px;
    }
    .matrix-verdict {
      background: #225e4312;
      border: 1px solid #225e4335;
      border-radius: 6px;
      padding: 14px 18px;
      font-size: 0.95rem;
      line-height: 1.6;
    }

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
      <span class="cert-pill">14 Movements</span>
      <span class="cert-pill">Discrete Author Attribution Badges</span>
      <span class="cert-pill">Epistemic Pseudoscience Audit</span>
    </div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Manifestation Axiom</div>
      <div class="hero-axiom-quote">
        “Manifestation is not magical physics; it is the systematic alignment of subconscious identity, cognitive attention (Reticular Activating System), neurobiological heart-brain coherence, emotional regulation, and courageous, high-leverage physical action.”
      </div>
    </div>
  </header>

  <nav class="view-navigation">
    <button class="tab-btn active" id="tab-a" onclick="switchView('a')">
      <span>01.</span> Unified Synthesis Journey (25 Units)
    </button>
    <button class="tab-btn" id="tab-b" onclick="switchView('b')">
      <span>02.</span> Cross-Source Dispute Matrix & Contradiction Index
    </button>
    <button class="tab-btn" id="tab-c" onclick="switchView('c')">
      <span>03.</span> The 24-Hour Master Operational Protocol
    </button>
  </nav>

  <main class="main-container">

    <section id="view-a">
      <div class="filter-bar">
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
            ${unit.operational_heuristic}
          </div>

          <div class="unit-quote-box">
            ${unit.verbatim_anchor}
          </div>
        </article>
        `).join('')}
      </div>
    </section>

    <section id="view-b">
      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 1: Action vs. Pure Vibrational Alignment</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <div class="matrix-side-label">The Pop Manifestation Thesis (Byrne, Hicks)</div>
            <p>Physical action is secondary or unnecessary. "99% of your creation is completed before you see any evidence." Forcing action creates resistance; reality rearranges itself effortlessly if vibration matches.</p>
          </div>
          <div class="matrix-side">
            <div class="matrix-side-label">The Behavioral & Neurobiological Reality (Dispenza, Nafousi, Murphy, Dawson)</div>
            <p>Action is the physical currency of reality. Nafousi dismantles the "Secret Couch Fallacy": sitting at home visualizing checks without proactive, uncomfortable behavioral execution is delusional.</p>
          </div>
        </div>
        <div class="matrix-verdict">
          <strong>Unified Synthesis Verdict:</strong> Visualization does not replace action; it <em>conditions the nervous system</em> to execute difficult, high-leverage actions without cognitive paralysis. Alignment without action is daydreaming; action without alignment is burnout.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 2: Future Desires vs. The Present Moment</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <div class="matrix-side-label">The Assumption School (Neville Goddard, Rhonda Byrne)</div>
            <p>Demand mentally projecting awareness into a future fulfilled reality ("Living in the end") to collapse time and imprint the subconscious.</p>
          </div>
          <div class="matrix-side">
            <div class="matrix-side-label">The Philosophy of Presence (Eckhart Tolle)</div>
            <p>Warns that chronic mental future-projection is an egoic delusion that breeds psychological time and anxiety. Creation only ever happens in the timeless Now.</p>
          </div>
        </div>
        <div class="matrix-verdict">
          <strong>Unified Synthesis Verdict:</strong> Anchor your <em>being</em> in the present moment without resistance, while using <em>assumption</em> to calibrate intentional direction. You do not escape the present; you bring the fullness of the vision into the present Now.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 3: Quantum Mysticism vs. Cognitive Neuroscience & Epigenetics</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <div class="matrix-side-label">The Metaphysical Claim (The Secret)</div>
            <p>Thoughts emit literal electromagnetic radio waves that travel through quantum ether to gravitationally attract money, lovers, and parking spots.</p>
          </div>
          <div class="matrix-side">
            <div class="matrix-side-label">The Neurobiological & Epigenetic Reality (Dispenza, Cognitive Science)</div>
            <p>Brainwaves dissipate millimeters from the skull. The real mechanism is the Reticular Activating System (RAS) and Heart-Brain Coherence: elevated emotions upregulate health genes and synchronize neural firing, turning on selective attention filters.</p>
          </div>
        </div>
        <div class="matrix-verdict">
          <strong>Unified Synthesis Verdict:</strong> Reject pseudo-quantum buzzwords. You do not change physical gravity; you change your brain's perceptual threshold and subsequent behavioral decision-making.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 4: Hyper-Specificity vs. General Surrender</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <div class="matrix-side-label">The Hyper-Specific Camp (Murphy, Byrne, Rae, Shinn)</div>
            <p>Define every millimeter of the goal: exact salary down to the cent, specific partner attributes, exact vehicle model and color.</p>
          </div>
          <div class="matrix-side">
            <div class="matrix-side-label">The General Alignment Camp (Hicks, Arden G., Tolle)</div>
            <p>Hyper-specificity triggers anxiety and resistance ("How will it happen? What if it fails?"). Surrendering details and holding the general emotional state of relief is far more effective.</p>
          </div>
        </div>
        <div class="matrix-verdict">
          <strong>Unified Synthesis Verdict:</strong> Use specificity to establish clear <em>direction</em>, but surrender attachment to the <em>mechanism and timeline</em>.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 5: The Victim-Blaming Fallacy</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <div class="matrix-side-label">The Dangerous Overreach (Pop Law of Attraction)</div>
            <p>Asserts that victims of poverty, genocide, domestic violence, or pediatric cancer "attracted" their suffering through low-vibrational thoughts.</p>
          </div>
          <div class="matrix-side">
            <div class="matrix-side-label">The Epistemic Defense (Intellectualist Codex Standard)</div>
            <p>Biological disease, war, and economic oppression operate on external physical, ecological, and geopolitical laws, entirely independent of personal thought frequencies.</p>
          </div>
        </div>
        <div class="matrix-verdict">
          <strong>Unified Synthesis Verdict:</strong> The Just-World Fallacy is categorically rejected. Manifestation applies strictly to an individual's personal agency, emotional resilience, and behavioral optimization—never as a cruel moral judgment on others' suffering.
        </div>
      </div>
    </section>

    <section id="view-c">
      <div class="protocol-step">
        <div class="protocol-time">07:00 – 07:25 | Morning Priming</div>
        <h3 class="protocol-heading">Phase 1: Attention, Heart Coherence & Neural Calibration</h3>
        <ol class="protocol-items">
          <li><strong>Digital Fast:</strong> Zero smartphone, notifications, or news consumption for the first 25 minutes. Protect theta/alpha brainwaves from external reactive hijacking.</li>
          <li><strong>Somatic Breath Reset (3 Mins):</strong> Three minutes of physiological sighs (double inhale through nose, long unforced exhale through mouth) to lower sympathetic heart rate.</li>
          <li><strong>Heart-Brain Coherence Meditation (5 Mins - Dispenza):</strong> Focus attention on the heart center; breathe deeply into the chest and cultivate elevated somatic gratitude or awe.</li>
          <li><strong>Sensory Gratitude Drill (3 Mins - Gawain/Hicks):</strong> Viscerally anchor appreciation for 3 specific, mundane realities (warm water, shelter, heartbeat). Avoid any comparative caveats.</li>
          <li><strong>RAS Vision Calibration (10 Mins - Nafousi):</strong> Review the primary quarterly milestone. Define the single most uncomfortable high-leverage action required today.</li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">09:00 – 17:00 | Daytime Execution</div>
        <h3 class="protocol-heading">Phase 2: Aligned Action, Presence & The Boundary Filter</h3>
        <ol class="protocol-items">
          <li><strong>The Comfort-Zone Step:</strong> Execute the single most intimidating task of the day before noon (the proposal, the difficult conversation, the cold outreach).</li>
          <li><strong>The Arden G. Detachment Anchor:</strong> When timeline anxiety strikes, recite: <em>“What is meant for me will not pass me. I control my input; I release my attachment to the immediate outcome.”</em></li>
          <li><strong>The Tolle Presence Reset:</strong> When feeling overwhelmed, pause for 60 seconds, feel the inner energy of your hands and feet, and witness the thinking mind without judgment.</li>
          <li><strong>The Florence Scovel Shinn Spoken Word Guard:</strong> Speak only words of abundance and peace. Cast your heaviest burdens onto the deeper intelligence.</li>
          <li><strong>The Boundary Test Filter:</strong> When low-standard temptations or breadcrumbs appear, recognize them as extinction tests of your self-worth. Say NO without guilt.</li>
          <li><strong>The Envy Transmutation Drill:</strong> The moment comparison stings your heart on social media, immediately bless that person: <em>“I celebrate your success, and I recognize it as empirical proof of what is possible for me.”</em></li>
        </ol>
      </div>

      <div class="protocol-step">
        <div class="protocol-time">22:00 – 22:30 | Evening SATS Routine</div>
        <h3 class="protocol-heading">Phase 3: Hypnagogic Subconscious Imprinting (Neville / Murphy)</h3>
        <ol class="protocol-items">
          <li><strong>Subconscious De-Escalation:</strong> Turn off all blue-light screens and work discussions 30 minutes before sleep.</li>
          <li><strong>Baudouin Drowsy State:</strong> Lie comfortably in bed, relax all muscles from scalp to toes, and enter the heavy, drowsy hypnagogic state where conscious intellectual resistance drops.</li>
          <li><strong>The 10-Second Looping Scene (Neville Goddard):</strong> Loop a single, first-person sensory scene implying the goal is an accomplished fact (shaking a mentor's hand, reading an acceptance letter, feeling emotional relief).</li>
          <li><strong>Consolidation into Sleep:</strong> Do not force effort; gently hold the feeling of relief and completion as sleep overtakes you.</li>
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
      document.getElementById('view-a').style.display = (view === 'a') ? 'block' : 'none';
      document.getElementById('view-b').style.display = (view === 'b') ? 'block' : 'none';
      document.getElementById('view-c').style.display = (view === 'c') ? 'block' : 'none';

      document.getElementById('tab-a').classList.toggle('active', view === 'a');
      document.getElementById('tab-b').classList.toggle('active', view === 'b');
      document.getElementById('tab-c').classList.toggle('active', view === 'c');
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

fs.writeFileSync(
  path.join(targetDir, 'index.html'),
  htmlContent,
  'utf8'
);
console.log("Written index.html (Expanded Standalone Master Reader)");

console.log("All 14-book Manifestation Codex files updated successfully!");
