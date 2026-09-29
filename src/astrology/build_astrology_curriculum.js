/**
 * Builder for Astrological Grand Unified Curriculum & Epistemological Rosetta Stone
 * Architecture: Cross-Book Synthesis Suite for all 24 Astrology Masterworks
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
  subtitle: "A Systematic 5-Stage Path from Beginner to Diagnostic Master Across 30 Canonical Traditions",
  total_books: 30,
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
    },
    {
      id: "tarnas",
      title: "Prometheus the Awakener",
      author: "Richard Tarnas",
      year: "1995",
      paradigm: "Archetypal Cultural Revolution",
      slug: "prometheus-the-awakener-tarnas",
      key_contributions: "Re-mythologizing Uranus as Prometheus (the archetypal Fire-Bringer, rebel against cosmic tyranny), epochal cultural cycles, revolutionary genius vs disruptive hubris."
    },
    {
      id: "greene",
      title: "The Horoscope in Manifestation",
      author: "Liz Greene",
      year: "1997",
      paradigm: "Psychological Somatization & Fate",
      slug: "the-horoscope-in-manifestation-greene",
      key_contributions: "The somatization bridge (unconscious complexes embodying as physical pathology), compulsive fate patterns, psychological necessity vs fatalism, shadow integration."
    },
    {
      id: "pelletier",
      title: "Planets in Aspect",
      author: "Robert Pelletier",
      year: "1974",
      paradigm: "Dynamic Aspectarian & Planetary Geometry",
      slug: "planets-in-aspect-pelletier",
      key_contributions: "Exhaustive aspect dynamics (Conjunctions, Sextiles, Squares, Trines, Quincunxes, Semi-squares, Sesquiquadrates), geometric configurations (T-squares, Grand Crosses, Yods)."
    },
    {
      id: "marks_art",
      title: "The Art of Chart Interpretation",
      author: "Tracy Marks",
      year: "1986",
      paradigm: "Analytical Gestalt Astrology",
      slug: "the-art-of-chart-interpretation-marks",
      key_contributions: "Gestalt synthesis (forest vs trees), planetary weighting and emphasis points, dominant elements and modes, aspect configurations as psychic engines, step-by-step chart assembly."
    },
    {
      id: "marks_12th",
      title: "Your Secret Self: Illuminating the Twelfth House",
      author: "Tracy Marks",
      year: "1989",
      paradigm: "Depth Shadow & Transpersonal Healing",
      slug: "your-secret-self-marks",
      key_contributions: "The Twelfth House as the storehouse of repressed unconscious wisdom, self-sabotaging shadow complexes, transpersonal longing, and practical dreamwork protocols."
    },
    {
      id: "taneja",
      title: "Accurate Predictive Methodology",
      author: "Umang Taneja",
      year: "1999",
      paradigm: "Forensic Nadi / KP Astrology",
      slug: "accurate-predictive-methodology-taneja",
      key_contributions: "Nirayana Bhava Chalit, Three-Tier coordinates (Sub-Lord > Nakshatra > Planet), the Law of the 12th Relative House, exact multi-house formulas, second-precision BTR via Ruling Planets."
    },
    {
      id: "forrest_neptune",
      title: "The Book of Neptune",
      author: "Steven Forrest",
      year: "2012",
      paradigm: "Evolutionary & Transpersonal",
      slug: "the-book-of-neptune-forrest",
      key_contributions: "The Spiritual Solvent, Evolutionary Mysticism, Creative Ecstasy vs. Addiction/Disillusionment, Neptune across Signs and Houses, The 14-Step Kundalini/Transpersonal Process."
    },
    {
      id: "forrest_skymates2",
      title: "Skymates II: The Composite Chart",
      author: "Steven Forrest & Jodie Forrest",
      year: "2005",
      paradigm: "Relational Evolutionary & Midpoint Alchemy",
      slug: "skymates-2-composite-forrest",
      key_contributions: "The Third Entity meta-personality derived via mathematical midpoints, Three-Tier Synastry Pyramid, Composite Lunar Nodes (karmic contract vs. evolutionary frontier), Relationship Houses."
    },
    {
      id: "seymour",
      title: "The Scientific Basis of Astrology",
      author: "Dr. Percy Seymour",
      year: "1992",
      paradigm: "Magnetohydrodynamic & Biophysical",
      slug: "the-scientific-basis-of-astrology-seymour",
      key_contributions: "5-Step Physical Mechanism (Planetary Gravitational Tidal Resonance on Solar Dynamo -> Solar Wind/IMF -> Geomagnetic ELF Micropulsations 0.1-10 Hz -> Fetal Magnetoreception & Labor Trigger), Nelson RCA alignments, Gauquelin diurnal effect."
    },
    {
      id: "bell",
      title: "Midlife Is Not a Crisis",
      author: "Virginia Bell",
      year: "2017",
      paradigm: "Chronological Developmental Evolutionary",
      slug: "midlife-is-not-a-crisis-bell",
      key_contributions: "Universal planetary developmental milestones: First Saturn Return (28-30), Midlife Gauntlet (Pluto square 36-38, Neptune square 40-42, Uranus opposition 40-44, Saturn opposition 43-45), Chiron Return (49-51, Youth of Old Age), Second Saturn Return (58-60, The New Elder), Uranus Return (84, The Great Homecoming)."
    },
    {
      id: "adams",
      title: "Astrology: Your Place Among the Stars",
      author: "Evangeline Adams",
      year: "1930",
      paradigm: "Synthetic Character Delineation & Legal Science",
      slug: "your-place-among-the-stars-adams",
      key_contributions: "The Trinity of Being (Sun = Conscious Will, Moon = Subconscious Soul, Ascendant = Somatic Vessel), Mercury neural conduit, 1914 NYC legal trial precedent, Solar aspects to Uranus/Saturn/Jupiter, Character is Destiny."
    },
    {
      id: "crowley",
      title: "The Complete Astrological Writings (Liber 536)",
      author: "Aleister Crowley",
      year: "1918 / 1974",
      paradigm: "Thelemic Hermetic & Qabalistic",
      slug: "complete-astrological-writings-crowley",
      key_contributions: "Liber 536 (Maslath = 536), Astrology as weapon of the True Will (Thelema), Triple Trinity of Planets on Tree of Life, 36 Decanates mapped to Tarot Minor Arcana, Revaluation of Mars/Saturn, expose 'How Horoscopes Are Faked'."
    },
    {
      id: "march_mcevers",
      title: "The Only Way to Learn Astrology, Vol. 2",
      author: "Marion D. March & Joan McEvers",
      year: "1981",
      paradigm: "Rigorous Technical Mathematics & Predictive Interpretation",
      slug: "only-way-to-learn-astrology-vol2-march",
      key_contributions: "Manual spherical trigonometry (RAMC, Sidereal Time, Interpolation), 7 Jones Chart Patterns, Dispositor Trees & Mutual Reception Loops, Area Emphasis & Hemispheric Balance, Part of Fortune & Arabian Parts, Step-by-step chart interpretation protocol."
    },
    {
      id: "forrest_skymates1",
      title: "Skymates: Love, Sex, and Evolutionary Astrology",
      author: "Steven Forrest & Jodie Forrest",
      year: "1989 / 2002",
      paradigm: "Evolutionary Synastry & Relational Reincarnation",
      slug: "skymates-love-sex-forrest",
      key_contributions: "Relational Synastry, Evolutionary Natal Premise, House Overlays (planets in partner's houses), Inter-chart Aspects, Synastric Lunar Nodes (karmic debt vs spiritual destiny), 5 Golden Rules of Synastry, Synastric Timing & Transits."
    },
    {
      id: "karen",
      title: "Astrology for Enlightenment",
      author: "Michelle Karen",
      year: "2008",
      paradigm: "Shamanic Vibrational & Andean Cosmovision",
      slug: "astrology-for-enlightenment-karen",
      key_contributions: "Planetary Rulers of Days and Hours, High/Mediating/Low Octaves of the Twelve Signs, Andean Shamanic Philosophy of Ayni (Sacred Reciprocity), Three Worlds (Uku/Kay/Hanaq Pacha), Polarity Axis Transmutation, Shamanic Materia Medica (minerals, oils, teas, rites)."
    },
    {
      id: "gallagher",
      title: "Astrology for the Light Side of the Brain",
      author: "Kim Rogers-Gallagher",
      year: "1995",
      paradigm: "Right-Brain Theatrical & Archetypal Synthesis",
      slug: "astrology-light-side-brain-gallagher",
      key_contributions: "Theatrical Chart Metaphor (Planets = Actors, Signs = Costumes, Houses = Stages, Aspects = Scripts), Elemental Mood Groups, Chiron & The Four Major Goddess Asteroids (Ceres, Pallas Athena, Vesta, Juno), Planetary Stations & Retrograde Demystification, Synthesis Protocol."
    },
    {
      id: "casey",
      title: "Making the Gods Work for You",
      author: "Caroline W. Casey",
      year: "1998",
      paradigm: "Visionary Activist & Animistic Hermeticism",
      slug: "making-the-gods-work-for-you-casey",
      key_contributions: "Astrological Grammar & Living Archetypal Deities, 'Working for the God vs Being Worked by the God', Saturn as the Sovereign Inner Author, Pluto as Underworld Metamorphosis & Extremophile resilience, Neptune Altars & Reverie, Uranus as Sacred Clown (Heyokha), Jupiterian Retroactive Redemption."
    },
    {
      id: "freed",
      title: "Use Your Planets Wisely",
      author: "Dr. Jennifer Freed",
      year: "2020",
      paradigm: "Depth Psychological & Somatic Family Systems",
      slug: "use-your-planets-wisely-freed",
      key_contributions: "Three Evolutionary Octaves (Primitive, Adaptive, Evolving) for all 11 placements, Somatic Elemental Metaphors (Sun = Taproot, Moon = Tides, Ascendant = Window, Mercury = Wind, Venus = Garden, Mars = Bonfire, Jupiter = Lake, Saturn = Mountain), Family-of-Origin Roles, Non-violent Astrological Communication."
    }
  ],
  stages: [
    {
      stage_number: 1,
      stage_name: "Primary Geometry, Classical Foundations & The Trinity of Being",
      subtitle: "The Ancient Roots: Hellenistic Whole-Signs, Vedic Parashari Principles, and Synthetic Character Foundations",
      core_books: ["valens", "raman", "adams"],
      learning_outcomes: [
        "Master the 12 signs, 12 houses, and 7 traditional visible planets in their original dignity hierarchies.",
        "Internalize the difference between Whole-Sign houses (Valens) and Bhava Chalit quadrant calculations.",
        "Master the Hellenistic Doctrine of Sect (Day charts vs. Night charts) to identify which malefic (Mars or Saturn) causes acute disruption and which benefic (Jupiter or Venus) provides primary salvation.",
        "Understand the Parashari foundation of planetary strengths (Shadbala), natural vs. functional benefics, and the mechanics of foundational Raja and Dhana Yogas.",
        "Synthesize the foundational Trinity of Being (Evangeline Adams): Sun as conscious will, Moon as subconscious habit matrix, and Ascendant as somatic vehicle, utilizing Adams's legal-empirical character delineation.",
        "Compare the ancient Hellenistic time-lord system (Zodiacal Releasing from the Lots of Spirit and Fortune) with the 120-year Vedic Vimshottari Dasha system."
      ]
    },
    {
      stage_number: 2,
      stage_name: "Harmonic Micro-Lenses, Aspectarian Dynamics, Relational Alchemy & Decanates",
      subtitle: "Karmic Axis, Geometric Aspects, Gestalt Chart Assembly, Composite Third Entity, and Hermetic Tarotic Decans",
      core_books: ["goel", "braha", "raaj", "balfour", "pelletier", "marks_art", "forrest_skymates2", "crowley"],
      learning_outcomes: [
        "Deconstruct the birth chart beyond the gross physical D1 Rashi using the microscopic D9 Navamsha chart (V.P. Goel).",
        "Identify vulnerable points: 64th Navamsha (4th sign from Moon's Navamsha) and 22nd Drekkana (8th house cusp in D3) for health and timing vulnerabilities.",
        "Master the Rahu-Ketu nodal axis as the soul's primary karmic obsession and past-life mastery engine (Kapiel Raaj).",
        "Resolve contradictory planetary indications using James Braha's 9 clinical masterclasses and Upachaya house growth rules.",
        "Decode dynamic aspect configurations (T-squares, Grand Crosses, Yods, Grand Trines) and minor frictional aspects (semi-squares, sesquiquadrates, quincunxes) as internal psychic engines (Robert Pelletier).",
        "Synthesize complex charts through Gestalt analysis: weigh planetary dominance, dominant elements/modes, and focal aspect centers to discern the unified core self before analyzing details (Tracy Marks).",
        "Apply Thelma Balfour's 144-pair elemental matrix to diagnose interpersonal communication pitfalls, ego clashes, and sexual polarities.",
        "Analyze relationship geometry using Steven & Jodie Forrest's Composite Chart: derive the 'Third Entity' via mathematical midpoints, map the Three-Tier Synastry Pyramid, and decode the Composite Lunar Nodes.",
        "Integrate Aleister Crowley's Hermetic 36-Decanate grid and Tarot attributions into aspect and sign analysis, reclaiming Mars and Saturn as essential engines of the True Will."
      ]
    },
    {
      stage_number: 3,
      stage_name: "The Psychological, Archetypal, Evolutionary & Developmental Life-Cycle Paradigm",
      subtitle: "Humanistic Consciousness, Promethean Awakenings, Somatization, Neptune's Mystical Solvent, and Universal Midlife Transitions",
      core_books: ["rudhyar", "meister", "tarnas", "greene", "marks_12th", "forrest_neptune", "bell"],
      learning_outcomes: [
        "Abandon external fatalism and reframe the horoscope as a dynamic 28-phase cycle of human experience (Dane Rudhyar).",
        "Delineate the Cross of Awareness: Horizon (Ascendant-Descendant = Self vs. Other) and Meridian (MC-IC = Public Mission vs. Soul Roots).",
        "Analyze any chart across Rudhyar's 3 evolutionary levels: Biological, Socio-Cultural, and Individual-Transpersonal.",
        "Reconceptualize planets as living archetypal sub-personalities inhabiting the personal and collective unconscious (Marianne Meister).",
        "Recognize Uranus as Prometheus: the archetypal rebel against cosmic tyranny, bearer of sudden cognitive epiphanies, and catalyst of historical and personal revolutions (Richard Tarnas).",
        "Understand the psychodynamics of somatization: how repressed emotional conflicts and unacknowledged complexes bypass the ego to embody as physical illness and compulsive fate (Liz Greene).",
        "Illuminate the Twelfth House: uncover the hidden wisdom, self-sabotaging complexes, and unacknowledged spiritual yearnings buried in the unconscious, using practical dreamwork and Gestalt integration (Tracy Marks).",
        "Delineate Neptune as the Spiritual Solvent and Evolutionary Mystic (Steven Forrest): navigate the high-wire act between divine ecstasy/artistic creation and addiction/ego dissolution.",
        "Master the chronological life-cycle developmental passages (Virginia Bell): navigate the First Saturn Return (28-30), the 4-part Midlife Gauntlet (36-45), Chiron Return (49-51), Second Saturn Return (58-60), and Uranus Return (84)."
      ]
    },
    {
      stage_number: 4,
      stage_name: "Dynamic Multi-Layered Forecasting & Forensic Predictive Coordinates",
      subtitle: "Progressions, Transits, Synodic Cycles, and Nadi / KP Cuspal Sub-Lord Mathematics",
      core_books: ["teal", "riske", "giamario", "taneja"],
      learning_outcomes: [
        "Enforce the rigorous 'Rule of Three' (Celeste Teal): never predict an external event without verification across three independent astrological planes.",
        "Distinguish internal psychological maturation (Secondary Progressions: 1 day = 1 year) from external socio-physical milestones (Solar Arc Directions: 1° = 1 year).",
        "Track the 29-year Progressed Lunar cycle through the houses as an emotional barometer of life chapters.",
        "Map outer-planet transits (Jupiter through Pluto) and inner-planet retrograde loops (entry, station retrograde, direct station) as evolutionary initiations (Kris Brandt Riske).",
        "Trace the 584-day synodic cycle of Venus and the mythic descent of Inanna through the 7 underworld gates (Daniel Giamario).",
        "Master the Three-Tier Nadi / KP Coordinate Matrix (Sub-Lord > Nakshatra Lord > Planet) and the Law of the 12th Relative House (penultimate negation) across litigation, marriage, property, career, and progeny (Umang Taneja).",
        "Execute precision Birth Time Rectification (BTR) down to the second using the Four Ruling Planets (RP) synchronized with Ascendant Cuspal Sub-Lords."
      ]
    },
    {
      stage_number: 5,
      stage_name: "Empirical Diagnostics, Neuro-Psychiatry & Biophysical Mechanisms",
      subtitle: "Declination, Eclipses, Clinical Biomarkers, and Solar Magnetohydrodynamic Field Resonance",
      core_books: ["gibson", "seymour"],
      learning_outcomes: [
        "Break free from the limitation of longitudinal-only astrology by incorporating the vertical dimension: Celestial Declination.",
        "Calculate Parallels (conjunction equivalent) and Contraparallels (opposition equivalent) within the empirical 2°34' orb.",
        "Audit charts for Planetary Eclipses (simultaneous longitudinal conjunction AND declinational parallel) as high-voltage energetic focal points.",
        "Identify Out-of-Bounds planets (Exdek > 23°30') operating outside normal neuro-regulatory boundaries.",
        "Compute the quantitative General Planetary Index (GPI) and Positive-to-Negative Ratio (P/N Ratio): recognize values < 0.83 as the clinical threshold for psychiatric vulnerability (Depression, Panic, Schizophrenia, ADHD, Addiction).",
        "Ground astrological efficacy in Dr. Percy Seymour's 5-step Magneto-Tidal Resonance mechanism: gravitational tidal torques modulating the solar convective dynamo, solar wind IMF surges, geomagnetic ring current micro-pulsations (ELF 0.1-10 Hz), and fetal neurobiological imprinting via biogenic magnetite."
      ]
    }
  ],
  rosetta_stone: [
    {
      debate: "Tropical vs. Sidereal Zodiac",
      tropical_perspective: "Anchored to the Earth's seasonal solstices and equinoxes. Represents the psychological, somatic, and earthly seasonal unfolding of consciousness (Rudhyar, Meister, Giamario, Teal, Riske, Tarnas, Greene, Marks, Forrest, Bell, Adams).",
      sidereal_perspective: "Anchored to the backdrop of the fixed stars (Chitra / Spica datum). Represents the cosmic, karmic, and galactic soul blueprint; indispensable for Nakshatras, harmonic divisionals (D9), Vimshottari dasha timing, and Nadi Cuspal Sub-Lords (Raman, Goel, Raaj, Braha, Taneja).",
      synthetic_resolution: "Complementary, not mutually exclusive. Use the Tropical framework for psychological individuation, emotional maturation, and Western predictive progressions; use the Sidereal framework for Vedic dasha timing, nakshatra archetypes, harmonic divisionals, and Nadi sub-lord coordinates."
    },
    {
      debate: "Whole-Sign Houses vs. Quadrant Systems (Placidus/Koch)",
      tropical_perspective: "Placidus/Koch divides the quadrant between the horizon and meridian by time/space, reflecting acute psychological stress cusps, developmental focal points, and exact degree boundaries (Rudhyar, Teal, Pelletier).",
      sidereal_perspective: "Whole-Sign Houses (ancient Hellenistic and Vedic) preserves the clean relationship between sign rulership and topos. However, Nadi/KP astrology rigorously adopts Placidus cusps on the Sidereal Zodiac (Nirayana Bhava Chalit) to derive minute Cuspal Sub-Lords (Valens, Raman, Taneja).",
      synthetic_resolution: "Use Whole-Sign houses for foundational topical rulership and Hellenistic time-lords (Valens & Raman); use Nirayana Bhava Chalit Placidus cusps for high-precision sub-lord event timing and micro-cusp analysis (Taneja & Teal)."
    },
    {
      debate: "Deterministic Fate vs. Psychological Individuation",
      tropical_perspective: "A fatalistic reading produces helplessness. The chart reveals unintegrated unconscious archetypes that the individual projects outward into 'fate' or somatizes into physical pathology (Jung, Meister, Rudhyar, Greene, Marks, Forrest).",
      sidereal_perspective: "Karma is real and inexorable; specific planetary configurations represent ripe Prarabdha Karma that must bear fruit in the physical realm during their assigned dasha and sub-lord triggers (Raman, Goel, Taneja).",
      synthetic_resolution: "Karma provides the unalterable structural raw material (the biological organism, familial matrix, traumatic stressors, sub-lord gates); Psychological Individuation determines the level of consciousness with which that karma is metabolized, integrated, and transmuted."
    },
    {
      debate: "Longitudinal Geometry vs. Celestial Declination",
      tropical_perspective: "Traditional astrology measures angles along the 360° ecliptic, revealing the narrative dialogue and mental/relational tensions between drives (Pelletier, Marks, Adams, Crowley).",
      sidereal_perspective: "Dr. Gibson's clinical research proves that longitudinal aspects alone cannot differentiate psychotic patients from healthy controls; declination represents the physiological, neurobiological grounding of cosmic force.",
      synthetic_resolution: "Longitude describes the subjective narrative, psychological dialogue, and character traits; Declination (parallels, contraparallels, eclipses, and P/N ratio) measures the objective energetic voltage and biological threshold of the nervous system."
    },
    {
      debate: "Aspectarian Friction vs. Archetypal Somatization",
      tropical_perspective: "Robert Pelletier maps hard geometric aspects (squares, oppositions, quincunxes) as behavioral stress zones that demand conscious resolution.",
      sidereal_perspective: "Liz Greene demonstrates that when these aspect frictions are repressed or unexpressed by the ego, they manifest somatically as bodily diseases or external catastrophic crises.",
      synthetic_resolution: "Aspectarian tension (Pelletier) defines the latent psychic conflict; Greene's somatization model shows what happens when the tension remains unconscious; Marks' 12th House dreamwork and gestalt synthesis provide the practical path to conscious therapeutic integration."
    },
    {
      debate: "Individual Synastry vs. The Composite Chart Midpoint Field",
      tropical_perspective: "Steven & Jodie Forrest demonstrate that bi-wheel cross-aspects (Synastry) describe only how two separate egos impact each other, whereas the Composite Chart (calculated via mathematical midpoints) reveals the 'Third Entity'—the emergent, living relationship vessel with its own evolutionary purpose and nodal destiny.",
      sidereal_perspective: "Traditional synastry (Ashtakoota Milan and elemental matrices via Balfour) provides essential baseline temperament compatibility, but fails to capture the emergent gestalt of long-term committed unions.",
      synthetic_resolution: "Use the Three-Tier Synastry Pyramid (Forrest): Tier 1 audits individual relationship capacity; Tier 2 maps cross-chart aspects (Synastry) for interpersonal chemistry; Tier 3 delineates the Composite Chart for the shared purpose and evolutionary contract of the union."
    },
    {
      debate: "Pure Archetypal Synchronicity vs. Biophysical Field Resonance",
      tropical_perspective: "Jungian and archetypal astrologers view planetary positions as acausal synchronistic symbols mirroring the collective unconscious (Meister, Tarnas, Greene).",
      sidereal_perspective: "Dr. Percy Seymour proves an empirical physical mechanism: planetary gravitational tidal resonance alters the solar dynamo, modulating solar wind shockwaves and inducing geomagnetic ELF micro-pulsations (0.1–10 Hz) that entrain fetal brain networks via biogenic magnetite.",
      synthetic_resolution: "Cosmic ecology: Meaning and Mechanism are complementary. Astrology operates acausally as a symbolic language of soul, while simultaneously possessing an objective biophysical transmission substrate through solar-geomagnetic field entrainment."
    },
    {
      debate: "Midlife as Biological Decline vs. Sacred Chronological Initiation",
      tropical_perspective: "Conventional consumer culture treats midlife as a crisis of aging and cosmetic panic.",
      sidereal_perspective: "Virginia Bell proves that midlife is an orchestrated 4-part cosmological initiation (Pluto Square, Neptune Square, Uranus Opposition, Saturn Opposition) designed to destroy borrowed personas and birth authentic eldership.",
      synthetic_resolution: "Midlife breakdowns are evolutionary breakthroughs. Refuse puerile rebellion and panic; practice psychic composting and embrace the Chiron transmutation from wounded victim to wise elder."
    }
  ],
  unified_protocol: [
    {
      step: 1,
      title: "Constitutional, Sect & Biophysical Grounding",
      action: "Determine Sect (Day vs. Night chart via Sun position) to identify the functional malefic (Mars vs. Saturn) and leading benefic (Jupiter vs. Venus). Audit the Ascendant and physical vitality, referencing Dr. Percy Seymour's geomagnetic entrainment baselines and Evangeline Adams's Trinity of Being (Sun = Will, Moon = Subconscious Soul, Ascendant = Somatic Vessel)."
    },
    {
      step: 2,
      title: "Gestalt Weighting & The Cross of Awareness",
      action: "Examine the Sun, Moon, and the Horizon/Meridian axes (Cross of Awareness). Weigh planetary distribution, dominant elements/modes, and focal aspect configurations (T-squares, Yods, Stelliums) using Tracy Marks' and Robert Pelletier's gestalt techniques to identify the central core engine of the psyche."
    },
    {
      step: 3,
      title: "Depth Shadow, Neptune Solvent & Archetypal Audit",
      action: "Analyze the 12th House (Tracy Marks), Saturn (Liz Greene / Marianne Meister), and outer-planet archetype awakenings (Promethean Uranus via Tarnas and Neptune Spiritual Solvent via Steven Forrest). Identify whether unresolved psychic tensions are at risk of somatic expression, addiction, or compulsive self-sabotage."
    },
    {
      step: 4,
      title: "The High-Voltage Declinational & Harmonic Micro-Audit",
      action: "Calculate all planetary declinations for Parallels/Contraparallels within 2°34' and compute the P/N Ratio (<0.83 indicates psychiatric/vitality vulnerability). Cross-check the Rahu-Ketu nodal axis, the D9 Navamsha chart, the 64th Navamsha, and 22nd Drekkana for hidden somatic and karmic stress points."
    },
    {
      step: 5,
      title: "Relational Diagnostics & The Composite Third Entity",
      action: "If consulting on partnership, execute the Three-Tier Synastry Pyramid (Steven & Jodie Forrest): audit individual 7th house and Venus/Mars patterns, map inter-chart cross-aspects, and calculate the Composite Chart to reveal the shared evolutionary destiny and nodal contract of the union."
    },
    {
      step: 6,
      title: "Chronological Life-Cycle Navigation & Multi-Layered Forecasting",
      action: "Locate the client along Virginia Bell's developmental timeline (Saturn Return, Midlife Gauntlet, Chiron Return, or Eldership). Cross-verify using Vimshottari Dasa / Zodiacal Releasing macro-seasons, Umang Taneja's Nadi Cuspal Sub-Lord coordinates, and Celeste Teal's Rule of Three (Secondary Progressions, Solar Arcs, and transits). Only confirm an event when at least three independent planes converge within exact one-degree orbs."
    }
  ],
  fifty_book_roadmap: [
    { cohort: "Cohort 1, 2 & 3: Completed Production Masters (30 Master Codices Live)", count: 30, books: "Valens, Raman, Goel, Braha, Raaj, Rudhyar, Meister, Balfour, Giamario, Teal, Riske, Gibson, Tarnas, Greene, Pelletier, Marks (Art), Marks (12th), Taneja, Forrest (Neptune), Forrest (Skymates II), Seymour, Bell, Adams, Crowley, March & McEvers, Forrest (Skymates I), Karen, Rogers-Gallagher, Casey, Freed." },
    { cohort: "Cohort 4: Classical Hellenistic & Arabic/Medieval Texts", count: 8, books: "Ptolemy (Tetrabiblos), Dorotheus of Sidon (Carmen Astrologicum), Abu Ma'shar (Great Introduction), Al-Biruni, Guido Bonatti (Liber Astronomiae), William Lilly (Christian Astrology), Morin de Villefranche, Firmicus Maternus (Mathesis)." },
    { cohort: "Cohort 4: Foundational Classical & Modern Vedic Classics", count: 8, books: "Brihat Parashara Hora Shastra, Jaimini Upadesha Sutras, Saravali, Phaladeepika, Uttara Kalamrita, K.N. Rao (Timing Events with Dashas & Transits), Sanjay Rath (Crux of Vedic Astrology), David Frawley (Ayurvedic Astrology)." },
    { cohort: "Cohort 5: Modern Psychological, Evolutionary & Uranian Astrological Masters", count: 8, books: "Liz Greene (Saturn: A New Look at an Old Devil), Liz Greene (The Astrology of Fate), Howard Sasportas (The Twelve Houses), Stephen Arroyo (Astrology, Psychology, and the Four Elements), Robert Hand (Planets in Transit), Jeffrey Wolf Green (Pluto: Evolutionary Journey of the Soul), Reinhold Ebertin (Combination of Stellar Influences), Demetra George (Asteroid Goddesses)." },
    { cohort: "Cohort 6: Specialized Mundane, Esoteric, Medical & Financial Astrology", count: 8, books: "Nicholas Campion (Mundane Astrology), Sepharial (Silver Key / Astrological Keys), W.D. Gann (Tunnel Thru the Air / Financial Cycles), H.S. Green (Medical Astrology), Charles Carter (The Astrological Aspects), Alice Bailey (Esoteric Astrology), Manly P. Hall (Astrological Keywords), Noel Tyl (Synthesis & Counseling in Astrology)." }
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
**Subtitle:** A Systematic 5-Stage Path from Beginner to Diagnostic Master Across ${curriculumData.total_books} Canonical Traditions  
**Standard:** BKRS v2.0 Production Master Synthesis  
**Scope:** ${curriculumData.total_books} Reconstructed Works | 5 Learning Stages | Epistemological Rosetta Stone | Unified 6-Step Clinical Protocol | 50-Book Scaling Trajectory

---

## Executive Overview: The Need for a Unified Curriculum

Astrology is often approached as a fragmented collection of competing, contradictory schools. The beginner is typically confronted with irreconcilable debates:
- *Tropical seasonal zodiac vs. Sidereal stellar constellations?*
- *Whole-Sign ancient houses vs. Placidus quadrant houses?*
- *Deterministic fatalistic karma vs. Jungian psychological self-actualization?*
- *Traditional 360° longitudinal aspects vs. modern three-dimensional declinational neuro-psychiatry?*
- *Pure archetypal synchronicity vs. solar magnetohydrodynamic field entrainment?*

When read one by one without a synthesized architectural map, these ${curriculumData.total_books} books can produce profound cognitive overload. However, when reconstructed through the **Book Knowledge Reconstruction System (BKRS)**, these traditions reveal themselves not as contradictory dogmas, but as **complementary diagnostic dimensions of a single cosmic architecture**.

This Master Curriculum provides:
1. **A 5-Stage Progressive Learning Pathway** guiding a beginner from elementary geometry to advanced clinical mastery.
2. **The Epistemological Rosetta Stone** resolving the historical and technical debates between Eastern and Western, Classical and Modern systems.
3. **The Unified 6-Step Clinical Chart Delineation Protocol** used by elite multi-system practitioners.
4. **The 50-Book Master Roadmap** detailing the scaling trajectory for the complete library.

---

## The ${curriculumData.total_books} Reconstructed Masterworks by Paradigm

| # | Masterwork | Author | Epoch | Primary Paradigm | Core Invariant Contribution |
|:---:|:---|:---|:---:|:---|:---|
${curriculumData.books_roster.map((b, i) => `| **${i + 1}** | [${b.title}](../../distillations/${b.slug}/index.html) | ${b.author} | ${b.year} | ${b.paradigm} | ${b.key_contributions} |`).join('\n')}

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
  md += `- **Tropical / Psychological Paradigm:** ${rs.tropical_perspective}\n`;
  md += `- **Sidereal / Empirical Paradigm:** ${rs.sidereal_perspective}\n`;
  md += `- **Synthetic Resolution:** **${rs.synthetic_resolution}**\n\n`;
});

md += `## The Unified 6-Step Clinical Chart Delineation Protocol\n\n`;
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
      background: var(--bg-card, #1e1e1e);
      border-color: rgba(255, 255, 255, 0.1);
      border-left-color: #ef4444;
    }

    .stage-badge {
      display: inline-block;
      padding: 3px 8px;
      background: #991b1b;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 4px;
      margin-bottom: 8px;
    }

    [data-theme="dark"] .stage-badge {
      background: #ef4444;
    }

    .books-roster-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }

    .roster-card {
      background: var(--bg-card, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    [data-theme="dark"] .roster-card {
      background: var(--bg-card, #1e1e1e);
      border-color: rgba(255, 255, 255, 0.1);
    }

    .roster-title {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 700;
      color: #991b1b;
      margin-bottom: 4px;
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
        <p class="book-subtitle">A Systematic 5-Stage Path from Beginner to Diagnostic Master Across 30 Foundational Traditions</p>

        <div class="reader-metadata-bar">
          <span><strong>Corpus:</strong> 30 Reconstructed Codices</span>
          <span><strong>Coverage:</strong> Hellenistic · Vedic · Humanistic · Predictive · Shamanic · Psychiatric · Evolutionary · Biophysical</span>
          <span><strong>Objective:</strong> Universal Operational Fluency & Diagnostic Synthesis</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="syllabus">5-Stage Syllabus</button>
          <button class="tab-button" data-tab="rosetta">Epistemological Rosetta Stone</button>
          <button class="tab-button" data-tab="protocol">6-Step Clinical Protocol</button>
          <button class="tab-button" data-tab="roster">30-Book Corpus</button>
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

      <!-- 6-STEP PROTOCOL -->
      <section id="view-protocol" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Unified 6-Step Clinical Chart Delineation Protocol</h2>
            <p>How an elite multi-system practitioner synthesizes Hellenistic, Vedic, Psychological, Relational, and Biophysical metrics when analyzing a live natal chart.</p>
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

      <!-- 30-BOOK ROSTER -->
      <section id="view-roster" class="tab-content">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The 30 Reconstructed Masterworks</h2>
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
            <p>Strategic blueprint to expand our 30-volume foundation into the world's most exhaustive 50-volume astrological curriculum across thematic cohorts.</p>
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
        <p>Canonical Synthesis: Grand Unified Astrological Master Curriculum across 30 Masterworks.</p>
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
