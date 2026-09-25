# BKRS Reading Interface — Screen Map & Route Topology
**Document:** `docs/ui/SCREEN_MAP.md`  
**System:** Intellectualist / Book Knowledge Reconstruction System (BKRS)  
**Target:** GitHub Pages Hosted Environment

---

## 1. APPLICATION ROUTE MAP

```
                      [ROOT REDIRECT]
                      index.html
                            │
                            ▼
              ┌─────────────────────────────┐
              │    MASTER LIBRARY PORTAL    │
              │       docs/index.html       │
              └──────────────┬──────────────┘
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
┌─────────────────────────┐       ┌─────────────────────────┐
│  ALL-IN-ONE NOTEBOOK    │       │ STANDALONE BOOK READER  │
│    docs/notebook.html   │       │ docs/distillations/     │
│                         │       │   norwegian-wood/       │
│                         │       │     index.html          │
└─────────────────────────┘       └───────────┬─────────────┘
                                              │
                      ┌───────────────────────┼───────────────────────┐
                      ▼                       ▼                       ▼
              [VIEW A: JOURNEY]       [VIEW B: KNOWLEDGE]    [VIEW C: EXPERIENCE]
              #journey                #knowledge             #experience
              • 36 Content Units      • 7 Relationships      • Emotional Weather
              • 11 Chapter Blocks     • 7 Motif Lifecycles   • Somatic Intimacy
              • Source Trace Drawer   • Dual Timelines       • 7 Active Recall Qs
```

---

## 2. SCREEN DEFINITIONS & MODES

### Screen 1: Master Library Portal
- **Route**: `docs/index.html` (Redirected from `/index.html`)
- **Purpose**: Library exploration, subject categorization, search across catalog, and reading-time metrics.
- **Key Interactivity**: Category pills, live search bar, links to standalone codices and all-in-one notebook.

### Screen 2: All-in-One Master Notebook
- **Route**: `docs/notebook.html`
- **Purpose**: Multi-book consolidated reference notebook for broad cross-disciplinary study.
- **Key Interactivity**: Top tab rail switching between active codices, global theme switcher, font size scaler.

### Screen 3: Standalone Book Reader — View A: Source Journey
- **Route**: `docs/distillations/norwegian-wood/index.html#journey`
- **Purpose**: Sequential narrative reading of the reconstructed book preserving authorial pacing, revelation order, and dramatic tension.
- **Key Interactivity**:
  - Sticky Topbar: Theme cycling, font sizing, serif/sans toggle, search trigger, focus mode.
  - Collapsible Sidebar: Chapter jump navigation (Chapters 1–11).
  - Content Unit Cards: Progressive disclosure of narrative, why-this-matters, mundane texture, emotional shifts.
  - Source Trace Button: Opens non-disruptive drawer (`#sourceTraceDrawer`) displaying exact page numbers, chronological coordinates, and materiality justifications.

### Screen 4: Standalone Book Reader — View B: The Knowledge Map
- **Route**: `docs/distillations/norwegian-wood/index.html#knowledge`
- **Purpose**: Systemic, non-linear knowledge retrieval.
- **Key Interactivity**:
  - 7 Relationship Trajectories across 6 developmental stages (Initial &rarr; Development &rarr; Micro-Texture &rarr; Transformation &rarr; Crisis &rarr; Late State).
  - 7 Temporal Motif Progression Matrix table tracking symbolic lifecycles.
  - Dual Chronology comparison (Timeline A: Chronological vs. Timeline B: Narrative Revelation).

### Screen 5: Standalone Book Reader — View C: Experience Reconstruction
- **Route**: `docs/distillations/norwegian-wood/index.html#experience`
- **Purpose**: Phenomenological and emotional understanding, somatic intimacy, quarantined critical lenses, and active recall.
- **Key Interactivity**:
  - Emotional Weather & Pacing breakdown (Tokyo rain, Kyoto cedar mist, Otsuka smoke).
  - Dramatic Tension analysis (Past vs. Present).
  - Quarantined External Analytical Lenses (Freud, Werther Effect, Prolonged Grief Disorder, Conversion Disorder).
  - Socratic Active Recall Engine: 7 interactive flashcards with click-to-reveal answers.

### Overlay 1: Non-Disruptive Source Trace Drawer
- **Trigger**: Click `Source Trace ↗` on any content unit.
- **Purpose**: Inspect provenance, chapter/page range, epistemic badge, and materiality justification without losing reading position.
- **Dismissal**: Click `✕`, click backdrop, or press `Esc`.

### Overlay 2: Static Live Search Dialog
- **Trigger**: Click `🔍 Search /` or press `/` key.
- **Purpose**: Instantly search all 36 scenes, characters, and motifs with real-time text matching and jump links.
- **Dismissal**: Click `Esc` or click outside dialog.

### Mode: Focus Mode (Distraction-Free Reading)
- **Trigger**: Click `📖 Focus F` or press `F` key.
- **Purpose**: Collapses sidebar, eliminates non-essential metadata, centers the 740px reading canvas, transforming the interface into a pure, digital book reading experience.
- **Dismissal**: Press `F` again or click the active Focus button.
