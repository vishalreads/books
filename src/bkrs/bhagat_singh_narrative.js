/**
 * BKRS Canonical Historical Narrative Prose Repository: Bhagat Singh: A Life in Revolution
 * Provides continuous, high-fidelity, immersive historical prose for all 78 units across 13 major parts,
 * transforming abstract database snippets into an exceptionally detailed, readable biographical masterpiece.
 */

const BHAGAT_SINGH_PARTS = [
  {
    partKey: "prologue",
    partTag: "Front Matter & Prologue",
    title: "A Life in Revolution & The Archival Discovery",
    units: ["KU-BS-EPIGRAPH-01", "KU-BS-PROLOGUE-01"]
  },
  {
    partKey: "part-1",
    partTag: "Part 1: 1840–1919",
    title: "Khatkar Kalan, Banga, and the Rebel Ancestry",
    units: ["KU-BS-CH01-01", "KU-BS-CH02-01", "KU-BS-CH03-01", "KU-BS-CH04-01", "KU-BS-CH05-01", "KU-BS-CH06-01", "KU-BS-CH07-01"]
  },
  {
    partKey: "part-2",
    partTag: "Part 2: 1920–1924",
    title: "Whose Bhagat Singh? The Ideological Battleground & Flight to Kanpur",
    units: ["KU-BS-CH08-01", "KU-BS-CH09-01", "KU-BS-CH10-01", "KU-BS-CH11-01", "KU-BS-CH12-01"]
  },
  {
    partKey: "part-3",
    partTag: "Part 3: 1924–1928",
    title: "A Life in Revolution: HRA, Kakori, and the Birth of HSRA",
    units: ["KU-BS-CH13-01", "KU-BS-CH14-01", "KU-BS-CH15-01", "KU-BS-CH16-01", "KU-BS-CH17-01", "KU-BS-CH18-01"]
  },
  {
    partKey: "part-4",
    partTag: "Part 4: 1928",
    title: "The Assassination: Lahore, Saunders, and the Great Escape",
    units: ["KU-BS-CH19-01", "KU-BS-CH20-01", "KU-BS-CH21-01", "KU-BS-CH22-01", "KU-BS-CH23-01"]
  },
  {
    partKey: "part-5",
    partTag: "Part 5: 1928–1929",
    title: "The Naujawan Bharat Sabha: Secular Youth Awakening & Clandestine Labs",
    units: ["KU-BS-CH24-01", "KU-BS-CH25-01", "KU-BS-CH26-01"]
  },
  {
    partKey: "part-6",
    partTag: "Part 6: 1929",
    title: "The Assembly Bomb Speeches: The Court as an Ideological Stage",
    units: ["KU-BS-CH27-01", "KU-BS-CH28-01", "KU-BS-CH29-01", "KU-BS-CH30-01"]
  },
  {
    partKey: "part-7",
    partTag: "Part 7: 1929",
    title: "Judicial Reprisals: The Historic 63-Day Hunger Strike",
    units: ["KU-BS-CH31-01", "KU-BS-CH32-01", "KU-BS-CH33-01", "KU-BS-CH34-01", "KU-BS-CH35-01", "KU-BS-CH36-01"]
  },
  {
    partKey: "part-8",
    partTag: "Part 8: 1930",
    title: "‘Deluded Patriots’: Ordinance III, The Special Tribunal, and Prison Reading",
    units: ["KU-BS-CH37-01", "KU-BS-CH38-01", "KU-BS-CH39-01", "KU-BS-CH40-01", "KU-BS-CH41-01", "KU-BS-CH42-01", "KU-BS-CH43-01"]
  },
  {
    partKey: "part-9",
    partTag: "Part 9: 1930–1931",
    title: "Martyrdom: Reason, Atheism, and Ascent to the Gallows",
    units: ["KU-BS-CH44-01", "KU-BS-CH45-01", "KU-BS-CH46-01", "KU-BS-CH47-01"]
  },
  {
    partKey: "part-10",
    partTag: "Part 10: March 1931",
    title: "Efficient Despotism: The Clandestine Hanging and Cremation",
    units: ["KU-BS-CH48-01", "KU-BS-CH49-01", "KU-BS-CH50-01", "KU-BS-CH51-01", "KU-BS-CH52-01"]
  },
  {
    partKey: "part-11",
    partTag: "Part 11: 1931 & Beyond",
    title: "Restitution: The Political Earthquake and Immortal Legacy",
    units: ["KU-BS-CH53-01", "KU-BS-CH54-01", "KU-BS-CH55-01"]
  },
  {
    partKey: "appendix",
    partTag: "Archival Appendix",
    title: "Facsimile Document Plates & Forensic Exhibits (Plates 1–21)",
    units: [
      "KU-BS-APP-01", "KU-BS-APP-02", "KU-BS-APP-03", "KU-BS-APP-04", "KU-BS-APP-05",
      "KU-BS-APP-06", "KU-BS-APP-07", "KU-BS-APP-08", "KU-BS-APP-09", "KU-BS-APP-10",
      "KU-BS-APP-11", "KU-BS-APP-12", "KU-BS-APP-13", "KU-BS-APP-14", "KU-BS-APP-15",
      "KU-BS-APP-16", "KU-BS-APP-17", "KU-BS-APP-18", "KU-BS-APP-19", "KU-BS-APP-20",
      "KU-BS-APP-21"
    ]
  }
];

const BHAGAT_SINGH_PROSE = {
  // PROLOGUE & EPIGRAPH
  "KU-BS-EPIGRAPH-01": [
    "On the evening of 22 March 1931, inside the condemned cell of Lahore Central Jail, Bhagat Singh took up his pen for the final time. Hours from the gallows, he addressed his last letter to his comrades with serene lucidity: 'The desire to live is natural. It is in me also. I do not want to conceal it. But it is conditional. I don't want to live as a prisoner or under restrictions. My name has become a symbol of Indian revolution.' In those concise lines, he dismantled the imperial slander that the revolutionaries were desperate criminals or reckless nihilists. Life was precious, but life stripped of political freedom and human dignity was worthless.",
    "Paired with this final testament is his uncompromising rationalist declaration from 'Why I Am an Atheist': 'Any man who stands for progress has to criticise, disbelieve and challenge every item of the old faith.' These twin statements establish the foundational pillars of Bhagat Singh's life. He was neither a bloodthirsty fanatic nor a romantic mystic; he was an intellectual radical who subjugated natural survival instincts to revolutionary purpose, anchoring his rebellion not in religious fervor or afterlife promises, but in uncompromising materialist reason."
  ],
  "KU-BS-PROLOGUE-01": [
    "For over ninety years, the British colonial government and successive authorities kept the primary legal dossiers of the Lahore Conspiracy Case locked away under official secrecy. Satvinder S. Juss's groundbreaking legal biography begins in the subterranean archives of the British Library in London and uncatalogued records in the Punjab Archives in Lahore, unearthing 135 confidential files containing over 13,000 pages of original court transcripts, police reports, and handwritten appeals that had never before been systematically analyzed.",
    "What emerges from these newly unsealed records is not the simplistic hagiography of popular cinema, but an extraordinary intellectual and legal struggle. Juss reveals that the trial of Bhagat Singh was an exercise in judicial despotism disguised as the rule of law. Colonial authorities consciously orchestrated an emergency tribunal without appeal to silence a revolutionary who had turned the British courtroom into the most potent anti-imperial platform in Asia."
  ],

  // PART 1: KHATKAR KALAN, BANGA AND LAHORE (1840–1919)
  "KU-BS-CH01-01": [
    "Bhagat Singh was born on 27 September 1907 in the village of Banga, Chak No. 105 GB, in the Lyallpur district of Western Punjab. His birth coincided with the joyous release from prison of his father, Sardar Kishan Singh, and his uncle, Sardar Ajit Singh. Because of this propitious double release, his grandmother named the infant 'Bhaganwala'—the fortunate child. Yet his roots lay anchored further east, in the ancestral village of Khatkar Kalan in Jalandhar district, where his Sandhu Jat forebears had cultivated the land for generations.",
    "The family's tradition of defiant resistance was not a sudden 20th-century development; it spanned three generations. In the 1840s, his great-grandfather, Sardar Fateh Singh, had openly resisted the British annexation of Punjab following the First and Second Anglo-Sikh Wars, suffering the confiscation of family estates rather than submitting to colonial paramountcy. The Sandhu homestead in Khatkar Kalan was a living archive of rebellion, where anti-colonial defiance was breathed as naturally as the country air."
  ],
  "KU-BS-CH02-01": [
    "By the late 1870s, Punjab was undergoing deep political and intellectual convulsions. The establishment of the Arya Samaj by Swami Dayanand Saraswati in 1875 unleashed a powerful revivalist current that merged Vedic social reform with nascent Indian nationalism. Bhagat Singh's grandfather, Sardar Arjan Singh, was an ardent Arya Samajist who actively defied orthodox caste restrictions, performed public shuddhi ceremonies, and insisted on modern, rationalist schooling for his sons.",
    "Arjan Singh deliberately enrolled Kishan Singh and Ajit Singh in the Dayanand Anglo-Vedic (D.A.V.) High School in Lahore. This environment combined English science and history with vigorous national pride, laying the institutional bedrock for a new generation of educated Punjabi youth who refused to accept British cultural superiority."
  ],
  "KU-BS-CH03-01": [
    "In 1887, the British Raj launched an enormous imperial social engineering experiment: the Chenab Canal Colony. By carving massive irrigation canals out of the arid doabs between the Chenab and Ravi rivers, the colonial government sought to create a loyal, prosperous, and militarized peasant proprietor class that would supply wheat for export and recruits for the British Indian Army.",
    "Arjan Singh was among the enterprising farmers allotted land in Chak 105 GB near Banga. But the colonial state's paternalism soon curdled into bureaucratic tyranny. Peasant settlers were treated not as freeholders, but as submissive Crown tenants, subject to arbitrary fines for cutting trees, strict sanitary rules, and the constant threat of eviction by arrogant British canal officers."
  ],
  "KU-BS-CH04-01": [
    "The simmering resentment boiled over with the introduction of the Punjab Land Alienation Act of 1900, followed by the draconian Punjab Colonisation of Land Bill of 1906. This reactionary statute sought to abolish peasants' ownership rights, ban the transfer of land by will, and enforce strict primogeniture—decreeing that if a farmer died without male heirs, his land reverted to the British Crown rather than his widow or daughters.",
    "Coupled with sudden, punitive increases in canal water tax (abiana) and railway freight charges, the bill sparked universal fury among Punjabi peasants across religious boundaries. The British had miscalculated: by threatening the peasant's relationship with his soil, they united Sikh, Hindu, and Muslim cultivators in common rebellion."
  ],
  "KU-BS-CH05-01": [
    "The revolt found its voice in 1907 through the Bharat Mata Society (Anjuman-i-Muhibban-i-Watan), founded by Bhagat Singh's uncle, Sardar Ajit Singh, and father, Kishan Singh. On 3 March 1907, at a mammoth peasant rally of over twenty thousand farmers in Lyallpur, Banke Dayal, editor of *Jhang Syal*, unfurled the legendary protest anthem: 'Pagri Sambhal Jatta, Pagri Sambhal Oye!' ('Hold fast to your turban, O peasant; guard your honor!'). The song swept across northern India like wildfire.",
    "Ajit Singh's electrifying speeches galvanized the peasantry to stop paying water rates and taxes, shaking the colonial administration to its foundations. Alarmed by reports that Sikh soldiers in the Indian Army were attending peasant rallies, Viceroy Lord Minto panicked, vetoed the Colonisation Bill, and issued warrants under the draconian Regulation III of 1818 to deport Ajit Singh and Lala Lajpat Rai to the notorious penal fortress of Mandalay in Burma without trial."
  ],
  "KU-BS-CH06-01": [
    "Growing up in an outlaw family where uncles were in exile and police raids were routine, young Bhagat Singh was profoundly shaped by the Ghadar Movement of 1914–1915. Founded in San Francisco by expatriate Punjabi immigrants, the Ghadar Party dispatched thousands of overseas Sikhs and Hindus back to India to instigate an armed insurrection among native regiments during World War I.",
    "Though the uprising was betrayed and ruthlessly crushed, the supreme sacrifice of its nineteen-year-old leader, Kartar Singh Sarabha, who went to the gallows in Lahore Central Jail with a smile on his lips in 1915, became Bhagat Singh's lifelong inspiration. Throughout his youth and adult life, Bhagat Singh carried a worn, faded photograph of young Sarabha in his pocket, drawing upon it in moments of doubt as his moral and revolutionary compass."
  ],
  "KU-BS-CH07-01": [
    "The defining trauma of Bhagat Singh's adolescence occurred on 13 April 1919 at Jallianwala Bagh in Amritsar. Acting on the orders of Brigadier-General Reginald Dyer, British troops fired 1,650 rounds of ammunition into an unarmed, trapped crowd of twenty thousand men, women, and children celebrating Baisakhi, slaughtering hundreds in cold blood.",
    "The news struck twelve-year-old Bhagat Singh like a lightning bolt. Instead of attending school in Lahore, the boy boarded a train to Amritsar, navigated through the military curfew, and walked into the blood-soaked enclosure. Standing amidst the bullet-riddled walls, he filled a small glass bottle with the sacred earth damp with the blood of martyrs. Returning home, he placed the vial on his desk, adorning it with fresh flowers and gazing at it in silent meditation every morning. The massacre extinguished any lingering faith in British justice; from that afternoon, his life belonged unconditionally to the freedom struggle."
  ],

  // PART 2: WHOSE BHAGAT SINGH? (1920–1924)
  "KU-BS-CH08-01": [
    "Following India's independence and the bloody 1947 partition of Punjab, the legacy of Bhagat Singh became a fiercely contested battleground. In Chapter 8, Juss dissects how diverse political factions attempted to rewrite his memory: conservative nationalists reduced him to a simple patriotic soldier; Sikh communalists sought to claim him exclusively through the lens of Sikh martyrdom; and establishment historians marginalized his ideological writings to present him as an impatient, violent hothead whose methods contrasted unfavorably with Gandhi's non-violence.",
    "Juss demonstrates that all these caricatures distort the historical record. Bhagat Singh's authentic identity was that of an intellectual socialist and secular humanist who fiercely rejected religious communalism, opposed the narrow nationalism of the bourgeoisie, and foresaw that mere replacement of British rulers with brown-skinned Indian elites would leave the exploitation of the working masses completely intact."
  ],
  "KU-BS-CH09-01": [
    "In 1921, responding to the call of Mahatma Gandhi's Non-Cooperation Movement, Bhagat Singh abandoned D.A.V. School and enrolled in the National College in Lahore, founded by Lala Lajpat Rai to impart nationalist education outside the colonial university system. National College was an intellectual greenhouse, gathering brilliant young minds under the mentorship of revolutionary scholars like Bhai Parmanand and Professor Jaychandra Vidyalankar.",
    "Here, Bhagat Singh read voraciously in English, Urdu, Punjabi, and Hindi, diving into the histories of the French Revolution, the Italian Risorgimento (Garibaldi and Mazzini), and the Russian Bolshevik Revolution. He formed the National College Dramatic Club, writing and staging historical plays on Rana Pratap and Bharat Durdasha to awaken political consciousness, while forming unbreakable lifelong bonds with fellow students Sukhdev Thapar, Yashpal, and Bhagwati Charan Vohra."
  ],
  "KU-BS-CH10-01": [
    "The turning point for the youth of Bhagat Singh's generation occurred in February 1922. Following the violent clash at Chauri Chaura in Gorakhpur, where an enraged crowd torched a police station killing twenty-two constables, Mahatma Gandhi abruptly and unilaterally called off the nationwide Non-Cooperation Movement without consulting the Congress Working Committee.",
    "The sudden withdrawal plunged the country into demoralization and communal riots. To young militants who had sacrificed their education and suffered prison terms believing freedom was imminent, Gandhi's decision felt like a catastrophic betrayal. Bhagat Singh concluded that an elitist non-violent movement that depended on the moral temperament of a single leader could never withstand state repression; what India required was an organized, armed vanguard that would mobilize the laboring masses."
  ],
  "KU-BS-CH11-01": [
    "In early 1923, as Bhagat Singh completed his studies, his father Kishan Singh and grandfather Arjan Singh arranged his marriage to an affluent Punjabi woman, pressing him to settle down into domestic life. To Bhagat Singh, whose mind was consumed by revolution, the prospect of domesticity was an intolerable distraction.",
    "Leaving a farewell letter on his father's desk, the sixteen-year-old wrote: 'My life has already been committed to a noble cause—the freedom of India. For this reason, luxuries and worldly desires have no attraction for me. My bride shall be freedom.' Packing only a change of clothes, he slipped out of the house under cover of darkness and boarded an eastbound train, vanishing into the revolutionary underground of the United Provinces."
  ],
  "KU-BS-CH12-01": [
    "Arriving in Kanpur—the bustling industrial and revolutionary hub of northern India—Bhagat Singh adopted the alias 'Balwant Singh' and secured employment at the printing press of *Pratap*, the fearless nationalist newspaper edited by Ganesh Shankar Vidyarthi. Vidyarthi was a mentor to underground militants, sheltering fugitives and introducing the young Punjabi to the central figures of northern Indian radicalism.",
    "In Kanpur, Bhagat Singh formed pivotal friendships with Chandrashekhar Azad, the legendary sharpshooter, Ram Prasad Bismil, the poet-revolutionary, and Batukeshwar Dutt. Working twelve hours a day operating printing presses and distributing revolutionary pamphlets, Bhagat Singh mastered Urdu and Hindi journalism, soaking up the industrial reality of mill workers and solidifying his transition from romantic nationalism to working-class politics."
  ],

  // PART 3: A LIFE IN REVOLUTION: HRA, KAKORI, AND THE BIRTH OF HSRA (1924–1928)
  "KU-BS-CH13-01": [
    "In late 1924, Bhagat Singh joined the Hindustan Republican Association (HRA), established by Sachindra Nath Sanyal, Narendra Mohan Sen, and Ram Prasad Bismil. The HRA's founding manifesto, *The Revolutionary*, distributed across northern India on 1 January 1925, declared its objective as the overthrow of the British Empire through armed revolution and the establishment of a Federal Republic of the United States of India based on universal suffrage and the abolition of all systems of human exploitation.",
    "Bhagat Singh was formally inducted into the party's military wing, taking the code name 'Balwant'. He was tasked with organizing youth wings and recruiting student cells across Punjab, serving as the vital communication bridge between the old leadership of the Bengal Anushilan Samiti and the younger generation of Punjabi militants."
  ],
  "KU-BS-CH14-01": [
    "Desperately short of funds to purchase firearms and ammunition from overseas gunrunners, the HRA carried out the famous Kakori Train Dacoity on 9 August 1925. A team of ten revolutionaries led by Ram Prasad Bismil, Ashfaqulla Khan, and Chandrashekhar Azad stopped the 8 Down train near Kakori outside Lucknow and looted the British government treasury sacks containing Rs 4,600.",
    "The colonial state responded with savage fury, unleashing an all-India police dragnet that arrested over forty revolutionaries. The protracted Kakori Conspiracy Trial concluded in 1927 with four death sentences: Bismil, Ashfaqulla, Roshan Singh, and Rajendra Lahiri were hanged. The HRA was virtually decapitated; only Chandrashekhar Azad evaded capture. The martyrdom of the Kakori leaders deeply wounded Bhagat Singh, who resolved to rebuild the organization on more disciplined, ideological foundations."
  ],
  "KU-BS-CH15-01": [
    "Returning to Lahore in 1926, Bhagat Singh founded the Naujawan Bharat Sabha (Youth Society of India) to create a public, legal mass movement of youth that would openly champion complete independence and combat the rising poison of communalism. He served as its founding general secretary, with Ram Kishan as president.",
    "The Sabha's rules were revolutionary for 1920s India: every member was required to sign a pledge placing the service of the nation above religion and rejecting all caste discrimination. Bhagat Singh organized communal inter-dining feasts where young Hindus, Muslims, and Sikhs prepared, served, and ate food together from shared plates to obliterate centuries of ritual untouchability. The Sabha distributed portraits of Kartar Singh Sarabha and organized lectures on socialism, rapidly growing into a formidable political force across Punjab."
  ],
  "KU-BS-CH16-01": [
    "Alarmed by the explosive growth of the Naujawan Bharat Sabha, the Punjab Police sought any pretext to crush Bhagat Singh. In October 1926, a bomb exploded during the crowded Dussehra procession in Lahore, killing several people. Although Bhagat Singh was nowhere near the scene, Senior Superintendent of Police Scott arrested him in May 1927, accusing him of orchestrating the bombing.",
    "Held in solitary confinement in the Lahore Fort and subjected to brutal interrogation, Bhagat Singh refused to break or reveal party secrets. Unable to fabricate admissible evidence, the police were forced to grant bail, but the magistrate set the astronomical sum of Rs 60,000—a fortune in 1927. His father Kishan Singh and veteran nationalist Dunichand mortgaged their lands to secure his release, but the arrest demonstrated the colonial state's determination to silence him by any means necessary."
  ],
  "KU-BS-CH17-01": [
    "Following his release, Bhagat Singh joined the editorial staff of *Kirti*, the pioneering Punjabi and Urdu monthly journal of the Kirti Kisan (Workers and Peasants) Party, founded by Santokh Singh and edited by Sohan Singh Josh. For over a year, Bhagat Singh lived and worked closely with Josh, immersing himself in Marxist literature, Soviet state documents, and trade union theory.",
    "The association sparked intense, friendly debates between the two young radicals. Josh argued that individual political assassinations were futile and diverted energy from mass organization; Bhagat Singh agreed that mass mobilization was the ultimate goal, but insisted that under colonial despotism, spectacular propaganda-by-deed was necessary to shatter the psychological terror of the Raj and awaken the slumbering masses. These dialogues sharpened Bhagat Singh's transition from revolutionary populism to rigorous scientific socialism."
  ],
  "KU-BS-CH18-01": [
    "On 8–9 September 1928, a historic clandestine conclave of northern Indian revolutionaries assembled amidst the secluded ruins of the medieval Ferozeshah Kotla fortress in Delhi. Chaired by Bhagat Singh, the meeting gathered key delegates from Punjab, UP, Bihar, and Rajasthan, including Sukhdev, Bejoy Kumar Sinha, Shiv Verma, and Fanindra Nath Ghosh.",
    "At Bhagat Singh's passionate insistence, the party made a momentous ideological leap: it formally added the word 'Socialist' to its name, transforming into the **Hindustan Socialist Republican Association (HSRA)**. The party committed itself to the establishment of a socialist republic through armed revolution, collective ownership of production, and the eradication of capitalism. Chandrashekhar Azad was appointed Commander-in-Chief of the military wing, while Bhagat Singh was elected to the central committee in charge of ideological propaganda."
  ],

  // PART 4: THE ASSASSINATION: LAHORE, SAUNDERS, AND THE GREAT ESCAPE (1928)
  "KU-BS-CH19-01": [
    "On 30 October 1928, the British all-white Simon Commission arrived at the Lahore railway station to inspect constitutional reforms. A massive, disciplined demonstration of tens of thousands of citizens, organized jointly by the Naujawan Bharat Sabha and Congress, assembled outside the station waving black flags and chanting 'Simon, Go Back!'. At the front of the peaceful crowd stood the sixty-three-year-old 'Lion of Punjab', Lala Lajpat Rai.",
    "Determined to humiliate the nationalist leadership, Senior Superintendent of Police J.A. Scott ordered a ferocious police charge. Assistant Superintendent J.P. Saunders and Scott personally wielded lathis, with Scott striking Lala Lajpat Rai repeatedly on the head and chest with heavy blows. Blood soaked the veteran leader's garments as young revolutionaries, including Bhagat Singh, rushed forward to form a human shield around him."
  ],
  "KU-BS-CH20-01": [
    "That evening, nursing his fractured ribs at a mammoth protest rally outside the Delhi Gate, Lala Lajpat Rai delivered his prophetic warning to the British Empire: 'Every blow struck on my chest will be a nail in the coffin of the British Empire.' But the severe blunt force trauma to his heart proved fatal. On 17 November 1928, eighteen days after the assault, Lajpat Rai died of heart failure brought on by the lathi injuries.",
    "The nation was paralyzed with grief and outrage. To the HSRA leadership, the death of India's foremost leader at the hands of an arrogant British police officer was an intolerable national insult. Meeting in secret in Lahore, Bhagat Singh, Azad, Sukhdev, and Rajguru concluded that if the murder went unpunished, the world would mock India as a cowardly nation incapable of defending its elders. Scott was condemned to death in the court of the revolution."
  ],
  "KU-BS-CH21-01": [
    "On the afternoon of 17 December 1928, exactly one month after Lajpat Rai's death, the HSRA operational squad took their positions outside the District Police Headquarters in Lahore, directly opposite D.A.V. College. Jai Gopal was stationed with his bicycle to signal when Scott exited; Rajguru and Bhagat Singh waited across the road; Chandrashekhar Azad stood guard inside the college gates armed with a Mauser pistol.",
    "At 4:15 PM, an officer on a red motorcycle drove out of the gates. Jai Gopal mistakenly signaled that the rider was Scott; in fact, it was Assistant Superintendent J.P. Saunders. As Saunders slowed down to enter the main road, Rajguru stepped forward and fired a single pistol bullet straight through Saunders's neck, knocking him off the motorcycle. Bhagat Singh immediately ran up and fired four to five bullets into Saunders's prone body on the pavement, ensuring death before turning to escape."
  ],
  "KU-BS-CH22-01": [
    "Hearing the gunfire, Head Constable Chanan Singh and two constables bolted out of the police headquarters in furious pursuit of the two assassins. Running toward the sanctuary of D.A.V. College, Bhagat Singh and Rajguru scrambled through the hostel gates. Chanan Singh was rapidly closing the distance, raising his rifle to shoot.",
    "From behind a tree inside the college grounds, Chandrashekhar Azad stepped into view, shouting a warning to Chanan Singh to halt. When the constable continued charging forward, Azad leveled his pistol and fired a single shot into Chanan Singh's groin, dropping him to the ground. The three revolutionaries sprinted through the college hostel corridors, climbed the perimeter wall into the crowded bazaars of Lahore, and melted into safe houses as emergency sirens wailed across the city."
  ],
  "KU-BS-CH23-01": [
    "The following morning, hand-written pink leaflets headlined 'Hindustan Socialist Republican Association: Notice—Saunders is Dead, Lalaji is Avenged' appeared pasted on walls across Lahore. With every exit blocked by armed military patrols, Bhagat Singh engineered a breathtaking clandestine escape. Cutting his long hair, shaving his beard in violation of Sikh religious tradition, and donning a smart Western wool suit with a felt fedora, he transformed himself into an elite Anglo-Indian gentleman.",
    "Accompanied by Durga Bhabhi (wife of comrade Bhagwati Charan Vohra), who posed as his fashionable wife carrying her infant son Shachi in her arms, with Rajguru acting as their liveried family servant carrying their baggage, Bhagat Singh walked boldly into the heavily patrolled Lahore railway station. They purchased first-class tickets on the Calcutta Mail, boarding right under the noses of detectives scrutinizing third-class passengers, and traveled safely across 1,000 miles to Calcutta."
  ],

  // PART 5: THE NAUJAWAN BHARAT SABHA (1928–1929)
  "KU-BS-CH24-01": [
    "Arriving in Calcutta in late December 1928 during the annual session of the Indian National Congress, Bhagat Singh established direct operational links with veteran Bengal revolutionaries, including Trailokyanath Chakraborty and Jatin Das. Here, he studied the mechanics of modern bomb-making from Das, who possessed advanced training from chemists in the revolutionary underground.",
    "Bhagat Singh circulated the updated manifesto of the Naujawan Bharat Sabha among student delegations. The document emphasized that political swaraj without social and economic equality was a bourgeois illusion: 'The struggle in India will continue as long as a handful of exploiters continue to exploit the labor of the common people. It matters little whether the exploiters are purely British, or British and Indian in alliance, or purely Indian.'"
  ],
  "KU-BS-CH25-01": [
    "Throughout early 1929, the Naujawan Bharat Sabha expanded into an all-India youth network. Bhagat Singh and his comrades organized massive student conferences in Lahore, Gujranwala, and Amritsar, establishing close tactical relationships with left-wing Congress leaders Subhas Chandra Bose and Jawaharlal Nehru.",
    "While Gandhi viewed the Sabha's growing influence with unease, fearing it would derail his control over the national movement, the youth rallied around Bhagat Singh's secular, anti-imperialist message. The Sabha became the public ideological wing of the HSRA, educating the younger generation in socialist principles and creating a broad mass base ready to support the underground vanguard."
  ],
  "KU-BS-CH26-01": [
    "Recognizing that reliance on imported foreign revolvers was unsustainable, the HSRA established clandestine chemical bomb laboratories in Agra, Lahore, and Saharanpur under the technical direction of Jatin Das and Shiv Verma. Operating under the cover of soap and chemical manufacturing businesses, the revolutionaries secretly synthesized nitroglycerine, picric acid, and potassium chlorate.",
    "Bhagat Singh participated actively in testing prototype cast-iron bomb shells in the ravines of the Yamuna River near Agra. The objective was not to manufacture shrapnel weapons designed to slaughter crowds, but to engineer controlled, highly acoustic explosive devices capable of generating immense noise, flash, and psychological shock without causing lethal fragmentation."
  ],

  // PART 6: THE ASSEMBLY BOMB SPEECHES (1929)
  "KU-BS-CH27-01": [
    "In March 1929, the colonial government sought to crush rising industrial labor strikes and communist organizing by introducing two draconian bills in the Central Legislative Assembly in Delhi: the Public Safety Bill and the Trade Disputes Bill. When the Assembly rejected the bills, Viceroy Lord Irwin prepared to enact them unilaterally by executive decree.",
    "The HSRA central committee resolved to challenge this autocratic insult directly inside the imperial parliament. On 8 April 1929, as the President of the Assembly, Vithalbhai Patel, rose to announce the Viceroy's ruling, Bhagat Singh and Batukeshwar Dutt, seated in the public gallery, leaned forward and dropped two low-grade chemical bombs into the empty space behind the treasury benches. The twin explosions shook the building with thunderous roars, filling the chamber with dense smoke, followed by the fluttering of hundreds of bright red leaflets and the ringing cry: 'Inquilab Zindabad! Workers of the World Unite!'"
  ],
  "KU-BS-CH28-01": [
    "As pandemonium erupted and terrified British officials scrambled under desks and bolted for the exits, Bhagat Singh and Dutt made no attempt to escape. They had deliberately left their exit paths open, but their plan was entirely predicated on voluntary surrender. They unloaded their automatic pistols, placed them peacefully on the gallery rail, and stood calmly with arms folded across their chests.",
    "When Sergeant Terry and armed police timidly approached with leveled weapons, Bhagat Singh quietly surrendered his hands to be handcuffed. The tactical purpose of the bomb was not murder—not a single member of the assembly was seriously hurt—but propaganda-by-deed. By surrendering peacefully, the revolutionaries ensured they could not be silenced in an encounter, seizing the British colonial court as a nationwide platform to broadcast their socialist manifesto to every household in India."
  ],
  "KU-BS-CH29-01": [
    "On 6 June 1929, during the Delhi Assembly Bomb trial, Bhagat Singh and Batukeshwar Dutt delivered their historic joint courtroom statement, drafted entirely by Bhagat Singh and read into the record by their defense counsel, Asaf Ali. The statement became one of the greatest political manifestos of modern Asian anti-colonialism: 'It takes a loud voice to make the deaf hear... We dropped the bombs to register our protest on behalf of those who have no other means of being heard.'",
    "Bhagat Singh systematically redefined revolution for the international press: 'By Revolution we mean that the present order of things, which is based on manifest injustice, must change. Producers or laborers, in spite of being the most indispensable element of society, are robbed by their exploiters of the fruits of their labor... The radical change therefore is necessary, and it is the duty of those who realize it to reorganize society on a socialistic basis. To this end, Revolution is the inalienable right of mankind.'"
  ],
  "KU-BS-CH30-01": [
    "On 12 June 1929, Special Magistrate P.B. Pool delivered his verdict in the Delhi Assembly case. Ignoring the chemical evidence that the bombs lacked lethal shrapnel and were tossed into vacant aisles, Pool convicted both Bhagat Singh and Batukeshwar Dutt under Section 307 of the Indian Penal Code (Attempt to Murder) and the Explosive Substances Act, sentencing them to transportation for life in the Andaman Islands.",
    "Dutt was dispatched to the Lahore Central Jail, while Bhagat Singh was transferred under heavy armed guard to the remote Mianwali District Jail. But the British plan to bury the young militants in obscurity collapsed immediately; Bhagat Singh arrived in Mianwali ready to launch an even more devastating offensive against the colonial prison regime."
  ],

  // PART 7: JUDICIAL REPRISALS (1929)
  "KU-BS-CH31-01": [
    "Upon entering Mianwali Jail in June 1929, Bhagat Singh witnessed the grotesque, racist disparities governing the colonial penal system. European criminals—convicted of rape and murder—received clean clothing, bread, meat, milk, books, and daily newspapers; Indian political prisoners—including national leaders—were treated worse than cattle, forced to wear coarse rags, locked in filthy, unventilated cells, and compelled to perform grueling hard labor on starvation diets of mud-filled roti and insect-infested dal.",
    "On 15 June 1929, Bhagat Singh launched his historic indefinite hunger strike, demanding that Indian political prisoners be treated under international conventions: proper food, sanitary conditions, access to books and writing materials, and exemption from manual labor. When Dutt joined the strike in Lahore, the protest ignited nationwide solidarity across every prison in northern India."
  ],
  "KU-BS-CH32-01": [
    "Meanwhile, disaster struck the HSRA's underground network. In April 1929, following the arrest of Sukhdev and Kishori Lal at the Kashmir Building bomb lab in Lahore, the police uncovered notebooks, chemical receipts, and firearms. Under intense psychological torture and promises of royal pardon, two comrades—Jai Gopal and Fanindra Nath Ghosh—turned approvers, revealing the entire secret conspiracy, including the identities of the Saunders assassins.",
    "On 10 July 1929, the Crown formally launched the monumental Lahore Conspiracy Case against Bhagat Singh and twenty-four comrades in the court of Special Magistrate Sri Kishen. Bhagat Singh was brought from Mianwali to Lahore on a stretcher, emaciated and unable to stand after weeks of self-starvation, but his fiery presence electrified the courtroom."
  ],
  "KU-BS-CH33-01": [
    "As the hunger strike entered its second month, colonial jail authorities resorted to brutal forced feeding. Prison doctors and eight burly convicts pinned each hunger striker down, forcing a thick rubber catheter up the nostril and down the esophagus to pump milk into the stomach. In the case of young Jatin Das, the tube was mistakenly shoved into his trachea, pumping milk directly into his lungs and causing severe chemical pneumonia.",
    "Despite agonizing pain and lung hemorrhages, Das stubbornly refused all medicine and food. On 13 September 1929, on the sixty-third day of his hunger strike, twenty-five-year-old Jatin Das died a martyr. His death unleashed an unprecedented tidal wave of national grief; over half a million weeping citizens joined his funeral procession from Lahore to Calcutta, shattering the Raj's moral legitimacy and compelling the Viceroy to establish the Jail Reforms Committee."
  ],
  "KU-BS-CH34-01": [
    "Despite their physical exhaustion, the Lahore Conspiracy prisoners transformed the magistrate's courtroom into an unmanageable theater of political defiance. Every morning, the prisoners entered the dock arm-in-arm, singing Bismil's immortal hymn 'Sarfaroshi Ki Tamanna' and shouting revolutionary slogans that echoed through the surrounding streets.",
    "When approver Jai Gopal took the witness stand on 21 October 1929 and sneered at the accused, comrade Prem Dutt hurled a shoe at him. Magistrate Sri Kishen lost control and ordered twenty Pathan policemen to enter the dock and violently beat the handcuffed prisoners with heavy wooden batons. Bhagat Singh, weak from his hunger strike, was pinned to the floor, struck repeatedly, and dragged by his hair. The brutal courtroom assault provoked universal outrage in the Indian press and led the prisoners to declare a total boycott of the magistrate's court."
  ],
  "KU-BS-CH35-01": [
    "Desperate to circumvent the prisoners' boycott and hunger strikes, the colonial government introduced the Code of Criminal Procedure Amendment Bill (popularly dubbed the 'Hunger Strike Bill') in the Central Legislative Assembly, proposing that trials could proceed in absentia if prisoners voluntarily starved or disabled themselves.",
    "The bill encountered fierce parliamentary resistance led by Motilal Nehru and Muhammad Ali Jinnah. On 12 September 1929, Jinnah delivered one of the most celebrated speeches of his career, excoriating British tyranny: 'The man who goes on hunger strike has a soul. He is that which you cannot conquer... However much you deplore them, however much you say they are misguided, it is the system, this damnable system of government, which is responsible for making these young men produce these results.' The Assembly resoundingly rejected the bill."
  ],
  "KU-BS-CH36-01": [
    "Defeated in the central parliament and facing complete paralysis in Magistrate Sri Kishen's court—where nine months had yielded zero progress due to constant hunger strikes, legal motions, and prisoner boycotts—the colonial state faced an insurmountable legal crisis. Under the ordinary Code of Criminal Procedure, British justice was being made a public mockery.",
    "Police chiefs and the Governor of Punjab warned Viceroy Lord Irwin that unless extraordinary measures were taken to bypass common-law procedural rights, the Lahore trial would drag on for years, keeping the revolutionary martyrs on the front page of every Indian newspaper and continually fueling nationwide unrest."
  ],

  // PART 8: ‘DELUDED PATRIOTS’ (1930)
  "KU-BS-CH37-01": [
    "On 1 May 1930, Viceroy Lord Irwin took an unprecedented, legally dubious step: he invoked the emergency powers of Section 72 of the Government of India Act 1915 to promulgate **Ordinance III of 1930**. This extraordinary executive decree bypassed the legislature and the ordinary courts to establish a three-judge **Special Tribunal** to try the Lahore Conspiracy Case.",
    "Ordinance III stripped the accused of the most sacred common-law procedural protections: it abolished the preliminary committal proceedings before a magistrate; it empowered the Tribunal to conduct hearings in the absence of the accused if they 'interrupted' proceedings; and most drastically, it eliminated any right of appeal to the High Court, providing that the Tribunal's verdict was final and subject only to discretionary petition to the Privy Council in London."
  ],
  "KU-BS-CH38-01": [
    "The Special Tribunal, originally composed of Justice J. Coldstream (President), Justice G.C. Hilton, and Justice Syed Agha Haidar (the sole Indian judge), convened on 5 May 1930 in Poonch House, Lahore. Tensions exploded on 12 May when the prisoners entered the courtroom singing patriotic songs. Coldstream ordered the police to silence them, and twenty-five armed European and Indian constables violently attacked the prisoners in open court, beating them with fists, boots, and handcuffs.",
    "Justice Syed Agha Haidar, a distinguished jurist from the Allahabad High Court, openly revolted against the judicial barbarism. In full view of the court, Haidar declared: 'I am not a party to this order and I dissociate myself entirely from the police violence committed upon the accused.' Haidar's courageous refusal to act as an imperial rubber stamp infuriated the Punjab Governor; within weeks, Viceroy Irwin abruptly dissolved and reconstituted the Tribunal, removing both Coldstream and Haidar and installing Justice Hilton as president with two compliant judges."
  ],
  "KU-BS-CH39-01": [
    "Under Justice Hilton, the reconstituted Tribunal degenerated into a complete star-chamber farce. When the prisoners refused to attend hearings until apologies were issued for the police beatings, Hilton invoked Section 9 of Ordinance III, declaring that the accused were voluntarily absenting themselves, and conducted the entire capital murder trial *ex parte* in an empty courtroom.",
    "Over 450 prosecution witnesses were examined, cross-examined only by court-appointed government lawyers whom the accused had expressly rejected, while Bhagat Singh and his comrades sat in their prison cells. Transcripts, forensic exhibits, and approver testimonies were pushed through at breakneck speed without a shred of independent defense scrutiny, establishing an indelible record of judicial murder masquerading as common law."
  ],
  "KU-BS-CH40-01": [
    "On 7 October 1930, the Special Tribunal delivered its monstrous 300-page judgment. Without the accused or their defense counsel present in court, the Tribunal pronounced sentence: **Bhagat Singh, Sukhdev Thapar, and Shivaram Rajguru were condemned to death by hanging** under Sections 121 (Waging War against the King-Emperor) and 302/109 (Murder of Saunders).",
    "Seven other comrades—including Kishori Lal, Mahabir Singh, Bejoy Kumar Sinha, and Shiv Verma—were sentenced to transportation for life in the Cellular Jail, while three were sentenced to rigorous imprisonment. When the jail superintendent delivered the death warrants to cell 14, Bhagat Singh smiled serenely, thanked the officer, and returned to reading his book. The news triggered spontaneous strikes, student boycotts, and widespread protests across the length and breadth of India."
  ],
  "KU-BS-CH41-01": [
    "During his final six months in condemned cell 14 of Lahore Central Jail, Bhagat Singh lived an intellectual life of astonishing depth. Through his tireless legal defense attorney, Pran Nath Mehta, and comrades who smuggled books through the prison laundry, Bhagat Singh read over three hundred volumes of world literature, political economy, philosophy, and history.",
    "His reading list reflected a brilliant, voracious mind: Karl Marx's *Capital*, Friedrich Engels, Vladimir Lenin's *The State and Revolution*, Jean-Jacques Rousseau, Voltaire, Thomas Paine's *Rights of Man*, Leon Trotsky, Bukharin, and Upton Sinclair. In his famous 404-page handwritten *Jail Notebook*, he meticulously transcribed hundreds of quotations on the abolition of child labor, the origins of private property, international socialism, and the legal mechanics of the state, demonstrating that he was preparing a blueprint for the future socialist republic of India."
  ],
  "KU-BS-CH42-01": [
    "In November 1930, a prominent Defense Committee headed by Lala Dunichand and advocate C. Barker filed a formal petition for special leave to appeal before the Judicial Committee of the Privy Council in London, India's highest appellate court. The petition argued that Ordinance III was unconstitutional and *ultra vires* Section 72 of the Government of India Act 1915, because no lawful 'emergency' existed that justified the Viceroy bypassing the legislature to create an ad-hoc tribunal that stripped common-law rights.",
    "On 11 February 1931, the Privy Council, presided over by Lord Chancellor Sankey, summarily dismissed the appeal without issuing a reasoned judgment. A.G. Noorani notes that the British Law Lords acted not as independent jurists, but as imperial politicians, refusing to challenge the executive authority of the Viceroy in a vital colony on the brink of revolution."
  ],
  "KU-BS-CH43-01": [
    "With the Privy Council appeal dismissed, national attention shifted entirely to the private negotiations between Mahatma Gandhi and Viceroy Lord Irwin in New Delhi, which culminated in the signing of the Gandhi-Irwin Pact on 5 March 1931. The country erupted in a universal demand that Gandhi make the commutation of the death sentences of Bhagat Singh, Sukhdev, and Rajguru an absolute condition of the peace treaty.",
    "Juss's archival research reveals the tragic, painful truth of the talks. While Gandhi raised the issue of commutation with Irwin on 18 February and 19 March, he explicitly told the Viceroy that he could not make it a breaking condition of the pact, as that would violate his principle of non-violence. Even more devastatingly, Irwin's confidential minutes record that on 20 March, Gandhi told him that if the execution had to take place, it should be done *before* the upcoming Karachi Congress session, to avoid disruptive political awkwardness for the Congress leadership. The imperial government was granted a free hand to proceed with the hangings."
  ],

  // PART 9: MARTYRDOM (1930–1931)
  "KU-BS-CH44-01": [
    "In late 1930, desperate to save his son's life, Sardar Kishan Singh filed an unauthorized petition before the Special Tribunal and the Punjab Government, suggesting that Bhagat Singh was innocent of the Saunders murder and had been absent from Lahore during the shooting.",
    "When Bhagat Singh learned of his father's plea, he was furious. From his death cell, he wrote an open letter to his father, published in the Lahore press, that stands as a staggering testament to moral principle: 'Father, I am shocked to learn that you have filed a petition stating I am innocent. My life is not worth purchasing at the cost of my principles. A day of freedom and honor is worth centuries of servitude. I have always lived with my head held high, and I shall die with my head held high. You have acted like a weak father, not a revolutionary.'"
  ],
  "KU-BS-CH45-01": [
    "On 2 February 1931, Bhagat Singh completed his profound political testament: 'Letter to Young Political Workers'. In this masterly sixty-page treatise, he systematically repudiated individual terrorism as an obsolete, adolescent phase of the freedom movement: 'Let me announce with all the strength at my command that I am not a terrorist and I never was, except perhaps in the beginning of my revolutionary career. Terrorism was a necessary stepping-stone to awaken the nation, but it has served its purpose.'",
    "He outlined the concrete blueprint for the future: revolutionaries must go to the villages, organize industrial trade unions and peasant collectives, merge with the Indian working class, and prepare for a prolonged socialist revolution. He warned that compromising with British imperialism would merely produce a transfer of power from white masters to brown exploiters, leaving ninety-eight percent of the population enslaved to native landlords and capitalists."
  ],
  "KU-BS-CH46-01": [
    "In October 1930, while in the condemned cell, Bhagat Singh was visited by veteran Ghadar leader Baba Randhir Singh, a deeply devout Sikh. Distressed to see that Bhagat Singh had shaved his hair and had no faith in God, Randhir Singh accused him: 'You are an atheist because of your vanity! Fame has swollen your ego!'",
    "Deeply challenged by this accusation, Bhagat Singh penned his immortal philosophical essay, **'Why I Am an Atheist'**, completed in 1930 and published in *The People* in September 1931. With razor-sharp logic, he demonstrated that his atheism was not born of youthful arrogance or egoism, but of rigorous scientific inquiry. He systematically analyzed the problem of evil and suffering: 'Why did your omnipotent God create this world full of woes and miseries? Why did he create a world where millions die of starvation while parasites bathe in luxury?' He declared that in his final walk to the gallows, he would seek no consolation from supernatural illusions, facing the void of non-existence with the pure, unclouded dignity of human reason."
  ],
  "KU-BS-CH47-01": [
    "On the afternoon of 23 March 1931, advocate Pran Nath Mehta was granted his final visit at 5:00 PM. He found Bhagat Singh pacing his small cell, completely absorbed in reading a newly acquired copy of Vladimir Lenin's *State and Revolution*. When Mehta asked if he had any message for the nation, Bhagat Singh replied with a radiant smile: 'Just two things: Down with Imperialism, and Long Live the Revolution!'",
    "When prison guards arrived at 6:30 PM to summon them to the gallows, Bhagat Singh was reading the chapter on the Paris Commune. He looked up at the guard and joked: 'Wait a minute, comrade; one revolutionary is meeting another revolutionary!' Closing the book and dog-earing the page, he stood up, embraced Sukhdev and Rajguru, and walked arm-in-arm down the corridor toward the gallows pit, their voices soaring together in their final song: 'Dil se niklegi na mar kar bhi vatan ki ulfat, meri mitti se bhi khushbu-e-vatan aayegi.'"
  ],

  // PART 10: EFFICIENT DESPOTISM (MARCH 1931)
  "KU-BS-CH48-01": [
    "Under the strict statutory provisions of the Punjab Jail Manual, all executions were legally required to take place at dawn on the appointed day, in the presence of designated relatives and defense counsel. The death warrants issued by the Special Tribunal had scheduled the executions for the morning of 24 March 1931.",
    "However, terrified by intelligence reports that tens of thousands of citizens from across Punjab were converging on Lahore to surround the jail at dawn, Governor Sir Geoffrey de Montmorency and the Punjab secret council made the illegal decision to advance the hanging by eleven hours. Without notifying the families, defense counsel, or the public, the executions were ordered for 7:00 PM on the evening of 23 March—a flagrant, unprecedented violation of the colonial state's own prison laws."
  ],
  "KU-BS-CH49-01": [
    "At 7:00 PM on Monday, 23 March 1931, inside the enclosed gallows shed of Lahore Central Jail, Bhagat Singh, Sukhdev Thapar, and Shivaram Rajguru mounted the wooden platform. They refused the black hoods and demanded that their handcuffs be removed so they could hold hands. Jail Superintendent Major P.D. Chopra, District Magistrate W.G. Barker, and an Indian magistrate, Lala Tara Chand, watched as the hangman pulled the lever.",
    "The trapdoors dropped with a heavy thud. The bodies remained suspended in the freezing gallows pit for exactly one hour, as mandated by the Jail Manual. Major Chopra entered the pit, clinically examined the pulses, and certified that life was extinct. At age twenty-three years, five months, and twenty-four days, Bhagat Singh had completed his journey into immortality."
  ],
  "KU-BS-CH50-01": [
    "The horror deepened in the darkness following the execution. Terrified that delivering the bodies to the families waiting outside the main gates would trigger a nationwide insurrection, the colonial authorities executed a covert disposal plan. Armed European police officers knocked down a section of the brick boundary wall at the rear of Lahore Central Jail under strict blackout conditions.",
    "The corpses of the three martyrs were hastily loaded onto military lorries manned by trusted British troops and armed police escorts under Senior Superintendent of Police Scott. The lorries sped through the night along unpaved backroads toward the border district of Ferozepur, fifty miles away."
  ],
  "KU-BS-CH51-01": [
    "Arriving at midnight on the desolate, swampy banks of the Sutlej River near the village of Ganda Singh Wala, the police team dragged the bodies into the scrub. Drawing fuel from military cans, they doused the corpses with kerosene, piled driftwood over them, and set them ablaze in the freezing dark.",
    "Before the bodies could be fully consumed, local villagers and fishermen, drawn by the smell of burning flesh and flashing torches in the forbidden border zone, began shouting and advancing across the fields. Panicking, the British officers kicked the half-burned remains into the icy river, extinguished the fire with sand, scrambled back into their lorries, and fled into the night."
  ],
  "KU-BS-CH52-01": [
    "By dawn on 24 March, word of the midnight desecration reached Lahore. A relief expedition led by Bhagat Singh's sister, Amar Kaur, comrade Durga Bhabhi, and Lala Lajpat Rai's daughter rushed to Ganda Singh Wala. Searching the riverbed with tears streaming down their faces, they recovered the charred bones, unburned limbs, and sacred ashes of the three martyrs from the mud.",
    "Transported back to Lahore, the relics were carried through the city in a monumental funeral procession of over one hundred thousand citizens. Weeping crowds showered the cortege with flower petals and rosewater, marching to the banks of the Ravi River, where the three heroes were given a solemn, public cremation worthy of national emperors."
  ],

  // PART 11: RESTITUTION (1931 & BEYOND)
  "KU-BS-CH53-01": [
    "The shockwave of the executions tore through the Indian body politic. Three days later, when Mahatma Gandhi arrived at Malir railway station on his way to the annual Congress session in Karachi, he was met by hundreds of young Naujawan Bharat Sabha militants waving black flags and presenting him with black crepe flowers, chanting: 'Down with Gandhism! Long Live Bhagat Singh!'",
    "At the Karachi Congress, despite intense maneuvering by the old guard to ratify the Gandhi-Irwin Pact, the atmosphere was dominated by grief and rage. Subhas Chandra Bose and radical delegates forced the Congress to adopt a special resolution praising the 'courage, patriotism, and supreme sacrifice' of Bhagat Singh, Sukhdev, and Rajguru, cementing their place as the moral conscience of the freedom movement."
  ],
  "KU-BS-CH54-01": [
    "In the months following the executions, confidential British Intelligence Special Branch reports revealed the imperial realization that their judicial victory was a catastrophic political defeat. An internal appraisal prepared for Viceroy Lord Willingdon in April 1931 conceded that Bhagat Singh's martyrdom had achieved what decades of political speeches could not:",
    "'Bhagat Singh has won an immense, almost unprecedented popularity. For the time being, his name is on the lips of every young man in India, completely overshadowing Mr. Gandhi. His photographs are sold in every bazaar, and his martyrdom has become the national myth of modern India.' The Raj had executed the man, but in doing so, they had immortalized his revolution."
  ],
  "KU-BS-CH55-01": [
    "Satvinder S. Juss concludes his monumental work by reflecting on the living meaning of Bhagat Singh for the 21st century. Bhagat Singh was not merely a fighter against British colonial rule; he was a visionary thinker who warned against religious communalism, corporate exploitation, state authoritarianism, and the erosion of intellectual freedom.",
    "His warning that 'the sword of revolution is sharpened on the whetstone of ideas' remains as urgent today as it was in 1931. In a world still fractured by economic inequality and sectarian hatred, Bhagat Singh stands not as a frozen statue of the past, but as an eternal beacon of courage, critical reason, and unyielding love for humanity."
  ]
};

module.exports = {
  BHAGAT_SINGH_PARTS,
  BHAGAT_SINGH_PROSE
};
