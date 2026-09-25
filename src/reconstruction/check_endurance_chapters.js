const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'scratch', 'endurance_extracted');

// Map splits to chapters
const chapterMap = [
  { id: 1, part: "PART I", partTitle: "The Pack", split: 3, title: "The Order to Abandon Ship", date: "27 October 1915", lat: "69° 05' S, 51° 30' W" },
  { id: 2, part: "PART I", partTitle: "The Pack", split: 4, title: "Conception, Crew, and the Ship", date: "1913 - December 1914", lat: "Buenos Aires to Grytviken" },
  { id: 3, part: "PART I", partTitle: "The Pack", split: 5, title: "Entering the Weddell Ice", date: "5 December 1914 - 18 January 1915", lat: "54° S to 76° S" },
  { id: 4, part: "PART I", partTitle: "The Pack", split: 6, title: "Beset: The Ship Becomes a Station", date: "19 January 1915 - April 1915", lat: "76° 34' S, 31° 30' W" },
  { id: 5, part: "PART I", partTitle: "The Pack", split: 7, title: "The Polar Night: Routines and The Ritz", date: "May 1915 - July 1915", lat: "Mid-Weddell Sea Drift" },
  { id: 6, part: "PART I", partTitle: "The Pack", split: 8, title: "Return of the Sun and First Pressures", date: "August 1915 - September 1915", lat: "Drifting Northward" },
  { id: 7, part: "PART I", partTitle: "The Pack", split: 9, title: "The Gales of September and Sternpost Fracture", date: "September 1915 - October 1915", lat: "69° S" },
  { id: 8, part: "PART I", partTitle: "The Pack", split: 10, title: "The Death Throes of the Endurance", date: "23 October - 27 October 1915", lat: "69° 05' S, 51° 30' W" },

  { id: 9, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 11, title: "Establishing Ocean Camp on the Floe", date: "28 October - 30 October 1915", lat: "Camp on 10ft Floe" },
  { id: 10, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 12, title: "The Aborted First March", date: "30 October - 1 November 1915", lat: "1.5 Miles from Ship" },
  { id: 11, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 13, title: "Salvage and Hurley's Glass Plates", date: "November 1915", lat: "Ocean Camp" },
  { id: 12, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 14, title: "Living on Blubber, Seal, and Emperor Penguins", date: "Mid-November 1915", lat: "Ocean Camp" },
  { id: 13, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 15, title: "The Final Sinking: 'She's Gone, Boys'", date: "21 November 1915", lat: "68° 38' S, 52° 28' W" },
  { id: 14, part: "PART II", partTitle: "Ocean Camp & Sinking", split: 16, title: "The Second March and McNeish's Defiance", date: "23 December - 29 December 1915", lat: "Ice Field near Ocean Camp" },

  { id: 15, part: "PART III", partTitle: "Patience Camp & The Drift", split: 17, title: "Patience Camp: Settling for the Long Drift", date: "January 1916", lat: "Drifting Northward" },
  { id: 16, part: "PART III", partTitle: "Patience Camp & The Drift", split: 18, title: "Soot, Blubber Stoves, and Boat Modifications", date: "February 1916", lat: "Patience Camp" },
  { id: 17, part: "PART III", partTitle: "Patience Camp & The Drift", split: 19, title: "Passing Paulet Island into the Open Ocean", date: "Late February - March 1916", lat: "64° S, 53° W" },
  { id: 18, part: "PART III", partTitle: "Patience Camp & The Drift", split: 20, title: "Starvation Threat and Execution of the Dogs", date: "March - Early April 1916", lat: "North Weddell Sea" },
  { id: 19, part: "PART III", partTitle: "Patience Camp & The Drift", split: 21, title: "Swell from the North and Floe Fractures", date: "6 April - 8 April 1916", lat: "Edge of the Pack Ice" },
  { id: 20, part: "PART III", partTitle: "Patience Camp & The Drift", split: 22, title: "The Camp Splits in Two: Launching the Boats", date: "9 April 1916", lat: "62° S, 53° W" },

  { id: 21, part: "PART IV", partTitle: "Escape in Open Boats", split: 23, title: "Through the Labyrinth of Grinding Pack", date: "9 April 1916", lat: "Weddell Sea Margin" },
  { id: 22, part: "PART IV", partTitle: "Escape in Open Boats", split: 24, title: "Night Terror on the Disintegrating Floe", date: "9 April - 10 April 1916", lat: "Drifting Pack" },
  { id: 23, part: "PART IV", partTitle: "Escape in Open Boats", split: 25, title: "Bransfield Strait: Battling Adverse Currents", date: "11 April - 12 April 1916", lat: "Bransfield Strait" },
  { id: 24, part: "PART IV", partTitle: "Escape in Open Boats", split: 26, title: "The Agony of Thirst and Salt Spray Encasing Ice", date: "13 April - 14 April 1916", lat: "Approaching Elephant Island" },
  { id: 25, part: "PART IV", partTitle: "Escape in Open Boats", split: 27, title: "Landfall at Cape Valentine: The First Solid Ground", date: "14 April - 15 April 1916", lat: "61° 06' S, 54° 50' W" },

  { id: 26, part: "PART V", partTitle: "Elephant Island Vigil", split: 28, title: "The Delirium of Land and Cape Valentine's Peril", date: "15 April - 16 April 1916", lat: "Cape Valentine, Elephant Island" },
  { id: 27, part: "PART V", partTitle: "Elephant Island Vigil", split: 29, title: "Relocation to Point Wild: The Seven-Mile Pull", date: "17 April 1916", lat: "Point Wild, Elephant Island" },
  { id: 28, part: "PART V", partTitle: "Elephant Island Vigil", split: 30, title: "The Grand Plan: The 800-Mile Gamble", date: "18 April - 23 April 1916", lat: "Point Wild" },
  { id: 29, part: "PART V", partTitle: "Elephant Island Vigil", split: 31, title: "Constructing 'The Snuggery' Under Overturned Boats", date: "Late April - May 1916", lat: "Point Wild" },
  { id: 30, part: "PART V", partTitle: "Elephant Island Vigil", split: 32, title: "Winter Entombment, Gangrene, and Surgical Amputation", date: "June - July 1916", lat: "Point Wild" },
  { id: 31, part: "PART V", partTitle: "Elephant Island Vigil", split: 33, title: "Wild's Iron Leadership: 'Lash Up and Stow'", date: "August 1916", lat: "Point Wild" },

  { id: 32, part: "PART VI", partTitle: "Voyage of the James Caird", split: 34, title: "Launch of the James Caird into the Southern Ocean", date: "24 April 1916", lat: "Point Wild to Scotia Sea" },
  { id: 33, part: "PART VI", partTitle: "Voyage of the James Caird", split: 35, title: "The Furious Fifties: Cramped Torment and Shifting Ballast", date: "25 April - 29 April 1916", lat: "Scotia Sea" },
  { id: 34, part: "PART VI", partTitle: "Voyage of the James Caird", split: 36, title: "Worsley's Miraculous Sextant Sights", date: "30 April - 3 May 1916", lat: "Midway to South Georgia" },
  { id: 35, part: "PART VI", partTitle: "Voyage of the James Caird", split: 37, title: "The Rogue Wave: Surviving the Mountainous White Wall", date: "4 May - 6 May 1916", lat: " Scotia Sea" },
  { id: 36, part: "PART VI", partTitle: "Voyage of the James Caird", split: 38, title: "The Hurricane off the Iron Coast of South Georgia", date: "7 May - 9 May 1916", lat: "South Georgia Offshore" },
  { id: 37, part: "PART VI", partTitle: "Voyage of the James Caird", split: 39, title: "Landing at Cave Cove, King Haakon Bay", date: "10 May 1916", lat: "King Haakon Bay, South Georgia" },

  { id: 38, part: "PART VII", partTitle: "South Georgia Mountain Crossing", split: 40, title: "Peggotty Camp and Preparations for the Uncharted Interior", date: "11 May - 18 May 1916", lat: "King Haakon Bay" },
  { id: 39, part: "PART VII", partTitle: "South Georgia Mountain Crossing", split: 41, title: "Thirty-Six Hours Across the Glaciers: The Abyss and Crevasses", date: "19 May - 20 May 1916", lat: "Allardyce Range, South Georgia" },
  { id: 40, part: "PART VII", partTitle: "South Georgia Mountain Crossing", split: 42, title: "Arrival at Stromness: The Three Phantoms", date: "20 May 1916", lat: "Stromness Whaling Station" },

  { id: 41, part: "EPILOGUE", partTitle: "The Rescue & Legacy", split: 43, title: "Four Relief Expeditions and the Miracle of the Yelcho", date: "May - 30 August 1916", lat: "Punta Arenas to Elephant Island" }
];

console.log(`Configured ${chapterMap.length} structured chapters for Endurance.`);
chapterMap.forEach(ch => {
  const fPath = path.join(targetDir, `book_split_${String(ch.split).padStart(3, '0')}.html`);
  const exists = fs.existsSync(fPath);
  console.log(`Ch ${ch.id} [Split ${ch.split}] - ${ch.part}: ${ch.title} (${exists ? 'OK' : 'MISSING'})`);
});
