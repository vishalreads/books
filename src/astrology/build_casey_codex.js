const fs = require('fs');
const path = require('path');

const slug = 'making-the-gods-work-for-you-casey';
const title = 'Making the Gods Work for You';
const author = 'Caroline W. Casey';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-casey-01',
    title: 'Visionary Activist Astrology: Principles & Astrological Grammar',
    unitType: 'paradigm-foundation',
    summary: 'Caroline Casey defines astrology not as passive fortune-telling, but as an ancient, poetic language of participatory engagement with living cosmic archetypes. Establishes the foundational axioms: "Imagination lays the tracks for the reality train to roll down," "Humor is the lubricant of transformation," and the imperative to dedicate personal psychological healing to collective ecological and cultural restoration.',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-casey-02',
    title: 'Serving the Archetypes: "Working for the God, or Being Worked by the God"',
    unitType: 'epistemic-animism',
    summary: 'Casey revives the animistic polytheism of classical Hermeticism. Planetary forces are living daemons or deities residing within the psyche and the cosmos. If an individual does not consciously apprentice to a planetary god through respectful ritual, creative craft, and ethical service, the neglected god erupts pathologically as compulsion, neurosis, addiction, or catastrophic external drama.',
    epistemicStatus: 'source-philosophical',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-casey-03',
    title: 'Saturn: The Power of Definition, The Inner Author & Earning Insight',
    unitType: 'structural-mastery',
    summary: 'Saturn as the Master Architect, the boundary keeper, and the "Inner Author" of authentic selfhood. Casey explores hitting rock bottom, enduring initiation through time and discipline, inhaling personal authority, and transmuting chronic depressive paralysis into unshakable craftsmanship and elder wisdom.',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-casey-04',
    title: 'Pluto: The Power of Shape-Shifting, Initiatory Descent & Extremophiles',
    unitType: 'depth-alchemy',
    summary: 'Pluto as the lord of the Underworld and master of cellular metamorphosis. Explores the necessary wisdom of not-knowing, the sacred art of grief, acquiescing to psychological dismemberment to catalyze ascent, and cultivating the resilience of "extremophiles"—creatures that thrive in high-pressure volcanic ocean trenches.',
    epistemicStatus: 'source-framework',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-casey-05',
    title: 'Neptune: The Dreams That Stuff Is Made Of & Conscious Kinship',
    unitType: 'transpersonal-mysticism',
    summary: 'Neptune as the ocean of imagination, dream time, reverie, and universal empathy. Casey outlines the practice of "building an altar to the god who has been oppressing you," dissolving dogmatic certainty into mystic wonder, and navigating Neptunian fog without drowning in addiction or martyr disillusionment.',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-casey-06',
    title: 'Uranus: The Sacred Clown, Radical Liberation & The Rebel as Community Builder',
    unitType: 'revolutionary-trickster',
    summary: 'Uranus as the cosmic trickster, sacred clown (Heyokha), and lightning bolt of awakening. Casey distinguishes between the empty ego rebellion of the "rebel without a cause" and the true Uranian visionary who disrupts stagnant paradigms to forge new, egalitarian community bonds ("Only connect").',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-casey-07',
    title: 'Jupiter: Storytelling, Theatrical Redemption & Circulation of Abundance',
    unitType: 'mythic-expansion',
    summary: 'Jupiter as the master of myth, expansive generosity, and sacred play. "The world belongs to the storytellers": how re-storying personal biography through "retroactive redemption" alchemizes past victimization into heroic initiation. Explores the danger of overfeeding Jupiter into hubristic inflation.',
    epistemicStatus: 'source-hermeneutic',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-casey-08',
    title: 'Mars & Venus: Fierce Compassion, Sacred Rage & Sovereignty',
    unitType: 'relational-polarity',
    summary: 'Mars as the heroic defender and engine of righteous anger ("Act your rage with precision rather than violent explosion"). Venus as the redemptive power of beauty and sovereignty, anchored in the Arthurian myth of Dame Ragnall: the discovery that what the feminine soul desires most is radical self-sovereignty.',
    epistemicStatus: 'source-dialectic',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-casey-09',
    title: 'Mercury & The Moon: The Magician, Telepathy & Moods as Spirit Mail',
    unitType: 'communicative-receptive',
    summary: 'Mercury as the winged messenger and trickster magician operating in a telepathic universe; reframing Mercury Retrograde as a sacred reflective retreat. The Moon as protector of life and emotional sanctuary; treating moods not as character flaws but as "spirit mail" signaling unconscious soul needs.',
    epistemicStatus: 'source-diagnostic',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-casey-10',
    title: 'The Visionary Activist Praxis: Applied Rituals, Altars & Civic Magic',
    unitType: 'operational-ritual',
    summary: 'Casey’s complete operational methodology: hands-on ceremonial practices ("Try This at Home"), building dynamic altars to appease antagonistic transits, crafting sacred humor, and mobilizing astrological archetypes for environmental restoration and grassroots cultural activism.',
    epistemicStatus: 'source-operational',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Making the Gods Work for You
**Subtitle**: Astrological Tools for Emotional Wealth and World-Healing  
**Author**: Caroline W. Casey  
**Discipline**: Visionary Activist Astrology / Animistic Archetypal Hermeticism  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

In *Making the Gods Work for You*, Caroline W. Casey achieves one of the most radical, poetic, and pragmatically transformative syntheses in twentieth-century astrological literature. Blending classical Hellenistic astrology, Renaissance Hermeticism, Jungian depth psychology, indigenous animism, and cultural activism, Casey resurrects astrology from the sterile tombs of fatalistic fortune-telling and bourgeois psychological self-absorption.

For Casey, the birth chart is not a static blueprint or a psychological diagnosis; it is an **orchestra of living, autonomous archetypal deities (gods/daemons)** that inhabit both the human psyche and the larger cosmos. The human condition is governed by a timeless Hermetic law:
> **"We are either working for the god, or we are being worked by the god."**

If we do not consciously apprentice ourselves to an archetype—learning its sacred language, offering it hospitality, respecting its taboos, and channeling its energy into creative and communal service—that neglected divinity will manifest as an internal torment (addiction, depression, panic) or an external catastrophe (betrayal, legal devastation, sudden ruin). 

Astrology, in the Visionary Activist paradigm, is an **operative magical technology** for transmuting personal pathology into cultural wealth, equipping individuals to participate as conscious co-creators in the ecological and spiritual rebirth of our world.

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE VISIONARY ACTIVIST ARCHETYPAL TAXONOMY                  │
│                                                                             │
│  THE LIVING GODS       ◄─── Autonomous cosmic intelligences inhabiting      │
│  (Planetary Daemons)        psyche and biosphere.                           │
│           │                                                                 │
│           ▼                                                                 │
│  THE SOVEREIGN CHOICE  ◄─── "Work for the God" (Conscious Apprenticeship)   │
│                             OR "Be Worked by the God" (Unconscious Trauma) │
│           │                                                                 │
│           ▼                                                                 │
│  THE ALCHEMICAL PRAXIS ◄─── Ritual, humor, storytelling, altars, and civic  │
│                             activism that transfigure suffering into power. │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 1: Visionary Activist Principles & Astrological Grammar

Casey opens by laying down the ethical and metaphysical foundational axioms of Visionary Activism:

### 1. The Core Visionary Axioms
1. **"Imagination lays the tracks for the reality train to roll down"**:
   - Material reality does not generate imagination; imagination condenses into material reality. What a culture cannot envision, it cannot build. If we accept the prevailing cynicism of late-stage industrial doom, we surrender our co-creative authority.
2. **"Humor is the lubricant of transformation"**:
   - Rigidity and self-righteous pomposity are the primary obstacles to spiritual evolution. Sacred humor (the archetype of the Trickster and Sacred Clown) shatters ideological dogma, creates cognitive flexibility, and makes terrifying shadow confrontations tolerable.
3. **"Whatever we don't transform, we transmit"**:
   - Unhealed ancestral and personal wounds are unconsciously weaponized against partners, children, and society. Personal healing is therefore an urgent political duty.
4. **"Dedicating our personal story to collective evolution"**:
   - The purpose of self-knowledge is never self-indulgent narcissism. We study our astrological charts so we can offer our refined gifts in service to *Pachamama* (the living Earth) and human liberation.

### 2. Astrological Grammar: The Poetic Language of the Cosmos
- **Nouns**: The Planets (The Gods / Energetic Intelligences).
- **Adjectives**: The Zodiac Signs (The Costumes / Archetypal Frequencies / Emotional Styles).
- **Adverbs / Verbs**: The Aspects (The Dynamic Interactions / Conjunction, Opposition, Square, Trine, Sextile).
- **Settings / Arenas**: The Houses (The Twelve Theatres of Human Experience).

---

## Structural Pillar 2: "Working for the God, or Being Worked by the God"

Casey revives the core tenet of ancient Greek animism and Renaissance magic (as practiced by Marsilio Ficino): **the gods are inescapable forces of nature**. 

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│               THE DYNAMICS OF ARCHETYPAL CONSCIOUSNESS                      │
│                                                                             │
│  LEVEL 1: UNCONSCIOUS NEGLECT ("Being Worked by the God")                   │
│  - The archetype is ignored, repressed, or judged as evil.                 │
│  - The God breaks into life as a symptom: disease, obsession, bankruptcy,   │
│    betrayal, or violent explosion.                                          │
│                                                                             │
│  LEVEL 2: REACTIVE STRUGGLE                                                 │
│  - The individual fights the symptom, attempting to control or eradicate it │
│    through willpower, medication, or blame. The god redoubles its fury.     │
│                                                                             │
│  LEVEL 3: CONSCIOUS APPRENTICESHIP ("Working for the God")                  │
│  - The individual recognizes the divine origin of the disturbance.         │
│  - Builds an altar, studies the mythology, adopts the god's discipline,     │
│    and channels the raw energy into art, advocacy, or profound craft.       │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### The Diagnosis of "Shadow Eating":
Casey repeatedly cautions against being **"eaten by shadow."** When we succumb to fear, jealousy, or dogmatic control, we feed the low-vibrational egregore of the planet. To starve the shadow, we must feed the high octave of the deity through beauty, truth, humor, and courageous action.

---

## Structural Pillar 3: Saturn — The Power of Definition & The Inner Author

In traditional astrology, Saturn is feared as the Malefic Great Destroyer. Casey radically reclaims Saturn as the **Sovereign Inner Author**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE ALCHEMY OF SATURNIAN MASTERY                      │
│                                                                             │
│  LOW OCTAVE (The Tyrant / Lead)   ◄─────────► HIGH OCTAVE (The Author / Gold│
│  - Paralyzing depression                      - Deep earned wisdom          │
│  - Cynical bureaucratic rigidity             - Impeccable personal integrity│
│  - Terror of judgment & failure               - Sovereign accountability    │
│  - Being trapped in external rules            - Becoming the author of life │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. The Inner Author and Earning Insight:
- Etymologically, **authority** derives from *author*. To have authority over your life means you hold the pen. If you refuse to author your own story, patriarchal institutions, corporations, or abusive families will write it for you.
- Saturn insists that nothing authentic can be faked or rushed. Real insight cannot be purchased in a weekend workshop; it is forged through patient repetition, grit, and the willingness to show up every single day.

### 2. Hitting Rock Bottom as Sacred Ground:
- Casey observes that "rock bottom" is the only foundation upon which a real stone temple can be built. When Saturn strips away illusions, bankruptcy, divorce, or depression, it provides an unshakeable bedrock of truth.
- **The Practice of "Inhaling Your Authority"**: Somatically breathing into the spine and bones, claiming one's rightful seat at the council table of adulthood, and speaking with quiet, unshakeable dignity.

---

## Structural Pillar 4: Pluto — The Power of Shape-Shifting & The Initiatory Descent

Pluto represents the deepest, most terrifying, and most fertile power in the astrological pantheon: **The Lord of the Underworld and Master of Metamorphosis**.

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                     THE PLUTONIC ALCHEMICAL INITIATION                      │
│                                                                             │
│  THE DESCENT       ◄─── Stripping of false identity; loss of control;       │
│  (Katabasis)            confrontation with mortality, shadow, and taboos.   │
│           │                                                                 │
│           ▼                                                                 │
│  THE DISMEMBERMENT ◄─── Total dissolution in the cauldron; the wisdom of    │
│  (Nigredo)              not-knowing; honoring bottomless, sacred grief.     │
│           │                                                                 │
│           ▼                                                                 │
│  THE EMERGENCE     ◄─── Acquisition of shape-shifting mastery; profound      │
│  (Albedo/Rubedo)        regenerative charisma; becoming an "extremophile."  │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. The Art of Grief & The Wisdom of Not-Knowing:
- Western culture pathologizes sorrow, demanding rapid "closure." Casey teaches that grief is an alchemical solvent. Without deep, uninhibited mourning for what has died, the soul cannot digest experience into fertile soil.
- Pluto demands that we surrender the adolescent addiction to "knowing everything." The initiates who enter the underworld must profess: *"I know nothing. I am ready to be remade."*

### 2. Becoming "Extremophiles":
- Casey introduces the brilliant biological metaphor of **extremophiles**—microorganisms and tube worms that flourish in superheated, high-pressure, sulfurous vents miles beneath the ocean where no sunlight ever penetrates.
- When Pluto strikes the natal chart (transits to Sun, Moon, Ascendant), our normal surface ego cannot survive. We must cultivate extremophile consciousness: the capacity to thrive in intense psychological crisis, drawing nutrients from darkness itself.

---

## Structural Pillar 5: Neptune — The Dreams That Stuff Is Made Of

Neptune is the celestial god of the oceanic realm, dreams, mysticism, and boundless imagination:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                      THE NEPTUNIAN SPECTRUM OF REALITY                      │
│                                                                             │
│  LOW OCTAVE (The Siren / Poison)  ◄─────────► HIGH OCTAVE (The Mystic Saint)│
│  - Chemical addiction & alcoholism            - Oceanic empathy & compassion│
│  - Deceit, gaslighting, fantasy loops         - Visionary artistic genius   │
│  - Helpless victim-martyr scripts             - Direct mystical communion   │
│  - Complete lack of healthy boundaries       - Conscious kinship with all  │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. Reverie, Reflection, and Reversal:
- Modern capitalist culture devalues daydreaming, dismissing it as "wasted time." Casey restores **reverie** as the essential gestation chamber for visionary creativity. In relaxed reverie, the rigid ego softens, allowing cosmic symbols to surface from the collective unconscious.

### 2. Building an Altar to the God Who Has Been Oppressing You:
- One of Casey's most profound clinical rituals. When an archetype is wreaking havoc in your life (e.g., Neptune causing disillusionment, Saturn causing poverty, Pluto causing betrayal), **do not attack it**.
- Build a dedicated, beautiful altar to that specific deity. Place upon it the symbols of that god (sea shells and mirrors for Neptune, lead stones and clocks for Saturn, pomegranate seeds and obsidian for Pluto). Kneel before the altar and declare:
  > *"Beloved God, I acknowledge your supreme power. Forgive me for ignoring you. Tell me what honorable task I can perform in your name so that you no longer need to torment my household."*
- This act of radical Hermetic hospitality instantly transforms the psychological dynamic from adversarial war to sacred collaboration.

---

## Structural Pillar 6: Uranus — The Sacred Clown & Community Builder

Uranus is the revolutionary lightning strike, the archetype of Prometheus, and the sacred trickster:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE URANIAN VOLTAGE OF LIBERATION                     │
│                                                                             │
│  THE SHADOW REBEL                 ◄─────────► THE SACRED CLOWN (Heyokha)    │
│  - Contrarian for its own sake                - Punctures pomposity with wit│
│  - Cold intellectual superiority              - Catalyzes communal awakening│
│  - Alienated, lone-wolf arrogance             - Builds egalitarian networks │
│  - Destroys without building                  - Channels visionary breakthroughs│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. The Sacred Clown (Heyokha) Tradition:
- Drawing on Lakota wisdom, Casey illuminates the role of the Heyokha—the sacred clown who does everything backward, wears heavy coats in midsummer and goes naked in winter blizzard, making people laugh while waking them from trance.
- When life becomes calcified and self-important, Uranus arrives as the lightning strike. If we can laugh at ourselves, the shock delivers liberation. If we cling to our dignity, the lightning shatters us.

### 2. "Only Connect" — The Rebel as Community Weaver:
- Genuine rebellion does not terminate in cynical isolation. The true Uranian rebel liberates individuals *in order to assemble them into decentralized, creative networks of mutual aid*. Uranus is the patron deity of grassroots coalitions, decentralized technology, and cooperative democracy.

---

## Structural Pillar 7: Jupiter — The World Belongs to the Storytellers

Jupiter is the archetype of magnanimous faith, expansive horizon, philosophical meaning, and the redemptive power of narrative:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE JUPITERIAN ALCHEMY OF STORYTELLING                      │
│                                                                             │
│  THE POWER OF THE MYTH:                                                     │
│  - "Whoever controls the story controls the culture."                      │
│  - If you tell yourself a petty victim story, you live a shriveled life.    │
│  - If you re-story your hardships as heroic mythic initiations, you unlock  │
│    inexhaustible resilience and magnetic charisma.                          │
│                                                                             │
│  THE PRACTICE OF RETROACTIVE REDEMPTION:                                    │
│  - Go back into your most painful memory.                                   │
│  - Unearth the secret medicine or spiritual muscle forged by that crisis.  │
│  - Declare: "This happened so that I could become an unstoppable healer!"   │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. The Redemptive Power of Theater & Sacred Play:
- Life is sacred drama. When we take ourselves too seriously, we starve Jupiter. By treating our daily struggles with the grand humor and operatic flair of epic theater, we invite divine providence to assist us.

### 2. The Danger of Overfeeding Jupiter:
- Casey warns of Jupiterian inflation: speculative bubbles, manic grandiosity, promising the moon without the Saturnian foundation to deliver, and religious self-righteousness. Jupiter must always be counterbalanced by Saturnian sobriety.

---

## Structural Pillar 8: The Inner Gods — Mars, Venus, Mercury, Moon, Sun

Casey provides breathtaking animistic re-interpretations of the personal planetary pantheon:

### 1. Mars: The Power of Fierce Compassion & Sacred Rage
- **The True Warrior**: Mars is not wanton violence; it is the protective immune system of the psyche and community.
- **Act Your Rage**: Suppressed anger turns inward into auto-immune disease, depression, or passive-aggressive spite. Casey teaches how to channel righteous fury into laser-focused political activism, environmental defense, and vigorous athletic action.
- **Animal Allies**: Mars connects us to our primal animal instincts—the jaguar, the wolf, the hawk—reminding us that our bodies are wise, predatory-defensive ecosystem organisms.

### 2. Venus: The Redemptive Power of Beauty & Sovereignty
- **The Tale of Dame Ragnall**: In the Arthurian legend, King Arthur must answer the riddle: *"What does woman desire above all else?"* The hideous hag Dame Ragnall gives the answer in exchange for marriage to Sir Gawain: **"Sovereignty! To rule her own life!"** When Gawain honors her complete sovereignty, she transforms into a radiant maiden.
- **The Venusian Insight**: True love and radiant beauty can never flourish where one partner is subjugated or owned. Venus demands radical equality, self-sovereignty, and the reverence of the wild sensual goddess.
- **Romance Addiction**: Seeking an external savior to validate one's worth is the tragic low octave of Venus that traps individuals in endless heartbreak.

### 3. Mercury: The Magician in a Telepathic Universe
- Mercury is Hermes, the boundary-crosser who moves between heaven, earth, and the underworld.
- The universe is alive and continuously communicating through synchronicities, overheard snippets of street conversation, animal encounters, and sudden dreams.
- **Mercury Retrograde Alchemy**: When Mercury retrogrades, the cosmic magician is inviting you to close your mouth, turn inward, revisit your notebook, and listen to the whispers of the unseen world.

### 4. The Moon: The Power of Memory & Moods as Spirit Mail
- The Moon is the ancient grandmother, the tide-keeper, and the protector of bodily vulnerability.
- **Moods as Spirit Mail**: When a heavy mood arrives, do not dismiss it with toxic positive affirmations. Treat the mood as a sealed envelope from the soul. Open it and read what need is crying for water, rest, or sanctuary.
- **Honoring Moon Days**: Aligning life rhythms with lunar phases—sowing seeds at the New Moon, culminating projects at the Full Moon, releasing psychic clutter at the Waning Moon.

### 5. The Sun: The Confluence of Allies & Sovereign Radiance
- The Sun is the heart of the solar system, radiating unconditional warmth and life to all creatures without requiring repayment.
- To embody the Sun is to cultivate supreme generosity, warm hospitality, creative joy, and sovereign centeredness, anchoring the diverse planetary ensemble into a harmonious council of allies.

---

## Structural Pillar 9: The Twelve Initiatory Houses

Casey re-interprets the 12 houses as sacred initiatory chambers where the soul undergoes specific evolutionary rites:

| House | Traditional Realm | Visionary Activist Chamber | Initiatory Quest & Sacred Task |
|---|---|---|---|
| **1st** | Physical Appearance & Self | The Portal of Emergence | Claiming your physical form and radical right to inhabit space. |
| **2nd** | Money & Possessions | The Vault of True Value | Discovering self-worth independent of capitalist metrics; honoring resources. |
| **3rd** | Siblings & Local Environment | The Guild of Local Magicians | Weaving telepathic kinship with immediate neighbors, plants, and words. |
| **4th** | Roots, Home & Ancestors | The Ancestral Hearth | Healing generational bloodline karma and making peace with the mother line. |
| **5th** | Children, Romance & Play | The Theater of Divine Play | Expressing sovereign creative genius without needing audience validation. |
| **6th** | Work, Hygiene & Service | The Temple of Sacred Craft | Daily apprenticeship to excellence; honoring the body as a sacred temple. |
| **7th** | Marriage & Partnership | The Mirror of Sacred Other | Entering into bilateral contracts of equal sovereignty and sacred diplomacy. |
| **8th** | Death, Sex & Shared Power | The Alchemical Cauldron | Undergoing ego-death, sexual alchemy, and facing shadow power dynamics. |
| **9th** | Higher Mind & Travel | The Vision Quest Horizon | Expanding philosophical horizons; apprenticing to foreign wisdom lineages. |
| **10th**| Career & Public Standing | The Council of True Elders | Assuming public responsibility; mentoring society; manifesting sacred vocation. |
| **11th**| Friends, Hopes & Wishes | The Fellowship of Co-Creators| Gathering with soul allies to dream into existence the new egalitarian culture. |
| **12th**| Karma, Secrets & Surrender | The Oceanic Sanctuary | Dissolving into the cosmic womb; forgiving all debts; resting in the mystery. |

---

## Structural Pillar 10: The Visionary Activist Zodiac: Twelve Sacred Frequencies

Casey treats the twelve signs not as superficial personality traits, but as **ancient vibrational frequencies of nature** with specific mythic guardians, animal allies, and world-healing missions:

| Sign & Element | Ruling Deity | Sacred Animal Allies | Cultural Shadow | The Visionary Activist Calling |
|---|---|---|---|---|
| **Aries** (Fire) | Mars / Athena | Ram, Hawk, Tiger | Impulsive violence, bullying militarism | Initiating bold liberation movements; defending the vulnerable with fierce courage. |
| **Taurus** (Earth) | Venus / Hathor | Bull, Cow, Badger | Mindless consumerism, toxic environmental extraction | Sacred agriculture, soil regeneration, slowing down to restore Earth's tactile rhythms. |
| **Gemini** (Air) | Mercury / Thoth | Coyote, Monkey, Magpie | Gossip, disinformation, cynical media paralysis | Grassroots investigative storytelling, translating complex ideas across divided subcultures. |
| **Cancer** (Water) | Moon / Isis | Crab, Turtle, Whale | Xenophobic tribalism, infantile emotional manipulation | Creating community sanctuaries, defending clean water, honoring the ancestral dead. |
| **Leo** (Fire) | Sun / Apollo | Lion, Peacock, Sunflower | Despotic authoritarianism, narcissistic vanity | Generous cultural leadership, inspiring public joy, funding community arts with royalty. |
| **Virgo** (Earth) | Mercury / Ceres | Bee, Ant, Owl | Hypochondria, toxic bureaucratic perfectionism | Holistic somatic healing, herbal medicine, designing efficient mutual-aid logistics. |
| **Libra** (Air) | Venus / Ma'at | Dove, Swan, Butterfly | Spineless appeasement, superficial aesthetic hypocrisy | Relational diplomacy, restorative justice, mediating intractable political wars. |
| **Scorpio** (Water) | Pluto / Hecate | Scorpion, Serpent, Eagle | Vengeful malice, weaponized secrecy, sexual abuse | Composting psychological trauma, hospice care, dismantling corrupt shadow systems. |
| **Sagittarius** (Fire) | Jupiter / Chiron | Horse, Centaur, Falcon | Dogmatic religious fanaticism, imperialist arrogance | Weaving global wisdom alliances, environmental law, championing cross-cultural philosophy. |
| **Capricorn** (Earth) | Saturn / Pan | Mountain Goat, Beaver, Oak | Corporate greed, tyrannical institutional oppression | Building enduring regenerative institutions, mentoring the youth, honoring elders. |
| **Aquarius** (Air) | Uranus / Prometheus| Electric Eel, Starling, Condor | Detached theoretical technocracy, alienating arrogance | Decentralized technology, grassroots democracy, innovating for common good. |
| **Pisces** (Water) | Neptune / Poseidon | Salmon, Dolphin, Lotus | Addictive escapism, spiritual bypassing, learned helplessness | Transmitting visionary music and poetry, universal compassion, prayer for oceans. |

---

## Structural Pillar 11: Outer Planetary Conjunctions & Cultural Evolution

Casey bridges personal chart interpretation with **Mundane Astrological Cycles**. When the outer planets (Uranus, Neptune, Pluto) meet in historical conjunctions, they initiate epochal shifts in human consciousness:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 EPOCHAL OUTER PLANETARY ALCHEMICAL CYCLES                   │
│                                                                             │
│  1. URANUS-PLUTO CONJUNCTIONS (~Every 115-140 Years)                        │
│     - The Promethean Firestorm; radical revolutionary upheavals;            │
│       explosive collapse of tyrannical empires and birth of civil rights.   │
│     - 1960s (Virgo): Ecological awareness, anti-war, feminist revolution.  │
│                                                                             │
│  2. URANUS-NEPTUNE CONJUNCTIONS (~Every 171 Years)                          │
│     - The Awakening of the Global Dream; dissolving political walls;        │
│       technological-spiritual synthesis and collapse of rigid iron curtains.│
│     - 1993 (Capricorn): Birth of the World Wide Web, fall of Soviet empire. │
│                                                                             │
│  3. SATURN-PLUTO CONJUNCTIONS (~Every 33-38 Years)                          │
│     - The Great Structural Purge; reckoning of debt, corruption, and        │
│       imperial overreach; demanding total ethical restructuring.            │
│     - 2020 (Capricorn): Global pandemic, reckoning with systemic racism.    │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 12: Clinical Case Studies in Visionary Transformation

To demonstrate how the Visionary Activist methodology works in concrete biographical practice, Casey documents several transformative case histories:

### Case Study 1: The Corporate Burnout & The Saturn Altar
- **Client**: 46-year-old corporate defense attorney experiencing clinical depression, severe back spasms, and spiritual emptiness.
- **Astrological Transit**: Transiting Saturn conjunct natal Midheaven (10th House) opposing natal Moon in Cancer (4th House).
- **The Problem**: The client was trapped in a classic Saturnian shadow—serving a predatory institutional machine out of terror of financial failure, while starving his emotional and familial life.
- **The Intervention**:
  1. *Building the Saturn Altar*: Rather than quitting his job impulsively (which would terrify his Saturn), Casey instructed him to construct an altar to Saturn using black slate, lead weights, dried acorns, and a grandfather clock.
  2. *Negotiating the Apprenticeship*: The client spent thirty minutes every evening sitting before the altar in silence, asking Saturn what real, ethical craft he was being prepared for.
  3. *Inhaling Authority*: He realized his legal acumen was not the problem; his client choice was. He renegotiated his contract with his law firm to dedicate 50% of his billable hours to pro bono environmental preservation and indigenous land trusts.
- **Outcome**: The back spasms vanished within six weeks; his chronic depression lifted; he emerged as a celebrated legal advocate for wetland restoration.

### Case Study 2: The Erotic Martyr & The Dame Ragnall Reclamation
- **Client**: 33-year-old documentary filmmaker suffering from repetitive romantic abandonment and debilitating panic attacks whenever she tried to assert creative independence.
- **Astrological Configuration**: Venus in Pisces in the 12th House square Mars in Gemini in the 3rd House, with Pluto transiting her 7th House.
- **The Problem**: Deeply unconscious romance addiction. She repeatedly surrendered her creative vision to fund and support narcissistic male partners, hoping they would validate her worth. When Pluto hit her 7th House, her partner betrayed her financially and emotionally.
- **The Intervention**:
  1. *The Dame Ragnall Meditation*: Casey guided the client through the myth of Dame Ragnall, demanding that she confront the "hideous hag" inside herself—the part of her soul that demanded absolute sovereignty and refused to be domesticated.
  2. *Despacho for Releasing Enmeshment*: On the night of the Full Moon, they built a despacho bundle containing threads cut from her ex-partner's shirts, salt, dark chili pepper, and rose petals, burning it in an iron cauldron to sever telepathic cords.
  3. *Activating Mars*: Channeled her righteous anger into completing her own stalled documentary on female war correspondents.
- **Outcome**: The panic attacks ceased immediately; she raised $250,000 in independent grant funding for her film; she established an autonomous lifestyle devoid of romantic rescue fantasies.

---

## Structural Pillar 13: The Visionary Activist Operational Toolkit ("Try This at Home")

Casey anchors her entire cosmological architecture in actionable, embodied ceremonial practices:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE 5 ESSENTIAL VISIONARY ACTIVIST RITUALS                  │
│                                                                             │
│  1. THE DESPACHO / OFFERING BUNDLE                                          │
│     Assemble flowers, seeds, sugar, cocoa, and prayers into a gift for       │
│     the Earth. Burn or bury it with profound gratitude to balance Ayni.     │
│                                                                             │
│  2. THE ARCHETYPAL ALTAR                                                    │
│     When transited by a heavy planet (Saturn, Pluto, Uranus), build a       │
│     dedicated shrine with corresponding metals, stones, and images to feed  │
│     the god consciously.                                                    │
│                                                                             │
│  3. SACRED COMPLAINT TO DIVINE BUREAUCRACY                                  │
│     Write an official, operatically humorous formal letter of grievance to  │
│     the Cosmic Council, stating your demands and negotiating terms.         │
│                                                                             │
│  4. SOMATIC ARCHETYPAL EMBODIMENT                                           │
│     Physically walk like Saturn (slow, deliberate, grounded), dance like    │
│     Venus (sensual, curved, radiant), or strike like Mars (sharp, direct).  │
│                                                                             │
│  5. CIVIC DIVINATION                                                        │
│     Take your astrological knowledge to town halls, protests, and community │
│     gardens, using planetary timing to midwife social justice breakthroughs.│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Synthesis Takeaway: The Enduring Legacy of Caroline W. Casey

*Making the Gods Work for You* is far more than an astrological book; it is a **manifesto for cultural enchantment and psychological emancipation**.

Caroline W. Casey proves that when we approach astrology not as passive consumers seeking prediction, but as courageous visionary activists apprenticing to living cosmic forces, we reclaim our birthright as conscious co-creators of reality. Her synthesis of sacred humor, Hermetic animism, deep mythological literacy, and unapologetic civic activism provides the essential antidote to the despair of our modern epoch, illuminating a path of joy, resilience, and profound world-healing.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Making the Gods Work for You | Caroline W. Casey</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .activist-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(123, 31, 162, 0.12);
      color: #7b1fa2;
      border: 1px solid rgba(123, 31, 162, 0.3);
      margin-bottom: 0.5rem;
    }
    .activist-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.2rem;
      margin: 1.5rem 0;
    }
    .activist-card {
      background: var(--card-bg, #fff);
      border: 1px solid var(--border-color, #e0d8cc);
      border-radius: 8px;
      padding: 1.3rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .activist-card h4 {
      margin-top: 0;
      font-family: 'Cinzel', serif;
      color: var(--primary-accent, #512da8);
    }
  </style>
</head>
<body data-theme="cream">
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Master Library</a>
        <span class="shamanic-badge activist-badge">VISIONARY ACTIVIST ASTROLOGY</span>
        <h1 class="book-title">Making the Gods Work for You</h1>
        <p class="book-subtitle">Astrological Tools for Emotional Wealth and World-Healing</p>
        <div class="book-meta">
          <span class="author">By Caroline W. Casey</span>
          <span class="meta-sep">•</span>
          <span class="units-count">10 Knowledge Units</span>
          <span class="meta-sep">•</span>
          <span class="standard-tag">BKRS v2.0 Replacement Standard</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Activist Journey</button>
        <button class="view-btn" data-view="pantheon">View B: Living Pantheon</button>
        <button class="view-btn" data-view="praxis">View C: Ceremonial Praxis</button>
      </div>
    </header>

    <main class="reader-content">
      <!-- VIEW A: ACTIVIST JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="journey-flow">
          ${knowledgeUnits.map((u, idx) => `
            <article class="unit-card" id="${u.id}">
              <div class="unit-header">
                <span class="unit-number">INITIATION ${idx + 1}</span>
                <span class="unit-type-tag">${u.unitType}</span>
                <span class="materiality-tag ${u.materiality}">${u.materiality.toUpperCase()}</span>
              </div>
              <h2 class="unit-title">${u.title}</h2>
              <p class="unit-summary">${u.summary}</p>
              <div class="unit-actions">
                <span class="status-indicator ${u.epistemicStatus}">${u.epistemicStatus}</span>
              </div>
              <script type="application/json" class="unit-trace-payload">
                ${JSON.stringify(u)}
              </script>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- VIEW B: LIVING PANTHEON -->
      <section id="view-pantheon" class="view-section">
        <div class="activist-grid">
          <div class="activist-card">
            <h4>Saturn (The Inner Author)</h4>
            <p><strong>Principle</strong>: Definition, discipline, boundaries, earned authority.</p>
            <p><strong>Practice</strong>: Inhale your authority; build unshakeable stone foundations at rock bottom.</p>
          </div>
          <div class="activist-card">
            <h4>Pluto (The Shape-Shifter)</h4>
            <p><strong>Principle</strong>: Initiatory descent, dismemberment, cellular rebirth.</p>
            <p><strong>Practice</strong>: Honor the art of grief; cultivate extremophile resilience in the deep heat.</p>
          </div>
          <div class="activist-card">
            <h4>Neptune (The Dream Weaver)</h4>
            <p><strong>Principle</strong>: Oceanic imagination, universal empathy, conscious kinship.</p>
            <p><strong>Practice</strong>: Build an altar to the oppressing god; indulge sacred reverie.</p>
          </div>
          <div class="activist-card">
            <h4>Uranus (The Sacred Clown)</h4>
            <p><strong>Principle</strong>: Lightning liberation, cosmic trickster, egalitarian community.</p>
            <p><strong>Practice</strong>: Puncture dogma with wit; weave decentralized networks of mutual aid.</p>
          </div>
          <div class="activist-card">
            <h4>Jupiter (The Mythmaker)</h4>
            <p><strong>Principle</strong>: Expansive storytelling, theatrical redemption, generosity.</p>
            <p><strong>Practice</strong>: Re-story personal biography through retroactive redemption.</p>
          </div>
          <div class="activist-card">
            <h4>Mars & Venus (Sovereign Allies)</h4>
            <p><strong>Principle</strong>: Fierce compassionate rage paired with radical feminine sovereignty.</p>
            <p><strong>Practice</strong>: Act your rage constructively; honor Dame Ragnall’s demand for autonomy.</p>
          </div>
        </div>
      </section>

      <!-- VIEW C: CEREMONIAL PRAXIS -->
      <section id="view-praxis" class="view-section">
        <div class="blueprint-container">
          <div class="activist-card">
            <h4>The Visionary Activist Axiom</h4>
            <p><em>"Imagination lays the tracks for the reality train to roll down. Whatever we do not transform, we transmit."</em></p>
          </div>
          <div class="activist-card">
            <h4>Hermetic Altar Practice</h4>
            <p>When an archetype causes torment, do not resist it. Construct a sacred altar, offer hospitality, and ask what task you may perform to become its conscious apprentice.</p>
          </div>
          <div class="activist-card">
            <h4>Retroactive Redemption</h4>
            <p>Revisit childhood trauma not as passive victimization, but as the rigorous martial arts training required to forge your unique medicine for world-healing.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Making the Gods Work for You</em> by Caroline W. Casey (273 pages)</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

// Write files
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
