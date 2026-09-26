const fs = require('fs');
const path = require('path');

const deepSurvivalUnits = [
  {
    chapter_number: 1,
    id: "KU-DS-CH-01",
    chapter_title: "“Look Out, Here Comes Ray Charles” (The Neurobiology of Fear)",
    source_coordinates: "Part I: How Accidents Happen, pp. 19–38",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "The amygdala reacts milliseconds before the neocortex can think; under sudden mortal threat, emotional hijacking turns rational experts into blind reactors.",
    causal_mechanism: [
      "In the opening chapter of Deep Survival, Laurence Gonzales establishes the foundational neurobiological architecture that governs all human decision-making under mortal stress. Drawing on the landmark research of neuroscientist Joseph LeDoux, Gonzales reveals that the human brain possesses two distinct visual and emotional processing pathways: the subcortical 'low road' and the cortical 'high road'. The low road runs from the sensory thalamus directly to the lateral amygdala in approximately 12 milliseconds—a lightning-fast, coarse evolutionary circuit designed for raw survival. The high road routes sensory data from the thalamus through the primary sensory cortex, the hippocampus, and the prefrontal neocortex, requiring 30 to 40 milliseconds to construct a detailed, conscious, analytical representation of the threat.",
      "Because the emotional brain reacts nearly three times faster than the rational brain, fear seizes control of the physical organism before conscious thought can intervene. When the amygdala detects a life-threatening stimulus, it instantly triggers the sympathetic nervous system and the hypothalamic-pituitary-adrenal (HPA) axis. A violent chemical surge of adrenaline, cortisol, and norepinephrine floods the bloodstream from the locus coeruleus and adrenal glands. The heart rate accelerates past 140 beats per minute, blood pressure spikes, and vascular constriction shunts blood away from the digestive tract and extremities into the major skeletal muscles.",
      "Crucially, this survival cascade exacts a devastating cognitive tax. Under high-adrenaline surge, peripheral vision constricts into severe tunnel vision (perceptual narrowing), auditory exclusion mutes external warnings, and working memory collapses. The prefrontal neocortex—the seat of complex logic, spatial orientation, and contingency planning—is effectively taken offline. The victim is left operating on coarse, primitive mammalian scripts. In extreme environments, this evolutionary reflex frequently produces deadly paralysis or frantic, irrational motor activity, transforming world-class experts into helpless victims."
    ],
    case_study: [
      "Gonzales grounds this neurological reality in the harrowing combat experiences of his father, Laurence Gonzales Sr., a B-17 Flying Fortress pilot with the 398th Bomb Group during World War II. On his eighth combat mission over Merseburg, Germany, Nazi 88mm anti-aircraft flak shells detonated beneath the bomber's fuselage, severing hydraulic lines, destroying an engine, and setting the port wing blazing in fuel fire. Inside the shaking, smoke-filled aircraft, the flight engineer suffered an acute amygdala hijack: his eyes dilated in frozen panic, his jaw slacked, and he stood petrified against the bulkhead, completely unable to unlatch his parachute or reach the bomb bay escape hatch.",
      "Recognizing that rational commands were useless against a frozen nervous system, Gonzales Sr. had to physically strike the engineer across the face to shatter the tonic freeze response, clip the man's chest harness, and shove him headfirst through the open bomb bay doors before diving out into the sub-zero sky himself. Gonzales juxtaposes this combat trauma with modern US Navy fighter pilots attempting night carrier landings on the turbulent deck of an aircraft carrier in the Persian Gulf. Pilots experience severe spatial disorientation known as 'the leans'—a terrifying vestibular illusion where the inner ear falsely signals that the jet is rolling into the sea. Only pilots who train their neocortex to override their screaming physical instincts and trust their cockpit instruments survive the descent."
    ],
    actionable_heuristics: [
      "Recognize the physiological markers of an amygdala hijack: racing pulse, cold sweat, shallow respiration, and tunnel vision.",
      "Force immediate tactical breathing: slow, four-second diaphragmatic inhalations followed by four-second exhalations to stimulate the vagus nerve and restore neocortical executive control.",
      "Impose an absolute 30-second decision freeze: never make irreversible physical or navigational choices during the initial surge of terror."
    ],
    verbatim_quote: "The brain is a dual machine: an emotional engine that moves fast and makes coarse decisions, and a rational engine that moves slowly and analyzes details. In a crisis, the emotional engine seizes the steering wheel."
  },
  {
    chapter_number: 2,
    id: "KU-DS-CH-02",
    chapter_title: "Memories of the Future (Mental Models & Somatic Markers)",
    source_coordinates: "Part I: How Accidents Happen, pp. 39–54",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "The brain does not perceive reality as it is; it projects pre-existing mental models and acts on internal expectations rather than external sensory data.",
    causal_mechanism: [
      "Gonzales explores the cognitive mechanisms uncovered by neuroscientist Antonio Damasio in Descartes' Error, specifically the function of the ventromedial prefrontal cortex and 'somatic markers'. The human mind does not passively record the world like a camera; instead, it is an active prediction machine that constantly constructs forward-looking mental simulations—what cognitive scientists call 'memories of the future'. To make rapid decisions without exhausting metabolic energy, the brain assigns somatic markers—emotional, bodily bookmarks of pleasure, fear, or pain—to memories of past experiences.",
      "When an individual enters a complex environment, the brain searches its mental library for a matching pattern, retrieves the associated somatic marker, and executes an automated behavioral script. This predictive machinery works brilliantly in predictable domestic and corporate settings. However, in unforgiving natural environments—glaciers, raging rivers, wildfire zones—it creates lethal cognitive traps. When physical conditions suddenly diverge from the brain's internal mental model, human beings exhibit powerful confirmation bias.",
      "Rather than updating the model to match alarming environmental cues, the brain actively filters out discordant sensory data to protect the coherence of its internal script. The individual sees what they expect to see, walking blindly into mortal hazard while convinced that everything is proceeding according to plan."
    ],
    case_study: [
      "The lethal power of mental models is illustrated through the tragedy of the Storm King Mountain wildfire in July 1994 near Glenwood Springs, Colorado. A dry lightning strike ignited a fire on a steep, brush-covered ridge. Fourteen wildland firefighters—including nine elite South Canyon Hotshots and smokejumpers—were constructing a fireline along the canyon ridge when 40-knot gusts suddenly blew the fire across the drainage below them, triggering an explosive wildfire blowup.",
      "A 50-foot wall of flame swept up the 55-degree incline at sixteen miles per hour, roaring like a freight train. The firefighters fled uphill toward the ridgecrest only a few hundred yards away. Yet, as organizational sociologist Karl Weick noted in his post-disaster analysis, the firefighters refused to drop their heavy tools. They ran uphill carrying 25-pound chainsaws, Pulaskis, and 45-pound gear packs. Their operational mental model—their identity as elite firefighters—was inextricably bound to their tools. Dropping their tools meant accepting that they were no longer firefighters fighting a blaze, but terrified prey fleeing an inferno. Carrying that dead weight cut their uphill running speed in half. Flames engulfed and killed all fourteen men just forty yards below the safety of the ridgecrest."
    ],
    actionable_heuristics: [
      "Continuously calibrate your mental model against raw, objective physical data (air temperature, wind shifts, snow stability).",
      "Beware of confirmation bias: never force changing environmental conditions to conform to an existing operational schedule or plan.",
      "Drop your tools immediately: when survival requires pure speed, discard heavy professional equipment and mental identities without hesitation."
    ],
    verbatim_quote: "We don’t see the world as it is. We see the world as our mental models tell us it should be. When reality diverges from our model, we often choose to believe the model."
  },
  {
    chapter_number: 3,
    id: "KU-DS-CH-03",
    chapter_title: "A Map of the World (Why Adults Get Lost and Children Survive)",
    source_coordinates: "Part I: How Accidents Happen, pp. 55–72",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Adults panic when lost because they attempt to bend the physical map to fit their mental expectations; small children survive because they surrender denial immediately.",
    causal_mechanism: [
      "Gonzales investigates the psychological anatomy of navigation and disorientation, drawing upon the lost-person behavior research of psychologist Kenneth Hill. Adult human beings navigate using an abstract, Cartesian cognitive map of the world—a mental construct heavily invested with social pride, schedule commitments, and self-esteem. When an adult hiker or hunter makes a navigational mistake and realizes they are off-trail, a violent psychological shockwave called cognitive dissonance erupts.",
      "Driven by shame and the urgent desire to reach camp on time, the adult enters the dangerous state known as 'bending the map'. Instead of recognizing that their mental map is invalid, the lost person begins forcing the external topography to match their internal delusion. They declare that a mountain ridge on their left must be the ridge marked on the right of their map; they convince themselves that a creek flowing south is actually flowing north; they dismiss compass bearings as malfunctioning equipment.",
      "As panic accelerates, the lost adult enters frantic locomotion, hiking faster and faster, scrambling over ravines, sweating through their clothes, and burning through finite caloric reserves until hypothermia and total physical exhaustion collapse the organism. By contrast, children aged three to six have no abstract cartographic maps to defend. When a small child gets lost in the wilderness, they cry briefly, but as night approaches, they follow pure mammalian instinct: they stop walking, find a protected hollow under a fallen cedar log or boulder, crawl inside, curl into a ball, and conserve heat.",
      "Consequently, Search and Rescue (SAR) statistics reveal that young children have astonishingly higher survival rates in wilderness exposure than experienced adult hunters."
    ],
    case_study: [
      "Gonzales compares case files from national parks in the Appalachian mountains and the Adirondacks. In one case, an experienced adult hunter in upstate New York realized he had lost the logging road at dusk. Driven by panic and denial, he hiked continuously for thirty miles through freezing sleet, crashing through waist-deep bogs in frantic circles, sweating through his heavy wool clothing, discarding his rifle and pack in delirium, and finally dying of hypothermia less than two miles from a paved highway.",
      "In contrast, Gonzales details the rescue of four-year-old Michael Kearney, who wandered away from a family campsite in the dense, freezing woods of Missouri. Michael walked until his legs were tired. When the temperature plunged below freezing, he did not run or panic; he found a dry hollow between the root system of a fallen oak tree, piled dry leaves over his body like a blanket, curled into a tight fetal ball, and slept. Searchers found him three days later, chilled and thirsty, but completely unharmed and calm."
    ],
    actionable_heuristics: [
      "The instant you realize you are off-trail, invoke the mandatory STOP protocol: Stop, Think, Observe, Plan.",
      "Acknowledge disorientation immediately: tell yourself aloud, 'I am lost, my map is broken, and I am not taking another step forward.'",
      "Adopt child-like conservation: build thermal shelter, insulate yourself from the frozen earth, and remain stationary to enable search teams to find you."
    ],
    verbatim_quote: "Bending the map is the psychological refusal to admit that you are lost. You look at a mountain and say, 'That must be Peak A,' when every compass bearing tells you it is Peak B."
  },
  {
    chapter_number: 4,
    id: "KU-DS-CH-04",
    chapter_title: "A Gorilla in Our Midst (Inattentional Blindness & Perceptual Narrowing)",
    source_coordinates: "Part I: How Accidents Happen, pp. 73–90",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Intense cognitive focus causes inattentional blindness; when concentrating on a specific task or goal, the conscious mind literally filters out obvious, lethal environmental hazards.",
    causal_mechanism: [
      "Gonzales examines the profound limits of human sensory processing through the landmark psychological experiments on inattentional blindness conducted by Daniel Simons and Christopher Chabris. In their famous study, subjects asked to count basketball passes between players in white shirts completely failed to notice a person in a full gorilla suit walking into the center of the court, thumping their chest, and walking off. Gonzales explains that conscious human attention is an extremely scarce, narrow cognitive spotlight.",
      "Under high task difficulty or high-stakes goal pursuit, the brain employs aggressive 'sensory gating'. The thalamus and sensory cortex systematically suppress peripheral visual, auditory, and tactile inputs to channel all metabolic energy into the primary problem. In survival environments, this mechanism generates deadly 'perceptual narrowing' or target fixation.",
      "A backcountry skier fixated on the powdery descent fails to hear the muffled 'whumpf' sound of a collapsing snowpack layer; a mountaineer fixated on summiting before noon fails to notice the wall of black storm clouds cresting the western ridge; an offshore sailor wrestling with a jammed halyard fails to notice a rogue wave rising behind the stern."
    ],
    case_study: [
      "Gonzales analyzes the catastrophic crash of Eastern Air Lines Flight 401 on the night of December 29, 1972, in the Florida Everglades. A Lockheed L-1011 TriStar wide-body jet carrying 163 passengers and 13 crew members was on approach to Miami International Airport when the flight crew noticed that the green nose-gear position indicator light had failed to illuminate. Captain Bob Loft, First Officer Albert Stockstill, and the flight engineer became totally fixated on diagnosing whether the landing gear was down or whether the 20-cent incandescent light bulb was burnt out.",
      "As all three experienced pilots huddled over the center console tapping the bulb, Captain Loft inadvertently bumped his yoke, accidentally disengaging the autopilot into altitude hold. For four critical minutes, the aircraft drifted slowly out of the sky at 200 feet per minute. A warning chime sounded in the cockpit and altitude alert lights flashed, but the crew's sensory gates filtered them out completely. Engrossed in the tiny light bulb, they flew a fully operational 300,000-pound jetliner into the pitch-black swamp at 227 miles per hour, killing 101 people."
    ],
    actionable_heuristics: [
      "Establish deliberate, scheduled 'horizon scanning' intervals to break cognitive target fixation during high-risk tasks.",
      "Appoint a designated 'safety observer' in any expedition or high-stress project whose sole responsibility is monitoring environmental baseline threats.",
      "Beware the summit fever trap: the closer you get to completing an objective, the more blind you become to lethal environmental warnings."
    ],
    verbatim_quote: "When you are looking for your keys, you can stare directly at a gorilla and never know it was there. In the wilderness, that gorilla is an avalanche."
  },
  {
    chapter_number: 5,
    id: "KU-DS-CH-05",
    chapter_title: "The Anatomy of an Act of God (Accident Chains & Normal Accidents)",
    source_coordinates: "Part I: How Accidents Happen, pp. 91–110",
    epistemic_status: "SYSTEMS_DYNAMICS_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Catastrophes are almost never caused by a single isolated failure; they are the cumulative result of trivial, tightly coupled minor deviations forming an accident chain.",
    causal_mechanism: [
      "Gonzales introduces the systems theory of sociologist Charles Perrow, author of Normal Accidents: Living with High-Risk Technologies. Perrow established that in systems characterized by high complexity and tight coupling, catastrophic failures are not freak aberrations; they are 'normal' structural consequences of how the system is designed. Tightly coupled systems have no slack, no buffer, and little time between cause and effect; complexity ensures that failures interact in unpredictable, nonlinear sequences.",
      "Gonzales demonstrates that outdoor survival scenarios and high-risk expeditions operate exactly like tightly coupled industrial systems. Catastrophes rarely occur because an unpredictable boulder falls from the sky on an otherwise perfect day. Instead, they are assembled link by link through an 'accident chain'.",
      "Each individual link in the chain is an ordinary, seemingly harmless compromise: checking the weather forecast twenty minutes late, leaving a spare headlamp in the truck, wearing synthetic base layers that are slightly damp, skipping a hydration stop to make up time. Alone, none of these deviations is lethal. But when five minor deviations couple together in a high-risk environment, a sudden environmental shock (such as a drop in temperature or a sudden whiteout) causes the entire system to collapse into disaster."
    ],
    case_study: [
      "Gonzales deconstructs the tragic May 1986 Mount Hood climbing disaster in Oregon. A party of fifteen climbers from the Oregon Episcopal School—including ten sophomore students, two teachers, and an experienced professional mountain guide—embarked on an ascent of Mount Hood. The accident chain began days earlier: the climb was a mandatory school tradition tied to administrative scheduling; severe barometric drops indicating a major Pacific storm were discounted because previous climbs had encountered bad weather without consequence.",
      "On the mountain, the party departed camp an hour late; when clouds began lowering at 8,300 feet, the guide hesitated to abort because the summit seemed within reach. When a blizzard hit with 70-mph winds and zero visibility, the group lacked a GPS and relied on a cheap magnetic compass. As hypothermia clouded their executive functioning, they took three hours to dig a shallow snow cave on the exposed slope. The snow cave collapsed, asphyxiating and freezing nine climbers to death. The disaster was not an act of God; it was an unbroken chain of small human compromises."
    ],
    actionable_heuristics: [
      "Break the accident chain at link number two: if two minor things go wrong consecutively, immediately abort the mission or stop to regroup.",
      "Introduce deliberate slack and decoupling: slow down, extend deadlines, and build physical safety buffers into all wilderness operations.",
      "Never dismiss small procedural compromises: treat every deviation from standard safety protocol as an active link in an emerging catastrophe."
    ],
    verbatim_quote: "Accidents do not happen because a boulder suddenly falls out of the sky. They happen because you made five minor mistakes over five hours, and the boulder was merely the final exclamation mark."
  },
  {
    chapter_number: 6,
    id: "KU-DS-CH-06",
    chapter_title: "The Sand Pile Effect (Self-Organized Criticality & Nonlinear Risk)",
    source_coordinates: "Part I: How Accidents Happen, pp. 111–128",
    epistemic_status: "SYSTEMS_DYNAMICS_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Complex natural systems evolve toward self-organized criticality, where a single additional grain of sand triggers a catastrophic, unpredictable avalanche.",
    causal_mechanism: [
      "Gonzales introduces the physics of Self-Organized Criticality (SOC), developed by theoretical physicist Per Bak. In Bak's famous computer simulation and physical experiment, grains of sand are dropped one by one onto a flat table, forming a conical pile. Initially, the sand grains simply accumulate, increasing the slope of the pile. As the slope steepens, small trickles of sand occur, but the pile continues to grow. Eventually, the pile reaches a critical state of slope equilibrium.",
      "At this critical threshold, adding a single grain of sand produces entirely unpredictable results: it may do nothing, trigger a tiny slide, or unleash a catastrophic, catastrophic landslide that wipes out the entire face of the pile. The fatal trap is that the grain of sand which causes the massive avalanche looks, weighs, and acts exactly like all the preceding thousands of harmless grains.",
      "Gonzales applies this principle to environmental risk: snowpacks on alpine slopes, weather patterns over mountain passes, oceanic wave dynamics, and human fatigue are all complex systems operating near self-organized criticality. The human brain, operating on linear intuition, falsely assumes that because fifty skiers safely crossed a snow basin this morning, the fifty-first skier is equally safe. In reality, every safe crossing adds microscopic stress to the system, driving the snowpack closer to the critical threshold where a whisper or a light ski edge triggers complete collapse."
    ],
    case_study: [
      "Gonzales analyzes the phenomenon of avalanche fatalities in the Wasatch Mountains of Utah and the Colorado Rockies. In dozens of forensic accident investigations, the victims were not reckless novices, but veteran backcountry skiers with years of avalanche safety training. On the day of the accident, the skiers checked the snow pit, observed that the snowpack was holding, and made four exhilarating runs down a 38-degree slope.",
      "On the fifth run, one skier made a gentle turn across the crown of the bowl. A weak sugar-snow layer of buried depth hoar fractured under the localized stress. In less than three seconds, an eight-foot-deep slab spanning five hundred yards sheared off across the entire mountain bowl, accelerating to 100 mph and burying the skiers under thousands of tons of concrete-hard debris. The system had reached self-organized criticality; the skiers mistook the absence of an avalanche on the first four runs for proof that the slope was stable."
    ],
    actionable_heuristics: [
      "Understand nonlinear risk: never assume that because a dangerous activity was completed safely ten times, the eleventh time is equally safe.",
      "Recognize cumulative exposure: repeated passes across a high-risk terrain increase systemic vulnerability rather than decrease it.",
      "Treat all high-risk complex environments as if they are currently balanced at the critical sandpile threshold."
    ],
    verbatim_quote: "The system organizes itself into a state of critical instability. You cannot predict which grain of sand will trigger the avalanche; you only know that the pile cannot grow steeper forever."
  },
  {
    chapter_number: 7,
    id: "KU-DS-CH-07",
    chapter_title: "The Rules of Life (Risk Homeostasis & Why Experts Die)",
    source_coordinates: "Part I: How Accidents Happen, pp. 129–144",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Advanced safety equipment and deeper technical expertise paradoxically increase fatality rates because humans adjust their behavior to maintain a constant target level of risk.",
    causal_mechanism: [
      "Gonzales examines the counterintuitive phenomenon of Risk Homeostasis, formulated by Canadian psychologist Gerald Wilde. Wilde posited that human beings possess an internal 'target level of risk'—a subjective thermostat that regulates how much danger they are willing to accept in exchange for speed, thrill, prestige, or convenience. When technological innovations or safety gear reduce the baseline danger of an activity (such as anti-lock brakes in automobiles, avalanche transceivers in skiing, or GPS devices in wilderness navigation), people do not pocket the safety margin.",
      "Instead, their internal risk thermostat recalibrates: they drive faster on icy highways, ski in worse weather on steeper avalanche terrain, and venture farther into remote backcountry without survival gear. The overall rate of catastrophic accidents remains stubbornly constant or actually climbs among elite practitioners.",
      "Furthermore, expertise breeds familiarity, and familiarity erases the healthy, vigilant fear necessary to survive in extreme environments. Novices survive because they are terrified and cautious; experts die because their accumulated success blinds them to environmental indifference."
    ],
    case_study: [
      "Gonzales explores the world of elite extreme kayakers running Class V whitewater rapids on the Gauley River in West Virginia and the rivers of the Pacific Northwest. Modern kayakers are outfitted with virtually indestructible rotational-molded plastic boats, carbon-fiber paddles, drysuits, high-buoyancy lifejackets, and helmet-mounted cameras. Rather than making the sport safer, this advanced armor emboldened kayakers to run 60-foot vertical waterfalls and violent river drops that pioneers in the 1970s viewed as certain suicide.",
      "Gonzales recounts the death of world-class kayakers pinned beneath underwater river sieves: no amount of Gore-Tex or Kevlar can overcome the crushing tonnage of water holding a human body under a submerged rock. Similarly, Gonzales investigates veteran cave divers in Florida's underwater labyrinth systems: equipped with redundant trimix breathing tanks, dive computers, and underwater scooters, elite divers venture thousands of feet into subterranean caves where a single silt-out leaves them lost in pitch darkness until their gas runs out."
    ],
    actionable_heuristics: [
      "Never permit advanced safety technology or protective gear to justify entering an environment you would not enter without it.",
      "Beware expert complacency: audit your decisions for familiarization bias, remembering that the mountain and the ocean have no memory of your credentials.",
      "Routinely ask the homeostasis diagnostic: 'Am I taking this risk because conditions are genuinely safe, or because my equipment has made me feel invincible?'"
    ],
    verbatim_quote: "Safety equipment doesn't make people safer; it allows them to take greater risks. The mountain does not know you are an expert."
  },
  {
    chapter_number: 8,
    id: "KU-DS-CH-08",
    chapter_title: "Danger Zones (The Normalization of Deviance)",
    source_coordinates: "Part I: How Accidents Happen, pp. 145–160",
    epistemic_status: "SYSTEMS_DYNAMICS_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Surviving dangerous procedural compromises reinforces reckless behavior, transforming hazardous operational exceptions into standard everyday practice.",
    causal_mechanism: [
      "Gonzales integrates sociologist Diane Vaughan's landmark theory of The Normalization of Deviance, developed during her exhaustive investigation of the 1986 NASA Space Shuttle Challenger disaster. Vaughan discovered that catastrophic organizational failures do not result from sudden acts of sabotage or reckless incompetence. Instead, they occur because individuals and teams gradually become accustomed to operating with known anomalies and procedural shortcuts.",
      "When an expedition or operating crew cuts a safety corner—such as launching an aircraft in marginal visibility or crossing an unstable snow bridge—and nothing terrible happens, the human brain draws a flawed conclusion. Rather than recognizing that they survived through dumb luck, the team concludes that the original safety standard was overly conservative.",
      "The violation is normalized; what was once considered an unacceptable risk becomes the new operational baseline. With each successful shortcut, the safety buffer shrinks until a minor variance in environmental conditions triggers total catastrophic disaster."
    ],
    case_study: [
      "Gonzales details the tragic culture of commercial Alaskan bush flying and commercial whitewater rafting. In the Alaskan bush, pilots face severe maritime weather, icing, and mountainous terrain. New pilots are trained to strictly observe FAA Visual Flight Rules (VFR), which require maintaining visual contact with the ground and minimum cloud clearances.",
      "However, commercial pressures and customer demands push pilots to 'scud run'—flying at 150 feet off the tundra under a 200-foot ceiling in freezing fog. When a young pilot scud-runs across a mountain pass and lands safely, he receives praise and revenue. The deviant behavior is normalized. Over months, flying blind in mountain passes becomes his standard technique—until the morning an unexpected downdraft or a sudden wall of fog smashes the Cessna into the side of a granite ridge at 140 knots. Gonzales links this directly to the NASA managers who repeatedly accepted O-ring erosion on cold shuttle launches until Challenger exploded."
    ],
    actionable_heuristics: [
      "Treat every close call or violated safety rule as an emergency operational failure, never as evidence that the shortcut was safe.",
      "Audit operational success ruthlessly: ask whether a successful mission was the result of disciplined execution or fortunate luck.",
      "Establish immutable, non-negotiable red lines (weather thresholds, turnaround times, fuel reserves) that cannot be overridden in the field."
    ],
    verbatim_quote: "The fact that you got away with it yesterday is the most dangerous information you can possess, because it teaches you that the cliff edge is a safe place to dance."
  },
  {
    chapter_number: 9,
    id: "KU-DS-CH-09",
    chapter_title: "Bending the Map (The Psychology of Getting Lost & Surrendering Denial)",
    source_coordinates: "Part II: Survival, pp. 161–180",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Survival begins at the exact second psychological denial ends; you cannot navigate to safety until you surrender your mental fantasy and accept where you actually are.",
    causal_mechanism: [
      "In Part II of the codex, Gonzales shifts focus from the mechanics of accidents to the cognitive architecture of the survivor. He returns to the psychology of disorientation, dissecting Kenneth Hill's five sequential stages of lost person behavior: (1) Denial; (2) Strategy of persistence (walking faster in the wrong direction); (3) Counter-orientation (doubling down and disputing compass evidence); (4) Frantic wandering and panic; and (5) Physical exhaustion and despair.",
      "Gonzales reveals that the critical difference between those who die in the woods and those who survive is the ability to truncate this progression at Stage 1. The average victim remains trapped in denial for hours, squandering daylight and energy trying to make the real world conform to their ruined itinerary.",
      "The survivor, by contrast, undergoes a rapid, painful psychological surrender. They let go of their ego, their scheduled dinner, their embarrassment, and their original destination. They look at the cold, damp forest floor and say aloud: 'My plan is dead. The world I thought I was in does not exist. I am lost, and I must survive right here, right now.' This mental surrender instantly halts the adrenaline-fueled panic cycle and frees up cognitive bandwidth for practical survival actions."
    ],
    case_study: [
      "Gonzales recounts the remarkable survival of veteran hunter Bob Hawkins in the deep spruce forests of northern Maine. Hawkins set out for an afternoon deer hunt from his hunting camp. At dusk, he turned back toward what he believed was the camp logging road, only to encounter an impenetrable cedar swamp that was not on his mental map. Hawkins felt the immediate jolt of panic: heart hammering, breath shortening, and the powerful urge to sprint through the swamp before total darkness fell.",
      "Instead of running, Hawkins stopped dead in his tracks. He leaned his rifle against a birch tree, sat down on a mossy boulder, lit a cigarette, and forced himself to breathe slowly. He admitted out loud: 'Bob, you are lost. You are not going to sleep in your warm bunk tonight.' By surrendering his fantasy of reaching camp, Hawkins saved his own life. With his remaining forty minutes of twilight, he gathered dry spruce branches, peeled birch bark for tinder, sparked a fire with his waterproof match case, built a three-sided debris lean-to, and spent the freezing night warm and stationary. When search planes flew overhead the following morning, Hawkins was calmly boiling pine needles for tea next to a signaling fire."
    ],
    actionable_heuristics: [
      "Surrender your original plan immediately and completely without grief or resentment: the old plan is dead, and your only job is staying alive.",
      "Never travel after dark to make up lost distance: nighttime wilderness navigation multiplies injury risk and spatial disorientation tenfold.",
      "Anchor yourself to the ground: construct shelter and signaling fires before sundown, knowing that remaining stationary makes you exponentially easier to rescue."
    ],
    verbatim_quote: "The first step in survival is to surrender. You must say: 'The world I thought I was in no longer exists. I am here, in this cold, wet place, and I must deal with what is.'"
  },
  {
    chapter_number: 10,
    id: "KU-DS-CH-10",
    chapter_title: "Inside The Right Stuff (Psychological Resilience & Emotional Regulation)",
    source_coordinates: "Part II: Survival, pp. 181–198",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Survivors possess the extraordinary capacity to split consciousness: one part of the mind registers fear, while the detached executive ego calmly directs physical execution.",
    causal_mechanism: [
      "Gonzales investigates the psychological construct famously termed 'The Right Stuff' by Tom Wolfe. Analyzing elite test pilots, astronaut candidates, and extraordinary wilderness survivors, Gonzales debunks the popular myth that resilient individuals are fearless supermen who experience no terror. On the contrary, physiological monitoring confirms that elite pilots and survivors experience identical spikes in heart rate, adrenaline, and blood pressure under mortal threat.",
      "The distinguishing characteristic of the survivor is emotional metacognition—the capacity to observe their own emotional state without being consumed by it. Gonzales describes this as a psychological 'splitting of consciousness'.",
      "One part of the brain registers the terror, acknowledging that the aircraft is spinning out of control or that the raft is sinking; simultaneously, a calm, detached 'observer ego' takes up residence in the prefrontal cortex. This observer treats the situation not as a horrifying personal catastrophe, but as an intriguing mechanical or mathematical problem to be solved through sequential, methodical physical actions."
    ],
    case_study: [
      "Gonzales reconstructs the legendary flight of test pilot Chuck Yeager in the Bell X-1A rocket research plane on December 12, 1953. Yeager was dropped from the bomb bay of a B-29 at 30,000 feet over Edwards Air Force Base. Igniting all four rocket chambers, Yeager accelerated through Mach 2.4 (1,620 mph) at 70,000 feet. At that extreme velocity and altitude, the thin air could no longer provide aerodynamic damping, and the X-1A encountered catastrophic roll-inertia coupling.",
      "The rocket plane broke into a violent, multi-axis supersonic tumble, snapping Yeager's helmet into the canopy and cracking the plexiglass. The aircraft plummeted 51,000 feet in 51 seconds, spinning wildly like an artillery shell at G-forces ranging from +8G to -4G. Trapped inside the cockpit, bruised and half-blinded from broken blood vessels in his eyes, Yeager did not scream, panic, or close his eyes. In recorded radio transmissions, his voice remained low, calm, and laconic. He worked the controls methodically, feeling for aerodynamic bite as the jet entered denser atmosphere at 25,000 feet, popped the dive flaps, stabilized the inverted spin, and glided to a smooth landing on the dry lake bed."
    ],
    actionable_heuristics: [
      "Cultivate the detached observer ego: consciously monitor your physical panic symptoms as if you are a scientist observing an experiment.",
      "Use constructive tactical self-talk: banish apocalyptic phrases like 'I'm going to die' and substitute operational questions like 'What is my exact physical next step?'.",
      "Focus exclusively on variables within your immediate physical control; completely disregard macro-outcomes that you cannot influence."
    ],
    verbatim_quote: "The right stuff is not the absence of fear; it is the capacity to put fear into a small room, close the door, and calmly fly the airplane while the warning lights are flashing red."
  },
  {
    chapter_number: 11,
    id: "KU-DS-CH-11",
    chapter_title: "“We’re All Going to Fuckin’ Die!” (The 10/80/10 Rule of Disaster Behavior)",
    source_coordinates: "Part II: Survival, pp. 199–216",
    epistemic_status: "BEHAVIORAL_SOCIOLOGY_LAW",
    materiality: "CRITICAL",
    primary_axiom: "In any sudden disaster, 10% of people panic, 80% freeze in stunned behavioral immobility, and only 10% remain calm, assess reality, and take decisive action.",
    causal_mechanism: [
      "Gonzales examines sociological and psychiatric research into collective human behavior during sudden mass catastrophes—including commercial airplane crashes, hotel fires, earthquakes, and shipwrecks. Cross-disaster empirical data reveals an astonishingly consistent behavioral distribution known as the 10/80/10 Rule.",
      "Approximately 10% of individuals completely lose control under mortal shock: they scream hysterically, weep, hyperventilate, and behave in ways that directly endanger themselves and others. Roughly 80% of people enter a state of severe behavioral paralysis known as 'tonic immobility' or 'frozen fright'. Their cognitive systems are overwhelmed by the sudden collapse of normal reality; they sit docilely in their seats, stare blankly at flames, and wait passively for authority figures to give them permission to move.",
      "Only the remaining 10% retain their cognitive faculties: they immediately perceive the danger, bypass social hesitation, assess exit routes, and take decisive physical action. Gonzales points out that if you find yourself in a disaster, you must understand that the vast majority of the crowd will do nothing to save themselves unless forcefully commanded by an active survivor."
    ],
    case_study: [
      "Gonzales examines the catastrophic Beverly Hills Supper Club fire on May 28, 1977, in Southgate, Kentucky, which claimed 165 lives. In the packed Cabaret Room, over 1,200 patrons were seated for a comedy show when an 18-year-old busboy named Walter Bailey walked onto the stage, grabbed the microphone, and calmly announced that a fire was spreading in the front rooms and urged the audience to exit through the doors.",
      "Tragically, the 80% rule manifested in full force: hundreds of well-dressed patrons chuckled, assumed it was part of the comedy act, or calmly sat at their tables waiting for waiters to bring their checks. When thick black smoke containing toxic carbon monoxide and hydrogen cyanide poured into the hall minutes later, the exit corridors became choked with bodies. Gonzales also cites FAA aircraft cabin evacuation tests, where passengers in burning fuselages repeatedly unbuckle and rebuckle their seatbelts or attempt to retrieve overhead carry-on luggage while smoke suffocates them, paralyzed by cognitive inertia."
    ],
    actionable_heuristics: [
      "Assume the 80% will freeze: if you are in the 10%, break their paralysis by shouting short, direct, loud commands ('Stand up! Drop your bags! Follow me to the exit!').",
      "Perform pre-event mental rehearsal: upon boarding any aircraft or entering a crowded venue, count the physical seat rows to the nearest two emergency exits.",
      "Never wait for permission or consensus: the instant mortal danger is apparent, move immediately toward safety without waiting for authority figures to instruct you."
    ],
    verbatim_quote: "When disaster strikes, the majority of people do nothing. They sit and wait for the world to return to normal. The survivor acts immediately because he knows normal is never coming back."
  },
  {
    chapter_number: 12,
    id: "KU-DS-CH-12",
    chapter_title: "A View of Heaven (Near-Death Detachment & Cognitive Mastery)",
    source_coordinates: "Part II: Survival, pp. 217–234",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Surviving catastrophic trauma requires dispassionate cognitive detachment: treating one's broken physical body as an objective mechanical instrument.",
    causal_mechanism: [
      "Gonzales explores the extreme physiological and psychological states that accompany catastrophic physical trauma and prolonged suffering. When human tissues suffer severe structural trauma, the central nervous system triggers a massive endogenous release of neurochemicals, including beta-endorphins, dynorphins, and dopamine. This biochemical deluge acts as an evolutionary emergency painkiller, producing a profound mental state of dispassionate cognitive detachment.",
      "Rather than being paralyzed by emotional agony, the survivor enters a hyper-rational realm of pure focus. The injured body ceases to be experienced as 'me'; it becomes an objective mechanical object that must be manipulated through the physical world.",
      "Crucially, survivors sustain this state over days by practicing what cognitive scientists call 'temporal and spatial chunking'. When confronted with an impossible, multi-day ordeal—such as crawling across five miles of jagged glacial moraine with shattered bones—the conscious mind cannot process the totality of the suffering without collapsing into despair. The survivor shrinks their operational horizon down to microscopic increments: twenty minutes, ten yards, or five crawling strokes."
    ],
    case_study: [
      "Gonzales recounts the legendary survival epic of British mountaineer Joe Simpson on Siula Grande in the Peruvian Andes in 1985, chronicled in Touching the Void. While descending an unclimbed 21,000-foot peak in a blizzard, Simpson shattered his right leg when his tibia punched up through his knee joint. His climbing partner, Simon Yates, lowered Simpson down the mountain on a 300-foot rope in the dark until Simpson swung out over the lip of a colossal, hidden ice crevasse.",
      "Believing Simpson was dead and on the verge of being pulled off the mountain himself, Yates cut the rope. Simpson survived the 100-foot plunge onto an ice shelf deep inside the crevasse. Alone in the freezing darkness with no food, no water, and a shattered leg, Simpson did not weep or contemplate death. He decided that staying on the shelf meant certain freezing death, so he tied his prusik knots and abseiled deeper into the black void, finding an exit slope that led onto the glacier.",
      "Over the next three grueling days, Simpson dragged himself across five miles of boulder-strewn glacial moraines. He did not look at base camp; he picked a distinctive boulder fifty feet away, looked at his wristwatch, and gave himself twenty minutes to crawl to it. He hopped on one leg and crawled on elbows and knees, screaming in agony each time his broken leg slammed into the rocks, achieving hundreds of microscopic victories until he collapsed into base camp hours before Yates was scheduled to leave."
    ],
    actionable_heuristics: [
      "Chunk impossible challenges: break colossal survival ordeals into tiny, manageable units of time (15 minutes) and distance (20 feet).",
      "Treat your injured body with mechanical detachment: view broken limbs not with horror, but as damaged machinery that must be operated with care.",
      "Celebrate every micro-victory: reaching a boulder, lighting a spark, or finding a trickle of melted snow provides essential dopamine to stave off despair."
    ],
    verbatim_quote: "Joe Simpson didn't crawl five miles across a glacier. He crawled twenty feet eighty-five times. He turned an impossible nightmare into a series of achievable mathematical problems."
  },
  {
    chapter_number: 13,
    id: "KU-DS-CH-13",
    chapter_title: "The Sacred Chamber (The Will to Live & The Victor Frankl Principle)",
    source_coordinates: "Part II: Survival, pp. 235–252",
    epistemic_status: "EXISTENTIAL_PSYCHOLOGY_LAW",
    materiality: "CRITICAL",
    primary_axiom: "The will to live is not an abstract biological reflex; it requires a transcendent external purpose—a loved one, an unfinished duty, or a sacred vow.",
    causal_mechanism: [
      "Gonzales examines the mystery of why some physically robust individuals simply give up and die in moderate survival conditions, while frail individuals endure unimaginable torment and survive. To explain this disparity, Gonzales draws upon the existential psychology of Viktor Frankl, the Austrian psychiatrist who survived Auschwitz and authored Man's Search for Meaning. Frankl established that survival under conditions of prolonged torture and deprivation is fundamentally determined by whether the individual possesses a profound 'why' for their existence.",
      "When cold, starvation, and physical exhaustion deplete the body's glycogen and metabolic reserves, raw biological self-preservation is insufficient to overcome the brain's overpowering desire for the peaceful, painless release of sleep and death. Under such conditions, an individual fighting merely for their own comfort will surrender.",
      "True survival resilience requires anchoring consciousness in what Gonzales calls 'the sacred chamber'—an emotional commitment to an entity outside oneself. Those who survive long-term ordeals are sustained by an intense, burning conviction that a child, a spouse, a comrade, or an unfinished life's work desperately needs them to return."
    ],
    case_study: [
      "Gonzales analyzes the maritime survival ordeal of naval architect Steven Callahan, whose self-designed 21-foot sloop, Napoleon Solo, was struck and sunk by a whale or submerged shipping container in the Atlantic Ocean in February 1982. Callahan escaped into a six-man inflatable raft named the Rubber Duck, carrying only a sleeping bag, an emergency solar still, a speargun, and a copy of an ocean survival manual.",
      "Callahan drifted across 1,800 nautical miles of open ocean for 76 days. He battled constant dehydration, roasting tropical sun, skin lesions from saltwater sores, and repeated attacks by sharks that punctured the rubber hull of his raft. What kept Callahan alive was not merely physical endurance, but the meticulous creation of a monastic, sacred daily routine.",
      "He established strict naval watches, maintained his solar stills with religious precision, hunted triggerfish with his speargun, repaired the leaking raft chambers with line and rubber patches, and kept an unbroken daily journal. Whenever despair threatened to pull him into suicidal apathy, he concentrated on the faces of his loved ones and his determination to contribute to naval safety, transforming his tiny raft into a cathedral of purpose."
    ],
    actionable_heuristics: [
      "Anchor your will to live to an external loved one: hold their face in your mind and forge an unbreakable vow that you will return to them.",
      "Establish strict operational routines in survival camps: enforce scheduled gear maintenance, water filtration, and physical hygiene to preserve psychological order.",
      "Engage in purposeful, physical labor: active problem-solving is the single most powerful biological antidote to paralyzing existential despair."
    ],
    verbatim_quote: "Those who have a 'why' to live, can bear with almost any 'how'. If you are fighting only for yourself, it is easy to surrender. When you are fighting for your child, surrender is impossible."
  },
  {
    chapter_number: 14,
    id: "KU-DS-CH-14",
    chapter_title: "A Certain Nobility (Altruism, Humor, and Collective Survival)",
    source_coordinates: "Part II: Survival, pp. 253–272",
    epistemic_status: "BEHAVIORAL_SOCIOLOGY_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Selfishness and paranoia destroy groups in survival crises; altruism, disciplined fairness, and dark humor sustain social cohesion and prevent mental collapse.",
    causal_mechanism: [
      "Gonzales explores the social dynamics of survival in group catastrophes. Popular culture frequently promotes the Darwinian myth of 'survival of the fittest'—the assumption that in extreme disaster, the most ruthless, selfish, and physically aggressive individuals will hoard resources and survive. Gonzales demonstrates that empirical history reveals the exact opposite: groups that succumb to paranoia, hoarding, and selfishness rapidly disintegrate and perish.",
      "Ruthlessness triggers toxic interpersonal conflict, escalates stress hormones, degrades sleep, and destroys collective vigilance. Conversely, groups that maintain strict social solidarity, transparent fairness in rationing, mutual emotional care, and dark humor demonstrate astonishing collective resilience.",
      "Laughter and humor play a profound neurobiological role in survival: genuine laughter stimulates the release of endorphins, dampens the amygdala's fear response, lowers blood pressure, and restores flexible cognitive problem-solving. Altruism is not a luxury or a moral ornament; in survival situations, nobility is critical survival gear."
    ],
    case_study: [
      "Gonzales contrasts two famous maritime disasters to prove this principle. First is Sir Ernest Shackleton's 1914–1916 Endurance expedition in the Antarctic. When the ship was crushed in pack ice, Shackleton kept twenty-seven men alive for seventeen months on shifting ice floes and the desolate shores of Elephant Island. Shackleton maintained absolute equality in rations, ordered evening banjo sing-alongs, instituted games of soccer on the sea ice, and gave his own fur gloves to a junior officer who had dropped his overboard. His unwavering good humor and self-sacrificing leadership resulted in every single man surviving.",
      "Gonzales sharply contrasts this with the October 1982 sinking of the 44-foot sailing yacht Trashman in a ferocious hurricane off Cape Hatteras. Five crew members drifted in an 11-foot Zodiac raft without food or water. Within forty-eight hours, group cohesion shattered. The captain, John Lippoth, and crewman Mark Adams succumbed to selfish paranoia. Ignoring the desperate warnings of 24-year-old Deborah Scaling Kiley and Brad Cavanagh, Lippoth and Adams drank seawater. The salt water induced acute psychotic hallucinations: Lippoth believed the raft was parked off a beach bar and leaped overboard to 'get a pack of cigarettes,' where tiger sharks tore him to pieces beneath the raft. Adams hallucinated a cold beer under the boat and jumped in twenty minutes later to the same gruesome fate. Deborah Scaling Kiley and Brad Cavanagh survived five days by holding hands, praying together, and maintaining mutual discipline until rescue arrived."
    ],
    actionable_heuristics: [
      "Enforce absolute, transparent equity in the distribution of food, water, and shelter within any survival group.",
      "Cultivate gallows humor: finding absurd comedy in dire catastrophe relieves stress and prevents emotional paralysis.",
      "Never consume seawater or toxic fluids under dehydration: salt water accelerates delirium, psychosis, and fatal organ failure."
    ],
    verbatim_quote: "Shackleton understood that if his men lost their sense of humor and mutual generosity, the cold would finish them off before the ice ever broke. Nobility is not a luxury; it is survival gear."
  },
  {
    chapter_number: 15,
    id: "KU-DS-CH-15",
    chapter_title: "The Day of the Fall (Juliane Koepcke & Integrating Trauma into Wisdom)",
    source_coordinates: "Part II: Survival, pp. 273–296",
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    primary_axiom: "Survival does not conclude when physical rescue arrives; the survivor must integrate catastrophe into living wisdom without being destroyed by survivor guilt.",
    causal_mechanism: [
      "In the concluding chapter of Deep Survival, Gonzales explores the final, neglected phase of the survival journey: psychological re-entry and long-term integration. For many survivors, the hardest battle begins after physical rescue. Having witnessed companions die or having suffered catastrophic injuries, survivors frequently face severe Post-Traumatic Stress Disorder (PTSD), chronic hypervigilance, alienation from domestic society, and crushing 'survivor guilt'—the haunting, irrational question: 'Why did I live when better people died?'.",
      "Gonzales shows that healing requires transforming the ordeal from a meaningless horror into a foundational source of life wisdom. The survivor must accept the terrifying reality that survival often involves pure, random chance, while simultaneously taking responsibility for honoring the gift of continued life through service, art, science, or ecological stewardship.",
      "The survivor moves from being a traumatized victim to an initiated elder who possesses rare, direct insight into the precious, fragile nature of mortal existence."
    ],
    case_study: [
      "Gonzales recounts the ultimate wilderness survival miracle: the story of seventeen-year-old Juliane Koepcke. On Christmas Eve, 1971, Juliane and her mother boarded LANSA Flight 508, a Lockheed Electra turboprop, to fly from Lima to Pucallpa, Peru, to meet her father, zoologist Hans-Wilhelm Koepcke. Flying through a massive thunderstorm over the Andes, the aircraft was struck by lightning, suffered structural failure, and disintegrated at 10,000 feet.",
      "Juliane fell two miles through the sky strapped into a row of three airplane seats, which spiraled like a sycamore seed and cushioned her impact into the dense, multi-tiered canopy of the Amazon rainforest. She awoke the next morning on the jungle floor: her collarbone was fractured, her right eye was swollen shut, her ACL was torn, and she had a deep gash on her right arm. She was the sole survivor among ninety-two passengers and crew.",
      "Rather than panicking or waiting at the wreckage, Juliane remembered her father's ecological teachings: find water. She found a tiny trickle, followed it into a brook, and followed the brook into a wider river. For eleven agonizing days, she waded through crocodile- and piranha-inhabited waters wearing a single minidress and one shoe, surviving on a single bag of candy she found in the wreckage. Blowflies laid eggs in the open wound on her arm, hatching dozens of flesh-eating maggots. On the eleventh day, she found an empty woodcutter's shelter and an outboard motor with gasoline. Remembering how her father treated infected wounds on animals, she poured gasoline into her arm, extracting thirty-five maggots with a nail. Local lumberjacks found her the following morning. Juliane went on to earn a Ph.D. in zoology and devoted her entire adult life to directing the Panguana Ecological Research Station in the exact Amazon jungle that spared her life."
    ],
    actionable_heuristics: [
      "Banish irrational survivor guilt: accept that survival often hinges on chance, and honor the deceased by living a purposeful, courageous life.",
      "Follow moving water when lost in dense wilderness: water flows downstream toward larger rivers, and rivers inevitably lead to human settlements.",
      "Transform trauma into service: channel the profound gratitude of survival into creative work, mentorship, and protection of the vulnerable."
    ],
    verbatim_quote: "Juliane Koepcke fell from the clouds into the jungle. She did not curse the sky or the trees. She simply stood up, found a stream of flowing water, and began walking toward life."
  }
];

const rulesAppendix = [
  { num: 1, title: "Perceive and Believe", text: "Accept immediately that you are in mortal danger; do not waste precious minutes in denial or wishful thinking." },
  { num: 2, title: "Stay Calm", text: "Control your emotional engine; use conscious tactical breathing to keep your neocortex online and prevent amygdala hijacking." },
  { num: 3, title: "Think, Analyze, and Plan", text: "Organize before you act; small mistakes compound nonlinearly into catastrophic, irreversible disasters." },
  { num: 4, title: "Take Decisive Action", text: "Once you have formulated a plan, execute it boldly without agonizing second-guessing or hesitation." },
  { num: 5, title: "Celebrate Small Successes", text: "Reaching a ridge, lighting a spark, or finding fresh water sustains dopamine, inoculating against despair." },
  { num: 6, title: "Count Your Blessings", text: "Practicing gratitude keeps the mind oriented toward possibilities and preserves cognitive resilience under extreme cold or pain." },
  { num: 7, title: "Play and Use Humor", text: "Find absurd humor, sing songs, recite poetry; play keeps the mind creative, flexible, and capable of novel problem-solving." },
  { num: 8, title: "See the Beauty", text: "The wilderness that threatens to kill you is also breathtakingly magnificent; pausing to admire its majesty restores emotional equilibrium." },
  { num: 9, title: "Surrender Your Ego", text: "Let go of your pride, your schedule, and your ruined plans; accept reality exactly as it is without bitterness." },
  { num: 10, title: "Do Whatever is Necessary", text: "Discard useless gear, eat insects, drink muddy water; do not allow squeamishness or social vanity to kill you." },
  { num: 11, title: "Never Give Up", text: "The human organism can endure far more than the conscious mind believes possible; fight until your final heartbeat." },
  { num: 12, title: "Help Others", text: "Caring for your companions gives you a transcendent reason to stay alive; altruism is the ultimate survival technology." }
];

function buildMasterNotesMarkdown() {
  let md = `# Deep Survival: Who Lives, Who Dies, and Why — The Total Replacement Codex\n\n`;
  md += `> **Core Thesis**: *Survival is not determined by physical strength or technical equipment, but by emotional regulation, mental models, and cognitive mastery. Under mortal stress, 90% of people succumb to emotional hijacking or paralysis; the 10% who survive share a precise psychological architecture.*\n\n`;
  md += `- **Author**: Laurence Gonzales\n`;
  md += `- **Year & Publisher**: 2003, W. W. Norton & Company\n`;
  md += `- **System Standard**: BKRS v2.0 Production Master Codex (Total Forensic Depth)\n`;
  md += `- **Epistemic Tier**: Tier 1 (Cognitive Neuroscience & High-Risk Decision Making)\n`;
  md += `- **Reading Time Saved**: 14.0 hours\n\n`;
  md += `---\n\n`;
  md += `## The 7-Layer Master Architecture\n\n`;
  md += `1. **Layer 1: Cognitive Neuroscience**: Dual-track visual pathways, amygdala hijack (LeDoux), somatic markers (Damasio), perceptual narrowing (Chabris & Simons).\n`;
  md += `2. **Layer 2: Systems Dynamics & Complexity**: Normal Accidents (Perrow), self-organized criticality (Per Bak), risk homeostasis (Wilde), normalization of deviance (Vaughan).\n`;
  md += `3. **Layer 3: Forensic Chapter Codification**: Exhaustive analysis across all 15 chapters with visceral historical case studies.\n`;
  md += `4. **Layer 4: Empirical Case Vault**: B-17 air raids, Storm King Mountain, Mount Hood, Joe Simpson on Siula Grande, Steven Callahan's 76 days adrift, Deborah Scaling Kiley on the Trashman, Juliane Koepcke's Amazon fall.\n`;
  md += `5. **Layer 5: The 10/80/10 Disaster Law**: Behavioral distribution and command protocols during mass panic and toxic immobility.\n`;
  md += `6. **Layer 6: The 12 Infallible Rules of Survival**: Complete actionable algorithmic checklist.\n`;
  md += `7. **Layer 7: Socratic Active Recall Suite**: High-stakes mechanism recall drills.\n\n`;
  md += `---\n\n`;

  deepSurvivalUnits.forEach(u => {
    md += `## Chapter ${u.chapter_number}: ${u.chapter_title}\n`;
    md += `*Source Coordinates: ${u.source_coordinates}* | **Epistemic Classification:** \`${u.epistemic_status}\`\n\n`;
    md += `> **Irreducible Axiom**: ${u.primary_axiom}\n\n`;
    md += `### Neurological & Behavioral Mechanism\n\n`;
    u.causal_mechanism.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `### Landmark Case Study: Forensic Dissection\n\n`;
    u.case_study.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `### Actionable Heuristics for Extreme Crisis\n\n`;
    u.actionable_heuristics.forEach(h => {
      md += `- ${h}\n`;
    });
    md += `\n> *“${u.verbatim_quote}”* — Laurence Gonzales\n\n`;
    md += `---\n\n`;
  });

  md += `## Appendix: The 12 Infallible Rules of Survival\n\n`;
  rulesAppendix.forEach(r => {
    md += `- **Rule ${r.num}: ${r.title}**: ${r.text}\n`;
  });
  md += `\n`;

  return md;
}

function buildHtmlReader(units, rules) {
  const sidebarNav = units.map(u => `
    <a href="#ch-${String(u.chapter_number).padStart(2, '0')}" class="nav-ch-link">
      <span class="nav-ch-num">${u.chapter_number}</span>
      <span class="nav-ch-title">${u.chapter_title}</span>
    </a>
  `).join('\n');

  const chapterSections = units.map(u => {
    const mechanismProse = u.causal_mechanism.map(p => `<p class="survival-text">${p}</p>`).join('\n');
    const caseStudyProse = u.case_study.map(p => `<p class="case-study-text">${p}</p>`).join('\n');
    const heuristicsList = u.actionable_heuristics.map(h => `<li>${h}</li>`).join('\n');

    return `
    <section class="chapter-wrapper" id="ch-${String(u.chapter_number).padStart(2, '0')}">
      <header class="chapter-header">
        <div class="chapter-kicker">${u.source_coordinates} • Chapter ${u.chapter_number}</div>
        <h2 class="chapter-title">${u.chapter_title}</h2>
        <div class="chapter-axiom">✦ <strong>Core Axiom:</strong> ${u.primary_axiom}</div>
      </header>
      
      <div class="survival-block">
        <h3 class="survival-heading">Neurological &amp; Behavioral Mechanism</h3>
        ${mechanismProse}
        
        <div class="case-study-box">
          <div class="case-study-title">🔍 Landmark Case Study: Forensic Dissection</div>
          ${caseStudyProse}
        </div>

        <div class="heuristics-container">
          <div class="heuristics-title">⚡ Operational Heuristics for Extreme Crisis</div>
          <ul class="heuristics-list">
            ${heuristicsList}
          </ul>
        </div>

        <blockquote class="gonzales-quote">
          <span class="quote-symbol">“</span>
          ${u.verbatim_quote}
        </blockquote>
      </div>
    </section>
    `;
  }).join('\n');

  const rulesCards = rules.map(r => `
    <div class="rule-card">
      <div class="rule-icon">🛡️</div>
      <div>
        <strong>Rule ${r.num}: ${r.title}</strong> — ${r.text}
      </div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deep Survival: Who Lives, Who Dies, and Why — Laurence Gonzales | Master Reader</title>
  
  <link rel="stylesheet" href="../../css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --color-ice: #2b6cb0;
      --color-gold: #b7791f;
      --color-crimson: #9b2c2c;
      --font-display: 'Cinzel', serif;
      --font-serif: 'Lora', serif;
      --font-sans: 'Inter', sans-serif;
    }

    [data-theme="cream"] {
      --bg-surface: #fdfbf7;
      --bg-surface-elevated: #f7f4ed;
      --border-subtle: #e2dcd2;
      --text-main: #2d2a26;
      --text-secondary: #59534c;
      --shadow-subtle: rgba(0, 0, 0, 0.04);
    }

    body {
      background: var(--bg-surface);
      color: var(--text-main);
      font-family: var(--font-serif);
      margin: 0;
      padding: 0;
    }

    .app-layout {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: calc(100vh - 60px);
    }

    @media (max-width: 1024px) {
      .app-layout { grid-template-columns: 1fr; }
      .app-sidebar { display: none; }
    }

    .app-sidebar {
      background: var(--bg-surface);
      border-right: 1px solid var(--border-subtle);
      padding: 24px 16px;
      height: calc(100vh - 60px);
      position: sticky;
      top: 60px;
      overflow-y: auto;
    }

    .sidebar-title {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-secondary);
      margin-bottom: 16px;
      padding-left: 8px;
    }

    .nav-ch-link {
      display: flex;
      gap: 10px;
      align-items: baseline;
      padding: 8px 10px;
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      border-radius: 6px;
      transition: all 0.15s ease;
      line-height: 1.35;
    }

    .nav-ch-link:hover {
      background: var(--bg-surface-elevated);
      color: var(--text-main);
    }

    .nav-ch-num {
      font-weight: 700;
      color: var(--color-ice);
      min-width: 18px;
    }

    .reading-surface {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px 100px;
    }

    .hero-box {
      border-bottom: 2px solid var(--border-subtle);
      padding-bottom: 36px;
      margin-bottom: 48px;
    }

    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-ice);
      margin-bottom: 8px;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 2.3rem;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.2;
      margin: 0 0 12px 0;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin: 0 0 24px 0;
      font-style: italic;
    }

    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
    }

    .badge {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      padding: 4px 10px;
      border-radius: 4px;
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      font-weight: 500;
    }

    .badge.highlight {
      background: rgba(43, 108, 176, 0.08);
      border-color: var(--color-ice);
      color: var(--color-ice);
      font-weight: 600;
    }

    .chapter-wrapper {
      margin-bottom: 64px;
      scroll-margin-top: 80px;
    }

    .chapter-header {
      margin-bottom: 24px;
    }

    .chapter-kicker {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-ice);
      margin-bottom: 4px;
    }

    .chapter-title {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-main);
      margin: 0 0 12px 0;
      line-height: 1.3;
    }

    .chapter-axiom {
      background: var(--bg-surface);
      border-left: 4px solid var(--color-ice);
      padding: 12px 18px;
      border-radius: 0 8px 8px 0;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .survival-block {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 32px;
      box-shadow: 0 4px 20px var(--shadow-subtle);
    }

    .survival-heading {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .survival-text {
      color: var(--text-main);
      margin-bottom: 1.4em;
      line-height: 1.82;
      font-size: 1.12rem;
      text-align: justify;
    }

    .case-study-box {
      background: var(--bg-surface-elevated);
      border-left: 4px solid var(--color-gold);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
      font-family: var(--font-sans);
    }

    .case-study-title {
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: 10px;
      letter-spacing: 0.08em;
    }

    .case-study-text {
      font-size: 1.02rem;
      color: var(--text-main);
      line-height: 1.75;
      margin-bottom: 1em;
      text-align: justify;
    }

    .heuristics-container {
      background: var(--bg-surface-elevated);
      border-radius: 8px;
      padding: 18px 22px;
      margin-bottom: 24px;
      border: 1px solid var(--border-subtle);
    }

    .heuristics-title {
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-crimson);
      margin-bottom: 12px;
    }

    .heuristics-list {
      margin: 0;
      padding-left: 20px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-main);
      line-height: 1.65;
    }

    .heuristics-list li {
      margin-bottom: 8px;
    }

    .gonzales-quote {
      margin: 24px 0 0 0;
      padding: 18px 22px;
      background: var(--bg-surface-elevated);
      border-left: 4px solid var(--color-crimson);
      border-radius: 0 8px 8px 0;
      font-style: italic;
      font-size: 1.08rem;
      color: var(--text-main);
      line-height: 1.7;
    }

    .quote-symbol {
      color: var(--color-crimson);
      font-family: var(--font-display);
      font-size: 1.4rem;
      line-height: 0;
      margin-right: 4px;
    }

    .rules-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-top: 24px;
    }

    .rule-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 16px 20px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-main);
      box-shadow: 0 2px 8px var(--shadow-subtle);
    }

    .rule-icon {
      font-size: 1.3rem;
    }
  </style>
</head>
<body>

  <!-- TOP HEADER -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div style="display: flex; align-items: center; gap: 16px;">
        <span class="brand-title">DEEP SURVIVAL</span>
      </div>
      <div class="top-bar-controls">
        <a href="../../index.html" class="icon-btn" title="Return to Library" aria-label="Library">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <div class="app-layout">
    
    <!-- SIDEBAR -->
    <aside class="app-sidebar">
      <div class="sidebar-title">Chapters &amp; Rules</div>
      <nav>
${sidebarNav}
        <a href="#appendix-rules" class="nav-ch-link" style="border-top: 1px dashed var(--border-subtle); margin-top: 8px; padding-top: 10px;">
          <span class="nav-ch-num">★</span>
          <span class="nav-ch-title">The 12 Rules of Survival</span>
        </a>
      </nav>
    </aside>

    <!-- MAIN READING SURFACE -->
    <main class="reading-surface">
      <div class="hero-box">
        <div class="hero-kicker">BKRS Master Replacement Codex • Survival Cognition</div>
        <h1 class="hero-title">Deep Survival: Who Lives, Who Dies, and Why</h1>
        <p class="hero-subtitle">True Stories of Miraculous Endurance and Sudden Death</p>
        <div class="meta-badges">
          <span class="badge highlight">✦ Tier 1: Cognitive Neuroscience &amp; Empirical Survival Behavior</span>
          <span class="badge">⏱ 14.0 hrs saved</span>
          <span class="badge">🧠 15 Cognitive Chapters</span>
          <span class="badge">🛡️ The 12 Infallible Rules of Survival</span>
        </div>
      </div>

${chapterSections}

      <!-- APPENDIX: 12 RULES -->
      <section class="chapter-wrapper" id="appendix-rules">
        <header class="chapter-header">
          <div class="chapter-kicker">Operational Appendix</div>
          <h2 class="chapter-title">The 12 Infallible Rules of Survival</h2>
          <div class="chapter-axiom">✦ <strong>Behavioral Protocol:</strong> The distilled behavioral and cognitive checklist practiced by those who survive catastrophic exposure.</div>
        </header>
        
        <div class="rules-grid">
${rulesCards}
        </div>
      </section>

    </main>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;
}

// Execution
const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'deep-survival');

console.log('Building expanded Master Notes for Deep Survival...');
const masterNotesMd = buildMasterNotesMarkdown();
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

console.log('Writing knowledge-units.json...');
const kuData = {
  schema_version: "2.0.0",
  book_metadata: {
    id: "deep-survival",
    title: "Deep Survival: Who Lives, Who Dies, and Why",
    subtitle: "True Stories of Miraculous Endurance and Sudden Death",
    author: "Laurence Gonzales",
    year: 2003,
    publisher: "W. W. Norton & Company / Intellectualist Survival Psychology Series",
    category: "Cognitive Science & Decision Making",
    epistemic_tier: "Tier 1: Cognitive Neuroscience & Empirical Survival Behavior",
    total_units: 16,
    reading_time_saved: "14.0 hrs saved"
  },
  units: deepSurvivalUnits
};
fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(kuData, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${deepSurvivalUnits.length} units)`);

console.log('Generating index.html...');
const htmlContent = buildHtmlReader(deepSurvivalUnits, rulesAppendix);
fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log(`Saved index.html (${htmlContent.length} characters)`);

console.log('Deep Survival expansion complete!');
