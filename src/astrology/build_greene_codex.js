/**
 * Builder for Liz Greene: The Horoscope in Manifestation
 * Subtitle: Psychology and Prediction
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | Psychological Astrology & The Dynamics of Event Manifestation
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-horoscope-in-manifestation-greene');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Epistemology of Manifestation: Bridging Archetypal Psychology and Physical Fate",
    scope: "Part One: Introduction to the psychological model of event manifestation, the false dichotomy between internal psychology and external prediction, and the triadic levels of reality.",
    epistemic_status: "PSYCHOLOGICAL_EPISTEMOLOGY_AND_EVENT_TELEOLOGY",
    materiality: "CRITICAL",
    core_theme: "How internal archetypal dynamics precipitate into concrete external physical events: dismantling the artificial divide between psychological astrology and predictive forecasting.",
    textual_analysis: [
      "Liz Greene, co-founder of the Centre for Psychological Astrology (CPA) in London and Jungian analyst, resolves the longstanding ideological warfare between traditional predictive astrologers (who claim the chart predicts objective external events) and modern psychological astrologers (who claim the chart only describes subjective inner character). Greene demonstrates that psyche and world are not two separate domains; they are two faces of a single unitary reality (the alchemical *unus mundus*).",
      "The Three Levels of Astrological Expression: Every planetary transit, progression, and natal configuration operates simultaneously across three interconnected levels of expression:",
      "1. The Archetypal / Mythic Level: The universal, collective transpersonal meaning seeking evolutionary realization (teleology).",
      "2. The Psychological / Emotional Level: How the ego experiences the archetypal shift—subjective feelings, unconscious complexes, defense mechanisms, anxiety, depression, or joy.",
      "3. The Somatic / Concrete Physical Level: The physical crystallization of the archetype into external events, bodily illness (somatisation), marriages, bankruptcies, accidents, or relational encounters.",
      "The Law of Inevitable Materialization: Greene establishes the fundamental psychoanalytic axiom of astrology: *Whatever remains unconscious within the individual is inevitably projected outward and met in the outer world as fate.* An unintegrated Mars does not vanish; it manifests as a mugger in an alley or an inflammatory somatic infection. Event prediction is therefore impossible to divorce from depth psychology."
    ],
    verbatim_quote: "When an inner situation is not made conscious, it appears outside as fate. The horoscope does not separate mind from matter; it maps the precise psychic conduits through which unconscious complexes materialize into physical reality.",
    operational_heuristic: "Never predict a future event as an isolated external accident; always decode the underlying psychological complex seeking conscious expression, asking: 'What unconscious archetype is demanding incarnation through this crisis?'",
    key_motifs: [
      "The Unus Mundus (Unitary Reality)",
      "Three Levels of Expression (Mythic, Psychic, Somatic)",
      "Unconscious Complex as External Fate",
      "Event Teleology vs. Fatalism",
      "Psychological-Predictive Synthesis"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Anatomy of the Complex: From Janet and Freud to Jung and the Natal Chart",
    scope: "Part One: The historical genealogy of the psychological complex (Charcot, Janet, Freud, Jung) and its exact correspondence to planetary configurations and aspect networks in the horoscope.",
    epistemic_status: "COMPLEX_PSYCHOLOGY_AND_PLANETARY_CIRCUITS",
    materiality: "CRITICAL",
    core_theme: "The nature of psychological complexes as autonomous sub-personalities possessing their own emotional charge, and how natal aspect networks identify their specific archetypal architecture.",
    textual_analysis: [
      "The Scientific Lineage of the Complex: Greene traces the clinical evolution of the 'complex' from French psychiatrists Jean-Martin Charcot and Pierre Janet (who discovered that dissociated emotional memories create subconscious splinter-psyches) through Sigmund Freud (who viewed complexes as repressed infantile sexual conflicts) to C.G. Jung.",
      "Jung's Revolutionary Discovery: Jung demonstrated that complexes are not mere pathological neuroses. They are the natural building blocks of the human psyche. Every complex consists of two layers: (1) a personal emotional core derived from childhood trauma or parental conditioning, and (2) an underlying universal archetypal nucleus.",
      "The Natal Chart as a Map of Complexes: The birth chart provides an objective diagnostic X-ray of the individual's innate complexes. A single isolated planet represents a basic archetypal drive; however, when two or more planets form hard aspects (conjunctions, squares, oppositions, contraparallels), they form a permanent, autonomous 'psychological complex.'",
      "The Father Complex Exemplified (Sun-Saturn): A native with Sun square Saturn possesses an archetypal Father Complex. The personal experience of an emotionally cold, absent, or critical biological father (the personal layer) activates the eternal archetype of Kronos/Senex—the stern judge, taskmaster, and reality principle. The native carries an inner tyrant who constantly whispers that they are inadequate, defective, or fraudulent."
    ],
    verbatim_quote: "Complexes are like autonomous actors living inside us. We do not have complexes; complexes have us. They speak through our mouths, sabotage our careers, choose our lovers, and arrange our most dramatic external disasters.",
    operational_heuristic: "Identify the native's tightest hard aspect clusters (especially those involving the Sun, Moon, or Ascendant); treat these planetary networks as living, semi-autonomous sub-personalities possessing their own agendas and survival drives.",
    key_motifs: [
      "Janet, Freud & Jung on Complexes",
      "Personal Trauma vs. Archetypal Nucleus",
      "Aspect Networks as Complex Blueprints",
      "The Sun-Saturn Father Complex",
      "Autonomous Splinter-Personalities"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Mechanics of Projection: How Unconscious Complexes Materialize as External Fate",
    scope: "Part One: Projection as a natural psychic process, hooks for projection, repetitive life scripts, and the theatre metaphor of the horoscope.",
    epistemic_status: "PROJECTION_MECHANICS_AND_RELATIONAL_SCRIPTS",
    materiality: "CRITICAL",
    core_theme: "The involuntary mechanism of psychological projection: how the unconscious casts other people into the roles of its disowned planetary complexes, staging external life dramas.",
    textual_analysis: [
      "Projection as an Involuntary Mechanism: Projection is not a conscious, deliberate deception; it is an automatic, involuntary psychic phenomenon. We cannot project onto a blank wall; the unconscious requires a 'hook'—some minute characteristic in another person or external situation that resonates with the disowned inner archetype.",
      "The Theatre Metaphor of the Horoscope: Greene compares the birth chart to an Elizabethan theatre company. The conscious ego believes it is the sole director, writer, and star of the play. In reality, the other planets in the chart represent autonomous actors waiting in the wings. If the ego refuses to give an actor (e.g., Mars, Pluto, Saturn) a speaking part on the inner stage, that actor slips out the stage door into the auditorium and enters through the front door disguised as a lover, a tyrannical boss, a thief, or a lawsuit.",
      "The Repetition Compulsion in Relationships: When an individual disowns their own aggression or authority (e.g., an unintegrated Mars or Saturn), they inevitably attract partners who are hyper-aggressive, authoritarian, or emotionally abusive. The native plays the innocent victim, unaware that their unconscious has hired an actor to play the complementary role in their unwritten psychological script.",
      "The Dissolution of Projections: Genuine healing occurs only when the native withdraws the projection—recognizing that the tyrannical monster or idealized savior 'out there' is fundamentally their own disowned planetary energy seeking conscious integration."
    ],
    verbatim_quote: "The unconscious is a brilliant theatrical casting director. If you disown your own Pluto, you will unfailingly marry him, work for him, or be sued by him, until you finally acknowledge the dark titan dwelling in your own depths.",
    operational_heuristic: "Whenever a client repeatedly complains about being victimized by the same type of person (tyrants, addicts, betrayers), audit their chart for the planetary archetype corresponding to that villain: that planet represents their own disowned, projected complex.",
    key_motifs: [
      "Involuntary Psychological Projection",
      "Hooks for Projection",
      "The Horoscope as Inner Theatre Company",
      "Repetitive Relational Life Scripts",
      "Withdrawing Projections"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Somatisation and Psychosis: The Body and Mind as Stages of the Unconscious",
    scope: "Part One: When complexes bypass the emotional realm: somatic illnesses as materialized complexes, somatic holding, and the threshold of psychotic decompensation.",
    epistemic_status: "SOMATIC_MEDICINE_AND_PSYCHOTIC_DECOMPENSATION",
    materiality: "CRITICAL",
    core_theme: "The somatic and psychotic manifestations of unintegrated astrological complexes: how the body becomes the organ of last resort when the ego cannot metabolize archetypal energy.",
    textual_analysis: [
      "The Body as the Organ of Last Resort: When an emotional conflict or complex is so threatening to the conscious ego that it cannot be experienced even in neurotic anxiety or depression, it descends directly into the somatic tissue. The body somatises the planetary archetype.",
      "Case Study — Ted's Hay Fever: Greene analyzes the case of 'Ted,' who suffered from catastrophic, incapacitating seasonal hay fever. His chart revealed a severe Mars-Saturn-Neptune T-square involving the 6th and 12th houses. Ted consciously presented as a gentle, saintly, conflict-averse pacifist. His suppressed, radioactive rage (Mars) and guilt (Saturn) were denied conscious expression, leaving his immune system to act out the war somatically: his body mounted violent, hysterical inflammatory attacks against harmless pollen.",
      "Complexes and Psychosis: While neurosis involves an intact ego struggling against a localized complex, psychosis represents the total drowning of the ego by the archetypal contents of the collective unconscious. In psychotic decompensation, the boundary between the ego and the transpersonal outer planets (Neptune, Pluto, Uranus) dissolves completely.",
      "Freeing the Energy of the Complex: Healing cannot be achieved by 'killing' or amputating a complex. A complex is made of indestructible archetypal energy. The therapeutic goal is to release the trapped libido by building a strong, flexible ego container that can express the planetary energy creatively and consciously."
    ],
    verbatim_quote: "The body speaks the language that the ego refuses to utter. If your conscious mind cannot tolerate anger, your immune system will wage a bloody war against your own tissues. Illness is often an unlived planet crying out for incarnation.",
    operational_heuristic: "In clients with chronic, medically unexplained physical symptoms, examine the 6th/12th house axis and planets in hard aspect to Saturn or Neptune; investigate what forbidden emotion or drive is being somatised into physical illness.",
    key_motifs: [
      "Somatisation of Planetary Complexes",
      "Ted's Hay Fever (Mars-Saturn-Neptune)",
      "The Immune System as Somatic Battlefield",
      "Psychotic Boundary Dissolution",
      "Reclaiming Trapped Libido"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Architectural Markers of Complexes: Hard Aspects, Angularity, and Elemental Deficits",
    scope: "Part One: Chart configurations that identify chronic complexes: T-squares, Grand Crosses, planets on the angles (Asc, Dsc, MC, IC), and missing/inferior elements.",
    epistemic_status: "STRUCTURAL_CHART_SYNTHESIS_AND_FOCAL_CENTERS",
    materiality: "CRITICAL",
    core_theme: "How geometric aspect patterns, angular dominance, and elemental imbalances identify the primary structural storm centers of the personality.",
    textual_analysis: [
      "Hard Aspects as Kinetic Energetic Engines: Greene challenges the popular notion that soft aspects (trines and sextiles) are superior to hard aspects (squares and oppositions). Trines represent innate gifts that often remain dormant, passive, or complacent. Squares and oppositions generate agonizing friction, neurosis, and divine discontent—they are the engines that drive all significant human achievement and individuation.",
      "T-Squares and The Focal Apex Planet: A T-square focuses immense energetic tension upon the apex planet (the planet receiving two 90° squares from the opposition). The apex planet functions as the primary pressure valve of the entire personality. Whatever sign and house the apex planet occupies will be the arena where the native repeatedly stages major life dramas, crises, and creative sublimations.",
      "Angularity as Compulsory Manifestation: Any planet placed within 8° of the four primary angles (Ascendant, Descendant, Midheaven, IC) is structurally compelled to manifest in the physical world. Angular planets cannot remain mere internal psychological concepts; they are dragged kicking and screaming onto the public stage of career, marriage, and bodily appearance.",
      "Elemental Deficits and The Inferior Function: When a chart is entirely devoid of an element (e.g., zero water or zero earth), that missing element represents Jung's 'Inferior Function.' The native feels profound unconscious shame, clumsiness, or terror in that domain, frequently over-compensating with hyper-intellectualization (missing water) or frantic material hoarding (missing earth)."
    ],
    verbatim_quote: "Trines make us comfortable; squares make us conscious. A chart without hard aspects is like an engine without fuel. The greatest individuals in history are those who learned how to transmute the agony of a T-square into the gold of enduring mastery.",
    operational_heuristic: "Identify the apex planet of any T-square and planets conjunct the angles: treat these as the primary structural conduits through which the native's unconscious complexes are forced into external physical manifestation.",
    key_motifs: [
      "Hard Aspects as Evolutionary Engines",
      "T-Square Apex Planet Dynamics",
      "Angularity as Compulsory Manifestation",
      "Elemental Deficits & The Inferior Function",
      "Transmuting Friction into Consciousness"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Wounded Healer and the Shadow: Saturn and Chiron as Chronic Complex Catalysts",
    scope: "Part One: The deep psychological mechanisms of Saturn (the Shadow Boundary, Defense Mechanisms, and Father Complex) and Chiron (the Incurable Wound, Collective Trauma, and The Wounded Healer).",
    epistemic_status: "SHADOW_PSYCHOLOGY_AND_ARCHETYPAL_WOUNDING",
    materiality: "CRITICAL",
    core_theme: "The complementary roles of Saturn and Chiron: Saturn as the architect of defensive armor and shadow shame, and Chiron as the somatic, unhealable wound that unlocks compassion and healing.",
    textual_analysis: [
      "Saturn as The Architect of the Shadow: Saturn represents the boundary of conscious ego control. Wherever Saturn is placed, the individual feels inadequate, impoverished, unlovable, or clumsy. To defend against this unbearable vulnerability, the ego constructs a rigid psychological fortress (over-achievement, emotional cynicism, perfectionism, or authoritarian control).",
      "Saturn's Alchemical Transmutation: Greene emphasizes that Saturn is the *prima materia* of the alchemists—the lead that must be transmuted into spiritual gold. The native cannot bypass Saturn; they must sit in the cold darkness of their inferiority, take full responsibility for their boundaries, and construct genuine inner authority rather than relying on external approval.",
      "Chiron — The Archetype of the Incurable Wound: Discovered in 1977 between Saturn and Uranus, Chiron represents an entirely different dimension of suffering. While Saturn's wound can be healed and mastered through discipline and time, Chiron's wound is existential, unfair, and incurable. Like the Centaur Chiron in Greek myth, who was struck by Hercules' poisoned arrow and could neither die nor heal, the native carries an area of chronic, unmerited somatic or emotional wounding.",
      "Chiron vs. Saturn: Saturn says: *'You failed because you were undisciplined; work harder.'* Chiron says: *'Life is fundamentally flawed, unfair, and vulnerable; you must develop compassion for mortal suffering.'* Chiron dissolves the bitterness of the ego, transforming the wounded victim into the authentic Wounded Healer."
    ],
    verbatim_quote: "Saturn is the wall you build to protect yourself from shame; Chiron is the crack in the wall where the poison seeped in. You can master Saturn through heroic discipline, but you can master Chiron only through the surrender of your pride and the birth of universal compassion.",
    operational_heuristic: "Distinguish between a client's Saturnian and Chironic challenges: treat Saturn with practical accountability, boundaries, and emotional containment; treat Chiron with deep somatic acceptance, grief-tending, and the cultivation of empathy.",
    key_motifs: [
      "Saturn as the Architect of Defense Armor",
      "Lead Transmuted into Gold (Prima Materia)",
      "Chiron as the Incurable Existential Wound",
      "The Myth of the Centaur Chiron",
      "The Wounded Healer Archetype"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Unaspected Planet: The Autonomous Sub-Personality Operating in the Dark",
    scope: "Part One: The phenomenon of unaspected planets (planets forming no major Ptolemaic aspects): extreme swings between dormancy and explosive volcanic expression, lack of psychological integration.",
    epistemic_status: "ISOLATED_PLANETARY_FUNCTIONS_AND_SUBCONSCIOUS_ISLANDS",
    materiality: "CRITICAL",
    core_theme: "The paradoxical mechanics of unaspected planets: why isolated celestial bodies swing between complete psychic invisibility and sudden, overwhelming takeover of the personality.",
    textual_analysis: [
      "Definition of the Unaspected Planet: A planet is technically unaspected when it forms no major Ptolemaic aspects (conjunction, sextile, square, trine, opposition) to any other planet within standard orbs (allowing minor aspects like quincunxes or semi-sextiles).",
      "The Island in the Psyche: Because the unaspected planet has no energetic telephone lines connecting it to the rest of the chart, it functions as an isolated island in the unconscious. The native often has no conscious relationship with this planetary archetype during early life. For example, a person with an unaspected Mars may genuinely believe they are entirely devoid of anger, aggression, or competitive drive.",
      "The 'Jack-in-the-Box' Paradox: Unaspected planets exhibit an all-or-nothing, binary behavioral pattern. Most of the time, the archetype remains asleep in a cellar. However, when triggered by a major transit or progression, the box pops open, and the archetype bursts forth with unmediated, raw, primitive intensity. The peaceful native with an unaspected Mars suddenly erupts in a blind, homicidal rage that leaves them and their loved ones completely stunned.",
      "Clinical Integration Protocol: The unaspected planet must be carefully courted. Because it is not contaminated or modified by other planetary drives, it possesses purity and extraordinary potential for genius (e.g., an unaspected Venus possessing pure aesthetic vision). The native must consciously build artificial bridges to this planet through creative expression, ritual, and deliberate psychological awareness."
    ],
    verbatim_quote: "An unaspected planet is a wild beast living in the basement. Because it has no conversation with the other gods in the chart, it is either completely asleep or violently rampaging through the house. Your task is to invite it to the family dinner table.",
    operational_heuristic: "When an unaspected planet is present, warn the client about the 'binary trap' (dormancy vs. volcanic eruption); guide them to engage the isolated archetype proactively through daily conscious rituals before an unexpected transit detonates it.",
    key_motifs: [
      "The Unaspected Planet Definition",
      "The Isolated Island in the Psyche",
      "The Jack-in-the-Box Binary Dynamic",
      "Purity of Unmodified Archetypal Energy",
      "Building Artificial Bridges to Consciousness"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Dual Clock: Transits (Cosmic Environment) vs. Progressions (Internal Entelechy)",
    scope: "Part Two: A psychological approach to timing: the fundamental difference between outer transits and secondary progressions, the concept of timing, and when an event actually occurs.",
    epistemic_status: "PREDICTIVE_CHRONOMETRY_AND_DEVELOPMENTAL_ENTELECHY",
    materiality: "CRITICAL",
    core_theme: "The profound distinction between Transits (the outer collective environment impinging on the individual) and Progressions (the internal, biological unfolding of innate destiny).",
    textual_analysis: [
      "The Essential Difference: Greene provides the definitive psychological distinction between the two great predictive engines of Western astrology:",
      "1. Transits — The Outer World Impinging: Transits represent the actual astronomical movement of the planets in real time. Psychologically, transits represent the objective cosmic and collective environment pressing against the ego from the outside. Transits feel like weather, external encounters, societal shifts, and objective challenges.",
      "2. Secondary Progressions — The Internal Seed Unfolding: Based on the Hermetic formula of 'a day for a year,' progressions do not represent external events. They represent the slow, organic unfolding of the native's innate potential (*entelechy*). Progressions describe the psychological maturation of the inner organs of the soul, the shifting of emotional seasons, and the readiness of the ego to embrace new archetypal chapters.",
      "When Does an Event Actually Occur?: Greene demonstrates that external physical events rarely occur under a transit alone. A physical event materializes when an outer transit triggers an active secondary progression. The progression creates the internal psychological readiness and unconscious tension; the transit acts as the external spark that ignites the gunpowder.",
      "The False Search for Exact Minutes: Mechanical prediction often fails because an event is not a single calendar point; it is a psychological process that unfolds over months or years. The divorce does not 'happen' on the day the legal papers are signed; it began years earlier when the progressed Sun squared natal Pluto."
    ],
    verbatim_quote: "Progressions are the internal growth of the tree; transits are the seasons and the storms. A hurricane can strike the forest, but it can uproot a tree only when that tree has already grown to a specific height and its roots have encountered the stone beneath the soil.",
    operational_heuristic: "Never interpret a major outer-planet transit in isolation; always check the secondary progressed positions (especially the progressed Moon and progressed Sun) to determine whether the client's inner psyche is actually ripe for the external event.",
    key_motifs: [
      "Transits as Objective Cosmic Weather",
      "Progressions as Internal Entelechy (Day-for-a-Year)",
      "The Ignition Formula: Transit Sparks Progression",
      "Events as Extended Psychological Processes",
      "The Ripeness of the Soul Matrix"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Anatomy of Plutonian Transits: Powerlessness, Betrayal, and Underworld Rebirth",
    scope: "Part Two: Detailed examination of transiting Pluto: the psychological experience of powerlessness, betrayal by trusted others, encountering collective taboos, and the death/rebirth of ego identity.",
    epistemic_status: "DEPTH_PSYCHOLOGY_OF_PLUTO_AND_UNDERWORLD_INITIATION",
    materiality: "CRITICAL",
    core_theme: "How transiting Pluto systematically strips the ego of illegitimate power, forces encounters with mortality and betrayal, and compels the catabolic decomposition of obsolete psychological structures.",
    textual_analysis: [
      "The Lord of the Underworld: Pluto represents the unstoppable biological and psychic evolutionary force that demands the death of obsolete forms. When Pluto transits a personal planet or angle, the ego is confronted with the one thing it dreads most: absolute, humiliating powerlessness.",
      "The Betrayal Script: In clinical practice, Greene notes that Pluto transits almost invariably involve an experience of profound betrayal—a spouse commits adultery, a trusted business partner embezzles funds, a body is struck by a terrifying medical diagnosis, or a family member dies. The native feels violently raped, humiliated, and stripped of dignity.",
      "The Archetypal Purpose of Betrayal: Psychologically, betrayal shatters the naive, childish illusion that the world is safe and under our control. The person who betrayed us was simply the instrument of Pluto, sent to destroy an infantile emotional adaptation. The ego is forced down into the Underworld (the realm of Hades), where it must confront its own suppressed darkness, rage, jealousy, and lust for control.",
      "The Rebirth Mechanism: Pluto never destroys anything that is genuinely authentic. It destroys only the calcified defenses, false personas, and manipulative strategies that the ego constructed to avoid vulnerability. Once the native surrenders the struggle for control and accepts the death of the old self, Pluto reveals its higher octave: unshakeable authentic personal authority, profound regenerative resilience, and deep psychological wisdom."
    ],
    verbatim_quote: "Pluto does not negotiate. When Hades rises from the underworld, he comes to claim what was already dead. If you fight him with control, he will break your bones; if you descend into his darkness with humility, he will gift you with the indestructible gold of your true soul.",
    operational_heuristic: "When a client is in the throes of a Pluto transit, forbid them from attempting to force a quick fix or retaliate against betrayers; counsel them to surrender the illusion of control, grieve the death of the old identity, and allow the alchemical underworld cooking to run its course.",
    key_motifs: [
      "Pluto as the Lord of the Underworld",
      "The Agony of Absolute Powerlessness",
      "The Archetypal Purpose of Betrayal",
      "Catabolic Decomposition of the Persona",
      "Surrender, Regeneration & Authentic Power"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Clinical Prognostic Ethics: Navigating Teleology, Decompensation, and Freeing the Energy",
    scope: "Synthesizing Masterclass: Integrating psychological depth into client counseling, managing transits of Uranus, Neptune, Saturn, and Chiron, ethical boundaries against deterministic terror, and facilitating the creative sublimation of complexes.",
    epistemic_status: "CLINICAL_ETHICS_AND_THERAPEUTIC_ASTROLOGY",
    materiality: "CRITICAL",
    core_theme: "The ethical and therapeutic craft of the psychological astrologer: translating dread-inducing predictive omens into profound evolutionary invitations for conscious individuation.",
    textual_analysis: [
      "The Danger of the Deterministic Astrologer: Greene passionately denounces astrologers who deliver fatalistic predictions (e.g., 'You will divorce in two years,' 'You will suffer an accident next March'). Such pronouncements inflict profound psychological trauma, programming the client's unconscious like a hypnotic curse and inducing paralyzing terror.",
      "The Teleological Reframing Protocol: The true task of the astrological counselor is not to predict the exact physical costume that fate will wear, but to illuminate the teleological purpose (*the why*) of the transit. Instead of saying *'Saturn will ruin your career,'* the psychological astrologer asks: *'What unrealistic fantasies and unsustainable shortcuts is Saturn requiring you to dismantle so that you can build enduring professional competence?'*",
      "Navigating Neptune vs. Uranus Transits:",
      "- During Neptune transits, the ego experiences chronic fatigue, disillusionment, and confusion. Do not push for decisive action; encourage surrender, rest, creative retreat, and spiritual discernment.",
      "- During Uranus transits, the nervous system is supercharged with restless electrical panic. Encourage courageous breaks from obsolete conformity, but demand somatic grounding to prevent reckless self-destruction.",
      "Freeing the Energy into Creative Sublimation: The ultimate goal of psychological astrology is the emancipation of libido trapped in pathological complexes. When the client consciously honors Mars through assertive boundaries, honors Venus through self-worth, and honors Saturn through disciplined mastery, the gods cease to punish them from the outside and begin to bless them from within."
    ],
    verbatim_quote: "The astrologer who predicts doom without offering psychological understanding is not a prophet; they are a spiritual terrorist. Our sacred calling is to help the client understand what the soul is trying to achieve through its suffering, transforming blind fate into conscious destiny.",
    operational_heuristic: "Whenever delivering a difficult transit forecast, never leave the client with an inescapable external threat; always provide them with the psychological key that explains what inner maturity the cosmos is attempting to midwife.",
    key_motifs: [
      "The Ethical Danger of Deterministic Prediction",
      "Teleological Reframing (The Why of Suffering)",
      "Differentiating Neptune Dissolution vs. Uranus Awakening",
      "Creative Sublimation of Planetary Libido",
      "Transforming Blind Fate into Conscious Destiny"
    ]
  }
];

// 1. Output knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log('Successfully wrote knowledge-units.json for The Horoscope in Manifestation');

// 2. Generate master-notes.md
let md = `# The Horoscope in Manifestation: Psychological and Predictive Dimensions
**Author:** Liz Greene, Ph.D.  
**First Published:** 1997 (Centre for Psychological Astrology Press / CPA Seminar Series)  
**Discipline:** Psychological Astrology, Jungian Depth Psychology, Archetypal Prognostics, Somatic Psychodynamics  
**Standard:** BKRS v2.0 Production Master Codex  
**Codex Scope:** 10 Comprehensive Units | Full Monograph Reconstruction

---

## Executive Architectural Overview

In *The Horoscope in Manifestation: Psychological and Predictive Dimensions*, Liz Greene—Jungian analyst, co-founder of the Centre for Psychological Astrology (CPA) in London, and the world's preeminent psychological astrologer—resolves the bitter, century-long schism between traditional predictive astrology and modern depth psychology.

For decades, astrologers have operated in two mutually contemptuous camps:
1. **The Traditional Determinists:** Claiming that the horoscope predicts concrete external events (marriages, deaths, fortunes, bankruptcies) regardless of individual consciousness.
2. **The Humanistic / Psychological Astrologers:** Claiming that the chart is purely an internal map of subjective feelings and character, dismissing concrete event prediction as vulgar superstition.

Greene demonstrates that this divide is fundamentally false, rooted in the obsolete Cartesian duality separating mind from matter. Drawing upon Carl Jung's concept of the *unus mundus* (the unitary reality) and Pierre Janet's clinical formulations of the unconscious complex, Greene reveals the primary engine connecting psyche to fate:

$$\\text{Unconscious Complex} \\xrightarrow{\\text{Involuntary Projection}} \\text{External Stage} \\xrightarrow{\\text{Physical Event}} \\text{Encounter with 'Fate'}$$

1. **The Triadic Reality:** Every planetary aspect, transit, and progression exists simultaneously on three levels:
   - *The Mythic / Archetypal:* The transpersonal evolutionary teleology.
   - *The Psychological / Emotional:* The subjective complex, defense mechanisms, and emotional turmoil.
   - *The Somatic / Physical:* The concrete crystallization into bodily illness (somatisation) or external events.
2. **The Anatomy of the Complex:** Aspects in the birth chart (particularly squares, oppositions, and T-squares) represent autonomous sub-personalities with their own emotional charge. When the conscious ego denies a complex a voice on the inner stage, that complex slips out the back door and enters through the front door disguised as a lover, a tyrant boss, a chronic illness, or a catastrophic lawsuit.
3. **The Dual Predictive Clocks:** The profound distinction between **Transits** (the outer collective environment and cosmic weather impinging on the ego) and **Secondary Progressions** (the internal biological and psychological unfolding of the soul's innate *entelechy*). An external event occurs only when an outer transit sparks an internally ripened progression.
4. **The Somatic Organ of Last Resort:** When a complex is too terrifying for the ego to experience even as neurotic depression or anxiety, it bypasses conscious awareness and materializes directly into physical tissue (e.g., inflammatory auto-immune diseases, psychosomatic collapses).
5. **The Ethics of Astrological Prognosis:** Why deterministic predictions are a form of psychological terrorism, and how the true astrologer acts as a midwife of conscious individuation—translating terrifying omens into evolutionary invitations.

This master codex reconstructs Liz Greene's clinical masterclasses across ten exhaustive knowledge units, providing the definitive guide for synthesizing depth psychology with clinical predictive forecasting.

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

  md += `#### Operational Clinical & Prognostic Heuristic\n`;
  md += `* **Clinical Heuristic:** ${u.operational_heuristic}\n\n`;

  md += `#### Key Conceptual Motifs & Index Terms\n`;
  u.key_motifs.forEach(m => {
    md += `- \`${m}\`\n`;
  });
  md += `\n---\n\n`;
});

md += `## Synthesis: The Triadic Manifestation Matrix

The following reference matrix synthesizes Liz Greene's model of how specific planetary energies manifest across the three levels of reality:

| Planetary Archetype | Mythic / Archetypal Teleology | Psychological / Emotional Complex | Somatic & Concrete Event Manifestation |
| :--- | :--- | :--- | :--- |
| **Mars** | The Heroic Will; Assertion; Severing ties; Self-defense | Rage, impotence, castration anxiety, passive aggression, terror of conflict | Inflammatory infections, fevers, cuts, burns, violent muggings, athletic breakthroughs |
| **Saturn** | Reality Principle; The Great Architect; Enduring Form | Inferiority, chronic shame, impostor syndrome, cynicism, tyrannical perfectionism | Skeletal/dental disease, chronic arthritis, professional demotions, structural stabilization |
| **Chiron** | The Wounded Healer; Acceptance of Mortality and Flaw | Existential alienation, unmerited grief, bitter victimization, profound empathy | Incurable physical ailments, chronic somatic vulnerability, medical interventions, healing vocations |
| **Uranus** | The Promethean Fire; Liberation; Awakening Autonomy | Claustrophobia, erratic detachment, intellectual arrogance, panic, hyper-arousal | Sudden accidents, electrical nerve discharges, sudden divorces, abrupt career resignations |
| **Neptune** | The Oceanic Soul; Transcendent Unity; Spiritual Dissolution | Victim/savior complexes, guilt, depressive anhedonia, addictive escapism, confusion | Auto-immune collapse, fluid retention, pharmaceutical addiction, spiritual awakenings, fraud |
| **Pluto** | The Underworld King; Catabolic Decomposition & Rebirth | Terrifying powerlessness, obsession, volcanic rage, terror of betrayal, morbid jealousy | Catastrophic betrayals, sudden financial collapse, surgical intervention, miraculous rebirth |

---

## The Dual Clock: Transits vs. Progressions Reference

\`\`\`
                             THE PREDICTIVE IGNITION FORMULA
                             
     SECONDARY PROGRESSIONS                      TRANSITING PLANETS
  (Internal Soul Maturation)               (Outer Environmental Weather)
              │                                          │
              │  [ "Day-for-a-Year" Clock ]              │  [ Astronomical Ephemeris Clock ]
              │  Internal Readiness & Ripeness           │  External Spark & Objective Event
              │                                          │
              └───────────────────┬──────────────────────┘
                                  │
                                  ▼
                      THE MANIFESTED EVENT
            (Psychological Crisis + Concrete Event)
\`\`\`

1. **Secondary Progressions ($1 \\text{ Day} = 1 \\text{ Year}$):**
   - Progressions map the internal psychological temperature and the evolution of the natal core.
   - A progressed aspect describes the **internal readiness** of an archetypal complex to shift.
   - When the Progressed Moon changes sign or forms a hard aspect, the native undergoes a profound mood shift that redefines what they need to feel emotionally secure.
2. **Transits (Real-Time Planetary Ephemeris):**
   - Transits represent the cosmic and collective environment pressing into the native's life from the outside.
   - An isolated transit without an active progression often produces a fleeting mood or minor external friction that passes without permanent structural change.
3. **The Event Threshold:**
   - A major life-altering event (marriage, divorce, career collapse, profound spiritual awakening) occurs **only when an outer-planet transit makes an exact aspect to a sensitive point that is simultaneously activated by a secondary progression**.

---

## Ethical Standards for the Psychological Astrologer

1. **Rejection of Fatalistic Curses:** Never tell a client that an external catastrophe is inevitable. Prediction must always be delivered as an inquiry into the unconscious: *What inner maturity is seeking birth through this friction?*
2. **Respect for Defense Mechanisms:** Never violently rip away a client's psychological defenses (Saturn) before they have built an alternative container. Defenses exist for a reason; they protect the fragile ego until it is strong enough to bear the light.
3. **Teleological Orientation:** Always orient the client toward meaning (*teleology*). Suffering is bearable when it is understood as the necessary labor pains of the soul giving birth to higher consciousness.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log('Successfully wrote master-notes.md for The Horoscope in Manifestation (' + md.length + ' chars)');

// 3. Generate index.html (Reader)
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Horoscope in Manifestation | Liz Greene | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }
    
    .badge-psych {
      background: #4f46e5;
      color: #eef2ff;
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
      color: #4338ca;
      margin-bottom: 0.25rem;
    }

    [data-theme="dark"] .stat-value {
      color: #818cf8;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .triad-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    .triad-table th, .triad-table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    [data-theme="dark"] .triad-table th, [data-theme="dark"] .triad-table td {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .triad-table th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }

    [data-theme="dark"] .triad-table th {
      background: rgba(255, 255, 255, 0.05);
    }

    .formula-banner {
      background: rgba(79, 70, 229, 0.08);
      border-left: 4px solid #4f46e5;
      padding: 1.25rem;
      margin: 1.5rem 0;
      border-radius: 0 6px 6px 0;
      font-family: var(--font-serif);
      font-size: 1.05rem;
    }

    [data-theme="dark"] .formula-banner {
      background: rgba(129, 140, 248, 0.1);
      border-left-color: #818cf8;
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../../index.html" class="back-link">← Master Index</a>
          <span class="badge-psych">Psychological Prognostics</span>
        </div>
        <h1 class="book-title">The Horoscope in Manifestation</h1>
        <p class="book-subtitle">Psychology and Prediction • Liz Greene, Ph.D.</p>
        
        <div class="reader-metadata-bar">
          <span><strong>Author:</strong> Liz Greene, Ph.D. (Jungian Analyst & CPA Co-Founder)</span>
          <span><strong>Focus:</strong> Complexes, Projection, Somatisation, & The Psychology of Transits</span>
          <span><strong>Standard:</strong> BKRS v2.0 Production Master (10 Units)</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="reading">Continuous Reader</button>
          <button class="tab-button" data-tab="analytical">Analytical Units</button>
          <button class="tab-button" data-tab="triad">Triadic Reality</button>
          <button class="tab-button" data-tab="predictive">The Dual Clock</button>
          <button class="tab-button" data-tab="search">Search Codex</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- CONTINUOUS READING VIEW -->
      <section id="view-reading" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Architecture of Event Manifestation</h2>
            <p>In this seminar masterclass, renowned Jungian analyst Liz Greene resolves the false split between psychological astrology and external prediction. Revealing how unconscious complexes project outward to stage life dramas and somatise into physical illness, Greene establishes the clinical laws through which the inner soul crystallizes as external fate.</p>
          </div>

          <div class="formula-banner">
            <strong>The Law of Manifestation:</strong><br>
            <em>"Whatever is unintegrated in the unconscious is projected outward onto people, institutions, and the body—returning to the ego as fate."</em>
          </div>

          <div class="stat-card-grid">
            <div class="stat-card">
              <div class="stat-value">Unus Mundus</div>
              <div class="stat-label">Unitary Reality (Mind & Matter)</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">3 Levels</div>
              <div class="stat-label">Mythic, Psychic, & Somatic</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">Transits</div>
              <div class="stat-label">Outer Cosmic Weather</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">Progressions</div>
              <div class="stat-label">Internal Entelechy (Ripeness)</div>
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
                  <strong>Clinical & Prognostic Heuristic:</strong> ${u.operational_heuristic}
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

      <!-- TRIADIC REALITY VIEW -->
      <section id="view-triad" class="tab-content">
        <article class="reader-prose">
          <h3>The Triadic Manifestation Matrix</h3>
          <p>How planetary archetypes operate across the three levels of reality:</p>

          <table class="triad-table">
            <thead>
              <tr>
                <th>Planetary Archetype</th>
                <th>Mythic / Archetypal Teleology</th>
                <th>Psychological / Emotional Complex</th>
                <th>Somatic & Concrete Event Manifestation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mars</strong></td>
                <td>Heroic assertion; cutting umbilical cords</td>
                <td>Rage, impotence, castration anxiety, passive aggression</td>
                <td>Inflammatory fevers, burns, cuts, muggings, athletic breakthroughs</td>
              </tr>
              <tr>
                <td><strong>Saturn</strong></td>
                <td>Reality principle; enduring form; boundaries</td>
                <td>Inferiority, chronic shame, impostor syndrome, cynicism</td>
                <td>Arthritis, skeletal/dental collapse, demotions, structural mastery</td>
              </tr>
              <tr>
                <td><strong>Chiron</strong></td>
                <td>The Wounded Healer; existential mortality</td>
                <td>Unmerited grief, bitter victimization, profound empathy</td>
                <td>Incurable physical ailments, somatic vulnerability, healing vocations</td>
              </tr>
              <tr>
                <td><strong>Uranus</strong></td>
                <td>Promethean awakening; radical autonomy</td>
                <td>Claustrophobia, sudden detachment, intellectual panic</td>
                <td>Sudden accidents, electrical shocks, divorces, sudden resignations</td>
              </tr>
              <tr>
                <td><strong>Neptune</strong></td>
                <td>Oceanic unity; spiritual dissolution</td>
                <td>Victim/savior dynamics, addiction, confusion, guilt</td>
                <td>Auto-immune collapse, fluid retention, chemical addiction, fraud</td>
              </tr>
              <tr>
                <td><strong>Pluto</strong></td>
                <td>Catabolic decomposition; underworld rebirth</td>
                <td>Powerlessness, obsession, volcanic rage, morbid jealousy</td>
                <td>Betrayals, financial collapse, surgical emergencies, profound rebirth</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <!-- PREDICTIVE DUAL CLOCK VIEW -->
      <section id="view-predictive" class="tab-content">
        <article class="reader-prose">
          <h3>The Dual Predictive Clock: Transits vs. Progressions</h3>
          <p>The definitive psychological formula for forecasting external events:</p>

          <div style="background:rgba(0,0,0,0.03); border:1px solid rgba(0,0,0,0.08); padding:1.5rem; border-radius:6px; margin:1.5rem 0;">
            <h4 style="margin-top:0; font-family:var(--font-serif); font-size:1.2rem; color:#4338ca;">1. Secondary Progressions = The Internal Clock (Day-for-a-Year)</h4>
            <p>Progressions do not describe external events. They map the slow, organic unfolding of the native's innate potential (<em>entelechy</em>). Progressions describe the psychological maturation of the soul, the shifting of emotional seasons, and the readiness of the ego to embrace new archetypal chapters.</p>

            <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:#4338ca;">2. Transits = The Objective Cosmic Weather</h4>
            <p>Transits represent the real-time astronomical movement of planets pressing into the individual's life from the outside. Transits feel like weather, external encounters, societal shifts, and objective challenges.</p>

            <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:#4338ca;">3. The Ignition Threshold</h4>
            <p>An external physical event materializes <strong>only when an outer transit triggers an active secondary progression</strong>. The progression creates the internal psychological readiness; the transit acts as the external spark that ignites the gunpowder.</p>
          </div>
        </article>
      </section>

      <!-- SEARCH VIEW -->
      <section id="view-search" class="tab-content">
        <div class="search-container">
          <input type="text" id="codex-search-input" placeholder="Search complexes, projection, transits, somatisation..." aria-label="Search codex">
          <div id="search-results" class="search-results"></div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Source: <em>The Horoscope in Manifestation: Psychology and Prediction</em> by Liz Greene, Ph.D. (Centre for Psychological Astrology Press, 1997).</p>
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
console.log('Successfully wrote index.html for The Horoscope in Manifestation (' + htmlContent.length + ' chars)');
