/**
 * Builder for Kris Brandt Riske: Llewellyn's Complete Book of Predictive Astrology
 * Subtitle: The Easy Way to Predict Your Future
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | The Systematic Step-by-Step Predictive Handbook
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'predictive-astrology-riske');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Predictive Architecture: Distinguishing Progressions, Solar Arcs & Transits",
    scope: "Introduction & Chapter 1: The philosophy of future planning, the three core timing engines (Progressions, Solar Arcs, Transits), and allowable orb parameters",
    epistemic_status: "PREDICTIVE_METHODOLOGY & THREE_ENGINE_TAXONOMY",
    materiality: "CRITICAL",
    core_theme: "The systematic division of predictive labor: Secondary Progressions define internal psychological maturation, Solar Arcs produce major external turning points, and Transits provide environmental conditions.",
    textual_analysis: [
      "Kris Brandt Riske, Executive Director of the American Federation of Astrologers (AFA), constructs a lucid, rule-based framework for predictive astrology designed to give practitioners absolute clarity rather than mystical ambiguity.",
      "The Three Engines of Timing: 1) Secondary Progressions (Internal Psychological Climate): Operating on the symbolic day-for-a-year formula, progressions describe how your personality, interests, and emotional needs evolve over decades. Progressions answer the question: 'How am I changing on the inside?'; 2) Solar Arc Directions (External Event Loudspeakers): Moving every point forward by the Sun's annual arc (~1° per year), Solar Arcs represent concrete external shifts, status changes, and biographical turning points. Solar Arcs answer: 'What major milestone is confronting me?'; 3) Transits (Environmental Realities & Triggers): The actual physical movement of planets in the sky today interacting with your birth chart. Transits answer: 'What environmental pressures and day-to-day opportunities are surrounding me right now?'",
      "Orb Discipline: Riske enforces strict orb discipline to prevent predictive confusion. For Secondary Progressions: allow 1 degree applying and 1 degree separating (roughly two years total). For Solar Arc Directions: allow 1 degree applying and 1 degree separating (roughly two years, peaking at exact alignment). For Transits: outer planets (Jupiter to Pluto) operate within a 2-degree applying and 1-degree separating orb; inner planets operate within 1 degree.",
      "Free Will and Preparedness: Riske insists that predictive astrology is not fatalism; it is strategic life management. Understanding the timing of incoming cosmic weather allows an individual to schedule career expansions during Jupiter windows, build disciplined savings during Saturn cycles, and avoid rash contractual commitments during Neptune transits."
    ],
    verbatim_quote: "Predictive astrology is not about guessing the future like a carnival fortune teller; it is the ultimate tool for strategic life planning. When you know the cosmic weather ahead, you can pack an umbrella or set sail with the wind at your back.",
    operational_heuristic: "Always diagnose internal readiness before judging external transits: if a client has a fabulous Jupiter transit to the Midheaven but their Progressed Moon is in the 12th house, they will decline promotions to protect private mental rest.",
    key_motifs: [
      "Three Core Timing Engines",
      "Internal Evolution vs. External Events",
      "Strict Orb Discipline (1° Rules)",
      "Strategic Life Planning Paradigm",
      "Cosmic Weather Management"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "Secondary Progressions & The Progressed Moon: The Internal Evolutionary Clock",
    scope: "Chapters 2 & 3: Calculating Secondary Progressions, the Progressed Moon's 28-year journey, and progressed planetary sign and house ingresses",
    epistemic_status: "SECONDARY_PROGRESSIONS & PROGRESSED_LUNAR_CHRONOMETRY",
    materiality: "CRITICAL",
    core_theme: "The Progressed Moon as the sweep second-hand of the predictive clock: spending 2.5 years in each house and sign, dictating emotional focus and domestic reorganizations.",
    textual_analysis: [
      "Riske breaks down the practical calculation and interpretation of Secondary Progressions. Because the Sun moves roughly 1 degree per day, the Progressed Sun advances roughly 1 degree per year (spending 30 years in each sign). A progressed sign change of the Sun represents a profound generational shift in core identity.",
      "The Progressed Moon (The Master Focus Indicator): Moving at approximately 1 degree per month (13° per year), the Progressed Moon completes its zodiacal circuit in approximately 27 to 28 years. Wherever the Progressed Moon travels, it shines a spotlight on the matters of that house and sign.",
      "Progressed Moon Through the Houses: 1st House (Personal reinvention, physical vitality, new 28-year beginning); 2nd House (Financial consolidation, questioning self-worth, budgeting); 3rd House (Mental curiosity, short courses, local community, sibling contacts); 4th House (Domestic nesting, home buying/renovation, family roots); 5th House (Creative resurgence, romance, children, hobbies); 6th House (Daily work routines, health regimens, service); 7th House (Partnership focus, marriage or divorce, public relations); 8th House (Shared financial obligations, taxes, intimacy, psychological catharsis); 9th House (Higher education, international travel, publishing, spiritual expansion); 10th House (Career peak, public reputation, professional accountability); 11th House (Social networking, group memberships, future goals); 12th House (Rest, retreat, psychological processing, concluding outdated cycles).",
      "Progressed Planetary Aspects: When progressed inner planets aspect natal or other progressed planets, they describe prolonged psychological transitions lasting 18 to 36 months."
    ],
    verbatim_quote: "If you only have five minutes to look at a chart, find the Progressed Moon. It tells you immediately where the client is living emotionally and what life sector is consuming their attention.",
    operational_heuristic: "Identify the Progressed Moon's house position as the client's current 'life classroom': interpret all daily transits through the overarching lens of that house's developmental goals.",
    key_motifs: [
      "Progressed Moon Cycle (28 Years)",
      "2.5 Years Per House/Sign",
      "Progressed Sun Sign Ingress (30-Year Epoch)",
      "Progressed Moon Life Classroom",
      "Internal Emotional Focus"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "Solar Arc Directions: The Methodical Cookbook of External Turning Points",
    scope: "Chapter 3: Solar Arc Directions calculation, interpreting directed Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto to natal planets and angles",
    epistemic_status: "SOLAR_ARC_DIRECTIONS & ANGULAR_TRANSFORMATION",
    materiality: "CRITICAL",
    core_theme: "Solar Arc Directions: applying the Sun's progressed arc to all chart points to predict major external life milestones with 1-degree precision.",
    textual_analysis: [
      "Riske provides an exhaustive, practical cookbook of Solar Arc interpretations, demonstrating why Solar Arcs are the preferred forecasting tool for professional event astrologers.",
      "The Mechanics of Solar Arc Directions: Calculate the distance the Secondary Progressed Sun has traveled since birth (e.g., at age 35, the Sun has moved roughly 35°). Add that exact arc degree to every natal planet, Ascendant, and Midheaven. Hard aspects (conjunction, semi-square, square, sesquisquare, opposition) formed by directed planets to natal points generate major events.",
      "Solar Arc Planet-to-Angle Milestones: 1) Solar Arc Sun to Midheaven: Major career promotion, public honor, or executive appointment; 2) Solar Arc Moon to Ascendant/IC: Marriage, relocation, birth of a child, or profound emotional turning point; 3) Solar Arc Venus to Descendant: Marriage, significant romantic commitment, or lucrative financial alliance; 4) Solar Arc Mars to Midheaven: Intense career ambition, aggressive disputes with authority, or physical overexertion; 5) Solar Arc Jupiter to Ascendant/MC: Phenomenal expansion, academic elevation, foreign opportunities, and legal triumph; 6) Solar Arc Saturn to MC/Asc: Heavy public responsibilities, career pinnacle through perseverance, or burdensome obligations; 7) Solar Arc Uranus to Descendant: Sudden divorce, sudden romantic attraction, or radical break from tradition; 8) Solar Arc Neptune to Ascendant: Identity confusion, spiritual awakening, artistic inspiration, or deceptive entanglements; 9) Solar Arc Pluto to MC: Total career overhaul, rise to immense institutional power, or sudden collapse of obsolete structures."
    ],
    verbatim_quote: "When a Solar Arc directed planet reaches an angle of your chart, the curtain goes up on a brand-new act in the theater of your life. It is an undeniable, external marker.",
    operational_heuristic: "Scan for Solar Arc directed planets within 45 minutes of arc of natal angles: prepare the client for an unavoidable external restructuring in that domain within the next 6 to 12 months.",
    key_motifs: [
      "Solar Arc Mechanics & Mathematics",
      "Directed Planets to Natal Angles",
      "Hard Aspect Trigger Network",
      "Definitive External Milestones",
      "Cookbook Diagnostic Precision"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Outer Planet Transits: Jupiter & Saturn as the Architects of Social Reality",
    scope: "Chapters 4 & 5: Transits of Jupiter (12-year cycle) and Saturn (29.5-year cycle) through the houses and in aspect to natal planets",
    epistemic_status: "SOCIAL_PLANET_TRANSITS & CYCLIC_CONSTRUCTION",
    materiality: "CRITICAL",
    core_theme: "The foundational social architects: Jupiter provides expansion, confidence, and opportunity; Saturn demands accountability, boundaries, discipline, and structural consolidation.",
    textual_analysis: [
      "Riske analyzes Jupiter and Saturn as the two great regulators of social and material destiny. While the outer three planets (Uranus, Neptune, Pluto) bring radical generational shifts, Jupiter and Saturn govern the practical building blocks of career, wealth, and status.",
      "Transiting Jupiter (The Great Expander — 12-Year Cycle): Jupiter spends roughly one year in each zodiacal sign and house. Wherever Jupiter transits, it bestows optimism, open doors, luck, and broad horizons. However, Riske cautions that Jupiter has a shadow: overextension, arrogant overconfidence, reckless spending, and physical weight gain. A Jupiter transit to natal Venus brings romantic joy or extravagant debt; to the Midheaven, it brings promotions or excessive commitments.",
      "Transiting Saturn (The Great Taskmaster — 29.5-Year Cycle): Saturn spends roughly 2.5 to 3 years in each house. It is the cosmic reality check, demanding hard work, self-discipline, and the elimination of fluff. Wherever Saturn transits, it tests structures: if a marriage, business, or health routine is built on sand, Saturn demolishes it; if built on integrity and rock, Saturn cements it for decades.",
      "The Saturn Return (Ages 29.5 and 59): The monumental milestone where transiting Saturn returns to its natal position, forcing adulthood, career reckoning, and the shedding of youth illusions."
    ],
    verbatim_quote: "Jupiter opens the door and hands you the blueprint; Saturn hands you the hammer and mortar and inspects every brick. You need both: without Jupiter you never dream; without Saturn you never build.",
    operational_heuristic: "Balance Jupiter and Saturn transit counseling: during Jupiter transits, advise clients to seize opportunities while guarding against overextension; during Saturn transits, counsel patience, discipline, and structural consolidation.",
    key_motifs: [
      "Jupiter 12-Year Expansion Cycle",
      "Saturn 29.5-Year Reality Cycle",
      "The Saturn Return Milestone (Ages 29.5 & 59)",
      "Structural Testing vs. Solidification",
      "Complementary Social Planetary Polarity"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Outer Planet Transits: Uranus, Neptune & Pluto — Generational Catalysts of Transformation",
    scope: "Chapters 4 & 5: Transits of Uranus (84-year cycle), Neptune (165-year cycle), and Pluto (248-year cycle) through houses and hard aspects",
    epistemic_status: "TRANSPERSONAL_TRANSITS & REVOLUTIONARY_METAMORPHOSIS",
    materiality: "CRITICAL",
    core_theme: "The transpersonal disruptors: Uranus shatters stagnation through sudden liberation; Neptune dissolves illusions into spiritual vision; Pluto purges decay through compulsive transformation.",
    textual_analysis: [
      "Riske details the immense psychological and structural impact of the three modern outer planets. Because of their slow orbital speeds, transits of Uranus, Neptune, and Pluto remain in orb for two to three years (due to retrograde loops), creating profound multi-year metamorphic chapters.",
      "Transiting Uranus (The Awakener — 7 Years Per Sign): Uranus brings the unexpected: sudden breakthroughs, rebellions, radical relocations, technology, and sudden severed connections. When Uranus transits the 7th house, stable marriages must reinvent themselves or face sudden divorce; transiting the 10th house, the native abandons a conventional corporate career for self-employed autonomy.",
      "Transiting Neptune (The Dissolver — 14 Years Per Sign): Neptune dissolves boundaries between the ego and the collective unconscious. Positively, it inspires transcendent artistic creation, spiritual devotion, and compassionate service. Negatively, it brings deception, self-delusion, substance abuse, chronic fatigue, and financial fog. Riske warns: 'Never sign a binding partnership contract or make irreversible financial bets when transiting Neptune is conjoining your Sun or Midheaven.'",
      "Transiting Pluto (The Transformer — 15 to 30 Years Per Sign): Pluto is cosmic surgery. It unearths whatever has been repressed, buried, or corrupted, forcing total elimination and rebirth. Transiting Pluto over natal planets brings intense power struggles, encounters with taboo forces, psychological deaths, and subsequent resurrection into genuine sovereignty."
    ],
    verbatim_quote: "Uranus breaks the window; Neptune opens the dream world; Pluto tears down the entire house and forces you to build from bedrock.",
    operational_heuristic: "Identify which outer planet is currently stationing or making hard aspects to personal planets: warn the client against resisting Pluto's necessary purges or falling for Neptune's glamorous illusions.",
    key_motifs: [
      "Uranus (Sudden Liberation & Disruption)",
      "Neptune (Dissolution, Glamour & Spiritualization)",
      "Pluto (Elimination, Catharsis & Power Resurgence)",
      "Retrograde Transit Station Hotspots",
      "Transpersonal Evolutionary Demands"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Lunations, Eclipses & Timing Triggers: The Clocks of Daily Manifestation",
    scope: "Chapters 6, 8, 9: New Moons, Full Moons, Solar & Lunar Eclipses, Inner Planet triggers (Mars, Venus, Mercury, Sun), and daily forecasting protocols",
    epistemic_status: "LUNATION_TIMING & MECHANICAL_TRIGGER_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The mechanical ignition system: utilizing monthly New/Full Moons, seasonal eclipses, and fast-moving inner planet transits to pinpoint the exact days of manifestation.",
    textual_analysis: [
      "Kris Brandt Riske bridges the gap between multi-year background cycles and daily forecasting. Long-term progressions and outer planet transits create the tension, but they do not detonate until a fast-moving trigger closes the circuit.",
      "New Moons and Full Moons as Monthly Clocks: A New Moon (conjunction of Sun and Moon) seeds new activities in the house where it falls; a Full Moon (opposition) brings culmination, emotional illumination, or relationship showdowns. When a New or Full Moon falls within 2 degrees of a natal planet or angle, the promised event of that house is triggered within that 2-week fortnight.",
      "Eclipses — High-Voltage Catalysts: Eclipses are supersized New and Full Moons with extended timelines. A Solar Eclipse opens a massive new door; a Lunar Eclipse closes a door forever. Riske emphasizes that eclipse effects unfold over six months to a year, often triggering when Mars subsequently crosses the eclipse degree.",
      "The Inner Planet Triggers: 1) Transiting Mars: The ultimate initiator, bringing conflict, physical action, or decisive moves; 2) Transiting Sun: Shines light and brings executive attention to the house it traverses; 3) Transiting Mercury: Brings contracts, phone calls, letters, and meetings; 4) Transiting Venus: Brings social invitations, pleasant encounters, and diplomatic resolutions."
    ],
    verbatim_quote: "Progressions load the gun; outer planet transits aim it; but a fast-moving transit of Mars or a New Moon pulls the trigger.",
    operational_heuristic: "To predict the exact week of an event prepared by progressions and outer transits, track the upcoming New Moon and transiting Mars: when Mars crosses the active natal degree, the event detonates.",
    key_motifs: [
      "Monthly New & Full Moons",
      "Solar & Lunar Eclipse Catalysts",
      "Mars as the Primary Mechanical Trigger",
      "Inner Planet Daily Forecasting",
      "Fortnightly Manifestation Windows"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Returns: Solar, Lunar & Planetary Cycles of Renewal",
    scope: "Chapter 7: Casting and interpreting Solar Returns, Lunar Returns, and Planetary Returns (Mercury, Venus, Mars)",
    epistemic_status: "RETURN_CHRONOMETRY & PERIODIC_RENEWAL",
    materiality: "IMPORTANT",
    core_theme: "Periodic return charts: casting horoscopes for the exact moment planets return to their birth coordinates, creating specialized forecasts for years, months, and 2-year cycles.",
    textual_analysis: [
      "Riske demystifies the technique of Return charts. Whenever a celestial body returns to the exact zodiacal degree it occupied at the moment of birth, a new cycle is inaugurated.",
      "The Solar Return (Annual Snapshot): Cast once a year on the native's birthday. Riske evaluates the Solar Return by: 1) Identifying the Return Ascendant and its natal house placement; 2) Locating the house of the Return Sun; 3) Checking for planets angular in the Return chart (especially planets conjunct the Return Ascendant or Midheaven).",
      "The Lunar Return (Monthly Emotional Snapshot): Cast every 27.5 days when the Moon returns to its natal degree. Used to forecast short-term domestic fluctuations, emotional weather, and local events for the coming four weeks.",
      "Planetary Returns: 1) Mars Return (Every 2 years): Reveals the native's physical energy, ambition, athletic goals, and conflict arenas for the next 24 months; 2) Venus Return (Annual): Forecasts romantic prospects, social life, and personal finances for the coming year; 3) Mercury Return (Annual): Forecasts intellectual projects, writing, study, and commercial contracts."
    ],
    verbatim_quote: "Your Solar Return chart is like an annual snapshot of your soul's business plan. It tells you what department of your life is up for review and where you need to invest your capital.",
    operational_heuristic: "Inspect the Solar Return Ascendant and Midheaven: any planet within 3 degrees of these return angles will dominate the native's experiences for the entire twelve months.",
    key_motifs: [
      "Annual Solar Return Blueprint",
      "Monthly Lunar Return Snapshot",
      "Mars 2-Year Energy Return",
      "Venus & Mercury Annual Returns",
      "Planets on Return Angles"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Putting It All Together: The Step-by-Step Clinical Prediction Protocol",
    scope: "Chapter 10: The systematic integration methodology, synthesizing all tools into a single coherent forecast, and resolving contradictory indicators",
    epistemic_status: "SYNTHETIC_FORECASTING_PROTOCOL & CONFLICT_RESOLUTION",
    materiality: "CRITICAL",
    core_theme: "The complete step-by-step synthetic protocol for combining Progressions, Solar Arcs, Transits, and Returns into an infallible, non-contradictory client forecast.",
    textual_analysis: [
      "In Chapter 10, Kris Brandt Riske lays out her signature step-by-step forecasting method, teaching astrologers how to eliminate overwhelm when faced with dozens of overlapping astrological factors.",
      "The 5-Step Riske Integration Protocol: 1) Step 1: Scan Secondary Progressions. Identify the house and sign of the Progressed Moon and any exact progressed aspects to natal planets. This establishes the internal baseline; 2) Step 2: Audit Solar Arc Directions. Direct all planets and check for hard aspects (conjunction, square, opposition) to natal planets and angles. This identifies the major external milestones; 3) Step 3: Inspect Outer Planet Transits. Track Jupiter, Saturn, Uranus, Neptune, and Pluto through the natal houses and aspects. This defines environmental support or resistance; 4) Step 4: Examine the Solar Return. Confirm whether the annual chart highlights the same houses and themes indicated by the progressions and arcs; 5) Step 5: Pinpoint Timing with Inner Transits & Lunations. Use upcoming New Moons, Full Moons, and Mars transits to narrow the manifestation window to specific weeks and days.",
      "Resolving Contradictory Indicators: When one technique shows positive expansion (e.g., Jupiter transiting the 10th) while another shows restriction (e.g., Saturn squaring the Sun), beginners panic. Riske explains the principle of 'Compartmentalization': the individual will experience major career expansion and recognition, but will simultaneously feel exhausted and burdened by heavy personal obligations."
    ],
    verbatim_quote: "When two techniques seem to contradict each other, do not throw up your hands. Life is complex: you can get a promotion at work on the exact same day that your washing machine floods the basement.",
    operational_heuristic: "Execute the 5-Step Protocol in strict sequence: never skip to daily transits before mapping the Progressed Moon and Solar Arcs; synthesize apparent contradictions into multi-dimensional life realities.",
    key_motifs: [
      "5-Step Riske Integration Protocol",
      "Synthetic Forecasting Methodology",
      "Resolving Contradictory Indicators",
      "The Principle of Compartmentalization",
      "Systematic Clinical Execution"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Master Case Studies: Jimmy Carter, Martha Stewart & Marilyn Monroe",
    scope: "Chapter 10: Exhaustive retrospective and predictive case analyses of historical figures (Jimmy Carter's presidency, Martha Stewart's legal crisis, Marilyn Monroe)",
    epistemic_status: "RETROSPECTIVE_CASE_FORENSICS & HISTORICAL_VALIDATION",
    materiality: "CRITICAL",
    core_theme: "Clinical forensic validation: dissecting the horoscopes of famous figures across their greatest triumphs and catastrophic crises to prove the accuracy of the multi-technique methodology.",
    textual_analysis: [
      "Riske validates her predictive methodology through exhaustive, forensic case analyses of well-documented public figures, demonstrating that every major biographical milestone left an unmistakable astrological signature.",
      "Case 1: Jimmy Carter's Presidential Victory & Defeat: Riske traces Jimmy Carter's meteoric rise from unknown peanut farmer to Governor of Georgia and President of the United States. His 1976 presidential election coincided with Solar Arc Jupiter exactly conjunct his natal Midheaven, supported by transiting Jupiter crossing his 10th house. His 1980 election defeat and the Iranian hostage crisis coincided with transiting Saturn and Pluto entering his 12th house and forming hard squares to his Ascendant.",
      "Case 2: Martha Stewart's Corporate Success & Prison Sentence: Tracking Martha Stewart's rise as a media billionaire and her subsequent insider trading conviction. Her indictment and prison sentence coincided with Solar Arc Saturn squaring her natal Sun, while transiting Neptune sat on her Descendant, dissolving her public legal defense and resulting in institutional incarceration.",
      "Case 3: Marilyn Monroe's Tragic Culmination: Analyzing the convergence of progressed and transit afflictions leading to her untimely demise, demonstrating the fatal collision of progressed Moon in the 8th house, transiting Saturn opposing her Ascendant, and unmitigated Neptune afflictions."
    ],
    verbatim_quote: "Hindsight is an astrologer's best teacher. When you examine the charts of historical figures with verified birth times, you see the mathematical precision of the cosmos laid bare.",
    operational_heuristic: "Practice predictive techniques by studying historical biographies with verified Rodden Rating AA birth data: verify that every documented career peak, marriage, or scandal matched exact Solar Arc and progressed signatures.",
    key_motifs: [
      "Historical Case Forensics",
      "Jimmy Carter Presidential Chronology",
      "Martha Stewart Legal & Incarceration Crisis",
      "Marilyn Monroe Fatal Convergence",
      "Empirical Predictive Verification"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Quick & Easy Horary & Mundane World Forecasting",
    scope: "Chapters 11 & 13: Fundamentals of Horary Astrology (answering immediate questions) and Mundane Astrology (seasonal solar ingresses and world events)",
    epistemic_status: "HORARY_DIVINATION & MUNDANE_CYCLE_ASTROLOGY",
    materiality: "IMPORTANT",
    core_theme: "Expanding the toolkit: Quick Horary astrology for answering urgent specific queries, and Mundane astrology for forecasting political, economic, and national trends via seasonal ingresses.",
    textual_analysis: [
      "In her concluding chapters, Riske equips the astrologer with two essential specialized branches: Horary Astrology and Mundane Astrology.",
      "Quick and Easy Horary: When a client asks a pressing, specific question ('Will I get this job?', 'Should I buy this house?', 'Where are my lost keys?'), casting a horary chart for the exact moment the question is understood provides an immediate, decisive answer. Riske establishes the primary horary rules: 1) Ascendant rules the querent (the person asking); 2) The house ruling the matter questioned represents the quesited (e.g., 2nd for money, 7th for marriage/lawsuits, 10th for career); 3) The Moon acts as co-ruler of the querent; 4) An applying aspect between the ruler of the querent and the ruler of the quesited indicates a 'Yes'; a separating aspect or obstruction by Saturn/Mars indicates a 'No'.",
      "Mundane Astrology & Seasonal Ingresses: Forecasting collective, national, and world events. Riske details the technique of casting charts for the exact moment the Sun enters the four cardinal signs: Aries Ingress (Spring Equinox / New Year of nations), Cancer Ingress (Summer Solstice), Libra Ingress (Autumn Equinox), and Capricorn Ingress (Winter Solstice). The Aries Ingress chart cast for a nation's capital city forecasts the political stability, economic health, and foreign relations of that nation for the coming year."
    ],
    verbatim_quote: "Horary astrology is the precision scalpel of our craft. When a client needs an immediate answer to a single pressing question, a horary chart cuts through all the complexity and delivers a clear yes or no.",
    operational_heuristic: "Use Horary charts for urgent situational decisions ('Should I accept this offer?'); use Natal, Progressed, and Transit charts for long-term character evolution and strategic life milestones.",
    key_motifs: [
      "Quick & Easy Horary Fundamentals",
      "Querent vs. Quesited House Rulers",
      "Applying Aspects for Decisive Answers",
      "Mundane Cardinal Ingress Charts",
      "Forecasting National & Economic Trends"
    ]
  }
];

function generateMarkdown(units) {
  let md = `# Kris Brandt Riske: Llewellyn's Complete Book of Predictive Astrology
## The Easy Way to Predict Your Future · BKRS v2.0 Deep Forensic Master Codex

---

### Archival Metadata
- **Author:** Kris Brandt Riske, M.A. (Executive Director, American Federation of Astrologers)
- **Publication Date:** 2011 (Llewellyn Publications, Llewellyn Worldwide Ltd.)
- **Discipline / Tradition:** Western Applied Predictive Astrology, AFA Professional Standards
- **Core Systems:** Secondary Progressions, Solar Arc Directions, Outer & Inner Planet Transits, Solar/Lunar/Planetary Returns, Lunations & Eclipses, Horary Astrology, Mundane Ingresses
- **Curriculum Role:** The Methodical, Rule-Based Predictive Handbook (Book 9 of the Master Curriculum)

---

## Executive Summary: The Systematic Step-by-Step Predictive Engine

Kris Brandt Riske’s *Llewellyn's Complete Book of Predictive Astrology* is celebrated across the professional astrological community as the definitive modern handbook for learning and mastering predictive technique. Where traditional predictive texts can be overwhelming, scattered, or steeped in fatalistic jargon, Riske—drawing upon her leadership of the American Federation of Astrologers (AFA)—presents an organized, reproducible, rule-based forecasting framework.

Riske systematically demystifies the predictive process by structuring forecasting into three distinct, complementary engines:
1. **Secondary Progressions (Internal Maturation):** Operates on the day-for-a-year principle, tracking how the client's emotional needs, intellectual priorities, and psychological focus evolve over decades. The **Progressed Moon** (moving ~1° per month, completing a 28-year cycle) acts as the primary life-classroom indicator.
2. **Solar Arc Directions (External Turning Points):** Operates on the 1-degree-per-year principle, moving all planets forward by the Sun's progressed distance. Hard aspects from directed planets to natal angles and luminaries produce unmistakable external milestones.
3. **Transits (Environmental Weather & Daily Triggers):** Tracks current planetary positions. Outer planets (Jupiter to Pluto) provide long-term environmental conditions and testing; fast-moving inner planets, Mars, and New/Full Moons act as the precise daily triggers.

---

## Detailed Structural Analysis of the Ten Units

`;

  units.forEach(u => {
    md += `### ${u.title}\n\n`;
    md += `- **Unit ID:** \`${u.unit_id}\`\n`;
    md += `- **Epistemic Classification:** \`${u.epistemic_status}\`\n`;
    md += `- **Materiality Level:** \`${u.materiality}\`\n`;
    md += `- **Core Theme:** ${u.core_theme}\n\n`;
    md += `#### Forensic Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `> **Kris Brandt Riske Verbatim:**\n`;
    md += `> "${u.verbatim_quote}"\n\n`;
    md += `**Operational Heuristic for Practitioners:**\n`;
    md += `*${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs & Terminology:** ${u.key_motifs.map(m => `\`${m}\``).join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  md += `## The Riske 5-Step Master Forecasting Blueprint

When preparing a complete predictive reading for a client, follow Riske's 5-step protocol without deviation:

\`\`\`
[1. SECONDARY PROGRESSIONS]
   │  • Track Progressed Moon Sign & House (Current 2.5-Year Classroom)
   │  • Audit Progressed Sun & Inner Planet Ingresses and Stations
   ▼
[2. SOLAR ARC DIRECTIONS]
   │  • Direct All Points by Sun's Arc (~1° Per Year)
   │  • Identify Directed Planets Forming Hard Aspects to Angles within 45'
   ▼
[3. OUTER PLANET TRANSITS]
   │  • Track Jupiter (Expansion) & Saturn (Reality Check / Restructuring)
   │  • Track Uranus (Disruption), Neptune (Dissolution), Pluto (Purge)
   ▼
[4. ANNUAL SOLAR RETURN]
   │  • Inspect Return Ascendant and Natal House Overlay
   │  • Identify Angular Return Planets (within 3° of Return Cusps)
   ▼
[5. INNER TRANSITS & LUNATION TRIGGERS]
   │  • Track Upcoming New & Full Moons in Natal Houses
   │  • Use Mars Transits to Pinpoint the Exact Week of Manifestation
\`\`\`

---

## Predictive Timing Matrix: Orbs & Durations

| Predictive Tool | Formula / Speed | Allowable Orb | Active Window Duration | Primary Operational Function |
| :--- | :--- | :--- | :--- | :--- |
| **Secondary Progressions** | 1 day after birth = 1 year of life | 1° applying, 1° separating | 2 to 3 years | Internal psychological maturation & emotional priorities |
| **Progressed Moon** | ~1° per month / 13° per year | 1° applying, 1° separating | 2 months per aspect; 2.5 yrs per house | Primary focus indicator & domestic life-stage |
| **Solar Arc Directions** | Progressed Sun's arc applied to all | 1° applying, 1° separating | ~2 years (peaks at exact 0°00') | Loudspeaker external life events & status shifts |
| **Outer Transits (Pluto-Uranus)**| Real ephemeris motion | 2° applying, 1° separating | 2 to 3 years (due to retrogrades) | Deep metamorphic restructuring of life structures |
| **Transiting Saturn** | ~2.5 years per house | 2° applying, 1° separating | 9 to 12 months | Tests, discipline, consolidation, boundaries |
| **Transiting Jupiter** | ~1 year per house | 2° applying, 1° separating | 3 to 6 months | Opportunity, open doors, expansion, optimism |
| **Transiting Mars** | ~2 months per sign | 1° applying, 1° separating | 1 to 2 weeks | Ignition key; physical action; conflict trigger |
| **New & Full Moons** | Fortnightly cycle | 2° from natal point | 2 to 4 weeks | Monthly seeding (New) and illumination (Full) |
| **Eclipses** | Solar & Lunar nodal alignments | 2° to 3° from natal point | 6 months to 2 years | Sudden fated pivots; sweeping closures & beginnings |
`;

  return md;
}

function generateReaderHtml(units) {
  const cardsHtml = units.map(u => `
    <article class="unit-card" id="${u.unit_id}">
      <div class="unit-header">
        <span class="unit-badge">${u.epistemic_status}</span>
        <span class="unit-materiality ${u.materiality.toLowerCase()}">${u.materiality}</span>
      </div>
      <h2 class="unit-title">${u.title}</h2>
      <div class="unit-scope">${u.scope}</div>
      <div class="unit-core-insight">${u.core_theme}</div>
      <div class="unit-prose">
        ${u.textual_analysis.map(p => `<p>${p}</p>`).join('')}
      </div>
      <blockquote class="verbatim-quote">
        "${u.verbatim_quote}"
        <cite>— Kris Brandt Riske, Llewellyn's Complete Book of Predictive Astrology</cite>
      </blockquote>
      <div class="heuristic-box">
        <div class="heuristic-header">RISKE PREDICTIVE HEURISTIC</div>
        <div class="heuristic-body">${u.operational_heuristic}</div>
      </div>
      <div class="motifs-bar">
        <strong>Key Astrological Motifs:</strong>
        ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join(' ')}
      </div>
      <script type="application/json" id="trace-data-${u.unit_id}">
        ${JSON.stringify({
          unit_id: u.unit_id,
          title: u.title,
          epistemic_status: u.epistemic_status,
          materiality: u.materiality,
          motifs: u.key_motifs
        })}
      </script>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Book of Predictive Astrology — Kris Brandt Riske | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-subtle: #f4efe4;
      --text-main: #1c1917;
      --text-muted: #57534e;
      --accent-crimson: #85221c;
      --border-light: #e7dfd3;
      --border-dark: #7a7060;
      --shadow-sm: 0 2px 8px rgba(28, 25, 23, 0.04);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: Georgia, 'EB Garamond', serif;
      font-size: 16px;
      line-height: 1.65;
      padding: 24px;
    }
    .reader-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .doc-header {
      border-bottom: 2px solid var(--text-main);
      padding-bottom: 16px;
      margin-bottom: 28px;
    }
    .doc-kicker {
      font-family: -apple-system, sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent-crimson);
      margin-bottom: 6px;
    }
    .doc-title {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 6px;
    }
    .doc-author {
      font-size: 15px;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 12px;
    }
    .view-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 8px;
    }
    .view-tab {
      font-family: -apple-system, sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      border: 1px solid var(--border-dark);
      background: var(--bg-card);
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: var(--text-main);
    }
    .view-tab.active {
      background: var(--text-main);
      color: #fff;
    }
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 24px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-sm);
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-family: -apple-system, sans-serif;
      font-size: 11px;
    }
    .unit-badge {
      font-weight: 700;
      color: var(--accent-crimson);
      letter-spacing: 0.06em;
    }
    .unit-materiality {
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 2px;
    }
    .unit-materiality.critical { background: #ffe4e6; color: #9f1239; }
    .unit-materiality.important { background: #fef3c7; color: #92400e; }
    .unit-materiality.textural { background: #e0f2fe; color: #075985; }
    .unit-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .unit-scope {
      font-family: -apple-system, sans-serif;
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 12px;
    }
    .unit-core-insight {
      font-size: 14px;
      font-style: italic;
      color: #333;
      border-left: 3px solid var(--accent-crimson);
      padding-left: 10px;
      margin-bottom: 16px;
    }
    .unit-prose p {
      margin-bottom: 12px;
      text-align: justify;
    }
    .verbatim-quote {
      border-left: 3px solid var(--text-main);
      padding: 10px 16px;
      font-style: italic;
      background: var(--bg-subtle);
      margin: 16px 0;
      font-size: 14.5px;
    }
    .verbatim-quote cite {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      font-style: normal;
      color: var(--text-muted);
    }
    .heuristic-box {
      border: 1px solid var(--text-main);
      border-left: 4px solid var(--text-main);
      background: #fafafa;
      padding: 12px 14px;
      margin: 16px 0;
    }
    .heuristic-header {
      font-family: -apple-system, sans-serif;
      font-size: 10.5px;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .heuristic-body {
      font-size: 13.5px;
      color: #111;
    }
    .motifs-bar {
      font-family: -apple-system, sans-serif;
      font-size: 11.5px;
      color: var(--text-muted);
      margin-top: 14px;
    }
    .motif-tag {
      background: #eee;
      padding: 2px 6px;
      border-radius: 2px;
      color: #222;
      display: inline-block;
      margin: 2px;
    }
  </style>
</head>
<body>
  <div class="reader-container">
    <header class="doc-header">
      <div class="doc-kicker">BKRS Deep Forensic Master Codex · Applied Forecasting Science</div>
      <h1 class="doc-title">Llewellyn's Complete Book of Predictive Astrology</h1>
      <div class="doc-author">Kris Brandt Riske, M.A. · Complete Ten-Unit Forecasting Masterwork</div>
      <nav class="view-tabs">
        <a href="#view-journey" class="view-tab active" id="view-journey">View A: Source Journey</a>
        <a href="#view-map" class="view-tab" id="view-map">View B: Relational Map</a>
        <a href="#view-experience" class="view-tab" id="view-experience">View C: Operational Heuristics</a>
      </nav>
    </header>

    <main id="units-wrapper">
      ${cardsHtml}
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;
}

// 1. Write knowledge-units.json
fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(units, null, 2), 'utf8');
console.log(`[1/3] Wrote knowledge-units.json (${units.length} units)`);

// 2. Write master-notes.md
const md = generateMarkdown(units);
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${md.length} characters)`);

// 3. Write index.html
const readerHtml = generateReaderHtml(units);
fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`[3/3] Wrote index.html (${readerHtml.length} characters)`);

console.log('\nSUCCESS: Kris Brandt Riske: Llewellyn Complete Book of Predictive Astrology successfully built!');
