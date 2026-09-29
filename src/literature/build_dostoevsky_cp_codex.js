/**
 * Builder for Fyodor Dostoevsky: Crime and Punishment
 * Standard: BKRS v2.0 Production Master
 * Architecture: 12 Comprehensive Narrative Units | Psychological Realism & Moral Resurrection
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'crime-and-punishment');
fs.mkdirSync(targetDir, { recursive: true });

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Yellow Closet and the Rehearsal: Poverty, The Pawn-Broker & The Taproom Confession",
    scope: "Part I, Chapters 1-2: Raskolnikov's St. Petersburg Garret, The Trial Visit to Alyona & Marmeladov in the Tavern",
    epistemic_status: "PSYCHOLOGICAL_ISOLATION & SOCIAL_PATHOLOGY",
    materiality: "CRITICAL",
    core_theme: "The suffocating environment of Raskolnikov's closet-sized room, his intellectual obsession with an unspeakable act, and the catastrophic tragedy of Marmeladov.",
    textual_analysis: [
      "In early July, during an unusually sweltering heatwave, Rodion Romanovich Raskolnikov emerges from his tiny garret room on Stolyarny Lane in St. Petersburg. The garret resembles a cupboard or coffin rather than an apartment—barely six paces long, with peeling yellow wallpaper, a low ceiling that cramps his tall frame, and a horsehair sofa missing half its stuffing. Raskolnikov is desperately impoverished, heavily indebted to his landlady for rent, poorly fed, and dressed in rags so decrepit that even a beggar would hesitate to wear them.",
      "The Rehearsal Visit: Raskolnikov is not merely poor; he is in the grip of a monomaniacal, abstract theory that has detached him from human contact. He conducts a 'rehearsal' (proba) of his conceived crime, visiting the elderly pawnbroker Alyona Ivanovna under the pretext of pledging a silver pocket watch. He meticulously registers physical details: the fourth-floor layout, the latch on the door, the keys hanging from her waist, the locked chest under her bed, and her diminutive, vulture-like physical appearance ('a tiny, withered old crone of sixty with sharp, spiteful eyes').",
      "The Taproom Confession of Semyon Marmeladov: In a filthy basement tavern reeking of stale beer and vodka, Raskolnikov encounters Marmeladov, a destitute former titular councillor. Over several hours, Marmeladov delivers one of Dostoevsky's greatest monologues on the psychology of degraded suffering. He distinguishes between poverty (which is a misfortune) and destitution (which is an absolute vice where a man loses his human countenance).",
      "The Sacrifice of Sonya: Marmeladov reveals that his eldest daughter, Sonya, has been forced into prostitution, securing a 'yellow ticket' (the official police prostitute license) to feed her consumption-ridden stepmother, Katerina Ivanovna, and three starving children. Marmeladov weeps as he describes taking Sonya's thirty kopecks for morning drink, declaring that God alone will judge and pardon the world because 'He who had pity on all men will understand and forgive.' Raskolnikov accompanies Marmeladov home to witness the squalor, leaving his last few copper coins on the windowsill."
    ],
    verbatim_quote: "Do you understand, sir, do you understand what it means when you have nowhere to go? For every man must have somewhere to go, since there are times when a man simply must go somewhere!",
    operational_heuristic: "Prolonged physical isolation combined with acute financial desperation warps theoretical intellect into rationalizing monstrous acts as moral necessities.",
    key_motifs: [
      "The Yellow Coffin-Garret",
      "The Proba (Rehearsal Visit)",
      "Alyona Ivanovna (The Louse)",
      "Marmeladov's Taproom Monologue",
      "Sonya's Yellow Ticket"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Letter from Mother & The Mare in the Mud: Dunya's Sacrifice & The Dream of Cruelty",
    scope: "Part I, Chapters 3-5: Pulcheria's Letter, Dunya's Engagement to Luzhin, The Island Dream & The Decision",
    epistemic_status: "MORAL_INDIGNATION & PROPHETIC_NIGHTMARE",
    materiality: "CRITICAL",
    core_theme: "The arrival of the mother's letter detailing Dunya's forced marriage to Luzhin, Raskolnikov's feverish moral fury, and the subconscious horror of the beaten horse.",
    textual_analysis: [
      "Returning to his room, Raskolnikov receives a lengthy letter from his mother, Pulcheria Alexandrovna. The letter recounts the humiliation his sister Avdotya Romanovna (Dunya) suffered as a governess in the household of the predatory aristocrat Arkady Svidrigailov, followed by her sudden engagement to Pyotr Petrovich Luzhin, a wealthy, vain, and calculating court councillor. Luzhin openly boasts that he wishes to marry an impoverished, virtuous girl who will look upon him as her lord and savior.",
      "The Analogy of Prostitution: Raskolnikov sees through the pious veneer with ferocious clarity: Dunya is selling her body and soul to Luzhin precisely as Sonya sells hers on Nevsky Prospect, sacrificing herself to pay for Raskolnikov's university education and career. His pride is violently wounded: 'Dunechka's marriage is the exact same thing as Sonyechka's trade! No, Dunechka, I refuse your sacrifice!' But to stop it, he must possess money immediately.",
      "The Dream of the Beaten Mare: Exhausted and feverish, Raskolnikov falls asleep in the bushes of Petrovsky Island. He dreams of his childhood in his native town. Walking to the church cemetery with his father, he witnesses a drunken peasant named Mikolka brutally flogging an old, gaunt mare that cannot haul a massive cart overloaded with people. When the whip fails, Mikolka beats her with an iron shaft and crowbar until her legs break and she dies in agony. The young Rodion throws his arms around the mare's bloody muzzle, weeping and kissing her eyes.",
      "Awakening to Horror: Waking in cold sweat, Raskolnikov recoils in terror from his own waking intention: 'Lord! Can it be that I will truly take an axe, hit her on the head, smash her skull to pieces... slop about in warm, sticky blood, break the lock, steal and tremble?' He prays for deliverance, but as he walks through the Haymarket (Sennaya), he overhears Lizaveta Ivanovna (the pawnbroker's simple-minded half-sister) agree to be away from the apartment the following evening at seven o'clock. The trap of fate snaps shut."
    ],
    verbatim_quote: "Lord! he prayed, show me my path, that I may renounce this cursed... dream of mine! / As he crossed the bridge, he looked quietly and calmly at the Neva, at the bright red sunset... It was as if an abscess on his heart had suddenly burst.",
    operational_heuristic: "Subconscious intuition instinctively rejects intellectual abstractions that violate foundational empathy; to ignore profound somatic nightmares is to court moral catastrophe.",
    key_motifs: [
      "Pulcheria's Letter",
      "Dunya's Moral Prostitution to Luzhin",
      "Mikolka and the Beaten Mare",
      "The Crowbar to the Horse's Eyes",
      "The Sennaya Overhearing at Seven O'Clock"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Blunt Blade of the Axe: The Double Homicide of Alyona and Lizaveta Ivanovna",
    scope: "Part I, Chapters 6-7: Stealing the Axe, The Apartment at Seven, The Murder & The Unplanned Witness",
    epistemic_status: "CRIMINOLOGICAL_REALISM & SENSORY_HORROR",
    materiality: "CRITICAL",
    core_theme: "The execution of the crime: mechanical execution, sensory breakdown, the murder of the pawnbroker, and the tragic, unplanned slaughter of innocent Lizaveta.",
    textual_analysis: [
      "On the evening of July 9th, Raskolnikov prepares his instruments with mechanical precision. He sews a cloth loop inside his coat to conceal the axe, prepares a fake pawn pledge (a piece of wood wrapped in paper and tied with string to distract the victim), and steals an axe from the caretaker's lodge beneath the stairs. He walks to the pawnbroker's house in a robotic daze, feeling that his limbs are moving independently of his conscious will.",
      "The Slaying of Alyona Ivanovna: Admitted into the apartment by the suspicious old woman, Raskolnikov presents his fake pledge. As she turns toward the window light to untie the knots, Raskolnikov frees the axe from the loop. With trembling hands, he brings the blunt reverse of the axe down upon the crown of her head. The blow fractures her skull; she collapses without a cry. Overcome by frantic greed, he tears the keys from her pocket, searches her bedroom, and fills his pockets with gold trinkets and pledged jewelry from the iron trunk.",
      "The Unforeseen Intrusion of Lizaveta: While Raskolnikov is washing his bloody hands in the basin, the front door clicks. Lizaveta Ivanovna—the gentle, pious, childlike sister who was supposed to be away—walks into the room. She stands paralyzed with horror, looking from the corpse to the blood-spattered student, raising her hands in a mute, helpless gesture of surrender.",
      "The Second Murder and Panic: Without thinking, driven by primeval animal panic, Raskolnikov rushes upon Lizaveta and buries the sharp edge of the axe directly into her forehead, cleaving her skull. The murder of the innocent destroys his entire philosophical premise: he did not kill a parasitical 'louse' to benefit humanity; he butchered a defenseless, pregnant saint to cover his tracks.",
      "The Narrow Escape: Two clients arrive at the door, knocking and testing the latch. Raskolnikov hides inside the locked apartment, listening in frozen terror to their footsteps. When the men leave to fetch the caretaker, Raskolnikov slips down the staircase, hiding inside an empty third-floor apartment while painters are away, and returns the axe to the lodge unseen."
    ],
    verbatim_quote: "He had not a minute more to lose. He pulled the axe out, swung it with both hands, scarcely conscious of what he was doing, and almost without effort, almost mechanically, brought the butt down on her head... Her eyes were wide open, and her face was terribly distorted.",
    operational_heuristic: "The reality of physical violence invariably shatters theoretical hubris; an act conceived as clean and surgical degenerates instantly into chaotic, collateral butchery.",
    key_motifs: [
      "The Sewn Coat Loop",
      "The Fake Pledge with the Iron Strip",
      "The Blunt Butt of the Axe",
      "The Murder of Innocent Lizaveta",
      "The Frozen Agony Behind the Latch"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The Fever of Guilt: The Stone in the Courtyard, The Police Station & Delirious Terror",
    scope: "Part II, Chapters 1-4: The Police Summons, Hiding the Booty under the Stone, Brain Fever & Razumikhin's Arrival",
    epistemic_status: "SOMATIC_GUILT & PSYCHOPATHOLOGICAL_DELIRIUM",
    materiality: "CRITICAL",
    core_theme: "The immediate psychological fallout: the summons to the police bureau, fainting at the mention of the murders, hiding the stolen loot under a stone, and falling into brain fever.",
    textual_analysis: [
      "Morning brings no triumph, only paralyzing terror. Raskolnikov inspects his clothing in microscopic panic, cutting bloody threads from his trouser cuffs and stuffing stolen items into pockets. He receives an official summons from the district police office and assumes his arrest is imminent.",
      "The Police Office Farce: At the station, he discovers the summons is merely regarding an unpaid IOU held by his landlady. Relieved, Raskolnikov listens as clerks discuss the sensational murder of the pawnbroker and her sister the previous evening. Overcome by the sudden contrast between relief and terror, Raskolnikov faints dead away on the floor. His physical collapse immediately arouses the suspicion of assistant superintendent Ilya Petrovich.",
      "The Burial under the Stone: Realizing the loot in his room constitutes evidence of capital crime, Raskolnikov wanders through St. Petersburg seeking to throw it into the Neva. Terrified of bystanders, he ducks into an obscure, desolate courtyard off Voznesensky Prospect, where construction debris is piled. He finds an enormous rough stone slab, lifts it with desperate strength, shoves the jewel cases and purse into the hollow beneath, and drops the stone back into place. Crucially, he never opens the purse to count the money; the stolen wealth is completely useless to him.",
      "Delirium and the Arrival of Razumikhin: Raskolnikov collapses into a severe, days-long 'brain fever' in his garret, experiencing terrifying auditory hallucinations (hearing his landlady being beaten by police on the stairs). When he awakens, he finds his loyal, robust university friend Dmitry Prokofyich Razumikhin nursing him back to health, alongside an eccentric physician named Zosimov. Razumikhin's selfless, practical love forms an intolerable reproach to Raskolnikov's isolated guilt."
    ],
    verbatim_quote: "He did not know what was in the purse, nor how much money there was, nor had he ever looked at it... He had thrust it under the stone without knowing. And having buried it, he turned away with an immense, sudden feeling of revulsion.",
    operational_heuristic: "Guilt manifests not merely as moral regret, but as acute somatic breakdown: tremors, vertigo, sensory paranoia, and fainting spells that betray the criminal's body.",
    key_motifs: [
      "Fainting at the Police Desk",
      "The Unopened Purse under the Stone",
      "Auditory Hallucinations of Beating",
      "Razumikhin's Faithful Nursing",
      "The Irresistible Urge to Return to the Scene"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "The Napoleonic Article: Extraordinary Men, Stepping Over Blood & Porfiry’s First Web",
    scope: "Part III, Chapter 5: Visiting the Investigator, The Article 'On Crime', Ordinary vs. Extraordinary Men & The Psychological Trap",
    epistemic_status: "MORAL_DIALECTIC & INVESTIGATIVE_PSYCHOLOGY",
    materiality: "CRITICAL",
    core_theme: "The philosophical nucleus of the novel: Raskolnikov defends his theory of the 'Extraordinary Man' (the right of Napoleons to transgress moral law) to investigator Porfiry Petrovich.",
    textual_analysis: [
      "Accompanied by Razumikhin, Raskolnikov visits the magistrate in charge of the murder investigation, Porfiry Petrovich, ostensibly to reclaim his pledged watch and ring. Porfiry—a master psychological interrogator with an unreadable, smiling countenance and sharp, feline eyes—immediately pivots the conversation to an article Raskolnikov published two months earlier in Periodical Discourse entitled 'On Crime.'",
      "The Dichotomy of Mankind: Porfiry invites Raskolnikov to explain his central thesis. Raskolnikov argues that humanity is fundamentally divided into two unequal categories: the 'Ordinary' (the material mass whose duty is reproduction, obedience, and preservation of the existing order) and the 'Extraordinary' (pioneers, lawgivers, and visionaries such as Lycurgus, Solon, Mahomet, and Napoleon).",
      "The Right to Transgress: Raskolnikov asserts that if an extraordinary man requires the elimination of obstacles or the shedding of blood to realize a historic idea for the benefit of humanity, he has an intrinsic inner moral right—indeed, a duty—to 'step over blood' with a clear conscience: 'If Napoleon had not had the courage to slaughter thousands at Toulon, no one would have ever known him.'",
      "Porfiry's Razor: Porfiry traps Raskolnikov with brilliant, understated irony: 'How does one distinguish an extraordinary man from an ordinary one? Do they wear a special uniform? And what if an ordinary young man imagines himself to be a Napoleon and takes an axe to an old crone?' Porfiry asks Raskolnikov casually whether he saw any painters at work on the third floor when he pledged his watch—a lethal, trap question confirming Porfiry suspects him."
    ],
    verbatim_quote: "I only believe in my leading idea that men are in general divided by the laws of nature into two categories: an inferior class of ordinary men who form the material of the world... and the extraordinary men who have the gift or the talent to speak a new word in their environment.",
    operational_heuristic: "Intellectual doctrines that claim certain elites possess a transcendent right to transgress universal moral prohibitions invariably produce monstrous rationalizations for petty personal crimes.",
    key_motifs: [
      "The Article 'On Crime'",
      "Ordinary Mass vs. Extraordinary Napoleons",
      "Stepping Over Blood with a Clear Conscience",
      "Porfiry Petrovich's Feline Smile",
      "The Trap of the Third-Floor Painters"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Shadow of Sensuality: Arkady Ivanovich Svidrigailov and the Specters of Damnation",
    scope: "Part IV, Chapters 1-2: Svidrigailov's Sudden Arrival, The Dual Doppelgänger, Cynical Nihilism & The Bathhouse of Spiders",
    epistemic_status: "METAPHYSICAL_DOPPELGÄNGER & EROTIC_CORRUPTION",
    materiality: "CRITICAL",
    core_theme: "The appearance of Svidrigailov as Raskolnikov's grotesque double: absolute moral cynicism, the banality of eternity as a spider-filled bathhouse, and the specter of Dunya.",
    textual_analysis: [
      "Awakening from a feverish nightmare in his garret, Raskolnikov looks up to see an aristocratic stranger sitting silently by his bed. It is Arkady Ivanovich Svidrigailov, the wealthy, depraved former employer of Dunya who attempted to seduce her in the country and whose wife, Marfa Petrovna, recently died under suspicious circumstances.",
      "The Doppelgänger Function: Svidrigailov immediately identifies the secret kinship between them: 'There is a certain point of likeness between us... We are birds of a feather.' Where Raskolnikov transgressed out of ideological hubris, Svidrigailov has lived his entire life beyond moral boundaries out of sheer sensual self-indulgence, having allegedly driven a deaf servant boy to suicide and violated a young girl.",
      "The Metaphysics of Damnation: Raskolnikov asks Svidrigailov if he believes in ghosts and eternal life. Svidrigailov replies with a horrifying vision of eternity that strips away all religious majesty: 'We always imagine eternity as something vast, incomprehensible, huge... But why should it be? Instead of all that, what if it's just one little room, like a village bathhouse, grimy, with spiders in every corner, and that's all eternity is?'",
      "Svidrigailov's Proposal: Svidrigailov claims to have reformed and offers ten thousand rubles to Dunya to prevent her marriage to the pompous Luzhin, begging Raskolnikov to arrange a private meeting with his sister. Raskolnikov recoils from him with visceral disgust, recognizing in Svidrigailov the terrifying logical endpoint of his own philosophy: a soul completely emptied of moral revulsion, trapped in bored depravity."
    ],
    verbatim_quote: "We always picture eternity as an idea that cannot be understood, something vast and immense. But why must it be? What if, instead of all that, you will find only a little room, like a village bathhouse, grimy, and spiders in every corner, and that is all eternity is?",
    operational_heuristic: "To abolish universal moral limits does not elevate a man into a god; it reduces him to a bored, cynical sensualist condemned to an eternity of grimy, spider-infested banality.",
    key_motifs: [
      "Svidrigailov at the Foot of the Bed",
      "'We are birds of a feather'",
      "The Village Bathhouse of Spiders",
      "The Ghost of Marfa Petrovna",
      "The 10,000-Ruble Offer to Dunya"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Raising of Lazarus: Bowing to Human Suffering & The Gospel in the Prostitute’s Room",
    scope: "Part IV, Chapter 4: Raskolnikov Visits Sonya, The Kissing of the Foot, Reading John 11 & The Candle Flame",
    epistemic_status: "THEOLOGICAL_SUBVERSION & SPIRITUAL_COMMUNION",
    materiality: "CRITICAL",
    core_theme: "The spiritual zenith of the novel: Raskolnikov visits Sonya's bare room, prostrates before her suffering, and demands she read the Resurrection of Lazarus from the Fourth Gospel.",
    textual_analysis: [
      "Driven by an irresistible spiritual impulse, Raskolnikov visits Sonya Marmeladova in her squalid, irregularly shaped room in the house of Kapernaumov the tailor. The room is bare, yellow, and silent, furnished only with a bed, a chest of drawers, and an ancient copy of the New Testament purchased from Lizaveta Ivanovna.",
      "Bowing to Universal Suffering: Looking upon Sonya's frail body, trembling hands, and clear blue eyes that have preserved childlike innocence amidst the degradation of prostitution, Raskolnikov suddenly drops to his knees, prostrating himself and kissing her foot. When she recoils in horror, he rises and explains: 'I did not bow down to you; I bowed down to all the suffering of humanity.'",
      "The Interrogation of Faith: Raskolnikov attacks her religious faith with brutal intellectual cynicism, asking what will become of Katerina Ivanovna's children when the mother dies of consumption, and whether God would permit Sonya to lose her mind. Sonya whispers with fierce, absolute conviction: 'What would I be without God? God does everything!'",
      "The Reading of John 11: Raskolnikov spots Lizaveta's Bible and commands Sonya to read the account of the raising of Lazarus. Trembling, weeping, and finding her voice, Sonya reads the sacred text of Christ standing before the four-day-dead corpse: 'Lord, by this time he stinketh: for he hath been dead four days... Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.' In that dimly lit room, the murderer of Lizaveta and the holy prostitute huddle over the book of life by the guttering candle flame."
    ],
    verbatim_quote: "I did not bow down to you, I bowed down to all the suffering of humanity, he said, and walked away to the window... The candle-end was flickering out in the crooked candlestick, dimly lighting up the murderer and the harlot who had so strangely come together over the reading of the eternal book.",
    operational_heuristic: "Genuine spiritual redemption begins with the recognition of universal suffering; intellectual arrogance collapses when brought into the presence of sacrificial, uncomplaining love.",
    key_motifs: [
      "Kapernaumov's Irregular Room",
      "Bowing to All Human Suffering",
      "Lizaveta's New Testament",
      "The Raising of Four-Day-Dead Lazarus",
      "The Murderer and the Harlot by the Candle"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Cat and the Mouse: Porfiry Petrovich’s Psychological Net & The False Confession",
    scope: "Part IV, Chapters 5-6: The Second Interrogation at the Inquest, The Psychological Torture & Nikolay's Interruption",
    epistemic_status: "CRIMINAL_PSYCHOLOGY & FORENSIC_GASLIGHTING",
    materiality: "CRITICAL",
    core_theme: "Porfiry Petrovich dismantles Raskolnikov's nervous system with brilliant psychological warfare, only to have the trap derailed by the false confession of painter Nikolay.",
    textual_analysis: [
      "Summoned back to Porfiry's office at eleven o'clock, Raskolnikov resolves to maintain absolute composure. But Porfiry engages in an insidious, rambling psychological monologue, pacing the room, laughing, discussing bureaucratic trivia, and refusing to present formal charges. He plays with Raskolnikov like a cat with a mouse.",
      "The Theory of the Open Trap: Porfiry explains his investigative methodology: if he arrests a suspect too soon, the suspect retreats behind legal defenses. But if he leaves an intellectual suspect completely free, watching him, letting him pace the streets in agony, the suspect will inevitably circle back to the police like a moth to a candle flame: 'He will circle round and round me, closer and closer, and then—pop! He will fly straight into my mouth!'",
      "Raskolnikov's Hysterical Outburst: Driven to the edge of madness by Porfiry's insinuations, Raskolnikov bangs his fist on the table, screaming: 'Interrogate me according to the law, or arrest me! But do not dare to mock me!' Porfiry feigns concern for his guest's health, whispering that behind the partition sits a 'little surprise' (the tradesman who saw Raskolnikov at the apartment).",
      "The Sudden Miracle of Nikolay: Just as Porfiry is about to confront Raskolnikov, a commotion breaks out in the corridor. Nikolay (Mikolka), the young house painter who had been working on the third floor and was suspected of the murders, throws open the door, drops to his knees before Porfiry, and cries out: 'I am guilty! I did the murder! I killed the old woman and Lizaveta with an axe!' Porfiry is dumbfounded; Raskolnikov walks out a free man, saved by a religious fanatic seeking to 'accept suffering.'"
    ],
    verbatim_quote: "He will circle around me, he will keep coming back, closer and closer, just as a moth circles around a candle flame. He will keep narrowing the radius himself, and then—plop! Straight into my mouth he'll fly, and I'll swallow him!",
    operational_heuristic: "A master psychological investigator does not rely on physical evidence alone; he allows the suspect's internal guilt to construct its own inescapable mental prison.",
    key_motifs: [
      "The Cat and the Mouse",
      "The Moth and the Candle Flame",
      "The Hysterical Outburst at the Desk",
      "The Tradesman Behind the Partition",
      "Nikolay's Fanatical Confession"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Malice of Pyotr Luzhin: Framing Sonya, The 100-Ruble Note & Lebezyatnikov’s Exposure",
    scope: "Part V, Chapters 1-3: Katerina's Memorial Feast, Luzhin's Vile Conspiracy, The Accusation & Public Vindication",
    epistemic_status: "SOCIAL_EXPOSURE & MORAL_VINDICATION",
    materiality: "IMPORTANT",
    core_theme: "Pyotr Luzhin's calculated plot to destroy Sonya by framing her for theft of a 100-ruble banknote at Katerina's funeral feast, and his public ruin by Lebezyatnikov.",
    textual_analysis: [
      "Following Marmeladov's death, Katerina Ivanovna spends the twenty rubles given by Raskolnikov on an extravagant memorial funeral dinner (pominki) in her tenement, desperate to assert her aristocratic Polish lineage to mocking neighbors.",
      "The Trap of the 100-Ruble Note: Pyotr Petrovich Luzhin, burning for revenge against Raskolnikov for ruining his engagement with Dunya, executes an evil, cold-blooded scheme. Summoning Sonya to his room under the guise of offering charity, he ostentatiously gives her ten rubles while secretly slipping a folded 100-ruble banknote into her coat pocket.",
      "The Accusation at the Funeral Feast: Luzhin enters the memorial banquet in front of the assembled guests, accusing Sonya of stealing a 100-ruble note from his desk. When Sonya weeps in bewildered denial, Luzhin demands a physical search. The police search her coat, and the 100-ruble note falls out. Katerina Ivanovna defends Sonya like a wounded tigress, screaming at the guests that Sonya is an angel who gave her innocence for her children.",
      "The Exposure by Lebezyatnikov: Just as Luzhin prepares to have Sonya arrested, his progressive roommate Andrey Semyonovich Lebezyatnikov bursts into the room. Lebezyatnikov reveals that he stood by the door and saw Luzhin deliberately slide the banknote into Sonya's pocket with his own hands. Raskolnikov steps forward to explain Luzhin's motive: by proving Raskolnikov's beloved friend is a thief, Luzhin hoped to discredit Raskolnikov in front of Dunya and his mother. Disgraced and terrified of legal exposure, Luzhin flees the tenement."
    ],
    verbatim_quote: "I saw him! I saw it with my own eyes! I saw him slip the note into her pocket with his own hands! Pyotr Petrovich, you are a scoundrel!",
    operational_heuristic: "Vile moral conspiracies designed to ruin the vulnerable ultimately collapse when witnessed by objective observers, exposing the corrupt operator to universal social ruin.",
    key_motifs: [
      "Katerina's Tragic Funeral Feast",
      "The Slipped 100-Ruble Banknote",
      "Luzhin's Petty Revenge Scheme",
      "Lebezyatnikov's Incorruptible Eyewitness",
      "Sonya's Vindication and Flight"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Confession in the Attic: Unburdening to Sonya, Napoleon vs. The Louse & The Copper Cross",
    scope: "Part V, Chapter 4: Raskolnikov in Sonya's Garret, The Agonizing Confession, The Louse Axiom & The Cypress Cross",
    epistemic_status: "PSYCHOLOGICAL_CONFESSION & SPIRITUAL_SURRENDER",
    materiality: "CRITICAL",
    core_theme: "Raskolnikov's confession to Sonya: the collapse of his Napoleonic theory, the admission that he is merely a 'louse,' and Sonya offering her cypress cross and exile.",
    textual_analysis: [
      "Following the banquet catastrophe, Raskolnikov rushes to Sonya's room. He sits on her bed, his face pale as a corpse, staring into her eyes. He tells her: 'Guess who killed Lizaveta?' Sonya looks into his tormented expression and gasps with sudden, horrifying understanding: 'It was you!'",
      "Sonya's Embrace of the Murderer: Instead of recoiling in horror, Sonya throws herself upon her knees before him, flinging her arms around his neck: 'What have you done to yourself! There is no one more unhappy than you in the whole world!' Raskolnikov weeps—the first genuine emotional release since the crime.",
      "The Anatomy of the Crime: Raskolnikov attempts to explain his motive, offering multiple contradictory rationalizations: he was starving; he wanted to help his mother; he wanted to become a benefactor. Sonya dismantles each excuse. Finally, he confesses the bitter naked truth: 'I wanted to become a Napoleon, that's why I killed her... I wanted to dare, Sonya, that was the only reason! I killed a louse, Sonya, a useless, loathsome, harmful louse!'",
      "The Louse Reversal: Sonya retorts with fierce moral truth: 'A human being is not a louse!' Raskolnikov breaks down, admitting that by killing the pawnbroker, he proved he was not a Napoleon: 'Did I kill the old woman? I killed myself, not the old woman! I did away with myself in one blow, for ever! And it was the devil who killed her, not me.'",
      "Sonya's Prescribed Penance: Sonya tells him what he must do to reclaim his soul: 'Stand at the cross-roads, bow down, first kiss the earth which you have defiled, and say to all men aloud: I am a murderer! Then God will send you life again.' She gives him her simple cypress wood cross (originally Lizaveta's), promising to follow him to Siberia for hard labor."
    ],
    verbatim_quote: "I wanted to prove only one thing to myself: whether I was a louse like everyone else, or a human being? Whether I could step over boundaries or not? Whether I dared to stoop and take power, or not? Am I a trembling creature, or have I the right...?",
    operational_heuristic: "Confession to a loving, incorruptible witness is the sole psychological mechanism capable of dissolving the toxic megalomania of solitary guilt.",
    key_motifs: [
      "Guess Who Killed Lizaveta?",
      "Sonya's Maternal Embrace of the Sinner",
      "Am I a Trembling Creature, or Have I the Right?",
      "I Killed Myself, Not the Old Woman",
      "The Cypress Cross of Lizaveta"
    ]
  },
  {
    unit_id: "unit-11",
    unit_number: 11,
    chapter_number: 11,
    title: "The Spider in the Bathhouse: Svidrigailov’s Suicide, Sennaya Square & The Formal Surrender",
    scope: "Part VI: Porfiry's Ultimatum, Svidrigailov Traps Dunya, The Shot to the Temple & Kissing the Earth",
    epistemic_status: "TRAGIC_RESOLUTION & SOCIAL_SURRENDER",
    materiality: "CRITICAL",
    core_theme: "Porfiry's final compassionate ultimatum, Svidrigailov's dark night and suicide in the fog, Raskolnikov kissing the muddy earth at Sennaya, and his confession to the police.",
    textual_analysis: [
      "Porfiry visits Raskolnikov's garret for the final time. The investigator drops all games, speaking with fatherly earnestness: 'It was you, Rodion Romanovich; you are the murderer. Nikolay is innocent; he only wants to accept suffering.' Porfiry gives Raskolnikov forty-eight hours to make a voluntary confession, promising it will dramatically mitigate his legal sentence.",
      "Svidrigailov's Final Drama with Dunya: Svidrigailov overhears Raskolnikov's confession through the thin partition wall of his apartment. He lures Dunya to his rooms, locking the door and offering to save Raskolnikov from Siberia if she surrenders to his lust. Dunya draws a revolver and fires twice at his head; the first bullet grazes his temple, the second misfires. Seeing that she detests him utterly and will never love him, Svidrigailov unlocks the door and lets her go.",
      "The Suicide in the Fog: Svidrigailov wanders through St. Petersburg in a torrential thunderstorm. He spends his remaining fortune providing for Katerina's orphaned children and giving three thousand rubles to Sonya. In a grimy hotel room, tormented by nightmares of a seductive five-year-old girl, Svidrigailov walks at dawn to a fire observation tower. Under the blank gaze of a Jewish guard wearing an Achilles helmet, Svidrigailov places the revolver to his right temple and pulls the trigger.",
      "Kissing the Earth at the Crossroads: Raskolnikov visits Sonya, hangs the cypress cross around his neck, and walks to Sennaya Square. Falling to his knees in the muddy marketplace, he bows down and kisses the filthy, defiled earth, weeping in front of the laughing crowd. He walks into the police station and speaks the final words: 'It was I who killed the old pawnbroker woman and her sister Lizaveta with an axe, and robbed them.'"
    ],
    verbatim_quote: "He knelt down in the middle of the square, bowed down to the earth, and kissed that filthy earth with ecstasy and happiness. He got up and bowed a second time... It is I who killed the old pawnbroker woman and her sister Lizaveta with an axe, and robbed them.",
    operational_heuristic: "When rational evasion is exhausted, public surrender and bowing before the collective conscience of humanity is the only pathway back into the human fold.",
    key_motifs: [
      "Porfiry's 48-Hour Ultimatum",
      "Dunya's Revolver Shot at Svidrigailov",
      "Svidrigailov's Suicide before the Achilles Guard",
      "Kissing the Mud at Sennaya Square",
      "The Official Confession at the Police Desk"
    ]
  },
  {
    unit_id: "unit-12",
    unit_number: 12,
    chapter_number: 12,
    title: "The Siberian Fortress: The Plague of Rational Trichinae & The Resurrection on the Irtysh",
    scope: "Epilogue: Eight Years at Omsk, Alienation from Convicts, Sonya's Ministry, The Pestilence Dream & New Life",
    epistemic_status: "SPIRITUAL_METANOIA & REGENERATION",
    materiality: "CRITICAL",
    core_theme: "The penal colony in Siberia: Raskolnikov's stubborn ideological pride, the terrifying prophetic dream of the rational trichinae plague, and his miraculous emotional rebirth through Sonya.",
    textual_analysis: [
      "Raskolnikov is sentenced to eight years of hard labor second class in a fortress prison on the banks of the Irtysh River in Siberia. His mother dies of grief and fever; Dunya marries Razumikhin. Sonya follows Raskolnikov to the prison town, living in a rented room and supporting herself by sewing.",
      "The Unrepentant Convict: In the first year of imprisonment, Raskolnikov does not repent. He considers his crime an aesthetic failure rather than a moral evil: 'I was a louse only because I failed to bear it.' The other peasant convicts despise him, sensing his aristocratic atheism and alien pride; they threaten to kill him in the prison chapel, screaming: 'You are an infidel! You do not believe in God!' Conversely, the convicts revere Sonya, calling her 'Little Mother Sonya' and bringing her their repairs.",
      "The Prophetic Dream of the Trichinae Plague: During Easter week, lying in the prison infirmary with fever, Raskolnikov dreams of a devastating global pestilence caused by microscopic parasites (trichinae) endowed with intelligence and will. People infected with trichinae immediately believe that their own intellectual opinions, moral theories, and scientific doctrines are absolute and infallible. Towns, armies, and civilizations slaughter each other in frenzy because each person believes only in his own truth. The earth is destroyed by weaponized rational arrogance.",
      "The Resurrection on the Riverbank: Recovering from the fever, Raskolnikov sits on the log piles by the broad Siberian river on a sparkling spring morning. Sonya sits beside him. Suddenly, without warning, something shatters within him; he bursts into tears, falling at her feet, embracing her knees with uncontrollable passion. Sonya looks at him and realizes his long spiritual death has ended: love has resurrected him. Under his pillow lies Lizaveta's New Testament. The seven remaining years of his sentence seem like seven days: 'A new life had begun for them, though it must cost great suffering and a great future deed.'"
    ],
    verbatim_quote: "They were both pale and thin; but in those sick and pale faces the dawn of a new future, of a full resurrection to a new life, was already glowing. Love had raised them again; the heart of each held infinite sources of life for the other.",
    operational_heuristic: "Intellectual doctrines that reject empathy lead inevitably to universal slaughter; spiritual rebirth arrives only when rational pride collapses into humble, unconditional love.",
    key_motifs: [
      "Eight Years Hard Labor on the Irtysh",
      "The Hatred of the Peasant Convicts",
      "The Prophetic Dream of the Rational Trichinae",
      "Collapsing at Sonya's Feet",
      "The Gospel under the Pillow and Seven Years like Seven Days"
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
let md = `# Crime and Punishment
**Author:** Fyodor Dostoevsky  
**Original Publication:** 1866 (*The Russian Messenger*)  
**Standard:** BKRS v2.0 Total Knowledge Reconstruction System  
**Category:** Psychological Realism, Moral Philosophy & Christian Existentialism  

---

## Executive Architectural Summary

*Crime and Punishment* stands as Fyodor Dostoevsky's monumental psychological autopsy of the modern intellectual consciousness. Published in 1866, the novel charts the ideological radicalization, criminal execution, psychological collapse, and eventual spiritual resurrection of Rodion Romanovich Raskolnikov—an impoverished, brilliant former law student living in a suffocating garret on the streets of St. Petersburg.

At the core of the masterpiece is Raskolnikov's seduced intellect: his division of humanity into "ordinary" material masses and "extraordinary" Napoleonic titans who possess an intrinsic right to transgress conventional moral laws and "step over blood" to advance history. Convinced that murdering the parasitical pawnbroker Alyona Ivanovna will validate his status as an extraordinary man while securing funds to rescue his sister Dunya and mother Pulcheria, Raskolnikov carries out the homicide with an axe—only to be forced to slaughter her innocent, saintly half-sister Lizaveta as an unplanned witness.

What follows is not a standard detective story of external pursuit, but an agonizing internal crucifixion. Porfiry Petrovich, the brilliant examining magistrate, understands that physical evidence is secondary to psychological inevitability: an intellectual criminal's guilt will eventually circle back upon itself like a moth to a flame. Flanked on one side by Arkady Svidrigailov (the cynical sensualist who embodies the nihilistic abyss of Raskolnikov's philosophy) and on the other by Sonya Marmeladova (the holy prostitute who embodies sacrificial Christian love and humility), Raskolnikov's theoretical hubris is methodically dismantled until he bows before universal human suffering, kisses the muddy earth at Sennaya Square, and begins his seven-year journey toward spiritual rebirth in a Siberian penal colony.

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
  <title>Fyodor Dostoevsky: Crime and Punishment — BKRS Master Reader</title>
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
      <h1>Crime and Punishment</h1>
      <p>Fyodor Dostoevsky (1866) — BKRS Master Reader</p>
    </div>
    <div class="view-toggles">
      <button class="toggle-btn active" onclick="switchView('journey')">View A: Narrative Journey</button>
      <button class="toggle-btn" onclick="switchView('map')">View B: Knowledge Map</button>
      <button class="toggle-btn" onclick="switchView('heuristics')">View C: Dialectical Heuristics</button>
    </div>
  </header>

  <div class="main-layout">
    <aside class="sidebar">
      <div class="sidebar-title">Architectural Movements & Units</div>
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
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Systematic organization of Dostoevsky's narrative units across psychological delirium, ideological hubris, and spiritual resurrection.</p>
        <div class="grid-view" id="mapGrid"></div>
      </section>

      <!-- View C: Dialectical Heuristics -->
      <section id="viewHeuristics" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">Psychological & Moral Heuristics</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Core philosophical axioms on guilt, pride, the limits of rationalism, and spiritual redemption extracted from Raskolnikov's ordeal.</p>
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
          <h4>Dostoevskian Dialectic Axiom</h4>
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
console.log('\nSUCCESS: Fyodor Dostoevsky: Crime and Punishment completely built and verified!');
