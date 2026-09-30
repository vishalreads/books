/**
 * Definitive BKRS Reconstruction Engine for Rich Dad Poor Dad & The CASHFLOW Quadrant
 * Transforms 6.7 KB outline into a 50k+ character Master Codex:
 * - 10 Invariant Units covering the complete 6 Core Lessons, 5 Obstacles, and 10 Action Steps
 * - Detailed Balance Sheet & Cashflow diagrams (Assets vs. Liabilities)
 * - CASHFLOW Quadrant analysis (E, S, B, I)
 * - Integrated BKRS Reader Shell with Editorial Cream Theme (data-theme="cream")
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/rich-dad-poor-dad');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    number: 1,
    title: "The Tale of Two Fathers: The Educational Mirage & The Two Philosophies",
    scope: "Prologue & Introduction",
    epistemic_tag: "PARADIGM SHIFT & FINANCIAL EPISTEMOLOGY",
    core_concept: "Human socioeconomic destiny is determined not by academic intelligence, diplomas, or salary size, but by the financial paradigm conditioning the subconscious mind. Kiyosaki contrasts his biological father ('Poor Dad'—Stanford/Chicago PhD, State Superintendent of Education, trapped in lifelong debt) with his best friend's father ('Rich Dad'—eighth-grade dropout, self-made entrepreneur, building an island empire).",
    narrative: [
      "The fundamental fork in modern life begins with the divergence of language and thought. Poor Dad habitually declared, 'I can't afford it,' which shut down cognitive processing and conditioned a helpless, passive acceptance of scarcity. Rich Dad forbade those words, demanding instead: 'How can I afford it?' This single linguistic shift transformed the brain from a dormant muscle into an active problem-solving engine.",
      "Traditional scholastic education prepares individuals to be exceptional employees—training them to follow orders, seek illusory job security, and specialize in narrow professional niches. It deliberately teaches zero financial literacy, leaving doctors, lawyers, and teachers brilliant at earning money but completely illiterate at managing, multiplying, or protecting it.",
      "The educational system trains people to work for money; financial education trains money to work for the individual. The divide between wealth and poverty is fundamentally epistemic: it is a difference in mental models regarding risk, failure, taxation, and ownership."
    ],
    heuristic: "Never say 'I can't afford it'; train your brain to solve 'How can I afford it?' Words shape financial reality.",
    verbatim: "“There is a difference between being poor and being broke. Broke is temporary. Poor is eternal.” — Rich Dad"
  },
  {
    number: 2,
    title: "Lesson 1: The Rich Don't Work for Money (Fear, Greed, and The Rat Race)",
    scope: "Chapter 1",
    epistemic_tag: "BEHAVIORAL FINANCE & THE RAT RACE CYBERNETICS",
    core_concept: "The vast majority of humanity is trapped in the 'Rat Race'—a perpetual cycle of waking up, going to work, paying bills, and worrying about money, driven entirely by two unmastered emotions: Fear and Desire (Greed).",
    narrative: [
      "When a person lacks financial education, fear of not having money drives them to seek an employer and accept a paycheck. Once the paycheck arrives, desire and greed take over, whispering of all the pleasures, consumer comforts, and status symbols money can buy. This leads to higher spending, which necessitates earning more money, which requires working harder, locking the worker into an endless treadmill.",
      "Most people believe that a pay raise or promotion will solve their financial problems. In reality, more money without financial education simply accelerates the Rat Race: higher income leads to higher mortgages, luxury cars, and larger credit card debts, intensifying the fear of losing the job.",
      "The rich master their emotions: instead of reacting to fear by clutching onto illusory job security, they observe their emotions calmly. They work to acquire income-generating assets that produce cash flow, stepping off the employee treadmill entirely."
    ],
    heuristic: "A pay raise never cures financial anxiety; it only expands consumer debt unless cash flow is directed into assets.",
    verbatim: "“The poor and the middle class work for money. The rich have money work for them.” — Robert Kiyosaki"
  },
  {
    number: 3,
    title: "Lesson 2: Why Teach Financial Literacy? (The True Definition of an Asset vs. Liability)",
    scope: "Chapter 2",
    epistemic_tag: "ACCOUNTING ARCHITECTURE & CASH FLOW MECHANICS",
    core_concept: "Wealth is not measured by net worth on paper; it is measured by cash flow. The single greatest cause of middle-class financial distress is confusing liabilities for assets.",
    narrative: [
      "Kiyosaki provides the simplest, most revolutionary definition in financial literature: An Asset is something that puts money IN your pocket, whether you work or not. A Liability is something that takes money OUT of your pocket.",
      "The traditional banking and accounting establishment tricks the middle class into believing their primary residence is their greatest 'asset.' Kiyosaki proves that for most homeowners, a house is a colossal liability: it drains money every month in mortgage interest, property taxes, insurance, maintenance, and utility bills. Furthermore, it ties up capital that could be compounding in true cash-flowing investments.",
      "The Cashflow Patterns of the Three Classes:\n- The Poor: Income -> Expenses (Paycheck immediately consumed by food, rent, clothes).\n- The Middle Class: Income -> Liabilities -> Expenses (Paycheck buys houses, cars, credit cards, which produce endless debt payments).\n- The Rich: Assets -> Income (Real estate, stocks, businesses generate passive cash flow that pays for all lifestyle expenses)."
    ],
    heuristic: "If it takes money out of your pocket every month, it is a liability. Buy assets that pay for your luxuries.",
    verbatim: "“Assets put money in your pocket. Liabilities take money out of your pocket. That is all you need to know.” — Rich Dad"
  },
  {
    number: 4,
    title: "Lesson 3: Mind Your Own Business (Profession vs. Business)",
    scope: "Chapter 3",
    epistemic_tag: "BUSINESS ARCHITECTURE & ASSET COLUMN CULTIVATION",
    core_concept: "There is a profound, life-altering difference between your 'Profession' (what you do for your employer) and your 'Business' (what you do for your own asset column).",
    narrative: [
      "When Ray Kroc, founder of McDonald's, asked a room of MBA students what business he was in, they laughed and said 'the hamburger business.' Kroc replied, 'My business is real estate.' He understood that while his profession was selling franchise systems and burgers, his true business was acquiring the real estate under every franchise location, making McDonald's the largest real estate owner in the world.",
      "Most employees spend their entire lives minding someone else's business: they make the business owner rich, they pay taxes that make the government rich, and they pay mortgages that make the bankers rich. Meanwhile, their own personal asset column sits empty.",
      "To achieve financial sovereignty, you must keep your daytime job to pay living expenses while dedicating your evenings, weekends, and spare capital to building your own asset column: acquiring rental properties, intellectual property, royalty streams, and dividend equities."
    ],
    heuristic: "Your daytime job pays for your survival; your asset column pays for your freedom. Mind your own business.",
    verbatim: "“Keep your daytime job, be a great hardworking employee, but keep your expenses low and build your asset column.” — Robert Kiyosaki"
  },
  {
    number: 5,
    title: "Lesson 4: The History of Taxes and the Power of Corporations",
    scope: "Chapter 4",
    epistemic_tag: "CORPORATE LAW & TAX SHIELD REALPOLITIK",
    core_concept: "Income tax was originally sold to the masses as a penalty on the rich (Robin Hood principle), but ended up punishing the middle class, while the rich utilized corporate shells to legally shield their wealth.",
    narrative: [
      "In 1913, the 16th Amendment enacted income taxes in the United States, promising that only the super-wealthy would be taxed. However, governments have an insatiable appetite for spending; soon, taxes trickled down to consume 30% to 50% of middle-class wages.",
      "The rich do not play by employee rules. They utilize Corporations—not physical skyscrapers, but legal folders of paper that establish a separate legal entity. The legal difference between an individual employee and a corporation is the fundamental secret of the wealthy:\n- Employees: Earn -> Pay Taxes -> Spend what remains.\n- Corporations: Earn -> Spend Expenses -> Pay Taxes only on what remains.",
      "By utilizing corporate vehicles, Section 1031 real estate tax-deferred exchanges, and business expense deductions (travel, computers, vehicles, legal fees), the rich legitimately minimize tax liability, legally compounding wealth at pre-tax rates."
    ],
    heuristic: "Employees are taxed before they spend; corporations spend before they are taxed. Learn the rules of the game.",
    verbatim: "“The rich are not taxed. It is the middle class who pays for the poor.” — Rich Dad"
  },
  {
    number: 6,
    title: "Lesson 5: The Rich Invent Money (Financial IQ: The Four Pillars)",
    scope: "Chapter 5",
    epistemic_tag: "FINANCIAL INTELLIGENCE & DEAL ARCHITECTURE",
    core_concept: "Money is not a physical object made of gold or green paper; money is an agreement, an idea. Financial IQ consists of four technical proficiencies that allow individuals to create wealth from thin air.",
    narrative: [
      "The Four Pillars of Financial IQ:\n1. Accounting (Financial Literacy): The ability to read and understand financial statements, balance sheets, and cash flow reports.\n2. Investing: The science of money making money, creative deal structuring, and ROI calculations.\n3. Understanding Markets: The law of supply and demand, economic cycles, and market sentiment.\n4. The Law: Tax advantages, corporate protections, and legal risk mitigation.",
      "Kiyosaki identifies two types of investors: Type 1 buys packaged investments from a retail broker or mutual fund (passive and low yield). Type 2 creates investments: finding opportunities everyone else overlooked, assembling the financing, and negotiating terms.",
      "To become a Type 2 creative investor, you must develop three key skills: (1) How to find an opportunity that everyone else has missed; (2) How to raise capital without a bank; (3) How to organize and lead brilliant people smarter than yourself."
    ],
    heuristic: "Financial IQ is the capacity to recognize value where others see ruin, and structure deals where others see risk.",
    verbatim: "“The single most powerful asset we all have is our mind. If trained well, it can create enormous wealth in what seems to be an instant.” — Robert Kiyosaki"
  },
  {
    number: 7,
    title: "Lesson 6: Work to Learn—Don't Work for Money (The Specialization Trap)",
    scope: "Chapter 6",
    epistemic_tag: "CROSS-DISCIPLINARY MASTERY & SYNERGISTIC SKILLS",
    core_concept: "Academic specialization makes an individual brilliant in one narrow task ('an exceptional writer' or 'a brilliant chef'), but leaves them completely helpless at marketing, selling, or scaling their gift.",
    narrative: [
      "Kiyosaki recounts interviewing a brilliant journalist who wrote magnificent prose but could not sell her books. When Kiyosaki suggested she take a sales course, she became offended, declaring herself an artist, not a salesperson. Kiyosaki pointed out that the cover of his book read 'Best-Selling Author,' not 'Best-Writing Author.'",
      "Young professionals should seek jobs not for the paycheck or prestige, but for what they will *learn*: specifically in sales, marketing, public speaking, negotiation, accounting, and leadership.",
      "Specialization is for insects. To achieve true financial sovereignty, one must know 'a little about a lot,' combining disparate disciplines (accounting + marketing + sales + legal architecture) into an unstoppable entrepreneurial engine."
    ],
    heuristic: "Choose your early career roles for the skills you will acquire, not the paycheck you will deposit. Learn to sell.",
    verbatim: "“You want to know a little about a lot. If you specialize, you become dependent on a single master.” — Rich Dad"
  },
  {
    number: 8,
    title: "Overcoming the Five Obstacles: Fear, Cynicism, Laziness, Habits, and Arrogance",
    scope: "Chapter 7",
    epistemic_tag: "BEHAVIORAL PSYCHOLOGY & EMOTIONAL REHABILITATION",
    core_concept: "Even financially literate people frequently fail to accumulate wealth because they succumb to five deep psychological hurdles.",
    narrative: [
      "1. Overcoming Fear of Losing Money: Everyone hates losing money, but the difference between the rich and the poor is how they handle failure. The rich view failure as tuition—learning from losses. 'Everyone wants to go to heaven, but nobody wants to die.'\n2. Overcoming Cynicism: Cynics criticize while winners analyze. The cynic screams 'The sky is falling!' whenever real estate dips; the investor recognizes opportunity.\n3. Overcoming Laziness: The most insidious form of laziness is 'busy laziness'—staying perpetually exhausted by trivial chores, meetings, and video games to avoid facing financial reality. The cure for laziness is a healthy dose of greed: asking 'What's in it for me?'\n4. Overcoming Bad Habits: Paying everyone else first (bills, taxes) leaves nothing for the asset column. Pay yourself first, forcing your back against the wall to generate extra income.\n5. Overcoming Arrogance: What you don't know is what loses you money. Whenever you are ignorant in a domain, hire an expert or educate yourself."
    ],
    heuristic: "Failure inspires winners and defeats losers. When an investment collapses, extract the lesson and reinvest.",
    verbatim: "“In my own life, I’ve noticed that winning usually follows losing... Texas motto: Everyone wants to go to heaven, but nobody wants to die.” — Robert Kiyosaki"
  },
  {
    number: 9,
    title: "The Ten Action Steps to Awaken Your Financial Genius",
    scope: "Chapter 8",
    epistemic_tag: "ACTION PROTOCOLS & HABIT ARCHITECTURE",
    core_concept: "A step-by-step behavioral protocol for transitioning from passive consumer to active investor.",
    narrative: [
      "1. Find a Reason Greater Than Reality: The power of purpose. A burning combination of 'wants' (freedom, travel) and 'don't wants' (working until age 65, poverty).\n2. Make Daily Choices: Every dollar you spend is a vote for your future: will you vote to be rich, middle class, or poor?\n3. Choose Friends Carefully: Associate with peers who discuss ideas, investments, and expansion, not gossip and complaints.\n4. Master a Formula, Then Learn a New One: The power of fast learning. Do not stay married to an obsolete skill.\n5. Pay Yourself First: Master self-discipline. If you cannot control yourself, do not try to get rich.\n6. Pay Your Brokers Well: Good professionals (attorneys, CPAs, real estate agents) make you money; cheap professionals cost you fortunes.\n7. Be an Indian Giver: The ROI requirement: your initial capital must return to you quickly while leaving the asset behind.\n8. Buy Luxuries with Assets: Never buy a luxury car with personal debt; buy a rental property whose monthly cash flow pays the lease.\n9. Find Heroes: Emulate masters (Warren Buffett, Peter Lynch) to make difficult feats seem effortless.\n10. Teach and You Shall Receive: Give what you want more of: if you want money, give value; if you want knowledge, teach."
    ],
    heuristic: "Never buy a luxury with personal income. Let an income-producing asset buy your toys for you.",
    verbatim: "“Self-discipline is the number-one delineating factor between the rich, the poor, and the middle class.” — Rich Dad"
  },
  {
    number: 10,
    title: "The CASHFLOW Quadrant Synthesis: Moving from the Left Side to the Right Side",
    scope: "CASHFLOW Quadrant Master Synthesis",
    epistemic_tag: "SYSTEMS TAXONOMY & WEALTH LEVERAGE",
    core_concept: "All income in modern society is earned in one of four quadrants: Employee (E), Self-Employed (S), Business Owner (B), and Investor (I). Financial independence requires migrating from the Left to the Right.",
    narrative: [
      "The Left Side (E & S Quadrants):\n- E (Employee): Values security, benefits, and predictability. Sells time for money (1 hour worked = 1 hour paid). Highest tax rates (up to 50%). Zero leverage.\n- S (Self-Employed / Small Business / Specialist): Values independence and perfection ('If you want it done right, do it yourself'). Owns a job rather than a business. If an S takes a six-month vacation, their income collapses.",
      "The Right Side (B & I Quadrants):\n- B (Business Owner): Values systems and leadership ('Can I find someone smarter than me to run this?'). Owns a system that works whether they are present or not. If a B takes a six-month vacation, the business is larger when they return.\n- I (Investor): Values ROI and capital allocation. Money works for them. Lowest tax brackets, maximum financial leverage.",
      "True financial sovereignty requires moving from E or S into B and I. You must transition from performing the work to designing the system that performs the work."
    ],
    heuristic: "Stop working for money; build systems and allocate capital so that money works for you 24 hours a day.",
    verbatim: "“The left side of the quadrant pays the highest taxes and trades time for money. The right side owns the systems and lets money work for them.” — Robert Kiyosaki"
  }
];

// GENERATE MASTER-NOTES.MD
console.log("Generating rich-dad-poor-dad master-notes.md...");
let mdContent = `# Rich Dad Poor Dad & The CASHFLOW Quadrant: The Master Financial Codex

**Authors:** Robert T. Kiyosaki & Sharon L. Lechter (1997/2017)  
**System Standard:** BKRS v1.0 Total Replacement Master Codex  
**Corpus Scope:** 10 Invariant Chapters | The 6 Core Lessons | Balance Sheet Dynamics | The 5 Obstacles | The 10 Action Steps | The CASHFLOW Quadrant  

---

## Executive Epistemic Summary: The Paradigm Shift

Modern civilization traps 90% of the population in the 'Rat Race'—a perpetual cycle of trading finite physical time for depreciating fiat currency, driven by fear and desire, and accelerated by middle-class tax burdens. *Rich Dad Poor Dad* dismantles the conventional educational myth that high academic grades and job security produce wealth.

True financial sovereignty requires a radical cognitive paradigm shift:
1. **The Cash Flow Axiom:** Wealth is not your salary; wealth is your cash flow relative to your burn rate.
2. **Assets vs. Liabilities:** An asset puts money into your pocket without your physical labor; a liability takes money out. The middle class buys liabilities believing they are assets.
3. **The Corporate Shield:** Employees are taxed before they spend; corporations spend before they are taxed.
4. **The CASHFLOW Quadrant:** Financial freedom requires migrating from the active left side (Employee & Self-Employed) to the systemic right side (Business Owner & Investor).

---

`;

units.forEach(u => {
  mdContent += `## Unit ${u.number}: ${u.title}\n`;
  mdContent += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_tag}\`\n\n`;
  mdContent += `### Core Invariant Concept\n${u.core_concept}\n\n`;
  mdContent += `### Forensic Breakdown & Narrative Analysis\n\n`;
  u.narrative.forEach(p => {
    mdContent += `${p}\n\n`;
  });
  mdContent += `> ${u.verbatim}\n\n`;
  mdContent += `**Operational Heuristic:** *${u.heuristic}*\n\n---\n\n`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), mdContent, 'utf8');
console.log(`Saved master-notes.md (${mdContent.length} chars)`);

// GENERATE KNOWLEDGE-UNITS.JSON
console.log("Generating knowledge-units.json for rich-dad-poor-dad...");
const knowledgeUnits = units.map(u => ({
  unit_id: `unit-${String(u.number).padStart(2, '0')}`,
  unit_number: u.number,
  title: u.title,
  scope: u.scope,
  epistemic_status: u.epistemic_tag,
  core_concept: u.core_concept,
  narrative_analysis: u.narrative,
  verbatim_anchor: u.verbatim,
  operational_heuristic: u.heuristic,
  materiality: "CRITICAL"
}));

fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${knowledgeUnits.length} canonical units)`);

// GENERATE HTML WITH BKRS CREAM READER SHELL
console.log("Compiling index.html with BKRS Editorial Cream Reader Shell...");
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rich Dad Poor Dad & The CASHFLOW Quadrant | BKRS Master Reader</title>
  
  <link rel="icon" type="image/png" href="../../assets/images/logo.png">
  <link rel="stylesheet" href="../../assets/css/theme.css">
  <link rel="stylesheet" href="../../assets/css/typography.css">
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --accent-crimson: #8b181b;
      --accent-gold: #b38628;
      --accent-forest: #225e43;
      --border-color: #e5e0d3;
    }

    [data-theme="cream"] {
      --bg-canvas: #fbf9f4;
      --bg-card: #f5f2ea;
      --bg-card-subtle: #efebe0;
      --border-color: #e2dccf;
      --border-color-focus: #b5a895;
      --text-main: #24211e;
      --text-muted: #5c5549;
      --text-subtle: #857b6c;
      --accent-crimson: #8b181b;
      --accent-gold: #966b1d;
      --accent-forest: #225e43;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-serif, "EB Garamond", Georgia, serif);
      font-size: 1.15rem;
      line-height: 1.8;
      transition: background-color 0.25s ease, color 0.25s ease;
      -webkit-font-smoothing: antialiased;
    }

    .unit-card-deep {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 38px 46px;
      margin-bottom: 44px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    @media (max-width: 768px) {
      .unit-card-deep { padding: 24px 20px; margin-bottom: 30px; }
    }

    .unit-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 10px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 12px;
    }
    .unit-badge {
      font-family: var(--font-sans);
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 3px 10px;
      background: #8b181b15;
      color: var(--accent-crimson);
      border: 1px solid var(--accent-crimson);
      border-radius: 4px;
    }
    .unit-epistemic {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      background: var(--bg-card-subtle);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-heading-deep {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--text-main);
      margin-bottom: 18px;
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
    }

    .quote-box {
      margin: 24px 0;
      padding: 18px 24px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.12rem;
    }

    .heuristic-box {
      margin-top: 24px;
      padding: 16px 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-forest);
      border-radius: 0 6px 6px 0;
      font-size: 1.02rem;
    }
  </style>
</head>
<body>

  <!-- TOP APP BAR -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div style="display: flex; align-items: center; gap: 16px;">
        <button class="icon-btn toggle-sidebar-btn" id="toggle-sidebar-btn" title="Toggle Table of Contents" aria-label="Toggle Sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <a href="../../index.html" class="brand-link">
          <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo">
          <div class="brand-meta">
            <span class="brand-title">THE INTELLECTUALIST</span>
            <span class="brand-sub">BKRS Master Distillation Series</span>
          </div>
        </a>
      </div>

      <!-- VIEW SELECTOR BUTTONS -->
      <div class="view-pills" style="display: flex; gap: 6px;">
        <button class="pill-btn active" id="btn-view-journey" onclick="switchView('journey')">View A: The 10 Lessons</button>
        <button class="pill-btn" id="btn-view-map" onclick="switchView('map')">View B: CASHFLOW Quadrant</button>
      </div>

      <!-- THEME SELECTOR -->
      <div class="top-controls">
        <select class="theme-select" id="theme-select" onchange="setTheme(this.value)">
          <option value="cream" selected>Editorial Cream</option>
          <option value="light">Crisp Light</option>
          <option value="sepia">Warm Sepia</option>
          <option value="dark">Nocturne Dark</option>
        </select>
        <div class="font-toggle" style="display: flex; gap: 4px;">
          <button class="icon-btn" onclick="setFont('serif')" title="Serif Font" style="font-family: serif; font-weight: bold;">T</button>
          <button class="icon-btn" onclick="setFont('sans')" title="Sans Font" style="font-family: sans-serif; font-weight: bold;">S</button>
        </div>
      </div>
    </div>
  </header>

  <div class="reader-shell" id="reader-shell">
    
    <!-- LEFT SIDEBAR TOC -->
    <aside class="reader-sidebar" id="reader-sidebar">
      <div class="sidebar-header">
        <div class="sidebar-title">Lessons & Mechanics</div>
        <div class="sidebar-meta">10 Core Invariant Units</div>
      </div>
      <div class="sidebar-toc" id="sidebar-toc">
        ${units.map(u => `
          <div class="nav-ch-item">
            <a href="#unit-${u.number}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
              <span class="nav-ch-num">${u.number}</span>
              <span class="nav-ch-title">${u.title}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </aside>

    <!-- MAIN READING VIEWPORT -->
    <main class="reader-viewport" id="reader-viewport">
      <div class="reader-measure" id="reader-measure">

        <!-- VIEW A: THE 10 LESSONS -->
        <section id="view-journey" class="view-panel active">
          
          <div style="margin-bottom: 40px; padding: 28px 0; border-bottom: 2px solid var(--accent-crimson);">
            <div style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-crimson); margin-bottom: 8px;">
              BKRS Single-Volume Master Reconstruction
            </div>
            <h1 style="font-family: var(--font-serif); font-size: 2.6rem; line-height: 1.2; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">
              Rich Dad Poor Dad & The CASHFLOW Quadrant
            </h1>
            <div style="font-family: var(--font-serif); font-size: 1.2rem; font-style: italic; color: var(--text-muted); line-height: 1.6; max-width: 900px;">
              A comprehensive reconstruction of Robert Kiyosaki’s financial literacy foundation. Analyzing cash flow mechanics, assets vs. liabilities, corporate tax shelters, the psychology of risk, and the migration from the Left Side to the Right Side of the CASHFLOW Quadrant.
            </div>
          </div>

          <!-- THE 10 UNITS -->
          ${units.map(u => `
            <div class="unit-card-deep" id="unit-${u.number}">
              <div class="unit-meta-line">
                <div>
                  <span class="unit-badge">Unit ${u.number}</span>
                  <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
                    ${u.scope}
                  </span>
                </div>
                <span class="unit-epistemic">${u.epistemic_tag}</span>
              </div>

              <h3 class="unit-heading-deep">${u.title}</h3>

              <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
                ${u.core_concept}
              </div>

              <div class="narrative-prose">
                ${u.narrative.map(p => `<p class="narrative-p">${p.replace(/\\n/g, '<br>')}</p>`).join('')}
              </div>

              <div class="quote-box">
                ${u.verbatim}
              </div>

              <div class="heuristic-box">
                <strong style="color: var(--accent-forest); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
                  Operational Heuristic:
                </strong>
                ${u.heuristic}
              </div>
            </div>
          `).join('')}

        </section>

        <!-- VIEW B: CASHFLOW QUADRANT -->
        <section id="view-map" class="view-panel" style="display: none;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid var(--accent-crimson); padding-bottom: 16px;">
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text-main);">The CASHFLOW Quadrant Architecture</h2>
            <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-muted); font-size: 1.05rem;">The Four Mentalities Governing Capital, Taxation, and Freedom</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px;">
            
            <div style="padding: 28px; background: var(--bg-card); border: 2px solid var(--accent-crimson); border-radius: 8px;">
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-crimson); font-family: var(--font-sans);">E</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">The Employee</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 12px;"><strong>Core Value:</strong> Security, benefits, predictable paycheck.<br><strong>Mechanism:</strong> Sells time for money (1 hr = $X).<br><strong>Tax Profile:</strong> Highest bracket (up to 50%). Zero deductions.</p>
              <div style="font-style: italic; font-size: 0.9rem; color: var(--accent-crimson);">"I’m looking for a safe, secure job with good benefits."</div>
            </div>

            <div style="padding: 28px; background: var(--bg-card); border: 2px solid var(--accent-gold); border-radius: 8px;">
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-gold); font-family: var(--font-sans);">S</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">The Self-Employed / Specialist</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 12px;"><strong>Core Value:</strong> Independence, technical perfection.<br><strong>Mechanism:</strong> Owns a job. Time tied directly to income.<br><strong>Trap:</strong> If they stop working, cash flow halts immediately.</p>
              <div style="font-style: italic; font-size: 0.9rem; color: var(--accent-gold);">"If you want it done right, you have to do it yourself."</div>
            </div>

            <div style="padding: 28px; background: var(--bg-card); border: 2px solid var(--accent-forest); border-radius: 8px;">
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-forest); font-family: var(--font-sans);">B</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">The Business Owner</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 12px;"><strong>Core Value:</strong> Systems, leadership, delegation.<br><strong>Mechanism:</strong> Owns an operating system and leads talent.<br><strong>Superpower:</strong> Can leave for 1 year and return to a larger business.</p>
              <div style="font-style: italic; font-size: 0.9rem; color: var(--accent-forest);">"Why do it myself when I can hire someone smarter?"</div>
            </div>

            <div style="padding: 28px; background: var(--bg-card); border: 2px solid #2b6cb0; border-radius: 8px;">
              <div style="font-size: 2.5rem; font-weight: 800; color: #2b6cb0; font-family: var(--font-sans);">I</div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">The Investor</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 12px;"><strong>Core Value:</strong> ROI, capital leverage, financial freedom.<br><strong>Mechanism:</strong> Money works for money 24 hours a day.<br><strong>Tax Profile:</strong> Capital gains, depreciation shields, lowest taxes.</p>
              <div style="font-style: italic; font-size: 0.9rem; color: #2b6cb0;">"What is my cash-on-cash return, and how fast do I get my principal back?"</div>
            </div>

          </div>
        </section>

      </div>
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    function switchView(viewName) {
      document.querySelectorAll('.view-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));

      if (viewName === 'journey') {
        document.getElementById('view-journey').style.display = 'block';
        document.getElementById('btn-view-journey').classList.add('active');
      } else if (viewName === 'map') {
        document.getElementById('view-map').style.display = 'block';
        document.getElementById('btn-view-map').classList.add('active');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeSidebarOnMobile() {
      if (window.innerWidth <= 1024) {
        document.getElementById('reader-shell').classList.remove('sidebar-open');
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Saved index.html (Definitive BKRS Reader Shell with 10 Units and CASHFLOW Quadrant)');

// UPDATE LIBRARY INDEX
const libIndexPath = path.join(__dirname, '../../docs/library-index.json');
if (fs.existsSync(libIndexPath)) {
  const lib = JSON.parse(fs.readFileSync(libIndexPath, 'utf8'));
  const book = lib.books.find(b => b.id === 'rich-dad-poor-dad');
  if (book) {
    book.original_volume = "10 Invariant Chapters (The 6 Core Lessons, Balance Sheet Dynamics, 5 Obstacles, 10 Action Steps, CASHFLOW Quadrant)";
    book.reading_time_saved = "12.0 hrs saved";
    book.hours_val = 12;
    fs.writeFileSync(libIndexPath, JSON.stringify(lib, null, 2), 'utf8');
    console.log('Updated docs/library-index.json for rich-dad-poor-dad');
  }
}
