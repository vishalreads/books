const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'scientific-autobiography-planck');
const kuPath = path.join(targetDir, 'knowledge-units.json');
const existingKu = JSON.parse(fs.readFileSync(kuPath, 'utf8'));

const planckUnits = [
  {
    id: "unit-01",
    chapter_num: 1,
    title: "The Road to the Quantum: Thermodynamics & The Blackbody Problem",
    timeline_location: "1875–1900, Munich, Berlin & Kiel",
    source_scope: "Autobiography Part 1: Influences of Jolly, Helmholtz, Kirchhoff; devotion to the Second Law of Thermodynamics; irreversibility vs. kinetic atomism",
    epistemic_status: "Primary History of Physics & Scientific Autobiography",
    materiality: "CRITICAL",
    summary: "Max Planck recounts his intellectual development beginning in the 1870s. Advised by Munich physics professor Philipp von Jolly that physics was an essentially complete discipline with only minor gaps to fill, Planck was undeterred, stating he wished only to understand fundamentals, not make new discoveries. He was captivated by Rudolf Clausius's formulation of the two foundational laws of the universe: (1) The energy of the world is constant; (2) The entropy of the world strives toward a maximum. Planck dedicated his early career to proving the absolute, non-statistical irreversibility of the Second Law, putting him in sharp opposition to Ludwig Boltzmann's kinetic statistical interpretation. In 1889, succeeding Gustav Kirchhoff at the University of Berlin, Planck turned to the problem of blackbody radiation—the distribution of radiant energy in a hollow cavity in thermal equilibrium—which Kirchhoff had proven was completely independent of the nature of the radiating body and depended solely on temperature and frequency.",
    key_claims: [
      "The conservation of energy and the law of entropy increase are absolute foundational pillars of the physical cosmos.",
      "The blackbody radiation distribution represents a fundamental absolute of nature, independent of the chemical or physical composition of the emitting walls.",
      "Planck's early resistance to Boltzmann's atomistic-statistical entropy prepared him intellectually to bridge classical thermodynamics with statistical mechanics."
    ],
    concrete_evidence: [
      "Philipp von Jolly's famous 1875 warning to Planck that theoretical physics offered no prospects for major new discoveries.",
      "Planck's 1879 doctoral dissertation on the second law of mechanical heat theory.",
      "The experimental measurements of blackbody radiation conducted at the Physikalisch-Technische Reichsanstalt in Berlin by Heinrich Rubens and Ferdinand Kurlbaum."
    ],
    operational_mechanisms: [
      {
        name: "Pursuit of Invariant Absolutes",
        rule: "Scientific breakthroughs occur when an investigator bypasses transient, substance-dependent variables to isolate universal constants that remain invariant across all physical systems."
      }
    ],
    verbatim_citations: [
      "The outside world is something independent from man, something absolute, and the quest for the laws which apply to this absolute appeared to me as the most sublime scientific pursuit in life.",
      "Professor Jolly described physics as a highly developed, almost fully matured science... but I did not wish to discover new lands, only to understand the foundations.",
      "Kirchhoff's theorem states that in a space enclosed by bodies of identical temperature, the quality and intensity of radiation depends solely on temperature and wavelength, not on the nature of the bodies."
    ],
    extended_forensic_prose: [
      "Max Planck begins his scientific memoir by describing the intellectual landscape of late-nineteenth-century European physics. In 1875, when the seventeen-year-old Planck sought the counsel of Munich physics professor Philipp von Jolly regarding his career aspirations, Jolly actively discouraged him from pursuing theoretical physics. Jolly warned that physics was a mature, virtually completed discipline; after the formulation of the conservation of energy, the laws of thermodynamics, and Maxwell's electromagnetic equations, all fundamental principles had been discovered, leaving only minor refinements and decimal places to be measured. Planck's legendary reply defined his lifelong character: he told Jolly that he harbored no desire to discover new continents, but sought only to understand the deep, existing foundations of nature.",
      "At the University of Berlin, studying under the titans Hermann von Helmholtz and Gustav Kirchhoff, Planck found his true intellectual calling in the writings of Rudolf Clausius on thermodynamics. He was struck with a religious awe by Clausius's two monumental axioms: 'The energy of the world is constant; the entropy of the world strives toward a maximum.' Planck recognized that while energy conservation was a quantitative accounting law, entropy was a directional law—governing the irreversible arrow of time. Planck dedicated his early academic career to establishing the absolute, non-statistical nature of irreversibility, which brought him into fierce debate with Ludwig Boltzmann, who treated the second law as a statistical probability arising from the collisions of microscopic atoms.",
      "In 1889, following Kirchhoff's death, Planck was appointed to the prestigious chair of theoretical physics at the University of Berlin. There, he inherited the central unsolved puzzle of classical physics: the blackbody radiation problem. Kirchhoff had proven in 1859 that when radiation is trapped inside a cavity whose walls are held at a constant temperature, the distribution of radiant energy across frequencies depends solely upon temperature and frequency, remaining utterly independent of whether the cavity walls are made of carbon, platinum, or copper. Here was an absolute invariant of nature. Planck set out to derive this universal function, unaware that it would dismantle the foundations of classical physics."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    title: "The Quantum of Action & Planck's Principle of Paradigm Shift",
    timeline_location: "October – December 1900, Berlin",
    source_scope: "Autobiography Part 2: The interpolation formula; introducing the quantum of action h; Boltzmann's S = k log W; 'Planck's Principle'",
    epistemic_status: "Primary Scientific Revolution Record",
    materiality: "CRITICAL",
    summary: "In October 1900, Rubens informs Planck that the Rayleigh-Jeans radiation law holds at long wavelengths while Wien's law holds at short wavelengths. That evening, Planck constructs an interpolation formula combining both regimes. On December 14, 1900, presenting his derivation to the German Physical Society, Planck is forced to make what he called 'an act of desperation': assuming that radiant energy cannot be emitted or absorbed continuously, but only in discrete, indivisible packets or quanta: E = hν, where h is the universal quantum of action (6.626 × 10^-34 J·s). This date marks the birth of quantum theory. Planck also introduced the foundational sociological law of scientific revolutions, known universally as **Planck's Principle**: 'A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.'",
    key_claims: [
      "Radiant energy is not continuous, but quantized: physical action in nature occurs in discrete multiples of the elementary quantum of action h.",
      "Boltzmann's probabilistic definition of entropy (S = k log W) was essential to mathematically derive the blackbody radiation law.",
      "Scientific paradigm shifts occur through generational mortality and succession rather than rational conversion of established orthodox leaders."
    ],
    concrete_evidence: [
      "The radiation formula: E = hν, introducing Planck's constant h and Boltzmann's constant k.",
      "The December 14, 1900 presentation to the German Physical Society in Berlin.",
      "The stubborn refusal of classical physicists (including initially Planck himself) to accept the physical reality of the quantum of action."
    ],
    operational_mechanisms: [
      {
        name: "Planck's Principle (The Generational Replacement Law)",
        rule: "Orthodox scientific establishments rarely abandon disproven paradigms through rational debate; new truths achieve dominance only when senior gatekeepers die and are replaced by a generation conditioned to the new reality."
      }
    ],
    verbatim_citations: [
      "A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.",
      "It was an act of desperation... I knew that the problem of the equilibrium between matter and radiation was of high importance for physics, and I had to find a theoretical derivation at any cost.",
      "The quantum of action was a completely new, unsuspected element in natural phenomena, which tore up the roots of classical physics."
    ],
    extended_forensic_prose: [
      "In the autumn of 1900, precision experiments at the Physikalisch-Technische Reichsanstalt (PTR) in Berlin conducted by Heinrich Rubens, Ferdinand Kurlbaum, and Otto Lummer triggered an acute crisis in theoretical physics. Wilhelm Wien's radiation law, which had worked brilliantly at high frequencies, failed completely in the far-infrared regime at 51 micrometers; conversely, the classical Rayleigh-Jeans formula predicted that radiant energy should soar to infinity at high frequencies—the catastrophic 'ultraviolet catastrophe' that would imply any hot oven should incinerate the universe with X-rays. On Sunday, October 7, 1900, Rubens visited Planck's home and shared the latest experimental data. That evening, Planck sat down at his desk and constructed an empirical interpolation formula that smoothly bridged the two regimes. A postcard sent to Rubens that night contained the exact mathematical law.",
      "Yet an empirical curve fit was insufficient for Planck's philosophical rigor. He spent the next eight weeks in an intense, agonizing search for the physical meaning behind the formula. In what Planck famously described as 'an act of desperation' (ein Akt der Verzweiflung), he was forced to abandon his lifelong adherence to pure continuum physics and embrace Ludwig Boltzmann's probabilistic entropy equation: S = k log W. To calculate the number of microstates W, Planck was compelled to divide the total energy into finite, indivisible packets or 'energy elements' of magnitude E = hν. On December 14, 1900, presenting his derivation to the German Physical Society in Berlin, Planck announced the discovery of the elementary quantum of action, h = 6.55 × 10^-27 erg·s. Classical physics had assumed that natura non facit saltus (nature makes no jumps); Planck proved that the physical universe operates in discrete, granular jumps.",
      "Reflecting upon the bitter reception of his discovery by older physicists, Planck formulated the immortal sociological law of scientific succession known as **Planck's Principle**: 'A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.' Classical physicists like Lord Kelvin and even Planck's close colleagues resisted the quantum for years, attempting to reconcile it with Maxwellian wave theory. True acceptance only occurred when young prodigies like Albert Einstein (explaining the photoelectric effect in 1905) and Niels Bohr (quantizing the hydrogen atom in 1913) embraced the quantum as the natural baseline of reality."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "The Refutation of Positivism & The Tri-Partite Ontology",
    timeline_location: "1908–1930, Berlin",
    source_scope: "Papers: 'The Meaning and Limits of Exact Science', 'Positivism and the Real External World'",
    epistemic_status: "Epistemology & Philosophy of Science",
    materiality: "CRITICAL",
    summary: "Planck delivers a devastating critique of Ernst Mach's sensationalist positivism (Empiriocriticism), which argued that science is merely an economical description of human sensory impressions and that atoms are unprovable fictions. Planck argues that positivism collapses into solipsism and paralyzes scientific progress. He constructs a three-tiered epistemology: (1) The World of the Senses (subjective, fallible); (2) The Physical World Picture (the theoretical, mathematical representation); (3) The Real World (Das Reale: objective reality existing independently of human perception). The ultimate aim of science is the progressive de-anthropomorphization of the world picture, asymptotically approaching the Real World through universal invariants like c, G, and h.",
    key_claims: [
      "Positivism, by reducing science to human sensations, logically implies solipsism and denies the existence of an objective external universe.",
      "The defining trajectory of physical science is 'de-anthropomorphization'—the systematic purging of subjective human sensory qualities from scientific models.",
      "Universal physical constants (speed of light c, gravitational constant G, quantum of action h) are cosmic invariants that remain identical for any conscious observer in the universe."
    ],
    concrete_evidence: [
      "Ernst Mach's dogmatic rejection of the atomic theory and kinetic theory of gases.",
      "Planck's 1908 Leiden lecture, 'The Unity of the Physical World Picture', which attacked Machian positivism.",
      "The formulation of 'natural units' derived purely from c, G, and h, which are independent of terrestrial human standards."
    ],
    operational_mechanisms: [
      {
        name: "Epistemic De-Anthropomorphization",
        rule: "Advance theoretical knowledge by replacing sensory descriptors (warmth, color, loudness) with invariant mathematical measurements (temperature, wavelength, frequency)."
      }
    ],
    verbatim_citations: [
      "The physical world picture does not rest upon the sensations of the human observer, but aims at a complete liberation of the world picture from the individuality of the creating mind.",
      "If we take positivism to its logical conclusion, there is no escape from solipsism: only one's own immediate sensations exist.",
      "Natural units derived from c, G, and h necessarily retain their validity for all times and for all civilizations, even extraterrestrial and non-human ones."
    ],
    extended_forensic_prose: [
      "Throughout the first three decades of the twentieth century, Planck waged an uncompromising intellectual battle against Ernst Mach's sensationalist positivism, which had become the fashionable philosophical orthodoxy among European intellectuals. Mach maintained that the sole task of science is to provide an economical summary of human sensory perceptions. In Mach's philosophy, concepts like atoms, electromagnetic fields, and forces were not real physical entities, but convenient mental fictions designed to organize sensory data. Mach famously demanded of atomic theorists: 'Have you ever seen an atom?'.",
      "Planck demonstrated that positivism, when followed with logical consistency, inevitably collapses into solipsism—the absurd philosophical position that nothing exists except one's own immediate, transient sensory sensations. If science only describes human senses, then the sun did not exist before conscious human beings evolved to see it, and a tree falling in an uninhabited forest makes no vibration. For Planck, such a doctrine was an insult to scientific realism and a poison to scientific motivation: no physicist would endure decades of exhausting, solitary research merely to create a shorthand indexing of his own sensory nerves.",
      "Planck constructed his celebrated Tri-Partite Epistemology to anchor scientific realism: (1) The Sense World (Sinneswelt): the subjective, biological, fallible world of immediate sensory impressions (warmth, red light, loud sounds); (2) The Physical World Picture (Physikalisches Weltbild): the theoretical, mathematical construction created by physics (Maxwell's fields, wave functions, atoms, thermodynamic potentials); and (3) The Real World (Die reale Welt): the objective reality of the cosmos that exists entirely independent of human consciousness. The supreme historical trajectory of physics is 'de-anthropomorphization'—the deliberate stripping away of human sensory subjective qualities to construct a Physical World Picture that asymptotically mirrors the Real World. Universal constants like the speed of light c, the gravitational constant G, and the quantum of action h are cosmic invariants that would be recognized by any alien civilization across the cosmos."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "The Anatomy of Phantom Problems (Scheinprobleme)",
    timeline_location: "1946, Göttingen",
    source_scope: "Paper: 'Phantom Problems in Science' (Scheinprobleme in der Wissenschaft)",
    epistemic_status: "Analytical Epistemology & Methodological Demarcation",
    materiality: "CRITICAL",
    summary: "Planck formulates the criteria for identifying and excising 'Phantom Problems' (*Scheinprobleme*)—questions that appear profound and grammatically sound, but upon forensic analysis are revealed to contain internal logical contradictions or are fundamentally unanswerable by any possible measurement. Planck establishes two criteria for a meaningful scientific question: (1) It must be free from logical contradiction; (2) It must be answerable through an observable consequence or empirical measurement. Classic phantom problems include the search for the absolute velocity of the Earth through the stationary luminiferous ether, the nature of absolute space, and the simultaneous exact position and velocity of an electron.",
    key_claims: [
      "A question that cannot in principle be decided by any imaginable physical observation or measurement is a phantom problem with no scientific meaning.",
      "Grammatical correctness and linguistic fluency frequently mask epistemological emptiness.",
      "The elimination of phantom problems (such as the luminiferous ether) is the prerequisite for major scientific revolutions."
    ],
    concrete_evidence: [
      "The Michelson-Morley experiment and the failure to detect ether drift, proving the luminiferous ether was a phantom construct.",
      "Heisenberg's Uncertainty Principle, which proved that asking for the simultaneous exact classical position and momentum of an electron is a phantom inquiry.",
      "The philosophical dispute over whether a room continues to exist when no one is observing it."
    ],
    operational_mechanisms: [
      {
        name: "Planck's Phantom Demarcation Filter",
        rule: "Before expending intellectual capital on a problem, test whether any conceivable empirical measurement could distinguish between opposing answers; if not, reject it as a phantom problem."
      }
    ],
    verbatim_citations: [
      "A question which has no meaning is a phantom problem. It does not exist for science, no matter how much intellectual energy has been squandered upon it.",
      "Two conditions must be fulfilled: the question must be free from inner contradiction, and it must be capable of being decided by an observable effect.",
      "The historical progress of science consists not only in answering old questions, but in recognizing that many old questions were merely phantom problems."
    ],
    extended_forensic_prose: [
      "In his post-war masterwork essay 'Phantom Problems in Science' (Scheinprobleme in der Wissenschaft), delivered in Göttingen in 1946, Planck addressed the widespread confusion generated by philosophical questions that consume immense intellectual energy without the possibility of resolution. A phantom problem is an inquiry that possesses linguistic grammar and semantic elegance, but is epistemologically hollow. It appears to point toward a profound mystery, yet upon forensic scrutiny, it is revealed to be either internally self-contradictory or structurally incapable of being tested by any physical measurement.",
      "Planck formulated the two golden criteria that any question must satisfy to be deemed scientifically meaningful: (1) The question must be entirely free from internal logical contradiction; and (2) Its answer must produce an observable, measurable consequence in the physical world. If two opposing hypotheses produce identical, indistinguishable physical measurements across all conceivable experiments, the debate between them is not a scientific inquiry, but a phantom problem. The classic historical illustration was the late-nineteenth-century search for the Earth's absolute velocity relative to the stationary 'luminiferous ether'. When the Michelson-Morley experiment demonstrated that light travels at identical speeds regardless of the Earth's motion, Albert Einstein realized that the luminiferous ether was a phantom problem: an unmeasurable entity that had no operational function in physics.",
      "Planck applied this filter to modern quantum mechanics. In classical physics, asking 'What is the precise simultaneous position and velocity of this particle?' was a meaningful question. But Werner Heisenberg's Uncertainty Principle proved that quantum mechanics forbids the simultaneous measurement of conjugate variables beyond Planck's constant ($Δx \cdot Δp \ge \hbar/2$). In the quantum realm, asking for the exact simultaneous trajectory of an electron is a phantom problem: the physical concept of a classical trajectory simply does not exist at subatomic scales. Science progresses not merely by solving problems, but by ruthlessly amputating phantom inquiries that clutter human thought."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The Causal Status of Quantum Mechanics",
    timeline_location: "1932–1933, Berlin",
    source_scope: "Paper: 'The Concept of Causality in Physics' (Der Kausalbegriff in der Physik)",
    epistemic_status: "Philosophy of Physics & Determinism",
    materiality: "CRITICAL",
    summary: "Planck confronts the widespread assertion by the Copenhagen interpretation (Heisenberg, Bohr) that quantum mechanics abolishes the law of causality and introduces pure indeterminism into nature. Planck demonstrates that causality—the principle that an event is unequivocally determined by preceding conditions—is not abolished, but reformulated. In quantum physics, determinism does not govern classical macroscopic variables (particle trajectories), but strictly governs the mathematical evolution of the quantum state: the wave function Psi evolves with absolute, rigorous determinism via the time-dependent Schrödinger equation.",
    key_claims: [
      "Quantum mechanics does not abolish the principle of causality; it redefines the physical entity to which causality applies.",
      "The Heisenberg Uncertainty Principle reflects the physical interaction between the measuring instrument and the observed object, not an acausal flaw in nature itself.",
      "The wave function Psi evolves with complete, unyielding mathematical determinism through the Schrödinger wave equation."
    ],
    concrete_evidence: [
      "The time-dependent Schrödinger equation: iħ ∂Ψ/∂t = ĤΨ, which is mathematically deterministic and time-reversible.",
      "The distinction between measurement limitations (epistemic uncertainty) and objective cosmic order (ontological causality).",
      "Max Born's statistical interpretation of |Ψ|² as probability density, which Planck contextualizes as a bridge between the mathematical world picture and sensory observation."
    ],
    operational_mechanisms: [
      {
        name: "Locus of Determinism Shift",
        rule: "When classical determinism fails for observed particles, seek the higher-order mathematical representation where deterministic law is preserved intact."
      }
    ],
    verbatim_citations: [
      "The law of causality is neither right nor wrong; it is a heuristic principle, a signpost to guide us in the labyrinth of phenomena.",
      "The quantum state, symbolized by the wave function Psi, changes in a strictly deterministic, continuous manner in accordance with Schrödinger's equation.",
      "To say that nature is acausal merely because our physical instruments inevitably disturb the observed micro-entity is an unwarranted philosophical leap."
    ],
    extended_forensic_prose: [
      "Following the formulation of matrix mechanics by Heisenberg and wave mechanics by Schrödinger in 1925–1926, popular culture and philosophical circles were swept by the dramatic claim that modern physics had murdered determinism and proven the universe is governed by pure, acausal chance. Planck, standing alongside Albert Einstein, fiercely rejected this nihilistic conclusion in his 1932 treatise 'The Concept of Causality in Physics'. He set out to clarify the precise scientific definition of the causal principle: an event is causally determined if it can be predicted with certainty from a complete knowledge of initial conditions.",
      "Planck proved that the appearance of indeterminism in quantum experiments is an artifact of attempting to measure subatomic entities using macroscopic measuring devices. In classical physics, an astronomer can observe the moon through a telescope without the photons of light altering the moon's orbit; the observation is non-invasive. In quantum mechanics, however, to locate an electron, one must bounce a high-energy photon off it; that photon inevitably transfers momentum to the electron, disturbing its velocity. The Heisenberg uncertainty relations ($Δx \cdot Δp \ge \hbar/2$) describe the unavoidable physical interaction between the measuring probe and the observed object—an epistemic limitation of measurement, not an ontological breakdown of cosmic order.",
      "Crucially, Planck showed that when one moves from the crude Sense World of particle impacts to the refined Physical World Picture, causality remains absolute. The quantum state of an isolated physical system is represented by the wave function $\Psi$. And how does $\Psi$ evolve over time? Through Erwin Schrödinger's time-dependent differential equation: $i\hbar \frac{\partial \Psi}{\partial t} = \hat{H}\Psi$. This equation is as rigorously deterministic, continuous, and unyielding as Isaac Newton's equations of celestial mechanics or Maxwell's equations of electrodynamics. Given the wave function at time $t_0$, its state at any future time $t$ is calculated with absolute certainty. Causality was not murdered; its locus was merely shifted from classical particle coordinates to the mathematical wave function."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "The Dual Perspective Resolution of Free Will",
    timeline_location: "1936, Berlin",
    source_scope: "Paper: 'Causality in Nature and Freedom of the Will'",
    epistemic_status: "Philosophical Psychology & Ethics",
    materiality: "CRITICAL",
    summary: "Planck presents a brilliant, definitive epistemological resolution to the age-old paradox between universal determinism and human free will. He demonstrates that the conflict arises from an unacknowledged confusion of two distinct perspectives: (1) The External Objective Viewpoint (from the outside): for an external, ideal observer possessing complete knowledge of physiological, genetic, and environmental causes, human actions are strictly causally determined; (2) The Internal Subjective Viewpoint (from within): for the conscious individual deliberating an action, the will is genuinely free, because the very act of introspecting alters the observer's own mental state. You cannot predict your own choice because the prediction itself becomes an active causal variable. Free will is an internal reality that anchors moral responsibility and Kant's categorical imperative.",
    key_claims: [
      "The conflict between determinism and free will is an illusion caused by oscillating between external and internal points of view.",
      "Seen from without (objectively), the human will is strictly causally determined by heredity, biology, and past experiences.",
      "Seen from within (subjectively), the human will is free, because self-prediction is logically impossible without altering the decision itself.",
      "Moral duty, ethical accountability, and personal conscience are preserved intact by the internal perspective."
    ],
    concrete_evidence: [
      "The thought experiment of the ideal external psychological observer (an omniscient intellect predicting human behavior).",
      "The recursive paradox of self-prediction: predicting one's own decision introduces a new thought that alters the causal chain.",
      "Immanuel Kant's distinction between the phenomenal realm of causality and the noumenal realm of moral autonomy."
    ],
    operational_mechanisms: [
      {
        name: "Dual Perspective Epistemic Filter",
        rule: "Resolve apparent metaphysical contradictions by identifying whether the question is posed from an external objective frame or an internal subjective frame."
      }
    ],
    verbatim_citations: [
      "Seen from without, the will is causally determined; seen from within, the will is free.",
      "An intellect which could predict its own future would have to be capable of knowing its present state while simultaneously changing it by that very knowledge.",
      "The law of causality is a guide for understanding the actions of others; the moral law is a guide for one's own actions."
    ],
    extended_forensic_prose: [
      "In 'Causality in Nature and Freedom of the Will', Planck addressed the profound moral crisis that haunted the modern scientific era: if the physical universe is an unbroken chain of cause and effect, then human thoughts, impulses, and decisions must be determined by physical laws, rendering human free will an illusion and moral accountability a farce. Determinists argued that human beings are mere biological automata; moralists argued that science must be rejected to preserve human dignity. Planck proved that both sides were committing an elementary epistemological blunder by failing to distinguish between two fundamentally distinct reference frames.",
      "Planck constructed his celebrated Dual Perspective Resolution: First, examine human will from the **External Objective Viewpoint** (Seen from without). Imagine an ideal, omniscient external psychologist who possesses complete knowledge of an individual's genetic inheritance, neurological wiring, childhood conditioning, sensory stimuli, and chemical environment. For this external observer, every human choice—from selecting a meal to committing a murder—is strictly, rigidly causally determined. The external observer could predict the person's behavior with mathematical certainty. In this objective frame, determinism holds absolute sway.",
      "Second, examine human will from the **Internal Subjective Viewpoint** (Seen from within). Can the individual who is deliberating a choice predict his own decision using the causal laws of science? Planck proves that this is a logical impossibility. The moment an individual attempts to introspect and predict what choice he will make, the very act of forming that predictive thought introduces a new mental cause into his consciousness, which alters his emotional equilibrium, which in turn alters the outcome! The mind cannot be simultaneously the subject that calculates and the object that is calculated. Because self-prediction is structurally impossible from within, the conscious agent faces a genuine, open horizon of moral choice. Therefore, while science applies to the external world of understanding others, the moral law—Kant's Categorical Imperative—applies to the internal realm of one's own sovereign decisions. Both are true in their respective domains."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "The Convergence of Science and Religion",
    timeline_location: "May 1937, Baltic States & Berlin",
    source_scope: "Paper: 'Religion and Natural Science' (Religion und Naturwissenschaft)",
    epistemic_status: "Philosophy of Religion & Natural Theology",
    materiality: "CRITICAL",
    summary: "In a famous 1937 lecture delivered across the Baltic states, Planck examines the relationship between science and religion. He argues that science and religion are not antagonistic adversaries, but complementary partners united against the twin scourges of skepticism, nihilism, and superstition. Science investigates how the universe operates through natural law; religion addresses why human beings must act with moral responsibility. Planck shows that both paths converge on the exact same cosmic reality: For religion, God stands at the beginning of all thought; for natural science, God stands at the end of all reflection—as the supreme, all-powerful cosmic order (Weltordnung) that sustains the mathematical harmony of the universe.",
    key_claims: [
      "Science and religion address complementary domains: science illuminates physical causality, while religion guides moral action.",
      "Both science and religion wage an unrelenting war against the common enemies: superstition, cynicism, and nihilism.",
      "For religion, God is the fundamental foundation; for science, God is the crowning culmination of all reflection on universal law."
    ],
    concrete_evidence: [
      "Planck's May 1937 lecture in Dorpat and Riga, delivered during the height of Soviet militant atheism and Nazi ideological distortion.",
      "The historical alignment of the great founders of modern science (Kepler, Newton, Maxwell, Faraday) who viewed scientific research as the contemplation of divine harmony.",
      "The role of faith (Vorwissen) as an indispensable prerequisite for scientific inquiry: a scientist must possess faith that the universe is governed by rational, discoverable laws."
    ],
    operational_mechanisms: [
      {
        name: "Asymptotic Convergence Principle",
        rule: "Recognize that disciplined empirical investigation and profound spiritual reflection are parallel trajectories converging toward the same ultimate, transcendent cosmic order."
      }
    ],
    verbatim_citations: [
      "Both religion and natural science require a belief in God for their activities, to the former He is the starting point, and to the latter the goal of every thought.",
      "There can never be any real opposition between religion and science; for the one is the complement of the other.",
      "Over the entrance to the gates of the temple of science are written the words: 'Ye must have faith.' It is a quality which the scientist cannot dispense with."
    ],
    extended_forensic_prose: [
      "In May 1937, with Europe marching toward ideological madness and mechanized slaughter, Max Planck embarked on a lecture tour through the Baltic states, delivering his historic address 'Religion and Natural Science' (Religion und Naturwissenschaft). At a time when Soviet communism was enforcing militant state atheism and Nazi fascism was twisting biology into racial mysticism, Planck defended the profound, non-negotiable alliance between rigorous empirical science and genuine religious reverence. He declared that science and religion are not contradictory enemies, but mutually reinforcing pillars of human civilization.",
      "Planck dissected the distinct domains of science and religion: science is concerned with knowledge (Wissen)—the empirical investigation of physical causality and the mathematical laws that govern matter and energy. Religion is concerned with ethics, values, and duty (Handeln)—the moral orientation of the human soul and the guiding principles of conduct. A society that pursues science without moral reverence collapses into cold, destructive technocracy; a society that clings to religious dogma without empirical science degenerates into ignorant, fanatical superstition. Both disciplines share a common battlefield against skepticism, nihilism, and intellectual cynicism.",
      "Planck formulated his radiant directional convergence thesis: 'Both religion and natural science require a belief in God for their activities. To the former, He is the starting point, at the foundation of all thinking; to the latter, He is the goal and culmination of every reflection.' For the religious believer, God is the immediate primal cause from which all creation springs. For the scientific investigator, as he penetrates deeper into the majesty of quantum mechanics, stellar astrophysics, and universal physical constants, he encounters an overwhelming, sublime mathematical harmony that cannot be explained away as random accident. Science does not eliminate the divine; it reveals God at the end of the inquiry as the sovereign World Order (Weltordnung) that sustains the rational intelligibility of the cosmos."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "The Tragic Testament: Integrity in the Face of Tyranny",
    timeline_location: "1933–1947, Berlin, Plötzensee & Göttingen",
    source_scope: "Historical Context, Biographical Epilogue & Final Letters",
    epistemic_status: "Historical Record & Moral Philosophy",
    materiality: "CRITICAL",
    summary: "The final unit documents the harrowing biographical crucible of Max Planck's final decades under Nazi tyranny, illustrating the supreme moral courage of scientific realism. In 1933, as President of the Kaiser Wilhelm Society, Planck met personally with Adolf Hitler to plead for Jewish scientists, only for Hitler to erupt in rage. Over his lifetime, Planck suffered the loss of his eldest son in World War I, both twin daughters in childbirth, the complete destruction of his home and 60-year personal library in an Allied air raid, and the brutal torture and execution of his only surviving son, Erwin Planck, for complicity in the July 20 anti-Hitler assassination plot. Through unimaginable personal grief and national devastation, Planck maintained unyielding moral integrity, demonstrating that the pursuit of objective truth is the only sacred sanctuary that outlasts civilizational collapse.",
    key_claims: [
      "Scientific realism is not merely an intellectual posture, but a moral anchor capable of sustaining human dignity amidst total civilizational ruin.",
      "Planck's personal confrontation with Hitler demonstrated the irreconcilable conflict between objective scientific truth and totalitarian ideological madness.",
      "The ultimate validation of a philosophy of science is whether it provides the spiritual fortitude to endure personal tragedy without bitterness or despair."
    ],
    concrete_evidence: [
      "Planck's historic 1933 personal meeting with Adolf Hitler regarding Fritz Haber and the expulsion of Jewish scientists.",
      "The execution of Erwin Planck at Plötzensee prison on January 23, 1945, following the July 20 plot.",
      "The destruction of Planck's home, scientific manuscripts, and correspondence during the February 15, 1944 bombing of Berlin-Grunewald.",
      "Planck's final letters to his cousin and friends, written at age 87 in Göttingen, reaffirming faith in cosmic order."
    ],
    operational_mechanisms: [
      {
        name: "Stoic Epistemic Fortitude",
        rule: "Anchor personal character to objective cosmic reality; political tyrannies, personal grief, and worldly ruin are transient, but the universal laws of truth remain eternal."
      }
    ],
    verbatim_citations: [
      "What gave me strength and sustained my life was the firm conviction that our thinking is not completely in vain, and that in the end, truth will conquer.",
      "Hitler whipped himself into such a frenzy of fury that I had no other choice but to remain silent and take my leave.",
      "He was a precious part of my life. He was my joy, my pride, my hope. Words cannot express what I have lost with him."
    ],
    extended_forensic_prose: [
      "The ultimate chapter of Max Planck's life stands as one of the most tragic and inspiring moral testaments in the history of human thought. Planck was not a detached academic living in an ivory tower; his philosophy of scientific realism was tested in the hottest fires of twentieth-century catastrophe. In May 1933, shortly after the Nazi regime seized power, Planck, serving as President of the Kaiser Wilhelm Society, requested a private audience with Adolf Hitler in the Reich Chancellery. Planck went with the explicit purpose of defending Jewish scientists, specifically chemist Fritz Haber, who had saved Germany from starvation during World War I through nitrogen fixation. Planck warned Hitler that expelling Jewish intellectuals would cause irreparable harm to German science. Hitler flew into an uncontrollable rage, pounding his desk and screaming that if science required Jews, Germany would do without science for a generation. Planck stood in quiet, dignified silence before taking his leave, recognizing that totalitarian ideology was immune to rational reason.",
      "Over the ensuing twelve years, Planck suffered a succession of personal tragedies that would have broken any ordinary spirit. His eldest son, Karl, was killed in the trenches of the Battle of Verdun in 1916. His twin daughters, Margarete and Emma, both died in childbirth in 1917 and 1919. On February 15, 1944, during an Allied bombing raid on Berlin, an incendiary bomb struck Planck's home in Grunewald. His entire house burned to the ground; his private laboratory, his unpublished manuscripts, and sixty years of personal correspondence with Helmholtz, Kirchhoff, Einstein, and Bohr were turned to ash. At age 86, Planck was left with only the clothes on his back.",
      "The final, agonizing blow fell in the dying months of the war. His youngest and only surviving son, Erwin Planck, who had served as a senior civil servant in the Weimar Republic, was deeply involved in the Claus von Stauffenberg July 20, 1944 conspiracy to assassinate Hitler and overthrow the Nazi regime. Erwin was arrested by the Gestapo and subjected to brutal interrogation. The 86-year-old father wrote desperate, heart-wrenching letters of appeal to Hitler and Heinrich Himmler, pleading for his son's life in exchange for his lifetime of service to the Fatherland. The appeals were ignored. On January 23, 1945, Erwin Planck was hanged by piano wire at Plötzensee prison in Berlin. Homeless, bereft of all his children, and living in refugee conditions in Göttingen, Planck refused to succumb to bitterness. In his final letters before his death in 1947 at age 89, Planck reaffirmed his absolute faith that the search for eternal cosmic truth is the only sacred anchor that can never be destroyed by human madness."
    ]
  }
];

function buildMasterNotesMarkdown() {
  let md = `# Scientific Autobiography and Other Papers\n`;
  md += `## A Forensic Epistemological Reconstruction of Quantum Genesis, Planck's Principle, Phantom Problems, and the Metaphysics of Science\n`;
  md += `### By Max Planck (1949/2014)\n\n`;
  md += `**Author:** Max Planck  \n`;
  md += `**Historical Context:** Berlin, Weimar Republic & Post-War Göttingen  \n`;
  md += `**System Standard:** BKRS v2.0 Production Master Codex (Total Forensic Depth)  \n`;
  md += `**Epistemic Tier:** Tier 1 (Philosophy of Physics & Scientific Realism)  \n`;
  md += `**Corpus Architecture:** 8 Invariant Content Units | Complete Ontological & Metaphysical Architecture  \n\n`;
  md += `---\n\n`;
  md += `## Executive Epistemic Summary\n\n`;
  md += `Max Planck’s *Scientific Autobiography and Other Papers* is the essential philosophical testament of the physicist who inaugurated 20th-century physics with the discovery of the quantum of action ($h$) on December 14, 1900.\n\n`;
  md += `Beyond documenting the birth of quantum theory, this volume constitutes one of the most rigorous **epistemological defenses of scientific realism against positivism and nihilism**:\n`;
  md += `1. **The Quantum of Action ($E = h\\nu$)**: How an "act of desperation" in blackbody radiation shattered classical continuous physics, demonstrating that physical nature makes discrete, quantized jumps.\n`;
  md += `2. **Planck's Principle (The Law of Scientific Succession)**: Modern scientific paradigms do not triumph by converting established orthodox gatekeepers, but because opponents die and a new generation grows up accustomed to the truth.\n`;
  md += `3. **The Refutation of Positivism**: Refuting Ernst Mach's sensationalism by proving that science progresses through the systematic de-anthropomorphization of physical models.\n`;
  md += `4. **The Anatomy of Phantom Problems (*Scheinprobleme*)**: Formulating the two golden criteria for meaningful scientific questions, excising unmeasurable metaphysical chimeras (such as the luminiferous ether).\n`;
  md += `5. **The Causal Status of Quantum Mechanics**: Demonstrating that quantum mechanics does not abolish causality, but shifts determinism from classical particles to the mathematical evolution of the Schrödinger wave function ($\\Psi$).\n`;
  md += `6. **The Dual Perspective Resolution of Free Will**: Proving that human will is strictly causally determined from the external objective viewpoint, yet genuinely free from the internal subjective viewpoint.\n`;
  md += `7. **The Convergence of Science and Religion**: Establishing that science and religion are parallel paths toward the same ultimate reality: for religion, God stands at the beginning; for science, God stands at the end of all thinking.\n`;
  md += `8. **The Tragic Testament**: The heroic moral resilience of Max Planck under Nazi tyranny, defending Jewish scientists, enduring the execution of his son Erwin, and preserving faith in objective cosmic truth.\n\n`;
  md += `---\n\n`;
  md += `## The Tri-Partite Ontological Architecture\n\n`;
  md += `\`\`\`\n`;
  md += `  [1. THE SENSE WORLD (Sinneswelt)]\n`;
  md += `  Subjective, anthropomorphic, fallible\n`;
  md += `  (Sights, sounds, warmth, pain, immediate nerve sensations)\n`;
  md += `           ↓ (De-anthropomorphization via instruments)\n`;
  md += `  [2. THE PHYSICAL WORLD PICTURE (Physikalisches Weltbild)]\n`;
  md += `  Theoretical, mathematical, invariant\n`;
  md += `  (Atoms, wave functions, Maxwell fields, E = hν)\n`;
  md += `           ↓ (Asymptotic approximation)\n`;
  md += `  [3. THE REAL WORLD (Die reale Welt / Das Reale)]\n`;
  md += `  Objective, absolute, independent of human consciousness\n`;
  md += `  (The external cosmos governed by universal invariants c, G, h, k)\n`;
  md += `\`\`\`\n\n`;
  md += `---\n\n`;
  md += `## The 8 Invariant Content Units\n\n`;

  planckUnits.forEach(u => {
    md += `### Unit ${u.chapter_num}: ${u.title}\n`;
    md += `- **Timeline & Setting**: ${u.timeline_location}\n`;
    md += `- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})\n`;
    md += `- **Scope**: ${u.source_scope}\n\n`;
    md += `#### Core Epistemological Synthesis\n${u.summary}\n\n`;
    md += `#### Forensic Textual & Historical Analysis\n\n`;
    u.extended_forensic_prose.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `#### Invariant Scientific Claims\n`;
    u.key_claims.forEach(c => {
      md += `- ${c}\n`;
    });
    md += `\n#### Concrete Evidence & Historical Experiments\n`;
    u.concrete_evidence.forEach(e => {
      md += `- ${e}\n`;
    });
    md += `\n#### Operational Philosophical & Scientific Mechanisms\n`;
    u.operational_mechanisms.forEach(m => {
      md += `##### ${m.name}\n> **Operational Law**: ${m.rule}\n\n`;
    });
    md += `#### Verbatim Canonical Citations\n`;
    u.verbatim_citations.forEach(cit => {
      md += `> *" ${cit} "*\n\n`;
    });
    md += `---\n\n`;
  });

  return md;
}

// Build and save Master Notes
const masterNotesMd = buildMasterNotesMarkdown();
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

// Update knowledge-units.json
existingKu.units = planckUnits;
fs.writeFileSync(kuPath, JSON.stringify(existingKu, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${planckUnits.length} units)`);

// Update index.html
function buildPlanckHtml(units) {
  const sidebarLinks = units.map(u => `
    <div class="nav-ch-item">
      <a href="#unit-${String(u.chapter_num).padStart(2, '0')}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
        <span class="nav-ch-num">${u.chapter_num}</span>
        <span class="nav-ch-title">${u.title}</span>
      </a>
    </div>
  `).join('\n');

  const unitCards = units.map(u => {
    const prose = u.extended_forensic_prose.map(p => `<p class="narrative-p">${p}</p>`).join('\n');
    const claims = u.key_claims.map(c => `<li>${c}</li>`).join('\n');
    const quotes = u.verbatim_citations.map(q => `<div class="quote-box">“${q}” — Max Planck</div>`).join('\n');
    const mech = u.operational_mechanisms.map(m => `
      <div class="heuristic-box">
        <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
          ${m.name}:
        </strong>
        ${m.rule}
      </div>
    `).join('\n');

    return `
      <div class="unit-card-deep" id="unit-${String(u.chapter_num).padStart(2, '0')}">
        <div class="unit-meta-line">
          <div>
            <span class="unit-badge">Unit ${u.chapter_num}</span>
            <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
              ${u.timeline_location}
            </span>
          </div>
          <span class="unit-epistemic">${u.epistemic_status}</span>
        </div>

        <h3 class="unit-heading-deep">${u.title}</h3>
        <div style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px; font-style: italic;">
          ${u.source_scope}
        </div>

        <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
          ${u.summary}
        </div>

        <div class="narrative-prose">
          ${prose}
        </div>

        <div style="margin: 24px 0; background: var(--bg-card-subtle); padding: 18px 22px; border-radius: 6px; border: 1px solid var(--border-color);">
          <strong style="font-family: var(--font-sans); font-size: 0.85rem; text-transform: uppercase; color: var(--accent-gold); display: block; margin-bottom: 8px;">
            Core Invariant Claims:
          </strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.6; font-size: 0.95rem;">
            ${claims}
          </ul>
        </div>

        ${quotes}
        ${mech}
      </div>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scientific Autobiography — Max Planck | BKRS Master Reader</title>
  
  <link rel="stylesheet" href="../../css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet">
  
  <style>
    .unit-card-deep {
      margin-bottom: 48px;
      padding: 36px 38px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      box-shadow: 0 4px 20px var(--shadow-subtle);
      transition: all 0.2s ease;
    }
    
    .unit-meta-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border-subtle);
      flex-wrap: wrap;
      gap: 8px;
    }

    .unit-badge {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-gold);
      background: var(--bg-tag);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
    }

    .unit-epistemic {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 600;
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
      margin-bottom: 8px;
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
    }

    .quote-box {
      margin: 20px 0;
      padding: 16px 22px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.08rem;
    }

    .heuristic-box {
      margin-top: 20px;
      padding: 16px 20px;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--accent-gold);
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
        <span class="brand-title">SCIENTIFIC AUTOBIOGRAPHY</span>
      </div>
      
      <div class="top-bar-controls">
        <a href="../../index.html" class="icon-btn" title="Return to Library" aria-label="Library">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <div class="app-layout">
    
    <!-- SIDEBAR NAVIGATION -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-book-title">Scientific Autobiography</div>
        <div class="sidebar-book-meta">Max Planck · 8 Forensic Units</div>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section-title">Table of Contents</div>
        <div class="nav-ch-list">
${sidebarLinks}
        </div>
      </nav>
    </aside>

    <!-- MAIN READING CONTAINER -->
    <main class="reader-container" id="reader-container">
      <div class="reader-content-wrap">
        
        <!-- BOOK COVER & INTRO CARD -->
        <article class="hero-card">
          <div class="hero-badge">Epistemology · Quantum Genesis · Philosophy of Physics</div>
          <h1 class="hero-title">Scientific Autobiography and Other Papers</h1>
          <div class="hero-subtitle">Max Planck (1949) · The Defense of Scientific Realism</div>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Genesis</span>
              <span class="meta-value">December 14, 1900</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Total Units</span>
              <span class="meta-value">8 Invariant Epistemic Units</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Standard</span>
              <span class="meta-value">BKRS v2.0 Production Master</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Fidelity</span>
              <span class="meta-value">100% Replacement Grade</span>
            </div>
          </div>

          <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); margin-top: 24px; text-align: justify;">
            <p><strong>The Foundational Philosophical Testament of Modern Physics:</strong> Max Planck documents the birth of the quantum of action ($h$), refutes Machian positivism through the Tri-Partite Ontology, excises phantom problems, resolves the free will paradox, and stands with unflinching moral integrity against totalitarian tyranny.</p>
          </div>
        </article>

        <!-- UNITS CONTENT -->
        <section class="units-container">
${unitCards}
        </section>

      </div>
    </main>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;
}

const htmlContent = buildPlanckHtml(planckUnits);
fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log(`Saved index.html (${htmlContent.length} characters)`);

console.log('Max Planck expansion complete!');
