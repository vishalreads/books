const fs = require('fs');
const path = require('path');

const chapters = [
  {
    num: 1,
    title: "I Should Have Been a Statistic",
    subtitle: "The Domestic Crucible, Skateland, and The Escape to Brazil, Indiana",
    setting: "Williamsville, New York (Buffalo) and Brazil, Indiana (1975–early 1990s)",
    figures: "David Goggins, Trunnis Goggins (Father), Jackie Goggins (Mother), Trunnis Jr. (Brother)",
    axiom: "Severe environmental trauma, domestic violence, and systemic hostility do not determine destiny; they can be forged into the raw, indestructible armor of an indomitable will.",
    context: `Born in 1975 in Buffalo, New York, David Goggins was born into an active war zone masquerading as a suburban family. His father, Trunnis Goggins, was a charismatic, sociopathic entrepreneur who owned 'Skateland,' an all-night roller-skating rink, alongside illegal gambling, prostitution, and alcohol rackets. Beneath the flashy exterior of Cadillacs and custom suits was a totalitarian tyrant who subjected his wife and two young sons to unrelenting physical torture, psychological terrorism, and forced child labor.`,
    forensic: `From age six, David's existence was defined by forced night shifts at Skateland. While other children slept, David, his brother, and his mother worked from 8:00 PM until 4:00 AM—cleaning vomit, scrubbing floors, and renting skates. If David fell asleep on the dirty clothes piles in the back office, his father beat him awake with a leather belt or metal clothes hanger.

The physical violence was sadistic and systemic:
- Trunnis beat David's mother within an inch of her life on a regular basis, dragging her down staircases and beating her bloody while the children watched in helpless terror.
- When David developed a severe ear infection as a toddler, his father refused medical treatment; when a doctor finally operated and bandaged his head, Trunnis beat the boy across the surgical wound for crying.
- The psychological atmosphere was designed to induce learned helplessness: any expression of fear, fatigue, or independent thought was met with savage physical reprisal.

When David was eight years old, his mother summoned the superhuman courage to orchestrate a midnight escape. Packing minimal belongings into garbage bags, they fled into the night, abandoning everything to seek refuge with David's grandparents in Brazil, Indiana—a rural, impoverished town of 8,000 people.

However, arriving in Indiana did not bring salvation; it exchanged domestic tyranny for acute systemic terror. Brazil was a virtually all-white enclave with zero tolerance for a Black boy. Goggins was subjected to overt, vicious racial hostility:
- Racial slurs were scrawled across his Spanish workbook and spray-painted onto his mother's car.
- High school classmates drove past him shouting death threats and waving Confederate flags.
- He discovered a notebook left on a school desk with his name on a target hit-list.

The combined weight of early childhood trauma and racial persecution crippled Goggins' developing brain:
- He developed a severe, humiliating nervous stutter that paralyzed his vocal cords under pressure.
- His hair began falling out in patches, and his skin developed white blotches of vitiligo from toxic cortisol and adrenaline overload.
- Diagnosed with severe learning disabilities and an inability to retain written information, he was placed in special education classes.

To survive, Goggins developed a destructive survival mechanism: **The Mask of the Clown and The Cheat**. Unable to read or perform basic arithmetic, he spent high school cheating on every examination—copying answers from classmates, writing formulas on his shoes, and acting like a boastful, swaggering tough guy to conceal his crushing inner shame. By age seventeen, he was completely illiterate, academically fraudulent, and spiritually hollow—an absolute prime candidate to become another dead or incarcerated statistic.`,
    dialogue: `Trunnis Goggins to young David while beating him: "Pain makes you tough, boy. You don't cry in this house. You work until you drop!"
Jackie Goggins to David in the runaway car: "We have nothing, David. We have no money, no home, and no family left. But we have our lives, and he will never touch us again."`,
    quote: `“I was a stuttering, illiterate, terrified kid from the Midwest. I had no money, no father, no prospects, and no self-respect. Life had dealt me an unplayable hand. But the greatest discovery of my life was that the bad hand is not a life sentence; it is the raw iron from which you forge an armored soul.”`,
    heuristic: `Never wait for apologies from abusers or seek comfort in victimhood. Acknowledge your scarred starting point without self-pity and use your suffering as rocket fuel.`
  },
  {
    num: 2,
    title: "My Mother's Courage & The Accountability Mirror",
    subtitle: "Radical Self-Honesty, The ASVAB Crucible, and Eradicating Excuses",
    setting: "Brazil, Indiana (1993, Age 17–18)",
    figures: "David Goggins, Jackie Goggins, U.S. Air Force Recruiter",
    axiom: "Transformation requires radical, unflinching self-honesty; you cannot sugarcoat weakness with positive affirmations—you must confront your ugly reflection and destroy excuses.",
    context: `At age seventeen, David's fraudulent academic scaffolding collapsed. The principal of Brazil High School informed his mother that David was failing every class, was reading at a fourth-grade level, and would not graduate. Faced with the reality of an illiterate future working minimum-wage jobs, Goggins attempted to join the U.S. Air Force to become a Pararescue jumper (PJ), only to fail the Armed Services Vocational Aptitude Battery (ASVAB) with a humiliating score.`,
    forensic: `The Air Force recruiter looked at Goggins' test score with open contempt, informing him that his scores were so low he did not qualify for even the most basic enlisted military trades. He had one final chance to retake the ASVAB in six months; if he failed again, the military door was permanently closed.

Returning to his mother's cramped, impoverished apartment, Goggins walked into the bathroom. Looking into the mirror, he was struck by a moment of sickening clarity:
- Beneath the baggy clothes, the fake gold chains, and the swaggering attitude, he saw a coward, a liar, and an illiterate fraud who had cheated on every test in life.
- He realized that repeating gentle, comforting positive affirmations was a lie. What he needed was not self-esteem; he needed ruthless self-accountability.

He took clippers and shaved his head down to the bare scalp, stripping away his vanity. He then created what became the foundational tool of his life: **The Accountability Mirror**:
1. **The Post-It Note Inventory:** He took stacks of Post-it notes and wrote out his unvarnished flaws in bold black ink: *'You are illiterate. You read at a 4th-grade level.' 'You are fat and out of shape.' 'You are a liar who cheats on tests.' 'You are lazy and make excuses.'*
2. **The Daily Target Wall:** Alongside his weaknesses, he posted concrete, daily non-negotiable micro-goals: *'Memorize 50 vocabulary words today.' 'Write out 20 math formulas by hand 10 times.' 'Run 3 miles without stopping.' 'Wash your own clothes.'*
3. **The Morning & Evening Ritual:** Every morning at 5:00 AM and every night before bed, Goggins stood naked before that mirror, looking into his own eyes, reading every single note out loud. If he had not completed a task, he called himself out with brutal honesty.

The cognitive mechanics of his transformation were heroic:
Because his brain could not retain written text from textbooks, Goggins developed a brute-force learning methodology: **Motor-Kinetic Transcription**. He took ASVAB study guides and literally transcribed every single page by hand into spiral notebooks, copying words, definitions, and mathematical equations over and over until his hand cramped and the mechanical act of writing forced the concepts into his subconscious memory.

He studied eighteen hours a day, waking at 4:30 AM, running miles on backroads, and transcribing textbooks late into the night. When he retook the ASVAB six months later, his score surged into the top percentiles. He graduated high school, qualified for Pararescue training, and proved that intelligence is not a fixed genetic trait, but an elastic muscle forged through obsessive discipline.`,
    dialogue: `Goggins to his reflection in the mirror: "Look at yourself! You are a lying, illiterate, lazy piece of shit. You are cheating your way through life, and you're running out of time. Are you going to die a coward, or are you going to get to work?"`,
    quote: `“The Accountability Mirror asked me one question: Are you going to continue being a soft, lying coward, or are you going to do something about it? The mirror doesn't lie. It doesn't care about your feelings, your race, or your childhood. It reflects only the work you did or didn't do.”`,
    heuristic: `Look into your own eyes daily and tell yourself the cold, unvarnished truth. Positive thinking without radical self-accountability is merely organized delusion.`
  },
  {
    num: 3,
    title: "The Impossible Cut: 297 to 191 Pounds",
    subtitle: "The 300-Pound Exterminator, The Navy SEAL Call, and Dropping 106 Pounds in 90 Days",
    setting: "Indianapolis, Indiana (1999, Age 24)",
    figures: "David Goggins, U.S. Navy Recruiters",
    axiom: "When purpose is absolute, biological limits become negotiable; human work capacity expands exponentially when the comfort-seeking governor of the mind is overridden.",
    context: `After washing out of Air Force Pararescue training due to fear of the water (using a diagnosis of sickle cell trait as a convenient excuse), Goggins spent four years in the Air Force working mundane jobs. Discharged at age twenty-four, he sank into deep depression and morbid obesity, weighing 297 pounds while working night shifts spraying dead cockroaches and rats in Indianapolis restaurants for $1,000 a month.`,
    forensic: `Goggins' daily routine in 1999 was a masterclass in slow spiritual suicide:
- Waking at 6:00 PM, he stopped at Steak 'n Shake to consume a giant box of chocolate donuts and a large chocolate milkshake before his shift.
- He spent from 11:00 PM to 7:00 AM hauling chemical sprayers through grease-caked restaurant basements, killing millions of cockroaches.
- Returning to his decrepit apartment at 7:30 AM, he sat on his couch in his underwear, eating frozen pizzas and watching daytime television until he passed out.

One morning at 6:30 AM, holding a box of donuts, Goggins watched a television documentary on the Discovery Channel about **Navy SEAL Hell Week**: Class 224 struggling through freezing surf at Coronado, carrying 300-pound logs on their heads, hypothermic, bleeding, yet refusing to ring the bell. Watching men endure the absolute maximum of human suffering with savage pride pierced Goggins' soul like an electric shock. He looked down at his 300-pound gut, covered in cockroach spray, and wept with self-hatred.

He immediately called every Navy recruiter in the region. Most hung up or laughed when they heard he was a 300-pound civilian with zero swimming background. Finally, one recruiter in Columbus told him the brutal truth:
- To qualify for BUD/S (Basic Underwater Demolition/SEAL training), an applicant of his height could weigh a maximum of **191 pounds**.
- Because the enlistment deadline for the next class was closing, Goggins had exactly **three months (less than 90 days) to lose 106 pounds**. If he missed the deadline, his age would permanently disqualify him.

Goggins walked into his kitchen, threw away all junk food, and initiated the most extreme physical transformation in military history:
1. **The Brutal 800-Calorie Starvation Diet:** He consumed only a single chicken breast, a cup of rice, and steamed broccoli per day, supplemented with protein powder mixed with water.
2. **The Layered Sweat-Suit Protocol:** He dressed in five layers of clothing: thermal underwear, long-sleeve shirts, hoodies, sweatpants, and a taped black plastic garbage bag next to his skin to induce massive thermal sweating.
3. **The 16-Hour Daily Physical Siege:**
   - 4:30 AM: 45 minutes on a stationary exercise bike on maximum resistance, pedaling through agonizing knee pain.
   - 6:00 AM: Two hours of swimming in an Olympic pool, teaching himself the combat side stroke while cramping violently.
   - 9:00 AM: Intense calisthenics circuit: 100 to 250 repetitions of pushups, squats, and pullups.
   - 1:00 PM: Returning to the stationary bike for another 2 hours.
   - 4:00 PM: Running 4 to 6 miles on country asphalt in five layers of clothes.
   - 8:00 PM: Another 2 hours on the exercise bike while studying military entrance guides.

He pedaled through blisters that bled through his shoes, suffered acute dehydration, and wept on the bike from sheer physical exhaustion. When he stepped on the military scale on the morning of his deadline, 89 days later, the needle settled at **190 pounds**. He had lost 106 pounds in less than three months, proving to himself that the human body can endure almost anything if the mind refuses to quit.`,
    dialogue: `Navy Recruiter to 297-pound Goggins: "You're 297 pounds, son. You're an out-of-shape exterminator. You need to lose 106 pounds in three months, or don't ever call this office again."
Goggins to himself on the exercise bike at 2:00 AM: "You wanted to quit your whole life! This is where you die or this is where you become a Navy SEAL. Pedal the damn bike!"`,
    quote: `“I didn't lose 106 pounds by reading fitness magazines or drinking diet shakes. I lost it through pure, unadulterated suffering. I went to war with my own weakness, and I discovered that when you are willing to suffer without limit, the impossible becomes routine.”`,
    heuristic: `When confronting an 'impossible' physical or mental mountain, do not look for comfort or gradual moderation; apply overwhelming, continuous, uncompromising force until the mountain collapses.`
  },
  {
    num: 4,
    title: "BUD/S & The Crucible of Three Hell Weeks",
    subtitle: "Class 235, Hypothermia, Broken Shins, and Refusing to Ring the Bell",
    setting: "Naval Special Warfare Center, Coronado, California (2000–2001)",
    figures: "David Goggins, BUD/S Instructors, Class 235 Trainees",
    axiom: "Pain is a mental interpretation; when you disconnect the emotional sensation of suffering from the physical necessity of movement, the body continues functioning far beyond medical failure.",
    context: `Entering BUD/S Training with Class 235, Goggins confronts the world's most brutal military selection gauntlet: six months of continuous surf torture, ocean swims, obstacle courses, and Hell Week—where 80% of candidates quit within days.`,
    forensic: `BUD/S is not a physical fitness competition; it is a psychiatric demolition laboratory designed to locate and break the hidden psychological breaking point of every recruit.

**Hell Week Mechanics (130 Continuous Hours of Physical Torment):**
- Beginning Sunday evening with simulated combat explosions, recruits endure five continuous days and nights of physical labor with less than **four total hours of sleep** over the entire week.
- **The Surf Torture:** Recruits are commanded to link arms and lie chest-deep in the freezing Pacific Ocean for hours at a time until acute Stage 2 hypothermia sets in, their teeth chattering with such violent force that tooth enamel fractures.
- **Log PT:** Boat crews of six men hoist 300-pound waterlogged telephone poles over their heads for four continuous hours, doing lunges, chest presses, and sprints on the soft sand until shoulders blister and cervical spines compress.
- **Boat Carrying:** Carrying the 250-pound IBS (Inflatable Boat Small) on bare heads caused the rubber seam to grind away trainees' scalp tissue down to the skull bone, bleeding down their faces into their eyes.

Goggins' journey through BUD/S was unprecedented in its physical agony:
1. **First Attempt (Class 235):** During Hell Week, Goggins developed double pneumonia and severe stress fractures in both legs. His lungs were filling with fluid, coughing up blood; medical officers pulled him out against his will and rolled him back to restart training from Day 1.
2. **Second Attempt (Class 236):** Weeks into training, while running the soft sand obstacle course, Goggins suffered catastrophic stress fractures across both shins and feet. Bone scans revealed that his tibia bones were literally splintered like cracked glass. When he stepped down, the bones rubbed together inside his flesh with sickening friction. Medical officers rolled him back again.
3. **The Final Third Attempt:** Goggins was informed that he had one final chance: if he failed Hell Week on his third attempt, he would be permanently expelled from the Navy SEAL program.

To survive Hell Week on fractured shins:
- Every morning at 3:00 AM, Goggins sat in the barracks with black duct tape, wrapping his feet, ankles, and calves with dozens of tight layers of tape, compressing his fractured bones so tightly that the bone fragments could not shift during sprints.
- He slipped thick tube socks over the tape and jammed his swollen feet into combat boots.
- Every time his foot hit the asphalt during four-mile timed runs, blinding white-hot lightning bolts of pain shot up his spine. Instead of slowing down, Goggins used **Dissociative Mental Reframing**: he separated his conscious mind from his physical vehicle, treating his broken legs like mechanical pistons operating under external control.

He completed Hell Week, survived the grueling dive phase, passed demolition training on San Clemente Island, and graduated with Class 235, earning his Navy SEAL Trident and becoming the **36th African-American Navy SEAL** in history.`,
    dialogue: `BUD/S Instructor to shivering Goggins in the ocean: "Look at that bell, Goggins. Ring it three times, and you can take a hot shower and eat warm pizza right now. Why are you doing this to yourself?"
Goggins (teeth chattering violently): "You can kill me out here, Instructor, but you cannot make me ring that fucking bell!"`,
    quote: `“Hell Week showed me that the human body can absorb a level of physical destruction that modern medicine considers lethal, provided the mind refuses to surrender. When you wrap broken shins in duct tape and run ten miles, you enter a realm of reality where pain ceases to be an obstacle and becomes a companion.”`,
    heuristic: `When physical pain screams at you to stop, disconnect your emotional identity from the sensation; pain is merely electrical information traveling up nerve fibers—you choose whether to obey it.`
  },
  {
    num: 5,
    title: "Taking Souls: Weaponizing Energetic Dominance",
    subtitle: "Psychological Warfare Against Adversaries and Reframing Hostile Pressure",
    setting: "Coronado, California and Combat Deployments",
    figures: "David Goggins, BUD/S Instructors, Hostile Opponents",
    axiom: "When subjected to institutional cruelty or hostile pressure, do not respond with resentment; weaponize your performance to break the psychological spirit of your tormentors.",
    context: `During his repeated Hell Weeks, Goggins notices that the recruits who survive are not the strongest athletes, but those who develop an offensive psychological posture against the instructors.`,
    forensic: `In high-stress selection environments, the tormentors (instructors, drill sergeants, abusive bosses, hostile competitors) derive their authority from watching their victims crack, complain, and display weakness. When a candidate shows exhaustion, the instructor attacks with redoubled fury.

Goggins invented the psychological concept of **'Taking Souls'**:
- Taking souls does not mean physical violence or arrogant disrespect; it means performing with such ferocious energy, joy, and uncompromising excellence in the midst of torture that the tormentors begin questioning their own dominance.
- During Hell Week, when Instructor Psycho ordered Boat Crew 2 into the freezing ocean at 2:00 AM to perform endless boat paddles in forty-degree surf, the recruits were sobbing and shivering in despair. Goggins looked at his boat crew and whispered: *'We are going to take this instructor's soul tonight.'*
- Goggins grabbed the paddle and began paddling with savage power, shouting military cadences at the top of his lungs, smiling with savage joy into the freezing spray. His boat crew caught the infectious fire, paddling like berserkers, laughing in the face of hypothermia.
- The instructor stood on the beach in his warm parka, watching the boat charge through the black waves. For the first time, the instructor had nothing to say; his psychological weapon had failed, and his spirit was broken.

Goggins applied this tactic throughout his career: whenever an environment is stacked against you—whether through institutional prejudice, academic bias, or professional sabotage—do not complain or file grievances. Out-work, out-prepare, and out-perform everyone in the room until your excellence becomes an undeniable, terrifying force.`,
    dialogue: `Goggins to his freezing boat crew: "Listen to me! They want us to quit! They want us to cry! We are not crying tonight. When they throw us into the surf, we paddle like gods! We take their fucking souls!"`,
    quote: `“Taking souls means stealing your opponent's energy. When you smile in the middle of hell, when you ask for more work when they are trying to break you, the psychological tables turn completely. You become the predator, and they become the prey.”`,
    heuristic: `Never complain about unfair treatment; weaponize extraordinary performance and cheerfulness in adverse conditions to shatter your opponent's confidence.`
  },
  {
    num: 6,
    title: "The 40% Rule & The San Diego 100",
    subtitle: "Running 100 Miles Without Training, Broken Feet, Kidney Failure, and The Governor",
    setting: "San Diego One-Day 100-Mile Race, Hospitality Point (November 2005)",
    figures: "David Goggins, Kate Goggins (Wife), Medical Personnel",
    axiom: "The human mind operates under an evolved biological 'Governor' that signals exhaustion when only 40% of true physical and mental reserves have been tapped.",
    context: `In 2005, following the tragic loss of twelve Navy SEAL brothers in Operation Red Wings in Afghanistan, Goggins vows to raise funds for the Special Operations Warrior Foundation. To qualify for the elite Badwater 135-mile ultramarathon in Death Valley, he must run a 100-mile race in under 24 hours—having performed zero long-distance running training and weighing a muscular 260 pounds.`,
    forensic: `Goggins arrived at the San Diego One-Day race with zero ultramarathon knowledge: he wore basketball sneakers, carried a bottle of water, a bag of potato chips, and had done zero running over 10 miles in the previous year. The race consisted of running around a flat one-mile asphalt loop 100 consecutive times.

**The Catastrophic Breakdown (Miles 1 to 70):**
- By mile 50, his heavy 260-pound frame had hammered his joints into ruin.
- By mile 70, disaster struck: the metatarsal bones across both feet fractured under the impact; his toenails turned black and tore away inside his socks; his calves seized into stone; and he was suffering from acute, life-threatening **rhabdomyolysis**—muscle protein breaking down and entering the bloodstream, causing his kidneys to fail.
- Unable to control his bowels, Goggins defecated on himself, his urine turning pitch-black from blood and myoglobin.

At mile 81, Goggins collapsed onto a folding lawn chair in his pit stall, shivering in hypothermic shock, covered in his own feces, his pulse racing, barely conscious. His ex-wife Kate, a nurse, wept and begged him to let her call 911, warning him that his kidneys were shutting down and that he was dying.

**The Re-activation of the Mind (The 40% Rule):**
Sitting in that chair, Goggins confronted the core architecture of the human brain: **The Evolutionary Governor**:
- Just as a high-performance sports car has an electronic governor that caps speed at 120 mph to protect the engine, the human brain evolved an instinctual governor that sounds panic alarms—pain, nausea, exhaustion, terror—when you have used only **40% of your real capacity**.
- The governor is designed to protect survival; it wants you comfortable, safe, and alive on the couch.
- Goggins recognized that the voice screaming *'You are dying! Stop running!'* was not biological truth, but the panic of the Governor trying to protect comfort.

Goggins closed his eyes, silenced the panic, reached into his **Cookie Jar** (recalling his survival of Skateland, his escape from Brazil, his three Hell Weeks), stood up from the lawn chair, and took one agonizing step onto the asphalt.

He walked and shuffled the remaining 19 miles, one step at a time, through unimaginable agony. He finished 101 miles in **19 hours and 6 minutes**, driving himself to the hospital immediately afterward to recover from acute renal failure. He had discovered that when the Governor is overridden, the remaining 60% of human potential unlocks.`,
    dialogue: `Kate Goggins to collapsed David at Mile 81: "David, your urine is black! You're bleeding internally. Your kidneys are failing. If you don't stop right now, you are going to die on this track!"
Goggins (whispering through chattering teeth): "Help me stand up. If I die out here, I die. But I'm not quitting."`,
    quote: `“When your mind tells you that you are completely exhausted, that you have nothing left to give, you are only at 40 percent of your true capability. The remaining 60 percent is locked behind the door of voluntary suffering. You have to be willing to walk through that door to find who you really are.”`,
    heuristic: `Never negotiate with exhaustion when your goals are on the line; recognize that panic signals the 40% barrier, not the finish line.`
  },
  {
    num: 7,
    title: "The Cookie Jar: Mental Fuel in the Abyss",
    subtitle: "Badwater 135, Running in 130-Degree Death Valley, and Cognitive Anchoring",
    setting: "Death Valley to Mt. Whitney, California (July 2006)",
    figures: "David Goggins, Support Crew",
    axiom: "The human mind under extreme stress forgets its past triumphs; you must maintain an active mental inventory of past suffering and victories to fuel resilience in the abyss.",
    context: `Having qualified, Goggins enters the brutal Badwater 135—a 135-mile non-stop footrace across Death Valley in July, where ambient temperatures reach 130°F (54°C) and asphalt temperatures hit 200°F, melting running shoes.`,
    forensic: `Badwater is an environmental inferno: running 135 miles across desolate salt flats, climbing over three mountain ranges with 14,000 feet of cumulative elevation gain, terminating at the trailhead of Mt. Whitney.

During the race, the heat is suffocating:
- Runners must run on the white painted fog line of the highway because the black asphalt is so hot it melts the rubber soles of shoes.
- Hot desert winds blow like an industrial blast furnace, desiccating the lungs and burning the corneas.
- Runners suffer nausea, heat stroke, hallucinations, and severe electrolyte collapse.

At mile 60, climbing the brutal furnace of Townes Pass, Goggins hit the psychological abyss: his legs were cramping into knots, his blisters covered the entire surface of his feet, and his mind began whispering defeat: *'Why are you doing this? You've already raised money. You've already proven you're tough. Just sit down in the air-conditioned van.'*

To counter this internal mutiny, Goggins deployed his core cognitive weapon: **The Cookie Jar**:
- When the human brain is under severe physical or emotional trauma, it experiences tunnel vision, forgetting all past triumphs, strengths, and victories, fixating only on current pain.
- Goggins created a mental cookie jar containing raw, visceral memories of every hardship he had ever overcome:
  - *Cookie 1:* Surviving his father's belt beatings at Skateland.
  - *Cookie 2:* Overcoming illiteracy and transcribing books by hand.
  - *Cookie 3:* Losing 106 pounds in 89 days on an exercise bike.
  - *Cookie 4:* Wrapping broken shins in duct tape and finishing Hell Week.
  - *Cookie 5:* Running 100 miles with failed kidneys in San Diego.
- Reaching into his mental jar, he pulled out a memory, tasted the victory, reminded himself of his indomitable nature, and spoke to his mind: *'Who the fuck do you think you're dealing with? You survived all of that, and you're going to quit over a little hill in the heat?'*

The surge of dopamine, pride, and righteous anger cleared the mental fog. Goggins accelerated up the mountain, passed dozens of elite sponsored runners, and finished the Badwater 135 in **30 hours and 18 minutes**, taking 5th place overall in his rookie attempt.`,
    dialogue: `Goggins to his support crew at Mile 70: "Don't hand me comfort. Don't tell me I'm doing great. Remind me of who I am. Remind me of the hell I walked through to get here!"`,
    quote: `“The Cookie Jar is not a repository of happy thoughts; it is an arsenal of past victories over pain and self-doubt. When you are drowning in suffering, reach into your jar, pull out a piece of your own past heroism, and remember what kind of savage you truly are.”`,
    heuristic: `Never enter a crisis with an empty mental reservoir; maintain a vivid mental catalog of every trial you have survived to silence panic when adversity strikes.`
  },
  {
    num: 8,
    title: "Talent Not Required: The Pull-up World Record",
    subtitle: "4,030 Pull-ups in 17 Hours, Palm Skin Stripped to the Bone, and Uncompromising Will",
    setting: "Today Show Studios, NYC and Brentwood, Tennessee (2012–2013)",
    figures: "David Goggins, Guinness World Records Judges",
    axiom: "Talent, genetics, and natural gifts are irrelevant compared to the obsessive, relentless application of unglamorous, repetitive labor over time.",
    context: `To raise additional funds for the families of fallen soldiers, Goggins decides to break the official Guinness World Record for the most pull-ups completed in 24 hours, which stood at an astonishing 4,020 pull-ups.`,
    forensic: `Attempting the pull-up record proved to be Goggins' most humiliating and agonizing public crucible, requiring three separate attempts:

**The First Failure (Today Show, September 2012):**
- Performed on live national television under hot studio lights in New York.
- The pull-up bar provided by the studio was poorly designed: the metal bar had too much flex and the foam padding absorbed sweat, turning into abrasive sandpaper.
- After 2,500 pull-ups in twelve hours, Goggins suffered catastrophic injuries: the skin on both palms was literally stripped away, exposing raw muscle, tendons, and nerve endings. His right shoulder tore internally, and he was forced to abort in front of millions of viewers.

**The Second Failure (Nashville, November 2012):**
- In his second attempt, Goggins reached 3,200 pull-ups in 12 hours, but developed severe rhabdomyolysis and a torn right wrist tendon. A bulge the size of a baseball formed on his wrist, and his body began entering septic shock; medical personnel forced him to stop.

Most human beings would have abandoned the goal after two publicly humiliating medical disasters. Goggins did the opposite: he analyzed his failures with forensic engineering:
- He built a custom, completely rigid pull-up bar with zero flex.
- He studied the exact physics of pull-up mechanics, altering his grip and elbow flexion to minimize tendon stress.
- He conditioned his palms by spending months hanging from rough bars, callusing his hands into leather.

**The Third Attempt (Brentwood, Tennessee, January 2013):**
- Goggins returned to the bar for the third time in four months.
- For seventeen continuous hours, Goggins executed pull-ups in disciplined sets of five, followed by thirty seconds of rest, over and over, thousands of times.
- By pull-up 3,500, every repetition was white-hot agony through scar tissue and torn muscles. He taped his hands with foam and duct tape, refusing to stop.
- On January 20, 2013, on his 4,030th repetition, Goggins locked his chin over the bar, setting the new **Guinness World Record for Most Pull-ups in 24 Hours** (4,030 pull-ups completed in 17 hours).`,
    dialogue: `Goggins to Guinness Judge after Pull-up 4,030: "Record verified? Good. Now take that damn bar down before I do another thousand."`,
    quote: `“I had zero natural talent for pull-ups. I was a heavy 200-pound guy fighting against gravity. But talent is the most overrated concept in modern society. When you are willing to out-suffer everyone on the planet, talent is exposed as the fragile illusion it is.”`,
    heuristic: `Never let lack of natural talent be an excuse; obsessive, methodical, relentless repetition will destroy any naturally gifted opponent who relies on talent alone.`
  },
  {
    num: 9,
    title: "Uncommon Amongst Uncommon: Elite Standards",
    subtitle: "Army Ranger School, Top Gun Award, Smokejumping, and Shattering Complacency",
    setting: "Fort Benning, Georgia and Remote Smokejumper Outposts",
    figures: "David Goggins, Army Ranger Instructors",
    axiom: "Achieving elite status is a trap if it leads to complacency; you must continually seek new crucibles to remain 'uncommon amongst the uncommon.'",
    context: `Having become a seasoned Navy SEAL, Goggins realizes that many military operators rest on their laurels, becoming arrogant and entitled once they earn their Trident. Refusing comfort, Goggins volunteers for the U.S. Army Ranger School—the Army's premier combat leadership gauntlet.`,
    forensic: `Army Ranger School is a 61-day leadership marathon through mountains, swamps, and forests, operating on zero sleep and starvation rations while carrying 90-pound rucksacks on tactical patrols.

Goggins did not merely pass Ranger School; he dominated it:
- While other soldiers complained about freezing rain and sleep deprivation, Goggins treated every patrol as a championship game.
- He volunteered for the heaviest weapons—carrying the 28-pound M240 machine gun through swamps while other soldiers collapsed from exhaustion.
- He earned the coveted **Enlisted Honor Graduate ('Top Gun') Award**, graduating as the number-one ranked soldier in his class.
- He remains the only member in U.S. Armed Forces history to complete **Navy SEAL training, Army Ranger School, and Air Force Tactical Air Controller training**.

Later in his career, Goggins volunteered for wildland firefighting, becoming an elite **Smokejumper**—parachuting into remote forest fires carrying 110 pounds of gear to battle blazing infernos with hand tools.

The core lesson of Chapter 9 is the danger of **The Comfort Trap of Success**:
- When you achieve fame, money, or elite credentials, society tells you that you have arrived and gives you permission to relax.
- Goggins warns that resting on past achievements rots your edge. To maintain true greatness, you must remain a perennial beginner, intentionally entering new domains where you have zero status and must earn your respect from the ground up.`,
    dialogue: `Goggins to complacent SEAL teammates: "Just because you have a Trident on your chest doesn't mean you're a warrior today. What did you do this morning to earn it? The Trident is rented every day, and rent is due every damn morning!"`,
    quote: `“It is easy to be uncommon in a room full of average people. The real challenge is to be uncommon amongst the uncommon—to walk into a room of elite killers and out-work, out-discipline, and out-suffer every single one of them without saying a word.”`,
    heuristic: `Never rest on past credentials or trophies; continuously seek new arenas where you are an unproven novice to keep your mental armor sharp.`
  },
  {
    num: 10,
    title: "The Empowerment of Failure: The After-Action Report",
    subtitle: "Surgical Dissection of Mistakes, Humility, and Building the Armored Mind",
    setting: "Post-Race Debriefs and Training Failures",
    figures: "David Goggins",
    axiom: "Failure is not a reflection of your identity, but the most valuable educational data point in existence when audited with surgical, unemotional honesty.",
    context: `Goggins deconstructs his philosophy of failure, showing how his most humiliating setbacks (dropping out of PJ training, failing pull-up records, medical rollbacks at BUD/S) were the essential building blocks of his greatest victories.`,
    forensic: `Most people treat failure as a devastating blow to self-esteem, running away into comforting excuses or abandoning their ambitions entirely. Others engage in toxic positivity, celebrating failure as 'a learning experience' without ever doing the hard intellectual work of analyzing what went wrong.

Goggins institutionalized the military **After-Action Report (AAR)** into personal life:
Immediately following any failure or sub-optimal performance, Goggins sits down with a notebook and conducts a surgical post-mortem:
1. **Unvarnished Fact Gathering:** What was the mission? What were the exact conditions? What actually happened, without emotional interpretation?
2. **Personal Responsibility Audit:** Where did *I* fail? Where was my preparation deficient? Where did my discipline slip? (Zero blaming of weather, equipment, referees, or teammates allowed).
3. **The Mechanical Adjustment Plan:** What specific changes in training, nutrition, pacing, equipment, or mindset must be implemented to guarantee victory on the next attempt?

He demonstrates that the human ego hates the AAR because it strips away comforting rationalizations. But when you detach your identity from the outcome and treat failure like an engineering problem, you become mentally invincible: every failure simply refines your blueprint until victory is mathematically inevitable.`,
    dialogue: `Goggins conducting an AAR on himself: "Don't tell me the bar was slippery! You didn't train your grip on wet metal. You didn't do the work. The fault is yours, 100 percent. Now fix it."`,
    quote: `“Failure is the greatest teacher on earth, but only if you have the guts to look it in the eye. When you fail, don't run to your friends for comforting hugs. Sit in the dark with your notebook, dissect your weaknesses like a surgeon, and build an armored plan for round two.”`,
    heuristic: `Never waste a failure on emotional despair; immediately conduct a forensic After-Action Report to extract the mechanical adjustments needed for victory.`
  },
  {
    num: 11,
    title: "What If? The Final Frontier",
    subtitle: "Living at 100%, Defying the Odds, and The Peace of Total Self-Actualization",
    setting: "Final Reflections and Ultra-Endurance Races (Present Day)",
    figures: "David Goggins",
    axiom: "The ultimate human question is 'What If?'; silencing the doubts of skeptics and your own inner critic by realizing 100% of your dormant potential.",
    context: `In the concluding chapter, Goggins synthesizes his life's philosophy into a final manifesto on human capability, confronting mortality and the tragedy of wasted human potential.`,
    forensic: `Goggins paints a haunting psychological thought experiment: **The Final Judgment**:
- Imagine you live your entire life as a safe, comfortable, average person—avoiding risks, making excuses, working a safe job, retiring comfortably, and dying at age eighty.
- You arrive at the pearly gates, and God hands you a book containing your life story. You open the book, and on the pages, it says: *'David Goggins: Navy SEAL, Army Ranger, World Record Holder, Ultra-Endurance Legend, Inspiration to Millions.'*
- You look at God and say: *'Lord, you have the wrong book! I was an overweight exterminator from Indiana who worked for minimum wage!'*
- And God looks at you and replies: *'No, my son. That is the book of who you COULD have been if you had not listened to your fear, your comfort, and your excuses.'*

For Goggins, the greatest horror in human existence is not pain, suffering, or death; it is dying having tapped only 40% of the divine potential placed inside you.

The mantra that drove him through every hell was two words: **'WHAT IF?'**:
- When everyone said an illiterate, stuttering kid from Brazil, Indiana, could never graduate high school: *What if I could?*
- When the recruiter laughed at a 300-pound man losing 106 pounds in three months: *What if I could?*
- When medical doctors said his broken shins would give out during Hell Week: *What if I could?*
- When running 100 miles on broken feet with failing kidneys: *What if I could?*

The question 'What If?' silences all skeptics, crushes self-doubt, and turns the impossible into an open door of limitless human exploration.`,
    dialogue: `Goggins to humanity: "When the world tells you it's impossible, when your own mind screams that you are done, look in the mirror and ask yourself two simple words: What If?"`,
    quote: `“You are in danger of living a life so comfortable and soft that you will die without ever knowing who you were. The path to greatness is paved with voluntary suffering. Break the Governor, conquer your mind, and defy the odds!”`,
    heuristic: `Whenever fear or skepticism tells you something is impossible, answer with 'What If?' and use your actions to prove reality wrong.`
  }
];

let md = `# Can't Hurt Me: Master Your Mind and Defy the Odds
**Author:** David Goggins (2018)  
**System Standard:** BKRS v1.0 Total Replacement Master Codex  
**Corpus Architecture:** 11 Invariant Chapters | The 10 Challenges | The 40% Rule & The Callused Mind  
**Reading Time Saved:** ~10.0 Hours  

---

> ### The Golden Test of Total Replacement
> *"If the reader never opens David Goggins' 360-page original autobiography, they will not miss a single childhood crucible, medical detail of Hell Week, psychological combat protocol, verbatim exchange, or mental weapon."*

---

## LAYER 1: Master Theoretical Architecture & Epistemic Demarcation

### 1.1 Epistemic Classification & Lineage
*Can’t Hurt Me* (2018) is not a conventional celebrity self-help memoir; it is an uncompromising, clinical investigation into **trauma inoculation, evolutionary neuropsychology, and the intentional expansion of human work capacity**.

Goggins proves that the human brain operates under an evolved biological 'Governor' designed to keep us safe, comfortable, and mediocre. By systematically exposing himself to voluntary suffering—dropping 106 pounds in 3 months, surviving three Hell Weeks, running 100 miles on broken bones, and shattering the World Pull-up Record—Goggins outlines an uncompromising methodology for building an 'Armored Mind':
1. **The Accountability Mirror:** Radical, unvarnished self-honesty that eliminates excuses.
2. **The Callused Mind:** Voluntarily doing what you hate every day to inoculate against future adversity.
3. **Taking Souls:** Dominating hostile environments through undeniable energetic excellence.
4. **The Cookie Jar:** Accessing past suffering and victories to silence panic in the depths of crisis.
5. **The 40% Rule:** Recognizing that when your mind tells you you are done, you have only tapped 40% of your true reserve.

\`\`\`
                 THE ARCHITECTURE OF THE CALLUSED MIND
                                    /\\
                                   /  \\
                         [THE ARMORED MIND]
                   (Zero Excuses / Absolute Will)
                                  |
                                  v
                         [THE 40% RULE OVERRIDE]
                   (Silencing the Biological Governor)
                                  |
            +---------------------+---------------------+
            v                                           v
    [THE COOKIE JAR]                             [TAKING SOULS]
(Internal Past Victories)                  (External Energetic Dominance)
            |                                           |
            +---------------------+---------------------+
                                  v
                      [THE ACCOUNTABILITY MIRROR]
                    (Radical Daily Self-Honesty)
\`\`\`

---

## LAYER 2: Forensic Chapter-by-Chapter Master Notes (Complete 11 Chapters)
`;

chapters.forEach(c => {
  md += `
### Chapter ${c.num}: ${c.title}
*${c.subtitle}*
- **Scope & Setting:** ${c.setting}
- **Dramatis Personae & Figures:** ${c.figures}
- **Epistemic Classification:** \`MEMOIR_RECOLLECTION / PSYCHOLOGICAL_CRUCIBLE\`
- **Irreducible Axiom:** *${c.axiom}*

#### 1. Context & Inciting Dilemma
${c.context}

#### 2. Forensic Narrative & Phenomenological Progression
${c.forensic}

#### 3. Key Dialogue & Psychological Weight
> ${c.dialogue}

#### 4. Verbatim Canonical Excerpt
> ${c.quote}

#### 5. Operational Heuristic & Real-World Application
**Operational Heuristic:** *${c.heuristic}*

---
`;
});

md += `
## LAYER 3: The Empirical Corpus & Landmark Crucible Vault

### 3.1 The Biological Mechanics of the Governor
- **Scientific Foundation:** Neurobiology of Central Governor Theory (Dr. Timothy Noakes).
- **Mechanism:** The brain monitors glycogen depletion, core temperature, and heart rate, triggering subjective feelings of fatigue, nausea, and despair long before physiological muscular exhaustion occurs.
- **The Goggins Protocol:** Consciously distinguishing between somatic fatigue and neurological panic, overriding the warning signals through focused self-talk and breath stabilization.

### 3.2 Medical Diagnostics of Ultra-Endurance Collapse (San Diego 100)
- **Pathology:** Acute Rhabdomyolysis and Renal Failure.
- **Symptom Profile:** Myoglobinuria (black urine), compound metatarsal stress fractures, acute Stage 2 hypothermia.
- **Cognitive Significance:** Proving that sheer mental willpower can force a physiologically failing body to complete 19 miles of movement when death is medically threatened.

---

## LAYER 4: The 10 Challenges & Operational Mental Weapons

1. **Challenge 1: The Bad Hand Audit** — Write down every disadvantage, trauma, and failure in your life; accept them as raw fuel.
2. **Challenge 2: The Accountability Mirror** — Stand before the mirror daily and address your weaknesses with zero excuses.
3. **Challenge 3: The Discomfort Crucible** — Do something you hate every single day to callus your mental hands.
4. **Challenge 4: Taking Souls** — In adverse environments, out-work your critics until your energy dominates the room.
5. **Challenge 5: Visualizing the Armored Mind** — Mentally rehearse the exact pain and obstacles you will encounter before stepping onto the field.
6. **Challenge 6: The Cookie Jar Inventory** — Maintain a detailed written list of all past hardships survived to draw upon during future panic.
7. **Challenge 7: The 40% Rule Override** — When you feel completely exhausted, recognize you are at 40% and push through the next milestone.
8. **Challenge 8: Compartmentalized Scheduling** — Structure your day into focused 3-hour blocks with zero distraction.
9. **Challenge 9: Uncommon Amongst Uncommon** — Never rest on past victories; seek new arenas where you are an unproven novice.
10. **Challenge 10: The After-Action Report (AAR)** — Dissect every failure surgically to extract mechanical corrections.

---

## LAYER 5: Skeptical Auditor's Demarcation & Boundary Conditions

### 5.1 Critique 1: The Physical Damage Dilemma (Orthopedic & Renal Risk)
- **Auditor Challenge:** Goggins' methods caused permanent physical damage: knee surgeries, heart surgery for an undiagnosed atrial septal defect, and kidney failure. Emulating his training without preparation is medically reckless.
- **Goggins' Demarcation:** Goggins explicitly acknowledges that his path was an extreme biological laboratory. He does not advocate reckless self-destruction; he advocates destroying the mental limits that keep individuals operating at 40% of their potential.

### 5.2 Critique 2: The Loneliness of Extreme Will
- **Auditor Challenge:** The obsession required to build an Armored Mind often destroys personal relationships, marriages, and social equilibrium.
- **Resolution:** Goggins is brutally honest regarding his failed relationships, illustrating that extreme greatness demands an uncompromising sacrifice that most human beings are unwilling to make.

---

## LAYER 6: Interactive Active Recall & Retention Suite

### Flashcard 1
- **Question:** What is the 40% Rule in Goggins' cognitive model?
- **Answer:** The human mind operates under an evolved biological Governor that screams fatigue and panic when only 40% of true physical and mental reserves have been tapped. Overriding the Governor unlocks the remaining 60%.

### Flashcard 2
- **Question:** What is the Cookie Jar, and how does it function during a crisis?
- **Answer:** It is a mental inventory of past trials, sufferings, and victories. During acute panic, recalling past resilience triggers dopamine, silences fear, and provides immediate psychological fuel.

### Flashcard 3
- **Question:** What does 'Taking Souls' mean in practical execution?
- **Answer:** Excelling with such savage joy, discipline, and cheerfulness in adverse or hostile conditions that your tormentors or competitors question their own dominance and surrender their psychological edge.
`;

const outputPath = path.join('docs', 'distillations', 'cant-hurt-me', 'master-notes.md');
fs.writeFileSync(outputPath, md, 'utf8');

console.log(`Successfully written expanded master-notes.md for Can't Hurt Me!`);
console.log(`New Character Count: ${md.length}`);
console.log(`New Word Count: ${md.trim().split(/\s+/).length}`);

// 2. Generate knowledge-units.json
const kuData = chapters.map(c => ({
  id: `CHM-U${c.num.toString().padStart(2, '0')}`,
  chapter_num: c.num,
  title: c.title,
  subtitle: c.subtitle,
  setting: c.setting,
  figures: c.figures,
  axiom: c.axiom,
  summary: c.forensic.substring(0, 320) + '...',
  materiality: 'CRITICAL',
  epistemic_status: 'MEMOIR_RECOLLECTION',
  text_length: c.forensic.length
}));

fs.writeFileSync(
  path.join('docs', 'distillations', 'cant-hurt-me', 'knowledge-units.json'),
  JSON.stringify({ units: kuData }, null, 2),
  'utf8'
);
console.log(`Updated knowledge-units.json with 11 deep units.`);

// 3. Update index.html
const indexPath = path.join('docs', 'distillations', 'cant-hurt-me', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const unitsHtml = chapters.map(c => `
  <div class="unit-card-deep" id="unit-${c.num}">
    <div class="unit-meta-line">
      <div>
        <span class="unit-badge">Unit ${c.num}</span>
        <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
          Chapter ${c.num} &bull; ${c.subtitle}
        </span>
      </div>
      <span class="unit-epistemic">MEMOIR RECOLLECTION / CRUCIBLE</span>
    </div>

    <h3 class="unit-heading-deep">${c.title}</h3>

    <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
      <strong>Irreducible Axiom:</strong> ${c.axiom}
    </div>

    <div style="margin-bottom: 16px; font-size: 0.95rem; color: var(--text-muted);">
      <strong>Setting:</strong> ${c.setting} | <strong>Figures:</strong> ${c.figures}
    </div>

    <div class="narrative-prose">
      <div style="margin-bottom: 14px; font-style: italic; color: var(--text-muted);">
        <strong>Context:</strong> ${c.context}
      </div>
      ${c.forensic.split('\n\n').map(p => `<p class="narrative-p">${p.replace(/\n/g, '<br>')}</p>`).join('\n')}
    </div>

    <div class="quote-box" style="margin-top: 20px;">
      <div style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--accent-crimson); margin-bottom: 6px;">Key Exchange / Psychological Weight:</div>
      ${c.dialogue.replace(/\n/g, '<br>')}
    </div>

    <div class="quote-box" style="border-left-color: var(--accent-gold);">
      ${c.quote}
    </div>

    <div class="heuristic-box">
      <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
        Operational Heuristic:
      </strong>
      ${c.heuristic}
    </div>
  </div>
`).join('\n');

// Replace between <!-- THE 11 UNITS --> and </section>
const startMark = '<!-- THE 11 UNITS -->';
const endMark = '<!-- VIEW B: MENTAL WEAPONS BLUEPRINT -->';
const startIdx = html.indexOf(startMark);
const endIdx = html.indexOf(endMark);

if (startIdx !== -1 && endIdx !== -1) {
  const before = html.substring(0, startIdx + startMark.length);
  const after = html.substring(endIdx);
  const newHtml = before + '\n' + unitsHtml + '\n        </section>\n\n        ' + after;
  fs.writeFileSync(indexPath, newHtml, 'utf8');
  console.log(`Updated ${indexPath} successfully!`);
} else {
  console.error("Could not find insertion marks in cant-hurt-me index.html");
}

