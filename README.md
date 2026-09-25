# Intellectualist

An independent workspace with its own isolated directory structure, rules, and project-level skills for distilling books, manuscripts, and treatises across multiple formats into replacement-grade master codices.

## Project Architecture

```text
Intellectualist/
├── index.html                             # Root launchpad redirecting to docs/index.html
├── docs/
│   ├── index.html                         # The Master Library Portal & Dynamic Index
│   ├── library-index.json                 # Structured catalog registry of all books
│   └── distillations/                     # Dedicated directory for individual book codices
│       └── atomic-habits/
│           ├── index.html                 # Exhaustive 20-chapter standalone HTML codex
│           └── master-notes.md            # Companion markdown codex
├── src/
│   └── books/                             # Drop input books here (.pdf, .epub, .mobi, .md)
├── .agents/
│   └── skills/                            # Isolated, project-specific skills
│       ├── book-distillation-framework/   # V2 6-layer architecture & Golden Test rules
│       ├── multiformat-book-processing/   # Ingestion engine for PDF, EPUB, MOBI, MD
│       ├── pdf-book-processing/           # Dedicated PDF parsing rules
│       └── intellectualist-workflow/      # Execution workflow
├── AGENTS.md                              # Project-level agent rules
└── README.md
```

## How the Master Library Works
1. **The Library Portal ([`docs/index.html`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/index.html))**:
   - Acts as the central homepage for all distilled treatises.
   - Features real-time client-side search across titles, authors, mental models, and empirical studies.
   - Epistemic tier filter pills (Tier 1: Empirical, Tier 2: Applied, Tier 3: Pop-Science).
   - Live metrics (cumulative reading time saved, number of vaulted clinical trials, total books).
2. **Book Codices**:
   - Each book has its own self-contained, 20-chapter deep dive in `docs/distillations/<slug>/index.html`.
   - All individual codices include a direct return button back to the Master Library Index.
3. **Adding New Books**:
   - Drop any `.pdf`, `.epub`, `.mobi`, or `.md` book into `src/books/` and request distillation.
   - The book is extracted, codified into all 6 layers, and automatically registered in the central homepage.
