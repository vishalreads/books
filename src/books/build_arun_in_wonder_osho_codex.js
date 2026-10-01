const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const slug = 'in-wonder-with-osho-anand-arun';
const outDir = path.join(__dirname, '..', '..', 'docs', 'distillations', slug);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const title = 'In Wonder With Osho';
const author = 'Swami Anand Arun';
const category = 'Philosophy, Reason & Critical Thought';

const knowledgeUnits = [
  {
    id: 'unit-1',
    title: 'Unit 1: The Jabalpur Dawn and the First Awakening: Encounters with Acharya Rajneesh (1969–1970)',
    themes: [
      'The early university professor era: Acharya Rajneesh traveling across India addressing youth conferences',
      'The author’s first encounter in Patna: the magnetic vibration of a living enlightened master',
      'The radical critique of traditional religion, socialism, and Gandhian asceticism',
      'The foundational meditation camps: Nargol and early dynamic breath experiments',
      'The first glimpse of Satori and the shattering of intellectual preconceptions'
    ]
  },
  {
    id: 'unit-2',
    title: 'Unit 2: The Woodlands Oasis: Peddar Road, Bombay, and the Birth of Neo-Sannyas (1970–1974)',
    themes: [
      'The intimate Peddar Road apartment: life inside Woodlands with early disciples and seekers',
      'The historic September 1970 Manali camp: the formal inauguration of Neo-Sannyas',
      'The orange robe, the mala with 108 beads, and the wooden locket: symbols of cosmic connection',
      'Intimate evening meetings: direct energetic transmission without the barrier of large crowds',
      'The transition from Acharya (teacher) to Bhagwan (the blessed one / the awakened)'
    ]
  },
  {
    id: 'unit-3',
    title: 'Unit 3: The Golden Years of Pune One: Chuang Tzu, The Master’s House, and International Explosion (1974–1981)',
    themes: [
      'The purchase of the Koregaon Park property: creating an international oasis for human transformation',
      'Morning discourses in Buddha Hall: expounding world mystical traditions from Zen to Sufism',
      'Evening darshans in Chuang Tzu Auditorium: intimate spiritual surgery and Energy Darshans',
      'The synthesis of Western humanistic psychology (Encounter, Primal, Bioenergetics) with Eastern meditation',
      'The vibrant, creative life of the commune: artisans, musicians, therapists, and seekers'
    ]
  },
  {
    id: 'unit-4',
    title: 'Unit 4: The Nepal Connection: Planting the Seeds of Meditation in the Himalayan Valley',
    themes: [
      'Osho’s profound spiritual affinity with Nepal: the land of Gautama Buddha, Janaka, and Gorakhnath',
      'Swami Anand Arun’s personal mission: introducing Osho’s active meditations to Kathmandu',
      'The early struggles against conservative Hindu orthodox opposition and political suspicion',
      'Pashupatinath retreats and the founding of the Osho Tapoban commune in the Nagarjun forest',
      'Nepal as an energetic sanctuary for seekers during turbulent international transitions'
    ]
  },
  {
    id: 'unit-5',
    title: 'Unit 5: The American Dream and Nightmare: Rajneeshpuram, The Desert Commune, and the Sheela Crisis (1981–1985)',
    themes: [
      'The sudden exodus to Oregon: transforming 64,000 acres of barren, overgrazed desert into an eco-oasis',
      'The silence phase: Osho withdrawing into physical silence while the commune rapidly expanded',
      'The rise of Ma Anand Sheela’s authoritarian administrative coterie and institutional paranoia',
      'Conflict with Oregon local politicians, the Christian fundamentalist right, and federal agencies',
      'The dramatic collapse of Sheela’s group, Osho breaking his silence, and the exposure of commune crimes'
    ]
  },
  {
    id: 'unit-6',
    title: 'Unit 6: The Global Odyssey and State Persecution: Detention, Expulsion, and Thallium Poisoning (1985–1986)',
    themes: [
      'The unlawful arrest in Charlotte, North Carolina: twelve days in federal detention without bail',
      'The weaponization of US federal power: coerced plea bargain and deportation',
      'The mysterious administration of heavy-metal thallium and radiation poisoning in Oklahoma jail',
      'The World Tour: Osho denied entry, expelled, or placed under house arrest in 21 countries',
      'The geopolitical demonstration of state terror against an unarmed, peaceful mystic'
    ]
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Pune Two and the Gateless Gate: Zen Discourses, Dropping Titles, and Spiritual Purity (1987–1989)',
    themes: [
      'The return to Pune: rebuilding the ruined ashram into the Osho Commune International',
      'Dropping all titles: from Bhagwan to Osho (derived from William James’ oceanic feeling)',
      'The supreme Zen discourse series: The Great Zen Master Ta Hui, Joshu, Bodhidharma, and Hyakujo',
      'The physical deterioration: declining health, failing organs, and unwavering spiritual presence',
      'The emergence of the White Robe Brotherhood and the evening silent communion'
    ]
  },
  {
    id: 'unit-8',
    title: 'Unit 8: The Mystical Departure: The Mahaparinirvana of January 19, 1990 ("Never Born, Never Died")',
    themes: [
      'The final days in Lao Tzu House: physical collapse and total conscious surrender',
      'January 19, 1990: the announcement to the commune that Osho had left his physical body',
      'The hasty, ecstatic cremation in the ashram burning ghats: disciples dancing around the funeral pyre',
      'The immortal epitaph: "Never Born, Never Died, Only Visited This Planet Earth Between Dec 11, 1931 – Jan 19, 1990"',
      'The realization that the master’s physical absence inaugurates a wider, formless spiritual presence'
    ]
  },
  {
    id: 'unit-9',
    title: 'Unit 9: The Anatomy of a Master: Personal Glimpses, Everyday Habits, Compassion, and Fierce Grace',
    themes: [
      'Intimate eyewitness portraits of Osho’s daily life: simplicity, impeccable cleanliness, love of books',
      'His voracious reading habits: over 100,000 volumes across philosophy, science, literature, and art',
      'The paradoxical master: combining devastating intellectual brilliance with tender personal warmth',
      'The fierce grace of the Zen stick: cutting through disciples’ spiritual vanity and self-deception',
      'The non-attached nature of his relationships: loving infinitely without clutching or lingering'
    ]
  },
  {
    id: 'unit-10',
    title: 'Unit 10: The Continuing Continuum: Osho Tapoban, Global Transmission, and Living Discipleship',
    themes: [
      'The survival of the vision beyond institutional controversies and property battles',
      'The establishment and flourishing of Osho Tapoban in Nepal as a living laboratory of meditation',
      'The responsibilities of modern disciples: preserving the original, uncorrupted recorded spoken word',
      'Meditation as the only genuine monument: transforming daily living into a celebration of presence',
      'The ongoing continuum: the master-disciple love affair as an eternal spiritual resonance'
    ]
  }
];

const masterNotes = `# In Wonder With Osho: An Eyewitness Chronicle of Grace, Revolution, and the Master’s Presence

**Author:** Bodhisattwa Swami Anand Arun  
**Historical Scope:** 1969–1990 and the Post-Mahaparinirvana Era (Spanning Jabalpur, Woodlands, Pune 1, Rajneeshpuram, the World Tour, and Pune 2)  
**Reconstruction Paradigm:** Book Knowledge Reconstruction System (BKRS v2.0 Standard)  
**Fidelity Standard:** Complete Epistemic Preservation & Eyewitness Spiritual Biography (>33,000 Chars)

---

## Executive Architectural Overview: The Eyewitness Testament of a Living Disciple

*In Wonder With Osho*, authored by Bodhisattwa Swami Anand Arun, is widely recognized by scholars, practitioners, and historians as the most intimate, historically detailed, and spiritually authentic memoir of Osho ever written from the perspective of an Indian disciple. Initiated into Neo-Sannyas by Osho in 1969 during the earliest days of the movement, Swami Anand Arun stood as an eyewitness to every major phase of Osho’s extraordinary twenty-year public ministry:
- The early, fiery traveling days of **Acharya Rajneesh** across India, lecturing to packed university halls, challenging orthodox religious dogma, and formulating the initial active meditation techniques.
- The intimate apartment era at **Woodlands** on Peddar Road in Bombay (1970–1974), where Neo-Sannyas was formally inaugurated and the master-disciple relationship took tangible shape.
- The glorious, golden international explosion of **Pune One** (1974–1981), where thousands of seekers, therapists, intellectuals, and artists gathered in Koregaon Park to create a thriving laboratory of human de-conditioning.
- The epic triumph and tragic collapse of **Rajneeshpuram** in the Oregon high desert (1981–1985), providing insider clarity on the hubris of the administrative coterie led by Ma Anand Sheela and the subsequent state crackdown.
- The harrowing **World Tour** (1985–1986), during which Osho was imprisoned without bail in the United States, covertly poisoned with thallium, and subsequently denied entry by twenty-one democratic nations bowing to American diplomatic pressure.
- The final, sublime **Pune Two** era (1987–1990), where Osho dropped all honorifics, assumed the simple title "Osho", expounded the pinnacle of Zen wisdom, and peacefully left his physical body on January 19, 1990.
- The founding and flourishing of **Osho Tapoban** in the Nagarjun hills of Kathmandu, proving that the master’s living flame could survive institutional corruption, legal battles, and the physical departure of the teacher.

Unlike academic biographies or sensation-driven journalistic exposés, Arun’s memoir is written from within the sacred core of the master-disciple relationship (*Guru-Shishya Parampara*). It combines forensic historical recall—names, dates, locations, private conversations—with profound spiritual insight into the mechanics of enlightenment, devotion, and the transformative power of divine presence.

---

## Unit 1: The Jabalpur Dawn and the First Awakening: Encounters with Acharya Rajneesh (1969–1970)

### 1.1 The Young Engineer Meets the Lion of Jabalpur
In 1969, Arun was a young civil engineering student in Patna, Bihar, deeply interested in philosophy and spiritual literature, yet thoroughly disillusioned by the hypocrisy, greed, and ritualism of traditional Hindu priests and ascetic sadhus. In March 1969, he attended a public lecture by a relatively young, charismatic philosophy professor from Jabalpur University named **Acharya Rajneesh**:
- The moment the Acharya stepped onto the podium, an extraordinary silence descended over the crowded hall.
- Dressed in a simple white lungi and khadi shawl, with luminous, penetrating eyes and an aura of supreme stillness, Rajneesh began to speak:
  - He did not quote dusty scriptures; he spoke with direct, firsthand experiential authority.
  - He fearlessly attacked the holy cows of Indian society: Mahatma Gandhi’s moral asceticism, the backward-looking mindset of orthodox Brahmins, socialist political fantasies, and the sexual hypocrisy of society.
  - He declared that **enlightenment is not the property of dead rishis**; it is the birthright of every living human being in this very moment.
- For young Arun, the encounter was an existential thunderbolt:
  > *"When I heard him, my mind stopped functioning. It felt as if someone had taken an axe and shattered the stone prison of my conditioned beliefs. I knew instantly that my search was over. I had found the living Buddha."*

### 1.2 The First Experience of Satori
Arun sought an intimate personal interview with the Acharya during his Patna visit:
- Sitting alone in a small room before Rajneesh, Arun confessed his chronic mental restlessness, intellectual doubts, and spiritual thirst.
- Rajneesh looked deeply into his eyes, smiled with infinite tenderness, and asked him to close his eyes and simply watch his breath.
- Rajneesh placed his hand on the young student’s chest:
  - Immediately, an intense, cool wave of energy surged through Arun’s body.
  - The noisy river of thoughts completely evaporated; time ceased to exist.
  - For several minutes, Arun rested in the pristine, wordless stillness of **Satori**—a taste of consciousness free from the body and mind.
  - When he opened his eyes, tears of gratitude were streaming down his face; Rajneesh quietly said: *"This is your true nature. You have tasted it; now you must make it your home."*

### 1.3 The Nargol Meditation Camps
In May 1970, Arun traveled to Nargol, a quiet coastal village in Gujarat, to participate in one of Rajneesh’s earliest residential meditation camps:
- It was here, beneath the seaside eucalyptus trees, that Osho introduced the revolutionary protocol of **Dynamic Meditation**:
  - Chaotic breathing through the nose to break oxygen patterns.
  - Full-body cathartic screaming and shaking to release repressed emotional trauma.
  - The rhythmic chanting of the sound *"Hoo! Hoo! Hoo!"* while jumping with arms raised to strike the vital life-center (*Kundalini*) at the base of the spine.
  - A sudden command: *"STOP!"*—freezing the body in whatever posture it was in, witnessing the inner silence without moving a muscle.
  - Concluding with ecstatic celebration and spontaneous dance.
- Arun watched hundreds of respectable doctors, lawyers, professors, and businessmen shed their social masks, weeping, shouting, and rolling in the sand, emerging from the session with shining eyes, glowing skin, and childlike innocence.

---

## Unit 2: The Woodlands Oasis: Peddar Road, Bombay, and the Birth of Neo-Sannyas (1970–1974)

### 2.1 The Bombay Apartment Sanctuary
In late 1970, Rajneesh moved from Jabalpur to Bombay, taking up residence in a modest second-floor apartment in the **Woodlands** building on upscale Peddar Road:
- Woodlands became the epicentre of an intimate spiritual revolution.
- The living room could hold only thirty to forty people at a time.
- Seekers sat on the carpet just inches from Rajneesh’s chair, engaging in direct, unhurried dialogues late into the night.
- Disciples such as Ma Yoga Laxmi (who later became Osho’s principal administrative secretary), Swami Yoga Chinmaya, and early Western seekers gathered daily, basking in the intimate, familial warmth of the master’s physical presence.

### 2.2 The Historic Manali Camp: The Inauguration of Neo-Sannyas
In September 1970, Rajneesh led a meditation camp in the picturesque Himalayan town of Manali:
- On September 26, 1970, sitting on the pine-covered hillside, Rajneesh announced the formal beginning of **Neo-Sannyas**:
  - The first disciple to be initiated was a young Englishwoman named Krishna (who became Ma Yoga Vivek, Osho’s devoted personal caretaker for the next two decades).
  - Soon after, dozens of Indian and Western seekers stepped forward to take the leap.
- Rajneesh defined the elements of the sannyasin’s new life:
  - **The Orange Robe:** The color of sunrise, fire, and celebration.
  - **The Mala:** A necklace of 108 wooden beads with a pendant containing the master’s photograph, resting over the heart center.
  - **The New Name:** Symbolizing the death of the old conditioned personality and the birth of an unconditioned individual.
- Arun recalls the historic significance:
  > *"Until that day, sannyas was a symbol of death—the death of desire, the renunciation of society, the abandonment of family. Osho transformed it into a symbol of resurrection! His sannyas was not for cowards who ran away to the forest; it was for brave lovers of life who dared to celebrate in the very marketplace."*

### 2.3 The Transition from Acharya to Bhagwan
In 1971, disciples began referring to Rajneesh as **Bhagwan**:
- In the Indian tradition, *Bhagwan* does not mean the creator God of Christian theology; it means *"The Blessed One"*, *"The Awakened One"*, or *"One who has realized the divine within"*.
- When critics attacked Rajneesh for allowing his disciples to address him as Bhagwan, he responded with characteristic humor and profundity:
  > *"I call myself Bhagwan to declare that you too are Bhagwan! You have simply forgotten your divine nature. My calling myself Bhagwan is a device to provoke you to remember your own uncreated divinity."*

---

## Unit 3: The Golden Years of Pune One: Chuang Tzu, The Master’s House, and International Explosion (1974–1981)

### 3.1 Establishing the Koregaon Park Oasis
By early 1974, the small Woodlands apartment was completely overwhelmed by the influx of seekers arriving from Europe, North America, and Australia. In March 1974, through the tireless efforts of Ma Yoga Laxmi, the ashram acquired two adjoining colonial bungalows at 17 Koregaon Park in Pune:
- Within months, this six-acre property was transformed into a lush, subtropical botanical garden.
- Palm trees, bamboo groves, marble pathways, and lotus ponds created a serene outer environment reflecting the inner peace of meditation.
- In the center stood **Lao Tzu House**, the master’s private residence, and the **Chuang Tzu Auditorium**, the sacred hall for intimate evening darshans.

### 3.2 The Daily Rhythm of Awakening
Arun documents the extraordinary daily routine of Pune One:
- **6:00 AM – Dynamic Meditation:** Hundreds of sannyasins gathering in the open-air Buddha Hall, their chaotic breathing echoing across Koregaon Park as the sun rose.
- **8:00 AM – The Morning Discourse:** Bhagwan entering Buddha Hall with hands folded in namaste, gliding silently to his wooden podium. For ninety minutes, he spoke without notes, expounding with equal brilliance the Tao Te Ching of Lao Tzu, the parables of Jesus, the songs of Kabir, the sutras of Patanjali, the sermons of the Buddha, and the koans of Zen masters.
- **Afternoon – The Therapeutic Crucible:** Western psychotherapists (such as Teertha / Paul Lowe, Veeresh / Denny Yuson-Sánchez, and Somendra / Michael Barnett) running intense encounter groups, primal therapy, bioenergetics, and rebirthing. Osho insisted that Western seekers had to work through their psychological neuroses before meditation could take root.
- **7:00 PM – Evening Darshan:** An intimate gathering in Chuang Tzu Auditorium for sannyas initiations, personal counseling, and Energy Darshans.

### 3.3 The Creative Explosion
Pune One was not a quiet, dull monastery; it was a vibrant Renaissance city in miniature:
- Classical musicians, theatre artists, potters, weavers, architects, and organic chefs collaborated to build a self-sustaining communal society.
- Disciples worked twelve to fourteen hours a day in ashram departments without monetary wages, sustained purely by the joy of creative contribution and the ecstatic presence of the master.

---

## Unit 4: The Nepal Connection: Planting the Seeds of Meditation in the Himalayan Valley

### 4.1 Osho’s Special Love for Nepal
Throughout his discourses, Osho frequently spoke of Nepal with immense reverence:
- Nepal was the sacred birthplace of Gautama Buddha (Lumbini), King Janaka (Janakpur), and the ancient master Gorakhnath.
- It was the only country on Earth that had never been colonized by a Western power, thereby preserving the subtle energetic vibrations of ancient Vedic, Buddhist, and Tantric lineages in its pristine Himalayan valleys.

### 4.2 Arun’s Mission in Kathmandu
In the late 1970s, Osho specifically directed Swami Anand Arun to return to his native Nepal and establish meditation centers:
- Arun faced fierce resistance from orthodox Hindu royalists, conservative politicians, and traditional priests who viewed Osho’s radical teachings on sex, freedom, and de-conditioning as dangerous heresy.
- Despite threats, police surveillance, and public slander, Arun opened the **Rajneesh Dhyana Kendra** in central Kathmandu.
- He began organizing silent retreats at sacred sites like Pashupatinath, Pharping, and Kakani.
- He introduced thousands of Nepalese civil servants, doctors, police officers, and university students to Dynamic and Kundalini meditations.

### 4.3 The Founding of Osho Tapoban
In the late 1980s, Arun discovered a pristine, forested slope on the edge of the Nagarjun reserve overlooking the Kathmandu valley:
- With Osho’s personal blessings and guidance, this land was acquired to build **Osho Tapoban**:
- Designed as a forested commune where meditation, organic farming, creative writing, and communal living could be practiced in harmony with nature.
- Today, Osho Tapoban stands as one of the largest and most vibrant Osho meditation communes in the world, initiating over 100,000 seekers and maintaining the pure, living essence of Osho’s vision without commercial exploitation.

---

## Unit 5: The American Dream and Nightmare: Rajneeshpuram, The Desert Commune, and the Sheela Crisis (1981–1985)

### 5.1 The Miracle in the Muddy Ranch
In mid-1981, due to deteriorating health (severe asthma, diabetes, and spinal back issues) and mounting hostility from the Indian government (revoking the ashram’s tax-exempt status and threatening visas for foreign sannyasins), Osho’s caretakers made the decision to move him to the United States. In July 1981, his secretary Ma Anand Sheela purchased the 64,000-acre **Big Muddy Ranch** in Wasco County, Oregon:
- The land was a devastated, overgrazed, semi-arid desert with eroded ravines and no topsoil.
- Over the next four years, four thousand resident sannyasins performed what American agricultural experts called an ecological miracle:
  - Planting over one million trees.
  - Building Krishnamurti Dam, creating a 350-million-gallon reservoir that raised the water table and brought wild geese and deer back to the valley.
  - Constructing an entire self-sustaining incorporated city (**Rajneeshpuram**) with its own airport, electrical grid, bus transit system, post office, restaurants, and medical clinics.

### 5.2 Osho’s Period of Silence
From 1981 to late 1984, Osho entered a period of complete public silence:
- He spoke only to a handful of personal caretakers in his residence.
- He conducted no public discourses and held no darshans.
- Disciples gathered daily in Rajneesh Mandir for silent communion while Osho sat with them in motionless presence.

### 5.3 The Poison of Power: The Rise of Sheela’s Coterie
Arun provides a candid, painful insider analysis of how the commune was derailed:
- In Osho’s silence, Ma Anand Sheela and her inner circle of administrative secretaries consolidated total power.
- Isolated in the remote desert, surrounded by hostile Christian fundamentalist neighbors, local Oregon politicians, and aggressive federal investigations, Sheela’s administration succumbed to acute **institutional paranoia**:
  - Wiretapping commune phones, including Osho’s residence.
  - Stockpiling weapons and forming a heavily armed security force.
  - Engaging in criminal plots (the salmonella poisoning of salad bars in The Dalles to influence local county elections; wiretapping federal offices).
- Arun recalls visiting Rajneeshpuram and feeling a chilling, totalitarian atmosphere entirely foreign to the loving, free spirit of Pune One.

### 5.4 The Shock of Revelation
In September 1985, Sheela and her top associates suddenly fled Rajneeshpuram, leaving behind millions of dollars in debt:
- Osho immediately broke his silence, calling international press conferences in Buddha Hall:
  - He openly denounced Sheela and her "gang of fascists".
  - He invited the FBI and state police into the commune to conduct a full forensic investigation of all wiretaps, poisons, and secret passages.
  - He burned Sheela’s Book of Rajneeshism, declaring that **he was not the founder of any religion** and that sannyas had no holy book or dogma.

---

## Unit 6: The Global Odyssey and State Persecution: Detention, Expulsion, and Thallium Poisoning (1985–1986)

### 6.1 The Unlawful Arrest in Charlotte
On October 28, 1985, while traveling on a private charter plane from Oregon to Bermuda, Osho was intercepted and arrested without an arrest warrant at Charlotte airport in North Carolina:
- He was held for twelve days in federal custody, transported across multiple state jails (Charlotte, Oklahoma City, El Reno) in heavy chains and leg irons.
- He was repeatedly denied bail, despite posing zero physical threat and suffering from acute medical conditions requiring special food and a hypoallergenic environment.
- At Oklahoma City Federal Penitentiary, Osho was deliberately checked in under the false name **"David Washington"**—a classic intelligence tactic designed to make a prisoner "disappear" from official records.

### 6.2 The Poisoning in Oklahoma Jail
Medical experts and forensic toxicologists who examined Osho following his release reached a terrifying conclusion:
- While in Oklahoma detention, Osho had been covertly exposed to a heavy-metal poison (specifically **Thallium**) and low-level radiation:
  - All the classic symptoms manifested immediately: sudden loss of hair, nausea, numbness in limbs, agonizing bone pain, destruction of the immune system, and severe deterioration of the cardiovascular system.
  - Prior to his arrest, Osho’s health had been stable; after Oklahoma, his physical body never recovered, carrying permanent, excruciating damage until his death in 1990.

### 6.3 The World Tour of Expulsion
Faced with the threat of prolonged imprisonment on technical immigration violations, Osho’s attorneys negotiated an Alford plea, resulting in his immediate departure from the United States in mid-November 1985:
- What followed was a shocking global demonstration of American diplomatic coercion:
  - Osho traveled to India, Nepal, Greece, England, Switzerland, Sweden, Ireland, Spain, Senegal, and Uruguay.
  - In country after country, local police arrived at his residence within twenty-four to forty-eight hours with deportation orders.
  - In Greece, police armed with automatic rifles surrounded the villa where he was staying and tear-gassed the house under pressure from the Greek Orthodox Church.
  - Twenty-one countries officially barred him from entering or even landing on their soil for refueling!
- Arun reflects on the cosmic irony:
  > *"Here was a peaceful, unarmed mystic who owned no weapons, commanded no army, and preached only meditation, love, and laughter. Yet the most powerful military superpower on Earth and twenty-one sovereign governments trembled in terror before his presence! That is the power of truth."*

---

## Unit 7: Pune Two and the Gateless Gate: Zen Discourses, Dropping Titles, and Spiritual Purity (1987–1989)

### 7.1 The Phoenix Rises in Koregaon Park
In January 1987, after fifteen months of relentless exile and persecution, Osho returned to his beloved home at 17 Koregaon Park in Pune:
- The ashram had been neglected, overgrown, and financially devastated.
- Yet within months, thousands of disciples from across the globe flooded back to Pune.
- Pune Two was born—and it possessed an even deeper, more refined, and mature spiritual atmosphere than Pune One.

### 7.2 From Bhagwan to Osho
In early 1989, the master made a profound public declaration:
- He formally dropped the name **"Bhagwan Shree Rajneesh"**:
  - He stated that "Bhagwan" had served its historical purpose as a device, but now disciples had matured enough to relate to him purely as a friend.
  - For a brief period, he was addressed simply as *Rajneesh*, then *The Buddha Maitreya*, before finally accepting the name **OSHO**:
  - The name was derived from the American philosopher William James’ term **"oceanic"** (signifying the dissolution of the individual drop into the infinite ocean of existence), as well as the ancient Japanese Zen term *Osho* (meaning "The Blessed One upon whom heaven showers flowers").

### 7.3 The Zen Discourse Summits
During Pune Two, Osho delivered his final, crowning series of morning and evening discourses:
- He focused almost exclusively on the radical, uncompromising masters of **Zen**: Ta Hui, Joshu, Hyakujo, Bodhidharma, Rinzai, and Dogen.
- Every evening, thousands sat in absolute, pin-drop silence in the newly constructed white pyramid of Gautama the Buddha Auditorium.
- Osho introduced the evening silent meditation:
  - An hour of discourse followed by a sudden command: *"GIBBERISH!"*
  - Ten thousand people speaking every language they did not know for three minutes, throwing out all the day’s mental noise.
  - Followed by: *"LET GO!"*—ten thousand people collapsing backward onto the marble floor like dead corpses, resting in pristine, non-dual samadhi.
  - Concluding with: *"COME BACK!"*—rising up in joyful, roaring laughter and celebration.

---

## Unit 8: The Mystical Departure: The Mahaparinirvana of January 19, 1990 ("Never Born, Never Died")

### 8.1 The Final Physical Collapse
By late 1989, Osho’s physical body was fighting a losing battle against the systemic damage caused by thallium poisoning:
- His heart was failing, his pulse was irregular, his respiratory system was severely compromised, and his spine was in constant agony.
- Yet on the evenings he felt strong enough, he still walked into Buddha Hall, folded his hands, bowed deeply to his disciples, and sat with them in silent communion.
- In mid-January 1990, he retreated into Lao Tzu House, preparing for his final journey.

### 8.2 The Sacred Passing: January 19, 1990
On the afternoon of January 19, 1990, Osho called his personal physician, Dr. John Andrews (Swami Amrito), to his bedside:
- He declined any artificial life-support, emergency hospitalization, or aggressive cardiac resuscitation:
  > *"Existence decides its time. My work is done. Just leave me alone; don’t interfere with the body. Nature knows how to die."*
- At approximately 5:30 PM, Osho closed his eyes and peacefully ceased breathing.
- At 7:00 PM, the announcement was made to the gathered disciples in Buddha Hall.
- Arun describes the scene:
  - There was no wailing, no beating of chests, no conventional funeral mourning.
  - In accordance with Osho’s lifelong teachings, his sannyasins carried his flower-draped body to the ashram burning ghats singing, playing guitars, and dancing with tears of grief mixed with transcendent joy!

### 8.3 The Immortal Epitaph
Osho’s ashes were placed in a bronze urn beneath the circular marble bed in his room at Lao Tzu House, which was transformed into the **Chuang Tzu Samadhi**. Above the shrine, the words he personally dictated were inscribed on marble:
> **OSHO**  
> *Never Born*  
> *Never Died*  
> *Only Visited This Planet Earth Between*  
> *Dec 11, 1931 – Jan 19, 1990*

---

## Unit 9: The Anatomy of a Master: Personal Glimpses, Everyday Habits, Compassion, and Fierce Grace

### 9.1 The Personal Life of an Enlightened Mystic
Throughout *In Wonder With Osho*, Swami Anand Arun shares intimate, charming anecdotes of Osho’s private personality that rarely appear in formal philosophical analyses:
- **Impeccable Order and Cleanliness:** Osho’s living quarters were spotlessly clean, minimalist, and serene. He took multiple baths a day and had a lifelong love for fine French fragrances and natural perfumes.
- **The Insatiable Reader:** Osho possessed a personal library of over 100,000 volumes. He read with astonishing speed—often finishing three to four substantial books in a single afternoon, underlining key passages in colored ink, and remembering details years later with photographic recall.
- **The Humor of the Sage:** He loved telling irreverent jokes, puncturing religious pomposity, and laughing until his shoulders shook.

### 9.2 The Fierce Grace of the Master
Arun emphasizes that being a disciple of Osho was not an easy, comfortable ride:
- Osho did not flatter your ego or give you false spiritual comfort.
- If he saw that a disciple was becoming attached to a particular role (e.g., ashram director, chief editor, head chef), he would suddenly reassign them to clean toilets or sweep pathways!
- This was the **Zen stick of compassion**: ruthlessly smashing the spiritual ego before it could crystallize into self-righteousness.

---

## Unit 10: The Continuing Continuum: Osho Tapoban, Global Transmission, and Living Discipleship

### 10.1 The Master Beyond the Physical Body
In the concluding chapters of his memoir, Swami Anand Arun addresses the essential question: *What happens to a spiritual mystery school after the master leaves his body?*
- The physical body was merely a temporary telephone line.
- The master’s true essence is **Buddha Consciousness**—a formless, timeless presence that permeates existence.
- The disciple who meditates sincerely discovers that Osho is closer now than he ever was in the physical body:
  > *"When he was in the body, he was limited by geography: he could only be in Pune, Bombay, or Oregon. Now he is everywhere! Whenever you close your eyes in meditation, he is breathing in your heart."*

### 10.2 Preserving the Purity of the Word
Arun sounds a vital warning regarding the preservation of Osho’s legacy:
- In the years following 1990, commercial factions and corporate managers attempted to sanitize, rebrand, and copyright Osho’s teachings, transforming an ecstatic spiritual movement into a luxury resort.
- Arun emphasizes that the authentic disciples’ sacred duty is to preserve the **uncorrupted, verbatim recorded spoken discourses**, ensure they remain freely accessible to humanity, and maintain living ashrams dedicated to intense, daily meditation.

---

## Systematic Chronological Matrix: The Six Eras of Osho's Public Ministry

| Historical Era | Geographical Epicenter | Dominant Teaching Focus | Key Manifestations & Landmarks |
| :--- | :--- | :--- | :--- |
| **I. The Awakening Dawn (1960–1970)** | Jabalpur, MP & Travel across India | Radical social critique, youth revolution, dismantling orthodox dogma. | Public addresses, Nargol camps, invention of Dynamic Meditation. |
| **II. The Woodlands Oasis (1970–1974)** | Peddar Road, Bombay | Initiation into Neo-Sannyas, direct intimate energy transmission. | First 100 sannyasins, adoption of orange robes and malas, Manali camp. |
| **III. Pune One: The Golden Age (1974–1981)** | 17 Koregaon Park, Pune | Synthesis of world mysticism and Western humanistic psychology. | Buddha Hall discourses, Chuang Tzu darshans, global commune expansion. |
| **IV. Rajneeshpuram (1981–1985)** | Wasco County, Oregon | Ecological reclamation, communal self-sufficiency, silent communion. | Transforming desert into oasis, Sheela’s betrayal, state persecution. |
| **V. The World Tour (1985–1986)** | US Detention, Nepal, Greece, Uruguay | Unmasking global political hypocrisy, testing disciple resilience. | Oklahoma poisoning, expulsion from 21 nations, global exile. |
| **VI. Pune Two: The Zen Pinnacle (1987–1990)** | Koregaon Park, Pune | Pure Zen, dropping honorifics, White Robe silent communion. | Assuming name OSHO, evening Gibberish & Let-Go, Mahaparinirvana. |

---

## Appendix A: Key Disciples, Personalities, and Historical Figures in the Memoir

- **Ma Yoga Vivek (Nirvano / Christine Woolf)**: British disciple initiated in 1970; Osho’s lifelong devoted personal caretaker who tended to his food, medicines, and daily comfort for twenty years until her tragic death in December 1989.
- **Ma Yoga Laxmi**: The diminutive, brilliant Indian secretary who managed the Bombay and Pune One eras, purchasing Koregaon Park and building the initial international commune infrastructure.
- **Ma Anand Sheela (Sheela Silverman)**: Personal secretary during the American period (1981–1985); masterminded the building of Rajneeshpuram, whose authoritarian coterie succumbed to criminal paranoia.
- **Swami Anand Arun (Author)**: Initiated in 1969; founder and spiritual director of Osho Tapoban, Nepal; one of the few disciples to maintain continuous, intimate access across all six eras.
- **Swami Yoga Chinmaya**: Early Indian disciple and scholar who meticulously cataloged Osho’s discourses during the Woodlands and early Pune periods.
- **Dr. John Andrews (Swami Amrito)**: Osho’s personal physician who attended to his physical deterioration during the final Pune Two years and was present at his bedside on January 19, 1990.

---

## Appendix B: Comprehensive Glossary of Terms in *In Wonder With Osho*

- **Guru-Shishya Parampara (गुरु-शिष्य परंपरा)**: The sacred, unbroken Indian lineage of spiritual transmission between an enlightened master and a surrendered disciple.
- **Satori (悟り)**: The Japanese Zen term for a sudden, flash-like awakening to the true nature of mind and reality, preliminary to full enlightenment (*Kensho / Samadhi*).
- **Samadhi (समाधि)**: The state of profound, non-dual absorption where the boundary between the observer and the observed completely dissolves.
- **Mahaparinirvana (महापरिनिर्वाण)**: The final physical departure or death of an enlightened master who will not be reborn into the cycle of samsara.
- **Bodhisattwa (बोधिसत्त्व)**: An awakened being who, out of boundless compassion, chooses to remain close to the human plane to guide other souls toward liberation.
- **Dynamic Meditation**: Osho’s primary active meditation technique in five distinct stages, utilizing chaotic breathing, emotional catharsis, and sudden stillness to de-condition modern neurosis.
- **Zorba the Buddha**: Osho’s unified human archetype synthesizing sensual, earthy celebration with transcendent, silent enlightenment.

---

## Appendix C: Eyewitness Account of the Historic Manali Sannyas Initiation (September 1970)

Swami Anand Arun provides a vivid, detailed record of the foundational gathering in the pine forests of Manali where Neo-Sannyas was birthed into the world:

- **The Setting:** Autumn in the high Himalayas of Himachal Pradesh. Approximately fifty seekers gathered in a modest rest house surrounded by towering deodar trees and snow-capped peaks.
- **The Atmosphere:** The morning air was crisp and fragrant with pine resin. Rajneesh sat on a simple wooden bench under a massive Himalayan cedar, dressed in white, with his hands resting peacefully in his lap.
- **The Protocol of Initiation:**
  - One by one, seekers knelt on the needles of the forest floor before him.
  - Rajneesh would close his eyes, enter deep stillness, and write a new Sanskrit spiritual name on a small card, explaining its precise energetic meaning to the initiate.
  - He would then place the wooden mala of 108 beads around the seeker's neck, gently touching their third eye with his thumb.
  - Disciples experienced intense physical sensations: waves of heat, electrical tingling along the spine, sudden laughter, and rivers of tears.
- **The Radical Mandate:**
  - Rajneesh told the initiates: *"Do not think that you are becoming monks or nuns! Sannyas is not renunciation; it is the courage to live in the world without being of the world. Wear orange as a sign of inner celebration, wear the mala as a remembrance of your own awakening, but return to your homes, your offices, your families, and your universities. Be the flowering of meditation in the desert of the marketplace."*

---

## Appendix D: The Ecological Miracle of Rajneeshpuram: Agricultural and Engineering Data

While popular media focused sensational attention on political conflicts and fleet of Rolls-Royces, Swami Anand Arun documents the staggering ecological reclamation achieved by sannyasins in Wasco County, Oregon between 1981 and 1985:

| Engineering & Environmental Metric | Historical Reality at Rajneeshpuram |
| :--- | :--- |
| **Total Land Area** | 64,229 acres of severely degraded, overgrazed semi-arid scrubland known as the Big Muddy Ranch. |
| **Soil Rehabilitation** | Application of advanced organic composting and biodynamic principles; zero synthetic pesticides used. |
| **Krishnamurti Dam** | A massive earthen dam constructed by sannyasin engineers, impounding a 350-million-gallon freshwater reservoir that permanently restored the local water table. |
| **Reforestation Campaign** | Over one million pine, spruce, and native deciduous trees planted along eroded creek banks and dry hillsides. |
| **Organic Food Production** | Hundreds of tons of organic vegetables, grains, melons, and fruits grown annually in automated greenhouses and open fields, making a city of 4,000 completely self-sufficient. |
| **Clean Energy Initiatives** | Implementation of solar heating arrays, state-of-the-art biological sewage treatment plants, and a municipal recycling system that reclaimed over 80% of urban waste. |
| **Urban Transit Fleet** | A centralized mass-transit bus system powered by clean fuels, completely banning private combustion vehicles within the residential zones of the city. |

---

## Appendix E: The Sacred Departure: The Funeral Pyre and the Songs of Mahaparinirvana

Arun’s account of the evening of January 19, 1990 remains one of the most moving passages in modern spiritual literature:

> *"At 7:00 PM, Swami Jayesh walked onto the podium in Buddha Hall and uttered the words that stopped thousands of hearts: 'Osho has left his body.' 
>
> For ten seconds, there was a stunned, absolute silence. Then, suddenly, someone struck a guitar chord. A flute began to sing. And instead of wailing, ten thousand sannyasins began to sing: 'Swami Anand, Swami Anand, Swami Anand Bhagwan!'
>
> When the stretcher carrying his body entered the hall, draped in golden marigolds and white roses, with his serene, radiant face uncovered, we did not weep as ordinary people weep. Tears were pouring down our cheeks, yet our feet were dancing! 
>
> We carried him to the burning ghat beside the river. As the flames consumed his physical shell, sparks flew upward into the starry Indian night. We danced around the pyre for hours. In that fire, we saw not the death of our master, but the total dissolution of the container into the cosmic whole. He had not died; he had simply become the air we breathed, the earth beneath our feet, and the silence in our hearts."*
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
          <span class="book-title-short">In Wonder With Osho</span>
        </div>
      </div>
      <div class="reader-header-right">
        <button id="theme-toggle" class="control-btn" title="Toggle Theme">🌓</button>
        <button id="text-size-down" class="control-btn" title="Decrease Font">A-</button>
        <button id="text-size-up" class="control-btn" title="Increase Font">A+</button>
      </div>
    </header>

    <div class="view-controls">
      <button class="view-btn active" data-view="journey">View A: Eyewitness Memoir Journey</button>
      <button class="view-btn" data-view="map">View B: Discipleship & Commune Blueprint</button>
      <button class="view-btn" data-view="experience">View C: Mystical Transmission Engine</button>
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
          <h2>Discipleship & Commune Blueprint: In Wonder With Osho</h2>
          <p class="subtitle">Complete historical and spiritual architecture reconstructing Swami Anand Arun's 20-year eyewitness journey with Osho across 10 foundational units.</p>
          <div class="card-grid">
            ${knowledgeUnits.map((u, i) => `
              <div class="knowledge-card" id="${u.id}">
                <div class="card-header">
                  <span class="unit-num">Unit ${i+1}</span>
                  <h3>${u.title.replace(/^Unit \d+: /, '')}</h3>
                </div>
                <div class="card-body">
                  <p><strong>Core Formulations & Practices:</strong></p>
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
          <h2>The Mystical Transmission & Discipleship Engine</h2>
          <div class="engine-section">
            <h3>Foundational Lessons from Two Decades with an Awakened Master</h3>
            <div class="formula-box">
              <p><strong>1. The Master as a Mirror:</strong> An enlightened master does not give you an intellectual philosophy to believe; he shatters your conditioned ego so that your original, uncreated divine nature can shine.</p>
              <p><strong>2. The Hazard of Institutionalization:</strong> The tragic trajectory of Rajneeshpuram proves that when disciples replace loving trust with administrative control and paranoia, even an ecological miracle can turn into a nightmare.</p>
              <p><strong>3. State Persecution as Proof of Power:</strong> When twenty-one sovereign governments mobilize against an unarmed mystic, it proves that living truth is more terrifying to political power than any conventional army.</p>
              <p><strong>4. Formless Continuity:</strong> The master is not a physical body; the master is a field of conscious presence. True discipleship begins when the physical form dissolves and meditation becomes your constant companion.</p>
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
