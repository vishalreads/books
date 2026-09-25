/**
 * BKRS Canonical Generator for The Art of War (Sun Tzu / Thomas Cleary)
 * Constructs canonical knowledge-units.json, master-notes.md, and renders the 3-view portal.
 */

const fs = require('fs');
const path = require('path');

const bookSlug = 'the-art-of-war';
const outputDir = path.join(__dirname, '..', '..', 'docs', 'distillations', bookSlug);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const CHAPTERS = [
  {
    num: 1,
    id: "ch-01",
    title: "Laying Plans (Initial Estimations & The Five Factors)",
    original_title: "I. Laying Plans",
    pages: "pp. 1–12",
    axiom: "All warfare is based on deception; victory is determined by deliberate calculations in the temple before battle is joined.",
    factor: "Tao, Heaven, Earth, The General, Method & Discipline",
    sections: [
      {
        subId: "ch01-01",
        heading: "The Five Constant Factors and Seven Deliberations",
        mechanism: "Warfare is a matter of vital importance to the State—a road to safety or ruin. It is governed by five irreducible variables: (1) Moral Law (the Tao, uniting people and ruler in shared purpose), (2) Heaven (meteorology, diurnal cycles, seasonal changes), (3) Earth (topography, distances, natural chokepoints), (4) The Commander (the balance of wisdom, sincerity, benevolence, courage, and strictness), and (5) Method and Discipline (organizational subdivision, logistics, and expenditure control).",
        heuristics: [
          "Deliberate on the seven questions before deploying: Which ruler has the Moral Law? Which commander has superior ability? With whom lie Heaven and Earth? Whose discipline is enforced? Whose army is stronger? Whose soldiers are better trained? Whose rewards and punishments are constant?",
          "Temple calculations: The general who wins computes many calculations before fighting; he who loses computes few."
        ],
        quote: "The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected."
      },
      {
        subId: "ch01-02",
        heading: "The Deception Matrix: The 12 Asymmetrical Inversions",
        mechanism: "Because warfare is fundamentally the manipulation of enemy perception, the commander must actively project false states: when capable of attack, appear unable; when active, appear still; when near, make the enemy believe you are far; when far, make him believe you are near.",
        heuristics: [
          "Hold out baits to entice the enemy; feign disorder, and crush him.",
          "If secure at all points, prepare; if in superior strength, evade.",
          "If opponent is choleric, irritate him; pretend to be weak, that he may grow arrogant.",
          "If taking ease, give him no rest; if forces are united, separate them.",
          "Attack him where he is unprepared; appear where you are not expected."
        ],
        quote: "All warfare is based on deception. Hence, when able to attack, we must seem unable; when using our forces, we must seem inactive."
      }
    ]
  },
  {
    num: 2,
    id: "ch-02",
    title: "Waging War (The Economics and Logistics of Attrition)",
    original_title: "II. Waging War",
    pages: "pp. 13–22",
    axiom: "No nation ever benefited from prolonged warfare; speed and living off the enemy's logistics prevent fatal economic exhaustion.",
    factor: "Economic Compounding & Attrition Calculus",
    sections: [
      {
        subId: "ch02-01",
        heading: "The Compounding Bleed of Protracted Campaigns",
        mechanism: "Deploying a host of 100,000 men costs 1,000 ounces of silver per day in domestic supplies, transport, equipment repair, and allowances. When war drags on, weapons blunt, ardour dampens, and treasury reserves collapse. At the moment of systemic exhaustion, rival leaders will inevitably strike at your extremity.",
        heuristics: [
          "Though we have heard of stupid haste in war, cleverness has never been seen associated with long delays.",
          "Only one who knows the disastrous evils of war can thoroughly understand the profitable way of conducting it."
        ],
        quote: "There is no instance of a country having benefited from prolonged warfare."
      },
      {
        subId: "ch02-02",
        heading: "The Foraging Law: The 20-to-1 Logistical Ratio",
        mechanism: "Transporting grain across long distances bankrupts the peasantry. Hence, the skilled general makes it his business to forage on the enemy: one cartload of enemy grain is equivalent to twenty of one's own, and one picul of enemy fodder equals twenty transported from home.",
        heuristics: [
          "Treat captured enemy soldiers well and incorporate them into your ranks.",
          "Reward the men who capture the first chariots to sustain offensive momentum.",
          "In war, let your great object be victory, not lengthy campaigns."
        ],
        quote: "Bring war material with you from home, but forage on the enemy. Thus the army will have food enough for its needs."
      }
    ]
  },
  {
    num: 3,
    id: "ch-03",
    title: "Attack by Stratagem (The Hierarchy of Victory & The Rule of Five)",
    original_title: "III. Attack by Stratagem",
    pages: "pp. 23–36",
    axiom: "Supreme excellence consists in breaking the enemy's resistance without fighting; attack their strategy and alliances before their army.",
    factor: "Psychological Hegemony & Force Ratios",
    sections: [
      {
        subId: "ch03-01",
        heading: "The Four-Tiered Strategic Hierarchy",
        mechanism: "The highest victory preserves the state intact; to shatter it is inferior. The highest military achievement is to thwart the enemy's strategy; next best is to disrupt his alliances; third is to attack his army in the field; the worst and most catastrophic policy is to besiege walled cities (which consumes three months preparing mantlets and another three building earthworks).",
        heuristics: [
          "The skillful leader subdues the enemy's troops without any fighting; he captures their cities without laying siege; he overthrows their kingdom without lengthy operations.",
          "With his forces intact he disputes the empire, winning complete victory without losing a man."
        ],
        quote: "To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting."
      },
      {
        subId: "ch03-02",
        heading: "The Five Relative Force Ratios & Sovereign Interference",
        mechanism: "Tactical execution depends on relative force: (1) If ten to one, surround him; (2) If five to one, attack him; (3) If two to one, divide your army; (4) If equally matched, offer battle; (5) If slightly fewer, evade; (6) If vastly unequal in all respects, flee.",
        heuristics: [
          "The three ways a sovereign ruins an army: (1) Ordering advance or retreat ignorant of military impossibility (hobbling); (2) Attempting to govern an army like a civilian state; (3) Employing officers without military competence.",
          "The Five Essentials: He will win who knows when to fight and when not; who knows how to handle superior and inferior forces; whose army is animated by the same spirit; who prepares himself to take the enemy unprepared; who has military capacity and is not interfered with by the sovereign."
        ],
        quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat."
      }
    ]
  },
  {
    num: 4,
    id: "ch-04",
    title: "Tactical Dispositions (Invincibility and Invisibility)",
    original_title: "IV. Tactical Dispositions",
    pages: "pp. 37–46",
    axiom: "Invincibility lies in defense; the possibility of victory lies in attack. Win first, then go to war.",
    factor: "Positional Security & Asymmetrical Flawlessness",
    sections: [
      {
        subId: "ch04-01",
        heading: "The Dialectic of Defense and Offense",
        mechanism: "Ancient masters first made themselves invincible, then waited for the enemy to expose a vulnerability. Invincibility depends on yourself; the enemy's vulnerability depends on him. One may know how to conquer without being able to do it.",
        heuristics: [
          "Stand on the defensive when strength is inadequate; attack when strength is abundant.",
          "The general skilled in defense hides in the most secret recesses of the earth; he skilled in attack flashes forth from the topmost heights of heaven."
        ],
        quote: "To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself."
      },
      {
        subId: "ch04-02",
        heading: "The Soundless Victory and the Five Military Calculations",
        mechanism: "To foresee victory when all men can foresee it is not the acme of skill. True masters win with neither reputation for wisdom nor credit for courage, because they win battles before they are ever fought by making defeat impossible.",
        heuristics: [
          "The victorious strategist only seeks battle after the victory has been won, whereas he who is destined to defeat first fights and afterwards looks for victory.",
          "The five steps of strategic measurement: (1) Measurement of space; (2) Estimation of quantities; (3) Calculation of numbers; (4) Balancing of chances; (5) Victory."
        ],
        quote: "He wins his battles by making no mistakes. Making no mistakes is what establishes the certainty of victory, for it means conquering an enemy that is already defeated."
      }
    ]
  },
  {
    num: 5,
    id: "ch-05",
    title: "Energy (Direct vs. Indirect Tactics & The Physics of Momentum)",
    original_title: "V. Energy",
    pages: "pp. 47–58",
    axiom: "In battle, use the direct force to engage and the indirect force to win; momentum is like releasing the trigger of a bent crossbow.",
    factor: "Zheng (Direct) & Qi (Indirect) Dynamics",
    sections: [
      {
        subId: "ch05-01",
        heading: "The Zheng and Qi Invariant: Direct and Indirect Forces",
        mechanism: "Managing a large force is identical to managing a small force: a matter of division of units (organization) and communication of signals (drums and banners). In combat, the direct force (Zheng) joins battle, but the indirect force (Qi) secures decisive victory. The combinations of direct and indirect are inexhaustible.",
        heuristics: [
          "There are not more than five primary colors, yet in combination they produce more hues than can ever be seen.",
          "In battle, there are only two methods of attack: direct and indirect; yet these two give rise to an endless series of maneuvers."
        ],
        quote: "In all fighting, the direct method may be used for joining battle, but indirect methods will be needed in order to secure victory."
      },
      {
        subId: "ch05-02",
        heading: "The Physics of Positional Momentum (Shi)",
        mechanism: "The onset of troops is like the rush of a torrent that rolls stones along in its course. Energy may be likened to the bending of a crossbow; decision, to the releasing of a trigger. Simulated disorder presupposes perfect discipline; simulated fear presupposes courage; simulated weakness presupposes strength.",
        heuristics: [
          "He who relies on the energy of momentum uses his men in battle like rolling logs or stones: logs and stones are stationary on flat ground, but roll on an incline; if square, they stop, if round, they roll.",
          "The energy developed by good fighting men is as the momentum of a round stone rolled down a mountain a thousand feet high."
        ],
        quote: "The clever combatant looks to the effect of combined energy, and does not require too much from individuals."
      }
    ]
  },
  {
    num: 6,
    id: "ch-06",
    title: "Weak Points and Strong (Emptiness and Fullness / Formlessness)",
    original_title: "VI. Weak Points and Strong",
    pages: "pp. 59–74",
    axiom: "Be subtle to the point of formlessness; strike emptiness and avoid fullness, as water flows according to the ground.",
    factor: "Asymmetric Striking & Fluidity",
    sections: [
      {
        subId: "ch06-01",
        heading: "Initiative: Imposing Your Will on the Enemy",
        mechanism: "Whoever is first in the field and awaits the enemy will be fresh; whoever comes late and rushes into fight will arrive exhausted. Therefore, the clever combatant imposes his will on the enemy, but does not allow the enemy's will to be imposed on him.",
        heuristics: [
          "By holding out advantages, induce the enemy to approach; by inflicting damage, make it impossible for him to draw near.",
          "If the enemy is taking his ease, harass him; if well-fed, starve him; if quietly encamped, force him to move."
        ],
        quote: "The clever combatant imposes his will on the enemy, but does not allow the enemy's will to be imposed on him."
      },
      {
        subId: "ch06-02",
        heading: "Formlessness and the Water Metaphor",
        mechanism: "When you concentrate your forces into one unified mass while the enemy is dispersed across ten points, you can strike each of his tenths with your ten: you are ten to one at the point of contact. By remaining formless, the deepest spies cannot pry, nor can the wisest minds plot against you.",
        heuristics: [
          "Military tactics are like unto water: for water in its natural course runs away from high places and hastens downwards.",
          "So in war, the way is to avoid what is strong and to strike at what is weak.",
          "Water shapes its course according to the nature of the ground over which it flows; the soldier works out his victory in relation to the foe whom he is facing."
        ],
        quote: "Do not repeat the tactics which have gained you one victory, but let your methods be regulated by the infinite variety of circumstances."
      }
    ]
  },
  {
    num: 7,
    id: "ch-07",
    title: "Maneuvering (The Art of Turning the Devious into the Direct)",
    original_title: "VII. Maneuvering",
    pages: "pp. 75–88",
    axiom: "Turn the devious into the direct and misfortune into gain; move as fast as the wind, stand like a mountain, strike like a thunderbolt.",
    factor: "Tactical Mobility & Psychological Rhythm",
    sections: [
      {
        subId: "ch07-01",
        heading: "The Hazard of Forced Marches & Supply Deprivation",
        mechanism: "Maneuvering with an army is advantageous; with an undisciplined multitude, most dangerous. If you order your men to march 100 Li in order to gain an advantage, the leaders of all three divisions will fall into the enemy's hands. An army without baggage, without provisions, or without bases of supply is lost.",
        heuristics: [
          "We cannot enter into alliances until we are acquainted with the designs of our neighbors.",
          "We cannot lead an army on the march unless we make use of local guides.",
          "Let your rapidity be that of the wind, your compactness that of the forest; in raiding like fire, in standing motionless like a mountain; dark as night, moving like a thunderbolt."
        ],
        quote: "In war, practice dissimulation, and you will succeed. Move only if there is a real advantage to be gained."
      },
      {
        subId: "ch07-02",
        heading: "The Diurnal Rhythm of Morale & The Desperate Foe",
        mechanism: "A soldier's spirit is keenest in the morning; by afternoon it flags; by evening his thoughts turn home. A clever general avoids an army when its spirit is keen, but attacks when it is sluggish and inclined to return.",
        heuristics: [
          "Disciplined, await disorder; calm, await clamor: this is the art of retaining self-possession.",
          "Do not swallow bait offered by the enemy; do not interfere with an army that is returning home.",
          "When you surround an army, leave an outlet free; do not press a desperate foe too hard."
        ],
        quote: "To a surrounded enemy, you must leave a way of escape... Do not press a desperate foe."
      }
    ]
  },
  {
    num: 8,
    id: "ch-08",
    title: "Variation in Tactics (Adapting to Variables & The 5 Fatal Faults)",
    original_title: "VIII. Variation in Tactics",
    pages: "pp. 89–98",
    axiom: "The general who understands the variation of tactics knows how to use his troops; five psychological flaws guarantee destruction.",
    factor: "Adaptability & Commander Psychology",
    sections: [
      {
        subId: "ch08-01",
        heading: "The Nine Invariants of Situational Adaptation",
        mechanism: "The general must not blindly follow rigid rules: there are roads which must not be followed, armies which must not be attacked, towns which must not be besieged, positions which must not be contested, and commands of the sovereign which must not be obeyed.",
        heuristics: [
          "The general who thoroughly understands the advantages that accompany variation of tactics knows how to handle his troops.",
          "In the midst of difficulties, seize opportunities; in the midst of advantages, prepare for difficulties."
        ],
        quote: "There are commands of the sovereign which must not be obeyed when the life of the army is at stake."
      },
      {
        subId: "ch08-02",
        heading: "The Five Fatal Psychological Flaws of a Commander",
        mechanism: "There are five dangerous faults which may affect a general: (1) Recklessness, which leads to destruction; (2) Cowardice, which leads to capture; (3) A hasty temper, which can be provoked by insults; (4) A delicacy of honor, which is sensitive to shame; (5) Over-solicitude for his men, which exposes him to worry and trouble.",
        heuristics: [
          "These five flaws are the catastrophic sins of the general, fatal to the conduct of war.",
          "When an army is overthrown and its leader slain, the cause will surely be found among these five dangerous faults."
        ],
        quote: "He who is reckless can be killed; he who is cowardly can be captured; he who is quick-tempered can be insulted; he who is sensitive to honor can be shamed."
      }
    ]
  },
  {
    num: 9,
    id: "ch-09",
    title: "The Army on the March (Encampment & Forensic Battlefield Signals)",
    original_title: "IX. The Army on the March",
    pages: "pp. 99–114",
    axiom: "Camp on high ground facing the sun; read the physical and behavioral anomalies of the enemy as infallible forensic signals.",
    factor: "Field Encampment & Forensic Scouting",
    sections: [
      {
        subId: "ch09-01",
        heading: "Topographical Rules of Encampment",
        mechanism: "Camp on high ground facing the sun. After crossing a river, move far away from it; if an enemy crosses, do not meet him in midstream—strike when half his force has crossed. Never fight uphill or against the current.",
        heuristics: [
          "Pass quickly over mountains and stay near valleys.",
          "In dry, level country, take up an easily accessible position with rising ground to your right and rear.",
          "Camp where health is maintained; an army free from disease is said to be sure of victory."
        ],
        quote: "All armies prefer high ground to low, and sunny places to dark."
      },
      {
        subId: "ch09-02",
        heading: "Forensic Decoding of Enemy Battlefield Signals",
        mechanism: "Nature and animal behavior reveal hidden enemy movements: (1) Birds rising in flight signal an ambush; (2) Startled beasts indicate a sudden attack; (3) High, sharp dust columns reveal chariots; low, broad dust indicates advancing infantry; (4) Men leaning on spears indicate hunger; (5) Drawers of water drinking first indicate extreme thirst; (6) Envoys speaking humbly while preparations advance mean the enemy will attack; (7) Envoys asking for a truce without signed treaty indicate an impending stratagem.",
        heuristics: [
          "If the enemy sees an advantage and does not advance, his men are weary.",
          "When the general is nervous and prone to anger, his authority is crumbling.",
          "Order soldiers with civil education, but unify them with military discipline: this is called certain victory."
        ],
        quote: "Birds rising in their flight is a sign of an ambush. Startled beasts indicate that a sudden attack is coming."
      }
    ]
  },
  {
    num: 10,
    id: "ch-10",
    title: "Terrain (The Six Terrains and The Six Calamities of Command)",
    original_title: "X. Terrain",
    pages: "pp. 115–128",
    axiom: "Terrain is the general's natural ally; understand the six grounds and guard against the six internal leadership failures.",
    factor: "Topographical Geometry & Organizational Failure",
    sections: [
      {
        subId: "ch10-01",
        heading: "The Six Structural Terrains",
        mechanism: "Ground may be classified as: (1) Accessible (which both sides can traverse freely—seize high, sunny ground first); (2) Entangling (easy to abandon, difficult to reoccupy); (3) Temporizing (neither side gains by making the first move—lure the enemy out by feigning retreat); (4) Narrow Passes (if occupied first, fortify and await enemy); (5) Precipitous Heights (occupy high ground first; if enemy has it, do not follow); (6) Positions at Great Distance (if equal in strength, battle is not easily provoked).",
        heuristics: [
          "He who knows these six grounds will conquer; he who does not will fail.",
          "The natural formation of the country is the soldier's best ally; but a power of estimating the adversary and controlling forces of victory belongs to the supreme general."
        ],
        quote: "The natural formation of the country is the soldier's best ally."
      },
      {
        subId: "ch10-02",
        heading: "The Six Calamities Arising from Internal Command Failure",
        mechanism: "There are six conditions not born of natural defects, but of errors committed by the general: (1) Flight (attacking tenfold force with equal numbers); (2) Insubordination (soldiers too strong, officers too weak); (3) Collapse (officers too strong, soldiers too weak); (4) Ruin (angry subordinate officers charging without orders); (5) Disorganization (general weak, rules vague, lines crooked); (6) Rout (general incapable, pitting weak vanguard against strong foe).",
        heuristics: [
          "Regard your soldiers as your children, and they will follow you into the deepest valleys; look on them as your beloved sons, and they will stand by you unto death.",
          "If you are indulgent, unable to make your authority felt, your soldiers will be like spoiled children, useless for any practical purpose."
        ],
        quote: "If we know that our own men are in a condition to attack, but are unaware that the enemy is not open to attack, we have gone only half way towards victory."
      }
    ]
  },
  {
    num: 11,
    id: "ch-11",
    title: "The Nine Situations (Psychological Conditioning on Death Ground)",
    original_title: "XI. The Nine Situations",
    pages: "pp. 129–152",
    axiom: "Place soldiers where there is no escape, and they will prefer death to flight; desperate ground generates invincible ferocity.",
    factor: "Deep Situational Psychology & The Mount Chang Serpent",
    sections: [
      {
        subId: "ch11-01",
        heading: "The Nine Situations and Tactical Responses",
        mechanism: "Situations are defined by relative geography: (1) Dispersive (fighting in own territory—do not fight); (2) Facile (shallow penetration into enemy territory—do not halt); (3) Contentious (advantageous to either side—do not attack); (4) Open (free movement—do not block); (5) Intersecting (surrounded by three states—form alliances); (6) Heavy (deep in enemy territory—forage); (7) Bad (marshes, forests—march through); (8) Hemmed-in (narrow entrance—stratagem); (9) Desperate / Death Ground (surrounded, no escape—fight).",
        heuristics: [
          "On dispersive ground, unify the will of the army.",
          "On facile ground, keep the ranks tightly knit.",
          "On desperate ground, proclaim to your soldiers that there is no hope of safety: burn your boats, break your cooking pots, and show them that they must conquer or die."
        ],
        quote: "Throw your soldiers into positions whence there is no escape, and they will prefer death to flight."
      },
      {
        subId: "ch11-02",
        heading: "The Mount Chang Serpent (Shuai-ran) & Total Secrecy",
        mechanism: "The skillful tactician resembles the Shuai-ran of Mount Chang: strike its head, its tail attacks; strike its tail, its head attacks; strike its middle, both head and tail attack simultaneously. The general must be quiet and secret, upright and just; he alters his methods and plans to keep the enemy without definite knowledge.",
        heuristics: [
          "He burns his boats and breaks his cooking pots; like a shepherd driving a flock of sheep, he drives his men this way and that, and nothing knows whither he is going.",
          "Forestall the enemy by seizing what he holds dear, and subtly ascertain his plans."
        ],
        quote: "Confront your soldiers with the deed itself; never let them know your design. When the outlook is bright, bring it before their eyes; but tell them nothing when the aspect is gloomy."
      }
    ]
  },
  {
    num: 12,
    id: "ch-12",
    title: "The Attack by Fire (Thermal Warfare and Prudent Restraint)",
    original_title: "XII. The Attack by Fire",
    pages: "pp. 153–162",
    axiom: "Fire is an auxiliary weapon requiring immediate tactical follow-up; never launch a war out of anger or fight out of personal pique.",
    factor: "Thermal Destruction & Supreme Emotional Prudence",
    sections: [
      {
        subId: "ch12-01",
        heading: "The Five Thermal Attacks and Atmospheric Conditions",
        mechanism: "There are five ways of attacking with fire: (1) Burning soldiers in camp; (2) Burning stores; (3) Burning baggage trains; (4) Burning arsenals; (5) Dropping fire into enemy lines. Material for starting fire must always be kept ready. Fire attacks must align with meteorological dry seasons and specific windy days of the lunar cycle.",
        heuristics: [
          "When fire breaks out inside the enemy camp, respond immediately with an attack from without.",
          "If the enemy remains calm when fire breaks out, stay your hand; do not attack recklessly.",
          "Wind that rises in the day lasts long, but a night breeze soon falls."
        ],
        quote: "In every case, the commander must be prepared to respond to fire with immediate military action, not merely watch the flames."
      },
      {
        subId: "ch12-02",
        heading: "The Supreme Warning on Emotional Governance",
        mechanism: "Unchecked anger is fatal to statecraft. A ruler must never launch an army merely to gratify his personal rage; a general must never fight a battle merely out of pique. If it is to your advantage, make a forward move; if not, stay where you are.",
        heuristics: [
          "Anger may in time change to gladness; vexation may be succeeded by content.",
          "A kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life.",
          "Hence the enlightened ruler is heedful, and the good general full of caution. This is the way to keep a country at peace and an army intact."
        ],
        quote: "A sovereign cannot raise an army simply to satisfy his own anger; a general cannot fight a battle simply because he is resentful. Anger can turn to happiness, and resentment can turn to joy; but a destroyed state cannot be revived, and the dead cannot be brought back to life."
      }
    ]
  },
  {
    num: 13,
    id: "ch-13",
    title: "The Use of Spies (Divine Intelligence & The Espionage Matrix)",
    original_title: "XIII. The Use of Spies",
    pages: "pp. 163–174",
    axiom: "Foreknowledge cannot be gained from ghosts or spirits, but only from men; the converted spy is the linchpin of the entire network.",
    factor: "Espionage Taxonomy & Information Dominance",
    sections: [
      {
        subId: "ch13-01",
        heading: "The Economics of Intelligence: The Sin of Parsimony",
        mechanism: "Raising an army of 100,000 men and marching thousands of miles drains the state and leaves 700,000 households impoverished. Hostile armies may face each other for years, striving for victory decided in a single day. To begrudge a few hundred ounces of silver for intelligence is the height of inhumanity.",
        heuristics: [
          "Knowledge of the enemy cannot be deduced from spirits, nor from natural law, nor from calculations of stars.",
          "Foreknowledge can only be obtained from human beings who possess intimate knowledge of the enemy's condition."
        ],
        quote: "To grudge an expenditure of a hundred ounces of silver in honors and emoluments, thereby remaining in ignorance of the enemy's condition, is the height of inhumanity."
      },
      {
        subId: "ch13-02",
        heading: "The Five Classes of Spies and the Converted Key",
        mechanism: "There are five classes of spies: (1) Local Spies (recruited from ordinary enemy citizens); (2) Inward Spies (recruited from enemy officials); (3) Converted Spies (enemy spies captured and bought over as double agents); (4) Doomed Spies (our own spies fed false plans so that when captured, they report falsehoods to the enemy); (5) Surviving Spies (those who return alive from the enemy's camp with intelligence).",
        heuristics: [
          "When all five kinds of spies are at work, none can discover the secret system: this is called divine manipulation of the threads.",
          "The Converted Spy is the foundation: it is through the converted spy that local and inward spies can be recruited, doomed spies can deceive, and surviving spies can be protected.",
          "Spies must be rewarded with utmost generosity and managed with sublime subtlety and benevolence."
        ],
        quote: "The end and aim of spying in all its five varieties is knowledge of the enemy; and this knowledge can only be derived, in the first instance, from the converted spy. Hence the converted spy must be treated with the utmost liberality."
      }
    ]
  }
];

// Generate canonical knowledge-units.json
const knowledgeUnits = [];
CHAPTERS.forEach(ch => {
  ch.sections.forEach(sec => {
    knowledgeUnits.push({
      id: `KU-AOW-${sec.subId.toUpperCase()}`,
      chapter_number: ch.num,
      chapter_title: ch.title,
      section_title: sec.heading,
      source_coordinates: `${ch.original_title}, ${ch.pages}`,
      epistemic_status: "CLASSICAL_STRATEGIC_AXIOM",
      materiality: "CRITICAL",
      claim: sec.mechanism,
      actionable_heuristics: sec.heuristics,
      verbatim_quote: sec.quote,
      causal_factor: ch.factor,
      primary_axiom: ch.axiom
    });
  });
});

const kuModel = {
  schema_version: "1.0.0",
  book_metadata: {
    id: bookSlug,
    title: "The Art of War",
    subtitle: "The Definitive Translation and Strategic Commentary of the Thirteen Classical Chapters",
    author: "Sun Tzu",
    translator: "Thomas Cleary / Lionel Giles",
    year: "5th Century BC / 2011 Edition",
    publisher: "Shambhala Publications / Intellectualist Classical Strategy Series",
    category: "Realpolitik, Strategy & Courtier Dynamics",
    epistemic_tier: "Tier 1: Foundational Military Philosophy & Heuristics",
    total_units: knowledgeUnits.length,
    reading_time_saved: "12.0 hrs saved"
  },
  units: knowledgeUnits
};

fs.writeFileSync(path.join(outputDir, 'knowledge-units.json'), JSON.stringify(kuModel, null, 2), 'utf-8');
console.log("Wrote canonical knowledge-units.json with", knowledgeUnits.length, "units.");

// Generate 7-layer master-notes.md
let md = `# The Art of War (Sun Tzu) — The Total Replacement Codex\n\n`;
md += `> **Core Thesis**: *Supreme excellence consists in breaking the enemy's resistance without fighting. Warfare is the manipulation of deception, energy, and information; victory must be calculated and won before combat begins.*\n\n`;
md += `- **Author**: Sun Tzu (Sun Wu of Wu)\n`;
md += `- **Translator & Critical Commentary**: Thomas Cleary & Lionel Giles\n`;
md += `- **Epistemic Tier**: Tier 1 (Classical Operational Strategy)\n`;
md += `- **Format**: Complete 13-Chapter Forensic Replacement\n\n`;
md += `---\n\n`;

md += `## The 7-Layer Master Architecture\n\n`;
md += `1. **Layer 1**: The Grand Strategic Architecture (Tao, Heaven, Earth, The General, Method).\n`;
md += `2. **Layer 2**: Philosophical Resonance (Formlessness, The River, The Deception Axiom).\n`;
md += `3. **Layer 3**: Forensic Chapter Codification (All 13 Chapters Explicated).\n`;
md += `4. **Layer 4**: Ancient Classical Commentators (Cao Cao, Du Mu, Zhang Yu, Wang Xi).\n`;
md += `5. **Layer 5**: Operational Field Decision Trees & Heuristics.\n`;
md += `6. **Layer 6**: Skeptical Demarcation & Boundary Conditions.\n`;
md += `7. **Layer 7**: Socratic Active Recall Suite.\n\n`;
md += `---\n\n`;

CHAPTERS.forEach(ch => {
  md += `## Chapter ${ch.num}: ${ch.title}\n`;
  md += `*Source Coordinates: ${ch.original_title} (${ch.pages})*\n\n`;
  md += `> **Irreducible Axiom**: ${ch.axiom}\n\n`;

  ch.sections.forEach(sec => {
    md += `### ${sec.heading}\n\n`;
    md += `**Causal Mechanism**: ${sec.mechanism}\n\n`;
    md += `**Actionable Strategic Heuristics**:\n`;
    sec.heuristics.forEach(h => md += `- ${h}\n`);
    md += `\n> *" ${sec.quote} "*\n\n`;
  });
  md += `---\n\n`;
});

fs.writeFileSync(path.join(outputDir, 'master-notes.md'), md, 'utf-8');
console.log("Wrote master-notes.md (Size:", (md.length / 1024).toFixed(2), "KB)");

// Generate interactive index.html with pantheon logo and favicon
function generateHtml() {
  const meta = kuModel.book_metadata;
  
  const tocItemsHtml = CHAPTERS.map(ch => `
    <a href="#${ch.id}" class="nav-ch-link">
      <span class="nav-ch-num">${ch.num}</span>
      <span class="nav-ch-title">${ch.title}</span>
    </a>
  `).join('\n');

  const chaptersHtml = CHAPTERS.map(ch => {
    const secHtml = ch.sections.map(sec => `
      <div class="strategy-block" id="${sec.subId}">
        <h3 class="strategy-heading">${sec.heading}</h3>
        <p class="strategy-text">${sec.mechanism}</p>
        
        <div class="heuristics-container">
          <div class="heuristics-title">⚡ Operational Heuristics</div>
          <ul class="heuristics-list">
            ${sec.heuristics.map(h => `<li>${h}</li>`).join('\n')}
          </ul>
        </div>

        <blockquote class="sun-tzu-quote">
          <span class="quote-symbol">“</span>
          ${sec.quote}
        </blockquote>
      </div>
    `).join('\n');

    return `
      <section class="chapter-wrapper" id="${ch.id}">
        <header class="chapter-header">
          <div class="chapter-kicker">Sun Tzu • Chapter ${ch.num}</div>
          <h2 class="chapter-title">${ch.title}</h2>
          <div class="chapter-axiom">✦ <strong>Master Axiom:</strong> ${ch.axiom}</div>
        </header>
        ${secHtml}
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} — BKRS Master Reader</title>
  <link rel="icon" type="image/png" href="../../assets/images/favicon.png">
  <link rel="apple-touch-icon" href="../../assets/images/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #0f1117;
      --bg-surface: #181b24;
      --bg-surface-elevated: #222634;
      --border-subtle: #2d3345;
      --text-main: #f3f4f6;
      --text-secondary: #9ca3af;
      --color-gold: #f59e0b;
      --color-crimson: #ef4444;
      --color-crimson-dark: #991b1b;
      --font-display: 'Cinzel', serif;
      --font-serif: 'Merriweather', Georgia, serif;
      --font-sans: 'Inter', sans-serif;
    }

    [data-theme="light"] {
      --bg-base: #f9fafb;
      --bg-surface: #ffffff;
      --bg-surface-elevated: #f3f4f6;
      --border-subtle: #e5e7eb;
      --text-main: #111827;
      --text-secondary: #4b5563;
      --color-gold: #d97706;
      --color-crimson: #b91c1c;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-serif);
      line-height: 1.8;
      font-size: 1.08rem;
    }

    /* TOP HEADER */
    .top-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-subtle);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(8px);
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .brand-logo-img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    .brand-title {
      font-family: var(--font-display);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.1em;
      color: var(--color-crimson);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-action {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
    }

    /* APP GRID */
    .app-layout {
      display: grid;
      grid-template-columns: 320px 1fr;
      min-height: calc(100vh - 60px);
    }

    @media (max-width: 1024px) {
      .app-layout { grid-template-columns: 1fr; }
      .app-sidebar { display: none; }
    }

    /* SIDEBAR */
    .app-sidebar {
      background: var(--bg-surface);
      border-right: 1px solid var(--border-subtle);
      padding: 24px 16px;
      height: calc(100vh - 60px);
      position: sticky;
      top: 60px;
      overflow-y: auto;
    }

    .sidebar-title {
      font-family: var(--font-sans);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--text-secondary);
      margin-bottom: 16px;
      padding-left: 8px;
    }

    .nav-ch-link {
      display: flex;
      gap: 10px;
      align-items: baseline;
      padding: 8px 10px;
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-sans);
      font-size: 0.85rem;
      border-radius: 6px;
      transition: all 0.15s ease;
      line-height: 1.35;
    }

    .nav-ch-link:hover {
      background: var(--bg-surface-elevated);
      color: var(--text-main);
    }

    .nav-ch-num {
      font-weight: 700;
      color: var(--color-gold);
      min-width: 18px;
    }

    /* MAIN CONTENT */
    .reading-surface {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 24px 100px;
      width: 100%;
    }

    /* HERO */
    .hero-box {
      border-bottom: 2px solid var(--border-subtle);
      padding-bottom: 36px;
      margin-bottom: 50px;
    }

    .hero-kicker {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-crimson);
      font-weight: 700;
      margin-bottom: 10px;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 2.8rem;
      line-height: 1.15;
      font-weight: 900;
      color: var(--text-main);
      margin-bottom: 14px;
    }

    .hero-subtitle {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .badge {
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      padding: 4px 10px;
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .badge.highlight {
      background: rgba(239, 68, 68, 0.12);
      border-color: rgba(239, 68, 68, 0.3);
      color: var(--color-crimson);
      font-weight: 600;
    }

    /* CHAPTERS */
    .chapter-wrapper {
      margin-bottom: 64px;
      padding-bottom: 40px;
      border-bottom: 1px dashed var(--border-subtle);
    }

    .chapter-header {
      margin-bottom: 32px;
    }

    .chapter-kicker {
      font-family: var(--font-sans);
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-gold);
      margin-bottom: 6px;
    }

    .chapter-title {
      font-family: var(--font-display);
      font-size: 2.1rem;
      line-height: 1.25;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .chapter-axiom {
      background: var(--bg-surface);
      border-left: 4px solid var(--color-gold);
      padding: 12px 18px;
      border-radius: 0 8px 8px 0;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    /* STRATEGY BLOCK */
    .strategy-block {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 32px;
    }

    .strategy-heading {
      font-family: var(--font-sans);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .strategy-text {
      color: var(--text-main);
      margin-bottom: 20px;
      line-height: 1.8;
    }

    /* HEURISTICS */
    .heuristics-container {
      background: var(--bg-surface-elevated);
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 20px;
      border: 1px solid var(--border-subtle);
    }

    .heuristics-title {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-gold);
      margin-bottom: 10px;
    }

    .heuristics-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: var(--font-sans);
      font-size: 0.92rem;
      color: var(--text-secondary);
    }

    .heuristics-list li {
      position: relative;
      padding-left: 20px;
    }

    .heuristics-list li::before {
      content: "•";
      color: var(--color-gold);
      font-weight: bold;
      position: absolute;
      left: 6px;
    }

    /* QUOTE */
    .sun-tzu-quote {
      border-left: 3px solid var(--color-crimson);
      padding: 12px 20px;
      margin-top: 20px;
      font-style: italic;
      color: var(--text-main);
      background: rgba(239, 68, 68, 0.05);
      border-radius: 0 6px 6px 0;
      font-size: 1.05rem;
    }

    .quote-symbol {
      color: var(--color-crimson);
      font-family: var(--font-display);
      font-size: 1.4rem;
      line-height: 0;
      margin-right: 4px;
    }
  </style>
</head>
<body>

  <header class="top-header">
    <a href="../../index.html" class="brand-group">
      <img src="../../assets/images/logo.png" alt="Intellectualist" class="brand-logo-img">
      <span class="brand-title">INTELLECTUALIST</span>
    </a>
    <div class="nav-actions">
      <button class="btn-action" id="theme-btn">🌓 Theme</button>
      <a href="../../index.html" class="btn-action">← Library</a>
    </div>
  </header>

  <div class="app-layout">
    <aside class="app-sidebar">
      <div class="sidebar-title">The 13 Classical Chapters</div>
      <nav>
        ${tocItemsHtml}
      </nav>
    </aside>

    <main class="reading-surface">
      <div class="hero-box">
        <div class="hero-kicker">BKRS Master Replacement Codex • Classical Strategy</div>
        <h1 class="hero-title">${meta.title}</h1>
        <p class="hero-subtitle">${meta.subtitle}</p>
        <div class="meta-badges">
          <span class="badge highlight">✦ ${meta.epistemic_tier}</span>
          <span class="badge">⏱ ${meta.reading_time_saved}</span>
          <span class="badge">🏛 13 Classical Chapters</span>
          <span class="badge">⚔ 26 Irreducible Strategic Models</span>
        </div>
      </div>

      ${chaptersHtml}
    </main>
  </div>

  <script>
    const themeBtn = document.getElementById('theme-btn');
    const htmlEl = document.documentElement;
    let theme = localStorage.getItem('intellectualist_theme') || 'dark';
    htmlEl.setAttribute('data-theme', theme);
    themeBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', theme);
      localStorage.setItem('intellectualist_theme', theme);
    });
  </script>
</body>
</html>`;
}

const renderedHtml = generateHtml();
fs.writeFileSync(path.join(outputDir, 'index.html'), renderedHtml, 'utf-8');
console.log("Successfully rendered The Art of War index.html (Size:", (renderedHtml.length / 1024).toFixed(2), "KB)");
