const fs = require('fs');
const path = require('path');

const slug = 'indian-economy-key-concepts-sankarganesh';
const title = 'Indian Economy: Key Concepts';
const author = 'Sankarganesh K.';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-sankar-01',
    title: 'Foundations of Economic Science & Resource Allocation',
    unitType: 'paradigm-foundation',
    summary: 'Sankarganesh establishes economics as the science of scarcity and choice. Deconstructs Micro vs. Macro, Positive vs. Normative economics, opportunity cost, and the three fundamental questions of economic organization (What, How, and For Whom to produce) across Capitalist, Socialist, and Mixed Economic Systems.',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-sankar-02',
    title: 'National Income Accounting: GDP, GVA, and Factor-to-Market Conversions',
    unitType: 'macroeconomic-accounting',
    summary: 'Exhaustive deconstruction of National Income aggregates: GDP, NDP, GNI, NNI, GNDI, and GDIH. Formulates the 2015 Indian national accounts revision from Factor Cost to Basic Prices and Market Prices. Explains GVA methodology across 8 core sectors, the Base Year effect, and Nominal vs. Real GDP through the GDP Deflator.',
    epistemicStatus: 'source-mathematical',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-sankar-03',
    title: 'Human Development Metrics & The Capability Paradigm',
    unitType: 'developmental-measurement',
    summary: 'Deconstructs Amartya Sen and Mahbub ul Haq’s Human Development Index (HDI) across health (life expectancy), education (mean and expected years of schooling), and standard of living (GNI per capita in PPP$). Analyzes IHDI (Inequality-adjusted HDI), Gender Inequality Index (GII), and the Multidimensional Poverty Index (MPI) with its 10 weighted indicators.',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-sankar-04',
    title: 'Poverty & Unemployment: Methodologies, Committees & Labor Dynamics',
    unitType: 'socio-economic-diagnostic',
    summary: 'Chronological evaluation of Indian poverty estimation committees: Alagh (1979 calories: 2400 rural / 2100 urban), Lakdawala (1993 state-specific CPI), Tendulkar (2009 mixed reference period basket), and Rangarajan (2014 food + essential non-food). Dissects types of unemployment (disguised, structural, frictional, cyclical) and labor metrics: LFPR, WPR, and UR across UPS, UPSS, and CDS approaches.',
    epistemicStatus: 'source-historical-policy',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-sankar-05',
    title: 'Public Finance, Deficit Geometry & Fiscal Responsibility',
    unitType: 'fiscal-architecture',
    summary: 'Anatomy of the Union Budget: Revenue Account vs. Capital Account. Mathematical derivation of Revenue Deficit, Fiscal Deficit, Primary Deficit, and Effective Revenue Deficit. Analyzes fiscal drag, monetization of deficit, debt-to-GDP sustainability, and the evolution of the FRBM Act (2003) and N.K. Singh Committee recommendations.',
    epistemicStatus: 'source-mathematical-policy',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-sankar-06',
    title: 'Constitutional Architecture: Fiscal Federalism & Tax Devolution',
    unitType: 'constitutional-institutional',
    summary: 'Constitutional governance of Indian economic life: Article 280 (Finance Commission horizontal and vertical tax devolution criteria), Article 279A (GST Council voting mechanics: 1/3 Center, 2/3 States, 75% majority), Article 266 (Consolidated Fund & Public Account), and Article 267 (Contingency Fund). Explores cesses and surcharges as non-shareable revenue.',
    epistemicStatus: 'source-legal-institutional',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-sankar-07',
    title: 'Money Stock Measures, High-Powered Money & The Banking Multiplier',
    unitType: 'monetary-mechanics',
    summary: 'RBI monetary aggregates: M0 (Reserve Money / High-Powered Money), M1 (Narrow Money), M2, M3 (Broad Money), and M4. Formulates the Money Multiplier formula (m = (1 + c) / (c + r)) influenced by Currency-Deposit ratio (c) and Reserve-Deposit ratio (r). Deconstructs the velocity of money and Fisher’s Equation of Exchange (MV = PT).',
    epistemicStatus: 'source-mathematical',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-sankar-08',
    title: 'Financial System Architecture: Money Markets vs. Capital Markets',
    unitType: 'financial-markets',
    summary: 'Comprehensive survey of the Indian financial architecture. Short-term Money Market instruments: Call/Notice Money, Treasury Bills (91, 182, 364 days), Commercial Paper (CP), and Certificates of Deposit (CD). Long-term Capital Market: Primary vs. Secondary markets, Equity vs. Debt, Bond Yield dynamics, Inverted Yield Curves, and Derivative mechanics (Forwards, Futures, Options, Swaps).',
    epistemicStatus: 'source-institutional',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-sankar-09',
    title: 'Inflation Dynamics, Indices & RBI Monetary Policy Framework',
    unitType: 'monetary-policy',
    summary: 'Inflation taxonomy: Demand-pull, Cost-push, Built-in, Creeping, Galloping, Hyperinflation, and Stagflation. Comparative analysis of CPI (Combined, base 2012, Laspeyres index) vs. WPI (base 2011-12, headline wholesale prices, excludes services). RBI’s Flexible Inflation Targeting (FIT) regime (4% ± 2% under Section 45ZA of RBI Act) via the Monetary Policy Committee (MPC) using Repo, SDF, MSF, and CRR/SLR.',
    epistemicStatus: 'source-analytical-policy',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-sankar-10',
    title: 'External Sector: Balance of Payments, Foreign Capital & WTO Architecture',
    unitType: 'international-economics',
    summary: 'Double-entry Balance of Payments (BoP) structure: Current Account (Merchandise Trade, Services, Remittances/Transfers, Income) vs. Capital Account (FDI, FPI/FII, External Commercial Borrowings, NRI Deposits). Explains Current Account Deficit (CAD), Capital Account Convertibility (Tarapore Committees), NEER, REER, PPP, and WTO multilateral architecture (MFN, National Treatment, Agreement on Agriculture Green/Amber/Blue boxes).',
    epistemicStatus: 'source-macroeconomic',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Indian Economy: Key Concepts
**Author**: Sankarganesh K.  
**Discipline**: Macroeconomic Foundations, Quantitative Accounting & Indian Policy Architecture  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

Sankarganesh K.'s *Indian Economy: Key Concepts* serves as the authoritative, mathematically rigorous conceptual grammar for understanding macroeconomic operations in India. While standard economic textbooks frequently bury students under descriptive rhetoric or ideological debates, Sankarganesh isolates the **invariant mechanical principles, mathematical identities, balance sheet mechanics, and constitutional provisions** that govern economic governance in India.

The core premise of the codex is that economic literacy requires mastering three interconnected layers:
1. **The Definitional & Accounting Layer**: How national income (GDP, GVA), inflation (CPI, WPI), money supply (M0 through M3), and external trade (BoP) are mathematically defined, compiled, and reported by the Central Statistics Office (CSO/NSO) and the Reserve Bank of India (RBI).
2. **The Institutional & Constitutional Layer**: How the Constitution of India (Articles 266, 267, 279A, 280), regulatory bodies (SEBI, RBI, CCI, IRDAI), and statutory frameworks (FRBM Act, Insolvency and Bankruptcy Code) govern the flow of money, credit, and taxation.
3. **The Policy & Market Transmission Layer**: How monetary policy tools (Repo, Reverse Repo, SDF, MSF, CRR, SLR) and fiscal policy allocations (Capital vs. Revenue expenditure) transmit through commercial banks and bond markets to alter real output, employment, and external equilibrium.

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE SANKARGANESH MACROECONOMIC ARCHITECTURE                │
│                                                                             │
│  LAYER 1: ACCOUNTING IDENTITIES (GDP, GVA, M0-M3, CPI/WPI, BoP Accounts)    │
│           │                                                                 │
│           ▼                                                                 │
│  LAYER 2: INSTITUTIONAL & CONSTITUTIONAL RULES (Art 280, GST Council, FRBM)│
│           │                                                                 │
│           ▼                                                                 │
│  LAYER 3: TRANSMISSION MECHANISMS (MPC Repo Rate ──► Bond Yields ──► Real GVA)│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 1: Foundations of Economic Science & Resource Allocation

### 1. The Definitional Triad of Economics
- **Lionel Robbins Scarcity Definition (1932)**: Economics is the science which studies human behavior as a relationship between ends and scarce means which have alternative uses. Scarcity necessitates choice; choice creates **Opportunity Cost**—the value of the next best alternative foregone.
- **Microeconomics vs. Macroeconomics**:
  - *Microeconomics*: Analyzes individual decision-makers (households, firms), price determination in specific markets, and resource allocation efficiency (Pareto optimality).
  - *Macroeconomics*: Analyzes aggregate phenomena—National Income, aggregate demand/supply, systemic inflation, total unemployment, business cycles, and balance of payments. Coined by Ragnar Frisch (1933) and operationalized by John Maynard Keynes (1936).
- **Positive vs. Normative Economics**:
  - *Positive*: Descriptive, value-free analysis of "what is" based on observable empirical facts (e.g., "A repo rate hike lowers inflation").
  - *Normative*: Prescriptive, value-based analysis of "what ought to be" (e.g., "The government should spend 6% of GDP on public healthcare").

### 2. The Three Fundamental Economic Questions & Comparative Systems
Every economy faces three universal allocative dilemmas:
1. **What to produce and in what quantities?** (Capital goods vs. Consumer goods).
2. **How to produce?** (Labor-intensive techniques vs. Capital-intensive technology).
3. **For whom to produce?** (Distribution of output: Market purchasing power vs. Universal social entitlement).

| Economic System | Ownership of Factors of Production | Allocation Mechanism | Motivation & Role of State | Historical / Real-World Paradigm |
|---|---|---|---|---|
| **Capitalist (Market) Economy** | Private ownership of capital and land | Price Mechanism (Invisible Hand of Supply and Demand) | Profit maximization; Laissez-faire state limited to defense, law, and property rights | US, Hong Kong, classical Adam Smith framework |
| **Socialist (Command) Economy** | State/Collective ownership of all resources | Central Planning Commission (Gosplan) | Social welfare; elimination of private profit and class distinctions | Soviet Union, Pre-1978 China, North Korea |
| **Mixed Economy** | Coexistence of Public Sector and Private Sector | Dual mechanism: Market forces guided by strategic state regulation and planning | Balancing profit efficiency with social equity and infrastructure provision | Post-1947 India (Industrial Policy Resolution 1948 & 1956) |

---

## Structural Pillar 2: National Income Accounting & The 2015 Methodological Revision

National Income Accounting measures the monetary value of the total flow of goods and services produced within an economy over a financial year (April 1 to March 31 in India).

### 1. The Core National Income Aggregates

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       NATIONAL INCOME AGGREGATE DERIVATIONS                 │
│                                                                             │
│  GROSS DOMESTIC PRODUCT (GDP)                                               │
│    (-) Depreciation (Consumption of Fixed Capital)                          │
│    ═════════════════════════════════════════════════════════════════════    │
│  = NET DOMESTIC PRODUCT (NDP)                                               │
│                                                                             │
│  GROSS DOMESTIC PRODUCT (GDP)                                               │
│    (+) Net Factor Income from Abroad (NFIA = Factor Inflow - Factor Outflow)│
│    ═════════════════════════════════════════════════════════════════════    │
│  = GROSS NATIONAL INCOME (GNI)                                              │
│                                                                             │
│  GROSS NATIONAL INCOME (GNI)                                                │
│    (-) Depreciation                                                         │
│    ═════════════════════════════════════════════════════════════════════    │
│  = NET NATIONAL INCOME (NNI) [National Income at Market Prices]             │
│                                                                             │
│  NET NATIONAL INCOME (NNI)                                                  │
│    (+) Net Current Transfers from Rest of the World (Remittances, Gifts)    │
│    ═════════════════════════════════════════════════════════════════════    │
│  = GROSS / NET NATIONAL DISPOSABLE INCOME (GNDI / NNDI)                     │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 2. The 2015 CSO National Accounts Revision
In January 2015, the Central Statistics Office (CSO, now NSO under MoSPI) overhauled the national accounting methodology to align with the **United Nations System of National Accounts 2008 (SNA 2008)**:
1. **Headline Growth Indicator Shifted**: Headline GDP shifted from **GDP at Factor Cost** to **GDP at Market Prices** (termed simply as GDP).
2. **Introduction of Basic Prices**: Created a three-tier pricing model:
   - **Factor Cost (FC)**: Cost of factors of production (Rent + Wages + Interest + Profit).
   - **Basic Prices (BP)**: Factor Cost + Production Taxes - Production Subsidies. *(Production taxes are paid irrespective of output volume: stamp duty, land revenue, municipal tax).*
   - **Market Prices (MP)**: Basic Prices + Product Taxes - Product Subsidies. *(Product taxes are levied per unit of output: GST, excise, customs, sales tax).*
   $$\text{GVA at Basic Prices} = \text{Compensation of Employees} + \text{Operating Surplus} / \text{Mixed Income} + \text{Depreciation} + (\text{Production Taxes} - \text{Production Subsidies})$$
   $$\text{GDP at Market Prices} = \sum \text{GVA at Basic Prices} + (\text{Product Taxes} - \text{Product Subsidies})$$
3. **Database Expansion**: Shifted from Annual Survey of Industries (ASI) factory-level sampling to the Ministry of Corporate Affairs **MCA-21 database** (tracking over 500,000 active registered companies).
4. **Base Year Update**: Updated the base year from 2004–05 to 2011–12.

### 3. Nominal GDP, Real GDP & The GDP Deflator
- **Nominal GDP**: Value of goods and services evaluated at current market prices of the reporting year. Distorted by inflation.
- **Real GDP**: Value of goods and services evaluated at constant prices of the base year (2011–12). Measures actual physical expansion of volume.
- **The GDP Deflator**: The most comprehensive indicator of domestic inflation because it covers all goods and services produced domestically (unlike CPI and WPI, which track a fixed consumer basket):
  $$\text{GDP Deflator} = \left( \frac{\text{Nominal GDP}}{\text{Real GDP}} \right) \times 100$$
  $$\text{Inflation Rate via Deflator} = \text{GDP Deflator}_{\text{Current}} - \text{GDP Deflator}_{\text{Previous}}$$

---

## Structural Pillar 3: Human Development & Multi-Dimensional Welfare Indices

Economic growth (quantitative expansion of GDP) is a necessary but insufficient condition for **Economic Development** (qualitative expansion of living standards, health, education, and institutional freedom).

### 1. The Human Development Index (HDI)
Designed by Mahbub ul Haq and Amartya Sen in 1990 for the United Nations Development Programme (UNDP). Synthesizes three core dimensions:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                          THE THREE DIMENSIONS OF HDI                        │
│                                                                             │
│  DIMENSION 1: LONG & HEALTHY LIFE                                           │
│  - Indicator: Life Expectancy at Birth (Goalposts: 20 to 85 years)          │
│  - Dimension Index = (Actual Value - 20) / (85 - 20)                        │
│                                                                             │
│  DIMENSION 2: KNOWLEDGE (EDUCATION)                                         │
│  - Indicators: (a) Mean Years of Schooling for adults aged 25+ (0 to 15 yrs)│
│               (b) Expected Years of Schooling for children (0 to 18 yrs)    │
│  - Education Index = (Arithmetic Mean of the two sub-indices)               │
│                                                                             │
│  DIMENSION 3: DECENT STANDARD OF LIVING                                     │
│  - Indicator: Gross National Income (GNI) per capita in 2017 PPP $          │
│  - Dimension Index = [ln(Actual) - ln(100)] / [ln(75,000) - ln(100)]        │
│                                                                             │
│  COMPOSITE HDI = (Life Expectancy Index × Education Index × Income Index)^⅓│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 2. Advanced Equity & Deprivation Indices
- **Inequality-Adjusted HDI (IHDI)**: Discounts the average achievement of each dimension according to its level of inequality across the population. If there is no inequality, HDI = IHDI. The percentage difference between HDI and IHDI represents the **loss in human development due to inequality**.
- **Gender Inequality Index (GII)**: Measures gender disparity across three dimensions: Reproductive Health (Maternal Mortality Ratio, Adolescent Birth Rate), Empowerment (Parliamentary seats held by women, Secondary education attainment), and Labor Market (Female Labor Force Participation Rate).
- **Multidimensional Poverty Index (MPI)**: Developed by OPHI (Oxford Poverty and Human Development Initiative) and UNDP. A household is classified as multidimensionally poor if it is deprived in **33.3% (one-third)** of 10 weighted indicators across Health (Nutrition, Child Mortality), Education (Years of Schooling, School Attendance), and Living Standards (Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, Assets).

---

## Structural Pillar 4: Poverty Estimation & Unemployment Dynamics in India

### 1. Chronology of Indian Poverty Line Methodologies

| Expert Group / Committee | Year | Methodology & Consumption Basket Criteria | Defined Poverty Line (Rural / Urban) |
|---|---|---|---|
| **Y.K. Alagh Task Force** | 1979 | Pure Caloric Norm: Minimum dietary energy requirement. Derived from 1973–74 NSSO consumer expenditure data. | **2,400 kcal/day (Rural)**<br>**2,100 kcal/day (Urban)** |
| **D.T. Lakdawala Committee** | 1993 | Retained Alagh calorie norms but disaggregated state-specific price variations using CPI-AL (Agricultural Labourers) for rural and CPI-IW (Industrial Workers) for urban. | State-specific baskets based on 1973–74 consumption patterns. |
| **Suresh Tendulkar Committee** | 2009 | Abandoned calorie anchors. Shifted from Uniform Recall Period (URP: 30-day) to **Mixed Reference Period (MRP)**. Added private expenditure on health and education. Anchored rural poverty to urban consumption basket. | **₹27.20 / day (Rural: ₹816/mo)**<br>**₹33.30 / day (Urban: ₹1000/mo)**<br>*(All India Poverty: 21.9% in 2011–12)* |
| **C. Rangarajan Committee** | 2014 | Integrated nutritional intake (calories, proteins, fats) with essential non-food components (clothing, house rent, conveyance, education). Used **Modified Mixed Reference Period (MMRP)**. | **₹32 / day (Rural: ₹972/mo)**<br>**₹47 / day (Urban: ₹1407/mo)**<br>*(All India Poverty: 29.5% in 2011–12)* |

### 2. Labor Force Taxonomy & Unemployment Types
- **Labor Force Participation Rate (LFPR)**: Percentage of working-age population (15–59 years) that is either working or actively seeking employment:
  $$\text{LFPR} = \left( \frac{\text{Employed} + \text{Unemployed}}{\text{Total Working Age Population}} \right) \times 100$$
- **Worker Population Ratio (WPR)**: Percentage of population actively employed.
- **Unemployment Rate (UR)**: Percentage of the labor force that is unemployed:
  $$\text{UR} = \left( \frac{\text{Unemployed}}{\text{Labor Force}} \right) \times 100$$
- **NSSO / PLFS Measurement Approaches**:
  1. *Usual Principal Status (UPS)*: Activity status pursued for a majority of days (183+ days) during the preceding 365 days.
  2. *Usual Principal & Subsidiary Status (UPSS)*: Includes persons who engaged in economic activity for at least 30 days during the reference year. Produces lower unemployment figures because informal, temporary workers are counted as employed.
  3. *Current Daily Status (CDS)*: Activity status evaluated for each day of the reference week (half-day units). Captures serious underemployment and seasonal fluctuations.
- **Structural Typology of Unemployment**:
  - *Disguised Unemployment*: Marginal productivity of labor is zero ($MP_L = 0$). Common in Indian agriculture where 5 family members work a plot that requires only 2.
  - *Structural Unemployment*: Mismatch between skills possessed by the workforce and skills demanded by technological modernization.
  - *Frictional Unemployment*: Temporary transition time between leaving one job and finding another.
  - *Cyclical Unemployment*: Caused by macroeconomic downturns and deficiency of aggregate demand.

---

## Structural Pillar 5: Public Finance, Deficit Geometry & Fiscal Governance

Public Finance investigates government revenue, public expenditure, borrowing, and fiscal sustainability.

### 1. Anatomy of the Union Budget (Article 112: Annual Financial Statement)

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ANATOMY OF THE UNION BUDGET                        │
│                                                                             │
│  I. REVENUE BUDGET (Neither creates assets nor reduces liabilities)         │
│     A. Revenue Receipts:                                                    │
│        1. Tax Revenue (Gross Tax - States' Share):                          │
│           - Direct Taxes: Corporation Tax, Personal Income Tax, Securities  │
│             Transaction Tax (STT)                                           │
│           - Indirect Taxes: GST, Customs Duties, Union Excise Duties        │
│        2. Non-Tax Revenue: Interest receipts, Dividends & Profits from      │
│           PSUs and RBI, Spectrum fees, user charges                         │
│     B. Revenue Expenditure: Interest payments, Defense operational costs,   │
│        Subsidies (Food, Fertilizer, Fuel), Salaries, Pensions, Grants-in-aid│
│                                                                             │
│  II. CAPITAL BUDGET (Either creates physical/financial assets OR reduces     │
│      liabilities)                                                           │
│     A. Capital Receipts:                                                    │
│        1. Non-Debt Capital Receipts (NDCR): Recovery of loans, Disinvestment│
│           proceeds from PSU share sales                                     │
│        2. Debt Capital Receipts: Internal market borrowings (Dated G-Secs,  │
│           Treasury Bills), External loans, National Small Savings Fund (NSSF)│
│     B. Capital Expenditure: Infrastructure construction (Highways, Rail),   │
│        Capital equipment for defense, Loans disbursed to State Govts        │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 2. Deficit Metrics & Mathematical Formulas

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE FOUR CRITICAL DEFICIT METRICS                     │
│                                                                             │
│  1. REVENUE DEFICIT (RD)                                                    │
│     = Revenue Expenditure - Revenue Receipts                                │
│     (Indicates consumption expenditure funded by borrowing)                 │
│                                                                             │
│  2. FISCAL DEFICIT (FD)                                                     │
│     = Total Expenditure - (Revenue Receipts + Non-Debt Capital Receipts)    │
│     = Total Net Borrowing Requirements of the Government                    │
│                                                                             │
│  3. PRIMARY DEFICIT (PD)                                                    │
│     = Fiscal Deficit - Net Interest Payments                                │
│     (Measures current fiscal stance excluding past accumulated debt burden) │
│                                                                             │
│  4. EFFECTIVE REVENUE DEFICIT (ERD) [Introduced in 2011–12]                │
│     = Revenue Deficit - Grants-in-Aid for Creation of Capital Assets        │
│     (Corrects accounting anomaly where Central grants to States create      │
│      physical capital assets like rural roads, but are booked as Revenue)   │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 3. The FRBM Act (2003) & The N.K. Singh Review Committee
- **Original FRBM Targets (2003)**: Eliminate Revenue Deficit completely and reduce Fiscal Deficit to **3% of GDP** by 2008–09. Postponed repeatedly due to the 2008 Global Financial Crisis and subsequent economic shocks.
- **N.K. Singh Committee Recommendations (2017)**:
  - Shifted anchor from annual deficit targets to **General Government Debt-to-GDP Ratio**: Target of **60% by 2023** (40% for Central Government, 20% for State Governments).
  - Recommended Fiscal Deficit glide path to **2.5% of GDP** by FY23.
  - **Escape Clause**: Permitted deviation of up to **0.5% of GDP** from fiscal deficit target under exceptional circumstances: war, national calamity, collapse of agricultural output, structural reforms with fiscal implications, or severe economic contraction.

---

## Structural Pillar 6: Constitutional Architecture: Fiscal Federalism & Taxation

The Constitution of India establishes an asymmetric fiscal federal framework where the Central Government commands expansive, elastic tax bases while State Governments shoulder the primary constitutional responsibilities for social and human development (health, education, law and order, agriculture).

### 1. Constitutional Funds of India
1. **Consolidated Fund of India (Article 266(1))**:
   - The master reservoir: All revenues received by the government, loans raised by issuance of Treasury Bills and market debt, and loan recoveries flow into this fund.
   - **No money can be withdrawn or appropriated from this fund without parliamentary authorization via an Appropriation Act (Article 114)**.
2. **Public Account of India (Article 266(2))**:
   - Holds public money where the government acts merely as a trustee, custodian, or banker: Provident Funds (EPF/PPF), Postal Savings, Small Savings collections, judicial deposits.
   - Operated by executive action; parliamentary approval is **not** required for routine withdrawals because the funds belong to private citizens.
3. **Contingency Fund of India (Article 267)**:
   - An imprest fund placed at the disposal of the President of India to meet unforeseen expenditures pending authorization by Parliament.
   - Managed by the Finance Secretary on behalf of the President. Statutory corpus was increased from ₹500 crore to ₹30,000 crore via the Finance Act 2021.

### 2. The Finance Commission (Article 280)
Constituted every 5 years by the President of India to recommend:
- **Vertical Devolution**: Share of net divisible pool of Union taxes allocated to State Governments (14th FC: 42%; 15th FC: 41%, adjusting 1% for Jammu & Kashmir and Ladakh UTs).
- **Horizontal Devolution Criteria (15th Finance Commission Formula for 2021–26)**:
  1. *Income Distance (45%)*: Deviation of a state's GSDP per capita from the top-performing state (rewards poorer states for equity).
  2. *Population based on 2011 Census (15%)*.
  3. *Demographic Performance (12.5%)*: Rewards states that successfully lowered their Total Fertility Rate (TFR) below replacement levels (2.1).
  4. *Area of State (15%)*.
  5. *Forest and Ecology (10%)*: Share of dense and moderately dense forest cover.
  6. *Tax and Fiscal Efforts (2.5%)*: Efficiency in raising own tax revenues.

### 3. The Goods and Services Tax (GST) & Article 279A
- **101st Constitutional Amendment Act (2016)**: Replaced 17 Central and State indirect taxes (Excise, VAT, Service Tax, CST, Entertainment Tax, Luxury Tax) with a single destination-based, consumption-oriented tax.
- **The GST Council (Article 279A)**:
  - Federal apex decision-making body comprising the Union Finance Minister (Chairperson), Union MoS for Finance, and Finance Ministers of all States.
  - **Weighted Voting Structure**:
    - Central Government vote weight = **One-Third (33.33%)** of total votes cast.
    - All State Governments combined vote weight = **Two-Thirds (66.67%)** of total votes cast.
    - Decision threshold = **Three-Fourths (75%) majority**.
    - *Systemic Implication*: Neither the Center alone nor the States alone can pass a resolution without cross-federal consensus. The Center holds an effective veto over State proposals (33.33% > 25%), while a united bloc of States can also block Central proposals.

---

## Structural Pillar 7: Money Supply Measures & The Banking Multiplier

The Reserve Bank of India (RBI) tracks the total volume of monetary assets circulating in the economy using four standardized liquidity tiers:

### 1. The Four Standard Money Stock Measures (Y.V. Reddy Working Group, 1998)

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                           RBI MONETARY AGGREGATES                           │
│                                                                             │
│  M0 (RESERVE MONEY / HIGH-POWERED MONEY / MONETARY BASE)                    │
│    = Currency in Circulation (Banknotes + Coins)                            │
│    + Bankers' Deposits with RBI (Cash Reserves held by Commercial Banks)    │
│    + 'Other' Deposits with RBI (Quasi-governmental and foreign balances)    │
│    [The sovereign liability of the central bank]                            │
│                                                                             │
│  M1 (NARROW MONEY)                                                          │
│    = Currency with the Public (Currency in Circulation - Cash with Banks)   │
│    + Demand Deposits with the Banking System (Current & Savings Account CASA)│
│    + 'Other' Deposits with RBI                                              │
│    [Instantaneous transactional liquidity]                                  │
│                                                                             │
│  M2 = M1 + Post Office Savings Bank Deposits                                │
│                                                                             │
│  M3 (BROAD MONEY)                                                           │
│    = M1 + Time Deposits with the Banking System (Fixed Deposits & RDs)      │
│    [The standard metric used by RBI to measure total liquidity]             │
│                                                                             │
│  M4 = M3 + Total Post Office Deposits (excluding National Savings Certs)    │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 2. The Mechanics of the Money Multiplier ($m$)
Commercial banks create money through fractional reserve credit issuance:
$$m = \frac{M_3}{M_0} = \frac{1 + c}{c + r}$$
Where:
- $c = \frac{\text{Currency held by public}}{\text{Demand + Time Deposits}}$ (**Currency-Deposit Ratio**): Governed by public habits, cash dependence, and digital payments adoption.
- $r = \frac{\text{Total Bank Reserves}}{\text{Total Deposits}}$ (**Reserve-Deposit Ratio**): Determined statutorily by the RBI via the **Cash Reserve Ratio (CRR)** and banks' precautionary excess cash holdings.

**The Economic Law**:
- If the public hoards cash during a crisis, $c$ surges, causing the money multiplier $m$ to collapse.
- If the RBI raises the CRR, $r$ rises, reducing $m$ and contracting broad credit creation.

### 3. Fisher's Equation of Exchange & The Quantity Theory of Money
$$M \cdot V = P \cdot T$$
Where $M$ = Money Supply, $V$ = Velocity of Circulation (number of times a unit of currency changes hands annually), $P$ = General Price Level, and $T$ = Volume of Transactions (Real Output $Y$). If $V$ and $Y$ are constant in the short run, any direct expansion of $M$ transmits proportionally into price inflation $P$.

---

## Structural Pillar 8: Financial Markets: Money Market vs. Capital Market

Financial markets bridge surplus economic units (savers, investors) with deficit economic units (corporations, governments seeking capital).

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE INDIAN FINANCIAL SYSTEM ARCHITECTURE                    │
│                                                                             │
│  1. MONEY MARKET (Tenor: ≤ 1 Year)  ◄─── Regulated by RBI                   │
│     - Call / Notice Money (1 day to 14 days inter-bank unsecured borrowing) │
│     - Treasury Bills (T-Bills: 91, 182, 364 days; issued at zero coupon)    │
│     - Commercial Paper (CP: 7 days to 1 year; unsecured corporate debt)     │
│     - Certificate of Deposit (CD: 7 days to 1 year; issued by banks)        │
│     - Cash Management Bills (CMBs: short-term maturity < 91 days)           │
│                                                                             │
│  2. CAPITAL MARKET (Tenor: > 1 Year)◄─── Regulated by SEBI                  │
│     A. G-Secs / Dated Securities: Long-term Sovereign Bonds (up to 40 years)│
│     B. Corporate Debt / Bonds: Debentures, Commercial Bonds                 │
│     C. Equity Market:                                                       │
│        - Primary Market: Initial Public Offerings (IPO), FPO, Rights Issue  │
│        - Secondary Market: Stock Exchanges (BSE, NSE)                       │
│     D. Derivatives Market: Forwards, Futures, Options, Swaps                │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 1. Bond Yield Dynamics & The Yield Curve
- **The Invariant Bond Pricing Law**: Bond Price and Bond Yield have a strictly **inverse mathematical relationship**:
  $$\text{Yield to Maturity (YTM)} \approx \frac{\text{Coupon Payment} + \frac{\text{Face Value} - \text{Market Price}}{\text{Years to Maturity}}}{\frac{\text{Face Value} + \text{Market Price}}{2}}$$
  - When interest rates in the economy rise, newly issued bonds offer higher coupons. Older bonds with lower coupons become less attractive, causing their market prices to fall until their yields match the new rate.
- **Yield Curve Geometry**:
  - *Normal Yield Curve (Upward Sloping)*: Long-term yields exceed short-term yields, compensating investors for maturity risk, inflation risk, and liquidity premium. Signals economic expansion.
  - *Flat Yield Curve*: Short-term and long-term yields converge. Signals economic transition and uncertainty.
  - *Inverted Yield Curve (Downward Sloping)*: Short-term yields exceed long-term yields. Signals that markets anticipate aggressive central bank rate cuts in response to an imminent **recession**.

### 2. Financial Derivatives Taxonomy
- **Forward Contract**: Customized bilateral agreement to buy/sell an asset at a specified price on a future date. Traded Over-The-Counter (OTC); carries counterparty default risk.
- **Futures Contract**: Standardized contract traded on an organized exchange with daily mark-to-market clearing, eliminating counterparty risk.
- **Options**: Contract conferring the **right, but not the obligation**, to buy (Call Option) or sell (Put Option) an underlying asset at an agreed strike price within a specified window.
- **Swaps**: Agreement between two parties to exchange financial cash flows (e.g., Interest Rate Swaps: exchanging floating-rate payments for fixed-rate payments; Currency Swaps: exchanging foreign currency liabilities).

---

## Structural Pillar 9: Inflation Taxonomy & RBI's Monetary Policy Framework

Inflation is defined as a persistent, generalized rise in the overall price level of goods and services, leading to a sustained erosion in the purchasing power of money.

### 1. The Typology of Inflation
- **Demand-Pull Inflation**: Aggregate demand outpaces aggregate supply ($AD > AS$) in an economy operating near full employment. "Too much money chasing too few goods."
- **Cost-Push Inflation**: Spikes in input costs (crude oil shocks, agricultural crop failures, supply chain bottlenecks, rising wages) shift the aggregate supply curve leftward.
- **Stagflation**: The toxic macroeconomic combination of **stagnant economic growth, high unemployment, and high inflation**. Disproves the simple short-run Phillips Curve (which posited an inverse relationship between inflation and unemployment).
- **Headline vs. Core Inflation**:
  - *Headline Inflation*: Total inflation reported via the index, including volatile commodity sectors.
  - *Core Inflation*: Headline Inflation minus volatile components (**Food and Energy**). Measures durable, underlying demand-driven price stickiness.

### 2. CPI vs. WPI Comparison Matrix

| Indicator | Primary Compilation Agency | Base Year | Commodity Basket Composition | Services Included? | Target User Metric |
|---|---|---|---|---|---|
| **Consumer Price Index (CPI-Combined)** | National Statistical Office (NSO, MoSPI) | 2012 = 100 | 448 items (Rural: 448, Urban: 460). Food & Beverages weight: **45.86%** | **YES** (Health, Education, Transport, Recreation) | Measures retail cost of living; **RBI's Official Anchor for Monetary Policy** |
| **Wholesale Price Index (WPI)** | Office of the Economic Adviser (DPIIT, Ministry of Commerce) | 2011–12 = 100 | 697 items: Primary Articles (22.62%), Fuel & Power (13.15%), Manufactured Products (**64.23%**) | **NO** (Goods only) | Measures producer/wholesale price pressures |

### 3. The Monetary Policy Framework (Section 45ZA, RBI Act 1934)
- **Flexible Inflation Targeting (FIT)**: Adopted following the Urjit Patel Committee recommendations (2014) and codified in 2016:
  - Inflation Target: **4% Consumer Price Index (CPI) with a tolerance band of ±2% (2% to 6%)**.
- **Monetary Policy Committee (MPC)**:
  - 6-member statutory body: 3 from RBI (Governor as Chairperson, Deputy Governor in charge of monetary policy, one RBI officer) + 3 external experts appointed by the Central Government.
  - Each member has one vote; the Governor possesses a **casting vote** in case of a tie.
- **The Liquidity Management Corridor**:
  - **Marginal Standing Facility (MSF)**: Upper ceiling of the corridor. Penal borrowing rate for commercial banks against approved G-Secs dipped into their SLR quota (Repo + 25 bps).
  - **Policy Repo Rate**: Anchor rate at which RBI lends short-term liquidity to banks against G-Sec collateral.
  - **Standing Deposit Facility (SDF)**: Lower floor of the corridor (introduced in 2022). Allows RBI to absorb uncollateralized overnight liquidity from banks without providing government securities in return (Repo - 25 bps).

---

## Structural Pillar 10: External Sector: Balance of Payments & WTO Architecture

### 1. The Structure of the Balance of Payments (BoP)
The Balance of Payments is a systematic, double-entry accounting statement of all economic transactions between residents of a country and the rest of the world over a financial year.

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       BALANCE OF PAYMENTS (BoP) SCHEMATIC                   │
│                                                                             │
│  I. CURRENT ACCOUNT                                                         │
│     A. Visible Trade (Merchandise): Exports (-) Imports = Trade Balance     │
│     B. Invisibles:                                                          │
│        1. Services (Software exports, Tourism, Financial services)          │
│        2. Income / Primary Income (Profit, Dividends, Interest on foreign   │
│           assets)                                                           │
│        3. Transfers / Secondary Income (Worker Remittances, Foreign Grants, │
│           Gifts - unilateral flows with zero repayment obligation)          │
│                                                                             │
│  II. CAPITAL ACCOUNT                                                        │
│     A. Foreign Investments:                                                 │
│        1. Foreign Direct Investment (FDI): Equity stake ≥ 10% in a company; │
│           brings long-term capital, management control, and technology.     │
│        2. Foreign Portfolio Investment (FPI / FII): Passive investment in   │
│           listed stocks and bonds < 10%; volatile "hot money."              │
│     B. External Borrowings:                                                 │
│        1. External Commercial Borrowings (ECB): Commercial loans by Indian  │
│           corporates from foreign lenders at market rates.                  │
│        2. Sovereign / Official Concessional Loans (World Bank, ADB, IMF).   │
│     C. Banking Capital & NRI Deposits: FCNR(B), NRE, and NR(O) accounts.   │
│                                                                             │
│  BoP IDENTITY: Current Account + Capital Account + Errors & Omissions       │
│                = Net Change in Foreign Exchange Reserves (with inverted     │
│                  accounting sign: surplus added to reserves).               │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### 2. Exchange Rate Economics: NEER vs. REER
- **Nominal Effective Exchange Rate (NEER)**: Trade-weighted geometric average of the bilateral exchange rates of the Indian Rupee against a basket of currencies of major trading partners (standard 40-currency basket).
- **Real Effective Exchange Rate (REER)**: NEER adjusted for inflation differentials between India and its trading partners:
  $$\text{REER} = \text{NEER} \times \left( \frac{\text{Domestic Price Index}}{\text{Foreign Price Index}} \right)$$
  - *Interpretive Principle*: A REER value > 100 indicates that the domestic currency is **overvalued**, making exports less competitive and imports artificially cheaper. A REER value < 100 indicates competitive undervaluation.

### 3. Currency Convertibility & The Tarapore Framework
- **Current Account Convertibility**: Freedom to convert domestic currency into foreign exchange at market rates for trade in goods, services, travel, education, and remittances. Implemented fully by India in August 1994 under Article VIII of the IMF Articles of Agreement.
- **Capital Account Convertibility (CAC)**: Freedom to convert domestic financial assets into foreign financial assets and vice versa at market rates (investing in foreign stocks, buying property abroad, unrestricted cross-border corporate borrowing).
- **S.S. Tarapore Committees (1997 & 2006) Pre-Conditions for Full CAC**:
  1. Gross Fiscal Deficit reduced to below **3.5% of GDP**.
  2. Mandated Inflation rate between **3% and 5%**.
  3. Gross Non-Performing Assets (NPAs) of the commercial banking system reduced to **< 5%**.
  4. Adequate foreign exchange reserves covering at least **6 months of imports plus debt service obligations**.
  5. Deregulated interest rate regime and sustainable current account deficit.

### 4. World Trade Organization (WTO) Legal Architecture
Established on January 1, 1995, via the Marrakesh Agreement, replacing the General Agreement on Tariffs and Trade (GATT 1947).
- **Core Principles**:
  - *Most-Favoured-Nation (MFN) Rule (Article I GATT)*: Any trade privilege or tariff reduction granted to one member must be extended immediately and unconditionally to all other WTO members.
  - *National Treatment Principle (Article III GATT)*: Imported foreign goods, once they clear customs, must be treated no less favorably than domestically produced equivalent goods (no discriminatory internal taxes or regulations).
- **The Agreement on Agriculture (AoA) Three-Box Subsidies Framework**:
  1. **Green Box**: Subsidies that cause minimal or no trade distortion (Agricultural R&D, pest control, environmental protection, disaster relief, direct decoupled income support to farmers). Allowed without financial limits.
  2. **Blue Box**: Direct payments under production-limiting programs (subsidies tied to fixed acreage and yields). Allowed with conditions.
  3. **Amber Box**: Trade-distorting domestic support measures that directly manipulate market prices (Minimum Support Price, input subsidies on fertilizer, electricity, irrigation).
     - **De Minimis Threshold**: Maximum allowable Amber Box support: **5% of total value of agricultural production for developed countries; 10% for developing countries**.
     - **The Peace Clause (Bali Ministerial 2013)**: Protects developing nations from legal dispute challenges at the WTO if their procurement under public stockholding programs for food security breaches the 10% de minimis cap.

---

## Synthesis Takeaway: The Pedagogical Triumph of Sankarganesh K.

Sankarganesh K.'s *Indian Economy: Key Concepts* demystifies economic policy by converting ideological abstractions into **verifiable balance sheet mechanics, legal-constitutional articles, and quantitative formulas**. 

Whether parsing why a change in the CRR alters the money multiplier, how the 15th Finance Commission balances regional equity against population control, or why India's Current Account Deficit must be financed through stable FDI rather than volatile FPI, Sankarganesh delivers the indispensable foundational toolkit for mastering both Indian economic administration and global political economy.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Indian Economy: Key Concepts | Sankarganesh K.</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .econ-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(13, 71, 161, 0.12);
      color: #0d47a1;
      border: 1px solid rgba(13, 71, 161, 0.3);
      margin-bottom: 0.5rem;
    }
    .econ-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.2rem;
      margin: 1.5rem 0;
    }
    .econ-card {
      background: var(--card-bg, #fff);
      border: 1px solid var(--border-color, #e0d8cc);
      border-radius: 8px;
      padding: 1.3rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .econ-card h4 {
      margin-top: 0;
      font-family: 'Cinzel', serif;
      color: var(--primary-accent, #1a237e);
    }
    .formula-box {
      background: rgba(0, 0, 0, 0.04);
      border-left: 3px solid #1a237e;
      padding: 0.8rem 1rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      margin: 0.8rem 0;
    }
  </style>
</head>
<body data-theme="cream">
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Master Library</a>
        <span class="shamanic-badge econ-badge">MACROECONOMIC KEY CONCEPTS</span>
        <h1 class="book-title">Indian Economy: Key Concepts</h1>
        <p class="book-subtitle">High-Yield Mathematical Accounting, Institutional Rules & Policy Mechanisms</p>
        <div class="book-meta">
          <span class="author">By Sankarganesh K.</span>
          <span class="meta-sep">•</span>
          <span class="units-count">10 Knowledge Units</span>
          <span class="meta-sep">•</span>
          <span class="standard-tag">BKRS v2.0 Replacement Standard</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Conceptual Journey</button>
        <button class="view-btn" data-view="identities">View B: Macroeconomic Identities</button>
        <button class="view-btn" data-view="institutions">View C: Constitutional & Policy Matrix</button>
      </div>
    </header>

    <main class="reader-content">
      <!-- VIEW A: CONCEPTUAL JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="journey-flow">
          ${knowledgeUnits.map((u, idx) => `
            <article class="unit-card" id="${u.id}">
              <div class="unit-header">
                <span class="unit-number">MODULE ${idx + 1}</span>
                <span class="unit-type-tag">${u.unitType}</span>
                <span class="materiality-tag ${u.materiality}">${u.materiality.toUpperCase()}</span>
              </div>
              <h2 class="unit-title">${u.title}</h2>
              <p class="unit-summary">${u.summary}</p>
              <div class="unit-actions">
                <span class="status-indicator ${u.epistemicStatus}">${u.epistemicStatus}</span>
              </div>
              <script type="application/json" class="unit-trace-payload">
                ${JSON.stringify(u)}
              </script>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- VIEW B: MACROECONOMIC IDENTITIES -->
      <section id="view-identities" class="view-section">
        <div class="econ-grid">
          <div class="econ-card">
            <h4>National Income Revision (2015)</h4>
            <div class="formula-box">GDP_MP = GVA_Basic + (Product Taxes - Product Subsidies)</div>
            <p>Shifted from Factor Cost to Market Prices as headline growth. Aligns with UN SNA 2008 and integrates MCA-21 database.</p>
          </div>
          <div class="econ-card">
            <h4>Money Multiplier Mechanics</h4>
            <div class="formula-box">m = (1 + c) / (c + r)</div>
            <p>Determined by Currency-Deposit ratio (c) and Reserve-Deposit ratio (r via CRR). High-powered money M0 multiplies into broad money M3.</p>
          </div>
          <div class="econ-card">
            <h4>Deficit Accounting Geometry</h4>
            <div class="formula-box">Fiscal Deficit = Total Exp - (Revenue Receipts + Non-Debt Capital Receipts)</div>
            <p>Represents total government borrowing. Primary Deficit isolates current fiscal stance by subtracting net interest payments.</p>
          </div>
          <div class="econ-card">
            <h4>Bond Yield Invariant Law</h4>
            <div class="formula-box">Price ↑ ──► Yield ↓  |  Price ↓ ──► Yield ↑</div>
            <p>Inverted yield curves indicate short-term rates exceeding long-term rates, serving as a reliable leading indicator of recession.</p>
          </div>
          <div class="econ-card">
            <h4>Real Effective Exchange Rate</h4>
            <div class="formula-box">REER = NEER × (Domestic Prices / Foreign Prices)</div>
            <p>Measures trade competitiveness against a 40-currency basket. REER > 100 indicates domestic currency overvaluation.</p>
          </div>
          <div class="econ-card">
            <h4>Fisher's Equation of Exchange</h4>
            <div class="formula-box">M × V = P × T</div>
            <p>Direct mathematical link between money supply expansion and general price level inflation when velocity and real transactions are stable.</p>
          </div>
        </div>
      </section>

      <!-- VIEW C: CONSTITUTIONAL & POLICY MATRIX -->
      <section id="view-institutions" class="view-section">
        <div class="econ-grid">
          <div class="econ-card">
            <h4>Article 280: Finance Commission</h4>
            <p><strong>Vertical Devolution:</strong> 41% net share of Union divisible taxes to States (15th FC).</p>
            <p><strong>Horizontal Criteria:</strong> Income distance (45%), Population (15%), Area (15%), Demographic performance (12.5%), Forest & ecology (10%), Tax effort (2.5%).</p>
          </div>
          <div class="econ-card">
            <h4>Article 279A: GST Council</h4>
            <p><strong>Voting Architecture:</strong> Center = 1/3 weight; All States = 2/3 weight. Decision threshold = 75% majority.</p>
            <p>Guarantees cooperative federalism where neither Center nor States can unilaterally dictate indirect tax policy.</p>
          </div>
          <div class="econ-card">
            <h4>Inflation Targeting Framework</h4>
            <p><strong>Target:</strong> 4% CPI-C with ±2% band (Section 45ZA RBI Act 1934).</p>
            <p><strong>Monetary Policy Committee:</strong> 6 members (3 RBI, 3 Central Govt). Anchor rate: Repo; corridor defined by MSF (ceiling) and SDF (floor).</p>
          </div>
          <div class="econ-card">
            <h4>WTO Subsidies Framework (AoA)</h4>
            <p><strong>Green Box:</strong> Non-distorting subsidies (R&D, decoupled income) allowed without limits.</p>
            <p><strong>Amber Box:</strong> Trade-distorting support (MSP, inputs) capped at 10% for developing nations; protected by the 2013 Bali Peace Clause.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Indian Economy: Key Concepts</em> by Sankarganesh K. (354 pages)</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

// Write files
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
