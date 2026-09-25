const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'scratch', 'endurance_extracted');

// Detailed unit data specifications
const unitsData = [
  // PART I: THE PACK
  {
    unit_id: "KU-END-01",
    split: 3,
    chapter_number: 1,
    part: "PART I: The Pack",
    title: "The Order to Abandon Ship (27 October 1915)",
    date_raw: "27 October 1915, 5:00 PM",
    coords: "69° 05' S, 51° 30' W",
    summary_statement: "At 5:00 PM on October 27, 1915, after 281 days held fast in the grinding ice pack of the Weddell Sea, Sir Ernest Shackleton gives the quiet, decisive order to abandon the Endurance. The 300-ton wooden barquentine, built to withstand polar gales, has been crushed by immense pressure ridges. The rudder post is torn away, the sternpost twisted, and the ship's massive oak and greenheart timbers are splintered like toothpicks. Water pours into the engine room faster than the steam and manual bilge pumps can discharge. Shackleton orders the twenty-seven men to evacuate onto the surrounding ice floe with three open lifeboats, tents, sledges, and immediate provisions, calmly announcing: 'She's going, boys. I think it's time to get off.'",
    materiality: "critical",
    materiality_reason: "The catastrophic turning point transforming a trans-continental exploratory expedition into a desperate multi-year struggle for human survival.",
    epistemic_status: "[DOCUMENTED_HISTORICAL_EVENT]",
    excerpts: [
      "She's going, boys. I think it's time to get off.",
      "The order to abandon ship was given at 5 p.m. For most of the men, however, no order was needed because each knew the ship was done for.",
      "It was a sickening sensation to feel the deck heaving and buckling underfoot as the ice pressed inward with tens of thousands of tons of pressure."
    ],
    environmental: "Temperature -8.5°F (-22.5°C); southerly gale driving immense pressure ridges across the pack.",
    survival_factors: "3 ocean lifeboats (James Caird, Dudley Docker, Stancomb Wills), 4 canvas tents, 18 sleeping bags of reindeer skin, 10 wool bags.",
    leadership: "Absolute calm under catastrophe; Shackleton immediately pivots the mission from reaching the South Pole to ensuring every single man survives.",
    micro_context: "Floe adjacent to the crushed port side of the Endurance.",
    meso_context: "The crew transferring sledges, timber, and supplies under the shadow of the dying ship.",
    macro_context: "Imperial Trans-Antarctic Expedition stranded in the most remote ice-bound sea on earth with no radio contact or hope of outside rescue.",
    causal_target: "KU-END-09",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "The hull puncture and crushing of the bilge directly compelled the permanent evacuation of the ship onto the drifting ice pack."
  },
  {
    unit_id: "KU-END-02",
    split: 4,
    chapter_number: 2,
    part: "PART I: The Pack",
    title: "Conception, Crew, and the Ship (1913 – 1914)",
    date_raw: "1913 – August 1914",
    coords: "London to Buenos Aires",
    summary_statement: "Following Roald Amundsen's conquest of the South Pole in 1911 and Robert Falcon Scott's tragic death, Shackleton conceives the last great polar journey: the 1,800-mile overland crossing of Antarctica from the Weddell Sea to the Ross Sea via the Pole. To achieve this, he secures the Endurance (originally Polaris), built in Sandefjord, Norway, featuring a four-foot-thick bow of solid oak and greenheart. From over 5,000 applicants responding to his legendary appeal ('Men wanted for hazardous journey...'), Shackleton hand-picks twenty-seven men—a diverse mixture of seasoned naval officers (Frank Worsley), Cambridge scientists (James, Wordie), merchant seamen, Cambridge doctors (Macklin, McIlroy), and a combative Scottish carpenter (Harry McNeish). Shackleton prioritizes temperament and optimism over technical credentials.",
    materiality: "important",
    materiality_reason: "Establishes the structural strength of the vessel, the psychological constitution of the crew, and the leadership philosophy that determined subsequent group cohesion.",
    epistemic_status: "[HISTORICAL_BACKGROUND]",
    excerpts: [
      "Men wanted for hazardous journey. Small wages, bitter cold, long months of complete darkness, constant danger, safe return doubtful. Honour and recognition in case of success.",
      "Shackleton's genius lay in his intuitive understanding of men; he chose people who would balance one another and maintain high morale under extreme privation."
    ],
    environmental: "Temperate Atlantic crossing transitioning to sub-Antarctic waters.",
    survival_factors: "Ship reinforced with Norwegian pine, oak, and ironbark; equipped with coal-fired auxiliary steam engine.",
    leadership: "Democratic camaraderie blended with unconditional authority; careful psychological vetting of crew dynamics.",
    micro_context: "Recruitment offices in London and fitting out in Millwall Docks.",
    meso_context: "Voyage from London via Buenos Aires to South Georgia.",
    macro_context: "Eve of World War I; King George V and the Admiralty instruct Shackleton to proceed despite the outbreak of war in August 1914.",
    causal_target: "KU-END-03",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "The selection of the ship and crew directly set the baseline resilience for the entire 20-month ordeal."
  },
  {
    unit_id: "KU-END-03",
    split: 5,
    chapter_number: 3,
    part: "PART I: The Pack",
    title: "Entering the Weddell Ice (December 1914 – January 1915)",
    date_raw: "5 December 1914 – 18 January 1915",
    coords: "Grytviken to 76° 30' S",
    summary_statement: "Departing the whaling station at Grytviken, South Georgia, on December 5, 1914, the Endurance encounters heavy pack ice unusually far north at 57°S. Norwegian whalers warn Shackleton that 1914–1915 is a notoriously severe ice year, with polar pack driven north by sustained gales. For six weeks, Captain Frank Worsley navigates through a maze of leads, bumping and ramming through ice sheets up to twenty feet thick. Shackleton exercises immense patience, refusing to burn coal recklessly. By mid-January 1915, they push past Coats Land and reach the Caird Coast, coming within one day's steaming of their intended landing site at Vahsel Bay.",
    materiality: "important",
    materiality_reason: "Documents the extraordinary navigation through the ice pack and the narrow margin of failure just miles short of the Antarctic mainland.",
    epistemic_status: "[DIARY_RECORD]",
    excerpts: [
      "The whalers at Grytviken warned us that the pack was very heavy and lay far north, advice that proved grimly prophetic.",
      "We were only a day's sail from our goal when the northerly gale broke, packing the leads tight shut."
    ],
    environmental: "Heavy pack ice, leads freezing over at temperatures below 10°F (-12°C).",
    survival_factors: "Coal consumption strictly rationed; reliance on sail power whenever possible.",
    leadership: "Patience and restraint; refusing to force the ship into dangerously closing leads.",
    micro_context: "Ship deck and crow's nest navigation by Worsley.",
    meso_context: "Endurance threading through Weddell Sea Leads.",
    macro_context: "Extreme climatic anomaly in the Weddell Sea packing millions of square miles of drift ice against the Antarctic Peninsula.",
    causal_target: "KU-END-04",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "Northerly gales compressed the pack against the coast, locking the Endurance permanently into the ice."
  },
  {
    unit_id: "KU-END-04",
    split: 6,
    chapter_number: 4,
    part: "PART I: The Pack",
    title: "Beset: The Ship Becomes a Station (January – April 1915)",
    date_raw: "19 January 1915 – April 1915",
    coords: "76° 34' S, 31° 30' W",
    summary_statement: "On January 19, 1915, the ice pack freezes solid around the Endurance. A fierce northerly gale compresses the entire Weddell Sea ice sheet against the Antarctic coast, locking the vessel into an unbroken expanse of ice extending hundreds of miles in every direction. When attempts to cut a channel with ice saws fail, Shackleton recognizes that the ship is hopelessly beset. Fires are drawn in the boilers to save coal. The ship ceases to be a vessel under way and becomes a floating winter station. The crew begins settling into a routine of scientific observations, dog exercising on the ice, and maintaining high morale.",
    materiality: "critical",
    materiality_reason: "The irreversible transition from navigation to indefinite drift, establishing the 9-month icebound captivity.",
    epistemic_status: "[DOCUMENTED_HISTORICAL_EVENT]",
    excerpts: [
      "The ship is as frozen fast as an almond in chocolate toffee.",
      "What the ice gets, the ice keeps."
    ],
    environmental: "Sub-zero temperatures; pressure ridges forming; daylight rapidly waning.",
    survival_factors: "Ample ship provisions; fresh seal and penguin meat harvested from surrounding floes.",
    leadership: "Refusal to show anxiety; establishing structured daily routines to prevent psychological collapse.",
    micro_context: "The deck, hold, and ice surrounding the ship dubbed 'Dog Town'.",
    meso_context: "The ship drifting passively with the clockwise clockwise Weddell Gyre.",
    macro_context: "Total isolation from the civilized world; the crew enters the polar winter without any external communication.",
    causal_target: "KU-END-05",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "Being frozen into the ice pack began the passive 1,500-mile clockwise drift of the Weddell Gyre."
  },
  {
    unit_id: "KU-END-05",
    split: 7,
    chapter_number: 5,
    part: "PART I: The Pack",
    title: "The Polar Night: Routines and 'The Ritz' (May – July 1915)",
    date_raw: "May – July 1915",
    coords: "Drifting Northward in Weddell Sea",
    summary_statement: "The sun disappears completely in May 1915, plunging the expedition into seventy-nine days of total polar night. The lower hold of the ship is transformed into warm communal living quarters named 'The Ritz', where the men sleep in cubicles, eat together, and hold evening entertainments, gramophone concerts, debates, and mock trials. Shackleton actively participates in chores and games to eliminate class distinctions between officers, scientists, and foremast hands. Dog sledging teams are trained across the ice under Wild, Crean, and Hurley, maintaining physical vigor and providing essential exercise.",
    materiality: "important",
    materiality_reason: "Crucial demonstration of polar social management preventing depression, cabin fever, and conflict during prolonged darkness.",
    epistemic_status: "[DIARY_RECORD]",
    excerpts: [
      "In all the world there is no desolation more complete than the polar night. It is a return to the Ice Age.",
      "The Ritz was our palace—a warm, noisy, smoky haven against the bitter howling outside."
    ],
    environmental: "Temperatures plummeting to -35°F (-37°C); blinding blizzards and pitch darkness.",
    survival_factors: "Blubber and coal heating; nutritious diet supplemented by seal liver and penguin steaks.",
    leadership: "Egalitarian social architecture; fostering optimism and constant engagement.",
    micro_context: "'The Ritz' hold of the Endurance.",
    meso_context: "The pack drifting steadily northwest at roughly 2 to 4 miles per day.",
    macro_context: "Sustaining crew sanity through deliberate cultural and physical routines.",
    causal_target: "KU-END-06",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "Preserving crew morale and physical strength ensured they were ready when the ice began attacking the ship in spring."
  },
  {
    unit_id: "KU-END-06",
    split: 8,
    chapter_number: 6,
    part: "PART I: The Pack",
    title: "Return of the Sun and First Pressures (August – September 1915)",
    date_raw: "August – September 1915",
    coords: "69° S to 68° S",
    summary_statement: "On July 26, 1915, the sun peers over the northern horizon, ending the polar night. With the return of solar warmth and changing seasonal winds, the massive Weddell ice pack awakens into violent motion. Immense lateral pressures grind floes together, throwing up pressure ridges thirty to forty feet high with thunderous groans that resemble distant artillery barrages. On several occasions, the Endurance is heaved upward onto its beam ends at an angle of thirty degrees. McNeish and the engineers reinforce the internal bulkheads with heavy timber struts to withstand the lateral thrust.",
    materiality: "important",
    materiality_reason: "First severe physical assault of the pack ice upon the ship's structure, signaling the beginning of the end for the vessel.",
    epistemic_status: "[DOCUMENTED_HISTORICAL_EVENT]",
    excerpts: [
      "The noise of the ice was like the roaring of heavy artillery... The whole floe seemed to be trembling with tremendous subterranean force.",
      "The ship groaned in every timber as the ice gripped her bilges and lifted her out of the water."
    ],
    environmental: "Dynamic pack compression; huge pressure ridges splitting and colliding.",
    survival_factors: "Internal shoring of bulkheads with spare spars; preparation of emergency sledges on deck.",
    leadership: "Constant structural inspection; preparing the men mentally for the possibility of abandonment.",
    micro_context: "Ship hull and bilge inspection areas.",
    meso_context: "The pack fracturing around the ship.",
    macro_context: "Spring melting in the outer ocean causing the internal pack to buckle under peripheral wave energy.",
    causal_target: "KU-END-07",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "The initial pressure attacks weakened the ship's keel and loosened caulking, making subsequent fractures catastrophic."
  },
  {
    unit_id: "KU-END-07",
    split: 9,
    chapter_number: 7,
    part: "PART I: The Pack",
    title: "The Gales of September and Sternpost Fracture (September – October 1915)",
    date_raw: "September – October 1915",
    coords: "69° S, 51° W",
    summary_statement: "Late September gales subject the Endurance to unrelenting torsional stress. On October 18, a monumental pressure wave strikes the vessel, twisting the entire sternpost and shearing the heavy steel bolts securing the rudder. Water begins seeping into the stern compartment. McNeish constructs a cofferdam around the leak using salvaged timbers, strips of blanket, and pitch. The crew is organized into continuous shifts on the manual bilge pumps, pumping day and night to keep the incoming sea water at bay while the temperature drops below zero.",
    materiality: "important",
    materiality_reason: "The fatal structural damage that compromised the hull's watertight integrity.",
    epistemic_status: "[DIARY_RECORD]",
    excerpts: [
      "The rudder post was forced upwards several inches and the sternpost twisted, causing leaks that no pumping could permanently overcome.",
      "The men worked like demons at the pumps, singing chanties in the freezing dark to keep their spirits up."
    ],
    environmental: "Heavy blizzard, drifting pack moving at 10 miles per day.",
    survival_factors: "Construction of cofferdam; round-the-clock pumping keeping water level below the boilers.",
    leadership: "Shackleton working alongside the crew at the pumps to maintain morale.",
    micro_context: "The flooded stern hold and bilge pump levers.",
    meso_context: "Continuous crushing pressure from colliding ice floes.",
    macro_context: "The impossibility of dry-docking or external repair in the polar ice.",
    causal_target: "KU-END-08",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "Failure of the sternpost and rudder post led directly to the unmanageable flooding on October 24."
  },
  {
    unit_id: "KU-END-08",
    split: 10,
    chapter_number: 8,
    part: "PART I: The Pack",
    title: "The Death Throes of the Endurance (23 – 27 October 1915)",
    date_raw: "23 – 27 October 1915",
    coords: "69° 05' S, 51° 30' W",
    summary_statement: "Between October 23 and 27, the pack delivers its mortal blow. Immense tongues of ice thrust upward under the ship's counter, tearing off the rudder and splitting the stern open. Despite seventy-two hours of heroic, exhausting pumping by every officer and man, the water reaches the furnace flues, extinguishing the fires. The forward decks buckle upward and the internal stanchions snap with sounds like rifle shots. Recognizing that the ship will sink the moment the ice relaxes, Shackleton halts the pumps and orders the evacuation to the ice floe, bringing three lifeboats and essential provisions onto the pack.",
    materiality: "critical",
    materiality_reason: "The definitive loss of the ship as an operational base, forcing the crew into open-pack survival.",
    epistemic_status: "[DOCUMENTED_HISTORICAL_EVENT]",
    excerpts: [
      "The ship was being crushed like an eggshell. Her timbers groaned and shrieked as if in human agony.",
      "At last, the pressure ceased, but only because the ship had broken. Water was rising rapidly in the hold."
    ],
    environmental: "Fierce pressure ridges rising thirty feet; temperature -15°F (-26°C).",
    survival_factors: "Salvage of 3 lifeboats, clothing, blubber stoves, navigational chronometers, and basic food.",
    leadership: "Cool, unflinching command; halting futile pumping to conserve the men's strength for survival on the ice.",
    micro_context: "The flooded deck and buckled companionways.",
    meso_context: "The ship resting half-submerged in the crushing ice jaws.",
    macro_context: "The complete destruction of the expedition's primary refuge and transport.",
    causal_target: "KU-END-09",
    causal_status: "DOCUMENTED_CAUSATION",
    causal_evidence: "Total structural collapse forced the immediate establishment of Ocean Camp on the adjacent floe."
  }
];

console.log(`Loaded initial ${unitsData.length} units specification.`);
