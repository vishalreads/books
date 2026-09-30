const fs = require('fs');
const path = require('path');

const slug = 'unshakeable-tony-robbins';
const title = 'Unshakeable';
const author = 'Tony Robbins (with Peter Mallouk)';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: 'ku-robbins-01',
    title: 'The Unshakeable Mindset & The Compound Engine of Wealth',
    unitType: 'financial-philosophy',
    summary: 'Defines the state of being "Unshakeable": absolute psychological serenity, clarity, and systematic conviction amidst economic volatility and market crashes. Deconstructs the mathematical miracle of compound interest, the danger of remaining on the sidelines, and the imperative of transforming from a pure economic consumer into an equity asset owner.',
    epistemicStatus: 'source-foundational',
    materiality: 'critical',
    order: 1
  },
  {
    id: 'ku-robbins-02',
    title: 'Market Cycles, Volatility & The Seven Freedom Facts',
    unitType: 'market-mechanics',
    summary: 'Forensic historical analysis of market corrections and bear markets across a century of S&P 500 data. Formulates the Seven Facts that dispel fear: corrections occur annually on average; fewer than 20% of corrections morph into bear markets; nobody can consistently time the market; the stock market rises over time despite short-term drops; bear markets historically occur every 3–5 years; bear markets become bull markets; and the greatest danger is being out of the market during sudden recovery rebounds.',
    epistemicStatus: 'source-empirical-statistical',
    materiality: 'critical',
    order: 2
  },
  {
    id: 'ku-robbins-03',
    title: 'The Wall Street Fee Matrix & The Tyranny of Compounding Costs',
    unitType: 'financial-forensics',
    summary: 'Deconstructs the arithmetic of wealth destruction perpetrated by hidden investment fees. Mathematical proof of Jack Bogle’s rule: "In investing, you get what you don’t pay for." Exposes how a seemingly innocuous 2% in active mutual fund expense ratios, 12b-1 marketing levies, turnover trading friction, and transaction costs erodes 50% to 65% of an investor’s lifetime portfolio wealth over a 30-year accumulation horizon.',
    epistemicStatus: 'source-mathematical-forensic',
    materiality: 'critical',
    order: 3
  },
  {
    id: 'ku-robbins-04',
    title: 'Retirement Account Governance & The 401(k) Hidden Fee Maze',
    unitType: 'retirement-architecture',
    summary: 'Investigates the structural flaws and conflicts of interest inside employer-sponsored retirement plans. Analyzes the Department of Labor fee disclosure rules, exposes the hidden administrative, recordkeeping, and wrap fees embedded in 401(k) menus, and provides the step-by-step mechanism to audit corporate retirement plans and replace costly proprietary funds with low-cost index tracking.',
    epistemicStatus: 'source-regulatory-operational',
    materiality: 'critical',
    order: 4
  },
  {
    id: 'ku-robbins-05',
    title: 'The Fiduciary Standard vs. The Broker-Dealer Suitability Trap',
    unitType: 'advisor-governance',
    summary: 'Demarcates the profound legal and ethical gulf separating two classes of financial intermediaries: Broker-Dealers governed by the lax "Suitability Standard" (legally permitted to sell high-commission proprietary products) versus Registered Investment Advisors (RIAs) bound by the strict "Fiduciary Standard" (mandated under the Investment Advisers Act of 1940 to act exclusively in the client’s best interest). Outlines the 7 diagnostic questions to uncover advisor conflicts.',
    epistemicStatus: 'source-legal-institutional',
    materiality: 'critical',
    order: 5
  },
  {
    id: 'ku-robbins-06',
    title: 'The Core Four Principles of Investment Decision-Making',
    unitType: 'investment-framework',
    summary: 'Codifies the four universal rules followed by the world’s greatest financial minds (Ray Dalio, Warren Buffett, Jack Bogle, David Swensen): 1. Don’t Lose Money (Downside Protection and capital preservation); 2. Asymmetric Risk/Reward (risk \$1 to make \$5); 3. Tax Efficiency (maximizing net returns through strategic asset location and tax-loss harvesting); 4. Diversification across multiple non-correlated dimensions.',
    epistemicStatus: 'source-heuristic-rule',
    materiality: 'critical',
    order: 6
  },
  {
    id: 'ku-robbins-07',
    title: 'Multi-Dimensional Diversification & Asset Class Mechanics',
    unitType: 'portfolio-engineering',
    summary: 'Deconstructs the four levels of systematic diversification: 1. Across distinct asset classes (equities, fixed-income debt, real estate, commodities); 2. Within asset classes (broad market capitalization weighting rather than stock picking); 3. Across global markets, currencies, and economies; 4. Across time (dollar-cost averaging to neutralize entry-point volatility).',
    epistemicStatus: 'source-quantitative-structural',
    materiality: 'critical',
    order: 7
  },
  {
    id: 'ku-robbins-08',
    title: 'Slaying the Bear: Dynamic Asset Allocation & Opportunistic Rebalancing',
    unitType: 'tactical-execution',
    summary: 'Operational playbook for surviving and exploiting bear markets. Explains Peter Mallouk’s asset allocation strategies: structuring short-term income cushions (living expenses in cash/short-term bonds) to eliminate forced liquidation during market troughs; systematic opportunistic rebalancing (selling appreciating assets to buy beaten-down high-quality equities); and capitalizing on panic-driven market mispricings.',
    epistemicStatus: 'source-tactical-operational',
    materiality: 'critical',
    order: 8
  },
  {
    id: 'ku-robbins-09',
    title: 'Behavioral Finance & Silencing the Six Cognitive Saboteurs',
    unitType: 'behavioral-psychology',
    summary: 'Applies behavioral economics (Kahneman-Tversky prospect theory) to diagnose the six psychological biases that destroy individual investor returns: 1. Confirmation Bias; 2. Recency Bias (extrapolating the immediate past); 3. Overconfidence (illusion of predictive skill); 4. Greed and Herd Mentality (FOMO); 5. Home Country Bias; 6. Loss Aversion (pain of loss twice as intense as pleasure of gain).',
    epistemicStatus: 'source-cognitive-psychological',
    materiality: 'critical',
    order: 9
  },
  {
    id: 'ku-robbins-10',
    title: 'The Ultimate Mastery: The Art of Fulfillment & “Real Wealth”',
    unitType: 'existential-wealth',
    summary: 'Formulates Robbins’ foundational existential distinction: "Success without fulfillment is the ultimate failure." Deconstructs the neuro-emotional mechanics of suffering: the three universal suffering triggers—Loss, Less, and Never. Establishes the daily practice of living in a "Beautiful State," untethering joy from external market outcomes, and recognizing unconditional contribution as the sole durable source of true wealth.',
    epistemicStatus: 'source-philosophical-existential',
    materiality: 'critical',
    order: 10
  }
];

const masterNotes = `# Master Codex: Unshakeable: Your Financial Freedom Playbook
**Author**: Tony Robbins (with Peter Mallouk)  
**Foreword**: Jack Bogle (Founder, Vanguard) | **Introduction**: Steve Forbes (CEO, Forbes)  
**Discipline**: Behavioral Finance, Portfolio Architecture & Wealth Preservation  
**Standard**: BKRS v2.0 Replacement-Grade Knowledge Codex  

---

## Executive Epistemological Overview

Tony Robbins' *Unshakeable: Your Financial Freedom Playbook* (Simon & Schuster) represents an extraordinary distillation of modern investment science, fiduciary governance, and behavioral economics. Written in the immediate aftermath of Robbins' massive 670-page masterwork *Money: Master the Game*, *Unshakeable* was co-authored with **Peter Mallouk**—the only independent financial advisor ranked #1 in the United States by *Barron's* for three consecutive years—and features an impassioned foreword by **John C. "Jack" Bogle**, the legendary founder of Vanguard and father of the index fund revolution.

The treatise is designed to resolve a fundamental paradox of modern capitalism:
> Why do the vast majority of intelligent, hard-working human beings fail to achieve enduring financial freedom, despite living through the greatest wealth-creating eras in world history?

Robbins and Mallouk demonstrate that financial failure is rarely a function of insufficient income or lack of intelligence; it is the predictable consequence of **two systemic structural predators**:
1. **The External Predator (The Wall Street Financial Extraction Machine)**: A multi-trillion-dollar industry engineered to obscure exorbitant fees, promote hyper-active trading that generates broker commissions while underperforming simple market indices, and exploit retail investors through conflicted "broker-dealer" suitability loopholes.
2. **The Internal Predator (The Human Brain's Paleolithic Wiring)**: Cognitive architecture evolved over hundreds of thousands of years for physical survival (fight-or-flight, pattern recognition, loss aversion) that systematically misleads investors into buying at market peaks out of greed (FOMO) and selling at market bottoms out of sheer terror.

To be **"Unshakeable"** is not merely to possess money; it is to achieve **unwavering emotional serenity, structural downside protection, and absolute operational clarity in a world of inescapable macroeconomic and financial turbulence**.

---

## Unit 1: The Unshakeable Mindset & The Compound Engine of Wealth

### 1.1 The Definition of Being Unshakeable
Robbins establishes that true financial peace of mind does not come from pretending that storms will never arrive. Volatility, economic recessions, geopolitical crises, and market crashes are not anomalous interruptions of normal capitalism—they are the invariant, rhythmic seasons of economic life.

Being "Unshakeable" implies:
- You have an unshakeable conviction in your long-term investment strategy, grounded in a century of verified economic facts rather than sensationalist daily media commentary.
- You have structured your portfolio so that no single economic winter—no matter how catastrophic—can destroy your lifestyle or wipe out your capital.
- You have trained your psychological faculties to view market panics not as catastrophes to be fled, but as historic, life-changing opportunities to acquire ownership stakes in premier businesses at fire-sale discount valuations.

### 1.2 The Mathematical Miracle of Compounding
The fundamental engine of wealth creation is the exponential mathematics of compound growth, famously described by Albert Einstein as the "eighth wonder of the world":

$$A = P \\left(1 + \\frac{r}{n}\\right)^{nt}$$

Robbins demonstrates this through the classic comparative thought experiment of two investors, **William and James**:
- **William** begins investing at age **19**, depositing **\$4,000 annually** for just **8 consecutive years** (a total principal investment of \$32,000), and then **completely stops investing at age 27**, leaving his accumulated capital to compound at an average annual return of **10%**.
- **James** starts late at age **27**, investing the identical **\$4,000 every single year without interruption for 38 consecutive years** until age 65 (a total principal investment of \$152,000—nearly 5 times William's principal).

| Investor | Annual Savings | Age Range of Investing | Total Out-of-Pocket Principal | Portfolio Value at Age 65 (10% Return) |
| :--- | :--- | :--- | :--- | :--- |
| Investor | Annual Savings | Age Range of Investing | Total Out-of-Pocket Principal | Portfolio Value at Age 65 (10% Return) |
| :--- | :--- | :--- | :--- | :--- |
| **William** | \$4,000 / year | Age 19 to 26 (8 Years Only) | **\$32,000** | **\$1,844,843** |
| **James** | \$4,000 / year | Age 27 to 65 (38 Consecutive Years) | **\$152,000** | **\$1,563,887** |

Despite investing \$120,000 less cash from his pocket, **William ends up with nearly \$300,000 more wealth than James**, purely because his capital had eight additional years to compound. The greatest risk in personal finance is not market volatility; it is the **unforgivable cost of waiting on the sidelines**.

### 1.3 The Rule of 72 and Real Purchasing Power
To calculate how rapidly capital doubles at a given compound rate of return without complex logarithmic computations, Robbins highlights the mathematical heuristic known as the **Rule of 72**:

$$\text{Years to Double Capital} \approx \frac{72}{\text{Annual Compounded Interest Rate } (r)}$$

- At **2%** (typical high-yield savings / money market): $72 / 2 = 36 \text{ years}$ to double.
- At **4%** (conservative fixed-income / government bonds): $72 / 4 = 18 \text{ years}$ to double.
- At **8%** (balanced index portfolio): $72 / 8 = 9 \text{ years}$ to double.
- At **10%** (historical long-term S&P 500 equity return): $72 / 10 = 7.2 \text{ years}$ to double.

Over a 40-year working career, capital compounding at 10% doubles more than **5.5 times**, multiplying the initial principal by a factor of over **45x**. Conversely, capital left idle in cash losing 3% annually to inflation loses half its purchasing power every 24 years ($72 / 3 = 24$).

### 1.4 Shifting from Economic Consumer to Asset Owner
Robbins emphasizes that the fundamental socioeconomic dividing line in modern market economies is not between labor and management, but between **pure consumers and asset owners**:
- Most people spend their entire lives working for fiat currency, exchanging 40 to 60 hours of vitality per week, and immediately transferring that currency to corporations (buying iPhones from Apple, coffee from Starbucks, cars from Toyota, cloud services from Amazon, medications from Pfizer).
- The "Unshakeable" imperative requires taking an automated, non-negotiable percentage of every paycheck (the "Freedom Fund", typically 10% to 20%) and directing it immediately into productive capital assets—becoming an owner of the very corporations whose products society consumes.

---

## Unit 2: Market Cycles, Volatility & The Seven Freedom Facts

### 2.1 Demystifying the Anatomy of Market Downturns
Financial news channels and brokerage firms profit by keeping investors in a perpetual state of hyper-agitation, anxiety, and breathless anticipation. To inoculate investors against panic, Robbins presents a forensic analysis of every market decline in the S&P 500 over the past 110 years (1900–2016), distilling them into **The Seven Freedom Facts**:

#### Fact 1: Corrections Occur on Average Once a Year
- A **Correction** is defined as a market drop of **10% or more, but less than 20%** from the recent peak.
- Historically, the S&P 500 has experienced a correction **every single year on average**.
- The average correction over the last century lasted just **54 days (less than two months)**, with an average decline of **13.5%**. If you expect a correction every year, you greet it with calm recognition rather than panicked surprise.

#### Fact 2: Fewer Than 20% of All Corrections Turn into Bear Markets
- More than **80% of all market corrections reverse and recover without escalating into a full-scale bear market**.
- Panicking and dumping equities every time the market drops 10% means taking real, irreversible financial losses 80% of the time based on an event that never materializes.

#### Fact 3: Nobody Can Consistently Predict Market Tops and Bottoms
- Wall Street "market timers" and economic prognosticators possess no consistent predictive accuracy.
- Even legendary institutional hedge funds and Nobel Prize-winning economists cannot reliably time the turning points of market cycles. In the words of Peter Lynch: *"Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves."*

#### Fact 4: The Stock Market Rises Over Time Despite Short-Term Drops
- Despite two catastrophic World Wars, the Great Depression of 1929, the 1970s stagflation, the 1987 Black Monday crash, the 2000 Dot-com bust, and the 2008 Global Financial Crisis, the US stock market has compounded at an average annual return of approximately **10% over the last century**.
- The underlying engine is the collective drive of corporate human ingenuity, productivity enhancements, and technological innovation.

#### Fact 5: Bear Markets Historically Occur Every Three to Five Years
- A **Bear Market** is defined as a drop of **20% or more** from the peak.
- Between 1900 and 2016, there were 34 bear markets—occurring on average every 3.5 years (or every 5 years post-WWII).
- The average bear market lasts approximately **one year (338 days)**, with an average peak-to-trough decline of **33%** (more than a third of which was driven by the extraordinary, once-in-a-century collapse of 1929–1932).

#### Fact 6: Bear Markets Invariably Transform into Bull Markets
- Every single bear market in human history has been followed by a powerful, multi-year bull market that obliterated previous highs.
- The average bull market lasts approximately **9 years**, generating cumulative gains of **over 300%**, vastly outperforming and erasing the temporary declines of the preceding bear market.

#### Fact 7: The Greatest Financial Danger Is Being Out of the Market
- Market timing is mathematically fatal because the market's greatest up days are clustered immediately adjacent to its worst down days.
- A landmark study by J.P. Morgan Asset Management evaluating the 20-year period from 1996 to 2015 revealed:
  - Staying fully invested delivered an annual return of **8.2%** (turning \$10,000 into \$48,160).
  - Missing the **10 best trading days** over those 20 years cut returns in half to **4.5%** (\$24,074).
  - Missing the **20 best days** dropped returns to **2.1%** (\$15,263).
  - Missing the **30 best days** generated a **negative return (-0.2%)**.
  - 6 of the 10 best trading days occurred within two weeks of the 10 worst trading days!

---

## Unit 3: The Wall Street Fee Matrix & The Tyranny of Compounding Costs

### 3.1 The Hidden Cost Architecture
Jack Bogle, founder of Vanguard, contributed the intellectual core of Robbins' investigation into fee extraction. Bogle’s fundamental law of investment arithmetic states:

$$\text{Net Investor Return} = \text{Gross Market Return} - \text{Frictional Costs (Fees + Trading Drag + Taxes)}$$

Most retail investors believe they are paying roughly 1% annually to their mutual funds. Robbins pulls back the curtain to reveal the **Four-Layer Fee Matrix**:

\`\`\`
                         THE TOTAL COST WATERFALL
   ┌─────────────────────────────────────────────────────────────────┐
   │ 1. Stated Expense Ratio: 1.00% to 1.50% (Management & Admin)    │
   ├─────────────────────────────────────────────────────────────────┤
   │ 2. 12b-1 Marketing & Distribution Fees: 0.25% to 0.50% (Kickbacks)
   ├─────────────────────────────────────────────────────────────────┤
   │ 3. Portfolio Turnover / Trading Costs: 0.50% to 1.00% (Bid-ask drag)
   ├─────────────────────────────────────────────────────────────────┤
   │ 4. Cash Drag & Opportunity Cost: 0.20% to 0.40% (Uninvested cash)
   └─────────────────────────────────────────────────────────────────┘
     TOTAL REAL ANNUAL FRICTION: 2.00% to 3.50% per annum
\`\`\`

### 3.2 The Arithmetic of 2%: How Fees Steal Half Your Wealth
Investors intuitively assume that paying a 2% fee leaves them with 98% of their returns. This is a catastrophic cognitive illusion. Because fees compound against the total asset base every single year, regardless of whether the fund makes or loses money, fees consume the bulk of the **compounding gains**:

$$\text{Future Value} = P \times (1 + r - f)^t$$

Robbins models an investment of **\$100,000 compounding over a 30-year horizon at an 8% gross annual market return**:
- **Scenario A (Low-Cost Index Fund at 0.10% Fee)**: Net return = 7.9%. Final portfolio value = **\$984,000**.
- **Scenario B (Average Active Mutual Fund at 1.00% Fee)**: Net return = 7.0%. Final portfolio value = **\$761,000** (a loss of \$223,000 to fees).
- **Scenario C (Conflicted Active Fund + Advisory Fee at 2.00% Fee)**: Net return = 6.0%. Final portfolio value = **\$574,000** (a loss of \$410,000 to fees).
- **Scenario D (High-Fee Mutual Fund at 3.00% Total Drag)**: Net return = 5.0%. Final portfolio value = **\$432,000** (a loss of \$552,000 to fees).

Under Scenario C, paying a 2% fee consumed **over 41% of the final wealth** that would have belonged to the investor. Under Scenario D, the financial industry took **more than 56% of the investor's total accumulated capital**, despite the investor providing 100% of the principal and bearing 100% of the market risk!

### 3.3 The Failure of Active Fund Managers (SPIVA Evidence)
The standard justification offered by Wall Street for these high fees is superior stock-picking expertise. Robbins cites the empirical evidence from S&P Dow Jones Indices (SPIVA scorecard):
- Over a **5-year period**, **84%** of actively managed domestic equity funds underperform the S&P 500 index.
- Over a **10-year period**, **90%** of active managers fail to beat the index.
- Over a **15-year period**, **96%** of active mutual funds fail to beat the market benchmark after deducting fees and trading expenses.
- Out of the 4% that did outperform, statistical research (Eugene Fama & Kenneth French) reveals that their excess return is overwhelmingly attributable to random chance (luck) rather than repeatable alpha. Paying premium fees for active stock picking is mathematically equivalent to betting against an insurmountable mathematical house edge.

---

## Unit 4: Retirement Account Governance & The 401(k) Hidden Fee Maze

### 4.1 The 401(k) Systemic Extraction
In the United States, corporate defined-benefit pensions were systematically dismantled over four decades, replacing guaranteed retirement stipends with self-directed **401(k) defined-contribution plans**. Robbins reveals that 401(k) plans have become a primary extraction mechanism for financial institutions:
- The average 401(k) plan carries dozens of hidden, unbundled fees: plan recordkeeping fees, custodial fees, trustee fees, third-party administrator (TPA) fees, and legal compliance charges.
- **The "Free" 401(k) Myth**: Financial institutions frequently pitch small-business employers with "free" 401(k) plan administration. In reality, the administrator recoup their expenses by forcing employees to invest exclusively in high-fee proprietary mutual funds that pay back-end revenue-sharing kickbacks to the administrator.
- **The Department of Labor (DOL) Fee Disclosure Rules**: Under ERISA regulations (Rule 408(b)(2) and 404(a)(5)), employers (plan sponsors) have a strict legal fiduciary duty to ensure that plan fees are reasonable. Yet, surveys reveal that over 70% of 401(k) participants mistakenly believe their retirement accounts are completely free of charge.

### 4.2 Restructuring Corporate Retirement Plans
Robbins details his collaboration with America's Best 401k to audit corporate retirement plans:
- Over 80% of small-to-mid-sized business 401(k) plans carried total annual fees exceeding **1.5% to 2.5% of total plan assets**.
- By replacing actively managed, high-expense mutual funds with low-cost exchange-traded funds (ETFs) tracking broad indices (Vanguard, iShares) and charging a transparent, flat administrative fee, employees' total retirement savings can be increased by **20% to 30% over their working careers**.
- Robbins provides an open blueprint for employees to request a formal Department of Labor fee audit from their HR department, legally protecting the company from ERISA class-action lawsuits while adding hundreds of thousands of dollars to workers' nest eggs.

---

## Unit 5: The Fiduciary Standard vs. The Broker-Dealer Suitability Trap

### 5.1 The Two Divergent Legal Worlds of Financial Advice
The general public assumes that anyone with the title "Financial Advisor," "Wealth Manager," or "Vice President of Investments" is legally obligated to place the client's financial interests first. Robbins reveals that this is completely false:

| Dimension | Broker / Registered Representative | Registered Investment Advisor (RIA) |
| :--- | :--- | :--- |
| **Governing Statute** | Securities Exchange Act of 1934 | **Investment Advisers Act of 1940** |
| **Legal Standard of Care** | **"Suitability Standard"** | **"Fiduciary Standard"** |
| **Legal Obligation** | Product must merely be "suitable" for client at the time of sale. | **Legally bound to put client's interests above their own at all times.** |
| **Compensation Model** | Commissions, sales loads, 12b-1 kickbacks, markup spreads. | **Fee-Only (Percentage of assets under management or hourly flat fee).** |
| **Conflict of Interest** | Inherent: legally permitted to sell higher-fee proprietary products that maximize broker commissions over superior cheaper alternatives. | Legally prohibited from accepting third-party commissions or kickbacks. |

### 5.2 The Seven Diagnostic Questions to Unmask Financial Advisors
Robbins provides a non-negotiable checklist for interviewing any financial professional:
1. **Are you a Registered Investment Advisor?** (If the answer is no, walk away).
2. **Are you or your firm affiliated with a broker-dealer?** (If yes, they are "dually registered" and can switch hats from fiduciary to broker whenever it suits them).
3. **Does your firm offer proprietary mutual funds or separate accounts?** (If yes, inherent conflict).
4. **Do you or your firm receive any third-party compensation or 12b-1 kickbacks?** (Must be an absolute "No").
5. **What is your specific investment philosophy?** (Must emphasize low-cost indexing, systematic asset allocation, and tax efficiency over speculative stock picking).
6. **What total fees will I pay—including management, custodial, and underlying fund costs?** (Demanding complete, unbundled written transparency).
7. **Where will my money be held?** (Must be held with an independent third-party custodian like Charles Schwab, Fidelity, or TD Ameritrade, never inside the advisor’s own private account—eliminating Bernie Madoff-style Ponzi fraud).

---

## Unit 6: The Core Four Principles of Investment Decision-Making

### 6.1 Principle 1: Don't Lose Money (Downside Protection)
Warren Buffett famously codified the two primary rules of investing:
- *Rule No. 1: Never lose money.*
- *Rule No. 2: Never forget rule No. 1.*

Robbins explains the brutal mathematical asymmetry of investment loss:

$$\\text{Required Gain to Break Even} = \\left( \\frac{1}{1 - L} \\right) - 1$$

| Portfolio Loss ($L$) | Required Percentage Gain to Break Even |
| :--- | :--- |
| **10% Loss** | **11.1% Gain** |
| **20% Loss** | **25.0% Gain** |
| **33% Loss** | **50.0% Gain** |
| **50% Loss** | **100.0% Gain (Must Double Your Money)** |
| **75% Loss** | **300.0% Gain** |

When an investor suffers a 50% loss during a market crash, they do not need a 50% gain to recover; they must generate a 100% gain just to return to their starting baseline—an achievement that can take a decade of patient compounding. Downside protection is the supreme prerequisite of long-term wealth.

### 6.2 Principle 2: Asymmetric Risk/Reward
Paul Tudor Jones, the legendary hedge fund manager who predicted the 1987 crash, introduced Robbins to the concept of **Asymmetric Risk/Reward**:
- Never enter an investment where you risk \$1 to make \$1.
- Always hunt for asymmetric investment setups where you risk **\$1 to make \$5 (a 5-to-1 risk/return ratio)**.
- *The Mathematical Power*: If you operate on a 5-to-1 ratio, you can be wrong **80% of the time** and still not lose money:
$$\\text{5 Trades: 4 Losses of } \\$1 = -\\$4 \\quad | \\quad 1 \\text{ Win of } \\$5 = +\\$5 \\quad | \\quad \\text{Net Profit} = +\\$1$$

### 6.3 Principle 3: Tax Efficiency
It is not what you earn that creates wealth; it is **what you keep after taxes**. Taxes represent the single largest lifetime expense for any investor:
- Realized short-term capital gains are taxed at ordinary income rates (up to 40%+ in high-tax jurisdictions), whereas long-term capital gains held for >1 year receive preferential rates (15–20%).
- **Asset Location**: Structuring tax-inefficient assets (taxable corporate bonds, REITs) inside tax-sheltered accounts (IRAs, 401(k)s), and placing tax-efficient index equities inside taxable brokerage accounts.
- **Tax-Loss Harvesting**: Systematically selling losing positions to offset realized capital gains and ordinary income, reinvesting proceeds immediately into non-identical correlated index assets to maintain market exposure while generating legal tax deductions.

### 6.4 Principle 4: Multi-Dimensional Diversification
Diversification is the only genuine "free lunch" in financial economics (as coined by Nobel Laureate Harry Markowitz). True diversification requires holding uncorrelated assets that respond differently to shifting economic regimes (growth vs. recession, inflation vs. deflation).

### 6.5 The Institutional Model: Ray Dalio's All-Weather Architecture
Robbins highlights his deep interview with Ray Dalio, founder of Bridgewater Associates (the largest hedge fund in history), who developed the **All-Weather Portfolio** based on Risk Parity principles. Dalio observed that traditional "60/40" portfolios (60% stocks, 40% bonds) are not balanced because equities are three times as volatile as bonds—meaning 85% to 90% of a 60/40 portfolio's risk is concentrated in the stock market.

Dalio's economic matrix identifies four fundamental economic environments ("seasons"):
1. **Higher than expected inflation** (commodities, gold, inflation-linked bonds outperform).
2. **Lower than expected inflation / deflation** (nominal government bonds, high-grade corporate debt outperform).
3. **Higher than expected economic growth** (equities, commodities, corporate bonds outperform).
4. **Lower than expected economic growth / recession** (treasury bonds outperform).

To achieve true risk balance without sacrificing returns, Dalio shared a simplified retail asset allocation blueprint:
- **30% Equities** (e.g., S&P 500 / broad total market index)
- **40% Long-Term U.S. Treasury Bonds** (20+ year maturities to protect against deflation and equity sell-offs)
- **15% Intermediate-Term U.S. Treasury Bonds** (7–10 year maturities for liquidity and stability)
- **7.5% Physical Gold** (monetary debasement and currency hedge)
- **7.5% Broad Commodities** (raw industrial materials and agricultural commodities to hedge supply-side inflation)

Historically, this allocation delivered annualized returns comparable to the equity market with **less than one-third of the volatility** and a maximum drawdown during the 2008 crash of less than -4%, compared to -50% for pure equities.

---

## Unit 7: Multi-Dimensional Diversification & Asset Class Mechanics

### 7.1 The Four Layers of Systematic Diversification

\`\`\`
                       THE FOUR DIVERSIFICATION PILLARS
   ┌─────────────────────────────────┬─────────────────────────────────┐
   │ 1. ACROSS ASSET CLASSES         │ 2. WITHIN ASSET CLASSES         │
   │ Equities, Fixed Income, Cash,   │ Broad Index Weighting, Never    │
   │ Real Estate, Commodities        │ Concentrated Single Stocks      │
   ├─────────────────────────────────┼─────────────────────────────────┤
   │ 3. ACROSS MARKETS & CURRENCIES  │ 4. ACROSS TIME (DCA)            │
   │ US, International Developed,    │ Dollar-Cost Averaging across    │
   │ Emerging Markets, Global Currs  │ Highs, Lows, and Plateaus       │
   └─────────────────────────────────┴─────────────────────────────────┘
\`\`\`

### 7.2 Deconstructing Asset Classes
1. **Equities (Stocks)**: Capital growth engine; ownership of corporate earnings; high historical returns (~10%) with high short-term volatility.
2. **Fixed-Income Debt (Bonds)**: Income generation and capital preservation; inverse relationship to interest rates; acts as a structural shock absorber during equity sell-offs.
3. **Cash & Cash Equivalents**: Guaranteed liquidity; zero nominal capital loss; purchasing power systematically destroyed by inflation over time.
4. **Real Assets (Real Estate, Commodities, TIPS)**: Inflation hedges; physical land and rental yields; gold and raw materials that preserve purchasing power when fiat currencies depreciate.

### 7.3 David Swensen's Yale Endowment Model Insights
David Swensen, who managed Yale University’s endowment from \$1 billion to over \$25 billion, provided Robbins with three fundamental institutional lessons for individual investors:
1. **Asset Allocation Explains Over 90% of Performance**: Academic research by Brinson, Hood, and Beebower confirmed that over 90% of the variation in portfolio returns is explained by the strategic asset allocation decision, not market timing or individual security selection.
2. **Equity Bias Is Essential for Long-Term Purchasing Power**: Fixed-income cannot outpace inflation and taxes over decades; a prudent investor must maintain significant equity exposure to capture real economic growth.
3. **Avoid Illiquidity Traps Without Institutional Scale**: While Yale utilized private equity and venture capital, retail investors are routinely charged extortionate 2-and-20 fees for mediocre private placements. Retail investors should replicate institutional returns via liquid, low-cost index ETFs.

---

## Unit 8: Slaying the Bear: Dynamic Asset Allocation & Opportunistic Rebalancing

### 8.1 The Two Portfolios: Growth Bucket vs. Security Bucket
Peter Mallouk and Robbins structure an investor's balance sheet into two distinct psychological and functional compartments:
- **The Security Bucket**: Composed of cash, treasury bills, short-term high-grade bonds, and life insurance guarantees. This bucket must hold **two to five years of living expenses**.
  - *Psychological Rationale*: When a severe bear market strikes, the investor never faces the catastrophic necessity of selling depressed equity shares to buy groceries or pay the mortgage. They draw living expenses entirely from the Security Bucket, giving the Growth Bucket ample time to recover.
- **The Growth Bucket**: Composed of global equities, index ETFs, real estate investment trusts (REITs), and private equity. Dedicated to long-term compounding.

### 8.2 The Three-Tier Retirement Cash Cascade
For investors approaching or living in retirement, Peter Mallouk implements a structured three-tier waterfall:

| Tier | Asset Category | Time Horizon | Purpose & Structure |
| :--- | :--- | :--- | :--- |
| **Tier 1: Immediate Cash** | Checking, Money Market, Ultra-Short T-Bills | Months 1 to 12 | Guarantees immediate daily cash flow; zero market risk. |
| **Tier 2: Income Cushion** | Short-to-Intermediate High-Grade Bonds, CDs | Years 2 to 5 | Generates predictable coupon interest; replenishes Tier 1 as spent. |
| **Tier 3: Long-Term Growth** | Broad Equity Indices, Dividend Aristocrats | Years 6 and beyond | Powers capital growth to defeat inflation; harvested only during bull market peaks. |

This waterfall prevents the devastating threat of **Sequence of Returns Risk**—the risk of experiencing a severe market downturn during the first five years of retirement while withdrawing fixed capital.

### 8.3 Systematic Rebalancing: The Counter-Intuitive Wealth Multiplier
Rebalancing enforces the iron discipline of **buying low and selling high** without emotional interference:

$$\text{Target Allocation: 60\% Stocks / 40\% Bonds}$$

- **After a Bull Market Surge**: Stocks appreciate to 75% while bonds shrink to 25%. Rebalancing mandates selling 15% of your equities at the peak and reinvesting proceeds into underperforming bonds.
- **After a Bear Market Crash**: Stocks plummet to 45% while bonds expand to 55%. Rebalancing forces you to sell high-priced bonds and **aggressively purchase depressed equities when everyone else is panicking**.
- **Rebalancing Triggers**: Investors should rebalance either on a calendar basis (annually) or using **Tolerance Bands** (e.g., rebalancing whenever an asset class deviates by more than 5% absolute from its target weight).

---

## Unit 9: Behavioral Finance & Silencing the Six Cognitive Saboteurs

### 9.1 The Paleolithic Brain in Modern Financial Markets
Daniel Kahneman and Amos Tversky established through **Prospect Theory** that the human brain experiences the psychological pain of a financial loss **two to two-and-a-half times more intensely** than the pleasure of an equivalent financial gain:

$$U(-\$10,000) \approx 2.5 \times |U(+\$10,000)|$$

This cognitive asymmetry drives investors to panic-sell during bear market bottoms to terminate emotional pain. Robbins categorizes the **Six Cognitive Traps**:

### 9.2 The Six Cognitive Saboteurs
1. **Confirmation Bias**: Seeking out only financial commentary that confirms pre-existing opinions while ignoring contradictory evidence.
2. **Recency Bias**: Projecting the immediate past into the indefinite future (believing a bull market will rise forever, or that a crash will never end).
3. **Overconfidence Bias**: The delusion that one possesses superior market intelligence, leading to excessive trading, market timing, and speculative concentration.
4. **Greed and Herd Mentality (FOMO)**: Buying assets at absurd peak valuations because "everyone else is getting rich" (Dot-com bubble, housing bubble, crypto manias).
5. **Home Country Bias**: Investing overwhelmingly in companies based in one’s own nation, ignoring 50%+ of global market opportunities and diversification benefits.
6. **Loss Aversion & Sunk Cost Fallacy**: Holding losing stocks indefinitely in the desperate hope of breaking even, rather than cutting losses and redeploying capital into superior compounders.

### 9.3 Inoculation Protocols: The Investment Policy Statement (IPS)
To counteract biological cognitive failure, Robbins and Mallouk require every serious investor to construct a written **Investment Policy Statement (IPS)** during a period of market calm. An effective IPS codifies:
- Explicit target asset allocations and rebalancing bands.
- Pre-committed rules of engagement during a 20%, 30%, or 50% market decline (e.g., "I will deploy cash reserves to purchase index ETFs when the S&P 500 declines 20%").
- Prohibitions against speculative trading, leverage, and single-stock concentration.
- A mandatory 48-hour cooling-off period before executing any unplanned transaction.

---

## Unit 10: The Ultimate Mastery: The Art of Fulfillment & “Real Wealth”

### 10.1 The Distinction: Science of Achievement vs. Art of Fulfillment
Robbins concludes the masterwork with an existential warning:
> "Success without fulfillment is the ultimate failure."

One can achieve mastery over the **Science of Achievement**—earning millions, building corporate conglomerates, mastering portfolio allocation, accumulating trophies—and still live in an emotional wasteland of chronic anxiety, depression, anger, and scarcity.

The **Art of Fulfillment** is subjective, spiritual, and emotional:
- Money is merely a vehicle; it cannot provide joy, love, meaning, or connection.
- If you have \$100 million and live in a state of constant resentment, paranoia, and stress, your actual emotional quality of life is zero.

### 10.2 The Three Universal Triggers of Suffering
Robbins demonstrates that all human psychological suffering—anger, anxiety, jealousy, despair—is triggered by obsessive self-focus anchored in three cognitive distortions:
1. **Loss**: Focusing on what you used to have that was taken away.
2. **Less**: Focusing on the belief that you have less than you should have, less than someone else, or that you are less worthy.
3. **Never**: The ultimate existential despair—believing that you will *never* get what you need, *never* find love, or *never* achieve security.

### 10.3 The Beautiful State and the Law of Contribution
- **The "Two-Millimeter Shift"**: Making the absolute decision that regardless of market movements, business setbacks, or external life circumstances, you will live your life in a **Beautiful State (gratitude, appreciation, love, grace, and playfulness)**.
- **The Ultimate Secret of Wealth**: *The secret to living is giving.* Unshakeable wealth is realized when you shift from a mentality of "What can I get?" to "What can I give?" Contribution shifts the human brain instantly out of survival mode and into a state of unconditional abundance.

---

## Pedagogical Self-Test Questions

1. **The Arithmetic of Fees**: Prove mathematically how a 2% total annual fee drag can erode more than 50% of an investor’s portfolio over a 30-year accumulation period compared to a low-cost index ETF. What constitutes the four layers of the fee matrix?
2. **Market Cycles & The Seven Facts**: Why does market timing historically result in catastrophic underperformance compared to a buy-and-hold index strategy? Cite the J.P. Morgan 20-year empirical findings on missing the 10 best trading days.
3. **Fiduciary Governance**: What is the legal distinction between the "Suitability Standard" governed by FINRA and the "Fiduciary Standard" mandated under the Investment Advisers Act of 1940? How can an investor identify whether an advisor is dually registered?
4. **Portfolio Architecture**: Explain the operational mechanics of the "Security Bucket" versus the "Growth Bucket" in Peter Mallouk's asset allocation model. How does systematic rebalancing mechanically enforce "buying low and selling high"?
5. **Behavioral Finance**: Using Kahneman and Tversky’s Prospect Theory, explain why loss aversion causes retail investors to panic-sell during bear market troughs. How does Recency Bias distort asset valuation during bull market peaks?
6. **The Psychology of Wealth**: Contrast the "Science of Achievement" with the "Art of Fulfillment." What are the three universal triggers of psychological suffering identified by Tony Robbins, and how does the decision to live in a "Beautiful State" redefine financial freedom?
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
    <span class="econ-badge badge-${ku.materiality === 'critical' ? 'critical' : 'policy'}">${ku.unitType}</span>
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
    .badge-fiduciary { background: #e0f2fe; color: #075985; }
    .badge-behavioral { background: #fef3c7; color: #92400e; }
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
          <a href="../../index.html#economics">Economic Sciences & Policy</a> &rsaquo;
          <span>${title}</span>
        </div>
        <div class="header-controls">
          <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
          <div class="view-toggles">
            <button class="view-btn active" data-view="journey">Source Journey</button>
            <button class="view-btn" data-view="map">Knowledge Units</button>
            <button class="view-btn" data-view="playbook">Playbook Matrix</button>
          </div>
        </div>
      </div>
    </header>

    <main class="reader-main">
      <section class="codex-hero">
        <div class="hero-content">
          <div class="domain-tag">Behavioral Finance & Wealth Architecture</div>
          <h1 class="codex-title">${title}</h1>
          <p class="codex-subtitle">Your Financial Freedom Playbook • By <strong>${author}</strong></p>
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

      <!-- VIEW C: PLAYBOOK MATRIX -->
      <section id="view-playbook" class="view-section">
        <div class="econ-grid">
          <div class="econ-card">
            <h4>The Arithmetic of 2% Fees</h4>
            <div class="formula-box">Net Return = Gross Return - (Fees + Drag + Taxes)</div>
            <p><strong>Jack Bogle's Law:</strong> A seemingly small 2% fee consumes 41% to 56% of your lifetime portfolio wealth over 30 years.</p>
          </div>
          <div class="econ-card">
            <h4>The Core Four Rules</h4>
            <div class="formula-box">1. Downside ◄ 2. Asymmetric ◄ 3. Tax ◄ 4. Diversify</div>
            <p><strong>Rule 1:</strong> Don't lose money (50% loss requires 100% gain to recover).</p>
            <p><strong>Rule 2:</strong> Hunt for asymmetric 5-to-1 risk/reward setups.</p>
          </div>
          <div class="econ-card">
            <h4>The Fiduciary Demarcation</h4>
            <div class="formula-box">Suitability Standard (Broker) ≠ Fiduciary Duty (RIA)</div>
            <p><strong>Mandate:</strong> Always hire an independent, fee-only Registered Investment Advisor (RIA) legally bound to put your interests first.</p>
          </div>
          <div class="econ-card">
            <h4>Behavioral Mastery</h4>
            <div class="formula-box">Prospect Theory: Loss Pain = 2.5x Pleasure of Gain</div>
            <p><strong>The Beautiful State:</strong> Eliminate the three suffering triggers (Loss, Less, Never); fulfillment is found in contribution.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Master Codex</p>
        <p>Canonical Source: <em>Unshakeable</em> by Tony Robbins with Peter Mallouk (Simon & Schuster)</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${readerHtml.length} chars)`);
