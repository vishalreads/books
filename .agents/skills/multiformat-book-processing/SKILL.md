---
name: multiformat-book-processing
description: >-
  Systematic ingestion, parsing, chunking, and distillation pipeline for processing books
  in PDF (.pdf), EPUB (.epub), and Markdown (.md/.txt) formats into replacement-grade master notes.
---

# Multi-Format Book Ingestion & Processing Pipeline

Activate this skill whenever processing books or long-form manuscripts in **PDF**, **EPUB**, or **Markdown** formats.

---

## 1. Supported Ingestion Formats

### Format A: PDF (`.pdf`)
- **Ingestion**: Native inspection via `view_file`.
- **Pre-Processing**: Identify Table of Contents, front matter, and chapter boundaries.
- **Handling**: Read in logical chapter/section ranges to maintain analytical fidelity and prevent context loss.

### Format B: EPUB (`.epub`) & MOBI (`.mobi`)
- **Ingestion**: 
  - EPUB files are standard ZIP containers packaging XHTML/HTML chapters.
  - MOBI files are PalmDOC Palm Database containers with LZ77 compression.
- **Pre-Processing**: Extract using the bundled helper scripts:
  - For EPUB: `powershell -File .agents/skills/multiformat-book-processing/scripts/extract_epub.ps1 -EpubPath "path/to/book.epub"`
  - For MOBI: `powershell -File .agents/skills/multiformat-book-processing/scripts/extract_mobi.ps1 -MobiPath "path/to/book.mobi"`
- **Handling**: Produces clean, spine-ordered HTML and formatted text for chapter-by-chapter distillation.

### Format C: Markdown / Plain Text (`.md`, `.txt`)
- **Ingestion**: Directly ingested via `view_file` or line-bounded inspection.
- **Pre-Processing**: Audit header hierarchy (`#`, `##`, `###`) to establish the architectural outline.
- **Handling**: Seamless chunking by top-level section.

---

## 2. Universal 4-Phase Ingestion Workflow

Regardless of source format (`.pdf`, `.epub`, or `.md`), follow this uniform pipeline:

```text
[Source: .pdf | .epub | .md]
         │
         ▼
Phase 1: Format-Specific Extraction (unpack EPUB / map PDF TOC / parse MD headers)
         │
         ▼
Phase 2: Signal-to-Noise Filtering (discard filler, anecdotes, fluff; extract causal mechanics)
         │
         ▼
Phase 3: 6-Dimensional Distillation Matrix (apply book-distillation-framework)
         │
         ▼
Phase 4: Save Deliverables in docs/distillations/<book-slug>/
         ├── master-notes.md
         ├── flashcards.md
         └── metadata.json
```

---

## 3. Signal Filtering Standards
- **Keep**: Core thesis, causal mechanisms, neurological/economic/psychological laws, counter-intuitive distinctions, classification tables, failure modes, boundary limits, and verbatim actionable scripts.
- **Discard**: Publisher introductions, forewords praising the author, redundant autobiographical anecdotes, repetitive historical analogies that add no new theoretical model.
