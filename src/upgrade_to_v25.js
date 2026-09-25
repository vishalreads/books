const fs = require('fs');
const path = require('path');

const kuPath = path.join(__dirname, '..', 'docs', 'distillations', 'norwegian-wood', 'knowledge-units.json');
const data = JSON.parse(fs.readFileSync(kuPath, 'utf8'));

data.system_version = "BKRS-V2.5-Canonical";
data.reconstruction_metadata.epistemic_standard = "Strict separation of source facts, narrator observations, character beliefs, interpretations, and external analytical lenses; materiality taxonomy integrated";
data.reconstruction_metadata.canonical_status = "CANONICAL — CONTENTUAL SUBSTITUTION READY";

// Map materiality for all 36 scenes
const materialityMap = {
  "SCENE-NW-01-01": {
    materiality: "critical",
    reason: "Narrative framing event; introduces central psychological trigger and lifelong promise."
  },
  "SCENE-NW-01-02": {
    materiality: "critical",
    reason: "Introduces central metaphor of the bottomless well and Naoko's core terror."
  },
  "SCENE-NW-01-03": {
    materiality: "important",
    reason: "Establishes narrative purpose as memory retrieval and monument against forgetting."
  },
  "SCENE-NW-02-01": {
    materiality: "critical",
    reason: "Establishes structural dynamic of the Kobe triad and Toru's role as external bridge."
  },
  "SCENE-NW-02-02": {
    materiality: "critical",
    reason: "Kizuki's final afternoon; establishes unannounced nature of his suicide."
  },
  "SCENE-NW-02-03": {
    materiality: "critical",
    reason: "Inciting catastrophe of Kizuki's suicide; freezes characters emotionally at 17."
  },
  "SCENE-NW-02-04": {
    materiality: "important",
    reason: "Establishes Toru's Tokyo domestic environment, Storm Trooper's quirks, and Toru's Shibuya record-store employment."
  },
  "SCENE-NW-02-05": {
    materiality: "important",
    reason: "Contextualizes 1968-69 university strikes and establishes Toru's alienation from mass ideology."
  },
  "SCENE-NW-02-06": {
    materiality: "critical",
    reason: "Articulates novel's foundational philosophical axiom: death inside life."
  },
  "SCENE-NW-03-01": {
    materiality: "important",
    reason: "Accidental Tokyo train reunion re-establishing connection between survivors."
  },
  "SCENE-NW-03-02": {
    materiality: "important",
    reason: "Mute Sunday walks establish bodily containment of shared grief."
  },
  "SCENE-NW-03-03": {
    materiality: "critical",
    reason: "Naoko's 20th birthday weeping fit; marks threshold of entering adulthood without Kizuki."
  },
  "SCENE-NW-03-04": {
    materiality: "critical",
    reason: "Sexual consummation and discovery of virginity; incites Naoko's mental collapse."
  },
  "SCENE-NW-03-05": {
    materiality: "critical",
    reason: "Naoko's sudden disappearance and farewell note."
  },
  "SCENE-NW-03-06": {
    materiality: "important",
    reason: "Firefly on water tower; primary visual metaphor of fading vitality."
  },
  "SCENE-NW-04-01": {
    materiality: "critical",
    reason: "Introduction of Midori Kobayashi as vital counter-force to Naoko."
  },
  "SCENE-NW-04-02": {
    materiality: "important",
    reason: "Shinjuku porn theater date; establishes Midori's candid, grounded sexuality."
  },
  "SCENE-NW-04-03": {
    materiality: "important",
    reason: "Friendship with Nagasawa and Gatsby connection; introduces aristocratic cynicism foil."
  },
  "SCENE-NW-04-04": {
    materiality: "important",
    reason: "Shinjuku bar hunting and Toru's moral nausea and remorse."
  },
  "SCENE-NW-04-05": {
    materiality: "important",
    reason: "Introduction of Hatsumi at pool hall; tragic mirror to Naoko."
  },
  "SCENE-NW-05-01": {
    materiality: "important",
    reason: "Otsuka bookstore visit; grounds Midori in hard domestic and financial reality."
  },
  "SCENE-NW-05-02": {
    materiality: "important",
    reason: "Rooftop fire scene; establishes Midori's defiant vitality in face of destruction."
  },
  "SCENE-NW-05-03": {
    materiality: "important",
    reason: "Smoke-flavored kiss; first romantic awakening for Toru since Naoko's exit."
  },
  "SCENE-NW-05-04": {
    materiality: "important",
    reason: "Midori's confession of mother's brain cancer trauma; proves she is trauma survivor."
  },
  "SCENE-NW-06-01": {
    materiality: "important",
    reason: "Arrival at Ami Hostel; introduces mountain sanctuary, cashless barter, and non-hierarchical care philosophy."
  },
  "SCENE-NW-06-02": {
    materiality: "important",
    reason: "Reiko's backstory of piano breakdown and student slander; grounds her role as mentor."
  },
  "SCENE-NW-06-03": {
    materiality: "critical",
    reason: "Pine woods confession: Naoko's sexual arousal guilt AND disclosure of elder sister's suicide at 17."
  },
  "SCENE-NW-06-04": {
    materiality: "critical",
    reason: "Reiko plays 'Norwegian Wood' on guitar; anchors title song in Naoko's tears."
  },
  "SCENE-NW-07-01": {
    materiality: "textural",
    reason: "Dawn vegetable harvesting; pastoral domestic peace."
  },
  "SCENE-NW-07-02": {
    materiality: "critical",
    reason: "Toru's solemn vow at bus stop to prepare home for Naoko; creates tragic binding promise."
  },
  "SCENE-NW-08-01": {
    materiality: "important",
    reason: "Storm Trooper departs; Toru moves to Kichijoji funded by Shibuya record store job."
  },
  "SCENE-NW-08-02": {
    materiality: "important",
    reason: "Terminal cancer ward visit; Toru confronts bodily decay."
  },
  "SCENE-NW-08-03": {
    materiality: "critical",
    reason: "Nori-wrapped cucumber feeding; basic somatic compassion honoring dying dignity."
  },
  "SCENE-NW-08-04": {
    materiality: "important",
    reason: "Father's cremation; concludes Midori's family nursing duty."
  },
  "SCENE-NW-09-01": {
    materiality: "important",
    reason: "Midori's feast in Kichijoji; demands Toru declare his feelings."
  },
  "SCENE-NW-09-02": {
    materiality: "critical",
    reason: "Strawberry Shortcake definition of love; Toru paralyzed by vow; painful rupture."
  },
  "SCENE-NW-09-03": {
    materiality: "critical",
    reason: "Farewell dinner with Nagasawa; Hatsumi's doomed devotion and eventual wrist-slitting suicide."
  },
  "SCENE-NW-10-01": {
    materiality: "critical",
    reason: "Second Ami Hostel visit; Naoko's severe psychotic decompensation."
  },
  "SCENE-NW-10-02": {
    materiality: "critical",
    reason: "Toru's letter to Reiko; Reiko's reply giving moral permission to choose life."
  },
  "SCENE-NW-10-03": {
    materiality: "important",
    reason: "Tea shop reconciliation with Midori; holding hands."
  },
  "SCENE-NW-10-04": {
    materiality: "critical",
    reason: "Telegram arrives: Naoko commits suicide by hanging in the forest."
  },
  "SCENE-NW-11-01": {
    materiality: "critical",
    reason: "Month of coastal vagrancy along Boso/Kii peninsulas; physical burning of grief."
  },
  "SCENE-NW-11-02": {
    materiality: "important",
    reason: "Reiko leaves Ami Hostel after 8 years and arrives in Tokyo."
  },
  "SCENE-NW-11-03": {
    materiality: "critical",
    reason: "Secular wake: 51 songs on guitar; musical liturgy releasing ghost."
  },
  "SCENE-NW-11-04": {
    materiality: "critical",
    reason: "Somatic lovemaking four times; sacred survival communion affirming life."
  },
  "SCENE-NW-11-05": {
    materiality: "important",
    reason: "Reiko boards train for Hokkaido wearing Naoko's blue sweater."
  },
  "SCENE-NW-11-06": {
    materiality: "critical",
    reason: "Phone booth call to Midori; existential vertigo in the center of nowhere."
  }
};

// Apply updates to scenes
data.scenes.forEach(scene => {
  const meta = materialityMap[scene.scene_id] || { materiality: "important", reason: "Narrative development." };
  scene.materiality = meta.materiality;
  scene.materiality_reason = meta.reason;

  // Specific enhancements:
  if (scene.scene_id === "SCENE-NW-02-04") {
    scene.what_happens += " Around this time, Toru secures a part-time job working at a record store in Shibuya specializing in imported jazz and rock vinyl, earning his own living and cultivating deep musical knowledge away from student political factions.";
    scene.information_revealed.push("Toru works part-time at a Shibuya record store, financing his independent living and developing broad musical literacy.");
    scene.mundane_texture.push("Sorting vinyl LP jackets in Shibuya record bins; jazz needle drops.");
  }

  if (scene.scene_id === "SCENE-NW-06-01") {
    scene.what_happens += " Toru discovers the unique operational philosophy of Ami Hostel: it functions without locked gates, walls, or commercial medical billing. Residents and staff live together on equal terms, cultivating vegetable plots and workshops in a cashless barter economy where upkeep is paid through communal labor. Doctors and nurses wear ordinary clothes, eat identical communal meals, and openly acknowledge their own emotional vulnerabilities, rejecting the rigid hierarchical authority of conventional psychiatric institutions.";
    scene.information_revealed.push("Ami Hostel operates on a cashless barter economy with non-hierarchical, egalitarian care where staff and residents share communal labor and vulnerability.");
    scene.mundane_texture.push("Cashless barter ledger; communal tool sheds; doctors in denim work clothes.");
  }

  if (scene.scene_id === "SCENE-NW-06-03") {
    scene.what_happens += " Furthermore, Naoko confides a painful family history: when she was in the sixth grade (eleven years old), her beloved elder sister, who was seventeen, exceptionally brilliant, beautiful, and seemingly flawless, locked herself in her second-floor bedroom and hanged herself from the ceiling beam without warning or farewell note. Naoko was the one who unlocked the door and discovered her sister's dangling body. Naoko reflects that ever since that traumatic afternoon, she has felt an unexplained darkness lingering within her family lineage, fearing that she herself was destined to be drawn into that same silence. (Preserved as Naoko's personal narrative reflection, without imposing deterministic psychiatric labels).";
    scene.information_revealed.push("Naoko discovered her 17-year-old elder sister's body hanging in her room when Naoko was 11; the suicide was unannounced and left no note.");
    scene.information_revealed.push("Naoko lived with the lingering fear that her family harbored a hidden darkness pulling her toward the same fate.");
    scene.why_this_matters = "The central psychological and biographical confession of the novel, revealing both Naoko's somatic guilt with Toru and the prior family suicide that foreshadows her own fate.";
  }

  if (scene.scene_id === "SCENE-NW-08-01") {
    scene.what_happens += " Toru's wages from his part-time employment at the Shibuya jazz record shop allow him to pay rent and maintain his quiet, solitary household.";
    scene.information_revealed.push("Toru's Shibuya record shop wages directly fund his independent living in Kichijoji.");
  }
});

fs.writeFileSync(kuPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully upgraded ${data.scenes.length} scenes in knowledge-units.json to BKRS V2.5 Canonical!`);
