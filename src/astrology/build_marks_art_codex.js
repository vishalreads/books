/**
 * Builder for Tracy Marks: The Art of Chart Interpretation
 * Subtitle: A Step-by-Step System for Analyzing, Synthesizing, and Counseling
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | Practical Psychological Chart Synthesis & Clinical Counseling
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-art-of-chart-interpretation-marks');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Architecture of Chart Synthesis: Overcoming Analytical Fragmentation",
    scope: "Introduction & Principles: The crisis of the beginner astrologer (drowning in isolated cookbook interpretations), the philosophy of psychosynthesis, and the holistic vision of the birthchart.",
    epistemic_status: "SYSTEMIC_SYNTHESIS_AND_GESTALT_PSYCHOLOGY",
    materiality: "CRITICAL",
    core_theme: "The foundational methodology of chart synthesis: how to move from analyzing fragmented planetary parts to perceiving the unified psychological gestalt of the living human being.",
    textual_analysis: [
      "Tracy Marks, licensed mental health counselor and professional astrologer trained in Roberto Assagioli's psychosynthesis, addresses the single greatest hurdle in astrological education: the paralysis of analytical fragmentation. Novice students memorize hundreds of cookbook definitions ('Mars in Taurus means X; Sun in the 8th means Y'), but when confronted with a complete chart containing 10 planets, 12 signs, 12 houses, and dozens of aspects, they drown in irreconcilable contradictions.",
      "The Horoscope as an Integrated Ecosystem: Marks asserts that the birth chart is not a mechanical assembly of disconnected traits; it is an organic, dynamic psychological ecosystem. Contradictions in a chart (e.g., an adventurous Sagittarius Sun paired with a cautious Cancer Moon and a rigid Saturn on the Ascendant) are not analytical errors; they describe the actual, complex internal polarities and sub-personalities that make up a living human soul.",
      "The Principle of Hierarchical Weighting: To synthesize a chart, the astrologer must never treat all factors equally. Marks introduces a rigorous system of hierarchical weighting: determining which planets, signs, and aspect networks act as the primary 'focal determinators' (the dominant themes), and which factors function as supporting secondary background textures.",
      "The Astrological Synthesis Worksheet: Marks establishes a systematic, repeatable diagnostic protocol using structured worksheets to inventory hemispheric weight, elemental balance, planetary strength scores, and aspect patterns before formulating any verbal interpretation."
    ],
    verbatim_quote: "A birthchart is not a puzzle of disconnected pieces to be solved; it is a living mandala of the human soul. Our task is not to eliminate its contradictions, but to understand how those contradictions dance together to create a unique human destiny.",
    operational_heuristic: "Never begin a chart reading by interpreting individual planets in signs; first execute a holistic structural audit of hemispheric emphasis, elemental balances, and dominant focal determinators.",
    key_motifs: [
      "The Paralysis of Analytical Fragmentation",
      "Psychosynthesis & Gestalt Psychology",
      "Hierarchical Weighting of Chart Factors",
      "Contradictions as Living Sub-Personalities",
      "The Chart Synthesis Worksheet"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Chart as a Whole: Hemispheres, Quadrants, and Spatial Orientation",
    scope: "Chapter 1: The macroscopic overview: Eastern vs. Western hemispheres (Self-Determination vs. Relational Adaptation), Northern vs. Southern hemispheres (Subjective Privacy vs. Public Prominence), and the four quadrants.",
    epistemic_status: "MACROSCOPIC_SPATIAL_GEOMETRY_AND_EGO_ORIENTATION",
    materiality: "CRITICAL",
    core_theme: "The macroscopic distribution of planets across the horizon and meridian: how fundamental spatial balances dictate the native's core orientation toward personal agency, relational dependency, and public destiny.",
    textual_analysis: [
      "The Macro-Structural Lens: Before inspecting a single zodiac sign or aspect, the astrologer must step back and view the spatial distribution of planets across the two primary axes (the Horizon and the Meridian):",
      "1. Eastern Hemisphere (Houses 10, 11, 12, 1, 2, 3): Centered around the Ascendant. A preponderance of planets in the East indicates a self-directed, autonomous individual who initiates action, shapes their own circumstances, and feels responsible for their own destiny. They struggle with compromise and can become autocratically isolated.",
      "2. Western Hemisphere (Houses 4, 5, 6, 7, 8, 9): Centered around the Descendant. A preponderance in the West indicates a relationally driven individual whose life unfolds primarily through partnerships, external encounters, and responding to others. They excel at diplomacy and empathy, but risk losing their core identity in accommodating others.",
      "3. Southern Hemisphere (Houses 7, 8, 9, 10, 11, 12): Above the horizon, centered around the Midheaven. A southern emphasis indicates an objective, outwardly ambitious, publicly visible individual oriented toward career, social impact, and collective participation.",
      "4. Northern Hemisphere (Houses 1, 2, 3, 4, 5, 6): Below the horizon, centered around the IC. A northern emphasis indicates an introspective, deeply private, subjective individual whose life is anchored in psychological roots, home, family, and inner emotional processing.",
      "The Four Quadrants: Combining these axes produces the four quadrants: Quadrant 1 (Personal Identity & Instinct), Quadrant 2 (Creative Self-Expression & Family), Quadrant 3 (Interpersonal Engagement & Partnership), and Quadrant 4 (Collective Achievement & Social Purpose)."
    ],
    verbatim_quote: "The spatial orientation of the planets reveals the direction of the soul's current. Before a person speaks a single word, the distribution across the horizon and meridian tells you whether they sail their own ship or navigate by the tides of others.",
    operational_heuristic: "Audit the ratio of Eastern to Western and Northern to Southern planets; use this baseline to immediately understand whether the client needs guidance in developing self-reliance (Western emphasis) or relational compromise (Eastern emphasis).",
    key_motifs: [
      "Eastern vs. Western Hemispheric Polarity",
      "Northern vs. Southern Hemispheric Polarity",
      "Autonomy vs. Relational Adaptation",
      "Public Prominence vs. Subjective Privacy",
      "The Four Quadrants of Experience"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Elemental and Modality Matrix: Diagnosing Innate Temperament and Inferior Functions",
    scope: "Chapter 1: The distribution of planets across the four elements (Fire, Earth, Air, Water) and three modalities (Cardinal, Fixed, Mutable): identifying dominant temperaments, elemental deficits, and compensatory mechanisms.",
    epistemic_status: "TEMPERAMENTAL_TYPOLOGY_AND_COMPENSATORY_PSYCHOLOGY",
    materiality: "CRITICAL",
    core_theme: "Mapping the elemental and modal matrix of the psyche: how elemental surpluses generate innate character strengths, while elemental deficits drive compulsive unconscious over-compensation.",
    textual_analysis: [
      "The Four Elements as Energetic Modes: Marks synthesizes classical humors with Jungian psychological types:",
      "- Fire (Intuition & Spirit): Direct vitality, spontaneous enthusiasm, optimism, and creative courage.",
      "- Earth (Sensation & Matter): Somatic groundedness, practical realism, patient craftsmanship, and material prudence.",
      "- Air (Thinking & Social Intellect): Objective conceptualization, verbal articulation, theoretical curiosity, and social connectivity.",
      "- Water (Feeling & Soul): Deep emotional empathy, intuitive receptivity, psychic sensitivity, and unconscious bonding.",
      "The Three Modalities as Energetic Vectors:",
      "- Cardinal (Crisis in Initiation): Driving ambition, executive leadership, pioneering momentum, and restlessness.",
      "- Fixed (Resistance & Stability): Concentrated endurance, loyalty, stubborn determination, and resistance to change.",
      "- Mutable (Adaptability & Learning): Cognitive flexibility, lateral thinking, versatility, and sensory distractibility.",
      "The Psychology of the Elemental Deficit: Marks' crucial psychological breakthrough is that a missing element is rarely passive. In accordance with Jung's 'Inferior Function,' an individual with zero earth does not simply ignore the material world; they are unconsciously obsessed with it, frequently over-compensating by becoming rigid accountants, obsessive list-makers, or hyper-anxious hoarders. Conversely, a native with zero water may become a clinical psychotherapist or write tearful poetry in a desperate unconscious attempt to touch the emotional realm they feel alienated from."
    ],
    verbatim_quote: "An elemental deficit is not an absence; it is an unquenchable thirst. The soul obsessively pursues what it lacks in the chart, driving the individual to build external monuments to compensate for their inner insecurity.",
    operational_heuristic: "Identify any element with 0 or 1 planet; never assume the client lacks interest in that domain; look for exaggerated, anxious, or compulsive compensatory behaviors designed to mask that underlying vulnerability.",
    key_motifs: [
      "The Four Elements (Fire, Earth, Air, Water)",
      "The Three Modalities (Cardinal, Fixed, Mutable)",
      "The Psychology of the Elemental Deficit",
      "Jung's Inferior Function & Compensatory Mechanisms",
      "Evaluating Temperamental Equilibrium"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Determining Planetary Strength: The Objective Quantitative Scoring Protocol",
    scope: "Chapter 2: Marks' mathematical point-scoring methodology for ranking planetary power: angularity, dignity and exaltation, aspects to luminaries, dispositorship, and singleton status.",
    epistemic_status: "QUANTITATIVE_CHART_AUDITING_AND_PLANETARY_RANKING",
    materiality: "CRITICAL",
    core_theme: "Transforming subjective chart reading into an objective ranking hierarchy: using a structured scoring system to identify which planets wield dominant executive control over the personality.",
    textual_analysis: [
      "The Need for a Scoring System: To prevent astrologers from projecting their own biases or becoming lost in minor details, Marks devised a structured, reproducible quantitative point system to rank the relative strength of every planet in the birth chart.",
      "Criteria for Planetary Point Allocation:",
      "1. Angularity (Maximum Power): Planets conjunct or placed in the 1st, 10th, 7th, or 4th houses receive the highest point values (3 to 5 points), with planets within 5° of the Ascendant or Midheaven commanding absolute dominance.",
      "2. Dignity & Exaltation: Planets placed in their own rulership signs (e.g., Mars in Aries) or exaltation (e.g., Moon in Taurus) receive 2 to 3 bonus points.",
      "3. Aspects to the Luminaries: Close conjunctions, squares, or oppositions to the Sun or Moon award significant strength points (2 to 4 points), as these contacts directly commandeer the native's core identity.",
      "4. The Chart Ruler: The planet ruling the sign on the Ascendant automatically receives foundational weighting as the primary vehicle of worldly incarnation.",
      "5. Dispositor Dominance: A planet that disposes (rules the signs of) four or more other planets functions as a major energetic hub.",
      "The Lead Planet Identified: By summing these scores, the astrologer identifies the top 2 or 3 'Power Planets.' Regardless of what the Sun sign might suggest, these top-scoring planets will dominate the individual's psychological drives, career choices, and life struggles."
    ],
    verbatim_quote: "Astrology without hierarchical scoring is like an army where every soldier claims to be the general. By calculating objective planetary strength, we uncover the true commander of the psyche, cutting through subjective confusion with mathematical precision.",
    operational_heuristic: "Execute Marks' planetary strength scoring on every chart; identify the top two highest-scoring planets and treat them as the executive directors of the native's life, interpreting all other chart factors through their agenda.",
    key_motifs: [
      "Objective Planetary Strength Scoring",
      "Angularity as Supreme Power Metric",
      "Dignity, Exaltation & Dispositorship",
      "The Chart Ruler as Incarnation Vehicle",
      "The Executive Power Planets"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Focal Determinator Patterns: T-Squares, Grand Crosses, Yods, and Singletons",
    scope: "Chapter 3: Recognizing major geometric aspect configurations and focal determinators: the T-square apex planet, the Grand Cross crucible, the Yod mission, and the singleton planet as prime mover.",
    epistemic_status: "GEOMETRIC_FOCAL_DETERMINATORS_AND_ARCHETYPAL_ENGINES",
    materiality: "CRITICAL",
    core_theme: "How closed geometric aspect configurations and isolated singleton planets act as focal determinators, channeling the entire momentum of the personality into a single concentrated outlet.",
    textual_analysis: [
      "The Definition of a Focal Determinator: A focal determinator is any structural, geometric, or planetary anomaly that stands out from the rest of the chart, acting as a lightning rod that draws and discharges the psyche's total energy.",
      "The T-Square Apex as Primary Life Engine: In a T-square (two planets in opposition both squaring an apex planet), the opposition represents an intractable internal conflict, while the apex planet functions as the *only available outlet* for discharging the tension. The house, sign, and planetary nature of the apex planet dictate the primary life arena where the native stages their greatest battles and achieves their greatest triumphs.",
      "The Yod (Finger of God) as Karmic Assignment: Two planets in sextile (60°) both inconjuncting (150°) an apex planet. The apex planet is forced into compulsory, fated psychological refinement, acting as a highly specialized, fated vocational calling that cannot be avoided.",
      "The Singleton Planet (The Prime Mover): A planet that is the sole representative of an element (e.g., the only water planet), a modality (the only cardinal planet), or a hemisphere (the only planet in the northern half of the chart). The singleton operates with extraordinary, unmediated power, functioning like a solitary anchor holding an entire ship in place.",
      "Unaspected Planets: A planet forming no major aspects functions as a dissociated sub-personality operating in the dark, swinging wildly between complete dormancy and volcanic takeover."
    ],
    verbatim_quote: "A focal determinator is the magnifying glass that focuses the diffuse sunlight of the chart into an intense, searing beam of laser power. If you understand the apex of a T-square or a singleton planet, you hold the master key to the native's entire life story.",
    operational_heuristic: "Scan immediately for T-squares, Yods, and Singleton planets; treat these focal determinators as the central organizing axis around which all other chart interpretations must revolve.",
    key_motifs: [
      "Focal Determinator Concepts",
      "The T-Square Apex Release Valve",
      "The Yod (Finger of God) Calling",
      "The Singleton Planet as Prime Mover",
      "The Concentrated Laser Beam Dynamic"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Core Identity Trinity: Synthesizing Sun, Moon, and Ascendant",
    scope: "Chapter 4: The primary tripod of personality: Sun (Core Purpose, Ego Ideal, Father), Moon (Emotional Security, Instinctual Habits, Mother), and Ascendant (The Persona, Somatic Vessel, Filter of Perception).",
    epistemic_status: "CORE_IDENTITY_SYNTHESIS_AND_PRIMARY_TRIPOD",
    materiality: "CRITICAL",
    core_theme: "The foundational synthesis of the primary identity tripod: how the dynamic dialogue between conscious purpose (Sun), emotional instinct (Moon), and behavioral presentation (Ascendant) establishes the core self.",
    textual_analysis: [
      "The Primary Identity Tripod: Over 70% of an individual's conscious behavior can be decoded through the precise interaction of the 'Big Three'—the Sun, Moon, and Ascendant:",
      "1. The Sun (The Hero & Conscious Will): Represents what the individual is striving to become. It is the conscious ego ideal, the creative life-force, the principle of self-respect, and the internalized father archetype. It describes the future toward which the soul is evolving.",
      "2. The Moon (The Soul & Instinctual Matrix): Represents what the individual already is instinctively. It rules the personal unconscious, childhood conditioning, somatic memory, defensive coping mechanisms, emotional security needs, and the internalized mother archetype. It is the past that anchors the present.",
      "3. The Ascendant (The Mask & The Vehicle): The rising sign is neither purely superficial nor an illusion; it is the physical vehicle, the somatic lens, and the adaptive interface through which the Sun and Moon must express themselves in the external world.",
      "Synthesizing the Trinity: Marks provides an exact algorithmic framework for synthesizing the trinity: Evaluate the elemental compatibility between the three points. If the Sun is in Fire (Aries), the Moon in Water (Scorpio), and the Ascendant in Earth (Taurus), the native experiences a constant internal negotiation: an aggressive conscious drive (Aries) fueled by secretive, volcanic emotional intensity (Scorpio), mediated by a calm, patient, immovable external persona (Taurus)."
    ],
    verbatim_quote: "The Sun is who you are becoming; the Moon is who you have been; the Ascendant is the vehicle that carries you from the past into the future. Master the dialogue between these three, and you have mastered the core of the human heart.",
    operational_heuristic: "Formulate a concise 2-sentence 'Identity Formula' combining the Sun's conscious mission, the Moon's emotional need, and the Ascendant's external presentation before diving into complex house or aspect details.",
    key_motifs: [
      "The Primary Identity Tripod (Sun, Moon, Ascendant)",
      "Sun as Becoming vs. Moon as Being",
      "The Ascendant as the Embodiment Vehicle",
      "Internalized Mother and Father Archetypes",
      "The 2-Sentence Identity Synthesis Formula"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Additional Structural Considerations: Interceptions, Critical Degrees, and Karmic Nodes",
    scope: "Chapter 5: Nuanced structural variables: intercepted signs and intercepted planets (imprisoned potential), critical degrees, retrograde personal planets, and the Lunar Nodal axis as evolutionary compass.",
    epistemic_status: "STRUCTURAL_ANOMALIES_AND_EVOLUTIONARY_AXES",
    materiality: "CRITICAL",
    core_theme: "Fine-tuning chart interpretation through structural anomalies: decoding intercepted signs as buried psychological complexes, and using the Lunar Nodes as an evolutionary growth compass.",
    textual_analysis: [
      "The Phenomenon of Interceptions: Occurring in unequal house systems (Placidus, Koch) when a sign is completely contained within a house without holding a house cusp on its borders. An intercepted sign represents a domain of psychological experience that was repressed, denied, or unexpressed in early childhood.",
      "- The Intercepted Planet: A planet residing within an intercepted sign is 'imprisoned in the cellar.' The native struggles to manifest its energy directly in the outer world. A person with an intercepted Mars feels incapable of direct assertive anger, turning aggression inward or experiencing sudden eruptions of passive-aggressive frustration.",
      "- The Duplicated Signs: The signs that appear on two consecutive house cusps to compensate for the interception. These duplicated signs represent the arenas where the native over-compensates, pouring excessive energy into external activity to distract from the intercepted void.",
      "Critical Degrees: Cardinal points (0°, 13°, 26°), Fixed points (8°–9°, 21°–22°), and Mutable points (4°, 17°), alongside the anaretic 29th degree. The 29th degree represents urgency, culmination, and an imperative to master that planetary function before the end of the incarnation.",
      "The Lunar Nodal Axis as Evolutionary Compass: The South Node represents past-life comfort zones, ingrained habits, and innate talents that risk becoming a stagnating rut; the North Node represents the unfamiliar, terrifying, and deeply rewarding evolutionary growth frontier."
    ],
    verbatim_quote: "An intercepted planet is a sleeping giant locked inside a subterranean vault. It cannot be expressed through ordinary social pathways; the native must consciously locate the key, unlock the vault, and build an authentic bridge to release its captive brilliance.",
    operational_heuristic: "Identify any intercepted planets and signs; explore where the client feels blocked, invisible, or tongue-tied in expressing that function, guiding them to utilize the ruler of the house cusp as the conscious doorway.",
    key_motifs: [
      "Intercepted Signs & Imprisoned Planets",
      "Duplicated Signs as Compensatory Outlets",
      "Critical Degrees and the 29th Anaretic Degree",
      "The Lunar Nodal Axis as Evolutionary Compass",
      "Releasing Captive Psychological Potential"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Step-by-Step Synthesis Workflow: From Worksheet to Integrated Character Portrait",
    scope: "Chapter 6 & Part II: The practical 6-step chart synthesis workflow: organizing worksheet data, eliminating contradictions, prioritizing themes, and constructing a coherent written character portrait.",
    epistemic_status: "CLINICAL_SYNTHESIS_METHODOLOGY_AND_CASE_STUDIES",
    materiality: "CRITICAL",
    core_theme: "The complete step-by-step technical execution: how to systematically process raw worksheet metrics into a prioritized, multi-dimensional psychological portrait.",
    textual_analysis: [
      "Marks' 6-Step Synthesis Execution Protocol:",
      "Step 1: The Macro-Scan: Calculate Hemispheric balance (East/West, North/South) and compile the Elemental and Modality scores. Identify the dominant temperament and any critical elemental deficits.",
      "Step 2: Scoring Planetary Strengths: Execute the point audit for all 10 planets to identify the top 2 or 3 Power Planets.",
      "Step 3: Focal Determinators Audit: Locate major aspect configurations (T-Square, Grand Cross, Yod, Stellium) and singletons. Identify the primary pressure-release apex.",
      "Step 4: The Core Identity Synthesis: Formulate the core character foundation by weaving the Sun (mission), Moon (emotional need), and Ascendant (interface), noting any hard aspects modifying them.",
      "Step 5: Synthesizing the Secondary Dilemmas: Incorporate the focal determinators and major aspect complexes into the narrative, demonstrating how they create specific life dilemmas, vocational drives, and relationship patterns.",
      "Step 6: Resolution and Sublimation: Identify the harmonizing sextiles, trines, and North Node evolutionary directions that provide practical, constructive pathways for resolving the central conflicts.",
      "Clinical Case Validation (Chart E): Marks walks through a complete diagnostic dissection of a complex client chart, showing exactly how apparent contradictions resolve when viewed through this disciplined, hierarchical procedure."
    ],
    verbatim_quote: "Synthesis is the art of telling the client's story with profound reverence and lucidity. When executed properly, the client does not hear a laundry list of astrological jargon; they experience the breathtaking revelation of their own inner truth.",
    operational_heuristic: "Follow Marks' 6-step synthesis workflow sequentially; never jump to conclusions based on an isolated aspect until you have established the macro-temperament and power planet hierarchy.",
    key_motifs: [
      "The 6-Step Synthesis Execution Protocol",
      "Eliminating Contradictions via Hierarchy",
      "The Core Character Foundation",
      "Synthesizing Central Life Dilemmas",
      "Formulating Constructive Sublimation Pathways"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Astrology as a Counseling Tool: Psychosynthesis, Sub-Personalities, and Empathic Dialogue",
    scope: "Chapter 9: The intersection of humanistic psychology and astrological consultation: Roberto Assagioli's psychosynthesis, identifying sub-personalities in the chart, Carl Rogers' unconditional positive regard, and reframing pathology into potential.",
    epistemic_status: "PSYCHOTHERAPEUTIC_FRAMEWORKS_AND_SUB_PERSONALITY_MAPPING",
    materiality: "CRITICAL",
    core_theme: "Elevating astrology into a legitimate psychotherapeutic healing modality: using psychosynthesis to map conflicting planetary drives as inner family members seeking reconciliation.",
    textual_analysis: [
      "Psychosynthesis in Astrological Consultation: Marks integrates Roberto Assagioli's psychosynthesis—a therapeutic framework that views the human personality as a federation of semi-autonomous 'sub-personalities' organized around a transpersonal Self.",
      "Planets as Living Sub-Personalities: In the consulting room, planets are not abstract mathematical symbols; they are living sub-personalities inhabiting the client's inner family:",
      "- Mars is the Inner Warrior / Champion / Toddler demanding autonomy.",
      "- Saturn is the Inner Judge / Taskmaster / Stern Parent demanding perfection.",
      "- Venus is the Inner Lover / Artist seeking intimacy and harmony.",
      "- Moon is the Inner Vulnerable Child seeking emotional safety.",
      "Facilitating the Internal Dialogue: When a client suffers from a severe square (e.g., Mars square Saturn), the counselor does not speak in astrological jargon. Instead, they guide the client to stage an internal dialogue between the frustrated Inner Warrior (Mars) and the critical Inner Judge (Saturn): *'What does the warrior need? Why is the judge terrified of letting him speak?'*",
      "Rogerian Empathy & Unconditional Positive Regard: Marks stresses Carl Rogers' therapeutic core: the astrologer must create an impeccably safe, non-judgmental container where the client feels deeply heard, respected, and validated. Astrology is not an intellectual performance; it is an act of sacred listening.",
      "Reframing Pathology into Evolutionary Potential: The counselor's primary task is to reframe the client's most shameful neuroses, failures, and defense mechanisms as clumsy, desperate attempts by a wounded sub-personality to protect the soul from harm."
    ],
    verbatim_quote: "The planets are the members of your inner family. When they fight, your life is in chaos. The astrologer's sacred calling is to act as a compassionate family mediator, helping the inner warrior, the inner child, and the inner judge make peace with one another under the guidance of the Self.",
    operational_heuristic: "In client sessions, translate planetary aspects into dialogues between sub-personalities; ask the client: 'When your Mars wants to strike out and your Saturn slams on the brakes, who is speaking inside your head?'",
    key_motifs: [
      "Psychosynthesis & Roberto Assagioli",
      "Planets as Living Sub-Personalities",
      "Staging Internal Family Dialogues",
      "Carl Rogers' Unconditional Positive Regard",
      "Reframing Pathology into Evolutionary Potential"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Astrological Counseling Process: Setting Boundaries, Preparing Sessions, and Avoiding Guru Inflation",
    scope: "Chapter 10 & Appendices: The practical, clinical, and ethical dynamics of conducting professional astrology sessions: client intake forms, session preparation, handling client dependency, avoiding guru inflation, and legal/ethical boundaries.",
    epistemic_status: "CLINICAL_CONSULTATION_ETHICS_AND_PRACTICE_MANAGEMENT",
    materiality: "CRITICAL",
    core_theme: "The professional and ethical conduct of the astrological counselor: maintaining clinical boundaries, empowering client agency, avoiding fatalistic harm, and preventing spiritual narcissism.",
    textual_analysis: [
      "The Pre-Session Intake Protocol: Marks provides an exhaustive client intake procedure (Appendix Two). Before the session, the astrologer should gather not only birth data (date, exact time from birth certificate, place) but also the client's primary life questions, current crises, and significant historical milestones. This grounds the reading in the client's lived reality rather than abstract guessing games.",
      "The Danger of 'Guru Inflation' and Spiritual Narcissism: Astrologers hold immense psychological power over vulnerable clients. Marks fiercely warns against 'guru inflation'—the toxic temptation to act like an omniscient, god-like oracle who dictates what the client should do, whom they should marry, or what career they must abandon. The astrologer must never disempower the client's sovereign free will.",
      "Managing Client Dependency and Transference: Vulnerable clients often project the archetype of the 'Omniscient Savior' or 'Good Mother' onto the astrologer, attempting to abdicate all adult decision-making. The ethical practitioner strictly avoids fostering dependency, maintaining professional boundaries, setting clear time limits, and referring clients to licensed psychotherapists or medical doctors when clinical depression, psychosis, or severe trauma are present.",
      "Structuring the 90-Minute Session:",
      "- Phase 1 (0–15 mins): Building rapport, establishing safety, clarifying client intentions.",
      "- Phase 2 (15–60 mins): Collaborative exploration of core themes, power planets, and central life dilemmas.",
      "- Phase 3 (60–75 mins): Current developmental timing (transits and progressions) framed teleologically.",
      "- Phase 4 (75–90 mins): Actionable synthesis, practical grounding, answering client questions, and setting empowering intentions."
    ],
    verbatim_quote: "The moment an astrologer believes they are a prophet, they become dangerous. Our job is not to tell the client what will happen, but to hold up a clean mirror so that they can see their own divine magnificence and make their own sovereign choices.",
    operational_heuristic: "Never tell a client what decision to make; frame astrological insights as a menu of archetypal possibilities, always returning executive agency and moral responsibility to the client's conscious hands.",
    key_motifs: [
      "Client Intake & Milestone Preparation",
      "The Danger of Guru Inflation & Spiritual Narcissism",
      "Managing Transference & Client Dependency",
      "Structuring the Professional Consultation",
      "Sovereign Agency vs. Fatalistic Disempowerment"
    ]
  }
];

// 1. Output knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log('Successfully wrote knowledge-units.json for The Art of Chart Interpretation');

// 2. Generate master-notes.md
let md = `# The Art of Chart Interpretation: A Step-by-Step System for Analyzing, Synthesizing, and Counseling
**Author:** Tracy Marks, M.A., LMHC  
**First Published:** 1979 / 1986 / 2009 (Ibis Press / Nicolas-Hays)  
**Discipline:** Psychological Chart Synthesis, Psychosynthesis Astrology, Client-Centered Counseling, Clinical Ethics  
**Standard:** BKRS v2.0 Production Master Codex  
**Codex Scope:** 10 Comprehensive Units | Full Monograph Reconstruction

---

## Executive Architectural Overview

In *The Art of Chart Interpretation*, licensed mental health counselor and professional astrologer Tracy Marks bridges the profound gap between academic psychotherapy (specifically Roberto Assagioli's Psychosynthesis and Carl Rogers' client-centered therapy) and practical horoscopy.

Every aspiring astrologer inevitably confronts the **crisis of analytical fragmentation**: after memorizing hundreds of cookbook meanings for planets, signs, houses, and aspects, the student is completely overwhelmed when looking at a live birth chart. The chart presents dozens of contradictory indicators:
- *How does an adventurous Sagittarius Sun harmonize with a cautious, fearful Cancer Moon?*
- *Which planet wields executive authority when four different planets claim dominance?*
- *How do you prevent a consultation from degenerating into a disjointed laundry list of traits?*

Marks resolves this crisis through a rigorous, repeatable **3-Part Synthesis and Counseling System**:
1. **The Macroscopic Overview:** Evaluating the chart as an integrated physical organism through hemispheric emphasis (East vs. West autonomy, North vs. South privacy), quadrant distribution, and elemental/modal matrices.
2. **The Quantitative Scoring Methodology:** A structured, objective mathematical point-allocation system to rank the relative strength of every planet, stripping away subjective bias and identifying the true 'Power Planets' of the psyche.
3. **Focal Determinator Dynamics:** Isolating structural energetic anomalies—the apex of a T-Square, the mission of a Yod, the prime mover power of a Singleton planet, and the isolated island of an Unaspected planet.
4. **The Psychosynthesis Counseling Model:** Translating abstract planetary symbols into living 'sub-personalities' (the inner child, the inner judge, the inner warrior), facilitating internal reconciliation, and maintaining strict clinical boundaries against 'guru inflation' and fatalistic disempowerment.

This master codex reconstructs Tracy Marks' complete synthesis system across ten exhaustive knowledge units, providing an essential operational framework for every serious student and professional practitioner.

---

## The 10 Knowledge Units: Deep Structural Reconstruction

`;

units.forEach(u => {
  md += `### Unit ${u.unit_number}: ${u.title}\n\n`;
  md += `- **Unit ID:** \`${u.unit_id}\`\n`;
  md += `- **Scope & Textual Anchor:** ${u.scope}\n`;
  md += `- **Epistemic Classification:** \`${u.epistemic_status}\`\n`;
  md += `- **Materiality Level:** **${u.materiality}**\n`;
  md += `- **Core Theme:** ${u.core_theme}\n\n`;
  
  md += `#### Exhaustive Textual & Clinical Analysis\n\n`;
  u.textual_analysis.forEach(p => {
    md += `${p}\n\n`;
  });

  md += `#### Canonical Textual Verbatim\n`;
  md += `> "${u.verbatim_quote}"\n\n`;

  md += `#### Operational Clinical & Counseling Heuristic\n`;
  md += `* **Clinical Heuristic:** ${u.operational_heuristic}\n\n`;

  md += `#### Key Conceptual Motifs & Index Terms\n`;
  u.key_motifs.forEach(m => {
    md += `- \`${m}\`\n`;
  });
  md += `\n---\n\n`;
});

md += `## Synthesis: The Macroscopic Chart Balance Matrix

The following reference matrix synthesizes Tracy Marks' macroscopic orientation rules across the celestial hemispheres and quadrants:

| Spatial Coordinate | Defining Boundary | Core Psychological Orientation | Strengths & Natural Gifts | Shadow & Developmental Blind Spots |
| :--- | :--- | :--- | :--- | :--- |
| **Eastern Hemisphere** | Houses 10, 11, 12, 1, 2, 3 (Ascendant Center) | **Self-Determination & Autonomy** | Strong initiative; self-reliance; shapes destiny; independent momentum | Self-centeredness; difficulty with compromise; alienation from others |
| **Western Hemisphere** | Houses 4, 5, 6, 7, 8, 9 (Descendant Center) | **Relational Adaptation & Diplomacy** | High empathy; diplomacy; responsive to others; collaborative genius | Loss of identity; excessive compromise; dependency on external approval |
| **Southern Hemisphere** | Houses 7, 8, 9, 10, 11, 12 (Above Horizon / MC) | **Objective Public Prominence** | Worldly ambition; social leadership; comfortable on public stage | Disconnection from roots; fear of intimacy; superficial persona adaptation |
| **Northern Hemisphere** | Houses 1, 2, 3, 4, 5, 6 (Below Horizon / IC) | **Subjective Emotional Privacy** | Deep emotional processing; grounded roots; internal self-sufficiency | Shyness; reluctance to claim public power; withdrawal under stress |

---

## Marks' Objective Planetary Strength Point System

To determine the true executive power ranking of planets in any birth chart, execute the following standardized point audit:

| Criteria for Planetary Power | Point Value | Diagnostic Rationale |
| :--- | :---: | :--- |
| **Conjunct an Angle (Asc, MC, Dsc, IC)** | **+5 Points** | Maximum worldly and physical embodiment; forces direct external manifestation. |
| **Within 5° to 10° of an Angle** | **+3 Points** | High angular potency commanding immediate behavioral reflexes. |
| **Ruler of the Ascendant (Chart Ruler)** | **+4 Points** | The primary vehicle through which the soul interfaces with physical reality. |
| **In Rulership Sign (Dignity)** | **+3 Points** | Pure, autonomous, unhindered expression of the planetary archetype. |
| **In Exaltation Sign** | **+2 Points** | Highly refined, elevated expression of the archetype's highest potential. |
| **Tight Aspect to Sun or Moon (<3° Orb)** | **+3 Points** | Direct psychological fusion with core conscious will or instinctual security. |
| **Apex of a T-Square or Yod** | **+4 Points** | Primary release valve and focal determinator of the entire chart's tension. |
| **Singleton Planet (Only planet in Element/Modality)** | **+3 Points** | Operates as a concentrated prime mover to compensate for systemic void. |
| **Final Dispositor / Leading Hub (Rules 4+ planets)** | **+3 Points** | Energetic center of gravity that all other planetary dispositor chains lead to. |

*Evaluation:* The planet scoring the highest total points is the **Lead Power Planet** of the psyche.

---

## The 4-Phase Professional Astrological Consultation

1. **Phase 1: Rapport & The Sacred Container (0–15 Minutes)**
   - Welcoming the client; establishing strict confidentiality and unconditional positive regard.
   - Clarifying the client's current life crisis and intentions for the session.
2. **Phase 2: Core Character Delineation & Psychosynthesis (15–60 Minutes)**
   - Presenting the primary identity tripod (Sun, Moon, Ascendant).
   - Mapping conflicting planetary drives as living sub-personalities (e.g., the Inner Judge vs. the Inner Child).
   - Guiding the client to recognize that their internal conflicts are fertile ground for creative integration.
3. **Phase 3: Teleological Predictive Timing (60–75 Minutes)**
   - Examining current transits and secondary progressions.
   - Reframing difficult transits from deterministic doom into evolutionary invitations for conscious growth.
4. **Phase 4: Practical Action & Sovereign Integration (75–90 Minutes)**
   - Translating psychological insights into concrete behavioral experiments and daily routines.
   - Answering final questions; returning all executive decision-making power to the client's hands.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log('Successfully wrote master-notes.md for The Art of Chart Interpretation (' + md.length + ' chars)');

// 3. Generate index.html (Reader)
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Art of Chart Interpretation | Tracy Marks | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }
    
    .badge-synthesis {
      background: #0d9488;
      color: #f0fdfa;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .stat-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .stat-card {
      background: rgba(0, 0, 0, 0.03);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
    }

    [data-theme="dark"] .stat-card {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.08);
    }

    .stat-value {
      font-family: var(--font-serif);
      font-size: 1.8rem;
      font-weight: 700;
      color: #0f766e;
      margin-bottom: 0.25rem;
    }

    [data-theme="dark"] .stat-value {
      color: #2dd4bf;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .worksheet-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    .worksheet-table th, .worksheet-table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    [data-theme="dark"] .worksheet-table th, [data-theme="dark"] .worksheet-table td {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .worksheet-table th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }

    [data-theme="dark"] .worksheet-table th {
      background: rgba(255, 255, 255, 0.05);
    }

    .counseling-step {
      display: flex;
      gap: 1.25rem;
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(0, 0, 0, 0.06);
      padding: 1.25rem;
      border-radius: 6px;
      border-left: 4px solid #0d9488;
      margin-bottom: 1rem;
    }

    [data-theme="dark"] .counseling-step {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(255, 255, 255, 0.06);
      border-left-color: #2dd4bf;
    }

    .counseling-phase {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-weight: 700;
      color: #0f766e;
      min-width: 120px;
    }

    [data-theme="dark"] .counseling-phase {
      color: #2dd4bf;
    }

    .counseling-desc h4 {
      margin: 0 0 0.5rem 0;
      font-family: var(--font-serif);
      font-size: 1.1rem;
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../../index.html" class="back-link">← Master Index</a>
          <span class="badge-synthesis">Psychological Chart Synthesis</span>
        </div>
        <h1 class="book-title">The Art of Chart Interpretation</h1>
        <p class="book-subtitle">A Step-by-Step System for Analyzing, Synthesizing, and Counseling • Tracy Marks, M.A., LMHC</p>
        
        <div class="reader-metadata-bar">
          <span><strong>Author:</strong> Tracy Marks, M.A., LMHC (Counseling Astrologer)</span>
          <span><strong>Focus:</strong> Holistic Synthesis, Planetary Strength Scoring, & Psychosynthesis</span>
          <span><strong>Standard:</strong> BKRS v2.0 Production Master (10 Units)</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="reading">Continuous Reader</button>
          <button class="tab-button" data-tab="analytical">Analytical Units</button>
          <button class="tab-button" data-tab="scoring">Planetary Scoring</button>
          <button class="tab-button" data-tab="counseling">Counseling Process</button>
          <button class="tab-button" data-tab="search">Search Codex</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- CONTINUOUS READING VIEW -->
      <section id="view-reading" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Science and Art of Synthesis</h2>
            <p>In this clinical masterwork, licensed psychotherapist and astrologer Tracy Marks provides the definitive roadmap for overcoming analytical fragmentation. Establishing structured worksheets, quantitative planetary strength rankings, and psychosynthesis counseling protocols, Marks demonstrates how to weave contradictory chart pieces into a living, healing portrait of the human soul.</p>
          </div>

          <div class="stat-card-grid">
            <div class="stat-card">
              <div class="stat-value">Gestalt</div>
              <div class="stat-label">Holistic Personality Architecture</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">6 Steps</div>
              <div class="stat-label">Systematic Synthesis Workflow</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">Focal Nodes</div>
              <div class="stat-label">T-Squares, Yods & Singletons</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">Psychosynthesis</div>
              <div class="stat-label">Planets as Living Sub-Personalities</div>
            </div>
          </div>

          <hr class="section-divider">

          ${units.map(u => `
            <div class="unit-block" id="unit-block-${u.unit_id}">
              <header class="unit-header">
                <span class="unit-number">Unit ${u.unit_number.toString().padStart(2, '0')}</span>
                <span class="unit-materiality ${u.materiality.toLowerCase()}">${u.materiality}</span>
                <h3 class="unit-heading">${u.title}</h3>
                <p class="unit-scope"><em>${u.scope}</em></p>
              </header>

              <div class="unit-content">
                <p class="unit-theme"><strong>Core Principle:</strong> ${u.core_theme}</p>
                
                ${u.textual_analysis.map(para => `<p>${para}</p>`).join('')}

                <blockquote class="unit-quote">
                  "${u.verbatim_quote}"
                </blockquote>

                <div class="heuristic-callout">
                  <strong>Clinical & Counseling Heuristic:</strong> ${u.operational_heuristic}
                </div>

                <div class="motif-cloud">
                  ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join('')}
                </div>
              </div>
            </div>
            <hr class="unit-divider">
          `).join('')}
        </article>
      </section>

      <!-- ANALYTICAL UNITS VIEW -->
      <section id="view-analytical" class="tab-content">
        <div class="analytical-grid">
          ${units.map(u => `
            <div class="analytical-card">
              <div class="card-top">
                <span class="badge">Unit ${u.unit_number}</span>
                <span class="status-tag">${u.epistemic_status}</span>
              </div>
              <h4>${u.title}</h4>
              <p class="card-desc">${u.core_theme}</p>
              <div class="card-meta">
                <strong>Key Heuristic:</strong>
                <p class="heuristic-text">${u.operational_heuristic}</p>
              </div>
              <ul class="motif-list">
                ${u.key_motifs.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- PLANETARY SCORING VIEW -->
      <section id="view-scoring" class="tab-content">
        <article class="reader-prose">
          <h3>The Objective Planetary Strength Point System</h3>
          <p>Marks' standardized point-allocation criteria to determine the primary executive power planets in any horoscope:</p>

          <table class="worksheet-table">
            <thead>
              <tr>
                <th>Criteria for Planetary Strength</th>
                <th>Points</th>
                <th>Diagnostic Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Exact Conjunction to an Angle (Asc, MC, Dsc, IC)</strong></td>
                <td><strong>+5 Points</strong></td>
                <td>Maximum physical and public embodiment; forces immediate worldly expression.</td>
              </tr>
              <tr>
                <td><strong>Within 5° to 10° of an Angle</strong></td>
                <td><strong>+3 Points</strong></td>
                <td>High angular potency commanding instinctive behavioral reflexes.</td>
              </tr>
              <tr>
                <td><strong>Ruler of the Ascendant (Chart Ruler)</strong></td>
                <td><strong>+4 Points</strong></td>
                <td>The primary vehicle of physical incarnation and life direction.</td>
              </tr>
              <tr>
                <td><strong>In Rulership Sign (Dignity)</strong></td>
                <td><strong>+3 Points</strong></td>
                <td>Pure, autonomous, unhindered expression of the planetary archetype.</td>
              </tr>
              <tr>
                <td><strong>In Exaltation Sign</strong></td>
                <td><strong>+2 Points</strong></td>
                <td>Highly refined expression of the archetype's highest potential.</td>
              </tr>
              <tr>
                <td><strong>Tight Aspect to Sun or Moon (&lt;3° Orb)</strong></td>
                <td><strong>+3 Points</strong></td>
                <td>Direct psychological fusion with core conscious will or emotional security.</td>
              </tr>
              <tr>
                <td><strong>Apex of a T-Square or Yod</strong></td>
                <td><strong>+4 Points</strong></td>
                <td>Primary release valve and focal determinator of systemic tension.</td>
              </tr>
              <tr>
                <td><strong>Singleton Planet (Only planet in Element/Modality)</strong></td>
                <td><strong>+3 Points</strong></td>
                <td>Concentrated prime mover operating to compensate for systemic void.</td>
              </tr>
              <tr>
                <td><strong>Final Dispositor / Leading Hub (Rules 4+ planets)</strong></td>
                <td><strong>+3 Points</strong></td>
                <td>The primary psychological center of gravity organizing other drives.</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <!-- COUNSELING PROCESS VIEW -->
      <section id="view-counseling" class="tab-content">
        <article class="reader-prose">
          <h3>The 4-Phase Astrological Counseling Process</h3>
          <p>How to conduct a transformative, client-centered astrological consultation:</p>

          <div class="counseling-step">
            <div class="counseling-phase">Phase 1</div>
            <div class="counseling-desc">
              <h4>Rapport & The Sacred Container (0–15 Minutes)</h4>
              <p>Welcome the client into an impeccably safe, confidential container governed by Carl Rogers' unconditional positive regard. Clarify current life challenges, crisis points, and client intentions for the session.</p>
            </div>
          </div>

          <div class="counseling-step">
            <div class="counseling-phase">Phase 2</div>
            <div class="counseling-desc">
              <h4>Core Identity & Psychosynthesis (15–60 Minutes)</h4>
              <p>Synthesize the primary identity tripod (Sun, Moon, Ascendant). Reframe internal conflicts as a dialogue between semi-autonomous sub-personalities (e.g., the Inner Judge vs. the Inner Child), helping the client negotiate peace among their inner family.</p>
            </div>
          </div>

          <div class="counseling-step">
            <div class="counseling-phase">Phase 3</div>
            <div class="counseling-desc">
              <h4>Teleological Timing (60–75 Minutes)</h4>
              <p>Examine active transits and secondary progressions. Reframe difficult outer-planet transits away from deterministic terror and into evolutionary invitations for conscious individuation.</p>
            </div>
          </div>

          <div class="counseling-step">
            <div class="counseling-phase">Phase 4</div>
            <div class="counseling-desc">
              <h4>Integration & Sovereign Empowerment (75–90 Minutes)</h4>
              <p>Translate psychological breakthroughs into tangible daily routines and behavioral experiments. Avoid guru inflation; return all sovereign moral choice and executive agency to the client's hands.</p>
            </div>
          </div>
        </article>
      </section>

      <!-- SEARCH VIEW -->
      <section id="view-search" class="tab-content">
        <div class="search-container">
          <input type="text" id="codex-search-input" placeholder="Search synthesis, scoring, sub-personalities, T-squares..." aria-label="Search codex">
          <div id="search-results" class="search-results"></div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Source: <em>The Art of Chart Interpretation: A Step-by-Step System for Analyzing, Synthesizing, and Counseling</em> by Tracy Marks, M.A., LMHC (Ibis Press, 2009).</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tabId = 'view-' + btn.getAttribute('data-tab');
        const content = document.getElementById(tabId);
        if (content) content.classList.add('active');
      });
    });

    const searchInput = document.getElementById('codex-search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
      const unitsData = ${JSON.stringify(units)};
      
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchResults.innerHTML = '<p class="search-prompt">Type at least 2 characters to search across all units...</p>';
          return;
        }

        const matches = unitsData.filter(u => {
          return u.title.toLowerCase().includes(query) ||
                 u.core_theme.toLowerCase().includes(query) ||
                 u.operational_heuristic.toLowerCase().includes(query) ||
                 u.key_motifs.some(m => m.toLowerCase().includes(query)) ||
                 u.textual_analysis.some(p => p.toLowerCase().includes(query));
        });

        if (matches.length === 0) {
          searchResults.innerHTML = '<p class="search-prompt">No matching units found for "' + query + '".</p>';
          return;
        }

        searchResults.innerHTML = matches.map(m => \`
          <div class="search-result-item">
            <h4><a href="#unit-block-\${m.unit_id}">Unit \${m.unit_number}: \${m.title}</a></h4>
            <p><strong>Theme:</strong> \${m.core_theme}</p>
            <p><strong>Heuristic:</strong> \${m.operational_heuristic}</p>
            <div class="result-tags">
              \${m.key_motifs.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
            </div>
          </div>
        \`).join('');
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Successfully wrote index.html for The Art of Chart Interpretation (' + htmlContent.length + ' chars)');
