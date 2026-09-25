/**
 * BKRS Milestone 3 - Part 6 & Part 7 Units
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 */

module.exports = [
  // --- PART 6: THE ASSEMBLY BOMB SPEECHES ---
  {
    unit_id: "KU-BS-CH27-01",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "chapter027.xhtml",
      chapter_number: 27,
      chapter_title: "27. 6 June 1929 Statement",
      element_ids: ["bhasin0000492", "bhasin0000493", "bhasin0000494", "bhasin0000495", "bhasin0000496", "bhasin0000497", "bhasin0000498", "bhasin0000499"]
    },
    structural_position: {
      part: "PART 6: THE ASSEMBLY BOMB SPEECHES",
      chapter: "27. 6 June 1929 Statement"
    },
    title: "6 June 1929 Statement: The Delhi Sessions Court Declaration of Revolutionary Principles",
    summary_statement: "Documents the historic joint written statement drafted by Bhagat Singh and read in the Delhi Sessions Court by defense counsel Asaf Ali on 6 June 1929, transforming the trial into an international platform declaring that revolution is the inalienable right of mankind and freedom is the imperishable birthright of all.",
    materiality: "critical",
    materiality_reason: "Foundational ideological manifesto defining the philosophy of the HSRA and establishing courtroom advocacy as a revolutionary strategy.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "6 June 1929",
      date_iso_estimated: "1929-06-06",
      precision: "exact",
      chronological_sequence_index: 29,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "6 June 1929", context: "Read before Sessions Judge Leonard Middleton in Delhi." },
      record_revelation_time: { date_raw: "6–7 June 1929", context: "Published in full across Indian newspapers (The Tribune, Hindustan Times, Pioneer)." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the legal brilliance of utilizing Section 342 CrPC to submit a political manifesto." }
    },
    context: {
      micro_context: "Delhi Sessions Court, packed with public and international journalists; Bhagat Singh and Dutt in dock.",
      meso_context: "Defense strategy explicitly eschewing legal defense or denial of facts in favor of ideological vindication.",
      macro_context: "Worldwide coverage of Indian revolutionary anti-colonial thought."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Author of statement", type: "person" },
      { entity_id: "ENT-DUTT", name: "Batukeshwar Dutt", role: "Co-signatory", type: "person" },
      { entity_id: "ENT-ASAF-ALI", name: "Asaf Ali", role: "Barrister reading statement", type: "person" },
      { entity_id: "ENT-MIDDLETON", name: "Leonard Middleton", role: "Sessions Judge", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH28-01", relationship_type: "continues", nature: "Leads to theoretical elaboration on non-violence and revolutionary force." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH29-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Middleton convicted the accused under Section 307 IPC directly citing the intentionality revealed in the statement.",
        provenance: "chapter027.xhtml / notes.xhtml (Ch. 27 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_court_exhibit_and_press_transcripts",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official court transcript of the statement signed by Bhagat Singh and Dutt preserved in the National Archives of India."
      }
    ],
    source_evidence: [
      "Revolution is an inalienable right of mankind. Freedom is an imperishable birthright of all. Labor is the real sustainer of society.",
      "The sovereignty of the people is the ultimate destiny of the workers. For these ideals, and for this faith, we shall welcome any suffering to which we may be condemned."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "primary_document", description: "Statement text authenticated in judicial archives." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000492", "bhasin0000493", "bhasin0000494", "bhasin0000495", "bhasin0000496", "bhasin0000497", "bhasin0000498", "bhasin0000499"],
      notes_referenced: ["notes.xhtml#bhasin0001470", "notes.xhtml#bhasin0001477"],
      archival_citations: ["NAI Home Political (1929), F. 192/29", "Delhi Sessions Court Exhibit D-1"]
    },
    genre_specific_payload: {
      document_title: "Joint Statement of Bhagat Singh and B.K. Dutt in Delhi Sessions Court",
      author_or_origin: "Bhagat Singh (assisted by B.K. Dutt)",
      document_date: "6 June 1929",
      medium_format: "Written statement under Section 342 CrPC",
      legal_or_ideological_significance: "Established that the bomb was an act of political communication, completely redefining 'revolution' from bloodshed to social reconstruction.",
      key_verbatim_excerpts: [
        "By 'Revolution' we mean that the present order of things, which is based on manifest injustice, must change.",
        "Producers or laborers, in spite of being the most indispensable element of society, are robbed by their exploiters of the fruits of their labor."
      ],
      author_vs_editor_vs_biographer_framing: "Juss identifies this statement as the constitutional manifesto of modern Indian secular socialism."
    }
  },
  {
    unit_id: "KU-BS-CH28-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter028.xhtml",
      chapter_number: 28,
      chapter_title: "28. 6 June 1929 and the Rejection of ‘Utopian Non-violence’",
      element_ids: ["bhasin0000500", "bhasin0000501", "bhasin0000502", "bhasin0000503", "bhasin0000504", "bhasin0000505", "bhasin0000506", "bhasin0000507", "bhasin0000508", "bhasin0000509", "bhasin0000510", "bhasin0000511", "bhasin0000512", "bhasin0000513", "bhasin0000514", "bhasin0000515", "bhasin0000516"]
    },
    structural_position: {
      part: "PART 6: THE ASSEMBLY BOMB SPEECHES",
      chapter: "28. 6 June 1929 and the Rejection of ‘Utopian Non-violence’"
    },
    title: "The Rejection of ‘Utopian Non-violence’: Force in the Service of Justice vs State Aggression",
    summary_statement: "Examines Bhagat Singh's philosophical critique of Gandhian absolute non-violence in his 6 June 1929 statement, formulating a precise distinction between aggressive violence (morally unjustifiable) and legitimate force utilized in the defense of oppressed humanity against institutional tyranny.",
    materiality: "critical",
    materiality_reason: "Articulates the core dialectical argument separating revolutionary socialism from absolute pacifism.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "June 1929",
      date_iso_estimated: "1929-06-06",
      precision: "exact",
      chronological_sequence_index: 30,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "6 June 1929", context: "Read in Delhi Sessions Court." },
      record_revelation_time: { date_raw: "1929", context: "Widely circulated in nationalist journals and debate circles." },
      source_time: { publication_year: 2022, author_analysis: "Juss compares Bhagat Singh's concept of defensive force with classic legal doctrines of self-defense." }
    },
    context: {
      micro_context: "Delhi Sessions dock.",
      meso_context: "Sessions judge attempting to frame the accused as bloodthirsty terrorists under Section 307 IPC.",
      macro_context: "National debate between Gandhi's 'Cult of the Bomb' and the HSRA's 'Philosophy of the Bomb'."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Philosopher-revolutionary", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Proponent of absolute non-violence", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH42-01", relationship_type: "continues", nature: "Prepares the ideological ground for the critique of Gandhi in 1931." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "primary_trial_statement",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Exact text recorded in Sessions Court records."
      }
    ],
    source_evidence: [
      "Force when aggressively applied is 'violence' and is therefore morally unjustifiable, but when it is used in the furtherance of a legitimate cause, it has its moral justification.",
      "Elimination of force at all costs is utopian, and the new movement which has arisen in the country is inspired by the ideals which Guru Gobind Singh and Shivaji, Kamal Pasha and Washington, Garibaldi and Lenin preach."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "philosophical_text", description: "Theoretical positions explicitly documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000500", "bhasin0000501", "bhasin0000502", "bhasin0000503", "bhasin0000504", "bhasin0000505", "bhasin0000506", "bhasin0000507", "bhasin0000508", "bhasin0000509", "bhasin0000510", "bhasin0000511", "bhasin0000512", "bhasin0000513", "bhasin0000514", "bhasin0000515", "bhasin0000516"],
      notes_referenced: ["notes.xhtml#bhasin0001478", "notes.xhtml#bhasin0001489"],
      archival_citations: ["Sessions Court Record, Crown v. Bhagat Singh and Batukeshwar Dutt, June 1929"]
    },
    genre_specific_payload: {
      setting: "Sessions Court of Delhi.",
      documented_actions: [
        "Systematic demolition of the colonial prosecution's depiction of the bomb as an attempt to murder.",
        "Articulating the moral and legal distinction between aggressive violence and revolutionary force.",
        "Invoking international historical precedents to justify revolutionary struggle against an armed imperial occupier."
      ],
      outcomes: [
        "Definitive intellectual refutation of the colonial label of 'terrorist'."
      ],
      historical_significance: "Established a sophisticated jurisprudence of revolutionary resistance that distinguished between nihilistic assassination and collective political coercion."
    }
  },
  {
    unit_id: "KU-BS-CH29-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter029.xhtml",
      chapter_number: 29,
      chapter_title: "29. 12 June 1929, We Could Have Easily Escaped",
      element_ids: ["bhasin0000517", "bhasin0000518", "bhasin0000519", "bhasin0000520", "bhasin0000521", "bhasin0000522", "bhasin0000523", "bhasin0000524", "bhasin0000525", "bhasin0000526"]
    },
    structural_position: {
      part: "PART 6: THE ASSEMBLY BOMB SPEECHES",
      chapter: "29. 12 June 1929, We Could Have Easily Escaped"
    },
    title: "12 June 1929: Transportation for Life and the High Court Appeal",
    summary_statement: "Documents Judge Leonard Middleton's judgment of 12 June 1929 sentencing Bhagat Singh and Batukeshwar Dutt to transportation for life under Section 307 IPC and Section 3 of the Explosive Substances Act, and their subsequent appeal to the Lahore High Court argued by Asaf Ali, emphasizing that they deliberately chose not to escape in order to bear witness.",
    materiality: "critical",
    materiality_reason: "Concludes the Assembly Bomb trial and results in Bhagat Singh's transfer to Mianwali Jail where the hunger strike began.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "12 June 1929 – August 1929",
      date_iso_estimated: "1929-06-12",
      precision: "exact",
      chronological_sequence_index: 31,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "12 June 1929", context: "Sentence pronounced by Leonard Middleton in Delhi." },
      record_revelation_time: { date_raw: "June 1929", context: "Judgment reported in civil law reports." },
      source_time: { publication_year: 2022, author_analysis: "Juss critiques Middleton's refusal to recognize the intentional absence of murderous intent." }
    },
    context: {
      micro_context: "Delhi Central Jail and Sessions Court.",
      meso_context: "Middleton imposing maximum statutory penalty despite acknowledging bombs were thrown into empty spaces.",
      macro_context: "Imperial state seeking harsh deterrent sentences to quell revolutionary wave."
    },
    entities: [
      { entity_id: "ENT-MIDDLETON", name: "Leonard Middleton", role: "Sessions Judge", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Convicted prisoner", type: "person" },
      { entity_id: "ENT-DUTT", name: "Batukeshwar Dutt", role: "Convicted prisoner", type: "person" },
      { entity_id: "ENT-ASAF-ALI", name: "Asaf Ali", role: "Appellate counsel", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH31-01", relationship_type: "continues", nature: "Sentencing leads directly to transfer to Mianwali and the launch of the hunger strike." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH31-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh was dispatched to Mianwali Jail on 14 June 1929 to serve life transportation, where he launched his hunger strike the very next morning.",
        provenance: "chapter029.xhtml / notes.xhtml (Ch. 29 Notes 1-12)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "sessions_judgment_and_high_court_appeal_papers",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Sessions Court Judgment in Crown v. Bhagat Singh and B.K. Dutt (12 June 1929) preserved in Punjab High Court Archives."
      }
    ],
    source_evidence: [
      "The accused had made it clear that they had no intention to kill. They threw the bombs where no one was sitting. They had revolvers in their possession but did not fire at anyone.",
      "Sessions Judge Middleton sentenced both accused to transportation for life, asserting that the act of throwing explosive bombs into an occupied building constituted attempted murder regardless of motive."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_sentencing", description: "Judgment text and sentencing fully preserved." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000517", "bhasin0000518", "bhasin0000519", "bhasin0000520", "bhasin0000521", "bhasin0000522", "bhasin0000523", "bhasin0000524", "bhasin0000525", "bhasin0000526"],
      notes_referenced: ["notes.xhtml#bhasin0001490", "notes.xhtml#bhasin0001501"],
      archival_citations: ["Delhi Sessions Court Judgment, 12 June 1929", "Punjab High Court Appellate Records 1929"]
    },
    genre_specific_payload: {
      setting: "Delhi Sessions Court and Lahore High Court appellate bench.",
      documented_actions: [
        "Middleton convicts under Section 307 IPC and Explosive Substances Act.",
        "Imposition of transportation for life to the Andaman Islands (suspended due to pending Lahore cases).",
        "High Court appeal argued by Asaf Ali dismissed by Chief Justice Sir Shadi Lal and Justice Broadway."
      ],
      outcomes: [
        "Definitive closure of the Assembly Bomb Case; accused immediately transferred into the custody of the Punjab Police for the Saunders murder inquiry."
      ],
      historical_significance: "Completed the first judicial phase, shifting the arena of struggle directly to the Lahore Conspiracy Case."
    }
  },
  {
    unit_id: "KU-BS-CH30-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter030.xhtml",
      chapter_number: 30,
      chapter_title: "30. 1929, The Enigma",
      element_ids: ["bhasin0000527", "bhasin0000528", "bhasin0000529", "bhasin0000530", "bhasin0000531", "bhasin0000532", "bhasin0000533", "bhasin0000534", "bhasin0000535", "bhasin0000536", "bhasin0000537", "bhasin0000538", "bhasin0000539", "bhasin0000540", "bhasin0000541", "bhasin0000542", "bhasin0000543", "bhasin0000544", "bhasin0000545", "bhasin0000546", "bhasin0000547", "bhasin0000548", "bhasin0000549", "bhasin0000550", "bhasin0000551", "bhasin0000552", "bhasin0000553", "bhasin0000554"]
    },
    structural_position: {
      part: "PART 6: THE ASSEMBLY BOMB SPEECHES",
      chapter: "30. 1929, The Enigma"
    },
    title: "1929, The Enigma: The Lahore Conspiracy Case Begins under Magistrate Sri Kishen",
    summary_statement: "Documents the commencement of committal proceedings in the Second Lahore Conspiracy Case on 10 July 1929 before Special Magistrate Rai Sahib Sri Kishen in the Lahore Central Jail compound against 24 accused (including Bhagat Singh, Sukhdev, and Rajguru); the entrance of hunger striking prisoners on stretchers; revolutionary songs (*Sarfaroshi Ki Tamanna*); and the total disruption of imperial judicial formality.",
    materiality: "critical",
    materiality_reason: "Establishes the opening of the marathon Lahore Conspiracy Case and the weaponization of the courtroom dock.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "10 July 1929",
      date_iso_estimated: "1929-07-10",
      precision: "exact",
      chronological_sequence_index: 32,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "10 July 1929", context: "Magistrate court opens inside Lahore Central Jail." },
      record_revelation_time: { date_raw: "July 1929", context: "Court proceedings recorded daily in The Tribune." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights the sheer theatrical power of the accused confronting the colonial judiciary." }
    },
    context: {
      micro_context: "Makeshift courtroom inside Borstal/Central Jail Lahore; heavily armed police cordons; prisoners lying weak on cots.",
      meso_context: "Committal inquiry under Section 208 CrPC examining 457 prosecution witnesses.",
      macro_context: "National public captivated by the defiance of the youthful revolutionaries."
    },
    entities: [
      { entity_id: "ENT-SRI-KISHEN", name: "Rai Sahib Sri Kishen", role: "Special Magistrate", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Lead accused", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Accused organizer", type: "person" },
      { entity_id: "ENT-DAS-JATIN", name: "Jatindra Nath Das", role: "Accused on hunger strike", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH31-01", relationship_type: "continues", nature: "Proceedings coincide directly with the escalating hunger strike." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH32-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Prolonged committal proceedings and prisoner boycotts during the hunger strike caused the Viceroy to scrap the magistrate inquiry and promulgate Ordinance III.",
        provenance: "chapter030.xhtml / notes.xhtml (Ch. 30 Notes 1-21)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "magisterial_order_sheets_and_press_reports",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Daily court diary sheets of Magistrate Sri Kishen and verbatim reports in The Tribune."
      }
    ],
    source_evidence: [
      "When the accused entered the court, they were not submissive criminals. They raised full-throated slogans of 'Inquilab Zindabad' and 'Samrajyavad ka Nash Ho'.",
      "Bhagat Singh and Dutt were brought to the court on stretchers because they were already in the fourth week of their hunger strike."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "trial_inquiry", description: "Committal proceedings fully preserved in Lahore archives." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000527", "bhasin0000528", "bhasin0000529", "bhasin0000530", "bhasin0000535", "bhasin0000540", "bhasin0000550"],
      notes_referenced: ["notes.xhtml#bhasin0001502", "notes.xhtml#bhasin0001522"],
      archival_citations: ["Order Sheets of Special Magistrate Sri Kishen, Lahore Conspiracy Case, July 1929 - April 1930"]
    },
    genre_specific_payload: {
      setting: "Lahore Central Jail makeshift courtroom.",
      documented_actions: [
        "Magistrate Sri Kishen reads charges under Sections 121, 121A, 302, 109 IPC.",
        "Accused refuse to enter pleas or accept legal counsel while treated as ordinary criminals.",
        "Mass singing of patriotic anthems shaking the courtroom rafters.",
        "Adjournments granted repeatedly due to the critical medical condition of hunger strikers."
      ],
      outcomes: [
        "Complete collapse of judicial decorum; colonial authority exposed as helpless against moral defiance."
      ],
      historical_significance: "Established the political trial as a revolutionary weapon where the accused prosecuted the imperial state."
    }
  },

  // --- PART 7: JUDICIAL REPRISALS ---
  {
    unit_id: "KU-BS-CH31-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter031.xhtml",
      chapter_number: 31,
      chapter_title: "31. 5 May 1930, Inalienable Rights",
      element_ids: ["bhasin0000561", "bhasin0000562", "bhasin0000563", "bhasin0000564", "bhasin0000565", "bhasin0000566", "bhasin0000567", "bhasin0000568", "bhasin0000569", "bhasin0000570", "bhasin0000571"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "31. 5 May 1930, Inalienable Rights"
    },
    title: "1929, The Hunger Strike: The Battle for Political Prisoner Status and Brutal Forced Feeding",
    summary_statement: "Documents the epic hunger strike begun by Bhagat Singh on 15 June 1929 in Mianwali Jail, joined by Batukeshwar Dutt in Lahore, and subsequently joined by all comrades in Borstal Jail Lahore, demanding treatment as political prisoners, sanitary living conditions, daily newspapers, and books; details the agony of forced nasal feeding using rubber tubes, milk, and raw eggs.",
    materiality: "critical",
    materiality_reason: "The central moral struggle of the revolutionary campaign that transfixed the entire nation for over 100 days.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "15 June 1929 – October 1929",
      date_iso_estimated: "1929-06-15",
      precision: "exact",
      chronological_sequence_index: 33,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "June–October 1929", context: "Hunger strike across Mianwali and Lahore jails." },
      record_revelation_time: { date_raw: "June 1929", context: "Letters to the Inspector General of Prisons published in the press." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents medical reports of violent resistance to nasal forced-feeding." }
    },
    context: {
      micro_context: "Prison hospital wards; medical attendants forcibly pinning strikers to the floor; rubber tubes forced down nostrils.",
      meso_context: "Punjab Jail authorities attempting to keep strikers alive to avoid political martyrdom.",
      macro_context: "Nationwide rallies, 'Bhagat Singh Days', and mass fund-raising for the defense committee."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Leader of hunger strike", type: "person" },
      { entity_id: "ENT-DUTT", name: "Batukeshwar Dutt", role: "Hunger strike co-leader", type: "person" },
      { entity_id: "ENT-DAS-JATIN", name: "Jatindra Nath Das", role: "Hunger striker", type: "person" },
      { entity_id: "ENT-BARKER", name: "Lt. Col. F.A. Barker", role: "Inspector General of Prisons", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH35-01", relationship_type: "continues", nature: "Leads to the tragic death of Jatindra Nath Das on the 63rd day." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH35-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Forced feeding complications directly resulted in the death of Jatindra Nath Das.",
        provenance: "chapter031.xhtml / notes.xhtml (Ch. 31 Notes 1-18)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "jail_medical_bulletins_and_letters",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "custodial_interrogation",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official medical registers and Superintendent letters (Plate 8 / App) confirm daily weights and forced feeding trauma."
      }
    ],
    source_evidence: [
      "We are political prisoners and we must be treated as such. We are not common criminals.",
      "The doctors and warders held Bhagat Singh down. They pushed a rubber tube through his nostril into his stomach. Bhagat Singh coughed and vomited, but the tube was pressed down relentlessly."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "medical_records", description: "Jail hospital records fully documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000561", "bhasin0000562", "bhasin0000563", "bhasin0000564", "bhasin0000565", "bhasin0000566", "bhasin0000567", "bhasin0000568", "bhasin0000569", "bhasin0000570", "bhasin0000571"],
      notes_referenced: ["notes.xhtml#bhasin0001523", "notes.xhtml#bhasin0001540"],
      archival_citations: ["IOR L/PJ/6/2004, File on Hunger Strike in Lahore", "Letter from Bhagat Singh to IG Prisons, 17 June 1929"]
    },
    genre_specific_payload: {
      setting: "Mianwali Central Jail and Lahore Borstal Jail.",
      documented_actions: [
        "Bhagat Singh initiates hunger strike on 15 June 1929; Dutt commences strike simultaneously in Lahore.",
        "Refusal of water and food; water vessels filled with milk by jailers to tempt strikers.",
        "Violent forced-feeding through nasal catheters causing lung injuries."
      ],
      outcomes: [
        "Massive upsurge in Indian public sympathy; Gandhi and Nehru forced to address prison demands."
      ],
      historical_significance: "Redefined the hunger strike from an act of individual despair into a powerful collective weapon of political and legal resistance."
    }
  },
  {
    unit_id: "KU-BS-CH32-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter032.xhtml",
      chapter_number: 32,
      chapter_title: "32. 1 May 1930, Lahore Ordinance",
      element_ids: ["bhasin0000572", "bhasin0000573", "bhasin0000574", "bhasin0000575", "bhasin0000576", "bhasin0000577", "bhasin0000578"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "32. 1 May 1930, Lahore Ordinance"
    },
    title: "1 May 1930, Lahore Ordinance: The Promulgation of Ordinance III of 1930",
    summary_statement: "Examines the promulgation of the Lahore Conspiracy Case Ordinance (Ordinance III of 1930) by Viceroy Lord Irwin on 1 May 1930, transferring the trial from the Magistrate to an extraordinary Special Tribunal of three High Court judges, dispensing with committal proceedings, the right to appeal to the High Court, and allowing trial in absentia.",
    materiality: "critical",
    materiality_reason: "The central statutory mechanism of colonial judicial despotism that sealed the fate of Bhagat Singh.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1 May 1930",
      date_iso_estimated: "1930-05-01",
      precision: "exact",
      chronological_sequence_index: 34,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1 May 1930", context: "Promulgated by the Governor-General under Section 72 of the Government of India Act 1915." },
      record_revelation_time: { date_raw: "1 May 1930", context: "Published in the Gazette of India Extraordinary." },
      source_time: { publication_year: 2022, author_analysis: "Juss conducts a rigorous constitutional critique proving the ordinance was ultra vires and despotic." }
    },
    context: {
      micro_context: "Viceregal Lodge, Simla; secret telegrams between Irwin and Secretary of State Wedgwood Benn.",
      meso_context: "Failure of the prosecution to break the hunger strike or control the Magistrate's court in Lahore.",
      macro_context: "Civil Disobedience Movement erupting across India following Gandhi's Dandi Salt March (March-April 1930)."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy of India", type: "person" },
      { entity_id: "ENT-BENN", name: "William Wedgwood Benn", role: "Secretary of State for India", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH33-01", relationship_type: "continues", nature: "Creates the Special Tribunal that convened on 5 May 1930." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH33-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Ordinance III explicitly established the Special Tribunal and ordered the immediate transfer of the case.",
        provenance: "chapter032.xhtml / notes.xhtml (Ch. 32 Notes 1-7)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "statutory_ordinance_and_gazette_extraordinary",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Gazette of India Extraordinary text of Ordinance III of 1930."
      }
    ],
    source_evidence: [
      "Ordinance III of 1930 was an extraordinary piece of emergency legislation. It was promulgated without the consent of the Central Legislative Assembly.",
      "It deprived the accused of the basic protections of the Criminal Procedure Code: there were to be no committal proceedings, no right of appeal to the High Court, and the Tribunal could proceed in the absence of the accused."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "statutory_record", description: "Ordinance text fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000572", "bhasin0000573", "bhasin0000574", "bhasin0000575", "bhasin0000576", "bhasin0000577", "bhasin0000578"],
      notes_referenced: ["notes.xhtml#bhasin0001541", "notes.xhtml#bhasin0001547"],
      archival_citations: ["Gazette of India Extraordinary, 1 May 1930", "IOR L/PJ/6/2004"]
    },
    genre_specific_payload: {
      setting: "Simla and New Delhi viceregal administrative offices.",
      documented_actions: [
        "Irwin signs Ordinance III invoking Section 72 emergency powers.",
        "Bypassing of the Indian Legislature where the CrPC Amendment Bill had been defeated.",
        "Notification of appointment of three serving High Court judges to the Tribunal."
      ],
      outcomes: [
        "Abolition of normal judicial procedural safeguards for the Lahore Conspiracy Case."
      ],
      historical_significance: "Represented the starkest institutional demonstration that the colonial Raj subordinated the rule of law to imperial survival."
    }
  },
  {
    unit_id: "KU-BS-CH33-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter033.xhtml",
      chapter_number: 33,
      chapter_title: "33. 1930, The Special Tribunal",
      element_ids: ["bhasin0000579", "bhasin0000580", "bhasin0000581", "bhasin0000582", "bhasin0000583", "bhasin0000584", "bhasin0000585", "bhasin0000586"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "33. 1930, The Special Tribunal"
    },
    title: "1930, The Special Tribunal: Coldstream, Hilton, and Agha Haidar at Poonch House",
    summary_statement: "Details the constitution and opening of the Special Tribunal on 5 May 1930 at Poonch House, Lahore, presided over by Justice J. Coldstream, with Justice G.C. Hilton and Indian judge Justice Syed Agha Haidar, and the immediate procedural clash as the accused challenge the jurisdiction of the Tribunal.",
    materiality: "critical",
    materiality_reason: "Introduces the judicial bench and setting where the trial was conducted and where Justice Agha Haidar's historic dissent took place.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "5 May 1930",
      date_iso_estimated: "1930-05-05",
      precision: "exact",
      chronological_sequence_index: 35,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "5 May 1930", context: "First sitting of the Special Tribunal at Poonch House, Lahore." },
      record_revelation_time: { date_raw: "May 1930", context: "Tribunal order sheets and press reports." },
      source_time: { publication_year: 2022, author_analysis: "Juss evaluates the internal constitutional tensions between Coldstream and Agha Haidar." }
    },
    context: {
      micro_context: "Poonch House, an aristocratic Lahore mansion converted into an armed judicial fortress.",
      meso_context: "Tribunal operating under a strict six-month statutory deadline before Ordinance III expired.",
      macro_context: "Punjab under Section 144 CrPC and mass arrests of Congress volunteers during Salt Satyagraha."
    },
    entities: [
      { entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "President of the Special Tribunal", type: "person" },
      { entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Tribunal Judge", type: "person" },
      { entity_id: "ENT-AGHA-HAIDAR", name: "Justice Syed Agha Haidar", role: "Indian Tribunal Judge (dissenter)", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Lead accused", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH36-01", relationship_type: "continues", nature: "Leads directly to the violent court clash on 12 May 1930." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH36-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Coldstream's authoritarian courtroom management clashed with prisoner sloganeering, culminating in the 12 May assault.",
        provenance: "chapter033.xhtml / notes.xhtml (Ch. 33 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "tribunal_order_sheets_and_minutes",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official order sheets of the Special Tribunal preserved in Punjab Archives Lahore."
      }
    ],
    source_evidence: [
      "Poonch House was surrounded by barbed wire and guarded by a large contingent of British and Indian armed police.",
      "The accused entered the courtroom shouting 'Inquilab Zindabad' and refused to participate until their political status was recognized."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "tribunal_record", description: "Tribunal composition and orders authenticated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000579", "bhasin0000580", "bhasin0000581", "bhasin0000582", "bhasin0000583", "bhasin0000584", "bhasin0000585", "bhasin0000586"],
      notes_referenced: ["notes.xhtml#bhasin0001548", "notes.xhtml#bhasin0001555"],
      archival_citations: ["Order Sheet of the Special Tribunal, Lahore, 5 May 1930", "IOR L/PJ/6/2004"]
    },
    genre_specific_payload: {
      setting: "Poonch House, Multan Road, Lahore.",
      documented_actions: [
        "Inauguration of proceedings under Ordinance III.",
        "Defense advocates challenge the constitutional validity of Section 72 application.",
        "Coldstream summarily overrules all preliminary objections regarding jurisdiction."
      ],
      outcomes: [
        "Rigid confrontation established between the imperial bench and the revolutionary accused."
      ],
      historical_significance: "Marked the beginning of one of the most controversial political trials in British imperial jurisprudence."
    }
  },
  {
    unit_id: "KU-BS-CH34-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter034.xhtml",
      chapter_number: 34,
      chapter_title: "34. A ‘Striking Power’",
      element_ids: ["bhasin0000587", "bhasin0000588", "bhasin0000589", "bhasin0000590", "bhasin0000591", "bhasin0000592", "bhasin0000593"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "34. A ‘Striking Power’"
    },
    title: "A ‘Striking Power’: The Executive Race Against the Six-Month Ordinance Expiry",
    summary_statement: "Analyzes the British administration's desperate imperative to complete the trial before the six-month statutory lifespan of Ordinance III expired in late October 1930, creating intense executive pressure on the Tribunal to rush through witness depositions without cross-examination.",
    materiality: "important",
    materiality_reason: "Exposes the executive panic that drove procedural abuses and trial in absentia.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "May–October 1930",
      date_iso_estimated: "1930-06-01",
      precision: "approximate_month",
      chronological_sequence_index: 36,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "May–October 1930", context: "Trial proceedings under the countdown of Ordinance III's six-month validity." },
      record_revelation_time: { date_raw: "1930", context: "Secret government dispatches between Lahore and Whitehall." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates how the statutory time limit turned the trial into an executive race against time." }
    },
    context: {
      micro_context: "Daily courtroom sessions with judges working under extreme pressure to examine 457 prosecution witnesses.",
      meso_context: "Section 72 of the Government of India Act 1915 limiting ordinances to a maximum lifespan of six months.",
      macro_context: "Upcoming First Round Table Conference in London scheduled for November 1930."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy", type: "person" },
      { entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "Tribunal President", type: "person" },
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Legal scholar", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH39-01", relationship_type: "continues", nature: "Directly causes the Tribunal to proceed in the absence of the accused." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH39-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Because Ordinance III expired on 31 October 1930, the Tribunal could not grant adjournments and chose to conduct the trial in absentia.",
        provenance: "chapter034.xhtml / notes.xhtml (Ch. 34 Notes 1-7)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "viceregal_telegrams_and_home_department_notes",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Home Department files in National Archives record constant anxiety over the October 31 deadline."
      }
    ],
    source_evidence: [
      "The Tribunal was operating under the shadow of a ticking clock. An ordinance under Section 72 had a maximum life of six months.",
      "If the judgment was not delivered before 31 October 1930, Ordinance III would lapse, and the entire proceedings would become void."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "statutory_timeline", description: "Six-month limit statutory fact." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000587", "bhasin0000588", "bhasin0000589", "bhasin0000590", "bhasin0000591", "bhasin0000592", "bhasin0000593"],
      notes_referenced: ["notes.xhtml#bhasin0001556", "notes.xhtml#bhasin0001562"],
      archival_citations: ["IOR L/PJ/6/2004, Telegram No. 1421-S, Viceroy to Secretary of State, May 1930"]
    },
    genre_specific_payload: {
      setting: "Simla Secretariat and Poonch House Tribunal bench.",
      documented_actions: [
        "Executive orders to expedite daily hearings, sitting six days a week.",
        "Refusal to allow adequate time for defense advocates to inspect thousands of pages of exhibits.",
        "Deliberate acceleration of witness testimonies."
      ],
      outcomes: [
        "Gross denial of fair trial standards in the desperate drive to pronounce death sentences before 31 October."
      ],
      historical_significance: "Proves that procedural fairness was intentionally sacrificed to executive convenience and imperial timetables."
    }
  },
  {
    unit_id: "KU-BS-CH35-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter035.xhtml",
      chapter_number: 35,
      chapter_title: "35. The ‘Approvers’",
      element_ids: ["bhasin0000594", "bhasin0000595", "bhasin0000596", "bhasin0000597", "bhasin0000598", "bhasin0000599", "bhasin0000600", "bhasin0000601", "bhasin0000602", "bhasin0000603"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "35. The ‘Approvers’"
    },
    title: "The ‘Approvers’: State Pardons under Section 337 CrPC, Police Tutoring, and Treachery",
    summary_statement: "Examines the role of key approvers—Jai Gopal, Phanindra Nath Ghosh, Manmohan Banerjee, and Hans Raj Vohra—who betrayed their comrades in exchange for royal pardons and financial incentives under Section 337 CrPC; documents defense attorney Amolak Ram Kapur's formal petition protesting police coaching and tampering with witnesses.",
    materiality: "critical",
    materiality_reason: "Exposes the evidentiary engine of the prosecution and illustrates the coercive mechanisms of colonial state pardons.",
    epistemic_status: "[COERCED_TESTIMONY]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1929–1930",
      date_iso_estimated: "1929-10-03",
      precision: "exact",
      chronological_sequence_index: 37,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "October 1929 – May 1930", context: "Approver statements recorded under Section 164 CrPC and repeated before Tribunal." },
      record_revelation_time: { date_raw: "3 October 1929", context: "Amolak Ram Kapur files landmark petition (Plate 1 / App) protesting approver tutoring." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths Plate 1 to demonstrate that approver testimony was manufactured by police." }
    },
    context: {
      micro_context: "Police custody cells where approvers were segregated, given special meals, and rehearsed daily.",
      meso_context: "Statutory operation of Section 337 CrPC dangling life immunity against execution.",
      macro_context: "Colonial state's standard operating procedure of breaking conspiracy networks through purchased collaborators."
    },
    entities: [
      { entity_id: "ENT-JAIGOPAL", name: "Jai Gopal", role: "Key approver (Saunders lookout)", type: "person" },
      { entity_id: "ENT-GHOSH-PN", name: "Phanindra Nath Ghosh", role: "Key approver (Ferozeshah Kotla delegate)", type: "person" },
      { entity_id: "ENT-VOHRA-HANSRAJ", name: "Hans Raj Vohra", role: "Approver (Lahore student cadre)", type: "person" },
      { entity_id: "ENT-KAPUR-AMOLAK", name: "Amolak Ram Kapur", role: "Defense advocate", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH44-01", relationship_type: "continues", nature: "Approver testimony forms the basis of the final death judgment." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH44-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The Special Tribunal's judgment explicitly relied on the uncorroborated testimony of approvers to convict Bhagat Singh under Section 302/120B IPC.",
        provenance: "chapter035.xhtml / notes.xhtml (Ch. 35 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "approver_statements_and_defense_petitions",
        temporal_proximity: "contemporaneous",
        source_independence: "derived_from_prior_document",
        institutional_position: "insurgent_dissident",
        coercive_context: "state_approver_under_pardon",
        corroboration_state: "directly_conflicted_by_counter_evidence",
        evidentiary_reliability_assessment: "Approver testimonies were given under explicit promise of immunity from hanging and were actively coached in police lines, as documented by Plate 1."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Petition of Amolak Ram Kapur (3 Oct 1929, Plate 1): 'The approvers have been kept in police custody contrary to the law and have been daily tutored by the investigating officers to fit the prosecution narrative.'",
      "[COERCED_TESTIMONY] Hans Raj Vohra, Jai Gopal, and P.N. Ghosh provided detailed accounts of secret meetings and safehouses after being threatened with the gallows."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "coerced_evidence", description: "Approver status and terms of pardon fully documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000594", "bhasin0000595", "bhasin0000596", "bhasin0000597", "bhasin0000598", "bhasin0000599", "bhasin0000600", "bhasin0000601", "bhasin0000602", "bhasin0000603"],
      notes_referenced: ["notes.xhtml#bhasin0001563", "notes.xhtml#bhasin0001572"],
      archival_citations: ["Plate 1 (Appendix), Petition of Amolak Ram Kapur, 3 Oct 1929", "Approver Statements, Crown v. Sukhdev and Others"]
    },
    genre_specific_payload: {
      setting: "Magistrate Court and Poonch House, Lahore.",
      documented_actions: [
        "Police secure confessional statements under Section 164 CrPC while accused are isolated in custody.",
        "Formal tender of pardon under Section 337 CrPC accepted by Jai Gopal and Ghosh.",
        "Defense advocates file formal applications exposing police coaching in witness waiting rooms."
      ],
      outcomes: [
        "Prosecution secures self-incriminating narratives connecting all 24 accused into a single criminal conspiracy."
      ],
      historical_significance: "Demonstrates that the crown's case rested almost entirely on purchased and coerced accomplice evidence rather than independent forensic proof."
    }
  },
  {
    unit_id: "KU-BS-CH36-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter036.xhtml",
      chapter_number: 36,
      chapter_title: "36. Police Beatings",
      element_ids: ["bhasin0000604", "bhasin0000605", "bhasin0000606", "bhasin0000607", "bhasin0000608", "bhasin0000609", "bhasin0000610", "bhasin0000611", "bhasin0000612", "bhasin0000613", "bhasin0000614", "bhasin0000615", "bhasin0000616"]
    },
    structural_position: {
      part: "PART 7: JUDICIAL REPRISALS",
      chapter: "36. Police Beatings"
    },
    title: "12 May 1930: Open-Court Police Assault and Justice Agha Haidar’s Historic Repudiation",
    summary_statement: "Chronicles the dramatic events of 12 May 1930 in the Special Tribunal when President Coldstream ordered police to handcuff the accused after they sang patriotic songs; British and Indian policemen brutally assaulted Bhagat Singh and comrades in open court; Justice Syed Agha Haidar courageously recorded his dissociation on the official court sheet ('I was not a party to the order... I consider it my duty to repudiate it'), sparking an executive crisis that led to the reconstitution of the Tribunal.",
    materiality: "critical",
    materiality_reason: "The moral and procedural zenith of the trial; exposes judicial complicity in physical violence and highlights Justice Agha Haidar's exceptional integrity.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "12 May 1930",
      date_iso_estimated: "1930-05-12",
      precision: "exact",
      chronological_sequence_index: 38,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "12 May 1930", context: "Assault inside the Poonch House courtroom." },
      record_revelation_time: { date_raw: "12 May 1930", context: "Order sheet of the Special Tribunal and newspaper front pages." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths archival proof that Agha Haidar was removed precisely because of this repudiation." }
    },
    context: {
      micro_context: "Poonch House courtroom; European policemen using boots, batons, and handcuffs on defenseless prisoners.",
      meso_context: "President Coldstream losing judicial composure and ordering physical force to compel silence.",
      macro_context: "National outrage leading to lawyer strikes and defense counsel walking out in protest."
    },
    entities: [
      { entity_id: "ENT-AGHA-HAIDAR", name: "Justice Syed Agha Haidar", role: "High Court Judge refusing to condone violence", type: "person" },
      { entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "Tribunal President ordering handcuffs", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Assaulted prisoner", type: "person" },
      { entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Tribunal Judge siding with Coldstream", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH40-01", relationship_type: "continues", nature: "Leads directly to Chapter 40 on the reconstitution of the Tribunal." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH40-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Justice Agha Haidar's open repudiation of Coldstream forced the colonial administration to remove both Coldstream and Haidar to reconstitute a compliant bench.",
        provenance: "chapter036.xhtml / notes.xhtml (Ch. 36 Notes 1-13)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "tribunal_order_sheet_dissent_and_medical_records",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "physical_coercion",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Justice Agha Haidar's verbatim handwritten note recorded on the official order sheet of 12 May 1930."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Justice Syed Agha Haidar's Order Sheet Dissent (12 May 1930): 'I was not a party to the order of removing the accused... I was not consulted. I consider it my duty to repudiate the order and to dissociate myself from the violence used against the accused.'",
      "Bhagat Singh was beaten unconscious on the floor of the court while European police officers kicked him in the ribs and face."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_dissent", description: "Official order sheet and dissent verbatim preserved in Lahore Archives." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000604", "bhasin0000605", "bhasin0000606", "bhasin0000607", "bhasin0000608", "bhasin0000609", "bhasin0000610", "bhasin0000611", "bhasin0000612", "bhasin0000613", "bhasin0000614", "bhasin0000615", "bhasin0000616"],
      notes_referenced: ["notes.xhtml#bhasin0001573", "notes.xhtml#bhasin0001585"],
      archival_citations: ["Order Sheet of the Special Tribunal, Lahore, 12 May 1930 (Plate 11 / App)", "The Tribune, 14 May 1930"]
    },
    genre_specific_payload: {
      setting: "Poonch House Special Tribunal courtroom, Lahore.",
      documented_actions: [
        "Accused enter singing 'Sarfaroshi Ki Tamanna'.",
        "Coldstream orders police to handcuff the prisoners; accused resist.",
        "Police superintendent brings in a squad of police who kick, punch, and club the accused in the presence of the judges.",
        "Justice Agha Haidar refuses to sit and writes his historic dissent on the record.",
        "Accused announce a total boycott of the Tribunal until an apology is tendered."
      ],
      outcomes: [
        "Irreparable moral collapse of the Special Tribunal; complete boycott by the accused; judicial paralysis."
      ],
      historical_significance: "Stands as one of the most heroic moments of judicial independence in colonial Indian legal history, proving that the Tribunal was an instrument of state violence."
    }
  }
];
