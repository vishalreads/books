# BKRS Milestone 3: Historical & Biographical Protocol Adversarial Audit
**Document**: `HISTORICAL_BIOGRAPHICAL_PROTOCOL_AUDIT.md`  
**System**: Intellectualist / Book Knowledge Reconstruction System (BKRS v1.0)  
**Target Document**: `docs/architecture/HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`  
**Auditor**: Antigravity Core Agent Architecture Team  
**Evaluation Standard**: BKRS Agent Operating Constitution (AGENTS.md & BKRS_AGENT_OPERATING_CONSTITUTION.md)  
**Status**: Formal Adversarial Audit Complete  

---

# 1. EXECUTIVE VERDICT & AUDIT SUMMARY

### Verdict: **CONDITIONALLY PASSED (AMENDMENTS REQUIRED BEFORE INGESTION)**

The *Historical & Biographical Benchmark Protocol* (`HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`) establishes a sophisticated epistemic foundation for history and biography, correctly identifying the fatal failure mode of AI history systems (collapsing secondary hypotheses into primary reality).

However, an adversarial audit against the **BKRS Agent Operating Constitution**, **CROSS_GENRE_ARCHITECTURE.md**, and previous benchmark lessons (*Norwegian Wood* V2.5 & *The Psychology of Money*) reveals **one critical structural contamination risk** and **four architectural vulnerabilities**:

1. **CRITICAL: BENCHMARK LEAKAGE & PRE-SOURCE CONTAMINATION**:  
   The protocol's 50-question validation section contains concrete historical names, events, and controversies (e.g., Saunders shooting, Ganda Singh Wala cremation, Gandhi-Irwin pact, felt hat disguise, nasal force-feeding tubes). While intended as illustrative archetypes, writing specific historical events into the *pre-source protocol* violates **Constitutional Clause 23 & 25** (*"Validation must be independent... Build tests from source"*). If the selected source is *Autobiography of a Yogi*, Max Planck, or an edited primary source collection, the validation suite is mismatched; if the source *is* Bhagat Singh, the validation has leaked into the pre-ingestion protocol before source extraction.
2. **WEAK GENRE DEMARCATION**:  
   The protocol combines "History and Biography" into a single unit (`HISTORICAL_EPISODE`), ignoring **Constitutional Clause 8** which strictly differentiates `AUTOBIOGRAPHY / MEMOIR` (primary unit: `LIFE EPISODE`, focus: subjective reflection, memory fallibility) from `HISTORY` (structural causation, historiographical disputes) and `DOCUMENTARY EDITIONS` (editor annotations vs. primary text).
3. **EPISTEMIC CONFUSION: "SOURCE FACT" VS. "DOCUMENTED CLAIM"**:  
   Tagging a biographer's assertion as `[SOURCE FACT]` risks falsely conferring objective historical reality on an author's contested assertion. The protocol must distinguish *what happened* from *what the source claims happened*.
4. **"PRIMARY DOES NOT EQUAL TRUE" FALLACY**:  
   The protocol assumes primary documents represent historical truth. A police FIR, an interrogation deposition, a colonial intelligence summary, or an approver's testimony are primary documents, but they are frequently fabricated, coerced, or politically biased.
5. **TEMPORAL RIGIDITY & APPROXIMATE DATING**:  
   The protocol lacks a formalized schema for uncertain, estimated, circa, or conflicting dates, risking the introduction of false precision.

---

# 2. DETAILED ADVERSARIAL AUDIT BY SPECIFICATION

The 20 specifications of the protocol and its validation framework were audited individually:

---

### Spec 1: Historical / Biographical Primary Unit (`HISTORICAL_EPISODE`)
- **Audit Classification**: `WEAK`
- **Constitutional Reference**: Clause 8 (*Genre Adaptation*)
- **Adversarial Analysis**:  
  The protocol defines `HISTORICAL_EPISODE` as the universal unit. This works well for narrative biography and event-driven history, but fails on two adjacent genres:
  1. *Autobiography / Memoir*: The primary unit is a `LIFE EPISODE` where subjective inner experience, retrospective reflection, and memory fallibility are central.
  2. *Documentary / Archival Collections* (e.g. *Jail Notebook and Other Writings*): The fundamental unit is an `ARCHIVAL_TEXT_UNIT` or `DOCUMENT_ENTRY` (e.g., an essay, a letter, a notebook excerpt, a legal petition). Forcing an ideological essay like *Why I Am an Atheist* into a "historical episode" creates unnatural structural distortion.
- **Remedy**: Define `HISTORICAL_EPISODE` for narrative biography/history, `LIFE_EPISODE` for autobiography/memoir, and `DOCUMENT_UNIT` for edited primary collections.

---

### Spec 2: Source Structure Representation & Edited Collections
- **Audit Classification**: `WEAK`
- **Constitutional Reference**: Clause 4 (*Source Fidelity*), Clause 15 (*Primary vs Secondary Sources*)
- **Adversarial Analysis**:  
  The protocol mentions separating narrative chapters from appendices. However, it fails to specify how to represent an **Edited Documentary Edition** (e.g., an archive edited by a modern historian). In edited volumes, the editor frequently provides:
  - Framing introductions.
  - Footnotes correcting dates or identifying obscure figures.
  - Speculative dating of undated fragments.
  If the engine treats the editor's footnotes as source facts or subject writings, catastrophic contamination occurs.
- **Remedy**: Mandate an explicit `[EDITOR_ANNOTATION]` / `[SCHOLARLY_APPARATUS]` layer strictly isolated from the subject's primary text.

---

### Spec 3: Chronological Representation & Dual-Timeline Architecture
- **Audit Classification**: `PASS` (with enhancement needed for approximate dates)
- **Constitutional Reference**: Clause 10 (*Source Journey*), Clause 11 (*Knowledge Map*)
- **Adversarial Analysis**:  
  The dual-timeline distinction (Event Time vs. Narrative Revelation Time) is architecturally sound and aligns with the Norwegian Wood benchmark. However, it assumes dates are known. In historical archives, dates are frequently uncertain (e.g., "circa late 1930", "undated prison fragment"). Forcing an ISO-8601 calendar date (`1930-10-01`) would introduce false precision.
- **Remedy**: Add an explicit `date_precision` property: `exact`, `approximate_month`, `approximate_year`, `relative_interval`, or `contested_range`.

---

### Spec 4: Event Representation & Hierarchy
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 6 (*Do Not Over-Compress*), Clause 7 (*Materiality*)
- **Adversarial Analysis**:  
  The three-tier granularity (Macro-Events, Meso-Events, Micro-Events) prevents analytical bloodlessness and successfully mirrors the Norwegian Wood scene-level preservation standard. Micro-events preserve ordinary forensic details without inflating macro-structure.

---

### Spec 5: Person & Entity Representation
- **Audit Classification**: `PASS` (with subjective depiction quarantine)
- **Constitutional Reference**: Clause 17 (*Entity Resolution*)
- **Adversarial Analysis**:  
  The separation of the entity identity record from the source's portrayal of that entity is architecturally vital. However, the protocol must explicitly forbid storing subjective characterizations (e.g., "fanatic", "saint", "traitor", "visionary") as objective attributes of the entity node. Subjective descriptions must be quarantined under `portrayals: [{ source, speaker, characterization, epistemic_status }]`.

---

### Spec 6: Three-Tier Context Representation
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 8 (*History Engine*)
- **Adversarial Analysis**:  
  Micro-context (room/cell conditions), Meso-context (colonial surveillance/legal statutes), and Macro-context (national/global geopolitics) provide comprehensive multi-layered contextual grounding.

---

### Spec 7: Evidence Representation & "Primary Does Not Mean True"
- **Audit Classification**: `CONTRADICTORY`
- **Constitutional Reference**: Clause 5 (*Never Invent*), Clause 15 (*Primary vs Secondary*)
- **Adversarial Analysis**:  
  The protocol classifies evidence into primary documents, subject writings, and eyewitnesses. But it implies that primary evidence equals established fact. This is historically false:
  - A British police FIR is a primary document, but frequently contains deliberate colonial fabrications.
  - A comrade's trial deposition is a primary document, but may have been delivered under severe CID physical torture.
  - The subject's own letter to a magistrate may contain strategic disinformation to shield absconding comrades.
- **Remedy**: Add an explicit rule: **"Primary denotes temporal proximity to the event, NOT objective truth."** Evidence nodes must include an `evidentiary_reliability_assessment` noting context, coercion, and incentives.

---

### Spec 8: Source Attribution & Context of Utterance
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 4 (*Source Fidelity*), Clause 15
- **Adversarial Analysis**:  
  Mandating the recording of the coercive and institutional context of every utterance (e.g., statement in open court vs. police torture room vs. private letter) is an exceptional strength of the protocol.

---

### Spec 9: Primary vs. Secondary Source Demarcation
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 15 (*Primary vs Secondary Sources*), Clause 38 (*Final Principle*)
- **Adversarial Analysis**:  
  The "Non-Masquerade Rule" (secondary author's thesis can never be stated as the subject's internal motive) directly enforces Clause 15 of the Constitution.

---

### Spec 10: Conflicting Historical Claims Engine
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 14 (*Preserve Disagreement*), Clause 18 (*Cross-Source Agreement*)
- **Adversarial Analysis**:  
  The JSON structure prohibiting averaging, silent reconciliation, or majority-vote truth is fully compliant. In single-book benchmarks, this handles internal conflicts between competing witnesses or contradictory police reports.

---

### Spec 11: Uncertainty Taxonomy
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 5 (*Never Invent*), Clause 38 (*What Remains Uncertain*)
- **Adversarial Analysis**:  
  The four certainty tiers (`ESTABLISHED_FACT`, `PROBABLE_INFERENCE`, `CONTESTED_TESTIMONY`, `DOCUMENTARY_SILENCE`) provide clean epistemic graduation.

---

### Spec 12: Author Interpretation vs. Historical Evidence
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 4 (*Source Fidelity*), Clause 38
- **Adversarial Analysis**:  
  The hard delimiter quarantining authorial psychological conjecture from verified primary citations is rigorous.

---

### Spec 13: Causal Mechanics & Historical Causation
- **Audit Classification**: `WEAK`
- **Constitutional Reference**: Clause 6 (*Preserve Causal Links*)
- **Adversarial Analysis**:  
  The protocol outlines root causes, trigger events, and downstream shockwaves, but fails to guard against the logical fallacy of *post hoc ergo propter hoc* (assuming temporal succession implies historical causation).
- **Remedy**: Require explicit primary or documented historiographical evidence for causal links. If a causal link is solely asserted by the author without primary documentation, it must be tagged as `[AUTHOR_CAUSAL_HYPOTHESIS]`, not as a structural historical causal law.

---

### Spec 14: Relationship Trajectories Across Historical Actors
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 12 (*Relationship Rule*)
- **Adversarial Analysis**:  
  Applies the 5-stage developmental relationship trajectory established in Norwegian Wood (Initial &rarr; Development &rarr; Tactical/Ideological Tension &rarr; Crisis &rarr; Late State/Legacy) to historical actors with high fidelity.

---

### Spec 15: Cross-Event Dependencies (DAG Architecture)
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 12 (*Relationship Rule*), Clause 29 (*Cross-Referencing*)
- **Adversarial Analysis**:  
  Directed Acyclic Graph (DAG) dependency mapping correctly models historical preconditions.

---

### Spec 16: Four-Level Materiality Taxonomy for History
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 7 (*Materiality*)
- **Adversarial Analysis**:  
  Direct translation of the Norwegian Wood / Psychology of Money 4-level materiality schema (Critical, Important, Textural, Redundant) to historical and archival data. Explicitly protects Textural details (prison routines, books read) from being pruned.

---

### Spec 17: Epistemic Demarcation System (Tagging Taxonomy)
- **Audit Classification**: `WEAK`
- **Constitutional Reference**: Clause 4 (*Source Fidelity*)
- **Adversarial Analysis**:  
  The 8 tags currently listed are:
  `[SOURCE FACT]`, `[PRIMARY WRITING]`, `[SUBJECT DECLARATION]`, `[CONTEMPORARY RECORD]`, `[APPROVER/EYEWITNESS]`, `[BIOGRAPHER THESIS]`, `[BIOGRAPHER CONJECTURE]`, `[HISTORIOGRAPHICAL DISPUTE]`.
  *Problems*:
  1. `[SOURCE FACT]` is ambiguous. If the source book makes an assertion, is it a "Fact" or a "Claim"? Calling it `[SOURCE FACT]` risks conferring objective reality onto a biographer's unverified claim. It should be `[SOURCE_DOCUMENTED_FACT]` (undisputed empirical event) versus `[AUTHOR_CLAIM]` (author's thesis).
  2. Missing Tag: `[EDITOR_ANNOTATION]` (for documentary/scholarly editions).
  3. Missing Tag: `[COERCED_TESTIMONY]` (for statements made under torture/approver pardon).

---

### Spec 18: Source Traceability
- **Audit Classification**: `PASS`
- **Constitutional Reference**: Clause 19 (*Source Provenance*)
- **Adversarial Analysis**:  
  Complete backward traceability schema: `Subject Claim → Episode Unit → Chapter/Page in Source → Archival Citation`.

---

### Spec 19: Three Reader Views for History & Biography
- **Audit Classification**: `PASS` (with strict canonical derivation check)
- **Constitutional Reference**: Clause 9 (*Three Reading Views*), Clause 22 (*Rendering*)
- **Adversarial Analysis**:  
  - View A: The Chronological & Documentary Journey (Sequential revelation).
  - View B: The Historiographical & Relational Map (Systemic matrices, DAGs, conflict registers).
  - View C: The Ideological Dialectic & Historical Crucible (Primary texts, trial speeches, active recall).
  *Condition*: View B and View C must be 100% data-driven transformations of `knowledge-units.json`. No fact or interpretation may be introduced in View B or C that is absent from the canonical JSON layer.

---

### Spec 20 & Section 3: The 50-Question Forensic Validation Protocol
- **Audit Classification**: **`BENCHMARK-LEAKAGE RISK` (CRITICAL)**
- **Constitutional Reference**: Clause 23 (*Independent Validation*), Clause 25 (*Question-Based Validation*)
- **Adversarial Analysis**:  
  *The Core Vulnerability*: Section 3 of the protocol writes specific historical events into the question descriptions:
  - "The Saunders shooting"
  - "The Gandhi-Irwin pact"
  - "The Sutlej River cremation"
  - "Felt hat disguise"
  - "Rubber nasal feeding tubes"
  - "Why I Am an Atheist"
  *Why this is a fatal flaw*:
  1. **Source Dependency**: The benchmark source has *not yet been selected*. If the user or agent selects *Autobiography of a Yogi* or Max Planck or A.G. Noorani, these questions are completely invalid.
  2. **Validation Independence Compromised**: Even if a Bhagat Singh volume is selected, embedding specific historical trivia into the protocol *before* reading the book means the validation suite is testing the agent's pre-existing knowledge rather than testing the Book Master's faithful reconstruction of the source text!
- **Remedy**: The protocol must define the **Abstract Validation Schema & 50 Question Archetype Specifications** (the structural rubrics, question types, and scoring criteria). The actual 50 source-derived questions can *only* be authored during the benchmark instantiation phase, extracted strictly from the selected source material!

---

# 3. COMPREHENSIVE SPECIFICATION AUDIT MATRIX

| Specification | Classification | Severity | Core Finding |
| :--- | :--- | :--- | :--- |
| **Spec 1: Primary Unit** | `WEAK` | Medium | Fails on Autobiography (`LIFE_EPISODE`) and Edited Collections (`DOCUMENT_UNIT`). |
| **Spec 2: Source Structure** | `WEAK` | Medium | Lacks explicit demarcation for modern editor annotations/footnotes. |
| **Spec 3: Chronology** | `PASS` | Low | Solid dual-timeline; needs approximate/circa date schema. |
| **Spec 4: Event Hierarchy** | `PASS` | None | Robust 3-tier hierarchy (Macro, Meso, Micro). |
| **Spec 5: Person/Entity** | `PASS` | Low | Entity vs representation separation good; mandate quarantine of subjective traits. |
| **Spec 6: Context Tiers** | `PASS` | None | Micro, Meso, Macro context model is comprehensive. |
| **Spec 7: Evidence Taxonomy** | `CONTRADICTORY` | High | Implies primary evidence = true. Must state: *Primary does not equal true*. |
| **Spec 8: Attribution Context** | `PASS` | None | Coercion and legal context tracking is rigorous. |
| **Spec 9: Primary vs Secondary** | `PASS` | None | The Non-Masquerade rule directly enforces Clause 15. |
| **Spec 10: Conflict Engine** | `PASS` | None | Prohibits averaging and majority-vote reconciliation. |
| **Spec 11: Uncertainty** | `PASS` | None | 4-tier certainty scale is clean and actionable. |
| **Spec 12: Author vs Evidence** | `PASS` | None | Hard delimiter quarantining psychological conjecture. |
| **Spec 13: Causal Mechanics** | `WEAK` | Medium | Vulnerable to *post hoc ergo propter hoc*. Requires explicit evidence for causality. |
| **Spec 14: Relational Trajectories** | `PASS` | None | 5-stage developmental trajectory model is well adapted. |
| **Spec 15: Cross-Event DAG** | `PASS` | None | Dependency DAG prevents isolated fact reporting. |
| **Spec 16: Materiality** | `PASS` | None | Protects Textural mundane realism from over-compression. |
| **Spec 17: Epistemic Tags** | `WEAK` | Medium | `[SOURCE FACT]` is ambiguous. Add `[EDITOR_ANNOTATION]` and `[COERCED_TESTIMONY]`. |
| **Spec 18: Traceability** | `PASS` | None | Complete 4-step backward provenance chain. |
| **Spec 19: Three Reader Views** | `PASS` | Low | Sound mapping; enforce 100% derivation from canonical JSON. |
| **Spec 20 & Sec 3: 50 Questions** | **`BENCHMARK-LEAKAGE`** | **CRITICAL** | Hardcodes specific Bhagat Singh events before source is chosen. Must decouple archetype schema from source instantiation. |

---

# 4. PROPOSED FORMAL AMENDMENT LIST

To achieve production readiness for Milestone 3, the following 6 amendments are required:

### Amendment 1: Universal Historical Unit Taxonomy (Spec 1 & 2)
- **Existing Rule**: `HISTORICAL_EPISODE` is the sole primary unit.
- **Observed Problem**: Distorts autobiographies (which need life reflections) and documentary collections (which are compilations of essays, letters, and court records).
- **Required Change**: Define three valid primary unit types within the historical engine:
  1. `HISTORICAL_EPISODE`: For narrative history and third-party biography.
  2. `LIFE_EPISODE`: For autobiography and first-person memoir.
  3. `DOCUMENT_UNIT`: For documentary editions, notebooks, compilations of speeches, letters, and trial proceedings.
- **Downstream Effect**: Allows seamless processing of any historical text without schema hacking.

### Amendment 2: Decouple Validation Archetypes from Specific Sources (Sec 3)
- **Existing Rule**: Section 3 lists specific Bhagat Singh events (Saunders, Ganda Singh Wala, Gandhi-Irwin) as part of the universal protocol.
- **Observed Problem**: Contaminates pre-source validation independence; leaks benchmark expectations; makes protocol unusable for any non-Bhagat Singh historical work.
- **Required Change**: Refactor Section 3 so that all 50 question slots are **Abstract Forensic Question Archetypes with Universal Rubrics**. State explicitly that the concrete questions will be authored from the selected source during Step 2 of the benchmark workflow, strictly adhering to the 50 archetype slots.
- **Downstream Effect**: Protects 100% validation independence and prevents test contamination.

### Amendment 3: The "Primary Does Not Mean True" Principle (Spec 7 & 8)
- **Existing Rule**: Categorizes primary documents as foundational evidence without explicit reliability weighting.
- **Observed Problem**: In colonial and revolutionary history, primary documents (police diaries, coerced depositions, partisan news) are frequently fabricated or forced.
- **Required Change**: Mandate that all evidence nodes include:
  - `temporal_proximity`: (Contemporaneous vs. Retrospective).
  - `institutional_context`: (Under oath, under police torture, confidential, public manifesto).
  - `evidentiary_rule`: "A primary document proves what was recorded at that date; it does not establish undisputed objective truth without corroboration."
- **Downstream Effect**: Prevents colonial police records or approver statements from masquerading as objective historical facts.

### Amendment 4: Disambiguate Epistemic Tags (Spec 17)
- **Existing Rule**: Uses `[SOURCE FACT]`.
- **Observed Problem**: Ambiguity between "What the author claims is a fact" and "What is universally corroborated historical reality."
- **Required Change**: Refine the 8 tags into a 9-tag mutually exclusive taxonomy:
  1. `[CORROBORATED_HISTORICAL_FACT]`: Empirical reality verified across multiple opposing records.
  2. `[SOURCE_DOCUMENTED_EVENT]`: What the specific source book claims occurred.
  3. `[PRIMARY_SUBJECT_WRITING]`: Verbatim authored text of the subject.
  4. `[PRIMARY_SUBJECT_UTTERANCE]`: Words spoken by the subject, recorded contemporaneously.
  5. `[CONTEMPORARY_RECORD]`: Trial minutes, police FIRs, government gazettes.
  6. `[COERCED_TESTIMONY]`: Statements given under physical torture or approver pardon.
  7. `[BIOGRAPHER_THESIS]`: The author's central historical argument.
  8. `[BIOGRAPHER_CONJECTURE]`: Authorial psychological, emotional, or counterfactual speculation.
  9. `[EDITOR_ANNOTATION]`: Footnotes and framing apparatus introduced by the modern documentary editor.
- **Downstream Effect**: Eliminates epistemic blurring between author, subject, editor, and empirical reality.

### Amendment 5: Temporal Uncertainty & Approximate Dating Schema (Spec 3)
- **Existing Rule**: Chronological anchor assumes a known date.
- **Observed Problem**: Introduces false precision when handling undated prison notebooks, drafts, or contested timelines.
- **Required Change**: Expand temporal anchoring in `knowledge-units.json` to:
  ```json
  "temporal_anchor": {
    "date_raw": "Autumn 1930",
    "date_iso_estimated": "1930-10-01",
    "precision": "exact | approximate_month | approximate_year | circa | disputed_range | undated_sequence",
    "chronological_sequence_index": 42
  }
  ```
- **Downstream Effect**: Prevents synthetic timestamps from contaminating the canonical data layer.

### Amendment 6: Anti-Post-Hoc Causal Standard (Spec 13)
- **Existing Rule**: Maps multi-step historical chains without explicit evidentiary bar.
- **Observed Problem**: Risk of converting temporal sequence (B followed A) into historical causation (A caused B).
- **Required Change**: Require that every causal link (`causes`, `catalyzes`, `triggers`) cite either:
  1. Primary documentary evidence proving the actor made decision B *because* of A.
  2. Explicit secondary attribution tagging: `[HISTORIAN_CAUSAL_HYPOTHESIS]`.
- **Downstream Effect**: Protects against narrative over-simplification and false teleology.

---

# 5. DETERMINATION OF BENCHMARK READINESS

### Readiness Status: **NOT READY FOR SOURCE INGESTION UNTIL AMENDMENTS ARE APPLIED**

Before any historical book (Bhagat Singh, Yogananda, Noorani, Juss) may be ingested or processed:
1. The 6 amendments detailed above must be integrated into `docs/architecture/HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`.
2. Section 3 must be cleaned of specific candidate source trivia and converted into the **50 Abstract Forensic Archetypes**.
3. Only after the amended protocol is frozen may the candidate volume be selected and its hidden source-derived validation questions authored.

---

# 6. WHAT MUST REMAIN FROZEN DURING THE BENCHMARK

To maintain scientific integrity and prevent regression across the Intellectualist library, the following systems must remain **STRICTLY FROZEN**:

1. **The Fiction Benchmark**:
   - `docs/distillations/norwegian-wood/knowledge-units.json` (FROZEN)
   - `docs/distillations/norwegian-wood/index.html` (FROZEN)
   - `validation/norwegian-wood/` (FROZEN)
2. **The Non-Fiction Benchmark**:
   - `docs/distillations/the-psychology-of-money/knowledge-units.json` (FROZEN)
   - `docs/distillations/the-psychology-of-money/index.html` (FROZEN)
   - `validation/the-psychology-of-money/` (FROZEN)
3. **Core Multi-Genre Infrastructure**:
   - `src/bkrs/bkrs_adapter.js` (FROZEN except for adding the new historical unit types)
   - `src/bkrs/render_fiction.js` (STRICTLY FROZEN)
   - `src/bkrs/render_nonfiction.js` (STRICTLY FROZEN)
   - `docs/assets/css/` and `docs/assets/js/` (STRICTLY FROZEN)
4. **Multi-Source Cross-Book Synthesis**:
   - **STRICTLY PROHIBITED** until the single historical benchmark passes the amended protocol with &ge; 90% overall and 100% on epistemic demarcation.
