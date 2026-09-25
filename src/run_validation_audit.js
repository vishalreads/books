const fs = require('fs');
const path = require('path');

const testSet = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'validation', 'norwegian-wood', 'source-derived-test.json'), 'utf-8'));
const masterNotes = fs.readFileSync(path.join(__dirname, '..', 'docs', 'distillations', 'norwegian-wood', 'master-notes.md'), 'utf-8');

// Evaluation mapping
const evaluations = [
  {
    id: "Q-BASIC-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.1",
    confidence: "High",
    required_inference: false,
    bm_answer: "37-year-old Toru Watanabe lands aboard a Boeing 747 at Hamburg Airport, West Germany in November 1986. He hears an orchestral Muzak arrangement of The Beatles' 'Norwegian Wood'. It causes violent somatic pain, he doubles over in his seat covering his face, feeling his chest tear open.",
    classification: "EXACTLY SUPPORTED",
    notes: "Perfect match with source."
  },
  {
    id: "Q-BASIC-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 2.3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Seventeen-year-old Kizuki committed suicide in his family garage in Kobe in May 1967. He attached a rubber hose to his small Honda N-360 car's exhaust pipe, ran it through the car window, sealed the cracks with rags, and asphyxiated himself with carbon monoxide.",
    classification: "EXACTLY SUPPORTED",
    notes: "All details (garage, car model N-360, hose, rags, age 17) preserved."
  },
  {
    id: "Q-BASIC-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 3.6",
    confidence: "High",
    required_inference: false,
    bm_answer: "Storm Trooper gave Toru a firefly in an instant coffee jar. Toru took it to the dormitory roof water tower at dusk/twilight and released it into the night sky.",
    classification: "EXACTLY SUPPORTED",
    notes: "Preserved completely."
  },
  {
    id: "Q-BASIC-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 6.1 & 7.1",
    confidence: "Medium",
    required_inference: true,
    bm_answer: "Ami Hostel near Kyoto. A secluded communal retreat/sanctuary surrounded by cedar forests where patients and staff harvest crops together (cabbages/tomatoes). However, the specific barter payment system and the exact egalitarian clinical rule (doctors treated identically to patients) are omitted.",
    classification: "PARTIALLY SUPPORTED",
    notes: "Captures location, communal retreat, and farming, but omits specific barter economics and clinical philosophy rules."
  },
  {
    id: "Q-BASIC-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 11.3 & View B Motif Matrix",
    confidence: "High",
    required_inference: false,
    bm_answer: "Reiko plays exactly 51 consecutive songs on acoustic guitar. The final 51st song was 'Norwegian Wood'.",
    classification: "EXACTLY SUPPORTED",
    notes: "Exact number (51) and final song preserved."
  },
  {
    id: "Q-DETAIL-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 2.4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Storm Trooper majored in geography (cartography). He had an involuntary stutter on 'T' and 'N', performed morning radio calisthenics, fanatically bleached and disinfected the floor, and had a severe phobia of fire.",
    classification: "EXACTLY SUPPORTED",
    notes: "All specific quirks accurately captured."
  },
  {
    id: "Q-DETAIL-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 4.2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Midori took Toru to a seedy soft-core porn cinema in Shinjuku. While watching erotic films, she spoke with clinical casual honesty about female anatomy, masturbation, and dissatisfaction with sexual hypocrisy.",
    classification: "EXACTLY SUPPORTED",
    notes: "Captures location, nature of theater, and specific conversational topics."
  },
  {
    id: "Q-DETAIL-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 5.2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Midori grabbed two cans of cold beer, dried squid, and her acoustic guitar. She strummed chords and sang folk songs while watching the neighboring fire.",
    classification: "EXACTLY SUPPORTED",
    notes: "Exact snacks, beverage, instrument, and actions preserved."
  },
  {
    id: "Q-DETAIL-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 8.3 & Flashcard 2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Fresh cucumbers bought by Toru, sliced and wrapped in roasted nori with soy sauce, fed directly to the dying man.",
    classification: "EXACTLY SUPPORTED",
    notes: "Exact culinary and somatic preparation preserved."
  },
  {
    id: "Q-DETAIL-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 11.5 & View B Motif Matrix",
    confidence: "High",
    required_inference: false,
    bm_answer: "Reiko was wearing Naoko's rough navy-blue fisherman's sweater and coat as she boarded the train for Hokkaido.",
    classification: "EXACTLY SUPPORTED",
    notes: "Item and provenance preserved."
  },
  {
    id: "Q-CAUSAL-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 2.1 & View B Trajectory 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Kizuki and Naoko lived in a private, hermetically sealed universe since age 3. Toru functioned as their vital external bridge and balancing third vertex, enabling them to interact with ordinary reality without fracturing their union.",
    classification: "EXACTLY SUPPORTED",
    notes: "Causal mechanics of the triad fully articulated."
  },
  {
    id: "Q-CAUSAL-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 3.4 & 6.3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Naoko had never been able to become sexually lubricated or aroused with Kizuki. With Toru on her 20th birthday, she became wet and open. This physical arousal filled her with unbearable guilt, feeling she had betrayed Kizuki's memory and caused his death, precipitating her nervous collapse.",
    classification: "EXACTLY SUPPORTED",
    notes: "Somatic causal root preserved."
  },
  {
    id: "Q-CAUSAL-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 6.2 & View B Trajectory 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Reiko's concert career ended due to psychogenic hand tremors. Later, a gifted 13-year-old female piano student seduced her, fabricated a sexual assault scandal, and turned the community against Reiko, causing a total nervous breakdown and divorce.",
    classification: "EXACTLY SUPPORTED",
    notes: "Both causal phases preserved."
  },
  {
    id: "Q-CAUSAL-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 7.2, 9.2, View C Section 2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Toru was bound by a solemn vow to Naoko to rent an apartment and make a home for her upon release. Loving Midori felt like a betrayal and abandonment of a fragile dying girl. He felt choosing Midori was like murdering Naoko, while choosing Naoko was committing suicide.",
    classification: "EXACTLY SUPPORTED",
    notes: "Moral and dramatic impasse fully detailed."
  },
  {
    id: "Q-CAUSAL-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 11.1 & View B Trajectory 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Naoko's forest hanging completely shattered Toru's emotional structure. Grief could not be processed intellectually; he had to physically exhaust his body against coastal rocks, sleeping in bus shelters and crying into ocean winds.",
    classification: "EXACTLY SUPPORTED",
    notes: "Causal psychology of vagrancy preserved."
  },
  {
    id: "Q-CHAR-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 4.3, 4.4, 9.3, View B Trajectory 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Contradiction between supreme intellectual/physical discipline (5 AM wakeups, German, diplomatic exam, Gatsby) versus predatory nihilism, sleeping with dozens of women callously, neglecting Hatsumi, and operating without human empathy.",
    classification: "EXACTLY SUPPORTED",
    notes: "Both poles of Nagasawa's character preserved."
  },
  {
    id: "Q-CHAR-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 5.1, 5.4, 8.2, 8.4, Flashcard 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Nursed her mother through prolonged terminal brain cancer, bookstore drowned in debt, sister struggling, father dying of same cancer. Her bluntness, humor, and aggressive cheerfulness are defensive armor developed to survive prolonged domestic sorrow and neglect.",
    classification: "EXACTLY SUPPORTED",
    notes: "Character psychology and background preserved."
  },
  {
    id: "Q-CHAR-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.2, 10.1, View B Trajectory 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Naoko fears losing her sanity, falling into the bottomless unfenced well, and survivor guilt. As she decompensates, she cannot control her bladder, her hair is jagged, she hears screaming voices in the trees, and loses coherent speech.",
    classification: "EXACTLY SUPPORTED",
    notes: "Fear and decompensation symptoms preserved."
  },
  {
    id: "Q-CHAR-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 4.5, 9.3, View B Trajectory 5",
    confidence: "High",
    required_inference: false,
    bm_answer: "Hatsumi represents pure, aristocratic grace and unconditional devotion. She endures Nagasawa's infidelity. Toru sees her as an irreplaceable ideal. After Nagasawa departs for Germany, she marries another man and commits suicide by slitting her wrists at age 24.",
    classification: "EXACTLY SUPPORTED",
    notes: "Character role, values, and tragic fate preserved."
  },
  {
    id: "Q-CHAR-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 2.5",
    confidence: "High",
    required_inference: false,
    bm_answer: "Toru finds the student radicals hypocritical: they shout slogans and barricade buildings, but quickly cut their hair and wear suits for corporate jobs once exams approach. Having experienced real death with Kizuki, Toru finds their posturing theatrical and shallow.",
    classification: "EXACTLY SUPPORTED",
    notes: "Alienation rationale preserved."
  },
  {
    id: "Q-REL-01",
    answered_from_bm: true,
    supporting_section: "View B Trajectory 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Complete 6-stage trajectory: Stage 1 high school triad in Kobe; Stage 2 train reunion in Tokyo; Stage 3 silent Sunday walks; Stage 4 20th birthday intimacy and disappearance; Stage 5 Ami Hostel visits and psychotic relapse; Stage 6 suicide, coastal wandering, wake, and lifelong memory monument.",
    classification: "EXACTLY SUPPORTED",
    notes: "Comprehensive trajectory reconstruction."
  },
  {
    id: "Q-REL-02",
    answered_from_bm: true,
    supporting_section: "View B Trajectory 2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Complete 6-stage trajectory: Stage 1 Euripides lecture; Stage 2 lunches and walks; Stage 3 porn cinema date and bookstore visits; Stage 4 rooftop fire and smoke kiss; Stage 5 Strawberry Shortcake impasse and months of silence; Stage 6 tea shop reconciliation and phone booth call.",
    classification: "EXACTLY SUPPORTED",
    notes: "Full trajectory preserved."
  },
  {
    id: "Q-REL-03",
    answered_from_bm: true,
    supporting_section: "View B Trajectory 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Complete 6-stage trajectory: Stage 1 roommate and guide at Ami Hostel; Stage 2 sharing life history; Stage 3 harvesting cabbages and guitar sessions; Stage 4 letter urging Toru to live; Stage 5 arrival in Tokyo after Naoko's suicide; Stage 6 51-song wake, somatic lovemaking, and train departure.",
    classification: "EXACTLY SUPPORTED",
    notes: "Full trajectory preserved."
  },
  {
    id: "Q-REL-04",
    answered_from_bm: true,
    supporting_section: "View B Trajectory 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Complete 6-stage trajectory: Stage 1 Gatsby reading bond in dorm; Stage 2 intellectual discussions; Stage 3 Shinjuku bar hunting; Stage 4 Toru's moral nausea; Stage 5 farewell French dinner before Frankfurt; Stage 6 permanent moral severance.",
    classification: "EXACTLY SUPPORTED",
    notes: "Full trajectory preserved."
  },
  {
    id: "Q-REL-05",
    answered_from_bm: true,
    supporting_section: "View B Trajectory 5",
    confidence: "High",
    required_inference: false,
    bm_answer: "Complete 6-stage trajectory: Stage 1 college sweethearts; Stage 2 enduring infidelities; Stage 3 pool hall elegance; Stage 4 Nagasawa's departure for Frankfurt; Stage 5 marriage to another man; Stage 6 suicide by slitting wrists at age 24.",
    classification: "EXACTLY SUPPORTED",
    notes: "Full trajectory preserved."
  },
  {
    id: "Q-EMOT-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.1 & View C Section 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Overwhelming somatic disorientation and heartache. The Muzak melody acts as a sensory trigger that bypasses intellectual defenses, bringing back eighteen years of buried trauma and the painful realization that memories are fading.",
    classification: "EXACTLY SUPPORTED",
    notes: "Emotional dynamics preserved."
  },
  {
    id: "Q-EMOT-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 3.2 & View B Trajectory 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Mute, rhythmic, meditative silence. Walking 5-6 hours across Tokyo without speaking of Kizuki, using shared bodily movement as a container for grief too heavy for words.",
    classification: "EXACTLY SUPPORTED",
    notes: "Atmospheric and emotional texture preserved."
  },
  {
    id: "Q-EMOT-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 5.2, 5.3, View C Section 1-3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Defiantly alive, humorous, sensory, and irreverent. In stark contrast to Naoko's cold dampness and silence, the rooftop fire is filled with cold beer, dried squid, singing, and a kiss tasting of woodsmoke.",
    classification: "EXACTLY SUPPORTED",
    notes: "Contrast and emotional texture preserved."
  },
  {
    id: "Q-EMOT-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 9.2 & Flashcard 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Emotional deprivation from nursing dying parents. She tests Toru to see if he can provide unreasonable, unconditional acceptance that will not abandon her during emotional storms.",
    classification: "EXACTLY SUPPORTED",
    notes: "Psychological and emotional wound preserved."
  },
  {
    id: "Q-EMOT-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 11.3, 11.4, Flashcard 3, View C Section 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Transitions from funeral mourning through 51 songs to a desperate, sacred communion of living flesh. Making love four times expels the freezing chill of death and affirms ongoing life.",
    classification: "EXACTLY SUPPORTED",
    notes: "Cathartic emotional transition preserved."
  },
  {
    id: "Q-MOTIF-01",
    answered_from_bm: true,
    supporting_section: "View B Motif Matrix Row 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "1st: Muzak on 747 in Hamburg (ch 1) triggering trauma. Recurrence: Reiko on guitar at Ami Hostel (ch 6) causing weeping. Final: Song #51 at secular wake (ch 11) acting as funeral liturgy releasing ghost. Moves from trigger to catalyst to release.",
    classification: "EXACTLY SUPPORTED",
    notes: "Complete motif trajectory preserved."
  },
  {
    id: "Q-MOTIF-02",
    answered_from_bm: true,
    supporting_section: "View B Motif Matrix Row 2 & Content Unit 1.2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Introduced by Naoko in Ch 1 meadow near Kyoto. A bottomless, unrimmed pit in pampas grass where one falls to slow subterranean death. Reiko warns in Ch 10: 'Don't jump down the well with her.' Symbolizes the invisible abyss of psychic collapse.",
    classification: "EXACTLY SUPPORTED",
    notes: "Complete motif trajectory preserved."
  },
  {
    id: "Q-MOTIF-03",
    answered_from_bm: true,
    supporting_section: "View B Motif Matrix Row 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Ch 5: Rooftop fire / woodsmoke kiss (vitality in destruction). Ch 8: Crematorium chimney smoke (bodily decay). Ch 11: Reiko's continuous cigarette smoke during wake (companion to mourning).",
    classification: "EXACTLY SUPPORTED",
    notes: "Shifting context and significance preserved."
  },
  {
    id: "Q-MOTIF-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 3.6 & View B Motif Matrix Row 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Storm Trooper catches it in instant coffee jar. Toru releases it on water tower roof; it clings to finger, hesitates, flies into night trailing faint light. Foreshadows Naoko's fragile, fading life force.",
    classification: "EXACTLY SUPPORTED",
    notes: "Provenance and symbolic significance preserved."
  },
  {
    id: "Q-MOTIF-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.2, 11.5, View B Motif Matrix Row 6",
    confidence: "High",
    required_inference: false,
    bm_answer: "Worn by Naoko in Ch 1 meadow walk; left behind at Ami Hostel; worn by Reiko in Ch 11 as she boards northbound train. Represents physical relic of the dead inherited and worn as living protection.",
    classification: "EXACTLY SUPPORTED",
    notes: "Provenance, movement, and meaning preserved."
  },
  {
    id: "Q-STRUCT-01",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.1, View B Section 3 Timeline B",
    confidence: "High",
    required_inference: false,
    bm_answer: "Framing with 37-year-old Toru establishes dramatic irony and elegiac distance. Reader knows from page 1 that Naoko is dead/lost, casting a melancholy shadow over everything. Establishes novel as an act of memory retrieval.",
    classification: "EXACTLY SUPPORTED",
    notes: "Structural rationale preserved."
  },
  {
    id: "Q-STRUCT-02",
    answered_from_bm: true,
    supporting_section: "View B Section 3 Timeline B",
    confidence: "High",
    required_inference: false,
    bm_answer: "Presenting the meadow walk and terrifying well before revealing Kizuki's suicide plants psychological dread and vulnerability first. When Kizuki's death is revealed in Chapter 2, it re-contextualizes the meadow walk with sudden clarity.",
    classification: "EXACTLY SUPPORTED",
    notes: "Narrative pacing and delay preserved."
  },
  {
    id: "Q-STRUCT-03",
    answered_from_bm: true,
    supporting_section: "View C Section 1 & View B Section 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Tokyo represents loud, gritty, active survival, student strikes, Midori, and life. Ami Hostel represents quiet, isolated, timeless sanctuary of the wounded, memory, and death. Alternation creates a dialectic pulling Toru between life and death.",
    classification: "EXACTLY SUPPORTED",
    notes: "Dialectical rhythm preserved."
  },
  {
    id: "Q-STRUCT-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 4.5, 9.3, View B Trajectory 5",
    confidence: "High",
    required_inference: false,
    bm_answer: "Nagasawa and Hatsumi serve as a dark aristocratic mirror. Hatsumi mirrors Naoko's pure, doomed devotion, while Nagasawa mirrors cold worldly cynicism. Hatsumi's suicide foreshadows the doom of pure souls in the modern world.",
    classification: "EXACTLY SUPPORTED",
    notes: "Thematic mirroring preserved."
  },
  {
    id: "Q-STRUCT-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.1, 11.6, View B Motif Matrix Row 7, View C Section 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Both feature Toru encapsulated in transit containers (airplane cabin vs glass phone booth), surrounded by crowds, experiencing disorientation and unable to locate himself in reality.",
    classification: "EXACTLY SUPPORTED",
    notes: "Opening-closing correspondence preserved."
  },
  {
    id: "Q-THEME-01",
    answered_from_bm: true,
    supporting_section: "Executive Orientation, Content Unit 2.6, 8.3, 11.4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Formulated in bed after Kizuki's suicide. Manifests in Naoko's inability to love, Midori's father's cancer ward feeding, and Toru and Reiko's lovemaking after the wake. Death is physically woven into living bodies.",
    classification: "EXACTLY SUPPORTED",
    notes: "Thematic emergence across events preserved."
  },
  {
    id: "Q-THEME-02",
    answered_from_bm: true,
    supporting_section: "Content Unit 5.2, 8.3, View C Section 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "The dying cannot eat or eat with detachment. The living assert vitality through hearty eating: Midori cooking feasts, beer, dried squid, feeding fresh nori cucumbers with soy sauce to the dying father.",
    classification: "EXACTLY SUPPORTED",
    notes: "Somatic eating motif preserved."
  },
  {
    id: "Q-THEME-03",
    answered_from_bm: true,
    supporting_section: "Content Unit 3.4, 4.2, 6.3, View C Section 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Naoko's sexuality is defined by dryness, trauma, guilt, and breakdown. Midori's sexuality is earthy, candid, humorous, and life-affirming (porn cinema, anatomy, demanding physical love). Demarcates death-bound guilt vs life-affirming openness.",
    classification: "EXACTLY SUPPORTED",
    notes: "Thematic contrast preserved."
  },
  {
    id: "Q-THEME-04",
    answered_from_bm: true,
    supporting_section: "Content Unit 6.1, 10.1, 10.2",
    confidence: "High",
    required_inference: false,
    bm_answer: "Ami Hostel is so sheltered and friction-free that residents lose the capacity to survive in ordinary reality. It becomes a peaceful halfway house to death rather than a bridge to life.",
    classification: "EXACTLY SUPPORTED",
    notes: "Institutional danger preserved."
  },
  {
    id: "Q-THEME-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 1.3, View C Section 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Memory is an imperfect, fading watercolor that degrades over time. Writing the book is a monument against forgetting, but memory cannot resurrect the dead or cure existential disorientation.",
    classification: "EXACTLY SUPPORTED",
    notes: "Memory philosophy preserved."
  },
  {
    id: "Q-EXP-01",
    answered_from_bm: true,
    supporting_section: "View C Section 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Shifts from a nostalgic, sharp ache triggered by Muzak in Chapter 1 to an acute traumatic rupture, cathartic exhaustion, and ultimately a permanent existential scar in Chapter 11.",
    classification: "EXACTLY SUPPORTED",
    notes: "Emotional trajectory of memory preserved."
  },
  {
    id: "Q-EXP-02",
    answered_from_bm: true,
    supporting_section: "View C Section 2, View B Trajectory 1 & 7",
    confidence: "High",
    required_inference: false,
    bm_answer: "Toru evolves from passive bystander frozen by Kizuki's suicide, to devoted caretaker almost dragged down the well with Naoko, to choosing the living with Midori while carrying the dead inside his cells.",
    classification: "EXACTLY SUPPORTED",
    notes: "Trajectory of relationship to death preserved."
  },
  {
    id: "Q-EXP-03",
    answered_from_bm: true,
    supporting_section: "View C Section 1 & 3",
    confidence: "High",
    required_inference: false,
    bm_answer: "Naoko's presence is quiet, shadowy, damp, fragile, and marked by silences. Midori's presence is loud, direct, tactile, smelling of frying food and beer, pulling the reader into the somatic present.",
    classification: "EXACTLY SUPPORTED",
    notes: "Experiential texture preserved."
  },
  {
    id: "Q-EXP-04",
    answered_from_bm: true,
    supporting_section: "View C Section 1",
    confidence: "High",
    required_inference: false,
    bm_answer: "Tokyo smells of asphalt, frying oil, humidity, and tear gas, filled with cynical crowds. Ami Hostel smells of cedar needles, mountain air, and woodsmoke, feeling like a quiet realm suspended outside time.",
    classification: "EXACTLY SUPPORTED",
    notes: "Atmospheric sensory shift preserved."
  },
  {
    id: "Q-EXP-05",
    answered_from_bm: true,
    supporting_section: "Content Unit 11.6, Flashcard 5, View C Section 4",
    confidence: "High",
    required_inference: false,
    bm_answer: "Choosing life does not bring a neat resolution. Toru stands in a glass phone booth surrounded by crowds, unable to identify where he is. Surviving leaves him existentially unmoored in the center of nowhere.",
    classification: "EXACTLY SUPPORTED",
    notes: "Ambiguous conclusion preserved."
  }
];

// Calculate statistics
const stats = {
  total: evaluations.length,
  exactly_supported: evaluations.filter(e => e.classification === 'EXACTLY SUPPORTED').length,
  partially_supported: evaluations.filter(e => e.classification === 'PARTIALLY SUPPORTED').length,
  incorrect: evaluations.filter(e => e.classification === 'INCORRECT').length,
  unsupported_inference: evaluations.filter(e => e.classification === 'UNSUPPORTED INFERENCE').length,
  absent: evaluations.filter(e => e.classification === 'ABSENT').length,
};

console.log("Evaluation Results:", stats);

// Save evaluations to JSON
fs.writeFileSync(
  path.join(__dirname, '..', 'validation', 'norwegian-wood', 'validation-results.json'),
  JSON.stringify({ stats, evaluations }, null, 2),
  'utf-8'
);
