# BKRS Step 4.0: Canonical Reader / Renderer Forensic Audit
## Architectural Assessment for Unified Multi-Genre Reading Environments

**Document:** `STEP_4_READER_RENDERER_AUDIT.md`  
**Target Milestone:** Milestone 4 — Unified Canonical Reader & Juss (2022) Frontend Deployment  
**Standard:** BKRS v1.0 Agent Operating Constitution & Reading Interface Specifications  
**Auditor:** BKRS Lead Architecture Group  
**Status:** **AUDIT COMPLETE — GATE FROZEN**

---

# 1. EXECUTIVE SUMMARY & CORE DETERMINATIONS

This audit evaluates the repository’s frontend and rendering infrastructure to prepare for a **unified canonical Book Master reader** capable of consuming the certified `knowledge-units.json` for Satvinder S. Juss’s *Bhagat Singh: A Life in Revolution* (2022) alongside existing Fiction (*Norwegian Wood*) and Analytical Nonfiction (*The Psychology of Money*) benchmarks.

### Core Verdict
> **Under the existing unmodified rendering pipeline, the certified Juss Book Master CANNOT currently be rendered without severe information loss.**  
> While the styling tokens (`theme.css`, `typography.css`) and application shell (`reader-shell.css`) are robust and 100% reusable, the data adapter (`bkrs_adapter.js`) and genre renderers (`render_fiction.js`, `render_nonfiction.js`) contain schema mismatches and book-specific hardcoding that completely break historical/biographical knowledge structures.

In strict accordance with the **REUSE → EXTEND → REFACTOR → REPLACE** directive, this audit establishes a concrete blueprint to extend the existing architecture into a unified, multi-genre canonical rendering engine without discarding functional code or altering certified benchmarks.

---

# 2. AUDIT OF THE SEVEN CORE INQUIRIES

### 1. Which rendering infrastructure is already reusable?
- **CSS Design System (`docs/assets/css/theme.css`):** 100% reusable. Provides the warm archival aesthetic: Cream (`data-theme="cream"`), Midnight (`theme-midnight`), and Sepia (`theme-sepia`), with standardized semantic color tokens for borders, surfaces, text, and badges.
- **Typography & Measure (`docs/assets/css/typography.css`):** 100% reusable. Implements the classical reading measure (max-width: `740px`), EB Garamond body text, Inter UI sans-serif controls, and Cinzel/Garamond display headers.
- **Global Layout Shell (`docs/assets/css/reader-shell.css`):** ~95% reusable. Reusable components include:
  - Sticky Top Application Bar (`.reader-topbar`)
  - 3-View Switcher Pill Bar (`.view-switcher-pill`)
  - Collapsible Sidebar & Navigation Index (`.reader-sidebar`)
  - Central Reading Viewport (`.reading-viewport`)
  - Non-Disruptive Source Trace Drawer (`#trace-drawer` / `#sourceTraceDrawer`)
  - Static Search Modal (`#search-modal` / `#searchModal`)
  - Focus Mode layout overrides (`.focus-mode`)

### 2. Which parts are genre-specific and must remain specialized?
- **Content Unit Presentation (View A):**
  - *Fiction:* Focuses on physical scene location, sensory texture, dialogue subtext, character reactions, and emotional transitions.
  - *Nonfiction:* Focuses on thesis claims, deductive chains, empirical studies, quantitative models, and actionable heuristics.
  - *History / Biography:* Focuses on macro/meso/micro context, dual-timeline anchors, verbatim subject documents, causal mechanisms, multi-tier evidence classifications, and competing historical accounts.
- **Relational Synthesis (View B):**
  - *Fiction:* Interpersonal character arcs and motif lifecycles.
  - *Nonfiction:* Master theoretical frameworks and empirical corpus tables.
  - *History / Biography:* Multi-actor network graphs, causal DAGs (`causal_relationships`), archival plate inventories, and historiographical dispute matrices.
- **Genre-Specific Deep View (View C):**
  - *Fiction:* Phenomenological Experience & Emotional Weather.
  - *Nonfiction:* Operational Heuristic Engine & Strategic Decision Matrix.
  - *History / Biography:* Ideological Dialectic (e.g. State Legality vs Revolutionary Vanguard) and Historical Active Recall.

### 3. Which parts are bespoke / legacy and must be refactored or replaced?
- **Hardcoded View B & View C Templates:** `render_fiction.js` and `render_nonfiction.js` currently inject hardcoded, book-specific HTML (e.g., Toru/Naoko arcs, Malmendier/Nagel study tables). They do not dynamically construct View B and C from the underlying knowledge units.
- **ID & Event Binding Disconnect:** `render_bkrs_book.js` outputs inline `onclick` attributes and specific DOM IDs (e.g., `#trace-drawer`, `#bkrs-search-data`), while `docs/assets/js/reader-controls.js` listens for mismatched IDs (e.g., `#sourceTraceDrawer`, `#bkrs-search-index`) inside an unexported IIFE.
- **Legacy Markdown Parsers in `src/`:** Scripts such as `build_norwegian_wood_html.js` and `build_psychology_of_money_html.js` that parsed markdown via regex are obsolete and must remain strictly quarantined from the canonical pipeline.

### 4. Do current renderers read canonical `knowledge-units.json` or independently authored prose?
- **Universal Entry Point (`src/render_bkrs_book.js`):** Directly consumes canonical `knowledge-units.json` via `adaptKnowledgeUnits()`.
- **View A Engine:** Dynamically iterates through `model.chapters` and `ch.units` derived from the JSON.
- **View B & C Engines:** Defectively fall back to embedded prose templates rather than data-driven unit aggregation.
- **Canonical Rule Enforced:** Under Step 4, all views across all genres must render strictly from structured JSON payloads.

### 5. How can the Three-View architecture be represented by one shared shell?
- A single HTML container with a standardized tab controller:
  - Topbar contains identical branding, metadata breadcrumb, and a 3-tab pill switcher.
  - The tabs map semantically across genres:
    - Tab 1: **Source Journey** (`#view-journey`)
    - Tab 2: **Knowledge Map** (`#view-map`)
    - Tab 3: **Deep Perspective** (`#view-deep`) — labeled dynamically as *The Experience* (Fiction), *The Operational Engine* (Nonfiction), or *The Dialectical Engine* (History).
  - All three views exist in the same DOM; tab switching toggles container visibility (`display: block / none`) and updates URL hashes without re-rendering or page reloads.

### 6. What data fields are missing from the current shared renderer?
The existing renderer lacks rendering templates and CSS rules for:
1. Historical Epistemic Badges: `[CORROBORATED_HISTORICAL_FACT]`, `[CONTEMPORARY_RECORD]`, `[PRIMARY_SUBJECT_WRITING]`, `[BIOGRAPHER_THESIS]`, `[COERCED_TESTIMONY]`, `[BIOGRAPHER_CONJECTURE]`.
2. Causal Edges: `causal_status` (`[DOCUMENTED_CAUSATION]`, `[CORROBORATED_CAUSAL_INFERENCE]`, `[HISTORIAN_CAUSAL_HYPOTHESIS]`, `[BKRS_CAUSAL_INFERENCE]`), supporting evidence, and epistemic attribution.
3. Dual-Timeline Metadata: `event_time`, `record_revelation_time`, and `source_time`.
4. Contextual Tiers: `micro_context`, `meso_context`, `macro_context`.
5. Forensic Evidence Classifications: `type`, `temporal_proximity`, `source_independence`, `institutional_position`, `coercive_context`, `corroboration_state`, and `evidentiary_reliability_assessment`.
6. Primary Document / Plate Payloads: Medium, format, origin, verbatim text excerpts, and plate image/facsimile metadata.
7. Competing Accounts & Uncertainty: Historiographical disputes and evidentiary gaps.

### 7. Can the certified Juss Book Master currently be rendered without information loss?
- **NO.**
  - **Schema Crash:** `bkrs_adapter.js` checks `unit.chapter` or `unit.source_location.chapter`. In Juss, the key is `source_location.chapter_number`. Consequently, all 78 units are assigned to Chapter 1, collapsing a 55-chapter work into a single broken chapter block.
  - **Genre Misclassification:** `bkrs_adapter.js` only recognizes `genre === "nonfiction" || genre === "analytical_nonfiction" || genre === "technical"`. It classifies `historical_biography` as fiction, routing Juss to `render_fiction.js`.
  - **Data Obliteration:** `render_fiction.js` attempts to render `scene.what_happens`, which does not exist in Juss, producing blank cards. Views B and C render the hardcoded character arcs of Toru, Naoko, and Reiko from *Norwegian Wood*.
  - **Complete Loss:** 100% of historical causal relationships, dual timelines, archival plates, and legal mechanics would be invisible.

---

# 3. EXPLICIT AUDIT REQUIREMENTS (SECTIONS A TO J)

## A. Canonical Data Flow
```
SOURCE MONOGRAPH (Juss, 2022)
          │
          ▼
INGESTION MANIFEST (ingestion-manifest.json v1.1.0)
          │
          ▼
CANONICAL KNOWLEDGE UNITS (knowledge-units.json — 78 Atomic Units)
          │
          ▼
UNIVERSAL DATA ADAPTER (src/bkrs/bkrs_adapter.js)
  ├── Detects genre ("historical_biography", "analytical_nonfiction", "literary_fiction")
  ├── Normalizes chapters, source coordinates, and unit indices
  ├── Aggregates cross-unit facets (entities, causal DAGs, plates, disputes, timelines)
  └── Compiles comprehensive static search index
          │
          ▼
SPECIALIZED GENRE VIEW COMPILER (src/bkrs/render_historical.js)
  ├── Compiles View A: 78 Chronological & Document Units
  ├── Compiles View B: Causal DAG, Entity Graph, Archival Plate Index, Dispute Matrix
  └── Compiles View C: State vs. Vanguard Dialectic, Legal Precedents, Recall Engine
          │
          ▼
UNIVERSAL APPLICATION SHELL COMPILER (src/render_bkrs_book.js)
  ├── Injects theme.css, typography.css, reader-shell.css
  ├── Mounts Topbar, Collapsible Sidebar, Search Modal, and Trace Drawer
  └── Emits docs/distillations/bhagat-singh-a-life-in-revolution/index.html (Zero-Loss Reader)
```

## B. Shared Infrastructure
The universal framework across all genres comprises:
1. **Design Tokens & Theming:** CSS variables for Cream, Midnight, and Sepia palettes.
2. **Reading Canvas:** 740px optimal reading width, line-height 1.7, EB Garamond serif type.
3. **Application Navigation:** Sticky topbar, sidebar TOC with unit counts, view switcher tabs.
4. **Interactive Controls:** Theme toggle, font size adjusters (`A-` / `A+`), serif/sans toggle, distraction-free focus mode (`F`), and keyboard shortcuts.
5. **Non-Disruptive Inspection Drawer:** Slide-over panel presenting epistemic metadata, exact source coordinates, and materiality rationales without losing scroll position.
6. **Client Search System:** Instant client-side search indexing unit titles, summaries, entities, and primary quotes.

## C. Genre-Specific Payloads
The renderer must adapt to the primary unit of each genre:
- **Fiction (Primary Unit: SCENE):** Narrative action, sensory texture, subtext, emotional trajectory, character presence, recurring motifs.
- **Nonfiction (Primary Unit: ARGUMENT / IDEA UNIT):** Core thesis claim, deductive logical steps, empirical research citations, quantitative formulas, counterarguments, actionable rules.
- **Historical / Biographical (Primary Units: HISTORICAL_EPISODE, LIFE_EPISODE, DOCUMENT_UNIT):**
  - *Document Units:* Document title, author, date, physical format, legal/ideological significance, verbatim excerpts, biographer framing.
  - *Historical Episodes:* Action sequence, actors and roles, institutional setting, operational tradecraft, historical consequences, competing accounts.
  - *Life Episodes:* Life stage, formative influences, psychological developments, pivotal decisions.

## D. Three-View Support from Shared Canonical Units
All three views are generated from the *same* `knowledge-units.json` file:
- **View A (The Source Journey):** Consumes units ordered by `source_location.chapter_number` and sequential occurrence. Presents the book as structured by the author, preserving narrative pacing and delayed revelations.
- **View B (The Relational Knowledge Map):** Consumes `relationships`, `causal_relationships`, `entities`, and `competing_accounts`. Reorganizes the entire corpus into an analytical reference system:
  1. *Actor & Organizational Network* (HSRA, Naujawan Bharat Sabha, Colonial State, Congress).
  2. *Multi-Step Causal DAG* (e.g. Lajpat Rai Death $\rightarrow$ Saunders Killing $\rightarrow$ Assembly Bomb $\rightarrow$ Ordinance III $\rightarrow$ Hanging).
  3. *Archival Plates & Contemporary Records* (All 21 plates from `KU-BS-APP-01` to `KU-BS-APP-21`).
  4. *Historiographical Dispute Matrix* (Gandhi-Irwin talks, shot counts, secret Sutlej disposal, Marxist vs romantic historiography).
- **View C (The Dialectical Engine & Active Recall):** Consumes `genre_specific_payload` and epistemic classifications. Reorganizes content into:
  1. *The Dialectic of Colonial Legality vs Revolutionary Sovereignty* (Extraordinary law, Ordinance III, Section 72, Tribunal boycott).
  2. *Ideological Evolution* (Terrorism $\rightarrow$ Scientific Socialism $\rightarrow$ Mass Agrarian Mobilization).
  3. *Socratic Forensic Test Suite* (Interactive recall cards derived from validation archetypes).

## E. Traceability Architecture
Every unit rendered in the interface includes transparent provenance:
- **Header Tag:** Displays the specific chapter, part, and physical/digital coordinates (e.g., `Ch. 22 • page 121 • FIR No. 121`).
- **Footer Metadata:** Displays the canonical `unit_id` (e.g., `KU-BS-CH22-01`).
- **Source Trace Button (`Source Trace ↗`):** Triggers the slide-over drawer populated with:
  - Canonical Unit Identifier
  - Exact Ingestion Element IDs (`bhasin0000085` etc.)
  - Linked Source Endnotes with resolved references
  - Primary Archival Citations
  - Dual Timeline coordinates (`event_time` vs `record_revelation_time` vs `source_time`)
  - Materiality justification

## F. Epistemic UI Architecture
To enforce the BKRS Constitutional requirement that external interpretation never masquerades as source fact:
- **Epistemic Badges:** Distinct visual styles for each classification:
  - `[CORROBORATED_HISTORICAL_FACT]`: Solid navy badge (`#1e3d59`)
  - `[CONTEMPORARY_RECORD]`: Solid teal badge (`#17b978`)
  - `[PRIMARY_SUBJECT_WRITING]`: Deep crimson badge (`#8b0000`)
  - `[BIOGRAPHER_THESIS]`: Amber/gold badge (`#b8860b`)
  - `[COERCED_TESTIMONY]`: Purple warning badge (`#5a3e85`)
  - `[BIOGRAPHER_CONJECTURE]`: Outlined dashed amber badge
- **Causal Edge Styling:** Causal connections explicitly display their epistemic validation status:
  - `[DOCUMENTED_CAUSATION]`: Solid arrow with document link
  - `[CORROBORATED_CAUSAL_INFERENCE]`: Bold line with multi-source footnote
  - `[HISTORIAN_CAUSAL_HYPOTHESIS]`: Dashed line with biographer attribution
  - `[BKRS_CAUSAL_INFERENCE]`: Dotted line with explicit deduction chain
- **Dispute & Uncertainty Containers:** Contested facts (e.g., eyewitness auditory shot counts vs autopsy, Gandhi-Irwin minutes) are rendered in dedicated two-column dispute callouts with neither account suppressed.

## G. Materiality Representation
The reader dynamically reflects the 4-tier materiality classification:
- **CRITICAL (Level 1):** Full card expansion, primary visual weight, accented left border, prominent badge (`.badge-critical`).
- **IMPORTANT (Level 2):** Standard card presentation, neutral border, standard badge (`.badge-important`).
- **TEXTURAL (Level 3):** Rendered within secondary collapsible containers (`Mundane Texture`, `Institutional Background`) so readers can inspect sensory context without visual clutter.
- **REDUNDANT (Level 4):** Accounted for in the coverage ledger but omitted from the primary reading stream to minimize cognitive friction.

## H. Search & Retrieval System
The client-side search engine (`reader-controls.js`) will index a pre-compiled JSON payload (`#bkrs-search-data`):
- **Searchable Dimensions:**
  - Entity names (Bhagat Singh, Sukhdev, Saunders, Irwin, Gandhi, Jatin Das)
  - Unit Titles & Chapter Titles
  - Summary Statements & Primary Quotes
  - Legal Ordinances & Statutes (Ordinance III of 1930, Section 72, Section 340)
  - Archival Plates (Plate 1 to 21)
  - Epistemic Badges & Causal Edges
- **Result Snippets:** Displays matching unit ID, chapter, excerpt highlight, and an immediate anchor link (`#KU-BS-...`) that switches to View A and scrolls to the exact unit.

## I. Mobile & Desktop Responsiveness
Mapping the reading specifications across screen sizes:
- **Desktop (> 960px):**
  - Left collapsible sidebar (280px width) with sticky TOC.
  - Centered reading column (740px max-width).
  - Slide-over trace drawer (400px width) on the right edge.
  - Topbar contains full controls and text labels.
- **Mobile (<= 960px):**
  - Sidebar collapses off-canvas; toggles via hamburger button (`☰`).
  - Topbar consolidates into compact icon buttons.
  - 3-View switcher condenses into icon-pill format.
  - Reading column expands to full viewport width with 16px lateral padding.
  - Source Trace Drawer slides up from the bottom (bottom-sheet drawer) taking 85vh.

## J. Migration Strategy (Zero Benchmark Degradation)
To ensure existing certified benchmarks (*Norwegian Wood* and *The Psychology of Money*) are never broken:
1. **Preserve Legacy Entry Points:** Maintain backward compatibility for existing property names (`scene_id`, `unit_id`, `is_nonfiction`).
2. **Isolate Genre Engines:** Keep `render_fiction.js` and `render_nonfiction.js` intact for their respective benchmarks while refactoring them to use the shared CSS and JS assets.
3. **Add Dedicated Historical Engine:** Create `src/bkrs/render_historical.js` specifically for historical/biographical Book Masters.
4. **Automated Regression Verification:** Re-run `src/verify_reader_content.js` and benchmark test sets to guarantee 100% preservation across all three books.

---

# 4. INSPECTED FILES INVENTORY

The following 16 files were forensically examined during this audit:

| Category | File Path | Status & Architectural Role |
|---|---|---|
| **Adapter Layer** | [`src/bkrs/bkrs_adapter.js`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/src/bkrs/bkrs_adapter.js) | Active. Requires schema normalization for historical units. |
| **Genre Engine** | [`src/bkrs/render_fiction.js`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/src/bkrs/render_fiction.js) | Active for Fiction. Contains hardcoded Norwegian Wood blocks. |
| **Genre Engine** | [`src/bkrs/render_nonfiction.js`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/src/bkrs/render_nonfiction.js) | Active for Nonfiction. Contains hardcoded Psychology blocks. |
| **Compiler** | [`src/render_bkrs_book.js`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/src/render_bkrs_book.js) | Active Universal Entry Point. Requires historical engine dispatch. |
| **Design Tokens** | [`docs/assets/css/theme.css`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/assets/css/theme.css) | Production. 100% reusable design tokens. |
| **Typography** | [`docs/assets/css/typography.css`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/assets/css/typography.css) | Production. 100% reusable reading typography and measure. |
| **Shell Layout** | [`docs/assets/css/reader-shell.css`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/assets/css/reader-shell.css) | Production. 95% reusable layout shell; needs historical badges. |
| **Interactivity** | [`docs/assets/js/reader-controls.js`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/assets/js/reader-controls.js) | Production. Requires ID and event-binding reconciliation. |
| **Existing Reader** | [`docs/distillations/norwegian-wood/index.html`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/distillations/norwegian-wood/index.html) | Production benchmark (Fiction). |
| **Existing Reader** | [`docs/distillations/the-psychology-of-money/index.html`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/distillations/the-psychology-of-money/index.html) | Production benchmark (Analytical Nonfiction). |
| **Book Master Data**| [`docs/distillations/bhagat-singh-a-life-in-revolution/knowledge-units.json`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/distillations/bhagat-singh-a-life-in-revolution/knowledge-units.json) | Canonical Certified Source of Truth (78 KUs). |
| **Book Master Prose**| [`docs/distillations/bhagat-singh-a-life-in-revolution/master-notes.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/distillations/bhagat-singh-a-life-in-revolution/master-notes.md) | Certified 3-View Reference Notes (Secondary Projection). |
| **Frontend Spec** | [`docs/ui/FRONTEND_AUDIT.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/ui/FRONTEND_AUDIT.md) | Architecture baseline document. |
| **Frontend Spec** | [`docs/ui/IMPLEMENTATION_REPORT.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/ui/IMPLEMENTATION_REPORT.md) | V2.5 implementation history. |
| **Frontend Spec** | [`docs/ui/SCREEN_MAP.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/ui/SCREEN_MAP.md) | Screen topology and route reference. |
| **Constitutional Spec**| [`docs/architecture/BKRS_AGENT_OPERATING_CONSTITUTION.md`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/architecture/BKRS_AGENT_OPERATING_CONSTITUTION.md) | Core operating standard enforcing data-driven rendering. |

---

# 5. RECOMMENDED IMPLEMENTATION SEQUENCE (STEP 4.1 TO 4.5)

To implement the canonical reader safely without altering certified data layers or breaking benchmarks:

1. **Step 4.1: Shared Shell & Client Controller Harmonization**
   - Reconcile element IDs and event listeners between `reader-controls.js` and `render_bkrs_book.js` (theme, typography, focus, search, and drawer).
   - Add CSS badge styles for historical epistemic classifications and causal relationship edges in `reader-shell.css`.

2. **Step 4.2: Universal Data Adapter Extension (`src/bkrs/bkrs_adapter.js`)**
   - Enhance `adaptKnowledgeUnits()` to natively detect `genre === "historical_biography"`.
   - Normalize chapter extraction to support `source_location.chapter_number` and Front Matter (Chapter 0 / Epigraph / Prologue).
   - Aggregate historical facets: actors, organizations, causal DAG, archival plates, dual timelines, and historiographical disputes.

3. **Step 4.3: Specialized Historical View Compiler (`src/bkrs/render_historical.js`)**
   - **View A (The Source Journey):** Render all 78 chronological units and document plates with epistemic badges, materiality levels, and source trace drawers.
   - **View B (The Relational Knowledge Map):** Dynamically generate the Causal DAG, Actor/Org Network Graph, Archival Plate Catalog, and Historiographical Disputes Matrix directly from JSON.
   - **View C (The Dialectical Engine):** Render the Colonial Legality vs Revolutionary Sovereignty analysis, Ideological Trajectory, and interactive Historical Active Recall cards.

4. **Step 4.4: Universal Entry Point Integration (`src/render_bkrs_book.js`)**
   - Connect `render_historical.js` into `renderBookMaster(slug)`.
   - Ensure dynamic tab labeling (*The Source Journey*, *The Knowledge Map*, *The Dialectical Engine*).

5. **Step 4.5: Compilation & Independent Verification**
   - Compile `docs/distillations/bhagat-singh-a-life-in-revolution/index.html`.
   - Run verification tests to confirm 100% preservation of all 78 units, 21 plates, and 9 qualified directives with zero console errors.

---

# 6. STOP GATE NOTICE

In strict compliance with instructions:
- **This audit report concludes Step 4.0.**
- **No source code or implementation files have been modified.**
- **No frontend compilation or deployment has been executed.**
- **Awaiting user approval before proceeding to implementation.**
