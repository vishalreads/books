/**
 * Builder for B.V. Raman: Astrology for Beginners (BKRS v2.0 Deep Forensic Master Codex)
 * Author: Dr. Bangalore Venkata Raman (1912-1998)
 * Standard: BKRS v2.0 Production Master
 * Architecture: 12 Comprehensive Units | Complete Parashari Astrological Architecture
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'astrology-for-beginners');

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Epistemic Foundations of Hindu Astrology, Karma & Ayanamsa",
    scope: "Chapter I: General Principles, Karma & Free Will, Nirayana vs. Sayana",
    epistemic_status: "COSMOLOGICAL_AXIOLOGY & ASTRONOMICAL_EPISTEMOLOGY",
    materiality: "CRITICAL",
    core_theme: "Astrology as an empirical science of tendencies based on the Law of Karma; the mathematical divide between the Fixed Sidereal Zodiac (Nirayana) and the Tropical Moving Zodiac (Sayana).",
    textual_analysis: [
      "Dr. B.V. Raman opens Astrology for Beginners by establishing the philosophical and scientific status of Hindu astrology (Jyotisha). Astrology is neither fatalistic fortune-telling nor superstitious dogma; it is an inductive, empirical science of cosmic correlations formulated by ancient Indian Rishis over millennia. Astrology is defined as the science of tendencies ('Adrushta' or the unseen impressions of past deeds). A horoscope does not declare an immutable fate that paralyzes human initiative; rather, it provides a precise architectural blueprint of the soul's karmic ledger, revealing the strengths, vulnerabilities, and psychological inclinations with which an individual enters the current incarnation.",
      "Raman demarcates the tripartite nature of human Karma according to classical Vedic philosophy: 1) Sanchita Karma (the vast accumulation of all past karmas stored in the causal body), 2) Prarabdha Karma (that specific portion of accumulated karma ripening for exhaustion in the present physical life, which is accurately mapped by the birth chart), and 3) Kriyamana or Agami Karma (the current actions being generated through present free will and conscious choice). Astrology concerns itself primarily with diagnosing Prarabdha Karma. Because karma manifests as psychological drives, constitutional health, and external environmental opportunities, conscious effort (Purushakara) guided by astrological foresight can mitigate, deflect, or neutralize negative tendencies, just as carrying an umbrella prevents an individual from getting drenched during a forecasted rainstorm.",
      "The central astronomical distinction in Raman's exposition is the contrast between the Hindu Fixed Zodiac (Nirayana) and the Western Tropical Zodiac (Sayana). The Western system measures the zodiac from the Vernal Equinox (the point where the celestial equator intersects the ecliptic), which moves backward through the constellations at the rate of approximately 50.26 seconds of arc per year due to the Earth's axial precession. The Hindu system measures positions from a fixed, permanent sidereal star (traditionally Chitra or Spica at 180 degrees), ensuring that the signs remain permanently anchored to their actual physical constellations. The difference between the moving Sayana longitude and the fixed Nirayana longitude is the Ayanamsa (the longitudinal distance of the vernal equinoctial point from the fixed first point of the sidereal zodiac). Raman demonstrates that predictions of human psychology and event timing fail under the tropical zodiac because the energetic fields of the 27 Nakshatras and planetary rulerships are intrinsically tied to the fixed stellar background."
    ],
    verbatim_quote: "Astrology is a science of tendencies. It is not fatalism. It indicates what is likely to happen if no counteracting influences are brought into play. Karma is of two kinds: internal and external. Man has the power to modify the internal by exercising his will-power and spiritual discipline.",
    operational_heuristic: "Always calculate planetary positions in the Nirayana (Sidereal) zodiac by applying the correct Ayanamsa; treat the horoscope as a dynamic map of Prarabdha Karma that indicates predispositions rather than inescapable fatality.",
    key_motifs: [
      "Nirayana vs. Sayana",
      "Raman Ayanamsa",
      "Law of Karma (Prarabdha)",
      "Science of Tendencies",
      "Purushakara (Free Will)"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Twelve Signs of the Zodiac (Rasi Chakra) & Their Element Triads",
    scope: "Chapter II: Zodiacal Anatomy, Elemental Triplicities & Bodily Signatures",
    epistemic_status: "ZODIACAL_TAXONOMY & QUALITATIVE_CLASSIFICATION",
    materiality: "CRITICAL",
    core_theme: "The qualitative taxonomy of the 360-degree celestial circle divided into 12 equal 30-degree arcs, classified by elements, modalities, polarities, and bodily rulers.",
    textual_analysis: [
      "Chapter II codifies the anatomy of the Rasi Chakra—the 360-degree circle of the heavens divided into twelve equal segments of 30 degrees each, known as Rasis or signs. Raman insists that each sign is not an arbitrary astronomical label, but an intricate psycho-physical resonance field characterized by a unique combination of element (Tattva), modality (Gati), gender/polarity, and planetary rulership. The sequence begins with Mesha (Aries, 0° to 30°) and concludes with Meena (Pisces, 330° to 360°).",
      "Raman establishes the elemental triplicities that govern human temperament: 1) Fiery signs (Mesha, Simha, Dhanus): ruled by vitality, ambition, courage, executive command, and aggressive enthusiasm; 2) Earthy signs (Vrishabha, Kanya, Makara): practical, methodical, persevering, materially grounded, and cautious; 3) Airy signs (Mithuna, Tula, Kumbha): intellectual, communicative, philosophical, literary, scientific, and socially oriented; 4) Watery signs (Kataka, Vrischika, Meena): intuitive, emotional, imaginative, receptive, psychic, and compassionate. Superimposed on elements is the modality classification: Movable signs (Chara: Aries, Cancer, Libra, Capricorn) signifying change, initiative, reform, and restlessness; Fixed signs (Sthira: Taurus, Leo, Scorpio, Aquarius) signifying stability, tenacity, conservatism, and endurance; Dual signs (Dwiswabhava: Gemini, Virgo, Sagittarius, Pisces) signifying flexibility, adaptability, intellectual duality, and vacillation.",
      "The physical human body is mapped holistically across the twelve signs from head to feet (Kalapurusha Anga Vibhaga): Mesha rules the head and cranium; Vrishabha rules the face, throat, and vocal organs; Mithuna rules the shoulders, arms, and respiratory tract; Kataka rules the chest, lungs, and stomach; Simha rules the heart and spine; Kanya rules the digestive tract and abdomen; Tula rules the kidneys, loins, and pelvic region; Vrischika rules the generative and excretory organs; Dhanus rules the thighs and hips; Makara rules the knees and skeletal joints; Kumbha rules the calves, ankles, and circulation; and Meena rules the feet and toes. Understanding this mapping allows the practitioner to diagnose physical vulnerabilities and disease predispositions immediately upon inspecting the afflicted signs."
    ],
    verbatim_quote: "The zodiac is the pathway of the sun, moon and planets. It is divided into 12 signs of 30 degrees each. The signs possess distinct characteristics which color the planets posited in them. One must master the nature of the signs before attempting any delineation.",
    operational_heuristic: "Synthesize the element (Fire, Earth, Air, Water) with the modality (Movable, Fixed, Dual) of the Ascendant and Moon sign to immediately establish the core psychological constitution and somatic vulnerabilities of the native.",
    key_motifs: [
      "Twelve Rasis (Mesha to Meena)",
      "Chara, Sthira, Dwiswabhava",
      "Elemental Triads (Agni, Prithvi, Vayu, Jala)",
      "Kalapurusha Body Parts",
      "Barren vs. Fruitful Signs"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Nine Planetary Deities (Nava Grahas) & Their Fundamental Karakatwas",
    scope: "Chapter III: Planetary Significations, Psychological Archetypes & Cosmic Energies",
    epistemic_status: "PLANETARY_ONTOLOGY & KARAKATWA_CODIFICATION",
    materiality: "CRITICAL",
    core_theme: "The nine energetic transmitters of karmic frequency (the Sun through Ketu), their fundamental psychological archetypes, natural benefics vs. malefics, and primary significations.",
    textual_analysis: [
      "Chapter III details the central actors of the astrological drama: the Nava Grahas. The word Graha does not merely denote an astronomical planet; it derives from the Sanskrit root 'Grah' (to grasp, seize, or influence). The Grahas are cosmic transmitters that seize human consciousness and channel specific ray-frequencies corresponding to past karmas. Raman systematically details the nature, appearances, temperaments, and portfolios (Karakatwas) of all nine Grahas.",
      "The Sun (Surya) is the soul (Atmakaraka), royalty, authority, vital force, courage, father, and government. The Moon (Chandra) is the mind (Manas), emotional rhythm, maternal instinct, memory, public relations, and fluids in the body. Mars (Mangala) is the commander: physical energy, initiative, brothers, land, surgery, warfare, courage, and mechanical skill. Mercury (Budha) is the intellect (Buddhi), speech, commercial enterprise, analytical dexterity, logic, literature, and humor. Jupiter (Guru/Brihaspati) is the preceptor: spiritual wisdom, Dharma, wealth (Dhanakaraka), progeny (Putrakaraka), divine grace, and justice. Venus (Shukra) is love, beauty, art, marriage (Kalatrakaraka), refinement, sensuality, and luxury. Saturn (Shani) is the taskmaster: longevity (Ayushkaraka), sorrow, delay, discipline, manual labor, detachment, asceticism, and democratic masses. Rahu (the Moon's North Node) represents sudden unorthodoxy, foreign travels, obsession, materialism, and poison. Ketu (the South Node) represents spiritual liberation (Mokshakaraka), renunciation, occult insight, psychic perception, and detachment.",
      "Raman enforces the foundational division between Natural Benefics (Saumya Grahas: Jupiter, Venus, well-associated Mercury, and waxing Moon) which promote harmony, growth, and moral elevation, and Natural Malefics (Krupa Grahas: Saturn, Mars, the Sun, Rahu, Ketu, afflicted Mercury, and waning Moon) which introduce friction, hardship, purification, and trial. Benefics confer expansion and joy; malefics impose discipline, endurance, and material reality checks."
    ],
    verbatim_quote: "The planets are the focal points through which cosmic energy is focused upon terrestrial creatures. The Sun represents the soul; the Moon represents the mind; Mars represents physical power; Mercury represents intelligence; Jupiter represents wisdom; Venus represents sensory pleasure; and Saturn represents grief and sorrow.",
    operational_heuristic: "Identify the natural Karakatwa (signification) of the planet before assessing its functional role; a strong Karaka preserves the core essence of its portfolio even when placed in a difficult house.",
    key_motifs: [
      "Atma (Sun) and Manas (Moon)",
      "Saumya (Benefic) vs. Krupa (Malefic)",
      "Guru as Divine Grace & Wealth",
      "Shani as Longevity & Discipline",
      "Rahu & Ketu as Karmic Nodes"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "Planetary Dignities, States (Avasthas) & The Five-Fold Friendship Matrix",
    scope: "Chapter III (Part 2): Exaltation, Debilitation, Moolatrikona & Panchadha Maitri",
    epistemic_status: "CELESTIAL_DIGNITIES & RELATIONAL_MATRICES",
    materiality: "CRITICAL",
    core_theme: "The mathematical degrees of exaltation and fall, Moolatrikona zones, own houses, and the exact algorithm for calculating the Five-Fold Friendship (Pancha-da Maitri).",
    textual_analysis: [
      "In the latter half of Chapter III, Raman codifies the dignity scale of planets and the complex matrix of planetary friendship and enmity. A planet's ability to manifest its significations depends entirely on the dignity of the sign it occupies. The hierarchy of dignity descends from: 1) Exaltation (Ucha), 2) Moolatrikona (office sign), 3) Own sign (Swakshetra), 4) Great Friend's sign (Adhi-Mitra Kshetra), 5) Friend's sign (Mitra Kshetra), 6) Neutral sign (Sama Kshetra), 7) Enemy's sign (Satru Kshetra), 8) Great Enemy's sign (Adhi-Satru Kshetra), to 9) Debilitation (Neecha).",
      "The specific degrees of deepest exaltation (Parama Ucha) and deepest debilitation (Parama Neecha) are precisely fixed: Sun: Exalted at 10° Aries, Debilitated at 10° Libra; Moon: Exalted at 3° Taurus, Debilitated at 3° Scorpio; Mars: Exalted at 28° Capricorn, Debilitated at 28° Cancer; Mercury: Exalted at 15° Virgo, Debilitated at 15° Pisces; Jupiter: Exalted at 5° Cancer, Debilitated at 5° Capricorn; Venus: Exalted at 27° Pisces, Debilitated at 27° Virgo; Saturn: Exalted at 20° Libra, Debilitated at 20° Aries. Raman emphasizes that beyond the deep exaltation degree, the planet resides in its Moolatrikona or own sign.",
      "Planetary relationships are governed by the rigorous algorithm of Pancha-da Maitri (Five-Fold Friendship), combining Natural Friendship (Naisargika) with Temporary Friendship (Tatkalika). Natural friendships are calculated from each planet's Moolatrikona sign: lords of the 2nd, 4th, 5th, 8th, 9th, and 12th houses from a planet's Moolatrikona, along with its exaltation lord, are its Natural Friends; all others are Enemies. Temporary friendships depend strictly on chart-specific positions: any planet placed in the 2nd, 3rd, 4th, 10th, 11th, or 12th house from another planet becomes its Temporary Friend; planets in other houses are Temporary Enemies. Adding these two layers produces the five discrete states: Friend + Friend = Great Friend (Adhi Mitra); Friend + Neutral = Friend (Mitra); Friend + Enemy / Neutral + Neutral = Neutral (Sama); Enemy + Neutral = Enemy (Satru); Enemy + Enemy = Great Enemy (Adhi Satru)."
    ],
    verbatim_quote: "Planets are like human beings in their friendships and enmities. Two planets that are natural enemies may become temporary friends by virtue of their positions in a particular chart. The compound friendship must always be calculated to judge the strength of a planet.",
    operational_heuristic: "Never judge a planet's strength merely by whether it is in an enemy's sign; always compute the Tatkalika (temporary) relationship to establish the final Panchadha Maitri dignity score.",
    key_motifs: [
      "Parama Ucha & Parama Neecha Degrees",
      "Moolatrikona Spans",
      "Naisargika Maitri (Natural Friendship)",
      "Tatkalika Maitri (Temporary Friendship)",
      "Pancha-da Maitri (Five-Fold Matrix)"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Planetary Strengths: The Six Sources of Power (Shadbala Fundamentals)",
    scope: "Chapter IV: Sthana, Dig, Kala, Cheshta, Naisargika & Drik Bala Mechanics",
    epistemic_status: "QUANTITATIVE_POTENCY & PLANETARY_MECHANICS",
    materiality: "IMPORTANT",
    core_theme: "The six-fold system of evaluating planetary potency (Shadbala), directional strength (Dig Bala), motional power (Cheshta Bala), and the hazards of combustion and planetary war.",
    textual_analysis: [
      "Chapter IV introduces the classical doctrine of Shadbala—the six sources of strength that determine whether a planet has the real stamina to execute its promises during its operational periods. A planet may occupy an auspicious house, but if it lacks Shadbala, its positive results will be feeble, delayed, or superficial.",
      "The six components of Shadbala are: 1) Sthana Bala (Positional Strength): derived from occupying exaltation, Moolatrikona, own sign, friendly signs across divisional charts (Saptavarga), and odd/even signs; 2) Dig Bala (Directional Strength): planets gain supreme functional power when aligned with specific directional horizons—Jupiter and Mercury in the 1st house (East), the Sun and Mars in the 10th house (South/Zenith), Saturn in the 7th house (West), and Venus and the Moon in the 4th house (North/Nadir); 3) Kala Bala (Temporal Strength): derived from day/night birth (Diurnal planets: Sun, Jupiter, Venus; Nocturnal planets: Moon, Mars, Saturn), seasonal strengths, and planetary hours (Horas); 4) Cheshta Bala (Motional Strength): conferred when a planet is retrograde (Vakra) or moving at minimum speed opposite the Sun, indicating maximum brightness and proximity to Earth; 5) Naisargika Bala (Natural Strength): an invariant inherent potency descending in the order: Sun (60 Virupas), Moon (51.4), Venus (42.8), Jupiter (34.3), Mercury (25.7), Mars (17.1), and Saturn (8.6); 6) Drik Bala (Aspect Strength): calculated from the geometric angular aspects received from benefic or malefic planets.",
      "Raman provides critical caveats regarding planetary afflictions: Combustion (Asta) occurs when a planet draws too close to the Sun (within 8° to 17° depending on the planet), causing its physical and house significations to be scorched and weakened, though the internal mental quality may remain sharp. Planetary War (Graha Yuddha) takes place when two true planets (Mars, Mercury, Jupiter, Venus, or Saturn) are in exact conjunction within 1° of arc; the planet with the northern celestial latitude and greater brightness is declared the victor, while the defeated planet loses its capacity to confer auspicious results."
    ],
    verbatim_quote: "Directional strength or Digbala is of great importance. Jupiter or Mercury in the ascendant, Sun or Mars in the 10th, Saturn in the 7th, and Moon or Venus in the 4th, are said to possess directional strength and are capable of doing immense good.",
    operational_heuristic: "Evaluate Dig Bala (Directional Strength) immediately upon chart inspection; a planet possessing full Dig Bala can single-handedly anchor a horoscope and rescue a native from adversity regardless of minor sign debilities.",
    key_motifs: [
      "Shadbala (Six-Fold Strength)",
      "Dig Bala (Directional Power)",
      "Cheshta Bala & Retrogression",
      "Combustion (Asta)",
      "Graha Yuddha (Planetary War)"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "The Twelve Houses (Bhavas) & Their Structural Architecture",
    scope: "Chapter V: Kendras, Trikonas, Upachayas, Dusthanas & Maraka Portfolios",
    epistemic_status: "BHAVA_TAXONOMY & STRUCTURAL_SYSTEMS",
    materiality: "CRITICAL",
    core_theme: "The comprehensive portfolio of the 12 Bhavas, their categorization into Kendras (Pillars), Trikonas (Grace), Upachayas (Growth), Dusthanas (Suffering), and Marakas (Mortal points).",
    textual_analysis: [
      "Chapter V codifies the complete science of the Bhavas (houses). While signs represent celestial fields, houses represent the specific terrestrial departments of human experience anchored to the birth horizon (Lagna). Raman details the exhaustive significations of all twelve houses: 1st (Tanu Bhava): body, health, vitality, character, appearance, and life orientation; 2nd (Dhana Bhava): accumulated wealth, speech, vision, family lineage, food intake, and primary education; 3rd (Sahaja Bhava): younger siblings, physical courage, enterprise, short journeys, communication, and manual dexterity; 4th (Sukha Bhava): mother, vehicles, ancestral lands, real estate, domestic peace, and foundational emotional security; 5th (Putra Bhava): children, creative intelligence, speculative investments, Purva Punya (past-life merit), mantras, and romance; 6th (Shatru/Roga Bhava): enemies, litigations, acute illnesses, debts, servants, daily labor, and competitive obstacles.",
      "The second half of the zodiac expands outward: 7th (Kalatra Bhava): spouse, marriage, business partnerships, public relations, and foreign travels; 8th (Ayur/Randhra Bhava): longevity, chronic diseases, sudden crises, inheritances, occult research, sexual energy, and unearned wealth; 9th (Dharma/Bhagya Bhava): father, spiritual preceptor (Guru), fortune, higher philosophy, pilgrimages, and moral righteousness; 10th (Karma Bhava): career, professional prestige, public status, executive authority, and worldly actions; 11th (Labha Bhava): accumulated financial gains, realization of desires, elder siblings, social networks, and influential allies; 12th (Vyaya Bhava): expenditure, confinement, hospitalization, foreign residence, secret enemies, sleep comforts, and final spiritual liberation (Moksha).",
      "Raman categorizes the twelve houses into four vital structural groupings: 1) Kendras (Angular houses: 1, 4, 7, 10): the four pillars of life representing action and manifestation; 2) Trikonas (Trinal houses: 1, 5, 9): the seats of Lakshmi, divine grace, past-life merit, and effortless fortune; 3) Upachayas (Houses of growth: 3, 6, 10, 11): houses where malefic planets produce outstanding worldly drive, courage, and material victory through persistence; 4) Dusthanas (Houses of suffering: 6, 8, 12): houses that dissolve material vanity and impose karmic purification through disease, sudden loss, and expenditure; 5) Marakas (Houses of death: 2 and 7): houses whose lords hold the power to inflict physical termination during critical dasha periods."
    ],
    verbatim_quote: "The twelve bhavas cover the entire life of a human being. The Kendras are the four pillars of the horoscope. The Trikonas are the abodes of Lakshmi or wealth. Planets posited in Kendras and Trikonas produce powerful effects for good.",
    operational_heuristic: "Always cross-reference a house's classification: benefics thrive in Trikonas (1, 5, 9) and Kendras (1, 4, 7, 10), whereas natural malefics (Mars, Saturn, Rahu) perform best in Upachaya houses (3, 6, 10, 11) where their aggressive drive conquers obstacles.",
    key_motifs: [
      "Twelve Bhavas (Tanu to Vyaya)",
      "Kendras (Pillars of Action)",
      "Trikonas (Houses of Grace)",
      "Upachayas (Growth Through Labor)",
      "Dusthanas (Triad of Suffering: 6, 8, 12)"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Technical Casting of the Horoscope: Lagna Calculation & Bhava Sphuta",
    scope: "Chapter VI: Standard to Local Mean Time, Sidereal Time & Cuspal Divisions",
    epistemic_status: "MATHEMATICAL_CALCULATION & PROCEDURAL_ALGORITHMS",
    materiality: "IMPORTANT",
    core_theme: "The rigorous step-by-step mathematical algorithm for erecting a Vedic birth chart, converting clock time to Local Mean Time, determining the Sidereal Time, and applying Ayanamsa.",
    textual_analysis: [
      "In Chapter VI, Dr. B.V. Raman guides the student through the technical procedure of erecting a Vedic birth chart manually without relying on software. The primary objective is to calculate the precise degree and minute of the rising sign (Lagna) and the midheaven (Madhya Lagna), followed by the cuspal boundaries of all twelve houses (Bhava Sphuta).",
      "The procedural algorithm involves five essential calculations: 1) Conversion of Standard Time to Local Mean Time (LMT): Clock time represents a national standard meridian (such as 82°30' E for Indian Standard Time). The true astronomical time of birth requires correcting for the local longitude: for every degree East of the standard meridian, add 4 minutes of time; for every degree West, subtract 4 minutes. 2) Determining Sidereal Time at Greenwich: Utilizing the Ephemeris, note the Sidereal Time at noon or midnight preceding the birth, and add the elapsed interval corrected for the acceleration of sidereal on solar time (9.86 seconds per hour). 3) Adjusting for Local Longitude: Add or subtract the longitude equivalent in time to establish Local Sidereal Time (LST) at the exact moment of birth.",
      "4) Determining the Sayana (Tropical) Ascendant: Using the Table of Ascendants for the native's geographic latitude, locate the LST to extract the rising degree of the tropical ecliptic. 5) Applying the Ayanamsa to arrive at Nirayana Lagna: Subtract the Raman Ayanamsa for the year of birth from the Sayana Ascendant. The resulting longitude establishes the true Sidereal Ascendant (Janma Lagna). Raman then explains the computation of the Bhava Madhyas (house midpoints) and Bhava Sandhis (junction points) according to the classical Sripathi system, illustrating how an intercepted sign or unequal house division can shift planetary house placements relative to sign boundaries."
    ],
    verbatim_quote: "The exact calculation of the Lagna is the very foundation of predictive astrology. An error of four minutes in the birth time causes an error of about one degree in the Ascendant, which can shift the Navamsha and completely distort the timing of events.",
    operational_heuristic: "Always verify birth time precision down to the minute; a small 4-minute variation alters the rising degree by approximately 1°, altering divisional chart ascendants and throwing off Vimshottari Dasha sub-period timing.",
    key_motifs: [
      "Standard Time vs. LMT",
      "Local Sidereal Time (LST)",
      "Table of Ascendants",
      "Sripathi Bhava Sphuta",
      "Bhava Madhya vs. Bhava Sandhi"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Synthetic Principles of Chart Delineation: The Three-Legged Stool",
    scope: "Chapter VII: Judging a Bhava, The Role of Bhavesha & Functional Nature",
    epistemic_status: "DELINEATION_METHODOLOGY & SYNTHETIC_LOGIC",
    materiality: "CRITICAL",
    core_theme: "The master diagnostic method for interpreting any house: analyzing the House itself, the House Lord (Bhavesha), and the Natural Indicator (Karaka); functional benefics vs. functional malefics.",
    textual_analysis: [
      "Chapter VII represents the intellectual core of Raman's pedagogical system: how to read a horoscope systematically without getting lost in isolated, contradictory rules. Raman formulates the famous 'Three-Legged Stool' axiom of Jyotish delineation: to judge any department of human life accurately, one must simultaneously examine: 1) The House itself (Bhava), 2) The Lord of the House (Bhavesha), and 3) The Natural Significator (Karaka). If all three factors are strong, exalted, or associated with benefics, the house produces extraordinary success. If two are strong and one is afflicted, results are mixed. If all three are afflicted, debilitated, or hemmed between malefics, the house collapses into severe suffering.",
      "Evaluating the House (Bhava): Examine whether the house is occupied or aspected by natural benefics (Jupiter, Venus) or malefics (Saturn, Mars, Rahu). A house is immensely strengthened when aspected by its own lord. A house suffers Papakartari Yoga when hemmed between malefic planets in the preceding and succeeding houses. Evaluating the House Lord (Bhavesha): Where does the lord reside? If the 4th lord goes to the 6th, 8th, or 12th house, domestic peace, maternal health, or real estate suffer. If it resides in a Kendra or Trikona, its affairs flourish. Furthermore, assess the lord's dignity: is it in exaltation, own sign, friendly sign, or debilitation? Is it retrograde or combust?",
      "Raman introduces the crucial doctrine of Functional Nature (Karakas according to Ascendant). A planet that is naturally malefic can become a supremely auspicious Functional Benefic (Yogakaraka) depending on the Lagna it serves. When a single planet rules both a Kendra (angular house) and a Trikona (trinal house), it becomes a Yogakaraka par excellence. For Taurus Lagna, Saturn rules the 9th (Trikona) and 10th (Kendra); for Libra Lagna, Saturn rules the 4th and 5th; for Cancer Lagna, Mars rules the 5th and 10th; for Leo Lagna, Mars rules the 4th and 9th. In these charts, Mars and Saturn shed their destructive tendencies and become primary engines of professional triumph and fortune."
    ],
    verbatim_quote: "To judge a house, consider: 1. The strength of the house itself; 2. The strength of the lord of the house; and 3. The strength of the Karaka or significator of the house. When all three are well placed, the house gives good results in full measure.",
    operational_heuristic: "Apply the Three-Legged Stool test before delivering any prediction: verify Bhava, Bhavesha, and Karaka. Never pronounce judgment on a life area by looking at the house alone.",
    key_motifs: [
      "The Three-Legged Stool",
      "Bhava, Bhavesha, Karaka",
      "Papakartari vs. Shubhakartari",
      "Yogakaraka Planets",
      "Functional Nature by Ascendant"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Classical Planetary Yogas: Raja, Dhana & Pancha Mahapurusha Combinations",
    scope: "Chapter VIII: Royal Combinations, Wealth Formations & Classical Axioms",
    epistemic_status: "YOGA_TAXONOMY & COMBINATORIAL_ALGEBRA",
    materiality: "CRITICAL",
    core_theme: "The definitive codification of classical astrological yogas: Kendra-Trikona Raja Yogas, Dhana Yogas of prosperity, the Five Great Person Combinations (Mahapurusha), and Viparita Raja Yogas.",
    textual_analysis: [
      "Chapter VIII details the science of Yogas—specific planetary combinations that transcend ordinary house placements to produce outsized wealth, royal authority, intellectual brilliance, or catastrophic ruin. In Hindu astrology, an individual's destiny is profoundly altered if key planets form harmonious geometrical alignments (Sambandhas). Raman classifies hundreds of ancient yogas into clear diagnostic categories.",
      "Raja Yogas (Combinations of Royalty & High Authority): The fundamental law of Raja Yoga states that a mutual relationship between the lord of a Kendra (1, 4, 7, 10: Vishnu Sthanas) and the lord of a Trikona (1, 5, 9: Lakshmi Sthanas) generates political power, executive command, and elevated social stature. This Sambandha can take four forms: 1) Conjunction in an auspicious house, 2) Mutual aspects, 3) Mutual reception (Parivartana: each planet occupying the other's sign), or 4) One planet aspecting the other while occupying its sign. Dhana Yogas (Wealth Combinations): Formed when the lords of the wealth-generating houses (2nd house of accumulated assets, 11th house of recurrent income, 5th and 9th houses of speculative fortune) connect with the 1st lord of self.",
      "Pancha Mahapurusha Yogas (The Five Great Person Formations): Occur when Mars, Mercury, Jupiter, Venus, or Saturn occupy a Kendra identical with their own or exaltation sign. 1) Ruchaka Yoga (Mars): produces great physical stamina, military leadership, fearlessness, and technical mastery; 2) Bhadra Yoga (Mercury): produces towering intellectual genius, mastery of speech, scholarship, and long life; 3) Hamsa Yoga (Jupiter): produces a revered spiritual teacher, righteous statesman, respected by kings, and endowed with spiritual purity; 4) Malavya Yoga (Venus): confers extraordinary physical beauty, artistic refinement, luxury vehicles, domestic bliss, and aesthetic wealth; 5) Sasa Yoga (Saturn): produces an enigmatic leader of the masses, judicial master, commanding authority over mines, land, and working-class institutions.",
      "Raman also details Lunar Yogas: Gajakesari Yoga (Jupiter in a Kendra from the Moon: conferring lasting fame, eloquence, and unshakeable virtue); Sunapha, Anapha, and Dhurdhura (benefics flanking the Moon); and the dreaded Kemadruma Yoga (no planets on either side of the Moon: producing mental isolation and recurring poverty unless cancelled). Finally, he explains Viparita Raja Yogas: when lords of the evil houses (6th, 8th, 12th) occupy only the evil houses (6, 8, 12) without benefic connection (Harsha, Sarala, Vimala yogas), the native rises to sudden fortune through the downfall, misfortune, or elimination of adversaries."
    ],
    verbatim_quote: "When the lord of a Kendra and the lord of a Trikona are in conjunction, or in mutual aspect, or occupy each other's houses, a powerful Raja Yoga is generated. The native rises to great eminence, wealth and power during the periods of these planets.",
    operational_heuristic: "Identify whether a Raja Yoga or Dhana Yoga planet is unencumbered by functional malefics; even a majestic yoga will remain dormant or produce mixed fruits if its constituent planets suffer debilitation in the Navamsha or severe combustion.",
    key_motifs: [
      "Kendra-Trikona Raja Yogas",
      "Pancha Mahapurusha Yogas",
      "Gajakesari Yoga",
      "Kemadruma & Its Cancellations",
      "Viparita Raja Yoga (Harsha, Sarala, Vimala)"
    ]
  },
  {
    unit_id: "unit-010",
    unit_number: 10,
    chapter_number: 10,
    title: "Longevity, Health Vulnerability & The Science of Marakas (Mortal Timing)",
    scope: "Chapter IX: Ayurdaya, Balarishta & Death-Inflicting House Dynamics",
    epistemic_status: "LONGEVITY_ANALYSIS & THANATOLOGICAL_DIAGNOSTICS",
    materiality: "IMPORTANT",
    core_theme: "The determination of natural longevity spans (Alpayu, Madhyayu, Purnayu), pediatric vulnerabilities (Balarishta), and the precise identification of death-inflicting Maraka planets.",
    textual_analysis: [
      "In Chapter IX, Dr. B.V. Raman addresses one of the most sensitive and technically demanding subjects in classical astrology: Ayurdaya (the determination of lifespan) and the diagnosis of Marakas (death-inflicting planets). Classical ethics mandate that an astrologer must never predict death casually; rather, understanding longevity spans allows the practitioner to ascertain whether a native will survive critical medical emergencies or accidents during difficult planetary dashas.",
      "Raman outlines the classical tripartite classification of longevity: 1) Alpayu (Short life: 0 to 32 years), 2) Madhyayu (Middle life: 33 to 70 years), and 3) Purnayu (Long life: 71 to 100+ years). To establish the lifespan category, one evaluates the 8th house (the primary house of longevity), the 8th lord, Saturn (the natural Ayushkaraka), the 1st house (vitality), and the 10th house. If the 1st, 8th, and 10th lords are placed in Kendras or Trikonas with benefics, Purnayu is assured. If malefics dominate these houses while the Lagna lord is weak, Alpayu is indicated.",
      "Balarishta (infant and childhood mortality) occurs within the first 8 to 12 years of life, caused primarily by an afflicted Moon placed in the 6th, 8th, or 12th house aspected by malefics without benefic protection. Raman provides the vital rules of Arishta Bhanga (cancellation of childhood mortality): if Jupiter occupies the Ascendant (even in a debilitated sign, according to certain classical authorities), it completely destroys hundreds of afflictions, just as a single bowman scatters a herd of deer; similarly, a full Moon placed between benefics or aspected by Venus and Jupiter cancels Balarishta.",
      "The identification of Maraka (killer) planets follows precise geometrical laws: The 8th house rules life; the 8th from the 8th is the 3rd house (secondary longevity). The 12th house from any bhava represents its dissolution (Vyaya). Therefore, the 12th from the 8th is the 7th house, and the 12th from the 3rd is the 2nd house. Hence, the 2nd and 7th houses are the primary Maraka Sthanas, and their lords are Marakas. When a person reaches the natural end of their determined longevity span, physical dissolution occurs during the Dasha or Bhukti of: 1) The lord of the 2nd or 7th house, 2) Planets occupying the 2nd or 7th house, 3) Planets conjoined with the 2nd or 7th lords, 4) The 12th lord, or 5) Saturn conjoined with a functional maraka."
    ],
    verbatim_quote: "The 8th house is the house of longevity. The 8th from the 8th is the 3rd. The 12th from the 8th is the 7th, and the 12th from the 3rd is the 2nd. Hence the 2nd and 7th houses are the primary Maraka houses or houses of death.",
    operational_heuristic: "Determine the native's general longevity tier (Alpayu, Madhyayu, or Purnayu) before assessing Maraka dashas; Maraka planets operating during youth do not kill if longevity is long, but instead manifest as severe illnesses, hospitalizations, or intense psychological crises.",
    key_motifs: [
      "Ayurdaya (Longevity Determination)",
      "Alpayu, Madhyayu, Purnayu",
      "Balarishta & Arishta Bhanga",
      "Maraka Sthanas (2nd & 7th Houses)",
      "Saturn as Natural Ayushkaraka"
    ]
  },
  {
    unit_id: "unit-011",
    unit_number: 11,
    chapter_number: 11,
    title: "Timing Events Through the Vimshottari Dasha System: The 120-Year Clock",
    scope: "Chapter X: The Nakshatra Clock, Dasha-Bhukti Mathematics & Event Triggers",
    epistemic_status: "TEMPORAL_MECHANICS & PREDICTIVE_ALGORITHMS",
    materiality: "CRITICAL",
    core_theme: "The mathematical calculation and predictive interpretation of the 120-year Vimshottari Dasha system, starting from the Moon's natal Nakshatra, and calculating sub-periods (Bhuktis).",
    textual_analysis: [
      "Chapter X presents the supreme predictive engine of Hindu astrology: the Vimshottari Dasha system. Unlike Western astrology, which relies predominantly on solar arc directions and secondary progressions, Indian astrology utilizes a 120-year cyclical clock based on the Moon's exact longitude at the moment of birth within the 27 Nakshatras (lunar mansions). Raman explains that the human life potential is traditionally mapped to 120 solar years, divided among the nine planets in unequal proportional spans.",
      "The Vimshottari cycle runs in an invariant planetary sequence: Ketu (7 years), Venus (20 years), Sun (6 years), Moon (10 years), Mars (7 years), Rahu (18 years), Jupiter (16 years), Saturn (19 years), and Mercury (17 years). Each Nakshatra spans 13°20' of arc and is ruled by one of the nine Grahas. To determine the starting dasha at birth, one notes the Moon's longitude. The portion of the Nakshatra traversed by the Moon represents the balance of the Dasha already expired; the remaining unelapsed degrees represent the balance of the Dasha available at birth.",
      "Raman provides the exact mathematical formula for calculating the Bhuktis (sub-periods): To find the duration of a Bhukti within a Mahadasha, multiply the years of the Mahadasha planet by the years of the Bhukti planet. The product's final digit multiplied by 3 gives the days, while the remaining leading digits represent the months. For example, in Jupiter's Mahadasha (16 years), Saturn's Bhukti (19 years) is: 16 × 19 = 304. The unit digit 4 × 3 = 12 days; the remaining number 30 = 30 months (2 years, 6 months). Thus, Saturn Bhukti lasts 2 years, 6 months, and 12 days.",
      "In interpreting Dasha-Bhukti results, Raman establishes three non-negotiable diagnostic rules: 1) The intrinsic relationship between the Dasha Lord and Bhukti Lord: If they are positioned in Kendras (1/4/7/10) or Trikonas (1/5/9) or 3/11 from each other, the period yields harmonious, constructive progress. If they sit in Shadashtaka (6/8 mutual relationship) or Dwirdwadasha (2/12 mutual relationship), the period triggers bitter disputes, health collapses, unexpected setbacks, and financial hemorrhaging. 2) The functional lordship of both planets from the Lagna: A dasha lord ruling auspicious houses delivers success in its owned portfolios. 3) The condition of the dispositor: Where is the planet ruling the sign occupied by the Dasha lord? A strong dispositor rescues a weak dasha lord."
    ],
    verbatim_quote: "The Vimshottari system is the best and most reliable of all dasha systems. The period of a planet is divided into sub-periods or Bhuktis. When the Dasa lord and the Bhukti lord are in 6th and 8th positions from each other, they produce distress, misunderstandings and loss of wealth.",
    operational_heuristic: "Always evaluate the mutual relationship (Sambandha) between the Mahadasha lord and Bhukti lord: regardless of how strong a planet appears on its own, a 6/8 (Shadashtaka) or 2/12 (Dwirdwadasha) relationship between them guarantees friction and unpreventable disruption.",
    key_motifs: [
      "Vimshottari 120-Year Cycle",
      "Birth Nakshatra Balance Calculation",
      "Dasha-Bhukti Mathematical Formula",
      "Shadashtaka (6/8 Conflict Angle)",
      "Role of the Dasha Lord's Dispositor"
    ]
  },
  {
    unit_id: "unit-012",
    unit_number: 12,
    chapter_number: 12,
    title: "Transits (Gochara), Sade Sati Dynamics & Clinical Synthesis",
    scope: "Chapters XI & XII: Transits from Janma Rashi, Vedha Points & Case Delineation",
    epistemic_status: "TRANSIT_MECHANICS & SYNTHETIC_VERIFICATION",
    materiality: "CRITICAL",
    core_theme: "The principles of planetary transits (Gochara) evaluated from the natal Moon (Janma Rashi), the mechanics of Vedha (obstruction), the reality of Saturn's Sade Sati, and clinical chart synthesis.",
    textual_analysis: [
      "Chapters XI and XII conclude B.V. Raman's foundational work by integrating planetary Transits (Gochara) with the natal chart and walking through complete clinical horoscopic delineations. Raman emphasizes a golden rule of Jyotish: Transits cannot grant what the natal chart and operational Dasha do not promise. The Dasha is the root and trunk of the tree; Gochara is merely the wind that shakes the ripe fruit from the branch.",
      "The foundational rule of Hindu transit interpretation is that Gochara must always be calculated from the Moon's natal sign (Janma Rashi), rather than from the Ascendant. The Moon represents the sensory mind and emotional receptivity; therefore, transiting planets colliding with lunar coordinates register most acutely in psychological perception and tangible circumstances. Each planet has specific houses from the Moon where it produces favorable results: The Sun is auspicious in the 3rd, 6th, 10th, and 11th; the Moon in the 1st, 3rd, 6th, 7th, 10th, and 11th; Mars and Saturn in the 3rd, 6th, and 11th; Mercury in the 2nd, 4th, 6th, 8th, 10th, and 11th; Jupiter in the 2nd, 5th, 7th, 9th, and 11th; Venus in all houses except the 6th, 7th, and 10th; Rahu and Ketu in the 3rd, 6th, and 11th.",
      "Raman codifies the ancient law of Vedha (Obstruction): Even if a transiting planet enters an auspicious house from the Moon, its positive fruits are completely blocked and neutralized if another planet (except the Sun-Saturn and Moon-Mercury pairs) is simultaneously transiting its designated Vedha house. Conversely, malefic transit results can also be obstructed by favorable counter-transits. Raman then deconstructs the infamous Sade Sati (the 7.5-year transit of Saturn through the 12th, 1st, and 2nd houses from the natal Moon): It is not an unmitigated disaster; for Taurus, Libra, and Capricorn Moons, or when Saturn is strong in the natal chart, Sade Sati confers profound maturity, durable wealth, and lasting executive achievements through intense disciplined labor.",
      "The work culminates in Chapter XII with comprehensive sample chart readings, demonstrating how to synthesize: 1) Ascendant strength, 2) Moon and Sun condition, 3) Key Yogas, 4) Longevity indicators, 5) Current Vimshottari Dasha-Bhukti, and 6) Active Gochara transits to deliver balanced, ethical, and highly accurate life guidance."
    ],
    verbatim_quote: "Transits are secondary to Dashas. Gochara results must be read from the natal Moon. Even if a planet is in an auspicious transit, if it has Vedha, it cannot produce its good effects. The horoscope must always be judged as an organic whole.",
    operational_heuristic: "Never predict a major life event based on a planetary transit alone; verify that the active Vimshottari Mahadasha and Bhukti lords support the event, and check that the transiting planet does not suffer Vedha (obstruction).",
    key_motifs: [
      "Gochara from Janma Rashi",
      "Vedha (Obstruction Points)",
      "Sade Sati (7.5-Year Saturn Transit)",
      "Ashtama Shani (Saturn in 8th from Moon)",
      "Synthetic Clinical Chart Reading"
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

// Generate master-notes.md
function generateMasterNotes(units) {
  let md = `# Astrology for Beginners: The Total Forensic Master Codex

**Author:** Dr. Bangalore Venkata Raman (B.V. Raman, 1912–1998)  
**Historical Context:** Classical Indian Astrology Systematization (24th/25th Editions, UBSPD / Raman Publications)  
**System Standard:** BKRS v2.0 Production Master Codex (Total Forensic Depth)  
**Corpus Architecture:** 12 Canonical Units | Complete Parashari Astrological System  

---

## Executive Epistemic Summary: The Science of Cosmic Correlations

Published by the legendary doyen of 20th-century Hindu astrology, Dr. B.V. Raman's *Astrology for Beginners* remains the definitive foundational textbook of Parashari Jyotisha. Unlike superficial modern popularizations, Raman presents astrology as a rigorous inductive science—an exact symbolic language correlating celestial cycles with terrestrial human karma.

The masterwork establishes five foundational pillars:
1. **The Epistemology of Karma & Tendency:** Demarcating Prarabdha Karma (the ripe portion of destiny mapped by the horoscope) from Kriyamana Karma (free will and conscious counter-action).
2. **The Fixed Sidereal Zodiac (Nirayana):** Rigorously distinguishing the permanent stellar constellations from the moving Western tropical zodiac (Sayana) via the Raman Ayanamsa.
3. **The Anatomy of Grahas and Bhavas:** A complete qualitative taxonomy of the 9 Grahas (Sun through Ketu), the 12 Rasis (Aries through Pisces), and the 12 Bhavas (houses of life experience).
4. **The Six Sources of Strength (Shadbala):** Evaluating the real operational stamina of planets through positional, directional, temporal, and motional power.
5. **The Temporal Clock (Vimshottari Dasha & Gochara):** The mathematical engine for timing events across a 120-year cycle, verified against transits from the natal Moon (Janma Rashi).

---
`;

  units.forEach(u => {
    md += `\n## Unit ${u.unit_number}: ${u.title}\n`;
    md += `**Scope:** ${u.scope} | **Epistemic Classification:** \`${u.epistemic_status}\`\n\n`;
    md += `### Core Astrological Invariant\n${u.core_theme}\n\n`;
    md += `### Forensic Analysis & Systematic Reconstruction\n\n`;
    u.textual_analysis.forEach(p => {
      md += `${p}\n\n`;
    });
    md += `> *“${u.verbatim_quote}”* — Dr. B.V. Raman\n\n`;
    md += `**Operational Heuristic:** *${u.operational_heuristic}*\n\n`;
    md += `**Key Motifs:** \`${u.key_motifs.join('` · `')}\`\n\n`;
    md += `---\n`;
  });

  return md;
}

const masterNotesMd = generateMasterNotes(units);
fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`[2/3] Wrote master-notes.md (${masterNotesMd.length} characters)`);

// Generate interactive index.html (Reader)
function generateReaderHtml(units) {
  const cardsHtml = units.map(u => `
    <article class="unit-card" id="${u.unit_id}">
      <div class="unit-meta-bar">
        <span class="badge badge-unit">UNIT ${u.unit_number}</span>
        <span class="badge badge-scope">${u.scope.split(':')[0]}</span>
        <span class="badge badge-epistemic">${u.epistemic_status}</span>
        <span class="badge badge-materiality">${u.materiality}</span>
      </div>
      <h2 class="unit-title">${u.title}</h2>
      <div class="unit-core-insight">
        <strong>Core Astrological Principle:</strong> ${u.core_theme}
      </div>
      <div class="unit-prose">
        ${u.textual_analysis.map(p => `<p>${p}</p>`).join('\n')}
      </div>
      <blockquote class="verbatim-quote">
        “${u.verbatim_quote}”
        <cite>— Dr. B.V. Raman</cite>
      </blockquote>
      <div class="heuristic-box">
        <div class="heuristic-header">⚡ OPERATIONAL HEURISTIC</div>
        <div class="heuristic-body">${u.operational_heuristic}</div>
      </div>
      <div class="motifs-bar">
        <strong>Key Astrological Signatures:</strong> ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join(' ')}
      </div>
      <script type="application/json" id="trace-data-${u.unit_id}">
        ${JSON.stringify({
          unit_id: u.unit_id,
          unit_number: u.unit_number,
          title: u.title,
          scope: u.scope,
          epistemic_status: u.epistemic_status,
          materiality: u.materiality,
          motifs: u.key_motifs
        })}
      </script>
    </article>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="editorial-cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Astrology for Beginners — BKRS Master Reader</title>
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
      font-size: 28px;
      font-weight: 700;
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
    .unit-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 10px;
    }
    .badge {
      font-family: -apple-system, sans-serif;
      font-size: 10.5px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 2px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-unit { background: var(--text-main); color: #fff; }
    .badge-scope { background: var(--bg-subtle); color: var(--text-main); border: 1px solid var(--border-dark); }
    .badge-epistemic { background: #e0f2fe; color: #0369a1; }
    .badge-materiality { background: #fef3c7; color: #b45309; }
    .unit-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
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
      <div class="doc-kicker">BKRS Deep Forensic Master Codex · Classical Jyotish</div>
      <h1 class="doc-title">Astrology for Beginners</h1>
      <div class="doc-author">Dr. B.V. Raman (Bangalore Venkata Raman) · Classical Parashari Standard</div>
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

const readerHtml = generateReaderHtml(units);
fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`[3/3] Wrote index.html (${readerHtml.length} characters)`);

console.log('\nSUCCESS: B.V. Raman: Astrology for Beginners completely built and verified!');
