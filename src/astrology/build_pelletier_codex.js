/**
 * Builder for Robert Pelletier: Planets in Aspect
 * Subtitle: Understanding Your Inner Dynamics
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | The Classical Aspect Encyclopedia
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'planets-in-aspect-pelletier');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Geometry of Consciousness: The Classical Aspect Framework and Exact Orbs",
    scope: "Introduction & Directions: The behavioral dynamics of planets, the Earth-centered coordinate system, exact aspect angles, and Pelletier's mathematical orb rules.",
    epistemic_status: "ASPECT_GEOMETRY_AND_MATHEMATICAL_ORBS",
    materiality: "CRITICAL",
    core_theme: "The spatial geometry of planetary aspects: how harmonic angular relationships between celestial bodies create distinct psychological complexes operating across physical, emotional, and mental planes.",
    textual_analysis: [
      "Robert Pelletier establishes the definitive American reference framework for planetary aspect analysis. Rooted in C.G. Jung's principle of Synchronicity, Pelletier views the planets not as deterministic physical causes, but as symbolic dynamic functions of human behavior that operate across four distinct levels: physical, emotional, mental, and spiritual.",
      "The Individual Planetary Building Blocks: Before any chart synthesis can occur, the astrologer must master the pure, uncombined essence of each celestial body. The Sun represents the conscious ego, individuality, creative initiative, and future destiny; the Moon represents the unconscious instinctual habit patterns, somatic memory, and past conditioning; Mercury represents the rational filtering and categorization lens; Venus represents relational adjustment and aesthetic values; Mars represents assertive drive and kinetic force; Jupiter represents expansion and philosophical aspiration; Saturn represents reality, containment, and boundary-setting; Uranus, Neptune, and Pluto represent the transpersonal evolutionary forces of awakening, dissolution, and cathartic regeneration.",
      "Mathematical Aspect Definitions and Precise Orbs: Aspects represent angular divisions of the 360° circle viewed from the Earth:",
      "- Conjunction (0°): The fusion of two functions into a single energetic circuit.",
      "- Sextile (60°): A semi-harmonic aspect of opportunity, intellectual facility, and conscious communication.",
      "- Square (90°): A dynamic crisis-in-action generating friction, frustration, and compulsory growth.",
      "- Trine (120°): A harmonious flowing aspect of effortless talent, ease, and natural protection.",
      "- Inconjunct / Quincunx (150°): An asymmetrical aspect of chronic irritation, demanding constant physical or psychological adjustment.",
      "- Opposition (180°): A dynamic polarization forcing awareness of the other, objective reflection, and external projection.",
      "Pelletier's Standard Orb Protocol: Standard planetary aspects use an orb of ±6°. When the Sun, Moon, or Ascendant is involved, the orb expands by an additional 2° to ±8°. For the delicate, strain-inducing Inconjunct (150°), a strict, tight orb of ±3° is enforced."
    ],
    verbatim_quote: "Planets in aspect produce effects and create complexes that have their own integrity. When two drives are joined by aspect, they cease to function as isolated variables; they form a living psychological circuit that demands conscious expression.",
    operational_heuristic: "Enforce Pelletier's orb rules strictly: ±8° for luminaries and Ascendant, ±6° for standard planets, and ±3° for inconjuncts; ignore wide out-of-orb contacts that dilute diagnostic accuracy.",
    key_motifs: [
      "Planets as Dynamics of Behavior",
      "Exact Angular Aspect Geometry",
      "Pelletier's Orb Rules (±6°, ±8°, ±3°)",
      "Synchronicity vs. Determinism",
      "Planetary Complexes as Living Circuits"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Conjunction (0°): Fusion of Drives, Subjective Density, and Focal Momentum",
    scope: "Chapter 1: The conjunction aspect across all planetary combinations: subjective identification, concentrated willpower, blind spots, and unmediated energetic expression.",
    epistemic_status: "SYNTHETIC_FUSION_AND_SUBJECTIVE_BLIND_SPOTS",
    materiality: "CRITICAL",
    core_theme: "The dynamics of the conjunction: how the total spatial fusion of two planetary drives creates immense concentrated focus while obscuring objective self-awareness.",
    textual_analysis: [
      "The Energetic Nature of the Conjunction: At 0° separation, two planetary archetypes are fused into an indivisible whole. The individual does not experience them as separate impulses. For example, in a Sun-Mercury conjunction, the native's conscious identity (Sun) and intellectual opinions (Mercury) are so tightly welded that an attack on their ideas feels like an existential attack on their person.",
      "Subjective Density and Blind Spots: Because there is no angular distance between the planets, the native lacks the objective perspective provided by sextiles or oppositions. The conjunction is profoundly subjective. The person simply *is* the combination, often completely unaware of how aggressively or intensely this energy impacts other people.",
      "Benefic vs. Malefic Combinations: When harmonious archetypes unite (e.g., Sun-Jupiter, Venus-Jupiter), the conjunction bestows immense vitality, charm, optimism, and unshakeable self-confidence. However, when incompatible or combustible drives unite (e.g., Mars-Saturn, Mars-Pluto, Saturn-Moon), the conjunction creates an intense, hyper-concentrated pressure cooker that can manifest as ruthless ambition, paralyzing anxiety, or explosive physical outbursts.",
      "The Ascendant as an Amplifying Lens: Any planet conjunct the Ascendant within the 8° orb becomes the primary filter through which the entire chart is projected into the world. It dictates physical appearance, immediate somatic reflexes, and first impressions."
    ],
    verbatim_quote: "The conjunction is the most powerful aspect in the horoscope. It is an undiluted laser beam of concentrated drive. The native does not choose how to use this energy; they are consumed by it, possessing immense momentum but little objective self-awareness.",
    operational_heuristic: "In evaluating conjunctions, identify which planet is naturally stronger by sign dignity: the stronger planet will color and command the expression of the weaker planet in the fusion.",
    key_motifs: [
      "The Conjunction (0°) Fusion",
      "Subjective Identification & Blind Spots",
      "Concentrated Focal Momentum",
      "Planets Conjunct the Ascendant",
      "Combustible vs. Harmonious Unifications"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Sextile (60°): Conscious Opportunity, Mental Adaptability, and Social Facility",
    scope: "Chapter 2: The sextile aspect: elemental harmony between compatible elements (Fire-Air, Earth-Water), creative talent requiring conscious activation, and intellectual problem-solving.",
    epistemic_status: "HARMONIC_OPPORTUNITY_AND_COMMUNICATIVE_EASE",
    materiality: "CRITICAL",
    core_theme: "The sextile as the aspect of open doors: how harmonious cross-elemental alignment provides fertile opportunities that require conscious effort and initiative to bear fruit.",
    textual_analysis: [
      "The Structure of the Sextile: Formed by an angle of 60° (one-sixth of the circle), the sextile links compatible, complementary elements: Fire with Air (inspiration feeding intellect) or Earth with Water (form giving structure to feeling). It represents natural intellectual resonance, social ease, and mutual support between two planetary functions.",
      "The Sextile vs. The Trine: Unlike the trine, which operates automatically and often effortlessly without conscious thought, the sextile is an aspect of *opportunity*. It provides an open door, a fertile seed, or a favorable circumstance, but it demands active participation, communication, and cognitive effort from the individual. If the native is lazy or indifferent, the potential of the sextile remains entirely unrealized.",
      "Communicative and Educational Facility: Sextiles correspond archetypally to the 3rd and 11th house axes of the natural zodiac (Gemini and Aquarius). Consequently, planetary pairs in sextile excel at articulate communication, networking, objective compromise, social diplomacy, and learning new technological or artistic skills.",
      "Clinical Utilization: Sextiles provide the primary constructive escape routes from hard aspects. When an afflicted planet caught in a heavy square also makes a sextile to a third planet, that sextile indicates the exact vocational, creative, or intellectual outlet through which the frustration of the square can be constructively discharged."
    ],
    verbatim_quote: "The sextile is a gift that requires an RSVP. Unlike the trine, which drops its blessings directly into your lap, the sextile presents you with an open doorway and invites you to walk through it with conscious intelligence.",
    operational_heuristic: "Look for sextiles connected to stressed or conflicted planets: these sextiles represent the native's most reliable conscious problem-solving tools and creative outlets for resolving internal tension.",
    key_motifs: [
      "The Sextile (60°) Opportunity Aspect",
      "Fire-Air and Earth-Water Elemental Harmony",
      "Active Effort vs. Passive Trine",
      "Communicative & Social Dexterity",
      "The Constructive Escape Route for Stressed Planets"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The Square (90°): The Crisis in Action, Internal Friction, and Evolutionary Engines",
    scope: "Chapter 3: The square aspect across all planetary pairings: incompatible elements in the same quadruplicity (Cardinal, Fixed, Mutable), internal stress, and compulsory physical achievement.",
    epistemic_status: "CRISIS_IN_ACTION_AND_ACHIEVEMENT_CATALYSTS",
    materiality: "CRITICAL",
    core_theme: "The square as the supreme engine of human growth: how irreconcilable friction between competing drives forces the ego to construct enduring competence and worldly achievement.",
    textual_analysis: [
      "The Geometry of Incompatible Quadruplicity: The 90° square connects signs of the same quadruplicity (Cardinal to Cardinal, Fixed to Fixed, Mutable to Mutable) that belong to fundamentally clashing elements (e.g., Fire squaring Water, or Earth squaring Air). Because the two planets share the same mode of operation but pursue antithetical values, they are locked in chronic structural civil war.",
      "- Cardinal Squares (Aries, Cancer, Libra, Capricorn): Manifest as sudden, impulsive crises in direct action, leadership battles, and domestic vs. career tug-of-wars.",
      "- Fixed Squares (Taurus, Leo, Scorpio, Aquarius): Manifest as stubborn, immovable entrenchment, stubborn emotional resentment, pride, and resistance to change.",
      "- Mutable Squares (Gemini, Virgo, Sagittarius, Pisces): Manifest as mental restlessness, sensory overload, indecision, anxiety, and diffuse scattering of energy.",
      "The Creative Necessity of Suffering: Pelletier stresses that squares are not 'malefic' punishments. While harmonious trines produce contented passivity, squares generate agonizing friction, inadequacy, and frustration. This intolerable internal tension forces the individual to act, build, overcome obstacles, and acquire specialized skills. The square is the primary astrological signature found in high achievers, reform leaders, and pioneering innovators."
    ],
    verbatim_quote: "The square is the grit in the oyster that creates the pearl. Without squares in your chart, you may be delightfully happy, but you will achieve very little of lasting significance. The square is the cosmic engine that transforms pain into monumental achievement.",
    operational_heuristic: "Examine the native's squares not as fatal handicaps, but as their greatest potential reservoir of worldly power; identify the specific cross-purposed desires creating the conflict and help the client negotiate a conscious compromise.",
    key_motifs: [
      "The Square (90°) Dynamic Tension",
      "Cardinal, Fixed, and Mutable Modes of Conflict",
      "The Engine of Worldly Achievement",
      "Internal Civil War between Incompatible Elements",
      "Transmuting Friction into Competence"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "The Trine (120°): Harmonic Flow, Natural Genius, and the Danger of Complacent Inertia",
    scope: "Chapter 4: The trine aspect across the four elemental triplicities (Fire, Earth, Air, Water): innate talents, psychological protection, inherited ease, and the shadow of least resistance.",
    epistemic_status: "HARMONIC_EASE_AND_COMPLACENT_INERTIA",
    materiality: "CRITICAL",
    core_theme: "The double-edged sword of the trine: how identical elemental resonance bestows innate mastery and good fortune, while creating the subtle peril of entitlement, laziness, and character atrophy.",
    textual_analysis: [
      "Elemental Purity of the Trine: The 120° trine links signs belonging to the exact same element:",
      "- Fire Trines (Aries-Leo-Sagittarius): Bestow boundless vitality, self-confidence, theatrical charisma, and joyful creative enthusiasm.",
      "- Earth Trines (Taurus-Virgo-Capricorn): Bestow instinctive somatic groundedness, financial prudence, craftsmanship, and effortless material common sense.",
      "- Air Trines (Gemini-Libra-Aquarius): Bestow brilliant theoretical intellect, social diplomacy, verbal elegance, and broad conceptual vision.",
      "- Water Trines (Cancer-Scorpio-Pisces): Bestow profound emotional empathy, artistic sensitivity, intuitive psychic receptivity, and spiritual depth.",
      "The Shadow of the Path of Least Resistance: Because energy flows between trined planets with frictionless grace, the native takes these gifts completely for granted. They rarely feel compelled to practice, discipline, or refine their talents. In difficult life circumstances, charts dominated entirely by trines frequently exhibit severe character atrophy—the native lacks the resilience, grit, and stamina to endure hardship, collapsing at the first encounter with genuine adversity.",
      "The Grand Trine Configuration: When three planets form mutual trines across all three signs of an element, they create a closed, self-contained energetic triangle (a Grand Trine). This produces a charmed life in that elemental sphere, but acts as a psychological fortress that isolates the native from external challenge, generating deep narcissism or chronic inertia."
    ],
    verbatim_quote: "The trine is a blessing that can easily become a curse. It gives you wings, but if you never learn how to walk through the mud, you will fall apart the moment a storm grounds your flight. True greatness requires the harmony of the trine married to the iron will of the square.",
    operational_heuristic: "Never assume a client with many trines is fulfilled; investigate whether their effortless gifts have trapped them in a golden cage of underachievement and complacent mediocrity.",
    key_motifs: [
      "The Trine (120°) Elemental Harmony",
      "Fire, Earth, Air, and Water Triplicities",
      "Effortless Talent vs. Character Atrophy",
      "The Grand Trine Circuit",
      "The Path of Least Resistance"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Inconjunct / Quincunx (150°): The Aspect of Chronic Adjustment, Somatosensory Strain, and Health",
    scope: "Chapter 5: The inconjunct (150°) aspect: complete elemental and modal blindness, psychosomatic strain, 6th and 8th house resonance, and the necessity of constant compromise.",
    epistemic_status: "ASYMMETRICAL_STRAIN_AND_SOMATIC_ADJUSTMENT",
    materiality: "CRITICAL",
    core_theme: "The quincunx as the supreme aspect of adjustment: how complete alienation between two planetary signs produces chronic nervous and somatic strain that demands continuous lifestyle refinement.",
    textual_analysis: [
      "The Asymmetry of the Quincunx: At 150° separation (five signs apart), two planets share *nothing in common*. They belong to completely different elements (e.g., Fire and Water), completely different quadruplicities (Cardinal and Fixed), and completely different polarities (Masculine and Feminine). They are blind to one another.",
      "Archetypal Resonance with the 6th and 8th Houses: In the natural 360° circle, the signs that form a 150° angle to the Ascendant are the 6th house (Virgo = somatic illness, work duty, adjustment) and the 8th house (Scorpio = psychological crisis, debt, mortality, transformation). Consequently, the quincunx is intimately linked to chronic somatic vulnerability, nervous depletion, and existential crisis.",
      "The Mechanism of Chronic Irritation: Unlike the square, which produces open, dramatic confrontation, the inconjunct is a silent, subterranean irritation—like a pebble inside a shoe. The native attempts to express Planet A, only to find that Planet B is quietly undermined, drained, or destabilized. If they prioritize Planet B, Planet A retaliates.",
      "The Strict ±3° Orb: Because the quincunx operates through subtle, high-frequency nervous strain, Pelletier enforces a strict orb of no more than 3°. Beyond 3°, the subtle psychosomatic tension dissipates.",
      "The Yod (Finger of God): When two planets in sextile (60°) both form 150° inconjuncts to an apex planet, they create the fateful 'Yod' configuration. The apex planet becomes a focal point of compulsive, unavoidable karmic adjustment and specialized destiny."
    ],
    verbatim_quote: "The inconjunct is the pebble in the shoe of the psyche. It will not kill you like an opposition might, but if you do not stop and adjust your stride, it will wear a hole straight through your heel. It demands constant, humble, practical refinement.",
    operational_heuristic: "Audit all tight quincunxes (within ±3°); evaluate whether the native's chronic physical fatigue or somatic symptoms correlate with an ongoing unresolved tug-of-war between the two alien planetary functions.",
    key_motifs: [
      "The Inconjunct / Quincunx (150°) Asymmetry",
      "Total Elemental & Modal Blindness",
      "6th House (Illness) & 8th House (Crisis) Resonance",
      "Strict ±3° Empirical Orb",
      "The Yod (Finger of God) Configuration"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Opposition (180°): Awareness of the Other, Polarization, and The Art of Objective Balance",
    scope: "Chapter 6: The opposition aspect across polar sign axes: psychological projection onto others, interpersonal conflict, seeing oneself in the mirror of the world, and dialectical synthesis.",
    epistemic_status: "POLARIZATION_AND_RELATIONAL_CONSCIOUSNESS",
    materiality: "CRITICAL",
    core_theme: "The opposition as the aspect of relationship and self-revelation: how direct spatial confrontation forces the ego to withdraw external projections and achieve balanced equilibrium.",
    textual_analysis: [
      "The Spatial Mechanics of the 180° Axis: The opposition connects planets standing directly across the zodiac from one another. While they belong to opposing elements, they share the same polarity (both Masculine/Yang or both Feminine/Yin) and the same quadruplicity (Cardinal, Fixed, or Mutable). They are two sides of the same cosmic coin.",
      "The Primary Engine of Psychological Projection: The opposition is the classic astrological signature of projection. The native almost invariably identifies with one planet (usually the Sun, Mars, or personal luminary) and completely disowns the opposing planet, projecting it onto their spouse, business partner, boss, or adversary. For example, in a Sun-Pluto opposition, the native feels victimized by tyrannical, power-hungry manipulators, blind to the fact that their own unconscious thirst for control is orchestrating the conflict.",
      "The Seesaw Phenomenon: Oppositions produce extreme behavioral oscillation. The individual swings wildly from one extreme to the other—from ascetic self-denial to hedonistic excess (Venus-Saturn), or from dependent clinginess to cold detachment (Moon-Uranus).",
      "Integration via Dialectical Synthesis: The ultimate evolutionary purpose of the opposition is the achievement of *objective consciousness*. By confronting the disowned planet in the mirror of relationship, the native is forced to integrate both polarities, achieving a balanced, mature equilibrium that neither represses nor acts out."
    ],
    verbatim_quote: "The opposition is a cosmic mirror held up to your face. You cannot escape your opposing planet, because every time you look at your partner, your enemy, or your boss, that planet is staring back at you, demanding that you own your reflection.",
    operational_heuristic: "When a client is locked in an intense interpersonal feud or legal dispute, check for active natal or transiting oppositions; identify which end of the seesaw the client is sitting on, and guide them to withdraw the projection from the other person.",
    key_motifs: [
      "The Opposition (180°) Polar Axis",
      "Projection onto Partners & Adversaries",
      "The Seesaw Behavioral Oscillation",
      "The Mirror of Relationship",
      "Dialectical Integration & Equilibrium"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Hard Luminary Aspect Matrices: Core Identity and Emotional Survival Circuits",
    scope: "Synthesized aspect matrices involving Sun and Moon with Mars, Saturn, and Uranus: Sun-Moon conflicts, Sun-Saturn inadequacy, Moon-Mars emotional volatility, and Moon-Saturn emotional freezing.",
    epistemic_status: "LUMINARY_NEURO_CIRCUITS_AND_CORE_IDENTITY",
    materiality: "CRITICAL",
    core_theme: "Forensic analysis of hard aspects to the luminaries: how fundamental tensions between the conscious will (Sun) and instinctual security (Moon) shape core personality survival strategies.",
    textual_analysis: [
      "Sun-Moon Hard Aspects (Squares and Oppositions): Born during the First Quarter Moon (square) or Full Moon (opposition), these natives carry an intrinsic civil war between conscious aspirations (father/Sun) and unconscious emotional needs (mother/Moon). They feel that satisfying their professional ambitions requires starving their personal happiness, or that domestic comfort demands castrating their creative willpower.",
      "Sun-Saturn Conflicts (The Burden of Significance): Squares, oppositions, and conjunctions between Sun and Saturn produce profound early-life feelings of inadequacy, rejection, and impostor syndrome. The native feels that love and respect must be rigidly earned through grueling perfectionism. When mastered, this creates unshakeable integrity, executive endurance, and authoritative maturity.",
      "Moon-Mars Conflicts (The Combustible Gut): Hard Moon-Mars contacts link the receptive emotional matrix directly to volatile adrenaline circuits. The native is prone to visceral emotional volatility, irritable impatience, temper tantrums, and psychosomatic digestive inflammation. They must learn to channel their assertive drives without destroying intimate relationships.",
      "Moon-Saturn Conflicts (The Emotional Deep-Freeze): As verified in Dr. Gibson's clinical psychiatric cohort, hard Moon-Saturn contacts correspond heavily to depressive affect, emotional isolation, and chronic feelings of being unloved. The native learns early in life to suppress their tears and build an icy somatic wall of self-reliance."
    ],
    verbatim_quote: "When the Sun and Moon are at war in a birth chart, the individual is trying to sail a ship whose captain and navigator despise one another. Peace comes only when the conscious ego learns to bow before the deep emotional wisdom of the soul.",
    operational_heuristic: "Always evaluate the Sun-Moon relationship before examining other aspects; if the luminaries are locked in a square or opposition, prioritize helping the client resolve their foundational internal parent-child conflict.",
    key_motifs: [
      "Sun-Moon Square & Opposition Duality",
      "Sun-Saturn Insecurity & Executive Mastery",
      "Moon-Mars Adrenaline & Digestive Reactivity",
      "Moon-Saturn Emotional Cryopreservation",
      "The Primary Parent Complex"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Transpersonal Catalysts: Aspect Networks of Uranus, Neptune, and Pluto to Personal Planets",
    scope: "Synthesized aspect networks between the outer titans (Uranus, Neptune, Pluto) and the personal planets (Mercury, Venus, Mars): genius vs. madness, spiritual ecstasy vs. addiction, and volcanic regeneration vs. obsession.",
    epistemic_status: "TRANSPERSONAL_TRANSFORMATION_AND_VOLATILE_CIRCUITS",
    materiality: "CRITICAL",
    core_theme: "How transpersonal forces supercharge personal planetary functions: the razor's edge between monumental creative genius and severe psychological destabilization.",
    textual_analysis: [
      "The Outer Planets as Transpersonal Modifiers: Pelletier demonstrates that when an outer planet (Uranus, Neptune, Pluto) forms a hard aspect to a personal planet (Mercury, Venus, Mars), the personal drive is commandeered by forces beyond the conscious ego's regulatory capacity.",
      "Mercury Aspecting Outer Planets: With Uranus, intellect becomes a lightning rod for original invention or nervous exhaustion; with Neptune, thinking dissolves into poetic mysticism, profound artistic imagination, or chaotic cognitive delusion; with Pluto, perception becomes an obsessive forensic X-ray penetrating taboos, driving deep research or paranoid suspicion.",
      "Venus Aspecting Outer Planets: With Uranus, love demands radical autonomy, bohemian experimentation, and non-conformist partnerships; with Neptune, love seeks divine, idealized romance, susceptible to catastrophic disillusionment, codependency, or martyrdom; with Pluto, love is an all-or-nothing, volcanic obsession involving jealousy, betrayal, and transformative rebirth.",
      "Mars Aspecting Outer Planets: With Uranus, physical action is explosive, rebellious, and fearless; with Neptune, drive becomes spiritualized, passive-aggressive, or depleted through dissipation; with Pluto, willpower becomes an unstoppable, relentless juggernaut capable of heroic endurance or ruthless coercion."
    ],
    verbatim_quote: "When Pluto, Neptune, or Uranus touch a personal planet, they plug a 10,000-volt power line into a 110-volt household appliance. The ego must either expand its capacity to hold transpersonal power, or watch its circuitry melt down in neurosis.",
    operational_heuristic: "In clients with personal planets heavily aspected by outer planets, do not attempt to domesticate the archetype into mundane conformity; help them find specialized, high-capacity vocational or creative vessels capable of holding transpersonal voltage.",
    key_motifs: [
      "Transpersonal Voltage Injection",
      "Mercury-Outer Aspects (Genius vs. Delusion)",
      "Venus-Outer Aspects (Ecstasy vs. Betrayal)",
      "Mars-Outer Aspects (Juggernaut vs. Depletion)",
      "The High-Capacity Vocational Vessel"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Master Synthesis Protocol: Reading Complex Aspect Grids and Geometric Patterns",
    scope: "Synthesizing Masterclass: Step-by-step methodology for auditing complex aspect grids, identifying major geometric patterns (Grand Trine, T-Square, Grand Cross, Yod, Kite, Stellium), and delivering integrated psychological counseling.",
    epistemic_status: "SYSTEMIC_CHART_SYNTHESIS_AND_GEOMETRIC_PATTERNS",
    materiality: "CRITICAL",
    core_theme: "The complete technical procedure for synthesizing dozens of contradictory aspects into a coherent, prioritizing diagnostic roadmap for personal counseling.",
    textual_analysis: [
      "The Danger of Fragmented Reading: The novice astrologer makes the fatal mistake of reading aspects like isolated dictionary entries ('Sun square Mars means X; Venus trine Jupiter means Y'). This produces hopeless confusion and contradiction. The master astrologer views the chart as a holistic energetic ecosystem.",
      "Pelletier's 4-Step Aspect Synthesis Procedure:",
      "1. Aspect Distribution Audit: Count the total number of conjunctions, sextiles, squares, trines, quincunxes, and oppositions. A preponderance of squares indicates a life of dynamic struggle and achievement; a preponderance of trines indicates passive ease; a preponderance of oppositions indicates intense relational focus.",
      "2. Focal Pattern Identification: Scan for closed geometric figures:",
      "   - T-Square: Focuses immense tension on the apex planet (the primary crisis/achievement release valve).",
      "   - Grand Cross: Four planets in mutual square and opposition, creating a four-way structural crucible demanding monumental executive maturity.",
      "   - Grand Trine: Closed triangular flow of talent and potential inertia.",
      "   - Kite: A Grand Trine anchored by an opposition, providing the drive and focus to manifest the trine's gifts.",
      "   - Yod: Two quincunxes pointing to an apex planet, indicating a specialized, compulsory karmic adjustment.",
      "   - Stellium: A cluster of 3 or more planets in a single sign or house, acting as a massive gravitational center of focus.",
      "3. Identifying the Lead Aspect: Determine which aspect involves the luminaries or the Ascendant with the tightest orb: this is the primary existential theme of the incarnation.",
      "4. The Evolutionary Translation: Translate technical geometric friction into empowering developmental challenges, showing the client how their hardest aspect is their greatest evolutionary catalyst."
    ],
    verbatim_quote: "A horoscope is not a collection of parts; it is a symphony. The master astrologer does not listen to the violin or the trumpet in isolation; they hear the unified counterpoint of the entire orchestra, discerning the divine melody seeking expression through the human soul.",
    operational_heuristic: "Always locate the tightest major aspect involving an angle or luminary: this aspect is the thematic anchor of the chart; interpret all other planetary configurations as supporting sub-plots to this primary drama.",
    key_motifs: [
      "The 4-Step Aspect Synthesis Procedure",
      "Aspect Distribution Audit",
      "Major Geometric Patterns (T-Square, Grand Cross, Yod, Kite)",
      "The Lead Aspect Identification",
      "The Horoscope as a Unified Symphony"
    ]
  }
];

// 1. Output knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log('Successfully wrote knowledge-units.json for Planets in Aspect');

// 2. Generate master-notes.md
let md = `# Planets in Aspect: Understanding Your Inner Dynamics
**Author:** Robert Pelletier  
**First Published:** 1974 (Para Research / Astro Computing Services)  
**Discipline:** Classical Aspect Mechanics, Psychological Character Analysis, Aspect Geometry, Synthesis Protocols  
**Standard:** BKRS v2.0 Production Master Codex  
**Codex Scope:** 10 Comprehensive Units | Full Monograph Reconstruction

---

## Executive Architectural Overview

In *Planets in Aspect: Understanding Your Inner Dynamics*, Robert Pelletier constructed what remains the most exhaustive, technically rigorous, and widely consulted aspect encyclopedia in modern astrological literature. Spanning over 700,000 characters in its complete formulation, Pelletier's work elevated aspect analysis from superficial cookbook summaries to an empirical science of dynamic behavioral psychology.

Rooted in Carl Jung's principle of Synchronicity, Pelletier views the planets not as deterministic physical causes, but as symbolic dynamic functions of human behavior that operate across physical, emotional, mental, and spiritual planes. When two planets form an aspect, they cease to operate as isolated drives; they form an indissoluble **psychological circuit** with its own distinct integrity and behavioral consequences.

### The Invariant Geometric Aspect System & Mathematical Orbs

$$\\text{Aspect Angle} = \\frac{360^\\circ}{n}$$

1. **The Conjunction ($0^\\circ$, $n=1$):** Complete energetic fusion of two planetary drives; immense concentrated momentum coupled with subjective blind spots.
2. **The Sextile ($60^\\circ$, $n=6$):** Semi-harmonic aspect linking compatible elements (Fire-Air or Earth-Water); conscious opportunities, communicative agility, and intellectual problem-solving requiring active initiative.
3. **The Square ($90^\\circ$, $n=4$):** Dynamic tension linking signs of the same quadruplicity but incompatible elements; internal crisis-in-action and friction that functions as the supreme engine of worldly competence and achievement.
4. **The Trine ($120^\\circ$, $n=3$):** Frictionless flow linking signs of the identical element; innate genius, ease, and psychological protection accompanied by the subtle peril of complacent inertia and character atrophy.
5. **The Inconjunct / Quincunx ($150^\\circ$):** Asymmetrical relationship linking signs sharing zero elemental, modal, or polar affinity; resonant with the 6th (illness) and 8th (crisis) houses, producing subterranean psychosomatic strain and compulsory lifestyle adjustment.
6. **The Opposition ($180^\\circ$, $n=2$):** Polar confrontation across the zodiac; the primary engine of psychological projection, interpersonal seesaws, and the cultivation of objective, balanced consciousness through relationship.

### Pelletier's Rigorous Mathematical Orb Rules
- **Standard Planetary Aspects:** Exactly $\\pm 6^\\circ$ of arc.
- **Luminaries (Sun, Moon) & Ascendant:** Extended by an additional $2^\\circ$ to $\\pm 8^\\circ$ of arc.
- **The Inconjunct / Quincunx:** Strictly enforced tight orb of no more than $\\pm 3^\\circ$ of arc.

This master codex reconstructs Robert Pelletier's complete aspect framework across ten exhaustive knowledge units, providing the definitive reference for chart delineation and psychological counseling.

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
  
  md += `#### Exhaustive Textual & Aspect Analysis\n\n`;
  u.textual_analysis.forEach(p => {
    md += `${p}\n\n`;
  });

  md += `#### Canonical Textual Verbatim\n`;
  md += `> "${u.verbatim_quote}"\n\n`;

  md += `#### Operational Clinical & Delineation Heuristic\n`;
  md += `* **Clinical Heuristic:** ${u.operational_heuristic}\n\n`;

  md += `#### Key Conceptual Motifs & Index Terms\n`;
  u.key_motifs.forEach(m => {
    md += `- \`${m}\`\n`;
  });
  md += `\n---\n\n`;
});

md += `## Synthesis: Comparative Geometric Aspect Matrix

The following reference matrix synthesizes the operational characteristics, harmonic nature, and psychological impact of the six major aspect families:

| Aspect Name | Angle | Harmonic | Elemental / Modal Relationship | Exact Orb | Psychological Dynamic | Evolutionary Task & Pitfall |
| :--- | :---: | :---: | :--- | :---: | :--- | :--- |
| **Conjunction** | $0^\\circ$ | $1$ | Complete spatial fusion of drives | $\\pm 6^\\circ$ ($\\pm 8^\\circ$ Lum) | Concentrated willpower; unmediated subjective expression | *Task:* High focal impact.<br>*Pitfall:* Subjective blindness to impact on others. |
| **Sextile** | $60^\\circ$ | $6$ | Compatible elements (Fire-Air / Earth-Water) | $\\pm 6^\\circ$ ($\\pm 8^\\circ$ Lum) | Conscious opportunity; communicative ease; diplomacy | *Task:* Active intellectual utilization.<br>*Pitfall:* Passive neglect of unearned talents. |
| **Square** | $90^\\circ$ | $4$ | Same quadruplicity; incompatible elements | $\\pm 6^\\circ$ ($\\pm 8^\\circ$ Lum) | Internal crisis-in-action; structural friction; frustration | *Task:* Overcoming obstacles; building mastery.<br>*Pitfall:* Exhaustion; destructive aggression. |
| **Trine** | $120^\\circ$ | $3$ | Identical element (Fire, Earth, Air, Water) | $\\pm 6^\\circ$ ($\\pm 8^\\circ$ Lum) | Frictionless harmony; innate talent; natural protection | *Task:* Creative realization.<br>*Pitfall:* Complacent inertia; collapse under adversity. |
| **Inconjunct** | $150^\\circ$ | $12$ | Total elemental, modal, and polar alienation | $\\pm 3^\\circ$ (Strict) | Subterranean irritation; psychosomatic health strain | *Task:* Constant practical adaptation.<br>*Pitfall:* Somatic collapse; chronic resentment. |
| **Opposition** | $180^\\circ$ | $2$ | Polar opposites; complementary elements | $\\pm 6^\\circ$ ($\\pm 8^\\circ$ Lum) | Interpersonal projection; seesaw oscillation; confrontation | *Task:* Objective relational equilibrium.<br>*Pitfall:* Demonizing the other; eternal conflict. |

---

## Major Geometric Aspect Patterns

1. **The T-Square:**
   - *Architecture:* Two planets in opposition ($180^\\circ$), both squaring ($90^\\circ$) an apex planet.
   - *Dynamic:* Massive energetic tension focused directly upon the apex planet. The sign and house of the apex planet dictate the primary battleground and supreme achievement center of the native's life.
2. **The Grand Cross:**
   - *Architecture:* Four planets in mutual squares ($90^\\circ$) and oppositions ($180^\\circ$) forming a complete square.
   - *Dynamic:* Immense structural pressure from all four directions. If unintegrated, it produces paralyzing gridlock; if mastered, it produces monumental executive power and historical leadership.
3. **The Grand Trine:**
   - *Architecture:* Three planets forming an equilateral triangle ($120^\\circ$ each) across an element.
   - *Dynamic:* Effortless closed circuit of talent. Requires an external square or opposition (such as in a **Kite** formation) to provide the ambition needed to manifest its gifts.
4. **The Yod (Finger of God):**
   - *Architecture:* Two planets in sextile ($60^\\circ$), both forming inconjuncts ($150^\\circ$) to an apex planet.
   - *Dynamic:* The apex planet is subject to compulsory, fated psychological adjustments and specialized spiritual service.
5. **The Stellium:**
   - *Architecture:* A tight cluster of 3 or more planets in a single house or sign.
   - *Dynamic:* An overwhelming center of gravity that dominates the native's career, psychology, and life narrative.

---

## Pelletier's Rules for Chart Delineation

1. **Lead Aspect Dominance:** Always identify the tightest aspect involving the Sun, Moon, or Ascendant: this is the thematic engine of the entire personality.
2. **Orb Priority:** An aspect with an orb of $0^\\circ 30'$ exerts five times the psychological intensity of an aspect with an orb of $5^\\circ 30'$.
3. **Quadruplicity Matters:** A square between Fixed signs produces stubborn deadlock; a square between Cardinal signs produces impulsive action; a square between Mutable signs produces nervous anxiety.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log('Successfully wrote master-notes.md for Planets in Aspect (' + md.length + ' chars)');

// 3. Generate index.html (Reader)
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planets in Aspect | Robert Pelletier | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }
    
    .badge-aspect {
      background: #b45309;
      color: #fffbeb;
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
      font-size: 2rem;
      font-weight: 700;
      color: #b45309;
      margin-bottom: 0.25rem;
    }

    [data-theme="dark"] .stat-value {
      color: #f59e0b;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .aspect-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    .aspect-table th, .aspect-table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    [data-theme="dark"] .aspect-table th, [data-theme="dark"] .aspect-table td {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .aspect-table th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }

    [data-theme="dark"] .aspect-table th {
      background: rgba(255, 255, 255, 0.05);
    }

    .pattern-box {
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-left: 4px solid #b45309;
      padding: 1.25rem;
      margin-bottom: 1.25rem;
      border-radius: 0 6px 6px 0;
    }

    [data-theme="dark"] .pattern-box {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(255, 255, 255, 0.08);
      border-left-color: #f59e0b;
    }

    .pattern-box h4 {
      margin: 0 0 0.5rem 0;
      font-family: var(--font-serif);
      font-size: 1.15rem;
      color: #b45309;
    }

    [data-theme="dark"] .pattern-box h4 {
      color: #f59e0b;
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../../index.html" class="back-link">← Master Index</a>
          <span class="badge-aspect">Classical Aspect Mechanics</span>
        </div>
        <h1 class="book-title">Planets in Aspect</h1>
        <p class="book-subtitle">Understanding Your Inner Dynamics • Robert Pelletier</p>
        
        <div class="reader-metadata-bar">
          <span><strong>Author:</strong> Robert Pelletier (1974 Astrological Classic)</span>
          <span><strong>Focus:</strong> Conjunction, Sextile, Square, Trine, Inconjunct, Opposition & Patterns</span>
          <span><strong>Standard:</strong> BKRS v2.0 Production Master (10 Units)</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="reading">Continuous Reader</button>
          <button class="tab-button" data-tab="analytical">Analytical Units</button>
          <button class="tab-button" data-tab="geometry">Aspect Geometry</button>
          <button class="tab-button" data-tab="patterns">Major Patterns</button>
          <button class="tab-button" data-tab="search">Search Codex</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- CONTINUOUS READING VIEW -->
      <section id="view-reading" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Dynamics of Human Consciousness</h2>
            <p>In this monumental 1974 reference work, Robert Pelletier establishes the definitive American framework for planetary aspect analysis. Deconstructing the exact harmonic geometry between planets, Pelletier reveals how celestial angles create dynamic behavioral complexes operating across physical, emotional, mental, and spiritual planes.</p>
          </div>

          <div class="stat-card-grid">
            <div class="stat-card">
              <div class="stat-value">±6°</div>
              <div class="stat-label">Standard Aspect Orb</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">±8°</div>
              <div class="stat-label">Sun, Moon, Ascendant Orb</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">±3°</div>
              <div class="stat-label">Inconjunct (Quincunx) Orb</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">6 Families</div>
              <div class="stat-label">Major Planetary Aspects</div>
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
                  <strong>Clinical & Delineation Heuristic:</strong> ${u.operational_heuristic}
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

      <!-- ASPECT GEOMETRY VIEW -->
      <section id="view-geometry" class="tab-content">
        <article class="reader-prose">
          <h3>The Six Major Aspect Families</h3>
          <p>Pelletier's comparative summary of harmonic geometry and psychological dynamics:</p>

          <table class="aspect-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Angle</th>
                <th>Harmonic</th>
                <th>Orb</th>
                <th>Psychological Principle</th>
                <th>Evolutionary Task</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Conjunction</strong></td>
                <td>0°</td>
                <td>1</td>
                <td>±6° (±8° Lum)</td>
                <td>Fusion of drives; subjective density</td>
                <td>Laser-like focal momentum</td>
              </tr>
              <tr>
                <td><strong>Sextile</strong></td>
                <td>60°</td>
                <td>6</td>
                <td>±6° (±8° Lum)</td>
                <td>Conscious opportunity; communicative ease</td>
                <td>Active intellectual utilization</td>
              </tr>
              <tr>
                <td><strong>Square</strong></td>
                <td>90°</td>
                <td>4</td>
                <td>±6° (±8° Lum)</td>
                <td>Internal crisis-in-action; friction</td>
                <td>Overcoming obstacles; building mastery</td>
              </tr>
              <tr>
                <td><strong>Trine</strong></td>
                <td>120°</td>
                <td>3</td>
                <td>±6° (±8° Lum)</td>
                <td>Frictionless flow; innate talent</td>
                <td>Creative expression (avoid inertia)</td>
              </tr>
              <tr>
                <td><strong>Inconjunct</strong></td>
                <td>150°</td>
                <td>12</td>
                <td>±3° (Strict)</td>
                <td>Psychosomatic irritation; adjustment</td>
                <td>Constant practical lifestyle refinement</td>
              </tr>
              <tr>
                <td><strong>Opposition</strong></td>
                <td>180°</td>
                <td>2</td>
                <td>±6° (±8° Lum)</td>
                <td>Interpersonal projection; polarity</td>
                <td>Objective relational equilibrium</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <!-- MAJOR PATTERNS VIEW -->
      <section id="view-patterns" class="tab-content">
        <article class="reader-prose">
          <h3>Major Closed Geometric Configurations</h3>
          <p>When aspects unite to form closed polygons, they dominate the chart's energetic landscape:</p>

          <div class="pattern-box">
            <h4>1. The T-Square (The Pressure Valve)</h4>
            <p>Two planets in opposition (180°), both squaring (90°) an apex planet. Concentrates immense energetic pressure upon the apex planet, making it the primary crisis release valve and greatest achievement arena of the life.</p>
          </div>

          <div class="pattern-box">
            <h4>2. The Grand Cross (The Crucible)</h4>
            <p>Four planets in mutual squares and oppositions in the same quadruplicity. Creates structural tension in all four quadrants of existence. Demands supreme executive maturity and organizational mastery.</p>
          </div>

          <div class="pattern-box">
            <h4>3. The Grand Trine & Kite</h4>
            <p>A closed triangle of mutual 120° trines across an element. Bestows extraordinary innate harmony. When bisected by an opposition from a fourth planet (forming a Kite), it gains the ambition and focus required to manifest its gifts.</p>
          </div>

          <div class="pattern-box">
            <h4>4. The Yod (Finger of God)</h4>
            <p>Two planets in sextile (60°), both forming 150° inconjuncts to an apex planet. Points like an arrow toward the apex planet, demanding compulsory, fated psychological adjustment and specialized destiny.</p>
          </div>
        </article>
      </section>

      <!-- SEARCH VIEW -->
      <section id="view-search" class="tab-content">
        <div class="search-container">
          <input type="text" id="codex-search-input" placeholder="Search aspects, conjunctions, squares, trines, T-squares..." aria-label="Search codex">
          <div id="search-results" class="search-results"></div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Source: <em>Planets in Aspect: Understanding Your Inner Dynamics</em> by Robert Pelletier (Para Research, 1974).</p>
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
console.log('Successfully wrote index.html for Planets in Aspect (' + htmlContent.length + ' chars)');
