const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-power-of-love-osho');
fs.mkdirSync(outDir, { recursive: true });

const title = "The Power of Love";
const author = "Osho";
const category = "Philosophy / Psychology of Love";

const knowledgeUnits = [
  {
    id: "unit-01-essential-fire",
    title: "Unit 1: The Essential Fire: Love as the Supreme Reality Between Life and Death",
    themes: [
      "The foundational thesis: Between life and death, the most important phenomenon is love",
      "Why love energy is the sole antidote to humanity's suicidal march toward nuclear self-destruction",
      "Love as the fountain of all authentic creativity: disconnected from love, human energy turns toxic",
      "The tragic paradox: modern society teaches how to fight, compete, and kill, but never how to love",
      "The spiritual mission: releasing the blocked sources of the heart to ignite the flame of love"
    ]
  },
  {
    id: "unit-02-radical-reversal-love-is-god",
    title: "Unit 2: The Radical Reversal: 'Love is God' and the Unaddressed State of Being",
    themes: [
      "The critical semantic divergence: Jesus says 'God is love'; Osho asserts 'Love is God'",
      "Why 'God is love' reduces love to a mere secondary adjective of an unprovable theological personage",
      "'Love is God' dissolves the external deity: the entire cosmos is made of the living substance of love",
      "Love unaddressed: moving beyond relational contracts ('I love you') to a permanent state of being ('I am loving')",
      "Breathing love: loving whether someone is present or sitting entirely alone in an empty room"
    ]
  },
  {
    id: "unit-03-architecture-of-attraction",
    title: "Unit 3: The Architecture of Attraction: Masculine and Feminine Energies Beyond Biology",
    themes: [
      "Deconstructing romantic attraction: not merely biology, but the cosmic polarity of Yin and Yang",
      "The male psychology: linear, aggressive, intellectual, goal-oriented, conquering",
      "The female psychology: circular, receptive, intuitive, nesting, celebrating the immediate moment",
      "The internal polarity: every human being contains both the inner man and the inner woman",
      "Alchemical marriage: true spiritual maturity occurs when the internal polarities harmonize"
    ]
  },
  {
    id: "unit-04-pathology-of-relating",
    title: "Unit 4: The Pathology of Relating: Deconstructing the Domestic Contract and Needy Beggars",
    themes: [
      "The pathology of romantic marriage: turning a living, flying bird of paradise into a legal cage",
      "The model of two beggars: two empty, needy individuals demanding that the other complete their emptiness",
      "Why romantic contracts inevitably breed suspicion, surveillance, possessiveness, and boredom",
      "The transition from possessive 'relationship' (static noun) to conscious 'relating' (flowing verb)",
      "The emperor model: sharing abundance without demanding guarantees or ownership"
    ]
  },
  {
    id: "unit-05-imprisoned-by-mind",
    title: "Unit 5: Imprisoned by the Mind: The Calculating Intellect and the Fear of Vulnerability",
    themes: [
      "Why the calculating intellect fears love: love demands surrender of control and strategic power",
      "Psychological armoring: how past rejections, childhood betrayals, and social fears build defensive walls",
      "The cowardice of playing safe: choosing comfortable, dead security over terrifying, ecstatic intimacy",
      "Vulnerability as supreme courage: opening the chest to existence, risking heartbreak to experience the divine",
      "The collapse of the ego's armor: allowing the tears of gratitude and longing to dissolve mental pride"
    ]
  },
  {
    id: "unit-06-way-of-the-heart",
    title: "Unit 6: The Way of the Heart: Transitioning from the Head to the Feeling Center",
    themes: [
      "The geography of human consciousness: Sex center (biology), Head center (logic), Heart center (feeling)",
      "The heart as the golden bridge connecting the earth of animal instincts with the sky of meditation",
      "The distinction between emotional sentimentality (cheap drama) and deep heart resonance (*Anahata*)",
      "Dropping the analytical judge: perceiving people, nature, and events through feeling-intuition",
      "Living from the heart: moving from skepticism, suspicion, and critique to trust, openness, and warmth"
    ]
  },
  {
    id: "unit-07-transmutation-sex-into-prayer",
    title: "Unit 7: The Transmutation of Sex into Prayer: Ascending the Chakras through Love",
    themes: [
      "Sex as the crude biological root; love as the flowering; prayer as the invisible divine fragrance",
      "Why repressing sex poisons the heart: you cannot build a temple by blowing up the foundation",
      "Tantric transformation: moving from hurried, goal-oriented biological friction to meditative communion",
      "The seven chakras: the ascending ladder of life-energy from Muladhara (root) to Sahasrara (crown)",
      "When love becomes so deep and silent that bodily contact dissolves into pure energetic prayer"
    ]
  },
  {
    id: "unit-08-purest-power",
    title: "Unit 8: Love as the Purest Power: The Spiritual Antidote to Global Destruction",
    themes: [
      "The false power of violence, weapons, and coercion vs. the effortless soul-force of pure love",
      "Why tyrants and political dictators are inwardly terrified of lovers: love cannot be enslaved or mobilized for war",
      "Compassion for the destructive: why monsters like Adolf Hitler missed love and curdled into poisonous rage",
      "The love explosion as the only viable biological and planetary survival strategy against nuclear madness",
      "Creating fields of love: how conscious communal brotherhood alters the psychic atmosphere of the earth"
    ]
  },
  {
    id: "unit-09-solitary-beloved",
    title: "Unit 9: The Solitary Beloved: Why Authentic Love Requires Profound Aloneness (Kaivalya)",
    themes: [
      "The vital distinction between loneliness (the painful absence of the other) and aloneness (the glorious presence of oneself)",
      "Why a person who cannot stand his own company can never truly love another",
      "Meditation as the indispensable foundation of love: finding your own inner treasure before relating",
      "Love and freedom as inseparable twins: giving the beloved total space to be themselves without conditions",
      "Two trees growing side by side: sharing the same earth and sky, yet not overshadowing one another"
    ]
  },
  {
    id: "unit-10-oceanic-dissolution",
    title: "Unit 10: The Oceanic Dissolution: When Lover and Beloved Melt into Existence",
    themes: [
      "The ultimate mystical culmination of love: the drop dissolves into the cosmic ocean",
      "Beyond dualistic relating: when love becomes so total that the lover, the beloved, and the act of loving merge",
      "Love as Samadhi: the experience of timelessness, egolessness, and absolute boundary dissolution",
      "God not as a creator in the sky, but as the quality of existence experienced when the heart is wide open",
      "The final blessing: walk as an embodiment of love; transform your life into an unending festival of gratitude"
    ]
  }
];

const masterNotes = `# The Power of Love: The Architecture of the Heart, Freedom, and Mystical Dissolution

## Author: Osho (Bhagwan Shree Rajneesh)
### Core Treatise: *The Power of Love* (St. Martin's Press Edition)
### Foundational Themes: Love is God, The Unaddressed State of Being, Beggars vs. Emperors, The Seven Chakras, and Aloneness
### Master System: Book Knowledge Reconstruction System (BKRS v2.0)

---

## Executive Summary & Epistemic Orientation

*The Power of Love* constitutes Osho’s most refined, uncompromising, and psychologically penetrative exposition on the central mystery of human life. Delivered with poetic beauty and razor-sharp clinical precision, Osho begins with an absolute existential axiom: **"Between life and death, the most important thing that can happen to a man or to a woman is love. And love has many manifestations: meditation is one of the manifestations of love."**

Modern technological civilization has perfected instruments of destruction, competition, economic exploitation, and warfare, while reducing the art of love to commercialized sentimentality, sexual consumerism, and suffocating legal contracts. Humanity sits like a foolish child playing with matches in a room filled with explosives: unless a massive **love explosion** occurs on earth to transmute the subconscious rage of modern man, nuclear and ecological self-annihilation are mathematically inevitable.

At the core of Osho’s metaphysics of love lies a radical linguistic and theological revolution. While Jesus famously declared *"God is love,"* Osho reverses the formulation: **"Love is God."** In the traditional Christian formulation, love is merely one secondary attribute among many belonging to an anthropomorphic, judging celestial monarch. In Osho’s formulation, the fictitious theological God is completely dissolved: **love itself is the ultimate fabric of cosmic existence.** 

Furthermore, Osho rescues love from the claustrophobia of romantic coupledom. Love is not a relationship; love is an **unaddressed state of being**. Just as a flower does not wait for a king or a beggar to pass by before releasing its fragrance, an awakened human being radiates love constantly—whether surrounded by lovers or sitting entirely alone in an empty room. To reach this exalted state, one must traverse the three-tier ladder of consciousness: from the biological earth of the sex center (*Muladhara*), through the feeling resonance of the heart center (*Anahata*), into the pristine, solitary silence of meditation (*Sahasrara*).

---

\`\`\`
                         THE METAPHYSICS OF THE HEART
                 =============================================

                      THE CORE AXIOM: "LOVE IS GOD"
                 • Theological God dissolved into cosmic existence
                 • Love is not a relationship; love is a state of being
                 • Love unaddressed: breathing love like air
                                   │
                                   ▼
                   THE THREE TIERS OF HUMAN ENERGY
                 ┌─────────────────┼─────────────────┐
                 ▼                 ▼                 ▼
           THE SEX CENTER     THE HEART CENTER    THE CROWN CENTER
           (Muladhara)           (Anahata)          (Sahasrara)
           • Biological root     • Golden bridge    • Meditation / Samadhi
           • Primal life-force   • Compassion/Trust • Oceanic aloneness
           • Gravitational pull  • Vulnerability    • The drop into ocean
                 │                 │                 │
                 └─────────────────┼─────────────────┘
                                   │
                                   ▼
                    THE TWO RELATIONAL ARCHETYPES
                 ┌─────────────────┴─────────────────┐
                 ▼                                   ▼
          THE TWO BEGGARS                     THE TWO EMPERORS
     • Empty, needy co-dependence         • Two whole, solitary beings
     • Possessiveness and jealousy        • Love as unconditional overflow
     • Marriage as a legal prison         • Freedom as the soul of love
     • Friction, suspicion, control       • Supporting each other's flight
                                   │
                                   ▼
                         THE ULTIMATE SYNTHESIS
                 • Love (Relating) + Meditation (Aloneness)
                 • Living as Zorba the Buddha
\`\`\`

---

## Complete 10-Unit Knowledge Architecture

### Unit 1: The Essential Fire: Love as the Supreme Reality Between Life and Death (Introduction)
Osho inaugurates his treatise by framing love as the solitary bridge of meaning spanning the abyss between physical birth and physical death:
- **The Biological Ammunition Room**: Modern humanity has built a civilization of unprecedented technological power and destructive capacity. We possess nuclear warheads capable of incinerating the planet dozens of times over. Yet, emotionally and spiritually, humanity remains in psychological infancy—infants playing with open matchboxes inside an ammunition depot.
- **The Only Survival Strategy**: Neither political treaties, international courts, nor economic sanctions can halt the suicidal drift toward global catastrophe. The root cause of war is the repressed, curdled, unlived life-energy of billions of human beings. When love is suppressed by society, energy turns sour and poisonous, mutating into nationalistic hatred, religious bigotry, and sadistic violence. Only a global explosion of love can provide the living antidote to atomic destruction.
- **Creativity as the Overflow of Love**: A person who has not tasted love can never be genuinely creative; he can only be a consumer, an accumulator, or a destroyer. Love is the primary fuel of all authentic art, music, poetry, and philosophy. When you are filled with love, you have something infinite to give; you overflow into existence like a mountain spring.

### Unit 2: The Radical Reversal: 'Love is God' and the Unaddressed State of Being (Chapter 1)
Osho undertakes a surgical deconstruction of conventional theology and relational linguistics:
- **The Subversion of Jesus**: For two millennia, the church has celebrated the Johannine maxim *"God is love."* Osho exposes the hidden trap in this statement: by treating love as an adjective of God, God remains the primary entity—a powerful, judging, jealous ruler who happens to possess love alongside wrath, vengeance, and righteousness. Osho flips the formulation: **"Love is God."**
- **The Dissolution of Theological Fiction**: When Love is God, the fictitious person of God vanishes completely. God is not a cosmic person sitting on a golden throne in heaven; God is the name of the existential fragrance of the universe! Existence is made of the very substance of love.
- **Love as a State of Being**: Conventional culture reduces love to a transaction between two people: *"I love you."* The moment love is addressed to a specific person, it becomes a prison. It implies: *"I do not love anyone else; and you must not love anyone else."*
- **The Breathing Metaphor**: You do not breathe for your husband, your wife, or your children; you simply breathe because you are alive! In the same way, love is the breath of the soul. An awakened person is simply loving. Sitting alone under a tree, love flows; walking down an empty alley, love radiates. Whether an emperor, a beggar, a dog, or a stone crosses his path, the fragrance of love showers equally upon all.

### Unit 3: The Architecture of Attraction: Masculine and Feminine Energies Beyond Biology (Chapter 2, Part 1)
Osho delves into the profound metaphysical dynamics underlying sexual and romantic attraction:
- **Beyond Biological Anatomy**: Man and woman are not merely biological categories with different reproductive organs; they represent the two foundational polarities of the cosmic life-force:
  - *The Masculine Energy (Yang)*: Linear, aggressive, intellectual, ambitious, penetrating, and future-oriented. The masculine mind seeks to conquer nature, build machines, construct logical systems, and dominate space.
  - *The Feminine Energy (Yin)*: Circular, receptive, intuitive, poetic, resting, and centered in the immediate present. The feminine soul nurtures, nests, celebrates beauty, and surrenders to the mystery of being.
- **The Internal Complement**: Carl Jung touched upon this truth with his concepts of the *Animus* and *Anima*, but ancient Taoism and Tantra understood it millennia earlier. Every man carries an internal woman in his subconscious; every woman carries an internal man.
- **The Alchemical Marriage**: When a man falls in love with an external woman, he is projecting his internal, unintegrated feminine archetype onto her. Conflict inevitably erupts when the living external woman fails to conform to his internal psychic phantom! Real spiritual maturation requires marrying the inner man and inner woman through meditative witnessing. When the inner polarities unite, you become an integrated, whole being (*Ardhanarishvara*).

### Unit 4: The Pathology of Relating: Deconstructing the Domestic Contract and Needy Beggars (Chapter 2, Part 2)
Osho offers a scathing critique of institutional marriage and conventional romantic co-dependence:
- **The Model of the Two Beggars**: In typical romantic relationships, two emotionally bankrupt individuals meet:
  - Person A feels lonely, hollow, and inadequate, crying: *"Love me, validate me, make me feel special!"*
  - Person B feels equally empty and terrified of aloneness, crying: *"Love me, protect me, tell me I am beautiful!"*
  - When two beggars beg from each other, how long can the romance last? Within days or weeks, the mutual deception collapses. Both realize the other is empty. Resentment, bitterness, and mutual recrimination set in.
- **The Legal Cage of Marriage**: Society panics at the fluidity of authentic love because love is wild, unpredictable, and ungovernable. Therefore, the priest and the magistrate step in to construct a legal cage called marriage. Love—a living, soaring bird of paradise—is slaughtered, stuffed, and mounted in a gold frame. Marriage provides legal security, financial contracts, and societal respectability, but at the cost of murdered passion and living truth.
- **From Relationship to Relating**: Osho demands the abolition of the static noun "relationship." A relationship is a finished, closed thing—like a tombstone. Instead, use the active verb **relating**: a continuous, fresh, moment-to-moment exploration between two free souls who choose to walk together today, with zero guarantees for tomorrow.

### Unit 5: Imprisoned by the Mind: The Calculating Intellect and the Fear of Vulnerability (Chapter 3)
Osho examines the neurosis of the modern intellectual who desires intimacy but remains chronically unable to experience it:
- **The Dictatorship of the Head**: The modern educational system trains human beings exclusively in logic, analysis, doubt, competition, and skepticism. The intellect is an instrument of self-defense; its fundamental instinct is: *"Do not trust; protect yourself; calculate the odds; maximize profit."*
- **The Fear of Heartbreak**: Love requires the total surrender of control. The moment you open your heart to another human being, you become vulnerable. You can be hurt, rejected, abandoned, or betrayed. The calculating mind is terrified of this risk; it prefers the safe, sterile prison of emotional detachment.
- **The Psychological Armor**: Wilhelm Reich correctly identified the phenomenon of "body armoring"—chronic muscular and psychological contractions developed to numb emotional pain. Modern adults walk around encased in thick suits of invisible armor. They shake hands, smile politely, and engage in mechanical sexual encounters, but their souls never touch.
- **The Courage of the Vulnerable**: To love means to throw off your armor, drop your shields, and expose your naked chest to existence. Yes, you may be wounded; yes, your heart may bleed. But a bleeding, living heart is a thousand times more sacred than a frozen heart of stone! In vulnerability lies the solitary gateway to transcendence.

### Unit 6: The Way of the Heart: Transitioning from the Head to the Feeling Center (Chapter 4)
Osho outlines the practical bio-energetic transition from head-centered existence to the sanctuary of the heart:
- **The Three Centers of Consciousness**:
  1. *The Head (Intellect / Logic)*: Deals with knowledge, concepts, past memory, and future projection. It is useful for mathematics, engineering, and commerce, but completely blind to truth, beauty, and love.
  2. *The Navel / Hara (Life-Force / Biology)*: The primal center of physical vitality, digestion, instinct, and death. It connects us to the physical earth.
  3. *The Heart (Feeling / Intuition)*: Located precisely between the navel and the head. The heart is the golden bridge that harmonizes biological animal energy with spiritual transcendence.
- **Sentimental Drama vs. True Heart**: Osho warns against confusing the heart with emotional sentimentality. Sentimentality is cheap, shallow, and hysterical—sobbing over movies or indulging in dramatic lovers' quarrels. The true heart (*Anahata*) is immensely quiet, deep, cool, and stable. It does not react; it resonates.
- **Operating from the Heart**: When you relate from the heart, you stop evaluating people through critical checklists. You listen not merely to words, but to the silence behind words. You perceive the unvoiced pain and sacred divinity in the other. Life shifts from an endless courtroom battle into an aesthetic dance.

### Unit 7: The Transmutation of Sex into Prayer: Ascending the Chakras through Love (Chapter 5, Part 1)
Osho synthesizes Tantric wisdom with modern psychology to explain the vertical evolution of biological energy:
- **The Multi-Storey Mansion**: Human consciousness is like a magnificent seven-storey mansion:
  - *First Floor (Muladhara)*: Biological sex energy. The root of life, reproduction, physical survival.
  - *Fourth Floor (Anahata)*: The heart center. Sex energy transformed into compassion, tenderness, and aesthetic love.
  - *Seventh Floor (Sahasrara)*: The crown center. Love energy transformed into cosmic prayer, samadhi, and enlightenment.
- **The Crime of Ascetic Renunciation**: Traditional religions have attempted to reach the seventh floor by dynamiting the first floor! Monks starve, punish, and condemn their sexual instincts, believing that celibacy equals holiness. Osho exposes this as catastrophic madness: if you destroy the roots of a tree, you do not get flowers; the entire tree withers and dies!
- **Tantric Sublimation**: Sex is not evil; sex is the sacred raw fuel of the universe. In ordinary sex, energy moves downward and outward through biological ejaculation. In Tantric meditative lovemaking, there is no hurry, no goal of climax; lovers sit in deep, relaxed communion, allowing their energies to circulate vertically through the spine. When sexual passion is bathed in meditative witnessing, it naturally ascends to the heart as love, and to the crown as prayer.

### Unit 8: Love as the Purest Power: The Spiritual Antidote to Global Destruction (Chapter 5, Part 2)
Osho re-evaluates the concept of power, distinguishing between political-military domination and the effortless majesty of love:
- **The Coercive Power of Violence**: The politician, the general, and the oligarch understand power only as violence—police batons, prison bars, economic blackmail, and ballistic missiles. But this power is superficial, brittle, and transient. It can destroy bodies, but it cannot touch human hearts. A tyrant sits in constant paranoia, surrounded by bodyguards, knowing that violence always breeds violent rebellion.
- **The Soul-Force of Love**: Love possesses an entirely different dimension of power: it conquers through surrender; it disarms through defenselessness. When a person is rooted in authentic love, weapons become useless against him. Socrates drinking hemlock with a smile, Jesus forgiving his executioners, Mansoor laughing as his limbs were severed—these beings demonstrated the absolute supremacy of love over physical violence.
- **Why Tyrants Fear Lovers**: Throughout history, authoritarian regimes—fascist, communist, or theocratic—have sought to regulate and police love. Why? Because a lover is inherently free! Lovers cannot be organized into goose-stepping armies; lovers cannot be manipulated by nationalistic propaganda; lovers laugh at pompous politicians and dogmatic priests. Love creates independent individuals who refuse to kneel before flags or idols.

### Unit 9: The Solitary Beloved: Why Authentic Love Requires Profound Aloneness (Chapter 6, Part 1)
In one of his most profound philosophical reconciliations, Osho resolves the apparent conflict between meditation and love:
- **Loneliness vs. Aloneness**:
  - *Loneliness* is negative: it is the painful feeling that something is missing, that you are incomplete, abandoned, and empty. Loneliness is sick and desperate; it drives people into toxic relationships just to have a warm body in the room.
  - *Aloneness (*Kaivalya*)* is positive: it is the ecstatic realization that you are complete in yourself! Aloneness is the overflowing presence of your own luminous soul. In aloneness, you are entirely self-sufficient, rooted in eternal silence.
- **Aloneness as the Prerequisite for Love**: Only a person who has mastered the art of aloneness through meditation is capable of authentic love. Why? Because he does not need the other to survive! He does not cling, he does not manipulate, he does not spy on his partner.
- **The Analogy of the Pillars**: Osho quotes Kahlil Gibran’s *The Prophet*: *"Stand together, yet not too near together: for the pillars of the temple stand apart, and the oak tree and the cypress grow not in each other's shadow."* Two lovers must be like two sovereign trees growing on the same hillside—rejoicing in the same sunlight and rain, yet giving each other infinite space to stretch their branches into the sky.

### Unit 10: The Oceanic Dissolution: When Lover and Beloved Melt into Existence (Chapter 6, Part 2)
The masterwork reaches its mystical crescendo in the ultimate transcendence of dualistic relating:
- **The Three Stages of Love**:
  1. *First Stage*: Love as need (The beggar clinging to the object of desire).
  2. *Second Stage*: Love as sharing (The emperor offering unconditional fragrance to another).
  3. *Third Stage*: Love as dissolution (The disappearance of both lover and beloved into pure consciousness).
- **The Collapse of Duality**: In the deepest moments of love and meditation, the psychological boundary separating "I" and "Thou" completely vanishes. There is no longer a lover loving a beloved; there is only **loving**. 
- **The Oceanic Experience**: The individual ego is merely a drop of water that mistakenly believed itself to be isolated from the cosmic sea. Through the doorway of love, the drop slips silently into the ocean. The fear of death dissolves instantly; you realize that your true identity is the infinite, boundless, immortal universe itself.
- **The Final Injunction**: Do not waste your precious human life arguing over dogmas, accumulating dead wealth, or fighting trivial battles. Open your heart! Step into the wild river of love. Let love cleanse your soul, and let your life become an eternal festival of light.

---

## Systematic Comparative Matrix: Conventional Romantic Attachment vs. Osho's Authentic Love

| Dimension | Conventional Romantic Attachment | Authentic Love (*The Power of Love*) |
| :--- | :--- | :--- |
| **Philosophical Base** | Monotheistic dualism; possessive property ownership; social conformity. | Non-dual Tantric celebration; radical individual freedom; *Love is God*. |
| **Core Motivation** | Fear of loneliness; needy emotional dependency; seeking completion. | Overflowing presence (*The Three Tiers*); sharing unconditioned abundance. |
| **Relational Model** | **Two Beggars**: mutually extracting attention, validation, and security. | **Two Emperors**: two sovereign, solitary beings rejoicing in communion. |
| **Legal/Social Form** | Rigid institutional marriage; legal surveillance; mutual rights and duties. | Spontaneous **relating**; moment-to-moment exploration without contracts. |
| **Handling Jealousy** | Jealousy accepted as proof of love; surveillance, guilt, and control. | Jealousy diagnosed as egoic possessiveness; total freedom granted to beloved. |
| **View of Sexuality** | Repressed by morality, practiced with guilt, or treated as commercial fun. | Sacred biological root; transmuted through meditation into prayer. |
| **Role of Solitude** | Aloneness feared as abandonment; constant frantic togetherness. | Aloneness (*Kaivalya*) honored as the indispensable foundation of love. |
| **Ultimate Destination** | Domestic boredom, bitter divorce, or quiet mutual resignation. | **Oceanic Samadhi**: dissolution of the ego into cosmic consciousness. |

---

## Appendix A: Chronological & Structural Concordance of *The Power of Love*

Below is the thematic breakdown of the St. Martin's Press master edition:

- **Introduction**: The biological ammunition depot of modern civilization; love as humanity's solitary survival strategy against nuclear suicide; creativity as the natural overflow of unblocked heart energy.
- **Chapter 1: First Sight of Love, Last Sight of Wisdom**: The theological revolution: *Love is God* vs. *God is love*; love unaddressed; love as a permanent state of being rather than a targeted transaction; the breathing metaphor.
- **Chapter 2: He Said / She Said: Love in a Relationship**: The cosmic polarity of Yin and Yang; masculine linearity vs. feminine circularity; deconstructing the marriage trap; the tragedy of two beggars; moving from relationship to relating.
- **Chapter 3: Imprisoned by the Mind**: The tyranny of the calculating intellect; Wilhelm Reich and muscular armoring; the terror of emotional vulnerability; why playing safe creates living corpses; opening the chest to pain and joy.
- **Chapter 4: The Way of the Heart**: The three centers (head, heart, navel); heart as the golden bridge between animal instinct and divine meditation; distinguishing true heart resonance (*Anahata*) from cheap sentimental drama.
- **Chapter 5: Love: The Purest Power**: The ascent of energy through the seven chakras; Tantric transmutation of sex into prayer; the failure of ascetic renunciation; the true soul-force of love vs. military violence; why tyrants fear lovers.
- **Chapter 6: The Oceanic Experience of Being**: Loneliness vs. aloneness (*Kaivalya*); the analogy of the temple pillars; the three stages of love; the collapse of lover and beloved; the drop dissolving into the cosmic sea of existence.

---

## Appendix B: Comprehensive Glossary of Core Terms in *The Power of Love*

- **Love is God**: Osho’s supreme non-dual formulation replacing external deities with the existential quality of love that permeates the universe.
- **Love Unaddressed**: The enlightened state wherein love is experienced as a continuous internal radiance rather than a relationship targeted at a specific person or object.
- **Kaivalya (कैवल्य)**: Radical, sacred aloneness; the mature state of self-contained spiritual fulfillment where one delights in one's own presence without needing another.
- **Anahata (अनाहत)**: The fourth chakra located at the physical heart center; the unstruck sound; the bridge where biological life-energy transforms into unconditional compassion and feeling.
- **Relating vs. Relationship**: Osho’s distinction between a static, dead, legalistic institution (relationship) and a living, dynamic, moment-to-moment flow of authentic connection (relating).
- **Two Beggars vs. Two Emperors**: The diagnostic metaphor contrasting needy, codependent couples with two spiritually whole, meditatively grounded partners sharing their overflow.
- **Animus and Anima**: The internal masculine and feminine psychic energies present in every human being, requiring internal integration before external relating can succeed.
- **The Oceanic Feeling (Samadhi)**: The total dissolution of the psychological boundaries of the separate ego, merging the individual consciousness with the infinite cosmos.

---

## Appendix C: Selected Disciple Inquiries & Therapeutic Diagnoses on Relationships

Throughout his talks on love, disciples from diverse cultural backgrounds brought agonizing relationship crises to Osho’s podium:

### 1. On Chronic, Destructive Jealousy
- **Disciple Inquiry**: *"Beloved Osho, whenever my partner talks warmly to another woman, laughs with someone else, or goes out alone, my stomach knots up with violent jealousy and rage. I know it is wrong, but I feel like I am going insane. How do I kill this jealousy?"*
- **Osho's Diagnosis**: *"You cannot kill jealousy directly because jealousy is not the root disease; jealousy is merely a symptom of your own inner poverty and possessiveness! You believe that your partner is your private property—like your car, your house, or your bank account. And because you are an empty beggar who has invested all your self-worth in this one person, you are terrified that if he smiles at someone else, your entire wealth will be stolen! Recognize the utter indignity of treating a living human soul as property. If you truly love him, you should rejoice when he is happy! If he finds joy in a conversation or a sunset with another person, your love should celebrate his joy. But your love is not love; it is an ugly contract of ownership. Meditate! Discover the diamond of your own soul. When you are rich within yourself, you are an empress; an empress does not spy on her lover through the keyhole."*

### 2. On the Terrifying Pain of Heartbreak and Separation
- **Disciple Inquiry**: *"The person I loved with all my heart has left me for someone else. I feel completely hollowed out, as if my chest has been torn open. I can neither eat nor sleep. How do I survive this unbearable heartbreak?"*
- **Osho's Diagnosis**: *"Do not try to escape the pain; welcome the heartbreak as a profound spiritual blessing! Why does it hurt so intensely? Because for the first time, your false psychological armor has been shattered! The other person has not taken anything from you; she has merely removed her mirror, and now you are forced to look at your own terrifying emptiness. Use this crisis for meditation. Sit alone in your room and let the tears flow freely. Feel the physical ache in your heart center without inventing stories of victimhood or blaming the other. Say to the pain: 'Come in, burn everything that is false within me.' In that sacred fire, your infantile dependency will burn to ashes. On the other side of heartbreak lies your authentic, mature aloneness. The person who left has set you free to discover your own infinite soul."*

### 3. On Losing Passion in Long-Term Partnerships
- **Disciple Inquiry**: *"When we first met, our love was like an electric storm—wild, passionate, ecstatic. Now, after seven years of living together, we feel like two polite roommates. We are affectionate, but the fire is completely gone. Is boredom inevitable in love?"*
- **Osho's Diagnosis**: *"Boredom is absolutely inevitable if you turn love into a routine domestic schedule! In the beginning, you were two mysterious strangers exploring the unknown territory of each other's souls. Now, you have made each other totally predictable. You know what she will cook, what he will say, how you will make love on Saturday night. You have replaced adventure with safety. If you want to reignite the fire, you must re-introduce the dimension of the unknown! Give each other complete freedom. Go away on solitary retreats; do not live in each other's pockets twenty-four hours a day. Respect each other's mystery! You cannot ever fully know another human being; every person is an infinite abyss of consciousness. When you look at your partner tomorrow morning, drop your seven years of memory. Look at her as if you are meeting an enchanting, mysterious stranger for the very first time. In that fresh vision, passion returns."*

---

## Appendix D: The 7-Day Heart-Opening and Aloneness Sadhana Protocol

Designed for individuals and couples seeking to dissolve emotional armoring, heal relational wounds, and ground love in meditative presence:

### Phase 1: Heart-Center Catharsis & Vocal Release (Morning)
- **Time**: 06:30 AM – 07:30 AM.
- **Stage 1 (15 min) - Breathing through the Chest**: Stand with feet hip-width apart. Place both hands over the physical heart center. Breathe rapidly and deeply into the chest, opening the rib cage, allowing unexpressed grief, tears, or longing to surface.
- **Stage 2 (15 min) - Uncensored Vocal Expression**: Express every blocked emotional sound—weep, wail, laugh, or chant the sacred vowel *"Ahhhh"* from the heart center. Release the muscular armor around the chest, neck, and shoulders.
- **Stage 3 (15 min) - Silent Heart Resting**: Sit completely still. Feel the warm circulation of blood and energy radiating from the chest throughout the entire nervous system.
- **Stage 4 (15 min) - Radiating Compassion**: Visualize the warm light of your heart expanding outward, embracing all living beings—friends, strangers, and adversaries—with unconditional benevolence.

### Phase 2: The Solitary Walk of Presence (*Kaivalya*) (Midday)
- **Time**: 11:30 AM – 12:30 PM.
- Walk alone in a park, forest, or open landscape without headphones, phone, or companion.
- Walk with the total awareness that you are completely self-sufficient. Feel the earth supporting your footsteps; feel the breeze touching your skin. Say internally: *"I am whole; I am complete; I am at home in the universe."*

### Phase 3: The Mirror of Non-Judgmental Gazing (Couples or Solitary) (Evening)
- **Time**: 06:00 PM – 07:00 PM.
- **For Couples**: Sit cross-legged facing your partner at arm's length. Gaze softly into your partner's left eye for twenty minutes without speaking, laughing, or looking away. Breathe in sync. Notice how the social mask dissolves, revealing the vulnerable, luminous child within.
- **For Solitary Seekers**: Sit before a clear mirror in dim candlelight. Gaze into your own eyes with unconditional love and forgiveness for twenty minutes, dissolving the internal critic.

### Phase 4: Night Dissolution into the Cosmic Ocean (Before Sleep)
- **Time**: 09:30 PM – 10:15 PM.
- Lie flat on your back in Savasana.
- Place the left hand over the heart and the right hand over the lower abdomen (*Hara*).
- Imagine your individual physical body melting like an iceberg into a warm, infinite, dark ocean of divine love. 
- Enter sleep resting on the realization: *"I am not a separate drop; I am the ocean itself."*

---

## Appendix E: The Diagnostic Spectrum of Relational Pathology & Tantric Remedies

| Relational Pathology | Root Psychological Disturbance | Daily Manifestation | Osho's Tantric & Meditative Remedy |
| :--- | :--- | :--- | :--- |
| **Possessive Surveillance** | Terror of abandonment; deep internal poverty. | Checking partner's phone, interrogating friends, nagging. | Cultivate *Kaivalya* (sacred aloneness). Realize love thrives only in absolute freedom. |
| **Sexual Mechanical Boredom** | Goal-oriented hurried sex; viewing partner as an object. | Rapid climax, sexual frustration, seeking pornographic novelty. | Tantric communion: slow down; meditate together; let energy ascend from sex to heart. |
| **Intellectual Cynicism** | Head-centered armoring; fear of emotional vulnerability. | Mocking sentiment, overanalyzing conversations, emotional coldness. | Move to the *Heart Center*; practice crying and laughing; take the risk of vulnerability. |
| **The Self-Sacrificing Martyr** | Seeking moral superiority and guilt-tripping the partner. | Suppressing personal desires, complaining of being unappreciated. | Stop being a martyr! Reclaim Zorba's joy; you cannot give love if your own cup is dry. |
| **The Incessant Fault-Finder** | Projecting internal unintegrated shadow onto the partner. | Chronic criticism of partner's habits, looks, or career. | The Empty Mirror: look within; whatever irritates you in the other is your own disowned trait. |
| **Codependent Merger** | Complete loss of individual identity and personal boundaries. | Inability to make decisions alone; suffocating togetherness. | Follow the *Temple Pillars* principle: stand apart; cultivate independent creative lives. |

---

## Appendix F: Comparative Matrix: Conceptions of Love Across Western and Eastern Thought

| Philosopher / Tradition | Core Conception of Love | Structural Relational Dynamic | Ultimate Epistemic Limitation | Osho’s Radical Synthesis |
| :--- | :--- | :--- | :--- | :--- |
| **Plato** (*Symposium*) | *Eros*: Ladder of ascent from physical beauty to ideal Form. | Yearning for the eternal, transcendent Good. | Intellectualized; abandons biological flesh and unique earthly lover. | Earth and sky united: Zorba embraces flesh while Buddha rests in the formless. |
| **Sigmund Freud** (*Civilization and Its Discontents*) | Sublimated libido; repressed animal sex-drive redirected into culture. | Cynical biological reductionism; love as mutual defense pact. | Devoid of spiritual transcendence; reduces human soul to neurotic ape. | Sex is the sacred biological root, but transforms vertically into prayer (*Samadhi*). |
| **Erich Fromm** (*The Art of Loving*) | Love as an active art, practice, and conscious decision requiring care. | Mature interpersonal union preserving integrity and individuality. | Confined to psychological humanism; misses non-dual dissolution into the cosmos. | Love expands beyond human society into *Love is God*: merging with the entire universe. |
| **Jalaluddin Rumi** (*Masnavi*) | Divine drunkenness (*Ishq*); annihilation of the ego in the Beloved. | Ecstatic Sufi devotion; burning in the fire of mystical longing. | Vulnerable to devotional dependency if the external Beloved is idolized. | Devotional ecstatic fire tempered with silent Zen witness consciousness (*Sakshi*). |
| **Christian Orthodoxy** (St. Paul / Augustine) | *Agape*: Selfless sacrificial love ordained by God; marital duty. | Hierarchical covenant mediated by ecclesiastical church authority. | Riddled with original sin, sexual guilt, and ascetic condemnation of desire. | Reverses *God is love* to *Love is God*; eliminates guilt; celebrates biological innocence. |

---

## Appendix G: The 10 Principles of Conscious Relating

1. **Love Yourself First**: You cannot give what you do not have. If you hate yourself, your love for another is merely a desperate bribe to escape self-loathing.
2. **Never Treat a Human Being as Property**: The beloved is not a thing to be possessed, policed, or managed. Respect their freedom as absolute and inviolable.
3. **From Relationship to Relating**: Drop the dead, static noun. Relate freshly every morning without the baggage of yesterday's grievances.
4. **Master Sacred Aloneness**: Find complete fulfillment in your own solitude. Two whole beings meeting create a festival; two half-beings create misery.
5. **No Guarantees for Tomorrow**: Love lives only in the present breath. Demanding legal or emotional promises for fifty years murders living spontaneity.
6. **Communicate from the Heart, Not the Egotistical Head**: When conflict arises, drop the debate tactics. Express vulnerable feelings rather than accusatory judgments.
7. **Celebrate the Beloved's Joy**: If your partner finds happiness in an independent pursuit, rejoice unconditionally. Envy proves possessiveness, not love.
8. **Transmute Passion into Meditation**: Bathe physical intimacy in silence, slowness, and reverence. Let sex become the launchpad for cosmic prayer.
9. **Stand Like Temple Pillars**: Grow side by side, sharing the same sunlight and soil, but never overshadow or smother each other's growth.
10. **Dissolve into the Ocean**: Remember that the ultimate goal of love is the dissolution of the separate ego into the infinite divine whole (*Samadhi*).
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
          <span class="book-title-short">The Power of Love</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: 10-Unit Journey</button>
      <button class="view-btn" data-view="map">View B: Relational Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Heart & Dissolution Engine</button>
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
          <h2>Relational Blueprint: The Power of Love</h2>
          <p class="subtitle">Complete philosophical architecture translating Osho's master treatise on the metaphysics of the heart, the three tiers of energy, beggars vs. emperors, and oceanic dissolution across 10 foundational units.</p>
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
          <h2>The Heart, Aloneness & Tantric Dissolution Engine</h2>
          <div class="engine-section">
            <h3>Operational Maxims from the Sanctuary of the Heart</h3>
            <div class="formula-box">
              <p><strong>1. Love is God:</strong> Dissolve the external theological judge. Love is not an adjective belonging to God; love itself is the ultimate, self-luminous fabric of the cosmos.</p>
              <p><strong>2. Two Emperors:</strong> Stop begging for love from other empty beggars. Discover the diamond of your own soul; authentic love is the unconditioned overflow of two sovereign beings.</p>
              <p><strong>3. The Way of the Heart:</strong> Move from the calculating, armored intellect down into the feeling sanctuary of the heart. Vulnerability is the solitary gateway to transcendence.</p>
              <p><strong>4. Sacred Aloneness:</strong> Love and freedom are inseparable twins. Stand together like the pillars of a temple, giving each other infinite space to stretch branches into the sky.</p>
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
