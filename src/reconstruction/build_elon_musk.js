const fs = require('fs');
const path = require('path');

const muskUnits = [
  {
    unit_id: "unit-01",
    chapter_number: 1,
    title: "Elon's World: The Silicon Valley Landscape & The Question of Sanity",
    scope: "Chapter 1: Vance's Dinners with Musk & The Industrial Ambition",
    epistemic_status: "BIOGRAPHICAL_FRAMING & PSYCHOLOGICAL_PROFILING",
    materiality: "CRITICAL",
    core_theme: "The contrast between consumer app triviality and hardware heavy industry; Vance's encounters with Musk, and the high-stakes personality driving Tesla and SpaceX.",
    textual_analysis: [
      "Ashlee Vance begins his definitive biography by situating Elon Musk within the technological and cultural landscape of Silicon Valley in the 2010s. Vance observes a profound cultural decline in the Valley: having once manufactured the semiconductors, microprocessors, and heavy computing infrastructure that transformed the modern world, the technology capital had largely devolved into chasing trivial smartphone applications, advertising optimization algorithms, and quick venture capital exits. In sharp, defiant contrast stood Elon Musk—an entrepreneur who channeled his personal fortune into two capital-intensive, high-risk, engineering-heavy manufacturing giants: SpaceX (commercial rocketry and interplanetary exploration) and Tesla Motors (pure electric automobiles and clean energy grid storage).",
      "Vance recounts his initial interactions with Musk, who was notoriously wary of journalists and initially refused to cooperate with the biography. After Vance began interviewing dozens of former employees, friends, and competitors, Musk agreed to meet for dinner at a seafood restaurant in Los Altos. The conversation quickly exposed Musk's intense, idiosyncratic psychology: awkward long pauses where Musk appeared to retreat completely into his own mind, processing complex physics and engineering calculations before speaking. During one memorable dinner, Musk leaned across the table and asked Vance point-blank: 'Do you think I'm insane?'—revealing an acute self-awareness of how his grand, world-saving ambitions were perceived by conventional society.",
      "Vance details the visceral intensity of Musk's workplace culture in Hawthorne and Palo Alto. Employees described Musk not as a conventional executive, but as a relentless, calculating force of nature who possessed a photographic memory, masterminded technical architecture from first principles, and demanded impossible deadlines from his engineers. Vance establishes the central thesis of the biography: Musk is not merely a businessman seeking profit; he is an existential crusader who genuinely views himself as personally responsible for preserving the light of human consciousness against potential extinction, whether through establishing a self-sustaining civilization on Mars or accelerating the transition to sustainable energy."
    ],
    verbatim_quote: "Do you think I'm insane?... I'd like to die on Mars. Just not on impact.",
    operational_heuristic: "Distinguish between incremental optimization (apps, advertising) and hard-tech civilizational engineering; true industrial progress requires massive capital reallocation into deep physical sciences.",
    key_motifs: ["Do You Think I'm Insane?", "Silicon Valley App Triviality", "Hawthorne Rocket Factory", "First Principles Thinking", "Existential Risk"]
  },
  {
    unit_id: "unit-02",
    chapter_number: 2,
    title: "Africa: Pretoria Childhood, The Aspergerian Mind, and Brutal Bullying",
    scope: "Chapter 2: South African Youth, Errol Musk, and Blastar",
    epistemic_status: "DEVELOPMENTAL_PSYCHOLOGY & TRAUMA_FORGING",
    materiality: "CRITICAL",
    core_theme: "Musk's difficult upbringing in Pretoria; domestic turmoil with his father Errol, childhood physical violence, and intellectual retreat into encyclopedias and computers.",
    textual_analysis: [
      "Elon Reeve Musk was born on June 28, 1971, in Pretoria, South Africa, to Maye Musk, a Canadian-born model and dietitian, and Errol Musk, a brilliant but volatile South African electromechanical engineer. From early childhood, Elon exhibited unusual psychological traits: he would frequently drift into catatonic trances where he stared into space, completely deaf to external stimuli, prompting his parents to have his adenoids removed to test his hearing. His mother realized that Elon was not deaf, but was thinking in complex, three-dimensional mental images, visualizing physical structures and calculating stress loads inside his mind with astonishing clarity.",
      "Following his parents' bitter divorce when he was nine, Elon chose to live with his father Errol, a decision he later described as an excruciating mistake. While Errol exposed Elon to practical engineering, blueprints, and construction sites, the household was characterized by intense psychological abuse and emotional manipulation. Elon found refuge in voracious reading: he devoured the entire Encyclopaedia Britannica by age nine, read science fiction and philosophy books for ten hours a day (especially Douglas Adams’ The Hitchhiker's Guide to the Galaxy and Isaac Asimov’s Foundation series), and absorbed the fundamental lesson that the only thing that makes sense is striving for greater collective enlightenment.",
      "At school, Musk was a physically awkward, bookish boy who lacked social awareness and was mercilessly bullied by gangs of classmates at Bryanston High School. In one horrific incident, a group of boys ambushed Elon on a concrete staircase, kicked him in the head, and threw him down the stairs, beating him until he lost consciousness and spent a week in the hospital. At age twelve, Elon taught himself computer programming on a Commodore VIC-20 and authored a playable sci-fi video game called Blastar, selling the source code to a South African magazine for $500. Determined to escape South Africa’s repressive culture and mandatory military conscription under apartheid, Elon secured a Canadian passport through his mother and departed for North America at age seventeen with little money."
    ],
    verbatim_quote: "He goes into his brain, and then you just see that he is in another world. He still does it. Now I just leave him alone because I know he's designing a new rocket or something.",
    operational_heuristic: "Childhood adversity and isolation can forge an extraordinary capacity for intellectual self-reliance; when external environments are hostile, retreating into foundational books and systems architecture builds early first-principles mastery.",
    key_motifs: ["The Trance States", "Errol Musk's Psychological Shadow", "The Bryanston Concrete Stairs", "Blastar on Commodore VIC-20", "Douglas Adams & Asimov"]
  },
  {
    unit_id: "unit-03",
    chapter_number: 3,
    title: "Canada: The Lumber Mills, Queen's University, and The Wharton Transition",
    scope: "Chapter 3: Immigrant Hardship, Justine Wilson, and University of Pennsylvania",
    epistemic_status: "IMMIGRANT_GRIT & ACADEMIC_FOUNDATIONS",
    materiality: "IMPORTANT",
    core_theme: "Musk's arrival in North America; performing grueling manual labor, studying physics and economics, and meeting Justine Wilson.",
    textual_analysis: [
      "Arriving in Canada in June 1989 with barely any money, Musk spent a year working a succession of low-paying, grueling manual labor jobs across Saskatchewan and British Columbia. He shoveled grain, tended vegetable patches, and took on the most hazardous job available at a Vancouver lumber mill: wearing a hazmat suit to crawl into high-temperature boilers and scrape out steaming toxic sludge and sulfur residue with a shovel, earning $18 an hour while others quit after hours. This extreme physical labor reinforced Musk’s iron threshold for physical and mental discomfort.",
      "Musk enrolled at Queen’s University in Kingston, Ontario, in 1990, where he met his first wife, Justine Wilson. Justine was a sharp, ambitious aspiring novelist who was captivated by Musk's unyielding romantic persistence: when she initially stood him up for an ice cream date to study in the library, Musk tracked down her study room and arrived holding two chocolate chip ice cream cones that were melting down his hands. Musk's intense romantic pursuits mirrored his entrepreneurial tactics—refusing to accept rejection or physical obstacles.",
      "In 1992, Musk transferred on scholarship to the University of Pennsylvania, where he pursued a rigorous dual degree: a Bachelor of Science in Economics from the Wharton School and a Bachelor of Arts in Physics. The physics degree proved foundational to his entire career, teaching him to view complex problems through 'first principles'—reasoning from the fundamental, immutable laws of nature rather than analogy or industry precedent. With his friend Adeo Ressi, Musk rented a massive ten-bedroom frat house off-campus, turning it into a thriving commercial nightclub on weekends to cover their rent. During his college years, Musk wrote academic papers outlining three arenas that would most profoundly impact the future of humanity: the Internet, sustainable energy, and space exploration."
    ],
    verbatim_quote: "Physics is a really good framework for thinking... First principles is kind of a physics way of looking at the world. You boil things down to the most fundamental truths and say, 'What are we sure is true?' and then reason up from there.",
    operational_heuristic: "Ground your strategic thinking in physics-based first principles rather than commercial analogy; understanding the thermodynamic and material boundaries of a problem reveals where conventional wisdom is wasteful.",
    key_motifs: ["Scraping Boilers in BC", "Melting Ice Cream Cones", "Wharton Economics & Penn Physics", "First Principles Thinking", "Adeo Ressi's Nightclub House"]
  },
  {
    unit_id: "unit-04",
    chapter_number: 4,
    title: "Zip2: Stanford Dropout, Silicon Valley Coding, and The Compaq Windfall",
    scope: "Chapter 4: Global Link Information Network, The 1990s Dot-Com Boom, and Sale to Compaq",
    epistemic_status: "ENTREPRENEURIAL_GENESIS & SOFTWARE_COMMERCIALIZATION",
    materiality: "CRITICAL",
    core_theme: "Dropping out of Stanford to ride the internet wave; building Zip2 from an office floor, and the clash between raw founder drive and corporate management.",
    textual_analysis: [
      "In the summer of 1995, Musk moved to Silicon Valley to begin a graduate PhD program in materials science and applied physics at Stanford University, focusing on high-energy-density ultracapacitors for electric vehicles. However, observing the explosive explosion of the World Wide Web following Netscape’s IPO, Musk dropped out of Stanford after just two days to launch an internet startup with his brother Kimbal. Recognizing that local businesses had no online presence and no directory services, they founded Global Link Information Network (later renamed Zip2), a primitive digital yellow pages combining searchable business databases with interactive electronic maps.",
      "The early days of Zip2 were characterized by monomaniacal work ethic. The brothers rented a small, decrepit office in Palo Alto; unable to afford an apartment, they slept on a futon in the office, showered at the local YMCA, and kept the company server running from a single PC on the floor. Musk coded relentlessly day and night, telling employees: 'If I'm asleep, wake me up and I'll code.' When venture capital firm Mohr Davidow invested $3 million in 1996, they insisted on professionalizing management, installing seasoned executive Rich Sorkin as CEO and relegating Musk to Chief Technology Officer. Sorkin refocused Zip2 on licensing software to major national newspaper syndicates like The New York Times, Knight Ridder, and Hearst.",
      "Musk chafed furiously under corporate management, clashing with professional software engineers whose clean, modular code Musk deemed too slow compared to his brute-force spaghetti code. When Sorkin proposed a merger with CitySearch, Musk orchestrated a boardroom revolt to oust Sorkin and become CEO himself, but the board rebelled and stripped Musk of his chairman title. In February 1999, computer giant Compaq acquired Zip2 for $307 million in cash. At age twenty-seven, Musk walked away with $22 million, immediately purchasing an 1,800-square-foot condo, a $1 million McLaren F1 supercar, and a private propeller airplane, while pouring $12 million into his next venture."
    ],
    verbatim_quote: "My mentality is that of a samurai. I would rather commit seppuku than fail.",
    operational_heuristic: "Early-stage software success requires relentless brute-force execution and founder stamina; however, when venture capital assumes control, technical founders who lack political diplomacy risk being marginalized in their own companies.",
    key_motifs: ["Dropping out of Stanford", "Sleeping on the Office Futon", "Zip2 Vector Maps & Newspapers", "The McLaren F1 Supercar", "Compaq's $307M Acquisition"]
  },
  {
    unit_id: "unit-05",
    chapter_number: 5,
    title: "PayPal Mafia Boss: X.com, The Confinity Merger, and The Coup",
    scope: "Chapter 5: Digital Banking Revolution, Windows vs. Linux, and The Honeymoon Ouster",
    epistemic_status: "FINTECH_WARFARE & EXECUTIVE_COUP_ANALYSIS",
    materiality: "CRITICAL",
    core_theme: "The founding of X.com to disrupt retail banking; the bitter merger with Peter Thiel's Confinity, and the executive palace coup that ousted Musk.",
    textual_analysis: [
      "In March 1999, Musk poured the majority of his Zip2 fortune ($12 million) into founding X.com, a radical digital financial services startup. Musk envisioned X.com as a full-service online bank offering checking accounts, mutual funds, insurance, and frictionless peer-to-peer email payments, eliminating traditional bank branches and transaction fees. X.com pioneered viral growth mechanics, offering new users $10 to sign up and $20 for referrals, causing explosive user acquisition that terrified traditional banks. However, four doors down on University Avenue in Palo Alto, a rival startup named Confinity—founded by Peter Thiel and Max Levchin—launched a competing money-transfer product called PayPal.",
      "The competition between X.com and Confinity devolved into an all-out advertising and product war, with both companies burning millions of dollars in cash reserves each month. In March 2000, facing mutually assured destruction, X.com and Confinity merged into a single entity. The merged company was immediately torn apart by cultural and technological civil war. Musk, serving as CEO, insisted on running the payment platform on Microsoft Windows NT architecture, while Levchin and the Confinity engineers fiercely insisted on open-source Unix/Linux systems. Musk's polarizing, aggressive leadership style alienated Confinity’s executive team.",
      "In September 2000, while Musk and Justine were boarding a flight for a long-delayed honeymoon and fundraising tour in Australia, a cabal of executives led by Peter Thiel, Max Levchin, and Reid Hoffman executed a coordinated palace coup. They delivered a petition of no-confidence to the board of directors, demanding Musk's removal and reinstating Thiel as CEO. Informed by telephone upon landing in Sydney, Musk flew straight back to California, but the coup was irreversible. Demonstrating unexpected strategic maturity, Musk refrained from launching a destructive public legal battle; he accepted an advisory role, retained his massive shareholding, and backed the company through its 2002 IPO. When eBay acquired PayPal for $1.5 billion in July 2002, Musk netted $180 million after taxes, providing the massive war chest needed to finance SpaceX and Tesla."
    ],
    verbatim_quote: "Musk is someone who has to run the company. He cannot be second in command. He will push his agenda until he either gets his way or breaks everything.",
    operational_heuristic: "In corporate governance, technical vision cannot compensate for executive isolation; when key operational leaders unify against a founder's abrasive style, sudden absence creates the opening for an irreversible palace coup.",
    key_motifs: ["X.com Online Banking", "Peter Thiel & Max Levchin", "The Windows NT vs. Linux Holy War", "The Honeymoon Flight Coup", "PayPal $1.5B eBay Sale"]
  },
  {
    unit_id: "unit-06",
    chapter_number: 6,
    title: "Mice in Space: Russian ICBMs, The Founding of SpaceX, and Kwajalein Atoll",
    scope: "Chapter 6: The Mars Oasis, El Segundo Machine Shop, and Falcon 1 Disasters",
    epistemic_status: "AEROSPACE_DISRUPTION & EXPERIMENTAL_PERSEVERANCE",
    materiality: "CRITICAL",
    core_theme: "Musk's transition to rocketry; the failure to purchase Russian Dnepr missiles, founding SpaceX, and the three consecutive rocket crashes on Kwajalein.",
    textual_analysis: [
      "Following the sale of PayPal, Musk turned his attention to the stagnant state of space exploration. Shocked to discover that NASA had no concrete plans to send humans to Mars, Musk devised 'Mars Oasis'—a plan to land a miniature greenhouse on Mars containing seeds in nutrient gel to take a picture of green plants on the red planet, hoping to reignite public excitement. In late 2001 and early 2002, Musk traveled to Moscow with aerospace consultant Jim Cantrell and former NASA official Mike Griffin to purchase refurbished Russian intercontinental ballistic missiles (Dnepr ICBMs). The Russian generals treated Musk with racist condescension, spitting on his shoes and demanding an exorbitant $8 million per rocket.",
      "On the flight home from Moscow, Musk pulled out a spreadsheet on his laptop and began calculating the raw commodity costs of rocket manufacturing: aerospace-grade aluminum, titanium, copper, and rocket fuel. He realized that raw materials constituted only 2 to 3 percent of a rocket's total sales price. Applying first-principles reasoning, Musk concluded that aerospace contractors were pathologically inefficient, charging astronomical sums due to bloated defense-industry overhead. In June 2002, Musk founded Space Exploration Technologies (SpaceX) in an empty warehouse in El Segundo, California, investing $100 million of his own capital and hiring brilliant young rocket propulsion engineer Tom Mueller to build the Merlin engine.",
      "Musk decided to bypass the heavily regulated US launch ranges at Cape Canaveral and Vandenberg, relocating SpaceX’s launch operations to Kwajalein Atoll (Omelek Island) in the remote Marshall Islands. Life on Kwajalein was an ordeal of tropical squalor, brutal humidity, rusted equipment, and logistics failures. Between 2006 and 2008, SpaceX attempted three launches of its Falcon 1 rocket, and all three ended in fiery disasters: Flight 1 suffered an engine fire due to a corroded aluminum nut; Flight 2 experienced an oscillation anomaly at stage separation; and Flight 3 failed when residual thrust from the first-stage Merlin 1C engine caused it to slam back into the second stage during separation. SpaceX was out of cash, and the company faced imminent bankruptcy."
    ],
    verbatim_quote: "I calculated the cost of raw materials—aluminum, titanium, carbon fiber—and realized that the materials cost was only about two percent of the rocket's price. The rest was process and bureaucracy. We could build them ourselves for a fraction of the cost.",
    operational_heuristic: "When an established industry operates with hundred-fold markups over raw material costs, the barrier to disruption is not physics but organizational culture; insourcing engineering and eliminating bureaucratic overhead enables radical cost reduction.",
    key_motifs: ["Spitting Russian Generals", "The Raw Material Spreadsheet", "Founding SpaceX in El Segundo", "Tom Mueller's Merlin Engine", "The Kwajalein Rocket Crashes"]
  },
  {
    unit_id: "unit-07",
    chapter_number: 7,
    title: "All Electric: Martin Eberhard, AC Propulsion, and The Birth of the Tesla Roadster",
    scope: "Chapter 7: Founding Tesla Motors, Battery Packaging, and The Production Nightmare",
    epistemic_status: "AUTOMOTIVE_ENGINEERING & HARDWARE_HELL",
    materiality: "CRITICAL",
    core_theme: "The origin story of Tesla Motors; the engineering challenges of lithium-ion battery packs, and the cost explosion of the Tesla Roadster.",
    textual_analysis: [
      "In 2003, engineers Martin Eberhard and Marc Tarpenning founded Tesla Motors in San Carlos, California, inspired by AC Propulsion's experimental tzero electric sports car. Recognizing that lithium-ion battery technology—developed for laptops and camcorders—had achieved sufficient energy density to power an automobile, they sought to build a high-performance electric sports car based on the lightweight Lotus Elise chassis. In early 2004, Eberhard pitched Musk, who had long harbored dreams of electric cars. Musk led Tesla’s Series A investment round with $6.5 million of his own money, becoming Chairman of the Board, while JB Straubel joined as Chief Technology Officer.",
      "The engineering challenge of the Tesla Roadster was monumental. Conventional automakers believed lithium-ion cells were too volatile and fire-prone for automotive use. Straubel and the Tesla engineering team pioneered an innovative architecture, bundling nearly 7,000 small cylindrical 18650 commodity laptop battery cells into a liquid-cooled, firewalled battery pack. However, developing a two-speed transmission capable of handling the instantaneous torque of the electric motor proved disastrous: transmission after transmission stripped its gears and shattered during endurance testing, forcing Tesla to eventually re-engineer the car around a single-speed gearbox and a more powerful inverter.",
      "Under Eberhard's management as CEO, costs spun completely out of control. While the Roadster was promoted with a target price of $65,000, internal audits revealed that building each car actually cost an astonishing $140,000, and production was delayed by more than a year. Musk discovered that Eberhard had concealed the true extent of the cost overruns and parts shortages from the board. In August 2007, Musk orchestrated Eberhard's removal as CEO, eventually installing Ze'ev Drori before taking the CEO reins himself. Musk demanded grueling redesigns—insisting on carbon-fiber body panels, electronic door latches, and custom seats—pushing Tesla toward the financial brink."
    ],
    verbatim_quote: "It wasn't just a sports car. It was proof of concept. If we could show that an electric car could outperform a Porsche, we could break the stereotype that electric vehicles had to be slow, ugly golf carts.",
    operational_heuristic: "Proof-of-concept prototypes mask the sheer brutality of manufacturing economics; building a handful of high-performance prototypes is simple compared to scaling mass production at an acceptable bill of materials.",
    key_motifs: ["AC Propulsion tzero", "Martin Eberhard & Marc Tarpenning", "7,000 Laptop Battery Cells", "Shattered Two-Speed Transmissions", "Roadster Cost Overruns"]
  },
  {
    unit_id: "unit-08",
    chapter_number: 8,
    title: "Pain, Suffering, and Survival: The 2008 Crisis, Flight 4, and Christmas Eve Rescue",
    scope: "Chapter 8: The Dual Near-Death of SpaceX and Tesla & The Ultimate Gamble",
    epistemic_status: "CRISIS_MANAGEMENT & EXISTENTIAL_RISK_SURVIVAL",
    materiality: "CRITICAL",
    core_theme: "The terrifying convergence of personal, financial, and operational collapse in 2008; Falcon 1 Flight 4's triumph, and Tesla's last-second rescue.",
    textual_analysis: [
      "The year 2008 was the most excruciating period of Elon Musk’s life, pushing him to the absolute threshold of mental, physical, and financial collapse. His eight-year marriage to Justine disintegrated into a bitter, highly public divorce tabloids dissected daily. Simultaneously, the global financial collapse of 2008 froze capital markets, drying up venture capital and credit lines. Both SpaceX and Tesla were bleeding cash at an alarming rate, and Musk was down to his last liquid reserves, surviving on personal loans from friends to pay rent and employee salaries.",
      "On August 2, 2008, SpaceX launched Falcon 1 Flight 3 from Kwajalein. The rocket carried three military satellites and the ashes of Star Trek actor James Doohan. When the first stage failed to separate cleanly and destroyed the vehicle, the engineering team broke down in tears. Musk immediately addressed the company, refusing to concede defeat: 'For my part, I will never give up, and I mean never.' Gathering their remaining components, SpaceX assembled Flight 4 in a frantic six-week sprint. On September 28, 2008, Falcon 1 Flight 4 roared off the pad on Kwajalein, executing flawless stage separation and becoming the first privately funded, liquid-fueled rocket to successfully reach orbit in human history.",
      "While SpaceX celebrated orbit, Tesla was weeks away from missing payroll. Automakers worldwide were collapsing, and Silicon Valley gossip blogs ran a 'Tesla Death Watch' tracker. Musk had $35 million left in personal assets and had to make an agonizing decision: divide his money between SpaceX and Tesla, likely killing both companies, or commit everything to one and abandon the other. Musk chose to go all-in: he poured his entire remaining net worth into Tesla, raised a bridge loan from existing investors, and bluff-called investors by claiming he would secure loan financing from SpaceX. On December 23, 2008, NASA awarded SpaceX a $1.6 billion Commercial Resupply Services contract for twelve flights to the ISS. The next day—at 8:00 PM on Christmas Eve—Tesla’s financing round closed with hours to spare before bankruptcy."
    ],
    verbatim_quote: "I could either divide my funds between both companies or put everything into one. If I divided it, both would die. If I put it into one, maybe one would survive... I had to give it everything. It was the darkest time of my life.",
    operational_heuristic: "In moments of existential enterprise peril, total conviction and radical commitment are the only levers capable of mobilizing capital and keeping teams unified; half-measures guarantee bilateral failure.",
    key_motifs: ["2008 Global Financial Crash", "The Justine Musk Public Divorce", "Falcon 1 Flight 4 Orbital Success", "NASA's $1.6B COTS Miracle", "Christmas Eve Bankruptcy Averted"]
  },
  {
    unit_id: "unit-09",
    chapter_number: 9,
    title: "Liftoff: Falcon 9, Hawthorne Vertical Integration, and Orbital Supremacy",
    scope: "Chapter 9: The Commercial Space Revolution & The Reusability Crusade",
    epistemic_status: "AEROSPACE_MANUFACTURING & INDUSTRIAL_INSOURCING",
    materiality: "CRITICAL",
    core_theme: "The engineering development of the Falcon 9 and Dragon capsule; SpaceX's extreme vertical integration, and disrupting the aerospace oligopoly.",
    textual_analysis: [
      "With the cash infusion from NASA's COTS contract, SpaceX transformed from a plucky startup into a premier aerospace manufacturer. Musk retired the Falcon 1 to focus exclusively on the Falcon 9—a massive, two-stage rocket powered by an octaweb cluster of nine Merlin 1D engines—and the Dragon autonomous cargo capsule. Musk moved SpaceX’s headquarters to a colossal former Boeing 747 fuselage factory in Hawthorne, California, painting the walls pristine white and setting up engineers' desks right on the factory floor beside the CNC milling machines and friction-stir welding rigs.",
      "The core architectural advantage of SpaceX was radical vertical integration: whereas Boeing, Lockheed Martin (United Launch Alliance), and Arianespace outsourced thousands of subsystems to a bloated network of sub-tier defense contractors—compounding markups at every tier—SpaceX manufactured 80 to 90 percent of its components in-house. SpaceX manufactured its own rocket airframes, rocket engines, avionics computers, wiring harnesses, and solar panels. A flight computer motherboard that aerospace contractors sold for $100,000 was designed and manufactured by SpaceX engineers using off-the-shelf automotive-grade chips for a few thousand dollars.",
      "In December 2010, SpaceX launched the Falcon 9 and Dragon into orbit, successfully recovering the capsule from the Pacific Ocean—becoming the first commercial company to recover a spacecraft from orbit. In May 2012, Dragon made history by docking with the International Space Station, demonstrating unprecedented precision navigation. Simultaneously, Musk initiated his most daring engineering gambit: building autonomous landing legs and cold-gas thrusters to land the 14-story Falcon 9 first-stage booster vertically on ocean drone ships, aiming for rocket reusability to reduce space launch costs by 99 percent."
    ],
    verbatim_quote: "Rockets are the only mode of transportation on Earth where you throw away the vehicle after one trip. Imagine if an airplane flew from New York to London and then you threw the 747 into the ocean! No one could afford to fly.",
    operational_heuristic: "Heavy manufacturing disruption requires relentless in-house vertical integration; outsourcing core components creates supply-chain bottlenecks and compounds cost margins, destroying competitive pricing power.",
    key_motifs: ["Hawthorne Fuselage Factory", "Octaweb 9-Engine Cluster", "85% In-House Vertical Integration", "Dragon ISS Docking (2012)", "The Reusable Rocket Vision"]
  },
  {
    unit_id: "unit-10",
    chapter_number: 10,
    title: "The Revenge of the Electric Car: The Model S, Fremont NUMMI, and Gigafactory",
    scope: "Chapter 10: Clean-Sheet Automotive Engineering & Mass Scale Automation",
    epistemic_status: "AUTOMOTIVE_INNOVATION & INFRASTRUCTURE_DEPLOYMENT",
    materiality: "CRITICAL",
    core_theme: "Designing the Model S from a clean slate; buying the Fremont NUMMI plant for pennies on the dollar, and building the Supercharger network.",
    textual_analysis: [
      "Following the limited-production Roadster, Musk set out to build the car that would prove electric vehicles were superior to internal combustion in every measurable metric: the Model S sedan. Hired from Mazda, chief designer Franz von Holzhausen partnered with Musk to design the vehicle from a clean sheet of paper. Instead of converting an existing gasoline chassis, the Model S was engineered around a 'skateboard' battery pack bolted flat along the floor between the axles, creating an ultra-low center of gravity, sports-car handling, two luggage trunks ('frunk' and rear trunk), and the highest safety rating in NHTSA history.",
      "Musk capitalized brilliantly on the wreckage of the 2008 recession. In 2010, Tesla acquired the shuttered NUMMI manufacturing facility in Fremont, California—a massive 5.3-million-square-foot plant previously joint-operated by General Motors and Toyota—for a bargain $42 million, fractionally pennies on its $1 billion replacement value. Tesla went public on the NASDAQ in June 2010 (TSLA), raising $226 million as the first American carmaker to IPO since Ford in 1956. When the Model S launched in 2012, it took the automotive industry by storm, winning Motor Trend Car of the Year in 2013 with a unanimous score—the first electric car ever to win the honor.",
      "Musk recognized that vehicle range was only half the equation: to eliminate consumer 'range anxiety', Tesla needed to build its own nationwide direct-current high-speed charging infrastructure. Musk funded the global Supercharger network, offering free high-speed charging to Model S owners along major highway corridors. To secure battery cell supplies for future mass-market vehicles (the Model 3), Musk announced the construction of the Nevada 'Gigafactory' in 2014—a colossal $5 billion battery manufacturing plant partnered with Panasonic, designed to double the world's total annual lithium-ion battery production under a single roof."
    ],
    verbatim_quote: "We didn't just want to make the best electric car. We wanted to make the best car of any kind in the world.",
    operational_heuristic: "Product disruption succeeds only when the superior product is supported by proprietary ecosystem infrastructure; cars without ubiquitous charging networks remain niche luxury curiosities.",
    key_motifs: ["Franz von Holzhausen's Skateboard Platform", "Acquiring Fremont NUMMI for $42M", "Motor Trend 2013 Car of the Year", "The Supercharger Highway Network", "The Nevada Gigafactory"]
  },
  {
    unit_id: "unit-11",
    chapter_number: 11,
    title: "The Unified Field Theory of Elon Musk: SolarCity, Tesla Energy, and Mars",
    scope: "Chapter 11: Systemic Synergies & The Multi-Planetary Imperative",
    epistemic_status: "SYSTEMS_THEORY & CIVILIZATIONAL_ENGINEERING",
    materiality: "CRITICAL",
    core_theme: "Musk's integrated civilizational strategy uniting solar energy generation, battery storage, electric transport, and interplanetary colonization.",
    textual_analysis: [
      "In Chapter 11, Ashlee Vance synthesizes the overarching grand strategy connecting Musk’s disparate corporate ventures into what he terms 'The Unified Field Theory of Elon Musk'. While Wall Street analysts criticized Musk for running multiple unrelated capital-intensive companies simultaneously, Vance demonstrates that Tesla, SpaceX, and SolarCity (founded by Musk’s cousins Lyndon and Peter Rive with Musk as Chairman and largest shareholder) form a completely integrated, self-reinforcing energetic and industrial ecosystem.",
      "The ecosystem operates across a closed loop: SolarCity captures clean photovoltaic solar power from the sun; Tesla Energy (Powerwall residential batteries and Powerpack commercial batteries) stores the fluctuating renewable power locally; Tesla Motors consumes that stored solar energy to provide zero-emission transportation; and SpaceX develops the advanced materials, high-density batteries, solar arrays, and rocketry necessary to export that sustainable infrastructure to Mars. Furthermore, Musk open-sourced the 57-page 'Hyperloop Alpha' white paper in 2013, conceptualizing near-vacuum tube transport reaching 760 mph powered entirely by solar panels on the tube roof.",
      "Vance emphasizes that the ultimate organizing principle governing all of Musk's actions is the survival of human consciousness. Musk views humanity’s tenure on a single planet as an unacceptable existential gamble: a single asteroid impact, supervolcano eruption, nuclear conflict, or runaway artificial intelligence could permanently extinguish the light of human consciousness. By driving launch costs down to where a ticket to Mars costs $500,000, Musk aims to establish a self-sustaining city of one million people on Mars before his death—ensuring that human life becomes multi-planetary and immune to planetary extinction."
    ],
    verbatim_quote: "It's about having a future where you expect things to be better, not one where you expect things to be worse... Life has to be more than just solving everyday problems. You have to wake up and be excited about the future.",
    operational_heuristic: "Synergistic corporate architecture emerges when diverse ventures are unified under a singular, overarching civilizational thesis; disparate businesses reinforce each other when they share supply chains, materials research, and talent.",
    key_motifs: ["The SolarCity-Tesla Energy Loop", "The Hyperloop Alpha White Paper", "Multi-Planetary Life as Insurance", "The $500K Mars Ticket", "The Preservation of Consciousness"]
  },
  {
    unit_id: "unit-12",
    chapter_number: 12,
    title: "Epilogue: The Machine and The Man: Ruthless Management & Historical Legacy",
    scope: "Epilogue: Vance's Forensic Assessment of Musk's Character and Industrial Impact",
    epistemic_status: "ETHICAL_ANALYSIS & LEADERSHIP_ANATOMY",
    materiality: "CRITICAL",
    core_theme: "The brutal trade-offs of visionary leadership; the firing of Mary Beth Brown, the psychological toll on employees, and Musk's historical stature.",
    textual_analysis: [
      "In the Epilogue, Vance delivers a forensic, unvarnished evaluation of Musk’s character, leadership methodology, and historical legacy. Vance examines the devastating human cost of working inside Musk’s companies: 80-to-100-hour workweeks, constant fear of instantaneous firing during one of Musk’s 'rage-firing' spells, and an unforgiving culture where past loyalty counts for nothing. Vance details the poignant firing of Mary Beth Brown, Musk’s devoted executive assistant of twelve years who managed his schedule, family logistics, and corporate affairs across both Tesla and SpaceX. When Brown requested a significant pay raise comparable to top executives, Musk told her to take two weeks off while he performed her duties; upon her return, Musk cold-bloodedly informed her that he didn't need her anymore and terminated her employment.",
      "Yet Vance balances this brutal lack of interpersonal empathy against the profound devotion of Musk’s top engineers. Despite his harsh demeanor, employees followed Musk because he never asked them to work harder than he worked himself, regularly sleeping on factory floors and spending weekends resolving technical crises. Musk demonstrated an astonishing ability to recruit top-tier engineering talent, strip away their self-imposed psychological limitations, and compel them to accomplish engineering miracles previously deemed impossible.",
      "Vance concludes by comparing Musk to legendary American industrial titans: Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. Unlike Jobs, who revolutionized consumer electronics and digital media, Musk tackled the physical heavy industries that traditional venture capitalists had abandoned as impossible: aerospace and automotive. Vance asserts that whether Musk ultimately achieves his dream of building a city on Mars or not, his relentless willpower has permanently reshaped the global trajectory of space travel, electric transportation, and clean energy, solidifying his status as the defining industrial visionary of the early twenty-first century."
    ],
    verbatim_quote: "What Elon has accomplished is what nobody else in Silicon Valley dared to do. He went into the physical world of heavy metal, rocketry, and cars, and proved that a tiny company could out-engineer giant defense contractors and legacy car companies with sheer willpower.",
    operational_heuristic: "Transformational civilizational impact rarely coexists with conventional interpersonal warmth; visionary leaders who force reality to bend to their will often leave an trail of personal casualties in their wake.",
    key_motifs: ["The Firing of Mary Beth Brown", "Rage-Firing vs. Pure Devotion", "Edison, Ford, Hughes & Jobs", "The Heavy Metal Industrialist", "The Uncompromising Legacy"]
  }
];

function buildMasterNotesMarkdown() {
  let md = `# Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future — Complete Master Notes\n\n`;
  md += `**Author:** Ashlee Vance (2015)\n`;
  md += `**Reconstruction Standard:** BKRS v2.0 Deep Forensic Master\n`;
  md += `**Total Units:** ${muskUnits.length} Comprehensive Forensic Units\n\n`;
  md += `---\n\n`;

  muskUnits.forEach(u => {
    md += `## Unit ${u.chapter_number}: ${u.title}\n\n`;
    md += `**Scope:** ${u.scope}  \n`;
    md += `**Epistemic Status:** ${u.epistemic_status}  \n`;
    md += `**Materiality:** ${u.materiality}  \n`;
    md += `**Core Theme:** ${u.core_theme}  \n\n`;
    
    md += `### Detailed Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });

    md += `> **Verbatim Citation:**\n> "${u.verbatim_quote}"\n\n`;
    md += `**Operational Heuristic:**  \n*${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs & Archetypes:** ${u.key_motifs.join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  return md;
}

function buildHtmlReader(units) {
  const sidebarLinks = units.map(u => 
    `<a href="#unit-${u.unit_id}" class="nav-ch-link">
      <span class="nav-ch-num">Unit ${u.chapter_number}</span>
      <span class="nav-ch-title">${u.title}</span>
    </a>`
  ).join('\n');

  const unitCards = units.map(u => `
    <article class="unit-card" id="unit-${u.unit_id}">
      <div class="unit-header-meta">
        <span class="unit-badge">CHAPTER ${u.chapter_number}</span>
        <span class="unit-meta-pill">${u.scope}</span>
        <span class="unit-meta-pill">${u.epistemic_status}</span>
        <span class="unit-meta-pill pill-gold">${u.materiality}</span>
      </div>

      <h2 class="unit-heading-deep">${u.title}</h2>
      <div class="unit-core-theme"><strong>Core Theme:</strong> ${u.core_theme}</div>

      <div class="unit-body-narrative">
        ${u.textual_analysis.map(p => `<p class="narrative-p">${p}</p>`).join('\n')}
      </div>

      <div class="quote-box">
        "${u.verbatim_quote}"
      </div>

      <div class="heuristic-box">
        <strong>Forensic Heuristic:</strong> ${u.operational_heuristic}
      </div>

      <div class="motifs-container" style="margin-top: 20px; font-size: 0.95rem; color: var(--text-muted);">
        <strong>Key Motifs & Symbols:</strong> ${u.key_motifs.map(m => `<span class="motif-tag" style="display: inline-block; background: var(--bg-card-subtle); padding: 2px 8px; border-radius: 4px; margin-right: 6px; border: 1px solid var(--border-color);">${m}</span>`).join(' ')}
      </div>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elon Musk — Deep Biography Master Notes | BKRS</title>
  <link rel="stylesheet" href="../../css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --font-serif: 'Lora', Georgia, serif;
      --font-display: 'Cinzel', serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
    }

    [data-theme="cream"] {
      --bg-base: #f7f4ed;
      --bg-surface: #ffffff;
      --bg-card-subtle: #f1ede2;
      --text-main: #2b2620;
      --text-muted: #6e6557;
      --border-color: #e2dac9;
      --accent-crimson: #8c2d19;
      --accent-gold: #b3822a;
    }

    [data-theme="dark"] {
      --bg-base: #141210;
      --bg-surface: #1e1b18;
      --bg-card-subtle: #26221d;
      --text-main: #e8e2d8;
      --text-muted: #9c9182;
      --border-color: #38322a;
      --accent-crimson: #d45d44;
      --accent-gold: #d4a753;
    }

    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
    }

    .unit-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 40px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }

    .unit-header-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-bottom: 16px;
    }

    .unit-badge {
      background: var(--accent-crimson);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }

    .unit-meta-pill {
      font-size: 0.78rem;
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
        <span class="brand-title">ELON MUSK: THE BIOGRAPHY</span>
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
        <div class="sidebar-book-title">Elon Musk</div>
        <div class="sidebar-book-meta">Ashlee Vance · 12 Forensic Units</div>
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
          <div class="hero-badge">Industrial Biography · Technology & Engineering</div>
          <h1 class="hero-title">Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h1>
          <div class="hero-subtitle">Ashlee Vance (2015) · The Definitive Anatomy of Industrial Willpower and Disruption</div>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Publication</span>
              <span class="meta-value">May 19, 2015</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Total Units</span>
              <span class="meta-value">12 Forensic Units</span>
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
            <p><strong>The Anatomy of Modern Industrialization:</strong> Ashlee Vance’s definitive biography tracing Musk from his Pretoria childhood and early dot-com ventures (Zip2, PayPal) through the existential crises of 2008 to the orbital breakthroughs of SpaceX, the electric vehicle revolution of Tesla Motors, and the grand multi-planetary imperative.</p>
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
const destDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'elon-musk');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

console.log('Writing Elon Musk master-notes.md...');
const masterNotesMd = buildMasterNotesMarkdown();
fs.writeFileSync(path.join(destDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

console.log('Writing knowledge-units.json...');
fs.writeFileSync(path.join(destDir, 'knowledge-units.json'), JSON.stringify(muskUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${muskUnits.length} units)`);

console.log('Writing index.html...');
const html = buildHtmlReader(muskUnits);
fs.writeFileSync(path.join(destDir, 'index.html'), html, 'utf8');
console.log(`Saved index.html (${html.length} characters)`);

console.log('Elon Musk complete!');
