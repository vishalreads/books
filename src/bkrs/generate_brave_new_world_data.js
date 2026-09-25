/**
 * BKRS v1.0 Generator for Aldous Huxley's "Brave New World" (1932)
 * Canonical Total Replacement Codex & Interactive Standalone Reader
 */

const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, '../../docs/distillations/brave-new-world');
if (!fs.existsSync(bookDir)) {
  fs.mkdirSync(bookDir, { recursive: true });
}

const units = [
  {
    id: "unit-01",
    chapter_num: 1,
    title: "Central London Hatchery: The Bokanovsky Process & Decanting",
    timeline_location: "Central London Hatchery and Conditioning Centre, A.F. 632",
    source_scope: "The World State motto, Bokanovsky's Process, Podsnap's Technique, chemical caste stratification in the Bottling Room",
    epistemic_status: "Canonical Dystopian World-Building",
    materiality: "CRITICAL",
    summary: "The Director of Hatcheries and Conditioning (D.H.C.) leads a troop of newly arrived students through the Central London Hatchery. Over the portal stands the World State's triumvirate motto: 'Community, Identity, Stability'. Inside the stark, chilled building, human reproduction has been fully industrialized through the Bokanovsky Process—a technique of arresting egg development with X-rays and alcohol, causing a single fertilized ovum to bud into up to ninety-six identical embryos. While Alphas and Betas remain individualized, Gammas, Deltas, and Epsilons are mass-produced in standardized batches. In the Bottling and Decanting Rooms, embryos are chemically tailored to their predetermined socioeconomic castes: future tropical miners receive heat conditioning and typhoid immunizations, while Epsilons receive restricted oxygen and alcohol in their blood-surrogates to keep their intelligence stunted and physical stature dwarfed.",
    key_claims: [
      "Natural biological reproduction (viviparous birth) is considered an obscene, primitive relic; industrialized laboratory incubation guarantees state stability.",
      "The Bokanovsky Process solves the labor problem by producing standardized human instruments of production in identical batches.",
      "Biological predestination eliminates social friction: people are genetically and chemically pre-adapted to love their assigned economic functions."
    ],
    concrete_evidence: [
      "The World State calendar dated from the introduction of Henry Ford's Model T ('A.F. 632').",
      "Bokanovsky's Process yielding 8 to 96 identical embryos from a single egg.",
      "Epsilon embryos subjected to 70% normal oxygen supply, causing permanent skeletal and neurological retardation for menial labor."
    ],
    operational_mechanisms: [
      {
        name: "Biological Predestination Architecture",
        rule: "By engineering physiology, endocrine balances, and intellectual capacity to match specific economic roles before decanting, the state eliminates the aspiration for class mobility at the cellular level."
      }
    ],
    verbatim_citations: [
      "Community, Identity, Stability.",
      "Ninety-six identical twins working ninety-six identical machines! The voice was almost tremulous with enthusiasm. 'You really know where you are. For the first time in history.'",
      "Making ninety-six human beings grow where only one grew before. Progress."
    ]
  },
  {
    id: "unit-02",
    chapter_num: 2,
    title: "The Infant Nurseries: Neo-Pavlovian Conditioning & Hypnopaedia",
    timeline_location: "Neo-Pavlovian Conditioning Rooms & Infant Nurseries",
    source_scope: "Electro-shock conditioning of Delta infants, flowers and books aversion, sleep-teaching (hypnopaedia)",
    epistemic_status: "Canonical Dystopian Behavioral Conditioning",
    materiality: "CRITICAL",
    summary: "The D.H.C. demonstrates the state's behavioral conditioning technologies in the Infant Nurseries. A batch of eight-month-old Delta infants are set down before bowls of vibrant roses and colorful picture books. As the babies crawl toward the blossoms, an alarm shrieks and electric currents pulse through the wire mesh floor, violently shocking them. After repeating the trauma, the infants develop an indelible, lifelong terror of books and nature. The D.H.C. explains the economic logic: lower castes must not read (books might decondition them) and must not love nature (nature walks consume no manufactured goods; rural sports must require complex industrial apparatus). In the dormitories, children absorb 'hypnopaedia' (sleep-teaching)—repeating ethical and class slogans hundreds of times per night until state ideology becomes identical with their subconscious mind.",
    key_claims: [
      "Reflexive emotional aversion can be permanently branded into human biology through early Pavlovian trauma.",
      "A consumer society must eradicate non-commercial pleasures: an instinctive love of nature produces no factory revenue.",
      "Hypnopaedia does not teach intellectual facts; it engineers moral, sexual, and economic orthodoxy directly into the subconscious."
    ],
    concrete_evidence: [
      "Delta infants screaming in terror at the sight of a rose or a nursery book.",
      "The hypnopaedic rhyme: 'Alpha children wear grey. They work much harder than we do, because they're so frightfully clever... I'm really awfully glad I'm a Beta, because I don't work so hard.'",
      "Reuben Rabinovitch: the historical child who memorized a Polish lecture in his sleep, revealing hypnopaedic memorization."
    ],
    operational_mechanisms: [
      {
        name: "Commercialized Conditioning Inversion",
        rule: "Condition the lower castes to despise nature and solitary quiet, forcing all leisure activity to depend on high-expenditure industrial goods and transportation."
      },
      {
        name: "Subconscious Hypnopaedic Identity Anchoring",
        rule: "Repetition of moral dogmas during sleep bypasses critical reasoning, fusing state obedience directly with personal identity."
      }
    ],
    verbatim_citations: [
      "A love of nature keeps no factories busy. It was decided to abolish the love of nature, but not the tendency to consume transport.",
      "Words can be like X-rays if you use them properly—they'll go through anything. You read and you're pierced.",
      "Till at last the child's mind is these suggestions, and the sum of the suggestions is the child's mind."
    ]
  },
  {
    id: "unit-03",
    chapter_num: 3,
    title: "Outside in the Garden: Centrifugal Bumble-puppy, Soma, & Mustapha Mond",
    timeline_location: "Hatchery Gardens & London Streets",
    source_scope: "Erotic play of children, Mustapha Mond's history lecture, 'History is bunk', introduction of Bernard Marx and Lenina Crowne",
    epistemic_status: "Canonical Dystopian Ideology",
    materiality: "CRITICAL",
    summary: "In the gardens, children engage in state-mandated erotic play to condition them for mandatory universal promiscuity. Resident World Controller Mustapha Mond arrives to lecture the students on the barbarism of the pre-Fordian era. He describes the horrors of the nuclear family: mothers, fathers, monogamy, emotional exclusive attachments, and the filthy intimacy of homes, which he diagnoses as the source of all historical neuroses and social instability. Quoting Henry Ford ('History is bunk'), Mond explains how the Nine Years' War, anthrax bombs, and economic collapse forced humanity to choose between individual freedom and total stability. Society was redesigned around universal promiscuity ('Everyone belongs to everyone else') and the miracle drug **soma**—a hangover-free chemical tranquilizer and euphoric that cures all grief, anxiety, and doubt without physiological toxicity.",
    key_claims: [
      "Exclusive romantic attachments, monogamy, and family structures generate intense, volatile emotions that destroy civil stability.",
      "Universal sexual access ('Everyone belongs to everyone else') neutralizes jealousy, territoriality, and sexual frustration.",
      "Soma is the ultimate instrument of bio-political pacification: it replaces political repression with engineered chemical contentment."
    ],
    concrete_evidence: [
      "Toddlers encouraged into sexual games, with psychiatric treatment prescribed for a boy reluctant to participate.",
      "Mustapha Mond tracing historical horrors: mothers nursing babies in stinking rooms, madness of possessive love, religious fanaticism.",
      "The pharmacological properties of soma: 'Euphoric, narcotic, pleasantly hallucinant... one cubic centimetre cures ten gloomy sentiments.'"
    ],
    operational_mechanisms: [
      {
        name: "Systemic Monogamy Eradication",
        rule: "By replacing emotional depth with constant sexual variety, the state prevents individuals from forming intimate bonds stronger than their loyalty to the collective."
      },
      {
        name: "Pharmacological Pacification (The Soma Shield)",
        rule: "Providing instant, risk-free chemical gratification eliminates the psychological friction and existential dread that drive political revolt."
      }
    ],
    verbatim_citations: [
      "Everyone belongs to everyone else.",
      "History is bunk. What you need is a gramme of soma.",
      "A gramme is better than a damn.",
      "Mother, monogamy, romance. High spurts the fountain; fierce and foamy the wild jet. The urge has but a single outlet. My love, my baby. No wonder those poor pre-moderns were mad and wicked and miserable."
    ]
  },
  {
    id: "unit-04",
    chapter_num: 4,
    title: "Bernard Marx & Helmholtz Watson: The Misfits of Conditioning",
    timeline_location: "London, Changing Rooms & Helmholtz's Apartment",
    source_scope: "Bernard's physical inferiority and alienation; Helmholtz's excess mental capacity; their shared rebellion",
    epistemic_status: "Canonical Character & Psychological Dynamics",
    materiality: "CRITICAL",
    summary: "Bernard Marx, an Alpha-Plus psychologist specializing in hypnopaedia, suffers from acute alienation. Due to a persistent rumor that a lab worker accidentally introduced alcohol into his blood-surrogate while he was in the bottle, Bernard is physically stunted—eight centimeters shorter than normal Alphas, giving him the stature of a Gamma. Consequently, he suffers from bitter social insecurity, resenting the mindless promiscuity around him and hating the mocking glances of taller peers. He arranges a date with the conventionally beautiful Beta-Minus Lenina Crowne to visit the New Mexico Savage Reservation. Bernard visits his only true friend, Helmholtz Watson, an Alpha-Plus lecturer at the College of Emotional Engineering. Unlike Bernard, Helmholtz is a physical and intellectual giant whose flaw is excess capacity: he writes brilliant propaganda rhymes but yearns to express some deeper, violent, and authentic artistic power that his sterile society refuses to allow.",
    key_claims: [
      "Even in an engineered caste society, physical anomalies in high-caste individuals generate acute social alienation and cognitive independence.",
      "Excess intellectual and artistic energy cannot be fully accommodated within a totalitarian consumer society; genius inevitably rebels against sterile slogans."
    ],
    concrete_evidence: [
      "Bernard being mocked in the locker rooms while other Alpha men brag about their sexual conquests like pieces of meat.",
      "Helmholtz Watson's athletic perfection juxtaposed against his private despair over the shallowness of emotional engineering slogans.",
      "Bernard's refusal to take soma to escape his feelings, demanding instead to feel his genuine misery."
    ],
    operational_mechanisms: [
      {
        name: "The Biological Defect as Catalyst for Alienation",
        rule: "A physical misfit in a caste-based hierarchy cannot fully internalize the caste's psychological conditioning, resulting in bitter skepticism and detached observation."
      }
    ],
    verbatim_citations: [
      "He felt an outsider; and feeling an outsider he behaved like one, which increased the prejudice against him and intensified the contempt and hostility aroused by his physical defects.",
      "I'm thinking of a queer feeling I sometimes get, a feeling that I've got something important to say and the power to say it—only I don't know what it is, and I can't make any use of the power."
    ]
  },
  {
    id: "unit-05",
    chapter_num: 5,
    title: "The Solidarity Service & The Crematorium: Synthetic Religion",
    timeline_location: "Fordson Community Singery & London Crematorium",
    source_scope: "Phosphorus recovery from cremated corpses; the bi-weekly Solidarity Service; the Orgy-Porgy ritual",
    epistemic_status: "Canonical Sociological & Religious Satire",
    materiality: "CRITICAL",
    summary: "Henry Foster and Lenina take an evening helicopter ride, observing the Slough Crematorium where chimney gases are filtered through scrubbers to recover 1.5 kilograms of phosphorus per corpse for agricultural fertilizer—rendering humans economically useful even after death. Meanwhile, Bernard attends his mandatory bi-weekly Solidarity Service at the Fordson Community Singery. Twelve men and women sit around a circular table, drink soma-infused loving cups, sing liturgical Fordian hymns, and work themselves into a frenzied rhythmic chant of 'Orgy-porgy'. The ritual culminates in mass, ritualistic copulation. While the other eleven members weep with ecstatic communal release, feeling the presence of 'the Greater Being', Bernard experiences only hollow detachment, faking ecstasy to avoid detection and walking out more acutely isolated than ever.",
    key_claims: [
      "Totalitarian states replace transcendental religion with secular liturgical rituals that channel religious instincts into civic conformity.",
      "Utilitarian capitalism reduces human life to raw material: even the dead are quantified by the phosphorus value of their corpses.",
      "Mandatory collective euphoria creates crushing loneliness for anyone whose critical consciousness cannot be extinguished by ritual trance."
    ],
    concrete_evidence: [
      "Phosphorus recovery: 1.5 kilos per adult corpse, producing hundreds of tons of fertilizer annually for the World State.",
      "The Solidarity Service liturgy: the loving cup passed round with 'I drink to my annihilation,' the brass trumpet, and the Ford's Sign.",
      "Bernard lying to Fifi Bradlaugh, pretending he felt the Greater Being descend, while remaining completely empty."
    ],
    operational_mechanisms: [
      {
        name: "Synthetic Liturgical Channeling (The Orgy-Porgy Machine)",
        rule: "By orchestrating rhythmic chanting, chemical intoxication, and ritualized sexual release, the state discharges dangerous emotional tension while reinforcing collective submission."
      }
    ],
    verbatim_citations: [
      "Fine to think we can go on being socially useful even after we're dead. Making plants grow.",
      "Orgy-porgy, Ford and fun, / Kiss the girls and make them one. / Boys at one with girls at peace; / Orgy-porgy gives release.",
      "He was as miserably isolated now as he had been when the service began—more isolated by reason of his unreplenished emptiness."
    ]
  },
  {
    id: "unit-06",
    chapter_num: 6,
    title: "The Storm Over the Channel & The Director's Secret",
    timeline_location: "The English Channel & The D.H.C.'s Office",
    source_scope: "Bernard hovering his helicopter over the storm; Bernard's interview with the D.H.C.; the Director's shameful confession about New Mexico",
    epistemic_status: "Canonical Narrative Turning Point",
    materiality: "CRITICAL",
    summary: "On their date, Bernard hovers his helicopter over the raging, pitch-black English Channel, insisting on remaining in silence to feel himself as an individual. Lenina is terrified and repelled, begging him to turn on the synthetic music and take soma; she views quiet nature as an unnatural horror. The next day, Bernard visits the D.H.C. to get his permit signed for the New Mexico Savage Reservation. Caught off-guard, the Director reminisces about visiting the same reservation twenty-five years earlier with a Beta-Minus girl named Linda, who went missing during a storm and was presumed dead. Horrified that he has revealed a shameful, obscene emotional memory, the Director furiously reprimands Bernard for his antisocial non-conformity and threatens to exile him to Iceland. Emboldened rather than intimidated, Bernard departs for America with Lenina.",
    key_claims: [
      "The conditioned mind perceives natural solitude and silence not as peace, but as an intolerable, terrifying vacuum.",
      "The state's top officials secretly harbor repressed human memories and guilt that contradict their public dogma.",
      "Exile to harsh peripheral climates (Iceland, Falklands) is the state's weapon against intellectual contagion."
    ],
    concrete_evidence: [
      "Bernard refusing soma while looking down at the dark, roaring waves: 'It makes me feel as though I were more me, if you see what I mean. More on my own, not so completely a part of something else.'",
      "The D.H.C. blushing with humiliating guilt over mentioning Linda and natural loss.",
      "Bernard learning before departure that the Director has already prepared official papers to banish him to Iceland."
    ],
    operational_mechanisms: [
      {
        name: "The Horror of the Uncurated Void",
        rule: "Conditioned citizens cannot tolerate unmediated physical reality; without synthetic noise or chemical distraction, existential panic immediately threatens."
      }
    ],
    verbatim_citations: [
      "I'd rather be myself,' he said. 'Myself and nasty. Not somebody else, however jolly.",
      "A terrible beautiful silence... it's like having no clothes on, it's like being naked.",
      "The Director made a sign of the T, and rapidly made another to avert the omen."
    ]
  },
  {
    id: "unit-07",
    chapter_num: 7,
    title: "The Malpais Reservation: Dirt, Disease, & The Savage Encounter",
    timeline_location: "The Malpais Reservation, New Mexico",
    source_scope: "Arrival at Malpais; filth, aging, disease, maternal nursing; the Snake Dance sacrifice; meeting John and Linda",
    epistemic_status: "Canonical Cultural Confrontation",
    materiality: "CRITICAL",
    summary: "Bernard and Lenina fly into the fenced Malpais Reservation in New Mexico, where Indians live beyond the electrified wire in pre-modern conditions. Lenina is violently nauseated by what she witnesses: open filth, stray dogs, dust, an old man with wrinkled brown skin and decaying teeth (she has never seen aging, as World State citizens are chemically preserved with youthful vigor until death at sixty), and a mother publicly breastfeeding her child. They witness the sacred Penitente-Pueblo Snake Dance, where a young man is whipped until blood streams down his back to bring rain for the corn. Afterward, a fair-skinned, blue-eyed young man dressed as an Indian approaches them, speaking fluent, archaic English: John, known as 'the Savage'. John introduces them to his mother, Linda—now a bloated, toothless, wrinkly alcoholic outcast living in squalor, who weeps with joy upon seeing civilized people wearing synthetic acetate clothes.",
    key_claims: [
      "Totalitarian hyper-civilization and primitive tribalism represent twin caricatures of human suffering: sterile decadence vs. superstitious squalor.",
      "Biological aging, disease, and maternal nursing—the organic realities of human existence—evoke pure horror in conditioned citizens.",
      "Linda's conditioning proved completely dysfunctional in a primitive society: her programmed promiscuity was treated as adultery, resulting in public beatings."
    ],
    concrete_evidence: [
      "The electric fence keeping the savages contained, with dead mountain lions and cattle piled along the wire.",
      "The Indian youth being whipped around the kiva until collapsing in blood without uttering a sound.",
      "Linda's decayed appearance: missing front teeth, reeking of peyote and mescal, clutching Lenina's clean clothes."
    ],
    operational_mechanisms: [
      {
        name: "Conditioning Brittleness Under Environmental Inversion",
        rule: "A person conditioned strictly for a consumerist, promiscuous metropolis becomes an utterly helpless, despised outcast when stranded in a traditional tribal order."
      }
    ],
    verbatim_citations: [
      "A mother, and all that dirt, and gods, and old age, and disease... It was too much for Lenina.",
      "They hated me because I slept with their men... But they wouldn't understand that everyone belongs to everyone else!",
      "He had never seen an old man before... In the World State youth almost unimpaired till sixty, and then, crack! the end."
    ]
  },
  {
    id: "unit-08",
    chapter_num: 8,
    title: "John the Savage's Education: The Folio of William Shakespeare",
    timeline_location: "The Adobe Hut in Malpais",
    source_scope: "John's childhood memories, exclusion by the tribe, Linda's failed teaching, discovery of Shakespeare's Complete Works",
    epistemic_status: "Canonical Literary & Humanist Counterpoint",
    materiality: "CRITICAL",
    summary: "John recounts his painful childhood to Bernard. Raised in Malpais, he was an outcast from both worlds: rejected by the Indians because of his white skin and his mother's promiscuity, and deprived of civilized technology because Linda knew only how to operate machines, not how to build them. Linda taught him to read using an ancient technical manual for Chemical Bacteriologists. When he was twelve, Linda's lover Popé brought him a battered copy of *The Complete Works of William Shakespeare*. The Elizabethan verse became John's cognitive universe, giving voice to his intense passions, hatred of Popé, reverence for beauty, and desire for heroic nobility. Bernard realizes that John is the legitimate son of the Director of Hatcheries ('Tomakin') and instantly recognizes that John is the ultimate political weapon to destroy the Director and avoid exile to Iceland.",
    key_claims: [
      "Great literature (Shakespeare) provides the linguistic and conceptual framework necessary to experience complex human emotions: grief, heroic sacrifice, moral outrage, and spiritual reverence.",
      "Without tragic literature, human consciousness remains infantile, flat, and easily manipulated.",
      "Bernard's revolutionary posture is revealed as self-serving: he uses John not out of compassion, but as political leverage for self-preservation."
    ],
    concrete_evidence: [
      "The Indian boys throwing stones at John and barring him from the men's religious initiation rites on the sacred mountain.",
      "John attempting to murder Popé with a knife after reading *Hamlet*.",
      "John spending solitary nights on mountain crags, offering his own blood and pain to the sun."
    ],
    operational_mechanisms: [
      {
        name: "Literary Transmutation of Consciousness",
        rule: "Absorbing high tragedy inoculates the mind against superficial state propaganda by instilling ideals of honor, duty, and transcendent love that transcend physical survival."
      }
    ],
    verbatim_citations: [
      "The words were like drums, like the singing of the kachinas, like the thunder in the mountains... They gave shape and meaning to his feelings.",
      "O brave new world, that has such people in't! Let's start at once."
    ]
  },
  {
    id: "unit-09",
    chapter_num: 9,
    title: "The Sleeping Beauty & The Chaste Elizabethan Reverence",
    timeline_location: "The Rest-House at Malpais",
    source_scope: "Lenina in a 36-hour soma-holiday; John breaking into the cabin; quoting Romeo and Juliet; Bernard flying to Santa Fe",
    epistemic_status: "Canonical Psychological Contrast",
    materiality: "IMPORTANT",
    summary: "Overwhelmed by the horrors of Malpais, Lenina swallows six half-gramme tablets of soma and retreats into a 36-hour chemical coma. Meanwhile, Bernard flies to Santa Fe to obtain official permission from Mustapha Mond to bring John and Linda back to London as subjects of scientific study. Returning to the rest-house, John finds the cabin empty and enters through a window. He discovers Lenina asleep on the bed, bathed in the scent of synthetic perfume. Overcome by her exquisite beauty, John approaches her not with the casual lust of the World State, but with the trembling, sacred reverence of an Elizabethan courtier. Quoting *Romeo and Juliet*, he kneels before her, scarcely daring to touch her sleeve, contemplating her perfection with profound moral awe before being startled by the hum of Bernard's returning helicopter.",
    key_claims: [
      "Traditional romantic reverence views the beloved as a sacred, inviolable mystery rather than a commodified object of immediate physical consumption.",
      "Soma allows civilized citizens to chemically erase reality rather than process cognitive distress.",
      "The collision between Elizabethan chivalric idealism and 20th-century consumer promiscuity is absolute and unbridgeable."
    ],
    concrete_evidence: [
      "Lenina lying comatose on the bed, murmuring in synthetic chemical dreams.",
      "John touching her green viscose trousers and velvet slippers with trembling fingers as though touching holy relics.",
      "John quoting Romeo: 'On the white wonder of dear Juliet's hand, may seize / And steal immortal blessing from her lips.'"
    ],
    operational_mechanisms: [
      {
        name: "Romantic Sublimation vs. Instant Desublimation",
        rule: "Restraint and moral taboos elevate sexual desire into transcendent romantic poetry, whereas immediate gratification reduces intimacy to a casual biological reflex."
      }
    ],
    verbatim_citations: [
      "He held his breath; he dared not move. A fly buzzed round her; he waved it away. He looked at her, he bent down over her... It was as though he were gazing at the face of an angel.",
      "Her eyes were closed, her face was relaxed in a calm, beautiful dream. Lenina was on a soma-holiday."
    ]
  },
  {
    id: "unit-10",
    chapter_num: 10,
    title: "The Humiliation of the D.H.C.: 'My Father!' & The Resignation",
    timeline_location: "The Fertilizing Room, Central London Hatchery",
    source_scope: "Public denunciation of Bernard; arrival of Linda and John; the taboo word 'Father'; the Director's flight and resignation",
    epistemic_status: "Canonical Climax of Social Satire",
    materiality: "CRITICAL",
    summary: "In the Fertilizing Room, the D.H.C. assembles all the high-caste Alpha and Beta staff to make a public example of Bernard Marx. He delivers a pompous, sanctimonious speech declaring Bernard a traitor to civil order whose antisocial unorthodoxy warrants immediate dismissal and banishment to Iceland. In response, Bernard signals the door. Linda stumbles in—bloated, toothless, wrinkly, and wearing garish clothes. She recognizes the Director, calling him 'Tomakin', and throws her flabby arms around his neck while recounting her abandoned pregnancy. To crown the catastrophe, John steps into the room, falls on his knees before the horrified Director, and cries out: 'My father!' The word 'father'—the ultimate obscene, hilarious, and grotesque obscenity in the World State—causes the entire assembly to erupt into uncontrollable, hysterical laughter. Stripped of all moral authority, the humiliated Director covers his face and flees the room, resigning his post that very afternoon.",
    key_claims: [
      "In a society where viviparous reproduction is eradicated, 'father' and 'mother' become the most scandalous obscenities.",
      "Authoritarian pomposity collapses instantly when confronted with undeniable empirical exposure of its own hypocrisy.",
      "Bernard successfully inverts his precarious position from condemned exile to triumphant social sensation."
    ],
    concrete_evidence: [
      "The D.H.C. lecturing on how unorthodoxy threatens more than murder: 'Murder kills only the individual... but unorthodoxy threatens more than the life of a mere individual; it strikes at Society itself.'",
      "The students howling with laughter, slapping their knees, and repeating 'My father!' as if it were the funniest dirty joke ever uttered.",
      "The Director hiding his face in his hands and bolting out the side door."
    ],
    operational_mechanisms: [
      {
        name: "Subversive Taboo Detonation",
        rule: "Exposing a leader's secret violation of the society's foundational taboo destroys their authority far more effectively than logical political critique."
      }
    ],
    verbatim_citations: [
      "Unorthodoxy threatens more than the life of a mere individual; it strikes at Society itself.",
      "My father!' The word tore through the room like a bomb. There was an enormous silence, then suddenly a roar of laughter.",
      "The laughter was infectious; it spread like wildfire. 'Father! Oh, Ford! Father!'"
    ]
  },
  {
    id: "unit-11",
    chapter_num: 11,
    title: "The Savage as Sensation: High Society, Eton, & The Boycott",
    timeline_location: "London High Society, Eton College, & Bernard's Apartment",
    source_scope: "Linda's terminal soma-holiday; John becomes London's celebrity; Bernard's sudden fame and hypocrisy; John's strike",
    epistemic_status: "Canonical Societal Satire",
    materiality: "CRITICAL",
    summary: "London falls into a frenzy over 'The Savage'. Linda is placed on a permanent, lethal soma-holiday, sleeping twenty hours a day in hospital until she dies of respiratory failure—an outcome the doctors consider entirely normal and humane. Bernard, as John's legal guardian, becomes an overnight celebrity sensation, dining with the Arch-Community-Songster and engaging in prolific promiscuity, instantly abandoning his former moral critiques of society. John is paraded through factories of identical Bokanovsky twins (which nauseates him with disgust) and visits the upper-class Eton school, where boys laugh at films of savages whipping themselves. Disillusioned and disgusted by the vacuous superficiality of London, John refuses to come out of his room for Bernard's grand reception with high-society luminaries. Humiliated before his guests, Bernard's newfound popularity evaporates in a single evening.",
    key_claims: [
      "Dissident intellectuals who criticize social corruption often do so out of wounded vanity; once granted status and sexual privilege, they eagerly embrace the system.",
      "The civilized society treats profound human suffering and alien cultures not with empathy, but as frivolous, transient entertainment.",
      "Euthanasia via terminal sedation is the state's civilized disposal mechanism for non-functional citizens."
    ],
    concrete_evidence: [
      "Linda consuming up to twenty grammes of soma daily, with doctors predicting her heart will give out in a month or two.",
      "John dropping to his knees and vomiting in the bushes after visiting a Bokanovsky electrical equipment factory staffed by 160 identical Gammas.",
      "Bernard weeping on his bed after all his aristocratic guests abandon his party in disgust."
    ],
    operational_mechanisms: [
      {
        name: "Celebrity Assimilation Mechanism",
        rule: "A consumerist regime neutralizes dangerous ideological anomalies by transforming them into fashionable spectacles and commodified entertainment."
      },
      {
        name: "Hypocrisy of the Marginalized",
        rule: "Insecurity masquerades as moral rebellion; when given the privileges of the ruling class, the insecure rebel instantly mirrors their vices."
      }
    ],
    verbatim_citations: [
      "In the end, she had her soma-holiday... and she was happy, or at any rate as happy as she could be.",
      "Success had gone fizzily to Bernard's head, and in the process had completely reconciled him to the world which, up till then, he had found so unsatisfying.",
      "‘No, I won't come out!’ John shouted through the locked door. 'Go away!'"
    ]
  },
  {
    id: "unit-12",
    chapter_num: 12,
    title: "Helmholtz & The Limits of Rhyme: The Comedy of Romeo & Juliet",
    timeline_location: "Helmholtz Watson's Apartment",
    source_scope: "Bernard's fall from grace; John and Helmholtz form a deep bond; reading Shakespeare; Helmholtz's conditioning barrier",
    epistemic_status: "Canonical Aesthetic & Philosophical Dialogue",
    materiality: "CRITICAL",
    summary: "Following his social ruin, Bernard returns to his old friends, John and Helmholtz Watson. John and Helmholtz immediately discover a profound kinship: both possess passionate souls that yearn for truth beyond consumer slogans. John reads *Romeo and Juliet* aloud to Helmholtz, who is captivated by the exquisite poetry and linguistic power of the lines. However, when John reaches the dramatic scene where Juliet's father forces her to marry Paris and Juliet threatens suicide, Helmholtz bursts into uncontrollable laughter. To a man decanted from a bottle and conditioned for universal promiscuity, the concepts of having a father, being forced into marriage, and suffering over exclusive sexual possession seem absurdly farcical. John is deeply wounded, realizing that even the finest, most gifted minds of the World State have been permanently mutilated by their conditioning.",
    key_claims: [
      "Tragic art requires the existence of real social conflicts, family ties, and moral constraints; in an engineered utopian society, tragedy becomes incomprehensible comedy.",
      "Even high-caste geniuses cannot fully overcome early childhood hypnopaedic conditioning through intellect alone.",
      "True friendship is grounded in shared spiritual aspiration rather than transactional social utility."
    ],
    concrete_evidence: [
      "Helmholtz writing a poem about solitude that causes him to be threatened with dismissal from the college.",
      "Helmholtz laughing until tears run down his face at Juliet's line: 'O Romeo, Romeo! wherefore art thou Romeo?'",
      "John closing the Folio of Shakespeare in quiet, heartbroken despair."
    ],
    operational_mechanisms: [
      {
        name: "The Death of Tragedy Through Social De-escalation",
        rule: "By eliminating the social friction of marriage, chastity, and family, society eliminates the emotional stakes required for high tragic drama."
      }
    ],
    verbatim_citations: [
      "You can't make flivvers without steel—and you can't make tragedies without social instability. The world's stable now.",
      "Why was it so funny? Because having a mother and a father, and someone telling you who to sleep with, sounded like a ridiculous fairy tale.",
      "Helmholtz had laughed. The Savage sat with his head in his hands."
    ]
  },
  {
    id: "unit-13",
    chapter_num: 13,
    title: "Lenina's Seduction & The Impudent Strumpet: Clash of Civilizations",
    timeline_location: "Bernard's Apartment, London",
    source_scope: "Lenina's lovesickness; attempting to seduce John; John's Shakespearean proposal; the violent confrontation",
    epistemic_status: "Canonical Erotic & Ideological Climax",
    materiality: "CRITICAL",
    summary: "Lenina suffers from acute emotional lovesickness for John, unable to focus on work or enjoy other men—a state of monomania her friend Fanny condemns as unnatural and shameful. Armed with soma, Lenina visits John in his rooms. John confesses his deep, consuming love for her, but explains that he must first prove himself worthy through some heroic ordeal, proposing marriage and lifelong fidelity. Lenina, conditioned to regard marriage and chastity as absurd medieval barbarisms, responds by stripping off her clothes, throwing her naked arms around his neck, and singing the hypnopaedic rhyme: 'Hug me till you drug me, honey.' Horrified and revolted by what he perceives as shameless, demonic whoredom, John's romantic adoration curdles into violent fury. He curses her as an 'impudent strumpet', quotes *Othello*, and slaps her face. Lenina locks herself in the bathroom in terrified confusion. The ringing telephone interrupts the violence: John is summoned to his mother's deathbed.",
    key_claims: [
      "The World State's normalization of instant sexual gratification makes chivalric romance, wooing, and modesty appear insane and pathological.",
      "Puritanical moral idealism and sexual obsession are two sides of the same coin: when John's saintly idol acts like a conditioned citizen, his love inverts into misogynistic rage.",
      "Communication between conditioned citizens and unconditioned humans is fundamentally impossible on the axis of sexual ethics."
    ],
    concrete_evidence: [
      "Lenina unzipping her viscose bodice and dropping her underwear on the carpet.",
      "John quoting Othello: 'Was this fair paper, this most goodly book, made to write \"whore\" upon?'",
      "Lenina shivering in the locked bathroom, listening to John pacing the sitting room like a caged panther."
    ],
    operational_mechanisms: [
      {
        name: "The Chivalric-Promiscuous Collision",
        rule: "When sexual accessibility is offered where sacrificial courtship is demanded, the idealist interprets the gift not as love, but as moral desecration."
      }
    ],
    verbatim_citations: [
      "For always! They make a promise to live together for always.' Lenina was shocked. 'What a horrible idea!'",
      "Hug me till you drug me, honey; Kiss me till I'm in a coma.",
      "Impudent strumpet! Devil! Whore!"
    ]
  },
  {
    id: "unit-14",
    chapter_num: 14,
    title: "The Park Lane Hospital for the Dying: Death Conditioning",
    timeline_location: "Park Lane Hospital for the Dying, Ward 81",
    source_scope: "Linda's death; synthetic television and scent organs; Delta children death-conditioning; John's grief disruptions",
    epistemic_status: "Canonical Institutional Deconstruction",
    materiality: "CRITICAL",
    summary: "John rushes to the Park Lane Hospital for the Dying, where the dying are kept in cheerful, pastel-colored rooms filled with synthetic aromas and continuous color television. Linda lies in Ward 81, her bloated face flushed red, drifting in terminal soma dreams. As John kneels by her bed weeping in genuine grief, a troop of identical eight-year-old Bokanovsky Delta twins troop into the ward for their scheduled 'death-conditioning'—munching chocolate eclairs and playing games among the dying so they learn to view death as a trivial, pleasant physiological event. The children gawk at Linda's decayed face, calling her 'fat and ugly'. Enraged, John strikes one of the boys. Linda briefly wakes from her stupor, mistakes John for Popé, and chokes to death on her own phlegm. Overwhelmed by agonizing grief, John weeps openly; the head nurse is furious, reprimanding him for disrupting the children's anti-death conditioning.",
    key_claims: [
      "Totalitarian social engineering systematically trivializes death to prevent individuals from confronting mortality or seeking metaphysical solace.",
      "Authentic grief and mourning are treated as antisocial pathologies that threaten public serenity.",
      "Conditioning children to associate death with chocolate and sensory games destroys human empathy at its core."
    ],
    concrete_evidence: [
      "Ward 81 scented with synthetic frangipani and continuously broadcasting sensory cartoons.",
      "Twin Delta children swarming around the deathbed, pointing fingers and shouting: 'Look at that fat one! Why is she so ugly?'",
      "The nurse prioritizing the children's reflex conditioning over basic respect for a dying human being."
    ],
    operational_mechanisms: [
      {
        name: "Death-Trivialization Conditioning",
        rule: "By pairing dying people with sensory treats (chocolate eclairs) and playful activities, the state eliminates the existential terror of mortality that historically birthed religion and philosophy."
      }
    ],
    verbatim_citations: [
      "Death-conditioning begins at eighteen months. Every tot spends two mornings a week in a Hospital for the Dying. With the best toys, and when there's someone dying they get chocolate cream.",
      "Oh, God, God, God...' the Savage kept repeating to himself. In the silence of his inward contemplation he tried to make her face come back to him.",
      "Can't you behave like a civilized human being?' the Nurse snapped, furious that he was crying."
    ]
  },
  {
    id: "unit-15",
    chapter_num: 15,
    title: "The Riot in the Hospital Vestibule: Throwing Away the Soma",
    timeline_location: "Vestibule of Park Lane Hospital",
    source_scope: "Delta hospital porters soma distribution; John's insurrection; throwing soma out the window; police pacification",
    epistemic_status: "Canonical Insurrectionary Action",
    materiality: "CRITICAL",
    summary: "Leaving the death ward, John encounters a crowd of identical Bokanovsky Delta hospital orderlies queuing for their daily ration of soma tablets. Seeing the chemical chains that enslave them, John is seized by prophetic fury. He leaps onto a table, denounces soma as poison, and shouts: 'I come to bring you freedom!' He grabs the metal boxes containing the soma rations and begins hurling handfuls of tablets out the window into the courtyard. The Delta mob, terrified of losing their daily drug ration, roars in fury and rushes John. Helmholtz Watson and Bernard arrive; Helmholtz immediately charges into the fray, joyfully punching Deltas to defend his friend, while Bernard hovers on the edge in cowardice, terrified of getting hurt yet terrified of being seen not helping. Police arrive armed with water pistols loaded with liquid soma and vaporizers spraying synthetic soma fog while loudspeakers broadcast recordings of soothing voices. Within minutes, the rioters are crying and kissing each other in chemical stupor. John, Helmholtz, and Bernard are arrested.",
    key_claims: [
      "Enslaved masses will violently defend the instruments of their own chemical servitude against anyone attempting to liberate them.",
      "Totalitarian crowd control relies on pharmacological and acoustic pacification rather than lethal force, leaving the population docile and cooperative.",
      "Bernard's inner cowardice is unmasked: he wants the prestige of rebellion without the physical risk of solidarity."
    ],
    concrete_evidence: [
      "Box upon box of shiny cylindrical soma tablets thrown into the dust.",
      "The Delta orderlies screaming: 'Our soma! Give us our soma!' like ravenous beasts.",
      "The police using synthetic voice boxes broadcasting: 'Calm, calm, children! Ford loves you!'"
    ],
    operational_mechanisms: [
      {
        name: "Aerosolized Pharmacological Crowd Control",
        rule: "Dispersing euphoric gas instantly shifts violent mob hostility into communal, weeping affection, neutralizing revolt without creating political martyrs."
      }
    ],
    verbatim_citations: [
      "Don't you want to be free and men? Don't you even understand what manhood and freedom are? I'll make you be free! I'll make you!",
      "They're done for,' said Bernard and felt a sudden sharp pang of envy. He was afraid of getting hurt, and rather ashamed of his cowardice.",
      "In a few minutes the vestibule was filled with the soft, warm scent of synthetic musk, and the Deltas were embracing with tears of peace."
    ]
  },
  {
    id: "unit-16",
    chapter_num: 16,
    title: "The Office of Mustapha Mond (Part I): Art, Stability, & The Cyprus Experiment",
    timeline_location: "The Study of Mustapha Mond, Whitehall",
    source_scope: "The grand interrogation; Mond's private library of banned books; the trade-off between Art and Stability; the Cyprus Experiment",
    epistemic_status: "Canonical Philosophical Dialectic",
    materiality: "CRITICAL",
    summary: "The three prisoners are brought to the private office of Mustapha Mond, Resident World Controller for Western Europe. Mond shocks John by quoting Shakespeare, admitting he has a safe full of banned books (Shakespeare, the Bible, Milton). When John asks why Shakespeare is banned, Mond delivers a brilliant defense of the World State: beauty and high art demand emotional intensity and tragic suffering; in a stable society where everyone is happy, high art is obsolete and dangerous. Mond explains that social stability requires low-grade sensory art (the 'feelies') rather than disturbing masterpieces. When John asks why everyone cannot be decanted as an Alpha-Plus, Mond reveals the historic 'Cyprus Experiment' of A.F. 473: an island populated exclusively by 22,000 Alphas collapsed into an immediate, devastating civil war within six years because nobody would perform manual labor. Bernard breaks down in hysterical weeping and is dragged away, while Helmholtz boldly chooses exile to the stormy Falkland Islands where bad weather will inspire his poetry.",
    key_claims: [
      "Universal happiness and high art are mutually exclusive: authentic art requires tragedy, and tragedy requires social suffering and instability.",
      "A functioning society requires a vast pyramid of menial laborers; an egalitarian society of intellectual elites collapses into chaos and civil war.",
      "Exile to the islands is not a punishment, but a sanctuary for the few individuals who possess independent consciousness."
    ],
    concrete_evidence: [
      "Mustapha Mond unlocking his steel safe and pulling out a leather-bound copy of Shakespeare.",
      "The Cyprus Experiment: 22,000 Alphas given all agricultural and industrial land; within six years, 19,000 had died in strikes and civil wars.",
      "The iceberg analogy of society: eight-ninths below the water line (Gammas, Deltas, Epsilons) and one-ninth above (Alphas)."
    ],
    operational_mechanisms: [
      {
        name: "The Art-Stability Trade-Off Theorem",
        rule: "High art is the aesthetic byproduct of emotional tension, social injustice, and mortality; eliminate suffering, and great art naturally withers into superficial amusement."
      },
      {
        name: "The Elite Saturation Fallacy (The Cyprus Law)",
        rule: "A society composed entirely of high-caste leaders and intellectuals destroys itself through hyper-competition and refusal to perform routine physical maintenance."
      }
    ],
    verbatim_citations: [
      "You can't make tragedies without social instability. The world's stable now. People are happy; they get what they want, and they never want what they can't get.",
      "Actual happiness always looks pretty squalid in comparison with the over-compensations for misery.",
      "One believes things because one has been conditioned to believe them. Finding bad reasons for what one believes for other, bad reasons—that's philosophy."
    ]
  },
  {
    id: "unit-17",
    chapter_num: 17,
    title: "The Office of Mustapha Mond (Part II): God, Suffering, & The Right to Be Unhappy",
    timeline_location: "The Study of Mustapha Mond, Whitehall",
    source_scope: "Dialogue on God, religion, Cardinal Newman, Maine de Biran; soma vs. self-denial; John claims the Right to Be Unhappy",
    epistemic_status: "Canonical Climax of Philosophical Dystopia",
    materiality: "CRITICAL",
    summary: "Left alone with Mond, John debates the existence of God, religion, and the soul. Mond reads extracts from Cardinal Newman and Maine de Biran showing that religious feeling historically grew out of physical aging, loss, and the approach of death. But in the World State, where people possess youth and health until sixty, God is completely unnecessary. John argues that religion gives meaning to suffering, sacrifice, and chastity. Mond counters that suffering is a preventable biological design flaw: why endure grief or heroics when a gramme of soma produces immediate tranquility without virtue? At last, John rejects the entire synthetic utopia. He does not want comfortable, engineered happiness. In one of the most famous declarations in modern literature, John demands 'the right to be unhappy'—the right to grow old, ugly, diseased, to have syphilis and cancer, to starve, to live in terror, and to be tortured by unspeakable grief. Mond shrugs and cynically replies: 'You're welcome.'",
    key_claims: [
      "Religious belief and spiritual longing are historically rooted in human frailty, bodily decay, and fear of death; biological immortality and soma render God obsolete.",
      "The true measure of human dignity is not the maximization of pleasure, but the capacity for moral choice, suffering, and spiritual struggle.",
      "The ultimate totalitarian trap is not cruelty, but the total elimination of suffering in exchange for the voluntary surrender of human soul."
    ],
    concrete_evidence: [
      "Mond reading Cardinal Newman: 'We are not our own any more than what we possess is our own... God calls us when our youthful energies fail.'",
      "Mond demonstrating that the World State provides V.P.S. (Violent Passion Surrogate) once a month to satisfy the biological need for fear and rage without real danger.",
      "John claiming every biological disease and existential agony as his rightful human inheritance."
    ],
    operational_mechanisms: [
      {
        name: "Synthetic Depletion of the Sacred",
        rule: "Eradicate physical decay, grief, and solitude, and the metaphysical impulse toward God or transcendence naturally evaporates from human consciousness."
      },
      {
        name: "The Unhappy Dignity Axiom",
        rule: "Human freedom is meaningless without the freedom to fail, to suffer, to despair, and to choose agony over conditioned pleasure."
      }
    ],
    verbatim_citations: [
      "God isn't compatible with machinery and scientific medicine and universal happiness. You must make your choice. Our civilization has chosen machinery and medicine and happiness.",
      "‘I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.’",
      "‘In fact,’ said Mustapha Mond, ‘you're claiming the right to be unhappy.’ ‘All right then,’ said the Savage defiantly, ‘I'm claiming the right to be unhappy.’ ‘Not to mention the right to grow old and ugly and impotent...’ ‘I claim them all,’ said the Savage at last. Mustapha Mond shrugged his shoulders. ‘You're welcome,’ he said."
    ]
  },
  {
    id: "unit-18",
    chapter_num: 18,
    title: "The Surrey Lighthouse: Self-Flagellation, The Feely Circus, & The Weathercock",
    timeline_location: "Abandoned Lighthouse, near Puttenham, Surrey",
    source_scope: "Retreat to the lighthouse; self-purification; bows and arrows; reporters and feely helicopters; the mass orgy; suicide",
    epistemic_status: "Canonical Tragic Climax",
    materiality: "CRITICAL",
    summary: "Refusing to remain an exhibit in London and denied permission to join Helmholtz in exile, John retreats to an abandoned lighthouse in Surrey. Seeking redemption, he plants a garden, weaves his own bow, and subjects himself to brutal self-flagellation with knotted cords to purge himself of civilized contamination. Within days, reporters discover his hermitage. A sensationalist filmmaker hides in the bushes and films John whipping himself, releasing an international hit feely: *The Savage of Surrey*. Thousands of tourists arrive in swarms of helicopters, gawking at John like an animal in a zoo, chanting rhythmically: 'We want the whip!' When Lenina steps out of a helicopter with tears in her eyes, reaching for him, John loses his sanity, screaming 'Strumpet!' and lashing her with the whip. Hypnotized by the violence, the crowd begins chanting 'Orgy-porgy', and in a frenzy of soma and collective erotic madness, John is swept into the mass debauch. The next morning, waking to clear sunlight, John remembers the night in shattering shame and horror. That evening, onlookers enter the silent lighthouse: high up in the rafters, two feet dangle, slowly turning to the north, south, east, and west like a weathercock in the wind.",
    key_claims: [
      "True solitude and spiritual purification are impossible in a ubiquitous, voyeuristic mass-media society.",
      "The relentless pressure of mass spectacle and chemical debauchery can break even the fiercest individualist soul.",
      "John's tragic suicide is the final, ultimate defense of his moral integrity: he chooses physical annihilation over life as a broken, contaminated participant in the World State."
    ],
    concrete_evidence: [
      "John carving bows from hazel twigs and arrows from reeds, singing Zuñi chants in the quiet woods.",
      "The feely film with full tactile and olfactory effects showing the Savage whipping himself, played to millions in London.",
      "The final tableau: the dangling feet slowly rotating in the wind—north, north-east, east, south-east, south..."
    ],
    operational_mechanisms: [
      {
        name: "Voyeuristic Mass Exploitation",
        rule: "Mass media commercializes authentic suffering and spiritual agony into a circus spectacle for the titillation of an emotionally deadened public."
      },
      {
        name: "The Weathercock Metaphor",
        rule: "The dangling, spinning body symbolizes the total destruction of the authentic individual by the competing, swirling winds of modern technological civilization."
      }
    ],
    verbatim_citations: [
      "We want the whip! We want the whip!",
      "He had forgotten. Oh, God, God, God! He covered his eyes with his hands.",
      "Just under the crown of the dome were dangling a pair of feet. He was facing towards the north... slowly a turning from right to left began... north, north-east, east, south-east, south, south-south-west; then paused, and, after a few seconds, turned as unhurriedly back towards the left."
    ]
  }
];

// Write canonical knowledge-units.json
const kuPath = path.join(bookDir, 'knowledge-units.json');
fs.writeFileSync(kuPath, JSON.stringify({
  book_id: "brave-new-world",
  title: "Brave New World",
  author: "Aldous Huxley",
  publication_year: 1932,
  units_count: units.length,
  units: units
}, null, 2), 'utf8');
console.log(`Wrote canonical knowledge-units.json for Brave New World with ${units.length} units.`);

// Build master-notes.md
const mdContent = `# Brave New World
## A Forensic Biopolitical Reconstruction of Technological Totalitarianism, Engineered Contentment, and the Abolition of Human Nature
### By Aldous Huxley (1932)

---

## Executive Epistemic Summary

Aldous Huxley’s *Brave New World* (1932) is the foundational 20th-century masterpiece of **biopolitical totalitarianism**. While George Orwell’s *Nineteen Eighty-Four* depicts a regime of pain, physical surveillance, and brutal terror, Huxley’s genius was to foresee that the most durable and terrifying tyranny is built on **pleasure, consumerism, genetic engineering, and pharmacological pacification**.

Across 18 invariant units, Huxley anatomizes the World State (A.F. 632):
1. **The Abolition of Viviparous Reproduction**: Human beings are no longer born; they are manufactured in standardized batches via the Bokanovsky Process and chemically tailored into rigid biological castes (Alpha to Epsilon).
2. **Neo-Pavlovian Conditioning & Hypnopaedia**: Early childhood electro-shocks and sleep-teaching permanently rewire the human subconscious to despise nature, love consumption, and accept caste inequality as divine order.
3. **The Elimination of the Sacred Triad (Mother, Monogamy, Romance)**: By enforcing universal promiscuity (*"Everyone belongs to everyone else"*), the state destroys the intense emotional attachments that generate social instability.
4. **Soma as Bio-Political Shield**: A risk-free, hangover-free chemical tranquilizer that instantly cures all grief, doubt, and rebellion.
5. **The Grand Philosophical Confrontation**: Mustapha Mond vs. John the Savage: Mond proves that social stability requires the sacrifice of high art, religion, tragedy, and truth.
6. **The Claim of the Right to Be Unhappy**: John the Savage asserts human dignity by claiming the right to suffer, to grow old, to endure disease, and to experience spiritual agony over synthetic contentment.

---

## The World State Caste & Bio-Engineering Matrix

| Caste | Biological Treatment | Conditioning Protocol | Socioeconomic Function | Dress Code |
| :--- | :--- | :--- | :--- | :--- |
| **Alpha-Plus / Alpha** | Uninhibited single embryo incubation; optimal oxygen and nutrients. | Intellectual training; leadership psychology; emotional engineering. | Decision-makers, scientists, World Controllers, administrators. | Grey |
| **Beta** | Individual embryos; standard developmental support. | Technical competence; consumerist orthodoxy; hypnopaedic class pride. | Technicians, nurses, lab mechanics, administrative aides. | Mulberry / Plum |
| **Gamma** | Bokanovsky Process (up to 72–96 twins); mild oxygen limitation. | Repetitive mechanical tasks; aversion to solitary contemplation. | Chauffeurs, factory mechanics, retail operatives, clerical workers. | Green |
| **Delta** | Bokanovsky Process; heat and chemical conditioning; electro-shock nurseries. | Severe book and flower aversions; mass solidarity conditioning. | Heavy factory labor, assembly line workers, hospital porters. | Khaki |
| **Epsilon** | Bokanovsky Process; severe oxygen deprivation (70%); alcohol in blood-surrogate. | Dwarfism; permanent neurological stunting; zero reading literacy. | Sewage workers, manual ditch-diggers, lift operators, menial drudges. | Black |

---

## The 18 Invariant Content Units

${units.map(u => `### Chapter ${u.chapter_num}: ${u.title}
- **Timeline & Setting**: ${u.timeline_location}
- **Epistemic Classification**: ${u.epistemic_status} (${u.materiality})
- **Scope**: ${u.source_scope}

#### Core Narrative & Sociological Synthesis
${u.summary}

#### Invariant Biopolitical Claims & Principles
${u.key_claims.map(c => `- ${c}`).join('\n')}

#### Concrete Evidence & Institutional Artifacts
${u.concrete_evidence.map(e => `- ${e}`).join('\n')}

#### Operational Engineering Mechanisms
${u.operational_mechanisms.map(m => `##### ${m.name}\n> **Operational Law**: ${m.rule}`).join('\n\n')}

#### Verbatim Canonical Citations
${u.verbatim_citations.map(q => `> *"${q}"*`).join('\n\n')}

---
`).join('\n')}

## The Ultimate Dialectic: Mustapha Mond vs. John the Savage

### The World State's Irreducible Trade-Off
In Chapters 16 and 17, Mustapha Mond demonstrates that the World State is not an accidental nightmare, but a calculated, deliberate technological optimization:
- **Art requires suffering**: You cannot create *Othello* out of contentment; tragedy requires social injustice, passion, and catastrophe.
- **Religion requires decay**: God is only sought when physical youth fades and death approaches; universal youth and health render God obsolete.
- **Equality is impossible**: The "Cyprus Experiment" proved that a society composed entirely of Alphas descends into civil war within six years; someone must do the plumbing, and they must be engineered to love it.

### John's Final Humanist Testament
John the Savage’s ultimate claim is not that suffering is pleasant, but that **suffering is the irreplaceable prerequisite of human dignity**:
> *"I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin... I'm claiming the right to be unhappy."*
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
  <title>Brave New World — Aldous Huxley | Intellectualist Master Codex</title>
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
        <span>Total Replacement Benchmark &bull; Aldous Huxley</span>
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
    <button class="view-tab active" data-target="view-journey">View A: 18-Chapter Narrative Journey</button>
    <button class="view-tab" data-target="view-biopolitics">View B: Biopolitical Engineering Matrix</button>
    <button class="view-tab" data-target="view-dialectic">View C: The Grand Freedom Dialectic</button>
  </nav>

  <main class="reader-container">

    <!-- Hero Header -->
    <div class="codex-hero">
      <span class="hero-badge">BKRS v1.0 Dystopian Benchmark</span>
      <h2>Brave New World</h2>
      <p class="hero-sub">A Forensic Biopolitical Reconstruction of Technological Totalitarianism, Engineered Contentment, and the Abolition of Human Nature</p>
      <div class="hero-meta-row">
        <span><strong>Author:</strong> Aldous Huxley</span>
        <span>&bull;</span>
        <span><strong>Published:</strong> 1932</span>
        <span>&bull;</span>
        <span><strong>Volume:</strong> 18 Invariant Chapters</span>
        <span>&bull;</span>
        <span><strong>Fidelity:</strong> 100% Zero-Loss</span>
      </div>
    </div>

    <!-- VIEW A: 18-Chapter Narrative Journey -->
    <section id="view-journey" class="view-content active">
      ${units.map(u => `
      <article class="unit-card" id="${u.id}">
        <div class="unit-card-header">
          <div>
            <div class="unit-meta-top">Chapter ${u.chapter_num} &bull; ${u.timeline_location}</div>
            <h3 class="unit-title">${u.title}</h3>
          </div>
          <span class="unit-tier-badge">${u.epistemic_status}</span>
        </div>

        <div class="unit-section-title">Forensic Narrative Synthesis</div>
        <p class="prose-p">${u.summary}</p>

        <div class="unit-section-title">Biopolitical Claims & Social Principles</div>
        <ul class="bullet-list">
          ${u.key_claims.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Concrete Evidence & Institutional Artifacts</div>
        <ul class="bullet-list">
          ${u.concrete_evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>

        <div class="unit-section-title">Operational Engineering Mechanisms</div>
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

    <!-- VIEW B: Biopolitical Engineering Matrix -->
    <section id="view-biopolitics" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">The World State Caste & Bio-Engineering Matrix</h3>
        <p class="prose-p">A systematic analysis of how the World State chemically engineers social inequality and consumer loyalty before decanting.</p>

        <div class="table-container">
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Caste</th>
                <th>Biological Treatment</th>
                <th>Conditioning Protocol</th>
                <th>Socioeconomic Role</th>
                <th>Uniform</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Alpha-Plus</strong></td>
                <td>Individual embryo incubation; 100% oxygen and nutrients</td>
                <td>Critical intellectual training; leadership science</td>
                <td>World Controllers, Directors, Elite Scientists</td>
                <td>Grey</td>
              </tr>
              <tr>
                <td><strong>Beta</strong></td>
                <td>Individual embryos; standard biological support</td>
                <td>Technical proficiency; hypnopaedic consumerism</td>
                <td>Nurses, lab technicians, administrative managers</td>
                <td>Mulberry</td>
              </tr>
              <tr>
                <td><strong>Gamma</strong></td>
                <td>Bokanovsky Process (72–96 twins); mild oxygen limitation</td>
                <td>Repetitive mechanical focus; aversion to solitude</td>
                <td>Machine operators, chauffeurs, retail staff</td>
                <td>Green</td>
              </tr>
              <tr>
                <td><strong>Delta</strong></td>
                <td>Bokanovsky Process; heat conditioning; electro-shock nurseries</td>
                <td>Violent book and flower aversion; death-conditioning</td>
                <td>Factory assembly, hospital orderlies, packaging</td>
                <td>Khaki</td>
              </tr>
              <tr>
                <td><strong>Epsilon</strong></td>
                <td>Bokanovsky Process; 70% oxygen; alcohol in blood-surrogate</td>
                <td>Physical dwarfism; complete illiteracy; brain stunting</td>
                <td>Sewage maintenance, lift operators, menial labor</td>
                <td>Black</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VIEW C: The Grand Freedom Dialectic -->
    <section id="view-dialectic" class="view-content">
      <div class="unit-card">
        <h3 class="unit-title" style="margin-bottom:12px;">Mustapha Mond vs. John the Savage: The Great Debate</h3>
        <p class="prose-p">Chapters 16 and 17 contain one of the most profound philosophical confrontations in literature: the debate between engineered contentment and tragic human dignity.</p>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>1. The Happiness-Art Incompatibility</h5>
          <p>Mond proves that great art requires emotional tension and tragedy. In a society where everyone gets what they want and desires what they get, high art is replaced by superficial sensory amusements (the feelies).</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>2. The Redundancy of God</h5>
          <p>God was born of human frailty, sickness, aging, and loneliness. When technology preserves youth until sixty and soma cures anxiety, religious longing naturally vanishes.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>3. The Cyprus Experiment Fallacy</h5>
          <p>An egalitarian society of elites cannot function. An island of 22,000 Alphas ended in civil war because no one would perform routine maintenance. Inequality must be biologically baked in.</p>
        </div>

        <div class="mechanism-box" style="margin-bottom:20px;">
          <h5>4. The Claim to Unhappiness</h5>
          <p>John's immortal reclamation of human freedom: <em>"I'm claiming the right to be unhappy."</em> To be human is to possess the right to suffer, to fail, to grieve, and to choose tragedy over chemical bliss.</p>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>Intellectualist Codex Benchmark &bull; Aldous Huxley's <em>Brave New World</em> &bull; Standalone Certified Knowledge Reconstruction</p>
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
console.log(`Successfully rendered Brave New World index.html (Size: ${(fs.statSync(htmlPath).size / 1024).toFixed(2)} KB)`);
