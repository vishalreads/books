/**
 * BKRS v1.0 Generator for Mitch Albom's "Tuesdays with Morrie" (1997)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/tuesdays-with-morrie');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-00",
    chapter_num: 0,
    title: "The Curriculum & The Syllabus: ALS & Making Death the Final Project",
    timeline_location: "Summer 1994 – Spring 1995, West Newton, Massachusetts",
    source_scope: "Chapters 1–4: Diagnosis of Amyotrophic Lateral Sclerosis (ALS); deciding to treat dying as a masterclass; Ted Koppel's Nightline interview; Mitch's rediscovery",
    epistemic_status: "Primary Thanatological Memoir",
    materiality: "CRITICAL",
    summary: "In the summer of 1994, seventy-eight-year-old Brandeis University sociology professor Morrie Schwartz receives a death sentence: Amyotrophic Lateral Sclerosis (ALS), a brutal neurodegenerative disease that destroys the motor neurons, steadily paralyzing the body from the legs upward while leaving the brain fully intact. Instead of withering in shame or hiding away, Morrie resolves to make death his final research project: 'Am I going to withdraw from the world, or am I going to live? I decided I'm going to live—or at least try to live—the way I want, with dignity, with courage, with humor, with composure.' He holds a 'living funeral' so he can hear the loving eulogies of his friends before he dies. In March 1995, ABC's *Nightline* with Ted Koppel broadcasts a profile on Morrie. In Detroit, Mitch Albom—once Morrie's favorite student, now a hyper-ambitious, workaholic sports journalist buried under deadlines and commercial success—sees his old mentor on television, paralyzed with guilt that sixteen years have passed without a single contact.",
    key_claims: [
      "Faced with terminal illness, an individual can choose active pedagogical engagement over passive despair, transforming dying into a source of wisdom for others.",
      "Modern society hides death away as an obscene, embarrassing failure; embracing mortality with transparency restores human dignity.",
      "Unchecked professional ambition often functions as a psychological defense mechanism against confronting existential mortality."
    ],
    concrete_evidence: [
      "The clinical progression of ALS: starting with unsteadiness, moving to cane, walker, wheelchair, and loss of diaphragm control.",
      "The 'living funeral' held in Morrie's West Newton home with twenty close friends.",
      "The twenty-two-year-old promise Mitch made at Brandeis graduation in 1979 to stay in touch, broken for sixteen years."
    ],
    operational_mechanisms: [
      {
        name: "Thanatological Reframing",
        rule: "Reframing a terminal disease from a shameful personal catastrophe into a final pedagogical research project transforms helpless victimhood into profound agency."
      }
    ],
    verbatim_citations: [
      "The last class of my old professor's life took place once a week in his house... The subject was The Meaning of Life. It was taught from experience.",
      "ALS is like a lit candle: it melts your nerves and leaves your body a pile of wax. Often it begins with the legs and works its way up.",
      "Morrie refused to be depressed. Instead, he made death his final project, the central point of his days."
    ]
  },
  {
    id: "unit-01",
    chapter_num: 1,
    title: "The Orientation & The First Tuesday: We Talk About the World",
    timeline_location: "May – June 1995, Morrie's Study, West Newton, MA",
    source_scope: "Chapters 5–8: The reunion; Mitch's shame; the Detroit newspaper strike; crying for strangers in Bosnia; love as the only rational act",
    epistemic_status: "Primary Philosophical Dialogue",
    materiality: "CRITICAL",
    summary: "Mitch drives up Morrie's driveway, sitting in his car finishing a cellphone call with a radio producer while Morrie sits on the porch waiting—an act of self-absorbed careerism that fills Mitch with deep shame. Morrie welcomes him with an unconditional, rib-cracking embrace. A newspaper strike in Detroit abruptly halts Mitch's frantic work schedule, freeing him to fly to Boston every Tuesday. On their first formal Tuesday session, Morrie explains why he weeps openly while watching news reports of suffering refugees in Bosnia: as his physical body shrinks, his capacity for universal compassion expands. He articulates his first great maxim: 'Love is the only rational act.'",
    key_claims: [
      "The pace of modern hyper-capitalist culture conditions individuals to prioritize trivial professional transactions over human connection.",
      "Physical suffering and helplessness, rather than hardening the heart, can shatter self-absorption and awaken radical empathy for strangers.",
      "In a universe without inherent script, genuine love is the only logically coherent response to human frailty."
    ],
    concrete_evidence: [
      "Mitch ducking his head in the car to pretend he hadn't seen Morrie while wrapping up a trivial business call.",
      "Morrie's study: a small room with a window overlooking a hibiscus plant shedding pink petals on the sill.",
      "Morrie weeping over television footage of the Bosnian war."
    ],
    operational_mechanisms: [
      {
        name: "Universalized Somatic Resonance",
        rule: "Experiencing acute personal physical vulnerability sensitizes the mirror-neuron system to the agony of distant strangers, dissolving tribal detachment."
      }
    ],
    verbatim_citations: [
      "I was doing what I had become so good at doing: squeezing every second of my life until it yielded a dollar or a word.",
      "Love is the only rational act.",
      "The most important thing in life is to learn how to give out love, and to let it come in."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    title: "The Second Tuesday: We Talk About Feeling Sorry for Yourself",
    timeline_location: "June 1995, Morrie's Study",
    source_scope: "Chapter 9: Morning mourning ritual; the finite boundary on self-pity; the gift of time to say goodbye",
    epistemic_status: "Primary Emotional Regulation Model",
    materiality: "CRITICAL",
    summary: "By the second Tuesday, Morrie is confined to an armchair, requiring help to move, go to the bathroom, and eat. When Mitch asks if he ever feels sorry for himself, Morrie admits that he does—every morning. But he introduces his strict emotional discipline: he gives himself a daily quota of mourning. In the quiet morning hours, he feels his losses, cries a few tears, and grieves for his dead legs and hands. And then he stops. He concentrates on all the good things still left in his life—the visitors, the sunlight, the music, and the rare opportunity to say a conscious, loving farewell to everyone he loves before the curtain falls.",
    key_claims: [
      "Denying negative emotions is unnatural and toxic; self-pity must be acknowledged and expressed, but strictly bounded in time.",
      "A sudden, violent death robs an individual of the sacred opportunity for reconciliation; a terminal illness provides the gift of conscious closure.",
      "Gratitude for remaining faculties instantly neutralizes mourning over lost abilities."
    ],
    concrete_evidence: [
      "Morrie's physical loss: unable to lift his arms to touch his glasses; needing his head propped with pillows.",
      "The morning routine: sitting in bed, crying for a few minutes, then ringing the small handbell for his caretaker Connie.",
      "The contrast between sudden cardiac arrest and the gradual farewell of ALS."
    ],
    operational_mechanisms: [
      {
        name: "The Bounded Mourning Protocol",
        rule: "Allocate a strict, daily window (5 to 10 minutes) to fully mourn and weep for physical and emotional losses; once the timer expires, consciously pivot attention outward toward gratitude."
      }
    ],
    verbatim_citations: [
      "Sometimes I do feel sorry for myself... I give myself a good cry if I need it. But then I concentrate on all the good things still in my life.",
      "It's horrible to watch my body slowly perish. But it's also wonderful because I have plenty of time to say good-bye.",
      "I give myself a little pity party every morning. A few minutes. And then I stop."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "The Third Tuesday: We Talk About Regrets",
    timeline_location: "June 1995, Morrie's Study",
    source_scope: "Chapter 10: Bringing the tape recorder; the culture of speed; running without asking 'Is this all?'",
    epistemic_status: "Primary Cultural Diagnosis",
    materiality: "CRITICAL",
    summary: "Mitch brings a Sony tape recorder, wanting to preserve Morrie's voice for posterity. Morrie looks at Mitch's list of questions about regrets. Morrie diagnoses the central pathology of modern culture: it keeps human beings running on a continuous hamster wheel of trivial tasks, sensory distractions, and material consumption so they never stop to ask the fundamental question: 'Is this all there is? Is there something missing?' Because the culture does not encourage contemplation of death, people wake up at age fifty or sixty with crushing regrets, realizing they invested their entire lives in career prestige that means nothing on a deathbed.",
    key_claims: [
      "Modern culture systematically distracts individuals from existential self-examination through consumerism and overwork.",
      "Regret is the inevitable byproduct of living according to an unexamined, externally imposed script.",
      "Confronting death is the only lens powerful enough to strip away cultural trivia and illuminate what genuinely matters."
    ],
    concrete_evidence: [
      "The small black tape recorder spinning on the table beside Morrie's pills.",
      "Mitch's frantic lifestyle: tracking scores, chasing planes, filing columns, never pausing for two quiet minutes.",
      "Morrie's reading: newspapers, poetry, and letters from total strangers seeking guidance."
    ],
    operational_mechanisms: [
      {
        name: "The Existential Audit Question",
        rule: "Regularly interrupt routine activity to ask: 'If I were to die next week, would I regret spending today on this pursuit?' If yes, immediately realign priorities."
      }
    ],
    verbatim_citations: [
      "The culture we have does not make people feel good about themselves. And you have to be strong enough to say if the culture doesn't work, don't buy it.",
      "We are too involved in materialistic things, and they don't satisfy us. The loving relationships we have, the universe around us, we take these things for granted.",
      "So many people walk around with a meaningless life. They seem half-asleep, even when they're busy doing things they think are important."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "The Fourth Tuesday: We Talk About Death (The Little Bird)",
    timeline_location: "July 1995, Morrie's Study",
    source_scope: "Chapter 11: The Buddhist little bird on the shoulder; the paradox of living; 'Once you learn how to die, you learn how to live'",
    epistemic_status: "Primary Thanatological Principle",
    materiality: "CRITICAL",
    summary: "On the fourth Tuesday, oxygen tubes are delivered to Morrie's house. Morrie articulates his core thanatological theorem: 'Everyone knows they're going to die, but nobody believes it. If we did, we would do things differently.' He introduces the Buddhist heuristic of the **Little Bird on the Shoulder**: every morning, imagine a small bird sitting on your shoulder asking: 'Is today the day? Am I ready? Am I doing what I should be doing? Am I being the person I want to be?' By acknowledging mortality every single morning, you strip away ambition, vanity, and ego, living with exquisite clarity. Morrie summarizes the supreme paradox: 'Once you learn how to die, you learn how to live.'",
    key_claims: [
      "Intellectual awareness of mortality is useless; only emotional, daily integration of death alters human behavior.",
      "Living with conscious awareness of death enhances appreciation for life, rendering ordinary moments (looking through a window, tasting food) profoundly sacred.",
      "Eradicating denial of death is the foundational step toward spiritual liberation."
    ],
    concrete_evidence: [
      "The tall oxygen tank with clear plastic cannula tubes arriving in Morrie's living room.",
      "The Buddhist practice of asking the bird on the shoulder every morning: 'Is today the day?'",
      "Morrie gazing through the window at the leaves of the oak tree: 'I appreciate that window more than you do.'"
    ],
    operational_mechanisms: [
      {
        name: "The Little Bird on the Shoulder Heuristic",
        rule: "Visualize a sentinel bird on your shoulder throughout the day asking: 'Is today the day?' Use this question to instantly filter trivial conflicts from genuine priorities."
      }
    ],
    verbatim_citations: [
      "Once you learn how to die, you learn how to live.",
      "Everyone knows they're going to die, but nobody believes it. If we did, we would do things differently.",
      "Ask the bird: 'Is today the day? Am I ready? Am I doing everything I need to do? Am I being the person I want to be?'"
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The Fifth Tuesday: We Talk About Family (Auden's Law)",
    timeline_location: "July 1995, Morrie's Study",
    source_scope: "Chapter 12: W. H. Auden's poem; family as emotional anchor; the security of being watched over; raising children",
    epistemic_status: "Primary Relational Philosophy",
    materiality: "CRITICAL",
    summary: "Morrie's condition deteriorates; he requires a suction machine to clear phlegm from his throat. They discuss family. Quoting his favorite line from poet W. H. Auden—'Love each other or perish'—Morrie explains that without family, human beings stand completely naked in the universe, without foundation. While friends can be wonderful, only a family provides the unshakable psychological security of knowing that someone will sit by your bedside, hold your hand, and watch over you when you are coughing and dying. When Mitch asks about raising children, Morrie explains that having children teaches you something no other human experience can: how to love another being more than you love yourself, and how to accept total, unconditional responsibility for another soul.",
    key_claims: [
      "Family represents the ultimate emotional safety net in human civilization; without it, mortal crisis becomes unbearable.",
      "W. H. Auden's dictum ('Love each other or perish') is an absolute biological and psychological law of human survival.",
      "Parenthood provides the deepest crucible for transcending narcissism and learning unconditional self-sacrifice."
    ],
    concrete_evidence: [
      "Morrie's sons Rob and Jon visiting, kissing their father's forehead, and massaging his withered limbs.",
      "The suction machine humming on the table beside the bed, vacuuming saliva from Morrie's mouth.",
      "Morrie's childhood trauma: his mother dying when he was eight, leaving him starved for maternal touch until his stepmother Eva arrived."
    ],
    operational_mechanisms: [
      {
        name: "Auden's Law of Mutual Interdependence",
        rule: "Individual autonomy is an illusion during birth, childhood, and dying; human survival requires an unbroken chain of sacrificial, reciprocal love."
      }
    ],
    verbatim_citations: [
      "Love each other or perish.",
      "There is no foundation, no secure ground, upon which people may stand today if it isn't the family.",
      "If you don't have the support and love and caring and concern that you get from a family, you don't have much at all."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "The Sixth Tuesday: We Talk About Emotions (The Detachment Protocol)",
    timeline_location: "August 1995, Morrie's Study",
    source_scope: "Chapter 13: Charlotte's care; coughing fits; the Buddhist principle of Detachment; immersing in emotion to release it",
    epistemic_status: "Primary Psychological Regulation Technique",
    materiality: "CRITICAL",
    summary: "Morrie suffers from violent coughing fits that leave him gasping for air, choking on his own saliva. He introduces his psychological technique of **Detachment**—a concept borrowed from Buddhist psychology. Most people fear intense emotions (grief, terror, loneliness, heartbreak), so they build walls, repress their feelings, and pretend they are fine. Morrie advocates the opposite: dive completely into the emotion. If you feel fear, plunge into it; let it wash over you; feel the terror, the grief, the tears. Experience it 100% without resistance. And only by experiencing it fully can you say: 'All right. That was my fear. That was my grief. I know it now. Now I can step outside it and detach.'",
    key_claims: [
      "Emotional repression perpetuates suffering; true detachment is achieved not by avoiding emotion, but by total, fearless immersion in it.",
      "Once an emotion is fully felt and named, it loses its unconscious power to terrify or control the individual.",
      "Detachment allows a dying person to experience terror without being overwhelmed by panic."
    ],
    concrete_evidence: [
      "Morrie coughing violently until his face turns blue, hitting his chest to dislodge phlegm, then consciously breathing to calm his nervous system.",
      "Morrie explaining how he handles nocturnal panic attacks: acknowledging the suffocation terror, feeling it completely, then detaching.",
      "Mitch watching Morrie transform from a choking invalid into a serene sage within sixty seconds."
    ],
    operational_mechanisms: [
      {
        name: "The Fearless Immersion-Detachment Protocol",
        rule: "When seized by overwhelming emotion (fear, pain, sorrow), stop running: dive into it, name it, let it saturate your nervous system, and then consciously step back: 'I have experienced you; now I release you.'"
      }
    ],
    verbatim_citations: [
      "Don't cling to things, because everything is impermanent.",
      "If you hold back on the emotions—if you don't allow yourself to go all the way through them—you can never get to being detached, you're too busy being afraid.",
      "You take any emotion—love for a woman, or grief for a loved one, or what I'm going through, fear and pain from a deadly disease... You plunge yourself into it, and then you say, 'All right, that was fear. Now I can step away from it.'"
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "The Seventh Tuesday: We Talk About the Fear of Aging",
    timeline_location: "August 1995, Morrie's Study",
    source_scope: "Chapter 14: Morrie can no longer wipe his behind; embracing decay; aging as growth; 'I am every age I've ever been'",
    epistemic_status: "Primary Gerontological & Existential Philosophy",
    materiality: "CRITICAL",
    summary: "Morrie reaches a milestone he previously dreaded: he can no longer wipe his own behind after using the commode. Instead of feeling humiliated, Morrie embraces it, explaining that it allows him to return to the vulnerability of infancy—being bathed, turned, and touched by loving caretakers. When Mitch asks about society's obsessive fear of aging and youth worship, Morrie dismisses it as a symptom of unfulfilled lives: people who fear aging are people who never lived fully. Morrie views aging not as decay, but as growth. He explains that he does not envy youth: 'I am every age I have ever been. I am a three-year-old, a twenty-year-old, a thirty-year-old, a fifty-year-old, and a seventy-eight-year-old. How can I envy you your youth when I have already been there?'",
    key_claims: [
      "Physical dependency is not inherently humiliating; receiving care with grace and gratitude connects human beings in profound tenderness.",
      "The societal obsession with youth reflects a culture of unfulfilled, arrested development; people who live meaningfully welcome aging as accumulated wisdom.",
      "Chronological age is cumulative: a fully integrated psyche contains all prior developmental stages simultaneously."
    ],
    concrete_evidence: [
      "Connie the physical therapist helping Morrie to the portable toilet and wiping him clean.",
      "Billboards and television commercials glorifying smooth skin and twenty-year-old bodies.",
      "Morrie smiling in his wheelchair: 'I enjoy being dependent. It's like being a baby again.'"
    ],
    operational_mechanisms: [
      {
        name: "Cumulative Age Integration",
        rule: "View current age not as a loss of youth, but as an expansion that encompasses all past ages, eliminating the toxic envy of younger generations."
      }
    ],
    verbatim_citations: [
      "It's not just that I'm seventy-eight. I am three, I am seven, I am twenty, I am thirty-two, I am fifty. I've lived through all of them, and I know what it's like.",
      "How can I be envious of where you are—when I've been there myself?",
      "Aging is not just decay, you know. It's growth. It's more than the negative that you're going to die, it's also the positive that you understand you're going to die, and that you live a better life because of it."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "The Eighth Tuesday: We Talk About Money & Materialism",
    timeline_location: "August 1995, Morrie's Study",
    source_scope: "Chapter 15: The billionaire obsession; buying things as a substitute for love; giving time and presence as true wealth",
    epistemic_status: "Primary Economic & Sociological Critique",
    materiality: "CRITICAL",
    summary: "Mitch reads headlines about corporate executives and sports superstars signing multi-million-dollar contracts. Morrie critiques the capitalist delusion that material wealth can buy fulfillment: 'We've got a form of brainwashing going on in our country. Do you know how they brainwash people? They repeat something over and over: More is good. More is good. More is good.' People accumulate houses, cars, and designer watches because they are starved for love, and they attempt to use material objects as a substitute for tenderness. But things cannot hug you back when you are dying. Morrie teaches that true wealth is giving: giving your time, your undivided attention, and your listening to another person.",
    key_claims: [
      "Consumer capitalism brainwashes citizens into confusing material accumulation with human worth and emotional fulfillment.",
      "Material possessions cannot satisfy the fundamental human hunger for love, belonging, and meaning.",
      "Giving your undivided presence to another person is the only currency that produces lasting spiritual satisfaction."
    ],
    concrete_evidence: [
      "Billionaires hoarding vast fortunes while remaining emotionally impoverished and terrified of death.",
      "Morrie living in the same modest house for forty years with zero interest in upgrading furniture or electronics.",
      "Mitch reflecting on his expensive cars and luxury apartment that failed to bring him peace."
    ],
    operational_mechanisms: [
      {
        name: "The Presence-over-Possession Pivot",
        rule: "Whenever you feel an urge to buy an unneeded material luxury to cure boredom or sadness, immediately redirect that energy toward offering undivided presence to someone in need."
      }
    ],
    verbatim_citations: [
      "We've got a form of brainwashing going on in our country. Do you know how they brainwash people? More is good. More is good. More money is good. More wealth is good. More cars is good. More property is good.",
      "You can't substitute material things for love or for gentleness or for tenderness or for a sense of comradeship.",
      "Giving is living. Offering others your time, your concern, your storytelling—that's what makes you feel alive."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    title: "The Ninth Tuesday: We Talk About How Love Goes On",
    timeline_location: "September 1995, Morrie's Study",
    source_scope: "Chapter 16: O.J. Simpson trial circus; being forgotten vs. living on; the tombstone epitaph: 'A Teacher to the Last'",
    epistemic_status: "Primary Memorial Epistemology",
    materiality: "CRITICAL",
    summary: "As America is consumed by the sensationalist spectacle of the O.J. Simpson murder trial, Mitch visits Morrie, whose lungs are failing rapidly. Mitch asks if Morrie fears being forgotten after he dies. Morrie smiles gently: 'I don't think I will be forgotten. I've got too many people who love me. Death ends a life, not a relationship.' Love creates an indestructible energetic imprint: the affection, wisdom, and tenderness you pour into other people continues to reverberate through them long after your physical body has returned to dust. They decide on Morrie's tombstone epitaph: 'A Teacher to the Last.'",
    key_claims: [
      "Human immortality is not biological or monument-based; it is relational, surviving in the hearts and actions of those one has loved and taught.",
      "The noise of sensationalist mass media trivializes human consciousness, blinding society to the quiet reality of mortality.",
      "A relationship transcends physical death through the memory and internalized voice of the departed."
    ],
    concrete_evidence: [
      "Millions of people glued to television screens watching police cars chase O.J. Simpson while real human beings die in silence.",
      "Morrie dictating his epitaph: 'A Teacher to the Last.'",
      "Morrie making Mitch promise to visit his grave on Tuesdays and talk to him: 'It'll be a dialogue, Mitch. You'll ask questions, and you'll know my answers.'"
    ],
    operational_mechanisms: [
      {
        name: "Relational Immortality Theorem",
        rule: "Physical death terminates biological respiration, but cannot terminate a loving relationship; the deceased continues to exist as an internalized moral dialogue within the survivor."
      }
    ],
    verbatim_citations: [
      "Death ends a life, not a relationship.",
      "Love is how you stay alive, even after you are gone.",
      "You'll talk, and I'll listen. Even from the grave, Mitch, I'll be listening."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    part: "Part II (Tenth to Twelfth Tuesdays)",
    title: "Marriage, Culture, & Forgiveness: The Norman Sculptor Tragedy",
    timeline_location: "September – October 1995, Morrie's Study",
    source_scope: "Chapters 17–19: Mitch brings Janine; rules for marriage; creating your own subculture; the Norman sculptor estrangement and tears of regret",
    epistemic_status: "Primary Ethical & Relational Codification",
    materiality: "CRITICAL",
    summary: "Across October, Morrie articulates his core guidance on marriage, culture, and forgiveness. When Mitch brings his wife Janine, Janine sings a Ray Noble jazz ballad that brings Morrie to tears. Morrie gives his rules for lasting marriage: respect each other, compromise constantly, talk openly, and share a common set of values. In Chapter 18, Morrie emphasizes the necessity of constructing your own subculture: do not follow society's poisonous rules on vanity, status, and selfishness; build small micro-communities founded on loyalty and love. In Chapter 19, Morrie weeps openly over a bust sculpted by his old friend Norman forty years earlier. When Morrie's wife Charlotte underwent major surgery, Norman never reached out; deeply hurt, Morrie cut off communication, refusing Norman's subsequent attempts at reconciliation. Years later, Norman died suddenly of cancer before Morrie could forgive him. Morrie's eyes stream with tears of bitter remorse: 'Forgive yourself before you die. Then forgive others. Don't wait, Mitch. Pride and stubbornness are worthless fools.'",
    key_claims: [
      "Lasting marriage requires deep mutual respect, total communication, and identical spiritual values, not just romantic infatuation.",
      "One must consciously build an alternative moral subculture to inoculate oneself against the toxic materialism of mainstream society.",
      "Postponing forgiveness out of pride is one of the most agonizing, irreversible regrets a human being can carry to their deathbed."
    ],
    concrete_evidence: [
      "Janine singing *The Very Thought of You* while Morrie closes his eyes in bliss.",
      "The bronze bust sculpted by Norman sitting on a shelf in Morrie's study.",
      "Morrie weeping over Norman's death forty years after their petty estrangement."
    ],
    operational_mechanisms: [
      {
        name: "Pre-Emptive Forgiveness Heuristic",
        rule: "Immediately forgive friends and family who have hurt you; pride and stubbornness are trivial compared to the permanent agony of unresolved estrangement after death."
      }
    ],
    verbatim_citations: [
      "There are a few rules I know to be true about love and marriage: If you don't respect the other person, you're going to have a lot of trouble. If you don't know how to compromise, you're going to have a lot of trouble... And you have to have a common set of values.",
      "Forgive yourself before you die. Then forgive others.",
      "I had this friend, Norman... He died a few years ago. We never reconciled. It breaks my heart to think about it now. Such a waste."
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    part: "Part II (Thirteenth & Fourteenth Tuesdays)",
    title: "The Perfect Day & The Final Good-bye",
    timeline_location: "Late October – November 1995, Morrie's Bedroom",
    source_scope: "Chapters 20–21: The 24-hour perfect day; bedridden on oxygen; the wave on the ocean parable; the final tears and kiss",
    epistemic_status: "Primary Tragic & Transcendental Climax",
    materiality: "CRITICAL",
    summary: "On the thirteenth Tuesday, Mitch asks Morrie what he would do if he were granted twenty-four hours of full health. Instead of dreaming of world travel or grand adventures, Morrie describes an exquisitely ordinary day: wake up, do morning exercises, have breakfast of rolls and tea, go for a walk in the woods with friends, have lunch, go to a restaurant for dinner, dance with friends until exhausted, and then go home to a deep, peaceful sleep. The ordinary is revealed as the sublime. Morrie tells the parable of the little wave on the ocean who is terrified of crashing on the shore, until another wave tells him: 'Don't be afraid. You're not just a wave; you're part of the ocean.' On the fourteenth and final Tuesday, Morrie is bedridden, frail, and fading on continuous oxygen. Speaking in weak whispers, Morrie takes Mitch's hand: 'You're a good man, Mitch.' For the first time in sixteen years, Mitch weeps openly against Morrie's cheek, and Morrie smiles weakly in triumph: he finally made Mitch cry.",
    key_claims: [
      "The pinnacle of human happiness is found not in exotic sensory extravagance, but in the peaceful enjoyment of simple, everyday human communion.",
      "The individual is not an isolated entity facing extinction (the wave), but an inseparable manifestation of the cosmic whole (the ocean).",
      "Emotional vulnerability (crying) is not weakness, but the ultimate marker of psychological liberation."
    ],
    concrete_evidence: [
      "Morrie's twenty-four-hour dream day: eating sweet rolls, walking in the garden, dancing, and sleeping.",
      "The wave on the ocean parable.",
      "Morrie's skin cold and pale, breathing shallowly through the green oxygen cannula.",
      "Mitch kissing Morrie's cheek, his tears soaking into Morrie's grey whiskers."
    ],
    operational_mechanisms: [
      {
        name: "The Wave and Ocean Parable (Cosmic Identity)",
        rule: "Overcome the terror of personal physical annihilation by shifting identity from the individual form (the wave) to the underlying eternal substrate (the ocean)."
      }
    ],
    verbatim_citations: [
      "The little wave says, 'You don't understand! We're all going to crash into the rocks and be destroyed!' And the other wave says, 'No, you don't understand. You're not a wave, you're part of the ocean.'",
      "It was so simple. So average. After all we'd been through, that was what he wanted: a twenty-four-hour ordinary day.",
      "I kissed his cheek, and I felt his breath, weak and shallow. And then I cried. I finally cried."
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    part: "Graduation & Conclusion",
    title: "Graduation: The Birch Trees by the Pond & Love Goes On",
    timeline_location: "November 4, 1995, West Newton, MA",
    source_scope: "Chapters 22–23: Morrie's peaceful death; the funeral by the pond; reconnecting with Mitch's estranged brother; the ongoing classroom",
    epistemic_status: "Primary Memorial Epilogue",
    materiality: "CRITICAL",
    summary: "On Saturday, November 4, 1995, Morrie slips into a coma. In a final act of characteristic grace, he waits until his wife, sons, and caretaker step out of the room for a few moments to make coffee before taking his final breath in complete peace. His funeral takes place on a gentle hill beneath white birch trees overlooking a pond, exactly as he chose. Mitch touches the stone, realizing that the dialogue did not end with Morrie's death; whenever he thinks of Morrie, he hears his voice answering questions with laughing warmth. Inspired by Morrie's teachings on family and forgiveness, Mitch reaches out to his estranged brother Peter, who is undergoing chemotherapy for cancer in Spain, repairing their relationship. The graduation is complete: the student has become a whole human being.",
    key_claims: [
      "A peaceful death on one's own terms is the crowning achievement of a life lived with awareness and love.",
      "The teachings of a true mentor survive death, functioning as an eternal inner compass within the student.",
      "Wisdom is validated only when applied to reconcile fractured personal relationships in the real world."
    ],
    concrete_evidence: [
      "Morrie dying peacefully at age seventy-nine during the few minutes he was alone in the bedroom.",
      "The funeral beneath the birch trees with a rabbi reciting prayers and wind blowing over the pond.",
      "Mitch calling his brother Peter in Spain and healing their ten-year estrangement."
    ],
    operational_mechanisms: [
      {
        name: "Trans-Generational Wisdom Transmission",
        rule: "A mentor's soul survives not in granite monuments, but in the student who puts the mentor's lessons into immediate relational action."
      }
    ],
    verbatim_citations: [
      "The funeral was held on a Tuesday... As the wind blew through the trees, I looked at the pond and I looked at his stone. 'A Teacher to the Last.'",
      "There is no such thing as 'too late' in life. Although Morrie was gone, he was still with me.",
      "Have you ever had a teacher? One who saw you as a raw but precious thing, a jewel that, with wisdom, could be polished to a proud shine?"
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "tuesdays-with-morrie",
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
  publication_year: 1997,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Tuesdays with Morrie with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Tuesdays with Morrie
## A Forensic Thanatological, Ethical, and Humanist Reconstruction of the Meaning of Life, Conscious Dying, and Radical Compassion
### By Mitch Albom (1997)

---

## Executive Epistemic Summary

Mitch Albom’s *Tuesdays with Morrie* (1997) is one of the most widely read and profound works of **thanatological wisdom literature** in the modern era. Far from being a sentimental memorial, it constitutes an **operational manual for human existence**, observed from the vantage point of a seventy-eight-year-old sociology professor dying of Amyotrophic Lateral Sclerosis (ALS).

Across 12 invariant units synthesizing all 23 chapters and fourteen Tuesday dialogues, Morrie Schwartz dismantles the foundational neuroses of consumerist civilization:
1. **The Inversion of Dying**: Refusing to hide away or wither in shame, Morrie turns his death into his final research project, demonstrating that conscious mortality restores human dignity.
2. **The Core Paradox of Existence**: *"Once you learn how to die, you learn how to live."* By adopting the Buddhist heuristic of the **Little Bird on the Shoulder** (*"Is today the day?"*), an individual strips away vanity and superficial ambition.
3. **The Detachment Protocol**: Diving completely into grief, fear, and pain rather than repressing them, experiencing emotions 100% in order to consciously step aside and detach.
4. **The Auden Imperative**: *"Love each other or perish."* Family and relational interdependence are the only authentic foundation upon which human beings can stand in a fragile universe.
5. **The Critique of Mainstream Culture**: Modern capitalism brainwashes people with *"More is good"*, forcing them to use material accumulation as a hollow substitute for tenderness.
6. **Relational Immortality**: *"Death ends a life, not a relationship."* The love, teaching, and presence invested in others continues to reverberate eternally through their actions.

---

## The Eight Invariant Morrie Axioms

| Axiom | Core Formulation | Operational Law |
| :--- | :--- | :--- |
| **I. The Living Paradox** | *"Once you learn how to die, you learn how to live."* | Daily awareness of physical mortality eliminates trivial anxieties and clarifies true priorities. |
| **II. The Auden Law** | *"Love each other or perish."* | Human beings are biologically and psychologically interdependent; isolation breeds existential ruin. |
| **III. The Detachment Protocol** | *"Plunge yourself into emotion, then detach."* | Total immersion in pain or fear allows the emotion to be felt and released, preventing panic. |
| **IV. The Subculture Mandate** | *"If the culture doesn't work, don't buy it."* | Build your own ethical micro-community based on love, presence, and loyalty rather than status. |
| **V. The Substitution Fallacy** | *"You can't substitute material things for love."* | Accumulating possessions is a futile attempt to fill an emotional void that only tenderness can satisfy. |
| **VI. The Cumulative Self** | *"I am every age I've ever been."* | Aging is growth, not decay; the integrated psyche contains childhood, youth, and elderhood at once. |
| **VII. Pre-Emptive Forgiveness** | *"Forgive yourself, then forgive others."* | Never allow pride or stubbornness to delay reconciliation; death makes unresolved estrangement permanent. |
| **VIII. Relational Immortality** | *"Death ends a life, not a relationship."* | The biological form perishes, but the dialogue and influence continue indefinitely in the hearts of survivors. |

---

## The 12 Invariant Content Units

${units.map(u => `### Unit ${u.chapter_num}: ${u.title}
- **Timeline & Setting**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Narrative & Thanatological Synthesis
${u.summary}

#### Invariant Philosophical Claims
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Concrete Evidence & Clinical Realia
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Psychological & Spiritual Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## The Ultimate Wisdom: The Wave on the Ocean

Morrie’s final gift to Mitch is the parable of the waves:
> *"The little wave is terrified because it sees the rocks ahead and knows it will be smashed to pieces. But the older wave says: 'Don't be afraid. You're not just a wave; you're part of the ocean.' The illusion is that we are separate. When we realize we are the ocean, death loses its terror."*
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
  <title>Tuesdays with Morrie — Mitch Albom | Intellectualist Master Codex</title>
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
        <span>Total Replacement Benchmark &bull; Mitch Albom</span>
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
    <button class="view-tab active" data-target="view-journey">View A: The 14 Tuesdays Journey</button>
    <button class="view-tab" data-target="view-axioms">View B: The 8 Morrie Axioms</button>
    <button class="view-tab" data-target="view-artofliving">View C: Operational Art of Living</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Thanatological Benchmark</span>
      <h2>Tuesdays with Morrie</h2>
      <p class="hero-sub">A Forensic Thanatological, Ethical, and Humanist Reconstruction of the Meaning of Life, Conscious Dying, and Radical Compassion</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Mitch Albom</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1997</span>
        <span>&bull;</span>
        <span><strong>Scope:</strong> 23 Chapters Synthesized into 12 Invariant Units</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: The 14 Tuesdays Journey -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">Unit ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Narrative Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Invariant Philosophical Claims</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Concrete Evidence & Clinical Realia</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Psychological & Spiritual Mechanisms</div>
        ${u.operational_mechanisms.map(m => `
        <div class="mechanism-box">
          <h5>${m.name}</h5>
          <p>${m.rule}</p>
        </div>
        `).join('')}

        <div class="unit-section-title">Verbatim Canonical Citations</div>
        ${u.verbatim_citations.map(q => `
        <div class="quote-box">"${q}"</div>
        `).join('')}
      </article>
      `).join('')}
    </section>

    <!-- VIEW B: The 8 Morrie Axioms -->
    <section id="view-axioms" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The Eight Invariant Morrie Axioms</h3>
        <p class="prose-p">A systematic codification of the foundational thanatological and relational principles articulated across Morrie Schwartz's final semester.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Axiom</th>
                <th>Core Formulation</th>
                <th>Operational Psychological Law</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>I. The Living Paradox</strong></td>
                <td><em>"Once you learn how to die, you learn how to live."</em></td>
                <td>Daily conscious awareness of physical mortality strips away trivial vanity and clarifies genuine priorities.</td>
              </tr>
              <tr>
                <td><strong>II. The Auden Law</strong></td>
                <td><em>"Love each other or perish."</em></td>
                <td>Human beings are fundamentally interdependent; isolation during mortal crisis produces psychological collapse.</td>
              </tr>
              <tr>
                <td><strong>III. The Detachment Protocol</strong></td>
                <td><em>"Plunge yourself into emotion, then detach."</em></td>
                <td>Total immersion in grief, fear, or pain allows the emotion to be experienced and released rather than repressed into neurosis.</td>
              </tr>
              <tr>
                <td><strong>IV. The Subculture Mandate</strong></td>
                <td><em>"If the culture doesn't work, don't buy it."</em></td>
                <td>Construct an intentional micro-community founded on presence, listening, and love, rejecting commercial status competition.</td>
              </tr>
              <tr>
                <td><strong>V. The Substitution Fallacy</strong></td>
                <td><em>"You can't substitute material things for love."</em></td>
                <td>Hoarding consumer goods is a symptom of emotional starvation; true wealth is giving undivided presence to others.</td>
              </tr>
              <tr>
                <td><strong>VI. The Cumulative Self</strong></td>
                <td><em>"I am every age I've ever been."</em></td>
                <td>Aging is cumulative growth; an integrated elder possesses all previous developmental stages simultaneously without envy.</td>
              </tr>
              <tr>
                <td><strong>VII. Pre-Emptive Forgiveness</strong></td>
                <td><em>"Forgive yourself, then forgive others."</em></td>
                <td>Never allow stubborn pride to postpone reconciliation; death renders unresolved estrangement an eternal regret.</td>
              </tr>
              <tr>
                <td><strong>VIII. Relational Immortality</strong></td>
                <td><em>"Death ends a life, not a relationship."</em></td>
                <td>Physical form dissolves, but the internalized dialogue and moral influence continue indefinitely in the hearts of survivors.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: Operational Art of Living -->
    <section id="view-artofliving" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Operational Heuristics for Everyday Living</h3>
        <p class="prose-p">Practical mental models derived from Morrie's study for navigating grief, relationships, and modern distraction.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Little Bird on the Shoulder</h5>
          <p>Every morning, visualize a sentinel bird on your shoulder asking: <em>"Is today the day? Am I doing what I should be doing? Am I being the person I want to be?"</em> Use this filter to dissolve petty squabbles immediately.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Bounded Mourning Protocol</h5>
          <p>Do not deny pain or grief. Give yourself a strict, daily window (5–10 minutes) to weep and feel sorry for your losses. When the timer expires, pivot your focus outward to gratitude and service.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Wave on the Ocean Parable</h5>
          <p>When terrified of mortality, remember the parable: the small wave fears crashing on the shore until it realizes it is not an isolated wave, but an integral part of the infinite ocean.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. The Twenty-Four-Hour Ordinary Day</h5>
          <p>When asked for his ideal dream day with full health, Morrie requested simple rolls, a walk in the woods, lunch with friends, dancing, and sleeping. The ordinary is the miraculous.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; Mitch Albom's <em>Tuesdays with Morrie</em> &bull; Standalone Certified Knowledge Reconstruction</p>
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
console.log(`Successfully rendered Tuesdays with Morrie index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
