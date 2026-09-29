/**
 * Builder for Mitchell Earl Gibson, M.D.: Signs of Mental Illness
 * Subtitle: An Astrological and Psychiatric Breakthrough
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | Empirical Psychiatric & Declinational Astrology
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'signs-of-mental-illness-gibson');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Epistemological Breakthrough: Bridging Clinical Psychiatry and Empirical Astrology",
    scope: "Introduction & Foundations: The crisis in conventional biological psychiatry, the limitations of the DSM symptom checklist, Dr. Gibson's clinical credentials as a board-certified psychiatrist, and the establishment of an empirical, statistical astrological research model.",
    epistemic_status: "CLINICAL_PSYCHIATRY_AND_EMPIRICAL_ASTROLOGICAL_FOUNDATIONS",
    materiality: "CRITICAL",
    core_theme: "Synthesizing modern psychiatric diagnostic criteria with rigorous astrological geometry: moving beyond anecdotal sun-sign pop astrology to an objective, measurable, declination-based science of neuro-psychiatric vulnerability.",
    textual_analysis: [
      "Mitchell Earl Gibson, M.D., writing as a board-certified psychiatrist with extensive inpatient and outpatient clinical experience, addresses the foundational epistemic rift between academic medicine and astrology. Modern biological psychiatry excels at descriptive classification (DSM-IV / DSM-5) and symptom management through psychopharmacology, yet it remains largely agnostic regarding the fundamental constitutional etiology of why specific individuals develop severe psychiatric breakdowns under identical environmental stressors.",
      "The Failure of Longitudinal-Only Astrology: Dr. Gibson observed that traditional astrological analysis—relying solely on 360-degree celestial longitude (signs, houses, and standard Ptolemaic aspects like trines and squares)—frequently failed to distinguish psychiatric patients from healthy control subjects. Chronically psychotic individuals often presented charts with harmonious trines and sextiles, while remarkably stable, high-functioning individuals displayed intense longitudinal T-squares and oppositions.",
      "The Rediscovery of the Vertical Dimension (Declination): Gibson's breakthrough occurred when he expanded the natal analysis to include declination—the measurement of planetary distance north or south of the celestial equator. Declination represents the energetic intensity and physiological anchoring of planetary forces, providing the missing link between cosmic geometry and neurobiological predisposition.",
      "The Empirical Method: Rejecting speculative mysticism, Dr. Gibson assembled a rigorous empirical database consisting of hundreds of clinically diagnosed psychiatric patients alongside a healthy, non-psychiatric control population. By applying objective geometric algorithms and statistical frequencies to these groups, he demonstrated that psychiatric conditions possess unmistakable, quantifiable astrological signatures."
    ],
    verbatim_quote: "Astrology is not an art of fatalistic guessing, but an empirical science of celestial mechanics mirroring human neurobiology. When we restore declination and mathematical indexing to our diagnostic toolkit, the hidden architecture of mental illness reveals itself with crystalline clarity.",
    operational_heuristic: "Never evaluate psychiatric vulnerability from longitudinal aspects alone; always calculate the three-dimensional declinational matrix (parallels, contraparallels, and extreme declinations) to evaluate constitutional neuro-psychic stability.",
    key_motifs: [
      "Clinical Psychiatry & DSM Limitations",
      "Empirical Astrological Methodology",
      "The Missing Dimension: Declination",
      "Control Group Comparative Analysis",
      "Neurobiological Correspondence"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "Declinational Mechanics: Parallels, Contraparallels, and Planetary Eclipses",
    scope: "Chapter 1 & Technical Axioms: The mechanics of declination north and south of the celestial equator, the 2°34' empirical orb, parallels as functional conjunctions, contraparallels as functional oppositions, and the phenomenon of planetary eclipses.",
    epistemic_status: "DECLINATIONAL_GEOMETRY_AND_ECLIPSE_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The mathematical and spatial rules of declination: how parallels and contraparallels operate as energetic conduits, and why dual-plane alignment (Planetary Eclipse) triggers acute psychiatric vulnerability.",
    textual_analysis: [
      "Coordinate System Distinction: Longitudinal astrology measures positions along the ecliptic plane (0° Aries to 30° Pisces). Declination measures planetary elevation north (+) or south (-) of the celestial equator (projection of Earth's equator into space). A planet can occupy 15° Aries in longitude while simultaneously sitting at +20° North Declination.",
      "The Parallel Aspect: Occurs when two planets share identical declinations (both North or both South) within an empirical orb of 2 degrees 34 minutes (2°34'). Parallels function with the energetic fusion and intensity of a powerful conjunction, blending the planetary archetypes into an indissoluble psychic circuit.",
      "The Contraparallel Aspect: Occurs when two planets occupy the same numerical degree of declination on opposite sides of the celestial equator (one North, one South) within the 2°34' orb. Contraparallels act as functional oppositions, generating internal polarization, neuro-chemical tension, and unconscious projective dynamics.",
      "The Planetary Eclipse (The Dual-Plane Alignment): One of Dr. Gibson's primary technical breakthroughs is the 'Planetary Eclipse.' This occurs when two planets simultaneously form a conjunction in celestial longitude AND a parallel in celestial declination. This dual-plane alignment focuses celestial energy like a magnifying glass, intensifying planetary interactions by an order of magnitude. If the planets involved are malefic or neuro-disruptive (e.g., Mars-Neptune, Saturn-Moon), the Planetary Eclipse serves as a major predisposer to clinical psychopathology."
    ],
    verbatim_quote: "When two planets unite in both longitude and declination, they form a Planetary Eclipse. This is not merely an aspect; it is a focused laser beam of cosmic force that pierces through the ego's defenses, demanding immediate somatic or psychological integration.",
    operational_heuristic: "Scan every chart for Planetary Eclipses (simultaneous longitudinal conjunction and declinational parallel within 2°34'); treat these points as primary focal centers of extreme psychological pressure and potential symptom eruption.",
    key_motifs: [
      "Celestial Equator vs. Ecliptic",
      "The 2°34' Empirical Declinational Orb",
      "Parallels (Conjunction Equivalents)",
      "Contraparallels (Opposition Equivalents)",
      "Planetary Eclipses (Dual-Plane Alignment)"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "Advanced Declinational Geometry: Multi-Planet Elevations, Hideks, Exdeks, and Proximity Orbs",
    scope: "Chapter 2: Multi-planetary declination networks: Triangles (3 planets), Quads (4 planets), Plenaries (5 planets), and Bands (6+ planets); High Declination (Hidek: 21°–23°30'), Extreme Declination (Exdek: >23°30' Out-of-Bounds), and tight Proximity elevations (<0°30').",
    epistemic_status: "MULTI_PLANETARY_ELEVATIONS_AND_OUT_OF_BOUNDS_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "Complex multi-body declinational clusters and Out-of-Bounds planetary mechanics: how intense energetic compounding overwhelms ego homeostasis and produces clinical psychiatric episodes.",
    textual_analysis: [
      "Multi-Planet Elevations: In clinical populations, single parallels are rarely sufficient to produce severe chronic mental illness. Gibson identifies multi-planet declinational networks where multiple celestial bodies occupy the same declinational band:",
      "1. Triangle Elevation: Three planets locked in mutual parallel or contraparallel alignments within the 2°34' orb. Represents a chronic psychological complex involving three distinct archetypal drives.",
      "2. Quad Elevation: Four planets in declinational linkage. Generates structural psychological rigidity or recurrent manic-depressive cycles.",
      "3. Plenary Elevation: Five planets interacting in declination. Indicates severe systemic psychic destabilization, frequently present in psychotic decompensation and clinical schizophrenia.",
      "4. Band Elevation: Six or more planets engaged in a massive declinational network, acting as an overwhelming psychic vortex that dominates the entire personality.",
      "Hidek (High Declination, 21°00' to 23°30'): Planets reaching high declinations approach the extreme boundary of the Sun's maximum apparent declination (the Tropic of Cancer/Capricorn). These planets express with extraordinary intensity, perfectionism, and driven behavior.",
      "Exdek (Extreme Declination / Out-of-Bounds, >23°30'): When planets exceed the Sun's maximum declination of 23°27', they break free from the solar gravitational and symbolic envelope. Exdek planets operate outside societal norms, exhibiting non-conformist, radical, erratic, or genius behavior. In afflicted charts, Exdek Moon, Mars, or Mercury correlate with uncontrollable emotional volatility, mania, or severe impulse control disorders.",
      "Proximity Elevations (<0°30'): When two planets share declinations within less than half a degree (30 minutes of arc), their synergy becomes visceral and instantaneous, producing near-constant subconscious feedback."
    ],
    verbatim_quote: "When a chart contains a Plenary Elevation or an Out-of-Bounds planet caught in a tight proximity parallel, the individual is operating with a high-voltage current flowing through a household circuit. Without conscious grounding, the emotional fuses inevitably blow.",
    operational_heuristic: "Identify any planet exceeding 23°30' declination (Exdek) or participating in a Quad/Plenary cluster; evaluate whether the native has established stable behavioral containers to prevent manic or impulsive decompensation.",
    key_motifs: [
      "Multi-Planet Elevation Tiers (Triangle, Quad, Plenary, Band)",
      "Hidek (High Declination 21°–23°30')",
      "Exdek (Out-of-Bounds >23°30')",
      "Proximity Orbs (<0°30')",
      "Psychic Overload & Energy Compounding"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Quantitative Psychiatric Metrics: The General Planetary Index (GPI), P/N Ratio, and TEI",
    scope: "Chapter 3: Mathematical formulation of objective diagnostic indices: calculating positive and negative planetary elevations, establishing the General Planetary Index (GPI), the Positive/Negative (P/N) Ratio, and the Temporal Environment Index (TEI).",
    epistemic_status: "QUANTITATIVE_ASTROLOGICAL_METRICS_AND_CONTROL_BENCHMARKS",
    materiality: "CRITICAL",
    core_theme: "Transforming astrological interpretation into reproducible quantitative metrics: how mathematical ratios reliably distinguish healthy control populations from acute psychiatric cohorts.",
    textual_analysis: [
      "The Need for Quantitative Indices: To eliminate subjective interpretive bias, Dr. Gibson devised mathematical scoring systems that convert complex chart configurations into standard numerical indices.",
      "Categorization of Elevations: Planetary interactions are scored as either Positive (harmonious, stabilizing, ego-supportive—e.g., Sun-Jupiter, Venus-Jupiter, stabilizing Saturn-Mercury parallels) or Negative (destabilizing, conflictual, traumatic—e.g., Mars-Saturn, Saturn-Moon, Mars-Uranus, Mercury-Neptune hard parallels and contraparallels).",
      "The General Planetary Index (GPI): The net sum of positive elevations minus negative elevations across the chart. In healthy control populations, GPI exhibits a balanced, resilient positive buffer. In chronic psychiatric populations, GPI is severely depressed or heavily negative.",
      "The Positive-to-Negative (P/N) Ratio: Gibson's most robust diagnostic metric. In the healthy control group, the baseline P/N Ratio averages between 1.20 and 1.50, indicating that psychic resilience and stabilizing mechanisms comfortably outweigh internal stress vectors.",
      "The Psychiatric Deficit Threshold (<0.83): In clinically depressed and psychotic populations, the P/N Ratio collapses below 0.83, frequently falling to 0.40–0.60 in severe schizophrenia. A ratio below 0.83 indicates that internal psychic stressors constantly exceed the ego's buffering capacity.",
      "The Temporal Environment Index (TEI): Formula: TEI = GPI x (P/N Ratio) x 100. This compound metric measures the native's dynamic environmental and neurochemical vulnerability under transiting and progressed stressors, pinpointing periods of acute decompensation."
    ],
    verbatim_quote: "Numbers do not lie. When an individual's P/N ratio drops below 0.83, the psyche is operating under a chronic deficit of emotional oxygen. Psychiatric breakdown is not a moral failing; it is a predictable structural failure under unsupportable energetic pressure.",
    operational_heuristic: "Calculate the native's P/N Ratio by auditing total positive versus negative elevations; if the ratio is below 0.83, prioritize building robust psychological boundaries and medical stabilization before attempting intensive exploratory psychotherapy.",
    key_motifs: [
      "General Planetary Index (GPI)",
      "Positive-to-Negative (P/N) Ratio",
      "Normal Control Baseline (1.20–1.50)",
      "Psychiatric Vulnerability Threshold (<0.83)",
      "Temporal Environment Index (TEI)"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Major Depressive Disorder: Astrological Signatures, Neurobiology, and Declinational Deficits",
    scope: "Chapter 4: Clinical Depression and Unipolar Affective Disorder: diagnostic criteria, serotonin/norepinephrine dysfunction, Saturn-Moon afflictions, Mars-Saturn paralysis, 4th/12th house vulnerability, and severe P/N ratio suppression.",
    epistemic_status: "AFFECTIVE_DISORDERS_AND_DEPRESSIVE_ASTROLOGICAL_BIOMARKERS",
    materiality: "CRITICAL",
    core_theme: "The astrological architecture of clinical depression: how chronic Saturnian inhibition, Lunar depletion, and severe declinational deficits correlate with neurobiological anhedonia and vegetative collapse.",
    textual_analysis: [
      "Clinical and Diagnostic Context: Major Depressive Disorder (MDD) is characterized by persistent depressed mood, severe anhedonia, neurovegetative disruption (insomnia/hypersomnia, psychomotor retardation), guilt, feelings of worthlessness, and suicidal ideation. Dr. Gibson explores how chronic neurochemical depletion (serotonergic and noradrenergic hypo-functioning) corresponds to specific structural chart afflictions.",
      "The Primary Depressive Signature — Saturn-Moon Afflictions: In Gibson's clinical sample, over 70% of major depressive patients exhibited severe Saturn-Moon contacts, particularly declinational contraparallels, parallels, or tight longitudinal squares and oppositions. Saturn acts as a cryogenic compressor upon the Moon's emotional responsiveness, freezing emotional expression and producing deep subconscious despair, somatic coldness, and pervasive emotional isolation.",
      "The Mars-Saturn Paralytic Complex: The second major marker is Mars-Saturn conflict (parallels, contraparallels, squares). Mars represents kinetic drive and assertive dopamine-mediated motivation; Saturn represents inhibition and containment. When locked in conflict, the native's vital energy is turned inward against the self, producing psychomotor retardation, learned helplessness, and agonizing subjective paralysis.",
      "Deficit of Solar and Jovian Buffering: Depressive charts demonstrate a statistically significant absence of supportive Sun-Jupiter or Venus-Jupiter elevations. The psyche lacks the natural buoyant optimism and resilience needed to offset Saturnian gravity.",
      "P/N Ratio in Depression: Gibson's depressive cohort demonstrated a mean P/N ratio well below 0.75, confirming that internal negative elevations overwhelm positive resources by a ratio of more than 4 to 3."
    ],
    verbatim_quote: "Depression is the gravitational collapse of the psychic matrix under unmediated Saturnian pressure. When Saturn binds the Moon and paralyses Mars without Jovian mitigation, the soul is locked in an emotional deep freeze where joy cannot penetrate.",
    operational_heuristic: "When evaluating chronic depression, examine the Moon-Saturn and Mars-Saturn axes; identify whether the native's anhedonia stems from emotional freezing (Saturn-Moon) or inhibited assertive willpower (Mars-Saturn), tailoring interventions accordingly.",
    key_motifs: [
      "Major Depressive Disorder (MDD)",
      "Saturn-Moon Emotional Cryopreservation",
      "Mars-Saturn Psychomotor Paralysis",
      "Suppression of Solar/Jovian Buffers",
      "Depressive P/N Ratio Collapse (<0.75)"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Anxiety Disorders and Panic: Autonomic Hyperarousal, Mars-Uranus, and Cognitive Distortions",
    scope: "Chapter 5: Panic Disorder, Generalized Anxiety Disorder (GAD), and Phobic Disorders: autonomic fight-or-flight overactivation, the Mars-Uranus electrical storm, Mercury-Neptune catastrophizing, and Mercury-Saturn perseverative doubt.",
    epistemic_status: "AUTONOMIC_NERVOUS_SYSTEM_AND_ANXIETY_NEURO_CIRCUITS",
    materiality: "CRITICAL",
    core_theme: "The neuro-astrology of panic and anxiety: how erratic electrical alignments (Mars-Uranus) and cognitive distortions (Mercury-Neptune/Saturn) trigger sympathetic nervous system cascades.",
    textual_analysis: [
      "Clinical and Physiological Profile: Anxiety disorders represent chronic, maladaptive hyperactivity of the sympathetic nervous system and the amygdala-hypothalamic-pituitary-adrenal (HPA) axis. Symptoms include palpitations, diaphoresis, hyperventilation, tremor, terror, anticipatory dread, and cognitive catastrophizing.",
      "The Mars-Uranus Acute Panic Signature: Dr. Gibson discovered a profound correlation between acute Panic Disorder and Mars-Uranus interactions (particularly parallels, contraparallels, and hard aspects). Mars governs sympathetic adrenaline discharge; Uranus governs sudden electrical discharges and disruption of homeostasis. When these planets interact, the nervous system functions like an ungrounded lightning rod, triggering spontaneous paroxysms of panic without external threat.",
      "Mercury-Neptune and Cognitive Catastrophizing: Generalized anxiety and hypochondriasis correlate heavily with Mercury-Neptune hard contacts and declinational elevations. Neptune dissolves Mercury's rational cognitive boundaries, flooding the conscious mind with irrational phobias, vague hypochondriacal terrors, and uncontrollable catastrophizing.",
      "Mercury-Saturn and Perseverative Rumination: Obsessive anxiety and obsessive-compulsive traits correspond to Mercury-Saturn configurations. Saturn contracts and traps Mercury's thought streams in repetitive, looping grooves of doubt, inadequacy, and catastrophic hyper-vigilance.",
      "Out-of-Bounds (Exdek) Planets in Anxiety: Exdek Mars or Mercury occurred with high frequency in panic patients, indicating that the physiological fight-or-flight threshold was calibrated far beyond normal regulatory boundaries.",
    ],
    verbatim_quote: "Panic is an electrical storm within the autonomic nervous system. When Mars and Uranus discharge their current simultaneously into a delicate nervous system, the brain interprets the cosmic surge as an imminent physical threat of dying.",
    operational_heuristic: "In clients with severe panic attacks, check for Mars-Uranus declinational elevations or Exdek Mars; guide the client to understand panic as a physiological neurological surge rather than an existential crisis, emphasizing somatic grounding practices.",
    key_motifs: [
      "Panic Disorder & GAD Neuro-Circuits",
      "Mars-Uranus Autonomic Electrical Surge",
      "Mercury-Neptune Cognitive Catastrophizing",
      "Mercury-Saturn Perseverative Rumination",
      "Out-of-Bounds (Exdek) Nervous Hypersensitivity"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Schizophrenia and Psychotic Disorders: Ego Dissolution, Mercury-Neptune, and Plenary Eclipses",
    scope: "Chapter 6: Schizophrenia (Paranoid, Disorganized, Undifferentiated) and Psychotic Decompensation: reality testing breakdown, auditory hallucinations, delusions, Mercury-Neptune dissolving axes, Mars-Neptune persecutory paranoia, and the prevalence of Plenary Eclipses.",
    epistemic_status: "PSYCHOTIC_DISORDERS_AND_EGO_BOUNDARY_DISSOLUTION",
    materiality: "CRITICAL",
    core_theme: "The astrological architecture of psychotic illness: how multi-planet declinational eclipses and Neptune-afflicted cognitive channels permanently dissolve reality testing and fracture ego coherence.",
    textual_analysis: [
      "Psychiatric Definition: Schizophrenia represents the most profound structural breakdown of human consciousness, characterized by positive symptoms (hallucinations, delusions, thought disorder) and negative symptoms (affective blunting, avolition, social withdrawal). Neurologically, it involves aberrant dopamine transmission, cortical thinning, and impaired thalamic sensory gating.",
      "The Supreme Reality Dissolver — Mercury-Neptune Eclipses: Gibson's research revealed that Mercury-Neptune alignments—especially declinational parallels, Planetary Eclipses, and contraparallels—are the single most common biomarker in schizophrenic cohorts. Neptune dissolves the sensory filtering mechanisms of Mercury, allowing the raw, unfiltered imagery and auditory chatter of the collective unconscious to flood conscious awareness as audible voices and somatic hallucinations.",
      "Mars-Neptune and Persecutory Paranoia: Paranoid Schizophrenia consistently features severe Mars-Neptune interactions. Mars projects aggressive impulses outward, while Neptune distorts reality into grandiose or persecutory conspiracies. The individual genuinely experiences the environment as a hostile, organized conspiracy directed against them.",
      "Moon-Uranus and Ego Fragmentation: Hard Moon-Uranus contacts produce abrupt psychic dissociation, depersonalization, and derealization, preventing the ego from maintaining a stable, cohesive sense of somatic identity.",
      "The Preponderance of Plenary Eclipses and Bands: Unlike neurotic or depressive charts, schizophrenic charts show an overwhelming incidence of Plenary Elevations (5+ planets) and Planetary Eclipses. The psyche is caught in an all-encompassing energetic nexus that prevents ordinary mundane grounding.",
      "P/N Ratio Collapse in Psychosis: In Gibson's schizophrenic cohort, the P/N ratio plummeted to an astounding mean of 0.45, reflecting a complete structural imbalance where internal destabilizers outnumber stabilizing anchors by more than two to one."
    ],
    verbatim_quote: "Schizophrenia is not a loss of intellect; it is the drowning of the conscious ego in the oceanic depths of the collective unconscious. When Neptune dissolves Mercury and Mars-Uranus shatter the lunar vessel, the boundary between the self and the cosmos ceases to exist.",
    operational_heuristic: "Whenever a client chart presents a Mercury-Neptune Planetary Eclipse combined with a Plenary Elevation and a P/N ratio below 0.50, exercise extreme caution: avoid unguided psychedelic therapy or intense Kundalini/occult practices that dissolve ego boundaries.",
    key_motifs: [
      "Schizophrenia & Psychotic Decompensation",
      "Mercury-Neptune Reality Testing Dissolution",
      "Mars-Neptune Persecutory Paranoia",
      "Moon-Uranus Psychic Fragmentation",
      "Plenary Eclipses & P/N Ratio Collapse (0.45)"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Attention Deficit Hyperactivity Disorder (ADHD): Neuro-Cognitive Firing and Mercury-Mars-Uranus",
    scope: "Chapter 7: ADHD (Inattentive, Hyperactive, and Combined Types): prefrontal cortex executive dysfunction, dopamine hypo-regulation, rapid cognitive shifting, Mars-Mercury combustion/friction, Uranus-Mercury hyper-acceleration, and 3rd house dynamics.",
    epistemic_status: "NEURODEVELOPMENTAL_DISORDERS_AND_EXECUTIVE_DYSFUNCTION",
    materiality: "CRITICAL",
    core_theme: "The neuro-astrological mechanics of ADHD: how hyper-accelerated neural transmissions between Mercury, Mars, and Uranus overwhelm prefrontal executive inhibition and disrupt sustained attention.",
    textual_analysis: [
      "Clinical and Neurodevelopmental Profile: ADHD is characterized by chronic deficits in executive functioning, working memory, impulse control, sustained attention, and motor regulation. Modern neuroscience identifies dopamine and norepinephrine signaling deficiencies in the prefrontal cortex and striatal circuits.",
      "The Mars-Mercury Hyperactive Signature: Dr. Gibson established that the dominant marker for ADHD is an afflicted Mars-Mercury relationship (parallels, contraparallels, squares, and tight conjunctions). Mars accelerates cognitive firing rates beyond the prefrontal cortex's capacity for inhibitory control. The brain demands constant high-velocity dopamine stimulation, manifesting as verbal impulsivity, motor restlessness, and rapid boredom.",
      "Uranus-Mercury and Non-Linear Cognitive Switching: Inattentive and combined-type ADHD frequently exhibit Uranus-Mercury parallels or hard aspects. Uranus imparts non-linear, intuitive, lateral processing speeds. The native experiences multiple simultaneous trains of thought, making linear, sequential academic or bureaucratic tasks agonizingly difficult.",
      "The Role of the Third House and Gemini/Sagittarius Axis: Severe afflictions to the 3rd house ruler or prominent planets in mutable air/fire signs correlate with sensory filtering challenges, where the individual cannot tune out extraneous background stimuli.",
      "Exdek (Out-of-Bounds) Mercury and Mars: A striking percentage of ADHD children in Gibson's study possessed Out-of-Bounds Mercury or Mars. Their cognitive and motor operating systems function outside conventional educational standardization, demanding experiential, kinesthetic, and interest-based learning environments."
    ],
    verbatim_quote: "The ADHD brain is not defective; it is a Formula 1 racing engine equipped with bicycle brakes. When Mars and Uranus supercharge Mercury, the mind operates at hyper-velocity, requiring specialized external structures rather than punitive moral judgments.",
    operational_heuristic: "Identify whether an ADHD profile is driven by motor-impulsive restlessness (Mars-Mercury) or distractible intuitive divergence (Uranus-Mercury); design cognitive scaffolding and dopamine-friendly routines that honor their rapid processing rhythm.",
    key_motifs: [
      "ADHD Executive Function Deficits",
      "Mars-Mercury Hyperactive Neural Firing",
      "Uranus-Mercury Non-Linear Distractibility",
      "Out-of-Bounds (Exdek) Cognitive Acceleration",
      "Prefrontal Inhibitory Control Mechanics"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Addictive Disorders and Substance Abuse: Ego Boundary Permeability and The Neptune Complex",
    scope: "Chapter 8: Chemical Dependency, Alcoholism, and Behavioral Addictions: dopamine reward pathway hijacking, oceanic escapism, Moon-Neptune emotional boundary permeability, Venus-Neptune hedonistic craving, and the collapse of Saturnian containment.",
    epistemic_status: "ADDICTION_NEUROBIOLOGY_AND_OCEANIC_ESCAPISM",
    materiality: "CRITICAL",
    core_theme: "The astrological pathology of addiction: how unmediated Neptunian cravings for transcendence and boundary dissolution combine with Saturnian weakness to drive compulsive chemical self-medication.",
    textual_analysis: [
      "Clinical and Psychological Architecture of Addiction: Substance abuse disorders involve neurobiological hijacking of the mesolimbic dopamine pathway, coupled with profound psychological defense mechanisms (denial, rationalization, affective numbing). The addict seeks chemical relief from intolerable psychic pain, emotional emptiness, or existential anxiety.",
      "The Neptune Archetype in Chemical Dependency: Dr. Gibson identifies Neptune as the central planetary archetype governing substance abuse. Neptune rules the spiritual drive for transcendence, mystical unity, and escape from physical pain. In an ungrounded chart, the individual mistakes chemical intoxication for spiritual liberation, attempting to dissolve painful ego boundaries with alcohol, opioids, or cannabis.",
      "Moon-Neptune Afflictions: In the clinical addiction cohort, Moon-Neptune parallels, contraparallels, and squares occur with extraordinary frequency. The Moon represents the somatic emotional core and maternal holding environment. When afflicted by Neptune, the native suffers from an insatiable emotional hunger, chronic emotional sponginess, and hypersensitivity to psychological distress, leading to self-medication.",
      "Venus-Neptune and Hedonistic Escapism: Hard Venus-Neptune alignments drive an idealized craving for effortless ecstasy, aesthetic bliss, and romantic fantasy. Reality consistently fails to match these ethereal ideals, prompting recurrent retreat into addictive fantasy worlds or substance use.",
      "Saturnian Containment Failure: Crucially, Gibson notes that Neptunian afflictions only produce chronic addiction when accompanied by an afflicted, weak, or suppressed Saturn. A healthy Saturn provides somatic boundaries, impulse delay, and frustration tolerance; a damaged Saturn allows Neptunian oceanic cravings to wash away all personal agency.",
      "Jupiter-Neptune Excess: Jupiter-Neptune elevations amplify denial, grandiosity, and the conviction that one is immune to physical or legal consequences."
    ],
    verbatim_quote: "Addiction is an unguided spiritual quest gone tragically astray. The addict does not crave the drug; they crave the dissolution of their unbearable ego boundaries. When Neptune overpowers a fragile Moon without Saturnian walls, chemical oblivion becomes their pseudo-spiritual sanctuary.",
    operational_heuristic: "In addiction evaluation, assess the balance between Neptunian escapism (Moon-Neptune, Venus-Neptune) and Saturnian containment; recovery requires reconstructing the Saturnian boundary system and redirecting Neptune toward legitimate spiritual and creative outlets.",
    key_motifs: [
      "Addiction & Chemical Dependency Architecture",
      "The Neptune Complex: Pseudo-Transcendence",
      "Moon-Neptune Hypersensitivity & Self-Medication",
      "Venus-Neptune Hedonistic Escapism",
      "Saturnian Containment Breakdown"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Clinical Case Studies, Forensic Psychiatry, and The Future of Astrological Medicine",
    scope: "Chapters 9–11 & Synthesizing Conclusion: Famous clinical and forensic psychiatric case studies (Ernest Hemingway, Vincent van Gogh, Judy Garland, Howard Hughes, Charles Manson), timing acute decompensation via transits/progressions, ethical boundaries, and the future integration of astrology into clinical medicine.",
    epistemic_status: "CLINICAL_CASE_VALIDATION_AND_PROGNOSTIC_ETHICS",
    materiality: "CRITICAL",
    core_theme: "Empirical validation through historical and forensic case studies: tracking the timing of psychiatric breakdown, suicidal crises, and establishing rigorous ethical boundaries for astrological medicine.",
    textual_analysis: [
      "Forensic and Clinical Case Validation: Dr. Gibson demonstrates the diagnostic precision of his system through detailed psychiatric post-mortems of celebrated historical and forensic cases:",
      "1. Ernest Hemingway: Suffered from severe recurrent depression, paranoia, and died by suicide. Chart reveals a brutal Saturn-Moon contraparallel, Mars-Saturn conflict, and an afflicted 8th/12th house axis, producing a severely depressed P/N ratio (<0.65) that collapsed completely during his fatal depressive spiral in 1961.",
      "2. Vincent van Gogh: Documented bipolar psychosis and severe psychotic episodes. Chart features a Mercury-Neptune Planetary Eclipse coupled with Mars-Venus-Saturn elevations and Out-of-Bounds planets, perfectly explaining his intense sensory synesthesia, auditory hallucinations, self-mutilation, and tragic suicide.",
      "3. Judy Garland: Chronic severe chemical dependency, eating disorders, and suicide. Manifested a classic Moon-Neptune and Venus-Neptune declinational elevation network with complete absence of Saturnian grounding, leaving her vulnerable to catastrophic pharmaceutical abuse.",
      "4. Howard Hughes: Severe obsessive-compulsive disorder and paranoid germophobia. Chart displays intense Mercury-Saturn proximity parallels locked with Mars-Uranus, driving extreme cognitive rigidity, ritualistic isolation, and terror of contamination.",
      "5. Charles Manson: Malignant antisocial personality disorder with paranoid psychotic features. Revealed a catastrophic Plenary Eclipse involving Mars-Neptune-Pluto, mobilizing grandiose apocalyptic delusions and sociopathic manipulation.",
      "Timing Decompensation and Crisis Points: Gibson shows that acute psychiatric breaks do not occur randomly. They are triggered when transiting or progressed heavy planets (Saturn, Uranus, Neptune, Pluto) form exact declinational parallels or contraparallels to natal eclipse points or when the Temporal Environment Index (TEI) plummets into critical deficit territory.",
      "Ethical Rules of Astrological Psychiatry: Dr. Gibson strictly warns practitioners: astrological indicators are biological and psychological vulnerabilities, NEVER fatalistic guarantees. A severe signature can manifest as profound creative genius (van Gogh) or clinical psychosis. The astrologer must never diagnose, prescribe, or alter psychiatric medications, but should work collaboratively with licensed medical professionals to optimize patient care."
    ],
    verbatim_quote: "Astrology reveals the energetic blueprint of the human soul, but consciousness determines how that blueprint is built. The identical Mercury-Neptune eclipse that drives one soul into the asylum can inspire another to paint the Starry Night.",
    operational_heuristic: "Never deliver fatalistic psychiatric diagnoses to clients; frame challenging declinational configurations as intense high-voltage energetic gifts that require specialized clinical grounding, healthy routines, and professional medical support.",
    key_motifs: [
      "Clinical Forensic Case Studies (Hemingway, Van Gogh, Garland)",
      "Timing Acute Episodes via Declinational Transits",
      "Dynamic Temporal Environment Index (TEI) Triggers",
      "Vulnerability vs. Determinism: The Creative Sublimation",
      "Ethical Standards of Astrological Medicine"
    ]
  }
];

// 1. Output knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log('Successfully wrote knowledge-units.json for Signs of Mental Illness');

// 2. Generate master-notes.md
let md = `# Signs of Mental Illness: An Astrological and Psychiatric Breakthrough
**Author:** Mitchell Earl Gibson, M.D.  
**First Published:** 1998 (Llewellyn Publications)  
**Discipline:** Empirical Psychiatric Astrology, Declinational Astrology, Neuro-Astrology, Statistical Diagnostic Medicine  
**Standard:** BKRS v2.0 Production Master Codex  
**Codex Scope:** 10 Comprehensive Units | Full Book Reconstruction

---

## Executive Architectural Overview

In *Signs of Mental Illness: An Astrological and Psychiatric Breakthrough*, Mitchell Earl Gibson, M.D.—a board-certified psychiatrist with extensive clinical experience in inpatient hospital units and private practice—establishes the world's first statistically rigorous, clinically validated model bridging modern psychiatry and astrology.

Conventional biological psychiatry excels at descriptive classification (utilizing the DSM diagnostic criteria) and psychopharmacological symptom management, yet it remains fundamentally agnostic regarding constitutional etiology: *Why does an individual develop schizophrenia, severe unipolar depression, panic disorder, ADHD, or chemical dependency under environmental stressors that leave another person entirely unaffected?*

Conversely, popular and traditional longitudinal astrology (relying solely on 360-degree celestial longitude, signs, houses, and Ptolemaic aspects like trines and squares) has repeatedly failed empirical verification tests. Mentally shattered psychotic patients often present birth charts laden with harmonious trines and sextiles, while remarkably stable, resilient leaders frequently carry aggressive longitudinal grand crosses and T-squares.

Dr. Gibson's revolutionary breakthrough was the systematic rediscovery and empirical mathematical formulation of **Celestial Declination**—the vertical measurement of planetary elevation north or south of the celestial equator:

1. **The Vertical Dimension:** Declination measures planetary energy as it anchors into the somatic and neurobiological substratum of the individual.
2. **Parallels & Contraparallels:** Operating within an empirical orb of 2°34', parallels function with the explosive fusion of conjunctions, while contraparallels operate as internal psychic polarizations equivalent to oppositions.
3. **The Planetary Eclipse:** When two planets unite in both celestial longitude (conjunction) AND celestial declination (parallel) simultaneously, they form a dual-plane alignment that acts as a concentrated laser beam of cosmic force, serving as a primary focal point for clinical psychopathology or transcendent creative genius.
4. **Multi-Planet Elevations & Out-of-Bounds (Exdek):** Categorization of complex declinational networks into Triangles (3 planets), Quads (4 planets), Plenaries (5 planets), and Bands (6+ planets), along with planets exceeding 23°30' declination (Out-of-Bounds/Exdek), which operate outside normal neuro-regulatory boundaries.
5. **Objective Quantitative Metrics:** The formulation of the **General Planetary Index (GPI)**, the **Positive-to-Negative (P/N) Ratio**, and the **Temporal Environment Index (TEI)**. While healthy control populations exhibit a balanced P/N ratio between 1.20 and 1.50, severe clinical populations consistently fall below the psychiatric deficit threshold of **0.83** (plunging to 0.40–0.60 in schizophrenia and severe affective psychoses).

This codex reconstructs Dr. Gibson's complete clinical and statistical framework across ten exhaustive knowledge units, providing an indispensable foundation for psychiatric diagnostics, neuro-astrological counseling, and the ethical integration of celestial mechanics into modern behavioral health.

---

## The 10 Knowledge Units: Deep Structural Reconstruction

`;

units.forEach(u => {
  md += `### Unit ${u.unit_number}: ${u.title}\n\n`;
  md += `- **Unit ID:** \`${u.unit_id}\`\n`;
  md += `- **Scope & Textual Anchor:** ${u.scope}\n`;
  md += `- **Epistemic Classification:** \`${u.epistemic_status}\`\n`;
  md += `- **Materiality Level:** **${u.materiality}**\n`;
  md += `- **Core Theme:** ${u.core_theme}\n\n`;
  
  md += `#### Exhaustive Textual & Clinical Analysis\n\n`;
  u.textual_analysis.forEach(para => {
    md += `${para}\n\n`;
  });

  md += `#### Canonical Textual Verbatim\n`;
  md += `> "${u.verbatim_quote}"\n\n`;

  md += `#### Operational Diagnostic & Clinical Heuristic\n`;
  md += `* **Clinical Heuristic:** ${u.operational_heuristic}\n\n`;

  md += `#### Key Conceptual Motifs & Index Terms\n`;
  u.key_motifs.forEach(m => {
    md += `- \`${m}\`\n`;
  });
  md += `\n---\n\n`;
});

md += `## Synthesis: Comparative Psychiatric Diagnostic Matrix

The following reference matrix synthesizes Dr. Mitchell Earl Gibson's clinical findings across the five major psychiatric categories compared against the healthy control baseline:

| Diagnostic Category | Primary Astrological Biomarkers & Declinational Signatures | Dominant Planetary Archetypes | Mean P/N Ratio | Neurological & Behavioral Manifestation |
| :--- | :--- | :--- | :--- | :--- |
| **Healthy Control Population** | Balanced positive elevations; absence of tight unmediated malefic eclipses; robust Sun/Jupiter buffers | Sun, Jupiter, Venus, balanced Saturn | **1.20 – 1.50** | Normal emotional resilience; intact executive function; functional coping mechanisms; adaptive stress buffering |
| **Major Depressive Disorder (MDD)** | Moon-Saturn contraparallels & parallels; Mars-Saturn conflicts; deficit of Sun/Jupiter elevations | Saturn, Moon, afflicted Mars | **0.65 – 0.75** (Critical Deficit) | Serotonergic/noradrenergic depletion; vegetative psychomotor retardation; anhedonia; pervasive existential despair |
| **Anxiety & Panic Disorders** | Mars-Uranus parallels & hard aspects; Mercury-Neptune cognitive blurring; Mercury-Saturn rumination; Exdek Mars/Mercury | Mars, Uranus, Mercury, Neptune | **0.75 – 0.85** | Sympathetic HPA-axis hyperactivation; sudden paroxysmal terror; cognitive catastrophizing; somatic panic surges |
| **Schizophrenia & Psychoses** | Mercury-Neptune Planetary Eclipses; Mars-Neptune paranoia; Moon-Uranus ego fragmentation; Plenary Elevations | Neptune, Mercury, Mars, Uranus | **0.40 – 0.50** (Catastrophic Collapse) | Thalamic sensory gating failure; auditory hallucinations; persecutory delusions; dissolution of conscious reality testing |
| **ADHD / ADD (Neurodevelopmental)** | Mars-Mercury tight parallels & conflicts; Uranus-Mercury rapid lateral switching; Out-of-Bounds (Exdek) planets | Mercury, Mars, Uranus, Mutable Air/Fire | **0.80 – 0.95** | Prefrontal dopamine/norepinephrine hypo-regulation; executive dysfunction; motor restlessness; non-linear hyper-cognition |
| **Addictive Disorders & Chemical Dependency** | Moon-Neptune emotional sponginess; Venus-Neptune hedonistic craving; Jupiter-Neptune excess; Saturnian containment failure | Neptune, Moon, Venus, weak Saturn | **0.60 – 0.75** | Mesolimbic dopamine hijacking; pseudo-mystical oceanic escapism; lack of somatic boundaries; compulsive chemical self-medication |

---

## Declinational Mechanics Reference Guide

### 1. Aspects and Orbs in Declination
- **Measurement Datum:** Celestial Equator ($0^\\circ$). Distance North ($+$) or South ($-$).
- **Standard Aspect Orb:** Exactly $2^\\circ 34'$ of arc ($2.5667^\\circ$).
- **Proximity Aspect Orb:** Less than $0^\\circ 30'$ of arc ($0.5^\\circ$), indicating acute, visceral subconscious synchronization.
- **Parallel ($//$):** Both bodies located at the same declination degree on the SAME side of the equator (e.g., Sun at $+18^\\circ 12'$, Jupiter at $+19^\\circ 45'$). Operates with the power and fusion of an intense conjunction.
- **Contraparallel ($\\\\#$):** Two bodies located at the same declination degree on OPPOSITE sides of the equator (e.g., Moon at $+15^\\circ 20'$, Saturn at $-16^\\circ 05'$). Operates as an internal polarization, tension, and externalizing projection equivalent to an opposition.

### 2. Planetary Eclipses
- A **Planetary Eclipse** requires that two celestial bodies simultaneously form:
  1. A conjunction in celestial longitude within standard longitudinal orb.
  2. A parallel in celestial declination within the $2^\\circ 34'$ orb.
- **Binary Eclipse:** Three planets simultaneously conjunct in longitude and parallel in declination.
- **Plenary Eclipse:** Four or more planets forming simultaneous conjunction and parallel. Represents an overwhelming concentration of cosmic energy that dominates the entire clinical picture.

### 3. Out-of-Bounds (Exdek) Dynamics
- The Sun's maximum apparent declination is bounded by the obliquity of the ecliptic ($23^\\circ 27'$).
- **Hidek (High Declination):** Planets located between $21^\\circ 00'$ and $23^\\circ 30'$ North or South. Represents heightened drive, perfectionism, and acute focal intensity.
- **Exdek (Extreme Declination / Out-of-Bounds):** Planets exceeding $23^\\circ 30'$ North or South. The planet escapes the regulating gravitational and symbolic boundary of the Sun, functioning in an erratic, radical, genius, or lawless manner. Most critical when occupied by Moon (emotional instability/mania), Mars (uncontrolled aggression/hyper-reactivity), or Mercury (eccentric, hyper-accelerated cognition).

### 4. Mathematical Formulae for Quantitative Diagnostic Audits
$$\\text{GPI} = \\sum \\text{Positive Elevations} - \\sum \\text{Negative Elevations}$$
$$\\text{P/N Ratio} = \\frac{\\sum \\text{Positive Elevations}}{\\sum \\text{Negative Elevations}}$$
$$\\text{TEI} = \\text{GPI} \\times \\left(\\frac{\\sum \\text{Positive}}{\\sum \\text{Negative}}\\right) \\times 100$$

- A calculated **P/N Ratio $< 0.83$** serves as the definitive clinical warning threshold for psychiatric vulnerability and affective/psychotic decompensation.

---

## Ethical Principles of Astrological Medicine

1. **Non-Determinism:** Astrological signatures indicate constitutional bio-energetic and psychological *vulnerability*, NEVER unavoidable destiny. A Mercury-Neptune eclipse can produce clinical schizophrenia or monumental artistic genius (e.g., Vincent van Gogh's masterworks).
2. **Scope of Practice:** Astrologers must never practice medicine or psychiatry without formal medical licensure. Never prescribe, diagnose, or advise clients to discontinue or alter psychiatric medications.
3. **Collaborative Healthcare:** Astrological insights should serve as an adjunctive, diagnostic roadmap to assist licensed psychotherapists, psychiatrists, and holistic medical providers in understanding the native's innate constitutional architecture.
4. **Compassion & De-Stigmatization:** Mental illness is not a moral failing or spiritual deficiency. By demonstrating that psychological disorders correspond to measurable celestial geometries and neurobiological stress patterns, Dr. Gibson's work frees patients from toxic shame and fosters genuine healing.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log('Successfully wrote master-notes.md for Signs of Mental Illness (' + md.length + ' chars)');

// 3. Generate index.html (Reader)
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signs of Mental Illness | Mitchell Earl Gibson, M.D. | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }
    
    .badge-clinical {
      background: #7f1d1d;
      color: #fef2f2;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .stat-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .stat-card {
      background: rgba(0, 0, 0, 0.03);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
    }

    [data-theme="dark"] .stat-card {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.08);
    }

    .stat-value {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      color: #991b1b;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .formula-box {
      background: rgba(0, 0, 0, 0.04);
      border-left: 4px solid #991b1b;
      padding: 1rem 1.25rem;
      margin: 1.25rem 0;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      border-radius: 0 4px 4px 0;
    }

    [data-theme="dark"] .formula-box {
      background: rgba(255, 255, 255, 0.04);
      border-left-color: #ef4444;
    }

    .diagnostic-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    .diagnostic-table th, .diagnostic-table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    [data-theme="dark"] .diagnostic-table th, [data-theme="dark"] .diagnostic-table td {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .diagnostic-table th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }

    [data-theme="dark"] .diagnostic-table th {
      background: rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../../index.html" class="back-link">← Master Index</a>
          <span class="badge-clinical">Psychiatric Neuro-Astrology</span>
        </div>
        <h1 class="book-title">Signs of Mental Illness</h1>
        <p class="book-subtitle">An Astrological and Psychiatric Breakthrough • Mitchell Earl Gibson, M.D.</p>
        
        <div class="reader-metadata-bar">
          <span><strong>Author:</strong> Dr. Mitchell Earl Gibson (Board-Certified Psychiatrist)</span>
          <span><strong>Focus:</strong> Declinational Astrology, Eclipses, P/N Ratio & Psychiatric Biomarkers</span>
          <span><strong>Standard:</strong> BKRS v2.0 Production Master (10 Units)</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="reading">Continuous Reader</button>
          <button class="tab-button" data-tab="analytical">Analytical Units</button>
          <button class="tab-button" data-tab="declinational">Declinational Matrix</button>
          <button class="tab-button" data-tab="search">Search Codex</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- CONTINUOUS READING VIEW -->
      <section id="view-reading" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Psychiatric-Astrological Paradigm Shift</h2>
            <p>In this landmark treatise, board-certified psychiatrist Mitchell Earl Gibson, M.D. bridges biological psychiatry with empirical declinational astrology. By measuring the vertical elevation of planets north and south of the celestial equator (parallels, contraparallels, and dual-plane planetary eclipses), Dr. Gibson isolates the objective celestial signatures of major depression, panic disorders, schizophrenia, ADHD, and chemical addiction.</p>
          </div>

          <div class="stat-card-grid">
            <div class="stat-card">
              <div class="stat-value">2°34'</div>
              <div class="stat-label">Empirical Declinational Orb</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">&lt; 0.83</div>
              <div class="stat-label">Psychiatric Deficit Threshold</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">0.45</div>
              <div class="stat-label">Schizophrenia P/N Ratio Mean</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">&gt; 23°30'</div>
              <div class="stat-label">Out-of-Bounds (Exdek) Boundary</div>
            </div>
          </div>

          <hr class="section-divider">

          ${units.map(u => `
            <div class="unit-block" id="unit-block-${u.unit_id}">
              <header class="unit-header">
                <span class="unit-number">Unit ${u.unit_number.toString().padStart(2, '0')}</span>
                <span class="unit-materiality ${u.materiality.toLowerCase()}">${u.materiality}</span>
                <h3 class="unit-heading">${u.title}</h3>
                <p class="unit-scope"><em>${u.scope}</em></p>
              </header>

              <div class="unit-content">
                <p class="unit-theme"><strong>Core Principle:</strong> ${u.core_theme}</p>
                
                ${u.textual_analysis.map(para => `<p>${para}</p>`).join('')}

                <blockquote class="unit-quote">
                  "${u.verbatim_quote}"
                </blockquote>

                <div class="heuristic-callout">
                  <strong>Clinical & Diagnostic Heuristic:</strong> ${u.operational_heuristic}
                </div>

                <div class="motif-cloud">
                  ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join('')}
                </div>
              </div>
            </div>
            <hr class="unit-divider">
          `).join('')}
        </article>
      </section>

      <!-- ANALYTICAL UNITS VIEW -->
      <section id="view-analytical" class="tab-content">
        <div class="analytical-grid">
          ${units.map(u => `
            <div class="analytical-card">
              <div class="card-top">
                <span class="badge">Unit ${u.unit_number}</span>
                <span class="status-tag">${u.epistemic_status}</span>
              </div>
              <h4>${u.title}</h4>
              <p class="card-desc">${u.core_theme}</p>
              <div class="card-meta">
                <strong>Key Heuristic:</strong>
                <p class="heuristic-text">${u.operational_heuristic}</p>
              </div>
              <ul class="motif-list">
                ${u.key_motifs.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- DECLINATIONAL MATRIX VIEW -->
      <section id="view-declinational" class="tab-content">
        <article class="reader-prose">
          <h3>The Psychiatric Diagnostic Matrix</h3>
          <p>Comparative summary of Dr. Mitchell Earl Gibson's clinical findings across major diagnostic categories:</p>

          <table class="diagnostic-table">
            <thead>
              <tr>
                <th>Diagnostic Condition</th>
                <th>Primary Astrological Biomarkers</th>
                <th>Dominant Archetypes</th>
                <th>P/N Ratio</th>
                <th>Neuro-Behavioral Manifestation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Healthy Control Group</strong></td>
                <td>Balanced positive elevations; absence of tight unmediated malefic eclipses; robust Sun/Jupiter buffers</td>
                <td>Sun, Jupiter, Venus</td>
                <td><strong>1.20 – 1.50</strong></td>
                <td>Adaptive psychological resilience; intact executive function; functional stress buffering</td>
              </tr>
              <tr>
                <td><strong>Major Depressive Disorder</strong></td>
                <td>Saturn-Moon contraparallels & parallels; Mars-Saturn conflicts; deficit of Sun/Jupiter elevations</td>
                <td>Saturn, Moon, Mars</td>
                <td><strong>0.65 – 0.75</strong></td>
                <td>Serotonergic/noradrenergic depletion; vegetative psychomotor retardation; anhedonia</td>
              </tr>
              <tr>
                <td><strong>Anxiety & Panic Disorders</strong></td>
                <td>Mars-Uranus parallels & hard aspects; Mercury-Neptune cognitive blurring; Mercury-Saturn rumination; Exdek Mars/Mercury</td>
                <td>Mars, Uranus, Mercury, Neptune</td>
                <td><strong>0.75 – 0.85</strong></td>
                <td>Sympathetic nervous hyperactivation; acute paroxysmal terror; cognitive catastrophizing</td>
              </tr>
              <tr>
                <td><strong>Schizophrenia & Psychoses</strong></td>
                <td>Mercury-Neptune Planetary Eclipses; Mars-Neptune paranoia; Moon-Uranus ego fragmentation; Plenary Elevations</td>
                <td>Neptune, Mercury, Mars, Uranus</td>
                <td><strong>0.40 – 0.50</strong></td>
                <td>Thalamic sensory gating failure; auditory hallucinations; persecutory delusions; ego boundary collapse</td>
              </tr>
              <tr>
                <td><strong>ADHD (Inattentive/Hyperactive)</strong></td>
                <td>Mars-Mercury tight parallels & conflicts; Uranus-Mercury rapid lateral switching; Out-of-Bounds (Exdek) planets</td>
                <td>Mercury, Mars, Uranus</td>
                <td><strong>0.80 – 0.95</strong></td>
                <td>Prefrontal dopamine hypo-regulation; executive dysfunction; motor restlessness; lateral processing</td>
              </tr>
              <tr>
                <td><strong>Addictive Disorders</strong></td>
                <td>Moon-Neptune emotional sponginess; Venus-Neptune hedonistic craving; Jupiter-Neptune excess; Saturnian containment failure</td>
                <td>Neptune, Moon, Venus, weak Saturn</td>
                <td><strong>0.60 – 0.75</strong></td>
                <td>Mesolimbic dopamine hijacking; pseudo-mystical oceanic escapism; lack of somatic boundaries</td>
              </tr>
            </tbody>
          </table>

          <h3>Mathematical Diagnostic Formulae</h3>
          <div class="formula-box">
            <strong>1. General Planetary Index (GPI):</strong><br>
            GPI = Total Positive Elevations - Total Negative Elevations
          </div>
          <div class="formula-box">
            <strong>2. Positive/Negative (P/N) Ratio:</strong><br>
            P/N Ratio = (Total Positive Elevations) / (Total Negative Elevations)<br>
            <em>Clinical Threshold: Values &lt; 0.83 indicate pathological vulnerability.</em>
          </div>
          <div class="formula-box">
            <strong>3. Temporal Environment Index (TEI):</strong><br>
            TEI = GPI × (P/N Ratio) × 100<br>
            <em>Measures acute dynamic vulnerability under transiting and progressed stressors.</em>
          </div>
        </article>
      </section>

      <!-- SEARCH VIEW -->
      <section id="view-search" class="tab-content">
        <div class="search-container">
          <input type="text" id="codex-search-input" placeholder="Search psychiatric conditions, declination concepts, planetary aspects..." aria-label="Search codex">
          <div id="search-results" class="search-results"></div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Source: <em>Signs of Mental Illness: An Astrological and Psychiatric Breakthrough</em> by Mitchell Earl Gibson, M.D. (Llewellyn Publications, 1998).</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    // Tab switching logic
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

    // Client-side search implementation
    const searchInput = document.getElementById('codex-search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
      const unitsData = ${JSON.stringify(units)};
      
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchResults.innerHTML = '<p class="search-prompt">Type at least 2 characters to search across all units...</p>';
          return;
        }

        const matches = unitsData.filter(u => {
          return u.title.toLowerCase().includes(query) ||
                 u.core_theme.toLowerCase().includes(query) ||
                 u.operational_heuristic.toLowerCase().includes(query) ||
                 u.key_motifs.some(m => m.toLowerCase().includes(query)) ||
                 u.textual_analysis.some(p => p.toLowerCase().includes(query));
        });

        if (matches.length === 0) {
          searchResults.innerHTML = '<p class="search-prompt">No matching units found for "' + query + '".</p>';
          return;
        }

        searchResults.innerHTML = matches.map(m => \`
          <div class="search-result-item">
            <h4><a href="#unit-block-\${m.unit_id}">Unit \${m.unit_number}: \${m.title}</a></h4>
            <p><strong>Theme:</strong> \${m.core_theme}</p>
            <p><strong>Heuristic:</strong> \${m.operational_heuristic}</p>
            <div class="result-tags">
              \${m.key_motifs.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
            </div>
          </div>
        \`).join('');
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Successfully wrote index.html for Signs of Mental Illness (' + htmlContent.length + ' chars)');
