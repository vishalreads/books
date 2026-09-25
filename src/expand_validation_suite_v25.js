const fs = require('fs');
const path = require('path');

const testPath = path.join(__dirname, '..', 'validation', 'norwegian-wood', 'source-derived-test.json');
const existingTests = JSON.parse(fs.readFileSync(testPath, 'utf8'));

const newTests = [
  // ADVERSARIAL QUESTIONS (Designed to expose summarisation)
  {
    id: "Q-ADV-01",
    category: "ADVERSARIAL: ORDINARY DETAIL / LATER SIGNIFICANCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 2 & 11",
    question: "What ordinary high school afternoon game in May 1967 did Kizuki initiate with Toru, and how does its outcome and parting gesture contrast with the typical rhythm of their friendship?",
    source_ground_truth_criteria: "Kizuki skipped classes to play pool in the rain. Kizuki, who normally lost to Toru, played with intense, eerie focus and won 2 games to 1. He gave a quiet half-smile and said 'See ya, Watanabe'—a mundane facade concealing his planned suicide that night."
  },
  {
    id: "Q-ADV-02",
    category: "ADVERSARIAL: ROUTINE & ECONOMIC GROUNDING",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 2, 4, 8",
    question: "What part-time job does Toru work in Tokyo, what merchandise does he handle, and how does it explain his domestic independence and cultural knowledge?",
    source_ground_truth_criteria: "Toru works part-time at a record shop in Shibuya specializing in imported jazz and rock vinyl. His wages pay his living expenses and rent in Kichijoji, and explain his encyclopedic knowledge of American/British music (Beatles, Coltrane, Monk, Cream)."
  },
  {
    id: "Q-ADV-03",
    category: "ADVERSARIAL: INSTITUTIONAL TEXTURE & CARE PHILOSOPHY",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 6",
    question: "How does Ami Hostel handle money, doctor-patient hierarchy, and the philosophy of mental recovery differently from conventional psychiatric hospitals?",
    source_ground_truth_criteria: "No locked gates; cashless barter economy where residents and staff work together in fields and workshops; doctors and nurses wear ordinary clothes, eat identical food, and acknowledge their own neuroses; the philosophy aims not at forced social readjustment but at creating a friction-free equilibrium."
  },
  {
    id: "Q-ADV-04",
    category: "ADVERSARIAL: FAMILY HISTORY / UNANNOUNCED TRAUMA",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 6",
    question: "What specific family tragedy did Naoko experience during sixth grade, who discovered the body, and how did Naoko describe its lingering psychological shadow without psychiatric labels?",
    source_ground_truth_criteria: "When Naoko was 11 in sixth grade, her 17-year-old elder sister—a brilliant, seemingly flawless student—locked her bedroom and hanged herself from the ceiling beam without a note. Naoko unlocked the door and discovered her dangling body. Naoko lived ever after with the quiet dread that an unexplained darkness resided in her family, fearing she would be pulled into it."
  },
  {
    id: "Q-ADV-05",
    category: "ADVERSARIAL: DELIBERATE WITHHOLDING OF INFORMATION",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 4 & 9",
    question: "What tragic outcome regarding Hatsumi is revealed to the reader years after the main narrative events, and how does Toru learn about it?",
    source_ground_truth_criteria: "Hatsumi marries another man after Nagasawa leaves for Frankfurt, but commits suicide by slitting her wrists two years later at age 24. Toru learns about it through a cold letter from Nagasawa, severing their connection permanently."
  },

  // CROSS-SCENE SYNTHESIS QUESTIONS (Scene A + Scene B + Scene C -> Understanding D)
  {
    id: "Q-CROSS-01",
    category: "CROSS-SCENE SYNTHESIS: SOMATIC INTIMACY",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 3, 6, 11",
    question: "Synthesize Naoko's 20th birthday encounter (Ch 3), her pine woods confession (Ch 6), and Toru's lovemaking with Reiko (Ch 11) to explain how physical sexuality operates across the novel.",
    source_ground_truth_criteria: "In Ch 3, sex brings guilt and collapse because Naoko became wet with Toru despite never being aroused by Kizuki. In Ch 6, she confesses this physiological betrayal of the dead. In Ch 11, sex with Reiko is transformed from guilt into a sacred survival communion—two survivors clutching warm living flesh to expel the freezing chill of death."
  },
  {
    id: "Q-CROSS-02",
    category: "CROSS-SCENE SYNTHESIS: NOURISHMENT VS DECAY",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 5, 8, 9",
    question: "Connect Midori's rooftop beer/squid (Ch 5), the nori cucumber fed to her dying father (Ch 8), and her elaborate Kichijoji feast (Ch 9) to show how food functions in Midori's relationship with Toru.",
    source_ground_truth_criteria: "Food is Midori's somatic language of defiance, care, and love. On the roof, beer and dried squid celebrate life amidst fire; in the hospital, fresh cucumber wrapped in nori offers physical dignity to the dying; in Kichijoji, the multi-dish feast is her somatic offering of love demanding emotional reciprocity."
  },
  {
    id: "Q-CROSS-03",
    category: "CROSS-SCENE SYNTHESIS: THE LEITMOTIF OF THE SONG",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 6, 11",
    question: "Connect the three performances of 'Norwegian Wood' (Hamburg 747, Ami Hostel cottage, Tokyo secular wake) to demonstrate how the song's narrative function shifts from trauma trigger to grieving catalyst to ritual release.",
    source_ground_truth_criteria: "In Ch 1, Muzak version punctures Toru's adult numbness as an involuntary somatic trauma trigger. In Ch 6, Reiko's guitar playing acts as a grief catalyst opening Naoko's tears. In Ch 11, it is song #51 in the secular wake, functioning as a deliberate musical liturgy releasing Naoko's ghost so Toru and Reiko can survive."
  },
  {
    id: "Q-CROSS-04",
    category: "CROSS-SCENE SYNTHESIS: CLOTHING AS SURVIVAL RELIC",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 1, 6, 11",
    question: "Trace the physical path of the navy-blue fisherman's sweater from the Kyoto meadow to the northbound train platform in Tokyo, and explain what its transfer means.",
    source_ground_truth_criteria: "Worn by Naoko in the Ch 1 meadow walk; left behind at Ami Hostel among her belongings; inherited and worn by Reiko in Ch 11 as she boards the train for Hokkaido. The transfer signifies the physical relic of the dead being repurposed into protective warmth for the living survivor."
  },
  {
    id: "Q-CROSS-05",
    category: "CROSS-SCENE SYNTHESIS: THE DIALECTIC OF URBAN VS SANCTUARY",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapters 2, 6, 8, 10, 11",
    question: "Contrast the social reality of Tokyo (strikes, commercial bustle, cancer ward, phone booth) with Ami Hostel, and explain why neither can offer Toru permanent peace.",
    source_ground_truth_criteria: "Tokyo is chaotic, cynical, and exhausting, yet it is where real life, work, food, and Midori exist. Ami Hostel is beautiful and gentle, yet its lack of friction makes it a stagnant halfway house to death. Toru must choose the friction of Tokyo to live, even though it leaves him alienated in the phone booth."
  },

  // DEEP CAUSAL "WHY" QUESTIONS
  {
    id: "Q-WHY-01",
    category: "CAUSAL: WHY SCENES MATTER",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 2",
    question: "WHY did Kizuki's suicide permanently freeze Toru and Naoko's emotional development at age seventeen?",
    source_ground_truth_criteria: "Because Kizuki died without warning, note, or conflict, taking their shared youth with him. By dying at 17, Kizuki remained forever pure and young, leaving Toru and Naoko unable to mature naturally into adulthood without feeling they were abandoning him."
  },
  {
    id: "Q-WHY-02",
    category: "CAUSAL: WHY SCENES MATTER",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 3",
    question: "WHY was Naoko's virginity at age twenty such a shocking revelation to Toru, given her lifelong relationship with Kizuki?",
    source_ground_truth_criteria: "Because Kizuki and Naoko appeared to be the ultimate, inseparable romantic couple since early childhood. Discovering that their physical union had never been consummated exposed the profound somatic blockage at the heart of their conjoined dynamic."
  },
  {
    id: "Q-WHY-03",
    category: "CAUSAL: WHY SCENES MATTER",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 9",
    question: "WHY did Midori formulate her demand for love through the 'Strawberry Shortcake' paradox?",
    source_ground_truth_criteria: "Because having spent her youth sacrificing herself to care for dying, irritable parents without receiving love, she needed an unconditional love durable enough to withstand irrational anger and emotional testing without retaliation or abandonment."
  },
  {
    id: "Q-WHY-04",
    category: "CAUSAL: WHY SCENES MATTER",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 10",
    question: "WHY did Reiko write to Toru that choosing Midori was not a betrayal of Naoko?",
    source_ground_truth_criteria: "Because Reiko recognized that Toru could not save Naoko by jumping into the well with her. She understood that life must choose life, and that loving Midori was a healthy human instinct that honored life rather than a moral crime against the dead."
  },
  {
    id: "Q-WHY-05",
    category: "CAUSAL: WHY SCENES MATTER",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapter 11",
    question: "WHY does Toru scream Midori's name from 'the center of nowhere' at the close of the book?",
    source_ground_truth_criteria: "Because having chosen life, survived the suicides of Kizuki and Naoko, and stepped out of his grief, he has lost his traditional coordinates in reality. He is alive in the modern crowd, but profoundly unmoored, calling to the living from an existential void."
  },

  // EMOTIONAL CAUSALITY QUESTIONS (Trigger -> Behavioural Manifestation -> Consequence)
  {
    id: "Q-EMOTCAUS-01",
    category: "EMOTIONAL CAUSALITY: TRIGGER & CONSEQUENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 3",
    question: "Trace the emotional chain of Naoko's 20th birthday: what was the trigger, how did it manifest behaviorally, and what was its immediate and long-term consequence?",
    source_ground_truth_criteria: "Trigger: Crossing the threshold into age 20 without Kizuki, coupled with wine. Manifestation: Hours of violent, racking weeping followed by unexpected sexual arousal and consummation with Toru. Consequence: Severe guilt over physical arousal leading to abrupt departure from Tokyo and institutional retreat to Ami Hostel."
  },
  {
    id: "Q-EMOTCAUS-02",
    category: "EMOTIONAL CAUSALITY: TRIGGER & CONSEQUENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 5",
    question: "Trace the emotional chain of the rooftop fire: what was the trigger, how did Midori manifest her emotional state, and how did it affect Toru?",
    source_ground_truth_criteria: "Trigger: Neighbor's house catching fire with sirens and billowing smoke. Manifestation: Midori grabs beer, dried squid, and guitar, singing folk songs and laughing on the tin roof, ending in a smoke-flavored kiss. Consequence: Toru's first visceral sensory awakening to romantic possibility in the present world."
  },
  {
    id: "Q-EMOTCAUS-03",
    category: "EMOTIONAL CAUSALITY: TRIGGER & CONSEQUENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 9",
    question: "Trace the emotional chain of the Kichijoji feast: what was Midori's expectation, what was Toru's response, and what was the consequence for their communication?",
    source_ground_truth_criteria: "Trigger: Midori breaks up with her boyfriend and cooks an elaborate feast expecting Toru to commit. Manifestation: Toru confesses he is bound to a girl in a sanatorium; Midori delivers the Strawberry Shortcake outburst and walks out. Consequence: Months of total silence and estrangement."
  },
  {
    id: "Q-EMOTCAUS-04",
    category: "EMOTIONAL CAUSALITY: TRIGGER & CONSEQUENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 10 & 11",
    question: "Trace the emotional chain of the suicide telegram: what did the telegram state, how did Toru react behaviorally, and where did it lead him?",
    source_ground_truth_criteria: "Trigger: Telegram stating 'NAOKO DIED. FUNERAL SUNDAY.' Manifestation: Toru experiences internal psychic collapse, packs a rucksack, and wanders aimlessly for a month along the Pacific coast, sleeping on beaches and howling into the wind. Consequence: Physical exhaustion of his grief, preparing him to re-enter life."
  },
  {
    id: "Q-EMOTCAUS-05",
    category: "EMOTIONAL CAUSALITY: TRIGGER & CONSEQUENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "Chapter 11",
    question: "Trace the emotional chain of the 51-song wake: what provoked it, how did it transition in the bedroom, and what was its consequence the following morning?",
    source_ground_truth_criteria: "Trigger: Reiko's arrival with Naoko's clothes and guitar. Manifestation: Playing 51 songs as a secular funeral liturgy, transitioning into making love four times in the dark as an affirmation of survival. Consequence: Reiko gains the strength to move north to Hokkaido, while Toru commits to calling Midori."
  },

  // VIEW-SPECIFIC VALIDATION QUESTIONS
  {
    id: "Q-VIEW-01",
    category: "VIEW VALIDATION: VIEW A CHRONOLOGY",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Chapters 1 to 11",
    question: "In View A (Source Journey), how does the narrative sequence of Toru's meetings with Midori interleave with his visits to Ami Hostel?",
    source_ground_truth_criteria: "Toru meets Midori in Ch 4; visits Otsuka bookstore in Ch 5; visits Ami Hostel in Ch 6; visits cancer ward with Midori in Ch 8; has Kichijoji impasse in Ch 9; visits Ami Hostel again in Ch 10; reconciles with Midori in Ch 10 before Naoko's suicide telegram. The narrative alternates strictly between urban presence and mountain retreat."
  },
  {
    id: "Q-VIEW-02",
    category: "VIEW VALIDATION: VIEW B TRAJECTORIES",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "View B Matrix",
    question: "In View B (Knowledge Map), how does the trajectory of Nagasawa ↔ Hatsumi parallel and contrast with the trajectory of Toru ↔ Naoko?",
    source_ground_truth_criteria: "Both involve pure, loyal, noble figures (Hatsumi, Naoko) bound to flawed or absent men. While Toru tries desperately to save Naoko, Nagasawa callously abandons Hatsumi to pursue his worldly ambitions. Both women ultimately commit suicide (Naoko by hanging, Hatsumi by slitting wrists at 24)."
  },
  {
    id: "Q-VIEW-03",
    category: "VIEW VALIDATION: VIEW C EXPERIENCE",
    difficulty_level: "Level 3 — Reconstruction",
    chapter_scope: "View C Sensory Landscape",
    question: "In View C (Experience Reconstruction), how does the 'emotional weather' change between Tokyo, Ami Hostel, and the coastal wilderness?",
    source_ground_truth_criteria: "Tokyo is marked by humid heat, asphalt, rain, and grime; Ami Hostel is marked by biting cedar mountain air, morning mist, and woodsmoke; the coastal wilderness is marked by freezing Pacific ocean winds, salt spray, and barren rocks."
  },
  {
    id: "Q-VIEW-04",
    category: "VIEW VALIDATION: EPISTEMIC SEPARATION",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Part IV Analytical Lens",
    question: "Why are Freudian drive theory (Thanatos/Eros) and psychiatric codes quarantined in Part IV rather than presented as authorial narrative truth?",
    source_ground_truth_criteria: "Because Murakami's novel is an intuitive literary work of elegiac realism that never uses clinical psychiatric terminology. Quarantining these models in Part IV preserves the author's authentic voice while providing external critical frameworks for study without confusing source fact with interpretation."
  },
  {
    id: "Q-VIEW-05",
    category: "VIEW VALIDATION: MATERIALITY AND ZERO MATERIAL LOSS",
    difficulty_level: "Level 2 — Understanding",
    chapter_scope: "Whole Codex",
    question: "How does the BKRS V2.5 canonical codex ensure 'Zero Material Understanding Loss' while compressing redundant text?",
    source_ground_truth_criteria: "By preserving all Level 1 Critical and Level 2 Important events, causal mechanics, relationship trajectories, and motifs, while compressing only Level 4 redundant material and retaining Level 3 textural realism (record shop, pool match, nori cucumber, beer on roof) to maintain psychological and emotional authenticity."
  }
];

const totalSuite = [...existingTests, ...newTests];
fs.writeFileSync(testPath, JSON.stringify(totalSuite, null, 2), 'utf8');
console.log(`Saved expanded validation test suite: ${totalSuite.length} questions (50 existing + 25 new targeted/adversarial/cross-scene/view tests)!`);
