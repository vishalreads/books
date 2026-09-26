const fs = require('fs');
const path = require('path');

const gatsbyUnits = [
  {
    unit_id: "unit-01",
    chapter_number: 1,
    title: "The Moral Preamble, East Egg Aristocracy, and the Green Light",
    scope: "Chapter 1: The Move to West Egg & Dinner at the Buchanans",
    epistemic_status: "LITERARY_EXPOSITION & CLASS_ONTOLOGY",
    materiality: "CRITICAL",
    core_theme: "The moral geography of Long Island; old money brutality versus raw Midwestern longing, crowned by Gatsby's reach toward the green light.",
    textual_analysis: [
      "F. Scott Fitzgerald begins his 1925 masterpiece with one of the most famous moral reflections in modern literature, spoken by narrator Nick Carraway: 'In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. \"Whenever you feel like criticizing any one,\" he told me, \"just remember that all the people in this world haven’t had the advantages that you’ve had.\"' Nick establishes himself as a tolerant, observant Midwesterner from prominent Minnesota stock who has returned from the Great War restless, feeling that the center of the world has shifted to the East. In the spring of 1922, he arrives in New York to learn the bond business, renting a weather-beaten, eighty-dollar-a-month wooden bungalow in West Egg on Long Island. West Egg, he explains, is the less fashionable of the two oval egg-shaped peninsulas, home to the gaudy, vulgar 'new money' of sudden entrepreneurs, bootleggers, and entertainers. Nick's modest bungalow sits in the shadow of a colossal palace: Jay Gatsby’s faux-Hôtel de Ville, complete with a marble swimming pool, forty acres of lawns, and a high tower clad in raw ivy.",
      "Across the dark bay lies East Egg, the pristine, white-palaced enclave of inherited 'old money' aristocracy. Nick drives across the bay to have dinner with his distant second cousin, Daisy Buchanan, and her husband, Tom Buchanan, whom Nick had known slightly at Yale. Tom is an arrogant, powerfully built thirty-year-old former college football hero with a 'cruel body', aggressive eyes, and a husky, contemptuous tenor voice that asserts physical dominance over every room he enters. Inside the Buchanan mansion, Nick enters a breezy, sunlit room where the white curtains blow like pale flags, and discovers Daisy and her friend Jordan Baker resting on an enormous couch like silver balloons anchored to the floor. Daisy captivates Nick with her thrilling, murmuring voice—a voice that seems to promise that there is no one else in the world she would rather see. In contrast, Jordan Baker is a poised, detached professional golfer with an athletic, sunburnt posture and a haughty tilt to her chin.",
      "The dinner quickly exposes the spiritual rot and intellectual emptiness beneath East Egg's polished manners. During dinner, Tom launches into a pseudo-scientific racist rant, passionately recommending a book titled The Rise of the Colored Empires by 'Goddard': 'The idea is if we don’t look out the white race will be—will be utterly submerged. It’s all scientific stuff; it’s been proved.' When the telephone rings, Tom excuses himself, and Jordan whispers to Nick the open secret that Tom has 'some woman in New York'. Daisy returns to the table, her bright gaiety straining against humiliation. Later on the porch, Daisy confesses to Nick her profound, world-weary cynicism. Recounting the birth of her daughter three years earlier, when Tom was nowhere to be found, Daisy wept upon learning the child was a girl and whispered: 'I hope she’ll be a fool—that’s the best thing a girl can be in this world, a beautiful little fool.' Returning home to West Egg in the midnight air, Nick observes his mysterious neighbor, Jay Gatsby, emerge onto the dark lawn. Gatsby stands with his hands in his pockets, gazing across the black water, trembling as he reaches out both arms toward a single, minute green light burning at the end of Daisy's dock across the bay."
    ],
    verbatim_quote: "He stretched out his arms toward the dark water in a curious way, and, far as I was from him, I could have sworn he was trembling. Involuntarily I glanced seaward—and distinguished nothing except a single green light, minute and far away, that might have been the end of a dock.",
    operational_heuristic: "Class distinctions in human society are not measured by net worth, but by generational conditioning and carelessness; recognize the moral insulation that inherited wealth erects around itself.",
    key_motifs: ["The Green Light", "West Egg vs. East Egg", "Daisy's Voice", "The Cruel Body of Tom Buchanan"]
  },
  {
    unit_id: "unit-02",
    chapter_number: 2,
    title: "The Valley of Ashes, Doctor Eckleburg, and Myrtle's Apartment Party",
    scope: "Chapter 2: The Industrial Wasteland & Tom's Manhattan Flat",
    epistemic_status: "SOCIAL_REALISM & SPIRITUAL_DESOLATION",
    materiality: "CRITICAL",
    core_theme: "The industrial wasteland supporting elite luxury; the mechanical tragedy of George Wilson, and Tom Buchanan's brutal domestic violence.",
    textual_analysis: [
      "Fitzgerald opens Chapter 2 with one of the most haunting symbolic landscapes in American prose: the Valley of Ashes. Midway between West Egg and New York City, adjacent to the commuter railroad tracks and a foul canal, lies a desolate industrial wasteland where the soot and waste of industrial capitalism are dumped. Ashes take the form of grotesque gardens, ridges, chimneys, and rising smoke; they form ash-gray men who move dimly and crumble through the powdery air. Towering over this grim terrain are the colossal, faded billboard eyes of Doctor T. J. Eckleburg—blue eyes thirty inches high, peering through enormous yellow spectacles from a forgotten oculist’s advertisement. Eckleburg possesses no face, only detached, giant retinas that brood endlessly over the solemn dumping ground, serving as an abandoned, blind deity in a secular world.",
      "Tom Buchanan compels Nick to disembark from the train at the drawbridge to meet his mistress, leading Nick to a dilapidated cement garage bearing the sign 'George B. Wilson: Cars Bought and Sold'. George Wilson is a spiritless, anemic, exhausted man covered in a light dusting of white ash, surviving on the margin of life and desperately begging Tom to sell him a car for resale. In sharp contrast, his wife, Myrtle Wilson, is a fleshy, sensual, middle-aged woman in her mid-thirties who carries her stout body with fierce, vitality-laden swagger. She completely ignores her husband, treating him like an invisible ghost, and exchanges clandestine instructions with Tom to catch the next train into the city.",
      "The trio arrives at a small, overheated apartment on 158th Street in Morningside Heights, which Tom has rented for his illicit affairs. Myrtle buys a street dog, orders whiskey, and invites her sister Catherine and their neighbors, the theatrical photographer Mr. McKee and his shrill wife. As the afternoon dissolves into a drunken haze—only the second time in Nick's life that he has ever been drunk—Myrtle undergoes an astonishing psychological transformation. Changing into an elaborate afternoon dress of cream chiffon, she sheds her working-class vitality and adopts an arrogant, condescending affectation, haughtily ordering around the servants and loudly lamenting the low station of her marriage: 'I married him because I thought he was a gentleman... but he wasn’t fit to lick my shoe.' The party degenerates into drunken bickering late at night until Myrtle defiantly taunts Tom by shouting Daisy's name: 'Daisy! Daisy! Daisy! I’ll say it whenever I want to!' With a swift, brutal, open-handed blow, Tom breaks Myrtle’s nose. Towels soaked in bloody water litter the bathroom floor as Nick slips out into the predawn darkness, wandering half-awake through the marble vaults of Pennsylvania Station."
    ],
    verbatim_quote: "This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of men who move dimly and already crumbling through the powdery air.",
    operational_heuristic: "Notice the human cost of elite consumption: behind every polished drawing room lies a hidden Valley of Ashes, where those who perform the physical labor are ground into dust.",
    key_motifs: ["The Valley of Ashes", "The Eyes of Dr. T.J. Eckleburg", "Myrtle's Fractured Nose", "Social Masquerade"]
  },
  {
    unit_id: "unit-03",
    chapter_number: 3,
    title: "Gatsby's Carnivalesque Parties, Owl Eyes, and Nick's Self-Deception",
    scope: "Chapter 3: The Summer Spectacle & The First Encounter with Gatsby",
    epistemic_status: "CULTURAL_SOCIOLOGY & CHARACTER_PHENOMENOLOGY",
    materiality: "CRITICAL",
    core_theme: "The hollow carnival of Jazz Age excess; the architectural library of real books, and the enigmatic smile of Jay Gatsby.",
    textual_analysis: [
      "Chapter 3 is Fitzgerald's definitive portrait of the roaring twenties: the lavish, sensory overload of Jay Gatsby's Saturday night parties. All summer, music drifts across the water from Gatsby's garden. Rolls-Royces serve as omnibuses shuttling guests from the train station; station wagons scurry like yellow bugs; five crates of oranges and lemons arrive every Friday, their pulps emptied into mounds by an electric juicer that extracts a pyramid of fruit in half an hour. By dusk, the garden is transformed into a shimmering amusement park: buffet tables laden with spiced baked hams and harlequin salads, floating brass orchestras under canvas tents, and endless streams of champagne. Hundreds of strangers arrive without invitations, treating Gatsby’s estate as an open casino, diving into the marble swimming pool and gossiping wildly about their host.",
      "Nick is one of the few guests who was actually formally invited, having received a handwritten invitation from Gatsby's chauffeur. Arriving in white flannels, Nick wanders through the chaotic throng feeling isolated until he spots Jordan Baker. As they move through the party, they encounter the dark folklore that surrounds Gatsby: whispered claims that he once killed a man in cold blood, or that he served as a German spy during the war. Seeking refuge from the noise, Nick and Jordan step into Gatsby's vast high-ceilinged library. There they discover an eccentric, bespectacled middle-aged man known as 'Owl Eyes', who has been drunk for a week. Owl Eyes is in absolute awe of Gatsby's bookshelves, pulling down leather-bound volumes and shouting: 'See!' he cried triumphantly. 'It’s a bona-fide piece of printed matter. It fooled me. This fella’s a regular Belasco! It’s a triumph. What thoroughness! He knew when to stop—he didn’t cut the pages!' Owl Eyes recognizes that Gatsby is a master theater producer: he spent a fortune on genuine books to construct his aristocratic facade, but left the pages uncut because he never intends to read them.",
      "Outside in the garden, Nick strikes up a conversation with a handsome, elegant gentleman of about thirty-two, discussing hydroplanes and their wartime service in the infantry during the war. Suddenly, the man smiles, and Nick experiences Gatsby's legendary charm: 'It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced—or seemed to face—the whole external world for an instant, and then concentrated on you with an irresistible prejudice in your favor.' When the man casually announces, 'I'm Gatsby,' Nick is thunderstruck: this quiet, sober man who drinks no alcohol and watches the festivities from the marble steps is the mythical figure everyone is speculating about. After a midnight summons where Gatsby confers privately with Jordan Baker for an hour, the party ends in violent farce: guests depart, and Owl Eyes' car shears off a wheel in a ditch, its drunken passengers staring uncomprehendingly at the detached axle. Nick closes the chapter by recounting his work at the Probity Trust in Manhattan, his summer relationship with Jordan, her compulsive lying (cheating in a major golf tournament), and his famous self-congratulatory verdict: 'I am one of the few honest people that I have ever known.'"
    ],
    verbatim_quote: "It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced—or seemed to face—the whole external world for an instant, and then concentrated on you with an irresistible prejudice in your favor.",
    operational_heuristic: "In societies driven by conspicuous consumption, people confuse theatrical set design with authentic depth; observe the uncut pages of those who build monuments to impress others.",
    key_motifs: ["Gatsby's Reassuring Smile", "Owl Eyes and the Uncut Books", "The Broken Chariot Axle", "Nick's Moral Vanity"]
  },
  {
    unit_id: "unit-04",
    chapter_number: 4,
    title: "Gatsby's Mythic Biography, Meyer Wolfsheim, and Daisy's Louisville Past",
    scope: "Chapter 4: The Drive to Manhattan & Jordan's Revelation",
    epistemic_status: "CRIMINAL_UNDERWORLD & HISTORICAL_EXPOSITION",
    materiality: "CRITICAL",
    core_theme: "The criminal underpinnings of the American Dream; Wolfsheim's molar cufflinks, and the tragic 1917 romance in Louisville.",
    textual_analysis: [
      "Nick begins Chapter 4 by transcribing the names of the wealthy, corrupt socialites who frequented Gatsby's parties during the summer of 1922 onto the margins of an old railway timetable: movie directors, crooked state senators, stock promoters, gambling sharks, and ruined heirs. In late July, Gatsby arrives at Nick's cottage in his magnificent cream-colored Duesenberg roadster, outfitted with triumphant nickel plating, labyrinthine windshields, and rich green leather upholstery. On the ride into Manhattan, Gatsby abruptly decides to clear up the rumors about his origins, reciting a laughably romanticized autobiography: he claims to be the son of wealthy deceased San Franciscans, educated at Oxford ('an Oxford man'), who lived like a young rajah collecting rubies in European capitals, hunting big game, and winning high combat medals in the Argonne Forest. When Nick inwardly doubts this rehearsed fairy tale, Gatsby produces two physical proofs: a real military medal from the government of Montenegro, and a sepia photograph of himself at Trinity College holding a cricket bat beside a young Earl of Doncaster.",
      "Crossing the Queensboro Bridge, Nick marvels at the intoxicating promise of New York City: 'The city seen from the Queensboro Bridge is always the city seen for the first time, in its first wild promise of all the mystery and the beauty in the world. Anything can happen now, now that we’ve slid over this bridge; anything at all.' In a dark, subterranean speakeasy on 42nd Street, Gatsby introduces Nick to his business associate, Meyer Wolfsheim—a small, flat-nosed, fifty-year-old Jewish gangster with heavy nostrils and tiny eyes. Wolfsheim inspects Nick as a potential business prospect ('a connection'), reminisces fondly about the night his associate Rosy Rosenthal was murdered outside the Metropole Café, and proudly displays his cufflinks: human molars extracted from someone who crossed him. When Wolfsheim departs, Gatsby reveals the gangster's legendary identity: 'He’s the man who fixed the World’s Series back in 1919.' Nick is stunned: 'The idea staggered me. I remembered of course that the World’s Series had been fixed in 1919, but if I had thought of it at all I would have thought of it as a thing that merely happened... It never occurred to me that one man could start to play with the faith of fifty million people.'",
      "Later that afternoon over tea at the Plaza, Jordan Baker reveals the hidden causal engine of Gatsby’s entire life. In October 1917 in Louisville, Kentucky, eighteen-year-old Daisy Fay was the most sought-after debutante in the city. Jay Gatsby, a penniless young army lieutenant stationed at nearby Camp Taylor, met Daisy and fell completely in love. After Gatsby was deployed to France, Daisy’s family forbade her from traveling to New York to see him off. In 1919, weary of waiting and dazzled by wealth, Daisy married Tom Buchanan, who bought her a three-hundred-and-fifty-thousand-dollar string of pearls. The night before her wedding, Daisy received a letter from Gatsby; she got hysterically drunk, cried until she collapsed, and tried to throw the pearls into the trash, before being sobered up and pushed into the marriage. Jordan reveals that Gatsby bought his colossal mansion in West Egg for the sole purpose of being directly across the bay from Daisy’s dock, and that he threw his lavish parties hoping she might wander in. Gatsby's modest request is merely that Nick invite Daisy to tea, so Gatsby can casually walk through the front door."
    ],
    verbatim_quote: "It never occurred to me that one man could start to play with the faith of fifty million people—with the single-mindedness of a burglar blowing a safe... He came alive to me, delivered suddenly from the womb of his purposeless luxury.",
    operational_heuristic: "Massive monuments of wealth are rarely erected for their own sake; they are often desperate, theatrical attempts to recapture a lost emotional reality.",
    key_motifs: ["Wolfsheim's Human Molar Cufflinks", "The Fixed 1919 World Series", "Daisy's Discarded Pearl Necklace", "Gatsby's Transformed Purpose"]
  },
  {
    unit_id: "unit-05",
    chapter_number: 5,
    title: "The Rainy Tea Reunion, The Tumbled Shirts, and The Loss of the Green Light",
    scope: "Chapter 5: The Reunion at Nick's Cottage & Tour of Gatsby's Mansion",
    epistemic_status: "ROMANTIC_EPIPHANY & ONTOLOGICAL_DISILLUSIONMENT",
    materiality: "CRITICAL",
    core_theme: "The agonizing tension of the reunion; Daisy weeping over the English shirts, and the deflation of Gatsby's colossal five-year illusion.",
    textual_analysis: [
      "Chapter 5 is the structural pivot of the entire novel: the long-delayed physical reunion between Jay Gatsby and Daisy Buchanan. The day begins in miserable, pouring rain. Gatsby’s anxiety is acute: he sends a landscaper to cut Nick’s grass, delivers a greenhouse of flowers, and arrives in a white flannel suit with a silver shirt and gold tie, pale, dark-ringed with sleeplessness, and trembling with terror. When Daisy arrives in an open car under a lavender hat, Nick brings her inside. Gatsby, in an agony of panic, slips out the back door, circles the house in the mud, and knocks on the front door, standing soaking wet on the porch. The initial encounter in Nick’s parlor is excruciatingly awkward: Gatsby leans stiffly against the mantelpiece and knocks a defunct clock onto the floor, catching it with trembling fingers. Convinced that the meeting is an unmitigated disaster, Gatsby whispers to Nick in the kitchen: 'This is a terrible mistake... a terrible, terrible mistake.'",
      "Nick forces Gatsby to return to the parlor and leaves the couple alone for half an hour, walking outside in the pouring rain. When Nick returns, the emotional climate has undergone a miraculous transformation: the rain has stopped, sunlight streams through the windows, Daisy’s face is smeared with tears of radiant happiness, and Gatsby is glowing with an almost celestial ecstasy: 'He literally glowed; without a word or a gesture of exultation a new well-being radiated from him and filled the little room.' Gatsby immediately insists on taking Nick and Daisy across the lawn to tour his colossal mansion, determined to display every ounce of his wealth to prove that he is now worthy of her.",
      "Inside the mansion, Gatsby guides Daisy through Marie Antoinette music rooms, Restoration salons, and marble bathrooms, watching Daisy's eyes to measure the value of his possessions by her response. In his bedroom, Gatsby flings open two massive patent-wood wardrobes and begins pulling out mounds of custom-made English shirts—shirts of sheer linen, thick silk, and fine flannel in stripes, plaids, and coral monograms—hurling them onto the table in a billowing pile. Daisy suddenly buries her head in the soft fabric and begins sobbing uncontrollably: 'They’re such beautiful shirts,' she sobbed, her voice muffled in the thick folds. 'It makes me sad because I’ve never seen such—such beautiful shirts before.' Daisy is not weeping for fabric; she is weeping for the tragic realization of the life she threw away for Tom Buchanan's inherited pearls. Stepping out onto the marble terrace, Gatsby points across the mist to the dock: 'If it wasn’t for the mist we could see your home,' said Gatsby. 'You always have a green light that burns all night at the end of your dock.' In that instant, Nick observes a profound ontological deflation: 'Possibly it had occurred to him that the colossal significance of that light had now vanished forever... His count of enchanted objects had diminished by one.' The colossal green light has been reduced to an ordinary light bulb on a pier; the dream has met the flesh, and the flesh can never match the colossal vitality of an illusion nourished for five years."
    ],
    verbatim_quote: "Possibly it had occurred to him that the colossal significance of that light had now vanished forever. Compared to the great distance that had separated him from Daisy it had seemed very near to her, almost touching her. It had seemed as close as a star to the moon. Now it was again a green light on a dock. His count of enchanted objects had diminished by one.",
    operational_heuristic: "The attainment of a long-cherished ideal inevitably collapses its mythical power; no human reality can ever compete with the colossal dimensions of a fantasy nurtured in isolation.",
    key_motifs: ["The Defunct Mantelpiece Clock", "The Billowing English Shirts", "The Diminished Green Light", "Klipspringer's Piano Melodies"]
  },
  {
    unit_id: "unit-06",
    chapter_number: 6,
    title: "James Gatz of North Dakota, Dan Cody, and 'Can't Repeat the Past'",
    scope: "Chapter 6: The True Origins & Tom's Intrusion at West Egg",
    epistemic_status: "MYTHIC_SELF_CREATION & HISTORICAL_GENEALOGY",
    materiality: "CRITICAL",
    core_theme: "The self-invention of James Gatz; Dan Cody's yacht, and the tragic romantic defiance: 'Can't repeat the past? Why of course you can!'",
    textual_analysis: [
      "In Chapter 6, Fitzgerald suspends the narrative present to shatter the myth of Jay Gatsby and reveal the historical truth: Jay Gatsby was born **James Gatz** in rural North Dakota, the son of shiftless, unsuccessful dirt farmers whom his imagination had never accepted as his real parents. At sixteen, endowed with a fierce, Platonic conception of himself, young Gatz left home. He enrolled at St. Olaf College in Minnesota, but dropped out after two weeks because his proud spirit despised working as a janitor to pay his tuition. He drifted along the southern shore of Lake Superior, fishing for salmon and digging for clams in a torn green jersey, dreaming of destiny.",
      "The turning point arrived when seventeen-year-old Gatz observed a fifty-foot luxury yacht, the Tuolomee, drop anchor over a treacherous reef in Little Girl Bay. Borrowing a rowboat, Gatz rowed out to warn the yacht's owner: Dan Cody, a fifty-year-old Montana copper and silver baron who had become a millionaire during the Nevada gold rushes. Cody, an alcoholic pioneer whose wealth had made him eccentric and soft, saw in Gatz an ambitious, fiercely disciplined young man. Cody took Gatz aboard, bought him blue denim clothes, and gave him the name **Jay Gatsby**. For five years, Gatsby sailed three times around the American continent as Cody's steward, mate, and secretary, learning the manners of the elite, witnessing the debauchery of alcohol (which inspired his own lifelong sobriety), and absorbing the hard lessons of high finance. When Cody died in Boston, his mistresses cheated Gatsby out of his twenty-five-thousand-dollar inheritance. But Gatsby was left with an unshakeable identity and an absolute belief in his destiny.",
      "Back in the summer of 1922, Tom Buchanan stops at Gatsby’s house on horseback with a wealthy couple, the Sloanes. Tom treats Gatsby with haughty, aristocratic disdain, sneering at Gatsby’s lack of inherited social pedigree. The following Saturday, Tom and Daisy attend one of Gatsby’s lavish parties. The party is an utter failure: Daisy is appalled and offended by West Egg’s raw, loud vulgarity, recoiling from the theatrical producers and drunken chorus girls. After the guests leave, Gatsby walks the deserted garden with Nick in deep despair: 'She didn’t like it,' he said immediately. 'She didn’t have a good time.' Gatsby’s obsessive ambition is not merely to win Daisy back; he demands that Daisy go to Tom and declare, 'I never loved you,' obliterating five years of marriage so they can return to Louisville and marry as if it were 1917. When Nick offers his gentle, realistic caution: 'I wouldn’t ask too much of her... You can’t repeat the past,' Gatsby turns on him with fierce, indignant disbelief: 'Can’t repeat the past?' he cried incredulously. 'Why of course you can!' Gatsby resolves to re-engineer reality through pure will."
    ],
    verbatim_quote: "The truth was that Jay Gatsby of West Egg, Long Island, sprang from his Platonic conception of himself. He was a son of God—a phrase which, if it means anything, means just that—and he must be about His Father’s business, the service of a vast, vulgar, and meretricious beauty.",
    operational_heuristic: "Human beings can invent new identities and amass fortunes, but the attempt to retroactively erase historical time and force others to conform to a frozen past leads to catastrophic psychological ruin.",
    key_motifs: ["James Gatz of North Dakota", "Dan Cody's Yacht", "The Platonic Self-Conception", "'Can't Repeat the Past?'"]
  },
  {
    unit_id: "unit-07",
    chapter_number: 7,
    title: "The Plaza Hotel Confrontation, The Death of Myrtle, and The Vigil in the Dark",
    scope: "Chapter 7: The Sweltering Climax & The Hit-and-Run in the Valley of Ashes",
    epistemic_status: "DRAMATIC_CRUCIBLE & CATASTROPHIC_PERIPETEIA",
    materiality: "CRITICAL",
    core_theme: "The volcanic collision of class and truth at the Plaza Hotel; Daisy's failure of courage, the horrific slaughter of Myrtle Wilson, and Gatsby's lonely vigil.",
    textual_analysis: [
      "Chapter 7 is the dramatic boiling point of the entire novel, set on the hottest, most oppressive day of the summer. Gatsby cancels his Saturday parties and dismisses his servants, replacing them with shadowy associates of Meyer Wolfsheim to prevent gossip about Daisy's daily visits. Nick and Gatsby travel to the Buchanan estate in East Egg for lunch. The oppressive heat frays every nerve. Daisy’s toddler daughter, Pammy, is brought into the salon; Gatsby stares at the child in stunned disbelief, confronting for the first time the living, physical proof of Daisy's life with Tom. Daisy, reckless and bored, looks directly at Gatsby with open adoration and says, 'You look so cool... You resemble the advertisement of the man,' exposing their affair to Tom. Tom, stunned with rage and jealousy, insists that the entire group drive into New York City. In a fateful swap of automobiles, Tom drives Gatsby’s yellow Duesenberg with Jordan and Nick, while Gatsby and Daisy drive Tom’s blue coupe.",
      "Stopping for gasoline at George Wilson's garage in the suffocating heat of the Valley of Ashes, Tom receives a double shock: George Wilson, sick and trembling, announces that he has discovered Myrtle's secret double life (though he does not know who her lover is) and plans to lock her up and move her to the West in two days. Tom realizes that his wife and his mistress are both slipping from his grasp in the exact same hour. The party gathers in a sweltering parlor suite at the Plaza Hotel, ordering mint juleps to escape the stifling humidity. Tom launches a vicious, calculated frontal assault: he interrogates Gatsby about his Oxford background, forcing Gatsby to admit that he only attended for five months on an army officers' program after the armistice. Gatsby counters by striking at Tom's marriage: 'Your wife doesn’t love you. She’s never loved you. She loves me... She only married you because I was poor and she was tired of waiting for me.' Gatsby demands that Daisy utter the fatal words. Daisy attempts to comply, but under Tom's relentless, bullying cross-examination, she breaks down in sobbing helplessness: 'I did love him once—but I loved you too.' Gatsby is shattered: 'You loved me too?' he repeated in disbelief.",
      "Seeing Gatsby's momentum fracture, Tom delivers the coup de grâce: he exposes Gatsby's fortune as the product of bootlegging through a chain of fraudulent side-street drugstores in Chicago and selling stolen fake bonds with Wolfsheim. Daisy recoils from Gatsby in terrified disgust, and Gatsby's aristocratic facade dissolves into the expression of an underworld criminal. Contemptuously confident in his victory, Tom dismisses them: 'Go on. He won’t annoy you. I think he realizes that his presumptuous little flirtation is over,' ordering Daisy to drive home with Gatsby in the yellow car. On the return trip through the Valley of Ashes at dusk, catastrophe strikes: Myrtle Wilson, locked in her room by her husband, sees the yellow car speeding down the road and, believing Tom is behind the wheel, breaks free and rushes into the highway. The yellow car strikes her at fifty miles per hour without stopping, tearing her left breast open and killing her instantly on the gravel road. Tom, arriving behind, weeps bitterly and diverts suspicion to Gatsby before the police. That midnight at East Egg, Nick discovers Gatsby lurking in the dark bushes outside the Buchanan mansion: Gatsby reveals that Daisy was driving the car, but that he will take the blame. Nick peeks through the kitchen pantry window and witnesses the final betrayal: Tom and Daisy sitting intimately at a table over cold fried chicken and two bottles of ale, talking in conspiratorial quiet, their careless alliance restored. Gatsby stands outside in the rain, watching over nothing."
    ],
    verbatim_quote: "He put his hands in his pockets and turned back eagerly to his scrutiny of the house, as though my presence marred the sacredness of the vigil. So I walked away and left him standing there in the moonlight—watching over nothing.",
    operational_heuristic: "When an existential crisis erupts, the entrenched aristocracy will inevitably close ranks, sacrifice their working-class pawns, and retreat behind the protective insulation of their capital.",
    key_motifs: ["The Sweltering Heat", "The Mint Juleps at the Plaza", "Myrtle's Mutilated Body", "Watching Over Nothing"]
  },
  {
    unit_id: "unit-08",
    chapter_number: 8,
    title: "The Courting of Daisy in 1917, Doctor Eckleburg as God, and Gatsby's Execution",
    scope: "Chapter 8: The Morning After & The Execution in the Pool",
    epistemic_status: "TRAGIC_DENOUEMENT & THEOCRATIC_PROJECTION",
    materiality: "CRITICAL",
    core_theme: "The original sin of class deception; the cosmic gaze of Dr. Eckleburg, and the execution of Jay Gatsby in his swimming pool.",
    textual_analysis: [
      "In the predawn chill of the following morning, Nick walks over to Gatsby's deserted mansion. The heavy front door stands open; the house smells cold, dusty, and cavernous, littered with stale tobacco and dead party ashes. Nick urges Gatsby to flee immediately to Montreal or Atlantic City, warning him that the yellow car will be traced and that he will be prosecuted for Myrtle's death. Gatsby flatly refuses: he cannot leave until he knows what Daisy will do, clinging to the delusional hope that she will call him. In the gray morning light, Gatsby tells Nick the full, unvarnished story of his youth and his courtship of Daisy in Louisville in 1917. He confesses that he took Daisy under false pretenses: wearing his officer's uniform, which disguised his poverty, he let her believe he came from the exact same wealthy stratum as herself. He fell into her house as into a breathless, sacred world of silver and white palaces, realizing that wealth was the preservative of Daisy's beauty: 'It excited him, too, that many men had already loved Daisy—it increased her value in his eyes.' When he returned from the war, penniless, Daisy had already been swept away by Tom Buchanan's position and pearls.",
      "At dawn, the gardener mentions that he must drain the marble swimming pool before the falling autumn leaves clog the drainage pipes. Gatsby instructs him to wait: he has lived in the mansion all summer and has not used the swimming pool once. Nick must catch his train for Manhattan. Walking toward the gate, Nick stops, turns around, and shouts across the lawn his final, immortal assessment: 'They’re a rotten crowd,' I shouted across the lawn. 'You’re worth the whole damn bunch put together.' Nick notes with pride: 'I’ve always been glad I said that. It was the only compliment I ever gave him, because I disapproved of him from beginning to end.'",
      "Meanwhile, Fitzgerald cuts to the Valley of Ashes, tracking the psychological unraveling of George Wilson throughout the night. Deranged by grief, lack of sleep, and shock, Wilson fixates on the expensive dog leash he found in Myrtle's bureau. He looks out the garage window into the gray dawn, gazing directly into the giant, vacant eyes of Doctor T. J. Eckleburg, and murmurs obsessively to his neighbor Michaelis: 'God knows what you’ve been doing, everything you’ve been doing. You may fool me, but you can’t fool God!' Michaelis points out that it is merely an old billboard, but Wilson is beyond reason. Convinced that the driver of the yellow car was Myrtle's lover who intentionally ran her down, Wilson sets out on foot. He walks three hours through the dust and heat, stopping at various garages to find the owner of the yellow car, eventually reaching Tom Buchanan in East Egg, who points him directly to Gatsby's estate. At two in the afternoon, Gatsby inflates a yellow air mattress and floats quietly in the pool, waiting for a phone call from Daisy that never arrives. The chauffeur hears four sharp pistol shots. When Nick and the servants rush to the pool, they find Gatsby's body floating in an expanding crimson circle of water. A few yards away in the tall grass, George Wilson's body lies dead from a self-inflicted gunshot wound to the temple."
    ],
    verbatim_quote: "They’re a rotten crowd... You’re worth the whole damn bunch put together. I’ve always been glad I said that. It was the only compliment I ever gave him, because I disapproved of him from beginning to end.",
    operational_heuristic: "True human worth is not determined by ethical perfection, but by the purity and fidelity of one's devotion; compare Gatsby's romantic loyalty to the cold, predatory carelessness of the Buchanan elite.",
    key_motifs: ["Gatsby's War Uniform as Disguise", "'You're Worth the Whole Damn Bunch'", "Doctor Eckleburg as Blind God", "The Crimson Circle in the Pool"]
  },
  {
    unit_id: "unit-09",
    chapter_number: 9,
    title: "The Deserted Funeral, Henry Gatz's Hopalong Cassidy, and 'Boats Against the Current'",
    scope: "Chapter 9: The Aftermath, Two Years Later & The Final Epitaph",
    epistemic_status: "HISTORICAL_EPITAPH & CIVILIZATIONAL_CRITIQUE",
    materiality: "CRITICAL",
    core_theme: "The complete abandonment of Gatsby in death; the tragic ledger of James Gatz, the carelessness of the rich, and the boats beating against the current.",
    textual_analysis: [
      "Chapter 9 is Fitzgerald's somber, heartbreaking meditation on the aftermath of Gatsby's death, recounted by Nick two years later. The police and reporters swarm the mansion, fabricating grotesque, sensational tabloid headlines about a 'deranged lover' and a 'murder-suicide'. Nick desperately attempts to contact Gatsby's friends and associates to organize a dignified funeral, but the vast hive of hundreds who drank his champagne and danced on his lawns vanishes overnight. Daisy and Tom Buchanan pack their suitcases and leave Long Island without leaving a phone number, address, or message. Meyer Wolfsheim sends a cold note refusing to attend, and when Nick confronts him in person at his Manhattan office, Wolfsheim explains his ruthless underworld policy: 'Let us learn to show our friendship for a man when he is alive and not after he is dead... When a man gets killed I never like to get mixed up in it in any way.' Klipspringer, the resident 'boarder' who lived in Gatsby’s mansion for months, calls Nick only to ask if Nick can mail his forgotten pair of white tennis shoes.",
      "The only person who arrives is Gatsby's father, Henry C. Gatz—a frail, grief-stricken old man in a cheap ulster who traveled from Minnesota after reading about the murder in a Chicago newspaper. Mr. Gatz walks through the vast, empty rooms in awe, sobbing with paternal pride and convinced his son would have been a great national figure: 'If he’d of lived, he’d of been a great man. A man like James J. Hill. He’d of helped build up the country.' Mr. Gatz proudly shows Nick a ragged boyhood copy of Hopalong Cassidy that young James Gatz had owned. Inside the back cover, dated September 12, 1906, the sixteen-year-old boy had scribbled a strict, daily schedule of self-improvement: rising at 6:00 AM, exercising, studying electricity and inventions, practicing elocution, and writing 'General Resolves' (e.g., 'Save $5.00 [crossed out] $3.00 per week', 'Be better to parents', 'Read one improving book per week'). The tragedy of Gatsby was not that he was a cynical criminal; it was that he was an innocent boy who applied the earnest, Protestant ethic of Benjamin Franklin to a corrupt, predatory world.",
      "On the afternoon of the funeral, in a torrential downpour, the funeral cortege drives to the cemetery. Only four people stand at the grave: Nick Carraway, Henry Gatz, the local Lutheran minister, and Owl Eyes, who arrives splashing through the mud in a rain-soaked coat. Owl Eyes takes off his glasses, wipes them, and mutters the ultimate epitaph for Gatsby’s theatrical life: 'The poor son-of-a-bitch.' Nick decides to leave the East forever, haunted by the cold, careless brutality of the city. Before departing, he meets Jordan Baker to conclude their relationship, and confronts Tom Buchanan on Fifth Avenue. Tom admits that he told George Wilson that Gatsby owned the car that killed Myrtle, defending his actions without a trace of remorse. Nick delivers his devastating verdict on the Buchanans: 'They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money or their vast carelessness, or whatever it was that kept them together, and let other people clean up the mess they had made.' On his final night in West Egg, Nick wanders down to Gatsby’s deserted beach, sprawling on the sand under the moon. He imagines how the green shores of Long Island must have looked to the Dutch sailors three centuries earlier—the last time in history that human beings stood face to face with something commensurate to their capacity for wonder. He reflects on Gatsby's tragic belief in the green light, concluding with the most celebrated lines in American literature: 'Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther... And one fine morning—So we beat on, boats against the current, borne back ceaselessly into the past.'"
    ],
    verbatim_quote: "They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money or their vast carelessness, or whatever it was that kept them together, and let other people clean up the mess they had made... So we beat on, boats against the current, borne back ceaselessly into the past.",
    operational_heuristic: "Beware the careless class who weaponize their capital to destroy lives without remorse; true nobility consists in maintaining the capacity for wonder and romantic fidelity despite an indifferent world.",
    key_motifs: ["Young James Gatz's Schedule", "The Careless Buchanans", "The Dutch Sailors' Green Shore", "Boats Against the Current"]
  }
];

function buildMasterNotesMarkdown() {
  let md = `# The Great Gatsby: The Total Replacement Master Codex\n\n`;
  md += `**Author:** F. Scott Fitzgerald (1925)  \n`;
  md += `**Historical Context:** Long Island & New York City, Summer 1922 (The Jazz Age)  \n`;
  md += `**System Standard:** BKRS v2.0 Production Master Codex (Total Forensic Depth)  \n`;
  md += `**Corpus Architecture:** 9 Invariant Scene Units | Complete Scene-by-Scene Narrative & Class Dialectic  \n\n`;
  md += `---\n\n`;
  md += `## Executive Epistemic Summary: The Anatomy of the American Dream\n\n`;
  md += `Published in 1925, F. Scott Fitzgerald's *The Great Gatsby* is the definitive literary autopsy of the American Dream during the Roaring Twenties. Narrated by Nick Carraway, the novel deconstructs the violent collision between three distinct social stratifications:\n`;
  md += `1. **Old Money (East Egg)**: Tom and Daisy Buchanan, insulated by multi-generational wealth, characterized by callous emotional brutality, racism, and total carelessness.\n`;
  md += `2. **New Money (West Egg)**: Jay Gatsby, born James Gatz of North Dakota, who amasses an underworld fortune through bootlegging and bond fraud to erect an elaborate theatrical illusion to recapture his lost 1917 love.\n`;
  md += `3. **The Discarded Working Class (The Valley of Ashes)**: George and Myrtle Wilson, ground down by the industrial waste of capitalism, presided over by the blind, unblinking billboard eyes of Doctor T. J. Eckleburg.\n\n`;
  md += `The novel proves that while capital can be accumulated overnight, social caste and emotional corruption remain insurmountable barriers. Gatsby's tragedy is that he brought a pure, incorruptible romantic devotion to a rotten, careless world that destroyed him without a second thought.\n\n`;
  md += `---\n\n`;

  gatsbyUnits.forEach(u => {
    md += `## Unit ${u.chapter_number}: ${u.title}\n`;
    md += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_status}\`\n\n`;
    md += `### Core Literary & Social Invariant\n`;
    md += `${u.core_theme}\n\n`;
    md += `### Forensic Narrative Reconstruction & Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `> *“${u.verbatim_quote}”* — F. Scott Fitzgerald\n\n`;
    md += `**Operational Heuristic:** *${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs:** ${u.key_motifs.map(m => `\`${m}\``).join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  return md;
}

function buildHtmlReader(units) {
  const sidebarLinks = units.map(u => `
    <div class="nav-ch-item">
      <a href="#unit-${u.chapter_number}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
        <span class="nav-ch-num">${u.chapter_number}</span>
        <span class="nav-ch-title">${u.title}</span>
      </a>
    </div>
  `).join('\n');

  const unitCards = units.map(u => {
    const prose = u.textual_analysis.map(p => `<p class="narrative-p">${p}</p>`).join('\n');
    const motifs = u.key_motifs.map(m => `<span class="unit-badge" style="font-size:0.7rem; margin-right:4px;">${m}</span>`).join('');

    return `
      <div class="unit-card-deep" id="unit-${u.chapter_number}">
        <div class="unit-meta-line">
          <div>
            <span class="unit-badge">Chapter ${u.chapter_number}</span>
            <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
              ${u.scope}
            </span>
          </div>
          <span class="unit-epistemic">${u.epistemic_status}</span>
        </div>

        <h3 class="unit-heading-deep">${u.title}</h3>

        <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
          ${u.core_theme}
        </div>

        <div class="narrative-prose">
          ${prose}
        </div>

        <div class="quote-box">
          “${u.verbatim_quote}” — F. Scott Fitzgerald
        </div>

        <div class="heuristic-box">
          <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
            Operational Heuristic:
          </strong>
          ${u.operational_heuristic}
        </div>

        <div style="margin-top: 18px;">
          ${motifs}
        </div>
      </div>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Great Gatsby — F. Scott Fitzgerald | BKRS Master Reader</title>
  
  <link rel="stylesheet" href="../../css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet">
  
  <style>
    .unit-card-deep {
      margin-bottom: 48px;
      padding: 36px 38px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      box-shadow: 0 4px 20px var(--shadow-subtle);
      transition: all 0.2s ease;
    }
    
    .unit-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border-subtle);
      flex-wrap: wrap;
      gap: 8px;
    }

    .unit-badge {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-gold);
      background: var(--bg-tag);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-epistemic {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      background: var(--bg-card-subtle);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-heading-deep {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 8px;
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
    }

    .quote-box {
      margin: 24px 0;
      padding: 18px 24px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.12rem;
    }

    .heuristic-box {
      margin-top: 24px;
      padding: 16px 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
    }
  </style>
</head>
<body>

  <!-- TOP APP BAR -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div style="display: flex; align-items: center; gap: 16px;">
        <button class="icon-btn toggle-sidebar-btn" id="toggle-sidebar-btn" title="Toggle Table of Contents" aria-label="Toggle Sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <span class="brand-title">THE GREAT GATSBY</span>
      </div>
      
      <div class="top-bar-controls">
        <a href="../../index.html" class="icon-btn" title="Return to Library" aria-label="Library">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <div class="app-layout">
    
    <!-- SIDEBAR NAVIGATION -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-book-title">The Great Gatsby</div>
        <div class="sidebar-book-meta">F. Scott Fitzgerald · 9 Chapters</div>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section-title">Table of Contents</div>
        <div class="nav-ch-list">
${sidebarLinks}
        </div>
      </nav>
    </aside>

    <!-- MAIN READING CONTAINER -->
    <main class="reader-container" id="reader-container">
      <div class="reader-content-wrap">
        
        <!-- BOOK COVER & INTRO CARD -->
        <article class="hero-card">
          <div class="hero-badge">American Literature · The Jazz Age</div>
          <h1 class="hero-title">The Great Gatsby</h1>
          <div class="hero-subtitle">F. Scott Fitzgerald (1925) · The Anatomy of Carelessness and Longing</div>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Publication</span>
              <span class="meta-value">April 10, 1925</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Total Units</span>
              <span class="meta-value">9 Narrative Units</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Standard</span>
              <span class="meta-value">BKRS v2.0 Production Master</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Fidelity</span>
              <span class="meta-value">100% Replacement Grade</span>
            </div>
          </div>

          <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); margin-top: 24px; text-align: justify;">
            <p><strong>The Great American Tragedy:</strong> Fitzgerald's definitive novel chronicling the self-invention of James Gatz, the cruel carelessness of Tom and Daisy Buchanan, the spectral eyes of Doctor T.J. Eckleburg, and the green light across the dark water—proving that while capital can be accumulated, the past cannot be repeated.</p>
          </div>
        </article>

        <!-- UNITS CONTENT -->
        <section class="units-container">
${unitCards}
        </section>

      </div>
    </main>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;
}

// Execution
const destDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-great-gatsby');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

console.log('Writing The Great Gatsby master-notes.md...');
const masterNotesMd = buildMasterNotesMarkdown();
fs.writeFileSync(path.join(destDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

console.log('Writing knowledge-units.json...');
fs.writeFileSync(path.join(destDir, 'knowledge-units.json'), JSON.stringify(gatsbyUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${gatsbyUnits.length} units)`);

console.log('Writing index.html...');
const html = buildHtmlReader(gatsbyUnits);
fs.writeFileSync(path.join(destDir, 'index.html'), html, 'utf8');
console.log(`Saved index.html (${html.length} characters)`);

console.log('The Great Gatsby complete!');
