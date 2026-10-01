const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'om-mani-padme-hum-osho');
fs.mkdirSync(outDir, { recursive: true });

const title = "Om Mani Padme Hum: The Sound of Silence: The Diamond in the Lotus";
const author = "Osho";
const category = "Philosophy / Zen & Tibetan Mysticism";

const knowledgeUnits = [
  {
    id: "unit-01-music-of-om",
    title: "Unit 1: The Music of OM: The Sound of Silence and the Six Inner Senses",
    themes: [
      "The primordial Tibetan mantra translated: 'The sound of silence: the diamond in the lotus'",
      "The six outer senses matched by the six inner senses: inner sight, hearing, and the sense of balance",
      "OM is not a verbal chant to be repeated by the throat, but an unstruck vibration heard in absolute stillness",
      "Why OM has no alphabet: written everywhere as a trans-linguistic symbol beyond mundane thought",
      "The music of silence: how the lake of consciousness becomes a mirror when mental waves subside"
    ]
  },
  {
    id: "unit-02-diamond-in-lotus",
    title: "Unit 2: The Diamond in the Lotus: Indestructible Consciousness in the Fragrant Heart",
    themes: [
      "The metaphor of the Diamond (*Mani* / *Vajra*): eternal, unscratchable, indestructible witness awareness",
      "The metaphor of the Lotus (*Padme*): the soft, vulnerable, fragrant flowering of love and compassion",
      "The synthesis: strength without cruelty, tenderness without weakness; the diamond resting inside the lotus",
      "Why asceticism creates hard diamonds without flowers, and sentimentality creates wilted petals without diamonds",
      "The integration of masculine resilience (*Vajra*) and feminine receptivity (*Padma*)"
    ]
  },
  {
    id: "unit-03-tibet-sacred-legacy",
    title: "Unit 3: Tibet's Sacred Contribution: The Inward Exploration of an Entire Civilization",
    themes: [
      "Tibet as the solitary nation in human history that dedicated its entire collective genius to the interior soul",
      "The tragic geopolitical tragedy of Tibet's conquest: a defenseless spiritual culture crushed by materialistic violence",
      "Preserving the esoteric treasure: Mahamudra, Dzogchen, the Bardo Thodol, and Tantric technologies",
      "Why the modern world desperately needs Tibetan inwardness to counterbalance Western external technology",
      "Rescuing Tibetan mysticism from monastic superstition, lamaist hierarchy, and feudal dogmas"
    ]
  },
  {
    id: "unit-04-fallacy-of-verbal-chanting",
    title: "Unit 4: The Fallacy of Verbal Chanting: Listening to the Unstruck Sound vs. Mechanical Repetition",
    themes: [
      "The widespread spiritual error: repeating 'Om, Om, Om' like a parrot with vocal cords",
      "How mechanical chanting merely hypnotizes the brain into dull, stuporous sleep (*Tamas*)",
      "The distinction between *Ahat* (struck, frictional sound) and *Anahat* (unstruck, primordial sound)",
      "Moving from active chanting to passive listening (*Shravana*): tuning the biological antenna to silence",
      "The moment of discovery: OM is already pulsating in the heartbeat of the cosmos; you only need ears to hear"
    ]
  },
  {
    id: "unit-05-simple-humble-affair",
    title: "Unit 5: A Very Simple and Humble Affair: Demystifying Enlightenment into Ordinary Innocence",
    themes: [
      "Dismantling the grandiosity of enlightenment: not an exotic cosmic fireworks display, but natural simplicity",
      "Why priests and spiritual merchants complicate the path: complex systems justify ecclesiastical hierarchies",
      "This place is for innocence: sitting in Gautam the Buddha Auditorium without spiritual ambition",
      "Relaxing on the river: floating effortlessly with the current of Suchness (*Tathata*)",
      "Enlightenment as the sudden realization that there is nowhere to go, nothing to achieve, and nothing to add"
    ]
  },
  {
    id: "unit-06-disowning-the-past",
    title: "Unit 6: Disowning the Past: Breaking the Generational Karma of Religious Retardation",
    themes: [
      "The psychological courage to disown ancestral heritage, cultural dogmas, and religious conditioning",
      "Why organized religions keep human beings psychologically retarded in childish dependency",
      "The necessary disillusionment: shattering all illusions of external saviors, holy books, and messiahs",
      "Reclaiming individual sovereignty: standing totally alone under the vast sky of existence",
      "The death of borrowed knowledge: when memory burns to ashes, pristine intelligence (*Prajna*) awakens"
    ]
  },
  {
    id: "unit-07-indivisible-reality",
    title: "Unit 7: The Indivisible Reality: Beyond Dualism, Dialectics, and Theological Systems",
    themes: [
      "Reality is indivisible: the false schizophrenia of separating sacred and profane, spirit and matter",
      "The failure of intellectual dialectics: mental logic divides into thesis and antithesis, missing the organic whole",
      "Existence has its own ways: trusting the cosmic Tao rather than imposing human moral judgments",
      "The unity of darkness and light, life and death, joy and sorrow as complementary rhythms",
      "Non-dual vision (*Advaita* / *Sunyata*): seeing the one life dancing in ten thousand transient forms"
    ]
  },
  {
    id: "unit-08-rock-among-waves",
    title: "Unit 8: The Rock Among the Waves: The Witnessing Center Amidst Life's Storms",
    themes: [
      "The metaphor of the rock: the unshakeable witness (*Sakshi*) standing firm while ocean waves crash around it",
      "Watching the storms of emotional turbulence, social chaos, illness, and aging without identification",
      "The distinction between emotional numbness (apathy) and crystalline witnessing (intense presence)",
      "How to remain a rock in the marketplace: participating fully in daily life while anchored in inner silence",
      "The peace that passes all understanding: discovering the immovable center of the cyclone"
    ]
  },
  {
    id: "unit-09-for-no-reason",
    title: "Unit 9: For No Reason At All: Causeless Joy, Celebration, and the Laughing Buddha",
    themes: [
      "Conditional happiness vs. causeless bliss (*Ananda*): conditional happiness is fragile and dependent on external props",
      "Joy for no reason at all: the natural bubbling laughter of consciousness when released from mental burdens",
      "Don’t just accept: rejoice! Moving beyond stoic resignation to ecstatic celebration of existence",
      "The sacred holiness of humor, jokes, and irreverent laughter in the presence of the Master",
      "Why serious saints are spiritually dead: laughter as the purest, most elevated spiritual prayer"
    ]
  },
  {
    id: "unit-10-zorba-buddha-tibetan-diamond",
    title: "Unit 10: Zorba the Buddha and the Tibetan Diamond: The Final Synthesis of Earth and Sky",
    themes: [
      "The culmination of Osho's mature Pune 2 vision: synthesizing Zorba the Greek and Gautam the Buddha",
      "The Tibetan diamond (*Mani*) embedded in the earthly lotus (*Padma*): spirituality anchored in physical vitality",
      "Rejecting monastic life-negation: eating, singing, dancing, loving with Zorba's zest while resting in Buddha's silence",
      "The new human being: whole, integrated, joyful, free from guilt, living in total aesthetic alignment with the cosmos",
      "The final blessing: carry the diamond in your heart and let your life become a garden of blossoming lotuses"
    ]
  }
];

const masterNotes = `# Om Mani Padme Hum: The Sound of Silence: The Diamond in the Lotus — The Mature Pune 2 Masterwork

## Author: Osho (Bhagwan Shree Rajneesh)
### Context: Delivered in Gautam the Buddha Auditorium, Pune, India (December 7, 1987 – January 17, 1988)
### Significance: 33 Mature English Discourses synthesizing Tibetan Mysticism, Zen, and Zorba the Buddha
### Master System: Book Knowledge Reconstruction System (BKRS v2.0)

---

## Executive Summary & Epistemic Orientation

*Om Mani Padme Hum: The Sound of Silence: The Diamond in the Lotus* represents one of the towering pinnacles of Osho’s mature Pune Two era. Delivered over forty-two days between December 7, 1987 and January 17, 1988, inside the vast, marble-floored Gautam the Buddha Auditorium in Pune, this thirty-three discourse cycle marks a momentous philosophical and experiential synthesis. Here, surrounded by thousands of meditators from every continent, Osho resurrects and radically reinterprets the most famous mantra in Asian spiritual history: the ancient Tibetan invocation **Om Mani Padme Hum**.

For centuries, across Tibet, Ladakh, Nepal, Mongolia, and Japan, millions of Buddhist monks and pilgrims have spun prayer wheels and chanted these six syllables with mechanical devotion. Osho sweeps aside the crust of ecclesiastical ritualism and scholastic dogma to reveal the mantra's pure, living esoteric core: **"The sound of silence: the diamond in the lotus."**

The architectural thesis of *Om Mani Padme Hum* rests upon three profound metaphysical pillars:
1. **The Music of OM (*The Sound of Silence*)**: OM is not a verbal sound manufactured by the vocal cords, tongue, and throat. Repeating "Om, Om, Om" verbally is a mechanical psychological trick that produces dull, hypnotic sleep. Real OM is the primordial, unstruck cosmic vibration (*Anahata*) that is heard by the sixth inner sense only when the entire lake of consciousness becomes completely still, devoid of thoughts, memories, and future projections.
2. **The Diamond (*Mani* / *Vajra*)**: The diamond represents the indestructible, unscratchable, eternal nature of witness consciousness (*Sakshi*). Fire cannot burn it, swords cannot cut it, and death cannot touch it.
3. **The Lotus (*Padme*)**: The lotus represents the delicate, vulnerable, fragrant flowering of love, compassion, and earthly beauty. Rooted in the dark mud of the biological pond, the lotus opens its pristine petals to the morning sun without retaining a single drop of mud.

The grand synthesis is achieved when the **Diamond is placed within the Lotus**. If a seeker cultivates only the diamond (ascetic detachment, monastic severity), he becomes hard, cold, and cruel. If he cultivates only the lotus (romantic emotion, sentimentality), he remains fragile, weak, and easily crushed. The whole human being—**Zorba the Buddha**—unites the adamantine strength of the diamond with the tender fragrance of the lotus.

---

\`\`\`
                       THE TIBETAN DIAMOND-LOTUS MATRIX
               ================================================

                    OM: THE PRIMORDIAL SOUND OF SILENCE
                 • Not a verbal chant; trans-linguistic symbol
                 • Heard by the 6 inner senses when mind ceases
                 • The unstruck music (*Anahata*) of existence
                                   │
                                   ▼
                   THE POLAR SYNTHESIS: MANI & PADME
                 ┌─────────────────┴─────────────────┐
                 ▼                                   ▼
          THE DIAMOND (Mani)                  THE LOTUS (Padme)
     • Indestructible witness awareness  • Vulnerable, fragrant love
     • Masculine strength (*Vajra*)      • Feminine receptivity (*Padma*)
     • Unconquerable by death            • Rooted in mud, blooming in sun
     • Transcendental silence            • Earthly celebration and compassion
                 │                                   │
                 └─────────────────┬─────────────────┘
                                   │
                                   ▼
                 "THE DIAMOND RESTS INSIDE THE LOTUS"
                 • Strength without hardness; love without weakness
                 • Earthly roots (Zorba) + Heavenly sky (Buddha)
                                   │
                                   ▼
                   A VERY SIMPLE AND HUMBLE AFFAIR
                 • Demystifying enlightenment into ordinary innocence
                 • Disowning ancestral religious baggage
                 • Causeless joy: laughter for no reason at all
                                   │
                                   ▼
                       THE ROCK AMONG THE WAVES
                 • Living in the marketplace as an unmoved witness
\`\`\`

---

## Complete 10-Unit Knowledge Architecture

### Unit 1: The Music of OM: The Sound of Silence and the Six Inner Senses (Chapter 1)
Delivered on the morning of December 7, 1987, in response to Maneesha's opening inquiry, Osho unveils the true esoteric nature of OM:
- **The Six Inner Senses**: Modern biology recognizes six outer sensory modalities: sight, hearing, smell, taste, touch, and the vestibular sense of balance (located within the inner ear). Exactly parallel to these outer senses, every human being possesses **six corresponding inner senses**. When the outer senses are turned inward in meditation, you begin to see the uncreated light, touch the immaterial texture of consciousness, feel absolute inner equilibrium, and hear the music of silence.
- **The Trans-Linguistic Symbol**: OM is never written alphabetically in any Asian language. In Sanskrit, Pali, Prakrit, and Tibetan, it is represented by a sacred hieroglyphic symbol. Why? Because the ancient seers realized that OM is not part of human language; it does not belong to the mundane world of words, grammar, and dictionaries. It is the phonetic approximation of the existential vibration of the universe.
- **Hearing, Not Saying**: Osho issues a crucial operational warning: **Do not say OM!** If you say OM, your vocal cords are making physical noise, which merely stimulates the brain and creates a superficial hypnotic trance. You must become utterly calm, quiet, and receptive like an empty radio receiver. When all mental chatter subsides, OM reveals itself all around you—a subtle, celestial dance of soundless sound.

### Unit 2: The Diamond in the Lotus: Indestructible Consciousness in the Fragrant Heart (Chapters 2–4)
Osho penetrates the dual metaphors of the Tibetan phrase *Mani Padme*:
- **The Diamond (*Mani* / *Vajra*)**: A diamond is the hardest substance on earth; it can cut all other stones, but nothing can scratch it. In spiritual psychology, the diamond symbolizes pure witness consciousness (*Sakshi*). The physical body can be injured, diseased, aged, and cremated; the emotional weather changes constantly; the intellect fluctuates between doubt and certainty. But the witness that observes all these changes is immortal, unscratchable, and indivisible.
- **The Lotus (*Padme*)**: The lotus is the supreme floral emblem of the East. It grows out of the filthiest, foulest swamp mud, yet when it blooms upon the water's surface, its velvety petals remain completely untouched by water or mud. It represents the spiritual heart (*Anahata*): living in the messy, chaotic world of family, career, and human relationships, yet remaining untainted by attachment or bitterness.
- **The Balance of Strengths**: If you cultivate only the diamond, you become a stone-faced ascetic monk—pure, disciplined, but utterly sterile and cold. If you cultivate only the lotus, you become a sentimental romantic—sweet, sensitive, but emotionally fragile and easily shattered by life’s storms. The diamond must rest inside the lotus: adamantine meditative stillness encased in radiant love and compassion.

### Unit 3: Tibet's Sacred Contribution: The Inward Exploration of an Entire Civilization (Chapters 5–7)
Osho offers a magnificent historical evaluation of Tibetan civilization:
- **The Inward Civilization**: In the entire history of planet Earth, Tibet stands as the solitary nation that devoted all its resources, intellectual genius, and political organization to a single enterprise: **the exploration of human consciousness.** While the West directed its genius outward to conquer nature, build empires, and develop physical technology, Tibet turned inward to conquer the mind and explore the mysteries of death and rebirth.
- **The Tragedy of Tibet**: Osho laments the brutal invasion and destruction of Tibet by Communist China in the 1950s. An unarmed, peaceful civilization of meditators, monasteries, and ancient mystery schools was crushed by tanks, artillery, and materialistic ideology. It represents the modern world's tragic triumph of brutal physical force over subtle spiritual wisdom.
- **Rescuing the Core from Monastic Degeneration**: While honoring Tibet's genius, Osho does not romanticize its historical flaws. Tibetan Lamaism had also become encrusted with feudal superstition, priestcraft, rigid monastic hierarchies, and dark rituals. Osho strips away this medieval baggage, preserving only the pristine jewels of Mahamudra, Dzogchen, and the non-dual science of consciousness.

### Unit 4: The Fallacy of Verbal Chanting: Listening to the Unstruck Sound vs. Mechanical Repetition (Chapters 8–10)
Osho mounts a devastating critique of mechanical mantra chanting:
- **The Psychology of Autohypnosis**: For millennia, religious gurus have handed seekers mantras, telling them: *"Chant this sacred formula ten thousand times a day and you will attain liberation."* Osho exposes this as a psychological fraud:
  - If you repeat any word continuously—"Om, Om, Om" or "Coca-Cola, Coca-Cola, Coca-Cola"—the constant repetition creates a monotonous rhythmic groove in the brain's cerebral cortex.
  - The brain cells become exhausted and numb. A dull, pleasant drowsiness descends upon the practitioner.
  - Seekers mistake this self-induced hypnotic stupor for spiritual peace! In reality, it is merely a non-chemical tranquilizer.
- **Struck Sound (*Ahat*) vs. Unstruck Sound (*Anahat*)**:
  - All ordinary sounds are *Ahat*—produced by friction, by two objects striking together (hands clapping, vocal cords vibrating against air). Such sound has a beginning and an end; it is created and destroyed.
  - *Anahat* means the unstruck sound: the primordial hum of cosmic existence that exists prior to any physical collision. You cannot produce it; you can only discover it by dropping all inner noise.
- **The Receptive Ear**: The spiritual discipline is not speech, but **listening (*Shravana*)**. True meditation is learning to sit so completely still that even the whisper of a falling leaf sounds like thunder. In that listening, the unstruck OM reverberates.

### Unit 5: A Very Simple and Humble Affair: Demystifying Enlightenment into Ordinary Innocence (Chapters 11–13)
In these delightfully refreshing discourses, Osho demolishes the pompous, miraculous mythology surrounding enlightenment:
- **The Disease of Spiritual Ambition**: The ego is addicted to drama and difficulty. If you tell an ambitious seeker that enlightenment requires standing on one leg for twelve years in a freezing cave, he will eagerly run to the cave! Why? Because severe ascetic feats feed the ego’s desire to feel heroic, superior, and extraordinary.
- **Enlightenment is Utterly Ordinary**: Osho insists that awakening is **a very simple and humble affair**. It is not an exotic circus of halos, levitation, third-eye fireworks, or celestial trumpets. Enlightenment is simply the recovery of your natural, uncorrupted biological innocence!
- **This Place is for Innocence**: Addressing the assembly in Gautam the Buddha Auditorium, Osho declares that his commune is not a theological university or a solemn monastery. It is a garden of innocence. 
- **The River Metaphor**: You do not have to swim upstream against the current of life. Float on the river! Let the current carry you toward the ocean. The moment you drop the struggle to become someone special, you discover that you are already divine in this immediate breath (*Tathata*).

### Unit 6: Disowning the Past: Breaking the Generational Karma of Religious Retardation (Chapters 14–17)
Osho challenges disciples to perform the ultimate act of psychological courage:
- **The Conspiracy of Heritage**: Society conditions a child before his critical intelligence can awaken. A child born in India is baptized a Hindu; a child born in Rome is baptized a Catholic; a child born in Riyadh is baptized a Muslim. You inherit the prejudices, enmities, guilts, and superstitions of your dead ancestors. Osho calls this **generational retardation**.
- **Disowning the Past**: Spiritual rebirth requires **disowning your past**. You must have the courage to say: *"I am not an Indian, I am not an American, I am not a Christian, I am not a Buddhist. I am an unconditioned spark of cosmic consciousness!"*
- **The Value of Disillusionment**: Most people live inside cozy, comforting spiritual fairy tales (God will take care of me; my holy book has all the answers). Osho insists that total disillusionment is the greatest blessing that can happen to a seeker. When your illusions are shattered by the sledgehammer of truth, you feel terrified and naked. But in that nakedness, borrowed dogmas die, and your original intelligence (*Prajna*) is born.

### Unit 7: The Indivisible Reality: Beyond Dualism, Dialectics, and Dogma (Chapters 18–21)
Osho expounds upon the profound non-dual ontology underlying Tibetan mysticism:
- **The Schizophrenia of Dualism**: Traditional religions have split reality into two warring camps: God vs. the Devil, Spirit vs. Matter, Heaven vs. Earth, Sacred vs. Profane. This artificial division has produced a schizophrenic humanity that feels guilty whenever it enjoys physical food, sex, comfort, or beauty.
- **Reality is Indivisible**: Existence is an organic, unbroken continuum. Darkness is not the enemy of light; darkness is simply the resting phase of light. Death is not the enemy of life; death is the peaceful womb from which new life emerges. Winter is not the enemy of spring; winter prepares the roots for the spring bloom.
- **Existence Has Its Own Ways**: Stop trying to impose your petty human moral rules upon the infinite cosmos. Existence does not follow your moralistic prejudices. The rose has thorns; the lion hunts the deer; the cyclone sweeps the ocean. Accept the whole with total Suchness (*Tathata*). When you stop dividing reality, your inner conflict ends, and non-dual tranquility descends.

### Unit 8: The Rock Among the Waves: The Witnessing Center Amidst Life's Storms (Chapters 22–25)
Osho introduces the powerful meditative archetype of the **Rock Among the Waves**:
- **The Stormy Ocean of Samsara**: Daily human life in the modern world is an ocean of turbulent, unpredictable waves: economic crises, relationship breakups, physical sickness, political instability, and social chaos. Most people are like corks bobbing helplessly on the surface, tossed and battered by every passing wave.
- **The Immovable Rock**: Deep within your being lies an eternal rock of witness consciousness (*Sakshi*). When huge, violent waves crash against an ocean rock, the waves shatter into foam and spray, while the rock remains utterly unmoved, serene, and rooted in the earth.
- **Participating Without Losing the Center**: Being a rock does not mean becoming a cold, unfeeling zombie. You love, you work, you laugh, you cry, you engage in the human drama with 100% totality. But deep down, you remain aware that you are the watcher of the drama, not the actor. The body acts, the mind thinks, the emotions surge, but the witness within remains undisturbed, smiling like a Buddha in the center of the storm.

### Unit 9: For No Reason At All: Causeless Joy, Celebration, and the Laughing Buddha (Chapters 26–29)
In these ecstatic discourses, Osho elevates causeless joy as the supreme mark of enlightened consciousness:
- **The Trap of Causality**: In ordinary human life, every feeling has an external cause: you are happy because you won money, because someone praised you, or because you bought a new house. But Osho points out the fatal flaw in conditional happiness: **if happiness has a cause, it is temporary, fragile, and outside your control.** The moment the cause is removed, you plunge back into misery.
- **Joy for No Reason At All**: Authentic spiritual bliss (*Ananda*) is completely causeless! You wake up in the morning and laugh from the very core of your belly—not because you received good news, but simply because you are alive, because the morning breeze is cool, because your heart is beating, because existence is! Causeless joy cannot be stolen by any thief or destroyed by any misfortune.
- **The Holy Laughter**: Traditional religions depict their prophets and saints with solemn, mournful, serious faces. Osho calls seriousness a spiritual disease! A person who cannot laugh with full abandon has a dead soul. Laughter is the highest prayer, the most profound meditation, and the greatest therapy. In Gautam the Buddha Auditorium, Osho tells jokes every morning to shatter the seekers' spiritual pomposity, bringing them back to joyful, laughing presence.

### Unit 10: Zorba the Buddha and the Tibetan Diamond: The Final Synthesis of Earth and Sky (Chapters 30–33)
The cycle reaches its majestic grand finale in the universal declaration of **Zorba the Buddha**:
- **The Historical Schism**: For five thousand years, humanity has been divided between two incomplete, half-human archetypes:
  - *Zorba the Greek*: Eats, drinks, dances, makes love, and enjoys the physical creation with boundless passion, but lacks meditative awareness, remaining superficial and haunted by death.
  - *Gautam the Buddha*: Sits in absolute meditative stillness, purity, and transcendence, but denies the body, rejects physical pleasure, and starves his earthly senses.
- **The Final Tibetan Synthesis**: *Om Mani Padme Hum* represents the ultimate meeting of Zorba and Buddha:
  - The **Lotus** (*Padma*) is Zorba: rooted in the earthly mud, sensual, fragrant, celebrating the sunshine, wine, and dance of the physical world.
  - The **Diamond** (*Mani*) is Buddha: indestructible, unshakeable, luminous, resting in eternal silence and transcendent consciousness.
- **The Birth of the Whole Human Being**: You do not have to choose between the earth and the sky! Live with your feet firmly planted on the earth like Zorba, relishing food, love, art, and laughter; and live with your head touching the stars like Buddha, resting in pristine witness consciousness. When the diamond rests inside the lotus, the human experiment reaches its supreme fulfillment.

---

## Systematic Comparative Matrix: Classical Tibetan Monasticism vs. Osho's "Om Mani Padme Hum"

| Dimension | Classical Tibetan Lamaism & Monasticism | Osho’s "Om Mani Padme Hum" (Pune 2, 1987–88) |
| :--- | :--- | :--- |
| **Philosophical Base** | Monastic Mahayana/Vajrayana scholasticism, monastic vows, and karma. | Radical non-dual Zen synthesis; deconstruction of all clerical authority. |
| **The Practice of OM** | Verbal, repetitive recitation with prayer wheels and vocal chanting. | Unstruck, soundless vibration (*Anahata*) heard only in passive silence. |
| **The Metaphor of Mani** | Esoteric jewel visualized in deity yoga (*Yidam*) and complex mandalas. | The indestructible, uncreated witness (*Sakshi*) present in every breath. |
| **The Metaphor of Padme** | Lotus throne of transcendent Buddhas; purity rising above samsara. | The tender, vulnerable human heart celebrating earthly love and compassion. |
| **View of the Body** | Monastic asceticism; renunciation of family; suppression of sexuality. | Total celebration of biological innocence; Zorba the Buddha; Tantric harmony. |
| **Social Organization** | Hierarchical Lamaist theocracy; guru idolatry; formal monastic robes. | Egalitarian commune of free meditators; Master as a temporary mirror. |
| **Tone of Teaching** | Serious, solemn, liturgical ceremonies, prayers, and prostrations. | Irreverent humor, daily jokes, causeless laughter, and ecstatic dance. |
| **Ultimate Destination** | Rebirth in the Pure Land (*Sukhavati*) or escape into static Nirvana. | Total living presence in the here-now; the diamond flowering in the lotus. |

---

## Appendix A: Chronological Discourse Concordance (Pune 2, Dec 7, 1987 – Jan 17, 1988)

Below is the thematic concordance of the 33 discourses comprising *Om Mani Padme Hum*:

- **Discourses 1–3 (Dec 7–9, 1987)**: *The Music of OM; A Very Simple and Humble Affair; This Place is for Innocence.* The six inner senses; hearing vs. chanting OM; demystifying spiritual ambition; the commune as a sanctuary of uncorrupted innocence.
- **Discourses 4–7 (Dec 10–13, 1987)**: *Never Meditate Over Something; Relax on the River; Don’t Just Accept: Rejoice!; Time to be Completely Disillusioned.* Deconstructing mental meditation; floating with Suchness (*Tathata*); why stoic acceptance is dead; the liberating sledgehammer of disillusionment.
- **Discourses 8–10 (Dec 14–16, 1987)**: *Aha!; These Games Keep You Retarded; We Disown Our Past.* The sudden explosion of realization (*Aha!*); how organized religions infantilize the human spirit; breaking free from ancestral and national heritage.
- **Discourses 11–14 (Dec 17–20, 1987)**: *The Very Nature of Things; Existence Has Its Own Ways; Reality is Indivisible; A Rock Among the Waves.* Trusting the cosmic Tao; non-dual wholeness beyond moralism; the witness standing unshakeable amidst societal storms.
- **Discourses 15–18 (Dec 21–24, 1987)**: *For No Reason at All; The Indestructible Diamond; The Fragrant Lotus; The Marriage of Mani and Padme.* Causeless joy (*Ananda*); defining the diamond witness (*Vajra*); the vulnerability of the heart; integrating strength and tenderness.
- **Discourses 19–23 (Dec 25–29, 1987)**: *The Tragedy of Tibet; Rescuing the Inward Civilization; The Sins of Monasticism; Beyond Deity Yoga.* Historical evaluation of Tibetan spiritual culture; Chinese invasion; stripping away Lamaist superstition; direct pointing to no-mind.
- **Discourses 24–28 (Dec 30, 1987 – Jan 5, 1988)**: *The Primordial Unstruck Hum; Listening as Meditation; The Failure of Autohypnosis; The Great Laughter.* Why mantra repetition numbs the brain; the art of *Shravana*; jokes as Zen devices (*Upayas*); laughter as supreme prayer.
- **Discourses 29–33 (Jan 6–17, 1988)**: *The Center of the Cyclone; The Manifesto of Zorba the Buddha; The Diamond in the Lotus; The Final Homecoming.* Reconciling earth and sky; living as an integrated householder-mystic; carrying the diamond into the marketplace.

---

## Appendix B: Comprehensive Glossary of Core Terms in *Om Mani Padme Hum*

- **Om (ॐ)**: The trans-verbal, unstruck sound of cosmic existence (*Anahata*); heard by the inner senses when mental associations completely cease.
- **Mani (मणि)**: The jewel or diamond; the indestructible, immortal center of witness consciousness (*Sakshi*) that survives physical death.
- **Padme (पद्मे)**: "In the lotus"; the heart center blooming out of the mud of worldly existence, remaining untainted by attachment.
- **Hum (हूँ)**: The seed syllable (*Bija*) of integration, grounding, and explosive realization; bridging the unmanifest void with manifest creation.
- **Vajra (वज्र)**: The adamantine thunderbolt or diamond; representing the unyielding firmness of awakened truth.
- **Shravana (श्रवण)**: The spiritual art of passive, receptive, non-evaluative listening; tuning the human antenna to the silent music of the cosmos.
- **Tathata (तथता)**: Buddhist Suchness; relaxing into the natural flow of reality without mental resistance or desire to alter circumstances.
- **Zorba the Buddha**: Osho's unified human archetype, uniting the sensual zest and artistic vitality of Zorba with the profound meditative silence of Buddha.

---

## Appendix C: Selected Disciple Inquiries & Master Diagnoses from Gautam the Buddha Auditorium

During the morning discourses, disciples submitted profound existential inquiries to Osho’s podium:

### 1. On Hearing the Inner Sound of OM vs. Imagining It
- **Disciple Inquiry**: *"Beloved Osho, when I sit in silent meditation, I sometimes hear a faint, high-pitched ringing sound like crickets in the night or a distant flute. Is this the real music of OM, or is it merely my biological nervous system and tinnitus?"*
- **Osho's Diagnosis**: *"The mind is very cunning; it can project whatever you desire! But there is a clear, infallible scientific criterion to distinguish between neurological tinnitus and the authentic unstruck sound of OM:
  - If it is physical tinnitus or nervous system buzzing, your mind remains restless, agitated, and full of thoughts while hearing it. Tinnitus irritates the brain; it does not transform your being.
  - The authentic sound of OM arises ONLY when thinking has completely ceased! You cannot hear it as long as there is a single thought rippling across the lake of consciousness. And the moment OM reveals itself, a profound wave of cool, unearthly peace, nectar, and joy washes over your entire organism. It does not feel like a noise inside your ears; it feels like the whole universe has become a symphony around you. Do not search for the sound; search for the silence. When silence is 100% complete, OM takes care of itself."*

### 2. On the Fear of Becoming Hard and Callous Through Detachment
- **Disciple Inquiry**: *"You tell us to be an unshakeable rock among the waves, an indestructible diamond that nothing can scratch. But when I practice this detachment, I notice that I feel less empathy for my suffering friends. Am I becoming a cold stone?"*
- **Osho's Diagnosis**: *"You have completely forgotten the second half of the mantra: you have grasped the Diamond (*Mani*), but you have dropped the Lotus (*Padme*)! An isolated diamond is a hard, sharp, deadly stone. That is the traditional monastic error: the monk retreats to a cave, becomes as hard as granite, and looks down with contempt upon the ordinary human world. That is not enlightenment; that is psychological armoring! The diamond must be placed INSIDE the lotus. The diamond gives you inner invulnerability so that death and fear cannot touch you; the lotus keeps your heart tender, sweet, fragrant, and open to the tears and laughter of humanity. The authentic master has the strength of an emperor and the softness of a mother. Cultivate compassion alongside your witnessing!"*

### 3. On Why the Master Tells Jokes in Buddha Hall
- **Disciple Inquiry**: *"Beloved Osho, sometimes you speak on the most sublime, heart-melting mysteries of the Upanishads and Zen, and then suddenly you tell a dirty joke about Ronald Reagan, a drunken Irishman, or a Catholic priest! Why do you shock us with jokes in a sacred meditation temple?"*
- **Osho's Diagnosis**: *"I tell jokes precisely because this is a sacred temple, and I want to save you from the deadly poison of spiritual seriousness! Seriousness is a disease of the ego. When you listen to sublime philosophical truths, your mind begins to build high religious towers; you become pious, grave, and holy. That holy gravity is a trap! A joke is a sudden Zen stick on your head. When a joke arrives, your intellectual understanding collapses; the logical mind is short-circuited. You cannot laugh through the intellect; laughter erupts spontaneously from the belly (*Hara*). In that sudden burst of laughter, all your spiritual pretension vanishes, and for a few seconds, you are pure, innocent, wide-awake consciousness. Laughter brings you back to the earth. I will never allow you to become sour, fasting saints; I want you to be laughing Buddhas!"*

---

## Appendix D: The Tibetan Sound & Silence Meditation Protocol

Preserving the contemplative methods articulated in *Om Mani Padme Hum*, this protocol structures daily practice for modern seekers:

### Phase 1: Cleansing the Inner Auditory Channel (Morning)
- **Time**: 06:30 AM – 07:30 AM.
- **Stage 1 (15 min) - Silent Dynamic Stillness**: Sit upright in a comfortable posture. Scan the body and release all tension from the jaw, ears, temples, and neck.
- **Stage 2 (15 min) - External Sound Absorption**: Open the ears wide to the ambient acoustic landscape (traffic, distant sirens, wind in trees, barking dogs). Listen to all sounds without labeling, judging, or preferring one over another. Hear all sounds as a single cosmic orchestra.
- **Stage 3 (15 min) - Tuning to the Gap Between Sounds**: Notice the silent space that surrounds every sound. Just as black words are written on white paper, sound occurs upon the background of silence. Shift your attention from the sound to the silence out of which it arises and into which it dissolves.
- **Stage 4 (15 min) - The Unstruck Resonance**: Rest in complete immobility. Listen inward to the unstruck vibration of the body and the space of awareness.

### Phase 2: The Diamond Center Anchor (*Hara* & Heart) (Midday)
- **Time**: 12:00 PM – 12:30 PM.
- Place the right hand over the lower abdomen (*Hara*) and the left hand over the heart (*Anahata*).
- Feel the indestructible diamond of awareness resting firmly in the belly, while the fragrant lotus of warmth radiates from the chest.
- Breathe slowly, holding the awareness: *"I am the diamond in the lotus; strong within, tender without."*

### Phase 3: The Rock Among the Waves (Afternoon Marketplace Practice)
- Throughout your working day, whenever stress, conflict, or urgent deadlines arise, practice the **Rock Stance**:
  - Keep the spine straight, take three deep abdominal breaths, and witness the flurry of activity around you.
  - Remind yourself: *"The waves may crash, but the rock remains unmoved. I am the witness, not the storm."*

### Phase 4: Evening Laughter & Savasana Dissolution (Dusk)
- **Time**: 07:00 PM – 08:00 PM.
- **Stage 1 (15 min) - Spontaneous Laughter**: Sit comfortably and begin to smile. Let the smile expand into a giggle, and let the giggle explode into full-bellied laughter. Laugh at your worries, laugh at your spiritual ambitions, laugh at the absurdity of the cosmic play.
- **Stage 2 (30 min) - Seated Silent Witnessing**: Sit in absolute stillness, allowing the joyful energy of laughter to settle into profound meditative silence.
- **Stage 3 (15 min) - Savasana Dissolution**: Lie flat on your back, letting the individual drop of consciousness slip silently into the boundless ocean of existence.

---

## Appendix E: Comparative Matrix: Primary Mantras & Non-Dual Realizations Across Traditions

| Tradition / Path | Primary Mantra / Formula | Conventional Monastic Usage | The Underlying Deception | Osho's Living Realization (*Om Mani Padme Hum*) |
| :--- | :--- | :--- | :--- | :--- |
| **Tibetan Vajrayana** | *Om Mani Padme Hum* | Chanted millions of times; turned on mechanical prayer wheels. | Vocal mechanical autohypnosis producing pleasant mental numbness. | Unstruck sound of silence heard when thinking stops; diamond in the lotus. |
| **Advaita Vedanta** | *Aham Brahmasmi* ("I am Brahman") | Recited intellectually by scholars as an ontological affirmation. | The ego appropriates the statement: "I am God" inflates spiritual pride. | The "I" must completely vanish; only Brahman remains. No claiming ego. |
| **Zen Buddhism** | *Mu* (The Void / No-Thing) | Wrenching intellectual koan contemplation to break rational logic. | Seekers strain the brain seeking an intellectual answer to the koan. | The sudden collapse of seeking into ordinary innocence; a hearty laugh (*Aha!*). |
| **Sufism** | *La Ilaha Illallah* ("No God but God") | Rhythmic vocal remembrance (*Zikr*) accompanied by spinning dance. | Becoming dependent on the external presence of the Sheikh or brotherhood. | Dissolving into the cosmic beloved; love as an unaddressed state of being. |
| **Hasidic Mysticism** | *Shema Yisrael* / Devekut | Devotional clinging to the divine presence through ecstatic prayer. | Trapped in theological monotheism and historical chosen-people identity. | Ecstatic causeless joy (*Simcha*); celebrating the divine spark in all things. |

---

## Appendix F: The 10 Principles of Ordinary Innocence in Modern Daily Life

1. **Drop the Halo**: The desire to appear holy, pure, or spiritually advanced is the ego's subtlest trick. Be ordinary, simple, and transparent.
2. **Listen to the Silence**: In conversations, listen not only to the words spoken, but to the pregnant pause between phrases.
3. **Keep the Diamond in the Lotus**: Cultivate immovable inner witnessing (*Mani*), but keep your emotional heart (*Padme*) tender, compassionate, and kind.
4. **Disown Ancestral Guilt**: Refuse to carry the historical enmities, religious dogmas, and cultural prejudices of your dead ancestors.
5. **Float with the River**: When plans fail and obstacles arise, stop fighting the current. Practice *Tathata* (Suchness) and discover what existence is teaching.
6. **Be a Rock in the Marketplace**: Let the storms of workplace deadlines, traffic, and social noise crash around you while remaining still at the center.
7. **Laugh for No Reason At All**: Begin each morning with a belly laugh. Laughter cleanses the biological organism and breaks intellectual rigidity.
8. **Honor the Ordinary**: Cleaning a kitchen, typing an email, or greeting a friend can be as sacred as sitting in a golden temple if done with total presence.
9. **Never Say OM Verbally**: Do not seek to manufacture spiritual noise. Create an inner vacuum of total stillness, and let the cosmic OM reveal itself.
10. **Live as Zorba the Buddha**: Celebrate food, laughter, and human love with Zorba's zest, while resting in the deathless silence of Buddha's diamond.
`;

const knowledgeUnitsJson = JSON.stringify(knowledgeUnits, null, 2);
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), knowledgeUnitsJson, 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

const proseHtml = marked.parse(masterNotes);

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BKRS Master Codex</title>
  <link rel="stylesheet" href="../../css/reader-shell.css">
</head>
<body class="editorial-cream">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-left">
        <a href="../../index.html" class="back-link">← Catalog</a>
        <div class="breadcrumb">
          <span class="category-badge">${category}</span>
          <span class="separator">/</span>
          <span class="book-title-short">Om Mani Padme Hum</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: 33-Discourse Journey</button>
      <button class="view-btn" data-view="map">View B: Tibetan Diamond Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Silence & Laughter Engine</button>
    </div>

    <main class="reader-content">
      <div id="view-journey" class="view-panel active">
        <article class="prose-content">
          <h1>${title}</h1>
          <p class="byline"><strong>Author:</strong> ${author} | <strong>System:</strong> BKRS v2.0 Replacement-Grade Codex</p>
          <hr>
          ${proseHtml}
        </article>
      </div>

      <div id="view-map" class="view-panel">
        <div class="knowledge-map">
          <h2>Tibetan Diamond Blueprint: Om Mani Padme Hum</h2>
          <p class="subtitle">Complete philosophical architecture translating Osho's 33 mature Pune 2 discourses delivered between December 1987 and January 1988 across 10 foundational units.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Formulations & Theses:</strong></p>
                  <ul>
                    ${u.themes.map(t => `<li>${t}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="view-experience" class="view-panel">
        <div class="analytical-engine">
          <h2>The Sound of Silence, Diamond & Laughter Engine</h2>
          <div class="engine-section">
            <h3>Operational Maxims from Gautam the Buddha Auditorium</h3>
            <div class="formula-box">
              <p><strong>1. The Music of OM:</strong> Stop repeating OM with your vocal cords. OM is the unstruck vibration of cosmic silence heard by the inner senses when mental chatter completely ceases.</p>
              <p><strong>2. The Diamond in the Lotus:</strong> The diamond is the indestructible witness (*Sakshi*); the lotus is the vulnerable, fragrant heart. Combine strength with sweetness, wisdom with love.</p>
              <p><strong>3. The Rock in the Waves:</strong> You are not a cork tossed by life's turbulent storms. Stand as an immovable rock in the marketplace, witnessing the waves crash while remaining centered in silence.</p>
              <p><strong>4. Causeless Joy:</strong> Laugh for no reason at all. Seriousness is a spiritual disease; humor and causeless celebration are the highest, most authentic prayers in existence.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="reader-footer">
      <p>Intellectualist Knowledge System &bull; BKRS v2.0 Standard &bull; Replacement-Grade Distillation</p>
    </footer>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${htmlContent.length} chars)`);
