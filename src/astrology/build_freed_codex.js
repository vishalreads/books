const fs = require('fs');
const path = require('path');

const slug = 'use-your-planets-wisely-freed';
const title = 'Use Your Planets Wisely';
const author = 'Dr. Jennifer Freed';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-freed-01',
    title: 'The New Paradigm: Psychological Astrology & Evolutionary Triads',
    unitType: 'paradigm-foundation',
    summary: 'Dr. Jennifer Freed establishes a modern psychological paradigm integrating family systems therapy, neuroscience, and mindfulness with astrology. Overturns fatalism by introducing the Three Evolutionary Levels: Primitive (reactive/unconscious), Adaptive (functional/conventional), and Evolving (conscious/service-oriented).',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-freed-02',
    title: 'The Sun (The Taproot): Ego Vitality & Authentic Self-Actualization',
    unitType: 'archetypal-somatic',
    summary: 'The Sun as the central taproot organizing the multifaceted personality. Maps the journey from Primitive Sun (narcissistic vanity or paralyzed self-doubt) through Adaptive Sun (reliable social competence) to Evolving Sun (radiant, generous creative sovereignty that empowers others).',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-freed-03',
    title: 'The Moon (The Tides): Emotional Regulation & Family Conditioning',
    unitType: 'depth-somatic',
    summary: 'The Moon as the ocean tides of emotional longing and subconscious defense mechanisms. Unpacks family-of-origin conditioning and details how to shift from Primitive Moon (mood swings, codependent manipulation) to Evolving Moon (somatic emotional intelligence, secure self-soothing, and fierce empathy).',
    epistemicStatus: 'source-framework',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-freed-04',
    title: 'The Ascendant (The Window): Reframing the Mask into a Perceptive Lens',
    unitType: 'relational-identity',
    summary: 'Radically reframes the traditional "mask" into an architectural "window" through which we view reality and through which others perceive us. Traces the Ascendant’s origins in family system roles and provides diagnostics for cleaning the window to achieve transparent authenticity.',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-freed-05',
    title: 'Mercury (The Wind): Cognitive Habits, Thought Loops & Mindful Speech',
    unitType: 'cognitive-linguistic',
    summary: 'Mercury as the intellectual wind that shapes our mental climate. Explores the neurobiology of thought loops, active listening, and the gifts of Mercury Retrograde. Traces the evolution from Primitive Mercury (destructive gossip, deceit, anxiety) to Evolving Mercury (compassionate, precise, illuminating truth).',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-freed-06',
    title: 'Venus & Mars: The Garden & The Bonfire (Relational Harmony & Assertion)',
    unitType: 'relational-polarity',
    summary: 'Venus as the cultivated garden of self-worth and relational intimacy; Mars as the focused bonfire of healthy will, boundaries, and sacred anger. Details how to integrate relational vulnerability with firm personal boundaries, avoiding the toxic traps of appeasement or violent explosion.',
    epistemicStatus: 'source-dialectic',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-freed-07',
    title: 'Jupiter & Saturn: The Mountain Lake & The Mountain (Expansion & Structure)',
    unitType: 'developmental-social',
    summary: 'Jupiter as the expansive mountain lake of faith, wisdom, and optimism; Saturn as the enduring granite mountain of discipline, integrity, and time. Explores balancing ambitious expansion with rigorous structural scaffolding, transforming depressive dread into elder authority.',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-freed-08',
    title: 'The Transpersonal Transformers: Uranus, Neptune & Pluto',
    unitType: 'transpersonal-alchemy',
    summary: 'The Lightning (Uranus: radical authenticity), The Mist (Neptune: spiritual mysticism & creative surrender), and The Magma (Pluto: shadow excavation & primal regeneration). Provides psychological safeguards against transpersonal traps: erratic rebellion, addictive escapism, and manipulative paranoia.',
    epistemicStatus: 'source-framework',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-freed-09',
    title: 'The Diagnostic Behavioral Matrices: Auditing Your Evolutionary Octave',
    unitType: 'diagnostic-matrix',
    summary: 'An exhaustive psychological diagnostic framework providing clear behavioral checklists, somatic markers, and self-assessment criteria across all eleven planetary placements to identify exactly where an individual is operating at Primitive, Adaptive, or Evolving octaves.',
    epistemicStatus: 'source-diagnostic',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-freed-10',
    title: 'The Clinical Transformation Protocol: Somatic Exercises & Daily Praxis',
    unitType: 'therapeutic-praxis',
    summary: 'Dr. Freed’s actionable therapeutic toolkit for elevating psychological functioning: somatic breathwork, cognitive reframing, communicative non-violent dialogue, relational contracts, and clinical case studies demonstrating sustained life transformations.',
    epistemicStatus: 'source-operational',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Use Your Planets Wisely
**Subtitle**: Master Your Ultimate Cosmic Potential with Psychological Astrology  
**Author**: Dr. Jennifer Freed, Ph.D.  
**Discipline**: Depth Psychological Astrology / Somatic & Family Systems Synthesis  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

In *Use Your Planets Wisely*, psychotherapist and master astrologer Dr. Jennifer Freed bridges modern psychological science—specifically **family systems theory, cognitive behavioral therapy, interpersonal neurobiology, and somatic mindfulness**—with archetypal astrological wisdom. 

Dr. Freed dismantles the fatalistic, deterministic caricatures that have plagued popular astrology. In her clinical paradigm, your birth chart does not dictate what will happen to you, nor does it assign you a rigid, unalterable personality. Instead, **the horoscope is a psychological map of energetic potentials, each of which can be expressed at three distinct developmental octaves**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE THREE EVOLUTIONARY LEVELS OF CONSCIOUSNESS              │
│                                                                             │
│  LEVEL 1: PRIMITIVE (The Reactive Shadow)                                   │
│  - Driven by unexamined childhood trauma, defense mechanisms, and fear.     │
│  - Reactive, narcissistic, blaming, codependent, or destructive.            │
│                                                                             │
│  LEVEL 2: ADAPTIVE (The Conventional Mask)                                  │
│  - Socially functional, polite, cooperative, managing symptoms.             │
│  - Capable of following rules, but lacking deeper creative authenticity     │
│    and courage; vulnerable to silent burnout and quiet desperation.         │
│                                                                             │
│  LEVEL 3: EVOLVING (The Self-Actualized Master)                             │
│  - Conscious, emotionally regulated, accountable, service-oriented.         │
│  - Transmutes suffering into wisdom; embodies radiant personal power in     │
│    service of collective flourishing and deep intimacy.                     │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

By providing elemental, somatic metaphors for each celestial body—transforming abstract planetary glyphs into living natural forces such as *The Taproot, The Tides, The Wind, The Garden, and The Bonfire*—Dr. Freed delivers a clinically rigorous, profoundly practical curriculum for emotional intelligence, relational intimacy, and psychological wholeness.

---

## Structural Pillar 1: The New Paradigm of Psychological Astrology

Dr. Freed establishes that astrological insight without psychological accountability is dangerous. When someone excuses bad behavior by declaring, *"I'm a Scorpio, so I'm naturally vengeful,"* or *"My Mercury is in Pisces, so I can't help being chronically late,"* they are using astrology to justify **Primitive-level dysfunction**.

### The Core Axioms of the Freed Framework:
1. **You Are Not Your Chart; You Are the Consciousness Operating Your Chart**:
   - The planets represent raw psychological drives and instinctual archetypes. How you direct that energy is the domain of your conscious will and emotional maturity.
2. **Every Trait Has an Evolutionary Continuum**:
   - No placement is inherently "bad" or "good." A difficult square or a planet in detriment is simply an area requiring greater psychological discipline and conscious cultivation.
3. **The Body Is the Archetype's Anchor**:
   - Planetary energies are somatic. Anxiety lives in the lungs and nervous system (Mercury); rage and assertiveness live in the blood and musculature (Mars); emotional vulnerability lives in the gut and chest (Moon). True transformation must be felt and embodied somatically, not merely analyzed intellectually.
4. **Relational Reciprocity Over Narcissistic Entitlement**:
   - The ultimate benchmark of psychological evolution is your capacity to love, listen, collaborate, and contribute to the well-being of others without abandoning your own sovereign boundaries.

---

## Structural Pillar 2: The Core Psychological Archetypes & Somatic Metaphors

Dr. Freed organizes the astrological chart into eleven foundational psychological dimensions, assigning each a vivid, nature-based somatic metaphor:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│               THE FREED SOMATIC ARCHETYPAL ARCHITECTURE                     │
│                                                                             │
│  1. THE SUN        ◄─── THE TAPROOT (Core Ego, Self-Actualization, Vitality)│
│  2. THE MOON       ◄─── THE TIDES (Emotional Needs, Intuition, Inner Child) │
│  3. ASCENDANT      ◄─── THE WINDOW (Perceptual Lens, Family System Role)    │
│  4. MERCURY        ◄─── THE WIND (Thought Loops, Cognitive Style, Voice)    │
│  5. VENUS          ◄─── THE GARDEN (Relational Values, Beauty, Self-Worth)  │
│  6. MARS           ◄─── THE BONFIRE (Willpower, Drive, Healthy Assertion)   │
│  7. JUPITER        ◄─── THE MOUNTAIN LAKE (Optimism, Faith, Wisdom, Scope)  │
│  8. SATURN         ◄─── THE MOUNTAIN (Structure, Discipline, Boundaries)    │
│  9. URANUS         ◄─── THE LIGHTNING (Radical Originality, Awakening)      │
│  10. NEPTUNE       ◄─── THE MIST (Mystic Transcendence, Empathy, Artistry)  │
│  11. PLUTO         ◄─── THE MAGMA (Shadow Reclamation, Core Regeneration)  │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 3: The Sun (The Taproot) & The Moon (The Tides)

### 1. The Sun: The Taproot
- **Psychological Function**: Ego structure, sense of purpose, self-worth, creative vitality. The taproot grounds the tree of selfhood deep into the soil of reality.
- **The Three Levels**:
  - *Primitive*: Arrogant, entitled, demanding constant admiration, or completely collapsed in debilitating shame and self-sabotage.
  - *Adaptive*: Competent, dependable, socially approved, performs expected duties well, but lacks vibrant creative fire and authentic passion.
  - *Evolving*: Radiant, generous, magnetic, deeply secure in innate worth, inspires and elevates everyone in their orbit without needing to diminish others.

### 2. The Moon: The Tides
- **Psychological Function**: The emotional nervous system, instinctual needs, childhood conditioning, how we self-soothe when threatened.
- **The Three Levels**:
  - *Primitive*: Volatile emotional tantrums, sullen withdrawal, victim-blaming, weaponized guilt, emotional eating or substance numbing.
  - *Adaptive*: Pleasant and emotionally accommodating, suppresses messy feelings to keep the peace, polite but emotionally guarded.
  - *Evolving*: Somatically self-aware, embraces the full spectrum of feeling without judgment, communicates needs directly and calmly, creates a safe emotional sanctuary for others.

---

## Structural Pillar 4: The Ascendant (The Window) & Mercury (The Wind)

### 1. The Ascendant: The Window
- **Psychological Function**: First impressions, interpersonal stance, the role assigned to you in your family of origin (e.g., "The Peacemaker," "The Scapegoat," "The High Achiever").
- **The Radical Reframing**: Traditional astrology calls the Ascendant a "mask." Dr. Freed argues that a mask hides who you are, whereas a **window** is what you look out through and what others look in through. If your window is caked with mud, projection, and family scripts, your view of reality is distorted.
- **The Three Levels**:
  - *Primitive*: Deceptive facade, defensive persona, trapped in childhood family roles, manipulating how others perceive you.
  - *Adaptive*: Polished professional persona, socially appropriate, skilled at etiquette, but keeps everyone at arm's length.
  - *Evolving*: Crystal-clear window; seamless congruency between internal experience and external presentation; authentic, transparent presence.

### 2. Mercury: The Wind
- **Psychological Function**: Intellectual processing, communicative exchange, mental health, cognitive habits.
- **The Three Levels**:
  - *Primitive*: Cynical gossip, chronic lying, interruptive blabbering, paralyzing anxiety spirals, weaponized sarcasm.
  - *Adaptive*: Clear technical communication, good business writing, gathers facts, but lacks emotional empathy and poetic nuance.
  - *Evolving*: Masterful listener, speaks truth with radical kindness, translates complex conflicts into peaceful resolutions, channels visionary wisdom.

---

## Structural Pillar 5: Venus (The Garden) & Mars (The Bonfire)

### 1. Venus: The Garden
- **Psychological Function**: Relational aesthetics, romantic bonding, receiving pleasure, personal values, financial self-worth.
- **The Three Levels**:
  - *Primitive*: Narcissistic vanity, materialistic greed, using sex/romance to manipulate, codependent terror of being alone.
  - *Adaptive*: Pleasant companion, maintains conventional marriages, buys tasteful decor, avoids deep conflict to preserve aesthetic comfort.
  - *Evolving*: Cultivates an enchanting, reciprocal garden of love; deeply values self and others; generous, sensually grounded, and relationally sovereign.

### 2. Mars: The Bonfire
- **Psychological Function**: Primal life force, physical courage, sexual assertiveness, setting firm boundaries, channeling legitimate rage.
- **The Three Levels**:
  - *Primitive*: Violent outbursts, bullying, sexual aggression, reckless impulsivity, or passive-aggressive sabotage caused by repressed rage.
  - *Adaptive*: Productive hard worker, competitive in sports/business, follows workplace rules, but uncomfortable with deep emotional confrontation.
  - *Evolving*: Noble warrior; harnesses righteous passion to dismantle injustice; defends boundaries with calm, unshakeable firmness; fiercely protective of the vulnerable.

---

## Structural Pillar 6: Jupiter (The Lake) & Saturn (The Mountain)

### 1. Jupiter: The High Mountain Lake
- **Psychological Function**: Expansive vision, philosophical faith, ethical integrity, generosity, optimism.
- **The Three Levels**:
  - *Primitive*: Grandiose gambling, reckless indulgence, self-righteous moral superiority, dogmatic preaching, toxic positivity.
  - *Adaptive*: Successful investor, socially philanthropic, optimistic leader, but prone to over-promising and superficial cheerfulness.
  - *Evolving*: Deep well of enduring philosophical wisdom; embodies generous benevolence; sees divine interconnectedness across cultures; grounds faith in practical ethics.

### 2. Saturn: The Granite Mountain
- **Psychological Function**: Discipline, boundaries, time management, structural integrity, personal accountability, elderhood.
- **The Three Levels**:
  - *Primitive*: Tyrannical control freak, paralyzing depression, rigid stinginess, crushing self-criticism, blaming external authorities for personal misery.
  - *Adaptive*: Reliable corporate manager, dutiful worker, respects social traditions, emotionally reserved, lives with chronic underlying anxiety.
  - *Evolving*: Master architect of reality; embodies deep integrity and self-authored authority; holds firm, loving boundaries; serves as a wise, compassionate elder.

---

## Structural Pillar 7: The Twelve Sun Signs Across the Three Octaves

Dr. Freed provides a granular diagnostic map for how the Sun (The Taproot) expresses across all twelve archetypes:

| Sign | Primitive Octave (Reactive Shadow) | Adaptive Octave (Conventional Mask) | Evolving Octave (Conscious Master) |
|---|---|---|---|
| **Aries** | Bullying tyrant, impatient tantrums, reckless narcissism. | Competitive striver, assertive manager, hard athlete. | Inspiring trailblazer, courageous defender of others, fearless initiator. |
| **Taurus** | Stubborn hoarder, gluttonous couch potato, terror of change. | Reliable financial provider, steady worker, tasteful host. | Grounded steward of abundance, somatic master, patient sanctuary builder. |
| **Gemini** | Gossipy liar, superficial scatterbrain, paralyzed by anxiety. | Clever networker, multitasking administrator, witty speaker. | Illuminating truth-teller, cross-cultural bridge builder, profound listener. |
| **Cancer** | Moody manipulator, passive-aggressive martyr, defensive crab. | Caring parent, hospitable homekeeper, sympathetic friend. | Universal emotional anchor, empathetic healer, fierce protective guardian. |
| **Leo** | Arrogant drama queen, demanding constant applause, vain. | Successful entertainer, proud leader, generous gift-giver. | Radiant sovereign mentor, magnanimous beacon of joy, empowers others to shine. |
| **Virgo** | Toxic fault-finder, hypochondriac, paralyzed by perfectionism. | Efficient editor, meticulous employee, clean and organized. | Sacred craftsperson, holistic somatic healer, selfless systemic servant. |
| **Libra** | Spineless people-pleaser, superficial flirt, decision phobic. | Polished diplomat, charming host, maintains social etiquette. | Champion of restorative justice, master relational peacemaker, principled artist. |
| **Scorpio** | Vengeful paranoiac, covert manipulator, obsessive controller. | Tenacious crisis researcher, loyal protector, shrewd strategist. | Transformational alchemist, fearless depth psychotherapist, psychic healer. |
| **Sagittarius**| Dogmatic preacher, blunt tactless boor, irresponsible wanderer. | Enthusiastic traveler, energetic professor, optimistic coach. | Visionary philosopher, ethical global sage, inspires spiritual liberation. |
| **Capricorn** | Ruthless corporate climber, cold miser, tyrannical authoritarian. | Respectable executive, dutiful family pillar, law-abiding citizen. | Humble elder statesman, master architect of lasting institutions, integrity master. |
| **Aquarius** | Detached intellectual snob, contrarian rebel without purpose. | Progressive activist, tech-savvy team player, eccentric thinker. | Revolutionary humanitarian, channels visionary innovation for collective good. |
| **Pisces** | Addictive escapist, perpetual victim, deceptive boundaries. | Gentle creative artist, kind charity volunteer, soft daydreamer. | Enlightened mystic, unconditional cosmic lover, transcendent poet of the soul. |

---

## Structural Pillar 8: The Twelve Moon Signs Across the Three Octaves

The Moon (The Tides) reveals the subconscious nervous system and how we navigate emotional vulnerability:

| Moon Placement | Primitive Emotional Pattern | Adaptive Coping Strategy | Evolving Emotional Mastery |
|---|---|---|---|
| **Moon in Aries** | Explosive emotional volatility, impatient demands. | Channels anger into vigorous cardio or sports. | Direct, authentic emotional transparency; advocates fiercely for others. |
| **Moon in Taurus** | Emotional eating, stubborn withdrawal, money hoarding. | Soothes via comfort food, luxury bedding, predictable routine. | Deep somatic serenity, patient presence, unshakeable emotional anchor. |
| **Moon in Gemini** | Intellectualizing feelings, frantic nervous chatter. | Talks problems out with friends, reads self-help books. | Mindful emotional naming, articulates complex feelings with grace. |
| **Moon in Cancer** | Weaponized sulking, smothering codependency, clinging. | Cooks comfort meals, retreats to safe domestic nest. | Profound intuitive wisdom, safe emotional holding space, clear boundaries. |
| **Moon in Leo** | Dramatic emotional meltdowns if feeling unappreciated. | Seeks validation through social media praise or applause. | Warmhearted emotional generosity, makes others feel uniquely cherished. |
| **Moon in Virgo** | Obsessive anxiety, somatic worry, self-critical rumination. | Cleans house, organizes spreadsheets when distressed. | Translates emotional concern into practical, soothing caretaking routines. |
| **Moon in Libra** | Repressing upset to maintain peace, passive resentment. | Socializing politely, seeking immediate consensus. | Authentic relational dialogue, comfortable with productive conflict. |
| **Moon in Scorpio** | Paranoid testing of loyalty, vindictive emotional silence. | Secretive journaling, deep psychological research. | Fearless vulnerability, heals deep relational wounds, alchemical intimacy. |
| **Moon in Sagittarius**| Emotional avoidance through travel, preaching, toxic cheer. | Escaping uncomfortable emotions via humor and philosophy. | Generous philosophical perspective, emotional honesty, resilient joy. |
| **Moon in Capricorn**| Emotional freeze, shaming oneself for crying, cold aloofness. | Working overtime, organizing career goals to ignore pain. | Emotionally self-reliant, provides rock-solid structural support to loved ones. |
| **Moon in Aquarius**| Extreme emotional detachment, analyzing feelings like an alien. | Retreating into theoretical discussions, online gaming. | Compassionate objectivity, honors individuality while feeling deeply connected. |
| **Moon in Pisces** | Drowning in emotional sponge-like absorption, victimhood. | Escapist binge-watching, sleeping long hours, artistic outlet. | Mystic empathy paired with psychic boundaries, channels boundless divine grace. |

---

## Structural Pillar 9: The Twelve Ascendants Across the Three Octaves

The Ascendant (The Window) represents our immediate interpersonal lens and the psychological survival role assigned in our family of origin:

| Ascendant Sign | Family-of-Origin Survival Role | Primitive Window (Distorted / Deceptive) | Adaptive Window (Polished Mask) | Evolving Window (Pristine Transparency) |
|---|---|---|---|---|
| **Aries Rising** | The Fighter / The Self-Sufficient Pioneer | Aggressive, abrasive, impatient defense mechanism. | Energetic, highly independent go-getter. | Radiant courage, inspiring initiator, authentic presence. |
| **Taurus Rising** | The Anchor / The Stable Provider | Stubborn, immovable, materialistic fortress. | Calm, dependable, aesthetically pleasant companion. | Grounded somatic peace, creates sacred physical sanctuary. |
| **Gemini Rising** | The Messenger / The Jester / The Distractor | Anxious chatter, duplicitous gossip, deflecting truth. | Charming conversationalist, witty networker. | Brilliant translator of complex truths, compassionate listener. |
| **Cancer Rising** | The Caretaker / The Mother / The Nurturer | Passive-aggressive defense, guilt-tripping shell. | Hospitable, polite nurturer, protective of loved ones. | Loving universal sanctuary, deep intuitive empathy with boundaries. |
| **Leo Rising** | The Golden Child / The Star / The Hero | Desperate for applause, arrogant, dramatic tantrums. | Magnetic charisma, confident public presenter. | Magnanimous warmth, generous empowering sovereign leadership. |
| **Virgo Rising** | The Fixer / The Problem Solver / The Helper | Hyper-critical perfectionist, hypochondriacal anxiety. | Methodical organizer, impeccable technical helper. | Humble sacred craftsperson, holistic healer, grounded discernment. |
| **Libra Rising** | The Peacemaker / The Diplomat / The Accommodator| Spineless placating, paralyzing terror of conflict. | Flawless social etiquette, charming aesthetic host. | Relational integrity, fearless peacemaker, champion of justice. |
| **Scorpio Rising** | The Truth-Teller / The Scapegoat / The Secret-Keeper| Paranoid suspicion, piercing intimidation, guarded fortress. | Shrewd crisis investigator, fiercely loyal ally. | Alchemical healer, fearless emotional depth, transformative presence. |
| **Sagittarius Rising**| The Clown / The Rebel / The Philosopher | Blunt tactlessness, preachy, escaping through wanderlust. | Jovial optimist, enthusiastic mentor, broad traveler. | Wise spiritual sage, inspiring truth-seeker, cultural bridge. |
| **Capricorn Rising** | The Parentified Child / The Responsible Elder | Cold stoicism, cynical ambition, emotional freeze. | Impeccable professional authority, reliable executive. | Revered, compassionate elder, master builder of lasting good. |
| **Aquarius Rising** | The Alien / The Black Sheep / The Genius | Detached rebel, contrarian shock value, emotional coldness. | Progressive team player, technologically innovative. | Visionary humanitarian, unifying egalitarian community builder. |
| **Pisces Rising** | The Chameleon / The Ghost / The Dreamer | Helpless victim, addictive disappearance, deceitful fog. | Gentle, artistic, sensitive, quietly compassionate. | Luminous mystic, pure conduit of divine love, transcendent artist. |

---

## Structural Pillar 10: The Transpersonal Transformers (Uranus, Neptune, Pluto)

Dr. Freed analyzes the outer planets as intense psychospiritual evolutionary forces that require strong personal scaffolding (Sun, Moon, Saturn) to handle safely:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE TRANSPERSONAL EVOLUTIONARY SPECTRUM                     │
│                                                                             │
│  URANUS (The Lightning)                                                     │
│  - Primitive: Erratic rebellion, shock value, emotional coldness, chaos.    │
│  - Adaptive: Tech-savvy innovator, quirky individualist, social reformer.   │
│  - Evolving: Awakened genius, visionary champion of human equality.         │
│                                                                             │
│  NEPTUNE (The Mist)                                                         │
│  - Primitive: Addictive escapism, chronic deceit, victim-martyr paralysis.  │
│  - Adaptive: Sensitive artist, spiritual dabbler, compassionate helper.     │
│  - Evolving: Mystic channel, unconditional empathy, divine creative beauty. │
│                                                                             │
│  PLUTO (The Magma)                                                          │
│  - Primitive: Sadomasochistic power games, paranoia, vengeful destruction.  │
│  - Adaptive: Tenacious crisis manager, ambitious executive, psychological.   │
│  - Evolving: Master alchemist; transmutes collective shadow into light;     │
│    radiates fearless, healing regenerative power.                           │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 11: Comprehensive Diagnostic Behavioral Matrices

To enable readers to audit their psychological octave, Dr. Freed provides detailed behavioral matrices across all eleven placements:

| Archetypal Placement | Primitive Expression (Wounded / Reactive) | Adaptive Expression (Conventional / Functional) | Evolving Expression (Actualized / Conscious) |
|---|---|---|---|
| **Sun (Taproot)** | Arrogance, validation addict, paralyzed by self-doubt | Dutiful provider, plays social role well, low creative spark | Sovereign creative fire, radiates warmth, empowers others |
| **Moon (Tides)** | Mood tantrums, emotional blackmail, defensive shell | Polite emotional avoidance, pleasing others, repressed tears | Somatic self-regulation, radical empathy, clear emotional needs |
| **Ascendant (Window)** | Fake persona, manipulative masks, cynical lens | Socially correct etiquette, defensive pleasantness | Pristine transparency, authentic congruency, deep presence |
| **Mercury (Wind)** | Malicious gossip, chronic anxiety, sarcastic lying | Efficient data processor, speaks when polite, logical | Compassionate truth-teller, active listener, poetic wisdom |
| **Venus (Garden)** | Relational parasite, vanity, gold-digging, envy | Conventional partner, buys nice things, avoids drama | Unconditional self-worth, reciprocal intimacy, artistic grace |
| **Mars (Bonfire)** | Violent tantrums, passive aggression, bullying | Hard worker, competitive corporate drive, suppresses rage | Noble warrior, fearless boundary defender, sacred passion |
| **Jupiter (Lake)** | Grandiosity, speculative ruin, moral hypocrisy | Cheerful optimist, generous donor, overcommits | Deep philosophical faith, ethical wisdom, universal benevolence |
| **Saturn (Mountain)** | Cruel tyrant, frozen depression, chronic stinginess | Dutiful employee, obeys social rules, underlying dread | Enduring integrity, wise elderhood, masterful self-authorship |
| **Uranus (Lightning)** | Chaotic rebel, contrarian freakishness, cold detachment| Clever technologist, quirky hobbyist, progressive voter | Revolutionary liberator, humanitarian visionary, cosmic spark |
| **Neptune (Mist)** | Drug addiction, deceit, codependent savior-victim loops| Gentle dreamer, church volunteer, creative hobbyist | Awakened mystic, boundless compassion, visionary artist |
| **Pluto (Magma)** | Vengeful paranoia, sexual abuse, control obsession | Ambitious survivor, forensic researcher, tough negotiator| Shadow alchemist, radical healer, fearless soul regenerator |

---

## Structural Pillar 12: Clinical Therapeutic Case Studies

Dr. Freed substantiates her psychological framework with extensive clinical case histories drawn from thirty years of psychotherapy:

### Case Study 1: The Paralyzed Executive (Sun in Leo vs. Saturn in Scorpio)
- **Client**: 42-year-old marketing vice president suffering from imposter syndrome, chronic chest tightness, and sudden outbursts of rage at subordinates.
- **Astrological Configuration**: Sun in Leo (10th House) square Saturn in Scorpio (1st House).
- **Clinical Assessment**:
  - *The Primitive Loop*: The client's Sun in Leo desperately wanted to shine, lead, and be celebrated. However, his Primitive Saturn in Scorpio in the 1st House acted as an internalized abusive parent, whispering that any visible success was dangerous and would provoke lethal jealousy. He vacillated between demanding perfection (*Primitive Leo*) and vicious self-flagellation (*Primitive Saturn*).
- **Dr. Freed's Psychological Intervention**:
  1. *Somatic Dialogue*: The client practiced somatic breathing, identifying where Saturn's terror was lodged (tightness in the throat and groin).
  2. *Re-parenting the Inner Critic*: Transmuted Saturn from an executioner into a master craftsman. He was instructed to draft a written "Contract of Competence" acknowledging his actual professional achievements.
  3. *Activating Evolving Leo*: Shifted from needing applause to mentoring junior team members. He began publicly praising his staff's innovations.
- **Outcome**: The chest tightness resolved; his leadership style shifted from authoritarian panic to inspiring mentorship; he received a major corporate promotion within a year.

### Case Study 2: The Chronic Codependent Martyr (Moon in Pisces vs. Mars in Gemini)
- **Client**: 31-year-old pediatric nurse presenting with clinical exhaustion, chronic migraine headaches, and a pattern of remaining in emotionally draining relationships with unfaithful partners.
- **Astrological Configuration**: Moon in Pisces (6th House) square Mars in Gemini (9th House).
- **Clinical Assessment**:
  - *The Primitive Loop*: Her Primitive Moon in Pisces believed that love required total self-erasure and absorbing the emotional poison of others. When betrayed, her Primitive Mars in Gemini exploded into hours of frantic, circular texting and obsessive rumination, causing severe migraines without resolving the boundary violation.
- **Dr. Freed's Psychological Intervention**:
  1. *The Boundary Script*: Trained her Mars in Gemini to communicate boundaries in three clear, non-negotiable sentences, eliminating long circular arguments.
  2. *Somatic Self-Soothing*: Instituted daily saltwater baths and silent meditation to ground her Moon in Pisces, teaching her to distinguish her own emotional sensations from her partners'.
  3. *Activating Evolving Moon*: She joined a volunteer hospice choir, channeling her deep empathetic compassion into sacred end-of-life singing rather than rescuing toxic romantic partners.
- **Outcome**: Migraine frequency dropped by 90%; she successfully ended an enmeshed relationship; she established a thriving, boundaried personal life.

### Case Study 3: The Polarized Couple (Venus in Aries vs. Venus in Taurus)
- **Clients**: Married couple (Ages 36 and 39) on the brink of divorce over escalating financial and sexual conflicts.
- **Astrological Configurations**:
  - Partner A: Sun & Venus in Aries (1st House) with Mars in Sagittarius (9th House).
  - Partner B: Sun & Venus in Taurus (2nd House) with Mars in Cancer (4th House).
- **Clinical Assessment**:
  - *The Primitive Clash*: Partner A experienced intimacy as spontaneous adventure, rapid sexual initiation, and risk-taking. When bored, Partner A picked fights to create adrenaline spikes (*Primitive Aries*). Partner B experienced intimacy as slow physical touch, predictable domestic stability, and accumulating financial savings (*Primitive Taurus*). Partner B interpreted Partner A's restlessness as rejection and responded by hoarding finances and withholding physical touch (*Primitive Taurus defense*).
- **Dr. Freed's Psychological Intervention**:
  1. *Honoring the Different Gardens*: Educated the couple on the disparate relational ecosystems of Aries (Wild Meadow) and Taurus (Cultivated Orchard).
  2. *Scheduled Adventure vs. Scheduled Sanctuary*: Established bilateral agreements: Partner B agreed to embark on one spontaneous outdoor adventure monthly (feeding Partner A's Aries), while Partner A committed to honoring a fixed monthly savings plan and slow, non-sexual physical cuddles (nourishing Partner B's Taurus).
  3. *Evolving Synthesis*: Both partners moved from weaponizing their elemental differences to celebrating them as complementary strengths.
- **Outcome**: Marital conflict decreased significantly; sexual connection revived; they co-founded an eco-tourism business successfully combining Aries pioneering drive with Taurus financial stability.

---

## Structural Pillar 13: The Daily Transformation Toolkit

In Chapter 12 and the culminating Appendices, Dr. Freed details the specific operational practices for maintaining an Evolving life:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE DAILY EVOLUTIONARY PSYCHOLOGICAL TOOLKIT                │
│                                                                             │
│  1. THE MORNING TAPROOT ALIGNMENT (Sun & Ascendant)                         │
│     Stand barefoot; breathe down into the soles of the feet. Ask:          │
│     "How can I shine my authentic light today without arrogance or fear?"   │
│                                                                             │
│  2. THE MIDDAY TIDAL AUDIT (Moon & Mercury)                                 │
│     Check in somatically: "What am I feeling right now? What thought loop   │
│     is running in my mind? Do I need water, rest, or a boundary?"           │
│                                                                             │
│  3. THE EVENING HARVEST & CLEARING (Venus & Mars)                           │
│     Review relational interactions: "Did I speak with clarity? Did I honor  │
│     my own boundaries and the sovereignty of others? Where is forgiveness   │
│     needed?"                                                                │
│                                                                             │
│  4. THE NON-VIOLENT ASTROLOGICAL COMMUNICATION PROTOCOL                     │
│     - State the Observation (Mercury)                                       │
│     - Express the Somatic Feeling (Moon)                                    │
│     - Identify the Underlying Need (Venus)                                  │
│     - Make a Clear, Doable Request (Mars & Saturn)                          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Synthesis Takeaway: The Pedagogical Triumph of Dr. Jennifer Freed

*Use Your Planets Wisely* stands as a monumental achievement in modern psychological astrology. By stripping away fatalistic superstition and grounding every planetary placement in clinical psychology, family systems dynamics, and somatic mindfulness, Dr. Jennifer Freed has created an enduring manual for personal evolution.

Her work proves that **the chart is not a life sentence, but a sacred curriculum**. When we master the evolutionary leap from Primitive reaction to Adaptive competence and ultimately to Evolving consciousness, we fulfill our highest human calling: living lives of profound authenticity, compassionate intimacy, and enduring cultural service.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Use Your Planets Wisely | Dr. Jennifer Freed</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .freed-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(2, 136, 209, 0.12);
      color: #0288d1;
      border: 1px solid rgba(2, 136, 209, 0.3);
      margin-bottom: 0.5rem;
    }
    .freed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.2rem;
      margin: 1.5rem 0;
    }
    .freed-card {
      background: var(--card-bg, #fff);
      border: 1px solid var(--border-color, #e0d8cc);
      border-radius: 8px;
      padding: 1.3rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .freed-card h4 {
      margin-top: 0;
      font-family: 'Cinzel', serif;
      color: var(--primary-accent, #01579b);
    }
    .octave-pill {
      display: inline-block;
      padding: 0.15rem 0.4rem;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 600;
      font-family: 'JetBrains Mono', monospace;
      margin-right: 0.3rem;
    }
    .octave-primitive { background: #ffebee; color: #c62828; }
    .octave-adaptive { background: #fff8e1; color: #f57f17; }
    .octave-evolving { background: #e8f5e9; color: #2e7d32; }
  </style>
</head>
<body data-theme="cream">
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Master Library</a>
        <span class="shamanic-badge freed-badge">PSYCHOLOGICAL & SOMATIC ASTROLOGY</span>
        <h1 class="book-title">Use Your Planets Wisely</h1>
        <p class="book-subtitle">Master Your Ultimate Cosmic Potential with Psychological Astrology</p>
        <div class="book-meta">
          <span class="author">By Dr. Jennifer Freed, Ph.D.</span>
          <span class="meta-sep">•</span>
          <span class="units-count">10 Knowledge Units</span>
          <span class="meta-sep">•</span>
          <span class="standard-tag">BKRS v2.0 Replacement Standard</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Developmental Journey</button>
        <button class="view-btn" data-view="octaves">View B: Three Evolutionary Octaves</button>
        <button class="view-btn" data-view="metaphors">View C: Somatic Metaphors</button>
      </div>
    </header>

    <main class="reader-content">
      <!-- VIEW A: DEVELOPMENTAL JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="journey-flow">
          ${knowledgeUnits.map((u, idx) => `
            <article class="unit-card" id="${u.id}">
              <div class="unit-header">
                <span class="unit-number">MODULE ${idx + 1}</span>
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

      <!-- VIEW B: THREE EVOLUTIONARY OCTAVES -->
      <section id="view-octaves" class="view-section">
        <div class="freed-grid">
          <div class="freed-card">
            <h4><span class="octave-pill octave-primitive">PRIMITIVE</span> The Reactive Shadow</h4>
            <p>Driven by unexamined childhood wounds, defense mechanisms, and fear. Characterized by victim-blaming, narcissistic tantrums, codependency, and impulsive self-sabotage.</p>
          </div>
          <div class="freed-card">
            <h4><span class="octave-pill octave-adaptive">ADAPTIVE</span> The Conventional Mask</h4>
            <p>Functional, socially competent, polite, and rule-following. Manages symptoms and meets societal expectations, but lacks deep authentic passion and vulnerability.</p>
          </div>
          <div class="freed-card">
            <h4><span class="octave-pill octave-evolving">EVOLVING</span> The Conscious Master</h4>
            <p>Self-actualized, emotionally regulated, accountable, and service-oriented. Transmutes personal pain into wisdom and uses gifts to elevate community flourishing.</p>
          </div>
        </div>
      </section>

      <!-- VIEW C: SOMATIC METAPHORS -->
      <section id="view-metaphors" class="view-section">
        <div class="freed-grid">
          <div class="freed-card">
            <h4>The Sun: The Taproot</h4>
            <p>Central ego vitality, creative sovereignty, authentic identity grounded deep into reality.</p>
          </div>
          <div class="freed-card">
            <h4>The Moon: The Tides</h4>
            <p>Subconscious emotional currents, somatic instinct, family conditioning, inner child.</p>
          </div>
          <div class="freed-card">
            <h4>The Ascendant: The Window</h4>
            <p>The perceptive lens through which we view reality and are seen; family system role.</p>
          </div>
          <div class="freed-card">
            <h4>Mercury: The Wind</h4>
            <p>Mental flow, internal thought loops, communicative clarity, compassionate speech.</p>
          </div>
          <div class="freed-card">
            <h4>Venus: The Garden</h4>
            <p>Cultivated self-worth, relational reciprocity, aesthetic pleasure, emotional safety.</p>
          </div>
          <div class="freed-card">
            <h4>Mars: The Bonfire</h4>
            <p>Physical drive, healthy assertion, firm boundaries, noble warrior courage.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Use Your Planets Wisely</em> by Dr. Jennifer Freed (234 pages)</p>
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
