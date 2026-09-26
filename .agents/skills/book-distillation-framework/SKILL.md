---
name: book-distillation-framework
description: >-
  Book Knowledge Reconstruction System (BKRS v1.0): Universal framework for transforming
  complete books into comprehensive, multi-dimensional knowledge representations that achieve
  genuine contentual substitution and experiential understanding.
---

# Book Knowledge Reconstruction System (BKRS) — Operational Framework v1.0

Activate this skill whenever processing any book, treatise, paper, or reading list to produce genuine replacement-grade Book Masters and multi-book knowledge networks.

---

## 1. Foundational Mission & The Core Metric

### The Guiding Principle
> **DO NOT THINK:** *"How can I make this book shorter?"*  
> **THINK:** *"How can I preserve the maximum amount of important information, meaning, structure, reasoning, emotion, and authorial perspective while making the material substantially easier to study?"*

The metric is **Information Preservation + Structural Clarity + Source Fidelity + Comprehensibility + Retrievability** (NEVER artificial word minimization).

### What "Replace Reading" Means:
1. **Contentual Substitution (Primary Objective)**: Allows a reader who has never read the source to deeply understand its substantive arguments, proofs, chronology, character dynamics, conflicts, and outcomes.
2. **Experiential Reconstruction**: While sentence-level rhythm cannot be cloned, the emotional movement, dramatic tension, cognitive dilemmas, and psychological development must be methodically reconstructed.

---

## 2. The Two-Layer Architecture

```
                  ┌──────────────────────────────┐
                  │    COMPLETE SOURCE FILE      │
                  │ (PDF, EPUB, MOBI, DOCX, TXT) │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
           ═════════════════════════════════════════════
           PART I: INDIVIDUAL BOOK MASTER (Per Book)
           ═════════════════════════════════════════════
               │                                │
               ▼                                ▼
       [ VIEW A: SOURCE JOURNEY ]       [ VIEW B: KNOWLEDGE MAP ]
       - Author's Original Order        - Reorganized by Concept /
       - Chronology & Revelation         Character / Theme / Motif
       - Argument / Narrative Arc       - Empirical / Decision Vault
       - Chapter-by-Chapter Trace       - Socratic Active Recall
               │                                │
               └────────────────┬───────────────┘
                                │
                                ▼
               [ INTERNAL KNOWLEDGE UNITS ]
               (Structured JSON: concepts, claims,
                events, emotions, citations)
                                │
                                ▼
           ═════════════════════════════════════════════
           PART II: MULTI-BOOK KNOWLEDGE SYNTHESIS
           (Canonical Knowledge Layer & Master Notebook)
           ═════════════════════════════════════════════
            - Cross-Book Idea Mapping & Agreements
            - Conflicting Perspectives & Disagreements
            - Rigorous Source Attribution (Zero False Consensus)
```

---

## 3. Epistemic Demarcation & Traceability Disciplines

Every claim within a Book Master must be explicitly categorized:
1. `[SOURCE FACT]`: A documented, empirical, or chronological fact established in the text.
2. `[SOURCE ARGUMENT]`: An assertion or theoretical claim made directly by the author.
3. `[CHARACTER BELIEF]`: A perception or stance held by a fictional or historical actor (never confused with authorial opinion).
4. `[NARRATOR'S POSITION]`: The explicit perspective of the narration voice.
5. `[INTERPRETATION]`: Analytical assessment, categorized into:
   - *Level 1 (Explicitly stated)*
   - *Level 2 (Strongly implied by textual evidence)*
   - *Level 3 (Reasonable critical deduction)*
   - *Level 4 (Speculative hypothesis)*
6. `[SYSTEM SYNTHESIS]`: Multi-source cross-referencing and comparative conclusions.

**Traceability Rule**: Every critical claim must retain structural provenance (Chapter, Section, Page number, or Scene identifier).

---

## 4. Genre-Aware Processing Pipelines

### Pipeline A: Non-Fiction & Analytical Treatises
*(Philosophy, Psychology, Economics, Science, Strategy, Systems)*
- **Layer 1: Epistemic Pedigree & Grand Unified Model**: Theoretical lineage, legacy beliefs dismantled, core axioms.
- **Layer 2: The Crucible & Human Stakes**: Author's biographical urgency, existential risks, master analogies.
- **Layer 3: Forensic Chapter Distillation**: For EVERY chapter:
  - Irreducible Axiom
  - Causal & Mechanical Logic
  - Primary Empirical Study (researchers, year, sample, controls, findings)
  - Concrete Heuristics & Formulas
  - Nuances, Edge Cases & Boundary Conditions
- **Layer 4: Empirical & Case Study Vault**: Exhaustive catalog of named trials, historical events, and data points.
- **Layer 5: Operational Field Manual**: Decision trees, diagnostic algorithms, troubleshooting rubrics.
- **Layer 6: Skeptical Demarcation**: Cognitive biases, empirical limitations, pathological extremes.
- **Layer 7: Socratic Active Recall**: Mechanism-probing question-and-answer pairs.

### Pipeline B: Fiction, Master Literature & Narrative Memoirs
*(Novels, Short Stories, Literary Non-fiction, Memoirs)*
Reconstructed across the **9 Critical Dimensions**:
1. **Narrative Layer**: What happens? Inciting events, major scenes, turning points, climax, and resolution.
2. **Character Layer**: Who are the actors? Psychological wounds, core motivations, transformations, and moral trajectories.
3. **Relationship Layer**: Dyadic interaction graphs; how bonds form, intensify, fracture, and dissolve.
4. **Emotional Layer (First-Class Requirement)**:
   - Granular tracking of emotional states, transitions, underlying triggers, and somatic impacts.
   - Grounded strictly in textual evidence; explicitly separating explicit emotions from interpretive inference.
5. **Psychological Layer**: Internal defense mechanisms, cognitive dissonance, trauma responses, and irrational compulsions.
6. **Thematic Layer**: The overarching existential, philosophical, or societal inquiries explored by the work.
7. **Symbolic & Motif Layer**: Recurring physical objects, songs, weather patterns, spatial metaphors, and colors.
8. **Structural & Sequence Layer**: Why did the author reveal information in this specific order? Narrative framing, flashbacks, and dramatic irony.
9. **Authorial Layer**: The boundary between the author's narrative intent, narrator perspective, and reader interpretation.

---

## 5. View A vs. View B Architecture for Every Book Master

Every Book Master deliverable must embody two distinct, complementary presentations:

### View A: Source Journey (Sequential Progression)
- Follows the book in its authentic structural sequence (Chapter by Chapter, Act by Act, Scene by Scene).
- Preserves the discovery process: how an argument builds premise by premise, or how suspense and character revelations unfold.
- Provides granular section summaries, key verbatim terms, causal transitions, and emotional trajectories.

### View B: Knowledge Map (Analytical Reorganization)
- Synthesizes the book's contents into structured intellectual categories:
  - Concept & Model Matrix
  - Entity & Relationship Graph
  - Master Case Study / Scene Index
  - Chronological Timeline vs. Narrative Order
  - Decision Heuristics & Diagnostic Frameworks
  - Socratic Spaced-Repetition Deck

---

## 6. Internal Knowledge Layer (`knowledge-units.json`) Schema

Every Book Master must have an accompanying machine-readable JSON representation stored at `docs/distillations/<book-slug>/knowledge-units.json`:

```json
{
  "book_id": "slug",
  "title": "Title",
  "author": "Author",
  "genre": "nonfiction | fiction | memoir | philosophy | science",
  "version": "1.0",
  "units": {
    "entities": [
      {
        "id": "entity-id",
        "name": "Name",
        "role": "Role / Description",
        "psychological_core": "Trait / Wound",
        "key_relationships": [{ "target": "other-id", "nature": "dynamic" }]
      }
    ],
    "concepts_and_claims": [
      {
        "id": "claim-id",
        "type": "fact | argument | character_belief | narrator_position",
        "statement": "Irreducible claim",
        "causal_mechanism": "Why/how it works",
        "source_location": "Chapter X / Section Y",
        "epistemic_status": "explicit | implied | interpretation"
      }
    ],
    "scenes_and_events": [
      {
        "id": "event-id",
        "title": "Scene / Event Title",
        "chronological_order": 1,
        "narrative_order": 1,
        "what_happened": "Concrete action",
        "characters_involved": ["entity-id"],
        "emotional_trajectory": {
          "initial_state": "Emotion",
          "transition_trigger": "Event / Choice",
          "resulting_state": "Emotion",
          "grounding_level": "explicit | strongly_implied | reasonable_deduction"
        },
        "thematic_significance": "Underlying meaning",
        "motifs_present": ["symbol-id"]
      }
    ],
    "empirical_evidence": [
      {
        "id": "study-id",
        "researcher": "Name",
        "year": 1999,
        "methodology": "Design",
        "findings": "Data / Conclusions"
      }
    ],
    "active_recall_deck": [
      {
        "id": "card-1",
        "question": "Deep mechanism question",
        "detailed_answer": "Complete causal explanation"
      }
    ]
  }
}
```

---

## 7. The 9-Point Quality & Completeness Audit

Before any Book Master is certified as "Replacement Ready", it must pass all 9 audit gates:
- [ ] **1. Content Test**: Can a user explain all substantive claims and arguments without reading the book?
- [ ] **2. Structure Test**: Is the book's internal architecture, sequencing, and pacing clearly documented?
- [ ] **3. Authorial Test**: Is the author's distinct vocabulary and framework preserved without AI dilution?
- [ ] **4. Detail Test**: Are critical nuances, numbers, formulas, and primary studies retained?
- [ ] **5. Relationship Test (Fiction/Memoir)**: Is the interpersonal evolution completely traceable?
- [ ] **6. Emotional Test (Fiction/Memoir)**: Is the emotional trajectory reconstructed and grounded in text?
- [ ] **7. Nuance Test**: Are edge cases, caveats, contradictions, and ambiguities explicitly preserved?
- [ ] **8. Traceability Test**: Can every major unit be mapped back to its chapter or scene location?
- [ ] **9. Synthesis Readiness**: Are knowledge units structured in JSON for clean cross-book synthesis?

---

## 8. Automated CI/CD Regression Verification
All new books must strictly adhere to [`docs/architecture/BKRS_PRODUCTION_BOOK_STANDARD.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/architecture/BKRS_PRODUCTION_BOOK_STANDARD.md) and pass the automated test runner before completion:
```bash
node src/verify_all_readers.js
```
The test verifies:
1. Editorial Cream theme default (`data-theme="cream"`).
2. Proper stylesheet links (`reader-shell.css`, `theme.css`, `typography.css`).
3. Controls script attachment (`reader-controls.js`).
4. Canonical `knowledge-units.json` populated with matching unit IDs.
5. `master-notes.md` exceeding depth floors (>= 15,000 characters).

