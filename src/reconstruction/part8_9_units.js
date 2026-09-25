/**
 * BKRS Milestone 3 - Part 8 & Part 9 Units
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 * Incorporates Qualified Constraints: VAL-HIST-D6-43, VAL-HIST-D6-44, VAL-HIST-D6-45
 */

module.exports = [
  // --- PART 8: ‘DELUDED PATRIOTS’ ---
  {
    unit_id: "KU-BS-CH37-01",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "chapter037.xhtml",
      chapter_number: 37,
      chapter_title: "37. 1931, I Was Never a Terrorist",
      element_ids: ["bhasin0000623", "bhasin0000624", "bhasin0000625", "bhasin0000626", "bhasin0000627", "bhasin0000628", "bhasin0000629", "bhasin0000630", "bhasin0000631", "bhasin0000632", "bhasin0000633", "bhasin0000634", "bhasin0000635", "bhasin0000636", "bhasin0000637"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "37. 1931, I Was Never a Terrorist"
    },
    title: "1931, ‘I Was Never a Terrorist’: The Final Political Testament to Young Political Workers",
    summary_statement: "Documents Bhagat Singh's 2 February 1931 manifesto addressed to young political workers, explicitly renouncing terrorism and individual assassination as outgrown initial tactics, asserting that true revolution can only be achieved through the organized political awakening and mass mobilization of peasants, workers, and youth.",
    materiality: "critical",
    materiality_reason: "Bhagat Singh's definitive ideological self-definition rejecting individual terror in favor of mass Leninist class struggle.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "2 February 1931",
      date_iso_estimated: "1931-02-02",
      precision: "exact",
      chronological_sequence_index: 39,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "2 February 1931", context: "Written in condemned cell No. 14, Lahore Central Jail." },
      record_revelation_time: { date_raw: "February 1931", context: "Smuggled out and circulated to revolutionary cadres." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights this tract as proving Bhagat Singh's transition from armed militant to socialist strategist." }
    },
    context: {
      micro_context: "Condemned cell, Lahore Central Jail; Privy Council appeal already dismissed.",
      meso_context: "Young radicals across Northern India debating whether to continue assassination campaigns.",
      macro_context: "Congress negotiating Delhi Pact with Viceroy; revolutionaries defining their independent socialist platform."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Author and socialist theorist", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH41-01", relationship_type: "continues", nature: "Central text in the historiographical debate on scientific socialism." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH41-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh's explicit renunciation of terrorism is the cornerstone document cited by Bipan Chandra and modern historians.",
        provenance: "chapter037.xhtml / notes.xhtml (Ch. 37 Notes 1-15)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "primary_political_manifesto",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Manuscript preserved and verified across multiple contemporary underground editions."
      }
    ],
    source_evidence: [
      "Let me announce with all the strength at my command that I am not a terrorist and I never was, except perhaps in the beginning of my revolutionary career.",
      "Terrorism is not a complete revolution and the revolution is not complete without terrorism. It is an initial phase... We have outgrown it."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "ideological_testament", description: "Text authenticated in historical archives." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000623", "bhasin0000624", "bhasin0000625", "bhasin0000626", "bhasin0000627", "bhasin0000628", "bhasin0000629", "bhasin0000630", "bhasin0000631", "bhasin0000632", "bhasin0000633", "bhasin0000634", "bhasin0000635", "bhasin0000636", "bhasin0000637"],
      notes_referenced: ["notes.xhtml#bhasin0001586", "notes.xhtml#bhasin0001600"],
      archival_citations: ["Bhagat Singh, 'To Young Political Workers', 2 February 1931"]
    },
    genre_specific_payload: {
      document_title: "Letter to Young Political Workers",
      author_or_origin: "Bhagat Singh",
      document_date: "2 February 1931",
      medium_format: "Smuggled prison essay",
      legal_or_ideological_significance: "Formal transition of the HSRA from armed clandestine action to Marxist-Leninist mass party building.",
      key_verbatim_excerpts: [
        "The real revolutionary armies are in the villages and in the factories, the peasantry and the laborers.",
        "Compromise is an indispensable factor in any political struggle... but compromise must be entered into to push the movement forward, not to retreat."
      ],
      author_vs_editor_vs_biographer_framing: "Juss uses this document to shatter once and for all the imperial classification of Bhagat Singh as an anarchic assassin."
    }
  },
  {
    unit_id: "KU-BS-CH38-01",
    unit_type: "LIFE_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter038.xhtml",
      chapter_number: 38,
      chapter_title: "38. 1929, Jail Readings",
      element_ids: ["bhasin0000638", "bhasin0000639", "bhasin0000640", "bhasin0000641", "bhasin0000642", "bhasin0000643", "bhasin0000644", "bhasin0000645", "bhasin0000646", "bhasin0000647", "bhasin0000648"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "38. 1929, Jail Readings"
    },
    title: "1929, Jail Readings: The Intellectual Laboratory of Lahore Central Jail",
    summary_statement: "Documents Bhagat Singh's intellectual life in prison, his voracious reading of over 300 volumes procured through the Dwarka Das Library and friends (including Marx, Engels, Lenin, Bukharin, Thomas Paine, Upton Sinclair, Kropotkin, and Bertrand Russell), and his compilation of the 404-page Jail Notebook.",
    materiality: "critical",
    materiality_reason: "Provides direct empirical evidence of Bhagat Singh's intellectual depth, theoretical versatility, and philosophical rigor.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "June 1929 – March 1931",
      date_iso_estimated: "1930-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 40,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1929–1931", context: "Reading and note-taking in Lahore Central Jail cells." },
      record_revelation_time: { date_raw: "1931", context: "Jail Notebook preserved by Kumari Lajjawati; library loan registers preserved." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the reading list table (Chapter 41) as proof of an encyclopedic mind." }
    },
    context: {
      micro_context: "Dimly lit prison cell stacked with books; writing on an official government notebook.",
      meso_context: "Concession won through hunger strike allowing books and writing materials inside jail.",
      macro_context: "A revolutionary facing inevitable capital execution choosing to spend his final months in intense philosophical study."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Prisoner-scholar", type: "person" },
      { entity_id: "ENT-LAJJAWATI", name: "Kumari Lajjawati", role: "Courier and custodian of manuscripts", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH41-01", relationship_type: "continues", nature: "Leads directly to Chapter 41 on the Jail Notebook." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH46-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Readings of Western materialist philosophers directly enabled Bhagat Singh to author 'Why I Am an Atheist'.",
        provenance: "chapter038.xhtml / notes.xhtml (Ch. 38 Notes 1-11)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "library_registers_and_prison_manuscript",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Dwarka Das Library loan ledgers and the original 404-page Jail Notebook in National Archives of India."
      }
    ],
    source_evidence: [
      "Bhagat Singh was a reader who wrote, and a writer who read. He converted his prison cell into an advanced research institute.",
      "He copied extracts on economics, sociology, political science, capital punishment, the condition of women, and religion from hundreds of European and American thinkers."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "archival_inventory", description: "Jail reading records fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000638", "bhasin0000639", "bhasin0000640", "bhasin0000641", "bhasin0000642", "bhasin0000643", "bhasin0000644", "bhasin0000645", "bhasin0000646", "bhasin0000647", "bhasin0000648"],
      notes_referenced: ["notes.xhtml#bhasin0001601", "notes.xhtml#bhasin0001611"],
      archival_citations: ["Dwarka Das Library Loan Registers, Lahore", "Bhagat Singh's Jail Notebook (NAI)"]
    },
    genre_specific_payload: {
      subject: "Bhagat Singh",
      lived_experience: "Fierce intellectual labor under impending sentence of death.",
      dilemma: "Facing physical extermination while seeking to equip the future revolutionary movement with theoretical weapons.",
      decision: "Systematic synthesis of socialist, economic, and philosophical theory.",
      consequence: "Production of the Jail Notebook and essays that outlived colonial rule.",
      worldview_shift: "Consolidation of an uncompromising Marxist-materialist historical consciousness."
    }
  },
  {
    unit_id: "KU-BS-CH39-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter039.xhtml",
      chapter_number: 39,
      chapter_title: "39. 1928, The Awakening",
      element_ids: ["bhasin0000649", "bhasin0000650", "bhasin0000651", "bhasin0000652", "bhasin0000653", "bhasin0000654", "bhasin0000655", "bhasin0000656", "bhasin0000657", "bhasin0000658", "bhasin0000659", "bhasin0000660", "bhasin0000661", "bhasin0000662", "bhasin0000663", "bhasin0000664", "bhasin0000665"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "39. 1928, The Awakening"
    },
    title: "1928, The Awakening: Naujawan Bharat Sabha, Tracts, and the Boycott of the Tribunal",
    summary_statement: "Examines the mass mobilization orchestrated by the Naujawan Bharat Sabha in Punjab in 1928-1930, publishing radical Punjabi and Urdu tracts, organizing workers' conferences, and supporting the absolute boycott of the Special Tribunal proceedings following the 12 May police beatings.",
    materiality: "important",
    materiality_reason: "Demonstrates that the revolutionary movement maintained a powerful open mass front alongside its clandestine armed wing.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1928–1930",
      date_iso_estimated: "1928-11-01",
      precision: "approximate_year",
      chronological_sequence_index: 41,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1928–1930", context: "NBS mass meetings in Amritsar, Lahore, and Ludhiana." },
      record_revelation_time: { date_raw: "1929–1930", context: "CID weekly intelligence abstracts." },
      source_time: { publication_year: 2022, author_analysis: "Juss shows how the NBS bridged student radicalism and rural peasant politics." }
    },
    context: {
      micro_context: "Bradlaugh Hall packed with thousands of turbaned youth; red flags hoisted.",
      meso_context: "Government banning NBS under the Criminal Law Amendment Act in 1930.",
      macro_context: "Emergence of organized Left politics in Punjab challenging Congress dominance."
    },
    entities: [
      { entity_id: "ENT-NBS", name: "Naujawan Bharat Sabha", role: "Mass youth organization", type: "organization" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Founding general secretary", type: "person" },
      { entity_id: "ENT-SOHAN-JOSH", name: "Sohan Singh Josh", role: "President of NBS Amritsar conference", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH24-01", relationship_type: "continues", nature: "Mass open manifestation of the HSRA's socialist ideology." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "proscribed_tracts_and_intelligence_abstracts",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "National Archives Home Political files containing seized NBS manifestos and tracts."
      }
    ],
    source_evidence: [
      "The Naujawan Bharat Sabha was not a secret society. It was an open, mass organization of students, peasants, and workers designed to awaken revolutionary consciousness.",
      "The NBS manifesto demanded total independence, secular brotherhood, and the overthrow of capitalism and landlordism."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "mass_movement", description: "NBS rallies and membership records fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000649", "bhasin0000650", "bhasin0000651", "bhasin0000652", "bhasin0000655", "bhasin0000660"],
      notes_referenced: ["notes.xhtml#bhasin0001612", "notes.xhtml#bhasin0001628"],
      archival_citations: ["NAI Home Political (1928), F. 130/28, Report on Naujawan Bharat Sabha"]
    },
    genre_specific_payload: {
      setting: "Lahore, Amritsar, and Jalandhar public halls.",
      documented_actions: [
        "Adoption of red flag and emblem of an eagle clutching lightning bolts.",
        "Mandatory inter-religious dining where Hindu, Muslim, and Sikh members ate from common vessels.",
        "Boycott and protest picketing against the Special Tribunal."
      ],
      outcomes: [
        "Unprecedented secular radicalization of Punjab's urban youth and student population."
      ],
      historical_significance: "Proved that Bhagat Singh was a master mass political mobilizer, not an isolated conspiratorial plotter."
    }
  },
  {
    unit_id: "KU-BS-CH40-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter040.xhtml",
      chapter_number: 40,
      chapter_title: "40. The Reconstitution of the Tribunal",
      element_ids: ["bhasin0000666", "bhasin0000667", "bhasin0000668", "bhasin0000669", "bhasin0000670", "bhasin0000671", "bhasin0000672", "bhasin0000673"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "40. The Reconstitution of the Tribunal"
    },
    title: "The Reconstitution of the Tribunal: Purging the Bench and Stacking Compliant Judges",
    summary_statement: "Documents the extraordinary executive reconstitution of the Special Tribunal on 21 June 1930 following the 12 May police violence: the Governor-General removed both President Coldstream and the courageous dissenter Justice Syed Agha Haidar, elevating Justice G.C. Hilton to President, and appointing compliant judges Justice J.K. Tapp and Justice Sir Abdul Qadir to proceed ex parte in the absence of the accused.",
    materiality: "critical",
    materiality_reason: "Exposes the naked administrative manipulation of judicial personnel to guarantee a capital verdict before Ordinance III expired.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "21 June 1930",
      date_iso_estimated: "1930-06-21",
      precision: "exact",
      chronological_sequence_index: 42,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "21 June 1930", context: "Notification issued in Gazette of India removing Coldstream and Haidar." },
      record_revelation_time: { date_raw: "June 1930", context: "Reported in legal journals and challenged in High Court." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths British Library files revealing that Haidar was purged because he refused to sign pre-arranged death sentences." }
    },
    context: {
      micro_context: "Chambers of Chief Justice Sir Shadi Lal, Lahore High Court; Simla Governor-General's Secretariat.",
      meso_context: "Ordinance III containing no explicit provision authorizing the Governor-General to reconstitute the Tribunal midway through a capital trial.",
      macro_context: "Colonial state setting aside fundamental principles of judicial independence."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Governor-General issuing removal notification", type: "person" },
      { entity_id: "ENT-AGHA-HAIDAR", name: "Justice Syed Agha Haidar", role: "Purged judge", type: "person" },
      { entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "Removed president", type: "person" },
      { entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Newly elevated president", type: "person" },
      { entity_id: "ENT-TAPP", name: "Justice J.K. Tapp", role: "Newly appointed judge", type: "person" },
      { entity_id: "ENT-QADIR", name: "Justice Sir Abdul Qadir", role: "Newly appointed judge", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH44-01", relationship_type: "continues", nature: "The reconstituted bench delivers the final death judgment." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH44-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The reconstituted bench without Agha Haidar proceeded to complete the trial ex parte and sentence the trio to hang.",
        provenance: "chapter040.xhtml / notes.xhtml (Ch. 40 Notes 1-13)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_gazette_notifications_and_confidential_telegrams",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Gazette of India Notification No. F. 4/4/30-Poll and British Library IOR files confirm removal mechanism."
      }
    ],
    source_evidence: [
      "The removal of Justice Agha Haidar was a scandal of the first magnitude. He was punished because he had demonstrated judicial independence and refused to condone police brutality.",
      "The newly constituted bench under Justice Hilton resumed the trial on 23 June 1930, conducting hearings without the presence of the accused, without defense counsel, and without cross-examination."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "executive_notification", description: "Bench reconstitution documented in official gazettes." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000666", "bhasin0000667", "bhasin0000668", "bhasin0000669", "bhasin0000670", "bhasin0000671", "bhasin0000672", "bhasin0000673"],
      notes_referenced: ["notes.xhtml#bhasin0001629", "notes.xhtml#bhasin0001639"],
      archival_citations: ["IOR L/PJ/6/2004, File on Reconstitution of Special Tribunal, June 1930", "Gazette of India, 21 June 1930"]
    },
    genre_specific_payload: {
      setting: "Lahore and Simla executive offices.",
      documented_actions: [
        "Viceroy Irwin issues notification terminating appointments of Coldstream and Haidar.",
        "Justice Hilton appointed President; Tapp and Qadir sworn in.",
        "Tribunal immediately invokes emergency procedural rules to conduct ex parte hearings."
      ],
      outcomes: [
        "Total subversion of judicial neutrality; creation of a compliant judicial tribunal engineered to deliver death sentences."
      ],
      historical_significance: "Conclusively demonstrates that the trial of Bhagat Singh was an executive proceeding masked behind a judicial tribunal."
    }
  },
  {
    unit_id: "KU-BS-CH41-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter041.xhtml",
      chapter_number: 41,
      chapter_title: "41. Interpreting Bhagat Singh",
      element_ids: ["bhasin0000674", "bhasin0000675", "bhasin0000676", "bhasin0000677", "bhasin0000678", "bhasin0000679", "bhasin0000680", "bhasin0000681", "bhasin0000682", "bhasin0000683", "bhasin0000684", "bhasin0000685", "bhasin0000686"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "41. Interpreting Bhagat Singh"
    },
    title: "Interpreting Bhagat Singh: Historiographical Debates on Socialism vs Romanticism and the Jail Notebook Custody",
    summary_statement: "Examines the central historiographical debate between scholars (Bipan Chandra asserting Bhagat Singh achieved full scientific Marxist-Leninist socialism vs Kama Maclean and Chris Moffat arguing he maintained an enduring commitment to revolutionary romanticism, heroic sacrificial aesthetics, and performative martyrdom); and documents the custody, transmission, and persistent controversies surrounding the authenticity and missing pages of the Jail Notebook, handed to Kumari Lajjawati on 22 March 1931.",
    materiality: "critical",
    materiality_reason: "Governed by mandatory qualifications VAL-HIST-D6-44 (Socialism vs Romanticism) and VAL-HIST-D6-45 (Jail Notebook custody and missing pages).",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1930–1931 / Modern Historiography",
      date_iso_estimated: "1931-03-22",
      precision: "exact",
      chronological_sequence_index: 43,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "22 March 1931", context: "Bhagat Singh entrusts his handwritten Jail Notebook to Kumari Lajjawati." },
      record_revelation_time: { date_raw: "1977–1981", context: "Notebook released to National Archives of India and published in facsimile." },
      source_time: { publication_year: 2022, author_analysis: "Juss surveys Chandra, Maclean, and Moffat while providing a complete transcript of the prison reading list." }
    },
    context: {
      micro_context: "Condemned cell, Lahore Central Jail; transfer of manuscripts on the eve of execution.",
      meso_context: "Post-independence ideological disputes over whether Bhagat Singh was a Communist, Anarchist, or Nationalist martyr.",
      macro_context: "Subaltern and post-colonial historiography reconstructing the agency and theoretical depth of anti-colonial revolutionaries."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Subject and theorist", type: "person" },
      { entity_id: "ENT-CHANDRA-BIPAN", name: "Bipan Chandra", role: "Marxist historian", type: "person" },
      { entity_id: "ENT-MACLEAN-KAMA", name: "Kama Maclean", role: "Historian of revolutionary visual culture", type: "person" },
      { entity_id: "ENT-MOFFAT-CHRIS", name: "Chris Moffat", role: "Historian of political commemoration", type: "person" },
      { entity_id: "ENT-LAJJAWATI", name: "Kumari Lajjawati", role: "Congress activist and custodian of notebook", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH38-01", relationship_type: "continues", nature: "Direct theoretical analysis of the jail readings." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "archival_manuscript_and_historiographical_monographs",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Physical inspection of the 404-page Jail Notebook in National Archives and comparison of competing scholarly theses."
      }
    ],
    source_evidence: [
      "[HISTORIOGRAPHICAL_SPLIT] Bipan Chandra argues that Bhagat Singh made a decisive and qualitative transition from revolutionary terrorism to scientific Marxism-Leninism, abandoning individual terror entirely in favor of class struggle.",
      "[HISTORIOGRAPHICAL_SPLIT] Kama Maclean and Chris Moffat demonstrate that Bhagat Singh never fully discarded the romantic, sacrificial, and performative dimensions of martyrdom, showing how sacrificial theater was deliberately integrated into his political strategy.",
      "[DOCUMENTARY_UNCERTAINTY] On 22 March 1931, Bhagat Singh handed his 404-page Jail Notebook to Kumari Lajjawati. While the notebook survived and is preserved in the National Archives, persistent historical controversies remain regarding missing pages and whether separate manuscripts written in prison—such as 'The Science of the State' and 'Autobiography'—were confiscated or destroyed by colonial authorities."
    ],
    competing_accounts: [
      {
        contested_issue: "Whether Bhagat Singh's intellectual evolution represented a complete rupture with revolutionary romanticism in favor of scientific socialism, or a dialectical synthesis of socialist theory and sacrificial martyrdom (VAL-HIST-D6-44).",
        accounts: [
          {
            claim_id: "CLAIM-CHANDRA-MARXISM",
            source_text: "Bipan Chandra, 'The Ideological Development of the Revolutionary Terrorists in Northern India' (1979)",
            assertion: "Bhagat Singh had outgrown all romantic and terrorist illusions, emerging by 1930 as a fully formed Marxist-Leninist theorist who prioritized mass peasant and working-class mobilization over individual heroism.",
            witness_or_document: "Scholarly historical analysis",
            evidence_assessment: {
              temporal_proximity: "retrospective_decades_later",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-MACLEAN-MOFFAT-ROMANTICISM",
            source_text: "Kama Maclean, 'A Revolutionary History of Interwar India' (2015); Chris Moffat, 'India's Revolutionary Inheritance' (2019)",
            assertion: "Revolutionary romanticism, sacrificial aesthetics, and the emotional resonance of the 'martyr' remained integral to Bhagat Singh's strategy; he utilized the theatricality of his own death to galvanize the masses in ways dry economic theory never could.",
            witness_or_document: "Scholarly historiographical analysis",
            evidence_assessment: {
              temporal_proximity: "retrospective_decades_later",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "historiographical_split",
        system_synthesis: "BKRS preserves the tension: Bhagat Singh's explicit political writings demonstrate rigorous Marxist-Leninist analysis, while his tactical actions consciously weaponized romantic sacrificial symbolism for anti-colonial mobilization."
      },
      {
        contested_issue: "Controversies regarding the custody, authenticity, and missing pages of Bhagat Singh's Jail Notebook and lost prison manuscripts (VAL-HIST-D6-45).",
        accounts: [
          {
            claim_id: "CLAIM-LAJJAWATI-CUSTODY",
            source_text: "Kumari Lajjawati's statement and National Archives preservation",
            assertion: "Bhagat Singh handed the Jail Notebook directly to Kumari Lajjawati on 22 March 1931; it was preserved by her for decades before being deposited in the Nehru Memorial / National Archives.",
            witness_or_document: "Custodial provenance records",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-MISSING-MANUSCRIPTS",
            source_text: "Comrade recollections (Shiv Verma, Kultar Singh) and Juss (2022)",
            assertion: "Several critical prison works referenced by comrades—including four complete theoretical books ('The Science of the State', 'Autobiography', 'The Door to Death', and 'Socialism in India')—mysteriously vanished from jail custody or were suppressed by CID authorities.",
            witness_or_document: "Oral history transcripts and family archives",
            evidence_assessment: {
              temporal_proximity: "retrospective_decades_later",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "unresolved_contradiction",
        system_synthesis: "While the authentic 404-page Jail Notebook containing reading notes survives intact, the fate of Bhagat Singh's four independent theoretical manuscripts remains historically unresolved, with high probability of colonial police suppression."
      }
    ],
    uncertainty: { degree: "medium", type: "archival_loss", description: "Existence and whereabouts of the four lost manuscripts cannot be verified due to archival gaps in colonial police secret files." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000674", "bhasin0000675", "bhasin0000676", "bhasin0000677", "bhasin0000678", "bhasin0000679", "bhasin0000680", "bhasin0000681", "bhasin0000682", "bhasin0000683", "bhasin0000684", "bhasin0000685", "bhasin0000686"],
      notes_referenced: ["notes.xhtml#bhasin0001640", "notes.xhtml#bhasin0001654"],
      archival_citations: ["NAI Accession No. 1292 (Jail Notebook)", "Bipan Chandra (1979)", "Kama Maclean (2015)", "Chris Moffat (2019)"]
    },
    genre_specific_payload: {
      setting: "Historiographical seminar rooms and the National Archives of India.",
      documented_actions: [
        "Handover of the Jail Notebook to Kumari Lajjawati on the eve of hanging.",
        "Post-colonial debates reconstructing Bhagat Singh's political philosophy.",
        "Forensic collation of 108 distinct author extracts recorded in the Jail Notebook."
      ],
      outcomes: [
        "Establishment of Bhagat Singh as one of the premier Marxist intellectuals of 20th-century anti-colonialism."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's legacy is defined by a dynamic dialectic between rigorous socialist science and powerful revolutionary symbolism."
    }
  },
  {
    unit_id: "KU-BS-CH42-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter042.xhtml",
      chapter_number: 42,
      chapter_title: "42. 1931, ‘Mahatma Ji Is Great’",
      element_ids: ["bhasin0000687", "bhasin0000688", "bhasin0000689", "bhasin0000690", "bhasin0000691", "bhasin0000692", "bhasin0000693", "bhasin0000694", "bhasin0000695", "bhasin0000696", "bhasin0000697", "bhasin0000698", "bhasin0000699", "bhasin0000700", "bhasin0000701", "bhasin0000702", "bhasin0000703"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "42. 1931, ‘Mahatma Ji Is Great’"
    },
    title: "1931, ‘Mahatma Ji Is Great’: The Critique of Bourgeois Compromise and Gandhian Limits",
    summary_statement: "Analyzes Bhagat Singh's nuanced and sophisticated assessment of Mahatma Gandhi: acknowledging Gandhi's historic achievement in awakening mass anti-colonial consciousness, while offering a devastating critique of his bourgeois class loyalties, his terror of uncontrolled proletarian rebellion, and his tendency to retreat whenever mass struggle threatened capitalist property relations.",
    materiality: "critical",
    materiality_reason: "Provides the mature Marxist-Leninist critique of Gandhian nationalism directly from Bhagat Singh's pen.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "February 1931",
      date_iso_estimated: "1931-02-15",
      precision: "approximate_month",
      chronological_sequence_index: 44,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "February 1931", context: "Written in condemned cell during Gandhi-Irwin negotiations." },
      record_revelation_time: { date_raw: "1931", context: "Published in underground pamphlets during the Karachi Congress." },
      source_time: { publication_year: 2022, author_analysis: "Juss dissects Bhagat Singh's phrase 'Mahatma Ji is great' as respectful yet intellectually lethal." }
    },
    context: {
      micro_context: "Condemned cell No. 14, Lahore Central Jail.",
      meso_context: "Gandhi negotiating the suspension of Civil Disobedience with Viceroy Irwin in Delhi.",
      macro_context: "Class contradiction between the Indian capitalist class (Birla, Bajaj) backing Congress and the radical youth/worker movement."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Marxist critic", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Congress leader and strategist of non-violence", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH50-01", relationship_type: "continues", nature: "Anticipates the capitulation of the Gandhi-Irwin Pact." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "primary_prison_tracts",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Text preserved in Bhagat Singh's letter to Sukhdev and 'To Young Political Workers'."
      }
    ],
    source_evidence: [
      "Mahatma Ji is great. We admire him. A tremendous awakening has been brought about through his efforts. But his policy is one of compromise with imperialism.",
      "The Congress leadership represents the interests of the Indian capitalist class. Whenever the masses rise and threaten to take the struggle into their own hands, Gandhi sounds the retreat."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "theoretical_critique", description: "Analysis explicitly articulated in primary texts." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000687", "bhasin0000688", "bhasin0000689", "bhasin0000690", "bhasin0000695", "bhasin0000700"],
      notes_referenced: ["notes.xhtml#bhasin0001655", "notes.xhtml#bhasin0001676"],
      archival_citations: ["Bhagat Singh, 'To Young Political Workers', Section on Leadership and Class"]
    },
    genre_specific_payload: {
      setting: "Lahore Central Jail condemned ward.",
      documented_actions: [
        "Bhagat Singh analyzes the class character of the Indian National Congress leadership.",
        "Demonstration that Gandhian satyagraha aims at securing concessions for the bourgeoisie rather than socialist emancipation.",
        "Prediction that mere political independence without social revolution would leave Indian workers exploited by brown sahibs."
      ],
      outcomes: [
        "Creation of an enduring Left critique of Gandhian nationalist strategy."
      ],
      historical_significance: "Prophetically anticipated post-colonial inequalities, warning that replacing British rulers with Indian capitalists would solve none of the people's fundamental problems."
    }
  },
  {
    unit_id: "KU-BS-CH43-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter043.xhtml",
      chapter_number: 43,
      chapter_title: "43. 1928, Lala Lajpat Rai",
      element_ids: ["bhasin0000704", "bhasin0000705", "bhasin0000706", "bhasin0000707", "bhasin0000708", "bhasin0000709", "bhasin0000710", "bhasin0000711", "bhasin0000712", "bhasin0000713", "bhasin0000714", "bhasin0000715", "bhasin0000716", "bhasin0000717", "bhasin0000718", "bhasin0000719"]
    },
    structural_position: {
      part: "PART 8: ‘DELUDED PATRIOTS’",
      chapter: "43. 1928, Lala Lajpat Rai"
    },
    title: "1928, Lala Lajpat Rai: The Simon Commission Demonstration, Police Lathis, and the Vow of Vengeance",
    summary_statement: "Chronicles the massive anti-Simon Commission black flag protest at Lahore railway station on 30 October 1928 led by Lala Lajpat Rai; Senior Superintendent of Police J.A. Scott's order to lathi-charge the peaceful crowd; Scott and Saunders physically striking Lajpat Rai across the chest; Lajpat Rai's historic declaration ('Every blow aimed at me is a nail in the coffin of the British Empire'); his death on 17 November 1928; and the HSRA's solemn secret meeting in Lahore taking a blood vow to assassinate Scott.",
    materiality: "critical",
    materiality_reason: "The immediate operational trigger for the Saunders assassination and the ensuing judicial showdown.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "30 October – 17 November 1928",
      date_iso_estimated: "1928-10-30",
      precision: "exact",
      chronological_sequence_index: 45,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "30 October 1928 (lathi charge); 17 November 1928 (death of Lalaji)", context: "Outside Lahore railway station and Lajpat Rai's residence." },
      record_revelation_time: { date_raw: "November 1928", context: "Speeches published in The Tribune; medical bulletins issued." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents how Lalaji's death was felt as a humiliating national insult demanding military retribution." }
    },
    context: {
      micro_context: "Barricades outside Lahore railway station; heavy batons crashing onto unarmed leaders.",
      meso_context: "All-white Simon Commission boycotted by all Indian political parties.",
      macro_context: "The prestige of the Punjab leadership attacked directly by colonial police officers."
    },
    entities: [
      { entity_id: "ENT-LAJPAT", name: "Lala Lajpat Rai", role: "National leader and victim of assault", type: "person" },
      { entity_id: "ENT-SCOTT", name: "James A. Scott", role: "Senior Superintendent of Police (assailant)", type: "person" },
      { entity_id: "ENT-SAUNDERS", name: "John Poyntz Saunders", role: "Assistant Superintendent of Police", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Eyewitness volunteer in crowd", type: "person" },
      { entity_id: "ENT-BASANTI-DEVI", name: "Basanti Devi", role: "Nationalist calling on youth to avenge Lalaji", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH22-01", relationship_type: "continues", nature: "Leads directly to the plot to assassinate Scott, resulting in Saunders' death." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH22-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The HSRA Central Committee meeting on 10 December 1928 explicitly passed a resolution to execute Scott to avenge Lalaji.",
        provenance: "chapter043.xhtml / notes.xhtml (Ch. 43 Notes 1-21)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "contemporary_press_and_medical_bulletins",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Eyewitness testimonies of Dr. Gopi Chand Bhargava and Raizada Hans Raj corroborate the police lathi charge."
      }
    ],
    source_evidence: [
      "I declare that the blows struck at me today will be the last nails in the coffin of British rule in India.",
      "Basanti Devi, the widow of C.R. Das, issued an agonized appeal to the youth of India: 'Does the youth of the country still have life in them, or have they become dead corpses that they can tolerate such an insult?'"
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "public_demonstration", description: "Demonstration and assault witnessed by thousands." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000704", "bhasin0000705", "bhasin0000706", "bhasin0000707", "bhasin0000710", "bhasin0000715"],
      notes_referenced: ["notes.xhtml#bhasin0001677", "notes.xhtml#bhasin0001697"],
      archival_citations: ["The Tribune (Lahore), 31 October 1928 & 18 November 1928", "IOR L/PJ/6/2004"]
    },
    genre_specific_payload: {
      setting: "Railway station plaza and Bradlaugh Hall, Lahore.",
      documented_actions: [
        "Lajpat Rai leads peaceful procession chanting 'Simon Go Back'.",
        "Scott orders baton charge and personally strikes Lajpat Rai with his cane.",
        "Lajpat Rai addresses a mammoth evening gathering at Mori Gate despite severe pain.",
        "Lalaji suffers heart failure accelerated by physical trauma, dying on 17 November.",
        "HSRA leaders meet secretly and select Scott for capital retribution."
      ],
      outcomes: [
        "Uncontrollable national rage and the fateful mobilization of the HSRA hit squad."
      ],
      historical_significance: "The decisive event that transformed the HSRA from a propagandist organization into an armed execution squad seeking symbolic justice."
    }
  },

  // --- PART 9: MARTYRDOM ---
  {
    unit_id: "KU-BS-CH44-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter044.xhtml",
      chapter_number: 44,
      chapter_title: "44. Kartar Singh Sarabha",
      element_ids: ["bhasin0000726", "bhasin0000727", "bhasin0000728", "bhasin0000729", "bhasin0000730", "bhasin0000731", "bhasin0000732", "bhasin0000733", "bhasin0000734"]
    },
    structural_position: {
      part: "PART 9: MARTYRDOM",
      chapter: "44. Kartar Singh Sarabha"
    },
    title: "Kartar Singh Sarabha: The Heroic Prototype and the Legacy of Ghadar Martyrdom",
    summary_statement: "Examines Bhagat Singh's lifelong veneration of 19-year-old Ghadar martyr Kartar Singh Sarabha (hanged in Lahore Central Jail in 1915), the parallel trajectory of their youthful sacrifices, and how Sarabha's defiant verses functioned as Bhagat Singh's emotional and spiritual compass in the condemned cell.",
    materiality: "critical",
    materiality_reason: "Provides the core psychological and emotional lineage linking the 1915 Ghadar rebellion directly to Bhagat Singh's conduct on the gallows.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1915 / 1930–1931",
      date_iso_estimated: "1931-03-01",
      precision: "approximate_month",
      chronological_sequence_index: 46,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1915 & 1931", context: "Sarabha executed on 16 Nov 1915; Bhagat Singh invokes his memory in March 1931." },
      record_revelation_time: { date_raw: "1931", context: "Comrades' accounts of Bhagat Singh singing Sarabha's verses." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates that Sarabha was Bhagat Singh's sole unblemished hero." }
    },
    context: {
      micro_context: "Cell No. 14, Lahore Central Jail; Sarabha's photograph pinned on the wall.",
      meso_context: "Ghadar movement's secular armed struggle against the British Empire.",
      macro_context: "Tradition of revolutionary martyrdom in Punjabi folklore and anti-colonial politics."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Devotee and successor martyr", type: "person" },
      { entity_id: "ENT-SARABHA", name: "Kartar Singh Sarabha", role: "Ghadar martyr and spiritual mentor", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH47-01", relationship_type: "continues", nature: "Directly inspires the joyful ascent to the gallows." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "biographical_memoirs_and_poetry",
        temporal_proximity: "near_term",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Sister Amar Kaur and comrade Jaidev Kapur confirm Bhagat Singh always carried Sarabha's photograph."
      }
    ],
    source_evidence: [
      "Seva desh di jindriye badi aukhi, gallan karniyan dher sukheliyan ne / Jinhaan desh seva vich pair paya, ohnaan lakh musibataan jheliyan ne (Service to the nation is exceedingly hard, talk is very cheap / Those who have stepped onto the path of national service have endured countless tribulations).",
      "Whenever Bhagat Singh felt weary, he would take out Sarabha's photograph from his pocket, gaze upon it, and find renewed strength."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "biographical_veneration", description: "Influence universally corroborated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000726", "bhasin0000727", "bhasin0000728", "bhasin0000729", "bhasin0000730", "bhasin0000731", "bhasin0000732", "bhasin0000733", "bhasin0000734"],
      notes_referenced: ["notes.xhtml#bhasin0001704", "notes.xhtml#bhasin0001712"],
      archival_citations: ["Kirti (Amritsar), October 1928, Profile of Kartar Singh Sarabha by Bhagat Singh"]
    },
    genre_specific_payload: {
      setting: "Lahore Central Jail condemned cells.",
      documented_actions: [
        "Bhagat Singh recites Sarabha's poetry daily to comrades in adjacent cells.",
        "Refusal to appeal for clemency, citing Sarabha's refusal to plead for his life before the 1915 Tribunal.",
        "Adoption of Sarabha's smiling demeanor before the gallows."
      ],
      outcomes: [
        "Conscious modeling of revolutionary martyrdom as an art of political resistance."
      ],
      historical_significance: "Cemented the historical continuity between the global Ghadar movement of 1915 and the socialist republican martyrdom of 1931."
    }
  },
  {
    unit_id: "KU-BS-CH45-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter045.xhtml",
      chapter_number: 45,
      chapter_title: "45. 1930, Sufferings and Sacrifices",
      element_ids: ["bhasin0000735", "bhasin0000736", "bhasin0000737", "bhasin0000738", "bhasin0000739", "bhasin0000740", "bhasin0000741", "bhasin0000742", "bhasin0000743", "bhasin0000744", "bhasin0000745", "bhasin0000746"]
    },
    structural_position: {
      part: "PART 9: MARTYRDOM",
      chapter: "45. 1930, Sufferings and Sacrifices"
    },
    title: "1930, Sufferings and Sacrifices: The Ex Parte Judgment of 7 October 1930",
    summary_statement: "Documents the climax of the Special Tribunal proceedings under Justice Hilton: the total exclusion of the accused, the refusal to grant defense counsel adequate time, the ex parte examination of witnesses, and the delivery on 7 October 1930 of the 300-page final judgment sentencing Bhagat Singh, Sukhdev Thapar, and Shivaram Rajguru to be hanged by the neck until dead.",
    materiality: "critical",
    materiality_reason: "The legal culmination of the Lahore Conspiracy Case delivering the death sentences.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "7 October 1930",
      date_iso_estimated: "1930-10-07",
      precision: "exact",
      chronological_sequence_index: 47,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "7 October 1930", context: "Judgment signed and pronounced by Hilton, Tapp, and Sir Abdul Qadir." },
      record_revelation_time: { date_raw: "7 October 1930", context: "Judgment served on prisoners in jail cells (they refused to attend court)." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes Plate 13 showing the death sentence extracts signed under Sections 121 and 302 IPC." }
    },
    context: {
      micro_context: "Empty dock at Poonch House; judgment read to empty chairs.",
      meso_context: "Hilton Tribunal concluding the case three weeks before Ordinance III lapsed on 31 October.",
      macro_context: "Curfew and Section 144 clamped across Lahore anticipating mass insurrection."
    },
    entities: [
      { entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Tribunal President signing judgment", type: "person" },
      { entity_id: "ENT-TAPP", name: "Justice J.K. Tapp", role: "Tribunal Judge", type: "person" },
      { entity_id: "ENT-QADIR", name: "Justice Sir Abdul Qadir", role: "Tribunal Judge", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Condemned prisoner", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Condemned prisoner", type: "person" },
      { entity_id: "ENT-RAJGURU", name: "Shivaram Rajguru", role: "Condemned prisoner", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH48-01", relationship_type: "continues", nature: "Triggers the Privy Council special leave petition filed by D.N. Pritt." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH48-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The 7 October judgment was the final order challenged before the Privy Council in London.",
        provenance: "chapter045.xhtml / notes.xhtml (Ch. 45 Notes 1-14)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_judgment_and_death_warrants",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Special Tribunal Judgment (Plate 13 / App) and Death Warrants (Plate 18 / App) in Punjab Archives Lahore."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Special Tribunal Judgment, 7 October 1930: 'The Tribunal sentences Bhagat Singh, Shivaram Rajguru, and Sukhdev to be hanged by the neck till they be dead.'",
      "The judgment was pronounced in an empty courtroom. Not a single accused was present. Not a single defense counsel was in attendance."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "capital_judgment", description: "Judgment text preserved in official legal volumes." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000735", "bhasin0000736", "bhasin0000737", "bhasin0000738", "bhasin0000739", "bhasin0000740", "bhasin0000741", "bhasin0000742", "bhasin0000743", "bhasin0000744", "bhasin0000745", "bhasin0000746"],
      notes_referenced: ["notes.xhtml#bhasin0001713", "notes.xhtml#bhasin0001726"],
      archival_citations: ["Plate 13 (Appendix), Special Tribunal Judgment Extract, 7 Oct 1930", "Trial of Bhagat Singh (Hilton Judgment)"]
    },
    genre_specific_payload: {
      setting: "Poonch House Tribunal bench, Lahore.",
      documented_actions: [
        "Hilton delivers unanimous judgment convicting Bhagat Singh, Sukhdev, and Rajguru of murder and waging war against the King.",
        "Seven comrades sentenced to transportation for life (Kishori Lal, Mahabir Singh, Vijay Kumar Sinha, Shiv Verma, Gaya Prasad, Kamal Nath Tiwari, Jaidev Kapur).",
        "Ajudhia Prasad and Jatindra Nath Sanyal acquitted for lack of corroboration.",
        "Accused receive the news in jail with songs and distribute sweets."
      ],
      outcomes: [
        "Formalization of capital sentences triggering nationwide and international clemency campaigns."
      ],
      historical_significance: "The formal legal condemnation that created the modern legend of the revolutionary trio."
    }
  },
  {
    unit_id: "KU-BS-CH46-01",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "chapter046.xhtml",
      chapter_number: 46,
      chapter_title: "46. 1931, ‘Why I Am an Atheist’",
      element_ids: ["bhasin0000747", "bhasin0000748", "bhasin0000749", "bhasin0000750", "bhasin0000751", "bhasin0000752", "bhasin0000753", "bhasin0000754", "bhasin0000755", "bhasin0000756", "bhasin0000757", "bhasin0000758", "bhasin0000759", "bhasin0000760", "bhasin0000761"]
    },
    structural_position: {
      part: "PART 9: MARTYRDOM",
      chapter: "46. 1931, ‘Why I Am an Atheist’"
    },
    title: "1931, ‘Why I Am an Atheist’: The Philosophical Masterpiece of Rationalism and Materialism",
    summary_statement: "Examines Bhagat Singh's monumental philosophical tract 'Why I Am an Atheist', written in Lahore Central Jail in late 1930 in response to Ghadar veteran Baba Randhir Singh's taunt that vanity had made him an atheist; systematically defends scientific materialism, demolishes theological arguments for God, karma, and rebirth, and affirms that facing death without the consolations of an afterlife is the ultimate test of intellectual courage.",
    materiality: "critical",
    materiality_reason: "The philosophical pinnacle of Bhagat Singh's thought; establishes his rationalist, anti-theological, and materialist epistemology.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "Late 1930 – 1931",
      date_iso_estimated: "1930-10-05",
      precision: "approximate_month",
      chronological_sequence_index: 48,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "Late 1930", context: "Written in cell No. 14, Lahore Central Jail following debate with Baba Randhir Singh." },
      record_revelation_time: { date_raw: "27 September 1931", context: "Published posthumously in Lala Feroze Chand's English weekly The People, Lahore." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the text as a landmark document of modern Indian secular enlightenment." }
    },
    context: {
      micro_context: "Condemned cell; debate with religious prisoner Baba Randhir Singh who visited Bhagat Singh.",
      meso_context: "Colonial state and conservative society assuming doomed men turn to prayer before the gallows.",
      macro_context: "Socio-political challenge to religious dogmatism, caste stratification, and communal divisiveness."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Philosopher and author", type: "person" },
      { entity_id: "ENT-RANDHIR", name: "Baba Randhir Singh", role: "Ghadar veteran and devout Sikh leader", type: "person" },
      { entity_id: "ENT-FEROZE-CHAND", name: "Lala Feroze Chand", role: "Editor of The People who published the essay", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-EPIGRAPH-01", relationship_type: "continues", nature: "Elaborates the core epigraph on merciless criticism." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "primary_published_tract_and_contemporary_journal",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Published in The People on 27 September 1931; original manuscript preserved and authenticated."
      }
    ],
    source_evidence: [
      "Is it vanity that has made me an atheist? My friends, no. It was reasoned thought, merciless criticism, and historical study that led me to discard the old faith.",
      "A short life of struggle with no such magnificent end, into itself, is its own reward, if I may have the courage to look at it in that way. With no selfish motive, or with no desire for reward here or hereafter, quite detached have I devoted my life to the cause of freedom.",
      "Criticism and independent thinking are the two indispensable qualities of a revolutionary."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "philosophical_treatise", description: "Text undisputed and canonized in South Asian intellectual history." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000747", "bhasin0000748", "bhasin0000749", "bhasin0000750", "bhasin0000751", "bhasin0000752", "bhasin0000753", "bhasin0000754", "bhasin0000755", "bhasin0000756", "bhasin0000757", "bhasin0000758", "bhasin0000759", "bhasin0000760", "bhasin0000761"],
      notes_referenced: ["notes.xhtml#bhasin0001727", "notes.xhtml#bhasin0001744"],
      archival_citations: ["The People (Lahore), 27 September 1931, 'Why I Am an Atheist'", "Bhagat Singh's Original Manuscript"]
    },
    genre_specific_payload: {
      document_title: "Why I Am an Atheist",
      author_or_origin: "Bhagat Singh",
      document_date: "Late 1930 (published 27 September 1931)",
      medium_format: "Philosophical prison essay",
      legal_or_ideological_significance: "Rejection of divine teleology, theological justification of suffering, and religious superstition in favor of dialectical materialism.",
      key_verbatim_excerpts: [
        "Belief softens the hardships, even can make them pleasant and may bring hope... But to stand firm in the face of all storms without any such prop—this is the real test of a man.",
        "Why does your omnipotent God not stop sin and suffering? To say that it is all His 'leela' (play) or due to past karma is the height of callousness."
      ],
      author_vs_editor_vs_biographer_framing: "Juss presents this work as the definitive intellectual proof that Bhagat Singh's martyrdom was guided by lucid rationalism rather than mystical fanaticism."
    }
  },
  {
    unit_id: "KU-BS-CH47-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter047.xhtml",
      chapter_number: 47,
      chapter_title: "47. 1931, ‘I Will Climb the Gallows Gladly’",
      element_ids: ["bhasin0000762", "bhasin0000763", "bhasin0000764", "bhasin0000765", "bhasin0000766", "bhasin0000767", "bhasin0000768", "bhasin0000769", "bhasin0000770", "bhasin0000771", "bhasin0000772", "bhasin0000773", "bhasin0000774", "bhasin0000775", "bhasin0000776", "bhasin0000777", "bhasin0000778", "bhasin0000779", "bhasin0000780"]
    },
    structural_position: {
      part: "PART 9: MARTYRDOM",
      chapter: "47. 1931, ‘I Will Climb the Gallows Gladly’"
    },
    title: "23 March 1931: The Advanced Execution, Gallows Scene, and Clandestine Sutlej Disposal",
    summary_statement: "Exhaustive reconstruction of the final hours and execution of Bhagat Singh, Sukhdev, and Rajguru on 23 March 1931: their 20 March letter to the Punjab Governor demanding to be shot as prisoners of war; reading Lenin's 'State and Revolution' until summoned; the unprecedented advanced hanging at 7:00 PM (11 hours ahead of the statutory morning schedule); walking arm-in-arm shouting 'Inquilab Zindabad'; the execution certified by Jail Superintendent Major Chopra (Plate 19 / App); the rear wall of the jail breached to secretly transport corpses to Ganda Singh Wala; and the documented conflict between the secret official order (night cremation with kerosene, Plate 20 / App) and public discovery/allegations of mutilated, incomplete burning on the Sutlej banks.",
    materiality: "critical",
    materiality_reason: "The climax of the biography; enforces mandatory qualification VAL-HIST-D6-43 regarding the conflicting cremation evidence.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "20–24 March 1931",
      date_iso_estimated: "1931-03-23",
      precision: "exact",
      chronological_sequence_index: 49,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "23 March 1931, 7:00 PM (execution); night of 23–24 March (cremation)", context: "Gallows of Lahore Central Jail and banks of Sutlej river near Ferozepur." },
      record_revelation_time: { date_raw: "24 March 1931", context: "Colonial official notices pasted outside jail gate; Lahore crowd converges on Sutlej." },
      source_time: { publication_year: 2022, author_analysis: "Juss conducts an exhaustive forensic audit of Plates 18, 19, 20, and 21." }
    },
    context: {
      micro_context: "Gallows platform lit by hurricane lanterns; black hoods placed; ropes adjusted around three necks simultaneously.",
      meso_context: "Total violation of Punjab Jail Manual provisions mandating morning executions and release of bodies to relatives.",
      macro_context: "Colonial executive terrified of mass insurrections if bodies were paraded through Lahore."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Martyred revolutionary", type: "person" },
      { entity_id: "ENT-SUKHDEV", name: "Sukhdev Thapar", role: "Martyred revolutionary", type: "person" },
      { entity_id: "ENT-RAJGURU", name: "Shivaram Rajguru", role: "Martyred revolutionary", type: "person" },
      { entity_id: "ENT-CHOPRA", name: "Major P.D. Chopra", role: "Superintendent of Lahore Central Jail", type: "person" },
      { entity_id: "ENT-BARKER", name: "Lt. Col. F.A. Barker", role: "Inspector General of Prisons", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH51-01", relationship_type: "continues", nature: "Leads to the political explosion and Gandhi's confrontation with youth at Karachi." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH51-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The secret advanced executions provoked black flag demonstrations against Gandhi across India.",
        provenance: "chapter047.xhtml / notes.xhtml (Ch. 47 Notes 1-24)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_execution_certificates_and_disposal_orders",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Jail Superintendent Execution Certificate (Plate 19 / App) and Secret Disposal Order (Plate 20 / App) verify time and secret destination."
      }
    ],
    source_evidence: [
      "[PRIMARY_SUBJECT_WRITING] Letter to Punjab Governor (20 March 1931): 'We request and demand that we should be treated as war prisoners and accordingly we should be shot dead by a firing squad instead of being hanged.'",
      "[CONTEMPORARY_RECORD] Jail Execution Certificate (Plate 19): Major Chopra certifies hanging at 7:00 PM on 23 March 1931; bodies remained suspended for one hour before death was certified.",
      "[CONTEMPORARY_RECORD] Secret Disposal Order (Plate 20): Instructs that corpses be removed through the back gate and incinerated with kerosene at Ganda Singh Wala near Ferozepur under military guard.",
      "[COMPETING_ACCOUNT / EVIDENCE] Popular discovery on the Sutlej banks: Next morning, a citizens' delegation led by Lala Lajpat Rai's daughter and Congress workers discovered partially burned, chopped limbs smoking on the riverbank, igniting universal fury across India."
    ],
    competing_accounts: [
      {
        contested_issue: "Conflicting evidence concerning the covert cremation and disposal of the bodies at Ganda Singh Wala near Ferozepur (VAL-HIST-D6-43).",
        accounts: [
          {
            claim_id: "CLAIM-OFFICIAL-DISPOSAL",
            source_text: "Official Secret Government Disposal Order (Plate 20 / Appendix) and Police Report",
            assertion: "Corpses were removed secretly at night, conveyed by lorry to Ganda Singh Wala on the Sutlej river, and fully cremated with firewood and kerosene under the supervision of a Sikh granthi and Hindu priest according to religious rites, with ashes immersed in the river.",
            witness_or_document: "Home Secretary Emerson dispatches & Secret Disposal Order",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-PUBLIC-DISCOVERY",
            source_text: "Eyewitness accounts of Ferozepur citizens, The Tribune reports, and Congress Inquiry",
            assertion: "The cremation was botched in haste and terror; kerosene was dumped on mutilated body parts which were only partially consumed before being thrown into the Sutlej; villagers and nationalist search parties discovered smoldering, incomplete human remains on the bank the following morning and performed a second, reverent public cremation.",
            witness_or_document: "Ferozepur citizens' delegation & Parvati Devi (daughter of Lajpat Rai)",
            evidence_assessment: {
              temporal_proximity: "near_term",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "unresolved_contradiction",
        system_synthesis: "BKRS preserves the documented conflict: colonial official records claim a complete religious cremation took place, whereas extensive eyewitness and public testimony established that the panicked disposal was incomplete, leaving mutilated remains discovered by the public."
      }
    ],
    uncertainty: { degree: "low", type: "covert_cremation", description: "Exact mechanics of corpse mutilation remain disputed, but incomplete burning is corroborated by physical recovery of remains by citizens." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000762", "bhasin0000763", "bhasin0000764", "bhasin0000765", "bhasin0000770", "bhasin0000775", "bhasin0000780"],
      notes_referenced: ["notes.xhtml#bhasin0001745", "notes.xhtml#bhasin0001768"],
      archival_citations: ["Plate 18 (Death Warrants)", "Plate 19 (Execution Certificate)", "Plate 20 (Secret Disposal Order)", "The Tribune, 25-26 March 1931"]
    },
    genre_specific_payload: {
      setting: "Condemned ward and gallows of Lahore Central Jail; Ganda Singh Wala, Ferozepur.",
      documented_actions: [
        "Bhagat Singh is reading Lenin's 'State and Revolution'; when the warder announces execution time, he replies: 'Wait, one revolutionary is meeting another.'",
        "The three comrades embrace and march to the gallows singing patriotic songs.",
        "Simultaneous hanging of Bhagat Singh, Sukhdev, and Rajguru at 7:00 PM.",
        "Bodies cut down, secretly dismembered or loaded into military truck via hacked jail wall.",
        "Clandestine cremation on the banks of the Sutlej river near Ferozepur.",
        "Citizens discover remains and carry them in public procession to Lahore."
      ],
      outcomes: [
        "Consummation of the sacrifice; Bhagat Singh becomes an immortal folk hero across the subcontinent."
      ],
      historical_significance: "The defining moment of modern Indian revolutionary history that permanently unmasked the moral bankruptcy of British colonial rule."
    }
  }
];
