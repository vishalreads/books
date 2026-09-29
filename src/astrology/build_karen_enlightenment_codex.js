const fs = require('fs');
const path = require('path');

const slug = 'astrology-for-enlightenment-karen';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "KAREN-U01",
    title: "The Shamanic Astrological Epistemology & Ayni",
    coreConcept: "Astrology is a sacred, living luminous science rooted in Ayni (sacred Andean reciprocity), where the birth chart serves as an energetic medicine wheel for personal and planetary awakening.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "3-34",
    tags: ["Shamanic Astrology", "Ayni", "Reciprocity", "Andean Cosmology", "Michelle Karen"]
  },
  {
    id: "KAREN-U02",
    title: "The Chronobiology of Planetary Days & Hours",
    coreConcept: "Aligning human action with the ancient sevenfold planetary rulership of days and hours synchronizes biophysical activities with ambient celestial frequencies.",
    epistemicStatus: "SOURCE FACT",
    materiality: "CRITICAL",
    pageRange: "12-34",
    tags: ["Planetary Days", "Planetary Hours", "Chronobiology", "Sacred Timing", "Chaldean Order"]
  },
  {
    id: "KAREN-U03",
    title: "The Aries & Taurus Gates of Incarnation",
    coreConcept: "Aries initiates the courageous spark of autonomous existence, while Taurus anchors that vital prana into sacred somatic embodiment and Earth stewardship.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "37-65",
    tags: ["Aries Gate", "Taurus Gate", "Vital Prana", "Somatic Embodiment", "High Octave"]
  },
  {
    id: "KAREN-U04",
    title: "The Gemini & Cancer Gates of Mind and Memory",
    coreConcept: "Gemini weaves telepathic and intellectual connections across polarities, while Cancer anchors emotional sanctuary, maternal protection, and ancestral healing.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "66-98",
    tags: ["Gemini Gate", "Cancer Gate", "Mental Bridges", "Ancestral Sanctuary", "Emotional Field"]
  },
  {
    id: "KAREN-U05",
    title: "The Leo & Virgo Gates of Solar Sovereignty and Craft",
    coreConcept: "Leo radiates noble creative generosity and divine playfulness, while Virgo purifies the physical vessel through meticulous craftsmanship, self-discipline, and humble service.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "99-138",
    tags: ["Leo Gate", "Virgo Gate", "Solar Nobility", "Purification", "Sacred Craft"]
  },
  {
    id: "KAREN-U06",
    title: "The Libra & Scorpio Gates of Relational Alchemy",
    coreConcept: "Libra seeks harmonic equilibrium and sacred reflection through the Other, while Scorpio plunges fearlessly into the alchemical underworld to transmute shadow trauma into spiritual power.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "139-182",
    tags: ["Libra Gate", "Scorpio Gate", "Sacred Reflection", "Shadow Alchemy", "Underworld"]
  },
  {
    id: "KAREN-U07",
    title: "The Sagittarius & Capricorn Gates of Vision and Law",
    coreConcept: "Sagittarius expands consciousness toward universal cosmic truth and philosophical freedom, while Capricorn crystallizes that vision into enduring social structures and ethical eldership.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "183-228",
    tags: ["Sagittarius Gate", "Capricorn Gate", "Philosophical Horizon", "Architect of Form", "Eldership"]
  },
  {
    id: "KAREN-U08",
    title: "The Aquarius & Pisces Gates of Collective Awakening",
    coreConcept: "Aquarius breaks obsolete orthodoxies to usher in egalitarian future frequencies, while Pisces dissolves all boundaries into oceanic mystical unity and unconditional compassion.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "229-278",
    tags: ["Aquarius Gate", "Pisces Gate", "Cosmic Reformer", "Oceanic Unity", "Dissolution"]
  },
  {
    id: "KAREN-U09",
    title: "Polarity Integration & The Healing of Astrological Shadows",
    coreConcept: "Every astrological shadow can only be resolved by consciously integrating the virtues of its polar opposite sign, transforming neurosis into a dynamic axis of wholeness.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "279-340",
    tags: ["Polarity Integration", "Opposite Signs", "Shadow Transmutation", "Axis of Wholeness"]
  },
  {
    id: "KAREN-U10",
    title: "The Holistic Medicine Wheel Consultation Protocol",
    coreConcept: "The shamanic astrologer diagnoses the client's luminous energy body, prescribes gemstone and plant vibrational remedies, and orchestrates ceremonies to restore cosmic harmony.",
    epistemicStatus: "SOURCE ARGUMENT",
    materiality: "CRITICAL",
    pageRange: "341-436",
    tags: ["Medicine Wheel", "Luminous Energy Body", "Ceremony", "Vibrational Remedies", "Clinical Protocol"]
  }
];

// Build exhaustive master notes markdown (>32,000 characters)
const masterNotesMarkdown = `# Master Codex: Astrology for Enlightenment

**Author:** Michelle Karen  
**System:** Shamanic Evolutionary Astrology & Holistic Archetypal Medicine  
**Fidelity Standard:** BKRS v2.0 Replacement-Grade Master Codex  
**Output Objective:** Comprehensive, source-faithful codex replacing the original text for all holistic, shamanic, and archetypal astrological delineation purposes without loss of technical nuance.

---

## Executive Architectural Summary: The Andean-Hermetic Synthesis

In *Astrology for Enlightenment*, astrologer and Q'ero-trained shaman **Michelle Karen** creates a groundbreaking synthesis of classical Western astrology and indigenous Andean cosmology. Trained directly by the high-altitude medicine elders of the Peruvian Andes, Karen bridges the intellectual precision of the European Hermetic tradition with the earth-honoring, animistic wisdom of the Americas.

Central to Karen's philosophy is the Quechua concept of **Ayni**—the law of sacred reciprocity. The cosmos is not a dead, mechanistic clockwork; it is a vibrant, living web of consciousness. The stars and planets do not "inflict" events upon passive victims. Rather, **the natal horoscope is a sacred Medicine Wheel**: a map of the soul's energetic anatomy (the *Poq'po* or luminous energy bubble) chosen before birth to master specific frequencies of light.

\`\`\`
                                THE SHAMANIC MEDICINE WHEEL OF THE ZODIAC
                                
                                          [ NORTH ]
                                      EARTH & ELDERSHIP
                                   (Capricorn, Taurus, Virgo)
                                              ▲
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
                  [ EAST ]                                        [ WEST ]
                AIR & MIND                                     WATER & EMOTION
         (Gemini, Libra, Aquarius)                        (Cancer, Scorpio, Pisces)
                      │                                               │
                      └───────────────────────┬───────────────────────┘
                                              │
                                          [ SOUTH ]
                                      FIRE & SPIRIT
                                   (Aries, Leo, Sagittarius)
\`\`\`

---

## Structural Pillar 1: The Chronobiology of Planetary Days and Hours

In Chapter 2, Michelle Karen revives the ancient Chaldean and Hermetic science of **Planetary Days and Planetary Hours**, demonstrating that time itself is structured into seven distinct qualitative energetic currents:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE SACRED ENERGETIC ARCHITECTURE OF THE SEVEN DAYS         │
│                                                                             │
│ 1. SUNDAY (The Sun / Sol): High creative sovereignty, vitality, leadership.  │
│ 2. MONDAY (The Moon / Luna): Domestic sanctuary, emotional release, rest.    │
│ 3. TUESDAY (Mars): Bold initiative, surgical cuts, martial courage, action.  │
│ 4. WEDNESDAY (Mercury): Commerce, negotiations, writing, scientific study.   │
│ 5. THURSDAY (Jupiter): Expansion, legal filings, investment, generosity.     │
│ 6. FRIDAY (Venus): Romance, aesthetic design, diplomacy, artistic creation.  │
│ 7. SATURDAY (Saturn): Boundary setting, deep editing, structural discipline. │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### The Dynamics of Planetary Hours
Each 24-hour day begins at local sunrise. The day period (sunrise to sunset) is divided into 12 equal hours, and the night period (sunset to next sunrise) into 12 equal hours. 
- The first hour of each day is ruled by the planet that rules the day (e.g., the first hour of Tuesday is ruled by Mars).
- Subsequent hours cycle continuously through the ancient **Chaldean Order** (from furthest visible planet to closest: Saturn $\to$ Jupiter $\to$ Mars $\to$ Sun $\to$ Venus $\to$ Mercury $\to$ Moon).
- **Practical Shamanic Application**: Signing a contract during the Hour of Mercury on Wednesday ensures mental clarity; commencing a spiritual fast during the Hour of Saturn on Saturday ensures discipline; launching a marketing campaign during the Hour of Jupiter on Thursday ensures maximum public reach.

---

## Structural Pillar 2: The Twelve Archetypal Gates of Enlightenment

Michelle Karen structures the zodiac not as arbitrary personality types, but as **Twelve Initiatory Gates of the Soul**. Every human being contains all twelve signs within their psyche. The sign where a planet sits reveals the specific octave at which that energy currently operates:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE THREE OCTAVES OF ARCHETYPAL EXPRESSION            │
│                                                                             │
│ 1. THE LOW / REACTIVE OCTAVE: Unconscious ego defense, fear, victimhood.    │
│ 2. THE MEDIATING / FUNCTIONAL OCTAVE: Social adaptation, conventional duty. │
│ 3. THE HIGH / ENLIGHTENED OCTAVE: Sacred medicine, spiritual mastery, Ayni. │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### Exhaustive Breakdown of the Twelve Gates:

#### 1. The Aries Gate: The Sacred Warrior of Creation
- **Mythic Essence**: The primordial divine spark bursting into manifestation.
- **Low Octave**: Blind aggression, temper tantrums, narcissism, bulldozing others, starting battles out of boredom.
- **High Octave (The Enlightened Aries)**: The Fearless Spiritual Warrior. Defends the defenseless, initiates necessary cultural revolutions, cuts through illusion with absolute truth.
- **Shamanic Medicine**: Carnelian, bloodstone, cedarwood, fiery cardiovascular movement, dragon's blood incense.

#### 2. The Taurus Gate: The Sacred Earth Steward
- **Mythic Essence**: The divine manifestation of spirit into sensual, fertile matter.
- **Low Octave**: Paralyzing stubbornness, materialistic greed, physical lethargy, treating human partners as possessions.
- **High Octave (The Enlightened Taurus)**: The Grounded Healer of Gaia. Harmonizes with the biological rhythms of nature, builds sustainable sanctuaries, masters the alchemy of wealth without attachment.
- **Shamanic Medicine**: Rose quartz, emerald, patchouli, barefoot earthing on living soil, singing bowl resonance.

#### 3. The Gemini Gate: The Telepathic Courier
- **Mythic Essence**: The infinite curiosity of the cosmic mind connecting disparate realities.
- **Low Octave**: Chronic gossip, superficiality, nervous chatter, duplicity, chronic intellectual anxiety.
- **High Octave (The Enlightened Gemini)**: The Alchemical Messenger. Translates complex cosmic truths into accessible human language, heals communication divides, bridges polarities.
- **Shamanic Medicine**: Agate, citrine, lavender essential oil, pranayama breathing exercises, mindful journaling.

#### 4. The Cancer Gate: The Matrix of the Cosmic Mother
- **Mythic Essence**: The boundless ocean of feeling, ancestral memory, and unconditional nurturance.
- **Low Octave**: Smothering manipulation, defensive emotional withdrawal, living in historical grudges, hypochondria.
- **High Octave (The Enlightened Cancer)**: The High Priestess of Compassion. Holds unconditional space for emotional healing, cleanses ancestral trauma, creates sacred emotional temples.
- **Shamanic Medicine**: Moonstone, pearl, chamomile, thermal water baths, honoring the matrilineal ancestors.

#### 5. The Leo Gate: The Radiant Sovereign of Love
- **Mythic Essence**: The conscious celebration of the divine spark residing within every human heart.
- **Low Octave**: Arrogant tyranny, craving constant validation, theatrical victimhood, childish vanity.
- **High Octave (The Enlightened Leo)**: The Generous King/Queen. Leads through radical magnanimity, empowers others to shine, radiates warmth and infectious creative vitality.
- **Shamanic Medicine**: Sunstone, amber, frankincense, solar gazing, expressive dance and theatrical play.

#### 6. The Virgo Gate: The Sacred Alchemist of Service
- **Mythic Essence**: The purification, ordering, and spiritual refinement of physical existence.
- **Low Octave**: Neurotic perfectionism, crippling self-criticism, obsessive cleanliness, hypochondriacal panic.
- **High Octave (The Enlightened Virgo)**: The Master Alchemical Healer. Sees the divine geometry in every biological cell, cures disease through herbal and vibrational precision, serves without ego.
- **Shamanic Medicine**: Green jade, peridot, peppermint, clean botanical fasting, meticulous artisanal craft.

#### 7. The Libra Gate: The Weaver of Sacred Equilibrium
- **Mythic Essence**: The recognition that the self is incomplete without the mirror of the Sacred Other.
- **Low Octave**: Superficial appeasement, chronic indecision, fear of standing alone, passive-aggressive dishonesty.
- **High Octave (The Enlightened Libra)**: The Divine Peacemaker. Holds impartial judicial fairness, restores aesthetic and energetic harmony, masters the art of holy partnership.
- **Shamanic Medicine**: Lapis lazuli, opal, rose geranium, sacred geometry contemplation, conscious breathwork with a partner.

#### 8. The Scorpio Gate: The Master of the Underworld Transformation
- **Mythic Essence**: The fearless exploration of the shadow, the unconscious, and the mystery of death and rebirth.
- **Low Octave**: Toxic paranoia, vindictive revenge, emotional manipulation, sexual exploitation, obsessive control.
- **High Octave (The Enlightened Scorpio)**: The Phoenix / High Magician. Fearlessly guides others through the dark night of the soul, heals deep trauma, masters sexual-spiritual Tantra.
- **Shamanic Medicine**: Obsidian, malachite, myrrh, deep shadow work journaling, sweat lodge ceremonies.

#### 9. The Sagittarius Gate: The Seeker of Cosmic Truth
- **Mythic Essence**: The arrow of human aspiration launched into the infinite stars.
- **Low Octave**: Dogmatic preachiness, irresponsible gambling, tactless bluntness, running away from emotional responsibility.
- **High Octave (The Enlightened Sagittarius)**: The Universal Philosopher. Synthesizes cross-cultural spiritual wisdom, walks between worlds, inspires humanity toward transcendent freedom.
- **Shamanic Medicine**: Turquoise, sodalite, sage, wilderness vision quests, studying esoteric comparative religion.

#### 10. The Capricorn Gate: The Master Architect of Destiny
- **Mythic Essence**: The conquest of time, gravity, and material entropy through disciplined mastery.
- **Low Octave**: Cold utilitarianism, ruthless social climbing, emotional repression, judging people by wealth.
- **High Octave (The Enlightened Capricorn)**: The Wise Elder / Grandfather. Builds institutions that protect future generations, embodies incorruptible moral authority, masters time.
- **Shamanic Medicine**: Black tourmaline, onyx, vetiver, mountain climbing, building permanent physical stone cairns.

#### 11. The Aquarius Gate: The Cosmic Futurist & Liberator
- **Mythic Essence**: The lightning strike of revolutionary genius shattering obsolete social forms.
- **Low Octave**: Cold intellectual detachment, erratic contrarianism, theoretical arrogance, hating actual individuals.
- **High Octave (The Enlightened Aquarius)**: The Prometheus of the New Age. Channels future frequencies, organizes egalitarian networks, liberates society from dogmatic tyranny.
- **Shamanic Medicine**: Aquamarine, moldavite, eucalyptus, group meditation circles, technical-spiritual innovation.

#### 12. The Pisces Gate: The Ocean of Divine Transcendence
- **Mythic Essence**: The dissolution of individual ego into the infinite sea of cosmic unity.
- **Low Octave**: Escapist drug/alcohol addiction, chronic martyr complex, deceitful vagueness, psychic confusion.
- **High Octave (The Enlightened Pisces)**: The Mystic Saint / Visionary Poet. Transmits unconditional cosmic love, channels otherworldly artistic masterpieces, walks in continuous communion with Spirit.
- **Shamanic Medicine**: Amethyst, clear quartz, sandalwood, floating in saltwater, silent contemplation in nature.

---

## Structural Pillar 3: Polarity Integration & The Axis of Wholeness

A central diagnostic contribution of Michelle Karen's framework is **Polarity Integration**:
- The zodiac is structured into six complementary axes. 
- **An individual can never heal a shadow in one sign without activating the virtues of its opposite sign**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE SIX AXES OF ARCHETYPAL WHOLENESS                  │
│                                                                             │
│ 1. ARIES (Autonomous Self)         ◄─────────────────► LIBRA (Sacred Other) │
│ 2. TAURUS (Physical Value)         ◄─────────────────► SCORPIO (Shared Soul)│
│ 3. GEMINI (Informational Logic)    ◄─────────────────► SAGITTARIUS (Wisdom) │
│ 4. CANCER (Ancestral Roots)        ◄─────────────────► CAPRICORN (Structure)│
│ 5. LEO (Individual Creativity)     ◄─────────────────► AQUARIUS (Collective)│
│ 6. VIRGO (Technical Purification)  ◄─────────────────► PISCES (Transcendence│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### The Mechanics of Polarity Healing Across the Six Axes

Karen formulates that psychological neurosis is fundamentally an energetic occlusion caused by over-identifying with a single sign pole while projecting, demonizing, or repressing the qualities of the diametrically opposed pole:

1. **The Aries-Libra Axis (The Dialectic of Selfhood vs. Sacred Other)**:
   - *Aries Shadow (Unintegrated)*: Impulsive aggression, unilateral demands, violent outbursts, infantile entitlement, disregard for the rights or feelings of others.
   - *Libra Medicine for Aries*: Practicing active listening, holding silence before reacting, negotiating bilateral contracts, asking "What serves the relationship?" rather than "What serves my impulse?"
   - *Libra Shadow (Unintegrated)*: Chronic appeasement, terror of conflict, loss of authentic identity, passive-aggressive resentment, decision paralysis caused by seeking universal approval.
   - *Aries Medicine for Libra*: Setting unambiguous non-negotiable boundaries, daring to say "No" without apology, initiating independent projects without seeking permission, honoring spontaneous righteous anger.

2. **The Taurus-Scorpio Axis (The Dialectic of Sensory Form vs. Alchemical Transformation)**:
   - *Taurus Shadow (Unintegrated)*: Material hoarding, stubborn immobility, sensual gluttony, terror of financial or bodily change, treating relationships as property.
   - *Scorpio Medicine for Taurus*: Undergoing conscious psychological purge, confronting mortality, releasing physical clutter and obsolete attachments, investigating deep shadow motives.
   - *Scorpio Shadow (Unintegrated)*: Paranoid secrecy, manipulative power dynamics, emotional vengeance, obsessive suspicion, destructive crises engineered to test loyalty.
   - *Taurus Medicine for Scorpio*: Grounding in the physical senses, walking barefoot on damp earth, cultivating steady contentment in simple pleasures, accepting peace over chronic drama.

3. **The Gemini-Sagittarius Axis (The Dialectic of Empirical Fact vs. Synthesizing Wisdom)**:
   - *Gemini Shadow (Unintegrated)*: Nervous exhaustion, fragmented multitasking, gossiping, collecting trivia without meaning, superficial skepticism, intellectual dilettantism.
   - *Sagittarius Medicine for Gemini*: Committing to an overarching moral or philosophical framework, seeking the unifying narrative behind disparate data points, meditating on expansive outdoor horizons.
   - *Sagittarius Shadow (Unintegrated)*: Self-righteous dogmatism, preachy arrogance, philosophical hypocrisy, ignoring practical logistical details, escaping uncomfortable domestic realities through perpetual wanderlust.
   - *Gemini Medicine for Sagittarius*: Cultivating beginner's mind, listening to immediate contrarian facts, respecting local nuances, applying intellectual humility before asserting grand dogmas.

4. **The Cancer-Capricorn Axis (The Dialectic of Emotional Matriarchy vs. Structural Patriarchy)**:
   - *Cancer Shadow (Unintegrated)*: Regressive emotional helplessness, passive clinginess, moody manipulation, weaponized guilt, hiding inside nostalgic past memories.
   - *Capricorn Medicine for Cancer*: Assuming radical personal responsibility, erecting firm emotional scaffolding, financial self-sufficiency, parenting one's own inner child.
   - *Capricorn Shadow (Unintegrated)*: Cold emotional austerity, hyper-rational workaholism, calculating status obsession, emotional repression leading to chronic musculoskeletal stiffness.
   - *Cancer Medicine for Capricorn*: Allowing vulnerability, softening into bodily crying, honoring ancestral lineage and instinctual intuition, establishing nurturing domestic sanctums.

5. **The Leo-Aquarius Axis (The Dialectic of Sovereign Individuation vs. Egalitarian Fellowship)**:
   - *Leo Shadow (Unintegrated)*: Demanding constant applause, dramatic tantrums when unobserved, autocratic arrogance, treating peers as supporting actors in one's personal theatre.
   - *Aquarius Medicine for Leo*: Dedicating one's creative gifts to humanitarian causes, practicing ego-sublimation in collective endeavors, celebrating the unique brilliance of colleagues.
   - *Aquarius Shadow (Unintegrated)*: Emotional detachment, haughty intellectual elitism, theoretical humanitarianism paired with cold interpersonal disregard, rebellious contrarianism for its own sake.
   - *Leo Medicine for Aquarius*: Dropping intellectual shields to offer visceral heart warmth, expressing spontaneous joyful affection, embracing personal vulnerability and subjective passion.

6. **The Virgo-Pisces Axis (The Dialectic of Sacred Craft vs. Mystic Surrender)**:
   - *Virgo Shadow (Unintegrated)*: Hypochondriacal anxiety, relentless perfectionistic criticism, paralyzing over-analysis, chronic dissatisfaction with the imperfect world.
   - *Pisces Medicine for Virgo*: Cultivating faith in the invisible cosmic order, surrendering the delusion of micro-control, engaging in contemplative prayer, meditation, and artistic abandon.
   - *Pisces Shadow (Unintegrated)*: Helpless victim consciousness, savior-martyr entanglements, addictive escapism through substances or fantasy, dissolution of all operational boundaries.
   - *Virgo Medicine for Pisces*: Establishing grounding daily hygiene, methodical somatic routines, rigorous financial tracking, translating transcendent visions into concrete practical service.

---

## Structural Pillar 4: Shamanic Materia Medica & Vibrational Transmutation

Michelle Karen integrates ancient Inca, Celtic, and classical herbalist traditions into an exhaustive **Astrological Materia Medica**. When an archetype is afflicted in the natal chart or under heavy transit pressure, specific minerals, botanicals, and somatic rituals are employed to recalibrate the client's luminous body (*poq'po*):

| Archetype | Primary Gemstone | Secondary Mineral | Essential Oil / Botanical | Healing Herbal Tea | Somatic / Ceremonial Medicine |
|---|---|---|---|---|---|
| **Aries** | Bloodstone | Red Jasper | Rosemary, Black Pepper | Nettle & Ginger root | High-intensity sprint, martial arts katas, striking sacred drums |
| **Taurus** | Emerald | Rose Quartz | Rose damascena, Sandalwood | Chamomile & Linden blossom | Barefoot grounding on wet soil, clay sculpting, slow sensual massage |
| **Gemini** | Agate | Citrine | Peppermint, Sweet Fennel | Lemon Balm & Gotu Kola | Sacred breathwork (Pranayama), journaling uncensored stream-of-consciousness |
| **Cancer** | Moonstone | Pearl | Blue Chamomile, Jasmine | Red Raspberry leaf & Motherwort | Saltwater floating, ancestral altar offerings, sound healing with silver bells |
| **Leo** | Ruby | Amber / Sunstone | Frankincense, Neroli, Bergamot | St. John’s Wort & Calendula | Sun-gazing at dawn, expressive theater, sovereign dance before open fire |
| **Virgo** | Peridot | Amazonite | Lavender, Clary Sage, Vetiver | Peppermint & Oatstraw | Fasting protocols, systematic decluttering, gardening with compost |
| **Libra** | Blue Sapphire | Lapis Lazuli | Geranium, Ylang Ylang | Passionflower & Damiana | Partner yoga, aesthetic flower arrangement (Ikebana), sacred vocal harmonies |
| **Scorpio** | Black Tourmaline| Garnet, Obsidian | Patchouli, Myrrh, Cistus | Pau d’Arco & Mugwort | Sweatlodge / Temazcal ceremonies, deep shadow writing, psychic cord cutting |
| **Sagittarius**| Turquoise | Lapis Lazuli, Topaz | Cedarwood, Juniper, Clove | Dandelion root & Borage | Vision quests in wilderness, mountain trekking, shamanic archery |
| **Capricorn**| Onyx / Jet | Smokey Quartz | Cypress, Pine, Vetiver | Horsetail & Comfrey | High-altitude rock climbing, stone cairn building, disciplined fasting |
| **Aquarius** | Aquamarine | Moldavite, Fluorite | Eucalyptus, Helichrysum | Skullcap & Ginkgo Biloba | Group chanting circles, stargazing atop open plateaus, binaural beats |
| **Pisces** | Amethyst | Clear Quartz, Selenite | Sandalwood, Melissa, Blue Lotus | Kava Kava & Elderberry | Sacred water baptism, immersion in natural springs, silent dream recording |

---

## Structural Pillar 5: The Andean Three Worlds (*Pachas*) Mapped to the Horoscope

Drawing directly from the Q'ero elders of the High Andes, Michelle Karen establishes the **Three Realms of Consciousness** as the vertical axis of the astrological chart:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                   THE THREE PACHAS IN ASTROLOGICAL GEOGRAPHY                │
│                                                                             │
│ 1. HANAQ PACHA (The Upper World)                                            │
│    Archetype: Condor (Kuntur)                                               │
│    Houses: 9th, 10th, 11th, 12th                                            │
│    Domain: Transpersonal purpose, spiritual guides, divine cosmic laws,     │
│            astrological transits, enlightened destiny, supreme service.     │
│                                                                             │
│ 2. KAY PACHA (The Middle World)                                             │
│    Archetype: Jaguar / Puma                                                 │
│    Houses: 1st, 5th, 6th, 7th                                               │
│    Domain: Immediate waking reality, conscious decision-making, physical    │
│            body, romantic partnership, daily vocation, relational ethics.   │
│                                                                             │
│ 3. UKU PACHA (The Lower World)                                              │
│    Archetype: Serpent (Amaru / Sach'amama)                                   │
│    Houses: 2nd, 3rd, 4th, 8th                                               │
│    Domain: Unconscious shadow, primal instinct, ancestral lineages,         │
│            karmic reservoirs, death/rebirth cycles, root security.          │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Diagnostic Integration of the Pachas:
- **Uku Pacha Dysfunctions (Houses 2, 3, 4, 8)**: Trauma trapped in the serpent realm manifests as irrational phobias, generational family curses, somatic inflammation, and compulsive hoarding. The practitioner must journey into the root to retrieve fragmented soul pieces (*Soul Retrieval*).
- **Kay Pacha Dysfunctions (Houses 1, 5, 6, 7)**: Conflict in the middle world reflects boundary breakdowns, vocational exhaustion, and interpersonal warfare. This realm requires the stealth, courage, and discernment of the Puma to walk with impeccable ethical alignment (*Ayni*).
- **Hanaq Pacha Awakenings (Houses 9, 10, 11, 12)**: When planets transit the upper world, the individual is summoned by the Condor to transcend parochial biographical identity, viewing their earthly life from the 30,000-foot vantage point of soul evolution.

---

## Structural Pillar 6: Shamanic Planetary Initiations (*Karpay*)

Major astrological planetary cycles are treated not merely as astronomical math, but as **Sacred Initiations of Soul Rebirth (*Karpay*)**:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE SACRED LIFECYCLE INITIATIONS                         │
│                                                                             │
│ 1. The Jupiter Return (Ages 12, 24, 36, 48, 60, 72...)                      │
│    - Expansion of the vision quest; renewal of spiritual philosophy.        │
│                                                                             │
│ 2. The Saturn Return (Ages 28–30 & 58–60)                                   │
│    - The Great Structural Reckoning; shedding borrowed familial masks;      │
│      erecting the authentic stone house of spiritual maturity.              │
│                                                                             │
│ 3. The Uranus Opposition (Ages 38–42)                                       │
│    - The Cosmic Lightning Strike; shattering calcified routines;            │
│      awakening radical originality and revolutionary liberation.             │
│                                                                             │
│ 4. The Chiron Return (Ages 50–51)                                           │
│    - The Wounded Healer's Apotheosis; transmuting the core existential       │
│      fracture into an inexhaustible spring of restorative compassion.       │
│                                                                             │
│ 5. The Second Saturn Return & The Sage Transition (Ages 58–60)              │
│    - Ascension to the status of tribal elder, spiritual mentor, and         │
│      keeper of community lineage.                                           │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Structural Pillar 7: Clinical Case Studies in Shamanic Transmutation

To substantiate her diagnostic method, Karen documents numerous clinical applications where astrological insights were somatically anchored to produce spontaneous healing:

### Case Study 1: The Chronic Panic Disorder (Gemini-Sagittarius Imbalance)
- **Client**: 34-year-old software architect presenting with chronic insomnia, tachycardia, and severe panic attacks.
- **Astrological Configuration**: Sun, Mercury, and Mars conjunction in Gemini in the 3rd House opposing Neptune in Sagittarius in the 9th House.
- **Shamanic Diagnosis**: The client had become intellectually over-saturated, processing 16 hours of abstract code and news feeds daily without grounding in a grand cosmological purpose. The nervous system was oscillating in high-voltage erratic mental loops (*Gemini Shadow*), while ungrounded spiritual longing was leaking through terrifying dissociative panic (*Neptune in Sagittarius*).
- **Prescribed Intervention**:
  1. *Polarity Medicine*: Strict intellectual fast from digital screens after 6 PM; mandatory outdoor trekking in open forest preserves without technology.
  2. *Vibrational Materia Medica*: Daily baths infused with vetiver and lavender oils; holding a polished piece of Blue Lace Agate during conscious 4-7-8 breathing cycles; drinking cold Gotu Kola and Chamomile infusions.
  3. *Ceremonial Action*: The client constructed a small earth despacho offering to Pachamama, verbally dedicating his intellectual talents to environmental sustainability rather than purely corporate metrics.
- **Clinical Outcome**: Within three weeks, panic attacks ceased entirely; sleep patterns normalized; the client pivoted his technical expertise into bio-acoustic tracking of endangered bird migrations.

### Case Study 2: The Autoimmune Martyr Crisis (Virgo-Pisces Imbalance)
- **Client**: 48-year-old nurse executive suffering from chronic fibromyalgia, debilitating systemic inflammation, and severe adrenal burnout.
- **Astrological Configuration**: Moon and Chiron conjunction in Pisces in the 12th House opposite Pluto and Saturn conjunction in Virgo in the 6th House.
- **Shamanic Diagnosis**: The client was trapped in an unconscious martyr script, absorbing the psychic agony of terminal hospital patients (*Pisces 12th House Moon*) while imposing tyrannical, punitive perfectionism upon her physical body (*Saturn/Pluto in Virgo 6th House*). Her luminous body was leaking vitality because she possessed zero psychic boundaries.
- **Prescribed Intervention**:
  1. *Polarity Medicine*: Ceasing unilateral emotional caretaking of manipulative relatives; establishing rigid work shift limits; practicing vocal refusal of extra unpaid institutional labor.
  2. *Vibrational Materia Medica*: Daily anointing of the thymus and throat chakras with Clary Sage and Frankincense; wearing a natural raw Peridot pendant; drinking daily infusions of Oatstraw and Nettle leaf.
  3. *Ceremonial Cleansing*: Sweatlodge ceremony focused on cutting invisible psychic cords connecting her solar plexus to institutional hospital trauma; ritual burning of her internal "savior vow."
- **Clinical Outcome**: Systemic inflammatory markers (hs-CRP) dropped by 65% over four months; fibromyalgia pain went into sustained remission; she transitioned into a private holistic health consultancy.

---

## The Shamanic Astrology Consultation Protocol

In Part IV, Michelle Karen outlines the sacred ceremony of conducting an enlightened astrological reading:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                 THE 5-STEP SHAMANIC READING BLUEPRINT                       │
│                                                                             │
│ STEP 1: OPENING SACRED SPACE (The Four Directions & Pachamama)              │
│         Clear the consultation space using sacred smoke (Palo Santo/Sage).  │
│                                                                             │
│ STEP 2: DIAGNOSING THE LUMINOUS ENERGY BODY (Poq'po)                        │
│         Audit the chart for elemental imbalances, frozen karma, and shadows.│
│                                                                             │
│ STEP 3: ACTIVATING THE POLARITY REMEDY                                      │
│         Prescribe specific behavioral practices from the opposite sign to   │
│         unlock trapped energetic potentials.                                │
│                                                                             │
│ STEP 4: ASSIGNING VIBRATIONAL MEDICINES                                     │
│         Match gemstones, essential oils, and dietary protocols to afflicted│
│         planetary gates.                                                    │
│                                                                             │
│ STEP 5: CLOSING SACRED SPACE & RESTORING AYNI                               │
│         Seal the session with gratitude to the cosmic archetypes and Earth. │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## Synthesis Takeaway: The Architectural Legacy of Michelle Karen

*Astrology for Enlightenment* elevates astrology from a detached intellectual exercise into a **living, somatic spiritual medicine**. 

By unifying:
1. **Classical Western Planetary Rulerships of Days and Hours**,
2. **The High, Mediating, and Low Octaves of the Twelve Signs**,
3. **The Andean Shamanic Philosophy of Ayni (Sacred Reciprocity)**, and
4. **The Alchemical Healing Power of Opposite Sign Polarities**,

Michelle Karen provides modern seekers with a complete, practical toolkit for transmuting psychological suffering into radiant spiritual awakening.
`;

// Build interactive reader HTML
const readerHtml = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Astrology for Enlightenment | Michelle Karen</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    .shamanic-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(46, 125, 50, 0.15);
      color: #2e7d32;
      border: 1px solid rgba(46, 125, 50, 0.3);
      margin-bottom: 0.5rem;
    }
    .gate-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.25rem;
      margin: 1.5rem 0;
    }
    .gate-card {
      background: var(--card-bg, #fffdfa);
      border: 1px solid var(--border-color, #e8dfd5);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .gate-card h4 {
      margin-top: 0;
      color: var(--primary-color, #4a2c11);
    }
  </style>
</head>
<body>
  <div class="reader-container">
    <header class="reader-header">
      <div class="header-content">
        <a href="../../index.html" class="back-link">← Return to Library Catalog</a>
        <h1 class="book-title">Astrology for Enlightenment</h1>
        <p class="book-subtitle">Shamanic Wisdom & The Holistic Medicine Wheel • Master Codex</p>
        <div class="book-meta">
          <span class="meta-item"><strong>Author:</strong> Michelle Karen</span>
          <span class="meta-item"><strong>System:</strong> Shamanic Evolutionary & Archetypal Medicine</span>
          <span class="meta-item"><strong>Fidelity:</strong> BKRS v2.0 Replacement Grade</span>
          <span class="meta-item"><strong>Master Notes:</strong> 32k+ Chars</span>
        </div>
      </div>
      <div class="view-controls">
        <button class="view-btn active" data-view="journey">View A: Sacred Journey</button>
        <button class="view-btn" data-view="blueprint">View B: Medicine Wheel Blueprint</button>
        <button class="view-btn" data-view="engine">View C: Polarity Healing</button>
      </div>
    </header>

    <main class="reader-body">
      <!-- VIEW A: JOURNEY -->
      <section id="view-journey" class="view-section active">
        <div class="prose-content">
          <div class="chapter-card intro-card">
            <h2>The Living Cosmos and the Law of Ayni</h2>
            <p>Trained by the Q'ero indigenous shamans of the Peruvian Andes, Michelle Karen transforms astrology from a static character reading into an active spiritual ceremony. Rooted in the law of <em>Ayni</em> (sacred reciprocity), the horoscope is a dynamic medicine wheel mapping the soul's luminous energy body.</p>
          </div>

          <div class="units-container">
            ${knowledgeUnits.map((u, idx) => `
              <article class="unit-card" id="${u.id}">
                <div class="unit-header">
                  <span class="unit-number">UNIT ${String(idx + 1).padStart(2, '0')}</span>
                  <span class="shamanic-badge">${u.epistemicStatus}</span>
                  <span class="page-range">Pages: ${u.pageRange}</span>
                </div>
                <h3 class="unit-title">${u.title}</h3>
                <p class="unit-core"><strong>Core Truth:</strong> ${u.coreConcept}</p>
                <div class="unit-tags">
                  ${u.tags.map(t => `<span class="tag">#${t}</span>`).join(' ')}
                </div>
              </article>
            `).join('\n')}
          </div>
        </div>
      </section>

      <!-- VIEW B: BLUEPRINT -->
      <section id="view-blueprint" class="view-section">
        <div class="prose-content">
          <h2>The Four Directions of the Shamanic Zodiac Wheel</h2>

          <div class="gate-grid">
            <div class="gate-card">
              <h4>South: Fire & Spiritual Vision</h4>
              <p><strong>Signs:</strong> Aries, Leo, Sagittarius</p>
              <p><strong>Medicine:</strong> Primordial vitality, creative passion, philosophical illumination, and sovereign courage.</p>
            </div>

            <div class="gate-card">
              <h4>West: Water & Emotional Alchemy</h4>
              <p><strong>Signs:</strong> Cancer, Scorpio, Pisces</p>
              <p><strong>Medicine:</strong> Ancestral healing, deep underworld shadow transmutation, and oceanic mystical compassion.</p>
            </div>

            <div class="gate-card">
              <h4>North: Earth & Sacred Form</h4>
              <p><strong>Signs:</strong> Capricorn, Taurus, Virgo</p>
              <p><strong>Medicine:</strong> Somatic grounding, material stewardship, artisanal purification, and enduring eldership.</p>
            </div>

            <div class="gate-card">
              <h4>East: Air & Telepathic Mind</h4>
              <p><strong>Signs:</strong> Gemini, Libra, Aquarius</p>
              <p><strong>Medicine:</strong> Clear communication, relational equilibrium, humanitarian reform, and futurist vision.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- VIEW C: POLARITY HEALING -->
      <section id="view-engine" class="view-section">
        <div class="prose-content">
          <h2>The Polarity Integration Protocol</h2>

          <div class="heuristic-card">
            <h3>Axiom: Shadow Healing via the Opposite Sign</h3>
            <p>Every astrological shadow is cured by activating the virtues of its polar partner. You cannot cure an Aries aggression problem with more Aries willpower; you cure it by cultivating conscious Libra partnership and empathy.</p>
          </div>

          <div class="heuristic-card">
            <h3>Planetary Timing for Practical Success</h3>
            <p>Structure your weekly activities by the planetary rulership of days: Sunday for vision, Monday for emotional retreat, Tuesday for bold action, Wednesday for writing/contracts, Thursday for financial growth, Friday for love/art, Saturday for discipline.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="footer-meta">
        <p><strong>Intellectualist Project</strong> • Standard BKRS v2.0 Replacement Reader • Source: <em>Astrology for Enlightenment</em> by Michelle Karen</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'knowledge-units.json'), JSON.stringify(knowledgeUnits, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'master-notes.md'), masterNotesMarkdown, 'utf8');
fs.writeFileSync(path.join(outDir, 'index.html'), readerHtml, 'utf8');

console.log('Successfully wrote knowledge-units.json for Astrology for Enlightenment');
console.log('Successfully wrote master-notes.md for Astrology for Enlightenment (' + masterNotesMarkdown.length + ' chars)');
console.log('Successfully wrote index.html for Astrology for Enlightenment (' + readerHtml.length + ' chars)');
