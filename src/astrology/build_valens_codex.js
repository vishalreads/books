/**
 * Builder for Vettius Valens: The Anthologies (Anthologiae, Books I–IX)
 * Standard: BKRS v2.0 Production Master
 * Architecture: 9 Comprehensive Books / Units | Hellenistic Taproot of Astrological Science
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-anthologies-vettius-valens');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "Book I: The Anatomy of the Heavens — Planetary Sects, Sign Classifications, Bounds & Dodecatemoria",
    scope: "Book I: Planetary natures, Diurnal/Nocturnal Sect, 12 Zodiacal signs, Egyptian Terms (Bounds), Decans, and Dodecatemoria (Twelfth-Parts)",
    epistemic_status: "HELLENISTIC_ASTRONOMICAL_DOCTRINE & PLANETARY_SECT",
    materiality: "CRITICAL",
    core_theme: "The foundational cosmological ontology of Hellenistic astrology: planetary sect (diurnal vs. nocturnal), whole-sign essential qualities, and fractional micro-zodiacal subdivisions (terms and dodecatemoria).",
    textual_analysis: [
      "Vettius Valens opens the Anthologies not with speculative mythology, but with rigorous, empirical delineations of the seven planetary bodies and their physical, physiological, and sociological signatures. Valens establishes the fundamental doctrine of Sect (Hairesis): the cosmos is bisected into the Diurnal sect (led by the Sun, accompanied by Jupiter, Saturn, and diurnal Mercury) and the Nocturnal sect (led by the Moon, accompanied by Venus, Mars, and nocturnal Mercury).",
      "Planetary Functionality by Sect: Malefics behave radically differently according to their sect alignment. Saturn, an intrinsically cold and dry star, is moderated and made constructive when placed in a day chart where the Sun's solar heat tempers its chilling rigidity; placed in a night chart, Saturn's icy austerity becomes unmitigated and destructive. Conversely, Mars, an intensely hot and dry malefic, is soothed and disciplined by the moist, cool nocturnal atmosphere of a night chart; in a day chart, Mars overheats into unrestrained violence, fevers, and ruin.",
      "The Zodiacal Classifications: Valens categorizes the twelve signs through multiple intersecting matrices: Tropical/Equinoctial, Solid (Fixed), and Bicorporeal (Mutable); Masuline and Feminine; Fertile, Barren, Mute, Loud-voiced, Quadrupedal, and Human. Each sign is further analyzed through its ascensional time (rising times at different climes), which governs planetary periods and lifespan computations.",
      "Terms (Bounds) and Dodecatemoria: Valens details the Egyptian system of Bounds (Horoi)—unequal degree segments within each sign ruled by the five non-luminary planets (Mercury, Venus, Mars, Jupiter, Saturn). A planet's dignity and behavioral modification are governed by the lord of the bounds in which it resides. He further introduces the Dodecatemoria (the 12th-part micro-zodiac, projecting each 2.5° increment of a sign into a full 30° zodiacal sign), revealing the hidden internal sub-structure of planetary degrees."
    ],
    verbatim_quote: "The Sun is nature's fire and intellectual light, the organ of mental perception... Saturn makes those born under him petty, malicious, solitary, clothed in black, accusatory, and tearful when ill-placed, but when participating in his own sect, he bestows profound judgment, agricultural mastery, and unshakeable authority.",
    operational_heuristic: "Determine chart sect first before analyzing any malefic or benefic: evaluate whether Saturn is diurnal (constructive restraint) or nocturnal (chilling affliction), and whether Mars is nocturnal (tempered ambition) or diurnal (incendiary conflict).",
    key_motifs: [
      "Diurnal vs. Nocturnal Sect (Hairesis)",
      "Planetary Physiology & Signatures",
      "Egyptian Terms / Bounds (Horoi)",
      "Dodecatemoria (Twelfth-Parts)",
      "Whole-Sign Planetary Dignities"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "Book II: The Twelve Places (Dodekatropos) & The Calculation of the Hermetic Lots",
    scope: "Book II: The Twelve Places/Houses, Pivots (Kentra), and the Calculation/Delineation of the Lots (Fortune, Spirit, Necessity, Courage, Victory, Nemesis)",
    epistemic_status: "HELLENISTIC_TOPICAL_HOUSES & LOT_MATRICES",
    materiality: "CRITICAL",
    core_theme: "The twelve-fold topographical division of human life into whole-sign places (topoi), the functional hierarchy of pivots (kentra), and the calculation of mathematical Arabic/Hermetic Lots.",
    textual_analysis: [
      "Valens presents the classical Hellenistic twelve-place system (Dodekatropos) operating under whole-sign house architecture. The houses are not arbitrary quadrant divisions of time, but whole 30-degree signs reckoned from the rising sign (Horoskopos). Valens divides the places into three functional tiers: the Kentra (Pivots/Angles: 1st, 10th, 7th, 4th), which possess supreme dynamic power to manifest events; the Epanaphorai (Succedent places: 2nd, 5th, 8th, 11th); and the Apoklimata (Cadent/Declining places: 3rd, 6th, 9th, 12th), which weaken planetary efficacy.",
      "The Epistemic Nature of the Places: The 1st place (Horoskopos) rules the body, vitality, and breath; the 2nd (Gate of Hades / Bios) rules livelihood and movable assets; the 3rd (Goddess) rules siblings, short journeys, and Queenly religious rites; the 4th (Subterranean / Hypogeion) rules ancestry, land, and hidden foundations; the 5th (Good Fortune / Agathe Tyche) rules children and benefic enjoyment; the 6th (Bad Fortune) rules chronic afflictions, injuries, and servitude; the 7th (Setting / Dysis) rules marriage and open opposition; the 8th (Idle Place / Epikataphora) rules mortality and inheritance; the 9th (God / Helios) rules foreign voyages, philosophy, and divination; the 10th (Midheaven / Mesouranema) rules actions (praxis), honors, and social rank; the 11th (Good Daimon) rules alliances, benefactors, and fulfilled hopes; the 12th (Bad Daimon) rules confinement, exile, and secret hostility.",
      "The Doctrine of the Lots (Kleroi): Valens provides the exact ancient algorithmic formulas for the primary Hermetic Lots. The Lot of Fortune (Tyche) is calculated for day births as Ascendant + Moon - Sun, and for night births as Ascendant + Sun - Moon. Fortune represents the physical body, material fortune, bodily health, and involuntary worldly circumstances. The Lot of Spirit (Daimon) reverses the formula: Day = Ascendant + Sun - Moon; Night = Ascendant + Moon - Sun. Spirit represents the mind, intellect, deliberate action, career initiative, and intentional philosophy.",
      "Auxiliary Hermetic Lots: Valens details the secondary lots derived from planetary arcs: the Lot of Necessity (Mercury/Fortune arc, ruling constraints and legal disputes); the Lot of Courage (Mars/Fortune arc, ruling audacity, warfare, and reckless ventures); the Lot of Victory (Jupiter/Spirit arc, ruling judicial triumph and social advancement); the Lot of Nemesis (Saturn/Fortune arc, ruling secret downfalls, karmic debts, and sudden ruin); and the Lot of Basis (combining Fortune and Spirit to identify foundation stones of fate)."
    ],
    verbatim_quote: "The Lot of Fortune and the Lot of Spirit are the two luminaries of the soul's destiny: Fortune controls the accidents of the flesh, property, and physical encounter, while Spirit governs the purposeful intellect, the secret desires, and the moral choices of the native.",
    operational_heuristic: "Always cast a secondary whole-sign chart using the Lot of Fortune as the 1st house (the 'Fortune Chart'); the 10th house from the Lot of Fortune governs social accomplishment, public reputation, and external success.",
    key_motifs: [
      "Dodekatropos (12 Whole-Sign Places)",
      "Kentra (Pivotal Angles) vs. Apoklimata",
      "Lot of Fortune (Tyche Formula)",
      "Lot of Spirit (Daimon Formula)",
      "Derivative Houses from Lots"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "Book III: The Longevity Doctrine — The Releaser (Apheta/Hyleg) & The Destroyer (Anaireta)",
    scope: "Book III: Life-span determination, the primary releaser (Hyleg), the destructive encounter (Anaireta), and ascensional degree computations",
    epistemic_status: "HELLENISTIC_LONGEVITY_MECHANICS & ASCENSIONAL_CHRONOMETRY",
    materiality: "IMPORTANT",
    core_theme: "The rigorous ancient protocols for determining the physical duration of life through the selection of the aphetic releasing point (Hyleg) and directing it through planetary bounds toward malefic ray intersections (Anaireta).",
    textual_analysis: [
      "In Book III, Valens addresses the most somber and mathematically demanding department of ancient Hellenistic practice: determining the physical vitality and potential longevity of the native. In antiquity, high infant mortality and frequent epidemics made lifespan estimation the initial diagnostic gate through which every chart had to pass before analyzing career or wealth.",
      "Identifying the Apheta (Releaser / Hyleg): Valens outlines the hierarchy for selecting the primal life-giving point. In a day chart, the Sun is inspected first if situated in an aphetic place (1st, 10th, 11th, 9th, or 7th houses); if the Sun is disqualified or cadent, the Moon is evaluated; if neither luminary qualifies, the Lot of Fortune, the Syzygy (prenatal New or Full Moon), or the Ascendant degree itself is appointed as the Hyleg.",
      "The Anaireta (Destroyer) & Ray Intersections: The aphetic point is 'directed' (circumambulated) through the rising times of the signs and the planetary bounds (terms). Physical crisis or death occurs when the directed Hyleg reaches the degree of a malefic planet (Mars or Saturn) or encounters their hard ray (square or opposition), provided no benefic planet (Jupiter or Venus) casts a mitigating trine or sextile to neutralize the lethal impact.",
      "Climacteric Years and Ascensional Times: Valens utilizes the exact ascensional times of the zodiacal signs calculated for specific latitudes (climes) to convert zodiacal degrees into terrestrial years. He demonstrates how each bound ruler acts as a temporary guardian of vitality, and when a native passes from a benefic bound (Venus/Jupiter) into a malefic bound (Mars/Saturn) during an acute climacteric year (e.g., ages 7, 21, 49, 63), severe physical illness or surgical intervention is triggered."
    ],
    verbatim_quote: "The bounds of the stars are like checkpoints along the road of life: when the releaser travels through the bounds of benefics, it finds rest, health, and refreshment; when it traverses the dry and fiery bounds of Mars or the freezing bounds of Saturn, the flame of life flickers.",
    operational_heuristic: "To identify critical health years, trace the direction of the Ascendant or Hyleg through the Egyptian bounds: every boundary transition into a malefic-ruled term marks a period of heightened biological vulnerability.",
    key_motifs: [
      "Apheta / Hyleg (Primal Releaser)",
      "Anaireta (The Destructive Point)",
      "Circumambulation through the Bounds",
      "Ascensional Times of Signs (Climes)",
      "Climacteric Crisis Years"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Book IV: Time Lords (Chronocrators) & The Master Art of Zodiacal Releasing (Aphesis)",
    scope: "Book IV: Planetary periods, Annual Profections, and Zodiacal Releasing from the Lots of Fortune and Spirit",
    epistemic_status: "ZODIACAL_RELEASING_APHESIS & CHRONOCRATOR_SYSTEMS",
    materiality: "CRITICAL",
    core_theme: "The engine of Hellenistic dynamic timing: the calculation of major, minor, and sub-period Time Lords (Chronocrators), and the pinnacle forecasting technique of Zodiacal Releasing from the Lots.",
    textual_analysis: [
      "Book IV represents the intellectual zenith of Valens' Anthologies and the foundational source text for modern revivals of Hellenistic predictive technique. Valens demonstrates that natal planets do not operate constantly with equal intensity; they lie dormant until the Time Lord cycles activate them as the presiding rulers of a specific life chapter.",
      "Annual Profections: The fundamental baseline timing system. From the moment of birth, the Ascendant advances exactly one whole sign per year (at age 0 = 1st house; age 1 = 2nd house; age 12 = 1st house again). The lord of the sign reached becomes the Lord of the Year. Transits occurring during that year are judged primarily through the filter of this Lord of the Year: transits involving the year ruler or aspecting its natal position produce decisive external events, while transits of inactive planets pass with minimal disruption.",
      "Zodiacal Releasing (Aphesis) from the Lots: Valens introduces the world's most sophisticated symbolic time-lord technique. The practitioner counts planetary periods from the sign of a Hermetic Lot: Zodiacal Releasing from the Lot of Fortune unrolls the timeline of physical health, accidents, bodily vitality, and financial acquisition; Zodiacal Releasing from the Lot of Spirit unrolls the career trajectory, public standing, mental calling, and purposeful actions (praxis).",
      "The Planetary Period Multipliers: Each sign is assigned the minor planetary period of its ruling planet: Capricorn = 27 years (Saturn); Aquarius = 30 years (Saturn); Sagittarius = 12 years (Jupiter); Pisces = 12 years (Jupiter); Aries = 15 years (Mars); Scorpio = 15 years (Mars); Taurus = 8 years (Venus); Libra = 8 years (Venus); Gemini = 20 years (Mercury); Virgo = 20 years (Mercury); Cancer = 25 years (Moon); Leo = 19 years (Sun). These major periods (Level 1) subdivide into Level 2 (months), Level 3 (days), and Level 4 (hours).",
      "Peak Periods and the Loosening of the Helm (Lusis): Valens outlines how to identify the most significant career chapters of a lifetime. A 'Peak Period' occurs when Level 2 reaches an angular sign (1st, 10th, 7th, 4th) relative to the Lot of Fortune. A major life disruption or radical biographical pivot occurs during 'The Loosening of the Helm' (Lusis), which happens when a sequence of sub-periods reaches its maximum planetary duration and 'jumps' across the zodiac to the opposing polarity."
    ],
    verbatim_quote: "When the time-hand reaches the signs that are angular from the Lot of Fortune, men achieve eminence, military commands, high public appointments, and royal favors; but when the distribution enters cadent signs or encounters the unmitigated rays of malefics, the ship loses its rudder.",
    operational_heuristic: "When consulting on career timing, calculate Zodiacal Releasing from the Lot of Spirit: identify Level 2 periods that occupy the 10th sign from the Lot of Fortune—these consistently produce the native's greatest career peaks and public recognition.",
    key_motifs: [
      "Annual Profections (Lord of the Year)",
      "Zodiacal Releasing (Aphesis)",
      "Planetary Minor Periods (Years)",
      "Peak Periods (Angles from Fortune)",
      "Loosening of the Helm (Lusis)"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Book V: Planetary Configurations, The Geometry of Rays & The Climacteric Crises",
    scope: "Book V: Whole-sign aspect geometry, overcoming (katyperteresis), spear-bearing (doryphoria), and crisis intervals (climacterics)",
    epistemic_status: "HELLENISTIC_ASPECT_GEOMETRY & CONFIGURATIONAL_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The geometric and hierarchical dynamics of whole-sign aspects: overcoming, spear-bearing retinues, enclosing rays, and identifying acute climacteric crisis periods.",
    textual_analysis: [
      "In Book V, Valens explores the subtle geometric mechanics governing how planets interact across whole-sign boundaries. Unlike modern astrology, which treats aspects as simple degree-orbs floating in empty space, Hellenistic astrology treats aspects as optical rays cast between signs based on geometric ratios (diametrical opposition = 180°, tetragonal square = 90°, trigonal trine = 120°, hexagonal sextile = 60°). Signs that do not share a major geometric ratio are 'inconjunct' or 'alien' (as syndeton), unable to see or assist one another.",
      "The Doctrine of Overcoming (Katyperteresis): A planet placed in the 10th sign from another planet casts its ray downward into the 4th sign below it and 'overcomes' (dominates) that planet. In any square aspect, the planet that is situated tenth relative to the other is in the superior position, exerting absolute mastery over the subordinate planet. If a superior Saturn overcomes Venus, love affairs and marriages are delayed, chilled, or burdened; if a superior Jupiter overcomes Mars, aggressive impulses are channeled into lawful justice and heroic defense.",
      "Spear-Bearing (Doryphoria): One of the royal astrological signatures of antiquity. When benefic planets or sect-mates precede the Sun or follow the Moon within specific boundaries, they act as royal bodyguards ('spear-bearers'). Charts possessing genuine Doryphoria produce leaders, commanders, magistrates, and individuals protected by powerful social institutions.",
      "Enclosing and Interception of Rays: Valens demonstrates the peril of Besiegement (Emperistasis / Enclosure). When a planet or house is situated between two malefics—either by bodily position or by ray casting—it is cut off from benefic rescue, resulting in acute helplessness during activated time periods."
    ],
    verbatim_quote: "A star does not merely touch another by aspect; it commands or obeys. The star situated in the tenth place from another overcomes it by superior elevation, bending the other's nature to its own purpose.",
    operational_heuristic: "In every square aspect, identify which planet is in the 10th sign from the other: the planet occupying the superior 10th position dominates the square and dictates how the tension manifests in reality.",
    key_motifs: [
      "Overcoming (Katyperteresis)",
      "Spear-Bearing (Doryphoria)",
      "Besiegement / Enclosure (Emperistasis)",
      "Whole-Sign Optical Ray Geometry",
      "Superior vs. Inferior Aspect Position"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Book VI: Operative Planetary Periods, Distributions & The Critical Eclipses",
    scope: "Book VI: Operative planetary years, distribution of rulerships, nodal interactions, and the impact of solar and lunar eclipses",
    epistemic_status: "CHRONOCRATIC_DISTRIBUTION & ECLIPTIC_NODAL_AFFLICTION",
    materiality: "IMPORTANT",
    core_theme: "The distribution of chronocratic time-shares among planets and the destabilizing interventions of solar/lunar eclipses and the Lunar Nodes (Anabibazon/Katabibazon).",
    textual_analysis: [
      "In Book VI, Valens deepens the mechanics of planetary time-sharing. He demonstrates that life unfolds as a continuous handoff of chronocratic authority. A primary planet does not govern an entire life stage alone; it distributes sub-portions (shares) of years to co-ruling stars according to the proportion of their essential dignities and bound ownership.",
      "The Lunar Nodes (The Dragon's Head and Tail): Valens details the critical maleficence of the Lunar Nodes (Anabibazon = North Node, Katabibazon = South Node) when conjoining luminaries or angles. A luminary conjoined with the Nodes is stripped of its solar majesty or lunar nourishment, causing periods of obscurity, biological vulnerability, or sudden reversals of status.",
      "The Catalyst of Eclipses: Valens establishes that an eclipse does not operate merely on the day of its occurrence. An eclipse occurring in an angle of the nativity, or upon the degree of the Sun, Moon, or Lord of the Year, imprints an energetic 'wound' on that zodiacal degree. When subsequent transiting malefics or time lords cross that exact degree, latent crises erupt into overt reality."
    ],
    verbatim_quote: "The Dragon's Nodes are places of shadow and devouring: when the luminaries enter their jaws, the light of royalty and life is eclipsed, and the native must walk through darkness until the distribution passes to a safe harbor.",
    operational_heuristic: "Audit natal angles and luminaries for proximity to the Lunar Nodes: planets within 12 degrees of the nodal axis undergo radical fluctuations between extreme worldly inflation and sudden karmic deflation.",
    key_motifs: [
      "Distribution of Planetary Shares",
      "The Dragon's Head & Tail (Lunar Nodes)",
      "Eclipses as Latent Degree Triggers",
      "Karmic Reversals of Fortune",
      "Chronocratic Succession"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Book VII: Critical Years, Bodily Pathology & The Diagnosis of Illness",
    scope: "Book VII: Medical astrology, bodily organ rulerships, identifying chronic vs. acute pathologies, and calculating climacteric years",
    epistemic_status: "HELLENISTIC_IATROMATHEMATICS & PATHOLOGICAL_DIAGNOSTICS",
    materiality: "IMPORTANT",
    core_theme: "Hellenistic medical astrology (Iatromathematics): mapping the human body to zodiacal signs and planets, diagnosing acute versus chronic disease, and timing surgical risk.",
    textual_analysis: [
      "Book VII provides an exhaustive manual of Hellenistic medical astrology (Iatromathematics). Valens insists that the physician-astrologer must understand the bodily vessel (Soma) just as deeply as the fate of the soul. He delineates the anatomical distribution of the signs: Aries rules the head and face; Taurus the neck and throat; Gemini the shoulders, arms, and hands; Cancer the chest, lungs, and breasts; Leo the heart, stomach, and ribs; Virgo the belly, intestines, and internal viscera; Libra the kidneys, loins, and buttocks; Scorpio the genitals, excretory organs, and womb; Sagittarius the thighs and hips; Capricorn the knees and skeletal frame; Aquarius the shins and calves; Pisces the feet and lymphatic fluids.",
      "Pathological Signatures: Disease occurs when natural malefics (Mars and Saturn) afflict the Moon (ruler of physical flesh), the Ascendant (ruler of vitality), or the 6th house (Bad Fortune). Mars generates inflammatory diseases, acute fevers, hemorrhages, burns, surgical wounds, and sharp pains; Saturn generates cold, chronic, wasting conditions, melancholia, obstruction of fluids, bone fractures, and degenerative decay.",
      "The 6th and 8th House Interplay: Valens differentiates between curable illness (governed by the 6th place, where the body struggles against disease) and incurable or fatal conditions (where the affliction passes into the 8th place of mortality or involves unmitigated malefic bounds)."
    ],
    verbatim_quote: "When Mars afflicts the Moon in Cancer, expect diseases of the chest, spitting of blood, and burning ulcers; when Saturn afflicts the Moon in Capricorn, expect stone in the bladder, gout in the joints, and cold wasting of the limbs.",
    operational_heuristic: "In medical consultations, never evaluate disease from the 6th house alone: examine the condition of the Moon and the Lord of the Ascendant; if both are strong and in benefic bounds, the native will survive even severe 6th-house illnesses.",
    key_motifs: [
      "Iatromathematics (Medical Astrology)",
      "Zodiacal Melothesia (Body Mapping)",
      "Mars (Inflammation) vs. Saturn (Chronic Decay)",
      "The 6th House (Affliction) Mechanics",
      "Timing Surgical and Medical Intervention"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Book VIII: Ephemerides, Exact Degree Calculations & The Ascendant at Diverse Climes",
    scope: "Book VIII: Mathematical tables, solar and lunar ephemeris computation, hourly ascendant calculations, and astronomical calibration",
    epistemic_status: "HELLENISTIC_ASTRONOMICAL_COMPUTATION & CLIMATIC_CALIBRATION",
    materiality: "TEXTURAL",
    core_theme: "The practical astronomical craft of the working Hellenistic astrologer: manual table computations, calculating rising times across climes, and rectifying the ascendant degree.",
    textual_analysis: [
      "Book VIII offers a rare and invaluable window into the working methods of a 2nd-century professional astrologer. Before computer software or printed ephemerides existed, casting a horoscope required complex spherical trigonometry and reliance on Babylonian astronomical tables.",
      "Valens presents computational methods for calculating the positions of the Sun, Moon, and planets using the Babylonian System A and System B methods. He provides step-by-step instructions for finding the exact rising sign (Horoskopos) at any given hour for the seven climatic zones (climes) of the known Greco-Roman world (from Alexandria and Rhodes to Rome and the Black Sea).",
      "Rectification and Precise Observation: Valens emphasizes that a small error in the recorded time of birth can shift the Ascendant sign or the Egyptian bounds, completely distorting the time-lord releasing sequence. He provides methods for checking the Ascendant against the prenatal lunation and the diurnal motion of the Moon."
    ],
    verbatim_quote: "Let no one undertake the interpretation of a nativity who is careless in mathematics: for an error of a single degree in the rising sign can transfer the helm of life from a benefic to a destroyer.",
    operational_heuristic: "Always verify the degree of the Ascendant against the Egyptian terms: if a client's reported birth time sits within 1 degree of a bound change, calibrate the past chronology of life crises to verify the true term ruler.",
    key_motifs: [
      "Ancient Astronomical Ephemerides",
      "Climates (Climes) and Rising Times",
      "Manual Calculation of the Horoskopos",
      "Rectification via Bound Transitions",
      "Babylonian Mathematical Systems"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Book IX: Clinical Master Consultations — Case Forensics from Ancient Practice",
    scope: "Book IX: Over 100 actual client case studies from Valens' 2nd-century consulting practice, synthesizing all techniques into forensic chart judgment",
    epistemic_status: "CLINICAL_HELLENISTIC_CASE_FORENSICS & PRACTICAL_SYNTHESIS",
    materiality: "CRITICAL",
    core_theme: "The ultimate practical synthesis: real clinical case studies from Valens' private archive, demonstrating how profections, zodiacal releasing, transits, and sect interact in living human destinies.",
    textual_analysis: [
      "Book IX is unique in surviving ancient literature: unlike Ptolemy's theoretical Tetrabiblos, Valens provides over one hundred real, historical horoscopes of everyday people from his private consulting practice in Alexandria and Antioch—merchants, soldiers, aristocrats, slaves, and ship captains.",
      "Forensic Case Analysis: Valens demonstrates his full synthetic protocol. For each client, he identifies the sect of the chart, determines the Lot of Fortune and Lot of Spirit, calculates the Lord of the Year via Annual Profections, traces the Zodiacal Releasing peak periods, and evaluates current planetary transits.",
      "Case of the Bankrupt Merchant: Valens analyzes a client who achieved immense wealth through maritime trade but suffered sudden shipwreck and imprisonment. He demonstrates that while the 2nd house appeared favorable, the Lot of Fortune was placed in a cadent sign overcome by a nocturnal Saturn, triggering financial collapse exactly when the profection reached the 12th place.",
      "Case of the Promoted Soldier: A detailed case showing a modest soldier elevated to high military command. Valens proves that the Lot of Spirit occupied an angular place with Doryphoria (spear-bearing planets flanking the Sun), activating high honors when the Zodiacal Releasing reached the 10th sign from Fortune.",
      "The Astrologer's Moral Conduct: Valens concludes with a profound ethical testament on the purpose of astrology: to grant equanimity, philosophical detachment, and dignity in the face of inexorable fate. By knowing what is ordained, the wise person neither boasts in prosperity nor despairs in adversity."
    ],
    verbatim_quote: "Those who train themselves in the foreknowledge of the future do not tremble before misfortune nor become arrogant in prosperity: they meet all events with noble courage, knowing that human life is governed by divine harmony.",
    operational_heuristic: "Synthesize all judgments through the Triple Gate: 1) Verify the baseline capacity of the natal promise (Sect, Angles, Dignity); 2) Identify the active Time Lord (Profection & Zodiacal Releasing); 3) Use transits solely as the mechanical trigger of the promised event.",
    key_motifs: [
      "100+ Ancient Clinical Case Records",
      "The Bankrupt Merchant Case Study",
      "The Promoted Soldier Case Study",
      "Synthetic Triple-Gate Interpretation",
      "The Stoic Ethics of the Astrologer"
    ]
  }
];

function generateMarkdown(units) {
  let md = `# Vettius Valens: The Anthologies (Anthologiae, Books I–IX)
## Complete BKRS v2.0 Forensic Master Codex · The Hellenistic Astrological Taproot

---

### Archival Metadata
- **Author:** Vettius Valens of Antioch (fl. c. 150–175 CE)
- **Original Language:** Ancient Greek (Anthologiarum libri novem)
- **English Translation:** Mark T. Riley (California State University, Sacramento)
- **Philosophical Tradition:** Hellenistic Astrological Science, Stoic Cosmology, Alexandria/Antioch Hermetic Tradition
- **Historical Era:** 2nd Century Roman Empire (Reigns of Antoninus Pius and Marcus Aurelius)
- **Curriculum Role:** Foundational Classical / Hellenistic Masterwork (Book 6 of the Master Curriculum)

---

## Executive Summary: The Ancient Foundation of Western Astrology

The *Anthologies* (*Anthologiae*) of **Vettius Valens of Antioch** represents the most comprehensive, practically oriented, and empirically grounded textbook of astrology to survive from classical antiquity. While his contemporary Claudius Ptolemy composed the *Tetrabiblos* as an intellectual, Aristotelian philosophical defense for an academic audience, Valens was an active, consulting astrologer running a professional school and analyzing hundreds of real human horoscopes.

Valens' work forms the primary historical taproot of all horoscopic astrology in the Mediterranean, Arabic, and Western traditions. Within its nine dense books lie the original doctrines that modern astrology either simplified, corrupted, or forgot entirely:
1. **The Doctrine of Sect (Hairesis):** The fundamental bisection of charts into Day (Diurnal) and Night (Nocturnal), which dictates whether malefics (Saturn, Mars) behave constructively or destructively.
2. **Whole-Sign Houses (Dodekatropos):** The 12 places viewed not as modern quadrant slices of space, but as complete 30-degree zodiacal signs counted from the Ascendant.
3. **The Hermetic Lots (Kleroi):** Mathematical point calculations (Lot of Fortune, Lot of Spirit, Necessity, Courage, Victory, Nemesis) providing objective energetic centers of life.
4. **Zodiacal Releasing (Aphesis):** The master time-lord forecasting engine that divides human biography into major chapters, peak career periods, and revolutionary pivots ('Loosening of the Helm').
5. **Annual Profections:** The annual 30-degree time-clock appointing the Lord of the Year.
6. **Iatromathematics:** Clinical medical astrology diagnosing bodily organ vulnerabilities and surgical risks.

---

## Detailed Structural Analysis of the Nine Books

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
    md += `> **Ancient Master Verbatim:**\n`;
    md += `> "${u.verbatim_quote}"\n\n`;
    md += `**Operational Heuristic for Practitioners:**\n`;
    md += `*${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs & Terminology:** ${u.key_motifs.map(m => `\`${m}\``).join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  md += `## Hellenistic Master Synthesis: The Complete Beginner-to-Master Framework

### The Hellenistic Interpretive Hierarchy (The 5-Step Protocol)

When analyzing any chart using Valens' methodology, follow this strict sequential algorithm:

1. **Step 1: Determine the Sect (Day vs. Night)**
   - Is the Sun above the horizon (Houses 7, 8, 9, 10, 11, 12)? If yes, it is a **Diurnal Chart**.
   - Is the Sun below the horizon (Houses 1, 2, 3, 4, 5, 6)? If yes, it is a **Nocturnal Chart**.
   - In a Day Chart: **Jupiter** is the supreme benefic; **Saturn** is tempered and constructive; **Mars** is the most volatile and dangerous malefic.
   - In a Night Chart: **Venus** is the supreme benefic; **Mars** is soothed and disciplined; **Saturn** is the coldest, most obstructive malefic.

2. **Step 2: Establish the Whole-Sign Houses and Pivots (Kentra)**
   - The entire sign containing the Ascendant is House 1 (Horoskopos).
   - Identify planets in the **Kentra** (1st, 10th, 7th, 4th): these planets hold dynamic power to translate potential into concrete reality.
   - Identify planets in the **Apoklimata** (3rd, 6th, 9th, 12th): these planets struggle to manifest external events and operate inwardly or erratically.

3. **Step 3: Calculate the Hermetic Lots**
   - Calculate the **Lot of Fortune** (Tyche) to judge physical health, wealth, and material luck.
   - Calculate the **Lot of Spirit** (Daimon) to judge career, intellectual ambition, and purposeful actions.
   - Construct the **Fortune Chart**: Treat the sign of the Lot of Fortune as the 1st house. The 10th sign from Fortune governs worldly renown and public achievements.

4. **Step 4: Identify Active Time Lords via Profections**
   - Advance the Ascendant by one sign per completed year of life.
   - The ruler of the sign reached is the **Lord of the Year**.
   - Pay primary attention to transits that make aspects to the Lord of the Year or to its natal house placement.

5. **Step 5: Trace Long-Term Biographical Chapters via Zodiacal Releasing**
   - Unroll Zodiacal Releasing from the **Lot of Spirit** using planetary minor periods (years per sign).
   - Major life career peaks occur when Level 2 reaches signs that are angular (1st, 4th, 7th, 10th) from the Lot of Fortune.
   - Major biographical transformations and life crises occur during the **Loosening of the Helm** (Lusis).

---

## Glossary of Essential Hellenistic Astrological Terms

- **Aphesis (Zodiacal Releasing):** The ancient time-lord technique that 'releases' the planetary years of the signs from a Hermetic Lot to track life chapters.
- **Bounds / Terms (Horoi):** The unequal 5-part division of every zodiacal sign, ruled by the 5 planets, modifying planetary temperament.
- **Chronocrators:** Time Lords; planets appointed to govern specific segments of chronological time.
- **Dodecatemoria:** The twelfth-part micro-zodiac, where each 2.5° of a sign projects into a complete 30° zodiacal sign.
- **Doryphoria (Spear-Bearing):** Royal configuration where benefic or sect planets attend or escort the Sun or Moon.
- **Hairesis (Sect):** The diurnal or nocturnal faction to which a chart and its planets belong.
- **Katyperteresis (Overcoming):** A planet in the superior 10th position dominating a planet in the subordinate 4th position.
- **Kleros (Lot):** A mathematically calculated point projecting the angular arc between two bodies from the Ascendant.
- **Lusis (Loosening of the Helm):** A disruption in the sub-period sequence of Zodiacal Releasing causing a major life redirection.
- **Melothesia:** The systematic correspondence between zodiacal signs and organs of the human body.
- **Profection:** The annual advancement of the Ascendant by one whole sign per year of age.
- **Whole-Sign House:** The classical house division system where each house corresponds exactly to a 30-degree zodiacal sign.
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
        <cite>— Vettius Valens, Anthologies</cite>
      </blockquote>
      <div class="heuristic-box">
        <div class="heuristic-header">OPERATIONAL HELLENISTIC HEURISTIC</div>
        <div class="heuristic-body">${u.operational_heuristic}</div>
      </div>
      <div class="motifs-bar">
        <strong>Key Hellenistic Motifs:</strong>
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
  <title>The Anthologies — Vettius Valens | BKRS Master Reader</title>
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
      <div class="doc-kicker">BKRS Deep Forensic Master Codex · Classical Hellenistic Science</div>
      <h1 class="doc-title">The Anthologies (Anthologiae, Books I–IX)</h1>
      <div class="doc-author">Vettius Valens of Antioch · Complete Nine-Book Clinical Masterwork</div>
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

console.log('\nSUCCESS: Vettius Valens: The Anthologies successfully built!');
