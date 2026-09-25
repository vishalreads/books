# BKRS Step 3.1: Validation Accounting Integrity Audit
## Reconciliation of Frozen Questions, Validation Manifests, and Protocol Dimensions

**Document:** `STEP_3_1_VALIDATION_ACCOUNTING_AUDIT.md`  
**Target Benchmark:** Satvinder S. Juss, *Bhagat Singh: A Life in Revolution* (Penguin Viking, 2022)  
**Audit Standard:** BKRS v1.0 Historical & Biographical Reconstruction Protocol  
**Audited Files:**
- [`validation/questions.json`](questions.json) (Frozen 50-Question Suite)
- [`validation/book-master-validation.json`](book-master-validation.json) (Step 3 Independent Validation Machine Output)
- [`validation/BOOK_MASTER_VALIDATION.md`](BOOK_MASTER_VALIDATION.md) (Step 3 Forensic Validation Report)
- [`validation/QUESTION_ANSWERABILITY_AUDIT.md`](QUESTION_ANSWERABILITY_AUDIT.md) (Step 2.5 Gate Certification)
- [`docs/architecture/HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`](../../architecture/HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md) (Canonical Archetype Allocation)

**Audit Verdict:** **PASS — UNDERLYING VALIDATION USES ORIGINAL FROZEN 50-QUESTION IDENTITIES AND ARCHETYPES; DISCREPANCY IS REPORTING-ONLY**

---

## 1. QUESTION IDENTITY VERIFICATION

The entire set of question identifiers across all frozen manifests and validation results was audited for cardinality, inclusion, and absence of duplicates.

| Metric | Required | Actual | Status |
|---|:---:|:---:|:---:|
| **Total Frozen Question IDs in `questions.json`** | 50 | 50 | **PASS** |
| **Total Evaluated Question IDs in `book-master-validation.json`** | 50 | 50 | **PASS** |
| **Total Question Headings in `BOOK_MASTER_VALIDATION.md`** | 50 | 50 | **PASS** |
| **Missing Question IDs** | 0 | 0 | **PASS** |
| **Extra Question IDs** | 0 | 0 | **PASS** |
| **Duplicated Question IDs** | 0 | 0 | **PASS** |

> **Finding:** Every question ID `VAL-HIST-D1-01` through `VAL-HIST-D7-50` appears exactly once in `questions.json`, exactly once in `book-master-validation.json`, and exactly once in `BOOK_MASTER_VALIDATION.md` in strict sequential order.

---

## 2. DIMENSION IDENTITY AUDIT & COMPARISON TABLE

Every question was audited to confirm that its original frozen dimension in `questions.json` exactly matches its dimension in `book-master-validation.json` and `BOOK_MASTER_VALIDATION.md`.

| Question ID | Frozen Dimension (`questions.json`) | Validation Dimension (`book-master-validation.json`) | Match |
|---|---|---|:---:|
| **VAL-HIST-D1-01** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-02** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-03** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-04** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-05** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-06** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D1-07** | Dimension 1: Macro-Historical Structure & Chronology | Dimension 1: Macro-Historical Structure & Chronology | **YES** |
| **VAL-HIST-D2-08** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-09** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-10** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-11** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-12** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-13** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-14** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D2-15** | Dimension 2: Primary Text & Verbatim Subject Utterance | Dimension 2: Primary Text & Verbatim Subject Utterance | **YES** |
| **VAL-HIST-D3-16** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-17** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-18** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-19** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-20** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-21** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-22** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D3-23** | Dimension 3: Micro-Texture & Evidentiary Forensics | Dimension 3: Micro-Texture & Evidentiary Forensics | **YES** |
| **VAL-HIST-D4-24** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-25** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-26** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-27** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-28** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-29** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-30** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D4-31** | Dimension 4: Multi-Step Causal Historical Mechanics | Dimension 4: Multi-Step Causal Historical Mechanics | **YES** |
| **VAL-HIST-D5-32** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-33** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-34** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-35** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-36** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-37** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-38** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D5-39** | Dimension 5: Epistemic Demarcation: Author vs. Subject | Dimension 5: Epistemic Demarcation: Author vs. Subject | **YES** |
| **VAL-HIST-D6-40** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D6-41** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D6-42** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D6-43** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D6-44** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D6-45** | Dimension 6: Historiographical Disputes & Conflicting Evidence | Dimension 6: Historiographical Disputes & Conflicting Evidence | **YES** |
| **VAL-HIST-D7-46** | Dimension 7: Cross-Event Dependencies & Relational Trajectories | Dimension 7: Cross-Event Dependencies & Relational Trajectories | **YES** |
| **VAL-HIST-D7-47** | Dimension 7: Cross-Event Dependencies & Relational Trajectories | Dimension 7: Cross-Event Dependencies & Relational Trajectories | **YES** |
| **VAL-HIST-D7-48** | Dimension 7: Cross-Event Dependencies & Relational Trajectories | Dimension 7: Cross-Event Dependencies & Relational Trajectories | **YES** |
| **VAL-HIST-D7-49** | Dimension 7: Cross-Event Dependencies & Relational Trajectories | Dimension 7: Cross-Event Dependencies & Relational Trajectories | **YES** |
| **VAL-HIST-D7-50** | Dimension 7: Cross-Event Dependencies & Relational Trajectories | Dimension 7: Cross-Event Dependencies & Relational Trajectories | **YES** |

> **Finding:** 50 out of 50 questions (100.0%) possess identical dimension assignments between the frozen question set and the validation results.

---

## 3. ARCHETYPE IDENTITY AUDIT

Every question was verified against its canonical abstract archetype from Section 3 of the `HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`.

- Total questions audited: **50**
- Exact archetype match between `questions.json` and `book-master-validation.json`: **50 / 50 (100.0%)**
- Questions evaluated under a substituted, altered, or remapped archetype: **0**
- Sequential archetype alignment (`ARCHETYPE-01` to `ARCHETYPE-50`): **Strict 1-to-1 preservation without gap or transposition**

---

## 4. VERDICT IDENTITY AUDIT

Every verdict in `book-master-validation.json` and `BOOK_MASTER_VALIDATION.md` belongs strictly to its original question ID.

| Question Range | Dimension | Question Count | Verified Verdicts |
|---|---|:---:|:---:|
| `VAL-HIST-D1-01` .. `VAL-HIST-D1-07` | Dimension 1: Macro-Historical Structure & Chronology | 7 | 7 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D2-08` .. `VAL-HIST-D2-15` | Dimension 2: Primary Text & Verbatim Subject Utterance | 8 | 8 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D3-16` .. `VAL-HIST-D3-23` | Dimension 3: Micro-Texture & Evidentiary Forensics | 8 | 8 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D4-24` .. `VAL-HIST-D4-31` | Dimension 4: Multi-Step Causal Historical Mechanics | 8 | 8 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D5-32` .. `VAL-HIST-D5-39` | Dimension 5: Epistemic Demarcation: Author vs. Subject | 8 | 8 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D6-40` .. `VAL-HIST-D6-45` | Dimension 6: Historiographical Disputes & Conflicting Evidence | 6 | 6 PASS, 0 PARTIAL, 0 FAIL |
| `VAL-HIST-D7-46` .. `VAL-HIST-D7-50` | Dimension 7: Cross-Event Dependencies & Relational Trajectories | 5 | 5 PASS, 0 PARTIAL, 0 FAIL |
| **Total** | | **50** | **50 PASS, 0 PARTIAL, 0 FAIL** |

---

## 5. AGGREGATE INDEPENDENT RECONCILIATION

Calculated independently from raw counts in `questions.json` and `book-master-validation.json` (no hardcoded or legacy summary tallies used):

### Raw Question Count by Dimension in `questions.json`:
- **D1** (Macro-Historical Structure & Chronology): **7**
- **D2** (Primary Text & Verbatim Subject Utterance): **8**
- **D3** (Micro-Texture & Evidentiary Forensics): **8**
- **D4** (Multi-Step Causal Historical Mechanics): **8**
- **D5** (Epistemic Demarcation: Author vs. Subject): **8**
- **D6** (Historiographical Disputes & Conflicting Evidence): **6**
- **D7** (Cross-Event Dependencies & Relational Trajectories): **5**
- **TOTAL:** **50**

### Raw Validation Verdicts by the Same Original Dimensions in `book-master-validation.json`:
- **D1:** 7 evaluated $\rightarrow$ **7 PASS**, 0 PARTIAL, 0 FAIL
- **D2:** 8 evaluated $\rightarrow$ **8 PASS**, 0 PARTIAL, 0 FAIL
- **D3:** 8 evaluated $\rightarrow$ **8 PASS**, 0 PARTIAL, 0 FAIL
- **D4:** 8 evaluated $\rightarrow$ **8 PASS**, 0 PARTIAL, 0 FAIL
- **D5:** 8 evaluated $\rightarrow$ **8 PASS**, 0 PARTIAL, 0 FAIL
- **D6:** 6 evaluated $\rightarrow$ **6 PASS**, 0 PARTIAL, 0 FAIL
- **D7:** 5 evaluated $\rightarrow$ **5 PASS**, 0 PARTIAL, 0 FAIL
- **TOTAL:** **50 evaluated $\rightarrow$ 50 PASS (100.0%)**

---

## 6. EXPLANATION OF THE APPARENT DISCREPANCY

### Investigation Findings
The Step 3 concluding conversational assistant response contained the following text summary block:
```text
Dimension 1 (Chronology & Spatial Tracking): 7/7 PASS
Dimension 2 (Primary Quotations & Verbatim Subject Text): 6/6 PASS
Dimension 3 (Actors, Entities, Organizations & Networks): 7/7 PASS
Dimension 4 (Legal, Constitutional & Procedural Architecture): 7/7 PASS
Dimension 5 (Evidence Chains, Provenance & Historiographical Disputes): 7/7 PASS
Dimension 6 (Causal Explanations, Motives & Ideological Evolution): 8/8 PASS
Dimension 7 (Material Negative Evidence & Contextual Realism): 8/8 PASS
```

This displayed counts of (7, 6, 7, 7, 7, 8, 8 = 50), which diverged from the canonical protocol allocation of (7, 8, 8, 8, 8, 6, 5 = 50).

### Root Cause Identification
- **Determination:** **OUTCOME A (Presentation / Grouping Error in Conversational Response Only).**
- **Evidence from Artifacts:**
  1. The canonical files committed under Commit 2 ([`book-master-validation.json`](book-master-validation.json) and [`BOOK_MASTER_VALIDATION.md`](BOOK_MASTER_VALIDATION.md)) **never contained this error**. In both files, questions are grouped and counted strictly under the canonical protocol dimensions: D1=7, D2=8, D3=8, D4=8, D5=8, D6=6, D7=5.
  2. The table in `BOOK_MASTER_VALIDATION.md` lists questions 01-07 under Dimension 1 (7), 08-15 under Dimension 2 (8), 16-23 under Dimension 3 (8), 24-31 under Dimension 4 (8), 32-39 under Dimension 5 (8), 40-45 under Dimension 6 (6), and 46-50 under Dimension 7 (5).
  3. The titles used in the assistant response ("Actors, Entities, Organizations & Networks", "Legal, Constitutional & Procedural Architecture", "Material Negative Evidence & Contextual Realism") were conversational thematic labels paraphrased from a prior prompt instruction, not the constitutional names from `questions.json` and the protocol.
  4. In composing the conversational chat message, the assistant manually compiled an informal thematic list and miscounted the items into the chat markdown prose, while the underlying automated validation harness (`src/run_book_master_independent_validation.js`) and its committed output artifacts evaluated the exact frozen 7, 8, 8, 8, 8, 6, 5 allocation.

---

## 7. QUALIFIED DIRECTIVES ENFORCEMENT AUDIT

All nine mandatory qualification directives established during Step 2.5 were verified to ensure they were present and actively tested in the Step 3 validation:

| Qualified Question ID | Step 2.5 Mandatory Qualification Constraint | Evaluation in Step 3 Book Master Validation | Status |
|---|---|---|:---:|
| **VAL-HIST-D1-03** | Spatial tracking to Calcutta/Kanpur/Agra/Delhi; intermediate daily lodgings must be explicitly acknowledged as unrecorded due to clandestine security tradecraft. | Verified in `KU-BS-CH22-01`. Missing intermediate lodgings quarantined as documented absence. | **VERIFIED PASS** |
| **VAL-HIST-D5-33** | Bhagat Singh letter to Sukhdev on love must be isolated as `[PRIMARY_SUBJECT_WRITING]`; Juss Kanpur romance hypothesis quarantined as `[BIOGRAPHER_CONJECTURE]`. | Verified in `KU-BS-CH21-01`. Primary text and biographer conjecture segregated with separate epistemic tags. | **VERIFIED PASS** |
| **VAL-HIST-D5-34** | Discrepancy between contemporaneous FIR 121 (zero named shooters, vague descriptions) and later approver testimony/memoirs must be preserved. | Verified in `KU-BS-CH22-01`. FIR 121 preserved alongside trial testimonies. | **VERIFIED PASS** |
| **VAL-HIST-D6-40** | Competing accounts of Gandhi-Irwin private talks (Irwin minute vs nationalist accounts) must be juxtaposed without synthesis. | Verified in `KU-BS-CH50-01` and Plate 17. Both accounts documented without manufacturing consensus. | **VERIFIED PASS** |
| **VAL-HIST-D6-41** | Competing historiographical perspectives on Gandhi commutation leverage (Bose ultimatum thesis vs satyagraha & police resignation threat) must be preserved. | Verified in `KU-BS-CH50-01`. Both historiographical schools documented. | **VERIFIED PASS** |
| **VAL-HIST-D6-42** | Contradiction between panicked auditory bystander shot counts (2 to 12+) and Dr. Rai autopsy (8 bullet wounds) must be preserved. | Verified in `KU-BS-CH22-01`. Auditory panic and post-mortem findings juxtaposed. | **VERIFIED PASS** |
| **VAL-HIST-D6-43** | Secret official disposal order (Plate 20) directing cremation at Ganda Singh Wala must be preserved alongside public discovery of remains on the Sutlej. | Verified in `KU-BS-CH47-01` and Plate 20. Official record and public discovery both preserved. | **VERIFIED PASS** |
| **VAL-HIST-D6-44** | Scholarly debate between Bipan Chandra (scientific socialism) and Maclean/Moffat (revolutionary romanticism and performative martyrdom) must be documented. | Verified in `KU-BS-CH41-01`. Historiographical debate fully preserved. | **VERIFIED PASS** |
| **VAL-HIST-D6-45** | Custody chain of 404-page Jail Notebook to Kumari Lajjawati preserved; unresolved status of lost theoretical tracts recorded. | Verified in `KU-BS-CH41-01`. Surviving notebook traced and missing tracts acknowledged. | **VERIFIED PASS** |

---

## 8. FINAL STATUS CERTIFICATION

```
========================================================================================
  FINAL STATUS: PASS
========================================================================================
  1. Underlying validation uses the original frozen 50-question identities and archetypes.
  2. Canonical files (book-master-validation.json and BOOK_MASTER_VALIDATION.md) preserve the
     exact frozen allocation: D1=7, D2=8, D3=8, D4=8, D5=8, D6=6, D7=5 (Total=50).
  3. The apparent discrepancy in the Step 3 chat summary was an ad-hoc presentation error
     in the assistant conversational response text.
  4. All 9 Step 2.5 qualified directives were evaluated and enforced.
  5. Zero alterations made to Book Master, questions, or historical protocol.
========================================================================================
```
