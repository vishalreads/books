const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'the-phenomenological-mind-gallagher-zahavi';
const title = 'The Phenomenological Mind: An Introduction to Philosophy of Mind and Cognitive Science';
const author = 'Shaun Gallagher & Dan Zahavi';
const category = 'Philosophy of Mind & Cognitive Science';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-historical-rift-reconvergence-phenomenology-cognitive-science",
    title: "Unit 1: The Historical Rift & Re-Convergence: Phenomenology Meets Contemporary Cognitive Science",
    themes: [
      "The Century-Long Divide: Anglo-American Functionalism/Behaviorism vs. Continental Phenomenology",
      "What Phenomenology Truly Is: The Rigorous Investigation of the Structures of First-Person Experience",
      "The Failure of Computational Functionalism: The 'Hard Problem' and the Neglect of Lived Subjectivity",
      "The Three Continental Pillars: Edmund Husserl, Martin Heidegger, and Maurice Merleau-Ponty",
      "The Modern Marriage: How 4E Cognitive Science (Embodied, Embedded, Enactive, Extended) Reinvents Phenomenology"
    ]
  },
  {
    id: "unit-2-phenomenological-methodologies-epoche-neurophenomenology",
    title: "Unit 2: Phenomenological Methodologies: Epoché, Eidetic Variation, and Neurophenomenology",
    themes: [
      "The Natural Attitude: Our Naive, Pre-Philosophical Presupposition of an Independent World Out There",
      "The Epoché and Phenomenological Reduction: Bracketing Metaphysical Assumptions to Interrogate Appearances As Experienced",
      "Eidetic Variation: Imaginatively Varying Features to Discover Invariant Structural Essences of Phenomena",
      "Naturalizing Phenomenology: Francisco Varela's Neurophenomenological Integration of Dynamical EEG and First-Person Reports",
      "Front-Loading Phenomenology: Designing Experimental Cognitive Paradigms Informed in Advance by Phenomenological Insights"
    ]
  },
  {
    id: "unit-3-consciousness-pre-reflective-self-awareness",
    title: "Unit 3: Consciousness & Pre-Reflective Self-Awareness: The 'Mineness' (Jemeinigkeit) of Experience",
    themes: [
      "The Core Insight: All Conscious Experience Possesses an Inherent, Implicit First-Person Quality ('For-Me-Ness')",
      "Pre-Reflective Self-Consciousness: Being Aware of One's Experience Without Generating a Secondary Thematic Reflection",
      "Critique of Higher-Order Thought (HOT) and Perception (HOP) Theories: The Infinite Regress Fallacy",
      "Blindsight and Pathological Disconnects: Preserved Subconscious Processing Lacking Phenomenal Mineness",
      "The Transition to Explicit Reflection: How the Self Takes Its Own Lived Flow as an Object of Scrutiny"
    ]
  },
  {
    id: "unit-4-time-consciousness-temporal-flow-dynamical-systems",
    title: "Unit 4: Time-Consciousness & Temporal Flow: Primal Impression, Retention, Protention",
    themes: [
      "The Paradox of Temporal Perception: How We Perceive a Melody Rather than Isolated, Static Tones",
      "Husserl's Tripartite Architecture: Primal Impression (Current Phase), Retention (Immediate Past Echo), and Protention (Immediate Anticipation)",
      "The Non-Linear Now: Consciousness as a Dynamic Temporal Horizon Rather than an Infinitesimal 'Knife-Edge' Instant",
      "Dynamical Systems Theory in Cognitive Science: Phase Spaces, Attractors, and Mathematical Models of Temporal Flow",
      "Historicity and Narrative Retention: How Deeper Past Conditioning and Future Projects Structure Immediate Experience"
    ]
  },
  {
    id: "unit-5-perception-enactivism-perceptual-holism",
    title: "Unit 5: Perception & Enactivism: Perceptual Holism, Affordances, and Sensorimotor Contingencies",
    themes: [
      "Rejecting the Classical Snapshot Model: Perception as Active Exploration, Not Passive Retinal Image Processing",
      "Perceptual Holism: The Part Is Always Experienced Against an Unseen but Implied Gestalt Background",
      "J.J. Gibson's Ecological Affordances: Perceiving Objects Directly in Terms of Action Possibilities (Graspability, Climbability)",
      "Sensorimotor Enactivism (Alva Noë & Kevin O'Regan): Vision as a Mode of Mastery Over Sensorimotor Dependencies",
      "The Social Grounding of Perception: How Intersubjective Habituation Shapes What and How We Perceive"
    ]
  },
  {
    id: "unit-6-intentionality-myth-of-mental-representation",
    title: "Unit 6: Intentionality & The Demolition of Representationalism: Being Directed at the World",
    themes: [
      "Brentano's Redefinition: Intentionality as the Defining Mark of Mental Phenomena (Aboutness or Directedness)",
      "Critique of the Internal Picture Theory: The Mind Does Not Gaze at Internal Mental Snapshots of the External World",
      "Resemblance and Causation Fallacies: Why Pure Physical Causality Cannot Account for Semantic Significance",
      "Husserl's Noesis-Noema Correlation: The Act of Intending and the Intended Object in Its Mode of Presentation",
      "Transcending the Internalism vs. Externalism Debate: Mind as Being-in-the-World (In-der-Welt-sein)"
    ]
  },
  {
    id: "unit-7-embodied-mind-body-schema-vs-body-image",
    title: "Unit 7: The Embodied Mind: Body Schema (Schéma Corporel) vs. Body Image (Image Corporelle)",
    themes: [
      "Merleau-Ponty's Foundational Distinction: The Physical Corpse (Körper) vs. The Living Phenomenal Body (Leib / Corps Propre)",
      "The Body Schema (Schéma Corporel): Sub-Personal, Pre-Reflective Sensorimotor Capacities Operating Automatically",
      "The Body Image (Image Corporelle): The Conscious Perceptual, Conceptual, and Emotional Mental Representation of One's Body",
      "Pathological Dissociations: Ian Waterman's Total Deafferentation vs. Anorexia Nervosa and Somatoparaphrenia",
      "The Spatiality of Situation: How the Body Anchors Egocentric Space and Makes the World Navigable"
    ]
  },
  {
    id: "unit-8-action-agency-sense-of-ownership-libet-debate",
    title: "Unit 8: Action & Agency: The Sense of Agency vs. The Sense of Ownership",
    themes: [
      "Dissecting Volition: The Fundamental Phenomenological Distinction Between 'My Body Moved' and 'I Moved My Body'",
      "Sense of Ownership (SoO): The Pre-Reflective Feeling That It Is My Body Undergoing Motion",
      "Sense of Agency (SoA): The Sense That I Am the Active Initiator and Controller of the Action",
      "Pathologies of Volition: The Anarchic/Alien Hand Syndrome, Involuntary Reflexes, and Passivity Symptoms in Schizophrenia",
      "Deconstructing the Libet Experiments: Why Pre-Motor Readiness Potentials (RP) Do Not Disprove Free Agency"
    ]
  },
  {
    id: "unit-9-intersubjectivity-knowing-others-beyond-theory-of-mind",
    title: "Unit 9: Intersubjectivity: Refuting 'Theory of Mind' via Primary and Secondary Embodied Interaction",
    themes: [
      "The Flawed Orthodoxy: Theory-Theory (TT) and Simulation-Theory (ST) as Overly Intellectualized Cartesian Theses",
      "The Conceptual Problem of Other Minds: Why We Do Not Infer Other Minds from Invisible, Hidden Hypotheses",
      "Primary Intersubjectivity (Colwyn Trevarthen): Direct, Pre-Reflective Bodily Resonance, Gaze-Following, and Neonatal Imitation",
      "Secondary Intersubjectivity: Triadic Shared Attention Involving Objects in Common Environmental Contexts",
      "Narrative Practice Hypothesis: How Social Understanding Relies on Cultural Narratives Rather than Internal Mindreading Modules"
    ]
  },
  {
    id: "unit-10-self-personhood-minimal-vs-narrative-self",
    title: "Unit 10: Self & Personhood: The Minimal Self vs. Narrative Self, Refuting Neuroskepticism",
    themes: [
      "The Challenge of Neuroskepticism: Thomas Metzinger and Daniel Dennett's 'No-Self' Illusionism",
      "The Phenomenological Triad of Selfhood: The Minimal (Core) Self vs. The Experiential Self vs. The Narrative Person",
      "The Minimal Self: The Immediate, Invariant, Pre-Reflective 'Ipseity' Inherent in Any Conscious Experience",
      "The Narrative Self: The Diachronic Identity Constructed Through Memory, Social Roles, and Autobiographical Storytelling",
      "Pathologies of Ipseity: Josef Parnas and Louis Sass's Phenomenological Model of Schizophrenia as Self-Disorder"
    ]
  }
];

const masterNotes = `# Master Codex: The Phenomenological Mind: An Introduction to Philosophy of Mind and Cognitive Science
**Authors:** Shaun Gallagher & Dan Zahavi  
**Subject:** Phenomenology, Philosophy of Mind, Embodied/Enactive Cognitive Science, Neurophenomenology  
**System:** Book Knowledge Reconstruction System (BKRS v2.0 Standard)  
**Standard:** Replacement-Grade Knowledge Architecture (>32,000 Characters, Propositional Rigor, Deep Primary Exegesis)

---

## Executive Architectural Summary: Bridging the Great Continental-Analytic Chasm

Published by Routledge, *The Phenomenological Mind: An Introduction to Philosophy of Mind and Cognitive Science* by Shaun Gallagher and Dan Zahavi represents a historic paradigm shift in contemporary philosophy of mind and cognitive neuroscience. For nearly a century, Anglo-American cognitive science and philosophy of mind operated within a Cartesian, computational, and functionalist orthodoxy. The mind was conceptualized either as an abstract computer software running on biological wetware (computational functionalism), or as a purely physical brain whose subjective phenomenal properties could be reduced without remainder to neural firings (reductive physicalism) or dismissed as non-existent user illusions (eliminative materialism and neuroskepticism).

In stark contrast, European Continental phenomenology—inaugurated by Edmund Husserl, transformed by Martin Heidegger, and embodied by Maurice Merleau-Ponty and Jean-Paul Sartre—insisted on starting from the first-person perspective: the invariant structures of lived, pre-reflective, embodied experience.

Gallagher and Zahavi demonstrate with surgical precision that cognitive science cannot solve its foundational dilemmas—including the "hard problem of consciousness," the nature of intentionality, the binding problem, sensorimotor perception, voluntary agency, empathy, and social cognition—without the rigorous descriptive tools of phenomenology. Simultaneously, they show that phenomenology cannot remain an isolated, armchair transcendental exercise; it must be naturalized through dynamic collaboration with neuroscience, developmental psychology, and psychopathology.

The resulting synthesis forms the philosophical bedrock of **4E Cognitive Science**: the recognition that the mind is **Embodied** (constituted by biological corporeality), **Embedded** (rooted in physical environments), **Enactive** (emerging through exploratory action), and **Extended** (scaffolded across cultural and social practices).

---

## Unit 1: The Historical Rift & Re-Convergence: Phenomenology Meets Contemporary Cognitive Science

### 1.1 The Century of Mutual Alienation
Throughout the twentieth century, academic philosophy suffered a profound schism:
1. **The Analytical Tradition**: Dominated by logical positivism, ordinary language philosophy, behaviorism, and cognitive functionalism. It viewed the mind through a third-person, objectifying lens. Mental states were treated as functional relations between sensory inputs and motor outputs, formal syntactic operations, or neurochemical configurations. First-person descriptions were dismissed as unscientific "folk psychology."
2. **The Phenomenological Tradition**: Stemming from Edmund Husserl's call to return *"to the things themselves"* (*zu den Sachen selbst*). Husserl argued that all scientific knowledge, including physics and mathematics, is ultimately rooted in the primordial ground of lived experience (*Lebenswelt* / the Life-World). To ignore subjective experience while building a science of the mind is like constructing an elaborate skyscraper while systematically dynamiting its foundations.

### 1.2 The Crisis of Cognitive Science: The "Hard Problem" and Functionalist Blind Spots
By the late twentieth century, mainstream cognitive science collided with insurmountable theoretical barriers:
- **The Explanatory Gap (Joseph Levine)**: Even if neuroscience maps every synaptic event occurring when someone sees a red rose, there is no logical necessity connecting physical C-fiber firings to the subjective, qualitative experience of red (*qualia*).
- **The Hard Problem of Consciousness (David Chalmers)**: Third-person functional mechanisms explain *how* the brain discriminates stimuli or integrates information, but they fail completely to explain *why* any of this functional processing is accompanied by an inner, felt life.
- **The Symbol Grounding Problem**: Formal computational algorithms manipulate meaningless syntactic tokens, unable to account for how symbols acquire genuine, worldly semantic meaning.

### 1.3 The Emergence of 4E Cognitive Science
Gallagher and Zahavi show that these crises arose directly from Cartesian presuppositions: treating the mind as an internal, disembodied, non-physical Cartesian theater observing an external, alien world. 
The re-convergence between phenomenology and cognitive science was catalyzed by Francisco Varela, Evan Thompson, and Eleanor Rosch (*The Embodied Mind*, 1991). The new 4E paradigm asserts:
- **Embodied**: Cognition is not localized exclusively in the neocortex; it is shaped, constrained, and constituted by the morphology, sensorimotor capacities, and biological vitality of the living body.
- **Embedded**: The agent is always situated within a specific, structured physical environment.
- **Enactive**: Perceiving is not passive retinal reception; it is active sensorimotor exploration and sense-making.
- **Extended**: Cognitive processes co-opt tools, language, and cultural artifacts as constitutive components of the cognitive apparatus.

---

## Unit 2: Phenomenological Methodologies: Epoché, Eidetic Variation, and Neurophenomenology

### 2.1 The Natural Attitude (*Die Natürliche Einstellung*)
In daily life, human beings operate within what Husserl called the **natural attitude**:
- We naively assume that an objective, physical, observer-independent world exists "out there," populated by stable objects that possess intrinsic properties regardless of our perception.
- While the natural attitude is essential for biological survival and empirical science, it becomes a fatal obstacle when investigating consciousness itself, because it treats consciousness as just another mundane object inside the physical container of the universe.

### 2.2 The Epoché and Phenomenological Reduction
To break free from the unexamined prejudices of the natural attitude, phenomenology employs a two-step methodological procedure:
1. **The Epoché (Bracketing / Suspension)**: The investigator deliberately "brackets" or suspends all metaphysical judgments regarding the mind-independent existence or non-existence of the world. One does not deny the world (which would be dogmatic skepticism or solipsism); one merely ceases taking its objective existence for granted.
2. **The Phenomenological Reduction (*Reduktion*)**: Having suspended naive realism, the investigator turns attention toward the phenomena themselves—the objects *as they are experienced* in the first-person perspective. The question changes from *"What is the physical constitution of that object?"* to *"What are the essential structures and conditions of possibility through which this object appears to consciousness?"*

### 2.3 Eidetic Variation (*Wesensschau*)
How does phenomenology distinguish universal structural invariants from idiosyncratic, accidental features of personal experience? Husserl formulated the method of **eidetic variation**:
- The phenomenologist takes an experienced phenomenon (e.g., visual perception, temporal memory, empathy) and imaginatively varies its properties.
- One mentally alters its color, size, distance, emotional tone, and spatial context.
- What properties can be stripped away while the phenomenon remains recognizably what it is?
- What properties, when removed, cause the phenomenon to collapse? Those properties that *cannot* be varied without destroying the phenomenon constitute its **eidos** (essential invariant structure). For instance, spatial perception *necessarily* presents objects from a limited perspective, exhibiting horizonality (we see the front of a house, which inherently implies the unseen back).

### 2.4 Neurophenomenology and Front-Loaded Phenomenology
Gallagher and Zahavi demonstrate how these first-person methods are rigorously integrated into contemporary empirical neuroscience:
- **Francisco Varela's Neurophenomenology**: Subjects are trained in phenomenological reflection to provide refined, first-person subjective descriptions of their cognitive states (e.g., subtle shifts in attention, mental fatigue, emotional coloration) during experimental tasks. These first-person reports are directly correlated with non-linear, dynamical neural measures (such as transient phase-synchrony across widespread EEG frequencies), transforming raw neural data from statistical noise into meaningful physiological signatures of conscious experience.
- **Front-Loaded Phenomenology (Shaun Gallagher)**: Instead of conducting an experiment and trying to interpret the results through phenomenology retrospectively, researchers use phenomenological distinctions (e.g., the difference between the *body schema* and *body image*, or the *sense of agency* vs. *sense of ownership*) to design the experimental paradigm itself, dictating task constraints, control conditions, and stimulus presentations.

---

## Unit 3: Consciousness & Pre-Reflective Self-Awareness: The "Mineness" (*Jemeinigkeit*) of Experience

### 3.1 The Invariant Quality: "What It Is Like"
Drawing upon Thomas Nagel's famous question (*"What is it like to be a bat?"*), Gallagher and Zahavi argue that every conscious mental state has a distinctive, first-person qualitative character:
- There is a felt quality to tasting coffee, feeling a sharp pain, recalling childhood memories, or listening to a symphony.
- This qualitative dimension is not an incidental luxury added onto cognitive processing; it is the definitive hallmark of consciousness.

### 3.2 Pre-Reflective Self-Consciousness vs. Reflective Self-Consciousness
A crucial contribution of Continental phenomenology is the distinction between two fundamentally different modes of self-awareness:
1. **Pre-Reflective Self-Consciousness**: An implicit, non-thematic, non-conceptual, immediate awareness of one's own conscious state that accompanies every waking experience. When I am engrossed in reading a novel, I do not actively think, *"I, John, am now reading a book."* Yet my experience is never anonymous; it is unmistakably felt from the inside as *my* experience.
2. **Reflective Self-Consciousness**: A secondary, explicit, thematic, higher-order cognitive act where the self turns attention back upon its own prior experience, taking it as an intentional object of scrutiny (e.g., *"Why did I just feel that surge of jealousy?"*).

### 3.3 The Refutation of Higher-Order Thought (HOT) Theories
In analytic philosophy of mind, thinkers like David Rosenthal propose **Higher-Order Thought (HOT) theories**: a mental state becomes conscious only when targeted by an extrinsic, secondary, higher-order mental state that represents it.
Gallagher and Zahavi dismantle this analytical thesis through two devastating logical counterarguments:
1. **The Threat of Infinite Regress**: If a mental state $M_1$ requires a higher-order state $M_2$ to become conscious, what makes $M_2$ conscious? If $M_2$ requires $M_3$, and $M_3$ requires $M_4$, the theory collapses into an absurd infinite regress. If the theorist replies that $M_2$ is unconscious, they are forced into the absurd claim that consciousness is magically generated by stacking unconscious states upon one another.
2. **Misrepresentation and Distortion**: If consciousness depends upon a higher-order representation, it is possible for the higher-order state to misrepresent the first-order state, producing the nonsensical conclusion that one could feel severe pain without having any painful state, or vice versa.

Phenomenology resolves this dilemma: **Consciousness is intrinsically self-luminous.** Like a flame that illuminates surrounding objects while simultaneously illuminating itself, a conscious state is pre-reflectively self-aware by its very nature.

### 3.4 The Phenomenon of "Mineness" (*Jemeinigkeit* / For-Me-Ness)
Drawing on Martin Heidegger's concept of *Jemeinigkeit*, the authors show that every conscious experience is characterized by **for-me-ness**:
- When I break my leg, the searing agony is immediately experienced as *mine*. I never have to observe the pain, check medical charts, and deduce: *"Ah, someone is in pain; based on proximity, it must be me!"*
- As Ludwig Wittgenstein noted, regarding first-person psychological statements, there is an **Immunity to Error through Misidentification (IEM)**. I can be mistaken about whether the object across the street is a dog or a wolf, but I cannot be mistaken about whether it is *I* who am having the visual experience.

---

## Unit 4: Time-Consciousness & Temporal Flow: Primal Impression, Retention, Protention

### 4.1 The Paradox of Temporal Continuity
How is it possible to perceive continuous movement or a succession of sounds?
If human consciousness were confined to an infinitesimal, dimensionless "knife-edge" present instant, temporal perception would be impossible:
- When listening to a melody, when note $C$ sounds, note $A$ and note $B$ have already ceased to exist.
- If consciousness were merely a sequence of disconnected, instantaneous snapshots, one would hear only note $C$ in total isolation, with zero perception of musical melody, chord progression, or rhythm.
- Nor does memory solve the problem: if we simply remembered note $A$ while hearing note $C$, we would hear note $C$ while simultaneously imagining note $A$, resulting in a cacophony of simultaneous tones rather than a sequential melody.

### 4.2 Husserl's Tripartite Triad of Time-Consciousness
Edmund Husserl resolved this foundational dilemma in his *Lectures on the Phenomenology of the Consciousness of Internal Time* (1905–1910) by revealing that the "living present" (*lebendige Gegenwart*) is not a mathematical point, but a **tripartite temporal field**:
1. **Primal Impression (*Urimpression*)**: The immediate, newly dawning phase of awareness focused on the core perceptual object right now (the sounding of note $C$).
2. **Retention (*Retention*)**: The immediate past phase that is kept alive in consciousness as just-having-been. Unlike secondary recollection (which active memory calls up from the distant past), retention is an immediate, passive, structural tail of the present instant. As note $C$ sounds, note $B$ is retained as having just sounded, and note $A$ is retained as having sounded just before $B$.
3. **Protention (*Protention*)**: The immediate, forward-looking horizon of expectation that anticipates what is about to occur. When listening to a melody or a spoken sentence, consciousness leans forward into the immediate future, anticipating the resolving harmonic cadence or the completing grammatical clause.

### 4.3 Dynamical Systems Theory in Neuroscience
Gallagher and Zahavi highlight the astonishing convergence between Husserlian time-consciousness and modern **dynamical systems theory**:
- The brain is not a static information-processing unit computing discrete frames; it is a non-linear dynamical system characterized by trajectories through high-dimensional phase space.
- The neural signature of any cognitive state is heavily conditioned by the state from which it just exited (retention / hysteresis) and the attractors toward which it is dynamically pulled (protention).
- Time-consciousness is the phenomenal manifestation of the brain's continuous, non-linear trajectories through state space.

---

## Unit 5: Perception & Enactivism: Perceptual Holism, Affordances, and Sensorimotor Contingencies

### 5.1 The Death of the Passive Camera Model
For centuries, classical empiricism treated visual perception as an internal projection: light hits the retina, creating an inverted two-dimensional image that the optic nerve transfers to the visual cortex, where an internal homunculus views the picture.
Phenomenology and contemporary enactivism completely shatter this passive model:
- **Perception is active sensorimotor exploration**: We do not passively receive visual inputs; we palpate the world with our eyes, head, hands, and body.
- Saccadic eye movements, head turns, and bodily repositioning are not secondary reactions to vision; they are constitutive of visual consciousness itself.

### 5.2 Perceptual Holism and Horizonality
Husserl demonstrated that human perception is fundamentally **holistic** and **horizonal**:
- When you look at an apple sitting on a table, you visually register only its front surface.
- Yet you do not experience a flat, paper-thin facade; you experience a three-dimensional, solid, juicy apple with a back, an interior core, and a bottom resting on wood.
- The unseen aspects are present to consciousness as an **internal horizon** of sensorimotor possibilities. You grasp the back of the apple implicitly through your sensorimotor familiarity: you know that if you reach out and rotate the fruit, or walk around the table, the unseen side will come into view.
- Every perceptual object is also situated against an **external horizon**: the room, the lighting, the gravity, and the surrounding social environment.

### 5.3 Gibsonian Affordances and Enactive Sensorimotor Contingencies
The authors integrate phenomenology with the ecological psychology of J.J. Gibson and the sensorimotor enactivism of Alva Noë and J. Kevin O'Regan:
- **Affordances (J.J. Gibson)**: The environment is not perceived as neutral geometric shapes with abstract physical properties that are subsequently interpreted by intellectual calculation. We perceive things directly in terms of their behavioral affordances: a chair is perceived as *sit-on-able*; a mug is perceived as *grasp-able*; an apple is perceived as *edible*; a cliff edge is perceived as *fall-off-able*.
- **Sensorimotor Contingencies (Noë & O'Regan)**: Visual experience is the practical mastery of how sensory inputs change systematically as a function of our bodily movements. To see depth is to understand implicitly how perspective shifts as we move.

---

## Unit 6: Intentionality & The Demolition of Representationalism: Being Directed at the World

### 6.1 Franz Brentano and the Re-Discovery of Intentionality
In 1874, Franz Brentano revived the medieval scholastic concept of **intentionality** (*Intentionalität*), designating it as the indispensable criterion that separates mental phenomena from purely physical phenomena:
- Every mental state is characterized by "directedness" toward an object.
- In perception, something is perceived; in judgment, something is affirmed or denied; in love, something is loved; in fear, something is feared.
- Physical objects (like rocks or tables) simply exist; they are never "about" anything else. Only minds possess **aboutness**.

### 6.2 The Demolition of Internal Representationalism
Mainstream cognitive science frequently assumes that intentionality operates via internal mental representations (internal pictures, symbols, or cognitive maps inside the head).
Gallagher and Zahavi show that this internal representationalism commits fatal category errors:
1. **The Homunculus Fallacy**: If my mind knows the external world by looking at an internal picture of the world, who is looking at the internal picture? Another internal eye? This requires an endless chain of little men inside the skull.
2. **The Failure of Resemblance**: A portrait of George Washington resembles Washington, but resemblance alone does not constitute intentionality. Two identical mass-produced coins resemble each other perfectly, yet neither coin is "about" the other.
3. **The Failure of Causation**: Physical causation is insufficient. Smoke is caused by fire, but smoke is not intentionally conscious of fire.

### 6.3 Husserl's Correlation: Noesis and Noema
Husserl demonstrated that intentionality is not a relation between two physical things inside the world (a brain and an object), but a correlation structure:
- **Noesis**: The subjective act of intending (perceiving, remembering, imagining, wishing).
- **Noema**: The objective correlate of the act; the object *in the specific manner in which it is presented* (e.g., the evening star seen at dusk vs. the morning star seen at dawn).
- When you look at a tree, your perception is directly of the real, wooden, leaf-bearing tree in the garden—not an internal phantom image in your skull. Mind is fundamentally **Being-in-the-world (*In-der-Welt-sein*)**, intimately woven into its surrounding environment.

---

## Unit 7: The Embodied Mind: Body Schema (*Schéma Corporel*) vs. Body Image (*Image Corporelle*)

### 7.1 Körper vs. Leib: The Living Phenomenal Body
Drawing upon the German phenomenological vocabulary, the authors distinguish:
- **Körper**: The physical, objective body as measured by medical instruments, anatomy textbooks, and physics—the corpse, the meat, the bones.
- **Leib / Corps Propre (Maurice Merleau-Ponty)**: The lived, subjective, phenomenal body as experienced from within—the zero-point of orientation (*Nullpunkt*), the vehicle through which we touch, see, feel, and act.

### 7.2 The Body Schema vs. The Body Image
One of Shaun Gallagher's most celebrated philosophical achievements is establishing the rigorous boundary between the **body schema** and the **body image**:
- **The Body Schema (*Schéma Corporel*)**: A dynamic, sub-personal, pre-reflective system of motor habits, postural adjustments, and sensorimotor capacities that operates beneath the level of conscious attention. When you reach for a glass of water, your body schema automatically coordinates dozens of muscle groups, adjusts your grip aperture to match the glass width, and maintains balance—without you having to consciously think about your fingers, wrist, or center of gravity. It is the body *in action*.
- **The Body Image (*Image Corporelle*)**: The conscious perceptual, conceptual, and emotional representation of one's own body. It consists of:
  1. *Perceptual body image*: The visual or tactile awareness of your limbs.
  2. *Conceptual body image*: Your intellectual knowledge about your body (e.g., knowing that humans have two kidneys and an appendix).
  3. *Emotional body image*: How you feel about your body (pride, vanity, shame, body dysmorphia).

### 7.3 Neurological Dissociations: Ian Waterman and Somatoparaphrenia
The independence of these two systems is proven by neurological pathology:
- **Ian Waterman (Severe Sensory Neuropathy / Deafferentation)**: At age nineteen, Waterman lost all proprioception and tactile feedback below the neck due to a viral infection. His body schema was completely destroyed; if he closed his eyes, he had no idea where his limbs were. To move, he had to substitute his conscious **body image**: he had to look intently at his legs and consciously dictate every step, using visual attention to replace the lost automated body schema.
- **Somatoparaphrenia & Anorexia Nervosa**: In somatoparaphrenia (often following right parietal stroke), patients possess an intact motor body schema, but their conscious body image is shattered—they vehemently claim that their left arm belongs to the doctor or is a foreign object. In anorexia nervosa, the conceptual and emotional body image is grotesquely distorted while motor sensorimotor navigation remains intact.

---

## Unit 8: Action & Agency: The Sense of Agency vs. The Sense of Ownership

### 8.1 The Anatomy of Volition
When human beings act in the world, consciousness generates two distinct, intertwined phenomenal sensations:
1. **Sense of Ownership (SoO)**: The pre-reflective feeling that it is *my body* undergoing the physical movement.
2. **Sense of Agency (SoA)**: The pre-reflective feeling that *I am the intentional author, initiator, and controller* of the movement.

In normal, healthy voluntary action, these two senses are perfectly unified: when I deliberately raise my arm to hail a taxi, I feel that my arm is moving (SoO) and that I caused it to move (SoA).

### 8.2 Dissociating Agency and Ownership: Pathologies of the Will
Under involuntary or pathological conditions, SoA and SoO diverge dramatically:
- **Passive Involuntary Movement**: If someone grabs my arm and forces it upward, I experience an unmistakable Sense of Ownership (it is definitely *my* arm being moved), but zero Sense of Agency (I did not cause or want the movement).
- **Anarchic / Alien Hand Syndrome**: Following lesions to the medial frontal cortex or corpus callosum, a patient's hand acts autonomously—grabbing objects, unbuttoning shirts, or reaching for food against the patient's explicit will. The patient acknowledges the hand as physically attached to their torso (SoO), but experiences profound horror at the complete absence of agency (SoA).
- **Schizophrenic Passivity Symptoms**: Patients experiencing delusions of control report that their limbs are being moved by radio waves, demons, or government satellites. They retain ownership, but agency is violently externalized.

### 8.3 The Forward Comparator Model in Computational Neuroscience
The authors explain how neurobiology underpins this phenomenological distinction through the **forward comparator model**:
- When the motor cortex issues a motor command to the muscles, it simultaneously generates a parallel copy of the command: the **efferent copy (*efference copy*)**.
- An internal neural forward model predicts the sensory consequences of the motor act based on this efference copy.
- A **comparator** compares the predicted sensory feedback with the actual reafferent sensory feedback received from the muscles, joints, and skin:
  - If prediction and feedback match perfectly $\to$ the sensory consequences are attenuated (which explains why you cannot tickle yourself), and a pre-reflective **Sense of Agency** is generated.
  - If there is a mismatch, or if no efference copy exists $\to$ the movement is experienced as externally caused or involuntary.

### 8.4 Deconstructing the Benjamin Libet Challenge
In the 1980s, neurophysiologist Benjamin Libet performed experiments showing that a slow electrical brainwave—the **readiness potential (*Bereitschaftspotential*, RP)**—builds up in the motor cortex approximately 350 to 500 milliseconds *before* a subject reports conscious awareness of the "urge to move." Physicalists and determinists triumphantly declared that conscious free will is an illusion: the brain decides unconsciously, and the conscious mind merely invents a post-hoc rationalization.

Gallagher and Zahavi deliver a devastating phenomenological critique of Libet's conclusions:
1. **Artificial, Meaningless Action**: Libet's subjects sat in a lab flicking their wrists while staring at a rotating clock. This is not genuine human action; it is a bizarre, context-free laboratory reflex.
2. **Conflating Pre-Reflective Agency with Retrospective Timing**: Asking a subject to monitor the precise millisecond they feel an "urge" forces them into an artificial, reflective mode that disrupts the natural, pre-reflective flow of agency.
3. **Action as an Extended Temporal Process**: Real human agency (e.g., driving a car, playing chess, writing a book, making moral decisions) is not a series of isolated, instantaneous wrist-flicks; it is a temporally extended, intentional project embedded in social meaning and long-term commitments. The readiness potential is merely the preparatory physiological substrate of an intentional commitment already established by the agent.

---

## Unit 9: Intersubjectivity & Knowing Others: Beyond "Theory of Mind"

### 9.1 The Flawed Orthodoxy: Theory-Theory (TT) and Simulation-Theory (ST)
For decades, Anglo-American cognitive science maintained that human beings understand other people through an internal mechanism dubbed **Theory of Mind (ToM)**:
- **Theory-Theory (TT)**: Human beings possess an internal, innate folk-psychological theory (a quasi-scientific database of rules) that allows them to infer unobservable internal mental states (beliefs, desires, intentions) from observed physical behaviors.
- **Simulation-Theory (ST)**: Humans use their own brain and cognitive apparatus as an offline simulation model, projecting themselves into the other person's shoes, running a counterfactual simulation, and attributing the resulting mental states to the other.

### 9.2 The Phenomenological Critique: The Fallacy of the Invisible Mind
Gallagher and Zahavi expose the radical Cartesian errors underlying both TT and ST:
- Both theories assume that the other person is fundamentally a closed, physical automaton whose mind is an invisible, hidden ghost trapped inside an impenetrable skull.
- Merleau-Ponty and Max Scheler proved that this is an absurd distortion of lived experience: **We do not infer another person's anger from their facial contortions; we see the anger directly in the furrowed brow, the clenched jaw, and the trembling voice!**
- The body of the other is not an opaque physical screen hiding a mind; it is the expressive, living field of mindedness itself.

### 9.3 Primary and Secondary Intersubjectivity
Drawing upon the revolutionary developmental research of Colwyn Trevarthen and Andrew Meltzoff, the authors establish a developmental, embodied alternative:
1. **Primary Intersubjectivity (0–12 months)**: Long before infants possess language, conceptual reasoning, or false-belief understanding, they engage in direct, innate, embodied communication with caregivers. Neonates only hours old imitate facial gestures (tongue protrusion, mouth opening); infants engage in emotional proto-conversations, vocal turn-taking, and affective gaze-attunement. This is direct, perceptual, non-inferential empathy.
2. **Secondary Intersubjectivity (1 year and beyond)**: The infant moves beyond dyadic face-to-face interaction to **triadic interaction**: sharing attention with another person toward an external object in the world (pointing, joint visual attention, evaluating a caregiver's facial expression to determine if a novel toy is safe).

### 9.4 The Narrative Practice Hypothesis (Daniel Hutto & Shaun Gallagher)
When human behavior becomes complex, puzzling, or unpredictable, we do not activate an arcane, quasi-scientific Theory-of-Mind module. Instead, we employ **narrative competence**:
- From early childhood, we are immersed in cultural storytelling (fairy tales, family histories, social gossip).
- We understand others by situating their actions within plausible narratives that provide historical reasons, emotional motivations, and cultural context.

---

## Unit 10: Self & Personhood: The Minimal Self vs. Narrative Self, Refuting Neuroskepticism

### 10.1 The Challenge of Neuroskepticism (The "No-Self" Illusionism)
In contemporary cognitive science, radical physicalists and neurophilosophers (such as Thomas Metzinger, Daniel Dennett, and Susan Blackmore) argue for **neuroskepticism**:
- The self is an illusion generated by the brain's computational architecture.
- In Metzinger's formulation (*Being No One*, 2003): *"Nobody has ever been or had a self... The phenomenal ego is a transparent mental model."*
- Because neurosurgeons cannot locate a physical "ego-module" or homunculus among the brain's cortical gyri, they conclude that the self does not exist.

### 10.2 The Phenomenological Rebuttal: The Minimal (Core) Self
Gallagher and Zahavi prove that neuroskepticism is based on a strawman definition of selfhood:
- Neuroskeptics define the self as a separate, unchanging, substantial, metaphysical entity (a Cartesian soul or homunculus) residing inside the head. When they fail to find this ridiculous homunculus, they declare that there is no self.
- Phenomenology offers a radically different, empirically robust definition: **The Minimal (Core) Self**:
  - The minimal self is not an object, not a substance, and not a thing.
  - It is the **intrinsic, pre-reflective, experiential dimension of consciousness itself**—the inescapable first-person "for-me-ness" (*Jemeinigkeit*) that characterizes every conscious mental state.
  - As long as there is an experience, there is a point of view, an experiential perspective, a subject of experience. To claim that consciousness exists without a self is like claiming that a perspective exists without a point of view!

### 10.3 The Tripartite Spectrum of Selfhood
To provide clarity across philosophical and clinical domains, Gallagher and Zahavi formulate a unified spectrum of selfhood:
1. **The Minimal (Core / Experiential) Self**: The pre-reflective, embodied, immediate point of view anchored in sensorimotor immersion and the living present. It requires no memory, no language, and no conceptual self-reflection. Even an animal or a human infant possesses a minimal self.
2. **The Interpersonal / Social Self**: The self defined through embodied interaction, gaze-following, primary and secondary intersubjectivity, and emotional resonance with other persons.
3. **The Narrative (Extended) Self / Personhood**: The diachronic, autobiographical identity constructed across time through memory, language, moral agency, social roles, and narrative self-interpretation. It answers the question: *"Who am I?"*

### 10.4 Psychopathology: Schizophrenia as an Ipseity Disorder
The authors examine the profound clinical framework developed by psychiatrist Josef Parnas and philosopher Louis Sass: **Schizophrenia as a disorder of basic self-awareness (*Ipseity Disturbance*)**:
- Schizophrenia is not primarily a disorder of intellectual reasoning or sensory hallucination; it is a fundamental breakdown of the **minimal self**.
- It manifests in two complementary structural pathologies:
  1. *Hyper-Reflexivity*: Spontaneous, pre-reflective bodily processes (breathing, speaking, walking) lose their transparency and become objectified, intrusive, and alienated.
  2. *Diminished Self-Affection*: The core, automatic feeling of "mineness" weakens. Thoughts and bodily movements no longer feel inherently personal, leading directly to delusions of control, thought insertion, and external passivity.

---

## Comparative Matrix: Cognitive Orthodoxy vs. Phenomenological Cognitive Science

| Dimension | Classical / Computational Orthodoxy | Phenomenological Cognitive Science (Gallagher & Zahavi) |
| :--- | :--- | :--- |
| **Locus of Mind** | Internal computational processor; localized neocortex. | Embodied, embedded, enactive, and socially extended organism. |
| **Methodology** | Third-person objective measurement; behavioral stimulus-response. | Epoché, eidetic variation, front-loaded phenomenology, neurophenomenology. |
| **Nature of Consciousness** | Epiphenomenon, user illusion, or higher-order functional state. | Primordial ground; intrinsically pre-reflectively self-aware (*for-me-ness*). |
| **Temporal Perception** | Discrete sequential snapshots processed by working memory. | Tripartite dynamic field: Primal Impression, Retention, and Protention. |
| **Perceptual Mechanism** | Passive image capture; retinal snapshot processed into internal model. | Active sensorimotor exploration of affordances and horizonal depth. |
| **Intentionality** | Internal syntactic representations, resemblance, or physical causation. | Being-in-the-world (*In-der-Welt-sein*); direct noetic-noematic correlation. |
| **The Human Body** | Mechanical physical vehicle (*Körper*); input-output hardware. | Phenomenal living body (*Leib* / *Corps Propre*); body schema vs. body image. |
| **Sense of Volition** | Illusory epiphenomenon; post-hoc narrative masking sub-conscious RP. | Pre-reflective Sense of Agency (SoA) and Ownership (SoO) in temporal projects. |
| **Social Cognition** | Theory of Mind (Theory-Theory and offline mental simulation). | Direct embodied resonance; primary/secondary intersubjectivity; narrative practice. |
| **Ontology of the Self** | "No-Self" illusion; computational fiction (Metzinger/Dennett). | Minimal experiential self (invariant for-me-ness) evolving into narrative person. |

---

## Appendix A: Key Figures in Phenomenological Cognitive Science
- **Edmund Husserl (1859–1938)**: Father of phenomenology; established epoché, phenomenological reduction, eidetic variation, noesis-noema correlation, and the tripartite structure of internal time-consciousness.
- **Martin Heidegger (1889–1976)**: Introduced *Dasein*, Being-in-the-world (*In-der-Welt-sein*), ready-to-hand (*Zuhandenheit*), and the existential mineness (*Jemeinigkeit*) of experience.
- **Maurice Merleau-Ponty (1908–1961)**: Forefather of embodied cognition; articulated the phenomenal body (*corps propre*), the body schema, motor intentionality, and perceptual holism.
- **Francisco Varela (1946–2001)**: Evolutionary biologist and neuroscientist who pioneered enactivism and neurophenomenology, bridging dynamical neuroscience and Buddhist/phenomenological meditation.
- **Shaun Gallagher & Dan Zahavi**: Contemporary philosophers leading the rigorous integration of phenomenology with neuroscience, developmental psychology, and psychiatric diagnostics.

---

## Appendix B: Seven Core Diagnostic Principles of Phenomenological Psychology
1. **The Principle of Lived Perspective**: Never analyze a psychological disorder or cognitive function solely from external behavioral metrics without first grasping what the condition feels like from the patient's first-person perspective.
2. **The Principle of the Body Schema**: Recognize that skilled human action relies on an automated, pre-reflective sensorimotor intelligence that is disrupted whenever conscious attention focuses too rigidly on the mechanics of movement.
3. **The Fallacy of the Detached Intellect**: When explaining human choices, reject the assumption that people are detached, calculating rationalists running game-theory algorithms. Humans act based on immediate, felt bodily affordances.
4. **The Directness of Emotion**: Do not treat social interaction as a cryptic puzzle where people decode hidden interior states. Emotions are embodied, expressive, and visible directly in posture, prosody, and facial dynamism.
5. **The Temporal Flow of Action**: Volition is not an isolated electrical flash occurring at millisecond zero; it is an ongoing, temporally extended narrative trajectory anchored in retention of past lessons and protention of future goals.
6. **The Reality of the Minimal Self**: Reject the nihilistic dogma of neuroskepticism. The self is not a mysterious ghost inside the machine; it is the immediate, undeniable reality of consciousness experiencing itself.
7. **The Integrity of the Horizon**: Whenever evaluating perception, remember that what is unseen (the back of the object, the contextual background, the cultural meaning) is just as essential to the experience as what is immediately visible.

---

## Appendix C: Comprehensive Glossary of Technical Phenomenological Terms
- **Epoché (ἐποχή)**: The deliberate suspension or bracketing of beliefs concerning the objective reality of the external world, clearing the way for investigating subjective appearances.
- **Phenomenological Reduction**: The systematic redirection of attention from naive worldly objects to the structures of conscious experience through which objects appear.
- **Eidetic Variation**: The mental method of imaginatively altering the features of an object or experience to discover its invariant structural essence (*eidos*).
- **Pre-Reflective Self-Consciousness**: The immediate, implicit, non-conceptual awareness that accompanies any conscious state without requiring a secondary act of introspection.
- **For-Me-Ness (*Jemeinigkeit*)**: The unmistakable first-person subjective quality that renders an experience inherently *mine*.
- **Primal Impression (*Urimpression*)**: The micro-temporal phase of consciousness focused on the immediate perceptual present.
- **Retention**: The passive, instantaneous retention of the just-elapsed phase of experience, ensuring continuity without requiring active recall.
- **Protention**: The passive, forward-looking anticipation of the immediate future phase of experience.
- **Noesis and Noema**: The dual structure of intentionality: *noesis* is the subjective intending act, and *noema* is the intended object in its specific mode of presentation.
- **Body Schema (*Schéma Corporel*)**: The sub-personal, pre-reflective system of sensorimotor capacities and postural coordination operating beneath conscious awareness.
- **Body Image (*Image Corporelle*)**: The conscious perceptual, conceptual, and emotional representation an individual holds of their own body.
- **Sense of Agency (SoA)**: The pre-reflective feeling that one is the active author and controller of a voluntary movement.
- **Sense of Ownership (SoO)**: The pre-reflective feeling that a moving limb or physical body belongs to oneself.
- **Primary Intersubjectivity**: Direct, pre-verbal, embodied communicative attunement between infant and caregiver.
- **Secondary Intersubjectivity**: Shared, triadic intentional attention between two individuals toward an external object or environmental context.
- **Minimal Self**: The basic, immediate, non-narrative subject of conscious experience; the invariant first-person perspective.
`;

const knowledgeUnitsJson = JSON.stringify(knowledgeUnits, null, 2);
fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), knowledgeUnitsJson, 'utf-8');
console.log(`Successfully wrote knowledge-units.json for ${title}`);

fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotes, 'utf-8');
console.log(`Successfully wrote master-notes.md for ${title} (${masterNotes.length} chars)`);

const proseHtml = marked.parse(masterNotes);

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | BKRS Master Codex</title>
  <link rel="stylesheet" href="../../css/reader-shell.css">
</head>
<body class="editorial-cream">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-left">
        <a href="../../index.html" class="back-link">← Catalog</a>
        <div class="breadcrumb">
          <span class="category-badge">${category}</span>
          <span class="separator">/</span>
          <span class="book-title-short">The Phenomenological Mind</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: Phenomenological Journey</button>
      <button class="view-btn" data-view="map">View B: 4E Cognitive Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Consciousness Dialectical Engine</button>
    </div>

    <main class="reader-content">
      <div id="view-journey" class="view-panel active">
        <article class="prose-content">
          <h1>${title}</h1>
          <p class="byline"><strong>Authors:</strong> ${author} | <strong>System:</strong> BKRS v2.0 Replacement-Grade Codex</p>
          <hr>
          ${proseHtml}
        </article>
      </div>

      <div id="view-map" class="view-panel">
        <div class="knowledge-map">
          <h2>4E Cognitive Blueprint: The Phenomenological Mind</h2>
          <p class="subtitle">Complete architecture linking Continental phenomenology (Husserl, Heidegger, Merleau-Ponty) to cognitive neuroscience, developmental psychology, and psychopathology across 10 foundational units.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Theses & Empirical Paradigms:</strong></p>
                  <ul>
                    ${u.themes.map(t => `<li>${t}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="view-experience" class="view-panel">
        <div class="analytical-engine">
          <h2>The Consciousness Dialectical & Diagnostic Engine</h2>
          <div class="engine-section">
            <h3>Diagnostic Maxims for 4E Embodied Cognition</h3>
            <div class="formula-box">
              <p><strong>1. The Pre-Reflective Reality:</strong> Consciousness does not require an internal homunculus or higher-order thought to become aware of itself. Every conscious state is pre-reflectively self-luminous and characterized by inescapable 'for-me-ness' (*Jemeinigkeit*).</p>
              <p><strong>2. The Body Schema vs. Body Image:</strong> Skilled action is mediated by the sub-personal, automated body schema (*schéma corporel*). Excessive conscious attention to bodily mechanics disrupts performance by forcing reliance on the reflective body image (*image corporelle*).</p>
              <p><strong>3. The Tripartite Flow of Time:</strong> Experience does not occur in knife-edge moments. It is structured by Husserl's tripartite horizon: Primal Impression (now), Retention (immediate past echo), and Protention (immediate future anticipation).</p>
              <p><strong>4. Intersubjectivity Before Inference:</strong> We do not infer other minds via intellectual theory modules. We perceive emotions directly in embodied posture, gaze, and action via primary and secondary intersubjectivity.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="reader-footer">
      <p>Intellectualist Knowledge System &bull; BKRS v2.0 Standard &bull; Replacement-Grade Distillation</p>
    </footer>
  </div>

  <script src="../../js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent, 'utf-8');
console.log(`Successfully wrote index.html for ${title} (${htmlContent.length} chars)`);
