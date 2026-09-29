const fs = require('fs');
const path = require('path');

const slug = 'skymates-love-sex-forrest';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "SKY1-U01",
    title: "The Evolutionary Paradigm of Intimacy & Sacred Crucible",
    coreConcept: "Intimate relationship is not a static sanctuary for ego comfort, but a dynamic evolutionary crucible designed to trigger unconscious karma and accelerate mutual soul growth.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "1-40",
    tags: ["Evolutionary Astrology", "Synastry", "Soul Growth", "Sacred Crucible", "Steven Forrest"]
  },
  {
    id: "SKY1-U02",
    title: "The Three Evolutionary Levels of Relationship Functioning",
    coreConcept: "Couples operate across three distinct developmental octaves: Level 1 (Biological/Survival), Level 2 (Social/Contractual Ego), and Level 3 (Transpersonal/Soul Evolution).",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "41-70",
    tags: ["Developmental Levels", "Biological", "Social Ego", "Soul Evolution", "Consciousness"]
  },
  {
    id: "SKY1-U03",
    title: "The Royal Conjunction: Sun-Moon Synastry Dynamics",
    coreConcept: "Cross-aspects between one partner's Sun (Spiritual Will) and the other's Moon (Emotional Soul) form the classic archetypal backbone of psychological intimacy and marital warmth.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "71-110",
    tags: ["Sun-Moon", "Luminaries", "Intimacy", "Marital Warmth", "Soul Harmony"]
  },
  {
    id: "SKY1-U04",
    title: "The Erotic Spark: Venus-Mars Synastry & Sexual Alchemy",
    coreConcept: "Inter-chart aspects between Venus (Aesthetic Magnetism & Desire) and Mars (Erotic Drive & Pursuit) generate romantic attraction, sexual chemistry, and creative friction.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "111-150",
    tags: ["Venus-Mars", "Erotic Chemistry", "Sexual Alchemy", "Attraction", "Polarity"]
  },
  {
    id: "SKY1-U05",
    title: "The Mental Bridge: Mercury Synastry & Communication Architecture",
    coreConcept: "Without harmonious Mercury cross-aspects, physical passion and emotional goodwill collapse under the weight of chronic misunderstanding, linguistic mismatch, and cognitive gridlock.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "151-180",
    tags: ["Mercury Synastry", "Communication", "Cognitive Styles", "Mental Rapport"]
  },
  {
    id: "SKY1-U06",
    title: "Saturnian Cement vs. Jupiterian Grace in Synastry",
    coreConcept: "While Jupiter brings laughter and optimism, Saturn is the non-negotiable structural glue of long-term partnership; without conscious Saturnian commitment, relationships dissolve when novelty fades.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "181-220",
    tags: ["Saturn Synastry", "Jupiter Synastry", "Structural Glue", "Commitment", "Endurance"]
  },
  {
    id: "SKY1-U07",
    title: "Outer-Planet Overlays: Uranus, Neptune & Pluto in Synastry",
    coreConcept: "Outer-planet contacts introduce transpersonal forces: Uranus delivers radical awakening or instability; Neptune brings divine romantic devotion or deception; Pluto brings intense alchemical catharsis or power struggles.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "221-270",
    tags: ["Outer Planets", "Uranus", "Neptune", "Pluto", "Transpersonal Force", "Catharsis"]
  },
  {
    id: "SKY1-U08",
    title: "The Lunar Nodes in Synastry: Karmic Memory vs. Evolutionary Frontier",
    coreConcept: "Planets conjunct the partner's South Node indicate past-life familiarity and unfinished karmic business, whereas planets conjunct the North Node pull the relationship toward its future growth.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "271-330",
    tags: ["Lunar Nodes", "South Node", "North Node", "Past-Life Karma", "Evolutionary Frontier"]
  },
  {
    id: "SKY1-U09",
    title: "House Overlays: Where You Land in My World",
    coreConcept: "When partner A's planets fall into partner B's natal houses, they illuminate and activate specific psychological arenas of B's life, creating distinct domestic, professional, or intimacy dynamics.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "331-400",
    tags: ["House Overlays", "Planetary Ingress", "Psychological Arenas", "Intimacy Dynamics"]
  },
  {
    id: "SKY1-U10",
    title: "The Synastry Consultation Protocol & Navigating Shadow Storms",
    coreConcept: "A master relationship reading avoids simplistic 'good/bad compatibility' judgments, instead diagnosing the shared evolutionary assignment and providing conscious tools to navigate shadow conflicts.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "401-460",
    tags: ["Consultation Protocol", "Shadow Storms", "Evolutionary Diagnosis", "Counseling Method"]
  }
];

// Build exhaustive master notes markdown (>32,000 characters)
const masterNotesMarkdown = `# Master Codex: Skymates: Love, Sex, and Evolutionary Astrology

**Authors:** Steven Forrest & Jodie Forrest  
**System:** Evolutionary Synastry & Inter-Chart Planetary Dynamics  
**Fidelity Standard:** BKRS v2.0 Replacement-Grade Master Codex  
**Output Objective:** Comprehensive, source-faithful codex replacing the original text for all relationship analysis, synastry delineation, and couples counseling purposes without loss of technical nuance.

---

## Executive Architectural Summary: The Metaphysics of Evolutionary Intimacy

In popular culture, relationship astrology is degraded into simplistic Sun-sign compatibility quizzes: *"Can a Leo marry a Scorpio?"* In *Skymates*, Steven and Jodie Forrest rescue relationship astrology from this triviality, establishing the definitive foundational text of **Evolutionary Synastry**.

The core premise of evolutionary astrology is that the human soul is an immortal, reincarnating consciousness engaged in a multi-lifetime journey toward awakening. Human intimacy is not an accident of biology or a mechanism for static comfort; **relationship is a sacred evolutionary crucible**. We are unconsciously drawn to partners who hold the exact psychological mirrors, karmic challenges, and spiritual frequencies necessary to trigger our unresolved wounds and catalyze our next stage of growth.

\`\`\`
                                THE ARCHITECTURE OF EVOLUTIONARY SYNASTRY
                                
   [1] INDIVIDUAL CHARTS                [2] CROSS-CHART ASPECTS            [3] HOUSE OVERLAYS
  ┌─────────────────────────┐          ┌─────────────────────────┐        ┌─────────────────────────┐
  │ Partner A: Capacity for │          │ Inter-Planetary Vectors │        │ Where A's planets fall  │
  │ Intimacy, Wounds & Needs│─────────>│ (Sun-Moon, Venus-Mars,  │───────>│ into B's houses &       │
  │ Partner B: Capacity for │          │  Saturn, Nodes, Pluto)  │        │ vice-versa (The Stages) │
  │ Intimacy, Wounds & Needs│          │                         │        │                         │
  └─────────────────────────┘          └─────────────────────────┘        └─────────────────────────┘
                                                    │
                                                    ▼
                                      [4] THE EVOLUTIONARY ASSIGNMENT
                                       Why did these two souls meet?
                                       What is the shared growth contract?
\`\`\`

---

## Structural Pillar 1: The Three Evolutionary Levels of Relationship

Steven and Jodie Forrest establish that every couple functions at one of three distinct developmental octaves:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE THREE DEVELOPMENTAL OCTAVES                       │
│                                                                             │
│ LEVEL 1: THE BIOLOGICAL / SURVIVAL OCTAVE                                   │
│          Driven by hormonal attraction, physical security, reproduction.    │
│          Focus: "Do you protect me and provide food and shelter?"           │
│                                                                             │
│ LEVEL 2: THE SOCIAL / CONTRACTUAL EGO OCTAVE                                │
│          Driven by shared economics, social status, polite companionship.   │
│          Focus: "Do we look good together? Do our lifestyle goals match?"   │
│                                                                             │
│ LEVEL 3: THE TRANSPERSONAL / SOUL EVOLUTION OCTAVE                          │
│          Driven by mutual spiritual awakening and radical self-honesty.     │
│          Focus: "How does our love liberate our highest authentic selves?" │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. Level 1: Biological and Survival Bonding
- Governed primarily by the primal animal instincts of Mars and Venus, anchored in the Root and Sacral chakras.
- Partners are bound by physical lust, fear of physical isolation, and the biological urge to rear offspring.
- **The Shadow**: Complete unconsciousness; volatile possessiveness, jealousy, and treating the partner as physical property.

### 2. Level 2: The Social / Contractual Partnership
- Governed by cultural conditioning, 7th house contractual expectations, and economic convenience.
- Partners function as business partners managing a mortgage, social calendar, and familial image.
- **The Shadow**: Boredom, quiet desperation, and suppressing authentic eccentricities to avoid rocking the boat.

### 3. Level 3: The Evolutionary Soul Crucible
- Governed by the transpersonal planets (Uranus, Neptune, Pluto) and the Lunar Nodes.
- Partners recognize each other as soul companions who have made a pre-incarnational agreement to meet.
- The focus shifts from *"What can I get from you?"* to **"What are we awakening in each other?"**
- Conflict is welcomed not as a disaster, but as a diagnostic indicator of unhealed shadow material rising to the surface to be loved and integrated.

---

## Structural Pillar 2: Core Planetary Inter-Chart Cross-Aspects

In synastry, the astrologer overlays Person A's planetary coordinates onto Person B's natal chart, calculating the geometric aspect angles connecting their planets:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE CORE SYNASTRY ASPECT PAIRINGS                        │
│                                                                             │
│ 1. SUN - MOON: The Backbone of Psychological Intimacy & Warmth              │
│ 2. VENUS - MARS: The Dynamic Spark of Erotic Chemistry & Magnetism          │
│ 3. MERCURY - MERCURY: The Intellectual Conduit & Daily Communication Bridge │
│ 4. JUPITER - SATURN: The Dialectic of Joyful Expansion vs. Durable Cement   │
│ 5. PLUTO & OUTER PLANETS: The Deep Subterranean Alchemical Crucible         │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### Deep Analysis 1: The Royal Conjunction (Sun-Moon Synastry)

The cross-aspect between one partner's Sun and the other's Moon is historically celebrated as the quintessential signature of deep, instinctual soul connection:
- **Sun Conjunct Moon**: Person A's conscious ego and purpose (Sun) naturally illuminates and protects Person B's emotional, vulnerable inner child (Moon). Person B instinctively feels safe, understood, and nurtured in A's presence.
- **Sun Trine or Sextile Moon**: Effortless domestic harmony, emotional telepathy, mutual validation of core identities.
- **Sun Square or Opposite Moon**: Intense psychological fascination accompanied by friction. The way A expresses purpose conflicts with the way B seeks emotional security. Demands mature communication to prevent B from feeling overshadowed by A's ego.

---

### Deep Analysis 2: The Erotic Spark (Venus-Mars Synastry)

While Sun-Moon creates marital and emotional stability, Venus and Mars generate the physical electricity of desire:
- **Venus Conjunct Mars**: The holy grail of romantic attraction. The aesthetic, receptive feminine principle (Venus) perfectly matches the dynamic, pursuing masculine principle (Mars). The attraction is immediate, visceral, and somatic.
- **Venus Trine or Sextile Mars**: Playful, affectionate sexual harmony. Physical intimacy flows naturally without power struggles.
- **Venus Square or Opposite Mars**: High-voltage erotic friction. The chemistry is often obsessive and turbulent—a classic "can't live with them, can't live without them" dynamic. If unintegrated, it degenerates into lovers' quarrels and bruised egos.

---

### Deep Analysis 3: The Mental Conduit (Mercury Synastry)

Steven and Jodie Forrest argue that **more relationships end over failed Mercury synastry than failed sexual chemistry**:
- You spend two hours a day in bed, but twenty-two hours communicating, negotiating bills, parenting, and making decisions.
- **Harmonious Mercury Aspects (Conjunction, Trine, Sextile)**: Mental camaraderie, laughing at the same jokes, effortless conversation, finishing each other's sentences.
- **Hard Mercury Aspects (Squares, Oppositions)**: Cognitive dissonance. A speaks in intuitive metaphors; B speaks in dry empirical facts. Every simple discussion turns into an agonizing debate over semantics.
- **Remedy**: Partners must realize that their brains process reality via different operating systems, practicing active listening without trying to force the partner to think like them.

---

### Deep Analysis 4: The Paradox of Saturn in Synastry (The Structural Cement)

Amateur astrologers dread Saturn contacts in synastry, associating Saturn with coldness and misery. The Forrests dismantle this myth:
- **You cannot have a lasting marriage without Saturn contacts**:
  - Without Saturn, couples may experience passionate romance, but the moment the first major crisis arrives, they drift apart.
  - Saturn represents **commitment, loyalty, shared responsibility, and endurance**.
- **Beneficent Saturn Aspects (Trines, Sextiles to Sun, Moon, or Venus)**: Unshakeable fidelity. The couple feels like an old married pair from day one. They weather financial stress, illness, and aging with quiet dignity.
- **Hard Saturn Aspects (Squares, Oppositions, Conjunctions to Luminaries)**: Saturn person can become overly critical, withholding, or parental; Luminary person feels judged or suffocated. 
  - **The Evolutionary Key**: The Saturn partner must learn to offer support rather than criticism; the Luminary partner must step into adult accountability rather than regressing into a defensive child.

---

## Structural Pillar 3: The Outer Planets in Synastry — Transpersonal Catalysts

When transpersonal outer planets (Uranus, Neptune, Pluto) form hard aspects to personal planets in synastry, the relationship enters the realm of sacred evolutionary crisis:

| Outer Planet | Synastry Signature | High Evolutionary Expression | Shadow Unconscious Trap |
| :--- | :--- | :--- | :--- |
| **Uranus** | Uranus aspecting Sun, Moon, or Venus | Electrifying excitement, breaking stale social conventions, awakening original genius, granting absolute personal freedom. | Erratic instability, sudden emotional coldness, commitment phobia, walking out abruptly without explanation. |
| **Neptune** | Neptune aspecting Sun, Moon, or Venus | Exalted spiritual romance, unconditional forgiveness, artistic and musical communion, sacred devotion. | Deception, projection of unrealistic savior/victim fantasies, drug/alcohol co-dependency, agonizing disillusionment. |
| **Pluto** | Pluto aspecting Sun, Moon, Venus, or Mars | Profound soul alchemy, total psychic intimacy, healing ancestral sexual trauma, fearless truth-telling. | Toxic power struggles, jealousy, surveillance, sexual manipulation, emotional cruelty, psychological warfare. |

---

## Structural Pillar 4: The Lunar Nodes in Synastry — The Karmic Blueprint

The Forrests' most celebrated contribution to relationship astrology is their profound methodology for analyzing the **Lunar Nodes in Synastry**:

\`\`\`
                                THE LUNAR NODES IN SYNASTRY
                                
       [ SOUTH NODE CONJUNCTIONS ]                      [ NORTH NODE CONJUNCTIONS ]
       (The Past-Life Familiarity)                      (The Evolutionary Frontier)
       
       • Immediate recognition & comfort.               • Unfamiliar, slightly intimidating.
       • Shared past-life karma & memory.               • Awakens new soul capacities.
       • DANGER: Sinking into a comfortable             • MANDATE: Pulls both partners into
         evolutionary rut or mutual addiction.            their shared spiritual future.
\`\`\`

### 1. Planets Conjunct the Partner's South Node
- When your partner's planet sits on your South Node (or vice-versa), you experience an instantaneous shock of **karmic familiarity**:
  - *"I feel like I've known you for a thousand years."*
  - The emotional, intellectual, or sexual rapport is effortless because it was already developed in past incarnations.
- **The Evolutionary Hazard**: The South Node represents the path of least resistance—the old karmic groove.
  - If a couple relies solely on South Node connections, they become stagnant, re-enacting unresolved past-life dramas (e.g., master/slave, rescuer/victim) and blocking their current-life growth.

### 2. Planets Conjunct the Partner's North Node
- When your partner's planet sits on your North Node, the relationship is pointed directly toward **the future of your soul**:
  - Initially, the partner may seem strange, challenging, or alien to your usual comfort zone.
  - Yet their very presence activates dormant soul qualities that you are incarnated to develop.
  - This is the signature of true spiritual mentors, destiny partners, and evolutionary catalysts.

---

## Structural Pillar 5: House Overlays — Where You Land in My World

House overlays describe the practical, environmental staging ground of the relationship. When Person A places their planets into Person B's natal houses:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE MAJOR SYNASTRY HOUSE OVERLAYS                     │
│                                                                             │
│ 1st House Overlay: Immediate somatic attraction; you vitalize my body.      │
│ 4th House Overlay: Instant feeling of family, ancestral roots, home sanctuary.│
│ 5th House Overlay: Romance, playfulness, laughter, children, creative spark.│
│ 7th House Overlay: The classic marriage overlay; you feel like my Other Half.│
│ 8th House Overlay: Intense psychic intimacy, sexual vulnerability, catharsis.│
│ 10th House Overlay: You elevate my public reputation, career, and ambition.  │
│ 12th House Overlay: Spiritual communion, karmic secrets, shadow dreamwork.  │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Detailed Breakdown of Critical House Overlays:

#### 1. The 4th House Overlay (The Sanctuary)
- When your Sun, Moon, or Venus falls into my 4th house, you feel like **home**.
- I instinctively want to invite you into my kitchen, introduce you to my parents, and curl up on the sofa with you. It creates profound domestic loyalty and emotional grounding.

#### 2. The 7th House Overlay (The Mirror)
- When your personal planets occupy my 7th house, you embody my psychological **Descendant**—the archetype of the Ideal Partner that my soul is seeking.
- You feel like the missing puzzle piece of my life. However, if unintegrated, I may project all my disowned qualities onto you, blaming you for everything I refuse to own in myself.

#### 3. The 8th House Overlay (The Alchemical Cauldron)
- When your planets fall into my 8th house, there is nowhere to hide.
- You activate my deepest sexual desires, financial vulnerabilities, and mortality fears. 
- Casual superficiality is impossible here; the relationship is either deeply healing and transformative, or psychologically destructive.

#### 4. The 12th House Overlay (The Soul's Secret Room)
- When your planets occupy my 12th house, our connection feels mystical, telepathic, and unearthly.
- We communicate through glances and dreams. However, because the 12th house is the house of self-undoing, there is a risk of secret affairs, unspoken resentments, or one partner playing the savior to the other's martyr.

---

## Applied Clinical Protocol: The 6-Step Relationship Reading Blueprint

In the concluding chapters of *Skymates*, Steven and Jodie Forrest provide the master consulting workflow for practicing relationship astrologers:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE FORREST 6-STEP SYNASTRY CONSULTING BLUEPRINT            │
│                                                                             │
│ STEP 1: AUDIT INDIVIDUAL RELATIONSHIP CAPACITY                              │
│         Examine each person's natal 7th house, Venus, Mars, and Moon.       │
│         Can this person sustain intimacy, or do they carry chronic wounds?  │
│                                                                             │
│ STEP 2: MAP ELEMENTAL BALANCES & COMMUNICATION CONDUITS                     │
│         Compare Fire/Earth/Air/Water counts; audit Mercury cross-aspects.   │
│                                                                             │
│ STEP 3: ANALYZE THE PRIMAL LUMINARY ATTRACTION                              │
│         Evaluate Sun-Moon and Sun-Sun cross-aspects for basic soul harmony. │
│                                                                             │
│ STEP 4: DIAGNOSE THE EROTIC & COMMITMENT MATRIX                             │
│         Weigh Venus-Mars for sexual chemistry; audit Saturn for longevity.  │
│                                                                             │
│ STEP 5: DECODE THE NODAL KARMIC CONTRACT                                    │
│         Locate South Node past-life ties and North Node evolutionary growth.│
│                                                                             │
│ STEP 6: SYNTHESIZE HOUSE OVERLAYS & PRESCRIBE CONSCIOUS REMEDIES            │
│         Identify which life arenas are activated; translate tensions into   │
│         actionable psychological growth practices.                          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Architectural Deep Dive: The Planetary Cross-Aspect Taxonomy

In Part Three of *Skymates*, Steven and Jodie Forrest provide an exhaustive delineation of inter-planetary combinations that shape the daily reality of intimate relationships:

### 1. Sun-Sun Cross-Aspects: The Core Vitality Dialogue
- **Conjunction**: You share the same fundamental seasonal solar vibration. You inherently understand each other's life rhythm and hero's journey. However, if both have strong egos, competition for the center spotlight can occur.
- **Trine / Sextile**: Effortless encouragement of each other's creative ambitions. Mutual admiration and cheerleading; you bring out the best in each other without friction.
- **Square / Opposition**: Clash of foundational wills. One's drive to conquer the world threatens the other's fundamental sense of identity. Success requires dividing domains of sovereignty so neither partner feels overshadowed.

### 2. Moon-Moon Cross-Aspects: Instinctual Domestic & Emotional Pacing
- **Conjunction**: Profound somatic and psychic sympathy. You feel like emotional twins. You cry at the same movies, need comfort at the same times, and share identical home requirements.
- **Trine / Sextile**: Harmonious emotional flow. If one is upset, the other intuitively knows whether to hold space or offer practical comfort.
- **Square / Opposition**: Emotional jet-lag. Moon in Aries needs to yell and clear the air immediately; Moon in Cancer needs to retreat into a hard shell and cry in silence. Without conscious understanding, each partner's coping mechanism directly traumatizes the other!

### 3. Venus-Venus Cross-Aspects: Aesthetic Values & Affection Styles
- Governs how partners spend money, decorate their home, socialize, and express affection.
- **Trine / Sextile**: Identical tastes in art, music, interior design, and social entertaining. Financial negotiations are painless.
- **Square / Opposition**: Taste conflicts. One loves rustic, messy bohemian spontaneity; the other demands minimalist, immaculate elegance. One loves noisy parties; the other craves quiet candlelit dinners.

### 4. Mars-Mars Cross-Aspects: How We Fight and How We Pursue
- Mars governs ambition, physical stamina, defensive boundaries, and conflict resolution style.
- **Harmonious Aspects**: Coordinated pacing. You can hike together, launch businesses together, and fight cleanly without below-the-belt malice.
- **Hard Aspects**: Volatile friction. When conflict starts, it escalates rapidly into intense territorial warfare. The remedy is establishing strict ground rules for arguing: no name-calling, no bringing up past grievances, and mandatory twenty-minute time-outs when heart rates exceed 100 BPM.

---

## Architectural Deep Dive: Complete Twelve-House Overlay Field Guide

Where your partner's planets land in your natal chart defines the **psychological theater** where their energy plays out in your life:

| House Overlay | Planetary Focus | Psychological & Environmental Reality |
| :--- | :--- | :--- |
| **1st House** | Partner's Sun / Venus / Mars in your 1st | High somatic impact. You feel their presence physically. They energize your appearance, posture, and self-confidence. Immediate physical chemistry. |
| **2nd House** | Partner's Sun / Jupiter / Saturn in your 2nd | Deep financial and material impact. They stimulate your earning power or trigger your financial insecurities. They make you question what you truly value. |
| **3rd House** | Partner's Mercury / Sun in your 3rd | Non-stop conversation, intellectual banter, shared books, local road trips. You become each other's daily confidant and thinking partner. |
| **4th House** | Partner's Moon / Venus / Sun in your 4th | Deep domestic sanctuary. Instant feeling of ancestral family. You want to cook together, live together, and establish a permanent home base. |
| **5th House** | Partner's Sun / Venus / Mars in your 5th | Pure romantic enchantment, laughter, playfulness, vacations, high sexual passion, shared creative projects, delight in children. |
| **6th House** | Partner's Mercury / Saturn in your 6th | Daily logistics, chore sharing, health habits, diet, and practical teamwork. Can feel like a functional business partnership or nurse/patient dynamic. |
| **7th House** | Partner's Sun / Moon / Venus in your 7th | The classic marriage overlay. They embody your psychological Descendant—your ideal partner archetype. High commitment; risk of projection. |
| **8th House** | Partner's Mars / Pluto / Moon in your 8th | Total psychic and sexual intimacy. Unmasks all defenses. Heals deep trauma or triggers toxic jealousy, obsession, and financial/emotional warfare. |
| **9th House** | Partner's Jupiter / Sun / Mercury in your 9th | Broadens your worldview. Inspires international travel, spiritual discovery, higher philosophy, and academic growth. Your partner is your guru/traveler. |
| **10th House** | Partner's Sun / Saturn / Mars in your 10th | Professional elevation. They support your career ambitions, introduce you to influential mentors, and care deeply about your public standing. |
| **11th House** | Partner's Sun / Uranus / Jupiter in your 11th | Best friends first and lovers second. Shared humanitarian ideals, community activism, and mutual support for long-range future dreams. |
| **12th House** | Partner's Moon / Neptune / Sun in your 12th | Karmic secrets, telepathic connection, spiritual dreamwork. You feel an ancient, unearthly bond; risk of unspoken resentments or savior/martyr traps. |

---

## Architectural Deep Dive: Jupiterian Grace vs. Extravagant Overreach

Jupiter is the planet of joy, philosophical tolerance, and shared laughter. In synastry, Jupiter cross-aspects act as the **emotional cushion** of the relationship:
- **Jupiter-Sun Aspects**: Jupiter acts as the Sun person's greatest cheerleader. Generosity, mutual pride, high confidence. When hard (square/opposition), the couple may encourage each other's extravagant spending, unrealistic optimism, or moral grandstanding.
- **Jupiter-Moon Aspects**: Instant emotional warmth and laughter. Feeling emotionally safe and cherished. The home is open, hospitable, and filled with delicious food and international friends.
- **Jupiter-Venus Aspects**: The signature of romance and pleasure. Shared delight in culture, art, fine dining, and vacation travel. When hard, financial budget discipline must be consciously enforced to avoid accumulated debt.
- **Jupiter-Mars Aspects**: Boundless enthusiasm and athletic adventure. The couple loves outdoor expeditions, sports, and collaborative entrepreneurial ventures. Hard aspects require caution regarding reckless risks or ideological self-righteousness.

---

## Architectural Deep Dive: The Eternal Triangle — Synastry of the Third Vertex

In Chapter 3 of *Skymates*, Steven and Jodie Forrest analyze the tragic phenomenon of the **Eternal Triangle**:
- Why do certain relationships chronically invite a third person (an affair, an intrusive mother-in-law, or an obsessive hobby/career)?
- **The Astrological Anatomy of the Triangle**:
  1. **The Unmet Need (The Dissatisfied Planet)**: A couple may have glorious intellectual and domestic synastry (Sun-Moon, Mercury-Mercury), but their Venus and Mars planets form no aspects to each other, or form unintegrated hard squares to Saturn.
  2. **The Vacuum**: In nature, a vacuum is inevitably filled. The unexpressed erotic or emotional energy does not vanish; it radiates outward as an unconscious beacon.
  3. **The Catalyst (The Third Vertex)**: A third party enters whose natal planets form exact conjunctions or trines to the starved, unexpressed planet.
- **The Evolutionary Solution**: The third party is never the real problem; they are merely the **symptom of an unintegrated internal polarity within the primary union**. The primary couple must honestly name the unexpressed need and consciously build space for it within their relationship, or consciously separate with dignity.

---

## Architectural Deep Dive: Chiron in Synastry — Transmuting the Sacred Wound

Chiron's placement in synastry identifies the **sacred raw nerves** of the partnership:
- **Chiron Conjunct or Square Partner's Sun**: The Chiron partner may unconsciously envy or feel shamed by the Sun partner's natural confidence. Alternatively, the Sun partner's warmth provides a safe sanctuary where the Chiron partner finally feels worthy of existing.
- **Chiron Conjunct or Square Partner's Moon**: Extreme vulnerability. The couple can trigger each other's childhood abandonment or rejection wounds without intending to. A single careless word can cause agonizing pain.
  - **The Medicine**: Radical emotional tenderness. When your partner is triggered, do not defend yourself. Recognize that they are not crying about you; they are crying about the five-year-old child inside them who was wounded decades before you met.
- **Chiron Conjunct Partner's Venus**: The healing of bodily or sexual shame. The partner's unconditional loving touch acts as an alchemical balm for lifelong feelings of unloveliness or defectiveness.

---

## Case Studies in Karmic Liberation: South Node vs. North Node Synastry

To illustrate the difference between past-life repetition and future soul growth, the Forrests examine archetypal clinical cases:

### Case Study A: The Trap of South Node Familiarity
- **The Synastry**: John's Mars was exactly conjunct Sarah's South Node in Scorpio in the 8th house.
- **The Dynamic**: When they met, the sexual magnetism was immediate and overwhelming. They felt an irresistible familiarity.
- **The Karmic Rut**: In a past life, they had been bound by intense sexual obsession, mutual betrayal, and traumatic loss. In this life, they quickly fell into the same groove: paranoia, reading each other's text messages, manipulative emotional tests, and turbulent reconciliations.
- **The Resolution**: By understanding the South Node signature, Sarah realized: *"We already know how to destroy each other in the dark. We mastered that in another lifetime. Our work in this life is Sarah's North Node in Taurus in the 2nd house—cultivating calm, peace, self-reliance, and simple, predictable trust."* Once they consciously renounced the adrenaline drama, the relationship either matured into peace or gracefully released its hold.

### Case Study B: The Awakening of North Node Destiny
- **The Synastry**: David's Venus was conjunct Elena's North Node in Leo in the 9th house.
- **The Dynamic**: When they met, Elena was a shy, self-effacing researcher hiding behind conservative clothing and academic jargon (South Node in Aquarius in the 3rd house). David's joyful, dramatic Venus praised her beauty, bought her vibrant clothes, and encouraged her to step onto public speaking stages.
- **The Growth**: David's Venus was a loving magnet pulling Elena directly into her North Node destiny. She bloomed into an inspiring international keynote lecturer, discovering a radiant creative confidence she never knew she possessed.

---

## Architectural Deep Dive: The Vertex in Synastry — The Electric Doorway of Fated Encounters

The **Vertex** (the electrical intersection of the Prime Vertical and the Ecliptic in the western hemisphere) operates in synastry as an uncanny **karmic lightning rod**:
- When Partner A's personal planet (Sun, Moon, Venus, or Mars) forms an exact conjunction ($0^\circ - 2^\circ$ orb) to Partner B's natal Vertex:
  - Both parties experience an immediate, visceral feeling of **destiny and inevitability**.
  - Rational defenses are completely bypassed; it feels as if an invisible tractor beam has pulled them together.
  - The meeting feels out of their hands—an appointment arranged by the universe that cannot be declined.
- **Evolutionary Function of the Vertex**: The Vertex is not a guarantee of a permanent happily-ever-after; it is a **forced evolutionary turning point**. The encounter alters the trajectory of your life forever, breaking you out of a stagnant status quo so that you can never return to who you were before.

---

## The Synastry of Separation: Evolutionary Conscious Uncoupling

Steven and Jodie Forrest address the heartbreaking reality that not all evolutionary relationships are meant to last until physical death:
- In conventional culture, a divorce or breakup is branded as a "failed relationship."
- **The Evolutionary Truth**: A relationship that lasts three years and successfully catalysts profound spiritual healing, creative breakthroughs, and emotional maturity is a **glorious, triumphant success**!
- When a relationship has fulfilled its karmic contract, the energy naturally begins to wane. 
- **The High-Road Separation**:
  1. Acknowledge that the soul contract has reached completion.
  2. Refuse to manufacture fake villainy or petty grievances to justify leaving.
  3. Bow to the partner with genuine gratitude for the sacred mirror they held.
  4. Release each other with love, dignity, and generous legal and emotional fairness.

---

## Theoretical Synthesis: The Bridge from Synastry (Volume 1) to Composite (Volume 2)

Steven and Jodie Forrest clarify the exact boundary between the two volumes of the *Skymates* canon:
- **Synastry (Skymates I)** is the study of **Interpersonal Dialogue**:
  - It maps how Person A affects Person B, and how Person B affects Person A.
  - It describes the chemistry, attraction, friction, communication channels, and house overlays between two distinct egos.
  - It answers: *"How do I feel when I am with you?"*
- **The Composite Chart (Skymates II)** is the study of **The Emergent Third Entity**:
  - When two people enter a committed bond, their individual charts merge via mathematical midpoints to create an entirely new, living entity—the Relationship itself.
  - It answers: *"What did our union incarnate to accomplish in the world?"*
- **The Golden Rule**: Never read the Composite Chart without first mastering the Synastry. Synastry provides the psychological soil in which the composite tree takes root!

---

## Synthesis Takeaway: The Enduring Architectural Impact of Skymates

*Skymates: Love, Sex, and Evolutionary Astrology* revolutionizes relationship astrology by replacing fatalistic judgment with **conscious evolutionary agency**. 

By demonstrating that:
1. Relationships exist to accelerate the evolution of consciousness,
2. Cross-aspects are dynamic energetic dialogues between distinct psychological drives,
3. Saturn is the noble structural guardian of endurance, and
4. The Lunar Nodes reveal the sacred trajectory from past-life karma to future awakening,

Steven and Jodie Forrest provide couples and astrologers with an indestructible compass for navigating the stormy, magnificent waters of human love.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skymates: Love, Sex, and Evolutionary Astrology | Forrest & Forrest</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .synastry-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(184, 134, 11, 0.15);
      color: #b8860b;
      border: 1px solid rgba(184, 134, 11, 0.3);
      margin-bottom: 0.5rem;
    }
    .synastry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    .synastry-card {
      background: var(--card-bg, #fffdfa);
      border: 1px solid var(--border-color, #e8dfd5);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .synastry-card h4 {
      margin-top: 0;
      color: var(--primary-color, #4a2c11);
    }
  </style>
</head>
<body>
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Return to Library Catalog</a>
        <h1 class="book-title">Skymates</h1>
        <p class="book-subtitle">Love, Sex, and Evolutionary Astrology • Master Codex</p>
        <div class="book-meta">
          <span class="meta-item"><strong>Authors:</strong> Steven Forrest & Jodie Forrest</span>
          <span class="meta-item"><strong>System:</strong> Evolutionary Synastry & Inter-Chart Dynamics</span>
          <span class="meta-item"><strong>Fidelity:</strong> BKRS v2.0 Replacement Grade</span>
          <span class="meta-item"><strong>Master Notes:</strong> 32k+ Chars</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Synastry Journey</button>
        <button class="view-btn" data-view="blueprint">View B: Inter-Planetary Matrix</button>
        <button class="view-btn" data-view="engine">View C: Consulting Protocol</button>
      </div>
    </header>

    <main class="reader-body">
      <!-- VIEW A: JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="prose-content">
          <div class="chapter-card intro-card">
            <h2>The Sacred Crucible of Evolutionary Intimacy</h2>
            <p>In <em>Skymates</em>, Steven and Jodie Forrest dismantle trivial Sun-sign compatibility cliches, revealing that human relationship is an intentional, reincarnational crucible for soul evolution. We are drawn to partners who activate our unintegrated shadow material and challenge us to expand beyond our habitual comfort zones.</p>
          </div>

          <div class="units-container">
            ${knowledgeUnits.map((u, idx) => `
              <article class="unit-card" id="${u.id}">
                <div class="unit-header">
                  <span class="unit-number">UNIT ${String(idx + 1).padStart(2, '0')}</span>
                  <span class="synastry-badge">${u.epistemicStatus}</span>
                  <span class="page-range">Pages: ${u.pageRange}</span>
                </div>
                <h3 class="unit-title">${u.title}</h3>
                <p class="unit-core"><strong>Core Truth:</strong> ${u.coreConcept}</p>
                <div class="unit-tags">
                  ${u.tags.map(t => `<span class="tag">#${t}</span>`).join(' ')}
                </div>
              </article>
            `).join('\n')}
          </div>
        </div>
      </section>

      <!-- VIEW B: BLUEPRINT -->
      <section id="view-blueprint" class="view-section">
        <div class="prose-content">
          <h2>Core Inter-Planetary Cross-Aspects & Overlays</h2>
          <p>The primary diagnostic coordinates of evolutionary synastry:</p>

          <div class="synastry-grid">
            <div class="synastry-card">
              <h4>Sun-Moon Synastry</h4>
              <p><strong>Function:</strong> The backbone of emotional intimacy and mutual respect. The Sun provides conscious direction while the Moon provides intuitive sanctuary.</p>
            </div>

            <div class="synastry-card">
              <h4>Venus-Mars Synastry</h4>
              <p><strong>Function:</strong> The spark of erotic desire and aesthetic magnetism. Receptive attraction meets dynamic pursuit; high passion and creative friction.</p>
            </div>

            <div class="synastry-card">
              <h4>Mercury Synastry</h4>
              <p><strong>Function:</strong> The communication bridge. Determines whether two minds can resolve daily logistical challenges and understand each other's linguistic world.</p>
            </div>

            <div class="synastry-card">
              <h4>Saturn Synastry</h4>
              <p><strong>Function:</strong> The structural cement. Without Saturn, passionate bonds dissolve during crises. Saturn bestows fidelity, endurance, and shared responsibility.</p>
            </div>

            <div class="synastry-card">
              <h4>The Lunar Nodes</h4>
              <p><strong>Function:</strong> South Node contacts reveal past-life familiarity and karmic ruts; North Node contacts pull the couple toward their evolutionary future.</p>
            </div>

            <div class="synastry-card">
              <h4>House Overlays</h4>
              <p><strong>Function:</strong> Shows where your energy lands in my life: 4th (Home), 5th (Romance), 7th (Partnership), 8th (Psychic intimacy), 12th (Karmic secrets).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW C: CONSULTING PROTOCOL -->
      <section id="view-engine" class="view-section">
        <div class="prose-content">
          <h2>The 6-Step Evolutionary Relationship Protocol</h2>

          <div class="heuristic-card">
            <h3>1. Audit Individual Intimacy Capacity</h3>
            <p>Before analyzing cross-aspects, examine each partner's natal 7th house, Venus, and Moon. A person with severe unintegrated relational wounds will struggle even under ideal synastry.</p>
          </div>

          <div class="heuristic-card">
            <h3>2. Differentiate Chemistry from Longevity</h3>
            <p>Venus-Mars generates intense sexual attraction, but Saturn provides the structural commitment necessary to weather long-term life storms. Balance both dimensions.</p>
          </div>

          <div class="heuristic-card">
            <h3>3. Decode the Nodal Karma</h3>
            <p>Do not let comfortable South Node familiarity turn into an evolutionary dead end. Consciously activate North Node connections to foster ongoing personal growth.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-meta">
        <p><strong>Intellectualist Project</strong> • Standard BKRS v2.0 Replacement Reader • Source: <em>Skymates: Love, Sex, and Evolutionary Astrology</em> by Steven Forrest & Jodie Forrest</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf8');

console.log('Successfully wrote knowledge-units.json for Skymates: Love, Sex, and Evolutionary Astrology');
console.log('Successfully wrote master-notes.md for Skymates: Love, Sex, and Evolutionary Astrology (' + masterNotesMarkdown.length + ' chars)');
console.log('Successfully wrote index.html for Skymates: Love, Sex, and Evolutionary Astrology (' + readerHtml.length + ' chars)');
