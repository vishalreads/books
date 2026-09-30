const fs = require('fs');
const path = require('path');

const slug = 'polity-notes-vedanta';
const title = 'Polity Notes for Civil Services';
const author = 'Vedanta IAS Academy';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-vedpol-01',
    title: 'Historical Underpinnings & Constitutional Evolution',
    unitType: 'constitutional-history',
    summary: 'Analyzes the progressive legislative trajectory from the Regulating Act of 1773 to the Indian Independence Act of 1947. Synthesizes key institutional mechanisms borrowed from colonial statutes, notably the Government of India Act of 1935, and evaluates the working, debates, and drafting committees of the Constituent Assembly.',
    epistemicStatus: 'source-historical-institutional',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-vedpol-02',
    title: 'The Preamble, Citizenship & The Territorial Union',
    unitType: 'constitutional-foundations',
    summary: 'Examines the philosophical identity of the Constitution through the Preamble, its amendability under Article 368, and the landmark rulings in Berubari (1960), Kesavananda (1973), and LIC (1995). Deconstructs Article 1–4 territorial reorganization and Part II Citizenship laws (Articles 5–11, Citizenship Act 1955, CAA 2019).',
    epistemicStatus: 'source-statutory-doctrinal',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-vedpol-03',
    title: 'Fundamental Rights: Structural Equality & Substantive Liberties (Part III)',
    unitType: 'fundamental-rights-governance',
    summary: 'Comprehensive analysis of Part III Fundamental Rights (Articles 12–35). Focuses on the expansive scope of Article 12, judicial review under Article 13, the equality code (Articles 14–18), the six freedoms (Article 19), the transformation of Article 21 from procedural to substantive due process (Maneka Gandhi, Puttaswamy), and the prerogative writs under Article 32.',
    epistemicStatus: 'source-jurisprudential-analytic',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-vedpol-04',
    title: 'Directive Principles, Civic Duties & Basic Structure Synthesis',
    unitType: 'normative-constitutional-dialectic',
    summary: 'Evaluates Part IV Directive Principles of State Policy (Articles 36–51) as the blueprint for an egalitarian welfare state. Deconstructs the historic conflict between Part III and Part IV (Champakam Dorairajan to Minerva Mills), Part IVA Fundamental Duties (Article 51A), and the judicial crystallization of the Basic Structure Doctrine.',
    epistemicStatus: 'source-normative-evaluative',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-vedpol-05',
    title: 'Federal Dynamics, Centre-State Relations & Emergency Provisions',
    unitType: 'federal-governance',
    summary: 'Dissects Indian federalism: the debate over its "quasi-federal" character, cooperative vs. coercive federalism, and the distribution of legislative, administrative, and financial powers (Articles 245–293, Sarkaria and Punchhi Commission recommendations). Analyzes Emergency governance under Articles 352, 356 (S.R. Bommai guidelines), and 360.',
    epistemicStatus: 'source-federal-statutory',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-vedpol-06',
    title: 'The Union Executive & Parliament: Procedures, Budget & Oversight',
    unitType: 'union-governance',
    summary: 'Analyzes the executive power of the Union: President (election, impeachment, pardoning power Art 72, ordinance power Art 123), Vice-President, Prime Minister, and Council of Ministers (collective responsibility Art 75). Details Parliamentary mechanics (Articles 79–122): bicameral procedures, Money Bills (Art 110), budgetary enactment (Art 112), and oversight committees (PAC, Estimates, COPU).',
    epistemicStatus: 'source-institutional-operational',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-vedpol-07',
    title: 'The Integrated Judicial System & Contemporary Judicial Governance',
    unitType: 'judicial-governance',
    summary: 'Examines the single integrated judicial hierarchy: Supreme Court (Articles 124–147) and High Courts (Articles 214–231). Analyzes the Collegium system, the NJAC controversy, Master of Roster, judicial pendency, All India Judicial Service (AIJS), Judicial Review, Judicial Activism, and Public Interest Litigation (PIL).',
    epistemicStatus: 'source-judicial-analytic',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-vedpol-08',
    title: 'The State Executive & Decentralized Governance (Panchayats & Municipalities)',
    unitType: 'decentralized-governance',
    summary: 'Deconstructs the State Executive: Governor (Articles 153–162, constitutional vs. discretionary roles under Art 163, appointment and removal controversies), Chief Minister, and State Legislature. Details the institutionalization of local self-government: 73rd Amendment Act 1992 (Panchayati Raj, 11th Schedule, PESA 1996) and 74th Amendment Act 1992 (Urban Local Bodies, 12th Schedule).',
    epistemicStatus: 'source-decentralization-statutory',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-vedpol-09',
    title: 'Constitutional Watchdogs: Financial, Electoral & Administrative Integrity',
    unitType: 'constitutional-oversight',
    summary: 'Evaluates the independent constitutional institutions safeguarding democratic governance: Comptroller and Auditor General (CAG, Arts 148–151), Election Commission of India (Art 324, Model Code of Conduct), Finance Commission (Art 280), Union and State Public Service Commissions (Arts 315–323), and the Goods and Services Tax (GST) Council (Art 279A).',
    epistemicStatus: 'source-oversight-institutional',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-vedpol-10',
    title: 'Statutory Bodies, Administrative Reforms & Political Dynamics',
    unitType: 'administrative-reforms-governance',
    summary: 'Investigates statutory and watchdog institutions: NHRC, NCW, CVC, CBI, and Lokpal & Lokayuktas. Evaluates civil services in a democracy, Second Administrative Reforms Commission (2nd ARC) recommendations on ethics and governance, the Anti-Defection Law (Tenth Schedule), electoral reforms, and the criminalization of politics.',
    epistemicStatus: 'source-governance-evaluative',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Polity Notes for Civil Services
**Author**: Vedanta IAS Academy  
**Discipline**: Indian Polity, Constitutional Architecture & Public Governance (UPSC CSE GS-II)  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

Vedanta IAS Academy's *Polity Notes for Civil Services* represents an authoritative, 894-page analytical and Mains-oriented pedagogical treatise on the Constitution of India, administrative institutions, and contemporary governance dynamics. Specifically engineered for the rigorous demands of the UPSC Civil Services Examination (Preliminary and Main GS Paper II) and State Public Service Commissions, this work bridges the gap between pure constitutional textual exposition and critical policy evaluation.

Where standard descriptive textbooks enumerate statutory articles, Vedanta IAS Academy formulates **analytical governance matrices, comparative constitutional frameworks, and institutional reform blueprints**. The treatise focuses intensely on the operational tensions of Indian democracy:
1. **The Dialectic of Executive Discretion vs. Constitutional Morality**: Examining the Governor's discretionary office, the President's rule under Article 356, and ordinance governance under Article 123.
2. **The Judicial Integrity Triad**: Analyzing judicial independence, the Collegium system, judicial overreach vs. activism, and the structural backlog of 50 million pending court cases.
3. **Substantive Democratic Decentralization**: Moving beyond the formal statutory text of the 73rd and 74th Constitutional Amendments to audit the structural deficits of local bodies: the chronic failure of **Funds, Functions, and Functionaries (3Fs)**.

---

## Unit 1: Historical Underpinnings & Constitutional Evolution

### 1.1 The Colonial Legal Trajectory: Centralization to Federalism
The constitutional architecture of the Republic of India is an evolutionary product of nearly two centuries of administrative experimentation under the East India Company and the British Crown:
- **The Phase of Centralization (1773–1833)**: Initiated by the Regulating Act of 1773 (subordinating Bombay and Madras Presidencies to Bengal) and culminating in the Charter Act of 1833 (which concentrated all legislative and military authority in the Governor-General of India, Lord William Bentinck).
- **The Phase of Devolution & Representative Councils (1861–1909)**: Initiated by the Indian Councils Act of 1861 (restoring legislative autonomy to Presidencies and introducing the Portfolio System). The 1892 Act introduced indirect elections, while the Morley-Minto Reforms (1909) institutionalized separate electorates for Muslims, introducing communalism into statutory law.
- **The Phase of Responsible Government & Dyarchy (1919–1935)**:
  - *Montagu-Chelmsford Reforms (1919)*: Introduced Dyarchy in the provinces, dividing subjects into **Transferred** (education, public health, local self-government under responsible ministers) and **Reserved** (law and order, finance, land revenue under the unaccountable executive council).
  - *Government of India Act of 1935*: The structural bedrock of the 1950 Constitution. It introduced **Provincial Autonomy**, abolished dyarchy at the provincial level, envisaged an All-India Federation with three legislative lists (Federal, Provincial, Concurrent), established the Federal Court (1937), and created the Reserve Bank of India (1935).

\`\`\`
                    INSTITUTIONAL BORROWINGS MATRIX
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │ SOURCE STATUTE / CONSTITUTION     │ ADOPTED CONSTITUTIONAL MECHANISM  │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ Government of India Act 1935      │ • Federal Scheme, Office of Gov,  │
   │                                   │   Judiciary, Emergency, PSCs      │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ British Constitution              │ • Parliamentary Govt, Rule of Law,│
   │                                   │   Legislative Procedure, Cabinet  │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ United States Constitution        │ • Fundamental Rights, Judicial    │
   │                                   │   Review, Impeachment of Pres     │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ Irish Constitution (1937)         │ • Directive Principles (DPSPs),   │
   │                                   │   Nomination to Rajya Sabha       │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ Australian Constitution           │ • Concurrent List, Joint Sitting  │
   │                                   │   (Art 108), Freedom of Trade     │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ Canadian Constitution             │ • Federation with Strong Centre,  │
   │                                   │   Residuary Powers to Union       │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ South African & USSR              │ • Amendment of Constitution (SA); │
   │                                   │   Fundamental Duties (USSR)       │
   └───────────────────────────────────┴───────────────────────────────────┘
\`\`\`

### 1.2 The Constituent Assembly: Debates, Dynamics & The Social Revolution
The Constituent Assembly was convened in December 1946 under the Cabinet Mission Plan. Granville Austin, the preeminent constitutional historian, characterized the drafting of the Indian Constitution as a seamless integration of three goals: **National Unity, Democratic Governance, and a Social Revolution**.
- **The Core Leadership & Committees**: While the Assembly comprised 299 members post-Partition, the core intellectual drafting was driven by the Drafting Committee chaired by **Dr. B.R. Ambedkar**, alongside key committees headed by **Jawaharlal Nehru** (Union Powers, Union Constitution), **Sardar Vallabhbhai Patel** (Provincial Constitution, Fundamental Rights and Minorities), and **Dr. Rajendra Prasad** (Rules of Procedure, Steering).
- **The Objective Resolution (December 13, 1946)**: Set forth the normative horizon: guaranteeing justice, equality, freedom, and safeguards for minorities and depressed classes, declaring that all power and authority of Sovereign Independent India is derived from the People.

---

## Unit 2: The Preamble, Citizenship & The Territorial Union

### 2.1 Preamble Jurisprudence: The Moral Compass
The Preamble is not merely an introductory prologue; it is the philosophical core and interpretative key to the entire Constitution.
- **Sovereignty**: India is internally supreme and externally independent. Membership in the Commonwealth of Nations or the United Nations does not curtail this constitutional status.
- **Socialism**: India adopted **Democratic Socialism** (a mixed-economy model aiming to eliminate poverty, ignorance, disease, and inequality of opportunity) rather than Marxist/Communist state-ownership socialism.
- **Secularism**: Unlike Western secularism (which enforces a strict "wall of separation" between church and state), Indian secularism embodies **Sarva Dharma Sambhava** (equal respect and protection for all religions, with state intervention permitted to eradicate social evils like untouchability and triple talaq).
- **The Judicial Evolution**:
  - *Berubari Union (1960)*: Preamble is not part of the Constitution.
  - *Kesavananda Bharati (1973)*: Reversed Berubari; held that the Preamble is an integral part of the Constitution, embodies the Basic Structure, and can be amended under Article 368 without altering basic features.
  - *42nd Amendment Act 1976*: Added "Socialist", "Secular", and "Integrity".

### 2.2 Reorganization of the Union (Articles 1 to 4)
- **Article 1**: India is an indestructible "Union of States."
- **Article 2 vs. Article 3**: Article 2 relates to admission or establishment of new territories outside the Union (e.g., admission of Sikkim via 35th and 36th CAAs 1974–75). Article 3 relates to the internal rearrangement of existing states (boundaries, names, mergers, splits).
- **The Linguistic Reorganization Commissions**:
  1. *S.K. Dhar Commission (1948)*: Recommended reorganization based on administrative convenience, rejecting purely linguistic lines.
  2. *JVP Committee (1948 - Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya)*: Concurred with Dhar Commission, advising postponement of linguistic states.
  3. *The Potti Sreeramulu Agitation (1952)*: 56-day hunger strike resulting in death forced the creation of the first linguistic state: **Andhra State (1953)**.
  4. *Fazl Ali Commission / States Reorganization Commission (1953)*: Accepted language as the broad basis of reorganization while rejecting the rigid "one language, one state" formula. Led to the **States Reorganisation Act, 1956** and the 7th Constitutional Amendment Act, creating 14 states and 6 union territories.

### 2.3 Citizenship Architecture (Part II, Articles 5 to 11)
- The Constitution does not establish permanent or exhaustive provisions for citizenship; it merely identified who became citizens at the commencement on **January 26, 1950** (Articles 5 to 8).
- **Article 11**: Plenary power granted to Parliament to regulate citizenship by law, resulting in the **Citizenship Act of 1955**:
  - *Modes of Acquisition*: Birth (*Jus Soli*), Descent (*Jus Sanguinis*), Registration, Naturalization, and Incorporation of Territory.
  - *Modes of Loss*: Renunciation (*voluntary surrender*), Termination (*automatic upon foreign naturalization, Art 9*), and Deprivation (*compulsory termination for disloyalty or fraud*).
- **Overseas Citizenship of India (OCI)**: Merged with PIO in 2015; grants multi-purpose, life-long visa to persons of Indian origin, but excludes voting rights, constitutional office eligibility, and agricultural land purchase.

---

## Unit 3: Fundamental Rights: Structural Equality & Substantive Liberties (Part III)

### 3.1 The Jurisprudential Architecture of Part III
Fundamental Rights (Articles 12–35) operate as negative injunctions against the State, preventing majoritarian tyranny and executive arbitrariness:
- **Article 12 (Definition of State)**: Defines the entities against which Part III rights are enforceable. In *Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002)*, the Supreme Court established the modern test: an entity is "State" if it is financially, functionally, and administratively dominated by or under the pervasive control of the Government.
- **Article 13 (Judicial Review & Fundamental Rights)**:
  - *Doctrine of Severability*: Only the unconstitutional provisions of an Act are struck down, leaving the remainder intact if valid provisions can operate independently (*A.K. Gopalan 1950*).
  - *Doctrine of Eclipse*: Pre-constitutional laws inconsistent with Fundamental Rights are not dead; they are merely overshadowed or eclipsed by the Fundamental Right, becoming operative again if the constitutional impediment is removed (*Bhikaji Narain Dhakras 1955*).
  - *Doctrine of Waiver*: A citizen cannot waive their Fundamental Rights, as they are established not merely for individual benefit but as public policy (*Basheshar Nath 1959*).

### 3.2 The Equality Code (Articles 14 to 18)
- **Article 14**: Comprises **Equality before the Law** (Rule of Law, Diceyan concept) and **Equal Protection of the Laws** (affirmative state obligation). In *E.P. Royappa (1974)* and *Maneka Gandhi (1978)*, Justice P.N. Bhagwati established the **New Doctrine of Equality**: equality is dynamic and antithetical to arbitrariness.
- **Affirmative Action & Social Justice (Articles 15 & 16)**:
  - Articles 15(4), 15(5), 16(4), and 16(4A) are not exceptions to Articles 14, 15(1), and 16(1); they are **emphatic restatements of substantive equality**, recognizing that treating unequals equally perpetuates inequality (*State of Kerala v. N.M. Thomas 1976*).
  - *The 50% Rule & The Creamy Layer*: Reaffirmed in *Indra Sawhney (1992)* and *M. Nagaraj (2006)*.
  - *103rd Amendment Act 2019*: Inserted Articles 15(6) and 16(6), providing up to 10% reservation for Economically Weaker Sections (EWS), upheld in *Janki v. Union of India (2022)* as not violating the Basic Structure.

### 3.3 The Golden Triangle: Articles 14, 19, and 21
In *Maneka Gandhi v. Union of India (1978)*, the Supreme Court struck down the "exclusivity of rights" doctrine established in *A.K. Gopalan (1950)*, ruling that Articles 14, 19, and 21 do not operate in silos; they form an inseparable **Golden Triangle**:
- Any law depriving a person of personal liberty under Article 21 must also satisfy the tests of reasonableness under Article 19 and non-arbitrariness under Article 14.
- **Article 21 Expanded Spectrum**:
  - Right to Live with Human Dignity (*Francis Coralie Mullin 1981*).
  - Right to a Clean and Pollution-Free Environment (*M.C. Mehta Cases*).
  - Right to Free Legal Aid (*Hussainara Khatoon 1979*).
  - Right against Solitary Confinement and Handcuffing (*Sunil Batra 1978*).
  - Right to Privacy as an Intrinsic Part of Life and Liberty (*K.S. Puttaswamy 2017*).
  - Right to Die with Dignity (Passive Euthanasia and Living Wills, *Common Cause 2018*).

---

## Unit 4: Directive Principles, Civic Duties & Basic Structure Synthesis

### 4.1 Directive Principles of State Policy (Articles 36 to 51)
The DPSPs constitute the affirmative, socio-economic obligations of the Indian State:
- While Fundamental Rights establish **Political Democracy**, Directive Principles aim to establish **Social and Economic Democracy**.
- **Justiciability vs. Enforceability**: Although Article 37 states that DPSPs are non-justiciable in courts, they are **fundamental in the governance of the country**. The Supreme Court frequently uses DPSPs to interpret the scope of Fundamental Rights and determine the "reasonableness" of restrictions under Article 19.

### 4.2 The Five-Decade Dialectic: FRs vs. DPSPs
The constitutional struggle over the relative primacy of individual liberty vs. collective welfare:

\`\`\`
                     THE EVOLUTION OF THE FR-DPSP BALANCE
   ┌─────────────────────────────────────────────────────────────────┐
   │ 1. State of Madras v. Champakam Dorairajan (1951)               │
   │    • FRs are sacrosanct; DPSPs must run subsidiary to them.     │
   ├─────────────────────────────────────────────────────────────────┤
   │ 2. Golaknath v. State of Punjab (1967)                          │
   │    • Parliament cannot abridge Part III even to implement DPSPs.│
   ├─────────────────────────────────────────────────────────────────┤
   │ 3. 25th Constitutional Amendment Act (1971) - Article 31C       │
   │    • Laws implementing Art 39(b) & (c) immune from Arts 14 & 19.│
   ├─────────────────────────────────────────────────────────────────┤
   │ 4. Kesavananda Bharati v. State of Kerala (1973)                │
   │    • Upheld Art 31C's first part; established Basic Structure.  │
   ├─────────────────────────────────────────────────────────────────┤
   │ 5. Minerva Mills v. Union of India (1980)                       │
   │    • Harmony and balance between Parts III & IV is Basic Feature.│
   └─────────────────────────────────────────────────────────────────┘
\`\`\`

### 4.3 Fundamental Duties (Part IVA, Article 51A)
- Added by the 42nd CAA 1976 upon the recommendation of the **Swaran Singh Committee**; expanded to 11 duties by the 86th CAA 2002.
- **Civic Significance**: Reminds citizens that rights cannot exist without corresponding civic obligations. In *AIIMS Students' Union v. AIIMS (2002)*, the Supreme Court held that Fundamental Duties are equally important as Directive Principles and must be used to construe constitutional and statutory provisions.

---

## Unit 5: Federal Dynamics, Centre-State Relations & Emergency Provisions

### 5.1 The Nature of Indian Federalism
Indian federalism is sui generis. It is characterized variously as:
- **"Quasi-Federal"** (K.C. Wheare)
- **"Cooperative Federalism"** (Granville Austin)
- **"Bargaining Federalism"** (Morris-Jones)
- **"Federation with a Centralizing Tendency"** (Sir Ivor Jennings)

The Indian Union was formed not through a compact among sovereign states (integrative federalism like the USA), but through the administrative devolution of a unitary empire into states (holding-together federalism).

### 5.2 Legislative, Administrative & Financial Balance (Articles 245–293)
- **Territorial & Subject-Matter Demarcation**: The Seventh Schedule distributes subjects across Union, State, and Concurrent Lists. Under Article 248, **Residuary Powers** reside exclusively with the Union Parliament.
- **Union Incursions into State List**:
  - *Article 249*: Resolution by Rajya Sabha supported by 2/3rd members present and voting.
  - *Article 250*: During operation of a National Emergency.
  - *Article 252*: Consent of two or more State Legislatures.
  - *Article 253*: Legislation to give effect to international agreements.
  - *Article 356*: When President's Rule is proclaimed in a State.
- **Financial Architecture**: The 101st Amendment Act (2016) replaced fragmented indirect taxes with the unified **Goods and Services Tax (GST)**, establishing the **GST Council (Article 279A)** as a landmark institutional experiment in shared federal sovereignty.

### 5.3 Emergency Provisions & The S.R. Bommai Safeguards
- **National Emergency (Article 352)**: Proclaimed on grounds of War, External Aggression, or Armed Rebellion. Requires Cabinet written advice and approval within one month by special majority. Under Article 358, Article 19 is suspended automatically; under Article 359, enforcement of other rights can be suspended by presidential order, **excluding Articles 20 and 21**.
- **President’s Rule (Article 356)**: Proclaimed when constitutional machinery breaks down. In *S.R. Bommai v. Union of India (1994)*, the Supreme Court established strict judicial limits:
  1. The proclamation is subject to **Judicial Review**.
  2. The State Legislative Assembly cannot be dissolved until Parliament approves the proclamation; prior to approval, the Assembly can only be suspended.
  3. If the Court strikes down the proclamation as unconstitutional, it has the power to **reinstate the dismissed state government and revive the dissolved Assembly**.
  4. The majority of the ministry must be tested on the **Floor of the House** (Floor Test), not in the Governor's private chambers.

---

## Unit 6: The Union Executive & Parliament: Procedures, Budget & Oversight

### 6.1 The Union Executive Architecture
- **The President of India (Articles 52 to 62)**: The executive power of the Union is formally vested in the President, exercised either directly or through subordinate officers (Article 53). In reality, under **Article 74(1)**, the President acts in accordance with the aid and advice of the Council of Ministers headed by the Prime Minister.
- **The Discretionary Space of the President**:
  1. Appointment of the Prime Minister when no single party commands a clear majority (*Hung Parliament*).
  2. Dismissal of a Council of Ministers that has lost the confidence of the Lok Sabha but refuses to resign.
  3. Dissolution of the Lok Sabha when the ministry has lost its majority and no alternative government can be formed.
  4. Power to send back Cabinet advice once for reconsideration under the 44th CAA 1978.

### 6.2 Parliament: The Sovereign Deliberative Assembly
Articles 79 to 122 govern the composition, duration, officers, procedures, and privileges of Parliament:
- **The Bicameral Balance**:
  - *Lok Sabha*: Represents the people; holds sole authority over Money Bills (Article 110) and executive confidence (Article 75).
  - *Rajya Sabha*: Represents the States; permanent chamber; exercises exclusive federal powers under **Article 249** (authorizing parliamentary legislation on State List) and **Article 312** (authorizing creation of new All-India Services by 2/3rd majority).
- **Parliamentary Devices for Executive Accountability**:
  - *Question Hour*: First hour of every sitting; starred questions (oral answer + supplementaries), unstarred questions (written answer), short notice questions.
  - *Zero Hour*: Indian procedural innovation (since 1962); starts immediately after Question Hour for raising urgent public matters without prior notice.
  - *Adjournment Motion*: Extraordinary device to draw attention to a definite matter of urgent public importance; requires support of 50 members; involves an element of censure against the government.
  - *No-Confidence Motion*: Introduced only in Lok Sabha (Rule 198); requires support of 50 members; if passed, ministry must resign.
- **The Budgetary Cycle & Parliamentary Financial Control**:
  - *Article 112 (Annual Financial Statement)*: Expenditure charged on the Consolidated Fund (non-votable) vs. Expenditure made from the Consolidated Fund (votable).
  - *Cut Motions*: Policy Cut (reduce to ₹1), Economy Cut (specified amount), Token Cut (reduce by ₹100).
  - *The Guillotine*: Applied on the final allotted day to pass all outstanding Demands for Grants without discussion, highlighting executive dominance over parliamentary time.
- **Parliamentary Privileges (Article 105 & 194)**:
  - Individual Privileges: Freedom of speech in Parliament (Art 105(1)); immunity from court proceedings for anything said or vote given (Art 105(2)); freedom from civil arrest 40 days before and after sessions (does not extend to criminal arrest or preventive detention).
  - Collective Privileges: Right to publish reports, right to exclude strangers, right to punish members and outsiders for breach of privilege or contempt of the House.

---

## Unit 7: The Integrated Judicial System & Contemporary Judicial Governance

### 7.1 The Supreme Court: Apex Constitutional Arbiter
India's unified judicial hierarchy places the Supreme Court at the pinnacle:
- **Appointment & The Collegium Controversy**:
  - Evolved through the *First Judges Case (1981)*, *Second Judges Case (1993)*, and *Third Judges Case (1998)*.
  - The Collegium system (CJI + 4 senior-most SC judges) maintains judicial primacy in appointments.
  - *The Fourth Judges Case (2015)* struck down the National Judicial Appointments Commission (NJAC, 99th CAA), ruling that executive presence in judicial appointments infringes upon the **Independence of the Judiciary**, a Basic Feature.
- **The Jurisdictional Matrix**:
  - *Article 131*: Original jurisdiction for federal disputes.
  - *Article 32*: Direct writ jurisdiction for Fundamental Rights enforcement.
  - *Article 136*: Special Leave Petitions (extraordinary discretionary appellate power).
  - *Article 142*: Power to pass decrees necessary for doing **"Complete Justice."**
  - *Article 143*: Advisory jurisdiction upon presidential reference.

### 7.2 Contemporary Challenges in Judicial Governance
1. **The "Master of the Roster" Dilemma**: The Chief Justice of India possesses administrative authority to allocate cases and constitute benches. In 2018, four senior-most judges held an unprecedented press conference, demanding transparent and objective bench allocation to prevent executive interference.
2. **Structural Pendency**: Over 50 million cases are pending across Indian courts (over 80,000 in the Supreme Court, 6 million in High Courts, and 44 million in District Courts). Causes include low judge-to-population ratio (roughly 21 judges per million people, compared to 50–100 in developed democracies), excessive government litigation, and procedural adjournments.
3. **All India Judicial Service (AIJS, Article 312)**: Long-debated reform to create a centralized, meritocratic cadre for District Judges analogous to the IAS/IPS, supported by the Law Commission but opposed by several High Courts and States defending federal autonomy.
4. **Public Interest Litigation (PIL) & Epistolary Jurisdiction**:
   - Conceived in the late 1970s by Justices P.N. Bhagwati and V.R. Krishna Iyer (*SP Gupta v. Union of India 1981*, *Bandhua Mukti Morcha 1984*).
   - Relaxed the traditional doctrine of *Locus Standi*: any public-spirited citizen or NGO can approach the higher judiciary on behalf of the poor, marginalized, and oppressed whose fundamental rights are violated.
   - Letters and postcards treated as writ petitions (Epistolary jurisdiction).
   - *Judicial Overreach Risk*: The court acting as a "Third Chamber of Legislature" or running municipal administrations (e.g. canceling spectrum licenses, banning diesel vehicles, running cricket boards), diluting the doctrine of Separation of Powers.

---

## Unit 8: The State Executive & Decentralized Governance (Panchayats & Municipalities)

### 8.1 The Office of the Governor: Constitutional Linchpin or Centre's Agent?
Articles 153 to 167 govern the State Executive. The Governor occupies a dual capacity:
1. Constitutional Head of the State, acting on the advice of the State Council of Ministers.
2. Direct Representative and Agent of the Union Government.

#### Major Controversies Concerning the Governor:
- **Discretionary Powers under Article 163**: Unlike the President, the Governor enjoys explicit constitutional discretion. Controversies arise over:
  - Invoking Article 356 (President's Rule).
  - Reserving State legislative bills for Presidential consideration under Article 200.
  - Selecting the Chief Minister in a fractured assembly (*Hung Assembly*).
  - Sanctioning prosecution of state ministers.
- **Commissions' Recommendations**:
  - *Sarkaria Commission (1988)*: The Governor should be an eminent person from outside the state, not actively involved in politics in the recent past, appointed only after effective consultation with the state Chief Minister.
  - *Punchhi Commission (2010)*: Recommended a fixed 5-year term for Governors; removal should be through state legislative impeachment rather than arbitrary central dismissal at the "pleasure of the President."
  - *Shamsher Singh (1974) & Nabam Rebia (2016)*: The Supreme Court ruled that the Governor must act on ministerial advice in all matters except those explicitly covered by discretionary provisions.
  - *State of Punjab v. Principal Secretary (2023)*: The Supreme Court held that Governors cannot sit indefinitely on bills passed by the State Legislature under Article 200, emphasizing that parliamentary democracy cannot be held hostage by unelected governors.

### 8.2 Democratic Decentralization: The 73rd & 74th Amendments
The institutionalization of local self-government represented the greatest deepening of grassroots democracy in modern history:
- **73rd Constitutional Amendment Act (1992)**:
  - Inserted **Part IX** (Articles 243 to 243-O) and the **Eleventh Schedule** (29 functional subjects).
  - Created a mandatory three-tier structure (Gram Panchayat, Panchayat Samiti, Zilla Parishad).
  - Mandated **not less than one-third (33%) reservation for women** in all seats and offices of chairpersons.
  - Established the **State Election Commission (Article 243K)** and **State Finance Commission (Article 243I)**.
- **The PESA Act of 1996**: Extended Panchayati Raj to Fifth Schedule areas, recognizing tribal customary laws, community ownership of minor forest produce, and empowering Gram Sabhas with mandatory consent powers over land acquisition.
- **The Structural Deficit (The 3Fs)**: Panchayati Raj institutions remain crippled by inadequate devolution of **Funds** (heavy dependence on tied grants), **Functions** (states reluctant to transfer administrative subjects), and **Functionaries** (lack of dedicated technical and administrative staff).
- **Urban Governance Under the 74th Amendment Act (1992)**:
  - Created Urban Local Bodies (Municipal Corporations, Municipal Councils, Nagar Panchayats) under Part IXA and the **Twelfth Schedule** (18 subjects).
  - Structural pathologies: weak, indirectly elected Mayors with 1-year terms subordinated to state-appointed IAS Municipal Commissioners; chronic municipal tax base erosion; lack of spatial planning consolidation by District Planning Committees (Art 243ZD).

---

## Unit 9: Constitutional Watchdogs: Financial, Electoral & Administrative Integrity

### 9.1 Comptroller and Auditor General of India (CAG, Articles 148 to 151)
- Appointed by the President; removable only on the same grounds and manner as a Supreme Court Judge.
- Audits all expenditure from the Consolidated Fund of India, Consolidated Funds of States, and Contingency/Public Accounts.
- Conducts **Regulatory Audit** (compliance with laws) and **Propriety Audit** (examining wisdom, economy, and efficiency of public expenditure to uncover waste and extravagance).
- Works in tandem with the **Public Accounts Committee (PAC)**, serving as its *"friend, philosopher, and guide."*

### 9.2 Election Commission of India (Article 324)
- Vested with the superintendence, direction, and control of elections to Parliament, State Legislatures, and the offices of President and Vice-President.
- Enforces the **Model Code of Conduct (MCC)**, an operational convention created in 1968 that acquired moral and regulatory authority to ensure a level playing field during election cycles.
- *Anoop Baranwal v. Union of India (2023)*: The Supreme Court ruled that the appointment of the CEC and ECs must be made by the President on the advice of a committee comprising the Prime Minister, Leader of the Opposition in Lok Sabha, and the Chief Justice of India. (Subsequent legislation in late 2023 replaced the CJI with a Union Cabinet Minister nominated by the PM).

### 9.3 The Finance Commission (Article 280)
- Quasicjudicial body appointed every five years by the President.
- Recommends: 1. The vertical division of tax revenues between Union and States; 2. The horizontal allocation among States based on population, area, forest cover, income distance, and demographic performance; 3. Principles governing grants-in-aid under Article 275.

---

## Unit 10: Statutory Bodies, Administrative Reforms & Political Dynamics

### 10.1 Key Statutory Watchdogs
1. **Central Vigilance Commission (CVC)**: Apex anti-corruption watchdog conceived on the recommendations of the **Santhanam Committee (1964)** and given statutory status in 2003. Exercises superintendence over the CBI in corruption cases under the Prevention of Corruption Act.
2. **Central Bureau of Investigation (CBI)**: Premier investigating agency operating under the *Delhi Special Police Establishment (DSPE) Act, 1946*. Controversies over "Caged Parrot" perception; requires state general consent under Section 6 of DSPE Act, which several states have revoked.
3. **Lokpal and Lokayuktas Act, 2013**: Anti-corruption ombudsman covering public servants, including the Prime Minister (subject to specific national security and international relations exclusions).

### 10.2 Second Administrative Reforms Commission (2nd ARC) Blueprints
Headed by Veerappa Moily, the 2nd ARC delivered 15 comprehensive reports on governance:
- *Report 1: Right to Information - Master Key to Good Governance.*
- *Report 4: Ethics in Governance* (recommending strict code of ethics, fast-track anti-corruption courts, whistle-blower protection, and reforming Article 311).
- *Report 6: Local Governance - An Inspiring Journey into the Future.*
- *Report 10: Refurbishing of Personnel Administration - Scaling New Heights* (advocating lateral entry, performance-linked tenure, and specialized civil service streams).

### 10.3 The Anti-Defection Jurisprudence (Tenth Schedule)
The 52nd Constitutional Amendment Act (1985) introduced the Tenth Schedule to curb political opportunism:
- **Disqualification Grounds**: Voluntarily giving up party membership (inferred conduct under *Ravi Naik 1994*), voting or abstaining against party whip, independent members joining any political party, and nominated members joining a party after 6 months.
- **The Abolition of the Split Defence**: The 91st CAA 2003 deleted the provision protecting splits of 1/3rd members; defection is protected only if there is a **Merger of at least two-thirds (2/3rd)** of the legislative party into another political party.
- **Landmark Judicial Precedents**:
  - *Kihoto Hollohan (1992)*: Upheld the Tenth Schedule, but held that the Speaker's adjudication is subject to **Judicial Review**.
  - *Nabam Rebia (2016)*: The Supreme Court ruled that a Speaker cannot proceed with disqualification petitions under the Tenth Schedule if a prior resolution seeking the Speaker's own removal is pending before the House.
  - *Subhash Desai v. Principal Secretary (2023 - Maharashtra Political Crisis)*: A unanimous 5-judge Constitution Bench clarified that:
    1. The Speaker must recognize the whip authorized by the **Political Party** (parent party organization), not merely the **Legislature Party** (elected MLAs/MPs).
    2. A split within a legislature party without an institutional merger into another party does not protect rebel lawmakers from disqualification under the Tenth Schedule.
    3. The Governor cannot enter the political arena to trigger a floor test without objective material demonstrating that the incumbent government has lost majority support.

### 10.4 Electoral Reforms & Criminalization of Politics
- **Section 8 of Representation of the People Act 1951**: Disqualifies individuals convicted of specified offenses or sentenced to imprisonment of 2+ years for a period of 6 years post-release.
- *Lily Thomas (2013)*: Struck down Section 8(4), removing the unconstitutional 3-month protection window for sitting lawmakers.
- *Public Interest Foundation (2018)*: Directed political parties to publish criminal antecedents of candidates in newspapers, television, and official websites within 48 hours of selection.
- *Association for Democratic Reforms (ADR 2024)*: Unanimous Constitution Bench struck down the Electoral Bond Scheme as unconstitutional, establishing that voters have a fundamental right to know the financial contributors backing political parties under Article 19(1)(a).

---

## Pedagogical Self-Test Questions

1. **Evolution of Due Process**: Contrast the judicial doctrine established in *A.K. Gopalan (1950)* with the transformative interpretation in *Maneka Gandhi (1978)*. How does the "Golden Triangle" of Articles 14, 19, and 21 protect citizens against executive arbitrariness?
2. **Federal Equilibrium & Emergency Rule**: What are the specific constitutional and judicial safeguards articulated in the *S.R. Bommai (1994)* ruling to prevent the misuse of Article 356 by the Union executive?
3. **Democratic Decentralization Auditing**: Why have Panchayati Raj institutions struggled to realize genuine local self-governance despite the 73rd Constitutional Amendment Act? Analyze the structural deficits across the "3Fs" (Funds, Functions, and Functionaries).
4. **Judicial Appointments & Independence**: Trace the trajectory of the Collegium system through the First, Second, Third, and Fourth Judges Cases. Why did the Supreme Court invalidate the National Judicial Appointments Commission (NJAC) in 2015?
5. **The Governor's Constitutional Role**: Discuss the constitutional ambiguities surrounding the discretionary powers of the Governor under Article 163. How do the Sarkaria and Punchhi Commission recommendations seek to resolve Centre-State friction regarding this office?
6. **Integrity Institutions**: Critically assess the role of the Comptroller and Auditor General (CAG) as the "Guardian of the Public Purse." How does the partnership between the CAG and the Public Accounts Committee (PAC) enforce executive financial accountability?
`;

// Write knowledge-units.json
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

// Write master-notes.md
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

// Render prose HTML for index.html
const proseHtml = masterNotes.replace(/# Master Codex:[\s\S]*?---\n/, '').split('\n\n').map(p => {
  const trimmed = p.trim();
  if (trimmed.startsWith('## ')) return `<h2>${trimmed.replace('## ', '')}</h2>`;
  if (trimmed.startsWith('### ')) return `<h3>${trimmed.replace('### ', '')}</h3>`;
  if (trimmed.startsWith('#### ')) return `<h4>${trimmed.replace('#### ', '')}</h4>`;
  if (trimmed.startsWith('$$')) return `<div class="formula-box">${trimmed.replace(/\$\$/g, '')}</div>`;
  if (trimmed.startsWith('- ')) return `<ul>${trimmed.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('')}</ul>`;
  if (trimmed.startsWith('```')) {
    const codeContent = trimmed.replace(/```[a-z]*\n?/g, '').trim();
    return `<pre><code>${codeContent}</code></pre>`;
  }
  if (trimmed.startsWith('| ')) return `<p><em>[Comparative Table rendered in Master Codex Markdown]</em></p>`;
  if (trimmed.startsWith('> ')) return `<blockquote><p>${trimmed.replace('> ', '')}</p></blockquote>`;
  return `<p>${trimmed}</p>`;
}).join('\n');

const unitsHtml = knowledgeUnits.map(ku => `
  <div class="unit-card" id="${ku.id}">
    <span class="polity-badge badge-${ku.materiality === 'critical' ? 'critical' : 'governance'}">${ku.unitType}</span>
    <h3>Unit ${ku.order}: ${ku.title}</h3>
    <p class="unit-summary">${ku.summary}</p>
    <div class="unit-meta">
      <span>Status: <strong>${ku.epistemicStatus}</strong></span> •
      <span>Materiality: <strong>${ku.materiality}</strong></span>
    </div>
  </div>
`).join('');

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Master Knowledge Codex</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    .polity-badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    .badge-critical { background: #fee2e2; color: #991b1b; }
    .badge-governance { background: #e0f2fe; color: #075985; }
    .formula-box {
      background: var(--bg-surface-secondary, #f8fafc);
      border-left: 4px solid var(--accent, #3b82f6);
      padding: 1rem;
      margin: 1rem 0;
      font-family: monospace;
      font-size: 0.95rem;
      border-radius: 0 4px 4px 0;
    }
    .polity-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .polity-card {
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 8px;
      padding: 1.25rem;
      background: var(--bg-surface, #ffffff);
    }
    .polity-card h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--text-primary, #0f172a);
    }
    blockquote {
      border-left: 4px solid var(--accent, #3b82f6);
      margin: 1.25rem 0;
      padding: 0.75rem 1.25rem;
      background: var(--bg-surface-secondary, #f8fafc);
      font-style: italic;
    }
    pre {
      background: var(--bg-surface-secondary, #f8fafc);
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 0.85rem;
      line-height: 1.4;
      border: 1px solid var(--border-color, #e2e8f0);
    }
  </style>
</head>
<body class="reader-mode">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="breadcrumb">
          <a href="../../index.html">Library</a> &rsaquo;
          <a href="../../index.html#upsc">Civil Services & Governance</a> &rsaquo;
          <span>${title}</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
          <div class="view-toggles">
            <button class="view-btn active" data-view="journey">Source Journey</button>
            <button class="view-btn" data-view="map">Knowledge Units</button>
            <button class="view-btn" data-view="framework">Governance Matrix</button>
          </div>
        </div>
      </div>
    </header>

    <main class="reader-main">
      <section class="codex-hero">
        <div class="hero-content">
          <div class="domain-tag">Indian Polity & Public Administration • Mains Analytical Codex</div>
          <h1 class="codex-title">${title}</h1>
          <p class="codex-subtitle">Complete Civil Services Examination Notes • By <strong>${author}</strong></p>
          <div class="codex-meta">
            <span>BKRS v2.0 Standard</span> •
            <span>10 Atomic Knowledge Units</span> •
            <span>Complete Structural Substitution</span>
          </div>
        </div>
      </section>

      <!-- VIEW A: SOURCE JOURNEY -->
      <section id="view-journey" class="view-section active">
        <article class="prose-content">
          ${proseHtml}
        </article>
      </section>

      <!-- VIEW B: KNOWLEDGE MAP -->
      <section id="view-map" class="view-section">
        <div class="units-grid">
          ${unitsHtml}
        </div>
      </section>

      <!-- VIEW C: GOVERNANCE MATRIX -->
      <section id="view-framework" class="view-section">
        <div class="polity-grid">
          <div class="polity-card">
            <h4>The Golden Triangle</h4>
            <div class="formula-box">Article 14 ◄► Article 19 ◄► Article 21</div>
            <p><strong>Maneka Gandhi (1978):</strong> Interlocking rights guaranteeing that state actions depriving life or liberty must be just, fair, reasonable, and non-arbitrary.</p>
          </div>
          <div class="polity-card">
            <h4>S.R. Bommai Guidelines (1994)</h4>
            <div class="formula-box">Article 356 Subject to Judicial Review</div>
            <p><strong>Federal Safeguard:</strong> Assembly cannot be dissolved without prior Parliamentary ratification; floor test is mandatory.</p>
          </div>
          <div class="polity-card">
            <h4>The 3Fs Deficit in Local Governance</h4>
            <div class="formula-box">Funds (Tied Grants) • Functions (Retained) • Functionaries (Deficit)</div>
            <p><strong>2nd ARC Audit:</strong> Grassroots democracy in Panchayats and ULBs remains truncated without fiscal and administrative empowerment.</p>
          </div>
          <div class="polity-card">
            <h4>Integrity Architecture</h4>
            <div class="formula-box">CAG (Art 148) • ECI (Art 324) • CVC • Lokpal</div>
            <p><strong>Watchdogs:</strong> Independent constitutional and statutory oversight preventing executive malfeasance and upholding administrative accountability.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Polity Notes for Civil Services</em> by Vedanta IAS Academy</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
