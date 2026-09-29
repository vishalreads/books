const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'accurate-predictive-methodology-taneja');
fs.mkdirSync(targetDir, { recursive: true });

const knowledgeUnits = [
  {
    id: "APM-U01",
    title: "Epistemological Architecture: Nirayana Bhava Chalit, Cuspal Sub-Lords, and the Three-Tier Signification Matrix",
    chapter: "Chapters 1 & 2: Characteristics of Planets, Houses & Signs and Rules of Nadi Astrology",
    summary: "Establishes the foundational scientific epistemology of Nadi / KP astrology. Demonstrates why equal-house and traditional Rashi charts fail predictive precision, mandating the Nirayana Bhava Chalit (Placidus house cusps overlaid on the Sidereal Zodiac). Details the three-tier signification matrix (Planet -> Nakshatra Lord -> Sub-Lord) where Sub-Lord is hierarchically supreme, and defines the Cuspal Sub-Lord (CSL) as the unalterable gatekeeper of natal destiny.",
    sourceQuote: "According to Nadi Astrology, Sub lord is stronger than the Nakshatra Lord & in the same sequence Nakshatra Lord is stronger than the Planet... Starting degree of the house is called the Cusp. The Sub lord at the Cuspal degree is called the Cuspal Sub lord. The strength of the House is drawn from the strength of the Cuspal Sub Lord.",
    keyConcepts: [
      "Nirayana Bhava Chalit (Placidus cusps on Sidereal Zodiac)",
      "Three-Tier Planetary Coordinate Hierarchy (Sub-Lord > Nakshatra Lord > Planet)",
      "Cuspal Sub-Lord (CSL) as Natal Gatekeeper",
      "Vimshottari Dasa Dynamics: Status (Dasa) vs Gain/Loss (Bhukti) vs Timing Trigger (Antar)",
      "Nodal Coordinates Matrix for Rahu and Ketu"
    ]
  },
  {
    id: "APM-U02",
    title: "The Law of the Penultimate House: The 12th House Negation Mechanics and Multi-House Clustering",
    chapter: "Chapter 2: Rules of Nadi Astrology",
    summary: "Formulates Rule 1 of Nadi Astrology: the 12th house relative to any reference house systematically destroys, nullifies, or mars the significations of that house. Explains why a single isolated house never produces an event in human life, requiring specific multi-house clusters (facilitator houses vs negation houses). Outlines the vital exceptions where the 12th relative house is constructive (such as 10th to 11th in commercial trade, and 4th to 5th in structured academic schooling).",
    sourceQuote: "Rule - 1: 12th house to every house mars the significance of that house. 12th from Ascendant is the 12th House... 12th from 10th i.e. 9th will separate one from the job & 12th from 7th i.e. 6th will separate from the marital home & may lead to divorce... Single House does not give any result. Few Houses join together to fructify an event.",
    keyConcepts: [
      "The Law of the 12th Negating House (Penultimate House Destruction)",
      "Systemic Negation Map (1 from 2, 3 from 4, 5 from 6, 6 from 7, 8 from 9, 9 from 10, 10 from 11)",
      "Exceptions to Negation (10th to 11th in Business, 4th to 5th in Formal Education)",
      "Principle of House Clustering (Single House Inefficacy)",
      "Harmonic Reinforcement (2nd House Enhancing the Penultimate)"
    ]
  },
  {
    id: "APM-U03",
    title: "Educational Attainment: Cognitive Architecture, Exam Grading, and Academic Disciplines",
    chapter: "Chapter 3: Education",
    summary: "Reconstructs the Nadi predictive matrix for academic success, intellect, and competitive examinations. Defines the primary positive houses (4th for formal curriculum, 9th for higher universities, 11th for completion and distinction) versus intellect houses (5th). Maps exact house groupings to modern examination grading systems (A, B, C, D grades), details the precise combinations for academic failures, compartments, and breaks (6-8-12 clusters), and delineates technical, medical, scientific, and artistic specialization signatures.",
    sourceQuote: "In line with the modern day education the following combinations in the DBA planets give the respective grades: 4, 9, 11 ('A' grade or maximum marks); 4, 11 ('B' grade or above average); 5, 11 (equal to 'B' grade but most intelligent child); 4, 5, 9 ('C' grade or average); 2, 4, 5, 9 scattered ('D' grade or low). When 6, 8, 12 gets connected... it results into compartment.",
    keyConcepts: [
      "Core Academic Trinity: Houses 4, 9, and 11",
      "Cognitive Distinction: 5th House (Raw Intellect/Wisdom) vs 4th House (Institutional Syllabi)",
      "Quantitative Grade Predictor Matrix (A, B, C, D Grades)",
      "Academic Obstacles, Failures, and Compartments (6, 8, 12 Interventions)",
      "Disciplinary Planetary Signifiers (Mercury for Analytics, Jupiter for Law/Philosophy, Mars/Saturn for Engineering)"
    ]
  },
  {
    id: "APM-U04",
    title: "Litigation, Imprisonment, and Conflict Resolution: Legal Jurisprudence in the Horoscope",
    chapter: "Chapter 4: Litigation",
    summary: "Details the predictive mechanics of civil, criminal, and financial disputes. Identifies the litigation triad: 6th (dispute/adversary, being 12th to the 7th house opponent), 8th (humiliation, distress, mental agony), and 12th (confinement, loss, legal expense). Establishes the winning hierarchy (6-11 > 10-11 > 6-10 > 1-6) versus out-of-court compromises (5-9 cluster). Explains the exact four-house formula for arrest and incarceration (2-3-8-12) and differentiates the chart of a convicted criminal from a judge, lawyer, or prison warden.",
    sourceQuote: "Winning in litigation: When the combination of 6, 11 appears in the relevant DBA subsequently then the native wins in the litigation... 6, 11 is stronger than 10, 11 whereas 10, 11 is stronger than 6, 10 & 6, 10 is stronger than 1, 6... Native will get job in Jail if 10, 11 is signified in the DBA with the combination of arrest or imprisonment i.e. 2, 3, 8, 12.",
    keyConcepts: [
      "The Litigation Triad: Houses 6, 8, and 12",
      "Hierarchy of Judicial Victory (6-11, 10-11, 6-10, 1-6)",
      "Out-of-Court Compromise & Settlement Mechanics (Houses 5 and 9)",
      "Criminal Incarceration & Arrest Cluster (2-3-8-12)",
      "Role Differentiation: Criminal vs Advocate vs Prison Warden"
    ]
  },
  {
    id: "APM-U05",
    title: "Real Estate and Vehicular Acquisitions: Fixed Assets, Mortgages, and Disputed Properties",
    chapter: "Chapter 5: Property & Vehicle",
    summary: "Formalizes the predictive formulas governing immovable property, land acquisition, construction, vehicles, and conveyance. Distinguishes direct outright acquisition (4-11-12 with Mars or Saturn) from debt-financed bank mortgages (4-6-11-12), ancestral inheritance (4-8-11 with zero 12th house outlay), and joint-name purchases (3-4-11-12). Outlines property loss, disputes, and distress sales (3-5-10-12 and 3-6-8-12), as well as vehicular purchases (4-11-12 with Venus) and transport accidents.",
    sourceQuote: "Native purchases a property when the DBA lords signify the combination of 4, 11, 12. Any of the DBA lord should be Mars or Saturn... If the property is acquired through legacy the 8th house is repeated with 4, 11 houses. Now one thing should be carefully noted here that the involvement of 12th house will not be there since no expense is made by the native.",
    keyConcepts: [
      "Asset Acquisition Blueprint: 4-11-12 with Mars/Saturn",
      "Mortgage and Bank Financing: 4-6-11-12",
      "Unearned Legacy & Inheritance: 4-8-11 (Absence of House 12)",
      "Joint-Name Ownership Constraints: 3-4-11-12",
      "Property Disposal vs Distress Loss (3-5-10-12 vs 3-6-8-12)"
    ]
  },
  {
    id: "APM-U06",
    title: "Medical Astrology: Pathological Combinations, Surgery, Chronic Disease, and Healing Gates",
    chapter: "Chapter 6: Health",
    summary: "Systematizes medical astrology through the lens of anatomical house rulerships and Nadi combinations. Formulates the acute and chronic pathology matrices (6th house acute sickness, 8th house chronicity, degeneration, and surgical intervention, 12th house hospitalization and bed-rest). Defines the biological recovery trinity (1st for vital constitution, 5th as 12th to 6th curing illness, 11th as 12th to 12th discharging from hospital). Examines organ mapping, congenital infirmities, and psychiatric disorders.",
    sourceQuote: "Healthy body has a healthy mind... Houses involved in disease are 6 (sickness), 8 (fatal disease, surgery, distress), 12 (hospitalization)... Houses which bring recovery are 1, 5, 11. 5th house is 12th from 6th hence cures disease; 11th house is 12th from 12th hence stops hospitalization; 1st house is physical vitality.",
    keyConcepts: [
      "Pathology Triad: Houses 6 (Disease), 8 (Surgery/Chronicity), 12 (Hospitalization)",
      "The Biological Recovery Trinity: Houses 1, 5, and 11",
      "Surgical Intervention Triggers: Mars involvement with 6, 8, 12",
      "Organ and Anatomical House Mapping",
      "Chronic Degenerative Diseases vs Acute Curable Illnesses"
    ]
  },
  {
    id: "APM-U07",
    title: "Vocational Destiny: Service vs Enterprise, Promotions, Corporate Roles, and Professional Ruin",
    chapter: "Chapters 8 & 11: Career & Financial Prospects and Corporate Astrology",
    summary: "Provides an exhaustive predictive taxonomy for career trajectory and financial accumulation. Contrasts salaried employment (2-6-10-11) with commercial enterprise and trade (2-7-10-11). Formulates out-of-turn promotions, government job acquisition (Sun/Moon involvement), corporate multinationals (Mercury/Jupiter/Venus), and industrial labor (Saturn/Rahu/Ketu). Analyzes professional disruptions, suspensions, demotions, and bankruptcy (5-8-9-12 cluster where 9th negates 10th and 5th negates 6th), and explores executive recruitment via Corporate Astrology.",
    sourceQuote: "For service 2, 6, 10, 11. For business 2, 7, 10, 11... Therefore when 6th House connects 2, 10, 11 native joins a job whereas when 7th house is signified he joins business... Promotions: Native gets out of turn promotion & high ups when combination of 2, 6, 10, 11 is signified in the DBA planets with favourable Transits.",
    keyConcepts: [
      "Employment vs Commercial Enterprise (2-6-10-11 vs 2-7-10-11)",
      "Organizational Rulerships: State (Sun/Moon), Corporate (Jup/Mer/Ven), Small/Labor (Sat/Rahu/Ketu)",
      "Out-of-Turn Promotion and Wealth Accumulation Combinations",
      "Professional Fall, Suspension, and Termination (5-8-9-12)",
      "Corporate Astrology: Executive Profiling and Strategic Alignment"
    ]
  },
  {
    id: "APM-U08",
    title: "Matrimonial Dynamics: Alliance Settlement, Marital Disharmony, Divorce, and Extramarital Liaisons",
    chapter: "Chapter 9: Marriage",
    summary: "Presents the definitive Nadi mechanics of marriage, relationship stability, and marital dissolution. Formulates the universal alliance signature (2-7-11: 2nd family addition, 7th spouse, 11th gain and desire fulfillment). Systematizes total denial or delay of marriage through the negation triad (1-6-10). Unpacks matrimonial litigation, separation, and legal divorce (1-6-10-12), dowry disputes, domestic friction, and clandestine extramarital affairs (5-11-12 secret pleasure cluster).",
    sourceQuote: "Houses involved in marriage are: 7th House (prime house of partner/spouse), 2nd House (family), 11th House (gain of life partner & fulfillment of desires). Marriage of native takes place in the DBA of the planets signifying the combination 2, 7, 11... Separation and divorce are caused by 1, 6, 10, 12, where 6th is 12th from 7th and 10th is 12th from 11th.",
    keyConcepts: [
      "Universal Marriage Signature: Houses 2, 7, and 11",
      "Matrimonial Denial and Obstruction: Houses 1, 6, and 10",
      "Legal Dissolution and Divorce Matrix: Houses 1, 6, 10, and 12",
      "Extramarital and Clandestine Affairs: 5-11-12 Dynamics",
      "Timing Alliance Finalization vs Social Ceremony Execution"
    ]
  },
  {
    id: "APM-U09",
    title: "Progeny and Family Expansion: Conception, Childbirth, Barrenness, and Complications",
    chapter: "Chapter 10: Children",
    summary: "Examines human fertility, conception, and childbirth through astrological coordinates. Establishes the progeny combination (2-5-11: 5th prime house of progeny and ovum/sperm vitality, 2nd family expansion, 11th gain). Contrasts this with the medical and psychological denial of children (1-4-10: 4th negating 5th, 1st negating 2nd, 10th negating 11th). Details pregnancy complications, abortions, miscarriages (5-8-12 with Saturn/Rahu/Ketu), and medical interventions such as Caesarean sections.",
    sourceQuote: "Astrologically houses involved in child birth are: 5th (prime house of children), 2nd (gain of member in family), 11th (gain of child)... Denial of children is shown by houses 1, 4, 10 which are 12th to 2, 5, 11... Abortion is indicated when DBA clearly indicates the combination of 5, 8, 12 along with malefics Saturn, Ketu & Rahu.",
    keyConcepts: [
      "Progeny Conception Blueprint: Houses 2, 5, and 11",
      "Barrenness and Progeny Denial: Houses 1, 4, and 10",
      "Miscarriage, Abortion, and Medical Interventions (5-8-12 with Nodes/Saturn)",
      "Foetal Health Delineation Across Gestational Trimesters",
      "Multi-Birth Dynamics and Hereditary Continuity"
    ]
  },
  {
    id: "APM-U10",
    title: "Precision Rectification, Longevity Calculus, and Transit Micro-Timing Protocols",
    chapter: "Chapters 12, 13, 15, 16 & 17: Longevity, Rectification of Birth Time, Muhurat, Remedies & Twins",
    summary: "Consolidates the advanced mathematical and forensic tools of Nadi Astrology. Presents the mathematical longevity formula calculating exact lifespan span via Vimshottari proportions (Life-Increasing vs Death-Inflicting/Badhak coordinates). Explains the four Ruling Planets (RP) technique for Birth Time Rectification (BTR) to resolve birth hospital logging errors down to the exact second. Details pinpoint transit rules within one degree, the true philosophy of Karmic Remedial Measures, and the astrological differentiation of twin births.",
    sourceQuote: "Longevity (in years) = [A / (A + B)] x 120 (of Vimshottari Dasa), where A is sum total of life increasing houses (1, 5, 9, 10, 11) & B is sum total of death inflicting houses (6, 8, 12, Badhak)... Ruling Planets at the moment of query: Day Lord, Moon Sign Lord, Moon Nakshatra Lord, Ascendant Lord... Event takes place when transiting planet signifying event transits within one degree of sensitive cuspal degrees.",
    keyConcepts: [
      "Mathematical Longevity Formula: [A / (A + B)] x 120 Vimshottari Span",
      "Classification of Badhak Houses (Movable: 11th, Fixed: 9th, Dual: 7th)",
      "The Four Ruling Planets (RP) Birth Time Rectification Protocol",
      "One-Degree Transit Conjunction and Cuspal Trigger Mechanics",
      "Deterministic Karma, Twin Birth Divergence, and Remedial Ethics"
    ]
  }
];

const masterNotesMarkdown = `# Master Codex: Accurate Predictive Methodology
## Author: Umang Taneja | Forensic Nadi / KP Astrological Science

---

### Executive Overview & Epistemological Paradigm

Umang Taneja's *Accurate Predictive Methodology* represents one of the most rigorous, systematic, and falsifiable modern formulations of predictive astrology. Belonging to the lineage of **Nadi Astrology** (deeply hybridized with the analytical precision of K.S. Krishnamurti's **Krishnamurti Padhdhati / KP System**), Taneja eliminates the vagueness, subjective mythologizing, and contradictory classical dicta that have historically plagued predictive astrological practice.

In traditional Parashari astrology, an astrologer often juggles hundreds of contradictory yogas, aspects, divisional charts, and friendship tables, frequently producing conflicting predictions where one rule promises royalty while another promises penury. Taneja cuts through this Gordian knot with an axiomatic, mathematically bounded system grounded in five core structural pillars:

1. **The Nirayana Bhava Chalit Chart**: House cusps calculated using unequal house division (Placidus system) overlaid upon the sidereal (Nirayana) zodiac using Krishnamurti or Lahiri Ayanamsha. Rashi charts are treated as mere sky maps; only the Bhava Chalit determines actual house residence and planetary lordship.
2. **The Three-Tier Signification Hierarchy**: A planet never operates in isolation. Its predictive output is governed by a strict tripartite chain of command:
   $$\\text{Sub-Lord} > \\text{Nakshatra Lord} > \\text{Planet}$$
   The planet represents the basic energy and source; the Nakshatra Lord indicates the primary houses and events; the **Sub-Lord** acts as the supreme, unalterable decider, determining whether the event will successfully materialize, be corrupted, or be completely denied.
3. **The Law of the Penultimate House (The 12th House Negation Rule)**: Every house is vulnerable to its preceding 12th house ($H - 1$). The 12th house relative to any reference house systematically mars, negates, or terminates the significations of that house.
4. **House Clustering (Multi-House Synergies)**: A single house never produces an event in human life. Isolated 7th house energy does not create marriage; marriage requires the coordinated cluster $2, 7, 11$. Isolated 10th house energy does not produce employment; career requires $2, 6, 10, 11$ for service or $2, 7, 10, 11$ for business.
5. **The Cuspal Sub-Lord (CSL) Gatekeeper**: The natal promise of any house is locked or unlocked exclusively by the Sub-Lord of its beginning degree (cusp). If the CSL of the 7th house signifies negation houses ($1, 6, 10$), no Mahadasha or transit on earth can grant a stable, lasting marriage.

Through these principles, Taneja provides definitive, algorithmic rules across every major theater of human life: academic attainment, litigation and imprisonment, real estate and vehicle transactions, medical pathologies and surgical interventions, vocational destiny, matrimonial stability, progeny, longevity, and birth-time rectification down to the second.

---

### Core Structural Pillar 1: The Three-Tier Signification Hierarchy & Nodal Calculus

#### The Tripartite Chain of Command

In Taneja's Nadi system, every celestial body is evaluated across three vertical tiers of coordinate influence:

| Tier | Component | Astrological Role | Hierarchy of Power |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Base)** | **The Planet** | Position in Nirayana Bhava Chalit & ownership of houses | *Weakest* (Acts as the vehicle/source) |
| **Tier 2 (Engine)** | **The Nakshatra Lord** | The constellation occupied by the planet | *Intermediate* (Specifies primary manifestation) |
| **Tier 3 (Arbiter)** | **The Sub-Lord** | The unequal 249-subdivision segment of the Nakshatra | *Strongest* (Final decider: confirms or denies) |

#### Rules Governing Strength and Fructification

1. **Sub-Lord Alignment**: If the Sub-Lord signifies the full positive combination of an event, and the Nakshatra Lord and Planet endorse or facilitate it, the event will materialize with 100% certainty during that planet's Dasa-Bhukti-Antar (DBA).
2. **Sub-Lord Negation**: If the Nakshatra Lord and Planet signify the full event combination, but the Sub-Lord signifies the complete negation combination, the event is either denied at the very last moment or produces disastrous after-effects.
3. **Facilitator States**: If Planet, Nakshatra, and Sub-Lord signify only neutral or facilitator houses, the planet lacks autonomous motive power and must depend entirely on the strength of accompanying DBA co-rulers.
4. **Natural Planetary Temperament**: While house coordinates provide the mathematical framework, natural planetary nature colors the intensity. Malefics (**Saturn, Rahu, Ketu**) manifest obstructive, separating, or litigious coordinates with brutal force. **Mars** brings sudden, violent, or surgical acceleration. Benefics (**Jupiter, Venus, Mercury, Moon, Sun**) provide elegance, institutional protection, and smooth execution.

#### Coordinate Derivation for Rahu and Ketu

Because Rahu and Ketu do not possess sign lordship in standard Parashari schemas, traditional astrology struggles to locate their jurisdiction. Taneja formulates an exact, 4-step sequential rule to extract the coordinates of Rahu and Ketu:

1. **Conjunction**: Rahu/Ketu adopt all house significations of any planet with which they are conjunct within orb.
2. **Aspect**: Rahu/Ketu adopt all house significations of any planet casting a direct aspect upon them.
3. **Sign Dispositor**: Rahu/Ketu adopt the house significations of the planetary ruler of the sign in which they reside.
4. **Posited House**: Rahu/Ketu signify the exact Bhava Chalit house they occupy.

This makes Rahu and Ketu the most powerful multi-house significators in any horoscope, often carrying 6 to 10 house coordinates simultaneously and acting as explosive event-triggers during their periods.

---

### Core Structural Pillar 2: The Law of the Penultimate House & Systemic Negations

#### The Universal Negation Formula

Taneja's primary predictive engine is grounded in the foundational axiom:
$$\\text{House } (N - 1) \\text{ mars, destroys, and terminates the significations of House } N$$

Because the 12th house from any reference point represents loss, dissolution, and departure from that point, every life domain has an exact mathematical negation:

| Domain | Primary House ($N$) | Negating / Penultimate House ($N - 1$) | Phenomenological Result |
| :--- | :--- | :--- | :--- |
| **Vital Body / Physical Life** | **House 1** (Ascendant) | **House 12** | Loss of physical presence, hospitalization, confinement, death. |
| **Accumulated Wealth / Family** | **House 2** | **House 1** | Depletion of bank savings, liquidation of family assets for self. |
| **Sibling Courage / Enterprise** | **House 3** | **House 2** | Stagnation of initiatives, reliance on family resources. |
| **Fixed Assets / Home / Mother**| **House 4** | **House 3** | Departure from motherland, relocation, sale/loss of real estate. |
| **Intellect / Romance / Progeny**| **House 5** | **House 4** | Inability to conceive (4 denies 5), emotional coldness, mental rigidity. |
| **Litigation / Acute Disease / Debt**| **House 6** | **House 5** | Cure of illness (5 terminates 6), victory in court, refusal to work. |
| **Marriage / Partnership / Opponent**| **House 7** | **House 6** | Marital breakdown, separation, divorce, victory over opponent. |
| **Longevity / Chronic Crisis** | **House 8** | **House 7** | Alleviation of trauma, maraka infliction at terminal moments. |
| **Higher Fortune / Father / Wisdom**| **House 9** | **House 8** | Misfortune, obstacles, scandal, severance from paternal grace. |
| **Career / Status / Executive Power**| **House 10** | **House 9** | Loss of employment, resignation, demotion, relinquishing office. |
| **Fulfillment / Income / Profit** | **House 11** | **House 10** | Complementary in business (Exception: 10 supports 11 trade gains). |
| **Expenditure / Foreign Confinement**| **House 12** | **House 11** | Stoppage of expenses, retention of liquid capital, net accumulation. |

#### Crucial Systematic Exceptions

Taneja rigorously details where the 12th relative house does *not* destroy the preceding house:
- **Houses 10 and 11 in Commerce**: Although the 10th house is 12th from the 11th, both are mutually reinforcing for business enterprise. 10 represents commercial infrastructure and executive standing, while 11 represents net profit. They operate in harmony.
- **Houses 4 and 5 in Education**: Although the 4th house is 12th from the 5th (intellect), the 4th house represents structured institutional schooling, syllabi, and degrees. An individual with a strong 4th and weak 5th may lack creative genius but will excel in formal exams and secure top institutional certifications.
- **Houses 3 and 4 in Travel**: The 3rd house is 12th from the 4th (residence), but because the 3rd house governs movement, short journeys, and vehicle operation, it actively facilitates transportation rather than merely destroying home life.

---

### Life Domain Codices: Complete Predictive Matrices

#### 1. Education & Intellectual Trajectory (Chapter 3)

##### Core Triad: Houses 4, 9, 11
- **House 4**: Foundational institutional schooling, secondary education, textbooks, and syllabus absorption.
- **House 5**: Creative intelligence, logical deduction, mental acuity, artistic or mathematical genius.
- **House 9**: Higher university degrees, postgraduate specialization, philosophical synthesis, international research.
- **House 11**: Successful examination completion, scholastic honors, institutional accreditation, passing grades.

##### Modern Academic Grade Predictor

| Grade Attainment | Required DBA House Cluster | Mechanistic Explanation |
| :--- | :--- | :--- |
| **"A" Grade (Distinction / 80-100%)** | **4, 9, 11** | Flawless alignment of institutional syllabus (4), higher mastery (9), and fulfillment/gain (11). |
| **"B" Grade (Above Average / 65-79%)** | **4, 11** | Strong institutional absorption and successful passing, lacking higher conceptual flair. |
| **Intellectual "B" (High IQ / Underperforming)** | **5, 11** | Exceptional intrinsic intelligence and quick wit, but neglects structured syllabus homework. |
| **"C" Grade (Average / 50-64%)** | **4, 5, 9** | Good theoretical interest, but lacks House 11 to convert understanding into high exam marks. |
| **"D" Grade (Low Pass / 35-49%)** | **2, 4, 5, 9 (Scattered)** | Fragmented focus; barely scrapes past minimum passing thresholds. |
| **Compartment / Supplementary Exam** | **6, 8, 12** mixed with **4** | Sickness (6), severe obstacles/stress (8), or exam failure/absence (12) requiring re-testing. |
| **Complete Academic Discontinuation** | **6, 8, 12** repeating across CSL 4/9 | Full negation of academic potential; individual drops out or is expelled. |
| **Scientific & Research Orientation** | **8, 12** linked with **4, 9, 11** | The 8th (investigation into the hidden) and 12th (isolation/laboratories) produce breakthrough research minds. |

---

#### 2. Litigation, Criminality, and Imprisonment (Chapter 4)

##### The Legal Triad: Houses 6, 8, 12
- **House 6**: The dispute itself, court hearings, adversaries (6th is 12th from 7th, denying the opponent).
- **House 8**: Humiliation, mental torture, police interrogation, damages, catastrophic penalties.
- **House 12**: Confinement, incarceration, judicial sentencing, legal expenses, secret enemies.

##### Hierarchy of Judicial Outcomes

$$\\mathbf{6, 11} > \\mathbf{10, 11} > \\mathbf{6, 10} > \\mathbf{1, 6}$$

- **6, 11 (Absolute Victory)**: Destroys the opponent (6) and achieves absolute fulfillment and gain (11). The litigant wins outright with damages awarded.
- **10, 11 (Prestige & Gain)**: Preserves social reputation, secures executive backing, and wins the case.
- **6, 10 (Adversary Defeat with Status Retention)**: Defeats the opponent and maintains legal authority, though financial gains may be muted.
- **1, 6 (Self-Effort Settlement)**: Overcomes opposition through relentless personal exertion.
- **5, 9 (Out-of-Court Compromise)**: House 5 negates 6 (terminating the fight) while House 9 negates 10 (settling without formal decree). Parties reach an amicable settlement.

##### Criminal Incarceration & Professional Roles

| Life Manifestation | Astrological Formula | Delineation Mechanics |
| :--- | :--- | :--- |
| **Arrest & Prison Sentence** | **2, 3, 8, 12** under malefic DBA | 2 (severed from family), 3 (displaced from home), 8 (loss of liberty/humiliation), 12 (locked in jail cell). |
| **Prison Warden / Jailor** | **2, 3, 8, 12** combined with **10, 11** | The individual resides and works inside the prison facility (2-3-8-12) as a salaried career (10-11). |
| **Trial Advocate / Litigator** | **6, 8, 12** active with **10, 11** and strong Mercury/Mars | Daily life is spent inside courts fighting litigations (6-8-12), converting disputes into lucrative income (10-11). |
| **Hardened Criminal / Outlaw** | Mars/Pluto or Rahu/Pluto in **1 or 3** signifying **6, 7, 8, 12** | Extreme violent antisocial tendencies, organized criminality, ruthless disregard for statutory law. |

---

#### 3. Real Estate and Vehicular Assets (Chapter 5)

##### The Property Formula
- **Natural Significators**: **Mars** (earth, brick, land, structural engineering) and **Saturn** (real estate, ancient structures, mining, landlords).
- **Outright Purchase**: Operating DBA must signify **4, 11, 12** with Mars or Saturn involved via lordship, placement, or aspect.
  - *House 4*: The real estate asset / land / residence.
  - *House 11*: Acquisition, gain, legal ownership.
  - *House 12*: Capital expenditure, financial outlay, purchase investment.

##### Transactional Variations

1. **Financed via Bank Loan / Mortgage**: **4, 6, 11, 12**. The introduction of the **6th house** indicates commercial borrowing, bank debts, and liability creation.
2. **Ancestral Legacy & Inheritance**: **4, 8, 11** (Critically, **House 12 is absent**). The 8th house governs unearned wealth and deceased estates; because the native pays zero out-of-pocket capital, the 12th house does not appear.
3. **Joint-Name Purchase**: **3, 4, 11, 12**. The **3rd house** (being 12th from the 4th) limits sole ownership, requiring a co-purchaser (spouse, sibling, or business partner).
4. **Acquisition via Installments**: **4, 12** repeating across minor sub-periods. Gradual capital depletion without immediate possession.
5. **Sale of Property**: **3, 5, 10, 12**. This is the exact mathematical negation of purchase:
   - 3 negates 4 (giving up possession of house).
   - 5 negates 6 (clearing mortgages).
   - 10 negates 11 (buyer gains, seller relinquishes).
   - 12 represents transfer and liquidation.
6. **Distress Loss / Seizure**: **3, 6, 8, 12**. Property is confiscated by banks, lost in litigation, or forfeited under bankruptcy.

##### Vehicular Acquisitions
- Natural Significator: **Venus** (luxury, conveyance, mechanical beauty) and **Mars** (engine, metal body).
- Acquisition Formula: **4, 11, 12** with active Venus/Mars involvement.
- Vehicle Travel & Movement: Activation of the **3rd house** indicates extensive commuting and automotive usage.

---

#### 4. Medical Astrology & Pathological Mechanics (Chapter 6)

##### The Pathological Triad: Houses 6, 8, 12
- **House 6**: Sickness, acute bacterial/viral infections, digestive dysfunction, functional illness.
- **House 8**: Chronic incurable disease, surgical intervention, agonizing pain, structural organ failure.
- **House 12**: Hospitalization, quarantine, coma, bed-ridden confinement, death.

##### The Biological Recovery Trinity: Houses 1, 5, 11
- **House 1**: Intrinsic physical vitality, strong immune resilience, bodily longevity.
- **House 5**: **The Grand Healer** — being the 12th house from the 6th, it systematically terminates disease and restores somatic balance.
- **House 11**: Being the 12th house from the 12th, it halts hospitalization, ends bed-ridden confinement, and discharges the patient home.

##### Surgical Operations
- Trigger: Active DBA of **6, 8, 12** inextricably connected with **Mars** (scalpel, blood, incisions).
- If DBA transitions into **1, 5, 11**, the surgery is an absolute curative success.
- If DBA continues in **6, 8, 12** with afflicting Saturn/Rahu, the patient suffers post-operative sepsis, chronic disability, or surgical mortality.

---

#### 5. Vocational Destiny: Service vs Enterprise (Chapters 8 & 11)

##### The Fundamental Bifurcation

| Parameter | Salaried Employment (Service) | Commercial Enterprise (Business) |
| :--- | :--- | :--- |
| **Mandatory Core Cluster** | **2, 6, 10, 11** | **2, 7, 10, 11** |
| **Differentiating Axis** | **House 6** (Subservience, master-servant contract, monthly wage) | **House 7** (Public trade, commercial transactions, customer market) |
| **Wealth Mechanism** | Predictable salary, bonuses, PF accrual (2 + 11 via 6) | Liquid revenue, trade turnover, equity appreciation (2 + 11 via 7) |
| **Status Driver** | Institutional rank, corporate hierarchy (10 via 6) | Brand sovereignty, market dominance, autonomy (10 via 7) |

##### Institutional Rulership Matrix

- **Sun / Moon**: Sovereign State, Civil Services, Government Ministries, Public Sector Undertakings.
- **Mars**: Armed Forces, Police, Heavy Engineering, Real Estate Development, Surgery.
- **Jupiter / Mercury / Venus**: Multinational Corporations, Banking, Finance, Media, Law, High Tech.
- **Saturn / Rahu / Ketu**: Small enterprises, labor-intensive factories, transport unions, hazardous materials.

##### Career Calamities & The Negation Matrix

$$\\mathbf{5, 8, 9, 12}$$

- **House 9** is 12th from the 10th $\\rightarrow$ Severance from office, resignation, loss of professional status.
- **House 5** is 12th from the 6th $\\rightarrow$ Termination of employment contract, involuntary dismissal.
- **House 8** $\\rightarrow$ Professional disgrace, vigilance inquiries, demotion, suspension.
- **House 12** $\\rightarrow$ Financial loss, total displacement, severance from company headquarters.

---

#### 6. Matrimonial Dynamics & Alliance Engineering (Chapter 9)

##### The Universal Marriage Formula: Houses 2, 7, 11
- **House 2**: Expansion of the immediate household, solemnization of family ties, verbal pledge.
- **House 7**: The legal partner, spouse, contractual matrimonial bond, physical intimacy.
- **House 11**: Realization of personal desires, marital bliss, friendly partnership.

##### The Matrimonial Negation & Destruction Triad: Houses 1, 6, 10

$$\\mathbf{1, 6, 10} \\text{ operates as the exact antithesis to } \\mathbf{2, 7, 11}$$

- **House 1** (12th from 2nd): Destroys the family unit; prioritizes ego/isolation over union.
- **House 6** (12th from 7th): Directly severs the marital bond; induces legal conflict, enmity, and separation.
- **House 10** (12th from 11th): Destroys mutual happiness, fulfillment, and romantic friendship.

##### Relationship Manifestation Spectrum

| Relationship State | Astrological Signature | Clinical Phenomenon |
| :--- | :--- | :--- |
| **Smooth, Auspicious Wedding** | DBA of **2, 7, 11** with Venus/Jupiter | Seamless match-making, harmonious social ceremony, deep mutual affinity. |
| **Absolute Celibacy / Denial** | CSL of 7th house signifies exclusively **1, 6, 10** | Individual never enters marriage; proposals continuously fall through or are rejected. |
| **Severe Delay / Frustration** | CSL of 7th signifies **1, 6, 10** mixed with **2, 7, 11** | Marriage occurs very late in life after exhausting legal, emotional, or familial delays. |
| **Separation & Legal Divorce** | DBA transition into **1, 6, 10, 12** | Bitter court battles, dowry allegations, maintenance claims, formal dissolution of marriage. |
| **Extramarital Clandestine Affair**| **5, 11, 12** active simultaneously | 5 (romance/infatuation), 11 (pleasure), 12 (bedroom pleasures, hidden/clandestine behavior). |

---

#### 7. Progeny & Pediatric Delineation (Chapter 10)

##### The Progeny Cluster: Houses 2, 5, 11
- **House 5**: Prime house of procreative vitality, ovaries/sperm count, conception, embryonic development.
- **House 2**: Arrival and physical inclusion of a new human life within the family lineage.
- **House 11**: Fulfillment of the parental desire, safe birth of a healthy child.

##### Complete Barrenness & Medical Infertility: Houses 1, 4, 10
- **House 4** (12th from 5th): Terminate reproductive capacity; defective ovulation, zero sperm count.
- **House 1** (12th from 2nd): Denies family addition.
- **House 10** (12th from 11th): Denies fulfillment and gain.
- *Clinical Rule*: If the Cuspal Sub-Lord of the 5th house in both husband and wife signifies exclusively **1, 4, 10**, medical science and assisted reproductive technologies (IVF) will fail completely.

##### Miscarriage, Abortion, and Caesarean Sections
- **Formula for Miscarriage / Medical Termination**: **5, 8, 12** operating in DBA with **Saturn, Rahu, or Ketu**.
  - The 5th house is damaged by the catastrophic 8th (death of fetus) and 12th (hospital expulsion).
- **Caesarean Delivery**: In modern obstetrics, when the 5th house is promising but **Mars** and **House 8** connect with the delivery window, birth occurs via surgical incision.

---

### Advanced Mathematical Protocols: Longevity, Rectification & Transits

#### 1. The Mathematical Longevity Formula (Chapter 12)

Taneja formulates an innovative, quantitative method to calculate biological longevity without relying on ambiguous classical shlokas. The calculation is based on the proportion of Life-Increasing Houses versus Death-Inflicting Houses across all planetary coordinators, scaled to the full 120-year span of the Vimshottari Dasa.

$$\\text{Longevity (Years)} = \\left( \\frac{A}{A + B} \\right) \\times 120$$

##### Variable Definitions:
- **$A$ (Life-Increasing Factor)**: The sum total of occurrences of houses **1, 5, 9, 10, and 11** across the 7 traditional planets (with their Nakshatra and Sub-Lords) plus Rahu and Ketu coordinates.
- **$B$ (Death-Inflicting Factor)**: The sum total of occurrences of houses **6, 8, 12, and the Badhak House**.

##### Badhak House Rules:
- **Movable Ascendant** (Aries, Cancer, Libra, Capricorn): Badhak is the **11th House**.
- **Fixed Ascendant** (Taurus, Leo, Scorpio, Aquarius): Badhak is the **9th House**.
- **Common / Dual Ascendant** (Gemini, Virgo, Sagittarius, Pisces): Badhak is the **7th House**.

*Maraka Houses ($2$ and $7$)* are treated as execution triggers during the terminal period itself, while Badhak serves as the primary structural death-accelerator throughout the life calculation.

---

#### 2. The Four Ruling Planets (RP) Birth Time Rectification Protocol (Chapter 13)

When a birth time is uncertain due to hospital clock errors, memory gaps, or delivery room emergencies, Taneja enforces the **Ruling Planets (RP)** methodology. The astrologer notes the precise astronomical moment when the query is formulated or when the chart analysis commences:

1. **Day Lord (DL)**: Planetary ruler of the day of query (e.g., Mars for Tuesday).
2. **Moon Sign Lord (MSL)**: Planetary ruler of the zodiac sign occupied by the Moon at query.
3. **Moon Nakshatra Lord (MNL)**: Planetary ruler of the lunar constellation at query.
4. **Ascendant Lord (AL)**: Planetary ruler of the rising sign at the query coordinates.

##### Rectification Execution Rule:
The true Ascendant Cusp Sub-Lord of the native's natal chart must be governed by, aspected by, or identical to one of the authentic Ruling Planets. If the approximate birth time gives an Ascendant Cusp Sub-Lord that has no relationship with the Ruling Planets, the birth time is adjusted by minutes or seconds until the cuspal degree falls into the Sub-Lord segment dictated by the RP hierarchy.

---

#### 3. Pinpoint Transit Micro-Timing Rules (Chapters 8, 9 & 15)

In Nadi Astrology, Dasa-Bhukti-Antar (DBA) establishes the broad theatrical window, but **Transits pinpoint the exact day and hour of the event**. Taneja lays down the exact cosmic conditions under which an event precipitates into physical reality:

1. **Exact Degree Transit**: A transiting planet signifying the event coordinates transits within **one degree** of the natal degree of a key significator.
2. **Transit over Cuspal Degrees**: A transiting significator planet crosses within **one degree** of the sensitive cuspal degree of the prime event house ($2, 7, 11$ for marriage; $2, 6, 10, 11$ for career).
3. **One-Degree Mutual Conjunction**: Two transiting planets signifying the event come into exact conjunction within a **$1^\\circ$ orb** in the heavens.
4. **Lunar Trigger**: The transiting Moon (which moves $\\sim 13^\\circ$ per day) conjoins the active DBA significators or crosses their sensitive Nakshatra degrees, provided the Moon itself acts as a significator in the natal chart.

---

#### 8. Travel, Relocation, and Foreign Resettlement (Chapter 7)

##### The Spatial Coordinate Triad
- **House 3**: Departure from home, displacement from native town, short-distance journeys, changing residences.
- **House 9**: Long-distance travel, religious pilgrimages, foreign university journeys, international border crossings.
- **House 12**: Foreign settlement, residence on foreign soil, long-term immigration, life away across seas.
- **House 4 & 11**: Return to homeland; repatriation to the native country (4 represents home/motherland; 11 represents fulfillment).

##### Foreign Travel and Settlement Configurations

| Relocation Dynamic | Astrological Formula | Delineation Mechanics |
| :--- | :--- | :--- |
| **Short Business / Leisure Trip** | **3, 9** operating in DBA | Temporary absence from home, brief transit across regional boundaries. |
| **Foreign Higher Education** | **4, 9, 11, 12** active together | 4 (institutional study), 9 (foreign university), 11 (admission success), 12 (foreign soil). |
| **Permanent Emigration / Green Card** | **3, 9, 12** repeating across DBA and 12th CSL | Total displacement from motherland (3 negates 4) and indefinite overseas domicile (12). |
| **Forced Deportation / Return** | **4, 11** interrupting **3, 9, 12** DBA | Involuntary or voluntary return to home country; cancellation of foreign residency visas. |

---

#### 9. Corporate Astrology & Executive Profiling (Chapter 11)

In modern corporate environments, organizational success hinges on aligning human capital with planetary strengths. Taneja outlines an astrological framework for corporate head-hunting, departmental placements, and commercial viability:

1. **Executive Leadership / Board of Directors**: Candidates must have strong **1st, 10th, and 11th houses** governed by **Sun, Mars, or Jupiter**, conferring visionary command, unshakeable willpower, and institutional authority.
2. **Finance, Auditing & Controllership**: Governed by **Mercury, Jupiter, and Saturn** signifying **2, 6, 11**. Exceptional analytical ability, fiscal prudence, and risk aversion.
3. **Sales, Marketing & Commercial Negotiations**: Dominated by **Mercury and Venus** signifying **3, 7, 10, 11**. Rapid communicative rapport, persuasive eloquence, and commercial agility.
4. **Research, R&D & Systems Architecture**: Dominated by **8th and 12th houses** linked with **Mercury and Ketu**, driving deep intellectual breakthroughs and innovative patent creation.
5. **Corporate Integrity vs Embezzlement Risk**: Candidates with **Saturn, Rahu, or Mercury** signifying **6, 8, 12** connected to **House 2 or 10** pose catastrophic risks of corporate espionage, embezzlement, fraud, and financial default.

---

#### 10. Auxiliary Diagnostic Sciences: Numerology, Palmistry & Physiognomy (Chapter 14)

While Nadi astrology is the paramount predictive discipline, Taneja acknowledges the diagnostic value of complementary occult sciences as cross-verifying tools:

- **Numerological Triads**: Numbers 1 through 9 are classified into three functional harmonies:
  - *(a) The Vitality & Mental Triad*: **1, 2, 4, 7** (Reflecting Sun, Moon, Rahu, Ketu — raw consciousness, intuition, and mental volatility).
  - *(b) The Material & Power Triad*: **4, 5, 8** (Reflecting Rahu, Mercury, Saturn — commercial acumen, material calculation, discipline, and industrial focus).
  - *(c) The Creative & Expansive Triad*: **3, 6, 9** (Reflecting Jupiter, Venus, Mars — philosophical wisdom, artistic luxury, dynamic assertion, and spiritual vision).
- **Cheiromancy (Palmistry)**: The headline, heartline, and lifeline provide physical confirmation of planetary coordinates. A broken headline mirrors the affliction of Mercury or the 6th/8th house axis, while an island on the lifeline corroborates a dangerous Maraka/Badhak period.
- **Physiognomy (Face Reading)**: Cranial structure, eye symmetry, and forehead lines reflect the natal Ascendant and planetary placements at birth.

---

#### 11. Electional Astrology: Muhurat Alignment (Chapter 15)

Taneja redefines classical **Muhurat** (electional timing). Rather than searching for an abstract, universal "good day" that applies generically to all humans, a true Muhurat must be customized to the native's individual natal promise:

1. **Cuspal Sub-Lord Resonance**: The rising Ascendant at the moment of commencing an activity must have its Cuspal Sub-Lord (CSL) actively signifying the positive houses of that endeavor.
   - *Marriage Muhurat*: Ascendant CSL must signify **2, 7, 11**.
   - *Business Launch Muhurat*: Ascendant CSL must signify **2, 7, 10, 11**.
   - *Property Purchase / Foundation Laying*: Ascendant CSL must signify **4, 11, 12**.
2. **Synchronization with Natal DBA**: A brilliant transit Muhurat cannot rescue an enterprise initiated during a devastating natal DBA of **5, 8, 9, 12**. Muhurat acts as the micro-catalyst to optimize an already favorable macro-cosmic season.

---

#### 12. Remedial Measures & Karmic Determinism (Chapter 16)

A cornerstone of Taneja's philosophy is an unyielding defense of **Karmic Determinism**:
> *"All events whether good or bad are regulated by the position, aspect, conjunction of planets, signs & houses. It strongly implies that these events are predestined and the various combinations support the principle that Destiny cannot be changed."*

##### The Role and Limitations of Astrological Remedies:
- **Gemstones (Ratna)**: Gemstones amplify the electromagnetic radiation of specific planets. If an astrologer prescribes a gemstone for a planet that signifies **6, 8, 12**, the gemstone will violently accelerate disease, litigation, and financial catastrophe. Gemstones must *only* be prescribed for planets that signify the positive houses of life (**1, 2, 3, 5, 9, 10, 11**).
- **Mantras & Consciousness Modification**: Sound vibrations and meditation do not "cancel" a karmic event; rather, they alter the psychological receptivity of the native, transforming debilitating panic into stoic fortitude and calm resolution.
- **Charity (Daan)**: Giving away materials governed by malefic planets helps neutralize the negative psychological attachments associated with those coordinates.
- **The Ethical Mandate**: Astrologers must never exploit client vulnerability by promising miraculous reversals of fatal Badhak/Maraka periods. The highest duty of the astrologer is clear, truthful counsel that prepares the individual to navigate their predestined karma.

---

#### 13. The Mystery of Twin Births: Temporal Divergence (Chapter 17)

One of the greatest objections historically raised by skeptics against astrology is the phenomenon of **Twin Births**: children born just minutes apart in the same delivery room who experience radically divergent careers, marriages, and lifespans.

Taneja demonstrates how the **Cuspal Sub-Lord System** decisively solves this problem:
1. **The 2-to-4 Minute CSL Boundary**: While the Zodiac Sign (Rashi) rises for approximately 2 hours and the Nakshatra rises for roughly 53 minutes, the **Sub-Lord division changes every 2 to 4 minutes**.
2. **Coordinate Flipping**:
   - Twin A born at 14:02 may have the Ascendant Cusp in the Sub-Lord of **Jupiter**, which signifies houses **1, 5, 10, 11** (promising high status, health, and academic excellence).
   - Twin B born at 14:06 has the Ascendant Cusp slip into the Sub-Lord of **Saturn**, which signifies houses **6, 8, 12** (producing chronic congenital disease, physical frailty, or intellectual struggle).
3. **Navamsha and Cuspal Shift**: Minor shifts in birth time alter the Cuspal Sub-Lords of the 5th (children), 7th (marriage), and 10th (career) houses, creating totally different destiny architectures despite an identical broad sky map.

---

#### 14. Derived Relatives Matrix: Bhavat Bhavam Projections (Chapter 18)

Through the doctrine of **Bhavat Bhavam** (house from house), an astrologer can delineate the fortune, health, and crises of any blood relative directly from the native's single birth chart:

| Relative | Reference House | House of Health / Recovery | House of Crisis / Death |
| :--- | :--- | :--- | :--- |
| **Younger Sibling** | **House 3** (1st of Sibling) | **House 7** (5th from 3rd) | **House 10** (8th from 3rd) & **House 4** (2nd from 3rd) |
| **Mother** | **House 4** (1st of Mother) | **House 8** (5th from 4th) | **House 11** (8th from 4th) & **House 5** (2nd from 4th) |
| **First Child** | **House 5** (1st of Child) | **House 9** (5th from 5th) | **House 12** (8th from 5th) & **House 6** (2nd from 5th) |
| **Spouse** | **House 7** (1st of Spouse) | **House 11** (5th from 7th) | **House 2** (8th from 7th) & **House 8** (2nd from 7th) |
| **Father** | **House 9** (1st of Father) | **House 1** (5th from 9th) | **House 4** (8th from 9th) & **House 10** (2nd from 9th) |
| **Elder Sibling** | **House 11** (1st of Sibling) | **House 3** (5th from 11th) | **House 6** (8th from 11th) & **House 12** (2nd from 11th) |

By rotating the Nirayana Bhava Chalit chart to make the relative's house the Ascendant, all Nadi predictive formulas (marriage, illness, litigation, property) apply with identical precision to that family member.

---

#### 15. Forensic Clinical Case Studies: Real Chart Deconstructions (Chapter 19)

##### Case Study 1: The Trial Advocate (Horoscope H1)
- **Birth Data**: 7 June 1950, 22:30 hrs, Delhi.
- **Astrological Signature**: The native's chart features intense planetary concentrations in houses **6, 8, 12** and **2, 3, 8, 12**, combined with **10 and 11**.
- **Clinical Manifestation**: The native is a prominent criminal defense and civil litigator who spends his life in courtrooms handling disputes. In October 1995, during the DBA of **Ketu-Ketu-Saturn** (signifying 8, 11 and 4, 11), he fought a personal court case over ancestral legacy and secured his rightful property inheritance in October 1997 during **Ketu-Moon-Ketu** (6, 11 victory combination).

##### Case Study 2: Real Estate Default & Corporate Fraud (Horoscope H2)
- **Birth Data**: 26 August 1952, 05:30 hrs, Delhi.
- **Astrological Signature**: Operating under Dasa of **Ketu** and Bhukti of **Rahu**, which heavily signify the debt, litigation, and confinement cluster: **2, 3, 6, 7, 8, 11, 12**.
- **Clinical Manifestation**: As Director of a corporate financial company, the native defaulted on fixed deposit repayments to the public. He faced massive multi-court criminal litigations, freezing of property assets, and arrest warrants, illustrating the devastating impact of the **2-3-8-12** incarceration formula.

##### Case Study 3: The Spiritual Ascetic (Swami Vivekananda)
- **Astrological Signature**: Prime spiritual house **5** connected to **10** (world renown) and **9** (higher wisdom and Vedanta).
- **Clinical Manifestation**: Complete severance from material property and domestic family life (houses 2 and 4 negated), channeling all solar and jovian coordinates into philosophical awakening and international spiritual transmission.

---

### Comparative Epistemology: Nadi / KP vs Classical Systems

| Dimension | Classical Parashari Astrology | Western Tropical Psychological | Umang Taneja's Nadi / KP Methodology |
| :--- | :--- | :--- | :--- |
| **House Division** | Whole Sign / Sri Pati (often blended) | Placidus / Koch on Tropical Equinox | **Nirayana Bhava Chalit (Placidus on Sidereal)** |
| **Analytical Unit** | Rashi, Navamsha, Shadbala, Yogas | Psychological Archetypes, Aspects | **Planet $\\rightarrow$ Nakshatra $\\rightarrow$ Sub-Lord Coordinates** |
| **Primary Arbiter** | Sign Dispositor / Rashi Lord | Outer Planet Transits & Progressions | **Sub-Lord (Hierarchically superior to Nakshatra)** |
| **Event Causality** | Hundreds of conflicting classical Yogas | Subjective internal individuation | **Multi-House Clusters ($2, 7, 11$; $2, 6, 10, 11$, etc.)** |
| **Negation Engine** | Dusthanas ($6, 8, 12$) as generic evils | Hard aspects ($90^\\circ, 180^\\circ$) as challenges | **The Law of the 12th Relative House ($N - 1$)** |
| **Timing Precision** | Broad Dasa/Antardasha (months/years) | Transiting aspect orbs (weeks) | **DBA + One-Degree Cuspal Transits (exact day/hour)** |
| **Falsifiability** | Low (easily obscured by competing yogas)| Subjective / Non-falsifiable | **High (Clear binary event manifestation)** |

---

### Clinical Evaluation & Synthesis Takeaway

Umang Taneja's *Accurate Predictive Methodology* is a monumental contribution to empirical astrology. By stripping away mythic ornamentation and establishing an objective coordinate language, Taneja elevates predictive astrology to a structured, repeatable discipline. 

For the modern astrological researcher, Taneja provides an indispensable diagnostic engine:
- It eliminates guesswork in career counsel (clearly distinguishing business from wage employment).
- It provides unyielding clarity in marital compatibility (forewarning against unions governed by $1, 6, 10$ CSLs).
- It demystifies medical crises, legal disputes, and property transactions with mathematical certainty.
- It anchors all predictive timing in verifiable celestial mechanics: Sub-Lord coordinates operating through Vimshottari periods and triggered by one-degree sensitive cuspal transits.
`;

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accurate Predictive Methodology - Master Codex | Intellectualist</title>
  <link rel="stylesheet" href="../../css/reader-shell.css">
  <style>
    .formula-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
      font-weight: 700;
      font-size: 0.85rem;
      background: var(--bg-tertiary, #eae6df);
      color: var(--text-primary, #2b2b2b);
      border: 1px solid var(--border-color, #dcd8d0);
      margin: 0.2rem 0.2rem 0.2rem 0;
    }
    .badge-positive {
      background: #e8f5e9;
      color: #2e7d32;
      border-color: #c8e6c9;
    }
    .badge-negative {
      background: #ffebee;
      color: #c62828;
      border-color: #ffcdd2;
    }
    .badge-neutral {
      background: #e3f2fd;
      color: #1565c0;
      border-color: #bbdefb;
    }
    .rule-box {
      border-left: 4px solid var(--accent, #b35c00);
      padding: 1rem 1.25rem;
      margin: 1.5rem 0;
      background: var(--bg-secondary, #f7f5f0);
      border-radius: 0 8px 8px 0;
    }
    .rule-title {
      font-weight: 700;
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      color: var(--accent, #b35c00);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .table-container {
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color, #dcd8d0);
    }
    th {
      background: var(--bg-tertiary, #eae6df);
      font-weight: 700;
    }
  </style>
</head>
<body class="reader-mode" data-theme="cream">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-left">
        <a href="../../index.html" class="back-link">&larr; Back to Library</a>
        <div class="header-divider"></div>
        <div class="header-title-group">
          <h1 class="header-book-title">Accurate Predictive Methodology</h1>
          <span class="header-book-author">Umang Taneja (Nadi / KP System)</span>
        </div>
      </div>
      <div class="reader-header-right">
        <div class="reading-stats">
          <span id="reading-time">30 min read</span>
          <span class="stats-separator">&bull;</span>
          <span id="unit-count">10 Knowledge Units</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme (Cream / Night / Pure White)">Theme</button>
          <button id="font-size-down" class="control-btn" title="Decrease Font Size">A-</button>
          <button id="font-size-up" class="control-btn" title="Increase Font Size">A+</button>
          <button id="toggle-view" class="control-btn primary" title="Switch between Deep Codex & Unit View">Toggle View</button>
        </div>
      </div>
    </header>

    <div class="reader-container">
      <aside class="reader-sidebar">
        <div class="sidebar-search">
          <input type="text" id="unit-search" placeholder="Search formulas, houses, rules...">
        </div>
        <nav class="sidebar-nav">
          <div class="nav-section-title">TABLE OF CONTENTS</div>
          <ul class="nav-list" id="unit-nav-list">
            <li class="nav-item active" data-target="master-overview"><a href="#master-overview">Executive Overview</a></li>
            <li class="nav-item" data-target="unit-1"><a href="#unit-1">U01: Three-Tier Hierarchy</a></li>
            <li class="nav-item" data-target="unit-2"><a href="#unit-2">U02: The Penultimate House</a></li>
            <li class="nav-item" data-target="unit-3"><a href="#unit-3">U03: Education & Grades</a></li>
            <li class="nav-item" data-target="unit-4"><a href="#unit-4">U04: Litigation & Jail</a></li>
            <li class="nav-item" data-target="unit-5"><a href="#unit-5">U05: Property & Assets</a></li>
            <li class="nav-item" data-target="unit-6"><a href="#unit-6">U06: Medical Astrology</a></li>
            <li class="nav-item" data-target="unit-7"><a href="#unit-7">U07: Vocational Destiny</a></li>
            <li class="nav-item" data-target="unit-8"><a href="#unit-8">U08: Matrimonial Dynamics</a></li>
            <li class="nav-item" data-target="unit-9"><a href="#unit-9">U09: Progeny & Children</a></li>
            <li class="nav-item" data-target="unit-10"><a href="#unit-10">U10: Longevity & RBT</a></li>
          </ul>
        </nav>
      </aside>

      <main class="reader-content" id="reader-content-body">
        <section id="master-overview" class="content-section">
          <div class="codex-banner">
            <div class="badge-tag">BKRS v2.0 MASTER CODEX</div>
            <h1 class="codex-title">Accurate Predictive Methodology</h1>
            <p class="codex-subtitle">The Mathematical & Algorithmic Blueprint of Nadi / KP Astrology</p>
            <div class="metadata-grid">
              <div class="meta-item"><span class="meta-label">Author:</span> <span class="meta-val">Umang Taneja</span></div>
              <div class="meta-item"><span class="meta-label">Tradition:</span> <span class="meta-val">Vedic / Nadi / KP Synthesis</span></div>
              <div class="meta-item"><span class="meta-label">Primary Tool:</span> <span class="meta-val">Nirayana Bhava Chalit + Sub-Lords</span></div>
              <div class="meta-item"><span class="meta-label">Standard:</span> <span class="meta-val">Replacement-Grade Technical Codex</span></div>
            </div>
          </div>

          <div class="rule-box">
            <div class="rule-title">Axiom of Nadi Predictive Precision</div>
            <p>Traditional Parashari astrology frequently drowns in contradictory yogas, aspects, and divisional chart conflicts. Umang Taneja formulates an objective, mathematically verifiable system where events are governed by <strong>Multi-House Clustering</strong>, the <strong>Law of the Penultimate (12th Relative) House</strong>, and the strict hierarchy where <strong>Sub-Lord &gt; Nakshatra Lord &gt; Planet</strong>.</p>
          </div>

          <h2>System Architecture: The 5 Foundations</h2>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Definition & Role</th>
                  <th>Hierarchy & Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nirayana Bhava Chalit</strong></td>
                  <td>Placidus unequal house cusps overlaid on the Sidereal Zodiac using Lahiri/KP Ayanamsha.</td>
                  <td>Rashi charts only show sign positions; Bhava Chalit dictates true house residency and lordship.</td>
                </tr>
                <tr>
                  <td><strong>Three-Tier Signification</strong></td>
                  <td>Planet &rarr; Nakshatra Lord &rarr; Sub-Lord coordinate matrix.</td>
                  <td>Sub-Lord is supreme arbiter; Nakshatra Lord specifies manifestation; Planet provides base energy.</td>
                </tr>
                <tr>
                  <td><strong>Law of the 12th House</strong></td>
                  <td>House $(N - 1)$ systematically mars, terminates, and negates House $N$.</td>
                  <td>6th severs 7th (divorce); 9th severs 10th (job loss); 5th cures 6th (disease recovery).</td>
                </tr>
                <tr>
                  <td><strong>Cuspal Sub-Lord (CSL)</strong></td>
                  <td>The Sub-Lord governing the initial cuspal degree of any house.</td>
                  <td>The absolute gatekeeper of the natal promise. If 7th CSL negates, marriage cannot endure.</td>
                </tr>
                <tr>
                  <td><strong>Vimshottari Dasa Trinity</strong></td>
                  <td>Dasa (Status) &rarr; Bhukti (Major Gain/Loss) &rarr; Antar (Precise Timing Window).</td>
                  <td>Dasa defines overall life status; Bhukti executes events; Antar pins the operational month.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- UNIT 1 -->
        <section id="unit-1" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 01</span>
            <h2>Epistemological Architecture: Nirayana Bhava Chalit, Cuspal Sub-Lords, and the Three-Tier Signification Matrix</h2>
            <div class="source-ref">Chapters 1 & 2: Characteristics of Planets, Houses & Signs & Rules of Nadi</div>
          </div>
          <div class="unit-body">
            <p>Predictive failure in classical Indian astrology stems primarily from relying on whole-sign Rashi charts. In high or low latitudes, houses can span from 18 degrees to over 40 degrees. A planet placed in the 10th sign may actually operate from the 9th or 11th Bhava.</p>
            
            <h3>The Three-Tier Signification Matrix</h3>
            <p>Every planet delivers results according to three distinct structural layers:</p>
            <ul>
              <li><strong>The Planet</strong>: Gives results of its Bhava Chalit residency and sign ownerships. This is the <em>source</em>.</li>
              <li><strong>The Nakshatra Lord</strong>: Specifies the primary field of experience and primary houses.</li>
              <li><strong>The Sub-Lord</strong>: The final decider. If the Sub-Lord negates the event, the promise collapses at the threshold.</li>
            </ul>

            <div class="rule-box">
              <div class="rule-title">Rahu and Ketu Coordinates Protocol</div>
              <p>Rahu and Ketu carry exceptional potency because they signify up to 10 houses simultaneously based on a strict 4-step sequence:</p>
              <ol>
                <li>Houses of planets conjunct with Rahu/Ketu.</li>
                <li>Houses of planets casting an aspect on Rahu/Ketu.</li>
                <li>Houses of the planetary ruler of the sign occupied by Rahu/Ketu.</li>
                <li>The physical house occupied by Rahu/Ketu in Nirayana Bhava Chalit.</li>
              </ol>
            </div>
          </div>
        </section>

        <!-- UNIT 2 -->
        <section id="unit-2" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 02</span>
            <h2>The Law of the Penultimate House: The 12th House Negation Mechanics and Multi-House Clustering</h2>
            <div class="source-ref">Chapter 2: Rules of Nadi Astrology</div>
          </div>
          <div class="unit-body">
            <p>The cardinal rule of Nadi Astrology states that the 12th house relative to any house destroys or terminates that house's significations:</p>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Target Domain</th>
                    <th>Fructifying Houses</th>
                    <th>Negating (12th Relative) Houses</th>
                    <th>Predictive Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Marriage</strong></td>
                    <td><span class="formula-badge badge-positive">2, 7, 11</span></td>
                    <td><span class="formula-badge badge-negative">1, 6, 10</span></td>
                    <td>6 negates 7 (marital rift); 1 negates 2 (family breakup); 10 negates 11 (loss of joy).</td>
                  </tr>
                  <tr>
                    <td><strong>Career / Job</strong></td>
                    <td><span class="formula-badge badge-positive">2, 6, 10, 11</span></td>
                    <td><span class="formula-badge badge-negative">5, 8, 9, 12</span></td>
                    <td>9 negates 10 (job loss); 5 negates 6 (resignation/termination); 8 brings disgrace.</td>
                  </tr>
                  <tr>
                    <td><strong>Property Purchase</strong></td>
                    <td><span class="formula-badge badge-positive">4, 11, 12</span></td>
                    <td><span class="formula-badge badge-negative">3, 5, 10</span></td>
                    <td>3 negates 4 (disposal of property); 10 negates 11 (loss of asset).</td>
                  </tr>
                  <tr>
                    <td><strong>Progeny / Children</strong></td>
                    <td><span class="formula-badge badge-positive">2, 5, 11</span></td>
                    <td><span class="formula-badge badge-negative">1, 4, 10</span></td>
                    <td>4 negates 5 (infertility/denial); 1 negates 2 (no family expansion).</td>
                  </tr>
                  <tr>
                    <td><strong>Health Recovery</strong></td>
                    <td><span class="formula-badge badge-positive">1, 5, 11</span></td>
                    <td><span class="formula-badge badge-negative">6, 8, 12</span></td>
                    <td>5 negates 6 (cures sickness); 11 negates 12 (ends hospitalization); 1 restores vitality.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- UNIT 3 -->
        <section id="unit-3" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 03</span>
            <h2>Educational Attainment: Cognitive Architecture, Exam Grading, and Academic Disciplines</h2>
            <div class="source-ref">Chapter 3: Education</div>
          </div>
          <div class="unit-body">
            <p>Education is divided into institutional learning (4th house), university/higher specialization (9th house), and raw intelligence/creativity (5th house). The 11th house signifies passing, awards, and distinctions.</p>

            <h3>Predictive Grade Matrix</h3>
            <ul>
              <li><span class="formula-badge badge-positive">4, 9, 11</span>: <strong>"A" Grade (Top Distinction)</strong> — complete mastery of syllabus, theoretical excellence, and examination triumph.</li>
              <li><span class="formula-badge badge-positive">4, 11</span>: <strong>"B" Grade (Above Average)</strong> — disciplined student who masters textbooks and clears exams cleanly.</li>
              <li><span class="formula-badge badge-neutral">5, 11</span>: <strong>High IQ / Underachiever</strong> — brilliant native who grasps concepts instantly but dislikes mechanical syllabus memorization.</li>
              <li><span class="formula-badge badge-neutral">4, 5, 9</span>: <strong>"C" Grade (Average)</strong> — intellectual interest and reading habits, but lacks House 11 to score high marks in rigid testing environments.</li>
              <li><span class="formula-badge badge-negative">6, 8, 12 mixed with 4</span>: <strong>Compartment / Failure</strong> — illness (6), anxiety/misfortune (8), or absence/disqualification (12) forcing re-examination.</li>
              <li><span class="formula-badge badge-positive">8, 12 with 4, 9, 11</span>: <strong>Scientific & Research Genius</strong> — 8th (uncovering the unknown) and 12th (laboratories, foreign institutes) produce breakthrough PhD researchers.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 4 -->
        <section id="unit-4" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 04</span>
            <h2>Litigation, Imprisonment, and Conflict Resolution: Legal Jurisprudence in the Horoscope</h2>
            <div class="source-ref">Chapter 4: Litigation</div>
          </div>
          <div class="unit-body">
            <p>Litigation is triggered by the friction triad: <strong>House 6</strong> (dispute, adversary), <strong>House 8</strong> (mental agony, legal penalties), and <strong>House 12</strong> (legal expenses, isolation, confinement).</p>

            <div class="rule-box">
              <div class="rule-title">Litigation Victory Hierarchy</div>
              <p>$$\mathbf{6, 11} > \mathbf{10, 11} > \mathbf{6, 10} > \mathbf{1, 6}$$</p>
              <p><strong>6, 11</strong> provides absolute victory with financial damages awarded. <strong>5, 9</strong> promotes amicable out-of-court settlements, as 5 terminates 6 and 9 terminates 10.</p>
            </div>

            <h3>Incarceration vs Legal Careers</h3>
            <ul>
              <li><strong>Arrest and Incarceration:</strong> <span class="formula-badge badge-negative">2, 3, 8, 12</span> under malefic DBA. (2 severed from family, 3 displaced from home, 8 confinement, 12 locked in jail cell).</li>
              <li><strong>Jailor / Prison Warden:</strong> <span class="formula-badge badge-neutral">2, 3, 8, 12</span> connected to <span class="formula-badge badge-positive">10, 11</span> (salaried employment inside a correctional facility).</li>
              <li><strong>Trial Lawyer / Advocate:</strong> <span class="formula-badge badge-positive">6, 8, 12</span> connected to <span class="formula-badge badge-positive">10, 11</span> with dominant Mercury and Mars.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 5 -->
        <section id="unit-5" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 05</span>
            <h2>Real Estate and Vehicular Acquisitions: Fixed Assets, Mortgages, and Disputed Properties</h2>
            <div class="source-ref">Chapter 5: Property & Vehicle</div>
          </div>
          <div class="unit-body">
            <p>Real estate transactions require coordination between the natural significators (<strong>Mars</strong> for land/construction, <strong>Saturn</strong> for old estates/real estate) and the operational house coordinates:</p>

            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Transaction Type</th>
                    <th>Formula</th>
                    <th>Analytical Mechanics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Direct Purchase</strong></td>
                    <td><span class="formula-badge badge-positive">4, 11, 12</span> + Mars/Saturn</td>
                    <td>4 (property), 11 (gain/ownership), 12 (capital investment outlay).</td>
                  </tr>
                  <tr>
                    <td><strong>Bank Financed / Loan</strong></td>
                    <td><span class="formula-badge badge-positive">4, 6, 11, 12</span></td>
                    <td>6th house introduces commercial debt, bank liabilities, and borrowing.</td>
                  </tr>
                  <tr>
                    <td><strong>Ancestral Inheritance</strong></td>
                    <td><span class="formula-badge badge-positive">4, 8, 11</span> (No 12th)</td>
                    <td>8th brings unearned legacy; 12th is absent because zero purchase money is spent.</td>
                  </tr>
                  <tr>
                    <td><strong>Joint Ownership</strong></td>
                    <td><span class="formula-badge badge-positive">3, 4, 11, 12</span></td>
                    <td>3rd house (12th from 4th) limits sole ownership, necessitating a co-owner.</td>
                  </tr>
                  <tr>
                    <td><strong>Property Sale</strong></td>
                    <td><span class="formula-badge badge-neutral">3, 5, 10, 12</span></td>
                    <td>Exact negation of purchase: 3 sells 4, 5 clears loans, 10 gives asset away, 12 liquidates.</td>
                  </tr>
                  <tr>
                    <td><strong>Disputed / Loss of Asset</strong></td>
                    <td><span class="formula-badge badge-negative">3, 6, 8, 12</span></td>
                    <td>Property confiscated, attached by courts, or lost to predatory litigation.</td>
                  </tr>
                  <tr>
                    <td><strong>Vehicle Purchase</strong></td>
                    <td><span class="formula-badge badge-positive">4, 11, 12</span> + Venus/Mars</td>
                    <td>Venus brings vehicular luxury; House 4 governs vehicles; House 3 indicates travel.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- UNIT 6 -->
        <section id="unit-6" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 06</span>
            <h2>Medical Astrology: Pathological Combinations, Surgery, Chronic Disease, and Healing Gates</h2>
            <div class="source-ref">Chapter 6: Health</div>
          </div>
          <div class="unit-body">
            <p>Medical astrology distinguishes between functional acute illness, chronic degenerative conditions, and full physiological recovery:</p>
            <ul>
              <li><strong>Acute Sickness:</strong> <span class="formula-badge badge-negative">House 6</span> (infection, fever, digestive trouble, curable ailments).</li>
              <li><strong>Chronic / Surgical Conditions:</strong> <span class="formula-badge badge-negative">House 8</span> (incurable illness, surgical intervention, agonizing pain, chronicity).</li>
              <li><strong>Hospitalization & Confinement:</strong> <span class="formula-badge badge-negative">House 12</span> (bed-rest, intensive care, quarantined treatment).</li>
            </ul>

            <div class="rule-box">
              <div class="rule-title">The Grand Biological Recovery Trinity: 1, 5, 11</div>
              <p>Whenever a native's DBA shifts into <span class="formula-badge badge-positive">1, 5, 11</span>, full recovery occurs:</p>
              <ul>
                <li><strong>House 5</strong> is 12th from 6th &rarr; Cures and eliminates the disease.</li>
                <li><strong>House 11</strong> is 12th from 12th &rarr; Terminates hospitalization and discharges the patient.</li>
                <li><strong>House 1</strong> &rarr; Rebuilds physical immunity, stamina, and vital longevity.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- UNIT 7 -->
        <section id="unit-7" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 07</span>
            <h2>Vocational Destiny: Service vs Enterprise, Promotions, Corporate Roles, and Professional Ruin</h2>
            <div class="source-ref">Chapters 8 & 11: Career & Financial Prospects and Corporate Astrology</div>
          </div>
          <div class="unit-body">
            <p>The definitive bifurcation between salaried employment and business enterprise lies in the 6th vs 7th house axis:</p>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Core Cluster</th>
                    <th>Planetary Signifiers</th>
                    <th>Phenomenology</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Salaried Job (Service)</strong></td>
                    <td><span class="formula-badge badge-positive">2, 6, 10, 11</span></td>
                    <td>Sun/Moon (Govt), Jup/Mer/Ven (MNC), Sat/Rahu (Small co.)</td>
                    <td>House 6 binds the native to employment contracts and monthly salaries.</td>
                  </tr>
                  <tr>
                    <td><strong>Commercial Business</strong></td>
                    <td><span class="formula-badge badge-positive">2, 7, 10, 11</span></td>
                    <td>Mercury (Trade), Venus (Luxury/Retail), Mars (Industry)</td>
                    <td>House 7 engages the public marketplace, trade clients, and commercial equity.</td>
                  </tr>
                  <tr>
                    <td><strong>Out-of-Turn Promotion</strong></td>
                    <td><span class="formula-badge badge-positive">2, 6, 10, 11</span></td>
                    <td>Benefic Dasa with strong 10-11 Bhukti and cusp transit</td>
                    <td>Rapid elevation into executive authority, large salary hikes.</td>
                  </tr>
                  <tr>
                    <td><strong>Job Loss / Demotion</strong></td>
                    <td><span class="formula-badge badge-negative">5, 8, 9, 12</span></td>
                    <td>Saturn, Rahu, Ketu afflicting 10th CSL</td>
                    <td>9 severs 10 (status lost); 5 severs 6 (contract ends); 8 brings disgrace.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- UNIT 8 -->
        <section id="unit-8" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 08</span>
            <h2>Matrimonial Dynamics: Alliance Settlement, Marital Disharmony, Divorce, and Extramarital Liaisons</h2>
            <div class="source-ref">Chapter 9: Marriage</div>
          </div>
          <div class="unit-body">
            <p>Marriage is governed by the addition of a family member (2nd house), the legal union with a spouse (7th house), and the fulfillment of emotional desires (11th house).</p>

            <h3>The Matrimonial Formulas</h3>
            <ul>
              <li><strong>Marriage Alliance:</strong> <span class="formula-badge badge-positive">2, 7, 11</span> operating in DBA with Venus or Jupiter.</li>
              <li><strong>Denial of Marriage:</strong> Cuspal Sub-Lord of 7th house signifies exclusively <span class="formula-badge badge-negative">1, 6, 10</span>. (Proposals continuously collapse; native remains unmarried).</li>
              <li><strong>Separation & Divorce:</strong> <span class="formula-badge badge-negative">1, 6, 10, 12</span> in active DBA. (6 breaks 7, 1 breaks 2, 10 breaks 11, 12 brings legal expenses and bed separation).</li>
              <li><strong>Extramarital Liaisons:</strong> <span class="formula-badge badge-neutral">5, 11, 12</span> active simultaneously. (5 romance, 11 pleasure, 12 secret bedroom intimacy).</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 9 -->
        <section id="unit-9" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 09</span>
            <h2>Progeny and Family Expansion: Conception, Childbirth, Barrenness, and Complications</h2>
            <div class="source-ref">Chapter 10: Children</div>
          </div>
          <div class="unit-body">
            <p>Progeny requires healthy reproductive capacity (5th house), addition to the family unit (2nd house), and successful fulfillment of desire (11th house).</p>
            <ul>
              <li><strong>Conception & Birth:</strong> <span class="formula-badge badge-positive">2, 5, 11</span> in operating DBA.</li>
              <li><strong>Total Barrenness / Denial:</strong> <span class="formula-badge badge-negative">1, 4, 10</span>. House 4 is 12th from 5th (denies conception); House 1 is 12th from 2nd (denies family expansion); House 10 is 12th from 11th. Even IVF will fail if 5th CSL signifies 1, 4, 10.</li>
              <li><strong>Abortion / Miscarriage:</strong> <span class="formula-badge badge-negative">5, 8, 12</span> along with Saturn, Ketu, or Rahu. The pregnancy is destroyed by the traumatic 8th and hospital-expelling 12th.</li>
            </ul>
          </div>
        </section>

        <!-- UNIT 10 -->
        <section id="unit-10" class="content-section">
          <div class="unit-header">
            <span class="unit-id">UNIT 10</span>
            <h2>Precision Rectification, Longevity Calculus, and Transit Micro-Timing Protocols</h2>
            <div class="source-ref">Chapters 12, 13, 15, 16 & 17: Longevity, RBT, Muhurat, Remedies & Twins</div>
          </div>
          <div class="unit-body">
            <h3>1. The Mathematical Longevity Formula</h3>
            <p>Longevity is quantitatively calculated by measuring the ratio of Life-Increasing houses against Death-Inflicting coordinates:</p>
            <div class="rule-box">
              <div class="rule-title">Quantitative Longevity Equation</div>
              <p>$$\text{Longevity (Years)} = \left( \frac{A}{A + B} \right) \times 120$$</p>
              <ul>
                <li><strong>Factor A (Life-Increasing):</strong> Occurrences of houses <strong>1, 5, 9, 10, 11</strong> across the 7 planets + nodes.</li>
                <li><strong>Factor B (Death-Inflicting):</strong> Occurrences of houses <strong>6, 8, 12 + Badhak House</strong>.</li>
                <li><strong>Badhak Classification:</strong> Movable Ascendant &rarr; 11th House; Fixed Ascendant &rarr; 9th House; Dual Ascendant &rarr; 7th House.</li>
              </ul>
            </div>

            <h3>2. The Four Ruling Planets (RP) Rectification Protocol</h3>
            <p>Birth Time Rectification (BTR) uses the cosmic snapshot of the exact moment an astrologer examines the query:</p>
            <ol>
              <li><strong>Day Lord (DL)</strong>: Planetary ruler of the day of query.</li>
              <li><strong>Moon Sign Lord (MSL)</strong>: Ruler of the zodiac sign occupied by the transiting Moon.</li>
              <li><strong>Moon Nakshatra Lord (MNL)</strong>: Ruler of the constellation occupied by the transiting Moon.</li>
              <li><strong>Ascendant Lord (AL)</strong>: Ruler of the rising sign at the query location.</li>
            </ol>
            <p>The native's true Ascendant Cusp Sub-Lord must be ruled by or directly linked to these active Ruling Planets.</p>

            <h3>3. Pinpoint Transit Micro-Timing Rules</h3>
            <p>Events materialize when transiting significators meet exact astronomical triggers:</p>
            <ul>
              <li>A transiting significator crosses within <strong>1 degree</strong> of the natal degree of an event planet.</li>
              <li>A transiting significator crosses within <strong>1 degree</strong> of the sensitive cuspal degree (e.g. Cusp 7 for marriage, Cusp 10 for career).</li>
              <li>Two significators conjunct within <strong>1 degree</strong> in the sky.</li>
              <li>The transiting Moon (if an event significator) triggers the conjunction point.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log('Successfully wrote knowledge-units.json for Accurate Predictive Methodology');

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
console.log(`Successfully wrote master-notes.md for Accurate Predictive Methodology (${masterNotesMarkdown.length} chars)`);

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully wrote index.html for Accurate Predictive Methodology (${readerHtml.length} chars)`);
