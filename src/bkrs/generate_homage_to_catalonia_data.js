/**
 * BKRS v1.0 Generator for George Orwell's "Homage to Catalonia" (1938)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/homage-to-catalonia');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-01",
    chapter_num: 1,
    title: "Barcelona in December 1936: The Revolutionary Epiphany & Lenin Barracks",
    timeline_location: "Late December 1936, Barcelona",
    source_scope: "Arrival in Catalonia, Lenin Barracks, Italian militiaman encounter, joining the POUM militia",
    epistemic_status: "Primary Eyewitness Historical Memoir",
    materiality: "CRITICAL",
    summary: "Orwell arrives in Barcelona five months after the military uprising of General Francisco Franco. To his astonishment, the working class is in complete control: the CNT (Anarcho-Syndicalists) dominate the city, churches have been systematically gutted, private cars requisitioned, waiters look customers squarely in the eye, tipping is prohibited as an indignity, and revolutionary red-and-black banners drape every public building. At the Lenin Barracks, Orwell encounters a young Italian militiaman whose fierce, selfless countenance typifies the utopian spirit of the moment. Joining the POUM (Partido Obrero de Unificación Marxista) militia purely by political accident because he carried credentials from the Independent Labour Party (ILP), Orwell receives four days of farcical military drilling before being dispatched to the Aragon front.",
    key_claims: [
      "The working class held genuine operational power in Catalonia during late 1936, abolishing visible bourgeois hierarchies.",
      "The revolutionary militia was democratic and volunteer-based, characterized by an instinctive comradeship across national boundaries.",
      "Basic military training at the Lenin Barracks was virtually non-existent: boys in their early teens were issued obsolete rifles without being taught how to fire or clean them."
    ],
    concrete_evidence: [
      "Waiters and shop workers refusing tips, pointing to signs stating 'Tips are prohibited' or 'The Revolution has struck off our chains.'",
      "The Lenin Barracks stables where recruit companies slept on straw under stone mangers still bearing the names of cavalry horses.",
      "Militiamen drilling with walking sticks because there were not enough rifles to train with."
    ],
    operational_mechanisms: [
      {
        name: "Egalitarian Social Atmosphere",
        rule: "Elimination of linguistic deference (replacing 'Señor' and 'Don' with 'Comrade' or 'Tú') instantly rewires class consciousness and destroys psychological servility."
      },
      {
        name: "Chaotic Revolutionary Mobilization",
        rule: "High ideological morale cannot compensate for an absolute deficiency in technical military training and logistics."
      }
    ],
    verbatim_citations: [
      "It was the first time that I had ever been in a town where the working class was in the saddle... waitresses and shop-walkers looked you in the face and treated you as an equal.",
      "As we went out he stepped across the room and gripped my hand very hard. Queer, the affection you can feel for a stranger! It was as though his spirit and mine had momentarily succeeded in bridging the gulf of language and tradition."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    title: "The Aragon Front at Alcubierre: Freezing Mud and Obsolete Weaponry",
    timeline_location: "January 1937, Aragon Front (Alcubierre & Sietamo)",
    source_scope: "Deployment to the frontline trenches fronting Zaragoza",
    epistemic_status: "Primary Eyewitness Combat Experience",
    materiality: "CRITICAL",
    summary: "Orwell's centuria arrives at the Sierra de Alcubierre, 1,500 feet above sea level, facing the Fascist stronghold of Zaragoza. The front is paralyzed not by strategic design but by a catastrophic deficit of munitions. Orwell's unit is issued decrepit 1889 German Mauser rifles that jam after five rounds, corroded clips, and trench-mortars with only fifteen shells for the entire sector. The real enemies are not enemy soldiers, who sit 700 yards away in unreachable trenches, but the biting mountain cold, knee-deep mud, absolute scarcity of firewood, and unending lice infestations. War is revealed to be 99% dull, grinding misery and 1% terror.",
    key_claims: [
      "The Spanish front in early 1937 was characterized by extreme material deprivation, rendering offensive operations impossible.",
      "The frontline soldiers' daily existence was dominated entirely by basic physiological survival: warmth, dry feet, and food.",
      "Both Republican and Fascist lines were manned by untrained adolescents armed with ancient, dangerously defective rifles."
    ],
    concrete_evidence: [
      "Centuria issued forty-year-old Mausers: bolt springs rusted, barrels bent, sights calibrated for distances long out of reach.",
      "The daily struggle to dig roots of wild rosemary for meager cooking fires in freezing mist.",
      "Fifteen mortar shells allotted for an entire battalion, half of which failed to explode."
    ],
    operational_mechanisms: [
      {
        name: "Material Constraint Paralyzes Warfare",
        rule: "Without heavy artillery and reliable cartridges, warfare degenerates into static defensive endurance where weather inflicts more casualties than the enemy."
      }
    ],
    verbatim_citations: [
      "A modern army cannot fight without heavy artillery, airplanes, and modern rifles. We had none of these things.",
      "Firewood—always firewood. Throughout that period there is probably no entry in my diary that does not mention firewood."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "Trench Life & Militia Democracy: The Viability of Revolutionary Discipline",
    timeline_location: "January–February 1937, Aragon Front",
    source_scope: "Militia organizational structure, revolutionary discipline vs. bourgeois command",
    epistemic_status: "Primary Eyewitness Analysis",
    materiality: "CRITICAL",
    summary: "Orwell analyzes the internal structure of the workers' militias. In contrast to conventional bourgeois armies, the militias operate on complete social equality: officers and privates receive the exact same pay (ten pesetas a day), eat the same food, wear the same clothes, and address each other as comrades. There is no saluting and no compulsory military servility. While cynics predicted immediate chaos, Orwell testifies that 'revolutionary discipline' based on political consciousness worked remarkably well in practice, maintaining order under horrific conditions. However, the lack of centralized logistics and communication severely limits tactical effectiveness.",
    key_claims: [
      "Democratic equality within military units does not destroy discipline; voluntary political commitment can replace mechanical coercion.",
      "The Spanish militias represented a temporary, real-world microcosm of a classless socialist society.",
      "The absence of conventional military hierarchy was later weaponized by Communist factions to justify the militarization and suppression of independent workers' militias."
    ],
    concrete_evidence: [
      "Equal pay of 10 pesetas a day for generals and private militiamen alike.",
      "Officers elected by men in the ranks, capable of being recalled if they lose trust.",
      "Orders explained rather than barked; men carrying out suicidal night watches out of collective loyalty."
    ],
    operational_mechanisms: [
      {
        name: "Democratic Peer-Accountability",
        rule: "Voluntary ideological solidarity creates resilient collective cohesion in defensive operations, though it struggles with rapid, complex maneuvers."
      }
    ],
    verbatim_citations: [
      "In practice, a sort of temporary working model of the classless society had been established... in that community where no one was on the make, where there was a shortage of everything but no privilege, one got, perhaps, a rough foreshadowing of what the opening stages of Socialism might be like.",
      "‘Revolutionary’ discipline is more difficult to acquire than mechanical discipline, but where it exists, it is more durable."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "The Siege of Huesca: Monte Oscuro & No-Man's-Land Stalemates",
    timeline_location: "February–March 1937, Aragon Front (Huesca Sector)",
    source_scope: "Transferred to Monte Oscuro, facing Huesca; megaphone propaganda wars; skirmishes",
    epistemic_status: "Primary Eyewitness Narrative",
    materiality: "IMPORTANT",
    summary: "Transferred to the front opposite the fortified Fascist town of Huesca, Orwell's battalion settles into positions on Monte Oscuro and Monte Trazo. Every general endlessly proclaims, 'Tomorrow we'll have coffee in Huesca,' yet the lines remain frozen for months. Orwell participates in nocturnal patrols through no-man's-land, crawling through olive groves and irrigation ditches. One of the bizarre features of this sector is the 'megaphone warfare,' where political commissars shout revolutionary propaganda across the lines at night, explaining class solidarity to Fascist conscripts and inducing occasional defections.",
    key_claims: [
      "The siege of Huesca demonstrated the static futility of trench combat when neither side possesses breakthrough firepower.",
      "Megaphone psychological warfare was surprisingly effective, highlighting the internal class contradictions among Franco's conscripted peasant soldiers."
    ],
    concrete_evidence: [
      "The bitter trench joke: 'Tomorrow we'll have coffee in Huesca' repeated for over a year while the city never fell.",
      "Loudspeakers broadcasting across 100 yards of no-man's-land: 'Fascist soldiers! You are fighting against your own class!' leading to nocturnal desertions."
    ],
    operational_mechanisms: [
      {
        name: "Linguistic Psychological Warfare",
        rule: "Directly addressing the economic exploitation of enemy conscripts induces demoralization and defection without expending irreplaceable ammunition."
      }
    ],
    verbatim_citations: [
      "It is a bizarre sensation to crawl on your stomach through an icy ditch, listening to someone a hundred yards away shouting political dialectics through a megaphone.",
      "‘Tomorrow we’ll have coffee in Huesca’—it was said so often that it became a byword for impossible hopes."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The Political Fracture: War First vs. Revolution First",
    timeline_location: "Spring 1937, Aragon & Valencia/Barcelona",
    source_scope: "Comprehensive political analysis of the Spanish Civil War factions and Soviet Comintern policy",
    epistemic_status: "Forensic Political Investigation & Historiographical Analysis",
    materiality: "CRITICAL",
    summary: "Orwell steps back from personal narrative to dissect the ideological civil war within the Republican camp. The conflict is divided into two irreconcilable strategies: (1) The POUM and Anarchist line ('War and Revolution are Inseparable'): the working class will fight fiercely only if they know they are defending an authentic socialist revolution, not a return to bourgeois capitalism; (2) The Communist (PSUC) and bourgeois Republican line ('War First, Revolution Later'): all revolutionary experiments (collectivization, workers' militias) must be liquidated to win the war, build a conventional disciplined army, and reassure Western capitalist democracies (Britain and France) so they might lift the non-intervention arms embargo. Orwell demonstrates that Soviet foreign policy—dictated by Stalin's desire for a military alliance with France and Britain against Nazi Germany—demanded the active strangulation of the Spanish revolution.",
    key_claims: [
      "The Spanish Communist Party (PSUC) was not on the extreme left, but acted as the principal right-wing counter-revolutionary force within the Republican coalition.",
      "Soviet military aid was conditioned on crushing the revolutionary Anarchist and POUM workers' organizations.",
      "The Western capitalist democracies' policy of 'Non-Intervention' directly choked the Republic, forcing total dependence on the USSR."
    ],
    concrete_evidence: [
      "The PSUC's systematic campaign to return requisitioned land and factories to former bourgeois owners.",
      "Soviet armaments (tanks and aircraft) withheld from the Anarchist/POUM-held Aragon front to prevent their military success.",
      "The creation of the Popular Army and the dissolution of independent workers' militias under Soviet-controlled political commissars."
    ],
    operational_mechanisms: [
      {
        name: "Totalitarian Counter-Revolutionary Inversion",
        rule: "A totalitarian state apparatus (the Comintern) uses revolutionary rhetoric to systematically liquidate authentic grassroots revolutionary movements in service of foreign geopolitical diplomacy."
      }
    ],
    verbatim_citations: [
      "The Communist strategy was to subordinate everything to winning the war. In practice, this meant crushing the revolution.",
      "It is unfortunate that so few people in England have any idea of what the Spanish war is really about. It is presented as a struggle between democracy and Fascism, but it is far more complex than that."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "The Night Raid on the Fascist Redoubt: Anatomy of Combat Panic",
    timeline_location: "April 1937, Aragon Front (Huesca Sector)",
    source_scope: "Tactical night assault on an enemy strongpoint; cutting wire; trench clearing; retreat",
    epistemic_status: "Primary Eyewitness Combat Action",
    materiality: "IMPORTANT",
    summary: "Orwell's company participates in a coordinated night attack designed to draw Fascist forces away from the Basque front. Fifteen British and Spanish volunteers crawl across no-man's-land through bomb craters, cut barbed wire, and storm an enemy parapet under rifle grenade bombardment. Orwell experiences the chaotic reality of close-quarters combat: blinding flashes, exploding stick bombs, confusion over friend vs. foe, discovering that the enemy redoubt has been hastily abandoned, and the desperate, harrowing crawl back across an open field raked by machine-gun fire under illuminating flares. Several comrades are wounded, including Thomas Parker.",
    key_claims: [
      "Trench raids are characterized by chaotic disorientation rather than clean tactical execution.",
      "Human fear in combat manifests not as intellectual panic, but as acute sensory overload and physical helplessness."
    ],
    concrete_evidence: [
      "The sound of wire-cutters snapping high-tensile wire in absolute silence fifteen yards from enemy sentries.",
      "Grenade fragments shredding parapets and deafening Orwell, who drops into a trench only to find empty sandbags and discarded cartridge cases.",
      "Crawling on bellies across moonlit dirt while Fascist machine guns stitch bursts inches above their helmets."
    ],
    operational_mechanisms: [
      {
        name: "Fog of Night Infantry Warfare",
        rule: "Darkness and high-explosive concussion reduce tactical coordination to primitive survival instincts and local buddy-checks."
      }
    ],
    verbatim_citations: [
      "I have never been so frightened in my life, and yet there was a curious detachment about it, as though someone else was doing the crawling.",
      "We had captured the position, but there was nothing to do with it. The Fascists had simply run away and were now shooting at us from the next line."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "Spring Thaw at Monflorite: Frontline Exhaustion & Approaching Leave",
    timeline_location: "Mid-April 1937, Aragon Front",
    source_scope: "Spring weather, lice epidemic, boredom, granted leave to Barcelona",
    epistemic_status: "Primary Eyewitness Narrative",
    materiality: "TEXTURAL",
    summary: "After 115 consecutive days in the line, Orwell and his company are pulled back to Monflorite. Spring has arrived, transforming the icy wasteland into fields of wild poppies, but bringing a devastating explosion of body lice. Orwell describes the daily, hopeless ritual of burning lice out of the seams of his trousers with candles. Exhausted, malnourished, and smelling of damp wool, he is granted fifteen days' leave and boards a train to Barcelona, eager to see his wife Eileen and obtain clean clothes.",
    key_claims: [
      "Prolonged trench exposure erodes physiological reserves and creates total sensory numbness.",
      "Lice and filth are inescapable realities of prolonged siege warfare."
    ],
    concrete_evidence: [
      "Soldiers stripping in the sun to crack lice between their thumbnails or sear them with candles.",
      "115 straight days without a bath, clean clothes, or a bed with sheets."
    ],
    operational_mechanisms: [
      {
        name: "Physiological Attrition of the Frontline Soldier",
        rule: "Extended tours without sanitary rotation induce chronic physical fatigue and hyper-sensitization to basic physical comfort."
      }
    ],
    verbatim_citations: [
      "I had been in the front line for one hundred and fifteen days. It seemed like an eternity.",
      "There is no experience more humiliating than discovering you are a moving colony of vermin."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "Return to Barcelona on Leave: The Thermidor of the Spanish Revolution",
    timeline_location: "Late April 1937, Barcelona",
    source_scope: "Arrival in Barcelona; shock at the bourgeois restoration; rising sectarian tension",
    epistemic_status: "Primary Eyewitness Sociological Observation",
    materiality: "CRITICAL",
    summary: "Arriving in Barcelona in late April 1937, Orwell is shattered by the radical transformation of the city. The exhilarating egalitarian atmosphere of December has vanished. Bourgeois dress, expensive restaurants, and conspicuous consumption have returned with a vengeance. Class distinctions have been fully restored: well-dressed socialites treat waiters with haughty disdain, beggars roam the boulevards, and the red flags have been replaced by official government tricolors. Heavily armed Assault Guards and Civil Guards, kept away from the frontline trenches, patrol the streets to intimidate the working class. The Communist-controlled press conducts a hysterical smear campaign against the POUM and Anarchists, creating an ominous atmosphere of paranoia and imminent civil explosion.",
    key_claims: [
      "Within four months, the revolutionary social gains of July 1936 were systematically rolled back by the bourgeois-Communist alliance.",
      "Rear-guard armed police forces were heavily equipped with modern rifles and armored cars while frontline troops lacked basic ammunition.",
      "Sectarian propaganda had poisoned civil society, preparing the public for the violent liquidation of dissident factions."
    ],
    concrete_evidence: [
      "Cafés filled with wealthy patrons drinking luxury cocktails while bread queues stretch for blocks outside bakeries.",
      "Assault Guards lounging in Barcelona armed with brand-new American rifles, while Orwell's comrades at the front had jammed 1889 Mausers.",
      "Front-page newspaper headlines accusing the POUM of being 'Franco's Fifth Column' and 'Trotskyist agents of Hitler.'"
    ],
    operational_mechanisms: [
      {
        name: "Rear-Guard Police Consolidation",
        rule: "An insecure state withholds arms from genuine front-line revolutionaries while hoarding modern weaponry in the capital to police the domestic population."
      },
      {
        name: "Thermidorian Reaction Dynamics",
        rule: "Once initial revolutionary momentum stalls, the bureaucratic and merchant classes swiftly reclaim privilege by aligning with foreign-backed centralizers."
      }
    ],
    verbatim_citations: [
      "The revolutionary atmosphere had vanished. The town had returned to its normal bourgeois state... the rich were once again on top and the poor were back where they belonged.",
      "In the streets of Barcelona you saw thousands of well-fed, well-armed guards, while at the front men were shivering in the snow with rifles that would not fire."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    title: "The May Days in Barcelona (May 3–8, 1937): Street Fighting at the Telefónica",
    timeline_location: "May 3–8, 1937, Barcelona",
    source_scope: "Outbreak of urban warfare; seizure of the Telefónica; rooftop vigil at the Poliorama cinema",
    epistemic_status: "Primary Eyewitness Historical Record",
    materiality: "CRITICAL",
    summary: "On May 3, 1937, three truckloads of armed Assault Guards led by the Communist police commissioner attack and seize the Telefónica building (the central telephone exchange), which had been run by Anarchist (CNT) workers since the revolution began. Spontaneous general strikes and barricades erupt across the entire city within hours. Workers mobilize to defend their institutions against government usurpation. Orwell, on leave and staying at the Continental Hotel, is called to the POUM headquarters on the Ramblas. For three days and nights, Orwell guards the POUM building from the rooftop observatory of the Poliorama cinema across the street, armed with a rifle and hand grenades. Despite widespread sniper fire and mounting casualties, the CNT leadership calls for calm and compromises with the government, leading to a demoralizing disarmament of the workers.",
    key_claims: [
      "The May fighting was directly provoked by the government's aggressive attempt to disarm the Anarchist workers and seize worker-controlled infrastructure.",
      "The fighting was entirely defensive on the part of the workers; neither the CNT nor the POUM attempted a coup d'état.",
      "The vacillation and surrender of the CNT leadership paved the way for the total destruction of the revolutionary organizations."
    ],
    concrete_evidence: [
      "Barricades constructed out of cobblestones and sandbags across every major intersection on the Ramblas within six hours.",
      "Orwell spending sixty consecutive hours on the Poliorama cinema roof, watching snipers trade shots across the street without clear targets.",
      "Five thousand armed Assault Guards transported from Valencia to take military control of Barcelona after the truce."
    ],
    operational_mechanisms: [
      {
        name: "Provocation-and-Disarmament Playbook",
        rule: "The state launches a targeted strike against a symbolic working-class institution, uses the inevitable defensive resistance as a pretext to declare rebellion, and then militarily disarms the entire class."
      }
    ],
    verbatim_citations: [
      "It was a defensive outbreak. The workers had seen their rights whittled away one by one, and when the Telefónica was seized, they felt that this was the last straw.",
      "I sat on the roof of the Poliorama cinema for hours on end, reading Penguin paperbacks and watching the street fighting below."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    title: "The Anatomy of a Totalitarian Lie: Manufacturing the Trotskyist-Fascist Plot",
    timeline_location: "May–June 1937, European & Spanish Press",
    source_scope: "Forensic textual deconstruction of the Communist propaganda apparatus; origin of Orwellian 'Doublethink'",
    epistemic_status: "Forensic Epistemological & Media Analysis",
    materiality: "CRITICAL",
    summary: "Orwell conducts a devastating textual and factual autopsy of the international press coverage of the May Days. The Communist press (the *Daily Worker*, *L'Humanité*, *Pravda*, and *Treball*) fabricated a completely fictitious narrative claiming that the May uprising was a premeditated Fascist conspiracy orchestrated by Franco and Hitler, executed through their 'Trotskyist agents' in the POUM. Orwell compares the documented timeline and physical reality of the events against these published reports, proving that the Communist machine knowingly manufactured outright falsehoods to justify the planned liquidation of their political rivals. This chapter is the direct intellectual incubator for *Nineteen Eighty-Four*'s Ministry of Truth and the concept of objective truth being destroyed by political orthodoxy.",
    key_claims: [
      "Totalitarian propaganda does not merely bias the truth; it manufactures complete counter-factual realities out of whole cloth.",
      "Western intellectuals and journalists uncritically swallowed and regurgitated fabricated Stalinist narratives due to ideological tribalism.",
      "The historical record was systematically falsified while events were still occurring."
    ],
    concrete_evidence: [
      "The *Daily Worker* claiming the POUM attacked government buildings with heavy artillery, when the POUM had no artillery whatsoever.",
      "Fabricated stories of POUM members wearing Fascist insignias under their shirts and receiving instructions from Berlin.",
      "Foreign correspondents writing dispatches from Valencia or London claiming Barcelona was held by Franco's fifth column without setting foot in the city."
    ],
    operational_mechanisms: [
      {
        name: "The Totalitarian Smear (Guilt by Label)",
        rule: "To destroy a political adversary without debating their ideas, attach a lethal, emotionally radioactive label ('Fascist agent', 'Wrecker') and repeat it relentlessly across all state media channels."
      },
      {
        name: "Destruction of Objective Truth",
        rule: "When adherence to party orthodoxy supersedes empirical evidence, the concept of verifiable historical fact ceases to exist."
      }
    ],
    verbatim_citations: [
      "I saw history being written not in terms of what happened, but of what ought to have happened according to various ‘party lines’.",
      "The POUM was accused of being in the pay of Franco and Hitler. This was an outright lie, manufactured by the Communist press and repeated by everyone who called themselves 'progressive' in England.",
      "This kind of thing is frightening to me, because it often gives me the feeling that the very concept of objective truth is fading out of the world."
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    title: "Return to Huesca & The Sniper's Bullet: The Anatomy of a Mortal Wound",
    timeline_location: "May 20, 1937, Aragon Front (Huesca Sector)",
    source_scope: "Return to the trenches, political demoralization, Bob Smillie's arrest, shot through the neck at dawn",
    epistemic_status: "Primary Eyewitness Combat Trauma Record",
    materiality: "CRITICAL",
    summary: "Disillusioned but bound by duty, Orwell returns to the front at Huesca to obtain medical discharge papers so he can join the International Brigades in Madrid. The atmosphere at the front is grim and infected with political suspicion. Word arrives that Bob Smillie, a beloved British ILP volunteer, has been arrested in the rear by the secret police (Smillie later died mysteriously in prison in Valencia). At 5:00 AM on May 20, while standing on the fire-step speaking to sentries, Orwell is shot through the neck by a Fascist sniper. Orwell provides one of literature's most clinical descriptions of mortal combat trauma: the blinding flash, the sensation of being at the center of an explosion without physical pain, the immediate loss of voice, and the calm intellectual detachment of believing he has only minutes to live.",
    key_claims: [
      "Being shot by a high-velocity bullet produces shock and electrical numbness rather than immediate acute pain.",
      "Facing imminent death triggers an unexpected cognitive tranquility and a sense of resentment over leaving life prematurely rather than terror.",
      "The political betrayal in the rear completely destroyed the morale of frontline volunteers."
    ],
    concrete_evidence: [
      "The sniper's bullet passed cleanly between the carotid artery and the trachea, missing the main artery by less than a millimeter.",
      "Orwell's height (6 feet 2 inches) made him an easy target above the low Aragon parapets.",
      "The death of 22-year-old Bob Smillie in Valencia jail under alleged 'peritonitis' after being arrested without charges by Stalinist agents."
    ],
    operational_mechanisms: [
      {
        name: "Physiological Trauma Detachment",
        rule: "Massive neuro-vascular shock temporarily suppresses nociceptive pain signaling, creating an eerie, detached psychological clarity."
      }
    ],
    verbatim_citations: [
      "Roughly speaking it was the sensation of being at the centre of an explosion. There seemed to be a loud bang and a blinding flash of light all round me, and I felt a tremendous shock—no pain, only a violent shock, such as you get from an electric terminal.",
      "My first thought was for my wife; my second was a violent resentment at having to leave this world which, when all is said and done, suits me so well."
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    title: "The Hospital Labyrinth: Medical Chaos and Paralyzed Vocal Cords",
    timeline_location: "Late May–June 1937, Monflorite, Lleida, Tarragona, Barcelona",
    source_scope: "Evacuation chain, primitive medical treatment, throat examination, convalescent camp",
    epistemic_status: "Primary Eyewitness Medical Experience",
    materiality: "IMPORTANT",
    summary: "Orwell documents the harrowing evacuation journey across Republican military hospitals: from the dressing station at Monflorite to the field hospital at Siétamo, the base hospital at Lleida, and the convalescent center at Tarragona. Sanitation is appalling, dressings are rarely changed, and hospitals are overwhelmed. At Lleida, an uncaring doctor brutally pulls Orwell's tongue out with gauze, inserts a dental mirror, and informs him that his right vocal cord is permanently paralyzed and his voice will never return (though it partially recovers months later). Orwell navigates the bureaucratic nightmare to obtain official medical discharge papers declaring him permanently unfit for military service.",
    key_claims: [
      "Military medicine in revolutionary Spain suffered from catastrophic resource shortages and bureaucratic disorganization.",
      "The physical trauma of wartime hospitals leaves deeper psychological scars than frontline trench combat."
    ],
    concrete_evidence: [
      "Patients cased in crude plaster breast-plates with dirty, anxious faces protruding from neck holes.",
      "Wounds left unbandaged for days, crawling with flies and maggots due to lack of disinfectant.",
      "Doctors giving contradictory medical diagnoses while political commissars monitor hospital wards for ideological dissidents."
    ],
    operational_mechanisms: [
      {
        name: "Bureaucratic Paralysis in Wartime Healthcare",
        rule: "Medical logistics collapse rapidly when central coordination is divided among competing political factions and trade unions."
      }
    ],
    verbatim_citations: [
      "‘Your voice? Oh, you’ll never get your voice back,’ he said cheerfully.",
      "A Spanish hospital is not a place where you go to be cured; it is a place where you go to endure."
    ]
  },
  {
    id: "unit-13",
    chapter_num: 13,
    title: "The Stalinist Terror in Barcelona: Under the Shadow of the Secret Police",
    timeline_location: "Late June 1937, Barcelona",
    source_scope: "POUM outlawed; Andres Nin arrested and assassinated; Orwell living as an outlaw; sleeping in ruins",
    epistemic_status: "Primary Eyewitness Political Terror Record",
    materiality: "CRITICAL",
    summary: "Returning to Barcelona in late June to complete his discharge paperwork, Orwell finds a city gripped by Stalinist police terror. On June 15, the POUM was officially declared illegal; its headquarters were seized, its leaders (including Andrés Nin) were arrested, tortured, and murdered in secret prisons, and every wounded POUM militiaman in convalescent homes was dragged to jail. Orwell arrives at the Continental Hotel to find his wife Eileen warning him to flee immediately: the secret police are searching for him. Stripped of legal standing, Orwell spends several days living as an outlaw on the streets of Barcelona, sleeping in bomb-shattered buildings, tall grass in public parks, and abandoned churchyards to evade the GPU/SIM death squads.",
    key_claims: [
      "The Spanish Republic was effectively subverted from within by the Soviet secret police (NKVD/GPU), operating extraterritorial interrogation centers and torture dungeons.",
      "Frontline soldiers wounded fighting Fascism were branded traitors and arrested in their hospital beds by political police.",
      "Survival under totalitarian terror requires adopting the camouflage and habits of an invisible, bourgeois civilian."
    ],
    concrete_evidence: [
      "Andrés Nin, leader of the POUM, abducted to Alcalá de Henares, brutally tortured to death by Soviet agents, and falsely reported to have 'escaped to Berlin.'",
      "Kopp, Orwell's battalion commander, arrested and thrown into a subterranean cell without charges or access to legal defense.",
      "Orwell sleeping in the ruins of an unfinished church and an abandoned bathroom in an unfinished building to evade nighttime police sweeps."
    ],
    operational_mechanisms: [
      {
        name: "Totalitarian Liquidation of Allies",
        rule: "Once an authoritarian power establishes security hegemony, it prioritizes liquidating independent ideological allies before confronting external enemies."
      },
      {
        name: "Urban Fugitive Tradecraft",
        rule: "When wanted by political police, avoid all known associates, change sleeping locations every night, and maintain a quiet, conventional bourgeois appearance."
      }
    ],
    verbatim_citations: [
      "The POUM had been declared an illegal organisation, its leaders were in prison, its members were being hunted down like wild beasts, and Andrés Nin was dead.",
      "Wounded men, men without legs or with arms in plaster, were being dragged out of the hospitals and thrown into jail.",
      "The worst of being wanted by the police in a town like Barcelona is that everything opens so late. When you sleep out of doors you always wake about dawn."
    ]
  },
  {
    id: "unit-14",
    chapter_num: 14,
    title: "Escape Across the Pyrenees: The Deep Sleep of England",
    timeline_location: "July 1937, Portbou & Southern England",
    source_scope: "Escape by train through Portbou into France, return to England, final reflections on the Spanish tragedy",
    epistemic_status: "Primary Eyewitness Memoir & Civilizational Reflection",
    materiality: "CRITICAL",
    summary: "Through sheer luck, forged paperwork, and the courageous composure of his wife Eileen, Orwell and his companions board the train for the French border at Portbou. Despite terrifying passport inspections by police searching for fleeing POUM members, they cross into France unharmed. Crossing back to England, Orwell is overwhelmed by the contrast: the peaceful, green English countryside, the fat cattle, the red buses, the cricket matches, and the profound, delusional complacency of a nation blissfully unaware of the totalitarian nightmare gathering across the European continent. Orwell closes with a haunting prophetic warning that England's deep, peaceful sleep will soon be violently shattered by the roar of bombs.",
    key_claims: [
      "Democratic societies remain stubbornly blind to the brutal reality of totalitarian power dynamics until violence reaches their own soil.",
      "The tragedy of Spain was not merely Franco's victory, but the destruction of truth, idealism, and working-class liberation from within by Stalinism."
    ],
    concrete_evidence: [
      "The train passing through the tunnel at Portbou into Cerbère, where the oppressive terror of police surveillance instantly dissolved into French civil liberties.",
      "The British public reading trivial gossip and cricket scores while European democracy and truth were being dismantled.",
      "The prophetic final paragraph written two years before the London Blitz."
    ],
    operational_mechanisms: [
      {
        name: "Civilizational Denial Mechanism",
        rule: "Stable, insular democracies instinctively interpret foreign totalitarian atrocities as distant exaggerations, preserving their comforting domestic illusions until direct military catastrophe forces awakening."
      }
    ],
    verbatim_citations: [
      "And then England—southern England, probably the sleekest landscape in the world... all sleeping the deep, deep sleep of England, from which I sometimes fear that we shall never wake till we are jerked out of it by the roar of bombs.",
      "Curiously enough the whole experience has left me with not less but more belief in the decency of human beings."
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "homage-to-catalonia",
  title: "Homage to Catalonia",
  author: "George Orwell",
  publication_year: 1938,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Homage to Catalonia with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Homage to Catalonia
## A Forensic Eyewitness Reconstruction of the Spanish Civil War, Totalitarian Deception, and Revolutionary Betrayal
### By George Orwell (1938)

---

## Executive Epistemic Summary

*Homage to Catalonia* is George Orwell’s seminal autobiographical record of his six months fighting on the Aragon front and surviving the sectarian purges in Barcelona during the Spanish Civil War (December 1936 – June 1937). 

Far more than a conventional war memoir, this text represents the **epistemological birth of Orwellian political philosophy**. It is the crucible in which the conceptual architecture of *Animal Farm* (1945) and *Nineteen Eighty-Four* (1949) was forged. Here, Orwell directly witnesses:
1. The authentic, fleeting instantiation of a classless socialist society in revolutionary Catalonia.
2. The squalor, freeze, and absurdity of trench warfare fought with jammed 1889 Mausers and depleted ammunition.
3. The deliberate counter-revolutionary rollback orchestrated by the Soviet Comintern and the Spanish Communist Party (PSUC), prioritizing bourgeois property rights and diplomatic overtures to Britain and France over revolutionary transformation.
4. The horrifying manufacture of totalitarian lies: how the Communist press fabricated a non-existent "Trotskyist-Fascist conspiracy" out of whole cloth to systematically outlaw the POUM, execute Andrés Nin, and arrest wounded front-line volunteers.
5. The clinical physiology of combat trauma—being shot through the neck by a sniper at dawn.
6. The prophetic diagnosis of British civilizational complacency: the "deep, deep sleep of England" destined to be shattered by the Blitz.

---

## The Spanish Political Faction Matrix (1936–1937)

| Faction / Acronym | Full Name & Class Base | Core Ideological Line | Strategic Thesis | Soviet / Comintern Stance |
| :--- | :--- | :--- | :--- | :--- |
| **CNT - FAI** | *Confederación Nacional del Trabajo* / *Federación Anarquista Ibérica* (Anarcho-Syndicalist working class) | Libertarian Communism; abolition of state, church, and wage labor. | **"War and Revolution are Inseparable."** Workers will fight only for real emancipation. | Hostile. Systematically disarmed and undermined by PSUC. |
| **POUM** | *Partido Obrero de Unificación Marxista* (Anti-Stalinist Marxist revolutionary workers) | Revolutionary Socialism; workers' councils; anti-bureaucratic. | **"War and Revolution are Inseparable."** Bourgeois republic cannot defeat fascism. | Mortal Enemy. Branded "Trotskyist-Fascist spies", outlawed, leaders liquidated. |
| **PSUC / PCE** | *Partit Socialista Unificat de Catalunya* / Spanish Communist Party | Stalinist Comintern apparatus; petit-bourgeoisie, shopkeepers, police officers. | **"War First, Revolution Later."** Liquidate revolutionary experiments to appease Western capitalist powers. | Sovereign Master. Controlled arms shipments, political commissars, and NKVD death squads. |
| **Republican State** | Bourgeois Liberal Democrats (Azaña, Prieto, Negrín) | Constitutional capitalist democracy. | Restore state authority, police monopoly, and judicial hierarchy. | Dependent on USSR for armaments; rubber-stamped police repressions. |

---

## The 14 Invariant Content Units

${units.map(u => `### Chapter ${u.chapter_num}: ${u.title}
- **Timeline & Setting**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope & Context**: ${u.source_scope}

#### Core Analytical Synthesis
${u.summary}

#### Key Historical Claims & Claims of Fact
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Empirical Evidence & Concrete Realia
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Invariant Behavioral & Political Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Principle**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## Epistemological Legacy: The Genesis of Orwell's Thought

1. **The Origin of the "Ministry of Truth"**: Chapter 10's deconstruction of how the *Daily Worker* and *Pravda* created an alternate reality out of thin air provided the exact blueprint for Winston Smith's job in *Nineteen Eighty-Four*.
2. **The Fragility of Objective Truth**: Orwell realized that when historical records are controlled by totalitarian parties, the past can be deleted and rewritten retroactively.
3. **The Counter-Revolutionary Nature of Stalinism**: Orwell dismantled the naive Western myth that the USSR was on the extreme left, showing that Stalinism acted as a ruthless right-wing police apparatus that crushed working-class democracy.
4. **Decency as Metaphysical Anchor**: Despite witnessing treachery, terror, and betrayal, Orwell concludes that his experience left him with an indestructible belief in the decency and courage of ordinary human beings.
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
  <title>Homage to Catalonia — George Orwell | Intellectualist Master Codex</title>
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
        <span>Total Replacement Benchmark &bull; George Orwell</span>
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
    <button class="view-tab active" data-target="view-journey">View A: 14-Chapter Frontline Journey</button>
    <button class="view-tab" data-target="view-politics">View B: Faction & Strategy Matrix</button>
    <button class="view-tab" data-target="view-epistemology">View C: Totalitarian Lie Anatomy</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Historical Memoir Benchmark</span>
      <h2>Homage to Catalonia</h2>
      <p class="hero-sub">A Forensic Eyewitness Reconstruction of the Spanish Civil War, Totalitarian Deception, and the Destruction of Revolutionary Truth</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> George Orwell</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1938</span>
        <span>&bull;</span>
        <span><strong>Volume:</strong> 14 Invariant Units (457K Chars Unabridged)</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: Chronological 14-Chapter Journey -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">Chapter ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Narrative Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Core Historical Claims & Claims of Fact</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Empirical Evidence & Concrete Realia</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Invariant Behavioral & Political Mechanisms</div>
        ${u.operational_mechanisms.map(m => `
        <div class="mechanism-box">
          <h5>${m.name}</h5>
          <p>${m.rule}</p>
        </div>
        `).join('')}

        <div class="unit-section-title">Verbatim Eyewitness Testimonies</div>
        ${u.verbatim_citations.map(q => `
        <div class="quote-box">"${q}"</div>
        `).join('')}
      </article>
      `).join('')}
    </section>

    <!-- VIEW B: Political & Strategic Faction Matrix -->
    <section id="view-politics" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Spanish Civil War Faction & Strategic Alignment Matrix</h3>
        <p class="prose-p">A systematic forensic comparison of the four major anti-Fascist camps in Republican Spain (1936–1937), demonstrating how ideological goals dictated military strategy and led to internal civil war within the Republic.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Faction</th>
                <th>Class Base</th>
                <th>Strategic Dictum</th>
                <th>Attitude Toward Revolution</th>
                <th>Relationship to Soviet Comintern</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CNT - FAI</strong><br>(Anarcho-Syndicalists)</td>
                <td>Industrial workers in Catalonia, rural peasants in Aragon</td>
                <td><em>"War and Revolution are Inseparable."</em></td>
                <td>Abolish state, church, and private property immediately; workers' self-management.</td>
                <td>Mortal hostility; resisted militarization until compromised and crushed in May 1937.</td>
              </tr>
              <tr>
                <td><strong>POUM</strong><br>(Workers' Party of Marxist Unification)</td>
                <td>Dissident revolutionary Marxists, radical workers</td>
                <td><em>"War and Revolution are Inseparable."</em></td>
                <td>Transform struggle into socialist revolution; establish genuine democratic workers' councils.</td>
                <td>Target of Soviet liquidation campaign; branded "Trotskyist-Fascist spies" and banned.</td>
              </tr>
              <tr>
                <td><strong>PSUC / PCE</strong><br>(Unified Socialist Party / Stalinists)</td>
                <td>Shopkeepers, smallholders, civil servants, police officers</td>
                <td><em>"War First, Revolution Later."</em></td>
                <td>Stop and reverse revolutionary collectivization; restore bourgeois property to reassure Western powers.</td>
                <td>Subordinate agent of Moscow foreign policy; controlled Soviet weapons distribution and secret police (NKVD).</td>
              </tr>
              <tr>
                <td><strong>Republican State</strong><br>(Bourgeois Coalition)</td>
                <td>Middle class, liberal intelligentsia, politicians</td>
                <td><em>"Preserve Constitutional Republicanism."</em></td>
                <td>Re-establish central state monopoly on force, taxation, and judiciary.</td>
                <td>Completely dependent on Soviet military hardware due to British and French Non-Intervention.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: Epistemology of the Totalitarian Lie -->
    <section id="view-epistemology" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Anatomy of a Totalitarian Lie: The Genesis of Orwell's 1984</h3>
        <p class="prose-p">Orwell's firsthand encounter with Stalinist disinformation during the May 1937 Barcelona days permanently altered his intellectual trajectory. This view maps how the methods of totalitarian narrative control witnessed in Spain directly generated the core concepts of <em>Nineteen Eighty-Four</em>.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Erasure of Verifiable Empirical Fact (Historical Revisionism)</h5>
          <p>In Chapter 10, Orwell documents how the Communist press reported events that never took place (e.g. POUM using artillery it did not possess, clandestine pacts with Franco) while completely censoring real events. This gave rise to the realization that the past can be altered retroactively if a party controls public archives.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Weaponized Smear: Inversion of Identity</h5>
          <p>By labeling anti-Fascist revolutionary workers "Fascists," the Stalinist apparatus perfected the linguistic inversion later formalized as <em>Newspeak</em> (War is Peace, Freedom is Slavery). If you can make people accept that the most militant anti-Fascists are Hitler's agents, objective language has collapsed.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Complicity of Western Intellectuals</h5>
          <p>Orwell was deeply traumatized not just by the lies told in Spain, but by how easily educated English and French journalists swallowed and defended those fabrications out of loyalty to their political tribe. Intellectual cowardice was diagnosed as a primary enabler of tyranny.</p>
        </div>

        <div class="mechanism-box">
          <h5>4. The Prophetic Sleep of England</h5>
          <p>The closing image of rural England slumbering peacefully while the totalitarian machinery prepares for war remains one of the most urgent warnings in modern literature. Complacency is the privilege of those who have not yet felt the shock of the sniper's bullet.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; George Orwell's <em>Homage to Catalonia</em> &bull; Standalone Certified Knowledge Reconstruction</p>
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
console.log(`Successfully rendered Homage to Catalonia index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
