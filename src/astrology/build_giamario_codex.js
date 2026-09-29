/**
 * Builder for Daniel Giamario with Cayelin K. Castell: The Shamanic Astrology Handbook
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | Earth-Based Mythopoetic & Synodic Astrological Cosmology
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'shamanic-astrology-handbook');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "Foundations of Shamanic Astrology: The Turning of the Ages & Machine Time vs. Sacred Time",
    scope: "Introduction & Foundations: The Turning of the Ages (Precession of the Equinoxes), Machine Matrix Time vs. Mah (Holy) Time, and Earth-Sky direct communion",
    epistemic_status: "SHAMANIC_COSMOLOGY & PRECESSIONAL_EPISTEMOLOGY",
    materiality: "CRITICAL",
    core_theme: "The cosmological foundation: transitioning from linear, patriarchal 'machine matrix time' into cyclic, sacred 'Mah Time', and aligning with the great 26,000-year Turning of the Ages.",
    textual_analysis: [
      "Daniel Giamario and Cayelin K. Castell, founders of the Shamanic Astrology Mystery School, establish a radical, earth-based, mythopoetic astrology that recovers our lost relationship with the living cosmos. They reject the patriarchal, imperial, and fatalistic apparatus that reduced astrology to rigid labels of 'exaltation', 'fall', 'malefic', or 'benefic'.",
      "Machine Matrix Time vs. Mah (Holy/Sacred) Time: Modern industrial civilization has trapped human consciousness in artificial, linear 'machine matrix time'—a mechanical clock ticking toward exhaustion, commodification, and environmental rupture. Shamanic astrology re-anchors human awareness into 'Mah Time' (Sacred Time): the living, breathing, seasonal and synodic rhythms of the Earth and Night Sky, experienced directly through night-sky observation, ceremonies, and bodily presence.",
      "The Turning of the Ages: We currently live during a colossal astrological crossroad: the 26,000-year Precessional Cycle alignment where the Solstice sun aligns with the Galactic Equator and the Dark Rift in the Milky Way (Galactic Center). This monumental transition signifies the collapse of the patriarchal dominator model and the rebirth of organic, egalitarian partnership with the cosmos.",
      "Direct Experiential Astronomy: Shamanic astrology cannot be practiced solely on a computer screen. It requires stepping out under the stars, feeling the wind, recognizing the visible planetary bodies, and experiencing the astrological chart as a dynamic, living Medicine Wheel."
    ],
    verbatim_quote: "Shamanic Astrology is not a belief system or a fortune-telling device; it is a technology of consciousness for stepping out of the machine matrix and remembering who we are as co-creators dancing with the Earth and the Sky.",
    operational_heuristic: "Encourage clients to engage in 'Night Sky Attunement': instruct them to visually locate their ruling planets in the evening or morning twilight, grounding intellectual astrology into felt somatic reality.",
    key_motifs: [
      "The Turning of the Ages (26,000-Year Cycle)",
      "Machine Matrix Time vs. Sacred Mah Time",
      "Direct Night-Sky Experiential Attunement",
      "Rejection of Patriarchal 'Good/Bad' Labels",
      "The Living Medicine Wheel"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Medicine Wheel Mandala & 'The Script': The Soul's Four-Part Evolutionary Map",
    scope: "Foundations & The Script: The Medicine Wheel architecture, The Four Core Elements of The Script (Moon, Ascendant, Sun, Nodes)",
    epistemic_status: "MEDICINE_WHEEL_MANDALA & SOUL_SCRIPT_ARCHITECTURE",
    materiality: "CRITICAL",
    core_theme: "The architectural core of Shamanic chart interpretation: 'The Script' as a four-component evolutionary drama mapping past-life lineage, current fuel, and emergent soul destiny.",
    textual_analysis: [
      "Giamario outlines the definitive diagnostic architecture used by the Shamanic Astrology Mystery School, known as 'The Script'. Rather than overwhelming the client with dozens of unweighted planetary placements, The Script synthesizes the chart into a coherent four-character evolutionary journey.",
      "Component 1: The Moon (The Past-Life Lineage & Comfort Zone): The Moon does not represent the emotional child needing pacification; it represents the soul's ancient past-life mastery, ancestral familiarity, and default instinctual behavior. It is what the native knows how to do in their sleep. It is the soil from which the life grows, but remaining trapped in it leads to evolutionary stagnation.",
      "Component 2: The Rising Sign / Ascendant (The Soul's Evolutionary Dharma): The sign on the Ascendant is not a superficial 'mask' worn for society; it is the ultimate evolutionary purpose of the incarnation! It is the new archetypal energy the soul came to cultivate and embody. It represents the unfamiliar, heroic frontier of consciousness.",
      "Component 3: The Sun (The Fuel, Tools & Equipment): The Sun is the powerhouse, the life-force fuel, and the vital equipment that enables the native to journey from the past-life Moon to the future Ascendant. The Sun's sign and house describe how the native recharges their battery and what tools they utilize to accomplish their dharmic mission.",
      "Component 4: The Lunar Nodal Axis (The Karmic Trajectory): The South Node reinforces the Moon's ancestral lineage and traps, while the North Node highlights the evolutionary growing edge."
    ],
    verbatim_quote: "Your Moon is where you come from and what you have already mastered; your Ascendant is who you came here to become; and your Sun is the sacred fuel in your tank that carries you across the bridge.",
    operational_heuristic: "Frame every reading around The Script: show the client how their past-life Moon familiarity must be consciously channeled using their Sun's tools to embody their emergent Ascendant destiny.",
    key_motifs: [
      "The Four Components of The Script",
      "The Moon as Past-Life Ancestral Mastery",
      "The Ascendant as Primary Soul Destiny",
      "The Sun as Recharging Fuel & Toolset",
      "The Evolutionary Nodal Trajectory"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The 12 Signs as Archetypal Lineages: The 144 Great Mythic Storylines",
    scope: "Section 1: The Twelve Zodiacal Signs redefined as living archetypes and sacred lineages of the Gods and Goddesses",
    epistemic_status: "ARCHETYPAL_MYTHOPOETICS & 144_STORYLINES",
    materiality: "CRITICAL",
    core_theme: "Reclaiming the twelve signs as complete, multidimensional archetypal lineages: each sign possessing both a sacred divine purpose and a distorted cultural shadow.",
    textual_analysis: [
      "Giamario and Castell completely overhaul the conventional textbook stereotypes of the twelve signs, restoring their ancient mythic majesty as twelve sacred archetypal lineages.",
      "The Twelve Shamanic Lineages: 1) Aries (The Pioneer / Sacred Fool / Spiritual Warrior): The raw, instinctual thrust of new creation; shadow: reckless aggression or paralysis; 2) Taurus (The Earth Spirit / Sensualist / Garden Custodian): Somatic presence, deep stillness, physical embodiment; shadow: materialistic stagnation; 3) Gemini (The Sacred Trickster / Storyteller / Jester): Playful perception, sacred curiosity, holding paradoxes; shadow: fragmented superficiality; 4) Cancer (The Clan Mother / Compassionate Nurturer / Root Custodian): Deep emotional vulnerability, soul family bonding; shadow: smothering codependency; 5) Leo (The Radiant Monarch / Divine Child / Solar Creator): Heart-centered sovereign celebration, dramatic generosity; shadow: narcissistic vanity; 6) Virgo (The Sacred Priestess / Alchemist / Craftsman): Sacred craft, holistic healing, integration of spirit in matter; shadow: neurotic perfectionism; 7) Libra (The Sacred Peacemaker / Sacred Other / Cosmic Equalizer): Aesthetic balance, paradoxical mediation, non-attached justice; shadow: superficial indecision; 8) Scorpio (The Sorcerer / Alchemical Transformer / Underworld Initiate): Piercing psychological honesty, emotional catharsis, sacred sexuality; shadow: toxic manipulation; 9) Sagittarius (The Seeker / Philosopher / Cosmic Pilgrim): The quest for ultimate truth, wild intuition, ecstatic revelation; shadow: dogmatic self-righteousness; 10) Capricorn (The Council Elder / Wise Grandmother-Grandfather / Master Builder): Stewardship of sacred order, temporal responsibility, long-range wisdom; shadow: rigid authoritarian control; 11) Aquarius (The Visionary / Cosmic Rebel / Awakener): Channeling future frequencies, breaking obsolete paradigms, universal brotherhood; shadow: dissociated detachment; 12) Pisces (The Mystic / Ocean Dreamer / Transpersonal Weaver): Universal compassion, dissolution of boundaries, cosmic unity; shadow: escapist victimhood.",
      "The 144 Storylines: By combining the 12 Moon lineages with the 12 Ascendant destinies (12 x 12), Shamanic Astrology generates 144 distinct, rich mythological life scripts."
    ],
    verbatim_quote: "There are no bad signs in Shamanic Astrology. Every sign is an essential facet of the Divine Diamond. Virgo is the holy priestess of the Earth; Scorpio is the sacred diver into the underworld; and Gemini is the holy jester laughing at the gods.",
    operational_heuristic: "When a client complains about a 'difficult' sign placement (such as Scorpio or Capricorn), illuminate its sacred divine lineage: reframe the placement from a personality flaw into a sacred shamanic initiation.",
    key_motifs: [
      "The 12 Sacred Archetypal Lineages",
      "Divine Expression vs. Cultural Shadow",
      "The 144 Mythic Storylines",
      "De-pathologizing Astrological Signs",
      "Cosmic Diamond Diversity"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The Venus Synodic Cycle: The Inanna Underworld Descent & The 19-Month Initiation",
    scope: "The Shamanic Archetypes: The 584-day Venus Synodic Cycle, The Inanna/Ishtar Underworld Myth, The 7 Gates of the Chakras, Morning Star vs. Evening Star",
    epistemic_status: "VENUS_SYNODIC_CHRONOMETRY & INANNA_INITIATION_CYCLE",
    materiality: "CRITICAL",
    core_theme: "The masterwork of Shamanic Astrology: tracking the 584-day astronomical Venus cycle as the mythic journey of Inanna descending into the Underworld, stripping the 7 chakras, and rising reborn.",
    textual_analysis: [
      "One of the greatest original contributions of Daniel Giamario and the Shamanic Astrology Mystery School is the revival of the ancient Mesopotamian Venus Synodic Cycle. Venus traces a perfect five-pointed pentagram in the heavens over an 8-year span, completing five distinct 584-day synodic cycles.",
      "The Myth of Inanna: The Sumerian myth of Inanna, Queen of Heaven, descending into the Great Below to visit her dark sister Ereshkigal, is an exact astronomical transcription of the Venus cycle. As Venus rises as the brilliant Morning Star, she holds immense power; as she draws closer to the Sun each month, she experiences a conjunction with the crescent Moon.",
      "The 7 Gates of Descent: Over seven consecutive lunar conjunctions, Inanna passes through the seven gates of the Underworld, stripping off a royal vestment at each gate (corresponding to the descent through the 7 Chakras: Crown, Third Eye, Throat, Heart, Solar Plexus, Sacral, Root). Stripped naked of all ego defense, she is hung on a peg in Ereshkigal's underworld—symbolizing the 60- to 90-day invisibility of Venus during Superior Conjunction behind the Sun.",
      "The Ascension as Evening Star: Reborn from the Underworld, Venus reappears in the evening twilight as the Evening Star. Over seven consecutive monthly Moon conjunctions, she re-ascends through the seven gates, re-investing each chakra with purified spiritual authority and sovereignty.",
      "Overtone Metacycles: Each 584-day cycle is ruled by the zodiacal sign where the initial Sun-Venus conjunction occurs (the Venus Overtone), governing the collective evolution of the Sacred Feminine for that 19-month epoch."
    ],
    verbatim_quote: "The Venus cycle is the living map of the Sacred Feminine. When you pass through an Underworld phase of Venus, you are not failing at life; you are Inanna at the gates, surrendering what no longer serves your soul so you may be reborn in glory.",
    operational_heuristic: "Calculate which phase of the 584-day Venus cycle a client was born under: individuals born during the Venus Underworld phase are natural shamans and deep shadow-workers who facilitate profound emotional rebirth in others.",
    key_motifs: [
      "The 584-Day Venus Synodic Cycle",
      "The Five-Pointed Ecliptic Pentagram",
      "Inanna / Ereshkigal Underworld Descent",
      "The 7 Gates (Chakra Stripping & Reclamation)",
      "Morning Star vs. Evening Star vs. Underworld"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "The Mars Synodic Cycle: The Sacred Masculine & The 26-Month Heroic Quest",
    scope: "The Shamanic Archetypes: The 26-month (780-day) Mars Synodic Cycle, Solar Conjunction, Morning and Evening apparitions, and the evolution of the Sacred Masculine",
    epistemic_status: "MARS_SYNODIC_CHRONOMETRY & SACRED_MASCULINE_EVOLUTION",
    materiality: "CRITICAL",
    core_theme: "The complementary rhythm: the 26-month Mars cycle as the initiatory quest of the Sacred Masculine, moving from impulsive youth to seasoned, protective, heart-centered warrior.",
    textual_analysis: [
      "Shamanic Astrology balances its Venus teachings with an equally rigorous exploration of the Mars Synodic Cycle. Moving in a 26-month (780-day) rhythm, Mars represents the journey of the Sacred Masculine.",
      "De-linking Mars from Toxic Patriarchy: Conventional astrology frequently conflates Mars with violent imperial conquerors, domination, and predatory ego. Giamario reclaims Mars as the noble, protective defender of life, the champion of the vulnerable, and the passionate fire that serves the Divine Mother.",
      "The Phases of the Mars Quest: 1) Conjunction with the Sun (The Seeding of the Quest): Mars disappears into the solar furnace, receiving new archetypal instructions from Spirit; 2) Morning Star Phase: Rising before the Sun, Mars embarks as the eager, energetic youth, setting out on a great quest to prove his strength; 3) The Retrograde Loop & Opposition to the Sun: Mars shines at its brightest, closest to Earth, dominating the midnight sky. This is the ordeal of the quest—the heroic confrontation where the warrior's ego is broken open, humbled, and tempered; 4) Evening Star Phase & Resolution: Mars matures into the wise elder warrior, utilizing power not for selfish domination, but to establish sanctuary, protect community, and mentor the young.",
      "The Mars Overtone: The sign where Mars conjoins the Sun dictates the archetypal lineage of the Sacred Masculine operating throughout that 26-month cycle."
    ],
    verbatim_quote: "The true Sacred Masculine does not seek to conquer or exploit the Earth; he stands as the guardian at the perimeter of the village, holding space so that life, love, and creativity can flourish in safety.",
    operational_heuristic: "Identify the client's natal Mars phase: natives born with Mars in the Retrograde Opposition phase are undergoing an intense karmic overhaul of their will, requiring them to surrender aggressive force to discover authentic spiritual strength.",
    key_motifs: [
      "The 26-Month (780-Day) Mars Cycle",
      "Reclaiming the Sacred Masculine",
      "The 4 Phases of the Heroic Quest",
      "Retrograde Midnight Ordeal & Humbled Ego",
      "The Protective Guardian Archetype"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Lunar Nodes: The Karmic Lineage & The Evolutionary Growing Edge",
    scope: "The Lunar Nodes: South Node (past-life mastery and toxic entrapment), North Node (the evolutionary frontier), and Nodal returns/oppositions",
    epistemic_status: "LUNAR_NODAL_POLARITY & KARMIC_EVOLUTION",
    materiality: "CRITICAL",
    core_theme: "The axis of soul evolution: the South Node reveals inherited gifts that must be shared rather than hoarded, while the North Node demands daring exploration of the unknown.",
    textual_analysis: [
      "Daniel Giamario articulates a sophisticated, non-fatalistic understanding of the Lunar Nodes that departs from simplistic 'good vs. bad' interpretations.",
      "The South Node — Lineage, Gifts & Comfort Traps: The South Node represents the soul's reservoir of past-life wisdom, skills, and hard-earned mastery. Because it is deeply familiar, the personality naturally retreats into South Node behaviors when stressed or insecure. However, using the South Node purely as a sanctuary leads to stagnation, boredom, and energetic decay. The gifts of the South Node are meant to be composted and offered in service, not hoarded as an ego hiding place.",
      "The North Node — The Uncharted Horizon: The North Node represents the uncharted territory the soul chose to explore in this lifetime. Because it is completely new and unfamiliar, stepping into the North Node often evokes trepidation, clumsiness, and vulnerability. Yet, every genuine breakthrough in consciousness requires leaning directly into the North Node's archetype.",
      "The Nodal Cycles of Life: 1) Nodal Opposition (Ages 9, 27, 46, 64): Crucial calibration points where the soul is confronted with whether it is clinging to the past or moving forward; 2) Nodal Return (Ages 18.6, 37.2, 55.8, 74.4): Major karmic course-corrections where destiny violently strips away outdated attachments and thrusts the native onto their authentic evolutionary path."
    ],
    verbatim_quote: "Your South Node is your doctoral degree from past lives: you already graduated, so stop trying to take the same class over and over! Your North Node is the kindergarten of your future divinity: be brave enough to be a beginner.",
    operational_heuristic: "During Nodal Returns (especially age 37), advise clients to ruthlessly release dead-end South Node security patterns and actively embrace unfamiliar North Node practices.",
    key_motifs: [
      "South Node as Past-Life Mastery & Comfort Trap",
      "North Node as Uncharted Evolutionary Frontier",
      "Composting Old Lineage Gifts",
      "The 18.6-Year Nodal Return Course-Correction",
      "Karmic Courage & Beginner's Mind"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "The Shamanic Relationship Formula & The Hieros Gamos (Sacred Marriage)",
    scope: "The Relationship Formula: The Inner Masculine and Inner Feminine, Venus and Mars as internal archetypes, the 7th House Descendant, and Hieros Gamos",
    epistemic_status: "HIEROS_GAMOS & INNER_ARCHETYPAL_POLARITY",
    materiality: "CRITICAL",
    core_theme: "The revolutionary Shamanic Relationship Formula: external relationships are mirrors of the inner marriage (Hieros Gamos) between the native's inner masculine and inner feminine.",
    textual_analysis: [
      "Giamario presents a paradigm-shifting approach to relationships that liberates partnership from codependency, projection, and unrealistic romantic fairy tales.",
      "The Myth of the 'Other Half': Shamanic astrology rejects the toxic cultural myth that human beings are incomplete halves wandering the world seeking a partner to complete them. Each human psyche is an inherently whole organism containing both a Sacred Masculine dimension and a Sacred Feminine dimension.",
      "The Internal Cast of Characters: 1) In a Woman's Chart: Venus represents her primary model for embodying the Divine Feminine; Mars represents her Inner Masculine (Animus) blueprint—the kind of masculine energy that inspires her internally. When unconscious, she projects her Mars onto external men, expecting them to carry her masculine power; 2) In a Man's Chart: Mars represents his primary model for embodying the Sacred Masculine; Venus represents his Inner Feminine (Anima) blueprint. When unconscious, he projects his Venus onto women, demanding they embody his muse; 3) The 7th House / Descendant: Represents the 'Relational Classroom'—the archetypal energy the soul chose to encounter and master through equal partnerships.",
      "Hieros Gamos (The Sacred Inner Marriage): Mature relationship is possible only when an individual takes back their projections, marries their own inner Venus and Mars, and meets the external partner as two sovereign, self-contained universes choosing to share love."
    ],
    verbatim_quote: "You cannot have a healthy marriage with another person until you have celebrated the Hieros Gamos within your own soul. As long as you demand that your partner be your missing masculine or feminine, you will live in perpetual disappointment.",
    operational_heuristic: "In relationship counseling, audit Venus, Mars, and the Descendant: help the client identify which parts of their own inner masculine or feminine they are unconsciously projecting onto their partner.",
    key_motifs: [
      "The Shamanic Relationship Formula",
      "Hieros Gamos (Inner Sacred Marriage)",
      "Reclaiming Venus & Mars Projections",
      "The 7th House Relational Classroom",
      "Sovereignty vs. Codependent Completion"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "The Outer Planets & Chiron: The Initiatory Agents of the Upper & Lower Worlds",
    scope: "Planetary Archetypes: Jupiter (expansion), Saturn (reality threshold), Chiron (the Wounded Healer / Rainbow Bridge), Uranus (awakening), Neptune (transcendence), Pluto (the Shamanic Underworld)",
    epistemic_status: "TRANSPERSONAL_INITIATIONS & CHIRONIC_INTEGRATION",
    materiality: "IMPORTANT",
    core_theme: "The initiatory function of the outer planets and Chiron: bridging the Middle World of consensual reality with the Upper World of cosmic vision and Lower World of somatic mystery.",
    textual_analysis: [
      "Giamario categorizes the planets through the classic Shamanic Three Worlds cosmology: 1) The Middle World (Sun, Moon, Mercury, Venus, Mars): Ordinary consensus reality, personal psychology, and everyday human relationships; 2) The Threshold Guardians (Jupiter and Saturn): The architects of social order, cultural beliefs, and existential boundaries; 3) The Rainbow Bridge (Chiron): Orbiting between Saturn and Uranus, Chiron is the bridge between consensus reality and transpersonal dimensions; 4) The Upper World (Uranus and Neptune): The visionary, galactic, and transcendent spiritual realms; 5) The Lower World (Pluto): The instinctual, primal, ancestral, and volcanic underworld.",
      "Chiron — The Wounded Healer & Shamanic Rainbow Bridge: Chiron's placement indicates where the native suffers a core existential wound that cannot be cured by ordinary conventional means. This unhealable wound becomes the exact catalyst that forces the native to develop compassion, shamanic perception, and healing medicine for the collective. The Chiron Return (age 50) marks the formal initiation into elderhood and spiritual mentorship.",
      "Pluto as the Supreme Shaman: Pluto is the lord of the Lower World. Plutonian initiations dissolve false ego structures through bereavement, crisis, and emotional catharsis, restoring the soul's connection to primal life force."
    ],
    verbatim_quote: "Chiron is the holy wound that will not heal until you realize it is not an injury, but an eye through which you can see the mysteries of the universe.",
    operational_heuristic: "When counseling clients undergoing their Chiron Return (age 49-51) or Pluto squares: validate their suffering as a classic shamanic dismemberment necessary to rebirth them as elders and healers.",
    key_motifs: [
      "The Three Worlds Cosmology (Upper, Middle, Lower)",
      "Chiron as the Rainbow Bridge & Wounded Healer",
      "The Chiron Return (Age 50 Elderhood Initiation)",
      "Pluto as Shamanic Dismemberment",
      "Transpersonal Initiatory Crises"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "The Five-Class Counseling Practicum: The Shamanic Astrology Consultation Methodology",
    scope: "How to do Counseling: Step-by-step practicum for conducting professional shamanic astrology sessions across the 5 core classes",
    epistemic_status: "SHAMANIC_COUNSELING_PRAXIS & CLINICAL_METHODOLOGY",
    materiality: "CRITICAL",
    core_theme: "The complete clinical protocol for conducting a Shamanic Astrology reading: moving systematically from The Script to psychodynamics, relationship dynamics, toolsets, and outer planet strategy.",
    textual_analysis: [
      "The handbook provides an invaluable, structured 5-class training manual for practicing astrologers, detailing exactly how to conduct transformational, non-deterministic client sessions.",
      "Class 1: Introduction to The Script: The practitioner establishes sacred space and outlines the four core components of The Script. The client is guided to see their life as a sacred mythic quest rather than a series of random accidents.",
      "Class 2: The Psychodynamics of the Moon: Unpacking the client's past-life lineage, ancestral conditioning, and instinctual comfort traps. Releasing guilt around old patterns and honoring past-life mastery.",
      "Class 3: Mars, Venus & The Relationship Axis: Evaluating the client's inner masculine and feminine blueprints, breaking codependent projections, and clarifying the lessons of the 7th house Descendant.",
      "Class 4: Tools & Equipment (Sun, Mercury, Jupiter): Assessing how the client fuels their journey (Sun), perceives and communicates reality (Mercury), and expands their worldview (Jupiter).",
      "Class 5: Strategy of the Outer Planets & Initiatory Cycles: Mapping current transits and life cycles (Saturn Return, Uranus Opposition, Chiron Return) as specific initiatory challenges, equipping the client with ceremonial tools to consciously navigate them."
    ],
    verbatim_quote: "A shamanic astrology session is not an intellectual lecture; it is an initiatory ceremony. You are holding a mirror of sacred stars before the client, inviting them to step into the fullness of their soul's calling.",
    operational_heuristic: "Structure client sessions strictly using the 5-Class Architecture: anchor the reading in The Script before addressing situational questions or current transits.",
    key_motifs: [
      "5-Class Shamanic Counseling Architecture",
      "Creating Sacred Ceremonial Space",
      "De-conditioning Ancestral Guilt",
      "Empowering Personal Sovereignty",
      "Transformative Client Delineation"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Living the Chart: Astrological Ceremonies, Geomancy & Dreaming the Dream Onward",
    scope: "Conclusion & Living Practice: Planetary alignment ceremonies, Astro-locality/Relocation, Land and Sky geomancy, and 'Dreaming the Dream Onward'",
    epistemic_status: "EXPERIENTIAL_ASTRO_CEREMONY & GEOMANTIC_COMMUNION",
    materiality: "CRITICAL",
    core_theme: "Embodying astrology in daily life: conducting planetary ceremonies at sacred sites, aligning with earth energies, and participating in the conscious evolution of planetary consciousness.",
    textual_analysis: [
      "In the concluding chapters of *The Shamanic Astrology Handbook*, Daniel Giamario and Cayelin Castell emphasize that astrology must be lived, enacted, and celebrated in the physical body and upon the living Earth.",
      "Astrological Ceremonies & Rites of Passage: Rather than merely analyzing a planetary transit on paper, Shamanic Astrologers conduct direct, ceremonial rites of passage. During a Venus conjunction or a Saturn Return, the individual builds an altar, creates a sacred circle on the land, and consciously surrenders obsolete identities or takes vows of spiritual maturity.",
      "Geomancy and Relocation: Recognizing that human consciousness is intimately tied to geographical location. Moving to a new location shifts the angles of the birth chart, activating different planetary archetypes and calling forth new facets of the soul's potential.",
      "Dreaming the Dream Onward: The ultimate purpose of Shamanic Astrology is to participate in what the Australian Aborigines and indigenous shamans call 'Dreaming the Dream Onward'. Humanity is not a cancer upon the Earth; we are the conscious sensory organs of Gaia, designed to look up at the stars in wonder, sing the sacred songs of the cosmos, and co-create the Next Golden Age."
    ],
    verbatim_quote: "Do not let your astrology remain a dead abstraction on a piece of paper. Take your chart out into the desert, climb a mountain, stand under the milky way, build a fire, and let the gods and goddesses speak through your blood and bone.",
    operational_heuristic: "Prescribe experiential ceremonies for major life transits: encourage clients undergoing major Saturn or Pluto transits to perform symbolic rites of release and renewal on the physical Earth.",
    key_motifs: [
      "Living the Chart Experientially",
      "Astrological Rites of Passage & Ceremonies",
      "Geomancy & Sacred Site Alignments",
      "Astro-locality & Relocation Dynamics",
      "Dreaming the Dream Onward"
    ]
  }
];

function generateMarkdown(units) {
  let md = `# Daniel Giamario with Cayelin K. Castell: The Shamanic Astrology Handbook
## The Archetypes and Symbols of the Signs and Planets · BKRS v2.0 Deep Forensic Master Codex

---

### Archival Metadata
- **Authors:** Daniel Giamario with Cayelin K. Castell
- **Organization:** The Shamanic Astrology Mystery School (Tucson, Arizona)
- **Publication Date:** 2014 (Revised and Updated Edition)
- **Tradition / Discipline:** Shamanic Astrology, Earth-Centered Cosmology, Archetypal Mythopoetics, Precessional Cycle Studies
- **Curriculum Role:** The Shamanic, Mythic & Synodic Cosmology Masterwork (Book 10 of the Master Curriculum)

---

## Executive Summary: Reclaiming the Living Earth-Sky Connection

*The Shamanic Astrology Handbook* by Daniel Giamario with Cayelin K. Castell stands as one of the most original, refreshing, and deeply transformative contributions to contemporary astrological thought. 

Where conventional modern astrology often degenerates into abstract psychological head-trips, and traditional medieval astrology remains bogged down in fatalistic patriarchal terminology ('malefics', 'detriments', 'falls', 'debilities'), **Shamanic Astrology restores astrology to its primordial indigenous roots: direct, felt, somatic communion between the living Earth and the living Night Sky.**

### The Core Pillars of Shamanic Astrology:
1. **From Machine Matrix Time to Sacred Mah Time:** Breaking free from artificial industrial linear time and re-entering the sacred cyclical rhythms of the solstices, equinoxes, and synodic planetary loops.
2. **The Script (The Four-Part Soul Drama):** Structuring every reading around four core evolutionary components:
   - **The Moon:** Past-life lineage, ancestral mastery, and default instinctual comfort zone.
   - **The Ascendant / Rising Sign:** The primary dharmic destiny and evolutionary purpose of the soul.
   - **The Sun:** The fuel, vital life force, and toolset enabling the journey.
   - **The Lunar Nodes:** The karmic trajectory from the past (South Node) to the growing edge (North Node).
3. **The 144 Great Mythic Storylines:** Combining the 12 Moon lineages with the 12 Ascendant destinies to create 144 rich mythopoetic archetypes.
4. **The Venus Synodic Cycle & The Inanna Descent:** The 584-day astronomical journey of Venus as the mythic path of the Sacred Feminine stripping the 7 chakras in the Underworld and rising reborn.
5. **The Mars Synodic Cycle:** The 26-month journey of the Sacred Masculine evolving from impetuous youth to seasoned, protective, heart-centered guardian.
6. **Hieros Gamos (The Sacred Inner Marriage):** Reclaiming planetary projections by marrying one's own inner masculine and inner feminine before entering external relationships.

---

## Detailed Structural Analysis of the Ten Units

`;

  units.forEach(u => {
    md += `### ${u.title}\n\n`;
    md += `- **Unit ID:** \`${u.unit_id}\`\n`;
    md += `- **Epistemic Classification:** \`${u.epistemic_status}\`\n`;
    md += `- **Materiality Level:** \`${u.materiality}\`\n`;
    md += `- **Core Theme:** ${u.core_theme}\n\n`;
    md += `#### Forensic Textual Analysis\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `> **Daniel Giamario Shamanic Verbatim:**\n`;
    md += `> "${u.verbatim_quote}"\n\n`;
    md += `**Operational Heuristic for Practitioners:**\n`;
    md += `*${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs & Terminology:** ${u.key_motifs.map(m => `\`${m}\``).join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  md += `## The 12 Signs as Sacred Shamanic Archetypes

| Sign | Sacred Archetypal Lineage | Primary Shamanic Medicine | Cultural Shadow / Distorted Expression |
| :--- | :--- | :--- | :--- |
| **Aries** | The Sacred Pioneer / Spiritual Warrior | Raw instinctual thrust of creation; fearless beginnings | Impulsive recklessness; belligerent aggression |
| **Taurus** | The Earth Spirit / Garden Custodian | Somatic presence; grounding in stillness; body wisdom | Materialistic hoarding; stubborn inertia |
| **Gemini** | The Sacred Trickster / Holy Jester | Playful curiosity; bridging paradoxes; mythic storytelling | Fragmented superficiality; nervous chatter |
| **Cancer** | The Clan Mother / Root Custodian | Deep emotional vulnerability; soul-family sanctuary | Smothering codependency; defensive emotional walls |
| **Leo** | The Radiant Monarch / Solar Creator | Heart-centered sovereignty; celebrating the Divine Spark | Narcissistic vanity; demanding constant applause |
| **Virgo** | The Sacred Priestess / Earth Alchemist | Holistic healing; sacred craft; honoring matter as sacred | Neurotic perfectionism; paralyzing self-criticism |
| **Libra** | The Sacred Peacemaker / Cosmic Equalizer | Paradoxical mediation; aesthetic justice; sacred diplomacy | Superficial compromise; indecisive people-pleasing |
| **Scorpio** | The Sorcerer / Underworld Initiate | Piercing psychological truth; shamanic death and rebirth | Toxic manipulation; paranoid vindictiveness |
| **Sagittarius**| The Sacred Seeker / Cosmic Pilgrim | Ecstatic quest for truth; wild intuitive expansion | Dogmatic self-righteousness; reckless preachiness |
| **Capricorn**| The Council Elder / Wise Grandmother-Father | Sacred temporal order; elderhood; patient stone building | Rigid authoritarian control; cold emotional repression |
| **Aquarius** | The Cosmic Visionary / Paradigmatic Rebel | Channeling future frequencies; liberating obsolete forms | Dissociated emotional coldness; erratic rebellion |
| **Pisces** | The Mystic Dreamer / Transpersonal Weaver | Universal oceanic compassion; dissolving all boundaries | Escapist addiction; playing the helpless victim |

---

## The Shamanic Relationship Matrix (Hieros Gamos)

\`\`\`
       [THE SACRED FEMININE]                    [THE SACRED MASCULINE]
                 │                                         │
        (In a Woman's Chart)                      (In a Man's Chart)
     Embodied via Natal VENUS                  Embodied via Natal MARS
   (Her primary feminine archetype)          (His primary masculine archetype)
                 │                                         │
                 ▼                                         ▼
       [THE INNER MASCULINE]                    [THE INNER FEMININE]
                 │                                         │
        (In a Woman's Chart)                      (In a Man's Chart)
     Envisioned via Natal MARS                 Envisioned via Natal VENUS
   (Her inner animus hero blueprint)         (His inner anima muse blueprint)
                 │                                         │
                 └───────────────────┬─────────────────────┘
                                     │
                                     ▼
                    [HIEROS GAMOS: THE INNER MARRIAGE]
              Taking Back Projections & Becoming Whole Before
                 Meeting the Partner on the 7th House Axis
\`\`\`
`;

  return md;
}

function generateReaderHtml(units) {
  const cardsHtml = units.map(u => `
    <article class="unit-card" id="${u.unit_id}">
      <div class="unit-header">
        <span class="unit-badge">${u.epistemic_status}</span>
        <span class="unit-materiality ${u.materiality.toLowerCase()}">${u.materiality}</span>
      </div>
      <h2 class="unit-title">${u.title}</h2>
      <div class="unit-scope">${u.scope}</div>
      <div class="unit-core-insight">${u.core_theme}</div>
      <div class="unit-prose">
        ${u.textual_analysis.map(p => `<p>${p}</p>`).join('')}
      </div>
      <blockquote class="verbatim-quote">
        "${u.verbatim_quote}"
        <cite>— Daniel Giamario, The Shamanic Astrology Handbook</cite>
      </blockquote>
      <div class="heuristic-box">
        <div class="heuristic-header">SHAMANIC ASTROLOGICAL HEURISTIC</div>
        <div class="heuristic-body">${u.operational_heuristic}</div>
      </div>
      <div class="motifs-bar">
        <strong>Key Shamanic Motifs:</strong>
        ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join(' ')}
      </div>
      <script type="application/json" id="trace-data-${u.unit_id}">
        ${JSON.stringify({
          unit_id: u.unit_id,
          title: u.title,
          epistemic_status: u.epistemic_status,
          materiality: u.materiality,
          motifs: u.key_motifs
        })}
      </script>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Shamanic Astrology Handbook — Daniel Giamario | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-subtle: #f4efe4;
      --text-main: #1c1917;
      --text-muted: #57534e;
      --accent-crimson: #85221c;
      --border-light: #e7dfd3;
      --border-dark: #7a7060;
      --shadow-sm: 0 2px 8px rgba(28, 25, 23, 0.04);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: Georgia, 'EB Garamond', serif;
      font-size: 16px;
      line-height: 1.65;
      padding: 24px;
    }
    .reader-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .doc-header {
      border-bottom: 2px solid var(--text-main);
      padding-bottom: 16px;
      margin-bottom: 28px;
    }
    .doc-kicker {
      font-family: -apple-system, sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent-crimson);
      margin-bottom: 6px;
    }
    .doc-title {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 6px;
    }
    .doc-author {
      font-size: 15px;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 12px;
    }
    .view-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 8px;
    }
    .view-tab {
      font-family: -apple-system, sans-serif;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      border: 1px solid var(--border-dark);
      background: var(--bg-card);
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: var(--text-main);
    }
    .view-tab.active {
      background: var(--text-main);
      color: #fff;
    }
    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 4px;
      padding: 24px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-sm);
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-family: -apple-system, sans-serif;
      font-size: 11px;
    }
    .unit-badge {
      font-weight: 700;
      color: var(--accent-crimson);
      letter-spacing: 0.06em;
    }
    .unit-materiality {
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 2px;
    }
    .unit-materiality.critical { background: #ffe4e6; color: #9f1239; }
    .unit-materiality.important { background: #fef3c7; color: #92400e; }
    .unit-materiality.textural { background: #e0f2fe; color: #075985; }
    .unit-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .unit-scope {
      font-family: -apple-system, sans-serif;
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 12px;
    }
    .unit-core-insight {
      font-size: 14px;
      font-style: italic;
      color: #333;
      border-left: 3px solid var(--accent-crimson);
      padding-left: 10px;
      margin-bottom: 16px;
    }
    .unit-prose p {
      margin-bottom: 12px;
      text-align: justify;
    }
    .verbatim-quote {
      border-left: 3px solid var(--text-main);
      padding: 10px 16px;
      font-style: italic;
      background: var(--bg-subtle);
      margin: 16px 0;
      font-size: 14.5px;
    }
    .verbatim-quote cite {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      font-style: normal;
      color: var(--text-muted);
    }
    .heuristic-box {
      border: 1px solid var(--text-main);
      border-left: 4px solid var(--text-main);
      background: #fafafa;
      padding: 12px 14px;
      margin: 16px 0;
    }
    .heuristic-header {
      font-family: -apple-system, sans-serif;
      font-size: 10.5px;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .heuristic-body {
      font-size: 13.5px;
      color: #111;
    }
    .motifs-bar {
      font-family: -apple-system, sans-serif;
      font-size: 11.5px;
      color: var(--text-muted);
      margin-top: 14px;
    }
    .motif-tag {
      background: #eee;
      padding: 2px 6px;
      border-radius: 2px;
      color: #222;
      display: inline-block;
      margin: 2px;
    }
  </style>
</head>
<body>
  <div class="reader-container">
    <header class="doc-header">
      <div class="doc-kicker">BKRS Deep Forensic Master Codex · Mythopoetic Earth-Sky Cosmology</div>
      <h1 class="doc-title">The Shamanic Astrology Handbook</h1>
      <div class="doc-author">Daniel Giamario with Cayelin K. Castell · Complete Ten-Unit Shamanic Masterwork</div>
      <nav class="view-tabs">
        <a href="#view-journey" class="view-tab active" id="view-journey">View A: Source Journey</a>
        <a href="#view-map" class="view-tab" id="view-map">View B: Relational Map</a>
        <a href="#view-experience" class="view-tab" id="view-experience">View C: Operational Heuristics</a>
      </nav>
    </header>

    <main id="units-wrapper">
      ${cardsHtml}
    </main>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;
}

// 1. Write knowledge-units.json
fs.writeFileSync(path.join(targetDir, 'knowledge-units.json'), JSON.stringify(units, null, 2), 'utf8');
console.log(`[1/3] Wrote knowledge-units.json (${units.length} units)`);

// 2. Write master-notes.md
const md = generateMarkdown(units);
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${md.length} characters)`);

// 3. Write index.html
const readerHtml = generateReaderHtml(units);
fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`[3/3] Wrote index.html (${readerHtml.length} characters)`);

console.log('\nSUCCESS: Daniel Giamario: The Shamanic Astrology Handbook successfully built!');
