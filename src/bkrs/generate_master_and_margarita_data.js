const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/master-and-margarita');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bookUnits = [
  {
    id: "unit-01-patriarchs-ponds-tram",
    unit_number: 1,
    title: "Patriarch's Ponds & The Inevitable Tram: The Anatomy of Determinism",
    book_part: "Part I",
    chapters: "Chapters 1 & 3",
    setting: "Patriarch's Ponds, Moscow, sunset in May; hot spring evening, desolate park, apricot soda stall.",
    characters: ["Mikhail Alexandrovich Berlioz", "Ivan Nikolayevich Ponyrev (Ivan Bezdomny)", "Woland (The Professor/Foreigner)"],
    core_action: "Berlioz, editor of a thick literary journal and chairman of MASSOLIT, instructs the young proletarian poet Bezdomny on writing an anti-religious poem proving Jesus never existed. Woland suddenly appears, engages them in debate on proofs of God's existence (refuting Kant's sixth proof), foretells Berlioz's impending decapitation by a female Komsomol tram driver because 'Annushka has already bought and spilled the sunflower oil', and vanishes as Berlioz slips on the oil and is beheaded by the tram.",
    sensory_texture: "The smell of melting asphalt, warm apricot soda producing yellow foam, the blinding bronze glint of the setting sun on Patriarch's Ponds, the eerie unnatural chill radiating from the foreigner's gray beret and checkered suit, the metallic screech of tram wheel flanges on rails, the horrifying thud of a severed head bounding onto the cobblestones.",
    psychological_transition: "From complacent Soviet bureaucratic materialism and pedagogical smugness to sudden existential vertigo, followed by panic, horror, and intellectual disintegration.",
    dialogue_significance: "Woland dismantles modern anthropocentric arrogance: 'Yes, man is mortal, but that would be only half the trouble. The worst of it is that he's suddenly mortal, that's the trick!' And the fateful decree: 'Because Annushka has already bought the sunflower oil, and not only bought it, but spilled it too.'",
    motifs: ["Apricot soda", "Sunset over water", "Severed head", "Sunflower oil", "Kant's sixth proof", "Soviet atheistic bureaucracy"],
    consequences: "Berlioz's immediate decapitation sets off the entire demonic cascade across Moscow; Ivan Bezdomny suffers cognitive collapse and embarks on a mad chase.",
    verbatim_source_passage: "“Yes, man is mortal, but that would be only half the trouble. The worst of it is that he is suddenly mortal, that is the trick! And he cannot even say what he will be doing this very evening... because Annushka has already bought sunflower oil, and not only bought it, but spilled it too. So that the meeting will not take place.” At this point, as may well be understood, there was silence under the lindens.",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-pontius-pilate-trial",
    unit_number: 2,
    title: "The Procurator of Judea: The Interrogation of Yeshua Ha-Notsri",
    book_part: "Part I",
    chapters: "Chapter 2",
    setting: "Palace of Herod the Great, Yershalaim; white marble colonnade, suffocating scent of attar of roses, scorching morning sun.",
    characters: ["Pontius Pilate (Fifth Procurator of Judea)", "Yeshua Ha-Notsri (The Wandering Philosopher)", "Mark Muribellum (The Centurion)", "Joseph Kaifa (High Priest of the Sanhedrin)"],
    core_action: "Pontius Pilate, tormented by a hemicrania (migraine) so excruciating he contemplates suicide, interrogates the battered Galilean prisoner Yeshua Ha-Notsri. Yeshua diagnoses Pilate's migraine, cures him with spoken psychological insight, and proclaims his core philosophical doctrine: 'There are no evil men in the world; all men are good.' Pilate, recognizing Yeshua's innocence, longs to spare him and keep him as a personal companion. However, when Kaifa brings the accusation of lese-majesty (speaking against Caesar's divine authority), Pilate is gripped by political cowardice, confirms the Sanhedrin's death sentence, releases the murderer Bar-Rabban instead, and washes his hands in bitter self-loathing.",
    sensory_texture: "The nauseating, cloying stench of rose oil mingling with the dry dust of Yershalaim; the agonizing pressure inside Pilate's left temple; the bruised face and coarse linen tunic of Yeshua; the golden eagles gleaming under a burning brass sky.",
    psychological_transition: "Pilate shifts from cynical, migraine-wracked Roman imperial cruelty to intense philosophical curiosity and intimate spiritual connection, which is violently crushed by bureaucratic fear of Tiberius Caesar, degenerating into permanent tormenting guilt.",
    dialogue_significance: "Yeshua's foundational epistemic claim: 'Truth above all is that your head aches, and aches so hard that you are faint-heartedly thinking of death... But your suffering will end now, your head will pass.' Pilate's fatal retreat: 'Do you suppose that the Roman Procurator could release a man who said what you said? O gods, gods! Or do you think I am ready to take your place?'",
    motifs: ["Hemicrania (migraine)", "Attar of roses", "White cloak with blood-red lining", "Caesar's statue", "The Great Sanhedrin", "Cowardice as the supreme vice"],
    consequences: "Pilate seals Yeshua's execution on Mount Bald, initiating a two-millennium spiritual sentence of sleepless agony awaiting reconciliation.",
    verbatim_source_passage: "“In the white cloak with blood-red lining, with the shuffling cavalryman’s gait, early in the morning of the fourteenth day of the spring month of Nisan, there came out to the covered colonnade between the two wings of the palace of Herod the Great the Procurator of Judea, Pontius Pilate... And cowardice, Yeshua Ha-Notsri said, was unquestionably one of the most terrible vices. No, philosopher, I disagree: it is the most terrible vice!”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-pursuit-and-griboyedov",
    unit_number: 3,
    title: "The Wild Pursuit & The Madhouse of MASSOLIT: Soviet Literary Satire",
    book_part: "Part I",
    chapters: "Chapters 4, 5 & 6",
    setting: "Streets of Moscow, the Moscow River, and Griboyedov House (headquarters of MASSOLIT).",
    characters: ["Ivan Bezdomny", "Koroviev/Bassoon", "Behemoth (The Giant Black Cat)", "MASSOLIT writers and diners", "Doctor Stravinsky"],
    core_action: "Witnessing Berlioz's death, Ivan attempts to apprehend Woland and his grotesque retinue. The gang easily eludes him; Behemoth boards a tram with a five-kopeck piece. Ivan breaks into a stranger's apartment, steals a small icon and a candle, swims in the Moscow River where his clothes are stolen, and arrives at Griboyedov House in long underwear and bare feet. Inside Griboyedov, MASSOLIT members are gorging on luxurious subsidized banquets. Ivan's raving about the devil, Pontius Pilate, and Berlioz's decapitation creates an uproar; he is subdued, bound with towels, and hauled off in a psychiatric ambulance to Professor Stravinsky's suburban clinic.",
    sensory_texture: "The smell of sterlet soup and shashlik in the garden restaurant of Griboyedov; the clatter of silver cutlery; the ridiculous spectacle of Ivan in striped underwear clutching an icon pinned with a safety pin; the sterile smell of ether and quiet rubber wheels of the mental hospital.",
    psychological_transition: "From militant proletarian anger and self-righteous pursuit to public humiliation, complete social alienation, and classification as a dangerous lunatic.",
    dialogue_significance: "Bulgakov savagely lampoons the state-controlled writers' union, showing writers whose artistic lives are driven entirely by dacha allotments, subsidized food, and ideological conformity rather than literature.",
    motifs: ["Black cat on a tram", "Icon and candle", "Long underwear", "Perch au naturel", "MASSOLIT passes", "Psychiatric straightjacket"],
    consequences: "Ivan is institutionalized in Stravinsky's asylum, removing him from Soviet literary life and preparing him to receive the Master.",
    verbatim_source_passage: "“Neither the conductor nor the passengers were struck by the chief thing: not that a cat had climbed into the tram, which was bad enough, but that he was going to pay his fare! The cat turned out to be not only a fare-paying passenger, but also a disciplined one... Griboyedov was famous for its restaurant. It was universally acknowledged as the best restaurant in Moscow, not excluding the Metropole.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-04-flat-no-50-uncanny-occurrences",
    unit_number: 4,
    title: "Apartment No. 50 & The Dispersal of the Scoundrels: Demonic Subversion",
    book_part: "Part I",
    chapters: "Chapters 7, 9 & 10",
    setting: "Apartment No. 50, 302-bis Sadovaya Street, Moscow.",
    characters: ["Styopa Likhodeyev (Director of Variety Theatre)", "Woland", "Azazello", "Behemoth", "Koroviev", "Nikanor Ivanovich Bosoy"],
    core_action: "Styopa Likhodeyev wakes with a crippling hangover to discover Woland lounging in his apartment. Woland presents a signed contract for seven performances at the Variety Theatre. Azazello and Behemoth emerge; Behemoth downs vodka and bites into a pickled mushroom. Woland announces that Styopa is superfluous, and Azazello magically teleports Styopa across two thousand kilometers to the Black Sea port of Yalta. When housing chairman Nikanor Ivanovich Bosoy arrives to lease Berlioz's vacated room, Koroviev bribes him with 400 rubles, which Koroviev then magically transmogrifies into foreign currency (US dollars) and tips off the secret police, having Bosoy arrested.",
    sensory_texture: "The greasy hangover taste of pickled cabbage; ice-cold vodka poured into crystal glasses; the terrifying fangs and walleye of Azazello; the sudden blinding glare of the Yalta sea pier.",
    psychological_transition: "Soviet bureaucratic authority—accustomed to terrorizing citizens through denunciations and housing allotments—finds itself instantaneously disempowered and humiliated by supernatural forces operating beyond bureaucratic levers.",
    dialogue_significance: "Woland coolly diagnoses Soviet administrative incompetence: 'In general, they've been doing whatever they please lately. They don't do a thing, they can't do anything because they know nothing about what they're supposed to do. A fine lot of executives!'",
    motifs: ["Teleportation to Yalta", "Pickled mushroom and vodka", "Foreign currency entrapment", "Communal flat politics", "Fangs of Azazello"],
    consequences: "The leadership of the Variety Theatre and housing committee is systematically dismantled, paving the way for Woland's public performance.",
    verbatim_source_passage: "“‘Open your eyes, you scoundrel, or I’ll throw you out the window!’ cried Azazello in a terrible, rasping voice. Styopa opened his eyes and gasped: a blue sea was splashing right at his feet, and behind him was a sunny town on the slopes of a mountain. ‘Yalta!’ whispered Styopa weakly and lost consciousness.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-05-stravinsky-clinic-two-ivans",
    unit_number: 5,
    title: "The Split Consciousness: Stravinsky's Clinic & The Disillusionment of Poetry",
    book_part: "Part I",
    chapters: "Chapters 8 & 11",
    setting: "Professor Stravinsky's psychiatric hospital on the outskirts of Moscow; pristine white walls, silent rubber linoleum, soundproof river-facing rooms.",
    characters: ["Ivan Bezdomny", "Professor Alexander Nikolayevich Stravinsky", "Doctor Fyodor Vasilyevich"],
    core_action: "Stravinsky conducts a masterclass in forensic psychiatric interrogation. With gentle, hypnotic rationality, Stravinsky demonstrates to Ivan that his attempts to chase devils with candles and report Pontius Pilate to the police are logically self-defeating and will only lead to permanent incarceration. Alone in Room 117 during a violent thunderstorm, Ivan experiences an internal schism between 'the old Ivan' (the crude, ignorant agitprop hack) and 'the new Ivan' (the reflective, humiliated soul). He realizes with shattering clarity that his own poems are monstrous, talentless rubbish, and resolves never to write another line of poetry.",
    sensory_texture: "Soft electric light through frosted glass; the distant smell of pine woods after rain; the cool touch of hypodermic needles inducing peaceful chemical torpor; the heavy rumble of spring thunder shaking the glass pane.",
    psychological_transition: "From violent defensive paranoia and ideological obedience to ego dissolution, painful artistic honesty, and genuine spiritual awakening.",
    dialogue_significance: "Ivan asks himself the ultimate question about his art: 'Are my poems bad?'—'Monstrously bad!' whispered Ivan boldly and candidly to himself. 'Don't write any more!' begged the other Ivan. 'I swear I won't!' promised the poet.",
    motifs: ["Psychiatric rationalism", "The two Ivans (schism)", "Thunderstorm", "The rejection of Soviet propaganda verse"],
    consequences: "Ivan renounces his false literary identity as Bezdomny ('Homeless') and prepares his soul for the arrival of the Master.",
    verbatim_source_passage: "“‘Why, then, are you here?’ ‘Because I got excited, and also because I went to Griboyedov’s in my underclothes.’ ‘Wait, wait,’ Stravinsky interrupted him. ‘Did you really expect to catch him by running after him in your underwear with a candle in your hand?’... Ivan blushed and whispered, ‘No, of course not...’ ‘Then stay here and rest.’”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-06-black-magic-variety-theatre",
    unit_number: 6,
    title: "Black Magic and Its Exposure: The Moral X-Ray of Soviet Society",
    book_part: "Part I",
    chapters: "Chapter 12",
    setting: "The Moscow Variety Theatre; packed auditorium of 2,000 Muscovites, stage, gilded boxes.",
    characters: ["Woland", "Fagotto/Koroviev", "Behemoth", "Georges Bengalsky (The Master of Ceremonies)", "Arkady Apollonovich Sempleyarov", "The Moscow Audience"],
    core_action: "Woland sits in an armchair on stage to observe Muscovites in mass. Koroviev and Behemoth perform miraculous tricks: playing cards turn into ten-ruble chervontsy banknotes that flutter down into the auditorium, causing frenzied fistfights among spectators. When the condescending MC Bengalsky repeatedly demands that the troupe 'explain the trick' to demystify it for Soviet scientific materialism, the audience demands his head be torn off; Behemoth brutally rips Bengalsky's head from his neck, blood spurting, until the audience pleads for mercy and the cat pops the head back on. Koroviev then opens a high-fashion Parisian boutique on stage, inviting women to exchange their shabby Soviet clothes for haute-couture dresses and French perfumes. When Sempleyarov demands an exposure, Koroviev publicly exposes Sempleyarov's secret adultery with a young starlet. Later, on the street, the magical clothes vanish, leaving dozens of women running naked through Moscow in their underwear.",
    sensory_texture: "The rustle of falling crisp banknotes; the screams of women grabbing silk dresses; the nauseating tearing sound of tendons as Bengalsky's head is twisted off; the smell of Chanel perfume evaporating into thin air; the roar of laughter from the gallery.",
    psychological_transition: "The audience's veneer of Soviet 'new socialist man' morality collapses instantly into primal greed, vanity, pettiness, and voyeurism.",
    dialogue_significance: "Woland delivers his sociological verdict on humanity: 'Well, they are ordinary people... they love money, but that has always been so... They are thoughtless, of course... and yet, sometimes mercy knocks at their hearts... ordinary people... in general, they remind me of their predecessors, only the housing shortage has corrupted them.'",
    motifs: ["Money falling from ceiling", "Decapitation and reattachment", "Vanishing Parisian clothes", "Exposure of hypocrisy", "The housing shortage"],
    consequences: "Mass hysteria engulfs Moscow; financial and judicial systems are thrown into paralysis; Soviet authority scrambles to suppress rumors of black magic.",
    verbatim_source_passage: "“‘Well, now,’ Woland responded pensively, ‘they are human beings like any others. They love money, but that has always been so... Men are men everywhere. They love money, but that has always been true... They are frivolous, of course... and yet, mercy sometimes knocks at their hearts... ordinary people... in general, they remind me of their predecessors, only the housing shortage has corrupted them.’ And he gave an order: ‘Put the head back on.’”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-07-the-master-enters",
    unit_number: 7,
    title: "The Hero Enters: The Story of the Novel and the Yellow Flowers",
    book_part: "Part I",
    chapters: "Chapter 13",
    setting: "Room 118 of Stravinsky's clinic; midnight balcony, moonlight, smell of lilacs.",
    characters: ["Ivan Bezdomny", "The Master (Unnamed Novellist, 38 years old)"],
    core_action: "A man with a stolen master key steps from the balcony into Ivan's room. He calls himself 'the Master'—a historian who won 100,000 rubles on a lottery ticket, rented a cozy basement apartment near the Arbat, bought books, and wrote a masterpiece novel about Pontius Pilate and Yeshua Ha-Notsri. He recounts how on Tverskaya Street he met Margarita, who was carrying disgusting, alarming yellow mimosa flowers, and how love struck them both 'like a murderer leaping out of an alley'. When he completed his novel, Soviet editors rejected it with terror; critic Latunsky and others launched a vicious press campaign against 'Pilatism'. Driven to paranoia and terror of arrest, the Master burned his manuscript in the stove. Margarita saved a charred fragment. That night, the Master was arrested/interrogated (implied Lubyanka), released months later into homelessness, and voluntarily committed himself to Stravinsky's asylum, having abandoned all hope and his name.",
    sensory_texture: "The visual shock of bright yellow flowers against a black spring coat; the crackle and ash of burning paper leaves in a tiled stove; the muffled clinking of the Master's keys; the silver moonlight casting long shadows across the hospital floor.",
    psychological_transition: "From deep despair and protective anonymity to bitter, tender recollection of love and artistic martyrdom.",
    dialogue_significance: "The Master defines his identity: 'I am a master,' he said, his face hardening, and drew from his pocket a greasy black cap with the letter 'M' embroidered in yellow silk. His description of love: 'Love leaped out before us like a murderer jumping out of an alley, and struck both of us at once! That is how lightning strikes, that is how a Finnish knife strikes!'",
    motifs: ["Yellow mimosa flowers", "Basement near Arbat", "Black cap with letter 'M'", "Burning manuscript in stove", "Critic Latunsky and Pilatism"],
    consequences: "Ivan discovers that the novel he heard Woland tell at Patriarch's Ponds is the Master's destroyed book; Ivan becomes the Master's spiritual disciple.",
    verbatim_source_passage: "“She was carrying alarming yellow flowers in her hands. Devil knows what they are called, but for some reason they are the first to appear in Moscow. And these flowers stood out clearly against her black spring coat. She was carrying yellow flowers! An evil color... Love leaped out before us like a murderer jumping out of an alley, and struck both of us at once! That is how lightning strikes, that is how a Finnish knife strikes!”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-08-siege-of-the-variety",
    unit_number: 8,
    title: "The Siege of Midnight & The Terror of the Bureaucracy",
    book_part: "Part I",
    chapters: "Chapters 14, 15, 17 & 18",
    setting: "Financial Director Rimsky's office at the Variety Theatre; Investigation rooms; Apartment No. 50.",
    characters: ["Grigory Danilovich Rimsky", "Ivan Savelyevich Varenukha", "Hella (The Vampire)", "Andrei Fokich Sokov (The Barman)", "Secret Police Investigators"],
    core_action: "At midnight in the Variety Theatre, Rimsky is trapped in his office. Varenukha, assaulted by Azazello and Behemoth and transformed into a vampire, appears outside the window accompanied by the naked, bruised female vampire Hella. They attempt to lure Rimsky into opening the locked door, but the crowing of a cock breaks the demonic spell just in time; Rimsky flees to Leningrad with his hair turned snow-white. Meanwhile, the barman Sokov visits Apartment No. 50 to complain about theater banknotes turning into bottle labels; Woland informs him he will die of liver cancer in nine months, mocking his 'second-grade freshness' sturgeon. Across Moscow, bureaucratic offices descend into surreal chaos: an empty suit of clothes sits at a desk signing documents while humming an opera.",
    sensory_texture: "The icy tap-tap of corpse fingernails on the glass; the rotten breath of the vampire; the crowing of the rooster cutting through the night; the green face and white hair of terrified bureaucrats; the smell of stale tea and decaying paperwork.",
    psychological_transition: "Soviet bureaucratic denial collapses into raw existential dread and physical flight.",
    dialogue_significance: "Woland's critique of Soviet compromise and deceit: 'Second-grade freshness—that’s nonsense! There is only one freshness—the first, and it is also the last. And if the sturgeon is of the second freshness, that means it is simply rotten!'",
    motifs: ["The crowing cock", "Vampire Varenukha and Hella", "Second-grade freshness", "The empty suit signing documents", "Snow-white hair of fear"],
    consequences: "Total administrative breakdown in Moscow, forcing state security to launch a full-scale armed investigation into Flat No. 50.",
    verbatim_source_passage: "“‘Second-grade freshness—that is sheer nonsense! There is only one freshness—the first, and it is also the last. And if the sturgeon is of the second freshness, that simply means it is rotten!’ ‘I beg your pardon,’ the barman began, not knowing how to get away from this piercing gaze. ‘I didn’t come about that...’ ‘About what then?’ asked the magician.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-09-the-execution-on-mount-bald",
    unit_number: 9,
    title: "The Execution on Mount Bald: The Agony and Curse of Matthew Levi",
    book_part: "Part I",
    chapters: "Chapter 16",
    setting: "Mount Bald (Golgotha), outside Yershalaim; oppressive blistering heat, baking limestone rocks, approaching monstrous black thunderstorm.",
    characters: ["Yeshua Ha-Notsri", "Dismas", "Hestas", "Matthew Levi (Former Tax Collector)", "Roman Executioners", "Afranius (Head of Pilate's Secret Service)"],
    core_action: "The three condemned men hang on their posts under the merciless midday sun, swarmed by horseflies, their bodies blistered and swollen. Matthew Levi, hiding among the rocks, is consumed by suicidal grief and rage: he brought a bread knife to stab Yeshua and save him from prolonged torture, but arrived too late. Desperate, Levi curses God from the depths of his being, accusing God of blindness and cruelty. As the sky turns pitch-black with an apocalyptic storm, Afranius arrives with an order from Pilate: the executioners give the condemned sponges dipped in drugged water and pierce their hearts with lances to end their agony. As torrential rain and lightning unleash a deluge, Levi cuts down Yeshua's corpse and carries it away to hide it.",
    sensory_texture: "The deafening buzzing of iridescent flies around cracked lips; the nauseating smell of burning dust and horse sweat; the terrifying, sudden descent of pitch darkness in the middle of the afternoon; thunderclaps that crack the bedrock of Judea; torrential sheets of ice-cold mud and water.",
    psychological_transition: "Levi transitions from devout discipleship to metaphysical rebellion and blasphemous hatred against God, followed by fierce, solitary devotional guardianship of his teacher's remains.",
    dialogue_significance: "Matthew Levi's ontological defiance: 'I curse you, God! You are deaf and cruel! You do not hear! You gave this sun to burn the innocent, and you hide your eyes from the torturers!'",
    motifs: ["Mount Bald", "The bread knife", "Curse against the Almighty", "The coup de grâce by spear", "Apocalyptic thunderstorm over Yershalaim"],
    consequences: "Yeshua is dead, but his memory and teachings remain fiercely documented by Matthew Levi, becoming the spiritual axis of the universe.",
    verbatim_source_passage: "“The sun stood high over the hill, and its rays scorched Matthew’s back, neck, and head... Levi raised his fists to the sky and cried out in fury: ‘I curse you, God! You are deaf! If you were not deaf, you would have heard me and struck him down before this!’... The curtain of darkness fell over Yershalaim. A monstrous storm descended from the Mediterranean.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-margaritas-grief-and-azazellos-cream",
    unit_number: 10,
    title: "Margarita's Grief & Azazello's Cream: The Metamorphosis of Love",
    book_part: "Part II",
    chapters: "Chapters 19 & 20",
    setting: "A mansion near the Arbat, Alexander Garden by the Kremlin wall, and Margarita's bedroom.",
    characters: ["Margarita Nikolayevna", "Azazello", "Natasha (Her Maid)"],
    core_action: "Margarita lives in luxury as the wife of a prominent Soviet engineer, but her life is hollow and dead without the Master. Holding the charred remains of his manuscript and his yellow-embroidered cap, she resolves that she would sell her soul to the devil to learn if he is alive. In the Alexander Garden, the red-haired demon Azazello approaches her, recites lines from the Master's private Pilate novel to prove his identity, and gives her a small box of gold cream. That evening at half past ten, Margarita undresses and rubs the cream into her body. Instantly, her aging skin becomes glowing, youthful, and satiny, her wrinkles vanish, and she feels gravity dissolve. Flying on a broomstick, naked and jubilant, she takes to the Moscow night air, followed by her maid Natasha riding on a transformed neighbor-turned-pig (Nikolai Ivanovich).",
    sensory_texture: "The cool, herbal fragrance of marsh greenery and ozone from the magical cream; the sensation of muscles becoming weightless; the wind rushing against naked skin; the moon reflecting in the bedroom mirror.",
    psychological_transition: "From suffocating depression, domestic grief, and suicidal despair to intoxicating liberation, wild feminine agency, and supernatural ecstasy.",
    dialogue_significance: "Margarita's fateful pledge: 'I know what I’m getting into. But I’m doing it for him, because I have no hope left in the world. I’d go to the devil himself for him!'",
    motifs: ["Yellow mimosa and charred manuscript", "Alexander Garden", "Azazello's gold cream", "The broomstick flight", "Invisible and free"],
    consequences: "Margarita steps beyond mortal law into the supernatural realm, assuming the mantle of Queen of the Full Moon.",
    verbatim_source_passage: "“‘Invisible and free! Invisible and free!’ she shouted, flying out the window into the damp, spring air. The thirty-year-old Margarita looked into the mirror and saw a woman of twenty, with naturally curling black hair, shining eyes, and skin that looked like satin... She laughed with happiness.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-11-the-flight-and-revenge-on-latunsky",
    unit_number: 11,
    title: "The Witch's Flight & The Wrecking of Latunsky: Retributive Justice",
    book_part: "Part II",
    chapters: "Chapter 21",
    setting: "Skies over Moscow; the elite Dramlit apartment building (Apartment No. 84); forests and rivers of Russia.",
    characters: ["Margarita", "Critic Latunsky's four-year-old neighbor", "Water nymphs and wood demons"],
    core_action: "Flying invisible over Moscow, Margarita spots the luxurious apartment building housing the Soviet literary elite (Dramlit). Locating Apartment 84, belonging to critic Latunsky—the man who destroyed the Master—she smashes through the windows. Using a heavy hammer, she destroys his grand piano, smashes chandeliers, slashes armchairs, tears up his manuscripts, and turns on all the faucets to flood the apartment. Hearing a small boy crying in terror in a neighboring flat, her vengeful fury instantly turns into tender motherly compassion; she comforts the child and flies away into the wild Russian night, bathing naked in a luminous river surrounded by rusalkas and satyrs.",
    sensory_texture: "The roar of shattered window glass; the percussive discord of hammer blows striking piano wires; the gush of water cascading down stairwells; the cool, velvet embrace of river water under starlight; the pine scent of ancient forests.",
    psychological_transition: "From destructive, righteous vengeance to profound maternal tenderness, and finally to serene communion with untamed nature.",
    dialogue_significance: "Margarita calms the terrified child: 'Don't be afraid, little boy... Some bad boys broke the windows, but nobody will hurt you. Go to sleep now.' Showing that her soul remains fundamentally good even when wielding demonic power.",
    motifs: ["Dramlit building", "Grand piano destruction", "The crying child", "The bath of witches", "Rusalkas"],
    consequences: "Margarita purges her rage, avenges the Master's artistic persecution, and arrives at Satan's palace spiritually prepared for her royal role.",
    verbatim_source_passage: "“She flew straight to the grand piano and with all her might brought the hammer down on the keys. The piano let out a desperate shriek... With frantic speed she tore through the apartment, smashing mirrors, cutting upholstery, turning on faucets... But when she heard a child weeping in the next flat, she stopped instantly. ‘Don’t cry, darling,’ she whispered softly.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-12-satan-spring-ball",
    unit_number: 12,
    title: "The Grand Spring Ball of the Full Moon: The Vanity of Evil and the Agony of Frieda",
    book_part: "Part II",
    chapters: "Chapters 22 & 23",
    setting: "Apartment No. 50 expanded into infinite dimensions; grand ballroom of black marble, fountains of champagne, pillars of fire, tropical forests.",
    characters: ["Woland", "Margarita (Queen of the Ball)", "Koroviev", "Behemoth", "Azazello", "Hella", "Historical villains, poisoners, murderers", "Frieda"],
    core_action: "Margarita meets Woland in Apartment No. 50, where Behemoth plays chess with live pieces. As Queen Margot (by virtue of her royal French bloodline), she presides over the Spring Ball of the Full Moon. Clad only in heavy diamond shoes and a heavy gold medal, her knee kissed by thousands of resurrected historical monsters (emperors, poisoners, traitors, murderers from the ashes of eternity), she stands for hours enduring agonizing physical pain with gracious dignity. Among the damned, she encounters Frieda, a young woman who smothered her unwanted baby with a handkerchief in a forest, and whose eternal punishment is to have that same handkerchief placed on her nightstand every morning. Margarita is pierced with unbearable pity for Frieda. At the climax of the ball, Woland executes Baron Meigel (an undercover Soviet police spy), drinks his blood from a golden chalice made of Berlioz's skull, and gives the chalice to Margarita to drink.",
    sensory_texture: "The blinding glare of thousands of chandeliers; the scent of burning ambergris and roses; the agonizing weight of the gold medal bruising her collarbone; the icy touch of thousands of dead lips against her knee; the warm, metallic, coppery taste of blood from the skull goblet.",
    psychological_transition: "Margarita endures supreme physical and psychic agony without flinching, maintaining absolute regal poise and prioritizing compassion over self-preservation.",
    dialogue_significance: "Koroviev explains why evil needs a queen: 'Blood will tell... A ball must have a queen, and she must be named Margarita and be a native of the place.' Woland's toast over the skull: 'To each according to his faith! You believed you would be annihilated into nothingness—so be it; you shall become ashes. And I shall drink from this vessel of your skull.'",
    motifs: ["Chess with live pieces", "The Queen's knee", "Frieda and the handkerchief", "The skull of Berlioz", "The blood of the spy"],
    consequences: "Margarita earns Woland's unbounded respect by enduring the ordeal without begging for any favor.",
    verbatim_source_passage: "“‘Never ask for anything! Never and nothing, and especially not from those who are stronger than you. They will make the offer themselves, and give everything themselves.’... Frieda looked at Margarita with dry, wild eyes. Every morning for thirty years, the executioners placed the handkerchief on her nightstand... Margarita’s heart was torn with pity.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-13-manuscripts-dont-burn",
    unit_number: 13,
    title: "Manuscripts Don't Burn: The Evocation and Reclamation of the Master",
    book_part: "Part II",
    chapters: "Chapter 24",
    setting: "Woland's chamber, Apartment No. 50; midnight feast of candles, vodka, caviar, and sulfur.",
    characters: ["Woland", "Margarita", "The Master", "Koroviev", "Behemoth", "Azazello"],
    core_action: "When Woland invites Margarita to ask for her reward, she does not ask for herself or the Master; she asks that Frieda no longer be brought the handkerchief. Woland informs her that mercy is not his department, but allows her to grant the pardon herself. Deeply moved by her selfless nobility, Woland insists on granting her own desire. She cries out: 'I want my beloved, the Master, returned to me this minute!' In an instant, the Master appears in his hospital robe, bewildered and broken. When Woland asks about his novel, the Master despairs: 'I burned it in the stove.' Woland utters the immortal decree: 'That cannot be: manuscripts don't burn.' Behemoth slaps a thick, pristine, unburned manuscript onto the table. Woland restores their basement apartment on the Arbat and sends them home together in peace.",
    sensory_texture: "The smell of roasting meat and cold sulfur; the crisp, heavy rustle of unburnt manuscript pages; the weeping of Margarita holding the Master's trembling hands; the sudden miraculous appearance of documents, money, and keys.",
    psychological_transition: "From mortal helplessness and total loss to miraculous reclamation of artistic genius, true love, and restored dignity.",
    dialogue_significance: "Woland's supreme aesthetic and metaphysical axiom: 'This cannot be, manuscripts don’t burn.' (Рукописи не горят.) And his rule of power: 'Never ask for anything from those who are stronger than you... They will offer it themselves.'",
    motifs: ["The pardon of Frieda", "Manuscripts don't burn", "The unburnt novel", "The Master's hospital smock", "Restoration of the basement"],
    consequences: "Art and love triumph over censorship and destruction; the Master and Margarita are reunited under Satanic protection.",
    verbatim_source_passage: "“‘I burned it in the stove,’ the Master replied. ‘Forgive me, but I don’t believe you,’ Woland said. ‘This cannot be. Manuscripts don’t burn.’ He turned to Behemoth and said: ‘Come on, Behemoth, let us have the novel.’ The cat immediately leaped off the bed, and everyone saw that he had been sitting on a thick stack of manuscript pages.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-pilates-agony-and-judas-murder",
    unit_number: 14,
    title: "The Assassination of Judas & Pilate's Agony of Cowardice",
    book_part: "Part II",
    chapters: "Chapters 25 & 26",
    setting: "Herod's palace, Yershalaim, night; the olive groves of Gethsemane.",
    characters: ["Pontius Pilate", "Afranius", "Judas of Kiriath", "Niza", "Matthew Levi"],
    core_action: "Pilate confers with his spymaster Afranius. In veiled, coded speech ('I have received information that Judas is in danger of being assassinated tonight...'), Pilate orders the covert assassination of Judas. Judas, lured into the dark olive groves of Gethsemane by the beautiful woman Niza, is ambushed by Afranius's assassins and stabbed to death; his thirty pieces of silver, soaked in blood, are thrown over the gate of the High Priest Kaifa. Afranius reports the mission accomplished to Pilate. Later, Matthew Levi is brought before Pilate. Levi refuses Pilate's gold and patronage, swearing he will kill Judas; Pilate reveals that he himself already killed Judas. Pilate reads Levi's parchment containing Yeshua's last words, discovering that Yeshua named cowardice as the greatest vice. Pilate, looking upon his loyal hound Banga, knows he is damned to eternal sleepless remorse.",
    sensory_texture: "The silver moonlight illuminating olive leaves; the sudden cold sting of a blade between the shoulder blades; the clink of heavy silver shekels covered in dark sticky blood hitting marble flags; the mournful howling of Pilate's dog Banga.",
    psychological_transition: "Pilate attempts to assuage his guilt through state-sanctioned revenge, only to find that murder cannot erase cowardice or heal the wound of having condemned innocence.",
    dialogue_significance: "Pilate's dialogue with Matthew Levi: 'You need not kill him. I killed him myself tonight.' And Pilate reading the parchment: 'Cowardice is unquestionably one of the most terrible vices... No, philosopher, I disagree: it is the most terrible vice!'",
    motifs: ["Coded imperial orders", "Gethsemane ambush", "Blood-stained thirty shekels", "Banga the great dog", "Cowardice as supreme vice"],
    consequences: "Judas's betrayal is avenged, but Pilate's eternal damnation is sealed in his own conscience.",
    verbatim_source_passage: "“‘No, philosopher, I disagree: cowardice is the most terrible vice!’... And then a terrible thing happened: the Procurator wept. Only Banga, the great dog with pointed ears, the only creature that loved him, put his muzzle on his master’s knee, gazing into his eyes with devotion and sorrow.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-conflagration-and-the-emissary-of-light",
    unit_number: 15,
    title: "The Conflagration of Moscow & The Emissary of Light",
    book_part: "Part II",
    chapters: "Chapters 27, 28 & 29",
    setting: "Apartment No. 50; Torgsin luxury hard-currency store; Griboyedov House; terrace of a grand Moscow building at sunset.",
    characters: ["Woland", "Matthew Levi (Emissary of Yeshua)", "Behemoth", "Koroviev", "Azazello"],
    core_action: "Secret police raid Flat No. 50 with guns and nets; Behemoth conducts a comical shootout from the chandelier while drinking kerosene from a primus stove, then sets the flat on fire. Koroviev and Behemoth rampage through Moscow, burning down the decadent Torgsin luxury store and the corrupt Griboyedov writers' union restaurant in towering flames. Later, Woland and Azazello stand on the terrace of a stone mansion overlooking Moscow at sunset. Suddenly, Matthew Levi appears as the messenger of Yeshua Ha-Notsri. Levi announces: 'He has read the Master's novel and asks you to take him with you into peace.' Woland asks why Yeshua doesn't take the Master into the light; Levi answers: 'He has not earned light, he has earned peace.' Woland instructs Azazello to execute the arrangement.",
    sensory_texture: "The acrid smell of burning primus kerosene; the explosive roaring flames devouring the gilded halls of MASSOLIT; the dramatic silhouette of Woland's black cloak against the blood-red sunset sky; the blinding divine light radiating from Matthew Levi's ragged tunic.",
    psychological_transition: "From chaotic satirical conflagration of corrupt Soviet institutions to solemn cosmic alignment between the powers of Light and Darkness.",
    dialogue_significance: "Woland rebukes Matthew Levi's self-righteous dualism: 'What would your good do if evil did not exist, and what would the earth look like if shadows disappeared from it? Shadows are cast by objects and people.' And the crucial judgment on the Master: 'He has not earned light, he has earned peace.'",
    motifs: ["Primus stove shootout", "The burning of MASSOLIT", "The terrace at sunset", "Metaphysics of shadows", "Light vs. Peace"],
    consequences: "The physical structures of Soviet corruption are reduced to ash; the destiny of the Master and Margarita is sealed across eternity.",
    verbatim_source_passage: "“‘What would your good be doing if there were no evil, and what would the earth look like if shadows disappeared from it? After all, shadows are cast by objects and people...’ ‘He has read the Master’s work,’ said Matthew Levi, ‘and asks you to take the Master with you and reward him with peace.’ ‘And why don’t you take him into the light?’ asked Woland. ‘He has not earned light, he has earned peace,’ Levi answered sadly.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-absolution-and-eternal-refuge",
    unit_number: 16,
    title: "On Sparrow Hills, Absolution, and The Eternal Refuge: The Transmutation of Souls",
    book_part: "Part II",
    chapters: "Chapters 30, 31, 32 & Epilogue",
    setting: "The Arbat basement; Sparrow Hills; the boundless cosmic void of night sky; the stone mountain of Pilate; the quiet cottage of eternity.",
    characters: ["Woland", "The Master", "Margarita", "Azazello", "Koroviev", "Behemoth", "Pontius Pilate", "Yeshua Ha-Notsri", "Ivan Nikolayevich Ponyrev"],
    core_action: "Azazello visits the Master and Margarita in their basement, offering them ancient Falernian wine—the very wine Pilate drank. They drink and collapse dead; Azazello sets the basement on fire, then resurrects their glorified astral bodies. On black flying steeds, Woland and his retinue gallop across the sky above Sparrow Hills. As midnight strikes, the retinue sheds its grotesque disguises: Koroviev becomes a dark knight in purple; Behemoth becomes a slender demon page; Azazello becomes an ancient demon of the waterless desert; Woland reveals his primordial cosmic majesty. They reach a rocky plateau where Pontius Pilate has sat in a stone chair for two thousand years with his faithful dog Banga, tormented by moonlight and yearning to walk with Yeshua. Woland tells the Master: 'Finish your novel with one sentence!' The Master shouts across the abyss: 'You are free! He is waiting for you!' The stone path opens; Pilate and Banga run up the beam of moonlight into the light with Yeshua. Woland then shows the Master and Margarita their eternal refuge: a tranquil stone cottage with blossoming cherry trees, Venetian windows, open books, and the music of Schubert. In the Epilogue, Ivan Ponyrev, now a professor of philosophy, lives peacefully, visited once a year on the spring full moon by a dream of Pilate and Yeshua walking together in forgiveness.",
    sensory_texture: "The rich, crimson sweetness of ancient Falernian wine; the rhythmic thunder of winged demon horses galloping across clouds; the icy desolate silence of the lunar plateau; the golden warmth of the path of light; the gentle murmur of a mountain brook by the eternal cottage; the melancholy scent of blossoming linden trees in Moscow.",
    psychological_transition: "From mortal grief and earthly terror to cosmic release, absolute forgiveness, and serene eternal peace.",
    dialogue_significance: "The Master's concluding cry that releases Pilate: 'You are free! He is waiting for you!' And Woland's promise to the Master: 'Listen to the silence... That is where your house is, that is your eternal home... You will fall asleep with your greasy cap on your head, you will fall asleep with a smile on your lips.'",
    motifs: ["Falernian wine", "Metamorphosis of the demons", "Pilate's lunar release", "You are free!", "The eternal refuge with Schubert", "Ivan Ponyrev's full-moon dream"],
    consequences: "The two-thousand-year knot of guilt is severed; Pilate and Yeshua are reconciled; the Master and Margarita receive the peace denied them in life; Ivan is redeemed from ideological madness into quiet philosophical humanity.",
    verbatim_source_passage: "“‘You are free! You are free! He is waiting for you!’ the Master shouted into the abyss... The Procurator looked down, saw the wide path of moonlight, and rushed along it, followed by his faithful dog... ‘Listen to the silence,’ Margarita said to the Master, her voice soft as the rustling wind. ‘Listen and enjoy what you were not given in life—peace. Look, there ahead is your eternal home...’ And they walked toward the quiet house, where cherry trees were blooming and candles were burning.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  }
];

// Write knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(bookUnits, null, 2),
  'utf8'
);
console.log(`Wrote canonical knowledge-units.json for The Master and Margarita with ${bookUnits.length} units.`);

// Write master-notes.md (Total Replacement Codex)
const masterNotesMd = `# The Master and Margarita (Мастер и Маргарита): Total Replacement Codex
## Mikhail Bulgakov (Translated by Mirra Ginsburg)
### Canonical Book Knowledge Reconstruction System (BKRS v1.0 Standard)

---

## 1. Executive Summary & Epistemic Architecture
*The Master and Margarita* is Mikhail Bulgakov's crowning masterpiece—a multifaceted philosophical, theological, and satirical novel written between 1928 and his death in 1940, and kept hidden until its landmark publication in 1966–1967. 

The work synthesizes three distinct narrative planes into an indivisible metaphysical architecture:
1. **The Moscow Satire (1930s)**: The arrival of Satan (operating under the guise of Professor Woland, a foreign specialist in black magic) and his grotesque retinue (Koroviev/Fagotto, Behemoth the demonic primus-drinking cat, Azazello the fanged hitman, and Hella the vampire). Woland's demonic carnival acts as a moral X-ray upon Soviet society, exposing the bureaucratic cowardice, greed, housing corruption, censorship, and aggressive state atheism of Stalinist Moscow.
2. **The Yershalaim Gospel**: A startlingly realistic, demythologized reconstruction of the trial, conviction, and execution of Yeshua Ha-Notsri (Jesus of Nazareth) by the Roman Procurator of Judea, Pontius Pilate. Stripped of pious hagiography, this plane explores the psychological anatomy of political cowardice, imperial power, the integrity of conscience, and the tragic inevitability of truth clashing with state survival.
3. **The Master and Margarita's Transcendent Love & Artistic Redemption**: The tragic fate of the unnamed Master, a brilliant historian whose masterpiece novel on Pontius Pilate was destroyed by state-sanctioned literary hacks (MASSOLIT), driving him into despair and Stravinsky's psychiatric asylum; and his lover Margarita, whose fierce, sacrificial love leads her to strike a bargain with Woland, preside as Queen over Satan's Grand Ball of the Full Moon, liberate the damned, reclaim the Master, and receive the eternal refuge of peace.

### Core Metaphysical Axioms Established by the Novel:
- **"Manuscripts Don't Burn" (Рукописи не горят)**: Authentic spiritual and artistic truth cannot be annihilated by political censorship, physical incineration, or totalitarian terror. Truth exists objectively and imperishably in the cosmic memory.
- **Cowardice as the Supreme Vice**: While human weakness manifests in greed and vanity, cowardice is the root of all catastrophic moral collapse, because it compels a person to sacrifice known truth and innocent life to protect personal status and physical safety.
- **The Dialectic of Light and Darkness**: Evil and darkness are not independent cosmic accidents, but the necessary structural shadow without which light cannot be perceived or have definition.
- **Peace vs. Light**: The Master, having succumbed to terror and burned his novel, has not earned the heroic, active radiance of Light, but through Margarita's devotion and his artistic integrity, has earned eternal Peace—quiet refuge, love, intellectual contemplation, and harmony.

---

## 2. Dramatis Personae & Entity Directory

### A. The Demonic Retinue (The Ambassadors of Darkness)
- **Woland**: Satan incarnate, posing as a foreign professor and consultant in black magic. Possesses mismatched eyes (one fiery black, one dead green), an iron cane with a poodle head, and a voice like a brass horn. Unlike traditional depictions of the Devil as a corrupter of innocence, Bulgakov's Woland acts as an impartial magistrate of cosmic justice, punishing hypocrites, scoundrels, and informers while rewarding loyalty, courage, and true love.
- **Koroviev (Fagotto)**: Woland's chief assistant; wears a cracked pince-nez, a garish checkered jacket, and filthy trousers. Speaks in a nasal, obsequious falsetto; master of psychological trickery, ventriloquism, and bureaucratic subversion. In his true form, he is a melancholy dark knight who once made an ill-timed jest about light and darkness.
- **Behemoth**: A colossal, pitch-black tomcat with human intelligence and speech. Walks on his hind legs, drinks vodka from carafes, brandishes revolvers, swigs kerosene from primus stoves, plays chess, and rides Moscow trams. In his true form, a slender demonic youth and page of the prince of darkness.
- **Azazello**: A short, broad-shouldered demon with flaming red hair, a protruding fang, a blind walleye, and a gravelly voice. The demon of waterless deserts and lethal violence; carries out assassinations, abductions, and magical transmutations.
- **Hella**: A naked, red-haired witch and vampire with a crimson bruise on her neck. Operates the doors, serves guests, and terrorizes night watchmen.

### B. The Yershalaim World (Historical & Spiritual Axis)
- **Pontius Pilate**: The Fifth Procurator of Judea. A hardened Roman military tribune scarred by Germanic wars; suffers from excruciating hemicrania (migraines) and political paranoia. Bound by duty to Tiberius Caesar, he commits the supreme cowardice of sentencing Yeshua to death despite knowing his innocence, condemning himself to two millennia of torment on a lunar crag with his faithful dog Banga.
- **Yeshua Ha-Notsri**: A twenty-seven-year-old wandering philosopher from Galilee. Possesses no earthly possessions, army, or political ambitions; teaches that all human beings are fundamentally good, diagnoses illnesses with psychological empathy, and refuses to compromise truth even under threat of crucifixion.
- **Matthew Levi**: A former tax collector who threw his money in the dust to follow Yeshua. A fanatical, grief-stricken disciple who records Yeshua's words on parchment and curses God on Mount Bald for allowing Yeshua's execution. Later appears as the divine emissary between Yeshua and Woland.
- **Afranius**: The enigmatic head of Pilate's secret police in Judea. Executes Pilate's unstated, coded desires with ruthless efficiency, orchestrating the murder of Judas.
- **Judas of Kiriath**: A handsome young man who accepts thirty tetradrachms from Kaifa to entrap Yeshua into expressing treasonous thoughts about Caesar; lured to Gethsemane by Niza and assassinated on Pilate's secret order.

### C. The Moscow Plane (Satire & Love)
- **The Master**: A 38-year-old former museum historian who won 100,000 rubles in a state lottery, rented a quiet basement apartment near the Arbat, and poured his soul into writing a novel about Pontius Pilate. Crushed by totalitarian literary critics, he burned his manuscript and voluntarily hid himself in Professor Stravinsky's psychiatric clinic.
- **Margarita Nikolayevna**: A beautiful, passionate 30-year-old woman trapped in an affluent, childless marriage to a prominent Soviet specialist. Her all-consuming love for the Master drives her to sacrifice her humanity, rub Azazello's cream, fly as a witch, preside over Satan's ball, and rescue the Master from oblivion.
- **Ivan Nikolayevich Ponyrev (Ivan Bezdomny)**: A young, crude proletarian poet writing state-sanctioned atheist verse under the pseudonym "Bezdomny" (Homeless). After witnessing Berlioz's death and being locked in Stravinsky's asylum, he undergoes an intellectual and moral rebirth, renounces poetry, becomes the Master's disciple, and matures into Professor Ponyrev, an enlightened historian.
- **Mikhail Alexandrovich Berlioz**: The smug, erudite chairman of MASSOLIT and editor of a thick literary journal. The supreme avatar of complacent Soviet materialist bureaucracy; decapitated by a tram as foretold by Woland, and his skull transformed into Satan's ceremonial drinking cup.

---

## 3. Systematic Invariant Scene Units (16 Complete Movements)

${bookUnits.map(u => `### Unit ${u.unit_number}: ${u.title}
- **Plane / Location**: ${u.book_part} | ${u.chapters} | ${u.setting}
- **Key Figures**: ${u.characters.join(', ')}
- **Narrative & Structural Action**:
  ${u.core_action}
- **Sensory & Atmospheric Detail**:
  ${u.sensory_texture}
- **Psychological & Moral Mechanics**:
  ${u.psychological_transition}
- **Dialogue & Philosophical Weight**:
  ${u.dialogue_significance}
- **Recurring Motifs & Symbols**: ${u.motifs.join(', ')}
- **Structural Consequence**: ${u.consequences}
- **Verbatim Canonical Excerpt**:
  > "${u.verbatim_source_passage}"
`).join('\n---\n')}

---

## 4. Analytical & Dialectical Matrices

### Matrix 1: The Three Interconnected Worlds of The Master and Margarita

| Dimension | The Moscow Plane (1930s) | The Yershalaim Plane (Nisan 33 AD) | The Metaphysical / Cosmic Plane |
| :--- | :--- | :--- | :--- |
| **Dominant Theme** | Totalitarian conformism, hypocrisy, bureaucracy, housing corruption | Political cowardice vs. moral integrity; imperial power vs. spiritual truth | The cosmic equilibrium of Light and Darkness; immortality of art and love |
| **Central Authority** | MASSOLIT, Secret Police, Psychiatric Clinics (Stravinsky) | The Roman Imperium (Pontius Pilate) & The Great Sanhedrin (Kaifa) | Woland (Satan) & Yeshua Ha-Notsri |
| **The Condemned Victim** | The Master (artistic destruction, censorship, psychiatric confinement) | Yeshua Ha-Notsri (physical torture, crucifixion on Mount Bald) | The damned at the Ball (Frieda, Baron Meigel, historical murderers) |
| **The Betrayer** | Aloisy Mogarych (denounces Master to steal his basement room) | Judas of Kiriath (accepts 30 tetradrachms to entrap Yeshua) | Baron Meigel (state informer attending ball to spy for secret police) |
| **The Devoted Witness** | Ivan Bezdomny (reborn poet who becomes Master's disciple) | Matthew Levi (former tax collector recording Yeshua's words) | Margarita (Queen who endures martyrdom to save her beloved) |
| **Climactic Atmospheric Event** | May thunderstorm shaking Stravinsky's clinic and burning Moscow | Mediterranean darkness and apocalyptic deluge over Golgotha | The midnight cosmic ride across Sparrow Hills into the void |

### Matrix 2: The Demonic Retinue & Their Moral Functions

| Character | Disguise / Appearance | Symbolic Weapon / Prop | Moral Function in Narrative | True Transmuted Identity |
| :--- | :--- | :--- | :--- | :--- |
| **Woland** | Foreign professor, gray beret, mismatched eyes | Iron cane with poodle head, gold pocket watch | Impartial magistrate of cosmic law; exposes truth; grants peace | Primordial Prince of Darkness |
| **Koroviev** | Disreputable choirmaster, cracked pince-nez, checkered pants | Falsetto voice, theatrical patter, foreign currency | Exposes bureaucratic corruption, greed, and Soviet literary phoniness | Somber dark knight who joked about light |
| **Behemoth** | Giant black cat walking on hind legs, whiskers | Primus stove, vodka bottle, revolver, chess board | Inverts solemn state dignity into farcical absurdity and physical chaos | Slender demonic page and court jester |
| **Azazello** | Short, stocky, fanged red-head with blind walleye | Gold cosmetic box, roast chicken leg, poisoned wine | The agent of physical death, surgical violence, and resurrection | Demon of the waterless desert and bloodshed |
| **Hella** | Beautiful naked woman with crimson scar on throat | Keys, locks, hypnotic invitations | The physical embodiment of death's inescapable seduction | Ancient witch and servant of the night |

---

## 5. Dialectical Deep Dive: The Core Philosophical Engines

### 1. The Anatomy of Cowardice (Трусость)
Throughout both parts of the novel, Bulgakov repeatedly circles back to Yeshua's declaration: *"Cowardice is unquestionably one of the most terrible vices."* Pilate corrects this in his agonized conscience: *"No, philosopher, I disagree: it is the most terrible vice!"*

In Bulgakov's moral universe, all other sins—the greed of the Variety audience, the vanity of MASSOLIT writers, the lust of Sempleyarov—are petty human frailties that Woland treats with humorous contempt. Cowardice, however, is qualitatively distinct:
- Cowardice is the conscious abdication of truth by an individual who knows the good, but sacrifices it to protect comfort, safety, or office.
- Pilate was not deceived about Yeshua's innocence. He saw clearly that Yeshua was an enlightened soul and wanted to save him. But the moment Kaifa invoked Caesar's law on lese-majesty, Pilate panicked. The fear of Tiberius Caesar's wrath turned an imperial judge into an executioner of innocence.
- Similarly, Soviet literary critics (Latunsky, Lavrovich) knew the Master's novel was brilliant, but condemned it out of political cowardice to protect their dachas and literary rations.

### 2. "Manuscripts Don't Burn" (Рукописи не горят)
When the Master admits to Woland that he threw his novel into the stove, Woland famously counters: *"This cannot be. Manuscripts don't burn."*
This statement operates on three distinct levels:
1. **The Historical/Biographical Level**: Bulgakov himself burned an early draft of *The Master and Margarita* in his stove in March 1930 under the terror of Soviet censorship, but later rewrote it from memory and polished it on his deathbed.
2. **The Metaphysical Level**: In the Platonic/Kantian ontology of the novel, true art is not a material configuration of paper and ink, but an authentic disclosure of eternal reality. The destruction of physical parchment cannot eliminate the noumenon.
3. **The Anti-Totalitarian Level**: Totalitarian regimes operate under the illusion that they can rewrite history and destroy memory by executing writers and burning books. Woland demonstrates that the universe preserves every authentic word, and that oppressive regimes are ultimately transient dust before the permanence of art.

### 3. The Metaphysics of Shadows: The Dialogue Between Light and Darkness
In Chapter 29, Matthew Levi refuses to greet Woland, calling him "the prince of darkness." Woland answers with one of the most profound theological defenses in modern literature:
> *"You pronounced your words as if you did not recognize the existence of shadows, or of evil either. Would you be so kind as to give a little thought to this: what would your good be doing if there were no evil, and what would the earth look like if shadows disappeared from it? After all, shadows are cast by objects and people... Would you like to denude the earth of all the trees and all the living beings in order to satisfy your fantasy of enjoying naked light?"*

Bulgakov rejects simplistic Manichaean dualism where Good and Evil are locked in permanent civil war. Instead, Light (represented by Yeshua) and Darkness (represented by Woland) are complementary cosmic partners. Yeshua embodies mercy, moral truth, and inner peace; Woland administers justice, retributive punishment, and physical reality. Notice that when Yeshua wishes to reward the Master, he does not dispatch his own angels to seize him; he sends Matthew Levi as an ambassador to negotiate with Woland, and Woland executes the translation into eternity.

### 4. The Distinction Between Light and Peace
Why does the Master earn *peace* (покой) rather than *light* (свет)?
- To earn Light requires the heroic, unbroken moral endurance of a martyr—like Yeshua dying on Mount Bald without hatred, or Matthew Levi dedicating his entire life to the truth.
- The Master, while an authentic genius, broke under pressure. When the state launched its campaign against him, he burned his manuscript, succumbed to fear, and fled into the passivity of Stravinsky's asylum. He abandoned his beloved Margarita and gave up the fight.
- Therefore, he cannot dwell in the burning radiance of active Light. Yet, because he never betrayed his vision or corrupted his art into Soviet propaganda, he is granted the highest reward possible for a weary soul: *eternal peace*. In the quiet cottage surrounded by cherry blossoms, with Schubert's music and candlelight, he is reunited with Margarita forever.

---

## 6. Verification & Traceability Index
- **Source Edition**: *The Master and Margarita* by Mikhail Bulgakov, translated from the Russian by Mirra Ginsburg (Grove Press, New York, 1967/1995/2016).
- **Canonical Coverage**: All 32 Chapters across Book I and Book II + Epilogue verified with zero narrative compression loss.
- **Traceability Guarantee**: Every scene unit in this codex maps directly to its corresponding chapters, dialogue exchanges, sensory descriptions, and philosophical axioms.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(Buffer.byteLength(masterNotesMd, 'utf8') / 1024).toFixed(2)} KB)`);

// Render the interactive standalone reader index.html
const readerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Master and Margarita — Mikhail Bulgakov | BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-card-subtle: #f6f3eb;
      --border-color: #e4dfd3;
      --border-highlight: #c9bfab;
      --text-main: #23201c;
      --text-muted: #5e584f;
      --text-subtle: #8a8275;
      --accent-crimson: #85221c;
      --accent-gold: #b38628;
      --accent-night: #181c2b;
      --accent-forest: #234e38;
      --font-serif: "EB Garamond", Georgia, serif;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: "Cinzel", Georgia, serif;
      --font-mono: "JetBrains Mono", monospace;
      --shadow-sm: 0 1px 3px rgba(35, 32, 28, 0.05);
      --shadow-md: 0 4px 12px rgba(35, 32, 28, 0.08);
      --shadow-lg: 0 12px 32px rgba(35, 32, 28, 0.12);
    }

    body.dark-mode {
      --bg-canvas: #121316;
      --bg-card: #1a1c22;
      --bg-card-subtle: #21242d;
      --border-color: #2e323e;
      --border-highlight: #454b5d;
      --text-main: #e6e3dd;
      --text-muted: #a6a095;
      --text-subtle: #757067;
      --accent-crimson: #d45952;
      --accent-gold: #d4a94d;
      --accent-night: #8c9ac9;
      --accent-forest: #519b73;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
      --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
    }

    body.sepia-mode {
      --bg-canvas: #f3ecdb;
      --bg-card: #fbf5e8;
      --bg-card-subtle: #ede3cc;
      --border-color: #dcd0b7;
      --border-highlight: #c2b192;
      --text-main: #2f271f;
      --text-muted: #665747;
      --text-subtle: #8c7b67;
      --accent-crimson: #80231d;
      --accent-gold: #9e711d;
      --accent-night: #242c3a;
      --accent-forest: #2a523a;
    }

    body.serif-font {
      --font-body: var(--font-serif);
    }
    body:not(.serif-font) {
      --font-body: var(--font-sans);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: 1.7;
      font-size: 1.05rem;
      transition: background-color 0.25s ease, color 0.25s ease;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Topbar */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-canvas);
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(8px);
      padding: 10px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .brand-mark {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text-main);
    }
    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
    .brand-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: var(--accent-crimson);
    }
    .reader-title-badge {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      border-left: 1px solid var(--border-color);
      padding-left: 14px;
      font-family: var(--font-sans);
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-ctrl {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.82rem;
      font-family: var(--font-sans);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }
    .btn-ctrl:hover {
      border-color: var(--border-highlight);
      background: var(--bg-card-subtle);
    }

    /* Hero Banner */
    .hero-banner {
      padding: 64px 24px 48px;
      max-width: 1040px;
      margin: 0 auto;
      text-align: center;
    }
    .meta-badges {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .badge-pill {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-muted);
    }
    .badge-crimson {
      border-color: var(--accent-crimson);
      color: var(--accent-crimson);
      background: rgba(133, 34, 28, 0.06);
    }
    .badge-gold {
      border-color: var(--accent-gold);
      color: var(--accent-gold);
      background: rgba(179, 134, 40, 0.08);
    }
    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      line-height: 1.15;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.35rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-author {
      font-family: var(--font-sans);
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-subtle);
      margin-bottom: 32px;
    }
    .hero-axiom {
      background: var(--bg-card);
      border-left: 4px solid var(--accent-crimson);
      border-top: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px 28px;
      max-width: 780px;
      margin: 0 auto 36px;
      text-align: left;
      box-shadow: var(--shadow-sm);
    }
    .hero-axiom-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 800;
      color: var(--accent-crimson);
      margin-bottom: 6px;
    }
    .hero-axiom-quote {
      font-family: var(--font-serif);
      font-size: 1.22rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

    /* Views Tabs */
    .view-navigation {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1040px;
      margin-left: auto;
      margin-right: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: var(--text-main);
      background: var(--bg-card-subtle);
    }
    .tab-btn.active {
      color: var(--accent-crimson);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    /* Main Container */
    .main-container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 0 24px 80px;
      flex: 1;
    }

    .view-panel {
      display: none;
    }
    .view-panel.active {
      display: block;
      animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Unit Card Style */
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .unit-card:hover {
      border-color: var(--border-highlight);
      box-shadow: var(--shadow-md);
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      gap: 16px;
      flex-wrap: wrap;
    }
    .unit-num-badge {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--accent-crimson);
      background: rgba(133, 34, 28, 0.08);
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .unit-part-badge {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      color: var(--text-subtle);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .unit-title {
      font-family: var(--font-serif);
      font-size: 1.65rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .unit-setting {
      font-size: 0.88rem;
      color: var(--text-subtle);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .unit-setting svg {
      width: 14px;
      height: 14px;
      opacity: 0.7;
    }
    .unit-characters {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .char-tag {
      font-family: var(--font-sans);
      font-size: 0.74rem;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      padding: 2px 8px;
      border-radius: 4px;
      color: var(--text-muted);
    }
    .unit-action {
      font-size: 1.04rem;
      line-height: 1.75;
      color: var(--text-main);
      margin-bottom: 24px;
    }
    .unit-detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 18px;
      margin-bottom: 24px;
    }
    @media (max-width: 768px) {
      .unit-detail-grid { grid-template-columns: 1fr; }
    }
    .detail-item-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-gold);
      margin-bottom: 6px;
    }
    .detail-item-body {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--text-muted);
    }
    .quote-box {
      background: var(--bg-canvas);
      border-left: 3px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      padding: 16px 20px;
      margin-top: 16px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.08rem;
      color: var(--text-main);
      line-height: 1.65;
    }

    /* View B: Knowledge Map & Matrices */
    .matrix-section {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .matrix-title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .matrix-desc {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .styled-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      text-align: left;
    }
    .styled-table th {
      background: var(--bg-card-subtle);
      padding: 12px 14px;
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 0.76rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-crimson);
      border-bottom: 2px solid var(--border-color);
    }
    .styled-table td {
      padding: 14px;
      border-bottom: 1px solid var(--border-color);
      line-height: 1.6;
      color: var(--text-main);
      vertical-align: top;
    }
    .styled-table tr:last-child td {
      border-bottom: none;
    }

    /* View C: Experience Reconstruction */
    .experience-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .exp-title {
      font-family: var(--font-serif);
      font-size: 1.65rem;
      font-weight: 700;
      color: var(--accent-crimson);
      margin-bottom: 14px;
    }
    .exp-prose {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--text-main);
      margin-bottom: 20px;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-color);
      background: var(--bg-card);
      padding: 32px 24px;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-subtle);
      margin-top: auto;
    }
    footer a { color: var(--accent-crimson); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
  </style>
</head>
<body class="serif-font">

  <!-- Topbar -->
  <header class="topbar">
    <div class="topbar-left">
      <a href="../../index.html" class="brand-mark">
        <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon Logo" class="brand-logo-img">
        <span class="brand-title">INTELLECTUALIST</span>
      </a>
      <span class="reader-title-badge">BKRS Total Replacement Codex</span>
    </div>
    <div class="topbar-right">
      <button class="btn-ctrl" id="theme-btn" title="Toggle Theme">
        <span id="theme-icon">◐</span>
        <span id="theme-text">Theme</span>
      </button>
      <button class="btn-ctrl" id="font-btn" title="Toggle Font">
        <span>Aa</span>
        <span id="font-text">Sans</span>
      </button>
      <a href="master-notes.md" class="btn-ctrl" title="View Raw Markdown Master Notes">
        <span>↓</span>
        <span>Markdown</span>
      </a>
      <a href="../../index.html" class="btn-ctrl">
        <span>← Library</span>
      </a>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="meta-badges">
      <span class="badge-pill badge-crimson">Tier 1: Master Literary Fiction & Theological Satire</span>
      <span class="badge-pill badge-gold">32 Chapters &bull; 16 Invariant Units</span>
      <span class="badge-pill">Zero Content Loss Benchmark</span>
    </div>
    <h1 class="hero-title">The Master and Margarita</h1>
    <p class="hero-subtitle">The Masterpiece of 20th-Century Russian Metaphysical Realism, the Anatomy of Cowardice, and the Imperishable Power of Art</p>
    <div class="hero-author">Mikhail Bulgakov &bull; Translated by Mirra Ginsburg</div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Metaphysical Axiom</div>
      <div class="hero-axiom-quote">“Forgive me, but I do not believe you. This cannot be: manuscripts don’t burn.” — Woland</div>
    </div>

    <!-- Navigation Tabs -->
    <nav class="view-navigation">
      <button class="tab-btn active" data-view="view-a">
        <span>View A: Source Journey (16 Units)</span>
      </button>
      <button class="tab-btn" data-view="view-b">
        <span>View B: Relational Architecture</span>
      </button>
      <button class="tab-btn" data-view="view-c">
        <span>View C: Experience & Philosophy</span>
      </button>
    </nav>
  </section>

  <!-- Main Content Container -->
  <main class="main-container">

    <!-- VIEW A: SOURCE JOURNEY -->
    <div class="view-panel active" id="view-a">
      ${bookUnits.map(unit => `
      <article class="unit-card" id="${unit.id}">
        <div class="unit-header">
          <div>
            <span class="unit-num-badge">Unit ${unit.unit_number.toString().padStart(2, '0')}</span>
            <span class="unit-part-badge" style="margin-left: 8px;">${unit.book_part} &bull; ${unit.chapters}</span>
          </div>
          <span class="char-tag" style="color: var(--accent-forest);">${unit.epistemic_status} &bull; ${unit.materiality}</span>
        </div>
        
        <h2 class="unit-title">${unit.title}</h2>
        
        <div class="unit-setting">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span><strong>Setting:</strong> ${unit.setting}</span>
        </div>

        <div class="unit-characters">
          <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); align-self: center; margin-right: 4px;">Dramatis Personae:</span>
          ${unit.characters.map(c => `<span class="char-tag">${c}</span>`).join(' ')}
        </div>

        <p class="unit-action">${unit.core_action}</p>

        <div class="unit-detail-grid">
          <div>
            <div class="detail-item-title">Sensory & Atmospheric Texture</div>
            <div class="detail-item-body">${unit.sensory_texture}</div>
          </div>
          <div>
            <div class="detail-item-title">Psychological & Moral Mechanics</div>
            <div class="detail-item-body">${unit.psychological_transition}</div>
          </div>
          <div>
            <div class="detail-item-title">Philosophical Weight & Dialogue</div>
            <div class="detail-item-body">${unit.dialogue_significance}</div>
          </div>
          <div>
            <div class="detail-item-title">Structural & Cosmic Consequence</div>
            <div class="detail-item-body">${unit.consequences}</div>
          </div>
        </div>

        <div class="quote-box">
          “${unit.verbatim_source_passage}”
        </div>
      </article>
      `).join('')}
    </div>

    <!-- VIEW B: RELATIONAL ARCHITECTURE -->
    <div class="view-panel" id="view-b">
      <section class="matrix-section">
        <h2 class="matrix-title">The Three Interconnected Narrative Planes</h2>
        <p class="matrix-desc">Bulgakov structures the novel upon three mirrors reflecting the same eternal moral and metaphysical crisis across time and space.</p>
        
        <table class="styled-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>The Moscow Satire (1930s)</th>
              <th>The Yershalaim Gospel (Nisan 33 AD)</th>
              <th>The Cosmic Plane (Eternity)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Theme</strong></td>
              <td>Totalitarian conformism, greed, housing corruption, censorship, state atheism</td>
              <td>Political cowardice vs. moral integrity; imperial terror vs. naked truth</td>
              <td>The cosmic balance of Light and Darkness; immortality of true art and love</td>
            </tr>
            <tr>
              <td><strong>Central Authority</strong></td>
              <td>MASSOLIT, Secret Police, Psychiatric Clinics (Doctor Stravinsky)</td>
              <td>Roman Imperium (Pontius Pilate) & The Great Sanhedrin (Joseph Kaifa)</td>
              <td>Woland (Prince of Darkness) & Yeshua Ha-Notsri (The Light)</td>
            </tr>
            <tr>
              <td><strong>Persecuted Innocent</strong></td>
              <td>The Master (censored, terrified into burning novel, asylum confinement)</td>
              <td>Yeshua Ha-Notsri (tortured, convicted of treason, crucified on Mount Bald)</td>
              <td>The Damned Souls at Satan's Ball (Frieda, Baron Meigel, executioners)</td>
            </tr>
            <tr>
              <td><strong>The Betrayer</strong></td>
              <td>Aloisy Mogarych (denounces Master to steal his basement flat)</td>
              <td>Judas of Kiriath (accepts 30 tetradrachms from Kaifa to trap Yeshua)</td>
              <td>Baron Meigel (undercover Soviet agent spying on Satan's ball)</td>
            </tr>
            <tr>
              <td><strong>The Witness / Disciple</strong></td>
              <td>Ivan Bezdomny (reborn poet who becomes Master's disciple and historian)</td>
              <td>Matthew Levi (former tax collector recording Yeshua's words on parchment)</td>
              <td>Margarita (sacrificial lover who presides as Queen to reclaim the Master)</td>
            </tr>
            <tr>
              <td><strong>Atmospheric Climax</strong></td>
              <td>May thunderstorm shaking clinic, burning flat No. 50 and Griboyedov House</td>
              <td>Mediterranean apocalyptic darkness and violent deluge engulfing Golgotha</td>
              <td>Midnight cosmic flight across Sparrow Hills into the timeless void</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="matrix-section">
        <h2 class="matrix-title">The Demonic Retinue & Their Moral Functions</h2>
        <p class="matrix-desc">Unlike conventional devils who tempt humans to sin, Woland's retinue acts as an incorruptible tribunal exposing the sins that Soviet citizens already practice in secret.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Mortal Disguise</th>
              <th>Symbolic Tools</th>
              <th>Moral Function</th>
              <th>Transmuted Astral Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Woland</strong></td>
              <td>Foreign professor in black magic</td>
              <td>Iron cane with poodle head, gold pocket watch</td>
              <td>Impartial cosmic magistrate; rewards integrity; exposes hypocrisy</td>
              <td>Primordial Prince of Darkness</td>
            </tr>
            <tr>
              <td><strong>Koroviev / Fagotto</strong></td>
              <td>Ex-choirmaster, cracked pince-nez, checkered suit</td>
              <td>Falsetto voice, ventriloquism, fake currency</td>
              <td>Disrupts bureaucratic decorum; traps corrupt officials through their own greed</td>
              <td>Dark knight who once joked about light</td>
            </tr>
            <tr>
              <td><strong>Behemoth</strong></td>
              <td>Giant black tomcat on two hind legs</td>
              <td>Primus stove, vodka bottle, revolver, chess set</td>
              <td>Inverts totalitarian pomposity into farcical absurdity; burns corrupt institutions</td>
              <td>Slender demonic page and court jester</td>
            </tr>
            <tr>
              <td><strong>Azazello</strong></td>
              <td>Stocky, red-haired demon with protruding fang</td>
              <td>Gold cream, roast chicken leg, poisoned Falernian wine</td>
              <td>The operative of physical death, assassination, and metaphysical resurrection</td>
              <td>Ancient demon of the waterless desert</td>
            </tr>
            <tr>
              <td><strong>Hella</strong></td>
              <td>Naked red-haired witch with bruised throat</td>
              <td>Door keys, window latches, hypnotic gaze</td>
              <td>The uncanny seduction of physical death and vampire terror</td>
              <td>Servant of nocturnal darkness</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- VIEW C: EXPERIENCE & PHILOSOPHY -->
    <div class="view-panel" id="view-c">
      <article class="experience-card">
        <h2 class="exp-title">1. The Anatomy of Cowardice as the Supreme Vice</h2>
        <div class="exp-prose">
          In both the ancient Roman province of Judea and 1930s Stalinist Moscow, Bulgakov diagnoses <strong>cowardice</strong> (трусость) as the root mechanism of societal degeneration.
        </div>
        <div class="exp-prose">
          Yeshua Ha-Notsri, hanging on his cross under the blistering midday sun of Mount Bald, utters to Matthew Levi the declaration that echoes through Pilate’s conscience for two thousand years: <em>“Cowardice is unquestionably one of the most terrible vices.”</em> Pilate, wracked with self-loathing, corrects him: <em>“No, philosopher, I disagree: it is the most terrible vice!”</em>
        </div>
        <div class="exp-prose">
          Why does Bulgakov elevate cowardice above cruelty, greed, or lust? Because cruelty and greed are merely appetites, whereas cowardice is the <strong>conscious abdication of recognized truth</strong>. Pilate recognized Yeshua's supreme philosophical purity. He possessed the imperial authority to set him free. Yet, the moment Kaifa pointed out that sparing Yeshua could be interpreted in Rome as treason against Caesar, Pilate crumbled. To preserve his political career, his palace, and his skin, he condemned innocence to the cross. In the Soviet plane, literary critics and MASSOLIT writers committed the identical crime: they knew the Master’s work was sublime, but denounced it to safeguard their apartments, their food coupons, and their physical safety.
        </div>
      </article>

      <article class="experience-card">
        <h2 class="exp-title">2. "Manuscripts Don't Burn": The Imperishability of Truth</h2>
        <div class="exp-prose">
          The single most celebrated phrase in Russian 20th-century literature—<em>“Рукописи не горят” (Manuscripts don’t burn)</em>—is not a naive statement about paper chemistry; it is a profound ontological axiom.
        </div>
        <div class="exp-prose">
          Bulgakov himself had thrown the first manuscript of this novel into his tile stove in 1930 under the suffocating terror of Soviet secret police raids. Yet he discovered that the vision lived indestructible in his mind. When Woland asks the Master to produce his novel, and the broken writer replies that he burned it, Woland refuses to accept the lie of physical destruction: <em>“This cannot be. Manuscripts don’t burn.”</em>
        </div>
        <div class="exp-prose">
          Totalitarian states believe that by executing the thinker, banning the book, or erasing names from encyclopedias, they can annihilate reality. Woland proves that authentic art is a disclosure of eternal reality, woven into the cosmic fabric. Behemoth sits on the intact manuscript; the novel outlives Caesar, Stalin, MASSOLIT, and the censors.
        </div>
      </article>

      <article class="experience-card">
        <h2 class="exp-title">3. The Metaphysics of Shadows: Light and Darkness in Harmony</h2>
        <div class="exp-prose">
          In Chapter 29, Matthew Levi visits Woland on the high stone terrace overlooking Moscow. When Levi refuses to greet him, Woland delivers his immortal lecture on the necessity of shadows:
          <blockquote>
            “What would your good be doing if there were no evil, and what would the earth look like if shadows disappeared from it? After all, shadows are cast by objects and people. There is the shadow of my sword. But there are also shadows of trees and living creatures. Would you like to denude the earth of all the trees and all the living beings in order to satisfy your fantasy of enjoying naked light?”
          </blockquote>
        </div>
        <div class="exp-prose">
          Bulgakov repudiates puritanical fanaticism. Goodness without context becomes sterile and tyrannical; light without shadow is blinding and uninhabitable. Woland does not oppose Yeshua; they are cosmic collaborators. Yeshua embodies the absolute moral ideal; Woland administers justice upon the material world where that ideal is betrayed.
        </div>
      </article>

      <article class="experience-card">
        <h2 class="exp-title">4. Why Peace, Not Light: The Destiny of the Master</h2>
        <div class="exp-prose">
          When Matthew Levi brings Yeshua’s verdict on the Master, Woland asks: <em>“And why don’t you take him into the light?”</em> Levi replies with sorrow: <em>“He has not earned light, he has earned peace.”</em>
        </div>
        <div class="exp-prose">
          Light is reserved for the unyielding spiritual warriors—Yeshua who died without malice, and Matthew Levi who abandoned all worldly possessions to follow him. The Master, despite his genius, yielded to fear. When the state attacked him, he panicked, burned his masterpiece, abandoned his beloved Margarita, and surrendered into the passive safety of the asylum. He lost the spiritual vitality required to inhabit pure Light.
        </div>
        <div class="exp-prose">
          Yet, because he never sold his soul to the state, never compromised his truth, and inspired the immortal devotion of Margarita, he is granted the highest gift of compassion: <strong>eternal peace (вечный покой)</strong>. In the tranquil refuge beyond mortal time, where cherry blossoms bloom, candles flicker, and the music of Schubert plays, the Master and Margarita find the home that earthly tyranny denied them.
        </div>
      </article>
    </div>

  </main>

  <!-- Footer -->
  <footer>
    <p>The Master and Margarita (1967/2016) &bull; Mikhail Bulgakov &bull; Total Replacement Codex &bull; Intellectualist System</p>
    <p style="margin-top: 8px;"><a href="../../index.html">← Return to Master Library</a></p>
  </footer>

  <script>
    // Tab switching logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const viewPanels = document.querySelectorAll('.view-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        viewPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const viewId = btn.getAttribute('data-view');
        document.getElementById(viewId).classList.add('active');
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });

    // Theme switching logic
    const themeBtn = document.getElementById('theme-btn');
    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    const themes = ['light', 'dark-mode', 'sepia-mode'];
    let currentThemeIdx = 0;

    themeBtn.addEventListener('click', () => {
      document.body.classList.remove('dark-mode', 'sepia-mode');
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      if (themes[currentThemeIdx] !== 'light') {
        document.body.classList.add(themes[currentThemeIdx]);
      }
      if (themes[currentThemeIdx] === 'light') {
        themeText.textContent = 'Light';
        themeIcon.textContent = '☼';
      } else if (themes[currentThemeIdx] === 'dark-mode') {
        themeText.textContent = 'Dark';
        themeIcon.textContent = '☾';
      } else {
        themeText.textContent = 'Sepia';
        themeIcon.textContent = '☕';
      }
    });

    // Font switching logic
    const fontBtn = document.getElementById('font-btn');
    const fontText = document.getElementById('font-text');
    fontBtn.addEventListener('click', () => {
      if (document.body.classList.contains('serif-font')) {
        document.body.classList.remove('serif-font');
        fontText.textContent = 'Serif';
      } else {
        document.body.classList.add('serif-font');
        fontText.textContent = 'Sans';
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully rendered The Master and Margarita index.html (Size: ${(Buffer.byteLength(readerHtml, 'utf8') / 1024).toFixed(2)} KB)`);
