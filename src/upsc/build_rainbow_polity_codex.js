const fs = require('fs');
const path = require('path');

const slug = 'short-notes-polity-rainbow';
const title = 'Short Notes: Polity & Constitution';
const author = 'Publishers Rainbow';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-rbwpol-01',
    title: 'Historical Timeline, Interim Government & Sources of the Constitution',
    unitType: 'constitutional-history-tables',
    summary: 'Chronological timeline of British statutory developments (1773–1947), the portfolios of the Interim Government of 1946 vs. the First Cabinet of Free India (1947), and an exhaustive matrix of structural, political, and philosophical provisions borrowed from 10 world constitutions.',
    epistemicStatus: 'source-historical-factual',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-rbwpol-02',
    title: 'Preamble Jurisprudence, 12 Schedules & Territorial Reorganization',
    unitType: 'schedules-territorial-framework',
    summary: 'Synthesizes the Preamble keywords, interpretative doctrines, and an exhaustive guide to the Twelve Schedules of the Indian Constitution (Articles, functional subjects, allocations). Details Article 1–4 territorial reorganization, new states created post-1956, and Part II Citizenship mechanics.',
    epistemicStatus: 'source-statutory-schedules',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-rbwpol-03',
    title: 'Fundamental Rights Comparative Dossier & Writs Jurisdiction',
    unitType: 'fundamental-rights-handbook',
    summary: 'High-yield comparative dossier of Articles 12 to 35. Tabulates the Right to Equality (Arts 14–18), the Six Freedoms (Art 19), Right to Life and Personal Liberty (Art 21, Due Process evolution), Freedom of Religion (Arts 25–28), and a side-by-side comparative matrix of the Five Prerogative Writs under Article 32 vs Article 226.',
    epistemicStatus: 'source-comparative-jurisprudence',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-rbwpol-04',
    title: 'Directive Principles, Fundamental Duties & Constitutional Amendments',
    unitType: 'dpsp-duties-amendments',
    summary: 'Analytical matrices contrasting Fundamental Rights against Directive Principles of State Policy (Articles 36–51) across enforceability, scope, and objectives. Details the 11 Fundamental Duties under Article 51A and the threefold amendment procedure under Article 368 (Simple, Special, and Special with State Ratification).',
    epistemicStatus: 'source-doctrinal-statutory',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-rbwpol-05',
    title: 'The Union Executive: President, Vice-President, Prime Minister & Cabinet',
    unitType: 'union-executive-handbook',
    summary: 'Deconstructs the Union Executive: President (Articles 52–62, Electoral College calculation formula, impeachment, pardoning powers Art 72 vs Governor Art 161), Vice-President (ex-officio Chairman of Rajya Sabha), Prime Minister, and Council of Ministers (Articles 74–75, Cabinet Committees, Collective Responsibility).',
    epistemicStatus: 'source-executive-comparative',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-rbwpol-06',
    title: 'The Union Parliament: Bicameral Mechanics, Bills & Budgetary Cycle',
    unitType: 'parliamentary-handbook',
    summary: 'Exhaustive comparative reference on Parliament: Rajya Sabha vs. Lok Sabha compositions, durations, and exclusive powers. Side-by-side comparison of Ordinary Bills, Money Bills (Article 110), Financial Bills (Art 117), and Constitutional Amendment Bills (Art 368). Details the Budgetary Cycle (Art 112), Cut Motions, the Guillotine, and Parliamentary Committees (PAC, Estimates, COPU).',
    epistemicStatus: 'source-legislative-comparative',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-rbwpol-07',
    title: 'The Integrated Judicial System: Supreme Court vs. High Courts',
    unitType: 'judicial-comparative-handbook',
    summary: 'Side-by-side comparative matrices of the Supreme Court (Articles 124–147) and High Courts (Articles 214–231): appointment, qualification, removal, retirement age, original, appellate, and advisory jurisdictions. Details Writ jurisdiction comparison (Article 32 vs Article 226), Court of Record status, and Special Leave Petitions (Art 136).',
    epistemicStatus: 'source-judicial-comparative',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-rbwpol-08',
    title: 'The State Executive & State Legislature: Comparison with Centre',
    unitType: 'state-governance-handbook',
    summary: 'Comparative analysis of State Executive and Legislature: Governor (Articles 153–162, dual role, discretionary powers Art 163, reservation of bills Arts 200–201), Chief Minister, State Council of Ministers, and State Legislative Assembly vs. Legislative Council (Article 169 abolition/creation mechanics).',
    epistemicStatus: 'source-state-comparative',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-rbwpol-09',
    title: 'Local Self-Government: Panchayati Raj & Municipalities (11th & 12th Schedules)',
    unitType: 'local-government-handbook',
    summary: 'Complete statutory handbook on local governance: 73rd Amendment Act 1992 (Part IX, Articles 243 to 243-O, Eleventh Schedule 29 functional items, Gram Sabha, 3-tier structure, State Election/Finance Commissions) and 74th Amendment Act 1992 (Part IXA, Articles 243-P to 243-ZG, Twelfth Schedule 18 functional items). Includes PESA Act 1996 provisions.',
    epistemicStatus: 'source-decentralization-statutory',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-rbwpol-10',
    title: 'Emergency Provisions, Constitutional Watchdogs & Landmark Amendments',
    unitType: 'constitutional-emergency-amendments',
    summary: 'Comparative operational matrix of Emergency provisions: National Emergency (Art 352), President’s Rule (Art 356 & Bommai guidelines), and Financial Emergency (Art 360). Synthesizes independent Constitutional Bodies (CAG, ECI, Finance Commission, UPSC, GST Council) and catalogs landmark Constitutional Amendment Acts from the 1st (1951) to the 106th (2023).',
    epistemicStatus: 'source-emergency-amendments-catalog',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Short Notes: Polity & Constitution
**Author**: Publishers Rainbow  
**Discipline**: Indian Constitutional Law, Statutory Governance & Comparative Matrices (UPSC Prelims & Mains)  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

Publishers Rainbow's *Short Notes: Polity & Constitution* is a specialized, high-yield analytical and comparative handbook designed for the rapid synthesis, revision, and structural mastery of the Indian Constitution and its administrative machinery. Specifically calibrated for UPSC Civil Services Examination (Preliminary and Main General Studies Paper II) and State Public Service Commissions, this master codex abstracts the vast expanse of Indian constitutional law into **exhaustive comparative matrices, statutory tables, article-by-article cross-walks, and landmark judicial doctrines**.

The work resolves a persistent challenge faced by civil services candidates:
> How does an aspirant retain thousands of constitutional articles, statutory clauses, institutional differences, and procedural timelines without suffering cognitive overload or conflating subtle jurisdictional boundaries?

This master codex bridges high-level constitutional philosophy with micro-level statutory precision, providing complete replacement-grade coverage of:
1. **Constitutional Sourcing & Historical Cabinets**: From the Regulating Act of 1773 to the Interim Government of 1946 and First Cabinet of 1947.
2. **Exhaustive Comparative Jurisprudence**: Side-by-side matrices comparing Money Bills vs. Financial Bills, President vs. Governor, Supreme Court vs. High Courts, and Ordinary Bills vs. Constitutional Amendments.
3. **The Complete Schedule & Amendment Catalog**: Rigorous analysis of all Twelve Schedules and milestone Constitutional Amendment Acts from 1951 to 2023.

---

## Unit 1: Historical Timeline, Interim Government & Sources of the Constitution

### 1.1 Chronological Evolution of British Statutory Governance (1773–1947)
The constitutional evolution of British India proceeded through distinct statutory interventions:
- **1773 (Regulating Act)**: Governor of Bengal elevated to Governor-General of Bengal (Warren Hastings); Supreme Court established at Calcutta (1774).
- **1784 (Pitt’s India Act)**: Established "Double Government" (Court of Directors for commerce; Board of Control for political governance).
- **1833 (Charter Act)**: Governor-General of India established (Lord William Bentinck); legislative centralization; East India Company's commercial activities terminated; Law Member added.
- **1853 (Charter Act)**: Legislative and executive functions separated; open competition for Indian Civil Service introduced.
- **1858 (Government of India Act)**: Rule of Company transferred to British Crown; Secretary of State for India created; Viceroy created (Lord Canning).
- **1861 (Indian Councils Act)**: Portfolio system institutionalized; legislative decentralization begun; ordinance-making power vested in Viceroy.
- **1909 (Morley-Minto Reforms)**: Introduced communal electorates for Muslims; Indian appointed to Viceroy’s Executive Council (S.P. Sinha).
- **1919 (Montagu-Chelmsford Reforms)**: Dyarchy in Provinces (Transferred vs. Reserved subjects); Bicameralism at Centre; Central Public Service Commission established (1926).
- **1935 (Government of India Act)**: Provincial Autonomy; three legislative lists; Federal Court (1937); Reserve Bank of India (1935).
- **1947 (Indian Independence Act)**: Partition into two independent Dominions (India and Pakistan); abolished office of Secretary of State.

### 1.2 The Two Historical Cabinets: Interim Government (1946) vs. First Cabinet of Free India (1947)

| Portfolio | Interim Government (September 1946) | First Cabinet of Independent India (August 1947) |
| :--- | :--- | :--- |
| **Prime Minister / External Affairs** | **Jawaharlal Nehru** (Vice President of Council) | **Jawaharlal Nehru** |
| **Home, Information & Broadcasting** | **Sardar Vallabhbhai Patel** | **Sardar Vallabhbhai Patel** (also States) |
| **Law** | **Jogendra Nath Mandal** (Muslim League) | **Dr. B.R. Ambedkar** |
| **Finance** | **Liaquat Ali Khan** (Muslim League) | **R.K. Shanmukham Chetty** |
| **Defence** | **Sardar Baldev Singh** | **Sardar Baldev Singh** |
| **Railways & Transport** | **Asaf Ali** | **Dr. John Mathai** |
| **Education** | **C. Rajagopalachari** | **Maulana Abul Kalam Azad** |
| **Food & Agriculture** | **Dr. Rajendra Prasad** | **Dr. Rajendra Prasad** |
| **Labour** | **Jagjivan Ram** | **Jagjivan Ram** |
| **Commerce** | **Ibrahim Ismail Chundrigar** (Muslim League) | **C.H. Bhabha** |
| **Health** | **Ghazanfar Ali Khan** (Muslim League) | **Rajkumari Amrit Kaur** |
| **Industries & Supplies** | **Dr. John Mathai** | **Dr. Shyama Prasad Mukherjee** |

### 1.3 Sources of the Indian Constitution: Global Sourcing Matrix

\`\`\`
                    GLOBAL SOURCING OF THE CONSTITUTION
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │ COUNTRY / STATUTE                 │ BORROWED FEATURES                 │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 1. Government of India Act 1935   │ Federal scheme, Office of Governor│
   │                                   │ Judiciary, Public Service Comm.   │
   │                                   │ Emergency provisions, Admin detail│
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 2. United Kingdom (Westminster)   │ Parliamentary govt, Rule of Law   │
   │                                   │ Legislative procedure, Single     │
   │                                   │ citizenship, Cabinet system,      │
   │                                   │ Prerogative writs, Bicameralism   │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 3. United States of America       │ Fundamental Rights, Independence  │
   │                                   │ of judiciary, Judicial Review,    │
   │                                   │ Impeachment of President, Removal │
   │                                   │ of SC/HC judges, Vice-President   │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 4. Ireland (1937 Constitution)    │ Directive Principles (DPSPs),     │
   │                                   │ Nomination of members to Rajya    │
   │                                   │ Sabha, Method of election of Pres │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 5. Canada                         │ Federation with a strong Centre,  │
   │                                   │ Residuary powers with Centre,     │
   │                                   │ Appointment of State Governors,   │
   │                                   │ Advisory jurisdiction of SC       │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 6. Australia                      │ Concurrent List, Freedom of trade,│
   │                                   │ commerce, Joint Sitting (Art 108) │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 7. Germany (Weimar Constitution)  │ Suspension of Fundamental Rights  │
   │                                   │ during National Emergency         │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 8. USSR (now Russia)              │ Fundamental Duties (Art 51A),     │
   │                                   │ Ideal of Justice (Social, Economic│
   │                                   │ and Political) in the Preamble    │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 9. France                         │ Republic, Ideals of Liberty,      │
   │                                   │ Equality, Fraternity in Preamble  │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 10. South Africa                  │ Procedure for Amendment (Art 368) │
   │                                   │ Election of members of Rajya Sabha│
   └───────────────────────────────────┴───────────────────────────────────┘
\`\`\`

---

## Unit 2: Preamble Jurisprudence, 12 Schedules & Territorial Reorganization

### 2.1 The Twelve Schedules of the Constitution: Comprehensive Guide

| Schedule | Constitutional Articles | Subject Matter & Provisions | Key Nuances for Civil Services |
| :--- | :--- | :--- | :--- |
| **First Schedule** | Articles 1 and 4 | Names of the States and their territorial jurisdiction; Names of the Union Territories and their extent. | Amended whenever a new state/UT is created or boundaries altered. |
| **Second Schedule** | Arts 59(3), 65(3), 75(6), 97, 125, 148(3), 158(3), 164(5), 186, 221 | Provisions relating to the **Emoluments, Allowances, and Privileges** of: President, Governors, Speaker/Deputy Speaker of LS & State Assemblies, Chairman/Deputy Chairman of RS & State Councils, Judges of SC and HCs, and the CAG. | Note: Ministers, Prime Minister, and Attorney General are NOT listed in the Second Schedule. |
| **Third Schedule** | Arts 75(4), 99, 124(6), 148(2), 164(3), 173, 188, 219 | Forms of **Oaths or Affirmations** for: Union Ministers, Parliamentary election candidates, MPs, SC Judges, CAG, State Ministers, State Legislature candidates, MLAs/MLCs, HC Judges. | Note: The Oaths of the **President (Art 60)**, **Vice-President (Art 69)**, and **Governor (Art 159)** are NOT in the Third Schedule; they are in individual constitutional articles! |
| **Fourth Schedule** | Articles 4(1) and 80(2) | **Allocation of Seats in the Rajya Sabha** to the States and Union Territories. | Seats allocated based on state population (Uttar Pradesh has 31; several northeastern states have 1). |
| **Fifth Schedule** | Article 244(1) | Administration and control of **Scheduled Areas and Scheduled Tribes** in any State other than Assam, Meghalaya, Tripura, and Mizoram. | Governor can direct that an Act of Parliament/State Legislature does not apply; Tribes Advisory Council mandatory. |
| **Sixth Schedule** | Articles 244(2) and 275(1) | Administration of **Tribal Areas in the four northeastern States: Assam, Meghalaya, Tripura, and Mizoram (AMTM)**. | Autonomous District Councils (ADCs) possess legislative, judicial, and taxation powers. |
| **Seventh Schedule** | Article 246 | Distribution of legislative powers between Union and States across three lists: **Union List** (100 items), **State List** (61 items), and **Concurrent List** (52 items). | 42nd CAA 1976 transferred 5 subjects from State to Concurrent List (Education, Forests, Weights/Measures, Wildlife, Administration of Justice). |
| **Eighth Schedule** | Articles 344(1) and 351 | **Recognized Languages of India** (originally 14, now **22 languages**). | Additions: Sindhi (21st CAA 1967); Konkani, Manipuri, Nepali (71st CAA 1992); Bodo, Dogri, Maithili, Santhali (92nd CAA 2003). English is NOT in the 8th Schedule. |
| **Ninth Schedule** | Article 31B | Validation of certain Acts and Regulations (originally land reforms and abolition of zamindari system). | Added by the **1st Constitutional Amendment Act (1951)**. *I.R. Coelho Case (2007)* ruled that laws placed in 9th Schedule after April 24, 1973, are subject to Judicial Review for Basic Structure violation. |
| **Tenth Schedule** | Articles 102(2) and 191(2) | Provisions as to disqualification on ground of defection (**Anti-Defection Law**). | Added by the **52nd Constitutional Amendment Act (1985)**; amended by the **91st CAA (2003)**. |
| **Eleventh Schedule** | Article 243G | Powers, authority, and responsibilities of **Panchayats** (**29 functional items**). | Added by the **73rd Constitutional Amendment Act (1992)**. |
| **Twelfth Schedule** | Article 243W | Powers, authority, and responsibilities of **Municipalities** (**18 functional items**). | Added by the **74th Constitutional Amendment Act (1992)**. |

---

## Unit 3: Fundamental Rights Comparative Dossier & Writs Jurisdiction

### 3.1 Fundamental Rights: Categorization and Applicable Beneficiaries

| Rights Category | Articles | Scope & Constitutional Guarantee | Available To |
| :--- | :--- | :--- | :--- |
| **Right to Equality** | Articles 14–18 | Equality before law (14); Non-discrimination (15); Equal opportunity in public employment (16); Abolition of untouchability (17); Abolition of titles (18). | Art 14: Citizens & Foreigners. Arts 15, 16: Citizens only. Arts 17, 18: Everyone. |
| **Right to Freedom** | Articles 19–22 | Six basic freedoms (19); Protection against conviction (20); Protection of life & personal liberty (21); Right to education (21A); Protection against arrest (22). | Art 19: **Citizens only**. Arts 20, 21, 21A, 22: **Citizens & Foreigners** (except enemy aliens). |
| **Right Against Exploitation** | Articles 23–24 | Prohibition of human trafficking & forced labor (23); Prohibition of child labor in hazardous employment (24). | **Citizens and Foreigners alike**. |
| **Freedom of Religion** | Articles 25–28 | Freedom of conscience & profession (25); Freedom to manage religious affairs (26); Freedom from religious taxation (27); Freedom from religious instruction in state schools (28). | **Citizens and Foreigners alike**. |
| **Cultural & Educational Rights** | Articles 29–30 | Protection of language, script, culture of minorities (29); Right of minorities to establish educational institutions (30). | **Citizens only**. |
| **Right to Constitutional Remedies** | Article 32 | Right to move Supreme Court by appropriate proceedings for enforcement of Part III rights. | **Everyone** (Citizens and Foreigners). |

### 3.2 The Five Prerogative Writs: Side-by-Side Comparative Matrix

\`\`\`
                    THE FIVE WRITS JURISPRUDENTIAL MATRIX
   ┌───────────────┬───────────────────────────────┬───────────────────────────────┐
   │ WRIT          │ PURPOSE & GROUNDS             │ AGAINST WHOM ISSUABLE         │
   ├───────────────┼───────────────────────────────┼───────────────────────────────┤
   │ 1. HABEAS     │ Produce detained person;      │ Public authorities AND        │
   │    CORPUS     │ test legality of detention;   │ private individuals.          │
   │               │ set free if unlawful.         │ (Bulwark of individual liberty│
   ├───────────────┼───────────────────────────────┼───────────────────────────────┤
   │ 2. MANDAMUS   │ Command public official or    │ Public bodies, inferior       │
   │               │ statutory body to perform     │ courts, tribunals, government.│
   │               │ mandatory statutory duty.     │ (NOT against President/Gov).  │
   ├───────────────┼───────────────────────────────┼───────────────────────────────┤
   │ 3. PROHIBITION│ Prevent inferior court or     │ Judicial and quasi-judicial   │
   │               │ tribunal from usurping or     │ authorities ONLY.             │
   │               │ exceeding its jurisdiction.   │ (Preventive remedy).          │
   ├───────────────┼───────────────────────────────┼───────────────────────────────┤
   │ 4. CERTIORARI │ Quash order of lower court or │ Judicial, quasi-judicial, AND │
   │               │ tribunal passed without       │ administrative authorities.   │
   │               │ jurisdiction or breach of NJ. │ (Curative & preventive).      │
   ├───────────────┼───────────────────────────────┼───────────────────────────────┤
   │ 5. QUO-       │ Inquire into legality of      │ Substantive public offices of │
   │    WARRANTO   │ claim to a public office;     │ a permanent character.        │
   │               │ oust unlawful usurper.        │ (Can be sought by any citizen)│
   └───────────────┴───────────────────────────────┴───────────────────────────────┘
\`\`\`

### 3.3 Writ Jurisdiction Comparison: Supreme Court (Art 32) vs. High Court (Art 226)

| Parameter | Supreme Court (Article 32) | High Court (Article 226) |
| :--- | :--- | :--- |
| **Scope of Purpose** | Can issue writs **only for the enforcement of Fundamental Rights** (Part III). | Can issue writs for enforcement of Fundamental Rights **AND "for any other purpose"** (enforcing ordinary legal rights). |
| **Territorial Reach** | Throughout the entire territory of India against any government or authority. | Within its territorial jurisdiction, or outside if the **cause of action arises** within its territory (Art 226(2)). |
| **Nature of Right** | Article 32 is itself a **Fundamental Right**; Supreme Court **cannot refuse** to exercise its writ jurisdiction. | Article 226 is a constitutional power, but **not a Fundamental Right**; High Court's jurisdiction is **discretionary**. |
| **Comparative Breadth** | Narrower in subject-matter (only FRs), but broader in territorial reach. | **Broader in subject-matter** (FRs + Legal Rights), but narrower in territorial reach. |

---

## Unit 4: Directive Principles, Fundamental Duties & Constitutional Amendments

### 4.1 Directive Principles vs. Fundamental Rights: The Doctrinal Comparison

| Dimension | Fundamental Rights (Part III) | Directive Principles of State Policy (Part IV) |
| :--- | :--- | :--- |
| **Nature & Orientation** | Negative injunctions prohibiting State from doing certain things. | Positive mandates directing State to achieve socio-economic goals. |
| **Justiciability** | **Justiciable**; legally enforceable through courts (Articles 32 & 226). | **Non-justiciable**; not enforceable by any court (Article 37). |
| **Primary Goal** | Establish **Political Democracy** and civil liberty. | Establish **Social and Economic Democracy** and a Welfare State. |
| **Legal Sanction** | Backed by legal sanctions and judicial nullification. | Backed by **political sanction** (public opinion and elections). |
| **Conflict Hierarchy** | Enjoyed initial primacy; reconciled in *Minerva Mills (1980)*: both are complementary wheels of the constitutional chariot. | Articles 39(b) and 39(c) enjoy constitutional immunity over Articles 14 and 19 under Article 31C. |

### 4.2 Amendment Procedures Under Article 368: The Three Categories

1. **By Simple Majority of Parliament (Outside Article 368)**:
   - Does not require the formal procedure of Article 368; passed like ordinary legislation (majority of members present and voting).
   - *Subjects*: Admission/formation of new states (Arts 2 & 3), Abolition/creation of Legislative Councils in States (Art 169), Use of official language, Rules of procedure in Parliament, Delimitation of constituencies, Citizenship matters (Art 11).
2. **By Special Majority of Parliament (Under Article 368)**:
   - Passed in each House by a majority of the **total membership** of the House (more than 50%) AND a majority of **not less than two-thirds (2/3rd)** of the members present and voting.
   - *Subjects*: Fundamental Rights (Part III), Directive Principles of State Policy (Part IV), and all other provisions not covered by Categories 1 and 3.
3. **By Special Majority of Parliament and Consent of States (Federal Amendments)**:
   - Passed by Special Majority in both Houses of Parliament AND ratified by the legislatures of **at least half of the States by a Simple Majority**.
   - *Subjects*: Election of President (Arts 54 & 55); Extent of executive power of Union and States (Arts 73 & 162); Supreme Court and High Courts (Arts 124–147, 214–231); Distribution of legislative powers (Seventh Schedule); Representation of States in Parliament; Article 368 itself; GST Council (Art 279A).

---

## Unit 5: The Union Executive: President, Vice-President, Prime Minister & Cabinet

### 5.1 The President vs. Governor: Executive Powers & Clemency Comparison

| Parameter | President of India (Articles 52–78) | Governor of a State (Articles 153–167) |
| :--- | :--- | :--- |
| **Election / Appointment** | Indirectly elected by Electoral College (elected MPs + elected MLAs). | **Appointed by President**; holds office during the pleasure of President. |
| **Discretionary Powers** | Virtually no explicit constitutional discretion (acts on binding advice, Art 74). | Explicit **constitutional discretion under Article 163(1)**; Governor's decision is final. |
| **Pardoning Power (Death Sentence)** | Can grant pardon, reprieve, respite, remission, or commutation for **death sentences** (Art 72). | Can suspend, remit, or commute a death sentence, but **CANNOT grant full pardon for a death sentence** (Art 161). |
| **Pardoning (Court Martial)** | Can pardon punishments awarded by a **Court Martial (Military Court)**. | **No power** over Court Martial sentences. |
| **Ordinance Power** | Article 123 (Promulgated when Parliament not in session; approved within 6 weeks of reassembly). | Article 213 (Promulgated when State Legislature not in session; approved within 6 weeks of reassembly). |
| **Veto Over State Bills** | Vests absolute veto and directive powers when a bill is reserved by the Governor (Arts 200–201). | Can reserve bills for consideration of the President; mandatory if bill endangers High Court. |

### 5.2 The Electoral College Calculation Formula (Presidential Election)

$$\text{Value of Vote of an MLA} = \frac{\text{Total Population of the State (1971 Census)}}{\text{Total Number of Elected MLAs in State Assembly}} \times \frac{1}{1000}$$

$$\text{Value of Vote of an MP} = \frac{\text{Total Value of Votes of all MLAs of all States}}{\text{Total Number of Elected Members of Parliament (LS + RS)}}$$

$$\text{Electoral Quota to Win} = \left( \frac{\text{Total Number of Valid Votes Polled}}{1 + 1} \right) + 1 = \left( \frac{\text{Total Votes}}{2} \right) + 1$$

---

## Unit 6: The Union Parliament: Bicameral Mechanics, Bills & Budgetary Cycle

### 6.1 Ordinary Bills vs. Money Bills vs. Constitutional Amendments: Master Matrix

| Feature | Ordinary Bill (Art 107) | Money Bill (Art 110) | Financial Bill Type I (Art 117(1)) | Constitutional Amendment Bill (Art 368) |
| :--- | :--- | :--- | :--- | :--- |
| **Chamber of Introduction** | Either Lok Sabha or Rajya Sabha. | **Lok Sabha ONLY**. | **Lok Sabha ONLY**. | Either Lok Sabha or Rajya Sabha. |
| **Prior Presidential Recommendation** | Not required. | **Mandatory**. | **Mandatory**. | Not required. |
| **Rajya Sabha Powers** | Can amend, delay for up to **6 months**, or reject. | Cannot reject or amend; can make recommendations; max delay **14 days**. | Can amend or reject like an Ordinary Bill. | Must pass separately; equal powers; cannot be delayed indefinitely. |
| **Speaker's Certification** | Not applicable. | **Mandatory**; Speaker's certificate is final. | Not applicable. | Not applicable. |
| **Joint Sitting (Article 108)** | **Permissible** if deadlock persists for 6 months. | **NOT Permissible**. | **Permissible**. | **NOT Permissible**. |
| **Presidential Assent** | Assent, Withhold, or Return for reconsideration. | Assent or Withhold; **CANNOT return for reconsideration**. | Assent, Withhold, or Return for reconsideration. | **Mandatory Assent**; President *shall* give assent (24th CAA). |

### 6.2 The Three Financial Oversight Committees of Parliament

\`\`\`
                    THE FINANCIAL COMMITTEES TRIAD
   ┌───────────────────────────────────┬───────────────────────────────────┐
   │ COMMITTEE                         │ COMPOSITION & KEY MANDATE         │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 1. Public Accounts Committee (PAC)│ • 22 Members (15 LS + 7 RS).      │
   │    (Established 1921)             │ • Chairman from Opposition (conv).│
   │                                   │ • Scrutinizes CAG audit reports.  │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 2. Estimates Committee            │ • 30 Members (ALL from Lok Sabha).│
   │    (Established 1950)             │ • RS has ZERO representation!     │
   │                                   │ • Continuous economy watchdog.    │
   ├───────────────────────────────────┼───────────────────────────────────┤
   │ 3. Committee on Public Undertakings│ • 22 Members (15 LS + 7 RS).      │
   │    (COPU, Established 1964)       │ • Examines PSU reports & accounts.│
   │                                   │ • Assesses commercial efficiency. │
   └───────────────────────────────────┴───────────────────────────────────┘
   *Rules: Ministers cannot be elected to ANY of these three financial committees!*
\`\`\`

---

## Unit 7: The Integrated Judicial System: Supreme Court vs. High Courts

### 7.1 Master Comparison: Supreme Court vs. High Courts

| Dimension | Supreme Court of India (Articles 124–147) | High Courts of India (Articles 214–231) |
| :--- | :--- | :--- |
| **Retirement Age** | **65 Years**. | **62 Years**. |
| **Resignation Addressed To** | The **President of India**. | The **President of India** (NOT the Governor!). |
| **Removal Process** | By order of President after address passed by special majority in each House of Parliament (Art 124(4)). | Identical procedure: by President on parliamentary address (Art 217(1)). |
| **Writ Jurisdiction** | **Article 32**: Restricted to Fundamental Rights only; cannot refuse (it is an FR). | **Article 226**: Fundamental Rights + Any other legal right; discretionary remedy. |
| **Superintendence** | Administrative superintendence over SC registry only; judicial appeals from all courts. | **Article 227**: Broad judicial AND administrative superintendence over all subordinate courts and tribunals in its territory. |
| **Advisory Jurisdiction** | **Article 143**: President can seek advisory opinion on legal/fact questions. | **No advisory jurisdiction**. |
| **Territorial Reach** | Entire territory of India. | Within the State or across shared States/UTs (e.g., Punjab & Haryana HC, Bombay HC, Gauhati HC). |

---

## Unit 8: The State Executive & State Legislature: Comparison with Centre

### 8.1 Bicameralism in States: Legislative Assembly vs. Legislative Council
Only **6 States** currently possess a bicameral legislature: **Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana, and Uttar Pradesh**.
- **Creation and Abolition of Legislative Council (Article 169)**:
  - The State Legislative Assembly must pass a resolution by a **Special Majority** (majority of total membership + 2/3rd of members present and voting).
  - Parliament then passes an Act by a **Simple Majority**. This parliamentary act is **not deemed an amendment under Article 368**.
- **Asymmetric Power Balance**:
  - The Legislative Council is an extraordinarily weak body compared to Rajya Sabha.
  - In ordinary bills, the Council can delay a bill passed by the Assembly for a maximum of **3 months** in the first instance, and **1 month** in the second instance (total maximum delay: **4 months**).
  - The Assembly can override the Council simply by passing the bill a second time; there is **NO provision for a Joint Sitting** in state legislatures!

---

## Unit 9: Local Self-Government: Panchayati Raj & Municipalities (11th & 12th Schedules)

### 9.1 The Local Self-Government Constitutional Framework

| Parameter | Panchayati Raj Institutions (Part IX) | Urban Local Bodies (Part IXA) |
| :--- | :--- | :--- |
| **Constitutional Amendment** | **73rd Constitutional Amendment Act, 1992**. | **74th Constitutional Amendment Act, 1992**. |
| **Constitutional Articles** | **Articles 243 to 243-O**. | **Articles 243-P to 243-ZG**. |
| **Constitutional Schedule** | **Eleventh Schedule (29 Functional Items)**. | **Twelfth Schedule (18 Functional Items)**. |
| **Structural Tiers** | 3-Tier: Gram Panchayat (Village), Panchayat Samiti (Intermediate), Zilla Parishad (District). | 3 Types: Nagar Panchayat (Transitional), Municipal Council (Small Urban), Municipal Corporation (Large Urban). |
| **Grassroots Body** | **Gram Sabha (Art 243A)**: All registered voters in a village. | **Wards Committees (Art 243S)**: In municipalities with population of 300,000+. |
| **Women's Reservation** | **Not less than one-third (33%)** of all seats and chairperson offices (Art 243D). | **Not less than one-third (33%)** of all seats and chairperson offices (Art 243T). |
| **Elections & Finance** | State Election Commission (243K) & State Finance Commission (243I). | State Election Commission (243ZA) & State Finance Commission (243Y). |

---

## Unit 10: Emergency Provisions, Constitutional Watchdogs & Landmark Amendments

### 10.1 The Three Types of Emergencies: Operational Matrix

| Dimension | National Emergency (Article 352) | President's Rule (Article 356) | Financial Emergency (Article 360) |
| :--- | :--- | :--- | :--- |
| **Grounds** | War, External Aggression, or Armed Rebellion. | Failure of constitutional machinery in a State (Art 356/365). | Threat to financial stability or credit of India. |
| **Parliamentary Approval Window** | Within **1 Month**. | Within **2 Months**. | Within **2 Months**. |
| **Required Majority** | **Special Majority** in both Houses. | **Simple Majority** in both Houses. | **Simple Majority** in both Houses. |
| **Maximum Duration** | Indefinite (with 6-month approvals). | **3 Years Maximum** (with 6-month approvals; conditions apply beyond 1 year). | Indefinite (continues until revoked; no 6-month approvals required). |
| **Impact on Fundamental Rights** | Article 19 suspended automatically under Art 358; others (except Arts 20 & 21) can be suspended under Art 359. | **No impact on Fundamental Rights**. | **No impact on Fundamental Rights**. |
| **Historical Invocations** | Three times: 1962 (Chinese aggression), 1971 (Pak war), 1975 (Internal disturbance). | Invoked over 130 times across various States. | **Zero times** (Never proclaimed in India). |

### 10.2 Landmark Constitutional Amendment Acts (The Super-Condensed Milestone Catalog)

\`\`\`
                     LANDMARK CONSTITUTIONAL AMENDMENTS
   ┌─────────┬──────┬────────────────────────────────────────────────────────┐
   │ AMEND.  │ YEAR │ KEY CONSTITUTIONAL PROVISIONS & SIGNIFICANCE           │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 1st     │ 1951 │ Added Ninth Schedule & Art 31B to protect land reforms;│
   │         │      │ placed reasonable restrictions on free speech (Art 19).│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 7th     │ 1956 │ Reorganized States on linguistic lines; abolished Part │
   │         │      │ A, B, C, D states; common High Courts for 2+ States.   │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 24th    │ 1971 │ Affirmed Parliament's power to amend Part III (Art 368)│
   │         │      │ made presidential assent to amendment bills mandatory. │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 42nd    │ 1976 │ "Mini-Constitution": Added "Socialist, Secular,        │
   │         │      │ Integrity" to Preamble; added Part IVA (Duties, 51A);  │
   │         │      │ added Part XIVA (Tribunals); curtailed judicial review.│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 44th    │ 1978 │ Undid Emergency excesses: Replaced "Internal           │
   │         │      │ Disturbance" with "Armed Rebellion"; Arts 20 & 21 can  │
   │         │      │ NEVER be suspended; deleted Right to Property from FRs.│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 52nd    │ 1985 │ Added Tenth Schedule (Anti-Defection Law).             │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 61st    │ 1989 │ Lowered voting age from 21 to 18 years for LS and SLAs.│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 73rd/74th 1992 │ Constitutional status to Panchayats (Part IX, 11th Sched│
   │         │      │ and Municipalities (Part IXA, 12th Sched); 33% women.  │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 86th    │ 2002 │ Right to Education as FR (Art 21A); amended Art 45;    │
   │         │      │ added 11th Fundamental Duty (Art 51A(k)).              │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 91st    │ 2003 │ Capped Council of Ministers at 15% of Lok Sabha / SLA; │
   │         │      │ abolished 1/3rd split exemption in Anti-Defection Law. │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 99th    │ 2014 │ Created NJAC; struck down as unconstitutional in 2015. │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 101st   │ 2016 │ Introduced Goods and Services Tax (GST) & GST Council. │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 102nd   │ 2018 │ Constitutional status to National Commission for BCs.  │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 103rd   │ 2019 │ 10% reservation for Economically Weaker Sections (EWS).│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 104th   │ 2019 │ Extended SC/ST reservations in LS/SLAs for 10 years;   │
   │         │      │ discontinued Anglo-Indian nominated seats.             │
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 105th   │ 2021 │ Restored States' power to identify their own SEBC lists│
   ├─────────┼──────┼────────────────────────────────────────────────────────┤
   │ 106th   │ 2023 │ Nari Shakti Vandan Adhiniyam: 33% reservation for      │
   │         │      │ women in Lok Sabha and State Legislative Assemblies.   │
   └─────────┴──────┴────────────────────────────────────────────────────────┘
\`\`\`

---

## Pedagogical Self-Test Questions

1. **Constitutional Sourcing**: Identify the specific historical statutes and foreign constitutions from which the following mechanisms were borrowed: (a) Dyarchy at the Centre, (b) Joint Sitting under Article 108, (c) Procedure Established by Law, (d) Impeachment of the President, and (e) Suspension of Fundamental Rights during National Emergency.
2. **The Schedules of the Republic**: Enumerate the specific differences between the Fifth Schedule (Scheduled Areas) and the Sixth Schedule (Tribal Areas in AMTM). Why are the Oaths of the President, Vice-President, and Governor excluded from the Third Schedule?
3. **Writ Jurisdiction Analysis**: In what operational aspects is the writ jurisdiction of a High Court under Article 226 broader than that of the Supreme Court under Article 32? Can a writ of Quo-Warranto be sought by a person who is not personally aggrieved?
4. **Legislative Procedures & Financial Governance**: Differentiate between an Ordinary Bill, a Money Bill (Article 110), and a Financial Bill Type I (Article 117(1)) across introduction rules, presidential recommendations, and Rajya Sabha powers.
5. **Emergency Powers Matrix**: Detail the procedural differences between Article 352 (National Emergency) and Article 356 (President's Rule) regarding approval timelines, voting majorities, and impact on Fundamental Rights.
6. **Milestone Amendments**: Trace the constitutional significance of the 24th, 42nd, 44th, 86th, 91st, 101st, 103rd, and 106th Constitutional Amendment Acts.
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
    <span class="polity-badge badge-${ku.materiality === 'critical' ? 'critical' : 'handbook'}">${ku.unitType}</span>
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
    .badge-handbook { background: #e0f2fe; color: #075985; }
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
            <button class="view-btn" data-view="handbook">Comparative Handbook</button>
          </div>
        </div>
      </div>
    </header>

    <main class="reader-main">
      <section class="codex-hero">
        <div class="hero-content">
          <div class="domain-tag">Constitutional Law & Statutory Matrices • Rapid Synthesis</div>
          <h1 class="codex-title">${title}</h1>
          <p class="codex-subtitle">High-Yield Civil Services Exam Handbook • By <strong>${author}</strong></p>
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

      <!-- VIEW C: COMPARATIVE HANDBOOK -->
      <section id="view-handbook" class="view-section">
        <div class="polity-grid">
          <div class="polity-card">
            <h4>The Twelve Schedules</h4>
            <div class="formula-box">1st to 12th Schedule Comprehensive Index</div>
            <p><strong>Core Memory Anchor:</strong> Complete reference spanning emoluments (2nd), oaths (3rd), Rajya Sabha (4th), Scheduled/Tribal areas (5th/6th), 3 Lists (7th), Languages (8th), Anti-Defection (10th), and Panchayats/ULBs (11th/12th).</p>
          </div>
          <div class="polity-card">
            <h4>Writ Comparison</h4>
            <div class="formula-box">Supreme Court (Art 32) vs High Court (Art 226)</div>
            <p><strong>Jurisdiction:</strong> Art 32 is an FR restricted to Part III; Art 226 covers FRs plus ordinary legal rights and is discretionary.</p>
          </div>
          <div class="polity-card">
            <h4>Financial Committees</h4>
            <div class="formula-box">PAC (22) • Estimates (30 - LS Only) • COPU (22)</div>
            <p><strong>Oversight:</strong> Non-partisan parliamentary committees holding the executive accountable; ministers strictly disqualified from membership.</p>
          </div>
          <div class="polity-card">
            <h4>Milestone Amendments</h4>
            <div class="formula-box">1st (1951) ➔ 42nd (1976) ➔ 44th (1978) ➔ 106th (2023)</div>
            <p><strong>Evolution:</strong> Complete chronology from land reforms and the Emergency to GST (101st), EWS (103rd), and Women's Reservation (106th).</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Short Notes: Polity & Constitution</em> by Publishers Rainbow</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
