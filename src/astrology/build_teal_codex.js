/**
 * Builder for Celeste Teal: Predicting Events with Astrology
 * Subtitle: Integrated Predictive Techniques
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | The Multi-Layered Event Forecasting Framework
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'predicting-events-with-astrology-teal');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "Foundations of Event Prediction: The Natal Promise, Hierarchy of Triggers & The Rule of Three",
    scope: "Introduction & Chapter 1: The philosophy of astrological prediction, The Natal Promise (capacity vs. event), The Three-Tier Predictive Hierarchy, and the Rule of Three",
    epistemic_status: "PREDICTIVE_METHODOLOGY & NATAL_PROMISE_AXIOM",
    materiality: "CRITICAL",
    core_theme: "The fundamental philosophy of astrological forecasting: no event can manifest unless promised in the birth chart; predictions require a strict hierarchy from progressions to transits, verified by the Rule of Three.",
    textual_analysis: [
      "Celeste Teal establishes the bedrock epistemological principle of predictive astrology: The Natal Promise. A birth chart represents the seed blueprint of an entire life. No technique—no matter how spectacular the transits or progressions appear—can produce an event that is not already explicitly promised in the natal structure. An astrologer cannot predict winning a multimillion-dollar lottery or ascending to head of state unless the natal chart contains the corresponding wealth yogas or angular power configurations.",
      "The Three-Tier Predictive Hierarchy: Beginners fail at prediction because they treat all indicators as equal. Teal organizes predictive tools into a rigorous operational hierarchy: 1) Tier 1 (Background Climate / The Hour Hand): Secondary Progressions, Solar Arc Directions, and Converse Progressions. These establish the internal readiness, psychological maturity, and multi-year chapters of life; 2) Tier 2 (Focus / The Minute Hand): Solar Returns, Lunar Returns, and Solar/Lunar Eclipses. These narrow the window to a specific 12-month year or 6-month nodal cycle; 3) Tier 3 (The Trigger / The Second Hand): Transits of outer planets (Saturn, Jupiter, Uranus, Neptune, Pluto) providing specific environmental pressure, and fast-moving inner planets, Mars, and New/Full Moons acting as the final day-to-day detonation triggers.",
      "The Rule of Three: An isolated transit or progression is never sufficient to manifest a major life event. A major event (marriage, divorce, business bankruptcy, birth of a child, surgical crisis) requires at least THREE independent, concurring astrological signatures operating simultaneously across different techniques.",
      "Free Will vs. Predisposition: Teal clarifies that while the timing of cosmic energy is inexorable, human consciousness retains choice regarding how that energy is expressed. Foreknowledge allows the native to prepare, make informed decisions, and channel volatile tensions into constructive activities rather than passive disasters."
    ],
    verbatim_quote: "Never attempt to predict an event from a transit alone. If it is not promised in the birth chart, and if it is not supported by the secondary progressions, the most dramatic transit will pass as nothing more than a passing mood or an annoying afternoon.",
    operational_heuristic: "Enforce the Rule of Three before delivering any event prediction: confirm that the event is promised natally, reflected in the Secondary Progressions, highlighted in the Solar Return, and triggered by active Transits.",
    key_motifs: [
      "The Natal Promise Axiom",
      "Three-Tier Predictive Hierarchy",
      "The Rule of Three",
      "Hour Hand vs. Minute Hand vs. Second Hand",
      "Free Will vs. Astrological Timing"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "Secondary Progressions: The Progressed Moon Cycle & The Internal Evolution Clock",
    scope: "Chapter 1 & 2: Secondary Progressions (Day-for-a-Year), The 27.3-Year Progressed Moon Cycle, Progressed Stations, and House Ingresses",
    epistemic_status: "SECONDARY_PROGRESSIONS & PROGRESSED_LUNATION_CYCLE",
    materiality: "CRITICAL",
    core_theme: "The mechanics of Secondary Progressions (each day after birth equals one year of life): the Progressed Moon as the personal clock of emotional focus, and progressed planetary stations.",
    textual_analysis: [
      "Secondary Progressions operate on the cosmic formula of 'A Day for a Year': the Earth's movement during the first twenty-four hours after birth corresponds symbolically to the native's first full year of life. Progressions represent the slow, internal maturation of character and psychic needs.",
      "The Progressed Moon — The Ultimate Life Clock: Moving at approximately 1 degree per month (12° to 15° per year), the Progressed Moon completes a full orbit around the natal horoscope every 27.3 years. It spends roughly 2.5 years in each sign and house, acting as the primary sweep hand of conscious attention.",
      "Sign and House Ingresses: When the Progressed Moon crosses a house cusp, the native's emotional preoccupation, domestic concerns, and physical priorities undergo a distinct, observable shift. Entering the 4th house brings intense focus on home renovation, ancestry, or domestic withdrawal; crossing into the 10th house thrusts the individual into public scrutiny and career ambition.",
      "The Progressed Lunation Cycle: The relationship between the Progressed Moon and Progressed Sun forms a 29.5-year cycle mirroring the monthly lunar phases: Progressed New Moon (seeding of a major new 30-year life chapter); First Quarter Moon (crisis in action and building structures); Full Moon (illumination, peak public culmination, or relationship showdown); Balsamic Moon (dark of the moon, fatigue, withdrawal, and releasing outdated life baggage).",
      "Progressed Planetary Stations: One of the most monumental milestones in a human life occurs when a progressed inner planet (Mercury, Venus, or Mars) stations retrograde or direct. A station marks an irrevocable reversal in mental perspective, romantic values, or physical drive, dividing life into distinct 'Before' and 'After' epochs."
    ],
    verbatim_quote: "The Progressed Moon is the heartbeat of your astrology. Whenever you feel your life shifting gears, look to the house the Progressed Moon is traversing: it points unerringly to where your emotional soul is doing its heavy lifting.",
    operational_heuristic: "Identify the phase of the Progressed Lunation Cycle: advise clients in a Progressed Balsamic Moon phase against launching major commercial expansions; encourage consolidation and psychological rest until the Progressed New Moon arrives.",
    key_motifs: [
      "Day-for-a-Year Epistemology",
      "Progressed Moon (1° Per Month)",
      "27.3-Year Progressed Moon Orbit",
      "The 29.5-Year Progressed Lunation Cycle",
      "Progressed Planetary Stations"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "Converse Progressions & Minor Timing Systems: Unlocking Hidden Karmic Timelines",
    scope: "Chapter 1: Converse Progressions (stepping backward in time), Minor Progressions (Lunar month per year), and Tertiary Progressions",
    epistemic_status: "CONVERSE_PROGRESSIONS & ESOTERIC_CHRONOMETRY",
    materiality: "IMPORTANT",
    core_theme: "The technique of progressing backward in time from birth (Converse Progressions) to reveal past-life residue, ancestral karma, and overlooked event triggers.",
    textual_analysis: [
      "Celeste Teal revives one of the most intriguing and lesser-known timing tools: Converse Progressions. While direct progressions count forward one day after birth for each year of life, converse progressions count backward one day before birth for each year of life.",
      "The Dual Motion of Time: Teal explains that time in consciousness does not flow merely forward; memory, ancestral genetics, and karmic seeds push forward from the past into the present. Direct progressions reveal the soul's forward evolution; converse progressions reveal the unfolding of pre-existing ancestral patterns and past-life karma arriving at maturity.",
      "Clinical Utility of Converse Progressions: When a monumental event occurs (such as an unexpected inheritance, a sudden karmic encounter, or an unexplained health crisis) and direct progressions show no exact aspects, converse progressions almost invariably show an exact hard aspect to an angle or luminary.",
      "Minor and Tertiary Progressions: Teal explains the supplementary utility of Tertiary Progressions (one day equals one lunar month, used for refining medical timing) and Minor Progressions (one lunar month equals one year, used for psychological fluctuations)."
    ],
    verbatim_quote: "Converse progressions reach back into the reservoir of time. When direct progressions appear quiet during a catastrophic or miraculous life event, converse progressions will consistently show the exact hit.",
    operational_heuristic: "When an undeniable major life crisis occurs that lacks exact direct progressed aspects, immediately cast the Converse Progressed chart: check for converse planets forming exact aspects within 15 minutes of arc to natal angles.",
    key_motifs: [
      "Converse Progressions (Backward in Time)",
      "Direct vs. Converse Time-Symmetry",
      "Ancestral & Karmic Event Triggers",
      "Tertiary & Minor Progressions",
      "Resolving 'Quiet Chart' Anomalies"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Solar Arc Directions: The 1-Degree-Per-Year Master Megaphone",
    scope: "Chapter 1 & Predictive Foundations: Solar Arc Directions, calculation method, allowable orbs, and interpreting Solar Arc directed planets to natal angles and planets",
    epistemic_status: "SOLAR_ARC_DIRECTIONS & ANGULAR_CONTACTS",
    materiality: "CRITICAL",
    core_theme: "Solar Arc Directions: directing every point in the chart forward by the exact distance the Sun has progressed, delivering unambiguous, loudspeaker turning points.",
    textual_analysis: [
      "Solar Arc Directions represent the most powerful, unambiguous, and reliable tool for forecasting major external turning points. In this system, the exact arc distance traversed by the Secondary Progressed Sun from birth is added to every single planet, cusp, and sensitive point in the natal chart (roughly 1 degree per year of life).",
      "The Voice of the Solar Arc: If Secondary Progressions represent the gentle violin of internal psychological development, Solar Arc Directions are the brass trumpet announcing undeniable external events. When a Solar Arc directed planet forms a hard aspect (conjunction, square, opposition, semi-square, or sesquisquare) to a natal planet or angle, the event manifests in the outer physical world.",
      "Orb Tolerance and Precision: Solar Arc aspects operate with an exceptionally tight orb—typically no more than 1 degree approaching and 1 degree separating. The peak event occurs when the aspect is exact to within a few minutes of arc (a window of approximately 9 to 12 months).",
      "Directed Planets to Angles: The most fateful Solar Arc manifestations occur when directed planets contact the Ascendant, Midheaven, Descendant, or IC. Solar Arc Pluto contacting the Midheaven brings a total career overhaul or sudden elevation to power; Solar Arc Uranus to the Descendant shatters existing partnerships or sparks an unconventional romance; Solar Arc Saturn to the IC forces heavy domestic burdens or parental loss."
    ],
    verbatim_quote: "Solar arcs do not whisper; they shout. When a directed planet hits an angle, you do not need to guess whether something will happen—the world will see it clearly.",
    operational_heuristic: "Scan for Solar Arc directed planets approaching natal angles within 30 minutes of arc: these represent the defining autobiographical milestones of the client's current two-year window.",
    key_motifs: [
      "Solar Arc Directions (1° Per Year)",
      "Tight 1-Degree Orbs",
      "Directed Planets to Natal Angles (Asc/MC)",
      "Loudspeaker External Turning Points",
      "Hard Aspect Geometry (0°, 45°, 90°, 135°, 180°)"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Solar & Lunar Returns: The Annual Blueprint of Manifestation",
    scope: "Chapter 9: Calculating and interpreting the Solar Return, Return Ascendant, Return Sun house placement, Natal-to-Return planetary contacts, and Lunar Returns",
    epistemic_status: "SOLAR_RETURN_CHRONOMETRY & DERIVATIVE_TEMPORAL_HOUSES",
    materiality: "CRITICAL",
    core_theme: "The construction and delineation of the annual Solar Return chart: the Return Ascendant as the year's primary vehicle, and the overlay of return planets onto natal houses.",
    textual_analysis: [
      "A Solar Return occurs each year at the exact moment the transiting Sun returns to the precise degree, minute, and second of its natal position (often occurring a day before or after the calendar birthday). The chart cast for this exact cosmic moment serves as the blueprint for the native's ensuing twelve-month personal year.",
      "The Return Ascendant — The Annual Vehicle: The rising sign and degree of the Solar Return chart reveals the primary energetic lens through which the year will be experienced. If the Return Ascendant falls in Aries, the year will be characterized by rapid initiative, independence, and friction; if in Cancer, the year is dominated by domestic security, emotional vulnerability, and family concerns.",
      "Overlaying the Return on the Natal Chart: Teal emphasizes that a Solar Return cannot be read as a standalone chart; it must be superimposed upon the natal horoscope. When the Solar Return Ascendant falls into a specific natal house, that natal house becomes the supreme arena of annual manifestation. A Return Ascendant falling in the natal 10th house signals a year of massive career visibility and public accountability.",
      "Angular Return Planets: Any planet situated within 5 degrees of a Solar Return angle (especially the 1st or 10th house cusp) becomes the dominant planetary ruler of that year. If Jupiter is conjunct the Return Midheaven, commercial success and professional honors are virtually assured; if Mars is conjunct the Return Ascendant, the native will face physical danger, surgeries, or intense competitive conflicts.",
      "Lunar Returns: Cast every 27.5 days when the Moon returns to its natal degree, the Lunar Return provides a micro-forecast for the specific four-week emotional and domestic cycle."
    ],
    verbatim_quote: "The Solar Return is your personal New Year. Look to where the Return Ascendant falls in your natal chart: that house is the stage upon which the entire drama of your year will be acted out.",
    operational_heuristic: "Identify which natal house is occupied by the Solar Return Ascendant: this reveals the overarching theme of the year, while planets on the Return angles identify the specific actors and forces driving events.",
    key_motifs: [
      "Solar Return Calculation",
      "The Return Ascendant as Annual Lens",
      "Overlaying Return Planets onto Natal Houses",
      "Angular Planets in Returns",
      "Monthly Lunar Returns"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Eclipses and the Nodal Axis: The Accelerators of Karmic Destiny",
    scope: "Chapter 11 & Predictive Foundations: Solar and Lunar Eclipses, Saros series, sensitized degrees, eclipse duration effects, and nodal transits",
    epistemic_status: "ECLIPTIC_OCCULTATION & NODAL_CATALYST_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The explosive catalytic power of solar and lunar eclipses: imprinting sensitive degrees for up to 3.5 years, sweeping away obsolete structures, and precipitating sudden fated shifts.",
    textual_analysis: [
      "Celeste Teal provides an in-depth clinical study of eclipses as the ultimate cosmic wildcards. An eclipse is an astronomical alignment where the Sun, Moon, and Earth align on the Nodal Axis, resulting in the occultation of light. Symbolically and energetically, an eclipse represents a sudden disruption in the standard matrix of time and cause-and-effect.",
      "Solar Eclipses vs. Lunar Eclipses: A Solar Eclipse (New Moon alignment) represents a dramatic, unexpected beginning, a sudden emergence of new opportunities, and the injection of a new energetic frequency. A Lunar Eclipse (Full Moon alignment) represents a climax, a definitive ending, the emotional culmination of a long-standing situation, and the mandatory severance of outdated ties.",
      "Sensitized Degrees & Latent Activation: An eclipse does not exhaust its power on the day it occurs. Teal proves through clinical records that an eclipse imprints a powerful energetic charge upon the specific zodiacal degree where it lands. A Solar Eclipse sensitizes that degree for a duration in years equal to the duration of the eclipse in hours (often up to 3 to 4 years). When a subsequent transit of Mars, Saturn, or a New Moon crosses that sensitized degree, the latent event detonates.",
      "Direct Hits to Natal Points: When an eclipse falls within 2 to 3 degrees of a natal planet, angle, or luminary, a major turning point is guaranteed. An eclipse directly on the natal Sun or Moon forces a profound restructuring of identity, health, or familial relations; an eclipse on the Midheaven or IC causes sudden relocation, career resignation, or public exposure."
    ],
    verbatim_quote: "Eclipses are the great accelerators of fate. They sweep into a life like a sudden storm, blowing away dead wood and opening up clearings for brand-new growth that you never saw coming.",
    operational_heuristic: "Maintain a tracking ledger of all eclipse degrees occurring within 3 degrees of a client's natal planets or angles: watch for subsequent Mars transits or New Moons across that degree to pinpoint the exact week of eruption.",
    key_motifs: [
      "Solar (Beginnings) vs. Lunar (Endings) Eclipses",
      "Sensitized Ecliptic Degrees",
      "The Multi-Year Eclipse Effect Duration",
      "Direct Hits to Luminaries & Angles",
      "Subsequent Transiting Triggers"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Vertex Axis & Midpoint Mechanics: The Electric Axis of Fate & 90-Degree Dials",
    scope: "Chapters 10 & 12: The Vertex and Antivertex (Electric Axis), Destined Encounters, Midpoints, and 90-Degree Dial Applications",
    epistemic_status: "VERTEX_AXIS_DYNAMICS & MIDPOINT_COSMOBIOLOGY",
    materiality: "CRITICAL",
    core_theme: "The specialized tools of fated occurrence: the Vertex/Antivertex as the Axis of Destined Encounters, and midpoints as precise algebraic triggers of life events.",
    textual_analysis: [
      "The Vertex and Antivertex (The Electric Axis): Calculated as the intersection of the Prime Vertical with the Ecliptic in the western and eastern hemispheres, the Vertex axis functions as a secondary electrical Ascendant/Descendant. Teal documents that transits, progressions, and synastry contacts to the Vertex produce events that feel completely 'fated', compulsory, and beyond conscious control.",
      "Destined Encounters: When a romantic partner's personal planets (especially Sun, Moon, Venus, or Mars) conjunct the native's natal Vertex or Antivertex, a profound, hypnotic, and life-altering relationship is ignited. In predictive work, transiting outer planets or progressed planets crossing the Vertex coincide with karmic meetings, sudden appointments, or life-altering turning points.",
      "Midpoint Mechanics (Cosmobiology): Derived from the German Cosmobiology of Reinhold Ebertin, midpoints calculate the mathematical center between any two planets (e.g., Sun/Moon midpoint represents the core integration of conscious purpose and emotional balance; Mars/Saturn midpoint represents acute physical labor, surgical trauma, or endurance).",
      "The 90-Degree Dial: By folding the 360-degree zodiac into a 90-degree dial, all hard aspects (conjunctions 0°, semi-squares 45°, squares 90°, sesquisquares 135°, and oppositions 180°) appear as direct conjunctions. When a progressing or transiting planet crosses a sensitive natal midpoint on the 90-degree dial, the combined archetypal energy of the two base planets is unleashed."
    ],
    verbatim_quote: "The Vertex is the gatekeeper of destiny. You can plan your life with perfect logic, but when a planet hits your Vertex, fate steps in and hands you an encounter that changes your entire trajectory.",
    operational_heuristic: "Always calculate the natal Sun/Moon and Mars/Saturn midpoints: when a transiting or directed planet makes an exact hard contact to these points on a 90-degree dial, expect pivotal milestones in relationship or health.",
    key_motifs: [
      "The Vertex / Antivertex Axis",
      "Destined & Karmic Encounters",
      "Midpoints (Planetary Combinations)",
      "The 90-Degree Cosmobiological Dial",
      "Sun/Moon & Mars/Saturn Midpoint Signatures"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Predicting Love, Marriage & Relationship Milestones: Clinical Signatures",
    scope: "Chapter 3: Timing romance, first dates, marriage proposals, weddings, marital separation, and divorce",
    epistemic_status: "RELATIONAL_CHRONOMETRY & SYNASTRIC_TRIGGERING",
    materiality: "CRITICAL",
    core_theme: "The complete predictive playbook for relational timing: identifying the exact signatures of romantic meetings, marriage proposals, wedding dates, and marital breakups.",
    textual_analysis: [
      "Celeste Teal synthesizes decades of client data to establish the definitive signatures for predicting love, marriage, and divorce. She warns that romance cannot be judged by Venus transits alone, as Venus moves too quickly to guarantee permanent commitment.",
      "Signatures of Marriage & Long-Term Commitment: A wedding or permanent union requires concurring activations across the 5th (romance/courtship) and 7th (legal union/marriage) houses: 1) Secondary Progressed Moon crossing the 7th house cusp or aspecting the 7th house ruler; 2) Solar Arc directed Venus, Jupiter, or 7th house ruler forming a conjunction, trine, or sextile to the Ascendant, Descendant, or Sun; 3) Solar Return chart featuring the Return Ascendant in the natal 7th house, or Return Venus on a Return angle; 4) Transiting Jupiter crossing the Descendant or aspecting natal Venus/Sun.",
      "Timing the First Date and Romantic Meeting: When two people meet who will eventually marry, the day's transits almost always feature transiting Venus, Mars, or the Moon forming exact contacts to the natal Vertex, Ascendant/Descendant axis, or Sun/Moon midpoint of one or both individuals.",
      "Signatures of Divorce & Marital Breakdown: Marital dissolution occurs when hard aspects dismantle the 7th house foundation: 1) Transiting Uranus or Pluto forming a hard square or opposition to the Descendant or 7th house ruler; 2) Progressed Moon traversing the 12th or 8th house, signifying emotional isolation and legal liquidation; 3) An eclipse falling directly upon the 7th house cusp; 4) Solar Return featuring Saturn or Uranus tightly conjoined with the Return 7th house cusp."
    ],
    verbatim_quote: "Marriage is a major restructuring of reality. It requires the blessing of Jupiter or Venus on an angle, the activation of the 7th house by the Progressed Moon, and the willingness of both souls to accept the contract.",
    operational_heuristic: "To forecast marriage, look for the convergence of Progressed Moon in the 7th house (or aspecting the 7th lord), Solar Arc directed Venus/Descendant contact, and a Solar Return highlighting the 7th house: without this trio, engagements often dissolve.",
    key_motifs: [
      "Predictive Signatures of Marriage",
      "7th House Activations (Progressed Moon)",
      "Solar Arc Venus & Descendant Triggers",
      "First Meeting Astrological Alignments",
      "Divorce Signatures (Uranus/Pluto to Descendant)"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Predicting Career, Wealth, Children & Physical Health: Domain Playbooks",
    scope: "Chapters 4, 5, 6, 7: Specialized predictive methodologies for Career Peaks, Financial Windfalls, Childbirth, and Surgical/Health Crises",
    epistemic_status: "APPLIED_DOMAIN_FORECASTING & SOMATIC_TIMING",
    materiality: "CRITICAL",
    core_theme: "Forecasting protocols tailored to specific life sectors: business expansion and wealth acquisition, promotions and fame, pregnancy and childbirth, and health vulnerabilities.",
    textual_analysis: [
      "Teal provides specialized, field-tested rulebooks for the primary secular life inquiries brought to professional astrologers.",
      "Career Peaks & Financial Success (Chapters 4 & 7): Major career elevation occurs when the 10th house (status), 2nd house (income), and 6th house (work) are energized. Signatures include: Progressed Sun or Moon conjoining the Midheaven; Solar Arc Jupiter or Pluto contacting the Midheaven or 2nd house cusp; Transiting Saturn crossing the Midheaven (assuming heavy responsibility and reaching the apex of a 29-year cycle); Solar Return with Sun, Jupiter, or Midheaven ruler in the 10th house. Sudden financial windfalls (lottery or inheritance) involve unexpected Uranus-Jupiter hard contacts triggering the 2nd or 8th house axis, supported by natal promise.",
      "Pregnancy and Childbirth (Chapter 5): Childbirth requires strong 5th house (children/procreation) and 4th house (family expansion/womb) activation: Progressed Moon entering or aspecting planets in the 5th house; Transiting Jupiter or Venus aspecting the 5th house ruler or natal Moon; Solar Return featuring the 5th house ruler on the Ascendant or Moon in the 5th house. Miscarriages and surgical births coincide with hard Mars/Saturn afflictions to the 5th lord or natal Moon.",
      "Accidents, Illness & Surgery (Chapter 6): Physical health crises require afflictions to the 1st house (body), 6th house (acute illness), 8th house (surgery/mortality), or 12th house (hospitalization): Transiting or directed Mars/Saturn forming hard aspects to the Ascendant, Sun, or Moon; an eclipse falling in the 6th or 12th house; Progressed Mars stationing retrograde; hard transit of Uranus bringing sudden traumatic accidents."
    ],
    verbatim_quote: "When Saturn crosses your Midheaven, you reap exactly what you have sown over the past fourteen years: if you worked with integrity, you receive honor and executive power; if you cut corners, you face public exposure.",
    operational_heuristic: "Before predicting major surgical procedures, audit the 6th and 8th house rulers: verify that transiting Mars or Saturn is making an exact hard contact to the Ascendant, and ensure transiting Jupiter is not aspecting to provide protective recovery.",
    key_motifs: [
      "Career Apex (10th House & MC Transits)",
      "Financial Windfalls (2nd/8th House Axis)",
      "Childbirth Timing (5th House & Moon)",
      "Surgical Risk (Mars/Saturn to Ascendant)",
      "Hospitalization Signatures (12th House)"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Master Forensic Case Studies: Synthesizing the Complete Integrated Forecast",
    scope: "Chapters 2, 8, 13: Clinical case studies (Annie's Story, Family Split, Kidnapping, Lottery Winners) demonstrating the step-by-step synthetic forecasting protocol",
    epistemic_status: "INTEGRATED_CLINICAL_FORENSICS & SYNTHETIC_VERIFICATION",
    materiality: "CRITICAL",
    core_theme: "The complete clinical synthesis: walking through real-life case histories from Celeste Teal's consulting practice to observe how multiple techniques converge to pinpoint real events.",
    textual_analysis: [
      "In her masterwork's final chapters, Celeste Teal demonstrates the full power of her integrated methodology through exhaustive, forensic case analyses of real individuals who experienced dramatic life crises and triumphs.",
      "The Kidnapping & Rescue Case: Teal dissects the horoscope of a young girl kidnapped from her bedroom. She tracks the convergence: 1) Secondary Progressed Moon entering the 12th house (captivity and confinement); 2) Solar Arc Mars forming a direct square to natal Pluto; 3) A Solar Eclipse landing within 30 minutes of arc of her natal Ascendant; 4) Transiting Mars hitting her 12th house cusp on the exact night of the abduction; 5) Transiting Jupiter crossing the Midheaven on the day of her miraculous rescue.",
      "The Self-Made Millionaire & Entrepreneur Case: Tracking an entrepreneur who built a multimillion-dollar company from scratch. Teal reveals that his rapid commercial breakthrough coincided with: Progressed Sun conjoining his natal Midheaven, Solar Arc Jupiter trining his natal Sun, and a Solar Return chart with Jupiter exactly on the Return Midheaven in his natal 2nd house.",
      "The Forensic Algorithmic Checklist: Teal leaves the practitioner with an ironclad 6-step checklist for evaluating any upcoming period: 1) Audit natal potential; 2) Check Secondary Progressed Moon sign, house, and major aspects; 3) Check Solar Arc directions to angles and luminaries; 4) Inspect the current Solar Return and its house overlays; 5) Identify all sensitized eclipse degrees; 6) Track current transits of outer planets and Mars triggers to pinpoint the week of manifestation."
    ],
    verbatim_quote: "Astrology is the science of cosmic timing. When you learn to integrate progressions, returns, eclipses, and transits into a single coherent lens, the future ceases to be a frightening fog and becomes a clear, navigable road.",
    operational_heuristic: "Follow Teal's 6-Step Forensic Checklist for every client forecast: never issue a definitive prediction until progressions, returns, and transits tell the exact same story.",
    key_motifs: [
      "Clinical Forensic Case Studies",
      "Kidnapping & Rescue Forensic Analysis",
      "Entrepreneurial Breakthrough Verification",
      "The 6-Step Forensic Algorithmic Checklist",
      "Precision Event Pinpointing"
    ]
  }
];

function generateMarkdown(units) {
  let md = `# Celeste Teal: Predicting Events with Astrology
## Integrated Predictive Techniques · BKRS v2.0 Deep Forensic Master Codex

---

### Archival Metadata
- **Author:** Celeste Teal
- **Publication Date:** 1999 / 2004 (Llewellyn Publications, Llewellyn Worldwide)
- **Subject / Discipline:** Western Predictive Astrology, Forensic Forecasting, Event Timing
- **Core Techniques:** Secondary Progressions, Converse Progressions, Solar Arc Directions, Solar & Lunar Returns, Eclipses, Nodal Axis, Vertex Axis, Midpoints, 90-Degree Dials, Transits
- **Curriculum Role:** The Master Operational Guide for Event Prediction (Book 8 of the Master Curriculum)

---

## Executive Summary: The Multi-Layered Science of Predictive Astrology

Celeste Teal's *Predicting Events with Astrology: Integrated Predictive Techniques* is widely acknowledged by professional practitioners as one of the most comprehensive, lucid, and rigorously organized textbooks on astrological event forecasting ever published.

While beginner astrologers frequently attempt to forecast life events relying solely on daily planetary transits—resulting in widespread predictive failures, false alarms, and missed milestones—Teal establishes the indispensable doctrine of the **Multi-Layered Predictive Hierarchy**. In Teal's methodology, transits do not create events; they merely act as the final mechanical trigger (the second hand on the clock) of events that have already been prepared by the **Secondary Progressions** (the hour hand) and confirmed by the **Solar Returns and Eclipses** (the minute hand).

### The Three Foundational Axioms of Teal's System:
1. **The Natal Promise Axiom:** No event can manifest in an individual's outer life unless it is explicitly promised in the natal birth chart. No transit or progression can bestow what the natal root lacks.
2. **The Predictive Hierarchy:**
   - **Tier 1 (The Hour Hand):** Secondary Progressions (Progressed Moon cycle, progressed planetary stations, sign/house ingresses) and Solar Arc Directions (1° per year hard contacts to angles).
   - **Tier 2 (The Minute Hand):** Annual Solar Returns, Monthly Lunar Returns, and Solar/Lunar Eclipses landing on sensitized natal degrees.
   - **Tier 3 (The Second Hand):** Outer planet environmental transits and fast-moving inner planet / Mars / New Moon daily triggers.
3. **The Rule of Three:** A major life event (marriage, divorce, business launch, bankruptcy, childbirth, surgical crisis) requires at least **three independent, concurring astrological signatures** operating simultaneously across different techniques.

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
    md += `> **Celeste Teal Predictive Verbatim:**\n`;
    md += `> "${u.verbatim_quote}"\n\n`;
    md += `**Operational Heuristic for Practitioners:**\n`;
    md += `*${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs & Terminology:** ${u.key_motifs.map(m => `\`${m}\``).join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  md += `## The Complete Forecasting Field Playbook

### 1. The 6-Step Integrated Forecasting Checklist

When evaluating an upcoming period for a client, proceed strictly through these six sequential steps:

1. **Step 1: Check the Natal Promise**
   - Does the natal chart have the planetary capacity to experience this event?
   - Identify the ruling planets of the houses involved (e.g., 7th for marriage, 10th for career, 5th for children, 8th for surgery).
2. **Step 2: Track Secondary Progressions**
   - Where is the **Progressed Moon**? What house is it traversing? What sign did it recently enter?
   - What phase of the **Progressed Lunation Cycle** is active (e.g., Progressed New Moon vs. Balsamic)?
   - Are any progressed inner planets (Mercury, Venus, Mars) forming exact aspects or stationing?
3. **Step 3: Audit Solar Arc Directions**
   - Direct all planets and angles forward by the Sun's progressed arc (~1° per year).
   - Are any directed planets within **30 to 60 minutes of arc** from forming a hard aspect (0°, 45°, 90°, 135°, 180°) to a natal angle (Asc, MC, Desc, IC) or luminary?
4. **Step 4: Erect the Current Solar Return**
   - What sign and degree is on the **Return Ascendant**?
   - In which **natal house** does the Return Ascendant fall? (This defines the year's primary arena).
   - Are any Return planets tightly conjoined with the Return angles?
5. **Step 5: Identify Active Eclipse Degrees**
   - Did a Solar or Lunar Eclipse fall within 3 degrees of a natal planet or angle within the last 1 to 3 years?
   - Has that sensitized degree been triggered by recent transits?
6. **Step 6: Layer Current Transits as Mechanical Triggers**
   - Identify the heavy background transits of Pluto, Neptune, Uranus, and Saturn.
   - Use the transits of **Mars**, **New Moons**, or **Full Moons** to pinpoint the exact week and day the promised event will erupt into physical reality.

---

## Domain-Specific Predictive Summary Matrix

| Life Domain | Primary Houses Involved | Secondary Progression Triggers | Solar Arc Direction Triggers | Solar Return Key Signatures | Active Transit Triggers |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Marriage / Union** | 7th (Partnership), 5th (Romance) | Progressed Moon in 7th or aspecting 7th lord; Venus aspecting Sun/Moon | Solar Arc Venus, Jupiter, or 7th lord to Asc/Desc | Return Ascendant in natal 7th house; Venus on Return angle | Transiting Jupiter crossing Descendant; Saturn stabilizing 7th |
| **Divorce / Split** | 7th (Partnership), 8th (Settlement), 12th | Progressed Moon in 12th or 8th house; Venus afflicted by Saturn/Mars | Solar Arc Uranus or Pluto to Descendant or 7th lord | Saturn or Uranus on Return 7th house cusp; afflicted Return Moon | Transiting Uranus or Pluto squaring/opposing Descendant |
| **Career Elevation** | 10th (Status), 6th (Work), 1st (Identity) | Progressed Sun or Moon crossing Midheaven; 10th lord fortified | Solar Arc Jupiter or Pluto conjunct Midheaven | Return Sun or Midheaven in 10th house; Jupiter on Return MC | Transiting Saturn crossing MC (apex of cycle); Jupiter in 10th |
| **Financial Windfall** | 2nd (Assets), 8th (Inheritance/Joint), 11th | Progressed Moon in 2nd/8th house aspecting Jupiter/Venus | Solar Arc Jupiter or Pluto to 2nd house cusp or natal Venus | Return Jupiter in 2nd house; Return Venus angular | Transiting Uranus or Jupiter making sudden hard contact to 2nd/8th |
| **Childbirth** | 5th (Procreation), 4th (Family/Womb) | Progressed Moon in 5th house or aspecting 5th lord/Moon | Solar Arc 5th house ruler or Moon to Ascendant/IC | Return 5th house emphasized; Return Moon in 4th/5th house | Transiting Jupiter or Venus aspecting 5th house lord or Moon |
| **Surgery / Health Crisis** | 1st (Vitality), 6th (Illness), 8th (Surgery), 12th | Progressed Mars stationing; Progressed Moon in 6th/8th afflicted | Solar Arc Mars or Saturn to Ascendant, Sun, or Moon | Return Mars or Saturn on Ascendant; afflicted Return 6th house | Transiting Mars or Saturn making exact hard square/opposition to Asc |
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
        <cite>— Celeste Teal, Predicting Events with Astrology</cite>
      </blockquote>
      <div class="heuristic-box">
        <div class="heuristic-header">PREDICTIVE ASTROLOGICAL HEURISTIC</div>
        <div class="heuristic-body">${u.operational_heuristic}</div>
      </div>
      <div class="motifs-bar">
        <strong>Key Forecasting Motifs:</strong>
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
  <title>Predicting Events with Astrology — Celeste Teal | BKRS Master Reader</title>
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
      <div class="doc-kicker">BKRS Deep Forensic Master Codex · Western Predictive Science</div>
      <h1 class="doc-title">Predicting Events with Astrology</h1>
      <div class="doc-author">Celeste Teal · Complete Ten-Unit Integrated Forecasting Masterwork</div>
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

console.log('\nSUCCESS: Celeste Teal: Predicting Events with Astrology successfully built!');
