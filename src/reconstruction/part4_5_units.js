/**
 * BKRS Milestone 3 - Part 4 & Part 5 Units
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 * Incorporates Qualified Constraints: VAL-HIST-D1-03, VAL-HIST-D5-33, VAL-HIST-D5-34, VAL-HIST-D6-42
 */

module.exports = [
  // --- PART 4: THE ASSASSINATION ---
  {
    unit_id: "KU-BS-CH19-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter019.xhtml",
      chapter_number: 19,
      chapter_title: "19. 1923, National College",
      element_ids: ["bhasin0000401", "bhasin0000402", "bhasin0000403", "bhasin0000404", "bhasin0000405", "bhasin0000406", "bhasin0000407", "bhasin0000408", "bhasin0000409", "bhasin0000410", "bhasin0000411"]
    },
    structural_position: {
      part: "PART 4: THE ASSASSINATION",
      chapter: "19. 1923, National College"
    },
    title: "1923, National College: The Crucible of the Lahore Revolutionary Intelligentsia",
    summary_statement: "Examines National College Lahore, founded by Lala Lajpat Rai to educate students boycotting colonial universities, its radical professors Jaichandra Vidyalankar and Bhai Parmanand, and the intellectual fraternity formed between Bhagat Singh, Sukhdev Thapar, Yashpal, and Bhagwati Charan Vohra studying world revolutionary history.",
    materiality: "critical",
    materiality_reason: "Identifies the exact institutional nursery where the core leadership of the HSRA met and forged their theoretical worldview.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1921–1923",
      date_iso_estimated: "1923-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 21,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1921–1923", context: "Studies at Bradlaugh Hall, Lahore; reading French, Russian, and Irish revolutionary history." },
      record_revelation_time: { date_raw: "1920s", context: "College registers and subsequent CID intelligence summaries." },
      source_time: { publication_year: 2022, author_analysis: "Juss emphasizes that National College was not a bomb-making cell but a rigorous academic seminar." }
    },
    context: {
      micro_context: "Bradlaugh Hall classrooms, reading room, and hostel rooms in Lahore.",
      meso_context: "National education movement providing autonomous patriotic curriculum free from colonial censorship.",
      macro_context: "Global dissemination of Marxist, anarchist, and national liberation literature in post-revolutionary era."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Student and researcher", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Classmate and closest comrade", type: "person" },
      { entity_id: "ENT-YASHPAL", name: "Yashpal", role: "Classmate and later author/memoirist", type: "person" },
      { entity_id: "ENT-VOHRA", name: "Bhagwati Charan Vohra", role: "Classmate and revolutionary theorist", type: "person" },
      { entity_id: "ENT-VIDYALANKAR", name: "Jaichandra Vidyalankar", role: "History professor and intellectual mentor", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH24-01", relationship_type: "continues", nature: "National College cohort becomes the executive core of the Naujawan Bharat Sabha and HSRA." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH24-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Sukhdev, Bhagat Singh, and Vohra explicitly organized the Naujawan Bharat Sabha using the student base at National College.",
        provenance: "chapter019.xhtml / notes.xhtml (Ch. 19 Notes 1-15)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "college_curricula_and_memoirs",
        temporal_proximity: "near_term",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Memoirs of Yashpal (Sinhavalokan) and Manmath Nath Gupta corroborate course curricula and reading groups."
      }
    ],
    source_evidence: [
      "National College in Lahore was unlike any ordinary institution. It was born out of the rebellion of 1920, and its students were rebels by definition.",
      "Under Professor Vidyalankar, Bhagat Singh devoured the history of the French Revolution, the American War of Independence, and the rise of the Bolsheviks."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "institutional", description: "Faculty and student roles fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000401", "bhasin0000402", "bhasin0000403", "bhasin0000404", "bhasin0000405", "bhasin0000406", "bhasin0000407", "bhasin0000408", "bhasin0000409", "bhasin0000410", "bhasin0000411"],
      notes_referenced: ["notes.xhtml#bhasin0001367", "notes.xhtml#bhasin0001381"],
      archival_citations: ["National College Lahore Syllabus 1922", "Yashpal, Sinhavalokan, Vol. 1"]
    },
    genre_specific_payload: {
      setting: "Bradlaugh Hall, Lahore.",
      documented_actions: [
        "In-depth historical research into Mazzini, Garibaldi, and Russian Narodnik revolutionaries.",
        "Staging of patriotic historical plays (e.g. Maharana Pratap, Bharat Durdasha).",
        "Formation of secret study circles discussing historical materialism and class struggle."
      ],
      outcomes: [
        "Creation of an intellectually sophisticated revolutionary cohort capable of rigorous theoretical polemics."
      ],
      historical_significance: "Explains why Bhagat Singh and his comrades prioritized ideological clarity, pamphlet writing, and legal argumentation over raw adventurism."
    }
  },
  {
    unit_id: "KU-BS-CH20-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter020.xhtml",
      chapter_number: 20,
      chapter_title: "20. 1926, Dussehra Bomb Blast",
      element_ids: ["bhasin0000412", "bhasin0000413", "bhasin0000414", "bhasin0000415", "bhasin0000416", "bhasin0000417", "bhasin0000418", "bhasin0000419"]
    },
    structural_position: {
      part: "PART 4: THE ASSASSINATION",
      chapter: "20. 1926, Dussehra Bomb Blast"
    },
    title: "1926, Dussehra Bomb Blast: Arrest, Five Weeks' Secret Custody, and Exorbitant Bail",
    summary_statement: "Documents the bomb explosion at the Lahore Dussehra procession in October 1926, the subsequent arbitrary arrest of Bhagat Singh on 29 May 1927 by the Lahore CID, his detention for five weeks without trial in Lahore Fort, and his release on an unprecedented bail of Rs 60,000 provided by father Kishan Singh and advocate Dunichand.",
    materiality: "critical",
    materiality_reason: "Exposes colonial police framing of political dissidents and marks Bhagat Singh's first direct endurance of secret custodial pressure.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "October 1926 – July 1927",
      date_iso_estimated: "1927-05-29",
      precision: "exact",
      chronological_sequence_index: 22,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "29 May 1927", context: "Arrested while walking near Lahore railway station and taken to Lahore Fort." },
      record_revelation_time: { date_raw: "July 1927", context: "Bail order passed by Lahore Sessions Court." },
      source_time: { publication_year: 2022, author_analysis: "Juss proves the police knew Bhagat Singh had no connection to the communal bomb blast." }
    },
    context: {
      micro_context: "Interrogation cells of Lahore Fort; CID headquarters under Senior Superintendent of Police.",
      meso_context: "Police utilizing Section 124A and Explosive Substances Act to detain political activists without evidence.",
      macro_context: "Wave of communal riots across Northern India used by colonial authorities to justify draconian surveillance."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Unlawfully detained undertrial", type: "person" },
      { entity_id: "ENT-KISHAN", name: "Sardar Kishan Singh", role: "Father posting bail", type: "person" },
      { entity_id: "ENT-DUNICHAND", name: "Lala Dunichand", role: "Advocate posting surety", type: "person" },
      { entity_id: "ENT-CID-LAHORE", name: "Lahore CID Special Branch", role: "Interrogating police authority", type: "institution" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH22-01", relationship_type: "continues", nature: "Strict bail restrictions forced Bhagat Singh into underground operations." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH24-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Police surveillance following the Dussehra blast bail forced Bhagat Singh to temporarily shift to a dairy farm in Jaranwala before going fully underground.",
        provenance: "chapter020.xhtml / notes.xhtml (Ch. 20 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "police_custody_logs_and_bail_bonds",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "custodial_interrogation",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Lahore Sessions Court bail records of Rs 60,000 verify the extraordinary bail amount."
      }
    ],
    source_evidence: [
      "The police had no evidence whatsoever connecting Bhagat Singh to the Dussehra bomb blast, but they were determined to keep him behind bars.",
      "The staggering sum of Rs 60,000 was demanded as surety—an astronomical figure in 1927 intended to make release impossible."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_record", description: "Bail documents and police diary entries confirm sequence." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000412", "bhasin0000413", "bhasin0000414", "bhasin0000415", "bhasin0000416", "bhasin0000417", "bhasin0000418", "bhasin0000419"],
      notes_referenced: ["notes.xhtml#bhasin0001382", "notes.xhtml#bhasin0001389"],
      archival_citations: ["Punjab Police Gazette 1927", "Lahore Sessions Court Bail Records, July 1927"]
    },
    genre_specific_payload: {
      setting: "Lahore Fort dungeon cells.",
      documented_actions: [
        "CID officers interrogate Bhagat Singh regarding Kakori absconders and weapon caches.",
        "Refusal of Bhagat Singh to provide any confessions or compromise comrades.",
        "Father Kishan Singh and Lala Dunichand pledge property to secure bail."
      ],
      outcomes: [
        "Release of Bhagat Singh under intense police surveillance; subsequent forfeiture of bail when he went underground."
      ],
      historical_significance: "Demonstrated the colonial police's willingness to manufacture false communal charges to eliminate secular revolutionary cadre."
    }
  },
  {
    unit_id: "KU-BS-CH21-01",
    unit_type: "LIFE_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter021.xhtml",
      chapter_number: 21,
      chapter_title: "21. 1929, Love Is Never Bestial",
      element_ids: ["bhasin0000420", "bhasin0000421", "bhasin0000422", "bhasin0000423", "bhasin0000424", "bhasin0000425", "bhasin0000426", "bhasin0000427", "bhasin0000428"]
    },
    structural_position: {
      part: "PART 4: THE ASSASSINATION",
      chapter: "21. 1929, Love Is Never Bestial"
    },
    title: "1929, Love Is Never Bestial: The Philosophical Debate with Sukhdev on Love, Human Emotion, and Biographer Conjecture",
    summary_statement: "Examines Bhagat Singh's famous letter to Sukhdev defending human love and emotional attachment as noble and character-ennobling rather than an animalistic weakness, contrasting with Sukhdev's ascetic puritanism, while strictly distinguishing Bhagat Singh's actual written text from biographer Juss's psychological conjecture that Bhagat Singh secretly harbored romantic feelings for a girl in Kanpur.",
    materiality: "critical",
    materiality_reason: "Governed by mandatory qualification VAL-HIST-D5-33: isolates Bhagat Singh's primary philosophical writing from speculative biographer psychology.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "April 1929 / Early 1930",
      date_iso_estimated: "1929-04-05",
      precision: "approximate_month",
      chronological_sequence_index: 23,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "April 1929", context: "Written to Sukhdev on the eve of the Delhi Assembly bomb action." },
      record_revelation_time: { date_raw: "1930", context: "Recovered during police search of HSRA safehouses and produced in the Lahore Conspiracy Case." },
      source_time: { publication_year: 2022, author_analysis: "Juss argues that Bhagat Singh was not an unfeeling machine, introducing psychological speculation regarding Kanpur." }
    },
    context: {
      micro_context: "Clandestine room in Delhi; intense personal discussion between two ideological comrades.",
      meso_context: "HSRA code of conduct requiring complete detachment from domestic and romantic entanglements.",
      macro_context: "Revolutionary organizations grappling with the balance between personal humanism and ascetic discipline."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Author of letter", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Comrade and recipient of letter", type: "person" },
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Biographer advancing psychological interpretation", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH23-01", relationship_type: "anticipates", nature: "Written immediately prior to embarking on the Assembly bombing." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "primary_autograph_letter",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "confidential_private",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Original handwritten letter produced as court exhibit in Lahore Conspiracy Case."
      }
    ],
    source_evidence: [
      "[PRIMARY_SUBJECT_WRITING] 'Love in itself is no crime. It is a noble human passion that elevates man and purifies his character. It never makes a man bestial or weak.'",
      "[PRIMARY_SUBJECT_WRITING] 'You may consider love as an animal instinct, but to me it is an elevated emotion that makes man rise above himself.'",
      "[BIOGRAPHER_CONJECTURE] Juss suggests that Bhagat Singh's emotional defense of love indicates that he had himself fallen in love with an unnamed young woman in Kanpur while working at Pratap, though Bhagat Singh never explicitly reveals any name or romantic confession in his own writing."
    ],
    competing_accounts: [
      {
        contested_issue: "Whether Bhagat Singh's letter reflects a specific personal romantic experience or a broader philosophical defense of human emotional integrity.",
        accounts: [
          {
            claim_id: "CLAIM-BS-LETTER",
            source_text: "Bhagat Singh's actual letter to Sukhdev",
            assertion: "Presents a general ethical and philosophical defense of human love against ascetic asceticism, refusing to accept that revolutionaries must be emotionless automatons.",
            witness_or_document: "Court Exhibit in Lahore Conspiracy Case",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_private"
            }
          },
          {
            claim_id: "CLAIM-JUSS-CONJECTURE",
            source_text: "Juss (2022), Chapter 21",
            assertion: "Speculates that Bhagat Singh harbored romantic feelings for a girl in Kanpur, based on psychological inference rather than direct documentary evidence.",
            witness_or_document: "Biographer analysis",
            evidence_assessment: {
              temporal_proximity: "retrospective_decades_later",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "partially_convergent",
        system_synthesis: "BKRS strictly preserves Bhagat Singh's written words as verified [PRIMARY_SUBJECT_WRITING], while segregating Juss's psychological Kanpur romance hypothesis as [BIOGRAPHER_CONJECTURE]."
      }
    ],
    uncertainty: { degree: "medium", type: "psychological_inference", description: "Identity and existence of any romantic partner remains undocumented in primary records." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000420", "bhasin0000421", "bhasin0000422", "bhasin0000423", "bhasin0000424", "bhasin0000425", "bhasin0000426", "bhasin0000427", "bhasin0000428"],
      notes_referenced: ["notes.xhtml#bhasin0001390", "notes.xhtml#bhasin0001400"],
      archival_citations: ["Exhibit P-K, Lahore Conspiracy Case, Punjab Archives Lahore", "Bhagat Singh, Letter to Sukhdev, April 1929"]
    },
    genre_specific_payload: {
      subject: "Bhagat Singh",
      lived_experience: "Tension between uncompromising revolutionary commitment and tender human empathy.",
      dilemma: "Reconciling revolutionary duty with the natural validity of human affection and suicide ethics.",
      decision: "Affirms that love elevates character and rejects the notion that revolutionaries must divest themselves of all emotion.",
      consequence: "Deepened emotional and mutual trust between Bhagat Singh and Sukhdev before their final actions.",
      worldview_shift: "Rejection of puritanical asceticism in favor of an expansive socialist humanism."
    }
  },
  {
    unit_id: "KU-BS-CH22-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter022.xhtml",
      chapter_number: 22,
      chapter_title: "22. 1928, J.P. Saunders’ Murder",
      element_ids: ["bhasin0000429", "bhasin0000430", "bhasin0000431", "bhasin0000432", "bhasin0000433", "bhasin0000434", "bhasin0000435", "bhasin0000436", "bhasin0000437"]
    },
    structural_position: {
      part: "PART 4: THE ASSASSINATION",
      chapter: "22. 1928, J.P. Saunders’ Murder"
    },
    title: "1928, J.P. Saunders’ Murder: The Assassination, FIR No. 121, Autopsy Discrepancies, and the Clandestine Escape",
    summary_statement: "Comprehensive reconstruction of the assassination of Assistant Superintendent of Police John Poyntz Saunders in Lahore on 17 December 1928 in revenge for the death of Lala Lajpat Rai; documents the mistaken identity targeting Saunders instead of J.A. Scott; the fatal shooting by Rajguru and Bhagat Singh; Azad killing Head Constable Chanan Singh; FIR No. 121 containing zero named assailants; the discrepancy between panicked eyewitness auditory reports (hearing 2 to 12+ shots) and Dr. C.H. Rai's post-mortem autopsy (documenting 8 bullet wounds); and the daring train escape from Lahore to Calcutta with Durga Bhabhi disguised as a Westernized family, followed by transit to Kanpur, Agra, and Delhi, noting that clandestine tradecraft leaves specific intermediate daily lodgings unrecorded.",
    materiality: "critical",
    materiality_reason: "Core historical event of the Lahore Conspiracy Case; rigorously enforces qualifications VAL-HIST-D1-03, VAL-HIST-D5-34, and VAL-HIST-D6-42.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "17 December 1928 – early January 1929",
      date_iso_estimated: "1928-12-17",
      precision: "exact",
      chronological_sequence_index: 24,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "17 December 1928, approx. 4:15 PM", context: "Saunders shot outside District Police Headquarters, Lahore." },
      record_revelation_time: { date_raw: "17 December 1928, 4:30 PM", context: "FIR No. 121 lodged at Police Station Anarkali by Head Constable Amanat Ali." },
      source_time: { publication_year: 2022, author_analysis: "Juss conducts a forensic audit comparing FIR No. 121, post-mortem findings, and approver testimonies." }
    },
    context: {
      micro_context: "Opposite D.A.V. College boarding house and District Police Office gate, Lahore; panicked bystanders scattering.",
      meso_context: "Red posters of the HSRA pasted overnight across Lahore declaring 'Saunders is dead, Lalaji is avenged'.",
      macro_context: "National anger over Lala Lajpat Rai's death during the anti-Simon Commission demonstration."
    },
    entities: [
      { entity_id: "ENT-SAUNDERS", name: "John Poyntz Saunders", role: "Assistant Superintendent of Police (victim)", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Shooter", type: "person" },
      { entity_id: "ENT-RAJGURU", name: "Shivaram Rajguru (alias 'M')", role: "Initial shooter", type: "person" },
      { entity_id: "ENT-AZAD", name: "Chandrashekhar Azad", role: "Cover shooter and commander", type: "person" },
      { entity_id: "ENT-CHANAN", name: "Head Constable Chanan Singh", role: "Pursuing police officer (shot by Azad)", type: "person" },
      { entity_id: "ENT-JAIGOPAL", name: "Jai Gopal", role: "Lookout who signaled Saunders in error", type: "person" },
      { entity_id: "ENT-DURGA", name: "Durga Devi Vohra ('Durga Bhabhi')", role: "Escort in disguise", type: "person" },
      { entity_id: "ENT-DR-RAI", name: "Dr. C.H. Rai", role: "Police surgeon conducting autopsy", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH23-01", relationship_type: "continues", nature: "Escape leads directly to the assembly of bombs in Agra and the Delhi Assembly action." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH30-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Saunders' murder was the central capital charge framed in the Lahore Conspiracy Case trial.",
        provenance: "chapter022.xhtml / notes.xhtml (Ch. 22 Notes 1-14)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "police_fir_and_post_mortem_report",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "directly_conflicted_by_counter_evidence",
        evidentiary_reliability_assessment: "FIR No. 121 (Plate 2 / App) filed minutes after the shooting gives vague physical descriptions and names zero assailants; Dr. Rai's autopsy provides objective anatomical bullet entries."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] FIR No. 121, Anarkali Police Station: 'Two young men... one wearing a hat and suit, the other wearing a coat and dhoti... fled through the college gate.' Neither Bhagat Singh nor Rajguru was named.",
      "[CONTEMPORARY_RECORD] Dr. C.H. Rai's Post-Mortem Report: Saunders died of shock and internal hemorrhage caused by bullet wounds; eight distinct bullet entry and exit wounds recorded, perforating the lung and liver.",
      "[COERCED_TESTIMONY / MEMOIRS] Approvers Jai Gopal and Phanindra Nath Ghosh testified that Rajguru fired the first shot that brought Saunders down, followed by Bhagat Singh firing several close-range shots into his body.",
      "[SOURCE_DOCUMENTED_EVENT] Clandestine Itinerary early 1929: Bhagat Singh cut his long hair, donned a felt hat and Western overcoat, escorted Durga Bhabhi carrying infant son Shachi, boarding the Calcutta Mail from Lahore Central Station, arriving in Calcutta (attending Congress session and meeting revolutionaries), then moving to Kanpur, establishing the party headquarters at Hing ki Mandi in Agra, and moving onward to Delhi; intermediate daily safehouses and night stops remain unrecorded in primary archives due to underground security tradecraft."
    ],
    competing_accounts: [
      {
        contested_issue: "Discrepancy between contemporaneous FIR No. 121 and subsequent trial depositions/memoirs (VAL-HIST-D5-34).",
        accounts: [
          {
            claim_id: "CLAIM-FIR-121",
            source_text: "FIR No. 121, Police Station Anarkali (17 Dec 1928)",
            assertion: "Recorded immediately after shooting; contained vague generic physical descriptions ('one Hindu youth, height 5 ft 5 in... another youth') and named zero suspects or shooters.",
            witness_or_document: "Head Constable Amanat Ali / FIR Register",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-APPROVER-MEMOIRS",
            source_text: "Approver depositions (Jai Gopal, P.N. Ghosh) and memoirs of Yashpal/Sanyal",
            assertion: "Reconstructed specific sequence: Jai Gopal misidentified Saunders as Scott; Rajguru fired first with a revolver striking Saunders in the chest; Bhagat Singh fired multiple automatic pistol shots into his head and torso.",
            witness_or_document: "Courtroom depositions under pardon and retrospective memoirs",
            evidence_assessment: {
              temporal_proximity: "near_term",
              coercive_context: "state_approver_under_pardon"
            }
          }
        ],
        historiographical_status: "partially_convergent",
        system_synthesis: "BKRS preserves the discrepancy: FIR 121 proves police had zero contemporary identification of the shooters at the scene, while the operational mechanics are established by later trial approvers and participant memoirs."
      },
      {
        contested_issue: "Discrepancies between bystander eyewitness testimonies and medical autopsy report (VAL-HIST-D6-42).",
        accounts: [
          {
            claim_id: "CLAIM-EYEWITNESS-AUDITORY",
            source_text: "Witness depositions in Magistrate Court",
            assertion: "Panicked bystanders and street hawkers reported varying auditory counts: some heard only 2 shots, others heard 3 or 4, while some reported a rapid burst of more than a dozen shots.",
            witness_or_document: "Bystander witnesses",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-AUTOPSY-FINDINGS",
            source_text: "Dr. C.H. Rai's Autopsy Report (18 Dec 1928)",
            assertion: "Documented exactly eight bullet wounds with distinct entry and exit tracks, lacerating the thoracic cavity, aorta, and liver.",
            witness_or_document: "Medical Post-Mortem Register",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "partially_convergent",
        system_synthesis: "Auditory perceptions varied wildly due to acoustic echo between high brick college walls and witness terror, whereas medical forensics definitively established multiple bullet impacts."
      }
    ],
    uncertainty: { degree: "low", type: "clandestine_tradecraft", description: "Intermediate daily lodgings between Lahore, Calcutta, Kanpur, Agra, and Delhi remain unrecorded in primary archives due to underground security discipline (VAL-HIST-D1-03)." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000429", "bhasin0000430", "bhasin0000431", "bhasin0000432", "bhasin0000433", "bhasin0000434", "bhasin0000435", "bhasin0000436", "bhasin0000437"],
      notes_referenced: ["notes.xhtml#bhasin0001401", "notes.xhtml#bhasin0001414"],
      archival_citations: ["FIR No. 121/1928, Police Station Anarkali, Lahore", "Post-Mortem Examination of J.P. Saunders, 18 Dec 1928", "IOR L/PJ/6/2004"]
    },
    genre_specific_payload: {
      setting: "Opposite D.A.V. College, Anarkali, Lahore, and subsequent escape corridor.",
      documented_actions: [
        "Scott targeted for assassination; Jai Gopal mistakes Saunders exiting on a red motorcycle.",
        "Rajguru steps forward and shoots Saunders in the chest; Saunders falls.",
        "Bhagat Singh runs forward and discharges pistol into Saunders' torso.",
        "Chanan Singh pursues the shooters; Azad fires warning shot and then shoots Chanan Singh in the thigh/abdomen.",
        "Red posters pasted across Lahore: 'Notice: J.P. Saunders is dead; Lala Lajpat Rai is avenged.'",
        "Disguised escape: Bhagat Singh as sahib, Durga Bhabhi as memsahib, Rajguru as servant boarding train to Calcutta."
      ],
      outcomes: [
        "Saunders and Chanan Singh killed; massive colonial manhunt launched across Punjab."
      ],
      historical_significance: "Avenged the insult of Lajpat Rai's death, electrified national public opinion, and set into motion the Lahore Conspiracy Case."
    }
  },
  {
    unit_id: "KU-BS-CH23-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter023.xhtml",
      chapter_number: 23,
      chapter_title: "23. 1929, Delhi Assembly Bombs",
      element_ids: ["bhasin0000438", "bhasin0000439", "bhasin0000440", "bhasin0000441", "bhasin0000442", "bhasin0000443", "bhasin0000444", "bhasin0000445"]
    },
    structural_position: {
      part: "PART 4: THE ASSASSINATION",
      chapter: "23. 1929, Delhi Assembly Bombs"
    },
    title: "1929, Delhi Assembly Bombs: The Non-Lethal Blast, Red Leaflets, and Voluntary Surrender",
    summary_statement: "Reconstructs the 8 April 1929 action in the Central Legislative Assembly in New Delhi: Bhagat Singh and Batukeshwar Dutt dropping two low-intensity, non-lethal smoke bombs into the empty floor of the chamber just as President Vithalbhai Patel was about to give his ruling on the Trade Disputes Bill; scattering red HSRA leaflets declaring 'To Make the Deaf Hear'; shouting 'Inquilab Zindabad!'; and standing calmly to surrender voluntarily.",
    materiality: "critical",
    materiality_reason: "The decisive turning point initiating Bhagat Singh's transformation of the British legal arena into a public political trial.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "8 April 1929, approx. 12:30 PM",
      date_iso_estimated: "1929-04-08",
      precision: "exact",
      chronological_sequence_index: 25,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "8 April 1929", context: "Action inside the Central Legislative Assembly chamber, New Delhi." },
      record_revelation_time: { date_raw: "8 April 1929", context: "Leaflet published contemporaneously; Assembly official proceedings record interruption." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights the legalist care taken to ensure zero fatalities." }
    },
    context: {
      micro_context: "Visitors' gallery of Central Legislative Assembly; dense acrid smoke filling the hall; delegates hiding under benches.",
      meso_context: "Colonial executive overriding elected opposition to force the passage of the Public Safety and Trade Disputes Bills.",
      macro_context: "All-India strike waves, communist arrests under Meerut Conspiracy Case, and revolutionary resistance to colonial industrial repression."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Bomb thrower", type: "person" },
      { entity_id: "ENT-DUTT", name: "Batukeshwar Dutt", role: "Bomb thrower", type: "person" },
      { entity_id: "ENT-PATEL-VITHALBHAI", name: "Vithalbhai Patel", role: "President of the Legislative Assembly", type: "person" },
      { entity_id: "ENT-SCHUSTER", name: "Sir George Schuster", role: "Finance Member (lightly bruised)", type: "person" },
      { entity_id: "ENT-POOL", name: "Inspector Terry / Sergeant Pool", role: "Arresting officers", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH27-01", relationship_type: "continues", nature: "Leads directly to the Delhi Sessions Trial and the historic 6 June 1929 statement." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH27-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Voluntary surrender was explicitly planned so that Bhagat Singh and Dutt could use the trial court to publicize HSRA ideology.",
        provenance: "chapter023.xhtml / notes.xhtml (Ch. 23 Notes 1-15)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_assembly_minutes_and_police_records",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Assembly debates verbatim record the explosions, smoke, and slogans."
      }
    ],
    source_evidence: [
      "It takes a loud voice to make the deaf hear. With these words Auguste Vaillant, the valiant French anarchist, defended his action. We do not mourn this action.",
      "The bombs were deliberately thrown into the empty spaces of the floor. Had our intention been to kill, we could have hurled them into the seats of the Treasury Benches."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "parliamentary_event", description: "Event witnessed by hundreds of legislators and journalists." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000438", "bhasin0000439", "bhasin0000440", "bhasin0000441", "bhasin0000442", "bhasin0000443", "bhasin0000444", "bhasin0000445"],
      notes_referenced: ["notes.xhtml#bhasin0001415", "notes.xhtml#bhasin0001429"],
      archival_citations: ["Legislative Assembly Debates, 8 April 1929", "HSRA Leaflet 'To Make the Deaf Hear', 8 April 1929"]
    },
    genre_specific_payload: {
      setting: "Central Legislative Assembly Chamber, New Delhi.",
      documented_actions: [
        "Bhagat Singh and Dutt take seats in the visitors' gallery with passes secured from nominated members.",
        "As President Patel rises to announce the Public Safety Bill ruling, Bhagat Singh drops the first bomb into an empty well.",
        "Dutt hurls the second bomb; two pistol shots fired into the ceiling to signal surrender.",
        "Hundreds of red leaflets flutter down into the assembly.",
        "Both revolutionaries offer no resistance, lay down weapons, and surrender to Sergeant Pool."
      ],
      outcomes: [
        "Worldwide sensational publicity; immediate broadcast of 'Inquilab Zindabad' across India."
      ],
      historical_significance: "Established the revolutionary tactic of 'propaganda by deed' subordinated entirely to political education and mass awakening."
    }
  },

  // --- PART 5: 1928, THE NAUJAWAN BHARAT SABHA ---
  {
    unit_id: "KU-BS-CH24-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter024.xhtml",
      chapter_number: 24,
      chapter_title: "24. 1928, Ferozeshah Kotla",
      element_ids: ["bhasin0000452", "bhasin0000453", "bhasin0000454", "bhasin0000455", "bhasin0000456", "bhasin0000457", "bhasin0000458"]
    },
    structural_position: {
      part: "PART 5: 1928, THE NAUJAWAN BHARAT SABHA",
      chapter: "24. 1928, Ferozeshah Kotla"
    },
    title: "1928, Ferozeshah Kotla: The Socialist Watershed and Reconstitution of the HSRA",
    summary_statement: "Details the historic clandestine conference of 8-9 September 1928 at the medieval ruins of Ferozeshah Kotla in Delhi, where representatives from Punjab, UP, Bihar, and Bengal voted to adopt Bhagat Singh's proposal to add 'Socialist' to the party's name, establishing the Hindustan Socialist Republican Association (HSRA) and appointing Chandrashekhar Azad as Commander-in-Chief.",
    materiality: "critical",
    materiality_reason: "The decisive ideological transition of Indian revolutionary nationalism from mere political independence to socialist reconstruction.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "8–9 September 1928",
      date_iso_estimated: "1928-09-08",
      precision: "exact",
      chronological_sequence_index: 26,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "8–9 September 1928", context: "Meeting at the desolate ramparts of Ferozeshah Kotla, Delhi." },
      record_revelation_time: { date_raw: "1929", context: "Confessions of approvers Phanindra Nath Ghosh and Jai Gopal." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents Bhagat Singh's persuasion of older cadres who resisted the term 'Socialist'." }
    },
    context: {
      micro_context: "Ruins of Ferozeshah Kotla under cover of darkness; participants sleeping on ruined parapets.",
      meso_context: "Battered HRA seeking to reorganize after the execution of Kakori leaders.",
      macro_context: "Rising socialist and trade union movement across Indian industrial centers."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Ideological proponent of Socialism", type: "person" },
      { entity_id: "ENT-AZAD", name: "Chandrashekhar Azad", role: "Commander-in-Chief (absent in hiding, consented by proxy)", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Punjab organizer", type: "person" },
      { entity_id: "ENT-GHOSH-PN", name: "Phanindra Nath Ghosh", role: "Bihar delegate (later chief approver)", type: "person" },
      { entity_id: "ENT-AWASTHI", name: "Kundan Lal Awasthi", role: "UP delegate", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH25-01", relationship_type: "continues", nature: "Leads to operational restructuring across Northern India." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH25-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Ferozeshah Kotla resolutions created the military and political departments governing HSRA operations.",
        provenance: "chapter024.xhtml / notes.xhtml (Ch. 24 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "approver_depositions_and_memoirs",
        temporal_proximity: "near_term",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Depositions of Phanindra Nath Ghosh corroborated by memoirs of Shiv Verma and Yashpal."
      }
    ],
    source_evidence: [
      "The change of name was not mere semantics. It announced that our goal was not just to replace white rulers with brown rulers, but to abolish the exploitation of man by man.",
      "Azad was appointed head of the military department, while Bhagat Singh took charge of ideological and propaganda work."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "organizational_history", description: "Meeting attendees and resolutions fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000452", "bhasin0000453", "bhasin0000454", "bhasin0000455", "bhasin0000456", "bhasin0000457", "bhasin0000458"],
      notes_referenced: ["notes.xhtml#bhasin0001436", "notes.xhtml#bhasin0001443"],
      archival_citations: ["Phanindra Nath Ghosh Approver Statement, 1929", "Shiv Verma, Sansmritiyan"]
    },
    genre_specific_payload: {
      setting: "Ferozeshah Kotla, Delhi.",
      documented_actions: [
        "Delegates debate whether to retain the old name HRA or adopt HSRA.",
        "Bhagat Singh presents historical analysis showing national freedom without socialism leaves workers impoverished.",
        "Unanimous vote to incorporate 'Socialist' into the title.",
        "Creation of Central Committee coordinating provincial military actions."
      ],
      outcomes: [
        "Birth of the Hindustan Socialist Republican Association."
      ],
      historical_significance: "Formally aligned the Indian revolutionary movement with Marxist-Leninist scientific socialism."
    }
  },
  {
    unit_id: "KU-BS-CH25-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter025.xhtml",
      chapter_number: 25,
      chapter_title: "25. 1929, The HSRA",
      element_ids: ["bhasin0000459", "bhasin0000460", "bhasin0000461", "bhasin0000462", "bhasin0000463", "bhasin0000464", "bhasin0000465", "bhasin0000466", "bhasin0000467", "bhasin0000468", "bhasin0000469"]
    },
    structural_position: {
      part: "PART 5: 1928, THE NAUJAWAN BHARAT SABHA",
      chapter: "25. 1929, The HSRA"
    },
    title: "1929, The HSRA: Operational Infrastructure, Safehouses, and Bomb Manufacture",
    summary_statement: "Surveys the underground operational network of the HSRA across Northern India, the establishment of bomb manufacturing factories in Lahore (Kashmiri Building), Saharanpur, and Agra, and the recruitment of Bengali bomb expert Jatindra Nath Das to instruct Punjab cadres in chemical munitions.",
    materiality: "critical",
    materiality_reason: "Documents the technical and logistical apparatus that enabled both the Saunders assassination and the Assembly bombing.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "Late 1928 – April 1929",
      date_iso_estimated: "1929-02-01",
      precision: "approximate_month",
      chronological_sequence_index: 27,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "Early 1929", context: "Safehouses rented in Agra, Lahore, and Saharanpur." },
      record_revelation_time: { date_raw: "April–May 1929", context: "Police raids uncover Kashmiri Building factory following Assembly bomb arrests." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents how forensic chemistry was integrated into revolutionary strategy." }
    },
    context: {
      micro_context: "Rented rooms in Kashmiri Building, Lahore, with chemical retorts, test tubes, and mercury fulminate.",
      meso_context: "Intense CID surveillance following the Saunders shooting.",
      macro_context: "Inter-provincial collaboration connecting Bengal Anushilan/Yugantar chemical experts with Punjab fighters."
    },
    entities: [
      { entity_id: "ENT-DAS-JATIN", name: "Jatindra Nath Das", role: "Master bomb chemist from Calcutta", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Punjab provincial coordinator", type: "person" },
      { entity_id: "ENT-KISHORILAL", name: "Kishori Lal", role: "Bomb factory caretaker", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH30-01", relationship_type: "continues", nature: "Raid on Kashmiri Building provides physical evidence for the Lahore Conspiracy Case." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH30-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Seizure of bomb molds and chemicals in Lahore directly linked the Assembly bomb shells to the Lahore HSRA cell.",
        provenance: "chapter025.xhtml / notes.xhtml (Ch. 25 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "police_raid_inventories_and_chemical_reports",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Chemical Examiner's reports and court exhibits verify explosive formulas and materials."
      }
    ],
    source_evidence: [
      "Jatin Das was brought from Calcutta to Lahore specifically to instruct the Punjab members in the difficult and hazardous art of preparing picric acid and fulminate of mercury.",
      "The discovery of the Kashmiri Building bomb factory on 15 April 1929 blew the lid off the entire Northern Indian network."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "material_evidence", description: "Seized chemicals and equipment fully inventoried." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000459", "bhasin0000460", "bhasin0000461", "bhasin0000462", "bhasin0000463", "bhasin0000464", "bhasin0000465", "bhasin0000466", "bhasin0000467", "bhasin0000468", "bhasin0000469"],
      notes_referenced: ["notes.xhtml#bhasin0001444", "notes.xhtml#bhasin0001453"],
      archival_citations: ["Trial Exhibits: Chemical Examiner's Report, Lahore Conspiracy Case 1929-30"]
    },
    genre_specific_payload: {
      setting: "Kashmiri Building (Lahore), Hing ki Mandi (Agra), and Saharanpur.",
      documented_actions: [
        "Jatin Das conducts practical laboratory training for Sukhdev, Kishori Lal, and Bhagat Singh.",
        "Testing of bomb mechanisms in the forests of Jhansi and Agra.",
        "Assembly bomb casings manufactured by local foundries under innocuous pretexts."
      ],
      outcomes: [
        "Successful manufacture of operational munitions utilized in the Delhi Assembly and train ambushes."
      ],
      historical_significance: "Demonstrated the sophisticated operational maturity and inter-provincial coordination achieved by the HSRA."
    }
  },
  {
    unit_id: "KU-BS-CH26-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter026.xhtml",
      chapter_number: 26,
      chapter_title: "26. 1930, ‘Peace, Order and Good Government’",
      element_ids: ["bhasin0000470", "bhasin0000471", "bhasin0000472", "bhasin0000473", "bhasin0000474", "bhasin0000475", "bhasin0000476", "bhasin0000477", "bhasin0000478", "bhasin0000479", "bhasin0000480", "bhasin0000481", "bhasin0000482", "bhasin0000483", "bhasin0000484"]
    },
    structural_position: {
      part: "PART 5: 1928, THE NAUJAWAN BHARAT SABHA",
      chapter: "26. 1930, ‘Peace, Order and Good Government’"
    },
    title: "1930, ‘Peace, Order and Good Government’: Colonial Emergency Jurisprudence and Section 72",
    summary_statement: "Forensic legal critique of the colonial constitutional doctrine of 'Peace, Order and Good Government' enshrined in Section 72 of the Government of India Act 1915, empowering the Viceroy to unilaterally promulgate ordinances having the force of parliamentary statutes on the sole subjective assertion of an 'emergency'.",
    materiality: "critical",
    materiality_reason: "Provides the statutory and jurisprudential core of Juss's legal analysis of Ordinance III of 1930.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1915–1930",
      date_iso_estimated: "1930-05-01",
      precision: "exact",
      chronological_sequence_index: 28,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1 May 1930", context: "Promulgation of Ordinance III by Viceroy Irwin." },
      record_revelation_time: { date_raw: "1930–1931", context: "Challenged before the Lahore High Court and the Privy Council." },
      source_time: { publication_year: 2022, author_analysis: "Juss dissects the Privy Council's refusal to scrutinize the factual existence of an emergency." }
    },
    context: {
      micro_context: "Viceregal lodge in Simla; drafting of extraordinary decrees by Home Department bureaucrats.",
      meso_context: "Complete absence of legislative review or judicial oversight over viceregal discretion.",
      macro_context: "Imperial state dismantling regular common law protections to guarantee capital convictions."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Governor-General promulgating ordinance", type: "person" },
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Legal scholar analyzing doctrine", type: "person" },
      { entity_id: "ENT-PRIVY-COUNCIL", name: "Judicial Committee of the Privy Council", role: "Imperial appellate court", type: "institution" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH37-01", relationship_type: "continues", nature: "Direct constitutional basis for Chapter 37 on Ordinance III." },
      { target_unit_id: "KU-BS-CH48-01", relationship_type: "anticipates", nature: "Directly relates to the Privy Council appeal rejection." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH37-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Section 72 was the explicit statutory power invoked to bypass normal sessions courts.",
        provenance: "chapter026.xhtml / notes.xhtml (Ch. 26 Notes 1-16)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "statutory_legislation_and_appellate_precedents",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Government of India Act 1915 statutory text and Bhagat Singh v. King-Emperor (1931) Privy Council judgment."
      }
    ],
    source_evidence: [
      "Section 72 of the Government of India Act 1915 gave the Governor-General an unfettered power to make ordinances for the 'peace and good government of British India' in cases of emergency.",
      "The Privy Council held that the Governor-General was the sole judge of whether an emergency existed, creating an absolute autocracy untouchable by judicial review."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "constitutional_law", description: "Statutory provisions and judicial rulings verbatim preserved." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000470", "bhasin0000471", "bhasin0000472", "bhasin0000473", "bhasin0000474", "bhasin0000475", "bhasin0000476", "bhasin0000477", "bhasin0000478", "bhasin0000479", "bhasin0000480", "bhasin0000481", "bhasin0000482", "bhasin0000483", "bhasin0000484"],
      notes_referenced: ["notes.xhtml#bhasin0001454", "notes.xhtml#bhasin0001469"],
      archival_citations: ["Government of India Act 1915, Section 72", "Bhagat Singh v. The King-Emperor (1931) LR 58 IA 169"]
    },
    genre_specific_payload: {
      setting: "Imperial legislative framework, Westminster and New Delhi.",
      documented_actions: [
        "Parliament enacts Section 72 granting unreviewable emergency powers to the Viceroy.",
        "Viceroy Irwin asserts that revolutionary activities in Lahore constitute an emergency justifying suspension of trial courts.",
        "Privy Council validates absolute executive prerogative over judicial scrutiny."
      ],
      outcomes: [
        "Judicial legitimization of emergency governance as standard colonial procedure."
      ],
      historical_significance: "Demonstrates that the execution of Bhagat Singh was achieved not by upholding the rule of law, but by formal statutory suspension of constitutional justice."
    }
  }
];
