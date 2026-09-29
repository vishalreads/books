const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-book-of-neptune-forrest');
fs.mkdirSync(targetDir, { recursive: true });

const knowledgeUnits = [
  {
    id: "BON-U01",
    title: "The Neptunian Ontological Architecture: The Ocean of Consciousness and the Cleaned Window",
    chapter: "Part One: Let's Take a Ride in a Starship & Deepening Space, Deepening Mind",
    summary: "Reconstructs Steven Forrest's evolutionary definition of Neptune as the planetary representative of the boundless, non-dual ocean of consciousness. Contrasts the mundane primate identity (the temporal human personality) with the immortal, luminous awareness dwelling within. Unpacks the William Blake / Aldous Huxley metaphor of 'Cleaning the Windows of Perception' to demonstrate how Neptune dissolves the perceptual filter of the nervous system, granting direct experiential communion with the infinite.",
    sourceQuote: "What does Neptune mean, in its deepest essence? What is the simplest message that Neptune has for all of us? One answer is truly glorious: You are far, far better than you think you are. You are an ancient, evolving consciousness in a mysterious universe. You just look like a monkey! But don't worry, it's a temporary condition. Deep inside the monkey is this luminous emptiness that has existed since the beginning of time.",
    keyConcepts: [
      "Neptune as the Transcendent / Non-Dual Ocean of Awareness",
      "The Primate Ego vs Luminous Immortal Consciousness",
      "Cleaning the Windows of Perception (Blake/Huxley Metaphor)",
      "The Evolutionary Mandate: Egoless Surrender and Boundary Dissolution",
      "The Historical Synchronization of Neptune's 1846 Discovery (Anesthesia, Spiritualism, Photography)"
    ]
  },
  {
    id: "BON-U02",
    title: "The Spectrum of Illusion: Delusion, Addiction, Escapism, and Mystical Ecstasy",
    chapter: "Part One: Neptune, Delusion & Ecstasy and Psychic Phenomena",
    summary: "Examines the double-edged sword of the Neptunian frequency. Explains why individuals blunder so catastrophically during Neptunian activations: encountering a glimpse of the infinite, the unevolved ego attempts to grasp divine perfection through finite earthly vessels (addictions, toxic idealizations, savior-victim dynamics, and cults). Delineates the higher spiritual octave of contemplation, meditation, artistic trance, and active imagination, establishing why true mysticism requires ruthless discernment.",
    sourceQuote: "During Neptune events, people blunder, often spectacularly... They become deluded; delusion arises. Why? Because when we experience a Neptunian stimulus, the possibility arises that we can begin to see our true divine nature, but 'through a glass darkly'... The tragedy of addiction is that it is a misdirected spiritual thirst.",
    keyConcepts: [
      "The Dialectic of Ecstasy vs Delusion",
      "Chemical Addiction as Misdirected Spiritual Thirst",
      "Glamour, Idealization, and the Projection of the Divine onto Mortal Partners",
      "The Savior-Victim Trap and Pathological Martyrdom",
      "Psychic Vulnerability, Boundary Permeability, and Astral Hygiene"
    ]
  },
  {
    id: "BON-U03",
    title: "Loss as Fierce Spiritual Initiation: Deconstructing the Ego Props",
    chapter: "Part Five: Navigating Neptunian Times — Loss: Neptune's Fierce Gift",
    summary: "Dissects Forrest's profound existential analysis of loss under Neptunian transits, progressions, and solar arcs. Reframes the collapse of career status, marriage, financial security, or physical health not as arbitrary cruelty, but as the systematic dissolution of external existential props that the soul mistook for its authentic identity. Explains the clinical navigation of grief, surrender, and the discovery of the unassailable inner ground of being.",
    sourceQuote: "We cannot study the transits of Neptune for very long without realizing that they often correlate with loss—sometimes with truly grievous loss... But a classic synchronistic correlate of a period of Neptunian stimulus is the loss of some existential structure that is critical to the support of your identity as you have grown accustomed to thinking of it.",
    keyConcepts: [
      "Loss as the Fierce Gift of Spiritual Disidentification",
      "Dissolution of the Social Ego and Existential Props",
      "The Psychology of Surrender vs Defeatist Resignation",
      "Navigating the 'In-Between' Wilderness: The Liminal Void",
      "Re-anchoring in the Indestructible Ground of Being"
    ]
  },
  {
    id: "BON-U04",
    title: "Neptune in Aspect to the Personal Planets: Sun, Moon, and Mercury",
    chapter: "Part Two: How Aspects Work — Neptune with Sun, Moon, and Mercury",
    summary: "Delineates the psycho-spiritual synthesis when Neptune contacts the core personal trinity. Analyzes Sun-Neptune (dissolution of heroic ego, imposter syndrome vs transparent vessel of divine light), Moon-Neptune (hyper-sensory empathy, psychic sponging, ethereal maternal complexes, somatic boundary loss), and Mercury-Neptune (poetic, non-linear, intuitive cognition vs mental fog, self-deception, and communication paralysis).",
    sourceQuote: "With Sun-Neptune, your ego is not supposed to be an impenetrable fortress; it is meant to be a stained-glass window through which the divine light pours... With Moon-Neptune, you feel what the room feels before a word is spoken.",
    keyConcepts: [
      "Sun-Neptune: The Transparent Ego and Imposter Syndrome",
      "Moon-Neptune: Oceanic Empathy, Psychic Sponging, and the Ethereal Mother",
      "Mercury-Neptune: The Mythic Mind, Metaphorical Thinking, and Cognitive Fog",
      "Creative and Intuitive Channels vs Intellectual Disorientation",
      "Hard Aspects (Squares/Oppositions) as Urgent Calls for Boundaries"
    ]
  },
  {
    id: "BON-U05",
    title: "Neptune in Aspect to Desire, Assertion, and Order: Venus, Mars, and Saturn",
    chapter: "Part Two: Neptune with Venus, Mars, and Saturn",
    summary: "Investigates the complex friction when boundless Neptune touches human desire (Venus), instinctual drive (Mars), and reality-testing structure (Saturn). Maps Venus-Neptune romantic martyrdom and the quest for the holy grail soulmate; Mars-Neptune Karma Yoga, martial arts, and the surrender of personal will vs passive-aggressive collapse; and the sacred Saturn-Neptune paradox: giving concrete architectural form to mystical visions.",
    sourceQuote: "Venus-Neptune is the longing for the divine lover... Mars-Neptune is the spiritual warrior: action without personal ego-attachment, action as prayer... Saturn-Neptune is the sacred paradox: building a cathedral out of mist, anchoring the transcendent in practical stone.",
    keyConcepts: [
      "Venus-Neptune: Romantic Idealism, Disillusionment, and Unconditional Love",
      "Mars-Neptune: Karma Yoga, Spiritual Martial Arts, and Dissipated Drive",
      "The Saturn-Neptune Paradox: Structuring the Transcendent",
      "Spiritual Burnout, Cynicism, and Practical Mysticism",
      "The Transmutation of Personal Ambition into Divine Agency"
    ]
  },
  {
    id: "BON-U06",
    title: "Neptune in Aspect to the Outer Planetary Gods: Jupiter, Uranus, and Pluto",
    chapter: "Part Two: Neptune with Jupiter, Uranus, and Pluto",
    summary: "Explores the collective and transpersonal dynamics of Neptune contacting the outer planetary gods. Analyzes Jupiter-Neptune (cosmic faith, mystical expansiveness, spiritual grandiosity, and visionary optimism), Uranus-Neptune (the generational bridge between disruptive awakening and spiritual intuition), and the multi-decade sextile of Neptune and Pluto that underpins the 20th and 21st-century evolution of collective human consciousness.",
    sourceQuote: "Jupiter and Neptune together create a cathedral in the heart—an enormous, soaring faith in the benevolence of the cosmos... But beware of the guru complex and spiritual inflation.",
    keyConcepts: [
      "Jupiter-Neptune: Cosmic Grace, Visionary Faith, and Religious Inflation",
      "Uranus-Neptune: The Intuitive Technological and Consciousness Revolution",
      "Neptune-Pluto Sextile: The Shamanic Evolution of the Collective Unconscious",
      "Generational Signatures vs Individual Chart Rulers",
      "Discerning Personal Vocation from Epochal Movements"
    ]
  },
  {
    id: "BON-U07",
    title: "Neptune in the Quadrant of the Self and Foundation: Houses 1 through 4",
    chapter: "Part Three: How Neptune Interacts with House Symbolism — Houses 1 to 4",
    summary: "Traces Neptune's embodiment through the personal houses of identity and root origins. Formulates Neptune in the 1st House (chameleon persona, physical boundary vulnerability, mystical aura), 2nd House (money as sacred energy, release of material grasping vs financial negligence), 3rd House (telepathic perception, poetic language, psychic sibling links), and 4th House (the home as monastic sanctuary, oceanic ancestral lineage, saintly or absent parents).",
    sourceQuote: "In the First House, Neptune makes your face a mirror of the collective unconscious... In the Fourth House, your roots go deep into the cosmic ocean; home must be a sanctuary where the world's noise stops.",
    keyConcepts: [
      "1st House: The Chameleon Ascendant, Ethereal Aura, and Somatic Permeability",
      "2nd House: Sacred Livelihood, Non-Attachment, and Financial Fog",
      "3rd House: Intuitive Cognition, Poetic Eloquence, and Psychic Listening",
      "4th House: The Monastic Hearth, Ancestral Mysticism, and the Absent Parent",
      "Grounding Protocols for Early-House Neptunians"
    ]
  },
  {
    id: "BON-U08",
    title: "Neptune in the Quadrant of Relationship and Social Creation: Houses 5 through 8",
    chapter: "Part Three: Houses 5 to 8",
    summary: "Analyzes Neptune's operation in creative and relational territories. Details the 5th House (artistic trance, divine romantic passion, theatrical glamour), 6th House (sacred service, alternative medicine, somatic allergies, and workplace martyrdom), 7th House (the holy soulmate projection, savior-victim marriages, spiritual partnership), and 8th House (Tantric sexuality, psychological death/rebirth, psychic mediumship, and release of inherited taboos).",
    sourceQuote: "In the Seventh House, you are looking for God in your partner—and when they turn out to be human and burn the toast, the disappointment can be crushing. The lesson is learning to love a real human being with divine compassion.",
    keyConcepts: [
      "5th House: Divine Creative Trance, Artistic Flow, and Romantic Fantasy",
      "6th House: Service as Sadhana, Somatic Sensitivity, and Workplace Boundaries",
      "7th House: The Soulmate Projection, Relationship Disillusionment, and Sacred Partnership",
      "8th House: Tantric Surrender, Shamanic Grief, and Psychic Regeneration",
      "Transforming Romantic Yearning into Unconditional Compassion"
    ]
  },
  {
    id: "BON-U09",
    title: "Neptune in the Transpersonal Quadrant: Houses 9 through 12",
    chapter: "Part Three: Houses 9 to 12",
    summary: "Examines Neptune in its natural transpersonal habitats. Formulates the 9th House (mystical theology over dogmatic creed, spiritual pilgrimages, foreign retreats), 10th House (career as spiritual ministry, public artistic/healing reputation, disillusionment with corporate climbing), 11th House (spiritual sanghas, visionary humanitarian idealism, community boundaries), and 12th House (Neptune in its home waters: profound meditative depth, solitude as medicine, active imagination, and ego dissolution).",
    sourceQuote: "In the Twelfth House, Neptune is home. Solitude is not loneliness here; it is communion. If you do not give this placement quiet time, it will take it from you through fatigue, brain fog, or hospitalization.",
    keyConcepts: [
      "9th House: Experiential Mysticism, Spiritual Wandering, and Sacred Journeys",
      "10th House: The Public Visionary, Spiritual Calling, and Career Dissolution",
      "11th House: The Spiritual Tribe, Idealistic Collectives, and Social Boundary Hygiene",
      "12th House: Neptune in Home Waters, Contemplative Solitude, and Cosmic Surrender",
      "The Essential Practice of Intentional Withdrawal"
    ]
  },
  {
    id: "BON-U10",
    title: "The Oceanic Transit: Navigating the 3-Year Fog, Progressions, and Transpersonal Initiation",
    chapter: "Part Five: Neptunian Transits, Progressions, & Solar Arcs: Hints and Specifics",
    summary: "Synthesizes Forrest's master clinical guidelines for surviving and thriving during major Neptunian transits, progressions, and solar arcs. Lays down the survival rules: avoid signing irreversible rigid contracts in the fog, embrace temporary confusion as creative incubation, surrender control rather than doubling down on stubborn will, cultivate daily contemplative/creative practices, and trust the oceanic timing that dissolves old life chapters to birth spiritual wisdom.",
    sourceQuote: "When Neptune transits a sensitive point in your chart, the fog rolls in. If you try to drive at ninety miles an hour in that fog, you will crash. Pull over to the side of the road. Turn off the engine. Listen to the quiet. Let the old illusions dissolve. In three years, the fog will lift—and you will see a world renewed.",
    keyConcepts: [
      "The 3-Year Oceanic Transit Arc: Fog, Dissolution, Incubation, and Rebirth",
      "The Golden Rule of Neptunian Transits: Postponing Rigid Irreversible Commitments",
      "Cultivating the Contemplative Life: Meditation, Journaling, Dreamwork, and Art",
      "Somatic Fatigue as the Soul's Demand for Rest",
      "The Emergence: Purified Vision and Grounded Spiritual Grace"
    ]
  }
];

const masterNotesMarkdown = `# Master Codex: The Book of Neptune
## Author: Steven Forrest | The Definitive Guide to Evolutionary Neptune

---

### Executive Overview & Epistemological Paradigm

Steven Forrest's *The Book of Neptune* represents one of the most mature, nuanced, and spiritually profound treatises in modern astrological literature. Positioned at the apex of **Evolutionary Astrology**, Forrest rescues the planet Neptune from two equally dangerous extremes:
1. **The Cynical Fatalism of Traditional Astrology**: Viewing Neptune merely as an agent of deception, financial ruin, drug addiction, madness, betrayal, and scandalous downfall.
2. **The Pollyanna Naïveté of Pop New-Age Astrology**: Viewing Neptune as a fluffy symbol of universal love, fairy-tale soulmates, and effortless mystical light without acknowledging its capacity for catastrophic psychological confusion, ego dissolution, and crippling escapism.

Forrest approaches Neptune through the lens of **Soul Evolution** and **Non-Dual Metaphysics**. In his cosmological framework, the human incarnation is a sacred paradox:
$$\\text{The Temporal Primate Ego} \\longleftrightarrow \\text{The Luminous, Immortal, Boundless Consciousness}$$

We inhabit mammalian biological vehicles ("monkeys") burdened with survival instincts, territorial anxieties, and social identity markers. Yet dwelling at the very core of this biological vessel is an ancient, uncreated, indestructible spark of pure awareness that has existed since before the stars were born and will endure long after the cosmos cools into stillness.

**Neptune is the celestial representative of that boundless ocean.** Its evolutionary purpose is not to punish us with tragedy or flatter us with fantasies, but to **dismantle the illusion of separateness**. It systematically dissolves the rigid ego boundaries that convince us we are isolated fragments adrift in a hostile universe.

When approached consciously, Neptune is the portal to direct mystical communion, contemplative stillness, poetic genius, artistic trance, unconditional compassion, and the supreme realization that our true identity is the Divine itself. When resisted, distorted, or grasped with unevolved greed, Neptune manifests as delusions of grandeur, alcoholism, chemical dependency, romantic martyrdom, cultic infatuation, severe cognitive fog, and the agonizing collapse of our existential identity props.

---

### Core Structural Pillar 1: The Oceanic Architecture of Consciousness

#### The Huxley / Blake Cleansed Window Metaphor

Drawing on William Blake's famous dictum (*"If the doors of perception were cleansed, everything would appear to man as it is, Infinite"*) and Aldous Huxley's *The Doors of Perception*, Forrest models the human nervous system as an **evolutionary reducing valve**.

- If human consciousness were directly open to the total, unvarnished reality of the cosmos at all times, the overwhelming influx of sensory, psychic, and transpersonal information would instantly fry the mammalian brain.
- Biological evolution therefore equipped the human animal with thick perceptual filters: a "stained glass window" heavily coated with the grime of fear, tribal socialization, survival drives, and rational reductionism.
- This filter allows us to hunt, balance checkbooks, cross the street safely, and build civilizations—but it simultaneously traps us in the tragic delusion that the room of the ego is the entirety of existence.

$$\\mathbf{Neptune \\text{ is the cosmic window cleaner.}}$$

When Neptune is activated in the natal chart by transit, secondary progression, or solar arc, the solvent is applied. The grime on the glass begins to soften. The light of the Infinite streams through the cracks. 

If an individual is spiritually mature, disciplined, and psychically grounded, this thinning of the veil results in divine inspiration, prophetic dreams, mystical awakening, and egoless love. But if an individual is emotionally frail, rigid, or desperate for external validation, the sudden influx of transpersonal voltage causes the fragile ego to short-circuit, plunging into paranoia, mania, or drug-induced numbness.

---

### Core Structural Pillar 2: The Dialectic of Ecstasy and Delusion

#### Why People Blunder in Neptunian Times

Forrest notes a recurring clinical phenomenon in client horoscopes: during major Neptunian transits, otherwise rational and intelligent human beings make catastrophic, life-altering blunders.
- The suburban father with a stable family suddenly abandons his home to follow a charismatic spiritual guru who promises instant enlightenment.
- The seasoned business executive pours life savings into a nebulous, speculative scheme that evaporates overnight.
- The sensible professional falls passionately in love with an unavailable, addicted, or predatory partner, convinced they have met their "sacred twin flame."

Why does this happen? Forrest answers with psychological and metaphysical precision:
> *"The blunder arises because the native feels something that is 100% real and true—the sudden touch of the Infinite—but misattributes that divine reality to a finite, mortal, imperfect earthly vessel."*

The soul genuinely experiences the divine call to surrender, transcend, and unite with God. But because modern materialistic culture offers zero authentic training in contemplative mysticism, the native projects that spiritual longing onto the nearest earthly screen:
- A romantic partner becomes an idealized deity.
- A bottle of scotch becomes liquid peace.
- A speculative fantasy becomes the promised land.

When the earthly vessel inevitably collapses under the weight of this divine projection, the result is devastating heartbreak, financial ruin, or clinical depression.

#### The Hierarchy of Neptunian Expression

| Level | Mode of Expression | Psychological & Spiritual Phenomenon | Clinical Manifestations |
| :---: | :--- | :--- | :--- |
| **Low** | **Pathological Escapism** | Complete refusal to accept mundane boundaries; seeking artificial nirvana. | Severe alcoholism, chemical addiction, chronic dissociation, cult dependency, paranoia. |
| **Mid-Low**| **Romantic Martyrdom** | Projecting the Divine onto human lovers; savior-victim dynamics. | Codependency, falling in love with addicts/abusers, endless self-sacrifice without boundaries. |
| **Mid** | **Artistic / Creative Trance** | Channeling transpersonal imagery through symbolic and aesthetic mediums. | Poetry, cinema, music, painting, photography, acting, therapeutic empathy. |
| **High** | **Contemplative Mysticism** | Direct, unmediated communion with the Source; quiet mind; boundless compassion. | Daily meditation, silent retreats, surrender of personal ego-will, Karma Yoga, unconditional forgiveness. |

---

### Core Structural Pillar 3: Loss as Neptune's Fierce Gift

One of the most profound chapters in *The Book of Neptune* is titled **"Loss: Neptune's Fierce Gift."**

Traditional astrology has always recognized the correlation between Neptune transits and loss: loss of employment, dissolution of marriage, loss of physical stamina, loss of social status, or the death of loved ones. Fatalistic astrologers treat this as external bad luck or planetary malevolence. Forrest dismantles this view entirely:

#### The Mechanics of Existential Props

Throughout our lives, we construct what Forrest terms **existential props**:
- *"I am a Senior Vice President at a prestigious corporation."*
- *"I am the beautiful, admired wife of an important man."*
- *"I am the strong, healthy athlete who can outrun anyone."*
- *"I am the brilliant intellectual with all the answers."*

While these roles have practical utility, the ego makes the fatal error of believing that *the prop is the self*. We invest our entire sense of security, dignity, and worth into these temporary earthly costumes.

When Neptune transits over the Midheaven, the Sun, or the ruler of the 1st or 10th houses, the universe pulls the rug out from under the costume:
- The company downsizes, and you lose the executive title.
- The spouse departs, and the marital role evaporates.
- A mysterious illness strikes, and the athletic body is forced into bed-rest.

$$\\mathbf{Loss \\text{ is not punishment; it is the forced disidentification of the soul from its costume.}}$$

When the prop is taken away, the native initially experiences agony, disorientation, and panic. The ego screams: *"If I am not the Vice President, who am I? I am nothing!"*

And in that very word—*Nothing*—lies the supreme spiritual doorway.
If you can sit in the silence of that nothingness without rushing to grab a new costume or numb the pain with alcohol, you discover what remains when all the props are gone:
**The uncreated, immortal, luminous presence of your true self.**

Neptune strips away what was never truly yours so that you can finally possess that which can never be lost.

---

### Part Two: Neptune and the Planetary Aspects

#### 1. Neptune and the Sun
- **Core Archetype**: The Transparent Ego.
- **The Challenge**: The Sun represents the heroic self, conscious willpower, and individual differentiation. Neptune represents ego dissolution. With hard aspects (conjunction, square, opposition), the native often struggles with profound *imposter syndrome*, identity diffusion, and a haunting feeling of being a "nobody."
- **The Evolution**: The ego must not be built into an iron fortress, but polished into a stained-glass window. The native is here to learn that true greatness is not about personal domination, but about becoming a humble, transparent vehicle through which higher spiritual, creative, or compassionate forces pour into the world.

#### 2. Neptune and the Moon
- **Core Archetype**: Oceanic Empathy & Psychic Permeability.
- **The Challenge**: The Moon governs instinctual emotional security, the somatic nervous system, and ancestral roots. Neptune dissolves emotional boundaries. The native is an emotional sponge, unconsciously absorbing the mood, depression, anxiety, and psychic debris of anyone in the room. Often accompanied by an ethereal, sick, idealized, or absent mother.
- **The Evolution**: The native must master rigorous **Astral Hygiene**. They cannot afford to spend time with emotional vampires or toxic environments. They require daily solitude near water, quiet retreat, and the cultivation of detached, transpersonal compassion that holds suffering without drowning in it.

#### 3. Neptune and Mercury
- **Core Archetype**: The Mythic & Poetic Mind.
- **The Challenge**: Mercury operates through linear logic, binary analysis, and factual data. Neptune operates through metaphor, dreams, symbolism, and myth. Under stress, Mercury-Neptune manifests as cognitive fog, poor working memory, self-deception, gullibility, and paralysis in bureaucratic or mathematical environments.
- **The Evolution**: This is the supreme signature of the poet, the novelist, the psychic reader, the musician, and the visionary. When the rational mind is surrendered to the service of imagination, Mercury-Neptune articulates nuances of the human heart that literal language cannot touch.

#### 4. Neptune and Venus
- **Core Archetype**: The Quest for the Holy Grail Soulmate.
- **The Challenge**: Venus governs human romance, affection, and personal aesthetics. Neptune brings the longing for union with the Divine. When combined, the native projects the face of God onto a mortal human partner. The lover is initially placed upon a pedestal of absolute perfection ("My sacred twin flame!"). When the mortal partner inevitably reveals human flaws, the pedestal shatters, leading to bitter disillusionment, victimhood, and martyrdom.
- **The Evolution**: Realizing that no human being can bear the weight of being someone else's God. The native learns to love human beings in their messy, flawed reality with divine unconditional compassion, while satisfying their spiritual thirst through direct relationship with the Divine.

#### 5. Neptune and Mars
- **Core Archetype**: The Spiritual Warrior & Karma Yoga.
- **The Challenge**: Mars is raw personal assertion, aggressive drive, territorial self-defense, and sexual conquest. Neptune dissolves personal will. When conflicted, Mars-Neptune produces deep paralysis of will, fear of assertion, passive-aggressive sabotage, sexual confusion, or sudden dissipation of physical energy.
- **The Evolution**: Learning **Karma Yoga**—action without attachment to personal fruits. The warrior surrenders their blade to the divine will. Manifests in sacred martial arts (Tai Chi, Aikido), Qi Gong, selfless humanitarian defense, non-violent resistance, and action performed purely as sacred service.

#### 6. Neptune and Saturn
- **Core Archetype**: The Sacred Paradox (Structuring the Transcendent).
- **The Challenge**: Saturn is the architect of reality, boundaries, discipline, and hard stone. Neptune is the mist that dissolves walls. Hard aspects bring intense spiritual cynicism, despair over worldly suffering, bureaucratic disillusionment, and the painful feeling that ideals cannot survive in a corrupt world.
- **The Evolution**: The supreme balance of the mystic and the builder. Forrest calls this *"building a cathedral out of mist."* The native anchors spiritual ideals into concrete, long-lasting worldly institutions (hospices, monasteries, meditation centers, humanitarian legal structures).

#### 7. Neptune and Jupiter
- **Core Archetype**: Cosmic Faith & The Temple of the Heart.
- **The Challenge**: Jupiter expands whatever it touches; Neptune dissolves limits. When ungrounded, Jupiter-Neptune produces massive spiritual inflation, guru complexes, susceptibility to religious cults, irrational financial gambling on "faith," and grandiosity.
- **The Evolution**: An enormous, soaring capacity for mystical faith, boundless generosity, prophetic vision, and profound philosophical grace that can heal despair in others.

#### 8. Neptune and Uranus
- **Core Archetype**: The Generational Intuitive Revolution.
- **Evolution**: The lightning of Uranus illuminates the ocean of Neptune. Manifests as sudden collective breakthroughs in intuitive science, digital interconnectedness, electronic music, and the democratized awakening of transpersonal consciousness.

#### 9. Neptune and Pluto
- **Core Archetype**: The Shamanic Evolution of the Collective Soul.
- **Evolution**: The historic, multi-decade sextile between Neptune and Pluto (active throughout the late 20th and early 21st centuries) represents the deep, structural underworld initiation of the human species: confronting ecological collapse and atomic power to birth a planetary spiritual consciousness.

---

### Part Three: Neptune in the Twelve Houses

#### The Personal Quadrant (Houses 1 to 3)

##### Neptune in the 1st House: The Ethereal Mask
- **Phenomenology**: The physical persona is fluid, chameleon-like, and porous. People project whatever they want onto the native: a saint, a villain, an artist, a victim.
- **Evolutionary Task**: Learning that your personality is a costume, not your true identity. Avoiding boundary loss where you become whatever the other person desires. Mastering physical grounding and energetic shielding.

##### Neptune in the 2nd House: Sacred Livelihood & Non-Attachment
- **Phenomenology**: Money and possessions are felt as energetic flows rather than static hoardings. High vulnerability to financial fog, unread bank statements, scams, and guilt over charging money for one's gifts.
- **Evolutionary Task**: Cultivating a healthy relationship with material resources based on stewardship and integrity. Using money as a vehicle for spiritual service while maintaining firm, practical bookkeeping boundaries.

##### Neptune in the 3rd House: The Telepathic Mind
- **Phenomenology**: Linear communication feels clumsy; the native listens to the psychic undertones, body language, and unspoken emotional frequencies in everyday conversation. Early schooling often feels traumatic due to rigid, uninspired curricula.
- **Evolutionary Task**: Honing poetic, artistic, and musical forms of communication. Becoming a conscious translator of transpersonal truths into accessible everyday metaphors.

---

#### The Quadrant of Soul and Foundation (Houses 4 to 6)

##### Neptune in the 4th House: The Monastic Hearth & Ancestral Waters
- **Phenomenology**: The family background carries themes of mystery, secret grief, alcoholism, saintly figures, or emotional absence. The native's home must be an inviolable spiritual sanctuary.
- **Evolutionary Task**: Cultivating an internal anchor so deep in the divine ocean that external homelessness or domestic disruption cannot destabilize the soul. Creating a quiet home free of external noise.

##### Neptune in the 5th House: The Divine Muse & Creative Trance
- **Phenomenology**: Creative self-expression operates through channeling the muse. High risk of romantic infatuations where the native falls in love with fantasy projections rather than real humans.
- **Evolutionary Task**: Channeling the divine romantic longing into art, music, acting, or creative writing. Loving children as autonomous divine beings rather than extensions of the ego.

##### Neptune in the 6th House: Sacred Service & Somatic Sensitivities
- **Phenomenology**: The physical organism is hypersensitive to chemical toxins, pharmaceuticals, dietary allergens, and work stress. Daily labor must feel meaningful and spiritually purposeful or the native falls ill.
- **Evolutionary Task**: Treating work as *Sadhana* (spiritual practice). Exploring alternative and energetic medicine (acupuncture, homeopathy, herbalism). Establishing rigorous daily routines to prevent physical exhaustion.

---

#### The Quadrant of Relationship and Social Creation (Houses 7 to 9)

##### Neptune in the 7th House: The Sacred Mirror in Partnership
- **Phenomenology**: Longing for a spiritual soulmate. Great vulnerability to the **Savior-Victim Trap**: marrying an addict, a wounded bird, or someone who needs constant "rescuing."
- **Evolutionary Task**: Resigning from the job of saving other people. Learning to love an imperfect human being with divine compassion, while expecting mutual accountability, emotional sobriety, and healthy boundaries.

##### Neptune in the 8th House: Tantric Surrender & Shamanic Transformation
- **Phenomenology**: Intimacy is experienced as a mystical dissolution of ego boundaries. Profound sensitivity to the psychological undercurrents of taboos, death, inheritances, and trauma.
- **Evolutionary Task**: Mastering **Tantra**—sexuality as sacred energy exchange rather than biological release. Navigating grief as an initiatory passage into the mysteries of the afterlife.

##### Neptune in the 9th House: Experiential Mysticism & The Sacred Wanderer
- **Phenomenology**: Rigid religious dogmas feel stifling; the soul hungers for direct, unmediated mystical experience. Longing for pilgrimages to sacred sites across the earth.
- **Evolutionary Task**: Moving beyond abstract philosophical theories into living contemplative practice. Becoming an open-minded, humble spiritual explorer who recognizes the common mystical thread in all world religions.

---

#### The Transpersonal Quadrant (Houses 10 to 12)

##### Neptune in the 10th House: The Public Visionary & Career Dissolution
- **Phenomenology**: The traditional corporate ladder feels utterly hollow. The native is called to a vocation that touches the collective imagination, healing, or the arts. Vulnerability to public scandals or sudden loss of status if the ego becomes inflated.
- **Evolutionary Task**: Finding a vocation that serves the collective soul (counseling, arts, spiritual guidance, charitable leadership). Surrendering personal ambition in favor of being an instrument of higher purpose.

##### Neptune in the 11th House: The Spiritual Sangha & Visionary Tribes
- **Phenomenology**: Conventional superficial friendships feel draining. The native longs for a community of spiritually awakened, idealistic kindred spirits. Risk of disillusionment with political or spiritual groups.
- **Evolutionary Task**: Seeking out an authentic **Sangha** (community of spiritual practitioners). Holding noble humanitarian ideals for humanity without falling into misanthropic despair when individuals fall short.

##### Neptune in the 12th House: Home Waters & The Mystic's Solitude
- **Phenomenology**: Neptune in its home house. The boundary between the conscious mind and the collective unconscious is paper-thin. Unprocessed transpersonal energies flood the psyche in crowded places.
- **Evolutionary Task**: **Solitude is not a luxury; it is medical and spiritual necessity.** If the native does not take daily quiet time for meditation, journaling, and rest, the universe will enforce it through chronic fatigue, brain fog, or hospitalization. This is the hallmark of the natural contemplative.

---

### Part Five: Navigating Neptunian Times (Transits, Progressions & Solar Arcs)

#### The 3-Year Oceanic Transit Architecture

When transiting Neptune forms a major aspect (conjunction, square, opposition) to a natal planet or angle, the process unfolds across an approximate **3-year window**:

\`\`\`
YEAR 1: THE FOG ENTERS
- Old certainty weakens. Energy levels drop.
- Things that used to satisfy no longer work.
- Confusion, disorientation, and fading ambition.
- The temptation to panic or force results.

YEAR 2: THE DISINTEGRATION & THE OCEANIC VOID
- Peak of the transit (exact aspect passes).
- Dissolution of the relevant existential prop (job, relationship, certainty).
- The "in-between" liminal space.
- The vital spiritual choice: Addiction/Numbness vs Surrender/Stillness.

YEAR 3: THE EMERGENCE & PURIFIED VISION
- Neptune moves out of orb.
- The fog begins to thin and sunlight returns.
- New spiritual, artistic, or compassionate clarity.
- You realize that who you are is vast, serene, and free from the old costume.
\`\`\`

#### Forrest's Golden Rules for Surviving Neptune Transits:

1. **Do Not Drive at 90 mph in the Fog**: Postpone signing irreversible, binding long-term commercial contracts or making irrevocable worldly commitments if your mind feels foggy or uncertain.
2. **Treat Fatigue as Sacred Guidance**: When Neptune touches the Sun, Mars, or Ascendant, physical exhaustion is the soul's way of forcing you to unplug from the rat race. Sleep, rest, and float.
3. **Beware the "Too-Good-To-Be-True" Mirage**: Any person, investment, or spiritual teacher who appears 100% flawless, glowing, and without human shadows during a Neptune transit is an illusion. Keep your feet firmly on the ground.
4. **Feed the Archetype Consciously**: If you do not give Neptune its rightful food—meditation, music, ocean walks, poetic journaling, spiritual contemplation—it will eat your life in the form of confusion, alcoholism, and depression.
5. **Trust the Surrender**: When something leaves your life under Neptune, let it go. Do not grasp at water with a clenched fist. Open your hands, breathe, and trust the deeper current carrying your soul home.

---

### Part Four: Signs — The Great Animators of the Ocean

Neptune spends approximately **14 years in each zodiac sign**, making its sign placement a generational tone poem that colors the dreams, artistic movements, spiritual aspirations, and collective illusions of an entire epoch. Forrest details how the sign of Neptune flavors the collective ocean:

#### 1. Neptune in Leo (c. 1915–1929): The Golden Age of Glamour
- **Collective Ideal**: The birth of Hollywood, the silent film era, the flapper culture of the Roaring Twenties, and the golden projection of charisma and stardom.
- **Shadow Illusion**: The speculative intoxication of the 1920s stock market bubble, where everyone believed they could be a self-made millionaire; the illusion collapsed in the Great Crash of 1929 as Neptune prepared to enter Virgo.

#### 2. Neptune in Virgo (c. 1928–1943): The Somber Crucible
- **Collective Ideal**: The Great Depression and the New Deal. The spiritualization of labor, humility, service, and shared sacrifice. The birth of Alcoholics Anonymous (1935), grounding Neptune's spiritual solution in a practical, 12-step daily discipline.
- **Shadow Illusion**: Totalitarian social engineering; the myth of the "pure and efficient" worker state; mass bureaucratic compliance.

#### 3. Neptune in Libra (c. 1942–1957): The Idealization of the Nuclear Family
- **Collective Ideal**: Post-World War II longing for peace, harmony, and civilized romantic partnership. The creation of the United Nations; the golden suburban dream of white picket fences and marital bliss.
- **Shadow Illusion**: The severe repression of marital conflict; smiling through emotional emptiness; the myth of the Stepford suburban utopia.

#### 4. Neptune in Scorpio (c. 1956–1970): The Underworld Odyssey
- **Collective Ideal**: The turbulent 1960s. The psychedelic revolution (LSD, Aldous Huxley, Timothy Leary), rock-and-roll shamanism, the sexual revolution, and the mainstream explosion of Jungian depth psychology and Eastern mysticism.
- **Shadow Illusion**: The dark descent into heroin addiction; the Manson murders; the toxic confusion of sexual freedom with spiritual liberation.

#### 5. Neptune in Sagittarius (c. 1970–1984): The Global Spiritual Bazaar
- **Collective Ideal**: The explosion of international travel, world religions, guru movements, the New Age movement, and philosophical pluralism. The hunger for direct cosmic truth beyond conventional church walls.
- **Shadow Illusion**: Susceptibility to charismatic cult leaders (Jonestown, Rajneeshpuram); spiritual materialism; naive philosophical grandiosity.

#### 6. Neptune in Capricorn (c. 1984–1998): The Corporate Mirage
- **Collective Ideal**: The fall of the Berlin Wall; the collapse of Soviet Communism; the global expansion of free-market capitalism; the dream of corporate pragmatism and architectural grandeur.
- **Shadow Illusion**: The financial bubbles of the 1980s ("Greed is good"); the spiritualization of money and executive power; subsequent corporate corruption scandals (Enron, WorldCom).

#### 7. Neptune in Aquarius (c. 1998–2012): The Virtual Ocean
- **Collective Ideal**: The birth and exponential explosion of the World Wide Web, global social media, digital telepathy, open-source communities, and virtual realities. The human species connected as a single planetary nervous system.
- **Shadow Illusion**: Disconnection from the physical body; addiction to online avatars, algorithmic echo-chambers, and digital illusions; the loneliness of hyper-connectivity.

#### 8. Neptune in Pisces (c. 2011–2026): The Return to Home Waters
- **Collective Ideal**: Neptune enters its own home sign for the first time in 165 years. A massive global revival of meditation, mindfulness, energetic healing, plant medicine, and the recognition of planetary ecological interdependence. The sacredness of water and the oceans.
- **Shadow Illusion**: The post-truth era; fake news; mass conspiratorial delusions; viral pandemics (boundary dissolution on a biological level); societal confusion and escapist media immersion.

---

### Part Five: The Historical Synchronicity of Neptune's Discovery (1846)

In archetypal astrology, a planet is discovered astronomically at the exact historical moment when its corresponding archetypal principles are ready to erupt into the collective conscious awareness of humanity.

Neptune was discovered on **September 23, 1846**, by Johann Gottfried Galle based on mathematical calculations by Urbain Le Verrier. Forrest explores the extraordinary synchronistic tapestry of that specific historical window:

1. **The Invention of Anesthesia (October 1846)**: Within three weeks of Neptune's discovery, William T.G. Morton conducted the first successful public demonstration of ether anesthesia at Massachusetts General Hospital. For the first time in human history, physical pain could be dissolved into oceanic unconsciousness—a pure physical manifestation of Neptune's pain-numbing solvent.
2. **The Birth of Modern Spiritualism (1848)**: The Fox Sisters in Hydesville, New York, began reporting communication with discarnate spirits through rapping sounds, sparking the global Spiritualist movement and the mainstream obsession with séances and mediumship.
3. **The Proliferation of Photography (c. 1840s)**: The daguerreotype and early photography captured "ghostly" images of light and shadow, allowing humans to record transient visual memories onto silver-plated mirrors.
4. **Marx's Communist Manifesto (1848)**: The publication of the ultimate secular utopian vision—the dissolution of private property, the abolition of classes, and the dream of an egoless, egalitarian collective paradise (*"From each according to his ability, to each according to his need"*).
5. **The Golden Age of Romanticism & Transcendentalism**: Ralph Waldo Emerson, Henry David Thoreau, and Walt Whitman articulated the philosophy of the Over-Soul, nature mysticism, and non-dual spiritual communion.

---

### Part Six: Forensic Case Studies & Clinical Applications

#### Case Study 1: The Corporate Dissolution and the Spiritual Vocation
- **Natal Signature**: Sun in Capricorn conjunct Midheaven square Neptune in Libra in the 7th house.
- **The Transit**: Transiting Neptune crossed the native's IC (4th house cusp), opposing the Midheaven and Sun, while squaring natal Neptune.
- **Phenomenology**: The native was an executive vice president at a major commercial bank. Under the exact transit, the bank merged, his entire division was eliminated, and his 25-year career vanished overnight. Concurrently, his wife asked for a trial separation.
- **The Evolution**: The client initially fell into severe depression and heavy nightly alcohol use, feeling that his life was over. Through evolutionary counseling, he recognized that his identity had been completely merged with his executive title. Over the next two years, he ceased drinking, completed an intensive training program in hospice bereavement counseling, and founded a non-profit foundation providing grief counseling to grieving families. What felt like the end of his life was the birth of his true soul ministry.

#### Case Study 2: The Artist and the Imposter Syndrome
- **Natal Signature**: Sun conjunct Neptune in Scorpio in the 5th house.
- **The Dilemma**: A gifted classical cellist and composer who experienced agonizing stage fright and a paralyzing sense of fraudulence. Despite critical acclaim, she felt: *"If they really knew me, they would see that I have no talent at all."*
- **The Breakthrough**: Forrest guided her to realize that Sun-Neptune in the 5th house is not meant to take personal ego-pride in creative performance. The stage fright was her ego trying to claim ownership of the music. When she reframed performance as an act of prayer—surrendering her ego and asking to be merely the hollow reed through which the music flows—her stage fright vanished, and her performances reached transcendent emotional depth.

#### Case Study 3: The 12th House Illness as Enforced Solitude
- **Natal Signature**: Mars in Aries in the 1st house; Neptune in Sagittarius in the 12th house.
- **The Crisis**: A hyper-driven corporate litigator who worked 80-hour weeks, ridiculed meditation as "lazy fluff," and took pride in sleeping only 4 hours a night.
- **The Transits**: Transiting Neptune in Pisces squared his natal 12th-house Neptune and opposed his 6th-house planets.
- **The Manifestation**: He was struck by severe Chronic Fatigue Syndrome (CFS) and Epstein-Barr reactivation. He could barely walk across his living room and was bedridden for 14 months.
- **The Lesson**: The 12th-house Neptune demanded solitude, rest, and contemplative surrender. Because his conscious ego refused to take quiet time voluntarily, his biological organism enforced it through somatic collapse. During his bedridden year, he began reading contemplative literature, learned meditation, and returned to the law as an environmental mediator rather than an aggressive corporate litigator.

---

### Synthesis Takeaway & Clinical Impact

Steven Forrest's *The Book of Neptune* is an indispensable masterpiece of psychological and spiritual astrology. It provides astrologers and clients alike with a compassionate, rigorous, and deeply inspiring roadmap for navigating the most mysterious, confusing, and ultimately sublime passages of human existence.

By reframing Neptune from an ominous symbol of deception into the **sacred solvent of the soul**, Forrest gives us the tools to transform grief into wisdom, illusion into discernment, and confusion into the peace that passes all understanding.
`;

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Book of Neptune - Master Codex | Intellectualist</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    .neptune-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
      font-weight: 700;
      font-size: 0.85rem;
      background: #e0f2fe;
      color: #0369a1;
      border: 1px solid #bae6fd;
      margin: 0.2rem 0.2rem 0.2rem 0;
    }
    .badge-transcendent {
      background: #ede9fe;
      color: #6d28d9;
      border-color: #ddd6fe;
    }
    .badge-warning {
      background: #ffebee;
      color: #c62828;
      border-color: #ffcdd2;
    }
    .quote-box {
      border-left: 4px solid #0284c7;
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
          <h1 class="header-book-title">The Book of Neptune</h1>
          <span class="header-book-author">Steven Forrest (Evolutionary Astrology)</span>
        </div>
      </div>
      <div class="reader-header-right">
        <div class="reading-stats">
          <span id="reading-time">32 min read</span>
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
          <input type="text" id="unit-search" placeholder="Search concepts, aspects, houses...">
        </div>
        <nav class="sidebar-nav">
          <div class="nav-section-title">TABLE OF CONTENTS</div>
          <ul class="nav-list" id="unit-nav-list">
            <li class="nav-item active" data-target="master-overview"><a href="#master-overview">Executive Overview</a></li>
            <li class="nav-item" data-target="unit-1"><a href="#unit-1">U01: Oceanic Architecture</a></li>
            <li class="nav-item" data-target="unit-2"><a href="#unit-2">U02: Ecstasy vs Delusion</a></li>
            <li class="nav-item" data-target="unit-3"><a href="#unit-3">U03: Loss: Fierce Gift</a></li>
            <li class="nav-item" data-target="unit-4"><a href="#unit-4">U04: Sun, Moon, Mercury</a></li>
            <li class="nav-item" data-target="unit-5"><a href="#unit-5">U05: Venus, Mars, Saturn</a></li>
            <li class="nav-item" data-target="unit-6"><a href="#unit-6">U06: Outer Planetary Gods</a></li>
            <li class="nav-item" data-target="unit-7"><a href="#unit-7">U07: Houses 1 to 4</a></li>
            <li class="nav-item" data-target="unit-8"><a href="#unit-8">U08: Houses 5 to 8</a></li>
            <li class="nav-item" data-target="unit-9"><a href="#unit-9">U09: Houses 9 to 12</a></li>
            <li class="nav-item" data-target="unit-10"><a href="#unit-10">U10: The Oceanic Transit</a></li>
          </ul>
        </nav>
      </aside>

      <main class="reader-content" id="reader-content-body">
        <section id="master-overview" class="content-section">
          <div class="codex-banner">
            <div class="badge-tag">BKRS v2.0 MASTER CODEX</div>
            <h1 class="codex-title">The Book of Neptune</h1>
            <p class="codex-subtitle">The Evolutionary Astrology of Mysticism, Illusion, and Ego Transcendence</p>
            <div class="metadata-grid">
              <div class="meta-item"><span class="meta-label">Author:</span> <span class="meta-val">Steven Forrest</span></div>
              <div class="meta-item"><span class="meta-label">School:</span> <span class="meta-val">Evolutionary & Psychological Astrology</span></div>
              <div class="meta-item"><span class="meta-label">Primary Archetype:</span> <span class="meta-val">Neptune (The Boundless Ocean)</span></div>
              <div class="meta-item"><span class="meta-label">Standard:</span> <span class="meta-val">Replacement-Grade Technical Master</span></div>
            </div>
          </div>

          <div class="quote-box">
            "What does Neptune mean, in its deepest essence? You are far, far better than you think you are. You are an ancient, evolving consciousness in a mysterious universe. You just look like a monkey! But don't worry, it's a temporary condition. Deep inside the monkey is this luminous emptiness that has existed since the beginning of time."
          </div>

          <h2>Executive Paradigm: The Primate and the Mystic</h2>
          <p>Steven Forrest rescues Neptune from two historical distortions: the paranoid fatalism of traditional astrology (which views Neptune solely as deceit, madness, and ruined lives) and the superficial light-heartedness of pop New-Age astrology. In Evolutionary Astrology, Neptune represents the soul's sacred drive to dissolve the illusion of separateness and remember its non-dual identity with the Divine Source.</p>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>The Unevolved Trap (Lower Octave)</th>
                  <th>The Evolutionary Mastery (Higher Octave)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ontology</strong></td>
                  <td>Escapism, dissociation, chemical dependency, refusal of boundaries.</td>
                  <td>Direct mystical communion, contemplative stillness, non-dual presence.</td>
                </tr>
                <tr>
                  <td><strong>Relationships</strong></td>
                  <td>Savior-victim codependency, romantic martyrdom, projecting God onto a lover.</td>
                  <td>Unconditional love for flawed human beings, spiritual partnership, sacred Tantra.</td>
                </tr>
                <tr>
                  <td><strong>Mind</strong></td>
                  <td>Brain fog, gullibility, paranoia, self-deception, chaotic daydreaming.</td>
                  <td>Poetic genius, mythic cognition, symbolic thinking, deep psychic intuition.</td>
                </tr>
                <tr>
                  <td><strong>Transits & Crisis</strong></td>
                  <td>Agonizing resistance to loss, panic over collapsed status, victimhood.</td>
                  <td>Surrendering false ego-costumes, discovering the indestructible true self.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- UNIT 1 -->
        <section id="unit-1" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 01</span>
            <h2>The Neptunian Ontological Architecture: The Ocean of Consciousness and the Cleaned Window</h2>
            <div class="source-ref">Part One: Let's Take a Ride in a Starship & Deepening Space</div>
          </div>
          <div class="unit-body">
            <p>Forrest defines human consciousness as a dual reality: we are mammalian primates navigating biological survival, yet we contain an uncreated, luminous immortal awareness. The biological nervous system functions as a reducing valve (Blake's window), keeping out the overwhelming voltage of the cosmos.</p>
            <p>Neptune is the cosmic solvent that cleanses this window. When the veil thins, we glimpse the Infinite. If unprepared, the ego becomes terrified or delusional; if prepared, the soul experiences profound spiritual liberation.</p>
          </div>
        </section>

        <!-- UNIT 2 -->
        <section id="unit-2" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 02</span>
            <h2>The Spectrum of Illusion: Delusion, Addiction, Escapism, and Mystical Ecstasy</h2>
            <div class="source-ref">Part One: Neptune, Delusion & Ecstasy</div>
          </div>
          <div class="unit-body">
            <p>Why do people blunder under Neptune? Forrest explains that when Neptune touches the psyche, the soul experiences an authentic touch of the Divine. However, the unevolved ego misattributes this divine experience to an earthly, finite form:</p>
            <ul>
              <li><strong>Addiction:</strong> Alcohol and drugs mimic the boundary-dissolving bliss of the Divine. Addiction is a misdirected spiritual thirst.</li>
              <li><strong>Glamour & Cults:</strong> Following a charismatic guru who claims to possess all spiritual authority.</li>
              <li><strong>The Solution:</strong> Developing contemplative practices (meditation, silent retreat, breathwork) that quench the soul's thirst at the true spring of consciousness.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 3 -->
        <section id="unit-3" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 03</span>
            <h2>Loss as Fierce Spiritual Initiation: Deconstructing the Ego Props</h2>
            <div class="source-ref">Part Five: Loss: Neptune's Fierce Gift</div>
          </div>
          <div class="unit-body">
            <p>Under major Neptunian transits, individuals frequently experience loss: a job termination, a divorce, the collapse of savings, or physical debility. Forrest demonstrates that these are <em>existential props</em> that the ego mistook for the authentic self.</p>
            <div class="quote-box">
              "Loss is not a punishment. It is the forced disidentification of the soul from its costume. When the prop is taken away, you discover what remains: the indestructible ground of your immortal being."
            </div>
          </div>
        </section>

        <!-- UNIT 4 -->
        <section id="unit-4" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 04</span>
            <h2>Neptune in Aspect to the Personal Planets: Sun, Moon, and Mercury</h2>
            <div class="source-ref">Part Two: How Aspects Work — Sun, Moon, Mercury</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="neptune-badge badge-transcendent">Sun-Neptune:</span> The Transparent Ego. Healing imposter syndrome by recognizing the self as a stained-glass window for higher light.</li>
              <li><span class="neptune-badge badge-transcendent">Moon-Neptune:</span> Oceanic Empathy. The emotional sponge; psychic sensitivity; the requirement for energetic hygiene and solitary recovery.</li>
              <li><span class="neptune-badge badge-transcendent">Mercury-Neptune:</span> The Poetic Mind. Non-linear, metaphorical, mythic intelligence vs cognitive fog and self-deception.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 5 -->
        <section id="unit-5" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 05</span>
            <h2>Neptune in Aspect to Desire, Assertion, and Order: Venus, Mars, and Saturn</h2>
            <div class="source-ref">Part Two: Venus, Mars, Saturn</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="neptune-badge badge-transcendent">Venus-Neptune:</span> The Grail Soulmate. Moving from romantic disillusionment to divine unconditional compassion for flawed human partners.</li>
              <li><span class="neptune-badge badge-transcendent">Mars-Neptune:</span> The Spiritual Warrior. Karma Yoga; action without ego-attachment; martial arts and Qi Gong vs passivity.</li>
              <li><span class="neptune-badge badge-transcendent">Saturn-Neptune:</span> The Sacred Paradox. Structuring the transcendent; giving concrete stone form to mystical visions; avoiding cynicism.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 6 -->
        <section id="unit-6" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 06</span>
            <h2>Neptune in Aspect to the Outer Planetary Gods: Jupiter, Uranus, and Pluto</h2>
            <div class="source-ref">Part Two: Jupiter, Uranus, Pluto</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><span class="neptune-badge badge-transcendent">Jupiter-Neptune:</span> The Cathedral in the Heart. Soaring cosmic faith vs spiritual inflation and guru complexes.</li>
              <li><span class="neptune-badge badge-transcendent">Uranus-Neptune:</span> The Intuitive Technological Awakening. Reconciling revolutionary lightning with oceanic compassion.</li>
              <li><span class="neptune-badge badge-transcendent">Neptune-Pluto:</span> The Shamanic Evolution of Species Consciousness. Confronting the collective shadow to birth planetary awakening.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 7 -->
        <section id="unit-7" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 07</span>
            <h2>Neptune in the Quadrant of the Self and Foundation: Houses 1 through 4</h2>
            <div class="source-ref">Part Three: Houses 1 to 4</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><strong>1st House:</strong> Chameleon persona; ethereal presence; vulnerability to collective projections; physical grounding mandatory.</li>
              <li><strong>2nd House:</strong> Money as spiritual energy; non-attachment vs financial vagueness; ethical, sacred livelihood.</li>
              <li><strong>3rd House:</strong> Intuitive listening; psychic sibling connections; poetic, non-verbal transmission of ideas.</li>
              <li><strong>4th House:</strong> The monastic hearth; ancestral ocean; home must be an inviolable spiritual sanctuary.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 8 -->
        <section id="unit-8" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 08</span>
            <h2>Neptune in the Quadrant of Relationship and Social Creation: Houses 5 through 8</h2>
            <div class="source-ref">Part Three: Houses 5 to 8</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><strong>5th House:</strong> Channeling the Divine Muse; artistic trance; theatre; releasing romantic fantasy projections.</li>
              <li><strong>6th House:</strong> Service as Sadhana; energetic medicine; somatic sensitivity to environmental toxins; workplace boundaries.</li>
              <li><strong>7th House:</strong> The Soulmate projection; savior-victim marriages; resigning from saving the partner; sacred partnership.</li>
              <li><strong>8th House:</strong> Tantra; intimate ego dissolution; shamanic grief; psychological rebirth and mediumship.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 9 -->
        <section id="unit-9" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 09</span>
            <h2>Neptune in the Transpersonal Quadrant: Houses 9 through 12</h2>
            <div class="source-ref">Part Three: Houses 9 to 12</div>
          </div>
          <div class="unit-body">
            <ul>
              <li><strong>9th House:</strong> Mystical philosophy; sacred pilgrimages; direct experiential theology over rigid dogma.</li>
              <li><strong>10th House:</strong> Vocation as ministry; public artistic or healing mission; disillusionment with corporate climbing.</li>
              <li><strong>11th House:</strong> The Spiritual Sangha; visionary humanitarian collectives; maintaining individual boundaries in groups.</li>
              <li><strong>12th House:</strong> Neptune in Home Waters. Contemplative solitude is a medical and spiritual necessity; natural mystic.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 10 -->
        <section id="unit-10" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 10</span>
            <h2>The Oceanic Transit: Navigating the 3-Year Fog, Progressions, and Transpersonal Initiation</h2>
            <div class="source-ref">Part Five: Neptunian Transits, Progressions & Solar Arcs</div>
          </div>
          <div class="unit-body">
            <p>During a 3-year Neptunian transit, the fog rolls in to dissolve outdated ego structures. Forrest lays down five clinical rules:</p>
            <ol>
              <li><strong>Do not drive at 90 mph in the fog:</strong> Postpone rigid, irreversible contracts and commitments.</li>
              <li><strong>Honor somatic fatigue:</strong> Rest is the soul's demand for withdrawal and reset.</li>
              <li><strong>Beware the too-good-to-be-true mirage:</strong> Test romantic and financial promises against reality.</li>
              <li><strong>Feed the archetype consciously:</strong> Practice meditation, art, music, and quiet walks in nature.</li>
              <li><strong>Trust the oceanic timing:</strong> When something departs under Neptune, let it go. The tide recedes only to return as pure grace.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log('Successfully wrote knowledge-units.json for The Book of Neptune');

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
console.log(`Successfully wrote master-notes.md for The Book of Neptune (${masterNotesMarkdown.length} chars)`);

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully wrote index.html for The Book of Neptune (${readerHtml.length} chars)`);
