const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'the-swerve-how-world-became-modern-greenblatt';
const title = 'The Swerve: How the World Became Modern';
const author = 'Stephen Greenblatt';
const category = 'Philosophy & Intellectual History';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-book-hunter-poggio-bracciolini",
    title: "Unit 1: The Passionate Book Hunter: Poggio Bracciolini & The Humanist Renaissance",
    themes: [
      "The Forgotten Hero: Poggio Bracciolini (1380–1459), Papal Scribe and Manuscript Detective",
      "The Humanist Obsession: Recovering the Buried Voices of Ancient Rome and Greece",
      "The Art of the Scribe: Poggio's Invention of Humanist Cursive (The Ancestor of Modern Italic Type)",
      "The Solitary Journey Across the Alps: Searching Neglected Monastic Libraries in the Winter of 1417",
      "The Renaissance Ethos: Classical Latin Literature as a Tool for Living Freely"
    ]
  },
  {
    id: "unit-2-cataclysm-of-oblivion-teeth-of-time",
    title: "Unit 2: The Cataclysm of Oblivion: The Teeth of Time & The Loss of Antiquity",
    themes: [
      "The Fragility of Physical Memory: Papyrus, Parchment, Dampness, Fire, and Bookworms",
      "The Destruction of the Classical World: The Great Library of Alexandria and Roman Book Collections",
      "Monastic Copying: Preservation Through Censorship, Neglect, and Palimpsests (Scraping Pagan Texts)",
      "The Historical Rupture: How a Vibrant Scientific and Materialist Worldview Vanished for a Millennium",
      "The Miracle of Survival: The Razor-Thin Margins by Which Ancient Masterpieces Endured"
    ]
  },
  {
    id: "unit-3-papal-chancery-lie-factory",
    title: "Unit 3: The Papal Chancery & The Lie Factory: Cynicism, Power & The Council of Constance",
    themes: [
      "Poggio in the Curia: Serving in the Papal Chancery as Apostolic Secretary",
      "The 'Bugiale' (The Lie Factory): Humanist Secretaries Trading Satire, Gossip, and Slander in the Vatican",
      "The Western Schism: Three Rival Popes Fighting for Legitimacy (Antipope John XXIII / Baldassarre Cossa)",
      "The Council of Constance (1414–1418): Political Intrigue, Betrayal, and Papal Deposition",
      "The Trial and Burning of Jan Hus and Jerome of Prague: Poggio's Shock at Religious Fanaticism"
    ]
  },
  {
    id: "unit-4-moment-of-discovery-1417",
    title: "Unit 4: The Moment of Discovery (January 1417): Unearthing Lucretius in the Snow",
    themes: [
      "Poggio's Expedition to the Remote Monastery of Fulda / St. Gall",
      "The Scriptoria of the North: Dust, Cobwebs, and Abandoned Manuscripts",
      "Pulling Down De Rerum Natura: Recognizing Titus Lucretius Carus's Vanished Epic Poem",
      "The Ecstasy of the Humanist: Re-Encountering 7,400 Lines of Banned Epicurean Physics",
      "Arranging the Transcription: Sending the Fragile Copy to Niccolò Niccoli in Florence"
    ]
  },
  {
    id: "unit-5-radioactive-manifesto-lucretian-vision",
    title: "Unit 5: The Radioactive Manifesto: What Lucretius Actually Said",
    themes: [
      "The Fundamental Principles: The Universe Consists Solely of Indestructible Atoms and Empty Space",
      "Ex Nihilo Nihil Fit: Nothing Comes from Nothing, and Nothing Vanishes into Non-Being",
      "The Rejection of Intelligent Design: The World Was Not Engineered for Human Benefit",
      "Mortality of the Soul: Consciousness Dissolves Completely with the Death of the Body",
      "Why Lucretius Was Radioactive in Medieval Christendom: Total Denial of Creation, Providence, and Hell"
    ]
  },
  {
    id: "unit-6-heresy-of-pleasure-ataraxia",
    title: "Unit 6: The Heresy of Pleasure: Epicurean Ataraxia vs. Medieval Self-Flagellation",
    themes: [
      "The Medieval Cult of Pain: Mortification of the Flesh, Hair Shirts, and Guilt as Spiritual Currency",
      "Epicurus's Revolutionary Axiom: Pleasure (Voluptas) is the Supreme Good and Natural Telos of Life",
      "Redefining Pleasure: Not Hedonistic Debauchery, but the Absence of Bodily Pain and Mental Terror (Ataraxia)",
      "The Evils of Religio: How Fear of Vengeful Deities Destroys Human Compassion and Joy",
      "The Therapeutic Mission of Philosophy: Liberating the Mind from Thanatophobia (Fear of Death)"
    ]
  },
  {
    id: "unit-7-physics-of-freedom-clinamen",
    title: "Unit 7: The Physics of Freedom: The Clinamen (Swerve) & The Rejection of Determinism",
    themes: [
      "The Atomic Kinematics: Atoms Falling Infinitely Downward at Equal Speed in the Void",
      "The Inevitable Problem: Why Hard Determinism (Democritus) Leaves No Room for Human Agency",
      "The Clinamen (The Swerve): An Unpredictable, Minute Deflection in Atomic Trajectory",
      "How the Swerve Generates Reality: Collisions, Interlocking Compounds, and Cosmic Diversity",
      "The Metaphysical Payoff: Preserving Free Will and Unpredictable Creativity in a Material World"
    ]
  },
  {
    id: "unit-8-great-return-copying-dissemination",
    title: "Unit 8: The Great Return: Copying, Dissemination & The Danger of Heresy",
    themes: [
      "Niccolò Niccoli's Jealous Possession: The 14-Year Delay in Releasing Poggio's Transcription",
      "The Invention of the Gutenberg Printing Press (c. 1450): Moving from Parchment to Print",
      "The First Printed Editions of Lucretius: Brescia (1473) and Venice (Aldus Manutius, 1500)",
      "The Theological Counter-Attack: The Synod of Florence (1517) Banning Lucretius in Schools",
      "Subversive Survival: Reading Lucretius 'Under the Cover' of Pure Classical Latin Poetry"
    ]
  },
  {
    id: "unit-9-dangerous-readers-machiavelli-bruno",
    title: "Unit 9: The Dangerous Readers: Machiavelli, More, Montaigne & Giordano Bruno",
    themes: [
      "Niccolò Machiavelli: Hand-Copying Lucretius in His Youth; Atoms in Politics (Power Without Moral Providence)",
      "Thomas More's Utopia (1516): The Surprising Epicurean Hedonism at the Center of the Ideal Society",
      "Michel de Montaigne: Extensively Annotating His Personal Copy of Lucretius; Accepting Death Without Fear",
      "Giordano Bruno: The Martyr of Infinity; Infinite Worlds, Infinite Atoms, Burned at the Stake in Rome (1600)",
      "How the Atomist Spark Ignited the European Counter-Tradition"
    ]
  },
  {
    id: "unit-10-how-the-swerve-made-modern-world",
    title: "Unit 10: How the Swerve Made the Modern World: From Galileo to Jefferson and Darwin",
    themes: [
      "The Scientific Revolution: Galileo Galilei, Pierre Gassendi, Robert Boyle, and Isaac Newton Embracing Atomism",
      "The Political Revolution: Thomas Jefferson Declaring 'I Too Am an Epicurean' (The Pursuit of Happiness)",
      "The Biological Revolution: Charles Darwin and Natural Selection as the Modern Vindicating of Lucretius",
      "The Contemporary Materialist Landscape: Quantum Mechanics and the Indeterminacy of the Subatomic Swerve",
      "Greenblatt's Final Meditation: How One Rescued Ancient Book Shifted the Trajectory of Human Civilization"
    ]
  }
];

const masterNotes = `# Master Codex: The Swerve: How the World Became Modern
## The Rediscovery of Lucretius, The Renaissance Rebirth of Materialism & The Making of the Modern Mind
### Author: Stephen Greenblatt | Awards: Pulitzer Prize & National Book Award | Standard: BKRS v2.0 Replacement-Grade Codex

---

## Executive Architectural Summary

Published in 2011, Stephen Greenblatt’s *The Swerve: How the World Became Modern* achieved the rare double honor of winning both the **Pulitzer Prize for General Nonfiction** and the **National Book Award**. Greenblatt—Cogan University Professor of the Humanities at Harvard University and the founding figure of New Historicism—crafts a spellbinding intellectual detective story that uncovers one of the most consequential, improbable cultural events in human history: **the accidental rediscovery in 1417 of Titus Lucretius Carus’s long-lost ancient masterpiece, *De Rerum Natura* (*On the Nature of Things*), by the Italian humanist book hunter Poggio Bracciolini.**

Greenblatt argues that the modern world did not emerge gradually through polite academic consensus; it began with a **"swerve"**—a radical, unpredictable deflection in the course of history caused by the resurrection of a dangerously subversive, ancient materialist poem that had been forgotten, suppressed, and buried under the damp silence of medieval German monasteries for over a thousand years.

When Poggio pulled Lucretius's manuscript from a dusty monastic shelf, he unleashed an intellectual explosion:
- A cosmos composed entirely of **indivisible, microscopic atoms moving through infinite empty space (the void)**.
- A universe with **no divine creator, no intelligent design, and no cosmic providence**.
- A human existence with **no immortal soul, no heaven, and no hell**.
- A moral philosophy declaring that **pleasure (*voluptas*) is the supreme good**, that human happiness lies in tranquility (**Ataraxia**), and that religion is a dangerous delusion feeding on fear of death.

Across eleven brilliantly narrated chapters, Greenblatt traces the fragile survival of ancient texts through the "teeth of time," the corrupt intrigues of the papal court during the Great Western Schism, the horrors of heretic burnings at the Council of Constance, and the revolutionary chain reaction sparked by Lucretius among the greatest minds of the modern era: **Niccolò Machiavelli, Thomas More, Michel de Montaigne, Giordano Bruno, Galileo Galilei, Isaac Newton, Thomas Jefferson, and Charles Darwin**.

This Master Codex synthesizes Greenblatt's entire Pulitzer-winning masterpiece into 10 structured propositional units, presenting a complete, accessible, and profound exploration of how ancient atomism built our modern world.

---

## Unit 1: The Passionate Book Hunter: Poggio Bracciolini & The Humanist Renaissance

### 1.1 The Core Idea in Plain English
In the early 1400s, a brilliant, unemployed Italian secretary named **Poggio Bracciolini** rode a horse through the freezing snow into remote German monasteries. He wasn't looking for gold or land; he was hunting for lost ancient books! Poggio was part of a new movement called **Humanism**—people who believed that the forgotten literature, poetry, and philosophy of ancient Greece and Rome held the secret to living an intelligent, free, and beautiful human life.

### 1.2 Poggio Bracciolini: The Pen That Shaped the World
Greenblatt introduces the unlikely protagonist of the modern age:
- Born in 1380 in the small Tuscan village of Terranuova near Arezzo, Poggio was the son of a poor apothecary who fled his debts.
- Possessing no land, noble lineage, or wealth, Poggio possessed one extraordinary, peerless talent: **his handwriting**.
- In an era before the printing press, when every legal document, papal bull, and book had to be written by hand, clear, beautiful calligraphy was the gateway to power.
- Poggio revolutionized European penmanship:
  - Disgusted by the dense, spiky, barely legible Gothic script favored by medieval monks, Poggio studied ancient Roman stone inscriptions and Carolingian manuscripts.
  - He invented a clean, luminous, rounded script called *lettera antica*—which became the direct typographical ancestor of our modern Roman fonts and Italic types.

### 1.3 The Humanist Calling
By his early twenties, Poggio had migrated to Florence, the vibrant epicentre of the early Renaissance:
- He was mentored by **Coluccio Salutati**, the Chancellor of Florence, and formed an intimate, lifelong friendship with the wealthy, obsessive bibliophile **Niccolò Niccoli**.
- These early humanists called their pursuit the **studia humanitatis**—the study of humanities (grammar, rhetoric, history, poetry, and moral philosophy):
  - They rejected the dry, scholastic logic of medieval universities, which spent centuries arguing about abstract theological categories.
  - They believed that the ancient pagan writers (Cicero, Seneca, Virgil, Horace) possessed a psychological depth, rhetorical power, and worldly wisdom that medieval Christian culture had buried.
- But there was a tragic obstacle: **most of the great books of antiquity were missing**. They had survived only as rumors, cited by later authors, but the physical scrolls and manuscripts were gone. To read them, someone had to go hunting.

### 1.4 The Journey Across the Alps
In the winter of 1417, Poggio found himself suddenly unemployed and in grave personal danger following the collapse of his employer, Antipope John XXIII, at the Council of Constance:
- Instead of returning to Italy in defeat, Poggio mounted a horse and rode north into the dark, forested valleys of Switzerland and southern Germany.
- Monasteries like **St. Gall, Fulda, Reichenau, and Cluny** were founded hundreds of years earlier in remote wildernesses. Their libraries contained the largest surviving deposits of parchment manuscripts in Europe.
- Poggio went not as a pious pilgrim to worship saintly relics, but as a cultural detective searching for the lost voices of the classical world.

---

## Unit 2: The Cataclysm of Oblivion: The Teeth of Time & The Loss of Antiquity

### 2.1 The Core Idea in Plain English
Why did the great books of the ancient world disappear in the first place? It wasn't just one bad event; it was a thousand years of rot, fire, neglect, bookworms, and religious fanaticism. Ancient books were written on fragile plant papyrus that rots in the damp. When the Roman Empire collapsed, Christian monks chose to copy holy prayer books rather than pagan science books, and thousands of masterpieces vanished forever into the dark.

### 2.2 The Fragility of Ancient Information
Greenblatt provides a visceral account of how physical texts were manufactured and destroyed:
- In ancient Greece and Rome, almost all books were written on **papyrus**—made from reeds grown along the Nile:
  - Papyrus was smooth, light, and flexible, but it had a fatal flaw: it was organic material. In the damp climates of Europe, papyrus easily molded, rotted, and crumbled to dust within a century or two unless kept in arid desert sands (like Egypt or Herculaneum).
  - To survive, an ancient book had to be continuously copied by hand generation after generation. The moment a text stopped being copied, it was on death row.
- In late antiquity, papyrus was replaced by **parchment** (animal skin: sheep, goat, or calf leather):
  - Parchment was vastly more durable, but extraordinarily expensive: copying a single large Bible required the slaughtered hides of hundreds of animals.
  - Monasteries had limited resources; if a choice had to be made between copying a sermon of St. Augustine or a pagan poem about physics by Lucretius, the pagan poem was left to rot.

### 2.3 The Assault of the "Teeth of Time"
Ancient libraries faced catastrophic physical enemies:
- **Fire**: Accidental fires and warfare burned the great libraries of Alexandria, Antioch, Rome, and Constantinople.
- **Insects and Rodents**: Bookworms, silverfish, and mice chewed tunnels through precious manuscripts, digesting centuries of Greek philosophy.
- **Dampness and Neglect**: In northern European monastic vaults, rain leaked through stone ceilings, turning ancient parchment into rotting, fused blocks of gelatinous glue.

### 2.4 Active Suppression and the Palimpsest
The loss was not merely accidental; it was ideological:
- As Christianity became the state religion of the late Roman Empire, pagan philosophy was viewed with deep suspicion:
  - Christian emperors ordered pagan temples closed and libraries burned.
  - In 391 CE, the Serapeum of Alexandria was destroyed by a Christian mob led by Patriarch Theophilus.
  - In 415 CE, the brilliant female mathematician and philosopher **Hypatia** was butchered in Alexandria by Christian zealots.
- **The Palimpsest**: Monks frequently took ancient classical manuscripts, washed or scraped off the "pagan" ink with pumice stone, and wrote Christian hymns or liturgical chants over the erased text. (Centuries later, chemical and multispectral imaging revealed masterpieces of Cicero and Archimedes hiding underneath medieval prayers).

---

## Unit 3: The Papal Chancery & The Lie Factory: Cynicism, Power & The Council of Constance

### 3.1 The Core Idea in Plain English
Poggio spent over ten years working at the very top of the Catholic Church as a secretary to the Pope. But it wasn't a holy place; it was a den of thieves, bribery, and political ambition that the secretaries privately called **"The Lie Factory."** When three different men all claimed to be the real Pope at the same time, the Church held a massive trial in Germany. Disgusted by the hypocrisy and the horrific burning of religious reformers at the stake, Poggio escaped into the mountains to search for ancient scrolls.

### 3.2 Inside the Papal Chancery
In 1403, through his exceptional Latin skill, Poggio gained employment in the Roman Curia:
- He rose to become an **Apostolic Secretary**—one of the elite personal scribes who drafted the Pope’s confidential letters, diplomatic treaties, and papal bulls.
- It was a world of breathtaking cynicism: every church office, bishopric, indulgence, and legal dispensation had a price tag. Scribes were paid exorbitant fees by corrupt petitioners to forge or accelerate documents.

### 3.3 The "Bugiale" (The Lie Factory)
To preserve their sanity and amuse themselves, Poggio and his fellow humanist scribes established a private room in the Vatican:
- They nicknamed this chamber the **Bugiale** (literally: **"The Foundry of Lies"** or **"The Lie Factory"**).
- Here, away from the ears of cardinals, the young intellectuals dropped their pious masks:
  - They ridiculed the greed and sexual hypocrisy of the clergy.
  - They traded biting satires, witty lampoons, and obscene jokes (which Poggio later collected and published in his famous Latin bestseller, the *Facetiae*).
  - This environment bred in Poggio a sharp, satirical detachment and an allergic aversion to dogmatic hypocrisy.

### 3.4 The Western Schism & The Pirate Pope
By 1414, the Catholic Church was paralyzed by the **Great Western Schism**:
- Three different men claimed to be the legitimate Pope: Gregory XII in Rome, Benedict XIII in Avignon, and **John XXIII (Baldassarre Cossa)** in Bologna.
- Poggio’s employer, John XXIII, was a former Neapolitan corsair (pirate) and military warlord who had purchased his cardinal's hat with stolen plunder.
- To resolve the scandal, the Holy Roman Emperor Sigismund forced the convocation of the **Council of Constance (1414–1418)** on the shores of Lake Constance in Germany. Over 50,000 bishops, princes, theologians, and prostitutes converged on the imperial city.

### 3.5 The Burning of Jan Hus
At the Council, Poggio witnessed firsthand the deadly violence of religious orthodoxy:
- The Bohemian religious reformer **Jan Hus**, who had challenged church corruption and the sale of indulgences, was lured to Constance under an imperial safe-conduct promise.
- The council tore up the safe-conduct, declared Hus a heretic, stripped him of his priestly garments, placed a paper crown painted with devils on his head, and **burned him alive at the stake on July 6, 1415**. His ashes were shoveled into the Rhine to prevent followers from gathering relics.
- A year later, Hus's disciple, **Jerome of Prague**, was also burned. Poggio personally witnessed Jerome's execution and was deeply moved by his stoic courage, writing a famous letter comparing Jerome’s dignity to that of Socrates.
- Shortly thereafter, Pope John XXIII was himself deposed for piracy, murder, sodomy, and simony. Stripped of his master and sickened by the bloodshed in Constance, Poggio walked away from the council and headed into the monastic wilderness.

---

## Unit 4: The Moment of Discovery (January 1417): Unearthing Lucretius in the Snow

### 4.1 The Core Idea in Plain English
In January 1417, Poggio rode into a remote German abbey. In a cold, damp, neglected tower, he found a battered manuscript that no one had read for hundreds of years. The title was *De Rerum Natura* by Lucretius. Poggio was an expert in Latin; as his eyes scanned the hexameter verses, his heart pounded. He knew he had found something so radical and dangerous that it could change the world.

### 4.2 The Expedition to Fulda / St. Gall
Though Poggio kept the exact location deliberately secretive in his letters to prevent rival book hunters from plundering the site, modern scholarship pinpoints the discovery to the venerable Benedictine **Abbey of Fulda** (or possibly St. Gall):
- Fulda, founded in 744 by St. Boniface, possessed one of the greatest libraries of the Carolingian Renaissance. But by 1417, the monastery was in deep financial decay, its monks largely illiterate in classical Latin.
- While the monks chanted their daily offices in the chapel, Poggio was granted access to the library tower.

### 4.3 The Encounter with *De Rerum Natura*
Poggio climbed the freezing stone steps into the scriptorium:
- The room was thick with dust, cobwebs, and the smell of mildewed parchment.
- He began pulling down neglected codices. Among them was a copy of an ancient poem whose title he had read about in Cicero and Ovid, but which no living human being in Italy had laid eyes on for centuries: **De Rerum Natura** (*On the Nature of Things*) by **Titus Lucretius Carus**.
- As Poggio turned the stiff vellum pages, written in an old Carolingian minuscule hand, he began to read.

### 4.4 The Shock of Recognition
What Poggio read was Latin poetry of staggering, sublime aesthetic beauty:
- The poem opened with an ecstatic hymn to **Venus**, the life-giving force of nature, followed immediately by an unsparing indictment of religious terror and the horrific sacrifice of the virgin Iphigenia.
- Lucretius laid out a universe that contradicted every single dogma of the medieval Catholic Church:
  - The universe was not created by God; it had existed forever.
  - Humans were not the center of creation; they were merely one biological species among millions.
  - The human soul was not immortal; it died and dissolved along with the physical flesh.
  - There was no afterlife, no hell, no purgatory, and no judgment day.
  - Nature was governed by blind, mechanical atomic collisions, not divine providence.
- Poggio was a devout humanist, but he was also a worldly Italian. He recognized that this manuscript was an **intellectual bomb**. If he left it there, the ignorant monks would eventually cut up the parchment to line pie tins or scrape it clean for prayer books.

### 4.5 Rescuing the Text
Poggio could not steal the physical manuscript without triggering an international incident:
- He paid an enormous bribe to a local German scribe to make a transcription of the 7,400 lines of verse under his strict supervision.
- In the spring of 1417, Poggio carefully packed the newly transcribed manuscript into his saddlebags and sent it across the Alps to his friend **Niccolò Niccoli** in Florence.
- Lucretius had survived the teeth of time by the narrowest margin imaginable: **a single manuscript surviving in a single snowy valley**.

---

## Unit 5: The Radioactive Manifesto: What Lucretius Actually Said

### 5.1 The Core Idea in Plain English
What was inside this long-lost poem that terrified the Church? Greenblatt summarizes Lucretius’s vision into a few shocking ideas: Everything is made of tiny invisible pieces called atoms moving through empty space. The universe was not created for us. There are no ghosts, no devils, and no angels. When you die, you feel nothing. The meaning of life is not suffering for God, but enjoying simple pleasures, loving your friends, and being at peace.

### 5.2 The Core Axioms of Lucretian Atomism
Greenblatt provides a brilliant, systematic summary of the core philosophical claims that Lucretius presented to the Renaissance:
1. **Everything is made of invisible particles**: The physical universe consists of only two things: **indivisible atoms (*primordia rerum*)** and **empty space (the void / *inane*)**.
2. **The universe has no creator and no end**: *Ex nihilo nihil fit* (nothing can be created from nothing), and nothing is ever destroyed into absolute nothingness. The total quantity of matter and space is eternal and infinite.
3. **The universe was not created for human beings**: There is no intelligent design, no teleology, and no cosmic parent watching over us. The earth, stars, animals, and oceans arose naturally from blind atomic combinations over immense stretches of time.
4. **The soul is mortal**: The human mind and soul (*animus* and *anima*) are made of subtle, physical atoms within the chest and body. When the body dies, the soul atoms scatter into the air like smoke. **Death is the absolute end of consciousness.**
5. **There is no afterlife, no heaven, and no hell**: Mythological tales of eternal damnation—Tantalus starved of water, Sisyphus rolling his stone, Tityos having his liver pecked out—are psychological projections of earthly anxieties, guilt, and neurotic obsessions.
6. **Religio is a source of cruelty and delusion**: Traditional religion was invented by primitive humans who trembled before thunder and earthquakes, imagining angry gods in the sky. To appease these imaginary monsters, priests invented bloody sacrifices, persecutions, and holy wars.

---

## Unit 6: The Heresy of Pleasure: Epicurean Ataraxia vs. Medieval Self-Flagellation

### 6.1 The Core Idea in Plain English
For a thousand years, medieval Christianity taught that human bodies are disgusting, that pleasure is a trap of the devil, and that true holiness means suffering, starving, and whipping yourself (**Self-Flagellation**). Lucretius and Epicurus flipped this upside down: they taught that **Pleasure is good and natural!** But true pleasure doesn't mean wild drunken parties; it means being free from physical pain and having a calm, tranquil mind (**Ataraxia**).

### 6.2 The Medieval Cult of Mortification
To appreciate the revolutionary shock of Lucretius, Greenblatt contrasts it with the dominant spiritual psychology of 14th- and 15th-century Europe:
- Medieval Christianity was obsessed with the mortification of the flesh:
  - Monks wore coarse hair shirts made of horsehair that dug into their skin, breeding lice and open sores.
  - The **Flagellants**: During the Black Death, thousands of men and women marched from town to town, stripped to the waist, whipping their own backs with iron-tipped scourges until blood splattered the church walls, believing that self-inflicted agony would appease the wrath of God.
  - Physical pleasure, sexual desire, culinary delight, and intellectual curiosity were denounced as deadly sins that led straight to the fires of hell.

### 6.3 The Slander of Epicurus
Throughout the Middle Ages, the word "Epicurean" was synonymous with moral filth:
- Church fathers slandered Epicurus as a bloated, drunken pig wallowing in hedonistic debauchery.
- In Dante’s *Inferno* (Canto X), Epicurus and his followers are trapped inside burning iron tombs in the Sixth Circle of Hell, eternally roasted because *"they make the soul die with the body."*

### 6.4 The True Nature of Epicurean Pleasure
Greenblatt restores Epicurus and Lucretius’s genuine moral philosophy:
- When Epicurus identified **Pleasure (*voluptas* / *hedone*)** as the highest good, he did not advocate mindless sensory gluttony:
  - Excessive drinking leads to hangovers; unrestrained lust leads to jealousy and heartbreak; reckless ambition leads to anxiety and political execution.
- True pleasure is **negative in definition**: it is **Aponia** (the absence of physical bodily pain) and **Ataraxia** (the absence of mental disturbance, anxiety, and dread).
- The greatest pleasures are simple and accessible to all: eating bread and cheese when hungry, sitting under a shady tree with friends, contemplating nature, and knowing that when you die, you will suffer no pain.

---

## Unit 7: The Physics of Freedom: The Clinamen (Swerve) & The Rejection of Determinism

### 7.1 The Core Idea in Plain English
If everything in the universe is just atoms bumping into each other like billiard balls, does that mean every human thought and decision was locked in stone from the beginning of time? Epicurus and Lucretius said NO! They realized that once in a while, at completely random times and places, atoms make a tiny, microscopic **Swerve (*Clinamen*)**. That tiny swerve is the secret engine of the universe: it allows atoms to collide and build planets, and it gives human beings **Free Will**!

### 7.2 Overcoming Democritean Hard Determinism
The original Greek atomist, **Democritus (c. 460–370 BCE)**, had proposed that atoms fall through the void in straight lines governed by absolute, rigid necessity:
- If all atomic movements are 100% deterministic, then human beings are biological automatons with zero agency, zero choice, and zero moral responsibility.
- Everything you think, feel, say, and do was rigidly fixed before the earth was formed.

### 7.3 The Discovery of the *Clinamen*
To escape this mechanistic prison, Epicurus (and Lucretius in Book II of *De Rerum Natura*) introduced a revolutionary physical hypothesis: **The Clinamen** (The Swerve):
- As atoms plummet through infinite space under their own weight at uniform velocity:
  > *"At times quite undetermined and at undetermined spots, they push a little from their path: yet only just so much as you could call a change of inclination."*
- **Why the Swerve is Essential to Physics**:
  - If atoms never swerved, they would fall like raindrops through the void forever in parallel lines without ever touching.
  - The minute, random swerve causes the first collision. That collision ricochets into other atoms, generating swirling vortexes that bind particles together into molecules, rocks, stars, oceans, and living creatures.

### 7.4 The Metaphysical Guarantee of Human Agency
The swerve was not merely a cosmological mechanism; it was the foundation of human freedom:
- If every motion is rigidly bound to an antecedent physical cause in an unbroken causal chain, where does the free will of living creatures come from?
- The minute indeterminacy of the atomic swerve breaks the crushing tyranny of fate (*fatum*):
  - It creates an open horizon where human consciousness can make genuine, unpredetermined choices.
  - Greenblatt notes that Lucretius’s swerve anticipated modern **quantum indeterminacy** by over two thousand years: the discovery that at the subatomic level, nature is not a deterministic clockwork, but inherently probabilistic.

---

## Unit 8: The Great Return: Copying, Dissemination & The Danger of Heresy

### 8.1 The Core Idea in Plain English
Once Poggio saved Lucretius's poem from the monastery, you would think everyone in Italy started reading it immediately. But Poggio’s best friend, Niccolò Niccoli, was so jealous and possessive that he locked the manuscript in his house for fourteen years! When it finally escaped, the newly invented printing press spread it across Europe like wildfire. The Church tried to ban it, but it was too late: you cannot kill an idea once it is printed in thousands of copies.

### 8.2 Niccolò Niccoli’s Fourteen-Year Hostage
When Poggio’s transcription arrived in Florence in 1417, it fell into the hands of his eccentric, perfectionist friend **Niccolò Niccoli**:
- Niccoli was a brilliant copyist, but deeply neurotic: he wanted to make his own definitive, perfectly corrected transcript before letting anyone else read it.
- Month after month, year after year, Poggio wrote desperate letters from Rome and London, begging Niccoli to return the book: *"You have kept Lucretius for twelve years! Are you waiting until we are both in the grave?"*
- Finally, in 1431—fourteen years after its discovery—Niccoli completed his exquisite manuscript (now preserved in the Laurentian Library in Florence, MS Vat. Lat. 351) and allowed copies to be made.

### 8.3 The Gutenberg Revolution
If Lucretius had been rediscovered in the 12th century, his ideas would likely have been quietly suppressed by clerical censors. But Poggio’s discovery coincided with the greatest technological revolution in human communication: **Johannes Gutenberg’s movable-type printing press (c. 1450)**:
- In 1473, the first printed edition of *De Rerum Natura* was issued in Brescia.
- In 1500, the legendary Venetian printer **Aldus Manutius** published a beautiful, portable pocket edition edited by Girolamo Avanzi.
- Suddenly, hundreds and then thousands of copies of Lucretius were circulating in private libraries across Italy, France, Germany, and England.

### 8.4 The Counter-Attack of Orthodoxy
The Church was not blind to the mortal danger:
- In 1517, the Catholic **Synod of Florence** officially prohibited the reading of Lucretius in schools, denouncing it as *"a lascivious and wicked work in which every effort is made to show that the soul dies with the body."*
- Decades later, the Council of Trent placed Lucretius on the papal **Index of Prohibited Books** (*Index Librorum Prohibitorum*).
- **The Humanist Camouflage**: How did scholars avoid being burned at the stake for owning Lucretius?
  - They read him under the cover of **pure literary aesthetics**: claiming they studied the poem solely to appreciate its magnificent Latin grammar, poetic metaphors, and classical vocabulary, while piously pretending to reject its atheistic philosophy.
  - But behind the aesthetic shield, the dangerous ideas took deep, irreversible root.

---

## Unit 9: The Dangerous Readers: Machiavelli, More, Montaigne & Giordano Bruno

### 9.1 The Core Idea in Plain English
Who were the brave thinkers who secretly read Lucretius and changed human history? Niccolò Machiavelli hand-copied the entire 7,400-line poem into his private notebook, learning that politics is ruled by real-world power, not God’s will. Thomas More slipped Lucretius’s ideas about pleasure into his famous book *Utopia*. Michel de Montaigne filled his personal copy with handwritten notes, learning how to accept death without fear. And Giordano Bruno took Lucretius’s idea of infinite worlds so seriously that the Inquisition burned him alive in Rome.

### 9.2 Niccolò Machiavelli: Politics Without Providence
In the late 1490s, a young Florentine clerk named **Niccolò Machiavelli** sat at his desk and painstakingly hand-copied the entire text of *De Rerum Natura* (a manuscript discovered in the Vatican Library only in 1961):
- Greenblatt shows that Machiavelli’s revolutionary political philosophy in *The Prince* and *The Discourses* was deeply steeped in Lucretian materialism:
  - Machiavelli completely discarded the medieval Christian belief that God installs kings and guides historical fortunes.
  - History is not a divine morality play; history is a turbulent, shifting arena of physical forces, human passions, and blind chance (*Fortuna*).
  - To survive in politics, an astute prince must act like a physicist: understanding the raw material reality of human nature as it actually is, not as theologians wish it to be.

### 9.3 Thomas More: The Epicurean Utopia
In 1516, the devout Catholic English humanist (and future martyr) **Sir Thomas More** published *Utopia*:
- While modern readers assume Utopia is a puritanical Christian monastery, Greenblatt highlights an astonishing paradox at the core of the book:
  - The Utopians’ entire moral philosophy is explicitly **Epicurean**: they define virtue as living according to nature, and they identify **pleasure as the ultimate goal of human existence**.
  - More showed that when stripped of theological dogmas about original sin and self-mortification, rational human beings naturally organize society around mutual comfort, leisure, intellectual inquiry, and shared well-being.

### 9.4 Michel de Montaigne: The Art of Living
In 1564, the French nobleman **Michel de Montaigne** bought a personal copy of Lucretius's poem (which survives today, preserved with his handwritten marginal notes):
- In his groundbreaking *Essays*, Montaigne cited Lucretius nearly a hundred times—more than almost any other ancient author:
  - Lucretius cured Montaigne of the terror of death. When Montaigne suffered a near-fatal riding accident, he felt no agony or horror, only a peaceful, gentle slipping away of consciousness, proving Lucretius right.
  - Montaigne embraced Lucretian skepticism: human beings are not the lords of creation. *"When I play with my cat,"* Montaigne wrote, *"who knows whether she is passing the time with me, or I with her?"*

### 9.5 Giordano Bruno: The Martyr of Infinity
The most radical, fearless reader of Lucretius was the runaway Dominican friar **Giordano Bruno (1548–1600)**:
- Bruno took Lucretius's doctrine of infinite space and infinite atoms to its absolute, cosmic conclusion:
  - If space is infinite and atoms are infinite, then our solar system cannot be the center of the universe!
  - There must be **an infinity of worlds** orbiting an infinity of stars, populated by other living beings.
  - The Earth is merely an ordinary grain of sand in a boundless, magnificent, eternal cosmos.
- For this grand Lucretian vision, Bruno was hunted by the Roman Inquisition, imprisoned in total darkness for seven years, and on **February 17, 1600**, driven to the Campo de' Fiori in Rome. His tongue was gagged with an iron clamp to prevent him from speaking, and **he was burned alive at the stake**. Bruno became the supreme martyr of the infinite universe.

---

## Unit 10: How the Swerve Made the Modern World: From Galileo to Jefferson and Darwin

### 10.1 The Core Idea in Plain English
Look around at our modern world: we have modern physics (everything is made of atoms), modern biology (evolution through natural selection), modern medicine (curing diseases with science instead of prayer), and democratic constitutions guaranteeing "the pursuit of happiness." Every single one of these ideas traces its ancestry directly back to the book Poggio rescued from the German monastery. The swerve of 1417 made our world.

### 10.2 The Birth of Modern Science
In the 17th century, the greatest minds of the Scientific Revolution systematically rehabilitated Lucretian atomism:
- **Galileo Galilei**: Adopted atomism to explain physical mechanics, heat, and optics, which earned him the condemnation of the Inquisition.
- **Pierre Gassendi**: A French Catholic priest and philosopher who performed the brilliant intellectual feat of "baptizing" Epicurus, convincing scholars that one could accept atomistic physics without being an atheist.
- **Robert Boyle & Isaac Newton**: Founded modern chemistry and classical physics on the foundation of corpuscular / atomic mechanics: matter as hard, impenetrable, moving particles governed by universal mathematical laws.

### 10.3 The Political Climax: Thomas Jefferson
The Lucretian swerve crossed the Atlantic Ocean into the American founding:
- In his personal library at Monticello, **Thomas Jefferson** owned five different editions of Lucretius in Latin, along with translations in English, French, and Italian.
- In a famous letter to William Short on October 31, 1819, the author of the Declaration of Independence declared:
  > *"I too am an Epicurean. I consider the genuine (not the imputed) doctrines of Epicurus as containing everything rational in moral philosophy which Greece and Rome have left us."*
- When Jefferson penned the immortal phrase in the Declaration of Independence—securing the unalienable right to **"Life, Liberty and the pursuit of Happiness"**—he was consciously substituting the Epicurean ideal of happiness (*voluptas*) in place of John Locke's more conservative "property."

### 10.4 The Biological Climax: Charles Darwin
In 1859, **Charles Darwin** published *On the Origin of Species*:
- Two thousand years earlier, Lucretius had outlined a breathtaking proto-evolutionary hypothesis in Book V of *De Rerum Natura*:
  - The earth spontaneously generated countless animal forms, but those monstrosities that lacked the organs to find food, defend themselves, or reproduce naturally died out, leaving only those species equipped for survival.
- Darwin provided the verified scientific mechanism for what Lucretius had grasped through pure philosophical intuition: **order, complexity, and life emerge naturally from blind physical variation filtered by environmental selection without any need for a supernatural designer**.

### 10.5 Greenblatt's Final Meditation
Greenblatt concludes his masterpiece with a poignant reflection on the power of the written word:
- The modern world—with its secular liberties, its scientific wonders, its medical cures, and its clear-eyed acceptance of human mortality—was not inevitable.
- It hung by a spider’s silk: a single parchment manuscript sitting unread in the Swabian snow.
- When Poggio Bracciolini reached up his hand and pulled that book down from the shelf, the course of human history made a tiny, imperceptible swerve. And in that swerve, **the modern world was born**.
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
      <button class="view-btn active" data-view="journey">View A: Historical & Renaissance Journey</button>
      <button class="view-btn" data-view="map">View B: Materialist Rebirth Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Lucretian Swerve Engine</button>
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
          <h2>Materialist Rebirth Blueprint: The Swerve: How the World Became Modern</h2>
          <p class="subtitle">Complete historical and conceptual map of Stephen Greenblatt's 10 units on Poggio Bracciolini, Lucretius, and the Renaissance.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Themes & Historical Milestones:</strong></p>
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
          <h2>The Lucretian Swerve & Renaissance Humanism Engine</h2>
          <div class="engine-section">
            <h3>Diagnostic Maxims on Materialism, Humanism, and Cultural Transformation</h3>
            <div class="formula-box">
              <p><strong>1. The Power of the Physical Text:</strong> Ideas do not float in the ether; they depend on fragile organic materials (papyrus, parchment, paper). The rediscovery of a single lost book can redirect the course of human civilization.</p>
              <p><strong>2. The Clinamen Axiom:</strong> Determinism is broken by the unpredictable atomic swerve (*clinamen*). Nature generates infinite variety and human agency through minute, probabilistic deflections.</p>
              <p><strong>3. The Liberation of Pleasure:</strong> Philosophy is the therapeutic dissolution of manufactured terror. Understanding natural laws eradicates the twin poisons of religious dread and the fear of death, unlocking the serene pursuit of happiness (*Ataraxia*).</p>
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
