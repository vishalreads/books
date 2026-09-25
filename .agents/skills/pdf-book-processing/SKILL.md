---
name: pdf-book-processing
description: >-
  Systematic ingestion, chunking, and distillation pipeline for processing multi-hundred-page book PDFs
  into comprehensive, replacement-grade notes without loss of fidelity.
---

# PDF Book Ingestion & Processing Pipeline

Use this skill whenever the user provides a PDF of a book to be processed into replacement-grade master notes.

## End-to-End Processing Workflow

```text
[PDF Input] 
    │
    ▼
Phase 1: Structural Audit (TOC, Preface, Epistemic Tiering)
    │
    ▼
Phase 2: Part/Chapter Deep Reading & Noise Stripping
    │
    ▼
Phase 3: Causal Modeling & Matrix Synthesis (6 Dimensions)
    │
    ▼
Phase 4: Output Generation & Codification in docs/distillations/
```

---

## Phase 1: Structural Audit & Scoping
1. **Locate & Index**:
   - Inspect PDF structure, front matter, Table of Contents, and index.
   - Record author credentials, publication year, and core premise.
2. **Epistemic Classification**:
   - Assign to Tier 1 (Empirical/Clinical/Treatise), Tier 2 (Applied System), Tier 3 (Pop-Science), or Tier 4 (Pseudoscience).
3. **Map the Architecture**:
   - Identify which chapters contain foundational mechanisms vs. which are supplementary case studies or illustrative anecdotes.

---

## Phase 2: Systematic Content Processing
1. **Signal-to-Noise Filtering**:
   - **Extract**: Axioms, causal chains, experimental data, definitions, exceptions, protocols, decision rubrics.
   - **Discard**: Publisher padding, autobiographical tangents, repetitive motivational banter, redundant historical anecdotes.
2. **Batch Ingestion**:
   - For long books, process logical sections/parts sequentially to maintain maximum analytical depth without context loss.

---

## Phase 3: Synthesis via the 6-Dimensional Matrix
Construct the distillation strictly adhering to the `book-distillation-framework`:
- Dimension 1: The Core Thesis & Paradigm Shift
- Dimension 2: Foundational Theoretical / Neurological / Causal Model
- Dimension 3: Concrete Master Analogy
- Dimension 4: Diagnostic Nuances, Typologies & Edge Cases
- Dimension 5: Field Protocols & Verbatim Behavioral Scripts
- Dimension 6: Skeptic Auditor's Demarcation Box

---

## Phase 4: Deliverable Architecture & Storage
Store all distillations in the local repository under:
`docs/distillations/<book-slug>/`
- `master-notes.md`: The complete, self-contained distillation.
- `flashcards.md`: Active recall prompts and causal answers.
- `metadata.json`: Provenance citation, tier rating, and reading time saved.
