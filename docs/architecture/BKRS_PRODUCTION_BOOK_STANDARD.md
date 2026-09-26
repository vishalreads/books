# The BKRS Production Book Standard (v2.0)
**The Definitive Working Method, Structural Blueprint & Quality Gate for All Upcoming Books**

---

## 1. The Core Philosophy: "Contentual Substitution"

Every book admitted to the Intellectualist repository must satisfy the **Golden Test of Total Replacement**:
> *"If an ambitious, critical reader never opens the physical source text, they will not miss a single causal turning point, empirical case study, psychological mechanism, verbatim core dialogue, mathematical/tax model, or authorial nuance."*

We reject superficial internet "cheat sheets," 3-bullet executive outlines, and arbitrary word minimization. Our goal is **maximum information fidelity organized for frictionless human cognition**.

---

## 2. The Invariant 4-File Package (Per Title)

Every book must be stored under `docs/distillations/<book-slug>/` and MUST include all four deliverables:

```
docs/distillations/<book-slug>/
├── index.html              # The 3-View Editorial Cream Interactive Reader Shell
├── master-notes.md         # The Complete Longform Master Codex (The Prose Source of Truth)
├── knowledge-units.json    # The Canonical Structured Dataset (Machine-Readable Knowledge Layer)
└── [assets/ (optional)]    # Any book-specific charts, diagrams, or archival plates
```
In addition, the book must have an entry registered in `docs/library-index.json`.

---

## 3. Strict Quality & Depth Floors

A distillation will be rejected by the audit suite if it fails these quantitative and qualitative thresholds:

| Metric | Nonfiction / Self-Help | Literary Fiction / Epic | Multi-Source Historical Synthesis |
| :--- | :--- | :--- | :--- |
| **Minimum Word Count** | **5,500 – 10,000 words** | **7,000 – 15,000 words** | **15,000 – 25,000 words** |
| **Minimum Character Count** | **35,000+ characters** | **45,000+ characters** | **100,000+ characters** |
| **Canonical Units (KUs)** | 10 – 30 Units | 15 – 45 Scenes | 30 – 80 Movements/Chapters |
| **Verbatim Quote Density** | At least 1 per chapter | At least 1 per scene | At least 1–2 per archival event |
| **Causal Transitions** | Required per chapter | Required per scene | Required per movement |

---

## 4. The Canonical Anatomy of `master-notes.md`

Every `master-notes.md` must follow the standardized layered architecture:

```markdown
# [Book Title]: The Master Codex
**Author(s):** [Author Name] ([Year])  
**Canonical Reference:** `[REF-XXX-YEAR]`  
**Epistemic Classification:** Tier 1 / Tier 2 [Description]  
**Corpus Scope:** [Number of Chapters, Pages, Hours Saved]  

---

> ### The Golden Test of Total Replacement
> [Direct statement of replacement criteria for this specific book]

---

## LAYER 1: Master Theoretical Architecture & Epistemic Demarcation
- 1.1 Epistemic Thesis & Foundational Premise
- 1.2 The Core Dynamic Model (ASCII or Mermaid Diagram)
- 1.3 Classification of Evidence (Source Fact vs. External Interpretation)

## LAYER 2: Forensic Chapter-by-Chapter Master Notes (Complete Coverage)
### Unit 01: [Chapter / Scene / Movement Title]
- **Scope & Location:** [Chapter / Scene boundary]
- **Epistemic Classification:** `SOURCE_FACT` | `SOURCE_ARGUMENT` | `CHARACTER_BELIEF`
- **Core Invariant Thesis:** [1-2 sentences capturing the essential proposition]
- **Forensic Breakdown & Causal Flow:** [3-5 paragraphs of continuous analytical or narrative prose. Must explain *why* this happens and *how* it connects to the previous chapter.]
- **Sensory & Atmospheric Detail** (Fiction/History) OR **Empirical Case Study** (Nonfiction): [The visceral reality, setting, or specific experimental data.]
- **Verbatim Canonical Excerpt:** 
  > "[Direct, verbatim passage from the author's primary text]"
- **Operational Heuristic / Actionable Law:** *[The distilled mental model or decision rule]*

[Repeat for every single chapter/unit — NO SKIPPING OR CONDENSING INTO BATCHES]

## LAYER 3: The Empirical Corpus & Landmark Evidence Vault
[Detailed catalog of all experiments, historical battles, courtroom cases, or clinical papers cited]

## LAYER 4: The Operational Field Manual & Diagnostic Assessment Engine
[Step-by-step algorithms, decision trees, checklists, or diagnostic tests derived from the book]

## LAYER 5: Skeptical Auditor's Demarcation & Boundary Conditions
[Critical rebuttals, where the author's thesis breaks down, exceptions, modern updates]

## LAYER 6: Interactive Active Recall & Retention Suite
[7-10 deep Socratic flashcards / recall challenges testing first-principles understanding]
```

---

## 5. The Canonical UI & HTML Reader Shell Standards

The rendered web reader (`index.html`) must strictly adhere to the following interface rules:

### 1. Default Theme & Head Template
The reader must ALWAYS open in **Editorial Cream** by default (`data-theme="cream"`). Dark mode is available as a secondary toggle, never the default.

```html
<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Title] — [Author] | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  ...
```

### 2. Mandatory Three Reading Views
Every reader must provide three distinct, switchable mental perspectives:
1. **View A (Source Journey):** Chronological, narrative sequence following the author's structural revelation.
2. **View B (Knowledge Map / Blueprint):** Non-linear structural map organizing units by themes, characters, or causal factors.
3. **View C (Operational Engine / Dialectical Vault):** Practical execution view (heuristics, case studies, flashcards, active recall).

### 3. Controls Script Integration
Before `</body>`, every reader must link to the universal reader controls:
```html
  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>
```

---

## 6. The Standardized 5-Phase Pipeline for Upcoming Books

When processing any new book, follow this sequential execution path:

```
┌─────────────────┐     ┌───────────────────────┐     ┌────────────────────────┐
│  1. INGESTION   │ ──> │ 2. FORENSIC SYNTHESIS │ ──> │ 3. CANONICAL DATA GEN  │
│  TOC, Chunking, │     │ Chapter prose, quotes,│     │ Build structured       │
│  Epistemic Map  │     │ heuristics, mechanics │     │ knowledge-units.json   │
└─────────────────┘     └───────────────────────┘     └────────────────────────┘
                                                                   │
                                                                   ▼
┌─────────────────┐     ┌───────────────────────┐     ┌────────────────────────┐
│  5. VERIFY & CI │ <── │  4. SHELL COMPILATION │ <── ┘                        │
│  verify_all_    │     │ Generate index.html   │                              │
│  readers.js     │     │ with 3 views & cream  │                              │
└─────────────────┘     └───────────────────────┘                              │
```

1. **Phase 1: Ingestion & Structural Mapping**
   - Extract raw text/PDF/EPUB.
   - Map exact chapter titles, page counts, and structural milestones.
2. **Phase 2: Forensic Longform Synthesis (`master-notes.md`)**
   - Write out complete prose chapters. Maintain character names, verbatim quotes, and causal transitions.
   - Enforce the word count floor (never accept a 1,500-word draft).
3. **Phase 3: Structured Knowledge Generation (`knowledge-units.json`)**
   - Parse all units into JSON with attributes: `id`, `title`, `epistemic_status`, `materiality`, `summary`, `takeaways`.
4. **Phase 4: Reader Shell Compilation (`index.html`)**
   - Compile HTML with the three view containers (`#view-journey`, `#view-map`, `#view-experience`).
   - Ensure default theme is cream, stylesheets are relative, and controls script is attached.
5. **Phase 5: Automated Verification & Index Registration**
   - Add new title to `src/verify_all_readers.js`.
   - Add metadata entry to `docs/library-index.json`.
   - Run `node src/verify_all_readers.js`. Must report **100% PASS** before committing.

---

## 7. Quality Gate Checklist (Pre-Commit Audit)

Before declaring any new book complete, the agent must silently run this checklist:

- [ ] Does `master-notes.md` meet the word count floor (>= 5,500 words for standard, >= 15,000 for codices)?
- [ ] Are all chapters represented individually without skipping or glossing over chapters?
- [ ] Does every unit have at least one verbatim primary source quote?
- [ ] Is `knowledge-units.json` populated with matching unit IDs?
- [ ] Does `index.html` load with `data-theme="cream"` by default?
- [ ] Are all CSS links pointing to `../../assets/css/` without broken 404s?
- [ ] Are all 3 views (Journey, Map, Experience) functioning?
- [ ] Is `reader-controls.js` attached and functioning?
- [ ] Is the title added to `docs/library-index.json`?
- [ ] Does `node src/verify_all_readers.js` pass with 100% compliance?
