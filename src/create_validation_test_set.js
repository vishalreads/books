const fs = require('fs');
const path = require('path');

const testSet = [
  // A. BASIC CONTENT
  {
    id: "Q-BASIC-01",
    category: "A. BASIC CONTENT",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 1",
    question: "Where is Toru Watanabe when the novel opens, what piece of music does he hear, and what physical reaction does it produce?",
    source_ground_truth_criteria: "37-year-old Toru lands at Hamburg Airport, Germany aboard a Boeing 747 in November 1986. An orchestral Muzak version of The Beatles' 'Norwegian Wood' plays through cabin speakers. Toru feels a violent physical pain, doubles over in his seat, covers his face with his hands, feeling his chest tear open."
  },
  {
    id: "Q-BASIC-02",
    category: "A. BASIC CONTENT",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 2",
    question: "How did Kizuki commit suicide, where did it take place, at what age, and what vehicle was involved?",
    source_ground_truth_criteria: "Kizuki died in his family garage in Kobe at age 17 in May 1967. He attached a rubber hose to the exhaust pipe of his small car (Honda N-360), ran it through the window, sealed gaps with rags, and died of carbon monoxide poisoning."
  },
  {
    id: "Q-BASIC-03",
    category: "A. BASIC CONTENT",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 3",
    question: "What did Storm Trooper give to Toru before departing or during the summer, what container was it kept in, and where did Toru release it?",
    source_ground_truth_criteria: "Storm Trooper caught a firefly and gave it to Toru in an instant coffee/Nescafe jar with grass and holes punched in the lid. Toru took it to the dormitory water tower on the roof at twilight and released it into the night sky."
  },
  {
    id: "Q-BASIC-04",
    category: "A. BASIC CONTENT",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 6",
    question: "What is the name and nature of the mountain facility where Naoko resides in Kyoto, and what are its unusual operational rules?",
    source_ground_truth_criteria: "Ami Hostel (Ami-ryo) in the mountains near Kyoto. It is a communal therapeutic retreat, not a locked asylum. Patients and staff live together without locked gates, grow their own food/vegetables, pay by bartering or communal work, and doctors/nurses are treated on equal footing with residents."
  },
  {
    id: "Q-BASIC-05",
    category: "A. BASIC CONTENT",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 11",
    question: "How many songs does Reiko play on the guitar during the secular wake for Naoko in Toru's apartment, and what was the final song played?",
    source_ground_truth_criteria: "Reiko plays exactly 51 songs on acoustic guitar (including Beatles, classical, bossa nova, folk). The 51st and final song played was 'Norwegian Wood'."
  },

  // B. DETAIL
  {
    id: "Q-DETAIL-01",
    category: "B. DETAIL",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 2",
    question: "What were Storm Trooper's specific speech quirks, academic major, and personal habits in the Tokyo dormitory?",
    source_ground_truth_criteria: "He majored in geography (cartography/national mapping). He had a severe stutter on 'T' and 'N' words. He performed mandatory morning radio gymnastics, obsessively bleached and disinfected the room floor, and had an irrational terror of fire."
  },
  {
    id: "Q-DETAIL-02",
    category: "B. DETAIL",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 4",
    question: "Where did Midori take Toru on their first informal date after Greek drama class, and what did she candidly discuss while there?",
    source_ground_truth_criteria: "A seedy soft-core pink/erotic movie theater in Shinjuku. While watching the film, Midori ate sandwiches and spoke completely casually about female anatomy, masturbation, sanitary napkins, and male sexual hypocrisy."
  },
  {
    id: "Q-DETAIL-03",
    category: "B. DETAIL",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 5",
    question: "What snacks and drinks did Midori and Toru bring to the rooftop veranda during the neighbor's fire, and what instrument did Midori play?",
    source_ground_truth_criteria: "Cans of cold beer, dried squid, and Midori's acoustic guitar. She strummed chords and sang folk songs while watching the flames and smoke."
  },
  {
    id: "Q-DETAIL-04",
    category: "B. DETAIL",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 8",
    question: "In the Red Cross Hospital cancer ward, exactly what food did Toru feed to Midori's dying father, and how was it prepared?",
    source_ground_truth_criteria: "Fresh cucumbers bought by Toru, sliced and wrapped in roasted nori (seaweed) dipped in soy sauce. The dying father ate them hungrily and with deep relish."
  },
  {
    id: "Q-DETAIL-05",
    category: "B. DETAIL",
    difficulty_level: "Level 1 — Recall",
    chapter_scope: "Chapter 11",
    question: "What specific article of Naoko's clothing was Reiko wearing when Toru saw her off at the train station for Hokkaido?",
    source_ground_truth_criteria: "Naoko's heavy navy-blue fisherman's sweater and her coat. Reiko inherited and wore them as she boarded the northbound train."
  },

  // C. CAUSAL UNDERSTANDING
  {
    id: "Q-CAUSAL-01",
    category: "C. CAUSAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 2",
    question: "WHY did Kizuki and Naoko require Toru's presence in their intimate high school triad in Kobe?",
    source_ground_truth_criteria: "Kizuki and Naoko had been together since age three and formed a closed, hermetic, self-contained world. Their intimacy was so complete that they could not interact with the outside world alone. Toru acted as an open window or neutral electrical ground—allowing them to connect with normal social reality without fracturing their private union."
  },
  {
    id: "Q-CAUSAL-02",
    category: "C. CAUSAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 3 & 6",
    question: "WHAT caused Naoko's psychological breakdown and abrupt disappearance from Tokyo after her 20th birthday with Toru?",
    source_ground_truth_criteria: "During her 20th birthday, Toru and Naoko had sex. Toru discovered she was a virgin because she had never been able to become physically aroused or lubricated with Kizuki. Being able to get wet and feel desire with Toru made her feel intense guilt, as though her sexual body had betrayed Kizuki and contributed to his death. This cognitive and bodily conflict shattered her mental equilibrium."
  },
  {
    id: "Q-CAUSAL-03",
    category: "C. CAUSAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 6",
    question: "WHAT caused Reiko Ishida's initial nervous breakdown and her subsequent exile from ordinary society to Ami Hostel?",
    source_ground_truth_criteria: "Her career as a concert pianist ended due to sudden psychogenic hand spasms on stage. She married and had a child, achieving a happy domestic life teaching piano. A gifted, sociopathic 13-year-old female student seduced her, fabricated a sexual assault accusation, and turned the community against Reiko. The resulting social ostracization and betrayal caused a total nervous collapse, leading to her divorce and retreat to Ami Hostel."
  },
  {
    id: "Q-CAUSAL-04",
    category: "C. CAUSAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 8 & 9",
    question: "WHY did Toru become paralyzed and unable to commit to Midori when she confessed her love and asked for his total affection in Kichijoji?",
    source_ground_truth_criteria: "Toru had formally pledged his life to Naoko at Ami Hostel, promising to rent an apartment and wait for her recovery. Loving Midori felt like a betrayal and abandonment of the fragile, dying Naoko. He could not bring himself to abandon Naoko to suicide, yet he was deeply drawn to Midori's vitality."
  },
  {
    id: "Q-CAUSAL-05",
    category: "C. CAUSAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 10 & 11",
    question: "WHAT caused Toru's month-long vagrancy along the Boso and Kii Peninsulas following Naoko's death?",
    source_ground_truth_criteria: "Naoko's forest suicide shattered Toru's psyche and made ordinary life in Tokyo impossible. The shock and sorrow could not be processed intellectually; he had to physically walk until exhaustion, sleeping on beaches and crying into the wind, subjecting his body to physical hardship to burn through the unbearable weight of grief."
  },

  // D. CHARACTER UNDERSTANDING
  {
    id: "Q-CHAR-01",
    category: "D. CHARACTER UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 4, 8, 9",
    question: "What contradictory traits define Nagasawa's character, philosophy of life, and treatment of women?",
    source_ground_truth_criteria: "Nagasawa embodies extreme discipline, intellect, and aristocratic competence (reading Gatsby, passing the highest diplomatic exam, speaking fluent German, never self-pitying). Yet he possesses a profound emotional emptiness and predatory cynicism, sleeping with dozens of women without affection, discarding them callously, and neglecting his devoted girlfriend Hatsumi, recognizing his own moral corruption but refusing to alter it."
  },
  {
    id: "Q-CHAR-02",
    category: "D. CHARACTER UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 4, 5, 8, 9",
    question: "What traumatic domestic realities shaped Midori's personality, and why does she project such aggressive cheerfulness?",
    source_ground_truth_criteria: "Midori nursed her mother through prolonged brain cancer, dealing with incontinence, cognitive loss, and death while attending a wealthy private school where she felt like a poor outcast. Her family bookstore is bankrupt and her father dies of the same cancer. Her bluntness, dirty jokes, and aggressive cheerfulness are deliberate defensive armor developed to survive prolonged domestic sorrow and emotional deprivation."
  },
  {
    id: "Q-CHAR-03",
    category: "D. CHARACTER UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 1, 3, 6, 10",
    question: "What is Naoko's fundamental fear, and how does her speech change as her psychological condition deteriorates?",
    source_ground_truth_criteria: "Naoko fears losing her mental coherence, falling into the bottomless invisible well, and the unbearable guilt of surviving Kizuki. As she decompensates, her speech shifts from articulate, thoughtful reflection to disjointed, fragmented sentences, long pauses, an inability to find words, and eventually hallucinated voices."
  },
  {
    id: "Q-CHAR-04",
    category: "D. CHARACTER UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 2, 4, 9, 11",
    question: "How does Hatsumi function in the novel, what are her core values, and what is her ultimate fate?",
    source_ground_truth_criteria: "Hatsumi represents pure, quiet grace, dignity, and unconditional loyalty. She loves Nagasawa despite knowing he sleeps with other women, believing in enduring devotion. Toru sees her as an irreplaceable ideal. After Nagasawa goes to Germany, she marries another man but slits her wrists two years later at age 24, proving that innocence and pure nobility cannot survive in the real world."
  },
  {
    id: "Q-CHAR-05",
    category: "D. CHARACTER UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 2, 4, 8",
    question: "Why does Toru remain cynical and detached during the 1968-1969 university student strikes?",
    source_ground_truth_criteria: "Toru observes that the student radicals who scream Marxist slogans and barricade lecture halls are shallow, hypocritical conformists. As soon as exams or job hunts near, they cut their hair, don suits, and conform to the corporate system. Having experienced real death with Kizuki, Toru finds their ideological posturing theatrical and fraudulent."
  },

  // E. RELATIONSHIP UNDERSTANDING
  {
    id: "Q-REL-01",
    category: "E. RELATIONSHIP UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 2, 3, 6, 10, 11",
    question: "Trace the complete trajectory of the relationship between Toru Watanabe and Naoko from high school to the end of the novel.",
    source_ground_truth_criteria: "Starts as third wheel in Kobe triad with Kizuki; severed by Kizuki's suicide; reconnected accidentally in Tokyo on Chuo Line train; silent Sunday walks; intimate on her 20th birthday; Naoko vanishes to Ami Hostel; Toru visits her twice, pledging his life and fidelity; Naoko suffers psychotic relapse and hangs herself; Toru wanders in grief, conducts wake with Reiko, and carries Naoko's memory forever."
  },
  {
    id: "Q-REL-02",
    category: "E. RELATIONSHIP UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4, 5, 8, 9, 10, 11",
    question: "Trace the complete trajectory of the relationship between Toru Watanabe and Midori Kobayashi, including why it stalled and how it ended.",
    source_ground_truth_criteria: "Meets in drama lecture; develops through candid lunches, porn cinema date, visiting her bookstore, rooftop fire and smoke kiss; deepens when Toru feeds her dying father; stalls when Midori demands full love and Toru admits he is bound to Naoko; months of silence; reconciled in tea shop after Reiko urges Toru to choose life; ends with Toru calling her from station phone booth, professing love from the center of nowhere."
  },
  {
    id: "Q-REL-03",
    category: "E. RELATIONSHIP UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 6, 7, 10, 11",
    question: "Trace the relationship between Toru Watanabe and Reiko Ishida, and explain the nature of their encounter in Chapter 11.",
    source_ground_truth_criteria: "Begins as roommate and mentor at Ami Hostel; Reiko shares her past and plays guitar; acts as bridge between Toru and Naoko; writes crucial letter giving Toru permission to live; after Naoko dies, Reiko leaves hostel and visits Toru in Tokyo; hold 51-song wake; make love four times as a sacred affirmation of survival and shared grief, not infidelity; Reiko departs for Hokkaido, passing the torch of life."
  },
  {
    id: "Q-REL-04",
    category: "E. RELATIONSHIP UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4 & 9",
    question: "Trace the relationship between Toru and Nagasawa, explaining what bonded them and what caused their final moral separation.",
    source_ground_truth_criteria: "Bonded in dormitory over shared reading of The Great Gatsby and intellectual discipline; go on hunting sprees for women; Toru becomes disgusted by the moral vacuity; Nagasawa respects Toru's integrity but refuses to change; during farewell French dinner before Frankfurt, Toru sees Nagasawa's callousness toward Hatsumi and permanently distances himself from Nagasawa's predatory worldview."
  },
  {
    id: "Q-REL-05",
    category: "E. RELATIONSHIP UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4 & 9",
    question: "Trace the relationship between Nagasawa and Hatsumi, explaining why Hatsumi stayed and how it concluded.",
    source_ground_truth_criteria: "Hatsumi loves Nagasawa with dignified, unconditional grace, tolerating his numerous infidelities in the hope he will eventually settle down with her. Nagasawa leaves for Germany without committing. Hatsumi eventually marries someone else but slits her wrists two years later. Nagasawa writes Toru a cold letter acknowledging her death, revealing his total emotional detachment."
  },

  // F. EMOTIONAL UNDERSTANDING
  {
    id: "Q-EMOT-01",
    category: "F. EMOTIONAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 1",
    question: "What is the emotional state of 37-year-old Toru at Hamburg Airport, and why does the Beatles' song trigger it so violently?",
    source_ground_truth_criteria: "He feels overwhelming disorientation, intense somatic heartache, and acute grief. The melody bypasses intellectual defenses, triggering buried sensory memories of Naoko and the autumn meadow of 1969, forcing him to realize that memories are fading despite his promise never to forget her."
  },
  {
    id: "Q-EMOT-02",
    category: "F. EMOTIONAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 3",
    question: "What emotional atmosphere characterizes the Sunday walks between Toru and Naoko through Tokyo?",
    source_ground_truth_criteria: "A somber, heavy, rhythmic, and meditative silence. They walk for hours without speaking about Kizuki, using physical movement across Tokyo streets as a shared vessel for grief that cannot be put into words, clinging to each other's presence without emotional intrusion."
  },
  {
    id: "Q-EMOT-03",
    category: "F. EMOTIONAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 5",
    question: "What is the emotional tone of the rooftop fire scene with Midori, and how does it contrast with Toru's scenes with Naoko?",
    source_ground_truth_criteria: "Exuberant, chaotic, defiantly alive, and irreverent. While scenes with Naoko are drenched in silence, dampness, cold, and dread, the rooftop fire is filled with smoke, roaring sirens, cold beer, singing, and laughter, celebrating life right in the face of destruction."
  },
  {
    id: "Q-EMOT-04",
    category: "F. EMOTIONAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 9",
    question: "What emotional wound drives Midori's 'Strawberry Shortcake' outburst, and what is she really testing Toru for?",
    source_ground_truth_criteria: "She was emotionally deprived throughout her childhood and adolescence, having to sacrifice her desires to nurse dying parents without receiving affection. Her outburst is a test to see if someone can offer unconditional love that accepts irrationality and anger without abandoning or punishing her."
  },
  {
    id: "Q-EMOT-05",
    category: "F. EMOTIONAL UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 11",
    question: "Describe the emotional transition in the bedroom between Toru and Reiko during and after the wake of 51 songs.",
    source_ground_truth_criteria: "Transitions from solemn, nostalgic funeral mourning to desperate somatic intimacy and survival catharsis. In making love four times, they are not engaging in lust or disrespecting Naoko, but clutching warm living bodies to expel the freezing chill of death, moving from paralysis to the affirmation of life."
  },

  // G. MOTIF UNDERSTANDING
  {
    id: "Q-MOTIF-01",
    category: "G. MOTIF UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 6, 11",
    question: "Trace the motif of the song 'Norwegian Wood': its first appearance, recurrence at Ami Hostel, performance at the wake, and its emotional progression.",
    source_ground_truth_criteria: "1st: Muzak on 747 in Hamburg (ch 1) triggering Toru's adult grief. Recurrence: Played on acoustic guitar by Reiko at Ami Hostel (ch 6), causing Naoko to weep silently. Wake: Song #51 at the secular wake (ch 11), functioning as a farewell hymn to release Naoko's ghost. Moves from trigger of trauma &rarr; catalyst of grief &rarr; ritual of release."
  },
  {
    id: "Q-MOTIF-02",
    category: "G. MOTIF UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 6, 10, 11",
    question: "Trace the motif of the 'Meadow Well': who introduces it, what are its physical features, how does Reiko reference it later, and what does it symbolize?",
    source_ground_truth_criteria: "Introduced by Naoko in Ch 1 meadow near Kyoto. A bottomless, unrimmed pit hidden in tall pampas grass where one misstep leads to slow, lonely subterranean death. Reiko references it in Ch 10 warning Toru: 'Don't jump down the well with her.' Symbolizes the invisible, seductive abyss of madness and suicide lurking beneath everyday life."
  },
  {
    id: "Q-MOTIF-03",
    category: "G. MOTIF UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 5, 8, 11",
    question: "Trace the motif of 'Fire and Smoke': rooftop fire, crematorium, and cigarette smoke. How does its meaning change?",
    source_ground_truth_criteria: "Ch 5: Rooftop fire in Otsuka; woodsmoke and beer kiss; vitality defying destruction. Ch 8: Crematorium smoke from Midori's father's cremation; somatic bodily decay and finality. Ch 11: Reiko's continuous cigarette smoke during the wake; smoke as companion to meditation, mourning, and lingering spirits."
  },
  {
    id: "Q-MOTIF-04",
    category: "G. MOTIF UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 3 & 10",
    question: "Trace the motif of the 'Firefly in the Jar': how is it captured, how does it behave on the water tower, and what does it foreshadow?",
    source_ground_truth_criteria: "Captured by Storm Trooper in a Nescafe jar. On the dormitory roof water tower, Toru lets it out; it sits on his finger glowing faintly, hesitates for a long time, then takes off into the black sky leaving a faint trail of light. Foreshadows Naoko's fragile, fading life force, isolated from the world and vanishing into darkness."
  },
  {
    id: "Q-MOTIF-05",
    category: "G. MOTIF UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 1 & 11",
    question: "Trace the motif of the 'Blue Fisherman's Sweater': who wears it first, what happens to it, and what does its transfer signify?",
    source_ground_truth_criteria: "Worn by Naoko in Chapter 1 when walking in the meadow with Toru. Left behind at Ami Hostel after her suicide. Inherited and worn by Reiko in Chapter 11 as she boards the train for Hokkaido. Signifies the physical relic of the dead being carried forward and transformed into protective warmth by the living survivor."
  },

  // H. STRUCTURAL UNDERSTANDING
  {
    id: "Q-STRUCT-01",
    category: "H. STRUCTURAL UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1 & 11",
    question: "Why does Murakami frame the novel with 37-year-old Toru in Hamburg in Chapter 1, rather than starting chronologically in Kobe with Kizuki?",
    source_ground_truth_criteria: "Framing the story from 1986 creates immediate dramatic irony and elegiac distance. The reader knows from page one that Naoko is dead or lost, casting a melancholy shadow over every subsequent scene. It establishes the novel not as a conventional coming-of-age romance, but as an act of memory retrieval and the honoring of a solemn vow."
  },
  {
    id: "Q-STRUCT-02",
    category: "H. STRUCTURAL UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 2, 6",
    question: "In Chapter 1, Toru describes the meadow walk with Naoko before explaining Kizuki's suicide in Chapter 2. Why is this revelation delayed?",
    source_ground_truth_criteria: "By presenting the eerie, unsettling meadow walk and the terror of the unfenced well first, Murakami establishes the emotional mood of dread and psychological fragility before giving the causal historical backstory. When Kizuki's death is revealed in Chapter 2, it re-contextualizes the meadow walk with devastating clarity."
  },
  {
    id: "Q-STRUCT-03",
    category: "H. STRUCTURAL UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4, 6, 8, 10",
    question: "How does the structural alternation between Tokyo scenes and Ami Hostel scenes govern the novel's pacing?",
    source_ground_truth_criteria: "Tokyo represents the gritty, noisy, dynamic world of the living, university strikes, Midori, and physical survival. Ami Hostel represents the timeless, quiet, isolated sanctuary of the wounded, memory, and death. Alternating between them creates a dialectical rhythm between life and death pulling on Toru."
  },
  {
    id: "Q-STRUCT-04",
    category: "H. STRUCTURAL UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 4 & 9",
    question: "Why is the subplot of Nagasawa and Hatsumi intertwined with the Toru-Naoko-Midori narrative?",
    source_ground_truth_criteria: "Nagasawa and Hatsumi serve as an external tragic mirror. Hatsumi embodies pure, fragile devotion akin to Naoko, while Nagasawa embodies callous, pragmatic survival akin to the adult world Toru resists. Hatsumi's eventual suicide foreshadows the inescapable fate of those who cannot adapt to worldly cynicism."
  },
  {
    id: "Q-STRUCT-05",
    category: "H. STRUCTURAL UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1 & 11",
    question: "Analyze the relationship between the opening scene (airplane cabin) and the closing scene (phone booth).",
    source_ground_truth_criteria: "In the opening, Toru is 37, physically trapped in a metal plane cabin landing in Hamburg, listening to Muzak, overwhelmed by past memories. In the closing, Toru is 20, trapped in a glass phone booth in Tokyo, surrounded by rushing commuters, calling Midori into the future. Both scenes feature Toru encapsulated in a glass/metal box amidst transit, disoriented and unable to locate himself in reality."
  },

  // I. THEMATIC UNDERSTANDING
  {
    id: "Q-THEME-01",
    category: "I. THEMATIC UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 2, 8, 10, 11",
    question: "How does the central axiom—'Death exists not as the opposite but as an active part of life'—manifest through concrete events across the book?",
    source_ground_truth_criteria: "It begins as Toru's realization in bed after Kizuki's suicide. It manifests when Naoko carries Kizuki's ghost into her physical inability to love; in Midori's father dying of brain cancer while Toru feeds him crisp cucumbers; in Toru and Reiko making love right after Naoko's funeral. Death is physically embedded within living bodies and daily routines."
  },
  {
    id: "Q-THEME-02",
    category: "I. THEMATIC UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 3, 5, 8, 11",
    question: "How does Murakami use food, drink, and physical digestion to demarcate the living from the dying?",
    source_ground_truth_criteria: "The dying or death-bound characters cannot eat or eat with extreme detachment (Naoko eats sparingly at Ami Hostel; Kizuki's death is preceded by skipping meals; Midori's father cannot keep food down). The living assert vitality through hearty, sensory eating: Midori cooking feasts, drinking beer, eating dried squid, feeding fresh cucumbers with soy sauce, Toru cooking omelets."
  },
  {
    id: "Q-THEME-03",
    category: "I. THEMATIC UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 3, 4, 6, 11",
    question: "How does the depiction of female sexuality differ between Naoko and Midori, and what does this difference signify thematicallly?",
    source_ground_truth_criteria: "Naoko's sexuality is bound to trauma, shame, physical dryness with Kizuki, guilt, and emotional disintegration. Midori's sexuality is earthy, candid, humorous, uninhibited (watching porn, discussing sanitary pads, demanding physical love). This contrasts death-bound repression with life-affirming somatic openness."
  },
  {
    id: "Q-THEME-04",
    category: "I. THEMATIC UNDERSTANDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 6, 7, 10",
    question: "What is the philosophical danger of the Ami Hostel sanatorium, as articulated by Reiko?",
    source_ground_truth_criteria: "Ami Hostel is so sheltered, gentle, and egalitarian that it removes the harsh friction of the real world. Patients become addicted to this painless sanctuary and lose the ability to survive in ordinary reality. It becomes a halfway house to death rather than a bridge back to life."
  },
  {
    id: "Q-THEME-05",
    category: "I. THEMATIC UNDERSTANDING",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 3, 11",
    question: "What does the novel conclude about the power and limitations of human memory?",
    source_ground_truth_criteria: "Memory is an imperfect, fading watercolor that degrades over time; Toru struggles to recall Naoko's face even while remembering the meadow. Writing the book is a desperate effort to preserve her against oblivion, yet memory cannot resurrect the dead or shield the living from disorientation."
  },

  // J. EXPERIENCE RECONSTRUCTION
  {
    id: "Q-EXP-01",
    category: "J. EXPERIENCE RECONSTRUCTION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Whole novel",
    question: "How does the emotional meaning of memory change for the reader from Chapter 1 to Chapter 11?",
    source_ground_truth_criteria: "In Chapter 1, memory feels like a sharp, nostalgic ache triggered by an old song. By Chapter 11, after witnessing Kizuki's, Naoko's, and Hatsumi's deaths, memory feels like a crushing, permanent scar that alienates the survivor from ordinary reality, turning survival itself into an ambiguous burden."
  },
  {
    id: "Q-EXP-02",
    category: "J. EXPERIENCE RECONSTRUCTION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 2 to 11",
    question: "How does Toru's relationship to the dead evolve over the course of the novel?",
    source_ground_truth_criteria: "Initially, Toru is a passive bystander frozen by Kizuki's death, trying to outrun it in Tokyo. Later, he becomes a devoted caretaker to Naoko, nearly allowing her death-pull to drag him under. Finally, through the wake and Reiko's love, he recognizes that he must let the dead stay dead and choose the living, even if it leaves him scarred and lost."
  },
  {
    id: "Q-EXP-03",
    category: "J. EXPERIENCE RECONSTRUCTION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Whole novel",
    question: "Why does Midori's presence feel so radically different in texture and atmosphere from Naoko's?",
    source_ground_truth_criteria: "Naoko's presence is quiet, shadowy, damp, fragile, and marked by long silences and fear. Midori's presence is noisy, direct, tactile, vibrant, filled with sunlight, smells of frying food and smoke, and raw conversational honesty. Midori pulls the reader into the somatic present, while Naoko drags the reader into the psychic past."
  },
  {
    id: "Q-EXP-04",
    category: "J. EXPERIENCE RECONSTRUCTION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4, 6, 8, 10",
    question: "How does the sensory atmosphere change when moving from urban Tokyo to the Ami Hostel sanatorium?",
    source_ground_truth_criteria: "Tokyo is loud, humid, chaotic, smelling of asphalt, exhaust, and tear gas, filled with crowds and institutional hypocrisy. Ami Hostel is silent, crisp, smelling of cedar needles and woodsmoke, secluded in pine mountains, bathed in morning mist and acoustic music, feeling like an ethereal realm suspended outside of time."
  },
  {
    id: "Q-EXP-05",
    category: "J. EXPERIENCE RECONSTRUCTION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1 & 11",
    question: "Why does the ending of the novel feel profoundly disorienting rather than triumphal or cleanly tragic?",
    source_ground_truth_criteria: "Toru has made the heroic moral choice to live and love Midori, yet when she asks 'Where are you now?', he looks around and realizes he is completely lost in the center of nowhere. Survival does not come with automatic peace or clarity; having crossed the threshold between death and life, Toru is left existentially unmoored in modern Tokyo."
  }
];

// Write internal test set
const outputPath = path.join(__dirname, '..', 'validation', 'norwegian-wood', 'source-derived-test.json');
fs.writeFileSync(outputPath, JSON.stringify(testSet, null, 2), 'utf-8');
console.log(`Saved ${testSet.length} validation test items to ${outputPath}`);
