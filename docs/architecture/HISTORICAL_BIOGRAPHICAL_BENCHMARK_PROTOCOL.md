# BKRS Historical & Biographical Benchmark Protocol
## Pre-Scale Forensic Standard for History, Biography & Documentary Corpora

**Document**: `HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`  
**System**: Intellectualist / Book Knowledge Reconstruction System (BKRS v1.0)  
**Standard**: Milestone 3 Gateway Certification Protocol (Amended & Frozen)  
**Status**: Canonical Architectural Standard  
**Mandate**: This protocol defines the universal architectural criteria and forensic validation standards that must be satisfied by ANY historical, biographical, autobiographical, or documentary Book Master benchmark before the BKRS platform is permitted to advance to Milestone 4 (Multi-Source Cross-Book Synthesis).

---

# 1. THE FOUNDATIONAL MANDATE

Historical, biographical, and documentary works present the highest epistemic risk in knowledge reconstruction. Unlike literary fiction (where the author's text defines a closed narrative universe) or analytical non-fiction (where an author systematically defends a unified thesis), historical texts operate across contested, multi-vocal, and partially documented reality.

A historical or biographical monograph typically integrates:
1. **Primary documentary records** (letters, official gazettes, court proceedings, interrogation transcripts, diaries).
2. **Contemporary eyewitness accounts** (depositions, memoirs, confederate recollections, adversary reports).
3. **Institutional and socio-political context** (statutory frameworks, economic conditions, state archives).
4. **Secondary scholarly commentary** (historiographical debates, ideological assessments, contextual hypotheses).
5. **Authorial psychological and moral conjectures** (speculative attribution of internal motives, retrospective emotional framing).

### The Fatal Epistemic Failure Mode:
> If an AI system ingests a historical work and emits unstructured notes stating *"Subject X believed Y and did Z because of W,"* it has committed catastrophic epistemic flattening. It has silently collapsed the modern historian's interpretive hypothesis into the historical subject's verified reality.

### The Gateway Criterion:
Before BKRS may synthesize multi-book subject corpora, it must empirically demonstrate within a single benchmark that its canonical representation rigorously isolates, preserves, and cross-references:
- **WHAT ACTUALLY OCCURRED** (Corroborated empirical baseline)
- **WHAT THE SOURCE CLAIMS OCCURRED** (Source-documented account)
- **WHAT THE HISTORICAL SUBJECT WROTE OR UTTERED** (Verifiable primary utterance)
- **WHAT CONTEMPORARY OBSERVERS REPORTED** (Eyewitness / participant testimony)
- **WHAT THE HISTORIAN / BIOGRAPHER ARGUES** (Secondary thesis / interpretation)
- **WHAT THE BIOGRAPHER CONJECTURES** (Psychological / counterfactual speculation)
- **WHAT THE MODERN SCHOLARLY EDITOR ANNOTATED** (Footnotes / text apparatus)
- **WHAT BKRS INFERENCES MAY SUGGEST** (Analytical system synthesis)

---

# 2. THE 20 CONSTITUTIONAL SPECIFICATIONS FOR HISTORY & BIOGRAPHY

## 1. Historical / Biographical Primary Unit: Multi-Type Granular Architecture
The fundamental unit of reconstruction is genre-adapted to prevent structural distortion across historical sub-genres:
- **`HISTORICAL_EPISODE`**: For third-person narrative history and third-party biography. Represents a bounded historical occurrence anchored in time, geography, actors, and documented actions.
- **`LIFE_EPISODE`**: For first-person autobiography and memoir. Focuses on subjective lived experience, decisions, dilemmas, emotional weather, retrospective reflections, and worldview shifts.
- **`DOCUMENT_UNIT`**: For documentary editions, compiled writings, correspondence volumes, trial proceedings, and personal notebooks. Focuses on textual units (essays, letters, legal petitions, notebook entries) preserving archival metadata, reception context, and editorial apparatus.

Every unit, regardless of type, must encapsulate:
- `temporal_anchor`: Structured chronological placement (exact, approximate, or contested).
- `geographic_institutional_setting`: Physical venue, jurisdiction, and administrative environment.
- `historical_actors`: Explicit entity nodes present (individuals, factions, institutions).
- `documented_action_or_text`: Physical occurrences or text verified by primary records.
- `subject_utterances`: Verbatim primary statements made by historical actors.
- `evidentiary_base`: Primary documents cited by the source.
- `secondary_framing`: Authorial / editorial interpretation.
- `historiographical_status`: Uncontested, disputed, or revisionist.

## 2. Source Structure Representation & Scholarly Apparatus
Historical monographs and documentary editions are composite artifacts. The reconstruction engine must strictly segregate:
- **Primary Text Layer**: The authored text of the subject, archival transcripts, photostat reproductions, or historical narrative.
- **Secondary Scholarly Apparatus**: Biographer prefaces, introductions, bibliographic essays, and historiographical commentary.
- **Editorial Annotation Layer**: Modern editor footnotes, textual corrections, bracketed translations, glossaries, and dating conjectures.
- **Document Provenance**: Formal identification of the source genre (primary document collection, critical edition, scholarly biography, eyewitness memoir, or legal history monograph).

## 3. Chronological Representation: Dual-Timeline & Temporal Precision Schema
The temporal engine decouples the event's occurrence from the source's narrative revelation:
1. **The Objective Chronological Timeline (Event Time)**: The chronological sequence of historical reality from inception to aftermath.
2. **The Narrative / Archival Timeline (Source Journey Time)**: The sequence in which the source exposes documents, introduces retrospective reflections, or unearths archival evidence.

### Temporal Precision Schema:
To eliminate false precision when handling undated or contested records, every temporal anchor must specify:
```json
{
  "temporal_anchor": {
    "date_raw": "String as stated in source (e.g. 'Late Autumn 1928' or 'Circa May 1930')",
    "date_iso_estimated": "YYYY-MM-DD or null if wholly indeterminable",
    "precision": "exact | approximate_month | approximate_year | circa | disputed_range | undated_sequence",
    "chronological_sequence_index": 104,
    "contested_dating": {
      "is_disputed": false,
      "competing_variants": []
    }
  }
}
```

## 4. Event Hierarchy & Granularity Architecture
Events must be mapped at three distinct structural tiers without loss of forensic texture:
- **Macro-Events**: Epochal movements, legal proceedings spanning years, and nationwide political shifts.
- **Meso-Events**: Distinct operational actions, organizational conferences, specific trial sessions, and tactical turning points.
- **Micro-Events**: Granular physical and somatic details establishing realistic texture (e.g., physical attire, leaflet typography, exact weapon calibers, jail cell dimensions, medical diet sheets, reading lists).

## 5. Person & Entity Modeling: Objective Record vs. Subjective Depictions
Entities (persons, revolutionary committees, state bodies, political parties, judicial tribunals) are first-class knowledge objects:
- **Entity Identity Record**: Stores ONLY verifiable biographical facts: normalized canonical name, documented aliases/pseudonyms, dates of birth/death, formal institutional affiliations, and verified titles.
- **Separation of Entity from Portrayal**: Subjective characterizations (e.g., "fanatical", "saintly", "traitorous", "heroic") must NEVER be stored as entity attributes. All subjective depictions must be quarantined under:
  ```json
  "portrayals": [
    {
      "source_claimant": "Entity or Author ID",
      "characterization": "Textual depiction",
      "date_of_utterance": "Date",
      "coercive_or_political_context": "Context description",
      "epistemic_status": "biographer_conjecture | contemporary_opponent_claim | comrade_eulogy"
    }
  ]
  ```

## 6. Three-Tier Context Representation
Every unit must encode historical context across three distinct tiers:
- **Micro-Context**: Immediate physical environment, somatic condition, fatigue, room layout, interpersonal tensions.
- **Meso-Context**: Operational, institutional, and legal constraints—police surveillance, censorship statutes, emergency ordinances, procedural codes.
- **Macro-Context**: Macro-political, ideological, and global historical climate—mass national movements, international revolutionary waves, economic depressions, imperial geopolitical shifts.

## 7. Evidence Representation & The "Primary Does Not Mean True" Principle
The engine classifies evidence while enforcing the core historical axiom:
> **"Primary denotes temporal proximity to the event, NOT objective truth."**
A primary document proves that a text or statement was produced at a given date; it does NOT establish that its contents are factually true without corroboration.

### Distinct Evidence-Assessment Layer:
Every evidence-bearing unit must encapsulate structured qualitative assessment fields (independent of epistemic status):
- `temporal_proximity`: `contemporaneous` | `near_term` | `retrospective_decades_later`
- `source_independence`: `independent_firsthand` | `derived_from_prior_document` | `interdependent_circular`
- `institutional_position`: `state_executive` | `insurgent_dissident` | `detached_witness` | `judicial_officer`
- `coercive_context`: `voluntary_public` | `confidential_private` | `custodial_interrogation` | `physical_coercion` | `state_approver_under_pardon`
- `corroboration_state`: `corroborated_across_opposing_records` | `singular_uncorroborated` | `directly_conflicted_by_counter_evidence`
- `evidentiary_reliability_assessment`: A structured qualitative evaluation detailing credibility strengths, documented incentives to fabricate, and known institutional biases (numerical reliability scores are strictly forbidden).

## 8. Source Attribution & Context of Utterance
When attributing declarations, confessions, or manifestos to historical actors, the system must record the coercive and legal environment:
- Statement uttered in open court to broadcast ideology to the public.
- Statement extracted under secret custodial interrogation or torture.
- Statement delivered as an accomplice turning state approver to evade capital punishment.
- Confidential letter written to an intimate comrade or family member.
- Underground pamphlet published anonymously for mass agitation.
These distinct conditions must never be homogenized.

## 9. Primary vs. Secondary Source Demarcation: The Non-Masquerade Rule
- **Primary Source**: What the historical subject documents, writes, or states.
- **Secondary Source**: What a historian, biographer, or later commentator asserts about the subject.
- **The Non-Masquerade Rule**: Under no circumstance may a secondary author's interpretive hypothesis (e.g., claiming a historical actor suffered from unconscious psychological complexes or hidden despair) be stated as the subject's own internal motivation or belief.

## 10. Conflicting Historical Claims Engine: Anti-Harmonization Mandate
When accounts disagree, the system must preserve the contradiction in its canonical layer rather than averaging, smoothing, or declaring a majority-vote truth:
```json
{
  "contested_issue": "Specific factual or causal point of historical disagreement",
  "competing_accounts": [
    {
      "claim_id": "CLAIM-01",
      "source_text": "Source A citation",
      "assertion": "Specific factual claim asserted by Source A",
      "witness_or_document": "Name/nature of supporting witness or archive",
      "evidence_assessment": {
        "temporal_proximity": "contemporaneous",
        "coercive_context": "uncoerced_private"
      }
    },
    {
      "claim_id": "CLAIM-02",
      "source_text": "Source B citation",
      "assertion": "Directly contradictory claim asserted by Source B",
      "witness_or_document": "Name/nature of supporting witness or archive",
      "evidence_assessment": {
        "temporal_proximity": "retrospective_decades_later",
        "coercive_context": "approver_under_pardon"
      }
    }
  ],
  "historiographical_status": "unresolved_contradiction | historiographical_split | partially_convergent",
  "system_synthesis": "Explicit analytical statement of the divergence without artificial resolution."
}
```

## 11. Four-Tier Historical Uncertainty Taxonomy
The system explicitly categorizes degrees of historical certainty:
1. `ESTABLISHED_FACT`: Corroborated across independent records from opposing institutional/ideological sides.
2. `PROBABLE_HISTORICAL_INFERENCE`: Strongly supported by circumstantial evidence, consensus documentation, and structural coherence, but lacking direct signed confession.
3. `CONTESTED_TESTIMONY`: Mutually contradictory statements given by co-participants, approvers, or partisan contemporaries.
4. `DOCUMENTARY_SILENCE_OR_ABSENCE`: Critical records intentionally suppressed, destroyed by state actors, or non-existent in preserved archives.

## 12. Author Interpretation vs. Historical Evidence Demarcation
A strict structural delimiter segregates verified evidence from authorial narrative prose:
- Evidence: What the archival record explicitly quotes or documents &rarr; `[PRIMARY_SUBJECT_WRITING]` or `[SOURCE_DOCUMENTED_EVENT]`
- Interpretation: What the modern author deduces, theorizes, or frames around the evidence &rarr; `[BIOGRAPHER_THESIS]` or `[BIOGRAPHER_CONJECTURE]`

## 13. Refined Causal Architecture: Anti-Post-Hoc Standard
### Hard Rule: **`TEMPORAL SEQUENCE ≠ CAUSATION`**
A historical causal relationship must NEVER be inferred merely because Event B chronologically followed Event A.
Every causal edge connecting historical units must declare one of four distinct causal statuses:
1. `[DOCUMENTED_CAUSATION]`: Direct primary documentary proof demonstrating that Decision/Action B was explicitly undertaken because of Condition/Event A (e.g., meeting minutes, official orders, or letters stating the causal motive).
2. `[CORROBORATED_CAUSAL_INFERENCE]`: High historical probability established by multiple independent circumstantial evidence trails and structural incentives, widely accepted by consensus historiography.
3. `[HISTORIAN_CAUSAL_HYPOTHESIS]`: A causal explanation argued by the specific author/historian without conclusive primary documentation.
4. `[BKRS_CAUSAL_INFERENCE]`: A systemic causal hypothesis derived by the BKRS platform from cross-unit synthesis.

Every causal link in `knowledge-units.json` must carry:
```json
{
  "target_unit_id": "UNIT-ID",
  "causal_status": "documented_causation | corroborated_causal_inference | historian_causal_hypothesis | bkrs_causal_inference",
  "supporting_evidence": "Citation to primary document or historian argument",
  "provenance": "Chapter and page",
  "competing_explanations": ["Alternative causal hypotheses documented in historiography"],
  "epistemic_attribution": "authorial_thesis | primary_record | system_synthesis"
}
```

## 14. Relationship Trajectories Across Historical Actors
The engine tracks long-term personal, tactical, and ideological relationships across five formal stages:
`Stage 1: Initial Encounter / Affiliation` &rarr; `Stage 2: Operational Collaboration` &rarr; `Stage 3: Tactical / Ideological Tension` &rarr; `Stage 4: Crisis, Fracture or Trial Crucible` &rarr; `Stage 5: Final State, Legacy & Historical Memory`.

## 15. Cross-Event Historical Dependencies (DAG Architecture)
Historical events are nodes in a Directed Acyclic Graph (DAG) mapping precedent conditions, legal prerequisites, and systemic fallout. No major historical event may be presented as an isolated anecdote.

## 16. Four-Level Materiality Taxonomy for History
- **Level 1: CRITICAL**: Turning points that redirect historical developments or formulate foundational ideological treatises.
- **Level 2: IMPORTANT**: Key tactical decisions, crucial legal cross-examinations, significant organizational resolutions.
- **Level 3: TEXTURAL**: Mundane realism establishing daily life (e.g., cell conditions, disguise techniques, financial penury, books read in prison). **Textural details must remain recoverable and must never be discarded merely because they do not alter macro-history.**
- **Level 4: REDUNDANT**: Repetitive procedural court adjournments, boilerplate administrative notifications.

## 17. The 9-Tag Epistemic Demarcation System
Every claim in the canonical representation must carry exactly one mutually exclusive epistemic tag:
1. `[CORROBORATED_HISTORICAL_FACT]`: Empirical reality verified across opposing records.
2. `[SOURCE_DOCUMENTED_EVENT]`: What the specific source monograph claims occurred.
3. `[PRIMARY_SUBJECT_WRITING]`: Verbatim authored text of the historical subject.
4. `[PRIMARY_SUBJECT_UTTERANCE]`: Words spoken by the subject, recorded contemporaneously.
5. `[CONTEMPORARY_RECORD]`: Official minutes, court transcripts, medical bulletins, intelligence reports.
6. `[COERCED_TESTIMONY]`: Statements given under custodial interrogation, torture, or approver pardon.
7. `[BIOGRAPHER_THESIS]`: The author's central historical argument or explanatory framework.
8. `[BIOGRAPHER_CONJECTURE]`: Speculative psychological, emotional, or counterfactual narrative assertions.
9. `[EDITOR_ANNOTATION]`: Footnotes, dating conjectures, and textual apparatus introduced by the modern documentary editor.

## 18. Source Traceability
Every claim must provide complete backward provenance:
`Subject Claim → Historical Unit ID → Chapter & Page in Source → Archival / Documentary Citation`.

## 19. Three Reader Views for History & Biography
- **View A: The Chronological & Documentary Journey**: Sequential historical flow preserving the revelation of evidence and chronological tension.
- **View B: The Historiographical & Relational Map**: Ideological development trees, entity matrices, timeline comparison graphs, and evidentiary conflict registers.
- **View C: The Ideological Dialectic & Historical Crucible**: Primary ideological essays, courtroom trial speeches, forensic counterfactual audits, and active recall drills.
- **Strict Derivation Mandate**: Views B and C are 100% data-driven transformations of `knowledge-units.json`. No fact or interpretation may exist in View B or C that is not encoded in the canonical JSON layer.

## 20. Independent Validation Methodology
Validation is executed via an independent, hidden source-derived test suite of **50 forensic questions** strictly generated from the source material according to the 50 universal archetypes defined below.

---

# 3. THE 50 ABSTRACT FORENSIC VALIDATION ARCHETYPES
## Universal Question Taxonomy & Evaluation Rubrics (Source-Agnostic)

To guarantee scientific independence and prevent benchmark leakage, this protocol defines **50 abstract forensic question archetypes across 7 core dimensions**. 

These archetypes define **WHAT MUST BE TESTED** and the **MINIMUM EVALUATION RUBRIC**, without containing candidate-specific names, dates, places, or outcomes. The concrete questions will be authored strictly from the selected benchmark text during Step 2 of benchmark execution.

```
                              THE 50 FORENSIC INQUIRIES
┌──────────────────────────────────────────────┬──────────────────────────────┐
│ Forensic Dimension                           │ Required Question Allocation │
├──────────────────────────────────────────────┼──────────────────────────────┤
│ 1. Macro-Historical Structure & Chronology   │ 7 Questions (Q01 – Q07)      │
│ 2. Primary Text & Verbatim Subject Utterance │ 8 Questions (Q08 – Q15)      │
│ 3. Micro-Texture & Evidentiary Forensics     │ 8 Questions (Q16 – Q23)      │
│ 4. Multi-Step Causal Historical Mechanics    │ 8 Questions (Q24 – Q31)      │
│ 5. Epistemic Demarcation: Author vs Subject  │ 8 Questions (Q32 – Q39)      │
│ 6. Historiographical Disputes & Conflicts    │ 6 Questions (Q40 – Q45)      │
│ 7. Cross-Event Dependencies & Trajectories   │ 5 Questions (Q46 – Q50)      │
└──────────────────────────────────────────────┴──────────────────────────────┘
```

---

### Dimension 1: Macro-Historical Structure & Chronology (7 Archetypes)
*Tests whether macro-sequence, temporal pacing, and chronological transitions are preserved without temporal distortion.*

- **[ARCHETYPE-01] Epochal Calendar Anchor**: Tests whether the reconstruction recovers the exact documented date, time, and location of the primary historical turning point without calendar error.
- **[ARCHETYPE-02] Interval & Pacing**: Tests whether the reconstruction preserves the precise documented temporal interval between an initial catalyst and the subsequent response.
- **[ARCHETYPE-03] Spatial-Temporal Tracking**: Tests whether the reconstruction tracks the verified physical movements of historical actors across geographic and administrative jurisdictions.
- **[ARCHETYPE-04] Institutional/Legal Timeline Progression**: Tests whether the formal procedural stages of a legal or administrative proceeding (e.g., from initial charge to final decree) are chronologically segregated.
- **[ARCHETYPE-05] Confinement/Action Duration**: Tests whether the reconstruction accurately records the exact start dates, end dates, and duration phases of a sustained historical crisis, incarceration, or campaign.
- **[ARCHETYPE-06] Structural Organizational Turning Point**: Tests whether the reconstruction identifies the precise chronological juncture at which an organization rebranded, altered its manifesto, or reorganized leadership.
- **[ARCHETYPE-07] Narrative Exposure vs. Historical Occurrence**: Tests whether the system decouples retrospective flashbacks or later archival discoveries from the historical sequence in which the events actually occurred.

---

### Dimension 2: Primary Text & Direct Subject Utterance Fidelity (8 Archetypes)
*Tests whether the subject's authentic voice, specific ideological definitions, and written formulations are preserved without modern paraphrase or summarization.*

- **[ARCHETYPE-08] Core Theoretical/Philosophical Formulation**: Tests whether the exact conceptual definitions, premises, and deductions of the subject’s primary authored treatise are preserved.
- **[ARCHETYPE-09] Formal Public/Courtroom Declarations**: Tests whether the verbatim phrases spoken or submitted by the historical subject in formal public proceedings are preserved without softening.
- **[ARCHETYPE-10] Ideological Re-definition of Core Terms**: Tests whether the subject's explicit re-definition of contested political, moral, or philosophical terms is accurately documented.
- **[ARCHETYPE-11] Private Correspondence Nuance**: Tests whether the distinct ethical, emotional, or strategic nuances expressed in private letters to confederates are preserved and distinguished from public propaganda.
- **[ARCHETYPE-12] Reading Corpus & Intellectual Provenance**: Tests whether specific books, theoretical treatises, and external intellectual influences read or cited by the subject are preserved.
- **[ARCHETYPE-13] Direct Rebuttal to Contemporary Opponents**: Tests whether the subject's direct written counter-arguments against reformist, religious, or hostile ideological opponents are documented with structural completeness.
- **[ARCHETYPE-14] Underground Manifesto / Agitational Text**: Tests whether verbatim excerpts and tactical arguments from underground or clandestine manifestos are preserved.
- **[ARCHETYPE-15] Final Testament / Concluding Life Declaration**: Tests whether the verifiable written or spoken words produced by the subject in their final documented hours are preserved without romantic mythologizing.

---

### Dimension 3: Micro-Texture & Evidentiary Forensics (8 Archetypes)
*Tests whether ordinary, somatic, and procedural realism is preserved to prevent analytical bloodlessness.*

- **[ARCHETYPE-16] Disguise & Physical Alteration**: Tests whether concrete physical details of disguises, clothing, altered appearance, or forged credentials used during clandestine operations are preserved.
- **[ARCHETYPE-17] Operational Artifacts & Technology**: Tests whether exact specifications of physical tools, weaponry, printing mechanisms, chemicals, or vehicles are documented.
- **[ARCHETYPE-18] Physical Spatial Scene Forensics**: Tests whether the micro-details of a physical action scene (lighting, sound, spatial positioning of actors, escape routes) are recovered.
- **[ARCHETYPE-19] Daily Incarceration / Somatic Realism**: Tests whether the somatic conditions of confinement (cell dimensions, rations, hygiene, medical procedures, sensory deprivation) are preserved as Textural knowledge.
- **[ARCHETYPE-20] Material & Financial Scarcity**: Tests whether specific monetary sums, debt burdens, and physical deprivations endured by participants are documented.
- **[ARCHETYPE-21] Clandestine Tradecraft & Communications**: Tests whether operational aliases, couriers, dead drops, and communication ciphers are recorded.
- **[ARCHETYPE-22] State Surveillance & Intelligence Methods**: Tests whether specific techniques used by state or police authorities (informants, mail interception, tailing reports) are preserved.
- **[ARCHETYPE-23] Eyewitness Physical & Emotional Reactions**: Tests whether the somatic and emotional reactions of bystanders, officials, or magistrates during confrontations are recorded.

---

### Dimension 4: Multi-Step Causal Historical Mechanics (8 Archetypes)
*Tests whether causal links are documented as multi-step mechanisms rather than assumed through temporal succession.*

- **[ARCHETYPE-24] Multi-Link Retaliatory Causation**: Tests whether the system reconstructs the full causal chain connecting initial state action &rarr; organizational decision &rarr; operational design &rarr; eventual execution.
- **[ARCHETYPE-25] The Mechanics of Operational Divergence**: Tests whether the breakdown in communication, identification, or execution leading to an operational error is causally explained.
- **[ARCHETYPE-26] Strategic Function of Sacrificial Action**: Tests whether the calculated political or psychological logic behind choosing arrest or martyrdom over escape is documented.
- **[ARCHETYPE-27] Instrumentalization of Legal / State Forums**: Tests whether the deliberate strategy to transform courtroom proceedings or state trials into political platforms is explained.
- **[ARCHETYPE-28] Physiological Protest & Political Mobilization**: Tests whether the causal mechanics connecting bodily suffering (e.g. hunger strike) to public unrest and policy concessions are articulated.
- **[ARCHETYPE-29] Coercive Pressures Driving Collaboration / Betrayal**: Tests whether the specific pressures (torture, isolation, financial promises, familial leverage) causing confederates to turn state witnesses are preserved.
- **[ARCHETYPE-30] State Institutional Reaction & Extraordinary Law**: Tests whether the specific political motivations prompting the state to issue emergency ordinances or bypass normal jurisprudence are documented.
- **[ARCHETYPE-31] Post-Crisis Political Shockwaves**: Tests whether the immediate political and factional crises generated within the broader political movement following a major execution or trial are mapped.

---

### Dimension 5: Epistemic Demarcation — Author vs. Subject vs. Fact (8 Archetypes)
*Audits whether the Book Master cleanly isolates the modern biographer's interpretations from primary facts.*

- **[ARCHETYPE-32] Subject Utterance vs. Biographer Modernization**: Tests whether the reconstruction distinguishes the subject's authentic historical language from the biographer's modern paraphrase.
- **[ARCHETYPE-33] Empirical Record vs. Biographer Psychological Conjecture**: Tests whether the biographer's speculative assertions regarding the subject's internal emotional state or unvoiced motives are quarantined as interpretation.
- **[ARCHETYPE-34] Contemporaneous Record vs. Retrospective Recollection**: Tests whether discrepancies between immediate records (e.g. police logs) and memoirs written decades later are explicitly noted.
- **[ARCHETYPE-35] Subjective Perception vs. Documented Reality**: Tests whether the system distinguishes what the historical subject believed was happening from what subsequent records proved actually occurred.
- **[ARCHETYPE-36] Quarantining Biographer Ideological Framework**: Tests whether the biographer's modern political or moral framework is isolated under secondary analysis.
- **[ARCHETYPE-37] Approver / Coerced Deposition Discounting**: Tests whether statements made under custodial torture or state pardon are quarantined and flagged for coercive context.
- **[ARCHETYPE-38] Official Record Disinformation / Bias**: Tests whether official state or police reports framing political acts as mere common criminality are flagged for institutional bias.
- **[ARCHETYPE-39] Quarantining Systemic Synthesis**: Tests whether analytical deductions generated by the BKRS platform itself are explicitly marked as `[BKRS_CAUSAL_INFERENCE]` or `[SYSTEM_SYNTHESIS]`.

---

### Dimension 6: Historiographical Disputes & Conflicting Evidence (6 Archetypes)
*Tests whether the system preserves unresolved scholarly debates without manufacturing artificial consensus.*

- **[ARCHETYPE-40] Disputed Key Leader Meeting / Conversation**: Tests whether competing, mutually irreconcilable accounts of an unminuted meeting between major historical actors are preserved side-by-side.
- **[ARCHETYPE-41] Contested Diplomatic / Political Negotiation**: Tests whether divergent historical interpretations regarding the intentions and concessions of state or national leaders during negotiations are preserved.
- **[ARCHETYPE-42] Ballistic / Physical Forensic Contradiction**: Tests whether conflicting evidence between medical autopsies, trial depositions, and participant claims is preserved without choosing a winner.
- **[ARCHETYPE-43] Clandestine Disposal / Cover-Up Controversy**: Tests whether conflicting accounts surrounding covert state actions (e.g. secret body disposal, destroyed records) are preserved.
- **[ARCHETYPE-44] Ideological Maturation / Evolution Debate**: Tests whether differing historiographical interpretations of the subject's final political philosophy are documented.
- **[ARCHETYPE-45] Document Authenticity / Secret Intelligence Dossier**: Tests whether debates between scholars regarding the veracity or fabrication of disputed intelligence files are documented.

---

### Dimension 7: Cross-Event Dependencies & Relational Trajectories (5 Archetypes)
*Tests whether long-term interpersonal and ideological trajectories are maintained across disparate chapters.*

- **[ARCHETYPE-46] Interpersonal Trajectory Under Legal / Physical Pressure**: Tests whether the evolution of a relationship between confederates across collaborative, trial, and fatal stages is mapped across time.
- **[ARCHETYPE-47] Generational / Ideological Rupture**: Tests whether the intellectual and strategic break between young radicals and elder constitutional leadership is preserved across the work.
- **[ARCHETYPE-48] Tactical Reversal Causal Dependency**: Tests whether an earlier failure or tactical vulnerability directly dictates the operational parameters of a subsequent action.
- **[ARCHETYPE-49] Organizational Post-Crisis Survival**: Tests whether the long-term organizational adjustments made by surviving members after the death of key leaders are documented.
- **[ARCHETYPE-50] Historical Reality vs. Posthumous Myth**: Tests whether the system tracks how the subject's memory was simplified or partisanly appropriated by subsequent political movements.

---

# 4. BENCHMARK PASS / FAIL CRITERIA

To achieve **Milestone 3 Gateway Certification**, the reconstructed Book Master must undergo automated and forensic audit:

| Metric | Minimum Passing Threshold | Mandatory Condition |
| :--- | :--- | :--- |
| **Overall Forensic Preservation Score** | &ge; 90.0% | Calculated across all 50 questions |
| **Dimension 5 Demarcation Score** | **100.0%** | **Zero tolerance for confusing author speculation with primary source fact** |
| **Dimension 2 Primary Utterance Score** | &ge; 95.0% | Authentic primary quotes preserved without paraphrase |
| **Conflicting Claims Preservation** | 100.0% | All documented historiographical conflicts preserved without smoothing |
| **Traceability Backlink Audit** | 100.0% | Every unit points to chapter, page, and archival source |

---

# 5. BENCHMARK EXECUTION WORKFLOW

Once a candidate historical volume is selected, the benchmark follows this four-step sequence:
1. **Source Ingestion & Structural Mapping**: Ingest the text and segment into canonical units (`HISTORICAL_EPISODE`, `LIFE_EPISODE`, or `DOCUMENT_UNIT`).
2. **Independent Test Set Generation**: Generate 50 concrete, source-derived questions by instantiating the 50 abstract archetypes against the specific source text.
3. **Automated Audit Execution**: Execute the test harness against `knowledge-units.json` and `master-notes.md`.
4. **Renderer Compilation & Verification**: Compile the 3-View reader (`index.html`) and verify that Views B and C introduce zero facts absent from the canonical JSON.
