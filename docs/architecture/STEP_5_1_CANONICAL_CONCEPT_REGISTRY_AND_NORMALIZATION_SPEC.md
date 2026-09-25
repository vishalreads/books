# Step 5.1: Canonical Concept Registry Schema Freeze & Read-Only Cross-Book Normalization Adapter Specification

**Standard:** BKRS Agent Operating Constitution v1.0 (§13–§19, §33–§35)  
**Phase:** Milestone 5 — Multi-Book Knowledge Synthesis Specification Freeze  
**Status:** Machine Schema Frozen (Implementation Staged)  
**Machine Schema Artifact:** [`docs/architecture/step-5-1-canonical-concept-registry-and-normalization-spec.json`](file:///c:/Users/visha/OneDrive/Documents/Intellectualist/docs/architecture/step-5-1-canonical-concept-registry-and-normalization-spec.json)  
**Date:** 2026-09-25  

---

## 1. Executive Determination

In accordance with BKRS Constitution §13–§19 and following the specification-hardening pass in Step 5.0A, this document formally freezes the machine-level schemas and deterministic transformation rules for the **BKRS Cross-Book Normalization Layer**:

```
┌─────────────────────────────────────────────────────────────┐
│                 CANONICAL BOOK MASTERS (3)                  │
│    Norwegian Wood    •    Psychology of Money    •   Juss   │
│                   (Immutable & Independent)                 │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Strictly Read-Only Projection)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│            READ-ONLY NORMALIZATION ADAPTER ENGINE           │
│       Transforms Units into Standardized Cross-Book Views   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 NormalizedCrossBookUnit (NXU)               │
│          Unified Handles • Immutable Provenance Chains       │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│          CANONICAL CONCEPT & ENTITY REGISTRY SYSTEM         │
│   CanonicalConcept  •  BookSpecificConcept  •  Relations     │
└─────────────────────────────────────────────────────────────┘
```

### The Invariant of Immutability:
- **Zero Mutation:** The underlying Book Masters (`knowledge-units.json`) for *Norwegian Wood* (36 scenes), *The Psychology of Money* (24 argument units), and *Bhagat Singh: A Life in Revolution* (78 units) are strictly read-only and immutable.
- **Zero In-Place Normalization:** No fields are renamed, deleted, or inserted into the source Book Masters.
- **Zero Synthetic Conclusions:** This milestone freezes schemas, transformation matrices, and validation rules; it does not author cross-book conclusions, populate concept mappings in production, or emit synthesis HTML.

---

## 2. Canonical Concept Registry Schema

The **Canonical Concept Registry** provides a domain-agnostic, standardized ontology that prevents automated embedding algorithms from collapsing nuanced, domain-specific ideas into generic platitudes.

### JSON Schema: `CanonicalConcept`
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "CanonicalConcept",
  "type": "object",
  "required": [
    "canonical_concept_id",
    "canonical_label",
    "definition",
    "domain",
    "scope",
    "aliases",
    "related_concept_ids",
    "equivalence_basis",
    "non_equivalence_basis",
    "temporal_scope",
    "contextual_scope",
    "genre_applicability",
    "concept_status",
    "evidence_required_for_equivalence",
    "human_review_status",
    "provenance"
  ],
  "properties": {
    "canonical_concept_id": {
      "type": "string",
      "pattern": "^CC-[A-Z0-9_-]+$",
      "description": "Unique immutable global concept identifier (e.g., CC-TIME-AUTONOMY, CC-POLITICAL-SACRIFICE)"
    },
    "canonical_label": {
      "type": "string",
      "description": "Formal, standardized label for the concept"
    },
    "definition": {
      "type": "string",
      "description": "Rigorous, unambiguous operational definition of the concept"
    },
    "domain": {
      "type": "string",
      "enum": [
        "PHILOSOPHY",
        "POLITICAL_ECONOMY",
        "PSYCHOLOGY",
        "SOCIOLOGY",
        "HISTORIOGRAPHY",
        "LITERARY_AESTHETICS",
        "EPISTEMOLOGY",
        "ETHICS",
        "GENERAL"
      ]
    },
    "scope": {
      "type": "string",
      "enum": [
        "UNIVERSAL_ABSTRACT",
        "INSTITUTIONAL_MACRO",
        "BEHAVIORAL_MESO",
        "INDIVIDUAL_MICRO",
        "EXPERIENTIAL_INTERIOR"
      ]
    },
    "aliases": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Lexical variations and synonymous terms operating strictly within the same domain"
    },
    "related_concept_ids": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Array of associated canonical concept IDs"
    },
    "equivalence_basis": {
      "type": "string",
      "description": "Formal criteria that candidate source concepts must satisfy to be mapped as identical"
    },
    "non_equivalence_basis": {
      "type": "string",
      "description": "Explicit boundary conditions that invalidate equivalence (e.g. crossing macro/micro boundaries)"
    },
    "temporal_scope": {
      "type": "string",
      "description": "Temporal constraints (e.g., modern industrial era, colonial period, trans-historical)"
    },
    "contextual_scope": {
      "type": "string",
      "description": "Institutional or cultural preconditions required for the concept to operate"
    },
    "genre_applicability": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["literary_fiction", "analytical_nonfiction", "historical_biography", "philosophy", "all"]
      }
    },
    "concept_status": {
      "type": "string",
      "enum": ["PROVISIONAL", "CERTIFIED", "DEPRECATED"]
    },
    "evidence_required_for_equivalence": {
      "type": "string",
      "description": "Documentary or propositional standard needed to establish equivalence"
    },
    "human_review_status": {
      "type": "string",
      "enum": ["PENDING", "CERTIFIED", "REJECTED"]
    },
    "provenance": {
      "type": "string",
      "description": "Audit record of who authored and certified this canonical concept entry"
    }
  }
}
```

---

## 3. BookSpecificConcept Schema

Every source book articulates ideas in its own idiom, historical context, and narrative voice. A `BookSpecificConcept` captures how a concept exists inside a specific Book Master before any cross-book mapping is attempted.

### JSON Schema: `BookSpecificConcept`
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "BookSpecificConcept",
  "type": "object",
  "required": [
    "book_specific_concept_id",
    "book_id",
    "source_unit_ids",
    "source_label",
    "source_definition",
    "source_scope",
    "source_domain",
    "source_context",
    "source_epistemic_status",
    "source_voice",
    "source_provenance",
    "mapping_status",
    "mapped_canonical_concept_id",
    "mapping_basis",
    "mapping_limitations"
  ],
  "properties": {
    "book_specific_concept_id": {
      "type": "string",
      "pattern": "^BSC-[A-Z0-9_-]+$",
      "description": "Unique book-level concept handle (e.g. BSC-PM-TIME-AUTONOMY, BSC-BS-ANTI-COLONIAL-EMANCIPATION)"
    },
    "book_id": { "type": "string" },
    "source_unit_ids": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Array of source unit IDs supporting this book-specific concept"
    },
    "source_label": { "type": "string", "description": "Verbatim term used by the source author" },
    "source_definition": { "type": "string", "description": "Concept definition as established strictly within the source text" },
    "source_scope": { "type": "string" },
    "source_domain": { "type": "string" },
    "source_context": { "type": "string" },
    "source_epistemic_status": { "type": "string", "description": "Frozen epistemic status from Book Master" },
    "source_voice": {
      "type": "string",
      "enum": [
        "AUTHOR",
        "NARRATOR",
        "FICTIONAL_CHARACTER",
        "HISTORICAL_SUBJECT",
        "BIOGRAPHER",
        "EDITOR",
        "PRIMARY_DOCUMENT_AUTHOR",
        "CONTEMPORARY_WITNESS",
        "OTHER_HISTORICAL_ACTOR",
        "UNKNOWN_AMBIGUOUS"
      ]
    },
    "source_provenance": {
      "type": "object",
      "required": ["chapter", "locator", "exact_quotation"],
      "properties": {
        "chapter": { "type": "string" },
        "locator": { "type": "string" },
        "exact_quotation": { "type": "string" }
      }
    },
    "mapping_status": {
      "type": "string",
      "enum": [
        "EXACT_EQUIVALENCE",
        "FUNCTIONAL_EQUIVALENCE",
        "PARTIAL_OVERLAP",
        "RELATED_NON_EQUIVALENT",
        "ANALOGICAL_RELATION",
        "SAME_LABEL_DIFFERENT_CONCEPT",
        "DIFFERENT_LABEL_SAME_CONCEPT",
        "UNMAPPED",
        "AMBIGUOUS_REQUIRES_REVIEW"
      ]
    },
    "mapped_canonical_concept_id": { "type": ["string", "null"] },
    "mapping_basis": { "type": "string" },
    "mapping_limitations": { "type": "string" }
  }
}
```

---

## 4. Concept Mapping States & Evidentiary Thresholds

To prevent automated systems from collapsing concepts based on surface vocabulary, the nine mapping states are frozen with strict evidentiary requirements:

| Mapping State | Formal Definition | Minimum Evidence Required | Invalidation Rule |
| :--- | :--- | :--- | :--- |
| **`EXACT_EQUIVALENCE`** | Identical concept with identical operational scope, definition, and domain applicability. | Verbatim or formal propositional identity; matching domain boundaries and non-divergent boundary conditions. | Prohibited across distinct domains (e.g. finance vs. revolutionary war). Vector similarity alone is strictly blocked. |
| **`FUNCTIONAL_EQUIVALENCE`** | Concepts operating with identical systemic, behavioral, or causal roles despite minor stylistic phrasing differences. | Demonstrable mapping of all primary functional inputs, mechanisms, and outcomes. | Incompatible philosophical frameworks invalidate functional equivalence. |
| **`PARTIAL_OVERLAP`** | Concepts sharing a core operational mechanism but diverging substantially in scope, normative goal, or boundary conditions. | Explicit identification of the intersection set and the divergence set with textual citations from both works. | Cannot be summarized as simple agreement or equivalence. |
| **`RELATED_NON_EQUIVALENT`** | Concepts addressing the same broad human or societal domain that do not share core definitions or mechanisms. | Demonstrable shared thematic anchor accompanied by proof of distinct operational mechanisms. | Cannot be used to transfer empirical evidence or conclusions. |
| **`ANALOGICAL_RELATION`** | Structural isomorphism between principles operating in completely distinct operational domains. | Explicit domain boundary declaration (e.g., Domain A: Capital Markets vs Domain B: Ideological Training) and isomorphism mapping. | Must never imply causation or shared empirical substance. |
| **`SAME_LABEL_DIFFERENT_CONCEPT`**| Lexical identity masking fundamentally different conceptual definitions. | Textual citations demonstrating identical term usage with conflicting definitional criteria. | Strictly overrides automated keyword or vector clustering. |
| **`DIFFERENT_LABEL_SAME_CONCEPT`**| Different lexical terms denoting the exact same operational or philosophical principle. | Rigorous definitional concordance proving identical scope, mechanism, and outcomes. | Requires human review certification before entering production. |
| **`UNMAPPED`** | Book-specific concept that has not yet been mapped to a canonical concept in the registry. | Valid `BookSpecificConcept` object present in adapter output. | Cannot participate in cross-book synthesis units. |
| **`AMBIGUOUS_REQUIRES_REVIEW`**| Candidate mapping where evidence is conflicting, incomplete, or borderline. | Audit log entry documenting the specific ambiguity. | Blocked from production synthesis until human review certification. |

---

## 5. NormalizedCrossBookUnit Schema

The `NormalizedCrossBookUnit` (`NXU`) is the universal, read-only projection emitted by the normalization adapter. It wraps every unit from any certified Book Master into a standardized structure without modifying source data:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "NormalizedCrossBookUnit",
  "type": "object",
  "required": [
    "normalized_unit_id",
    "book_id",
    "source_unit_id",
    "source_unit_type",
    "genre",
    "source_location",
    "structural_position",
    "source_sequence",
    "statement",
    "source_claims",
    "entities",
    "concepts",
    "relationships",
    "epistemic_status",
    "source_voice",
    "assertion_modality",
    "source_explicitness",
    "confidence",
    "materiality",
    "temporal",
    "provenance",
    "genre_specific_payload_reference",
    "normalization"
  ],
  "properties": {
    "normalized_unit_id": { "type": "string", "pattern": "^NXU-[A-Z0-9_-]+$" },
    "book_id": { "type": "string" },
    "source_unit_id": { "type": "string" },
    "source_unit_type": { "type": "string" },
    "genre": { "type": "string", "enum": ["literary_fiction", "analytical_nonfiction", "historical_biography"] },
    "source_location": {
      "type": "object",
      "required": ["chapter", "locator", "document_file"],
      "properties": {
        "chapter": { "type": ["string", "number"] },
        "chapter_title": { "type": "string" },
        "locator": { "type": "string" },
        "document_file": { "type": "string" },
        "element_ids": { "type": "array", "items": { "type": "string" } }
      }
    },
    "structural_position": {
      "type": "object",
      "required": ["narrative_order", "book_percentage"],
      "properties": {
        "narrative_order": { "type": "number" },
        "chronological_order": { "type": ["number", "null"] },
        "logical_level": { "type": ["number", "null"] },
        "book_percentage": { "type": ["number", "null"] }
      }
    },
    "source_sequence": { "type": "number" },
    "statement": { "type": "string" },
    "source_claims": { "type": "array", "items": { "$ref": "#/definitions/NormalizedClaim" } },
    "entities": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "entity_type", "resolved_id"],
        "properties": {
          "name": { "type": "string" },
          "entity_type": { "type": "string" },
          "resolved_id": { "type": ["string", "null"] }
        }
      }
    },
    "concepts": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["book_specific_concept_id", "mapped_canonical_concept_id", "mapping_status"],
        "properties": {
          "book_specific_concept_id": { "type": "string" },
          "mapped_canonical_concept_id": { "type": ["string", "null"] },
          "mapping_status": { "type": "string" }
        }
      }
    },
    "relationships": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["target_source_unit_id", "relationship_type", "relationship_category"],
        "properties": {
          "target_source_unit_id": { "type": "string" },
          "relationship_type": { "type": "string" },
          "relationship_category": {
            "type": "string",
            "enum": ["CAUSAL", "RELATIONAL", "THEMATIC", "CONCEPTUAL", "TEMPORAL", "EVIDENTIARY", "CONTESTED"]
          },
          "details": { "type": "string" }
        }
      }
    },
    "epistemic_status": { "type": "string" },
    "source_voice": {
      "type": "string",
      "enum": [
        "AUTHOR",
        "NARRATOR",
        "FICTIONAL_CHARACTER",
        "HISTORICAL_SUBJECT",
        "BIOGRAPHER",
        "EDITOR",
        "PRIMARY_DOCUMENT_AUTHOR",
        "CONTEMPORARY_WITNESS",
        "OTHER_HISTORICAL_ACTOR",
        "UNKNOWN_AMBIGUOUS"
      ]
    },
    "assertion_modality": {
      "type": "string",
      "enum": [
        "EXPLICIT_SOURCE_ASSERTION",
        "FICTIONAL_CHARACTER_CONVICTION",
        "BIOGRAPHER_INTERPRETIVE_THESIS",
        "CONTEMPORARY_RECORD_WITNESS",
        "BKRS_NORMALIZED_PROJECTION"
      ]
    },
    "source_explicitness": { "type": "string", "enum": ["SOURCE_EXPLICIT", "BKRS_NORMALIZED_PROJECTION"] },
    "confidence": { "type": "string", "enum": ["HIGH", "MEDIUM", "LOW"] },
    "materiality": { "type": "string", "enum": ["CRITICAL", "IMPORTANT", "TEXTURAL", "REDUNDANT"] },
    "temporal": {
      "type": "object",
      "required": ["event_time", "record_time", "source_time"],
      "properties": {
        "event_time": { "type": ["object", "string", "null"] },
        "record_time": { "type": ["object", "string", "null"] },
        "source_time": { "type": ["object", "string", "null"] }
      }
    },
    "provenance": {
      "type": "object",
      "required": ["source_evidence", "source_trace", "original_unit_reference"],
      "properties": {
        "source_evidence": { "type": "array", "items": { "type": "string" } },
        "source_trace": { "type": "string" },
        "original_unit_reference": { "type": "string" }
      }
    },
    "genre_specific_payload_reference": {
      "type": "object",
      "required": ["genre", "payload_pointer"],
      "properties": {
        "genre": { "type": "string" },
        "payload_pointer": { "type": "string" }
      }
    },
    "normalization": {
      "type": "object",
      "required": ["concept_mappings", "entity_mappings", "claim_mappings", "normalization_notes"],
      "properties": {
        "concept_mappings": { "type": "array", "items": { "type": "string" } },
        "entity_mappings": { "type": "array", "items": { "type": "string" } },
        "claim_mappings": { "type": "array", "items": { "type": "string" } },
        "normalization_notes": { "type": "string" }
      }
    }
  }
}
```

---

## 6. Normalization Field Mapping Matrix (All 17 Dimensions)

The adapter follows a deterministic mapping matrix with zero permitted information loss:

| Dimension | Source Field(s) | Normalized Field | Transformation Rule | Information Loss Allowed? |
| :--- | :--- | :--- | :--- | :---: |
| **1. Identity** | `book_id` | `book_id` | Pass-through verbatim | **FALSE** |
| **2. Unit ID** | `unit_id` or `scene_id` | `source_unit_id` | Pass-through verbatim; prefix with `NXU-[BOOK]-` for `normalized_unit_id` | **FALSE** |
| **3. Unit Type** | `unit_type` | `source_unit_type` | Direct string pass-through (`SCENE`, `ARGUMENT_UNIT`, `HISTORICAL_EPISODE`) | **FALSE** |
| **4. Genre** | `genre` | `genre` | Normalized to standard enum | **FALSE** |
| **5. Location** | `source_location` / `chapter` | `source_location` | Normalized into standard object: `{chapter, chapter_title, locator, document_file, element_ids}` | **FALSE** |
| **6. Position** | `structural_position` / `narrative_position` | `structural_position` | Unified into `{narrative_order, chronological_order, logical_level, book_percentage}` | **FALSE** |
| **7. Summary** | `summary_statement` / `what_happens` | `statement` | Preserves full sentence text without summarization or truncation | **FALSE** |
| **8. Epistemic** | `epistemic_status` | `epistemic_status` | Frozen source tag passed through 100% intact (zero reclassification) | **FALSE** |
| **9. Confidence**| `confidence` | `confidence` | Mapped to `HIGH`, `MEDIUM`, or `LOW` | **FALSE** |
| **10. Materiality**| `materiality` / `materiality_reason` | `materiality` / `normalization_notes` | Level passed verbatim; reason stored in normalization notes | **FALSE** |
| **11. Temporal** | `time` / `temporal_anchor` / `dual_timeline` | `temporal` | Unified into `{event_time, record_time, source_time}`; separates event date from publication | **FALSE** |
| **12. Evidence** | `source_evidence` / `quotes` | `provenance.source_evidence` | Verbatim text extracts passed through intact | **FALSE** |
| **13. Provenance**| `source_provenance` | `provenance.source_trace` | Document file path, element ID ranges, note numbers stringified | **FALSE** |
| **14. Entities** | `entities` / `participants` | `entities` | Mapped into `{name, entity_type, resolved_id}`; keeps names intact | **FALSE** |
| **15. Concepts** | `themes` / `motifs` / `core_concept` | `concepts` | Instantiates `BookSpecificConcept` handles with mapping statuses | **FALSE** |
| **16. Relations**| `relationships` / `causal_relationships` | `relationships` | Categorized into `CAUSAL`, `RELATIONAL`, `THEMATIC`, `CONCEPTUAL`, `TEMPORAL`, `EVIDENTIARY`, `CONTESTED` | **FALSE** |
| **17. Payload** | `genre_payload` / `genre_specific_payload` | `genre_specific_payload_reference` | Encapsulated immutable pointer back to source JSON structure | **FALSE** |

---

## 7. Cross-Genre Normalization Rules

The adapter handles the distinct genres of the certified benchmarks through explicit mapping profiles:

```
┌─────────────────────────────────────────────────────────────┐
│              CROSS-GENRE NORMALIZATION PROFILES             │
├─────────────────────┬───────────────────────────────────────┤
│ LITERARY FICTION    │ Profile A: Experiential Narrative     │
│ (Norwegian Wood)    │ Maps scenes, participants, motifs     │
├─────────────────────┼───────────────────────────────────────┤
│ ANALYTICAL NONFICTION│ Profile B: Propositional Argument    │
│ (Psychology of Money)│ Maps thesis claims, evidence, cases  │
├─────────────────────┼───────────────────────────────────────┤
│ HISTORICAL BIOGRAPHY│ Profile C: Forensic Historiography    │
│ (Bhagat Singh)      │ Maps dual timeline, DAGs, disputes    │
└─────────────────────┴───────────────────────────────────────┘
```

### Profile A: Literary Fiction (*Norwegian Wood*)
- **Input:** 36 scenes across 11 chapters.
- **Statement:** Mapped from `what_happens`.
- **Source Voice:** Default is `NARRATOR` (Toru Watanabe). If dialogue asserts a conviction, it is tagged `FICTIONAL_CHARACTER` with the character's name.
- **Assertion Modality:** `FICTIONAL_CHARACTER_CONVICTION` or `NARRATIVE_EXPERIENCE`.
- **Genre Payload Encapsulation:** `emotional_transition`, `character_states_before/after`, `motifs`, and `mundane_texture` are preserved via pointer.

### Profile B: Analytical Nonfiction (*The Psychology of Money*)
- **Input:** 24 argument units across 21 chapters.
- **Statement:** Mapped from `genre_payload.thesis_claim` or `summary_statement`.
- **Source Voice:** `AUTHOR` (Morgan Housel).
- **Assertion Modality:** `EXPLICIT_SOURCE_ASSERTION`.
- **Genre Payload Encapsulation:** `logical_chain`, `primary_evidence`, `quantitative_models`, and `actionable_heuristic` preserved via pointer.

### Profile C: Historical Biography (*Bhagat Singh: A Life in Revolution*)
- **Input:** 78 units across 58 sections.
- **Statement:** Mapped from `summary_statement`.
- **Source Voice:**
  - `HISTORICAL_SUBJECT` for `[PRIMARY_SUBJECT_WRITING]` (Bhagat Singh).
  - `BIOGRAPHER` for `[BIOGRAPHER_THESIS]`.
  - `PRIMARY_DOCUMENT_AUTHOR` for official orders, tribunal judgments, and FIRs.
  - `CONTEMPORARY_WITNESS` for trial approver testimonies and police depositions.
- **Temporal Handling:** Dual timeline strictly populates distinct `event_time`, `record_time`, and `source_time` objects.
- **Contested Accounts:** Segregated into `CONTESTED` relationship blocks.

---

## 8. Voice Taxonomy & Inheritance Invariants

BKRS formalizes ten discrete voice classes to prevent voice attribution contamination:

```
┌─────────────────────────────────────────────────────────────┐
│                 THE 10 CANONICAL VOICE CLASSES              │
├──────────────────────────┬──────────────────────────────────┤
│ 1. AUTHOR                │ Living creator writing analytic prose│
│ 2. NARRATOR              │ Literary persona telling the story │
│ 3. FICTIONAL_CHARACTER   │ Persona within a fictional novel │
│ 4. HISTORICAL_SUBJECT    │ Historical actor under examination│
│ 5. BIOGRAPHER            │ Secondary scholar analyzing subject│
│ 6. EDITOR                │ Translator or critical annotator │
│ 7. PRIMARY_DOCUMENT_AUTH │ Official author of archival decree│
│ 8. CONTEMPORARY_WITNESS  │ Deponent, approver, or bystander │
│ 9. OTHER_HISTORICAL_ACTOR│ Supporting historical figure     │
│ 10. UNKNOWN_AMBIGUOUS    │ Attribution cannot be determined │
└──────────────────────────┴──────────────────────────────────┘
```

### Voice Inheritance Invariants:
1. **The Invariant of Fictional Isolation:** A `FICTIONAL_CHARACTER` statement must **NEVER** normalize into an `AUTHOR` statement. (Nagasawa's words $\neq$ Murakami's worldview).
2. **The Invariant of Historical Subject Supremacy:** A `HISTORICAL_SUBJECT` writing must **NEVER** normalize into a `BIOGRAPHER` thesis, nor vice-versa. (Bhagat Singh's atheist manifesto $\neq$ Juss's legalist thesis).
3. **The Invariant of Archival Provenance:** A `CONTEMPORARY_WITNESS` under police interrogation must **NEVER** normalize into an objective historical fact.

---

## 9. NormalizedClaim Schema

For granular analytical and historical comparisons, core propositions are projected into `NormalizedClaim` objects:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "NormalizedClaim",
  "type": "object",
  "required": [
    "claim_id",
    "source_unit_id",
    "book_id",
    "claimant",
    "proposition",
    "qualification",
    "scope",
    "evidence",
    "epistemic_status",
    "assertion_modality",
    "source_explicitness",
    "provenance",
    "materiality"
  ],
  "properties": {
    "claim_id": { "type": "string", "pattern": "^NC-[A-Z0-9_-]+$" },
    "source_unit_id": { "type": "string" },
    "book_id": { "type": "string" },
    "claimant": { "type": "string" },
    "proposition": { "type": "string" },
    "qualification": { "type": ["string", "null"] },
    "scope": { "type": "string" },
    "evidence": { "type": "array", "items": { "type": "string" } },
    "epistemic_status": { "type": "string" },
    "assertion_modality": { "type": "string" },
    "source_explicitness": {
      "type": "string",
      "enum": ["SOURCE_CLAIM", "PARAPHRASED_SOURCE_CLAIM", "BKRS_NORMALIZED_CLAIM"]
    },
    "provenance": { "type": "string" },
    "materiality": { "type": "string", "enum": ["CRITICAL", "IMPORTANT", "TEXTURAL"] }
  }
}
```

- **`SOURCE_CLAIM`:** An explicit assertion extracted directly from the text using the author's verbatim words.
- **`PARAPHRASED_SOURCE_CLAIM`:** A faithful semantic condensation preserving the author's logical boundaries.
- **`BKRS_NORMALIZED_CLAIM`:** An analytically extracted proposition required for systemic cross-book comparison. Must carry explicit provenance and must never be cited as a direct quote.

---

## 10. Relationship Normalization & Category Preservation

When Book Master relationships enter the normalization layer, they are assigned to one of seven rigid relational categories to prevent category contamination:

```
┌─────────────────────────────────────────────────────────────┐
│             THE 7 RELATIONAL CATEGORIES IN NXU              │
├─────────────────────┬───────────────────────────────────────┤
│ 1. CAUSAL           │ Source documents a mechanism X -> Y   │
│ 2. RELATIONAL       │ Kinship, institutional membership     │
│ 3. THEMATIC         │ Recurring aesthetic or symbolic motif │
│ 4. CONCEPTUAL       │ Logical dependency or qualification   │
│ 5. TEMPORAL         │ Chronological succession (NON-CAUSAL) │
│ 6. EVIDENTIARY      │ Case study or exhibit supporting claim│
│ 7. CONTESTED        │ Contradictory accounts of same event  │
└─────────────────────┴───────────────────────────────────────┘
```

### Conversion Safeguards:
- $\text{TEMPORAL} \centernot\implies \text{CAUSAL}$
- $\text{THEMATIC} \centernot\implies \text{AGREEMENT}$
- $\text{RELATIONAL} \centernot\implies \text{CAUSAL}$
- $\text{SIMILARITY} \centernot\implies \text{EQUIVALENCE}$

---

## 11. Immutability & Reversibility Rules

1. **The Invariant of Reversibility:** Every `NormalizedCrossBookUnit` must be 100% reversible to its originating Book Master unit.
   $$\text{NXU} \longrightarrow \text{book\_id} + \text{source\_unit\_id} \longrightarrow \text{Original Unit JSON}$$
2. **The Orphan Check:** If `source_unit_id` cannot be found in the target Book Master, normalization **fails immediately**. Orphan units are strictly blocked.
3. **The Mutation Check:** SHA-256 hashes of all three `knowledge-units.json` files are recorded before and after adapter execution. If any hash changes, the pipeline aborts and rolls back.

---

## 12. Complete Provenance Rules

Every normalized unit and claim must embed an unbroken audit trail:

$$\text{Normalized Unit} \longrightarrow \text{Source Unit} \longrightarrow \text{Source File Locator} \longrightarrow \text{Ingestion XHTML Element IDs} \longrightarrow \text{Original EPUB Text}$$

- Any synthetic assertion or relationship lacking this complete chain is disqualified from entering the synthesis layer.

---

## 13. Machine Validation Specification (12 Automated Tests)

The normalization adapter implementation must pass 12 automated integrity gates before the normalized dataset can be accepted:

```
┌────────────────────────────────────────────────────────────────────────┐
│               12 MACHINE VALIDATION INTEGRITY GATES                    │
├──────────────┬─────────────────────────────────────────────────────────┤
│ VAL-NORM-01  │ All 138 units (36 NW + 24 PM + 78 BS) projected cleanly │
│ VAL-NORM-02  │ Zero duplicate source_unit_id references                │
│ VAL-NORM-03  │ Orphan Check: All source unit IDs resolve to masters    │
│ VAL-NORM-04  │ Mutation Check: SHA-256 hashes of masters unchanged     │
│ VAL-NORM-05  │ Zero epistemic status mutation (exact string match)     │
│ VAL-NORM-06  │ Zero voice mutation (characters separated from authors) │
│ VAL-NORM-07  │ Zero materiality mutation (Critical/Important/Textural) │
│ VAL-NORM-08  │ Zero temporal substitution (event time != record time)  │
│ VAL-NORM-09  │ Zero provenance loss (locators & quotes intact)         │
│ VAL-NORM-10  │ Zero causal upgrading (causal edges remain isolated)    │
│ VAL-NORM-11  │ Zero competing-account collapse (disputes preserved)    │
│ VAL-NORM-12  │ Zero genre collapse (payload pointers intact)           │
└──────────────┴─────────────────────────────────────────────────────────┘
```

---

## 14. Adversarial Concept Test Cases (8 Benchmark Concepts)

To prove that the Concept Registry prevents concept collapse, eight adversarial terms were audited across the three benchmarks:

| Test ID | Concept Term | Source Expressions & Voices | Target Mapping State | Prohibited Failure Mode |
| :--- | :--- | :--- | :--- | :--- |
| **CT-01** | **"freedom"** | NW: Detachment from grief (`NARRATOR`)<br>PM: Schedule autonomy via wealth (`AUTHOR`)<br>BS: Anti-colonial socialist emancipation (`HISTORICAL_SUBJECT`) | `SAME_LABEL_DIFFERENT_CONCEPT` | Collapsing all three into a generic "human freedom" node. |
| **CT-02** | **"risk"** | PM: Portfolio volatility & statistical ruin (`AUTHOR`)<br>BS: Execution on British gallows & torture (`HISTORICAL_SUBJECT`) | `RELATED_NON_EQUIVALENT` | Treating capital market volatility as equivalent to death on the gallows. |
| **CT-03** | **"death"** | NW: Private melancholia & existential trauma (`NARRATOR`)<br>BS: Public anti-colonial martyrdom (`HISTORICAL_SUBJECT`) | `DISTINCT_FRAME` | Merging fictional interior suicide with political hunger strikes. |
| **CT-04** | **"wealth"** | PM: Unspent capital options providing freedom (`AUTHOR`)<br>BS: Bourgeois surplus value extracted from workers (`HISTORICAL_SUBJECT`) | `DIALECTICAL_TENSION` | Assuming both works share a neutral capitalist definition of wealth. |
| **CT-05** | **"sacrifice"**| PM: Paying the psychological fee of market volatility (`AUTHOR`)<br>BS: Giving one's physical life to spark mass revolt (`HISTORICAL_SUBJECT`) | `ANALOGICAL_RELATION` | Conflating market emotional endurance with physical martyrdom. |
| **CT-06** | **"individual choice"**| NW: Nagasawa's aristocratic self-determination (`FICTIONAL_CHARACTER`)<br>PM: Financial behaviors based on personal history (`AUTHOR`) | `RELATED_NON_EQUIVALENT` | Citing Nagasawa's dialogue as an authorial counterargument to Housel. |
| **CT-07** | **"meaning"** | NW: Lingering ambiguity after the loss of youth (`NARRATOR`)<br>BS: Rationalist commitment to historical materialism (`HISTORICAL_SUBJECT`) | `DISTINCT_FRAME` | Merging literary existential ambiguity with Marxist revolutionary science. |
| **CT-08** | **"uncertainty"**| PM: Room for error in financial planning (`AUTHOR`)<br>NW: Emotional opacity of traumatized human beings (`NARRATOR`) | `ANALOGICAL_RELATION` | Treating emotional interiority as an empirical risk parameter. |

---

## 15. Implementation Constraints

1. **Read-Only Adapter Execution:** The normalization adapter script (`src/bkrs/normalize_cross_book.js`) must open Book Master files in read-only mode and project into memory or intermediate audit files without modifying the repository's distillation folders.
2. **Schema Gating:** No `NormalizedCrossBookUnit` may be emitted if it fails validation against `NormalizedCrossBookUnit.json`.
3. **No Synthesis Generation:** The adapter must strictly stop after normalization projection. It must not generate cross-book links, synthesis units, or comparative matrices.

---

## 16. Final Readiness Determination

### **Readiness Verdict: SCHEMAS FROZEN — READY FOR ADAPTER IMPLEMENTATION.**

- **Specification Status:** The machine-level schemas for `CanonicalConcept`, `BookSpecificConcept`, `ConceptRelation`, `NormalizedCrossBookUnit`, and `NormalizedClaim` are fully specified and frozen.
- **Freeze Compliance:** Zero Book Master assets were modified. No synthetic claims or consensus conclusions were generated.
- **Cleared for Next Step:** Staging the read-only normalization adapter engine in Step 5.2.

**Milestone 5.1 is formally certified and closed.**
