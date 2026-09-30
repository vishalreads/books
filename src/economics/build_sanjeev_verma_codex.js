const fs = require('fs');
const path = require('path');

const slug = 'the-indian-economy-sanjeev-verma';
const title = 'The Indian Economy';
const author = 'Sanjeev Verma';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-verma-01',
    title: 'Output of an Economy & National Income Aggregates',
    unitType: 'macroeconomic-accounting',
    summary: 'Deconstruction of macroeconomic output: monetary aggregation of final goods and services. Mathematical relationships between GDP, NDP, GNP, and NNP. Distinguishes Factor Cost, Basic Prices, and Market Prices. Explains nominal versus real GDP, the GDP Deflator formula, base-year adjustments, and the fundamental limitations of output as an indicator of human well-being.',
    epistemicStatus: 'source-theoretical',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-verma-02',
    title: 'Towards Inclusive Growth: Growth vs. Development Paradigm',
    unitType: 'development-paradigm',
    summary: 'Analyzes the historical decoupling of economic expansion from broad social advancement. Contrasts quantitative growth with qualitative development. Examines Amartya Sen’s capability approach, the Human Development Index (HDI), and the structural barriers to inclusive growth in India, including jobless growth, spatial inequality, and institutional delivery deficits.',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-verma-03',
    title: 'Poverty Measurement, Inequality & Social Sector Architecture',
    unitType: 'social-policy',
    summary: 'Traces the chronological evolution of poverty estimation in India: Alagh, Lakdawala, Tendulkar (Mixed Reference Period and cost-of-living basket), and Rangarajan committees. Dissects multidimensional poverty deprivation metrics. Details social sector rights-based legislation, MGNREGA mechanics, universal social protection, and public expenditure deficits in healthcare and education.',
    epistemicStatus: 'source-historical-policy',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-verma-04',
    title: 'Food Security Architecture, Public Distribution System & Buffer Stocks',
    unitType: 'policy-operational',
    summary: 'Comprehensive analysis of Indian food governance: the institutional mandate of the Food Corporation of India (FCI), open-ended procurement, Minimum Support Price (MSP) incentives, buffer stock norms, and the Targeted Public Distribution System (TPDS). Evaluates the National Food Security Act (NFSA) 2013 legal mandates and the Shanta Kumar Committee restructuring proposals.',
    epistemicStatus: 'source-policy-institutional',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-verma-05',
    title: 'Agriculture Sector: Agrarian Structure, Productivity & Allied Sectors',
    unitType: 'agrarian-economics',
    summary: 'Surveys the structural crisis of Indian agriculture: small and fragmented landholdings, monsoon dependency, soil degradation post-Green Revolution, and declining public capital formation. Details irrigation disparities, institutional credit delivery via Kisan Credit Cards, and the high-growth potential of allied sectors including dairy, livestock, poultry, and fisheries.',
    epistemicStatus: 'source-empirical-policy',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-verma-06',
    title: 'Agricultural Marketing Reforms, APMC Monopolies & Land Policy',
    unitType: 'market-governance',
    summary: 'Critiques the structural distortions of the Agricultural Produce Market Committee (APMC) acts: licensing cartels, high transaction fees, and price exploitation. Details market unification initiatives: electronic National Agriculture Market (e-NAM), Model APLM Act 2017, and contract farming. Reviews post-independence land reforms: Zamindari abolition, tenancy security, land ceilings, and modern land leasing frameworks.',
    epistemicStatus: 'source-institutional-legal',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-verma-07',
    title: 'Salient Features of ‘New India’ & Structural Transformation',
    unitType: 'structural-transformation',
    summary: 'Analyzes India’s unique growth path: the historical skipping of secondary manufacturing to become a service-led economy. Evaluates the demographic dividend window (median age ~28), labor force formalization bottlenecks, female labor force participation challenges, digital public infrastructure (India Stack), and the shift toward knowledge-intensive service exports.',
    epistemicStatus: 'source-analytical',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-verma-08',
    title: 'Industrial Policy Evolution, License Raj & Disinvestment Dynamics',
    unitType: 'industrial-policy',
    summary: 'Traces Indian industrial policy from the 1948 and 1956 Industrial Policy Resolutions (commanding heights of the public sector) to the landmark 1991 New Industrial Policy. Analyzes the dismantling of industrial licensing, MRTP restrictions, and phased disinvestment of Public Sector Enterprises (PSEs). Deconstructs the National Investment Fund (NIF) and strategic disinvestment paradigms.',
    epistemicStatus: 'source-historical-policy',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-verma-09',
    title: 'Infrastructure Bottlenecks & Public-Private Partnership Investment Models',
    unitType: 'infrastructure-finance',
    summary: 'Deconstructs the chronic infrastructure deficit constraining Indian industrial competitiveness. Analyzes Public-Private Partnership (PPP) investment models: Build-Operate-Transfer (BOT), Build-Own-Operate-Transfer (BOOT), Design-Build-Finance-Operate-Transfer (DBFOT), Engineering-Procurement-Construction (EPC), and the Hybrid Annuity Model (HAM). Evaluates the Kelkar Committee reforms and logistics corridors.',
    epistemicStatus: 'source-financial-operational',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-verma-10',
    title: 'External Sector, Balance of Payments & Global Economic Integration',
    unitType: 'international-economics',
    summary: 'Rigorous examination of external sector mechanics: Balance of Payments (BoP) accounting on double-entry principles, Current Account Deficit (CAD) vulnerabilities, Rupee convertibility trajectory (current vs. capital account), foreign capital dynamics (FDI vs. FPI), foreign exchange reserve management, and India’s strategic posture within multilateral institutions (WTO, IMF, World Bank).',
    epistemicStatus: 'source-macroeconomic',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: The Indian Economy
**Author**: Sanjeev Verma  
**Discipline**: Developmental Economics, Public Policy & Institutional Macroeconomics  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

Sanjeev Verma's *The Indian Economy* stands as one of the most lucid, policy-grounded treatises on the structural evolution, policy dilemmas, and institutional mechanisms of modern India. Written with a sharp pedagogical focus for administrative decision-makers and policy scholars, Verma avoids excessive econometric abstraction in favor of **structural institutionalism**: understanding how constitutional mandates, legislative interventions, administrative structures, and market forces interact to determine national output, human welfare, and sectoral productivity.

The text is organized around four core systemic axes:
1. **The Macroeconomic Core**: Defining the precise measurement of national output, distinguishing between mere gross domestic expansion and genuine human capability enhancement, and tracking the macroeconomic balances governing domestic price stability.
2. **The Agrarian & Rural Dynamic**: Deconstructing the fundamental paradox of Indian agriculture—its structural decline as a share of GDP contrasted with its overwhelming role as the primary employment provider, analyzing the complex web of input subsidies, price support mechanisms (MSP), and marketing bottlenecks (APMC).
3. **The Industrial & Infrastructural Architecture**: Tracking the transformation of Indian industry from the restrictive "License-Permit Raj" and public sector hegemony (1948–1991) to post-reform deregulation, disinvestment, and modern infrastructure financing through sophisticated Public-Private Partnership (PPP) models.
4. **The Social & External Frontiers**: Evaluating the welfare architecture addressing systemic poverty, food insecurity, and labor informalization, alongside India's integration into global trade networks, capital flows, and the multilateral architecture of the World Trade Organization (WTO).

---

## Unit 1: Output of an Economy & National Income Aggregates

### 1.1 The Theoretical Concept of Output
Economic output represents the aggregate monetary valuation of all final goods produced and services rendered within an economic system across a specified accounting interval (quarterly or annually). The necessity of monetary aggregation arises from the incommensurability of physical quantities: steel produced in metric tons, wheat in quintals, software code in billable hours, and transport in passenger-kilometers cannot be arithmetically combined without a universal denominator of value—the currency unit.

Output fundamentally encompasses transactions mediated through monetary exchange. Verma highlights the critical boundary conditions:
- **Included**: Market transactions, self-consumed agricultural produce (imputed value), owner-occupied residential housing (imputed rent), and government administrative services (evaluated at cost of provision).
- **Excluded**: Unpaid domestic labor and caregiving, volunteer activities, intermediate goods utilized in the direct production of other commodities (to avert double counting), transfer payments (pensions, scholarships, unemployment benefits), and illegal/black market transactions.

### 1.2 The Core Accounting Quadrumvirate: GDP, NDP, GNP, and NNP

$$\\text{Gross Domestic Product (GDP)} = \\sum (P_i \\times Q_i) \\quad \\text{within geographic borders}$$

$$\\text{Net Domestic Product (NDP)} = \\text{GDP} - \\text{Depreciation (Consumption of Fixed Capital)}$$

$$\\text{Gross National Product (GNP)} = \\text{GDP} + \\text{Net Factor Income from Abroad (NFIA)}$$

$$\\text{Net National Product (NNP)} = \\text{GNP} - \\text{Depreciation} = \\text{National Income (NI at Factor Cost)}$$

$$\\text{NFIA} = \\text{Factor income received by domestic residents from abroad} - \\text{Factor income paid to foreign residents domestically}$$

### 1.3 Factor Cost, Basic Prices, and Market Prices
A crucial conceptual milestone in national income accounting (adopted in India during the 2015 methodology revision) is the precise distinction between production costs and market valuations:

$$\\text{GVA at Factor Cost} = \\text{Compensation of Employees} + \\text{Operating Surplus / Mixed Income}$$

$$\\text{GVA at Basic Prices} = \\text{GVA at Factor Cost} + (\\text{Production Taxes} - \\text{Production Subsidies})$$

$$\\text{GDP at Market Prices} = \\text{GVA at Basic Prices} + (\\text{Product Taxes} - \\text{Product Subsidies})$$

- **Production Taxes/Subsidies**: Levied or granted independent of actual production volume (e.g., land revenues, stamp duty, factory license fees; production subsidies like farmer input subsidies).
- **Product Taxes/Subsidies**: Levied or granted on a per-unit output basis (e.g., GST, excise duty, customs duty, sales tax; product subsidies like food, fertilizer, and petroleum subsidies).

### 1.4 Nominal GDP, Real GDP, and the GDP Deflator
Because nominal GDP is calculated using prevailing current-market prices, an economy's nominal output may increase purely due to price inflation without any underlying expansion in physical production. Real GDP neutralizes price fluctuations by valuing output at constant prices relative to an officially designated **Base Year**.

$$\\text{Real GDP}_t = \\sum (P_{\\text{base}} \\times Q_t)$$

$$\\text{GDP Deflator} = \\left( \\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\right) \\times 100$$

The GDP Deflator serves as the most comprehensive measure of inflation across the entire domestic economy because, unlike the Consumer Price Index (CPI) or Wholesale Price Index (WPI), it captures price movements in all domestically produced goods and services, including capital equipment and government services, without relying on a fixed, static consumer basket.

---

## Unit 2: Towards Inclusive Growth: Growth vs. Development Paradigm

### 2.1 The Growth vs. Development Dichotomy
Verma establishes that economic growth is a strictly quantitative measure reflecting the rate of expansion of GDP over time. Economic development, by contrast, is qualitative, structural, and multidimensional:
- **Economic Growth**: Expansion of aggregate output ($\\Delta \\text{GDP}/\\text{GDP}$).
- **Economic Development**: Enhancement of real freedoms, expansion of human capabilities, reduction in income and wealth disparities, universalization of literacy and health, and democratic empowerment.

The post-independence Indian development experience decisively disproved the orthodox neoclassical **"Trickle-Down Hypothesis"**—the assertion that rapid growth at the aggregate national level naturally permeates down to uplift the poorest strata through market expansion and wage employment. In the absence of deliberate institutional redistribution, progressive taxation, and universal social infrastructure, growth tends to concentrate wealth among asset-owning elites, generating stark regional and class disparities.

### 2.2 Inclusive Growth: Dimensions and Strategic Pillars
Inclusive growth implies growth that generates broad-based opportunities for all segments of society, particularly marginalized groups (Scheduled Castes, Scheduled Tribes, Other Backward Classes, minorities, and women), while ensuring equality of access to markets, assets, and public services:
- **Productive Employment**: Growth must be labor-absorbing rather than capital-intensive or "jobless."
- **Spatial Inclusion**: Overcoming severe regional imbalances between industrialized western/southern states and the agrarian hinterlands of eastern/northern India.
- **Human Capital Formation**: Universal, affordable provision of quality primary healthcare and foundational schooling.
- **Financial Inclusion**: Extending formal banking credit, savings instruments, and risk-mitigation insurance to the unbanked informal sector.

### 2.3 The Capability Paradigm and the Human Development Index (HDI)
Developed by Pakistani economist Mahbub ul Haq in collaboration with Nobel Laureate Amartya Sen for the United Nations Development Programme (UNDP), the HDI measures national development across three fundamental dimensions:

$$\\text{HDI} = \\left( I_{\\text{Health}} \\times I_{\\text{Education}} \\times I_{\\text{Income}} \\right)^{1/3}$$

| Dimension | Indicator | Minimum Value | Maximum Value | Goal / Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Health** | Life Expectancy at Birth | 20 years | 85 years | Capability to live a long, healthy life |
| **Education** | Mean Years of Schooling (adults) & Expected Years (children) | 0 years | 15 / 18 years | Capability to acquire knowledge and agency |
| **Standard of Living** | GNI per capita (PPP in USD) | \$100 | \$75,000 | Capability to command resources for a decent life |

---

## Unit 3: Poverty Measurement, Inequality & Social Sector Architecture

### 3.1 Historical Evolution of Indian Poverty Lines
Poverty estimation in post-independence India evolved from basic physiological nutritional requirements to comprehensive multidimensional cost-of-living standards:

1. **Y.K. Alagh Task Force (1979)**: Defined poverty lines strictly based on per capita daily caloric consumption: **2,400 kcal** in rural areas and **2,100 kcal** in urban areas, mapped to household consumption expenditure from NSSO surveys.
2. **D.T. Lakdawala Expert Group (1993)**: Retained Alagh caloric benchmarks but disaggregated poverty lines across individual states using the Consumer Price Index for Agricultural Labourers (CPI-AL) for rural regions and Consumer Price Index for Industrial Workers (CPI-IW) for urban areas.
3. **Suresh Tendulkar Committee (2009)**: Moved away from caloric anchors. Acknowledged changing consumption patterns by establishing an identical, all-India urban reference basket and adjusting rural poverty lines to match urban price equivalents using a **Mixed Reference Period (MRP)**. Explicitly accounted for out-of-pocket private expenditures on healthcare and schooling, identifying 21.9% of the Indian population as living below the poverty line (2011–12).
4. **C. Rangarajan Committee (2014)**: Reintroduced nutritional adequacy (protein, fats, calories) combined with an essential normative non-food basket (rent, clothing, conveyance, education). Derived poverty lines of **₹972 per capita per month in rural areas** (₹32/day) and **₹1,407 per capita per month in urban areas** (₹47/day), raising India's estimated poverty headcount ratio to 29.5% for 2011–12.

### 3.2 Multidimensional Poverty Index (MPI)
The global and national MPI (anchored by NITI Aayog) evaluates deprivations across 10 to 12 indicators grouped under the three classic HDI pillars:
- **Health**: Nutrition, Child Mortality, Maternal Health.
- **Education**: Years of Schooling, School Attendance.
- **Standard of Living**: Cooking Fuel, Sanitation, Drinking Water, Housing, Electricity, Assets, and Bank Accounts.

A household is classified as multidimensionally poor if its deprivation score equals or exceeds **33.3%** of the weighted indicators.

### 3.3 The Rights-Based Welfare Architecture: MGNREGA
The **Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005** represents a paradigm shift from discretionary government patronage to an enforceable legal right to work:
- **Statutory Guarantee**: 100 days of guaranteed wage employment per financial year to every rural household whose adult members volunteer to perform unskilled manual labor.
- **Work on Demand**: Employment must be provided within 15 days of application; failure triggers a statutory **Unemployment Allowance** payable by the state government.
- **Gender Parity**: Mandate that at least one-third of beneficiaries must be women, with equal statutory wages for equal work.
- **Asset Creation & Decentralization**: Panchayati Raj Institutions (PRIs) plan and execute at least 50% of works, focusing on water conservation, drought proofing, soil rejuvenation, and rural connectivity.

---

## Unit 4: Food Security Architecture, Public Distribution System & Buffer Stocks

### 4.1 The Trilateral Architecture of Indian Food Governance
India's food security apparatus operates via three coordinated institutional pillars:
1. **Remunerative Producer Incentives**: The Minimum Support Price (MSP) announced by the Central Government on the recommendations of the Commission for Agricultural Costs and Prices (CACP) prior to sowing seasons, ensuring farmers against distress sales.
2. **Physical Procurement & Logistics**: The **Food Corporation of India (FCI)**, established under the Food Corporations Act, 1964, which procures wheat and paddy through open-ended purchasing, manages strategic buffer stocks, and transports grains across surplus and deficit states.
3. **Subsidized Consumer Delivery**: The **Public Distribution System (PDS)**, operated as a joint responsibility where the Centre allocates foodgrains at subsidized **Central Issue Prices (CIP)** and State Governments manage beneficiary identification and Fair Price Shops (FPS).

### 4.2 Economic Cost of Foodgrains vs. Central Issue Price
The fiscal food subsidy borne by the Union Budget represents the mathematical difference between the total operational cost incurred by FCI and the revenue recovered through sales at issue prices:

$$\\text{Total Food Subsidy} = \\text{Economic Cost of Foodgrains} - \\text{Central Issue Price (CIP)}$$

$$\\text{Economic Cost} = \\text{Acquisition Cost (MSP + Statutory Taxes/Levies)} + \\text{Distribution Cost (Freight, Handling, Storage, Financing)}$$

Because Central Issue Prices were kept historically frozen (₹3/kg for rice, ₹2/kg for wheat, ₹1/kg for coarse grains under the National Food Security Act, and eventually made free under PM-GKAY), while MSP and distribution charges rose annually, the economic cost per quintal escalated sharply, resulting in massive food subsidy outlays exceeding ₹2 lakh crore.

### 4.3 The National Food Security Act (NFSA), 2013
NFSA marks the transition from welfare-oriented targeted schemes to statutory legal food entitlements:
- **Coverage**: Covers up to **75% of the rural population** and **50% of the urban population** (aggregating to ~67% of India's total population), encompassing over 80 crore individuals.
- **Entitlements**:
  - **Priority Households (PHH)**: 5 kg of foodgrains per person per month.
  - **Antyodaya Anna Yojana (AAY)**: 35 kg of foodgrains per poorest household per month.
- **Life-Cycle Approach**: Nutritional support for pregnant women and lactating mothers (maternity benefit of not less than ₹6,000) and free cooked mid-day meals for school children aged 6 to 14 years.
- **Women Empowerment**: Eldest woman aged 18 years or above designated as the head of the household for issuing ration cards.

### 4.4 Shanta Kumar Committee Recommendations (2015)
To address crippling operational inefficiencies, grain rotting, and procurement distortions in FCI, the High-Level Committee on Restructuring of FCI recommended:
- **Procurement Reorientation**: End open-ended procurement in states like Punjab and Haryana with high private market infrastructure; transfer procurement operations to state governments and shift FCI focus to deficit eastern states (UP, Bihar, West Bengal, Assam).
- **Targeting Rationalization**: Reduce NFSA coverage from 67% to **40%** to cover genuinely vulnerable households and increase issue prices.
- **Cash Transfers (DBT)**: Gradually transition from physical grain distribution to Direct Benefit Transfer of food subsidy in urban and food-surplus districts.
- **Outsourcing and Modernization**: Liquidate excess buffer stocks above strategic norms in open market sales, dismantle old godowns, and build modern automated grain silos through PPP concessions.

---

## Unit 5: Agriculture Sector: Agrarian Structure, Productivity & Allied Sectors

### 5.1 Structural Features & Agrarian Vulnerabilities
Agriculture occupies a paradoxical position in the Indian macroeconomic landscape:
- **GDP vs. Employment Mismatch**: Agriculture's contribution to national Gross Value Added (GVA) declined from ~50% in the 1950s to ~16–18% today, yet it continues to employ nearly **45% of the total national workforce**, generating massive structural underemployment and suppressed per capita rural incomes.
- **Fragmentation of Landholdings**: Over **86% of Indian operational landholdings** are classified as Small and Marginal (< 2 hectares), severely restricting economies of scale, mechanization, and access to commercial credit.
- **Monsoon Dependency**: Despite extensive canal and tubewell development, approximately **50% of India's net sown area** remains rainfed, leaving aggregate output acutely vulnerable to Southwest monsoon anomalies.

### 5.2 Capital Formation: The Public vs. Private Investment Divergence
A primary root cause of agricultural stagnation identified by Verma is the deceleration of public capital formation (Gross Capital Formation, GCF):
- **Subsidy vs. Investment Substitution**: Government expenditure has overwhelmingly shifted toward operational and input consumption subsidies (cheap fertilizer, free electricity, canal water subsidies, loan waivers) at the direct expense of capital creation (canals, cold chains, rural roads, agricultural research and extension).
- **Declining ICOR Efficiency**: Without public irrigation and drainage infrastructure, private investment by smallholder farmers in tubewells and tractors yields diminishing marginal returns.

### 5.3 Allied Sectors: The Growth Engine of Rural Economy
While cereal crop cultivation faces low single-digit growth rates, allied agricultural sectors exhibit robust dynamic expansion:
- **Livestock & Dairy**: India is the world's largest milk producer, driven by cooperative smallholder milk federations (Operation Flood / White Revolution). Milk output value surpasses the combined value of wheat and paddy.
- **Fisheries & Aquaculture (Blue Revolution)**: Coastal marine fisheries and inland freshwater aquaculture represent India's fastest-growing food production subsectors, driven by shrimp exports and modern reservoir fish farming.
- **Horticulture (Golden Revolution)**: Production of fruits, vegetables, spices, and plantation crops has officially surpassed aggregate foodgrain production, offering superior income per unit of land and water.

---

## Unit 6: Agricultural Marketing Reforms, APMC Monopolies & Land Policy

### 6.1 The Pathology of Agricultural Produce Market Committees (APMCs)
State APMC Acts were originally enacted to protect farmers from exploitation by unscrupulous village moneylenders and commission agents (*arhtiyas*). Over decades, APMC markets devolved into state-sanctioned monopolies characterized by:
- **Licensing Cartels**: Mandi boards restrict trade licenses, preventing competitive bidding among buyers.
- **Multi-layered Intermediation**: A long chain of middlemen between farm gate and consumer extracts rents, leaving farmers with only 25–35% of the consumer's rupee in perishables.
- **High Market Levies**: Heavy mandi fees, rural development cesses, and commission charges levied by state governments inflate consumer prices without adding handling infrastructure.
- **Prohibition of Direct Sourcing**: Traditional APMC regulations legally prohibited food processors, exporters, and bulk retailers from buying directly from farmers outside the designated yard.

### 6.2 National Market Integration: e-NAM and Model Acts
To dismantle geographical barriers and establish a single unified national market:
- **Electronic National Agriculture Market (e-NAM)**: A pan-India electronic trading portal networking physical APMC mandis to create a unified online market with transparent auctioning, electronic payment settlements, and quality assaying.
- **Model Agricultural Produce and Livestock Marketing (APLM) Act, 2017**: Proposed by the Centre for state adoption to facilitate the establishment of private wholesale markets, direct marketing by farmers, and deregulation of perishables from mandi boundaries.
- **Contract Farming Frameworks**: Institutionalizing legal protections for farmers entering forward supply contracts with agribusiness firms, guaranteeing minimum pre-agreed prices while prohibiting sponsors from acquiring ownership or liens over agricultural land.

### 6.3 Historical Evolution of Indian Land Reforms
Post-independence land policy pursued three consecutive waves of structural transformation:
1. **Abolition of Intermediaries (Zamindari Abolition)**: The most successful legislative reform, transferring unencumbered proprietary rights to roughly 20 million cultivating tenants and bringing direct fiscal relations between cultivator and state.
2. **Tenancy Reforms**: Aimed at rent regulation (capping rents at 20–25% of gross produce), security of tenure against arbitrary eviction, and conferment of ownership on permanent cultivating tenants. Implementation proved uneven, causing extensive informal oral leases and covert tenancy evictions.
3. **Land Ceilings & Consolidation**: Legislation capping the maximum agricultural acreage permissible per household. Surplus land was redistributed to landless agricultural laborers. Consolidation of fragmented parcels (*Chakbandi*) yielded significant productivity gains in Punjab, Haryana, and Western UP, but languished elsewhere.
4. **Modern Land Policy**: Shifted toward the **Model Agricultural Land Leasing Act (2016)** formulated by NITI Aayog to formalize land leasing without tenants acquiring adverse possession rights, and the **Digital India Land Records Modernization Programme (DILRMP)** to establish conclusive, tamper-proof title deeds.

---

## Unit 7: Salient Features of ‘New India’ & Structural Transformation

### 7.1 India’s Anomalous Structural Transformation
In classic developmental economics (Kuznets, Clark, Lewis), economies transition through three sequential stages:
$$\\text{Primary Sector (Agriculture)} \\longrightarrow \\text{Secondary Sector (Manufacturing)} \\longrightarrow \\text{Tertiary Sector (Services)}$$

India defied this universal historical trajectory:
- Between 1950 and 2020, India transitioned directly from an agrarian economy to a **service-dominated economy**, with the services sector expanding to generate over **54% of national GVA**.
- Manufacturing stagnated as a proportion of GDP, hovering stubbornly between 14% and 17% for three decades—a phenomenon termed **"Premature Deindustrialization."**
- Because high-value service subsectors (software engineering, finance, telecommunications, business consulting) are skill-intensive and cannot absorb millions of low-skilled agricultural workers, labor moved primarily into low-productivity informal construction, transport, and petty retail rather than organized factories.

### 7.2 The Demographic Dividend Window
India possesses one of the world's youngest populations, with a median age of approximately 28 years and over **65% of the total population in the working-age bracket (15–59 years)**. This demographic window offers substantial economic advantages:
- **High Savings Ratio**: Working-age cohorts have a higher propensity to save than dependents, expanding the domestic loanable funds pool.
- **Favorable Dependency Ratio**: A low ratio of non-working dependents to active workers maximizes per capita income expansion.
- **Demographic Time-Bomb Risk**: If the state fails to provide quality technical education, vocational skills, and formal manufacturing employment, the dividend risks transforming into social unrest and youth underemployment.

### 7.3 Formalization and the Digital Economy
The post-2016 economic landscape witnessed accelerated structural formalization:
- **The India Stack Architecture**: Digital identity (Aadhaar), universal bank accounts (PMJDY), and mobile payments (UPI) eliminated friction, enabling direct fiscal delivery without leakage.
- **Formalization Pressures**: The rollout of the Goods and Services Tax (GST) and digital invoicing integrated millions of small businesses into formal accounting and financial credit pipelines.

---

## Unit 8: Industrial Policy Evolution, License Raj & Disinvestment Dynamics

### 8.1 Industrial Policy Resolutions: 1948 and 1956
Post-independence industrial development was shaped by the state-led socialist planning model:
- **Industrial Policy Resolution (IPR) 1948**: Introduced the concept of the "Mixed Economy," dividing industries into public, state-controlled, and private sectors.
- **Industrial Policy Resolution (IPR) 1956 ("Economic Constitution of India")**: Codified the Mahalanobis strategy of heavy industrialization, prioritizing capital goods over consumer commodities:
  - **Schedule A (17 industries)**: Exclusive monopoly of the Central Government (atomic energy, railways, defense equipment, heavy electricals).
  - **Schedule B (12 industries)**: Progressively state-owned, with private enterprise playing a supplementary role (fertilizers, minerals, road transport).
  - **Schedule C**: Remaining consumer and light industries open to private capital, strictly regulated via industrial licensing.

### 8.2 The Pathology of the License-Permit-Quota Raj
Between 1956 and 1991, the **Industries (Development and Regulation) Act, 1951** and the **Monopolies and Restrictive Trade Practices (MRTP) Act, 1969** institutionalized rigid bureaucratic control:
- **Licensing Restrictions**: Private firms required central licenses not only to open new factories, but to expand production capacity, diversify product lines, or change plant locations.
- **Import Substitution & Tariff Walls**: Excessive customs tariffs and import quotas protected uncompetitive domestic monopolies, creating chronic shortages of essential goods, technological obsolescence, and poor consumer quality.
- **Public Sector Hemorrhage**: Central Public Sector Enterprises (CPSEs) suffered from bureaucratic interference, soft budget constraints, politically dictated pricing, and chronic operational losses.

### 8.3 The 1991 Industrial Policy Paradigm Shift
The macroeconomic balance-of-payments crisis of 1991 prompted sweeping deregulation:
- **Abolition of Industrial Licensing**: Compulsory industrial licensing was eliminated for all except a tiny handful of hazardous, chemical, and defense-related sectors.
- **Contraction of Public Sector Reservation**: Sectors reserved exclusively for the public sector were reduced from 17 down to only two: Atomic Energy and Railway Operations.
- **MRTP Deregulation**: Pre-entry asset thresholds for large corporate houses under the MRTP Act were scrapped, shifting legal focus from restricting business size to preventing anti-competitive behavior (culminating in the Competition Act, 2002).
- **Foreign Investment Liberalization**: Automatic approval for Foreign Direct Investment (FDI) up to 51% in high-priority industries, replacing discretionary approvals under FERA.

### 8.4 Disinvestment and the National Investment Fund (NIF)
To restructure loss-making CPSEs and unlock capital:
- **Minority Disinvestment**: Selling minority equity stakes (up to 49%) in public markets while retaining government control (>51%).
- **Strategic Disinvestment**: Relinquishing management control and transferring 50% or more of government equity to a strategic private buyer (e.g., Maruti Udyog, Bharat Aluminium, Air India).
- **National Investment Fund (NIF), 2005**: All proceeds from CPSE disinvestments are pooled into the NIF, managed by professional fund managers (SBI, UTI, LIC):
  - **75% of income**: Subsidizing capital expenditure in social sector programs (health, education, employment).
  - **25% of income**: Meeting the capital investment needs of profitable, expanding CPSEs.

---

## Unit 9: Infrastructure Bottlenecks & Public-Private Partnership Investment Models

### 9.1 The Infrastructure Deficit as a Macroeconomic Constraint
Physical infrastructure (transport, power generation, ports, urban mobility) represents the capital foundation of an economy. Verma highlights the macro constraints imposed by inadequate infrastructure:
- **High Logistics Costs**: Domestic freight logistics costs hovered around **13–14% of Indian GDP**, compared to 7–8% in advanced economies, rendering Indian manufacturing exports uncompetitive globally.
- **Inverted Modal Mix**: Road transport accounts for over **60% of freight traffic** despite being significantly more carbon-intensive and fuel-expensive than rail transport (which carries only ~30%).

### 9.2 Taxonomy of Public-Private Partnership (PPP) Models
To bridge the multi-trillion-dollar infrastructure gap without violating fiscal deficit targets under the FRBM Act, the state deployed diverse PPP concession structures:

\`\`\`
[Pure Public: EPC] ◄────── [Hybrid: HAM] ──────► [Pure Private: BOT-Toll / BOOT]
(Govt carries all risks)   (Risks shared 40:60)   (Private carries traffic/revenue risk)
\`\`\`

| PPP Model | Asset Ownership | Investment Capital | Revenue / Demand Risk | Operating Period & Return |
| :--- | :--- | :--- | :--- | :--- |
| **EPC (Engineering-Procurement-Construction)** | 100% Government | 100% Government Funded | Government assumes 100% risk | Private contractor paid milestone-based construction fees |
| **BOT-Toll (Build-Operate-Transfer)** | Concessionaire during lease; Govt after | 100% Private Concessionaire | Private concessionaire carries 100% traffic risk | Private entity collects user tolls for 20–30 years to recover capital + profit |
| **BOT-Annuity** | Concessionaire during lease; Govt after | 100% Private Concessionaire | Government assumes revenue risk | Government pays fixed semi-annual annuity payments to private developer |
| **HAM (Hybrid Annuity Model)** | Concessionaire during lease; Govt after | 40% Government Grant + 60% Private Equity/Debt | Government assumes 100% toll risk | Govt pays developer annuities over 15 years with inflation-linked interest |
| **BOOT / DBFOT** | Private during lease, transfers to Govt | Private Consortium | Private Consortium | Concessionaire designs, builds, finances, operates, and recovers costs via tolls |

### 9.3 The Kelkar Committee Recommendations on PPPs (2015)
Following a wave of stalled road and power projects caused by aggressive bidding, land acquisition delays, and aggressive commercial bank lending:
- **Contract Flexibility**: Replace rigid, unalterable concession agreements with flexible renegotiation frameworks to accommodate unforeseen macroeconomic shifts.
- **Risk Re-allocation**: Allocate risks strictly to the entity best equipped to manage them (e.g., government must assume land acquisition and statutory clearance risks, while private developers manage construction and operational efficiency).
- **Independent Regulators**: Establish dedicated infrastructure regulators to resolve disputes rapidly, avoiding lengthy judicial arbitration.
- **Infrastructure Debt Funds (IDFs)**: Foster specialized long-term institutional debt markets to replace asset-liability-mismatched commercial bank lending.

---

## Unit 10: External Sector, Balance of Payments & Global Economic Integration

### 10.1 Double-Entry Balance of Payments (BoP) Accounting
The Balance of Payments constitutes the comprehensive statistical record of all economic and financial transactions between the residents of an economy and the rest of the world over an accounting period:

$$\\text{Current Account Balance} + \\text{Capital Account Balance} + \\text{Errors and Omissions} = \\Delta \\text{Foreign Exchange Reserves}$$

#### 1. The Current Account
Captures transactions involving the exchange of real goods, services, and current income:
- **Merchandise Trade Balance**: Visible Exports minus Visible Imports (chronically negative for India due to petroleum and electronics imports).
- **Invisibles Balance**:
  - **Services**: Net earnings from software exports, IT-enabled services, tourism, and transportation (consistently positive surplus).
  - **Transfers (Remittances)**: Unilateral worker remittances sent by non-resident Indians abroad (India is the world's leading remittance recipient, exceeding \$100 billion annually).
  - **Income**: Net payments of interest, dividends, and profits on foreign assets/investments (typically negative).

#### 2. The Capital Account
Captures cross-border financial claims, liabilities, and asset transfers:
- **Foreign Direct Investment (FDI)**: Stable, long-term capital inflows acquiring lasting management interest (≥10% equity) in domestic enterprises. Non-debt creating.
- **Foreign Portfolio Investment (FPI)**: Liquid, short-term investments in domestic stocks and bonds ("hot money") driven by international interest rate differentials and market sentiment.
- **External Commercial Borrowings (ECBs)**: Commercial debt raised by domestic corporations from foreign lenders.
- **Banking Capital / NRI Deposits**: Foreign currency and non-resident rupee deposits held in domestic banks.

### 10.2 Current Account Deficit (CAD) Dynamics
India's structural Current Account Deficit is defined as:

$$\\text{CAD} = (\\text{Imports of Goods and Services} - \\text{Exports of Goods and Services}) + \\text{Net Outflow of Transfers and Income}$$

A sustainable CAD (traditionally 1.5% to 2.5% of GDP) reflects a developing nation absorbing foreign savings to fund domestic capital formation. However, an unsustainable CAD financed by volatile short-term portfolio flows (FPI) exposes the domestic currency to sudden external shocks, capital flight, and acute rupee depreciation.

### 10.3 Rupee Convertibility Trajectory
Convertibility signifies the legal freedom to exchange domestic currency into foreign currencies at market-determined exchange rates:
- **Current Account Convertibility**: Fully adopted by India in August 1994 by accepting the obligations of Article VIII of the IMF Articles of Agreement. Freedom to access foreign exchange for trade in goods, services, travel, education, and interest payments.
- **Capital Account Convertibility**: Retained under regulated, partial convertibility. The **S.S. Tarapore Committees (1997 and 2006)** outlined rigorous preconditions before permitting full capital account convertibility:
  - Gross fiscal deficit contained below 3.5% of GDP.
  - Mandated inflation rate between 3% and 5%.
  - Gross Non-Performing Assets (NPAs) of the banking system reduced below 5%.
  - Robust foreign exchange reserve cushion adequate to cover at least 6 to 9 months of imports and short-term external debt.

### 10.4 India and the Multilateral World Trade Organization (WTO)
Verma outlines India's strategic defense of developmental policy space within the WTO:
- **Agreement on Agriculture (AoA)**:
  - **Green Box**: Subsidies with minimal trade distortion (R&D, disaster relief, infrastructure) permitted without financial caps.
  - **Amber Box**: Direct price support and input subsidies deemed trade-distorting, capped at **10% of total agricultural production value (de minimis limit)** for developing countries.
  - **The Peace Clause**: Secured at the 2013 Bali Ministerial Conference, legally shielding India's public stockholding programs for food security (procurement at MSP for PDS) from WTO dispute challenges even if subsidies breach the 10% threshold.
- **TRIPS & Public Health**: Defending the flexibilities guaranteed under the Doha Declaration on TRIPS and Public Health (2001), specifically the sovereign right to issue **Compulsory Licenses** to manufacture affordable generic medications during public health crises, resisting Western "evergreening" patent extensions.

---

## Systematic Comparative Synthesis: Verma vs. Sankarganesh

| Conceptual Dimension | Sankarganesh K. (*Key Concepts*) | Sanjeev Verma (*The Indian Economy*) |
| :--- | :--- | :--- |
| **Primary Methodological Focus** | Rigorous mathematical accounting, statutory formulas, and balance sheet mechanics. | Structural-institutional evolution, policy trade-offs, and socio-economic dynamics. |
| **National Income Framing** | Step-by-step arithmetic derivations of factor-to-market prices, GVA deflators, and base years. | Broader critique of output versus development, examining welfare deficits and structural exclusions. |
| **Poverty & Social Welfare** | Detailed committee formulas, reference periods (URP vs. MRP), and NSSO survey methodology. | Structural critique of the trickle-down failure, rights-based governance (MGNREGA), and healthcare deficits. |
| **Agrarian Economy** | Focus on MSP calculation formulas ($A_2$, $A_2+FL$, $C_2$) and institutional lending metrics. | Comprehensive supply-chain analysis: APMC cartels, e-NAM, land ceilings, and allied sector dynamics. |
| **Public Finance & Industry** | Budgetary deficit accounting geometry, FRBM rules, and constitutional tax articles (279A, 280). | Industrial policy history (1948–1991), license-raj pathology, and disinvestment/NIF capital allocations. |
| **Infrastructure Finance** | Survey of money/capital market debt instruments and corporate bond yields. | In-depth operational comparison of PPP concession models (BOT, HAM, EPC, BOOT) and Kelkar reforms. |

---

## Pedagogical Self-Test Questions

1. **National Income Accounting**: If an economy experiences a 12% increase in Nominal GDP during a year when the GDP Deflator registers 108 (with base year = 100), what is the exact percentage growth in Real GDP? Explain why the GDP Deflator is structurally superior to the Consumer Price Index for computing economy-wide price trends.
2. **Poverty & Inclusivity**: Contrast the Suresh Tendulkar and C. Rangarajan committee methodologies for defining the rural and urban poverty lines. How does the Multidimensional Poverty Index (MPI) transcend expenditure-based measures?
3. **Food Security & Subsidy Geometry**: Derive the mathematical formula for the Central Government's food subsidy bill. Explain how freezing Central Issue Prices while escalating Minimum Support Prices distorts FCI's financial balance sheet.
4. **Agrarian Marketing**: Why did the state-level APMC mandis fail to realize their original objective of protecting farmers? How does the e-NAM architecture resolve spatial price dispersion across regional agricultural markets?
5. **Infrastructure PPPs**: Compare the Engineering-Procurement-Construction (EPC) model with the Hybrid Annuity Model (HAM). Which model provides the optimal balance of risk-sharing for highway construction in an environment characterized by tight commercial bank credit?
6. **External Sector Resilience**: Explain the operational difference between Current Account Convertibility and Full Capital Account Convertibility. Why did the Tarapore Committee recommend strict fiscal, inflationary, and banking preconditions before liberalizing capital account transactions?
`;

const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Master Knowledge Codex</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    .econ-badge {
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
    .badge-institutional { background: #e0f2fe; color: #075985; }
    .badge-policy { background: #fef3c7; color: #92400e; }
    .badge-market { background: #dcfce7; color: #166534; }
    .formula-box {
      background: var(--bg-surface-secondary, #f8fafc);
      border-left: 4px solid var(--accent, #3b82f6);
      padding: 1rem;
      margin: 1rem 0;
      font-family: monospace;
      font-size: 0.95rem;
      border-radius: 0 4px 4px 0;
    }
    .econ-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .econ-card {
      border: 1px solid var(--border-color, #e2e8f0);
      border-radius: 8px;
      padding: 1.25rem;
      background: var(--bg-surface, #ffffff);
    }
    .econ-card h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: var(--text-primary, #0f172a);
    }
    .comp-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      font-size: 0.9rem;
    }
    .comp-table th, .comp-table td {
      border: 1px solid var(--border-color, #cbd5e1);
      padding: 0.6rem 0.8rem;
      text-align: left;
    }
    .comp-table th {
      background: var(--bg-surface-secondary, #f1f5f9);
    }
  </style>
</head>
<body class="reader-mode">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="breadcrumb">
          <a href="../../index.html">Library</a> &rsaquo;
          <a href="../../index.html#economics">Economic Sciences & Policy</a> &rsaquo;
          <span>${title}</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
          <div class="view-toggles">
            <button class="view-btn active" data-view="journey">Source Journey</button>
            <button class="view-btn" data-view="map">Knowledge Units</button>
            <button class="view-btn" data-view="policy">Policy Matrix</button>
          </div>
        </div>
      </div>
    </header>

    <main class="reader-main">
      <section class="codex-hero">
        <div class="hero-content">
          <div class="domain-tag">Macroeconomic Foundations & Public Policy</div>
          <h1 class="codex-title">${title}</h1>
          <p class="codex-subtitle">Second Edition • By <strong>${author}</strong></p>
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
          ${masterNotes.replace(/# Master Codex:[\s\S]*?---\n/, '').split('\n\n').map(p => {
            if (p.startsWith('## ')) return `<h2>${p.replace('## ', '')}</h2>`;
            if (p.startsWith('### ')) return `<h3>${p.replace('### ', '')}</h3>`;
            if (p.startsWith('#### ')) return `<h4>${p.replace('#### ', '')}</h4>`;
            if (p.startsWith('$$')) return `<div class="formula-box">${p.replace(/\$\$/g, '')}</div>`;
            if (p.startsWith('- ')) return `<ul>${p.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('')}</ul>`;
            if (p.startsWith('| ')) return `<p><em>[Comparative Table rendered in Master Codex Markdown]</em></p>`;
            return `<p>${p}</p>`;
          }).join('\n')}
        </article>
      </section>

      <!-- VIEW B: KNOWLEDGE MAP -->
      <section id="view-map" class="view-section">
        <div class="units-grid">
          ${knowledgeUnits.map(ku => `
            <div class="unit-card" id="${ku.id}">
              <span class="econ-badge badge-${ku.materiality === 'critical' ? 'critical' : 'policy'}">${ku.unitType}</span>
              <h3>Unit ${ku.order}: ${ku.title}</h3>
              <p class="unit-summary">${ku.summary}</p>
              <div class="unit-meta">
                <span>Status: <strong>${ku.epistemicStatus}</strong></span> •
                <span>Materiality: <strong>${ku.materiality}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- VIEW C: POLICY MATRIX & OPERATIONAL MODELS -->
      <section id="view-policy" class="view-section">
        <div class="econ-grid">
          <div class="econ-card">
            <h4>National Income Conversions</h4>
            <div class="formula-box">GDP_MP = GVA_Basic + (Product Taxes - Product Subsidies)</div>
            <p><strong>GVA at Basic Prices:</strong> Captures production costs + net production taxes (land revenues, stamp duties).</p>
            <p><strong>GDP Deflator:</strong> (Nominal GDP / Real GDP) × 100. Captures broad economy-wide price inflation.</p>
          </div>
          <div class="econ-card">
            <h4>Food Subsidy & FCI Accounting</h4>
            <div class="formula-box">Food Subsidy = Economic Cost - Central Issue Price (CIP)</div>
            <p><strong>Economic Cost:</strong> Acquisition Cost (MSP + statutory mandi levies) + Distribution Cost (freight, storage, finance).</p>
            <p><strong>NFSA 2013:</strong> 75% rural and 50% urban population legally entitled to subsidized grains.</p>
          </div>
          <div class="econ-card">
            <h4>PPP Infrastructure Concessions</h4>
            <div class="formula-box">HAM = 40% Govt Grant + 60% Concessionaire Capital</div>
            <p><strong>BOT-Toll:</strong> Private entity carries 100% traffic risk.</p>
            <p><strong>HAM:</strong> Government assumes revenue/traffic risk; developer receives bi-annual annuities over 15 years.</p>
          </div>
          <div class="econ-card">
            <h4>External Sector & Convertibility</h4>
            <div class="formula-box">BoP: Current Account + Capital Account + Errors = ΔForex Reserves</div>
            <p><strong>Current Account:</strong> Fully convertible under Article VIII of IMF (since 1994).</p>
            <p><strong>Capital Account:</strong> Regulated convertibility subject to Tarapore committee fiscal and NPA preconditions.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>The Indian Economy</em> by Sanjeev Verma (Second Edition)</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

// Write outputs
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
