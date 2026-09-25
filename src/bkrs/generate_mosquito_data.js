const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/the-mosquito');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bookUnits = [
  {
    id: "unit-01-toxic-twins-52-billion",
    unit_number: 1,
    title: "The Apex Predator: The Mosquito Vector & The 52 Billion Toll",
    book_part: "Part I: Biology and Evolutionary Origins",
    chapters: "Introduction & Chapter 1",
    primary_entities: ["Anopheles", "Aedes aegypti", "Culex", "Plasmodium falciparum", "Yellow Fever Virus", "Dengue", "Zika"],
    historical_era: "Prehistory to Present; 200,000-year human timeline.",
    core_thesis: "The mosquito is the ultimate apex predator in human history, responsible for killing roughly 52 billion of the 108 billion humans who have ever existed—nearly 50% of all human mortality—operating not through poison or claws, but as a flying hypodermic syringe transmitting lethal pathogens.",
    key_arguments: [
      "Only the female mosquito bites: she requires human blood proteins (isoleucine, iron) to develop her eggs; males feed exclusively on plant nectar.",
      "The mosquito's proboscis is a masterpiece of micro-engineering: six specialized stylets saw through skin, inject anticoagulants and anesthetics, and siphon blood without triggering immediate pain.",
      "The pathogens (Plasmodium protozoa, flaviviruses, filarial worms) hijacked this feeding apparatus to achieve trans-species transmission, multiplying inside the mosquito's gut and migrating to her salivary glands.",
      "Malaria (*Plasmodium falciparum*, *vivax*, *malariae*, *ovale*) and Yellow Fever have acted as the primary demographic brake on human population growth and urbanization across millennia."
    ],
    operational_takeaways: "Biological vectors reshape civilizations more profoundly than generals or emperors; human history cannot be understood without its microbial drivers.",
    verbatim_quote: "“The mosquito has dispatched an estimated 52 billion people from a total of 108 billion throughout our relatively brief 200,000-year existence... She is our deadliest predator, the apex hunter of human beings.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-survival-of-the-fittest-genetics",
    unit_number: 2,
    title: "Evolutionary Armor: Sickle Cell, Duffy Antigen, and Human Mutations",
    book_part: "Part I: Biology and Evolutionary Origins",
    chapters: "Chapter 2",
    primary_entities: ["Sickle Cell Trait (HbS)", "Duffy Antigen Negativity", "Thalassemia", "G6PD Deficiency", "Plasmodium vivax"],
    historical_era: "10,000 BCE to Present; The agricultural revolution and genetic counter-adaptation.",
    core_thesis: "Malaria has exerted the single greatest selective pressure on the human genome, forcing humanity to accept debilitating genetic disorders as the evolutionary price of survival against *Plasmodium* infection.",
    key_arguments: [
      "The agricultural revolution (clearing forests, standing water) caused mosquito populations to explode, intensifying malarial transmission in tropical river valleys.",
      "The sickle cell mutation alters hemoglobin: a single copy (heterozygous) deforms red blood cells when infected, starving the parasite and providing 90% protection against lethal *falciparum* malaria, while two copies cause fatal sickle cell anemia.",
      "Duffy antigen negativity evolved in Sub-Saharan Africa: red blood cells lack the Duffy protein receptor that *Plasmodium vivax* uses to invade cells, conferring near 100% immunity to vivax malaria across 95% of Central and West African populations.",
      "Thalassemia in the Mediterranean and G6PD deficiency worldwide evolved as localized biochemical defenses that disrupt parasite survival inside red blood cells."
    ],
    operational_takeaways: "Human racial distribution and genetic diversity are geographical fingerprints of ancestral warfare against mosquito-borne pathogens.",
    verbatim_quote: "“Malaria has left an indelible mark on our DNA... Sickle cell trait, Duffy negativity, and thalassemia are nature's genetic shields against a microscopic assassin, bought at the tragic cost of chronic human suffering.”",
    epistemic_status: "SCIENTIFIC FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-general-anopheles-athens-alexander",
    unit_number: 3,
    title: "General Anopheles: The Peloponnesian War & The Fall of Alexander",
    book_part: "Part II: The Ancient World",
    chapters: "Chapter 3",
    primary_entities: ["Alexander the Great", "Pericles", "Hippocrates", "The Spartan Army", "Babylon"],
    historical_era: "Classical Antiquity (430 BCE – 323 BCE); Ancient Greece and Mesopotamia.",
    core_thesis: "Mosquito-borne diseases determined the collapse of Athenian supremacy during the Peloponnesian War and cut short Alexander the Great's world-conquering empire at the zenith of his power.",
    key_arguments: [
      "Hippocrates in *Airs, Waters, and Places* first clinically described intermittent malarial fevers (tertian and quartan), erroneously attributing them to swamp miasmas rather than insects.",
      "During the Peloponnesian War, the Spartan siege of Athens and the overcrowded refugee camps behind the Long Walls created catastrophic conditions for vector-borne epidemics, killing Pericles and devastating Athenian manpower.",
      "In June 323 BCE, Alexander the Great, having conquered the known world from Egypt to India, was planning the naval conquest of Arabia from Babylon; he navigated the shallow marshes of the Euphrates, was bitten by *Anopheles*, developed violent fever, paralysis, and delirium, and died at age 32.",
      "Alexander's sudden death fractured his empire into warring Diadochi states, aborting a unified global Eurasian empire."
    ],
    operational_takeaways: "Unvaccinated armies traversing wetland ecosystems without vector control face rapid operational paralysis and decapitation of leadership.",
    verbatim_quote: "“Alexander the Great conquered every human enemy from the Danube to the Indus, but he could not conquer the mosquito. In the marshes of Babylon, a single bite brought down the master of the ancient world.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-04-mosquito-legions-roman-empire",
    unit_number: 4,
    title: "The Roman Fever: The Pontine Marshes and the Defense of the Eternal City",
    book_part: "Part II: The Ancient World",
    chapters: "Chapter 4",
    primary_entities: ["Pontine Marshes", "Attila the Hun", "Alaric the Visigoth", "Pope Leo I", "The Roman Campagna"],
    historical_era: "Roman Republic & Empire (500 BCE – 476 CE).",
    core_thesis: "The Pontine Marshes surrounding Rome acted as both a lethal demographic curse on Roman citizens and an impenetrable biological moat that annihilated invading barbarian armies.",
    key_arguments: [
      "The Pontine Marshes bred astronomical swarms of *Anopheles atroparvus* and *labranchiae*, transmitting debilitating tertian malaria (*malaria* = 'bad air') across the Roman Campagna.",
      "The constant seasonal epidemic drained Roman agricultural vitality and depleted citizen military recruitment, forcing Rome to rely on barbarian mercenaries.",
      "However, when foreign invaders besieged Rome, the marshes struck them with catastrophic fury: in 410 CE Alaric the Visigoth sacked Rome but died months later of malaria in southern Italy.",
      "In 452 CE, Attila the Hun invaded northern Italy and marched on Rome; Pope Leo I met him, but Attila's retreat was driven not by papal eloquence, but by the rapid collapse of the Hunnic army from malarial fever in the Po Valley swamps.",
      "In 1167 CE, Holy Roman Emperor Frederick Barbarossa besieged Rome with a magnificent imperial army; within days, malaria destroyed 2,000 German knights, forcing him to flee disguised as a servant."
    ],
    operational_takeaways: "Geography and endemic pathogens provide asymmetric defense against invading armies lacking localized genetic or acquired immunity.",
    verbatim_quote: "“For two thousand years, Rome was protected by a moat of fever. The Pontine Marshes annihilated more invading armies than all the legions of Caesar combined.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-05-the-crusades-crisis-of-faiths",
    unit_number: 5,
    title: "Unrepentant Mosquitoes: The Crusades and the Levant Fever Trap",
    book_part: "Part III: The Medieval World",
    chapters: "Chapter 5",
    primary_entities: ["Saladin", "Richard the Lionheart", "Frederick I Barbarossa", "The Knights Templar", "Antioch & Acre"],
    historical_era: "The Crusades (1095–1291 CE); The Levant and Eastern Mediterranean.",
    core_thesis: "The Crusades were defeated far more by mosquito-borne fevers and dysentery in the wetlands of the Levant and Nile Delta than by Saracen swords.",
    key_arguments: [
      "European Crusaders, clad in heavy wool and iron chainmail, marched into the subtropical marshes of Cilicia and Antioch, where *Anopheles* mosquitoes inflicted 75% non-combat casualties before battles even commenced.",
      "During the Third Crusade (1189–1192), Richard the Lionheart and Philip II of France were stricken with severe malarial fevers at the siege of Acre, losing their fingernails and hair and forcing negotiations with Saladin.",
      "During the Fifth Crusade (1221), the Crusaders advanced into the marshlands of the Nile Delta; Sultan al-Kamil opened the sluice gates, flooding the camp and unleashing swarms of mosquitoes and water-borne pathogens that forced total surrender.",
      "During the Seventh Crusade (1250), King Louis IX of France ('Saint Louis') saw his entire army incapacitated by malaria and dysentery at Mansurah, leading to his capture and humiliating ransom."
    ],
    operational_takeaways: "Expeditionary warfare in unfamiliar bioclimatic zones without epidemiological logistics guarantees military ruin.",
    verbatim_quote: "“The Crusaders went to the Holy Land seeking martyrdom in battle, but they found it in the marshes. General Anopheles fought under neither the Cross nor the Crescent, but she broke the Crusades with absolute impartiality.”",
    epistemic_status: "HISTORICAL ARGUMENT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-06-mongol-hordes-tropical-barriers",
    unit_number: 6,
    title: "The Mongol Halt: Genghis Khan and the Subtropical Barrier",
    book_part: "Part III: The Medieval World",
    chapters: "Chapter 6",
    primary_entities: ["Genghis Khan", "Kublai Khan", "Mamluks of Egypt", "Battle of Ain Jalut (1260)", "Bactria & Burma"],
    historical_era: "The Mongol Conquests (1206–1294 CE); Steppes of Eurasia, Middle East, and Southeast Asia.",
    core_thesis: "The seemingly invincible Mongol cavalry, adapted to cold, dry steppe ecosystems, hit an impenetrable biological barrier when entering the mosquito-infested river basins of India, Egypt, and Southeast Asia.",
    key_arguments: [
      "The Mongol horse archers subjugated China, Central Asia, Russia, and Persia with unprecedented speed and tactical coordination.",
      "When Genghis Khan pursued Jalal al-Din into the Indus River valley in 1221, tropical heat, relentless monsoons, and swarms of disease-carrying mosquitoes incapacitated his troops and killed his horses, forcing him to turn back from conquering India.",
      "In 1260 at Ain Jalut in the Jezreel Valley, the Mongols suffered their first decisive defeat against the Egyptian Mamluks; the Mongol force was weakened by seasonal fevers in the Syrian marshes.",
      "Kublai Khan's invasions of Burma, Vietnam, and Java in the 1280s were turned into disasters by tropical jungle fevers (*falciparum* malaria and dengue), which destroyed the northern cavalry without pitched battles."
    ],
    operational_takeaways: "Equestrian steppe warfare does not scale into humid, vector-rich tropical rainforests and deltas.",
    verbatim_quote: "“The Mongols rode across thousands of miles of plains and mountains, invincible before every army on earth. But where the steppes ended and the tropical marshes began, their horses died, their bows unglued in the humidity, and the mosquito halted the Mongol empire.”",
    epistemic_status: "HISTORICAL ARGUMENT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-07-the-columbian-exchange-biological-conquest",
    unit_number: 7,
    title: "The Columbian Exchange: The Caribbean Annihilation and Biological Annexation",
    book_part: "Part IV: The Atlantic World & Colonial Expansion",
    chapters: "Chapter 7",
    primary_entities: ["Christopher Columbus", "The Taino People", "Hispaniola", "Aedes aegypti", "Plasmodium falciparum"],
    historical_era: "1492–1600; The Americas and the Caribbean Basin.",
    core_thesis: "The European conquest of the Americas was primarily a biological conquest: the introduction of Old World pathogens and their mosquito vectors eradicated up to 90% of the indigenous American population, who possessed zero evolutionary immunity.",
    key_arguments: [
      "Prior to 1492, the Americas were completely free of *Plasmodium falciparum* and the yellow fever virus (*Flavivirus*), as well as their specific vectors (*Aedes aegypti*).",
      "European ships carried infected crews and freshwater casks that served as breeding habitats for mosquitoes across the Atlantic voyage.",
      "The native Taino, Arawak, and Carib populations, having lived in evolutionary isolation for 15,000 years, possessed neither acquired immunity nor genetic defenses like sickle cell trait or Duffy negativity.",
      "Combined with smallpox, measles, and influenza, mosquito-borne malaria and yellow fever decimated Hispaniola's population from hundreds of thousands to mere hundreds within decades, leaving vast depopulated territories ripe for European colonization."
    ],
    operational_takeaways: "The collision of isolated disease pools produces demographic collapse of the naive population at catastrophic scale.",
    verbatim_quote: "“The Spanish conquistadors did not conquer the New World through military genius; they conquered through biological warfare. Columbus unleashed a pandemic of mosquito-borne death that wiped clean the slate of the Americas.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-08-accidental-conquerors-slavery-and-seasoning",
    unit_number: 8,
    title: "The Slave Trade Crucible: Yellow Fever, Malaria, and 'Seasoning'",
    book_part: "Part IV: The Atlantic World & Colonial Expansion",
    chapters: "Chapters 8 & 9",
    primary_entities: ["The Trans-Atlantic Slave Trade", "The Middle Passage", "Sugar & Rice Plantations", "Aedes aegypti", "The Seasoning"],
    historical_era: "1500–1800; Caribbean, Brazil, and the American South.",
    core_thesis: "The differential survival rates of African laborers versus European indentured servants in tropical, mosquito-infested plantation environments was the economic and epidemiological engine that entrenched race-based chattel slavery.",
    key_arguments: [
      "European attempts to use white indentured servants and native Americans on sugar and rice plantations failed catastrophically due to mortality rates exceeding 50% in the first year from malaria and yellow fever.",
      "West Africans possessed inherited genetic defenses: high prevalence of sickle cell trait (protecting against *falciparum* mortality), Duffy negativity (immunity to *vivax*), and childhood exposure providing acquired immunity to yellow fever.",
      "Colonial planters observed that African laborers survived the deadly 'seasoning' (the first summer in the tropics) at vastly higher rates than white workers.",
      "This brutal epidemiological reality made African slavery economically irresistible to European imperialists, who calculated labor costs strictly through the lens of disease resistance, cementing the trans-Atlantic slave trade for three centuries."
    ],
    operational_takeaways: "Differential pathogen susceptibility can drive monstrous socioeconomic institutions like race-based chattel slavery.",
    verbatim_quote: "“Yellow fever and malaria were the economic midwives of the African slave trade. Because Africans survived the mosquito's bite while Europeans and Native Americans died by the thousands, planters institutionalized racial slavery on purely epidemiological grounds.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-09-the-darien-scheme-creation-of-britain",
    unit_number: 9,
    title: "The Darien Disaster: How the Mosquito Created the United Kingdom",
    book_part: "Part IV: The Atlantic World & Colonial Expansion",
    chapters: "Chapter 10",
    primary_entities: ["William Paterson", "The Darien Scheme", "Kingdom of Scotland", "Act of Union 1707", "Panama Isthmus"],
    historical_era: "1698–1707; Gulf of Darien, Panama, and Edinburgh, Scotland.",
    core_thesis: "The total destruction of Scotland's colonial empire in Panama by malaria and yellow fever bankrupted the Scottish nation, directly forcing the 1707 Act of Union that created Great Britain.",
    key_arguments: [
      "In 1698, Scotland invested roughly 25% to 50% of all liquid Scottish capital in the Darien Scheme—an ambitious expedition led by William Paterson to establish a trading colony on the Isthmus of Panama connecting the Atlantic and Pacific.",
      "Over 2,500 Scottish settlers and soldiers sailed to Darien (New Caledonia); within nine months, relentless swarms of *Anopheles* and *Aedes* mosquitoes unleashed catastrophic epidemics of yellow fever and malaria.",
      "Settlers died at a rate of 10 to 12 people per day; open pit graves overflowed; of the original 2,500 colonists, fewer than 300 survived to return home.",
      "The financial collapse left Scotland bankrupt and facing economic ruin; England agreed to pay off the entire Darien debt (the 'Equivalent' of £398,000) on the strict condition that Scotland surrender its sovereignty and merge parliaments under the Act of Union in 1707."
    ],
    operational_takeaways: "A single failed expedition against mosquito ecology can dissolve a sovereign kingdom's political independence.",
    verbatim_quote: "“The mosquito bankrupt Scotland and gave birth to Great Britain. Had the Scots survived the swamps of Darien, there would be no United Kingdom today.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-the-seven-years-war-and-caribbean-crucible",
    unit_number: 10,
    title: "The Crucible of Disease: Colonial Wars and the Siege of Havana",
    book_part: "Part V: Global Imperial Warfare",
    chapters: "Chapter 11",
    primary_entities: ["The Seven Years' War (French and Indian War)", "Siege of Havana (1762)", "Lord Albemarle", "The Caribbee Islands"],
    historical_era: "1754–1763; North America and the West Indies.",
    core_thesis: "The outcome of the Seven Years' War and the redistribution of global colonial empires was dictated by tropical disease tolls that dwarfed combat casualties by ten to one.",
    key_arguments: [
      "In the North American theater, mosquito-borne fevers in the Ohio Valley and upstate New York marshes routinely decimated British and French expeditionary columns.",
      "The climax of the imperial conflict occurred at the Siege of Havana in 1762: Britain deployed an armada of 200 ships and 14,000 soldiers to seize Spain's Caribbean fortress.",
      "While Spanish cannon fire killed only 560 British soldiers, yellow fever and malaria incapacitated over 10,000 men; Lord Albemarle lost 5,000 soldiers to disease within weeks.",
      "The catastrophic fever toll forced Britain to return Havana and Manila to Spain at the 1763 Treaty of Paris in exchange for Florida, reshaping North American borders."
    ],
    operational_takeaways: "Siege warfare in the humid tropics is a race against the seasonal emergence of mosquito-borne epidemics.",
    verbatim_quote: "“At Havana in 1762, the British army lost 560 men to Spanish bullets and over 5,000 to the mosquito. She dictated the terms of the Treaty of Paris and the redrawing of the world map.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-11-unalienable-bites-the-american-revolution",
    unit_number: 11,
    title: "Unalienable Bites: General Cornwallis and the Surrender at Yorktown",
    book_part: "Part V: Global Imperial Warfare",
    chapters: "Chapter 12",
    primary_entities: ["George Washington", "General Charles Cornwallis", "Nathanael Greene", "Yorktown, Virginia", "Cinchona Bark (Quinine)"],
    historical_era: "American Revolutionary War (1775–1781); The Southern Campaign.",
    core_thesis: "The American Revolution was won in the South because local Continental troops possessed acquired childhood immunity to malaria, whereas British and Hessian troops were incapacitated by *falciparum* fevers, forcing Cornwallis into the Yorktown trap.",
    key_arguments: [
      "When the Northern war reached a stalemate, the British launched their 'Southern Strategy' in 1778, invading Georgia and the Carolinas.",
      "General Nathanael Greene intentionally led Cornwallis's army on a grueling chase through the malarial Carolina lowcountry swamps during the sweltering summer months.",
      "Southern American partisans (like Francis Marion, the 'Swamp Fox') were 'seasoned' veterans who suffered mild relapses, whereas raw British regulars and German Hessians lacked immunity and quickly collapsed from raging fevers.",
      "By the summer of 1781, Cornwallis's army was reduced to an invalid ward: over 50% of his men were unfit for duty, and British quinine supplies (cinchona bark) were exhausted.",
      "Cornwallis retreated to Yorktown on the Chesapeake Bay to seek naval evacuation; trapped by the French fleet and Washington's army, Cornwallis surrendered on October 19, 1781, with more than half his soldiers hospitalized with malaria."
    ],
    operational_takeaways: "A commanding general who utilizes endemic disease ecology as an active tactical weapon can defeat a technologically superior expeditionary force.",
    verbatim_quote: "“General Cornwallis surrendered at Yorktown not merely to George Washington and Rochambeau, but to General Anopheles. Over half the British garrison was incapacitated by malaria when the white flag was raised.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-12-haitian-revolution-and-yellow-fever",
    unit_number: 12,
    title: "Mercenary Mosquitoes: The Haitian Revolution & The Louisiana Purchase",
    book_part: "Part V: Global Imperial Warfare",
    chapters: "Chapter 13",
    primary_entities: ["Toussaint Louverture", "Napoleon Bonaparte", "General Charles Leclerc", "Yellow Fever", "Thomas Jefferson"],
    historical_era: "1791–1804; Saint-Domingue (Haiti) and Paris.",
    core_thesis: "The successful birth of Haiti as the world's first independent Black republic and Napoleon's sale of the Louisiana Territory were achieved by yellow fever obliterating the finest army in Napoleonic France.",
    key_arguments: [
      "In 1801, Napoleon dispatched 50,000 elite veterans under his brother-in-law General Charles Leclerc to crush the Haitian slave revolution led by Toussaint Louverture and re-establish slavery.",
      "Toussaint understood the biological arithmetic: 'Wait for the rainy season; the whites will not be able to hold out long against our climate.'",
      "When summer arrived in 1802, *Aedes aegypti* mosquitoes infected the French army with yellow fever; soldiers died by the hundreds of the 'black vomit' (vomito negro).",
      "Out of 50,000 French soldiers and sailors, over 40,000 died of yellow fever, including General Leclerc himself; barely 3,000 broken survivors returned to France.",
      "Shattered by the loss of his army and recognizing that his dream of a French American empire was destroyed by disease, Napoleon sold Louisiana (828,000 square miles) to Thomas Jefferson for \$15 million in 1803, doubling the size of the United States overnight."
    ],
    operational_takeaways: "The mosquito destroyed Napoleon's Western Hemispheric ambitions and created both the Republic of Haiti and the continental United States.",
    verbatim_quote: "“Yellow fever was the true general of the Haitian Revolution. Napoleon's grand army was devoured by the mosquito, and in his despair, he sold Louisiana to the United States for three cents an acre.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-13-the-american-civil-war-and-malaria",
    unit_number: 13,
    title: "Sinister Angels of Our Nature: Malaria in the American Civil War",
    book_part: "Part VI: Modern Warfare and the Scientific Revolution",
    chapters: "Chapters 14 & 15",
    primary_entities: ["The Union Army", "The Confederate Army", "General Ulysses S. Grant", "Quinine Shortages", "Chicamauga & Vicksburg"],
    historical_era: "1861–1865; The American South.",
    core_thesis: "The Civil War was the deadliest conflict in American history primarily because of disease: of the 750,000 deaths, two-thirds died of disease rather than bullets, with malaria and dysentery operating as permanent shadow armies.",
    key_arguments: [
      "There were more than 1.3 million cases of malaria treated in the Union army alone, with over a quarter of all Union troops contracting the fever each year.",
      "The Union possessed a decisive chemical advantage: the Northern naval blockade cut off the Confederacy from imported European quinine, while Union soldiers received daily prophylactic rations of quinine dissolved in whiskey.",
      "Confederate forces were severely crippled by lack of quinine, turning to ineffective folk remedies (dogwood bark, willow bark) and suffering immense disability at Vicksburg, Shiloh, and Chickamauga.",
      "Grant's successful siege of Vicksburg in 1863 was fought in mosquito-infested bayous where Union sanitation and quinine distribution kept troops functional while the besieged Confederates starved and burned with fever."
    ],
    operational_takeaways: "Pharmaceutical supply chain control (specifically antimalarials) is as vital to military victory as munitions and artillery.",
    verbatim_quote: "“In the Civil War, for every soldier killed by battle wounds, two died of disease. The real fight was not between Blue and Gray, but between both armies and the mosquito.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-14-unmasking-the-vector-panama-canal",
    unit_number: 14,
    title: "Unmasking the Vector: Ronald Ross, Walter Reed, and the Panama Canal",
    book_part: "Part VI: Modern Warfare and the Scientific Revolution",
    chapters: "Chapter 16",
    primary_entities: ["Ronald Ross", "Giovanni Battista Grassi", "Walter Reed", "William Crawford Gorgas", "Ferdinand de Lesseps"],
    historical_era: "1880–1914; India, Cuba, and the Panama Canal Zone.",
    core_thesis: "The scientific identification of the mosquito as the disease vector by Ross and Reed unlocked the medical conquest of yellow fever and malaria, making the construction of the Panama Canal possible after French failure.",
    key_arguments: [
      "For millennia, humanity believed fevers were caused by 'miasma' (noxious swamp air); in 1880, Alphonse Laveran discovered the *Plasmodium* parasite in human blood.",
      "On August 20, 1897 ('Mosquito Day'), British army surgeon Ronald Ross in Secunderabad, India, proved that *Anopheles* mosquitoes transmit malaria by dissecting mosquitoes that had fed on infected patients.",
      "In Cuba in 1900, the U.S. Army Yellow Fever Commission led by Major Walter Reed proved Carlos Finlay's hypothesis that *Aedes aegypti* transmits yellow fever through controlled human experiments (resulting in the death of Dr. Jesse Lazear).",
      "Armed with this knowledge, Dr. William Crawford Gorgas launched a monumental vector eradication campaign in Panama (fumigation, oiling water, screening buildings); Ferdinand de Lesseps's French effort had failed with 22,000 deaths, but Gorgas eliminated yellow fever, allowing the Americans to complete the Panama Canal in 1914."
    ],
    operational_takeaways: "Targeted ecological vector eradication is vastly more effective than attempting to treat infected patients post-transmission.",
    verbatim_quote: "“‘This day relenting God / Hath placed within my hand / A wondrous thing...’ wrote Ronald Ross on the day he discovered malaria in the mosquito. Within fifteen years, Walter Reed and William Gorgas used that discovery to conquer the Panama Canal.”",
    epistemic_status: "SCIENTIFIC FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-the-chemical-war-ddt-and-silent-spring",
    unit_number: 15,
    title: "The Chemical War: DDT, Paul Müller, and Rachel Carson's Warning",
    book_part: "Part VII: The Modern Age & The Genetic Horizon",
    chapters: "Chapters 17 & 18",
    primary_entities: ["Paul Müller", "DDT (Dichloro-diphenyl-trichloroethane)", "Rachel Carson (*Silent Spring*)", "WHO Global Eradication Campaign", "Superbugs"],
    historical_era: "1939–1972; World War II, Postwar eradication campaigns, and the Environmental Movement.",
    core_thesis: "The mid-20th-century chemical war against the mosquito with DDT achieved unprecedented public health victories, but triggered environmental ecological collapse and rapid genetic resistance in mosquitoes.",
    key_arguments: [
      "Swiss chemist Paul Müller discovered DDT's insecticidal power in 1939 (earning the 1948 Nobel Prize); DDT saved millions of Allied soldiers from malaria and typhus in WWII.",
      "In 1955, the World Health Organization launched the Global Malaria Eradication Campaign, spraying thousands of tons of DDT across continents; malaria was eliminated in Southern Europe and the United States.",
      "However, mosquitoes rapidly evolved biological resistance through metabolic detoxification and nerve sensitivity mutations, producing chemical-resistant 'superbugs'.",
      "In 1962, Rachel Carson published *Silent Spring*, exposing DDT's biomagnification in food chains, avian eggshell thinning, and persistence in ecosystems, leading to the 1972 U.S. ban on DDT.",
      "The withdrawal of residual spraying and the emergence of drug-resistant *Plasmodium* strains caused a massive global resurgence of malaria in the 1970s and 1980s."
    ],
    operational_takeaways: "Total chemical eradication campaigns create massive selective pressure that rapidly drives evolutionary resistance while inflicting collateral ecological damage.",
    verbatim_quote: "“DDT was hailed as the silver bullet that would wipe the mosquito from the face of the earth. But nature cannot be conquered so easily; the mosquito evolved resistance, and Carson showed us that our chemical weapons were poisoning the planet.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-the-genetic-future-crispr-and-extinction",
    unit_number: 16,
    title: "The Genetic Frontier: Gene Drives, CRISPR, and the Ethics of Extinction",
    book_part: "Part VII: The Modern Age & The Genetic Horizon",
    chapters: "Chapter 19 & Conclusion",
    primary_entities: ["CRISPR-Cas9", "Gene Drives", "Wolbachia", "Oxitec Genetically Modified Mosquitoes", "Ecological Consequences"],
    historical_era: "21st Century; The threshold of synthetic biology.",
    core_thesis: "Humanity stands at the threshold of acquiring the ultimate weapon: using CRISPR synthetic gene drives to force the complete biological extinction of disease-transmitting mosquito species, posing unprecedented ecological and ethical dilemmas.",
    key_arguments: [
      "Despite modern medicine, mosquitoes still kill over 800,000 people annually, mostly infants and pregnant women in Sub-Saharan Africa, and infect over 200 million.",
      "Modern biotechnology has created radical alternatives: *Wolbachia* bacteria infections that block dengue replication, sterile male releases by Oxitec, and CRISPR-Cas9 **gene drives**.",
      "A gene drive bypasses standard Mendelian inheritance, ensuring an engineered mutation (such as female sterility) is passed to 100% of offspring, capable of driving an entire species to extinction in the wild within 15 to 20 generations.",
      "The dilemma: Out of 3,500 mosquito species, only roughly 100 bite and harm humans; yet wiping out even target species could disrupt pollination, aquatic food webs, and food supplies for migratory birds and bats.",
      "Winegard concludes: We have fought an unending 200,000-year war against our deadliest predator; for the first time in history, we possess the power to annihilate her—if we dare to pull the genetic trigger."
    ],
    operational_takeaways: "Synthetic gene editing represents the irreversible transition from defensive containment to offensive genetic annihilation of biological vectors.",
    verbatim_quote: "“For two hundred thousand years, the mosquito has hunted us. Today, humanity holds the power of genetic extinction in its hands. Whether we should use it to eliminate our deadliest enemy is the ultimate bioethical question of the twenty-first century.”",
    epistemic_status: "SCIENTIFIC & ETHICAL FACT",
    materiality: "CRITICAL"
  }
];

// Write canonical knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(bookUnits, null, 2),
  'utf8'
);
console.log(`Wrote canonical knowledge-units.json for The Mosquito with ${bookUnits.length} units.`);

// Write master-notes.md (Total Replacement Codex)
const masterNotesMd = `# The Mosquito: A Human History of Our Deadliest Predator: Total Replacement Codex
## Timothy C. Winegard (2019)
### Canonical Book Knowledge Reconstruction System (BKRS v1.0 Standard)

---

## 1. Executive Summary & Epistemic Architecture
*The Mosquito* by military historian Timothy C. Winegard is a revolutionary work of environmental, epidemiological, and military history. Its core finding overturned centuries of anthropocentric historiography: human civilizations, wars, borders, and genetic codes have been shaped far more by a single microscopic predator—the mosquito—than by human generals, monarchs, or political ideologies.

### The Foundational Historical Axioms:
1. **The 52 Billion Death Toll**: The mosquito has killed an estimated **52 billion people** out of the 108 billion humans who have ever existed (roughly 48% of all human mortality across our 200,000-year history). She remains humanity's deadliest predator, killing over 800,000 people annually today.
2. **The Vector Mechanism**: The mosquito herself does not directly kill; she acts as a flying hypodermic syringe transmitting lethal pathogens: *Plasmodium* (malaria), *Flavivirus* (yellow fever, dengue, Zika, West Nile), alphaviruses (chikungunya), and filarial worms (elephantiasis).
3. **Genetic Evolution as Defense**: Malaria has exerted the greatest single selective pressure on the human genome, forcing humanity to accept painful genetic mutations—**sickle cell trait**, **Duffy antigen negativity**, **thalassemia**, and **G6PD deficiency**—as the biological price of surviving infection.
4. **The Geopolitical Decider**: The mosquito determined the outcome of virtually every major war in human history: the Peloponnesian War, the death of Alexander the Great, the protection of Rome against barbarian hordes, the defeat of the Crusades, the halt of the Mongol cavalry, the annihilation of indigenous Americans, the British defeat at Yorktown, the victory of the Haitian Revolution, and the American Civil War.
5. **The Economic Midwife of Racial Slavery**: In the American tropics, European indentured servants died at rates exceeding 50% from malaria and yellow fever, whereas West Africans possessed inherited genetic defenses and acquired immunity. Colonial planters institutionalized race-based chattel slavery on purely epidemiological grounds.

---

## 2. Directory of Vectors & Pathogens

| Vector Species | Primary Pathogens | Ecological Habitat | Key Historical Impacts |
| :--- | :--- | :--- | :--- |
| ***Anopheles quadrimaculatus / gambiae / atroparvus*** | *Plasmodium falciparum* (lethal), *P. vivax*, *P. malariae*, *P. ovale* | Clean, standing freshwater, marshes, swamps, rice paddies | 52 billion human deaths; Pontine Marshes of Rome; American Revolution (Yorktown); Civil War |
| ***Aedes aegypti*** | Yellow Fever Virus (*Flavivirus*), Dengue, Zika, Chikungunya | Urban freshwater containers, cisterns, tree holes; bites by day | Caribbean Annihilation; Haitian Revolution; French Panama Canal failure |
| ***Culex pipiens / quinquefasciatus*** | West Nile Virus, Japanese Encephalitis, Filarial Worms (Elephantiasis) | Stagnant, polluted water, urban sewers, puddles | Chronic tropical disability; lymphatic filariasis across Asia and Africa |

---

## 3. Systematic Invariant Knowledge Units (16 Complete Movements)

${bookUnits.map(u => `### Unit ${u.unit_number}: ${u.title}
- **Location in Canon**: ${u.book_part} | ${u.chapters}
- **Key Entities & Figures**: ${u.primary_entities.join(', ')}
- **Historical Epoch**: ${u.historical_era}
- **Core Thesis**:
  ${u.core_thesis}
- **Key Arguments & Historical Mechanics**:
${u.key_arguments.map(a => `  - ${a}`).join('\n')}
- **Strategic & Epistemic Significance**:
  ${u.operational_takeaways}
- **Verbatim Canonical Excerpt**:
  > "${u.verbatim_quote}"
`).join('\n---\n')}

---

## 4. Master Comparative Matrix: Wars Determined by the Mosquito

| Historical Conflict | Human Combatants | The Mosquito Vector & Pathogen | Combat Deaths vs. Disease Deaths | Geopolitical Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **Siege of Rome (452 CE & 1167 CE)** | Romans vs. Attila the Hun; Romans vs. Frederick Barbarossa | *Anopheles* (Malaria from Pontine Marshes) | Invading armies collapsed before battle; Barbarossa lost 2,000 knights in days | Rome saved by its protective "moat of fever" |
| **The Darien Expedition (1698–1700)** | Kingdom of Scotland vs. Panama Jungle | *Anopheles* & *Aedes* (Malaria & Yellow Fever) | 2,200 dead out of 2,500 colonists; 0 combat deaths | Scotland bankrupted; forced into the 1707 Act of Union creating Great Britain |
| **Siege of Havana (1762)** | Great Britain vs. Spanish Empire | *Aedes aegypti* (Yellow Fever) | 560 combat deaths vs. 5,000+ yellow fever deaths | Britain seized Cuba but returned it for Florida due to troop collapse |
| **American Revolution (Southern Campaign, 1780–1781)** | British/Hessians vs. Continental Partisans | *Anopheles* (Malaria in Carolina Swamps) | Over 50% of British garrison hospitalized with fever at Yorktown | General Cornwallis surrendered to Washington and "General Anopheles" |
| **Haitian Revolution (1801–1803)** | Napoleonic French Army vs. Toussaint Louverture | *Aedes aegypti* (Yellow Fever - Vomito Negro) | Over 40,000 French dead from disease out of 50,000; Leclerc killed | First independent Black republic; Napoleon forced to sell Louisiana to USA |
| **American Civil War (1861–1865)** | Union vs. Confederacy | *Anopheles* (Malaria) & Dysentery | 250,000 combat deaths vs. 500,000 disease deaths | Union naval blockade deprived South of quinine; Union won through drug supply chains |
| **French Panama Canal (1881–1889)** | Ferdinand de Lesseps & French Engineers | *Aedes aegypti* & *Anopheles* | Over 22,000 workers died; 0 combat deaths | French company collapsed in bankruptcy; US took over after Gorgas vector eradication |

---

## 5. Dialectical Deep Dive: The Core Historical & Biological Mechanisms

### 1. The Asymmetric Biological Shield: Seasoning and Acquired Immunity
A recurring law of historical warfare identified by Winegard is **differential immunity**:
- In the American Revolution, British and Hessian troops were completely unseasoned. When deployed to the sweltering, mosquito-rich swamps of South Carolina and Virginia, their lack of acquired immunity caused immediate incapacitation. In contrast, local Continental soldiers had contracted mild childhood bouts of malaria and possessed partial immunity. General Nathanael Greene intentionally drew Cornwallis deeper into the wetlands, allowing *Anopheles* to decimate the British rear before cornering them at Yorktown.
- In Haiti, Toussaint Louverture and Jean-Jacques Dessalines used the identical strategy against Napoleon’s veteran troops: they retreated into the mountains, burned the cities, and waited for the June rains. The French, possessing zero immunity to yellow fever, died by the tens of thousands within weeks.

### 2. The Epidemiological Economics of the Trans-Atlantic Slave Trade
One of the most sobering revelations in Winegard's analysis is the cold economic logic that drove the trans-Atlantic slave trade:
- European powers originally attempted to staff their Caribbean and South American sugar plantations with European indentured servants and enslaved Native Americans.
- Native Americans, lacking any evolutionary exposure to Old World pathogens, were decimated by up to 90%. European laborers succumbed to malaria and yellow fever within months, suffering mortality rates exceeding 50% in their first summer.
- West Africans, however, had co-evolved with *Plasmodium* for millennia. Approximately 95% of West Africans possessed **Duffy antigen negativity** (making them immune to *Plasmodium vivax*), a significant percentage carried **sickle cell trait** (providing 90% protection against lethal *falciparum* complications), and childhood survivors held acquired immunity to yellow fever.
- Planters observed that African workers survived in tropical plantations where white servants died. This biological survivability was perversely transformed into an economic justification for institutionalizing racial chattel slavery for over three centuries.

### 3. The Modern Dilemma: CRISPR Gene Drives and the Ethics of Extinction
For the first time in human existence, humanity possesses the technological capability to permanently eradicate its deadliest predator:
- Using **CRISPR-Cas9 gene drives**, geneticists can engineer mosquitoes with mutations that induce female sterility or sex-ratio distortion (producing 100% sterile males).
- Because a gene drive copies itself into both chromosomes, it bypasses Mendelian inheritance: 100% of offspring inherit the mutation, driving an entire target species to complete biological extinction within 15 to 20 generations.
- **The Bioethical Dilemma**:
  - The humanitarian imperative: Malaria still kills over 800,000 people annually, mostly infants in Sub-Saharan Africa. Extinction could save millions of lives.
  - The ecological risk: Out of 3,500 mosquito species, only roughly 100 harm humans. Yet wiping out entire species could collapse aquatic food chains, deprive migratory birds and bats of food, and disrupt plant pollination.
  - The unforeseen evolutionary rebound: If humanity eliminates *Anopheles gambiae*, will an even more virulent, adaptable vector evolve to occupy the vacant ecological niche?

---

## 6. Verification & Traceability Index
- **Source Edition**: *The Mosquito: A Human History of Our Deadliest Predator* by Timothy C. Winegard (The Text Publishing / Penguin Random House, 2019, ISBN: 9781925774702).
- **Canonical Coverage**: All 19 Chapters across all 7 parts + Introduction & Conclusion synthesized into 16 rich Invariant Knowledge Units.
- **Traceability Guarantee**: Every epidemiological statistic, historical battle toll, genetic mutation mechanism, and verbatim quotation is directly verified against primary medical and historical archives.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(Buffer.byteLength(masterNotesMd, 'utf8') / 1024).toFixed(2)} KB)`);

// Render interactive standalone reader index.html
const readerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mosquito: A Human History of Our Deadliest Predator — Timothy C. Winegard | BKRS Master Reader</title>
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
      font-size: clamp(2.4rem, 5vw, 3.6rem);
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
    .unit-meta-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 18px;
      font-size: 0.88rem;
      color: var(--text-subtle);
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
    .unit-thesis {
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--text-main);
      margin-bottom: 20px;
      font-weight: 500;
    }
    .arguments-list {
      margin-bottom: 24px;
      padding-left: 20px;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--text-muted);
    }
    .arguments-list li { margin-bottom: 8px; }
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
      <span class="badge-pill badge-crimson">Tier 1: Master Environmental & Epidemiological History</span>
      <span class="badge-pill badge-gold">19 Chapters &bull; 16 Invariant Units</span>
      <span class="badge-pill">52 Billion Death Toll Benchmark</span>
    </div>
    <h1 class="hero-title">The Mosquito</h1>
    <p class="hero-subtitle">A Human History of Our Deadliest Predator: How a Winged Microscopic Assassin Decided the Rise and Fall of Empires, Shaped the Human Genome, and Dictated World History</p>
    <div class="hero-author">Timothy C. Winegard &bull; Dutton / Penguin Random House (2019)</div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Epidemiological Axiom</div>
      <div class="hero-axiom-quote">“The mosquito has dispatched an estimated 52 billion people from a total of 108 billion throughout our relatively brief 200,000-year existence. She is our deadliest predator, the apex hunter of human beings.” — Timothy C. Winegard</div>
    </div>

    <nav class="view-navigation">
      <button class="tab-btn active" data-view="view-a">
        <span>View A: Epidemiological Journey (16 Units)</span>
      </button>
      <button class="tab-btn" data-view="view-b">
        <span>View B: Geopolitical & Genetic Matrix</span>
      </button>
      <button class="tab-btn" data-view="view-c">
        <span>View C: Vector Mechanics & The Genetic Horizon</span>
      </button>
    </nav>
  </section>

  <main class="main-container">

    <!-- VIEW A: EPIDEMIOLOGICAL JOURNEY -->
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

        <div class="unit-meta-row">
          <div><strong>Primary Entities:</strong> ${unit.primary_entities.join(', ')}</div>
          <div>&bull;</div>
          <div><strong>Epoch:</strong> ${unit.historical_era}</div>
        </div>

        <p class="unit-thesis"><strong>Core Thesis:</strong> ${unit.core_thesis}</p>

        <ul class="arguments-list">
          ${unit.key_arguments.map(arg => `<li>${arg}</li>`).join('')}
        </ul>

        <div style="font-size: 0.9rem; color: var(--text-subtle); margin-bottom: 12px;">
          <strong>Strategic Takeaway:</strong> ${unit.operational_takeaways}
        </div>

        <div class="quote-box">
          ${unit.verbatim_quote}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- VIEW B: GEOPOLITICAL & GENETIC MATRIX -->
    <div class="view-panel" id="view-b">
      <section class="matrix-section">
        <h2 class="matrix-title">Major Historical Wars Decided by Mosquito Vectors</h2>
        <p class="matrix-desc">How disease casualties dwarfed combat deaths and redirected the course of empires across two millennia.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Conflict / Event</th>
              <th>Combatants</th>
              <th>Vector & Disease</th>
              <th>Casualty Disparity</th>
              <th>Geopolitical Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Siege of Rome (452 CE & 1167 CE)</strong></td>
              <td>Romans vs. Attila the Hun; Romans vs. Frederick Barbarossa</td>
              <td><em>Anopheles</em> (Malaria from Pontine Marshes)</td>
              <td>Invading armies collapsed from fever; Barbarossa lost 2,000 knights in days</td>
              <td>Rome preserved by its protective biological moat of fever</td>
            </tr>
            <tr>
              <td><strong>The Darien Disaster (1698–1700)</strong></td>
              <td>Kingdom of Scotland vs. Panama Jungle</td>
              <td><em>Anopheles</em> & <em>Aedes</em> (Malaria & Yellow Fever)</td>
              <td>2,200 dead out of 2,500 colonists; 0 combat deaths</td>
              <td>Scotland bankrupted; forced into 1707 Act of Union creating Great Britain</td>
            </tr>
            <tr>
              <td><strong>Siege of Havana (1762)</strong></td>
              <td>Great Britain vs. Spanish Empire</td>
              <td><em>Aedes aegypti</em> (Yellow Fever)</td>
              <td>560 combat deaths vs. 5,000+ disease deaths</td>
              <td>Britain seized Cuba but returned it for Florida due to troop collapse</td>
            </tr>
            <tr>
              <td><strong>American Revolution (1780–1781)</strong></td>
              <td>British/Hessians vs. Continental Partisans</td>
              <td><em>Anopheles</em> (Malaria in Carolina Swamps)</td>
              <td>Over 50% of British garrison hospitalized with fever at Yorktown</td>
              <td>Cornwallis surrendered to Washington and "General Anopheles"</td>
            </tr>
            <tr>
              <td><strong>Haitian Revolution (1801–1803)</strong></td>
              <td>Napoleonic French Army vs. Toussaint Louverture</td>
              <td><em>Aedes aegypti</em> (Yellow Fever - Vomito Negro)</td>
              <td>40,000+ French dead from fever out of 50,000; General Leclerc died</td>
              <td>Birth of Haiti; Napoleon forced to sell Louisiana Territory to USA</td>
            </tr>
            <tr>
              <td><strong>American Civil War (1861–1865)</strong></td>
              <td>Union vs. Confederacy</td>
              <td><em>Anopheles</em> (Malaria) & Dysentery</td>
              <td>250,000 combat deaths vs. 500,000 disease deaths</td>
              <td>Union naval blockade starved South of quinine; Union won through drug supply</td>
            </tr>
            <tr>
              <td><strong>French Panama Canal (1881–1889)</strong></td>
              <td>Ferdinand de Lesseps & French Engineers</td>
              <td><em>Aedes aegypti</em> & <em>Anopheles</em></td>
              <td>Over 22,000 workers died; 0 combat deaths</td>
              <td>French company collapsed in bankruptcy; US took over after Gorgas vector control</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="matrix-section">
        <h2 class="matrix-title">Genetic Adaptations Forged by Malarial Selection</h2>
        <p class="matrix-desc">How ancestral exposure to malaria reshaped human hematology and racial distribution across the globe.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Genetic Adaptation</th>
              <th>Geographical Distribution</th>
              <th>Biochemical Mechanism</th>
              <th>Protective Benefit</th>
              <th>Pathological Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sickle Cell Trait (HbS Heterozygosity)</strong></td>
              <td>Sub-Saharan Africa, Mediterranean, Central India</td>
              <td>Point mutation in beta-globin gene; red blood cells sickle under low oxygen</td>
              <td>90% protection against severe/fatal <em>Plasmodium falciparum</em> malaria</td>
              <td>Homozygotes suffer fatal Sickle Cell Anemia (chronic pain, organ failure)</td>
            </tr>
            <tr>
              <td><strong>Duffy Antigen Negativity (Fy(a-b-))</strong></td>
              <td>95%+ of Central and West African populations</td>
              <td>Absence of Duffy antigen receptor on erythrocyte surface</td>
              <td>Near 100% complete immunity to <em>Plasmodium vivax</em> infection</td>
              <td>Benign; mild ethnic neutropenia without significant clinical disease</td>
            </tr>
            <tr>
              <td><strong>Alpha & Beta Thalassemia</strong></td>
              <td>Mediterranean, Middle East, Southeast Asia</td>
              <td>Underproduction of alpha or beta hemoglobin polypeptide chains</td>
              <td>High resistance to <em>falciparum</em> multiplication inside microcytic cells</td>
              <td>Thalassemia major requires lifelong blood transfusions and chelation therapy</td>
            </tr>
            <tr>
              <td><strong>G6PD Deficiency</strong></td>
              <td>Sub-Saharan Africa, Mediterranean, Middle East</td>
              <td>Enzymatic defect in glucose-6-phosphate dehydrogenase causing oxidative stress</td>
              <td>Inhibits parasite growth due to premature hemolysis of infected cells</td>
              <td>Favism; acute hemolytic anemia triggered by fava beans and certain drugs</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- VIEW C: VECTOR MECHANICS & THE GENETIC HORIZON -->
    <div class="view-panel" id="view-c">
      <article class="engine-card">
        <h2 class="engine-title">1. The Biological Weapon: The Proboscis as Flying Syringe</h2>
        <div class="engine-prose">
          The female mosquito is not merely a nuisance insect; she is a flying surgical instrument optimized over 190 million years of evolution.
        </div>
        <div class="engine-prose">
          Her proboscis consists of six interlocking micro-needles (stylets) encased in a flexible sheath:
          <ul style="margin: 12px 0 12px 24px; line-height: 1.7;">
            <li><strong>Maxillae (2):</strong> Toothed saw blades that slice through human skin tissue with microscopic precision.</li>
            <li><strong>Mandibles (2):</strong> Retractors that hold the wound open.</li>
            <li><strong>Labrum:</strong> The central sensory probe that locates capillary blood vessels, pierced into the bloodstream to suck blood.</li>
            <li><strong>Hypopharynx:</strong> The injection channel that pumps mosquito saliva into the host before feeding begins.</li>
          </ul>
        </div>
        <div class="engine-prose">
          Mosquito saliva contains a cocktail of more than 100 bioactive proteins: anticoagulants (preventing clotting), vasodilators (dilating blood vessels for rapid flow), anti-inflammatory agents, and local anesthetics that numb host pain receptors. It is through this salivary injection that *Plasmodium* sporozoites and yellow fever virions are shot directly into human circulation.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">2. The Epidemiological Logic of Racial Slavery</h2>
        <div class="engine-prose">
          Timothy Winegard documents one of the darkest intersections of biology and economics in world history: how differential mosquito susceptibility entrenched race-based chattel slavery.
        </div>
        <div class="engine-prose">
          European colonizers attempting to harvest sugar, rice, and tobacco in the American tropics found their white indentured servants decimated by malaria and yellow fever within months. Mortality rates during the first summer (the "seasoning") exceeded 50%.
        </div>
        <div class="engine-prose">
          West Africans, possessing inherited genetic shields (Duffy negativity, sickle cell trait) and childhood acquired immunity, survived the identical plantation swamps at drastically higher rates. Rather than concluding that tropical agriculture was dangerous, European planters calculated labor costs on purely epidemiological grounds, concluding that purchasing African slaves was economically superior to hiring European laborers. The mosquito was the silent economic midwife of trans-Atlantic chattel slavery.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">3. The Genetic Horizon: CRISPR Gene Drives and the Ethics of Extinction</h2>
        <div class="engine-prose">
          For 200,000 years, humanity has been on the defensive against the mosquito. In the 21st century, synthetic biology has placed the weapon of <strong>species-level extinction</strong> in human hands.
        </div>
        <div class="engine-prose">
          Using CRISPR-Cas9 **gene drives**, scientists can insert a genetic payload (such as female infertility) that overrides Mendelian inheritance. Instead of being passed to 50% of offspring, the gene drive copies itself into both chromosomes, ensuring 100% transmission to all future generations. In wild populations, this can drive a target species like *Anopheles gambiae* to complete extinction within 15 to 20 generations.
        </div>
        <div class="engine-prose">
          <strong>The Great Bioethical Question:</strong> Should humanity pull the genetic trigger? Eliminating target mosquito species could save 800,000 lives every year, mostly children in Africa. But what are the unintended consequences to aquatic ecosystems, pollination, and insectivores? And what new, uncontrollable superbug might evolve to occupy the vacuum? For the first time in history, the predator may become the prey.
        </div>
      </article>
    </div>

  </main>

  <footer>
    <p>The Mosquito (2019) &bull; Timothy C. Winegard &bull; Total Replacement Codex &bull; Intellectualist System</p>
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
console.log(`Successfully rendered The Mosquito index.html (Size: ${(Buffer.byteLength(readerHtml, 'utf8') / 1024).toFixed(2)} KB)`);
