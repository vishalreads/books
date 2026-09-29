const fs = require('fs');
const path = require('path');

const slug = 'only-way-to-learn-astrology-vol2-march';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "MARCH-U01",
    title: "The Rigorous Mathematics of Astrological Chart Calculation",
    coreConcept: "A natal horoscope is a precise two-dimensional astronomical projection requiring step-by-step conversion of clock time to Greenwich Mean Time (GMT), Sidereal Time calculation, and spherical trigonometric house cusp derivation.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "1-35",
    tags: ["Mathematics", "Chart Erection", "Greenwich Mean Time", "Local Mean Time", "Sidereal Time", "RAMC"]
  },
  {
    id: "MARCH-U02",
    title: "Diurnal Logarithms & Planetary Longitude Interpolation",
    coreConcept: "Because planets move at non-uniform speeds across the ecliptic, accurate planetary placement requires using 24-hour proportional diurnal logarithms to interpolate exact degrees and minutes from midnight or noon ephemerides.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "36-60",
    tags: ["Diurnal Logarithms", "Ephemeris", "Interpolation", "Planetary Motion", "Mathematical Rigor"]
  },
  {
    id: "MARCH-U03",
    title: "The Marc Edmund Jones Seven Chart Shapes",
    coreConcept: "The macroscopic distribution of all ten planets across the 360-degree wheel creates seven distinct psychological gestalt shapes (Splash, Bundle, Bowl, Locomotive, Bucket, See-saw, Splay) that define basic life orientation.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "61-80",
    tags: ["Chart Shapes", "Marc Edmund Jones", "Splash", "Bundle", "Locomotive", "Bucket", "See-saw"]
  },
  {
    id: "MARCH-U04",
    title: "Hemisphere & Quadrant Weighting Dynamics",
    coreConcept: "Planetary distribution across the four quadrants and two hemispheres (Northern/Subjective vs. Southern/Objective; Eastern/Self-Determined vs. Western/Other-Determined) reveals the fundamental balance of psychological agency.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "81-95",
    tags: ["Hemispheres", "Quadrants", "Eastern", "Western", "Northern", "Southern", "Psychological Balance"]
  },
  {
    id: "MARCH-U05",
    title: "The House Rulership Network & Dispositor Trees",
    coreConcept: "The lord of a house cusp carries the agenda of that house into the house where the lord physically resides, weaving an interconnected circuit of psychic motivation mapped through Final Dispositor trees.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "96-115",
    tags: ["House Rulership", "Lords", "Dispositor Trees", "Final Dispositor", "Mutual Reception", "Energy Loops"]
  },
  {
    id: "MARCH-U06",
    title: "Mutual Reception & Planetary Circuits",
    coreConcept: "When two planets occupy each other's signs of rulership, they establish an open, bilateral feedback loop that allows instantaneous mutual cooperation and exit routes from difficult aspect tensions.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "116-125",
    tags: ["Mutual Reception", "Planetary Circuits", "Alchemical Exchange", "Aspect Relievers"]
  },
  {
    id: "MARCH-U07",
    title: "Retrograde Motion & The Internalized Reflex",
    coreConcept: "Retrograde planets do not lose power, but internalize their energy, requiring the individual to process experiences through personal subjective standards and delayed external manifestation.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "IMPORTANT",
    pageRange: "126-135",
    tags: ["Retrograde", "Internalization", "Subjective Processing", "Delayed Manifestation"]
  },
  {
    id: "MARCH-U08",
    title: "Intercepted Signs & Houses: The Locked Rooms of the Psyche",
    coreConcept: "When high geographic latitudes cause a sign to be completely contained within a house without holding a cusp, its planetary ruler is intercepted, creating latent qualities requiring conscious effort to unlock.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "136-142",
    tags: ["Intercepted Signs", "Intercepted Houses", "Duplicated Cusps", "Latent Talents", "Locked Rooms"]
  },
  {
    id: "MARCH-U09",
    title: "Major & Minor Aspect Orbs and Geometry",
    coreConcept: "A rigorous aspectarian must enforce strict mathematical orbs (conjunction, opposition, square, trine, sextile, quincunx, semi-square, sesquiquadrate) to differentiate major psychological drives from background static.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "143-147",
    tags: ["Aspect Geometry", "Orbs", "Major Aspects", "Minor Aspects", "Aspectarian"]
  },
  {
    id: "MARCH-U10",
    title: "The Step-by-Step Clinical Delineation Protocol",
    coreConcept: "Master chart interpretation synthesizes chart shape, hemisphere emphasis, element/mode weighting, Sun/Moon/Ascendant trinity, house rulers, and aspect configurations into an integrated life portrait.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "148-151",
    tags: ["Synthesis Protocol", "Clinical Assembly", "Gestalt Method", "Integrated Portrait"]
  }
];

// Build exhaustive master notes markdown (>32,000 characters)
const masterNotesMarkdown = `# Master Codex: The Only Way to Learn Astrology, Volume 2: Math & Interpretation Techniques

**Authors:** Marion D. March & Joan McEvers  
**System:** Mathematical Calculation & Modern Western Psychological Interpretation  
**Fidelity Standard:** BKRS v2.0 Replacement-Grade Master Codex  
**Output Objective:** Comprehensive, source-faithful codex replacing the original text for all mathematical, astronomical, and interpretive chart delineation purposes without loss of technical nuance.

---

## Executive Architectural Summary: The Gold Standard of Astrological Education

First published in 1981 and revised over multiple decades, *The Only Way to Learn Astrology, Volume 2* by **Marion D. March (1923–2001)** and **Joan McEvers (1925–2009)** stands as the definitive academic textbook for professional astrologers in the English-speaking world. March and McEvers—co-founders of the Association for Astrological Networking (AFAN) and internationally renowned consulting practitioners—wrote this volume to bridge the chasm between raw mathematical mechanics and subtle psychological interpretation.

In the modern era of computerized chart software, many astrologers treat the birth chart as a magical graphic rendered by pressing a button. March and McEvers vigorously combat this intellectual laziness. They demonstrate that **no astrologer can truly master interpretation without understanding the spherical geometry and astronomical time conversions that generate the chart**:

\`\`\`
                                THE MATHEMATICAL PIPELINE OF CHART ERECTION
                                
   [1] CLOCK TIME          [2] GREENWICH TIME      [3] SIDEREAL TIME        [4] RAMC & CUSPS       [5] PLANETARY POSITIONS
  ┌──────────────┐        ┌──────────────────┐    ┌─────────────────┐      ┌────────────────┐     ┌──────────────────────┐
  │ Standard Time│       │ Greenwich Mean   │    │ Local Sidereal  │      │ Right Ascension│     │ Diurnal Logarithmic  │
  │ or Daylight  │──────>│ Time (GMT)       │───>│ Time (LST)      │─────>│ of Midheaven   │────>│ Interpolation from   │
  │ Saving Time  │       │ via Zone Offset  │    │ via Noon/Mid Eph│      │ & Table Houses │     │ Midnight Ephemeris   │
  └──────────────┘        └──────────────────┘    └─────────────────┘      └────────────────┘     └──────────────────────┘
\`\`\`

Volume 2 is organized into two rigorous halves:
1. **Part I: The Mathematics of Astrology**: Step-by-step spherical geometry, time conversions, Right Ascension of the Midheaven (RAMC), interpolation using proportional logarithms, and manual table-of-houses calculation.
2. **Part II: Advanced Interpretation Techniques**: Marc Edmund Jones chart shapes, hemisphere and quadrant emphasis, dispositor trees and mutual receptions, retrograde planets, intercepted signs/houses, aspect orb frameworks, and a comprehensive step-by-step synthesis workshop.

---

## Structural Pillar 1: The Step-by-Step Mathematics of Chart Erection

To manually erect a horoscope with professional precision, the astrologer must execute five sequential mathematical operations:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE FIVE MATHEMATICAL STEPS OF CHART CALCULATION            │
│                                                                             │
│ STEP 1: CONVERT LOCAL CLOCK TIME TO GREENWICH MEAN TIME (GMT)               │
│         Adjust for Daylight Saving Time (DST), War Time, or Double DST.     │
│         Apply standard time zone meridian offset (+/- hours from Greenwich).│
│                                                                             │
│ STEP 2: CALCULATE LOCAL SIDEREAL TIME (LST) AT BIRTH                        │
│         LST = Sidereal Time at Greenwich (from Ephemeris)                   │
│             + Acceleration for GMT interval (9.86 seconds per hour)         │
│             +/- Equivalent Longitude Time (4 minutes per degree of Longitude│
│             East = Add, West = Subtract).                                   │
│                                                                             │
│ STEP 3: DERIVE THE RIGHT ASCENSION OF THE MIDHEAVEN (RAMC)                  │
│         Convert LST (Hours, Minutes, Seconds) to Degrees of Arc ($15^\circ = 1\text{ hour}$).│
│                                                                             │
│ STEP 4: DERIVE THE CUSPS OF THE HOUSES                                      │
│         Enter the Table of Houses (Placidus/Koch) using RAMC and Latitude.   │
│         Interpolate exact degrees and minutes for MC, Ascendant, and Houses.│
│                                                                             │
│ STEP 5: CALCULATE PLANETARY POSITIONS USING DIURNAL LOGARITHMS             │
│         Log of daily planetary motion + Log of GMT birth time interval       │
│         = Log of distance traveled. Add to ephemeris base position.          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### Detailed Mechanics of Time Conversions (Lessons 1 to 5)

#### 1. Longitude and Time Equivalents
The Earth rotates $360^\circ$ on its axis in 24 hours. Therefore:
- $360^\circ = 24\text{ hours}$
- $15^\circ = 1\text{ hour}$
- $1^\circ = 4\text{ minutes of time}$
- $1' \text{ of arc} = 4\text{ seconds of time}$

#### 2. The Acceleration Factor (Nutational Adjustment)
Sidereal time (star time) is slightly faster than solar clock time because the Earth moves $\sim 1^\circ$ along its orbit around the Sun each day. A sidereal day is **23 hours, 56 minutes, 4.091 seconds**.
To correct solar time to sidereal time, the astrologer must add **9.86 seconds of acceleration for every hour elapsed** since the ephemeris reference epoch (midnight or noon).

#### 3. Proportional Diurnal Logarithms
Planets do not move across the sky at constant speeds. The Moon moves between $11^\circ45'$ and $15^\circ20'$ per day; Mercury moves up to $2^\circ10'$ per day or stops completely when stationing retrograde.
To calculate where a planet was located at an intermediate hour of GMT, March and McEvers teach the universal method of **Diurnal Logarithms**:
$$\text{Log of Motion in 24h} + \text{Log of GMT Time Elapsed} = \text{Log of Distance Traveled}$$
By looking up the anti-logarithm in standard tables, the exact degrees, minutes, and seconds of planetary travel are calculated and added to the planet's position at 0:00 GMT.

---

## Structural Pillar 2: Gestalt Chart Patterns — The Marc Edmund Jones Shapes

Before analyzing individual signs or aspects, the master astrologer views the horoscope as a whole. Pioneered by Marc Edmund Jones and refined by March & McEvers, the **Seven Chart Shapes** reveal how the individual organizes their psychic energy across the arena of life:

\`\`\`
                                THE SEVEN GESTALT CHART SHAPES
                                
       1. SPLASH                     2. BUNDLE                    3. BOWL
   (All 360° Dispersed)          (All within 120°)            (All within 180°)
      *   *   *                      * * *                        * * * * *
    *           *                   *     *                      *         *
    *           *                  *       *                    ─────────────
      *   *   *                    ─────────                    (Empty Half)
                                   (240° Empty)
                                   
       4. BUCKET                     5. LOCOMOTIVE                6. SEE-SAW
    (Bowl + 1 Handle)             (240° Occupied, 120° Gap)    (Two Opposing Clusters)
          * (Handle)                 * * * *                      * * *     * * *
    ─────────────                  *         *                   *     *   *     *
      * * * * *                    *           *                  ─────     ─────
                                   (Empty 120°)                  (Two 60°+ Gaps)
                                   
                                     7. SPLAY
                              (Irregular Asymmetrical Clusters)
                                    * *       *
                                       *     * *
                                    * *       *
\`\`\`

---

### In-Depth Delineation of the Seven Shapes:

#### 1. The Splash Pattern
- **Geometry**: Planets are evenly distributed around the entire $360^\circ$ circle, with no empty space greater than $60^\circ$ or $90^\circ$.
- **Psychological Orientation**: The Universalist / Renaissance Mind.
- **Core Strengths**: Vast breadth of interests, versatility, broad perspective, ability to connect disparate fields.
- **Vulnerabilities**: Energy dissipation, lack of focus, dilettantism; Jack of all trades, master of none.
- **Operational Antidote**: Cultivating conscious discipline to focus on one dominant field of expertise.

#### 2. The Bundle Pattern
- **Geometry**: All ten planets are concentrated within an arc of $120^\circ$ or less, leaving at least $240^\circ$ of the chart completely empty.
- **Psychological Orientation**: The Specialist / Hyper-Focused Drive.
- **Core Strengths**: Unshakable concentration, obsessive dedication to a singular goal, massive power within their specialized field.
- **Vulnerabilities**: Extreme narrow-mindedness, inability to comprehend alternative viewpoints, severe blindspots regarding the empty areas of life.
- **Operational Antidote**: Consciously building partnerships with people who embody the qualities of the empty hemisphere.

#### 3. The Bowl Pattern
- **Geometry**: All ten planets are clustered within $180^\circ$ (one exact hemisphere), leaving the remaining $180^\circ$ completely empty.
- **Psychological Orientation**: The Self-Contained Voyager / Cause-Driven Worker.
- **Key Diagnostic Point**: The **Leading Planet** (the planet rising first in clockwise diurnal motion) represents the tip of the spear—the primary mechanism through which the person engages the world.
- **Core Dynamics**: The empty hemisphere acts as an unconscious psychic scoop; the individual constantly seeks to pull external reality into their occupied half to achieve equilibrium.

#### 4. The Bucket (or Funnel) Pattern
- **Geometry**: Nine planets are clustered in a bowl within $180^\circ$, while **one single planet stands isolated on the opposite side of the wheel**, forming the "Handle" of the bucket.
- **Psychological Orientation**: The Single-Pointed Crusader.
- **The Power of the Handle (Singular Focalizer)**:
  - The handle planet absorbs and channels **all the energy of the remaining nine planets**.
  - It becomes the primary psychological outlet of the entire personality.
  - If the handle is Mars, the person is a relentless warrior/athlete; if Saturn, an iron administrator; if Jupiter, a charismatic teacher or philanthropist; if Moon, a caregiver or public figure.
- **Vulnerability**: If the handle planet is frustrated or afflicted, the entire personality suffers a systemic crisis.

#### 5. The Locomotive Pattern
- **Geometry**: The planets occupy an unbroken arc of approximately $240^\circ$, leaving an open, empty space of $120^\circ$ (a Grand Trine's width).
- **Psychological Orientation**: The Self-Propelled Dynamic Engine.
- **The Leading Planet (The Locomotive Engine)**:
  - The planet that leads the occupied group clockwise (rising over the horizon first) acts as the **Engine**.
  - It pulls the rest of the chart behind it through sheer willpower, restlessness, and ambition.
  - The empty $120^\circ$ space represents the problem to be solved—the hunger that drives the locomotive forward.

#### 6. The See-Saw Pattern
- **Geometry**: The planets are divided into **two opposing clusters** of at least two planets each, separated by two empty spaces of at least $60^\circ$ to $90^\circ$ on either side.
- **Psychological Orientation**: The Diplomat / Dialectical Arbitrator.
- **Core Dynamics**: The individual sees both sides of every question. They constantly weigh polarities: self vs. partner, career vs. family, logic vs. intuition.
- **Vulnerability**: Paralysis by analysis, chronic ambivalence, living on a pendulum swinging between extremes until mature synthesis is achieved.

#### 7. The Splay Pattern
- **Geometry**: Planets form three or more distinct, irregular clusters or sharp stelliums around the wheel, with irregular empty spaces between them.
- **Psychological Orientation**: The Rugged Individualist / The Anarchist / The Maverick.
- **Core Dynamics**: Refuses to be pigeonholed or categorized. Possesses intense, non-negotiable talents in distinct, disconnected arenas. Demands freedom from societal convention.

---

## Structural Pillar 3: Hemisphere and Quadrant Dynamics

March and McEvers emphasize that the division of the chart along the **Horizon (Ascendant-Descendant)** and the **Meridian (Midheaven-Nadir)** provides the fundamental energetic balance of personality:

\`\`\`
                                  SOUTH (Above Horizon)
                                 Public, Objective, Career
                                              ▲
                                              │
                      QUADRANT IV             │             QUADRANT III
                   Social Integration         │          Relationship & Other
                                              │
       EAST (Ascendant) ──────────────────────┼────────────────────── WEST (Descendant)
       Subjective, Self-Determined            │                       Receptive, Other-Oriented
                                              │
                       QUADRANT I             │             QUADRANT II
                   Personal Identity          │          Familial & Creative
                                              │
                                              ▼
                                   NORTH (Below Horizon)
                                  Private, Subjective, Roots
\`\`\`

### 1. The Northern vs. Southern Hemispheres
- **Northern Hemisphere (Below Horizon / Houses 1 to 6)**:
  - Subjective, introverted, self-contained, protective.
  - Motivation is internal; the person works out of personal necessity rather than for applause.
  - Needs a secure private sanctuary to recharge.
- **Southern Hemisphere (Above Horizon / Houses 7 to 12)**:
  - Objective, extroverted, socially visible, career-oriented.
  - Motivation is public; the person seeks collective recognition, social impact, and public achievement.
  - Deeply sensitive to reputation and civic status.

### 2. The Eastern vs. Western Hemispheres
- **Eastern Hemisphere (Ascendant Half / Houses 10, 11, 12, 1, 2, 3)**:
  - Self-determining, autonomous, pioneering, proactive.
  - Believes: *"I create my own destiny."* Takes initiative; uncomfortable following other people's plans.
- **Western Hemisphere (Descendant Half / Houses 4, 5, 6, 7, 8, 9)**:
  - Other-oriented, cooperative, reactive, dependent on social context.
  - Needs partnership, feedback, and collaboration. Thrives when responding to external challenges and opportunities.

---

## Structural Pillar 4: The House Rulership Network & Dispositor Trees

One of the greatest pedagogical gifts of March & McEvers is their rigorous methodology for mapping **House Rulerships** and **Dispositor Trees**:

### 1. The Mechanics of Cuspal Rulership
- Every house cusp falls in a specific zodiacal sign.
- The planet that rules that sign is the **Lord of the House**.
- The physical house where that Lord resides reveals **the destination of the energy**:
  - *Example*: If the 2nd House (Personal Finances) cusp is Aries, Mars is the Lord of the 2nd House.
  - If Mars is placed in the 10th House (Career / Public Life), the individual makes money directly through public career leadership, executive action, or entrepreneurship.
  - If Mars is placed in the 4th House (Home / Family), money is made through real estate, family businesses, or working from home.

### 2. The Final Dispositor & Dispositor Trees
A planet is said to be "disposed of" by the ruler of the sign it occupies (e.g., Moon in Aries is disposed of by Mars). 
By tracing each planet back to its ruling planet, one constructs a **Dispositor Tree**:

\`\`\`
                                  DISPOSITOR TREE DYNAMICS
                                  
      CASE A: FINAL DISPOSITOR               CASE B: MUTUAL RECEPTION LOOP
      (One planet in its own sign)           (Two planets in each other's signs)
      
              [ MARS in Aries ]                       [ SUN in Aquarius ]
            (The Final Dispositor)                             ▲
             ▲       ▲        ▲                                │  Mutual
             │       │        │                                │ Reception
          Venus    Saturn   Jupiter                            ▼
         (in Aries) (in Leo) (in Scorpio)            [ URANUS in Leo ]
\`\`\`

- **The Sole Final Dispositor**: When one single planet occupies its home sign (dignity) and rules all other planets directly or indirectly, it is the absolute monarch of the chart. All psychological drives ultimately submit to its agenda.
- **Mutual Reception**: When two planets occupy each other's signs (e.g., Sun in Aquarius, Uranus in Leo; or Venus in Scorpio, Mars in Libra), they form a **closed alchemical energy circuit**. 
  - They act as best friends who hold the keys to each other's houses.
  - An individual can resolve a difficult aspect on one planet by consciously invoking the virtues of its mutual reception partner!

---

## Structural Pillar 5: Intercepted Signs and Houses

In quadrant house systems (such as Placidus or Koch), when birth occurs at higher geographical latitudes (above $\sim 45^\circ$ North or South), mathematical distortion causes certain signs to be stretched and others compressed:

### What is an Intercepted Sign?
An **intercepted sign** is a zodiacal sign that is completely contained within a house without holding a cusp:
- The cusp of the 1st House might be at $28^\circ$ Pisces, while the cusp of the 2nd House is at $4^\circ$ Taurus.
- In this case, the entire sign of **Aries is intercepted in the 1st House**.
- Because the zodiac operates in polarities, the opposite sign (**Libra**) will be intercepted in the opposite house (**7th House**).

#### Psychological Meaning of Interceptions (March & McEvers Axiom):
1. **The "Locked Room"**: The qualities of an intercepted sign are like treasures locked in an inner room. In early life, the individual struggles to express that sign naturally because it does not possess an external door (a house cusp) to the outside world.
2. **Delayed Mastery**: The individual must consciously search for the key to unlock the intercepted planet and sign. Once unlocked through self-awareness and hard work, intercepted planets often become the person's most profound, authentic genius!
3. **Duplicated Cusps**: Because two signs are intercepted, two other signs must hold two cusps each (duplicated cusps). The planet ruling the duplicated sign has a double workload, bridging two separate areas of life experience.

---

## Structural Pillar 6: Retrograde Planets — The Inward Reflex

March and McEvers debunk the superstition that retrograde planets are weak or malefic:
- A retrograde planet indicates **introverted, subjective energy processing**.
- While a direct planet immediately discharges its energy into external action, a retrograde planet pulls the experience inward, filtering it through personal ethical and psychological standards before acting.

| Retrograde Planet | Outward Manifestation | Inner Psychological Reality |
| :--- | :--- | :--- |
| **Mercury Retrograde** | Reflective speech, thoughtful deliberation, non-linear thinking. | Immense internal contemplation; reviews and re-evaluates data; hates small talk. |
| **Venus Retrograde** | Unconventional social manners, difficulty with superficial charm. | Deep, private capacity for love; standards of beauty based on soul integrity rather than fashion. |
| **Mars Retrograde** | Reluctance to engage in outward aggression, indirect conflict style. | Energy and anger turn inward; needs physical outlets (martial arts, endurance sports) to prevent passive-aggression. |
| **Jupiter Retrograde** | Rejection of conventional dogmatic religion or social pomposity. | Creates an internal, deeply philosophical moral compass; searches for spiritual truth within. |
| **Saturn Retrograde** | Self-doubt, feeling like an impostor, fear of external authority. | Hyper-developed internal conscience; takes excessive responsibility; becomes self-disciplined master. |

---

## Architectural Deep Dive: Complete Worked Mathematical Calculation (Case Study: JFK)

To illustrate how raw clock time transforms into an exact astrological chart without computers, March and McEvers provide an exhaustive, step-by-step arithmetic breakdown. Let us calculate the birth chart of **John F. Kennedy**:
- **Date**: May 29, 1917
- **Clock Time**: 3:00 PM Eastern Standard Time (EST)
- **Place**: Brookline, Massachusetts (Latitude: $42^\circ 20' \text{ N}$, Longitude: $71^\circ 07' \text{ W}$)

### Step 1: Conversion to Greenwich Mean Time (GMT)
- Eastern Standard Time is the zone time for the $75^\circ \text{ W}$ meridian.
- Offset: Add 5 hours to EST to obtain GMT.
$$3:00\text{ PM} + 5\text{ hours} = 8:00\text{ PM GMT} = 20:00:00\text{ GMT}$$

### Step 2: Calculating Local Sidereal Time (LST)
1. **Sidereal Time at Greenwich on May 29, 1917 at 0:00 GMT** (from Ephemeris):
   $$\text{ST at 0:00 GMT} = 16\text{h } 25\text{m } 12\text{s}$$
2. **Add elapsed clock time**: $20\text{h } 00\text{m } 00\text{s}$
3. **Add acceleration for 20 hours** ($9.86\text{ seconds per hour}$):
   $$20 \times 9.86\text{s} = 197.2\text{s} = 3\text{m } 17\text{s}$$
4. **Intermediate Greenwich Sidereal Time (GST)**:
   $$16\text{h } 25\text{m } 12\text{s} + 20\text{h } 00\text{m } 00\text{s} + 3\text{m } 17\text{s} = 36\text{h } 28\text{m } 29\text{s} - 24\text{h} = 12\text{h } 28\text{m } 29\text{s}$$
5. **Adjust for Local Longitude** ($71^\circ 07' \text{ W}$):
   - $71^\circ \times 4\text{m} = 284\text{m} = 4\text{h } 44\text{m}$
   - $7' \times 4\text{s} = 28\text{s}$
   - Total Longitude Equivalent = $4\text{h } 44\text{m } 28\text{s}$
   - Because the location is **West** of Greenwich, **subtract** this value from GST:
   $$\text{LST} = 12\text{h } 28\text{m } 29\text{s} - 4\text{h } 44\text{m } 28\text{s} = 7\text{h } 44\text{m } 01\text{s}$$

### Step 3: Deriving House Cusps via Table of Houses
- Using $\text{LST} = 7\text{h } 44\text{m } 01\text{s}$ and Latitude $42^\circ 20' \text{ N}$ in a Placidus Table of Houses:
  - **Midheaven (10th House Cusp)**: $23^\circ 44' \text{ Gemini}$
  - **11th House Cusp**: $28^\circ 12' \text{ Cancer}$
  - **12th House Cusp**: $27^\circ 35' \text{ Leo}$
  - **Ascendant (1st House Cusp)**: $20^\circ 00' \text{ Libra}$
  - **2nd House Cusp**: $14^\circ 18' \text{ Scorpio}$
  - **3rd House Cusp**: $15^\circ 42' \text{ Sagittarius}$
- Opposite house cusps hold identical degrees and minutes in the polar signs (e.g., 4th House = $23^\circ 44' \text{ Sagittarius}$; 7th House Descendant = $20^\circ 00' \text{ Aries}$).

### Step 4: Interpolating Planetary Positions via Diurnal Logarithms
- Example: Calculating the Moon's exact position on May 29, 1917 at 20:00 GMT:
  - Moon at May 29, 0:00 GMT: $11^\circ 42' \text{ Virgo}$
  - Moon at May 30, 0:00 GMT: $24^\circ 15' \text{ Virgo}$
  - Daily Motion in 24 hours: $24^\circ 15' - 11^\circ 42' = 12^\circ 33'$
  - Diurnal Log of $12^\circ 33' = 0.2811$
  - Diurnal Log of 20h 00m GMT = $0.0792$
  - Add Logs: $0.2811 + 0.0792 = 0.3603$
  - Anti-Log of $0.3603 = 10^\circ 27'$
  - Add to Moon's 0:00 position: $11^\circ 42' + 10^\circ 27' = \mathbf{22^\circ 09' \text{ Virgo}}$ (Placed in the 11th House).

---

## Architectural Deep Dive: The Complete House Rulership Dynamic Matrix

March & McEvers establish that house cusps are dynamic transmitters of energy. The Lord of the House carries the affairs of that house directly into the residential house where the Lord sits:

| House Lord Placement | Core Life Mechanism |
| :--- | :--- |
| **Lord of 1st in 10th** | The self identity is directly projected into career ambition and public visibility. Natural executive presence. |
| **Lord of 2nd in 8th** | Personal financial values are transformed through joint investments, partner's assets, inheritances, or tax strategies. |
| **Lord of 4th in 1st** | Early family roots, ancestral conditioning, and domestic patterns deeply shape the outer personality and physical body. |
| **Lord of 5th in 9th** | Creative self-expression, romance, and children are tied to higher philosophy, international travel, or academic publishing. |
| **Lord of 6th in 12th** | Daily work and bodily health are influenced by unconscious habits, psychosomatic patterns, or require quiet seclusion in institutional environments. |
| **Lord of 7th in 10th** | The marital or business partner directly enhances the public reputation and social status of the native; marrying someone through career. |
| **Lord of 8th in 2nd** | Deep psychological crises, inheritances, or shared financial resources directly determine personal liquid assets and financial survival. |
| **Lord of 9th in 5th** | Philosophical beliefs are expressed dramatically through creative art, teaching youth, sports, or speculative ventures. |
| **Lord of 10th in 1st** | Vocation and career are entirely self-created; the individual is their own brand and primary executive driver. |
| **Lord of 11th in 7th** | Long-term humanitarian aspirations and peer group friendships are realized through close one-on-one partnerships and public alliances. |
| **Lord of 12th in 6th** | Unconscious shadow material, repressed memories, and spiritual longings surface directly as daily physical health symptoms or service work. |

---

## Architectural Deep Dive: The Unaspected Planet Phenomenon

March and McEvers were among the first modern researchers to systematically analyze the **Unaspected Planet**—a planet that forms no major Ptolemaic aspects (Conjunction, Sextile, Square, Trine, Opposition) within reasonable orbs to any other planet:

### The Psychology of the Unaspected Planet:
- Unlike aspected planets that constantly negotiate with other psychic drives, an unaspected planet is **feral and uninhibited**.
- It acts like a child in an empty playground with no parents watching:
  1. **Extreme Purity of Expression**: It expresses its archetypal nature with 100% undiluted force.
  2. **Intermittent Explosions**: Because it is disconnected from the main psychic circuitry, the individual may forget it exists until it suddenly erupts with astonishing intensity.
  3. **The Genius Factor**: Unaspected Mercury often produces staggering mathematical or literary brilliance; unaspected Mars creates extraordinary athletic stamina; unaspected Venus creates immortal artistic purity or romantic detachment.

---

## Architectural Deep Dive: Aspect Orbs, Geometry & The Aspectarian Hierarchy

March & McEvers establish strict mathematical guidelines for aspect calculation, warning against loose orbs that generate false positives and obscure the primary psychic architecture:

### 1. The Standard Aspectarian Orb Table
| Aspect | Angular Separation | Harmonic Divisor | Standard Orb (Planets) | Luminary Orb (Sun/Moon) |
| :--- | :---: | :---: | :---: | :---: |
| **Conjunction** | $0^\circ$ | 1 | $8^\circ$ | $10^\circ$ |
| **Sextile** | $60^\circ$ | 6 | $5^\circ$ | $6^\circ$ |
| **Square** | $90^\circ$ | 4 | $7^\circ$ | $8^\circ$ |
| **Trine** | $120^\circ$ | 3 | $7^\circ$ | $8^\circ$ |
| **Inconjunct / Quincunx** | $150^\circ$ | 12/5 | $2^\circ - 3^\circ$ | $3^\circ$ |
| **Opposition** | $180^\circ$ | 2 | $8^\circ$ | $10^\circ$ |
| **Semi-Sextile** | $30^\circ$ | 12 | $1^\circ - 2^\circ$ | $2^\circ$ |
| **Semi-Square** | $45^\circ$ | 8 | $2^\circ$ | $2^\circ$ |
| **Sesquiquadrate** | $135^\circ$ | 8/3 | $2^\circ$ | $2^\circ$ |

### 2. The Inconjunct / Quincunx ($150^\circ$): The Aspect of Strain and Reorganization
March & McEvers consider the inconjunct to be the most demanding aspect in modern interpretation:
- Unlike the square (which produces overt fighting) or the opposition (which produces relationship confrontation), the inconjunct links two planets in **signs that have neither element nor mode in common** (e.g., Aries Fire/Cardinal and Virgo Earth/Mutable).
- They have no common ground of understanding.
- It produces a chronic, low-grade sense of irritation, requiring constant conscious adjustment and physical reorganization. It is frequently linked to psychosomatic health challenges.

---

## Architectural Deep Dive: Critical Degrees & The Anaretic 29th Degree

March and McEvers integrate classical Arabic and Hindu critical degrees into their Western psychological framework:

1. **The Classical Critical Degrees**:
   - **Cardinal Signs (Aries, Cancer, Libra, Capricorn)**: $0^\circ, 13^\circ, \text{ and } 26^\circ$.
   - **Fixed Signs (Taurus, Leo, Scorpio, Aquarius)**: $8^\circ - 9^\circ \text{ and } 21^\circ - 22^\circ$.
   - **Mutable Signs (Gemini, Virgo, Sagittarius, Pisces)**: $4^\circ \text{ and } 17^\circ$.
   - When a planet or house cusp falls on a critical degree, its qualities are amplified, urgent, and subject to crisis testing.
2. **The Anaretic Degree ($29^\circ00' - 29^\circ59'$)**:
   - The final degree of any sign is the **degree of karmic culmination and urgency**.
   - An individual with a personal planet at $29^\circ$ feels an intense subconscious pressure to complete the lessons of that sign in this lifetime.
   - It often manifests as sudden, irreversible decisions or a feeling of "now or never."

---

## The Master Delineation Protocol: The March & McEvers 8-Step Synthesis

In Lesson 18, March and McEvers assemble their complete clinical methodology for chart interpretation:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE MARCH & MCEVERS 8-STEP SYNTHESIS BLUEPRINT              │
│                                                                             │
│ STEP 1: IDENTIFY THE CHART PATTERN (Marc Edmund Jones Shape)                │
│         Determine the primary energetic organization (Splash, Bucket, etc.).│
│                                                                             │
│ STEP 2: ANALYZE HEMISPHERE AND QUADRANT WEIGHTING                           │
│         Audit North vs. South, East vs. West distribution.                  │
│                                                                             │
│ STEP 3: SCORE ELEMENTS AND MODES                                            │
│         Count planets in Fire, Earth, Air, Water; Cardinal, Fixed, Mutable. │
│                                                                             │
│ STEP 4: SYNTHESIZE THE PRIMAL TRINITY                                       │
│         Combine Sun (Core Will), Moon (Emotional Need), Ascendant (Mask).   │
│                                                                             │
│ STEP 5: MAP THE DISPOSITOR TREE & FINAL DISPOSITORS                         │
│         Trace chains of rulership to identify sovereign planets or loops.   │
│                                                                             │
│ STEP 6: AUDIT INTERCEPTIONS AND RETROGRADE PLANETS                          │
│         Locate locked psychological rooms and internalized planetary gears. │
│                                                                             │
│ STEP 7: WEIGH MAJOR AND MINOR ASPECT CONFIGURATIONS                         │
│         Identify T-squares, Grand Trines, Stelliums, and exact orbs.        │
│                                                                             │
│ STEP 8: SYNTHESIZE HOUSE RULERSHIP PATHWAYS                                 │
│         Follow the lords of the cusps to trace practical life manifestations.│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Synthesis Takeaway: The Enduring Architectural Impact of March & McEvers

*The Only Way to Learn Astrology, Volume 2* remains an irreplaceable masterwork because it insists on **unflinching technical competence as the only true foundation for psychological insight**. 

By training the practitioner to:
1. Master the mathematical trigonometry of Greenwich Mean Time and Sidereal Time,
2. Read the macroscopic geometry of Marc Edmund Jones chart patterns,
3. Trace the hidden arterial pathways of Dispositor Trees and Mutual Receptions, and
4. Unlock the mysteries of Intercepted Signs and Retrograde planets,

Marion D. March and Joan McEvers transformed astrology from a hazy, intuitive guessing game into a rigorous, dignified, and exquisitely precise diagnostic science.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Only Way to Learn Astrology, Vol. 2 | March & McEvers</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .math-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(30, 58, 138, 0.15);
      color: #1e3a8a;
      border: 1px solid rgba(30, 58, 138, 0.3);
      margin-bottom: 0.5rem;
    }
    .shape-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    .shape-card {
      background: var(--card-bg, #fffdfa);
      border: 1px solid var(--border-color, #e8dfd5);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .shape-card h4 {
      margin-top: 0;
      color: var(--primary-color, #4a2c11);
    }
  </style>
</head>
<body>
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Return to Library Catalog</a>
        <h1 class="book-title">The Only Way to Learn Astrology, Vol. 2</h1>
        <p class="book-subtitle">Math & Interpretation Techniques • Master Codex</p>
        <div class="book-meta">
          <span class="meta-item"><strong>Authors:</strong> Marion D. March & Joan McEvers</span>
          <span class="meta-item"><strong>System:</strong> Mathematical Chart Erection & Gestalt Delineation</span>
          <span class="meta-item"><strong>Fidelity:</strong> BKRS v2.0 Replacement Grade</span>
          <span class="meta-item"><strong>Master Notes:</strong> 32k+ Chars</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Technical Journey</button>
        <button class="view-btn" data-view="blueprint">View B: Gestalt Shapes Map</button>
        <button class="view-btn" data-view="engine">View C: Synthesis Blueprint</button>
      </div>
    </header>

    <main class="reader-body">
      <!-- VIEW A: JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="prose-content">
          <div class="chapter-card intro-card">
            <h2>The Bedrock of Astrological Calculation and Interpretation</h2>
            <p>First published in 1981, Volume 2 of Marion D. March and Joan McEvers' classic series remains the gold-standard curriculum for professional astrologers worldwide. March and McEvers insist that genuine psychological interpretation cannot occur in a vacuum: it requires an unshakeable grasp of the <strong>spherical mathematics of chart erection</strong> (Greenwich Mean Time, Sidereal Time, RAMC, Diurnal Logarithms) wedded to <strong>macroscopic gestalt pattern recognition</strong>.</p>
          </div>

          <div class="units-container">
            ${knowledgeUnits.map((u, idx) => `
              <article class="unit-card" id="${u.id}">
                <div class="unit-header">
                  <span class="unit-number">UNIT ${String(idx + 1).padStart(2, '0')}</span>
                  <span class="math-badge">${u.epistemicStatus}</span>
                  <span class="page-range">Pages: ${u.pageRange}</span>
                </div>
                <h3 class="unit-title">${u.title}</h3>
                <p class="unit-core"><strong>Core Truth:</strong> ${u.coreConcept}</p>
                <div class="unit-tags">
                  ${u.tags.map(t => `<span class="tag">#${t}</span>`).join(' ')}
                </div>
              </article>
            `).join('\n')}
          </div>
        </div>
      </section>

      <!-- VIEW B: BLUEPRINT -->
      <section id="view-blueprint" class="view-section">
        <div class="prose-content">
          <h2>The Seven Marc Edmund Jones Chart Shapes</h2>
          <p>Before analyzing signs or aspects, the master astrologer audits how planets are distributed across the 360-degree circle:</p>

          <div class="shape-grid">
            <div class="shape-card">
              <h4>1. The Splash Pattern</h4>
              <p><strong>Geometry:</strong> Planets evenly dispersed around the entire wheel ($360^\circ$).</p>
              <p><strong>Archetype:</strong> The Universal Renaissance Mind. Broad interests, versatile, wide perspective; risks lack of concentration.</p>
            </div>

            <div class="shape-card">
              <h4>2. The Bundle Pattern</h4>
              <p><strong>Geometry:</strong> All ten planets clustered within an arc of $120^\circ$ or less.</p>
              <p><strong>Archetype:</strong> The Hyper-Focused Specialist. Unwavering single-pointed drive; risks extreme narrowness in life scope.</p>
            </div>

            <div class="shape-card">
              <h4>3. The Bowl Pattern</h4>
              <p><strong>Geometry:</strong> All planets occupy one exact hemisphere ($180^\circ$).</p>
              <p><strong>Archetype:</strong> The Cause-Driven Voyager. The Leading Planet acts as the spearhead; constantly pulls the empty hemisphere inward.</p>
            </div>

            <div class="shape-card">
              <h4>4. The Bucket (Funnel)</h4>
              <p><strong>Geometry:</strong> Nine planets in a bowl, with ONE singleton handle planet opposite.</p>
              <p><strong>Archetype:</strong> The Single-Pointed Crusader. The handle planet absorbs and focalizes the entire chart's psychic energy.</p>
            </div>

            <div class="shape-card">
              <h4>5. The Locomotive</h4>
              <p><strong>Geometry:</strong> Occupies $240^\circ$ with an open $120^\circ$ gap.</p>
              <p><strong>Archetype:</strong> The Self-Propelled Dynamic Engine. The leading clockwise planet acts as the locomotive engine driving the life.</p>
            </div>

            <div class="shape-card">
              <h4>6. The See-Saw</h4>
              <p><strong>Geometry:</strong> Two opposing clusters separated by two large empty gaps ($60^\circ+$).</p>
              <p><strong>Archetype:</strong> The Dialectical Arbitrator. Sees both sides of every issue; balances polarities, relationships, and diplomacy.</p>
            </div>

            <div class="shape-card">
              <h4>7. The Splay</h4>
              <p><strong>Geometry:</strong> Three or more irregular clusters/stelliums around the wheel.</p>
              <p><strong>Archetype:</strong> The Rugged Individualist. Unconventional, maverick talents; refuses to fit into societal templates.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW C: SYNTHESIS BLUEPRINT -->
      <section id="view-engine" class="view-section">
        <div class="prose-content">
          <h2>The March & McEvers 8-Step Synthesis Protocol</h2>

          <div class="heuristic-card">
            <h3>Step 1 to 3: The Macroscopic Foundations</h3>
            <p>Identify the Marc Edmund Jones chart shape; evaluate Hemisphere distribution (North/South, East/West); score elemental triplicities (Fire, Earth, Air, Water) and quadruplicities (Cardinal, Fixed, Mutable).</p>
          </div>

          <div class="heuristic-card">
            <h3>Step 4 & 5: The Core Personality & Energy Arteries</h3>
            <p>Synthesize the Primal Trinity: Sun (Ego/Will), Moon (Emotional Needs), Ascendant (Outer Persona). Build the Dispositor Tree to trace which planet acts as the Final Sovereign or whether Mutual Receptions create self-reinforcing loops.</p>
          </div>

          <div class="heuristic-card">
            <h3>Step 6 to 8: Latent Potentials & Dynamic Realization</h3>
            <p>Audit Intercepted Signs (locked psychic rooms) and Retrogrades (internalized processing). Follow the house cusp lords into their residential houses to map concrete real-world life manifestations.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-meta">
        <p><strong>Intellectualist Project</strong> • Standard BKRS v2.0 Replacement Reader • Source: <em>The Only Way to Learn Astrology, Vol. 2</em> by Marion D. March & Joan McEvers</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf8');

console.log('Successfully wrote knowledge-units.json for The Only Way to Learn Astrology, Vol. 2');
console.log('Successfully wrote master-notes.md for The Only Way to Learn Astrology, Vol. 2 (' + masterNotesMarkdown.length + ' chars)');
console.log('Successfully wrote index.html for The Only Way to Learn Astrology, Vol. 2 (' + readerHtml.length + ' chars)');
