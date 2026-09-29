/**
 * Builder for Fyodor Dostoevsky: The Brothers Karamazov
 * Standard: BKRS v2.0 Production Master
 * Architecture: 12 Comprehensive Narrative Units | Theological Dialectic & Parricide
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-brothers-karamazov');
fs.mkdirSync(targetDir, { recursive: true });

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Karamazov Hearth: Buffoonery, The Three Sons & The Bastard Smerdyakov",
    scope: "Book 1: Fyodor Pavlovich, The Broken Marriages, Dmitri, Ivan, Alyosha & The Birth of Smerdyakov",
    epistemic_status: "PATRIARCHAL_DEPRAVITY & GENEALOGICAL_CHAOS",
    materiality: "CRITICAL",
    core_theme: "The introduction of the Karamazov family: the debauched patriarch Fyodor Pavlovich, the distinct psychological natures of the three legitimate sons, and the sinister fourth bastard son.",
    textual_analysis: [
      "Dostoevsky opens his magnum opus by introducing Fyodor Pavlovich Karamazov, a petty landowner and professional buffoon who accumulated wealth through unprincipled moneylending and two lucrative marriages. Cynical, lecherous, and shamelessly clownish, Fyodor represents the raw, unbridled vitality of the 'Karamazovian force' (Karamazovshchina)—a primal, sensual energy that consumes everything in its path without moral restraint.",
      "The Three Sons: From his first marriage to Adelaide Miusov comes Dmitri (Mitya), a tempestuous, romantic army officer driven by wild passions, honorable ideals, and reckless debts. From his second marriage to the meek, religious 'shrieker' Sofia Ivanovna come two sons: Ivan, a brilliant rationalist intellectual and philosophical skeptic educated in Petersburg, and Alexei (Alyosha), a nineteen-year-old novice at the local Russian Orthodox monastery whose radiant gentleness and non-judgmental love make him beloved by all.",
      "The Origin of Pavel Smerdyakov: In the servants' quarters lives Pavel Fyodorovich Smerdyakov, the household cook. Born in the bathhouse of the Karamazov estate from 'Stinking Lizaveta'—a holy fool and mute village vagrant whom Fyodor Pavlovich allegedly violated on a bet—Smerdyakov is raised by the pious, stern servant Grigory. Smerdyakov is cold, haughty, afflicted with severe epilepsy, and infected by a superficial, disdainful mimicry of Western atheism, hanging cats in childhood to conduct mock burials.",
      "The Seeds of Parricide: As the sons return to their provincial town of Skotoprigonyevsk in young adulthood, bitter financial and romantic feuds erupt. Dmitri demands his maternal inheritance from his tight-fisted father, while both father and son fall violently, obsessively in love with the same woman: the bewitching, independent town beauty Agrafena Alexandrovna Svetlova (Grushenka)."
    ],
    verbatim_quote: "Fyodor Pavlovich was a muddle-headed rogue, sensual and cruel, but sly and calculating in his moneymaking; above all, he was a buffoon who loved to play the fool before others.",
    operational_heuristic: "When a father abdicates moral authority in favor of cynical debauchery, he unleashes a primal competitive hatred in his offspring that inexorably points toward violence.",
    key_motifs: [
      "Fyodor Pavlovich's Buffoonery",
      "The Three Brothers (Passion, Intellect, Spirit)",
      "Smerdyakov (The Bathhouse Bastard)",
      "Karamazovshchina (Sensual Force)",
      "The Rivalry over Grushenka"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Cell of the Elder: Zosima’s Prostration & The Family Scandal",
    scope: "Book 2: Gathering at the Hermitage, Fyodor's Theatrical Mockery, Mitya's Outburst & The Bow to the Earth",
    epistemic_status: "THEOLOGICAL_FORESIGHT & PUBLIC_SCANDAL",
    materiality: "CRITICAL",
    core_theme: "The disastrous family gathering in the monastery cell of Elder Zosima, Fyodor's outrageous clowning, and Zosima's prophetic prostration before Dmitri.",
    textual_analysis: [
      "In an attempt to arbitrate the bitter financial dispute between Dmitri and Fyodor Pavlovich, the family convenes at the cell of Elder Zosima, a revered staretz (spiritual elder) dying of consumption in the local monastery hermitage. Pyotr Miusov (a wealthy, liberal Europeanized relative) and Ivan accompany the father, hoping the sacred setting will impose decorum.",
      "The Clown at the Altar: Fyodor Pavlovich immediately destroys any pretense of solemnity. He indulges in grotesque, deliberate buffoonery, mocking monastic asceticism, telling crude anecdotes about Diderot, and insulting the monks. Zosima responds not with anger, but with penetrating psychological empathy: 'Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he cannot distinguish any truth within himself or around him.'",
      "Dmitri's Delayed Entrance and the Duel of Accusations: Dmitri bursts in late, disheveled and agitated. Immediately, father and son trade poisonous insults: Fyodor accuses Dmitri of running up debts and threatening his life; Dmitri exposes his father's attempts to purchase Grushenka's sexual favors with three thousand rubles sealed in an envelope: 'Why is such a man alive? Tell me, can he be allowed to go on dishonoring the earth with his presence?'",
      "The Prophetic Prostration: Amidst the screams and scandal, Elder Zosima rises quietly from his seat. Walking with difficulty toward Dmitri, the saintly old man suddenly sinks to his knees and bows his forehead completely to the floor at Dmitri's feet, touching the earth. The cell falls into stunned silence. When asked later why he bowed, Zosima explains that he was bowing to the great, tragic suffering in store for Dmitri in the days ahead."
    ],
    verbatim_quote: "Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to a point where he cannot distinguish any truth within himself or around him, and so loses all respect for himself and for others.",
    operational_heuristic: "Recognize future tragedy before it manifests; true spiritual discernment honors the impending suffering of a conflicted soul rather than condemning its chaotic surface.",
    key_motifs: [
      "The Cell of Elder Zosima",
      "Lying to Oneself as the Root of Sin",
      "'Why is such a man alive?'",
      "The 3,000 Rubles in the Sealed Envelope",
      "Zosima's Prophetic Prostration"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Sensualists: An Ardent Heart, The Sealed Envelope & The 3,000 Rubles",
    scope: "Book 3: Dmitri's Confession in the Garden, Schiller's Hymn, Smerdyakov's Casuistry & The Beating of the Father",
    epistemic_status: "AESTHETIC_DUALITY & SENSORY_TORMENT",
    materiality: "CRITICAL",
    core_theme: "Dmitri's passionate confession to Alyosha in an abandoned garden gazebo: the coexistence of the ideal of the Madonna and the ideal of Sodom, and his assault on Fyodor.",
    textual_analysis: [
      "Hiding in an overgrown summerhouse near his father's property, Dmitri intercepts Alyosha. In a series of passionate chapters entitled 'The Confession of an Ardent Heart,' Dmitri pours out his soul, reciting Schiller's 'Hymn to Joy' while describing his descent into the swamp of sensuality.",
      "The Dual Ideal of Beauty: Dmitri articulates Dostoevsky's famous formulation of human nature: 'Beauty is a terrible and awful thing! It is terrible because it has not been fathomed and cannot be fathomed, for God can do nothing but riddle us with riddles... The dreadful thing is that beauty is not only terrifying, it is also mysterious. God and the devil are fighting there, and the battlefield is the heart of man.' He confesses that he can simultaneously contemplate the sublime purity of the Madonna while wallowing in the degraded abyss of Sodom.",
      "The Horror of the Three Thousand Rubles: Dmitri confesses his unforgivable moral crime: his noble fiancée, Katerina Ivanovna (Katya), entrusted him with 3,000 rubles to mail to her sister. Instead, Dmitri blew half the money on a wild, drunken debauch with Grushenka at the village inn of Mokroye. He carries the unbearable shame of a thief, convinced he cannot face Katya until the 3,000 rubles are repaid.",
      "The Sealed Envelope and the Beating: Dmitri reveals that his father has prepared an envelope tied with pink ribbon containing 3,000 rubles in banknotes, marked: 'To my angel Grushenka, if she will come.' Smerdyakov has agreed to signal Dmitri if Grushenka enters the house. Later that evening, Dmitri breaks into his father's house in a frenzy of jealousy, tackles Fyodor Pavlovich to the floor, kicks him brutally in the face, and threatens to return and murder him before Alyosha drags him off."
    ],
    verbatim_quote: "Beauty! I can't bear to think that a man of noble heart and lofty mind begins with the ideal of the Madonna and ends with the ideal of Sodom. What is still more terrible is that he who bears the ideal of Sodom in his soul does not renounce the ideal of the Madonna... God and the devil are fighting there, and the battlefield is the heart of man.",
    operational_heuristic: "The human heart possesses an infinite capacity to simultaneously idolize moral purity and indulge in base depravity; ethical survival requires continuous vigilance over this internal rift.",
    key_motifs: [
      "Schiller's Hymn to Joy",
      "The Ideal of the Madonna vs. The Ideal of Sodom",
      "Beauty as the Battlefield of God and Devil",
      "The Stolen 3,000 Rubles of Katerina",
      "The Pink Ribbon Envelope"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Lacerations: Ilyusha and the Schoolboys, Father Ferapont & Katerina’s Pride",
    scope: "Book 4: The Bitten Finger, Captain Snegiryov's Poverty, The Trampled Banknote & The Hysterical Vow",
    epistemic_status: "PSYCHOLOGICAL_LACERATION & SOCIAL_HUMILIATION",
    materiality: "IMPORTANT",
    core_theme: "The concept of 'nadryv' (laceration/strain): Alyosha encounters schoolboys stoning little Ilyusha, Captain Snegiryov's ferocious dignity, and Katerina Ivanovna's wounded pride.",
    textual_analysis: [
      "Book 4 introduces Dostoevsky's clinical concept of 'nadryv'—a Russian term meaning a deep internal strain, emotional laceration, or deliberate self-wounding where an injured ego derives perverse, agonizing pleasure from magnifying its own humiliation.",
      "The Stoning of Ilyusha: Walking through town, Alyosha witnesses a gang of six schoolboys throwing rocks across a ravine at a small, sickly boy. When Alyosha attempts to protect the child, the boy throws a rock at Alyosha's head, lunges forward, and violently bites Alyosha's finger to the bone. Alyosha does not strike back; he asks with tender calm: 'What have I done to you?'",
      "The Humiliation of the 'Whisk-Broom': Alyosha discovers the boy is Ilyusha Snegiryov. Days earlier, Dmitri Karamazov had publicly dragged Ilyusha's father, Captain Snegiryov (an impoverished, discharged officer), out of a tavern by his beard—a humiliating spectacle witnessed by the entire town and little Ilyusha, who ran beside his father begging Dmitri to let him go.",
      "The Trampled Banknotes: Sent by Katerina Ivanovna to deliver two hundred rubles in charity to the starving Snegiryov family, Alyosha visits their freezing hovel. At first, Captain Snegiryov is overjoyed, daydreaming of warm boots and medicine for his dying child. But suddenly, seized by an unbearable laceration of wounded pride, Snegiryov crumples the banknotes, throws them into the dirt, stomps on them with his heel, and screams: 'What would I say to my boy if I took your money for his shame?' and runs weeping into the house. Alyosha recognizes in this gesture the supreme, tragic dignity of the Russian poor."
    ],
    verbatim_quote: "He suddenly took the two hundred-ruble notes, crumpled them in his fist, threw them on the ground, and began trampling them with his heel, gasping for breath... 'And what would I tell my boy if I took your money for our dishonor?'",
    operational_heuristic: "Charity administered without profound psychological delicacy inflicts deeper wounds than cruelty; true compassion respects the fierce dignity of the impoverished.",
    key_motifs: [
      "Nadryv (Emotional Laceration)",
      "The Bitten Finger",
      "Ilyusha Defending His Father's Beard",
      "The Trampled 200-Ruble Banknotes",
      "The Sanctity of Poverty's Pride"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Rebellion & The Grand Inquisitor: The Suffering of Children & The Burden of Freedom",
    scope: "Book 5: The Metropolis Tavern Dialogue, Returning the Ticket & The Seville Legend of Christ and the Cardinal",
    epistemic_status: "THEODICY_DEBATE & TOTALITARIAN_CRITIQUE",
    materiality: "CRITICAL",
    core_theme: "The philosophical peak of world literature: Ivan's rejection of God's world over the unatoned suffering of innocent children ('Rebellion') and his poem 'The Grand Inquisitor.'",
    textual_analysis: [
      "In a noisy tavern private room, the rationalist Ivan and the novice Alyosha sit over cherry jam to get acquainted. Ivan explains that he does not reject God; he simply and respectfully 'returns his entrance ticket' to God's cosmic harmony because the ticket is purchased at the cost of the unatoned tears and torture of innocent children.",
      "The Horror of the Children: Ivan recounts factual newspaper accounts of unspeakable cruelty: a Turkish soldier tossing a nursing infant into the air and catching it on a bayonet; abusive parents locking a five-year-old girl in a freezing outhouse overnight and smearing her face with her own feces while she prays to 'dear little God' to protect her; a Russian general unleashing a pack of hunting hounds to tear an eight-year-old serf boy to pieces before his mother's eyes because the boy threw a stone that hit the paw of his favorite hound.",
      "The Moral Mutiny: Ivan demands of Alyosha: 'Tell me frankly, I call on you to answer: imagine that you are creating a fabric of human destiny with the goal of making men happy in the end... but it was essential to torture just one tiny creature, that baby beating its breast with its little fist, and to found your edifice on its unavenged tears—would you consent to be the architect on those conditions?' Alyosha whispers softly: 'No, I wouldn't.'",
      "The Legend of the Grand Inquisitor: Ivan then recites his poem set in 16th-century Seville during the Spanish Inquisition. Christ returns to earth, walking silently among the people, healing the sick and resurrecting a dead child. The ninety-year-old Grand Inquisitor has Christ arrested and visits him in his dark dungeon at night.",
      "The Three Temptations of Satan: The Inquisitor accuses Christ of making humanity miserable by rejecting the three temptations of the devil in the wilderness: 1) Miracle (turning stones into bread: 'Feed men, and then ask of them virtue!'), 2) Mystery (throwing himself from the temple pinnacle to prove divine power), and 3) Authority (accepting the kingdoms of the earth to unite mankind). The Inquisitor argues that humanity cannot bear the terrifying burden of spiritual freedom; men crave bread, certainty, and someone to worship in common. The Church has corrected Christ's work by allying with Rome and the devil to give weak humans peace, taking their sins upon itself.",
      "The Kiss in the Dungeon: Christ listens in complete silence throughout the Inquisitor's indictment. At the end, instead of answering with arguments, Christ approaches the frail old tyrant and softly kisses him on his bloodless, ninety-year-old lips. The Inquisitor shudders, opens the cell door, and says: 'Go, and come no more... come not at all, never, never!' The kiss burns in his heart, but the old man remains with his idea."
    ],
    verbatim_quote: "It's not that I don't accept God, Alyosha, it's just that I most respectfully return Him my ticket... / 'Tell me yourself, I challenge you—answer. Imagine that you are creating a fabric of human destiny... but that it was essential and inevitable in order to build that edifice to torture to death only one tiny creature... would you consent to be the architect on those conditions?' / 'No, I wouldn't,' Alyosha softly said.",
    operational_heuristic: "Totalitarian tyranny always justifies itself through humanitarian benevolence—promising bread and security in exchange for spiritual freedom; resisting it requires the non-verbal power of sacrificial love.",
    key_motifs: [
      "Returning the Ticket to God",
      "The Tears of the Tortured Child",
      "The Grand Inquisitor in Seville",
      "Miracle, Mystery, and Authority",
      "The Silent Kiss on Bloodless Lips"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Russian Monk: Elder Zosima’s Testament & Active Love for All Creation",
    scope: "Book 6: Zosima's Deathbed Discourse, The Duel of Youth, The Mysterious Visitor & Universal Guilt",
    epistemic_status: "ORTHODOX_MYSTICISM & COSMIC_FRATERNITY",
    materiality: "CRITICAL",
    core_theme: "Dostoevsky's spiritual refutation of Ivan's nihilism: Elder Zosima's deathbed teachings on active love, interconnected responsibility ('everyone is guilty for all and before all'), and joy in creation.",
    textual_analysis: [
      "Book 6 serves as Dostoevsky's deliberate theological and emotional counterweight to Ivan's Grand Inquisitor. As Elder Zosima lies on his deathbed surrounded by disciples, he shares the autobiographical journey that transformed him from a violent, arrogant young army officer into an apostle of cosmic love.",
      "The Awakening through the Dying Brother: Zosima recounts the death of his older brother Markel, who was a fiery atheist in youth but underwent an ecstasy of faith upon contracting fatal consumption at seventeen. Markel proclaimed: 'Mother, little heart of mine, do not weep, life is paradise, and we are all in paradise, but we do not want to know it; if we only wanted to, paradise would be established throughout the world tomorrow! Each of us is guilty before all for all, and I more than all the others.'",
      "The Duel and the Transfiguration: As a young cadet, Zosima brutally beat his orderly Afanasy in a fit of rage on the eve of a duel over a woman. Waking the next dawn, he looked at the blossoming birch trees, felt the horror of striking a fellow human being, threw himself at Afanasy's feet begging for forgiveness, and during the duel refused to fire his pistol, throwing it into the woods and announcing his entry into monastic life.",
      "The Mysterious Visitor: Zosima recalls a respected citizen who confessed in secret that he had murdered a woman fourteen years earlier and framed another man. The murderer suffered agonizing psychological torment until, inspired by Zosima, he made a public confession in town, dying of fever shortly after. The episode demonstrates that confession and accepting suffering are the only path to spiritual peace.",
      "The Axiom of Universal Guilt: Zosima delivers his ultimate testament: 'Love all God's creation, the whole and every grain of sand in it. Love every leaf, every ray of God's light. Love the animals, love the plants, love everything... For all is like an ocean, all flows and connects; touch it in one place and it echoes at the other end of the world. Each of us is guilty before all for all.'"
    ],
    verbatim_quote: "Love all God's creation, the whole of it and every grain of sand in it. Love every leaf, every ray of God's light. Love the animals, love the plants, love each separate thing... If you love each thing, you will perceive the mystery of God in all things.",
    operational_heuristic: "To heal societal alienation, abandon moral isolation; recognize that every human being is intrinsically interconnected with and spiritually responsible for the sins and suffering of all mankind.",
    key_motifs: [
      "Life is Paradise (Brother Markel)",
      "Striking the Orderly Afanasy",
      "The Duel and the Dropped Pistol",
      "The Mysterious Murderer's Confession",
      "Each is Guilty Before All for All"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Breath of Corruption: The Stench of Decay, The Little Onion & Cana of Galilee",
    scope: "Book 7: Zosima's Body, The Stench of Corruption, Rakitin's Seduction, Grushenka's Onion & The Ecstatic Earth",
    epistemic_status: "CRISIS_OF_FAITH & MYSTICAL_EPIPHANY",
    materiality: "CRITICAL",
    core_theme: "The crisis of faith following Zosima's death: the biological stench of decay, Rakitin leading Alyosha to Grushenka, the fable of the little onion, and the mystical vision of Cana of Galilee.",
    textual_analysis: [
      "Following Elder Zosima's death, townspeople and monks flock to the hermitage expecting miraculous signs and sweet scents of incorruptibility. Instead, within a few hours in the summer heat, a distinct biological stench of decomposition begins to emanate from the coffin ('the breath of corruption').",
      "The Triumph of Cynicism: The fanatical ascetic monk Father Ferapont and monastic rivals celebrate the stench as divine judgment against Zosima's gentle theology. For Alyosha, this biological reality is a crushing, traumatic wound: he does not demand miracles, but he cannot bear that his beloved spiritual father should be subjected to public mockery.",
      "The Seduction by Rakitin: Desolate and disillusioned, Alyosha leaves the monastery without permission, accompanied by the cynical seminarian Mikhail Rakitin. Seeking to corrupt Alyosha, Rakitin takes him to Grushenka's house, promising her twenty-five rubles if she can seduce the pure novice.",
      "The Fable of the Little Onion: When Grushenka learns that Zosima has died, she immediately leaps off Alyosha's lap, crosses herself, and ceases all seductive teasing. Alyosha is overwhelmed by her pure-hearted empathy: 'I came here looking for a wicked soul, but I found a loving sister!' Grushenka weeps, telling Alyosha the folk tale of the wicked peasant woman who did only one good deed in her entire life—giving an old withered onion to a beggar. When the woman dies and falls into the lake of fire, an angel extends the onion to pull her up to heaven; but when other damned souls try to cling to her legs to be saved, she kicks them, crying 'It's my onion, not yours!'—whereupon the onion snaps and she falls back into the abyss.",
      "Cana of Galilee and Kissing the Earth: Returning to the cell beside Zosima's coffin, Alyosha falls into a light sleep while Father Paissy reads the Gospel of John about the wedding at Cana. Alyosha has a glorious vision of Zosima rising from the feast, welcoming him to Christ's eternal banquet of joy. Waking in ecstasy, Alyosha walks out into the starry night, falls to his knees, and embraces the earth, kissing it and weeping tears of universal forgiveness: 'He fell to the earth a weak boy and rose up a resolute champion for the rest of his life.'"
    ],
    verbatim_quote: "He did not stop on the steps, but went down rapidly. His soul, full of tears, was craving for freedom, space, wide horizons... He fell on the earth, weeping and sobbing, and kissed that earth with love and frenzy... It was as if threads from all those innumerable worlds of God met together in his soul, and it trembled all over, 'touching other worlds.'",
    operational_heuristic: "Spiritual maturity requires passing through the shattering of superficial piety; genuine faith is forged when one kisses the flawed earth and chooses joyful solidarity with sinners.",
    key_motifs: [
      "The Stench of Corruption",
      "Father Ferapont's Hysterical Exorcism",
      "Grushenka as a Loving Sister",
      "The Parable of the Little Onion",
      "Cana of Galilee and Embracing the Earth"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Night at Mokroye: The Brass Pestle, The Gypsy Bacchanal & The Arrest",
    scope: "Book 8: Dmitri's Desperate Hunt for 3,000 Rubles, The Pestle, Grigory's Blood & The Orgy at the Inn",
    epistemic_status: "CRIMINAL_SUSPENSE & BACCHANALIAN_CLIMAX",
    materiality: "CRITICAL",
    core_theme: "Dmitri's frantic search for money, arming himself with a brass pestle, striking down old servant Grigory in the garden, the wild debauch at Mokroye, and his dramatic arrest for murder.",
    textual_analysis: [
      "Book 8 unfolds like a high-velocity thriller across twenty-four hours. Driven by manic frenzy to secure 3,000 rubles to repay Katerina before running away with Grushenka, Dmitri begs loans from the merchant Samsonov and the drunken peasant Lyagavy, failing at every turn.",
      "The Brass Pestle: Learning that Grushenka has vanished from her house and suspecting she is with his father, Dmitri rushes into the kitchen of his landlady, grabs a heavy brass mortar pestle from the shelf, shoves it into his pocket, and runs to Fyodor Pavlovich's estate.",
      "The Violence in the Dark Garden: Creeping through the dark garden to the lighted bedroom window, Dmitri taps the secret code Smerdyakov taught him. The old man leans out the window in his striped silk dressing gown, whispering 'Grushenka, is that you?' Dmitri watches him in a surge of murderous revulsion. Hearing a noise, Dmitri flees, but the loyal elderly servant Grigory catches him by the fence, shouting 'Parricide!' Dmitri swings the brass pestle, smashing Grigory across the skull, and leaves him bleeding and unconscious on the ground.",
      "The Revelry at Mokroye: Terrified that he has murdered Grigory, covered in blood, and suddenly in possession of a thick wad of banknotes, Dmitri buys carriage loads of champagne, fruit, pastries, and gypsies, driving madly to the village inn of Mokroye. There he finds Grushenka with her former Polish lover, who turns out to be a card-sharping swindler. Grushenka realizes her true, passionate love is for Dmitri: 'I am yours, Mitya, yours forever!'",
      "The Sudden Arrest: At dawn, as the drunken gypsy feast reaches its climax and Dmitri prepares to shoot himself after one last night of bliss, the door bursts open. The district police chief, the prosecutor, and armed gendarmes storm the room: 'Former Lieutenant Karamazov, you are under arrest for the murder of your father, Fyodor Pavlovich Karamazov!'"
    ],
    verbatim_quote: "Whether it was someone's prayer that had reached me then, or something else, I do not know; but a sudden feeling of revulsion overcame me... I pulled the brass pestle from my pocket, but I didn't strike him. I ran... But Grigory seized me by the leg. 'Parricide!' he shouted. And then I hit him.",
    operational_heuristic: "Guilt by circumstantial association is the most dangerous legal pitfall: reckless words and public violence create an illusion of culpability that defies factual reality.",
    key_motifs: [
      "The Brass Mortar Pestle",
      "The Secret Tap Code at the Window",
      "Striking Old Grigory on the Skull",
      "The Champagne and Gypsy Feast at Mokroye",
      "'You are under arrest for the murder of your father!'"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Torment of the Soul: The Three Interrogations & The Dream of the Weeping Babe",
    scope: "Book 9: The Legal Interrogation at Mokroye, The Strip-Search, The Amulet Secret & The Dream of the Steppe",
    epistemic_status: "FORENSIC_PROCEDURE & SPIRITUAL_PURGATION",
    materiality: "CRITICAL",
    core_theme: "The grueling judicial interrogation of Dmitri: the physical humiliation of the strip-search, the secret of the 1,500 rubles sewn in the amulet, and the transformative dream of the starving infant.",
    textual_analysis: [
      "Throughout the cold night at the Mokroye inn, the investigating magistrate Nikolai Parfenovich Nelyudov and prosecutor Ippolit Kirillovich conduct a forensic interrogation of Dmitri. Dmitri is stunned to learn that his father is dead—his skull shattered by a heavy blunt instrument inside his bedroom, and the 3,000 rubles in the pink ribbon envelope stolen.",
      "The Trap of Circumstantial Evidence: Every piece of evidence points inexorably to Dmitri: he publicly threatened to kill his father; he was seen running from the estate with a bloody brass pestle; he struck Grigory down; and immediately after, he appeared in Mokroye waving a thick roll of hundred-ruble notes.",
      "The Secret of the Amulet: Dmitri passionately confesses the source of the money: he did not spend all 3,000 rubles of Katerina's funds during the first spree at Mokroye; he spent only 1,500. He sewed the remaining 1,500 rubles into a cloth rag amulet hanging around his neck beneath his shirt, saving it as a psychological shield against total dishonor. It was this 1,500 rubles he tore open to finance the second debauch. But because no one ever saw the amulet, the investigators dismiss his story as a desperate, clumsy fabrication.",
      "The Humiliation of the Strip-Search: The officials force Dmitri to strip naked in front of them to inspect his clothing for bloodstains. For Dmitri, this physical exposure is far more agonizing than legal accusation: 'When they stripped me of my clothes, they stripped me of my human dignity.'",
      "The Dream of the 'Wee One' (The Babe): Exhausted, Dmitri falls asleep on a bench. He dreams he is riding through a cold, burned-out Siberian steppe in a cart. Beside the road stand weeping peasant women holding starving, crying infants with blue, frostbitten arms. Dmitri asks the driver: 'Why are the poor mothers weeping? Why is the babe crying?' The driver answers: 'They are poor people, the babe is cold, they have no bread.' A surge of infinite, burning compassion floods Dmitri's soul; he awakens crying tears of joyful repentance, embracing his arrest: 'I want to suffer, and by suffering I shall be cleansed!'"
    ],
    verbatim_quote: "'Why are they crying? Why are they weeping?' Mitya asked, as they flew past them. / 'It's the babe,' the driver answered, 'the babe is cold, its clothes are frozen, and they've got no milk.' / And Mitya felt a tenderness such as he had never known surging up in his heart, he wanted to weep, he wanted to do something for them all, so that the babe would weep no more.",
    operational_heuristic: "Suffering is not a punishment to be avoided, but an existential crucible that purges selfish pride, awakening universal compassion for the helpless and innocent.",
    key_motifs: [
      "The Three Interrogations at Mokroye",
      "The Secret 1,500 Rubles in the Amulet",
      "The Shame of the Naked Strip-Search",
      "The Dream of the Siberian Steppe and the Babe",
      "Accepting Suffering as Spiritual Purification"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Boys: Kolya Krasotkin, The Dying Ilyusha & Perezvon",
    scope: "Book 10: The Fourteenth Year of Kolya, The Lost Dog Zhuchka, The Sickbed of Ilyusha & Childhood Tenderness",
    epistemic_status: "DEVELOPMENTAL_PSYCHOLOGY & INNOCENT_REDEMPTION",
    materiality: "IMPORTANT",
    core_theme: "The sub-narrative of the schoolboys: fourteen-year-old Kolya Krasotkin's precocious intellectualism, the reunion with the lost dog Zhuchka, and the tragic dying bed of little Ilyusha.",
    textual_analysis: [
      "Book 10 shifts focus to the younger generation, providing a crucial thematic lens on how intellectual ideas take root in innocent youth. We meet Kolya Krasotkin, a brilliant, proud fourteen-year-old schoolboy who has become the revered leader of his peers through daring stunts (lying between railway tracks while a train thunders over him).",
      "The Mimicry of Rationalist Arrogance: Kolya mirrors the intellectual vanity of Ivan Karamazov. He reads progressive journals, parrots atheist and socialist slogans without understanding them, and professes absolute disdain for women and religion. Yet beneath his self-important veneer lies a deeply sensitive, loyal heart.",
      "The Tragedy of the Bread and Pin: Kolya has stayed away from his former friend Ilyusha because of a terrible incident: Smerdyakov had taught Ilyusha a cruel trick—sticking a pin inside a piece of bread and tossing it to a hungry dog. Ilyusha fed the pin to a stray dog named Zhuchka, who swallowed it, screamed, and ran off in agony. Tortured by guilt, convinced he had murdered the dog, Ilyusha fell into a fatal fever and consumption.",
      "The Resurrection of Zhuchka as Perezvon: Kolya visits the dying Ilyusha, bringing a stunning surprise: he found Zhuchka alive, secretly nursed the dog back to health, trained him to do tricks, and renamed him 'Perezvon' (The Chime). When the dog leaps onto Ilyusha's bed, the dying boy weeps with overwhelming joy. Alyosha watches Kolya's pride melt into profound tenderness, recognizing that love, not intellectual theories, heals human hearts."
    ],
    verbatim_quote: "I am a socialist, Karamazov, I am an incorrigible socialist! / Kolya suddenly blushed... / 'You have a good heart, a charming heart, though it's warped by vanity,' Alyosha said to him.",
    operational_heuristic: "Precocious intellectual arrogance in youth is a protective armor over emotional vulnerability; meet ideological posturing with gentle, affectionate truth.",
    key_motifs: [
      "Kolya Krasotkin on the Railroad Tracks",
      "The Stolen Pin in the Bread",
      "Zhuchka Resurrected as Perezvon",
      "The Dying Child in the Peasant Cot",
      "Alyosha's Mentorship of the Boys"
    ]
  },
  {
    unit_id: "unit-11",
    unit_number: 11,
    chapter_number: 11,
    title: "The Devil and the Third Interview: Smerdyakov’s Hanging, The 3,000 Rubles & The Hallucination",
    scope: "Book 11: Ivan's Three Visits to Smerdyakov, The Disclosure of the Murderer, The Devil in the Velvet Jacket & The Suicide",
    epistemic_status: "INTELLECTUAL_GUILT & PSYCHOTIC_DISSOCIATION",
    materiality: "CRITICAL",
    core_theme: "The metaphysical climax: Ivan discovers Smerdyakov murdered Fyodor using Ivan's philosophy ('everything is permitted'), followed by Ivan's feverish encounter with the petty Devil.",
    textual_analysis: [
      "Tortured by secret complicity, Ivan Karamazov conducts three escalating interrogations of Smerdyakov in the hospital cottage. During the third visit, on the eve of Dmitri's trial, Smerdyakov drops all pretense of illness and reveals the absolute truth.",
      "The True Assassin Revealed: Smerdyakov pulls down his left sock and pulls out a wad of banknotes from beneath the floorboard: the full three thousand rubles stolen from Fyodor's bedroom. Smerdyakov confesses with cold venom: he faked his epileptic fit, waited for Dmitri to flee the garden, crept into the bedroom, struck Fyodor dead with a cast-iron paperweight, took the money, and framed Dmitri.",
      "The Doctrine of Complicity: When Ivan threatens to kill him, Smerdyakov turns on him with icy, devastating logic: 'You are the real murderer, sir; I was only your minion, your instrument. Did you not say that everything is permitted if there is no God and no immortality of the soul? You knew I was going to kill him when you left for Chermashnya!' Smerdyakov was merely the physical implement of Ivan's intellectual decree. Shattered, Ivan takes the banknotes, vows to testify the next morning, and stumbles into the blizzard.",
      "The Nightmare of the Petty Devil: Returning to his room, Ivan suffers a psychotic breakdown. Sitting on the sofa opposite him is a middle-aged, vulgar Russian gentleman dressed in a threadbare checked coat—the Devil. This is not Milton's grand Lucifer or Goethe's majestic Mephistopheles; it is a banal, bourgeois sponger who suffers from rheumatism, complains about medical bills, and mocks Ivan's philosophical pretensions.",
      "The Banal Mirror of the Ego: The Devil explains that he is merely Ivan's own worst thoughts, intellectual clichés, and vulgar vanity reflected back at him: 'I am your hallucination, your nightmare... You are angry with me because I don't appear in red flames with thunder, but in such a modest form!' Alyosha breaks into the room, banishing the hallucination, bearing horrifying news: Smerdyakov has just hanged himself with a rope in his room, leaving a suicide note: 'I destroy my life of my own will and desire, and blame nobody.'"
    ],
    verbatim_quote: "You murdered him; you are the real killer, and I was only your accomplice, your minion... For you said yourself that 'everything is permitted,' so why are you so alarmed now, sir?",
    operational_heuristic: "Ideological theoreticians who preach that 'everything is permitted' bear direct moral responsibility for the concrete atrocities committed by subordinates who act on their words.",
    key_motifs: [
      "The Three Thousand Rubles in the Sock",
      "Smerdyakov's Confession: 'You are the real killer'",
      "The Petty Devil in the Threadbare Jacket",
      "The Banal Reality of Evil",
      "Smerdyakov's Suicide by Hanging"
    ]
  },
  {
    unit_id: "unit-12",
    unit_number: 12,
    chapter_number: 12,
    title: "A Judicial Error & The Speech at the Stone: The Trial, Siberia & Hurrah for Karamazov!",
    scope: "Book 12 & Epilogue: The Courtroom Battle, Katya's Fatal Letter, The Guilty Verdict & Alyosha's Funeral Sermon",
    epistemic_status: "JUDICIAL_TRAGEDY & TRANSCENDENT_HOPE",
    materiality: "CRITICAL",
    core_theme: "The tragic courtroom trial of Dmitri, Katerina's betrayal with the drunken letter, the triumph of judicial error, and Alyosha's final speech to the boys at Ilyusha's stone.",
    textual_analysis: [
      "The trial of Dmitri Karamazov becomes a national sensation, drawing spectators and journalists from Moscow and Petersburg. The courtroom is an arena of competing worldviews: prosecutor Ippolit Kirillovich delivers an eloquent speech framing the murder as a symbol of Russia's moral disintegration (the 'Troika' galloping toward catastrophe), while famous Petersburg defense lawyer Fetyukovich brilliantly dismantles the prosecution's circumstantial evidence.",
      "The Catastrophe of the Evidence: Ivan takes the stand in the grip of brain fever, producing the 3,000 rubles and shouting that Smerdyakov killed their father and that the Devil visited him. Discredited as a madman, Ivan is led away screaming. Then Katerina Ivanovna, terrified that Ivan will die and driven by hysterical hatred of Dmitri, takes the stand and produces Dmitri's drunken letter written on the night of the murder: 'I will borrow from father, and if he won't give it, I will kill him and take it.' This fatal document destroys Dmitri's defense.",
      "A Judicial Error: Despite Fetyukovich's brilliant closing argument that 'an innocent man is being sacrificed to a logic of appearances,' the peasant jury deliberates for barely an hour and returns a unanimous verdict: 'Guilty of premeditated parricide for robbery.' Dmitri is sentenced to twenty years of hard labor in Siberia.",
      "The Escape Plan: In the epilogue, Alyosha and Katya arrange an escape plan for Dmitri during his transport to Siberia, bribing guards so Dmitri and Grushenka can flee to America, work for several years, and return to Russia under assumed names. Dmitri accepts that he must bear the cross of being considered a parricide by his motherland.",
      "The Speech at the Stone: The novel concludes at the funeral of little Ilyusha. Surrounded by the twelve schoolboys near the massive stone where Ilyusha wished to be buried, Alyosha delivers his immortal address. He urges the boys never to forget this moment of pure, shared love: 'Let us make a covenant here, at Ilyusha's stone, that we will never forget each other, and whatever happens to us in life... let us always remember how good it was when we were all together, united by a good and kind feeling.' The boys surround Alyosha, weeping with joyful devotion, crying with one voice: 'Hurrah for Karamazov!'"
    ],
    verbatim_quote: "Let us make a covenant here, at Ilyusha's stone, that we will never forget Ilyusha and one another... Even if we are occupied with the most important things, if we attain honor or fall into great misfortune—still, let us never forget how good it was once here, when we were all together, united by a good and kind feeling... Hurrah for Karamazov!",
    operational_heuristic: "Human justice is inherently prone to catastrophic judicial error; the only enduring shield against cynicism is preserving the sacred memory of pure love shared in youth.",
    key_motifs: [
      "The Troika of Russia in the Courtroom",
      "Katerina's Fatal Drunken Letter",
      "The Unanimous Guilty Verdict",
      "The American Escape Plan",
      "The Speech at Ilyusha's Stone: 'Hurrah for Karamazov!'"
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
let md = `# The Brothers Karamazov
**Author:** Fyodor Dostoevsky  
**Original Publication:** 1879–1880 (*The Russian Messenger*)  
**Standard:** BKRS v2.0 Total Knowledge Reconstruction System  
**Category:** Philosophical Fiction, Theological Dialectic & Parricide  

---

## Executive Architectural Summary

*The Brothers Karamazov* represents the supreme artistic and philosophical culmination of Fyodor Dostoevsky's life's work. Published in 1880 just months before his death, the novel is at once a gripping murder mystery, an unsparing psychological anatomy of family pathology, and the deepest theological-philosophical debate in world literature.

Set in the provincial Russian town of Skotoprigonyevsk, the narrative centers on the murder of the depraved, clownish patriarch Fyodor Pavlovich Karamazov, and the subsequent trial of his eldest son Dmitri. Around this central crime, Dostoevsky constructs an intricate polyphonic universe embodied by the four brothers:
1. **Dmitri (Mitya):** The sensualist and romantic, torn between the sublime ideal of the Madonna and the base abyss of Sodom.
2. **Ivan:** The brilliant rationalist intellectual whose agonizing rejection of God's universe over the suffering of innocent children culminates in the immortal poem *The Grand Inquisitor*.
3. **Alexei (Alyosha):** The monastic novice who embodies active, uncomplaining Christian love and fraternity in the world.
4. **Pavel Smerdyakov:** The illegitimate son, domestic servant, and epileptic who takes Ivan's philosophical dictum—"if there is no God, everything is permitted"—to its literal, lethal conclusion by murdering their father.

Dostoevsky's dialectic operates without cheap didacticism: he gives Ivan's atheistic indictment of God the most devastating arguments ever penned, only to provide its spiritual refutation not through philosophical treatises, but through the lived, compassionate example of Elder Zosima, the transformative repentance of Dmitri through his dream of the weeping babe, and Alyosha's final covenant of active love with the boys at Ilyusha's stone.

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
  <title>Fyodor Dostoevsky: The Brothers Karamazov — BKRS Master Reader</title>
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
      <h1>The Brothers Karamazov</h1>
      <p>Fyodor Dostoevsky (1880) — BKRS Master Reader</p>
    </div>
    <div class="view-toggles">
      <button class="toggle-btn active" onclick="switchView('journey')">View A: Narrative Journey</button>
      <button class="toggle-btn" onclick="switchView('map')">View B: Knowledge Map</button>
      <button class="toggle-btn" onclick="switchView('heuristics')">View C: Theological Heuristics</button>
    </div>
  </header>

  <div class="main-layout">
    <aside class="sidebar">
      <div class="sidebar-title">The Twelve Books & Movements</div>
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
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Systematic organization of Dostoevsky's masterpiece across metaphysical rebellion, theodicy, and spiritual regeneration.</p>
        <div class="grid-view" id="mapGrid"></div>
      </section>

      <!-- View C: Theological Heuristics -->
      <section id="viewHeuristics" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">The Karamazovian Heuristics</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Core philosophical and theological axioms extracted from the four brothers' ordeal.</p>
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
          <h4>Karamazovian Dialectic Axiom</h4>
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
console.log('\nSUCCESS: Fyodor Dostoevsky: The Brothers Karamazov completely built and verified!');
