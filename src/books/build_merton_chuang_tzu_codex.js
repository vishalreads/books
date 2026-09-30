const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'the-way-of-chuang-tzu-merton';
const title = 'The Way of Chuang Tzu';
const author = 'Thomas Merton / Zhuangzi';
const category = 'Philosophy & Eastern Wisdom';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const knowledgeUnits = [
  {
    id: "unit-1-philosophy-of-nameless-merton-dao",
    title: "Unit 1: The Philosophy of the Nameless: Thomas Merton on Daoist Wisdom vs. Confucian Moralism",
    themes: [
      "Thomas Merton's Deep Affiliation: The Christian Trappist Monk Meeting the Ancient Chinese Sage",
      "The Uncarved Block (Pu): Primordial Nature Before Artificial Rules and Classifications",
      "The Critique of Confucian Moralism: How Enforcing 'Virtue' and 'Duty' Creates Hypocrisy and Guilt",
      "The Dao That Cannot Be Named: The Flowing, Organic Life-Force of the Cosmos",
      "True Freedom: Living in Spontaneous Harmony (Ziran) Rather than Social Performance"
    ]
  },
  {
    id: "unit-2-wisdom-of-uselessness-gnarled-oak",
    title: "Unit 2: The Wisdom of Uselessness: The Gnarled Oak & Liberation from Exploitation",
    themes: [
      "The Parable of the Useless Tree: The Massive Gnarled Oak that Carpenters Reject",
      "Why Straight Trees Are Cut Down First: The Tragedy of Being 'Useful' to Power",
      "The Inversion of Values: Uselessness to Society as the Supreme Instrument of Self-Preservation",
      "Escaping the Instrumental Trap: Resisting Being Reduced to a Tool for State and Industry",
      "Resting in the Shade of What Cannot Be Marketed: The Sacred Leisure of Dao"
    ]
  },
  {
    id: "unit-3-secret-of-mastery-cook-ding-wu-wei",
    title: "Unit 3: The Secret of Mastery: Cook Ding & The Art of Effortless Action (Wu Wei)",
    themes: [
      "The Famous Parable: Cook Ding Butchering an Ox for Lord Wen Hui",
      "The Blade That Never Dulls: Nineteen Years of Cutting Without Hitting Bone or Muscle",
      "Gliding Through Natural Spaces: Finding the Interstices Where There is No Resistance",
      "Wu Wei Defined: Not Passivity or Laziness, but Non-Forced, Spontaneous, Hyper-Attuned Action",
      "From Physical Craft to Existential Mastery: Living Life Like Cook Ding's Knife"
    ]
  },
  {
    id: "unit-4-fasting-of-heart-xinzhai",
    title: "Unit 4: The Fasting of the Heart (Xinzhai): Silencing the Ego & Emptying Consciousness",
    themes: [
      "The Dialogue Between Confucius and Yan Hui: Preparing for Political Mission",
      "Fasting the Stomach vs. Fasting the Heart: Moving Beyond Bodily Abstinence to Mental Stillness",
      "Listening with the Ears vs. Listening with the Heart vs. Listening with the Spirit (Qi)",
      "The Mirror of the Mind: Reflecting Reality Without Grasping, Straining, or Projecting",
      "Unity with the Vast Emptiness: The True Source of Creative Insight and Compassion"
    ]
  },
  {
    id: "unit-5-pivot-of-dao-transcending-dualism",
    title: "Unit 5: The Pivot of Dao & The Transcending of Dualism: Beyond 'Right' and 'Wrong'",
    themes: [
      "The Futility of Philosophical Disputation: Why Intellectuals Argue in Circles",
      "The Interdependence of Opposites: 'This' Cannot Exist Without 'That'; 'Right' Cannot Exist Without 'Wrong'",
      "The Pivot of Dao: Standing at the Motionless Center of the Spinning Wheel of Opposites",
      "The Parable of 'Three in the Morning': The Monkeys and the Acorns",
      "Harmonizing with All Points of View: The Equalizing of All Things (Qiwulun)"
    ]
  },
  {
    id: "unit-6-epistemology-of-empathy-joy-of-fishes",
    title: "Unit 6: The Epistemology of Empathy: The Joy of Fishes on the River Hao",
    themes: [
      "The Famous Encounter: Chuang Tzu and the Logician Hui Tzu on the Bridge Over the Hao",
      "The Logical Dispute: 'You Are Not a Fish, How Do You Know What Makes Fish Happy?'",
      "Chuang Tzu's Playful Counter: 'You Are Not Me, How Do You Know I Don't Know?'",
      "Analytical Rigidity vs. Intuitive Sympathy: The Failure of Hyper-Rationalist Skepticism",
      "Knowing Through Direct Attunement: Shared Life in the River of Consciousness"
    ]
  },
  {
    id: "unit-7-empty-boat-dissolution-of-ego",
    title: "Unit 7: The Empty Boat: Freedom from Resentment & The Dissolution of the Social Self",
    themes: [
      "The Parable of the Empty Boat: Crossing a River in a Fog",
      "Why Nobody Gets Angry at an Empty Boat: The True Source of Anger is Perceived Personal Intent",
      "Emptying Your Own Boat: Stepping Outside the Neurotic, Fragile, Defensive Ego",
      "The Invisible Man: Moving Through the Human World Without Triggering Envy, Threat, or Conflict",
      "Radical Humility as Supreme Strategic Invulnerability"
    ]
  },
  {
    id: "unit-8-psychology-of-attachment-archer-paradox",
    title: "Unit 8: The Psychology of Attachment: The Archer's Paradox & 'The Need to Win'",
    themes: [
      "The Parable of the Archer: Shooting for Clay Tiles vs. Brass Buckles vs. Pure Gold",
      "The Paradox of Performance: When Gold is the Prize, the Master Marksman Goes Blind and Shakes",
      "The Sickness of External Reward: How Anxiety Over Results Destroys Internal Skill and Flow",
      "Detachment from Outcomes: Focusing Completely on the Act Rather than the Trophy",
      "Spontaneity (Ziran) as the Only Pathway to Flawless Precision"
    ]
  },
  {
    id: "unit-9-cosmic-metamorphosis-butterfly-dream",
    title: "Unit 9: The Cosmic Metamorphosis: The Butterfly Dream & The Fluidity of Identity",
    themes: [
      "The Immortal Parable: Chuang Tzu Dreaming He Was a Butterfly Fluttering in the Garden",
      "The Awaking Dilemma: Is He Chuang Tzu Who Dreamed He Was a Butterfly, or a Butterfly Dreaming He is Chuang Tzu?",
      "The Transformation of Things (Wu Hua): Reality as an Unbroken, Fluid Metamorphosis",
      "The Dissolution of Rigid Selfhood: We Are Not Static Monuments; We Are Momentary Waves",
      "Living Without Fear of Change: Welcoming the Rhythms of Life, Aging, and Transformation"
    ]
  },
  {
    id: "unit-10-perfect-joy-great-awakening-death",
    title: "Unit 10: Perfect Joy & The Great Awakening: Living and Dying in the Unbroken Flow of Dao",
    themes: [
      "The Parable of Chuang Tzu Drumming on a Tub and Singing at His Wife's Death",
      "Mourning as Ignorance of Cosmic Law: Returning to the Great Ancestral Source",
      "Chuang Tzu's Funeral: Refusing a Grand Coffin in Favor of the Sky, Sun, and Stars",
      "What is Perfect Joy (Zhi Le)? The Absence of Striving for Happiness",
      "The Sage's Tranquility: Drifting Like a Cloud, Resting in Dao, Complete at Every Step"
    ]
  }
];

const masterNotes = `# Master Codex: The Way of Chuang Tzu
## Classical Daoist Philosophy, Spontaneous Non-Action (Wu Wei) & The Liberation of the Heart
### Author: Thomas Merton / Zhuangzi | Critical Edition: New Directions | Standard: BKRS v2.0 Replacement-Grade Codex

---

## Executive Architectural Summary

Published in 1965 by New Directions, *The Way of Chuang Tzu* by the Trappist monk, poet, and contemplative **Thomas Merton** represents one of the most sublime cross-cultural philosophical encounters in world literature. Merton—one of the twentieth century's most profound Christian contemplatives and peace activists—devoted five years of intensive study, translation comparison, and meditation to the writings of the ancient Chinese master **Zhuangzi (Chuang Tzu, c. 369–286 BCE)**, the greatest literary and philosophical genius of classical Daoism.

Merton famously wrote of this masterpiece:
> *"I may say that I have enjoyed writing this book more than any other I can remember... I simply like Chuang Tzu because he is what he is and I am what I am. If I were asked to choose between living in a world inhabited only by Christians who are constantly preaching at me or a world inhabited by Chuang Tzu, I would unhesitatingly choose Chuang Tzu."*

Chuang Tzu lived during the bloody, chaotic Warring States period of ancient China. While his contemporaries (Confucians, Legalists, and Mohists) rushed to rulers with elaborate schemes to organize society through moral codes, strict laws, bureaucratic hierarchies, and military discipline, Chuang Tzu offered a revolutionary, laughter-filled alternative: **The Way (Dao)**.

Chuang Tzu taught that human misery, anxiety, tyranny, and violence are not caused by a lack of rules; they are caused by **too many rules**—by humanity's hubristic attempt to force the spontaneous, organic harmony of nature (**Ziran**) into artificial intellectual boxes. Through brilliant parables, paradoxical humor, and poetic fables, Chuang Tzu deconstructs the self-righteous ego, dismantles rigid intellectual dogmas, and reveals the art of **Wu Wei (non-contrived, effortless action)**.

This Master Codex synthesizes Merton’s readings and essays into 10 structured propositional units, presenting a comprehensive, beginner-accessible exploration of Daoist metaphysics, psychology, and ethics.

---

## Unit 1: The Philosophy of the Nameless: Thomas Merton on Daoist Wisdom vs. Confucian Moralism

### 1.1 The Core Idea in Plain English
Most people think that to be a good person, you have to memorize complicated moral rules, follow strict traditions, and constantly police your behavior. The ancient Daoist master Chuang Tzu said the exact opposite: when you try too hard to be "virtuous," you become a stiff, judgmental hypocrite. True goodness is like water: it flows naturally, effortlessly nourishes everything without bragging, and rests in simple, uncarved harmony with the universe.

### 1.2 Thomas Merton and the Daoist Counter-Culture
In his extensive introductory treatise, Merton contextualizes the radical spirit of Chuang Tzu:
- Chuang Tzu lived during the 4th century BCE—a time of brutal civil war, shifting alliances, and social disintegration known as the **Warring States period**:
  - The dominant philosophy was **Confucianism**, founded by Kong Fuzi (Confucius). The Confucians believed that social chaos could be cured by teaching everyone their exact social duty, reviving ancient court rituals, enforcing filial piety, and drilling people in formal virtues: benevolence (*ren*), righteousness (*yi*), and propriety (*li*).
  - The **Legalists** went further, demanding absolute obedience to the totalitarian state through draconian punishments and military mobilization.
- **The Daoist Rebellion**: Chuang Tzu recognized that both Confucianism and Legalism made the exact same fatal mistake: they treated human beings like trees that needed to be pruned, chopped, bent, and carved into artificial furniture.
- By inventing artificial concepts of "virtue" and "duty," Confucianism actually created the vices it sought to cure:
  - If you don't invent gold, you don't create bank robbers.
  - If you don't create elaborate moral hierarchies, you don't create hypocrites who pretend to be holy to gain political influence.

### 1.3 The Uncarved Block (*Pu*)
At the center of Daoist thought is the metaphor of the **Uncarved Block (*Pu*)**:
- A piece of raw, unshaped wood in the forest has no label, no price, and no specific job—yet it contains infinite potential.
- Once the carpenter chops it up, it becomes a table, a chair, or a coffin. It becomes "useful," but its original, unified wholeness has been destroyed.
- Chuang Tzu invites humanity to return to the Uncarved Block: to strip away the artificial, socially conditioned personas that society forces upon us, and reconnect with our **original, spontaneous nature (*Ziran*)**.

### 1.4 The Dao That Cannot Be Named
The ultimate reality in Daoism is **Dao** (literally: "The Way"):
- As Lao Tzu wrote in the *Dao De Jing*: *"The Dao that can be told is not the eternal Dao; the name that can be named is not the eternal name."*
- Dao is not a personal god sitting on a cloud with an ego, listening to prayers, or demanding blood sacrifices.
- Dao is the **unseen, self-organizing, organic rhythm of the cosmos**: the mysterious principle that causes seeds to sprout, rivers to carve canyons, seasons to cycle, and galaxies to spin.
- You cannot capture Dao with philosophical syllogisms; you can only align your life with its silent, effortless flow.

---

## Unit 2: The Wisdom of Uselessness: The Gnarled Oak & Liberation from Exploitation

### 2.1 The Core Idea in Plain English
In modern society, everyone is constantly asking: *"What is your value? How useful are you? How much money can you produce?"* Chuang Tzu told a story about a giant, twisted oak tree that was so knotty and crooked that no carpenter could make planks out of it. Because it was completely "useless," nobody cut it down, and it grew for a thousand years, providing cool shade for thousands of weary travelers. Being useless to people who want to exploit you is the secret to living a long, free life!

### 2.2 The Parable of the Useless Tree
In Book I of the *Zhuangzi*, Hui Tzu (Chuang Tzu’s friend and rival, a brilliant logician) says to Chuang Tzu:
- *"I have a big tree, of a kind people call the 'Stinking Tree' (Ailanthus). Its trunk is so gnarled and covered with knots that you cannot put a chalk line to it; its branches are so twisted that you cannot apply a compass or a square. It stands by the road, but no carpenter will look at it twice. Your teachings, Chuang Tzu, are just like this tree: big, useless, and everyone ignores them!"*

### 2.3 Chuang Tzu’s Laughter-Filled Reply
Chuang Tzu smiled and replied:
- *"Have you ever seen a wildcat or a weasel? It crouches low, waiting for prey; it leaps east and west, jumping over walls—until it steps into a hunter's snare and dies in a trap.*
- *Now look at the giant yak: its body is as vast as clouds hanging from the sky. It is immense—yet it cannot catch mice.*
- *Now you have this enormous tree, and you fret because it has no use! Why don't you plant it in the Realm of Nothing Whatever, in the wide and open wilds? There you could wander leisurely at its side, or sleep peacefully in its shade.*
- **No axe will cut its life short; nothing will do it injury. If you are of no use to anyone, what trouble can possibly come upon you?"**

### 2.4 The Inversion of Value: Resisting Instrumentalization
Greenblatt and Merton both highlight Chuang Tzu's profound socio-political critique:
- The cinnamon tree is chopped down because its bark is sweet; the lacquer tree is slashed because its sap is valuable.
- **Everyone understands the usefulness of the useful, but nobody understands the usefulness of the useless (*wuyong zhi wei yong*)**:
  - The moment you prove yourself "useful" to the state, the emperor, the corporation, or the military, you are drafted, taxed, overworked, stressed, and consumed.
  - The straight tree is felled for lumber; the sweet fruit tree is stripped bare and broken; but the gnarled, "useless" tree survives to enjoy its natural lifespan.
- Cultivating "uselessness" is not laziness; it is a sacred act of **self-preservation and spiritual autonomy**—refusing to let your irreplaceable human life be converted into raw material for someone else’s machine.

---

## Unit 3: The Secret of Mastery: Cook Ding & The Art of Effortless Action (Wu Wei)

### 3.1 The Core Idea in Plain English
A butcher named Cook Ding was cutting up an ox for the King. His knife moved with the graceful rhythm of a dancer, never making a harsh sound, slicing through the meat as if it were butter. The King marveled and asked: *"How can your skill be so divine?"* Cook Ding replied: *"I don't look with my eyes; I follow the natural grain. Other butchers hack at bones and break their knives every month. My knife has cut thousands of oxen for nineteen years, and the blade is still as sharp as if it just came from the whetstone!"*

### 3.2 The Parable of Cook Ding (*Pao Ding Jie Niu*)
This is the most famous parable in the entire Daoist canon:
- Lord Wen Hui watched his cook butcher an ox:
  - Every touch of Ding's hand, every shift of his shoulder, every step of his foot, every thrust of his knee moved in perfect rhythm, like a musician performing the ancient *Dance of the Mulberry Forest*.
  - With a soft *whoosh*, the ox fell apart like a mound of crumbling earth.

### 3.3 The Three Levels of Craft
Lord Wen Hui asked for the secret. Cook Ding laid down his cleaver and explained:
1. **The Beginner Butcher**: *"When I first began cutting up oxen, all I could see was the whole ox before me. I didn't know where to start."*
2. **The Intermediate Butcher**: *"After three years of practice, I no longer saw the whole ox. I saw parts, muscles, and cuts."*
3. **The Master of Dao**: *"Now—after nineteen years—I encounter the ox with my spirit, not with my eyes. My senses stand still, and my spirit moves where it wills.*
   - *I follow the natural structure, slipping into the big hollows, guiding the blade through the vast openings, following things as they are.*
   - *I never touch a tendon, a ligament, or a bone!*
   - *A good cook changes his knife once a year because he cuts. A mediocre cook changes his knife once a month because he hacks.*
   - *Now look at my knife: nineteen years, thousands of oxen, and the blade is as fresh as if it was ground this morning.*
   - **Between the joints there is space, and the edge of the blade has no thickness. When you insert that which has no thickness into that which has space, there is plenty of room—the blade plays through with ease!"**

### 3.4 The Philosophy of *Wu Wei* (Effortless Action)
Lord Wen Hui exclaimed: *"Splendid! From the words of my cook, I have learned how to live life!"*
- What Cook Ding describes is the essence of **Wu Wei** (literally: "non-doing" or "non-contrivance"):
  - Wu Wei does not mean lying in bed all day doing nothing.
  - It means **acting without friction**—acting in such deep attunement with reality that you never force, never hack, never smash your head against brick walls, and never try to impose your arbitrary will upon nature.
  - You find the natural hollows and spaces in human relationships, work, and challenges, allowing the problem to dissolve of its own accord.

---

## Unit 4: The Fasting of the Heart (Xinzhai): Silencing the Ego & Emptying Consciousness

### 4.1 The Core Idea in Plain English
A young student wanted to go to a dangerous kingdom to preach morality to a cruel tyrant and fix his government. Confucius stopped him and warned: *"You will just get yourself executed! You are full of pride and fancy arguments. Before you can help anyone, you must practice the Fasting of the Heart."* The student asked what that meant. Confucius said: *"Stop listening with your ears; stop thinking with your busy mind. Empty your heart until it becomes like a clear mirror that simply reflects what is."*

### 4.2 The Mission of Yan Hui
Yan Hui, the favorite disciple of Confucius, came to his master to say goodbye:
- He had heard that the ruler of the state of Wei was young, reckless, and tyrannical, oppressing his people and marching into foolish wars.
- Yan Hui was full of noble, idealistic enthusiasm: he planned to lecture the prince on righteousness, show him the error of his ways, and reform the state.

### 4.3 The Danger of Moral Ambition
Confucius (used here by Chuang Tzu as a dramatic mouthpiece to subvert Confucianism) rebukes the young idealist:
- *"Do you know why virtue is compromised, and why wisdom turns into a weapon?*
  - *Virtue is compromised by the desire for fame; wisdom turns into a weapon in the struggle for prestige.*
  - *You think you are going there out of pure benevolence, but deep down, you want to show off how holy and wise you are.*
  - *The tyrant will feel insulted and humiliated by your self-righteousness. He will argue with you, trap you in your own words, and either seduce you or cut off your head!"*

### 4.4 The Three Levels of Listening
Yan Hui asked: *"Then what should I do?"* Confucius replied: **"Fast your heart!"**
1. **Listening with the Ears**: The ears only hear external sounds (mere words, acoustic vibrations). This is superficial.
2. **Listening with the Mind (*Xin*)**: The mind analyzes, calculates, categorizes, and forms clever arguments. But the mind is trapped in its own concepts and prejudices.
3. **Listening with the Spirit (*Qi*)**: The spirit is an open, empty void that waits upon things:
   - *"The hearing of the ears stops at the sounds; the hearing of the mind stops at concepts. But the spirit is empty and waits for all things. The Dao gathers only in emptiness. And this emptiness is the **Fasting of the Heart (*Xinzhai*)**."*

### 4.5 The Mirror of the Mind
When the heart fasts, the ego falls silent:
- Look at a window: it is an empty hole in the wall, yet through that emptiness, the whole room is filled with bright sunlight.
- Chuang Tzu compares the perfected mind to a **mirror**:
  > *"The perfect man employs his mind as a mirror: it grasps nothing, it refuses nothing; it receives, but does not keep. Therefore, he can conquer things without sustaining injury."*

---

## Unit 5: The Pivot of Dao & The Transcending of Dualism: Beyond "Right" and "Wrong"

### 5.1 The Core Idea in Plain English
Why do people fight endless wars and screaming arguments about politics and religion? Because everyone is trapped in dualism: *"I am right, and you are wrong!"* Chuang Tzu showed that "right" and "wrong" depend entirely on where you are standing. A monkey loves to sleep in trees; a human falls out of a tree and breaks their neck. Who is "right"? The wise person steps onto the **Pivot of Dao**—the calm hub at the center of the spinning wheel—and looks at both sides with compassion and laughter.

### 5.2 The Futility of Philosophical Disputation
Chuang Tzu was a devastating satirist of intellectual arrogance:
- Suppose you and I have an argument:
  - If you beat me and I cannot answer you, does that prove you are really right and I am really wrong?
  - If I beat you, does that prove I am right?
  - If we bring in a third person who agrees with you, they are biased toward you. If we bring in someone who agrees with me, they are biased toward me. If we bring in someone who disagrees with both of us, they cannot settle it!
- Human language is made of relative contrasts: we only know what "tall" is because we compare it to "short"; we only know what "light" is because we compare it to "dark."

### 5.3 The Parable of "Three in the Morning" (*Zhao San Mu Si*)
To illustrate how humans get infuriated over identical realities disguised by words, Chuang Tzu told the fable of the monkey trainer:
- A keeper of monkeys went out to feed them acorns and announced:
  - *"From now on, I will give you three chestnuts in the morning and four in the evening."*
  - The monkeys were furious! They jumped up and down, shrieking with rage at being cheated.
- The trainer calmly nodded and said:
  - *"Very well! In that case, I will give you four chestnuts in the morning and three in the evening!"*
  - The monkeys were delighted! They clapped their hands and leaped with joy.
- **The Lesson**: In both arrangements, the total number of chestnuts was identical (seven). Nothing had changed in reality; only the verbal framing had shifted. Yet the monkeys’ emotions swung from violent rage to ecstatic joy.
- Chuang Tzu remarks: Most human political controversies and ideological battles are nothing more than "Three in the Morning."

### 5.4 The Pivot of Dao (*Dao Shu*)
How does the sage escape this trap?
- By standing at the **Pivot of Dao**:
  - Imagine a spinning wheel: the rim is spinning wildly, churning through points of "this" and "that," "gain" and "loss," "praise" and "blame."
  - But at the very center of the axle—the hub—there is zero movement. It is motionless, empty, and free.
  - From the Pivot of Dao, you can see all perspectives without being imprisoned by any of them. You harmonize with all things while remaining centered in the silence of the absolute.

---

## Unit 6: The Epistemology of Empathy: The Joy of Fishes on the River Hao

### 6.1 The Core Idea in Plain English
Chuang Tzu and his friend Hui Tzu were strolling on a bridge over a river. Chuang Tzu looked down and said: *"Look at the little minnows darting back and forth so freely! That is the joy of fishes!"* Hui Tzu, who was a strict logician, immediately objected: *"You are not a fish! How can you possibly know what makes a fish happy?"* Chuang Tzu turned to him with a grin: *"You are not me! How do you know I don't know what makes a fish happy?"*

### 6.2 The Walk on the Bridge Over the River Hao
This brief, legendary dialogue captures the profound divide between two fundamental ways of knowing reality:
- **Hui Tzu (The Rationalist / Analytical Logician)**:
  - Hui Tzu represents strict, formal logic and skepticism.
  - His argument is epistemologically airtight: You are an air-breathing human mammal; you have no scales, no fins, and no gills. You cannot crawl into the neurological system of a carp. Therefore, claiming to know the emotional state of a fish is an unverified, subjective projection.
- **Chuang Tzu (The Daoist Contemplative / Poet of Nature)**:
  - Chuang Tzu does not refute Hui Tzu using a textbook syllogism. He uses Hui Tzu's own logical trap against him:
    - *"You say: 'How do you know?' But by asking me that, you already admitted you knew that I knew! I knew the joy of the fishes right here, standing on the bridge over the Hao!"*

### 6.3 Analytical Skepticism vs. Participatory Empathy
Merton analyzes the philosophical brilliance of Chuang Tzu’s position:
- Hui Tzu suffers from the disease of modern Western Cartesian philosophy: he treats the self as an isolated subject inside a bone skull, cut off from an alien "external world." To Hui Tzu, empathy across species is impossible.
- Chuang Tzu operates from **participatory non-dualism**:
  - The human being and the fish are not alien strangers; both are made of the same living *Qi* (vital energy), flowing within the same single, unbroken river of Dao.
  - Standing in the warm afternoon breeze, feeling the joy of life coursing through his own veins, Chuang Tzu recognizes that same universal pulse of life in the darting movements of the fish.
  - Rationalist logic divides the world into dead pieces; contemplative empathy experiences the shared vitality of the living cosmos.

---

## Unit 7: The Empty Boat: Freedom from Resentment & The Dissolution of the Social Self

### 7.1 The Core Idea in Plain English
If you are rowing your boat across a foggy lake and another boat suddenly smashes into yours, you jump up, shake your fist, and scream curses at the other person! But then you look closely and realize: **there is nobody in the boat—it was just an empty boat floating loose in the wind!** Instantly, your anger vanishes, and you just laugh. Chuang Tzu says: if you can empty your own boat—get rid of your fragile, self-important ego—nobody in the entire world can ever make you angry again!

### 7.2 The Parable of the Empty Boat (*Xu Zhou*)
Merton's poetic translation of this fable is one of the gems of the book:
- *"If a man is crossing a river in a boat, and another boat, empty, drifts along and collides with his craft, even if he is an irritable man, he will not lose his temper.*
- *But if he sees a man in the boat, he will shout to him to steer clear!*
- *If the first shout is not heard, he will shout again; and if that is not heard, he will shout a third time, adding curses and insults.*
- *In the first case, he was not angry; in the second case, he was.*
- **Why? Because in the first boat, there was NOBODY; but in the second boat, there was A PERSON!**
- **If you can empty your own boat as you cross the river of the world, who can possibly oppose you? Who can do you harm?"**

### 7.3 The Psychology of Offense and Resentment
Chuang Tzu uncovers the root cause of human outrage:
- We don't get angry at the rock that we trip over; we don't get angry at the rain that ruins our picnic; we don't get angry at the loose boat.
- We get angry **only when our ego suspects that someone insulted our importance, neglected our status, or deliberately harmed us**.
- Anger is an ego-defense mechanism. It exists only because we have constructed a heavy, rigid, defensive "boat" labeled **"ME"**.

### 7.4 The Invisible Man
How do you empty your boat?
- Stop demanding that the world recognize your importance.
- Stop carrying around a giant cargo of grievances, titles, rights, and pretensions.
- When you are "nobody," you can walk through the crowd without friction. If someone insults you, the insult passes straight through you like wind through an empty room, because there is no target for the arrow to hit.

---

## Unit 8: The Psychology of Attachment: The Archer's Paradox & "The Need to Win"

### 8.1 The Core Idea in Plain English
When an archer shoots just for fun at a carnival for cheap clay tiles, his aim is smooth, relaxed, and perfect. When he shoots for an expensive brass prize, he starts getting nervous. But when he shoots for a grand prize of pure solid gold, he breaks out in a cold sweat, his hands tremble, and he misses the target completely! His skill didn't change; his **obsession with winning** blinded him. When you care too much about the prize, you destroy your natural ability.

### 8.2 The Archer’s Paradox
In Book XIX of the *Zhuangzi*, the sage describes the fatal distortion caused by external rewards:
- *"When an archer is shooting for nothing (for fun, for a clay dish), he shoots with all his skill.*
- *When he is shooting for a buckle made of brass, he is already cautious, holding his breath.*
- *When he is shooting for a prize of gold, **he goes completely blind! He sees two targets instead of one, and his mind is unhinged!**"*

### 8.3 The Mechanism of Choking Under Pressure
Why does the archer fail when the stakes are highest?
- *"His skill has not changed at all! But because the prize has value, he gives weight to the outside world.*
- **He who gives weight to the outside world becomes clumsy on the inside.**"
- When you focus on the gold:
  - Your attention shifts away from the physical bow, the arrow, the muscle tension, and the breath.
  - Your mind becomes flooded with future scenarios: *"What will people say if I win? What if I fail and look foolish? How much money will I make?"*
  - The ego hijacks the body, paralyzing the spontaneous, unconscious intelligence of muscle memory.

### 8.4 The Virtue of Detachment
Chuang Tzu reveals the profound secret of peak performance:
- The true master acts without "the need to win."
- They find joy in the shooting itself, in the drawing of the bow, in the release of the string.
- When you stop chasing trophies, your mind remains light, clear, and unified, and your natural genius operates with effortless perfection.

---

## Unit 9: The Cosmic Metamorphosis: The Butterfly Dream & The Fluidity of Identity

### 9.1 The Core Idea in Plain English
One afternoon, Chuang Tzu fell asleep and had a vivid dream that he was a butterfly, fluttering happily among flowers, having no idea he was a human being. Suddenly, he woke up, and there he was: solid, heavy Chuang Tzu sitting in his chair. He rubbed his eyes and wondered: *"Was I a man dreaming I was a butterfly? Or am I really a butterfly right now, dreaming that I am a man?"* Life is a magical, ever-changing dance of transformation.

### 9.2 The Dream of the Butterfly (*Zhuang Zhou Meng Die*)
This is the most famous philosophical dream in world literature:
- *"Once upon a time, Chuang Tzu dreamed that he was a butterfly, flying about, enjoying itself. It didn't know anything about Chuang Tzu.*
- *Suddenly he woke up and there he was, undeniably and solidly Chuang Tzu.*
- *Now he did not know whether he had been a man dreaming he was a butterfly, or whether he was now a butterfly dreaming he was a man.*
- *Between a man and a butterfly there is necessarily a barrier, a distinction.*
- **This is called the Transformation of Things (*Wu Hua*)."**

### 9.3 The Dissolution of Rigid Boundaries
The butterfly dream is not merely a cute fairy tale; it is a profound epistemological and metaphysical statement:
- Western philosophy, from Descartes onwards, obsessed over finding an unbreakable, permanent foundation for the self (*"I think, therefore I am"*).
- Chuang Tzu recognizes that the "self" is not a concrete statue carved from granite; the self is **a fluid, passing dream within the infinite transformations of Dao**:
  - Yesterday you were an infant; today you are an adult; tomorrow you will be an old person; eventually, your physical body will become soil, grass, and butterflies.
  - Why cling desperately to the illusion that you are permanently and exclusively "Chuang Tzu"?

### 9.4 Living in the Flow of Change
Once you understand the **Transformation of Things (*Wu Hua*)**:
- You lose your anxiety about aging, illness, and transitions.
- You stop fighting change; you ride the waves of transformation with curiosity, lightness, and grace.

---

## Unit 10: Perfect Joy & The Great Awakening: Living and Dying in the Unbroken Flow of Dao

### 10.1 The Core Idea in Plain English
When Chuang Tzu’s beloved wife died, his friend Hui Tzu came to offer condolences. But when he arrived at the house, he found Chuang Tzu sitting on the floor with his legs sprawled out, drumming on an old washbasin and singing at the top of his lungs! Hui Tzu was shocked: *"Your wife raised your children and grew old with you! Isn't singing at her funeral going too far?"* Chuang Tzu looked up and explained that dying is just like going to sleep: she has returned to the peaceful cosmic womb from which she came, so why should he insult her with tears?

### 10.2 Chuang Tzu at His Wife’s Funeral
Hui Tzu was scandalized to find the philosopher singing:
- Chuang Tzu calmly put down his drumstick and explained:
  - *"When she first died, do you think I didn't grieve like anyone else? Of course I did!*
  - *But then I reflected on her beginning: in the beginning, before she was born, she had no life. Not only no life, but no bodily form. Not only no form, but no breath.*
  - *In the midst of the vast emptiness of Dao, a subtle change occurred, and there was breath. The breath changed, and there was bodily form. The form changed, and there was life.*
  - *Now another change has occurred, and she has passed on to death.*
  - **This is simply the progression of the four seasons: spring, summer, autumn, winter.**
  - **Now she is resting quietly in the Great Chamber of the universe. If I were to follow her around weeping and wailing at the top of my voice, I would be acting like an ignorant fool who understands nothing of cosmic law. So I stopped weeping, and I sang."**

### 10.3 Chuang Tzu’s Own Funeral
When Chuang Tzu himself lay dying, his disciples gathered around his bed and whispered plans to purchase a magnificent, expensive wooden coffin to honor their master:
- Chuang Tzu overheard them and said:
  - *"I have heaven and earth for my outer coffin; the sun and moon for my pair of jade ornaments; the stars and constellations for my pearls; and all living creatures for my mourners! Everything is prepared for my burial. What could you possibly add?"*
- The disciples objected: *"Master, we are terrified that if you are left in the open, the vultures and crows will eat you!"*
- Chuang Tzu laughed:
  > *"Above ground, I will be eaten by the vultures and crows. Below ground, I will be eaten by the worms and ants. You are taking from the one to feed the other—why be so biased toward the worms?"*

### 10.4 What is Perfect Joy (*Zhi Le*)?
Chuang Tzu concludes with his supreme paradox:
- What does ordinary society call "joy"?
  - Making money, being famous, having power, eating rich foods, wearing designer clothes.
  - But everyone who chases these things lives in constant terror of losing them! Their "joy" is poisoned by anxiety.
- **Perfect Joy is having NO ambition for joy (*Zhi le wu le*)**:
  - Perfect Joy is the quiet, unbreakable serenity that comes when you stop chasing happiness outside yourself.
  - When you abandon grasping and striving, the deep, luminous peace of the universe fills your heart.
  - You drift like a cloud in the vast sky, complete in every single breath, at home in life and at home in death, resting peacefully in the infinite arms of Dao.

---

## Contemplative Appendix: Thomas Merton on Daoism & Practical Exercises

### Appendix A: Thomas Merton’s Comparative Monastic Reflection
Why was a Catholic Trappist monk living in Gethsemani Abbey, Kentucky, so deeply drawn to an ancient Chinese Daoist who laughed at all institutions?
- Merton discovered in Chuang Tzu an antidote to **religious legalism and spiritual careerism**:
  - In Western monasticism, monks often fell into the trap of measuring their holiness by how many hours they chanted, how severely they fasted, or how strictly they obeyed regulations.
  - Merton saw that Chuang Tzu’s critique of Confucian moralism applied directly to Western Christianity: when religion becomes a performance of rules and external duties, genuine spiritual love (*Agape* / *Dao*) withers.
- Chuang Tzu represented what Merton called **"The Desert Father of China"**: a solitary hermit who fled imperial courts and political propaganda to preserve the freedom, simplicity, and purity of the human soul in direct communion with nature.

### Appendix B: Seven Diagnostic Maxims for Daily Daoist Living
1. **The Principle of Water**: Water never fights obstacles; when it meets a boulder, it gently flows around it; when it reaches a hollow, it fills it; yet over time, soft water carves the Grand Canyon. Be like water.
2. **The Power of Non-Judgment**: When an event occurs, do not rush to label it "good fortune" or "tragedy" (like the old farmer whose horse ran away). Life is an unfolding tapestry whose ultimate patterns are hidden from view.
3. **The Freedom of the Shadow**: The shadow follows the body wherever it goes, complaining that it has no autonomy. Do not be like the shadow, constantly worrying about what other people think. Root yourself in the light of Dao.
4. **The Protection of Invisibility**: When monkeys show off their acrobatic agility on the mountain, the king's hunters shoot them first; the quiet monkey hiding in the leaves survives. Do not flaunt your talents to arouse envy.
5. **The Secret of the Wheelwright**: Old wheelwright Bian told Duke Hwan that reading books of dead sages is merely chewing on their leftover husks. True wisdom is tactile, unutterable, and found only in lived, direct practice.
6. **The Release of Control**: You cannot make muddy water clear by stirring it with a stick; you make muddy water clear by leaving it alone and letting the sediment settle. Let your troubled mind settle in stillness.
7. **The Ultimate Rest**: Life is a temporary journey; death is a homecoming. Walk lightly, carry no unnecessary baggage, and embrace every transition with serene wonder.

### Appendix C: The Lexicon of Classical Daoism
- **Dao (道)**: The unnamable, flowing source and underlying order of the universe.
- **De (德)**: The intrinsic power, virtue, or natural integrity that manifests when an entity lives in harmony with Dao.
- **Wu Wei (無為)**: Effortless, spontaneous, non-contrived action; acting in alignment with the natural grain of reality.
- **Ziran (自然)**: Spontaneity, self-so-ness, that which occurs naturally of its own accord without external coercion.
- **Qi (氣)**: The vital life-energy and breath that animates the cosmos and living beings.
- **Pu (樸)**: The Uncarved Block; the state of pure, natural, undivided potential before artificial social conditioning.
- **Xinzhai (心齋)**: The Fasting of the Heart; quieting sensory distractions and mental concepts to let the spirit reflect Dao.
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
      <button class="view-btn active" data-view="journey">View A: Daoist Parable Journey</button>
      <button class="view-btn" data-view="map">View B: Spontaneity Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Wu Wei Contemplation Engine</button>
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
          <h2>Spontaneity Blueprint: The Way of Chuang Tzu</h2>
          <p class="subtitle">Complete philosophical map of Thomas Merton & Zhuangzi's 10 units on Wu Wei, the Empty Boat, and the Pivot of Dao.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Parables & Concepts:</strong></p>
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
          <h2>The Wu Wei & Daoist Contemplation Engine</h2>
          <div class="engine-section">
            <h3>Diagnostic Maxims for Effortless Living and Freedom</h3>
            <div class="formula-box">
              <p><strong>1. The Principle of the Empty Boat:</strong> When an empty boat collides with yours, you feel zero anger. Empty your own boat of the fragile, demanding ego, and nobody in the world can oppose or harm you.</p>
              <p><strong>2. The Secret of Cook Ding:</strong> Do not hack at life with force; find the natural spaces where there is no resistance. Align your action with the grain of reality (*Wu Wei*).</p>
              <p><strong>3. The Wisdom of Uselessness:</strong> The useful tree is cut down; the sweet tree is stripped. Cultivate usefulness to Dao and uselessness to worldly exploitation to preserve your life in serene joy.</p>
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
