# BKRS Historical & Biographical Benchmark Protocol
## Pre-Scale Forensic Standard for History, Biography & Documentary Corpora

**Document**: `HISTORICAL_BIOGRAPHICAL_BENCHMARK_PROTOCOL.md`  
**System**: Intellectualist / Book Knowledge Reconstruction System (BKRS v1.0)  
**Standard**: Milestone 3 Gateway Certification Protocol  
**Status**: Canonical Architectural Standard  
**Mandate**: This protocol defines the exact criteria that must be satisfied by the first historical/biographical Book Master benchmark before the BKRS platform is permitted to advance to Milestone 4 (Multi-Source Cross-Book Synthesis).

---

# 1. THE FOUNDATIONAL MANDATE

History and biography present the highest epistemic risk in knowledge reconstruction. Unlike literary fiction (where the author's text is the closed universe) or analytical non-fiction (where an author argues a unified thesis), historical and biographical texts operate across contested reality.

A biographer combines:
1. Primary documentary records (letters, trial transcripts, police FIRs, diary notes).
2. Contemporary eyewitness recollections (memoirs, comrades, adversaries).
3. Structural socio-political context (laws, economic conditions, colonial archives).
4. The biographer's own psychological conjectures, interpretive hypotheses, and political framing.

### The Fatal Failure Mode:
> If an AI system ingests a biography and produces notes stating *"Subject X believed Y and did Z because of W,"* it has committed catastrophic epistemic flattening. It has silently collapsed the biographer's modern hypothesis into the historical subject's verified reality.

### The Gateway Criterion:
Before BKRS may synthesize multi-book corpora (such as a 10-book Bhagat Singh library), it must empirically prove in a single benchmark that it can rigorously segregate, preserve, and cross-reference:
- **WHAT THE SOURCE DOCUMENTS** (Empirical archival baseline)
- **WHAT THE AUTHOR CLAIMS** (Biographer's thesis)
- **WHAT THE SUBJECT/PERSON SAID** (Verifiable primary utterance)
- **WHAT THE AUTHOR INTERPRETS** (Psychological / retroactive conjecture)
- **WHAT BKRS INFERENCES MAY SUGGEST** (Analytical system synthesis)

---

# 2. THE 20 CONSTITUTIONAL SPECIFICATIONS FOR HISTORY & BIOGRAPHY

## 1. Historical / Biographical Primary Unit: `HISTORICAL_EPISODE`
The fundamental unit of reconstruction is the `HISTORICAL_EPISODE` (or `DOCUMENTARY_UNIT`).
A chapter is an arbitrary publishing container; an episode is a bounded historical node consisting of:
- **Chronological Anchor**: Precise or estimated temporal placement.
- **Geographic / Institutional Setting**: Physical venue (e.g., Lahore Central Jail, Feroz Shah Kotla, Kakori railway station).
- **Historical Actors**: Specific agents, institutions, organizations, and legal bodies present.
- **The Documented Action**: Physical occurrences verified by records.
- **Direct Subject Utterances**: Verbatim recorded statements, letters, or declarations made by the subject.
- **Primary Evidentiary Base**: Specific archival documents cited.
- **Secondary Authorial Framing**: The biographer’s interpretation and commentary.
- **Historiographical Status**: Uncontested fact, disputed testimony, or revisionist claim.

## 2. Source Structure Representation
Biographies and historical monographs are layered artifacts. The reconstruction engine must expose:
- **Primary Apparatus**: Narrative chapters, archival appendices, photostat plates, translated court testimonies.
- **Secondary Apparatus**: Biographer preface, footnotes, bibliographic essays, historiographical endnotes.
- **Document Provenance**: Identifying whether the source is a primary collection (e.g., *Jail Notebook and Other Writings*), a scholarly biography (e.g., Satvinder Juss, S. Irfan Habib), an eyewitness memoir (e.g., Sohan Singh Josh, Shiv Verma), or an official legal record (e.g., A.G. Noorani's *Trial of Bhagat Singh*).

## 3. Chronological Representation: Dual-Timeline Architecture
History requires decoupling the event's occurrence from the source's narrative revelation:
1. **The Objective Chronological Timeline (Event Time)**: The actual sequential progression of historical events from inception to aftermath (e.g., 1907 birth &rarr; 1919 Jallianwala Bagh &rarr; 1928 Saunders shooting &rarr; 1929 Assembly bomb &rarr; March 23, 1931 execution).
2. **The Narrative / Archival Timeline (Source Journey Time)**: The order in which the author/biographer exposes documents, introduces flashbacks, analyzes retrospective memoirs, or unearths suppressed police files decades later.

## 4. Event Representation & Granularity Hierarchy
Events must be mapped at three distinct resolutions without losing micro-texture:
- **Macro-Events**: Epochal movements and multi-year legal sagas (e.g., The Lahore Conspiracy Case, The Simon Commission Protests).
- **Meso-Events**: Distinct operational actions and turning points (e.g., The assassination of J.P. Saunders, The Delhi Central Assembly Bombing, The 116-day hunger strike).
- **Micro-Events**: Granular human moments establishing forensic realism (e.g., The color of leaflets thrown from the gallery, the exact brand of cigarettes shared in hiding, Jaigopal's signal failure on the motorcycle, Bhagat Singh reading Lenin's *State and Revolution* minutes before walking to the scaffold).

## 5. Person & Entity Representation
Entities (persons, revolutionary committees, political parties, British colonial bodies) are first-class knowledge nodes:
- **Entity Identity Record**: Normalized name, aliases (e.g., "Ranjit", "Balraj", "Harendra"), dates of birth/death, formal affiliations (HSRA, Naujawan Bharat Sabha, Kirti Kisan Party).
- **Separation of Entity from Representation**: The historical entity is preserved as an objective node; the source's subjective portrayal of that person is preserved as an authorial claim.

## 6. Three-Tier Context Representation
No historical episode occurs in a vacuum. Every unit must encode:
- **Micro-Context**: Immediate room/street conditions, physical exhaustion, interpersonal tensions among comrades.
- **Meso-Context**: Operational and organizational realities—police informers, CID surveillance, weapons shortages, legal procedures under the Criminal Procedure Code.
- **Macro-Context**: Global and national movements—the abrupt withdrawal of the Non-Cooperation Movement in 1922, the rise of the Bolshevik Revolution, international anti-imperialist solidarity (League Against Imperialism, Brussels).

## 7. Evidence Representation Taxonomy
Every claim within a content unit must carry its evidentiary foundation:
- `[PRIMARY ARCHIVAL DOCUMENT]`: Government gazettes, trial transcripts, police First Information Reports (FIRs), intelligence CID reports.
- `[SUBJECT WRITING]`: The subject's verifiable letters, pamphlets, essays, or signed statements.
- `[CONTEMPORARY EYEWITNESS]`: Deposition, confession, or statement recorded immediately around the event.
- `[RETROSPECTIVE RECOLLECTION]`: Memoir or oral history recorded decades later (flagged for memory decay or post-facto rationalization).
- `[HISTORIOGRAPHICAL CONJECTURE]`: Deductions made by the author where direct evidence is absent.

## 8. Source Attribution & Context of Utterance
When attributing words to a historical actor, the system must record the coercive and legal context of the utterance:
- Statement made in court to broadcast ideology to the nation.
- Statement made under severe CID police torture in Lahore Fort.
- Confidential letter written to an intimate comrade.
- Public pamphlet distributed anonymously to students.
These cannot be treated as equivalent expressions of belief.

## 9. Primary vs. Secondary Source Demarcation
- **Primary Source**: What the historical subject documents, writes, or states.
- **Secondary Source**: What a historian, biographer, or later commentator asserts about the subject.
- **The Non-Masquerade Rule**: Under no circumstance may a secondary historian's interpretive lens (e.g., claiming Bhagat Singh had an unconscious death wish) be stated as Bhagat Singh's own internal motivation.

## 10. Conflicting Historical Claims Engine
When accounts disagree, the system must preserve the conflict rather than homogenize it:
```json
{
  "contested_issue": "Identity of Saunders' primary shooter",
  "source_claim_a": {
    "source": "Rajguru's deposition / Sukhdev's account",
    "assertion": "Rajguru fired the initial fatal shot into Saunders' chest; Bhagat Singh fired subsequent shots to ensure death."
  },
  "source_claim_b": {
    "source": "British Police FIR / Post-Mortem Surgeon Report",
    "assertion": "Multiple bullet wounds from .455 Webley and .32 automatic pistol."
  },
  "historiographical_status": "PARTIALLY_CONVERGENT",
  "system_synthesis": "Agreement on Bhagat Singh and Rajguru's presence; variation on exact shot sequence."
}
```

## 11. Uncertainty Taxonomy
The system must explicitly categorize degrees of historical certainty:
1. `ESTABLISHED FACT`: Corroborated by independent primary records from opposing sides (e.g., execution occurred at 7:30 PM on March 23, 1931).
2. `PROBABLE INFERENCE`: Strongly supported by circumstantial evidence but lacking direct written confession.
3. `CONTESTED TESTIMONY`: Contradictory statements given by accomplices or approvers under pardon (e.g., Phanindra Nath Ghosh's trial testimony).
4. `DOCUMENTARY SILENCE / ABSENCE`: Records intentionally destroyed by British authorities or missing from the National Archives.

## 12. Author Interpretation vs. Historical Evidence
A hard delimiter must segregate the biographer's narrative prose:
- Evidence: *"In his final letter to Sukhdev, Bhagat Singh wrote: 'I am full of ambition and hope and of full charm of life, but I can renounce all at the time of need...'"* &rarr; `[PRIMARY SOURCE FACT]`
- Biographer Interpretation: *"This letter proves that Bhagat Singh suffered from an inner melancholy and romanticized martyrdom."* &rarr; `[BIOGRAPHER INTERPRETATION]`

## 13. Causal Mechanics & Multi-Step Historical Chains
Historical causation must be mapped as explicit, multi-link causal chains:
- **Root Structural Cause**: Colonial exploitation and suppression of constitutional protest.
- **Trigger Event**: James A. Scott ordering the brutal lathi-charge on Lala Lajpat Rai at Lahore Railway Station (October 30, 1928), causing his death.
- **Ideological Decision**: HSRA meeting deciding that national honor requires the assassination of Scott.
- **Operational Execution & Error**: Saunders mistaken for Scott outside police headquarters.
- **Downstream Consequence**: Pan-Indian manhunt, radicalization of youth, and shift to legislative bombing strategy.

## 14. Relationship Trajectories
Tracking the evolving political, tactical, and emotional bonds between historical actors:
- **Bhagat Singh & Sukhdev**: From early National College debates &rarr; HSRA organizational division of labor (Sukhdev as ruthless organizer, Bhagat as intellectual ideologue) &rarr; Jail disputes over hunger strikes &rarr; Complete reconciliation and joint execution.
- **Bhagat Singh & Chandrashekhar Azad**: Tactical symbiosis between the rural armed revolutionary and the urban Marxist ideologue.
- **Bhagat Singh & M.K. Gandhi**: Philosophical dialectic between revolutionary violence as an educational catalyst versus satyagraha/ahimsa as absolute moral principle.

## 15. Cross-Event Historical Dependencies
Events are nodes in a Directed Acyclic Graph (DAG):
- The Delhi Assembly Bombing (April 8, 1929) is causally dependent on:
  1. The passage of the Public Safety Bill and Trade Disputes Bill.
  2. The HSRA's deliberate decision to use courtrooms as political platforms (copying Russian revolutionary trial tactics).
  3. The decision to deliberately not escape and face trial.

## 16. Four-Level Materiality Taxonomy for History
- **Level 1: CRITICAL**: Turning points that redirect history or formulate foundational ideology (e.g., *Why I Am an Atheist*, Assembly Bomb statement, Saunders execution).
- **Level 2: IMPORTANT**: Key tactical decisions, crucial trial cross-examinations, major party resolutions.
- **Level 3: TEXTURAL**: Mundane realism establishing life in colonial India (e.g., hiding in a Calcutta boarding house with a baby to evade police, shaving his beard, books read in cell #14).
- **Level 4: REDUNDANT**: Repetitive procedural court adjournments, standard boilerplate jail regulations.

## 17. Epistemic Demarcation System (8 Mandatory Tags)
1. `[SOURCE FACT]`: Uncontested empirical reality documented across records.
2. `[PRIMARY WRITING]`: The verbatim authored text of the historical subject.
3. `[SUBJECT DECLARATION]`: Words spoken by the subject in public, recorded contemporaneously.
4. `[CONTEMPORARY RECORD]`: Intelligence files, court minutes, medical bulletins.
5. `[APPROVER / EYEWITNESS TESTIMONY]`: Statements given by participants (marked with legal incentives/coercion).
6. `[BIOGRAPHER THESIS]`: The author's central historical argument.
7. `[BIOGRAPHER CONJECTURE]`: Speculative psychological or emotional claims by the author.
8. `[HISTORIOGRAPHICAL DISPUTE]`: Areas where major historians formally disagree.

## 18. Source Traceability
Every unit must provide backwards traceability:
`Subject Claim → Historical Episode Unit → Chapter & Page in Source → Archive / Primary Document Citation`.

## 19. Three Reader Views for History & Biography
- **View A: The Chronological & Documentary Journey**: Sequential historical narrative preserving the revelation of evidence and chronological tension.
- **View B: The Historiographical & Relational Map**: Ideological development trees, entity-relationship matrices, timeline comparison graphs, and evidentiary conflict registers.
- **View C: The Ideological Dialectic & Historical Crucible**: Primary ideological essays, courtroom trial speeches, forensic counterfactual audits, and active recall drills.

## 20. Independent Validation Methodology
Validation must be executed via an independent, hidden source-derived test suite containing at least 50 questions that aggressively audit epistemic boundaries.

---

# 3. THE 50-QUESTION FORENSIC VALIDATION PROTOCOL

The eventual benchmark Book Master must be audited against an independent test suite of **50 source-derived forensic questions**. 

To prevent epistemic contamination, the questions are categorized into **7 rigorous forensic dimensions**:

```
                              THE 50 FORENSIC INQUIRIES
┌──────────────────────────────────────────────┬──────────────────────────────┐
│ Forensic Dimension                           │ Required Question Allocation │
├──────────────────────────────────────────────┼──────────────────────────────┤
│ 1. Macro-Historical Structure & Chronology   │ 7 Questions (Q01 – Q07)      │
│ 2. Primary Text & Verbatim Subject Utterance │ 8 Questions (Q08 – Q15)      │
│ 3. Micro-Texture & Evidentiary Forensics     │ 8 Questions (Q16 – Q23)      │
│ 4. Multi-Step Causal Historical Mechanics    │ 8 Questions (Q24 – Q31)      │
│ 5. Demarcation: Author vs. Subject vs. Fact  │ 8 Questions (Q32 – Q39)      │
│ 6. Historiographical Disputes & Conflicts    │ 6 Questions (Q40 – Q45)      │
│ 7. Cross-Event Dependencies & Trajectories   │ 5 Questions (Q46 – Q50)      │
└──────────────────────────────────────────────┴──────────────────────────────┘
```

---

## Dimension 1: Macro-Historical Structure & Chronology (7 Questions)
*Tests whether the macro-sequence, absolute dates, and chronological pacing are preserved without temporal distortion.*

- **[ARCHETYPE-01] Epochal Date Verification**: Exact calendar dates, times, and day of the week for primary historical flashpoints.
- **[ARCHETYPE-02] Sequence Pacing**: The precise interval between catalyst events and retaliatory actions.
- **[ARCHETYPE-03] Spatial-Temporal Tracking**: The physical movement of historical actors across cities and borders during fugitive or organizational phases.
- **[ARCHETYPE-04] Legal Timeline Progression**: The formal stages of legal proceedings from FIR filing to Special Tribunal ordinance creation and final judgment.
- **[ARCHETYPE-05] Prison & Hunger Strike Duration**: Exact dates, durations, and physical phases of incarceration and hunger strikes.
- **[ARCHETYPE-06] Structural Turning Points**: The precise chronological juncture where organizations rebranded or transformed ideology.
- **[ARCHETYPE-07] Narrative Flashback vs. Historical Sequence**: Distinguishing when the author discusses an event retrospectively versus when it physically occurred.

---

## Dimension 2: Primary Text & Direct Subject Utterance Fidelity (8 Questions)
*Tests whether the subject's own authentic voice, specific arguments, and written formulations are preserved without modernization or generic summarization.*

- **[ARCHETYPE-08] Core Philosophical Thesis**: The exact conceptual formulation of the subject’s definitive written work (e.g., *Why I Am an Atheist*).
- **[ARCHETYPE-09] Verbatim Trial Declarations**: Exact phrases and statements uttered before colonial magistrates or tribunals.
- **[ARCHETYPE-10] Definitions of Revolutionary Action**: How the subject explicitly defined terms like "revolution", "terror", and "violence" in their own manifestos.
- **[ARCHETYPE-11] Epistemic Distinctions in Private Letters**: Explicit arguments made in private correspondence to comrades regarding personal ethics, love, and sacrifice.
- **[ARCHETYPE-12] Reading Notes & Intellectual Influences**: Specific foreign thinkers, authors, and books recorded in prison notebooks (e.g., Marx, Engels, Lenin, Kropotkin, Bakunin, Bertrand Russell, Upton Sinclair).
- **[ARCHETYPE-13] Ideological Rebuttals**: The subject's direct written counters to religious, reformist, or constitutional arguments.
- **[ARCHETYPE-14] Courtroom Leaflet Text**: Verbatim excerpts from underground manifestos and pamphlets distributed at event sites.
- **[ARCHETYPE-15] Final Testament / Scaffold Utterance**: Verifiable words spoken or written in the final 48 hours of life.

---

## Dimension 3: Micro-Texture & Evidentiary Forensics (8 Questions)
*Tests whether ordinary, somatic, and procedural realism is preserved to prevent analytical bloodlessness.*

- **[ARCHETYPE-16] Disguise & Physical Transformation**: Concrete details of physical alterations used to evade detection (haircuts, felt hats, Western attire).
- **[ARCHETYPE-17] Operational Artifacts**: Exact makes of firearms, caliber of ammunition, types of chemicals used in bomb factories.
- **[ARCHETYPE-18] The Forensic Physical Scene**: Micro-details of the physical environment during major actions (e.g., smoke density, placement of leaflets, direction of escape).
- **[ARCHETYPE-19] Daily Prison Realism**: Specific somatic conditions of jail cells—dimensions, food rations, hygiene, medical force-feeding mechanics (nasal rubber tubes, milk, eggs).
- **[ARCHETYPE-20] Financial & Material Scarcity**: Precise rupee amounts, debt obligations, and hunger endured by the cadre during underground operations.
- **[ARCHETYPE-21] Code Names & Clandestine Communication**: Exact aliases, dead drops, and couriers used by the network.
- **[ARCHETYPE-22] Police Surveillance Methods**: Specific CID techniques, tailing reports, and informant payment records.
- **[ARCHETYPE-23] Eyewitness Somatic Reactions**: Physical behavior of bystanders, magistrates, and police officers during courtroom confrontations.

---

## Dimension 4: Multi-Step Causal Historical Mechanics (8 Questions)
*Tests whether the causal links between events are documented as rigorous historical mechanisms rather than dramatic coincidences.*

- **[ARCHETYPE-24] Retaliatory Causal Chain**: The step-by-step progression connecting state violence &rarr; committee decision &rarr; tactical planning &rarr; operational execution.
- **[ARCHETYPE-25] The Mechanics of Error**: The exact breakdown in communications or recognition that led to tactical divergences (e.g., misidentification of targets).
- **[ARCHETYPE-26] The Strategic Function of Martyrdom**: The political logic explaining why actors chose voluntary capture over flight.
- **[ARCHETYPE-27] The Legal Platform Strategy**: How courtroom procedures were systematically weaponized to circumvent colonial press censorship.
- **[ARCHETYPE-28] Hunger Strike Causal Mechanics**: How the physical suffering of prisoners produced pan-Indian public mobilization and forced colonial jail committees to negotiate.
- **[ARCHETYPE-29] The Approver Dynamic**: The causal pressures (torture, isolation, financial promises, familial blackmail) that turned comrades into state approvers.
- **[ARCHETYPE-30] Institutional Colonial Reaction**: Why the colonial executive issued extraordinary legal instruments (e.g., Lahore Conspiracy Case Ordinance No. III of 1930) to bypass ordinary trial procedures.
- **[ARCHETYPE-31] Post-Execution Shockwaves**: How the executions caused immediate political fallout within the mainstream national movement (e.g., Karachi Congress session tensions).

---

## Dimension 5: Epistemic Demarcation — Author vs. Subject vs. Fact (8 Questions)
*The supreme benchmark test: audits whether the Book Master cleanly isolates the biographer's interpretations from historical facts.*

- **[ARCHETYPE-32] Subject Utterance vs. Biographer Paraphrase**: Identifying where the author modernizes or softens the subject's radical language.
- **[ARCHETYPE-33] Source Fact vs. Biographer Psychological Conjecture**: Testing whether the author's speculation about the subject's internal emotional state is quarantined as interpretation.
- **[ARCHETYPE-34] Eyewitness Memory vs. Archival Verification**: Auditing discrepancies between a comrade's memoir written 40 years later and the contemporaneous police diary.
- **[ARCHETYPE-35] Subject Belief vs. Objective Reality**: Demarcating what the subject believed to be true at the time versus what subsequent historical documentation revealed.
- **[ARCHETYPE-36] Biographer Ideological Bias**: Isolating where the author imposes modern political or moral frameworks (Marxist, nationalist, liberal-constitutional) onto the historical subject.
- **[ARCHETYPE-37] Approver Testimony Reliability**: Ensuring that statements made by approvers to save their own lives are never reported as undisputed historical facts.
- **[ARCHETYPE-38] Official Colonial Record Bias**: Exposing where colonial police files distort revolutionary motives as mere criminality or psychiatric derangement.
- **[ARCHETYPE-39] Quarantining Systemic Inference**: Ensuring that deductions made by the BKRS platform itself are explicitly tagged as `[SYSTEM SYNTHESIS]`.

---

## Dimension 6: Historiographical Disputes & Conflicting Evidence (6 Questions)
*Tests whether the system preserves unresolved scholarly debates without manufacturing artificial consensus.*

- **[ARCHETYPE-40] Disputed Conversations**: Divergent accounts of critical meetings between major historical leaders.
- **[ARCHETYPE-41] The Gandhi Intervention Debate**: Documenting conflicting historical interpretations regarding the extent, timing, and sincerity of Mahatma Gandhi's efforts to commute the death sentences during the Irwin negotiations.
- **[ARCHETYPE-42] Gunfire Ballistics Controversy**: Discrepancies between official autopsy reports, trial testimonies, and revolutionary claims regarding weapons fired.
- **[ARCHETYPE-43] The Cremation & Disposal Secrecy**: Conflicting reports regarding the nocturnal cremation of bodies on the banks of the Sutlej River at Ganda Singh Wala.
- **[ARCHETYPE-44] Ideological Maturation Divergence**: Differing historiographical views on whether the subject was a committed Marxist, an anarcho-syndicalist, or an eclectic radical at the time of death.
- **[ARCHETYPE-45] Secret Police Dossier Reliability**: Debates between historians on the authenticity and veracity of leaked intelligence summaries.

---

## Dimension 7: Cross-Event Dependencies & Relational Trajectories (5 Questions)
*Tests whether long-term interpersonal and ideological trajectories are maintained across disparate chapters.*

- **[ARCHETYPE-46] Comradeship Under Pressure**: How relationships between co-accused evolved from outside political work to shared death row confinement.
- **[ARCHETYPE-47] Ideological Rupture with Mentors**: The step-by-step intellectual break between young radicals and elder moderate/constitutional leadership.
- **[ARCHETYPE-48] Tactical Reversal Dependencies**: How the failure or fallout of an earlier action directly dictated the design of a subsequent action.
- **[ARCHETYPE-49] Generational Legacy Trajectory**: How the subject's death altered the organizational strategy of surviving revolutionaries.
- **[ARCHETYPE-50] The Posthumous Myth vs. Historical Reality**: Tracking how subsequent political entities distorted or selective quoted the subject's writings for contemporary partisan utility.

---

# 4. BENCHMARK PASS / FAIL CRITERIA

To achieve **Milestone 3 Certification**, the historical/biographical Book Master must undergo automated and forensic audit:

| Metric | Minimum Passing Threshold | Mandatory Condition |
| :--- | :--- | :--- |
| **Overall Forensic Preservation Score** | &ge; 90.0% | Calculated across all 50 questions |
| **Dimension 5 Demarcation Score** | **100.0%** | **Zero tolerance for confusing author speculation with primary source fact** |
| **Dimension 2 Primary Utterance Score** | &ge; 95.0% | Authentic primary quotes preserved without paraphrase |
| **Conflicting Claims Preservation** | 100.0% | All documented historiographical conflicts preserved |
| **Traceability Backlink Audit** | 100.0% | Every unit points to chapter, page, and archival source |

---

# 5. IMMEDIATE SYSTEM STATE & MANDATE

1. **Protocol Formally Enacted**: This protocol is the binding law for Milestone 3.
2. **Reconstruction Paused**: No historical book will be processed until the target volume is formally chosen and its source text loaded.
3. **Architecture Intact**: The existing fiction (*Norwegian Wood*) and non-fiction (*The Psychology of Money*) implementations remain frozen and validated.
4. **No Multi-Book Synthesis Yet**: Multi-source synthesis (Milestone 4) remains strictly prohibited until this protocol is satisfied by an individual historical Book Master.
