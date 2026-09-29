/**
 * Builder for Astrological Grand Unified Curriculum & Epistemological Rosetta Stone
 * Architecture: Cross-Book Synthesis Suite for all 12 Astrology Masterworks
 * Standard: BKRS v2.0 Production Master
 */

const fs = require('fs');
const path = require('path');

const crossBookDir = path.join(__dirname, '..', '..', 'docs', 'cross-book');
if (!fs.existsSync(crossBookDir)) {
  fs.mkdirSync(crossBookDir, { recursive: true });
}

const curriculumData = {
  curriculum_id: "astrology-unified-master-v1",
  title: "The Master Astrological Curriculum & Epistemological Rosetta Stone",
  subtitle: "A Systematic 5-Stage Path from Beginner to Diagnostic Master Across 12 Canonical Traditions",
  total_books: 12,
  books_roster: [
    {
      id: "valens",
      title: "The Anthologies",
      author: "Vettius Valens",
      year: "c. 175 CE",
      paradigm: "Classical Hellenistic",
      slug: "the-anthologies-vettius-valens",
      key_contributions: "Whole-Sign Houses (Dodekatropos), Sect (Hairesis), Triplicity Rulers of the Sect Light, Zodiacal Releasing (Aphesis) from Spirit and Fortune."
    },
    {
      id: "raman",
      title: "Astrology for Beginners",
      author: "B.V. Raman",
      year: "1940",
      paradigm: "Classical Vedic Parashari",
      slug: "astrology-for-beginners",
      key_contributions: "Sidereal Zodiac (Nirayana), 12 Bhavas, Shadbala planetary strengths, Functional Benefics/Malefics, Raja and Dhana Yogas, Vimshottari Dasha."
    },
    {
      id: "goel",
      title: "Predicting through Navamsha & Nadi Astrology",
      author: "V.P. Goel",
      year: "2004",
      paradigm: "Harmonic Divisional Jyotish",
      slug: "predict-with-navamsha",
      key_contributions: "D9 Navamsha fine-tuning, Pushkar Navamshas, 64th Navamsha, 22nd Drekkana, transit over divisional charts, Nadi link mechanics."
    },
    {
      id: "braha",
      title: "Ancient Hindu Astrology: A Modern Approach",
      author: "James T. Braha",
      year: "1986",
      paradigm: "Vedic-Western Bridge",
      slug: "ancient-hindu-astrology-braha",
      key_contributions: "East-West synthesis, 9 diagnostic masterclasses, resolving chart contradictions, Upachaya house growth, functional nature over natural beneficence."
    },
    {
      id: "raaj",
      title: "Astrology at the Speed of Light",
      author: "Kapiel Raaj",
      year: "2012",
      paradigm: "Modern Pragmatic Jyotish",
      slug: "astrology-speed-of-light",
      key_contributions: "Rapid chart deconstruction, Rahu-Ketu karmic obsession axis, 27 Nakshatras, house lord displacements, modern psychological applications."
    },
    {
      id: "rudhyar",
      title: "The Astrological Houses: The Spectrum of Individual Experience",
      author: "Dane Rudhyar",
      year: "1972",
      paradigm: "Humanistic & Transpersonal",
      slug: "astrological-houses-rudhyar",
      key_contributions: "Houses as a dynamic 28-phase cycle of consciousness, Cross of Awareness (Horizon & Meridian), 3 levels of functioning (Biological, Socio-Cultural, Transpersonal)."
    },
    {
      id: "meister",
      title: "The Key to the Self",
      author: "Marianne Meister",
      year: "2001",
      paradigm: "Jungian Depth Psychology",
      slug: "the-key-to-the-self-meister",
      key_contributions: "Horoscope as psychic mandala of the unconscious, synchronicity, personal planets as inner gods, Saturn as the Shadow boundary, Jupiter-Saturn dialectic."
    },
    {
      id: "balfour",
      title: "Black Love Signs",
      author: "Thelma Balfour",
      year: "1999",
      paradigm: "Relational Psychology",
      slug: "black-love-signs",
      key_contributions: "Elemental relational dynamics, gender communication barriers, forensic 144-pair inter-sign compatibility matrix, sexual and emotional polarities."
    },
    {
      id: "giamario",
      title: "The Shamanic Astrology Handbook",
      author: "Daniel Giamario & Cayelin K. Castell",
      year: "1994 / 2014",
      paradigm: "Shamanic & Evolutionary",
      slug: "shamanic-astrology-handbook",
      key_contributions: "Tropical Earth Wheel (seasonal solstices/equinoxes), 584-day Venus synodic cycle (Inanna underworld descent), planetary initiations, nodal soul lineage."
    },
    {
      id: "teal",
      title: "Predicting Events with Astrology",
      author: "Celeste Teal",
      year: "1999",
      paradigm: "Predictive Western Synthesis",
      slug: "predicting-events-with-astrology-teal",
      key_contributions: "The Rule of Three for event validation, Secondary Progressions (internal clock), Solar Arc Directions (external events), Solar and Lunar returns, crisis protocols."
    },
    {
      id: "riske",
      title: "Llewellyn's Complete Book of Predictive Astrology",
      author: "Kris Brandt Riske",
      year: "2011",
      paradigm: "Practical Predictive Mechanics",
      slug: "predictive-astrology-riske",
      key_contributions: "Outer planet transit cycles (Jupiter to Pluto), inner planet retrograde stations and loops, 29-year progressed Moon cycle, critical degree activations."
    },
    {
      id: "gibson",
      title: "Signs of Mental Illness",
      author: "Mitchell Earl Gibson, M.D.",
      year: "1998",
      paradigm: "Psychiatric Neuro-Astrology",
      slug: "signs-of-mental-illness-gibson",
      key_contributions: "The vertical dimension of Declination, Parallels/Contraparallels (2°34' orb), Planetary Eclipses, Out-of-Bounds (Exdek), P/N Ratio (<0.83 deficit), clinical biomarkers."
    }
  ],
  stages: [
    {
      stage_number: 1,
      stage_name: "Primary Geometry & Classical Foundations",
      subtitle: "The Ancient Roots: Hellenistic Whole-Signs & Vedic Parashari Principles",
      core_books: ["valens", "raman"],
      learning_outcomes: [
        "Master the 12 signs, 12 houses, and 7 traditional visible planets in their original dignity hierarchies.",
        "Internalize the difference between Whole-Sign houses (Valens) and Bhava Chalit quadrant calculations.",
        "Master the Hellenistic Doctrine of Sect (Day charts vs. Night charts) to identify which malefic (Mars or Saturn) causes acute disruption and which benefic (Jupiter or Venus) provides primary salvation.",
        "Understand the Parashari foundation of planetary strengths (Shadbala), natural vs. functional benefics, and the mechanics of foundational Raja and Dhana Yogas.",
        "Compare the ancient Hellenistic time-lord system (Zodiacal Releasing from the Lots of Spirit and Fortune) with the 120-year Vedic Vimshottari Dasha system."
      ]
    },
    {
      stage_number: 2,
      stage_name: "Harmonic Micro-Lenses & Relational Dynamics",
      subtitle: "Karmic Axis, Divisional Precision, and Interpersonal Polarities",
      core_books: ["goel", "braha", "raaj", "balfour"],
      learning_outcomes: [
        "Deconstruct the birth chart beyond the gross physical D1 Rashi using the microscopic D9 Navamsha chart (V.P. Goel).",
        "Identify vulnerable points: 64th Navamsha (4th sign from Moon's Navamsha) and 22nd Drekkana (8th house cusp in D3) for health and timing vulnerabilities.",
        "Master the Rahu-Ketu nodal axis as the soul's primary karmic obsession and past-life mastery engine (Kapiel Raaj).",
        "Resolve contradictory planetary indications using James Braha's 9 clinical masterclasses and Upachaya house growth rules.",
        "Apply Thelma Balfour's 144-pair elemental matrix to diagnose interpersonal communication pitfalls, ego clashes, and sexual polarities."
      ]
    },
    {
      stage_number: 3,
      stage_name: "The Psychological Paradigm Shift",
      subtitle: "Humanistic Consciousness & Jungian Depth Archetypes",
      core_books: ["rudhyar", "meister"],
      learning_outcomes: [
        "Abandon external fatalism and reframe the horoscope as a dynamic 28-phase cycle of human experience (Dane Rudhyar).",
        "Delineate the Cross of Awareness: Horizon (Ascendant-Descendant = Self vs. Other) and Meridian (MC-IC = Public Mission vs. Soul Roots).",
        "Analyze any chart across Rudhyar's 3 evolutionary levels: Biological, Socio-Cultural, and Individual-Transpersonal.",
        "Reconceptualize planets as living archetypal sub-personalities inhabiting the personal and collective unconscious (Marianne Meister).",
        "Locate the client's primary Shadow complex via Saturn, and guide the dialectic of expansion (Jupiter) and containment (Saturn) toward genuine psychological individuation."
      ]
    },
    {
      stage_number: 4,
      stage_name: "Dynamic Multi-Layered Forecasting",
      subtitle: "The Predictive Toolkit: Secondary Progressions, Solar Arcs, Transits & Synodic Cycles",
      core_books: ["teal", "riske", "giamario"],
      learning_outcomes: [
        "Enforce the rigorous 'Rule of Three' (Celeste Teal): never predict an external event without verification across three independent astrological planes.",
        "Distinguish internal psychological maturation (Secondary Progressions: 1 day = 1 year) from external socio-physical milestones (Solar Arc Directions: 1° = 1 year).",
        "Track the 29-year Progressed Lunar cycle through the houses as an emotional barometer of life chapters.",
        "Map outer-planet transits (Jupiter through Pluto) and inner-planet retrograde loops (entry, station retrograde, direct station) as evolutionary initiations (Kris Brandt Riske).",
        "Trace the 584-day synodic cycle of Venus and the mythic descent of Inanna through the 7 underworld gates (Daniel Giamario)."
      ]
    },
    {
      stage_number: 5,
      stage_name: "Empirical Diagnostics & Neuro-Psychiatry",
      subtitle: "The Vertical Dimension: Declination, Eclipses, and Objective Clinical Biomarkers",
      core_books: ["gibson"],
      learning_outcomes: [
        "Break free from the limitation of longitudinal-only astrology by incorporating the vertical dimension: Celestial Declination.",
        "Calculate Parallels (conjunction equivalent) and Contraparallels (opposition equivalent) within the empirical 2°34' orb.",
        "Audit charts for Planetary Eclipses (simultaneous longitudinal conjunction AND declinational parallel) as high-voltage energetic focal points.",
        "Identify Out-of-Bounds planets (Exdek > 23°30') operating outside normal neuro-regulatory boundaries.",
        "Compute the quantitative General Planetary Index (GPI) and Positive-to-Negative Ratio (P/N Ratio): recognize values < 0.83 as the clinical threshold for psychiatric vulnerability (Depression, Panic, Schizophrenia, ADHD, Addiction)."
      ]
    }
  ],
  rosetta_stone: [
    {
      debate: "Tropical vs. Sidereal Zodiac",
      tropical_perspective: "Anchored to the Earth's seasonal solstices and equinoxes. Represents the psychological, somatic, and earthly seasonal unfolding of consciousness (Rudhyar, Meister, Giamario, Teal, Riske).",
      sidereal_perspective: "Anchored to the backdrop of the fixed stars (Chitra / Spica datum). Represents the cosmic, karmic, and galactic soul blueprint; indispensable for Nakshatras, harmonic divisionals (D9), and Vimshottari dasha timing (Raman, Goel, Raaj, Braha).",
      synthetic_resolution: "Complementary, not mutually exclusive. Use the Tropical framework for psychological individuation, emotional maturation, and Western predictive progressions; use the Sidereal framework for Vedic dasha timing, nakshatra archetypes, and harmonic divisionals."
    },
    {
      debate: "Whole-Sign Houses vs. Quadrant Systems (Placidus/Koch)",
      tropical_perspective: "Placidus/Koch divides the quadrant between the horizon and meridian by time/space, reflecting acute psychological stress cusps and developmental focal points.",
      sidereal_perspective: "Whole-Sign Houses (used in ancient Hellenistic and Vedic systems) assigns each 30° zodiacal sign to a discrete house, preserving the clean relationship between sign rulership and topos.",
      synthetic_resolution: "Use Whole-Sign houses for foundational topical rulership and time-lords (Valens & Raman); use the exact Ascendant, MC, and quadrant house cusps as high-intensity focal points of physical embodiment and crisis (Rudhyar & Teal)."
    },
    {
      debate: "Deterministic Fate vs. Psychological Individuation",
      tropical_perspective: "A fatalistic reading produces helplessness. The chart shows unintegrated unconscious archetypes that the individual projects outward into 'fate' (Jung, Meister, Rudhyar).",
      sidereal_perspective: "Karma is real and inexorable; specific planetary configurations represent ripe Prarabdha Karma that must bear fruit in the physical realm during their assigned dasha (Raman, Goel).",
      synthetic_resolution: "Karma provides the unalterable structural raw material (the biological organism, familial matrix, traumatic stressors); Psychological Individuation determines the level of consciousness with which that karma is metabolized and sublimated."
    },
    {
      debate: "Longitudinal Geometry vs. Celestial Declination",
      tropical_perspective: "Traditional astrology measures angles along the 360° ecliptic, revealing the narrative dialogue and mental/relational tensions between drives.",
      sidereal_perspective: "Dr. Gibson's clinical research proves that longitudinal aspects alone cannot differentiate psychotic patients from healthy controls; declination represents the physiological, neurobiological grounding of cosmic force.",
      synthetic_resolution: "Longitude describes the subjective narrative and psychological theme; Declination (parallels, contraparallels, eclipses, and P/N ratio) measures the objective energetic voltage and biological threshold of the nervous system."
    }
  ],
  unified_protocol: [
    {
      step: 1,
      title: "Constitutional & Sect Grounding",
      action: "Determine Sect (Day vs. Night chart via Sun above/below horizon) to identify the functional malefic (Mars vs. Saturn) and leading benefic (Jupiter vs. Venus). Note the Ascendant and its ruling planet in both Whole-Sign and Quadrant frameworks to establish physical vitality and temperamental baseline."
    },
    {
      step: 2,
      title: "The Core Psychic Mandala & The Cross of Awareness",
      action: "Examine the Sun (Ego/Hero), Moon (Instinctual Soul Matrix), and the Horizon/Meridian axes (Cross of Awareness). Assess whether the native's primary drives are oriented toward individual differentiation (Houses 1–3), socio-cultural integration (Houses 4–9), or universal-transpersonal purpose (Houses 10–12)."
    },
    {
      step: 3,
      title: "The High-Voltage Declinational Audit",
      action: "Calculate all planetary declinations. Scan for Planetary Eclipses (simultaneous longitudinal conjunction and declinational parallel within 2°34') and Out-of-Bounds planets (Exdek > 23°30'). Audit the Positive-to-Negative Ratio (P/N Ratio): if < 0.83, establish whether the client requires grounding, medical support, or boundary stabilization."
    },
    {
      step: 4,
      title: "Harmonic Micro-Audit & The Karmic Axis",
      action: "Examine the Rahu-Ketu nodal axis (past-life comfort vs. evolutionary edge) and the D9 Navamsha chart (fruition of potential, marital karma, and Pushkar degrees). Check for afflictions to the 64th Navamsha or 22nd Drekkana for hidden somatic vulnerabilities."
    },
    {
      step: 5,
      title: "Dynamic Predictive Timing & The Rule of Three",
      action: "Identify the overarching life season using Vimshottari Dasha or Zodiacal Releasing. Then overlay Secondary Progressions (maturation of inner self), Solar Arcs (external events), and transits of outer planets. Only confirm major events when at least three independent vectors converge."
    }
  ],
  fifty_book_roadmap: [
    { cohort: "Cohort 1: Current Invariant Foundation (Completed)", count: 12, books: "Valens, Raman, Goel, Braha, Raaj, Rudhyar, Meister, Balfour, Giamario, Teal, Riske, Gibson." },
    { cohort: "Cohort 2: Classical Hellenistic & Arabic/Medieval Texts", count: 8, books: "Ptolemy (Tetrabiblos), Dorotheus of Sidon (Carmen Astrologicum), Abu Ma'shar (Great Introduction), Al-Biruni, Guido Bonatti (Liber Astronomiae), William Lilly (Christian Astrology), Morin de Villefranche, Firmicus Maternus (Mathesis)." },
    { cohort: "Cohort 3: Foundational Classical & Modern Vedic Classics", count: 10, books: "Brihat Parashara Hora Shastra, Jaimini Upadesha Sutras, Saravali, Phaladeepika, Uttara Kalamrita, K.N. Rao (Timing Events with Dashas & Transits), Sanjay Rath (Crux of Vedic Astrology), Ernst Wilhelm, David Frawley (Ayurvedic Astrology), B.V. Raman (Notable Horoscopes)." },
    { cohort: "Cohort 4: Modern Psychological, Evolutionary & Uranian Astrological Masters", count: 10, books: "Liz Greene (Saturn: A New Look at an Old Devil), Liz Greene (The Astrology of Fate), Howard Sasportas (The Twelve Houses), Stephen Arroyo (Astrology, Psychology, and the Four Elements), Robert Hand (Planets in Transit), Jeffrey Wolf Green (Pluto: Evolutionary Journey of the Soul), Reinhold Ebertin (Combination of Stellar Influences), Alfred Witte (Rules for Planetary Pictures), Demetra George (Asteroid Goddesses), Melanie Reinhart (Chiron and the Healing Journey)." },
    { cohort: "Cohort 5: Specialized Mundane, Esoteric, Medical & Financial Astrology", count: 10, books: "Nicholas Campion (Mundane Astrology), Sepharial (Silver Key / Astrological Keys), W.D. Gann (Tunnel Thru the Air / Financial Cycles), H.S. Green (Medical Astrology), Charles Carter (The Astrological Aspects), Alice Bailey (Esoteric Astrology), Manly P. Hall (Astrological Keywords), Noel Tyl (Synthesis & Counseling in Astrology), Donna Cunningham (Healing Pluto Problems), Steven Forrest (The Inner Sky)." }
  ]
};

// 1. Output astrology-master-curriculum.json
fs.writeFileSync(
  path.join(crossBookDir, 'astrology-master-curriculum.json'),
  JSON.stringify(curriculumData, null, 2),
  'utf8'
);
console.log('Successfully wrote astrology-master-curriculum.json');

// 2. Generate astrology-master-curriculum.md
let md = `# The Master Astrological Curriculum & Epistemological Rosetta Stone
**Subtitle:** A Systematic 5-Stage Path from Beginner to Diagnostic Master Across 12 Canonical Traditions  
**Standard:** BKRS v2.0 Production Master Synthesis  
**Scope:** 12 Reconstructed Works | 5 Learning Stages | Epistemological Rosetta Stone | Unified 5-Step Clinical Protocol | 50-Book Scaling Trajectory

---

## Executive Overview: The Need for a Unified Curriculum

Astrology is often approached as a fragmented collection of competing, contradictory schools. The beginner is typically confronted with irreconcilable debates:
- *Tropical seasonal zodiac vs. Sidereal stellar constellations?*
- *Whole-Sign ancient houses vs. Placidus quadrant houses?*
- *Deterministic fatalistic karma vs. Jungian psychological self-actualization?*
- *Traditional 360° longitudinal aspects vs. modern three-dimensional declinational neuro-psychiatry?*

When read one by one without a synthesized architectural map, these 12 books can produce profound cognitive overload. However, when reconstructed through the **Book Knowledge Reconstruction System (BKRS)**, these traditions reveal themselves not as contradictory dogmas, but as **complementary diagnostic dimensions of a single cosmic architecture**.

This Master Curriculum provides:
1. **A 5-Stage Progressive Learning Pathway** guiding a beginner from elementary geometry to advanced clinical mastery.
2. **The Epistemological Rosetta Stone** resolving the historical and technical debates between Eastern and Western, Classical and Modern systems.
3. **The Unified 5-Step Clinical Chart Delineation Protocol** used by elite multi-system practitioners.
4. **The 50-Book Master Roadmap** detailing the scaling trajectory for the complete library.

---

## The 12 Reconstructed Masterworks by Paradigm

| # | Masterwork | Author | Epoch | Primary Paradigm | Core Invariant Contribution |
|:---:|:---|:---|:---:|:---|:---|
| **1** | [The Anthologies](../../distillations/the-anthologies-vettius-valens/index.html) | Vettius Valens | c. 175 CE | Classical Hellenistic | Whole-Sign houses, Sect (Day/Night), Triplicity rulers, Zodiacal Releasing (*Aphesis*) |
| **2** | [Astrology for Beginners](../../distillations/astrology-for-beginners/index.html) | B.V. Raman | 1940 | Classical Vedic Parashari | Sidereal zodiac, 12 Bhavas, Shadbala, functional nature, Raja/Dhana Yogas, Vimshottari Dasha |
| **3** | [Predicting through Navamsha](../../distillations/predict-with-navamsha/index.html) | V.P. Goel | 2004 | Harmonic Divisional Jyotish | D9 microscopic soul blueprint, Pushkar Navamshas, 64th Navamsha, 22nd Drekkana |
| **4** | [Ancient Hindu Astrology](../../distillations/ancient-hindu-astrology-braha/index.html) | James T. Braha | 1986 | East-West Bridge | 9 clinical masterclasses, resolving contradictions, Upachaya growth, functional vs. natural nature |
| **5** | [Astrology at the Speed of Light](../../distillations/astrology-speed-of-light/index.html) | Kapiel Raaj | 2012 | Modern Pragmatic Jyotish | Rapid chart deconstruction, Rahu-Ketu karmic obsession axis, 27 Nakshatras, house lord shifts |
| **6** | [The Astrological Houses](../../distillations/astrological-houses-rudhyar/index.html) | Dane Rudhyar | 1972 | Humanistic Transpersonal | 28-phase cycle of consciousness, Cross of Awareness (Horizon & Meridian), 3 levels of functioning |
| **7** | [The Key to the Self](../../distillations/the-key-to-the-self-meister/index.html) | Marianne Meister | 2001 | Jungian Depth Psychology | Horoscope as psychic mandala, synchronicity, personal inner gods, Saturn as Shadow boundary |
| **8** | [Black Love Signs](../../distillations/black-love-signs/index.html) | Thelma Balfour | 1999 | Relational Psychology | Elemental relational dynamics, gender communication traps, forensic 144-pair compatibility matrix |
| **9** | [The Shamanic Astrology Handbook](../../distillations/shamanic-astrology-handbook/index.html) | Daniel Giamario | 1994/2014 | Shamanic & Evolutionary | Tropical Earth Wheel, 584-day Venus synodic cycle (Inanna underworld descent), planetary initiations |
| **10** | [Predicting Events with Astrology](../../distillations/predicting-events-with-astrology-teal/index.html) | Celeste Teal | 1999 | Predictive Western Synthesis | The Rule of Three, Secondary Progressions, Solar Arc Directions, Solar/Lunar returns, crisis timing |
| **11** | [Predictive Astrology](../../distillations/predictive-astrology-riske/index.html) | Kris Brandt Riske | 2011 | Practical Operational Timing | Outer planet transits (Jupiter to Pluto), retrograde stations and loops, 29-year Progressed Moon |
| **12** | [Signs of Mental Illness](../../distillations/signs-of-mental-illness-gibson/index.html) | Mitchell Earl Gibson, M.D. | 1998 | Psychiatric Neuro-Astrology | Declination (2°34' orb), Parallels/Contraparallels, Planetary Eclipses, Out-of-Bounds (Exdek), P/N Ratio < 0.83 |

---

## The 5-Stage Progressive Learning Curriculum

`;

curriculumData.stages.forEach(st => {
  md += `### Stage ${st.stage_number}: ${st.stage_name}\n`;
  md += `*${st.subtitle}*\n\n`;
  md += `**Canonical Texts to Master:** ${st.core_books.map(b => `\`${b}\``).join(', ')}\n\n`;
  md += `**Core Learning Objectives & Invariant Competencies:**\n`;
  st.learning_outcomes.forEach(lo => {
    md += `- ${lo}\n`;
  });
  md += `\n---\n\n`;
});

md += `## The Epistemological Rosetta Stone: Resolving Historic Contradictions\n\n`;
curriculumData.rosetta_stone.forEach(rs => {
  md += `### ${rs.debate}\n`;
  md += `- **Tropical Paradigm:** ${rs.tropical_perspective}\n`;
  md += `- **Sidereal Paradigm:** ${rs.sidereal_perspective}\n`;
  md += `- **Synthetic Resolution:** **${rs.synthetic_resolution}**\n\n`;
});

md += `## The Unified 5-Step Clinical Chart Delineation Protocol\n\n`;
curriculumData.unified_protocol.forEach(up => {
  md += `### Step ${up.step}: ${up.title}\n`;
  md += `${up.action}\n\n`;
});

md += `## The 50-Book Scaling Trajectory\n\n`;
curriculumData.fifty_book_roadmap.forEach(cr => {
  md += `### ${cr.cohort} (${cr.count} Volumes)\n`;
  md += `${cr.books}\n\n`;
});

fs.writeFileSync(path.join(crossBookDir, 'astrology-master-curriculum.md'), md, 'utf8');
console.log('Successfully wrote astrology-master-curriculum.md (' + md.length + ' chars)');

// 3. Generate astrology-master-curriculum.html
const html = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Master Astrological Curriculum & Rosetta Stone | BKRS Synthesis</title>
  <link rel="stylesheet" href="../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }

    .curriculum-hero {
      background: linear-gradient(180deg, rgba(153, 27, 27, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
      padding: 40px 0 24px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      margin-bottom: 32px;
    }

    [data-theme="dark"] .curriculum-hero {
      background: linear-gradient(180deg, rgba(239, 68, 68, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
      border-bottom-color: rgba(255, 255, 255, 0.08);
    }

    .stage-card {
      background: var(--bg-card, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
      border-left: 5px solid #991b1b;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    [data-theme="dark"] .stage-card {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.1);
      border-left-color: #ef4444;
    }

    .stage-badge {
      display: inline-block;
      background: #991b1b;
      color: #ffffff;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .books-roster-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
      margin: 20px 0;
    }

    .roster-card {
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    [data-theme="dark"] .roster-card {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(255, 255, 255, 0.08);
    }

    .roster-title {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 4px;
      color: #991b1b;
    }

    [data-theme="dark"] .roster-title {
      color: #ef4444;
    }

    .roster-meta {
      font-size: 0.8rem;
      color: var(--text-muted, #666);
      margin-bottom: 8px;
    }

    .roster-contrib {
      font-size: 0.88rem;
      line-height: 1.5;
      margin-bottom: 12px;
      flex-grow: 1;
    }

    .roster-link {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #991b1b;
      text-decoration: none;
    }

    [data-theme="dark"] .roster-link {
      color: #ef4444;
    }

    .rosetta-box {
      background: rgba(0, 0, 0, 0.03);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }

    [data-theme="dark"] .rosetta-box {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.08);
    }

    .rosetta-title {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 700;
      color: #991b1b;
      margin-bottom: 12px;
    }

    [data-theme="dark"] .rosetta-title {
      color: #ef4444;
    }

    .rosetta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 12px;
    }

    @media (max-width: 768px) {
      .rosetta-grid {
        grid-template-columns: 1fr;
      }
    }

    .rosetta-col {
      background: var(--bg-card, #ffffff);
      padding: 12px 16px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.06);
    }

    [data-theme="dark"] .rosetta-col {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(255, 255, 255, 0.06);
    }

    .rosetta-resolution {
      background: rgba(153, 27, 27, 0.08);
      border-left: 3px solid #991b1b;
      padding: 12px 16px;
      border-radius: 0 4px 4px 0;
      font-size: 0.92rem;
      font-weight: 500;
    }

    [data-theme="dark"] .rosetta-resolution {
      background: rgba(239, 68, 68, 0.1);
      border-left-color: #ef4444;
    }

    .protocol-step {
      display: flex;
      gap: 16px;
      margin-bottom: 20px;
      align-items: flex-start;
    }

    .step-number {
      background: #991b1b;
      color: #ffffff;
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 700;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .step-body h4 {
      margin: 0 0 6px 0;
      font-size: 1.1rem;
      font-family: var(--font-serif);
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../index.html" class="back-link">← Master Index</a>
          <span class="badge" style="background:#991b1b; color:#fff;">Grand Unified Synthesis</span>
        </div>
        <h1 class="book-title">The Master Astrological Curriculum</h1>
        <p class="book-subtitle">A Systematic 5-Stage Path from Beginner to Diagnostic Master Across 12 Foundational Traditions</p>

        <div class="reader-metadata-bar">
          <span><strong>Corpus:</strong> 12 Reconstructed Codices</span>
          <span><strong>Coverage:</strong> Hellenistic · Vedic · Humanistic · Predictive · Shamanic · Psychiatric</span>
          <span><strong>Objective:</strong> Universal Operational Fluency & Diagnostic Synthesis</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="syllabus">5-Stage Syllabus</button>
          <button class="tab-button" data-tab="rosetta">Epistemological Rosetta Stone</button>
          <button class="tab-button" data-tab="protocol">5-Step Clinical Protocol</button>
          <button class="tab-button" data-tab="roster">12-Book Corpus</button>
          <button class="tab-button" data-tab="roadmap">50-Book Trajectory</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- 5-STAGE SYLLABUS -->
      <section id="view-syllabus" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Progressive Mastery Architecture</h2>
            <p>Astrology is not a fragmented collection of conflicting dogmas; it is a multi-layered diagnostic science. When arranged in proper pedagogical sequence, each tradition provides the foundational geometry necessary to understand the next.</p>
          </div>

          ${curriculumData.stages.map(st => `
            <div class="stage-card">
              <span class="stage-badge">Stage ${st.stage_number}</span>
              <h3 style="margin-top:4px; font-family:var(--font-serif); font-size:1.4rem;">${st.stage_name}</h3>
              <p style="font-style:italic; color:var(--text-muted); margin-bottom:14px;">${st.subtitle}</p>
              
              <p><strong>Primary Codices:</strong> ${st.core_books.map(cb => {
                const book = curriculumData.books_roster.find(b => b.id === cb);
                return `<a href="../distillations/${book.slug}/index.html" style="font-weight:600; text-decoration:underline;">${book.title} (${book.author})</a>`;
              }).join(' &bull; ')}</p>

              <h4 style="margin:14px 0 8px 0; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em;">Core Competencies & Learning Outcomes:</h4>
              <ul>
                ${st.learning_outcomes.map(lo => `<li>${lo}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </article>
      </section>

      <!-- ROSETTA STONE -->
      <section id="view-rosetta" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Epistemological Rosetta Stone</h2>
            <p>Resolving the primary historical and theoretical debates between Eastern and Western, Traditional and Modern astrological systems.</p>
          </div>

          ${curriculumData.rosetta_stone.map(rs => `
            <div class="rosetta-box">
              <div class="rosetta-title">${rs.debate}</div>
              <div class="rosetta-grid">
                <div class="rosetta-col">
                  <strong>Tropical / Psychological Perspective:</strong>
                  <p style="font-size:0.88rem; margin-top:4px;">${rs.tropical_perspective}</p>
                </div>
                <div class="rosetta-col">
                  <strong>Sidereal / Empirical Perspective:</strong>
                  <p style="font-size:0.88rem; margin-top:4px;">${rs.sidereal_perspective}</p>
                </div>
              </div>
              <div class="rosetta-resolution">
                <strong>Synthetic Master Resolution:</strong> ${rs.synthetic_resolution}
              </div>
            </div>
          `).join('')}
        </article>
      </section>

      <!-- 5-STEP PROTOCOL -->
      <section id="view-protocol" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Unified 5-Step Clinical Chart Delineation Protocol</h2>
            <p>How an elite multi-system practitioner synthesizes Hellenistic, Vedic, Psychological, and Psychiatric metrics when analyzing a live natal chart.</p>
          </div>

          <div style="margin-top:28px;">
            ${curriculumData.unified_protocol.map(up => `
              <div class="protocol-step">
                <div class="step-number">${up.step}</div>
                <div class="step-body">
                  <h4>${up.title}</h4>
                  <p style="margin:0; font-size:0.94rem; line-height:1.6;">${up.action}</p>
                </div>
              </div>
              <hr style="border:none; border-top:1px solid rgba(0,0,0,0.08); margin:18px 0;">
            `).join('')}
          </div>
        </article>
      </section>

      <!-- 12-BOOK ROSTER -->
      <section id="view-roster" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The 12 Reconstructed Masterworks</h2>
            <p>Direct access to each fully reconstructed BKRS v2.0 Master Codex.</p>
          </div>

          <div class="books-roster-grid">
            ${curriculumData.books_roster.map(b => `
              <div class="roster-card">
                <div>
                  <div class="roster-title">${b.title}</div>
                  <div class="roster-meta">${b.author} (${b.year}) &bull; <em>${b.paradigm}</em></div>
                  <p class="roster-contrib">${b.key_contributions}</p>
                </div>
                <div>
                  <a href="../distillations/${b.slug}/index.html" class="roster-link">Enter Master Reader &rarr;</a>
                </div>
              </div>
            `).join('')}
          </div>
        </article>
      </section>

      <!-- 50-BOOK ROADMAP -->
      <section id="view-roadmap" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The 50-Book Master Scaling Trajectory</h2>
            <p>Strategic blueprint to expand our 12-volume foundation into the world's most exhaustive 50-volume astrological curriculum across 5 thematic cohorts.</p>
          </div>

          ${curriculumData.fifty_book_roadmap.map(rd => `
            <div class="stage-card" style="border-left-color: #475569;">
              <span class="stage-badge" style="background:#475569;">${rd.cohort}</span>
              <p style="margin-top:12px; font-size:0.95rem; line-height:1.6;">${rd.books}</p>
            </div>
          `).join('')}
        </article>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Synthesis: Grand Unified Astrological Master Curriculum across 12 Masterworks.</p>
      </div>
    </footer>
  </div>

  <script src="../assets/js/reader-controls.js"></script>
  <script>
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tabId = 'view-' + btn.getAttribute('data-tab');
        const content = document.getElementById(tabId);
        if (content) content.classList.add('active');
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(crossBookDir, 'astrology-master-curriculum.html'), html, 'utf8');
console.log('Successfully wrote astrology-master-curriculum.html (' + html.length + ' chars)');
