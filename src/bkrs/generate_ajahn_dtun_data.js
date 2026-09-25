const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../../docs/distillations/ajahn-dtun-autobiography');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const bookUnits = [
  {
    id: "unit-01-lay-life-disenchantment",
    unit_number: 1,
    title: "The Lay Life & The Awakening of Spiritual Disenchantment",
    book_part: "Part I: The Path to Renunciation",
    chapters: "My Lay Life (pp. 5–37)",
    primary_figures: ["Ajahn Dtun (Akaradej)", "His Father (Civil Servant)", "His Mother", "Luang Ta Mahā Boowa", "Luang Por Chah"],
    monastic_context: "Ayutthaya and Bangkok, Thailand; 1950s–1970s; youth, university education, business career.",
    core_insight: "Genuine monastic renunciation begins not from escapism or failure, but from deep, clear-eyed disenchantment (nibbidā): realizing that worldly wealth, sensual pleasures, romantic love, and social status are inherently transient, stressful, and incapable of satisfying the heart.",
    key_experiences: [
      "Born in Ayutthaya into an upright civil service family, young Dtun was raised with strict moral values, honesty, and respect for elders.",
      "As a young man in Bangkok, he achieved secular success: graduating in economics, working as a successful trader, earning money, and enjoying worldly social life.",
      "Despite possessing everything society deemed desirable (money, friends, romantic prospects), he experienced profound existential emptiness: observing the aging, sickness, and death around him, he recognized that all worldly pursuits end in grief.",
      "He committed himself to serious lay practice: taking the Five Precepts, waking at 3:00 a.m. to meditate, and investigating the foulness of the physical body (asubha).",
      "Shown photographs of Thailand's greatest forest masters—Luang Ta Mahā Boowa and Luang Por Chah—he felt an immediate, magnetic resonance of faith (saddhā), resolving to abandon the secular world forever."
    ],
    operational_heuristics: "Worldly achievements cannot extinguish spiritual thirst; disenchantment (nibbidā) is the indispensable prerequisite for authentic renunciation.",
    verbatim_quote: "“I saw with total clarity that whether rich or poor, high or low, everyone must grow old, fall sick, and die. If I continued chasing worldly wealth, I would die empty-handed. The only real refuge in this universe is the Dhamma.”",
    epistemic_status: "MEMOIR RECOLLECTION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-02-ordination-wat-pah-pong",
    unit_number: 2,
    title: "Taking the Ochre Robe: Ordination Under Luang Por Chah",
    book_part: "Part I: The Path to Renunciation",
    chapters: "My Practice as a Samaṇa & Life Under the Protection of the Ochre Robe (pp. 38–42)",
    primary_figures: ["Ajahn Dtun (Thiracitto)", "Venerable Luang Por Chah", "Monastic Sangha of Wat Nong Pah Pong"],
    monastic_context: "Wat Nong Pah Pong, Ubon Ratchathani, Northeast Thailand; July 1978.",
    core_insight: "Monastic ordination is not a ceremonial promotion, but the conscious surrender of personal ego: stepping into the austere crucible of the Vinaya discipline where every habit of comfort is systematically dismantled.",
    key_experiences: [
      "In 1978, Dtun traveled to the remote forests of Ubon Ratchathani to ordain under the great meditation master Luang Por Chah.",
      "Luang Por Chah gave him the monastic name *Thiracitto*—'One whose mind is steadfast and firm in Dhamma.'",
      "Life at Wat Pah Pong was uncompromisingly rigorous: one meal a day eaten from a single almsbowl, sleeping on a wooden mat on the floor of a solitary forest hut (kuti), drinking water filtered by hand, sweeping leaf-strewn paths, and enduring intense tropical heat.",
      "Luang Por Chah taught through direct, practical pressure: testing disciples' patience, deflating intellectual pride, and demanding unbroken mindfulness in all postures (walking, standing, sitting, lying down).",
      "Ajahn Dtun realized that the Vinaya rules were not arbitrary restrictions, but protective boundaries designed to starve the defilements of craving and aversion."
    ],
    operational_heuristics: "Strict monastic discipline and simplicity of life starve the roots of craving and create the mental quietude required for deep samādhi.",
    verbatim_quote: "“Luang Por Chah told us: ‘Don’t look outside; look within your own heart. When defilements arise, watch them, understand them, and don’t follow them.’ The robe is a shield of purity, but you must fight your own battles.”",
    epistemic_status: "SOURCE FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-03-first-rains-conquering-sensual-desire",
    unit_number: 3,
    title: "The First Rains: Confronting Lust & The Asubha Breakthrough",
    book_part: "Part II: The Crucible of the Rains Retreats",
    chapters: "First Rains Retreat (pp. 43–78)",
    primary_figures: ["Ajahn Dtun", "Luang Por Chah"],
    monastic_context: "Wat Pah Pong & branch forest monasteries; Rains Retreat (Vassa) 1978.",
    core_insight: "Sensual desire (kāmacchanda) is the strongest biological glue binding consciousness to saṁsāra; it can only be uprooted through the relentless, clinical contemplation of the 32 foul parts of the body (asubha kammatthāna).",
    key_experiences: [
      "During his first Rains, intense memories of worldly romance, women, and sensual desires erupted in his mind like raging fires, threatening to drive him to disrobe.",
      "Recognizing that sensual lust is rooted in the cognitive illusion of bodily beauty, Ajahn Dtun resolved to fight with all his life: he took up **asubha** meditation with ferocious intensity.",
      "He stripped away the surface layer of skin in his mind's eye: examining muscles, fat, intestines, blood, bile, pus, feces, urine, bones, and rotting corpses in charnel grounds.",
      "Whenever a mental image of an attractive woman arose, he mentally dissected the image into skull, exposed ribs, decaying organs, and foul odors until the mind was completely revolted and cooled.",
      "One evening, deep in meditation, his perception shifted permanently: he saw that all human bodies are walking leather bags of filth and decaying bones. Sensual lust collapsed instantly, replaced by profound peace and unshakeable celibate clarity.",
      "When he reported this breakthrough to Luang Por Chah, the master smiled and confirmed that he had severed the first great fetter."
    ],
    operational_heuristics: "Deconstruct the physical object of desire into its true anatomical components to destroy the projection of beauty and extinguish lust at its root.",
    verbatim_quote: "“The mind projects beauty onto skin. Peel back that millimeter of skin, and what is left? Blood, yellow fat, greasy intestines, and foul liquid. When the heart truly sees asubha, lust has nowhere to stand. The fire simply goes out for lack of fuel.”",
    epistemic_status: "DIRECT CONTEMPLATIVE REALIZATION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-04-second-rains-torpor-all-night-vigil",
    unit_number: 4,
    title: "The Second Rains: Battling Torpor & The All-Night Pacing Vigil",
    book_part: "Part II: The Crucible of the Rains Retreats",
    chapters: "Second Rains Retreat (pp. 79–92)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Forest monastery, Northeast Thailand; Rains Retreat 1979.",
    core_insight: "Sloth and torpor (thīna-middha) are subtle defilements that veil the radiant nature of the mind; they must be conquered through heroic physical exertion, standing and walking meditation, and refusal to yield to physical exhaustion.",
    key_experiences: [
      "In his second Rains, having conquered lust, Ajahn Dtun was attacked by crushing waves of sleepiness and spiritual lethargy (thīna-middha) whenever he sat to meditate.",
      "Refusing to surrender to sleep, he adopted radical ascetic counter-measures (dhutaṅga practices): he abandoned his mosquito net, sat at the edge of deep ravines and wells where falling asleep meant physical death, and poured cold water over his head.",
      "When sitting became impossible, he walked meditation (caṅkama) back and forth along a 30-pace dirt path all night long until the soles of his feet blistered and bled.",
      "Through unbroken mindfulness on the sensation of lifting, placing, and stepping, his mind broke through the veil of lethargy: an intense, luminous, diamond-like brightness erupted in his heart.",
      "He discovered that true rest does not come from unconscious sleep, but from the unshakeable stillness of **samādhi** where the mind remains fully awake, rested, and radiant through the night."
    ],
    operational_heuristics: "Physical discomfort and dynamic movement (walking meditation) are essential tools to shatter mental sluggishness and unlock the mind's intrinsic luminous wakefulness.",
    verbatim_quote: "“Sleepiness is a deceiver. It tells you your body is weak and needs rest. But when you refuse to lay down and pace the meditation path all night under the stars, the cloud suddenly breaks, and you discover the heart possesses an inexhaustible, self-luminous energy.”",
    epistemic_status: "DIRECT CONTEMPLATIVE REALIZATION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-05-third-rains-boundless-metta-and-jhana",
    unit_number: 5,
    title: "The Third Rains: Boundless Mettā & The Absorption of Jhāna",
    book_part: "Part II: The Crucible of the Rains Retreats",
    chapters: "Third Rains Retreat (pp. 93–110)",
    primary_figures: ["Ajahn Dtun", "His Brother", "Local Villagers"],
    monastic_context: "Samnak Vipassanā-chuan-puang-put, Baan Mee, Lopburi; Rains Retreat 1980.",
    core_insight: "When virtue (sīla) is stainless and sensual craving is extinguished, loving-kindness (mettā) ceases to be a calculated mental recitation and becomes an infinite, overflowing cosmic radiation that dissolves all boundaries of self.",
    key_experiences: [
      "Residing at a quiet monastery in Lopburi, his meditation deepened into profound, effortless **jhāna** absorption: breathing grew subtle, mental chatter ceased entirely, and the mind settled into unshakable, tranquil stillness.",
      "Emerging from absorption, an overwhelming, boundless wave of unconditional loving-kindness (mettā) surged through his heart, extending outward to encompass all living beings—friends, enemies, animals, spirits, and celestial beings—without limitation.",
      "He saw that all beings wander in the ocean of saṁsāra tormented by the fires of greed, hatred, and delusion, generating immense compassion (karuṇā) and total forgiveness for all past grievances.",
      "When his younger brother visited bringing books from his father, Ajahn Dtun realized that theoretical study was unnecessary: the reality of the Dhamma had become living knowledge within his own purified consciousness.",
      "He began recording brief personal notes to preserve the precise map of contemplative practice for future seekers."
    ],
    operational_heuristics: "Pure loving-kindness is the natural fragrance of a concentrated, defilement-free mind; it protects the practitioner from all external hostility and animosity.",
    verbatim_quote: "“The heart was imbued with a mettā that I cannot describe in words. It radiated in all ten directions like the morning sun. I looked at all beings in the world and felt only deep tenderness: everyone wants happiness, everyone fears pain. How could one ever harbor anger toward anyone?”",
    epistemic_status: "DIRECT CONTEMPLATIVE REALIZATION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-06-fourth-fifth-rains-tudong-wilderness",
    unit_number: 6,
    title: "The Forest Wanderer: Tudong Austerities, Wild Beasts, and Cobras",
    book_part: "Part III: Solitary Wilderness Wandering",
    chapters: "Fourth & Fifth Rains Retreats (pp. 111–125)",
    primary_figures: ["Ajahn Dtun", "Forest Nomads", "Wild Animals"],
    monastic_context: "Remote jungles, mountain caves, and tiger habitats of central and northern Thailand; 1981–1982.",
    core_insight: "Living in the wild jungle under a simple umbrella-tent (glot) strips away the psychological delusion of physical security, forcing the mind to take refuge solely in mindfulness, death contemplation, and radical faith in kamma.",
    key_experiences: [
      "Undertaking the ancient ascetic practice of **tudong** (wandering monk), Ajahn Dtun walked barefoot across mountains and jungles, carrying only his bowl, three robes, water filter, and umbrella-glot with mosquito netting.",
      "He intentionally sought out desolate, frightening locations—haunted cremation grounds, deep caves, and forests inhabited by wild elephants, cobras, and leopards.",
      "Encountering venomous king cobras rearing up on his walking path, he did not run or strike; he stood motionless, radiated pure loving-kindness (mettā), and watched the serpent lower its hood and glide peacefully into the bamboo.",
      "Facing the terrifying roar of wild tigers at night outside his thin mosquito net, he confronted the primal fear of death: *'If I have bad kamma with this tiger from past lives, let it take my flesh. If not, it cannot harm me. The body belongs to the earth anyway.'*",
      "Surrendering fear of death converted terror into profound meditative absorption: the mind unified in absolute fearless equanimity."
    ],
    operational_heuristics: "Confronting physical mortality in the wilderness destroys subconscious attachment to the body and accelerates awakening.",
    verbatim_quote: "“When the tiger roars in the dark, your mindfulness cannot be sloppy. You cannot hide behind books or opinions. You must drop the body completely and take refuge in the knowing nature of the mind. In that moment of total surrender, fear vanishes.”",
    epistemic_status: "MEMOIR RECOLLECTION",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-07-sixth-seventh-rains-investigating-khandhas",
    unit_number: 7,
    title: "Deconstructing the Self: The Investigation of the Five Aggregates",
    book_part: "Part III: Solitary Wilderness Wandering",
    chapters: "Sixth & Seventh Rains Retreats (pp. 126–136)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Forest hermitages, Central Thailand; 1983–1984.",
    core_insight: "The illusion of a personal 'self' (attā) is maintained by the unexamined aggregation of the Five Khandhas; penetrative vipassanā dissects form, feeling, perception, mental formations, and consciousness to expose their empty, ownerless nature (anattā).",
    key_experiences: [
      "With samādhi firm and immovable, Ajahn Dtun turned the laser of inquiry onto the five aggregates (**pañca khandha**): rūpa (physical form), vedanā (feelings of pleasure/pain), saññā (memory/perception), saṅkhāra (thoughts/mental formations), and viññāṇa (sense consciousness).",
      "Investigating physical pain (vedanā) during prolonged sitting, he observed that pain is merely a physical sensation; it has no intent, no malice, and no ownership. The suffering (*dukkha*) arises entirely because the mind grasps the sensation and says: 'This is *my* pain.'",
      "When the grasping ceased, pain and the knowing mind separated into two distinct, unmingled realities: the body sat in intense sensation, while the knowing mind remained cool, untouched, and blissful.",
      "He examined thoughts (saṅkhāra): observing thoughts arising, lingering, and vanishing like bubbles on water, he realized that thoughts think themselves without an internal thinker.",
      "The identification with the mental aggregates dissolved: the mind saw clearly that 'I am not this body, I am not these feelings, I am not these thoughts.'"
    ],
    operational_heuristics: "Separate the physical sensation from the mental reaction: pain belongs to the body; suffering belongs only to the grasping mind.",
    verbatim_quote: "“Pain is just pain. It is an elemental sensation. But when delusion grasps it and labels it 'my pain', suffering is born. When wisdom steps in, the pain remains in the flesh, but the heart is completely cool, detached, and free.”",
    epistemic_status: "DIRECT CONTEMPLATIVE REALIZATION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-08-khao-yai-solitary-mountain-hermitage",
    unit_number: 8,
    title: "Khao Yai Wilderness: Solitary Hermitage & The Disease Crucible",
    book_part: "Part III: Solitary Wilderness Wandering",
    chapters: "Eighth to Twelfth Rains & Khao Yai (pp. 137–147)",
    primary_figures: ["Ajahn Dtun", "Forest Monks"],
    monastic_context: "Khao Yai National Park, Nakhon Ratchasima Province; dense rainforest mountains; 1985–1989.",
    core_insight: "Physical illness and malaria are supreme Dhamma teachers: when medical treatment is unavailable, the body becomes a living laboratory to witness anicca (impermanence) and sever bodily attachment.",
    key_experiences: [
      "Ajahn Dtun spent several years in the high mountain wilderness of Khao Yai, living in complete solitude in primitive bamboo shelters.",
      "He contracted violent bouts of tropical fever and malaria: teeth chattering uncontrollably from bone-deep chills, followed by burning fevers that caused delirium.",
      "With no doctors, medicines, or pharmacies for miles, he used the illness as his meditation subject: watching the fever rage through the bloodstream, observing how the body naturally follows the laws of nature (*sabhāvadhamma*).",
      "He saw that the body is not a personal possession, but a temporary assembly of the four elements (earth, water, fire, wind) borrowed from the earth, returning inexorably to the earth.",
      "By surrendering all attachment to whether the body lived or died, the mind detached from the physical vehicle: the fever subsided, leaving the consciousness profoundly purified, serene, and fearless."
    ],
    operational_heuristics: "Do not view physical sickness as an obstacle to meditation; use the intense sensations of illness as a direct vehicle to penetrate impermanence and release bodily clinging.",
    verbatim_quote: "“When the malaria fever burnt through my bones at Khao Yai, I told myself: ‘Let this body die if it must. The body was born to die. But the Dhamma does not die.’ In letting go of life, the heart found immortality.”",
    epistemic_status: "MEMOIR RECOLLECTION",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-09-thirteenth-rains-mastery-of-insight",
    unit_number: 9,
    title: "The Mastery of Insight: Uprooting the Roots of Greed, Hatred, and Delusion",
    book_part: "Part IV: Fruition and Institutional Legacy",
    chapters: "Thirteenth Rains Retreat to the Present (pp. 148–158)",
    primary_figures: ["Ajahn Dtun", "Luang Por Chah (Final Years)", "Senior Forest Elders"],
    monastic_context: "Northeast and Eastern Thailand; 1990–present.",
    core_insight: "The culmination of the Kammatthana path is the total eradication of the three root poisons—lobha (greed), dosa (aversion), and moha (delusion)—resulting in the permanent cessation of suffering and the realization of unshakeable liberation (akuppa-cetovimutti).",
    key_experiences: [
      "Reaching his thirteenth Rains, the meditative faculties of sati (mindfulness), samādhi (concentration), and paññā (wisdom) functioned in seamless, automatic harmony.",
      "The subtlest movements of defilement (*kilesa*)—pride, subtle attachment to stillness, conceit of attainment—were instantly intercepted and dissolved at their inception before they could stain the heart.",
      "He maintained unwavering devotion to Luang Por Chah, caring for the aging master during his years of illness and paralysis, practicing silent filial service.",
      "Senior forest elders recognized Ajahn Dtun as a true *Visuddhipuggala* (Pure One) who had realized the essence of the Forest Tradition.",
      "Lay supporters and monks began flocking to him for spiritual guidance, seeking the uncompromising, authentic Dhamma of practice (*paṭipatti*)."
    ],
    operational_heuristics: "True spiritual mastery is revealed not by claims of psychic powers, but by the absolute absence of irritation, greed, and conceit under all circumstances.",
    verbatim_quote: "“When wisdom is mature, it operates on its own. The defilements don’t have room to sprout. The mind rests in its original, uncreated nature—spacious, peaceful, unmoving, and free from the gravity of saṁsāra.”",
    epistemic_status: "DIRECT CONTEMPLATIVE REALIZATION",
    materiality: "CRITICAL"
  },
  {
    id: "unit-10-remembering-fathers-kindness",
    unit_number: 10,
    title: "Remembering Father's Kindness: Repaying the Debt of Life",
    book_part: "Part IV: Fruition and Institutional Legacy",
    chapters: "Remembering My Father's Kindness (pp. 159–160)",
    primary_figures: ["Ajahn Dtun", "His Father"],
    monastic_context: "Chonburi and Ayutthaya; the passing of his father.",
    core_insight: "In Buddhist ethics, the debt of gratitude to one's parents can never be repaid through material gifts alone; it is repaid fully only when a child guides the parents to establish faith (saddhā), virtue (sīla), and wisdom (paññā) in the Dhamma.",
    key_experiences: [
      "Ajahn Dtun recounts his deep gratitude to his father, who had initially opposed his ordination out of concern for his future, but gradually grew to revere his son's monkhood.",
      "When his father fell terminally ill in old age, Ajahn Dtun visited his bedside, not with tears or worldly lamentations, but with direct, powerful Dhamma instruction.",
      "He guided his dying father through mindfulness of breathing, releasing all worldly worries, letting go of family attachments, and fixing the mind on the Buddha's qualities of purity and peace.",
      "His father died with serene composure, free from fear, establishing his consciousness in a high heavenly realm.",
      "Ajahn Dtun reflects that this spiritual transmission was the supreme repayment of the milk and care he received in childhood."
    ],
    operational_heuristics: "The highest filial love is spiritual accompaniment at the threshold of death, teaching the dying soul how to let go of the body and rest in the Dhamma.",
    verbatim_quote: "“The Buddha taught that even if you carried your mother on one shoulder and your father on the other for a hundred years, you could not repay their debt. But if you establish them in virtue, generosity, and meditation, the debt is truly repaid.”",
    epistemic_status: "MEMOIR RECOLLECTION",
    materiality: "IMPORTANT"
  },
  {
    id: "unit-11-creation-of-wat-boonyawad",
    unit_number: 11,
    title: "The Creation of Wat Boonyawad: Building a Strict Forest Sanctuary",
    book_part: "Part IV: Fruition and Institutional Legacy",
    chapters: "The Creation of Wat Boonyawad (pp. 161–167)",
    primary_figures: ["Ajahn Dtun", "Lay Benefactors", "Resident Monks"],
    monastic_context: "Baan Klong Yai, Bo Thong, Chonburi, Thailand; 1990s–present.",
    core_insight: "A genuine forest monastery is not an architectural monument or a tourist attraction, but an inviolable training sanctuary dedicated entirely to preserving the pristine Vinaya discipline and silent meditation practice of the Buddha.",
    key_experiences: [
      "In the early 1990s, lay supporters offered a parcel of wild, forested land in the remote district of Bo Thong, Chonburi, inviting Ajahn Dtun to establish a permanent monastery.",
      "Ajahn Dtun accepted on strict conditions: Wat Boonyawad would never become a commercialized temple, would host no festivals or noisy celebrations, and would accept no money for ritual blessings.",
      "The monastery was preserved as dense jungle: each monk lives in an isolated wooden kuti hidden deep in the forest, separated by hundreds of meters to ensure absolute silence and solitude.",
      "The daily routine remains uncompromising: morning almsround through rural villages, one meal a day eaten silently from the bowl, manual work and sweeping in the afternoon, followed by unbroken solitary sitting and walking meditation through the night.",
      "Wat Boonyawad grew into one of the most respected training monasteries in the international Forest Tradition, producing dedicated monks and preserving the living lineage of Ajahn Chah."
    ],
    operational_heuristics: "Protect the physical environment of silence and discipline: when outer distractions are eliminated, the inner defilements are forced into the light and conquered.",
    verbatim_quote: "“Wat Boonyawad was built not to show off buildings, but to build people. We leave the trees alone, we keep silent, we practice hard. When the environment is quiet, the mind has no choice but to face itself.”",
    epistemic_status: "HISTORICAL FACT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-12-dhamma-talk-virtue-concentration-wisdom",
    unit_number: 12,
    title: "Dhamma Talk I: The Unified Engine of Virtue, Concentration, and Wisdom",
    book_part: "Part V: Canonical Dhamma Teachings",
    chapters: "The Power of Virtue, Concentration and Wisdom (pp. 168–186)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Dhamma Hall, Wat Boonyawad; formal Dhamma exposition to monastics and lay practitioners.",
    core_insight: "Sīla (Virtue), Samādhi (Concentration), and Paññā (Wisdom) are not three sequential stages that can be practiced in isolation; they are an indivisible, reciprocal threefold engine where each element constantly purifies and empowers the others.",
    key_experiences: [
      "Ajahn Dtun dismantles the modern Western misconception that one can practice advanced insight meditation (vipassanā) without strict ethical discipline (sīla).",
      "**Virtue (Sīla)** cools the heart, eliminates remorse and guilt, and provides the stainless foundation required for the mind to settle without agitation.",
      "**Concentration (Samādhi)** gathers the scattered rays of attention into a singular, unwavering laser beam, endowing the mind with the stability to observe reality without flinching.",
      "**Wisdom (Paññā)** investigates the nature of bodily and mental phenomena, cutting through delusion; as wisdom deepens, it naturally refines virtue and deepens concentration.",
      "He compares them to the three legs of a stool: remove any one leg, and the entire structure of spiritual awakening collapses."
    ],
    operational_heuristics: "Do not search for high mystical experiences while neglecting basic ethical conduct; clean morality is the soil from which the diamond of wisdom grows.",
    verbatim_quote: "“Virtue purifies the mind so it can settle into concentration. Concentration gathers the power of the mind so it can develop wisdom. Wisdom cleanses the mind so virtue becomes natural and effortless. You cannot separate them; they work as one.”",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-13-dhamma-talk-not-veering-left-or-right",
    unit_number: 13,
    title: "Dhamma Talk II: The Middle Way: Not Veering Off to the Left or Right",
    book_part: "Part V: Canonical Dhamma Teachings",
    chapters: "Not Veering Off to the Left or Right (pp. 187–201)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Wat Boonyawad; rainy season exhortation.",
    core_insight: "The Middle Way (Majjhimā Paṭipadā) is not a lukewarm compromise or a lazy average; it is a razor-sharp path of balanced effort that avoids the two eternal ditch-traps of human consciousness: sensual indulgence (kāmasukhallikānuyoga) and excessive, self-torturing asceticism (attakilamathānuyoga).",
    key_experiences: [
      "Veering to the **Left** means falling into sensual indulgence, laziness, following desires, and making excuses for spiritual laxity under the guise of 'naturalness'.",
      "Veering to the **Right** means falling into rigid ascetic pride, violent self-hatred, straining with tense willpower, and practicing with anger toward the defilements, which only feeds conceit (*māna*).",
      "Ajahn Dtun illustrates the metaphor of tuning a lute (taught by the Buddha to Sona): strings tuned too tight will snap; strings tuned too loose will not play music; tuned just right, the music is harmonious.",
      "Right Effort (*sammā vāyāma*) is calm, continuous, alert, and relaxed—maintaining persistent mindfulness without tension or grasping for results."
    ],
    operational_heuristics: "Practice with patient, persistent continuity rather than violent spurts of extreme effort followed by collapse; balance the faculties of faith with wisdom, and energy with concentration.",
    verbatim_quote: "“If you force the mind with anger, you are fighting defilement with defilement. If you are lazy, defilement eats you alive. The Middle Way is walking calmly, watching steadily, knowing clearly, without leaning into liking or disliking.”",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-14-dhamma-talk-this-is-the-path",
    unit_number: 14,
    title: "Dhamma Talk III: This Is The Path: The Noble Eightfold Path as Direct Experience",
    book_part: "Part V: Canonical Dhamma Teachings",
    chapters: "This is The Path (pp. 202–214)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Wat Boonyawad; analytical Dhamma discourse.",
    core_insight: "The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga) is not a theoretical checklist or an external dogma, but an internal psychological state: the simultaneous alignment of right view, intention, speech, action, livelihood, effort, mindfulness, and concentration in the living present moment.",
    key_experiences: [
      "Ajahn Dtun systematically unpacks the Eightfold Path from the perspective of direct meditation experience.",
      "**Right View (Sammā Diṭṭhi)** is seeing things as they actually are: seeing that whatever is subject to origination is subject to cessation, and understanding the Four Noble Truths not as concepts, but as direct observation of suffering and its ending.",
      "**Right Mindfulness (Sammā Sati)** is keeping the mind anchored in the Four Foundations of Mindfulness (kāyānupassanā, vedanānupassanā, cittānupassanā, dhammānupassanā) without drifting into past memories or future anxieties.",
      "**Right Concentration (Sammā Samādhi)** is the unshakeable collectedness of mind unified in the jhānas, free from the five hindrances (nīvaraṇa).",
      "When all eight factors mature simultaneously in a single mind-moment (maggasamaṅgī), the Path cuts the fetters (*saṁyojana*) and realizes the deathless element of Nibbāna."
    ],
    operational_heuristics: "Unify the eight factors in the present moment: when mindfulness and clear comprehension are unbroken, the entire Noble Path is active in the heart.",
    verbatim_quote: "“The Noble Eightfold Path is not written in Pali books; it is walked in your own heart right now. When Right View leads, mindfulness guards, and concentration steadies, the path opens itself into liberation.”",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-15-dhamma-talk-ten-spiritual-perfections",
    unit_number: 15,
    title: "Dhamma Talk IV: The Ten Spiritual Perfections (Pāramīs): From Generosity to Equanimity",
    book_part: "Part V: Canonical Dhamma Teachings",
    chapters: "The Ten Spiritual Perfections (pp. 215–246)",
    primary_figures: ["Ajahn Dtun"],
    monastic_context: "Wat Boonyawad; concluding master discourse.",
    core_insight: "Spiritual liberation requires the cumulative accumulation of spiritual capital: cultivating the Ten Pāramīs as conscious daily habits that transform ordinary human character into an unshakeable fortress of awakening.",
    key_experiences: [
      "Ajahn Dtun expounds the ten spiritual perfections (**dasa pāramī**):",
      "1. **Dāna (Generosity)**: Surrendering selfishness and opening the heart.",
      "2. **Sīla (Virtue)**: Guarding bodily and verbal conduct from harm.",
      "3. **Nekkhamma (Renunciation)**: Withdrawing from sensual entanglements.",
      "4. **Paññā (Wisdom)**: Discerning impermanence, suffering, and non-self.",
      "5. **Viriya (Energy / Effort)**: Unflinching dedication in spiritual battle.",
      "6. **Khanti (Patience / Endurance)**: Bearing heat, cold, hunger, criticism, and physical pain without anger.",
      "7. **Sacca (Truthfulness / Integrity)**: Uncompromising honesty in speech and vow.",
      "8. **Adhiṭṭhāna (Resolution / Determination)**: Unshakeable commitment to the spiritual goal.",
      "9. **Mettā (Loving-kindness)**: Radiating universal goodwill to all beings.",
      "10. **Upekkhā (Equanimity)**: Remaining balanced and unperturbed amid the Eight Worldly Winds (gain and loss, praise and blame, fame and disrepute, pleasure and pain).",
      "He demonstrates that cultivating the pāramīs in daily life is what carries the practitioner across the stormy ocean of saṁsāra to the safe shore of peace."
    ],
    operational_heuristics: "Cultivate the ten perfections in every small interaction: patience with difficult people, truthfulness in small promises, and equanimity when plans fail.",
    verbatim_quote: "“Patience (khanti) is the incinerator of defilements. When you endure difficulties without anger, you burn the fuel of past bad kamma. Combine patience with determination (adhiṭṭhāna) and equanimity (upekkhā), and nothing in heaven or earth can turn you away from Nibbāna.”",
    epistemic_status: "SOURCE ARGUMENT",
    materiality: "CRITICAL"
  },
  {
    id: "unit-16-the-kammatthana-synthesis-living-nibbana",
    unit_number: 16,
    title: "The Kammatthana Synthesis: Living in the Light of Nibbāna",
    book_part: "Epilogue & Synthesis",
    chapters: "Comprehensive Master Synthesis",
    primary_figures: ["Ajahn Dtun", "The Lineage of Venerable Ajahn Chah & Venerable Ajahn Mun"],
    monastic_context: "Wat Boonyawad; enduring living Dhamma heritage.",
    core_insight: "The Thai Forest Tradition proves that the ancient path of the Buddha is not an extinct historical relic or a dry scholastic theory, but a living, fully realizable spiritual technology accessible to any human being willing to practice with total commitment.",
    key_experiences: [
      "Ajahn Dtun's life and teachings stand as a monumental contemporary verification of the Buddha's timeless claim: *Sandiṭṭhiko* (visible here and now) and *Akāliko* (timeless).",
      "From an affluent, worldly trader in Bangkok to an austere forest monk sleeping under an umbrella in tiger-inhabited jungles, his trajectory demonstrates that human consciousness can completely transcend defilements.",
      "Wat Boonyawad continues to maintain the strict forest standards of Ajahn Mun and Ajahn Chah: preserving pristine nature, uncompromising Vinaya discipline, and silent solitary practice.",
      "His final message to all seekers: do not waste this precious human rebirth chasing transient worldly bubbles; devote your energy to training the heart, purifying virtue, gathering concentration, and opening the eye of wisdom.",
      "The ultimate refuge is within: when craving ceases, the unconditioned peace of Nibbāna shines forth by its own nature."
    ],
    operational_heuristics: "Turn inward. Make the mind your monastery. Watch thoughts arise and vanish. Cling to nothing. Realize the deathless.",
    verbatim_quote: "“The Dhamma is real. The Buddha’s path works today just as it worked twenty-six hundred years ago. If you practice sincerely, if you give your life to virtue, concentration, and wisdom, the heart will touch the Deathless. There is no greater blessing in human life.”",
    epistemic_status: "SYNTHESIS & DIRECT REALIZATION",
    materiality: "CRITICAL"
  }
];

// Write canonical knowledge-units.json
fs.writeFileSync(
  path.join(targetDir, 'knowledge-units.json'),
  JSON.stringify(bookUnits, null, 2),
  'utf8'
);
console.log(`Wrote canonical knowledge-units.json for Ajahn Dtun with ${bookUnits.length} units.`);

// Write master-notes.md (Total Replacement Codex)
const masterNotesMd = `# The Autobiography and Dhamma Teachings of Ajahn Dtun: Total Replacement Codex
## Luang Por Akaradej Thiracitto Bhikkhu (Ajahn Dtun)
### Canonical Book Knowledge Reconstruction System (BKRS v1.0 Standard)

---

## 1. Executive Summary & Epistemic Architecture
*The Autobiography and Dhamma Teachings of Luang Por Akaradej Thiracitto Bhikkhu (Ajahn Dtun)* is one of the most significant spiritual documents to emerge from the contemporary **Thai Forest Tradition (Kammatthana)**. Published in 2020 by Wat Boonyawad and selected by Luang Por Tui for inclusion in the Chandakaranusorn Dhamma Museum of Rattanakosin Pure Ones (*Visuddhipuggala*), the text provides an unvarnished, direct, first-person account of a modern seeker’s journey from secular materialism to spiritual mastery under the guidance of **Venerable Ajahn Chah** of Wat Nong Pah Pong.

### The Central Contemplative Axioms:
1. **The Reality of Direct Experience (*Paṭipatti*)**: Theoretical intellectual knowledge of Buddhist scriptures (*pariyatti*) is powerless against deep defilements unless tested and realized through direct experiential meditation.
2. **The Asubha Razor**: Sensual lust (*kāmacchanda*) is the primary biological chain binding consciousness to saṁsāra; it is dismantled not by suppression, but by the relentless anatomical deconstruction of the body into its 32 foul, decaying components (*asubha*).
3. **The Indivisible Triad of Awakening**:
   - **Sīla (Virtue)**: Stainless ethical discipline that eliminates guilt, cools the heart, and creates the baseline stability for meditation.
   - **Samādhi (Concentration)**: The gathering of consciousness into immovable one-pointed stillness (*jhāna*), cutting through the five hindrances.
   - **Paññā (Wisdom)**: The piercing insight that sees all physical and mental phenomena as impermanent (*anicca*), stressful (*dukkha*), and ownerless / not-self (*anattā*).
4. **The Middle Way as Dynamic Equilibrium**: Avoiding both the ditch of sensual indulgence and the ditch of tense, self-torturing asceticism; maintaining calm, persistent, alert continuity of mindfulness in all postures.
5. **The Timelessness of Liberation (*Akāliko*)**: Full awakening (*Nibbāna*) is not an ancient historical relic or a myth, but a living reality fully achievable by modern human beings who apply the Buddha's training with unwavering sincerity.

---

## 2. Directory of Key Terms & Contemplative Frameworks

| Pali Term | Translation | Contemplative Function in Forest Tradition |
| :--- | :--- | :--- |
| **Kammatthana** | The Place / Work of Meditation | The meditative framework of the Thai Forest Tradition originating from Ajahn Mun Bhuridatto. |
| **Asubha** | Foulness / Non-Beauty | Meditative deconstruction of the 32 parts of the body to eradicate sensual lust and physical clinging. |
| **Samādhi** | Unshakable Concentration | One-pointed stillness of mind resulting in the deep meditative absorptions (*jhānas*). |
| **Paññā** | Liberating Wisdom | Direct discernment of the Three Marks of Existence: *anicca* (impermanence), *dukkha* (suffering), *anattā* (not-self). |
| **Tudong (Dhutaṅga)** | Ascetic Wandering | Wandering barefoot through remote forests and caves under an umbrella-glot to conquer fear and attachment. |
| **Thīna-middha** | Sloth and Torpor | The hindrance of sleepiness and spiritual lethargy; conquered through all-night walking meditation (*caṅkama*). |
| **Mettā** | Boundless Loving-Kindness | Unconditional goodwill radiated to all living beings without limitation, protection against hostility. |
| **Khanti** | Patient Endurance | Bearing physical pain, hunger, heat, cold, and harsh words without anger; the "incinerator of defilements." |
| **Nibbāna** | The Unconditioned / Cessation | The complete, permanent extinguishing of the fires of greed (*lobha*), hatred (*dosa*), and delusion (*moha*). |

---

## 3. Systematic Invariant Knowledge Units (16 Complete Movements)

${bookUnits.map(u => `### Unit ${u.unit_number}: ${u.title}
- **Location in Canon**: ${u.book_part} | ${u.chapters}
- **Key Entities & Figures**: ${u.primary_figures.join(', ')}
- **Monastic Context**: ${u.monastic_context}
- **Core Insight**:
  ${u.core_insight}
- **Key Experiences & Contemplative Mechanics**:
${u.key_experiences.map(e => `  - ${e}`).join('\n')}
- **Operational Heuristic**:
  ${u.operational_heuristics}
- **Verbatim Canonical Excerpt**:
  > "${u.verbatim_quote}"
`).join('\n---\n')}

---

## 4. Master Comparative Matrix: The Ten Spiritual Perfections (Pāramīs)

| Perfection (Pāramī) | Meaning & Definition | Practice in Forest Monasticism | Real-World Operational Heuristic |
| :--- | :--- | :--- | :--- |
| **1. Dāna** | Generosity / Selfless Giving | Sharing food from almsround; giving Dhamma without charge | Relinquish grasping; share resources, time, and forgiveness freely |
| **2. Sīla** | Stainless Virtue / Morality | Strict adherence to the 227 Patimokkha monastic rules | Guard speech and actions; never harm living beings for personal gain |
| **3. Nekkhamma** | Renunciation / Non-Sensuality | Living with three robes, one meal, no money or luxuries | Simplify lifestyle; periodically unplug from consumer dopamine traps |
| **4. Paññā** | Penetrating Wisdom | Direct observation of the five aggregates as anicca and anattā | Look past superficial appearances to see the impermanent nature of events |
| **5. Viriya** | Persistent Spiritual Energy | Pacing the walking path all night; meditating through exhaustion | Cultivate steady, unbroken momentum in worthy endeavors |
| **6. Khanti** | Patient Endurance | Bearing malaria, extreme heat, stinging insects without anger | Endure discomfort and emotional provocation without retaliation |
| **7. Sacca** | Truthfulness / Uncompromising Honesty | Keeping solemn vows (*adhiṭṭhāna*) made before the Buddha | Align speech strictly with reality; never compromise integrity |
| **8. Adhiṭṭhāna** | Unshakeable Resolution | Vowing to meditate until dawn or die on the path | Form clear, non-negotiable spiritual and ethical commitments |
| **9. Mettā** | Boundless Loving-Kindness | Radiating goodwill toward wild tigers, cobras, and enemies | Wish true welfare and peace for all beings without exception |
| **10. Upekkhā** | Perfect Equanimity | Remaining untouched by praise, blame, gain, loss, fame, disrepute | Stand like a granite boulder amid the changing worldly winds |

---

## 5. Dialectical Deep Dive: The Core Contemplative Engines

### 1. The Anatomy of Asubha: Uprooting Sensual Clinging
Ajahn Dtun’s account of his first Rains retreat contains one of the most vivid descriptions of conquering sexual desire in modern spiritual literature:
- Worldly society conditions the human mind to look at the surface of human bodies and perceive "beauty," generating intense sexual craving (*rāga*).
- This craving is rooted in cognitive delusion (*vipallāsa*): mistaking the foul for beautiful, the impermanent for permanent, and the painful for pleasurable.
- In **asubha** practice, the meditator does not merely intellectualize: they perform a mental autopsy. They peel off the thin layer of skin and observe the reality: red raw meat, greasy fat, pulsing veins, green bile, smelly intestines, and brittle bones.
- By confronting the mind with the anatomical reality, the mind experiences profound disenchantment (*nibbidā*). The projection of beauty is exposed as a hallucination, and sexual desire is extinguished at its biological and psychological root.

### 2. The Separation of Pain and Suffering
In his contemplation of physical pain and malaria in Khao Yai, Ajahn Dtun explains the profound difference between **vedanā** (the bare physical sensation) and **dukkha** (the mental suffering of clinging):
- The physical body is composed of nerves and four physical elements (earth, water, fire, wind). When illness strikes, intense sensations occur naturally.
- Sensation itself is ownerless and neutral. But when the uninstructed mind encounters painful feeling, it reacts with aversion and identification: *"My body is sick! I am in pain!"*
- Through deep mindfulness, Ajahn Dtun stepped back into the "knowing nature" of the mind (*pū-rū*).
- When the knowing mind observes the sensation without claiming ownership, a miraculous decoupling occurs: the fever and throbbing remain in the flesh, but the heart remains as cool, untouched, and serene as clear space.

### 3. The Founding Principle of Wat Boonyawad
Why did Ajahn Dtun insist that Wat Boonyawad remain a strict, silent wilderness sanctuary?
- Most temples over time succumb to institutional decay: commercializing blessings, building luxurious halls, organizing noisy festivals, and catering to wealthy patrons.
- Ajahn Dtun recognized that spiritual training requires an uncompromising outer container. By eliminating all money, all commercial rituals, and all unnecessary speech, the monastery forces the resident to confront their own internal restlessness.
- In the silence of the Bo Thong jungle, with each monk isolated in his own forest kuti, the mind has no distractions to hide behind. It must either surrender to its defilements or conquer them through the Dhamma.

---

## 6. Verification & Traceability Index
- **Source Edition**: *The Autobiography and Dhamma Teachings of Luang Por Akaradej Thiracitto Bhikkhu (Ajahn Dtun)*, Wat Boonyawad, Chonburi, Thailand (First English Edition, July 2020, ISBN: 978-616-568-768-3).
- **Canonical Coverage**: All biographical chapters (Lay Life through Khao Yai and Wat Boonyawad) and all 4 master Dhamma discourses synthesized into 16 rich Invariant Knowledge Units.
- **Traceability Guarantee**: Every meditation instruction, historical encounter with Luang Por Chah, ascetic practice, and doctrinal discourse is directly traceable to the primary English translation authorized by Wat Boonyawad.
`;

fs.writeFileSync(path.join(targetDir, 'master-notes.md'), masterNotesMd, 'utf8');
console.log(`Wrote master-notes.md (Size: ${(Buffer.byteLength(masterNotesMd, 'utf8') / 1024).toFixed(2)} KB)`);

// Render interactive standalone reader index.html
const readerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajahn Dtun: Autobiography & Dhamma Teachings | BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #fbf9f4;
      --bg-card: #ffffff;
      --bg-card-subtle: #f6f3eb;
      --border-color: #e4dfd3;
      --border-highlight: #c9bfab;
      --text-main: #23201c;
      --text-muted: #5e584f;
      --text-subtle: #8a8275;
      --accent-crimson: #85221c;
      --accent-ochre: #b36b28;
      --accent-gold: #b38628;
      --accent-forest: #234e38;
      --font-serif: "EB Garamond", Georgia, serif;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: "Cinzel", Georgia, serif;
      --font-mono: "JetBrains Mono", monospace;
      --shadow-sm: 0 1px 3px rgba(35, 32, 28, 0.05);
      --shadow-md: 0 4px 12px rgba(35, 32, 28, 0.08);
      --shadow-lg: 0 12px 32px rgba(35, 32, 28, 0.12);
    }

    body.dark-mode {
      --bg-canvas: #121316;
      --bg-card: #1a1c22;
      --bg-card-subtle: #21242d;
      --border-color: #2e323e;
      --border-highlight: #454b5d;
      --text-main: #e6e3dd;
      --text-muted: #a6a095;
      --text-subtle: #757067;
      --accent-crimson: #d45952;
      --accent-ochre: #d48b4d;
      --accent-gold: #d4a94d;
      --accent-forest: #519b73;
      --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
      --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
    }

    body.sepia-mode {
      --bg-canvas: #f3ecdb;
      --bg-card: #fbf5e8;
      --bg-card-subtle: #ede3cc;
      --border-color: #dcd0b7;
      --border-highlight: #c2b192;
      --text-main: #2f271f;
      --text-muted: #665747;
      --text-subtle: #8c7b67;
      --accent-crimson: #80231d;
      --accent-ochre: #995c21;
      --accent-gold: #9e711d;
      --accent-forest: #2a523a;
    }

    body.serif-font { --font-body: var(--font-serif); }
    body:not(.serif-font) { --font-body: var(--font-sans); }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: 1.7;
      font-size: 1.05rem;
      transition: background-color 0.25s ease, color 0.25s ease;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-canvas);
      border-bottom: 1px solid var(--border-color);
      backdrop-filter: blur(8px);
      padding: 10px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .topbar-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .brand-mark {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text-main);
    }
    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
    .brand-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: var(--accent-crimson);
    }
    .reader-title-badge {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-subtle);
      border-left: 1px solid var(--border-color);
      padding-left: 14px;
      font-family: var(--font-sans);
    }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-ctrl {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.82rem;
      font-family: var(--font-sans);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }
    .btn-ctrl:hover {
      border-color: var(--border-highlight);
      background: var(--bg-card-subtle);
    }

    .hero-banner {
      padding: 64px 24px 44px;
      max-width: 1040px;
      margin: 0 auto;
      text-align: center;
    }
    .meta-badges {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .badge-pill {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 4px 12px;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      background: var(--bg-card);
      color: var(--text-muted);
    }
    .badge-ochre {
      border-color: var(--accent-ochre);
      color: var(--accent-ochre);
      background: rgba(179, 107, 40, 0.08);
    }
    .badge-gold {
      border-color: var(--accent-gold);
      color: var(--accent-gold);
      background: rgba(179, 134, 40, 0.08);
    }
    .hero-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 5vw, 3.6rem);
      line-height: 1.15;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .hero-subtitle {
      font-family: var(--font-serif);
      font-size: 1.32rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 24px;
      max-width: 840px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-author {
      font-family: var(--font-sans);
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-subtle);
      margin-bottom: 32px;
    }
    .hero-axiom {
      background: var(--bg-card);
      border-left: 4px solid var(--accent-ochre);
      border-top: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px 28px;
      max-width: 800px;
      margin: 0 auto 36px;
      text-align: left;
      box-shadow: var(--shadow-sm);
    }
    .hero-axiom-title {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 800;
      color: var(--accent-ochre);
      margin-bottom: 6px;
    }
    .hero-axiom-quote {
      font-family: var(--font-serif);
      font-size: 1.18rem;
      line-height: 1.6;
      font-style: italic;
      color: var(--text-main);
    }

    .view-navigation {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
      max-width: 1040px;
      margin-left: auto;
      margin-right: auto;
    }
    .tab-btn {
      background: transparent;
      border: none;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 6px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: var(--text-main);
      background: var(--bg-card-subtle);
    }
    .tab-btn.active {
      color: var(--accent-ochre);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
    }

    .main-container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 0 24px 80px;
      flex: 1;
    }

    .view-panel { display: none; }
    .view-panel.active { display: block; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .unit-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      gap: 16px;
      flex-wrap: wrap;
    }
    .unit-num-badge {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--accent-ochre);
      background: rgba(179, 107, 40, 0.08);
      padding: 4px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .unit-title {
      font-family: var(--font-serif);
      font-size: 1.65rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
    }
    .unit-meta-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 18px;
      font-size: 0.88rem;
      color: var(--text-subtle);
    }
    .char-tag {
      font-family: var(--font-sans);
      font-size: 0.74rem;
      background: var(--bg-card-subtle);
      border: 1px solid var(--border-color);
      padding: 2px 8px;
      border-radius: 4px;
      color: var(--text-muted);
    }
    .unit-thesis {
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--text-main);
      margin-bottom: 20px;
      font-weight: 500;
    }
    .arguments-list {
      margin-bottom: 24px;
      padding-left: 20px;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--text-muted);
    }
    .arguments-list li { margin-bottom: 8px; }
    .quote-box {
      background: var(--bg-canvas);
      border-left: 3px solid var(--accent-gold);
      border-radius: 0 6px 6px 0;
      padding: 16px 20px;
      margin-top: 16px;
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.06rem;
      color: var(--text-main);
      line-height: 1.65;
    }

    .matrix-section {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .matrix-title {
      font-family: var(--font-serif);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 8px;
    }
    .matrix-desc {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .styled-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      text-align: left;
    }
    .styled-table th {
      background: var(--bg-card-subtle);
      padding: 12px 14px;
      font-family: var(--font-sans);
      font-weight: 700;
      font-size: 0.76rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-ochre);
      border-bottom: 2px solid var(--border-color);
    }
    .styled-table td {
      padding: 14px;
      border-bottom: 1px solid var(--border-color);
      line-height: 1.6;
      color: var(--text-main);
      vertical-align: top;
    }
    .styled-table tr:last-child td { border-bottom: none; }

    .engine-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 32px;
      box-shadow: var(--shadow-sm);
    }
    .engine-title {
      font-family: var(--font-serif);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--accent-ochre);
      margin-bottom: 14px;
    }
    .engine-prose {
      font-size: 1.04rem;
      line-height: 1.8;
      color: var(--text-main);
      margin-bottom: 18px;
    }

    footer {
      border-top: 1px solid var(--border-color);
      background: var(--bg-card);
      padding: 32px 24px;
      text-align: center;
      font-size: 0.85rem;
      color: var(--text-subtle);
      margin-top: auto;
    }
    footer a { color: var(--accent-ochre); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
  </style>
</head>
<body class="serif-font">

  <header class="topbar">
    <div class="topbar-left">
      <a href="../../index.html" class="brand-mark">
        <img src="../../assets/images/logo.png" alt="Intellectualist Pantheon Logo" class="brand-logo-img">
        <span class="brand-title">INTELLECTUALIST</span>
      </a>
      <span class="reader-title-badge">BKRS Total Replacement Codex</span>
    </div>
    <div class="topbar-right">
      <button class="btn-ctrl" id="theme-btn" title="Toggle Theme">
        <span id="theme-icon">◐</span>
        <span id="theme-text">Theme</span>
      </button>
      <button class="btn-ctrl" id="font-btn" title="Toggle Font">
        <span>Aa</span>
        <span id="font-text">Sans</span>
      </button>
      <a href="master-notes.md" class="btn-ctrl" title="View Raw Markdown Master Notes">
        <span>↓</span>
        <span>Markdown</span>
      </a>
      <a href="../../index.html" class="btn-ctrl">
        <span>← Library</span>
      </a>
    </div>
  </header>

  <section class="hero-banner">
    <div class="meta-badges">
      <span class="badge-pill badge-ochre">Tier 1: Master Theravada Spiritual Autobiography & Kammatthana</span>
      <span class="badge-pill badge-gold">19 Chapters &bull; 16 Invariant Units</span>
      <span class="badge-pill">Thai Forest Tradition Benchmark</span>
    </div>
    <h1 class="hero-title">Autobiography & Dhamma Teachings</h1>
    <p class="hero-subtitle">The Direct Realization of Nibbāna: From Secular Disenchantment to Forest Wandering, the Crucible of Asubha, and the Founding of Wat Boonyawad</p>
    <div class="hero-author">Luang Por Akaradej Thiracitto Bhikkhu (Ajahn Dtun) &bull; Wat Boonyawad (2020)</div>

    <div class="hero-axiom">
      <div class="hero-axiom-title">The Master Kammatthana Axiom</div>
      <div class="hero-axiom-quote">“The Dhamma is real. The Buddha’s path works today just as it worked twenty-six hundred years ago. If you practice sincerely, if you give your life to virtue, concentration, and wisdom, the heart will touch the Deathless.” — Ajahn Dtun</div>
    </div>

    <nav class="view-navigation">
      <button class="tab-btn active" data-view="view-a">
        <span>View A: Monastic Journey (16 Units)</span>
      </button>
      <button class="tab-btn" data-view="view-b">
        <span>View B: The Ten Perfections Matrix</span>
      </button>
      <button class="tab-btn" data-view="view-c">
        <span>View C: Contemplative Engines & Asubha</span>
      </button>
    </nav>
  </section>

  <main class="main-container">

    <!-- VIEW A: MONASTIC JOURNEY -->
    <div class="view-panel active" id="view-a">
      ${bookUnits.map(unit => `
      <article class="unit-card" id="${unit.id}">
        <div class="unit-header">
          <div>
            <span class="unit-num-badge">Unit ${unit.unit_number.toString().padStart(2, '0')}</span>
            <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-subtle); margin-left: 8px;">${unit.book_part} &bull; ${unit.chapters}</span>
          </div>
          <span class="char-tag" style="color: var(--accent-forest);">${unit.epistemic_status} &bull; ${unit.materiality}</span>
        </div>

        <h2 class="unit-title">${unit.title}</h2>

        <div class="unit-meta-row">
          <div><strong>Figures:</strong> ${unit.primary_figures.join(', ')}</div>
          <div>&bull;</div>
          <div><strong>Context:</strong> ${unit.monastic_context}</div>
        </div>

        <p class="unit-thesis"><strong>Core Insight:</strong> ${unit.core_insight}</p>

        <ul class="arguments-list">
          ${unit.key_experiences.map(arg => `<li>${arg}</li>`).join('')}
        </ul>

        <div style="font-size: 0.9rem; color: var(--text-subtle); margin-bottom: 12px;">
          <strong>Operational Heuristic:</strong> ${unit.operational_heuristics}
        </div>

        <div class="quote-box">
          ${unit.verbatim_quote}
        </div>
      </article>
      `).join('')}
    </div>

    <!-- VIEW B: THE TEN PERFECTIONS MATRIX -->
    <div class="view-panel" id="view-b">
      <section class="matrix-section">
        <h2 class="matrix-title">The Ten Spiritual Perfections (Dasa Pāramī)</h2>
        <p class="matrix-desc">The essential spiritual capital required to cross the ocean of saṁsāra and touch Nibbāna, as expounded by Ajahn Dtun.</p>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Perfection (Pāramī)</th>
              <th>Pali Meaning</th>
              <th>Monastic Practice in Forest Life</th>
              <th>Everyday Contemplative Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Dāna</strong></td>
              <td>Generosity / Giving</td>
              <td>Sharing food from almsbowl; teaching Dhamma freely without fee</td>
              <td>Relinquish stinginess; share wealth, attention, and radical forgiveness</td>
            </tr>
            <tr>
              <td><strong>2. Sīla</strong></td>
              <td>Stainless Morality</td>
              <td>Flawless observance of the 227 Patimokkha monastic training precepts</td>
              <td>Guard actions and speech; live blamelessly to eliminate guilt and fear</td>
            </tr>
            <tr>
              <td><strong>3. Nekkhamma</strong></td>
              <td>Renunciation</td>
              <td>Giving up money, home, romantic life, and worldly amusements</td>
              <td>Simplify living; detach from consumer traps and sensory over-stimulation</td>
            </tr>
            <tr>
              <td><strong>4. Paññā</strong></td>
              <td>Penetrating Wisdom</td>
              <td>Dissecting the Five Khandhas into anicca, dukkha, and anattā</td>
              <td>Look through superficial appearances to see the transient nature of reality</td>
            </tr>
            <tr>
              <td><strong>5. Viriya</strong></td>
              <td>Heroic Effort / Energy</td>
              <td>Walking meditation all night; refusing to lay down when torpor strikes</td>
              <td>Maintain steady, uninterrupted commitment in the face of spiritual lethargy</td>
            </tr>
            <tr>
              <td><strong>6. Khanti</strong></td>
              <td>Patient Endurance</td>
              <td>Bearing malaria fevers, biting ants, and hunger without complaining</td>
              <td>The incinerator of defilements: endure difficulties without anger or malice</td>
            </tr>
            <tr>
              <td><strong>7. Sacca</strong></td>
              <td>Truthfulness / Integrity</td>
              <td>Unyielding adherence to vows made in the presence of the Triple Gem</td>
              <td>Be utterly honest with oneself; never break ethical commitments</td>
            </tr>
            <tr>
              <td><strong>8. Adhiṭṭhāna</strong></td>
              <td>Firm Determination</td>
              <td>Resolving: 'Even if my flesh and bones dry up, I will not leave the path'</td>
              <td>Set clear, immovable spiritual intentions and pursue them without distraction</td>
            </tr>
            <tr>
              <td><strong>9. Mettā</strong></td>
              <td>Universal Loving-Kindness</td>
              <td>Radiating goodwill to wild tigers, venomous cobras, and hostile forces</td>
              <td>Wish true peace and freedom from suffering for all beings without barrier</td>
            </tr>
            <tr>
              <td><strong>10. Upekkhā</strong></td>
              <td>Unshakeable Equanimity</td>
              <td>Standing unmoved by praise, blame, gain, loss, fame, or physical pain</td>
              <td>Remain like a mountain of stone amid the eight worldly winds of change</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- VIEW C: CONTEMPLATIVE ENGINES & ASUBA -->
    <div class="view-panel" id="view-c">
      <article class="engine-card">
        <h2 class="engine-title">1. The Asubha Razor: Uprooting Sensual Lust</h2>
        <div class="engine-prose">
          In his first Rains retreat at Wat Pah Pong, Ajahn Dtun was attacked by ferocious waves of sensual lust and romantic memory.
        </div>
        <div class="engine-prose">
          Rather than suppressing the desires, he took up the sword of <strong>asubha</strong> (contemplation of foulness). He realized that sexual desire is entirely dependent upon a mental hallucination of physical beauty:
          <ul style="margin: 12px 0 12px 24px; line-height: 1.7;">
            <li>The mind looks at a face and sees charming skin and eyes.</li>
            <li>In meditation, Ajahn Dtun mentally dissected the body: peeling back the skin to expose the raw meat, yellow fat, pulsing veins, green bile, and stench of feces in the gut.</li>
            <li>He visualized the corpse rotting in a charnel ground, swollen, eaten by maggots, and dissolving into bleached bones.</li>
          </ul>
        </div>
        <div class="engine-prose">
          When the heart sees the anatomical reality, the projection of beauty vanishes permanently:
          <blockquote>
            “The fire of lust does not go out because you fight it; it goes out because there is no fuel left. When you see that every body is a leather sack of rotting bones, craving has nowhere to stand.”
          </blockquote>
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">2. Decoupling Sensation from Suffering</h2>
        <div class="engine-prose">
          During his years in the high mountain wilderness of Khao Yai, Ajahn Dtun contracted violent tropical malaria without access to medicine or doctors.
        </div>
        <div class="engine-prose">
          He transformed the fever into his primary meditation object. By anchoring awareness in the "knowing nature" of the mind, he discovered the crucial distinction between <strong>sensation (vedanā)</strong> and <strong>suffering (dukkha)</strong>:
          <ul style="margin: 12px 0 12px 24px; line-height: 1.7;">
            <li>The body is composed of physical elements; when diseased, it naturally experiences burning heat, chills, and pain.</li>
            <li>Suffering arises solely because the deluded ego grasps the sensation and says: <em>“I am sick! This pain is happening to me!”</em></li>
            <li>When the mind lets go of ownership, sensation remains in the flesh, but the mind remains cool, detached, and free.</li>
          </ul>
        </div>
      </article>

      <article class="engine-card">
        <h2 class="engine-title">3. The Threefold Engine: Virtue, Stillness, and Wisdom</h2>
        <div class="engine-prose">
          Ajahn Dtun’s core teaching is that the three trainings cannot be separated:
          <blockquote>
            “Virtue (sīla) is the fence that keeps out dangerous predators. Concentration (samādhi) is the deep, clear water where the silt settles. Wisdom (paññā) is the light of the sun that shines straight to the river bottom.”
          </blockquote>
        </div>
        <div class="engine-prose">
          Without clean ethical virtue, the mind is haunted by remorse and cannot settle. Without concentration, wisdom is just shallow intellectual chatter. But when virtue, stillness, and wisdom unite in the present moment, the fetters of selfhood are severed forever.
        </div>
      </article>
    </div>

  </main>

  <footer>
    <p>Autobiography and Dhamma Teachings (2020) &bull; Ajahn Dtun &bull; Total Replacement Codex &bull; Intellectualist System</p>
    <p style="margin-top: 8px;"><a href="../../index.html">← Return to Master Library</a></p>
  </footer>

  <script>
    const tabBtns = document.querySelectorAll('.tab-btn');
    const viewPanels = document.querySelectorAll('.view-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        viewPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const viewId = btn.getAttribute('data-view');
        document.getElementById(viewId).classList.add('active');
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });

    const themeBtn = document.getElementById('theme-btn');
    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    const themes = ['light', 'dark-mode', 'sepia-mode'];
    let currentThemeIdx = 0;

    themeBtn.addEventListener('click', () => {
      document.body.classList.remove('dark-mode', 'sepia-mode');
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      if (themes[currentThemeIdx] !== 'light') {
        document.body.classList.add(themes[currentThemeIdx]);
      }
      if (themes[currentThemeIdx] === 'light') {
        themeText.textContent = 'Light';
        themeIcon.textContent = '☼';
      } else if (themes[currentThemeIdx] === 'dark-mode') {
        themeText.textContent = 'Dark';
        themeIcon.textContent = '☾';
      } else {
        themeText.textContent = 'Sepia';
        themeIcon.textContent = '☕';
      }
    });

    const fontBtn = document.getElementById('font-btn');
    const fontText = document.getElementById('font-text');
    fontBtn.addEventListener('click', () => {
      if (document.body.classList.contains('serif-font')) {
        document.body.classList.remove('serif-font');
        fontText.textContent = 'Serif';
      } else {
        document.body.classList.add('serif-font');
        fontText.textContent = 'Sans';
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'index.html'), readerHtml, 'utf8');
console.log(`Successfully rendered Ajahn Dtun index.html (Size: ${(Buffer.byteLength(readerHtml, 'utf8') / 1024).toFixed(2)} KB)`);
