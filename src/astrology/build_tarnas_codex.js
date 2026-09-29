/**
 * Builder for Richard Tarnas: Prometheus the Awakener
 * Subtitle: Technology, Archetypal Psychology, and the Cosmic Origin of the Modern Mind
 * Standard: BKRS v2.0 Production Master
 * Architecture: 10 Comprehensive Units | Archetypal Cosmology & The Uranus Archetype
 */

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'docs', 'distillations', 'prometheus-the-awakener-tarnas');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const units = [
  {
    unit_id: "unit-01",
    unit_number: 1,
    chapter_number: 1,
    title: "The Epistemological Crisis: The Astronomical Misnaming of Uranus",
    scope: "Preface & Part I: The historical accident of planetary nomenclature, the contrast between astronomical Uranus and astrological practice, and the discovery of Uranus in 1781.",
    epistemic_status: "ARCHETYPAL_EPISTEMOLOGY_AND_MYTHIC_NOMENCLATURE",
    materiality: "CRITICAL",
    core_theme: "Unmasking the central anomaly of modern astrology: why the astrological archetype attributed to Uranus bears no resemblance to the mythological Greek Ouranos, but aligns perfectly with Prometheus.",
    textual_analysis: [
      "Richard Tarnas, cultural historian and author of 'The Passion of the Western Mind', identifies a foundational epistemological anomaly that has plagued modern astrology since the discovery of Uranus by William Herschel in 1781. In traditional Greek mythology, Ouranos (Uranus) was the primordial sky god who fathered the Titans with Gaia, loathed his offspring, and forced them into the dark underworld until he was castrated and overthrown by his son Kronos (Saturn). Astrologically, this mythological figure represents rigid, authoritarian repression and static cosmic order—the exact opposite of how astrological Uranus actually functions in charts.",
      "The Astrological Character of Uranus: In clinical astrological observation across two centuries, Uranus has consistently represented rebellion, sudden liberation, radical independence, inventive genius, lightning insights, technological innovation, non-conformity, and revolutionary upheaval. It shatters existing boundaries, overthrows tyrannical authority, and introduces radical novelty.",
      "The Discovery Synchronicity of 1781: Herschel discovered Uranus during the exact decade that humanity was convulsed by the American and French Revolutions, the dawn of the Industrial Revolution, the invention of the steam engine, and the birth of modern scientific secularism. The planet's astronomical emergence coincided precisely with an explosive global awakening of human autonomy and defiance against autocratic monarchy and religious orthodoxy.",
      "The True Archetype Revealed: Tarnas proves that the planetary archetype astrologers call Uranus is mythologically identical to the Greek Titan Prometheus—the fire-bringer, inventor, rebel against Zeus, protector of human freedom, and champion of conscious civilization."
    ],
    verbatim_quote: "Astrologers have observed the phenomenon correctly for two centuries, but named the god wrongly. The planet we call Uranus is not the oppressive sky-father Ouranos; it is Prometheus, the rebel Titan who stole fire from heaven to awaken humanity.",
    operational_heuristic: "When interpreting Uranus in any birth chart or transit, do not look for celestial passivity or patriarchal authority; identify where the native is summoned to act as a Promethean rebel, inventor, and breaker of oppressive traditions.",
    key_motifs: [
      "The Mythological Misnaming of Uranus",
      "Ouranos vs. Prometheus",
      "The 1781 Discovery Synchronicity",
      "The American & French Revolutions",
      "The Dawn of the Promethean Era"
    ]
  },
  {
    unit_id: "unit-02",
    unit_number: 2,
    chapter_number: 2,
    title: "The Promethean Archetype: Fire, Rebellion, and the Birth of Human Autonomy",
    scope: "Part I & Archetypal Analysis: The multi-dimensional mythology of Prometheus: the theft of celestial fire, the defiance of Zeus, the liberation of humanity, and the archetypal core of freedom.",
    epistemic_status: "ARCHETYPAL_PSYCHOLOGY_AND_MYTHIC_CORE",
    materiality: "CRITICAL",
    core_theme: "The essential archetypal qualities of Prometheus: fire as creative intellect and divine spark, the drive for liberty, defiance of arbitrary power, and the courage to endure solitary exile for human advancement.",
    textual_analysis: [
      "The Theft of Fire as Awakening: In Hesiod and Aeschylus (Prometheus Bound), Prometheus defies the supreme sovereign Zeus by stealing fire from Mount Olympus hidden in a hollow fennel stalk, bestowing it upon shivering, unconscious mortals. Metaphorically, fire represents the divine spark of self-consciousness, creative imagination, technological mastery, arts, sciences, and independent moral reasoning.",
      "The Archetype of the Rebel and Liberator: Prometheus stands as the eternal archetypal champion of the underdog against tyrannical authority. Wherever the Promethean force strikes, it mobilizes resistance against oppressive dogmas, paternalistic institutions, and stultifying social conventions. It demands freedom at all costs.",
      "The Inventor and Technologist: Prometheus is the master craftsman (technē) who taught humanity astronomy, mathematics, metallurgy, writing, navigation, and medicine. Every major leap in technological evolution—from the steam engine to electricity, the split atom, space exploration, and personal computers—is an expression of the Promethean impulse.",
      "The Trickster Aspect: Prometheus is also the clever trickster (Hermes' elder brother in craft), who deceived Zeus with the sacrificial ox bones. In human psychology, the Promethean archetype manifests as disruptive wit, subversion of orthodox protocol, eccentric humor, and sudden cognitive reframing that catches the rigid ego completely off-guard."
    ],
    verbatim_quote: "Fire is not merely physical heat; it is the divine spark of autonomous human intellect. By stealing fire, Prometheus emancipated mankind from animal darkness and tyrannical subjugation, instigating the tragic, magnificent adventure of Western civilization.",
    operational_heuristic: "Assess the house and aspects of natal Uranus to locate where the individual refuses to submit to arbitrary authority and where they possess an innate spark of inventive, pioneering brilliance.",
    key_motifs: [
      "The Theft of Celestial Fire",
      "Defiance of Zeus / Sovereign Authority",
      "Prometheus as Master Technologist (Technē)",
      "The Trickster & Unconventional Wit",
      "Autonomous Moral Consciousness"
    ]
  },
  {
    unit_id: "unit-03",
    unit_number: 3,
    chapter_number: 3,
    title: "The Promethean Shadow: The Agony of the Chained Titan and Technological Hubris",
    scope: "Part I: The shadow side of the Promethean archetype: the punishment of being chained to Mount Caucasus, the vulture devouring the liver, hubris, alienation, and modern existential homelessness.",
    epistemic_status: "ARCHETYPAL_SHADOW_AND_EXISTENTIAL_CRISIS",
    materiality: "CRITICAL",
    core_theme: "The inevitable price of stolen fire: how unmediated Promethean rebellion and technological inflation produce radical alienation, nihilistic rootlessness, and somatic agony.",
    textual_analysis: [
      "The Chained Titan and the Daily Torment: Zeus's vengeance upon Prometheus was horrific: he had him chained to a lonely crag on Mount Caucasus, where an eagle (or vulture) tore open his side every day to devour his liver, which regenerated each night. This mythic image depicts the chronic existential price paid by the pioneer, heretic, or revolutionary.",
      "The Psychological Cost of Non-Conformity: The individual who embodies Uranus/Prometheus frequently experiences profound alienation from their family, community, and culture. They feel like a solitary alien stranded on a barbaric planet, burdened with visions of a future that their contemporaries cannot comprehend.",
      "Technological Hubris and Frankenstein's Dilemma: Mary Shelley explicitly subtitled her 1818 masterpiece 'Frankenstein; or, The Modern Prometheus.' When human intellect divorces itself from somatic wisdom, nature, and cosmic reverence, Promethean invention births monstrous unintended consequences: nuclear annihilation, ecological devastation, algorithmic alienation, and dehumanizing industrialization.",
      "The Rebellious Compulsion: Unintegrated Promethean energy degenerates into chronic oppositionality—rebelling against rules merely for the thrill of rebellion, incapable of sustaining deep commitment, burning bridges, and inflicting traumatic shock upon loved ones under the banner of personal freedom."
    ],
    verbatim_quote: "Whoever brings celestial fire must also bear the chains of Caucasus. The Promethean pioneer is forever exposed to the icy winds of cultural alienation, paying for their illumination with the raw agony of being misunderstood by their own generation.",
    operational_heuristic: "Warn clients with heavy Uranian placements against the 'Frankenstein trap': ensure that their intellectual or technological breakthroughs remain rooted in emotional compassion (Venus) and somatic responsibility (Saturn), lest their rebellion devour them.",
    key_motifs: [
      "Prometheus Bound on Mount Caucasus",
      "The Regenerating Liver (Daily Agony)",
      "The Heretic's Solitary Alienation",
      "Frankenstein as Modern Promethean Hubris",
      "Oppositionality vs. True Liberation"
    ]
  },
  {
    unit_id: "unit-04",
    unit_number: 4,
    chapter_number: 4,
    title: "The 84-Year Uranus Transit Cycle: The Life Clocks of Awakening",
    scope: "Part II: The astronomical 84-year orbit of Uranus through the human lifespan: the opening square (~age 21), the opposition (~age 40–42), the closing square (~age 63), and the Uranus Return (~age 84).",
    epistemic_status: "DEVELOPMENTAL_ASTROLOGY_AND_TRANSIT_CHRONOLOGY",
    materiality: "CRITICAL",
    core_theme: "The four great developmental initiations of the Uranus cycle: how predictable 21-year geometric pulses systematically dismantle outmoded ego structures to awaken authentic individuation.",
    textual_analysis: [
      "The 84-Year Orbital Clock: Uranus takes 84 years to orbit the Sun, dividing the human lifespan into four distinct 21-year quadrants marked by hard transiting aspects to natal Uranus. These transits act as biological and psychic alarm clocks, shattering obsolete psychological structures.",
      "1. The First Uranus Square (~Age 21): Marks the definitive psychological break from parental, institutional, and social tutelage. The young adult demands sovereign autonomy, often manifested through ideological radicalism, geographical displacement, reckless experimentation, and the furious rejection of childhood conditioning.",
      "2. The Uranus Opposition (~Age 40–42): The epic center of the midlife transition (occurring alongside the Neptune square and Saturn opposition). The ego confronts mortal limits and recognizes that half of life has been sacrificed to conventional social adaptation. Transiting Uranus opposing natal Uranus unleashes a torrential eruption of suppressed authentic desires, prompting sudden career resignations, marital divorces, radical creative departures, or spiritual rebirths.",
      "3. The Second Uranus Square (~Age 63): The threshold of elderhood and retirement. The individual is liberated from societal career obligations, shedding external status symbols to reclaim playful, eccentric, and authentic personal pursuits.",
      "4. The Uranus Return (~Age 84): The cosmic completion of the cycle. The individual achieves a detached, visionary perspective on their entire earthly incarnation, viewing their life from the Olympian perspective of eternity, preparing for the ultimate Promethean release from the physical vessel."
    ],
    verbatim_quote: "The 84-year cycle of Uranus is the cosmic calibration of human freedom. At ages 21, 42, 63, and 84, the lightning of the cosmos strikes the ego's fortress, burning away everything that is false to make room for the unvarnished soul.",
    operational_heuristic: "Whenever a client approaches age 40–42 (Uranus Opposition), frame their sudden restlessness not as a shameful crisis or failure of discipline, but as a mandatory evolutionary awakening demanding the integration of their unlived life.",
    key_motifs: [
      "The 84-Year Orbital Architecture",
      "Age 21: First Square & Rebellious Emancipation",
      "Age 40–42: The Uranus Opposition & Midlife Metamorphosis",
      "Age 63: Second Square & Liberated Elderhood",
      "Age 84: The Uranus Return & Transpersonal Completion"
    ]
  },
  {
    unit_id: "unit-05",
    unit_number: 5,
    chapter_number: 5,
    title: "Sun-Uranus and Moon-Uranus Aspects: The Promethean Ego and The Erratic Soul",
    scope: "Part III: Detailed delineation of Uranian aspects to the luminaries: Sun-Uranus (the Promethean hero, original genius, radical individuality) and Moon-Uranus (emotional volatility, psychic independence, unpredictable nurturing).",
    epistemic_status: "PLANETARY_ASPECT_DELINEATION_AND_EGO_MATRIX",
    materiality: "CRITICAL",
    core_theme: "The fusion of the Promethean fire with core identity and instinctual security: creating the non-conformist visionary or the emotionally unmoored psychic lightning rod.",
    textual_analysis: [
      "Sun-Uranus — The Promethean Hero: When the conscious self (Sun) unites with Prometheus (Uranus), the personality is driven by an unyielding impulse for absolute authenticity, creative originality, and heroic independence. These natives are the natural pioneers, dissidents, inventors, and non-conformists of history.",
      "Clinical Manifestations of Sun-Uranus: They cannot endure routine, subservience, or micro-management. They possess charismatic intellectual voltage and lightning-fast intuitive problem-solving abilities. In afflicted expressions, they suffer from unbearable arrogance, dogmatic contrarianism, emotional coldness, and a compulsive urge to shock conventional sensibilities.",
      "Moon-Uranus — The Erratic Soul Matrix: Aspects between the receptive, emotional matrix (Moon) and Uranus produce profound tension between the craving for emotional safety and an equally fierce craving for absolute independence.",
      "The Psychological Etiology of Moon-Uranus: In childhood, the native frequently experienced the maternal presence as erratic, emotionally unpredictable, physically absent, or intellectually detached. Consequently, the adult develops a hyper-vigilant autonomic nervous system, sudden mood swings, visceral claustrophobia in intimate relationships, and a tendency to preemptively detach or abandon partners before they themselves can be abandoned.",
      "Higher Sublimation of Moon-Uranus: When integrated, Moon-Uranus produces extraordinary psychic receptivity, intuitive genius, ability to provide radical freedom to family members, and the capacity to nurture unconventional, avant-garde communities."
    ],
    verbatim_quote: "The Sun-Uranus individual carries the Promethean torch in their right hand, blazing a solitary trail through the wilderness of human conformity. The Moon-Uranus individual carries lightning in their emotional heart, needing vast horizons of freedom just to feel safe.",
    operational_heuristic: "With Moon-Uranus clients who complain of chronic relational sabotage, investigate childhood maternal unpredictability; teach them that emotional commitment does not require surrendering personal autonomy.",
    key_motifs: [
      "Sun-Uranus: The Heroic Pioneer Archetype",
      "Radical Individuality & Non-Conformity",
      "Moon-Uranus: Intimacy vs. Autonomy Dilemma",
      "Erratic Maternal Conditioning",
      "Psychic Hypersensitivity & Intuitive Flashes"
    ]
  },
  {
    unit_id: "unit-06",
    unit_number: 6,
    chapter_number: 6,
    title: "Mercury-Uranus and Venus-Uranus Aspects: The Lightning Intellect and The Bohemian Heart",
    scope: "Part III: Mercury-Uranus (accelerated cognition, intuitive synthesis, breakthrough intellect, verbal wit) and Venus-Uranus (bohemian aesthetics, sudden romantic infatuations, untraditional relational architectures).",
    epistemic_status: "COGNITIVE_AND_RELATIONAL_ARCHETYPES",
    materiality: "CRITICAL",
    core_theme: "How Uranian electricity supercharges intellectual transmission and shatters traditional relational boundaries: the birth of non-linear cognition and alternative relational matrices.",
    textual_analysis: [
      "Mercury-Uranus — The Lightning Mind: Mercury governs perception, language, and conceptual categorization; Uranus provides the sudden cosmic download. Mercury-Uranus individuals experience thought not as a slow linear syllogism, but as a spontaneous lightning flash of complete gestalt understanding.",
      "Cognitive and Scientific Genius: Historically prominent in groundbreaking scientists, satirists, and inventors (e.g., Einstein, Newton, Voltaire). They possess brilliant verbal wit, razor-sharp insight, and the ability to grasp complex multidimensional systems instantaneously. Afflicted, it produces nervous exhaustion, insomnia, hyper-accelerated speech, and intellectual intolerance for slower minds.",
      "Venus-Uranus — The Bohemian Aesthetic & Romantic Electrification: When the archetype of beauty and love (Venus) is struck by Prometheus (Uranus), conventional bourgeois relationship expectations are violently disrupted.",
      "Romantic Dynamics of Venus-Uranus: Characterized by sudden, lightning-strike attractions (*coup de foudre*), unconventional romantic partners, fascination with artistic counter-cultures, and acute allergic reactions to institutionalized matrimonial monotony. They demand constant intellectual stimulation, personal space, and egalitarian equality in romance.",
      "Creative Breakthroughs: In art and fashion, Venus-Uranus pioneers radical new aesthetic forms, breaking classical canons with avant-garde dissonances, vibrant electronic palettes, and shocking juxtapositions."
    ],
    verbatim_quote: "Mercury-Uranus does not think; it downloads. Venus-Uranus does not love to possess; it loves to liberate. When these circuits are live, the mind shatters dogmas and the heart refuses to be caged in conventional domesticity.",
    operational_heuristic: "In clients with Venus-Uranus aspects suffering from recurrent relationship breakdowns, reframe their pattern: advise them to construct non-traditional, egalitarian partnerships that prioritize intellectual friendship and generous personal autonomy.",
    key_motifs: [
      "Mercury-Uranus: The Gestalt Download",
      "Intuitive Cognition vs. Linear Syllogism",
      "Venus-Uranus: Bohemian Relationship Architecture",
      "Coup de Foudre (Lightning-Strike Romance)",
      "Avant-Garde Aesthetic Innovation"
    ]
  },
  {
    unit_id: "unit-07",
    unit_number: 7,
    chapter_number: 7,
    title: "Mars-Uranus and Outer-Planet Interactions: The Revolutionary Kinetic and Archetypal Upheavals",
    scope: "Part III: Mars-Uranus (explosive action, revolutionary courage, radical physical assertion, mechanical genius) and Uranus aspects with Jupiter, Saturn, Neptune, and Pluto across historical epochs.",
    epistemic_status: "COLLECTIVE_DYNAMICS_AND_REVOLUTIONARY_CATALYSTS",
    materiality: "CRITICAL",
    core_theme: "The explosive kinetic fusion of Mars and Uranus, and how transpersonal alignments between Uranus and the outer planets trigger seismic civilizational revolutions.",
    textual_analysis: [
      "Mars-Uranus — The High-Voltage Kinetic Dynamo: Mars governs aggressive drive, libido, and physical action; Uranus supercharges Mars with high-voltage electricity. This produces explosive courage, fearless defense of liberty, instantaneous reaction time, and pioneering physical daring (e.g., test pilots, stunt performers, radical activists, military disruptors).",
      "The Danger of Sudden Accidents: Afflicted Mars-Uranus configurations represent an ungrounded lightning rod. In clinical astrology and empirical medicine (echoing Dr. Gibson's findings), Mars-Uranus correlates with sudden physical accidents, electrical shocks, motor vehicle crashes, surgical emergencies, or impulsive acts of violence driven by suppressed rage.",
      "Uranus-Saturn — The Archetypal Crucible of History: The structural clash between Prometheus (rebellion/freedom) and Kronos (order/authority). This cycle governs the great crises of political authority in world history: revolutions against imperial empires, the drafting of new constitutions, and the painful dialectic between anarchy and totalitarian tyranny.",
      "Uranus-Pluto — The Dionysian-Promethean Conflagration: When Uranus (radical awakening) aligns with Pluto (elemental volcanic power, catharsis, the underworld), society undergoes catastrophic, irreversible evolutionary leaps—such as the 1960s Uranus-Pluto conjunction, which sparked civil rights, anti-war uprisings, psychedelic exploration, and sexual liberation."
    ],
    verbatim_quote: "Mars-Uranus is the fuse that detonates the powder keg of history. When the fire of Prometheus unites with the volcanic underworld of Pluto, entire civilizations are incinerated and reborn in a single decade.",
    operational_heuristic: "In clients with Mars-Uranus hard aspects, prescribe intense physical outlets (martial arts, rigorous athletic training) and mindfulness around mechanical/vehicular operation to discharge kinetic voltage safely.",
    key_motifs: [
      "Mars-Uranus: The High-Voltage Kinetic Dynamo",
      "Physical Accidents & Electrical Discharges",
      "Uranus-Saturn: The Battle of Freedom vs. Order",
      "Uranus-Pluto: Volcanic Cultural Upheaval",
      "The Sixties Conjunction (1965–1966)"
    ]
  },
  {
    unit_id: "unit-08",
    unit_number: 8,
    chapter_number: 8,
    title: "Prometheus and the Evolution of Western Consciousness: From the Enlightenment to the Digital Age",
    scope: "Part IV: The cultural-historical impact of the Promethean archetype: the scientific revolution, the birth of human rights, secular humanism, existentialism, and the rise of cybernetics and the Internet.",
    epistemic_status: "CULTURAL_HISTORIOGRAPHY_AND_COLLECTIVE_EVOLUTION",
    materiality: "CRITICAL",
    core_theme: "Tracing the historical footprint of the Promethean archetype through the major intellectual, political, and technological revolutions of the modern Western world.",
    textual_analysis: [
      "The Historical Footprint of Prometheus: Tarnas demonstrates that the emergence of Uranus into conscious astronomy coincided with the decisive cultural triumph of secular humanism, scientific rationalism, and democratic egalitarianism.",
      "The Scientific Revolution and Newton's Heirs: While Copernicus and Galileo initiated the shift, the discovery of Uranus marked humanity's conscious recognition that the universe is vast, evolving, and subject to human technological mastery. The cosmos ceased to be a static medieval hierarchy and became a dynamic frontier.",
      "The Romantic Rebellion and the Re-Enchantment of the Soul: Paradoxically, the Promethean era gave birth simultaneously to industrial mechanization and the Romantic Counter-Enlightenment (Goethe, Blake, Shelley, Byron, Beethoven). Romanticism was the Promethean uprising of human imagination, passion, and artistic genius against the soul-crushing utilitarian machine.",
      "Existentialism and the Agony of Solitary Freedom: In philosophy, the Promethean archetype culminated in Nietzsche, Sartre, and Camus: God is dead, traditional cosmic guarantees have dissolved, and the solitary individual must forge their own meaning in an absurd, silent universe.",
      "The Cybernetic and Digital Revolution: The invention of the microchip, the personal computer, the Internet, and Artificial Intelligence represents the ultimate externalization of the Promethean fire—a global nervous system linking humanity in instantaneous lightning communication."
    ],
    verbatim_quote: "Western civilization is the Promethean adventure par excellence. We have climbed the Olympic heights, stolen the lightning of the gods, and unleashed forces of boundless creative power and apocalyptic terror.",
    operational_heuristic: "Recognize that individual chart activations of Uranus are localized fractals of the larger collective Western Promethean journey toward conscious autonomy and technological re-enchantment.",
    key_motifs: [
      "The Scientific Revolution & Industrialization",
      "The Romantic Counter-Rebellion",
      "Nietzsche & The Existential Crucible",
      "The Digital Revolution as Promethean Fire",
      "The Cosmic Re-Enchantment of Humanity"
    ]
  },
  {
    unit_id: "unit-09",
    unit_number: 9,
    chapter_number: 9,
    title: "Afterword: The Uranus-Neptune Cycle and The Birth of Archetypal Cosmology",
    scope: "Afterword: The historic 171-year Uranus-Neptune conjunction of 1993, the dissolution of the Soviet Empire, the birth of the World Wide Web, and the spiritual-technological synthesis.",
    epistemic_status: "SYNODIC_CYCLES_AND_CONTEMPORARY_HISTORY",
    materiality: "CRITICAL",
    core_theme: "The historic synthesis of Uranus and Neptune: how the union of Promethean technological genius and Neptunian mystical oceanic consciousness bridges the Cartesian divide.",
    textual_analysis: [
      "The 171-Year Uranus-Neptune Synodic Cycle: The conjunction of Uranus (awakening, technology, freedom) and Neptune (mysticism, imagination, boundary dissolution, spiritual yearning) occurs only once every 171 years. Historically, this alignment correlates with great epochs of spiritual awakening, artistic renaissance, and the birth of radical new worldviews.",
      "The Exact Conjunction of 1993: The early 1990s witnessed the peak of this conjunction in Capricorn. Culturally, it triggered three world-transforming phenomena:",
      "1. The Collapse of the Soviet Union: The sudden, bloodless dissolution of the rigid, materialist Soviet empire, opening Eastern Europe to spiritual and economic re-birth.",
      "2. The Birth of the World Wide Web: The transformation of localized computer networks into a boundless, ethereal, oceanic matrix (Neptune) uniting all human knowledge via electronic lightning (Uranus).",
      "3. The Resurgence of Archetypal Astrology and Transpersonal Psychology: The bridge between scientific empirical observation (Uranus) and the sacred, ensouled cosmos (Neptune).",
      "Healing the Cartesian Split: Tarnas argues that the Uranus-Neptune synthesis provides the philosophical antidote to modern nihilism. It proves that the cosmos is not a dead, mechanical clock, but an intelligent, archetypally saturated, living organism mirroring human consciousness."
    ],
    verbatim_quote: "When Uranus unites with Neptune, the Promethean fire is baptized in the oceanic waters of the sacred. Technology becomes the vessel for spiritual communion, and the cosmos awakens to its own divine reflection.",
    operational_heuristic: "In clients born under or experiencing Uranus-Neptune alignments, guide them to integrate scientific rigor with spiritual mysticism; help them channel visionary artistic or technological ideals into tangible grounded service.",
    key_motifs: [
      "The 171-Year Uranus-Neptune Cycle",
      "The 1993 Capricorn Conjunction",
      "The Dissolution of the Soviet Bloc",
      "The Birth of the World Wide Web",
      "Healing the Cartesian Mind-Matter Split"
    ]
  },
  {
    unit_id: "unit-10",
    unit_number: 10,
    chapter_number: 10,
    title: "Synthesis: The Promethean Heuristic for Clinical and Evolutionary Astrology",
    scope: "Synthesizing Masterclass: Integrating the Promethean archetype into personal horoscopy, handling Uranian trauma, navigating midlife awakenings, and the ethical responsibility of carrying divine fire.",
    epistemic_status: "CLINICAL_SYNTHESIS_AND_EVOLUTIONARY_COUNSELING",
    materiality: "CRITICAL",
    core_theme: "Comprehensive clinical diagnostic protocol for interpreting Uranus in personal charts: transmuting disruptive trauma into breakthrough, managing sudden awakenings, and ethical stewardship of the divine fire.",
    textual_analysis: [
      "The Diagnostic Protocol for Uranus in Clinical Practice:",
      "1. Identifying the Promethean Frontier: Locate the natal house of Uranus to determine where the native is biologically and psychologically programmed to pioneer, invent, and violate family taboos.",
      "2. Differentiating Awakening from Destructive Chaos: Many clients experience Uranian transits as catastrophic earthquakes (loss of career, sudden divorce, panic attacks). The astrologer's duty is to decode the teleological purpose beneath the disruption: *What obsolete cage was the soul trying to escape?*",
      "3. Somatic Grounding of Uranian Voltage: Because Uranus operates at hyper-velocity, unmediated transit activations blow the body's electrical fuses, triggering insomnia, autonomic panic, tachycardia, and erratic decision-making. Clients must establish Saturnian somatic containers—daily physical grounding, strict sleep hygiene, and patient reality-testing—before acting on sudden radical impulses.",
      "4. The Ethics of Stolen Fire: True Promethean courage does not seek selfish egotistical aggrandizement. The fire was stolen to serve humanity. When an individual uses their Uranian genius merely for narcissistic rebellion or exploitative advantage, they inevitably invite the eagle of Zeus to devour their liver.",
      "5. The Evolutionary Task: To become a conscious vessel through which the cosmos awakens to its own transcendent liberty, creativity, and love."
    ],
    verbatim_quote: "Astrology is not a fatalistic prison; it is the ultimate Promethean gift. By understanding the cosmic archetypes moving through us, we cease to be blind puppets of fate and become conscious co-creators of the universe.",
    operational_heuristic: "When a client is overwhelmed by a Uranian transit, never tell them to cling to the past; help them consciously dismantle the decaying structures of their life with courage, dignity, and creative vision.",
    key_motifs: [
      "The Promethean Diagnostic Protocol",
      "Teleological Meaning of Sudden Disruption",
      "Somatic Grounding of High Voltage",
      "The Ethics of Carrying Divine Fire",
      "Co-Creating with Cosmic Archetypes"
    ]
  }
];

// 1. Output knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(units, null, 2),
  'utf8'
);
console.log('Successfully wrote knowledge-units.json for Prometheus the Awakener');

// 2. Generate master-notes.md
let md = `# Prometheus the Awakener: Technology, Archetypal Psychology, and the Cosmic Origin of the Modern Mind
**Author:** Richard Tarnas, Ph.D.  
**First Published:** 1995 (Spring Publications / Auriel Press)  
**Discipline:** Archetypal Cosmology, Cultural Historiography, Transpersonal Psychology, Astrological Philosophy  
**Standard:** BKRS v2.0 Production Master Codex  
**Codex Scope:** 10 Comprehensive Units | Full Monograph Reconstruction

---

## Executive Architectural Overview

In *Prometheus the Awakener*, cultural historian and philosopher Richard Tarnas (author of *The Passion of the Western Mind* and *Cosmos and Psyche*) presents one of the most seminal paradigm shifts in modern astrological and depth-psychological scholarship: **the systematic resolution of the astronomical misnaming of the planet Uranus**.

Since William Herschel discovered the seventh planet in 1781, astrologers have correctly and empirically observed its psychological and historical signatures: rebellion, radical autonomy, sudden awakening, inventive genius, lightning insights, revolutionary disruption, technological breakthroughs, and the defiance of oppressive authority. 

Yet, in classical Greek mythology, the primordial sky-god **Ouranos** (Uranus) represented the exact opposite: an oppressive, tyrannical patriarch who hated his own offspring, stuffed them into the dark subterranean womb of Gaia, and was overthrown and castrated by Kronos (Saturn). Astrologically, Ouranos behaves like rigid, reactionary tyranny—not liberation.

Tarnas demonstrates that the archetypal power astrologers observed is mythologically, psychologically, and historically identical to **Prometheus**:
1. **The Fire-Bringer:** The Titan who stole celestial fire from Mount Olympus hidden in a fennel stalk, emancipating humanity from darkness and imparting autonomous intellect, arts, crafts, astronomy, and technological mastery (*technē*).
2. **The Champion of Freedom:** The eternal rebel against the tyranny of Zeus, willing to suffer solitary crucifixion upon the rocks of Mount Caucasus for the liberation of humanity.
3. **The Discovery Synchronicity:** Herschel discovered the planet in 1781—the exact historical decade marked by the American and French Revolutions, the dawn of the Industrial Revolution, the invention of the steam engine, and the birth of modern scientific secularism.
4. **The Life Clocks of Awakening:** The 84-year orbital cycle of Uranus calibrates human individuation into 21-year geometric pulses: the opening square (~age 21, youth rebellion), the opposition (~age 40–42, the epic midlife metamorphosis), the second square (~age 63, liberation from career status into elderhood), and the return (~age 84, transpersonal cosmic completion).
5. **The Promethean Shadow:** The price of stolen fire—the agony of the chained Titan, the existential alienation of the solitary pioneer, and the monstrous technological hubris depicted in Mary Shelley's *Frankenstein; or, The Modern Prometheus*.

This master codex reconstructs Dr. Tarnas's complete treatise across ten exhaustive knowledge units, providing an essential foundation for archetypal astrology, cultural historiography, and clinical counseling.

---

## The 10 Knowledge Units: Deep Structural Reconstruction

`;

units.forEach(u => {
  md += `### Unit ${u.unit_number}: ${u.title}\n\n`;
  md += `- **Unit ID:** \`${u.unit_id}\`\n`;
  md += `- **Scope & Textual Anchor:** ${u.scope}\n`;
  md += `- **Epistemic Classification:** \`${u.epistemic_status}\`\n`;
  md += `- **Materiality Level:** **${u.materiality}**\n`;
  md += `- **Core Theme:** ${u.core_theme}\n\n`;
  
  md += `#### Exhaustive Textual & Archetypal Analysis\n\n`;
  u.textual_analysis.forEach(p => {
    md += `${p}\n\n`;
  });

  md += `#### Canonical Textual Verbatim\n`;
  md += `> "${u.verbatim_quote}"\n\n`;

  md += `#### Operational Clinical & Counseling Heuristic\n`;
  md += `* **Clinical Heuristic:** ${u.operational_heuristic}\n\n`;

  md += `#### Key Conceptual Motifs & Index Terms\n`;
  u.key_motifs.forEach(m => {
    md += `- \`${m}\`\n`;
  });
  md += `\n---\n\n`;
});

md += `## Synthesis: The Promethean Aspect Matrix

The following reference matrix synthesizes the archetypal expressions of Uranus (Prometheus) when in aspect with the natal planets:

| Planetary Contact | Evolutionary Principle | Constructive / Integrated Expression | Afflicted / Shadow Expression | Historical Exemplars |
| :--- | :--- | :--- | :--- | :--- |
| **Sun-Uranus** | The Promethean Ego & Pioneer | Absolute authenticity; original creative genius; revolutionary leadership; visionary courage | Arrogance; destructive contrarianism; erratic behavior; inability to collaborate | Thomas Jefferson, Ralph Waldo Emerson, Abraham Lincoln |
| **Moon-Uranus** | The Erratic Soul Matrix | Profound psychic receptivity; intuitive flashes; capacity to nurture unconventional communities | Sudden emotional detachment; visceral claustrophobia; chronic relationship sabotage; abandonment panic | Lord Byron, Virginia Woolf, Wolfgang Amadeus Mozart |
| **Mercury-Uranus** | The Lightning Mind | Instantaneous gestalt downloads; razor-sharp wit; inventive mathematical and linguistic genius | Nervous exhaustion; racing thoughts; insomnia; verbal sarcasm; intellectual intolerance | Albert Einstein, Isaac Newton, Voltaire, James Joyce |
| **Venus-Uranus** | The Bohemian Heart & Muse | Avant-garde aesthetic breakthroughs; egalitarian relationships; freedom within love | Compulsive romantic disruptions; *coup de foudre* illusions; fear of intimacy | Oscar Wilde, George Sand, Pablo Picasso, Isadora Duncan |
| **Mars-Uranus** | The High-Voltage Kinetic Dynamo | Fearless defense of liberty; instantaneous reflexes; radical pioneering athletic/military courage | Explosive temper; violent accidents; recklessness; ungrounded electrical nerve discharge | Che Guevara, Charles Lindbergh, Amelia Earhart |
| **Jupiter-Uranus** | The Breakthrough of Meaning | Sudden philosophical awakenings; humanitarian philanthropy; unexpected fortune; radical optimism | Manic expansion; ideological fanaticism; reckless financial gambles; grandiose schemes | Benjamin Franklin, Martin Luther King Jr., Galileo Galilei |
| **Saturn-Uranus** | The Battle of Freedom vs. Order | Synthesizing radical innovation with enduring structural stability; reforming institutions | Paralyzing tension between rebellion and fear; authoritarian backlash; reactionary cynicism | Karl Marx, Sigmund Freud, Immanuel Kant |
| **Uranus-Neptune** | The Ethereal Renaissance | Bridging spiritual mysticism with technological genius; transcendent imagination; the Web | Spiritual escapism; technological addiction; boundary confusion; utopian delusion | The 1993 Generation, William Blake, Samuel Taylor Coleridge |
| **Uranus-Pluto** | The Volcanic Cultural Leap | Cathartic dismantling of corrupt power; profound biological/spiritual metamorphosis | Apocalyptic destruction; violent anarchism; nihilistic terror; catastrophic cultural trauma | The 1960s Upheaval, The French Revolution Generation |

---

## The Developmental Mechanics of the 84-Year Uranus Cycle

$$\\text{Total Orbital Period} \\approx 84.02 \\text{ Years} \\implies 1 \\text{ Quadrant} \\approx 21.0 \\text{ Years}$$

1. **Age 20–22: The First Waxing Square ($\\square$)**
   - *Core Archetypal Crisis:* Emancipation from Parental and Institutional Tutelage.
   - *Behavioral Dynamic:* The native asserts absolute self-determination, often through radical geographic relocations, political activism, dramatic counter-cultural shifts, or explosive career departures.
2. **Age 40–42: The Uranus Opposition ($\\rho$)**
   - *Core Archetypal Crisis:* The Midlife Crucible & The Awakening of the Unlived Life.
   - *Behavioral Dynamic:* Accompanied by the Neptune square and Saturn opposition, the native recognizes the mortality of the ego. Suppressed authentic passions erupt violently. Marriages that demand self-betrayal dissolve; careers built for parental approval collapse; authentic artistic or spiritual vocations are claimed.
3. **Age 60–63: The Second Waning Square ($\\square$)**
   - *Core Archetypal Crisis:* Liberation from Socio-Cultural Duty into Sovereign Elderhood.
   - *Behavioral Dynamic:* Freedom from the economic treadmill. The native sheds external status symbols and social masks, embracing creative play, intellectual eccentricity, and non-conformist pursuits.
4. **Age 84: The Uranus Return ($\\sigma$)**
   - *Core Archetypal Crisis:* The Transpersonal Overview & Liberation from the Mortal Coil.
   - *Behavioral Dynamic:* The completion of the full experiential zodiacal circuit. The individual views their biography from an Olympian, detached perspective, acting as an embodied bridge between cosmic eternity and earthly history.

---

## Ethical Principles of Promethean Astrology

1. **Non-Pathologizing Reframing:** When a client undergoes a devastating Uranian transit, the astrologer must never diagnose them as 'broken' or 'manic.' Reframe the crisis as an evolutionary awakening: *The soul is tearing down a cage that was too small for its destiny.*
2. **Mandatory Somatic Containment:** High Uranian voltage without Saturnian grounding causes psychological psychosis and physical collapse. Always pair Promethean liberation with tangible somatic routines (sleep, nutrition, physical labor, patience).
3. **Stewardship of Divine Fire:** Remind the client that Prometheus stole fire to benefit the collective commonwealth, not to fuel private arrogance. True genius finds fulfillment only in generous service to human emancipation.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), md, 'utf8');
console.log('Successfully wrote master-notes.md for Prometheus the Awakener (' + md.length + ' chars)');

// 3. Generate index.html (Reader)
const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="cream">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prometheus the Awakener | Richard Tarnas | BKRS Master Reader</title>
  <link rel="stylesheet" href="../../assets/css/reader-shell.css">
  <style>
    :root {
      --font-serif: "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Georgia, serif;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    }
    
    .badge-archetypal {
      background: #0284c7;
      color: #f0f9ff;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .stat-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .stat-card {
      background: rgba(0, 0, 0, 0.03);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
    }

    [data-theme="dark"] .stat-card {
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.08);
    }

    .stat-value {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 700;
      color: #0369a1;
      margin-bottom: 0.25rem;
    }

    [data-theme="dark"] .stat-value {
      color: #38bdf8;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    .cycle-timeline {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .cycle-step {
      display: flex;
      gap: 1.25rem;
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(0, 0, 0, 0.06);
      padding: 1.25rem;
      border-radius: 6px;
      border-left: 4px solid #0284c7;
    }

    [data-theme="dark"] .cycle-step {
      background: rgba(255, 255, 255, 0.02);
      border-color: rgba(255, 255, 255, 0.06);
      border-left-color: #38bdf8;
    }

    .cycle-age {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 700;
      color: #0369a1;
      min-width: 110px;
    }

    [data-theme="dark"] .cycle-age {
      color: #38bdf8;
    }

    .cycle-desc h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      font-family: var(--font-serif);
    }

    .aspect-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.875rem;
    }

    .aspect-table th, .aspect-table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1rem;
      text-align: left;
    }

    [data-theme="dark"] .aspect-table th, [data-theme="dark"] .aspect-table td {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .aspect-table th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
    }

    [data-theme="dark"] .aspect-table th {
      background: rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body class="reader-body">
  <div class="reader-shell">
    <header class="reader-header">
      <div class="reader-header-inner">
        <div class="reader-branding">
          <a href="../../index.html" class="back-link">← Master Index</a>
          <span class="badge-archetypal">Archetypal Cosmology</span>
        </div>
        <h1 class="book-title">Prometheus the Awakener</h1>
        <p class="book-subtitle">Technology, Archetypal Psychology, and the Cosmic Origin of the Modern Mind • Richard Tarnas</p>
        
        <div class="reader-metadata-bar">
          <span><strong>Author:</strong> Richard Tarnas, Ph.D. (Author of <em>Cosmos and Psyche</em>)</span>
          <span><strong>Focus:</strong> The Mythological Misnaming of Uranus, 84-Year Cycle, & Promethean Archetype</span>
          <span><strong>Standard:</strong> BKRS v2.0 Production Master (10 Units)</span>
        </div>

        <nav class="reader-tabs">
          <button class="tab-button active" data-tab="reading">Continuous Reader</button>
          <button class="tab-button" data-tab="analytical">Analytical Units</button>
          <button class="tab-button" data-tab="cycle">The 84-Year Cycle</button>
          <button class="tab-button" data-tab="aspects">Aspect Matrix</button>
          <button class="tab-button" data-tab="search">Search Codex</button>
        </nav>
      </div>
    </header>

    <main class="reader-main">
      <!-- CONTINUOUS READING VIEW -->
      <section id="view-reading" class="tab-content active">
        <article class="reader-prose">
          <div class="editorial-preamble">
            <h2>The Promethean Paradigm Shift</h2>
            <p>In this landmark monograph, cultural historian and philosopher Richard Tarnas resolves the central anomaly of modern astrology: the astronomical misnaming of Uranus. Demonstrating that the astrological archetype belongs not to the tyrannical Greek sky-god Ouranos, but to the rebel Titan Prometheus, Tarnas decodes the planetary clock of Western revolution, technological hubris, and personal awakening.</p>
          </div>

          <div class="stat-card-grid">
            <div class="stat-card">
              <div class="stat-value">1781</div>
              <div class="stat-label">Discovery Synchronicity (Herschel)</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">84 Years</div>
              <div class="stat-label">Complete Orbital Circuit</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">Age 40–42</div>
              <div class="stat-label">The Midlife Uranus Opposition</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">171 Years</div>
              <div class="stat-label">Uranus-Neptune Synodic Cycle</div>
            </div>
          </div>

          <hr class="section-divider">

          ${units.map(u => `
            <div class="unit-block" id="unit-block-${u.unit_id}">
              <header class="unit-header">
                <span class="unit-number">Unit ${u.unit_number.toString().padStart(2, '0')}</span>
                <span class="unit-materiality ${u.materiality.toLowerCase()}">${u.materiality}</span>
                <h3 class="unit-heading">${u.title}</h3>
                <p class="unit-scope"><em>${u.scope}</em></p>
              </header>

              <div class="unit-content">
                <p class="unit-theme"><strong>Core Principle:</strong> ${u.core_theme}</p>
                
                ${u.textual_analysis.map(para => `<p>${para}</p>`).join('')}

                <blockquote class="unit-quote">
                  "${u.verbatim_quote}"
                </blockquote>

                <div class="heuristic-callout">
                  <strong>Clinical & Counseling Heuristic:</strong> ${u.operational_heuristic}
                </div>

                <div class="motif-cloud">
                  ${u.key_motifs.map(m => `<span class="motif-tag">${m}</span>`).join('')}
                </div>
              </div>
            </div>
            <hr class="unit-divider">
          `).join('')}
        </article>
      </section>

      <!-- ANALYTICAL UNITS VIEW -->
      <section id="view-analytical" class="tab-content">
        <div class="analytical-grid">
          ${units.map(u => `
            <div class="analytical-card">
              <div class="card-top">
                <span class="badge">Unit ${u.unit_number}</span>
                <span class="status-tag">${u.epistemic_status}</span>
              </div>
              <h4>${u.title}</h4>
              <p class="card-desc">${u.core_theme}</p>
              <div class="card-meta">
                <strong>Key Heuristic:</strong>
                <p class="heuristic-text">${u.operational_heuristic}</p>
              </div>
              <ul class="motif-list">
                ${u.key_motifs.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 84-YEAR CYCLE VIEW -->
      <section id="view-cycle" class="tab-content">
        <article class="reader-prose">
          <h3>The Four Great Initiations of the Uranus Cycle</h3>
          <p>The 84-year orbit of Uranus calibrates the human lifespan into four distinct 21-year developmental quadrants:</p>

          <div class="cycle-timeline">
            <div class="cycle-step">
              <div class="cycle-age">Age 20–22</div>
              <div class="cycle-desc">
                <h4>1. The First Waxing Square (□) — Rebellious Emancipation</h4>
                <p>The definitive break from parental, institutional, and cultural tutelage. The young adult demands sovereign self-determination, expressed through radical experimentation, ideological rebellion, or geographic departure.</p>
              </div>
            </div>

            <div class="cycle-step">
              <div class="cycle-age">Age 40–42</div>
              <div class="cycle-desc">
                <h4>2. The Uranus Opposition (☍) — The Midlife Awakening</h4>
                <p>Occurring alongside the Neptune square and Saturn opposition, the ego confronts mortal limits. Suppressed authentic desires erupt violently. Life structures built merely for social conformity collapse, demanding the integration of the unlived life.</p>
              </div>
            </div>

            <div class="cycle-step">
              <div class="cycle-age">Age 60–63</div>
              <div class="cycle-desc">
                <h4>3. The Second Waning Square (□) — Sovereign Elderhood</h4>
                <p>Liberation from societal career ladders and status symbols. The individual reclaims playful, eccentric, and authentic personal passions, serving as a detached mentor free from cultural anxieties.</p>
              </div>
            </div>

            <div class="cycle-step">
              <div class="cycle-age">Age 84</div>
              <div class="cycle-desc">
                <h4>4. The Uranus Return (☌) — Transpersonal Completion</h4>
                <p>The completion of the full zodiacal circuit. The soul views their biography from an Olympian perspective, acting as an embodied bridge between cosmic eternity and earthly history.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- ASPECT MATRIX VIEW -->
      <section id="view-aspects" class="tab-content">
        <article class="reader-prose">
          <h3>The Promethean Aspect Matrix</h3>
          <p>Archetypal dynamics of Uranus in planetary combinations:</p>

          <table class="aspect-table">
            <thead>
              <tr>
                <th>Planetary Contact</th>
                <th>Evolutionary Principle</th>
                <th>Integrated Expression</th>
                <th>Shadow Expression</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sun-Uranus</strong></td>
                <td>The Promethean Hero</td>
                <td>Absolute authenticity; creative originality; revolutionary leadership</td>
                <td>Arrogance; destructive contrarianism; erratic instability</td>
              </tr>
              <tr>
                <td><strong>Moon-Uranus</strong></td>
                <td>The Erratic Soul Matrix</td>
                <td>High psychic intuition; freedom in nurturing; unconventional community</td>
                <td>Sudden detachment; relationship sabotage; abandonment panic</td>
              </tr>
              <tr>
                <td><strong>Mercury-Uranus</strong></td>
                <td>The Lightning Mind</td>
                <td>Instantaneous gestalt downloads; razor wit; inventive genius</td>
                <td>Nervous exhaustion; racing thoughts; insomnia; sarcasm</td>
              </tr>
              <tr>
                <td><strong>Venus-Uranus</strong></td>
                <td>The Bohemian Heart</td>
                <td>Avant-garde aesthetics; egalitarian relationships; freedom in love</td>
                <td>Coup de foudre illusions; chronic restlessness; fear of commitment</td>
              </tr>
              <tr>
                <td><strong>Mars-Uranus</strong></td>
                <td>The High-Voltage Dynamo</td>
                <td>Fearless defense of liberty; instantaneous reflexes; physical daring</td>
                <td>Explosive rage; sudden accidents; electrical nerve discharges</td>
              </tr>
              <tr>
                <td><strong>Uranus-Saturn</strong></td>
                <td>Freedom vs. Order</td>
                <td>Reforming institutions; structured innovation; enduring liberty</td>
                <td>Paralyzing tension; authoritarian backlash; reactionary cynicism</td>
              </tr>
              <tr>
                <td><strong>Uranus-Pluto</strong></td>
                <td>Volcanic Cultural Leap</td>
                <td>Dismantling corrupt power; irreversible evolutionary breakthroughs</td>
                <td>Apocalyptic destruction; violent anarchism; catastrophic trauma</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <!-- SEARCH VIEW -->
      <section id="view-search" class="tab-content">
        <div class="search-container">
          <input type="text" id="codex-search-input" placeholder="Search archetypes, cycles, aspects, Promethean themes..." aria-label="Search codex">
          <div id="search-results" class="search-results"></div>
        </div>
      </section>
    </main>

    <footer class="reader-footer">
      <div class="reader-footer-inner">
        <p>Book Knowledge Reconstruction System (BKRS v2.0) • Intellectualist Knowledge Repository</p>
        <p>Canonical Source: <em>Prometheus the Awakener: Technology, Archetypal Psychology, and the Cosmic Origin of the Modern Mind</em> by Richard Tarnas, Ph.D. (Spring Publications, 1995).</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/reader-controls.js"></script>
  <script>
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tabId = 'view-' + btn.getAttribute('data-tab');
        const content = document.getElementById(tabId);
        if (content) content.classList.add('active');
      });
    });

    const searchInput = document.getElementById('codex-search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
      const unitsData = ${JSON.stringify(units)};
      
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchResults.innerHTML = '<p class="search-prompt">Type at least 2 characters to search across all units...</p>';
          return;
        }

        const matches = unitsData.filter(u => {
          return u.title.toLowerCase().includes(query) ||
                 u.core_theme.toLowerCase().includes(query) ||
                 u.operational_heuristic.toLowerCase().includes(query) ||
                 u.key_motifs.some(m => m.toLowerCase().includes(query)) ||
                 u.textual_analysis.some(p => p.toLowerCase().includes(query));
        });

        if (matches.length === 0) {
          searchResults.innerHTML = '<p class="search-prompt">No matching units found for "' + query + '".</p>';
          return;
        }

        searchResults.innerHTML = matches.map(m => \`
          <div class="search-result-item">
            <h4><a href="#unit-block-\${m.unit_id}">Unit \${m.unit_number}: \${m.title}</a></h4>
            <p><strong>Theme:</strong> \${m.core_theme}</p>
            <p><strong>Heuristic:</strong> \${m.operational_heuristic}</p>
            <div class="result-tags">
              \${m.key_motifs.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
            </div>
          </div>
        \`).join('');
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf8');
console.log('Successfully wrote index.html for Prometheus the Awakener (' + htmlContent.length + ' chars)');
