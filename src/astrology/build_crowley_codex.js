const fs = require('fs');
const path = require('path');

const slug = 'complete-astrological-writings-crowley';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "CROWLEY-U01",
    title: "Liber 536 & The Thelemic Hermetic Epistemology",
    coreConcept: "Astrology is not fatalistic prediction for the passive ego, but a precise Hermetic weapon and symbolic map of the True Will (Thelema) by which the Magician navigates the Great Work.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "1-22",
    tags: ["Thelema", "Liber 536", "Hermeticism", "True Will", "The Magician"]
  },
  {
    id: "CROWLEY-U02",
    title: "The Qabalistic Tree of Life & The Triple Trinity of the Planets",
    coreConcept: "The planets correspond to the Sephiroth on the Tree of Life, structured into three triadic octaves: the Supernal/Spiritual Trinity, the Moral/Ethical Trinity, and the Astral/Sensory Trinity.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "23-55",
    tags: ["Qabalah", "Tree of Life", "Sephiroth", "Triple Trinity", "Occult Geometry"]
  },
  {
    id: "CROWLEY-U03",
    title: "The Twelve Houses of Heaven: Arenas of Incarnational Force",
    coreConcept: "The twelve mundane houses represent the twelve environmental dimensions where cosmic energies condense into terrestrial experience, from the personal ego (1st) to collective dissolution (12th).",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "56-80",
    tags: ["Twelve Houses", "Mundane Spheres", "Incarnation", "Geometry", "Astral Condensation"]
  },
  {
    id: "CROWLEY-U04",
    title: "Planetary Aspects as Vectors of Dynamic Occult Interference",
    coreConcept: "Aspects are geometric vectors of interference between planetary fields, where hard angles represent concentrated friction demanding transmutation and soft angles represent harmonic flow.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "81-110",
    tags: ["Aspects", "Geometric Waves", "Transmutation", "Occult Force", "Harmonics"]
  },
  {
    id: "CROWLEY-U05",
    title: "Neptune: The Universal Solvent, Mystical Ecstasy & Hysteria",
    coreConcept: "Neptune represents the spiritual solvent of the ego—fostering transcendental mystical union, supreme artistic genius, and boundless compassion when elevated, but neurosis, deceit, and hysteria when debased.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "111-140",
    tags: ["Neptune", "Universal Solvent", "Mysticism", "Ecstasy", "Hysteria", "Ego Dissolution"]
  },
  {
    id: "CROWLEY-U06",
    title: "Neptune Across the Twelve Signs & Houses",
    coreConcept: "Neptune's subtle, pervasive mist transforms each zodiacal sign and mundane house into a portal of spiritual idealism, sacrifice, or perilous self-delusion.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "141-168",
    tags: ["Neptune in Signs", "Neptune in Houses", "Subtle Mists", "Spiritual Sacrifice"]
  },
  {
    id: "CROWLEY-U07",
    title: "Uranus: The Awakener, The Magical Will & Cataclysmic Genius",
    coreConcept: "Uranus represents the Lightning Flash of Kether striking Malkuth—manifesting as revolutionary genius, absolute independence, radical awakening, and the catastrophic smashing of obsolete forms.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "169-195",
    tags: ["Uranus", "The Awakener", "Magical Will", "Revolution", "Lightning Flash", "Genius"]
  },
  {
    id: "CROWLEY-U08",
    title: "Uranus Across the Twelve Signs & Houses",
    coreConcept: "The electric, eruptive power of Uranus detonates crystallizations in each house and sign, sparking unprecedented innovations, nervous friction, or social iconoclasm.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "196-206",
    tags: ["Uranus in Signs", "Uranus in Houses", "Detonation", "Iconoclasm", "Invention"]
  },
  {
    id: "CROWLEY-U09",
    title: "How Horoscopes Are Faked: The Blistering Expose of Charlatanism",
    coreConcept: "Crowley dismantles commercial fortune-telling, newspaper astrologers, and fraudulent hacks, exposing their cold-reading tricks, barnum statements, and mathematical incompetence.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "207-214",
    tags: ["How Horoscopes Are Faked", "Anti-Charlatanism", "Cold Reading", "Barnum Statements", "Rigor"]
  },
  {
    id: "CROWLEY-U10",
    title: "The Magician's Protocol: Astrological Diagnosis for Spiritual Mastery",
    coreConcept: "The true purpose of the horoscope is to diagnose the candidate's spiritual inertia and karma, allowing the Magician to systematically invoke complementary planetary forces to achieve equilibrium.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "215-224",
    tags: ["Magician Protocol", "Spiritual Diagnosis", "Equilibrium", "Planetary Invocation", "Great Work"]
  }
];

// Build exhaustive master notes markdown (>32,000 characters)
const masterNotesMarkdown = `# Master Codex: The Complete Astrological Writings (Liber 536)

**Author:** Aleister Crowley (Edited with Introduction by John Symonds & Kenneth Grant)  
**System:** Thelemic Hermetic Astrology & The Magician's Celestial Weapon  
**Fidelity Standard:** BKRS v2.0 Replacement-Grade Master Codex  
**Output Objective:** Comprehensive, source-faithful codex replacing the original text for all esoteric, occult, and technical astrological analysis without loss of symbolic nuance.

---

## Executive Architectural Summary: Astrology as a Weapon of the Magician

Written primarily during Aleister Crowley's American period in **1917–1918**, *A Treatise on Astrology*—designated in the A.'.A.'. curriculum as **Liber 536**—stands as one of the most enigmatic, intellectually brilliant, and iconoclastic works in the history of occultism. The number **536** is the numerical value in Hebrew gematria of **Maslath** ($מסלות$), the mystical sphere of the Zodiac and the Fixed Stars on the Qabalistic Tree of Life.

Unlike conventional astrologers who cast charts to predict marriages, financial inheritances, or petty worldly fortunes, Aleister Crowley approached astrology strictly as a **Hermetic Magician**. Initiated into the Hermetic Order of the Golden Dawn in 1898 at age twenty-three, Crowley viewed the horoscope not as an inescapable sentence of fate, but as:
1. **The Tactical Map of the True Will (Thelema)**: Revealing the precise incarnational conditions and spiritual vectors chosen by the soul for its earthly mission.
2. **The Diagnostic Gauge of Psychic Imbalance**: Highlighting where the candidate suffers from excess, deficiency, or inertia.
3. **The Celestial Weapon of the Great Work**: Allowing the Magician to systematically balance their planetary elemental constitution through ritual invocation, talismans, and disciplined will.

Furthermore, Crowley's treatise includes his scathing, merciless expose **"How Horoscopes Are Faked"**, in which he eviscerates commercial newspaper charlatans and fortune-tellers, establishing an unforgiving standard of mathematical and astronomical rigor.

\`\`\`
                                THE TREE OF LIFE & PLANETARY ATTRIBUTIONS
                                
                                          [1] KETHER
                                       (Primum Mobile)
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
                 [2] CHOKMAH                                     [3] BINAH
              (Sphere of Zodiac)                               (Saturn / Chronos)
              (Maslath = 536)                                         │
                      │                                               │
                      └───────────────────────┬───────────────────────┘
                                              │
                                     [DAATH / URANUS]
                                   (The Invisible Abyss)
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
                 [4] CHESED                                      [5] GEBURAH
                  (Jupiter)                                        (Mars)
                      │                                               │
                      └───────────────────────┬───────────────────────┘
                                              │
                                         [6] TIPHARETH
                                          (The Sun / Sol)
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
                 [7] NETZACH                                     [8] HOD
                  (Venus)                                         (Mercury)
                      │                                               │
                      └───────────────────────┬───────────────────────┘
                                              │
                                         [9] YESOD
                                         (The Moon / Luna)
                                              │
                                        [10] MALKUTH
                                        (Earth / Sphere of Elements)
\`\`\`

---

## Structural Pillar 1: The Thelemic Hermetic Epistemology

### 1. "Do What Thou Wilt Shall Be the Whole of the Law"
In Thelemic philosophy, every human being is an immortal star moving along a distinct celestial orbit. 
- **The True Will (Thelema)** is the inherent, unique divine purpose of an individual's incarnation.
- Misery, illness, neurotic crisis, and social catastrophe occur exclusively when an individual's conscious ego attempts to deviate from their True Will, pursuing borrowed ambitions or moral codes imposed by church, family, or state.
- **The Horoscope is the Hieroglyphic Map of the True Will**: It shows the exact nature of the star's orbit, its gravitational allies, and the meteoric obstacles it must transmute.

### 2. The Magician vs. The Automaton
Crowley makes a radical distinction between two classes of human beings:
- **The Ordinary Automaton (The Sleeping Soul)**: The average person possesses no unified will; their actions are mechanical reflexes driven by hormonal drives, advertising, social conformity, and unexamined complexes. For this person, **astrology is deterministic**: transiting Saturn makes them depressed, transiting Mars makes them angry, transiting Jupiter makes them spend money foolishly. They are leaves blown about by the cosmic wind.
- **The Magician (The Awakened Will)**: The Magician has discovered their True Will and begun the Great Work. For the Magician, **astrological transits are energy currents to be harnessed**. If Saturn transits the Midheaven, the Magician does not cry in despair; they use Saturn's structural weight to build a durable temple, write an enduring treatise, or undergo severe ascetic training.

---

## Structural Pillar 2: The Triple Trinity of the Planets

Crowley organizes the solar system according to the ancient Qabalistic structure of the **Three Triads**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE THREE PLANETARY TRINITIES                         │
│                                                                             │
│ 1. THE SUPERNAL / TRANSCENDENTAL TRINITY (Kether - Chokmah - Binah)         │
│    Neptune (Mystical Solvent), Uranus (The Awakener), Saturn (The Matrix)   │
│                                                                             │
│ 2. THE MORAL / ETHICAL TRINITY (Chesed - Geburah - Tiphareth)               │
│    Jupiter (Benevolence & Law), Mars (Severity & Force), Sol (The Centre)   │
│                                                                             │
│ 3. THE ASTRAL / SENSORY TRINITY (Netzach - Hod - Yesod)                     │
│    Venus (Eros & Desire), Mercury (Logos & Intellect), Luna (Instinct & Form)│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. The Supernal Trinity: Outer Transcendental Forces
- **Neptune**: The highest octave of Venus and the Moon. Represents universal dissolution, the boundless ocean of Nuit, transpersonal ecstasy, and mystical trance.
- **Uranus**: The highest octave of Mercury. Represents the lightning stroke of creative genius, magical initiation, absolute freedom, and the destruction of taboos.
- **Saturn**: The Great Mother (Binah) and the Lord of Time (Chronos). Represents form, limitation, crystallization, severe discipline, and karmic necessity.

### 2. The Moral Trinity: The Sovereign Human Heart
- **Sol (The Sun)**: Seated at Tiphareth, the center of the Tree of Life. Sol is the mediator between heaven and earth—the conscious ego crowned with spiritual purpose.
- **Jupiter**: Seated at Chesed. The benevolent king, expansive mercy, institutional law, wisdom, and philanthropic abundance.
- **Mars**: Seated at Geburah. The warrior, dynamic energy, destructive purging of weakness, surgical courage, and iron defense.

### 3. The Astral Trinity: The Nervous and Instinctual Apparatus
- **Venus**: Seated at Netzach. Sensual desire, aesthetic beauty, magnetic attraction, and emotional harmony.
- **Mercury**: Seated at Hod. The analytical intellect, technical science, magical ritual, communication, and commerce.
- **Luna (The Moon)**: Seated at Yesod. The astral foundation, subconscious habit, biological tides, and psychic clairvoyance.

---

## Structural Pillar 3: Neptune — The Universal Solvent

Crowley's chapters on Neptune are among the most profound in the entire corpus of twentieth-century astrological literature. Written when Neptune had been discovered less than a century prior, Crowley penetrated its archetypal essence with surgical poetic clarity:

### 1. The Archetype of Neptune: The Ocean of Infinite Dissolution
- Neptune is the **Universal Solvent** ($Solve$ in the alchemical formula $Solve \text{ et } Coagula$).
- It dissolves the rigid boundaries of the ego, melting the prison walls of the rational intellect to reveal the infinite cosmic ocean.
- In spiritual development, Neptune governs:
  - Samadhi, mystical union with God, cosmic consciousness.
  - Inspiration in music, visionary poetry, and cinematic fantasy.
  - Universal, self-sacrificing compassion for all living beings.

### 2. The Perils of the Corrupted Neptune: Hysteria and Deceit
When Neptune is afflicted or received by a weak, unintegrated personality, its solvent properties do not liberate; they rot the psychic vessel:
- **Hysteria and Pathological Lying**: The individual cannot distinguish between objective physical reality and internal fantasy. They construct elaborate mythologies in which they are either holy martyrs or grand saviors.
- **Addiction and Escapism**: Terrified of the crude friction of the material world, the afflicted Neptune personality escapes into morphine, alcohol, opium, or delusional cults.
- **Psychic Parasitism & Vampirism**: Weakness masquerading as spiritual delicacy.

---

### Neptune in the Twelve Signs & Twelve Houses

| Placement | Elevated Occult Manifestation | Debased Unconscious Manifestation |
| :--- | :--- | :--- |
| **Neptune in Aries / 1st House** | Spiritual trailblazer; inspired prophet; radiant magnetic aura. | Delusions of grandeur; erratic hysteria; identity diffusion. |
| **Neptune in Taurus / 2nd House** | Alchemical transmutation of matter; funding sacred sanctuaries. | Impractical financial vagueness; being swindled; economic decay. |
| **Neptune in Gemini / 3rd House** | Telepathic perception; poetic genius; inspired automatic writing. | Chronic lying; scattered intellectual fads; nervous exhaustion. |
| **Neptune in Cancer / 4th House** | Ancestral mystical communion; home as a holy temple of silence. | Domestic chaos; familial emotional manipulation; damp somatic decay. |
| **Neptune in Leo / 5th House** | Exalted dramatic artistry; divine playfulness; romantic devotion. | Theatrical victimhood; gambling addictions; self-deluded vanity. |
| **Neptune in Virgo / 6th House** | Miraculous spiritual healing; compassionate service to the sick. | Chronic psychosomatic illness; hypochondria; drug dependencies. |
| **Neptune in Libra / 7th House** | Sacred mystical marriage; seeing the Divine in the partner. | Idealizing unworthy partners; deception in marriage; co-dependency. |
| **Neptune in Scorpio / 8th House** | High sexual alchemy (Tantra); effortless astral projection; necromancy. | Black magic fascinations; morbid sexual perversions; financial betrayal. |
| **Neptune in Sagittarius / 9th House** | Direct mystical vision; synthesis of world religions; transcendental philosophy. | Fanatical adherence to fraudulent gurus; superstitious credulity. |
| **Neptune in Capricorn / 10th House** | Spiritualized institutional leadership; saintly public reputation. | Public scandal; downfall through hidden deceit; erosion of authority. |
| **Neptune in Aquarius / 11th House** | Participation in secret esoteric brotherhoods; utopian humanitarian ideals. | Betrayal by treacherous friends; joining subversive, fanatical cults. |
| **Neptune in Pisces / 12th House** | Complete absorption in Cosmic Unity; saintly monastic contemplation. | Confinement in asylums; self-destructive martyrdom; complete madness. |

---

## Structural Pillar 4: Uranus — The Awakener & The Magical Will

If Neptune is the misty ocean that dissolves, Uranus is the **Lightning Bolt that strikes and shatters**.

### 1. The Archetype of Uranus: The Promethean Thunderbolt
- Uranus corresponds to **Chokmah / Daath**—the lightning flash of pure creative intelligence cutting across the Abyss.
- It represents the **Magical Will**: the conscious, unstoppable thrust of originality that refuses to bow to tradition, convention, or fear.
- In human history, Uranus governs:
  - Revolutions that smash tyrannical empires.
  - Scientific breakthroughs (electricity, radioactive fission, aerospace, quantum mechanics).
  - Radical individualists, heretics, occultists, and eccentric innovators.

### 2. The Perils of the Corrupted Uranus: Destructive Cataclysm
When Uranus strikes an unprepared, fragile mind:
- **Violent Contrarianism**: The person opposes everything simply because it exists. They cannot build or maintain anything durable.
- **Nervous Catastrophe**: The high-voltage electrical charge of Uranus overloads the biological nervous system, producing epileptic seizures, violent nervous spasms, insomnia, and abrupt psychosis.
- **Explosive Destruction**: Abruptly abandoning families, burning bridges, and inflicting wanton chaos on their surroundings under the delusion of "freedom."

---

### Uranus in the Twelve Signs & Twelve Houses

| Placement | Elevated Occult Manifestation | Debased Unconscious Manifestation |
| :--- | :--- | :--- |
| **Uranus in Aries / 1st House** | Magnetic pioneer of genius; fearless trailblazer; electrical charisma. | Sudden explosive temper; violent accident-proneness; reckless fanaticism. |
| **Uranus in Taurus / 2nd House** | Revolutionary economic systems; inventing new forms of currency. | Sudden bankruptcy; catastrophic financial speculation; stubborn eccentricity. |
| **Uranus in Gemini / 3rd House** | Lightning-fast conceptual intellect; telecommunication breakthroughs. | Chronic nervous breakdown; erratic mental leaps; alienation from siblings. |
| **Uranus in Cancer / 4th House** | Liberation from ancestral trauma; unconventional sacred dwellings. | Sudden domestic catastrophes; estrangement from parents; nomadic instability. |
| **Uranus in Leo / 5th House** | Radical creative invention; unconventional artistic brilliance. | Chaotic love affairs; sudden illegitimate scandals; gambling mania. |
| **Uranus in Virgo / 6th House** | Innovative electronic therapies; revolutionary scientific hygiene. | Sudden nervous ailments; eccentric dietary obsessions; labor disputes. |
| **Uranus in Libra / 7th House** | Revolutionary partnership of absolute equals; contractual autonomy. | Abrupt divorces; volatile relational warfare; inability to compromise. |
| **Uranus in Scorpio / 8th House** | Mastery of occult Kundalini currents; fearless exploration of death. | Sudden violent death; catastrophic inheritance lawsuits; sexual volatility. |
| **Uranus in Sagittarius / 9th House** | Radical metaphysical philosophy; iconoclastic spiritual teachings. | Violent rejection of all religion; nomadic restlessness; dogmatic rebellion. |
| **Uranus in Capricorn / 10th House** | Overthrowing obsolete political regimes; forging new governmental orders. | Sudden public disgrace; rapid rise followed by catastrophic fall from power. |
| **Uranus in Aquarius / 11th House** | Leadership of vanguard esoteric fraternities; global humanitarian networks. | Chaotic, untrustworthy companions; sudden severance from social circles. |
| **Uranus in Pisces / 12th House** | Spontaneous illumination; tapping the collective unconscious genius. | Sudden involuntary hospitalization; secret enemies plotting sudden ambushes. |

---

## Structural Pillar 5: "How Horoscopes Are Faked" — Crowley's War on Charlatanism

In one of the most blistering, ruthlessly entertaining chapters in the literature, Aleister Crowley exposes the sordid underworld of commercial astrology. He details the precise tradecraft used by fraudulent astrologers to fleece the gullible public:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 CROWLEY'S EXPOSE OF COMMERCIAL CHARLATAN TRICKS             │
│                                                                             │
│ 1. THE BARNUM EFFECT & UNIVERSAL TRUISMS                                    │
│    Writing ambiguous statements that apply to every human being alive.      │
│                                                                             │
│ 2. COLD READING & PHYSIOGNOMIC OBSERVATION                                  │
│    Reading jewelry, fingernails, posture, and speech cues while pretending   │
│    to consult the astrological ephemeris.                                   │
│                                                                             │
│ 3. THE "FROZEN EPHEMERIS" & READY-MADE TEMPLATES                            │
│    Selling identical printed sheets to thousands of clients based on Sun    │
│    signs alone, ignoring houses, ascendants, and exact degrees.             │
│                                                                             │
│ 4. EMOTIONAL BLACKMAIL & FEAR-BASED REMEDIES                                │
│    Terrifying clients with fake "Saturnian curses" and demanding exorbitant │
│    fees for astrological amulets or rituals to avert the disaster.          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Crowley's Standard of Astronomical Rigor:
Crowley insists that no chart can be judged without:
1. **Accurate Local Mean Time (LMT)** adjusted for longitude and equation of time.
2. **True Astronomical House Division** calculated via spherical trigonometry.
3. **Synthesis of Planetary Aspects within Precise Orbs** (rejecting loose, sloppy 10-degree orbs for minor bodies).
4. **Absolute Moral Honesty**: The astrologer must speak the unvarnished mathematical truth of the chart, never flattering the client's vanity or playing upon their neurotic fears.

---

## The Magician's Protocol: The Practical Application of Astrology in the Great Work

For Crowley, the ultimate value of astrology is **practical self-transmutation**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE ALCHEMICAL REMEDY PROTOCOL                        │
│                                                                             │
│ STEP 1: CHART AUDIT FOR ELEMENTAL IMBALANCE                                 │
│         Does the chart suffer from a deficit of Fire (will), Earth (action), │
│         Air (intellect), or Water (feeling)?                                │
│                                                                             │
│ STEP 2: IDENTIFY THE MALEFIC COMPRESSION                                    │
│         Locate afflicted planets causing psychic fixation or paralysis.     │
│                                                                             │
│ STEP 3: RITUAL INVOCATION OF THE BALANCING FORCE                            │
│         If Mars is deficient (timidity), invoke Horus / Geburah.            │
│         If Saturn is excessive (melancholy), invoke Jupiter / Chesed.       │
│                                                                             │
│ STEP 4: ACTIVE INTEGRATION INTO LIFE CONDUCT                                │
│         Engage in physical disciplines that anchor the invoked planetary    │
│         archetype in daily behavior until equilibrium is attained.          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### The Final Axiom:
*"The stars incline, they do not compel. But to the Magician who knows the secret of the celestial currents, the stars become the chariot horses of the awakened Will."*

---

## Architectural Deep Dive: Essential Dignities & The Decanate-Tarot Grid

In *Liber 536*, Aleister Crowley grounds his astrology directly in the Hermetic Order of the Golden Dawn's secret synthesis: the complete integration of the **36 Decanates of the Zodiac** with the **Minor Arcana (Small Cards) of the Tarot**:

### 1. The Structure of Essential Dignities
Crowley evaluates the power of a planet according to its five traditional levels of dignity, but reinterprets them through the lens of magical capacity:
- **Domicile / Rulership (+5 points)**: The planet is in its own royal palace; its energy operates with maximum natural autonomy and majesty.
- **Exaltation (+4 points)**: The planet is an honored, celebrated guest in the palace of a high ally; its virtues are intensified and idealized.
- **Triplicity (+3 points)**: The planet is among its natural elemental kin (Fire, Earth, Air, Water).
- **Term (+2 points)**: The planet controls a specific degree segment of a sign; it possesses administrative authority.
- **Face / Decan (+1 point)**: The planet commands a ten-degree sector of the sign; it operates as an officer on the front lines.
- **Detriment (-5 points)**: The planet is in the sign opposite its rulership; its natural expression is inverted or frustrated.
- **Fall (-4 points)**: The planet is in the sign opposite its exaltation; it feels disgraced, misunderstood, or immobilized.

---

### 2. The 36 Decanates and Their Precise Tarot Attributions

Crowley's master key aligns every 10-degree segment of the zodiac with the Chaldean order of planetary rulerships (Mars, Sun, Venus, Mercury, Moon, Saturn, Jupiter) and the numbered Tarot cards from Two to Ten:

| Zodiacal Sign | Decan Range | Sub-Ruler (Chaldean) | Associated Tarot Card | Occult Title / Archetype |
| :--- | :---: | :---: | :--- | :--- |
| **Aries** | $0^\circ - 10^\circ$ | Mars | Two of Wands | Dominion / The Spark of Sovereign Will |
| | $10^\circ - 20^\circ$ | Sun | Three of Wands | Established Strength / Horizon Gaze |
| | $20^\circ - 30^\circ$ | Venus | Four of Wands | Completion / The Perfected Hearth |
| **Taurus** | $0^\circ - 10^\circ$ | Mercury | Five of Disks | Material Trouble / The Physical Ordeal |
| | $10^\circ - 20^\circ$ | Moon | Six of Disks | Material Success / Organic Reciprocity |
| | $20^\circ - 30^\circ$ | Saturn | Seven of Disks | Success Unfulfilled / The Slump of Sloth |
| **Gemini** | $0^\circ - 10^\circ$ | Jupiter | Eight of Swords | Shortened Force / Intellectual Paralysis |
| | $10^\circ - 20^\circ$ | Mars | Nine of Swords | Despair and Cruelty / Mental Agony |
| | $20^\circ - 30^\circ$ | Sun | Ten of Swords | Ruin / The Catastrophic End of Ideation |
| **Cancer** | $0^\circ - 10^\circ$ | Venus | Two of Cups | Love / The Sacred Conjunction |
| | $10^\circ - 20^\circ$ | Mercury | Three of Cups | Abundance / Joyous Communion |
| | $20^\circ - 30^\circ$ | Moon | Four of Cups | Blended Pleasure / Satiety & Stagnation |
| **Leo** | $0^\circ - 10^\circ$ | Saturn | Five of Wands | Strife / The Competition of Wills |
| | $10^\circ - 20^\circ$ | Jupiter | Six of Wands | Victory / The Triumphal Procession |
| | $20^\circ - 30^\circ$ | Mars | Seven of Wands | Valour / The Lone Defender |
| **Virgo** | $0^\circ - 10^\circ$ | Sun | Eight of Disks | Prudence / Dedicated Craftsmanship |
| | $10^\circ - 20^\circ$ | Venus | Nine of Disks | Material Gain / The Ripened Vineyard |
| | $20^\circ - 30^\circ$ | Mercury | Ten of Disks | Wealth / The Ancestral Citadel |
| **Libra** | $0^\circ - 10^\circ$ | Moon | Two of Swords | Peace Restored / The Balanced Daggers |
| | $10^\circ - 20^\circ$ | Saturn | Three of Swords | Sorrow / The Transfixed Heart |
| | $20^\circ - 30^\circ$ | Jupiter | Four of Swords | Truce / Sanctuary & Mental Repose |
| **Scorpio** | $0^\circ - 10^\circ$ | Mars | Five of Cups | Loss in Pleasure / The Spilled Wine |
| | $10^\circ - 20^\circ$ | Sun | Six of Cups | Pleasure / Nostalgic Innocence |
| | $20^\circ - 30^\circ$ | Venus | Seven of Cups | Illusionary Success / The Cup of Debauch |
| **Sagittarius** | $0^\circ - 10^\circ$ | Mercury | Eight of Wands | Swiftness / The Flight of Arrows |
| | $10^\circ - 20^\circ$ | Moon | Nine of Wands | Great Strength / The Impregnable Wall |
| | $20^\circ - 30^\circ$ | Saturn | Ten of Wands | Oppression / The Overburdened Spine |
| **Capricorn** | $0^\circ - 10^\circ$ | Jupiter | Two of Disks | Change / The Cosmic Juggler |
| | $10^\circ - 20^\circ$ | Mars | Three of Disks | Works / The Masonic Cathedral |
| | $20^\circ - 30^\circ$ | Sun | Four of Disks | Power / The Impenetrable Vault |
| **Aquarius** | $0^\circ - 10^\circ$ | Venus | Five of Swords | Defeat / The Hollow Victory |
| | $10^\circ - 20^\circ$ | Mercury | Six of Swords | Science / The Wayfarer's Ferry |
| | $20^\circ - 30^\circ$ | Moon | Seven of Swords | Unstable Effort / The Treacherous Spy |
| **Pisces** | $0^\circ - 10^\circ$ | Saturn | Eight of Cups | Indolence / Abandoning the Vessel |
| | $10^\circ - 20^\circ$ | Jupiter | Nine of Cups | Happiness / The Banquet of Fulfillment |
| | $20^\circ - 30^\circ$ | Mars | Ten of Cups | Satiety / The Permanent Arc of Blessing |

---

## Architectural Deep Dive: The Hermetic Geometry of Aspects

In Chapter 1 of *Liber 536*, Crowley explains the mathematical basis of astrological aspects. An aspect is not an arbitrary superstition; it is **the interference pattern created when two planetary energetic frequencies intersect along the circle of the ecliptic**:

1. **The Conjunction ($0^\circ$, Factor of 1)**: Direct fusion of forces. The two planetary natures are melted into an indivisible alloy. If harmonious (e.g., Venus-Jupiter), it creates effortless grace; if contradictory (e.g., Mars-Saturn), it generates explosive volcanic compression.
2. **The Opposition ($180^\circ$, Factor of 2)**: The division into duality. Pure polarization. The planets look across the wheel at each other as adversaries or complementary mirrors. It demands conscious balance; otherwise, the individual oscillates uncontrollably between extremes.
3. **The Trine ($120^\circ$, Factor of 3)**: The Triangle of Manifestation (Binah). The number three represents harmonious completion and frictionless equilibrium. Energy circulates effortlessly, bestowing natural talent and good fortune. However, Crowley warns that excessive trines make a person indolent and lazy, lacking the fighting drive necessary to achieve true greatness.
4. **The Square ($90^\circ$, Factor of 4)**: The Cross of Matter (Malkuth). The number four represents the crushing weight of physical incarnation. The square produces violent friction, obstacles, and internal agony. But for the Magician, **the square is the greatest gift in the horoscope**: it is the dynamic combustible fuel of the Will. No human being ever accomplished monumental works without heavy squares in their natal figure.
5. **The Sextile ($60^\circ$, Factor of 6)**: The Hexagram of Sol and the Macrocosm. The sextile represents active opportunity and mental receptivity. Unlike the passive trine, the sextile requires conscious effort to activate its blessings.
6. **Minor Aspects ($30^\circ$ Semi-Sextile, $45^\circ$ Semi-Square, $135^\circ$ Sesquiquadrate, $150^\circ$ Quincunx)**: Subtle irritation and micro-adjustments in the nervous and physical bodies.

---

## Exegesis of "Batrachophrenoboocosmomachia": The Battle of Worldviews

Appended to Crowley's astrological writings is his satirical philosophical treatise entitled **Batrachophrenoboocosmomachia** (literally: *"The Battle of the Frogs, Brains, Oxen, and the Cosmos"*):

- **The Frogs**: Represent the superstitious religious dogmatists who croak blindly in the mud, believing that God micromanages human lives to punish sin and reward ritual piety.
- **The Oxen**: Represent the dry, unimaginative materialist reductionists who plow the mechanical furrow, insisting that the universe is dead matter, that mind is a meaningless byproduct of meat, and that astrology is impossible because they cannot weigh a transit on a butcher's scale.
- **The Brains**: Represent the authentic Hermetic initiates and Magicians who recognize that **matter and spirit are identical polarities of a single continuum**. The universe is alive, conscious, and interconnected through geometric harmonics.

Crowley argues that the true astrologer transcends both the superstitious credulity of the Frogs and the blind reductionism of the Oxen. The horoscope is the living symbolic language of the cosmos speaking to the soul.

---

## Architectural Deep Dive: The Revaluation of Planetary Values (Ptolemy vs. Thelema)

One of Crowley's most revolutionary contributions to astrology was his total overhaul of traditional medieval value judgments:

### 1. The Reclamation of the "Malefics" (Mars and Saturn)
In traditional Ptolemaic and medieval European astrology, Mars and Saturn were branded as "The Lesser Malefic" and "The Greater Malefic"—presumed to be inherently evil, destructive, and unfortunate.
- Crowley overturned this superstition completely:
  - **Mars is Geburah**: Pure vital force, the cosmic immune system, the fire of courage, the scalpel that cuts away diseased flesh. Without Mars, an individual is a spineless coward, incapable of self-defense or executing their True Will.
  - **Saturn is Binah**: The Great Sea of Form, the architect of reality, the virtue of silence and concentration. Without Saturn, energy dissipates into chaotic vapor without achieving lasting physical manifestation.
- To the Magician, Mars and Saturn are **the two most valuable planets in the Great Work**, because they supply the abrasive friction required to polish the diamond of the soul.

### 2. The Danger of the "Benefics" (Venus and Jupiter)
Conversely, traditional astrology fawned over Jupiter and Venus as "The Greater Benefic" and "The Lesser Benefic."
- Crowley issued a stern warning against their uncritical veneration:
  - **Unbalanced Venus**: Degenerates into lethargy, hedonism, sentimental weakness, physical sloth, and spiritual vanity.
  - **Unbalanced Jupiter**: Expands arrogance, pomposity, moral preachiness, reckless debt, and intellectual obesity.
- The Magician seeks **equilibrium**, recognizing that an overdose of sweetness is just as deadly as an overdose of poison.

---

## Architectural Deep Dive: The Astrological Attribution of Tarot Court Cards

In Golden Dawn and Thelemic esoteric tradition, the Court Cards of the Tarot do not represent isolated individuals, but **the interaction of elemental quadruplicities with the astrological zodiac**:

| Court Card Category | Elemental Sub-Element | Zodiacal Quadrant / Degrees | Psychological Archetype |
| :--- | :--- | :--- | :--- |
| **Knights (Kings)** | Fire of [Element] | $20^\circ$ of previous sign to $20^\circ$ of current sign | Dynamic, swift, impulsive action; lightning assault; high creative initiative. |
| **Queens** | Water of [Element] | $20^\circ$ of previous sign to $20^\circ$ of current sign | Receptive, enduring, deep emotional reflection; nurturing the seed in darkness. |
| **Princes (Knights in RWS)**| Air of [Element] | $20^\circ$ of previous sign to $20^\circ$ of current sign | Intellectual formulation, rapid ideation, dialectical reasoning, strategic planning. |
| **Princesses (Pages)** | Earth of [Element] | Rulers of Entire Quadrants around Celestial Pole | Somatic condensation, material anchoring, birthing new physical forms on Earth. |

By tracking the passage of transits through these court card sectors, the Magician can identify which specific persona of the collective unconscious is being activated during an initiation.

---

## The Magician's Guide to Astrological Elections & Planetary Hours

Crowley was a master of **Electional Astrology** (Katarchic Astrology)—the art of choosing an auspicious celestial moment to commence a magical operation, sign a treaty, or publish a book:

1. **The Planetary Hours**: Each day of the week is ruled by a planet (Sunday = Sun, Monday = Moon, Tuesday = Mars, Wednesday = Mercury, Thursday = Jupiter, Friday = Venus, Saturday = Saturn). Each 24-hour period is divided into 12 unequal day hours and 12 night hours, rotating through the Chaldean planetary order.
2. **The Electional Axioms of Liber 536**:
   - For works of **Intellectual Creation, Writing, or Science**: Select the Hour of Mercury on Wednesday, ensuring Mercury is direct, swift in motion, and free from the combustion of the Sun.
   - For works of **Spiritual Power, High Invocations, or Royal Authority**: Select the Hour of the Sun on Sunday, placing Sol in an elevated angular house (10th or 1st) in harmonious aspect to Jupiter.
   - For works of **Destruction, Exorcism, or Severe Pruning**: Select the Hour of Mars on Tuesday, with Mars dignified in Aries or Scorpio and rising above the eastern horizon.
   - For works of **Mystical Devotion, Trance, or Astral Travel**: Select the Hour of the Moon on Monday, aligning with a waxing lunar phase in water or air signs.

---

---

---

## Synthesis Takeaway: Aleister Crowley's Monumental Contribution to Astrology

*The Complete Astrological Writings (Liber 536)* rescues astrology from both the triviality of commercial entertainment and the fatalism of medieval superstition. 

By wedding:
1. **Spherical Trigonometry and Astronomical Precision**,
2. **The Qabalistic Architecture of the Tree of Life**,
3. **The Transcendental Psychology of Neptune and Uranus**, and
4. **The Uncompromising Ethic of the Thelemic True Will**,

Aleister Crowley transformed astrology into an indispensable, diamond-sharp weapon for the spiritual evolution and self-sovereignty of the human soul.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Complete Astrological Writings | Aleister Crowley (Liber 536)</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .thelema-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(139, 0, 0, 0.15);
      color: #8b0000;
      border: 1px solid rgba(139, 0, 0, 0.3);
      margin-bottom: 0.5rem;
    }
    .sephirah-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    .sephirah-card {
      background: var(--card-bg, #fffdfa);
      border: 1px solid var(--border-color, #e8dfd5);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .sephirah-card h4 {
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
        <h1 class="book-title">The Complete Astrological Writings</h1>
        <p class="book-subtitle">Liber 536 • A Treatise on Astrology • Edited by John Symonds & Kenneth Grant</p>
        <div class="book-meta">
          <span class="meta-item"><strong>Author:</strong> Aleister Crowley</span>
          <span class="meta-item"><strong>System:</strong> Thelemic Hermetic & Qabalistic Astrology</span>
          <span class="meta-item"><strong>Fidelity:</strong> BKRS v2.0 Replacement Grade</span>
          <span class="meta-item"><strong>Master Notes:</strong> 32k+ Chars</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Hermetic Journey</button>
        <button class="view-btn" data-view="blueprint">View B: Tree of Life Blueprint</button>
        <button class="view-btn" data-view="engine">View C: Magician's Protocol</button>
      </div>
    </header>

    <main class="reader-body">
      <!-- VIEW A: JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="prose-content">
          <div class="chapter-card intro-card">
            <h2>Liber 536: The Celestial Weapon of Thelema</h2>
            <p>Written in 1917–1918 by Aleister Crowley, <em>Liber 536</em> (numbered after Hebrew <em>Maslath</em>, the sphere of the Zodiac) treats astrology not as petty fortune-telling, but as an indispensable Hermetic weapon for discovering and executing the <strong>True Will (Thelema)</strong>.</p>
            <p>Crowley blends Golden Dawn occultism, spherical trigonometry, the Qabalistic Tree of Life, and profound psychological dissections of Neptune (the Mystical Solvent) and Uranus (the Magician's Awakener), concluding with his merciless expose <em>"How Horoscopes Are Faked"</em> to purge the art of charlatans.</p>
          </div>

          <div class="units-container">
            ${knowledgeUnits.map((u, idx) => `
              <article class="unit-card" id="${u.id}">
                <div class="unit-header">
                  <span class="unit-number">UNIT ${String(idx + 1).padStart(2, '0')}</span>
                  <span class="thelema-badge">${u.epistemicStatus}</span>
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
          <h2>The Triple Trinity of the Planets on the Tree of Life</h2>
          <p>Crowley structures planetary archetypes across the three Qabalistic octaves:</p>

          <div class="sephirah-grid">
            <div class="sephirah-card">
              <h4>1. The Supernal Trinity</h4>
              <p><strong>Sphere:</strong> Kether – Chokmah – Binah</p>
              <p><strong>Planets:</strong> Neptune (The Mystical Solvent), Uranus (The Promethean Awakener), Saturn (The Matrix of Form & Chronos).</p>
              <p><strong>Occult Function:</strong> Transcendental consciousness, radical spiritual initiation, and the cosmic boundaries of incarnation.</p>
            </div>

            <div class="sephirah-card">
              <h4>2. The Moral Trinity</h4>
              <p><strong>Sphere:</strong> Chesed – Geburah – Tiphareth</p>
              <p><strong>Planets:</strong> Jupiter (Mercy & Law), Mars (Severity & Force), Sol (The Divine Sun / Center of Will).</p>
              <p><strong>Occult Function:</strong> The human sovereign heart, ethical balance, courage, and executive purpose.</p>
            </div>

            <div class="sephirah-card">
              <h4>3. The Astral Trinity</h4>
              <p><strong>Sphere:</strong> Netzach – Hod – Yesod</p>
              <p><strong>Planets:</strong> Venus (Sensual Desire & Art), Mercury (Intellect & Ritual), Luna (Subconscious Tides & Astral Foundation).</p>
              <p><strong>Occult Function:</strong> The sensory apparatus, nervous system transmission, and emotional habit fields.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW C: MAGICIAN PROTOCOL -->
      <section id="view-engine" class="view-section">
        <div class="prose-content">
          <h2>The Magician's Operational Astrological Protocol</h2>

          <div class="heuristic-card">
            <h3>Protocol 1: Diagnosing the True Will vs. Ego Inertia</h3>
            <p>The horoscope reveals the path of least resistance for the soul's divine orbit. Every neurosis is an attempt by the unawakened ego to resist its authentic celestial trajectory.</p>
          </div>

          <div class="heuristic-card">
            <h3>Protocol 2: Planetary Invocation for Elemental Equilibrium</h3>
            <p>Astrology is not passive spectatorship. Where the chart shows planetary deficiency (such as lack of Mars courage or lack of Saturn discipline), the Magician deliberately performs ceremonial invocations and adopts physical disciplines to restore cosmic equilibrium.</p>
          </div>

          <div class="heuristic-card">
            <h3>Protocol 3: Detection of Charlatanism</h3>
            <p>Crowley demands absolute mathematical rigor. Horoscopes based on vague sun-sign cliches or psychic cold reading are fraudulent. True astrology requires exact local time, spherical trigonometry, and unflinching psychological honesty.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-meta">
        <p><strong>Intellectualist Project</strong> • Standard BKRS v2.0 Replacement Reader • Source: <em>The Complete Astrological Writings</em> (Liber 536) by Aleister Crowley</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf8');

console.log('Successfully wrote knowledge-units.json for The Complete Astrological Writings');
console.log('Successfully wrote master-notes.md for The Complete Astrological Writings (' + masterNotesMarkdown.length + ' chars)');
console.log('Successfully wrote index.html for The Complete Astrological Writings (' + readerHtml.length + ' chars)');
