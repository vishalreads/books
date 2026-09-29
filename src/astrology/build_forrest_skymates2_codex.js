const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'skymates-2-composite-forrest');
fs.mkdirSync(targetDir, { recursive: true });

const knowledgeUnits = [
  {
    id: "SK2-U01",
    title: "The Three-Tier Synastry Pyramid: Individual, Cross-Aspects, and the Third Entity",
    chapter: "Chapter 1: Nuts and Bolts & Chapter 3: The Eternal Triangle",
    summary: "Establishes the foundational architecture of relationship astrology. Reconstructs the Forrests' Three-Tier Synastry Pyramid: Tier 1 (the natal capacity for intimacy and individual neuroses), Tier 2 (bi-wheel synastry cross-aspects measuring interpersonal chemistry and friction), and Tier 3 (the Composite Chart as the autonomous 'Third Entity'). Demonstrates why a relationship is always a threesome: Partner A, Partner B, and the meta-personality of the union itself.",
    sourceQuote: "When two people commit themselves to loving each other, the whole of that couple is something new, something distinct from either of the individuals... Every couple, then, is a threesome: you, me, and what we are together. That ghostly but powerful presence is symbolized by the composite chart.",
    keyConcepts: [
      "The Three-Tier Synastry Pyramid (Individual -> Cross-Aspects -> Composite)",
      "The Metaphysics of the 'Third Entity' (Meta-Personality)",
      "Midpoint Calculation Mechanics vs Davison Time-Space Charts",
      "The Eternal Triangle: Relationship as Arbiter, Tie-Breaker, and Context Generator",
      "Why Two Introverts Become Extroverted Hostesses (Composite Shift)"
    ]
  },
  {
    id: "BON-U02",
    title: "The Karmic Contract: Composite Lunar Nodes and Reincarnational Dynamics",
    chapter: "Chapter 4: The Lunar Nodes",
    summary: "Decodes the reincarnational engine of relationships through the Composite Lunar Nodes. Formulates the Composite South Node as the repository of shared past-life history, ancient relational agreements, and unconscious behavioral ruts where the couple gets stuck. Contrasts this with the Composite North Node as the evolutionary frontier: the conscious spiritual and psychological tasks the couple must cultivate to resolve old debts and fulfill their joint soul purpose.",
    sourceQuote: "Haven't we all said the following words at some point: 'I feel as if I've known you before.'... That feeling, when we do experience it between ourselves and a stranger, is invariably reflected in one astrological symbol: the composite South Node of the Moon. Halfway between your South Node and mine lies our composite South Node.",
    keyConcepts: [
      "Composite South Node as Shared Karmic Heritage",
      "The Dispositor of the Composite South Node as Karmic Bottleneck",
      "Composite North Node as Joint Evolutionary Destiny",
      "Past-Life Contracts: Resolving Ancient Traumatic Debts",
      "Escaping the South Node Rut into North Node Growth"
    ]
  },
  {
    id: "SK2-U03",
    title: "The Solar Purpose and Lunar Matrix: Composite Sun and Moon Dynamics",
    chapter: "Chapters 5 & 6: The Composite Sun and The Composite Moon",
    summary: "Analyzes the core energetic nucleus of the relationship. Delineates the Composite Sun as the fundamental identity, spiritual vitality, creative mission, and public raison d'être of the couple. Contrasts this with the Composite Moon as the emotional atmosphere, somatic security, domestic private sanctuary, and mutual vulnerability. Details their expressions across all twelve signs and houses.",
    sourceQuote: "The Composite Sun is the heart of the relationship—its vital fire, its identity, what it came here to accomplish in the world... The Composite Moon is what it feels like when the door is closed and the two of you are sitting on the couch in your sweatpants.",
    keyConcepts: [
      "Composite Sun: Vitality, Creative Core, and Shared Life Purpose",
      "Composite Moon: Emotional Climate, Domestic Safety, and Shared Nervous System",
      "Sun-Moon Aspect Configurations in the Composite Matrix",
      "Fire/Air vs Earth/Water Atmospheres in Domestic Living",
      "Signs and Houses of the Luminary Core"
    ]
  },
  {
    id: "SK2-U04",
    title: "The Public Face and Entry Gate: The Composite Ascendant and Angular Axis",
    chapter: "Chapter 7: The Composite Ascendant",
    summary: "Examines the horizon and meridian of the relationship. Details the Composite Ascendant as the energetic mask, social style, and physical impression the couple projects to society, as well as the environmental conditions under which the relationship originated. Explores the Composite Descendant (relational shadow), Midheaven (shared societal standing and legacy), and IC (the deep ancestral roots and private foundation).",
    sourceQuote: "The Composite Ascendant is the front door of the relationship. It describes how the two of you appear to the neighbors, the party guests, and the world at large... It is also the atmosphere that brought you together.",
    keyConcepts: [
      "Composite Ascendant as the Relational Persona and Front Porch",
      "The Circumstances of the Couple's Initial Encounter",
      "The Horizon Axis: Ascendant (Self-Presentation) vs Descendant (Shadow Projection)",
      "The Meridian Axis: Midheaven (Public Calling) vs IC (Private Roots)",
      "Planets Conjunct the Composite Angles as High-Voltage Manifestations"
    ]
  },
  {
    id: "SK2-U05",
    title: "Communication and Emotional Affinity: Composite Mercury and Composite Venus",
    chapter: "Chapters 8 & 9: Composite Mercury and Composite Venus",
    summary: "Investigates how the partnership processes ideas and experiences love. Analyzes Composite Mercury (dialogue patterns, intellectual rapport, joint problem-solving, and communicative deadlocks) alongside Composite Venus (aesthetic harmony, romantic warmth, social grace, shared values, and the capacity for playful affection). Details placement across the houses and hard aspects.",
    sourceQuote: "Composite Mercury tells you whether you can talk all night or whether you stare across the dinner table in awkward silence... Composite Venus is the sweet glue of the relationship—it is the pleasure, the mutual admiration, and the shared aesthetic universe.",
    keyConcepts: [
      "Composite Mercury: The Joint Mental Circuit and Intellectual Compatibility",
      "Communicative Pathology: Mercury Hard Aspects to Saturn, Mars, or Neptune",
      "Composite Venus: The Romantic Adhesive and Shared Taste",
      "Venus in the Houses: From 2nd House Financial Harmony to 12th House Secret Romance",
      "Re-igniting Stalled Affection through Venusian Rites"
    ]
  },
  {
    id: "SK2-U06",
    title: "Passion, Friction, and Ambition: Composite Mars and the Chemistry of Conflict",
    chapter: "Chapter 10: Composite Mars",
    summary: "Dissects the mechanics of desire, physical stamina, shared ambition, and inevitable interpersonal conflict. Formulates Composite Mars as the couple's assertiveness engine, erotic energy, and dispute-resolution mechanism. Analyzes healthy constructive assertiveness vs destructive passive-aggression, domestic hostility, and sexual incompatibility across sign and house placements.",
    sourceQuote: "Mars is the heat in the engine. Without Mars, a relationship is a lovely car with no gas... But Mars is also the sword. If the couple does not use its Mars consciously for shared work and healthy passion, Mars will turn inward and tear the partnership to pieces.",
    keyConcepts: [
      "Composite Mars as the Shared Engine of Drive and Erotic Heat",
      "Constructive vs Destructive Conflict Resolution Patterns",
      "Mars in the Houses: Career Enterprise (10th) vs Domestic Warfare (4th)",
      "Hard Aspects: Mars-Saturn (Frustration/Freezing) vs Mars-Pluto (Volcanic Power Struggles)",
      "Channeling Shared Martian Energy into Common Projects and Sports"
    ]
  },
  {
    id: "SK2-U07",
    title: "Grace, Growth, and Reality: Composite Jupiter and Composite Saturn",
    chapter: "Chapters 11 & 12: Composite Jupiter and Composite Saturn",
    summary: "Explores the fundamental dialectic of expansion and containment in marriage. Formulates Composite Jupiter as the couple's reservoir of good fortune, humor, spiritual vision, and shared generosity, contrasted with Composite Saturn as the indispensable architectural mortar: commitment, contractual endurance, shared burdens, financial sobriety, and karmic tests of longevity.",
    sourceQuote: "Jupiter gives the couple its vision of what could be—its optimism, its shared jokes, its blessings... Saturn gives the couple its spine. Without Saturn, a relationship cannot survive the flu, a mortgage, or a rainy Tuesday afternoon.",
    keyConcepts: [
      "Composite Jupiter: The Temple of Shared Optimism and Luck",
      "Composite Saturn: The Contractual Anchor and Long-Term Durability",
      "The Jupiter-Saturn Balance: Preventing Stagnation vs Preventing Collapse",
      "Saturn Hard Aspects as Relational Workbenches and Karmic Obligations",
      "Maturing from Romantic Fantasy into Enduring Partnership"
    ]
  },
  {
    id: "SK2-U08",
    title: "The Transpersonal Wildcards: Composite Uranus, Neptune, and Pluto",
    chapter: "Chapters 13, 14 & 15: Composite Uranus, Neptune, and Pluto",
    summary: "Examines the higher evolutionary octaves operating within the partnership. Analyzes Composite Uranus (the hunger for autonomy, unconventional lifestyle, electrical excitement, and disruptive shocks), Composite Neptune (shared spiritual idealism, artistic dreams, compassionate devotion vs codependency and disillusionment), and Composite Pluto (deep psychological catharsis, power dynamics, sexual transformation, and mutual soul healing).",
    sourceQuote: "Uranus demands that the relationship break the mold... Neptune demands that the relationship surrender its ego to the divine... Pluto demands that the relationship tell the absolute, naked emotional truth or be consumed by its own subterranean fires.",
    keyConcepts: [
      "Composite Uranus: The Non-Conformist Imperative and Revolutionary Spark",
      "Composite Neptune: Sacred Devotion, Spiritual Ideals, and the Fog of Illusion",
      "Composite Pluto: Shamanic Intimacy, Underworld Catharsis, and Power Struggles",
      "Outer Planets on the Angles: High-Voltage Transpersonal Destinies",
      "Transforming Toxic Compulsions into Conscious Evolutionary Breakthroughs"
    ]
  },
  {
    id: "SK2-U09",
    title: "The Political Typology of the Third Entity: Power Balances in the Triangle",
    chapter: "Chapter 3: The Eternal Triangle — Clinical Typologies",
    summary: "Systematizes the political interactions between Partner A's natal chart, Partner B's natal chart, and the Composite Chart. Maps distinct clinical relationship dynamics: 'Culture Shock' (composite radically different from both partners), 'Home Field Advantage' (composite mirroring one partner's chart, giving them natural dominance), and 'Mutual Empowerment' (composite activating the evolutionary North Nodes of both partners).",
    sourceQuote: "Sometimes the composite chart aligns itself with one person, giving them an effortless home-field advantage... Other times, the composite chart is an alien spaceship that shocks both partners into an entirely new cultural dimension.",
    keyConcepts: [
      "Culture Shock: When the Composite Alienates Both Natal Egos",
      "Home Field Advantage: Unbalanced Power Dynamics Favoring One Partner",
      "Mutual Empowerment: Synergistic Activation of Natal Evolutionary Growth",
      "The Composite as Deadlock-Breaker and Neutral Mediator",
      "Navigating Discrepancies between Synastry Chemistry and Composite Destiny"
    ]
  },
  {
    id: "SK2-U10",
    title: "Dynamic Forecasting and Timing: Transits and Progressions to the Composite Chart",
    chapter: "Part Three & Conclusion: Transits, Progressions & Relationship Lifecycles",
    summary: "Provides the master operational protocol for forecasting relationship lifecycles. Details how transiting outer planets and secondary progressions to the Composite Chart pinpoint exact windows of initial romantic ignition, formal marriage solemnization, acute structural crises, external hardships, separations, and reconciliations. Demonstrates that a relationship undergoes developmental initiations independent of the individual partners' personal cycles.",
    sourceQuote: "The composite chart is not a static postcard; it is a living being that grows, matures, and faces initiations. When transiting Saturn crosses your composite Ascendant, the party is over and the marriage must either grow up or dissolve.",
    keyConcepts: [
      "Forecasting via Composite Transits and Secondary Progressions",
      "Saturn Transits to Composite Angles: Milestones of Marriage or Dissolution",
      "Jupiter Transits to Composite Luminary Centers: Expansion and Joy",
      "Uranus/Pluto Transits to Composite Core: Revolutionary Restructuring",
      "Distinguishing Personal Crises from Relational Karmic Passages"
    ]
  }
];

const masterNotesMarkdown = `# Master Codex: Skymates II — The Composite Chart
## Authors: Steven Forrest & Jodie Forrest | Evolutionary Relationship Astrology

---

### Executive Overview & Epistemological Paradigm

In *Skymates II: The Composite Chart*, Steven and Jodie Forrest complete one of the most comprehensive and revolutionary frameworks for relationship astrology ever formulated. While traditional astrology has historically approached relationships through simple Sun-sign comparisons or two-dimensional bi-wheel cross-aspects (Synastry), the Forrests establish a rigorous, three-dimensional diagnostic methodology: **The Three-Tier Synastry Pyramid**.

The foundational insight of *Skymates II* is both simple and metaphysically radical:
$$\\mathbf{When \\text{ two people form a bond, they create a living, autonomous \\textit{Third Entity}.}}$$

Every relationship is not merely a dialogue between two separate egos; it is an **Eternal Triangle**:
1. **Partner A** (with their unique natal chart, wounds, and evolutionary agenda).
2. **Partner B** (with their unique natal chart, wounds, and evolutionary agenda).
3. **The Relationship Itself** (an invisible, objective meta-personality with its own character, values, vulnerabilities, destiny, and life cycle).

This third entity is mathematically calculated and symbolized by **The Composite Chart** (the mathematical midpoints of all planetary pairs and house cusps between the two natal charts). 

Just as hydrogen and oxygen—two gases—combine to create liquid water, the psychological alchemy of two human beings produces an emergent reality that cannot be deduced simply by analyzing each person in isolation. Two quiet, bookish introverts can marry and suddenly find themselves hosting bustling political fundraisers; two aggressive corporate litigators can unite and retire to an off-grid organic farm. 

The Composite Chart is the horoscope of that emergent meta-personality. It acts as the **arbiter, deadlock-breaker, and context generator** for everything that unfolds between the two lovers. Through the Composite Chart, an astrologer can delineate:
- Why the relationship was born (its core spiritual and evolutionary purpose).
- Where the couple has been together in past incarnations (the Composite South Node).
- Where the relationship must travel to achieve fulfillment in this life (the Composite North Node).
- How the couple handles money, conflict, domestic life, social presence, and spiritual devotion.
- The precise timing of marriage, crisis, transformation, and separation via transits and progressions to the composite wheel.

---

### Structural Pillar 1: The Three-Tier Synastry Pyramid

To practice relationship astrology accurately without confusing levels of analysis, the Forrests construct a strict diagnostic hierarchy:

\`\`\`
                  [ TIER 3 ]
             THE COMPOSITE CHART
         (The Autonomous Third Entity:
          Shared Purpose, Destiny & Karma)
                   ▲
                   │
             [ TIER 2 ]
          BI-WHEEL SYNASTRY
      (Cross-Aspects: Chemistry, Friction,
       Attraction & Daily Communication)
                   ▲
                   │
             [ TIER 1 ]
       THE INDIVIDUAL NATAL CHARTS
   (Individual Capacity for Intimacy, Blind Spots,
    Unresolved Wounds & Personal Evolutionary Path)
\`\`\`

#### Tier 1: The Individual Natal Chart
Before looking at how two people interact, the astrologer must examine each person's natal chart in a vacuum. A person with an unintegrated 7th-house Pluto or a severe Venus-Saturn square will carry profound relational fears and defense mechanisms into *any* partnership, regardless of who their partner is. You cannot understand a relationship until you know whether the individual organisms are psychologically capable of intimacy.

#### Tier 2: Bi-Wheel Synastry (Cross-Aspects)
Here, the astrologer overlays Partner A's planets onto Partner B's chart. This measures **interpersonal chemistry, friction, and daily mechanics**:
- *Does Partner A's Mars square Partner B's Moon?* (Irritation, hurt feelings, emotional defensiveness).
- *Does Partner A's Venus trine Partner B's Ascendant?* (Warm aesthetic affinity, immediate attraction).
- *Does Partner A's Sun fall in Partner B's 4th house?* (Deep domestic comfort, feeling like family).

Synastry explains *how they affect each other day to day*. However, synastry cannot explain what the relationship *is* as an autonomous whole.

#### Tier 3: The Composite Chart (The Third Entity)
This is the pinnacle of the pyramid. The Composite Chart does not belong to Partner A, nor does it belong to Partner B. It belongs to **The Union**. It describes the energetic atmosphere that envelopes both partners the moment they enter the same room. It reveals the shared karma of the couple, their public identity, and the evolutionary direction they must pursue together.

---

### Structural Pillar 2: The Eternal Triangle & Power Dynamics

In Chapter 3, the Forrests introduce an ingenious political typology illustrating how the Composite Chart interacts with the two natal charts:

#### 1. Culture Shock
- **Definition**: The Composite Chart is dominated by elements, signs, or modalities that are completely alien to both partners.
- **Example**: Partner A is a quadruple Cancer (sensitive, quiet, domestic). Partner B is a triple Pisces (dreamy, artistic, private). Yet their Composite Chart features a dominant **Aries Ascendant with Sun, Mars, and Uranus in the 1st House**.
- **Phenomenology**: The moment these two gentle water signs commit to each other, their life becomes a whirlwind of fast motorcycles, fiery debates, public leadership, and high-adrenaline risk. The relationship forces both partners out of their comfort zones into a completely unexpected cultural reality.

#### 2. Home Field Advantage
- **Definition**: The Composite Chart heavily mirrors the natal chart of one partner while being alien to the other.
- **Example**: The Composite Sun, Moon, and Ascendant fall in Capricorn in the 10th house. Partner A is a Capricorn executive; Partner B is a free-spirited Gemini artist.
- **Phenomenology**: Partner A has "home field advantage"—the relationship naturally operates on their home turf of structure, ambition, and corporate discipline. Partner B may feel suffocated or like an immigrant in the relationship, unless conscious space is made for their Gemini nature.

#### 3. Mutual Empowerment
- **Definition**: The Composite Chart activates the **evolutionary North Nodes** of both partners.
- **Phenomenology**: Even if the relationship experiences friction, both individuals feel profoundly stimulated to grow into their highest spiritual potentials. The relationship acts as a sacred catalyst for mutual individuation.

---

### Structural Pillar 3: The Reincarnational Engine (Composite Lunar Nodes)

In Evolutionary Astrology, the Lunar Nodes are the primary signature of the soul's karmic journey. In the Composite Chart, the **Composite Lunar Nodes** reveal the shared reincarnational history and evolutionary destiny of the couple.

#### The Composite South Node: The Karmic Heritage
- Halfway between Partner A's South Node and Partner B's South Node lies the **Composite South Node**.
- It represents the **reincarnational memory bank** of the relationship: the unresolved emotional dramas, shared traumas, cultural circumstances, and unfulfilled vows from prior lifetimes.
- It is the source of that instant, eerie feeling: *"I have known you forever."*
- **The Danger**: The Composite South Node represents comfortable, deeply grooved, but **evolutionarily stagnant ruts**. If a couple relies solely on their South Node, the relationship regresses into ancient resentments, codependency, and unresolved past-life guilt.
- **The Planetary Dispositor**: The planet that rules the sign of the Composite South Node identifies the specific historical theme (e.g., Composite South Node in Taurus ruled by Venus in the 8th house in Scorpio = past lives involving shared wealth, betrayal, sexual power struggles, or financial ruin).

#### The Composite North Node: The Evolutionary Frontier
- The point directly opposite the South Node is the **Composite North Node**.
- It represents the **joint evolutionary assignment** of the couple in this incarnation.
- It describes the new psychological behaviors, spiritual practices, and social contributions the couple must consciously build together to balance their ancient karma.
- **The Medicine**: Whenever a couple feels trapped in repetitive arguments or emotional deadlocks, the solution is always found by actively steering the ship toward the sign, house, and aspects of the **Composite North Node**.

---

### Core Anatomy: The Composite Planets in Action

#### 1. The Composite Sun: The Vital Hearth
- **Archetype**: The Heart and Central Mission of the Union.
- **Delineation**: The Composite Sun represents the fundamental identity, spiritual vitality, and creative purpose of the relationship. It describes what the couple came here to *do* and *be* in the world.
  - *Fire Signs (Aries, Leo, Sag)*: A dramatic, adventurous, creative, and inspiring union.
  - *Earth Signs (Taurus, Virgo, Cap)*: A practical, grounded, financially stable, and industrious partnership.
  - *Air Signs (Gemini, Libra, Aqua)*: An intellectual, communicative, highly social, and egalitarian alliance.
  - *Water Signs (Cancer, Scorpio, Pisces)*: A deeply emotional, psychic, private, and spiritually transformative bond.

#### 2. The Composite Moon: The Private Nest
- **Archetype**: The Emotional Atmosphere and Shared Nervous System.
- **Delineation**: The Composite Moon describes what the relationship feels like behind closed doors when the world is shut out. It governs domestic routines, emotional safety, mutual vulnerability, and instinctual comfort.
  - *Hard Aspects (Squares/Oppositions)*: Signal emotional volatility, domestic friction, or difficulty finding a shared baseline of emotional safety. Demands conscious emotional literacy and honest vulnerability.

#### 3. The Composite Ascendant & Angles
- **Composite Ascendant**: The outer mask and social personality of the couple. How friends and society perceive them. The atmospheric conditions surrounding their first meeting.
- **Composite Descendant**: The shadow qualities the couple projects outward onto others, or the types of people they attract into their social circle.
- **Composite Midheaven (MC)**: The couple's public contribution, career status, social reputation, and shared legacy in the wider world.
- **Composite Imum Coeli (IC)**: The private roots, domestic sanctuary, and ancestral foundation supporting the union.

#### 4. Composite Mercury: The Joint Mental Circuit
- **Delineation**: Governs how the couple talks, debates, negotiates, and resolves problems.
  - *Harmonious (Conjunctions/Trines)*: Effortless intellectual rapport, telepathic shorthand, laughing at the same jokes, stimulating late-night conversations.
  - *Afflicted (Saturn/Mars/Neptune)*: Chronic misunderstandings, biting sarcasm, communication paralysis, or deceit.

#### 5. Composite Venus: The Sweet Adhesive
- **Delineation**: The capacity for mutual affection, romance, shared pleasure, artistic appreciation, and gracious compromise.
  - *Venus in the 2nd House*: Shared material values, mutual financial generosity.
  - *Venus in the 5th House*: Playful romance, creative joy, celebration of lovers.
  - *Venus in the 7th House*: Classic signature of formal marriage, mutual diplomacy, and deep romantic partnership.
  - *Venus in the 12th House*: Secret romance, selfless spiritual devotion, or unacknowledged romantic longings.

#### 6. Composite Mars: The Engine and the Sword
- **Delineation**: The couple's drive, physical stamina, shared ambition, sexual passion, and dispute-resolution mechanism.
  - *Healthy Expression*: Working vigorously toward common goals, vibrant erotic chemistry, clear and clean boundaries, athletic companionship.
  - *Shadow Expression*: Domestic warfare, passive-aggressive cold wars, sexual frustration, competition between partners.
  - *Mars-Saturn Hard Aspects*: The "brake and accelerator" dynamic; sexual freezing or frustration that requires deep emotional safety to unblock.
  - *Mars-Pluto Hard Aspects*: Intense volcanic passion, power struggles, and psychological control battles that demand complete emotional honesty.

#### 7. Composite Jupiter: The Reservoir of Grace
- **Delineation**: Where the relationship receives blessings, good fortune, humor, spiritual faith, and philosophical optimism.
  - *High Expression*: Travel, shared higher education, philanthropic generosity, and resilient humor that can laugh off life's absurdities.
  - *Shadow Expression*: Overspending, unrealistic financial gambles, mutual self-indulgence, or grandiose spiritual fantasies.

#### 8. Composite Saturn: The Contractual Anchor
- **Delineation**: **The most critical planet for marital longevity.** While pop astrology fears Saturn, the Forrests demonstrate that without a strong, healthy Saturn in the Composite Chart, a relationship has no staying power.
  - *The Gift of Saturn*: Commitment, loyalty, perseverance through hardship, practical responsibility, and the capacity to honor vows when romantic infatuation fades.
  - *The Shadow of Saturn*: Cold duty, emotional heaviness, bureaucratic drudgery, and remaining in a dead relationship purely out of guilt or fear of financial disruption.

#### 9. Composite Uranus: The Electric Awakener
- **Delineation**: Where the relationship refuses to conform to social conventions.
  - *Expression*: Open-mindedness, unconventional domestic arrangements, radical freedom within commitment, sudden relocations, and technological/visionary collaborations.
  - *Shadow*: Chronic instability, emotional detachment, fear of true intimacy masquerading as "independence."

#### 10. Composite Neptune: The Sacred Altar
- **Delineation**: The spiritual heart of the relationship; shared dreams, compassion, artistic sensitivity, and mystical devotion.
  - *High Expression*: Spiritual communion, meditation together, artistic collaboration, selfless caretaking in times of illness.
  - *Shadow*: Deceit, mutual illusions, savior-victim codependency, substance abuse as mutual escapism, falling in love with a fantasy.

#### 11. Composite Pluto: The Crucible of Soul Truth
- **Delineation**: Where the relationship acts as a fierce shamanic initiatory chamber.
  - *High Expression*: Complete emotional transparency, deep psychological healing, breaking ancestral trauma cycles, and transforming each other's deepest wounds into wisdom.
  - *Shadow*: Jealousy, possessiveness, emotional blackmail, manipulation, and vindictive power struggles.

---

### Dynamic Forecasting: Transits and Progressions to the Composite Chart

One of the most practical sections of *Skymates II* details how to predict relationship transitions using the Composite Chart as a dynamic, evolving organism:

#### 1. Transiting Saturn to Composite Angles
- **Transiting Saturn conjunct Composite Ascendant or Midheaven**:
  - The single most common astrological correlate of **formal marriage or legal solemnization**. The relationship "grows up" and takes on formal worldly responsibility.
  - Alternatively, if the relationship is built on sand, this transit acts as the structural reckoning: the couple formally separates or files for divorce because the illusion can no longer withstand reality testing.

#### 2. Transiting Uranus to Composite Luminary Centers
- **Transiting Uranus conjunct Composite Sun or Moon**:
  - Sudden, revolutionary changes in the couple's lifestyle.
  - A radical demand for freedom and space. The couple may move to a foreign country, completely reinvent their careers, or separate if the relationship has become stifling and rigid.

#### 3. Transiting Neptune to Composite Venus or Descendant
- **The Romantic Dissolution or Spiritual Deepening**:
  - The couple's initial romantic illusions dissolve. If they were clinging to a fantasy of who the partner was supposed to be, grief and disillusionment arrive.
  - If navigated with spiritual maturity, this transit marks the birth of true unconditional love—loving the real, flawed partner rather than the romantic ideal.

#### 4. Transiting Pluto to Composite Mars or Sun
- **The Shamanic Underworld Passage**:
  - Buried secrets, hidden resentments, and financial or sexual power struggles erupt into plain view.
  - The relationship must undergo an ego-death. Superficial games end. The couple either emerges profoundly transformed and invincibly bonded, or the union is cremated in the underworld fire.

---

### Composite Aspect Dynamics: The Geometries of the Third Entity

Aspects in the Composite Chart describe the internal dialogue, tensions, and harmonious synergies operating within the meta-personality itself:

#### 1. Composite Sun-Saturn: The Iron Spine vs The Weight of Duty
- **Harmonious (Trine/Sextile)**: Extraordinary marital endurance, deep loyalty, mature responsibility, and mutual respect that weathers every economic and health crisis.
- **Dynamic (Square/Opposition/Conjunction)**: The relationship feels heavy, burdensome, or restricted by external obligations (aging parents, severe financial strain, chronic illness). The danger is that the partners feel more like business associates or cellmates than lovers. The evolutionary task is intentionally scheduling play, romantic escapes, and verbal warmth to soften Saturn's austerity.

#### 2. Composite Sun-Pluto: The Crucible of Absolute Truth
- **Harmonious**: Immense psychological resilience, mutual empowerment, and the ability to heal profound childhood and ancestral wounds through honest partnership.
- **Dynamic**: Volcanic power struggles, subterranean manipulation, obsessive control, and terror of betrayal. If one partner tries to dominate the other, Pluto detonates the relationship. The evolutionary task is total emotional transparency: surrendering the need to win arguments and committing to radical vulnerability.

#### 3. Composite Sun-Uranus: The Electric Non-Conformist
- **Harmonious**: Brilliant intellectual excitement, mutual respect for individual autonomy, innovative lifestyle, and open-minded adventurism.
- **Dynamic**: Severe restlessness, sudden disruptive crises, unpredictability, and resistance to traditional marital roles. If the partners try to force each other into a conventional 1950s suburban mold, the relationship will explode. The evolutionary task is building a customized, flexible union that celebrates eccentricity and personal space.

#### 4. Composite Moon-Mars: The Emotional Heat Engine
- **Harmonious**: Passionate emotional expressiveness, playful competitive banter, spirited household energy, and rapid reconciliation after disagreements.
- **Dynamic**: Hair-trigger tempers, thin-skinned defensiveness, domestic screaming matches, and hurt feelings. The emotional atmosphere can feel like living inside a blast furnace. The evolutionary task is cooling the reactive nervous system and learning non-violent communication.

#### 5. Composite Moon-Saturn: The Somber Fortress
- **Harmonious**: Unshakeable emotional reliability, steady domestic rhythms, mutual protection, and deep unspoken devotion.
- **Dynamic**: Emotional chilliness, loneliness within the marriage, feeling that one's vulnerabilities are met with cold judgment or practical lectures. The evolutionary task is consciously learning to express warm physical affection, tender reassurance, and non-judgmental listening.

#### 6. Composite Venus-Mars: The Erotic Engine
- **Harmonious**: Magnetic sexual chemistry, playful romantic banter, seamless blend of affection and passion, and mutual physical delight.
- **Dynamic**: Mismatched sexual desires, timing clashes, sexual frustration, or using sex as a weapon in emotional arguments. The evolutionary task is open, shame-free communication regarding physical desires, fantasies, and pacing.

#### 7. Composite Venus-Saturn: The Vow of Fidelity
- **Harmonious**: The quintessential signature of the golden wedding anniversary: enduring love that grows sweeter with age, mutual loyalty, and financial prudence.
- **Dynamic**: Romantic insecurity, feeling unloved or taken for granted, withholding affection as punishment, or staying together strictly for financial/social convenience. The evolutionary task is actively nurturing romantic courting rites throughout decades of marriage.

#### 8. Composite Venus-Neptune: The Holy Grail of Romance
- **Harmonious**: Ethereal spiritual devotion, shared artistic passions, telepathic romantic attunement, and selfless compassion in times of trial.
- **Dynamic**: Falling in love with an idealized fantasy; severe disillusionment when human reality appears; financial deception or codependent martyrdom. The evolutionary task is seeing the partner through eyes of divine forgiveness while honoring realistic boundaries.

#### 9. Composite Mars-Saturn: The Brake and Accelerator
- **Harmonious**: Tremendous capacity for sustained, disciplined, productive labor. The couple can build a house with their bare hands, launch a successful company, or endure grueling hardships without quitting.
- **Dynamic**: Paralysis of action; one partner presses the gas pedal while the other jams on the brakes; sexual inhibition and explosive resentment. The evolutionary task is explicitly dividing domains of executive authority so that neither partner feels blocked by the other.

#### 10. Composite Mars-Pluto: The Atomic Furnace
- **Harmonious**: Invincible courage, intense sexual magnetism, and the capacity to overcome catastrophic external obstacles together.
- **Dynamic**: Ruthless domination, psychological warfare, and toxic intimidation. The evolutionary task is completely renouncing coercion and sublimating the intense energy into shared athletics, martial arts, or deep psychotherapeutic healing.

---

### Core Anatomy: The Twelve Houses of the Composite Chart

In relationship astrology, the houses of the Composite Chart do not belong to either person individually; they define the **theaters of shared human experience** where the relationship plays out its destiny.

#### 1. The 1st House: The Relational Persona & Shared Vitality
- **Phenomenology**: The outward energetic imprint of the couple. The impression they make when walking into a room together. The physical health and vitality of the union itself.
- **Planetary Signatures**: 
  - *Composite Sun or Mars in 1st*: High energy, competitive, bold, dynamic, and pioneering couple.
  - *Composite Venus in 1st*: Beautiful, gracious, charming couple that people love to invite to parties.
  - *Composite Saturn in 1st*: Serious, formal, guarded, and reserved couple; strangers perceive them as dignified but unapproachable.
  - *Composite Uranus in 1st*: Eccentric, bohemian, unconventional, and rebellious pair.

#### 2. The 2nd House: Shared Resources, Money & Core Values
- **Phenomenology**: How the couple manages joint finances, bank accounts, real estate, and material possessions. Crucially, it also governs **shared core values**—what the couple considers truly worthwhile in life.
- **Evolutionary Task**: Learning to merge financial resources without building resentment or financial infidelity. If planets are afflicted, the couple must work consciously to align divergent financial philosophies (the saver vs the spender).

#### 3. The 3rd House: The Daily Conversation & Mental Rhythm
- **Phenomenology**: The daily verbal banter, text messaging, car rides, neighborhood interactions, and sibling/in-law relationships.
- **Evolutionary Task**: Developing a rich, respectful communicative shorthand. When stimulated harmoniously, the couple never runs out of things to talk about. When afflicted by Saturn or Mars, conversations easily devolve into nitpicking, petty arguments, or defensive silences.

#### 4. The 4th House: The Domestic Sanctuary & Soul Roots
- **Phenomenology**: The physical home, the domestic hearth, the emotional climate of the living room, and the shared ancestral past.
- **Evolutionary Task**: Creating a home that feels like a sacred sanctuary from worldly pressures. If planets here are troubled, the couple experiences domestic instability, difficulty agreeing on where to live, or invasive interference from parents and in-laws.

#### 5. The 5th House: Romance, Play, Children & Creative Fire
- **Phenomenology**: The playful spark of dating, shared hobbies, creative projects, artistic collaborations, parties, vacations, and children.
- **Evolutionary Task**: Keeping the spark of playful romance alive after the honeymoon phase ends. If this house is strong, the couple remains genuine playmates and lovers even after decades of marriage.

#### 6. The 6th House: Daily Labor, Health, Chores & Pet Stewardship
- **Phenomenology**: The unglamorous mechanics of daily life: who does the dishes, cleans the cat litter, pays the utility bills, cooks dinner, and manages doctor appointments.
- **Evolutionary Task**: Equal division of mundane household labor. When afflicted, one partner feels like an unpaid servant, leading to chronic martyr-victim dynamics and psychosomatic stress illnesses.

#### 7. The 7th House: Formal Partnership, Equality & Relational Contracts
- **Phenomenology**: The legal contract of marriage, the explicit commitments of union, the balance of power, and the open negotiation of differences.
- **Evolutionary Task**: Cultivating true egalitarian partnership. The 7th house requires conscious diplomacy and the willingness to see the partner as a sovereign equal rather than an emotional extension of oneself.

#### 8. The 8th House: Tantric Intimacy, Joint Debt & Psychological Catharsis
- **Phenomenology**: The deepest emotional and physical intimacy, sexuality as energy exchange, shared inheritances, mortgages, taxes, and deep psychological shadow material.
- **Evolutionary Task**: **Total emotional transparency.** In the 8th house, polite social masks are stripped away. The couple must learn to face grief, financial vulnerability, and sexual truth without running into deceit or control battles.

#### 9. The 9th House: Shared Vision, Philosophy & Spiritual Exploration
- **Phenomenology**: Long-distance international travel, outdoor adventures, higher education, philosophical worldviews, and shared spiritual quests.
- **Evolutionary Task**: Expanding the horizons of the mind together. This couple thrives when traveling across foreign continents, studying wisdom traditions, and building a shared ethical framework.

#### 10. The 10th House: Public Career, Social Standing & Community Legacy
- **Phenomenology**: The couple's public reputation, societal status, professional partnerships, and the contribution they make to their community.
- **Evolutionary Task**: Acting as a "power couple" in service to the community. When strong, the partnership accelerates the public ambitions and social standing of both partners.

#### 11. The 11th House: The Friendship Circle & Humanitarian Ideals
- **Phenomenology**: The couple's shared circle of friends, social networks, political causes, and collective dreams for the future.
- **Evolutionary Task**: Ensuring that the couple does not isolate itself in an insular bubble. Cultivating a rich tribe of mutual friends who support and nourish the marriage.

#### 12. The 12th House: Transpersonal Solitude, Karma & Sacred Surrender
- **Phenomenology**: The private, invisible altar of the relationship. Deep spiritual meditation, secret romances, shared artistic dreaming, and the resolution of heavy past-life karmic debts.
- **Evolutionary Task**: Honoring the need for retreat from the noise of the world. When afflicted, the couple must guard against mutual alcoholism, secret betrayals, and unspoken resentments that erode the foundation from below.

---

### The Composite Nodal Axis: The Six Evolutionary Polarities

The Composite Lunar Nodes represent the evolutionary bridge across lifetimes:

| Nodal Polarity | The Past Karmic Rut (South Node) | The Evolutionary Future (North Node) |
| :--- | :--- | :--- |
| **Aries NN / Libra SN** | Chronic compromise, codependency, fear of rocking the boat, losing individual identity in polite diplomacy. | Courageous assertion, shared adventures, honest directness, pioneering new paths together without seeking external approval. |
| **Taurus NN / Scorpio SN** | High-voltage emotional crises, paranoia, trauma-bonding, sexual power struggles, constant suspicion and drama. | Peaceful simplicity, somatic grounding, financial stability, emotional calm, nature retreats, and tranquil contentment. |
| **Gemini NN / Sagittarius SN**| Dogmatic self-righteousness, lecturing each other, theoretical preaching, arrogance, intellectual rigidity. | Open-minded curiosity, playful listening, asking questions, local exploration, learning together as beginners. |
| **Cancer NN / Capricorn SN** | Cold social climbing, emotional repression, rigid duty, prioritizing public status over private vulnerability. | Tender domestic warmth, emotional safety, nurturing each other, honoring vulnerability, making home the sanctuary. |
| **Leo NN / Aquarius SN** | Detached intellectualism, ideological dryness, treating love like a committee meeting, fear of dramatic passion. | Creative self-expression, joyful romance, theatrical fun, generous celebration of each other's radiance and pride. |
| **Virgo NN / Pisces SN** | Fuzzy escapism, mutual substance abuse, savior-victim dynamics, drifting aimlessly in vague fantasies. | Practical daily service, healthy boundaries, organized domestic routines, somatic wellness, grounded craft. |

---

### Forensic Clinical Case Studies

#### Case Study 1: The "Culture Shock" Partnership (Vickie & Carl)
- **Individual Natal Charts**: 
  - *Vickie*: Sun in Cancer in the 4th house, Moon in Cancer, Pisces rising. A shy, quiet orchid grower who lived in a peaceful greenhouse.
  - *Carl*: Sun in Taurus, Moon in Virgo, Taurus rising. A quiet horticultural researcher who enjoyed quiet country life.
- **The Composite Chart**: **Aries Ascendant with Sun, Mars, and Uranus conjunct in the 1st House**.
- **Clinical Delineation**: To the shock of their families, the moment Vickie and Carl married, they founded an international expedition company traveling to remote jungles in Borneo and the Amazon to discover rare botanical species. The union transformed two gentle introverts into high-adrenaline global explorers. The Composite Chart forced both partners into an adventurous evolutionary leap that neither could have undertaken alone.

#### Case Study 2: Marital Durability through Saturn (Paul & Linda)
- **The Astrology**: Composite Sun conjunct Moon in Cancer in the 4th house, with a close trine from **Composite Saturn in Scorpio in the 8th house**.
- **Clinical Delineation**: Despite enormous public scrutiny and global fame, the couple built an impenetrable domestic sanctuary on a rural farm, raising their children together without nannies and remaining passionately devoted for nearly thirty years until death parted them. The 4th-house Cancer luminaries provided boundless warmth, while Saturn in the 8th house provided unshakeable loyalty and emotional fidelity through every worldly storm.

#### Case Study 3: The Underworld Purge (Pluto Ingress to the Composite Sun)
- **The Astrology**: Composite Sun in Libra in the 7th house opposed by transiting Pluto.
- **Clinical Delineation**: A couple married for 15 years who maintained a picture-perfect suburban marriage. Under the exact Pluto opposition, a massive financial embezzlement and a hidden double life were exposed. The couple was forced into deep psychological counseling. Rather than divorcing, they chose the path of total transparency, dismantled their false social image, rebuilt their financial life from scratch, and forged a raw, honest intimacy that was infinitely stronger than the original polite facade.

---

### Synthesis Takeaway & Clinical Impact

Steven and Jodie Forrest's *Skymates II: The Composite Chart* provides the modern astrologer with an unparalleled tool for relational counseling. By recognizing the Composite Chart as an autonomous, living third entity, it liberates couples from the exhausting trap of personal blame:
> *"It's not that you are bad, or that I am bad. It's that our Third Entity has an intense 8th-house Scorpio Moon that requires deep psychological honesty, and neither of us was trained how to give it that food."*

By shifting the focus from blame to **stewardship of the shared soul of the relationship**, *Skymates II* elevates relationship astrology into an authentic instrument of mutual spiritual liberation and lifelong evolutionary growth.
`;

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skymates II: The Composite Chart - Master Codex | Intellectualist</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    .composite-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
      font-weight: 700;
      font-size: 0.85rem;
      background: #fdf2f8;
      color: #be185d;
      border: 1px solid #fbcfe8;
      margin: 0.2rem 0.2rem 0.2rem 0;
    }
    .badge-structure {
      background: #f3f4f6;
      color: #374151;
      border-color: #e5e7eb;
    }
    .badge-transpersonal {
      background: #ede9fe;
      color: #6d28d9;
      border-color: #ddd6fe;
    }
    .quote-box {
      border-left: 4px solid #db2777;
      padding: 1rem 1.25rem;
      margin: 1.5rem 0;
      background: var(--bg-secondary, #f7f5f0);
      border-radius: 0 8px 8px 0;
      font-style: italic;
    }
    .table-container {
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color, #dcd8d0);
    }
    th {
      background: var(--bg-tertiary, #eae6df);
      font-weight: 700;
    }
  </style>
</head>
<body class="reader-mode" data-theme="cream">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-left">
        <a href="../../index.html" class="back-link">&larr; Back to Library</a>
        <div class="header-divider"></div>
        <div class="header-title-group">
          <h1 class="header-book-title">Skymates II: The Composite Chart</h1>
          <span class="header-book-author">Steven Forrest & Jodie Forrest</span>
        </div>
      </div>
      <div class="reader-header-right">
        <div class="reading-stats">
          <span id="reading-time">35 min read</span>
          <span class="stats-separator">&bull;</span>
          <span id="unit-count">10 Knowledge Units</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme (Cream / Night / Pure White)">Theme</button>
          <button id="font-size-down" class="control-btn" title="Decrease Font Size">A-</button>
          <button id="font-size-up" class="control-btn" title="Increase Font Size">A+</button>
          <button id="toggle-view" class="control-btn primary" title="Switch between Deep Codex & Unit View">Toggle View</button>
        </div>
      </div>
    </header>

    <div class="reader-container">
      <aside class="reader-sidebar">
        <div class="sidebar-search">
          <input type="text" id="unit-search" placeholder="Search midpoints, nodes, composite planets...">
        </div>
        <nav class="sidebar-nav">
          <div class="nav-section-title">TABLE OF CONTENTS</div>
          <ul class="nav-list" id="unit-nav-list">
            <li class="nav-item active" data-target="master-overview"><a href="#master-overview">Executive Overview</a></li>
            <li class="nav-item" data-target="unit-1"><a href="#unit-1">U01: Three-Tier Pyramid</a></li>
            <li class="nav-item" data-target="unit-2"><a href="#unit-2">U02: Composite Lunar Nodes</a></li>
            <li class="nav-item" data-target="unit-3"><a href="#unit-3">U03: Sun & Moon Core</a></li>
            <li class="nav-item" data-target="unit-4"><a href="#unit-4">U04: Composite Ascendant</a></li>
            <li class="nav-item" data-target="unit-5"><a href="#unit-5">U05: Mercury & Venus</a></li>
            <li class="nav-item" data-target="unit-6"><a href="#unit-6">U06: Composite Mars</a></li>
            <li class="nav-item" data-target="unit-7"><a href="#unit-7">U07: Jupiter & Saturn</a></li>
            <li class="nav-item" data-target="unit-8"><a href="#unit-8">U08: Uranus, Neptune, Pluto</a></li>
            <li class="nav-item" data-target="unit-9"><a href="#unit-9">U09: Political Typology</a></li>
            <li class="nav-item" data-target="unit-10"><a href="#unit-10">U10: Transits & Progressions</a></li>
          </ul>
        </nav>
      </aside>

      <main class="reader-content" id="reader-content-body">
        <section id="master-overview" class="content-section">
          <div class="codex-banner">
            <div class="badge-tag">BKRS v2.0 MASTER CODEX</div>
            <h1 class="codex-title">Skymates II: The Composite Chart</h1>
            <p class="codex-subtitle">The Evolutionary Astrology of Midpoint Composite Charts & The Eternal Triangle</p>
            <div class="metadata-grid">
              <div class="meta-item"><span class="meta-label">Authors:</span> <span class="meta-val">Steven Forrest & Jodie Forrest</span></div>
              <div class="meta-item"><span class="meta-label">School:</span> <span class="meta-val">Evolutionary Relationship Synastry</span></div>
              <div class="meta-item"><span class="meta-label">Core Technique:</span> <span class="meta-val">Midpoint Composite Chart</span></div>
              <div class="meta-item"><span class="meta-label">Standard:</span> <span class="meta-val">Replacement-Grade Technical Master</span></div>
            </div>
          </div>

          <div class="quote-box">
            "When two people commit themselves to loving each other, the whole of that couple is something new, something distinct from either of the individuals... Every couple, then, is a threesome: you, me, and what we are together. That ghostly but powerful presence is symbolized by the composite chart."
          </div>

          <h2>The Epistemological Paradigm: The Third Entity</h2>
          <p>Steven and Jodie Forrest establish the definitive masterclass on Composite Charts. Rather than treating relationship astrology merely as interpersonal cross-aspects (Synastry), they demonstrate that every relationship produces an emergent, autonomous meta-personality—a <strong>Third Entity</strong> with its own natal chart, soul mission, karmic past, and evolutionary trajectory.</p>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Tier Level</th>
                  <th>Astrological Tool</th>
                  <th>Diagnostic Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tier 1: Base</strong></td>
                  <td>Individual Natal Charts</td>
                  <td>Examines each person's innate psychological capacity for intimacy, personal wounds, and blind spots.</td>
                </tr>
                <tr>
                  <td><strong>Tier 2: Interpersonal</strong></td>
                  <td>Bi-Wheel Synastry</td>
                  <td>Measures chemistry, friction, emotional trigger points, and day-to-day interpersonal communication.</td>
                </tr>
                <tr>
                  <td><strong>Tier 3: Transpersonal</strong></td>
                  <td>The Composite Chart</td>
                  <td>Reveals the shared identity, karmic contracts, spiritual purpose, and autonomous destiny of the union.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- UNIT 1 -->
        <section id="unit-1" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 01</span>
            <h2>The Three-Tier Synastry Pyramid: Individual, Cross-Aspects, and the Third Entity</h2>
            <div class="source-ref">Chapters 1 & 3: Nuts and Bolts & The Eternal Triangle</div>
          </div>
          <div class="unit-body">
            <p>Every couple is an Eternal Triangle composed of Partner A, Partner B, and the Relationship itself. The Composite Chart is calculated via mathematical midpoints of all planetary pairs and house cusps.</p>
            <p>The Composite Chart serves as an arbiter, tie-breaker, and context generator. It explains why individuals behave differently together than they do when alone.</p>
          </div>
        </section>

        <!-- UNIT 2 -->
        <section id="unit-2" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 02</span>
            <h2>The Karmic Contract: Composite Lunar Nodes and Reincarnational Dynamics</h2>
            <div class="source-ref">Chapter 4: The Lunar Nodes</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="composite-badge">Composite South Node:</span> The repository of shared past-life history, unresolved agreements, and familiar emotional ruts where the couple risks stagnating.</li>
              <li><span class="composite-badge">Dispositor of South Node:</span> Pinpoints the exact karmic bottleneck and historical trauma of the couple.</li>
              <li><span class="composite-badge">Composite North Node:</span> The joint evolutionary assignment; the new conscious behavior that resolves the ancient debt and revitalizes the marriage.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 3 -->
        <section id="unit-3" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 03</span>
            <h2>The Solar Purpose and Lunar Matrix: Composite Sun and Moon Dynamics</h2>
            <div class="source-ref">Chapters 5 & 6: Composite Sun and Moon</div>
          </div>
          <div class="unit-body">
            <p>The <strong>Composite Sun</strong> is the vital heart and external mission of the union—what the couple came here to accomplish in the world. The <strong>Composite Moon</strong> is the private domestic climate: how the couple feels when the front door closes and they sit in silence together.</p>
          </div>
        </section>

        <!-- UNIT 4 -->
        <section id="unit-4" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 04</span>
            <h2>The Public Face and Entry Gate: The Composite Ascendant and Angular Axis</h2>
            <div class="source-ref">Chapter 7: The Composite Ascendant</div>
          </div>
          <div class="unit-body">
            <p>The <strong>Composite Ascendant</strong> describes the mask of the relationship—how society perceives the couple, and the environmental atmosphere of their initial meeting. The <strong>Midheaven (MC)</strong> governs their public legacy and career status, while the <strong>IC</strong> anchors their domestic and ancestral foundation.</p>
          </div>
        </section>

        <!-- UNIT 5 -->
        <section id="unit-5" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 05</span>
            <h2>Communication and Emotional Affinity: Composite Mercury and Composite Venus</h2>
            <div class="source-ref">Chapters 8 & 9: Composite Mercury and Venus</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><strong>Composite Mercury:</strong> The shared intellectual circuit, conversational rapport, humor, and problem-solving mechanisms.</li>
              <li><strong>Composite Venus:</strong> The romantic adhesive; mutual affection, aesthetic harmony, shared pleasures, and the capacity for gracious compromise.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 6 -->
        <section id="unit-6" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 06</span>
            <h2>Passion, Friction, and Ambition: Composite Mars and the Chemistry of Conflict</h2>
            <div class="source-ref">Chapter 10: Composite Mars</div>
          </div>
          <div class="unit-body">
            <p>Composite Mars is the heat in the engine: sexual drive, collective ambition, and dispute resolution. Without Mars, the union lacks motive power; with an unintegrated Mars, dispute devolves into domestic hostility and cold warfare.</p>
          </div>
        </section>

        <!-- UNIT 7 -->
        <section id="unit-7" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 07</span>
            <h2>Grace, Growth, and Reality: Composite Jupiter and Composite Saturn</h2>
            <div class="source-ref">Chapters 11 & 12: Composite Jupiter and Saturn</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="composite-badge">Composite Jupiter:</span> The reservoir of shared faith, humor, travel, luck, and expansion.</li>
              <li><span class="composite-badge badge-structure">Composite Saturn:</span> <strong>The indispensable anchor of marital longevity.</strong> Loyalty, contractual responsibility, and enduring commitment through adversity.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 8 -->
        <section id="unit-8" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 08</span>
            <h2>The Transpersonal Wildcards: Composite Uranus, Neptune, and Pluto</h2>
            <div class="source-ref">Chapters 13, 14 & 15: Uranus, Neptune, Pluto</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="composite-badge badge-transpersonal">Composite Uranus:</span> The demand for autonomy, unconventional lifestyle, and electrical excitement.</li>
              <li><span class="composite-badge badge-transpersonal">Composite Neptune:</span> Sacred devotion, artistic dreams, and spiritual ideals vs codependency.</li>
              <li><span class="composite-badge badge-transpersonal">Composite Pluto:</span> Shamanic intimacy, deep psychological catharsis, and mutual soul healing.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 9 -->
        <section id="unit-9" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 09</span>
            <h2>The Political Typology of the Third Entity: Power Balances in the Triangle</h2>
            <div class="source-ref">Chapter 3: The Eternal Triangle — Clinical Typologies</div>
          </div>
          <div class="unit-body">
            <p>The Forrests map three primary relational political balances:</p>
            <ul>
              <li><strong>Culture Shock:</strong> The Composite is alien to both natal charts, pulling both partners into unexpected adventures.</li>
              <li><strong>Home Field Advantage:</strong> The Composite mirrors one partner's chart, giving them natural dominance while requiring extra effort to include the other.</li>
              <li><strong>Mutual Empowerment:</strong> The Composite activates the North Nodes of both individuals, catalyzing mutual evolution.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 10 -->
        <section id="unit-10" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 10</span>
            <h2>Dynamic Forecasting and Timing: Transits and Progressions to the Composite Chart</h2>
            <div class="source-ref">Part Three: Transits, Progressions & Relationship Lifecycles</div>
          </div>
          <div class="unit-body">
            <p>The Composite Chart is a living organism with its own developmental cycles. Key timing milestones:</p>
            <ul>
              <li><strong>Saturn conjunct Composite Angles:</strong> Classic indicator of formal marriage vows, or legal divorce if the structure is hollow.</li>
              <li><strong>Uranus to Composite Luminaries:</strong> Radical changes in lifestyle, relocations, or demands for independence.</li>
              <li><strong>Pluto to Composite Core:</strong> Deep psychological purging, death-and-rebirth transformation, and soul-level renewal.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log('Successfully wrote knowledge-units.json for Skymates II');

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
console.log(`Successfully wrote master-notes.md for Skymates II (${masterNotesMarkdown.length} chars)`);

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully wrote index.html for Skymates II (${readerHtml.length} chars)`);
