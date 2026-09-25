# Project Agent Guidelines: Intellectualist (BKRS v1.0 Standard)

This file defines the constitutional rules for Antigravity agents operating within the `Intellectualist` workspace, enforcing the **Book Knowledge Reconstruction System (BKRS) Foundational Specification — v1.0**.

---

## 1. Scope & Isolation
- **Self-Contained**: All files, outputs, scripts, and skills reside within this directory tree.
- **Local Priority**: Always use project-local skills in `.agents/skills/` before falling back to global tools.
- **Reproducibility**: All parsing, synthesis, and compilation steps must be scripted and reproducible.

---

## 2. Core Mission: Knowledge Reconstruction (Not Summarization)
- **The Guiding Principle**: Do not think *"How can I make this book shorter?"* Think: *"How can I preserve the maximum amount of important information, meaning, structure, reasoning, emotion, and authorial perspective while making the material substantially easier to study?"*
- **The Standard**: **Contentual Substitution**—the user must be able to understand and retain the substantive and experiential content of the work without having to read the original book page-by-page.
- **Tone & Voice**: **Clarify the author; do NOT replace the author with AI.** Preserve the author's actual conceptual framework, terminology, examples, distinctions, and reasoning. Never flatten complex thought into generic platitudes.

---

## 3. The Two-Layer Architecture
1. **PART I — Individual Book Master**:
   Every book must be independently reconstructed into a standalone "Book Master" stored in `docs/distillations/<book-slug>/`. Each Book Master must eventually provide:
   - **View A: Source Journey**: Follows the book in the author's original sequence, preserving chronology, revelation, argument progression, and emotional trajectory.
   - **View B: Knowledge Map**: Reorganizes extracted data by concepts, characters, themes, arguments, relationships, motifs, and conclusions.
   - **Internal Knowledge Units (`knowledge-units.json`)**: Machine-readable structured representation (concepts, claims, events, characters, emotional states, source locations) ensuring traceability and downstream synthesis without re-summarization.
2. **PART II — Multi-Book Knowledge Synthesis**:
   Synthesizes multiple Book Masters into an integrated Canonical Knowledge Layer and Master Notebook. This happens *only after* individual Book Masters are established.
   - Preserves attribution for every claim.
   - Explicitly maps common ideas, conflicting ideas, complementary perspectives, differing terminology, and evidence.
   - **Never creates a false consensus.**

---

## 4. Epistemic Demarcation & Traceability
All outputs must strictly distinguish between:
1. **SOURCE FACT**: Explicitly stated or demonstrated in the text.
2. **SOURCE ARGUMENT**: A claim or thesis argued by the author.
3. **CHARACTER BELIEF**: A belief held by a fictional character.
4. **NARRATOR'S POSITION**: A position expressed by the narrator.
5. **INTERPRETATION**: Analytical interpretation (distinguishing explicit, strongly implied, reasonable, and speculative).
6. **SYSTEM SYNTHESIS**: Conclusions derived from comparing multiple sources.

Never invent missing information. If text or OCR is ambiguous or incomplete, state the ambiguity explicitly.

---

## 5. Genre-Specific Requirements
- **Non-Fiction / Analytical**: Full causal mechanics, quantitative formulas, primary empirical studies (researchers, year, methodology, findings), operational decision trees, edge cases, and active recall.
- **Fiction / Literary Works**: 9-Layer reconstruction: Narrative, Character, Relationship, Emotional (first-class requirement grounded in text), Psychological, Thematic, Symbolic/Motifs, Structural sequence, and Authorial boundary.
- **Autobiography / Memoir**: Chronology, major turning points, struggles, achievements, reflections, and shifts in worldview.
- **Poetry**: Themes, imagery, recurring motifs, emotional movement, and individual poem analyses.

---

## 6. Library Cataloging & Artifact Delivery
- Every Book Master is registered in `docs/library-index.json` and added to `docs/catalog-500.json`.
- Maintain two-way navigation between the Master Library index (`docs/index.html`), the standalone interactive all-in-one notebook (`docs/notebook.html`), and individual Book Master codices.
