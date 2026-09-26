const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/rajput-unified-codex');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const rajputRosettaTerms = [
  {
    term: "Naukar / Naukari",
    category: "Military Ethnohistory",
    traditional_claim: "The feudal vassal bound by blood and sacred oath to a hereditary liege lord. (Tod)",
    modern_audit: "The soldier-for-hire in the competitive North Indian military labour market, moving freely between Sultanates, Mughals, and regional chieftains before caste closure. (Dirk Kolff)",
    analogy: "A free-agent professional athlete in the modern draft market choosing the franchise offering the highest signing bonus and status, rather than a permanent medieval serf."
  },
  {
    term: "Rajputization",
    category: "Sociology & Caste Formation",
    traditional_claim: "The pure, unbroken transmission of ancient Vedic solar and lunar Kshatriya bloodlines. (Tod)",
    modern_audit: "The socio-cultural process where successful pastoral, tribal, or mercenary warrior leaders patronized Brahmins and Charans to manufacture clean solar/lunar genealogies and close caste boundaries. (Kolff & Chattopadhyaya)",
    analogy: "A wildly successful startup founder hiring a prestigious public relations and branding firm to write a glossy corporate myth proving his family was aristocratic for seven generations."
  },
  {
    term: "Jauhar & Saka",
    category: "Chivalric Protocol & Sacrificial Warfare",
    traditional_claim: "Tragic romantic mass suicide by women in response to medieval besiegers. (Tod)",
    modern_audit: "The formal, sacred two-stage battle protocol of unconditional resistance: Jauhar (women immolating in fire to prevent capture and release men from domestic concern) followed immediately by Saka (men donning saffron robes, opening gates, and charging into death). (Harlan & Tod)",
    analogy: "A scuttling protocol on a naval battleship under absolute siege: destroying the ship and firing all remaining munitions so zero intelligence, honor, or spoils are captured by the adversary."
  },
  {
    term: "Purbiya",
    category: "Military Labour Market",
    traditional_claim: "A regional geographical label for warriors from the eastern Gangetic plain.",
    modern_audit: "The vast infantry mercenary class from Awadh, Bihar, and Bundelkhand who identified as Rajputs through arms-bearing, playing a decisive role in Malwa and Gujarat before the British Bengal Army. (Kolff)",
    analogy: "The Swiss pikemen of Renaissance Europe—peasant warriors whose regional reputation for elite martial contracts made their name synonymous with mercenary infantry service."
  },
  {
    term: "Kuldevi & Sati",
    category: "Anthropology & Religion",
    traditional_claim: "Folk goddesses and tragic mythological figures in folklore.",
    modern_audit: "The twin supernatural pillars of Rajput lineage continuity: the Kuldevi (goddess protecting the clan's biological and political survival) and the Sati (the heroic ancestor whose curse or blessing polices lineage morality). (Lindsey Harlan)",
    analogy: "A constitutional court and supreme guardian angel of a dynasty: safeguarding the family from extinction so long as members uphold strict behavioral honor."
  },
  {
    term: "Watan Jagir",
    category: "Mughal-Rajput Statecraft",
    traditional_claim: "Submission and loss of sovereign Rajput homeland to imperial overlords.",
    modern_audit: "The brilliant imperial compromise created by Akbar: the Rajput raja's ancestral kingdom was confirmed as an inalienable, hereditary estate (watan) while granting him imperial ranks (mansabs) and revenues outside Rajasthan. (Hallissey & Sarkar)",
    analogy: "A semi-autonomous state government retaining 100% control over its domestic territory while its governor simultaneously serves as a federal cabinet secretary with national revenue perks."
  },
  {
    term: "Agnikula (Fire-born Clans)",
    category: "Mythology & Genealogy",
    traditional_claim: "The miraculous creation of four warrior clans (Paramara, Parihara, Chalukya, Chauhan) from a sacrificial fire-pit on Mount Abu by sage Vashistha. (Tod / Prithviraj Raso)",
    modern_audit: "A bardic purification and legitimation metaphor developed between the 10th and 14th centuries to assimilate diverse martial lineages (including assimilated Central Asian and indigenous warriors) into orthodox Kshatriya status. (Modern Epigraphy)",
    analogy: "A naturalization ceremony for elite foreign recruits, granting them full honorary citizenship and sacred pedigree through an elaborate national ritual."
  },
  {
    term: "Asymmetric Fortress Architecture",
    category: "Military Architecture",
    traditional_claim: "Romantic, whimsical palaces built without planning on rugged hilltops. (Tod / Fergusson)",
    modern_audit: "Sophisticated contour-hugging military engineering designed to exploit natural scarps, trap invading armies in winding chokepoints, collect monsoon runoff in rock-cut cisterns, and offer interlocking fields of fire. (Giles Tillotson)",
    analogy: "A stealth aircraft designed with radical angles: every slope, bastion, and zig-zag wall is engineered to deflect military impact and maximize defensive survival."
  },
  {
    term: "The Marwar Crisis (1679)",
    category: "Imperial Historiography",
    traditional_claim: "Aurangzeb's religious crusade to forcefully convert the Rathores and demolish their temples. (Tod)",
    modern_audit: "A structural imperial succession dispute caused by Maharaja Jaswant Singh dying without an adult heir in Jamrud, prompting Aurangzeb to assert crown control over crucial Agra-Gujarat trade corridors, provoking Rathore resistance. (Robert Hallissey)",
    analogy: "A federal government attempting to seize control of a strategic oil transit pipeline running through a territory when the local governor dies without a verified will, triggering armed defiance."
  },
  {
    term: "Khatridharma",
    category: "Ethical Philosophy",
    traditional_claim: "Reckless, suicidal chivalry for bardic fame. (Tod)",
    modern_audit: "The total ethical duty of the Kshatriya warrior: defending the weak, governing the land with generosity, protecting Brahmins and cows, and refusing to flee from the battlefield regardless of odds. (Harlan & Tod)",
    analogy: "The Spartan warrior ethos or the Japanese Bushido code: death in battle is an honorable coronation, whereas cowardly surrender is worse than biological annihilation."
  }
];

const rajputKnowledgeUnits = [
  // MOVEMENT I: ETHNOGENESIS & THE MILITARY LABOUR MARKET
  {
    id: "unit-01-kolff-military-labour-open-rajput",
    unit_number: 1,
    title: "The Open Horizon: 'Rajput' as an Open Status Category in the Military Labour Market",
    movement: "Movement I: Ethnogenesis & The Military Labour Market (Kolff & Historiographical Revision)",
    scope: "Dirk Kolff (Naukar, Rajput, and Sepoy, Ch. 1–2)",
    primary_authors: ["Dirk H. A. Kolff"],
    core_concept: "Prior to the late sixteenth century, 'Rajput' was not a closed, biologically pure caste (jati), but an open, fluid identity of martial service and soldiership in the North Indian military labour market. Anyone with a horse, a sword, and the courage to fight could enter a mercenary contract (naukari) and claim Rajput status.",
    epistemic_audit: "MODERN CRITICAL HISTORIOGRAPHY & ETHNOHISTORY. Debunks James Tod's 19th-century racial-feudal model; uses contemporary Persian chronicles, regional ballads, and recruitment registers to demonstrate social mobility.",
    key_tenets: [
      "The military labour market in Hindustan was vast, seasonal, and peasant-based: millions of armed cultivators migrated across North India between harvests looking for martial employment (naukar) (Kolff).",
      "The early term 'Rajput' (rajaputra - 'son of a king') functioned as an earned title of military honour and political entrepreneurship rather than an endogamous genealogical cage (Kolff).",
      "War-bands were multi-ethnic and multi-caste: Bundelas, Purbiyas, Afghans, and pastoralists fought side-by-side, adopting the ethos of chivalry and loyalty to whichever warlord provided salt and gold."
    ],
    operational_heuristic: "Distinguish between the living historical reality of an open military class and the retrospective bardic myth of an immemorial closed caste.",
    verbatim_anchor: "“Being a Rajput was not a matter of birth, but of conduct, of military profession, and of service... The Rajput was, first and foremost, a soldier of fortune in the Hindustani market.” — Dirk H. A. Kolff (Naukar, Rajput, and Sepoy)",
    epistemic_status: "CRITICAL HISTORIOGRAPHY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-rajputization-caste-closure",
    unit_number: 2,
    title: "The Process of Rajputization & The Closure of Clan Endogamy",
    movement: "Movement I: Ethnogenesis & The Military Labour Market (Kolff & Historiographical Revision)",
    scope: "Kolff (Ch. 3) • Chattopadhyaya • Tod (Vol. 1, Intro)",
    primary_authors: ["Dirk H. A. Kolff", "B. D. Chattopadhyaya"],
    core_concept: "Under the consolidating pressure of the Mughal state and Rajput royal houses in the 16th and 17th centuries, the fluid warrior class underwent 'Rajputization': ruling houses patronized Charan bards and Brahmin genealogists to codify rigid genealogies, exalting Sun (Suryavansha) and Moon (Chandravansha) lineages while casting out unassimilated peasant warriors as 'spurious'.",
    epistemic_audit: "HISTORICAL SOCIOLOGY & ANTHROPOLOGY. Reconciles Tod's bardic lists with modern epigraphic evidence of clan formation in early medieval Rajasthan.",
    key_tenets: [
      "The Mughal alliance required legal clarity: the imperial court needed to know which princes had legitimate sovereign authority to assign hereditary watan jagirs and command royal troops (Kolff).",
      "Genealogical inflation: local ruling families hired Charans (bards) to compose *vamsavalis* (dynastic chronicles) connecting regional chieftains to ancient epic heroes of the Ramayana and Mahabharata.",
      "The closure of marriage circles: marital alliances shifted from open political alliances with diverse groups to strictly policed hypergamous clan networks (Sisodia, Rathore, Kachwaha, Hada)."
    ],
    operational_heuristic: "Trace the shift from functional martial identity to institutionalized genetic hierarchy as a mechanism of political state-building.",
    verbatim_anchor: "“The open horizon of Rajput identity was closed by the bureaucratization of the Mughal Empire and the invention of hypergamous genealogies.” — Intellectualist Synthesis",
    epistemic_status: "HISTORICAL SOCIOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-agnikula-36-royal-races-myth-vs-epigraphy",
    unit_number: 3,
    title: "The Agnikula Fire-Pit Myth & The 36 Royal Races: Bardic Legend vs. Inscriptions",
    movement: "Movement I: Ethnogenesis & The Military Labour Market (Kolff & Historiographical Revision)",
    scope: "James Tod (Vol. 1, Ch. 1–2) • Modern Epigraphic Records",
    primary_authors: ["James Tod", "Modern Epigraphists"],
    core_concept: "James Tod popularized the bardic Agnikula myth—that four supreme clans (Pratihara, Paramara, Chalukya/Solanki, Chauhan) were created from a cosmic sacrificial fire on Mount Abu to destroy demons. Modern epigraphy reveals this legend only appeared centuries after their emergence as a ritual legitimation of foreign and indigenous martial assimilation.",
    epistemic_audit: "MYTHOLOGICAL DECONSTRUCTION & EPIGRAPHY. Cross-examines Tod's romantic recitation against early medieval stone inscriptions (Bijolia inscription, Harsha stone inscription).",
    key_tenets: [
      "Tod's Catalogue: Tod codified the 'Chhattis Rajkula' (36 Royal Races) as an immutable, chivalric peerage analogous to European knightly nobility (Tod).",
      "The Historical Reality: 8th-to-11th century inscriptions make zero mention of the Abu fire-pit; the Pratiharas claimed descent from Lakshmana, and the Chauhans claimed origin from the Sun (Epigraphy).",
      "Function of the Myth: The Agnikula story emerged in the late medieval *Prithviraj Raso* to unite diverse Rajput factions under a common sacred origin in the face of Central Asian Sultanate invasions."
    ],
    operational_heuristic: "Identify bardic origin myths as political survival literature forged in the crucible of medieval conflict rather than literal biological history.",
    verbatim_anchor: "“The fire-fountain of Abu was the crucible wherein were purified the broken warrior races of ancient India, born anew to defend the sacred soil.” — James Tod (Annals and Antiquities of Rajasthan)",
    epistemic_status: "EPIGRAPHIC CORRECTION",
    materiality: "IMPORTANT"
  },

  // MOVEMENT II: THE GUHILA & SISODIA DYNASTY OF MEWAR (THE UNYIELDING CITADEL)
  {
    id: "unit-04-bappa-rawal-foundations-mewar-chittor",
    unit_number: 4,
    title: "Bappa Rawal & The Geopolitical Foundations of Mewar at Chittor",
    movement: "Movement II: The Guhila & Sisodia Dynasty of Mewar (The Unyielding Citadel)",
    scope: "James Tod (Vol. 1: History of Mewar, Ch. 1–3)",
    primary_authors: ["James Tod"],
    core_concept: "In the 8th century, Bappa Rawal captured the monolithic hilltop rock of Chittorgarh from the Mori rulers, establishing the Guhila dynasty under the spiritual sovereignty of Eklingji (Shiva), transforming the Mewar rulers into mere prime ministers (*Dewan*) of God.",
    epistemic_audit: "FOUNDATIONAL STATE-FORMATION & SACRED KINGSHIP. Confirmed by 10th-century Atpur and Eklingji inscriptions; marks the rare Indian political model where the king is formally a servant of the patron deity.",
    key_tenets: [
      "The Dewan of Eklingji: The Maharanas of Mewar never took the title of 'King of Kings' (*Maharajadhiraja*); they ruled as 'Dewan' (prime ministers) on behalf of Eklingji, making surrender of territory an act of religious apostasy (Tod).",
      "Chittorgarh as a Strategic Keystone: An isolated 500-foot basalt plateau with sheer cliffs and natural monsoon reservoirs, Chittor commanded the primary military and commercial highway connecting the Gangetic plains to Gujarat ports.",
      "Repelling Early Arab Thrusts: Bappa Rawal is recorded as part of the regional coalition (alongside Nagabhata I) that checked Arab Umayyad advances past the Thar desert into the Indian interior."
    ],
    operational_heuristic: "Understand how anchoring political sovereignty in a deity rather than a mortal king provided Mewar with existential immunity against surrender.",
    verbatim_anchor: "“The crown of Mewar rested not on the head of its mortal kings, but upon the altar of Eklingji; the Maharana was but his regent and sword-bearer.” — James Tod",
    epistemic_status: "INDIGENOUS POLITICAL THEOLOGY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-05-first-siege-chittor-1303-padmini-jauhar",
    unit_number: 5,
    title: "The First Siege of Chittor (1303): Alauddin Khalji, The Padmini Debate & The Genesis of Jauhar",
    movement: "Movement II: The Guhila & Sisodia Dynasty of Mewar (The Unyielding Citadel)",
    scope: "Tod (Vol. 1, Ch. 6) • Amir Khusrau (Khazain-ul-Futuh) • Malik Muhammad Jayasi (Padmavat)",
    primary_authors: ["James Tod", "Amir Khusrau", "Modern Historiography"],
    core_concept: "In 1303, Sultan Alauddin Khalji besieged Chittor for eight months. Faced with starvation, the women led by Rani Padmini performed the first recorded royal Jauhar in Mewar, and Rana Ratan Singh led the garrison in a fatal Saka charge. The siege became the archetypal crucible of Rajput chivalric myth.",
    epistemic_audit: "HISTORIOGRAPHICAL DISPUTE MATRIX. Contemporaneous court chronicler Amir Khusrau records the military siege and mass slaughter of 30,000 peasants, but never mentions Padmini or the mirror scene. Padmini first appears 237 years later in Jayasi's Sufi allegory *Padmavat* (1540), which Tod absorbed as literal history.",
    key_tenets: [
      "The Military Reality: Alauddin's goal was imperial expansion, subjugating regional fortresses, and securing trade conduits to Gujarat, not the kidnapping of a legendary queen (Modern Historiography).",
      "The Human Sacrifice: When the citadel could no longer hold, thousands of women cast themselves into subterranean fire chambers while warriors donned saffron garments to die in the breach.",
      "Dynastic Shift to Sisodia Branch: Following the destruction of the main Guhila line, Rana Hammir of the junior Sisodia branch reclaimed Chittor around 1326, founding the Sisodia dynasty."
    ],
    operational_heuristic: "Disentangle the verified military tragedy of the 1303 siege from the subsequent 16th-century literary allegorization of Padmini.",
    verbatim_anchor: "“The day was lost... The fair Padmini and her female companions entered the subterranean fiery vault, and the massive gates closed on the flower of Chittor.” — James Tod",
    epistemic_status: "HISTORIOGRAPHICAL DISPUTE MATRIX",
    materiality: "CRITICAL"
  },
  {
    id: "unit-06-rana-kumbha-kumbhalgarh-fortress-architect",
    unit_number: 6,
    title: "Rana Kumbha: The Fortification of Kumbhalgarh, Vijay Stambha & Renaissance Statecraft",
    movement: "Movement II: The Guhila & Sisodia Dynasty of Mewar (The Unyielding Citadel)",
    scope: "James Tod (Vol. 1, Ch. 8) • Giles Tillotson (The Rajput Palaces, Ch. 2)",
    primary_authors: ["James Tod", "Giles Tillotson"],
    core_concept: "Rana Kumbha (r. 1433–1468) was the supreme military architect and intellectual of medieval Rajasthan. He constructed 32 of the 84 defensive fortresses in Mewar, including the impregnable mountain citadel of Kumbhalgarh, and erected the iconic Vijay Stambha (Tower of Victory) at Chittor to commemorate his victories over the Malwa and Gujarat Sultanates.",
    epistemic_audit: "ARCHITECTURAL AND EPIGRAPHIC RECORD. Corroborated by Kumbhalgarh inscriptions and extensive surviving monuments; exemplifies the golden age of classical Rajput renaissance.",
    key_tenets: [
      "The Wall of Kumbhalgarh: Engineered a 36-kilometer perimeter wall—second in length only to the Great Wall of China—encircling a rugged Aravalli valley containing self-sufficient farmland, temples, and an elevated inner keep (*Katargarh*) (Tillotson).",
      "The Dual Sultanate Threat: Defeated the joint armies of Sultan Mahmud Khalji of Malwa and Sultan Qutb-ud-din of Gujarat, holding Mahmud captive at Chittor for six months before magnanimously releasing him (Tod).",
      "Polymath Renaissance: Kumbha was a prolific Sanskrit scholar, musicologist (authoring *Sangita Raja*), and patron of temple architecture (Ranakpur Jain temple was built under his royal charter)."
    ],
    operational_heuristic: "Recognize that enduring military resistance requires civilizational infrastructure: fortifications, agricultural reservoirs, and cultural patronization.",
    verbatim_anchor: "“Of the eighty-four fortresses for the defense of Mewar, thirty-two were erected by Kumbha... He was a conqueror who built like a giant and wrote like a sage.” — James Tod",
    epistemic_status: "EPIGRAPHIC & ARCHITECTURAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-07-rana-sanga-battle-khanwa-1527",
    unit_number: 7,
    title: "Rana Sanga (Sangram Singh): The Great Rajput Confederation & The Battle of Khanwa (1527)",
    movement: "Movement II: The Guhila & Sisodia Dynasty of Mewar (The Unyielding Citadel)",
    scope: "James Tod (Vol. 1, Ch. 9) • Baburnama • Dirk Kolff (Ch. 2)",
    primary_authors: ["James Tod", "Babur", "Dirk Kolff"],
    core_concept: "Rana Sanga united virtually every major Hindu and Afghan warlord of North India into a formidable confederation to halt the nascent Mughal invasion. At the Battle of Khanwa (1527), Sanga's overwhelming traditional cavalry army was defeated by Babur's revolutionary combination of field artillery (*topkhana*), matchlocks (*tufang*), and Ottoman flanking tactics (*tulughma*).",
    epistemic_audit: "MILITARY REVOLUTION & HISTORIOGRAPHICAL SYNTHESIS. Cross-references Tod's heroic eulogy with Babur's tactical military diary (*Baburnama*); marks the decisive transition of Indian warfare into the gunpowder era.",
    key_tenets: [
      "The Body of Battles: Sanga bore 80 wounds on his body from sword, lance, and arrow, had lost an eye, an arm, and was crippled in one leg, yet remained the unchallenged paramount warlord of Hindustan (Tod).",
      "The Multi-Faceted Coalition: Sanga’s army included Rathores of Marwar, Kachwahas of Amber, Hadas of Haravati, and Muslim Afghan lords like Hasan Khan Mewati and Mahmud Lodi (Kolff).",
      "Tactical Revolution: Sanga's massed cavalry charges shattered against Babur's chained cart barrier (*araba*) and were decimated by flank sweeps and musket volleys—proving that raw chivalric bravery could not overcome modern integrated firepower."
    ],
    operational_heuristic: "Observe how tactical technological revolutions (gunpowder and artillery) annihilate elite traditional warrior castes who refuse to modernize doctrine.",
    verbatim_anchor: "“He was the link between the old heroic age and the modern; eighty wounds from sword or lance adorned his frame, and he was scarred like an ancient oak.” — James Tod",
    epistemic_status: "MILITARY HISTORICAL TURNING POINT",
    materiality: "CRITICAL"
  },

  // MOVEMENT III: THE HEROIC EPOCH: MAHARANA PRATAP & THE FOREST WAR
  {
    id: "unit-08-third-siege-chittor-1568-akbar-jaimal-patta",
    unit_number: 8,
    title: "The Third Siege of Chittor (1568): Akbar, Jaimal & Patta, and The Fall of the Rock",
    movement: "Movement III: The Heroic Epoch: Maharana Pratap & The Forest War",
    scope: "James Tod (Vol. 1, Ch. 10) • Abul Fazl (Akbarnama) • Tillotson (Ch. 3)",
    primary_authors: ["James Tod", "Abul Fazl"],
    core_concept: "In 1567–1568, Mughal Emperor Akbar laid siege to Chittorgarh with massive siege engines and mining sappers. Maharana Udai Singh II evacuated into the Aravalli hills to found Udaipur, leaving the fort under Jaimal Rathore and Patta of Kelwa. After Jaimal was killed by Akbar's musket *Sangram*, the women performed Jauhar, the defenders charged out in Saka, and Akbar ordered the execution of 30,000 inhabitants.",
    epistemic_audit: "EPIGRAPHIC AND PERSIAN CHRONICLE CONCURRENCE. Recorded in detail by both Abul Fazl's *Akbarnama* and Tod's bardic accounts; marked the permanent abandonment of Chittor as a royal capital.",
    key_tenets: [
      "Strategic Evacuation: Udai Singh's decision to abandon the rock fortress for the inaccessible Aravalli hills was reviled by Tod as cowardice, but modern military historians recognize it as brilliant strategic foresight: mountain warfare neutralizes siege artillery.",
      "The Engineering of the Siege: Akbar used *sabats* (covered trenches) and underground gunpowder mines to breach the basalt walls under constant sniper fire.",
      "Akbar's Memorial Statues: So deeply was Akbar impressed by the doomed valor of Jaimal and Patta that he erected statues of them mounted on elephants at the gates of his imperial palace at Agra (Abul Fazl)."
    ],
    operational_heuristic: "Recognize that holding static, immobile rock citadels against superior industrial siege warfare is strategic suicide; mobile forest defense preserves the dynasty.",
    verbatim_anchor: "“Chittor fell, but Jaimal and Patta left names that will echo as long as an Aravalli hill stands against the sky.” — James Tod",
    epistemic_status: "VERIFIED HISTORICAL TRAGEDY",
    materiality: "CRITICAL"
  },
  {
    id: "unit-09-maharana-pratap-battle-haldighati-1576",
    unit_number: 9,
    title: "Maharana Pratap & The Battle of Haldighati (1576): Tactics, Chetak, and The Yellow Pass",
    movement: "Movement III: The Heroic Epoch: Maharana Pratap & The Forest War",
    scope: "Tod (Vol. 1, Ch. 11) • Badauni (Muntakhab-ut-Tawarikh) • Modern Military Analysis",
    primary_authors: ["James Tod", "Abd al-Qadir Badauni", "Modern Military Historians"],
    core_concept: "On June 18, 1576, Maharana Pratap engaged the imperial Mughal vanguard commanded by Raja Man Singh of Amber and Asaf Khan at the narrow yellow-soil defile of Haldighati. Despite a ferociously successful initial Mewari cavalry charge that broke the Mughal vanguard, imperial reserve reinforcements and archery dominance forced Pratap's tactical withdrawal into the hills.",
    epistemic_audit: "HISTORIOGRAPHICAL DISPUTE MATRIX. Badauni (eyewitness embedded in the Mughal ranks) describes the chaos, the terror of Pratap's war elephants (*Ram Prasad*), and the failure to pursue Pratap into the pass. Tod romanticizes the duel with Man Singh; modern military consensus confirms it was an imperial tactical victory on the field, but a total strategic failure because Pratap escaped, the army remained intact, and Mewar was not subjugated.",
    key_tenets: [
      "The Coalition of Haldighati: Pratap's army was not a communal monolith—his frontline commander was Hakim Khan Suri (an Afghan Muslim artillery/swordsman), and his vital rear guard and mountain snipers were indigenous tribal Bhils led by Rana Punja.",
      "The Legend of Chetak: Pratap’s stallion Chetak carried his wounded master across the Maan Talab brook before collapsing and dying, becoming an immortal symbol of animal loyalty.",
      "Strategic Denial: Following the battle, Akbar personally took the field but found ghost villages; Pratap enforced a scorched-earth policy, threatening death to any Mewari peasant who cultivated plains land for Mughal revenue."
    ],
    operational_heuristic: "A military battle is won on the field, but a war is decided by operational resilience and the refusal to surrender political legitimacy.",
    verbatim_anchor: "“There is not a pass in the alpine Aravallis that is not sanctified by some deed of Pratap—some brilliant victory, or more often, some glorious defeat. Haldighati is the Thermopylae of Mewar.” — James Tod",
    epistemic_status: "HISTORIOGRAPHICAL DISPUTE RESOLUTION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-chawand-guerrilla-reconquest-mewar",
    unit_number: 10,
    title: "The Chawand Refuge & The Guerrilla Re-Conquest of Mewar (1585–1597)",
    movement: "Movement III: The Heroic Epoch: Maharana Pratap & The Forest War",
    scope: "James Tod (Vol. 1, Ch. 11) • Abul Fazl • Rima Hooja (History of Rajasthan)",
    primary_authors: ["James Tod", "Rima Hooja"],
    core_concept: "Following the Battle of Dewair (1582)—the 'Marathon of Mewar'—Pratap wiped out 36 Mughal military outposts across Mewar. Taking advantage of Akbar's military distraction with northwestern frontier rebellions in Punjab and Kabul, Pratap established his new capital at Chawand in 1585, recovering virtually all of Mewar except the isolated fortresses of Chittor and Mandalgarh.",
    epistemic_audit: "CORRECTIVE HISTORIOGRAPHY. Dispels the popular misconception that Pratap died a miserable, starving fugitive in caves; archaeological excavations at Chawand reveal palatial structures, mints, and flourishing Rajput miniature paintings produced during his peaceful final decade.",
    key_tenets: [
      "The Battle of Dewair (1582): Pratap and his son Amar Singh annihilated the imperial garrison commanded by Sultan Khan, triggering a domino collapse of Mughal garrisons throughout the region (Tod).",
      "Financial Reconstruction by Bhama Shah: Mewar’s prime minister and treasurer Bhama Shah donated his immense ancestral fortune, allowing Pratap to pay and provision 25,000 soldiers for twelve years.",
      "Civilizational Flourishing at Chawand: Far from being mere rough forest nomads, Pratap’s court patronized artists who founded the celebrated Chawand school of Mewar painting."
    ],
    operational_heuristic: "Guerrilla resistance must eventually transition from tactical raiding into administrative state-reconstruction and economic stabilization.",
    verbatim_anchor: "“He left his people an untamed spirit, a recovered territory, and an unsullied name; he died in his bed at Chawand, with his princes swearing never to bow to the Turk.” — James Tod",
    epistemic_status: "VERIFIED HISTORICAL RECONSTRUCTION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-11-amar-singh-treaty-1615-honorable-peace",
    unit_number: 11,
    title: "Maharana Amar Singh & The Treaty of 1615: The Preservation of Sovereign Prestige",
    movement: "Movement III: The Heroic Epoch: Maharana Pratap & The Forest War",
    scope: "Tod (Vol. 1, Ch. 12) • Jahangir (Tuzuk-i-Jahangiri) • Hallissey (Ch. 2)",
    primary_authors: ["James Tod", "Jahangir", "Robert C. Hallissey"],
    core_concept: "After decades of continuous warfare, Prince Khurram (later Shah Jahan) laid waste to Mewar's peasantry. In 1615, Maharana Amar Singh accepted a treaty with Emperor Jahangir. Jahangir granted unprecedented, generous terms: the Maharana was never required to attend the Mughal court in person, was excused from sending royal daughters in marriage, and Chittor was returned on the sole condition that its ruined fortifications not be rebuilt.",
    epistemic_audit: "TREATY PROVENANCE & COURT DIPLOMACY. Fully documented in Jahangir's autobiography *Tuzuk-i-Jahangiri*; demonstrates the unique prestige of Mewar in Mughal eyes.",
    key_tenets: [
      "The Sacred Exemption: While every other Rajput king had to present himself before the Emperor as a subordinate and enter marriage alliances, Mewar's crown prince (*Karan Singh*) represented the house, preserving the Maharana's personal sovereignty.",
      "The Ruined Fortress Condition: The Mughals recognized that a refortified Chittor was an existential threat, making the prohibition of its rebuilding the centerpiece of the treaty.",
      "Amar Singh’s Grief: Despite the honorable terms, Amar Singh was so shattered by surrendering absolute isolation that he abdicated executive rule, spending his remaining years in solitary retreat at the Nau Chowki."
    ],
    operational_heuristic: "Pragmatic diplomacy that secures 95% of sovereign exemptions is superior to stubborn total biological annihilation of one's populace.",
    verbatim_anchor: "“Jahangir treated the son of Pratap with an honor granted to no other monarch of the East... The Sisodias bent their knee, but they preserved their blood and their soul.” — James Tod",
    epistemic_status: "DIPLOMATIC TREATY ARCHIVE",
    materiality: "IMPORTANT"
  },

  // MOVEMENT IV: THE RATHORES OF MARWAR & DESERT STATECRAFT
  {
    id: "unit-12-rao-jodha-mehrangarh-jodhpur-1459",
    unit_number: 12,
    title: "Rao Jodha & The Foundation of Mehrangarh: The Desert Empire of Marwar (1459)",
    movement: "Movement IV: The Rathores of Marwar & Desert Statecraft (Tod - Vol. 2)",
    scope: "James Tod (Vol. 2: History of Marwar, Ch. 1–3) • Tillotson (Ch. 4)",
    primary_authors: ["James Tod", "Giles Tillotson"],
    core_concept: "Following years of bitter warfare with Rana Kumbha of Mewar, Rao Jodha established a new Rathore capital in 1459, erecting the colossal cliff citadel of Mehrangarh on the isolated rock of Bhakurcheeria, creating the urban and military core of Marwar (Jodhpur).",
    epistemic_audit: "REGIONAL POLITY FORMATION & URBAN GEOGRAPHY. Confirmed by Jodhpur state Khyats and architectural analysis; marked the strategic shift from vulnerable Mandore to an impregnable desert promontory.",
    key_tenets: [
      "The Geopolitical Shift: Jodha recognized that the ancient capital of Mandore was indefensible against modern cavalry; Mehrangarh rose 400 feet above the desert plains with sheer rock walls (Tillotson).",
      "The Treaty of Awal-Bawal: Jodha and Kumbha settled the border between Mewar and Marwar, famously demarcating that wherever the yellow acacia (*Bawal*) grew was Marwar, and wherever the green creepers (*Awal*) flourished belonged to Mewar.",
      "Clan Expansion: Jodha's numerous sons established subsidiary Rathore principalities throughout the desert, most notably Rao Bika founding the kingdom of Bikaner in 1465."
    ],
    operational_heuristic: "Geographic adaptation: desert rulers survive by exploiting arid distances, building perched citadels, and diversifying royal branches across trade routes.",
    verbatim_anchor: "“Mehrangarh, the citadel of the Sun, rose from the desert rock like the work of giants; it was the fortress-palace of a race that never feared the sword.” — James Tod",
    epistemic_status: "URBAN AND ARCHITECTURAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-13-maldeo-rathore-battle-giri-sumel-1544",
    unit_number: 13,
    title: "Maldeo Rathore & The Battle of Giri-Sumel (1544): Sher Shah Suri's 'Handful of Millet'",
    movement: "Movement IV: The Rathores of Marwar & Desert Statecraft (Tod - Vol. 2)",
    scope: "James Tod (Vol. 2, Ch. 4) • Abbas Sarwani (Tarikh-i-Sher Shahi) • Dirk Kolff",
    primary_authors: ["James Tod", "Abbas Sarwani", "Dirk Kolff"],
    core_concept: "Rao Maldeo of Marwar expanded Rathore dominion across 38 districts, becoming the 'most potent prince of Hindustan' (Ferishta). In 1544, Afghan Emperor Sher Shah Suri invaded with 80,000 troops. At the Battle of Giri-Sumel, despite Sher Shah planting forged letters that caused Maldeo to retreat, Rathore commanders Jaita and Kumpa charged with just 12,000 men, nearly slaying Sher Shah and forcing his famous confession.",
    epistemic_audit: "HISTORICAL BATTLE ANALYSIS & PSYCHOLOGICAL WARFARE. Verified in Abbas Khan Sarwani’s official chronicle *Tarikh-i-Sher Shahi*; classic case study of psychological disinformation fracturing an alliance.",
    key_tenets: [
      "The Forged Letter Stratagem: Sher Shah, terrified of facing Maldeo in open desert battle, planted letters in Maldeo's camp implying his generals Jaita and Kumpa had sold him out for Afghan gold.",
      "The Suicide Charge of Honor: Mortified that their master doubted their fidelity, Jaita and Kumpa refused to retreat, attacking Sher Shah's entrenched elephant-and-artillery center with suicidal fury, wiping out the Afghan frontline.",
      "Sher Shah's Confession: After barely surviving the charge through his reserve matchlocks, Sher Shah uttered his immortal evaluation: *'For a mere handful of bajra (millet), I had almost lost the Empire of Hindustan.'*"
    ],
    operational_heuristic: "Beware of psychological warfare: a commander who allows paranoid suspicion to break trust with his frontline generals guarantees strategic defeat.",
    verbatim_anchor: "“I had nearly lost the empire of all Hindustan for a handful of millet.” — Sultan Sher Shah Suri (after Giri-Sumel, 1544)",
    epistemic_status: "VERIFIED HISTORICAL BATTLE",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-rao-chandrasen-forgotten-pratap-marwar",
    unit_number: 14,
    title: "Rao Chandrasen: The Forgotten 'Pratap of Marwar' & Desert Guerrilla Warfare",
    movement: "Movement IV: The Rathores of Marwar & Desert Statecraft (Tod - Vol. 2)",
    scope: "James Tod (Vol. 2, Ch. 4) • Abul Fazl (Akbarnama) • Rima Hooja",
    primary_authors: ["James Tod", "Rima Hooja"],
    core_concept: "Rao Chandrasen of Marwar (r. 1562–1581) defied Emperor Akbar a decade before Maharana Pratap. Rejecting submission at the Nagaur Darbar in 1570, Chandrasen was driven from Jodhpur and waged relentless guerrilla warfare from the rugged desert hills of Bhadrajun and Siwana until his death, refusing compromise.",
    epistemic_audit: "HISTORIOGRAPHICAL REVISION. Restores Chandrasen's historical precedence over Pratap in initiating anti-Mughal guerrilla resistance in Rajasthan.",
    key_tenets: [
      "The Nagaur Darbar (1570): When Akbar summoned the Rajasthan princes to submit and offer marital alliances, Chandrasen attended, observed the humiliating sycophancy, and fled into the night without bowing.",
      "The Siwana Citadel: Chandrasen turned the remote desert fortress of Siwana into an impenetrable guerrilla operations base, repeatedly raiding Mughal supply caravans crossing to Gujarat.",
      "Tragic Obscurity: Unlike Pratap, whose kingdom eventually recovered, Chandrasen's own brothers (Mota Raja Udai Singh) aligned with Akbar, and after Chandrasen's death, Marwar was brought firmly into the Mughal imperial system."
    ],
    operational_heuristic: "A pioneer who resists alone without internal dynastic cohesion is easily isolated and eclipsed by history, even if his tactics were identical to more celebrated heroes.",
    verbatim_anchor: "“He was the true precursor to Pratap; he wandered the sands of Marwar without a throne, but he died a free man in the hills of Saran.” — Rima Hooja",
    epistemic_status: "HISTORIOGRAPHICAL RESTORATION",
    materiality: "IMPORTANT"
  },

  // MOVEMENT V: THE KACHWAHAS OF AMBER & MUGHAL IMPERIAL INTEGRATION
  {
    id: "unit-15-raja-bharmal-man-singh-amber-akbar-alliance",
    unit_number: 15,
    title: "Raja Bharmal & The Alliance of 1562: Realpolitik vs. Bardic Condemnation",
    movement: "Movement V: The Kachwahas of Amber & Mughal Imperial Integration (Tod - Vol. 3)",
    scope: "Tod (Vol. 3: History of Amber, Ch. 1) • Abul Fazl • Dirk Kolff (Ch. 4)",
    primary_authors: ["James Tod", "Abul Fazl", "Dirk Kolff"],
    core_concept: "In 1562, facing internal dynastic rivals and regional encirclement, Raja Bharmal of Amber married his daughter Harkha Bai (later Mariam-uz-Zamani) to Akbar at Sambhar. While Tod and Mewar bards reviled Amber for 'polluting Rajput blood', modern historiography recognizes this as an act of calculated realpolitik that propelled a minor hill principality into the wealthiest, most powerful military faction in the Mughal Empire.",
    epistemic_audit: "STRATEGIC REALPOLITIK AUDIT. Weighs Mewar's moral-isolationist bardic ideology against Amber's practical statecraft and military hegemony under the Mughals.",
    key_tenets: [
      "Vulnerability of Amber: Amber was an impoverished, fractured kingdom caught between the aggressive Rathores of Marwar and the Delhi Sultanate; the Mughal alliance guaranteed its borders and dynastic survival.",
      "The Transformation of the Mansabdari System: Kachwaha princes were not treated as conquered slaves; they were elevated to the highest 7,000-horse commands (*Haft Hazari*), serving as governors of Kabul, Bengal, and the Deccan.",
      "Cultural Counter-Colonization: Kachwaha rajas used vast Mughal treasury funds to build the Amber Fort, Jaigarh cannon foundries, and patronize Hindu temples from Vrindavan (Govind Dev temple) to Varanasi."
    ],
    operational_heuristic: "Strategic compromise: trading formal external submission for supreme internal autonomy and immense imperial power.",
    verbatim_anchor: "“Amber bartered her ancient purity for imperial splendor; but while Mewar bled in her rocky defiles, the Kachwaha princes governed kingdoms from Kabul to the Bay of Bengal.” — James Tod",
    epistemic_status: "STRATEGIC REALPOLITIK",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-raja-man-singh-imperial-military-hegemony",
    unit_number: 16,
    title: "Raja Man Singh I: Imperial Commander-in-Chief from Kabul to Bengal",
    movement: "Movement V: The Kachwahas of Amber & Mughal Imperial Integration (Tod - Vol. 3)",
    scope: "James Tod (Vol. 3, Ch. 1) • Abul Fazl (Akbarnama) • Dirk Kolff",
    primary_authors: ["James Tod", "Abul Fazl"],
    core_concept: "Raja Man Singh I (1550–1614) was Akbar's paramount general, trusted far above Mughal Muslim nobles. He pacified the turbulent Afghan tribes of the Khyber Pass, annexed Orissa, conquered Bengal and Bihar, and built the formidable hilltop palace-fort of Amber, personifying the pinnacle of the Rajput-Mughal military synthesis.",
    epistemic_audit: "MILITARY BIOGRAPHY & IMPERIAL INTEGRATION. Cross-verified across Persian court records and regional temple inscriptions; illustrates the highest rank achievable by an indigenous ruler in the Mughal state.",
    key_tenets: [
      "The Afghan Campaigns: Man Singh subjugated the Roshaniyya rebels in Kabul, forcing the ferocious tribes of the northwest to submit to a Hindu general carrying the Rajput panch-ranga (five-colored) banner.",
      "Governor of Bengal (1594–1606): Defeated the independent Afghan sultans of Bengal, bringing the entire eastern seaboard into imperial orbit and establishing the city of Rajmahal.",
      "Architectural and Religious Legacy: Transported the idol of Shila Devi from Bengal to Amber Fort, reconstructed the Kashi Vishwanath temple in Varanasi, and constructed the magnificent 7-story red sandstone Govind Dev temple at Vrindavan."
    ],
    operational_heuristic: "Recognize that an imperial power is often held together by the genius and martial discipline of its allied regional generals rather than its core monarch.",
    verbatim_anchor: "“Akbar was the brain of the empire, but Man Singh was its right arm... He was a Hindu prince whose word was law from the snows of the Hindu Kush to the deltas of Bengal.” — Intellectualist Synthesis",
    epistemic_status: "HISTORICAL BIOGRAPHY",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-17-sawai-jai-singh-jantar-mantar-jaipur-planning",
    unit_number: 17,
    title: "Maharaja Sawai Jai Singh II: Astronomical Jantar Mantar, Jaipur Planning & Realpolitik",
    movement: "Movement V: The Kachwahas of Amber & Mughal Imperial Integration (Tod - Vol. 3)",
    scope: "James Tod (Vol. 3, Ch. 2) • Giles Tillotson (Ch. 6)",
    primary_authors: ["James Tod", "Giles Tillotson"],
    core_concept: "Maharaja Sawai Jai Singh II (1688–1743) was an extraordinary statesman, mathematician, and astronomer. In 1727, recognizing that Amber's hill-girt defenses were obsolete in the gunpowder era, he founded Jaipur—the first planned city in modern India, designed according to the Vedic Shilpa Shastra—and constructed five monumental stone observatories (*Jantar Mantars*) across India.",
    epistemic_audit: "SCIENTIFIC & ARCHITECTURAL MASTERWORK. Surviving observatories (UNESCO World Heritage) and Jaipur urban grid validate his peerless status as an Enlightenment monarch in 18th-century Asia.",
    key_tenets: [
      "The Science of Jantar Mantar: Finding small brass astrolabes inaccurate, Jai Singh built colossal masonry instruments (the Samrat Yantra sundial accurate to within 2 seconds), translating European works (Euclid's Elements, Napier) and Persian tables into Sanskrit.",
      "The Urban Grid of Jaipur: Partnered with Bengali architect Vidyadhar Bhattacharya to design a nine-square grid (*Prastara* model) with wide boulevards, designated trade sectors, and terracotta-pink facade standardization.",
      "The Ashvamedha Yajna: In 1734, Jai Singh revived the ancient Vedic horse sacrifice (*Ashvamedha*), signaling the reassertion of independent Hindu kingship during the collapse of Mughal authority."
    ],
    operational_heuristic: "True civilizational genius unites military diplomacy, scientific empiricism, and rational urban design to transcend decadent epochs.",
    verbatim_anchor: "“A statesman in an age of anarchy, a scholar on a throne; he calculated the movements of the stars while kingdoms were tumbling around him.” — James Tod",
    epistemic_status: "SCIENTIFIC & ARCHITECTURAL FACT",
    materiality: "CRITICAL"
  },

  // MOVEMENT VI: THE IMPERIAL CRISIS & THE RAJPUT REBELLION
  {
    id: "unit-18-marwar-succession-crisis-1678-aurangzeb-blunder",
    unit_number: 18,
    title: "The Marwar Succession Crisis (1678): Jaswant Singh's Death & Aurangzeb's Strategic Blunder",
    movement: "Movement VI: The Imperial Crisis & The Rajput Rebellion (Hallissey & Kolff)",
    scope: "Robert C. Hallissey (The Rajput Rebellion Against Aurangzeb, Ch. 1–3) • Tod (Vol. 2)",
    primary_authors: ["Robert C. Hallissey"],
    core_concept: "When Maharaja Jaswant Singh of Marwar died at Jamrud in 1678 without a living male heir, Emperor Aurangzeb attempted to take Marwar under direct imperial administration (*Khalisa*), auctioning the throne to Indra Singh Rathore. When Jaswant's pregnant queen gave birth to Ajit Singh in Lahore, Aurangzeb refused immediate recognition, demanding the infant be raised in the royal harem, detonating a 30-year war.",
    epistemic_audit: "MODERN HISTORIOGRAPHICAL DEBUNKING. Hallissey refutes Tod and Jadunath Sarkar's theory that this was a pure religious war; proves Aurangzeb's motive was strategic and financial control over the western trade routes, but executed with catastrophic political rigidity.",
    key_tenets: [
      "The Geopolitical Nexus: Marwar lay squarely across the imperial supply line from Delhi and Agra to the lucrative maritime ports of Surat and Cambay; controlling it directly had been an imperial ambition for decades (Hallissey).",
      "Violation of Rajput Watan Custom: By treating Marwar as an ordinary transferable jagir rather than honoring the infant Ajit Singh's customary succession, Aurangzeb violated the sacred unwritten Mughal-Rajput covenant established by Akbar.",
      "The Catalyst for Alliance: Aurangzeb's heavy-handed intervention convinced the proud Maharanas of Mewar that the empire intended to extinguish all Rajput autonomy, sparking the historic Rathore-Sisodia coalition."
    ],
    operational_heuristic: "An empire that violates its foundational unwritten contracts with loyal aristocratic partners inevitably triggers the collapse of its own provincial legitimacy.",
    verbatim_anchor: "“The Rajput rebellion was not born of religious fanaticism, but of imperial overreach that violated the established rules of the political game.” — Robert C. Hallissey",
    epistemic_status: "HISTORIOGRAPHICAL REASSESSMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-19-durga-das-rathore-30-year-war-for-marwar",
    unit_number: 19,
    title: "Durga Das Rathore & The 30-Year War: The Archetype of Incorruptible Fealty",
    movement: "Movement VI: The Imperial Crisis & The Rajput Rebellion (Hallissey & Kolff)",
    scope: "Hallissey (Ch. 4–5) • Tod (Vol. 2, Ch. 6) • Jadunath Sarkar",
    primary_authors: ["Robert C. Hallissey", "James Tod"],
    core_concept: "Durga Das Rathore was the military and diplomatic architect of the Rajput resistance against Aurangzeb. In 1679, he orchestrated the daring rescue of infant Prince Ajit Singh from Delhi, concealed him in the Sirohi hills, and conducted a grueling 30-year guerrilla campaign that bled the Mughal armies, successfully instating Ajit Singh as Maharaja of Jodhpur upon Aurangzeb's death in 1707.",
    epistemic_audit: "MILITARY STRATEGY & DIPLOMATIC MASTERY. Cross-verified with Persian despatches (*Waqai-i-Ajmer*); celebrated across both Indian bardic lore and colonial records as the singular incorruptible warrior of the 17th century.",
    key_tenets: [
      "The Daring Escape from Delhi: Disguised as commoners, Durga Das and a suicide band of Rathores fought through imperial guards at Delhi, leaving mock defenders behind while spiriting the royal child away.",
      "The Prince Akbar Alliance: In a masterstroke of political warfare, Durga Das convinced Aurangzeb’s own rebel son, Prince Muhammad Akbar, to declare himself Emperor in 1681 and turn against his father, escorting Akbar safely through enemy territory to the Maratha court of Sambhaji.",
      "Incorruptible Moral Standard: Durga Das captured Aurangzeb’s granddaughter (Safi-un-Nisa) and grandson during the wars; instead of using them as hostages, he appointed Muslim tutors to raise them strictly according to Islamic law, returning them years later unharmed to a stunned Aurangzeb."
    ],
    operational_heuristic: "Integrity is the supreme military weapon: a leader whom enemies respect and allies trust unconditionally can sustain resistance across decades of material destitution.",
    verbatim_anchor: "“May every mother bear a son like Durga Das, who saved the pride of the Rathores without taking a single gold coin for himself.” — Rajasthani Folk Maxim",
    epistemic_status: "VERIFIED HISTORICAL RECORD",
    materiality: "CRITICAL"
  },
  {
    id: "unit-20-rathore-sisodia-coalition-maharana-raj-singh",
    unit_number: 20,
    title: "The Rathore-Sisodia Coalition & Maharana Raj Singh: The Letter of Defiance",
    movement: "Movement VI: The Imperial Crisis & The Rajput Rebellion (Hallissey & Kolff)",
    scope: "Hallissey (Ch. 3–4) • Tod (Vol. 1, Ch. 13) • Rajsamand Inscriptions",
    primary_authors: ["Robert C. Hallissey", "James Tod"],
    core_concept: "Recognizing that the destruction of Marwar would leave Mewar isolated, Maharana Raj Singh I (r. 1652–1680) forged a united defense treaty with the Rathores. He sent an immortal diplomatic epistle to Aurangzeb challenging the re-imposition of the Jizya tax on ethical and philosophical grounds, fortified the mountain passes, and decimated imperial armies in the Debari and Desuri defiles.",
    epistemic_audit: "DIPLOMATIC ARCHIVES & EPIGRAPHY. Preserved in Sanskrit on the massive marble slabs of Rajsamand lake; provides rare contemporary ideological testimony against imperial sectarianism.",
    key_tenets: [
      "The Epistle on Tolerance: Raj Singh’s letter to Aurangzeb reminded the emperor that Akbar, Jahangir, and Shah Jahan treated Christians, Jews, Hindus, and Muslims equally as God's creation, warning that taxing the poor out of bigotry would ruin the empire.",
      "The Mountain Trap: When Aurangzeb’s armies entered the narrow Debari pass, Mewari troops blocked both ends, cutting supply trains and capturing royal baggage trains, forcing imperial forces to retreat to Ajmer.",
      "The Devastation of the Countryside: The war proved disastrous for both sides: while Mewar remained unvanquished, its fertile plains were laid waste, shifting the center of regional politics permanently toward mobile diplomacy."
    ],
    operational_heuristic: "Collective security: allied smaller powers must unite at the border of their neighbor; waiting until the neighbor falls ensures your own inevitable destruction.",
    verbatim_anchor: "“If your Majesty places any faith in that book by which humanity is guided, it is there written that God is the God of all mankind, not the God of Muslims only.” — Maharana Raj Singh to Aurangzeb (1679)",
    epistemic_status: "PRIMARY DIPLOMATIC EPISTLE",
    materiality: "CRITICAL"
  },

  // MOVEMENT VII: RELIGIOUS ETHIC, GENDER & THE CULT OF PROTECTION
  {
    id: "unit-21-khatridharma-vs-pativrata-ethics-gender-honor",
    unit_number: 21,
    title: "Khatridharma vs. Pativrata: The Dual Complementary Ethics of Male and Female Honor",
    movement: "Movement VII: Religious Ethic, Gender & The Cult of Protection (Lindsey Harlan)",
    scope: "Lindsey Harlan (Religion and Rajput Women, Ch. 1–3)",
    primary_authors: ["Lindsey Harlan"],
    core_concept: "Rajput aristocratic society operated on two interlocking ethical codes: *Khatridharma* (the warrior duty of men to conquer, protect borders, and court death on the battlefield) and *Pativrata* (the ascetic duty of women to preserve the spiritual purity, longevity, and honor of their husbands through ritual devotion and self-sacrifice).",
    epistemic_audit: "FEMINIST ANTHROPOLOGY & INDIGENOUS ETHICS. Harlan’s fieldwork among contemporary Rajput noblewomen deconstructs colonial voyeurism, revealing how women conceptualized their agency as spiritual shields for their lineage.",
    key_tenets: [
      "The Metaphysics of Protection (*Raksha*): In Rajput thought, a warrior’s physical courage is useless if his wife lacks spiritual purity; her prayers, fasting, and adherence to kul customs generate *sat* (spiritual energy) that physically protects him from blades (Harlan).",
      "The Curse of the Unchaste: If a woman wavers in her duty, her husband’s armor magically fails; conversely, a true pativrata can curse kingdoms and reverse mortal fate.",
      "Heroic Motherhood: Mothers exhorted their sons never to return from battle with wounds in the back; dying with a sword in hand was the only acceptable proof of legitimate nursing."
    ],
    operational_heuristic: "Analyze traditional chivalric systems not as one-sided male dominance, but as closed ideological ecosystems where male violence and female ritual purity mutually reinforce each other.",
    verbatim_anchor: "“The Rajput wife does not merely support her warrior husband; she is the supernatural foundation of his courage, and her purity is his truest armor.” — Lindsey Harlan (Religion and Rajput Women)",
    epistemic_status: "ANTHROPOLOGICAL ANALYSIS",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-22-kuldevi-sati-worship-supernatural-lineage-guardians",
    unit_number: 22,
    title: "The Kuldevi Cult & Sati Worship: Supernatural Guardians of the Lineage",
    movement: "Movement VII: Religious Ethic, Gender & The Cult of Protection (Lindsey Harlan)",
    scope: "Lindsey Harlan (Ch. 4–6)",
    primary_authors: ["Lindsey Harlan"],
    core_concept: "Rajput identity is anchored in two distinct female supernatural figures: the *Kuldevi* (a ferocious manifestation of the Goddess, e.g., Naganechi, Ban Mata, who protects the clan during war) and the *Sati-mata* (an ancestral human bride who immolated herself on her husband's funeral pyre, entering the domestic pantheon as a benevolent guardian of lineage morality).",
    epistemic_audit: "RELIGIOUS ANTHROPOLOGY & ANCESTOR WORSHIP. Maps the psychological and sociological function of ancestral veneration in maintaining clan solidarity and enforcing strict female endogamy.",
    key_tenets: [
      "The Dual Face of the Kuldevi: The Kuldevi appears in times of war to guide the king, often manifesting as an animal (falcon, snake, or lion) to mark boundaries or announce impending victory (Harlan).",
      "The Origin of Sati: A woman does not become a Sati merely by dying; she must experience the spontaneous internal combustion of *sat* (accumulated cosmic truth) that renders her immune to flame.",
      "The *Ok* (Clan Prohibitions): A Sati’s dying words impose permanent taboos (*ok*) on her descendants (e.g., forbidding red clothing, gold ornaments, or specific horse breeds), serving as daily behavioral reminders of ancestral sacrifice."
    ],
    operational_heuristic: "Understand how historical trauma is ritualized into living religion: deceased human ancestors become divine policing agents of current clan behavior.",
    verbatim_anchor: "“The Sati is not dead; she has transformed into an eternal ancestor who stands watch over the doorway of the house, guarding its honor with her blessing and her curse.” — Lindsey Harlan",
    epistemic_status: "ETHNOGRAPHIC STUDY",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-23-jauhar-and-saka-total-sacrificial-warfare",
    unit_number: 23,
    title: "The Jauhar and Saka Protocol: Ritual Sacrificial Death as the Ultimate Sovereign Act",
    movement: "Movement VII: Religious Ethic, Gender & The Cult of Protection (Lindsey Harlan)",
    scope: "Lindsey Harlan • James Tod (Vol. 1 & 2) • Modern Cultural Analysis",
    primary_authors: ["Lindsey Harlan", "James Tod"],
    core_concept: "In Western and colonial eyes, Jauhar was viewed as tragic, passive suicide. In the Rajput epistemic framework, it was the supreme active assertion of sovereignty: when external physical defeat was mathematically guaranteed, Jauhar was the ritual transformation of biological death into an unvanquished spiritual victory, denying the enemy both captive women and enslaved warriors.",
    epistemic_audit: "PHENOMENOLOGICAL ETHICS & CULTURAL RECONSTRUCTION. Reconstructs the internal logic of medieval total warfare without romanticizing violence or collapsing into colonial pity.",
    key_tenets: [
      "The Rejection of Subjugation: In medieval warfare, captured women were systematically distributed into imperial harems and soldiers enslaved; Jauhar ensured the lineage was extinguished clean rather than absorbed into foreign houses (Tod).",
      "The Saffron Shroud (*Kesariya*): The men bathed, performed funeral rites while still alive, smeared themselves with sandal paste, put on saffron robes, chewed betel leaf, and rode out to ensure maximum enemy casualties before dying.",
      "Historical Instances: The three catastrophic Jauhars of Chittor (1303 under Padmini, 1535 under Karnavati, 1568 under Jaimal/Patta) and Jaisalmer's 'half-Jauhar' of 1550 (where no wood was available, so warriors beheaded their own women before charging)."
    ],
    operational_heuristic: "Evaluate extreme historical sacrificial rites within their contemporary existential context: total refusal of vassalage through collective martyrdom.",
    verbatim_anchor: "“Jauhar was not surrender to death; it was the defiant refusal to live as spoils of war.” — Intellectualist Synthesis",
    epistemic_status: "PHENOMENOLOGICAL ETHICS",
    materiality: "CRITICAL"
  },

  // MOVEMENT VIII: FORTRESS & PALACE ARCHITECTURE: ASYMMETRIC ENGINEERING
  {
    id: "unit-24-hill-forts-rajasthan-asymmetric-massing-palaces",
    unit_number: 24,
    title: "Hill Forts of Rajasthan: Asymmetric Massing, Jharokhas & Defensive Engineering",
    movement: "Movement VIII: Fortress & Palace Architecture: Asymmetric Engineering (Tillotson)",
    scope: "Giles Tillotson (The Rajput Palaces, Ch. 1, 4–6) • UNESCO Citations",
    primary_authors: ["Giles Tillotson"],
    core_concept: "Rajput architectural genius developed completely independent of European classical symmetry or Persian geometric regularity. Built upon precipitous hilltops, Rajput palaces utilized 'Asymmetric Massing'—gradually expanding organic stone complexes that grew along ridgelines, utilizing heavy trabeate stone beams, shaded *jharokha* balconies, *chhatri* kiosks, and rainwater harvesting cisterns.",
    epistemic_audit: "ARCHITECTURAL HISTORY & ENGINEERING. Giles Tillotson forensically dismantles the colonial myth (James Fergusson) that Rajput architecture was merely a corrupt provincial imitation of Mughal architecture, establishing its autonomous structural grammar.",
    key_tenets: [
      "Organic Asymmetry: Unlike the rigid symmetry of Mughal tombs and gardens (Charbagh), Rajput palaces (Udaipur City Palace, Bundi Garh Palace, Gwalior Man Mandir) embrace the jagged topography of the rock, producing dynamic picturesque silhouettes (Tillotson).",
      "Micro-Climate Engineering: Deep *jharokhas* (corbelled stone balconies) with intricate *jali* lattice screens caught desert breezes through the Venturi effect while shielding female courtiers (*purdah*) from external sight.",
      "The Six UNESCO Hill Forts: Chittorgarh, Kumbhalgarh, Ranthambore, Gagron (water fort), Amer, and Jaisalmer (golden desert sandstone) stand as peerless civil engineering monuments that withstood multi-year sieges."
    ],
    operational_heuristic: "Form follows terrain: true indigenous architecture embraces organic natural irregularity rather than forcing artificial geometry upon the landscape.",
    verbatim_anchor: "“Rajput architecture does not conquer nature; it crowns it. It is an art of the crag, of the rock, of the towering bastion that grows out of the mountain like living stone.” — Giles Henry Rupert Tillotson (The Rajput Palaces)",
    epistemic_status: "ARCHITECTURAL HISTORY",
    materiality: "CRITICAL"
  }
];

// Save canonical knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(rajputKnowledgeUnits, null, 2),
  'utf8'
);
console.log(`Saved knowledge-units.json (${rajputKnowledgeUnits.length} units)`);

// Save canonical rosetta-stone.json
fs.writeFileSync(
  path.join(targetDir, 'rosetta-stone.json'),
  JSON.stringify(rajputRosettaTerms, null, 2),
  'utf8'
);
console.log(`Saved rosetta-stone.json (${rajputRosettaTerms.length} terms)`);

// Generate master-notes.md
const masterNotesContent = `# The Rajput Unified Mega-Codex: The Definitive Historical & Historiographical Synthesis
**Corpus Scope:** 7 Foundational Volumes Synthesized (Lt. Col. James Tod's *Annals and Antiquities of Rajasthan* [Vols. 1, 2, & 3], Dirk H. A. Kolff's *Naukar, Rajput, and Sepoy*, Lindsey Harlan's *Religion and Rajput Women*, Giles Tillotson's *The Rajput Palaces*, Robert C. Hallissey's *The Rajput Rebellion Against Aurangzeb*)  
**System Standard:** BKRS v1.0 Historical Multi-Source Master Codex  
**Corpus Architecture:** 8 Movements | 24 Invariant Knowledge Units | Comprehensive Historiographical Audit  
**Objective:** Transform centuries of bardic lore, colonial romanticism, Persian court accounts, and cutting-edge academic ethnohistory into an uncompromising, objective, and deeply readable master chronicle of Rajput history.  

---

## Executive Summary: The Historiographical Landscape

For two centuries, the history of the Rajputs has been caught in a fierce dialectic between romantic colonial idealization, sectarian communal myth-making, and critical epigraphic revision. In the 1820s, British political agent **Lt. Col. James Tod** collected thousands of bardic *khyats*, copper plate grants, and folklore, publishing his monumental *Annals and Antiquities of Rajasthan*. Tod viewed the Rajputs through the lens of European medieval chivalry, comparing them directly to Gothic knights and Norman feudal baronies under Henry II.

In modern scholarship, groundbreaking works have dismantled both the romantic myths and imperial distortions:
1. **Dirk H. A. Kolff (*Naukar, Rajput, and Sepoy*, Cambridge):** Proves that prior to the 16th century, 'Rajput' was not a closed biological caste, but an open status category of martial employment in the competitive military labour market of Hindustan, gradually closing its boundaries through the process of 'Rajputization'.
2. **Robert C. Hallissey (*The Rajput Rebellion Against Aurangzeb*, Univ. of Missouri):** Deconstructs the 1679 Rajput crisis, proving it was not a simplistic Hindu-Muslim religious clash, but an administrative and strategic blunder over succession rights in Marwar and imperial transit routes to Gujarat.
3. **Lindsey Harlan (*Religion and Rajput Women*, UC Press / Munshiram Manoharlal):** Analyzes the inner religious world of Rajput noblewomen, deciphering the dual protective ethics of *Khatridharma* (male warrior duty) and *Pativrata* (female spiritual shielding), along with the ancestral cults of the *Kuldevi* and the *Sati*.
4. **Giles Tillotson (*The Rajput Palaces*, Oxford):** Establishes that Rajput fortress and palace architecture was an autonomous, highly sophisticated tradition of organic, asymmetric stone engineering tailored to rocky hilltops, rather than a mere provincial derivation of Mughal architecture.

---

## The Beginner's Rosetta Stone: 10 Essential Rajput Terms Decoded

If you are exploring Rajput history for the first time, use this master lexicon to distinguish romantic myths from historical realities:

| Term & Category | Traditional / Bardic Claim | Modern Historiographical Reality | The Everyday Analogy |
| :--- | :--- | :--- | :--- |
${rajputRosettaTerms.map(t => `| **${t.term}**<br>*\`${t.category}\`* | ${t.traditional_claim} | **${t.modern_audit}** | ${t.analogy} |`).join('\n')}

---

## 24 Unified Invariant Knowledge Units

${rajputKnowledgeUnits.map(u => `### [Unit ${String(u.unit_number).padStart(2, '0')}] ${u.title}
- **Structural Movement:** ${u.movement}
- **Corpus Sources:** ${u.scope}
- **Primary Authors:** ${u.primary_authors.join(', ')}
- **Epistemic Classification:** \`${u.epistemic_status}\` | Materiality: **${u.materiality}**

#### Core Invariant Concept
${u.core_concept}

#### Epistemic Audit & Historiographical Context
${u.epistemic_audit}

#### Systematic Tenets & Cross-Source Principles
${u.key_tenets.map(t => `1. ${t}`).join('\n')}

#### Operational Heuristic & Strategic Insight
> *${u.operational_heuristic}*

#### Verbatim Archival Anchor
${u.verbatim_anchor}

---`).join('\n\n')}

## The Grand Historiographical Dispute Matrix

### Dispute 1: Caste by Birth vs. Military Status (Tod vs. Kolff)
- **The Romantic Bardic Stance (James Tod):** The Rajputs are pure, unbroken descendants of ancient Vedic Kshatriyas (the Solar and Lunar races), an endogamous aristocracy whose martial spirit is hereditary.
- **The Modern Ethnohistorical Stance (Dirk Kolff):** 'Rajput' was an open martial status category throughout the 14th and 15th centuries. Peasant warriors, Purbiya mercenaries, and pastoralists became Rajputs by virtue of their arms and service (*naukari*). The caste only closed in the Mughal era through genealogical invention and hypergamous marriage policing.
- **Unified Synthesis:** Rajput identity evolved from an **open, multi-ethnic military profession** into a **closed, genealogical aristocracy** as regional kingdoms consolidated under Mughal imperial administration.

### Dispute 2: The Character of the Rajput Rebellion (1679–1681)
- **The Colonial / Communal Theory (Tod & Sarkar):** Aurangzeb’s anti-Hindu religious fanaticism (destroying temples and imposing Jizya) drove the proud Hindu Rajputs into a patriotic religious revolt to save their culture.
- **The Modern Political Economy Theory (Robert Hallissey):** The war began as a specific succession crisis in Marwar following Maharaja Jaswant Singh’s death in Jamrud without an heir. Aurangzeb attempted to bring Marwar under direct crown administration (*Khalisa*) to secure vital trade routes to Surat. The rebellion was fought over imperial-feudal power-sharing and autonomy, not religious theology.
- **Unified Synthesis:** The conflict was an **imperial crisis of legitimacy and treaty violation**: Aurangzeb broke Akbar's covenant of non-interference in ancestral watan lands, forcing Mewar and Marwar into an existential defensive coalition.

### Dispute 3: Rani Padmini of Chittor (History vs. Allegory)
- **The Popular Bardic Narrative (Tod):** Sultan Alauddin Khalji attacked Chittor in 1303 solely to capture the exquisitely beautiful queen Padmini after seeing her reflection in a mirror, leading to her heroic Jauhar.
- **The Historiographical Evidence:** Contemporary court poet Amir Khusrau accompanied Alauddin and recorded the 1303 siege in *Khazain-ul-Futuh*, describing the military operations and massacres but mentioning zero queen named Padmini or mirror trick. Padmini first appears 237 years later in Malik Muhammad Jayasi’s Sufi poetic romance *Padmavat* (1540), where she serves as an allegory for divine wisdom (*Maya*).
- **Unified Synthesis:** The **military siege and collective Jauhar of 1303 are undeniable historical facts**; but the romantic narrative of Padmini and the mirror is a 16th-century poetic legend that was subsequently codified into bardic reality.

### Dispute 4: The Battle of Haldighati (1576) — Victory vs. Strategic Stalemate
- **The Imperial Court Stance (Abul Fazl):** Akbar's imperial army commanded by Raja Man Singh utterly defeated the rebel Pratap, routed his army, and captured his war elephants.
- **The Mewari Bardic Stance (Tod):** Pratap fought like an invincible lion, pierced Man Singh's howdah, and won the moral field.
- **The Modern Military Resolution:** Haldighati was an **imperial tactical victory** on the battlefield (the Mughals held the ground at sunset), but a **complete strategic failure**: Pratap was not captured, his command core escaped intact into the mountains, Mewar's peasantry refused to submit, and within a decade, Pratap liberated 90% of his ancestral territory from Chawand.

### Dispute 5: Architectural Evolution (Mughal Imitation vs. Autonomous Innovation)
- **The Colonial Bias (James Fergusson):** Rajput palaces were charming but clumsy provincial imitations of Mughal imperial pavilions.
- **The Modern Architectural Proof (Giles Tillotson):** Rajput architecture possesses its own complete, autonomous structural grammar: organic asymmetric massing on rugged clifftops, heavy stone trabeate beam construction, deep corbelled *jharokhas*, and functional defensive integration that predates and stands distinct from Mughal symmetry.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesContent, 'utf8');
console.log("Saved master-notes.md (24 units, 10 Rosetta terms, 5 disputes)");

// Generate Standalone index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Rajput Unified Mega-Codex — Definitive Historical Synthesis | BKRS Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f5;
      --bg-card: #ffffff;
      --bg-card-subtle: #f6f2e9;
      --border-color: #e2dbce;
      --border-color-focus: #c4b8a2;
      --text-main: #231f1a;
      --text-muted: #5e574c;
      --text-subtle: #8a8172;
      --accent-saffron: #cf5e1e;
      --accent-gold: #b38628;
      --accent-crimson: #8c1d20;
      --accent-forest: #23583e;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
      --shadow-lg: 0 12px 28px rgba(0,0,0,0.12);
      --font-serif: "EB Garamond", Georgia, serif;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: "Cinzel", Georgia, serif;
      --measure: 840px;
    }

    [data-theme="dark"] {
      --bg-canvas: #131417;
      --bg-card: #1b1d22;
      --bg-card-subtle: #22252c;
      --border-color: #2f3440;
      --border-color-focus: #4b5366;
      --text-main: #eae7e1;
      --text-muted: #aba598;
      --text-subtle: #757064;
      --accent-saffron: #e06d2c;
      --accent-gold: #d4a342;
      --accent-crimson: #d43d41;
      --accent-forest: #38a374;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
      --shadow-lg: 0 12px 28px rgba(0,0,0,0.5);
    }

    [data-theme="sepia"] {
      --bg-canvas: #f4ecdc;
      --bg-card: #fcf6ea;
      --bg-card-subtle: #ede1cb;
      --border-color: #ded0b4;
      --border-color-focus: #b5a484;
      --text-main: #2b251c;
      --text-muted: #665a47;
      --text-subtle: #8a7a62;
      --accent-saffron: #b84b12;
      --accent-gold: #9e711d;
      --accent-crimson: #7d1a1d;
    }

    body[data-font="sans"] { --font-body: var(--font-sans); }
    body[data-font="serif"] { --font-body: var(--font-serif); }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body, var(--font-serif));
      font-size: 1.14rem;
      line-height: 1.78;
      transition: background-color 0.25s ease, color 0.25s ease;
      -webkit-font-smoothing: antialiased;
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-canvas);
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .top-bar-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }
    .brand-meta {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      color: var(--accent-saffron);
    }
    .brand-sub {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      color: var(--text-subtle);
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .ctrl-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 5px 12px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .ctrl-btn:hover {
      border-color: var(--accent-saffron);
      color: var(--text-main);
    }
    .ctrl-btn.active {
      background: var(--accent-saffron);
      border-color: var(--accent-saffron);
      color: #ffffff;
    }

    .hero-header {
      padding: 64px 24px 32px;
      text-align: center;
      max-width: 980px;
      margin: 0 auto;
    }
    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent-saffron);
      margin-bottom: 12px;
      display: inline-block;
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 4.8vw, 3.8rem);
      line-height: 1.15;
      font-weight: 800;
      letter-spacing: 0.02em;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.3rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 28px;
    }
    .cert-pill {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      letter-spacing: 0.04em;
    }
    .cert-pill.highlight {
      background: #cf5e1e18;
      border-color: var(--accent-saffron);
      color: var(--accent-saffron);
    }

    .hero-axiom {
      background: var(--bg-card);
      border-left: 3px solid var(--accent-saffron);
      border-radius: 0 8px 8px 0;
      padding: 20px 28px;
      max-width: 860px;
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
      color: var(--accent-saffron);
      margin-bottom: 6px;
    }
    .hero-axiom-quote {
      font-family: var(--font-serif);
      font-size: 1.16rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

    .view-navigation {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1180px;
      margin-left: auto;
      margin-right: auto;
      flex-wrap: wrap;
    }
    .tab-btn {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 10px 18px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tab-btn span {
      font-size: 0.7rem;
      color: var(--accent-saffron);
      font-weight: 800;
    }
    .tab-btn:hover {
      border-color: var(--accent-saffron);
      color: var(--text-main);
    }
    .tab-btn.active {
      background: var(--bg-card);
      border-color: var(--accent-saffron);
      color: var(--accent-saffron);
      box-shadow: var(--shadow-sm);
    }

    .main-container {
      max-width: var(--measure);
      margin: 0 auto;
      padding: 0 24px 80px;
    }

    .search-box-wrapper {
      margin-bottom: 30px;
    }
    .search-input {
      width: 100%;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 14px 18px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
      transition: border-color 0.2s;
    }
    .search-input:focus {
      outline: none;
      border-color: var(--accent-saffron);
    }

    /* ROSETTA STONE STYLES */
    .rosetta-intro-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-sm);
    }
    .rosetta-intro-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: var(--accent-saffron);
      margin-bottom: 8px;
    }
    .rosetta-intro-p {
      font-size: 1.05rem;
      color: var(--text-muted);
      line-height: 1.65;
    }

    .rosetta-term-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 26px 28px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-sm);
    }
    .rosetta-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .rosetta-term-title {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .rosetta-category-badge {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 4px;
      background: #cf5e1e18;
      color: var(--accent-saffron);
      border: 1px solid var(--accent-saffron);
    }
    .rosetta-traditional-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-crimson);
      padding: 10px 16px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 0.98rem;
      color: var(--text-muted);
      border-radius: 0 4px 4px 0;
      margin-bottom: 14px;
    }
    .rosetta-audit-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-forest);
      padding: 12px 18px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 14px;
      font-size: 1.05rem;
      line-height: 1.6;
    }
    .rosetta-analogy-box {
      font-family: var(--font-sans);
      font-size: 0.88rem;
      color: var(--text-muted);
      border-top: 1px solid var(--border-color);
      padding-top: 12px;
    }

    /* UNIT CARD STYLES */
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .unit-card-header {
      margin-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }
    .unit-meta-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .unit-number-tag {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
      color: var(--accent-saffron);
    }
    .unit-badge-epistemic {
      font-family: var(--font-sans);
      font-size: 0.68rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 4px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
    }
    .unit-title {
      font-family: var(--font-display);
      font-size: 1.55rem;
      line-height: 1.3;
      margin-bottom: 8px;
      color: var(--text-main);
    }
    .unit-scope-bar {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      color: var(--text-subtle);
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .unit-core-concept {
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 20px;
      font-weight: 500;
      color: var(--text-main);
    }
    .unit-audit-box {
      background: var(--bg-card-subtle);
      border-left: 3px solid var(--accent-gold);
      padding: 14px 18px;
      font-size: 0.95rem;
      margin-bottom: 20px;
      border-radius: 0 4px 4px 0;
      line-height: 1.6;
    }
    .unit-section-title {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-saffron);
      margin-bottom: 12px;
    }
    .unit-tenets-list {
      list-style: none;
      margin-bottom: 24px;
    }
    .unit-tenet-item {
      position: relative;
      padding-left: 24px;
      margin-bottom: 12px;
      font-size: 1.04rem;
      line-height: 1.68;
      color: var(--text-main);
    }
    .unit-tenet-item::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: var(--accent-saffron);
      font-size: 1.3rem;
      line-height: 1;
      top: 4px;
    }
    .unit-heuristic-box {
      border: 1px dashed var(--border-color);
      border-radius: 6px;
      padding: 14px 18px;
      margin-bottom: 20px;
      font-family: var(--font-sans);
      font-size: 0.88rem;
      line-height: 1.6;
      color: var(--text-muted);
    }
    .unit-heuristic-title {
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 4px;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
    }
    .unit-quote-box {
      background: var(--bg-card-subtle);
      border-radius: 6px;
      padding: 16px 22px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--text-main);
      border-left: 2px solid var(--accent-saffron);
    }

    #view-stone { display: block; }
    #view-a, #view-b, #view-c { display: none; }

    /* MATRIX STYLES */
    .matrix-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }
    .matrix-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .matrix-sides {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }
    .matrix-side {
      background: var(--bg-card-subtle);
      padding: 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .matrix-side strong {
      display: block;
      margin-bottom: 6px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--accent-saffron);
    }
    .matrix-synthesis {
      background: #cf5e1e10;
      border-left: 3px solid var(--accent-saffron);
      padding: 16px 20px;
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
      line-height: 1.65;
    }

    /* ARCHIVAL & CITADEL PLATES */
    .fort-plate-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
    }
    .fort-title {
      font-family: var(--font-display);
      font-size: 1.4rem;
      color: var(--accent-saffron);
      margin-bottom: 8px;
    }
    .fort-meta {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      margin-bottom: 14px;
    }
    .fort-desc {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--text-main);
      margin-bottom: 16px;
    }
    .fort-features {
      list-style: square inside;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      color: var(--text-muted);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .site-footer {
      border-top: 1px solid var(--border-color);
      padding: 48px 24px;
      text-align: center;
      font-family: var(--font-sans);
      font-size: 0.82rem;
      color: var(--text-subtle);
    }
    .footer-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 14px;
    }
    .footer-links a { color: var(--text-muted); text-decoration: none; }
    .footer-links a:hover { color: var(--accent-saffron); }

    @media (max-width: 720px) {
      .hero-title { font-size: 2.2rem; }
      .unit-card { padding: 24px 20px; }
      .matrix-sides { grid-template-columns: 1fr; }
      .view-navigation { flex-wrap: wrap; }
    }
  </style>
</head>
<body data-theme="dark" data-font="serif">

  <header class="top-bar">
    <div class="top-bar-inner">
      <a href="../../index.html" class="brand-link">
        <img src="../../assets/images/logo.png" alt="Intellectualist Logo" class="brand-logo">
        <div class="brand-meta">
          <span class="brand-title">INTELLECTUALIST</span>
          <span class="brand-sub">Rajput Unified Master Codex &bull; 7 Volumes Synthesized</span>
        </div>
      </a>
      <div class="top-controls">
        <div class="theme-toggle-group">
          <button class="ctrl-btn" onclick="setTheme('light')">Light</button>
          <button class="ctrl-btn" onclick="setTheme('sepia')">Sepia</button>
          <button class="ctrl-btn active" onclick="setTheme('dark')">Dark</button>
        </div>
        <div class="font-toggle-group">
          <button class="ctrl-btn active" onclick="setFont('serif')">Serif</button>
          <button class="ctrl-btn" onclick="setFont('sans')">Sans</button>
        </div>
      </div>
    </div>
  </header>

  <header class="hero-header">
    <span class="hero-kicker">BKRS v1.0 Historical Multi-Source Master Codex</span>
    <h1 class="hero-title">THE RAJPUT CHRONICLES</h1>
    <p class="hero-subtitle">Lineage Ethnogenesis, Sultanate Sieges, Mughal Statecraft & Architecture Across 7 Canonical Volumes</p>
    
    <div class="hero-badges">
      <span class="cert-pill highlight">★ 7 Volumes Synthesized</span>
      <span class="cert-pill">24 Invariant Units</span>
      <span class="cert-pill">10 Decoded Terms</span>
      <span class="cert-pill">8 Movements</span>
      <span class="cert-pill">Colonial vs Modern Historiographical Audit</span>
    </div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">Historiographical Invariant Principle</div>
      <div class="hero-axiom-quote">
        “Rajput history cannot be understood through colonial romanticism or sectarian simplification. It is the complex, centuries-long dialectic between an open military labour market and rigid caste closure, heroic sacrificial resistance (*Jauhar & Saka*), astute imperial realpolitik (*Watan Jagirs*), and an autonomous architectural genius etched in mountain stone.”
      </div>
    </div>
  </header>

  <nav class="view-navigation">
    <button class="tab-btn active" id="tab-stone" onclick="switchView('stone')">
      <span>01.</span> Beginner's Rosetta Stone (Rajput Lexicon)
    </button>
    <button class="tab-btn" id="tab-a" onclick="switchView('a')">
      <span>02.</span> Chronological Epochal Journey (24 Units)
    </button>
    <button class="tab-btn" id="tab-b" onclick="switchView('b')">
      <span>03.</span> Grand Historiographical Dispute Matrix
    </button>
    <button class="tab-btn" id="tab-c" onclick="switchView('c')">
      <span>04.</span> Hill Forts, Palaces & Archival Plates
    </button>
  </nav>

  <main class="main-container">

    <!-- VIEW STONE: ROSETTA STONE -->
    <section id="view-stone">
      <div class="rosetta-intro-card">
        <h2 class="rosetta-intro-title">The Rajput Historical Rosetta Stone (10 Terms)</h2>
        <p class="rosetta-intro-p">
          Rajput history is laden with bardic vocabulary and colonial distortions. This master decoder separates the legendary claims recorded by James Tod from the verified empirical findings of modern critical historians (Kolff, Harlan, Hallissey, Tillotson).
        </p>
      </div>

      <div class="search-box-wrapper">
        <input type="text" id="rosetta-search" class="search-input" placeholder="Search terms (e.g. Naukar, Jauhar, Agnikula, Watan, Sati, Purbiya)..." oninput="filterRosetta()">
      </div>

      <div id="rosetta-wrapper">
        ${rajputRosettaTerms.map(t => `
        <article class="rosetta-term-card" data-term="${t.term.toLowerCase()}" data-text="${t.traditional_claim.toLowerCase()} ${t.modern_audit.toLowerCase()} ${t.analogy.toLowerCase()}">
          <header class="rosetta-header">
            <h3 class="rosetta-term-title">${t.term}</h3>
            <span class="rosetta-category-badge">${t.category}</span>
          </header>

          <div class="rosetta-traditional-box">
            <strong>Traditional / Bardic View:</strong> ${t.traditional_claim}
          </div>

          <div class="rosetta-audit-box">
            <strong>Modern Historiographical Reality:</strong> ${t.modern_audit}
          </div>

          <div class="rosetta-analogy-box">
            <strong>Everyday Analogy:</strong> ${t.analogy}
          </div>
        </article>
        `).join('')}
      </div>
    </section>

    <!-- VIEW A: 24 CHRONOLOGICAL UNITS -->
    <section id="view-a">
      <div class="search-box-wrapper">
        <input type="text" id="unit-search" class="search-input" placeholder="Search units by king, battle, or scholar (e.g. Pratap, Kumbha, Kolff, Haldighati, Durga Das, Jodhpur, Sanga)..." oninput="filterUnits()">
      </div>

      <div id="units-wrapper">
        ${rajputKnowledgeUnits.map(unit => `
        <article class="unit-card" data-title="${unit.title.toLowerCase()}" data-authors="${unit.primary_authors.join(' ').toLowerCase()}" data-text="${unit.key_tenets.join(' ').toLowerCase()} ${unit.core_concept.toLowerCase()} ${unit.operational_heuristic.toLowerCase()}">
          <header class="unit-card-header">
            <div class="unit-meta-top">
              <span class="unit-number-tag">Unit ${String(unit.unit_number).padStart(2, '0')} &bull; ${unit.movement}</span>
              <span class="unit-badge-epistemic">${unit.epistemic_status}</span>
            </div>
            <h2 class="unit-title">${unit.title}</h2>
            <div class="unit-scope-bar">
              <span><strong>Sources:</strong> ${unit.scope}</span>
              <span>&bull;</span>
              <span><strong>Authors:</strong> ${unit.primary_authors.join(', ')}</span>
            </div>
          </header>

          <div class="unit-core-concept">
            ${unit.core_concept}
          </div>

          <div class="unit-audit-box">
            <strong>Historiographical & Epistemic Audit:</strong> ${unit.epistemic_audit}
          </div>

          <div class="unit-section-title">Systematic Tenets & Cross-Source Principles</div>
          <ul class="unit-tenets-list">
            ${unit.key_tenets.map(t => `<li class="unit-tenet-item">${t}</li>`).join('')}
          </ul>

          <div class="unit-heuristic-box">
            <div class="unit-heuristic-title">Operational Heuristic & Strategic Insight</div>
            <div>${unit.operational_heuristic}</div>
          </div>

          <div class="unit-quote-box">
            ${unit.verbatim_anchor}
          </div>
        </article>
        `).join('')}
      </div>
    </section>

    <!-- VIEW B: DISPUTE MATRIX -->
    <section id="view-b">
      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 1: Ancient Closed Caste vs. Open Military Labour Market</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Bardic & Colonial Lens (James Tod)</strong>
            Rajputs are an immemorial, racially pure caste descended directly from Vedic Sun and Moon kings, bound by feudal chivalry.
          </div>
          <div class="matrix-side">
            <strong>The Modern Ethnohistorical Record (Dirk Kolff)</strong>
            Prior to the 16th century, 'Rajput' was an open martial status category of military contractors (naukari). Peasant soldiers and diverse war-bands became Rajputs through martial arms.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Rajput identity evolved from an open, multi-ethnic mercenary profession into a strictly policed endogamous aristocracy as kingdoms consolidated within the Mughal imperial hierarchy.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 2: The Rajput Rebellion of 1679 (Religious Crusade vs. Political Overreach)</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Colonial / Communal Theory (Tod & Sarkar)</strong>
            Aurangzeb launched an unprovoked religious war of temple destruction and conversion, sparking a patriotic Hindu war of independence.
          </div>
          <div class="matrix-side">
            <strong>The Modern Archival Evidence (Robert Hallissey)</strong>
            The crisis began as an administrative succession dispute over Marwar following Jaswant Singh's death, as Aurangzeb attempted to secure strategic Gujarat trade corridors.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> The rebellion was an imperial legitimacy crisis: Aurangzeb broke the unwritten covenant of non-interference in hereditary watan homelands, forcing Mewar and Marwar into an existential defensive coalition.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 3: Rani Padmini of Chittor (1303 Historical Reality vs. Jayasi's Allegory)</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Romantic Bardic Tradition (James Tod)</strong>
            Alauddin Khalji besieged Chittor solely to capture Padmini after seeing her beauty in a mirror, triggering the first great Jauhar.
          </div>
          <div class="matrix-side">
            <strong>The Contemporary Court Chronicle (Amir Khusrau)</strong>
            Khusrau accompanied Alauddin in 1303 and recorded the military siege in *Khazain-ul-Futuh*, mentioning zero queen named Padmini or mirror trick. Padmini first appears 237 years later in Jayasi’s *Padmavat* (1540).
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> The 1303 siege, starvation, and collective Jauhar are historical facts; but Padmini and the mirror are 16th-century Sufi poetic allegories adopted as literal truth by later bards.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 4: The Battle of Haldighati (1576) — Tactical Victory vs. Strategic Failure</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Imperial Mughal Account (Abul Fazl)</strong>
            Raja Man Singh broke Pratap's center, routed the Mewari rebels, and captured the royal war elephants.
          </div>
          <div class="matrix-side">
            <strong>The Mewari Bardic Tradition (Tod)</strong>
            Pratap fought like an invincible hero, wounded Man Singh's elephant, and remained the unbowed lord of the hills.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Tactical Mughal victory (holding the field at sunset), but a complete strategic failure: Pratap was not captured, Mewar refused to submit, and within a decade, Pratap reconquered almost all of Mewar from Chawand.
        </div>
      </div>

      <div class="matrix-card">
        <h3 class="matrix-title">Dispute 5: Rajput Palaces (Mughal Imitation vs. Autonomous Innovation)</h3>
        <div class="matrix-sides">
          <div class="matrix-side">
            <strong>The Colonial View (James Fergusson)</strong>
            Rajput palaces were provincial, picturesque derivations of imperial Mughal architecture.
          </div>
          <div class="matrix-side">
            <strong>The Modern Architectural Proof (Giles Tillotson)</strong>
            Rajput architecture developed its own autonomous grammar: asymmetric massing over mountain contours, stone trabeate beam engineering, and deep corbelled *jharokhas* independent of Mughal arches.
          </div>
        </div>
        <div class="matrix-synthesis">
          <strong>Unified Resolution:</strong> Rajput architecture is an independent, sophisticated tradition of organic rock-engineering that later engaged in a creative, mutual dialogue with Mughal forms while maintaining its structural identity.
        </div>
      </div>
    </section>

    <!-- VIEW C: CITADELS & ARCHITECTURAL PLATES -->
    <section id="view-c">
      <div class="fort-plate-card">
        <h3 class="fort-title">1. Chittorgarh: The Monolithic Shield of Mewar</h3>
        <div class="fort-meta">Plateau Fortress &bull; 7 Gates &bull; 500-Foot Basalt Scarp &bull; Mewar</div>
        <p class="fort-desc">
          The supreme symbol of Rajput sacrifice. An isolated 700-acre basalt plateau ringed by sheer cliffs, Chittorgarh withstood three epic sieges (1303 Alauddin Khalji, 1535 Bahadur Shah of Gujarat, 1568 Akbar). Its water architecture included 84 natural rock-cut cisterns capable of sustaining 50,000 people for four years.
        </p>
        <ul class="fort-features">
          <li><strong>Vijay Stambha (1448):</strong> Rana Kumbha’s 9-story, 122-foot marble-and-sandstone victory tower celebrating the defeat of the Malwa Sultanate.</li>
          <li><strong>Padan Pol to Ram Pol:</strong> Seven sequential, fortified gatehouses forcing attackers into lethal upward chokepoints under sniper fire.</li>
          <li><strong>Subterranean Jauhar Vaults:</strong> Cavernous stone chambers where royal women entered sacred immolation fires to deny the enemy captive spoils.</li>
        </ul>
      </div>

      <div class="fort-plate-card">
        <h3 class="fort-title">2. Kumbhalgarh: The Impregnable Cloud Citadel</h3>
        <div class="fort-meta">Aravalli Ridgeway &bull; 36-km Perimeter Wall &bull; 3,600 Feet Elevation &bull; Mewar</div>
        <p class="fort-desc">
          Erected by Rana Kumbha between 1443 and 1458, Kumbhalgarh served as Mewar's impregnable emergency refuge whenever Chittor fell. Its outer masonry wall stretches 36 kilometers along craggy ridgelines, wide enough for eight horses to gallop abreast.
        </p>
        <ul class="fort-features">
          <li><strong>Katargarh (The Cloud Palace):</strong> An elevated inner citadel crowning the highest peak, offering 360-degree surveillance across the Marwar desert border.</li>
          <li><strong>Self-Sustaining Interior:</strong> Encloses fertile agricultural terraces, rain reservoirs, and over 360 temples inside its defensive perimeter.</li>
          <li><strong>Historic Resilience:</strong> Fell only once in history, and then only to the combined coalition armies of Akbar, Amber, and Marwar after an accidental poisoning of its water supply.</li>
        </ul>
      </div>

      <div class="fort-plate-card">
        <h3 class="fort-title">3. Mehrangarh: The Citadel of the Sun</h3>
        <div class="fort-meta">Perched Cliff Keep &bull; 400 Feet High &bull; Jodhpur &bull; Marwar</div>
        <p class="fort-desc">
          Founded by Rao Jodha in 1459, Mehrangarh rises sheer out of a 400-foot volcanic precipice above the blue city of Jodhpur. British author Rudyard Kipling described it as 'a palace that might have been built by Titans and colored by the morning sun'.
        </p>
        <ul class="fort-features">
          <li><strong>Jai Pol & Fateh Pol:</strong> Imposing victory gates preserving the palm-prints (*chhap*) of Rathore queens who departed for Sati pyres.</li>
          <li><strong>Massive Artillery Emplacements:</strong> Ramparts mounted with historic cannons (*Kilkila*, *Shambhuban*) commanding the desert for miles.</li>
          <li><strong>Lattice Stone Jali:</strong> Intricately carved red sandstone screens allowing royal women to observe court proceedings while cooling desert breezes.</li>
        </ul>
      </div>

      <div class="fort-plate-card">
        <h3 class="fort-title">4. Amber & Jaigarh: The Double Fortress of the Kachwahas</h3>
        <div class="fort-meta">Integrated Ridge Defense &bull; Maota Lake &bull; Cannon Foundry &bull; Jaipur</div>
        <p class="fort-desc">
          The supreme example of the Rajput-Mughal architectural synthesis. The lower palace-fort of Amber (commenced by Raja Man Singh I in 1592) features terraced courtyards and the glittering mirror palace (*Sheesh Mahal*), while connected by subterranean passages to Jaigarh fort above.
        </p>
        <ul class="fort-features">
          <li><strong>Jaivana Cannon (1720):</strong> The world's largest wheeled cannon of the early modern era, forged in Jaigarh's indigenous foundries.</li>
          <li><strong>Subterranean Escape Tunnels:</strong> A secure network linking the residential palace to the military mountain citadel.</li>
          <li><strong>Water Architecture:</strong> Elaborate Persian-wheel lifting mechanisms bringing water from Maota lake hundreds of feet up into palace fountains.</li>
        </ul>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-links">
      <a href="../../index.html">&larr; Return to Intellectualist Master Library</a>
      <a href="master-notes.md" target="_blank">Download Master Notes (Markdown)</a>
      <a href="rosetta-stone.json" target="_blank">Rosetta Stone JSON</a>
      <a href="knowledge-units.json" target="_blank">Canonical JSON Payload</a>
    </div>
    <div>Intellectualist &bull; Book Knowledge Reconstruction System (BKRS v1.0) &bull; The Rajput Mega-Codex</div>
  </footer>

  <script>
    function setTheme(theme) {
      document.body.setAttribute('data-theme', theme);
      document.querySelectorAll('.theme-toggle-group .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === theme);
      });
      localStorage.setItem('bkrs_theme', theme);
    }

    function setFont(font) {
      document.body.setAttribute('data-font', font);
      document.querySelectorAll('.font-toggle-group .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === font);
      });
      localStorage.setItem('bkrs_font', font);
    }

    function switchView(view) {
      document.getElementById('view-stone').style.display = (view === 'stone') ? 'block' : 'none';
      document.getElementById('view-a').style.display = (view === 'a') ? 'block' : 'none';
      document.getElementById('view-b').style.display = (view === 'b') ? 'block' : 'none';
      document.getElementById('view-c').style.display = (view === 'c') ? 'block' : 'none';

      document.getElementById('tab-stone').classList.toggle('active', view === 'stone');
      document.getElementById('tab-a').classList.toggle('active', view === 'a');
      document.getElementById('tab-b').classList.toggle('active', view === 'b');
      document.getElementById('tab-c').classList.toggle('active', view === 'c');
    }

    function filterRosetta() {
      const q = document.getElementById('rosetta-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.rosetta-term-card');
      cards.forEach(card => {
        const term = card.getAttribute('data-term') || '';
        const text = card.getAttribute('data-text') || '';
        const match = !q || term.includes(q) || text.includes(q);
        card.style.display = match ? 'block' : 'none';
      });
    }

    function filterUnits() {
      const q = document.getElementById('unit-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.unit-card');
      cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const authors = card.getAttribute('data-authors') || '';
        const text = card.getAttribute('data-text') || '';
        const match = !q || title.includes(q) || authors.includes(q) || text.includes(q);
        card.style.display = match ? 'block' : 'none';
      });
    }

    const savedTheme = localStorage.getItem('bkrs_theme');
    if (savedTheme) setTheme(savedTheme);
    const savedFont = localStorage.getItem('bkrs_font');
    if (savedFont) setFont(savedFont);
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log("Saved index.html (Standalone 4-view Rajput reader)");

// Update library-index.json
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
const libIndex = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));

// Check if rajput-unified-codex exists in books
let rajputEntry = libIndex.books.find(b => b.id === 'rajput-unified-codex');
if (!rajputEntry) {
  rajputEntry = {
    id: "rajput-unified-codex",
    title: "The Rajput Mega-Codex: The Definitive Historical & Historiographical Synthesis",
    subtitle: "Lineage Ethnogenesis, Sultanate Sieges, Mughal Statecraft, Gender Ethics & Fort Architecture Across 7 Canonical Volumes",
    author: "James Tod, Dirk H.A. Kolff, Lindsey Harlan, Giles Tillotson, Robert C. Hallissey",
    year: 2026,
    publisher: "Intellectualist Subject Master Series (Cambridge, Oxford, UC Press, Missouri, Routledge)",
    epistemic_tier: "Tier 1: Master Historiographical & Multi-Source Synthesis",
    tier_short: "Tier 1",
    category: "Philosophy & Classical Ethics",
    original_volume: "7 Volumes Synthesized (24 Invariant Units, 10 Rosetta Terms, 8 Movements, 5-Point Dispute Matrix)",
    reading_time_saved: "135.0 hrs saved",
    hours_val: 135,
    core_axiom: "Rajput history is not a simplistic romantic legend of reckless chivalry, but a complex centuries-long dialectic between an open military labour market and rigid caste closure, heroic sacrificial resistance (Jauhar & Saka), astute imperial realpolitik (Watan Jagirs), and autonomous asymmetric mountain architecture.",
    tags: [
      "Subject Master Codex",
      "Rajput History",
      "Mewar & Sisodias",
      "Maharana Pratap",
      "Rana Kumbha & Sanga",
      "Marwar & Rathores",
      "Durga Das Rathore",
      "Amber & Kachwahas",
      "Dirk Kolff (Military Labour)",
      "Lindsey Harlan (Gender & Sati)",
      "Giles Tillotson (Fortresses)",
      "Robert Hallissey (Rebellion)",
      "James Tod (Annals)"
    ]
  };
  libIndex.books.push(rajputEntry);
}

libIndex.total_books = 43; // 36 + 7
libIndex.total_hours_saved = 880.0;
fs.writeFileSync(libIndexPath, JSON.stringify(libIndex, null, 2), 'utf8');
console.log("Updated docs/library-index.json with Rajput Mega-Codex!");

console.log("Rajput Mega-Codex generation complete!");
