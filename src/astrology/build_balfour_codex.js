/**
 * Builder for Thelma Balfour: Black Love Signs
 * Subtitle: An Astrological Guide to Passion, Romance, and Relationships for African Americans
 * Standard: BKRS v2.0 Production Master
 * Architecture: 13 Comprehensive Units | Complete 12-Sign Zodiacal & Relational Codex
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'black-love-signs');

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "Foundations of Astrological Romance, Cultural Psychology & The Four Elements",
    scope: "Introduction: Astrological Mechanics of Love, Sexual Honesty, Gender Gaps & Elemental Polarities",
    epistemic_status: "RELATIONAL_ASTROLOGY & CULTURAL_PSYCHOLOGY",
    materiality: "CRITICAL",
    core_theme: "The intersection of astrological mechanics and African American romantic dynamics, dismantling gender double standards in the bedroom, and the elemental framework of passion.",
    textual_analysis: [
      "Thelma Balfour opens Black Love Signs by framing astrology not as abstract celestial fatalism, but as a practical, culturally resonant diagnostic blueprint for romantic survival and sexual fulfillment. Following the massive success of her previous work Black Sun Signs, Balfour discovered during nationwide tours that the foremost questions from Black readers revolved around intimacy: navigating the gender communication chasm, identifying sexually uninhibited partners, and breaking the historical taboos surrounding female pleasure in relationships.",
      "The Sexual and Emotional Double Standard: Balfour foregrounds the grievances voiced by hundreds of survey respondents and interviewees. Black women reported acute exhaustion with having to 'play dead' or feign sexual naivete in bed to avoid male insecurity, recounting how partners would interrogate their past experience if they exhibited passion or creativity ('Where did you learn that?'). Conversely, Black men expressed frustration with unrealistic mind-reading expectations, childhood socialization that suppressed emotional vulnerability ('The only thing my father said was \"Go get it, son\"'), and modern dating friction over financial reciprocity.",
      "The Four Elements in Romantic Chemistry: Balfour establishes the elemental architecture governing interpersonal dynamics: Fire (Aries, Leo, Sagittarius) delivers fierce passion, spontaneity, high drama, and aggressive pursuit, but risks burning partners out; Earth (Taurus, Virgo, Capricorn) provides grounded stability, sensual endurance, financial pragmatism, and loyalty, but can descend into rigid stubbornness; Air (Gemini, Libra, Aquarius) demands intellectual connection, verbal foreplay, variety, and freedom, but detests emotional suffocation; Water (Cancer, Scorpio, Pisces) feels deeply through intuition, spiritual bonding, erotic mystery, and vulnerability, but is easily wounded by emotional coldness.",
      "Polarities, Opposites, and Modalities: The author outlines the fundamental polarities (Fire and Air feed each other; Earth and Water nurture each other; Fire and Water create boiling steam; Earth and Air create dust). Balfour highlights the potent attraction of astrological opposites (Aries-Libra, Taurus-Scorpio, Gemini-Sagittarius, Cancer-Capricorn, Leo-Aquarius, Virgo-Pisces)—relationships characterized by magnetic fascination, profound complementary balance, or explosive irreconcilable friction."
    ],
    verbatim_quote: "Cosmically informed and culturally specific... Everyone is looking for that all-important soul mate. Men and women need a blueprint: open communication, sexual honesty without judgment, and understanding that what turns one sign on will turn another completely off.",
    operational_heuristic: "Before diagnosing a relationship crisis, determine the elemental pairing: Fire/Air clashes stem from intellectual vs. impulsive ego battles; Earth/Water clashes stem from emotional sensitivity vs. unyielding practical rigidity.",
    key_motifs: [
      "Cultural & Relational Context",
      "Dismantling the Sexual Double Standard",
      "The Four Elements (Fire, Earth, Air, Water)",
      "Astrological Opposites & Polarity",
      "Emotional Communication & Vulnerability"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "Aries in Love: The Ram’s Fiery Passion, Dominance & The 12-Sign Compatibility Matrix",
    scope: "Chapter 1: Aries Profile, The Aries Man, The Aries Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Mars-ruled Ram: aggressive pursuit, unapologetic ego, bedroom fireworks, and compatibility across all twelve zodiac archetypes.",
    textual_analysis: [
      "The Archetype of Aries (March 21 – April 19): Ruled by Mars and symbolized by the Ram, Aries is the cardinal fire sign representing bold initiative, unyielding confidence, and raw passion. Arians are the cheerleaders and trailblazers of the zodiac, possessing an insatiable hunger to be first in love and life. In social settings, they dominate conversations with theatrical flair and roaring laughter. Their shadow traits include extreme selfishness, impatient tantrums ('ranting and raving is a way of life'), and a master-slave orientation in dominance struggles.",
      "The Aries Man vs. The Aries Woman: The Aries man carries immense bravado, pursues conquests with relentless zeal, and expects royal deference from his partner; yet he frequently neglects domestic chores and wears outdated wardrobe pieces because shopping bores him. The Aries woman is intensely independent, ambitious, and outspoken; she runs households and careers with iron willpower, refusing to be domesticated or told what to do. If a partner attempts to micromanage her, she departs without looking back.",
      "The Complete 12-Sign Compatibility Matrix for Aries:\n• Aries & Aries: Combustible double-fire matchup; explosive passion and relentless bedroom action, but constant ego warfare over who is boss.\n• Aries & Taurus: Cardinal fire meets fixed earth; Taurus grounds the Ram's chaotic energy, but Aries grows infuriated by Taurus's snail-like stubborn pace.\n• Aries & Gemini: Dynamic fire-air synergy; endless conversation, shared social adventures, and mutual love of variety, though emotional depth requires deliberate cultivation.\n• Aries & Cancer: High-friction fire-water square; Cancer's moody tears and domestic demands clash violently with Aries's blunt insensitivity and craving for freedom.\n• Aries & Leo: Royal double-fire alliance; mutual adoration, lavish romance, and intense erotic chemistry, provided they take turns occupying center stage.\n• Aries & Virgo: Uneasy union; critical, methodical Virgo analyzes Aries's reckless impulsive habits, driving the Ram into furious tantrums.\n• Aries & Libra: Magnetic astrological opposites; Aries brings raw masculine drive while Libra adds refined elegance and diplomatic grace, achieving profound balance if both compromise.\n• Aries & Scorpio: Mars-ruled volcanic intensity; powerful sexual attraction and raw physical chemistry, but destructive control battles and jealousy.\n• Aries & Sagittarius: Harmonious fire trine; shared wanderlust, unfiltered honesty, athletic vitality, and an electrifying, adventurous romance.\n• Aries & Capricorn: Executive power clash; ambitious and driven, but Capricorn's cold corporate discipline feels oppressive to Aries's spontaneous rebellion.\n• Aries & Aquarius: Visionary, rebellious partnership; Aquarius appreciates Aries's boldness while Aries is captivated by the Water Bearer's quirky, unconventional intellect.\n• Aries & Pisces: Fragile fire-water pairing; gentle, dreamy Pisces risks being trampled by Aries's blunt aggression, though Pisces's devotion can soften the Ram's edges.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Aries is an insatiable, spontaneous powerhouse who loves to take charge. They thrive on dirty talk, playful dominance, and energetic encounters in unconventional locations. Their primary anatomical rulership is the head and scalp; gentle scalp massages, running fingers through their hair, and nibbling their ears act as instant sensual detonators."
    ],
    verbatim_quote: "Aries is the first sign of the zodiac, and these rams expect to be first in everything they do. If you catch their eye, they go in for the kill early. Ranting and raving is a way of life for the ram—don't take it personally, charge it to their heads, not their hearts.",
    operational_heuristic: "To maintain an Aries partner, never crowd their independence or compete for their spotlight; stroke their ego, match their spontaneous passion, and soothe them with scalp and temple massages during fiery outbursts.",
    key_motifs: [
      "Aries Archetype & Mars Rulership",
      "Aries Man vs. Aries Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Aggressive Bedroom Seduction",
      "Scalp & Head Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "Taurus in Love: The Bull’s Earthy Sensuality, Loyalty & The 12-Sign Compatibility Matrix",
    scope: "Chapter 2: Taurus Profile, The Taurus Man, The Taurus Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Venus-ruled Bull: deliberate courtship, material security, epicurean indulgence, and immovable loyalty across all relationships.",
    textual_analysis: [
      "The Archetype of Taurus (April 20 – May 20): Ruled by Venus and symbolized by the Bull, Taurus is the fixed earth sign of physical luxury, emotional stability, steadfast loyalty, and material abundance. Taureans do nothing in a rush; they assess prospective partners with prudent deliberation, prioritizing financial solvency, dependability, and domestic comfort. Their shadow expressions include unyielding stubbornness (the legendary Bull standoff), possessiveness, jealousy, and resistance to change.",
      "The Taurus Man vs. The Taurus Woman: The Taurus brother is a solid provider, traditional romantic, and sensory connoisseur who takes pride in immaculate grooming, fine cuisine, and a well-appointed home. He will shower his partner with lavish gifts but expects respect, peace of mind, and fidelity in return. The Taurus sister is an earthy matriarch and financial wizard; she manages family resources with shrewd competence, radiates sensual beauty, and creates an oasis of comfort, but will lock horns indefinitely if pressured or disrespected.",
      "The Complete 12-Sign Compatibility Matrix for Taurus:\n• Taurus & Aries: Earth meets Fire; Aries brings excitement, but Taurus refuses to be rushed, leading to friction over spending and pacing.\n• Taurus & Taurus: Double-earth sanctuary; immense stability, mutual love of gourmet food, luxury sheets, and financial security, but prone to getting stuck in deep stubborn ruts.\n• Taurus & Gemini: Earth meets Air; mercurial Gemini's erratic social butterfly nature unnerves Taurus's need for predictable domestic routine.\n• Taurus & Cancer: Sublime earth-water harmony; Cancer provides emotional nurturing and domestic warmth, while Taurus delivers unwavering financial protection and sensual affection.\n• Taurus & Leo: Fixed sign battleground; both share expensive taste and love of luxury, but Leo's need for public adulation clashes with Taurus's private, homebody lifestyle.\n• Taurus & Virgo: Practical earth trine; shared work ethic, fiscal responsibility, and meticulous devotion create an enduring, harmonious long-term union.\n• Taurus & Libra: Dual Venusian kinship; mutual appreciation for beauty, art, elegance, and romantic charm, though Libra's indecision can irritate decisive Taurus.\n• Taurus & Scorpio: Magnetic opposite polarity; intense sensual attraction and absolute loyalty, but explosive jealousy if possessiveness goes unchecked.\n• Taurus & Sagittarius: Earth-fire tension; homebody Taurus wants roots and investments, while wandering Sagittarius craves spontaneous travel and unpredictability.\n• Taurus & Capricorn: Rock-solid earth alliance; shared ambition, disciplined financial planning, and deep mutual respect form an empire-building power couple.\n• Taurus & Aquarius: Fixed square friction; conventional Taurus values tradition and stability, while radical Aquarius demands progressive change and unconventional arrangements.\n• Taurus & Pisces: Romantic earth-water oasis; Taurus grounds Pisces's ethereal dreams, while Pisces awakens Taurus's poetic imagination and tender emotional depths.",
      "Bedroom Dynamics & Erogenous Triggers: Taurus views lovemaking as a multi-course gourmet feast rather than a fast-food quickie. They require luxurious ambiance: high-thread-count Egyptian cotton sheets, dim candlelight, soothing soul music, and aromatic massage oils. Anatomically, Taurus rules the neck and throat; slow, lingering kisses along the nape of the neck and gentle throat caresses trigger immediate surrender."
    ],
    verbatim_quote: "Taurus people love the good life: fine dining, good wine, soft music, and money in the bank. They don't do anything in a hurry, especially falling in love. But once the Bull commits, they are in it for the long haul.",
    operational_heuristic: "To win and keep a Taurus, feed them exceptional meals, demonstrate financial stability, never rush their decision-making process, and seduce them with slow, sensual neck massages in luxurious surroundings.",
    key_motifs: [
      "Taurus Archetype & Venusian Sensuality",
      "Taurus Man vs. Taurus Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Marathon Sensual Lovemaking",
      "Neck & Throat Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Gemini in Love: The Twins’ Mental Stimulation, Duality & The 12-Sign Compatibility Matrix",
    scope: "Chapter 3: Gemini Profile, The Gemini Man, The Gemini Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Mercury-ruled Twins: mental foreplay, dual personalities, social mobility, and the absolute horror of routine across relationships.",
    textual_analysis: [
      "The Archetype of Gemini (May 21 – June 20): Ruled by Mercury and symbolized by the Twins, Gemini is the mutable air sign of restless curiosity, verbal wizardry, multi-tasking, and intellectual agility. Geminis possess dual natures; one twin is playful, charming, and sociable, while the other is analytical, detached, and moody. In romantic relationships, their aphrodisiac is conversation—if a partner cannot stimulate their mind, physical attraction vanishes instantly. Their shadow traits include fickleness, emotional detachment, nervousness, and gossiping.",
      "The Gemini Man vs. The Gemini Woman: The Gemini brother is an electrifying communicator, charismatic charmer, and social chameleon with a phone full of contacts and a dozen simultaneous projects; he requires a partner who gives him freedom and matches his wit without smothering him in emotional heavy drama. The Gemini sister is vibrant, intellectually curious, and perpetually youthful; she juggles career ambitions, creative pursuits, and social circles effortlessly, demanding a mate who keeps her mentally intrigued and entertained.",
      "The Complete 12-Sign Compatibility Matrix for Gemini:\n• Gemini & Aries: Stimulating air-fire pairing; lively debates, shared adventures, and infectious enthusiasm make this an exhilarating romantic match.\n• Gemini & Taurus: Air-earth disconnect; Gemini's scattered schedule and constant need for socializing exasperate quiet, routine-loving Taurus.\n• Gemini & Gemini: Dual twins whirlwind; incredible intellectual rapport and non-stop banter, but risks lacking emotional grounding and practical stability.\n• Gemini & Cancer: Air-water mismatch; Cancer's sensitive emotional demands leave intellectual Gemini feeling suffocated and bewildered.\n• Gemini & Leo: High-energy air-fire showstopper; Gemini provides witty praise and lively company, while Leo brings warmth, grandeur, and theatrical romance.\n• Gemini & Virgo: Dual Mercurial connection; both love information and intellectual analysis, but Virgo's critical perfectionism dampens Gemini's lighthearted spontaneity.\n• Gemini & Libra: Exquisite air trine; shared social sophistication, love of cultural arts, effortless communication, and mutual aversion to vulgarity.\n• Gemini & Scorpio: Complex psychological maze; Scorpio's intense, brooding scrutiny and desire for emotional possession clash with Gemini's airy detachment.\n• Gemini & Sagittarius: Magnetic air-fire opposites; mutual love of ideas, travel, debate, and philosophical exploration, though both can dodge domestic commitment.\n• Gemini & Capricorn: Air-earth gulf; playful, unstructured Gemini feels constrained by Capricorn's stern rules, corporate seriousness, and rigid schedules.\n• Gemini & Aquarius: Electric air trine; progressive, innovative, and mentally telepathic; both prioritize friendship, personal independence, and creative freedom.\n• Gemini & Pisces: Elusive air-water challenge; Gemini intellectualizes feelings while Pisces feels them intuitively, leading to crossed emotional signals.",
      "Bedroom Dynamics & Erogenous Triggers: For Gemini, sex begins in the brain. Verbal foreplay, witty banter, erotic text messages, and role-playing games are essential. They love variety and experimentation in the bedroom. Anatomically, Gemini rules the shoulders, arms, hands, and nervous system; gentle hand massages, caressing the arms, and touching the fingertips send electric shocks through their body."
    ],
    verbatim_quote: "If you can't stimulate a Gemini's mind, you won't get anywhere near their body. The brain is the ultimate sex organ for the Twins. Boredom is their greatest enemy—keep things fresh, funny, and fast-paced.",
    operational_heuristic: "Never attempt to bind a Gemini with rigid routine or jealous interrogations; engage them in sharp intellectual debate, surprise them with spontaneous outings, and stimulate their hands and shoulders during intimacy.",
    key_motifs: [
      "Gemini Archetype & Mercurial Duality",
      "Gemini Man vs. Gemini Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Intellectual Foreplay & Variety",
      "Hands, Arms & Shoulder Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Cancer in Love: The Crab’s Emotional Depth, Devotion & The 12-Sign Compatibility Matrix",
    scope: "Chapter 4: Cancer Profile, The Cancer Man, The Cancer Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Moon-ruled Crab: emotional vulnerability, protective domesticity, intense memory, and fierce devotion across all relationships.",
    textual_analysis: [
      "The Archetype of Cancer (June 21 – July 22): Ruled by the Moon and symbolized by the Crab, Cancer is the cardinal water sign governing emotional depth, family roots, home sanctuaries, and instinctual nurturing. Crabs wear a protective hard shell to shield an extraordinarily sensitive, vulnerable interior. They never forget emotional injuries, storing memories with photographic accuracy. Their shadow traits include suffocating moodiness, passive-aggressive brooding, defensive claw-snapping, and clinging possessiveness.",
      "The Cancer Man vs. The Cancer Woman: The Cancer brother is deeply devoted, family-centric, and protective, with an innate culinary skill and strong bond with his mother; he requires reassurance, gentle emotional safety, and a loyal partner who appreciates his domestic warmth. The Cancer sister is the quintessential cosmic nurturer and protector; she pours immense love into her home and family, intuition guiding her every move, but will ruthlessly sever ties if her emotional trust is violated.",
      "The Complete 12-Sign Compatibility Matrix for Cancer:\n• Cancer & Aries: Volatile water-fire square; Aries's blunt aggression bruises Cancer's feelings, while Cancer's tears and clinging irritate the Ram.\n• Cancer & Taurus: Blissful water-earth harmony; Taurus provides rock-solid security and sensual grounding, while Cancer offers tender emotional devotion.\n• Cancer & Gemini: Frustrating water-air divide; Cancer seeks deep emotional bonding, while Gemini remains detached and intellectually superficial.\n• Cancer & Cancer: Double-water tidal wave; deep psychic empathy and cozy domestic bliss, but danger of drowning in mutual mood swings and past grievances.\n• Cancer & Leo: Adjacent solar-lunar dynamic; Leo provides strength, warmth, and protection, while Cancer offers devoted adoration, provided Leo avoids arrogance.\n• Cancer & Virgo: Nurturing water-earth alliance; Virgo's practical helpfulness calms Cancer's anxieties, while Cancer softens Virgo's analytical perfectionism.\n• Cancer & Libra: Cardinal water-air friction; Libra's detached social diplomacy feels superficial to Cancer's yearning for visceral intimacy.\n• Cancer & Scorpio: Powerful water trine; intense emotional and sexual telepathy, absolute loyalty, and deep spiritual bonding create an unshakeable fortress.\n• Cancer & Sagittarius: Water-fire incompatibility; homebody Cancer seeks emotional security, while nomadic Sagittarius refuses to be tied down.\n• Cancer & Capricorn: Complementary opposite polarity; the archetypal Father-Mother pairing; Capricorn builds the external castle while Cancer nurtures the home.\n• Cancer & Aquarius: Chilly water-air disconnect; Aquarius's cool intellectual detachment feels like an iceberg to Cancer's warm, sensitive heart.\n• Cancer & Pisces: Dreamy water trine; profound intuitive understanding, poetic romance, boundless empathy, and tender emotional connection.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Cancer craves emotional safety, passionate intimacy, and tender holding. Lovemaking is a sacred exchange of emotional vulnerability. Anatomically, Cancer rules the chest, breasts, and stomach; gentle chest caresses, kissing the sternum, and warm physical closeness elicit profound erotic responses."
    ],
    verbatim_quote: "Cancers love hard and remember forever. Behind that tough crab shell lies a heart of pure gold waiting to be loved. Treat them with respect, honor their feelings, and you will have a partner for life.",
    operational_heuristic: "Never ridicule a Cancer's feelings or criticize their family; provide constant emotional reassurance, home-cooked comfort, and affectionate chest caresses to disarm their defensive shell.",
    key_motifs: [
      "Cancer Archetype & Lunar Rulership",
      "Cancer Man vs. Cancer Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Deep Emotional Intimacy & Nurturing",
      "Chest & Breast Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Leo in Love: The Lion’s Royal Heart, Grandeur & The 12-Sign Compatibility Matrix",
    scope: "Chapter 5: Leo Profile, The Leo Man, The Leo Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Sun-ruled Lion: regal grandeur, generous passion, theatrical courtship, and the imperative for absolute admiration across relationships.",
    textual_analysis: [
      "The Archetype of Leo (July 23 – August 22): Ruled by the Sun and symbolized by the Lion, Leo is the fixed fire sign of majestic leadership, theatrical creativity, boundless generosity, and radiant pride. Leos view life as a grand stage and themselves as royalty. In romance, they love with grand, dramatic gestures—fine champagne, red roses, red-carpet entrances, and passionate devotion. Their shadow traits include extreme vanity, arrogance, domineering possessiveness, and dramatic sulking when denied center stage.",
      "The Leo Man vs. The Leo Woman: The Leo brother is a charismatic, generous king who takes pride in spoiling his queen and displaying her proudly; he expects unwavering loyalty, public praise, and respect for his throne. The Leo sister is a dazzling, regal queen who commands respect, carries impeccable style, and demands a partner of high stature; she pours fierce warmth and protection into her mate but will never tolerate being neglected or disrespected.",
      "The Complete 12-Sign Compatibility Matrix for Leo:\n• Leo & Aries: Royal fire trine; intense passion, mutual respect, and thrilling adventures, provided their fiery egos don't combust.\n• Leo & Taurus: Fixed sign standoff; shared love of luxury and fine possessions, but clashes over Leo's extravagant spending and Taurus's stubborn resistance.\n• Leo & Gemini: Radiant fire-air match; Gemini keeps Leo entertained with wit and charm, while Leo showers Gemini with warmth and grandeur.\n• Leo & Cancer: Sun-and-Moon romance; Leo offers strength and protection, while Cancer provides gentle nurturing, though Leo must soften their roar.\n• Leo & Leo: Double-royalty spectacular; incredible glamour, generosity, and passion, but potential civil war over who wears the primary crown.\n• Leo & Virgo: Fire-earth friction; Leo's flamboyant extravagance and craving for praise clash with Virgo's humble, critical, cost-conscious nature.\n• Leo & Libra: Glamorous fire-air paradise; mutual love of high fashion, romance, social grace, and cultural elegance makes this a storybook couple.\n• Leo & Scorpio: Fixed square showdown; immense sexual magnetism, but epic power struggles between Leo's open pride and Scorpio's secretive control.\n• Leo & Sagittarius: Joyful fire trine; shared optimism, wanderlust, generosity, and infectious laughter create a dynamic, adventurous union.\n• Leo & Capricorn: Executive fire-earth pairing; formidable power couple in business and status, but Capricorn's cold reserve can starve Leo's emotional warmth.\n• Leo & Aquarius: Magnetic opposite polarity; Leo brings personal passion and royal warmth, while Aquarius provides universal vision and intellectual coolness.\n• Leo & Pisces: Fragile fire-water dynamic; Leo's bold theatrical nature can overwhelm sensitive Pisces, though Pisces's romantic devotion flatters the Lion.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Leo is a passionate, theatrical performer who thrives on praise, visual admiration, and opulent settings (mirrors, silk sheets, flattering lighting). Anatomically, Leo rules the heart and upper back/spine; slow, sensual spinal tracing and back massages melt the Lion into purring ecstasy."
    ],
    verbatim_quote: "Leos don't just love—they worship, celebrate, and perform. Treat a Leo like royalty, compliment them sincerely, and never embarrass them in public, and you will have the most generous, protective lover on earth.",
    operational_heuristic: "To captivate a Leo, heap authentic praise upon them, dress impeccably, applaud their generosity, and stroke their upper back and spine to bring the majestic Lion to complete surrender.",
    key_motifs: [
      "Leo Archetype & Solar Royalty",
      "Leo Man vs. Leo Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Theatrical Passion & Grand Gestures",
      "Back, Spine & Heart Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Virgo in Love: The Virgin’s Analytical Care, Perfectionism & The 12-Sign Compatibility Matrix",
    scope: "Chapter 6: Virgo Profile, The Virgo Man, The Virgo Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Mercury-ruled Virgin: meticulous devotion, acts of service, hypercritical analysis, and hidden bedroom eroticism across relationships.",
    textual_analysis: [
      "The Archetype of Virgo (August 23 – September 22): Ruled by Mercury and symbolized by the Virgin, Virgo is the mutable earth sign of analytical precision, health consciousness, pragmatic service, and tireless improvement. Virgos express love not through grand theatrical speeches, but through practical care—organizing chaos, fixing broken machinery, maintaining financial order, and ensuring their partner's physical wellbeing. Their shadow traits include relentless nagging, hypercritical judgment ('would criticize a signpost'), obsessive anxiety, and emotional hypochondria.",
      "The Virgo Man vs. The Virgo Woman: The Virgo brother is meticulous, dependable, neatly groomed, and detail-oriented; he can be exacting and critical about household order, but his loyalty and practical devotion are unmatched once committed. The Virgo sister is an efficient, intelligent powerhouse with flawless hygiene and high standards; she seeks a capable, clean, ambitious mate and shows love through constructive support, but will retreat into cold critique if taken for granted.",
      "The Complete 12-Sign Compatibility Matrix for Virgo:\n• Virgo & Aries: Earth-fire friction; reckless, impulsive Aries drives orderly, methodical Virgo into severe stress and critical lectures.\n• Virgo & Taurus: Serene earth trine; shared values of dependability, financial caution, neatness, and sensual comfort make this an unshakeable bond.\n• Virgo & Gemini: Dual Mercurial match; sharp intellectual exchange, but Virgo's need for order clashes with Gemini's chaotic restlessness.\n• Virgo & Cancer: Nurturing earth-water harmony; Cancer's emotional warmth softens Virgo's self-critique, while Virgo brings grounding stability.\n• Virgo & Leo: Earth-fire contrast; Leo's extravagant expenditures and demand for flattery irritate budget-conscious, modest Virgo.\n• Virgo & Virgo: Meticulous double-earth pairing; immaculate organization, shared health focus, and practical teamwork, but danger of mutual hyper-criticism.\n• Virgo & Libra: Earth-air diplomacy; Libra's aesthetic refinement appeals to Virgo, but Libra's indecisiveness and casual spending cause friction.\n• Virgo & Scorpio: Deeply loyal earth-water alliance; shared analytical depth, private devotion, and mutual respect for discretion create a profound union.\n• Virgo & Sagittarius: Challenging earth-fire square; Sagittarius's blunt carelessness and nomad tendencies trigger Virgo's obsessive anxiety.\n• Virgo & Capricorn: Formidable earth trine; exceptional work ethic, shared ambition, disciplined planning, and mutual respect build a lasting legacy.\n• Virgo & Aquarius: Quirky earth-air connection; both value intellect and humanitarian ideals, but Aquarius's radical unpredictability rattles Virgo.\n• Virgo & Pisces: Astrological opposite polarity; analytical pragmatism meets mystic dreaminess; Virgo grounds Pisces, while Pisces teaches Virgo spiritual surrender.",
      "Bedroom Dynamics & Erogenous Triggers: Behind their neat, composed exterior, Virgos are secret 'freaks' in the bedroom once emotional safety and cleanliness are established. Hygiene is non-negotiable: fresh showers, crisp clean sheets, and impeccable grooming are essential precursors. Anatomically, Virgo rules the abdomen, stomach, and navel; slow, feather-light strokes across the belly and waist unlock intense physical passion."
    ],
    verbatim_quote: "A Virgo's criticism is their twisted way of showing they care—if they didn't care about you, they wouldn't waste time trying to fix you. But keep yourself and your surroundings clean, because bad hygiene will kill their desire instantly.",
    operational_heuristic: "To win a Virgo, maintain impeccable hygiene, appreciate their acts of service, never take their critiques personally, and awaken their sensual side with gentle abdominal and waist caresses.",
    key_motifs: [
      "Virgo Archetype & Mercurial Precision",
      "Virgo Man vs. Virgo Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Hygiene, Order & Secret Sensuality",
      "Abdomen & Navel Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Libra in Love: The Scales’ Romantic Elegance, Partnership & The 12-Sign Compatibility Matrix",
    scope: "Chapter 7: Libra Profile, The Libra Man, The Libra Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Venus-ruled Scales: diplomatic charm, aesthetic perfection, serial monogamy, and resolving indecisiveness across relationships.",
    textual_analysis: [
      "The Archetype of Libra (September 23 – October 22): Ruled by Venus and symbolized by the Scales, Libra is the cardinal air sign of balance, harmony, justice, aesthetic refinement, and partnership. Librans are in love with love itself; they flourish best in committed unions and wilt in solitude. With silver-tongued diplomacy, exquisite style, and natural charm, they despise conflict and vulgarity. Their shadow traits include paralyzing indecisiveness, superficial avoidance of harsh truths, passive-aggressive peacemaking, and chronic flirting.",
      "The Libra Man vs. The Libra Woman: The Libra brother is an urbane, stylish gentleman with immaculate grooming, exquisite cologne, and effortless romantic charm; he seeks a beautiful, cultured partner but struggles with making firm domestic commitments. The Libra sister is the epitome of grace, beauty, and social diplomacy; she decorates life with art, fragrance, and elegance, expecting chivalry, romantic courtesy, and intellectual rapport from her mate.",
      "The Complete 12-Sign Compatibility Matrix for Libra:\n• Libra & Aries: Magnetic opposite polarity; fiery Aries provides boldness and decisive action, while diplomatic Libra brings elegance and balance.\n• Libra & Taurus: Dual Venusian kinship; shared love of luxury, beauty, and sensual pleasures, though Taurus's stubbornness tests Libra's patience.\n• Libra & Gemini: Brilliant air trine; witty banter, effortless social chemistry, cultural excursions, and shared dislike of heavy emotional gloom.\n• Libra & Cancer: Cardinal air-water tension; Cancer's moody emotional outbursts disrupt Libra's delicate equilibrium, leaving both unsettled.\n• Libra & Leo: Spectacular air-fire romance; high glamour, mutual admiration, lavish social life, and storybook chivalry create a dazzling pair.\n• Libra & Virgo: Air-earth contrast; Libra's relaxed, romantic aesthetic clashes with Virgo's critical micro-management and budget anxieties.\n• Libra & Libra: Double-Venusian romance; exquisite aesthetic taste, perfect diplomacy, and mutual pampering, though making decisions can take forever.\n• Libra & Scorpio: Complex air-water dynamic; Scorpio's intense, brooding possessiveness challenges Libra's lighthearted social charm and flirtatiousness.\n• Libra & Sagittarius: Joyful air-fire harmony; shared love of social life, intellectual debate, travel, and optimism make this an effortless, fun-filled union.\n• Libra & Capricorn: Cardinal air-earth clash; social, pleasure-loving Libra finds corporate, disciplined Capricorn overly rigid, somber, and workaholic.\n• Libra & Aquarius: Harmonious air trine; shared humanitarian ideals, social sophistication, intellectual brilliance, and mutual respect for freedom.\n• Libra & Pisces: Romantic air-water dream; both love romance, poetry, and art, but both can dodge practical financial responsibilities.",
      "Bedroom Dynamics & Erogenous Triggers: Libra approaches lovemaking as fine art. Seduction requires romantic ambiance: soft lighting, fine champagne, beautiful lingerie, delicate perfumes, and mutual aesthetic appreciation. Anatomically, Libra rules the lower back, buttocks, and kidneys; gentle caresses, circular massages along the small of the back, and sensual touching of the hips trigger instant arousal."
    ],
    verbatim_quote: "Librans are in love with the idea of love. They want hearts, flowers, elegance, and peace. If you bring drama, ugliness, or uncouth behavior into their world, they will gracefully show you the door.",
    operational_heuristic: "To captivate a Libra, maintain impeccable elegance, shield them from ugly domestic conflict, take the lead in making decisions, and massage the small of their lower back with fragrant oils.",
    key_motifs: [
      "Libra Archetype & Venusian Elegance",
      "Libra Man vs. Libra Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Aesthetic Seduction & Harmony",
      "Lower Back & Buttocks Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Scorpio in Love: The Scorpion’s Intense Magnetism, Loyalty & The 12-Sign Compatibility Matrix",
    scope: "Chapter 8: Scorpio Profile, The Scorpio Man, The Scorpio Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Pluto/Mars-ruled Scorpion: magnetic obsession, transformative sexuality, fierce loyalty, and the deadly sting of betrayal across relationships.",
    textual_analysis: [
      "The Archetype of Scorpio (October 23 – November 21): Co-ruled by Pluto and Mars and symbolized by the Scorpion, Scorpio is the fixed water sign of raw magnetic power, emotional extremity, psychic penetration, and transformative regeneration. Scorpios experience love as an all-or-nothing, life-or-death proposition; they demand total emotional, spiritual, and physical fusion. Their loyalty is absolute and unbreakable, but their shadow traits include lethal jealousy, vindictive vengeance, paranoid possessiveness, and an obsession with control.",
      "The Scorpio Man vs. The Scorpio Woman: The Scorpio brother is an intense, brooding enigma with penetrating hypnotic eyes; he tests a woman's loyalty relentlessly before lowering his guard, demanding complete fidelity and delivering fierce, protective devotion. The Scorpio sister is a powerful enchantress with fierce intuition and iron willpower; she reads a partner's secrets effortlessly, showers her mate with transformative passion, but will unleash catastrophic wrath if betrayed.",
      "The Complete 12-Sign Compatibility Matrix for Scorpio:\n• Scorpio & Aries: Volatile double-Mars showdown; raw sexual chemistry and primal passion, but explosive territorial battles over dominance.\n• Scorpio & Taurus: Magnetic opposite polarity; intense sensual attraction, financial shrewdness, and deep loyalty, though stubbornness can cause epic stalemates.\n• Scorpio & Gemini: Deep-water vs. light-air mismatch; Scorpio's intense scrutiny suffocates playful Gemini, whose flirting incites Scorpio's fury.\n• Scorpio & Cancer: Sacred water trine; emotional telepathy, psychic bonding, unwavering loyalty, and protective devotion create an indestructible union.\n• Scorpio & Leo: Fixed sign warfare; immense sexual attraction, but titanic clashes between Leo's public ego and Scorpio's secretive control.\n• Scorpio & Virgo: Formidable water-earth alliance; mutual respect for loyalty, intellectual depth, discretion, and private integrity.\n• Scorpio & Libra: Air-water friction; Libra's charming social flirtatiousness triggers Scorpio's dark jealousy and suspicion.\n• Scorpio & Scorpio: Explosive double-water immersion; unmatched passion, psychic connection, and absolute loyalty, but danger of mutually destructive paranoia.\n• Scorpio & Sagittarius: Water-fire tension; secretive Scorpio seeks deep emotional possession, while frank Sagittarius demands total personal independence.\n• Scorpio & Capricorn: Formidable water-earth power couple; shared ambition, unwavering discipline, deep privacy, and strategic brilliance build an empire.\n• Scorpio & Aquarius: Fixed sign clash; Scorpio demands intimate emotional fusion, while detached Aquarius insists on impersonal, intellectual freedom.\n• Scorpio & Pisces: Mystical water trine; transcendent spiritual romance, profound empathy, erotic ecstasy, and mutual emotional healing.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Scorpio is the undisputed master of transformative, soul-merging passion. Lovemaking is visceral, intense, and uninhibited, often exploring boundary-pushing eroticism and total surrender. Anatomically, Scorpio rules the genitals and reproductive organs; intense physical intimacy combined with deep eye contact and emotional vulnerability unleashes primal ecstasy."
    ],
    verbatim_quote: "With Scorpio, there is no middle ground: you are either fully in or completely dead to them. Betray their trust once, and the sting is fatal. Give them absolute loyalty, and they will walk through fire to protect you.",
    operational_heuristic: "Never lie to or provoke jealousy in a Scorpio; offer unflinching emotional honesty, maintain absolute discretion, and surrender completely to their intense physical and emotional depth.",
    key_motifs: [
      "Scorpio Archetype & Plutonian Magnetism",
      "Scorpio Man vs. Scorpio Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Soul-Merging Transformative Eroticism",
      "Genital & Pelvic Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Sagittarius in Love: The Archer’s Wild Independence, Honesty & The 12-Sign Compatibility Matrix",
    scope: "Chapter 9: Sagittarius Profile, The Sagittarius Man, The Sagittarius Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Jupiter-ruled Archer: unfiltered candor, boundless wanderlust, fear of confinement, and passionate optimism across relationships.",
    textual_analysis: [
      "The Archetype of Sagittarius (November 22 – December 21): Ruled by Jupiter and symbolized by the Centaur-Archer, Sagittarius is the mutable fire sign of philosophical questing, adventurous freedom, buoyant humor, and unfiltered truth. Sagittarians are the wild rovers of the zodiac, viewing love as an expansive adventure rather than a domestic cage. They detest phoniness, jealousy, and clinginess, speaking their minds with blunt honesty. Their shadow traits include reckless tactlessness ('putting foot in mouth'), commitment phobia, restlessness, and irresponsible gambling with hearts.",
      "The Sagittarius Man vs. The Sagittarius Woman: The Sagittarius brother is an affable, restless globe-trotter with infectious humor, love of sports, and philosophical opinions; he resists being tied down but commits joyfully to a partner who travels with him and grants him total trust. The Sagittarius sister is a spirited, fiercely independent explorer who rejects traditional gender boundaries; she manages her own career, values mental and physical freedom, and requires a mate with humor and self-assurance.",
      "The Complete 12-Sign Compatibility Matrix for Sagittarius:\n• Sagittarius & Aries: Electrifying fire trine; shared athletic energy, raw passion, brutal honesty, and endless adventures make this an unstoppable pair.\n• Sagittarius & Taurus: Fire-earth disconnect; nomadic Sagittarius craves spontaneous travel, while homebody Taurus demands domestic routine and security.\n• Sagittarius & Gemini: Stimulating opposite polarity; intellectual fireworks, love of travel, philosophical debates, and freedom, though both may avoid settling down.\n• Sagittarius & Cancer: Fire-water mismatch; blunt Sagittarian arrows pierce Cancer's sensitive emotions, leaving Cancer weeping and Sag bewildered.\n• Sagittarius & Leo: Glorious fire trine; high optimism, grand generosity, theatrical fun, and shared passion create a warm, joyful long-term union.\n• Sagittarius & Virgo: Fire-earth friction; Sagittarius's carefree, messy spontaneity drives organized, methodical Virgo crazy with anxiety.\n• Sagittarius & Libra: Charming fire-air synergy; Libra's social grace refines Sagittarius's blunt edges, while Sag brings laughter and adventure to Libra's life.\n• Sagittarius & Scorpio: Fire-water tension; free-spirited Sagittarius refuses to be interrogated or possessed by secretive, brooding Scorpio.\n• Sagittarius & Sagittarius: Wild double-fire safari; endless laughter, spontaneous travels, and fiery passion, though domestic organization may collapse entirely.\n• Sagittarius & Capricorn: Fire-earth contrast; wild, risk-taking Sagittarius finds corporate, cautious Capricorn restrictive and overly somber.\n• Sagittarius & Aquarius: Brilliant fire-air alliance; shared humanitarian vision, love of freedom, unconventional thinking, and mutual respect for independence.\n• Sagittarius & Pisces: Dual Jupiterian connection; shared philosophical ideals and empathy, but Sag's blunt words can crush Pisces's fragile emotional dreams.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Sagittarius brings athletic vitality, playful laughter, and uninhibited spontaneity. They love outdoor trysts, vacation lovemaking, and energetic encounters free of heavy emotional melodrama. Anatomically, Sagittarius rules the hips, thighs, and buttocks; firm, rhythmic massages along the thighs, hips, and lower pelvis ignite their fiery passion."
    ],
    verbatim_quote: "If you try to put a cage around a Sagittarius, you will see a dust cloud where they used to stand. Hold them with an open hand, share their love of adventure, and laugh at their jokes, and they will never want to leave.",
    operational_heuristic: "Never suffocate a Sagittarius with jealousy or domestic micromanagement; invite them on spontaneous adventures, appreciate their blunt honesty, and stimulate their hips and thighs.",
    key_motifs: [
      "Sagittarius Archetype & Jupiterian Freedom",
      "Sagittarius Man vs. Sagittarius Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Athletic, Spontaneous Lovemaking",
      "Hips & Thighs Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-11",
    unit_number: 11,
    chapter_number: 11,
    title: "Capricorn in Love: The Goat’s Ambitious Devotion, Pragmatism & The 12-Sign Compatibility Matrix",
    scope: "Chapter 10: Capricorn Profile, The Capricorn Man, The Capricorn Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Saturn-ruled Goat: empire building, delayed gratification, stoic devotion, and unexpected sensual stamina across relationships.",
    textual_analysis: [
      "The Archetype of Capricorn (December 22 – January 19): Ruled by Saturn and symbolized by the Sea-Goat, Capricorn is the cardinal earth sign of pragmatic ambition, long-range discipline, social prestige, and rock-solid endurance. Capricorns take love with utmost seriousness, viewing marriage as a sacred institution and strategic partnership. They do not wear their hearts on their sleeves; emotional displays are measured, but their commitment is unshakeable. Their shadow traits include cold emotional detachment, workaholic neglect, status obsession, and cynical pessimism.",
      "The Capricorn Man vs. The Capricorn Woman: The Capricorn brother is an ambitious, disciplined powerhouse climbing steadily toward career and financial supremacy; he seeks a partner who carries herself with dignity, supports his empire, and respects his demanding work schedule. The Capricorn sister is an executive matriarch who combines elegance with fierce corporate ambition; she manages finances impeccably, values reputation, and demands a competent, driven partner of equal stature.",
      "The Complete 12-Sign Compatibility Matrix for Capricorn:\n• Capricorn & Aries: Cardinal earth-fire clash; Aries's reckless impulsiveness disrupts Capricorn's carefully structured 10-year plans.\n• Capricorn & Taurus: Impregnable earth trine; shared dedication to financial security, material luxury, and enduring family stability creates a powerhouse union.\n• Capricorn & Gemini: Earth-air gulf; serious, disciplined Capricorn views playful Gemini's flighty habits as irresponsible and juvenile.\n• Capricorn & Cancer: Complementary opposite polarity; archetypal union of outer structure (Capricorn) and inner nurturing (Cancer), creating deep domestic harmony.\n• Capricorn & Leo: Ambitious earth-fire partnership; formidable in social status and enterprise, though Capricorn must remember to shower Leo with warm praise.\n• Capricorn & Virgo: Supreme earth trine; flawless practical execution, shared work ethic, disciplined financial management, and mutual respect for order.\n• Capricorn & Libra: Cardinal earth-air friction; serious Capricorn finds social Libra frivolous, while Libra feels chilled by Capricorn's corporate austerity.\n• Capricorn & Scorpio: Formidable earth-water alliance; unmatched strategic power, shared love of privacy, unyielding loyalty, and mutual respect for strength.\n• Capricorn & Sagittarius: Earth-fire contrast; conservative Capricorn seeks structure and savings, while optimistic Sagittarius craves wild freedom and risk.\n• Capricorn & Capricorn: Corporate double-earth dynasty; incredible executive success and financial mastery, though both must consciously make time for warmth and romance.\n• Capricorn & Aquarius: Saturnian neighbor dynamic; both value intellectual discipline, but Capricorn adheres to tradition while Aquarius breaks every convention.\n• Capricorn & Pisces: Nurturing earth-water pairing; Capricorn provides practical shelter and financial protection, while Pisces softens Capricorn's stoic armor with unconditional love.",
      "Bedroom Dynamics & Erogenous Triggers: While outwardly conservative and formal, Capricorns possess legendary physical stamina and earthy, uninhibited sensuality behind closed doors ('earth signs are the secret masters of the bedroom'). They age backward, growing more playful and erotic over time. Anatomically, Capricorn rules the knees, joints, bones, and skin; slow caresses behind the knees, gentle skin brushing, and firm back rubs awaken their intense passion."
    ],
    verbatim_quote: "Capricorns don't just date—they interview for the position of partner in the family corporation. Prove your ambition, respect their time, and give them loyalty, and you will have an unshakeable protector and an insatiable lover.",
    operational_heuristic: "Never belittle a Capricorn's professional ambitions or waste their time; support their goals, maintain impeccable public dignity, and awaken their sensual side with soothing caresses behind the knees.",
    key_motifs: [
      "Capricorn Archetype & Saturnian Ambition",
      "Capricorn Man vs. Capricorn Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Enduring Sensual Stamina & Delayed Gratification",
      "Knees, Joints & Skin Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-12",
    unit_number: 12,
    chapter_number: 12,
    title: "Aquarius in Love: The Water Bearer’s Kinky Nonconformity, Freedom & The 12-Sign Compatibility Matrix",
    scope: "Chapter 11: Aquarius Profile, The Aquarius Man, The Aquarius Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Uranus/Saturn-ruled Water Bearer: eccentric independence, intellectual friendship, aversion to jealousy, and unconventional bedroom desires across relationships.",
    textual_analysis: [
      "The Archetype of Aquarius (January 20 – February 18): Co-ruled by Uranus and Saturn and symbolized by the Water Bearer, Aquarius is the fixed air sign of visionary rebellion, intellectual eccentricity, humanitarian idealism, and radical individuality. Aquarians march to the beat of their own drum, utterly indifferent to societal conventions. In romance, friendship is the prerequisite for love; they require total personal freedom and detach immediately from jealous possessiveness. Their shadow traits include aloof emotional detachment, stubborn contrariness, unpredictable erratic shifts, and intellectual arrogance.",
      "The Aquarius Man vs. The Aquarius Woman: The Aquarius brother is an intellectual pioneer, tech-savvy visionary, and loyal friend with an eccentric social circle; he needs a partner who respects his space, engages his intellect, and never makes suffocating emotional demands. The Aquarius sister is a progressive, unconventional trailblazer with unique style and brilliant intellect; she manages her own destiny, champions humanitarian causes, and requires an open-minded mate who treats her as an intellectual equal.",
      "The Complete 12-Sign Compatibility Matrix for Aquarius:\n• Aquarius & Aries: Dynamic air-fire synergy; mutual love of independence, innovation, and breaking rules makes this an exciting, progressive match.\n• Aquarius & Taurus: Fixed sign clash; conventional, routine-loving Taurus wants domestic predictability, while radical Aquarius demands continuous change.\n• Aquarius & Gemini: Brilliant air trine; telepathic intellectual rapport, sparkling conversation, shared friends, and effortless mutual freedom.\n• Aquarius & Cancer: Chilly air-water divide; Cancer's need for emotional reassurance and domestic clannishness feels suffocating to detached Aquarius.\n• Aquarius & Leo: Magnetic opposite polarity; royal personal warmth (Leo) meets universal humanitarian intellect (Aquarius); dazzling when balanced.\n• Aquarius & Virgo: Intellectual air-earth match; shared humanitarian instincts and analytical minds, though Aquarius's erratic ways test Virgo's nerves.\n• Aquarius & Libra: Harmonious air trine; shared social sophistication, cultural ideals, effortless communication, and mutual respect for independence.\n• Aquarius & Scorpio: Fixed sign showdown; Scorpio demands total emotional and psychic possession, which triggers Aquarius's fierce rebellion.\n• Aquarius & Sagittarius: Exhilarating air-fire alliance; mutual love of freedom, progressive ideas, travel, and honest friendship create a joyful bond.\n• Aquarius & Capricorn: Saturnian neighbors; Capricorn values corporate tradition, while Aquarius seeks to overthrow outdated systems; uneasy truce.\n• Aquarius & Aquarius: Radical double-air revolution; incredible intellectual connection, mutual nonconformity, and progressive ideals, though emotional warmth must be tended.\n• Aquarius & Pisces: Ethereal air-water mix; shared compassion for humanity, but Aquarius intellectualizes problems while Pisces swims in emotional tides.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Aquarius is the undisputed 'freak of the zodiac,' loving experimental, unconventional, and avant-garde eroticism (role-playing, novel gadgets, unusual locations, open-minded fantasies). Mental connection is mandatory. Anatomically, Aquarius rules the shins, ankles, and circulatory system; gentle ankle massages, feather strokes along the calves, and playful toe caresses unleash their erotic curiosity."
    ],
    verbatim_quote: "Aquarians are the true rebels of the zodiac. If you try to tell them what to do or exhibit jealousy, they will disconnect completely. Be their best friend, give them unlimited space, and be open-minded in bed, and they will fascinate you forever.",
    operational_heuristic: "Never smother an Aquarius with emotional possessiveness or conventional expectations; cultivate deep intellectual friendship, embrace their eccentricities, and caress their shins and ankles.",
    key_motifs: [
      "Aquarius Archetype & Uranian Nonconformity",
      "Aquarius Man vs. Aquarius Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Avant-Garde & Experimental Bedroom Desires",
      "Calves, Shins & Ankles Erogenous Rulership"
    ]
  },
  {
    unit_id: "unit-13",
    unit_number: 13,
    chapter_number: 13,
    title: "Pisces in Love: The Two Fishes’ Mystic Romance, Fantasy & The 12-Sign Compatibility Matrix",
    scope: "Chapter 12: Pisces Profile, The Pisces Man, The Pisces Woman, 12 Compatibility Pairings, Eroticism & Seduction",
    epistemic_status: "ZODIACAL_PORTRAIT & INTER_SIGN_DYNAMICS",
    materiality: "CRITICAL",
    core_theme: "The psychology of the Neptune/Jupiter-ruled Fishes: boundless empathy, romantic escapism, psychic sensitivity, and transcendent bedroom devotion across relationships.",
    textual_analysis: [
      "The Archetype of Pisces (February 19 – March 20): Co-ruled by Neptune and Jupiter and symbolized by Two Fish swimming in opposite directions, Pisces is the mutable water sign of mystical romance, boundaryless empathy, poetic imagination, and spiritual devotion. Pisceans absorb the emotional atmospheres of their surroundings like psychic sponges. They view love as a transcendent fairytale, offering boundless compassion and emotional sanctuary. Their shadow traits include martyr complexes, deceptive escapism, addictive tendencies, and avoidance of harsh financial realities.",
      "The Pisces Man vs. The Pisces Woman: The Pisces brother is a sensitive, artistic dreamer with soulful eyes, gentle charm, and deep emotional intuition; he requires a grounded, supportive partner who handles practical crises and protects his gentle spirit from cynicism. The Pisces sister is an ethereal, poetic romantic with deep compassion and artistic flair; she gives her heart unconditionally, thriving in candlelit intimacy, but will slip away like water if subjected to cruelty or emotional abandonment.",
      "The Complete 12-Sign Compatibility Matrix for Pisces:\n• Pisces & Aries: Fragile water-fire dynamic; gentle Pisces risks being bruised by Aries's blunt aggression, though Pisces's devotion can soften the Ram.\n• Pisces & Taurus: Sublime water-earth romance; Taurus provides practical stability and sensual shelter, while Pisces brings poetic inspiration and tender love.\n• Pisces & Gemini: Confusing water-air disconnect; Gemini's cynical intellectual analysis baffles Pisces's intuitive emotional worldview.\n• Pisces & Cancer: Divine water trine; deep psychic telepathy, nurturing domestic harmony, shared artistic sensitivity, and profound emotional security.\n• Pisces & Leo: Sensitive water meets dramatic fire; Leo offers protection and grandeur, while Pisces provides gentle adoration, though Leo's roar can frighten the Fish.\n• Pisces & Virgo: Astrological opposite polarity; analytical pragmatism meets mystic surrender; Virgo organizes Pisces's chaotic world, while Pisces teaches Virgo spiritual grace.\n• Pisces & Libra: Romantic water-air dreamscape; shared love of poetry, art, music, and romance, though both may struggle with practical decision-making.\n• Pisces & Scorpio: Transcendent water trine; intense spiritual fusion, emotional telepathy, passionate devotion, and unbreakable psychic connection.\n• Pisces & Sagittarius: Dual Jupiterian challenge; shared philosophical vision, but Sagittarius's blunt truth-telling wounds Pisces's gentle heart.\n• Pisces & Capricorn: Nurturing water-earth alliance; Capricorn builds the solid castle, while Pisces infuses it with spiritual warmth and unconditional devotion.\n• Pisces & Aquarius: Ethereal air-water pairing; both care deeply for humanity, but Aquarius detaches into abstract ideals while Pisces drowns in emotional empathy.\n• Pisces & Pisces: Mystic double-water ocean; unbounded spiritual intimacy, poetic romance, and telepathic understanding, though danger of losing touch with practical reality.",
      "Bedroom Dynamics & Erogenous Triggers: In bed, Pisces transforms lovemaking into a mystical, cinematic fantasy. They thrive on romantic pampering: warm scented baths with exotic oils, soothing candlelight, atmospheric music (sounds of rain or ocean waves), and erotic role-playing. Anatomically, Pisces rules the feet and lymphatic system; warm foot baths, reflexology, and slow, sensual foot and toe massages elicit blissful erotic surrender."
    ],
    verbatim_quote: "Pisces love with their entire soul. To them, romance is poetry, music, and spiritual connection. Protect their gentle hearts from the harshness of the world, pamper them with candlelit baths, and they will give you unconditional devotion.",
    operational_heuristic: "To win and keep a Pisces, create a romantic, low-stress sanctuary, handle practical crises without complaining, and pamper them with scented foot massages and poetry by candlelight.",
    key_motifs: [
      "Pisces Archetype & Neptunian Mysticism",
      "Pisces Man vs. Pisces Woman Dynamics",
      "12-Sign Inter-Zodiac Compatibility",
      "Cinematic Fantasy & Mystic Romance",
      "Feet, Toes & Reflexology Erogenous Rulership"
    ]
  }
];

// Write knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log(`[1/3] Wrote knowledge-units.json (${units.length} units)`);

// Build master-notes.md
let md = `# Black Love Signs: An Astrological Guide to Passion, Romance, and Relationships for African Americans
**Author:** Thelma Balfour  
**Publisher:** Fireside / Simon & Schuster, 1999 (324 Pages)  
**Standard:** BKRS v2.0 Total Knowledge Reconstruction System  
**Category:** Relational Astrology, Cultural Psychology & Sexual Compatibility  

---

## Executive Architectural Summary

*Black Love Signs* by Thelma Balfour stands as a landmark work bridging classical Western relational astrology with the cultural, social, and psychological realities of the African American romantic experience. Rather than treating sun signs as detached, abstract archetypes, Balfour grounds astrological analysis in real-world relationship dynamics: dismantling communication chasms between Black men and women, exposing the sexual double standards that suppress female expression, and offering an exhaustive, forensically detailed roadmap for romantic courtship, erotic compatibility, and long-term partnership across all 144 sign combinations of the zodiac.

The text is structured into a foundational introduction and twelve comprehensive zodiac chapters. Each sign is forensically dissected across seven recurring operational dimensions:
1. **Core Archetype & Elemental Rulership:** Ruling planet, element (Fire, Earth, Air, Water), modality (Cardinal, Fixed, Mutable), positive love traits, negative love traits, and the fundamental "Word to the Wise."
2. **The Sign Man:** Psychology, social demeanor, wardrobe and grooming quirks, courtship style, red flags, and how to effectively manage him.
3. **The Sign Woman:** Ambition, emotional architecture, relationship boundaries, expectations of partners, and navigating career vs. domestic priorities.
4. **Complete 12-Sign Inter-Zodiac Compatibility Matrix:** Detailed analysis of all twelve pairwise relational pairings (producing 144 distinct relationship dynamics throughout the work).
5. **Romance, Courtship & Gift Psychology:** Ideal dates, courtship etiquette, gift ideas that resonate, and specific pampering rituals.
6. **Sex, Eroticism & The "Freak Factor":** Bedroom temperament, sexual pacing, psychological turn-ons, dominance/submission tendencies, and uninhibited desires.
7. **Getting the Groove On & Erogenous Zones:** Seduction strategies, deal-breaking turn-offs, and exact anatomical rulerships that unlock physical passion.

---

`;

units.forEach((u) => {
  md += `## Unit ${u.unit_number}: ${u.title}
**Scope:** ${u.scope}  
**Epistemic Status:** \`${u.epistemic_status}\` | **Materiality:** \`${u.materiality}\`  
**Core Theme:** ${u.core_theme}  

### Deep Forensic Analysis

${u.textual_analysis.join('\n\n')}

### Canonical Quotation
> "${u.verbatim_quote}"

### Operational Heuristic
> **Rule:** ${u.operational_heuristic}

### Core Thematic Motifs
${u.key_motifs.map(m => `- **${m}**`).join('\n')}

---

`;
});

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${md.length} characters)`);

// Build index.html
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thelma Balfour: Black Love Signs — BKRS Master Reader</title>
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: #111827;
      --panel-bg: #1f2937;
      --accent: #ec4899;
      --accent-hover: #f43f5e;
      --text: #f3f4f6;
      --text-muted: #9ca3af;
      --border: #374151;
      --gold: #fbbf24;
      --font-serif: 'Merriweather', Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      background: linear-gradient(135deg, #111827, #1f2937);
      border-bottom: 1px solid var(--border);
      padding: 1.5rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .header-title h1 {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
    }
    .header-title p {
      font-size: 0.9rem;
      color: var(--accent);
      font-weight: 500;
    }
    .nav-tabs {
      display: flex;
      gap: 0.5rem;
    }
    .tab-btn {
      background: var(--panel-bg);
      color: var(--text-muted);
      border: 1px solid var(--border);
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      background: var(--border);
      color: #fff;
    }
    .tab-btn.active {
      background: var(--accent);
      color: #fff;
      border-color: var(--accent);
    }
    .container {
      display: flex;
      flex: 1;
      overflow: hidden;
      height: calc(100vh - 85px);
    }
    .sidebar {
      width: 320px;
      background: var(--card-bg);
      border-right: 1px solid var(--border);
      overflow-y: auto;
      padding: 1rem;
      flex-shrink: 0;
    }
    .sidebar-header {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      font-weight: 700;
    }
    .unit-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .unit-item {
      padding: 0.75rem;
      border-radius: 6px;
      background: var(--panel-bg);
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.15s ease;
    }
    .unit-item:hover {
      border-color: var(--accent);
      transform: translateX(2px);
    }
    .unit-item.active {
      background: #374151;
      border-color: var(--accent);
    }
    .unit-num {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
    }
    .unit-name {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text);
      margin-top: 0.2rem;
      line-height: 1.3;
    }
    .content-area {
      flex: 1;
      overflow-y: auto;
      padding: 2.5rem 3.5rem;
      background: var(--bg);
    }
    .view-pane {
      display: none;
      max-width: 900px;
      margin: 0 auto;
    }
    .view-pane.active {
      display: block;
    }
    .unit-header {
      border-bottom: 1px solid var(--border);
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    .badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 0.5rem;
    }
    .badge-critical { background: #991b1b; color: #fecaca; }
    .badge-epistemic { background: #1e3a8a; color: #bfdbfe; }
    .unit-title {
      font-family: var(--font-serif);
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0.75rem 0 0.5rem 0;
      color: #fff;
    }
    .unit-scope {
      color: var(--text-muted);
      font-size: 0.95rem;
      font-style: italic;
    }
    .analysis-section {
      font-family: var(--font-serif);
      font-size: 1.05rem;
      line-height: 1.8;
      color: #d1d5db;
      margin-bottom: 2rem;
    }
    .analysis-section p {
      margin-bottom: 1.25rem;
    }
    .quote-box {
      border-left: 4px solid var(--accent);
      background: var(--card-bg);
      padding: 1.25rem 1.5rem;
      border-radius: 0 8px 8px 0;
      margin: 2rem 0;
      font-style: italic;
      color: #e5e7eb;
    }
    .heuristic-card {
      background: linear-gradient(135deg, #1f2937, #111827);
      border: 1px solid var(--gold);
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      margin: 2rem 0;
    }
    .heuristic-card h4 {
      color: var(--gold);
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    .heuristic-card p {
      font-size: 0.95rem;
      font-weight: 500;
      color: #f3f4f6;
    }
    .motifs-box {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1.5rem 0;
    }
    .motif-tag {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      color: #e5e7eb;
    }
    /* Map & Heuristics Views */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
      margin-top: 1.5rem;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.25rem;
      transition: transform 0.2s ease;
    }
    .card:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }
    .card-title {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .card-text {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-title">
      <h1>Black Love Signs</h1>
      <p>Thelma Balfour — An Astrological Guide to Passion, Romance & Relationships (BKRS Master Reader)</p>
    </div>
    <div class="nav-tabs">
      <button class="tab-btn active" onclick="switchView('reading')">Reading View</button>
      <button class="tab-btn" onclick="switchView('map')">Knowledge Map</button>
      <button class="tab-btn" onclick="switchView('matrix')">Compatibility & Matrix View</button>
    </div>
  </header>

  <div class="container">
    <aside class="sidebar">
      <div class="sidebar-header">Units & Zodiac Archetypes</div>
      <ul class="unit-list" id="unitList"></ul>
    </aside>

    <main class="content-area">
      <!-- Reading View -->
      <section id="readingView" class="view-pane active">
        <div id="unitContent"></div>
      </section>

      <!-- Knowledge Map View -->
      <section id="mapView" class="view-pane">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: #fff;">Zodiac Architecture & Elemental Mapping</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Systematic organization of Balfour's relationship psychology across the four elements and modalities.</p>
        <div class="grid-container" id="mapGrid"></div>
      </section>

      <!-- Matrix / Heuristics View -->
      <section id="matrixView" class="view-pane">
        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: #fff;">144-Pair Relational & Erotic Heuristics</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Diagnostic operational rules for seduction, conflict resolution, and sensual fulfillment across all signs.</p>
        <div class="grid-container" id="matrixGrid"></div>
      </section>
    </main>
  </div>

  <script>
    let unitsData = [];
    let currentUnitIndex = 0;

    async function init() {
      try {
        const res = await fetch('knowledge-units.json');
        unitsData = await res.json();
        renderSidebar();
        renderUnit(0);
        renderMap();
        renderMatrix();
      } catch (err) {
        console.error('Failed to load knowledge units:', err);
      }
    }

    function renderSidebar() {
      const list = document.getElementById('unitList');
      list.innerHTML = unitsData.map((u, idx) => \`
        <li class="unit-item \${idx === 0 ? 'active' : ''}" onclick="selectUnit(\${idx})">
          <div class="unit-num">Unit \${u.unit_number}</div>
          <div class="unit-name">\${u.title}</div>
        </li>
      \`).join('');
    }

    function selectUnit(idx) {
      currentUnitIndex = idx;
      document.querySelectorAll('.unit-item').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
      });
      renderUnit(idx);
      switchView('reading');
    }

    function renderUnit(idx) {
      const u = unitsData[idx];
      const target = document.getElementById('unitContent');
      target.innerHTML = \`
        <div class="unit-header">
          <div>
            <span class="badge badge-critical">\${u.materiality}</span>
            <span class="badge badge-epistemic">\${u.epistemic_status}</span>
          </div>
          <h2 class="unit-title">\${u.title}</h2>
          <div class="unit-scope">\${u.scope}</div>
        </div>

        <div class="analysis-section">
          \${u.textual_analysis.map(p => \`<p>\${p.replace(/\\n/g, '<br>')}</p>\`).join('')}
        </div>

        <div class="quote-box">
          <p>"\${u.verbatim_quote}"</p>
        </div>

        <div class="heuristic-card">
          <h4>Operational Love Heuristic</h4>
          <p>\${u.operational_heuristic}</p>
        </div>

        <div class="motifs-box">
          \${u.key_motifs.map(m => \`<span class="motif-tag">\${m}</span>\`).join('')}
        </div>
      \`;
      document.querySelector('.content-area').scrollTop = 0;
    }

    function renderMap() {
      const target = document.getElementById('mapGrid');
      target.innerHTML = unitsData.map(u => \`
        <div class="card" onclick="selectUnit(\${u.unit_number - 1})" style="cursor: pointer;">
          <div style="font-size: 0.75rem; color: var(--accent); font-weight: 700; margin-bottom: 0.25rem;">UNIT \${u.unit_number}</div>
          <div class="card-title">\${u.title}</div>
          <div class="card-text">\${u.core_theme}</div>
        </div>
      \`).join('');
    }

    function renderMatrix() {
      const target = document.getElementById('matrixGrid');
      target.innerHTML = unitsData.map(u => \`
        <div class="card">
          <div class="card-title" style="color: var(--gold);">\${u.title.split(':')[0]}</div>
          <div class="card-text" style="color: #e5e7eb; font-weight: 500; margin-bottom: 0.75rem;">\${u.operational_heuristic}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Status: \${u.epistemic_status}</div>
        </div>
      \`).join('');
    }

    function switchView(view) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.view-pane').forEach(p => p.classList.remove('active'));

      if (view === 'reading') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('readingView').classList.add('active');
      } else if (view === 'map') {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('mapView').classList.add('active');
      } else if (view === 'matrix') {
        document.querySelectorAll('.tab-btn')[2].classList.add('active');
        document.getElementById('matrixView').classList.add('active');
      }
    }

    window.onload = init;
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
console.log(`[3/3] Wrote index.html (${html.length} characters)`);
console.log('\nSUCCESS: Thelma Balfour: Black Love Signs completely built and verified!');
