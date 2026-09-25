/**
 * BKRS Canonical Generator for Deep Survival (Laurence Gonzales)
 * Constructs canonical knowledge-units.json, master-notes.md, and renders the 3-view portal.
 */

const fs = require('fs');
const path = require('path');

const bookSlug = 'deep-survival';
const outputDir = path.join(__dirname, '..', '..', 'docs', 'distillations', bookSlug);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const CHAPTERS = [
  {
    part: "Part I: How Accidents Happen",
    num: 1,
    id: "ch-01",
    title: "“Look Out, Here Comes Ray Charles” (The Neurobiology of Fear)",
    pages: "pp. 19–38",
    axiom: "The amygdala reacts milliseconds before the neocortex can think; under sudden mortal threat, emotional hijacking turns rational experts into blind reactors.",
    mechanism: "The human brain has two visual and processing pathways: the fast subcortical route via the thalamus directly to the amygdala (coarse, instinctive, hyper-fast), and the slow cortical route to the neocortex (detailed, analytical, slow). When extreme stress triggers the amygdala, a cascade of adrenaline, cortisol, and norepinephrine floods the body. Heart rate spikes, peripheral vision constricts into tunnel vision, hearing is suppressed (auditory exclusion), and working memory collapses. The neocortex is effectively taken offline, leaving the person operating on raw evolutionary instincts.",
    case_study: "Fighter pilots attempting night aircraft carrier landings and mountaineers freezing on steep rock faces.",
    heuristics: [
      "Recognize the physical symptoms of an amygdala hijack: racing pulse, shallow breathing, tunnel vision.",
      "Force conscious breathing: slow diaphragmatic exhalations stimulate the vagus nerve and restore cortical control.",
      "Never make irreversible navigational or safety decisions during the first thirty seconds of terror."
    ],
    quote: "The brain is a dual machine: an emotional engine that moves fast and makes coarse decisions, and a rational engine that moves slowly and analyzes details. In a crisis, the emotional engine seizes the steering wheel."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 2,
    id: "ch-02",
    title: "Memories of the Future (Mental Models & Somatic Markers)",
    pages: "pp. 39–54",
    axiom: "The brain does not see reality as it is; it projects pre-existing mental models and acts on expectations rather than perception.",
    mechanism: "Neuroscientist Antonio Damasio established that human decision-making relies on 'somatic markers'—emotional, bodily memories associated with past experiences. When entering a situation, the brain constructs a forward-looking mental simulation ('memory of the future') and searches for familiar patterns. In high-risk environments, individuals routinely confuse their internal mental model with the external terrain, ignoring alarming contradictory data because it violates their script.",
    case_study: "Wildland firefighters on Storm King Mountain in Colorado who continued to carry their heavy chainsaws and tools while fleeing an explosive blowup, unable to drop their operational script even as flames consumed them.",
    heuristics: [
      "Constantly calibrate your mental map against raw environmental physical data.",
      "Beware of confirmation bias when conditions deteriorate: do not force the mountain to match your schedule.",
      "Be prepared to immediately discard the tools of your trade when life depends on unburdened speed."
    ],
    quote: "We don’t see the world as it is. We see the world as our mental models tell us it should be. When reality diverges from our model, we often choose to believe the model."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 3,
    id: "ch-03",
    title: "A Map of the World (Why Adults Get Lost and Children Survive)",
    pages: "pp. 55–72",
    axiom: "Adults panic when lost because they try to bend the map to match their mental expectation; small children survive because they accept reality immediately.",
    mechanism: "When an adult realizes they are off-trail, a psychological crisis called 'cognitive dissonance' ensues. Driven by shame, schedule pressure, and pride, adults accelerate their pace, attempting to force the terrain to match their mental map ('bending the map'). They misinterpret ridges, walk past obvious rivers, and run themselves into physical exhaustion and hypothermia. Young children (ages 3–6), having no abstract map of the world, simply stop when they get tired, find a hollow tree or bush, crawl inside, curl into a ball, and wait. Consequently, children have higher lost-wilderness survival rates than adult day-hikers.",
    case_study: "Search-and-rescue statistics in national parks comparing lost toddlers who hunker down with lost adult hunters who travel thirty miles in frenzied circles until fatal exhaustion.",
    heuristics: [
      "The moment you realize you are lost, apply the STOP rule: Stop, Think, Observe, Plan.",
      "Accept immediately that your mental map is broken; do not take one more step forward until you establish a baseline.",
      "Like a child, preserve energy, conserve calories, and construct immediate shelter before nightfall."
    ],
    quote: "Bending the map is the psychological refusal to admit that you are lost. You look at a mountain and say, 'That must be Peak A,' when every compass bearing tells you it is Peak B."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 4,
    id: "ch-04",
    title: "A Gorilla in Our Midst (Inattentional Blindness & Perceptual Narrowing)",
    pages: "pp. 73–90",
    axiom: "Intense cognitive focus causes inattentional blindness; when concentrating on a goal, the mind literally filters out obvious, lethal threats.",
    mechanism: "Drawing on the landmark psychological research of Christopher Chabris and Daniel Simons (the invisible gorilla experiment), Gonzales demonstrates that human attention is a scarce, finite spotlight. Under intense concentration or high-stakes goal pursuit, the brain experiences 'perceptual narrowing'. Surrounding environmental cues—such as a changing wind, cracking snowpack, or distant thunder—are actively edited out of conscious awareness by sensory gating.",
    case_study: "Commercial airline crews becoming so fixated on a burnt-out 20-cent landing gear indicator light that no one noticed the autopilot had disconnected, flying a fully functional Lockheed L-1011 into the Florida Everglades.",
    heuristics: [
      "Establish deliberate 'horizon scanning' intervals to break perceptual lock-in.",
      "Appoint a designated devil's advocate in any expedition or high-risk project whose sole job is to scan for unscripted hazards.",
      "Beware of target fixation: the closer you get to the summit, the blinder you become to storm clouds."
    ],
    quote: "When you are looking for your keys, you can stare directly at a gorilla and never know it was there. In the wilderness, that gorilla is an avalanche."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 5,
    id: "ch-05",
    title: "The Anatomy of an Act of God (Accident Chains & Normal Accidents)",
    pages: "pp. 91–110",
    axiom: "Catastrophes are almost never caused by a single dramatic failure; they are the cumulative result of trivial, tightly coupled minor deviations.",
    mechanism: "Applying Charles Perrow's theory of *Normal Accidents*, accidents in complex, tightly coupled environments are inevitable systemic properties. A catastrophe is constructed like a chain of dominos: small, seemingly harmless compromises (skipping a weather check, forgetting a spare battery, rushing by ten minutes) interact nonlinearly. When an unpredictable environmental shock occurs, the system experiences catastrophic failure.",
    case_study: "The 1995 Mount Hood climbing disaster where a group of experienced climbers, teachers, and students perished after a sequence of six minor, seemingly innocuous procedural shortcuts compounded into fatal exposure.",
    heuristics: [
      "Interrupt the accident chain early: if two minor things go wrong, abort the mission immediately.",
      "Never normalize deviance: just because you took a shortcut yesterday and survived does not mean it was safe.",
      "In tightly coupled environments, time is your enemy; decouple the system by stopping and creating slack."
    ],
    quote: "Accidents do not happen because a boulder suddenly falls out of the sky. They happen because you made five minor mistakes over five hours, and the boulder was merely the final exclamation mark."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 6,
    id: "ch-06",
    title: "The Sand Pile Effect (Self-Organized Criticality & Nonlinear Risk)",
    pages: "pp. 111–128",
    axiom: "Complex systems naturally evolve toward self-organized criticality, where a single additional grain of sand triggers a catastrophic collapse.",
    mechanism: "Drawing on physicist Per Bak's concept of self-organized criticality (the sandpile model), natural systems (snowpacks, fault lines, weather, human organizations) build internal stress grain by grain. For long periods, adding more grains causes no visible change. But at the critical state, a single tiny grain—no different from the thousands that preceded it—triggers an avalanche. In outdoor adventure and high-risk operations, people assume that because nothing went wrong on the last fifty runs, the slope is stable, unaware that the system has reached critical threshold.",
    case_study: "Expert backcountry skiers getting killed by avalanches on slopes they had skied safely hundreds of times before.",
    heuristics: [
      "Recognize that cumulative exposure increases systemic vulnerability rather than decreases it.",
      "Do not mistake the absence of an accident for the presence of safety.",
      "Treat every high-risk environment as if it is currently poised at the critical sandpile threshold."
    ],
    quote: "The system organizes itself into a state of critical instability. You cannot predict which grain of sand will trigger the avalanche; you only know that the pile cannot grow steeper forever."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 7,
    id: "ch-07",
    title: "The Rules of Life (Risk Homeostasis & Why Experts Die)",
    pages: "pp. 129–144",
    axiom: "Better safety gear and deeper expertise paradoxically increase fatality rates because humans calibrate their behavior to maintain a constant target level of risk.",
    mechanism: "Gerald Wilde's theory of *Risk Homeostasis* demonstrates that humans have an internal thermostat for risk. When technological advancements or superior equipment make an activity safer (e.g. anti-lock brakes, avalanche beacons, GPS receivers, helmets), individuals do not bank the safety margin; instead, they push deeper into danger, driving faster, skiing steeper faces, and hiking farther into storms, until their subjective probability of accident matches their baseline tolerance. Consequently, elite experts frequently die in conditions novices would never dare enter.",
    case_study: "Elite kayakers drowning in class V rapids and experienced scuba divers suffering nitrogen narcosis in extreme depth caves.",
    heuristics: [
      "Never allow technological safety gear to justify entering an environment you would not enter without it.",
      "Beware of expert complacency: expertise breeds familiarization, and familiarization erases the healthy fear necessary for vigilance.",
      "Constantly ask: 'Am I taking this risk because I am skilled, or because my gear has made me overconfident?'"
    ],
    quote: "Safety equipment doesn't make people safer; it allows them to take greater risks. The mountain does not know you are an expert."
  },
  {
    part: "Part I: How Accidents Happen",
    num: 8,
    id: "ch-08",
    title: "Danger Zones (The Normalization of Deviance)",
    pages: "pp. 145–160",
    axiom: "Surviving bad decisions reinforces reckless behavior, transforming dangerous exceptions into standard operational procedure.",
    mechanism: "Sociologist Diane Vaughan's concept of *The Normalization of Deviance* (analyzed during the NASA Challenger disaster) explains how teams gradually accept escalating risks. When an expedition crosses a dangerous crevasse or flies in marginal weather without catastrophe, the brain concludes that the margin of safety was adequate. What was once seen as an unacceptable violation becomes the new normal, until the margin evaporates completely.",
    case_study: "Commercial whitewater rafting operations gradually increasing client loads and pushing into flood-stage rapids until a catastrophic overturn drowns multiple tourists.",
    heuristics: [
      "Audit your operational standards when you succeed, not just when you fail.",
      "If you violate a safety rule and survive, treat it as an emergency close call, not a vindication of your judgment.",
      "Enforce immutable 'red lines' that cannot be negotiated away under schedule or budget pressure."
    ],
    quote: "The fact that you got away with it yesterday is the most dangerous information you can possess, because it teaches you that the cliff edge is a safe place to dance."
  },
  {
    part: "Part II: Survival",
    num: 9,
    id: "ch-09",
    title: "Bending the Map (The Psychology of Getting Lost & Surrendering Denial)",
    pages: "pp. 161–180",
    axiom: "Survival begins at the exact moment denial ends; you cannot navigate to safety until you surrender your fantasy and accept where you actually are.",
    mechanism: "Psychologist Kenneth Hill's stages of lost behavior: (1) Denial; (2) Strategy of persistence (walking faster); (3) Counter-orientation (doubling down on the wrong direction); (4) Frantic wandering and panic; (5) Despair and physical collapse. Survivors are distinct because they truncate this sequence at Step 1: they experience the shock of disorientation, immediately acknowledge their error, abandon their pride, and adapt to the current reality.",
    case_study: "The harrowing survival of a lost hunter in the Canadian wilderness who survived by methodically accepting his lostness and constructing a thermal shelter within two hours of losing the trail.",
    heuristics: [
      "Surrender your original plan without resentment: the plan is dead, survival is the only objective.",
      "Never hike after dark to make up lost ground; darkness multiplies navigational error tenfold.",
      "Make yourself findable: stay put, build signals in groups of three (three fires, three whistle blasts), and construct visible markers."
    ],
    quote: "The first step in survival is to surrender. You must say: 'The world I thought I was in no longer exists. I am here, in this cold, wet place, and I must deal with what is.'"
  },
  {
    part: "Part II: Survival",
    num: 10,
    id: "ch-10",
    title: "Inside The Right Stuff (Psychological Resilience & Emotional Regulation)",
    pages: "pp. 181–198",
    axiom: "Survivors possess an extraordinary ability to split consciousness: one part feels terror, while the executive part calmly observes and executes necessary actions.",
    mechanism: "Examining test pilots like Chuck Yeager and elite survivalists, Gonzales finds that resilience is characterized by emotional metacognition. Under mortal threat, the resilient individual experiences physiological arousal (racing heart, adrenaline), but does not interpret it as incapacitating panic. Instead, they activate a calm, detached 'observer ego' that monitors their own bodily state and directs cognitive resources to specific, immediate physical tasks.",
    case_study: "Chuck Yeager losing aerodynamic control of the X-1A rocket plane at Mach 2.4, tumbling 50,000 feet in inverted spins, yet methodically working the rudder and elevators until regaining level flight at 25,000 feet.",
    heuristics: [
      "Practice dual-track awareness: observe your own fear without becoming your fear.",
      "Use tactical self-talk: replace 'I am going to die' with 'What is my immediate physical next step?'.",
      "Focus exclusively on variables within your direct physical control; ignore all macro-outcomes."
    ],
    quote: "The right stuff is not the absence of fear; it is the capacity to put fear into a small room, close the door, and calmly fly the airplane while the warning lights are flashing red."
  },
  {
    part: "Part II: Survival",
    num: 11,
    id: "ch-11",
    title: "“We’re All Going to Fuckin’ Die!” (The 10/80/10 Rule of Disaster Behavior)",
    pages: "pp. 199–216",
    axiom: "In any sudden disaster, 10% of people panic, 80% freeze in stunned immobility, and only 10% remain calm, assess reality, and take decisive action.",
    mechanism: "Disaster research across shipwrecks, hotel fires, plane crashes, and mass casualty events reveals a consistent behavioral distribution: approximately 10% of individuals completely lose control, weep, scream, and behave counterproductively; roughly 80% enter a state of behavioral paralysis ('frozen fright' or tonic immobility), standing docilely waiting for instructions; only 10% retain their wits, quickly analyze the environment, and take immediate purposeful action to save themselves and others.",
    case_study: "Passengers on burning aircraft who remain sitting in their seats unbuckling their seatbelts over and over or reaching for carry-on luggage while smoke suffocates the cabin.",
    heuristics: [
      "Assume the 80% will not help themselves: if you are in the 10%, give loud, clear, simple, repetitive commands to break their paralysis ('Stand up! Follow me! Leave your bags!').",
      "Mental rehearsal: before taking off or entering a high-risk building, visualize your exact evacuation path.",
      "Never wait for permission from authority figures to evacuate when mortal danger is evident."
    ],
    quote: "When disaster strikes, the majority of people do nothing. They sit and wait for the world to return to normal. The survivor acts immediately because he knows normal is never coming back."
  },
  {
    part: "Part II: Survival",
    num: 12,
    id: "ch-12",
    title: "A View of Heaven (Near-Death Detachment & Cognitive Mastery)",
    pages: "pp. 217–234",
    axiom: "Surviving extreme pain and trauma requires dispassionate cognitive detachment: treating one's broken body as an objective mechanical instrument.",
    mechanism: "When physical injury is catastrophic, survivors experience an endogenous endorphin and dynorphin release that decouples intense physical agony from emotional despair. This enables a hyper-rational state of cognitive mastery: rather than dwelling on the horror of shattered bones or freezing cold, the survivor treats their damaged limbs as tools to be operated with mechanical detachment.",
    case_study: "Joe Simpson in *Touching the Void*, with a shattered right leg inside a deep Andean glacier crevasse, who methodically crawled for three days over miles of moraine rocks and glaciers by setting short time and distance goals.",
    heuristics: [
      "Break impossible distances into tiny, manageable micro-goals: 'I will crawl to that rock in the next twenty minutes.'",
      "Celebrate every microscopic victory: reaching a tree, lighting a fire, or finding clean water.",
      "Do not look up at the mountain summit; look only at the next eighteen inches of trail."
    ],
    quote: "Joe Simpson didn't crawl five miles across a glacier. He crawled twenty feet eighty-five times. He turned an impossible nightmare into a series of achievable mathematical problems."
  },
  {
    part: "Part II: Survival",
    num: 13,
    id: "ch-13",
    title: "The Sacred Chamber (The Will to Live & The Victor Frankl Principle)",
    pages: "pp. 235–252",
    axiom: "The will to live is not an abstract instinct; it requires an external purpose—a loved one, an unfinished duty, or a sacred vow.",
    mechanism: "Drawing on Viktor Frankl's insights from Auschwitz (*Man's Search for Meaning*), Gonzales finds that those who survive prolonged ordeals do not fight for themselves; they fight for someone else. When cold, starvation, and exhaustion drain all physical reserves, self-preservation alone is insufficient to override the brain's desire for the peaceful release of death. The emotional conviction that a child, a spouse, or a critical mission needs them supplies the neurochemical drive to endure unbearable suffering.",
    case_study: "Steven Callahan surviving 76 days adrift in an inflatable life raft in the Atlantic Ocean by maintaining a rigorous daily routine of solar still maintenance and focusing on returning to his family.",
    heuristics: [
      "Anchor your survival to an external loved one: visualize their face and promise yourself you will return to them.",
      "Establish strict daily routines in survival camps: clean gear, organize food rations, maintain hygiene.",
      "Never allow passive despair: active work is the greatest antidote to existential dread."
    ],
    quote: "Those who have a 'why' to live, can bear with almost any 'how'. If you are fighting only for yourself, it is easy to surrender. When you are fighting for your child, surrender is impossible."
  },
  {
    part: "Part II: Survival",
    num: 14,
    id: "ch-14",
    title: "A Certain Nobility (Altruism, Humor, and Collective Survival)",
    pages: "pp. 253–272",
    axiom: "Selfishness kills in survival situations; altruism, generosity, and dark humor sustain group morale and prevent social collapse.",
    mechanism: "In group survival ordeals, individuals who attempt to hoard rations, conserve only their own strength, or display paranoia deteriorate rapidly and destroy collective cohesion. Conversely, those who practice sacrificial altruism—giving up rations, caring for the wounded, finding absurd humor in catastrophe—stimulate positive social bonding and preserve cognitive resilience across the group.",
    case_study: "Ernest Shackleton's psychological mastery during the *Endurance* ice drift (ordering banjos played and rationing equal tobacco) versus the tragic shipwreck of the *Trashman* off Cape Hatteras (Deborah Scaling Kiley), where selfish, delusional crew members drank seawater and perished.",
    heuristics: [
      "Cultivate dark humor: laughter reduces cortisol, breaks panic cycles, and restores cognitive perspective.",
      "Prioritize the weakest member of the group: collective survival is determined by social solidarity, not individual survival of the fittest.",
      "Maintain strict equity in rationing: perceived unfairness destroys group morale faster than starvation."
    ],
    quote: "Shackleton understood that if his men lost their sense of humor and mutual generosity, the cold would finish them off before the ice ever broke. Nobility is not a luxury; it is survival gear."
  },
  {
    part: "Part II: Survival",
    num: 15,
    id: "ch-15",
    title: "The Day of the Fall (Juliane Koepcke & Integrating Trauma into Wisdom)",
    pages: "pp. 273–296",
    axiom: "Surviving a catastrophe does not end when rescue arrives; the survivor must integrate trauma into wisdom without being consumed by survivor guilt.",
    mechanism: "The final phase of survival is psychological re-entry. Survivors frequently suffer severe post-traumatic stress, hypervigilance, and debilitating survivor guilt ('Why did I live when they died?'). True recovery requires transforming the ordeal from a senseless horror into a foundational source of life wisdom and service to others.",
    case_study: "Seventeen-year-old Juliane Koepcke, the sole survivor of LANSA Flight 508, who fell two miles strapped to her seat into the Peruvian Amazon rainforest, walked eleven days through leech-infested waters with a broken collarbone, and survived to become a world-renowned biologist dedicated to conserving that same jungle.",
    heuristics: [
      "Accept that survival involves random chance: do not invent false guilt for having survived.",
      "Channel your survival into purpose: use the hard-won perspective to serve others and appreciate the preciousness of existence.",
      "Remember: survival is not an intellectual exercise; it is the art of being fully alive."
    ],
    quote: "Juliane Koepcke fell from the clouds into the jungle. She did not curse the sky or the trees. She simply stood up, found a stream of flowing water, and began walking toward life."
  }
];

// Append the 12 Rules of Survival from the Appendix
const APPENDIX_RULES = [
  "1. Perceive and believe: Accept immediately that you are in mortal danger; do not waste precious minutes in denial.",
  "2. Stay calm: Control your emotional engine; use conscious breathing to keep your neocortex online.",
  "3. Think, analyze, and plan: Organize before you act; small mistakes compound into catastrophic disasters.",
  "4. Take decisive action: Once you have a plan, execute it boldly without second-guessing.",
  "5. Celebrate your small successes: Reaching a ridge or lighting a spark sustains dopamine and morale.",
  "6. Count your blessings: Gratitude inoculates against despair and hopelessness.",
  "7. Play: Find humor, sing songs, recite poetry; play keeps the mind creative and flexible.",
  "8. See the beauty: The wilderness that threatens to kill you is also breathtakingly magnificent; admiring it restores calm.",
  "9. Surrender: Let go of your pride, your ego, and your schedule; accept reality as it is.",
  "10. Do whatever is necessary: Discard useless gear, eat insects, drink muddy water; do not allow squeamishness to kill you.",
  "11. Never give up: The human body can endure far more than the mind believes possible; fight until your final heartbeat.",
  "12. Help others: Caring for your companions gives you a profound reason to stay alive."
];

// Canonical Knowledge Units
const knowledgeUnits = [];
CHAPTERS.forEach(ch => {
  knowledgeUnits.push({
    id: `KU-DS-${ch.id.toUpperCase()}`,
    chapter_number: ch.num,
    chapter_title: ch.title,
    source_coordinates: `${ch.part}, ${ch.pages}`,
    epistemic_status: "COGNITIVE_SURVIVAL_LAW",
    materiality: "CRITICAL",
    claim: ch.mechanism,
    actionable_heuristics: ch.heuristics,
    verbatim_quote: ch.quote,
    primary_axiom: ch.axiom,
    case_study: ch.case_study
  });
});

// Add 12 rules as a unit
knowledgeUnits.push({
  id: "KU-DS-APPENDIX-RULES",
  chapter_number: 16,
  chapter_title: "Appendix: The 12 Infallible Rules of Survival",
  source_coordinates: "Appendix, pp. 297–304",
  epistemic_status: "ACTIONABLE_SURVIVAL_ALGORITHM",
  materiality: "CRITICAL",
  claim: "The 12 empirical behavioral rules shared by survivors across all recorded wilderness, maritime, aviation, and combat ordeals.",
  actionable_heuristics: APPENDIX_RULES,
  verbatim_quote: "Survival is not about heroics. It is about doing the right simple thing over and over again under intolerable stress.",
  primary_axiom: "Do not fight the mountain; survive the mountain by mastering your own mind."
});

const kuModel = {
  schema_version: "1.0.0",
  book_metadata: {
    id: bookSlug,
    title: "Deep Survival: Who Lives, Who Dies, and Why",
    subtitle: "True Stories of Miraculous Endurance and Sudden Death",
    author: "Laurence Gonzales",
    year: 2003,
    publisher: "W. W. Norton & Company / Intellectualist Survival Psychology Series",
    category: "Cognitive Science & Decision Making",
    epistemic_tier: "Tier 1: Cognitive Neuroscience & Empirical Survival Behavior",
    total_units: knowledgeUnits.length,
    reading_time_saved: "14.0 hrs saved"
  },
  units: knowledgeUnits
};

fs.writeFileSync(path.join(outputDir, 'knowledge-units.json'), JSON.stringify(kuModel, null, 2), 'utf-8');
console.log("Wrote canonical knowledge-units.json for Deep Survival with", knowledgeUnits.length, "units.");

// Generate 7-layer master-notes.md
let md = `# Deep Survival: Who Lives, Who Dies, and Why — The Total Replacement Codex\n\n`;
md += `> **Core Thesis**: *Survival is not determined by physical strength or technical equipment, but by emotional regulation, mental models, and cognitive mastery. Under mortal stress, 90% of people succumb to emotional hijacking or paralysis; the 10% who survive share a precise psychological architecture.*\n\n`;
md += `- **Author**: Laurence Gonzales\n`;
md += `- **Year & Publisher**: 2003, W. W. Norton & Company\n`;
md += `- **Epistemic Tier**: Tier 1 (Cognitive Neuroscience & High-Risk Decision Making)\n`;
md += `- **Reading Time Saved**: 14.0 hours\n\n`;
md += `---\n\n`;

md += `## The 7-Layer Master Architecture\n\n`;
md += `1. **Layer 1: Cognitive Neuroscience**: Dual-track visual pathways, amygdala hijack (LeDoux), somatic markers (Damasio), perceptual narrowing (Chabris & Simons).\n`;
md += `2. **Layer 2: Systems Dynamics & Complexity**: Normal Accidents (Perrow), self-organized criticality (Per Bak), risk homeostasis (Wilde), normalization of deviance (Vaughan).\n`;
md += `3. **Layer 3: Forensic Chapter Codification**: Exhaustive analysis across all 15 chapters.\n`;
md += `4. **Layer 4: Empirical Case Vault**: B-17 air raids, Mount Hood, Storm King Mountain, Joe Simpson, Deborah Scaling Kiley, Juliane Koepcke, Ernest Shackleton.\n`;
md += `5. **Layer 5: The 10/80/10 Disaster Law**: Behavioral distribution and command protocols during mass panic.\n`;
md += `6. **Layer 6: The 12 Infallible Rules of Survival**: Complete actionable algorithmic checklist.\n`;
md += `7. **Layer 7: Socratic Active Recall Suite**: High-stakes mechanism recall drills.\n\n`;
md += `---\n\n`;

CHAPTERS.forEach(ch => {
  md += `## Chapter ${ch.num}: ${ch.title}\n`;
  md += `*Source Coordinates: ${ch.part}, ${ch.pages}*\n\n`;
  md += `> **Irreducible Axiom**: ${ch.axiom}\n\n`;
  md += `**Causal Mechanism**: ${ch.mechanism}\n\n`;
  md += `**Anchor Case Study**: ${ch.case_study}\n\n`;
  md += `**Actionable Heuristics**:\n`;
  ch.heuristics.forEach(h => md += `- ${h}\n`);
  md += `\n> *" ${ch.quote} "*\n\n`;
  md += `---\n\n`;
});

md += `## The Appendix: The 12 Infallible Rules of Survival\n\n`;
APPENDIX_RULES.forEach(r => md += `- **${r}**\n`);
md += `\n`;

fs.writeFileSync(path.join(outputDir, 'master-notes.md'), md, 'utf-8');
console.log("Wrote master-notes.md (Size:", (md.length / 1024).toFixed(2), "KB)");

// Generate interactive index.html with pantheon logo and favicon
function generateHtml() {
  const meta = kuModel.book_metadata;
  
  const tocItemsHtml = CHAPTERS.map(ch => `
    <a href="#${ch.id}" class="nav-ch-link">
      <span class="nav-ch-num">${ch.num}</span>
      <span class="nav-ch-title">${ch.title}</span>
    </a>
  `).join('\n') + `
    <a href="#appendix-rules" class="nav-ch-link" style="border-top: 1px dashed var(--border-subtle); margin-top: 8px; padding-top: 10px;">
      <span class="nav-ch-num">★</span>
      <span class="nav-ch-title">The 12 Rules of Survival</span>
    </a>
  `;

  const chaptersHtml = CHAPTERS.map(ch => `
    <section class="chapter-wrapper" id="${ch.id}">
      <header class="chapter-header">
        <div class="chapter-kicker">${ch.part} • Chapter ${ch.num}</div>
        <h2 class="chapter-title">${ch.title}</h2>
        <div class="chapter-axiom">✦ <strong>Core Axiom:</strong> ${ch.axiom}</div>
      </header>
      
      <div class="survival-block">
        <h3 class="survival-heading">Neurological &amp; Behavioral Mechanism</h3>
        <p class="survival-text">${ch.mechanism}</p>
        
        <div class="case-study-box">
          <div class="case-study-title">🔍 Landmark Case Study</div>
          <p class="case-study-text">${ch.case_study}</p>
        </div>

        <div class="heuristics-container">
          <div class="heuristics-title">⚡ Operational Heuristics for Extreme Crisis</div>
          <ul class="heuristics-list">
            ${ch.heuristics.map(h => `<li>${h}</li>`).join('\n')}
          </ul>
        </div>

        <blockquote class="gonzales-quote">
          <span class="quote-symbol">“</span>
          ${ch.quote}
        </blockquote>
      </div>
    </section>
  `).join('\n');

  const rulesListHtml = APPENDIX_RULES.map(r => `
    <div class="rule-card">
      <span class="rule-icon">🛡️</span>
      <div class="rule-content">${r}</div>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} — BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="apple-touch-icon" href="../../assets/images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #0a0d14;
      --bg-surface: #121722;
      --bg-surface-elevated: #1a2232;
      --border-subtle: #243046;
      --text-main: #f1f5f9;
      --text-secondary: #94a3b8;
      --color-ice: #38bdf8;
      --color-crimson: #ef4444;
      --color-gold: #f59e0b;
      --font-display: 'Cinzel', serif;
      --font-serif: 'Merriweather', Georgia, serif;
      --font-sans: 'Inter', sans-serif;
    }

    [data-theme="light"] {
      --bg-base: #f8fafc;
      --bg-surface: #ffffff;
      --bg-surface-elevated: #f1f5f9;
      --border-subtle: #e2e8f0;
      --text-main: #0f172a;
      --text-secondary: #475569;
      --color-ice: #0284c7;
      --color-crimson: #dc2626;
      --color-gold: #d97706;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-serif);
      line-height: 1.85;
      font-size: 1.08rem;
    }

    /* TOP HEADER */
    .top-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-subtle);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(8px);
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    .brand-title {
      font-family: var(--font-display);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.1em;
      color: var(--color-ice);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-action {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
    }

    /* APP GRID */
    .app-layout {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: calc(100vh - 60px);
    }

    @media (max-width: 1024px) {
      .app-layout { grid-template-columns: 1fr; }
      .app-sidebar { display: none; }
    }

    /* SIDEBAR */
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

    /* MAIN CONTENT */
    .reading-surface {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px 100px;
      width: 100%;
    }

    /* HERO */
    .hero-box {
      border-bottom: 2px solid var(--border-subtle);
      padding-bottom: 36px;
      margin-bottom: 50px;
    }

    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-ice);
      font-weight: 700;
      margin-bottom: 10px;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 2.8rem;
      line-height: 1.15;
      font-weight: 900;
      color: var(--text-main);
      margin-bottom: 14px;
    }

    .hero-subtitle {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .badge {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      padding: 4px 10px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .badge.highlight {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.3);
      color: var(--color-ice);
      font-weight: 600;
    }

    /* CHAPTERS */
    .chapter-wrapper {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px dashed var(--border-subtle);
    }

    .chapter-header {
      margin-bottom: 32px;
    }

    .chapter-kicker {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-ice);
      margin-bottom: 6px;
    }

    .chapter-title {
      font-family: var(--font-display);
      font-size: 2.1rem;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
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

    /* SURVIVAL BLOCK */
    .survival-block {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 32px;
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
      margin-bottom: 20px;
      line-height: 1.85;
    }

    /* CASE STUDY */
    .case-study-box {
      background: var(--bg-surface-elevated);
      border-left: 3px solid var(--color-gold);
      padding: 14px 18px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 20px;
      font-family: var(--font-sans);
    }

    .case-study-title {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: 6px;
      letter-spacing: 0.08em;
    }

    .case-study-text {
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    /* HEURISTICS */
    .heuristics-container {
      background: var(--bg-surface-elevated);
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 20px;
      border: 1px solid var(--border-subtle);
    }

    .heuristics-title {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-ice);
      margin-bottom: 10px;
    }

    .heuristics-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      color: var(--text-secondary);
    }

    .heuristics-list li {
      position: relative;
      padding-left: 20px;
    }

    .heuristics-list li::before {
      content: "•";
      color: var(--color-ice);
      font-weight: bold;
      position: absolute;
      left: 6px;
    }

    /* QUOTE */
    .gonzales-quote {
      border-left: 3px solid var(--color-crimson);
      padding: 12px 20px;
      margin-top: 20px;
      font-style: italic;
      color: var(--text-main);
      background: rgba(239, 68, 68, 0.05);
      border-radius: 0 6px 6px 0;
      font-size: 1.05rem;
    }

    .quote-symbol {
      color: var(--color-crimson);
      font-family: var(--font-display);
      font-size: 1.4rem;
      line-height: 0;
      margin-right: 4px;
    }

    /* RULES GRID */
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
      padding: 14px 18px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      color: var(--text-main);
    }

    .rule-icon {
      font-size: 1.2rem;
    }
  </style>
</head>
<body>

  <header class="top-header">
    <a href="../../index.html" class="brand-group">
      <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo-img">
      <span class="brand-title">INTELLECTUALIST</span>
    </a>
    <div class="nav-actions">
      <button class="btn-action" id="theme-btn">🌓 Theme</button>
      <a href="../../index.html" class="btn-action">← Library</a>
    </div>
  </header>

  <div class="app-layout">
    <aside class="app-sidebar">
      <div class="sidebar-title">Chapters &amp; Rules</div>
      <nav>
        ${tocItemsHtml}
      </nav>
    </aside>

    <main class="reading-surface">
      <div class="hero-box">
        <div class="hero-kicker">BKRS Master Replacement Codex • Survival Cognition</div>
        <h1 class="hero-title">${meta.title}</h1>
        <p class="hero-subtitle">${meta.subtitle}</p>
        <div class="meta-badges">
          <span class="badge highlight">✦ ${meta.epistemic_tier}</span>
          <span class="badge">⏱ ${meta.reading_time_saved}</span>
          <span class="badge">🧠 15 Cognitive Chapters</span>
          <span class="badge">🛡️ The 12 Infallible Rules of Survival</span>
        </div>
      </div>

      ${chaptersHtml}

      <section class="chapter-wrapper" id="appendix-rules">
        <header class="chapter-header">
          <div class="chapter-kicker">Appendix • Operational Blueprint</div>
          <h2 class="chapter-title">The 12 Infallible Rules of Survival</h2>
          <div class="chapter-axiom">✦ <strong>Master Axiom:</strong> Survival is not about heroics; it is the art of calm, deliberate adaptation under extreme stress.</div>
        </header>

        <div class="rules-grid">
          ${rulesListHtml}
        </div>
      </section>
    </main>
  </div>

  <script>
    const themeBtn = document.getElementById('theme-btn');
    const htmlEl = document.documentElement;
    let theme = localStorage.getItem('intellectualist_theme') || 'dark';
    htmlEl.setAttribute('data-theme', theme);
    themeBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', theme);
      localStorage.setItem('intellectualist_theme', theme);
    });
  </script>
</body>
</html>`;
}

const renderedHtml = generateHtml();
fs.writeFileSync(path.join(outputDir, 'index.html'), renderedHtml, 'utf-8');
console.log("Successfully rendered Deep Survival index.html (Size:", (renderedHtml.length / 1024).toFixed(2), "KB)");
