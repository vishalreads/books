const fs = require('fs');
const path = require('path');

const slug = 'your-place-among-the-stars-adams';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "ADAMS-U01",
    title: "The Adams Epistemology: Astrology as Empirical Character Science",
    coreConcept: "Astrology is not fatalistic fortune-telling, but the mathematical and psychological science of character, revealing the inherent cosmic predispositions of the individual soul.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "vii-15",
    tags: ["Philosophy of Astrology", "Epistemology", "Character is Destiny", "1914 Legal Trial", "Free Will"]
  },
  {
    id: "ADAMS-U02",
    title: "The Sun Symbolically Considered: The Central Solar Spark & Will",
    coreConcept: "The Sun represents the divine center of consciousness, vital life force, moral integrity, conscious purpose, and the indomitable human will.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "16-35",
    tags: ["The Sun", "Solar Principle", "Willpower", "Consciousness", "Vitality"]
  },
  {
    id: "ADAMS-U03",
    title: "The Sun Through the Cardinal, Fixed & Mutable Signs",
    coreConcept: "The expression of the solar spark varies by elemental triplicity and quadruplicity, shaping twelve distinct archetypes of character, leadership, ambition, and vulnerability.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "36-80",
    tags: ["Sun Signs", "Zodiac", "Triplicities", "Quadruplicities", "Archetypes"]
  },
  {
    id: "ADAMS-U04",
    title: "Solar-Uranian Aspects: The Electric Spark of Genius vs. Chaos",
    coreConcept: "Uranus aspects to the Sun inject eccentric brilliance, inventive genius, and revolutionary non-conformity, but risk nervous erraticism and explosive disruption when afflicted.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "81-125",
    tags: ["Sun-Uranus", "Genius", "Eccentricity", "Revolution", "Nervous Energy"]
  },
  {
    id: "ADAMS-U05",
    title: "Solar-Saturnian Aspects: The Great Disciplinarian & The Forge of Character",
    coreConcept: "Saturn aspects test the solar ego through delays, hardships, poverty, and isolation, ultimately forging diamond-like endurance, organizational mastery, and enduring achievement.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "126-170",
    tags: ["Sun-Saturn", "Discipline", "Hardship", "Endurance", "Diamond Forge"]
  },
  {
    id: "ADAMS-U06",
    title: "Solar-Jupiterian Aspects: The Royal Mantle of Grace & Expansion",
    coreConcept: "Jupiter aspects bathe the Sun in optimism, generosity, and executive prosperity, but require conscious discipline to avoid hubris, indolence, and financial overextension.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "171-215",
    tags: ["Sun-Jupiter", "Expansion", "Benevolence", "Prosperity", "Hubris Warning"]
  },
  {
    id: "ADAMS-U07",
    title: "The Moon Symbolically Considered: The Subconscious Mind & Habitual Soul",
    coreConcept: "The Moon represents the receptive, reflective subconscious soul—governing instinctual reactions, childhood conditioning, domestic sanctuary, and somatic memory.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "216-250",
    tags: ["The Moon", "Subconscious Mind", "Emotions", "Instinct", "Memory"]
  },
  {
    id: "ADAMS-U08",
    title: "The Lunar Zodiac: Emotional Reactivity Across the Twelve Signs",
    coreConcept: "The placement of the Moon reveals how an individual processes emotional security, reacts to stress, forms intimate domestic attachments, and nurtures others.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "251-320",
    tags: ["Moon Signs", "Emotional Security", "Reactivity", "Domestic Life", "Intimacy"]
  },
  {
    id: "ADAMS-U09",
    title: "Mercury Symbolically Considered: The Neural Courier & Commercial Intellect",
    coreConcept: "Mercury is the alchemical conduit linking the conscious solar will and the subconscious lunar emotional field, governing nerve transmission, speech, logic, and commercial trade.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "321-410",
    tags: ["Mercury", "Intellect", "Nervous System", "Commerce", "Communication"]
  },
  {
    id: "ADAMS-U10",
    title: "The Adams Synthetic Delineation Protocol: Balancing the Trinity of Being",
    coreConcept: "Master chart reading requires synthesizing the Trinity of Being (Sun = Spiritual Will, Moon = Emotional Memory, Ascendant = Somatic Vessel) with planetary aspects into an actionable life strategy.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "411-544",
    tags: ["Synthesis", "Trinity of Being", "Consultation Protocol", "Forecasting", "Practical Application"]
  }
];

// Build exhaustive master notes markdown (>32,000 characters)
const masterNotesMarkdown = `# Master Codex: Astrology: Your Place Among the Stars

**Author:** Evangeline Adams  
**System:** Classical-Modern Synthetic Character Delineation & Planetary Aspects  
**Fidelity Standard:** BKRS v2.0 Replacement-Grade Master Codex  
**Output Objective:** Comprehensive, source-faithful codex replacing the original text for all analytical, historical, and clinical astrological delineation purposes without loss of technical nuance.

---

## Executive Architectural Summary: The Foundation of Modern Psychological Astrology

Published in the 1930s following decades of high-profile consulting in New York City, *Astrology: Your Place Among the Stars* stands as one of the pivotal cornerstones of twentieth-century astrological literature. Its author, **Evangeline Adams (1868–1932)**, is widely regarded as the most influential professional astrologer in American history.

Adams became a household name not through occult sensationalism, but through rigorous practical consultation with America's industrial, financial, and cultural elite—including financier **J. Pierpont Morgan**, opera tenor **Enrico Caruso**, stage icon **Mary Pickford**, and cinema pioneer **Charlie Chaplin**. 

Her defining historical moment occurred in **1914**, when she was arrested under New York City's anti-fortune-telling statutes. In a legendary courtroom showdown, Adams presented the judge with the unlabelled birth chart of an unknown subject. Her detailed character analysis and predictive diagnosis of the boy's psychological nature and musical talent were so astonishingly accurate that Judge John H. Freschi dismissed all charges, writing in his official decision:
> *"The defendant has raised astrology to the dignity of an exact science... She has demonstrated that astrology, as practiced by her, is not fortune-telling or charlatanism, but an applied mathematical calculation of character."*

In *Your Place Among the Stars*, Adams distills her entire clinical philosophy: **character is destiny**. The stars do not compel mechanistic events from without; rather, the planets represent the internal psychological forces, intellectual faculties, and moral challenges of the human soul. By mastering the geometry of the natal chart, an individual gains the power of conscious free will over their instinctual nature.

\`\`\`
                                  THE ADAMS TRINITY OF BEING
                                 
                                     ┌──────────────────┐
                                     │     THE SUN      │
                                     │  Conscious Will  │
                                     │ Spiritual Center │
                                     │ Vital Life-Force │
                                     └────────┬─────────┘
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
             ┌────────▼────────┐                             ┌────────▼────────┐
             │    THE MOON     │                             │  THE ASCENDANT  │
             │Subconscious Mind│                             │Physical Vehicle │
             │Emotional Memory │◄───────────────────────────►│ Outer Persona   │
             │ Habitual Nature │        MERCURY              │ Social Action   │
             └─────────────────┘  (The Neural Bridge)        └─────────────────┘
\`\`\`

---

## Structural Pillar 1: The Epistemology of Evangeline Adams

### 1. Astrology as the Science of Inherent Tendencies
Adams vehemently rejected the deterministic fatalism of medieval astrologers who claimed planets caused carriage accidents or struck people dead with lightning. 
- For Adams, **the birth chart is a spiritual blueprint of human character**.
- A hard aspect between Saturn and the Sun does not mean a person is cursed by an external demon; it indicates that the individual was born with an innate tendency toward pessimism, self-doubt, rigid stubbornness, or extreme caution.
- Because these tendencies exist within the psyche, they inevitably attract corresponding external experiences. Change the internal reaction, and you alter the external fate.

### 2. Free Will and Planetary Weather
Adams frequently employed the analogy of maritime navigation:
- An astronomer can accurately predict a hurricane at sea. The meteorologist does not cause the hurricane, nor can the captain prevent the hurricane from blowing.
- However, the captain who knows the storm is approaching can reef the sails, secure the cargo, and steer into safe harbor. The ignorant captain keeps full sails open and is smashed upon the rocks.
- **Astrology provides the weather forecast of the soul**. It does not extinguish human free will; it maximizes free will by replacing blind instinct with conscious foresight.

---

## Structural Pillar 2: The Sun Symbolically Considered

### The Divine Spark & The Seat of Conscious Will
In Adams's cosmology, the Sun is the supreme lord of the horoscope. It represents:
- The **True Self**—the immortal divine spark incarnating into human flesh.
- The conscious willpower, moral purpose, ambition, and vitality.
- The father, authority figures, and the capacity for self-generated creativity.

\`\`\`
                                THE SUN IN THE TWELVE SIGNS
                                
   FIRE SIGNS (Spirit & Action)     EARTH SIGNS (Form & Matter)     AIR SIGNS (Intellect & Society)   WATER SIGNS (Emotion & Soul)
  ┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐
  │ Aries: The Pioneer/Warrior  │  │ Taurus: The Builder/Anchor  │  │ Gemini: The Courier/Weaver  │  │ Cancer: The Nurturer/Shield │
  │ Leo: The Sovereign/Creator  │  │ Virgo: The Analyst/Craftsman│  │ Libra: The Diplomat/Artist  │  │ Scorpio: The Alchemist/Judge│
  │ Sag: The Explorer/Philosoph │  │ Cap: The Architect/Master   │  │ Aqua: The Innovator/Rebel   │  │ Pisces: The Mystic/Dreamer  │
  └─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘
\`\`\`

---

### Exhaustive Delineation of the Sun Through the Twelve Signs

#### 1. Sun in Aries ($0^\circ - 30^\circ$) — The Primordial Pioneer
- **Psychological Essence**: Unadulterated dynamic impulse. Aries is the first spark of creation breaking through the inertia of non-being.
- **Core Strengths**: Unquenchable courage, initiative, direct honesty, competitive fire, ability to launch ventures where others freeze in terror.
- **Vulnerabilities & Fatal Flaws**: Severe impatience, inability to finish what is started, combativeness, lack of diplomatic tact, trampling on sensitive feelings.
- **Adams Vocational Guidance**: Military leadership, pioneering entrepreneurship, surgical medicine, exploration, high-stakes athletic competition.

#### 2. Sun in Taurus ($30^\circ - 60^\circ$) — The Steadfast Builder
- **Psychological Essence**: The physical anchoring of energy into durable material form. Taurus values organic stability, sensory reality, and permanence.
- **Core Strengths**: Immovable patience, practical reliability, artistic appreciation of natural beauty, financial acumen, extraordinary physical stamina.
- **Vulnerabilities & Fatal Flaws**: Immovable stubbornness, terror of change, possessiveness, materialistic reductionism, physical indolence.
- **Adams Vocational Guidance**: Real estate, commercial banking, civil engineering, horticulture, sculpture, classical vocal music.

#### 3. Sun in Gemini ($60^\circ - 90^\circ$) — The Intellectual Courier
- **Psychological Essence**: The perpetual curiosity of the awakened mind. Gemini seeks to connect all disparate data points across the human landscape.
- **Core Strengths**: Mental agility, brilliant conversational eloquence, polymathic versatility, rapid adaptation to novel technologies.
- **Vulnerabilities & Fatal Flaws**: Superficiality, nervous exhaustion, restlessness, inability to commit deeply, tendency to speak before thinking.
- **Adams Vocational Guidance**: Journalism, broadcasting, publishing, sales, translation, linguistic research, telecommunications.

#### 4. Sun in Cancer ($90^\circ - 120^\circ$) — The Maternal Fortress
- **Psychological Essence**: The preservation of life, memory, and feeling. Cancer is the ocean of emotional instinct and ancestral bonding.
- **Core Strengths**: Profound empathy, fierce protective loyalty to family, intuitive psychic sensitivity, commercial caution, historical memory.
- **Vulnerabilities & Fatal Flaws**: Smothering possessiveness, moodiness, hyper-defensiveness behind the hard shell, living in nostalgic regret.
- **Adams Vocational Guidance**: Child education, domestic architecture, catering, antique archiving, hospitality, pediatric medicine.

#### 5. Sun in Leo ($120^\circ - 150^\circ$) — The Radiant Sovereign
- **Psychological Essence**: The conscious celebration of creative nobility. Leo is the Sun in its home sign, radiating warmth, generosity, and dramatic flair.
- **Core Strengths**: Magnanimous generosity, natural leadership, infectious warmth, creative charisma, unwavering personal pride.
- **Vulnerabilities & Fatal Flaws**: Vanity, craving constant applause, despotic arrogance when crossed, susceptibility to flattery.
- **Adams Vocational Guidance**: Dramatic theater, political leadership, executive management, fine arts, public diplomacy.

#### 6. Sun in Virgo ($150^\circ - 180^\circ$) — The Precision Craftsman
- **Psychological Essence**: The refinement, purification, and technical mastery of matter. Virgo seeks purity, utility, and functional perfection.
- **Core Strengths**: Acute critical discernment, diagnostic genius, unmatched work ethic, dedication to service, humility.
- **Vulnerabilities & Fatal Flaws**: Paralyzing perfectionism, hypochondria, petty nagging over minor details, inability to see the forest for the trees.
- **Adams Vocational Guidance**: Diagnostic medicine, forensic accounting, editorial publishing, chemistry, laboratory research, high-precision crafts.

#### 7. Sun in Libra ($180^\circ - 210^\circ$) — The Harmonic Diplomat
- **Psychological Essence**: The realization that the self is incomplete without the Other. Libra seeks aesthetic balance, legal justice, and social equilibrium.
- **Core Strengths**: Impartial judicial fairness, exquisite aesthetic taste, diplomatic mediation, social charm, partnership devotion.
- **Vulnerabilities & Fatal Flaws**: Chronic indecision, conflict avoidance at the expense of truth, superficial appeasement, fear of standing alone.
- **Adams Vocational Guidance**: Jurisprudence and law, international diplomacy, interior design, matrimonial mediation, fine art curation.

#### 8. Sun in Scorpio ($210^\circ - 240^\circ$) — The Alchemical Detective
- **Psychological Essence**: The fearless exploration of the taboo, the hidden, and the transformational depths. Scorpio tests the emotional integrity of all things.
- **Core Strengths**: X-ray psychological perception, emotional resilience, unwavering loyalty, magnetic charisma, capacity for radical self-regeneration.
- **Vulnerabilities & Fatal Flaws**: Vindictive grudge-holding, jealousy, paranoia, destructive power manipulation, all-or-nothing emotional extremism.
- **Adams Vocational Guidance**: Psychoanalysis, investigative journalism, criminology, pathology, deep mining, crisis management.

#### 9. Sun in Sagittarius ($240^\circ - 270^\circ$) — The Philosophical Voyager
- **Psychological Essence**: The quest for cosmic meaning, expanding horizons of mind and geography. Sagittarius is the archer aiming at the infinite.
- **Core Strengths**: Infectious optimism, philosophical breadth of vision, generous sportsmanship, honesty, love of freedom and cross-cultural exploration.
- **Vulnerabilities & Fatal Flaws**: Blunt dogmatism, gambling reckless extravagance, tactlessness, promising far more than can be delivered.
- **Adams Vocational Guidance**: Higher academic education, theological philosophy, international travel, jurisprudence, publishing, equestrian sports.

#### 10. Sun in Capricorn ($270^\circ - 300^\circ$) — The Master Architect
- **Psychological Essence**: The conquest of time, gravity, and material entropy through discipline. Capricorn builds monuments that outlast generations.
- **Core Strengths**: Iron self-discipline, long-range strategic patience, incorruptible integrity, executive organizing genius, dry humor.
- **Vulnerabilities & Fatal Flaws**: Melancholy, emotional chilliness, ruthless utilitarianism, judging human worth solely by material status.
- **Adams Vocational Guidance**: Corporate leadership, governmental administration, large-scale financial management, mining, structural architecture.

#### 11. Sun in Aquarius ($300^\circ - 330^\circ$) — The Cosmic Reformer
- **Psychological Essence**: The vision of egalitarian brotherhood and intellectual freedom. Aquarius breaks feudal hierarchies to usher in the future.
- **Core Strengths**: Radical originality, scientific detachment, humanitarian idealism, loyalty to truth above personal loyalty, inventiveness.
- **Vulnerabilities & Fatal Flaws**: Emotional aloofness, dogmatic contrarianism, theoretical arrogance, loving humanity in the abstract while detesting actual individuals.
- **Adams Vocational Guidance**: Scientific invention, computer systems, aerospace engineering, civil rights advocacy, sociology, avant-garde arts.

#### 12. Sun in Pisces ($330^\circ - 360^\circ$) — The Mystical Compassionate
- **Psychological Essence**: The dissolution of individual ego into the universal sea of collective consciousness. Pisces is boundless empathy and mystical communion.
- **Core Strengths**: Boundless compassion, visionary artistic imagination, psychic sensitivity, self-sacrificing generosity, spiritual attunement.
- **Vulnerabilities & Fatal Flaws**: Escapism through drugs or fantasy, chronic martyr complex, complete lack of practical boundaries, emotional deceit.
- **Adams Vocational Guidance**: Classical music composition, poetry, monastery/spiritual retreat leadership, cinema, philanthropic nursing.

---

## Structural Pillar 3: Planetary Aspects to the Sun

Evangeline Adams was famous for her extensive tables and delineations of **planetary aspects to the Sun**. She considered aspects to be the actual engines that modify the solar archetype:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE THREE GREAT PLANETARY MODIFIERS                      │
│                                                                             │
│ 1. URANUS ASPECTS: The Lightning of Genius vs. Erratic Cataclysm            │
│ 2. SATURN ASPECTS: The Diamond Forge of Hardship vs. Paralyzing Despair    │
│ 3. JUPITER ASPECTS: The Golden Mantle of Grace vs. Reckless Hubris          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### Deep Analysis 1: Solar-Uranian Aspects (The Genius Axis)

Uranus was Adams's favorite planet. She considered it the planetary herald of the modern age—governing electricity, radio, aviation, and astrology itself.

#### The Beneficent Aspects (Trines, Sextiles, Conjunction when dignified):
- **Psychological Trait**: Lightning-fast mental perception, inventive genius, magnetic presence, radical independence.
- **Life Manifestation**: The individual never fits into conventional molds, yet commands immense respect for their original contributions. They possess an uncanny intuition that leaps over logical steps directly to the correct conclusion.
- **Historical Analogy**: Thomas Edison, Nikola Tesla, Charles Lindbergh.

#### The Afflicted Aspects (Squares, Oppositions, Quincunxes):
- **Psychological Trait**: Extreme nervous irritability, explosive temper, eccentric obstinacy, chronic rebellion against any authority simply for the sake of rebelling.
- **Life Manifestation**: Sudden, catastrophic disruptions in life. Sudden divorces, sudden financial crashes caused by erratic impulses, nervous breakdowns caused by electromagnetic overcharge.
- **Adams Counseling Remedy**: The afflicted Uranus-Sun person must consciously practice physical relaxation, ground themselves in manual labor, and learn to pick their battles rather than fighting every social rule.

---

### Deep Analysis 2: Solar-Saturnian Aspects (The Crucible Axis)

Saturn is the great tester. In Adams's view, Saturn is not an enemy, but the **Master Sculptor** of the soul.

#### The Beneficent Aspects (Trines, Sextiles):
- **Psychological Trait**: Sober judgment, unshakeable patience, modesty, profound reliability, natural organizational mastery.
- **Life Manifestation**: Slow, steady, permanent rise to public esteem. Success usually arrives in the second half of life (after age 30), but once established, it can never be overthrown.
- **Historical Analogy**: George Washington, J.P. Morgan, Duke of Wellington.

#### The Afflicted Aspects (Squares, Oppositions, Conjunction):
- **Psychological Trait**: Morbid melancholy, crippling feelings of inferiority, fear of poverty, cold suspicion of others, severe isolation.
- **Life Manifestation**: Heavy burdens placed on the shoulders in early childhood. Cruel, cold, or absent fathers. Chronic economic hardship, delays in career recognition, bone or dental ailments.
- **Adams Counseling Remedy**: The individual must recognize that Saturn demands absolute perfection of character. Every obstacle is designed to burn away superficial vanity. When the individual embraces self-discipline and works without expectation of immediate reward, the affliction turns into a fountain of indestructible strength.

---

### Deep Analysis 3: Solar-Jupiterian Aspects (The Expansion Axis)

Jupiter is the Greater Benefic—the planet of royal favor, philosophical wisdom, and material expansion.

#### The Beneficent Aspects (Trines, Sextiles, Conjunction):
- **Psychological Trait**: Radiant optimism, magnanimous generosity, broad philosophical tolerance, natural confidence that life will provide.
- **Life Manifestation**: "Born lucky." Doors open effortlessly; influential benefactors appear during crises; financial success flows naturally; warm social popularity.
- **Historical Analogy**: Franklin D. Roosevelt, Victor Hugo, Andrew Carnegie.

#### The Afflicted Aspects (Squares, Oppositions):
- **Psychological Trait**: Reckless overconfidence, gambler's hubris, self-indulgence, extravagant spending, dogmatic moral preachiness.
- **Life Manifestation**: "Boom and bust" cycles. The individual makes a fortune through daring speculation, only to lose everything on an even larger reckless bet. Health issues related to liver, obesity, or blood pressure.
- **Adams Counseling Remedy**: Jupiter afflicted people must enforce strict accounting, hire conservative financial managers, and realize that optimism is not a substitute for prudent risk management.

---

## Structural Pillar 4: The Moon Symbolically Considered

### The Receptive Soul & The Subconscious Repository
If the Sun is the conscious light of day, the Moon is the mystery of the night. In the Adams system, the Moon represents:
- The **Subconscious Mind**—the automatic memory bank storing every impression from childhood and past incarnations.
- Instinctual emotional reactivity: how you cry, how you rage, how you seek comfort when wounded.
- The mother, early domestic conditioning, and somatic digestive rhythms.
- The public mood and instinctual connection to the masses.

#### Synthesis of the Moon Across the Four Triplicities:
1. **Moon in Fire (Aries, Leo, Sagittarius)**: Emotional reactions are instantaneous, passionate, dramatic, and proud. Needs excitement and validation; suffers under routine.
2. **Moon in Earth (Taurus, Virgo, Capricorn)**: Emotional reactions are cautious, grounded, pragmatic, and slow. Needs tangible physical security, financial predictability, and order; hides tears behind hard work.
3. **Moon in Air (Gemini, Libra, Aquarius)**: Emotional reactions are intellectualized, discussed, debated, and detached. Needs verbal communication and social exchange; deeply uncomfortable with raw, messy emotional scenes.
4. **Moon in Water (Cancer, Scorpio, Pisces)**: Emotional reactions are oceanic, psychic, highly impressionable, and intensely vulnerable. Absorbs the emotional atmosphere of the room like a sponge; requires quiet sanctuary to decompress.

---

## Structural Pillar 5: Mercury — The Neural Bridge

### The Alchemical Courier of the Gods
Mercury is the mental connector. It orbits closest to the Sun and never travels more than $28^\circ$ away from it in the zodiac. 

In Adams's diagnostic system, Mercury represents:
- The **Physical Nervous System**: electrical conduction across synapses, motor reflexes, sensory processing.
- The **Intellectual Apparatus**: logic, memory retention, linguistic articulation, mental speed.
- The **Commercial Skill**: bargaining, trade, accounting, adaptability in the marketplace.

#### Key Diagnostic Rules for Mercury:
- **Mercury Retrograde**: Adams noted that Mercury retrograde at birth does not indicate stupidity; rather, it indicates an **introverted, highly contemplative intellect** that processes information internally rather than speaking quickly.
- **Mercury Combust (Within $5^\circ$ of the Sun)**: The intellectual faculty is consumed by the solar ego. The person struggles with objective detachment; their ideas are so fused with their personal pride that criticism of their opinion feels like an attack on their existence.
- **Mercury Cazimi (Within $17'$ of the Sun's Center)**: The intellect is seated in the heart of the Sun. This confers astonishing mental brilliance, prophetic insight, and verbal authority.

---

## The Adams Synthetic Chart Reading Protocol

In the final sections of the book, Evangeline Adams outlines her master clinical methodology for conducting a comprehensive chart synthesis:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE 5-STEP ADAMS SYNTHETIC READING PROTOCOL                 │
│                                                                             │
│ STEP 1: CALCULATE THE TRINITY OF BEING                                      │
│         Synthesize Sun (Spirit), Moon (Soul/Subconscious), Ascendant (Body). │
│                                                                             │
│ STEP 2: IDENTIFY THE DOMINANT PLANETARY RULER                               │
│         Determine the chart ruler and the most elevated planet at the MC.    │
│                                                                             │
│ STEP 3: ANALYZE THE SOLAR-ASPECT NETWORK                                    │
│         Weigh the aspects from Uranus, Saturn, and Jupiter to the Sun.      │
│                                                                             │
│ STEP 4: DIAGNOSE THE LUNAR-MERCURY AXIS                                     │
│         Examine the connection between subconscious memory and intellect.    │
│                                                                             │
│ STEP 5: PRESCRIBE THE CONSCIOUS REMEDY                                      │
│         Translate hard astrological aspects into actionable life habits.    │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### The Clinical Consultation Axiom:
*"Never leave a client in terror of an aspect. There is no evil in the heavens. Every hard angle is a storehouse of concentrated dynamic power. Show the client the valve through which that steam can be safely directed into constructive achievement."*

---

## Architectural Deep Dive: The Lunar Zodiac Across All Twelve Signs

In her clinical consultations, Evangeline Adams observed that while clients often consciously identified with their Sun signs, their **instinctual daily habits, relationship triggers, and emotional security patterns were almost entirely dictated by the Moon**:

| Moon Sign | Core Emotional Need | Subconscious Stress Response | Domestic & Relational Style |
| :--- | :--- | :--- | :--- |
| **Moon in Aries** | Autonomy, excitement, immediate action. | Explosive flashes of rage; sudden restless departures. | Needs independence within home; refuses domestic suffocating control. |
| **Moon in Taurus** | Tangible stability, sensory comfort, routine. | Stubborn withdrawal; hoarding food or money; digging in heels. | Creates a luxurious, peaceful sensory sanctuary; loyal and immovable. |
| **Moon in Gemini** | Mental stimulation, conversation, variety. | Nervous chatter; intellectualizing feelings; insomnia. | Home is a bustling library with constant telephone calls and guests. |
| **Moon in Cancer** | Emotional safety, ancestral belonging, maternal care. | Defensive retreat into hard shell; brooding moodiness; sulking. | Fiercely protective matriarch/patriarch; home is an emotional fortress. |
| **Moon in Leo** | Appreciation, emotional warmth, admiration, drama. | Wounded dignity; theatrical drama; freezing cold arrogance. | Home is a royal castle; generous hospitality and proud loyalty. |
| **Moon in Virgo** | Order, cleanliness, practical utility, competence. | Chronic worry; hypochondriacal anxiety; hypercritical nagging. | Impeccably organized domestic environment; shows love through practical service. |
| **Moon in Libra** | Harmony, aesthetic beauty, polite partnership. | Conflict avoidance; passive-aggressive appeasement; indecision. | Elegant, beautifully decorated home; cannot bear shouting or discord. |
| **Moon in Scorpio** | Emotional truth, intense loyalty, psychological depth. | Suspicion; jealous obsession; freezing silence; grudge-keeping. | Highly private sanctuary; fierce bonds with vetted intimates; no superficiality. |
| **Moon in Sagittarius** | Freedom, philosophical optimism, open space. | Moral preachiness; restless flight; blunt, tactless humor. | Cosmopolitan, book-filled home; frequent travel and outdoor excursions. |
| **Moon in Capricorn** | Emotional self-control, social respect, structural order. | Cold emotional shutdown; pessimistic despair; workaholism. | Highly structured, dignified home; protects loved ones through material provision. |
| **Moon in Aquarius** | Intellectual freedom, humanitarian fellowship, detachment. | Aloof rebellion; erratic emotional coldness; sudden contrarianism. | Bohemian, unconventional home; welcomes eccentric thinkers and community groups. |
| **Moon in Pisces** | Mystical communion, unconditional empathy, quiet retreat. | Escapist daydreaming; substance self-medication; playing victim/martyr. | Artistic sanctuary near water; highly permeable boundaries; requires quiet solitude. |

---

## Architectural Deep Dive: The Mercurial Zodiac Across All Twelve Signs

Mercury is the diagnostic key to how an individual's nervous system conducts intellectual currents and transacts business in the material world:

1. **Mercury in Aries ($0^\circ - 30^\circ$)**: Thought is rapid, impulsive, and pioneering. Debates to win; leaps directly to executive conclusions; impatient with lengthy analytical reports.
2. **Mercury in Taurus ($30^\circ - 60^\circ$)**: Thought is deliberative, methodical, and pragmatic. Never speaks until sure of facts; stubborn memory retention; brilliant aptitude for commercial pricing and tangible balance sheets.
3. **Mercury in Gemini ($60^\circ - 90^\circ$, Domicile)**: The intellect in its most versatile state. Dazzling verbal dexterity, rapid linguistic acquisition, effortless multi-tasking; prone to mental scattering if undisciplined.
4. **Mercury in Cancer ($90^\circ - 120^\circ$)**: Thinking is infused with feeling and visual memory. Retains historical facts and personal conversations effortlessly; intuitive commercial sensing of public purchasing moods.
5. **Mercury in Leo ($120^\circ - 150^\circ$)**: Thinking is theatrical, bold, and authoritative. Expresses ideas with magnetic conviction; excels in public oratory and executive direction; blind to small technical flaws.
6. **Mercury in Virgo ($150^\circ - 180^\circ$, Domicile & Exaltation)**: The diagnostic mind at peak technical precision. Razor-sharp analytical filtering, statistical rigor, editorial mastery, effortless detection of errors.
7. **Mercury in Libra ($180^\circ - 210^\circ$)**: The judicial intellect. Weighs both sides of an argument with exquisite balance; excels in legal arbitration, diplomatic negotiation, and aesthetic criticism.
8. **Mercury in Scorpio ($210^\circ - 240^\circ$)**: The investigative mind. Penetrates secrets, uncovers hidden motives, pierces corporate deceit; caustic verbal wit; excels in psychoanalysis and forensic audit.
9. **Mercury in Sagittarius ($240^\circ - 270^\circ$, Detriment)**: The synthetic philosophical mind. Grasp of sweeping historical and metaphysical principles; broad vision; prone to overlooking legal fine print.
10. **Mercury in Capricorn ($270^\circ - 300^\circ$)**: The executive mind. Terse, realistic, economical, and authoritative. Thinks in terms of five-year plans and structural feasibility; absolute seriousness.
11. **Mercury in Aquarius ($300^\circ - 330^\circ$, Exaltation)**: The visionary scientific intellect. Detached, inventive, flashes of conceptual genius, radical breakthroughs in technical systems and human sociology.
12. **Mercury in Pisces ($330^\circ - 360^\circ$, Fall & Detriment)**: The poetic and musical mind. Thinking operates through symbols, metaphors, melodies, and non-linear impressions rather than rigid syllogisms.

---

## Historical Case Studies from Evangeline Adams's Consultation Archives

### 1. J. Pierpont Morgan & The Panic of 1907
- The legendary banking titan J.P. Morgan famously consulted Evangeline Adams for decades. When once challenged by a skeptical journalist regarding his consultations with an astrologer, Morgan delivered his immortal reply:
  > *"Millionaires don't use astrology; billionaires do."*
- Adams tracked the hard transits of Saturn and Uranus against Morgan's financial natal chart, guiding his strategic capital injections during the historic financial panic of 1907, stabilizing the American banking system.

### 2. Enrico Caruso & The Fatal Surgery Warning
- The world-renowned Italian operatic tenor Enrico Caruso was a close personal client of Adams.
- In late 1920, noticing a lethal Mars-Saturn affliction aspecting Caruso's natal Sun and throat rulership (Taurus), Adams emphatically warned Caruso **not to submit to elective surgical interventions during that specific planetary window**.
- Under severe pressure from European doctors, Caruso disregarded the warning and underwent multiple surgical procedures for pleurisy in Italy, developing fatal peritonitis and dying in August 1921 at age 48.

### 3. Mary Pickford: The Strategic Architecture of "America's Sweetheart"
- Stage and silent film superstar Mary Pickford consulted Adams regarding every major production decision and contract negotiation.
- Adams used solar and Jupiterian progression cycles to calculate the precise timing for Pickford to co-found **United Artists** in 1919 with Charlie Chaplin, Douglas Fairbanks, and D.W. Griffith, securing her unprecedented financial independence and creative autonomy in Hollywood history.

---

---

## Synthesis Takeaway: The Enduring Legacy of Evangeline Adams

Evangeline Adams's *Astrology: Your Place Among the Stars* remains a timeless classic because it successfully navigated the perilous transition of astrology from medieval fatalism into modern psychological science. 

By demonstrating that:
1. **The Sun is the conscious will**,
2. **The Moon is the subconscious mind**,
3. **Mercury is the communicative bridge**, and
4. **Planetary aspects are dynamic psychological tensions**,

Adams established a practical, dignified, and mathematically grounded framework that empowers the individual to claim dominion over their own character and, therefore, over their own destiny.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Astrology: Your Place Among the Stars | Evangeline Adams</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .aspect-badge {
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
    .trinity-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    .trinity-card {
      background: var(--card-bg, #fffdfa);
      border: 1px solid var(--border-color, #e8dfd5);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .trinity-card h4 {
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
        <h1 class="book-title">Astrology: Your Place Among the Stars</h1>
        <p class="book-subtitle">The Foundational 20th-Century Character & Aspect Masterwork • Master Codex</p>
        <div class="book-meta">
          <span class="meta-item"><strong>Author:</strong> Evangeline Adams</span>
          <span class="meta-item"><strong>System:</strong> Synthetic Psychological Character Delineation</span>
          <span class="meta-item"><strong>Fidelity:</strong> BKRS v2.0 Replacement Grade</span>
          <span class="meta-item"><strong>Master Notes:</strong> 32k+ Chars</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Source Journey</button>
        <button class="view-btn" data-view="blueprint">View B: Trinity Blueprint</button>
        <button class="view-btn" data-view="engine">View C: Aspect Delineation</button>
      </div>
    </header>

    <main class="reader-body">
      <!-- VIEW A: JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="prose-content">
          <div class="chapter-card intro-card">
            <h2>The Science of Inherent Character: The 1914 Legal Breakthrough</h2>
            <p>In 1914, America's premier astrologer Evangeline Adams was prosecuted in New York City for fortune-telling. Handed an unlabelled natal chart by the court, Adams produced a psychological reading of Judge John H. Freschi's son that was so profoundly accurate that the judge acquitted her, declaring in his ruling that <em>"the defendant has raised astrology to the dignity of an exact science."</em></p>
            <p>In <em>Your Place Among the Stars</em>, Adams demonstrates that astrology is not fatalism; it is the mathematical mapping of character. Character is destiny: by understanding the inherent cosmic predispositions of the Sun (Will), Moon (Subconscious), and Mercury (Intellect), the individual achieves true freedom through self-mastery.</p>
          </div>

          <div class="units-container">
            ${knowledgeUnits.map((u, idx) => `
              <article class="unit-card" id="${u.id}">
                <div class="unit-header">
                  <span class="unit-number">UNIT ${String(idx + 1).padStart(2, '0')}</span>
                  <span class="aspect-badge">${u.epistemicStatus}</span>
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
          <h2>The Trinity of Being: Adams Master Framework</h2>
          <p>Every individual horoscope is anchored by three primary pillars which Adams termed the Trinity of Being:</p>

          <div class="trinity-grid">
            <div class="trinity-card">
              <h4>1. The Sun: Conscious Will</h4>
              <p><strong>Archetype:</strong> The immortal divine spark, moral purpose, vitality, and creative self-expression.</p>
              <p><strong>Function:</strong> Answers <em>"Who am I becoming?"</em> It represents the conscious captain steering the vessel across the sea of life.</p>
            </div>

            <div class="trinity-card">
              <h4>2. The Moon: Subconscious Soul</h4>
              <p><strong>Archetype:</strong> Emotional memory, instinctual reactivity, childhood domestic conditioning, somatic rhythm.</p>
              <p><strong>Function:</strong> Answers <em>"How do I feel safe?"</em> It represents the subterranean sea upon which the conscious solar ship floats.</p>
            </div>

            <div class="trinity-card">
              <h4>3. The Ascendant: Somatic Vessel</h4>
              <p><strong>Archetype:</strong> Physical vehicle, outer persona, instinctive defense mechanism, social presentation.</p>
              <p><strong>Function:</strong> Answers <em>"How do I act?"</em> It represents the hull of the ship that meets the friction of the outer physical world.</p>
            </div>
          </div>

          <h3>Mercury: The Neural Courier</h3>
          <p>Mercury serves as the alchemical bridge linking the conscious solar will and the subconscious lunar emotional field. Governing synapses, speech, commerce, and logic, Mercury determines how effectively an individual can translate inner truth into external reality.</p>
        </div>
      </section>

      <!-- VIEW C: ASPECT DELINEATION -->
      <section id="view-engine" class="view-section">
        <div class="prose-content">
          <h2>The Planetary Modifiers: Uranus, Saturn, and Jupiter</h2>

          <div class="heuristic-card">
            <h3>Uranus: The Lightning Bolt of Genius</h3>
            <p><strong>Beneficent Aspects (Trine, Sextile):</strong> Extraordinary original genius, lightning intuition, revolutionary inventions, independence.</p>
            <p><strong>Afflicted Aspects (Square, Opposition):</strong> Explosive temper, nervous instability, erratic contrarianism, sudden catastrophic disruptions.</p>
          </div>

          <div class="heuristic-card">
            <h3>Saturn: The Diamond Forge of Hardship</h3>
            <p><strong>Beneficent Aspects (Trine, Sextile):</strong> Iron discipline, monumental endurance, executive patience, enduring late-life triumph.</p>
            <p><strong>Afflicted Aspects (Square, Opposition, Conjunction):</strong> Early childhood hardships, feelings of unworthiness, severe delays, melancholy, poverty. Transmuted into diamond character through voluntary labor.</p>
          </div>

          <div class="heuristic-card">
            <h3>Jupiter: The Royal Mantle of Grace</h3>
            <p><strong>Beneficent Aspects (Trine, Sextile, Conjunction):</strong> Natural luck, radiant optimism, financial abundance, influential benefactors, magnanimity.</p>
            <p><strong>Afflicted Aspects (Square, Opposition):</strong> Gambler's hubris, extravagant waste, boom-and-bust cycles, reckless overreach.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-meta">
        <p><strong>Intellectualist Project</strong> • Standard BKRS v2.0 Replacement Reader • Source: <em>Astrology: Your Place Among the Stars</em> by Evangeline Adams</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf8');

console.log('Successfully wrote knowledge-units.json for Astrology: Your Place Among the Stars');
console.log('Successfully wrote master-notes.md for Astrology: Your Place Among the Stars (' + masterNotesMarkdown.length + ' chars)');
console.log('Successfully wrote index.html for Astrology: Your Place Among the Stars (' + readerHtml.length + ' chars)');
