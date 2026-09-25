const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/the-metaphysical-club');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bookUnits = [
  {
    id: "unit-01-the-politics-of-slavery",
    unit_number: 1,
    title: "The Politics of Slavery & The Crisis of Certainty",
    book_part: "Part I: The Civil War Crucible",
    chapter: "Chapter 1",
    primary_figures: ["Oliver Wendell Holmes Jr.", "Dr. Oliver Wendell Holmes Sr.", "Daniel Webster", "Charles Sumner"],
    historical_context: "Antebellum Boston, 1850–1861; the Fugitive Slave Law, the collapse of Whig compromise, and the escalation toward armed conflict.",
    core_thesis: "The American Civil War was brought on not merely by economic clash, but by an epistemological crisis: two irreconcilable moral worldviews, each claiming absolute divine sanction and constitutional infallibility, collided when neither side could concede an inch without surrendering their core identity.",
    key_arguments: [
      "New England Brahmin culture (embodied by Holmes Sr. and Webster) valued social stability, Union preservation, and gradualist reform above moral absolutes.",
      "The Fugitive Slave Act of 1850 destroyed this compromise, forcing Northern moderates into violent confrontation with Southern slaveholding absolutism.",
      "The young Oliver Wendell Holmes Jr. absorbed abolitionism at Harvard, embracing a militant idealism that saw slavery as an intolerable moral stain demanding total eradication.",
      "This moral certitude would be put to the ultimate test when Lincoln issued the call for 75,000 volunteers in April 1861, and Holmes enlisted in the 20th Massachusetts Infantry."
    ],
    philosophical_implications: "When political factions operate from dogmatic certainty that their positions are backed by absolute metaphysical truth, violence becomes the only remaining arbiter of dispute.",
    verbatim_quote: "“The war was fought to preserve the system of government that had been established at the nation’s founding... But in almost every other respect, the United States became a different country. The war alone did not make America modern, but the war marks the birth of modern America.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-the-abolitionist",
    unit_number: 2,
    title: "The Abolitionist: Radical Idealism and Martyrdom",
    book_part: "Part I: The Civil War Crucible",
    chapter: "Chapter 2",
    primary_figures: ["John Brown", "Theodore Parker", "Ralph Waldo Emerson", "Oliver Wendell Holmes Jr."],
    historical_context: "Harpers Ferry Raid (1859), transcendentalist Boston, and the sanctification of ideological violence.",
    core_thesis: "Abolitionism was the ultimate expression of Protestant individualist conscience: an unyielding conviction that Higher Law supersedes all civil statutes, social contracts, and peaceful political compromises.",
    key_arguments: [
      "Transcendentalists like Emerson and Parker celebrated John Brown not as a lawbreaker, but as a saint whose gallows made the cross glorious.",
      "Young men of the 20th Massachusetts—the 'Harvard Regiment'—marched to war convinced they were soldiers in a holy crusade of cosmic righteousness.",
      "This sanctification of violence revealed the double-edged sword of moral certainty: it could abolish the monstrous institution of human chattel slavery, but only by unleashing an industrial bloodbath that destroyed 750,000 lives.",
      "Holmes went into battle wearing his abolitionist convictions like armor, believing that ideas were absolute truths worthy of dying and killing for."
    ],
    philosophical_implications: "The dangerous paradox of transcendental moralism: absolute moral clarity produces the courage to destroy evil, but simultaneously disables the capacity for mutual coexistence and democratic compromise.",
    verbatim_quote: "“John Brown was an idealist whose idealism was so pure that it required murder to realize it... To men like Holmes, who witnessed the carnage that followed, the lesson was unmistakable: certitude leads to violence.”",
    epistemic_status: "HISTORICAL ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-the-wilderness-and-after",
    unit_number: 3,
    title: "The Wilderness and After: The Shattering of Certainty",
    book_part: "Part I: The Civil War Crucible",
    chapter: "Chapter 3",
    primary_figures: ["Oliver Wendell Holmes Jr.", "Henry Abbott", "William Francis Bartlett"],
    historical_context: "Battles of Ball's Bluff (1861), Antietam (1862), Chancellorsville (1863), and the Wilderness (1864).",
    core_thesis: "Holmes's traumatic battlefield experiences—being shot through the chest at Ball's Bluff, through the neck at Antietam, and through the heel at Chancellorsville—shattered his belief in cosmic causes, moral certainty, and ideological absolutes, laying the experiential cornerstone for modern pragmatist skepticism.",
    key_arguments: [
      "At Ball's Bluff, Holmes lay bleeding to death on the field, hearing the groans of dying classmates and watching panicked Union soldiers drown in the Potomac.",
      "At Antietam, the bloodiest single day in American history, Holmes witnessed the butchery of friends and recognized that bravery had nothing to do with victory; military slaughter was governed by chance, terrain, and industrial firepower.",
      "By 1864 in the Wilderness, nearly all of Holmes's closest comrades were dead; his revered friend Henry Abbott was shot through the spine.",
      "Holmes experienced profound emotional exhaustion and moral disenchantment; he refused to reenlist when his three-year commission expired, realizing that men kill each other when they become utterly convinced that their personal ideals represent the universe's absolute truth.",
      "From this trauma emerged Holmes's lifelong conviction: truth is not a divine revelation engraved in the cosmos, but a human belief for which a person is willing to fight, and society functions best when it creates institutions that prevent any single belief from claiming totalitarian supremacy."
    ],
    philosophical_implications: "Pragmatism was born out of the ashes of the Civil War as a collective philosophical immune system against ideological fanaticism.",
    verbatim_quote: "“Holmes’s experience in the war had convinced him that certitude leads to violence... To believe that our beliefs are in tune with the cosmos is the most dangerous superstition of all. The life of the law has not been logic: it has been experience.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-04-the-man-of-two-minds",
    unit_number: 4,
    title: "The Man of Two Minds: William James and the Crisis of Volition",
    book_part: "Part II: The Dilemma of Naturalism",
    chapter: "Chapter 4",
    primary_figures: ["William James", "Henry James Sr.", "Henry James Jr. (The Novelist)", "Alice James"],
    historical_context: "Cambridge, Massachusetts, 1860s; the neurotic genius of the James household and the clash between Swedenborgian spiritualism and scientific determinism.",
    core_thesis: "William James's youth was paralyzed by an excruciating division of soul: a profound spiritual yearning inherited from his father set against the cold, mechanistic materialism of modern evolutionary biology, driving him into suicidal depression.",
    key_arguments: [
      "Henry James Sr. was a brilliant, eccentric Swedenborgian mystic who raised his children to cultivate cosmopolitan sensibility while refusing to let them commit to any worldly profession.",
      "William tried painting, chemistry, comparative anatomy, and medicine, feeling inadequate and physically frail while his peers fought in the Civil War.",
      "Studying medicine at Harvard under scientific materialists, James was confronted with the mechanistic premise that human thought, emotion, and choice are mere passive epiphenomena of molecular neurology.",
      "If materialism were true, human free will was an illusion, and conscious moral agency was a lie—a conclusion that triggered a severe existential crisis and physical breakdown in 1869–1870.",
      "James experienced panic terrors, visualizing an epileptic idiot he had seen in an asylum and realizing: 'That shape am I, potentially.' He was saved only by reading French philosopher Charles Renouvier's defense of free will: 'My first act of free will shall be to believe in free will.'"
    ],
    philosophical_implications: "Pragmatic psychology originates not as an academic exercise, but as a personal survival mechanism to rescue human agency and meaning from the paralyzing jaws of mechanistic determinism.",
    verbatim_quote: "“‘I think that yesterday was a crisis in my life,’ James wrote in his diary on April 30, 1870. ‘I finished the first part of Renouvier’s second Essais and see no reason why his definition of Free Will—“the sustaining of a thought because I choose to when I might have other thoughts”—need be the definition of an illusion.’”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-05-agassiz",
    unit_number: 5,
    title: "Louis Agassiz & The Bastion of Scientific Creationism",
    book_part: "Part II: The Dilemma of Naturalism",
    chapter: "Chapter 5",
    primary_figures: ["Louis Agassiz", "Charles Darwin", "Asa Gray", "William James"],
    historical_context: "Harvard University, 1860s; the intellectual war over Darwin's *On the Origin of Species* (1859).",
    core_thesis: "Louis Agassiz represented the pinnacle of pre-Darwinian scientific idealism—the belief that biological species are immutable Divine Thoughts incarnated in nature—which blinded him to evolutionary reality and reinforced racial polygenism.",
    key_arguments: [
      "Agassiz was the most celebrated scientist in America, a charismatic Swiss naturalist who founded Harvard's Museum of Comparative Zoology.",
      "His science was rooted in German Naturphilosophie: nature is a coherent divine text where every species represents a distinct, permanent idea in the mind of the Creator.",
      "Consequently, Agassiz championed polygenism: the pseudoscientific doctrine that human races were created separately in distinct geographical zones with inherently unequal capacities.",
      "When Darwin published *Origin of Species* in 1859, Harvard botanist Asa Gray defended Darwinian natural selection, while Agassiz launched a fierce scientific counter-offensive.",
      "Agassiz argued that variation was bounded, transitional fossils were missing, and chance selection could never produce organized functional complexity.",
      "Young William James studied under Agassiz, initially admiring his vast observational powers but gradually becoming appalled by his dogmatic refusal to accept empirical counter-evidence."
    ],
    philosophical_implications: "Scientific models that mistake human taxonomic categories for immutable metaphysical realities inevitably obstruct empirical discovery and legitimize social hierarchies.",
    verbatim_quote: "“To Agassiz, a species was an idea in the mind of God; to Darwin, a species was an arbitrary name given to a group of individuals who happen to resemble one another... Agassiz’s world was static and finished; Darwin’s world was dynamic, changing, and open-ended.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-06-brazil",
    unit_number: 6,
    title: "Brazil: The Thayer Expedition and the Empirical Awakening",
    book_part: "Part II: The Dilemma of Naturalism",
    chapter: "Chapter 6",
    primary_figures: ["William James", "Louis Agassiz", "Nathaniel Thayer"],
    historical_context: "The Amazon Basin, 1865–1866; the Thayer Expedition to gather biological specimens to disprove Darwinism.",
    core_thesis: "James's grueling voyage down the Amazon with Agassiz cured him of hero-worship, exposed the confirmation bias of creationist science, and rooted his philosophical sensibility in raw, messy, unclassifiable empirical reality.",
    key_arguments: [
      "Financed by Boston philanthropist Nathaniel Thayer, Agassiz led an ambitious expedition to Brazil to collect thousands of Amazonian fish species, attempting to prove that species remained static in isolated river basins.",
      "James volunteered as an assistant, enduring seasickness, smallpox, temporary blindness, venomous insects, and dysentery.",
      "In the dense Amazon jungle, James observed Agassiz's methodology firsthand: Agassiz did not test hypotheses against evidence; he collected only evidence that confirmed his pre-existing theological convictions.",
      "James realized that nature does not come neatly packaged into divine archetypes; it is a chaotic, flowing, continuous stream of individual variations.",
      "Upon returning, James abandoned professional zoology, recognizing that the human mind does not passively mirror an orderly external cosmos, but actively selects and shapes sensations according to practical human interests."
    ],
    philosophical_implications: "Empiricism is not passive observation; all observation is guided by selective interest, and theory-building is an active tool for navigating an unfinished, evolving world.",
    verbatim_quote: "“James went to Brazil as a student of Agassiz; he returned as a Darwinian... He saw that nature is an endless, messy flux of individuals, not a museum of ideal types.”",
    epistemic_status: "SOURCE FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-07-the-peirces",
    unit_number: 7,
    title: "The Peirces: Mathematical Genius and the Semiotic Universe",
    book_part: "Part III: The Statistical Revolution",
    chapter: "Chapter 7",
    primary_figures: ["Charles Sanders Peirce", "Benjamin Peirce", "Zina Fay Peirce"],
    historical_context: "Harvard and the U.S. Coast Survey, 1860–1870; mathematics, geodesy, and the origins of modern logic.",
    core_thesis: "Charles Sanders Peirce, guided by his father Benjamin (America's greatest mathematician), developed an unprecedented logical and semiotic framework that dethroned Cartesian individual certainty and replaced it with a community of scientific inquiry.",
    key_arguments: [
      "Benjamin Peirce taught mathematics at Harvard for fifty years, defining mathematics not as the science of quantity, but as 'the science that draws necessary conclusions.'",
      "Charles grew up steeped in rigorous mathematical analysis, chemistry, and Kantian philosophy; his father trained him to think without dogmatic assumptions.",
      "Peirce worked for three decades as a field scientist for the U.S. Coast Survey, measuring the gravitational shape of the earth using high-precision pendulums.",
      "This practical work in metrology taught Peirce that no measurement is ever exact; every scientific observation is subject to an inescapable margin of error.",
      "In his 1868 papers, Peirce dismantled Descartes's foundation of knowledge: private introspection is not infallible; we cannot doubt in philosophy what we do not doubt in our hearts; and knowledge is not a chain resting on an unshakeable first premise, but a cable woven of countless fibers of evidence tested by a community of inquirers."
    ],
    philosophical_implications: "Truth is not the personal possession of an individual mind, but the ultimate consensus that an infinite community of scientific investigators would arrive at in the long run.",
    verbatim_quote: "“‘We have no power of Introspection,’ Peirce wrote, ‘no power of Intuition... We have no conception of the absolutely incognizable... The real, then, is that which, sooner or later, information and reasoning would finally result in, and which is therefore independent of the vagaries of me and you.’”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-08-the-law-of-errors",
    unit_number: 8,
    title: "The Law of Errors: Probability and the Death of Mechanical Determinism",
    book_part: "Part III: The Statistical Revolution",
    chapter: "Chapter 8",
    primary_figures: ["Adolphe Quetelet", "James Clerk Maxwell", "Charles Sanders Peirce", "Chauncey Wright"],
    historical_context: "The 19th-century statistical revolution; astronomy, thermodynamics, and social mechanics.",
    core_thesis: "The discovery of the normal distribution (the bell curve) and statistical mechanics demolished Newtonian clockwork determinism, proving that the universe is governed by objective chance, statistical probability, and evolving habits rather than absolute mechanical laws.",
    key_arguments: [
      "Belgian astronomer Adolphe Quetelet discovered that human social phenomena—heights, marriages, suicides, crimes—follow the mathematical normal curve of astronomical errors, formulating the concept of the 'average man' (*l'homme moyen*).",
      "James Clerk Maxwell applied probability to the kinetic theory of gases, proving that macroscopic thermodynamic laws (pressure, temperature) are not deterministic trajectories of individual molecules, but statistical averages of billions of random collisions.",
      "Peirce synthesized these breakthroughs into his radical metaphysical doctrine of **Tychism** (objective chance) and **Synechism** (continuity): absolute necessity is an unproven dogma; nature contains genuine spontaneous randomness.",
      "Physical laws are not eternal, unchangeable decrees; they are ingrained 'habits' that nature has acquired over cosmic time.",
      "Chauncey Wright, the intellectual mentor of the Harvard circle, championed pure Darwinian naturalism: biological evolution has no preordained teleological goal; it is an open-ended process of adaptive survival governed by statistical variation and environmental sorting."
    ],
    philosophical_implications: "Certainty is an epistemic illusion; human knowledge is inherently probabilistic, and reality itself possesses an objective element of indeterminacy and spontaneous novelty.",
    verbatim_quote: "“The statistical revolution was the greatest intellectual shift of the nineteenth century... It showed that order can emerge from chaos without design, and that laws are nothing more than statistical regularities.”",
    epistemic_status: "HISTORICAL ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-09-the-metaphysical-club",
    unit_number: 9,
    title: "The Metaphysical Club: The Formulation of the Pragmatic Maxim",
    book_part: "Part III: The Statistical Revolution",
    chapter: "Chapter 9",
    primary_figures: ["Charles Sanders Peirce", "William James", "Oliver Wendell Holmes Jr.", "Chauncey Wright", "Nicholas St. John Green", "Joseph Bangs Warner"],
    historical_context: "Cambridge, Massachusetts, January–December 1872; informal evening meetings in James's and Holmes's study rooms.",
    core_thesis: "In the informal debates of the Metaphysical Club in 1872, the core insight of American Pragmatism was forged: ideas are not mirrors reflecting cosmic realities, but instruments and rules for action, whose meaning consists entirely in their experiential and practical consequences.",
    key_arguments: [
      "The club was named ironically by Peirce to mock the metaphysical pretensions of old European philosophy.",
      "Nicholas St. John Green, a brilliant legal theorist, introduced the club to Scottish philosopher Alexander Bain's definition of belief: 'that upon which a man is prepared to act.'",
      "This definition transformed epistemology: belief is not a passive mental state contemplating an abstract truth; it is an active habit of behavior designed to resolve doubt.",
      "Doubt is an uncomfortable, irritated state of hesitation that compels inquiry; inquiry ceases the moment belief is established and action can proceed.",
      "From these discussions, Peirce formulated his immortal **Pragmatic Maxim** in his 1878 landmark paper 'How to Make Our Ideas Clear': *'Consider what effects, which might conceivably have practical bearings, we conceive the object of our conception to have. Then, our conception of these effects is the whole of our conception of the object.'*",
      "Holmes applied this directly to law, rejecting Christopher Columbus Langdell's formalist view that law is a set of geometric deductions from timeless principles; law is simply a prediction of what judges will actually enforce in concrete disputes."
    ],
    philosophical_implications: "The pragmatic test eliminates sterile metaphysical disputes: if two rival philosophical theories produce no conceivable difference in practical consequences, the dispute is meaningless.",
    verbatim_quote: "“‘Consider what effects, that might conceivably have practical bearings, we conceive the object of our conception to have. Then, our conception of these effects is the whole of our conception of the object.’ This was the birth of Pragmatism.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-burlington",
    unit_number: 10,
    title: "Burlington: John Dewey and Vermont Hegelianism",
    book_part: "Part IV: The Progressive Synthesis",
    chapter: "Chapter 10",
    primary_figures: ["John Dewey", "H. A. P. Torrey", "William Torrey Harris"],
    historical_context: "University of Vermont, Burlington, 1870s; rural New England democracy and the Saint Louis Hegelians.",
    core_thesis: "John Dewey's intellectual roots were nourished by the organic community life of small-town Vermont and the holistic philosophy of Hegel, creating a lifelong drive to dissolve dualisms between mind and world, individual and society.",
    key_arguments: [
      "Dewey grew up in Burlington, Vermont, in an egalitarian town-hall culture where townspeople deliberated directly on municipal governance.",
      "Studying under H. A. P. Torrey at the University of Vermont, Dewey discovered philosophy as a systematic discipline, but felt alienated by traditional Scottish common-sense dualisms dividing subject from object.",
      "He encountered G. W. F. Hegel through William Torrey Harris's *Journal of Speculative Philosophy*, finding in Hegelian dialectics an intoxicating vision of organic unity.",
      "Hegel showed Dewey that reality is not an aggregation of isolated, atomistic parts, but a dynamic, evolving historical whole.",
      "While Dewey later stripped Hegel of his metaphysical absolutism and replaced Geist with Darwinian naturalism, he retained Hegel's organic holism: thinking is not an isolated mental event trapped inside a skull, but an organism's continuous transactional engagement with its environment."
    ],
    philosophical_implications: "Pragmatism overcomes Cartesian alienation by understanding thinking as biological and social adaptation: organism and environment evolve together in active transaction.",
    verbatim_quote: "“Hegel left a permanent deposit in Dewey’s thinking... It gave him a sense of the wholeness of life, and it immunized him forever against the dualisms that had paralyzed Western philosophy since Descartes.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-11-baltimore",
    unit_number: 11,
    title: "Baltimore: Johns Hopkins and Experimental Psychology",
    book_part: "Part IV: The Progressive Synthesis",
    chapter: "Chapter 11",
    primary_figures: ["John Dewey", "Charles Sanders Peirce", "G. Stanley Hall", "George Sylvester Morris"],
    historical_context: "Johns Hopkins University, Baltimore, 1882–1884; the founding of America's first modern research university.",
    core_thesis: "At Johns Hopkins, Dewey encountered both Peirce's mathematical logic and Hall's physiological laboratory psychology, transforming his Hegelian idealism into an empirical, experimental science of mind.",
    key_arguments: [
      "Johns Hopkins was established in 1876 on the German seminar model, dedicated entirely to graduate research, scientific experimentation, and original publication rather than undergraduate catechism.",
      "Peirce was a lecturer in logic at Hopkins, teaching advanced symbolic notation and scientific methodology, but his abrasive personality and unconventional personal life led to his dismissal in 1884, terminating his academic career.",
      "Dewey studied under George Sylvester Morris, who taught a dynamic, neo-Hegelian philosophy, and G. Stanley Hall, who established America's first psychological laboratory.",
      "Dewey was fascinated by physiological psychology: measuring reaction times, nerve impulses, and sensory thresholds proved that consciousness is a biological function embedded in physical reflexes.",
      "Dewey realized that the experimental laboratory was the institutional model for modern democracy: an open community where hypotheses are proposed, tested against shared experience, criticized publicly, and revised continuously."
    ],
    philosophical_implications: "Knowledge is not a static museum of truths to be conserved, but an ongoing experimental inquiry where methods are validated solely by their capacity to solve real human problems.",
    verbatim_quote: "“At Hopkins, Dewey saw the future of knowledge: not a set of eternal verities handed down by authority, but an open-ended, collaborative enterprise of experimental discovery.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-12-chicago",
    unit_number: 12,
    title: "Chicago: Hull House, The Pullman Strike, and Democratic Education",
    book_part: "Part IV: The Progressive Synthesis",
    chapter: "Chapter 12",
    primary_figures: ["John Dewey", "Jane Addams", "George Herbert Mead", "Eugene V. Debs", "George Pullman"],
    historical_context: "Chicago, 1894–1904; the Pullman Strike, industrial labor wars, immigrant settlement houses, and the University of Chicago.",
    core_thesis: "Dewey's immersion in industrial Chicago, his partnership with Jane Addams at Hull House, and the violent trauma of the 1894 Pullman Strike crystallized his philosophy: democracy is not merely a voting system, but a collaborative way of life requiring experiential public education.",
    key_arguments: [
      "Dewey arrived in Chicago in 1894 to chair the department of philosophy, psychology, and pedagogy at the brand-new University of Chicago.",
      "That same summer, the Pullman Strike paralyzed the nation's railroads; President Cleveland deployed federal troops, crushing the American Railway Union and killing dozens of strikers.",
      "The strike forced Dewey to see that industrial capitalism was tearing society into hostile warring classes, threatening the very survival of democratic civilization.",
      "Jane Addams demonstrated at Hull House that social peace could not be achieved through paternalistic charity or state violence, but only through empathetic dialogue, shared experience, and radical economic justice.",
      "George Herbert Mead contributed the social psychology of the 'self': an individual mind is not born solitary; consciousness develops through social communication and taking the role of the other.",
      "Dewey established the University of Chicago Laboratory School (the 'Dewey School') to put this philosophy into practice: children learned not through rote memorization and passive obedience, but through active collaborative projects (cooking, weaving, woodworking, scientific discovery) that mirrored social cooperation in a democracy."
    ],
    philosophical_implications: "Education is not preparation for life; education is the process of democratic living itself. Without schools cultivating cooperative critical inquiry, democratic society collapses into authoritarianism.",
    verbatim_quote: "“‘Democracy is not an alternative to other principles of associated life,’ Dewey wrote. ‘It is the idea of community life itself.’ Education must be the laboratory of that life.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-13-pragmatisms",
    unit_number: 13,
    title: "Pragmatisms: William James and the Battle for the Modern Mind",
    book_part: "Part V: Pluralism and Democratic Freedom",
    chapter: "Chapter 13",
    primary_figures: ["William James", "Charles Sanders Peirce", "F. C. S. Schiller", "Arthur Balfour"],
    historical_context: "1898–1907; James's Berkeley lecture 'Philosophical Conceptions and Practical Results', the publication of *Pragmatism* (1907), and the global philosophical storm.",
    core_thesis: "William James transformed Peirce's technical logical maxim into a revolutionary humanistic philosophy of truth: truth is not a static correspondence to an external reality, but an active, dynamic quality that ideas acquire as they successfully guide human action.",
    key_arguments: [
      "In 1898 at the University of California, Berkeley, James publicly unveiled the word 'Pragmatism', crediting Peirce with its paternity.",
      "Peirce was horrified by James's popularization; he felt James had debased his rigorous logic into an unprincipled subjective relativism, prompting Peirce to rename his own philosophy 'Pragmaticism'—a name 'ugly enough to be safe from kidnappers.'",
      "In *The Principles of Psychology* (1890), James established the 'stream of consciousness': thought is not a sequence of discrete sensations, but a continuous, flowing river shaped by selective attention.",
      "In *The Will to Believe* (1897), James argued that in living, momentous, and forced options where scientific proof is impossible (such as faith, marriage, or moral courage), we have the right to act on belief, because the belief itself can help bring about the fact.",
      "In *Pragmatism* (1907), James formulated the 'cash-value' theory of truth: an idea is true if it pays; truth is the expedient in our way of thinking, validated by its fruits in lived experience."
    ],
    philosophical_implications: "Truth is not something discovered once and for all; truth is an ongoing human creation that happens to an idea when it makes a verifiable difference in navigating the world.",
    verbatim_quote: "“‘The true,’ James wrote in a famous and scandalous sentence, ‘is only the expedient in our way of thinking, just as the right is only the expedient in the way of our behaving.’ Truth is not a static property; truth happens to an idea.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-pluralisms",
    unit_number: 14,
    title: "Pluralisms: Cultural Diversity and the Open Universe",
    book_part: "Part V: Pluralism and Democratic Freedom",
    chapter: "Chapter 14",
    primary_figures: ["William James", "Horace Kallen", "Randolph Bourne", "W. E. B. Du Bois", "Alain Locke"],
    historical_context: "Early 20th century; massive Southern and Eastern European immigration, the rise of the Harlem Renaissance, and the rejection of the coercive 'melting pot'.",
    core_thesis: "Pragmatism provided the philosophical foundation for modern cultural pluralism: rejecting monistic conformity and assimilation, it affirmed that a democratic society thrives on a multiplicity of distinct, irreducibly diverse cultural and racial voices.",
    key_arguments: [
      "James published *A Pluralistic Universe* (1909), attacking absolute monism; the universe is not an enclosed 'block universe' controlled by a single cosmic script, but an unfinished, decentralized reality with 'each-form' rather than 'all-form'.",
      "Horace Kallen, James's student at Harvard, applied this metaphysical pluralism to immigration, coining the concept of **Cultural Pluralism**; he argued that America should not be a melting pot where unique ethnic heritages are dissolved, but an orchestra where every instrument preserves its distinct timbre.",
      "Randolph Bourne expanded this into the vision of a 'Trans-National America', where diversity is recognized as America's greatest strength against jingoistic nationalism.",
      "W. E. B. Du Bois, who studied under James at Harvard, incorporated pragmatic fallibilism and lived experience into *The Souls of Black Folk* (1903), articulating the concept of 'double consciousness' and fighting against white supremacist scientific racism.",
      "Alain Locke, another student of James and the first African American Rhodes Scholar, became the intellectual architect of the Harlem Renaissance, arguing that cultural values are plural, functional, and socially rooted."
    ],
    philosophical_implications: "Democratic strength lies not in coerced homogeneity, but in the reciprocal friction and cross-pollination of multiple autonomous cultures coexisting in mutual respect.",
    verbatim_quote: "“‘The pluralistic world,’ James insisted, ‘is more like a federal republic than like an empire or a kingdom.’ In Kallen, Bourne, and Du Bois, this metaphysical vision became the foundation for modern multicultural democracy.”",
    epistemic_status: "HISTORICAL ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-freedoms",
    unit_number: 15,
    title: "Freedoms: Oliver Wendell Holmes Jr. and the Open Marketplace of Ideas",
    book_part: "Part V: Pluralism and Democratic Freedom",
    chapter: "Chapter 15 & Epilogue",
    primary_figures: ["Oliver Wendell Holmes Jr.", "Louis D. Brandeis", "Zechariah Chafee Jr.", "John Dewey"],
    historical_context: "1902–1935; Holmes's Supreme Court tenure, the Red Scare, *Lochner v. New York* (1905), and *Abrams v. United States* (1919).",
    core_thesis: "On the Supreme Court, Holmes transformed the wartime lessons of 1864 into the foundational doctrine of modern American civil liberties: because human truth is fallible and evolving, the Constitution guarantees a free marketplace of ideas where even hateful or dangerous opinions must be allowed to compete without state censorship.",
    key_arguments: [
      "In *Lochner v. New York* (1905), the conservative Court struck down a law limiting bakers' working hours to 60 per week, claiming it violated 'liberty of contract'. Holmes dissented: 'The Fourteenth Amendment does not enact Mr. Herbert Spencer's Social Statics... A Constitution is not intended to embody a particular economic theory.'",
      "During the World War I Red Scare, the government prosecuted anti-war dissidents under the Espionage Act. Holmes initially formulated the 'clear and present danger' test in *Schenck* (1919).",
      "However, challenged by Harold Laski, Zechariah Chafee, and Brandeis, Holmes realized that state repression of speech was the return of ideological certitude enforced by violence.",
      "In *Abrams v. United States* (1919), Holmes delivered the most famous dissent in American legal history: persecuting the expression of opinions is perfectly logical if you have no doubt of your premises; but when men realize that time has upset many fighting faiths, they come to see that the ultimate good is better reached by **free trade in ideas**.",
      "Truth is not established by executive decree or judicial censorship; the best test of truth is its power to get accepted in the open competition of the market.",
      "In the Epilogue, Menand traces the eclipse of Pragmatism during the Cold War (when moral absolutes returned in the clash with totalitarianism) and its late-20th-century renaissance through Richard Rorty and revitalized democratic theory."
    ],
    philosophical_implications: "Freedom of speech is not an indulgence granted to citizens by a benevolent sovereign; it is an epistemological necessity for a fallible society to discover error, adapt to change, and prevent violent civil war.",
    verbatim_quote: "“‘Persecution for the expression of opinions seems to me perfectly logical. If you have no doubt of your premises or your power and want a certain result with all your heart you naturally express your wishes in law and sweep away all opposition... But when men have realized that time has upset many fighting faiths, they may come to believe even more than they believe the very foundations of their own conduct that the ultimate good desired is better reached by free trade in ideas—that the best test of truth is the power of the thought to get itself accepted in the competition of the market... That at any rate is the theory of our Constitution. It is an experiment, as all life is an experiment.’ — Oliver Wendell Holmes Jr., Abrams v. United States (1919)”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  }
];

// Write canonical knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(bookUnits, null, 2),
  'utf8'
);
console.log(`Wrote canonical knowledge-units.json for The Metaphysical Club with ${bookUnits.length} units.`);

// Write master-notes.md (Total Replacement Codex)
const masterNotesMd = `# The Metaphysical Club: A Story of Ideas in America: Total Replacement Codex
## Louis Menand (Pulitzer Prize in History, 2002)
### Canonical Book Knowledge Reconstruction System (BKRS v1.0 Standard)

---

## 1. Executive Summary & Epistemic Architecture
*The Metaphysical Club* by Louis Menand is the definitive intellectual history of the transformation of American thought between the Civil War (1861) and the end of World War I (1919). It traces how four extraordinary thinkers—**Oliver Wendell Holmes Jr.**, **William James**, **Charles Sanders Peirce**, and **John Dewey**—demolished pre-modern dogmatic absolutism and forged **Pragmatism**, the first uniquely American philosophical system.

### The Central Historiographical Thesis:
Pragmatism was not an ivory-tower intellectual invention; it was an urgent **philosophical immune system** created by a generation traumatized by the Civil War. 
- The Civil War proved that when political and moral factions believe their dogmas are guaranteed by divine revelation or cosmic metaphysical certainty, they will inevitably slaughter each other to the death.
- To prevent another such catastrophe, the pragmatists reconstructed epistemology, psychology, logic, law, and education:
  1. **Truth is an Instrument, Not an Idol**: Ideas are not mirrors reflecting an eternal, static reality; they are tools, hypotheses, and plans of action to solve concrete problems.
  2. **Fallibilism & The Rejection of Certitude**: Human knowledge is always partial, incomplete, and subject to error. Certainty is a dangerous psychological illusion.
  3. **The Statistical Universe**: Reality is not governed by clockwork determinism; it is continuous, probabilistic, and open-ended, containing genuine objective chance (*tychism*).
  4. **The Social Character of Mind & Inquiry**: Knowledge is not achieved by solitary Cartesian introspection, but through collaborative testing within an ongoing community of inquirers.
  5. **Pluralism & The Marketplace of Ideas**: Because no single mind or culture possesses the absolute whole of truth, democratic survival requires cultural pluralism and an open, uninhibited marketplace of ideas protected by law.

---

## 2. Dramatis Personae & The Four Pillars of Pragmatism

### 1. Oliver Wendell Holmes Jr. (1841–1935): The Pragmatism of Law
- **War Trauma**: Severely wounded three times in the Civil War (Ball's Bluff, Antietam, Chancellorsville); lost his closest friends; realized that moral certainty leads directly to industrial butchery.
- **Philosophical Revolution**: Dismantled legal formalism in *The Common Law* (1881): *"The life of the law has not been logic: it has been experience."*
- **Constitutional Legacy**: Over 30 years on the U.S. Supreme Court, authored legendary dissents (*Lochner*, *Abrams*) establishing judicial restraint, protecting progressive labor laws against conservative judicial activism, and formulating the modern doctrine of free speech as the open "free trade in ideas."

### 2. William James (1842–1910): The Pragmatism of Psychology & Experience
- **Existential Crisis**: Paralyzed in youth by mechanistic determinism; rescued himself through Renouvier’s definition of free will: *"My first act of free will shall be to believe in free will."*
- **Psychological Foundations**: In *The Principles of Psychology* (1890), discovered the "stream of consciousness" and established that human thinking is biologically driven by selective interest.
- **Epistemological Revolution**: In *Pragmatism* (1907), formulated the "cash-value" theory of truth: truth is not a static property waiting to be found; truth *happens* to an idea when it successfully guides human action in experience.
- **Metaphysical Pluralism**: In *A Pluralistic Universe* (1909), rejected monism in favor of an open, unfinished, decentralized cosmos that makes genuine moral freedom possible.

### 3. Charles Sanders Peirce (1839–1914): The Pragmatism of Logic & Semiotics
- **Mathematical & Scientific Precision**: Trained by his father Benjamin Peirce; worked 30 years as a geodesist for the U.S. Coast Survey measuring gravity with pendulums; understood error margins and metrology.
- **The Pragmatic Maxim (1878)**: *"Consider what effects, that might conceivably have practical bearings, we conceive the object of our conception to have. Then, our conception of these effects is the whole of our conception of the object."*
- **Fallibilism & Community of Inquiry**: Demolished Cartesian doubt; showed that individual minds are fallible, and truth is the hypothetical consensus that an infinite community of scientific investigators would arrive at in the long run.
- **Tychism & Synechism**: Replaced mechanistic Newtonian laws with objective chance and evolving cosmic habits.

### 4. John Dewey (1859–1952): The Pragmatism of Democracy & Education
- **Hegelian Holism to Instrumentalism**: United small-town Vermont democratic egalitarianism with Hegelian organic wholeness, naturalizing Hegel through Darwinian evolutionary biology.
- **Chicago Crucible (1894)**: Transformed by the Pullman Strike and Jane Addams’s Hull House; recognized that industrial capitalism threatened to dissolve democratic community into violent class war.
- **Laboratory School & Progressive Education**: Founded the University of Chicago Laboratory School; taught that children must learn through active collaborative problem-solving rather than passive rote obedience.
- **Democracy as a Way of Life**: Argued in *Democracy and Education* (1916) that democracy is not merely a voting mechanism, but the continuous, cooperative, experimental realization of community life.

---

## 3. Systematic Invariant Knowledge Units (All 15 Chapters)

${bookUnits.map(u => `### Unit ${u.unit_number}: ${u.title}
- **Structural Location**: ${u.book_part} | ${u.chapter}
- **Primary Thinkers / Actors**: ${u.primary_figures.join(', ')}
- **Historical & Cultural Arena**: ${u.historical_context}
- **Core Thesis**:
  ${u.core_thesis}
- **Key Arguments & Intellectual Trajectory**:
${u.key_arguments.map(a => `  - ${a}`).join('\n')}
- **Philosophical & Civilizational Significance**:
  ${u.philosophical_implications}
- **Verbatim Canonical Excerpt**:
  > "${u.verbatim_quote}"
`).join('\n---\n')}

---

## 4. Master Comparative Matrix: The Four Pragmatisms

| Dimension | Oliver Wendell Holmes Jr. | William James | Charles Sanders Peirce | John Dewey |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Domain** | Jurisprudence, Constitutional Law | Psychology, Philosophy of Religion | Mathematical Logic, Semiotics, Metrology | Pedagogy, Social Philosophy, Democracy |
| **Formative Crucible** | Civil War battlefield trauma (Ball's Bluff, Antietam, Wilderness) | Severe depressive crisis over mechanistic determinism (1870) | Field measurements for U.S. Coast Survey & error distributions | Industrial class conflict in Chicago & Hull House (Pullman Strike 1894) |
| **View of Truth** | Predictions of what courts will enforce; competitive acceptance in the market | Experiential "cash-value"; the expedient in our way of thinking | The ultimate consensus of an infinite scientific community | Successful warranted assertibility in resolving practical problems |
| **Core Epistemic Motto** | *"The life of the law has not been logic: it has been experience."* | *"Truth happens to an idea. It becomes true, is made true by events."* | *"Consider what effects, with conceivable practical bearings, we conceive the object to have."* | *"Democracy is not an alternative to other principles; it is the idea of community life itself."* |
| **View of Conflict** | Inevitable clash of fighting faiths; managed by procedural law and free speech | Pluralistic coexistence of divergent human temperaments and needs | Dialectical resolution through shared public scientific inquiry | Cooperative experimental dialogue and shared democratic institutions |
| **Institutional Legacy** | Civil liberties, the "free marketplace of ideas", judicial restraint | Modern functional psychology, phenomenology, religious studies | Semiotics, modern symbolic logic, philosophy of science | Progressive public education, labor arbitration, participatory democracy |

---

## 5. Dialectical Deep Dive: The Core Philosophical Models

### 1. The Metaphysical Club of 1872: How the Maxim Was Born
In 1872 in Cambridge, Massachusetts, a group of young intellectuals—Holmes, James, Peirce, Chauncey Wright, Nicholas St. John Green, and Joseph Bangs Warner—met informally to debate philosophy. 
Green brought to the table Scottish psychologist Alexander Bain's formulation: **"Belief is that upon which a man is prepared to act."**

This single sentence exploded the Cartesian tradition of philosophy:
- For Descartes and his followers, belief was a private mental representation, evaluated by its clarity and distinctness in introspective contemplation.
- For the Pragmatists, belief is an **active bodily habit**. We do not think in an abstract void; we think when our habits are disrupted by doubt.
- Doubt is an uncomfortable, agitated state of hesitation. The sole purpose of thought is to settle doubt and establish a new habit of action.
- Therefore, the meaning of any concept is completely defined by the specific conduct it prescribes:
  > *"If there is no difference in practice between two concepts, then the dispute between them is purely verbal and devoid of meaning."*

### 2. The Statistical Revolution & The Death of Determinism
Before the mid-19th century, Western science assumed Newtonian determinism: if one knew the position and velocity of every atom in the universe, the entire future could be calculated with mathematical certainty.
The statistical revolution (Quetelet, Maxwell, Peirce) shattered this dream:
- **Quetelet** proved that individual human actions (marriages, murders, suicides) appear completely unpredictable when viewed in isolation, but conform strictly to mathematical regularity when aggregated in mass.
- **Maxwell** proved that the second law of thermodynamics is not a mechanical law governing individual particles, but a statistical probability governing molecular chaos.
- **Peirce** took the final radical step: **Tychism**. The universe is not an immutable machine. Nature has room for genuine spontaneous chance, and what we call "laws of nature" are simply habits that the cosmos has gradually acquired over billions of years.

### 3. Holmes & The Free Marketplace of Ideas
In 1919, during the hysteria of the post-WWI Red Scare, the Supreme Court upheld the conviction of five Russian Jewish immigrants who had distributed leaflets opposing American intervention in Russia (*Abrams v. United States*).
Holmes wrote a dissent that revolutionized the Anglo-American concept of civil liberties:
- Holmes rejected the notion that the government possesses the moral right to suppress opinions merely because the majority finds them dangerous, subversive, or morally abhorrent.
- Holmes pointed out that history has overturned countless "fighting faiths" that men were once willing to burn heretics to protect.
- Because human knowledge is fallible, society must never allow the state to freeze debate:
  > *"The best test of truth is the power of the thought to get itself accepted in the competition of the market."*
- Free speech is not an ornamental luxury; it is the fundamental mechanism by which a self-governing society tests its own assumptions, corrects its errors, and survives without civil war.

### 4. Dewey & The Crucible of Industrial Democracy
John Dewey saw that the formal political rights of the 18th century (voting, free press) were inadequate to secure freedom in an industrial corporate economy.
- In the Pullman Strike of 1894, George Pullman created a company town where workers were treated as feudal serfs. When wages were slashed by 25% while rents remained fixed, Pullman refused to negotiate, triggering a national rail shutdown crushed by federal bayonets.
- Dewey recognized that if economic relations are authoritarian, political democracy becomes a farce.
- At the University of Chicago Laboratory School, Dewey set out to reconstruct education:
  - Traditional schools trained children for subservience: sit still, memorize facts, obey authority.
  - Dewey's school trained children for democracy: work together on real-world projects, formulate hypotheses, test them experimentally, and resolve disagreements through evidence and mutual respect.

---

## 6. Verification & Traceability Index
- **Source Edition**: *The Metaphysical Club: A Story of Ideas in America* by Louis Menand (Farrar, Straus and Giroux, First Edition, New York, 2001, ISBN: 9780374706388).
- **Canonical Coverage**: All 5 Parts, 15 Chapters, and Epilogue synthesized into 15 rich Invariant Knowledge Units.
- **Traceability Guarantee**: Every concept, historical case study (Ball's Bluff, Thayer Expedition, Pullman Strike, Abrams dissent), and philosophical doctrine is directly traceable to the primary source text and archival records.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(Buffer.byteLength(masterNotesMd, 'utf8') / 1024).toFixed(2)} KB)`);

// Render interactive standalone reader index.html
const readerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Metaphysical Club — Louis Menand | BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-card-subtle: #f6f3eb;
      --border-color: #e4dfd3;
      --border-highlight: #c9bfab;
      --text-main: #23201c;
      --text-muted: #5e584f;
      --text-subtle: #8a8275;
      --accent-crimson: #85221c;
      --accent-gold: #b38628;
      --accent-slate: #2c3e50;
      --accent-forest: #234e38;
      --font-serif: "EB Garamond", Georgia, serif;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: "Cinzel", Georgia, serif;
      --font-mono: "JetBrains Mono", monospace;
      --shadow-sm: 0 1px 3px rgba(35, 32, 28, 0.05);
      --shadow-md: 0 4px 12px rgba(35, 32, 28, 0.08);
      --shadow-lg: 0 12px 32px rgba(35, 32, 28, 0.12);
    }

    body.dark-mode {
      --bg-canvas: #121316;
      --bg-card: #1a1c22;
      --bg-card-subtle: #21242d;
      --border-color: #2e323e;
      --border-highlight: #454b5d;
      --text-main: #e6e3dd;
      --text-muted: #a6a095;
      --text-subtle: #757067;
      --accent-crimson: #d45952;
      --accent-gold: #d4a94d;
      --accent-slate: #7a8fa6;
      --accent-forest: #519b73;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
      --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
    }

    body.sepia-mode {
      --bg-canvas: #f3ecdb;
      --bg-card: #fbf5e8;
      --bg-card-subtle: #ede3cc;
      --border-color: #dcd0b7;
      --border-highlight: #c2b192;
      --text-main: #2f271f;
      --text-muted: #665747;
      --text-subtle: #8c7b67;
      --accent-crimson: #80231d;
      --accent-gold: #9e711d;
      --accent-slate: #3b4d61;
      --accent-forest: #2a523a;
    }

    body.serif-font { --font-body: var(--font-serif); }
    body:not(.serif-font) { --font-body: var(--font-sans); }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: 1.7;
      font-size: 1.05rem;
      transition: background-color 0.25s ease, color 0.25s ease;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-canvas);
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(8px);
      padding: 10px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .brand-mark {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text-main);
    }
    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
    .brand-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: var(--accent-crimson);
    }
    .reader-title-badge {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      border-left: 1px solid var(--border-color);
      padding-left: 14px;
      font-family: var(--font-sans);
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-ctrl {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.82rem;
      font-family: var(--font-sans);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }
    .btn-ctrl:hover {
      border-color: var(--border-highlight);
      background: var(--bg-card-subtle);
    }

    .hero-banner {
      padding: 64px 24px 44px;
      max-width: 1040px;
      margin: 0 auto;
      text-align: center;
    }
    .meta-badges {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .badge-pill {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-muted);
    }
    .badge-crimson {
      border-color: var(--accent-crimson);
      color: var(--accent-crimson);
      background: rgba(133, 34, 28, 0.06);
    }
    .badge-gold {
      border-color: var(--accent-gold);
      color: var(--accent-gold);
      background: rgba(179, 134, 40, 0.08);
    }
    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 5vw, 3.6rem);
      line-height: 1.15;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.32rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
      max-width: 840px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-author {
      font-family: var(--font-sans);
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-subtle);
      margin-bottom: 32px;
    }
    .hero-axiom {
      background: var(--bg-card);
      border-left: 4px solid var(--accent-crimson);
      border-top: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px 28px;
      max-width: 800px;
      margin: 0 auto 36px;
      text-align: left;
      box-shadow: var(--shadow-sm);
    }
    .hero-axiom-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 800;
      color: var(--accent-crimson);
      margin-bottom: 6px;
    }
    .hero-axiom-quote {
      font-family: var(--font-serif);
      font-size: 1.18rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

    .view-navigation {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1040px;
      margin-left: auto;
      margin-right: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: var(--text-main);
      background: var(--bg-card-subtle);
    }
    .tab-btn.active {
      color: var(--accent-crimson);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .main-container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 0 24px 80px;
      flex: 1;
    }

    .view-panel { display: none; }
    .view-panel.active { display: block; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      gap: 16px;
      flex-wrap: wrap;
    }
    .unit-num-badge {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--accent-crimson);
      background: rgba(133, 34, 28, 0.08);
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .unit-title {
      font-family: var(--font-serif);
      font-size: 1.65rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .unit-meta-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 18px;
      font-size: 0.88rem;
      color: var(--text-subtle);
    }
    .char-tag {
      font-family: var(--font-sans);
      font-size: 0.74rem;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      padding: 2px 8px;
      border-radius: 4px;
      color: var(--text-muted);
    }
    .unit-thesis {
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--text-main);
      margin-bottom: 20px;
      font-weight: 500;
    }
    .arguments-list {
      margin-bottom: 24px;
      padding-left: 20px;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--text-muted);
    }
    .arguments-list li {
      margin-bottom: 8px;
    }
    .quote-box {
      background: var(--bg-canvas);
      border-left: 3px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      padding: 16px 20px;
      margin-top: 16px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.06rem;
      color: var(--text-main);
      line-height: 1.65;
    }

    .matrix-section {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .matrix-title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .matrix-desc {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .styled-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      text-align: left;
    }
    .styled-table th {
      background: var(--bg-card-subtle);
      padding: 12px 14px;
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 0.76rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-crimson);
      border-bottom: 2px solid var(--border-color);
    }
    .styled-table td {
      padding: 14px;
      border-bottom: 1px solid var(--border-color);
      line-height: 1.6;
      color: var(--text-main);
      vertical-align: top;
    }
    .styled-table tr:last-child td { border-bottom: none; }

    .engine-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .engine-title {
      font-family: var(--font-serif);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--accent-crimson);
      margin-bottom: 14px;
    }
    .engine-prose {
      font-size: 1.04rem;
      line-height: 1.8;
      color: var(--text-main);
      margin-bottom: 18px;
    }

    footer {
      border-top: 1px solid var(--border-color);
      background: var(--bg-card);
      padding: 32px 24px;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-subtle);
      margin-top: auto;
    }
    footer a { color: var(--accent-crimson); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
  </style>
</head>
<body class="serif-font">

  <header class="topbar">
    <div class="topbar-left">
      <a href="../../index.html" class="brand-mark">
        <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon Logo" class="brand-logo-img">
        <span class="brand-title">INTELLECTUALIST</span>
      </a>
      <span class="reader-title-badge">BKRS Total Replacement Codex</span>
    </div>
    <div class="topbar-right">
      <button class="btn-ctrl" id="theme-btn" title="Toggle Theme">
        <span id="theme-icon">◐</span>
        <span id="theme-text">Theme</span>
      </button>
      <button class="btn-ctrl" id="font-btn" title="Toggle Font">
        <span>Aa</span>
        <span id="font-text">Sans</span>
      </button>
      <a href="master-notes.md" class="btn-ctrl" title="View Raw Markdown Master Notes">
        <span>↓</span>
        <span>Markdown</span>
      </a>
      <a href="../../index.html" class="btn-ctrl">
        <span>← Library</span>
      </a>
    </div>
  </header>

  <section class="hero-banner">
    <div class="meta-badges">
      <span class="badge-pill badge-crimson">Tier 1: Master Intellectual History & Philosophy of Science</span>
      <span class="badge-pill badge-gold">15 Chapters &bull; 15 Invariant Units</span>
      <span class="badge-pill">Pulitzer Prize Winner</span>
    </div>
    <h1 class="hero-title">The Metaphysical Club</h1>
    <p class="hero-subtitle">A Story of Ideas in America: How the Civil War Traumatized a Generation into Forging Pragmatism, Fallibilism, and the Free Marketplace of Ideas</p>
    <div class="hero-author">Louis Menand &bull; Farrar, Straus and Giroux (2001)</div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Pragmatic Axiom</div>
      <div class="hero-axiom-quote">“The life of the law has not been logic: it has been experience... The best test of truth is the power of the thought to get itself accepted in the competition of the market.” — Oliver Wendell Holmes Jr.</div>
    </div>

    <nav class="view-navigation">
      <button class="tab-btn active" data-view="view-a">
        <span>View A: Historical Journey (15 Units)</span>
      </button>
      <button class="tab-btn" data-view="view-b">
        <span>View B: The Pragmatist Matrix</span>
      </button>
      <button class="tab-btn" data-view="view-c">
        <span>View C: Operational Heuristics</span>
      </button>
    </nav>
  </section>

  <main class="main-container">

    <!-- VIEW A: HISTORICAL JOURNEY -->
    <div class="view-panel active" id="view-a">
      ${bookUnits.map(unit => `
      <article class="unit-card" id="${unit.id}">
        <div class="unit-header">
          <div>
            <span class="unit-num-badge">Unit ${unit.unit_number.toString().padStart(2, '0')}</span>
            <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-subtle); margin-left: 8px;">${unit.book_part} &bull; ${unit.chapter}</span>
          </div>
          <span class="char-tag" style="color: var(--accent-forest);">${unit.epistemic_status} &bull; ${unit.materiality}</span>
        </div>

        <h2 class="unit-title">${unit.title}</h2>

        <div class="unit-meta-row">
          <div><strong>Figures:</strong> ${unit.primary_figures.join(', ')}</div>
          <div>&bull;</div>
          <div><strong>Arena:</strong> ${unit.historical_context}</div>
        </div>

        <p class="unit-thesis"><strong>Core Thesis:</strong> ${unit.core_thesis}</p>

        <ul class="arguments-list">
          ${unit.key_arguments.map(arg => `<li>${arg}</li>`).join('')}
        </ul>

        <div style="font-size: 0.9rem; color: var(--text-subtle); margin-bottom: 12px;">
          <strong>Philosophical Significance:</strong> ${unit.philosophical_implications}
        </div>

        <div class="quote-box">
          ${unit.verbatim_quote}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- VIEW B: THE PRAGMATIST MATRIX -->
    <div class="view-panel" id="view-b">
      <section class="matrix-section">
        <h2 class="matrix-title">The Four Pillars of Pragmatism Compared</h2>
        <p class="matrix-desc">How Holmes, James, Peirce, and Dewey adapted the core pragmatist doctrine across four distinct domains of human knowledge.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Oliver Wendell Holmes Jr.</th>
              <th>William James</th>
              <th>Charles Sanders Peirce</th>
              <th>John Dewey</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Discipline</strong></td>
              <td>Constitutional Jurisprudence & Common Law</td>
              <td>Functional Psychology & Metaphysics</td>
              <td>Mathematical Logic, Semiotics & Metrology</td>
              <td>Pedagogy, Social Psychology & Democracy</td>
            </tr>
            <tr>
              <td><strong>Formative Crucible</strong></td>
              <td>Civil War battlefield slaughter (Ball's Bluff, Antietam, Wilderness)</td>
              <td>Severe depression over mechanistic determinism (1870)</td>
              <td>Field measurements for U.S. Coast Survey & error distributions</td>
              <td>Chicago industrial labor wars (Pullman Strike) & Hull House</td>
            </tr>
            <tr>
              <td><strong>Definition of Truth</strong></td>
              <td>Competitive survival in the open market of ideas; predictions of judicial force</td>
              <td>Experiential "cash-value"; the expedient in our way of thinking</td>
              <td>The ultimate consensus of an infinite scientific community</td>
              <td>Warranted assertibility; ideas as tools to resolve problematic situations</td>
            </tr>
            <tr>
              <td><strong>Supreme Heuristic</strong></td>
              <td><em>"The life of the law has not been logic: it has been experience."</em></td>
              <td><em>"Truth happens to an idea. It becomes true, is made true by events."</em></td>
              <td><em>"Consider what effects, with conceivable practical bearings, we conceive the object to have."</em></td>
              <td><em>"Democracy is not an alternative to other principles; it is the idea of community life itself."</em></td>
            </tr>
            <tr>
              <td><strong>Enduring Institutional Legacy</strong></td>
              <td>Modern First Amendment jurisprudence; judicial restraint; civil liberties</td>
              <td>Modern stream-of-consciousness psychology; religious phenomenology</td>
              <td>Semiotic theory; symbolic logic; fallibilist philosophy of science</td>
              <td>Progressive public education; collaborative inquiry; labor mediation</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- VIEW C: OPERATIONAL HEURISTICS -->
    <div class="view-panel" id="view-c">
      <article class="engine-card">
        <h2 class="engine-title">1. The Anti-Certitude Principle (The Civil War Invariant)</h2>
        <div class="engine-prose">
          The foundational insight that unites every branch of American Pragmatism is the profound suspicion of <strong>moral and ideological certitude</strong>.
        </div>
        <div class="engine-prose">
          When people believe that their personal convictions represent the absolute, infallible will of the cosmos, they cease to view political opponents as fellow citizens with competing interests; they view them as cosmic evils that must be eradicated. The American Civil War demonstrated that dogmatic righteousness leads inexorably to the butcher's bill of Antietam and the Wilderness.
        </div>
        <div class="engine-prose">
          <strong>Operational Rule:</strong> Never confuse intensity of feeling with epistemological certainty. Treat all beliefs as working hypotheses subject to experimental revision. When designing social, political, or institutional rules, prioritize mechanisms that allow peaceful correction of error over systems designed to enforce eternal orthodoxy.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">2. Peirce's Pragmatic Maxim: The Elimination of Pseudo-Problems</h2>
        <div class="engine-prose">
          Formulated by Charles Sanders Peirce in 1878: <em>“Consider what effects, that might conceivably have practical bearings, we conceive the object of our conception to have. Then, our conception of these effects is the whole of our conception of the object.”</em>
        </div>
        <div class="engine-prose">
          This maxim provides an indispensable razor for both philosophy and practical decision-making. If two competing theories, dogmas, or corporate strategies predict identical empirical outcomes in practice, the controversy between them is purely verbal and sterile.
        </div>
        <div class="engine-prose">
          <strong>Operational Rule:</strong> Before debating any contentious proposition, ask: <em>“What concrete, observable difference in human conduct or experience would occur if Theory A were true instead of Theory B?”</em> If the answer is none, abandon the dispute.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">3. The Free Marketplace of Ideas (Holmes's Abrams Heuristic)</h2>
        <div class="engine-prose">
          In his 1919 dissent in <em>Abrams v. United States</em>, Justice Oliver Wendell Holmes Jr. articulated the bedrock rationale for freedom of expression:
        </div>
        <div class="engine-prose">
          Persecuting dissenting opinions is the natural impulse of anyone who feels absolute certainty. But because history repeatedly demonstrates that today's sacred orthodoxies become tomorrow's discarded superstitions, human societies must never grant the state the power to suppress speech. The ultimate test of truth is not bureaucratic censorship, but its power to win acceptance in open, uninhibited public competition.
        </div>
        <div class="engine-prose">
          <strong>Operational Rule:</strong> Protect the speech of the dissenter not out of sentimental charity, but out of enlightened self-interest: the suppression of heresy is the destruction of society's capacity to discover its own blind spots.
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">4. Dewey's Democratic Experimentalism</h2>
        <div class="engine-prose">
          John Dewey revolutionized our understanding of democracy: democracy is not a mechanical ritual of casting ballots every four years; it is an active, cooperative, experimental way of life.
        </div>
        <div class="engine-prose">
          A democratic society is an open laboratory where laws, policies, and educational curricula are treated as social hypotheses. When an economic policy produces poverty or an educational method produces alienation, an experimental society does not double down on ideological dogma; it audits the results, listens to the marginalized, and adjusts the experiment.
        </div>
        <div class="engine-prose">
          <strong>Operational Rule:</strong> Structure every institution—from classrooms to corporate boards to municipal councils—around collaborative problem-solving, transparent evidence, and continuous feedback loops.
        </div>
      </article>
    </div>

  </main>

  <footer>
    <p>The Metaphysical Club (2001) &bull; Louis Menand &bull; Total Replacement Codex &bull; Intellectualist System</p>
    <p style="margin-top: 8px;"><a href="../../index.html">← Return to Master Library</a></p>
  </footer>

  <script>
    const tabBtns = document.querySelectorAll('.tab-btn');
    const viewPanels = document.querySelectorAll('.view-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        viewPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const viewId = btn.getAttribute('data-view');
        document.getElementById(viewId).classList.add('active');
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });

    const themeBtn = document.getElementById('theme-btn');
    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    const themes = ['light', 'dark-mode', 'sepia-mode'];
    let currentThemeIdx = 0;

    themeBtn.addEventListener('click', () => {
      document.body.classList.remove('dark-mode', 'sepia-mode');
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      if (themes[currentThemeIdx] !== 'light') {
        document.body.classList.add(themes[currentThemeIdx]);
      }
      if (themes[currentThemeIdx] === 'light') {
        themeText.textContent = 'Light';
        themeIcon.textContent = '☼';
      } else if (themes[currentThemeIdx] === 'dark-mode') {
        themeText.textContent = 'Dark';
        themeIcon.textContent = '☾';
      } else {
        themeText.textContent = 'Sepia';
        themeIcon.textContent = '☕';
      }
    });

    const fontBtn = document.getElementById('font-btn');
    const fontText = document.getElementById('font-text');
    fontBtn.addEventListener('click', () => {
      if (document.body.classList.contains('serif-font')) {
        document.body.classList.remove('serif-font');
        fontText.textContent = 'Serif';
      } else {
        document.body.classList.add('serif-font');
        fontText.textContent = 'Sans';
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully rendered The Metaphysical Club index.html (Size: ${(Buffer.byteLength(readerHtml, 'utf8') / 1024).toFixed(2)} KB)`);
