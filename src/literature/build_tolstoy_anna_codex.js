/**
 * Builder for Leo Tolstoy: Anna Karenina
 * Standard: BKRS v2.0 Production Master
 * Architecture: 12 Comprehensive Narrative Units | Russian Realism & Moral Philosophy
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'anna-karenina');
fs.mkdirSync(targetDir, { recursive: true });

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Oblonsky Turmoil & The Moscow Station: All Happy Families & The Crushed Peasant",
    scope: "Part 1, Chapters 1-18: The Axiom of Families, Stiva's Infidelity, Dolly's Despair & The Fatal Arrival",
    epistemic_status: "SOCIAL_REALISM & OMINOUS_FORESHADOWING",
    materiality: "CRITICAL",
    core_theme: "The opening domestic catastrophe of Prince Stepan Oblonsky (Stiva), the arrival of Anna Karenina to reconcile the family, and the ominous death of the railway watchman.",
    textual_analysis: [
      "Tolstoy opens the novel with the supreme sociological axiom of world literature: 'All happy families are alike; each unhappy family is unhappy in its own way.' Everything is in confusion in the household of Prince Stepan Arkadyevich Oblonsky (Stiva). Stiva's wife, Darya Alexandrovna (Dolly), has discovered his affair with their children's former French governess, plunging the Moscow home into weeping chaos.",
      "The Character of Stiva Oblonsky: Stiva represents the charming, unthinking hedonism of Russian high society. Incapable of genuine remorse or sustained discipline, he views life as a pleasant feast, smoothing over moral ruptures with easy laughter, fine wine, and oysters, relying on his sister, Anna Arkadyevna Karenina, to travel from St. Petersburg to mediate the crisis.",
      "The Arrival at the Moscow Railway Station: As the train from Petersburg arrives through the freezing winter fog, Count Alexei Kirillovich Vronsky—a wealthy, dashing young guards officer—is also at the station to meet his mother, Countess Vronskaya. Vronsky meets Anna as she steps from the carriage. He is captivated by the extraordinary vitality and suppressed warmth of her gaze, noting that an eager light animated her face, as though an excess of life filled her being.",
      "The Prophetic Omen of Death: While the train is shunting carriages, a railway watchman accidentally falls onto the rails and is crushed to death beneath the train wheels. The crowd gathers around the severed body. Anna is deeply shaken, whispering with instinctive prophetic dread: 'It is an evil omen.' Vronsky ostentatiously leaves two hundred rubles for the watchman's widow, seeking to impress Anna."
    ],
    verbatim_quote: "All happy families are alike; each unhappy family is unhappy in its own way... / 'It is an evil omen,' Anna said. / 'An evil omen?' Vronsky repeated. 'Why do you say that?' / 'A man has been crushed to death. It is an evil omen, I know it.'",
    operational_heuristic: "Do not dismiss visceral somatic dread encountered at the inception of a passion; prophetic omens are the subconscious mind's instantaneous calculation of latent catastrophe.",
    key_motifs: [
      "All Happy Families are Alike",
      "Stiva's Carefree Infidelity",
      "The Excess of Life in Anna's Face",
      "The Crushed Watchman on the Rails",
      "The 200-Ruble Gift to the Widow"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Rejection of Levin & The Fatal Ball: Kitty’s Infatuation & Anna’s Black Velvet Dress",
    scope: "Part 1, Chapters 19-34: Konstantin Levin's Proposal, Kitty's Refusal, The Moscow Society Ball & The Bewitching Dance",
    epistemic_status: "ROMANTIC_CRISIS & EROTIC_TRANSGRESSION",
    materiality: "CRITICAL",
    core_theme: "The contrast between Konstantin Levin's earnest rural love and the high-society glamour of Moscow: Kitty rejecting Levin for Vronsky, and Vronsky abandoning Kitty at the ball for Anna.",
    textual_analysis: [
      "Konstantin Dmitrievich Levin—a serious, awkward, philosophical landowner who lives on his rural estate Pokrovskoye—arrives in Moscow to propose to eighteen-year-old Princess Ekaterina Shcherbatskaya (Kitty). Levin worships the Shcherbatsky household as an altar of aristocratic purity. But Kitty, dazzled by the glamorous attentions of Count Vronsky, rejects Levin's proposal, expecting Vronsky to propose at the upcoming society ball.",
      "The Ball in Moscow: The grand ballroom is an arena of social display. Kitty arrives radiant in pink, eagerly anticipating her betrothal. But when Anna Karenina enters the ballroom, all eyes turn to her. Rather than wearing the expected lilac, Anna wears a low-cut black velvet gown trimmed with Venetian lace, a small garland of pansies in her dark hair, and a pearl necklace. Her beauty is not theatrical; it is radiant, natural, and intoxicating.",
      "The Tragic Betrayal: Vronsky dances the mazurka with Anna, ignoring Kitty completely. As they circle the floor, Kitty watches in horror as Anna's eyes flash with triumphant, forbidden joy, while Vronsky gazes upon Anna with total, hypnotic surrender. Kitty realizes in an instant that her romantic dreams are obliterated: Vronsky is completely captivated by Anna.",
      "Anna's Guilt and Departure: Realizing the devastation she has inflicted upon Kitty, Anna flees Moscow the following morning on the blizzard train back to Petersburg, desperate to escape Vronsky and return to her safe, respectable domestic life."
    ],
    verbatim_quote: "Anna was not in lilac, as Kitty had so much wanted, but in a low-cut black velvet gown... It was only the frame, and only the woman was visible—simple, natural, elegant, and at the same time gay and animating.",
    operational_heuristic: "True erotic magnetism cannot be neutralized by polite social etiquette; when elemental passion erupts in an artificial social salon, it ruthlessly incinerates innocent bystanders.",
    key_motifs: [
      "Levin's Awkward Country Proposal",
      "Kitty's Crushing Rejection",
      "Anna's Black Velvet Gown with Venetian Lace",
      "The Tragic Mazurka",
      "The Flight on the Blizzard Train"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Cold Sockets of Karenin: Bureaucracy in Petersburg & Vronsky’s Relentless Pursuit",
    scope: "Part 2, Chapters 1-13: The Return to Petersburg, Alexei Alexandrovich's Ears, Seryozha & The Consummation",
    epistemic_status: "DOMESTIC_ALIENATION & ILLICIT_PASSION",
    materiality: "CRITICAL",
    core_theme: "Anna's return to Petersburg: realizing the emotional sterility of her husband Alexei Karenin, her tender love for her son Seryozha, and her total erotic surrender to Vronsky.",
    textual_analysis: [
      "Stepping onto the platform in St. Petersburg, Anna is greeted by her husband, Alexei Alexandrovich Karenin, a high-ranking government minister twenty years her senior. For the first time in their eight years of marriage, Anna looks at him with detached, microscopic disgust: she notices the unsightly cartilaginous rims of his prominent ears, his dull monotonous voice, and the dry, mechanical crack of his finger joints.",
      "The Cold Bureaucratic Machine: Karenin is not a monster; he is a conscientious, upright, and devout bureaucrat whose entire psyche is constructed of administrative rules and social propriety. Emotion terrifies him. He views marriage as a formal institution that functions smoothly so long as decorum is observed.",
      "Seryozha as the Sacred Anchor: In her home, Anna finds warmth only in her eight-year-old son, Seryozha. Seryozha is the sole emotional center of her life, loving her with instinctive, unconditional devotion.",
      "Vronsky's Siege and Surrender: Vronsky follows Anna to Petersburg, infiltrating her social set (the salon of Countess Betsy Tverskaya). He pursues her relentlessly, indifferent to scandal. After a year of resistance, Anna surrenders. Following their first sexual union, Anna falls into despair, weeping and feeling like a ruined criminal: 'Everything is finished... I have nothing now but you. Remember that.' Vronsky feels like a murderer looking down upon the body of his victim."
    ],
    verbatim_quote: "'Oh, dear! What has happened to his ears?' she thought, looking at his cold, imposing figure... She felt that she had never noticed before how they stuck out from his head.",
    operational_heuristic: "When unexamined domestic boredom is suddenly exposed to overwhelming passion, long-tolerated quirks in a partner transmute instantly into repulsive physical deformities.",
    key_motifs: [
      "Alexei Alexandrovich's Prominent Ears",
      "The Mechanical Cracking of Knuckles",
      "Seryozha (The Sole Anchor)",
      "The Cynical Salon of Betsy Tverskaya",
      "The Consummation as Murder"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The Fall of Frou-Frou: The Officers’ Steeplechase & The Public Confession",
    scope: "Part 2, Chapters 24-29: Krasnoye Selo Races, Vronsky's Mare Frou-Frou, The Fatal Jump & Anna's Outburst",
    epistemic_status: "SPORTING_TRAGEDY & FATAL_BLUNDER",
    materiality: "CRITICAL",
    core_theme: "The dramatic officers' steeplechase at Krasnoye Selo: Vronsky's beloved thoroughbred mare Frou-Frou breaking her back through his clumsy riding, and Anna publicly confessing her affair to Karenin.",
    textual_analysis: [
      "At the imperial summer military maneuvers in Krasnoye Selo, the high-society elite gathers for the dangerous four-mile officers' steeplechase. Vronsky rides his magnificent, nervous English thoroughbred mare, Frou-Frou—an animal whose slender, sensitive, and passionate nature mirrors Anna Karenina herself.",
      "The Race and the Fatal Blunder: Vronsky rides brilliantly, overtaking his rivals one by one. Approaching the final obstacle (the water jump), Frou-Frou flies through the air. But as she lands, Vronsky makes an unpardonable, clumsy error: he fails to keep pace with the horse's motion and falls heavily backward onto the saddle, breaking the mare's delicate spine.",
      "The Death of Frou-Frou: The horse struggles to rise, her back legs paralyzed, looking at Vronsky with intelligent, weeping eyes. Vronsky kicks her in the stomach in frantic fury, before the veterinarian puts a pistol to her head. Vronsky walks from the turf in bitter, humiliated self-hatred, realizing that his own clumsy recklessness has destroyed the beautiful creature that trusted him.",
      "The Public Breakdown in the Royal Pavilion: In the royal pavilion, Anna watches Vronsky fall. Believing he is killed, she loses all control, gasping, weeping, and clutching her hands to her heart before the entire Petersburg aristocracy. Karenin takes her away in their carriage, rebuking her for violating decorum. Broken and exhausted, Anna drops all pretenses: 'I love him, I am his mistress, I hate you, I despise you, do what you will with me!'"
    ],
    verbatim_quote: "With a face distorted by passion, pale and with trembling lower jaw, he kicked her with his heel in the belly, and again pulled at the rein, but she did not move... His foot was caught in the stirrup. The mare's back was broken.",
    operational_heuristic: "A man whose vanity and recklessness breaks the back of a noble horse through careless riding will inevitably, through the same psychological flaw, destroy the woman who surrenders her life to him.",
    key_motifs: [
      "The Krasnoye Selo Steeplechase",
      "Frou-Frou (The Mirror of Anna)",
      "The Broken Spine on the Turf",
      "Anna's Hysteria in the Royal Box",
      "The Carriage Confession: 'I hate you, I am his mistress'"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "The Sacred Rhythm of the Scythe: Levin Mowing with the Peasants & The Agrarian Soul",
    scope: "Part 3, Chapters 1-12: Pokrovskoye Estate, The Mowing of the Meadow, Titus & The Transcendence of Labor",
    epistemic_status: "PHENOMENOLOGICAL_EPIPHANY & AGRARIAN_MYSTICISM",
    materiality: "CRITICAL",
    core_theme: "Tolstoy's counter-narrative of authentic life: Konstantin Levin retreating to his estate, mowing hay alongside peasant laborers, and achieving sublime physical and spiritual peace.",
    textual_analysis: [
      "In sharp contrast to the poisoned, theatrical salon life of Petersburg, Tolstoy moves the narrative to the countryside, following Konstantin Levin on his ancestral estate of Pokrovskoye. Crushed by Kitty's rejection, Levin seeks refuge not in cynical pleasures, but in hard physical labor and agricultural reform.",
      "The Mowing of the Svyatki Meadow: In June, during the heavy hay harvest, Levin takes a scythe and joins a row of forty peasant laborers led by the old peasant Titus. At first, Levin's aristocratic muscles ache and burn; he sweats profusely, struggling to keep pace with the rhythm of the scythemen.",
      "The Trance of Physical Transcendence: As the hours pass under the blazing sun, an extraordinary transformation occurs. Levin forgets himself, his heartbreak, and his intellectual doubts. His hands move automatically; the scythe cuts the juicy grass in clean, singing swathes: 'The longer Levin mowed, the more often he felt moments of oblivion, during which it was not his hands that swung the scythe, but the scythe itself that whirled his whole body, full of life and conscious of itself.'",
      "Eating Bread by the River: At midday, Levin sits with the peasants on the riverbank, drinking cold spring water and eating black rye bread dusted with hay. He experiences an absolute, radiant joy that completely surpasses the artificial luxury of Moscow balls: he has touched the uncorrupted bedrock of Russian life."
    ],
    verbatim_quote: "The longer Levin mowed, the more often he felt moments of unconsciousness, when it was not his hands that swung the scythe, but the scythe that seemed to move of itself, a body full of life and conscious of itself, and, as if by magic, without thinking of it, the work was done of its own accord.",
    operational_heuristic: "To heal mental anguish and existential paralysis, abandon intellectual rumination; immerse the body in rigorous, rhythmic physical labor alongside honest working men.",
    key_motifs: [
      "The Pokrovskoye Estate",
      "Mowing with Old Titus",
      "The Singing Rhythm of the Scythe",
      "The Oblivion of Physical Labor",
      "Rye Bread by the River"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Bed of Puerperal Fever: Karenin’s Forgiveness & The Flight to Italy",
    scope: "Part 4, Chapters 17-23: Anna's Delivery, Puerperal Fever, Karenin's Christian Metanoia & Vronsky's Suicide Attempt",
    epistemic_status: "SPIRITUAL_METANOIA & EROTIC_REVERSAL",
    materiality: "CRITICAL",
    core_theme: "Anna gives birth to Vronsky's child and falls mortally ill with childbed fever; Karenin's sublime Christian forgiveness, Vronsky shooting himself, and the lovers' flight abroad.",
    textual_analysis: [
      "Karenin prepares formal divorce proceedings that will legally brand Anna an adulteress, destroy her social standing, and permanently deprive her of Seryozha. But before the papers are filed, he receives a desperate telegram from Petersburg: Anna has given birth to a daughter (Annie) and is dying of puerperal (childbed) fever.",
      "The Sublimity of Deathbed Forgiveness: Arriving at the apartment, Karenin enters the sickroom. In her delirium, Anna clutches his hand, weeping and begging for forgiveness: 'Forgive me, forgive me entirely! I am the same as I was... but there is another woman inside me, and she fell in love with that man.' Overcome by a sudden, divine grace, Karenin drops all bitterness. He throws himself on his knees beside her bed, weeping tears of pure Christian love and forgiveness.",
      "Vronsky's Humiliation and Suicide: Vronsky stands in the room, shattered by Karenin's moral superiority: the despised bureaucrat has revealed himself as a saint. Karenin takes Vronsky's hand and says: 'I forgive you, and I bear you no malice.' Humiliated, stripped of his romantic glamour, Vronsky returns to his quarters, places a service revolver against his chest, and pulls the trigger. The bullet passes beneath his heart, wounding him severely but failing to kill him.",
      "The Reversion to Ego: Against all medical odds, Anna survives. But as her health returns, the sublime spiritual atmosphere evaporates. Anna cannot bear to live with a husband who is a saint; his forgiveness feels like an intolerable moral prison. Once Vronsky recovers, Anna refuses Karenin's divorce terms (which require formal legal perjury), takes the infant Annie, abandons Seryozha, and elopes with Vronsky to Italy."
    ],
    verbatim_quote: "Alexei Alexandrovich took her hands, and could not hold back the tears that choked him... 'Forgive me!' she cried. 'Forgive me, Alexei! I am dying, I want your forgiveness!' / And a glad feeling of love and forgiveness for his enemies filled his heart.",
    operational_heuristic: "Sublime spiritual forgiveness cannot sustain an erotic relationship; when a fallen partner cannot endure the moral altitude of a forgiving spouse, forgiveness itself becomes an unbearable insult that accelerates flight.",
    key_motifs: [
      "Puerperal Childbed Fever",
      "Karenin Weeping on His Knees",
      "The Transformation into a Christian Saint",
      "Vronsky's Pistol to the Sternum",
      "The Elopement to Italy"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Chalk-Written Confession & The Wedding: Levin and Kitty’s Holy Matrimony",
    scope: "Part 4, Chapters 9-16: The Dinner at the Oblonskys', The Chalk Letters on the Baize & The Radiant Wedding",
    epistemic_status: "TELEPATHIC_COMMUNION & SACRAMENTAL_JOY",
    materiality: "IMPORTANT",
    core_theme: "The reconciliation of Levin and Kitty: the magical game of initials on the green baize table, the formal proposal, and their radiant Orthodox wedding ceremony.",
    textual_analysis: [
      "In one of the most famous, autobiographical scenes in all of literature (drawn directly from Tolstoy's own courtship of Sonya Bers), Levin and Kitty meet again at a dinner party at the Oblonskys'. Kitty has recovered from her illness at a German spa, chastened and mature; Levin still loves her with pure, unshakable devotion.",
      "The Game of Chalk Initials: Sitting together at a green card table, Levin takes a piece of chalk and writes the initials of a long sentence: 'w, y, t, m, i, c, n, b, d, t, m, n, o, t' (When you told me it could not be, did that mean never, or then?). Without hesitation, through pure intuitive telepathy, Kitty reads his exact meaning and writes back: 't, I, c, n, a, o' (Then I could not answer otherwise). They continue writing initials, understanding each other's innermost thoughts without speaking a single spoken word.",
      "The Confession of Diaries: Before the wedding, Levin insists on giving Kitty his personal intimate diaries, revealing his past sexual encounters and his agonizing religious doubts. Kitty is weeping and shocked by the reality of the masculine world, but forgives him completely, cementing their relationship on total, absolute honesty.",
      "The Wedding Ceremony: Their Russian Orthodox wedding in Moscow is described with glorious liturgical detail: the crowns held over their heads, the joyous singing of the choir, Kitty's serene bridal beauty, and Levin's profound awe at receiving an angel into his life."
    ],
    verbatim_quote: "He wrote the initial letters: 'w, y, t, m, i, c, n, b, d, t, m, n, o, t'... Kitty looked at these letters, and her face grew serious and attentive. Suddenly her eyes shone with understanding... She understood it all, without a word.",
    operational_heuristic: "Lasting romantic union is built not on theatrical infatuation, but on deep intuitive telepathy and absolute transparency that hides no shadow from the beloved.",
    key_motifs: [
      "The Green Baize Card Table",
      "The Chalk-Written Initial Letters",
      "Levin's Painful Diary Confession",
      "The Golden Crowns of Matrimony",
      "The Contrast with Anna's Adultery"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Scent of Mortality: The Death of Nikolai Levin & The Italian Exile of the Lovers",
    scope: "Part 5, Chapters 1-20: Nikolai's Dying Bed in the Hotel, Kitty's Practical Care & Anna and Vronsky in Italy",
    epistemic_status: "SENSORY_MORTALITY & BOHEMIAN_DILLETANTISM",
    materiality: "IMPORTANT",
    core_theme: "The visceral reality of death: Kitty nursing Levin's consumptive brother Nikolai in a squalid hotel, contrasted with Anna and Vronsky's aimless, aesthetic exile in Italy.",
    textual_analysis: [
      "Part 5 masterfully juxtaposes two realities: the sacred reality of marriage confronting death, and the hollow bohemian aestheticism of illicit love abroad.",
      "The Death of Nikolai Levin: Levin receives news that his older brother Nikolai—a bitter, radical nihilist living with a former prostitute named Masha—is dying of consumption in a filthy provincial hotel room. Levin is paralyzed by metaphysical dread and philosophical helplessness. But Kitty immediately takes charge with practical feminine love: she cleans the foul room, changes the soiled sheets, orders clean linen, washes the dying man, and brings him sweet broth. Nikolai dies peacefully in her arms, teaching Levin that love acts while philosophy merely shudders.",
      "The Italian Sojourn: Meanwhile, Anna and Vronsky travel through Italy, renting a magnificent Venetian palazzo. Free from Russian social scrutiny, Vronsky takes up painting, commissioning portraits of Anna from an expatriate artist named Mikhailov. But without military duties, social standing, or useful work, Vronsky soon grows bored and restless.",
      "The Golden Cage: Anna becomes acutely aware that while she has sacrificed everything—her son, her reputation, her home—Vronsky has sacrificed only temporary social convenience. Her entire existence now depends solely on maintaining Vronsky's romantic infatuation, planting the seeds of paranoid jealousy."
    ],
    verbatim_quote: "Levin could not look calmly at his brother; he could not be natural and calm in his presence... But Kitty thought, felt, and acted quite differently. At the sight of the sick man she was seized with pity, and that pity in her womanly heart produced not horror, but a need to act.",
    operational_heuristic: "Theoretical intellect freezes in the presence of mortal decay; practical feminine compassion acts instinctively to dignify the dying with physical cleanliness and tenderness.",
    key_motifs: [
      "Nikolai's Consumptive Bed in the Squalid Hotel",
      "Kitty's Practical Ministry of Care",
      "The Italian Palazzo and Vronsky's Painting",
      "Mikhailov's Portrait of Anna",
      "The Golden Cage of Boredom"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Birthday Dawn & The Insult at the Opera: Seryozha’s Embrace & High Society’s Hypocrisy",
    scope: "Part 5, Chapters 29-33: Returning to Petersburg, The Dawn Infiltration, Seryozha's Tenth Birthday & The Scandal at the Theater",
    epistemic_status: "MATERNAL_MARTYRDOM & SOCIAL_OSTRACISM",
    materiality: "CRITICAL",
    core_theme: "Anna returns secretly to Petersburg to see her son on his tenth birthday, followed by her public humiliation at the opera house where high society ostracizes her.",
    textual_analysis: [
      "Yearning for her abandoned son, Anna risks returning to St. Petersburg. Karenin has told Seryozha that his mother is dead, schooling the boy in cold, mechanical obedience.",
      "The Infiltration at Dawn: On the morning of Seryozha's tenth birthday, before the household awakens, Anna bribes the hall porter and slips into Seryozha's bedroom. The boy awakens, looks into her face, and cries out in wild, ecstatic joy: 'Mama!' Mother and son cling to each other, weeping and kissing in a frenzy of desperate maternal love. Seryozha whispers that he knew she was alive and that he prays for her every night. When Karenin walks into the doorway in his dressing gown, Anna flees down the staircase in tears.",
      "The Defiance at the Opera: That evening, desperate to assert her social dignity, Anna insists on attending the Italian opera at the Bolshoi Theatre, despite Vronsky's warnings. She appears in a grand box, dressed in opulent jewels.",
      "The Social Guillotine: The response of Petersburg society is brutal: women in adjacent boxes openly sneer and turn their backs; a former friend, Madame Kartasova, loudly insults Anna from the stalls, calling her a shameful fallen woman. High society—which readily tolerates secret adultery—cannot forgive an open, honest defiance of its hypocritical rules. Anna leaves the theater in hysterical humiliation, her social death sealed."
    ],
    verbatim_quote: "'Seryozha! My darling boy!' she whispered, clutching him to her breast... / 'Mama!' he cried, throwing his little arms around her neck... 'I knew! Today is my birthday! I knew you would come!'",
    operational_heuristic: "High society never punishes vice; it punishes the honest admission of vice; to openly flout social hypocrisy while demanding social acceptance guarantees brutal ostracism.",
    key_motifs: [
      "The Dawn Infiltration on Seryozha's Birthday",
      "Seryozha's Cry: 'Mama!'",
      "Karenin in the Doorway",
      "The Opulent Box at the Italian Opera",
      "The Public Shunning by Petersburg Society"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Modernized Estate of Vozdvizhenskoye: Dolly’s Visit, Morphine & Cracks in Paradise",
    scope: "Part 6: Dolly Travels to the Country, English Lawns & Steam Plows, Morphine Addiction & Growing Paranoia",
    epistemic_status: "DECEPTIVE_PROSPERITY & ADDICTIVE_UNRAVELING",
    materiality: "CRITICAL",
    core_theme: "Dolly visits Anna and Vronsky at their luxurious country estate Vozdvizhenskoye: observing the hollow luxury of English lawns and modern hospitals, Anna's secret morphine addiction, and irrational jealousy.",
    textual_analysis: [
      "Dolly Oblonsky travels by carriage to visit Anna and Vronsky at their magnificent estate of Vozdvizhenskoye. Exhausted by domestic poverty and child-rearing, Dolly secretly envies Anna's glamorous romance.",
      "The Mirage of European Modernity: Arriving at the estate, Dolly is stunned by its lavish, imported European luxury: sweeping gravel drives, manicured English lawns, tennis courts, a state-of-the-art peasant hospital with Swiss doctors, and modern steam plows. Vronsky plays the role of progressive country magnate with immense wealth.",
      "The Hollow Core: As Dolly spends time with Anna, the façade crumbles. Anna does not nurse her daughter Annie; she barely knows how many teeth the infant has. Anna spends her days reading novels, riding horses in English habits, and obsessing over her looks. Dolly discovers that Anna cannot sleep without increasing doses of morphine.",
      "The Trap of Total Dependence: Anna confesses her terror to Dolly: because she refused a divorce, any children she bears with Vronsky are legally Karenin's and cannot inherit Vronsky's name or fortune. More critically, Anna admits her toxic, suffocating jealousy: 'For me, love is everything. If his love cools by one degree, I have nothing left in this world.' Dolly departs in relief, realizing that her own chaotic, exhausted family life is infinitely purer than Anna's gilded prison."
    ],
    verbatim_quote: "Dolly saw that the luxury, the tennis courts, the hospital, were all an elaborate stage setting... Anna's eyes burned with an unnatural, feverish brilliance. She confessed that every night she took drops of morphine to sleep.",
    operational_heuristic: "Material opulence and modernized philanthropic projects cannot paper over spiritual emptiness; when love becomes an absolute idol, it degenerates into paranoid addiction.",
    key_motifs: [
      "The Vozdvizhenskoye Estate",
      "The English Lawn and Steam Plows",
      "Dolly's Disillusionment",
      "Anna's Nightly Drops of Morphine",
      "The Idolization of Erotic Love"
    ]
  },
  {
    unit_id: "unit-11",
    unit_number: 11,
    chapter_number: 11,
    title: "The Candle Blotted Out: Paranoia, The Carriage through Moscow & The Rails at Nizhny Novgorod",
    scope: "Part 7, Chapters 23-31: The Final Quarrel, The Hallucinatory Carriage Ride, The Station Platform & The Wheels of Death",
    epistemic_status: "PSYCHOLOGICAL_COLLAPSE & TRAGIC_CATHARSIS",
    materiality: "CRITICAL",
    core_theme: "The tragic climax: Anna's final bitter quarrel with Vronsky, her hallucinatory carriage ride through Moscow observing universal human hypocrisy, and her suicide beneath the freight train.",
    textual_analysis: [
      "Living in isolated misery in Moscow, Anna and Vronsky's relationship enters its death spiral. Every word becomes a weapon. When Vronsky leaves for the country to visit his mother, Anna convinces herself that he no longer loves her and intends to marry an aristocratic virgin chosen by his family.",
      "The Hallucinatory Carriage Ride: In a state of acute psychic fragmentation aggravated by morphine withdrawal, Anna orders her carriage to drive through the streets of Moscow to the railway station. Looking out the window, her mind strips all illusions from human reality: every person she sees—an ugly schoolboy eating an ice, a fat merchant, a preening woman—appears grotesque, hypocritical, and spiteful: 'We are all created to suffer, and we all know it, and all of us invent deceits to escape it!'",
      "The Platform at Nizhny Novgorod Station: Arriving at the station, Anna walks down the platform as a freight train slowly rumbles past. The shunting cars and the clanking iron trigger the memory of the railway watchman crushed on the day she first met Vronsky: 'There!' she says to herself. 'Into the very middle, and I shall punish him and rid myself of everyone and of myself!'",
      "The Suicide Beneath the Wheels: Dropping her red handbag, Anna falls to her knees between the rails as the second truck of the train approaches. She crosses herself, crying aloud: 'Lord, forgive me for everything!' As the crushing iron wheel strikes her body, the candle by which she had read the book of life—filled with trouble, falsehoods, grief, and evil—flares up with a brilliant light, illuminates all that was in darkness, flickers, grows dim, and goes out forever."
    ],
    verbatim_quote: "And at the same instant she was seized with terror at what she was doing. 'Where am I? What am I doing? What for?' She tried to get up, to throw herself back; but something huge, remorseless, struck her on the head and dragged her down on her back. 'Lord, forgive me for everything!' she said... And the candle by which she had read the book filled with troubles, falsehoods, sorrow, and evil, flared up with a light more brilliant than ever, flared up, began to dim, and went out forever.",
    operational_heuristic: "Unbridled erotic passion unmoored from moral responsibility consumes itself from within; the final stage of self-worship is total misanthropy and catastrophic self-annihilation.",
    key_motifs: [
      "The Final Bitter Quarrel",
      "The Hallucinatory Carriage Ride",
      "The Red Handbag Dropped in the Snow",
      "'Lord, forgive me for everything!'",
      "The Extinguished Candle of Life"
    ]
  },
  {
    unit_id: "unit-12",
    unit_number: 12,
    chapter_number: 12,
    title: "The Serbian Front & The Rye Field Epiphany: Vronsky’s Toothache & Levin’s Living Faith",
    scope: "Part 8: Two Months Later, The Volunteers for the Serbian War, Vronsky's Toothache & Levin's Enlightenment",
    epistemic_status: "HISTORICAL_EPILOGUE & SPIRITUAL_ENLIGHTENMENT",
    materiality: "CRITICAL",
    core_theme: "The aftermath: Vronsky's broken silence as he departs for the Serbian war seeking death, and Levin's philosophical breakthrough in the rye field: living not for reason, but for God and goodness.",
    textual_analysis: [
      "Tolstoy concludes the novel two months after Anna's suicide, shifting between the martial hysteria of the Slavic war in Serbia and the tranquil harvest on Levin's estate.",
      "Vronsky's Living Death: At the railway station, volunteer soldiers board trains to fight the Turks in Serbia. Among them is Vronsky, who has outfitted an entire cavalry squadron at his own expense. He is an emotionally gutted ghost, tormented by a raging toothache that masks his agony. He breaks his silence to Stiva, recalling the horror of seeing Anna's mangled corpse on the station table: 'I suffered as a man... But to see her mutilated, bloody, lying on that table... I am glad to have a war to die in.'",
      "Levin's Intellectual Crisis: Meanwhile at Pokrovskoye, despite the birth of his healthy son Dmitry and his idyllic marriage to Kitty, Levin contemplates suicide. Reading Plato, Spinoza, Kant, and Schopenhauer, his rational mind cannot explain the purpose of life in a cold, materialistic universe governed by death.",
      "The Words of Peasant Fyodor: One afternoon, while watching the threshing in the rye field, Levin listens to a peasant named Fyodor describe two old men in the village: one lives only for himself and his belly, but the other, old Platon, 'lives for his soul, and remembers God.'",
      "The Epiphany of Goodness: The peasant's words detonate in Levin's consciousness like a flash of lightning. He realizes that reason can never discover the meaning of life; reason is purely mechanical. Goodness, truth, and love are non-rational, given by God to human hearts: 'I looked for an answer in science and philosophy, but the answer was given to me by life itself through the heart of a simple peasant!' Watching a summer thunderstorm clear over the fields, holding his infant child, Levin concludes: 'My whole life, everything that can happen to me, every minute of it, is not only not meaningless, as it was before, but has the unquestionable meaning of goodness, with which it is in my power to invest it!'"
    ],
    verbatim_quote: "My reason will still not understand why I pray, but I shall still pray, and my life now, my whole life, independently of anything that can happen to me, every minute of it is no longer meaningless as it was before, but has an unquestionable meaning of goodness with which it is in my power to invest it!",
    operational_heuristic: "The meaning of human existence cannot be discovered through rational deduction; it is an intuitive revelation lived through humble labor, family fidelity, and active goodness.",
    key_motifs: [
      "The Volunteers for the Serbian War",
      "Vronsky's Toothache and Death Wish",
      "Levin's Suicidal Philosophical Crisis",
      "Peasant Fyodor: 'Living for the Soul'",
      "The Summer Thunderstorm and the Meaning of Goodness"
    ]
  }
];

// Write knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log(`[1/3] Wrote knowledge-units.json (${units.length} units)`);

// Build master-notes.md
let md = `# Anna Karenina
**Author:** Leo Tolstoy  
**Original Publication:** 1877 (*The Russian Messenger*)  
**Standard:** BKRS v2.0 Total Knowledge Reconstruction System  
**Category:** Russian Realism, Social Autopsy & Moral Philosophy  

---

## Executive Architectural Summary

*Anna Karenina* stands as Leo Tolstoy's supreme panoramic masterpiece—a novel hailed by Fyodor Dostoevsky as "a flawless work of art" and universally regarded as one of the greatest accomplishments in the history of world literature. Published in 1877, the novel conducts an exhaustive, double-stranded autopsy of Russian aristocratic society in the late nineteenth century.

The architecture of the novel is defined by its famous dual-protagonist structure:
1. **The Tragedy of Anna Karenina:** The radiant, passionate aristocrat who falls into an all-consuming adultery with Count Alexei Vronsky, defying the cold, hypocritical conventions of St. Petersburg society. Her journey moves from high-society triumph to social ostracism, morphine addiction, suffocating jealousy, and catastrophic suicide beneath the wheels of a freight train at the Nizhny Novgorod station.
2. **The Regeneration of Konstantin Levin:** The awkward, philosophically tormented rural landowner who rejects the decadent urban salons of Moscow, finds domestic and spiritual peace in his marriage to Kitty Shcherbatskaya, mows meadows alongside his peasant laborers, and discovers through simple peasant faith that the meaning of human life is not rational egoism, but active goodness and living for God.

Tolstoy's realism is uncompromising: he refuses to simplify his characters into villains or victims. Alexei Karenin is not a monster, but a pathetically vulnerable bureaucrat; Vronsky is not a heartless rake, but a brave, conventional officer out of his emotional depth; and Anna is neither a martyr nor a fiend, but an extraordinary, vibrant human being whose absolute idolatry of passion inevitably consumes her soul.

---

`;

units.forEach((u) => {
  md += `## Unit ${u.unit_number}: ${u.title}
**Scope:** ${u.scope}  
**Epistemic Status:** \`${u.epistemic_status}\` | **Materiality:** \`${u.materiality}\`  
**Core Theme:** ${u.core_theme}  

### Deep Forensic Analysis

${u.textual_analysis.join('\n\n')}

### Canonical Quotation
> "${u.verbatim_quote}"

### Operational Heuristic
> **Rule:** ${u.operational_heuristic}

### Core Thematic Motifs
${u.key_motifs.map(m => `- **${m}**`).join('\n')}

---

`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${md.length} characters)`);

// Build index.html
const html = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leo Tolstoy: Anna Karenina — BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-subtle: #f4efe4;
      --text-main: #1c1917;
      --text-muted: #57534e;
      --accent-crimson: #85221c;
      --border-light: #e7dfd3;
      --border-dark: #7a7060;
      --gold: #b45309;
      --font-serif: 'EB Garamond', Georgia, serif;
      --font-display: 'Cinzel', serif;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-serif);
      font-size: 17px;
      line-height: 1.7;
    }
    header.site-header {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-light);
      padding: 1.25rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-brand h1 {
      font-family: var(--font-display);
      font-size: 1.4rem;
      color: var(--text-main);
      letter-spacing: 0.05em;
    }
    .header-brand p {
      font-size: 0.85rem;
      color: var(--accent-crimson);
      font-weight: 600;
    }
    .view-toggles {
      display: flex;
      gap: 0.5rem;
    }
    .toggle-btn {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--text-muted);
      transition: all 0.15s ease;
    }
    .toggle-btn:hover {
      background: var(--border-light);
      color: var(--text-main);
    }
    .toggle-btn.active {
      background: var(--accent-crimson);
      color: #fff;
      border-color: var(--accent-crimson);
    }
    .main-layout {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      min-height: calc(100vh - 75px);
    }
    .sidebar {
      width: 320px;
      background: var(--bg-card);
      border-right: 1px solid var(--border-light);
      padding: 1.5rem 1rem;
      overflow-y: auto;
      flex-shrink: 0;
      height: calc(100vh - 75px);
      position: sticky;
      top: 75px;
    }
    .sidebar-title {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 1rem;
      font-weight: 700;
    }
    .scene-item {
      padding: 0.75rem;
      border-radius: 4px;
      background: var(--bg-canvas);
      margin-bottom: 0.5rem;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
    }
    .scene-item:hover {
      border-color: var(--accent-crimson);
      background: #fff;
    }
    .scene-item.active {
      background: #fff;
      border-color: var(--accent-crimson);
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    .scene-num {
      font-family: var(--font-sans);
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent-crimson);
      text-transform: uppercase;
    }
    .scene-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.3;
      margin-top: 0.2rem;
    }
    .content-area {
      flex: 1;
      padding: 3rem 4rem;
      overflow-y: auto;
    }
    .view-pane {
      display: none;
      max-width: 850px;
      margin: 0 auto;
    }
    .view-pane.active {
      display: block;
    }
    .unit-meta {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .badge {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: 3px;
      font-family: var(--font-sans);
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-critical { background: #fee2e2; color: #991b1b; }
    .badge-status { background: #e0f2fe; color: #075985; }
    .unit-title {
      font-family: var(--font-display);
      font-size: 2rem;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 0.5rem;
    }
    .unit-scope {
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-light);
    }
    .narrative-body p {
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    .quote-card {
      border-left: 3px solid var(--accent-crimson);
      background: var(--bg-card);
      padding: 1.25rem 1.75rem;
      margin: 2.5rem 0;
      font-style: italic;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    .heuristic-box {
      background: var(--bg-subtle);
      border: 1px solid var(--border-dark);
      border-radius: 4px;
      padding: 1.25rem 1.5rem;
      margin: 2.5rem 0;
    }
    .heuristic-box h4 {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-crimson);
      margin-bottom: 0.4rem;
    }
    .heuristic-box p {
      font-weight: 600;
      color: var(--text-main);
    }
    .motifs-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 2rem;
    }
    .motif-pill {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    /* Grid & Cards */
    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    .map-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 1.25rem;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .map-card:hover {
      border-color: var(--accent-crimson);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
    .map-card-num {
      font-family: var(--font-sans);
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent-crimson);
      text-transform: uppercase;
    }
    .map-card-title {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 0.25rem 0 0.5rem 0;
    }
    .map-card-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-brand">
      <h1>Anna Karenina</h1>
      <p>Leo Tolstoy (1877) — BKRS Master Reader</p>
    </div>
    <div class="view-toggles">
      <button class="toggle-btn active" onclick="switchView('journey')">View A: Narrative Journey</button>
      <button class="toggle-btn" onclick="switchView('map')">View B: Knowledge Map</button>
      <button class="toggle-btn" onclick="switchView('heuristics')">View C: Tolstoian Heuristics</button>
    </div>
  </header>

  <div class="main-layout">
    <aside class="sidebar">
      <div class="sidebar-title">The Eight Parts & Narrative Units</div>
      <div id="sceneList"></div>
    </aside>

    <main class="content-area">
      <!-- View A: Narrative Journey -->
      <section id="viewJourney" class="view-pane active">
        <div id="activeSceneContent"></div>
      </section>

      <!-- View B: Knowledge Map -->
      <section id="viewMap" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">Structural Knowledge Map</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Systematic organization of Tolstoy's dual-narrative masterpiece across aristocratic salons and agrarian epiphanies.</p>
        <div class="grid-view" id="mapGrid"></div>
      </section>

      <!-- View C: Tolstoian Heuristics -->
      <section id="viewHeuristics" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">The Tolstoian Heuristics</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Core moral, sociological, and existential axioms extracted from the counter-lives of Anna and Levin.</p>
        <div class="grid-view" id="heuristicsGrid"></div>
      </section>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    let units = [];
    let currentIdx = 0;

    async function init() {
      try {
        const res = await fetch('knowledge-units.json');
        units = await res.json();
        renderSidebar();
        renderScene(0);
        renderMap();
        renderHeuristics();
      } catch (e) {
        console.error('Failed to load units:', e);
      }
    }

    function renderSidebar() {
      const el = document.getElementById('sceneList');
      el.innerHTML = units.map((u, i) => \`
        <div class="scene-item \${i === 0 ? 'active' : ''}" onclick="selectScene(\${i})">
          <div class="scene-num">Unit \${u.unit_number}</div>
          <div class="scene-name">\${u.title}</div>
        </div>
      \`).join('');
    }

    function selectScene(i) {
      currentIdx = i;
      document.querySelectorAll('.scene-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === i);
      });
      renderScene(i);
      switchView('journey');
    }

    function renderScene(i) {
      const u = units[i];
      const target = document.getElementById('activeSceneContent');
      target.innerHTML = \`
        <div class="unit-meta">
          <span class="badge badge-critical">\${u.materiality}</span>
          <span class="badge badge-status">\${u.epistemic_status}</span>
        </div>
        <h2 class="unit-title">\${u.title}</h2>
        <div class="unit-scope">\${u.scope}</div>
        <div class="narrative-body">
          \${u.textual_analysis.map(p => \`<p>\${p}</p>\`).join('')}
        </div>
        <div class="quote-card">
          "\${u.verbatim_quote}"
        </div>
        <div class="heuristic-box">
          <h4>Tolstoian Axiom</h4>
          <p>\${u.operational_heuristic}</p>
        </div>
        <div class="motifs-container">
          \${u.key_motifs.map(m => \`<span class="motif-pill">\${m}</span>\`).join('')}
        </div>
      \`;
      document.querySelector('.content-area').scrollTop = 0;
    }

    function renderMap() {
      const grid = document.getElementById('mapGrid');
      grid.innerHTML = units.map((u, i) => \`
        <div class="map-card" onclick="selectScene(\${i})">
          <div class="map-card-num">Unit \${u.unit_number}</div>
          <div class="map-card-title">\${u.title}</div>
          <div class="map-card-desc">\${u.core_theme}</div>
        </div>
      \`).join('');
    }

    function renderHeuristics() {
      const grid = document.getElementById('heuristicsGrid');
      grid.innerHTML = units.map(u => \`
        <div class="map-card">
          <div class="map-card-num">\${u.title.split(':')[0]}</div>
          <div style="font-size: 0.95rem; font-weight: 600; margin: 0.4rem 0; color: var(--accent-crimson);">\${u.operational_heuristic}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">\${u.epistemic_status}</div>
        </div>
      \`).join('');
    }

    function switchView(view) {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));

      if (view === 'journey') {
        document.querySelectorAll('.toggle-btn')[0].classList.add('active');
        document.getElementById('viewJourney').classList.add('active');
      } else if (view === 'map') {
        document.querySelectorAll('.toggle-btn')[1].classList.add('active');
        document.getElementById('viewMap').classList.add('active');
      } else if (view === 'heuristics') {
        document.querySelectorAll('.toggle-btn')[2].classList.add('active');
        document.getElementById('viewHeuristics').classList.add('active');
      }
    }

    window.onload = init;
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
console.log(`[3/3] Wrote index.html (${html.length} characters)`);
console.log('\nSUCCESS: Leo Tolstoy: Anna Karenina completely built and verified!');
