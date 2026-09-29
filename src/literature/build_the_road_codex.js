/**
 * Builder for Cormac McCarthy: The Road
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Narrative Units | Post-Apocalyptic Realism & Paternal Transcendence
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-road');
fs.mkdirSync(targetDir, { recursive: true });

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Ash and the Chrome Mirror: Pushing the Cart through the Burned Earth",
    scope: "Opening Movement: The Cold Dawn, The Ash-Covered Appalachian Woods & The Dual Survival Blueprint",
    epistemic_status: "POST_APOCALYPTIC_REALISM & PHENOMENOLOGICAL_DREAD",
    materiality: "CRITICAL",
    core_theme: "The physical reality of the dead biosphere: falling ash, freezing rains, pushing the grocery cart south, and the father's fierce maternal vigilance over the boy.",
    textual_analysis: [
      "Cormac McCarthy opens The Road in an unsparing, sensory-deprived dreamscape: 'When he woke in the woods in the dark and the cold of the night he'd reach out to touch the child sleeping beside him.' The earth has been scorched by an unspecified cosmic or nuclear catastrophe, leaving the atmosphere choked with fine gray ash, the sun reduced to a pale disk behind perpetual cloud cover, and the plant and animal kingdoms dead. Nights are black beyond blackness; days are a dim, cold twilight.",
      "The Cart and the Chrome Mirror: Survival is reduced to the crude physical mechanics of movement. The father and young son push an old supermarket grocery cart containing their meager possessions: tarp, thin blankets, a copper cooking pot, a plastic jug of water, and tools. Bolted to the cart's handle is a chrome motorcycle mirror angled backward, allowing the man to scan the road behind them without turning around—a critical defensive measure against marauding cannibal gangs.",
      "Somatic Vigilance and Coughing Blood: The father suffers from a worsening, terminal respiratory illness; each morning he coughs wracking spasms of blood into the snow and ash. He knows his lifespan is strictly finite, making his entire existence a race against time: he must shepherd the boy south toward the coast before winter freezes them in the mountain passes. The boy is his sole moral and metaphysical anchor: 'If he is not the word of God God never spoke.'",
      "The Ritual of Breathing Masks: They walk through the ruined Appalachian highway wearing crude masks cut from cotton rags to filter the ubiquitous soot. The landscape is a graveyard of abandoned automobiles, crumbling asphalt, dead blackened forests that collapse under winter ice, and dry rivers carrying grey sludge."
    ],
    verbatim_quote: "When he woke in the woods in the dark and the cold of the night he'd reach out to touch the child sleeping beside him. Nights dark beyond darkness and the days more gray each one than what had gone before. Like the onset of some cold glaucoma dimming away the world.",
    operational_heuristic: "In a total systemic collapse, eliminate all non-essential mental baggage; survival reduces to three physical vectors: warmth, potable water, and defensive vigilance against human predators.",
    key_motifs: [
      "Glaucoma of the World (Ash Atmosphere)",
      "The Grocery Cart and Chrome Mirror",
      "Coughing Blood into the Snow",
      "'If he is not the word of God God never spoke'",
      "The Cotton Breathing Masks"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Obsidian Flake: The Mother’s Suicide & The Duty to Carry the Fire",
    scope: "Retrospective Flashback: The Mother's Decision, Rational Nihilism vs. Irrational Hope & The Single Cartridge",
    epistemic_status: "MORAL_PHILOSOPHY & THEOLOGICAL_DIALECTIC",
    materiality: "CRITICAL",
    core_theme: "The philosophical rift between the mother (who chooses self-annihilation to escape gang rape and cannibalism) and the father (who vows to 'carry the fire' for the child).",
    textual_analysis: [
      "In a devastating retrospective sequence, the father recalls the final night with his wife before she walked out into the freezing darkness to die. Pregnant at the time of the cataclysm, she gave birth to the boy by the light of a dry-cell lantern while explosions shook the city. Years later, running out of food and watching bands of marauders hunt humans like game, her rational defenses collapsed.",
      "The Logic of Rational Despair: The woman argued with cold, flawless philosophical clarity: 'We are survivors. But a person can survive anything until they die... I've taken a new lover. Death. He can take what is left of me and welcome.' She refused to wait for the inevitable day when they would be hunted down, butchered, raped, and eaten in front of their child: 'They are going to catch us and kill us and eat us. And they will make me watch.'",
      "The Obsidian Flake: She possessed no bullet; the man had only two cartridges left in his revolver. He pleaded with her to wait, but she refused to spend their precious ammunition on her death. Instead, she took a sharp flake of chipped obsidian and vanished alone into the freezing, starless night. The father never saw her body.",
      "The Sacred Myth of 'The Fire': To sustain the boy's psychological will to live in an environment devoid of hope, the father instills the central myth of the book: they are the 'good guys,' and they are 'carrying the fire.' The fire is not physical combustion; it is the fragile ember of human decency, compassion, refusal to consume human flesh, and moral consciousness in a universe that has reverted to primeval barbarism."
    ],
    verbatim_quote: "We're going to be okay, aren't we Papa? / Yes. We are. / And nothing bad is going to happen to us. / That's right. / Because we're carrying the fire. / Yes. Because we're carrying the fire.",
    operational_heuristic: "When external hope is extinguished, human survival requires an irrational moral purpose: choose to 'carry the fire'—the conscious commitment to remain humane despite overwhelming terror.",
    key_motifs: [
      "The Obsidian Flake",
      "Rational Nihilism vs. Irrational Duty",
      "The Two Remaining Bullets",
      "Carrying the Fire",
      "The Good Guys vs. The Bad Guys"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Gas-Station Coke: Relics of the Lost World & The Mountain Crossing",
    scope: "Narrative Movement: The Deserted Supermarket, The Single Can of Coca-Cola & The Childhood Home",
    epistemic_status: "ARCHAEOLOGY_OF_CIVILIZATION & SENSORY_AWE",
    materiality: "IMPORTANT",
    core_theme: "Encountering artifacts of dead industrial civilization: the sacrament of a single cold Coca-Cola, revisiting the father's childhood house, and the freezing mountain pass.",
    textual_analysis: [
      "Scavenging an abandoned supermarket on the outskirts of a ruined town, the man finds a soda vending machine overturned in the debris. Rummaging deep inside the dispensing chute, his fingers strike a single cold aluminum can: a Coca-Cola. He pops the tab and hands it to the boy.",
      "The Sacrament of the Soda: The boy has never tasted carbonated soda in his life. He sips the bubbling liquid with wide-eyed, reverent astonishment, insisting that his father drink some too: 'You have some, Papa.' The man takes a polite sip to please him, urging the child to drink the rest: 'It's really good, isn't it? / Yes. / Go ahead and drink it. It's for you.' The can represents the final, sweetest ghost of the lost industrial civilization, shared like an ancient communion wafer.",
      "The Ruined Childhood Home: The man leads the boy through his own childhood house, pointing out where the Christmas tree once stood and where stockings were hung by the fireplace. The boy is terrified by the ghosts of memory, sensing the profound danger of dwelling on what can never return: 'We shouldnt be here, Papa.' The father realizes the cruelty of nostalgia: to mourn the past drains energy required to survive the present.",
      "The Mountain Blizzard: They push the cart over a high mountain pass in driving sleet and snow. Huddled beneath a pine bough shelter wrapped in their single plastic tarp, the father uses flint and steel to strike a fire with cedar shavings, burning wet wood that creates choking smoke. They melt snow in their tin cup to drink, their teeth chattering uncontrollably as the frost closes in."
    ],
    verbatim_quote: "It's because I wont ever get to drink another one, isn't it? / Ever's a long time. / But it's true, isn't it Papa? / It's pretty true. / Okay, the boy said. You can have some if you want.",
    operational_heuristic: "Never indulge in nostalgic longing for lost worlds while in active survival territory; memory becomes a lethal narcotic that paralyzes practical focus.",
    key_motifs: [
      "The Last Can of Coca-Cola",
      "The Sacrament of the Fizz",
      "The Haunted Childhood Home",
      "The Danger of Nostalgia",
      "The Freezing Mountain Blizzard"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The Diesel Truck of Blood: Road Agents, The Revolver & The First Kill",
    scope: "Narrative Movement: Ambush on the Road, The Diesel Truck, The Red-Scarf Marauder & The Exploding Head",
    epistemic_status: "MORTAL_TACTICS & SOMATIC_VIOLENCE",
    materiality: "CRITICAL",
    core_theme: "The deadly encounter with a motorized cannibal gang: hiding in the brush, a standoff with an armed road agent, and the expenditure of one of their two remaining cartridges.",
    textual_analysis: [
      "While walking down a long asphalt decline, a rumbling vibration shakes the road. A converted diesel truck approaches, spewing black oily exhaust and filled with road agents wearing filthy rags, bandoliers of shotgun shells, and red scarves across their faces. The man and boy dive into the ditch, dragging their cart into the tangled cane.",
      "The Standoff in the Reeds: The truck breaks down or stops nearby. One of the road agents—a bearded brute holding a gut-strung bow and a knife—wanders off the road to relieve himself and discovers the man and boy crouched in the brush. The marauder attempts to negotiate with insidious false charm, trying to lure the boy closer: 'You got any food? What's in the cart? Come on out, we wont hurt you.'",
      "The Lethal Trigger Pull: The marauder draws a hidden knife and lunges to seize the boy as a hostage. Without a microsecond's hesitation, the father raises his .38 revolver and pulls the trigger. The bullet strikes the marauder directly between the eyes, exploding the back of his skull against the saplings. The man scoops up the terrified, screaming child, abandons the cart, and plunges headlong into the deep forest as the other truck agents open fire.",
      "Washing the Brains from the Child's Hair: Miles away in a ravine, the father holds his son in the freezing stream, using icy water to wash bits of the dead man's brains and bone from the boy's hair. He checks his revolver: only a single cartridge remains. If they are captured now, there will be no bullet for both of them; the father must save the final round to kill his son, sparing him from being devoured alive."
    ],
    verbatim_quote: "This is my job. And it is. I have to look after you. / To protect me? / Yes. To protect you. Even from myself. / But not from you. / No. Not from me.",
    operational_heuristic: "When confronted by predatory violence, act with immediate, unhesitating lethal decisiveness; hesitation in the face of an ambush guarantees total destruction.",
    key_motifs: [
      "The Diesel Truck of Road Agents",
      "The Red-Scarf Marauder",
      "The Single Gunshot to the Forehead",
      "Washing Brains from the Boy's Hair",
      "The Final Remaining Bullet"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "The Padlocked Cellar: The House of Cannibals and the Abyss of Horror",
    scope: "Narrative Movement: The Grand Antebellum Plantation, The Padlocked Hatch & The Living Food Supply",
    epistemic_status: "APOCALYPTIC_HORROR & PRIMAL_DEPRAVITY",
    materiality: "CRITICAL",
    core_theme: "The discovery of an antebellum house turned into a human slaughterhouse: discovering captive naked humans kept alive in a cellar with severed limbs, and the frantic escape.",
    textual_analysis: [
      "Starving and desperate, the man spots a grand, old plantation house standing behind tall dead trees. Against his inner instincts, he decides to search the estate for food, reassuring the terrified boy that they will only look quickly.",
      "The Padlocked Hatch: In the kitchen, beneath a ragged rug, the man discovers a heavy wooden hatch set flush with the floor, secured by a padlock. Convinced that supplies are concealed beneath, he finds a tire iron in the shed and pries the hasp free with immense effort, lighting a makeshift lighter.",
      "The Sight in the Darkness: Lowering himself down the ladder into the subterranean cellar, the lighter's flare illuminates a horror beyond comprehension: huddled on mattress pads in the damp dirt are naked men and women, chained and shivering in filth. One man, sitting on a crate, has had both legs sawed off at the thighs, the stumps cauterized to keep him alive as fresh meat. A woman whispers through cracked lips: 'Help us. Please help us.'",
      "The Return of the Butchers: Terror strikes the father. He scrambles up the ladder, grabs the boy, and slams the hatch shut. As they reach the front porch, four men and two women return through the yard carrying axes and sacks. The father and son run into the woods, throwing themselves into the freezing brambles. When the boy begins to cry, the father cocks the revolver, points the muzzle at the boy's temple, and prepares to pull the trigger to save him from the cellar. But the cannibals miss their tracks in the gloom and move on."
    ],
    verbatim_quote: "Huddled against the back wall were a dozen people, all of them naked. They sat with their arms folded over their chests, shivering in the cold... A man with his legs sawed off above the knees was looking up at him. Help us, he said.",
    operational_heuristic: "Never let acute physical hunger override situational paranoia; locked hatches and hidden spaces in hostile territory frequently conceal mortal traps.",
    key_motifs: [
      "The Grand Plantation House",
      "The Padlocked Kitchen Hatch",
      "The Living Human Larder",
      "The Muzzle to the Child's Temple",
      "The Escaping Breath in the Leaves"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Subterranean Bunker: Rich Peaches, Buttered Biscuits & The Miracle Feast",
    scope: "Narrative Movement: The Buried Concrete Door, The Prepper Cache, The Feast & The Ritual Bath",
    epistemic_status: "PROVIDENTIAL_RESPITE & SENSORY_REGENERATION",
    materiality: "CRITICAL",
    core_theme: "The discovery of a hidden prepper bunker: abundant canned food, coffee, butter, clean water, blankets, and a temporary oasis of civilized human dignity.",
    textual_analysis: [
      "Near death from starvation and exhaustion, the father probes the ground near a collapsed toolshed with an iron rod. The tip strikes steel. Clearing away layers of dead sod and roots, he uncovers a heavy steel hatch fitted with a counterweight.",
      "The Subterranean Cache: Prying the door open, the man descends into a reinforced concrete bomb shelter built by a prepper before the apocalypse. Striking a match, he beholds an unbelievable paradise: crate upon crate of canned goods—canned peaches, green beans, corned beef hash, chili, canned ham, condensed milk, sacks of dried beans, rows of kerosene lanterns, new wool blankets, toilet paper, soap, and clean bedding.",
      "The Sacred Feast: The man brings the boy down into the warmth. They light the lanterns, bathe in hot water heated over a kerosene stove, and wash years of grime from their skin. They feast on buttery biscuits made with lard, hot corned beef, and golden peaches floating in rich syrup. For the first time in his life, the boy eats until his stomach is full and experiences the sensation of warmth and safety.",
      "The Boy's Prayer for the Unknown Prepper: Before sleeping on clean cot sheets, the boy insists on saying a prayer of gratitude. He does not know how to pray to God, so he thanks the nameless, dead stranger who dug the hole and stored the food: 'Dear people, thank you for all this food and stuff. We know that you saved it for yourselves and if you were here we wouldnt eat it, but you're dead and we're really hungry. Thank you.'",
      "The Wisdom of Leaving: Although the bunker offers food for months, the father knows that remaining underground will eventually turn it into their tomb if marauders spot the smoke or hatch. After resting for four days, they load a new wheelbarrow with rich rations, kerosene, and blankets, and return to the road."
    ],
    verbatim_quote: "Crate upon crate of canned goods. Tomatoes, peaches, beans. Spam, corned beef hash. Huge jugs of water. Ten-gallon cans of kerosene... He looked at the boy. The boy was looking at him. Oh my God, the boy said.",
    operational_heuristic: "When providential windfall arrives, recharge physical reserves and replenish essential equipment, but never let comfort anchor you in a static, indefensible position.",
    key_motifs: [
      "The Buried Steel Hatch",
      "The Canned Peaches in Heavy Syrup",
      "The Kerosene Bath and Clean Blankets",
      "The Boy's Prayer to the Dead Preppers",
      "Departing the Safe Haven"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Blind Prophet Ely: Theological Nihilism & The Last Gods of Men",
    scope: "Narrative Movement: The Encounter with the Old Man, Sharing Tins of Food & The Philosophy of Extinction",
    epistemic_status: "THEOLOGICAL_PHILOSOPHY & ESCHATOLOGY",
    materiality: "CRITICAL",
    core_theme: "The philosophical encounter with the blind wanderer Ely: the boy's insistence on charity, theological nihilism, and the death of God in the absence of humanity.",
    textual_analysis: [
      "On the road, they encounter an ancient, emaciated wanderer shuffling along in rags with his feet wrapped in plastic bags. He is blind or nearly blind, bent double under a sack of garbage. The boy immediately begs his father to stop and give the old man food. The father resists, warning that charity is dangerous, but the boy's moral pleading prevails.",
      "The Feast of Canned Fruit: They invite the old man to sit by their fire, cooking him hot beans and canned pears. The traveler eats with ravenous desperation, trembling at the taste of real food. He claims his name is 'Ely,' though he admits it is an alias because 'I couldnt trust you with my real name. You might put a curse on me.'",
      "The Theological Autopsy of the Universe: Over the fire, the father and Ely engage in one of McCarthy's most profound philosophical dialogues. The father asks if Ely ever thought the world would end this way. Ely replies with desolate calm: 'I always believed in it. When I saw that everything was dying I knew the time was right... When we're all gone at last then there'll be nobody here at all and nobody to remember. And that will be a good thing.'",
      "The Death of God with Humanity: Ely delivers the definitive verdict on the relationship between divinity and human existence: 'There is no God and we are his prophets.' He explains that when the last human being dies, God himself ceases to exist, because gods exist only as reflections of human consciousness: 'To be on the road with the last man would be quite something... But there'll be no one to say it. And it won't matter.'",
      "The Boy as an Angel: The father tells Ely that he believes his son is an angel or a god. Ely laughs dryly: 'I hope not. A god would die in this world. Things are bad enough without gods.'"
    ],
    verbatim_quote: "There is no God and we are his prophets... When we're all gone at last then there'll be nobody here at all and nobody to remember. There'll be no one to say that ever there were any gods at all.",
    operational_heuristic: "Morality is not validated by theological reward; it is an intrinsic human duty to offer mercy even when the cosmos is indifferent and heading toward total oblivion.",
    key_motifs: [
      "The Old Wanderer Ely",
      "The Boy's Insistence on Mercy",
      "'There is no God and we are his prophets'",
      "The Death of the Universe without Memory",
      "The Child as a Living Angel"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Gray Ocean & The Pajaro de Esperanza: The Shipwreck and the Theft",
    scope: "Narrative Movement: Reaching the Coast, The Disillusion of the Sea, The Grounded Spanish Schooner & The Theft",
    epistemic_status: "GEOGRAPHIC_DISILLUSION & MARITIME_SALVAGE",
    materiality: "CRITICAL",
    core_theme: "Reaching the long-sought coast only to find a vast, dead, grey sea; scavenging the grounded wreck of the Pajaro de Esperanza, and the devastating theft of their cart.",
    textual_analysis: [
      "After months of agonizing trekking, they finally break through the coastal salt-grass dunes and stand before the Atlantic Ocean. For hundreds of miles, the father held out hope that the sea might be blue, clean, or supporting life. Instead, they gaze upon a vast, dead expanse of grey water churning with black foam and smelling of rotting iodine and dead kelp: 'It's not blue, Papa. / No. It isn't.'",
      "Scavenging the Grounded Schooner: Offshore, grounded on a sandbar in the surf, lies the rusted iron hull of a Spanish sailboat: the Pajaro de Esperanza (Bird of Hope). The father strips down and swims through the freezing waves, hauling himself aboard the ghost vessel.",
      "The Salvage of the Flare Gun: Inside the waterlogged cabin, the father secures vital treasures: yellow waterproof foul-weather gear, a nylon jacket, a brass sextant (which he leaves behind as useless), a nylon first-aid kit, and a brass flare gun with three red magnesium cartridges. The flare gun provides an improvised long-range weapon.",
      "The Theft of the Cart: While the man lies sick with fever on the beach, a thief emerges from the dunes, steals their entire grocery cart containing all their food, blankets, and boots, and flees down the shoreline. Waking to find themselves stripped of everything needed to survive the coming night, the father and son track the thief's footprints down the wet sand."
    ],
    verbatim_quote: "He walked out on the beach to the edge of the surf and looked out. The ocean was gray and cold and vast. Beyond the surf the gray sea rolled away in heavy swells... I'm sorry it's not blue, the man said.",
    operational_heuristic: "Geographic destinations do not possess magical redemption; the external world remains ruined regardless of where you travel. Hope must be generated internally.",
    key_motifs: [
      "The Gray Dead Ocean",
      "The Pajaro de Esperanza (Bird of Hope)",
      "The Brass Flare Gun and Magnesium Shells",
      "The Theft of the Cart on the Beach",
      "The Desperate Chase down the Surf"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Stripped Thief & The Archer’s Ambush: Moral Mercy vs. Paternal Vengeance",
    scope: "Narrative Movement: Cornering the Thief, The Father's Brutal Justice, The Boy's Grief & The Arrow Strike",
    epistemic_status: "ETHICAL_CRISIS & SURGICAL_TRAUMA",
    materiality: "CRITICAL",
    core_theme: "The moral collision between father and son: stripping the thief naked as retribution, the boy's moral rebellion, and an ambush in an abandoned coastal town where an arrow wounds the father.",
    textual_analysis: [
      "Tracking the thief—a terrified, shivering outcast missing several fingers—the father corners him at gunpoint. Ignoring the thief's pleas for mercy, the father forces him to strip off all his clothes, surrender his knife, and pile everything into the cart. When the thief cries that leaving him naked in the freezing wind will kill him, the father coldly responds: 'You didn't mind if we froze.'",
      "The Boy's Moral Rebellion: As they walk away with the cart, the boy breaks into inconsolable weeping. He refuses to eat or walk, protesting his father's cruelty: 'He's going to die, Papa. / He was going to kill us. / He didn't kill us! He was just hungry!' The boy's tears represent the absolute refusal of the human soul to accept cruelty as justice. Broken by the boy's grief, the father relents and returns to the beach to leave the thief's clothes and shoes in the dunes, but the thief has already vanished.",
      "The Arrow Ambush: Passing through a deserted coastal town, an arrow suddenly zips through the air from an upper-story window, plunging deep into the meat of the father's thigh. The father pulls the boy into an entryway, retrieves the brass flare gun from the cart, and fires a red magnesium flare through the second-floor window. The flare hits the archer in the chest, setting the room ablaze.",
      "Field Surgery on the Leg: Retreating to an alley, the father cuts the barbed wooden shaft of the arrow, pushes the bloody point through his flesh, and stitches the gaping wound with nylon fishing line and a curved needle, cleaning it with iodine. His physical reserves are now completely shattered; his body is failing."
    ],
    verbatim_quote: "He was hungry, Papa. He's going to die... You're not the one who has to worry about everything! / The boy turned on him his pale and silent face. Yes I am, he said. I am the one.",
    operational_heuristic: "Vengeance masquerading as justice degrades the soul; listen to the moral intuition of the innocent, for their empathy prevents survival from degenerating into savagery.",
    key_motifs: [
      "The Stripped Thief on the Beach",
      "The Boy as the Moral Conscience",
      "'Yes I am. I am the one'",
      "The Arrow in the Thigh",
      "The Red Magnesium Flare Shot"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "The Death of the Father & The Golden Trout: Carrying the Fire to the Kind Family",
    scope: "Denouement: The Father's Last Words, Three Days of Mourning, The Arrival of the Veteran & The Epilogue",
    epistemic_status: "MYTHIC_TRANSCENDENCE & NATURAL_ELEGIE",
    materiality: "CRITICAL",
    core_theme: "The father's death beside the road, passing the 'fire' to the child, the miraculous arrival of a righteous family, and the closing meditation on the brook trout in the deep mountain pools.",
    textual_analysis: [
      "Miles down the road, the father's lungs collapse. He can no longer walk; he lies beside the road on a bed of pine needles, shivering in the terminal stages of fever and pulmonary hemorrhage. Knowing the end has come, he delivers his final testament to the weeping boy.",
      "The Transmission of the Fire: The boy begs to die with his father, but the man adamantly forbids it: 'You have to carry the fire. / I dont know how to. / Yes you do. It's inside you. It was always there. I can see it.' He instructs the boy to keep going south, to never give up, and to speak to him in prayer after he is gone: 'You can talk to me and I will talk to you. You'll see.' During the night, the father dies peacefully in his sleep.",
      "Three Days of Mourning and the Arrival of the Family: The boy remains beside his father's corpse for three days, weeping and holding the dead man's cold hand. On the fourth day, a man walks out of the woods carrying a shotgun—a veteran with a kind face, wearing yellow foul-weather gear. The stranger asks: 'Where is the man you were with? / He's dead. / Are you carrying the fire? / The boy looks up, astonished: 'What? / Are you carrying the fire?'",
      "The New Family and the Mother: The stranger takes the boy to his camp, where a woman and two children wait. The woman wraps the boy in a blanket, embraces him, and promises that they will take care of him. She tells him that the breath of God is his breath, passing from man to man through all time.",
      "The Closing Requiem of the Trout: McCarthy closes the novel with an immortal, lyrical meditation on the ancient world before the fire: brook trout swimming in clear mountain streams, their amber bellies and red vermiculate patterns like maps of the living earth. In deep mountain pools where everything is older than man, there was once a mysterious grace that cannot be recovered or made right again: 'In the deep glens where they lived all things were older than man and they hummed of mystery.'"
    ],
    verbatim_quote: "Once there were brook trout in the streams in the mountains. You could see them standing in the amber current where the white edges of their fins wimpled softly in the flow... On their backs were vermiculate patterns that were maps of the world in its becoming. Maps and mazes. Of a thing which could not be put back. Not be made right again.",
    operational_heuristic: "The supreme duty of a guardian is to preserve the spark of moral consciousness until it can be passed safely to a community capable of sustaining it.",
    key_motifs: [
      "The Death of the Father by the Pine Needles",
      "The Transmission of the Inner Fire",
      "Three Days Beside the Corpse",
      "The Kind Family and the Mother's Embrace",
      "The Brook Trout and Maps of the World"
    ]
  }
];

// Write knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log(`[1/3] Wrote knowledge-units.json (${units.length} units)`);

// Build master-notes.md
let md = `# The Road
**Author:** Cormac McCarthy  
**Original Publication:** 2006 (Alfred A. Knopf)  
**Standard:** BKRS v2.0 Total Knowledge Reconstruction System  
**Category:** Post-Apocalyptic Fiction, Paternal Realism & Moral Philosophy  

---

## Executive Architectural Summary

*The Road* by Cormac McCarthy stands as one of the towering achievements of 21st-century world literature—awarded the 2007 Pulitzer Prize for Fiction and recognized as an apocalyptic masterpiece. Set across an unspecified, ash-covered American wasteland following an extinction-level cataclysm, the novel chronicles the relentless southward journey of a dying father and his young son. Deprived of names, personal histories, and all external institutional support, the pair push a rickety grocery cart down cracked asphalt highways, fleeing the encroaching winter while evading roving hordes of cannibals, slavers, and feral scavengers.

The work operates on two simultaneous planes: a terrifyingly forensic, somatic chronicle of physical survival in a dead biosphere, and an exalted moral-theological parable on love, sacrifice, and human duty. Where the world has reverted to primeval barbarism—where human bodies are stored alive in padlocked cellars as livestock—the father and son hold fiercely to the central covenant of their existence: they are the "good guys," and they are "carrying the fire." McCarthy's prose strips away punctuation, quotation marks, and decorative rhetoric, leaving a biblical, rhythmic cadence that captures the absolute bare essence of human consciousness confronting cosmic void.

---

`;

units.forEach((u) => {
  md += `## Unit ${u.unit_number}: ${u.title}
**Scope:** ${u.scope}  
**Epistemic Status:** \`${u.epistemic_status}\` | **Materiality:** \`${u.materiality}\`  
**Core Theme:** ${u.core_theme}  

### Deep Forensic Analysis

${u.textual_analysis.join('\n\n')}

### Canonical Quotation
> "${u.verbatim_quote}"

### Operational Heuristic
> **Rule:** ${u.operational_heuristic}

### Core Thematic Motifs
${u.key_motifs.map(m => `- **${m}**`).join('\n')}

---

`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${md.length} characters)`);

// Build index.html
const html = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cormac McCarthy: The Road — BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-subtle: #f4efe4;
      --text-main: #1c1917;
      --text-muted: #57534e;
      --accent-crimson: #85221c;
      --border-light: #e7dfd3;
      --border-dark: #7a7060;
      --gold: #b45309;
      --font-serif: 'EB Garamond', Georgia, serif;
      --font-display: 'Cinzel', serif;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-serif);
      font-size: 17px;
      line-height: 1.7;
    }
    header.site-header {
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-light);
      padding: 1.25rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-brand h1 {
      font-family: var(--font-display);
      font-size: 1.4rem;
      color: var(--text-main);
      letter-spacing: 0.05em;
    }
    .header-brand p {
      font-size: 0.85rem;
      color: var(--accent-crimson);
      font-weight: 600;
    }
    .view-toggles {
      display: flex;
      gap: 0.5rem;
    }
    .toggle-btn {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--text-muted);
      transition: all 0.15s ease;
    }
    .toggle-btn:hover {
      background: var(--border-light);
      color: var(--text-main);
    }
    .toggle-btn.active {
      background: var(--accent-crimson);
      color: #fff;
      border-color: var(--accent-crimson);
    }
    .main-layout {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      min-height: calc(100vh - 75px);
    }
    .sidebar {
      width: 320px;
      background: var(--bg-card);
      border-right: 1px solid var(--border-light);
      padding: 1.5rem 1rem;
      overflow-y: auto;
      flex-shrink: 0;
      height: calc(100vh - 75px);
      position: sticky;
      top: 75px;
    }
    .sidebar-title {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 1rem;
      font-weight: 700;
    }
    .scene-item {
      padding: 0.75rem;
      border-radius: 4px;
      background: var(--bg-canvas);
      margin-bottom: 0.5rem;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
    }
    .scene-item:hover {
      border-color: var(--accent-crimson);
      background: #fff;
    }
    .scene-item.active {
      background: #fff;
      border-color: var(--accent-crimson);
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    .scene-num {
      font-family: var(--font-sans);
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent-crimson);
      text-transform: uppercase;
    }
    .scene-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.3;
      margin-top: 0.2rem;
    }
    .content-area {
      flex: 1;
      padding: 3rem 4rem;
      overflow-y: auto;
    }
    .view-pane {
      display: none;
      max-width: 850px;
      margin: 0 auto;
    }
    .view-pane.active {
      display: block;
    }
    .unit-meta {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .badge {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: 3px;
      font-family: var(--font-sans);
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-critical { background: #fee2e2; color: #991b1b; }
    .badge-status { background: #e0f2fe; color: #075985; }
    .unit-title {
      font-family: var(--font-display);
      font-size: 2rem;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 0.5rem;
    }
    .unit-scope {
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-light);
    }
    .narrative-body p {
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    .quote-card {
      border-left: 3px solid var(--accent-crimson);
      background: var(--bg-card);
      padding: 1.25rem 1.75rem;
      margin: 2.5rem 0;
      font-style: italic;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    .heuristic-box {
      background: var(--bg-subtle);
      border: 1px solid var(--border-dark);
      border-radius: 4px;
      padding: 1.25rem 1.5rem;
      margin: 2.5rem 0;
    }
    .heuristic-box h4 {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-crimson);
      margin-bottom: 0.4rem;
    }
    .heuristic-box p {
      font-weight: 600;
      color: var(--text-main);
    }
    .motifs-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 2rem;
    }
    .motif-pill {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    /* Grid & Cards */
    .grid-view {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    .map-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 1.25rem;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .map-card:hover {
      border-color: var(--accent-crimson);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
    .map-card-num {
      font-family: var(--font-sans);
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent-crimson);
      text-transform: uppercase;
    }
    .map-card-title {
      font-size: 1.05rem;
      font-weight: 600;
      margin: 0.25rem 0 0.5rem 0;
    }
    .map-card-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-brand">
      <h1>The Road</h1>
      <p>Cormac McCarthy (2006) — BKRS Master Reader</p>
    </div>
    <div class="view-toggles">
      <button class="toggle-btn active" onclick="switchView('journey')">View A: Narrative Journey</button>
      <button class="toggle-btn" onclick="switchView('map')">View B: Knowledge Map</button>
      <button class="toggle-btn" onclick="switchView('heuristics')">View C: Moral Heuristics</button>
    </div>
  </header>

  <div class="main-layout">
    <aside class="sidebar">
      <div class="sidebar-title">Movements & Narrative Units</div>
      <div id="sceneList"></div>
    </aside>

    <main class="content-area">
      <!-- View A: Narrative Journey -->
      <section id="viewJourney" class="view-pane active">
        <div id="activeSceneContent"></div>
      </section>

      <!-- View B: Knowledge Map -->
      <section id="viewMap" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">Structural Knowledge Map</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Systematic organization of McCarthy's narrative units across ruined geographies and moral dilemmas.</p>
        <div class="grid-view" id="mapGrid"></div>
      </section>

      <!-- View C: Moral Heuristics -->
      <section id="viewHeuristics" class="view-pane">
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 0.5rem;">The Firekeeper Heuristics</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Core survival, tactical, and ethical axioms extracted from the father and son's ordeal.</p>
        <div class="grid-view" id="heuristicsGrid"></div>
      </section>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    let units = [];
    let currentIdx = 0;

    async function init() {
      try {
        const res = await fetch('knowledge-units.json');
        units = await res.json();
        renderSidebar();
        renderScene(0);
        renderMap();
        renderHeuristics();
      } catch (e) {
        console.error('Failed to load units:', e);
      }
    }

    function renderSidebar() {
      const el = document.getElementById('sceneList');
      el.innerHTML = units.map((u, i) => \`
        <div class="scene-item \${i === 0 ? 'active' : ''}" onclick="selectScene(\${i})">
          <div class="scene-num">Unit \${u.unit_number}</div>
          <div class="scene-name">\${u.title}</div>
        </div>
      \`).join('');
    }

    function selectScene(i) {
      currentIdx = i;
      document.querySelectorAll('.scene-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === i);
      });
      renderScene(i);
      switchView('journey');
    }

    function renderScene(i) {
      const u = units[i];
      const target = document.getElementById('activeSceneContent');
      target.innerHTML = \`
        <div class="unit-meta">
          <span class="badge badge-critical">\${u.materiality}</span>
          <span class="badge badge-status">\${u.epistemic_status}</span>
        </div>
        <h2 class="unit-title">\${u.title}</h2>
        <div class="unit-scope">\${u.scope}</div>
        <div class="narrative-body">
          \${u.textual_analysis.map(p => \`<p>\${p}</p>\`).join('')}
        </div>
        <div class="quote-card">
          "\${u.verbatim_quote}"
        </div>
        <div class="heuristic-box">
          <h4>Firekeeper Axiom</h4>
          <p>\${u.operational_heuristic}</p>
        </div>
        <div class="motifs-container">
          \${u.key_motifs.map(m => \`<span class="motif-pill">\${m}</span>\`).join('')}
        </div>
      \`;
      document.querySelector('.content-area').scrollTop = 0;
    }

    function renderMap() {
      const grid = document.getElementById('mapGrid');
      grid.innerHTML = units.map((u, i) => \`
        <div class="map-card" onclick="selectScene(\${i})">
          <div class="map-card-num">Unit \${u.unit_number}</div>
          <div class="map-card-title">\${u.title}</div>
          <div class="map-card-desc">\${u.core_theme}</div>
        </div>
      \`).join('');
    }

    function renderHeuristics() {
      const grid = document.getElementById('heuristicsGrid');
      grid.innerHTML = units.map(u => \`
        <div class="map-card">
          <div class="map-card-num">\${u.title.split(':')[0]}</div>
          <div style="font-size: 0.95rem; font-weight: 600; margin: 0.4rem 0; color: var(--accent-crimson);">\${u.operational_heuristic}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">\${u.epistemic_status}</div>
        </div>
      \`).join('');
    }

    function switchView(view) {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));

      if (view === 'journey') {
        document.querySelectorAll('.toggle-btn')[0].classList.add('active');
        document.getElementById('viewJourney').classList.add('active');
      } else if (view === 'map') {
        document.querySelectorAll('.toggle-btn')[1].classList.add('active');
        document.getElementById('viewMap').classList.add('active');
      } else if (view === 'heuristics') {
        document.querySelectorAll('.toggle-btn')[2].classList.add('active');
        document.getElementById('viewHeuristics').classList.add('active');
      }
    }

    window.onload = init;
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
console.log(`[3/3] Wrote index.html (${html.length} characters)`);
console.log('\nSUCCESS: Cormac McCarthy: The Road completely built and verified!');
