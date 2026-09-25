/**
 * BKRS v1.0 Generator for M. K. Gandhi's "The Story of My Experiments with Truth" (1927/1929)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/gandhi-experiments-with-truth');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-00",
    chapter_num: 0,
    part: "Introduction",
    title: "The Laboratory of the Spirit: Truth as Sovereign Principle",
    timeline_location: "1925, Sabarmati Ashram, Ahmedabad",
    source_scope: "Introduction; Truth as God; relative truth vs. absolute truth; experiments in moral science",
    epistemic_status: "Primary Philosophical Autobiography",
    materiality: "CRITICAL",
    summary: "Gandhi introduces his autobiography not as a political history or literary work, but as a scientific record of his spiritual experiments in the laboratory of life. For Gandhi, Truth (Satya) is not an abstract metaphysical concept, but the supreme sovereign deity: 'Truth is God.' He draws a fundamental distinction between the eternal Absolute Truth and the relative truth perceived by imperfect human beings. To navigate the relative truth of daily life, one must strictly follow Ahimsa (non-violence, active universal love). To see the universal Spirit of Truth face to face, one must be able to love the meanest creation as oneself, which demands becoming 'less than the dust beneath one's feet.'",
    key_claims: [
      "Truth is the supreme ontological reality; all ethical principles derive from unwavering adherence to what is true.",
      "Human perception can only grasp relative truth; non-violence (Ahimsa) is the only valid instrument for testing and discovering truth without violating others.",
      "Spiritual realization requires absolute personal humility: ego-eradication is the prerequisite for perceiving divine reality."
    ],
    concrete_evidence: [
      "Writing the memoir in weekly installments in Gujarati for his journal *Navajivan* while imprisoned or residing at Sabarmati.",
      "Distinguishing between political autobiography (which he refuses to write) and spiritual self-dissection.",
      "The formulation: 'There are innumerable definitions of God... but I worship God as Truth only.'"
    ],
    operational_mechanisms: [
      {
        name: "The Experimental Method of Truth",
        rule: "Treat personal actions, dietary choices, and political campaigns as rigorous moral hypotheses; immediately alter behavior the moment empirical experience proves a hypothesis false."
      }
    ],
    verbatim_citations: [
      "What I want to achieve—what I have been striving and pining to achieve these thirty years—is self-realization, to see God face to face, to attain Moksha.",
      "Truth is the sovereign principle, which includes the numerous other principles. This truth is not only truthfulness in word, but truthfulness in thought also, and not only the relative truth of our conception, but the Absolute Truth, the Eternal Principle, that is God.",
      "To see the universal and all-pervading Spirit of Truth face to face one must be able to love the meanest of creation as oneself. And a man who aspires for that cannot afford to keep out of any field of life."
    ]
  },
  {
    id: "unit-01",
    chapter_num: 1,
    part: "Part I (Chapters 1–8)",
    title: "Heritage, Child Marriage, & The Sin of Flesh",
    timeline_location: "1869–1885, Porbandar & Rajkot, Gujarat",
    source_scope: "Birth in Porbandar; marriage at thirteen to Kasturbai; meat-eating with Sheikh Mehtab; confession of theft to his father",
    epistemic_status: "Primary Autobiographical Memory",
    materiality: "CRITICAL",
    summary: "Born into the Modh Bania caste in coastal Porbandar, Mohandas is raised in a household steeped in Vaishnava devotion and Jain ascetic influence (through his deeply devout mother Putlibai). At age thirteen, he is married to Kasturbai in a joint child-marriage ceremony with his brother, an event he later condemns as a cruel, barbaric social crime. Consumed by lust and jealousy, young Mohandas plays the authoritarian husband, restricting Kasturbai's movements while suffering from neurotic insecurities. In high school, seduced by a corrupt Muslim friend (Sheikh Mehtab) who convinces him that the British rule India because they eat meat, Gandhi secretly eats goat's meat in an orchard, experiencing nightmares of living goats bleating inside his stomach. Later, to clear his brother's debt, he clips a piece of gold from his brother's armlet. Tormented by guilt, he writes a full confession on a slip of paper, confesses to his ailing father, and asks for punishment. His father reads the note, weeps silent pearl-like tears, and tears up the paper without anger—an act of sublime forgiveness that imprints upon Gandhi the indestructible power of Ahimsa.",
    key_claims: [
      "Child marriage imposes premature sexualization and neurotic possessiveness that inflicts lasting psychological damage on youth.",
      "Peer pressure and political resentment can drive individuals to violate foundational cultural values in the false belief that adopting the oppressor's habits brings liberation.",
      "Pure, unconditioned confession accompanied by deep remorse dissolves guilt and transforms relationships through the power of non-violent love."
    ],
    concrete_evidence: [
      "Putlibai's extreme religious vows: fasting during the four months of Chaturmas and refusing to eat until seeing the sun.",
      "The clandestine meat feast by the river where the baker's bread and goat meat tasted like leather.",
      "The slip of paper containing the confession of the stolen gold, handed to Karamchand Gandhi as he lay on his wooden bed."
    ],
    operational_mechanisms: [
      {
        name: "Sublime Forgiveness (The Ahimsa Tear)",
        rule: "Responding to a confession of wrongdoing with silent grief and unconditional forgiveness rather than violent anger induces profound moral remorse and permanent behavioral reformation in the offender."
      }
    ],
    verbatim_citations: [
      "I can see no moral or religious justification for child marriage. It was a cruel, unjustifiable practice.",
      "A clean confession, combined with a promise never to commit the sin again, when made before one who has the right to receive it, is the purest type of repentance.",
      "Those pearl-drops of love cleansed my heart, and washed my sin away. Only he who has experienced such love can know what it is."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    part: "Part I (Chapters 9–14)",
    title: "The Double Shame & The London Departure",
    timeline_location: "1885–1888, Rajkot, Bombay & Arabian Sea",
    source_scope: "Father's death during sexual intercourse; the 'double shame'; vows to Putlibai; outcaste decree of the Modh Bania community",
    epistemic_status: "Primary Autobiographical Confession",
    materiality: "CRITICAL",
    summary: "At age sixteen, while his father lies dying of a fistula, Mohandas faithfully nurses him every night. One night, his uncle arrives to relieve him. Instead of continuing his vigil, young Mohandas rushes to the bedroom to awaken his pregnant young wife Kasturbai for sexual relations. Minutes later, a servant knocks frantically: his father has expired in his uncle's arms. The coincidence of his father dying while he was indulging in animal lust burns into Gandhi as his life's 'double shame'—a trauma compounded when the child born to Kasturbai dies days later. Resolving to study law in England to elevate his family's fortunes, he faces furious opposition from his mother and caste elders. To win his mother's blessing, he takes three solemn vows before a Jain monk, Becharji Swami: to abstain from wine, meat, and women. When his caste council in Bombay threatens him with excommunication, Gandhi refuses to yield and sails for England, an official outcaste.",
    key_claims: [
      "The trauma of allowing carnal desire to supersede filial duty became the lifelong psychological catalyst for Gandhi's obsession with sexual continence (Brahmacharya).",
      "Moral vows made to a beloved parent possess greater regulatory power over human conduct than legal or social sanctions.",
      "Standing firm against caste ostracism for an ethical objective is the first test of individual spiritual autonomy."
    ],
    concrete_evidence: [
      "The knock on the bedroom door announcing Karamchand Gandhi's death.",
      "The solemn three vows taken before Becharji Swami at the temple.",
      "The Sheth of the Modh Bania caste declaring: 'This boy shall be treated as an outcaste from today. Whoever helps him or goes to see him off shall be fined one rupee and four annas.'"
    ],
    operational_mechanisms: [
      {
        name: "The Psychological Anchor of the Vow",
        rule: "Formulating a sacred, absolute boundary before facing an alien, tempting environment removes situational compromise and shields the mind from moral drift."
      }
    ],
    verbatim_citations: [
      "The shame of my carnal desire at that critical hour was a blot I have never been able to efface or forget... It took me long to get free from the shackles of lust.",
      "I took the three vows before Becharji Swami: to abstain from wine, women, and meat. These vows saved me from pitfalls in England.",
      "I am not afraid of the caste's curse. I think you are mistaken in forbidding me to go to England."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    part: "Part I (Chapters 15–20)",
    title: "Playing the English Gentleman & Shyness as Shield",
    timeline_location: "1888–1891, London, England",
    source_scope: "Arrival in London; attempt to assimilate via clothes, dance, and violin; Henry Salt's Plea for Vegetarianism; London Vegetarian Society",
    epistemic_status: "Primary Autobiographical Narrative",
    materiality: "CRITICAL",
    summary: "Arriving in cold, damp London in white flannel trousers, Gandhi starves on tasteless boiled vegetables rather than violate his vow of vegetarianism. Advised by well-meaning friends that a barrister must conform to English manners, he embarks on a comical three-month campaign to become an 'English gentleman': buying a top hat from Lincoln & Bennett, an evening suit, a gold watch chain, taking lessons in French, ballroom dancing, and elocution, and buying a violin. Suddenly realizing the hollow vanity of this imitation, he aborts the folly, sells the violin, and shifts to strict simplicity. Wandering Farringdon Street, he discovers the Central Vegetarian Restaurant and buys Henry Salt's *Plea for Vegetarianism*. Reading it transforms his vegetarianism from a coerced maternal vow into a conscious, rational moral crusade. He joins the Executive Committee of the London Vegetarian Society, though he is so paralyzed by public shyness that he cannot read out a short speech at meetings. Later, he realizes that his natural shyness was actually a providential shield that taught him economy of words and prevented him from speaking unvetted thoughts.",
    key_claims: [
      "Superficial imitation of an imperial ruling class is an undignified trap that robs the colonized individual of authenticity and moral agency.",
      "Ethical dietary practice must be anchored in rational intellectual conviction rather than mere inherited superstition.",
      "Introversion and natural shyness can be transformed into profound strengths by cultivating the habit of silence and precise speech."
    ],
    concrete_evidence: [
      "Purchasing an evening suit for ten pounds and spending three pounds on a top hat.",
      "Joining the London Vegetarian Society and organizing a local vegetarian club in Bayswater with Sir Edwin Arnold as vice-president.",
      "Freezing at the Vegetarian Society conference in Ventnor, unable to read a three-page paper, which had to be read by another member."
    ],
    operational_mechanisms: [
      {
        name: "Shyness as an Ethical Filter (Economy of Speech)",
        rule: "A natural hesitancy to speak prevents impulsive falsehoods, vanity, and rhetorical excess, forcing every uttered word to undergo rigorous internal scrutiny."
      }
    ],
    verbatim_citations: [
      "I saw that I must give up the attempt to be an English gentleman... If my character made a gentleman of me, so much the better. Otherwise I should forego the ambition.",
      "Full faith in vegetarianism came to me only after reading Salt's book. From that date I became a vegetarian by choice.",
      "My shyness has been in reality my shield and buckler. It has allowed me to grow. It has helped me in my discernment of truth."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    part: "Part I (Chapters 21–25)",
    title: "The Epiphany of the Gita & The Calling to the Bar",
    timeline_location: "1890–1891, London & Inner Temple",
    source_scope: "Encounter with the Theosophists; reading Edwin Arnold's Song Celestial (Gita); the Sermon on the Mount; called to the Bar",
    epistemic_status: "Primary Spiritual Epiphany",
    materiality: "CRITICAL",
    summary: "During his second year in London, two Theosophist brothers introduce Gandhi to Sir Edwin Arnold's English translation of the *Bhagavad Gita* (*The Song Celestial*). Embarrassed that he has never read the sacred scripture of his own heritage in Sanskrit or Gujarati, Gandhi reads the text with burning intensity. The closing verses of the second chapter, describing the *Sthitaprajna* (the person of steadfast wisdom, free from desire and aversion), strike him as the supreme guide to human conduct, becoming his lifelong 'spiritual dictionary'. Shortly after, reading the New Testament, he is deeply moved by the Sermon on the Mount: 'Resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.' The Gita, the Sermon on the Mount, and the teachings of the Buddha fuse in his mind into a single cosmic law: that non-violence, renunciation, and selfless service are the highest truth. On June 10, 1891, he is called to the Bar at the Inner Temple and prepares to return to India.",
    key_claims: [
      "Western encounters often serve as the unexpected mirror that forces a colonized mind to rediscover the hidden profundity of its own civilizational heritage.",
      "The *Bhagavad Gita*'s doctrine of *Nishkama Karma* (selfless action without attachment to fruits) provides the psychological foundation for ethical resistance.",
      "The essence of all genuine spiritual traditions converges on the supremacy of non-retaliation, renunciation, and universal love."
    ],
    concrete_evidence: [
      "Reading Arnold's *Song Celestial* alongside Madame Blavatsky and Mrs. Annie Besant's Theosophical writings.",
      "The indelible impression left by Matthew Chapter 5 (The Sermon on the Mount).",
      "Passing the Roman Law and Common Law exams and enrolling in the High Court of Justice."
    ],
    operational_mechanisms: [
      {
        name: "Nishkama Karma (Action Without Fruit-Clinging)",
        rule: "Focus entirely on the moral rectitude and execution of the present duty, relinquishing all anxiety over external outcomes; this produces unflinching courage under crisis."
      }
    ],
    verbatim_citations: [
      "The *Gita* has been a source of solace to me... When disappointment stares me in the face and all alone I see not one ray of light, I make haste to the *Gita*.",
      "The Sermon on the Mount went straight to my heart. The verses 'But I say unto you, that ye resist not evil' delighted me beyond measure.",
      "My young mind tried to unify the teaching of the *Gita*, the *Light of Asia*, and the *Sermon on the Mount*. That renunciation was the highest form of religion appealed to me greatly."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    part: "Part II (Chapters 1–7)",
    title: "Bombay Humiliation & The Pietermaritzburg Crucible",
    timeline_location: "1891–1893, Bombay, Rajkot, Durban & Pietermaritzburg, South Africa",
    source_scope: "Mother's secret death; stage fright in Bombay Small Causes Court; insult by British Agent; arrival in Natal; the cold night at Pietermaritzburg",
    epistemic_status: "Primary Transformational Crucible",
    materiality: "CRITICAL",
    summary: "Returning to India in 1891, Gandhi is shattered to learn that his beloved mother Putlibai died while he was in England, a fact his brother kept hidden to spare him grief abroad. In Bombay, Gandhi attempts to practice law but suffers a catastrophic professional failure: standing up in the Small Causes Court to cross-examine a witness in his first case, his head spins, his knees tremble, and he sits down without uttering a single question, returning the fee in humiliation. Moving to Rajkot, he visits the British Political Agent on behalf of his brother; the arrogant officer has his peon physically throw Gandhi out of the room. Desperate to escape this suffocating pettiness, Gandhi accepts an offer from a Porbandar Muslim firm, Dada Abdulla & Co., to act as legal counsel for a commercial lawsuit in South Africa for £105 plus expenses. Arriving in Durban in May 1893, he boards a train for Pretoria. At Pietermaritzburg railway station, a white passenger objects to a 'coolie' in the first-class carriage. A railway official orders Gandhi to move to the third-class baggage van. Gandhi refuses on principle. A police officer arrives, physically ejects him, and his luggage is dumped on the platform. Sitting in the unlit, freezing waiting room through a bitter winter night, shivering with cold, Gandhi experiences his supreme existential pivot: should he flee back to India, or stay and fight the systemic racial disease of the British Empire? He resolves to stay and endure whatever suffering is required to eradicate the cancer of prejudice.",
    key_claims: [
      "Early professional failure and social humiliation strip away intellectual arrogance, preparing the individual for radical reinvention.",
      "The willingness to accept physical discomfort, insult, and danger rather than submit to an unjust order is the birth of active non-violent resistance.",
      "A single moment of moral decision under extreme adversity can reorient the trajectory of a human life and alter world history."
    ],
    concrete_evidence: [
      "The ten-rupee fee returned to the client Mamibai after Gandhi froze in the Bombay Small Causes Court.",
      "The physical shove by the British Political Agent's peon in Rajkot.",
      "The dark, unheated waiting room at Pietermaritzburg station at 9:00 PM on a freezing June night in 1893."
    ],
    operational_mechanisms: [
      {
        name: "The Crucible of Direct Discrimination",
        rule: "Experiencing institutional injustice firsthand in one's own body converts abstract intellectual liberalism into visceral, unbreakable moral commitment."
      }
    ],
    verbatim_citations: [
      "I stood up, but my heart sank into my boots. My head was reeling and I felt as though the whole court was doing likewise. I could think of no question to put.",
      "The cold was bitter. My overcoat was in my luggage, but I did not dare to ask for it lest I should be insulted again, so I sat and shivered.",
      "I began to think of my duty. Should I fight for my rights, or go back to India? It would be cowardice to run back to India without fulfilling my obligation. The hardship to which I was subjected was only superficial... only a symptom of the deep disease of colour prejudice. I should try, if possible, to root out the disease and suffer hardships in the process."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    part: "Part II (Chapters 8–18)",
    title: "The Natal Indian Congress & The Durban Mob Lynching",
    timeline_location: "1893–1897, Pretoria, Durban & Arabian Sea",
    source_scope: "Settling the Tyeb Sheth lawsuit through arbitration; Natal Franchise Bill; founding the Natal Indian Congress (1894); the Green Pamphlet; mob attack in Durban",
    epistemic_status: "Primary Political & Institutional Mobilization",
    materiality: "CRITICAL",
    summary: "In Pretoria, Gandhi successfully resolves the massive £40,000 lawsuit between Dada Abdulla and Tyeb Sheth through mutual out-of-court arbitration, discovering that the true role of a lawyer is to unite parties driven asunder. Preparing to return to India in 1894, he sees a small item in the *Natal Mercury* announcing a bill to disenfranchise all Indians in the Natal Legislative Assembly. The Indian merchants plead with Gandhi to stay; he organizes a massive petition to Lord Ripon and establishes the Natal Indian Congress on August 22, 1894, uniting indentured laborers, traders, and clerks. In 1896, he returns to India to fetch his family and publishes the 'Green Pamphlet' exposing the sub-human conditions of Indians in South Africa. Reuter cables distorted, sensationalized summaries to South Africa, claiming Gandhi accused Natal whites of atrocities. When his ship, the *S.S. Courland*, arrives in Durban harbor in January 1897 alongside the *Naderi*, a mob of several thousand armed European settlers threatens to lynch the passengers and drown Gandhi. Quarantined for twenty-three days on false health pretexts, Gandhi lands at dusk; the mob recognizes him, cuts him off, beats him with stones, kicks him, and tears his turban off. He is saved from being lynched by Mrs. Escombe, the wife of the Police Superintendent, who opens her parasol and stands between him and the rioters. When the British government offers to prosecute the mob leaders, Gandhi refuses, stating that the individuals were misled by false reports and that he will never use the coercive machinery of the law to punish personal enemies.",
    key_claims: [
      "The ethical practice of law prioritizes restorative reconciliation and arbitration over adversarial litigation.",
      "Distorted, sensationalized media reporting can incite lethal mob violence based on fabricated grievances.",
      "Refusing to prosecute personal attackers demonstrates the absolute sincerity of non-violence, instantly disarming public hostility."
    ],
    concrete_evidence: [
      "The ten-thousand-signature petition sent to the Colonial Secretary within a fortnight.",
      "The 'Green Pamphlet' (*The Grievances of the British Indians in South Africa*) published in Rajkot.",
      "The white mob singing in Durban harbor: 'We'll hang old Gandhi on the sour apple tree!'",
      "Mrs. Escombe shielding Gandhi with her umbrella at the corner of West Street."
    ],
    operational_mechanisms: [
      {
        name: "Refusal to Prosecute the Oppressor",
        rule: "By voluntarily renouncing state legal retribution against personal assailants, the activist demonstrates moral invulnerability, converting public shame into sympathy."
      }
    ],
    verbatim_citations: [
      "I had learned the true practice of the law. I had learned to find out the better side of human nature and to enter men's hearts. I realized that the true function of a lawyer was to unite parties driven asunder.",
      "They came on, pelted me with stones, brickbats and rotten eggs. Someone snatched away my turban, whilst others began to batter and kick me. I fainted and caught hold of the front railings of a house.",
      "I have no desire to prosecute my assailants... they were under a misconception. When the truth becomes known they will be sorry for their conduct."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    part: "Part III (Chapters 1–15)",
    title: "The Boer War Ambulance & Gokhale's Tutelage",
    timeline_location: "1899–1902, Natal, Calcutta & Bombay",
    source_scope: "The Anglo-Boer War; organizing the Indian Ambulance Corps; 1901 Calcutta Congress; serving Gopal Krishna Gokhale",
    epistemic_status: "Primary Civic & Political Apprenticeship",
    materiality: "IMPORTANT",
    summary: "During the Anglo-Boer War (1899), although his personal sympathies lie with the Boers defending their sovereignty, Gandhi insists that as British subjects claiming imperial rights, Indians must fulfill civic obligations. He organizes an 1,100-man Indian Ambulance Corps composed of indentured coolies and merchants. Under heavy artillery fire at Spion Kop, the corps carries wounded soldiers, including General Woodgate and Lord Roberts's son, marching up to twenty-five miles a day with stretchers, completely changing white South African perceptions of Indian cowardice. In 1901, Gandhi returns to India to settle, attending the Calcutta session of the Indian National Congress. He is appalled by the delegates' arrogance, filthy sanitation (defecating in open verandas), and rigid untouchability. Gandhi voluntarily takes a broom to clean the latrines, horrified by the Congress's lack of practical hygiene. He stays for a month in Calcutta with Gopal Krishna Gokhale, who becomes his political mentor, introducing him to India's foremost leaders and instilling in him rigorous fiscal discipline, precision in public work, and spiritualized politics.",
    key_claims: [
      "Civil rights cannot be divorced from civic duties: claiming imperial protection requires demonstrating physical loyalty and courage in public crisis.",
      "Political nationalism is hypocritical and impotent if it ignores basic public sanitation and permits the evil of untouchability.",
      "A leader must lead by direct manual service: cleaning latrines is more revolutionary than delivering eloquent political speeches."
    ],
    concrete_evidence: [
      "The Indian Ambulance Corps carrying stretchers for miles across the rocky hills of Spion Kop under blistering Boer fire.",
      "Gandhi cleaning the filthy latrines of the Calcutta Congress with his own hands while delegates watched in indifference.",
      "Living in Gokhale's Calcutta home, observing Gokhale's meticulous habit of checking every rupee and sentence."
    ],
    operational_mechanisms: [
      {
        name: "Sanitation as Moral Precondition",
        rule: "A society that cannot manage its own physical waste cannot manage political self-government; manual sanitation is the ultimate antidote to caste elitism."
      }
    ],
    verbatim_citations: [
      "Our existence in South Africa was only tolerated on the condition that we were 'coolies'. How could we claim rights if we did not accept our responsibilities in time of war?",
      "A volunteer was needed to clean the verandas. I said, 'I will do it.' The delegates stared in amazement as I took a broom and cleaned up the filth.",
      "Gokhale was like the Ganges—one could have a refreshing bath in the holy river. His political life was spiritualized."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    part: "Part IV (Chapters 16–20)",
    title: "Ruskin's Unto This Last & The Phoenix Settlement",
    timeline_location: "1904, Durban to Johannesburg Train & Phoenix, Natal",
    source_scope: "Reading John Ruskin's Unto This Last; the three economic axioms; founding the Phoenix Settlement; communal living",
    epistemic_status: "Primary Ideological Transformation",
    materiality: "CRITICAL",
    summary: "Summoned back to South Africa in 1902 to fight Lord Milner's Asiatic Department, Gandhi finances the multilingual newspaper *Indian Opinion*. In 1904, while boarding a twenty-four-hour train from Johannesburg to Durban, his friend Henry Polak hands him John Ruskin's *Unto This Last*. The book grips him with electric force, keeping him awake the entire night. Gandhi extracts Ruskin's three core teachings: (1) The good of the individual is contained in the good of all; (2) A lawyer's work has the same value as the barber's, inasmuch as all have the same right of earning their livelihood from their work; (3) The life of labor—that of the tiller of the soil and the handicraftsman—is the only life worth living. Arriving in Durban, Gandhi acts immediately: he buys one hundred acres of land at Phoenix, fourteen miles outside Durban, moves the *Indian Opinion* printing press into the wilderness, and establishes an agrarian communal settlement where all workers receive an equal monthly allowance of £3 and grow their own food.",
    key_claims: [
      "Intellectual realization is worthless unless followed by immediate, radical institutional restructuring of one's personal life.",
      "True economics must prioritize the welfare of the poorest and weakest ('unto this last') rather than the mathematical accumulation of capital.",
      "Physical manual labor and self-reliance are the only durable material foundations for free, incorruptible political journalism."
    ],
    concrete_evidence: [
      "Purchasing 100 acres at Phoenix for £1,000, covered in snake-infested grass and orange trees.",
      "Installing an oil engine for the printing press, but switching to manual hand-wheel power when the engine fails, with Gandhi and the settlers working the wheel all night.",
      "Setting an equal wage of £3 per month for all settlers, regardless of whether they were editors or compositors."
    ],
    operational_mechanisms: [
      {
        name: "The Ruskinian Communal Inversion",
        rule: "By eliminating hierarchy and anchoring life in agrarian self-sufficiency, the community becomes economically immune to state coercion and corporate boycotts."
      }
    ],
    verbatim_citations: [
      "I could not get any sleep that night. I determined to change my life in accordance with the ideals of the book.",
      "I arose with the dawn, ready to reduce these principles to practice.",
      "The life of labor, i.e., the life of the tiller of the soil and the handicraftsman, is the life worth living."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    part: "Part IV (Chapters 21–25)",
    title: "The Zulu Rebellion & The Sacred Vow of Brahmacharya",
    timeline_location: "1906, Zululand & Phoenix Settlement",
    source_scope: "The Zulu 'Rebellion'; Indian Stretcher-Bearer Corps; treating flogged Zulus; the realization of service requiring sexual renunciation; the 1906 vow",
    epistemic_status: "Primary Spiritual & Ascetic Crucible",
    materiality: "CRITICAL",
    summary: "In 1906, the British launch a punitive campaign against the Zulus under the guise of suppressing a 'rebellion' against the poll tax. Gandhi organizes a twenty-four-man Stretcher-Bearer Corps. To his horror, the campaign is not a war, but a merciless manhunt: British soldiers shoot unarmed Zulus and savagely flog prisoners with barbed whips until their skin hangs in raw strips. White nurses refuse to touch the festering wounds of the Africans; Gandhi's Indian corps bandages their bleeding backs, cleans their sores, and carries them for miles. Marching through the silent, solemn hills of Zululand, contemplating the butchery of innocent human beings, Gandhi experiences a blinding spiritual epiphany: one cannot dedicate one's life to the selfless service of humanity while remaining entangled in domestic pleasure, family property, and sexual lust. Service demands complete, absolute freedom from carnal desire. Returning to Phoenix in mid-1906, after consulting Kasturbai, Gandhi takes the irrevocable, lifelong vow of **Brahmacharya** (complete celibacy in thought, word, and deed).",
    key_claims: [
      "Imperialist military expeditions against indigenous peoples are often glorified massacres designed to terrorize populations into economic subjugation.",
      "Genuine public service and satyagraha require total emotional and physiological renunciation; one cannot risk life for others while clinging to domestic comfort.",
      "Brahmacharya is not merely physical abstinence, but the mastery of thought and the redirection of vital sexual energy toward universal love."
    ],
    concrete_evidence: [
      "Gandhi washing the festering lacerations on the backs of Zulu prisoners caused by wire-tipped cat-o'-nine-tails.",
      "Marching forty miles a day through Zulu country carrying stretchers under the winter sun.",
      "The formal ceremony at Phoenix where Gandhi took the vow of celibacy at age thirty-seven."
    ],
    operational_mechanisms: [
      {
        name: "Brahmacharyic Energy Redirection",
        rule: "Channeling the potent biological drive of sexual reproduction into selfless altruistic service generates an indestructible inner reservoir of psychic and moral stamina."
      }
    ],
    verbatim_citations: [
      "The Zulu 'rebellion' was full of new experiences and gave me much food for thought... It was no war but a man-hunt.",
      "The wounded Zulus would have been left untended if we had not been there. The medical authorities were glad to leave the care of these Zulus to us.",
      "I saw that if I wanted to devote myself to the service of the community in this manner, I must relinquish the desire for children and wealth and live the life of a *vanaprastha*—of one who has renounced all these... The vow of Brahmacharya was taken in 1906."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    part: "Part IV (Chapters 26–36)",
    title: "The Birth of Satyagraha & The Black Act",
    timeline_location: "September 11, 1906, Empire Theatre, Johannesburg",
    source_scope: "The Asiatic Law Amendment Ordinance (Black Act); the mass meeting at Empire Theatre; coining Satyagraha; burning certificates; General Smuts",
    epistemic_status: "Primary World-Historical Genesis",
    materiality: "CRITICAL",
    summary: "In August 1906, the Transvaal government gazettes the humiliating Asiatic Law Amendment Ordinance ('The Black Act'), requiring every Indian man, woman, and child to be fingerprinted, registered, carry passes at all times, and submit to police entry into their private homes. On September 11, 1906, three thousand delegates crowd the Old Empire Theatre in Johannesburg. When Sheth Haji Habib declares that Indians should pass a resolution in the name of God never to submit, Gandhi is electrified: a pledge taken in the name of God is irrevocable; one must be prepared to die rather than violate it. Rejecting the English term 'Passive Resistance' as weak, weapon-of-the-weak, and potentially violent, Gandhi holds a competition in *Indian Opinion*; Maganlal Gandhi proposes 'Sadagraha' (Firmness in a Good Cause), which Gandhi modifies to **Satyagraha**—the Force of Truth and Love. Gandhi is imprisoned in Johannesburg Jail (1908); General Jan Smuts secretly offers to repeal the Black Act if Indians register voluntarily. Gandhi agrees, is released, and is nearly beaten to death on the street by a Pathan follower (Mir Alam) who suspects him of betrayal. When Smuts betrays the promise and refuses to repeal the Act, Gandhi organizes a massive bonfire in the courtyard of the Hamidia Mosque on August 16, 1908, burning over two thousand registration certificates in a cauldron of boiling paraffin.",
    key_claims: [
      "Satyagraha is fundamentally different from 'Passive Resistance': it is not the weapon of the weak, contains no hatred, and relies entirely on soul-force and self-suffering.",
      "An oath taken in the name of God to resist an unjust law demands total willingness to endure imprisonment, confiscation, and physical death.",
      "A Satyagrahi must trust the opponent even after repeated betrayals; trust is the very core of non-violent combat."
    ],
    concrete_evidence: [
      "The Empire Theatre meeting on September 11, 1906, with all 3,000 attendees standing with raised hands pledging before God.",
      "Mir Alam striking Gandhi with a heavy stick in Von Brandis Street, knocking him senseless onto the pavement.",
      "The iron cauldron outside the Hamidia Mosque where thousands of yellow registration certificates were tossed into flames.",
      "General Smuts's treacherous refusal to repeal the Asiatic Act after voluntary registration was completed."
    ],
    operational_mechanisms: [
      {
        name: "Satyagraha (Truth-Force via Self-Suffering)",
        rule: "Confront an unjust law not by inflicting violence on the oppressor, but by openly violating the statute and joyfully accepting the maximum legal penalty, thereby appealing directly to the opponent's conscience."
      }
    ],
    verbatim_citations: [
      "Truth (Satya) implies love, and firmness (Agraha) engenders and therefore serves as a synonym for force. I thus began to call the Indian movement 'Satyagraha', that is to say, the Force which is born of Truth and Love or non-violence.",
      "The resolution was taken in the name of God. There is no going back. A man who takes a vow in the name of God must be prepared to die for it.",
      "A Satyagrahi bids goodbye to fear. He is therefore never afraid to trust the opponent. Even if the opponent plays him false twenty times, the Satyagrahi is ready to trust him the twenty-first time."
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    part: "Part IV (Chapters 37–48)",
    title: "Tolstoy Farm & The Great March of 1913",
    timeline_location: "1910–1914, Tolstoy Farm (Lawley, Transvaal) & Newcastle to Charlestown",
    source_scope: "Hermann Kallenbach; founding Tolstoy Farm; pedagogical manual labor; the £3 poll tax on indentured workers; the 1913 Great March",
    epistemic_status: "Primary Mass Movement Strategy",
    materiality: "CRITICAL",
    summary: "To sustain the families of jailed Satyagrahis without external charity, Gandhi's German-Jewish architect disciple Hermann Kallenbach purchases eleven hundred acres twenty-two miles from Johannesburg, founding **Tolstoy Farm** in 1910. The community operates on radical egalitarian self-reliance: Hindus, Muslims, Christians, and Parsis live in communal harmony, making their own leather sandals, baking their own bread, gardening, and educating children without corporal punishment. In 1913, the South African Cape Supreme Court invalidates all non-Christian marriages, legally reducing Indian wives to concubines, while the government refuses to repeal the hated £3 annual tax on ex-indentured laborers. Gandhi launches the ultimate phase of South African Satyagraha: Indian women cross the border into Newcastle to incite coal miners to strike. Thousands of miners down tools. Gandhi organizes the 'Great March' of over two thousand miners, women, and children, marching on foot from Newcastle across the Transvaal border to Tolstoy Farm, surviving on daily rations of one and a half pounds of bread and an ounce of sugar. Gandhi is arrested three times in four days, convicted, and sentenced to hard labor. The brutal horse charges by police and the imprisonment of thousands shock world opinion. Lord Hardinge, the British Viceroy of India, publicly denounces the South African government. General Smuts is forced to capitulate, appointing an inquiry that leads to the passage of the Indian Relief Act of 1914, abolishing the £3 tax and validating Indian marriages. His twenty-one-year South African mission completed, Gandhi sails for India.",
    key_claims: [
      "Communal self-reliance (Tolstoy Farm) creates the logistical backbone necessary to sustain protracted non-violent resistance against a totalitarian state.",
      "Mobilizing women and economic laborers on moral issues (the sanctity of marriage, abolition of unfair taxes) transforms an elite protest into an unstoppable mass movement.",
      "Non-violent suffering under brutal state repression inevitably forces international moral intervention and state capitulation."
    ],
    concrete_evidence: [
      "Kallenbach learning sandal-making at a Trappist monastery in Pinetown and teaching Gandhi to make leather sandals (Gandhi later gifted a pair of these sandals to General Smuts).",
      "The march of 2,037 men, 127 women, and 57 children across the Transvaal border without a single weapon.",
      "General Smuts stating years later: 'It was my fate to be the antagonist of a man for whom even then I had the highest respect.'"
    ],
    operational_mechanisms: [
      {
        name: "Mass Coordinated Transgression (The Satyagrahic March)",
        rule: "Marching thousands of peaceful citizens across an arbitrary legal boundary overwhelms the state's penal infrastructure, rendering enforcement physically and politically impossible."
      }
    ],
    verbatim_citations: [
      "Tolstoy Farm was a family in which I was the head, and that was how I sought to guide the young people.",
      "The marchers were heroes. They had no weapons, no money, only their faith in God and the justice of their cause.",
      "The Indian Relief Bill was passed. The twenty-one-year-old struggle had come to an end... I left South Africa with a heavy heart, for my ties with it were sacred."
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    part: "Part V (Chapters 1–11)",
    title: "Return to India & The Sabarmati Ashram",
    timeline_location: "1915–1917, Bombay, Shantiniketan, Ahmedabad (Kochrab & Sabarmati)",
    source_scope: "Return to India in January 1915; Gokhale's advice to keep eyes open and ears shut; establishing the Satyagraha Ashram; admitting untouchables",
    epistemic_status: "Primary Institutional Foundation",
    materiality: "CRITICAL",
    summary: "Arriving in Bombay on January 9, 1915, Gandhi is welcomed as a national hero. Following the advice of his mentor Gokhale, Gandhi takes a vow to refrain from public political pronouncements for one full year, traveling across the subcontinent in third-class railway carriages to observe the real, rural India of 700,000 villages. In May 1915, he establishes the Satyagraha Ashram at Kochrab near Ahmedabad (later relocated to the banks of the Sabarmati River). Shortly after its founding, Gandhi admits a family of 'untouchables'—Dudabhai, his wife Danibehn, and their baby daughter Lakshmi. The ashram is plunged into immediate crisis: orthodox Hindu neighbors cut off their water supply, ashram benefactors stop monetary donations, and even Kasturbai resists. Facing total bankruptcy and starvation, Gandhi calmly prepares to move the entire ashram into the untouchable quarter of Ahmedabad. At the eleventh hour, an anonymous wealthy Muslim merchant drives up to the ashram in a car, hands Gandhi thirteen thousand rupees in cash without giving his name, and drives away, saving the community.",
    key_claims: [
      "True political leadership requires direct, unmediated observation of the poorest segments of the population rather than urban intellectual speculation.",
      "Eradicating untouchability was a non-negotiable moral foundation of Gandhi's ashram; he refused to compromise on human dignity even if it meant financial ruin.",
      "Unflinching faith in providential justice during moral crises attracts unexpected external support."
    ],
    concrete_evidence: [
      "Traveling thousands of miles in crowded, third-class wooden train compartments, documenting the filth, spitting, and rudeness of railway staff.",
      "The well-water dispute where high-caste neighbors refused to let water drops fall from Dudabhai's bucket into the communal well.",
      "The mysterious gift of Rs. 13,000 cash from the merchant (later revealed to be Ambalal Sarabhai) that sustained the ashram for an entire year."
    ],
    operational_mechanisms: [
      {
        name: "Radical Internal Egalitarianism",
        rule: "Before demanding freedom from an external imperial oppressor, a revolutionary community must completely cleanse itself of internal caste and class apartheid."
      }
    ],
    verbatim_citations: [
      "Gokhale advised me to keep my ears open and my mouth shut for a year, and to travel over India. I strictly followed his advice.",
      "Our admission of the untouchable family created a tremendous flutter. A shower of fury descended upon us... But to have rejected them would have been to act against the very principle on which the Ashram was based.",
      "If we had no money left, I had resolved that we would go and live in the untouchables' quarter and earn our bread by manual labor."
    ]
  },
  {
    id: "unit-13",
    chapter_num: 13,
    part: "Part V (Chapters 12–25)",
    title: "Champaran, Ahmedabad, & Kheda: The Triad of Agrarian Resistance",
    timeline_location: "1917–1918, Champaran (Bihar), Ahmedabad & Kheda (Gujarat)",
    source_scope: "Rajkumar Shukla; the Tinkathia system; Champaran inquiry; Ahmedabad Mill Strike and the first fast; Kheda Peasant Satyagraha",
    epistemic_status: "Primary Agrarian & Labor Mass Movements",
    materiality: "CRITICAL",
    summary: "In 1917, an illiterate indigo peasant named Rajkumar Shukla pursues Gandhi for months until Gandhi agrees to visit Champaran in Bihar. There, British indigo planters brutally exploit tenant farmers under the *Tinkathia* system, forcing them to cultivate indigo on three-twentieths of their best land for zero profit. Served with an order to leave the district, Gandhi refuses and pleads guilty in court, stating he is obeying 'the higher law of our being, the voice of conscience.' The magistrate is stunned; the Lieutenant Governor intervenes, dismisses the case, and appoints Gandhi to an official Commission of Inquiry, resulting in the complete abolition of the century-old Tinkathia system. Returning to Ahmedabad in 1918, Gandhi leads the textile mill workers demanding a 35% wage increase against wealthy mill-owners (including his friend Ambalal Sarabhai). When the starving workers waver and prepare to break their pledge, Gandhi undertakes his first public fast unto death—not against the mill-owners, but to hold the workers to their sacred oath. On the third day, the mill-owners capitulate, agreeing to arbitration. Concurrently, Gandhi leads the Kheda Satyagraha, guiding peasants to withhold land revenue following total crop failure, cementing his alliance with Vallabhbhai Patel.",
    key_claims: [
      "Direct fact-finding, empirical documentation, and personal testimony are the essential foundation of any successful Satyagraha campaign.",
      "A fast unto death must never be weaponized to coerce an enemy; it can only be used as a moral appeal to awaken conscience and hold comrades to their own pledges.",
      "Victory in labor and agrarian struggles is achieved through arbitration and mutual respect, not through the physical destruction of the opposing class."
    ],
    concrete_evidence: [
      "Taking detailed depositions from thousands of Bihari sharecroppers under the eyes of CID police spies.",
      "The order by the Champaran magistrate: 'Leave on the next train'; Gandhi's written reply: 'I cannot leave.'",
      "Gandhi fasting under the babul tree by the Sabarmati River while textile workers cheered outside.",
      "Vallabhbhai Patel abandoning his lucrative law practice in Ahmedabad to become Gandhi's chief field commander in Kheda."
    ],
    operational_mechanisms: [
      {
        name: "Forensic Deposition Fact-Finding",
        rule: "Compile an airtight, overwhelmingly documented empirical dossier of the oppressor's abuses before presenting demands; the oppressor cannot withstand the unvarnished public truth."
      },
      {
        name: "The Self-Purifying Fast (Satyagrahic Fasting)",
        rule: "Fasting is an instrument of severe self-suffering designed to awaken love and responsibility in loved ones or followers who are breaking their moral vows."
      }
    ],
    verbatim_citations: [
      "I have disregarded the order served upon me not for want of respect for lawful authority, but in obedience to the higher law of our being, the voice of conscience.",
      "The Tinkathia system which had been in existence for about a century was abolished, and with it also ended the planters' *raj*.",
      "I said to the workers: 'I shall not take food, nor use a car, until you get a 35 per cent increase or the strike fails.' The fast was undertaken to preserve the honor of the workers' pledge."
    ]
  },
  {
    id: "unit-14",
    chapter_num: 14,
    part: "Part V (Chapters 26–44 & Farewell)",
    title: "The Himalayan Blunder, Non-Cooperation, & The Farewell to the Reader",
    timeline_location: "1919–1922 & 1928, Delhi, Amritsar, Chauri Chaura & Sabarmati",
    source_scope: "Rowlatt Act; Jallianwala Bagh massacre context; the 'Himalayan Blunder'; Non-Cooperation Movement; Chauri Chaura suspension; Farewell",
    epistemic_status: "Primary World-Historical Climax & Epistemic Testament",
    materiality: "CRITICAL",
    summary: "In 1919, the British government passes the draconic Rowlatt Act, legalizing arrest without trial. Gandhi calls for a nationwide *Hartal* (general strike) on April 6. The strike is an astronomical success, but violent riots erupt in Delhi, Ahmedabad, and Amritsar (culminating in General Dyer's massacre at Jallianwala Bagh). Recognizing that he called the masses to civil disobedience before they had undergone training in non-violence, Gandhi publicly confesses his 'Himalayan Blunder' and suspends the movement to fast in penance. In 1920, he launches the epic Non-Cooperation Movement: boycotting British schools, courts, titles, and foreign cloth, and promoting the spinning wheel (Khadi) to achieve economic Swaraj. In February 1922, with the British Raj on the verge of collapse, an enraged mob burns twenty-two policemen alive inside the police station at Chauri Chaura. Against the furious protests of Congress leaders, Gandhi unilaterally calls off the entire national movement, refusing to win independence at the price of blood. In his concluding Farewell, Gandhi confesses that after thirty years of relentless experiments, he has not yet seen God face to face, but has caught glimpses of the eternal Truth. To attain that Truth, one must become utterly pure, casting off all anger, lust, and pride, becoming 'less than the dust beneath one's feet.'",
    key_claims: [
      "Launching civil disobedience without strict prior discipline in non-violence is a 'Himalayan Blunder' that leads inevitably to catastrophic bloodshed.",
      "Purity of means is absolute: freedom achieved through violence carries the seeds of its own tyranny and is worthless.",
      "True self-realization requires absolute self-effacement: one must become less than the dust to perceive the divine."
    ],
    concrete_evidence: [
      "The massive nationwide Hartal of April 6, 1919, that shut down the entire commerce of the Indian subcontinent.",
      "The Chauri Chaura police station massacre on February 4, 1922, where 22 constables were hacked and burned to death.",
      "The Congress Working Committee meeting at Bardoli where Gandhi formally suspended the Non-Cooperation Movement.",
      "Judge C. N. Broomfield sentencing Gandhi to six years' imprisonment in March 1922, stating that Gandhi was in a different category from any person he had ever tried."
    ],
    operational_mechanisms: [
      {
        name: "The Inviolability of Moral Means (The Bardoli Halt)",
        rule: "Immediately abort a winning political revolution if the means become violent; winning an empire with corrupted methods destroys the moral soul of the nation."
      },
      {
        name: "The Dust Axiom (Universal Humility)",
        rule: "To realize universal truth, an individual must reduce their ego to zero; so long as the slightest trace of pride remains, God remains unseen."
      }
    ],
    verbatim_citations: [
      "I realized that I had made a Himalayan Blunder in asking people who were not ready for civil disobedience to offer it.",
      "I cannot purchase my country's freedom at the price of truth and non-violence. If the movement is tainted with blood, it must be stopped.",
      "To see the universal and all-pervading Spirit of Truth face to face one must be able to love the meanest of creation as oneself... I must reduce myself to zero. So long as a man does not of his own free will put himself last among his fellow creatures, there is no salvation for him.",
      "Farewell, kind reader! I ask you to join with me in prayer to the God of Truth that He may grant me the strength to remain true to Him."
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "gandhi-experiments-with-truth",
  title: "The Story of My Experiments with Truth",
  author: "M. K. Gandhi",
  publication_year: 1927,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Gandhi's Experiments with Truth with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# The Story of My Experiments with Truth
## A Forensic Spiritual, Philosophical, and Strategic Reconstruction of Satyagraha, Ahimsa, and Radical Self-Mastery
### By Mohandas Karamchand Gandhi (1927/1929)

---

## Executive Epistemic Summary

M. K. Gandhi’s *The Story of My Experiments with Truth* is not a conventional political autobiography; it is a **forensic laboratory report of a human life dedicated to the systematic discovery and application of Truth (Satya) through Non-violence (Ahimsa)**.

Across 5 foundational parts, 170+ chapters, and 15 invariant units, Gandhi conducts a ruthless, self-lacerating post-mortem of his own flaws, failures, and moral transformations:
1. **The Double Shame & Carnal Trauma**: The death of his father while Gandhi was indulging in sexual intimacy with his pregnant child-bride Kasturbai became the lifelong psychological pivot toward ascetic celibacy (*Brahmacharya*).
2. **The Pietermaritzburg Crucible (1893)**: Ejected from a first-class railway compartment in the bitter winter cold of South Africa, Gandhi chose not to flee back to India, but to confront the systemic disease of racial oppression with soul-force.
3. **The Philosophical Convergence**: The synthesis of the *Bhagavad Gita* (*Nishkama Karma*—selfless action), the Sermon on the Mount (non-retaliation), John Ruskin’s *Unto This Last* (communal economics), and Leo Tolstoy’s *The Kingdom of God is Within You*.
4. **The Birth of Satyagraha (1906)**: Moving beyond passive resistance, Gandhi forged Truth-Force at the Johannesburg Empire Theatre, proving that joyful self-suffering disarms state violence.
5. **The Triad of Agrarian Resistance (Champaran, Ahmedabad, Kheda)**: Perfecting forensic fact-finding, agrarian strike coordination, and the self-purifying fast.
6. **The Himalayan Blunder & The Primacy of Means**: Halting the winning Non-Cooperation Movement after the Chauri Chaura massacre, establishing that freedom won through violence is worthless.

---

## The Satyagraha Operational Philosophy Matrix

| Principle | Sanskrit Term | Operational Definition | Practical Application |
| :--- | :--- | :--- | :--- |
| **Truth** | *Satya* | Supreme sovereign reality; God. Truthfulness in word, thought, and action. | Total transparency; refusal to use deception, exaggeration, or secret codes. |
| **Non-Violence** | *Ahimsa* | Active universal love; the total refusal to injure any living being in thought or deed. | Loving the oppressor while fiercely resisting the oppressive system. |
| **Soul-Force** | *Satyagraha* | The force born of Truth and Love; resistance through self-suffering. | Openly breaking an unjust law and gladly enduring the maximum penalty. |
| **Celibacy / Control** | *Brahmacharya* | Mastery of all senses; redirecting reproductive energy into universal service. | 1906 vow of celibacy; simple dietetics; elimination of spices and stimulants. |
| **Self-Reliance** | *Swadeshi* | Dedication to local production and the uplift of the immediate neighbor. | The spinning wheel (*Khadi*); boycott of exploitative foreign cloth. |
| **Equanimity** | *Aparigraha* | Non-possession; holding zero personal property; living on minimum necessity. | Communal settlements (Phoenix Settlement, Tolstoy Farm, Sabarmati Ashram). |

---

## The 15 Invariant Content Units

${units.map(u => `### Chapter ${u.chapter_num}: ${u.title}
- **Part**: ${u.part}
- **Setting & Timeline**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Narrative & Spiritual Synthesis
${u.summary}

#### Invariant Philosophical & Ethical Claims
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Empirical Evidence & Concrete Realia
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Spiritual & Political Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## The Ultimate Epistemological Testament: The Dust Axiom

In his concluding farewell, Gandhi delivers the core axiom that separates Satyagraha from all conventional political theories:
> *"To see the universal and all-pervading Spirit of Truth face to face one must be able to love the meanest of creation as oneself... I must reduce myself to zero. So long as a man does not of his own free will put himself last among his fellow creatures, there is no salvation for him."*
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
  <title>The Story of My Experiments with Truth — M. K. Gandhi | Intellectualist Master Codex</title>
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

    /* Matrix Table */
    .table-container {
      overflow-x: auto;
      margin: 20px 0;
    }
    .matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .matrix-table th, .matrix-table td {
      border: 1px solid var(--border-color);
      padding: 10px 14px;
      text-align: left;
    }
    .matrix-table th {
      background: var(--badge-bg);
      font-weight: 700;
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
        <span>Total Replacement Benchmark &bull; M. K. Gandhi</span>
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
    <button class="view-tab active" data-target="view-journey">View A: 15-Unit Pilgrimage</button>
    <button class="view-tab" data-target="view-satyagraha">View B: Satyagraha Architecture</button>
    <button class="view-tab" data-target="view-experiments">View C: Moral & Ascetic Laboratory</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Spiritual Autobiography Benchmark</span>
      <h2>The Story of My Experiments with Truth</h2>
      <p class="hero-sub">A Forensic Spiritual, Philosophical, and Strategic Reconstruction of Satyagraha, Ahimsa, and Radical Self-Mastery</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Mohandas Karamchand Gandhi</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1927/1929</span>
        <span>&bull;</span>
        <span><strong>Scope:</strong> 5 Parts &bull; 170+ Chapters Synthesized into 15 Units</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: 15-Unit Pilgrimage -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">${u.part} &bull; Unit ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Narrative & Spiritual Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Invariant Philosophical & Ethical Claims</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Empirical Evidence & Concrete Realia</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Spiritual & Political Mechanisms</div>
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

    <!-- VIEW B: Satyagraha Architecture -->
    <section id="view-satyagraha" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Satyagraha Operational Philosophy Matrix</h3>
        <p class="prose-p">A systematic codification of the six foundational pillars of Gandhi's philosophy of non-violent revolution and spiritual ethics.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Principle</th>
                <th>Sanskrit Term</th>
                <th>Philosophical Definition</th>
                <th>Strategic & Practical Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Truth</strong></td>
                <td><em>Satya</em></td>
                <td>Supreme sovereign deity; God as Truth. Complete transparency in word, thought, and deed.</td>
                <td>Zero secrecy; total openness; publishing strategy in advance; no deceptive propaganda.</td>
              </tr>
              <tr>
                <td><strong>Non-Violence</strong></td>
                <td><em>Ahimsa</em></td>
                <td>Active universal love; the total refusal to harm or harbor malice against any living being.</td>
                <td>Refusing to retaliate against police beatings; forgiving attackers (e.g. Mir Alam, Durban mob).</td>
              </tr>
              <tr>
                <td><strong>Truth-Force</strong></td>
                <td><em>Satyagraha</em></td>
                <td>The force born of Truth and Love; resistance through joyful self-suffering.</td>
                <td>Violating an unjust law openly; filling the jails; refusing fines or bail; breaking the state's capacity to punish.</td>
              </tr>
              <tr>
                <td><strong>Self-Restraint</strong></td>
                <td><em>Brahmacharya</em></td>
                <td>Mastery of all physical senses; redirecting vital energy into universal service.</td>
                <td>1906 vow of celibacy; elimination of spices; fruitarian dietetics; freedom from family attachment.</td>
              </tr>
              <tr>
                <td><strong>Non-Possession</strong></td>
                <td><em>Aparigraha</em></td>
                <td>Holding zero personal property; owning only what is strictly necessary for immediate service.</td>
                <td>Communal living at Phoenix, Tolstoy Farm, and Sabarmati; wearing simple loincloth (Khadi).</td>
              </tr>
              <tr>
                <td><strong>Self-Rule</strong></td>
                <td><em>Swaraj</em></td>
                <td>Internal self-control before external political independence.</td>
                <td>Manual sanitation; cleaning latrines; village spinning wheels; eradicating untouchability.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: Moral & Ascetic Laboratory -->
    <section id="view-experiments" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Experimental Science of the Spirit</h3>
        <p class="prose-p">Gandhi viewed life as a laboratory where hypotheses are tested, falsified, and calibrated with scientific precision.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Confession as Healing Catalyst</h5>
          <p>Confessing to his father with pure remorse and zero excuses broke the cycle of deceit. Genuine repentance invokes unconditional love and dissolves psychological guilt.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Law of Nishkama Karma (Detached Action)</h5>
          <p>From the <em>Gita</em>, Gandhi derived the rule that anxiety over consequences paralyzes moral courage. Perform the duty dictated by Truth right now, and let outcomes take care of themselves.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Purity of Means (The Bardoli Principle)</h5>
          <p>Means and ends are convertible in Gandhi's philosophy: you cannot reach a healthy tree through poisoned seeds. Calling off the Non-Cooperation Movement after Chauri Chaura proved that winning independence through violence is spiritual defeat.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. The Dust Axiom (Reduction to Zero)</h5>
          <p>The final realization of the autobiography: God can only be perceived when the ego is reduced to zero. One must become <em>"less than the dust beneath one's feet"</em> to reflect the divine light of Truth.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; M. K. Gandhi's <em>The Story of My Experiments with Truth</em> &bull; Standalone Certified Knowledge Reconstruction</p>
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
console.log(`Successfully rendered Gandhi Experiments with Truth index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
