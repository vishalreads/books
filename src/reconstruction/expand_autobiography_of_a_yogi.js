const fs = require('fs');
const path = require('path');

const part1 = require('./yogi_data_part1');
const part2 = require('./yogi_data_part2');
const part3 = require('./yogi_data_part3');
const part4 = require('./yogi_data_part4');

const allChapters = [...part1, ...part2, ...part3, ...part4];
console.log(`Total chapters loaded: ${allChapters.length}`);

let md = `# Master Codex: *Autobiography of a Yogi* by Paramahansa Yogananda
**Canonical Reference:** \`[REF-YOG-1946]\`  
**Epistemic Classification:** Tier 1: Classical Mystical Philosophy, Yogic Science & Metaphysics  
**Original Volume:** ~500 Pages, 49 Chapters (Canonical 1946/1951 Philosophical Library Editions)  
**Reading Time Saved:** ~16.0 Hours  

---

> ### The Golden Test of Total Replacement
> *"If the reader never opens the 500-page original source text, they will not miss a single metaphysical model, physiological mechanism of Kriya Yoga, cosmological framework, historical encounter, named empirical experiment, verbatim dialogue, or practical meditative discipline."*

---

## LAYER 1: Master Theoretical Architecture & Epistemic Demarcation

### 1.1 Epistemic Classification & Lineage
*Autobiography of a Yogi* (first published in New York in 1946 by The Philosophical Library) is the foundational text that introduced the ancient science of Raja Yoga and Kriya Yoga to the Western world. Rather than presenting Eastern spirituality as sectarian dogma or emotional devotionalism, Yogananda frames it as an **exact, psycho-physiological science** whose hypotheses can be tested and verified in the laboratory of human consciousness.

The structural lineage rests upon four primary pillars:
1. **Patanjali's *Yoga Sutras* (circa 400 BCE):** The classical eightfold path (*Ashtanga Yoga*), specifically the transition from breath control (*Pranayama*) to sensory withdrawal (*Pratyahara*), concentration (*Dharana*), meditation (*Dhyana*), and cosmic absorption (*Samadhi*).
2. **Advaita Vedanta (Non-Dualism):** The philosophy of Adi Shankara, asserting that Brahman (Pure Infinite Consciousness) is the sole reality, and the empirical universe is a cosmic projection (*Maya*). Yogananda was formally initiated into the Giri branch of Shankara's ancient Swami Order.
3. **The Modern Kriya Lineage:**
   - **Mahavatar Babaji:** The deathless Himalayan master who resurrected Kriya Yoga for the modern era.
   - **Lahiri Mahasaya (Shyama Charan Lahiri, 1828–1895):** The householder accountant who democratized Kriya for working people with families, proving monasticism is unnecessary for liberation.
   - **Swami Sri Yukteswar Giri (Priya Nath Karar, 1855–1936):** The astronomer, scriptural scholar, and Yogananda's guru who systematized the teaching in *The Holy Science* (1894).
   - **Paramahansa Yogananda (Mukunda Lal Ghosh, 1893–1952):** The designated emissary to the West.
4. **20th-Century Physics & Electro-Physiology:** Synthesizing ancient Vedic intuition with Einsteinian mass-energy equivalence ($E = mc^2$), Sir Jagadish Chandra Bose's plant biophysics, and Western technology.

\`\`\`
                  THE KRIYA YOGA TRANSMISSION PYRAMID
                                    /\\
                                   /  \\
                                  /    \\
                         [MAHAVATAR BABAJI]
                      (Timeless Himalayan Avatar)
                                  |
                                  v
                        [LAHIRI MAHASAYA]
                    (1828-1895: The Householder Yogi)
                                  |
                                  v
                     [SWAMI SRI YUKTESWAR GIRI]
                     (1855-1936: The Jnana Guru)
                                  |
                                  v
                     [PARAMAHANSA YOGANANDA]
                   (1893-1952: The Global Emissary)
                                  |
          +-----------------------+-----------------------+
          v                                               v
[SELF-REALIZATION FELLOWSHIP]                  [YOGODA SATSANGA SOCIETY]
    (Western Dissemination)                       (Indian Centers)
\`\`\`

---

### 1.2 The Grand Unified Models of Yogic Metaphysics

#### Model 1: The Neuro-Physiological Science of Kriya Yoga
Kriya Yoga is a psycho-physiological technique whereby human blood is decarbonized and recharged with fresh oxygen. The extra atoms of oxygen are transmuted into life current (*prana*) to rejuvenate the brain and spinal centers.
- **The Decarbonization Cycle:** Normal breathing is required to eliminate venous impurities through the lungs. By circulating the life energy up and down the six spinal centers (medullary, cervical, dorsal, lumbar, sacral, and coccygeal plexuses), the yogi neutralizes the need for cellular breath.
- **The Mathematical Acceleration:** 
  $$\\text{Evolutionary Progress} = \\text{Kriya Cycles} \\times 30\\text{ seconds}$$
  One half-minute of Kriya Pranayama equals **one year** of natural, unassisted spiritual and physical evolution. A yogi performing 1,000 Kriyas in 8.5 hours achieves the equivalent of 1,000 years of natural evolution in a single day.
- **Decoupling Breath and Mind:** Breath and mental agitation are reciprocally linked. Still the breath completely (*Kevala Kumbhaka*), and the restless monkey-mind automatically dissolves into cosmic awareness.

#### Model 2: The Cosmic Law of Miracles & Maya ($E = mc^2$)
Yogananda deconstructs miracles not as violations of nature, but as operations under higher dimensional laws:
- **Matter is Condensed Light:** Every physical atom is composed of vibrating energy packets (*lifetrons* or *pranatomic* units).
- **The Einsteinian Parallel:** Just as modern physics proved that solid matter is convertible into energy ($E = mc^2$), a yogi who achieves conscious oneness with the Creator can command the structural frequency of atoms, enabling materialization, dematerialization, levitation, and bilocation.
- **Maya (The Cosmic Motion Picture):** The universe is a dualistic light show projected upon the screen of human consciousness. Pain, disease, and death are sensory misidentifications with the projected film instead of the eternal Beam of Light.

#### Model 3: The Threefold Nature of Reality & Man
Human existence consists of three concentric, interpenetrating vehicles:
1. **The Physical Body:** Gross matter composed of 16 chemical elements. Bound by physical hunger, disease, and gravity.
2. **The Astral Body (*Linga Sharira*):** Subtle vehicle composed of 19 elements: 5 organs of action, 5 sensory organs, 5 pranas, mind (*manas*), intellect (*buddhi*), ego (*ahamkara*), and feeling (*chitta*). The realm of light and sound.
3. **The Causal Body (*Karana Sharira*):** Ideational vehicle composed of 35 thought-elements. The subtle seed of individual karma and desire.

#### Model 4: Sri Yukteswar's Yuga Cycle (Cosmological Precession)
In *The Holy Science*, Sri Yukteswar corrected the medieval error of the 432,000-year Kali Yuga, proving that the earth moves through an equinoctial precession cycle of **24,000 years** around the grand center (*Vishnunabhi*):
- **Ascending Arc (12,000 years):** Kali (1,200 yrs) -> Dvapara (2,400 yrs) -> Treta (3,600 yrs) -> Satya (4,800 yrs).
- **Descending Arc (12,000 years):** Satya (4,800 yrs) -> Treta (3,600 yrs) -> Dvapara (2,400 yrs) -> Kali (1,200 yrs).
- **Current Position:** The world entered Ascending Dvapara Yuga (the Atomic/Electric Age) around 1900 CE, which explains the sudden explosion of electrical, atomic, and quantum technologies.

---

## LAYER 2: Forensic Chapter-by-Chapter Master Notes (Complete 49 Chapters)
`;

function formatChapter(c) {
  return `
### Chapter ${c.num}: ${c.title}
- **Scope & Setting:** ${c.setting}
- **Dramatis Personae & Figures:** ${c.figures}
- **Epistemic Classification:** \`SOURCE_FACT / SPIRITUAL_NARRATIVE\`
- **Irreducible Axiom:** *${c.axiom}*

#### 1. Context & Inciting Dilemma
${c.context}

#### 2. Forensic Narrative & Phenomenological Progression
${c.forensic}

#### 3. Key Dialogue & Philosophical Weight
> ${c.dialogue}

#### 4. Verbatim Canonical Excerpt
> ${c.quote}

#### 5. Operational Heuristic & Real-World Application
**Operational Heuristic:** *${c.heuristic}*

---
`;
}

md += `\n### PART I: FORMATIVE YEARS & THE SEARCH FOR MASTERS (Chapters 1–11)\n`;
part1.forEach(c => md += formatChapter(c));

md += `\n### PART II: THE HERMITAGE OF DISCIPLINE (Chapters 12–25)\n`;
part2.forEach(c => md += formatChapter(c));

md += `\n### PART III: FOUNDATIONS OF KRIYA & THE HISTORICAL LINEAGE (Chapters 26–36)\n`;
part3.forEach(c => md += formatChapter(c));

md += `\n### PART IV: THE WESTERN DISPENSATION & GLOBAL SYNTHESIS (Chapters 37–49)\n`;
part4.forEach(c => md += formatChapter(c));

md += `
## LAYER 3: The Empirical Corpus & Landmark Metaphysical Vault

### 3.1 The Scientific Demonstration of Plant & Mineral Consciousness (Dr. J.C. Bose, 1917)
- **Apparatus:** The Crescograph (optical magnification $> 10,000,000\\times$).
- **Sample:** *Mimosa pudica* and common tin plate.
- **Findings:** Demonstrated that plants possess a nervous system with distinct fatigue patterns, react to poisons (chloroform, potassium cyanide) identically to mammals, and exhibit electrical spasm at the moment of death. Metals exhibited fatigue curves that recovered after rest.
- **Epistemic Sign:** Direct empirical bridge proving that consciousness is not unique to human brains, but inherent in all vibrating atomic structures.

### 3.2 The Prolonged Inedia Case Studies (Therese Neumann & Giri Bala)
- **Therese Neumann (Konnersreuth, Bavaria):** Monitored by a commission of four physicians under diocesan authority from July 13 to July 28, 1927. Certified: consumed zero calories and zero water; body weight remained identical; blood and urine analyses demonstrated normal vital equilibrium.
- **Giri Bala (Bankura, Bengal):** Monitored by the Maharaja of Burdwan and local magistrates. Fifty-six continuous years without food or water intake via the Maghi Pranayama solar technique.
- **Metaphysical Significance:** Direct biological proof of Christ's dictum: *"Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."*

### 3.3 The Medical Incorruptibility of Yogananda's Body (Los Angeles, 1952)
- **Location:** Forest Lawn Memorial-Park, Glendale, California.
- **Mortuary Officer:** Harry T. Rowe, Mortuary Director (Notarized statement dated March 11, 1952).
- **Observations:** No physical disintegration or chemical odor was visible 20 days after death. The skin retained its natural color, and the body remained completely fresh and sweet-smelling without artificial chemical preservation.

---

## LAYER 4: The Operational Field Manual & Sadhana Engineering

### 4.1 The 4-Stage Architecture of Kriya Yoga Practice

\`\`\`
[STAGE 1: ENERGIZATION] ──> [STAGE 2: HONG-SAU] ──> [STAGE 3: AUM TECHNIQUE] ──> [STAGE 4: KRIYA PRANAYAMA]
Draws cosmic prana into     Stills the breath &      Listens to cosmic sound      Circulates current through
cells via Medulla Oblongata mental restlessness      vibration in right ear       6 spinal plexuses
\`\`\`

1. **Stage 1: The Yogoda Energization Exercises:**
   - Stand erect. Tense the whole body with willpower until it vibrates; relax slowly.
   - Direct life current through the medulla oblongata to individual muscle groups (20 body parts).
   - Principle: *"The greater the will, the greater the flow of energy."*
2. **Stage 2: The Hong-Sau Concentration Technique:**
   - Watch the natural breath at the point between the eyebrows without forcing or regulating.
   - Mentally chant *Hong* on inhalation and *Sau* on exhalation.
   - Principle: Decouples the restless ego from the physiological breath reflex.
3. **Stage 3: The Aum Technique of Meditation:**
   - Close the ears with the thumbs, resting fingers over the eyes and face (Yoni Mudra).
   - Listen intently to the internal cosmic sounds vibrating through the right ear: bumblebee, flute, harp, ocean roar (*Aum*).
   - Principle: Merges individual mental frequency with the universal cosmic vibratory vibration.
4. **Stage 4: The Kriya Pranayama:**
   - Mentally circulate the prana up the spine from the coccyx to the medulla/spiritual eye, and down from the brain to the coccyx.
   - Feel the cool current ascending inside the subtle spine (*Sushumna*) and the warm current descending.
   - Principle: Decarbonizes the venous blood, stills heart and lungs, and awakens the dormant Kundalini energy.

---

## LAYER 5: Skeptical Auditor's Demarcation & Boundary Conditions

### 5.1 Critique 1: The Verification Problem of Supernormal Feats (*Siddhis*)
- **Auditor Challenge:** Accounts of levitation (Bhaduri Mahasaya), bilocation (Pranabananda), and perfume materialization (Gandha Baba) rely on personal testimony and historical memory rather than double-blind, instrumented laboratory protocols.
- **Yogananda's Demarcation:** Yogananda explicitly distinguishes between sensationalist street magicians (e.g., Afzal Khan's spirit-slavery) and genuine spiritual masters. He repeatedly warns that *siddhis* are dangerous spiritual traps that do not equal Self-realization, and insists that the primary proof of Kriya is internal, reproducible psychological transformation.

### 5.2 Critique 2: The Fallacy of Passive Guru-Reliance
- **Auditor Challenge:** Readers may misinterpret the guru-disciple relationship as an excuse for mental passivity, believing a master will magically absorb all their sins and debts without individual discipline.
- **Correction:** Sri Yukteswar explicitly rejected this: *"A guru can point the path and assist with grace, but the disciple must walk every step himself through daily meditation."* Salvation is not vicarious; it is self-emancipation through scientific spiritual effort.

---

## LAYER 6: Interactive Active Recall & Retention Suite

### Flashcard 1
- **Question:** What is the exact mathematical evolutionary formula of Kriya Yoga?
- **Answer:** One half-minute of Kriya Pranayama (circulating prana through the six spinal centers) equals one full year of natural, unassisted human evolution. Performing 1,000 Kriyas daily yields 1,000 evolutionary years of progress in 24 hours.

### Flashcard 2
- **Question:** How does Yogananda explain physical miracles using Einsteinian physics ($E = mc^2$)?
- **Answer:** Solid matter is an optical illusion composed of vibrating energy packets (*lifetrons*). Just as nuclear physics converts mass into energy ($E=mc^2$), an enlightened master synchronized with cosmic consciousness can reverse the equation, commanding atomic vibrations to materialize, dematerialize, or bilocate physical form.

### Flashcard 3
- **Question:** What did Sir J.C. Bose's Crescograph empirically prove to young Mukunda?
- **Answer:** It proved that plants and metals possess nervous sensitivity, circulatory pulses, fatigue curves, and experience agony and death when exposed to poison (chloroform, potassium cyanide), proving that a single continuous conscious life animates all creation.

### Flashcard 4
- **Question:** What was Sri Yukteswar's lesson to Mukunda immediately following his experience of Cosmic Consciousness?
- **Answer:** Sri Yukteswar handed Mukunda a broom and ordered him to sweep the balcony, teaching that supreme realization is not otherworldly trance escapism, but maintaining eternal inner stillness while impeccably fulfilling ordinary worldly duties.

### Flashcard 5
- **Question:** What did Luther Burbank discover during his breeding of the Spineless Cactus?
- **Answer:** Burbank proved that loving communion can alter plant genetics: by repeatedly speaking to the cacti and assuring them they were safe, the plants relaxed their evolutionary defense mechanisms and permanently dropped their protective thorns across successive generations.

### Flashcard 6
- **Question:** What are the three concentric bodies of human existence revealed by Sri Yukteswar?
- **Answer:** 1) The Physical Body (16 chemical elements); 2) The Astral Body (19 subtle elements of prana, mind, intellect, and senses); 3) The Causal Body (35 thought-ideas constituting individual karma).
`;

const outputPath = path.join('docs', 'distillations', 'autobiography-of-a-yogi', 'master-notes.md');
fs.writeFileSync(outputPath, md, 'utf8');

console.log(`Successfully written expanded master-notes.md to ${outputPath}`);
console.log(`New Character Count: ${md.length}`);
console.log(`New Word Count: ${md.trim().split(/\s+/).length}`);
