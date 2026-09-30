const fs = require('fs');
const path = require('path');

const slug = 'upsc-history-question-bank-rainbow';
const title = 'UPSC History Question Bank: Scorer Series for IAS Prelims CSAT Paper-I';
const author = 'Publishers Rainbow';
const category = 'Civil Services Examination & Governance';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-ancient-harappa-vedic",
    title: "Unit 1: Ancient Civilizations: Harappa, Vedic Matrix & The Mahajanapada Era",
    themes: ["Harappan Sites & Material Culture", "Rig Vedic vs Later Vedic Institutions", "Second Urbanization & Iron Metallurgy", "16 Mahajanapadas & Rise of Magadha", "Heterodox Ideologies: Buddhism & Jainism"]
  },
  {
    id: "unit-2-classical-mauryan-gupta",
    title: "Unit 2: The Classical Empires: Mauryan Statecraft, Post-Mauryan Guilds & The Gupta Golden Age",
    themes: ["Kautilya's Arthashastra & Saptanga Theory", "Ashoka's Dhamma & Major Rock Edicts", "Post-Mauryan Economy & Shrenis (Guilds)", "Kushana Syncretism & Gandhara Art", "Gupta Administration, Agrarian Agrahara Grants & Science (Aryabhata, Varahamihira)"]
  },
  {
    id: "unit-3-southern-dynasties-sangam",
    title: "Unit 3: Peninsular & Southern Dynasties: Sangam Age, Pallavas, Cholas & Rashtrakutas",
    themes: ["Sangam Literature (Tolkappiyam, Ettuthokai, Silappadikaram)", "Tinai Landscape Ecological Matrix", "Pallava Rock-Cut Architecture", "Imperial Cholas: Local Self-Governance (Uttaramerur Inscription)", "Rashtrakuta Patronage (Ellora Kailash Cave) & Tripartite Struggle"]
  },
  {
    id: "unit-4-medieval-sultanate",
    title: "Unit 4: The Medieval Transition: Early Medieval Polities, Arab Invasions & The Delhi Sultanate",
    themes: ["Early Medieval Feudalization & Rajput Clans", "Arab Incursion in Sindh & Ghaznavid Invasions", "Delhi Sultanate Dynasties (Slave, Khalji, Tughlaq, Sayyid, Lodi)", "Alauddin Khalji's Market Regulations & Dagh/Chehra", "Muhammad bin Tughlaq's Administrative Experiments", "Iqta Administrative Architecture"]
  },
  {
    id: "unit-5-vijayanagara-bhakti-sufi",
    title: "Unit 5: Regional Splendor & Devotion: Vijayanagara, Bahmanis & The Bhakti-Sufi Nexus",
    themes: ["Vijayanagara Empire (Sangama, Saluva, Tuluva, Aravidu)", "Krishnadevaraya's Amuktamalyada & Nayankara System", "Bahmani Kingdom & Deccan Sultanates", "Bhakti Tradition: Alvars, Nayanars, Kabir, Guru Nanak, Mirabai", "Sufi Silsilahs: Chishti, Suhrawardi, Naqshbandi"]
  },
  {
    id: "unit-6-mughal-empire",
    title: "Unit 6: The Mughal Imperial Architecture: Administration, Agrarian Fiscalism & Cultural Synthesis",
    themes: ["Babur, Humayun & Sher Shah Suri's Administrative Reforms", "Akbar's Mansabdari System & Zabti/Dahsala Revenue Matrix", "Sulh-i-Kul & Religious Policies", "Jahangir, Shah Jahan & Mughal Architectural Climax", "Aurangzeb's Deccan Campaigns & Agrarian Jagirdari Crisis"]
  },
  {
    id: "unit-7-marathas-eighteenth-century",
    title: "Unit 7: Maratha Confederacy, Eighteenth-Century Transitions & Advent of Europeans",
    themes: ["Shivaji's Swarajya & Ashta Pradhan Administration", "Chauth and Sardeshmukhi Fiscal Impositions", "Peshwa Hegemony & Regional Maratha Houses", "Third Battle of Panipat (1761)", "European Trading Companies & Anglo-French Carnatic Wars"]
  },
  {
    id: "unit-8-colonial-fiscalism-1857",
    title: "Unit 8: Colonial Rule, Economic Drain, Peasant-Tribal Uprisings & The 1857 Watershed",
    themes: ["Plassey, Buxar & Treaty of Allahabad (Diwani 1765)", "Land Revenue: Permanent Settlement, Ryotwari, Mahalwari", "Deindustrialization & Dadabhai Naoroji's Drain Theory", "Pre-1857 Peasant & Tribal Revolts (Santhal, Kol, Paika)", "Revolt of 1857: Causes, Leaders, Peel Commission & Crown Takeover"]
  },
  {
    id: "unit-9-freedom-struggle-movements",
    title: "Unit 9: The Freedom Struggle: Moderates, Extremists, Revolutionary Radicals & Gandhian Movements",
    themes: ["Socio-Religious Reformers (Roy, Vidyasagar, Phule, Vivekananda)", "Moderate 3Ps vs Extremist Swadeshi/Boycott (1905)", "Surat Split & Revolutionary Phase I (Anushilan, Ghadar)", "Gandhian Satyagraha: Champaran, Kheda, Ahmedabad", "Non-Cooperation, Civil Disobedience & Quit India", "HSRA, Bhagat Singh & Subhas Bose's INA"]
  },
  {
    id: "unit-10-constitutional-acts-prelims-archetypes",
    title: "Unit 10: Constitutional Evolution (1773–1947), High-Yield Chronology & Prelims Question Archetypes",
    themes: ["Regulating Act 1773 to Charter Act 1853", "Government of India Acts (1858, 1909, 1919, 1935)", "Indian Independence Act 1947", "Chronological Sequencing Archetypes", "Terminology & Office Glossaries", "Prelims MCQ Problem-Solving Logic"]
  }
];

const masterNotes = `# Master Codex: UPSC History Question Bank (Scorer Series)
## Comprehensive Conceptual Synthesis, Question Archetypes & High-Yield History Matrices
### Source: Publishers Rainbow | Focus: UPSC Civil Services Examination Prelims & Mains

---

## Executive Architectural Summary

Historical study for the UPSC Civil Services Examination demands far more than rote memorization of chronologies; it requires an intricate understanding of structural transitions, institutional continuity, socio-economic dynamics, and cross-temporal causal connections. The *UPSC History Question Bank (Scorer Series)* by Publishers Rainbow is designed specifically to bridge raw historical data with the analytical demands of UPSC Prelims and Mains.

This Master Codex distills the 737 pages and hundreds of problem archetypes of the Question Bank into 10 structured, high-yield architectural modules spanning:
1. **Ancient India**: Prehistoric cultures, Indus Valley urbanism, Vedic literature and social stratification, the Mahajanapadas, Mauryan administrative engineering, Post-Mauryan mercantile guilds (*Shrenis*), and the classical Gupta cultural efflorescence.
2. **Peninsular & South Indian History**: Sangam literature and *Tinai* landscape ecology, Pallava rock-cut architecture, Imperial Chola agrarian institutions and local democratic self-governance (*Uttaramerur*), and the Rashtrakuta-Pratihara-Pala Tripartite struggle.
3. **Medieval India**: Feudalization, the Delhi Sultanate (fiscal innovations of Alauddin Khalji, monetary experiments of Muhammad bin Tughlaq, *Iqta* system), the Vijayanagara *Nayankara* military architecture, the Bhakti-Sufi syncretic revolution, and the Mughal bureaucratic-fiscal apparatus (*Mansabdari*, *Jagirdari*, and *Zabti*).
4. **Modern India**: The 18th-century transitional crisis, European commercial rivalries, territorial subjugation from Plassey to Buxar, colonial fiscal expropriation (Permanent Settlement, Ryotwari, Mahalwari), Dadabhai Naoroji’s Drain Theory, subaltern defiance (tribal and peasant revolts), the 1857 watershed, socio-religious renaissance, the multi-phase freedom struggle (Moderates, Extremists, Revolutionary Socialists, and Gandhian mass movements), and constitutional acts from 1773 to 1947.

---

## Unit 1: Ancient Civilizations: Harappa, Vedic Matrix & The Mahajanapada Era

### 1.1 Harappan Material Culture & Urban Typologies
The Indus Valley Civilization (c. 2600–1900 BCE) represents South Asia’s First Urbanization. In UPSC Prelims, questions repeatedly center on site-specific archaeological finds and material culture:

| Harappan Site | Location / River | Diagnostic Archaeological Discoveries |
| :--- | :--- | :--- |
| **Harappa** | Sahiwal (Punjab, Pak) / Ravi | 6 Granaries in two rows, red sandstone male torso, stone symbol of Lingam and Yoni, coffin burials (R-37 cemetery). |
| **Mohenjo-Daro** | Larkana (Sindh, Pak) / Indus | **Great Bath**, **Great Granary**, Bronze Dancing Girl (lost-wax cast), Steatite Bearded Priest-King, Pashupati seal, piece of woven cotton cloth. |
| **Lothal** | Ahmedabad (Gujarat) / Bhogava | **Tidal Dockyard** (artificial brick basin for marine shipping), terracotta rice husks, bead-making factory, fire altars, Persian Gulf button seal, double burial. |
| **Kalibangan** | Hanumangarh (Rajasthan) / Ghaggar | Ploughed agricultural field surface (furrows at right angles), fire altars, camel bones, wooden furrow, decorated floor tiles. |
| **Dholavira** | Kutch (Gujarat) / Luni | Unique **Tripartite city division** (Citadel, Middle Town, Lower Town), monumental stone water reservoirs, stadium/ceremonial ground, 10-letter signboard inscription. |
| **Banawali** | Fatehabad (Haryana) / Ghaggar | High-quality barley grains, terracotta model of a plough, radial street patterns, absence of systematic drainage. |
| **Chanhudaro** | Sindh (Pakistan) / Indus | Only Indus city **without a Citadel**; dedicated artisan industrial town (bead-making, seal-making, shell-cutting), inkpot, lipstick traces. |
| **Surkotada** | Kutch (Gujarat) | Evidence of actual horse bones (controversial/disputed in historiography), oval stone grave burials. |
| **Rakhigarhi** | Hisar (Haryana) / Drishadvati | Largest Harappan site in the subcontinent (over 350 hectares), granary, burial grounds, DNA evidence indicating indigenous continuity. |

### 1.2 The Vedic Matrix: Rig Vedic vs. Later Vedic Metamorphosis

\`\`\`
                    THE VEDIC SOCIO-POLITICAL TRANSFORMATION
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │ RIG VEDIC PERIOD (c. 1500–1000 BCE)│ LATER VEDIC PERIOD (c. 1000–600 BCE)│
   │ • Pastoral, semi-nomadic economy  │ • Settled agrarian economy (Iron/ │
   │ • Cattle wealth (*Gowhishti*)     │   *Syama Ayas* clearing forests)  │
   │ • Egalitarian tribal assemblies:  │ • Royal absolutism; *Samiti* and  │
   │   *Sabha*, *Samiti*, *Vidhata*    │   *Sabha* lose democratic power   │
   │ • Women attended assemblies;      │ • Women barred from political     │
   │   participated in Upanayana       │   assemblies; child marriage rises│
   │ • Voluntary tribute (*Bali*)      │ • Mandatory taxation (*Bali*,     │
   │ • Flexible Varna based on craft   │   *Bhaga*, *Sulka* collected by   │
   │                                   │   *Bhadadugha* tax officers)      │
   │                                   │ • Rigid, hereditary 4-Varna order │
   └───────────────────────────────────┴───────────────────────────────────┘
\`\`\`

- **Key Vedic Conceptual Terms**:
  - *Gau / Godhuli / Gomat*: Terms derived from cattle, measuring wealth (*Gomat*), time (*Godhuli*), and conflict (*Gawishti* - search for cows).
  - *Vidhata*: The oldest folk assembly of the Aryans, carrying out secular, religious, and military functions in which women actively participated.
  - *Rajan / Vis / Grama*: Patriarchal hierarchy where the clan (*Vis*) was led by the king (*Rajan*), assisted by the Purohita (priest) and Senani (commander).

### 1.3 The Second Urbanization, Mahajanapadas & Heterodox Revolutions
- **The Material Foundation**: The discovery of rich iron ore deposits in the Chhota Nagpur plateau enabled the production of heavy iron ploughshares (*Phala*) and axes (*Kuthara*), clearing the dense, humid subtropical jungles of the middle Gangetic valley. This generated massive agrarian surplus, giving birth to South Asia's **Second Urbanization** (c. 600 BCE).
- **The Sixteen Mahajanapadas**: Mentioned in the Buddhist text *Anguttara Nikaya* and Jain text *Bhagavati Sutra*:
  - *Magadha*: Emerged pre-eminent due to strategic geographical advantages: Rajgriha (surrounded by five protective hills) and Pataliputra (at the confluence of Ganga, Son, Gandak, and Ghaghra—a water fortress or *Jaldurga*), rich iron deposits, timber forests, and the pioneering military deployment of elephants (*Hasti-Sena*). Dynasties: Haryanka (Bimbisara, Ajatashatru), Shishunaga, Nanda (Mahapadma Nanda).
  - *Vajji*: Oligarchic republic (*Gana-Sangha*) with its capital at Vaishali, governed by an elected assembly of Kshatriya chieftains.
- **Buddhism vs. Jainism (Heterodox Philosophical Matrix)**:
  - *Buddhism (Gautama Buddha)*: Propounded the **Four Noble Truths** (*Chatvari Arya Satyani*) and the **Noble Eightfold Path** (*Ashtangika Marga*). Core doctrines: *Pratityasamutpada* (Dependent Origination), *Anicca* (Impermanence), *Anatta* (Non-Self), and the **Middle Path** (*Madhyama Pratipada* - avoiding extreme asceticism and extreme sensual indulgence). Four Buddhist Councils: Rajgriha (483 BCE), Vaishali (383 BCE), Pataliputra (250 BCE), Kundalvana (72 CE, where Buddhism split into Hinayana and Mahayana).
  - *Jainism (Vardhamana Mahavira)*: 24th Tirthankara; emphasized radical non-violence (*Ahimsa Paramo Dharma*), extreme asceticism, nudity (*Digambara*), and scriptural doctrines: **Syadvada** (Theory of Conditioned Predication: "Seven-fold judgment") and **Anekantavada** (Theory of Many-Sidedness of Reality / Non-Absolutism). Split into *Shvetambara* (white-clad, led by Sthulabhadra) and *Digambara* (sky-clad, led by Bhadrabahu following famine migration to Shravanabelagola, Karnataka).

---

## Unit 2: The Classical Empires: Mauryan Statecraft, Post-Mauryan Guilds & The Gupta Golden Age

### 2.1 Mauryan Imperial Engineering & Kautilya's Arthashastra
- **Kautilya's Saptanga Theory of the State**: An organic model postulating that the state consists of seven interdependent limbs:
  1. *Swami* (The King / Head): Sovereign sovereign ruler.
  2. *Amatya* (The Ministers / Eyes): Administrative bureaucracy and councilors.
  3. *Janapada* (Territory and Population / Legs): Productive agricultural lands and obedient peasantry.
  4. *Durga* (Fortified Capital / Arms): Strategic military strongholds.
  5. *Kosha* (Treasury / Mouth): Accumulated fiscal reserves collected through taxes.
  6. *Danda / Bala* (Army / Mind): Military coercive force.
  7. *Mitra* (Allies / Ears): External diplomatic alliances.
- **Mauryan Administrative Departments (*Adhyakshas*)**:
  - *Samaharta*: Chief collector of state revenues; in charge of assessment and imperial exchequer.
  - *Sannidhata*: Chief custodian of the state treasury and granaries.
  - *Sitadhyaksha*: Superintendent of state agricultural Crown lands (*Sita*).
  - *Pautavadhyaksha*: Superintendent of weights and measures.
  - *Navadhyaksha*: Superintendent of shipping, marine tolls, and river ferries.
  - *Sulkaadhyaksha*: Superintendent of customs, excise duties, and toll taxes.
- **Ashoka’s Epigraphic Corpus & Dhamma**:
  - Inscriptions engraved on Major Rock Edicts, Minor Rock Edicts, Pillar Edicts, and Cave Walls in Prakrit (Brahmi and Kharosthi scripts), Greek, and Aramaic (Kandahar bilingual inscription).
  - *Major Rock Edict I*: Prohibition of animal sacrifices and festive gatherings (*Samajas*).
  - *Major Rock Edict XIII*: Heartrending remorse over the slaughter and devastation of the **Kalinga War (261 BCE)**; renunciation of military conquest (*Bherighosha*) in favor of moral conquest through righteousness (*Dhammaghosha*).
  - *Pillar Edict VII*: Summary of Ashoka's Dhamma activities; creation of the executive office of **Dhamma Mahamattas** to propagate moral conduct and communal harmony.

### 2.2 Post-Mauryan Economic Dynamo: Shrenis, Indo-Roman Trade & Kushana Art
- **Guilds (Shrenis)**: Specialized merchant and artisan guilds functioning as economic cartels, vocational training centers, judicial arbitrators of craft disputes, and commercial banks accepting deposits and paying interest (*Akshayanivi*). Led by the guild president (*Pravara* / *Jetthaka*).
- **Indo-Roman Maritime Trade**: Documented in the 1st-century CE Greek navigational manual *Periplus of the Erythraean Sea* and Pliny the Elder’s *Naturalis Historia* (where Pliny mourned that the Roman Empire drained over 50 million sesterces annually to India for luxury goods like Malabar black pepper (*Yavanapriya*), fine muslin, pearls, and tortoiseshell). Key port: **Arikamedu** (Puducherry), where Roman amphorae, Arretine pottery, and Roman gold coins were excavated.
- **Gandhara vs. Mathura Art Schools**:

| Feature | Gandhara Art School | Mathura Art School |
| :--- | :--- | :--- |
| **Geographic Core** | Northwestern Frontier (Peshwar, Taxila). | Upper Gangetic Valley (Mathura, UP). |
| **Cultural Influence** | Greco-Roman (Hellenistic) influence blended with Buddhist themes. | Completely indigenous Indian tradition; patronized by Kushanas and Guptas. |
| **Material Used** | Grey/blue schist stone; stucco in later phase. | Spotted red sandstone quarried at Sikri. |
| **Buddha Iconography** | Realistic human anatomy, sharp Greek facial features, wavy hair tied in ushnisha, heavy flowing classical drapery, ascetic calm. | Fleshy, muscular body, smiling benign face, shaven head or curly hair, transparent clinging drapery, seated in padmasana with abhaya mudra. |
| **Religious Scope** | Almost exclusively Buddhist (Mahayana icons). | Universal: Buddhist, Jain (Aayagapatas), and Hindu deities (Vishnu, Shiva, Surya). |

### 2.3 The Gupta Classical Climax: Administration, Feudalization & Scientific Efflorescence
- **Administrative Decentralization**: Unlike the centralized Mauryan state, the Gupta empire was decentralized; conquered rulers were restored as tributary vassals (*Samantas*). The empire was divided into provinces (*Bhuktis*, governed by *Uparikas*), which were subdivided into districts (*Vishayas*, governed by *Vishayapatis*, assisted by local advisory boards including the chief merchant *Nagarashreshthi* and chief scribe *Prathamakayastha*).
- **The Agrahara System & Origins of Feudalism**: Large-scale grant of tax-free land (*Agrahara* / *Brahmadeya*) to Brahmins and temples, complete with the transfer of judicial and administrative rights over cultivators, laying the groundwork for early medieval agrarian feudalism (R.S. Sharma’s Feudalism thesis).
- **Scientific and Literary Heights**:
  - *Aryabhata*: Authored *Aryabhatiya* (499 CE); propounded that the earth is spherical and rotates on its axis; accurately calculated the value of $\pi$ ($3.1416$); formulated the decimal place-value system and zero; explained the scientific causes of solar and lunar eclipses.
  - *Varahamihira*: Authored *Pancha Siddhantika* (astronomy) and *Brihat Samhita* (encyclopedic work on geography, botany, architecture, and astrology).
  - *Kalidasa*: Premier court poet of Chandragupta II (*Vikramaditya*); composed monumental dramas (*Abhijnanashakuntalam*, *Malavikagnimitram*) and epic poems (*Raghuvamsha*, *Kumarasambhava*, *Meghaduta*).

---

## Unit 3: Peninsular & Southern Dynasties: Sangam Age, Pallavas, Cholas & Rashtrakutas

### 3.1 Sangam Literature and the Tinai Ecological Matrix
The Sangam Age (c. 3rd century BCE – 3rd century CE) produced Tamil literary classics composed across three assemblies (*Sangams*) patronized by the Pandya kings at Madurai:
- **Major Corpora**:
  - *Tolkappiyam*: Authored by Tolkappiyar; earliest extant Tamil treatise on grammar, poetics, and socio-cultural life.
  - *Eight Anthologies (Ettuthokai)* and *Ten Idylls (Pattupattu)*: Segmented into **Agam** (internal, subjective love poetry) and **Puram** (external, objective themes of war, valor, and royal justice).
  - *Epics*: **Silappadikaram** (The Jeweled Anklet) by Ilango Adigal (narrating the tragic story of Kovalan, Kannagi, and Madhavi, establishing the cult of the chaste wife or *Pattini Deivam*); and **Manimekalai** by Sittalai Sattanar (Buddhist philosophical epic continuing the life of Kovalan's daughter).
- **The Five-Fold Ecological Landscapes (Ainthinai)**:

| Tinai (Eco-Zone) | Landscape Feature | Primary Inhabitants | Economic Occupation | Presiding Deity |
| :--- | :--- | :--- | :--- | :--- |
| **Kurinji** | Mountainous / Hilly | Kuravar, Kanavar | Hunting, honey-gathering, shifting agriculture | Murugan (Seyon) |
| **Mullai** | Pastoral / Forest | Ayar, Idaiyar | Cattle-rearing, dairy farming, shifting cultivation | Mayon (Vishnu) |
| **Marudham** | Fertile River Plains | Ulavar, Vellalar | Wet paddy cultivation, agricultural labor | Vendan (Indra) |
| **Neydal** | Coastal / Littoral | Parathavar, Valayar | Fishing, salt-manufacturing, maritime trade | Varunan (Sea God) |
| **Palai** | Arid Desert / Wasteland | Maravar, Eyinar | Robbery, banditry, plunder, mercenary fighting | Korravai (Goddess of War) |

### 3.2 The Imperial Cholas: Maritime Hegemony & Village Self-Governance
- **Maritime Hegemony**: Under **Rajaraja I (985–1014 CE)** and son **Rajendra I (1014–1044 CE)**, the Chola Navy transformed the Bay of Bengal into a *"Chola Lake"*. Rajendra I launched naval expeditions conquering Sri Lanka (*Anuradhapura*), the Maldives, the Andaman & Nicobar islands, and routed the maritime empire of **Srivijaya** (Sumatra/Malaya) in 1025 CE to safeguard Indian merchant trade routes to Song Dynasty China. Built the new capital **Gangaikondacholapuram** to commemorate his victorious expedition to the river Ganga.
- **Democratic Local Self-Government (The Uttaramerur Inscriptions)**:
  - Engraved on the walls of the Vaikunda Perumal Temple at **Uttaramerur** (dated 919 and 921 CE under Parantaka I).
  - Documented the functioning of the **Sabha** (assembly of Brahmin tax-free villages or *Brahmadeyas*):
    - Village divided into **30 wards** (*Kudumbus*).
    - Candidates for executive village committees (*Variyams*: e.g., *Eri-variyam* for tank maintenance, *Thotta-variyam* for gardens, *Pon-variyam* for gold audit) had to satisfy strict qualifications: ownership of taxable land ($\ge 1/4$ veli), own residential house, age 35–70, and mastery of Vedic scriptures.
    - Disqualifications: Failure to submit accounts, embezzlement, moral turpitude, or having served on a committee in the previous three years.
    - **Kudavolai System (Lottery Election)**: Names of eligible candidates were inscribed on palm leaves, placed into an earthen pot (*Kuda*), and drawn by a young, innocent child in full public assembly.

---

## Unit 4: The Medieval Transition: Early Medieval Polities, Arab Invasions & The Delhi Sultanate

### 4.1 The Delhi Sultanate (1206–1526 CE)
Spanned five successive dynasties: Mamluk/Slave (1206–1290), Khalji (1290–1320), Tughlaq (1320–1414), Sayyid (1414–1451), and Lodi (1451–1526):
- **Balban’s Theory of Kingship (Mamluk Dynasty)**:
  - Ghiyasuddin Balban asserted the absolute divine right of monarchs: the Sultan was **Niyabat-i-Khudai** (Vicegerent of God on Earth) and **Zill-i-Ilahi** (Shadow of God).
  - Crushed the powerful Turkish oligarchic council of forty (*Chahalgani* / *Chalisa*).
  - Enforced strict court etiquette, Persian court festival of **Nauroz**, and humiliating rituals of **Sijda** (prostration) and **Paibos** (kissing the Sultan’s feet).
- **Alauddin Khalji’s Radical Reforms (Khalji Dynasty)**:
  - *Military Innovations*: Abolished feudal contingents; established a permanent standing royal army paid in cash from the central treasury; introduced **Dagh** (branding of royal war-horses to prevent substitution) and **Chehra / Huliya** (descriptive biometric roll of every soldier).
  - *Agrarian Restructuring*: Enacted direct state measurement of cultivated land (*Zabita*), fixing land revenue (*Kharaj*) at an unprecedented **50% of gross agricultural produce**, payable in cash or kind. Abolished privileges of hereditary village intermediaries (*Khuts*, *Muqaddams*, *Chaudharis*).
  - *Market Control Regulations*: Fixed prices of all commodities (food grains, cloth, horses, slaves) in four specialized markets in Delhi; supervised by **Shahna-i-Mandi** (market superintendent), spies (*Munhiyans*), and the **Diwan-i-Riyasat** (ministry of commerce).
- **Muhammad bin Tughlaq’s Controversial Experiments (Tughlaq Dynasty)**:
  1. *Transfer of Capital (1327)*: Shifted imperial capital from Delhi to **Devagiri (Daulatabad)** in the Deccan to maintain central geopolitical control; forced migration caused widespread deaths, forcing him to order the capital moved back to Delhi.
  2. *Introduction of Token Currency (1330)*: Issued copper and brass token coins with parity to silver tankas without securing state mint monopoly; illicit private mints proliferated throughout the empire (*"every Hindu house became a mint"*); revoked the decree, redeeming all token coins with genuine gold and silver bullion.
  3. *Agricultural Modernization*: Established the specialized ministry of agriculture, **Diwan-i-Amir-i-Kohi**, extending low-interest agricultural loans (*Sondhar* / *Taccavi*) to dig wells and reclaim uncultivated lands.

### 4.2 The Sultanate Administrative Matrix

| Office / Term | Function and Jurisdiction in the Sultanate Administration |
| :--- | :--- |
| **Wazir** | Prime Minister; head of the finance department (**Diwan-i-Wazarat**). |
| **Ariz-i-Mumalik** | Military head; in charge of recruitment, equipment, and reviews (**Diwan-i-Arz**, created by Balban). |
| **Diwan-i-Insha** | Ministry of imperial royal correspondence and confidential state edicts. |
| **Diwan-i-Risalat** | Ministry of religious affairs, pious endowments, and diplomatic communications. |
| **Barid-i-Mumalik** | Head of the state intelligence and postal courier network. |
| **Iqtadar / Muqti / Wali** | Holders of revenue-assignment tracts (**Iqtas**), responsible for maintaining troops, maintaining provincial order, and remitting surplus revenue (*Fawazil*) to the Sultan’s treasury. |

---

## Unit 5: Regional Splendor & Devotion: Vijayanagara, Bahmanis & The Bhakti-Sufi Nexus

### 5.1 The Vijayanagara Empire (1336–1646 CE)
Founded on the banks of the Tungabhadra river in 1336 by brothers **Harihara I and Bukka I** under the spiritual guidance of sage **Vidyaranya**:
- **Dynastic Succession**: Sangama (1336–1485) → Saluva (1485–1505) → Tuluva (1505–1570) → Aravidu (1570–1646).
- **The Climax under Krishnadevaraya (1509–1529 CE)**:
  - Maintained cordial commercial relations with the Portuguese (governor Albuquerque), monopolizing Arabian war-horses through Goa.
  - Authored the celebrated Telugu political treatise **Amuktamalyada** (formulating the ideal monarchical polity) and Sanskrit drama *Jambavati Kalyanam*.
  - Patronized the **Ashtadiggajas** (Eight Literary Giants) at his court, led by **Allasani Peddana** (*Andhra Kavita Pitamaha*) and witty court advisor **Tenali Ramakrishna**.
  - Constructed the magnificent Hazara Rama Temple, Vittala Temple (with its iconic stone chariot), and the satellite city of Nagalapuram.
- **The Nayankara Administrative and Military System**:
  - The empire was divided into military territories held by military commanders called **Nayakas** or **Poligars** (*Palaiyakkars*).
  - In exchange for territorial revenue rights (*Amaram*), Nayakas maintained fixed contingents of elephants, cavalry, and infantry for imperial service, remitted an annual tribute to the royal exchequer, and personally attended the royal court during the grand **Mahanavami Dibba** festival.
- **The Battle of Talikota (Rakshasi-Tangadi, January 23, 1565)**:
  - Alliance of Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar) crushed the Vijayanagara army under regent **Aliya Rama Raya**. Hampi was brutally sacked and leveled to ruins, marking the end of the empire's imperial glory.

---

## Unit 6: The Mughal Imperial Architecture: Administration, Agrarian Fiscalism & Cultural Synthesis

### 6.1 The Mansabdari Bureaucratic Matrix
Formulated and perfected by Emperor Akbar in 1571 CE, the Mansabdari system formed the civil-military steel frame of the Mughal Empire:
- **Dual Rank System**: Every imperial officer held a dual rank designated by two numbers:
  1. **Zat Rank**: Determined the officer's personal status, hierarchical precedence in the court, and salary according to established imperial pay scales.
  2. **Sawar Rank**: Determined the exact number of cavalry war-horses and horsemen (*Tabinan*) the officer was obligated to maintain for imperial service.
- **Dag-o-Chehra & Dakhili Troops**: Strict horse branding (*Dagh*) and descriptive rolls (*Chehra*) ensured military readiness.
- **Modes of Remuneration**:
  - *Naqdi*: Officers paid in cash directly from the central imperial treasury.
  - *Jagirdars*: Officers assigned the revenue collection rights of designated agricultural tracts (**Jagirs**). The Jagir was strictly an assignment of revenue (*Hhasil*), not ownership of the land. Jagirdars were subject to frequent transfers (every 3 to 4 years) to prevent the consolidation of autonomous regional power bases.

### 6.2 Agrarian Fiscalism: The Zabti & Dahsala System
- Perfected by Akbar’s finance minister **Raja Todar Mal** in 1580 CE (**Ain-i-Dahsala**):
  - Revenue was calculated on the basis of average agricultural yields and average market prices over the preceding **ten years (1570–1580)**.
  - State demand was fixed at **one-third (33.3%)** of average produce, payable in cash.
- **Four-Fold Land Classification**:
  1. *Polaj*: Land cultivated continuously every year without ever lying fallow; generated maximum revenue.
  2. *Parauti*: Land left fallow for a year or two to naturally recover its soil fertility.
  3. *Chachar*: Land left uncultivated for three to four years.
  4. *Banjar*: Barren, uncultivated wasteland left fallow for five or more years; taxed at nominal concession rates when brought under cultivation.

---

## Unit 7: Maratha Confederacy, Eighteenth-Century Transitions & Advent of Europeans

### 7.1 Shivaji’s Swarajya & Ashta Pradhan Administration
Chhatrapati Shivaji Maharaj (coronated at Raigad in 1674 taking the title *Chhatrapati* and *Haidava Dharmoddharak*) established an administrative and military apparatus:
- **The Council of Eight Ministers (Ashta Pradhan)**:
  1. *Peshwa (Mukhya Pradhan)*: Prime minister; in charge of general civil administration and welfare of the realm.
  2. *Amatya (Majumdar)*: Finance and accounts minister; audited all state revenues and expenditures.
  3. *Waqia-Navis (Mantri)*: Home minister; recorded court proceedings, royal daily schedules, and intelligence.
  4. *Surnavis (Sachiv)*: Royal secretary; supervised imperial correspondence and revenue drafting.
  5. *Sumant (Dabir)*: Foreign minister; in charge of external relations, diplomacy, and envoys.
  6. *Senapati (Sari Naubat)*: Commander-in-chief; in charge of army recruitment, field discipline, and organization.
  7. *Panditrao*: High priest; in charge of religious matters, charities, and judicial morals.
  8. *Nyayadhish*: Chief justice; in charge of civil and military judicial disputes.
- **Fiscal Exactions: Chauth and Sardeshmukhi**:
  - *Chauth*: Tax amounting to **one-fourth (25%)** of the gross revenue of non-Maratha neighboring territories in exchange for protection against Maratha raids and plundering.
  - *Sardeshmukhi*: An additional levy of **one-tenth (10%)** claimed by Shivaji in his hereditary capacity as the supreme feudal lord (*Sar-Deshmukh*) of Maharashtra.

---

## Unit 8: Colonial Rule, Economic Drain, Peasant-Tribal Uprisings & The 1857 Watershed

### 8.1 The Three Colonial Land Revenue Settlements

\`\`\`
                    THE LAND REVENUE ARCHITECTURE
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │ 1. PERMANENT SETTLEMENT (1793)    │ 2. RYOTWARI SYSTEM (1820)         │
   │ Lord Cornwallis • Bengal & Bihar  │ Thomas Munro • Madras & Bombay    │
   │ • Zamindars made absolute owners  │ • Cultivators (Ryots) recognized  │
   │ • State share: 10/11th fixed      │ • State tax: 45% to 55% of yield  │
   │ • Sunset Law enforced eviction    │ • Periodic revision; moneylender  │
   │ • Created absentee landlordism    │   bondage; Deccan agrarian riots  │
   ├───────────────────────────────────┴───────────────────────────────────┤
   │ 3. MAHALWARI SYSTEM (1822 / 1833)                                     │
   │ Holt Mackenzie & R.M. Bird • North-Western Provinces, Punjab, CP      │
   │ • Settlement with Village Community (Mahal) via Headman (Lambardar)   │
   │ • Joint and individual liability; high state expropriation (~50-66%)  │
   └───────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Unit 9: The Freedom Struggle: Moderates, Extremists, Revolutionary Radicals & Gandhian Movements

### 9.1 Comparative Matrix of Nationalist Trends

| Dimension | Moderates (1885–1905) | Extremists (1905–1919) | Revolutionary Socialists (1920s–30s) |
| :--- | :--- | :--- | :--- |
| **Key Leaders** | Naoroji, Gokhale, Mehta, Banerjea | Tilak, Lajpat Rai, Bipin Pal, Aurobindo | Bhagat Singh, Chandrashekhar Azad, Surya Sen |
| **Ideology** | Liberal constitutionalism; faith in British justice; gradual reform | Cultural self-respect; Swaraj; anti-colonial defiance | Scientific socialism; class struggle; anti-capitalist social revolution |
| **Tactics** | **3Ps**: Prayers, Petitions, Protests; speeches, press articles | **Swadeshi, Boycott, National Education**, mass strikes | Targeted political executions, armory raids, assembly bombings, propaganda tribunals |
| **Target Audience** | Urban educated elite, professionals | Broad middle class, students, urban working masses | Peasants, industrial factory workers, revolutionary youth |

---

## Unit 10: Constitutional Evolution (1773–1947), High-Yield Chronology & Prelims Question Archetypes

### 10.1 Key Constitutional Milestone Acts

| Act of British Parliament | Key Constitutional & Institutional Innovations Enacted |
| :--- | :--- |
| **Regulating Act of 1773** | First parliamentary intervention; designated Governor of Bengal as **Governor-General of Bengal** (Warren Hastings); established **Supreme Court at Fort William, Calcutta (1774)** with Sir Elijah Impey as Chief Justice. |
| **Pitt's India Act of 1784** | Established **Dual Control**: Court of Directors managed commercial affairs; 6-member **Board of Control** managed political and military affairs; Company territories called *"British possessions in India"*. |
| **Charter Act of 1813** | Ended Company’s trade monopoly in India, opening it to all British merchants (retained monopoly only on **Tea trade and trade with China**); allocated ₹1 lakh annually for promotion of education; permitted Christian missionaries to preach. |
| **Charter Act of 1833** | Final step toward centralization: redesignated Governor-General of Bengal as **Governor-General of India** (Lord William Bentinck); completely abolished all commercial trading privileges of the Company; added a fourth **Law Member** to the Council (Lord Macaulay); established first Law Commission to codify Indian penal laws. |
| **Charter Act of 1853** | Separated legislative and executive functions of the Governor-General’s Council; introduced an open competitive examination system for civil services recruitment (Macaulay Committee on ICS, 1854). |
| **Government of India Act 1858** | Enacted post-1857: abolished the East India Company and transferred direct imperial sovereignty to the British Crown; abolished Board of Control and Court of Directors; created the office of the **Secretary of State for India** assisted by a 15-member Council of India; Governor-General designated as **Viceroy**. |
| **Indian Councils Act 1909 (Morley-Minto Reforms)** | Introduced **Separate Electorates for Muslims**, institutionalizing communal representation; Lord Minto earned the moniker *"Father of Communal Electorates"*; permitted non-official majority in provincial legislative councils; Satyendra Prasad Sinha became first Indian member of Viceroy's Executive Council. |
| **Government of India Act 1919 (Montagu-Chelmsford Reforms)** | Introduced **Dyarchy** in the provinces: provincial subjects divided into **Transferred Subjects** (administered by Governor with elected Indian ministers) and **Reserved Subjects** (administered by Governor and executive council without legislative responsibility); introduced bicameralism and direct elections at the center. |
| **Government of India Act 1935** | Proposed an All-India Federation of provinces and princely states (never materialized); abolished provincial Dyarchy and introduced **Provincial Autonomy**; introduced Dyarchy at the Center; bifurcated legislative powers into **Three Lists** (Federal, Provincial, Concurrent); established the **Federal Court of India (1937)** and the **Reserve Bank of India (RBI, 1935)**. |
| **Indian Independence Act 1947** | Ended British rule from August 15, 1947; created two sovereign, independent Dominions: **India and Pakistan**; empowered Constituent Assemblies of both Dominions to frame constitutions and repeal any British law. |

---

## High-Yield Prelims Problem Archetypes & Chronology Mastery

### Archetype 1: Chronological Sequencing
**Question**: Arrange the following events in the history of the Indian National Movement in correct chronological order:
1. Formation of the Congress Socialist Party (CSP)
2. The Royal Indian Navy (RIN) Mutiny
3. Chittagong Armoury Raid
4. Second Round Table Conference
5. The Poona Pact

*Solution & Chronological Sequence*:
- **Chittagong Armoury Raid**: April 18, 1930 (Surya Sen and revolutionaries).
- **Second Round Table Conference**: September – December 1931 (Attended by Mahatma Gandhi in London).
- **Poona Pact**: September 24, 1932 (Signed between Dr. Ambedkar and Gandhi in Yerwada Jail).
- **Formation of the Congress Socialist Party (CSP)**: May/October 1934 (Formed in Bombay by JP Narayan and Narendra Dev).
- **Royal Indian Navy (RIN) Mutiny**: February 18, 1946 (Ratings strike aboard HMIS Talwar).
*Correct Chronological Sequence*: **3 → 2 → 5 → 1 → 2 (1930 → 1931 → 1932 → 1934 → 1946)**.

### Archetype 2: Historical Terminology & Office Matching
- **Agrahara**: Tax-free land grant gifted perpetually to Brahmins and monastic institutions.
- **Ur**: General assembly of the village community in the Chola Kingdom.
- **Mahattara**: Village elder or headman in early medieval and ancient inscriptions.
- **Kharaj**: Land revenue tax levied under Islamic law by the Delhi Sultans.
- **Fawazil**: Excess balance or surplus revenue remitted by Iqta holders to the imperial treasury.
- **Zabt**: Direct land revenue assessment based on land measurement and past yield averages.
- **Amil / Amal-Guzar**: Revenue collection officer in the Mughal Pargana / Sarkar administration.
- **Muqaddam / Khut**: Traditional village headman / hereditary revenue collector in North India.

---

## Pedagogical Self-Test Questions

1. **Harappan Material Culture**: Why is the absence of monumental palaces and royal tombs in Harappan cities considered evidence of an atypical non-autocratic bronze age political system?
2. **Epigraphic History**: What specific administrative and moral reforms are documented in Ashoka’s Major Rock Edicts V and XIII?
3. **Chola Local Governance**: Describe the committee selection mechanism (*Kudavolai*) documented in the Uttaramerur Inscriptions.
4. **Sultanate Economy**: How did Alauddin Khalji’s market control regulations interact with his agrarian revenue assessment policies?
5. **Mughal Fiscal Institutions**: Distinguish clearly between the *Zat* and *Sawar* ranks within the Mansabdari system.
6. **Colonial Economic Extraction**: How did the "Home Charges" and the 5% railway capital guarantee contribute to the "Drain of Wealth" as formulated by Dadabhai Naoroji?
`;

// Write knowledge-units.json
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

// Write master-notes.md
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

// Render prose HTML for index.html
const proseHtml = masterNotes.replace(/# Master Codex:[\s\S]*?---\n/, '').split('\n\n').map(p => {
  const trimmed = p.trim();
  if (trimmed.startsWith('## ')) return `<h2>${trimmed.replace('## ', '')}</h2>`;
  if (trimmed.startsWith('### ')) return `<h3>${trimmed.replace('### ', '')}</h3>`;
  if (trimmed.startsWith('#### ')) return `<h4>${trimmed.replace('#### ', '')}</h4>`;
  if (trimmed.startsWith('$$')) return `<div class="formula-box">${trimmed.replace(/\$\$/g, '')}</div>`;
  if (trimmed.startsWith('- ')) return `<ul>${trimmed.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('')}</ul>`;
  if (trimmed.startsWith('```')) {
    const codeContent = trimmed.replace(/```[a-z]*\n?/g, '').trim();
    return `<pre><code>${codeContent}</code></pre>`;
  }
  if (trimmed.startsWith('|')) {
    const rows = trimmed.split('\n');
    let tableHtml = '<div class="table-container"><table class="data-table">';
    rows.forEach((r, idx) => {
      const cols = r.split('|').filter(c => c.trim().length > 0);
      if (idx === 0) {
        tableHtml += '<thead><tr>' + cols.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
      } else if (idx > 1) {
        tableHtml += '<tr>' + cols.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
      }
    });
    tableHtml += '</tbody></table></div>';
    return tableHtml;
  }
  return `<p>${trimmed}</p>`;
}).join('\n');

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BKRS Master Codex</title>
  <link rel="stylesheet" href="../../css/reader-shell.css">
</head>
<body class="editorial-cream">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-left">
        <a href="../../index.html" class="back-link">← Catalog</a>
        <div class="breadcrumb">
          <span class="category-badge">${category}</span>
          <span class="separator">/</span>
          <span class="book-title-short">${title}</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: Curricular Journey</button>
      <button class="view-btn" data-view="map">View B: Question Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Chronology Engine</button>
    </div>

    <main class="reader-content">
      <div id="view-journey" class="view-panel active">
        <article class="prose-content">
          <h1>${title}</h1>
          <p class="byline"><strong>Author:</strong> ${author} | <strong>System:</strong> BKRS v2.0 Replacement-Grade Codex</p>
          <hr>
          ${proseHtml}
        </article>
      </div>

      <div id="view-map" class="view-panel">
        <div class="knowledge-map">
          <h2>UPSC History Question Bank Blueprint</h2>
          <p class="subtitle">Comprehensive map of the 10 structural historical modules.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Themes:</strong></p>
                  <ul>
                    ${u.themes.map(t => `<li>${t}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="view-experience" class="view-panel">
        <div class="analytical-engine">
          <h2>High-Yield UPSC Prelims Problem Archetypes & Chronology Engine</h2>
          <div class="engine-section">
            <h3>Chronology & Question Solving Heuristics</h3>
            <div class="formula-box">
              <p><strong>1. The "Anchor-Year" Method:</strong> Fix unmistakable benchmark events (e.g., 1761 Panipat III, 1857 Mutiny, 1905 Partition of Bengal, 1930 Dandi March) and order dependent events relative to these pegs.</p>
              <p><strong>2. Extreme Statement Elimination:</strong> Be skeptical of qualifiers such as "solely", "never", "all", "entirely" in UPSC prelims questions.</p>
              <p><strong>3. Administrative Terminologies:</strong> Distinguish Persian/Arabic Sultanate titles (Diwan-i-Wazarat, Iqta) from Sanskrit/Prakrit ancient terms (Samaharta, Agrahara) and vernacular regional terms (Poligar, Chauth).</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="reader-footer">
      <p>Intellectualist Knowledge System &bull; BKRS v2.0 Standard &bull; Replacement-Grade Distillation</p>
    </footer>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${htmlContent.length} chars)`);
