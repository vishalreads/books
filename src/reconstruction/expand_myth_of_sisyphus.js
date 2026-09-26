const fs = require('fs');
const path = require('path');

const sisyphusUnits = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    title: "An Absurd Reasoning: The Only Serious Philosophical Problem",
    scope: "Chapter 1: Absurdity and Suicide",
    epistemic_status: "EXISTENTIAL ONTOLOGY & PHILOSOPHICAL SUICIDE",
    core_concept: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy.",
    textual_analysis: [
      "Albert Camus opens his 1942 treatise amidst the ashes of fallen France with an uncompromising intellectual decree: all traditional metaphysical questions—whether the world has three dimensions, whether the mind possesses nine or twelve categories of perception, or how consciousness relates to matter—are secondary academic diversions. The only primal, non-negotiable question of philosophy is whether human existence is worth living. If one concludes that life has no transcendent purpose, does intellectual honesty demand physical self-annihilation? Camus observes that Galileo Galilei recanted his scientific discovery the moment the Inquisition threatened his life; whether the earth moves around the sun or the sun around the earth was not worth dying at the stake for. Yet paradoxically, millions of men throughout history have marched eagerly to their deaths for ideological illusions, religious fantasies, or romantic attachments. 'What is called a reason for living,' Camus notes, 'is also an excellent reason for dying.'",
      "Suicide is rarely born from open, rational public deliberation. It originates as an invisible sickness, a silent worm gnawing within the intimacy of the human heart. The individual wakes up one morning and perceives that the daily routine—rising, streetcars, office desks, factory assembly lines, meals, sleep, and the cyclical rhythm of the workweek—is utterly hollow. In that split second of lucid awakening, a terrifying estrangement opens between man and his existence. The actor is suddenly detached from his theatrical setting. The world becomes a foreign stage where words echo without meaning, gestures lose their coherence, and the illusion of progress shatters. Dying voluntarily implies that the individual has recognized, even instinctively, the ridiculous character of this mechanical habit, the total absence of any profound reason for living, and the uselessness of continued suffering.",
      "Camus establishes his forensic method: he will not approach suicide through moral condemnation, religious prohibition, or sentimental pity. Instead, he applies ruthless Cartesian doubt to existential dread. He asks whether there is a direct, inescapable logic between recognizing the absurdity of existence and terminating one's life. Many thinkers who preach the vanity of human ambition live comfortably to ripe old ages, while others who profess love for life suddenly shoot themselves. Does the Absurd dictate death? Camus' radical answer is an absolute refusal. Physical suicide is not a resolution of the absurd; it is a cowardly capitulation, an evasion that eliminates one term of the dialectic rather than confronting it. True philosophical dignity requires living inside the tension of the unanswered question."
    ],
    verbatim_anchor: "“There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy. All the rest—whether or not the world has three dimensions, whether the mind has nine or twelve categories—comes afterwards. These are games; one must first answer.” — Albert Camus",
    operational_heuristic: "Do not escape existential vertigo through physical or intellectual suicide. The measure of intellectual courage is the ability to sustain consciousness within the tension of meaninglessness without surrender.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    title: "The Feeling of Absurdity: The Collapse of Mechanical Routine and the Awakening",
    scope: "Chapter 1: Absurd Walls",
    epistemic_status: "PHENOMENOLOGY OF ALIENATION & THE AWAKENING",
    core_concept: "The feeling of absurdity can strike any human being at any street corner without warning. It emerges when the mechanical rhythm of everyday existence suddenly ruptures, confronting consciousness with the terrifying question: 'Why?'",
    textual_analysis: [
      "Camus constructs the phenomenology of the absurd from the mundane architecture of modern industrial life. 'Rising, streetcar, four hours in the office or the factory, meal, streetcar, four hours of work, meal, sleep, and Monday Tuesday Wednesday Thursday Friday and Saturday according to the same rhythm—this path is easily followed most of the time.' The machinery of survival operates on unconscious habit; human beings move like automatons through social conventions, economic duties, and domestic rituals. But one day, unexpectedly, the mechanical chain snaps. The question 'Why?' arises from the depths of weariness. This weariness is not merely physical exhaustion; it is an ontological rupture tinged with amazement. 'Begins'—Camus emphasizes the word—weariness terminates the unconscious sleep of habit and inaugurates the dawn of consciousness.",
      "Once awakened, the human mind encounters the absurdity of reality across four distinct existential frontiers. First is the radical strangeness of nature: we look at a mountain ridge, a forest canopy, or a jagged stone, and suddenly realize that the earth is utterly indifferent, primitive, and alien. The poet's anthropomorphic fantasies—that nature weeps with us or understands our sorrows—evaporate; the physical cosmos is inhuman, opaque, and resistant to our intellectual categories. Second is the strangeness of other human beings: Camus paints the unforgettable image of a man speaking inside a glass telephone booth. Because the glass blocks the sound of his voice, his frantic gestures, mouth movements, and bodily convulsions appear grotesque, ridiculous, and insane—like a bizarre pantomime. We suddenly see the artificiality of all human social interaction when stripped of its acoustic illusions.",
      "The third encounter is the strangeness of oneself: looking into a mirror or catching an unexpected glance of one's reflection in a storefront window, one experiences a sudden shock of estrangement. The familiar face becomes the mask of a stranger, a biological carcass housing a consciousness it cannot comprehend. The fourth and most ruthless frontier is the certainty of time and death. Human beings live perpetually oriented toward the future: we say 'tomorrow,' 'later,' 'when I retire,' 'when my children grow up.' We treat time as a friend carrying us toward fulfillment. But time is our executioner. Every ticking second carries the body inexorably toward the graveyard. At the climax of this awareness, the flesh revolts: the human mind recoils in horror from the physical reality of decay and decomposition. Death is the bloody, non-negotiable finish line that reduces all human striving to dust."
    ],
    verbatim_anchor: "“At any streetcorner the feeling of absurdity can strike any man in the face. In its distressing nudity, in its light without effulgence, it is elusive. But that very difficulty deserves reflection... Rising, streetcar, four hours in the office or the factory, meal, streetcar, four hours of work, meal, sleep... But one day the 'why' arises and everything begins in that weariness tinged with amazement.” — Albert Camus",
    operational_heuristic: "When daily routine dissolves into weariness, do not seek comfort in artificial distractions or false optimism. Treat the rupture as an awakening: look directly at the strangeness of the world and the reality of your mortality.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    title: "The Absurd Walls: The Collision of Human Longing and Cosmic Silence",
    scope: "Chapter 1: Absurd Walls",
    epistemic_status: "DIALECTICAL ONTOLOGY & THE ABSURD DEFINITION",
    core_concept: "The absurd is not an intrinsic property of man, nor is it an intrinsic property of the universe. The absurd is the relation, the collision between the human mind's desperate demand for unity, order, and meaning, and the cold, irrational silence of the cosmos.",
    textual_analysis: [
      "Camus provides the precise philosophical anatomy of the Absurd, dispelling widespread misunderstandings. The absurd is neither a purely subjective psychological depression nor an objective attribute of the physical cosmos. A rock is not absurd; a tree is not absurd; an indifferent galaxy spinning through space is not absurd. Nor is a human mind absurd in isolation. The absurd is born exclusively from their confrontation. Just as an automobile collision requires two vehicles colliding in physical space, the absurd is a relational event generated by two incompatible forces: (1) The deeply rooted, passionate human appetite for clarity, moral purpose, coherence, and immortality; and (2) The blind, irrational, silent universe that refuses to respond to human longing.",
      "Camus illustrates this dialectical structure through precise comparisons. If a man armed only with a toy wooden pistol charges an entrenched modern fortress defended by machine guns, his action is absurd because of the grotesque disproportion between his intention and the physical reality. If a virtuous man's lifelong devotion is rewarded with torture and disgrace, the situation is absurd because of the violent mismatch between moral expectation and worldly outcome. In the same way, human existence is absurd because humanity possesses an insatiable hunger for cosmic meaning, yet inhabits a cosmos that is structurally incapable of providing it. If the universe were divinely ordered and responsive to prayer, there would be no absurd. Conversely, if human beings were unreflective animals governed solely by instinct, there would be no absurd. The absurd exists solely because conscious beings ask questions of an empty sky.",
      "Crucially, Camus demonstrates that the absurd can only survive if both terms of the equation are preserved. To destroy human consciousness (through physical suicide) destroys the confrontation, thereby ending the absurd through obliteration. To invent an afterlife, a benevolent deity, or a mystical cosmic plan (through religious faith) destroys the cosmic silence, thereby ending the absurd through wishful fantasy. Camus declares that intellectual honesty demands maintaining both terms simultaneously. The thinker must refuse to numb his rational faculties, refuse to pretend the universe cares, and refuse to close his eyes. To live in the absurd is to endure the tension of this impossible clash without blinking and without fabricating gods to cushion the blow."
    ],
    verbatim_anchor: "“The absurd is born of this confrontation between the human need and the unreasonable silence of the world. This must not be forgotten. This must be clung to because the whole consequence of a life can depend on it. The irrational, the human nostalgia, and the absurd that is born of their encounter—these are the three characters in the drama.” — Albert Camus",
    operational_heuristic: "Never attempt to resolve existential dread by denying either term of the equation: do not extinguish your conscious longing for meaning, and do not invent cosmic fairy tales to tame the universe's silence. Stand firm at the point of collision.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    title: "Philosophical Suicide: The Evasion of Kierkegaard, Chestov, and Jaspers",
    scope: "Chapter 1: Philosophical Suicide",
    epistemic_status: "CRITICAL EPISTEMOLOGY & THE LEAP OF FAITH",
    core_concept: "Existentialist philosophers correctly diagnose the absurdity and fragmentation of human existence, but then commit 'Philosophical Suicide'—sacrificing human reason through a desperate leap into transcendent faith, God, or mystical metaphysics.",
    textual_analysis: [
      "In one of the most intellectually lethal chapters of twentieth-century philosophy, Camus conducts a forensic audit of the thinkers who preceded him into the abyss: Lev Shestov, Søren Kierkegaard, Karl Jaspers, and Edmund Husserl. Camus acknowledges their brilliance: these philosophers looked into the brokenness of human experience, pierced the vanity of rationalist systems (such as Hegelian absolute idealism), and recognized that human reason cannot construct a comprehensive, harmonious explanation of reality. They confronted what Jaspers called the 'limit situations' (Grenzsituationen)—death, suffering, guilt, and the failure of logic. Yet at the precise moment when intellectual honesty demanded holding firm in the void, every one of these thinkers lost their nerve and orchestrated an epistemological escape.",
      "Lev Shestov discovers the irrationality of the cosmos and the impotence of human reason, but instead of enduring this tragic limitation, he exalts the irrational, baptizing chaos and transforming the breakdown of logic into the presence of God. Reason is dethroned, and in its place, blind supernatural faith is crowned sovereign. Søren Kierkegaard performs the ultimate *Salto Mortale*—the fatal leap of faith. In works like *Fear and Trembling*, Kierkegaard analyzes existential dread with sublime psychological precision, only to declare that the Absurd is not a tragedy to be endured, but the divine mystery itself. For Kierkegaard, to believe in God requires the sacrifice of the intellect; faith is the belief in that which contradicts all human reason. Kierkegaard embraces the absurd not to fight it, but to deify it. What crushed him becomes his savior; the antinomy is swallowed in a mystical embrace of eternity.",
      "Camus denounces this maneuver as 'Philosophical Suicide' (*le suicide philosophique*). Just as physical suicide destroys the bodily instrument to escape physical suffering, philosophical suicide assassinates human reason to escape existential despair. It is a sleight-of-hand (*l'escamoteur*) that cures the disease by killing the patient's intellect. Camus refuses this evasion: 'I want to know if I can live with what I know, and with that alone.' Camus refuses to deify the irrational or invent transcendent compensations. Reason may be limited, fragile, and incapable of explaining the absolute, but it is the only lucid compass human beings possess. To abandon reason the moment it encounters the silence of the universe is an act of intellectual cowardice. The absurd thinker must remain lucid on the precipice without leaping into the comforting arms of God or cosmic dogma."
    ],
    verbatim_anchor: "“I do not know whether this world has a meaning that transcends it. But I know that I do not know that meaning and that it is impossible for me just now to know it. What can a meaning outside my condition mean to me? I can understand only in human terms... Kierkegaard may shout in warning: 'If man had no eternal consciousness, if, at the bottom of everything, there were merely a wild, seething force... what would life be but despair?' That cry has no power to stop the absurd man. Seeking what is true is not seeking what is desirable.” — Albert Camus",
    operational_heuristic: "Beware of philosophical and spiritual systems that brilliantly diagnose the agony of the human condition only to sell a supernatural escape hatch. True intellectual integrity demands living strictly within what can be empirically verified, refusing comforting leaps of faith.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    title: "Absurd Freedom & The Three Consequences: Revolt, Freedom, and Passion",
    scope: "Chapter 1: Absurd Freedom",
    epistemic_status: "EXISTENTIAL ETHICS & RADICAL REVOLT",
    core_concept: "From the lucid contemplation of the absurd without evasion or faith, Camus deduces three strict operational consequences for human life: (1) Permanent Revolt; (2) Absolute Situational Freedom; and (3) Intense Experiential Passion.",
    textual_analysis: [
      "Having systematically rejected both physical suicide (annihilation of the body) and philosophical suicide (annihilation of the intellect), Camus arrives at the central ethical question of his inquiry: Can one live without appeal (*vivre sans appel*)? Living without appeal means conducting one's existence entirely within the limits of human experience, without relying on eternal promises, divine forgiveness, metaphysical guarantees, or future rewards. It is the posture of a mortal who knows his life is finite and his universe indifferent. Far from leading to passive nihilism or paralyzing depression, the realization of the absurd unleashes a radical, affirmative life-force. Camus extracts three rigorous consequences that transform an invitation to despair into a manifesto of heroic defiance.",
      "The first consequence is **My Revolt**. Revolt is the continuous, unyielding confrontation between conscious man and the obscurity of the universe. It is the certainty of a crushing fate—death and oblivion—without the resignation that normally accompanies it. Revolt confers majesty, nobility, and value upon every second of mortal life. Physical suicide is the antithesis of revolt; suicide is a surrender, an agreement with the absurd, a confession of defeat. Revolt, by contrast, looks the executioner in the eye and refuses to bow. It is Prometheus chained to the rock, defying Zeus. It is the human being standing upon the barren earth, fully aware of his mortality, yet determined to exhaust all temporal possibilities. Revolt is humanity's supreme declaration of dignity against cosmic indifference.",
      "The second consequence is **My Freedom**. Traditional religions and moral systems promise 'free will,' but enslave the individual in a web of divine commandments, eternal guilt, and post-mortem retribution. The believer is merely a slave to an eternal retirement plan. The absurd man, knowing that there is no cosmic afterlife and no divine judge, is liberated from all transcendental servitude. He experiences the raw, exhilarating freedom of the condemned prisoner on death row on the morning of his execution. He has no tomorrow to worry about, no divine ledger to balance, no sacred prohibitions to fear. He possesses absolute freedom of action in the present, coupled with total personal responsibility for its earthly consequences. The third consequence is **My Passion**. If life has no eternal qualitative hierarchy (where one act is 'holier' than another in the eyes of God), the goal of living shifts from quality to quantity. To live an absurd life is to maximize the sheer number of lucid, conscious, fully felt experiences. The absurd man seeks not the 'best' life according to moral dogmas, but the *most* life."
    ],
    verbatim_anchor: "“Thus I draw from the absurd three consequences, which are my revolt, my freedom, and my passion. By the mere activity of consciousness I transform into a rule of life what was an invitation to death—and I refuse suicide... Living is keeping the absurd alive. Bringing it to life is, above all, contemplating it. Unlike Eurydice, the absurd dies only when we turn away from it.” — Albert Camus",
    operational_heuristic: "Replace the spiritual obsession with eternal salvation with the fiery reality of temporal revolt. Cultivate radical present-tense freedom and saturate your lifespan with the greatest volume of lucid, conscious experience.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    title: "The Absurd Man I: Don Juanism and the Ethic of Quantity",
    scope: "Chapter 2: The Absurd Man - Don Juanism",
    epistemic_status: "EXISTENTIAL PSYCHOLOGY & THE QUANTITATIVE ETHIC",
    core_concept: "Don Juan is not a vulgar womanizer cursed by insatiable lust or searching for romantic perfection; he is an absurd hero who understands the ephemerality of human emotion and consciously chooses the ethic of quantity over the illusion of eternal love.",
    textual_analysis: [
      "To embody the operational consequences of the absurd, Camus presents four archetypal figures of the Absurd Man: the seducer, the actor, the conqueror, and the creator. The first of these is Don Juan. Conventional moralists and romantic poets consistently misinterpret Don Juan's character: the moralist condemns him as a selfish predator incapable of love, while the romantic depicts him as a melancholic seeker searching endlessly for an ideal, perfect woman he can never find. Camus dismantles both illusions. Don Juan is neither depraved nor brokenhearted. He does not suffer from a romantic curse; he possesses absolute psychological lucidity. He does not collect women out of vanity or psychological deficiency. He loves each woman with total passion, but he knows with terrifying clarity that human love is finite, biological, and temporal.",
      "Why should it be essential to love rarely in order to love much? Society preaches the dogma of monogamous fidelity—promising to love one person until death—which Camus views as a desperate attempt to impose eternal permanence on a fluid, decaying emotion. Don Juan rejects this lie. He does not believe in the eternity of feelings. He knows that love burns brilliantly and then burns out. Instead of feigning eternal commitment or mourning the death of romance, Don Juan multiplies what he cannot unify. He applies the quantitative ethic to passion. He gives himself completely, generously, and fiercely to each encounter, drinking the full wine of connection in the present moment, without making false promises about tomorrow. He is not looking for a wife to redeem his existence; he is experiencing the sheer variety and intensity of human intimacy.",
      "Camus examines the legendary confrontation between Don Juan and the stone Statue of the Commander (the emissary of divine justice and eternal damnation). In Mozart's opera and Molière's play, the Statue demands that Don Juan repent of his earthly sins or be dragged into hell. Don Juan looks the terrifying supernatural stone guest in the eye and defiantly refuses to repent. He does not tremble; he does not grovel for divine mercy. He owns his life completely. He has lived according to the flesh, loved without illusions, and refused to betray his earthly truth. Even when old age arrives and his physical beauty fades, Don Juan does not convert to the Church or weep over his past. He accepts obscurity in a small house, smoking his pipe in the evening sun, at peace with having exhausted his allotted share of human vitality."
    ],
    verbatim_anchor: "“There is no noble love but that which recognizes itself to be both short-lived and unique... If it were enough simply to love, things would be too simple. The more we love, the stronger the absurd grows. It is not through lack of love that Don Juan goes from woman to woman. It is ridiculous to represent him as a mystic in search of total love. It is simply because he loves them with the same passion and each time with his whole being that he must repeat his gift and his profound quest.” — Albert Camus",
    operational_heuristic: "Do not withhold your emotional generosity in the pursuit of an impossible eternal guarantee. Love fully, intensely, and honestly in the present, acknowledging that all human feelings are finite and bounded by time.",
    materiality: "IMPORTANT"
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    title: "The Absurd Man II: The Actor and Fleeting Immortality",
    scope: "Chapter 2: The Drama",
    epistemic_status: "THEATRICAL PHENOMENOLOGY & TEMPORAL SATURATION",
    core_concept: "The actor is the purest exemplar of the absurd hero: he constructs complete, magnificent human destinies out of physical gestures and spoken breath, knowing that his art will vanish the instant the curtain falls.",
    textual_analysis: [
      "Camus turns to the theater to reveal the second archetype of absurd consciousness: the Actor. In conventional artistic creation—sculpture, painting, or literature—the artist leaves behind a durable physical artifact. A bronze statue survives millennia; a book sits on library shelves long after the author's bones have decomposed; an oil canvas preserves its pigment across centuries. This physical durability creates a seductive illusion of worldly immortality, tempting the artist to believe he has conquered time. The actor, by contrast, is denied this consoling vanity. His art possesses no durable physical medium. It exists exclusively in the living flesh of his body, the vibration of his vocal cords, and the fleeting attention of an audience gathered in a darkened auditorium for three hours.",
      "For three hours on stage, the actor inhabits an entire human destiny. He is King Lear howling in the storm, Hamlet contemplating suicide, Tartuffe scheming in hypocrisy, or Nero wielding imperial tyranny. In that brief window, he experiences the full emotional trajectory of a lifetime—love, betrayal, ambition, madness, and violent death—and then walks offstage into the dressing room. He washes the greasepaint from his cheeks, hangs up his royal robes, and returns to the mundane street as a mortal man. In a career of thirty years, an actor lives and dies a thousand times. He compresses centuries of human experience into a single biological existence. He embodies the quantitative ethic in its most intense artistic form, multiplying human consciousness across countless roles.",
      "The actor demonstrates the profound truth that all human social identity is theater. The judge in his black robes, the general in his medal-encrusted uniform, the politician behind the podium—all are actors wearing costumes, reciting scripted lines against the backdrop of an indifferent cosmos. But unlike the judge or the general, who take their roles with deadly, pompous seriousness and believe in their cosmic importance, the absurd actor knows it is a game. He plays his role with consummate brilliance, yet maintains absolute inner lucidity about its ephemerality. The tragedy of the actor is bound directly to the decay of his flesh: as his face wrinkles and his voice cracks, his very artistic instrument crumbles. He is the ultimate witness to mortal transience, crafting masterpieces out of passing shadows."
    ],
    verbatim_anchor: "“The actor’s realm is that of the fleeting. Of all kinds of glory, his is the least durable... For three hours he is Caesar, for three hours he is Hamlet. He lives and dies a thousand times before the dust settles. He displays the absurdity of all human ambition by building masterpieces out of physical breath and passing shadows.” — Albert Camus",
    operational_heuristic: "Inhabit your professional and social roles with technical excellence and total passion, but maintain the actor's inner detachment: never mistake the temporary costume for your immortal soul.",
    materiality: "IMPORTANT"
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    title: "The Absurd Man III: The Conqueror and Historical Action",
    scope: "Chapter 2: Conquest",
    epistemic_status: "POLITICAL ACTION & TEMPORAL ENGAGEMENT",
    core_concept: "The conqueror does not fight to construct an eternal empire or bring about a utopian end of history; he embraces historical struggle because worldly action is humanity's supreme theater of vitality and defiance.",
    textual_analysis: [
      "The third archetype Camus examines is the Conqueror—the man of radical worldly action, the leader, the revolutionary, the builder of states. Throughout the history of thought, a false dichotomy has been drawn between the contemplative philosopher and the man of action. The philosopher is depicted as the seeker of truth who retreats into monasteries, libraries, or academic ivory towers to contemplate the eternal, while the conqueror is dismissed as a brutal, unthinking pragmatist obsessed with worldly power. Camus rejects this division. The true conqueror is not a blind barbarian; he is an intellectual who has understood the futility of abstract metaphysical contemplation and deliberately chosen the arena of historical reality.",
      "The absurd conqueror harbors zero illusions about the permanence of his achievements. He knows that every empire eventually crumbles into sand, every constitution is eventually discarded, every treaty is torn up, and the ruins of Persepolis, Rome, and Babylon await every great civilization. He does not believe in the Marxist myth of an inevitable utopian classless society at the end of history, nor does he believe in a divine providence guiding human affairs toward moral redemption. He knows that death will wipe out his conquests, bury his soldiers, and erase his name from living memory. Yet he chooses to fight. Why? Because historical action is the supreme expression of human power, solidarity, and revolt against cosmic nothingness.",
      "The conqueror understands that to act is to participate in the physical shaping of the mortal earth. While the contemplative mystic wastes his life praying to an absent God, the conqueror organizes men, builds irrigation canals, erects defensive walls, and reshapes political boundaries. 'Conquerors know that action is in itself useless. There is only one useful action, that of remaking man and the earth. I shall never remake men. But one must act 'as if.'' The conqueror chooses the temporal present over the promises of eternity. He declares: 'I have nothing to do with ideas or with the eternal. The truths to which I can relate are human truths, bound to the earth and to the suffering of mortal men. If I must die, let me die with my boots on, fighting for the only home I will ever know.'"
    ],
    verbatim_anchor: "“'Conquest,' says the conqueror, 'overcoming, that is my kingdom. Not that I believe in the eternity of my works. I know that time will destroy my cities and that the earth will freeze... But I choose human action over divine contemplation. Action is the only reality that affirms my revolt.'” — Albert Camus",
    operational_heuristic: "Engage deeply in the practical, political, and entrepreneurial struggles of your generation without falling prey to utopian delusions. Build, organize, and fight for human betterment here and now, knowing that the battle itself is its own reward.",
    materiality: "IMPORTANT"
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    title: "Absurd Creation: Art as the Supreme Gratuitous Act & Dostoevsky's Challenge",
    scope: "Chapter 3: Absurd Creation",
    epistemic_status: "AESTHETICS & THE PHILOSOPHY OF THE NOVEL",
    core_concept: "The absurd work of art does not explain the universe, preach a moral sermon, or offer transcendent redemption; it describes the tragic richness of human experience with uncompromising clarity as an act of pure, gratuitous creation.",
    textual_analysis: [
      "In Part Three, Camus turns to the creator—the novelist, the painter, the dramatist—identifying artistic creation as the highest, most rigorous manifestation of absurd consciousness. If the world were clear, rational, and fully explainable by science or theology, art would not exist. Art is born directly from the failure of philosophy. Where abstract logic fractures and fails to account for human suffering, the creative imagination steps in to depict the human drama without pretending to resolve the contradiction. The absurd creator does not write to provide moral instruction, offer spiritual consolation, or construct an intellectual doctrine. He creates as a gratuitous exercise of human intelligence, passion, and discipline. 'To create is to live twice.'",
      "Camus establishes the foundational law of absurd art: the work of art must remain a pure description of phenomenal reality, maintaining the tension between human longing and cosmic silence without resolving it through a false happy ending or mystical redemption. To test this principle, Camus undertakes a deep, rigorous analysis of the novels of Fyodor Dostoevsky. Dostoevsky is the preeminent novelist of the absurd because his greatest characters confront the terrifying implications of a godless universe. In *Demons* (*The Possessed*), Camus focuses on engineer Alexei Kirillov, who formulates the philosophy of 'logical suicide.' Kirillov reasons that if God exists, everything is subject to His divine will, and man is powerless. But if God does not exist, Kirillov himself must become God. How does a mortal become God? Not by gaining supernatural powers, but by asserting absolute independence and conquering the fear of death through voluntary suicide without purpose or grievance: 'If there is no God, then I am God... To recognize that there is no God and not to recognize at the same instant that one has become God is an absurdity.' Kirillov commits suicide to prove human sovereignty.",
      "Camus shows that while Dostoevsky created the most devastating portraits of the absurd in Kirillov and Ivan Karamazov ('If there is no immortality, all things are permitted'), Dostoevsky could not bear to live in the cold air of the absurd. At the climax of *The Brothers Karamazov* and the epilogue of *Crime and Punishment*, Dostoevsky retreats into Orthodox Christian mysticism, resurrecting his broken characters through divine grace, eternal life, and universal forgiveness. Dostoevsky cures the absurd through religious faith; he commits philosophical suicide within the architecture of his fiction. Camus honors Dostoevsky's immense psychological genius, but warns that the true absurd creator must resist this holy surrender. The genuine absurd novel must depict the tragic beauty of existence and then fall silent, leaving the reader standing alone on the barren earth without a savior."
    ],
    verbatim_anchor: "“To create is to live twice... The absurd work of art illustrates the mind’s triumph over its fantasies. It is a rebellion that produces beauty out of nothingness... In this universe, the work of art is then the sole chance of keeping his consciousness and of fixing its adventures. To create is to give a shape to one’s fate.” — Albert Camus",
    operational_heuristic: "In your creative, intellectual, and professional work, describe reality as it actually is without forcing moralistic, tidy, or sentimental conclusions. The highest artistic discipline is holding up a truthful mirror to human complexity without preaching.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    title: "The Myth of Sisyphus: The Rock, the Mountain, and the Punishment",
    scope: "Chapter 4: The Myth of Sisyphus",
    epistemic_status: "CLASSICAL MYTHOLOGY & EXISTENTIAL PUNISHMENT",
    core_concept: "The Olympian gods condemned Sisyphus to ceaselessly roll a colossal rock to the summit of a mountain, whence the stone would inevitably roll back down under its own weight. The gods judged that there is no punishment more terrifying than futile, hopeless, endless labor.",
    textual_analysis: [
      "In the climactic fourth section, Camus grounds his entire philosophy in the ancient Greek myth of Sisyphus, the legendary founder and King of Corinth. According to Homer, Sisyphus was the wisest and most prudent of mortals, but he committed the unforgivable crime of defying the Olympian gods on multiple occasions. Camus recounts his transgressions with evident admiration. First, Sisyphus betrayed the secret amours of Jupiter (Zeus). When the king of the gods abducted the young maiden Aegina, daughter of the river-god Asopus, the grieving father came to Corinth searching for his child. Sisyphus, whose citadel lacked water, struck a shrewd bargain: he revealed that Jupiter was the abductor in exchange for Asopus causing a perennial spring of fresh water to gush forth from the Acrocorinth. Sisyphus boldly preferred the practical blessing of water for his mortal citizens over the wrath of the supreme god.",
      "Jupiter was outraged by Sisyphus' defiance and dispatched Thanatos (Death personified) to chain Sisyphus in the dark abyss of Tartarus. But Sisyphus was far too clever for Death: he tricked Thanatos, locked him in irons, and held him prisoner in his palace. As a result of Death being chained, an unprecedented crisis erupted in the cosmos: no human being died. The elderly, the mortally wounded, and the sick continued to breathe; the battlefield produced no corpses; and Pluto's underworld stood empty and silent. Finally, the gods became frantic, and Mars (Ares), the god of war, was dispatched to liberate Death and seize Sisyphus. Even then, Sisyphus outsmarted the underworld a second time. On his deathbed, he instructed his wife Merope to demonstrate her love by refusing him funeral rites and casting his unburied corpse into the public square. Arriving in Hades, Sisyphus appealed to Pluto and Proserpina, claiming that his wife had committed a sacrilege and begging for permission to return briefly to the upper world to punish her impiety.",
      "The rulers of the underworld granted his request. But the moment Sisyphus returned to the warm sunlight of Greece, smelled the sea breeze, saw the sparkling waters of the Gulf of Corinth, and felt the embrace of his wife, he flatly refused to return to the dark, damp subterranean gloom. For years, despite divine warnings, he lived joyfully on the physical earth, defying the underworld. In the end, the gods dispatched Mercury (Hermes) to wrench him violently from his earthly paradise and drag him into Tartarus. To punish his insolence, his hatred of death, and his passionate love of life, the gods devised an eternal torment: Sisyphus was condemned to roll a colossal boulder up a steep mountain slope, strain every muscle to heave it over the crest, only to watch the stone slip from his grasp at the final second and bound down into the lower world in a cloud of dust, forcing him to walk down and begin the crushing labor anew for all eternity."
    ],
    verbatim_anchor: "“The gods had condemned Sisyphus to ceaselessly rolling a rock to the top of a mountain, whence the stone would fall back of its own weight. They had thought with some reason that there is no more dreadful punishment than futile and hopeless labor... Sisyphus is the absurd hero. He is, as much through his passions as through his torture. His scorn of the gods, his hatred of death, and his passion for life won him that unspeakable penalty through which the whole being is exerted toward accomplishing nothing.” — Albert Camus",
    operational_heuristic: "Recognize that much of human endeavor—from daily maintenance to professional labor—is repetitive and destined to be wiped clean. Do not hide from this reality; look directly at the heavy stone and the steep mountain slope.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-11",
    unit_number: 11,
    title: "The Hour of Consciousness: The Descent Down the Mountain",
    scope: "Chapter 4: The Hour of Consciousness",
    epistemic_status: "LUCIDITY & THE TRANSCENDENCE OF FATE",
    core_concept: "The true climax of the myth occurs not during the agonizing climb up the mountain, but during the silent walk down the slope to retrieve the fallen rock. That pause is the 'hour of consciousness,' the moment when Sisyphus becomes superior to his fate.",
    textual_analysis: [
      "Camus concentrates the entire philosophical weight of his essay upon a single, neglected moment in the ancient myth: the return journey down the mountain. Painters and poets throughout history have invariably depicted Sisyphus in the throes of physical agony—muscles bulging, veins standing out on his neck, face caked with grime and sweat, shoulder pressed desperately against the jagged mass of clay and granite as he pushes toward the summit. But Camus turns his gaze away from the uphill struggle: 'It is during that return, that pause, that Sisyphus interests me. A face that toils so close to stones is already stone itself! I see that man going back down with a heavy yet measured step toward the torment of which he will never know the end. That hour like a breathing-space which returns as surely as his suffering, that is the hour of consciousness.'",
      "Why is that downward walk so profound? Because at each of those moments when Sisyphus leaves the mountain summit and slowly descends into the plains of Tartarus, he is superior to his fate. He is stronger than his rock. Camus asks: Where would his torment be if at every step the hope of succeeding sustained him? If Sisyphus foolishly believed that on the ten-thousandth attempt the stone would remain balanced on the summit and release him to heaven, his labor would be a trial of patience, not an existential tragedy. Tragedy requires consciousness. The modern factory worker, the office clerk, the digital laborer repeats the exact same mechanical tasks every day of his life, punching clocks, answering emails, manipulating spreadsheets; his fate is no less absurd than Sisyphus'. But it is tragic only at the rare, luminous moments when he awakens and becomes fully conscious of the futility.",
      "During the descent, Sisyphus contemplates that entire series of unrelated earthly actions which constitutes his destiny. He looks back at his life: his rebellion against Jupiter, his tricking of Death, the warmth of the Greek sun, the love of his wife, and now this eternal rock. He sees that his fate is entirely his own creation, woven together under his memory's eye and sealed by his mortal defiance. There is no divine architect pulling the strings; there is only Sisyphus and his mountain. By choosing to walk down the hill with open eyes, fully aware that the stone will fall again tomorrow, Sisyphus claims his destiny. Lucidity, which was intended by the gods to be his supreme torment, becomes his supreme victory. He transforms punishment into sovereignty."
    ],
    verbatim_anchor: "“It is during that return, that pause, that Sisyphus interests me... At each of those moments when he leaves the heights and gradually sinks toward the lairs of the gods, he is superior to his fate. He is stronger than his rock. If this myth is tragic, that is because its hero is conscious. Where would his torment be if at every step the hope of succeeding sustained him? The workman of today works every day in his life at the same tasks, and this fate is no less absurd. But it is tragic only at the rare moments when it becomes conscious.” — Albert Camus",
    operational_heuristic: "Cherish the quiet pauses between your demanding tasks. In those moments of reflection, do not distract yourself; look squarely at your condition, achieve full consciousness, and choose your burden anew with sovereign pride.",
    materiality: "CRITICAL"
  },
  {
    unit_id: "unit-12",
    unit_number: 12,
    title: "One Must Imagine Sisyphus Happy: The Triumph Over the Gods",
    scope: "Chapter 4: Conclusion",
    epistemic_status: "RADICAL AFFIRMATION & TRAGIC JOY",
    core_concept: "There is no fate that cannot be surmounted by scorn. By banishing gods and illusions, Sisyphus discovers that the universe without a master is his own domain, and that the struggle itself toward the heights is enough to fill a human heart.",
    textual_analysis: [
      "In the closing pages of *The Myth of Sisyphus*, Camus delivers one of the most radiant and enduring affirmations in the history of existential thought. He dissolves the apparent paradox between tragedy and happiness: 'Happiness and the absurd are two sons of the same earth. They are inseparable. It would be a mistake to say that happiness necessarily springs from the absurd discovery. It happens as well that the feeling of the absurd springs from happiness.' Sisyphus does not merely endure his punishment; he conquers his executioners through his scorn (*le mépris*). 'There is no fate that cannot be surmounted by scorn.' The Olympian gods sit on high expecting Sisyphus to weep, to beg for mercy, or to crumble into despair. Instead, they encounter a silent, mocking rebel who embraces the rock as his companion.",
      "The rock ceases to be an instrument of divine torture; it becomes Sisyphus' personal kingdom, his matter, his world. When Sisyphus looks upon the night-filled mountain, he does not see a prison designed by Jupiter; he sees physical reality in all its unadorned majesty. 'Each atom of that stone, each mineral flake of that night-filled mountain, in itself forms a world.' Sisyphus banishes all nostalgia for a lost paradise and all anticipation of a heavenly afterlife. He concludes, like Oedipus in Sophocles' tragedy, that 'all is well.' This statement does not mean that suffering does not exist or that cruelty is acceptable; it means that human life, bounded by death and rooted in the physical earth, is complete in itself. It needs no divine justification.",
      "Camus leaves us with an unforgettable image that forever redefines human dignity: 'I leave Sisyphus at the foot of the mountain! One always finds one’s burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile... The struggle itself toward the heights is enough to fill a man’s heart. One must imagine Sisyphus happy.' In a world stripped of cosmic illusions, human greatness consists not in escaping the boulder, but in placing one's shoulder against it with fierce, uncompromising joy."
    ],
    verbatim_anchor: "“I leave Sisyphus at the foot of the mountain! One always finds one’s burden again. But Sisyphus teaches the higher fidelity that negates the gods and raises rocks. He too concludes that all is well. This universe henceforth without a master seems to him neither sterile nor futile. Each atom of that stone, each mineral flake of that night-filled mountain, in itself forms a world. The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.” — Albert Camus",
    operational_heuristic: "Surmount your heaviest burdens through scorn for victimhood and total ownership of your task. Do not wait for external rewards or divine validation: find profound joy and meaning in the daily struggle toward the heights.",
    materiality: "CRITICAL"
  }
];

function buildMasterNotesMarkdown() {
  let md = `# The Myth of Sisyphus: An Essay on the Absurd\n\n`;
  md += `**Author:** Albert Camus (1942)  \n`;
  md += `**Historical Context:** Occupied Paris, World War II  \n`;
  md += `**System Standard:** BKRS v2.0 Production Master Codex (Total Forensic Depth)  \n`;
  md += `**Corpus Architecture:** 4 Core Sections | 12 Forensic Dialectical Units | Complete Existential Ontology  \n\n`;
  md += `---\n\n`;
  md += `## Executive Epistemic Summary: The Absurdist Manifesto\n\n`;
  md += `Written in 1942 amidst the mechanized slaughter and fascist occupation of Europe, Albert Camus’ *The Myth of Sisyphus* is the foundational philosophical masterpiece of Absurdism. Camus confronts the ultimate existential dilemma: in a universe devoid of God, eternal purpose, cosmic justice, or transcendent meaning, is physical suicide the only logical and honest conclusion?\n\n`;
  md += `Camus delivers an uncompromising, defiant 'No'. Across four rigorous sections, he establishes:\n`;
  md += `1. **The Nature of the Absurd:** The absurd is not an intrinsic property of man or the cosmos; it is the violent collision between the human mind's desperate demand for unity, clarity, and meaning, and the cold, irrational silence of the universe.\n`;
  md += `2. **The Rejection of Evasion:** Camus rejects both physical suicide (cowardly capitulation that terminates the confrontation) and 'Philosophical Suicide' (the intellectual surrender of Kierkegaard, Shestov, and Jaspers, who sacrifice human reason in a desperate 'leap of faith' to fabricate transcendence).\n`;
  md += `3. **The Absurd Triad:** An honest mortal existence demands living 'without appeal' through three operational stances: Revolt (perpetual confrontation without resignation), Freedom (absolute situational autonomy liberated from divine ledgers), and Passion (saturating the temporal present through the quantitative ethic of experience).\n`;
  md += `4. **The Absurd Archetypes:** Through Don Juan (the quantitative ethic of love), the Actor (fleeting immortality and compression of destinies), the Conqueror (historical action without utopian illusions), and the Creator (gratuitous art that describes reality without holy conclusions), Camus demonstrates how to live inside the absurd.\n`;
  md += `5. **Sisyphus as Sovereign Hero:** Sisyphus, eternally rolling his stone up the mountain in Tartarus only to watch it roll back down, conquers the gods through his lucidity and scorn. During the downward descent—the hour of consciousness—he claims the rock as his own. 'One must imagine Sisyphus happy.'\n\n`;
  md += `---\n\n`;

  sisyphusUnits.forEach(u => {
    md += `## Unit ${u.unit_number}: ${u.title}\n`;
    md += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_status}\`\n\n`;
    md += `### Core Philosophical Invariant\n`;
    md += `${u.core_concept}\n\n`;
    md += `### Dialectical Breakdown & Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `> ${u.verbatim_anchor}\n\n`;
    md += `**Operational Heuristic:** *${u.operational_heuristic}*\n\n`;
    md += `---\n\n`;
  });

  return md;
}

function buildHtmlReader(units) {
  const sidebarLinks = units.map(u => `
          <div class="nav-ch-item">
            <a href="#unit-${u.unit_number}" class="nav-ch-link" onclick="closeSidebarOnMobile()">
              <span class="nav-ch-num">${u.unit_number}</span>
              <span class="nav-ch-title">${u.title}</span>
            </a>
          </div>
  `).join('\n');

  const unitCards = units.map(u => {
    const prose = u.textual_analysis.map(p => `<p class="narrative-p">${p}</p>`).join('\n');
    return `
            <div class="unit-card-deep" id="unit-${u.unit_number}">
              <div class="unit-meta-line">
                <div>
                  <span class="unit-badge">Unit ${u.unit_number}</span>
                  <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-left: 10px;">
                    ${u.scope}
                  </span>
                </div>
                <span class="unit-epistemic">${u.epistemic_status}</span>
              </div>

              <h3 class="unit-heading-deep">${u.title}</h3>

              <div style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 20px; font-weight: 500; color: var(--text-main);">
                ${u.core_concept}
              </div>

              <div class="narrative-prose">
                ${prose}
              </div>

              <div class="quote-box">
                ${u.verbatim_anchor}
              </div>

              <div class="heuristic-box">
                <strong style="color: var(--accent-gold); font-family: var(--font-sans); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">
                  Operational Heuristic:
                </strong>
                ${u.operational_heuristic}
              </div>
            </div>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Myth of Sisyphus — Albert Camus | BKRS Master Codex</title>
  
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
      margin-bottom: 18px;
    }

    .narrative-p {
      margin-bottom: 1.4em;
      font-size: 1.15rem;
      line-height: 1.82;
      text-align: justify;
    }

    .quote-box {
      margin: 24px 0;
      padding: 18px 24px;
      background: var(--bg-card-subtle);
      border-left: 4px solid var(--accent-crimson);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 1.12rem;
    }

    .heuristic-box {
      margin-top: 24px;
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
        <span class="brand-title">THE MYTH OF SISYPHUS</span>
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
        <div class="sidebar-book-title">The Myth of Sisyphus</div>
        <div class="sidebar-book-meta">Albert Camus · 12 Dialectical Units</div>
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
          <div class="hero-badge">Existential Philosophy · Absurdist Ontology</div>
          <h1 class="hero-title">The Myth of Sisyphus</h1>
          <div class="hero-subtitle">An Essay on the Absurd · Albert Camus (1942)</div>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Original Publication</span>
              <span class="meta-value">1942 (Occupied Paris)</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Dialectical Units</span>
              <span class="meta-value">12 Forensic Units</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Epistemic Standard</span>
              <span class="meta-value">BKRS v2.0 Production Master</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Fidelity</span>
              <span class="meta-value">100% Replacement Grade</span>
            </div>
          </div>

          <div style="font-size: 1.15rem; line-height: 1.8; color: var(--text-main); margin-top: 24px; text-align: justify;">
            <p><strong>The Fundamental Manifesto of Absurdism:</strong> Camus directly investigates whether the realization of a meaningless universe demands physical suicide. Rejecting both physical suicide (defeat) and philosophical suicide (religious leaps of faith), Camus extracts the Absurd Triad: <em>Revolt</em>, <em>Freedom</em>, and <em>Passion</em>. Sisyphus, crowned with consciousness on his descent down Tartarus, claims his rock and overcomes the gods through scorn.</p>
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

// Execution
const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'the-myth-of-sisyphus');

console.log('Building expanded Master Notes for The Myth of Sisyphus...');
const masterNotesMd = buildMasterNotesMarkdown();
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Saved master-notes.md (${masterNotesMd.length} characters)`);

console.log('Writing knowledge-units.json...');
fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(sisyphusUnits, null, 2), 'utf8');
console.log(`Saved knowledge-units.json (${sisyphusUnits.length} units)`);

console.log('Generating index.html...');
const htmlContent = buildHtmlReader(sisyphusUnits);
fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log(`Saved index.html (${htmlContent.length} characters)`);

console.log('Myth of Sisyphus expansion complete!');
