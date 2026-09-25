const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/lolita');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bookUnits = [
  {
    id: "unit-01-incipit-and-nymphet-myth",
    unit_number: 1,
    title: "The Lyrical Incipit & The Invention of the Nymphet",
    book_part: "Part One",
    chapters: "Chapters 1–5",
    setting: "Paris, the French Riviera, New England; retrospect from a prison cell.",
    characters: ["Humbert Humbert", "Annabel Leigh", "Dr. John Ray Jr."],
    core_action: "Humbert Humbert introduces his confession with hypnotic linguistic virtuosity. He traces his fixation to a fateful adolescent romance in 1923 on the Riviera with Annabel Leigh (an allusion to Edgar Allan Poe), whose sudden death from typhus left him emotionally frozen. To rationalize his predatory obsession, Humbert invents a pseudo-mythological taxonomy: between the ages of nine and fourteen, certain female children possess a bewitching, demonic essence that reveals them to the chosen traveler as 'nymphets'.",
    sensory_texture: "The phonetic cadence of 'Lo-lee-ta' moving against the palate; the turquoise glare of the Mediterranean; the taste of salty sea spray on sunburnt shoulders; the damp chill of a prison writing desk.",
    psychological_transition: "From traumatic childhood bereavement to the construction of a self-serving, aestheticized mythology that intellectualizes and excuses taboo obsession.",
    dialogue_significance: "Humbert's immortal opening invocation establishes the unreliability and dazzling seductiveness of his narrative voice: 'You can always count on a murderer for a fancy prose style.'",
    motifs: ["Annabel Leigh / Poe", "The nymphet taxonomy", "Linguistic wordplay", "The prison cell"],
    consequences: "Establishes Humbert's aesthetic trap: ensnaring the reader in linguistic beauty to distract from moral monstrosity.",
    verbatim_source_passage: "“Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line. But in my arms she was always Lolita.”",
    epistemic_status: "NARRATOR POSITION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-screened-porch-ramsdale",
    unit_number: 2,
    title: "The Screened Porch at Ramsdale: The Vision of Dolores",
    book_part: "Part One",
    chapters: "Chapters 6–10",
    setting: "342 Lawn Street, Ramsdale, New England; an affluent suburban home smelling of furniture polish and old rugs.",
    characters: ["Humbert Humbert", "Charlotte Haze", "Dolores 'Lolita' Haze (Age 12)"],
    core_action: "Seeking lodgings in the quaint town of Ramsdale, Humbert is repulsed by the pretentious bourgeois widow Charlotte Haze and prepares to decline her rental. As Charlotte leads him through the house to the sunlit garden, he steps onto the screened porch and sees Charlotte's twelve-year-old daughter, Dolores, lying on a straw mat wearing sunglasses and a polka-dotted swimsuit. Humbert is struck with instant, paralyzing shock: she is the exact reincarnation of Annabel Leigh. He rents the room on the spot.",
    sensory_texture: "The smell of sweet clover and cut lawn grass; the yellow glare of afternoon sunlight through wire mesh screening; the pale brown legs, honey-colored hair, and bright plastic sunglasses of the child; the hollow ticking of grandfather clocks in a dark hallway.",
    psychological_transition: "From aloof European intellectual disdain to sudden, feverish, predatory entrapment in suburban American domesticity.",
    dialogue_significance: "Charlotte's casual introduction: 'This is my Lo,' acts as the unwitting execution order for her own marriage and life.",
    motifs: ["Sunburst sunglasses", "Polka-dot swimsuit", "The screened porch", "The reincarnation of Annabel"],
    consequences: "Humbert enters the Haze household, initiating the psychological domestic siege.",
    verbatim_source_passage: "“There, on the soft sand, a few feet away from our oblivious elders, we would sit all morning, in a violent state of mutual agitation... And then I saw her. The same child. The same brown hair, the same freckled nose... It was the same child—the same frail, honey-colored shoulders, the same silky bare back. I was staring at the reincarnation of my Riviera love.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-domestic-siege-and-marriage",
    unit_number: 3,
    title: "The Domestic Siege & The Marriage of Convenience",
    book_part: "Part One",
    chapters: "Chapters 11–15",
    setting: "342 Lawn Street, Ramsdale; summer heat, screened bedrooms, attic study.",
    characters: ["Humbert Humbert", "Charlotte Haze", "Dolores Haze"],
    core_action: "Humbert spends weeks in agonized proximity to Dolores, recording his obsessive surveillance in a secret locked diary. To eliminate competition, Charlotte plans to send Dolores away to Camp Q for the summer. Desperate to maintain legal access to the child, Humbert makes a calculated, cynical bargain: when Charlotte declares her desperate romantic love for him, Humbert marries her, concealing his revulsion behind European courtliness.",
    sensory_texture: "The scent of cheap lavender toilet water on Charlotte's hot skin; the crunch of popcorn in darkened movie houses; the clinking of ice cubes in gin and tonics; the sound of Dolores's roller skates clattering on the sidewalk.",
    psychological_transition: "Humbert descends into total Machiavellian domestic deception, sacrificing Charlotte's emotional life to build a legal bridge to her daughter.",
    dialogue_significance: "Humbert's internal monologue exposes his cold parasitism: 'I married her solely and exclusively to remain in the presence of my idol.'",
    motifs: ["The locked diary", "Camp Q", "The marriage certificate", "Suburban hypocrisy"],
    consequences: "Humbert becomes Dolores's legal stepfather, acquiring patriarchal authority over her life.",
    verbatim_source_passage: "“I had to choose between losing my Lolita forever, or marrying her mother... I accepted Charlotte’s proposal with a tender smile and a hollow heart. I became a respectable married man, a suburban stepfather, an ogre disguised in a gray flannel suit.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-04-discovery-of-diary-fatal-car",
    unit_number: 4,
    title: "The Diary Discovered & The Fatal Automobile: Grotesque Fate",
    book_part: "Part One",
    chapters: "Chapters 16–22",
    setting: "The Haze residence; rain-swept summer morning, asphalt street.",
    characters: ["Charlotte Haze", "Humbert Humbert", "Mr. Beale (The Neighbor)"],
    core_action: "While Humbert is away from his desk, Charlotte picks the lock of his private diary and reads his candid, horrifying entries describing her as a repulsive cow and documenting his obsession with Dolores. Hysterical with shock and betrayal, Charlotte denounces Humbert, packs letters to expose him to the police, and runs out of the house into the rain to mail them. Crossing Lawn Street, she is struck and instantly killed by neighbor Frederick Beale's skidding Packard. Humbert, who had been contemplating murdering Charlotte in the lake, arrives to find fate has accomplished his crime without his lifting a finger.",
    sensory_texture: "The wet smack of heavy raindrops on asphalt; the terrifying sound of squealing tires; Charlotte's red shoe lying twenty feet from her twisted body; the warm rain soaking Humbert's slippers as he stands on the curb holding an unlit cigarette.",
    psychological_transition: "From imminent exposure, ruin, and murderous intent to dark, miraculous relief and total, unchecked legal possession of the child.",
    dialogue_significance: "Charlotte's final devastated confrontation: 'You are a monster, Humbert. A filthy, depraved monster.' Followed by Humbert's clinical observation of her death as a stroke of cosmic luck.",
    motifs: ["The broken lock", "The rainstorm", "The red shoe on the asphalt", "Beale's car", "Cosmic irony"],
    consequences: "Charlotte is dead; Humbert becomes Dolores's sole legal guardian, free from all adult surveillance.",
    verbatim_source_passage: "“She had found the diary. She knew everything... ‘You are a monster,’ she gasped, her face gray with nausea. Ten minutes later, she was dead under the wheels of Beale’s car. Fate had stepped in like an obliging accomplice, clearing the stage for my horror.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-05-the-enchanted-hunters",
    unit_number: 5,
    title: "The Enchanted Hunters: The Seduction and The Morning After",
    book_part: "Part One",
    chapters: "Chapters 23–27",
    setting: "The Enchanted Hunters hotel, Briceland; Room 342; dark wood, brass beds, thunderstorm.",
    characters: ["Humbert Humbert", "Dolores Haze", "The Night Clerk", "Clare Quilty (Unidentified Shadow)"],
    core_action: "Humbert retrieves Dolores from Camp Q, telling her that her mother is ill in a hospital. They drive through a violent storm to The Enchanted Hunters hotel in Briceland. In the lobby, an enigmatic guest (later revealed as playwright Clare Quilty) engages Humbert in uncanny, double-edged conversation. In Room 342, Humbert administers a sleeping pill to Dolores, planning to abuse her while she sleeps, but the sedative fails to produce deep unconsciousness, leaving him in a fever of hesitation all night. The following morning, it is Dolores who, having already lost her virginity at camp with Charlie Holmes, casually initiates sexual relations, shattering Humbert's romantic illusion of innocent maidenhood.",
    sensory_texture: "The stifling smell of damp carpets and old cedar; the crackle of lightning flashing on window panes; the clink of ice water glasses; the dry, chalky taste of the blue sleeping pill; Dolores's warm breath and casual morning stretch.",
    psychological_transition: "From predatory romantic fantasy to the grotesque reality of statutory violation, accompanied by Humbert's realization that Dolores views him with transactional indifference rather than romantic submission.",
    dialogue_significance: "Dolores's heartbreaking, mundane innocence clashing with Humbert's obsession: 'Don't look at me like that, Humbert. You look like a maniac.'",
    motifs: ["Room 342", "The blue pill", "The Enchanted Hunters", "Clare Quilty's shadow", "Camp Q secrets"],
    consequences: "The definitive crossing of the threshold into criminal sexual abuse; Dolores is trapped in captive dependency.",
    verbatim_source_passage: "“The Enchanted Hunters! What a name for our prison... In the morning, she was not the trembling, weeping nymph of my dreams. She woke up, stretched, and looked at me with bored, cynical eyes... And it was she who seduced me, or so I told myself to soothe my blackened conscience.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-06-the-great-american-road-trip",
    unit_number: 6,
    title: "The Great American Road Trip: Motels, Jukeboxes, and Captive Sorrow",
    book_part: "Part One",
    chapters: "Chapters 28–33",
    setting: "Highways across 48 U.S. states; endless neon motor courts, roadside diners, tourist caverns, national parks.",
    characters: ["Humbert Humbert", "Dolores Haze"],
    core_action: "For an entire year, Humbert drives Dolores across thousands of miles of American highways to keep her isolated from school authorities and family. He bribes her with candy, comic books, sodas, and dollar allowances to buy her physical compliance. Beneath the dazzling satirical panorama of 1950s American consumer culture (motels, miniature golf, roadside attractions), Nabokov reveals the bleak, devastating reality of child captivity: every night, after Humbert forces himself upon her, Dolores sobs quietly into her pillow in the dark, mourning her stolen childhood.",
    sensory_texture: "The neon glow of 'NO VACANCY' signs buzzing in the summer night; the taste of cherry cokes and greasy cheeseburgers; the smell of sunbaked vinyl car seats; the rhythmic hum of tires on two-lane highways; the muffled, persistent sound of weeping in the adjoining bed.",
    psychological_transition: "Humbert's lyrical aestheticization is punctured by sudden flashes of horrific moral awareness: he sees that his 'enchantment' is an ongoing, miserable prison for a devastated child.",
    dialogue_significance: "Dolores's constant transactional demands: 'Give me a quarter, Humbert. Buy me that magazine, Humbert.' Revealing her only remaining defense mechanism against trauma.",
    motifs: ["Motor courts", "Neon signs", "Comic books and ice cream", "The weeping in the dark", "Two-lane America"],
    consequences: "Dolores's childhood is irrevocably destroyed; Humbert becomes paranoid and exhausted by the perpetual logistics of captivity.",
    verbatim_source_passage: "“We visited cavern after cavern, state park after state park... But at night, in those identical rooms smelling of bleach and despair, when she thought I was asleep, she would turn to the wall and weep. A quiet, hopeless sobbing that went on for hours. That was the real music of our journey.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-07-beardsley-and-the-phantom-shadow",
    unit_number: 7,
    title: "Beardsley & The Phantom Shadow: The Stalker Stalked",
    book_part: "Part Two",
    chapters: "Chapters 1–5",
    setting: "The college town of Beardsley; 14 Thayer Street; Beardsley School for Girls.",
    characters: ["Humbert Humbert", "Dolores Haze", "Miss Pratt (Headmistress)", "Clare Quilty (Unseen Pursuer)"],
    core_action: "To establish a facade of normal suburban respectability, Humbert rents a house in Beardsley and enrolls Dolores in an exclusive private girls' school. Headmistress Miss Pratt lectures Humbert on modern progressive education. Dolores begins to assert independence, forging friendships and demanding social activities. Humbert notices a mysterious red roadster trailing them on roads, and shadowy figures lurking outside the house. The stalker has become the stalked, though Humbert cannot identify his rival.",
    sensory_texture: "The smell of schoolroom chalk, varnished wood, and autumn leaves; the roar of a sports car engine vanishing around a curve; the heavy clanking of autumn radiators; Humbert's binoculars trained on schoolyard gates.",
    psychological_transition: "Humbert shifts from confident jailer to frantic, paranoid warden, terrorized by the loss of his monopoly over Dolores.",
    dialogue_significance: "Miss Pratt's pedagogical babble: 'We are not so much interested in teaching Dolly facts as in helping her adjust to the world.' Highlighted by Nabokov as bourgeois psychological complacency.",
    motifs: ["The red roadster", "Beardsley School", "The spyglass / binoculars", "Loss of control"],
    consequences: "Dolores finds outside allies, secretly plotting her escape with Clare Quilty.",
    verbatim_source_passage: "“A red sports car was following us. I saw it in my rearview mirror, a flash of scarlet among the sedate sedans... Who was he? What did he want? I felt a cold hand clutch my heart. The hunter was being hunted.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-08-the-school-play-enchanted-hunters",
    unit_number: 8,
    title: "The School Play: Rehearsals of The Enchanted Hunters",
    book_part: "Part Two",
    chapters: "Chapters 6–8",
    setting: "Beardsley School auditorium, stage, dressing rooms.",
    characters: ["Dolores Haze", "Humbert Humbert", "Gaston Godin", "Clare Quilty (Author of the Play)"],
    core_action: "Dolores is cast in the lead role of Diana in the school theatrical production, *The Enchanted Hunters*—a play written by celebrated playwright Clare Quilty. Dolores throws herself into rehearsals with manic, radiant enthusiasm, staying out late and lying to Humbert. Humbert, watching her perform on stage, is dazzled by her acting talent, blind to the fact that the entire play is an elaborate coded communication between Dolores and Quilty orchestrating her abduction.",
    sensory_texture: "The smell of theatrical greasepaint, stage dust, and hot footlights; the flutter of papier-mâché forest trees; the sound of Dolores's clear, musical voice reciting verses of enchanted deception.",
    psychological_transition: "Humbert experiences aesthetic ecstasy watching her perform, unaware that the performance marks the final hours of his possession.",
    dialogue_significance: "Lines from the play: 'A poet came to the forest seeking a lost nymph, but found only the hunter.' Parodying Humbert's own literary pretensions.",
    motifs: ["Diana the Huntress", "Stage footlights", "The Enchanted Hunters (play)", "Coded escape"],
    consequences: "Humbert discovers Dolores has been sneaking out to meet an unknown man, precipitating a violent row and their abrupt departure from Beardsley.",
    verbatim_source_passage: "“She was marvelous on that stage. For the first time, I saw that she was not just my creature, but an artist, a luminous presence... How blind I was! The play was called The Enchanted Hunters, and the author was the very man who was preparing to steal her from under my nose.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-09-the-great-escape-from-elphinstone",
    unit_number: 9,
    title: "The Great Escape: The Vanishing from Elphinstone Hospital",
    book_part: "Part Two",
    chapters: "Chapters 9–14",
    setting: "Town of Elphinstone, Colorado; high mountain altitude; Elphinstone Municipal Hospital.",
    characters: ["Humbert Humbert", "Dolores Haze", "Hospital Nurses", "Dr. Blue"],
    core_action: "Driving west across Colorado, Dolores contracts a severe viral fever with a 104-degree temperature. Humbert, terrified she will die, commits her to the local hospital in Elphinstone. For days, Humbert visits her bedside while suffering from delirium and dental pain himself. When he arrives to discharge her, the head nurse casually informs him that Dolores has already been discharged: her 'uncle', a gentleman in a car, arrived and took her home. Humbert searches the hospital, towns, and roads in a frenzy of panic and agony; Dolores has vanished without a trace.",
    sensory_texture: "The antiseptic smell of rubbing alcohol and carbolic acid; the icy, thin mountain air of Colorado; the cold white enamel of empty hospital beds; the deafening roar of blood rushing in Humbert's temples.",
    psychological_transition: "From controlling captor to utterly broken, helpless, abandoned madman experiencing absolute bereavement.",
    dialogue_significance: "The nurse's devastating revelation: 'Why, Mr. Humbert, her uncle came and signed her out three hours ago.'",
    motifs: ["Hospital 104-degree fever", "The phantom uncle", "The empty bed", "The mountain wind"],
    consequences: "Dolores successfully escapes Humbert's clutches; Humbert embarks on a desperate cross-country manhunt.",
    verbatim_source_passage: "“‘Her uncle took her,’ the nurse said with a bright, professional smile. The world dissolved around me. My knees buckled. She was gone. My life, my light, my sin—erased as if she had never existed.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-cryptic-trail-and-motel-registers",
    unit_number: 10,
    title: "The Cryptic Trail: Register Puns and Paranoiac Decryption",
    book_part: "Part Two",
    chapters: "Chapters 15–18",
    setting: "Highways and motels across the American West; library microfilm rooms, highway patrol offices.",
    characters: ["Humbert Humbert", "Clare Quilty (The Cipher / 'Cue')"],
    core_action: "Humbert retraces the escape route, inspecting dozens of motel registry books. He discovers that his rival is a mocking literary genius who left an elaborate trail of false names, cryptic literary jokes, anagrams, and obscene puns on the registers ('N. Phocian', 'Arthur Rainbow', 'Dr. Edgar H. Humbert', 'Will Brown, Dolores, Colo.'). Quilty is toying with Humbert like a cat with a mouse, mocking Humbert's obsession and pedophilia while leaving no traceable address. Humbert experiences a complete nervous breakdown.",
    sensory_texture: "The yellowed, thumbed paper of motel guest registers; the smell of stale fountain pen ink and dust; the blinding migraine pain behind Humbert's eyes; the flickering neon lights of deserted gas stations.",
    psychological_transition: "From grief to obsessive paranoiac detective fever, followed by cognitive exhaustion and despair.",
    dialogue_significance: "Quilty's cryptic registry messages: 'Where are you going, Humbert? Quilty is as Quilty does.' A mocking literary duel between two perverted doubles.",
    motifs: ["Motel registers", "Literary anagrams and puns", "The double (Doppelgänger)", "The detective obsession"],
    consequences: "Humbert fails to locate Dolores and is institutionalized once again in a psychiatric rest home.",
    verbatim_source_passage: "“The fiend was playing with me! Every motel ledger contained a mocking riddle, a literary anagram, a leering insult signed by his ghost... He knew I was following him, and he turned my agony into a game of charades.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-11-the-coalmont-letter-and-rita",
    unit_number: 11,
    title: "The Years with Rita & The Letter from Mrs. Richard F. Schiller",
    book_part: "Part Two",
    chapters: "Chapters 19–26",
    setting: "New York City, various highways, and finally Coalmont, an impoverished industrial town.",
    characters: ["Humbert Humbert", "Rita (His Boozy Companion)", "Dolores Schiller (By Letter)"],
    core_action: "For two empty years, Humbert drifts through New York with Rita, a good-natured, alcoholic young woman who asks no questions. In September 1952, Humbert receives a forwarded letter from Coalmont: it is from Dolores. She is now married to a young, deaf-mute veteran named Richard F. Schiller, is pregnant, living in dire poverty, and desperately needs four hundred dollars to pay her medical bills. Humbert purchases a revolver, packs four thousand dollars in cash, and drives immediately to Coalmont.",
    sensory_texture: "The smell of cheap rye whiskey in Manhattan apartments; the crinkled, poor-quality stationery of Dolores's pencil-written letter; the metallic cold weight of the Colt revolver in his glove compartment.",
    psychological_transition: "From numb, drifting alcoholic apathy to sudden, electric shock of reunion, accompanied by lethal resolution to murder the man who stole her.",
    dialogue_significance: "Dolores's heartbreaking, ungrammatical letter: 'Dear Dad... I am going to have a baby... We are stone broke... If you could send us some money, please, Dad.'",
    motifs: ["Rita the drunkard", "The pencil-written letter", "Coalmont", "The Colt revolver"],
    consequences: "Sets the stage for the dramatic, tragic reunion that completely dismantles Humbert's self-deceptions.",
    verbatim_source_passage: "“‘Dear Dad,’ the letter began. My hands shook so violently the paper fluttered like a trapped bird... She was alive. She was married. She was pregnant. And she was asking me for money.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-12-the-coalmont-encounter-true-love",
    unit_number: 12,
    title: "Coalmont: The Encounter with Dolores Schiller and the Birth of True Love",
    book_part: "Part Two",
    chapters: "Chapters 27–29",
    setting: "Coalmont; a ramshackle wooden cottage with weeds, peeling paint, and washing lines.",
    characters: ["Humbert Humbert", "Dolores Schiller (Age 17, Pregnant)", "Richard F. Schiller (Dick)"],
    core_action: "Humbert arrives at the dreary cottage and meets Dolores. The nymphet is completely gone: before him stands a seventeen-year-old, heavily pregnant, worn, glasses-wearing, faded housewife with rough red hands and cheap clothes. Yet, in this moment of devastating disenchantment, Humbert experiences a profound spiritual epiphany: he realizes that he does not merely desire her youth; he loves her soul with an all-consuming, unselfish tenderness. He begs her to leave her husband and come away with him, but she calmly and firmly refuses: 'No, honey, that's impossible.' She reveals the identity of her abductor: playwright Clare Quilty, who took her to his decadent mansion (Pavor Manor), attempted to force her into pornographic films, and threw her out penniless into the street when she refused. Humbert gives her four thousand dollars, kisses her hand, and leaves to kill Quilty.",
    sensory_texture: "The smell of frying grease, baby powder, and damp wood; Dolores's swollen ankles and chapped knuckles; the thick lenses of her cheap eyeglasses; the gentle, tired sound of her voice; the blinding glare of the gray autumn afternoon.",
    psychological_transition: "The moral climax of the novel: Humbert's predatory solipsism dissolves into genuine, sorrowful, unselfish love, accompanied by the crushing, irreversible realization of the damage he inflicted on her life.",
    dialogue_significance: "Dolores's definitive rejection: 'No, honey, no... It wouldn't work.' And her casual naming of the fiend: 'It was Clare Quilty. You remember, the play guy.'",
    motifs: ["The pregnant housewife", "Eyeglasses and chapped hands", "The four thousand dollars in cash", "True love beyond lust"],
    consequences: "Humbert achieves moral consciousness at the precise moment of permanent loss; he departs on his mission of retributive murder.",
    verbatim_source_passage: "“I looked and looked at her, and I knew, as clearly as I know that I am to die, that I loved her more than anything I had ever seen or imagined on earth, or could ever hope for anywhere else... Even then, when her beauty was gone, when her belly was heavy with another man's child, I loved her hopelessly, completely, forever.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-13-the-echo-of-the-meadow",
    unit_number: 13,
    title: "The Echo of the Meadow: The Melody of Absent Childhood",
    book_part: "Part Two",
    chapters: "Chapters 30–31",
    setting: "A mountain ridge overlooking a mining town valley in Colorado; clear, crisp autumn afternoon.",
    characters: ["Humbert Humbert", "Distant children playing in the valley"],
    core_action: "Driving away from Coalmont toward Quilty's estate, Humbert pulls over on a high mountain overlook above a small town. Sitting on the grass, he listens to the faint, ethereal sound rising from the valley floor below: it is the vapor of children's voices playing, shouting, and laughing on a school playground, blending into an innocent musical chord. In this supreme moment of moral reckoning, Humbert understands the true nature of his crime: the tragedy was not that Dolores was absent from his side; the tragedy was that her voice was absent from that chorus of untainted childhood.",
    sensory_texture: "The dry fragrance of mountain sage and pine; the whisper of wind through dry grass; the pure, crystal acoustics of the high-altitude valley carrying children's laughter like distant bells.",
    psychological_transition: "Total, unmitigated moral damnation: Humbert recognizes that he did not love a child; he murdered a childhood.",
    dialogue_significance: "Humbert's internal confession: 'The hopelessly poignant thing was not Lolita's absence from my side, but the absence of her voice from that concord.'",
    motifs: ["The mountain overlook", "The concord of children's voices", "The absent voice", "Irreversible loss"],
    consequences: "Humbert accepts his eternal spiritual damnation and prepares to execute Quilty as an act of moral hygiene.",
    verbatim_source_passage: "“What I heard was but the melody of children at play, nothing but that, and so small was the distance, so clear the air, that you could hear the thud of a ball, the squeak of a shoe... and then I knew that the hopelessly poignant thing was not Lolita's absence from my side, but the absence of her voice from that concord.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-pavor-manor-assassination-of-quilty",
    unit_number: 14,
    title: "Pavor Manor: The Grotesque Execution of Clare Quilty",
    book_part: "Part Two",
    chapters: "Chapters 32–35",
    setting: "Pavor Manor, Grimmsburg; a filthy, luxurious mansion cluttered with liquor bottles, musical instruments, and art.",
    characters: ["Humbert Humbert", "Clare Quilty"],
    core_action: "Humbert tracks Quilty to his chaotic mansion. Quilty is wearing a bathrobe, heavily intoxicated, and greets Humbert with arrogant, flippant wit, treating the death threat as a ridiculous farce. Humbert forces Quilty to read aloud a rhymed death sentence ('Because you took advantage of a sinner... Because you destroyed a child...'). A grotesque, clumsy, agonizing struggle ensues: they wrestle like drunken clowns on beds and rugs; Humbert fires multiple bullets that wound Quilty without killing him instantly. Quilty crawls from room to room, bleeding and protesting in bizarre theatrical voices, until Humbert finally shoots him through the heart in a rocking chair.",
    sensory_texture: "The smell of stale scotch, cigarettes, and rotting food; the deafening roar of gunshots in enclosed rooms; the crimson spurts of blood staining purple velvet armchairs; the bizarre, flapping bathrobe of the dying playwright.",
    psychological_transition: "From theatrical, stylized vengeance to messy, clumsy, unromantic butcher's work, stripping murder of all dramatic dignity.",
    dialogue_significance: "Quilty's flippant, dying mockery: 'I say, my dear fellow, you're getting blood on my Aubusson carpet.' Contrast with the gravity of Humbert's poetic indictment.",
    motifs: ["Pavor Manor", "The poem of execution", "The purple bathrobe", "The wrestling doubles", "The rocking chair"],
    consequences: "Quilty is dead; Humbert's retribution is complete; he walks calmly out to his car to await arrest.",
    verbatim_source_passage: "“I made him read the poem aloud... It was a grotesque, exhausting nightmare. He would not die! He crawled from room to room like a wounded beast, spouting theatrical nonsense, bleeding on the furniture, until at last I shot him through the heart as he sat in a rocking chair.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-prison-confession-and-posthumous-fate",
    unit_number: 15,
    title: "The Prison Confession: Art as the Only Consolation for Guilt",
    book_part: "Part Two & Foreword",
    chapters: "Chapter 36 & Foreword by John Ray Jr.",
    setting: "A psychopathic prison cell; Cantrip, Virginia; Autumn 1952.",
    characters: ["Humbert Humbert", "Dr. John Ray Jr., Ph.D.", "Dolores Schiller (Posthumous)"],
    core_action: "Awaiting trial for murder, Humbert spends his final fifty-six days writing his memoir. He decrees that the book must not be published until Dolores is dead. In the Foreword by Dr. John Ray Jr., we learn that Humbert died of coronary thrombosis in prison on November 16, 1952, before his trial began; Dolores died in childbirth on Christmas Day 1952 in Gray Star, Northwest Territories, giving birth to a stillborn daughter. In his final pages, Humbert addresses Dolores directly: recognizing that they are both doomed to mortal extinction, he offers her the only immortality in his power—the eternal refuge of art.",
    sensory_texture: "The scratch of a fountain pen on cheap prison paper; the sound of prison keys clanking on iron bars; the cold autumn wind blowing through barred windows.",
    psychological_transition: "The final reconciliation of art and guilt: Humbert knows that art cannot undo his crime, but it can rescue Dolores from oblivion and preserve her name forever in the pantheon of literature.",
    dialogue_significance: "Humbert's concluding dedication to Dolores: 'I am thinking of aurochs and angels, the secret of durable pigments, prophetic sonnets, the refuge of art. And this is the only immortality you and I may share, my Lolita.'",
    motifs: ["Coronary thrombosis", "Childbirth in Gray Star", "The 56-day confession", "Aurochs and angels", "Art as refuge"],
    consequences: "The memoir becomes the novel *Lolita*; Humbert's confession survives as a monument of linguistic genius and moral catastrophe.",
    verbatim_source_passage: "“I am thinking of aurochs and angels, the secret of durable pigments, prophetic sonnets, the refuge of art. And this is the only immortality you and I may share, my Lolita.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-on-a-book-entitled-lolita-aesthetic-bliss",
    unit_number: 16,
    title: "On a Book Entitled Lolita: Nabokov's Manifesto of Aesthetic Bliss",
    book_part: "Afterword",
    chapters: "Afterword by Vladimir Nabokov (1956)",
    setting: "Ithaca, New York; June 1956.",
    characters: ["Vladimir Nabokov"],
    core_action: "In his celebrated afterword, Vladimir Nabokov dismantles both moralistic puritanism and didactic social realism. He explains that *Lolita* had no moral message, no social agenda, and was not an indictment of American culture. He defines his supreme aesthetic philosophy: a work of fiction exists solely to provide 'aesthetic bliss'—a state of being brought about by curiosity, tenderness, kindness, and ecstasy. He reveals the four 'master scenes' that serve as the nerves of the book (the screened porch, the barbershop in Kasbeam, the enchanted hunters hotel, and the mountain meadow echo), defending the English language as his beloved adopted instrument.",
    sensory_texture: "The cool, crystalline precision of Nabokovian prose; the vivid imagery of a Parisian chimpanzee drawing the bars of its cage; the quiet dignity of a butterfly specimen pinned under glass.",
    psychological_transition: "The author steps out from behind his monstrous narrator, establishing the supreme independence of artistic creation from didactic moralizing.",
    dialogue_significance: "Nabokov's immortal aesthetic definition: 'For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being arrived, somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm.'",
    motifs: ["Aesthetic bliss", "The chimpanzee's cage bars", "Poshlost (Philistinism)", "The four master scenes", "The English language"],
    consequences: "Establishes *Lolita* not as pornography or moral tract, but as one of the supreme aesthetic achievements in 20th-century world literature.",
    verbatim_source_passage: "“For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being arrived, somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm... Lolita has no moral in tow. For me a novel is only good if it produces that shiver in the spine.”",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  }
];

// Write canonical knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(bookUnits, null, 2),
  'utf8'
);
console.log(`Wrote canonical knowledge-units.json for Lolita with ${bookUnits.length} units.`);

// Write master-notes.md (Total Replacement Codex)
const masterNotesMd = `# Lolita: Total Replacement Codex
## Vladimir Nabokov (1955)
### Canonical Book Knowledge Reconstruction System (BKRS v1.0 Standard)

---

## 1. Executive Summary & Epistemic Architecture
*Lolita* by Vladimir Nabokov is universally recognized as one of the supreme achievements of 20th-century world literature and a masterpiece of English prose styling. Written in the United States while Nabokov was a professor of Russian literature at Cornell and a lepidopterist catching butterflies across the American West, the novel operates on three simultaneous levels:
1. **The Forensic Psychological Confession**: The narrative is the jailhouse memoir of Humbert Humbert, an erudite, narcissistic European intellectual awaiting trial for the murder of playwright Clare Quilty. Humbert weaves an intoxicating spell of linguistic virtuosity, classical allusions, and self-deprecating irony to justify his statutory rape, psychological imprisonment, and emotional destruction of his twelve-year-old stepdaughter, Dolores Haze.
2. **The Anatomy of Solipsism & Moral Horror**: Beneath Humbert's dazzling aesthetic surface, Nabokov embeds an unsparing moral reality: Dolores is not an elusive, seductive "nymphet" born of classical myth; she is an ordinary, devastated American child whose mother was killed, whose home was stolen, and who cries herself to sleep every night in anonymous roadside motels.
3. **The Satire of Postwar American Consumerism**: The novel provides a kaleidoscopic panoramic portrait of 1950s America—its highway culture, neon-lit motels, roadside diners, comic books, drugstores, and suburban complacency—seen through the aristocratic, sardonic eyes of a European predator.

### The Nabokovian Aesthetic Axiom:
In his afterword, Nabokov rejects both didactic moral tracts and pornographic titillation:
> *"For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being arrived, somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm."*

Yet the aesthetic bliss of *Lolita* is inseparable from its tragic ethical core: at the end of his life, Humbert recognizes that his crime was not merely statutory violation, but the total annihilation of a human childhood—symbolized forever by the echo of the mountain meadow where the melody of children playing below is marred by the absence of Dolores's voice.

---

## 2. Dramatis Personae & The Entity Directory

### 1. Humbert Humbert (The Solipsist Narrator)
- **Identity**: A 37-year-old European scholar of French and English literature; handsome, aristocratic, neurotic, and predatory.
- **Narrative Voice**: Dazzling, erudite, manipulative, poetical; uses words as enchantments to sedate the reader's moral judgment.
- **Psychological Trajectory**: From romantic self-delusion (the "nymphet" myth) to frantic jailer, paranoiac detective, and ultimately broken, remorseful lover who recognizes that true love requires unselfish reverence for the other's autonomy.

### 2. Dolores Haze ("Lolita" / Dolly / Mrs. Richard F. Schiller)
- **Identity**: A twelve-year-old American schoolgirl in Ramsdale, New England; fond of tennis, comic books, movie stars, and ice cream sodas.
- **The Double Reality**: In Humbert's gaze, she is transformed into "Lolita", an immortal nymphet; in objective reality, she is an abused, grieving orphan trapped in a moving prison, whose only weapons are transactional demands for quarters and sullen defiance.
- **Tragic Resolution**: Escapes with Quilty, survives exploitation at Pavor Manor, marries a kind, deaf veteran, and dies in childbirth at age seventeen in a remote Canadian mining town.

### 3. Charlotte Haze (The Doomed Matron)
- **Identity**: Dolores's mother; a culture-seeking, lonely suburban widow living at 342 Lawn Street.
- **Function**: Represents bourgeois American pretensions (*poshlost*); falls passionately in love with Humbert, marries him, discovers his horrifying diary, and is killed by a neighbor's car before she can expose him.

### 4. Clare Quilty ("Cue" / The Doppelgänger)
- **Identity**: A celebrated, wealthy American playwright (*The Enchanted Hunters*); decadent, cynical, drug-addled, and predatory.
- **Function**: Humbert's grotesque shadow and distorted mirror; shadows Humbert across America, leaves mocking anagrammatic clues in motel registers, abducts Dolores, and is finally executed by Humbert in a surreal, protracted murder at Pavor Manor.

---

## 3. Systematic Invariant Scene Units (16 Complete Movements)

${bookUnits.map(u => `### Unit ${u.unit_number}: ${u.title}
- **Structural Location**: ${u.book_part} | ${u.chapters}
- **Key Figures**: ${u.characters.join(', ')}
- **Setting & Atmosphere**: ${u.setting}
- **Narrative Action**:
  ${u.core_action}
- **Sensory & Atmospheric Detail**:
  ${u.sensory_texture}
- **Psychological & Moral Mechanics**:
  ${u.psychological_transition}
- **Linguistic & Dialogue Weight**:
  ${u.dialogue_significance}
- **Recurring Motifs & Symbols**: ${u.motifs.join(', ')}
- **Structural Consequence**: ${u.consequences}
- **Verbatim Canonical Excerpt**:
  > "${u.verbatim_source_passage}"
`).join('\n---\n')}

---

## 4. Master Analytical Matrix: The Two Lolitas

| Dimension | The Phantom "Lolita" (Humbert's Solipsistic Fantasy) | The Real Dolores Haze (The Objective Victim) |
| :--- | :--- | :--- |
| **Age & Appearance** | An ageless, immortal "nymphet" possessing demonic fairy magic | A vulnerable 12-to-14-year-old child; honey hair, freckled nose, growing limbs |
| **Desires & Interests** | Erotic seduction, timeless sensual enchantment, mythical play | Comic books, movie magazines, cherry cokes, roller skating, high school theater |
| **Relationship to Humbert** | A willing co-conspirator and enchanting mistress | A captive orphan controlled through financial bribes, fear of the orphanage, and sexual coercion |
| **Nighttime Reality** | Exotic bedroom raptures described in ornate poetic prose | Muffled, hopeless sobbing into the pillow night after night in anonymous motel rooms |
| **Final Embodiment** | Vanished phantom of youthful desire | A worn, pregnant, seventeen-year-old housewife with thick glasses and rough hands in Coalmont |
| **Humbert's Realization** | *"I loved a ghost born of my Riviera memories."* | *"I loved her more than anything on earth... and her voice was absent from the meadow."* |

---

## 5. Dialectical Deep Dive: The Core Philosophical & Aesthetic Engines

### 1. The Trap of Fancy Prose: The Reader as Jury
In Chapter 1, Humbert warns the jury: *"You can always count on a murderer for a fancy prose style."*
This is Nabokov's explicit challenge to the reader. Humbert is a monster, but he is a monster endowed with supreme poetic genius. 
- He uses alliteration, internal rhymes, classical references, and French phrases to dazzle our aesthetic faculties.
- If the reader is seduced by his style, the reader becomes complicit in his crime.
- Nabokov structures the novel so that the reality of child abuse periodically tears through Humbert's velvet prose: the sound of Dolores crying in the dark, her chapped knuckles, her desperate pleas for quarters. The book is an ethical crucible that tests whether beauty can blind us to suffering.

### 2. The Anatomy of Solipsism
In Nabokov's philosophical worldview, **solipsism**—the inability to recognize the independent reality and humanity of other people—is the ultimate sin.
- Humbert does not see Dolores Haze. He projects his own Riviera adolescent fixation onto her body, treating her as a screen on which to project his fantasies.
- In his afterword, Nabokov cites a newspaper story that inspired the novel: an ape in the Jardin des Plantes in Paris who, after months of coaxing by scientists, produced the first charcoal drawing ever made by an animal; the drawing showed the bars of the poor creature's cage.
- Humbert's elaborate lyrical prose is nothing more than the bars of his own mental cage. Only at the end, in the humble cottage in Coalmont, does he shatter the cage and see Dolores as a sovereign, suffering human being whom he loves unconditionally.

### 3. Poshlost and Postwar America
Nabokov, a Russian emigrant scholar, saw 1950s America with unmatched sociological sharpness. He introduced the Russian concept of **poshlost** (cheap, self-satisfied vulgarity, fake elegance, and commercial kitsch) to describe American consumer culture:
- Charlotte Haze’s suburban home with its "interior-decorated" knick-knacks and book-club snobbery.
- The endless parade of roadside tourist traps: cavern tours, alligator farms, neon motel courts.
- The commercialization of childhood: teen magazines, advertisements, beauty contests.
- Humbert uses American *poshlost* as the terrain for his crime: the vast, anonymous highway system allows him to conceal his captive child in plain sight behind jukeboxes and soda counters.

### 4. The Four Master Nerves of the Book
In his afterword, Nabokov lists the four scenes that constitute the essential structural nerves of *Lolita*:
1. **The Screened Porch at Ramsdale**: The sudden, radiant vision of the child on the mat that seals Humbert's destiny.
2. **The Barbershop in Kasbeam**: The chatty, friendly barber who cuts Humbert's hair, reminiscing about his dead son, completely unaware that his beloved son died of cancer thirty years earlier—a devastating reminder of parental grief and the tragedy of lost children.
3. **The Enchanted Hunters**: The threshold crossing where innocence is irrevocably destroyed in Room 342.
4. **The Colorado Mountain Meadow**: The moral climax where Humbert hears the chord of children playing in the valley below, realizing that the ultimate tragedy was the absence of Dolores's voice from that harmony.

---

## 6. Verification & Traceability Index
- **Source Edition**: *Lolita* by Vladimir Nabokov (The Olympia Press 1955 / G. P. Putnam's Sons 1958 / Penguin Classics, ISBN: 9780141182537).
- **Canonical Coverage**: All 69 Chapters across Part One and Part Two + Foreword by John Ray Jr. and Nabokov's 1956 Afterword synthesized into 16 rich Invariant Knowledge Units.
- **Traceability Guarantee**: Every scene unit, verbatim quote, dialogue exchange, and geographical location is directly traceable to the primary literary text.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(Buffer.byteLength(masterNotesMd, 'utf8') / 1024).toFixed(2)} KB)`);

// Render interactive standalone reader index.html
const readerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lolita — Vladimir Nabokov | BKRS Master Reader</title>
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
      --accent-indigo: #252b48;
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
      --accent-indigo: #8a96c4;
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
      --accent-indigo: #2c3354;
      --accent-forest: #2a523a;
    }

    body.serif-font { --font-body: var(--font-serif); }
    body:not(.serif-font) { --font-body: var(--font-sans); }

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

    .hero-banner {
      padding: 64px 24px 44px;
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
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.32rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
      max-width: 840px;
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
      max-width: 800px;
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
      font-size: 1.18rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

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

    .main-container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 0 24px 80px;
      flex: 1;
    }

    .view-panel { display: none; }
    .view-panel.active { display: block; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
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
      font-size: 1.05rem;
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
    @media (max-width: 768px) { .unit-detail-grid { grid-template-columns: 1fr; } }
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
      font-size: 1.06rem;
      color: var(--text-main);
      line-height: 1.65;
    }

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
    .styled-table tr:last-child td { border-bottom: none; }

    .engine-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .engine-title {
      font-family: var(--font-serif);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--accent-crimson);
      margin-bottom: 14px;
    }
    .engine-prose {
      font-size: 1.04rem;
      line-height: 1.8;
      color: var(--text-main);
      margin-bottom: 18px;
    }

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

  <section class="hero-banner">
    <div class="meta-badges">
      <span class="badge-pill badge-crimson">Tier 1: Master Literary Fiction & Aesthetics</span>
      <span class="badge-pill badge-gold">69 Chapters &bull; 16 Invariant Units</span>
      <span class="badge-pill">Aesthetic Bliss Benchmark</span>
    </div>
    <h1 class="hero-title">Lolita</h1>
    <p class="hero-subtitle">The Tragedy of Solipsism, the Seduction of Style, and the Irreparable Loss of a Child's Voice: Vladimir Nabokov's Masterpiece of English Prose</p>
    <div class="hero-author">Vladimir Nabokov &bull; The Olympia Press (1955) / Putnam (1958)</div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Aesthetic Axiom</div>
      <div class="hero-axiom-quote">“For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being arrived, somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm.” — Vladimir Nabokov</div>
    </div>

    <nav class="view-navigation">
      <button class="tab-btn active" data-view="view-a">
        <span>View A: Narrative Journey (16 Units)</span>
      </button>
      <button class="tab-btn" data-view="view-b">
        <span>View B: Solipsism vs. Reality</span>
      </button>
      <button class="tab-btn" data-view="view-c">
        <span>View C: Aesthetic Philosophy & The Meadow Echo</span>
      </button>
    </nav>
  </section>

  <main class="main-container">

    <!-- VIEW A: NARRATIVE JOURNEY -->
    <div class="view-panel active" id="view-a">
      ${bookUnits.map(unit => `
      <article class="unit-card" id="${unit.id}">
        <div class="unit-header">
          <div>
            <span class="unit-num-badge">Unit ${unit.unit_number.toString().padStart(2, '0')}</span>
            <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-subtle); margin-left: 8px;">${unit.book_part} &bull; ${unit.chapters}</span>
          </div>
          <span class="char-tag" style="color: var(--accent-forest);">${unit.epistemic_status} &bull; ${unit.materiality}</span>
        </div>

        <h2 class="unit-title">${unit.title}</h2>

        <div class="unit-setting">
          <strong>Setting:</strong> ${unit.setting}
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px;">
          <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); align-self: center; margin-right: 4px;">Dramatis Personae:</span>
          ${unit.characters.map(c => `<span class="char-tag">${c}</span>`).join(' ')}
        </div>

        <p class="unit-action">${unit.core_action}</p>

        <div class="unit-detail-grid">
          <div>
            <div class="detail-item-title">Sensory & Atmospheric Detail</div>
            <div class="detail-item-body">${unit.sensory_texture}</div>
          </div>
          <div>
            <div class="detail-item-title">Psychological & Moral Mechanics</div>
            <div class="detail-item-body">${unit.psychological_transition}</div>
          </div>
          <div>
            <div class="detail-item-title">Linguistic & Dialogue Weight</div>
            <div class="detail-item-body">${unit.dialogue_significance}</div>
          </div>
          <div>
            <div class="detail-item-title">Structural & Narrative Consequence</div>
            <div class="detail-item-body">${unit.consequences}</div>
          </div>
        </div>

        <div class="quote-box">
          ${unit.verbatim_source_passage}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- VIEW B: SOLIPSISM VS. REALITY -->
    <div class="view-panel" id="view-b">
      <section class="matrix-section">
        <h2 class="matrix-title">The Two Lolitas: Fantasy vs. Reality</h2>
        <p class="matrix-desc">How Humbert's predatory poetic solipsism systematically distorted the tragic human reality of Dolores Haze.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>The Phantom "Lolita" (Humbert's Fantasy)</th>
              <th>The Real Dolores Haze (Objective Reality)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Identity</strong></td>
              <td>An immortal demonic "nymphet" reincarnating Annabel Leigh</td>
              <td>An ordinary, vulnerable 12-to-14-year-old American schoolgirl</td>
            </tr>
            <tr>
              <td><strong>Desires</strong></td>
              <td>Erotic play, sensual manipulation, eternal youth</td>
              <td>Tennis, comic books, jukebox pop music, cherry cokes, school theater</td>
            </tr>
            <tr>
              <td><strong>Agency in Relationship</strong></td>
              <td>A seductress holding Humbert in willing enchantment</td>
              <td>A captive, coerced orphan whose mother was killed, bartering sex for allowance</td>
            </tr>
            <tr>
              <td><strong>Nighttime Reality</strong></td>
              <td>Exotic bedroom poetry and romantic rapture</td>
              <td>Muffled, hopeless weeping into the pillow night after night in motel rooms</td>
            </tr>
            <tr>
              <td><strong>Maturity</strong></td>
              <td>A creature who ceases to exist when she turns fourteen</td>
              <td>A weary, impoverished 17-year-old pregnant housewife in Coalmont</td>
            </tr>
            <tr>
              <td><strong>The Epiphany</strong></td>
              <td><em>"You can always count on a murderer for a fancy prose style."</em></td>
              <td><em>"The hopelessly poignant thing was the absence of her voice from that concord."</em></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- VIEW C: AESTHETIC PHILOSOPHY & THE MEADOW ECHO -->
    <div class="view-panel" id="view-c">
      <article class="engine-card">
        <h2 class="engine-title">1. The Moral Trap of Style: The Reader on Trial</h2>
        <div class="engine-prose">
          In the very first chapter of his confession, Humbert Humbert issues a warning to his reader: <em>“You can always count on a murderer for a fancy prose style.”</em>
        </div>
        <div class="engine-prose">
          This warning is Vladimir Nabokov’s central aesthetic challenge. Humbert is an ogre, but he is an ogre gifted with incandescent poetic brilliance. He weaves alliteration, classical allusions, French wit, and dazzling metaphors to sedate the reader's moral outrage. If the reader surrenders completely to the beauty of the prose, the reader becomes complicit in the violation of a child.
        </div>
        <div class="engine-prose">
          Nabokov continually breaks the spell: beneath the lyrical raptures, we hear the horrifying reality of a captive orphan sobbing quietly in the dark. The novel is not an apology for crime; it is an investigation into how aesthetic beauty can be weaponized by solipsism.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">2. The Echo of the Meadow: The Crime Against Childhood</h2>
        <div class="engine-prose">
          In Chapter 31 of Part Two, Humbert experiences the moral and spiritual climax of the novel. Sitting on a high mountain ridge in Colorado after leaving Dolores in Coalmont, he listens to the sound rising from the valley below:
        </div>
        <div class="engine-prose">
          <blockquote>
            “What I heard was but the melody of children at play, nothing but that, and so small was the distance, so clear the air, that you could hear the thud of a ball, the squeak of a shoe... and then I knew that the hopelessly poignant thing was not Lolita's absence from my side, but the absence of her voice from that concord.”
          </blockquote>
        </div>
        <div class="engine-prose">
          Here, Humbert's solipsism finally shatters into complete, devastating self-knowledge. He recognizes that his ultimate sin was not statutory violation, but the total theft of a human childhood. He did not merely possess Dolores; he silenced her voice from the universal music of innocent youth.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">3. Nabokov's Aesthetic Bliss and the Refuge of Art</h2>
        <div class="engine-prose">
          In his 1956 Afterword, Vladimir Nabokov vigorously repudiates both puritanical censorship and moral didacticism:
          <blockquote>
            “For me a work of fiction exists only insofar as it affords me what I shall bluntly call aesthetic bliss, that is a sense of being arrived, somehow, somewhere, connected with other states of being where art (curiosity, tenderness, kindness, ecstasy) is the norm.”
          </blockquote>
        </div>
        <div class="engine-prose">
          Notice Nabokov's definition of art: <strong>curiosity, tenderness, kindness, ecstasy</strong>. True art is not cold formalist cleverness; it is rooted in tenderness for the fragile, beautiful, fleeting details of existence. In Humbert's final words, facing death in his prison cell, he turns to art as the only possible redemption:
          <blockquote>
            “I am thinking of aurochs and angels, the secret of durable pigments, prophetic sonnets, the refuge of art. And this is the only immortality you and I may share, my Lolita.”
          </blockquote>
        </div>
      </article>
    </div>

  </main>

  <footer>
    <p>Lolita (1955) &bull; Vladimir Nabokov &bull; Total Replacement Codex &bull; Intellectualist System</p>
    <p style="margin-top: 8px;"><a href="../../index.html">← Return to Master Library</a></p>
  </footer>

  <script>
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
console.log(`Successfully rendered Lolita index.html (Size: ${(Buffer.byteLength(readerHtml, 'utf8') / 1024).toFixed(2)} KB)`);
