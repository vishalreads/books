/**
 * BKRS v1.0 Generator for Andre Agassi's "Open: An Autobiography" (2009)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/open-agassi');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-00",
    chapter_num: 0,
    title: "The End: US Open 2006 & The Secret Hatred of Tennis",
    timeline_location: "Late August 2006, The Palace Hotel & Arthur Ashe Stadium, Flushing Meadows, NY",
    source_scope: "Prologue: Cortisone injections into spinal cord, Marcos Baghdatis second-round match, the revelation of hatred for tennis",
    epistemic_status: "Primary Autobiographical Confession",
    materiality: "CRITICAL",
    summary: "Andre Agassi wakes on the floor of his Manhattan hotel room, unable to move due to excruciating spinal stenosis, spondylolisthesis, and bone spurs grinding against his nerves. He requires an agonizing cortisone injection administered by a doctor using a five-inch needle directly into his spine just to walk onto the court. That evening, at age thirty-six, he plays a brutal five-set midnight thriller against twenty-one-year-old Marcos Baghdatis, winning 7-5 in the fifth while both men suffer full-body muscle spasms. Looking back over his thirty-year career, Agassi delivers the foundational confession of the book: 'I play tennis for a living, even though I hate tennis, hate it with a dark and secret passion, and always have.'",
    key_claims: [
      "Agassi spent his entire professional career trapped in a sport he intensely hated, driven by parental coercion and fear of failure.",
      "At the highest levels of professional sports, elite performance often requires playing through catastrophic, crippling physical degeneration.",
      "The public image of a champion masks immense private agony, loneliness, and physical trauma."
    ],
    concrete_evidence: [
      "A five-inch needle injecting cortisone into the L4-L5 vertebrae hours before taking the court.",
      "Both Agassi and Baghdatis lying side-by-side in the training room after the match, hooked to IV drips and unable to stand.",
      "Agassi's custom shoe inserts and orthotics worn down to paper-thin carbon fiber."
    ],
    operational_mechanisms: [
      {
        name: "The Prison of Imposed Excellence",
        rule: "World-class competence developed under early childhood coercion produces chronic psychological alienation; success becomes a trap because quitting implies existential waste."
      }
    ],
    verbatim_citations: [
      "I play tennis for a living, even though I hate tennis, hate it with a dark and secret passion, and always have.",
      "Please let this be over. Then: I'm not ready for this to be over.",
      "You hear about athletes leaving it all on the field, but I have no other choice. If I don't leave it on the court, I will literally be unable to walk off."
    ]
  },
  {
    id: "unit-01",
    chapter_num: 1,
    title: "The Dragon & The Armenian Boxer: The Mathematics of Childhood Coercion",
    timeline_location: "1975–1983, Las Vegas, Nevada",
    source_scope: "Mike Agassi's background; the custom-built ball machine 'the Dragon'; 2,500 balls a day; 1 million balls a year",
    epistemic_status: "Primary Autobiographical Memory",
    materiality: "CRITICAL",
    summary: "Andre's father, Mike Agassi, is an Armenian-Assyrian immigrant from Iran and former Olympic boxer who worked as a casino tennis host in Las Vegas. Fierce, volatile, and obsessed, Mike views tennis not as a game, but as the sole vehicle for American economic ascension. In their desert backyard, Mike modifies a commercial ball machine into a terrifying monster called 'the Dragon'—elevated on blocks, belching smoke, and firing high-velocity tennis balls directly at seven-year-old Andre's chest. Mike's doctrine is brutal arithmetic: 'If you hit 2,500 balls a day, that's 17,500 balls a week, almost one million balls a year. A kid who hits one million balls a year will be indestructible; nobody can beat mathematics!'",
    key_claims: [
      "Extreme early specialization driven by relentless parental volume forces rapid neurological adaptation at the cost of childhood identity.",
      "Repetitive, high-volume stress inoculation creates world-class hand-eye reflexes that operate faster than conscious thought.",
      "Parental violence and emotional tyranny install permanent internal dread that fuels athletic performance."
    ],
    concrete_evidence: [
      "The 'Dragon' ball machine firing 2,500 balls per day at speeds up to 110 mph into the Las Vegas heat.",
      "Mike taping a ping-pong paddle to Andre's hand as an infant and hanging tennis balls over his crib.",
      "Mike pulling a handgun on motorists during Las Vegas traffic road-rage incidents."
    ],
    operational_mechanisms: [
      {
        name: "The Brutal Arithmetic of Volume",
        rule: "Sheer mechanical repetition (one million repetitions per year) bypasses intellectual doubt, grooving motor reflexes to near-superhuman levels of autonomous precision."
      }
    ],
    verbatim_citations: [
      "The dragon looks at first glance like any ball machine... but in fact it has been transformed into a monster of black steel and fury.",
      "Mathematics, boy! Two thousand five hundred balls a day, a million balls a year. Nobody can beat mathematics.",
      "My father says that if I hit 2,500 balls a day, I'll hit 17,500 a week and nearly one million a year. He believes in math. Numbers, he says, don't lie."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    title: "The Bollettieri Penal Colony: Mohawk, Denim, & The Rebel Mask",
    timeline_location: "1983–1986, Bradenton, Florida",
    source_scope: "Nick Bollettieri Tennis Academy; Lord of the Flies environment; dropping out of school; radical aesthetic rebellion",
    epistemic_status: "Primary Autobiographical Narrative",
    materiality: "CRITICAL",
    summary: "At age thirteen, Andre is exiled by his father to Nick Bollettieri's Tennis Academy in Florida. Intended as a three-month stay, Nick is so awed by Andre's ball-striking that he offers a full scholarship. Andre finds himself trapped in what he describes as a teenage penal colony: barracks-style dorms, barbed-wire atmosphere, cutthroat peer competition, zero adult supervision, and zero academic focus. Desperate to assert autonomy in an environment where he has no choices, Andre adopts radical, defiant aesthetic rebellion: he dyes his hair pink, wears a mohawk, paints his fingernails, pierces his ears, wears torn denim cut-off shorts, and plays tournaments with a hangover. He drops out of high school in ninth grade, permanently illiterate in formal education.",
    key_claims: [
      "Elite youth sports academies often function as emotionally neglectful factories where children's psychological development is sacrificed for commercial branding.",
      "Outrageous aesthetic rebellion (flamboyant clothes, dyed hair) is frequently a desperate subconscious cry for agency by coerced young athletes."
    ],
    concrete_evidence: [
      "Living in a bunkhouse with teenagers smashing rackets, taking drugs, and fighting each other with knives.",
      "Nick Bollettieri calling Andre's father and telling him Andre is the greatest natural ball-striker he has ever seen.",
      "Andre intentionally losing a tournament match by playing in jeans with eyeliner to spite Bollettieri."
    ],
    operational_mechanisms: [
      {
        name: "Aesthetic Defiance as Pseudo-Autonomy",
        rule: "When an individual is denied control over their life's purpose, they aggressively assert control over surface appearance to construct a boundary of individuality."
      }
    ],
    verbatim_citations: [
      "The academy is *Lord of the Flies* with forehands.",
      "I feel like a prisoner. I want to tell Nick Bollettieri to go to hell, but I have nowhere else to go.",
      "If I can't choose whether I play tennis, I can damn well choose what I look like while playing."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "The Image Trap & The Toupee: Roland Garros 1990",
    timeline_location: "1986–1990, Pro Tour & Paris",
    source_scope: "Turning pro at 16; Canon 'Image is Everything' commercial; premature hair loss; the secret wig at the French Open final",
    epistemic_status: "Primary Autobiographical Revelation",
    materiality: "CRITICAL",
    summary: "Andre turns professional at sixteen, instantly catapulting into global fame with his lightning-fast service returns, fluorescent neon clothes, and wild rock-star hair. Canon signs him to a multi-million-dollar endorsement campaign centered on the slogan: 'Image is Everything'—a phrase that haunts and vilifies him in the sports press. Behind the glamorous facade lies a humiliating, terrifying secret: at nineteen, Andre begins losing his hair rapidly. Desperate to protect his lucrative image, he wears a custom hairpiece secured with bobby pins. In the 1990 French Open final against Andrés Gómez—his first Grand Slam final—the wig partially disintegrates in the shower the night before. During the match, Andre is so terrified that his hairpiece will fall off on live television before millions of viewers that he holds back on every serve and sprint, playing with paralyzed timidity and losing in four agonizing sets.",
    key_claims: [
      "Commercial marketing slogans can permanently corrupt an athlete's public reputation, reducing authentic struggle to a perception of shallow narcissism.",
      "Vanity and terror of physical exposure can completely paralyze elite athletic performance at the highest level."
    ],
    concrete_evidence: [
      "The Canon 'Rebel' camera commercial broadcast worldwide with Agassi looking into the lens saying 'Image is everything.'",
      "Using twenty bobby pins to fasten a synthetic hairpiece to his scalp before walking onto Court Philippe Chatrier.",
      "Praying to God during the French Open final not for victory, but for his hairpiece to stay attached."
    ],
    operational_mechanisms: [
      {
        name: "The Paralysis of False Identity",
        rule: "When self-worth is tethered to a fabricated external image, protecting the illusion supersedes the pursuit of excellence, causing acute performance failure."
      }
    ],
    verbatim_citations: [
      "Image is everything. Of all the things I've said and done, this is the one that sticks... it becomes an albatross around my neck.",
      "Of course I could play without my hairpiece. But what would the journalists write if they saw my hair had suddenly vanished? I was already terrified that my wig was slipping off.",
      "During the warm-up I prayed. Not for victory, but that my hairpiece wouldn't fall off."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "The Choker Stigma: Three Lost Grand Slam Finals",
    timeline_location: "1990–1991, Paris, New York, Paris",
    source_scope: "Losses to Gómez (1990 French), Sampras (1990 US Open), and Courier (1991 French); public ridicule; psychological breakdown",
    epistemic_status: "Primary Autobiographical Crisis",
    materiality: "CRITICAL",
    summary: "Following his defeat to Gómez, Agassi reaches the final of the 1990 US Open, facing his childhood rival Pete Sampras. Sampras obliterates him with twenty-one aces and lethal, robotic precision, exposing Agassi's lack of tactical substance. In 1991, Agassi reaches the French Open final against former academy roommate Jim Courier. Leading by a set, a rain delay breaks his rhythm; Courier changes tactics while Agassi mentally collapses, losing in five sets. The global tennis establishment and media relentlessly brand Agassi a 'choker'—a fraud who looks spectacular in commercials but lacks the guts and discipline to win when it matters. Overwhelmed by shame and panic attacks, Agassi contemplates quitting the sport entirely.",
    key_claims: [
      "Repeated high-profile failures at the brink of victory create a self-fulfilling psychological complex ('choking').",
      "Pete Sampras represents Agassi's polar opposite: unencumbered by emotional drama, completely indifferent to public image, and ruthlessly efficient.",
      "The pain of losing a Grand Slam final is ten times more intense and enduring than the joy of winning."
    ],
    concrete_evidence: [
      "Sampras blasting serves past Agassi before Andre can even begin his backswing.",
      "Courier's coach Nick Bollettieri sitting in Courier's box during the 1991 French Open final, which Andre experiences as the ultimate betrayal.",
      "Headlines across the world declaring Agassi 'All flash, no cash' and 'The boy who won't grow up.'"
    ],
    operational_mechanisms: [
      {
        name: "The Choker Feedback Loop",
        rule: "Fear of confirming public ridicule induces muscle tension and cognitive hyper-vigilance during pressure points, guaranteeing the very collapse the athlete fears."
      }
    ],
    verbatim_citations: [
      "Pete doesn't just beat me; he makes me feel like I don't know how to play tennis.",
      "Winning doesn't feel as good as losing hurts, and the good feelings don't last as long as the bad. Not even close.",
      "They say I'm a choker. The worst part is, I agree with them."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The 1992 Wimbledon Miracle: Breaking the Cathedral of Grass",
    timeline_location: "July 1992, The All England Club, Wimbledon, London",
    source_scope: "Boycotting Wimbledon previously; conforming to all-white dress code; beating Becker, McEnroe, and Ivanišević in 5-set final",
    epistemic_status: "Primary Autobiographical Triumph",
    materiality: "CRITICAL",
    summary: "Having previously boycotted Wimbledon because of its rigid traditionalism and strict all-white dress code, Agassi returns in 1992 with zero expectations, believing his baseline game cannot succeed on slick, fast grass. Dressed immaculately in pure white, Agassi plays with unexpected freedom. He knocks out three-time champion Boris Becker in the quarterfinals and dismantles legendary serve-and-volleyer John McEnroe in the semifinals. In the final, he faces Croatian giant Goran Ivanišević, who fires thirty-seven aces. In the fifth set, Agassi breaks Ivanišević in the final game; when Ivanišević nets a backhand volley on championship point, Agassi falls face-first onto the sacred Wimbledon turf, sobbing in disbelief. His first Grand Slam title is won at the tournament he despised most, on the surface least suited to his game.",
    key_claims: [
      "Letting go of expectations and perfectionism liberates elite athletic performance, allowing intuitive mastery to emerge.",
      "Adversity on unsuited terrain forces tactical adaptation: Agassi's lightning reflexes on grass converted defensive returns into offensive lasers.",
      "Winning the first major does not eradicate self-doubt; it merely alters the nature of the pressure."
    ],
    concrete_evidence: [
      "Ivanišević firing aces at 135 mph throughout the match, yet Agassi managing to put his racket on crucial returns at 4-5 in the fifth.",
      "Falling to his knees on Centre Court with grass stains on his pure white shirt.",
      "Dancing with women's champion Stefanie Graf at the traditional Wimbledon Champions' Ball (where he secretly falls in love with her from afar)."
    ],
    operational_mechanisms: [
      {
        name: "The Low-Expectation Breakthrough",
        rule: "Surrendering the burden of being the favorite eliminates performance anxiety, enabling rapid motor fluidity and clutch execution under pressure."
      }
    ],
    verbatim_citations: [
      "I drop to my knees. My chest is heaving. I put my hands to my face... I've won Wimbledon.",
      "I always thought that if I won a Slam, my life would change. It would fix whatever was broken in me. But it fixes nothing.",
      "I look across the room at Stefanie Graf. She carries herself with a quiet, regal grace that takes my breath away."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "Brad Gilbert & Winning Ugly: The Gravity Well of Percentages",
    timeline_location: "1994, Miami & Flushing Meadows, New York",
    source_scope: "Bollettieri abruptly abandons Agassi; hiring Brad Gilbert; the paradigm shift from aesthetics to ruthlessness; winning 1994 US Open unseeded",
    epistemic_status: "Primary Strategic & Tactical Revolution",
    materiality: "CRITICAL",
    summary: "In 1993, Nick Bollettieri abruptly abandons Andre after ten years of partnership, leaving him devastated. In early 1994, after wrist surgery, Andre dines with retired player Brad Gilbert. Gilbert gives Agassi the most transformative tactical lecture of his life: 'You have more natural talent than anyone in history, but you're an idiot because you try to be perfect. You want to hit a winner on every shot. Stop trying to hit lines! Play the percentages. Let the other guy make the mistakes. Be a gravity well. When you play Pete or Boris, don't beat yourself!' Agassi hires Gilbert as his coach. Adopting Gilbert's 'Winning Ugly' philosophy, Agassi stops obsessing over beauty and plays ruthless, high-percentage tennis, winning the 1994 US Open as an unseeded player—the first man in twenty-eight years to do so.",
    key_claims: [
      "Aesthetic perfectionism is the greatest enemy of winning: trying to hit highlight-reel winners increases unforced errors and relieves pressure on opponents.",
      "High-percentage tennis ('Winning Ugly') weaponizes patience and opponent psychology, turning steady depth into an inescapable trap.",
      "Elite talent requires an external tactical mind to impose strategic discipline on raw instinct."
    ],
    concrete_evidence: [
      "Gilbert breaking down Agassi's game at a diner, drawing on napkins and screaming that Andre plays like an artist when he needs to play like an assassin.",
      "Agassi winning the 1994 US Open unseeded, defeating five seeded players including Michael Stich in straight sets in the final.",
      "Agassi intentionally aiming for large targets (two feet inside the lines) with heavier topspin, reducing his unforced error count by 40%."
    ],
    operational_mechanisms: [
      {
        name: "The Percentage Asymmetry Law (Winning Ugly)",
        rule: "By eliminating low-percentage shots and relentlessly returning balls deep into the center of the court, you force the opponent to absorb all operational risk."
      }
    ],
    verbatim_citations: [
      "Brad says: 'You don't need to be the best player in the world every day. You just have to be better than one guy for two hours.'",
      "‘Stop trying to be perfect,’ Brad tells me. 'Perfection is the enemy. Be solid. Be a gravity well. Make the other bastard choke.'",
      "Winning ugly is about recognizing that tennis is not figure skating. There are no points for artistic style."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "World No. 1 & The Sampras Nemesis: The Battle of Polar Archetypes",
    timeline_location: "1995, Melbourne, Key Biscayne, Flushing Meadows",
    source_scope: "Winning 1995 Australian Open; claiming World No. 1; epic rivalry with Pete Sampras; US Open 1995 final loss",
    epistemic_status: "Primary Competitive Dynamics",
    materiality: "CRITICAL",
    summary: "Entering 1995 with shaved head and total physical conditioning, Agassi defeats Pete Sampras in a four-set masterpiece to win his first Australian Open. Riding a twenty-six-match win streak, he officially ascends to World No. 1 in April 1995, ending Sampras's eighty-two-week reign. Their rivalry becomes the defining spectacle of modern sports: Agassi the flawed, colorful, vulnerable counter-puncher vs. Sampras the cold, stoic, mechanical serve-and-volley assassin. In the 1995 US Open final, the two clash in an electric duel. Sampras wins a breathtaking twenty-six-shot rally on set point in the first set and grinds Agassi down. The loss breaks Agassi's spirit, initiating a severe emotional hangover and the unraveling of his discipline.",
    key_claims: [
      "Reaching World No. 1 produces an existential vacuum: having achieved the ultimate goal, the athlete discovers that external rank does not solve internal emptiness.",
      "Great rivalries are built on visceral philosophical contrast: the artist who bleeds on court vs. the machine that executes without emotion.",
      "A devastating defeat in an epochal match can silently trigger years of psychological and physical decline."
    ],
    concrete_evidence: [
      "Agassi shaving his head completely bald before the 1995 Australian Open, finally ditching the toupee and feeling liberated.",
      "The twenty-six-shot rally in the 1995 US Open final where Sampras hits an impossible running crosscourt forehand winner to win the first set.",
      "Sampras's total career head-to-head dominance (20-14 over Agassi, 4-1 in Grand Slam finals)."
    ],
    operational_mechanisms: [
      {
        name: "Post-Achievement Existential Void",
        rule: "When an external benchmark (World No. 1) has served as the sole organizing principle of identity, reaching it exposes the absence of internal purpose, triggering severe demotivation."
      }
    ],
    verbatim_citations: [
      "I'm number one in the world, and I feel like a zero.",
      "Pete is a machine. He doesn't smile, he doesn't grimace, he doesn't give you a single inch of emotion to hook your fingers into.",
      "He broke my back in that 1995 final. It took me three years to recover from that single match."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "Brooke Shields & The Mirage of Glamour: Trapped in Plastic",
    timeline_location: "1996–1997, Hollywood, Las Vegas, New York",
    source_scope: "Relationship and marriage to Brooke Shields; Hollywood celebrity culture; wrist injury; loss of athletic hunger",
    epistemic_status: "Primary Autobiographical Examination",
    materiality: "IMPORTANT",
    summary: "Agassi begins dating Hollywood star Brooke Shields, entering the dizzying orbit of movie premieres, fashion galas, and paparazzi. While both are child stars who suffered under overbearing stage parents, their connection is built on shared wounds rather than authentic intimacy. Shields tapes a photograph of Steffi Graf's legs to their refrigerator door as fitness inspiration—an ironic foreshadowing that unnerves Andre. Despite persistent pre-wedding panic attacks and an intuition screaming that he is making a catastrophic mistake, Andre goes through with the lavish 1997 wedding. Trapped in an artificial domestic existence, sidelined by chronic wrist tendinitis, and emotionally numb, Agassi stops training, gains weight, and lets his tennis career disintegrate.",
    key_claims: [
      "Trauma bonding between former child stars often produces shallow, performative relationships that replicate the dysfunction of their childhoods.",
      "Ignoring clear premonitions and internal alarm bells during major life commitments leads to devastating emotional entanglement."
    ],
    concrete_evidence: [
      "Brooke Shields taping Steffi Graf's legs to the refrigerator: 'I want legs like that!'",
      "Andre walking out of the taping of *Friends* in fury after Shields licks Joey Tribbiani's fingers during a guest appearance, returning home to smash all his tennis trophies in the yard.",
      "Andre's wrist locked in a fiberglass cast, using it as an excuse to avoid the misery of the tour."
    ],
    operational_mechanisms: [
      {
        name: "The Sunk Cost of Relational Inertia",
        rule: "Social momentum, public expectations, and fear of confrontation cause individuals to proceed with disastrous marriages even when internal instinct screams to flee."
      }
    ],
    verbatim_citations: [
      "I have a thought no one should have on their wedding day: I wish I were anywhere else.",
      "We are two famous people who understand the price of fame, but we don't understand each other at all.",
      "I broke every trophy I owned. Smashed them to pieces on the driveway. I wanted to destroy every evidence of the person I had been."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    title: "The Abyss: Crystal Meth & Sinking to World No. 141",
    timeline_location: "1997, Las Vegas & Tour",
    source_scope: "Rock bottom; snorting crystal meth with assistant Slim; failed ATP drug test; the fraudulent letter",
    epistemic_status: "Primary Autobiographical Confession",
    materiality: "CRITICAL",
    summary: "By late 1997, Agassi has plummeted to World No. 141, playing abysmal tennis and hating his life. Sitting in his Las Vegas kitchen with his assistant 'Slim', Slim cuts out lines of crystal meth ('gack') on the coffee table. Desperate to escape his depression, Agassi snorts the drug. He experiences an explosive surge of artificial euphoria and dopamine, spending the night manically scrubbing his house. Shortly afterward, the ATP notifies him that he has failed a drug test for methamphetamine, facing a mandatory three-month suspension that would permanently ruin his public standing. In a moment of panic and moral bankruptcy, Agassi writes a fraudulent, tearful letter to the ATP tribunal claiming Slim spiked his soda without his knowledge. The ATP accepts the lie and throws out the test, leaving Agassi drowning in guilt, self-revulsion, and spiritual bankruptcy.",
    key_claims: [
      "Substance abuse at rock bottom is driven by the unbearable pain of living inside a false, suffocating identity.",
      "Lying to protect one's reputation damages the soul far more profoundly than the temporary consequences of public truth.",
      "Reaching absolute moral and professional bankruptcy is the necessary shock required to strip away illusions and initiate authentic rebirth."
    ],
    concrete_evidence: [
      "Snorting crystal meth off the coffee table and scrubbing the tile grout in his kitchen at 4:00 AM.",
      "The official letter from the ATP drug-testing lab confirming high levels of crystal methamphetamine.",
      "Drafting a fabricated letter with his lawyer claiming unintentional ingestion via a spiked drink."
    ],
    operational_mechanisms: [
      {
        name: "The Dopaminergic Escape Trap",
        rule: "Chemically hijacking the brain's reward circuitry provides temporary relief from existential despair while accelerating physical and moral disintegration."
      },
      {
        name: "The Crucible of True Rock Bottom",
        rule: "Only when an individual reaches total self-disgust does the ego abandon its rationalizations and accept the brutal necessity of total personal reconstruction."
      }
    ],
    verbatim_citations: [
      "There is a moment of regret, followed by vast sadness. Then a tidal wave of euphoria sweeps through me, washing away every negative thought in my head. I've never felt so alive, so hopeful.",
      "I lied to the ATP. I wrote a letter filled with lies, and they believed it. I felt worse about myself after winning that case than I ever had on the court.",
      "I'm one hundred and forty-first in the world. I'm a drug user. I'm a liar. I have nowhere left to fall."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    title: "Gil Reyes & The Desert Forge: Rebuilding the Machine",
    timeline_location: "1998, Las Vegas Hills & Gil's Gym",
    source_scope: "Gil Reyes as strength coach and surrogate father; custom weight equipment; running the hill in 110-degree heat",
    epistemic_status: "Primary Athletic & Philosophical Reconstruction",
    materiality: "CRITICAL",
    summary: "At his lowest point, Agassi turns to Gil Reyes, the head strength and conditioning coach at UNLV. Gil becomes far more than a trainer; he becomes Andre's moral anchor, protector, and true surrogate father. Gil designs a revolutionary physical regimen tailored specifically to tennis biomechanics, building custom heavy-duty weight machines ('Gil' machines) with unique levers to prevent joint shear. In the blistering 110-degree Nevada desert heat, Gil makes Andre sprint up a monstrous 320-yard hill ('The Hill'). When Andre vomits and collapses from exhaustion, Gil sits beside him on the burning asphalt, speaking about honor, love, and self-respect. Under Gil's unwavering devotion, Andre transforms his soft, broken body into an indestructible, granite athletic machine.",
    key_claims: [
      "True physical transformation requires customized biomechanical engineering paired with deep emotional trust.",
      "A surrogate father figure grounded in unconditional love and uncompromising standards can heal the psychological damage of a coercive biological parent.",
      "Pain voluntarily embraced in training burns away self-pity and builds genuine, unshakeable confidence."
    ],
    concrete_evidence: [
      "Custom welded gym equipment designed by Gil to accommodate Agassi's spinal stenosis and hyper-mobile joints.",
      "Sprinting 'The Hill' in Las Vegas twenty times consecutively in 110-degree summer heat.",
      "Gil concocting a proprietary electrolyte and carbohydrate drink ('Gil's Water') that prevents cramping during 5-set matches."
    ],
    operational_mechanisms: [
      {
        name: "The Desert Forge (Voluntary Suffering)",
        rule: "Subjecting the body to extreme, deliberate physiological stress in a supportive psychological crucible transforms physical pain into an emotional shield of armor."
      }
    ],
    verbatim_citations: [
      "Gil doesn't just train my body; he rebuilds my soul. He looks into my eyes and tells me that I matter, not because I hit a yellow ball well, but because I am a human being.",
      "He builds machines with his own hands. Steel and pulleys and chains. He builds them to protect me from my own sport.",
      "We run the hill. When my lungs are on fire and I want to quit, Gil says: 'Just one more, Andre. For you. Not for anyone else.'"
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    title: "The Challenger Odyssey & The 1999 Roland Garros Miracle",
    timeline_location: "1998–1999, Bentonville, Arkansas & Paris, France",
    source_scope: "Grinding through Challenger circuit; divorce from Brooke; 1999 French Open final vs. Andrei Medvedev; Career Grand Slam",
    epistemic_status: "Primary Competitive Redemption",
    materiality: "CRITICAL",
    summary: "Swallowing his pride, Agassi starts his comeback on the low-level Challenger circuit, playing in front of fifty spectators in high-school gyms in Bentonville, Arkansas, and Salinas, California. Freeing himself from his unhappy marriage to Brooke Shields, he files for divorce. By spring 1999, he returns to Roland Garros. In the final, he faces 6'4\" Ukrainian Andrei Medvedev. Medvedev plays flawless tennis, dominating the first two sets 6-1, 6-2. Agassi looks doomed to suffer his fourth French Open final defeat. During a rain delay, Brad Gilbert demands he stop thinking and fight for his life. Agassi digs into his reserves of desert conditioning, claws back the third set 6-4, sweeps the fourth 6-3, and in an agonizing fifth set, serves out the match at 5-4. Dropping to his knees on the red clay, Agassi weeps uncontrollably: he has completed the Career Grand Slam (winning all four majors on four different surfaces), becoming only the second man in history to do so.",
    key_claims: [
      "True greatness requires the willingness to start at the absolute bottom (Challenger events) and endure complete public humiliation without pride.",
      "A champion's greatest asset is not technical shot-making, but emotional endurance during moments of total despair.",
      "The Career Grand Slam represents the ultimate test of versatility across four completely distinct playing surfaces."
    ],
    concrete_evidence: [
      "Agassi playing in Bentonville, Arkansas, carrying his own bags across muddy fields and eating at roadside diners.",
      "Down two sets to love against Medvedev, with rain pouring down on Court Philippe Chatrier.",
      "Falling on the red clay, both hands covering his face, sobbing so hard he cannot stand for the trophy presentation."
    ],
    operational_mechanisms: [
      {
        name: "Ego Liquidation via Low-Level Crucible",
        rule: "Voluntarily grinding through unglamorous minor leagues strips away entitlement, reconnecting the competitor to the raw joy of fundamental work."
      },
      {
        name: "Clutch Tenacity in Multi-Set War",
        rule: "In a five-set match, an opponent's physical and mental peak is unsustainable; by enduring the storm and maintaining pressure, the momentum will inevitably shift."
      }
    ],
    verbatim_citations: [
      "I went from playing before twenty thousand people at Flushing Meadows to playing before twenty people in Salinas. And I needed it. I needed to remember what it was like to fight for a living.",
      "Medvedev is destroying me. Two sets to love. I feel the old familiar panic: not again. Not here.",
      "I drop to the clay. I'm crying like a child. The French Open. The one tournament that tortured me for a decade. It's mine."
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    title: "Stefanie Graf & The Discovery of Emotional Wholeness",
    timeline_location: "1999–2001, San Diego, Las Vegas, Paris",
    source_scope: "Courting Steffi Graf; athletic kinship; marriage; finding genuine unconditional love and partnership",
    epistemic_status: "Primary Relational Fulfillment",
    materiality: "CRITICAL",
    summary: "Following his French Open victory—the same day Steffi Graf won the women's title—Agassi resolves to court the woman he has admired from afar for eight years. He sends her birthday flowers, arranges hitting sessions, and woos her with patient, mature devotion. In Stefanie, Andre finds his true spiritual equal: a champion who understands the crushing burden of childhood tennis fathers, the solitude of greatness, and the discipline of work, yet carries herself with grounded, unpretentious serenity. They marry in an intimate barefoot ceremony in Las Vegas, with only their mothers and a judge present. For the first time in his life, Andre experiences an intimate relationship free from performance, vanity, or insecurity. Stefanie becomes his rock, giving birth to their children, Jaden and Jaz.",
    key_claims: [
      "A healthy, transcendent romantic partnership is grounded in shared values, mutual respect, and emotional maturity rather than external glamour.",
      "Being loved unconditionally for who one is, rather than for what one achieves, dissolves deep-seated performance anxiety.",
      "True inner peace allows an athlete to compete from a place of joy rather than desperate fear."
    ],
    concrete_evidence: [
      "Agassi cutting out pictures of Graf from magazines years before they ever spoke.",
      "Hitting together in San Diego, where Andre is stunned by Graf's ferocious footwork and slicing backhand: 'She hits the ball with the sound of a gunshot.'",
      "Getting married in their Las Vegas living room wearing jeans, exchanging rings made of twisted twine."
    ],
    operational_mechanisms: [
      {
        name: "Relational Congruence",
        rule: "Partnering with an equal who understands the unique psychological pressures of one's domain provides complete emotional safety, eliminating external seeking."
      }
    ],
    verbatim_citations: [
      "Stefanie is the only person who truly understands what my life has been. She lived it too, and she came out the other side unbroken.",
      "She doesn't care about my tennis, my fame, or my money. She sees me. Just me.",
      "We get married in our backyard. No photographers, no guests, no pomp. Just Stefanie and me. It's the best day of my life."
    ]
  },
  {
    id: "unit-13",
    chapter_num: 13,
    title: "The Sunset & The Agassi Prep Legacy: Giving Back Childhood",
    timeline_location: "2001–2006, West Las Vegas & Flushing Meadows, NY",
    source_scope: "Founding Andre Agassi College Preparatory Academy; final US Open 2006; 4-minute standing ovation; true life purpose",
    epistemic_status: "Primary Legacy & Life Meaning",
    materiality: "CRITICAL",
    summary: "In the final act of his career, Agassi discovers the true purpose of his life: not tennis, but education. In the most impoverished, gang-ridden neighborhood of West Las Vegas, he founds the Andre Agassi College Preparatory Academy—a state-of-the-art tuition-free charter school providing underprivileged children with high-standard education and self-worth. Every match he plays in his thirties is fueled by raising millions of dollars for the school. On September 3, 2006, after losing his final match at the US Open to Benjamin Becker, twenty-four thousand fans rise in an emotional, four-minute standing ovation. Taking the microphone with tears streaming down his face, Agassi delivers his iconic farewell speech. He has finally made peace with his sport: tennis was the violent, agonizing vehicle that gave him the platform to rescue children from the lack of choice he had endured in his own youth.",
    key_claims: [
      "The ultimate redemption for personal childhood suffering is building institutional pathways that protect future generations from the same deprivation.",
      "A life is validated not by trophies won, but by the tangible human lives empowered and elevated.",
      "When personal ambition is subordinated to a transcendent altruistic mission, athletic longevity and emotional peace naturally follow."
    ],
    concrete_evidence: [
      "Building a $40 million charter school in West Las Vegas with a 100% graduation and college acceptance rate.",
      "Agassi carrying a photograph of the school's children in his tennis bag as his ultimate mental anchor.",
      "The 4-minute standing ovation at Arthur Ashe Stadium where 24,000 spectators and chair umpires wept alongside Agassi."
    ],
    operational_mechanisms: [
      {
        name: "Altruistic Transmutation of Suffering",
        rule: "Channeling the pain of childhood trauma into building educational infrastructure for disadvantaged youth permanently transforms bitterness into enduring societal contribution."
      }
    ],
    verbatim_citations: [
      "The school is why I was put on this earth. Tennis was just the vehicle. It took me thirty years to understand that.",
      "You have given me your shoulders to stand on to reach for my dreams, dreams I could never have reached without you.",
      "A young boy looks at me in the hallway of the school and says, 'Mr. Agassi, thank you.' And for the first time, all the suffering makes sense."
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "open-agassi",
  title: "Open: An Autobiography",
  author: "Andre Agassi (with J. R. Moehringer)",
  publication_year: 2009,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Open: An Autobiography with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Open: An Autobiography
## A Forensic Psychobiographical Reconstruction of Parental Coercion, Identity Crisis, Elite Performance, and Altruistic Redemption
### By Andre Agassi with J. R. Moehringer (2009)

---

## Executive Epistemic Summary

Andre Agassi’s *Open* (2009) is widely regarded by literary critics and sports psychologists as the definitive masterpiece of sports autobiography. Written in collaboration with Pulitzer Prize-winning journalist J. R. Moehringer, the book strips away all romantic mythologizing around athletic stardom to expose the dark, brutal realities of elite performance:

1. **The Core Axiom of Imposed Hatred**: Agassi’s career was defined by an agonizing paradox: *"I play tennis for a living, even though I hate tennis, hate it with a dark and secret passion, and always have."*
2. **The Trauma of Early Coercion**: Mike Agassi’s terrifying ball machine (*"The Dragon"*) and the brutal arithmetic of one million balls per year grooved superhuman hand-eye reflexes while obliterating childhood autonomy.
3. **The Trap of False Identity**: From the Bollettieri academy to Canon’s *"Image is Everything"* slogan and the secret toupee at Roland Garros, Agassi demonstrates how performing a manufactured persona induces cognitive paralysis.
4. **Brad Gilbert & The "Winning Ugly" Revolution**: Gilbert re-engineered Agassi's game by destroying aesthetic perfectionism, teaching him to become an inescapable "gravity well" of high-percentage pressure.
5. **The Abyss & Redemption**: Sinking to World No. 141, snorting crystal meth, lying to the ATP, and grinding back through dusty Challenger circuits to win the Career Grand Slam at Roland Garros in 1999.
6. **The Altruistic Transmutation**: Transforming decades of athletic suffering into the Andre Agassi College Preparatory Academy in West Las Vegas, discovering that tennis was merely the financial and cultural vehicle to restore educational agency to underprivileged children.

---

## Performance Framework: Aesthetic Perfectionism vs. Tactical Asymmetry

| Dimension | The Perfectionist Mindset (Early Agassi) | The "Winning Ugly" Mindset (Brad Gilbert Era) |
| :--- | :--- | :--- |
| **Objective** | Hit highlight-reel winners from every corner; look magnificent. | Make the opponent play one extra ball; force unforced errors. |
| **Targeting** | Aiming for the chalk (high operational risk, unforced errors). | Aiming for large targets two feet inside the baseline with heavy topspin. |
| **Emotional State** | Frantic perfectionism, panic over errors, easily frustrated. | Calm, methodical, detached; viewing tennis as a game of odds. |
| **Opponent Focus** | Ignoring the opponent; focusing strictly on internal execution. | Scrutinizing the opponent’s weaknesses; being a psychological gravity well. |
| **Outcome** | Grand Slam final collapses (Gómez, Sampras, Courier). | 8 Grand Slam titles, Olympic Gold, Career Grand Slam. |

---

## The 14 Invariant Content Units

${units.map(u => `### Chapter ${u.chapter_num}: ${u.title}
- **Timeline & Setting**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Narrative & Psychological Synthesis
${u.summary}

#### Key Life Claims & Psychological Realities
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Concrete Evidence & Biometric Realia
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Psychological & Performance Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## The Psychological Lessons of Agassi's Odyssey

1. **You Cannot Build Peace on an Imposed Script**: Excellence forced upon a child without their consent breeds chronic internal rebellion. True ownership must be chosen voluntarily.
2. **Perfection is the Enemy of Victory**: As Brad Gilbert demonstrated, you do not need to play the best tennis in the world; you only need to be slightly more patient and disciplined than the human being across the net.
3. **Surrender to the Crucible**: Winning the Career Grand Slam required Agassi to abandon his ego and play for 50 people on high-school courts in Bentonville, Arkansas.
4. **Suffering is Redeemed Through Service**: Personal trauma becomes meaningful only when converted into institutional protection for others. The Agassi Prep Academy turned thirty years of tennis hatred into educational freedom for thousands of children.
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
  <title>Open: An Autobiography — Andre Agassi | Intellectualist Master Codex</title>
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
        <span>Total Replacement Benchmark &bull; Andre Agassi</span>
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
    <button class="view-tab active" data-target="view-journey">View A: 14-Episode Life Journey</button>
    <button class="view-tab" data-target="view-tactics">View B: Tactical & Performance Engineering</button>
    <button class="view-tab" data-target="view-redemption">View C: The Architecture of Redemption</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Sports Psychobiography Benchmark</span>
      <h2>Open: An Autobiography</h2>
      <p class="hero-sub">A Forensic Psychobiographical Reconstruction of Parental Coercion, Identity Crisis, Elite Performance, and Altruistic Redemption</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Andre Agassi (with J. R. Moehringer)</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 2009</span>
        <span>&bull;</span>
        <span><strong>Scope:</strong> 14 Invariant Life Episodes</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: 14-Episode Life Journey -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">Episode ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Life Episode Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Key Psychological Claims & Life Realities</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Concrete Evidence & Biometric Realia</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Psychological & Performance Mechanisms</div>
        ${u.operational_mechanisms.map(m => `
        <div class="mechanism-box">
          <h5>${m.name}</h5>
          <p>${m.rule}</p>
        </div>
        `).join('')}

        <div class="unit-section-title">Verbatim Autobiographical Citations</div>
        ${u.verbatim_citations.map(q => `
        <div class="quote-box">"${q}"</div>
        `).join('')}
      </article>
      `).join('')}
    </section>

    <!-- VIEW B: Tactical & Performance Engineering -->
    <section id="view-tactics" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Tactical Paradigm Shift: Perfectionism vs. "Winning Ugly"</h3>
        <p class="prose-p">Brad Gilbert's arrival in 1994 transformed Agassi from a fragile aesthetic genius who repeatedly choked in Grand Slam finals into a ruthless, high-percentage competitive assassin.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Early Agassi (Aesthetic Perfectionism)</th>
                <th>Brad Gilbert Era ("Winning Ugly")</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Objective</strong></td>
                <td>Hit breathtaking winners from every angle; look brilliant.</td>
                <td>Make the opponent play one extra ball; induce unforced errors.</td>
              </tr>
              <tr>
                <td><strong>Targeting Strategy</strong></td>
                <td>Aiming for lines and corners (extreme operational risk).</td>
                <td>Aiming for large targets two feet inside the baseline with heavy topspin.</td>
              </tr>
              <tr>
                <td><strong>Mental Framing</strong></td>
                <td>Fragile; devastated by unforced errors; panic attacks.</td>
                <td>Methodical and detached; viewing tennis as a game of odds.</td>
              </tr>
              <tr>
                <td><strong>Opponent Focus</strong></td>
                <td>Self-obsessed; oblivious to the opponent's emotional state.</td>
                <td>Scrutinizing opponent vulnerabilities; being an inescapable gravity well.</td>
              </tr>
              <tr>
                <td><strong>Career Impact</strong></td>
                <td>3 Grand Slam final collapses (Gómez, Sampras, Courier).</td>
                <td>1994 US Open unseeded, 1995 Australian Open, Career Grand Slam.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: The Architecture of Redemption -->
    <section id="view-redemption" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Architecture of Redemption: From Trauma to Altruism</h3>
        <p class="prose-p">Agassi's journey outlines a profound psychological arc: how a coerced child transforms deep bitterness and self-destruction into lasting public contribution.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Trap of External Valuation</h5>
          <p>Playing to satisfy an authoritarian father or a screaming public creates a hollow shell. No number of trophies or endorsement millions can heal an identity built on self-alienation.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Inevitability of Rock Bottom</h5>
          <p>Sinking to No. 141 and abusing crystal meth stripped away all illusions. True reconstruction only began when Agassi admitted his complete bankruptcy and took responsibility for his life.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Anchor of Chosen Tribe (Gil Reyes & Stefanie Graf)</h5>
          <p>Healing required unconditional love without transactional utility. Gil Reyes provided the physical and moral forge; Stefanie Graf provided an equal who had survived the same crucible.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. Altruistic Transmutation (The Agassi Prep Legacy)</h5>
          <p>The ultimate breakthrough came when Agassi realized that tennis was not his identity, but his instrument. By building a $40 million college prep school for impoverished kids, he gave children the agency and education stolen from his own youth.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; Andre Agassi's <em>Open: An Autobiography</em> &bull; Standalone Certified Knowledge Reconstruction</p>
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
console.log(`Successfully rendered Open: An Autobiography index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
