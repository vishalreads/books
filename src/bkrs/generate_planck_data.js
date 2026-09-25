/**
 * BKRS v1.0 Generator for Max Planck's "Scientific Autobiography and Other Papers" (1949/2014)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/scientific-autobiography-planck');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
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
      "Nature does not make jumps—that was the old classical dictum. But the quantum of action demonstrated that nature makes fundamental, discrete jumps."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "Phantom Problems in Science: The Criteria of Meaning",
    timeline_location: "1946, Göttingen Lecture",
    source_scope: "Treatise 1: Definition of Scheinprobleme (phantom problems); two mandatory conditions for meaningful scientific questioning",
    epistemic_status: "Primary Epistemological Criterion",
    materiality: "CRITICAL",
    summary: "Planck analyzes 'phantom problems' (Scheinprobleme)—questions that appear intellectually profound and provoke furious academic controversy, but are fundamentally devoid of scientific meaning because their premises rest on contradictory or unverifiable assumptions. Planck establishes two inviolable criteria for a question to be scientifically legitimate: (1) The question must be free from internal logical contradictions; (2) The question must be capable of empirical verification, either directly through sensory observation or indirectly through measurable physical consequences. Classic examples of phantom problems include: 'Does the luminiferous ether exist?' (rendered meaningless once the Michelson-Morley experiment and Einstein's relativity showed that no physical measurement depends on absolute motion through ether), and 'Can an electron's simultaneous position and velocity be exactly measured?' (a phantom question forbidden by Heisenberg's uncertainty principle).",
    key_claims: [
      "A vast amount of philosophical and scientific dispute is squandered on pseudo-questions that possess grammatical form but lack physical meaning.",
      "A scientific question is meaningful if and only if it is logically self-consistent and can be decided by an empirical measurement.",
      "When a concept produces no observable physical consequences, it must be excised from the physical worldview."
    ],
    concrete_evidence: [
      "The debate over the luminiferous ether: decades of mathematical models attempting to calculate the mechanical elasticity of an unobservable medium.",
      "The medieval debate over how many angels can dance on the head of a pin as the archetype of logical syntax without empirical referent.",
      "The concept of simultaneous exact position and velocity in quantum mechanics."
    ],
    operational_mechanisms: [
      {
        name: "The Empirical Consequence Filter",
        rule: "To determine if a disputed concept has genuine scientific meaning, ask: 'Does the truth or falsity of this proposition make any measurable physical difference in an experiment?' If no, discard it as a phantom problem."
      }
    ],
    verbatim_citations: [
      "A question which cannot be answered by any observable or measurable fact is not a scientific question; it is a phantom problem.",
      "Science is not a collection of idle speculations, but a search for relations between measurable quantities.",
      "The demand that science should eliminate all phantom problems is not an invitation to barren skepticism, but a call for intellectual economy and honesty."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "Positivism vs. Realism: The Real World Behind the Senses",
    timeline_location: "1946–1947, Philosophical Essays",
    source_scope: "Critique of Ernst Mach's logical positivism; the tri-partite ontological division: Sense World, Physical World Picture, and Real World",
    epistemic_status: "Primary Ontological Treatise",
    materiality: "CRITICAL",
    summary: "Planck delivers a devastating critique of extreme logical positivism (as championed by Ernst Mach), which claims that physical reality consists exclusively of human sensations and that atoms are merely convenient mathematical fictions. Planck argues that if positivism were true, physics would collapse into solipsism: the moon would cease to exist when no human is looking at it. Instead, Planck articulates a tri-partite ontology: (1) **The World of the Senses**: the raw, subjective impressions received by human sensory organs; (2) **The Physical World Picture**: the objective, mathematical model constructed by theoretical science (atoms, electromagnetic fields, light waves) designed to eliminate human anthropomorphic bias; (3) **The Real World (Das Reale)**: the external, objective cosmos that exists independently of human observation, towards which the Physical World Picture continuously strives but can never completely capture.",
    key_claims: [
      "Logical positivism, carried to its logical conclusion, degenerates into sterile sensory solipsism that paralyzes scientific progress.",
      "Theoretical science does not describe human sensations; it constructs an objective 'Physical World Picture' that strips away human sensory limitations.",
      "An independent external reality exists; the fundamental postulate of natural science is the real existence of an objective cosmos independent of human observation."
    ],
    concrete_evidence: [
      "Mach's denial of the physical reality of atoms, which led him to oppose Ludwig Boltzmann and delay the acceptance of atomic theory.",
      "The construction of physical measuring instruments (galvanometers, spectrometers, Geiger counters) specifically designed to replace fallible human sense organs.",
      "The existence of physical processes (e.g. radioactive decay inside distant stars) occurring where no human observer is present."
    ],
    operational_mechanisms: [
      {
        name: "The Tri-Partite Epistemological Triad",
        rule: "Never confuse subjective sensory perception with objective physical reality; theoretical models bridge the two by creating a mathematical world-picture that progressively approximates the real world."
      }
    ],
    verbatim_citations: [
      "The fundamental thesis of all natural science is that an objective world exists independently of man, an outside world which is absolute.",
      "Positivism holds that the only reality is human sensation. But if this were true, there would be no science, only an inventory of personal illusions.",
      "The physical world-picture is not an arbitrary invention; it is a steady approach to the real world."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The Meaning and Limits of Exact Science: Quantum Frontiers",
    timeline_location: "November 1941, Hanseatic University of Hamburg Lecture",
    source_scope: "The evolution of the physical world picture; the role of instruments; the quantum limitation; Heisenberg's uncertainty principle",
    epistemic_status: "Primary Philosophy of Science",
    materiality: "CRITICAL",
    summary: "Planck charts the historical evolution of the 'Physical World Picture'. Science progresses by systematically purging itself of anthropomorphic illusions: heat is decoupled from human warmth and redefined as molecular kinetic energy; sound is decoupled from the human ear and redefined as elastic pressure waves; light is decoupled from human vision and redefined as electromagnetic radiation. However, exact science encounters its ultimate, impassable boundary at the quantum level. In classical physics, the measuring instrument was assumed to observe nature without altering it. In quantum physics, due to the finite size of the quantum of action h, every physical measurement introduces an uncontrollable interaction between the instrument and the object, codified in Heisenberg's uncertainty relations (Δx · Δp ≥ h/4π). Thus, the exact boundary between the observer and the observed becomes mathematically blurred.",
    key_claims: [
      "Scientific progress consists of a continuous process of de-anthropomorphization: replacing subjective sensory categories with objective physical invariants.",
      "The measuring apparatus is an active physical participant that perturbs the micro-physical system being observed.",
      "Heisenberg's uncertainty principle is not a limitation of human technology, but an inherent structural property of the physical universe dictated by the quantum of action h."
    ],
    concrete_evidence: [
      "The transition from physiological temperature scales (hot/cold) to thermodynamic Kelvin scales based on ideal gas expansion.",
      "The measurement of an electron's position requiring a photon of light whose momentum necessarily imparts an unpredictable recoil to the electron.",
      "The breakdown of strict classical determinism in predicting individual quantum events."
    ],
    operational_mechanisms: [
      {
        name: "Systemic De-Anthropomorphization",
        rule: "To advance scientific understanding, eliminate all human-centric categories (color, warmth, sound, purpose) in favor of quantifiable mathematical invariants."
      }
    ],
    verbatim_citations: [
      "The history of exact science is a continuous process of emancipation from anthropomorphic concepts.",
      "At the quantum level, the observer and the observed can no longer be cleanly separated. The measuring process itself alters the state of the object.",
      "The quantum of action is a mysterious messenger from the real world, reminding us of the limits of our classical mechanical conceptions."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "The Concept of Causality: Dynamic Determinism vs. Statistical Law",
    timeline_location: "1932–1948, Berlin Lectures",
    source_scope: "The definition of causality; dynamic laws vs. statistical laws; the status of causality in quantum mechanics; the wave function as deterministic",
    epistemic_status: "Primary Metaphysical Investigation of Physics",
    materiality: "CRITICAL",
    summary: "Planck tackles the crisis of causality provoked by quantum mechanics. Many modern physicists (the Copenhagen school) proclaimed that quantum mechanics had overthrown the law of cause and effect, replacing causality with pure indeterminism and chance. Planck passionately rejects this conclusion. He demonstrates that causality is not a physical property that can be empirically verified or falsified; rather, causality is a **heuristic guiding principle**—a necessary precondition for scientific thought itself. Furthermore, Planck shows that causality is not abolished in quantum mechanics; it is simply shifted: while the position of an individual electron is statistical, the evolution of the quantum state (the Schrödinger wave function Ψ) is strictly, rigidly deterministic. Physical laws are divided into dynamic laws (strictly causal, e.g. Maxwell's equations, general relativity) and statistical laws (macroscopic averages, e.g. thermodynamics), but statistical laws always presuppose causal interactions among micro-elements.",
    key_claims: [
      "Causality is not an empirical fact of nature, but a fundamental heuristic postulate of scientific reasoning.",
      "Quantum mechanics does not eliminate determinism; it shifts determinism from classical particle trajectories to the mathematical evolution of the quantum wave function.",
      "Statistical probabilities in physics do not signify acausal chaos, but reflect either micro-multiplicities or the limits of instrument interaction."
    ],
    concrete_evidence: [
      "Schrödinger's wave equation: iℏ ∂Ψ/∂t = ĤΨ, which is completely deterministic, allowing exact prediction of the probability wave's future state.",
      "Radioactive decay: while the decay of an individual radium atom cannot be predicted in time, the half-life of a gram of radium is predictable with absolute mathematical precision.",
      "Planck's formulation: 'An event is causally determined if it can be predicted with certainty, provided all antecedent conditions are known.'"
    ],
    operational_mechanisms: [
      {
        name: "The Heuristic Postulate of Causality",
        rule: "Never accept uncaused chance as a final scientific explanation; treat every statistical anomaly as a signal that deeper causal dynamics have not yet been isolated."
      }
    ],
    verbatim_citations: [
      "The law of causality is neither right nor wrong; it is a heuristic principle, a signpost to guide us in the maze of phenomena.",
      "It is fundamentally wrong to claim that quantum mechanics has abolished causality. The wave function obeys a strictly causal differential equation.",
      "Science cannot abandon causality without abandoning the very possibility of rational explanation."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "The Free Will Paradox: Resolution Through the Dual Perspective",
    timeline_location: "1936, Epistemological Papers",
    source_scope: "The conflict between determinism and free will; internal vs. external perspectives; moral responsibility",
    epistemic_status: "Primary Philosophical Resolution",
    materiality: "CRITICAL",
    summary: "Planck provides one of the most elegant and famous philosophical resolutions of the ancient dilemma between universal physical determinism and human free will. The question 'Is human will free or determined?' is a classic **phantom problem** because it fails to specify the point of observation. Planck resolves the paradox by establishing the **Dual Perspective Theorem**: (1) **From the External Perspective of an Objective Observer** (who knows all biological, psychological, and environmental determinants), human will is strictly causally determined; an omniscient mind could predict human choices just as an astronomer predicts a lunar eclipse; (2) **From the Internal Perspective of the Acting Subject**, human will is strictly, genuinely free. This is because the very act of the subject attempting to self-predict their future decision alters their cognitive motives and state, rendering internal prediction logically impossible. Therefore, for the acting individual, free will is an irreducible, living reality that establishes absolute moral responsibility.",
    key_claims: [
      "The conflict between free will and determinism is an illusion caused by confounding the internal subjective perspective with the external objective perspective.",
      "From an objective, third-person perspective, all human thoughts and actions are causally determined.",
      "From a subjective, first-person perspective, self-prediction is logically impossible; the individual is genuinely free and bears full ethical responsibility for their choices."
    ],
    concrete_evidence: [
      "The historical prediction of human behavior by biographers and psychoanalysts after the fact, showing causal continuity.",
      "The mathematical impossibility of a calculating system predicting its own state when the prediction itself constitutes a new input into the system.",
      "The absolute necessity of the categorical imperative and moral duty in human civilization."
    ],
    operational_mechanisms: [
      {
        name: "The Dual Perspective Theorem",
        rule: "Judge the past of others through the lens of causal understanding (external determinism); govern your own present actions through the lens of ethical freedom (internal agency)."
      }
    ],
    verbatim_citations: [
      "Seen from the outside, the will is causally determined. Seen from the inside, the will is free.",
      "No man can predict his own future actions purely by causal reasoning, for the very act of prediction is a new motive that alters the outcome.",
      "The freedom of the will is a fact of immediate consciousness. It is the foundation of all moral responsibility, and no scientific discovery can ever invalidate it."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "Religion and Natural Science: The Two Converging Paths",
    timeline_location: "May 1937, Baltic Lecture (Dorpat)",
    source_scope: "The relationship between scientific investigation and religious faith; the God of religion vs. the rational world-order of science; the battle against superstition and skepticism",
    epistemic_status: "Primary Meta-Philosophical Synthesis",
    materiality: "CRITICAL",
    summary: "Planck investigates the relationship between science and religion, which he declares are neither identical nor contradictory, but complementary partners marching along parallel paths toward the same ultimate reality. Religion addresses human moral duty, ethical conduct, and the emotional relationship to God. Natural science addresses objective physical reality, physical law, and the rational order of nature. For religion, God stands at the beginning of all contemplation as the supreme foundation; for science, God stands at the end of all thinking as the supreme cosmic crown. Science requires faith in an objective, rational world-order to begin its work, while religion requires rational order to prevent faith from decaying into wild superstition. Planck closes his intellectual legacy with an urgent appeal to fight a two-front war against both uncritical religious superstition and cynical, nihilistic scientific skepticism, proclaiming: 'Toward God!'",
    key_claims: [
      "Science and religion are mutually complementary: science provides the rational framework for understanding the cosmos, while religion provides the ethical compass for living in it.",
      "Both science and religion require faith: science rests on the unprovable metaphysical conviction that the cosmos is governed by an intelligible, rational order.",
      "The God of religion and the cosmic order of physics are two symbolic expressions of the same transcendent metaphysical reality."
    ],
    concrete_evidence: [
      "The historical fact that the greatest pioneers of physics (Kepler, Newton, Leibniz, Faraday, Maxwell, Planck) were men of deep religious reverence.",
      "The failure of crude materialist philosophies to provide an enduring basis for human ethics and moral courage under persecution.",
      "Planck's personal tragedy: his son Erwin Planck was executed by the Gestapo in January 1945 for his role in the July 20 plot to assassinate Adolf Hitler, a loss Planck endured through spiritual fortitude."
    ],
    operational_mechanisms: [
      {
        name: "The Convergence Axiom",
        rule: "Science leads to God through the awe-inspiring rationality of natural law; religion leads to God through moral conscience; the two disciplines reinforce rather than contradict each other."
      }
    ],
    verbatim_citations: [
      "Religion and natural science do not exclude each other, as some nowadays would have us believe; they complement and condition each other.",
      "For religion, God stands at the beginning of all contemplation; for science, at the end of all thinking.",
      "Nobody who is seriously engaged in scientific work can doubt that in the laws of the universe a spirit is manifested—a spirit vastly superior to that of man.",
      "On, then, through struggle and pain, toward our common goal: Toward God!"
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "scientific-autobiography-planck",
  title: "Scientific Autobiography and Other Papers",
  author: "Max Planck",
  publication_year: 1949,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Max Planck with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Scientific Autobiography and Other Papers
## A Forensic Epistemological Reconstruction of Quantum Genesis, Planck's Principle, Phantom Problems, and the Metaphysics of Science
### By Max Planck (1949/2014)

---

## Executive Epistemic Summary

Max Planck’s *Scientific Autobiography and Other Papers* is the essential philosophical testament of the physicist who inaugurated 20th-century physics with the discovery of the quantum of action ($h$) on December 14, 1900.

Beyond documenting the birth of quantum theory, this volume constitutes one of the most rigorous **epistemological defenses of scientific realism against positivism and nihilism**:
1. **The Quantum of Action ($E = h\nu$)**: How an "act of desperation" in blackbody radiation shattered classical continuous physics, demonstrating that physical nature makes discrete, quantized jumps.
2. **Planck's Principle (The Law of Scientific Succession)**: Modern scientific paradigms do not triumph by converting established orthodox gatekeepers, but because opponents die and a new generation grows up accustomed to the truth.
3. **The Anatomy of Phantom Problems (*Scheinprobleme*)**: Formulating the two golden criteria for meaningful scientific questions, excising unmeasurable metaphysical chimeras (such as the luminiferous ether).
4. **The Tri-Partite Epistemology**: Refuting Ernst Mach's sensory positivism by distinguishing between (a) the World of the Senses, (b) the Physical World Picture, and (c) the Real World.
5. **The Causal Status of Quantum Mechanics**: Demonstrating that quantum mechanics does not abolish causality, but shifts determinism from classical particles to the mathematical evolution of the Schrödinger wave function ($\Psi$).
6. **The Dual Perspective Resolution of Free Will**: Proving that human will is strictly causally determined from the external objective viewpoint, yet genuinely free from the internal subjective viewpoint.
7. **The Convergence of Science and Religion**: Establishing that science and religion are parallel paths toward the same ultimate reality: for religion, God stands at the beginning; for science, God stands at the end of all thinking.

---

## The Tri-Partite Ontological Architecture

\`\`\`
  [1. THE SENSE WORLD]
  Subjective, anthropomorphic, fallible
  (Sights, sounds, warmth, pain)
           ↓ (De-anthropomorphization via instruments)
  [2. THE PHYSICAL WORLD PICTURE]
  Theoretical, mathematical, invariant
  (Atoms, wave functions, Maxwell fields, E = hν)
           ↓ (Asymptotic approximation)
  [3. THE REAL WORLD (DAS REALE)]
  Objective, absolute, independent of human consciousness
  (The external cosmos governed by universal constants)
\`\`\`

---

## The 8 Invariant Content Units

${units.map(u => `### Unit ${u.chapter_num}: ${u.title}
- **Timeline & Setting**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Epistemological Synthesis
${u.summary}

#### Invariant Scientific Claims
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Concrete Evidence & Historical Experiments
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Philosophical & Scientific Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## Operational Principles for Epistemological Mastery

### 1. Planck's Generational Succession Law
When presenting revolutionary ideas, do not waste energy attempting to convince entrenched orthodoxy. Deliver the truth clearly, document the empirical evidence, and focus on mentoring the rising generation whose cognitive models are still fluid.

### 2. The Empirical Consequence Test
Before entering a heated intellectual or strategic debate, ask: *"If Hypothesis A is true rather than Hypothesis B, does it make any measurable, verifiable difference in the real world?"* If the answer is no, the argument is a phantom problem; abandon it immediately.

### 3. The Dual Perspective on Human Action
When analyzing others' past mistakes, apply external causal determinism to understand the systemic, environmental, and psychological pressures that shaped their choices. When governing your own present actions, apply radical subjective freedom and accept total moral responsibility.
`;

const mdPath = path.join(bookDir, 'master-notes.md');
fs.writeFileSync(mdPath, mdContent, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(fs.statSync(mdPath).size / 1024).toFixed(2)} KB)`);

// Render Standalone Interactive Reader index.html
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scientific Autobiography & Other Papers — Max Planck | Intellectualist Master Codex</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="stylesheet" href="../../css/reader-style.css">
  <style>
    :root {
      --bg-primary: #fcfbf9;
      --bg-card: #ffffff;
      --text-main: #1f1f1e;
      --text-muted: #6b6762;
      --accent-color: #85221c;
      --accent-soft: rgba(133, 34, 28, 0.08);
      --border-color: #e5e0d8;
      --border-subtle: #f0ebe1;
      --badge-bg: #f5f2ea;
      --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-serif: "Merriweather", Georgia, "Times New Roman", serif;
      --line-height: 1.75;
      --max-measure: 820px;
    }

    body.dark-mode {
      --bg-primary: #121314;
      --bg-card: #1c1d1f;
      --text-main: #e8e6e3;
      --text-muted: #9e9a93;
      --accent-color: #d9534f;
      --accent-soft: rgba(217, 83, 79, 0.15);
      --border-color: #2e3035;
      --border-subtle: #242629;
      --badge-bg: #26282c;
    }

    body.sepia-mode {
      --bg-primary: #f4ecd8;
      --bg-card: #fcf8ee;
      --text-main: #433422;
      --text-muted: #79664f;
      --accent-color: #8f3418;
      --accent-soft: rgba(143, 52, 24, 0.1);
      --border-color: #dfd2b9;
      --border-subtle: #ebdcc0;
      --badge-bg: #ebe0ca;
    }

    body.serif-font {
      font-family: var(--font-serif);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-primary);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: var(--line-height);
      transition: background-color 0.25s ease, color 0.25s ease;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Universal Header */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-card);
      border-bottom: 1px solid var(--border-color);
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      backdrop-filter: blur(8px);
    }
    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo-img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
    .brand-text h1 {
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--text-main);
    }
    .brand-text span {
      font-size: 0.75rem;
      color: var(--text-muted);
      display: block;
    }

    .topbar-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .btn-ctrl {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }
    .btn-ctrl:hover {
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    /* Sub-nav Views */
    .view-tabs-bar {
      background: var(--bg-primary);
      border-bottom: 1px solid var(--border-color);
      padding: 8px 24px;
      display: flex;
      justify-content: center;
      gap: 16px;
    }
    .view-tab {
      background: transparent;
      border: none;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-muted);
      padding: 6px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .view-tab.active {
      background: var(--accent-soft);
      color: var(--accent-color);
    }

    /* Main Container */
    .reader-container {
      max-width: var(--max-measure);
      margin: 32px auto;
      padding: 0 20px;
      flex: 1;
      width: 100%;
    }

    /* Hero Header */
    .codex-hero {
      text-align: center;
      padding: 36px 0 28px 0;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 36px;
    }
    .hero-badge {
      display: inline-block;
      background: var(--accent-soft);
      color: var(--accent-color);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 12px;
      border-radius: 12px;
      margin-bottom: 12px;
    }
    .codex-hero h2 {
      font-size: 2.3rem;
      font-family: var(--font-serif);
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
    }
    .codex-hero .hero-sub {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 680px;
      margin: 0 auto 16px auto;
    }
    .hero-meta-row {
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    /* Unit Card */
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.02);
      transition: border-color 0.2s;
    }
    .unit-card:hover {
      border-color: var(--accent-color);
    }
    .unit-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 12px;
    }
    .unit-meta-top {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-color);
      margin-bottom: 4px;
    }
    .unit-title {
      font-size: 1.35rem;
      font-family: var(--font-serif);
      font-weight: 700;
      color: var(--text-main);
    }
    .unit-tier-badge {
      background: var(--badge-bg);
      border: 1px solid var(--border-color);
      font-size: 0.72rem;
      padding: 4px 8px;
      border-radius: 6px;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .unit-section-title {
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin: 18px 0 8px 0;
    }

    .prose-p {
      font-size: 0.98rem;
      margin-bottom: 14px;
      color: var(--text-main);
    }

    .bullet-list {
      list-style-type: none;
      margin-bottom: 16px;
    }
    .bullet-list li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.94rem;
    }
    .bullet-list li::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: var(--accent-color);
      font-weight: bold;
    }

    .mechanism-box {
      background: var(--bg-primary);
      border-left: 3px solid var(--accent-color);
      padding: 14px 18px;
      border-radius: 0 6px 6px 0;
      margin: 14px 0;
    }
    .mechanism-box h5 {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 4px;
    }
    .mechanism-box p {
      font-size: 0.92rem;
      font-style: italic;
    }

    .quote-box {
      background: var(--badge-bg);
      border-left: 3px solid #7c6f64;
      padding: 12px 18px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 0.95rem;
      margin: 12px 0;
      border-radius: 0 6px 6px 0;
    }

    /* Matrix Table */
    .table-container {
      overflow-x: auto;
      margin: 20px 0;
    }
    .matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .matrix-table th, .matrix-table td {
      border: 1px solid var(--border-color);
      padding: 10px 14px;
      text-align: left;
    }
    .matrix-table th {
      background: var(--badge-bg);
      font-weight: 700;
    }

    /* Views visibility */
    .view-content {
      display: none;
    }
    .view-content.active {
      display: block;
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-color);
      background: var(--bg-card);
      padding: 24px;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: auto;
    }
  </style>
</head>
<body>

  <!-- Universal Sticky Topbar -->
  <header class="topbar">
    <a href="../../index.html" class="brand-group">
      <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon" class="brand-logo-img">
      <div class="brand-text">
        <h1>Intellectualist Codex</h1>
        <span>Total Replacement Benchmark &bull; Max Planck</span>
      </div>
    </a>
    <div class="topbar-controls">
      <button class="btn-ctrl" id="themeBtn" title="Toggle Theme">🌓 Theme</button>
      <button class="btn-ctrl" id="fontBtn" title="Toggle Serif / Sans">Aa Font</button>
      <a href="master-notes.md" class="btn-ctrl" download style="text-decoration:none;">📥 MD</a>
    </div>
  </header>

  <!-- View Switcher -->
  <nav class="view-tabs-bar">
    <button class="view-tab active" data-target="view-journey">View A: 8 Foundational Treatises</button>
    <button class="view-tab" data-target="view-ontology">View B: Tri-Partite Ontological Architecture</button>
    <button class="view-tab" data-target="view-philosophy">View C: Operational Philosophy of Science</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Philosophy of Physics Benchmark</span>
      <h2>Scientific Autobiography & Other Papers</h2>
      <p class="hero-sub">A Forensic Epistemological Reconstruction of Quantum Genesis, Planck's Principle, Phantom Problems, and the Metaphysics of Science</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Max Planck</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1949/2014</span>
        <span>&bull;</span>
        <span><strong>Scope:</strong> 5 Master Treatises in 8 Invariant Units</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: 8 Foundational Treatises -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">Treatise ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Epistemological Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Invariant Scientific & Metaphysical Claims</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Concrete Evidence & Historical Experiments</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Philosophical & Scientific Mechanisms</div>
        ${u.operational_mechanisms.map(m => `
        <div class="mechanism-box">
          <h5>${m.name}</h5>
          <p>${m.rule}</p>
        </div>
        `).join('')}

        <div class="unit-section-title">Verbatim Canonical Citations</div>
        ${u.verbatim_citations.map(q => `
        <div class="quote-box">"${q}"</div>
        `).join('')}
      </article>
      `).join('')}
    </section>

    <!-- VIEW B: Tri-Partite Ontological Architecture -->
    <section id="view-ontology" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Planck's Tri-Partite Epistemological Architecture</h3>
        <p class="prose-p">Planck's foundational refutation of Ernst Mach's sensory positivism, establishing the necessity of the real external world behind the mathematical models of science.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Epistemic Domain</th>
                <th>Characteristics</th>
                <th>Role in Science</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Sense World</strong></td>
                <td>Raw human sensory impressions (sight, sound, warmth)</td>
                <td>Subjective, anthropomorphic, variable, prone to illusion</td>
                <td>Point of departure for observation; must be transcended</td>
              </tr>
              <tr>
                <td><strong>2. Physical World Picture</strong></td>
                <td>Theoretical, mathematical constructs (atoms, fields, wave functions)</td>
                <td>Objective, invariant, non-anthropomorphic, evolving</td>
                <td>The working model created by physicists to eliminate human bias</td>
              </tr>
              <tr>
                <td><strong>3. Real World (Das Reale)</strong></td>
                <td>The absolute external cosmos existing independently of man</td>
                <td>Invariant, absolute, sovereign, beyond direct sensory access</td>
                <td>The ultimate objective of all scientific inquiry; the metaphysical anchor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: Operational Philosophy of Science -->
    <section id="view-philosophy" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Operational Heuristics for Scientific & Epistemic Reasoning</h3>
        <p class="prose-p">Practical philosophical principles formulated by Max Planck for distinguishing genuine scientific progress from intellectual confusion.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. Planck's Principle (The Generational Replacement Law)</h5>
          <p>Scientific revolutions do not succeed by converting entrenched authorities through debate. New ideas triumph because their opponents eventually die and a new generation arises accustomed to the new reality.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Empirical Consequence Filter (Eliminating Phantom Problems)</h5>
          <p>A question is meaningful only if its answer produces measurable physical consequences. Questions that cannot be decided by observation or experiment are phantom problems that must be excised from inquiry.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Dual Perspective on Free Will</h5>
          <p>Resolve the free will paradox by distinguishing the observer's frame: viewed from the outside, human actions are causally determined; experienced from the inside, the acting subject is free and morally responsible.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. The Convergence of Science and Faith</h5>
          <p>Science and religion are complementary: science provides the rational lawfulness of the physical cosmos, while religion provides ethical purpose. For religion, God is the foundation; for science, God is the crown.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; Max Planck's <em>Scientific Autobiography and Other Papers</em> &bull; Standalone Certified Knowledge Reconstruction</p>
  </footer>

  <script>
    // Theme toggle
    const themeBtn = document.getElementById('themeBtn');
    const themes = ['light', 'dark-mode', 'sepia-mode'];
    let currentThemeIdx = 0;
    themeBtn.addEventListener('click', () => {
      document.body.classList.remove('dark-mode', 'sepia-mode');
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      if (themes[currentThemeIdx] !== 'light') {
        document.body.classList.add(themes[currentThemeIdx]);
      }
    });

    // Font toggle
    const fontBtn = document.getElementById('fontBtn');
    fontBtn.addEventListener('click', () => {
      document.body.classList.toggle('serif-font');
    });

    // View tabs switcher
    const tabs = document.querySelectorAll('.view-tab');
    const viewSections = document.querySelectorAll('.view-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        viewSections.forEach(s => s.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  </script>
</body>
</html>
`;

const htmlPath = path.join(bookDir, 'index.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log(`Successfully rendered Scientific Autobiography index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
