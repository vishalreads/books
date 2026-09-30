const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'the-original-face-rinzai-zen-cleary';
const title = 'The Original Face: An Anthology of Rinzai Zen';
const author = 'Thomas Cleary (Editor & Translator)';
const category = 'Philosophy & Zen Buddhism';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-original-face-rinzai-epistemology",
    title: "Unit 1: The Original Face (Honrai no Menmoku) & Rinzai Epistemology: Transcending Ignorance and Craving",
    themes: [
      "The Classical Koan: 'Before Your Father and Mother Were Born, What Was Your Original Face?'",
      "De-Mythologizing the Koan: 'Father and Mother' as Buddhist Metaphors for Craving (Trishna) and Ignorance (Avidya)",
      "The Pre-Reflective Nature of Awareness: Reality Prior to Mental Superimposition and Cultural Conditioning",
      "Rinzai (Linji) Methodology: Sudden Awakening, Dynamic Shock, and Cutting Conceptual Proliferation (Prapañca)",
      "Universal Household: Moving Beyond Social Stratification, Dogma, and Ideology into Primordial Clarity"
    ]
  },
  {
    id: "unit-2-daikaku-treatise-on-sitting-meditation",
    title: "Unit 2: Zen Master Daikaku (Lanqi Daolong) — Treatise on Sitting Meditation (Zazenron)",
    themes: [
      "Lanqi Daolong (1213–1278): The Chinese Song-Dynasty Master Establishing Pure Rinzai Zen at Kencho-ji in Kamakura",
      "The Physical and Psychic Architecture of Zazen: Upright Posture, Breathing, and Mind Like Vast Space",
      "Overcoming the Twin Pitfalls: Agitation/Turbulence (Floating) vs. Torpor/Sluggishness (Sinking)",
      "The Illusion of Mental Elimination: Why Trying to 'Suppress Thoughts' Is Simply Adding Another Layer of Delusion",
      "Dynamic Serenity: Moving Meditation and the Discovery of Changeless Awareness Within Everyday Activity"
    ]
  },
  {
    id: "unit-3-shoitsu-razor-direct-instruction",
    title: "Unit 3: National Teacher Shoitsu (Enni Ben'en) — The Razor of Direct Instruction at Tofuku-ji",
    themes: [
      "Enni Ben'en (1202–1280): Transmission of the Wuzhun Shifan Lineage and the Founding of Tofuku-ji in Kyoto",
      "The Primary Instruction: 'Put to Rest All Concerns, Lay Down All Entanglements, and Watch the Tip of Your Nose'",
      "The Essential Identity:Sentient Beings Are Fundamentally Buddhas; Delusion Is Merely Fog on a Crystal Gem",
      "The Non-Dual Paradox: 'Gold Is Not Exchanged for Gold; Water Does Not Wash Water'",
      "Seasonal Addresses & Letters: Slicing Through Intellectual Vanity and Scholastic Buddhist Verbosity"
    ]
  },
  {
    id: "unit-4-daio-letters-to-meditators-iron-wall",
    title: "Unit 4: National Teacher Daio (Nanpo Jomin) — Letters to Meditators: Penetrating the Iron Wall",
    themes: [
      "Nanpo Jomin (1235–1308): Transmitting the Xutang Zhiyu Lineage (The O-To-Kan Core Lineage of Japanese Zen)",
      "Letters to Practicing Laypeople: Instructions to Gentei, Nun Gentai, and Bath Steward Genan",
      "Penetrating the Iron Wall: Zen Practice in the Midst of Worldly Duties and Mundane Labor",
      "The Raising of the Flower: Mahakashyapa's Wordless Smile and the Living Transmission Outside Scriptures",
      "The Sword of Prajna: The Living Blade That Simultaneously Cuts Off Illusion and Grants Spiritual Life"
    ]
  },
  {
    id: "unit-5-jakushitsu-solitude-and-wild-simplicity",
    title: "Unit 5: Master Jakushitsu Genko — Mountain Solitude, Blind Tsumei, and Unvarnished Nature",
    themes: [
      "Jakushitsu Genko (1290–1367): The Reclusive Poet-Master and the Spirit of Hermit Simplicity at Eigen-ji",
      "Letters to Wayfarers: Advising Zentatsu and the Blind Layman Tsumei on Seeing Without Eyes",
      "The Peril of Subtle Attachment: 'Even Investigating Zen Is Putting Rubbish in the Eye'",
      "The Entanglement of Thought: How a Single Micro-Second of Conceptual Preference Binds One for Ten Thousand Eons",
      "Rustic Enlightenment: Pure Poetic Resonance with Streams, Rocks, and the Cold Autumn Moon"
    ]
  },
  {
    id: "unit-6-ikkyu-skeletons-radical-memento-mori",
    title: "Unit 6: Zen Master Ikkyu Sojun — Skeletons (Gaikotsu): Radical Memento Mori & Erotic Iconoclasm",
    themes: [
      "Ikkyu Sojun (1394–1481): The Rebel Monk, Iconoclast, and Wandering Poet of Daitoku-ji",
      "The Vision of the Cemetery: Human Society as a Masquerade of Walking Skeletons Wrapped in Flesh and Silk",
      "Deconstructing Aristocratic Vanity: Beauty, Wealth, and Power as Fragile Hallucinations Destined for the Cremation Ground",
      "The Non-Duality of the Sacred and the Profane: Lust, Bodily Desire, and Emptiness Transcending Hypocritical Celibacy",
      "The Comic and Tragic Realism: Waking Up to the Impermanence of Every Social Role and Identity"
    ]
  },
  {
    id: "unit-7-bassui-sermon-on-mind-inquiry",
    title: "Unit 7: Zen Master Bassui Tokushō — The Great Inquiry: 'Who Is Hearing the Sound?'",
    themes: [
      "Bassui Tokushō (1327–1387): The Radical Inquirer and Master of Kogaku-ji",
      "The Master Sermon: Investigating the Root of Consciousness — 'Who Is Hearing the Sound of the Bell?'",
      "Turning the Light Inward (Eko Hensho): Tracing Awareness Back to Its Origin Before Subject-Object Cleavage",
      "The Fallacy of External Gods and Hells: Heaven and Hell as Momentary Mental Affections of Craving and Hate",
      "The Great Doubt (Taigi) Leading to the Great Awakening: Shattering the Illusion of an Isolated Ego-Center"
    ]
  },
  {
    id: "unit-8-bunan-die-while-you-live-dead-man-zen",
    title: "Unit 8: Zen Master Shidō Bunan — 'Die While You Live': The Psychology of Self-Extinction",
    themes: [
      "Shidō Bunan (1603–1676): The Innkeeper Who Became an Uncompromising Zen Master",
      "The Famous Maxim: 'Die While You Live, and Be Thoroughly Dead; Then Whatever You Do, Just As You Will, Is All Good'",
      "What It Means to 'Die': The Annihilation of Self-Centered Calculation, Pride, and Psychological Grasping",
      "Things People Are Always Wrong About: How Greedy Minds Inevitably Project Greed onto Sages and Sincere Wayfarers",
      "Strict Monastic Regulations: Pure Discipline Without Rigid Hypocrisy, Pretense, or Cultish Mystification"
    ]
  },
  {
    id: "unit-9-bankei-the-unborn-innate-buddha-mind",
    title: "Unit 9: National Teacher Bankei Yōtaku — The Unborn (Fushō): Innate Awakening Without Struggle",
    themes: [
      "Bankei Yōtaku (1622–1693): The Revolutionary Master of the Unborn Buddha-Mind (Fushō Shin)",
      "Bankei's Agonizing Quest: Exhausting Asceticism, Near-Fatal Illness, and the Breakthrough to the Unborn",
      "The Inherent Miraculous Capability: How the Ear Registers Barking Dogs and Crows Effortlessly Without Prior Thought",
      "The Tragedy of Transformation: Turning the Invaluable Unborn Buddha-Mind into a Demon or Hungry Ghost Through Anger",
      "Radical Accessibility: Why Koan Straining and Severe Ascetic Torment Are Unnecessary When Living in the Unborn"
    ]
  },
  {
    id: "unit-10-hakuin-and-torei-four-knowledges-essential-secrets",
    title: "Unit 10: Zen Master Hakuin Ekaku & Torei Enji — The Four Knowledges & Essential Secrets for the Way",
    themes: [
      "Hakuin Ekaku (1686–1769): The Great Systematizer and Revitalizer of Edo Rinzai Zen",
      "The Explication of the Four Knowledges of Buddhahood: Great Mirror, Universal Nature, Profound Contemplation, and Action",
      "Post-Awakening Cultivation (Gogo no Shugyo): Overcoming the Arrogance and Stagnation of Initial Satori",
      "Master Torei Enji (1721–1792): 'The Essential Secrets for Entering the Way' and the Five Discriminations of Direct Realization",
      "The Integration of Wisdom (Prajna) and Compassion (Karuna): The Bodhisattva Vow in Dynamic Historical Action"
    ]
  }
];

const masterNotes = `# Master Codex: The Original Face: An Anthology of Rinzai Zen
**Author / Editor:** Thomas Cleary  
**Subject:** Japanese Rinzai Zen Buddhism, Epistemology of Awakening, Koan Practice, and Non-Dual Metaphysics  
**System:** Book Knowledge Reconstruction System (BKRS v2.0 Standard)  
**Standard:** Replacement-Grade Knowledge Architecture (>32,000 Characters, Propositional Rigor, Deep Primary Exegesis)

---

## Executive Architectural Summary: The Lineage of the Original Face

*The Original Face: An Anthology of Rinzai Zen*, compiled and translated from classical Sino-Japanese texts by the eminent Buddhist scholar Thomas Cleary, brings together the primary writings, spoken sermons, monastic regulations, and private instructional letters of the greatest masters of Japanese Rinzai Zen across five centuries (from the thirteenth-century Kamakura Renaissance to the eighteenth-century revival under Hakuin Ekaku).

The title derives from the foundational koan of the Sixth Patriarch Huineng (*Daikan Eno*): 
> *"Not thinking of good, not thinking of evil, right at this very moment, what was your original face before your father and mother were born?"*

In Cleary's rigorous translation and contextual exegesis, "father and mother" are not biological parents, but ancient Buddhist allegories for the twin roots of cyclic existential suffering (*samsara*): **craving (*trishna*)** and **ignorance (*avidya*)**. The "Original Face" (*honrai no menmoku*) is the primordial, unconditioned nature of human awareness prior to the accretion of conceptual fabrications, defensive social masks, linguistic dualisms, and neurotic identity structures.

Across the masters anthologized in this volume—**Daikaku (Lanqi Daolong)**, **Shoitsu (Enni Ben'en)**, **Daio (Nanpo Jomin)**, **Jakushitsu Genko**, **Ikkyu Sojun**, **Bassui Tokushō**, **Shidō Bunan**, **Bankei Yōtaku**, and **Hakuin Ekaku** with his foremost heir **Torei Enji**—a unified, uncompromising epistemological and psychological discipline emerges. Zen is not an aesthetic indulgence, nor a passive quietism, nor an intellectual philosophy. It is a radical, surgical confrontation with the immediate ground of consciousness, designed to shatter the illusion of a separate, autonomous ego-entity and restore human action to spontaneous, unhindered alignment with reality itself.

---

## Unit 1: The Original Face (*Honrai no Menmoku*) & Rinzai Epistemology: Transcending Ignorance and Craving

### 1.1 The Classical Koan and Its De-Mythologization
For centuries within the Chan and Zen traditions, the question of the "Original Face" has served as a primary meditative razor. When Huineng challenged the senior monk Ming on Mount Dayu with the query, *"When you do not think of good and do not think of bad, at this very moment, what is your original face before your father and mother were born?"*, Ming underwent a catastrophic collapse of his intellectual scaffolding and realized sudden awakening.

Thomas Cleary clarifies the exact technical hermeneutic required to comprehend this dialogue:
1. **The Symbolic Father**: In classic Buddhist Abhidharma and Mahayana scriptures, the "father" represents **craving and grasping (*trishna*)**, the aggressive, projecting impulse that seeks satisfaction through sensory objects and psychological attachments.
2. **The Symbolic Mother**: The "mother" represents **fundamental ignorance (*avidya*)**, the deep-seated cognitive blindness that reifies dynamic, impermanent processes into enduring, self-existent entities (the illusion of the *atman* or substantial ego).
3. **The Pre-Reflective Ground**: To ask what your face was *before* this birth is an epistemological injunction: **What is the nature of bare awareness before perceptual input is categorized, filtered, judged, and claimed by an ego-construct?**

### 1.2 The Pathology of Conceptual Proliferation (*Prapañca*)
The fundamental human dilemma identified in Rinzai epistemology is *prapañca*—the runaway proliferation of language, concepts, value judgments, and cognitive classifications. The ordinary human being lives trapped not in reality, but in a secondary mental facsimile of reality constructed out of words and memories.
- We divide the unified field of experience into subject (*self*) and object (*world*).
- We divide sensation into "pleasant" (which produces grasping), "unpleasant" (which produces aversion), and "neutral" (which produces dullness).
- We construct elaborate ideological, theological, and moral dogmas that we mistake for absolute truth.

The Rinzai school developed an arsenal of abrupt, shock-inducing pedagogies—the shout (*katsu*), the stick (*kyosaku*), and the paradoxical riddle (*koan*)—specifically designed to short-circuit the linear processing of the intellect. When conceptual thinking is brought to a dead halt against an impossible barrier (such as "What is the sound of one hand?"), consciousness is forced to drop its conceptual tools and confront the direct, unmediated reality of the present moment.

### 1.3 The Universal Household
Cleary emphasizes in his introduction that the realization of the Original Face dissolves all artificial human boundaries:
- In the unconditioned ground of mind, there is neither monk nor layperson, neither Japanese nor foreigner, neither noble nor outcaste, neither male nor female.
- All sentient beings share the exact same luminous Buddha-nature (*tathagatagarbha*).
- When a human being operates from this original clarity, "all beings are the family, all worlds are the household." Action is no longer driven by narrow self-interest or tribal loyalty, but flows naturally as unconditioned, objective compassion (*karuna*).

---

## Unit 2: Zen Master Daikaku (Lanqi Daolong) — Treatise on Sitting Meditation (*Zazenron*)

### 2.1 The Historical Context of Lanqi Daolong
Lanqi Daolong (1213–1278), honored in Japan with the posthumous title **Zen Master Daikaku** ("Great Awakening"), was an eminent Chinese Chan master of the Yangqi branch of Rinzai. In 1246, Daikaku crossed the perilous East China Sea to Kamakura Japan, invited by the Hojo regency. He founded **Kencho-ji**, the first major monastery in Japan constructed exclusively for pure, uncompromising Zen training, establishing the standard for physical and psychological monastic discipline that shaped samurai culture and Japanese spirituality.

### 2.2 The Physics and Metaphysics of *Zazen*
Daikaku's *Zazenron* (*Treatise on Sitting Meditation*) serves as an authoritative manual on the integration of posture, breath, and awareness:
1. **The Straight Spine**: The body must be held erect, neither slumping forward nor arching backward, aligning ears with shoulders and nose with navel. Daikaku explains that physical posture directly conditions mental states; an upright, relaxed, and balanced spine produces an alert, undisturbed consciousness.
2. **Mind Like Vast Space**: One should not focus narrowly on a single localized point, nor allow the mind to wander through memory and fantasy. Awareness should be allowed to expand into boundlessness, like empty space, which contains clouds, birds, and storms without being altered, stained, or displaced by them.
3. **The Six Senses as Open Windows**: Sensory inputs—sounds of wind, sensations of cold, visual shapes—are not to be forcibly repressed. They are allowed to arise and pass away naturally without the mind clinging to them or generating secondary narratives.

### 2.3 Overcoming the Twin Pitfalls: Floating and Sinking
In meditation practice, the untrained mind consistently oscillates between two catastrophic extremes:
- **Floating (*Sanran* / Agitation / Restlessness)**: The mind is turbulent, excited, chasing memories of the past, plans for the future, anxieties, or intellectual theories. It is scattered outward like dust blown by a gale.
- **Sinking (*Konchin* / Sluggishness / Torpor)**: The mind becomes dull, sleepy, foggy, or sinks into a dark, stuporous blankness. While beginners often mistake this trance-like state for peaceful meditation, Daikaku denounces it as "dead water" and the "cave of demons."

True *Zazen* is characterized by **lucid stillness**—a state of sharp, pristine, vibrant awareness that is simultaneously completely calm and completely awake.

### 2.4 The Error of "Thought Suppression"
Daikaku warns practitioners against the fatal misunderstanding of trying to "kill" or "suppress" thoughts:
> *"Trying to clear away thoughts by generating another thought of elimination is like washing blood with blood; the more you wash, the dirtier it gets."*
Thoughts are mere energetic ripples on the surface of the oceanic Buddha-mind. If you do not grasp them, identify with them, or oppose them, they dissolve spontaneously into the empty space from which they arose.

### 2.5 Dynamic Meditation in Everyday Action
Crucially, Daikaku rejects the idea that meditation is confined to sitting on a cushion (*zafu*):
- If meditation is real only when sitting in a quiet temple, it is artificial and fragile.
- True meditation must be maintained while walking, talking, eating, chopping wood, and engaging in administrative or state affairs.
- When external turbulence arises, the enlightened mind remains centered in its own changeless, immovable nature.

---

## Unit 3: National Teacher Shoitsu (Enni Ben'en) — The Razor of Direct Instruction at Tofuku-ji

### 3.1 The Life and Lineage of Enni Ben'en
Enni Ben'en (1202–1280), honored as **National Teacher Shoitsu**, was one of the pivotal figures in medieval Japanese Buddhism. Traveling to Song China, he studied under the great Chan master Wuzhun Shifan (*Bujun Shiban*) at Mount Jing, receiving the seal of transmission before returning to Kyoto. Under the patronage of the imperial regent Kujo Michiie, Shoitsu founded **Tofuku-ji**, a massive spiritual center that bridged traditional Tendai/Shingon esoteric practices with pure Rinzai Chan.

### 3.2 The Core Instruction: Laying Down All Entanglements
In his direct instructions to senior monks and lay disciples (such as Eminent Kumyo, Elder Nyo, and Zen Man Chimoku), Shoitsu stripped away all decorative rhetoric:
> *"In the direct teachings of the ancestral masters, there are no special techniques: just lay down all entanglements, put to rest all concerns, and watch the tip of your nose for six hours in the daytime and six hours at night."*

This is not a simplistic physical gimmick; watching the tip of the nose anchors the wandering attention, tethering the wild elephant of the restless mind to the present breath, preventing it from straying into historical regrets or future anticipations.

### 3.3 The Paradox of Spiritual Seeking
Shoitsu repeatedly exposes the fundamental absurdity that drives ordinary spiritual seekers:
> *"Sentient beings are fundamentally Buddhas; delusion and enlightenment are not two. Seeking Buddhahood outside yourself is like carrying water to search for the sea, or polishing a mirror by throwing mud at it."*
- **Gold does not buy gold**: When you are already made of pure gold, you cannot purchase yourself.
- **Water does not wash water**: Pure water has no need to be cleansed by another liquid.
- Awakening is not the acquisition of some new, exotic, transcendent possession; it is the radical cessation of the false quest to attain what has never been absent for a single fraction of a second.

### 3.4 Slicing Through Scholastic Conceit
In his sermons at the opening and closing of summer monastic retreats (*ango*), Shoitsu rigorously attacked the scholarly pride of monks who spent their lives memorizing thousands of pages of Buddhist treatises (*sutras* and *shastras*):
- Intellectual analysis of Buddhist philosophy is merely counting another man's treasure while starving to death.
- A single moment of direct, non-conceptual realization (*kensho*) outweighs fifty years of academic scholarship.
- The master demands: *"If a sword of steel cuts through everything, what cuts the sword?"* The monk must drop all secondary concepts and become the cutting edge of awareness itself.

---

## Unit 4: National Teacher Daio (Nanpo Jomin) — Letters to Meditators: Penetrating the Iron Wall

### 4.1 The O-To-Kan Transmission
Nanpo Jomin (1235–1308), posthumously designated **National Teacher Daio**, occupies a supreme position in Japanese Zen history. He journeyed to China to train under Master Xutang Zhiyu (*Kidō Chigu*). The lineage descending from Daio through his disciple **Daito Kokushi** (Shuho Myocho, founder of Daitoku-ji) and **Kanzan Egen** (founder of Myoshin-ji)—known historically as the **O-To-Kan lineage**—is the *sole surviving lineage of Rinzai Zen in Japan today*. Every living Rinzai master traces their spiritual genealogy through Daio.

### 4.2 Letters to Active Lay Practitioners
Unlike monastic treatises aimed solely at full-time ascetics, Daio's letters in *The Original Face* were addressed to ordinary practitioners living in the world:
- **To Zen Man Gentei**: Daio reminds him of the primordial transmission: *"The World Honored One raised a flower; Mahakashyapa smiled. Gold is not exchanged for gold, water does not wash water; since then it has come down from generation to generation, taking in an echo from empty space, one person transmitting it to another."*
- **To Nun Gentai**: Encouraging her to perceive that true womanhood, manhood, youth, and age are superficial biological classifications that have no reality in the formless Buddha-nature.
- **To Bath Steward Genan**: Directing him to find the unborn reality while boiling water, scrubbing floors, and serving filthy bathers—transforming menial labor into the highest temple of awakening.

### 4.3 Penetrating the Iron Wall
Daio frequently utilizes the classic Zen metaphor of the **Iron Wall** (*tetsu-heki*):
- The seeker approaches spiritual practice and finds an impenetrable, twenty-foot-thick vertical wall of cold iron, offering no footholds, no handgrips, and no cracks for intellectual logic to pry open.
- The intellect strains, screams, and throws itself against the wall in exhaustion.
- The breakthrough occurs only when the practitioner completely abandons intellectual strategies, presses their entire body, heart, and soul against the cold metal, and ceases all resistance. Suddenly, the iron wall is discovered to be completely porous, transparent, and non-existent.

### 4.4 The Sword of Prajna: Killing and Giving Life
In the Rinzai tradition, the sword of transcendental wisdom (*prajna*) has two simultaneous functions:
1. **The Sword That Kills (*Setsunin-to*)**: It ruthlessly decapitates delusion, egoic conceit, attachment to opinions, and holy pretense.
2. **The Sword That Gives Life (*Katsunin-ken*)**: From the death of the neurotic ego, the vibrant, compassionate, creative reality of spontaneous life bursts forth.

---

## Unit 5: Master Jakushitsu Genko — Mountain Solitude, Blind Tsumei, and Unvarnished Nature

### 5.1 The Hermit of Eigen-ji
Jakushitsu Genko (1290–1367) was an extraordinary poet-monk and hermit who, after training in Yuan-dynasty China, refused grand administrative posts in Kyoto, preferring to wander the forested mountains of Omi, eventually founding the rustic sanctuary of **Eigen-ji**. His writings embody the pure aesthetic of *wabi-sabi*—austere, unpretentious, deeply attuned to the natural elements, and uncompromising in spiritual depth.

### 5.2 The Instruction to Blind Tsumei: Seeing Without Eyes
One of the most moving documents in the anthology is Jakushitsu's instruction to a blind lay practitioner named Tsumei:
- Physical blindness, Jakushitsu insists, is no obstacle whatsoever to spiritual enlightenment; in fact, it can be a profound blessing.
- The physical eye sees only external surfaces, colors, and transient shapes, feeding endless visual cravings and judgments.
- The true "Eye of Reality" (*dharmachakshu*) does not depend on optic nerves or sunlight. It is the inherent capacity of awareness to know itself.
- Jakushitsu challenges Tsumei: When the room is pitch black, you know that it is black; that which knows darkness is not dark. Awaken to that uncreated Knower!

### 5.3 Rubbish in the Eye and the Peril of Subtle Conceptualization
Jakushitsu delivers one of the most blistering warnings in the entire Buddhist corpus regarding spiritual ambition:
> *"The slightest entanglement of thought is the basis of the most miserable types of behavior; if feelings arise for a moment, they lock you up for ten thousand eons. Even Buddha-name remembrance is producing dust on a mirror; even investigating Zen is putting rubbish in the eye."*

The moment a practitioner thinks, *"I am meditating," "I am getting closer to enlightenment,"* or *"I am purer than that worldly person,"* they have fallen into the subtle trap of spiritual narcissism. True Zen is the absolute absence of spiritual self-congratulation. The mirror of mind must be so clear that not even the idea of "clearness" remains to smudge it.

---

## Unit 6: Zen Master Ikkyu Sojun — *Skeletons* (*Gaikotsu*): Radical Memento Mori & Erotic Iconoclasm

### 6.1 The Mad Cloud Monk
Ikkyu Sojun (1394–1481), known as "Crazy Cloud" (*Kyoun*), is the most famous, subversive, and beloved eccentric in Japanese Zen history. Repelled by the political corruption, commercialization, and hypocritical pseudo-piety of the elite Gozan ("Five Mountain") monasteries of Kyoto, Ikkyu lived among beggars, prostitutes, sake-merchants, and outcasts. He refused to hide his physical passions, openly taking the blind singer Lady Mori as his lover in his old age, declaring that sensual love and transcendent emptiness are non-dual.

### 6.2 *Skeletons* (*Gaikotsu*): The Vision of the Cremation Ground
Ikkyu's prose masterpiece, *Skeletons*, written in 1457, is a tour-de-force of Buddhist *memento mori* combined with biting social satire:
- Ikkyu recounts a dream-vision wherein he falls asleep in a cemetery and wakes to find all the corpses rising from their graves as walking skeletons.
- To his astonishment, the skeletons are behaving precisely like the living people of Kyoto: they are dressing in expensive silk robes, strutting proudly, engaging in business deals, flirting, writing love letters, and gossiping.
- A skeleton falls in love with another skeleton, oblivious to the fact that beneath the thin, temporary veneer of cosmetic powder and skin lies nothing but bare calcium bones and decaying marrow.

### 6.3 Deconstructing the Vanity of the Social Self
Ikkyu uses this gruesome, comical imagery to dismantle the psychological foundations of human vanity:
1. **The Illusion of Beauty**: What men call a "gorgeous woman" or a "handsome prince" is merely a hollow armature of bone wrapped in a pound of fat, blood, mucus, and bile. In a few dozen years, both the beauty and the leper will be identical piles of white ash on the cremation pyre.
2. **The Illusion of Status**: Emperor, general, high priest, and beggar all reduce to the exact same skull. Why spend your brief existence groveling before titled skeletons or preening over social status?
3. **The Mirage of Possessions**: We spend our lives accumulating gold, houses, and books, holding them tightly with skeletal fingers that will instantly uncurl in death.

### 6.4 The Non-Duality of Passion and Awakening
Ikkyu does not preach a morbid, joyless asceticism. On the contrary, once the absolute impermanence of existence is deeply integrated, every moment becomes intensely precious, humorous, and free:
> *"We wander through this world as skeletons wrapped in skin, dreaming that we are separate people. Wake up! When breath stops, there is only the vast blue sky."*
By embracing impermanence, Ikkyu liberates human affection from the anxious greed of possession, allowing love and art to manifest as pure, unhindered play (*lila*).

---

## Unit 7: Zen Master Bassui Tokushō — The Great Inquiry: "Who Is Hearing the Sound?"

### 7.1 Bassui and the Search for the True Master
Bassui Tokushō (1327–1387), whose name means "High Above the Waves," was an intense, uncompromising seeker who spent years meditating in solitary huts in the mountains, rejecting sectarian honors. In his celebrated *Sermon on the Mind*, Bassui presents what is arguably the most concentrated, systematic methodology for direct self-inquiry in the Rinzai canon.

### 7.2 The Methodology of Turning the Light Inward (*Eko Hensho*)
Bassui instructs the practitioner to seize upon the immediate fact of conscious perception:
- You hear the tolling of the temple bell, the rustle of pine trees in the wind, or the voices of people passing by.
- Who is it that hears this sound?
- It is not your physical ear; a dead corpse possesses ears, yet hears nothing when the bell strikes.
- It is not your intellectual thoughts; thoughts arise and disappear, but the capacity to hear remains constant through silence and sound alike.
- **Turn the light inward**: Stop paying attention to the *objects* of hearing (the acoustic sounds outside) and focus your entire being on the *subject* of hearing. **What is the nature of this Knower, this Master who sees through your eyes and hears through your ears?**

### 7.3 The Dissolution of External Hells and Heavens
Bassui ruthlessly demolishes the literalist, superstitious interpretations of Buddhist mythology:
- Hell is not a physical subterranean pit of fire and molten copper created by an external demon.
- Heaven is not a celestial palace in the clouds.
- When an angry, jealous, or vengeful thought erupts in your mind, you are instantaneously standing in the depths of hell (*naraka*), burning with the fire of your own hatred.
- When a peaceful, compassionate thought arises, you are in heaven.
- If you realize the empty, luminous nature of the Mind that witnesses both anger and peace, you transcend both heaven and hell in a single instant.

### 7.4 The Great Doubt (*Taigi*)
Bassui emphasizes that the engine of awakening is **The Great Doubt**:
- You must doubt your own assumed identity: *"Who am I? What is this mind? Where did it come from before birth? Where does it go after death?"*
- This doubt is not cynical skepticism or intellectual indecision; it is an intense, existential, total-body questioning that consumes all secondary thoughts.
- When the Great Doubt reaches maximum intensity, it explodes like a shattered iron ball, leaving nothing but the pristine, luminous reality of the Original Face.

---

## Unit 8: Zen Master Shidō Bunan — "Die While You Live": The Psychology of Self-Extinction

### 8.1 The Innkeeper Who Walked Away
Shidō Bunan (1603–1676) was an Edo-period master with a remarkable biography. For the first half of his life, he managed an official inn (*hatago*) along the busy Tokaido highway in Kashiwabara, catering to samurai lords and government travelers. Experiencing firsthand the deceit, greed, drunkenness, and desperation of worldly society, he resolved to seek liberation, eventually studying under the great master Gudo Toshoku.

### 8.2 The Ultimate Maxim: Dead Man Zen
Bunan's legacy is crystallized in his world-renowned poem and teaching:
> *"Die while you live, and be thoroughly dead;  
> Then whatever you do, just as you will, is all good."*  
> *(Ikite miyo, shinite miyo, subete yoshi)*

This is not a recommendation of physical suicide, nor is it nihilistic apathy. Bunan is describing the **absolute death of the ego-construct**:
1. **The Living Corpse**: A dead corpse in a coffin has no pride; if you insult it, it does not become offended; if you flatter it, it does not puff up with vanity; if you offer it gold, it does not reach out with greed.
2. **Total Psychological Non-Attachment**: When you "die while alive," your identification with self-importance, social validation, reputation, and fear of loss is completely extinguished.
3. **Pure, Uncalculated Action**: Once the anxious self is dead, the human body and mind become pure instruments of the universal life-force. You can act spontaneously, lovingly, and decisively, because there is no selfish agenda contaminating your behavior. Whatever you do is "good" because it is free from the poison of self-interest.

### 8.3 Things People Are Always Wrong About
In his prose aphorisms, Bunan offers penetrating psychological observations on the mechanics of human delusion:
- **Projection of Evil**: People see others strictly through the lens of their own interior sickness. A thief suspects everyone he meets of being a pickpocket; an ambitious politician assumes every monk has a secret thirst for power; a lustful person sees only lust in the eyes of others.
- **The Danger of Untrained Sight**: Bunan writes: *"The vision of fools is dreadful... Unless one is a sage, seeing is dangerous."* Until the eye of consciousness has been purified of its own neurotic projections, human beings do not see the world as it is; they see only their own unprocessed neuroses mirrored back at them.

### 8.4 Regulations for Disciples
Bunan enforced an austere, rigorous code in his modest hermitage. He barred monks who sought comfortable ecclesiastical careers, wealth, or prestigious robes. A disciple of Bunan was expected to own nothing more than three bowls, a single patched robe, and to seek nothing from the world, abiding in quiet, unshakeable contentment.

---

## Unit 9: National Teacher Bankei Yōtaku — The Unborn (*Fushō*): Innate Awakening Without Struggle

### 9.1 Bankei's Agonizing Odyssey
Bankei Yōtaku (1622–1693) was one of the most original and charismatic masters in East Asian history. As a youth, troubled by the Confucian classic *The Great Learning* and its opening statement about "illustrious virtue," Bankei spent years in brutal, agonizing asceticism seeking to discover this virtue. He sat in meditation until his thighs broke into bleeding ulcers; he fasted, lived in caves, and ruined his physical constitution until, at the age of twenty-six, he lay dying of tuberculosis in a remote hut, coughing up balls of dark, bloody phlegm.

At the absolute brink of death, having exhausted every possible human effort, Bankei realized that all his striving had been an absurd, self-inflicted nightmare:
> *"All along, the Buddha-mind has been completely unborn and perfectly managed. Striving to attain what is already present was the sole cause of my agony!"*
With this breakthrough, Bankei coughed up the remaining phlegm against the wall and spontaneously recovered, dedicating the remainder of his life to preaching the gospel of **The Unborn (*Fushō*)**.

### 9.2 The Inherent Miracle of the Unborn Buddha-Mind
Bankei refused to use obscure Chinese Buddhist jargon, academic terminology, or rigid koan curricula. Speaking in plain, idiomatic vernacular Japanese to thousands of farmers, merchants, samurai, women, and children who flocked to his gatherings, Bankei proved the existence of the Unborn through immediate empirical demonstration:
> *"While you are all sitting here listening to my sermon, you didn't decide in advance: 'When a dog barks outside, I will hear a dog; when a crow caws, I will hear a crow.' Yet the moment the dog barks, you recognize the dog; when the crow caws, you recognize the crow. You don't have to think about it; you don't have to translate it. That which registers everything instantly, flawlessly, without a single thought of effort, is the Unborn Buddha-Mind!"*

### 9.3 The Tragedy of Mental "Transformation" (*Henkaku*)
Bankei explains the mechanics of all human psychological distress through a single concept: **transformation**:
- The Unborn Buddha-Mind given to every human being at birth is clear, luminous, and miraculous.
- But because of old emotional habits and self-centered grasping, when someone speaks a harsh word to us, we become angry.
- In that moment, we take the precious, diamond-like Unborn Buddha-Mind and **transform it into a snarling, biting demon** (*asura*).
- When we desire something we cannot have, we transform the Buddha-Mind into a starving, wretched **hungry ghost** (*gaki*).
- When we are stubborn and irrational, we transform it into a dumb beast.
Bankei pleads with his audiences: *"Why would you trade your precious, innate Buddhahood for the agonizing belly of a hungry ghost or the rage of a demon? Just abide in the Unborn as you are, and don't transform it into anything else!"*

### 9.4 A Radical Rejection of Artificial Austerities
Bankei broke sharply with traditional monastic culture by declaring that harsh physical austerities, beatings with sticks, and agonizing over classical koans were unnecessary and often counterproductive:
- Trying to conquer illusion through aggressive force is like fighting a shadow with a club.
- Illusion has no substantial existence of its own; it is merely an ephemeral cloud.
- If you simply remain in the relaxed, alert, unconditioned awareness of the Unborn, illusions arise and vanish like smoke in the wind, leaving zero residue.

---

## Unit 10: Zen Master Hakuin Ekaku & Torei Enji — The Four Knowledges & Essential Secrets for the Way

### 10.1 Hakuin's Systematization of Edo Rinzai Zen
Hakuin Ekaku (1686–1769) is universally revered as the savior and great systematizer of Japanese Rinzai Zen. Recognizing that Zen in his era had degenerated into either the passive, quietistic complacency of "do-nothing" sitting (*mokushō-zen*) or the corrupt, commercialized sale of enlightenment certificates, Hakuin restructured the entire Rinzai training system around rigorous koan introspection (inventing the famous koan *"What is the sound of one hand clapping?"*).

### 10.2 The Explication of the Four Knowledges of Buddhahood
In his profound treatise included in *The Original Face*, Hakuin addresses a vital doctrinal question: Are the **Three Bodies (*Trikaya*)** and **Four Knowledges (*Caturjnana*)** of Buddhahood inherent, or are they cultivated gradually after enlightenment?
Drawing upon the classic Mahayana Yogacara philosophy and Chan transmission, Hakuin explains the fourfold transmutation of human consciousness:
1. **The Great Round Mirror Knowledge (*Daienkyō-chi*)**: The transmutation of the eighth consciousness (*alaya-vijnana* / storehouse consciousness). The mind becomes like a spotless, vast mirror that reflects the entire universe objectively, without distortion, bias, or personal projection.
2. **The Universal Nature Knowledge (*Byōdōshō-chi*)**: The transmutation of the seventh consciousness (*manas* / ego-grasping consciousness). The false barrier between self and other is obliterated, revealing the absolute equality and interconnectedness of all living beings.
3. **The Profound Contemplation Knowledge (*Myōkanzatsu-chi*)**: The transmutation of the sixth consciousness (*mano-vijnana* / conceptual intellect). Conceptual intelligence is liberated from neurotic fixation, transforming into razor-sharp, intuitive discernment capable of analyzing any problem or circumstance with infinite creative brilliance.
4. **The Action Knowledge (*Jōjosaku-chi*)**: The transmutation of the five sensory consciousnesses (*visual, auditory, olfactory, gustatory, tactile*). The physical body and its senses operate spontaneously in the world as instruments of compassionate action, effortlessly responding to the suffering of living beings.

### 10.3 The Necessity of Post-Awakening Cultivation (*Gogo no Shugyo*)
Hakuin delivers a fierce warning against the peril of "premature enlightenment":
- Many practitioners experience an initial breakthrough (*kensho*) and immediately assume they have achieved complete, supreme Buddhahood (*anuttara-samyak-sambodhi*).
- They become arrogant, complacent, dismissive of monastic precepts, and stagnant in their spiritual development.
- Hakuin insists that an initial breakthrough is merely opening the front gate to the palace; true, deep cultivation begins *after* awakening. One must spend decades refining one's realization in the crucible of daily life, purifying subtle remnants of ego, and mastering the vast curriculum of Buddhist wisdom.

### 10.4 Master Torei Enji: The Essential Secrets for Entering the Way
Torei Enji (1721–1792), Hakuin's greatest and most brilliant Dharma heir, authored *The Essential Secrets for Entering the Way* (*Shumon Mujintorun* / *Goke Sansho Yoro*), providing a comprehensive map of the spiritual ascent from ordinary person to fully liberated Buddha:
- **The Five Discriminations**:
  1. *Same Nature*: Understanding the fundamental non-duality of mind and reality.
  2. *Different Paths*: Recognizing that individuals have different karmic conditioning, capacities, and temperaments, requiring tailored pedagogical methods.
  3. *Urgency*: Cultivating the acute awareness of impermanence and death (*memento mori*) that fuels uncompromising practice.
  4. *Progressive Cultivation*: Systematically working through physical grounding, emotional purification, intellectual clarity, and meditative depth.
  5. *Dynamic Culmination*: Bringing realization out of the hermitage and monastery and into the streets, working tirelessly for the liberation of all sentient beings.

---

## Comparative Philosophical Matrix: The Nine Masters of *The Original Face*

| Master | Period / Dates | Core Epistemological Insight | Primary Practice / Technique | Pedagogical Target |
| :--- | :--- | :--- | :--- | :--- |
| **Daikaku (Lanqi Daolong)** | 1213–1278 (Early Kamakura) | Mind is like vast space; thoughts are ripples on water. | Upright Zazen; overcoming floating (agitation) and sinking (torpor). | Laying institutional & physical foundation for pure Rinzai practice. |
| **Shoitsu (Enni Ben'en)** | 1202–1280 (Early Kamakura) | "Gold does not buy gold; water does not wash water." Inherent Buddhahood. | Ceasing concerns; watching tip of nose day and night; cutting intellectualizing. | Scholastic monks drowning in scripture; aristocratic patrons in Kyoto. |
| **Daio (Nanpo Jomin)** | 1235–1308 (Kamakura) | The living sword of prajna; penetrating the impenetrable Iron Wall. | Daily-life practice for householders; intense confrontation with koan barrier. | Ordinary laypeople (stewards, nuns, warriors) seeking direct realization. |
| **Jakushitsu Genko** | 1290–1367 (Nanboku-cho) | Absolute rusticity; "investigating Zen is putting rubbish in the eye." | Mountain solitude; seeing without physical eyes (teaching to Blind Tsumei). | Spiritual careerism, institutional ambition, and intellectual pride. |
| **Ikkyu Sojun** | 1394–1481 (Muromachi) | Human society is a dance of walking skeletons; non-duality of flesh & void. | Radical memento mori; erotic honesty; poetic subversion of monastic hierarchy. | Hypocritical, corrupt Gozan establishment; bourgeois vanity and greed. |
| **Bassui Tokushō** | 1327–1387 (Muromachi) | Consciousness is not the physical body; trace awareness to its source. | "Who is hearing the sound of the bell?"; turning the light inward (*Eko Hensho*). | Superstitious fear of hells/ghosts; literalist religious dogma. |
| **Shidō Bunan** | 1603–1676 (Early Edo) | "Die while you live, and be thoroughly dead; then whatever you do is good." | Absolute ego-extinction (*Dead Man Zen*); cessation of moralistic pretense. | Worldly vanity, hypocrisy, and psychological projection in urban Edo. |
| **Bankei Yōtaku** | 1622–1693 (Edo) | The Unborn (*Fushō*) Buddha-Mind effortlessly manages everything. | Abiding in unconditioned awareness; refusing to "transform" into anger/desire. | Severe, self-torturing asceticism; academic jargon; exclusive monasticism. |
| **Hakuin & Torei** | 1686–1792 (Mid-Late Edo) | Transmutation of consciousness into Four Knowledges; post-satori work. | Systematic koan curriculum (Sound of One Hand); the five discriminations. | Quietistic "do-nothing" sitting; premature claims of complete enlightenment. |

---

## Appendix A: The Historical Development of Rinzai Zen in Japan
1. **The First Wave (13th Century - Song Transmission)**: Masters like Eisai, Daikaku, and Shoitsu brought Song-dynasty Chan directly to Japan, securing the protection of the Kamakura shogunate and Kyoto court by demonstrating Zen's power to cultivate self-discipline, mental equilibrium, and civic harmony.
2. **The Golden Lineage (The O-To-Kan Core)**: Daio Kokushi (Nanpo Jomin) transmitted the true flame to Daito Kokushi (Shuho Myocho), who founded Daitoku-ji, and Kanzan Egen, who founded Myoshin-ji. This branch preserved the fierce, uncompromising spirit of Linji against political co-optation.
3. **The Medieval Flowering & Subversion (14th–15th Century)**: Figures like Bassui and Jakushitsu preserved the solitary, contemplative mountain tradition, while Ikkyu exploded institutional hypocrisy from within through fierce poetry and radical iconoclasm.
4. **The Edo Reformation (17th–18th Century)**: Bankei democratized Zen with his direct doctrine of the Unborn, while Hakuin and Torei rescued Rinzai from terminal decline by creating the rigorous, structured koan system that survives to this day.

---

## Appendix B: Seven Diagnostic Maxims for Direct Zen Inquiry
1. **The Test of the Bell**: When a bell rings, who hears it? If your ears hear it, why does a dead body not hear it? If your mind hears it, what color, shape, and weight does that mind have? Trace hearing back to its silent root.
2. **The Principle of the Living Corpse**: Treat yourself as if you were already dead. How can a corpse feel offended? How can an empty grave hold a grudge? When ego-defensiveness dies, true compassion is born.
3. **The Error of Transformation**: You were born with the luminous, undisturbed Buddha-Mind. When you react with rage, jealousy, or petty spite, you are voluntarily transforming your diamond into manure. Drop the reaction and remain in the Unborn.
4. **The Trap of Spiritual Greed**: Striving to "attain enlightenment" is the very obstacle preventing you from realizing it. You cannot wash water with water. Cease seeking outside, and resting in what is already here.
5. **The Iron Wall Attitude**: When facing severe life crises, pain, or existential dread, do not run away into intellectual distraction. Press your entire being against the crisis until all conceptual distance collapses.
6. **The Mirror Nature**: A mirror reflects a mountain, a river, a jewel, and filth; it clings to none and rejects none. When the object leaves, the mirror remains empty, pure, and ready. Let your mind be like the mirror.
7. **The Integration of Action**: Zen is not sitting like a stump in the mountains. If your enlightenment cannot withstand screaming crowds, demanding work, and physical exhaustion, it is mere escapism. Bring the silence of the mountain into the noise of the marketplace.

---

## Appendix C: Comprehensive Glossary of Technical Rinzai Terms
- **Honrai no Menmoku (本来の面目)**: The Original Face; the primordial, unconditioned nature of awareness prior to conceptual discrimination.
- **Kenshō (見性)**: "Seeing one's true nature"; an awakening experience wherein the practitioner directly realizes the empty, luminous reality of mind.
- **Satori (悟り)**: The state of spiritual awakening, comprehension, and enlightenment.
- **Zazen (座禅)**: Sitting meditation; the foundational physical and mental practice of Zen Buddhism.
- **Koan (公案)**: A public legal case; a dialogue, statement, or riddle presented by a Zen master to confound the linear intellect and provoke direct realization.
- **Fushō (不生)**: The Unborn; Bankei's term for the innate, uncreated Buddha-mind that exists prior to all mental fabrications.
- **Ekō Henshō (回光返照)**: "Turning the light around to shine inward"; reversing the outward projection of the senses to investigate the subject of awareness.
- **Taigi (大疑)**: The Great Doubt; the intense, total-body existential questioning that shatters intellectual fixation.
- **Gaikotsu (骸骨)**: Skeletons; the contemplation of impermanence and bodily decay utilized by Ikkyu to dismantle social vanity.
- **Daienkyō-chi (大円鏡智)**: The Great Round Mirror Knowledge; the transmuted consciousness that reflects all phenomena without bias or distortion.
- **Byōdōshō-chi (平等性智)**: The Universal Nature Knowledge; the direct insight into the absolute equality and non-duality of all beings.
- **Gogo no Shugyō (悟後の修行)**: Post-awakening cultivation; the lifelong discipline of refining and embodying wisdom in daily life after initial kensho.
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
      <button class="view-btn active" data-view="journey">View A: Rinzai Lineage Journey</button>
      <button class="view-btn" data-view="map">View B: Awakening Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Zen Contemplation Engine</button>
    </div>

    <main class="reader-content">
      <div id="view-journey" class="view-panel active">
        <article class="prose-content">
          <h1>${title}</h1>
          <p class="byline"><strong>Author / Editor:</strong> ${author} | <strong>System:</strong> BKRS v2.0 Replacement-Grade Codex</p>
          <hr>
          ${proseHtml}
        </article>
      </div>

      <div id="view-map" class="view-panel">
        <div class="knowledge-map">
          <h2>Awakening Blueprint: The Original Face</h2>
          <p class="subtitle">Complete philosophical architecture of Thomas Cleary's Rinzai Zen anthology across 10 distinct masters and epistemological units.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Inquiries & Doctrines:</strong></p>
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
          <h2>The Rinzai Zen Contemplation Engine</h2>
          <div class="engine-section">
            <h3>Diagnostic Maxims for Direct Epistemic Liberation</h3>
            <div class="formula-box">
              <p><strong>1. The Koan of the Original Face:</strong> Stop evaluating experience through categories of good and evil. What is the luminous ground of your awareness before thoughts of self and other arise?</p>
              <p><strong>2. Bankei's Principle of the Unborn:</strong> Do not transform your innate, miraculously responsive Buddha-Mind into the raging fires of anger or the starvation of greed. Abide effortlessly in the Unborn.</p>
              <p><strong>3. Shido Bunan's Dead Man Zen:</strong> Die completely while alive. When the grasping ego is dead, all actions flow spontaneously from objective reality, free from fear and pride.</p>
              <p><strong>4. Bassui's Self-Inquiry:</strong> Turn the light inward. Who is hearing the sound of the bell? Stop chasing sensory objects; realize the uncreated Knower.</p>
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
