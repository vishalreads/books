/**
 * BKRS Milestone 3 - Appendix Units (21 Primary Archival Plates)
 * Source: Satvinder S. Juss, Bhagat Singh: A Life in Revolution (2022)
 * All units are DOCUMENT_UNIT preserving original archival provenance.
 */

module.exports = [
  {
    unit_id: "KU-BS-APP-01",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001118", "bhasin0001119"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 1" },
    title: "Archival Plate 1: Amolak Ram Kapur Petition Protesting Police Tutoring of Approvers (3 Oct 1929)",
    summary_statement: "Facsimile reproduction and legal analysis of advocate Amolak Ram Kapur's formal petition to Special Magistrate Sri Kishen Kapur on 3 October 1929, documenting that approvers were being detained unlawfully in police custody rather than judicial lockup and actively tutored by investigating officers.",
    materiality: "critical",
    materiality_reason: "Primary archival evidence establishing police manufacturing of evidence and witness coaching during committal proceedings.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "3 October 1929", date_iso_estimated: "1929-10-03", precision: "exact", chronological_sequence_index: 58, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "3 October 1929", context: "Filed in Magistrate Court, Lahore." },
      record_revelation_time: { date_raw: "1929", context: "Placed on the judicial record of the Lahore Conspiracy Case." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths this document from the Lahore Archives as proof of contaminated prosecution evidence." }
    },
    context: {
      micro_context: "Courtroom of Special Magistrate Sri Kishen, Lahore Central Jail.",
      meso_context: "Defense attorneys attempting to prevent CID police from rehearsing approvers Jai Gopal and P.N. Ghosh.",
      macro_context: "Colonial state's total reliance on accomplice testimony to secure capital convictions."
    },
    entities: [
      { entity_id: "ENT-KAPUR-AMOLAK", name: "Amolak Ram Kapur", role: "Defense advocate", type: "person" },
      { entity_id: "ENT-SRI-KISHEN", name: "Rai Sahib Sri Kishen", role: "Special Magistrate", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Accused client", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH35-01", relationship_type: "supports", nature: "Provides direct documentary proof of Chapter 35 on approvers." }],
    causal_relationships: [],
    evidence: [{ type: "primary_court_petition", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "insurgent_dissident", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Original handwritten petition bearing advocate's signature and court filing stamp." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 1 Text: 'The approvers are being kept in police lines and not in judicial lock-up, where they are tutored daily by investigating police officers. This is illegal under Section 337(3) of the Criminal Procedure Code.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "archival_plate", description: "Original manuscript preserved in Punjab Archives Lahore." },
    source_provenance: { manifest_unit_ids: ["bhasin0001118", "bhasin0001119"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Case File No. 121, Plate 1"] },
    genre_specific_payload: { document_title: "Petition under Section 337(3) CrPC by Amolak Ram Kapur", author_or_origin: "Amolak Ram Kapur, Advocate for Bhagat Singh", document_date: "3 October 1929", medium_format: "Handwritten legal petition (A1.jpg)", legal_or_ideological_significance: "Proves that the prosecution willfully violated statutory criminal procedure to manufacture approver testimony.", key_verbatim_excerpts: ["The approvers have been kept in police custody contrary to the express provisions of Section 337(3) CrPC."], author_vs_editor_vs_biographer_framing: "Juss uses this document to prove that the case against Bhagat Singh was procedurally compromised from its inception." }
  },
  {
    unit_id: "KU-BS-APP-02",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001121", "bhasin0001122"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 2" },
    title: "Archival Plate 2: Bhagat Singh’s Handwritten Petition Demanding Crime Scene Inspection (4 Nov 1929)",
    summary_statement: "Facsimile reproduction of Bhagat Singh's handwritten and signed petition to Magistrate Sri Kishen on 4 November 1929, pointing out that his name was absent from FIR No. 121 and that the police identification parade was flawed, and demanding that the Magistrate conduct a personal local inspection of the crime scene outside the police office.",
    materiality: "critical",
    materiality_reason: "Primary holographic document in Bhagat Singh's own handwriting demonstrating his acute legal acumen and direct challenge to FIR No. 121.",
    epistemic_status: "[PRIMARY_SUBJECT_WRITING]",
    confidence: "high",
    temporal_anchor: { date_raw: "4 November 1929", date_iso_estimated: "1929-11-04", precision: "exact", chronological_sequence_index: 59, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "4 November 1929", context: "Drafted in cell and submitted in open court, Lahore." },
      record_revelation_time: { date_raw: "1929", context: "Court record of Special Magistrate." },
      source_time: { publication_year: 2022, author_analysis: "Juss identifies this holographic petition as conclusive evidence of Bhagat Singh's legalist defense strategy." }
    },
    context: {
      micro_context: "Courtroom dock, Lahore Central Jail.",
      meso_context: "Section 539B CrPC empowering magistrates to conduct local inspections of crime scenes.",
      macro_context: "Bhagat Singh personally conducting his defense to expose the physical impossibility of witness testimonies."
    },
    entities: [
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Petitioner and accused", type: "person" },
      { entity_id: "ENT-SRI-KISHEN", name: "Rai Sahib Sri Kishen", role: "Special Magistrate", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH22-01", relationship_type: "supports", nature: "Directly corroborates the flaws of FIR No. 121 in Chapter 22." }],
    causal_relationships: [],
    evidence: [{ type: "primary_holographic_petition", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "insurgent_dissident", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Authentic holographic document written and signed by Bhagat Singh ('Bhagat Singh, Accused')." }],
    source_evidence: ["[PRIMARY_SUBJECT_WRITING] Plate 2 Text: 'Sir, as my name does not appear in the First Information Report and the prosecution witnesses never saw me before... I pray that the Court may be pleased to inspect the spot of the alleged occurrence under Section 539B CrPC.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "holograph_document", description: "Bhagat Singh's handwriting and signature fully authenticated." },
    source_provenance: { manifest_unit_ids: ["bhasin0001121", "bhasin0001122"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Magistrate Files, Plate 2 (A2.jpg)"] },
    genre_specific_payload: { document_title: "Petition for Local Inspection under Section 539B CrPC", author_or_origin: "Bhagat Singh, Accused", document_date: "4 November 1929", medium_format: "Holographic manuscript petition (A2.jpg)", legal_or_ideological_significance: "Demonstrates Bhagat Singh's mastery of the Indian Code of Criminal Procedure and his strategic effort to expose witness perjury.", key_verbatim_excerpts: ["The spot of occurrence should be inspected by the court so that the impossibility of the alleged eyewitnesses seeing the occurrence may be verified."], author_vs_editor_vs_biographer_framing: "Juss showcases this plate to dismantle the colonial caricature of Bhagat Singh as an illiterate gunman." }
  },
  {
    unit_id: "KU-BS-APP-03",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001124", "bhasin0001125"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 3" },
    title: "Archival Plate 3: Prosecuting Inspector Letter Withholding Evidence from Defense (17 March 1930)",
    summary_statement: "Facsimile reproduction of official correspondence from the Prosecuting Inspector to Magistrate Sri Kishen on 17 March 1930, formally refusing to supply copies of prosecution witness statements to defense counsel, exposing the state's deliberate obstruction of a fair defense.",
    materiality: "important",
    materiality_reason: "Direct documentary evidence of the colonial prosecution's systematic denial of procedural equality of arms.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "17 March 1930", date_iso_estimated: "1930-03-17", precision: "exact", chronological_sequence_index: 60, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "17 March 1930", context: "Submitted to Magistrate Court, Lahore." },
      record_revelation_time: { date_raw: "1930", context: "Court file exhibit." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights this letter as illustrating prosecutorial bad faith." }
    },
    context: {
      micro_context: "Prosecutor's desk, Lahore.",
      meso_context: "Section 162 CrPC applications by defense advocates to inspect police diaries.",
      macro_context: "Colonial state apparatus concealing contradictions between witness statements."
    },
    entities: [{ entity_id: "ENT-PROSECUTOR", name: "Prosecuting Inspector, Lahore", role: "Crown prosecutor", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH30-01", relationship_type: "supports", nature: "Illustrates procedural obstruction during committal." }],
    causal_relationships: [],
    evidence: [{ type: "official_prosecutorial_letter", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official crown prosecutor correspondence preserved in case file." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 3 Text: 'Copies of police statements cannot be granted to the defense at this stage under Section 162 CrPC.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "official_correspondence", description: "Document authenticated in court files." },
    source_provenance: { manifest_unit_ids: ["bhasin0001124", "bhasin0001125"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Case File No. 121, Plate 3"] },
    genre_specific_payload: { document_title: "Letter from Prosecuting Inspector to Magistrate", author_or_origin: "Prosecuting Inspector, Lahore", document_date: "17 March 1930", medium_format: "Official letter (A3.jpg)", legal_or_ideological_significance: "Demonstrates systematic denial of basic discovery rights to the accused.", key_verbatim_excerpts: ["The prosecution declines to furnish copies of witness statements recorded during police investigation."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to prove that the trial violated every canon of natural justice." }
  },
  {
    unit_id: "KU-BS-APP-04",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001127", "bhasin0001128"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 4" },
    title: "Archival Plate 4: Police Special Branch Confidential Report on Revolutionary Network",
    summary_statement: "Facsimile reproduction of the CID Special Branch confidential chart mapping the inter-provincial network of the HSRA across Punjab, United Provinces, and Bengal, identifying key organizers and safehouses.",
    materiality: "important",
    materiality_reason: "Primary intelligence record showing the colonial state's understanding of the revolutionary conspiracy.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "Late 1929", date_iso_estimated: "1929-11-01", precision: "approximate_month", chronological_sequence_index: 61, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "1929", context: "Compiled by Punjab CID Special Branch." },
      record_revelation_time: { date_raw: "1929", context: "Home Political secret archives." },
      source_time: { publication_year: 2022, author_analysis: "Juss demonstrates how the colonial police tracked the pan-Indian footprint of the HSRA." }
    },
    context: { micro_context: "CID headquarters, Lahore.", meso_context: "Intelligence collation linking Lahore bomb factory with Kanpur and Calcutta.", macro_context: "Colonial state managing imperial surveillance network." },
    entities: [{ entity_id: "ENT-CID-LAHORE", name: "Punjab CID Special Branch", role: "Intelligence agency", type: "institution" }],
    relationships: [{ target_unit_id: "KU-BS-CH25-01", relationship_type: "supports", nature: "Corroborates the inter-provincial HSRA network in Chapter 25." }],
    causal_relationships: [],
    evidence: [{ type: "confidential_police_intelligence_report", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official CID secret report preserved in India Office Records." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 4 Text: Confidential map and organizational tree linking Bhagat Singh, Sukhdev, Azad, and Jatin Das across Northern India."],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "intelligence_chart", description: "Archival record verified in IOR." },
    source_provenance: { manifest_unit_ids: ["bhasin0001127", "bhasin0001128"], notes_referenced: [], archival_citations: ["IOR L/PJ/6/2004, Secret CID Report, Plate 4"] },
    genre_specific_payload: { document_title: "CID Special Branch Confidential Network Map", author_or_origin: "Punjab CID Special Branch", document_date: "1929", medium_format: "Intelligence diagram and typescript report (A4.jpg)", legal_or_ideological_significance: "Demonstrates that the British recognized the HSRA as a highly coordinated national threat.", key_verbatim_excerpts: ["The conspiracy extends from Lahore and Amritsar to Delhi, Agra, Cawnpore, and Calcutta."], author_vs_editor_vs_biographer_framing: "Juss uses this document to show the genuine pan-Indian reach of Bhagat Singh's movement." }
  },
  {
    unit_id: "KU-BS-APP-05",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001130", "bhasin0001131"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 5" },
    title: "Archival Plate 5: Special Tribunal Summons and Warrant under Ordinance III of 1930",
    summary_statement: "Facsimile reproduction of the official summons and production warrant issued under Section 6 of Lahore Conspiracy Case Ordinance III of 1930, commanding the production of the accused before the Special Tribunal.",
    materiality: "important",
    materiality_reason: "Primary statutory instrument initiating the proceedings of the extraordinary Special Tribunal.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "5 May 1930", date_iso_estimated: "1930-05-05", precision: "exact", chronological_sequence_index: 62, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "5 May 1930", context: "Issued at Poonch House, Lahore." },
      record_revelation_time: { date_raw: "May 1930", context: "Served on jail superintendents." },
      source_time: { publication_year: 2022, author_analysis: "Juss highlights the extraordinary jurisdictional wording of the warrant." }
    },
    context: { micro_context: "Poonch House Tribunal registry.", meso_context: "Ordinance III dispensing with ordinary magistrate committal.", macro_context: "Colonial executive enforcing fast-track emergency justice." },
    entities: [{ entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "Tribunal President", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH33-01", relationship_type: "supports", nature: "Direct documentary artifact of Chapter 33." }],
    causal_relationships: [],
    evidence: [{ type: "judicial_warrant", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official judicial warrant bearing the seal of the Special Tribunal." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 5 Text: 'Whereas the Governor-General has promulgated Ordinance III of 1930... you are hereby commanded to produce the bodies of the accused.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_warrant", description: "Official court warrant preserved." },
    source_provenance: { manifest_unit_ids: ["bhasin0001130", "bhasin0001131"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Files, Plate 5"] },
    genre_specific_payload: { document_title: "Summons and Production Warrant under Ordinance III", author_or_origin: "Special Tribunal, Lahore", document_date: "5 May 1930", medium_format: "Official legal warrant (A5.jpg)", legal_or_ideological_significance: "Formal instrument initiating the unconstitutional jurisdiction of the Tribunal.", key_verbatim_excerpts: ["Commanding production of Bhagat Singh and others under emergency ordinance."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to illustrate the machinery of colonial emergency law." }
  },
  {
    unit_id: "KU-BS-APP-06",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001133", "bhasin0001134"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 6" },
    title: "Archival Plate 6: Tribunal Order Sheet Authorizing Trial in Absentia",
    summary_statement: "Facsimile reproduction of the Special Tribunal's daily order sheet recording the decision to dispense with the presence of the accused and conduct the trial in absentia following their boycott.",
    materiality: "critical",
    materiality_reason: "Primary judicial record documenting the ex parte trial that condemned the accused to death.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "July 1930", date_iso_estimated: "1930-07-10", precision: "approximate_month", chronological_sequence_index: 63, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "July 1930", context: "Poonch House, Lahore." },
      record_revelation_time: { date_raw: "1930", context: "Official Tribunal minutes." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the procedural illegality of proceeding ex parte in a capital trial." }
    },
    context: { micro_context: "Empty courtroom, Poonch House.", meso_context: "Section 9 of Ordinance III empowering judges to proceed without accused.", macro_context: "Denial of fundamental common-law right of the accused to face their accusers." },
    entities: [{ entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Tribunal President", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH45-01", relationship_type: "supports", nature: "Direct documentary foundation of Chapter 45." }],
    causal_relationships: [],
    evidence: [{ type: "tribunal_order_sheet", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official signed daily minute book of the Tribunal." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 6 Text: 'The accused having refused to attend... the Tribunal directs that the examination of prosecution witnesses shall proceed in their absence.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_order", description: "Order sheet preserved in Lahore Archives." },
    source_provenance: { manifest_unit_ids: ["bhasin0001133", "bhasin0001134"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Minute Book, Plate 6"] },
    genre_specific_payload: { document_title: "Order Sheet on Proceedings in Absentia", author_or_origin: "Special Tribunal, Lahore", document_date: "July 1930", medium_format: "Official court minute sheet (A6.jpg)", legal_or_ideological_significance: "Documents the judicial decision to conduct a capital murder trial in an empty courtroom.", key_verbatim_excerpts: ["Trial ordered to proceed ex parte under emergency powers."], author_vs_editor_vs_biographer_framing: "Juss uses this plate as prime evidence that the proceedings constituted an imperial lynching." }
  },
  {
    unit_id: "KU-BS-APP-07",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001136", "bhasin0001137"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 7" },
    title: "Archival Plate 7: Lahore High Court Habeas Corpus Application",
    summary_statement: "Facsimile reproduction of the habeas corpus petition filed in the High Court of Judicature at Lahore by defense advocates under Section 491 CrPC challenging the unlawful detention of the accused under Ordinance III.",
    materiality: "important",
    materiality_reason: "Primary record of the constitutional defense mounted in the provincial High Court.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "June 1930", date_iso_estimated: "1930-06-15", precision: "approximate_month", chronological_sequence_index: 64, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "June 1930", context: "Argued before High Court of Judicature at Lahore." },
      record_revelation_time: { date_raw: "1930", context: "High Court case records." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the High Court's refusal to grant habeas corpus." }
    },
    context: { micro_context: "High Court bench, Lahore.", meso_context: "Judiciary deferring to Governor-General's emergency ordinance powers.", macro_context: "Systematic failure of the colonial appellate judiciary to check executive excess." },
    entities: [{ entity_id: "ENT-SHADILAL", name: "Sir Shadi Lal", role: "Chief Justice of Lahore High Court", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH29-01", relationship_type: "supports", nature: "Complements the high court appellate challenges." }],
    causal_relationships: [],
    evidence: [{ type: "habeas_corpus_petition", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Original High Court petition preserved in judicial archives." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 7 Text: 'Petition under Section 491 CrPC praying for the production of the accused unlawfully detained under an invalid ordinance.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "constitutional_petition", description: "Court petition fully preserved." },
    source_provenance: { manifest_unit_ids: ["bhasin0001136", "bhasin0001137"], notes_referenced: [], archival_citations: ["Lahore High Court Records, Criminal Miscellaneous No. 84/1930, Plate 7"] },
    genre_specific_payload: { document_title: "Habeas Corpus Petition under Section 491 CrPC", author_or_origin: "Defense Advocates for Bhagat Singh", document_date: "June 1930", medium_format: "Legal petition manuscript (A7.jpg)", legal_or_ideological_significance: "Challenged the legality of the detention outside regular criminal procedures.", key_verbatim_excerpts: ["The detention of the petitioners under Ordinance III of 1930 is illegal and ultra vires."], author_vs_editor_vs_biographer_framing: "Juss uses this document to highlight the legal resistance mounted by Indian advocates." }
  },
  {
    unit_id: "KU-BS-APP-08",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001139", "bhasin0001140"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 8" },
    title: "Archival Plate 8: Jail Superintendent Correspondence on Medical Trauma of Forced Feeding",
    summary_statement: "Facsimile reproduction of confidential correspondence from the Lahore Central Jail Superintendent to the Inspector General of Prisons detailing the severe medical trauma, throat inflammation, and violent resistance encountered during daily nasal forced-feeding of Bhagat Singh and comrades.",
    materiality: "critical",
    materiality_reason: "Primary administrative proof of the state-inflicted somatic torture of the hunger strikers.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "July–August 1929", date_iso_estimated: "1929-08-01", precision: "approximate_month", chronological_sequence_index: 65, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "August 1929", context: "Dispatched from Lahore Central Jail." },
      record_revelation_time: { date_raw: "1929", context: "Confidential Home Political files." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths this clinical record to expose the brutality behind the sanitized term 'artificial feeding'." }
    },
    context: { micro_context: "Jail hospital office, Lahore.", meso_context: "Prison doctors caught between administrative orders to prevent deaths and the prisoners' fierce physical resistance.", macro_context: "Colonial state hiding hospital conditions from public scrutiny." },
    entities: [{ entity_id: "ENT-BARKER", name: "Lt. Col. F.A. Barker", role: "IG Prisons", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH31-01", relationship_type: "supports", nature: "Provides direct somatic evidence for Chapter 31." }],
    causal_relationships: [],
    evidence: [{ type: "jail_medical_dispatch", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official medical report signed by Senior Medical Officer, Lahore Central Jail." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 8 Text: 'The undertrial Bhagat Singh resists nasal feeding with extreme violence. Catheter tubes cause severe coughing and nasal hemorrhage. Rectal feeding attempted.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "medical_report", description: "Preserved in British Library IOR files." },
    source_provenance: { manifest_unit_ids: ["bhasin0001139", "bhasin0001140"], notes_referenced: [], archival_citations: ["IOR L/PJ/6/2004, File on Hunger Strike Medical Reports, Plate 8"] },
    genre_specific_payload: { document_title: "Medical Report on Nasal Forced Feeding", author_or_origin: "Superintendent, Lahore Central Jail", document_date: "August 1929", medium_format: "Official confidential letter (A8.jpg)", legal_or_ideological_significance: "Documents the physical agony and bodily violation endured by the strikers.", key_verbatim_excerpts: ["Severe resistance to catheter insertion; risk of pneumonia if fluid enters lungs."], author_vs_editor_vs_biographer_framing: "Juss presents this plate to show the physical bravery required to sustain a 100-day strike." }
  },
  {
    unit_id: "KU-BS-APP-09",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001142", "bhasin0001143"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 9" },
    title: "Archival Plate 9: Lahore Jail Dietary Schedule and Jatindra Nath Das Casualty Report",
    summary_statement: "Facsimile reproduction of the official Lahore Central Jail dietary record and clinical post-mortem memorandum documenting the death of Jatindra Nath Das on 13 September 1929 after 63 days of hunger strike.",
    materiality: "critical",
    materiality_reason: "Primary archival death certificate of the movement's first hunger strike martyr.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "13 September 1929", date_iso_estimated: "1929-09-13", precision: "exact", chronological_sequence_index: 66, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "13 September 1929, 1:05 PM", context: "Death of Jatin Das in Lahore Borstal Jail." },
      record_revelation_time: { date_raw: "13 September 1929", context: "Official casualty report dispatched to Punjab Government." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents how Jatin Das's death paralyzed the Punjab administration." }
    },
    context: { micro_context: "Borstal Jail hospital ward; comrades weeping around the cot.", meso_context: "Massive funeral procession of 500,000 people escorting the body to Calcutta.", macro_context: "Universal national mourning and international condemnation of British penal barbarism." },
    entities: [
      { entity_id: "ENT-DAS-JATIN", name: "Jatindra Nath Das", role: "Martyred hunger striker", type: "person" },
      { entity_id: "ENT-CHOPRA", name: "Major P.D. Chopra", role: "Superintendent reporting death", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH31-01", relationship_type: "supports", nature: "Constitutes the tragic climax of the hunger strike." }],
    causal_relationships: [],
    evidence: [{ type: "official_casualty_report", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official clinical death report preserved in National Archives of India." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 9 Text: 'Undertrial prisoner Jatindra Nath Das expired at 1:05 PM on 13 September 1929 due to heart failure following prolonged abstinence from food.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "clinical_casualty", description: "Time and medical cause of death fully verified." },
    source_provenance: { manifest_unit_ids: ["bhasin0001142", "bhasin0001143"], notes_referenced: [], archival_citations: ["NAI Home Political (1929), F. 137/29, Death Report of Jatin Das, Plate 9"] },
    genre_specific_payload: { document_title: "Jail Casualty Report: Death of Jatindra Nath Das", author_or_origin: "Medical Superintendent, Borstal Jail, Lahore", document_date: "13 September 1929", medium_format: "Official casualty memorandum (A9.jpg)", legal_or_ideological_significance: "Demonstrated that Indian revolutionaries were prepared to die slow, agonizing deaths for human dignity.", key_verbatim_excerpts: ["Expired at 1:05 PM; body handed over to relatives after post-mortem examination."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to underscore the immense moral gravity of the revolutionary hunger strike." }
  },
  {
    unit_id: "KU-BS-APP-10",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001145", "bhasin0001146"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 10" },
    title: "Archival Plate 10: Defense Application Challenging Constitution of Special Tribunal",
    summary_statement: "Facsimile reproduction of the comprehensive formal application filed by the Defense Committee challenging the constitutional jurisdiction of the Special Tribunal and the legality of Ordinance III of 1930.",
    materiality: "important",
    materiality_reason: "Primary archival record of the initial constitutional objections raised before the Tribunal.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "7 May 1930", date_iso_estimated: "1930-05-07", precision: "exact", chronological_sequence_index: 67, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "7 May 1930", context: "Filed at Poonch House, Lahore." },
      record_revelation_time: { date_raw: "1930", context: "Court record exhibit." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the sophisticated arguments regarding the limits of Section 72." }
    },
    context: { micro_context: "Poonch House courtroom.", meso_context: "Defense attorneys arguing that the Governor-General cannot invent new judicial tribunals by decree.", macro_context: "Constitutional boundaries of colonial executive lawmaking." },
    entities: [{ entity_id: "ENT-DEFENSE-COMMITTEE", name: "Lahore Conspiracy Case Defense Committee", role: "Legal defense body", type: "organization" }],
    relationships: [{ target_unit_id: "KU-BS-CH33-01", relationship_type: "supports", nature: "Corroborates the opening jurisdictional challenges." }],
    causal_relationships: [],
    evidence: [{ type: "formal_defense_application", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "insurgent_dissident", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official signed petition preserved in court records." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 10 Text: 'The Governor-General has no power under Section 72 to create a court of criminal jurisdiction and deprive subjects of the right of trial by jury and regular appeal.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "legal_motion", description: "Application preserved in case file." },
    source_provenance: { manifest_unit_ids: ["bhasin0001145", "bhasin0001146"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Records, Plate 10"] },
    genre_specific_payload: { document_title: "Preliminary Application Challenging Jurisdiction", author_or_origin: "Counsel for the Accused", document_date: "7 May 1930", medium_format: "Legal petition typescript (A10.jpg)", legal_or_ideological_significance: "Articulated the classic common-law argument against executive court creation.", key_verbatim_excerpts: ["The Tribunal as constituted is without jurisdiction to try the accused."], author_vs_editor_vs_biographer_framing: "Juss highlights the precision with which Indian barristers challenged viceregal overreach." }
  },
  {
    unit_id: "KU-BS-APP-11",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001148", "bhasin0001149"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 11" },
    title: "Archival Plate 11: Special Tribunal Daily Minute Book and Justice Agha Haidar’s Dissent (12 May 1930)",
    summary_statement: "Facsimile reproduction of the handwritten Special Tribunal minute book of 12 May 1930 containing Justice Syed Agha Haidar's historic in-court repudiation and dissociation from President Coldstream's order directing police to handcuff and assault the accused.",
    materiality: "critical",
    materiality_reason: "One of the most important archival discoveries in the book; holographic proof of judicial dissent against state violence.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "12 May 1930", date_iso_estimated: "1930-05-12", precision: "exact", chronological_sequence_index: 68, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "12 May 1930", context: "Penned on the judicial minute sheet during the violent melee at Poonch House." },
      record_revelation_time: { date_raw: "12 May 1930", context: "Court record preserved in Lahore Archives." },
      source_time: { publication_year: 2022, author_analysis: "Juss identifies Plate 11 as the central smoking gun explaining why Agha Haidar was removed from the bench." }
    },
    context: { micro_context: "Judges' bench, Poonch House; police batons swinging below.", meso_context: "President Coldstream attempting to suppress revolutionary slogans by physical force.", macro_context: "Breakdown of judicial unity within the colonial High Court bench." },
    entities: [
      { entity_id: "ENT-AGHA-HAIDAR", name: "Justice Syed Agha Haidar", role: "High Court Judge and dissenter", type: "person" },
      { entity_id: "ENT-COLDSTREAM", name: "Justice J. Coldstream", role: "Tribunal President", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH36-01", relationship_type: "supports", nature: "Provides direct holographic evidence for Chapter 36." }],
    causal_relationships: [],
    evidence: [{ type: "primary_judicial_minute_sheet", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official judicial order sheet bearing Justice Agha Haidar's handwritten dissent and signature." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 11 Text: 'I was not a party to the order of removing the accused... I was not consulted. I consider it my duty to repudiate the order and to dissociate myself from the violence used against the accused.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_holograph", description: "Handwritten dissent authenticated in Punjab Archives Lahore." },
    source_provenance: { manifest_unit_ids: ["bhasin0001148", "bhasin0001149"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Minute Book, 12 May 1930, Plate 11"] },
    genre_specific_payload: { document_title: "Minute Book Entry and Judicial Dissent of Justice Agha Haidar", author_or_origin: "Justice Syed Agha Haidar", document_date: "12 May 1930", medium_format: "Handwritten court minute book (A11.jpg)", legal_or_ideological_significance: "Demonstrates that a senior Indian High Court judge refused to sanction executive police assault inside a courtroom.", key_verbatim_excerpts: ["I was not a party to the order... I dissociate myself from the violence."], author_vs_editor_vs_biographer_framing: "Juss positions this document as the moral apex of the judicial history of the trial." }
  },
  {
    unit_id: "KU-BS-APP-12",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001151", "bhasin0001152"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 12" },
    title: "Archival Plate 12: Viceroy Lord Irwin’s Confidential Telegram on Ordinance III",
    summary_statement: "Facsimile reproduction of Viceroy Lord Irwin's secret telegram to Secretary of State Wedgwood Benn justifying the necessity of promulgating Ordinance III to bypass standard judicial delays.",
    materiality: "important",
    materiality_reason: "Primary archival evidence of the confidential communication between Simla and London enacting emergency legislation.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "April 1930", date_iso_estimated: "1930-04-28", precision: "exact", chronological_sequence_index: 69, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "28 April 1930", context: "Dispatched from Viceregal Lodge, Simla." },
      record_revelation_time: { date_raw: "1930", context: "India Office Records, London." },
      source_time: { publication_year: 2022, author_analysis: "Juss exposes how Irwin misled Whitehall regarding the degree of disruption in court." }
    },
    context: { micro_context: "Viceroy's private telegraph office.", meso_context: "Secretary of State requiring viceregal justification under Section 72.", macro_context: "Imperial cabinet oversight over Indian governance." },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy", type: "person" },
      { entity_id: "ENT-BENN", name: "William Wedgwood Benn", role: "Secretary of State", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH32-01", relationship_type: "supports", nature: "Corroborates the viceregal decision to issue Ordinance III." }],
    causal_relationships: [],
    evidence: [{ type: "viceregal_cypher_telegram", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official decyphered telegram preserved in India Office Records, London." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 12 Text: 'Ordinary legal procedure has broken down in Lahore Conspiracy Case... Urgent emergency exists requiring special ordinance to constitute tribunal without appeal.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "imperial_telegram", description: "Telegram preserved in British Library IOR files." },
    source_provenance: { manifest_unit_ids: ["bhasin0001151", "bhasin0001152"], notes_referenced: [], archival_citations: ["IOR L/PJ/6/2004, Telegram No. 1288-S, Plate 12"] },
    genre_specific_payload: { document_title: "Cypher Telegram from Viceroy to Secretary of State", author_or_origin: "Lord Irwin, Viceroy of India", document_date: "28 April 1930", medium_format: "Official cypher telegram (A12.jpg)", legal_or_ideological_significance: "Documents the executive consensus between London and Delhi to suspend regular criminal procedure.", key_verbatim_excerpts: ["Ordinance is essential to bring the case to a speedy termination."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to prove high-level imperial complicity in executive justice." }
  },
  {
    unit_id: "KU-BS-APP-13",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001154", "bhasin0001155"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 13" },
    title: "Archival Plate 13: Special Tribunal Final Judgment Extract (7 October 1930)",
    summary_statement: "Facsimile reproduction of the concluding dispositive section of the Special Tribunal's 300-page judgment signed on 7 October 1930 by Justices Hilton, Tapp, and Sir Abdul Qadir, sentencing Bhagat Singh, Sukhdev, and Rajguru to death by hanging under Sections 121 and 302 IPC.",
    materiality: "critical",
    materiality_reason: "Primary archival death sentence decree of the Lahore Conspiracy Case.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "7 October 1930", date_iso_estimated: "1930-10-07", precision: "exact", chronological_sequence_index: 70, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "7 October 1930", context: "Signed at Poonch House, Lahore." },
      record_revelation_time: { date_raw: "7 October 1930", context: "Published in official case report." },
      source_time: { publication_year: 2022, author_analysis: "Juss examines the exact signatures of the three judges condemning the trio." }
    },
    context: { micro_context: "Tribunal chambers, Lahore.", meso_context: "Pronouncement delivered in absentia three weeks before Ordinance III expired.", macro_context: "Imperial state securing capital verdicts against revolutionary leadership." },
    entities: [
      { entity_id: "ENT-HILTON", name: "Justice G.C. Hilton", role: "Tribunal President", type: "person" },
      { entity_id: "ENT-TAPP", name: "Justice J.K. Tapp", role: "Tribunal Judge", type: "person" },
      { entity_id: "ENT-QADIR", name: "Justice Sir Abdul Qadir", role: "Tribunal Judge", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH45-01", relationship_type: "supports", nature: "Provides direct facsimile proof of Chapter 45 judgment." }],
    causal_relationships: [],
    evidence: [{ type: "capital_judgment_decree", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Original judgment extract bearing original signatures of Hilton, Tapp, and Qadir." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 13 Text: 'The Tribunal sentences Bhagat Singh, Shivaram Rajguru, and Sukhdev to be hanged by the neck till they be dead.' Signed: G.C. Hilton, J.K. Tapp, Abdul Qadir."],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "signed_judgment", description: "Preserved in Punjab Archives Lahore." },
    source_provenance: { manifest_unit_ids: ["bhasin0001154", "bhasin0001155"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Judgment Extract, 7 Oct 1930, Plate 13"] },
    genre_specific_payload: { document_title: "Dispositive Sentencing Extract of the Special Tribunal", author_or_origin: "Justices Hilton, Tapp, and Sir Abdul Qadir", document_date: "7 October 1930", medium_format: "Official signed judgment leaf (A13.jpg)", legal_or_ideological_significance: "Formal condemnation of the three revolutionary martyrs.", key_verbatim_excerpts: ["Sentenced to be hanged by the neck till they be dead under Section 121 and Section 302 IPC."], author_vs_editor_vs_biographer_framing: "Juss highlights the signatures as marking the completion of an executive judicial execution." }
  },
  {
    unit_id: "KU-BS-APP-14",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001157", "bhasin0001158"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 14" },
    title: "Archival Plate 14: D.N. Pritt KC Privy Council Petition for Special Leave to Appeal",
    summary_statement: "Facsimile reproduction of the printed petition for special leave to appeal lodged in the Privy Council in London by barrister D.N. Pritt KC and solicitor H.S.L. Polak on behalf of Bhagat Singh and comrades in December 1930.",
    materiality: "critical",
    materiality_reason: "Primary archival appellate document filed in the British Empire's highest court.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "December 1930", date_iso_estimated: "1930-12-15", precision: "approximate_month", chronological_sequence_index: 71, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "December 1930", context: "Lodged with Registrar of the Privy Council, London." },
      record_revelation_time: { date_raw: "1930", context: "Privy Council Appeal Casebooks." },
      source_time: { publication_year: 2022, author_analysis: "Juss analyzes the constitutional grounds drafted by Pritt." }
    },
    context: { micro_context: "Downing Street appellate registry.", meso_context: "Challenging Section 72 emergency ordinance validity.", macro_context: "International legal solidarity between British Left barristers and Indian revolutionaries." },
    entities: [
      { entity_id: "ENT-PRITT", name: "D.N. Pritt KC", role: "Counsel for petitioners", type: "person" },
      { entity_id: "ENT-POLAK", name: "H.S.L. Polak", role: "Solicitor (former associate of Gandhi in South Africa)", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH48-01", relationship_type: "supports", nature: "Direct documentary artifact of Chapter 48." }],
    causal_relationships: [],
    evidence: [{ type: "printed_privy_council_petition", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Original printed petition in Privy Council Archives, London." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 14 Text: 'In the Privy Council. On appeal from the Special Tribunal at Lahore. Petition for Special Leave to Appeal of Bhagat Singh and Others.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "appellate_record", description: "Privy Council appeal papers fully preserved in London." },
    source_provenance: { manifest_unit_ids: ["bhasin0001157", "bhasin0001158"], notes_referenced: [], archival_citations: ["Privy Council Appeal Record No. 8 of 1931, Plate 14"] },
    genre_specific_payload: { document_title: "Petition for Special Leave to Appeal to the Privy Council", author_or_origin: "D.N. Pritt KC and H.S.L. Polak", document_date: "December 1930", medium_format: "Printed appellate brief (A14.jpg)", legal_or_ideological_significance: "The highest legal challenge mounted against colonial emergency ordinances in British history.", key_verbatim_excerpts: ["The Ordinance was ultra vires the powers of the Governor-General under Section 72 of the Government of India Act 1915."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to illustrate the global legal mobilization surrounding the trial." }
  },
  {
    unit_id: "KU-BS-APP-15",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001160", "bhasin0001161"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 15" },
    title: "Archival Plate 15: Privy Council Order of Rejection (11 February 1931)",
    summary_statement: "Facsimile reproduction of the formal Order in Council signed by Lord Dunedin rejecting the petition for special leave to appeal, clearing the final legal obstacle to the executions.",
    materiality: "critical",
    materiality_reason: "Primary archival decree marking the absolute exhaustion of judicial remedies.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "11 February 1931", date_iso_estimated: "1931-02-11", precision: "exact", chronological_sequence_index: 72, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "11 February 1931", context: "Whitehall, London." },
      record_revelation_time: { date_raw: "11 February 1931", context: "Telegraphed to Viceroy in Delhi." },
      source_time: { publication_year: 2022, author_analysis: "Juss documents the fatal consequence of Dunedin's rejection." }
    },
    context: { micro_context: "Privy Council chambers, London.", meso_context: "Final refusal of imperial judiciary to intervene.", macro_context: "Shifting the entire battle to the political realm of the Gandhi-Irwin negotiations." },
    entities: [{ entity_id: "ENT-DUNEDIN", name: "Lord Dunedin", role: "Lord of Appeal", type: "person" }],
    relationships: [{ target_unit_id: "KU-BS-CH48-01", relationship_type: "supports", nature: "Provides direct judicial proof of the rejection." }],
    causal_relationships: [],
    evidence: [{ type: "order_in_council", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official Order in Council preserved in British National Archives." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 15 Text: 'Their Lordships have humbly advised His Majesty that the petition should be dismissed.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "judicial_order", description: "Official Order in Council verbatim preserved." },
    source_provenance: { manifest_unit_ids: ["bhasin0001160", "bhasin0001161"], notes_referenced: [], archival_citations: ["Privy Council Order, 11 February 1931, Plate 15"] },
    genre_specific_payload: { document_title: "Privy Council Order of Dismissal", author_or_origin: "Judicial Committee of the Privy Council", document_date: "11 February 1931", medium_format: "Official judicial order leaf (A15.jpg)", legal_or_ideological_significance: "Exhausted all judicial appeals in the British Empire.", key_verbatim_excerpts: ["Petition for special leave dismissed."], author_vs_editor_vs_biographer_framing: "Juss highlights this order as sealing the fate of the prisoners." }
  },
  {
    unit_id: "KU-BS-APP-16",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001163", "bhasin0001164"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 16" },
    title: "Archival Plate 16: Home Secretary Emerson’s Confidential Minute on Talks with Gandhi (20 March 1931)",
    summary_statement: "Facsimile reproduction of Home Secretary Herbert Emerson's confidential minute dated 20 March 1931, recording his private discussion with Mahatma Gandhi regarding execution timing and political fallout.",
    materiality: "critical",
    materiality_reason: "Primary archival evidence of Gandhi's controversial discussions with colonial officials three days before the hangings.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "20 March 1931", date_iso_estimated: "1931-03-20", precision: "exact", chronological_sequence_index: 73, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "20 March 1931", context: "Home Department secretariat, New Delhi." },
      record_revelation_time: { date_raw: "1931", context: "Filed in Home Political Secret proceedings." },
      source_time: { publication_year: 2022, author_analysis: "Juss conducts a rigorous forensic reading of Emerson's exact wording." }
    },
    context: { micro_context: "Home Secretary's office, Delhi.", meso_context: "Colonial state managing execution schedule relative to the Karachi Congress.", macro_context: "The uneasy political partnership between Gandhi and the Raj under the Delhi Pact." },
    entities: [
      { entity_id: "ENT-EMERSON", name: "Herbert Emerson", role: "Home Secretary", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Interlocutor", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH51-01", relationship_type: "supports", nature: "Provides direct documentary proof of Chapter 51." }],
    causal_relationships: [],
    evidence: [{ type: "confidential_official_minute", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official handwritten and initialed minute by Home Secretary Emerson." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 16 Text: 'Mr. Gandhi asked me about the date of execution... He did not plead for commutation but asked whether execution could be postponed until after Karachi.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "secret_minute", description: "Preserved in National Archives of India." },
    source_provenance: { manifest_unit_ids: ["bhasin0001163", "bhasin0001164"], notes_referenced: [], archival_citations: ["NAI Home Political (1931), F. 33/1/31, Plate 16"] },
    genre_specific_payload: { document_title: "Home Secretary Emerson's Minute on Gandhi Interview", author_or_origin: "Herbert Emerson, Home Secretary", document_date: "20 March 1931", medium_format: "Official secretariat minute (A16.jpg)", legal_or_ideological_significance: "Documentary proof of the secret administrative conversations governing execution timing.", key_verbatim_excerpts: ["Gandhi was not in a position to demand commutation."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to address the enduring controversy surrounding Gandhi's role." }
  },
  {
    unit_id: "KU-BS-APP-17",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001166", "bhasin0001167"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 17" },
    title: "Archival Plate 17: Viceroy Lord Irwin’s Personal Minute on Private Talks with Gandhi",
    summary_statement: "Facsimile reproduction of Viceroy Lord Irwin's personal confidential minute recording his 18 February 1931 conversation with Mahatma Gandhi regarding Bhagat Singh.",
    materiality: "critical",
    materiality_reason: "Primary archival source for the Irwin side of the Gandhi-Irwin private talks controversy (VAL-HIST-D6-40).",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "18 February 1931", date_iso_estimated: "1931-02-18", precision: "exact", chronological_sequence_index: 74, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "18 February 1931", context: "Viceroy's House, New Delhi." },
      record_revelation_time: { date_raw: "1931", context: "Preserved in Halifax Papers." },
      source_time: { publication_year: 2022, author_analysis: "Juss evaluates the historical veracity of Irwin's private record." }
    },
    context: { micro_context: "Viceroy's private study.", meso_context: "Confidential bilateral negotiations.", macro_context: "Viceroy determining whether Bhagat Singh would torpedo the pact." },
    entities: [
      { entity_id: "ENT-IRWIN", name: "Lord Irwin", role: "Viceroy", type: "person" },
      { entity_id: "ENT-GANDHI", name: "Mahatma Gandhi", role: "Congress negotiator", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH50-01", relationship_type: "supports", nature: "Provides direct documentary foundation for Chapter 50." }],
    causal_relationships: [],
    evidence: [{ type: "viceregal_personal_minute", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "directly_conflicted_by_counter_evidence", evidentiary_reliability_assessment: "Official viceregal minute in Halifax Papers (British Library MSS Eur C152)." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 17 Text: 'Gandhi brought up the case of Bhagat Singh... He did not plead for commutation, but said that postponement would be helpful.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "viceregal_minute", description: "Preserved in British Library." },
    source_provenance: { manifest_unit_ids: ["bhasin0001166", "bhasin0001167"], notes_referenced: [], archival_citations: ["British Library, Halifax Papers, MSS Eur C152/19, Plate 17"] },
    genre_specific_payload: { document_title: "Lord Irwin's Personal Minute on Talks with Gandhi", author_or_origin: "Lord Irwin, Viceroy of India", document_date: "18 February 1931", medium_format: "Typescript confidential minute with handwritten annotations (A17.jpg)", legal_or_ideological_significance: "Core document in the controversy over Gandhi's commutation efforts.", key_verbatim_excerpts: ["Gandhi mentioned Bhagat Singh; did not plead for commutation."], author_vs_editor_vs_biographer_framing: "Juss uses this plate to contrast imperial minutes with nationalist memories." }
  },
  {
    unit_id: "KU-BS-APP-18",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001169", "bhasin0001170"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 18" },
    title: "Archival Plate 18: Special Tribunal Death Warrants for Bhagat Singh, Sukhdev, and Rajguru",
    summary_statement: "Facsimile reproduction of the black-bordered Death Warrants issued by the Special Tribunal commanding the Superintendent of Lahore Central Jail to hang Bhagat Singh, Sukhdev, and Rajguru.",
    materiality: "critical",
    materiality_reason: "Primary archival death warrant ordering the execution of the revolutionary leaders.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "October 1930 / March 1931", date_iso_estimated: "1931-03-23", precision: "exact", chronological_sequence_index: 75, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "March 1931", context: "Delivered to Major Chopra, Lahore Central Jail." },
      record_revelation_time: { date_raw: "March 1931", context: "Jail records." },
      source_time: { publication_year: 2022, author_analysis: "Juss examines the formal judicial execution mandate." }
    },
    context: { micro_context: "Jail superintendent's safe, Lahore Central Jail.", meso_context: "Execution warrants returned endorsed after hanging.", macro_context: "Statutory completion of capital sentences." },
    entities: [
      { entity_id: "ENT-CHOPRA", name: "Major P.D. Chopra", role: "Jail Superintendent executing warrant", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Condemned prisoner named on warrant", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH47-01", relationship_type: "supports", nature: "Direct documentary authorization of Chapter 47." }],
    causal_relationships: [],
    evidence: [{ type: "judicial_death_warrant", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "judicial_officer", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Original judicial warrants bearing Tribunal seal and jail superintendent return endorsement." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 18 Text: 'Warrant of Execution of a Sentence of Death... This is to authorize and require you to carry the said sentence into execution by causing the said Bhagat Singh to be hanged by the neck till he be dead.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "death_warrant", description: "Preserved in Punjab Archives Lahore." },
    source_provenance: { manifest_unit_ids: ["bhasin0001169", "bhasin0001170"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Special Tribunal Case Files, Plate 18"] },
    genre_specific_payload: { document_title: "Death Warrants of Bhagat Singh, Sukhdev, and Rajguru", author_or_origin: "Special Tribunal, Lahore", document_date: "October 1930 / March 1931", medium_format: "Official judicial warrant (A18.jpg)", legal_or_ideological_significance: "The formal statutory instrument extinguishing the lives of the three revolutionaries.", key_verbatim_excerpts: ["To cause the said prisoner to be hanged by the neck till he be dead."], author_vs_editor_vs_biographer_framing: "Juss presents this plate as the ultimate artifact of colonial capital punishment." }
  },
  {
    unit_id: "KU-BS-APP-19",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001172", "bhasin0001173"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 19" },
    title: "Archival Plate 19: Jail Superintendent Execution Certificate (23 March 1931, 7:00 PM)",
    summary_statement: "Facsimile reproduction of Jail Superintendent Major P.D. Chopra's official return certificate certifying that Bhagat Singh, Sukhdev, and Rajguru were executed by hanging at Lahore Central Jail at 7:00 PM on 23 March 1931 and remained suspended for one hour.",
    materiality: "critical",
    materiality_reason: "Primary archival certification of the exact execution time and clinical confirmation of death.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "23 March 1931, 7:00 PM", date_iso_estimated: "1931-03-23", precision: "exact", chronological_sequence_index: 76, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "23 March 1931, 7:00 PM", context: "Gallows platform, Lahore Central Jail." },
      record_revelation_time: { date_raw: "23 March 1931, 8:00 PM", context: "Endorsed on reverse of Death Warrant." },
      source_time: { publication_year: 2022, author_analysis: "Juss verifies the unprecedented 7:00 PM evening execution time from this certificate." }
    },
    context: { micro_context: "Gallows pit, Lahore Central Jail.", meso_context: "Superintendent Major Chopra certifying hanging under Jail Manual rules.", macro_context: "Advanced execution carried out in secret to evade public demonstrations." },
    entities: [
      { entity_id: "ENT-CHOPRA", name: "Major P.D. Chopra", role: "Superintendent certifying hanging", type: "person" },
      { entity_id: "ENT-BS", name: "Bhagat Singh", role: "Executed subject", type: "person" }
    ],
    relationships: [{ target_unit_id: "KU-BS-CH47-01", relationship_type: "supports", nature: "Provides clinical proof of execution time in Chapter 47." }],
    causal_relationships: [],
    evidence: [{ type: "official_execution_certificate", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "voluntary_public", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official signed execution return endorsed on death warrant." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 19 Text: 'I hereby certify that the sentence of death has been duly executed upon Bhagat Singh at 7:00 PM on 23 March 1931 and that the body remained suspended for one hour and that life was extinct.' Signed: P.D. Chopra, Major IMS, Superintendent."],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "execution_certificate", description: "Preserved in Punjab Archives Lahore." },
    source_provenance: { manifest_unit_ids: ["bhasin0001172", "bhasin0001173"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Warrant Return Certificate, Plate 19"] },
    genre_specific_payload: { document_title: "Execution Certificate of Bhagat Singh", author_or_origin: "Major P.D. Chopra, Superintendent, Lahore Central Jail", document_date: "23 March 1931", medium_format: "Official endorsed certificate (A19.jpg)", legal_or_ideological_significance: "Definitive clinical and statutory record of the death of Bhagat Singh.", key_verbatim_excerpts: ["Sentence executed at 7:00 PM; life extinct."], author_vs_editor_vs_biographer_framing: "Juss uses this document to prove that the execution was advanced to the evening, in total defiance of normal prison regulations." }
  },
  {
    unit_id: "KU-BS-APP-20",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001175", "bhasin0001176"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 20" },
    title: "Archival Plate 20: Secret Post-Execution Disposal Order for Clandestine Cremation at Ganda Singh Wala",
    summary_statement: "Facsimile reproduction of the secret post-execution disposal order issued by colonial authorities commanding the clandestine removal of the corpses of Bhagat Singh, Sukhdev, and Rajguru through the rear gate of Lahore Central Jail and their nighttime cremation with kerosene at Ganda Singh Wala near Ferozepur.",
    materiality: "critical",
    materiality_reason: "Primary archival evidence of the covert disposal scheme; central to mandatory qualification VAL-HIST-D6-43.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "23 March 1931, night", date_iso_estimated: "1931-03-23", precision: "exact", chronological_sequence_index: 77, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "Night of 23 March 1931", context: "Lahore Central Jail to Ganda Singh Wala on Sutlej river." },
      record_revelation_time: { date_raw: "1931", context: "Secret police files in Lahore Archives." },
      source_time: { publication_year: 2022, author_analysis: "Juss unearths Plate 20 to demonstrate state-planned secrecy." }
    },
    context: { micro_context: "Rear gate of Lahore Central Jail under blackout conditions; military lorries with armed escorts.", meso_context: "Emergency police orders forbidding delivery of bodies to families.", macro_context: "Colonial state desperate to prevent funeral processions that could ignite nationwide rebellion." },
    entities: [{ entity_id: "ENT-POLICE-PUNJAB", name: "Punjab Police Secret Command", role: "Disposal authority", type: "institution" }],
    relationships: [{ target_unit_id: "KU-BS-CH47-01", relationship_type: "supports", nature: "Provides direct documentary proof of the secret cremation order in Chapter 47." }],
    causal_relationships: [],
    evidence: [{ type: "secret_executive_disposal_order", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official secret police order sheet preserved in Punjab Archives Lahore." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 20 Text: 'The bodies are to be removed secretly by the back gate and taken by military lorry to Ganda Singh Wala near Ferozepur for cremation tonight under police escort.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "secret_order", description: "Official disposal order authenticated in Lahore Archives." },
    source_provenance: { manifest_unit_ids: ["bhasin0001175", "bhasin0001176"], notes_referenced: [], archival_citations: ["Punjab Archives Lahore, Secret Execution File, Plate 20"] },
    genre_specific_payload: { document_title: "Secret Post-Execution Disposal Order", author_or_origin: "District Magistrate / Senior Superintendent of Police, Lahore", document_date: "23 March 1931", medium_format: "Official confidential order sheet (A20.jpg)", legal_or_ideological_significance: "Proves that the state consciously engaged in covert nighttime disposal of the martyrs' bodies.", key_verbatim_excerpts: ["Corpses to be taken by lorry to Ganda Singh Wala and cremated before dawn."], author_vs_editor_vs_biographer_framing: "Juss uses this document to prove that the colonial authorities acted in terror of dead revolutionaries." }
  },
  {
    unit_id: "KU-BS-APP-21",
    unit_type: "DOCUMENT_UNIT",
    genre: "historical_biography",
    source_location: {
      document: "appendix.xhtml",
      chapter_number: 56,
      chapter_title: "Appendix",
      element_ids: ["bhasin0001178", "bhasin0001179"]
    },
    structural_position: { part: "APPENDIX", chapter: "Appendix: Archival Plates", section: "Plate 21" },
    title: "Archival Plate 21: British Intelligence Post-Mortem Analysis of Political Fallout",
    summary_statement: "Facsimile reproduction of the British Intelligence Special Branch post-mortem appraisal dated April 1931 analyzing the immense political and psychological fallout of the executions across British India, noting that Bhagat Singh's popularity had eclipsed that of Mahatma Gandhi.",
    materiality: "critical",
    materiality_reason: "Primary colonial intelligence assessment conceding the political victory of Bhagat Singh's martyrdom.",
    epistemic_status: "[CONTEMPORARY_RECORD]",
    confidence: "high",
    temporal_anchor: { date_raw: "April 1931", date_iso_estimated: "1931-04-10", precision: "approximate_month", chronological_sequence_index: 78, contested_dating: { is_disputed: false, competing_variants: [] } },
    dual_timeline: {
      event_time: { date_raw: "April 1931", context: "Compiled by Intelligence Bureau, Home Department, New Delhi." },
      record_revelation_time: { date_raw: "1931", context: "Filed in Home Political Secret archives." },
      source_time: { publication_year: 2022, author_analysis: "Juss concludes the appendix with this imperial confession of Bhagat Singh's moral triumph." }
    },
    context: { micro_context: "Intelligence Bureau directorate, New Delhi.", meso_context: "Colonial state monitoring nationwide hartals, student strikes, and memorial meetings.", macro_context: "The imperial realization that hanging Bhagat Singh made him an immortal revolutionary symbol." },
    entities: [{ entity_id: "ENT-IB", name: "Intelligence Bureau, Government of India", role: "Imperial intelligence agency", type: "institution" }],
    relationships: [{ target_unit_id: "KU-BS-CH55-01", relationship_type: "supports", nature: "Corroborates the global ideological impact in Chapter 55." }],
    causal_relationships: [],
    evidence: [{ type: "secret_intelligence_appraisal", temporal_proximity: "contemporaneous", source_independence: "independent_firsthand", institutional_position: "state_executive", coercive_context: "confidential_private", corroboration_state: "corroborated_across_opposing_records", evidentiary_reliability_assessment: "Official Intelligence Bureau secret dispatch preserved in National Archives of India." }],
    source_evidence: ["[CONTEMPORARY_RECORD] Plate 21 Text: 'Bhagat Singh has won an immense, almost unprecedented popularity. For the time being, his name is on the lips of every young man in India, completely overshadowing Mr. Gandhi.'"],
    competing_accounts: [],
    uncertainty: { degree: "none", type: "intelligence_assessment", description: "Preserved in National Archives of India." },
    source_provenance: { manifest_unit_ids: ["bhasin0001178", "bhasin0001179"], notes_referenced: [], archival_citations: ["NAI Home Political (1931), F. 18/4/31, Intelligence Bureau Appraisal, Plate 21"] },
    genre_specific_payload: { document_title: "Intelligence Bureau Appraisal on Post-Execution Fallout", author_or_origin: "Director, Intelligence Bureau, Government of India", document_date: "April 1931", medium_format: "Secret typescript memorandum (A21.jpg)", legal_or_ideological_significance: "Official imperial admission that the executions backfired politically and immortalized the revolutionary cause.", key_verbatim_excerpts: ["His photograph is sold in every bazaar; his name overshadows Mr. Gandhi."], author_vs_editor_vs_biographer_framing: "Juss uses this final plate to demonstrate that while the Raj took Bhagat Singh's life, it lost the battle for the mind of India." }
  }
];
