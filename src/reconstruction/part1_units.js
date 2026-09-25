/**
 * BKRS Milestone 3 - Part 1 Units + Epigraph & Prologue
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 */

module.exports = [
  {
    unit_id: "KU-BS-EPIGRAPH-01",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "page11.xhtml",
      chapter_number: 0,
      chapter_title: "Epigraph",
      element_ids: ["bhasin0000085", "bhasin0000086", "bhasin0000087", "bhasin0000088", "bhasin0000089", "bhasin0000090", "bhasin0000091"]
    },
    structural_position: {
      part: "FRONT_MATTER",
      chapter: "Epigraph"
    },
    title: "Epigraph: The Last Letter to Comrades and the Affirmation of Reason",
    summary_statement: "Bhagat Singh's final letter of 22 March 1931 written hours before his execution, affirming that the natural desire to live is subjugated to revolutionary purpose, paired with his philosophical declaration from 'Why I Am an Atheist' asserting reason and criticism over blind faith.",
    materiality: "critical",
    materiality_reason: "Preserves the moral and philosophical anchor of Bhagat Singh's self-conscious martyrdom and rationalist epistemology.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "22 March 1931 and 1930",
      date_iso_estimated: "1931-03-22",
      precision: "exact",
      chronological_sequence_index: 1,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "22 March 1931", context: "Written in Lahore Central Jail condemned cell on the eve of hanging." },
      record_revelation_time: { date_raw: "March 1931", context: "Smuggled out of Lahore Central Jail to comrades." },
      source_time: { publication_year: 2022, author_analysis: "Juss positions these twin epigraphs as the intellectual gateway to the biography." }
    },
    context: {
      micro_context: "Condemned cell No. 14 in Lahore Central Jail, hours before the surprise advanced execution.",
      meso_context: "Imposition of capital punishment under Ordinance III of 1930 and rejection of Privy Council appeal.",
      macro_context: "Colonial state's determination to eliminate the revolutionary leadership prior to the Karachi Congress session."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Revolutionary author and prisoner", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH46-01", relationship_type: "anticipates", nature: "Links directly to the philosophical essay 'Why I Am an Atheist'." },
      { target_unit_id: "KU-BS-CH47-01", relationship_type: "illustrates", nature: "Exemplifies the mindset of joyful ascent to the gallows." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH47-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh's explicit statement that his death would become a symbol rallying millions of Indians to revolution.",
        provenance: "page11.xhtml / notes.xhtml (Epigraph Note 1)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "primary_prison_manuscript",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "condemned_cell_uncoerced_manuscript",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Authentic final letter in Bhagat Singh's handwriting preserved by comrades."
      }
    ],
    source_evidence: [
      "The desire to live is natural. It is in me also. I do not want to conceal it. But it is conditional. I don't want to live as a prisoner or under restrictions. My name has become a symbol of Indian revolution.",
      "Any man who stands for progress has to criticise, disbelieve and challenge every item of the old faith."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "documentary", description: "Text established across archival editions." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000085", "bhasin0000086", "bhasin0000087", "bhasin0000088", "bhasin0000089", "bhasin0000090", "bhasin0000091"],
      notes_referenced: ["notes.xhtml#bhasin0001183"],
      archival_citations: ["Bhagat Singh, 'Last Letter to Comrades', 22 March 1931"]
    },
    genre_specific_payload: {
      document_title: "Last Letter to Comrades & 'Why I Am an Atheist' Excerpt",
      author_or_origin: "Bhagat Singh",
      document_date: "22 March 1931",
      medium_format: "Autograph prison letter and essay excerpt",
      legal_or_ideological_significance: "Demonstrates that Bhagat Singh consciously converted his execution into an insurmountable ideological crisis for colonial legitimacy.",
      key_verbatim_excerpts: [
        "If I live, my sacrifice will be incomplete. If I mount the gallows boldly with a smile on my face, that will inspire Indian mothers and they will aspire that their children should also become Bhagat Singh.",
        "Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking."
      ],
      author_vs_editor_vs_biographer_framing: "Juss utilizes the epigraph to immediately dismantle the colonial caricature of Bhagat Singh as an unthinking terrorist."
    }
  },
  {
    unit_id: "KU-BS-PROLOGUE-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "prologue.xhtml",
      chapter_number: 0,
      chapter_title: "Prologue: A Life in Revolution",
      element_ids: ["bhasin0000092", "bhasin0000093", "bhasin0000094", "bhasin0000095", "bhasin0000096", "bhasin0000097", "bhasin0000098", "bhasin0000099", "bhasin0000100", "bhasin0000101", "bhasin0000102", "bhasin0000103", "bhasin0000104", "bhasin0000105", "bhasin0000106", "bhasin0000107", "bhasin0000108", "bhasin0000109", "bhasin0000110", "bhasin0000111", "bhasin0000112", "bhasin0000113", "bhasin0000114", "bhasin0000115", "bhasin0000116", "bhasin0000117", "bhasin0000118", "bhasin0000119", "bhasin0000120", "bhasin0000121", "bhasin0000122", "bhasin0000123", "bhasin0000124", "bhasin0000125", "bhasin0000126", "bhasin0000127", "bhasin0000128", "bhasin0000129", "bhasin0000130", "bhasin0000131", "bhasin0000132", "bhasin0000133", "bhasin0000134", "bhasin0000135"]
    },
    structural_position: {
      part: "PROLOGUE",
      chapter: "Prologue: A Life in Revolution"
    },
    title: "Prologue: The Archival Excavation and the Legalist-Intellectual Thesis",
    summary_statement: "Juss establishes his foundational thesis: Bhagat Singh was not merely an impetuous romantic nationalist or bomb-thrower, but an exceptionally well-read political thinker, constitutionalist, and legal strategist whose trial exposed the fragility of British colonial legality.",
    materiality: "critical",
    materiality_reason: "Establishes the interpretive framework and historiographical contribution of the entire biography.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1928–1931 / 2022",
      date_iso_estimated: "1931-03-23",
      precision: "approximate_year",
      chronological_sequence_index: 2,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1928–1931", context: "Bhagat Singh's revolutionary actions and trial in Lahore." },
      record_revelation_time: { date_raw: "2018–2021", context: "Juss's research across British Library India Office Records and Punjab Archives Lahore." },
      source_time: { publication_year: 2022, author_analysis: "Juss's legal analysis of colonial emergency ordinances and procedural arbitrariness." }
    },
    context: {
      micro_context: "Courtroom dock and prison cells of Lahore Central and Borstal Jails.",
      meso_context: "Emergency jurisdiction created by the Governor-General under Section 72 of the Government of India Act 1915.",
      macro_context: "Colonial state balancing constitutional reforms (Simon Commission, Round Table Conferences) with judicial despotism."
    },
    entities: [
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Biographer and legal scholar", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Revolutionary subject and thinker", type: "person" },
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy and Governor-General of India", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH37-01", relationship_type: "anticipates", nature: "Outlines the legal critique of Ordinance III of 1930." },
      { target_unit_id: "KU-BS-CH54-01", relationship_type: "continues", nature: "Sets up the concluding analysis of colonial rule of law." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH30-01",
        causal_status: "[HISTORIAN_CAUSAL_HYPOTHESIS]",
        supporting_evidence: "Juss argues that the British administration was forced into emergency ordinance rule precisely because Bhagat Singh used regular criminal court procedure as an ideological platform.",
        provenance: "prologue.xhtml / notes.xhtml (Prologue Notes 1-37)",
        competing_explanations: ["Colonial administration asserted ordinance was necessary solely due to prisoner non-cooperation and violent courtroom disruptions."],
        epistemic_attribution: "authorial_thesis"
      }
    ],
    evidence: [
      {
        type: "archival_monograph_synthesis",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Rigorous legal scholarship based on 135 files from British Library and Lahore archives."
      }
    ],
    source_evidence: [
      "Bhagat Singh was not just a freedom fighter. He was an intellectual, a political thinker, and an advocate of social justice who used the courtroom as a political stage.",
      "The trial of Bhagat Singh was an exercise in judicial despotism, disguised as the rule of law."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "historiographical", description: "Juss's thesis is clear and corroborated by trial documents." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000092", "bhasin0000093", "bhasin0000094", "bhasin0000095", "bhasin0000100", "bhasin0000115", "bhasin0000130"],
      notes_referenced: ["notes.xhtml#bhasin0001184", "notes.xhtml#bhasin0001190"],
      archival_citations: ["IOR L/PJ/6/2004", "Punjab Archives Lahore, Lahore Conspiracy Case Trial Proceedings"]
    },
    genre_specific_payload: {
      setting: "Historiographical and legal overview across London, Lahore, and Delhi archives.",
      documented_actions: [
        "Unearthing of 135 archival files in the British Library and uncatalogued records in Lahore.",
        "Systematic legal audit of the Special Tribunal's procedural violations under Ordinance III of 1930.",
        "Demonstration that Bhagat Singh's strategic objective was political communication rather than personal acquittal."
      ],
      outcomes: [
        "Re-conceptualization of Bhagat Singh from a romantic militarist to a constitutionalist revolutionary."
      ],
      historical_significance: "Redefines the Lahore Conspiracy Case from a simple murder trial into a constitutional watershed for colonial jurisprudence."
    }
  },
  {
    unit_id: "KU-BS-CH01-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter001.xhtml",
      chapter_number: 1,
      chapter_title: "1. 1840, Fateh Singh",
      element_ids: ["bhasin0000184", "bhasin0000185", "bhasin0000186", "bhasin0000187", "bhasin0000188", "bhasin0000189", "bhasin0000190", "bhasin0000191", "bhasin0000192", "bhasin0000193"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "1. 1840, Fateh Singh"
    },
    title: "1840, Fateh Singh: Ancestral Roots, Colonial Annexation, and Rebel Lineage",
    summary_statement: "Details Bhagat Singh's birth on 27 September 1907 in Banga (Lyallpur district, Punjab) and traces his ancestral Sandhu Jat lineage back to Sardar Fateh Singh of Khatkar Kalan, who resisted British annexation following the Anglo-Sikh Wars in the 1840s.",
    materiality: "critical",
    materiality_reason: "Documents the familial and generational transmission of anti-colonial resistance spanning three generations.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1840s–1907",
      date_iso_estimated: "1907-09-27",
      precision: "exact",
      chronological_sequence_index: 3,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "27 September 1907", context: "Birth of Bhagat Singh in Banga; coincides with release of father Kishan Singh and uncle Ajit Singh from prison." },
      record_revelation_time: { date_raw: "1907", context: "Recorded in family lore as 'Bhaganwala' (the fortunate child)." },
      source_time: { publication_year: 2022, author_analysis: "Juss emphasizes the twin geography of Khatkar Kalan (India) and Banga (Pakistan) as symbolizing shared Punjab heritage." }
    },
    context: {
      micro_context: "Rural agricultural household in Banga, Chak No. 105 GB, Lyallpur.",
      meso_context: "British establishment of canal colonies and land settlement policies in Western Punjab.",
      macro_context: "Fall of Maharaja Ranjit Singh's Sikh Kingdom (1849) and British annexation of Punjab."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Subject", type: "person" },
      { entity_id: "ENT-FATEH", name: "Fateh Singh", role: "Great-grandfather", type: "person" },
      { entity_id: "ENT-KISHAN", name: "Sardar Kishan Singh", role: "Father", type: "person" },
      { entity_id: "ENT-AJIT", name: "Sardar Ajit Singh", role: "Uncle and nationalist leader", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH05-01", relationship_type: "continues", nature: "Establishes the family lineage continued in Bharat Mata Society." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH05-01",
        causal_status: "[CORROBORATED_CAUSAL_INFERENCE]",
        supporting_evidence: "Family tradition of resistance dating from Fateh Singh directly shaped Kishan and Ajit Singh's militant politics.",
        provenance: "chapter001.xhtml / notes.xhtml (Ch. 1 Notes 1-5)",
        competing_explanations: [],
        epistemic_attribution: "authorial_thesis"
      }
    ],
    evidence: [
      {
        type: "family_records_and_settlement_reports",
        temporal_proximity: "near_term",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Land revenue and settlement records in Lyallpur confirm Sandhu Jat allotment."
      }
    ],
    source_evidence: [
      "Bhagat Singh was born on 27 September 1907 in a small village by the name of 'Banga'. It was then the Lyallpur district of undivided Indian Punjab.",
      "The Sandhu Jat family trace their roots to Sardar Fateh Singh who had served in the army of Maharaja Ranjit Singh."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "biographical", description: "Birthdate and ancestry fully corroborated." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000184", "bhasin0000185", "bhasin0000186", "bhasin0000187", "bhasin0000188", "bhasin0000189", "bhasin0000190", "bhasin0000191", "bhasin0000192", "bhasin0000193"],
      notes_referenced: ["notes.xhtml#bhasin0001198", "notes.xhtml#bhasin0001202"],
      archival_citations: ["Lyallpur District Gazetteer", "Kishan Singh Family Papers"]
    },
    genre_specific_payload: {
      setting: "Khatkar Kalan (Jalandhar) and Banga (Lyallpur), Punjab.",
      documented_actions: [
        "Fateh Singh refuses to assist the British during the Anglo-Sikh Wars.",
        "Kishan Singh and Ajit Singh establish anti-colonial networks in Lahore.",
        "Bhagat Singh's birth coincides with the release of his father and uncle from colonial detention."
      ],
      outcomes: [
        "Bhagat Singh acquires the childhood sobriquet 'Bhaganwala' and inherits a tradition of militant anti-imperialism."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's radicalism was organically rooted in three generations of Punjabi agrarian resistance."
    }
  },
  {
    unit_id: "KU-BS-CH02-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter002.xhtml",
      chapter_number: 2,
      chapter_title: "2. 1876, Swaraj",
      element_ids: ["bhasin0000194", "bhasin0000195", "bhasin0000196", "bhasin0000197", "bhasin0000198", "bhasin0000199", "bhasin0000200", "bhasin0000201"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "2. 1876, Swaraj"
    },
    title: "1876, Swaraj: The Arya Samaj, Dayanand Saraswati, and Grandfather Arjan Singh",
    summary_statement: "Examines the ideological influence of Swami Dayanand Saraswati's Arya Samaj on Bhagat Singh's family, especially grandfather Arjan Singh, who adopted the Samaj's doctrine of 'Swaraj' (self-rule) and socio-religious reform while rejecting religious ritualism.",
    materiality: "important",
    materiality_reason: "Explains the rationalist, anti-clerical, and nationalist roots of Bhagat Singh's early intellectual upbringing.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1876–1890s",
      date_iso_estimated: "1876-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 4,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1876–1890s", context: "Arya Samaj expansion across Punjab and Arjan Singh's conversion to Samaj ideals." },
      record_revelation_time: { date_raw: "1920s", context: "Recounted by Bhagat Singh in 'Why I Am an Atheist'." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates that Arya Samaj in Punjab was deeply political and anti-colonial." }
    },
    context: {
      micro_context: "Household of Sardar Arjan Singh in Khatkar Kalan.",
      meso_context: "Rise of Arya Samaj socio-religious and educational reform movements across Northern India.",
      macro_context: "Emergence of modern Indian political consciousness preceding the founding of the Indian National Congress (1885)."
    },
    entities: [
      { entity_id: "ENT-ARJAN", name: "Sardar Arjan Singh", role: "Grandfather", type: "person" },
      { entity_id: "ENT-DAYANAND", name: "Swami Dayanand Saraswati", role: "Arya Samaj founder", type: "person" },
      { entity_id: "ENT-KISHAN", name: "Sardar Kishan Singh", role: "Father", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH07-01", relationship_type: "anticipates", nature: "Leads to enrollment of Bhagat Singh in D.A.V. School Lahore instead of Khalsa School." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH07-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Arjan Singh's deep Arya Samaj affiliation led him to insist that Bhagat Singh study at D.A.V. High School.",
        provenance: "chapter002.xhtml / notes.xhtml (Ch. 2 Notes 1-4)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "biographical_memoirs_and_institutional_records",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Corroborated by Arya Samaj institutional histories and Bhagat Singh's own autobiographical writings."
      }
    ],
    source_evidence: [
      "Swami Dayanand was the first to proclaim 'Swaraj' in 1876, long before the Indian National Congress adopted the concept.",
      "Arjan Singh was a devout Arya Samajist who brought up his sons Kishan Singh, Ajit Singh and Swaran Singh in an atmosphere of robust independent thinking."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "ideological", description: "Samaj roots well established." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000194", "bhasin0000195", "bhasin0000196", "bhasin0000197", "bhasin0000198", "bhasin0000199", "bhasin0000200", "bhasin0000201"],
      notes_referenced: ["notes.xhtml#bhasin0001203", "notes.xhtml#bhasin0001206"],
      archival_citations: ["Arya Samaj Punjab Reports, Lahore"]
    },
    genre_specific_payload: {
      setting: "Punjab during the late 19th century Arya Samaj revival.",
      documented_actions: [
        "Dayanand Saraswati visits Punjab and articulates Swaraj as indigenous self-governance.",
        "Arjan Singh dedicates his sons to national service.",
        "The family blends Vedic reformism with agrarian solidarity."
      ],
      outcomes: [
        "Inculcation of fearless questioning and anti-feudal attitudes in the Sandhu household."
      ],
      historical_significance: "Supplies the intellectual bridge connecting 19th-century religious reform with 20th-century secular anti-imperialism."
    }
  },
  {
    unit_id: "KU-BS-CH03-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter003.xhtml",
      chapter_number: 3,
      chapter_title: "3. 1887, Chenab Colony",
      element_ids: ["bhasin0000202", "bhasin0000203", "bhasin0000204", "bhasin0000205", "bhasin0000206", "bhasin0000207", "bhasin0000208", "bhasin0000209", "bhasin0000210", "bhasin0000211", "bhasin0000212", "bhasin0000213", "bhasin0000214", "bhasin0000215"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "3. 1887, Chenab Colony"
    },
    title: "1887, Chenab Colony: The Hydraulic State, Land Grants, and Colonist Exploitation",
    summary_statement: "Analyzes the British colonial creation of the Chenab Canal Colony in Western Punjab in 1887, transforming arid scrubland into productive wheat farmland through engineering, while imposing draconian bureaucratic regulations that reduced peasant proprietors to tenants of the Crown.",
    materiality: "important",
    materiality_reason: "Provides the socioeconomic and agrarian structural foundation for the 1907 Punjab unrest led by Ajit Singh.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1887–1900",
      date_iso_estimated: "1887-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 5,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1887–1900", context: "Canal construction, Lower Chenab Colony inception, and allotment of Chaks in Lyallpur." },
      record_revelation_time: { date_raw: "1890s", context: "Colonial Revenue Reports and Land Settlement papers." },
      source_time: { publication_year: 2022, author_analysis: "Juss uses agrarian economic history to prove Punjab was an exploited garrison state." }
    },
    context: {
      micro_context: "Chak No. 105 GB, Banga, Lyallpur district.",
      meso_context: "British Punjab Colonisation Department imposing strict sanitary, tree-planting, and residence rules.",
      macro_context: "Colonial state seeking revenue and military recruitment reserves from canal irrigation schemes."
    },
    entities: [
      { entity_id: "ENT-BRIT-PUNJAB", name: "Punjab Colonial Administration", role: "Colonial state apparatus", type: "institution" },
      { entity_id: "ENT-ARJAN", name: "Sardar Arjan Singh", role: "Grantee colonist", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH04-01", relationship_type: "explains", nature: "Explains why the 1906 Colonisation Bill triggered massive peasant outrage." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH04-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bureaucratic interference in the canal colonies created the grievances culminating in the 1906 Bill.",
        provenance: "chapter003.xhtml / notes.xhtml (Ch. 3 Notes 1-14)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_land_records",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "British parliamentary papers and Punjab Colonisation Reports verify the bureaucratic restrictions."
      }
    ],
    source_evidence: [
      "The Chenab Canal Colony was the largest and most ambitious colonisation scheme in British India.",
      "The peasant colonists, who had cleared the wilderness and built canal villages with their own labor, found themselves subjected to petty administrative tyranny."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "economic_history", description: "Economic and hydraulic facts well verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000202", "bhasin0000203", "bhasin0000204", "bhasin0000205", "bhasin0000206", "bhasin0000207", "bhasin0000208", "bhasin0000209", "bhasin0000210", "bhasin0000211", "bhasin0000212", "bhasin0000213", "bhasin0000214", "bhasin0000215"],
      notes_referenced: ["notes.xhtml#bhasin0001207", "notes.xhtml#bhasin0001220"],
      archival_citations: ["Chenab Colony Gazetteer 1904", "IOR L/E/7/Punjab Canal Reports"]
    },
    genre_specific_payload: {
      setting: "Reclaimed lands of the Rechna Doab, Lyallpur.",
      documented_actions: [
        "Allotment of lands to select peasant grantees from central Punjab (Jalandhar, Amritsar, Gurdaspur).",
        "Imposition of strict succession laws preventing division among heirs.",
        "Arbitrary fines levied by petty revenue officers for minor infractions."
      ],
      outcomes: [
        "Deep resentment among peasant proprietors against the colonial administration."
      ],
      historical_significance: "Established the agrarian tension that erupted into the landmark 1907 Punjab political agitation."
    }
  },
  {
    unit_id: "KU-BS-CH04-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter004.xhtml",
      chapter_number: 4,
      chapter_title: "4. 1906, Land Colonisation Bill",
      element_ids: ["bhasin0000216", "bhasin0000217", "bhasin0000218", "bhasin0000219", "bhasin0000220", "bhasin0000221", "bhasin0000222", "bhasin0000223", "bhasin0000224", "bhasin0000225", "bhasin0000226", "bhasin0000227", "bhasin0000228", "bhasin0000229", "bhasin0000230", "bhasin0000231", "bhasin0000232"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "4. 1906, Land Colonisation Bill"
    },
    title: "1906, Land Colonisation Bill: Statutory Dispossession and Primogeniture",
    summary_statement: "Exposes the Punjab Land Colonisation Bill 1906, introduced in the Punjab Legislative Council, which altered land tenure by enforcing primogeniture, restricting timber rights, and empowering bureaucratic confiscation of peasant lands.",
    materiality: "critical",
    materiality_reason: "Direct legislative trigger for the 1907 peasant movement and the politicization of Bhagat Singh's family.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "Autumn 1906",
      date_iso_estimated: "1906-10-01",
      precision: "approximate_month",
      chronological_sequence_index: 6,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "October 1906", context: "Introduction and passage of the Bill in the Punjab Legislative Council." },
      record_revelation_time: { date_raw: "1906", context: "Published in Punjab Government Gazette." },
      source_time: { publication_year: 2022, author_analysis: "Juss draws parallels between the 1906 Land Colonisation Bill and the 2020-21 Indian Farmers' Movement." }
    },
    context: {
      micro_context: "Legislative chambers in Lahore vs peasant holdings across Lyallpur chaks.",
      meso_context: "Colonial executive's attempt to override customary inheritance rights in favor of state control.",
      macro_context: "Imperial revenue maximization following the 1905 Partition of Bengal."
    },
    entities: [
      { entity_id: "ENT-SIR-CHARLES", name: "Sir Charles Rivaz", role: "Lieutenant-Governor of Punjab", type: "person" },
      { entity_id: "ENT-AJIT", name: "Sardar Ajit Singh", role: "Organizing nationalist", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH05-01", relationship_type: "continues", nature: "Sparked the formation of the Bharat Mata Society." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH06-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Passage of the 1906 Bill caused the massive protest rallies in Lyallpur, Rawalpindi, and Lahore.",
        provenance: "chapter004.xhtml / notes.xhtml (Ch. 4 Notes 1-18)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "legislative_statute_and_gazette",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Text of Punjab Land Colonisation Bill 1906 fully documented in Punjab Council debates."
      }
    ],
    source_evidence: [
      "The Bill altered the entire relationship between the colonist and the government. It reduced the peasant from an owner to a tenant.",
      "It forbade the colonist from felling trees on his land, prohibited alienation of property, and mandated strict primogeniture."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "statutory", description: "Legislative text fully preserved." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000216", "bhasin0000217", "bhasin0000218", "bhasin0000219", "bhasin0000220", "bhasin0000221", "bhasin0000222", "bhasin0000223", "bhasin0000224", "bhasin0000225", "bhasin0000226", "bhasin0000227", "bhasin0000228", "bhasin0000229", "bhasin0000230", "bhasin0000231", "bhasin0000232"],
      notes_referenced: ["notes.xhtml#bhasin0001221", "notes.xhtml#bhasin0001224"],
      archival_citations: ["Punjab Legislative Council Proceedings, October 1906", "Punjab Act of 1906"]
    },
    genre_specific_payload: {
      setting: "Punjab Legislative Council, Lahore.",
      documented_actions: [
        "Enactment of legislation extinguishing proprietary peasant rights.",
        "Imposition of state sanctions against tree-felling and unapproved construction.",
        "Unilateral alteration of grant conditions established in the 1893 rules."
      ],
      outcomes: [
        "Unification of Hindu, Muslim, and Sikh peasantry against the Punjab colonial administration."
      ],
      historical_significance: "Crucial catalyst transforming economic grievance into militant political resistance in Punjab."
    }
  },
  {
    unit_id: "KU-BS-CH05-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter005.xhtml",
      chapter_number: 5,
      chapter_title: "5. Rebel Blood",
      element_ids: ["bhasin0000233", "bhasin0000234", "bhasin0000235", "bhasin0000236", "bhasin0000237", "bhasin0000238", "bhasin0000239", "bhasin0000240", "bhasin0000241", "bhasin0000242"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "5. Rebel Blood"
    },
    title: "Rebel Blood: The Bharat Mata Society, Ajit Singh, and 'Pagri Sambhal Jatta'",
    summary_statement: "Documents the founding of the Bharat Mata Society (Anjuman-i-Muhibban-i-Watan) by Sardar Ajit Singh, Kishan Singh, and Sufi Amba Prasad in 1906-07, and the popularization of Banke Dayal's revolutionary anthem 'Pagri Sambhal Jatta'.",
    materiality: "critical",
    materiality_reason: "Exposes the institutional vehicle of revolutionary nationalist mobilization in Punjab.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "March 1907",
      date_iso_estimated: "1907-03-01",
      precision: "exact",
      chronological_sequence_index: 7,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "March 1907", context: "Historic Lyallpur meeting where Banke Dayal recited 'Pagri Sambhal Jatta'." },
      record_revelation_time: { date_raw: "1907", context: "British CID surveillance reports and banned pamphlet collections." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents how Ajit Singh pioneered the secular alliance of peasants and urban intelligentsia." }
    },
    context: {
      micro_context: "Lyallpur grain market meeting attended by thousands of farmers.",
      meso_context: "Colonial intelligence tracking secret societies and vernacular anti-tax pamphlets.",
      macro_context: "Punjab agrarian agitation threatening army recruitment loyalty."
    },
    entities: [
      { entity_id: "ENT-AJIT", name: "Sardar Ajit Singh", role: "Leader and orator", type: "person" },
      { entity_id: "ENT-BANKE", name: "Banke Dayal", role: "Poet and editor of Jhang Sial", type: "person" },
      { entity_id: "ENT-AMBA", name: "Sufi Amba Prasad", role: "Revolutionary journalist", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH06-01", relationship_type: "continues", nature: "Led directly to state repression and deportation of Ajit Singh." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH06-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Speeches by Ajit Singh at Lyallpur directly caused the colonial government to issue deportation warrants.",
        provenance: "chapter005.xhtml / notes.xhtml (Ch. 5 Notes 1-8)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "police_special_branch_reports",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "British intelligence files verbatim transcribe Ajit Singh's speeches and Dayal's poem."
      }
    ],
    source_evidence: [
      "Pagri sambhal jatta, pagri sambhal oye / Lut leya maal tera, lut leya maal oye (Guard your turban, O peasant, guard your turban / Your wealth has been plundered, your harvest stolen).",
      "Ajit Singh's fiery speeches directly attacked the British as foreign plunderers who had disarmed the population."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "textual", description: "Poem and organizational minutes verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000233", "bhasin0000234", "bhasin0000235", "bhasin0000236", "bhasin0000237", "bhasin0000238", "bhasin0000239", "bhasin0000240", "bhasin0000241", "bhasin0000242"],
      notes_referenced: ["notes.xhtml#bhasin0001225", "notes.xhtml#bhasin0001232"],
      archival_citations: ["National Archives of India, Home Political (Deposit), July 1907", "Sardar Ajit Singh, Buried Alive"]
    },
    genre_specific_payload: {
      setting: "Lyallpur, Rawalpindi, and Lahore public squares.",
      documented_actions: [
        "Founding of Anjuman-i-Muhibban-i-Watan (Bharat Mata Society) in Lahore.",
        "Banke Dayal recites 'Pagri Sambhal Jatta' at the 3 March 1907 Lyallpur rally.",
        "Mass circulation of anti-tax propaganda urging peasants to withhold land revenue."
      ],
      outcomes: [
        "Unprecedented peasant mobilization across communal lines threatening colonial stability in Punjab."
      ],
      historical_significance: "Created the political and emotional vernacular of rural rebellion in Punjab, directly inherited by Bhagat Singh."
    }
  },
  {
    unit_id: "KU-BS-CH06-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter006.xhtml",
      chapter_number: 6,
      chapter_title: "6. 1907, Canal Colonies Disturbance",
      element_ids: ["bhasin0000243", "bhasin0000244", "bhasin0000245", "bhasin0000246", "bhasin0000247", "bhasin0000248", "bhasin0000249", "bhasin0000250", "bhasin0000251"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "6. 1907, Canal Colonies Disturbance"
    },
    title: "1907, Canal Colonies Disturbance: Riots, Mandalay Deportations, and Imperial Retreat",
    summary_statement: "Chronicles the May 1907 riots in Lahore and Rawalpindi, the arrest and deportation of Lala Lajpat Rai and Sardar Ajit Singh to Mandalay under Regulation III of 1818, and Lord Minto's subsequent imperial veto of the Colonisation Bill to pacify Sikh soldiers.",
    materiality: "critical",
    materiality_reason: "Demonstrates that mass militant mobilization forced an imperial legislative veto, establishing a lesson in revolutionary coercion.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "May–November 1907",
      date_iso_estimated: "1907-05-09",
      precision: "exact",
      chronological_sequence_index: 8,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "May 1907", context: "Rioting in Lahore/Rawalpindi and deportation orders signed by Lord Minto." },
      record_revelation_time: { date_raw: "May 1907", context: "Reported in London Times and official dispatches." },
      source_time: { publication_year: 2022, author_analysis: "Juss shows how the colonial state was terrified of disaffection spreading to Punjabi soldiers in the Indian Army." }
    },
    context: {
      micro_context: "Street riots in Lahore; stone throwing at European officers; Rawalpindi lawyer strikes.",
      meso_context: "Invocation of archaic autocratic powers under Bengal Regulation III of 1818.",
      macro_context: "50th anniversary of the 1857 Rebellion causing acute colonial panic of military insurrection."
    },
    entities: [
      { entity_id: "ENT-MINTO", name: "Lord Minto", role: "Viceroy of India", type: "person" },
      { entity_id: "ENT-LAJPAT", name: "Lala Lajpat Rai", role: "Nationalist leader", type: "person" },
      { entity_id: "ENT-AJIT", name: "Sardar Ajit Singh", role: "Revolutionary organizer", type: "person" },
      { entity_id: "ENT-KITCHENER", name: "Lord Kitchener", role: "Commander-in-Chief", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH01-01", relationship_type: "explains", nature: "Directly explains why Bhagat Singh was named 'Bhaganwala' upon his birth in September 1907." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH01-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Ajit Singh's release from Mandalay in November 1907 coincided with Bhagat Singh's infancy celebrations.",
        provenance: "chapter006.xhtml / notes.xhtml (Ch. 6 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "viceregal_dispatches_and_cabinet_papers",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Lord Minto's personal telegrams to John Morley confirm fear of army mutiny as sole reason for veto."
      }
    ],
    source_evidence: [
      "Lord Minto refused his assent to the Colonisation Bill, confessing in private letters that the disaffection of the Sikh peasantry threatened the loyalty of the native army.",
      "Lajpat Rai and Ajit Singh were arrested under Regulation III of 1818 and deported without trial to Mandalay in Burma."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "imperial_policy", description: "Veto documents fully preserved in British Cabinet archives." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000243", "bhasin0000244", "bhasin0000245", "bhasin0000246", "bhasin0000247", "bhasin0000248", "bhasin0000249", "bhasin0000250", "bhasin0000251"],
      notes_referenced: ["notes.xhtml#bhasin0001233", "notes.xhtml#bhasin0001242"],
      archival_citations: ["IOR MSS Eur D573/ Morley-Minto Correspondence", "Punjab Fortnightly Reports, May 1907"]
    },
    genre_specific_payload: {
      setting: "Lahore, Rawalpindi, and Mandalay Prison (Burma).",
      documented_actions: [
        "Attacks on British officials and commercial houses in Lahore and Rawalpindi.",
        "Summary deportation of Lajpat Rai on 9 May 1907 and Ajit Singh on 2 June 1907.",
        "Lord Minto exercises viceregal veto on 26 May 1907, disallowing the Colonisation Bill."
      ],
      outcomes: [
        "Historic victory for Punjabi peasant agitation; release of deportees in November 1907."
      ],
      historical_significance: "Demonstrated to the young Bhagat Singh that resolute, fearless mass resistance could force the British Empire to capitulate."
    }
  },
  {
    unit_id: "KU-BS-CH07-01",
    unit_type: "LIFE_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter007.xhtml",
      chapter_number: 7,
      chapter_title: "7. 1917, Lahore",
      element_ids: ["bhasin0000252", "bhasin0000253", "bhasin0000254", "bhasin0000255", "bhasin0000256", "bhasin0000257", "bhasin0000258", "bhasin0000259", "bhasin0000260", "bhasin0000261", "bhasin0000262", "bhasin0000263"]
    },
    structural_position: {
      part: "PART 1: KHATKAR KALYAN, BANGA AND LAHORE",
      chapter: "7. 1917, Lahore"
    },
    title: "1917, Lahore: Education at D.A.V. School, Early Intellect, and Kartar Singh Sarabha's Martyrdom",
    summary_statement: "Covers Bhagat Singh's schooling at Dayanand Anglo-Vedic (D.A.V.) High School in Lahore, avoiding government-run schools, his voracious reading habits, linguistic mastery of Urdu, Hindi, Punjabi, and English, and the profound emotional impact of the execution of 19-year-old Ghadarite Kartar Singh Sarabha in 1915.",
    materiality: "critical",
    materiality_reason: "Documents the formative intellectual and emotional influences shaping Bhagat Singh's heroic self-image.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1915–1917",
      date_iso_estimated: "1917-01-01",
      precision: "approximate_year",
      chronological_sequence_index: 9,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1915–1917", context: "Studies at D.A.V. High School, Lahore." },
      record_revelation_time: { date_raw: "1920s", context: "Recollections by classmates and family members." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights Sarabha's photograph carried in Bhagat Singh's pocket as a talisman." }
    },
    context: {
      micro_context: "D.A.V. School classrooms, boarding house, and family home in Lahore.",
      meso_context: "Ghadar Conspiracy trials in Lahore Central Jail resulting in mass hangings.",
      macro_context: "World War I, imperial wartime defense ordinances, and global Ghadar uprising."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "School student and budding radical", type: "person" },
      { entity_id: "ENT-SARABHA", name: "Kartar Singh Sarabha", role: "Martyred Ghadar hero", type: "person" },
      { entity_id: "ENT-BHAI-PARMANAND", name: "Bhai Parmanand", role: "Teacher and intellectual", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH13-01", relationship_type: "continues", nature: "Leads to deeper immersion in the Ghadar revolutionary legacy." },
      { target_unit_id: "KU-BS-CH44-01", relationship_type: "anticipates", nature: "Anticipates Bhagat Singh's lifelong veneration of Sarabha." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH44-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Bhagat Singh carried Sarabha's photo throughout his life and sang his verses in prison.",
        provenance: "chapter007.xhtml / notes.xhtml (Ch. 7 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "school_records_and_contemporary_memoirs",
        temporal_proximity: "near_term",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Corroborated by sister Amar Kaur and brother Kultar Singh."
      }
    ],
    source_evidence: [
      "Bhagat Singh did not enter a government school because his grandfather Arjan Singh refused to send him to an institution that fostered loyalty to the British Crown.",
      "The martyrdom of Kartar Singh Sarabha on 16 November 1915, when Sarabha was barely nineteen, left an indelible mark on Bhagat Singh."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "biographical", description: "Schooling and Sarabha influence universally documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000252", "bhasin0000253", "bhasin0000254", "bhasin0000255", "bhasin0000256", "bhasin0000257", "bhasin0000258", "bhasin0000259", "bhasin0000260", "bhasin0000261", "bhasin0000262", "bhasin0000263"],
      notes_referenced: ["notes.xhtml#bhasin0001243", "notes.xhtml#bhasin0001252"],
      archival_citations: ["D.A.V. College Trust Records, Lahore", "Kultar Singh Oral History Transcript"]
    },
    genre_specific_payload: {
      subject: "Bhagat Singh",
      lived_experience: "Youthful immersion in nationalist literature and admiration for youthful martyrs.",
      dilemma: "Conventional scholastic career vs total dedication to armed national liberation.",
      decision: "Rejection of colonial service or comfortable bourgeois domesticity.",
      consequence: "Intellectual alignment with militant underground and literary mastery.",
      worldview_shift: "Transition from Arya Samaj cultural nationalism to radical anti-imperialist commitment."
    }
  }
];
