/**
 * BKRS Milestone 3 - Part 10 & Part 11 Units
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 * Incorporates Qualified Constraints: VAL-HIST-D6-40, VAL-HIST-D6-41
 */

module.exports = [
  // --- PART 10: EFFICIENT DESPOTISM ---
  {
    unit_id: "KU-BS-CH48-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter048.xhtml",
      chapter_number: 48,
      chapter_title: "48. The Privy Council Appeal",
      element_ids: ["bhasin0000787", "bhasin0000788", "bhasin0000789", "bhasin0000790", "bhasin0000791", "bhasin0000792", "bhasin0000793", "bhasin0000794", "bhasin0000795"]
    },
    structural_position: {
      part: "PART 10: EFFICIENT DESPOTISM",
      chapter: "48. The Privy Council Appeal"
    },
    title: "The Privy Council Appeal: D.N. Pritt’s Challenge to Section 72 and Judicial Abdication",
    summary_statement: "Details the historic petition for special leave to appeal filed before the Judicial Committee of the Privy Council in London by renowned socialist barrister D.N. Pritt KC (Plates 14 & 15 / App), challenging Ordinance III of 1930 as ultra vires because no factual emergency existed under Section 72, and the Privy Council's dismissal on 11 February 1931 establishing that the Governor-General is the sole judge of an emergency.",
    materiality: "critical",
    materiality_reason: "The final imperial appellate showdown cementing the statutory despotism of colonial emergency jurisprudence.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "December 1930 – 11 February 1931",
      date_iso_estimated: "1931-02-11",
      precision: "exact",
      chronological_sequence_index: 50,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "11 February 1931", context: "Judgment delivered in the Privy Council chamber, Whitehall, London." },
      record_revelation_time: { date_raw: "February 1931", context: "Reported in Law Reports (Indian Appeals) and global press." },
      source_time: { publication_year: 2022, author_analysis: "Juss dissects Lord Dunedin's ruling as the definitive triumph of executive supremacy over judicial oversight." }
    },
    context: {
      micro_context: "Privy Council courtroom, Downing Street, London; D.N. Pritt KC arguing before five law lords.",
      meso_context: "Appellate challenge seeking to declare the entire Lahore Special Tribunal unconstitutional.",
      macro_context: "British imperial judiciary protecting the unfettered executive powers of the Viceroy."
    },
    entities: [
      { entity_id: "ENT-PRITT", name: "D.N. Pritt KC", role: "Leading British socialist barrister for petitioners", type: "person" },
      { entity_id: "ENT-DUNEDIN", name: "Lord Dunedin", role: "Lord of Appeal in Ordinary delivering judgment", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Petitioner (represented by Pritt)", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH26-01", relationship_type: "continues", nature: "Provides the highest judicial confirmation of the doctrine of Section 72." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH50-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The dismissal of the Privy Council appeal on 11 February 1931 exhausted all legal remedies, shifting the entire focus to political commutation through the Gandhi-Irwin talks.",
        provenance: "chapter048.xhtml / notes.xhtml (Ch. 48 Notes 1-12)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_privy_council_judgment_and_petition",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "judicial_officer",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Privy Council Appeal Record (Plates 14 & 15 / App) and reported judgment (LR 58 IA 169)."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Lord Dunedin's Ruling (11 February 1931): 'The Governor-General is the sole judge of whether an emergency exists and of the measures to be taken to meet it... An emergency is something which cannot be defined in a court of law.'",
      "Pritt argued brilliantly that Section 72 required an objective emergency threatening peace and good government, and that the routine functioning of a criminal court could never justify extinguishing the basic right to appeal."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_precedent", description: "Judgment text officially published and universally recognized." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000787", "bhasin0000788", "bhasin0000789", "bhasin0000790", "bhasin0000791", "bhasin0000792", "bhasin0000793", "bhasin0000794", "bhasin0000795"],
      notes_referenced: ["notes.xhtml#bhasin0001775", "notes.xhtml#bhasin0001786"],
      archival_citations: ["Plate 14 & 15 (Appendix), Privy Council Petition and Order", "Bhagat Singh v. The King-Emperor (1931) LR 58 IA 169"]
    },
    genre_specific_payload: {
      setting: "Judicial Committee of the Privy Council, London.",
      documented_actions: [
        "Pritt files petition arguing Ordinance III was unconstitutional and beyond the legislative competency of the Governor-General.",
        "Lord Dunedin interrupts repeatedly, asserting that the Crown cannot be second-guessed on matters of imperial security.",
        "Summary dismissal of the petition without requiring the Crown's counsel to reply."
      ],
      outcomes: [
        "Final judicial seal placed on the death warrants; execution becomes legally inevitable absent viceregal clemency."
      ],
      historical_significance: "Established the imperial legal doctrine that executive emergency decrees in India were completely immune from common-law judicial review."
    }
  },
  {
    unit_id: "KU-BS-CH49-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter049.xhtml",
      chapter_number: 49,
      chapter_title: "49. A ‘Historical Adjustment’",
      element_ids: ["bhasin0000796", "bhasin0000797", "bhasin0000798", "bhasin0000799", "bhasin0000800", "bhasin0000801", "bhasin0000802", "bhasin0000803", "bhasin0000804"]
    },
    structural_position: {
      part: "PART 10: EFFICIENT DESPOTISM",
      chapter: "49. A ‘Historical Adjustment’"
    },
    title: "A ‘Historical Adjustment’: Police Morale, Imperial Prestige, and the Demands of the Civil Service",
    summary_statement: "Exposes the internal bureaucratic and police pressures operating upon Viceroy Irwin: Punjab Governor Sir Geoffrey de Montmorency and senior police officers threatened mass resignations if Bhagat Singh's death sentence was commuted, arguing that Saunders' assassination demanded blood restitution to preserve the loyalty of the colonial police force.",
    materiality: "critical",
    materiality_reason: "Identifies the decisive institutional constraint that precluded any viceregal clemency regardless of Gandhi's representations.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "February–March 1931",
      date_iso_estimated: "1931-03-01",
      precision: "approximate_month",
      chronological_sequence_index: 51,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "March 1931", context: "Confidential conferences between Viceroy Irwin and Punjab Governor de Montmorency." },
      record_revelation_time: { date_raw: "1931", context: "Secret political files in India Office Records, London." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths police intelligence minutes showing Irwin's hands were tied by his own police establishment." }
    },
    context: {
      micro_context: "Viceregal Lodge, Delhi, and Government House, Lahore.",
      meso_context: "Punjab Police officers warning that commuting Saunders' killers would shatter their morale during ongoing Civil Disobedience.",
      macro_context: "The imperial security apparatus demanding retribution as a non-negotiable condition for supporting constitutional reforms."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy balancing politics and police loyalty", type: "person" },
      { entity_id: "ENT-MONTMORENCY", name: "Sir Geoffrey de Montmorency", role: "Governor of Punjab", type: "person" },
      { entity_id: "ENT-EMERSON", name: "Herbert Emerson", role: "Home Secretary, Government of India", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH50-01", relationship_type: "explains", nature: "Explains why Irwin firmly rejected Gandhi's commutation requests." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH51-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "Punjab Governor de Montmorency's explicit warning to Irwin that the police would mutiny or resign if commutation was granted.",
        provenance: "chapter049.xhtml / notes.xhtml (Ch. 49 Notes 1-16)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "confidential_letters_and_cabinet_memoranda",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "confidential_private",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "De Montmorency's letters to Irwin preserved in Halifax Papers (British Library MSS Eur C152)."
      }
    ],
    source_evidence: [
      "The Punjab Government and the police officers made it abundantly clear to Lord Irwin that any commutation of the death sentences of Saunders' murderers would be regarded as an act of treachery by the Viceroy.",
      "The execution was a 'historical adjustment'—a blood debt that the colonial state felt compelled to collect to preserve the integrity of its coercive apparatus."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "bureaucratic_pressure", description: "Internal dispatches and police warnings fully documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000796", "bhasin0000797", "bhasin0000798", "bhasin0000799", "bhasin0000800", "bhasin0000801", "bhasin0000802", "bhasin0000803", "bhasin0000804"],
      notes_referenced: ["notes.xhtml#bhasin0001787", "notes.xhtml#bhasin0001802"],
      archival_citations: ["Halifax Papers, MSS Eur C152/19, Letters from Governor of Punjab to Viceroy, March 1931"]
    },
    genre_specific_payload: {
      setting: "Government House, Lahore, and Viceroy's Camp, Delhi.",
      documented_actions: [
        "Punjab police commanders threaten collective resignation if Saunders' killers are spared.",
        "Governor de Montmorency informs Irwin that the provincial administration cannot guarantee security if clemency is extended.",
        "Irwin resolves that while he could tolerate political outcry from the Congress, he could not risk the collapse of police obedience."
      ],
      outcomes: [
        "Total foreclosure of any administrative or royal commutation."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's death was dictated by the structural dependence of the colonial state on its armed police force."
    }
  },
  {
    unit_id: "KU-BS-CH50-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter050.xhtml",
      chapter_number: 50,
      chapter_title: "50. The Gandhi–Irwin Pact 1931",
      element_ids: ["bhasin0000805", "bhasin0000806", "bhasin0000807", "bhasin0000808", "bhasin0000809", "bhasin0000810", "bhasin0000811"]
    },
    structural_position: {
      part: "PART 10: EFFICIENT DESPOTISM",
      chapter: "50. The Gandhi–Irwin Pact 1931"
    },
    title: "The Gandhi–Irwin Pact 1931: The Contested Private Talks and the Commutation Dilemma",
    summary_statement: "Examines the signing of the Gandhi-Irwin Pact on 5 March 1931, suspending Civil Disobedience and releasing non-violent prisoners while excluding revolutionary convicts; details the competing, irreconcilable accounts of Gandhi and Irwin's private conversations regarding Bhagat Singh; and examines the major historiographical dispute over whether Gandhi could have made commutation an absolute condition of the settlement.",
    materiality: "critical",
    materiality_reason: "Governed by mandatory qualifications VAL-HIST-D6-40 (conflicting accounts of private talks) and VAL-HIST-D6-41 (commutation leverage historiographical dispute).",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "17 February – 5 March 1931",
      date_iso_estimated: "1931-03-05",
      precision: "exact",
      chronological_sequence_index: 52,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "5 March 1931", context: "Pact signed in New Delhi." },
      record_revelation_time: { date_raw: "March 1931", context: "Pact published; Irwin's confidential diary entries written." },
      source_time: { publication_year: 2022, author_analysis: "Juss compares Irwin's personal minutes (Plate 17 / App) with nationalist memoirs." }
    },
    context: {
      micro_context: "Viceroy's private study, New Delhi; Gandhi and Irwin conferring alone without secretaries.",
      meso_context: "Terms of the Delhi settlement negotiated clause-by-clause over three weeks.",
      macro_context: "Nationwide clamor demanding that Gandhi condition any settlement on saving Bhagat Singh's life."
    },
    entities: [
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Congress plenipotentiary", type: "person" },
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy of India", type: "person" },
      { entity_id: "ENT-BOSE-SUBHAS", name: "Subhas Chandra Bose", role: "Left nationalist leader critic of pact", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH51-01", relationship_type: "continues", nature: "Leads directly to the execution timing controversy in Chapter 51." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH51-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The exclusion of revolutionary prisoners from the Pact left the colonial government free to carry out the death sentences.",
        provenance: "chapter050.xhtml / notes.xhtml (Ch. 50 Notes 1-10)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "official_treaty_text_and_viceregal_diary",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "confidential_private",
        corroboration_state: "directly_conflicted_by_counter_evidence",
        evidentiary_reliability_assessment: "Irwin's private minute of 18 Feb 1931 (Plate 17 / App) and Gandhi's contemporary statements in Young India exhibit irreconcilable divergence on the degree of pressure exerted."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Lord Irwin's Confidential Minute (18 Feb 1931, Plate 17): 'In the course of conversation, Gandhi mentioned the case of Bhagat Singh... He did not plead for commutation, though he would naturally desire it, but asked whether postponing execution was possible.'",
      "[COMPETING_ACCOUNT / NATIONALIST RECOLLECTIONS] Gandhi's post-Karachi statements and Congress accounts assert that Gandhi pleaded earnestly for clemency on moral grounds, warning Irwin that hanging the boys would destroy peace and permanently poison Anglo-Indian relations.",
      "[HISTORIOGRAPHICAL_SPLIT] Subhas Chandra Bose and youth leaders argued that Gandhi held supreme political leverage and that had he insisted on commutation as an ultimatum, Irwin would have capitulated. Conversely, Gandhian defenders argue Irwin would have broken off talks, destroying the truce, and that Gandhi's satyagraha doctrine forbade conditioning a national agreement on sparing violent revolutionaries."
    ],
    competing_accounts: [
      {
        contested_issue: "Conflicting versions of the private discussions between Gandhi and Irwin concerning Bhagat Singh's commutation (VAL-HIST-D6-40).",
        accounts: [
          {
            claim_id: "CLAIM-IRWIN-DIARY",
            source_text: "Lord Irwin's Personal Minute (18 February 1931, Plate 17 / Appendix)",
            assertion: "Gandhi brought up Bhagat Singh's case informally; did not press for commutation as a condition of the pact; merely inquired whether execution could be postponed until after the Karachi Congress session.",
            witness_or_document: "Halifax Papers & Viceregal Official Minute",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "confidential_private"
            }
          },
          {
            claim_id: "CLAIM-GANDHI-NATIONALIST",
            source_text: "Mahatma Gandhi, Young India (March 1931) and D.G. Tendulkar, Mahatma",
            assertion: "Gandhi pleaded with all the moral force at his command, arguing that clemency would win over the revolutionary youth and advance the cause of non-violence, returning to the subject repeatedly in their talks.",
            witness_or_document: "Contemporary speeches and memoirs of Mahadev Desai",
            evidence_assessment: {
              temporal_proximity: "contemporaneous",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "unresolved_contradiction",
        system_synthesis: "BKRS strictly preserves both accounts: Irwin's official private minute records that Gandhi never made commutation a deal-breaker, while Gandhi and his associates insisted he pleaded passionately within the ethical boundaries of non-violence."
      },
      {
        contested_issue: "Whether Gandhi could have made the commutation of Bhagat Singh's death sentence an absolute condition of the Gandhi-Irwin Pact (VAL-HIST-D6-41).",
        accounts: [
          {
            claim_id: "CLAIM-BOSE-LEVERAGE",
            source_text: "Subhas Chandra Bose, The Indian Struggle (1935)",
            assertion: "Gandhi had immense bargaining power; the British were desperate for Congress participation in the Round Table Conference; had Gandhi made commutation an ultimatum, the British would have yielded.",
            witness_or_document: "Subhas Chandra Bose & Youth League leaders",
            evidence_assessment: {
              temporal_proximity: "near_term",
              coercive_context: "voluntary_public"
            }
          },
          {
            claim_id: "CLAIM-GANDHI-DEFENSE",
            source_text: "B.R. Nanda, Gandhi and His Critics & Juss (2022)",
            assertion: "Irwin was bound by Punjab police threats of resignation and would have terminated talks immediately; moreover, conditioning a peace pact on sparing violent actors would have fundamentally compromised Gandhi's lifelong philosophical commitment to Satyagraha.",
            witness_or_document: "Historical scholarship and Viceregal correspondence",
            evidence_assessment: {
              temporal_proximity: "retrospective_decades_later",
              coercive_context: "voluntary_public"
            }
          }
        ],
        historiographical_status: "historiographical_split",
        system_synthesis: "BKRS preserves the profound historical split: the radical nationalist thesis holds that Gandhi sacrificed Bhagat Singh to secure a bourgeois truce, while the constitutional-philosophical thesis holds that Gandhi lacked the institutional power to override imperial police demands and could not violate his own creed."
      }
    ],
    uncertainty: { degree: "low", type: "historiographical_dispute", description: "The factual texts of the Pact and minutes are verified; the disagreement lies in competing accounts of private words and political counterfactuals." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000805", "bhasin0000806", "bhasin0000807", "bhasin0000808", "bhasin0000809", "bhasin0000810", "bhasin0000811"],
      notes_referenced: ["notes.xhtml#bhasin0001803", "notes.xhtml#bhasin0001812"],
      archival_citations: ["Plate 17 (Appendix), Viceroy's Minute on Talks with Gandhi", "Gandhi-Irwin Agreement, 5 March 1931"]
    },
    genre_specific_payload: {
      setting: "Viceroy's House, New Delhi.",
      documented_actions: [
        "Gandhi and Irwin conclude twenty-four days of private talks.",
        "Amnesty granted only to prisoners convicted of non-violent infractions.",
        "Bhagat Singh, Sukhdev, and Rajguru expressly excluded from clemency.",
        "Gandhi signs the agreement, triggering immediate protests among youth leagues across India."
      ],
      outcomes: [
        "Suspension of the mass movement; clearing of the legal and political path for the hanging of Bhagat Singh."
      ],
      historical_significance: "The definitive political moment that permanently divided Gandhian nationalism from revolutionary socialist republicanism."
    }
  },
  {
    unit_id: "KU-BS-CH51-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter051.xhtml",
      chapter_number: 51,
      chapter_title: "51. ‘If the Boys Are to be Hanged’",
      element_ids: ["bhasin0000812", "bhasin0000813", "bhasin0000814", "bhasin0000815", "bhasin0000816", "bhasin0000817", "bhasin0000818", "bhasin0000819", "bhasin0000820", "bhasin0000821", "bhasin0000822", "bhasin0000823", "bhasin0000824", "bhasin0000825", "bhasin0000826", "bhasin0000827", "bhasin0000828", "bhasin0000829", "bhasin0000830"]
    },
    structural_position: {
      part: "PART 10: EFFICIENT DESPOTISM",
      chapter: "51. ‘If the Boys Are to be Hanged’"
    },
    title: "‘If the Boys Are to be Hanged’: The Emerson–Gandhi Talks and the Execution Timing Controversy",
    summary_statement: "Examines the controversial meetings between Mahatma Gandhi and Home Secretary Herbert Emerson on 19 and 20 March 1931 (Plate 16 / App) regarding execution timing; Emerson's confidential minute recording that Gandhi discussed whether it was better to hang the boys before the Karachi Congress or postpone execution; and the hostile reception Gandhi received at Malir railway station near Karachi where Naujawan Bharat Sabha youth presented him with black cloth flowers.",
    materiality: "critical",
    materiality_reason: "Exposes the explosive archival record surrounding the timing of the execution and Gandhi's contentious role.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "19–25 March 1931",
      date_iso_estimated: "1931-03-20",
      precision: "exact",
      chronological_sequence_index: 53,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "19–20 March 1931", context: "Confidential conferences between Gandhi and Home Secretary Emerson in Delhi." },
      record_revelation_time: { date_raw: "1931", context: "Emerson's official minute recorded in Home Political Secret files." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes Plate 16 as an explosive document that continues to haunt Gandhi's legacy." }
    },
    context: {
      micro_context: "Home Department secretariat, New Delhi; Malir railway station near Karachi.",
      meso_context: "Colonial government deciding whether executing the trio before the Karachi Congress would cause the Congress to repudiate the Delhi Pact.",
      macro_context: "Nationwide political volatility on the eve of the historic Karachi Congress session."
    },
    entities: [
      { entity_id: "ENT-EMERSON", name: "Herbert Emerson", role: "Home Secretary, Government of India", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Congress leader", type: "person" },
      { entity_id: "ENT-NBS", name: "Naujawan Bharat Sabha youth", role: "Protesters presenting black flowers", type: "organization" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH47-01", relationship_type: "continues", nature: "Execution takes place three days after the Emerson talks." }
    ],
    causal_relationships: [
      {
        target_unit_id: "KU-BS-CH53-01",
        causal_status: "[DOCUMENTED_CAUSATION]",
        supporting_evidence: "The timing of the executions on 23 March forced the Karachi Congress into an emergency crisis session.",
        provenance: "chapter051.xhtml / notes.xhtml (Ch. 51 Notes 1-20)",
        competing_explanations: [],
        epistemic_attribution: "primary_record"
      }
    ],
    evidence: [
      {
        type: "confidential_home_department_minute",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "confidential_private",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Home Secretary Emerson's confidential minute (Plate 16 / App) preserved in National Archives of India."
      }
    ],
    source_evidence: [
      "[CONTEMPORARY_RECORD] Home Secretary Emerson's Minute (20 March 1931, Plate 16): 'Gandhi said that he was not in a position to ask for commutation... He asked whether it was not possible to postpone execution. I told him that execution was inevitable and that postponement would only prolong agony. Gandhi did not disagree with this view.'",
      "When Gandhi arrived at Malir station outside Karachi on 25 March 1931, young men of the Naujawan Bharat Sabha lined the platform chanting 'Down with Gandhi' and presented him with black crepe flowers."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "archival_minute", description: "Emerson's minute verbatim documented." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000812", "bhasin0000813", "bhasin0000814", "bhasin0000815", "bhasin0000820", "bhasin0000825", "bhasin0000830"],
      notes_referenced: ["notes.xhtml#bhasin0001813", "notes.xhtml#bhasin0001832"],
      archival_citations: ["Plate 16 (Appendix), Emerson's Minute on Gandhi Interview, 20 March 1931", "NAI Home Political (1931), F. 33/1/31"]
    },
    genre_specific_payload: {
      setting: "New Delhi secretariats and Karachi railway platforms.",
      documented_actions: [
        "Emerson meets Gandhi to discuss the political fallout of the executions.",
        "Discussion centers on whether carrying out hangings before Karachi would torpedo the Delhi Pact.",
        "Gandhi leaves for Karachi; news of the 23 March executions breaks mid-journey.",
        "Black flag protests confront Gandhi upon his arrival in Sindh."
      ],
      outcomes: [
        "Profound moral embarrassment for the Congress leadership; Gandhi accepts the black flowers in sorrow."
      ],
      historical_significance: "Demonstrates the immense political tension generated by Bhagat Singh's sacrifice, which threatened to shatter Gandhi's hegemony over the freedom movement."
    }
  },
  {
    unit_id: "KU-BS-CH52-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter052.xhtml",
      chapter_number: 52,
      chapter_title: "52. A ‘Clean Fighter’",
      element_ids: ["bhasin0000831", "bhasin0000832", "bhasin0000833", "bhasin0000834", "bhasin0000835", "bhasin0000836", "bhasin0000837", "bhasin0000838", "bhasin0000839", "bhasin0000840", "bhasin0000841", "bhasin0000842", "bhasin0000843", "bhasin0000844", "bhasin0000845", "bhasin0000846", "bhasin0000847", "bhasin0000848"]
    },
    structural_position: {
      part: "PART 10: EFFICIENT DESPOTISM",
      chapter: "52. A ‘Clean Fighter’"
    },
    title: "A ‘Clean Fighter’: Lord Irwin’s Retrospective Reflections and Imperial Realpolitik",
    summary_statement: "Examines Viceroy Lord Irwin's farewell speeches and personal memoirs (The Fullness of Days), where he retrospectively evaluated Bhagat Singh as an exceptionally courageous and 'clean fighter' who possessed rare courage, while defending the execution as an inescapable imperial duty required by the rule of colonial law.",
    materiality: "important",
    materiality_reason: "Preserves the adversary's testimony confirming Bhagat Singh's moral stature and chivalric code.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "March–April 1931 / 1957",
      date_iso_estimated: "1931-03-26",
      precision: "exact",
      chronological_sequence_index: 54,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "26 March 1931", context: "Irwin's address to the Chelmsford Club in Delhi three days after the executions." },
      record_revelation_time: { date_raw: "1931 & 1957", context: "Speech in Speeches by the Earl of Halifax; memoir Fullness of Days." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights Irwin's candid admission of Bhagat Singh's romantic chivalry." }
    },
    context: {
      micro_context: "Chelmsford Club banqueting hall, Delhi; European officials and loyalists in attendance.",
      meso_context: "Irwin preparing to depart India, seeking to justify his legacy against attacks from Winston Churchill and die-hard Tories.",
      macro_context: "Colonial state attempting to project an image of detached, impartial judicial firmness."
    },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin (Earl of Halifax)", role: "Retiring Viceroy", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Executed adversary", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH54-01", relationship_type: "continues", nature: "Leads to concluding evaluation of colonial rule of law." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "viceregal_speeches_and_memoirs",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "state_executive",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official published text of Irwin's speech at Chelmsford Club, 26 March 1931."
      }
    ],
    source_evidence: [
      "He was a young man of clean fighter instincts... He met his end with courage which it is impossible not to admire.",
      "Yet Irwin maintained: 'The law had taken its course. However much one might admire the personal bravery of the young man, the state could not condone the crime of murder.'"
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "viceregal_record", description: "Speeches and memoir extracts fully verified." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000831", "bhasin0000832", "bhasin0000833", "bhasin0000834", "bhasin0000840", "bhasin0000848"],
      notes_referenced: ["notes.xhtml#bhasin0001833", "notes.xhtml#bhasin0001858"],
      archival_citations: ["Speeches by the Earl of Halifax, Vol. II", "Halifax, Fullness of Days (1957)"]
    },
    genre_specific_payload: {
      setting: "Chelmsford Club, Delhi, and London.",
      documented_actions: [
        "Irwin publicly addresses the execution three days after the event.",
        "Acknowledges Bhagat Singh's exceptional courage and patriotism.",
        "Defends refusal of clemency as necessary to maintain the principle of law and order."
      ],
      outcomes: [
        "Imperial validation of Bhagat Singh's courage, cementing his legendary status even among his executioners."
      ],
      historical_significance: "Demonstrates that even the head of the imperial administration was compelled to pay tribute to Bhagat Singh's moral integrity."
    }
  },

  // --- PART 11: RESTITUTION ---
  {
    unit_id: "KU-BS-CH53-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter053.xhtml",
      chapter_number: 53,
      chapter_title: "53. ‘Prayaschitta’",
      element_ids: ["bhasin0000855", "bhasin0000856", "bhasin0000857", "bhasin0000858", "bhasin0000859", "bhasin0000860", "bhasin0000861", "bhasin0000862", "bhasin0000863", "bhasin0000864"]
    },
    structural_position: {
      part: "PART 11: RESTITUTION",
      chapter: "53. ‘Prayaschitta’"
    },
    title: "‘Prayaschitta’: The Karachi Congress Resolution on Bhagat Singh’s Bravery",
    summary_statement: "Documents the 1931 Karachi Congress session held days after the executions: Gandhi drafts the historic compromise resolution praising the extraordinary courage and sacrifice of Bhagat Singh and comrades while dissociating the Congress from political violence; passing alongside the landmark Resolution on Fundamental Rights and Economic Program.",
    materiality: "critical",
    materiality_reason: "Formal national canonization of Bhagat Singh's sacrifice within mainstream Indian nationalism.",
    epistemic_status: "[CORROBORATED_HISTORICAL_FACT]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "26–31 March 1931",
      date_iso_estimated: "1931-03-29",
      precision: "exact",
      chronological_sequence_index: 55,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "29 March 1931", context: "Karachi Congress open session passes the Bhagat Singh resolution." },
      record_revelation_time: { date_raw: "March 1931", context: "Congress official resolutions published." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the linguistic acrobatics of praising the martyr while repudiating his deed." }
    },
    context: {
      micro_context: "Hangar-like pandal in Karachi packed with twenty thousand delegates; somber funeral atmosphere.",
      meso_context: "Congress leadership forced to placate furious radical youth while preserving the Delhi Pact.",
      macro_context: "Integration of socialist economic demands into the Congress program for the first time."
    },
    entities: [
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Resolution drafter", type: "person" },
      { entity_id: "ENT-PATEL-VALLABHBHAI", name: "Sardar Vallabhbhai Patel", role: "Congress President, Karachi Session", type: "person" },
      { entity_id: "ENT-NEHRU-JAWAHARLAL", name: "Jawaharlal Nehru", role: "Resolution mover", type: "person" },
      { entity_id: "ENT-BOSE-SUBHAS", name: "Subhas Chandra Bose", role: "Opposition speaker praising revolutionaries", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-CH54-01", relationship_type: "continues", nature: "Leads to discussion on post-colonial constitutional rights." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "congress_session_official_proceedings",
        temporal_proximity: "contemporaneous",
        source_independence: "independent_firsthand",
        institutional_position: "insurgent_dissident",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Official Report of the 45th Indian National Congress (Karachi, 1931)."
      }
    ],
    source_evidence: [
      "This Congress, while dissociating itself from and disapproving of political violence in any shape or form, places on record its admiration of the bravery and sacrifice of the late Sardar Bhagat Singh and his comrades Sukhdev and Rajguru.",
      "The resolution was an exercise in 'prayaschitta'—penance. Gandhi had to acknowledge the incomparable heroism of Bhagat Singh to maintain his hold over the country."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "political_resolution", description: "Resolution text officially preserved." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000855", "bhasin0000856", "bhasin0000857", "bhasin0000858", "bhasin0000859", "bhasin0000860", "bhasin0000861", "bhasin0000862", "bhasin0000863", "bhasin0000864"],
      notes_referenced: ["notes.xhtml#bhasin0001865", "notes.xhtml#bhasin0001874"],
      archival_citations: ["Report of the 45th Indian National Congress, Karachi, 1931, Resolution No. 1"]
    },
    genre_specific_payload: {
      setting: "Karachi Congress Pandal, March 1931.",
      documented_actions: [
        "Gandhi drafts resolution balancing condemnation of violence with admiration for Bhagat Singh.",
        "Nehru moves the resolution with tears in his eyes; Bose supports with reservations.",
        "Karachi session adopts the landmark Resolution on Fundamental Rights (nationalization of key industries, living wage)."
      ],
      outcomes: [
        "Congress embraces Bhagat Singh's martyrdom while subordinating his revolutionary ideology to bourgeois nationalism."
      ],
      historical_significance: "Demonstrated that Bhagat Singh's sacrifice compelled mainstream nationalism to adopt radical economic rights into India's future constitutional vision."
    }
  },
  {
    unit_id: "KU-BS-CH54-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter054.xhtml",
      chapter_number: 54,
      chapter_title: "54. The Rule of Law",
      element_ids: ["bhasin0000865", "bhasin0000866", "bhasin0000867", "bhasin0000868", "bhasin0000869", "bhasin0000870", "bhasin0000871", "bhasin0000872"]
    },
    structural_position: {
      part: "PART 11: RESTITUTION",
      chapter: "54. The Rule of Law"
    },
    title: "The Rule of Law: Colonial Emergency Jurisprudence and Post-Colonial Continuity",
    summary_statement: "Examines the legal legacy of the Lahore Conspiracy Case: how the colonial architecture of emergency ordinances, special tribunals, and executive discretion survived the transfer of power in 1947, becoming embedded within the preventive detention statutes and emergency provisions of post-colonial India and Pakistan.",
    materiality: "critical",
    materiality_reason: "Connects the historic trial directly to modern constitutional jurisprudence and the erosion of civil liberties in South Asia.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "1931–1950s / 2022",
      date_iso_estimated: "1950-01-26",
      precision: "approximate_year",
      chronological_sequence_index: 56,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1947–1950", context: "Drafting of Indian Constitution (Article 22) and Pakistan Public Safety Acts." },
      record_revelation_time: { date_raw: "Post-1950", context: "Supreme Court preventive detention jurisprudence (A.K. Gopalan v. State of Madras)." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates the unbroken continuity between Ordinance III and modern anti-terror laws (UAPA, MCOCA)." }
    },
    context: {
      micro_context: "Constituent Assembly debates and appellate courtrooms of independent India and Pakistan.",
      meso_context: "Retention of colonial penal codes, police acts, and preventive detention machinery.",
      macro_context: "Post-colonial states inheriting imperial instruments of executive control to suppress political dissent."
    },
    entities: [
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Legal scholar", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Symbol of constitutional challenge", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-PROLOGUE-01", relationship_type: "continues", nature: "Completes the legalist thesis initiated in the Prologue." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "constitutional_statutes_and_judicial_precedents",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Comparative jurisprudence linking Section 72 Government of India Act 1915 with Article 123/213 and Article 22 of the Constitution of India."
      }
    ],
    source_evidence: [
      "The tragedy of modern India and Pakistan is that they inherited the colonial state's apparatus of emergency despotism without fundamentally dismantling it.",
      "The Special Tribunal that sentenced Bhagat Singh was the prototype for the extraordinary courts and special anti-terror tribunals that continue to proliferate in the subcontinent today."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "comparative_law", description: "Statutory continuity verified across post-colonial legal codes." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000865", "bhasin0000866", "bhasin0000867", "bhasin0000868", "bhasin0000869", "bhasin0000870", "bhasin0000871", "bhasin0000872"],
      notes_referenced: ["notes.xhtml#bhasin0001875", "notes.xhtml#bhasin0001886"],
      archival_citations: ["Constitution of India (1950), Article 22 & 123", "A.K. Gopalan v. State of Madras (1950) SCR 88"]
    },
    genre_specific_payload: {
      setting: "Comparative constitutional analysis of post-colonial South Asia.",
      documented_actions: [
        "Tracing the survival of viceregal emergency ordinances into presidential ordinance powers.",
        "Analysis of preventive detention laws bypassing trial by jury and normal rules of evidence.",
        "Critique of judicial deference to executive claims of 'national security'."
      ],
      outcomes: [
        "Unmasking of the enduring colonial imprint on contemporary South Asian civil liberties."
      ],
      historical_significance: "Demonstrates that Bhagat Singh's critique of colonial legality remains an active and urgent constitutional challenge for modern South Asian democracies."
    }
  },
  {
    unit_id: "KU-BS-CH55-01",
    unit_type: "HISTORICAL_EPISODE",
    genre: "historical_biography",
    source_location: {
      document: "chapter055.xhtml",
      chapter_number: 55,
      chapter_title: "55. Indic Hybridity",
      element_ids: ["bhasin0000873", "bhasin0000874", "bhasin0000875", "bhasin0000876", "bhasin0000877", "bhasin0000878", "bhasin0000879", "bhasin0000880", "bhasin0000881", "bhasin0000882", "bhasin0000883", "bhasin0000884", "bhasin0000885", "bhasin0000886", "bhasin0000887", "bhasin0000888", "bhasin0000889", "bhasin0000890", "bhasin0000891", "bhasin0000892", "bhasin0000893"]
    },
    structural_position: {
      part: "PART 11: RESTITUTION",
      chapter: "55. Indic Hybridity"
    },
    title: "Indic Hybridity: The Synthesis of Sikh Radicalism, Western Marxism, and Cosmopolitan Humanism",
    summary_statement: "Concluding synthesis of Bhagat Singh's intellectual and political achievement: conceptualizing his philosophy as 'Indic Hybridity'—a profound organic fusion of Punjab's Sikh tradition of righteous struggle against tyranny (deg tegh fateh), Western dialectical materialism, Enlightenment rationalism, and radical egalitarianism that transcends communal and national frontiers.",
    materiality: "critical",
    materiality_reason: "The ultimate philosophical conclusion of Juss's monograph synthesizing Bhagat Singh's universal legacy.",
    epistemic_status: "[BIOGRAPHER_THESIS]",
    confidence: "high",
    temporal_anchor: {
      date_raw: "2022",
      date_iso_estimated: "2022-07-25",
      precision: "exact",
      chronological_sequence_index: 57,
      contested_dating: { is_disputed: false, competing_variants: [] }
    },
    dual_timeline: {
      event_time: { date_raw: "1907–1931", context: "Life and intellectual journey of Bhagat Singh." },
      record_revelation_time: { date_raw: "2022", context: "Publication of Satvinder S. Juss's definitive legal biography." },
      source_time: { publication_year: 2022, author_analysis: "Juss articulates 'Indic Hybridity' as the culminating theoretical construct of the book." }
    },
    context: {
      micro_context: "Global scholarship on anti-colonial thought and revolutionary theory.",
      meso_context: "Subcontinental politics battling religious nationalism and historical revisionism.",
      macro_context: "Worldwide quest for emancipatory secular models combining cultural rootedness with socialist justice."
    },
    entities: [
      { entity_id: "ENT-JUSS", name: "Satvinder S. Juss", role: "Biographer and constitutional scholar", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Philosopher-martyr", type: "person" }
    ],
    relationships: [
      { target_unit_id: "KU-BS-PROLOGUE-01", relationship_type: "continues", nature: "Completes the arc opened in the Prologue." }
    ],
    causal_relationships: [],
    evidence: [
      {
        type: "intellectual_biography_synthesis",
        temporal_proximity: "retrospective_decades_later",
        source_independence: "independent_firsthand",
        institutional_position: "detached_witness",
        coercive_context: "voluntary_public",
        corroboration_state: "corroborated_across_opposing_records",
        evidentiary_reliability_assessment: "Comprehensive analysis integrating Bhagat Singh's complete writings, court records, and library notes."
      }
    ],
    source_evidence: [
      "Bhagat Singh was the embodiment of Indic Hybridity. He drew upon the Sikh spirit of defiant resistance, the socialist science of Karl Marx, the rationalist skepticism of the European Enlightenment, and the poetic humanism of Urdu literature.",
      "He belongs not to one religion, one party, or one nation, but to all who struggle against injustice and exploitation across the world."
    ],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "philosophical_synthesis", description: "Final authorial conceptual thesis." },
    source_provenance: {
      manifest_unit_ids: ["bhasin0000873", "bhasin0000874", "bhasin0000875", "bhasin0000876", "bhasin0000880", "bhasin0000885", "bhasin0000893"],
      notes_referenced: ["notes.xhtml#bhasin0001887", "notes.xhtml#bhasin0001910"],
      archival_citations: ["Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022), Chapter 55"]
    },
    genre_specific_payload: {
      setting: "Global intellectual history of revolution and freedom.",
      documented_actions: [
        "Synthesis of indigenous Punjabi egalitarianism with international socialist theory.",
        "Demonstration that Bhagat Singh's atheism was not alien or derivative, but an organic development of critical Indian rationalism.",
        "Affirmation of Bhagat Singh as an enduring beacon of secular democratic enlightenment."
      ],
      outcomes: [
        "Definitive restitution of Bhagat Singh's place as one of the world's great revolutionary intellectuals."
      ],
      historical_significance: "Established that true anti-colonial liberation requires not only political independence, but the complete eradication of social oppression, economic exploitation, and intellectual servility."
    }
  }
];
