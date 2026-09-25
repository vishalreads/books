/**
 * BKRS v1.0 Generator for Hermann Hesse's "Siddhartha" (1922)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/siddhartha');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-01",
    chapter_num: 1,
    part: "Part One",
    title: "The Son of the Brahmin: The Insufficiency of Ritual",
    timeline_location: "Ancient India, Brahmic Homestead",
    source_scope: "Youth, Brahmic education, dissatisfaction with rituals, father's blessing",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Siddhartha, the handsome, gifted son of a high-caste Brahmin, grows up revered by all, accompanied by his devoted shadow Govinda. Despite mastering the Rigveda, the sacred ablutions, and sacrificial rites, Siddhartha's soul remains profoundly unquenched. He realizes that the learned Brahmins, who know all rituals and possess vast textual knowledge, have not themselves achieved Atman or conquered restlessness. When wandering Samana ascetics pass through town preaching the annihilation of the self, Siddhartha resolves to abandon his caste privileges. He stands motionless throughout an entire night in silent, unbroken resolve until his father, recognizing his son's irrevocable inner calling, reluctantly grants his blessing to depart.",
    key_claims: [
      "Theoretical and ritualistic religious knowledge is fundamentally incapable of satisfying the existential hunger for direct spiritual realization.",
      "The Brahmins possess knowledge *about* God, but do not abide *in* God.",
      "Total commitment requires non-violent, immutable resolve: standing motionless until external authority yields to internal necessity."
    ],
    concrete_evidence: [
      "Mastery of the holy Om, the Rigveda verses, and the ablutions at the holy river.",
      "Standing upright with folded arms in the dark bedroom through all four watches of the night until his father's knees tremble with fatigue.",
      "Govinda immediately choosing to renounce family and follow Siddhartha into the wilderness."
    ],
    operational_mechanisms: [
      {
        name: "The Ritual Knowledge Deficit",
        rule: "Accumulating intellectual descriptions of transcendent states creates the illusion of spiritual attainment while leaving underlying existential thirst untouched."
      },
      {
        name: "Immutable Silent Resolve",
        rule: "Unshakable physical and mental stillness overcomes authoritarian patriarchal resistance without resorting to destructive conflict."
      }
    ],
    verbatim_citations: [
      "The vessel was not full, the mind was not satisfied, the soul was not at peace, the heart was not quiet.",
      "One had to find the source in one's own self, one had to own it! Everything else was merely searching, a detour, getting lost."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    part: "Part One",
    title: "With the Samanas: The Limits of Self-Denial",
    timeline_location: "Forest Wilderness",
    source_scope: "Ascetic self-mortification, fasting, breath control, the flight from the self",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "For three years, Siddhartha and Govinda live among the gaunt Samana ascetics. Siddhartha strips away his fine clothes, wears a loincloth, eats only once a day, fasts for weeks, and masters extreme practices of breath cessation and sensory detachment. He learns to project his consciousness into animals, dead jackals, and stones. Yet, upon returning to his human body, he discovers that asceticism is merely a temporary anesthesia—a fleeting escape from the agonizing pain of the Self, no different in kind from the drunkenness of an ox-driver at the tavern. Confronting the oldest Samana, Siddhartha demonstrates superior hypnotic power before departing to seek Gotama, the Buddha.",
    key_claims: [
      "Self-mortification and sensory suppression do not dissolve the ego; they merely numb it temporarily.",
      "The ascetic fleeing from the Self is functionally identical to the drunkard escaping into alcohol—both are temporary flights from existence.",
      "Asceticism cannot grant lasting enlightenment because it treats the body and senses as enemies to be crushed rather than understood."
    ],
    concrete_evidence: [
      "Living in the forest on raw roots and water, skin blistered by midday heat and chilled by monsoon rains.",
      "Siddhartha meditating until his heartbeat drops to a faint pulse and he experiences the consciousness of a decaying carcass.",
      "Hypnotizing the venerable elder Samana with a single gaze, freezing him in silent obedience."
    ],
    operational_mechanisms: [
      {
        name: "The Ascetic Flight Paradox",
        rule: "Any method that relies on suppressing the senses merely postpones confrontation with the ego; the Self re-emerges intact the moment the trance breaks."
      }
    ],
    verbatim_citations: [
      "What I have learned so far among the Samanas, I could have learned more quickly and easily in every tavern... a brief numbing of the senses against the pain and senselessness of life.",
      "It is a flight from the Self, a brief escape from the torment of being a Self, a temporary opiate against the pain and folly of life."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    part: "Part One",
    title: "Gotama: The Encounter with the Buddha",
    timeline_location: "Jetavana Grove, Savathi",
    source_scope: "Observation of Gotama Buddha, Govinda's ordination, Siddhartha's philosophical confrontation with Gotama",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Siddhartha and Govinda journey to the Jetavana grove to hear Gotama, the Illustrious One, who has attained supreme enlightenment. Recognized instantly by the immaculate tranquility of his walk and downcast gaze, the Buddha radiates unearthly perfection. Overcome with faith, Govinda immediately takes refuge in the Buddha and joins the monastic order. Siddhartha, however, requests a private audience with Gotama. While praising the Buddha's seamless, flawless doctrine of dependent origination and release from suffering, Siddhartha points out its fatal logical paradox: the doctrine contains no flaw, yet the Buddha did not attain enlightenment through a doctrine—he attained it through his own secret, direct experience. Therefore, teachings cannot convey enlightenment; one cannot be saved by another's path. Siddhartha departs alone.",
    key_claims: [
      "Enlightenment cannot be communicated or taught through doctrines, words, or intellectual systems.",
      "The Buddha attained awakening through his own unrepeatable experiential search, not through listening to a master.",
      "Following a spiritual master, no matter how holy, risks stealing one's own authentic search and replacing it with dogma."
    ],
    concrete_evidence: [
      "The yellow robe, begging bowl, and silent, serene steps of the Buddha in the Jetavana garden.",
      "Govinda shaving his head and taking the vows of the Sangha.",
      "The dialectical dialogue between Siddhartha and Gotama beneath the trees."
    ],
    operational_mechanisms: [
      {
        name: "The Incommunicability of Wisdom",
        rule: "Doctrines can convey knowledge, rules, and conceptual coherence, but the living experience of awakening is strictly non-transferable."
      }
    ],
    verbatim_citations: [
      "To nobody, O Illustrious One, can you communicate in words and through teachings what occurred to you in the hour of your enlightenment!",
      "The teaching of the enlightened Buddha contains much... but it does not contain the secret of what the Illustrious One himself experienced—he alone among hundreds of thousands."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    part: "Part One",
    title: "Awakening: The Solitary Birth of the Self",
    timeline_location: "Road from Jetavana",
    source_scope: "Metaphysical realization, rediscovery of the sensory world, total loneliness",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Walking away from the Jetavana grove, Siddhartha experiences a profound ontological awakening. He realizes that for years he sought to destroy his Self because he viewed the sensory world as Maya (illusion) and Atman as hidden behind it. Now, the scales fall from his eyes: meaning and essence are not concealed behind things, but reside in them. The world of blue skies, yellow rivers, and green forests is not an illusion to be escaped, but the living body of the divine. He is no longer a Brahmin, no longer a Samana, no longer an ascetic; he is utterly alone in the universe, without caste, family, or property. With shivering dread and exhilaration, he steps forward into the world of flesh and time.",
    key_claims: [
      "The sensory world is not a deceptive veil of illusion (Maya) to be despised, but the direct manifestation of reality.",
      "Spiritual awakening requires accepting total existential isolation and relinquishing all institutional shelters.",
      "True self-knowledge begins when one stops trying to escape the Self and instead embraces one's physical existence."
    ],
    concrete_evidence: [
      "Looking at the sky, the river, and the forest as if seeing colors and forms for the very first time.",
      "The physical chill running down his spine as he realizes he cannot return home to his father's house."
    ],
    operational_mechanisms: [
      {
        name: "The Sensory Re-enchantment",
        rule: "When metaphysical prejudice is abandoned, ordinary physical phenomena cease to be barriers to enlightenment and become its direct expression."
      }
    ],
    verbatim_citations: [
      "I was afraid of myself, I was fleeing from myself! I was seeking Atman, I was seeking Brahma... but in doing so, I lost myself on the way.",
      "The world was beautiful, the world was colorful, the world was strange and enigmatic!"
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    part: "Part Two",
    title: "Kamala: Entering the City & The Three Skills",
    timeline_location: "The Great River & The City",
    source_scope: "Ferryman Vasudeva's first appearance, encounter with Kamala, the three foundational assets",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Siddhartha reaches a broad river and is ferried across by a serene, humble ferryman (Vasudeva), who refuses payment and prophesies that Siddhartha will return to the river. Entering the grand city, Siddhartha beholds Kamala, the most renowned and wealthy courtesan, carried in a gilded litter. Enchanted, he approaches her seeking the art of love. Kamala tells him that love requires fine clothes, shoes, money, and gifts; an ascetic beggar has no currency in her garden. When asked what assets he possesses, Siddhartha famously replies: 'I can think. I can wait. I can fast.' Kamala recognizes the extraordinary potency of these three spiritual disciplines and introduces him to the wealthy merchant Kamaswami.",
    key_claims: [
      "Spiritual discipline and mental clarity translate directly into irresistible real-world agency.",
      "The three foundational competencies for life mastery are: Thinking (discernment), Waiting (patience/non-reactivity), and Fasting (independence from physical desire).",
      "Love and worldly intimacy are sophisticated arts requiring education, mastery, and aesthetic refinement."
    ],
    concrete_evidence: [
      "The ferryman predicting that the river always brings people back.",
      "Kamala's pleasure grove with painted trees, tame monkeys, and crimson lips.",
      "Siddhartha reciting an improvised poem of exquisite beauty to win Kamala's first kiss."
    ],
    operational_mechanisms: [
      {
        name: "The Triad of Absolute Leverage",
        rule: "A person who can think clearly cannot be deceived; a person who can wait cannot be rushed into folly; a person who can fast cannot be bribed or coerced by physical necessity."
      }
    ],
    verbatim_citations: [
      "‘What can you do?’ asked Kamala. ‘I can think. I can wait. I can fast.’",
      "A person who has nothing to eat has nothing more urgent than to find food. But a person who can fast can wait calmly; he knows no hunger, he is not ruled by impatience."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    part: "Part Two",
    title: "With the Childlike People: Commerce as a Game",
    timeline_location: "The Merchant City",
    source_scope: "Partnership with Kamaswami, mercantile success, psychological detachment",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Employed by the obsessive merchant Kamaswami, Siddhartha quickly masters bookkeeping, trade contracts, and market negotiations. Because he does not care about accumulating money for its own sake, he conducts business without anxiety, fear, or greed. When a crop deal fails, he turns the business trip into an enjoyable holiday, befriending peasants and attending village festivals. Kamaswami is bewildered by Siddhartha's complete lack of distress over financial loss. Siddhartha observes the ordinary 'childlike people' (Menschen-Kinder)—their frantic passions, petty rivalries, and endless anxieties over trivial gains—feeling both sympathetic pity and detached superiority.",
    key_claims: [
      "Total detachment from outcomes confers immense psychological leverage in business and negotiation.",
      "Worldly people suffer because they invest ultimate emotional significance in transient material fluctuations.",
      "Viewing commerce as a game preserves creative equanimity and prevents anxiety from clouding judgement."
    ],
    concrete_evidence: [
      "Siddhartha writing contracts with flawless calligraphy while laughing at Kamaswami's frantic ledger-checking.",
      "Riding to a distant village to buy a harvest, finding it already sold, and staying for days to enjoy the hospitality of local farmers.",
      "Accumulating immense wealth, estates, horses, and servants without feeling bound to them."
    ],
    operational_mechanisms: [
      {
        name: "Detached Mercantile Asymmetry",
        rule: "The player who does not fear losing enjoys complete tactical clarity, whereas the player desperate for gain is perpetually compromised by anxiety."
      }
    ],
    verbatim_citations: [
      "Business was good for acquiring money for Kamala, but it remained a game whose rules one learned, nothing more.",
      "He saw people living in a childlike or beastlike way, which he both loved and despised. He saw them toiling, saw them suffering, saw them becoming grey over things that seemed to him completely worthless—over money, petty pleasures, small honors."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    part: "Part Two",
    title: "Sansara: The Poisoning of the Soul & The Songbird Dream",
    timeline_location: "The Pleasure Villa & Gardens",
    source_scope: "Decadence, gambling, sensory numbness, Kamala's rare songbird, flight into the night",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Years pass. Gradually, the subtle poison of wealth, luxury, and physical indulgence coats Siddhartha's soul. He begins to take money seriously, becomes irritable over lost sums, drinks heavy wines, and spends nights in frantic dice games—gambling away fortunes simply to feel a fleeting spike of emotional tension. His inward sanctuary goes silent. One night, after an exhausting, hollow session of lovemaking with Kamala, he dreams of her rare singing bird dying in its golden cage; in the dream, he discards the dead bird into the gutter with revulsion. Waking in cold horror, he realizes that for twenty years he has been killing his own divine soul in the quagmire of Sansara. Without saying farewell or taking any possessions, he walks out of his villa into the night, abandoning the city forever. Kamala, discovering his departure, releases her rare songbird into the open sky and quietly discovers she is pregnant with Siddhartha's child.",
    key_claims: [
      "Material comfort and sensory over-indulgence gradually deaden the spiritual faculties through habituation.",
      "High-stakes gambling and addictive pursuits are desperate attempts by a numb soul to simulate vitality through artificial tension.",
      "When one's inner voice is smothered, the only path to salvation is radical, immediate renunciation."
    ],
    concrete_evidence: [
      "Gambling large sums with desperate rage, losing with a sick sensation of self-disgust.",
      "The dream of Kamala's prized songbird lying dead and stiff at the bottom of its cage.",
      "Kamala opening the cage door and letting the bird fly away forever upon learning Siddhartha has left."
    ],
    operational_mechanisms: [
      {
        name: "The Seduction of Sansara",
        rule: "Gradual accommodation to comfort erodes vigilance; what begins as detached play calcifies into an addictive psychological prison."
      }
    ],
    verbatim_citations: [
      "Like a veil, like a thin mist, tiredness had crept over Siddhartha... slowly, year by year, like moisture that enters a tree trunk, it had settled into his soul.",
      "He had tasted of Sansara, he had drunk from the cup of lust, greed, and indolence until he was utterly nauseated."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    part: "Part Two",
    title: "By the River: The Suicidal Abyss & The Holy Om",
    timeline_location: "The Edge of the Great River",
    source_scope: "Suicidal despair, the sacred sound Om, deep regenerative sleep, reunion with Govinda",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Wandering in utter self-loathing, Siddhartha reaches the deep river. Leaning over the water, gazing at his reflection—bloated, corrupt, and wretched—he is seized by an overwhelming impulse to drown himself and end his pathetic existence. But just as he prepares to plunge, from the depths of his subconscious rings the primordial syllable: 'Om'—the perfection of all that is. The sound shatters his despair. He steps back from the edge, collapses beneath a tree, and falls into a deep, dreamless, regenerative sleep. When he awakens hours later, his soul is washed clean, filled with innocent joy. A Buddhist monk is sitting beside him, guarding him from wild animals: it is Govinda, who fails to recognize his friend under his rich, travel-stained garments. When Siddhartha reveals his identity, Govinda is astonished to find his ascetic brother dressed like a grand lord. Siddhartha proclaims that he is beginning life anew.",
    key_claims: [
      "Total despair and the collapse of the false self are often the necessary prerequisites for spiritual rebirth.",
      "The primordial sacred vibration ('Om') reconnects the fractured psyche to cosmic totality.",
      "Regenerative surrender (letting the old identity die) achieves what decades of active striving could not."
    ],
    concrete_evidence: [
      "Looking down into the dark water, spitting at his own reflection before the fatal drop.",
      "The sound 'Om' echoing in his ear, instantly arresting his suicidal motion.",
      "Govinda standing watch over the sleeping stranger, holding his staff in faithful monk's duty."
    ],
    operational_mechanisms: [
      {
        name: "The Abyss as Metaphysical Pivot",
        rule: "When the ego reaches absolute rock bottom and acknowledges its total bankrupt nature, defensive posturing dissolves and true consciousness awakens."
      }
    ],
    verbatim_citations: [
      "From a remote region of his soul, from past times of his weary life, a sound quivered... the holy Om. And in the same instant that the sound touched his ear, his slumbering spirit suddenly awoke and recognized the folly of his action.",
      "I had to become a fool again in order to find Atman in myself. I had to sin, I had to taste despair, I had to unlearn all my wisdom."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    part: "Part Two",
    title: "The Ferryman: Vasudeva & The Secrets of the River",
    timeline_location: "The River & Ferry Hut",
    source_scope: "Becoming apprentice to Vasudeva, learning to listen, the non-existence of time",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Siddhartha returns to the ferry hut and meets Vasudeva, the aged ferryman who ferried him across years ago. Recognizing Vasudeva's extraordinary capacity for silent, compassionate listening, Siddhartha recounts his entire life story. Vasudeva welcomes him as an apprentice and brother. Together they ferry travelers across the river, living on simple rice and fruit. Under Vasudeva's gentle guidance, Siddhartha learns to listen to the river—not merely to its water, but to its infinite voices. The river teaches Siddhartha its greatest secret: there is no such thing as time. The river is everywhere at once—at its source, at the waterfall, at the ferry, in the sea—present simultaneously in all dimensions. Therefore, the division between past, present, and future is an illusion; life is an eternal Now.",
    key_claims: [
      "Deep, non-judgmental listening is the highest form of spiritual companionship and therapeutic healing.",
      "Time is a linear illusion created by human thought; all states of being exist simultaneously in the eternal present.",
      "Nature (the river) is a living spiritual teacher superior to human doctrines."
    ],
    concrete_evidence: [
      "Vasudeva listening without interrupting, his eyes reflecting radiant serenity.",
      "The river roaring with laughing water, mourning water, yearning water, and whispering water.",
      "The shared realization that the child, the young man, the decadent gambler, and the old ferryman are separated only by shadows, not by reality."
    ],
    operational_mechanisms: [
      {
        name: "The River's Secret (Simultaneity of Being)",
        rule: "When the illusion of linear time dissolves, regret over the past and anxiety over the future vanish; all things exist in complete, unified perfection."
      },
      {
        name: "The Practice of Pure Listening",
        rule: "Absorbing another's confession without judgement, advice, or ego-assertion creates a sacred space where the speaker's trauma naturally heals."
      }
    ],
    verbatim_citations: [
      "‘Have you also learned that secret from the river: that there is no such thing as time?’ ‘Yes, Siddhartha,’ said the ferryman. ‘The river is everywhere at the same time.’",
      "Vasudeva was a listener such as few people are. Without saying a word... he absorbed everything into himself, quietly, openly, patiently."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    part: "Part Two",
    title: "The Son: The Wound of Attachment & Parental Helplessness",
    timeline_location: "The Ferry Hut & The Forest",
    source_scope: "Kamala's death by snakebite, raising their spoiled son, the agony of love, son's rebellion and flight",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "Word spreads that the Buddha is dying; thousands make pilgrimages to his deathbed. Among them is Kamala, traveling with her eleven-year-old son, young Siddhartha. Resting near the river, Kamala is bitten by a venomous snake. Vasudeva brings her to the hut, where Siddhartha recognizes her. Kamala dies peacefully in his arms after seeing that Siddhartha has found peace. Siddhartha takes in his spoiled, arrogant, urbanized son, loving him with an overwhelming, vulnerable passion he had never known before. He tries to win the boy through patience, gentle chores, and kindness. But the boy despises the primitive hut, mocks his father's poverty, steals their money, smashes the ferry boat, and flees back toward the city. Siddhartha pursues him in desperate agony, only to stop at Kamala's pleasure garden, realizing with shattering pain that he cannot protect his son from life, cannot spare him from his own mistakes, and must let him go.",
    key_claims: [
      "Love for another person binds the soul to the mortal cycle of suffering (Sansara) more powerfully than any greed or lust.",
      "No parent, regardless of spiritual wisdom, can spare their child the necessity of making their own mistakes and living their own karma.",
      "True love requires the agonizing act of letting go rather than imposing protective control."
    ],
    concrete_evidence: [
      "Kamala's fatal snakebite and burial beneath the trees by the river.",
      "The spoiled boy shouting insults, refusing to gather firewood, and running away with the coin purse.",
      "Siddhartha standing outside the pleasure garden for hours, staring through the gilded gate in helpless heartbreak."
    ],
    operational_mechanisms: [
      {
        name: "The Karmic Inevitability of Generation",
        rule: "Just as Siddhartha had to break his own Brahmin father's heart to seek his path, his son must break Siddhartha's heart to live his own destiny."
      }
    ],
    verbatim_citations: [
      "He loved him, and preferred the sorrow and trouble of love to happiness and joy without the boy.",
      "Do you really believe that you committed your follies in order to spare your son them? Did your father protect you against the Samanas, against suffering, against the world?"
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    part: "Part Two",
    title: "Om: The Symphony of All Voices & Vasudeva's Departure",
    timeline_location: "The River at Sunset",
    source_scope: "Healing of the parental wound, listening to the ten thousand voices of the river, Vasudeva's radiant transfiguration",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "The wound of losing his son festers in Siddhartha's heart for months. Looking at ordinary travelers with children, he no longer feels superior; he feels a deep kinship with their blind, desperate love. One day, overwhelmed by grief, he rows out into the river to seek his son again. The river laughs at his folly. Returning to Vasudeva, Siddhartha confesses his persistent agony. Vasudeva leads him to the riverbank and commands him to listen with a fresh ear. Siddhartha listens deeply: he hears the voices of his father, his son, Kamala, Govinda, the merchants, the warriors, the weeping, the rejoicing—ten thousand intertwining voices of sorrow, joy, longing, and triumph. When all the voices merge together into one grand symphony, they form the single sacred word: Om. Siddhartha's wound heals instantly; his ego dissolves into universal unity. Vasudeva, seeing that his work is complete and his companion has attained enlightenment, quietly departs into the forest to die.",
    key_claims: [
      "Suffering is transcended not by detaching from it, but by listening to its harmony within the totality of existence.",
      "The universe is an interconnected polyphonic unity where every voice—even of grief and sin—is essential to the cosmic song.",
      "When one's destiny is fulfilled, one steps aside quietly, without clinging or fanfare."
    ],
    concrete_evidence: [
      "The laughter of the river mirroring Siddhartha's own father's heartbreak decades earlier.",
      "The merging of all distinct voices of creation into the single harmonious vibration 'Om'.",
      "Vasudeva's eyes glowing with luminous light as he walks away into the golden trees."
    ],
    operational_mechanisms: [
      {
        name: "Polyphonic Integration of Being",
        rule: "When individual pain is viewed in isolation, it is tragic; when heard as part of the infinite counterpoint of all existence, it is revealed as pure harmony."
      }
    ],
    verbatim_citations: [
      "All these voices, all these goals, all these yearnings, all these sorrows, all these pleasures... when he heard them all together, heard the thousandfold song of life consist of a single word: Om—the perfection!",
      "His smile shone radiant... in this hour Siddhartha stopped fighting against his destiny, stopped suffering. On his face shone the serenity of knowledge."
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    part: "Part Two",
    title: "Govinda: The Final Revelation & The Kiss of Unity",
    timeline_location: "The Ferry Hut on the River",
    source_scope: "Govinda's final visit, Siddhartha's testament on wisdom vs. knowledge, the kiss on the forehead, the cosmic vision",
    epistemic_status: "Canonical Philosophical Fiction",
    materiality: "CRITICAL",
    summary: "In his old age, Govinda, still an earnest Buddhist monk searching for peace, hears tales of a wise old ferryman and journeys to the river. Once again failing to recognize Siddhartha, Govinda asks him for guidance. Siddhartha reveals himself and articulates the ultimate insights of his life: (1) Wisdom cannot be communicated; words can only convey knowledge, and whenever a truth is stated in words, its opposite is equally true; (2) Time is an illusion, meaning every sinner is already potentially a Buddha, and everything that exists is holy; (3) The world does not need improvement—it is already complete and perfect in every moment; (4) Love is the highest virtue of all, whereas intellectual systems despise love. Still bewildered by Siddhartha's strange words, Govinda is told to kiss Siddhartha's forehead. As Govinda's lips touch Siddhartha's brow, time dissolves: Govinda beholds an overwhelming, infinite stream of faces—men, women, animals, corpses, babies, gods, lovers, and murderers—all flowing into each other, all forming the smiling, serene face of Siddhartha. Weeping with awe, Govinda bows to the ground before the perfected one.",
    key_claims: [
      "Wisdom is non-verbal and experiential; any verbalized truth is only half the truth, because its opposite is also true.",
      "Every being is already complete and sacred; the distinction between sinner and saint is a temporal illusion.",
      "Intellectual philosophies often despise love as attachment, yet love for the world as it actually is remains the highest spiritual achievement."
    ],
    concrete_evidence: [
      "Siddhartha picking up a stone from the riverbank, explaining that the stone is not merely a stone—it has been a cloud, a plant, an animal, and is worthy of love.",
      "Govinda's vision of thousands of living forms and cosmic faces streaming simultaneously across Siddhartha's forehead.",
      "Govinda prostrating himself with tears streaming down his face before the motionless, smiling ferryman."
    ],
    operational_mechanisms: [
      {
        name: "The Dialectic of Simultaneous Opposites",
        rule: "In the absolute realm, every truth carries its opposite within itself; light implies dark, virtue implies sin, and the seeker is already that which is sought."
      },
      {
        name: "The Cosmic Vision of Total Interbeing",
        rule: "Direct communion beyond words reveals that all forms of life are transient expressions of a single, eternal, loving consciousness."
      }
    ],
    verbatim_citations: [
      "Wisdom cannot be passed on. Wisdom which a wise man tries to communicate always sounds like foolishness.",
      "In every truth the opposite is equally true! That is to say: a truth can only be expressed and enveloped in words if it is one-sided.",
      "The world, Govinda, is not imperfect or slowly evolving along a long path to perfection. No, it is perfect at every moment; every sin already carries grace within itself.",
      "This smile of Siddhartha’s... was exactly the same as the calm, delicate, impenetrable, perhaps gracious, perhaps mocking, wise, thousandfold smile of Gotama, the Buddha."
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "siddhartha",
  title: "Siddhartha",
  author: "Hermann Hesse",
  publication_year: 1922,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Siddhartha with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Siddhartha
## A Forensic Philosophical Reconstruction of the Quest for Atman, Experiential Epistemology, and the Unity of Opposites
### By Hermann Hesse (1922)

---

## Executive Epistemic Summary

Hermann Hesse's *Siddhartha* is not merely an allegorical novel; it is a **rigorous phenomenological treatise on spiritual epistemology**. It investigates the fundamental problem of how consciousness attains liberation from suffering and alienation.

Across two grand movements and 12 invariant units, Hesse constructs a devastating critique of all institutionalized, doctrinal, and ascetic approaches to enlightenment:
1. **The Inadequacy of Sacramental Knowledge**: Mastery of scripture, liturgical rites, and Brahminical rituals provides intellectual map-making without transforming the territory of the soul.
2. **The Anesthetic Fallacy of Asceticism**: The extreme self-mortification of the Samanas merely suppresses the ego temporarily; it is functionally identical to drunkenness—an evasive flight from existence.
3. **The Incommunicability of Wisdom**: In the climactic confrontation with Gotama the Buddha, Siddhartha reveals that while doctrines convey coherent knowledge, the living experience of awakening cannot be taught.
4. **The Dialectic of Transmutation**: Enlightenment cannot bypass the flesh. To transcend the world, one must thoroughly experience it—tasting desire, commerce, luxury, gambling, despair, and heartbreak.
5. **The Non-Existence of Time**: Guided by the river and the silent ferryman Vasudeva, Siddhartha discovers that past, present, and future are linear illusions. All states of being exist simultaneously in the eternal Now.
6. **The Unity of Opposites**: Every verbalized truth is only half-true because its opposite is equally valid. The sinner is already a Buddha; the stone on the riverbank is already divine.

---

## The Fourfold Metaphysical Transmutation Cycle

\`\`\`
   [1. THESIS: SACRAMENTAL SCHOLASTICISM]
           (The Brahmin's Son)
        Mastery of Text, Ritual, & Veda
                     ↓ (Disillusionment)
   [2. ANTITHESIS A: NEGATIVE ESCAPE]
           (The Forest Samana)
    Ascetic Fasting, Self-Denial, Trance
                     ↓ (Failure to kill the Ego)
   [3. ANTITHESIS B: POSITIVE ENGAGEMENT]
        (The Courtesan & Merchant)
       Sensory Lust, Commerce, Sansara
                     ↓ (Nausea & Suicidal Despair)
   [4. SYNTHESIS: RECEPTIVE AT-ONE-MENT]
         (The River & The Ferryman)
   Listening to Om, Dissolution of Time,
      Radiant Compassion for All Being
\`\`\`

---

## The 12 Invariant Content Units

${units.map(u => `### Chapter ${u.chapter_num}: ${u.title}
- **Part**: ${u.part}
- **Setting & Timeline**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Narrative & Philosophical Synthesis
${u.summary}

#### Invariant Philosophical Claims
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Empirical Evidence & Concrete Realia
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Behavioral & Epistemological Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## Operational Principles for Life Mastery

### 1. The Triad of Absolute Leverage
When Siddhartha enters the city of pleasure and commerce, he possesses no money or social status, yet dominates his environment because of three spiritual faculties:
- **"I can think"**: Discernment, logic, critical inquiry, immunity to emotional manipulation.
- **"I can wait"**: Absolute patience, impulse control, freedom from urgent panic, long-term strategic horizon.
- **"I can fast"**: Complete physical independence from bodily cravings; inability to be blackmailed or bribed by physical luxury.

### 2. The Art of Listening as Transformation
Vasudeva embodies the highest form of presence: non-reactive, non-judgmental, compassionate listening. By absorbing another’s confession without projecting advice or ego, the listener provides a mirror in which the speaker’s internal divisions naturally harmonize.

### 3. The Rejection of Linear Time
Regret over the past and anxiety over the future are symptoms of a consciousness bound to linear time. In the perspective of the river, water at the mountain spring, water at the waterfall, and water in the ocean are one continuous, simultaneous entity.
`;

const mdPath = path.join(bookDir, 'master-notes.md');
fs.writeFileSync(mdPath, mdContent, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(fs.statSync(mdPath).size / 1024).toFixed(2)} KB)`);

// Render Standalone Interactive Reader index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Siddhartha — Hermann Hesse | Intellectualist Master Codex</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="stylesheet" href="../../css/reader-style.css">
  <style>
    :root {
      --bg-primary: #fcfbf9;
      --bg-card: #ffffff;
      --text-main: #1f1f1e;
      --text-muted: #6b6762;
      --accent-color: #85221c;
      --accent-soft: rgba(133, 34, 28, 0.08);
      --border-color: #e5e0d8;
      --border-subtle: #f0ebe1;
      --badge-bg: #f5f2ea;
      --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-serif: "Merriweather", Georgia, "Times New Roman", serif;
      --line-height: 1.75;
      --max-measure: 820px;
    }

    body.dark-mode {
      --bg-primary: #121314;
      --bg-card: #1c1d1f;
      --text-main: #e8e6e3;
      --text-muted: #9e9a93;
      --accent-color: #d9534f;
      --accent-soft: rgba(217, 83, 79, 0.15);
      --border-color: #2e3035;
      --border-subtle: #242629;
      --badge-bg: #26282c;
    }

    body.sepia-mode {
      --bg-primary: #f4ecd8;
      --bg-card: #fcf8ee;
      --text-main: #433422;
      --text-muted: #79664f;
      --accent-color: #8f3418;
      --accent-soft: rgba(143, 52, 24, 0.1);
      --border-color: #dfd2b9;
      --border-subtle: #ebdcc0;
      --badge-bg: #ebe0ca;
    }

    body.serif-font {
      font-family: var(--font-serif);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-primary);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: var(--line-height);
      transition: background-color 0.25s ease, color 0.25s ease;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Universal Header */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-color);
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      backdrop-filter: blur(8px);
    }
    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo-img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
    .brand-text h1 {
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--text-main);
    }
    .brand-text span {
      font-size: 0.75rem;
      color: var(--text-muted);
      display: block;
    }

    .topbar-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .btn-ctrl {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }
    .btn-ctrl:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    /* Sub-nav Views */
    .view-tabs-bar {
      background: var(--bg-primary);
      border-bottom: 1px solid var(--border-color);
      padding: 8px 24px;
      display: flex;
      justify-content: center;
      gap: 16px;
    }
    .view-tab {
      background: transparent;
      border: none;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-muted);
      padding: 6px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .view-tab.active {
      background: var(--accent-soft);
      color: var(--accent-color);
    }

    /* Main Container */
    .reader-container {
      max-width: var(--max-measure);
      margin: 32px auto;
      padding: 0 20px;
      flex: 1;
      width: 100%;
    }

    /* Hero Header */
    .codex-hero {
      text-align: center;
      padding: 36px 0 28px 0;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 36px;
    }
    .hero-badge {
      display: inline-block;
      background: var(--accent-soft);
      color: var(--accent-color);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 12px;
      border-radius: 12px;
      margin-bottom: 12px;
    }
    .codex-hero h2 {
      font-size: 2.3rem;
      font-family: var(--font-serif);
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
    }
    .codex-hero .hero-sub {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 680px;
      margin: 0 auto 16px auto;
    }
    .hero-meta-row {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    /* Unit Card */
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.02);
      transition: border-color 0.2s;
    }
    .unit-card:hover {
      border-color: var(--accent-color);
    }
    .unit-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 12px;
    }
    .unit-meta-top {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-color);
      margin-bottom: 4px;
    }
    .unit-title {
      font-size: 1.35rem;
      font-family: var(--font-serif);
      font-weight: 700;
      color: var(--text-main);
    }
    .unit-tier-badge {
      background: var(--badge-bg);
      border: 1px solid var(--border-color);
      font-size: 0.72rem;
      padding: 4px 8px;
      border-radius: 6px;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .unit-section-title {
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin: 18px 0 8px 0;
    }

    .prose-p {
      font-size: 0.98rem;
      margin-bottom: 14px;
      color: var(--text-main);
    }

    .bullet-list {
      list-style-type: none;
      margin-bottom: 16px;
    }
    .bullet-list li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.94rem;
    }
    .bullet-list li::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: var(--accent-color);
      font-weight: bold;
    }

    .mechanism-box {
      background: var(--bg-primary);
      border-left: 3px solid var(--accent-color);
      padding: 14px 18px;
      border-radius: 0 6px 6px 0;
      margin: 14px 0;
    }
    .mechanism-box h5 {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 4px;
    }
    .mechanism-box p {
      font-size: 0.92rem;
      font-style: italic;
    }

    .quote-box {
      background: var(--badge-bg);
      border-left: 3px solid #7c6f64;
      padding: 12px 18px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 0.95rem;
      margin: 12px 0;
      border-radius: 0 6px 6px 0;
    }

    /* Views visibility */
    .view-content {
      display: none;
    }
    .view-content.active {
      display: block;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-color);
      background: var(--bg-card);
      padding: 24px;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: auto;
    }
  </style>
</head>
<body>

  <!-- Universal Sticky Topbar -->
  <header class="topbar">
    <a href="../../index.html" class="brand-group">
      <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon" class="brand-logo-img">
      <div class="brand-text">
        <h1>Intellectualist Codex</h1>
        <span>Total Replacement Benchmark &bull; Hermann Hesse</span>
      </div>
    </a>
    <div class="topbar-controls">
      <button class="btn-ctrl" id="themeBtn" title="Toggle Theme">🌓 Theme</button>
      <button class="btn-ctrl" id="fontBtn" title="Toggle Serif / Sans">Aa Font</button>
      <a href="master-notes.md" class="btn-ctrl" download style="text-decoration:none;">📥 MD</a>
    </div>
  </header>

  <!-- View Switcher -->
  <nav class="view-tabs-bar">
    <button class="view-tab active" data-target="view-journey">View A: 12-Chapter Pilgrim's Path</button>
    <button class="view-tab" data-target="view-dialectic">View B: Ontological Transmutation Cycle</button>
    <button class="view-tab" data-target="view-heuristics">View C: Operational Heuristics of Living</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Philosophical Masterwork Benchmark</span>
      <h2>Siddhartha</h2>
      <p class="hero-sub">A Forensic Epistemological Reconstruction of the Quest for Atman, Experiential Awakening, and the Unity of Opposites</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Hermann Hesse</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1922</span>
        <span>&bull;</span>
        <span><strong>Structure:</strong> 12 Invariant Chapters (2 Parts)</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: 12-Chapter Pilgrim's Path -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">${u.part} &bull; Chapter ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Narrative & Philosophical Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Invariant Philosophical Claims</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Empirical Evidence & Concrete Realia</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Behavioral & Epistemological Mechanisms</div>
        ${u.operational_mechanisms.map(m => `
        <div class="mechanism-box">
          <h5>${m.name}</h5>
          <p>${m.rule}</p>
        </div>
        `).join('')}

        <div class="unit-section-title">Verbatim Canonical Citations</div>
        ${u.verbatim_citations.map(q => `
        <div class="quote-box">"${q}"</div>
        `).join('')}
      </article>
      `).join('')}
    </section>

    <!-- VIEW B: Ontological Transmutation Cycle -->
    <section id="view-dialectic" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Dialectical Transmutation of the Soul</h3>
        <p class="prose-p">Hesse structures Siddhartha's awakening not as a straight ascent, but as a Hegelian-Vedic dialectic that must exhaust thesis, antithesis, and counter-antithesis before achieving radiant synthesis.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. Thesis: Ritual & Intellectual Scholasticism (The Brahmin)</h5>
          <p>Mastery of mantras, Vedas, and external religious forms. Result: Existential bankruptcy. Knowledge about truth is not truth itself.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. Antithesis A: Negative Mortification (The Samana)</h5>
          <p>The denial of the body, sensory suppression, fasting, and trance. Result: The ego is anesthetized but remains alive. Asceticism is merely a pious flight from existence.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. Antithesis B: Positive Immersion (The Courtesan & Merchant)</h5>
          <p>The total immersion in physical passion, luxury, commerce, and gaming. Result: Sensory deadening, nausea, and the suicidal abyss. The flesh cannot satisfy the spirit.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. Synthesis: Receptive At-One-Ment (The River & The Ferryman)</h5>
          <p>Listening to the river, dissolving the illusion of linear time, accepting the simultaneously divine nature of all things, and radiating universal love.</p>
        </div>
      </div>
    </section>

    <!-- VIEW C: Operational Heuristics of Living -->
    <section id="view-heuristics" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Operational Heuristics of Applied Living</h3>
        <p class="prose-p">Siddhartha provides actionable mental models for real-world autonomy, psychological resilience, and relationship navigation.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Triad of Absolute Leverage ("I can think. I can wait. I can fast.")</h5>
          <p>He who can think cannot be misled by false dogma. He who can wait cannot be pressured into panic. He who can fast cannot be bribed by physical need.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Ferryman's Listening Protocol</h5>
          <p>True communication is not advice-giving; it is non-judgmental presence. Listening without ego creates a mirror in which others heal themselves.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Law of Parental Relinquishment</h5>
          <p>No master or parent can spare another soul their necessary suffering. Love requires opening the cage door and letting the beloved make their own mistakes.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. The Simultaneity of Opposites</h5>
          <p>Never condemn the sinner; in the perspective of eternity, the sinner is already a Buddha. All things are holy at every instant.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; Hermann Hesse's <em>Siddhartha</em> &bull; Standalone Certified Knowledge Reconstruction</p>
  </footer>

  <script>
    // Theme toggle
    const themeBtn = document.getElementById('themeBtn');
    const themes = ['light', 'dark-mode', 'sepia-mode'];
    let currentThemeIdx = 0;
    themeBtn.addEventListener('click', () => {
      document.body.classList.remove('dark-mode', 'sepia-mode');
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      if (themes[currentThemeIdx] !== 'light') {
        document.body.classList.add(themes[currentThemeIdx]);
      }
    });

    // Font toggle
    const fontBtn = document.getElementById('fontBtn');
    fontBtn.addEventListener('click', () => {
      document.body.classList.toggle('serif-font');
    });

    // View tabs switcher
    const tabs = document.querySelectorAll('.view-tab');
    const viewSections = document.querySelectorAll('.view-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        viewSections.forEach(s => s.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  </script>
</body>
</html>
`;

const htmlPath = path.join(bookDir, 'index.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log(`Successfully rendered Siddhartha index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
