/**
 * BKRS Milestone 3 - Part 2 & Part 3 Units
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 */

module.exports = [
  // --- PART 2: WHOSE BHAGAT SINGH? ---
  {
    unit_id: "KU-BS-CH08-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter008.xhtml",
      chapter_number: 8,
      chapter_title: "8. 1929, Jinnah and Bhagat Singh",
      element_ids: ["bhasin0000269", "bhasin0000270", "bhasin0000271", "bhasin0000272", "bhasin0000273", "bhasin0000274", "bhasin0000275", "bhasin0000276", "bhasin0000277", "bhasin0000278", "bhasin0000279", "bhasin0000280"]
    },
    structural_position: {
      part: "PART 2: WHOSE BHAGAT SINGH?",
      chapter: "8. 1929, Jinnah and Bhagat Singh"
    },
    title: "1929, Jinnah and Bhagat Singh: Parliamentary Defense of the Hunger Strikers",
    summary_statement: "Details Muhammad Ali Jinnah's historic September 1929 speech in the Central Legislative Assembly fiercely defending Bhagat Singh and the hunger striking prisoners against the colonial Code of Criminal Procedure Amendment Bill, declaring that a man on hunger strike possesses a soul and is driven by conscience.",
    materiality: "critical",
    materiality_reason: "Preserves the profound cross-ideological parliamentary defense of revolutionary civil liberties by constitutionalist Muhammad Ali Jinnah.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "12–14 September 1929",
      date_iso_estimated: "1929-09-12",
      precision: "exact",
      chronological_sequence_index: 10,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "12–14 September 1929", context: "Debate on CrPC Amendment Bill in Central Legislative Assembly, New Delhi." },
      record_revelation_time: { date_raw: "September 1929", context: "Official Legislative Assembly Debates, Vol. IV." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights the shared constitutionalist respect for political prisoner status." }
    },
    context: {
      micro_context: "Central Legislative Assembly chamber, Simla/Delhi; Jatindra Nath Das dying in Lahore jail.",
      meso_context: "Colonial executive attempting to amend the CrPC to allow trials to proceed in the absence of accused on hunger strike.",
      macro_context: "Nationwide outrage over hunger strike conditions and maltreatment of undertrials."
    },
    entities: [
      { entity_id: "ENT-JINNAH", name: "Muhammad Ali Jinnah", role: "Legislative Assembly member and leader of Independent Party", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Hunger striking prisoner", type: "person" },
      { entity_id: "ENT-HAIG", name: "Sir James Crerar / H.G. Haig", role: "Colonial Home Member", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH31-01", relationship_type: "supports", nature: "Provides parliamentary legitimacy to the hunger strikers' demands." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH32-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Jinnah's parliamentary opposition blocked the CrPC Amendment Bill, forcing Viceroy Irwin to promulgate Ordinance III.",
        provenance: "chapter008.xhtml / notes.xhtml (Ch. 8 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_parliamentary_debates",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Hansard transcript of the Central Legislative Assembly Debates."
      }
    ],
    source_evidence: [
      "The man who goes on hunger strike has a soul. He is that which will not bend, and he is determined to die because he believes in the justice of his cause.",
      "You are trying to prosecute them, and yet you are treating them as common felons before they are convicted."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "parliamentary_record", description: "Verbatim speech officially recorded." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000269", "bhasin0000270", "bhasin0000271", "bhasin0000272", "bhasin0000273", "bhasin0000274", "bhasin0000275", "bhasin0000276", "bhasin0000277", "bhasin0000278", "bhasin0000279", "bhasin0000280"],
      notes_referenced: ["notes.xhtml#bhasin0001258", "notes.xhtml#bhasin0001265"],
      archival_citations: ["Legislative Assembly Debates, 12-14 September 1929, Vol. IV, pp. 753-765"]
    },
    genre_specific_payload: {
      setting: "Central Legislative Assembly, New Delhi / Simla.",
      documented_actions: [
        "Jinnah delivers scathing condemnation of the Government's punitive prison regime.",
        "Refusal of Indian elected members to pass the emergency CrPC amendment.",
        "Jinnah warns the colonial government that repression produces revolutionaries."
      ],
      outcomes: [
        "Defeat of the CrPC Amendment Bill, dealing a major legislative humiliation to the Raj."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's hunger strike commanded profound cross-communal and liberal constitutionalist support."
    }
  },
  {
    unit_id: "KU-BS-CH09-01",
    unit_type: "LIFE_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter009.xhtml",
      chapter_number: 9,
      chapter_title: "9. 1924, Matwala",
      element_ids: ["bhasin0000281", "bhasin0000282", "bhasin0000283", "bhasin0000284", "bhasin0000285", "bhasin0000286", "bhasin0000287", "bhasin0000288", "bhasin0000289", "bhasin0000290", "bhasin0000291", "bhasin0000292"]
    },
    structural_position: {
      part: "PART 2: WHOSE BHAGAT SINGH?",
      chapter: "9. 1924, Matwala"
    },
    title: "1924, Matwala: Journalism in Kanpur and Calcutta under the Pseudonym 'Balwant Singh'",
    summary_statement: "Documents Bhagat Singh's clandestine flight to Kanpur in 1923-24 to escape an arranged marriage, his work as a radical journalist writing for Ganesh Shankar Vidyarthi's 'Pratap' and Calcutta's 'Matwala' under the pseudonym 'Balwant Singh', and his recruitment into the Hindustan Republican Association.",
    materiality: "critical",
    materiality_reason: "Establishes Bhagat Singh's emergence as a professional political writer, essayist, and clandestine organizer.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1923–1924",
      date_iso_estimated: "1924-03-01",
      precision: "approximate_month",
      chronological_sequence_index: 11,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1923–1924", context: "Journalism in Kanpur and Calcutta; letters to father asserting devotion to the motherland." },
      record_revelation_time: { date_raw: "1924", context: "Articles published in Hindi journals Pratap and Matwala." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates the depth of Bhagat Singh's literary prose and political journalism." }
    },
    context: {
      micro_context: "Printing presses and underground rooms in Kanpur and Calcutta.",
      meso_context: "Police surveillance of National College Lahore graduates following the Kakori conspiracy.",
      macro_context: "Post-Non-Cooperation vacuum where radical press served as the principal coordinating nexus."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh (alias Balwant Singh)", role: "Journalist and underground cadre", type: "person" },
      { entity_id: "ENT-VIDYARTHI", name: "Ganesh Shankar Vidyarthi", role: "Editor of Pratap and revolutionary mentor", type: "person" },
      { entity_id: "ENT-SANYAL", name: "Sachindra Nath Sanyal", role: "HRA founder and author of Bandi Jeevan", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH18-01", relationship_type: "continues", nature: "Leads directly to joining Sanyal and Bismil in the HRA." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH18-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Vidyarthi introduced Bhagat Singh to Sachindra Nath Sanyal at the Pratap office in Kanpur.",
        provenance: "chapter009.xhtml / notes.xhtml (Ch. 9 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "published_periodicals_and_letters",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Preserved issues of Pratap and Matwala containing Balwant Singh bylines."
      }
    ],
    source_evidence: [
      "My life has been dedicated to the noblest cause, that of the freedom of the country. Therefore, there is no rest or worldly desire that can lure me now.",
      "In Kanpur, Bhagat Singh found in Ganesh Shankar Vidyarthi not just a mentor, but an editor who gave him a voice."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "journalistic", description: "Bylines and correspondence fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000281", "bhasin0000282", "bhasin0000283", "bhasin0000284", "bhasin0000285", "bhasin0000286", "bhasin0000287", "bhasin0000288", "bhasin0000289", "bhasin0000290", "bhasin0000291", "bhasin0000292"],
      notes_referenced: ["notes.xhtml#bhasin0001266", "notes.xhtml#bhasin0001275"],
      archival_citations: ["Pratap Archives, Kanpur", "Matwala, Calcutta, 1924-1925"]
    },
    genre_specific_payload: {
      subject: "Bhagat Singh",
      lived_experience: "Fleeing domestic constraints to immerse in underground publishing and political labor.",
      dilemma: "Family expectation of marriage and settled life vs life of ascetic revolutionary hardship.",
      decision: "Leaves home, writing a decisive farewell letter to his father Kishan Singh.",
      consequence: "Formal integration into the North Indian revolutionary underground network.",
      worldview_shift: "Deepening socialist commitment through wide reading in Kanpur's workers' libraries."
    }
  },
  {
    unit_id: "KU-BS-CH10-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter010.xhtml",
      chapter_number: 10,
      chapter_title: "10. Punjabiyat",
      element_ids: ["bhasin0000293", "bhasin0000294", "bhasin0000295", "bhasin0000296", "bhasin0000297", "bhasin0000298", "bhasin0000299", "bhasin0000300", "bhasin0000301", "bhasin0000302", "bhasin0000303", "bhasin0000304"]
    },
    structural_position: {
      part: "PART 2: WHOSE BHAGAT SINGH?",
      chapter: "10. Punjabiyat"
    },
    title: "Punjabiyat: Syncretic Cultural Identity, Vernacular Secularism, and the Anti-Communal Ethos",
    summary_statement: "Explores Bhagat Singh's deep grounding in 'Punjabiyat'—the shared composite culture of Punjab transcending religious communalism, rooted in Sufi poetry (Bulleh Shah, Waris Shah's Heer) and peasant fraternity, which directly fueled his uncompromising secularism.",
    materiality: "important",
    materiality_reason: "Provides the cultural and civilizational foundation for Bhagat Singh's fierce rejection of communal politics in the Naujawan Bharat Sabha.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1920s / 2022",
      date_iso_estimated: "1926-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 12,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1920s", context: "Bhagat Singh singing Punjabi folk ballads and quoting Urdu/Persian poetry with comrades." },
      record_revelation_time: { date_raw: "1920s", context: "Essays on the problem of communalism in Kirti." },
      source_time: { publication_year: 2022, author_analysis: "Juss asserts Punjabiyat as a counter to religious chauvinism in post-partition subcontinent." }
    },
    context: {
      micro_context: "Informal gatherings in Bradlaugh Hall, Lahore, and student hostels.",
      meso_context: "Rising communal tensions between Arya Samaj, Muslim League, and Akali factions in 1920s Punjab.",
      macro_context: "Colonial state exploiting communal electorates to divide nationalist unity."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Secular cultural theorist", type: "person" },
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Biographer", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH24-01", relationship_type: "explains", nature: "Explains the strict secular membership rules of the Naujawan Bharat Sabha." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH24-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh banned communal organizations and mandated shared inter-communal dining in the NBS.",
        provenance: "chapter010.xhtml / notes.xhtml (Ch. 10 Notes 1-14)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "cultural_essays_and_literary_analysis",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Bhagat Singh's 1927 essays on communalism and the language question in Punjab."
      }
    ],
    source_evidence: [
      "Punjabiyat was not a religious creed; it was an ethos of shared belonging where the blood of Hindu, Muslim, and Sikh mingled in common struggle.",
      "Bhagat Singh drew inspiration from the humanist mysticism of Bulleh Shah and the defiant spirit of Waris Shah."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "cultural_analysis", description: "Secular ethos well corroborated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000293", "bhasin0000294", "bhasin0000295", "bhasin0000296", "bhasin0000297", "bhasin0000298", "bhasin0000299", "bhasin0000300", "bhasin0000301", "bhasin0000302", "bhasin0000303", "bhasin0000304"],
      notes_referenced: ["notes.xhtml#bhasin0001276", "notes.xhtml#bhasin0001289"],
      archival_citations: ["Kirti (Amritsar), May 1928, 'Sampradayik Dangey Aur Unka Ilaj'"]
    },
    genre_specific_payload: {
      setting: "Cultural and intellectual landscape of undivided Punjab.",
      documented_actions: [
        "Critique of religious revivalism by young revolutionaries.",
        "Advocacy for Punjabi language in Persian, Gurmukhi, and Devanagari scripts.",
        "Rejection of untouchability and communal segregation in student canteens."
      ],
      outcomes: [
        "Creation of a secular, egalitarian revolutionary identity that united diverse Punjabi communities."
      ],
      historical_significance: "Establishes that Bhagat Singh's secularism was rooted in organic regional vernacular culture rather than borrowed abstract theory."
    }
  },
  {
    unit_id: "KU-BS-CH11-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter011.xhtml",
      chapter_number: 11,
      chapter_title: "11. 2019, Shadman Chowk",
      element_ids: ["bhasin0000305", "bhasin0000306", "bhasin0000307", "bhasin0000308", "bhasin0000309", "bhasin0000310", "bhasin0000311", "bhasin0000312"]
    },
    structural_position: {
      part: "PART 2: WHOSE BHAGAT SINGH?",
      chapter: "11. 2019, Shadman Chowk"
    },
    title: "2019, Shadman Chowk: The Battle for Memorialization in Contemporary Pakistan",
    summary_statement: "Examines the modern civic and legal struggle in Lahore, Pakistan, led by advocate Imtiaz Rashid Qureshi (Bhagat Singh Memorial Foundation), to rename Shadman Chowk—the exact site of the former Lahore Central Jail gallows—as Bhagat Singh Chowk, meeting resistance from religious fundamentalist groups.",
    materiality: "textural",
    materiality_reason: "Demonstrates the enduring contested memory and cross-border reclamation of Bhagat Singh as a son of Lahore.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "2012–2019",
      date_iso_estimated: "2019-03-23",
      precision: "approximate_year",
      chronological_sequence_index: 13,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "2012–2019", context: "Petitions filed in Lahore High Court and public rallies at Shadman Chowk." },
      record_revelation_time: { date_raw: "2019", context: "Lahore High Court judicial orders directing city administration to consider renaming." },
      source_time: { publication_year: 2022, author_analysis: "Juss uses the Shadman Chowk controversy to highlight the shared anti-colonial heritage of India and Pakistan." }
    },
    context: {
      micro_context: "Traffic roundabout at Shadman Chowk, Lahore, built on demolished jail site.",
      meso_context: "Pakistani judicial petitions facing threats from Islamist groups like Tehreek-e-Labbaik.",
      macro_context: "Post-colonial national memory politics and Indo-Pak bilateral estrangement."
    },
    entities: [
      { entity_id: "ENT-QURESHI", name: "Imtiaz Rashid Qureshi", role: "Pakistani advocate and activist", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Historical martyr", type: "person" },
      { entity_id: "ENT-LHC", name: "Lahore High Court", role: "Judicial authority", type: "institution" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH47-01", relationship_type: "continues", nature: "Links the 1931 execution location to 21st-century memorial struggles." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "court_petitions_and_newspaper_reports",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Lahore High Court writ petitions and municipal proceedings verified in Pakistani press (Dawn, Express Tribune)."
      }
    ],
    source_evidence: [
      "Shadman Chowk in Lahore stands on the exact spot where the gallows of the Lahore Central Jail once stood.",
      "The struggle to rename the chowk after Bhagat Singh proves that his memory cannot be confined within narrow national borders."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "contemporary_legal", description: "Court proceedings publicly recorded." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000305", "bhasin0000306", "bhasin0000307", "bhasin0000308", "bhasin0000309", "bhasin0000310", "bhasin0000311", "bhasin0000312"],
      notes_referenced: ["notes.xhtml#bhasin0001290", "notes.xhtml#bhasin0001295"],
      archival_citations: ["Lahore High Court Writ Petition No. 16544/2018", "Dawn (Karachi), 24 March 2019"]
    },
    genre_specific_payload: {
      setting: "Shadman, Lahore, Pakistan.",
      documented_actions: [
        "Filing of public interest litigations in Lahore High Court demanding judicial exoneration and memorialization.",
        "Annual candlelight vigils organized by Pakistani civil society activists on 23 March.",
        "Opposition and legal counter-petitions filed by religious hardliners."
      ],
      outcomes: [
        "Ongoing legal stalemate highlighting the trans-national resonance of Bhagat Singh's martyrdom."
      ],
      historical_significance: "Demonstrates that Bhagat Singh remains a potent symbol of secular democratic resistance in modern South Asia."
    }
  },
  {
    unit_id: "KU-BS-CH12-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter012.xhtml",
      chapter_number: 12,
      chapter_title: "12. Colonialism’s Racial Cast",
      element_ids: ["bhasin0000313", "bhasin0000314", "bhasin0000315", "bhasin0000316", "bhasin0000317", "bhasin0000318", "bhasin0000319", "bhasin0000320", "bhasin0000321"]
    },
    structural_position: {
      part: "PART 2: WHOSE BHAGAT SINGH?",
      chapter: "12. Colonialism’s Racial Cast"
    },
    title: "Colonialism’s Racial Cast: The Jim Crow Architecture of Colonial Jails",
    summary_statement: "Exposes the institutionalized racial apartheid governing the British colonial penal code in India, where European prisoners (even convicted of murder or rape) enjoyed comfortable beds, European food, reading materials, and sanitary privacy, while Indian political prisoners were subjected to filth, manual labor, and degraded rations.",
    materiality: "critical",
    materiality_reason: "Establishes the objective systemic reality that provoked the historic 1929 Lahore hunger strike.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1920s",
      date_iso_estimated: "1929-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 14,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1920s", context: "Operation of the Punjab Jail Manual and racial classification rules." },
      record_revelation_time: { date_raw: "June 1929", context: "Bhagat Singh's formal petitions from Mianwali and Lahore jails." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the Jail Manual through critical race and legal history." }
    },
    context: {
      micro_context: "Cells and wards of Mianwali Jail, Lahore Central Jail, and Borstal Jail.",
      meso_context: "Punjab Jail Manual statutory provisions codifying 'European vagrant' and racial privileges.",
      macro_context: "British imperial ideology positing biological white supremacy as foundational to state authority."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Challenger of penal racism", type: "person" },
      { entity_id: "ENT-JAIL-DEPT", name: "Punjab Prisons Department", role: "Penal authority", type: "institution" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH31-01", relationship_type: "explains", nature: "Provides the explicit justification for the 1929 hunger strike demands." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH31-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh explicitly cited racial discrimination between European and Indian prisoners in his 17 June 1929 letter to the Inspector-General.",
        provenance: "chapter012.xhtml / notes.xhtml (Ch. 12 Notes 1-6)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_jail_manuals_and_petitions",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Punjab Jail Manual clauses and Indian Jails Committee Report 1919-20 verify racial privileges."
      }
    ],
    source_evidence: [
      "A European criminal of the lowest character was provided with better food, better accommodation, and better treatment than an educated Indian political undertrial.",
      "The prison system was designed to break the spirit of Indian nationalists through systematic degradation and racial humiliation."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "penal_code", description: "Jail regulations fully documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000313", "bhasin0000314", "bhasin0000315", "bhasin0000316", "bhasin0000317", "bhasin0000318", "bhasin0000319", "bhasin0000320", "bhasin0000321"],
      notes_referenced: ["notes.xhtml#bhasin0001296", "notes.xhtml#bhasin0001301"],
      archival_citations: ["Punjab Jail Manual 1916", "Report of the Indian Jails Committee 1919-20"]
    },
    genre_specific_payload: {
      setting: "Colonial prison institutions across Punjab.",
      documented_actions: [
        "Classification of prisoners based primarily on race and European ancestry rather than nature of offence.",
        "Denial of books, writing materials, and newspapers to Indian political undertrials.",
        "Enforcement of dehumanizing punishments (standing handcuffs, bar fetters) exclusively against Indian inmates."
      ],
      outcomes: [
        "Triggered the coordinated hunger strikes that galvanized nationwide political mobilization in 1929."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's prison strike attacked the foundational racial hierarchy of the British imperial enterprise."
    }
  },

  // --- PART 3: A LIFE IN REVOLUTION ---
  {
    unit_id: "KU-BS-CH13-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter013.xhtml",
      chapter_number: 13,
      chapter_title: "13. 1919, The Lahore File",
      element_ids: ["bhasin0000327", "bhasin0000328", "bhasin0000329", "bhasin0000330", "bhasin0000331", "bhasin0000332", "bhasin0000333", "bhasin0000334", "bhasin0000335", "bhasin0000336", "bhasin0000337", "bhasin0000338"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "13. 1919, The Lahore File"
    },
    title: "1919, The Lahore File: Martial Law Atrocities, Michael O'Dwyer, and Punjab Terror",
    summary_statement: "Details the brutal imposition of Martial Law across Punjab in April 1919 by Lieutenant-Governor Sir Michael O'Dwyer, public whippings, bombing of civilians from military aircraft in Gujranwala, and the establishment of summary military courts that condemned hundreds without legal defense.",
    materiality: "critical",
    materiality_reason: "Provides the visceral backdrop of imperial terror that radicalized the post-1919 Punjabi youth generation.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "April–May 1919",
      date_iso_estimated: "1919-04-15",
      precision: "exact",
      chronological_sequence_index: 15,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "April–May 1919", context: "Martial law proclamations and summary military courts in Lahore, Amritsar, Gujranwala." },
      record_revelation_time: { date_raw: "1919–1920", context: "Disorder Inquiry Committee (Hunter Committee) and Congress Punjab Inquiry Report." },
      source_time: { publication_year: 2022, author_analysis: "Juss draws upon newly catalogued Lahore Secretariat files detailing martial law sentences." }
    },
    context: {
      micro_context: "Curfew notices pasted across Lahore city; public whipping triangles erected outside railway station.",
      meso_context: "Martial Law Ordinances issued under Regulation X of 1804 suspending normal civil judicature.",
      macro_context: "All-India general strike against the Rowlatt Act and imperial paranoia of an armed Bolshevik-style revolution."
    },
    entities: [
      { entity_id: "ENT-ODWYER", name: "Sir Michael O'Dwyer", role: "Lieutenant-Governor of Punjab", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Twelve-year-old observer in Lahore", type: "person" },
      { entity_id: "ENT-JOHNSON", name: "Colonel Frank Johnson", role: "Martial Law Administrator, Lahore", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH14-01", relationship_type: "continues", nature: "Direct operational accompaniment to the Jallianwala Bagh massacre." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH14-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "O'Dwyer's approval of Dyer's action at Amritsar was part of a unified martial law campaign across Punjab.",
        provenance: "chapter013.xhtml / notes.xhtml (Ch. 13 Notes 1-9)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_martial_law_notices_and_hunter_report",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Colonel Frank Johnson's own unabashed testimony before the Hunter Committee confirming public whippings."
      }
    ],
    source_evidence: [
      "Martial law in Lahore was not merely an emergency police measure; it was a calibrated demonstration of racial subjugation.",
      "Students of D.A.V. College were forced to march sixteen miles in the blistering sun to salute the Union Jack."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "official_record", description: "Hunter Committee records confirm martial law orders." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000327", "bhasin0000328", "bhasin0000329", "bhasin0000330", "bhasin0000331", "bhasin0000332", "bhasin0000333", "bhasin0000334", "bhasin0000335", "bhasin0000336", "bhasin0000337", "bhasin0000338"],
      notes_referenced: ["notes.xhtml#bhasin0001302", "notes.xhtml#bhasin0001310"],
      archival_citations: ["Hunter Committee Evidence, Vols. III & IV (Lahore)", "Punjab Martial Law Commission Proceedings"]
    },
    genre_specific_payload: {
      setting: "Lahore, Kasur, and Gujranwala districts under military occupation.",
      documented_actions: [
        "Issuance of Colonel Johnson's notorious martial law notices ordering collective punishments.",
        "Royal Air Force bombing and strafing of villages near Gujranwala.",
        "Forced saluting and crawling orders imposed on Indian civilians."
      ],
      outcomes: [
        "Permanent alienation of the Punjabi populace from British imperial rule."
      ],
      historical_significance: "Shattered the moral illusion of British justice in Punjab, leaving an indelible trauma on twelve-year-old Bhagat Singh."
    }
  },
  {
    unit_id: "KU-BS-CH14-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter014.xhtml",
      chapter_number: 14,
      chapter_title: "14. 1919, Rowlatt Act",
      element_ids: ["bhasin0000339", "bhasin0000340", "bhasin0000341", "bhasin0000342", "bhasin0000343", "bhasin0000344", "bhasin0000345", "bhasin0000346", "bhasin0000347", "bhasin0000348"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "14. 1919, Rowlatt Act"
    },
    title: "1919, Rowlatt Act and Jallianwala Bagh: The Blood-Soaked Soil of Amritsar",
    summary_statement: "Examines the draconian Anarchical and Revolutionary Crimes Act of 1919 ('Rowlatt Act'), Brigadier-General Reginald Dyer's massacre of unarmed civilians at Jallianwala Bagh on 13 April 1919, and the legendary journey of twelve-year-old Bhagat Singh to Amritsar to collect blood-soaked earth in a glass bottle.",
    materiality: "critical",
    materiality_reason: "The foundational psychic and political watershed event of modern Indian revolutionary nationalism.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "13 April 1919 / mid-April 1919",
      date_iso_estimated: "1919-04-13",
      precision: "exact",
      chronological_sequence_index: 16,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "13 April 1919", context: "Dyer opens fire without warning on Baisakhi crowd; Bhagat Singh visits Amritsar shortly after." },
      record_revelation_time: { date_raw: "1919", context: "Hunter Committee investigations and national mourning." },
      source_time: { publication_year: 2022, author_analysis: "Juss confirms the reality of the Amritsar visit while grounding it in historical evidence." }
    },
    context: {
      micro_context: "Enclosed compound of Jallianwala Bagh with narrow entrance; heaps of corpses around the well.",
      meso_context: "Rowlatt Act's suspension of habeas corpus and trial by jury across British India.",
      macro_context: "Post-WWI imperial crisis and the transition of the nationalist movement to mass resistance."
    },
    entities: [
      { entity_id: "ENT-DYER", name: "Brigadier-General Reginald Dyer", role: "Perpetrator of massacre", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Schoolboy visitor to the massacre site", type: "person" },
      { entity_id: "ENT-KITCHLEW", name: "Dr. Saifuddin Kitchlew", role: "Amritsar nationalist leader", type: "person" },
      { entity_id: "ENT-SATYAPAL", name: "Dr. Satyapal", role: "Amritsar nationalist leader", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH16-01", relationship_type: "continues", nature: "Propels the launch of the Non-Cooperation Movement." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH16-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Jallianwala Bagh directly caused Mahatma Gandhi to transform from a loyalist into an uncompromising non-cooperator.",
        provenance: "chapter014.xhtml / notes.xhtml (Ch. 14 Notes 1-5)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_inquiry_and_eyewitness_testimony",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Hunter Report and Indian National Congress Punjab Inquiry Report 1920 verify casualty numbers and timeline."
      }
    ],
    source_evidence: [
      "The Rowlatt Act was dubbed the 'Black Act'—no dalil, no vakil, no appeal (no argument, no lawyer, no appeal).",
      "Twelve-year-old Bhagat Singh skipped school, took the train to Amritsar, and stood in the blood-soaked enclosure of Jallianwala Bagh, bringing back a bottle filled with its crimson earth."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "historical_event", description: "Massacre and visit fully authenticated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000339", "bhasin0000340", "bhasin0000341", "bhasin0000342", "bhasin0000343", "bhasin0000344", "bhasin0000345", "bhasin0000346", "bhasin0000347", "bhasin0000348"],
      notes_referenced: ["notes.xhtml#bhasin0001311", "notes.xhtml#bhasin0001315"],
      archival_citations: ["Disorders Inquiry Committee Report (1920)", "Congress Report on the Punjab Disorders (1920)"]
    },
    genre_specific_payload: {
      setting: "Jallianwala Bagh, Amritsar, Punjab.",
      documented_actions: [
        "Arrest of Dr. Satyapal and Dr. Saifuddin Kitchlew under the Defence of India Act.",
        "General Dyer marches troops into the Bagh and orders 1,650 rounds fired into the trapped assembly.",
        "Bhagat Singh places flowers on the sanctified earth in his home."
      ],
      outcomes: [
        "Complete delegitimization of the British Raj across all classes of Indian society."
      ],
      historical_significance: "Transformed Bhagat Singh's developing political awareness into an irrevocable commitment to revolutionary liberation."
    }
  },
  {
    unit_id: "KU-BS-CH15-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter015.xhtml",
      chapter_number: 15,
      chapter_title: "15. Colonialism’s Civilising Mission",
      element_ids: ["bhasin0000349", "bhasin0000350", "bhasin0000351", "bhasin0000352", "bhasin0000353", "bhasin0000354"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "15. Colonialism’s Civilising Mission"
    },
    title: "Colonialism’s Civilising Mission: Ideological Hypocrisy and Judicial Inequity",
    summary_statement: "Critiques the ideological apparatus of the colonial 'civilising mission', contrasting liberal utilitarian claims of introducing the rule of law with the empirical reality of structural racism, economic drain, and extraordinary emergency criminal legislation.",
    materiality: "important",
    materiality_reason: "Provides the ideological and jurisprudence critique that Bhagat Singh subsequently articulated in court.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "19th–20th Century",
      date_iso_estimated: "1920-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 17,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "19th–20th Century", context: "Evolution of British colonial legal philosophy in India." },
      record_revelation_time: { date_raw: "1920s", context: "Nationalist critiques by Dadabhai Naoroji, R.C. Dutt, and Bhagat Singh." },
      source_time: { publication_year: 2022, author_analysis: "Juss dissects Macaulay, Fitzjames Stephen, and the colonial doctrine of 'efficient despotism'." }
    },
    context: {
      micro_context: "Colonial secretariats and courts operating under British executive supremacy.",
      meso_context: "Codification of Indian Penal Code (1860) and Criminal Procedure Code preserving European racial privileges.",
      macro_context: "Imperial rationalization of subjugation under the guise of benevolence and modernization."
    },
    entities: [
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Legal scholar and analyst", type: "person" },
      { entity_id: "ENT-MACAULAY", name: "Thomas Babington Macaulay", role: "Architect of colonial penal code and education", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH28-01", relationship_type: "explains", nature: "Provides theoretical context for Bhagat Singh's Assembly speech attacking colonial law." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "legal_treatises_and_historical_analysis",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Scholarly jurisprudential analysis grounded in imperial statutes and case law."
      }
    ],
    source_evidence: [
      "The 'rule of law' in British India was never a neutral system of justice; it was an instrument of imperial control designed to preserve the dominance of the colonial state.",
      "James Fitzjames Stephen openly admitted that the British government in India was founded not on consent, but on conquest and superior force."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "jurisprudential", description: "Colonial legal philosophy well documented in imperial records." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000349", "bhasin0000350", "bhasin0000351", "bhasin0000352", "bhasin0000353", "bhasin0000354"],
      notes_referenced: ["notes.xhtml#bhasin0001316", "notes.xhtml#bhasin0001320"],
      archival_citations: ["James Fitzjames Stephen, Liberty, Equality, Fraternity (1873)", "IPC Legislative Records"]
    },
    genre_specific_payload: {
      setting: "Imperial ideological apparatus of British India.",
      documented_actions: [
        "Codification of legal codes balancing facade of justice with absolute executive discretion.",
        "Subordination of indigenous jurisprudence to colonial statutory instruments.",
        "Systematic exclusion of Indians from higher judicial appointments and trial juries."
      ],
      outcomes: [
        "Creation of an authoritarian legal structure that could be pivoted instantaneously into emergency despotism."
      ],
      historical_significance: "Supplies the intellectual baseline for understanding why Bhagat Singh chose to treat the Special Tribunal not as a legitimate court, but as an imperial star chamber."
    }
  },
  {
    unit_id: "KU-BS-CH16-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter016.xhtml",
      chapter_number: 16,
      chapter_title: "16. 1920, ‘Lal Bal Pal’",
      element_ids: ["bhasin0000355", "bhasin0000356", "bhasin0000357", "bhasin0000358", "bhasin0000359", "bhasin0000360", "bhasin0000361", "bhasin0000362", "bhasin0000363"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "16. 1920, ‘Lal Bal Pal’"
    },
    title: "1920, ‘Lal Bal Pal’: The Radical Nationalist Triumvirate and the Non-Cooperation Surge",
    summary_statement: "Examines the radical nationalist leadership of 'Lal-Bal-Pal' (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal), the special Calcutta Congress of September 1920, and the launch of Mahatma Gandhi's mass Non-Cooperation Movement, in which thirteen-year-old Bhagat Singh actively participated.",
    materiality: "important",
    materiality_reason: "Documents Bhagat Singh's initial participation in Gandhi's non-violent mass movement and his devotion to Lala Lajpat Rai.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "September–December 1920",
      date_iso_estimated: "1920-09-01",
      precision: "approximate_month",
      chronological_sequence_index: 18,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "Autumn 1920", context: "Calcutta and Nagpur Congress sessions approving Non-Cooperation." },
      record_revelation_time: { date_raw: "1920", context: "Indian National Congress resolutions and press reports." },
      source_time: { publication_year: 2022, author_analysis: "Juss contrasts the fiery militancy of Tilak and Lajpat Rai with Gandhi's absolute pacifism." }
    },
    context: {
      micro_context: "Bonfires of foreign cloth in Lahore streets; students boycotting government schools.",
      meso_context: "Establishment of national educational institutions like National College Lahore by Lala Lajpat Rai.",
      macro_context: "Khilafat movement merging with Non-Cooperation to create unprecedented mass anti-colonial unity."
    },
    entities: [
      { entity_id: "ENT-LAJPAT", name: "Lala Lajpat Rai", role: "Punjab leader and Congress president", type: "person" },
      { entity_id: "ENT-TILAK", name: "Bal Gangadhar Tilak", role: "Militant nationalist leader (died 1 Aug 1920)", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Leader of Non-Cooperation Movement", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Student boycotter", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH17-01", relationship_type: "continues", nature: "Leads to the fateful suspension following Chauri Chaura." },
      { target_unit_id: "KU-BS-CH19-01", relationship_type: "anticipates", nature: "Leads to Bhagat Singh entering National College Lahore." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH19-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh left his school in response to Gandhi's boycott call and enrolled in Lajpat Rai's newly founded National College Lahore.",
        provenance: "chapter016.xhtml / notes.xhtml (Ch. 16 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "congress_session_resolutions_and_memoirs",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Congress proceedings and Lahore student registers confirm Bhagat Singh's boycott."
      }
    ],
    source_evidence: [
      "The trio of Lal-Bal-Pal had transformed the Congress from a genteel debating society into an assertive nationalist force.",
      "When Gandhi promised 'Swaraj in one year', millions of students, including the young Bhagat Singh, walked out of government-funded colleges."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "nationalist_history", description: "Movement records fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000355", "bhasin0000356", "bhasin0000357", "bhasin0000358", "bhasin0000359", "bhasin0000360", "bhasin0000361", "bhasin0000362", "bhasin0000363"],
      notes_referenced: ["notes.xhtml#bhasin0001321", "notes.xhtml#bhasin0001328"],
      archival_citations: ["Report of the 35th Indian National Congress (Nagpur, 1920)", "National College Lahore Register 1921"]
    },
    genre_specific_payload: {
      setting: "Lahore, Nagpur, and Calcutta.",
      documented_actions: [
        "Gandhi secures passage of Non-Cooperation resolution with Khilafat backing.",
        "Lajpat Rai establishes the Servants of the People Society and National College.",
        "Bhagat Singh discards British textiles and dons khadi."
      ],
      outcomes: [
        "Mobilization of youth cadres into institutionalized national education and political activism."
      ],
      historical_significance: "Integrated Bhagat Singh into organized nationalist politics while exposing him to the limitations of elite Congress leadership."
    }
  },
  {
    unit_id: "KU-BS-CH17-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter017.xhtml",
      chapter_number: 17,
      chapter_title: "17. 1922, Chauri Chaura",
      element_ids: ["bhasin0000364", "bhasin0000365", "bhasin0000366", "bhasin0000367", "bhasin0000368", "bhasin0000369", "bhasin0000370", "bhasin0000371", "bhasin0000372", "bhasin0000373"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "17. 1922, Chauri Chaura"
    },
    title: "1922, Chauri Chaura: The Bardoli Retreat and the Great Disillusionment",
    summary_statement: "Chronicles the clash at Chauri Chaura on 4 February 1922 where 22 policemen were killed by enraged peasants, Mahatma Gandhi's unilateral decision at Bardoli to abruptly suspend the nationwide Non-Cooperation Movement, and the bitter disillusionment among young militants like Bhagat Singh, Chandrashekhar Azad, and Sukhdev, who concluded that non-violent moralism would never unseat imperial rule.",
    materiality: "critical",
    materiality_reason: "The decisive turning point causing India's radical youth to abandon Gandhian satyagraha in favor of armed socialist revolution.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "4–12 February 1922",
      date_iso_estimated: "1922-02-12",
      precision: "exact",
      chronological_sequence_index: 19,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "February 1922", context: "Chauri Chaura police station burning followed by Congress Working Committee Bardoli resolution on 12 Feb 1922." },
      record_revelation_time: { date_raw: "February 1922", context: "Gandhi's article 'The Crime of Chauri Chaura' in Young India." },
      source_time: { publication_year: 2022, author_analysis: "Juss details how the Bardoli retreat created the ideological space for the founding of the HRA." }
    },
    context: {
      micro_context: "Police thāna in Chauri Chaura, Gorakhpur; Congress meeting in Bardoli, Gujarat.",
      meso_context: "Gandhi declaring that the masses were not spiritually prepared for non-violence.",
      macro_context: "Collapse of the mass movement leading to widespread demoralization and communal friction."
    },
    entities: [
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Congress leader imposing retreat", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Disillusioned youth volunteer", type: "person" },
      { entity_id: "ENT-NEHRU-MOTILAL", name: "Motilal Nehru", role: "Congress leader protesting withdrawal", type: "person" },
      { entity_id: "ENT-BOSE-SUBHAS", name: "Subhas Chandra Bose", role: "Nationalist protesting withdrawal", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH18-01", relationship_type: "continues", nature: "Directly causes the founding of the Hindustan Republican Association in 1924." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH18-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Revolutionary memoirs (Sanyal, Manmath Nath Gupta, Bhagat Singh) unanimously cite the Bardoli withdrawal as the primary reason for reviving armed revolution.",
        provenance: "chapter017.xhtml / notes.xhtml (Ch. 17 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "contemporary_press_and_cwc_resolutions",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Gandhi's Young India writings and letters from prison by senior Congressmen confirm universal shock."
      }
    ],
    source_evidence: [
      "To sound the order of retreat just when public enthusiasm was reaching the boiling point was nothing short of a national calamity.",
      "For Bhagat Singh and his generation, the withdrawal was a betrayal. It proved that non-violence, as preached by Gandhi, placed ethical perfection above national liberation."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "political_watershed", description: "Withdrawal and reactions universally corroborated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000364", "bhasin0000365", "bhasin0000366", "bhasin0000367", "bhasin0000368", "bhasin0000369", "bhasin0000370", "bhasin0000371", "bhasin0000372", "bhasin0000373"],
      notes_referenced: ["notes.xhtml#bhasin0001329", "notes.xhtml#bhasin0001336"],
      archival_citations: ["CWC Bardoli Resolution, 12 February 1922", "Young India, 16 February 1922"]
    },
    genre_specific_payload: {
      setting: "Chauri Chaura (United Provinces) and Bardoli (Gujarat).",
      documented_actions: [
        "Police firing on peasant procession at Chauri Chaura sparks retaliatory burning of police outpost.",
        "Gandhi imposes unilateral suspension of all civil disobedience across British India.",
        "Youth across India abandon spinning wheels and seek underground militant contacts."
      ],
      outcomes: [
        "Decisive ideological fracture between Gandhian satyagrahis and revolutionary socialists."
      ],
      historical_significance: "The structural catalyst that birthed the Hindustan Republican Association (HRA) and defined Bhagat Singh's revolutionary trajectory."
    }
  },
  {
    unit_id: "KU-BS-CH18-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter018.xhtml",
      chapter_number: 18,
      chapter_title: "18. 1924, ‘Sarfaroshi Ki Tamanna’",
      element_ids: ["bhasin0000374", "bhasin0000375", "bhasin0000376", "bhasin0000377", "bhasin0000378", "bhasin0000379", "bhasin0000380", "bhasin0000381", "bhasin0000382", "bhasin0000383", "bhasin0000384", "bhasin0000385", "bhasin0000386", "bhasin0000387", "bhasin0000388", "bhasin0000389", "bhasin0000390", "bhasin0000391", "bhasin0000392", "bhasin0000393", "bhasin0000394"]
    },
    structural_position: {
      part: "PART 3: A LIFE IN REVOLUTION",
      chapter: "18. 1924, ‘Sarfaroshi Ki Tamanna’"
    },
    title: "1924, ‘Sarfaroshi Ki Tamanna’: The Founding of the HRA and the Kakori Conspiracy",
    summary_statement: "Documents the October 1924 founding conference of the Hindustan Republican Association (HRA) in Kanpur by Ram Prasad Bismil, Sachindra Nath Sanyal, and Jogesh Chandra Chatterjee, its revolutionary manifesto 'The Revolutionary' distributed on 1 January 1925, the Kakori train dacoity of 9 August 1925, and the subsequent execution of Bismil, Ashfaqullah Khan, Roshan Singh, and Rajendra Lahiri in December 1927.",
    materiality: "critical",
    materiality_reason: "Forms the operational and ideological parent organization of the HSRA and leaves Bhagat Singh and Chandrashekhar Azad to reconstruct the battered party.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "October 1924 – December 1927",
      date_iso_estimated: "1924-10-01",
      precision: "exact",
      chronological_sequence_index: 20,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1924–1927", context: "Kanpur conference, Kakori hold-up on 9 Aug 1925, trial and hangings in Dec 1927." },
      record_revelation_time: { date_raw: "1927", context: "Judgments in Kakori Conspiracy Case, Chief Court of Oudh, Lucknow." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights the multi-faith brotherhood between Bismil and Ashfaqullah Khan." }
    },
    context: {
      micro_context: "Kakori railway section near Lucknow; condemned cells of Gorakhpur, Faizabad, Naini, and Gonda jails.",
      meso_context: "Colonial state using massive CID dragnet to crush the HRA leadership in United Provinces.",
      macro_context: "First major armed operational challenge to the Raj after the World War I Ghadar trials."
    },
    entities: [
      { entity_id: "ENT-BISMIL", name: "Ram Prasad Bismil", role: "HRA operational leader and poet", type: "person" },
      { entity_id: "ENT-ASHFAQ", name: "Ashfaqullah Khan", role: "HRA leader and martyr", type: "person" },
      { entity_id: "ENT-AZAD", name: "Chandrashekhar Azad", role: "HRA military commander (escaped arrest)", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "HRA organizer in Punjab", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH19-01", relationship_type: "continues", nature: "Directly leads to the reorganization of the HRA into the HSRA." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH24-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The execution of Bismil and Ashfaqullah in December 1927 forced Azad and Bhagat Singh to convene the Ferozeshah Kotla meeting to reconstitute the organization.",
        provenance: "chapter018.xhtml / notes.xhtml (Ch. 18 Notes 1-24)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_court_judgments_and_manifesto",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Chief Court of Oudh Kakori judgment and copies of 'The Revolutionary' manifesto in National Archives."
      }
    ],
    source_evidence: [
      "Sarfaroshi ki tamanna ab hamare dil mein hai / Dekhna hai zor kitna baazu-e-qaatil mein hai (The desire for martyrdom is now in our hearts / Let us see how much strength remains in the arm of the executioner).",
      "The HRA constitution declared its objective to establish a 'Federal Republic of the United States of India' by organized and armed revolution, abolishing all systems that made exploitation of man by man possible."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "conspiracy_trial", description: "Trial proceedings fully documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000374", "bhasin0000375", "bhasin0000376", "bhasin0000377", "bhasin0000378", "bhasin0000379", "bhasin0000380", "bhasin0000381", "bhasin0000382", "bhasin0000383", "bhasin0000384", "bhasin0000385", "bhasin0000386", "bhasin0000387", "bhasin0000388", "bhasin0000389", "bhasin0000390", "bhasin0000391", "bhasin0000392", "bhasin0000393", "bhasin0000394"],
      notes_referenced: ["notes.xhtml#bhasin0001337", "notes.xhtml#bhasin0001360"],
      archival_citations: ["The Revolutionary (HRA Manifesto, 1 Jan 1925)", "Kakori Conspiracy Case Judgment (Chief Court of Oudh, 1927)"]
    },
    genre_specific_payload: {
      setting: "Kanpur, Lucknow, Kakori, and colonial prison gallows in UP.",
      documented_actions: [
        "Drafting of the HRA constitution declaring the goal of an egalitarian federal republic.",
        "Halting and looting of No. 8 Down train at Kakori on 9 August 1925 to secure funds.",
        "Hanging of Ram Prasad Bismil, Ashfaqullah Khan, Roshan Singh, and Rajendra Lahiri on 17-19 December 1927."
      ],
      outcomes: [
        "Destruction of the first-tier HRA leadership, leaving Azad underground and Bhagat Singh to forge a new socialist doctrine."
      ],
      historical_significance: "Established the ideological foundation of socialist republicanism and immortalized the sacrificial ethos of the revolutionary movement."
    }
  }
];
