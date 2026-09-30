const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'atheism-case-against-god-smith';
const title = 'Atheism: The Case Against God';
const author = 'George H. Smith';
const category = 'Philosophy & Critical Thought';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-scope-varieties-atheism",
    title: "Unit 1: The Scope & Varieties of Atheism: Deconstructing Cultural Slander",
    themes: [
      "Etymological and Philosophical Definition: 'A-theism' as Absence of Theistic Belief",
      "Implicit vs. Explicit Atheism (Innocent Ignorance vs. Rational Rejection)",
      "Refuting the 'Burden of Proof' Reversal: Theism Asserts, Atheism Withholds Assent",
      "Deconstructing Agnosticism: The Psychological Equivocation of Middle Ground",
      "Jacques Maritain and the Religious Slander of Moral Depravity"
    ]
  },
  {
    id: "unit-2-incoherence-theistic-concept",
    title: "Unit 2: The Incoherence of the Theistic Concept: Negative Theology & Non-Entity",
    themes: [
      "The Semantic Emptiness of 'God': What Does the Word Actually Denote?",
      "Negative Theology (Via Negativa): Defining an Entity Exclusively by What It Is Not",
      "The Trap of Incomprehensibility: If God is Unknowable, the Term is Unintelligible",
      "The Anthropomorphic Dilemma: Personhood vs. Incorporeal Infinity",
      "The Theistic Word-Game: Equating Mysterious Sound with Existential Reality"
    ]
  },
  {
    id: "unit-3-christian-deity-theological-collapse",
    title: "Unit 3: The Christian Deity & The Collapse of Theological Attributes",
    themes: [
      "Omnipotence Paradoxes: Can God Create a Stone He Cannot Lift?",
      "Omniscience vs. Free Will: Fatalism, Predestination, and Moral Culpability",
      "Immutability vs. Action: An Unchanging Being Cannot Form Intentions or Intervene",
      "The Problem of Evil: The Epicurean Trilemma Formalized",
      "The Retreat to Mystery: Faith's Inevitable Collapse into Theological Agnosticism"
    ]
  },
  {
    id: "unit-4-primacy-of-existence",
    title: "Unit 4: The Primacy of Existence vs. The Primacy of Consciousness",
    themes: [
      "The Fundamental Metaphysical Axiom: Existence Exists (The Law of Identity, A = A)",
      "Primacy of Existence: Reality Is Independent of Any Mind, Divine or Mortal",
      "Primacy of Consciousness: The Theistic Illusion that Will or Word Commands Reality",
      "Supernaturalism as Antinaturalism: The Violation of Identity and Causality",
      "The Principle of Parsimony (Ockham's Razor) Applied to Ontological Hypotheses"
    ]
  },
  {
    id: "unit-5-reason-vs-pathology-of-faith",
    title: "Unit 5: Reason, Epistemology & The Pathology of Faith: Mind as Biological Tool",
    themes: [
      "Reason Defined: The Faculty of Perceiving, Identifying, and Integrating Reality",
      "Faith Defined: Acceptance of Truth-Claims in the Absence of or Defiance of Evidence",
      "Misology: The Hatred, Distrust, and Systematic Denigration of Human Intellect",
      "Voluntarist Faith (Pascal, Kierkegaard, James): Willful Belief as Psychological Escape",
      "The Moral Incoherence of Commending Blind Credulity as a Virtue"
    ]
  },
  {
    id: "unit-6-skepticism-contextual-knowledge",
    title: "Unit 6: The Skepticism of Faith & Contextual Epistemology",
    themes: [
      "The Cynical Theistic Tactic: Weaponizing Radical Skepticism to Smuggle in Faith",
      "Contextual Certainty vs. Cartesian Paranoia: The True Criteria of Human Knowledge",
      "The Primacy of Sense Perception: Perceptual Data as Non-Volitional Foundations",
      "The Epistemic Double Standard: Demanding Impossible Proofs for Matter, Accepting God Blindly",
      "How Dogmatic Dogma Erodes Critical Reasoning Capacity"
    ]
  },
  {
    id: "unit-7-revelation-miracles-circularity",
    title: "Unit 7: Revelation, Biblical Inerrancy & The Deconstruction of Miracles",
    themes: [
      "The Epistemology of Revelation: How Does One Verify a Claimed Divine Transmission?",
      "The Vicious Circle of Holy Scripture: The Bible is True Because God Said So, God Exists Because the Bible Says So",
      "David Hume's Critique of Miracles: Weighing Testimony Against Constant Laws of Nature",
      "Psychological Origins of Prophecy: Hallucination, Pious Fraud, and Pre-Scientific Ignorance",
      "The Immorality of Threatening Hell for Doubting Ancient Hearsay"
    ]
  },
  {
    id: "unit-8-dismantling-cosmological-arguments",
    title: "Unit 8: Dismantling Natural Theology: The Cosmological & First Cause Arguments",
    themes: [
      "The Conditions of Legitimate Philosophical Explanation: Explicating the Unknown by the Known",
      "The First Cause Fallacy: Violating the Law of Causality to Assert an Uncaused Cause",
      "The Equivocation on 'Cause': Temporal Sequence vs. Ontological Dependency",
      "The Fallacy of Composition: If Parts Have Causes, Must the Total Cosmos Have a Cause?",
      "Thermodynamic Exploitations: Refuting Misconceptions of Entropy and Cosmic Beginnings"
    ]
  },
  {
    id: "unit-9-design-teleology-watchmaker-fallacy",
    title: "Unit 9: Design Arguments & The Fallacy of Teleological Intent",
    themes: [
      "William Paley's Watchmaker Analogy Examined and Dismantled",
      "The Fundamental Fallacy: Recognizing Design Depends on Contrast with the Undesigned",
      "Darwinian Evolution: How Complexity and Adapted Order Arise Non-Purposively",
      "Cosmic Indifference: The Harsh Realities of Nature Disproving Benevolent Design",
      "Anthropocentric Hubris: Assuming the Vast, Unfriendly Universe Was Engineered for Humans"
    ]
  },
  {
    id: "unit-10-rational-morality-vs-christian-guilt",
    title: "Unit 10: Rational Morality vs. The Pathology of Christian Guilt",
    themes: [
      "Ethics as an Objective Science of Human Survival and Flourishing (Eudaimonia)",
      "The False Dichotomy: 'Without God, Everything is Permitted' (Dostoevsky Deconstructed)",
      "The Ethics of Sacrifice: Altruism, Self-Abnegation, and Resentment",
      "The Psychological Guillotine: Original Sin, Vicarious Atonement, and Inherited Guilt",
      "The Liberated Secular Life: Intellectual Self-Esteem, Responsibility, and Joy"
    ]
  }
];

const masterNotes = `# Master Codex: Atheism: The Case Against God
## A Systematic Philosophical Critique of Theism, Faith, and Supernatural Metaphysics
### Author: George H. Smith | Standard: BKRS v2.0 Replacement-Grade Codex

---

## Executive Architectural Summary

Published in 1974, George H. Smith's *Atheism: The Case Against God* remains one of the most rigorous, lucid, and systematically sustained philosophical critiques of theistic belief ever produced in the English language. Unlike polemical manifestos that rely merely on rhetorical ridicule or broad anti-clerical grievances, Smith mounts a thorough investigation grounded in classical epistemology, Aristotelian logic, Objectivist metaphysics, and analytical philosophy.

Smith's primary objective is twofold:
1. **The Philosophical Case Against the Concept "God"**: To demonstrate that the concept of an incorporeal, omnipotent, omniscient supernatural creator is inherently self-contradictory, semantically meaningless, and epistemologically arbitrary.
2. **The Psychological and Moral Case Against the Practice of Faith**: To expose "faith"—defined as belief without or against evidence—as an epistemological vice and an abdication of the cognitive faculty (reason) necessary for human survival, autonomy, and moral flourishing.

Across twelve meticulously structured chapters, Smith dismantles centuries of theological apologetics, ranging from natural theology (cosmological, teleological, and ontological arguments) to voluntarist defenses of fideism (Pascal, Kierkegaard, William James). He establishes that atheism is not an assertive dogma requiring faith of its own, but the rational default: **the refusal to accept unsubstantiated assertions without evidence.**

---

## Unit 1: The Scope & Varieties of Atheism: Deconstructing Cultural Slander

### 1.1 The Core Idea in Plain English
Atheism is not a religion, not a faith, and not a dogmatic claim to possess secret cosmic omniscience. Stripped of centuries of church propaganda, an "atheist" is simply a person who does not believe in the existence of a god. The burden of proof always rests on the person making the positive claim that an invisible supernatural entity exists, not on the person who declines to believe until evidence is provided.

### 1.2 Etymological and Conceptual Clarification
Smith begins by stripping away the loaded pejorative connotations attached to the word "atheism":
- **Etymology**: Derived from the Greek *a-* (meaning "without") and *theos* ("god"). Literally, an atheist is someone *without theism*—that is, anyone who is not a theist.
- **The Negative Character of Atheism**: Atheism is not a positive ideology, a political manifesto, or a moral code. Just as "apolitical" means without politics, or "asymmetrical" means lacking symmetry, "atheist" designates the absence of a specific belief: theistic belief.
- **The Distinction Between Implicit and Explicit Atheism**:
  - *Implicit Atheism*: The absence of theistic belief without a conscious, deliberate rejection of it. An infant, or an isolated indigenous tribe that has never been exposed to theistic ideas, is an implicit atheist. They hold no belief in a deity because the concept has never been introduced to them.
  - *Explicit Atheism*: The conscious, deliberate rejection of theism following intellectual evaluation. The explicit atheist has examined theistic concepts, propositions, or arguments and concluded that they are either unsupported by evidence or logically incoherent.

### 1.3 The Myth of the Neutral Agnostic
Smith offers a devastating philosophical critique of the common colloquial use of "agnosticism" as a comfortable, intellectually cowardly middle ground between theism and atheism:
- **Thomas Henry Huxley's Original Definition**: When Huxley coined the term "agnostic" in 1869, he meant it as an *epistemological principle* concerning knowledge: that one should not claim to know or believe things for which one has no scientific evidence.
- **Belief vs. Knowledge**: Theism and atheism pertain to **belief** (whether one possesses a belief in a deity). Gnosticism and agnosticism pertain to **knowledge** (whether one claims certainty or knowability regarding a proposition).
- **The False Trilemma**: Colloquially, people view belief as a three-way scale: Theist (believes), Agnostic (doesn't know / on the fence), Atheist (believes there is no god). Smith exposes this as an elementary logical error.
  - One either believes in the existence of a deity, or one does not. There is no middle state between possessing a belief and not possessing it.
  - If you answer the question, "Do you actively hold a belief in the existence of a god?" with anything other than an affirmative "Yes" (including "I don't know," "There isn't enough evidence," or "The concept is unverifiable"), you do not possess theistic belief—which makes you, by exact definition, an atheist.
  - An "agnostic" who does not believe in God is simply an *agnostic atheist*; an "agnostic" who maintains a hopeful or voluntarist faith despite admitting a lack of proof is an *agnostic theist*.

### 1.4 Refuting the Inversion of the Burden of Proof
Theists frequently accuse the atheist of making an impossible claim: "How can you prove that God doesn't exist? You would have to know everything in the universe to prove a universal negative!"
- **The Epistemic Law of Burden of Proof**: The onus of proof rests solely on the person asserting a positive existence claim. A claim made without evidence can be dismissed without evidence.
- **The Fallacy of Demanding Proof of Non-Existence**: If one were obligated to disprove every entity that someone imagines, human thought would collapse into paralysis. One cannot disprove invisible flying unicorns on Neptune, teapots in orbit around Mars, or microscopic elves living inside rocks. 
- **The Status of the Arbitrary**: An arbitrary claim—a proposition advanced with zero evidence—is not "possible until disproved"; in epistemology, it has no cognitive standing. It does not qualify as a hypothesis; it is intellectually null and void.

### 1.5 Deconstructing Jacques Maritain and Religious Slander
Smith dissects the influential Catholic philosopher Jacques Maritain (*The Range of Reason*), who divided atheists into "pseudo-atheists" (who secretly believe in God but resent church authority) and "absolute atheists" (whom Maritain claimed are consumed by pride, moral depravity, and an active desire to destroy the moral order):
- Smith shows that Maritain's typology is a classic theological evasion: it avoids dealing with the atheist's actual philosophical arguments by diagnosing their psychology with theological guilt-trips.
- The claim that atheists reject God because they "want to sin without guilt" is psychologically absurd. Atheists reject God for the exact same reason educated people reject astrology, alchemy, and witchcraft: because there is no credible evidence to support them.

---

## Unit 2: The Incoherence of the Theistic Concept: Negative Theology & Non-Entity

### 2.1 The Core Idea in Plain English
Before we can argue about whether God exists, we must know what the word "God" means. If a word is defined only by what it isn't (not physical, not limited, not temporal, not mortal), it describes nothing at all. You cannot prove or disprove the existence of a word that has no coherent definition. The theist is asking us to believe in an "unknowable non-thing."

### 2.2 The Semantic Bankruptcy of "God"
Smith insists that the first philosophical challenge to theism is not metaphysical or cosmological, but **semantic**:
- When the theist says "God exists," what does the noun "God" denote?
- A valid concept must refer to something specific in reality; it must have identifiable attributes or characteristics that distinguish it from what it is not.
- If a term has no positive, identifiable attributes, it is an empty linguistic placeholder—a sound without a referent.

### 2.3 The Trap of Negative Theology (*Via Negativa*)
Throughout history, sophisticated theologians, recognizing that assigning human physical traits to God reduces Him to a pagan cartoon, adopted the *via negativa* (the way of negation):
- God is described by negations:
  - *Infinite* = Not finite.
  - *Incorporeal* = Not material, without body.
  - *Immutable* = Not subject to change.
  - *Incomprehensible* = Beyond human comprehension.
  - *Eternal* = Not bound by time.
- **Smith's Indictment**: What remains when you remove all finite, physical, temporal, and intelligible characteristics? Nothing.
  - An entity without physical properties, occupying no space, enduring for no duration of time, and possessing no discernible parts is indistinguishable from **non-existence**.
  - A difference that makes no difference is no difference at all. To say that God is "incorporeal spirit" is merely to say that God is not matter—it gives us zero information about what God *is*.

### 2.4 The Escape into "Incomprehensibility"
When pushed to explain how an entity can be conscious without a physical brain, or how an entity can act without spending time, the theist routinely retreats into the fortress of mystery: *"God's nature is incomprehensible to our limited human minds."*
- **The Self-Defeating Nature of Incomprehensibility**:
  - If God is truly incomprehensible, then no human can know what he is talking about when he utters the word "God."
  - If you do not understand the meaning of the proposition "X exists," you cannot rationally assert that "X exists." To claim belief in an incomprehensible concept is to claim belief in nonsense.
  - As Smith brilliantly notes: If a man says, *"I believe in a Bladgert, but I cannot describe a Bladgert, I cannot tell you what a Bladgert does, and the nature of a Bladgert is beyond human comprehension,"* he has not expressed a belief; he has uttered a meaningless sound.

### 2.5 The Anthropomorphic Compromise
The theist faces an inescapable dilemma:
1. **The Metaphysical/Scholastic Horn**: If he strips God of all human characteristics to protect Him from logical contradictions, God dissolves into an abstract, empty negation (the God of the philosophers) that cannot love, listen to prayers, judge sin, or interact with humanity.
2. **The Anthropomorphic Horn**: If he endows God with personality, anger, mercy, love, and will so that believers can worship Him (the God of the Bible), God becomes an oversized human being—a supernatural ghost whose emotions, changes of mind, and physical interventions blatantly contradict His supposed immutability and infinity.

---

## Unit 3: The Christian Deity & The Collapse of Theological Attributes

### 3.1 The Core Idea in Plain English
The classical attributes assigned to the Christian God—all-powerful (omnipotent), all-knowing (omniscient), all-good (omnibenevolent), and unchanging (immutable)—do not fit together. They clash violently with each other and with the reality of the world we live in. An unchanging God cannot answer prayers; an all-powerful, all-good God cannot permit the horrific, unearned suffering of innocent children.

### 3.2 Omnipotence and Its Inherent Contradictions
The doctrine of omnipotence states that God can do anything:
- **The Stone Paradox**: Can God create a stone so heavy that He cannot lift it?
  - If He *can* create such a stone, then there is something He cannot do: lift the stone.
  - If He *cannot* create such a stone, then there is something He cannot do: create the stone.
  - Either way, absolute omnipotence is logically impossible.
- **The Christian Apologetic Retreat**: Theologians like Thomas Aquinas replied that omnipotence means God can do anything that is *logically possible*; He cannot make a square circle or a married bachelor because contradictions are non-things.
- **Smith's Rejoinder**: Once the theologian admits that God is bound by the laws of logic, God ceases to be supernatural in the absolute sense; He is subordinated to the universal axioms of logic and identity. Furthermore, if God cannot do what is logically contradictory, can God sin? Can God die? Can God change His mind? A truly immutable, perfect being is constrained by dozens of things it cannot do.

### 3.3 Omniscience vs. Free Will
If God possesses total foreknowledge of every event from the beginning of time:
- God knew, before creating the universe, every decision every human would ever make, every word they would utter, and whether they would end up in heaven or hell.
- If God already knows that tomorrow you will eat an apple at 12:00 PM, it is impossible for you to choose an orange instead. If you could choose the orange, God's foreknowledge was mistaken; if you cannot choose the orange, your "free will" is an illusion.
- If human choices are rigidly determined by divine foreknowledge, the entire Christian theology of moral accountability, guilt, sin, and eternal punishment in hell becomes a grotesque moral atrocity. God deliberately creates souls knowing in advance with 100% certainty that they are destined for eternal torment.

### 3.4 Immutability vs. Creation and Action
Traditional Christian theology insists that God is **immutable** (incapable of change) and **eternal** (outside of time):
- **To Act is to Change**: Action is inherently temporal. It involves an agent transitioning from a state of intention to a state of execution, moving from before to after.
- A timeless, unchanging being cannot "decide" to create a universe at a particular moment, because "deciding" and "creating" imply a change from not-creating to creating.
- An immutable God cannot be moved by compassion, cannot listen to a prayer, and cannot experience joy or grief—because any reaction to human behavior would introduce change into an unchanging consciousness.

### 3.5 The Formal Problem of Evil: The Epicurean Trilemma
Smith re-articulates the classical dilemma first formulated by Epicurus:
1. Is God willing to prevent evil, but not able? Then He is impotent.
2. Is He able, but not willing? Then He is malevolent.
3. Is He both able and willing? Whence then is evil?
4. Is He neither able nor willing? Then why call Him God?

Smith demonstrates that popular theological defenses fail completely:
- **The "Free Will Defense"**: Even if one accepts that moral evil (human cruelty) is the cost of free will, this completely fails to explain **natural evil**—earthquakes, tsunamis, childhood leukemia, parasitism, and volcanic eruptions. Animals and infants suffered horrific agonies for hundreds of millions of years before humans ever walked the earth.
- **The "Greater Good" Defense**: To claim that God allows agonizing suffering for some mysterious higher cosmic purpose is to destroy the very meaning of "goodness." If human cruelty is "evil," but divine cruelty on an astronomical scale is called "inscrutable goodness," the word "good" has been completely inverted.

---

## Unit 4: The Primacy of Existence vs. The Primacy of Consciousness

### 4.1 The Core Idea in Plain English
At the root of all philosophy is a simple question: Which came first—reality itself, or a mind that imagined reality? Reason recognizes that physical reality exists on its own, regardless of what anyone thinks or feels (**the Primacy of Existence**). Religion believes the opposite: that reality was magically wished into being by a giant cosmic mind (**the Primacy of Consciousness**).

### 4.2 The Metaphysical Foundation: Existence Exists
Following the Aristotelian tradition, Smith lays down the fundamental axioms of rational metaphysics:
- **Axiom 1: Existence Exists**: Something exists. To deny this axiom requires you to exist in order to utter the denial.
- **Axiom 2: The Law of Identity ($A = A$)**: To exist is to be something specific. An entity must possess a specific nature with specific, identifiable properties. A thing cannot be both $A$ and not-$A$ at the same time and in the same respect.
- **Axiom 3: Consciousness is Awareness of Existence**: Consciousness is by definition the faculty of perceiving that which exists. A consciousness with nothing to be conscious of is an impossibility.

### 4.3 Primacy of Existence vs. Primacy of Consciousness
Smith highlights this crucial philosophical dichotomy (originally formulated by Ayn Rand):
- **The Primacy of Existence**: Reality exists independently of any consciousness. Facts are facts. Wishing, praying, hoping, or commanding cannot alter physical reality. Consciousness discovers reality; it does not invent it.
- **The Primacy of Consciousness**: The belief that consciousness takes precedence over existence; that reality is a product of mental will.
  - Theism is the supreme historical expression of the Primacy of Consciousness: it asserts that the entire physical universe was created *ex nihilo* (out of nothing) by the pure thought, will, or spoken word of a cosmic consciousness ("Let there be light").
  - In the theistic worldview, physical laws, natural identities, and causal relations are mere temporary whims of an all-powerful mind that can suspend them at will (miracles).

### 4.4 Supernaturalism as Antinaturalism
Supernaturalism does not merely claim that there is "something beyond nature"; it is an assault on the concept of nature itself:
- "Nature" is simply the totality of that which exists, governed by the Law of Identity and the Law of Causality (which is simply identity applied to action: an entity must act in accordance with its nature).
- A "miracle"—such as water turning into wine instantaneously without grapes or fermentation, or a corpse rising after three days—is a violation of the Law of Identity. It asserts that an entity can act in defiance of its physical nature.
- Therefore, supernaturalism is not an extension of knowledge; it is the destruction of knowledge, rendering all scientific causality arbitrary and unpredictable.

---

## Unit 5: Reason, Epistemology & The Pathology of Faith: Mind as Biological Tool

### 5.1 The Core Idea in Plain English
Reason is not a cold, useless game played by ivory-tower academics; it is the primary biological tool that human beings use to survive, build shelters, cure diseases, and live peaceful lives. "Faith" is the exact opposite of reason: it is deciding to believe something is true simply because you want it to be true or because an authority told you so, without any evidence. Treating faith as a holy virtue is like treating blindness as superior to sight.

### 5.2 The Definition of Reason
Smith defines **reason** with strict epistemological rigor:
- Reason is the cognitive faculty that identifies and integrates the material provided by human senses.
- It is the only objective method human beings possess for distinguishing truth from error, fact from fiction, and reality from hallucination.
- Reason is volitional: it requires active mental effort, discipline, critical scrutiny, and adherence to logical consistency.

### 5.3 The Anatomical Dissection of Faith
Theologians have obfuscated the meaning of "faith" by conflating it with confidence, trust, or hope. Smith clarifies the distinction:
- **Confidence based on evidence** (e.g., "I have faith that my car will start tomorrow because it has a new battery and worked today") is not religious faith; it is an inductive probability grounded in empirical evidence.
- **Religious Faith**: The acceptance of a factual truth-claim in the absence of evidence, or in direct contradiction to evidence.
- As Smith dryly observes: If a theist had rational, verifiable evidence for his claims, he would not invoke "faith." No one claims to have "faith" that 2 + 2 = 4, or that gravity exists—they point to the evidence. The demand for faith arises *only* when evidence is missing.

### 5.4 Misology: The War Against the Human Mind
Because faith is defenseless against rational critique, religious traditions throughout history have engaged in **misology**—the hatred and distrust of human reason:
- From Martin Luther's infamous denunciation of reason as *"the Devil's greatest whore... a beast that must be slaughtered"* to biblical injunctions like *"Lean not unto thine own understanding"* (Proverbs 3:5), religious orthodoxy systematically cultivates intellectual self-doubt.
- Believers are taught that their critical intellect is dangerous, sinful, and corrupt ("the pride of the intellect"), while unquestioning credulity and gullibility are elevated into supreme spiritual virtues.

### 5.5 The Voluntarist Trap (Pascal & William James)
Smith tears apart voluntarist philosophies of faith:
- **Blaise Pascal's Wager**: Pascal argued that belief in God is a pragmatic gamble. If you believe and God exists, you win infinite bliss; if God doesn't exist, you lose nothing. If you disbelieve and God exists, you suffer infinite torment.
  - *Smith's Refutation*: Pascal's wager commits an elementary psychological error: you cannot deliberately force yourself to believe a factual claim simply because it would be profitable. A man cannot genuinely believe his wife is faithful, or that the moon is made of cheddar cheese, merely for a million dollars. 
  - Furthermore, Pascal assumes a false dichotomy between the Catholic God and nothing. What if the true God is an intellectual deity who rewards rational skepticism and sends gullible gamblers like Pascal to hell?
- **William James's "Will to Believe"**: James argued that when an option is living, forced, and momentous, and cannot be decided on intellectual grounds, we have the right to believe according to our passions.
  - *Smith's Refutation*: James's doctrine is an explicit philosophical justification for wishful thinking. Granting passion the right to dictate factual belief legitimizes any delusion, superstition, or political fanaticism.

---

## Unit 6: The Skepticism of Faith & Contextual Epistemology

### 6.1 The Core Idea in Plain English
When religious apologists are cornered by science and logic, they often turn into radical skeptics: *"Well, science doesn't know everything! You can't even prove that you're not dreaming right now!"* They try to demolish all human knowledge so they can sneak God into the rubble. But human certainty does not require omniscience; we know things based on real evidence within real contexts.

### 6.2 The Weaponization of Radical Skepticism
Smith identifies a bizarre historical paradox: religious apologists, who claim absolute certainty about the invisible creator of the cosmos, frequently adopt the most radical, corrosive philosophical skepticism to attack the validity of human science and perception:
- The apologist argues:
  - "Human senses are fallible and often deceive us."
  - "Human reason cannot achieve absolute, infallible certainty."
  - "Since you cannot be 100% sure about the external physical world, your belief in science requires just as much 'faith' as my belief in the Resurrection!"

### 6.3 Contextual Certainty vs. Cartesian Paranoia
Smith vigorously defends the validity of human knowledge against this epistemological sabotage:
- **Knowledge is Contextual**: Certainty is not an impossible state of omniscience; it is an assessment of evidence within a given context of knowledge.
- When an astronomer states that the earth revolves around the sun, this is an established certainty grounded in astronomical context. The hypothetical possibility that an evil demon or alien is projecting a holographic illusion does not invalidate empirical knowledge.
- To demand that human beings possess "infallible omniscience" before they can claim certainty is to set a self-contradictory standard that makes knowledge impossible by definition.

### 6.4 Sense Perception as the Non-Volitional Foundation
Smith grounds epistemology in the reliability of the senses:
- The senses do not judge; they merely register physical stimuli (light hitting the retina, sound vibrations hitting the eardrum). The senses themselves cannot "lie."
- Errors occur only at the **conceptual level**—when the conscious mind misinterprets or misintegrates sensory data (e.g., misjudging a mirage on a desert highway).
- Because all concepts are ultimately abstractions derived from sensory perception, attempting to use abstract concepts to prove that sensory perception is untrustworthy is a stolen concept fallacy: using the ladder of sensory observation to climb up, and then kicking the ladder away.

---

## Unit 7: Revelation, Biblical Inerrancy & The Deconstruction of Miracles

### 7.1 The Core Idea in Plain English
If someone comes up to you on the street today and claims that God spoke to them and told them to burn their clothes, you would immediately recognize them as mentally ill. But if someone wrote that down in a desert 2,000 years ago, millions of people call it "divine revelation." The Bible cannot prove that God exists, because the only reason anyone believes the Bible is divine is because the Bible claims it is. That is circular reasoning at its most blatant.

### 7.2 The Epistemic Circularity of Holy Scripture
Smith exposes the fatal circularity at the heart of revealed religions:
- *Question*: How do we know the Christian God exists?
- *Answer*: Because it is written in the holy scriptures.
- *Question*: How do we know the holy scriptures are true and inspired?
- *Answer*: Because they are the infallible word of God.
- This is a textbook instance of *petitio principii* (begging the question). An unverified text cannot be introduced as evidence for the entity whose existence is required to validate the text in the first place.

### 7.3 The Epistemology of "Revelation"
Smith examines the psychological nature of revelation:
- By definition, a "revelation" is an internal, private, subjective psychological experience occurring within the mind of a single individual.
- Even if Moses or Paul genuinely heard a booming voice in their head, that voice is a private perception. For everyone else on earth, it is not a revelation; it is **hearsay**.
- Why should any rational human being accept the uncorroborated, ancient hearsay of nomadic tribesmen regarding cosmic physics over the rigorously tested empirical discoveries of modern science?

### 7.4 David Hume's Critique of Miracles Formalized
Smith draws upon and expands David Hume's landmark argument from *An Enquiry Concerning Human Understanding*:
- A miracle is defined as a violation or suspension of the laws of nature by a supernatural agency.
- The "laws of nature" are established by the uniform, unvarying, replicated experience of millions of human beings over thousands of years (e.g., dead bodies decay; humans cannot walk on liquid water without sinking).
- When a witness reports a miracle, we are faced with two competing hypotheses:
  1. The uniform laws of nature, verified billions of times, were actually suspended.
  2. The witness was mistaken, hallucinating, deceived, or lying.
- Hume's Razor: **No testimony is sufficient to establish a miracle unless the testimony be of such a kind that its falsehood would be more miraculous than the fact which it endeavors to establish.**
- Human error, superstition, cognitive bias, and intentional pious fraud are common, documented occurrences throughout human history. A violation of the laws of physics is not. It is always infinitely more probable that ancient witnesses were mistaken than that the universe violated its own physical nature.

---

## Unit 8: Dismantling Natural Theology: The Cosmological & First Cause Arguments

### 8.1 The Core Idea in Plain English
Apologists love to ask: *"If God didn't make the universe, where did everything come from? Everything must have a cause!"* But if everything must have a cause, then God must have a cause too. If you say God doesn't need a cause because He is eternal, then why not save a step and recognize that the physical universe itself is eternal? Adding a magical creator explains nothing; it just invents a second mystery to hide the first.

### 8.2 The Criteria of Genuine Scientific Explanation
Smith establishes the epistemological criteria for an "explanation":
- A valid explanation reduces the unknown to the known. It clarifies an unfamiliar phenomenon by relating it to familiar, verified natural entities and laws.
- Theism does the exact opposite: it attempts to "explain" a mystery (the existence of the physical universe) by invoking an infinitely greater and incomprehensible mystery (an incorporeal, omnipotent cosmic spirit).
- "God did it" is not an explanation; it is a **surrender of the intellect**—a linguistic label slapped over our ignorance to stop inquiry.

### 8.3 The First Cause Fallacy
The cosmological argument asserts:
1. Every event in the universe has a cause.
2. An infinite regress of causes is impossible.
3. Therefore, there must be a First Cause, which we call God.

Smith tears this syllogism to shreds:
- **The Self-Contradiction**: Premise 1 states that *everything* has a cause. The conclusion immediately violates Premise 1 by asserting an entity (God) that has *no cause*. If an uncaused entity can exist, why not the physical universe itself?
- **The Equivocation on "Causality"**: Causality is a relationship *within* the universe between physical entities acting upon other physical entities across time. You cannot lift the concept of causality out of its physical, temporal context and apply it to the universe as a whole.
- **The Fallacy of Composition**: Just because every individual brick in a wall has a specific weight and boundary does not mean the entire wall is a brick. Just because every event within the universe has an antecedent physical cause does not mean the totality of existence must have a cause outside of existence.

### 8.4 The Contingency Argument
Aquinas's Third Way asserts that all things in the world are "contingent" (they could fail to exist); therefore, there must exist a "necessary being" whose non-existence is impossible.
- Smith demonstrates that the concept of "necessary existence" is an ontological contradiction.
- "Necessity" is a logical concept describing relationships between ideas (e.g., given the definition of a triangle, it is *necessary* that its angles sum to 180 degrees).
- Existence is never logically necessary; existence is an empirical fact. Any entity that exists can be conceived as not existing without generating a formal logical contradiction. To label God a "necessary being" is simply to define Him into existence by semantic sleight of hand.

---

## Unit 9: Design Arguments & The Fallacy of Teleological Intent

### 9.1 The Core Idea in Plain English
William Paley famously argued that if you find a watch on a heath, you know someone designed it because it has intricate gears that work together toward a purpose. He claimed the universe is like that watch, so it must have a cosmic Watchmaker. But this argument backfires completely: we only recognize that a watch is designed because we can compare it to things that *aren't* designed (like rocks and sand). If literally everything in the universe was designed by God, the comparison collapses.

### 9.2 Deconstructing Paley's Watchmaker Analogy
Smith provides a thorough dissection of the teleological argument:
- **The Basis of Design Recognition**: When we walk along a beach and pick up a pocket watch, how do we know it was manufactured? We do *not* deduce design simply because it is complex. We recognize design because we possess empirical knowledge of human artisans manufacturing watches, and because the mechanical watch contrasts starkly with the natural, undesigned objects surrounding it (sand, seawater, pebbles).
- **The Theistic Contradiction**: If the theist claims that *every single grain of sand, drop of water, and rock* was also consciously designed by God, then there is no baseline of undesigned nature to compare the watch against! The analogy destroys itself.

### 9.3 Darwinism and Non-Purposive Order
The theist looks at the human eye or the wing of an eagle and gasps: *"Look at how perfectly this was designed for sight or flight! It couldn't have happened by accident!"*
- **Order is Not Intentional Design**: Smith points out that matter, possessing specific identities (Law of Identity), must interact according to specific causal laws. Order is an inescapable feature of reality, not a supernatural gift.
- **Natural Selection**: Charles Darwin decisively shattered the teleological argument by demonstrating the mechanism: random genetic variation filtered by non-random environmental selection over immense spans of evolutionary time.
- The eye was not engineered in a celestial workshop to allow an organism to see; rather, organisms whose mutations granted rudimentary light-sensitivity survived and reproduced more effectively than blind competitors. Teleology puts the cart before the horse.

### 9.4 The Argument from Imperfection & Cosmic Cruelty
If the universe was designed by an all-powerful, all-loving engineer:
- Why are there catastrophic structural design flaws in the human body (e.g., the optic nerve creating a blind spot, the narrow birth canal causing maternal mortality, the appendix causing lethal infections)?
- Why did the "designer" fill the natural world with horrific parasitism (e.g., the *Ichneumonidae* wasp that paralyzes caterpillars and lays its eggs inside them so the larvae eat the host alive from the inside out)?
- The natural world reflects exactly what we would expect from blind, unguided physical evolution: a brutal, indifferent struggle for survival with zero evidence of benevolent engineering.

---

## Unit 10: Rational Morality vs. The Pathology of Christian Guilt

### 10.1 The Core Idea in Plain English
Religion has convinced humanity of a terrible lie: that without God, humans have no reason to be good, and morality would collapse into chaos. In reality, human morality comes from our nature as social beings who need cooperation, honesty, justice, and mutual respect to survive and thrive. Far from being the source of goodness, Christian theology poisons human morality by preaching that humans are born filthy sinners deserving of eternal torture.

### 10.2 Deconstructing "Without God, Everything is Permitted"
Smith confronts the famous Dostoevskian trope:
- If morality is nothing more than the arbitrary command of a cosmic dictator, then actions are not good or evil in themselves; they are good or evil merely because God says so.
- This is the **Divine Command Fallacy** (The Euthyphro Dilemma):
  - Is an action good because God commands it, or does God command it because it is good?
  - If an action is good solely because God commands it, then morality is purely arbitrary. If God commanded murder, rape, or infanticide (as Yahweh repeatedly does in the Old Testament), those actions would instantly become holy and moral.
  - If God commands an action because it is intrinsically good, then goodness exists independently of God's commands—and we can discover what is good using human reason without any need for God.

### 10.3 The Objective Foundation of Secular Ethics
Smith sketches the foundation of a rational, humanistic morality:
- Ethics is not a mystical code handed down from clouds; it is an objective science of human life, survival, and flourishing (**Eudaimonia**).
- Humans are biological entities with specific requirements for survival: food, shelter, physical security, productive work, psychological peace, and social cooperation.
- Values like honesty, justice, courage, and benevolence are not arbitrary whims; they are practical, objective necessities for living successfully in human society. A thief or liar undermines the very social trust and cooperation required for his own long-term happiness.

### 10.4 The Psychological Guillotine of Christian Dogma
Smith concludes his masterpiece with an unsparing psychological critique of Christian ethics:
- **The Horror of Original Sin**: Christianity tells every newborn child that they are spiritually deformed, guilty of an ancestral crime committed thousands of years ago, and inherently worthy of eternal hellfire unless they beg for mercy through the blood sacrifice of an innocent man.
- **The Destruction of Self-Esteem**: Religious morality equates human pride, self-confidence, and intellectual independence with the deadly sin of "hubris." It exalts groveling, self-loathing, subservience, and unearned guilt ("Lord, I am not worthy").
- **Vicarious Atonement**: The idea that moral guilt can be transferred to an innocent scapegoat who is tortured to death to satisfy divine wrath is a grotesque perversion of genuine justice.
- **The Atheist Alternative**: True moral maturity begins when humanity casts off supernatural superstitions, accepts full, unevadable responsibility for its own choices on this earth, and embraces reason, productive achievement, and joy as the proper goals of human life.
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
          <span class="book-title-short">${title}</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: Propositional Journey</button>
      <button class="view-btn" data-view="map">View B: Analytical Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Dialectical Engine</button>
    </div>

    <main class="reader-content">
      <div id="view-journey" class="view-panel active">
        <article class="prose-content">
          <h1>${title}</h1>
          <p class="byline"><strong>Author:</strong> ${author} | <strong>System:</strong> BKRS v2.0 Replacement-Grade Codex</p>
          <hr>
          ${proseHtml}
        </article>
      </div>

      <div id="view-map" class="view-panel">
        <div class="knowledge-map">
          <h2>Analytical Blueprint: Atheism: The Case Against God</h2>
          <p class="subtitle">Complete propositional map of George H. Smith's 10 epistemological, metaphysical, and ethical units.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Philosophical Propositions:</strong></p>
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
          <h2>The Smith Dialectical & Epistemological Engine</h2>
          <div class="engine-section">
            <h3>Diagnostic Maxims for Evaluating Supernatural Truth Claims</h3>
            <div class="formula-box">
              <p><strong>1. The Law of Burden of Proof:</strong> The onus of proof rests solely on the claimant asserting a positive existence claim. What is asserted without evidence can be dismissed without evidence.</p>
              <p><strong>2. The Primacy of Existence:</strong> Reality exists independent of consciousness ($A = A$). Consciousness perceives reality; it does not dictate, create, or alter reality through wish, command, or prayer.</p>
              <p><strong>3. The Definition of Faith:</strong> Acceptance of a truth-claim in the absence of or in defiance of evidence. Faith is not a virtue; it is an abdication of the cognitive faculty necessary for human survival.</p>
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
