/**
 * BKRS Canonical Generator for Can't Hurt Me (David Goggins)
 * Constructs canonical knowledge-units.json, master-notes.md, and renders the 3-view portal.
 */

const fs = require('fs');
const path = require('path');

const bookSlug = 'cant-hurt-me';
const outputDir = path.join(__dirname, '..', '..', 'docs', 'distillations', bookSlug);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const CHAPTERS = [
  {
    num: 1,
    id: "ch-01",
    title: "I Should Have Been a Statistic (The Bad Hand & Inherited Trauma)",
    pages: "pp. 9–34",
    challenge: "Challenge 1: The Bad Hand Inventory",
    challenge_desc: "Write down every factor, disadvantage, trauma, and obstacle working against you in your past and present. Convert victimhood into combustible fuel.",
    axiom: "Your circumstances and trauma do not excuse your failure; they are the raw ore from which an unshakeable identity must be forged.",
    mechanism: "Childhood exposure to severe domestic violence, parental abuse (Trunbull Street, Buffalo), extreme poverty, and toxic racism in rural Indiana creates a psychological baseline of terror, toxic shame, and hypervigilance. The brain instinctively defaults to victimhood as a self-protective defense mechanism, accepting low societal expectations as an immutable ceiling.",
    heuristics: [
      "Catalog your 'bad hand' without self-pity or romanticization.",
      "Recognize that pain and trauma are unrefined emotional energy; re-channel them as fuel for relentless self-transformation.",
      "Refuse the seduction of sympathy: pity reinforces helplessness."
    ],
    quote: "You are in danger of living a life so soft and comfortable that you will die without ever knowing your true potential."
  },
  {
    num: 2,
    id: "ch-02",
    title: "My Dirty Secret (The Accountability Mirror & Eradicating Delusion)",
    pages: "pp. 35–58",
    challenge: "Challenge 2: The Accountability Mirror",
    challenge_desc: "Post honest Post-it notes on your bathroom mirror detailing your current weaknesses, flaws, and daily commitments. Look yourself in the eye every morning and hold yourself accountable.",
    axiom: "Brutal, unvarnished self-honesty is the prerequisite for transformation; you must face your own reflection without cosmetic lies.",
    mechanism: "To survive academic failure, illiteracy, and a severe childhood stutter, Goggins developed a coping mechanism of cheating, social masking, and false swagger. The 'Accountability Mirror' functions as cognitive behavioral restructuring: by confronting one's physical and behavioral flaws in the mirror with explicit, written Post-it goals, the individual dissolves self-deception and bridges the chasm between who they pretend to be and who they actually are.",
    heuristics: [
      "Stand in front of the mirror every day and state the truth about your fitness, discipline, and integrity.",
      "Break major life goals into micro-commitments written on Post-it notes.",
      "Call yourself out without mercy: sugarcoating your weaknesses guarantees that they will enslave you."
    ],
    quote: "Tell yourself the truth! If you're fat, admit you're fat. If you're lazy, admit you're lazy. The truth will set you free, but first it will piss you off."
  },
  {
    num: 3,
    id: "ch-03",
    title: "The Impossible Task (Comfort Zone Destruction: 106 Lbs in 3 Months)",
    pages: "pp. 59–84",
    challenge: "Challenge 3: Daily Discomfort Inoculation",
    challenge_desc: "Identify something you hate doing or that makes you intensely uncomfortable every single day, and do it repeatedly until discomfort becomes familiar.",
    axiom: "Radical transformation requires destroying the protective cocoon of comfort; physical suffering expands the boundary of the possible.",
    mechanism: "Working as a night-shift exterminator weighing 297 pounds, Goggins saw a documentary on Navy SEAL training Class 224 and decided to enlist. To meet the recruit cutoff, he was required to lose 106 pounds in less than 90 days. He subjected his body to extreme caloric restriction (800 calories/day) and 16 hours of daily cardiovascular exercise on a stationary bike and elliptical. This physical crucible rewired his neurobiology, demonstrating that perceived physical limits are cognitive illusions created by the brain's homeostatic preservation drive.",
    heuristics: [
      "Do things you hate every day to build a habit of voluntary suffering.",
      "When the body screams that it has reached its absolute limit, recognize that you are only at 40% of your true reserve.",
      "Treat intense physical conditioning not as fitness, but as surgical reconstruction of your will."
    ],
    quote: "I was twenty-four, 297 pounds, spraying cockroaches for a living. I decided that either I was going to die trying to become a Navy SEAL, or I was going to make it. There was no third option."
  },
  {
    num: 4,
    id: "ch-04",
    title: "Taking Souls (Psychological Dominance Over Adversity)",
    pages: "pp. 85–112",
    challenge: "Challenge 4: Taking Souls in Competition",
    challenge_desc: "In any competitive arena, project an aura of unshakeable ferocity and joy in the midst of suffering, destroying your opponent's psychological resolve.",
    axiom: "True dominance is not achieved by defeating your opponent physically, but by demonstrating that you love the suffering they are trying to inflict on you.",
    mechanism: "During BUD/S (Basic Underwater Demolition/SEAL) Hell Week, instructors subject trainees to continuous sleep deprivation, hypothermia in Pacific surf, and crushing boat-carry drills to break their spirit. 'Taking Souls' is an asymmetric psychological tactic: when an instructor or rival expects you to break, cry, or quit, you smile, sing louder, and execute reps with explosive energy. This inverts the power dynamic: the tormentor becomes disoriented and demoralized by realizing that their worst torture only energizes you.",
    heuristics: [
      "Find energy in the darkest moments of a trial by out-suffering your competition.",
      "Excellence is the ultimate intimidation: when conditions are horrific, execute with flawless precision.",
      "Never show pain or weakness to someone who is trying to break you."
    ],
    quote: "Taking someone’s soul means you have exerted an energy so great and displayed a mindset so unbreakable that the other person begins to doubt their own existence."
  },
  {
    num: 5,
    id: "ch-05",
    title: "Armored Mind (Mental Calluses & Visualizing Calamity)",
    pages: "pp. 113–138",
    challenge: "Challenge 5: Calamity Visualization",
    challenge_desc: "Do not visualize only triumph; visualize every horrific failure, catastrophe, and agonizing obstacle, and pre-program your psychological response.",
    axiom: "Just as hands develop thick calluses from friction with iron, the mind develops calluses through repeated friction with suffering and fear.",
    mechanism: "Surviving BUD/S after failing twice (pneumonia, stress fractures) required Goggins to complete Hell Week with double shin splints and a fractured patella, wrapping his legs in duct tape every morning. Building an 'Armored Mind' relies on stress inoculation: by voluntarily exposing oneself to physical pain and rehearsing worst-case scenarios, the brain down-regulates cortisol reactivity. When actual catastrophe strikes, the mind treats it not as a shock, but as a familiar training ground.",
    heuristics: [
      "Callus your mind through regular exposure to friction, cold, exhaustion, and repetition.",
      "Practice negative visualization: prepare for equipment failure, hypothermia, betrayal, and physical injury.",
      "When pain strikes, remember that pain is information, not an instruction to stop."
    ],
    quote: "You have to build calluses on your brain just like how you build calluses on your hands. If you never push yourself to failure, your mind remains soft and fragile."
  },
  {
    num: 6,
    id: "ch-06",
    title: "It's Not About a Trophy (The Cookie Jar of Past Victories)",
    pages: "pp. 139–162",
    challenge: "Challenge 6: The Cookie Jar Repository",
    challenge_desc: "Create an inventory of all past hardships you have overcome, victories you have won, and pain you have outlasted. Reach into this Cookie Jar when despair tempts you to quit.",
    axiom: "When the mind enters acute crisis, memory fails; you must carry an explicit catalog of past triumphs to remind yourself of who you are.",
    mechanism: "Under conditions of severe hypothermia, acute physical agony, and exhaustion, the brain's prefrontal cortex suffers cognitive narrowing, causing the individual to forget their own capabilities and experience intense existential helplessness. 'The Cookie Jar' is an intentional cognitive retrieval heuristic: by deliberately pulling up vivid sensory memories of past trials survived, the individual activates dopamine pathways, dislodging helplessness and restoring self-efficacy.",
    heuristics: [
      "Maintain a mental and written inventory of every dark trial you have endured and conquered.",
      "When your mind screams 'I can't take this anymore,' dip into the Cookie Jar and remember what you survived.",
      "Use your past suffering as proof that you are stronger than your current circumstance."
    ],
    quote: "The Cookie Jar is a reminder of who you are at your core. It's a mental file cabinet filled with all the times you overcame insurmountable odds and refused to quit."
  },
  {
    num: 7,
    id: "ch-07",
    title: "The Most Powerful Weapon (The 40% Rule & Overriding the Governor)",
    pages: "pp. 163–190",
    challenge: "Challenge 7: Pushing Past the 40% Governor",
    challenge_desc: "When your mind tells you that you are completely empty, exhausted, and finished, force yourself to complete another 5% to 10% incrementally.",
    axiom: "When your mind screams that you are completely exhausted and must stop, you have only tapped 40% of your actual physical and mental capacity.",
    mechanism: "The human brain contains a biological 'Governor' (analyzed in exercise physiology by Dr. Timothy Noakes) designed to protect the organism from cellular damage and death. When energy reserves drop and lactic acid rises, the Governor sends overwhelming distress signals—pain, panic, nausea—demanding cessation of effort. In reality, human physiology retains a massive 60% emergency safety margin. Ultra-endurance athletes and elite military operators learn to cognitively override the Governor's panic alarms.",
    case_study: "The San Diego One Day 100-mile race: running 101 miles on zero marathon training, suffering acute kidney failure, broken metatarsals, and internal bleeding, yet completing the distance on sheer psychological willpower.",
    heuristics: [
      "Acknowledge the brain's Governor as a survival alarm, not an absolute barrier.",
      "When you hit the wall, realize that you still have 60% in reserve.",
      "Push past exhaustion in small 5% increments to systematically widen your performance ceiling."
    ],
    quote: "The 40% Rule is simple: when your mind is telling you that you are completely done, you are only at 40% of your true potential."
  },
  {
    num: 8,
    id: "ch-08",
    title: "Talent Not Required (Extreme Time Compartmentalization)",
    pages: "pp. 191–216",
    challenge: "Challenge 8: Schedule Compartmentalization & Time Audits",
    challenge_desc: "Audit every 15-minute block of your 24-hour day for a full week. Ruthlessly eliminate passive screen time, idle chatter, and wasted filler to create deep blocks of focused execution.",
    axiom: "Greatness does not require natural genius or athletic pedigree; it requires an obsessive, militarized mastery of the clock.",
    mechanism: "While preparing for the Badwater 135 (a 135-mile ultramarathon through Death Valley in 130°F heat) and the Ultraman World Championship while serving as an active-duty Navy SEAL, Goggins developed a system of compartmentalized time architecture. By eliminating passive media consumption, waking at 4:00 AM, and commuting 50 miles daily on a bicycle, he captured 4–6 productive hours that average individuals squander on distraction.",
    heuristics: [
      "Audit your daily schedule in 15-to-30-minute increments to eliminate hidden time theft.",
      "Single-task with savage focus: when training, only train; when studying, only study; when resting, only rest.",
      "Reject the myth of talent: sustained, focused labor outworks gifted complacency every time."
    ],
    quote: "We all have 24 hours in a day. Most people spend half of it wandering around in a fog of distraction, and then complain they don't have time to achieve their dreams."
  },
  {
    num: 9,
    id: "ch-09",
    title: "Uncommon Amongst Uncommon (Fighting Elite Complacency)",
    pages: "pp. 217–242",
    challenge: "Challenge 9: Being Uncommon Amongst Uncommon",
    challenge_desc: "When you reach an elite group or achieve a major milestone, refuse to relax or celebrate. Raise your personal standard above the group's collective baseline.",
    axiom: "The greatest enemy of sustained excellence is the comfort that comes from achieving an elite status; greatness is never owned, it is rented daily.",
    mechanism: "After earning his Navy SEAL Trident, graduating from Army Ranger School as Top Enlisted Man, and completing Air Force Tactical Air Control training, Goggins observed a pervasive phenomenon: once individuals achieve elite status, they frequently slow down, celebrate their past credentials, and settle into collective mediocrity. To combat this entropy, the true warrior must become 'uncommon amongst the uncommon', refusing to let institutional reputation substitute for daily relentless exertion.",
    heuristics: [
      "Never allow a credential, degree, or uniform to define your current worth.",
      "When everyone around you rests and pat themselves on the back, put your boots back on and seek the next challenge.",
      "Hold yourself to an internal standard higher than any supervisor or organization can demand."
    ],
    quote: "It's easy to be great among the weak. The real test is: can you be uncommon amongst the uncommon? When you surround yourself with killers, do you still stand out?"
  },
  {
    num: 10,
    id: "ch-10",
    title: "The Empowerment of Failure (The After Action Report & The Pull-Up Record)",
    pages: "pp. 243–268",
    challenge: "Challenge 10: The Forensic After Action Report (AAR)",
    challenge_desc: "Following any failure or defeat, immediately write a clinical, emotionless After Action Report: (1) What went well? (2) What failed? (3) How did my mindset falter? (4) What exact adjustments will I make on the next attempt?",
    axiom: "Failure is not a reflection of your identity; it is empirical operational data showing you the exact engineering flaws in your preparation.",
    mechanism: "In attempting to break the Guinness World Record for 24-hour pull-ups, Goggins failed twice: on his first attempt, his hands tore down to the bone and severe chemical burns from foam padding forced him to stop at 2,588 pull-ups; on his second attempt, extreme muscle swelling caused rhabdomyolysis at 3,207 pull-ups. Rather than quitting, he conducted military-grade After Action Reports (AARs), re-engineered his grip, adjusted his pacing, hardened his palms, and succeeded on his third attempt with 4,030 pull-ups in 17 hours.",
    heuristics: [
      "Treat failure as clinical data, not emotional condemnation.",
      "Run an AAR immediately after defeat: dissect preparation, nutrition, mental state, and pacing.",
      "Return to the arena with adjusted variables until the objective is conquered."
    ],
    quote: "Failure is the most powerful tool you have if you are willing to learn from it. My failures taught me more about my soul than any medal I ever won."
  },
  {
    num: 11,
    id: "ch-11",
    title: "What If? (Open Heart Surgery & Uncapped Human Potential)",
    pages: "pp. 269–292",
    challenge: "Challenge 11: The 'What If?' Mindset Anchor",
    challenge_desc: "When facing impossible odds or when everyone tells you that something cannot be done, quiet your mind and whisper: 'What if I can pull this off?'",
    axiom: "The phrase 'What if?' is the ultimate cognitive weapon: it silences negativity, obliterates doubt, and turns impossible obstacles into historic invitations.",
    mechanism: "After competing in world-championship endurance races and serving as a SEAL, doctors discovered that Goggins had an Atrial Septal Defect (ASD)—a hole in his heart that caused his heart to operate on roughly 50% oxygen capacity his entire life. Following two open-heart surgeries, he faced total physical devastation. By employing the 'What If?' mental frame, he dismantled fear and returned to elite endurance running, demonstrating that the human spirit possesses an uncapped, transcendent capacity when it refuses surrender.",
    heuristics: [
      "Use 'What If?' to flip negative self-talk into curiosity and audacious possibility.",
      "Understand that human potential is not a fixed ceiling; it expands in direct proportion to your willingness to endure.",
      "Live your life so that at the moment of death, you leave nothing in the tank."
    ],
    quote: "Heraclitus said: 'Out of every hundred men, ten shouldn't even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior, and he will bring the others back.' Be that one."
  }
];

// Generate canonical knowledge-units.json
const knowledgeUnits = CHAPTERS.map(ch => ({
  id: `KU-CHM-${ch.id.toUpperCase()}`,
  chapter_number: ch.num,
  chapter_title: ch.title,
  source_coordinates: ch.pages,
  epistemic_status: "CRUCIBLE_AUTOBIOGRAPHY_HEURISTIC",
  materiality: "CRITICAL",
  claim: ch.mechanism,
  challenge: ch.challenge,
  challenge_description: ch.challenge_desc,
  actionable_heuristics: ch.heuristics,
  verbatim_quote: ch.quote,
  primary_axiom: ch.axiom
}));

const kuModel = {
  schema_version: "1.0.0",
  book_metadata: {
    id: bookSlug,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    subtitle: "A Complete Operational Codification of the 11 Chapters and 10 Challenges",
    author: "David Goggins",
    year: 2018,
    publisher: "Lioncrest Publishing / Intellectualist Applied Mindset Series",
    category: "Behavioral Psychology & Habit Architecture",
    epistemic_tier: "Tier 1: Crucible Autobiography & Applied Mental Toughness",
    total_units: knowledgeUnits.length,
    reading_time_saved: "11.5 hrs saved"
  },
  units: knowledgeUnits
};

fs.writeFileSync(path.join(outputDir, 'knowledge-units.json'), JSON.stringify(kuModel, null, 2), 'utf-8');
console.log("Wrote canonical knowledge-units.json for Can't Hurt Me with", knowledgeUnits.length, "units.");

// Generate 7-layer master-notes.md
let md = `# Can't Hurt Me: Master Your Mind and Defy the Odds — The Total Replacement Codex\n\n`;
md += `> **Core Thesis**: *The human mind operates under an artificial biological governor that tells us we are empty when we have only tapped 40% of our true reserve. By building mental calluses, taking souls, auditing our accountability mirror, and weaponizing past suffering in the Cookie Jar, any individual can override this governor and achieve an uncapped existence.*\n\n`;
md += `- **Author**: David Goggins\n`;
md += `- **Year & Publisher**: 2018, Lioncrest Publishing\n`;
md += `- **Epistemic Tier**: Tier 1 (Crucible Autobiography & Applied Mental Toughness)\n`;
md += `- **Format**: Complete 11-Chapter & 10-Challenge Replacement Codex\n\n`;
md += `---\n\n`;

md += `## The 7-Layer Master Architecture\n\n`;
md += `1. **Layer 1: Cognitive Mechanics**: The 40% Rule, the biological Governor (Noakes), stress inoculation, and dual-track identity.\n`;
md += `2. **Layer 2: Psychological Crucible**: Childhood trauma, Buffalo, racial terrorism, obesity, illiteracy, and existential metamorphosis.\n`;
md += `3. **Layer 3: Forensic Chapter Codification**: Exhaustive analysis across all 11 chapters.\n`;
md += `4. **Layer 4: The 10 Challenges Manual**: Complete actionable protocols for the Accountability Mirror, Taking Souls, the Cookie Jar, Time Audits, and AARs.\n`;
md += `5. **Layer 5: Endurance & Military Case Vault**: Three BUD/S Hell Weeks, San Diego 100, Badwater 135, Ultraman, and the 4,030 pull-up record.\n`;
md += `6. **Layer 6: Critical Demarcation**: Rhabdomyolysis risks, physiological boundaries, and distinguishing mental toughness from self-destruction.\n`;
md += `7. **Layer 7: Socratic Active Recall Suite**: High-stakes mental toughness drills.\n\n`;
md += `---\n\n`;

CHAPTERS.forEach(ch => {
  md += `## Chapter ${ch.num}: ${ch.title}\n`;
  md += `*Source Coordinates: ${ch.pages}*\n\n`;
  md += `> **Irreducible Axiom**: ${ch.axiom}\n\n`;
  md += `### ${ch.challenge}\n`;
  md += `*Action Protocol*: ${ch.challenge_desc}\n\n`;
  md += `**Psychological Mechanism**: ${ch.mechanism}\n\n`;
  md += `**Actionable Heuristics**:\n`;
  ch.heuristics.forEach(h => md += `- ${h}\n`);
  md += `\n> *" ${ch.quote} "*\n\n`;
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

  const chaptersHtml = CHAPTERS.map(ch => `
    <section class="chapter-wrapper" id="${ch.id}">
      <header class="chapter-header">
        <div class="chapter-kicker">David Goggins • Chapter ${ch.num}</div>
        <h2 class="chapter-title">${ch.title}</h2>
        <div class="chapter-axiom">✦ <strong>Master Axiom:</strong> ${ch.axiom}</div>
      </header>
      
      <div class="goggins-block">
        <div class="challenge-box">
          <div class="challenge-tag">${ch.challenge}</div>
          <p class="challenge-desc">${ch.challenge_desc}</p>
        </div>

        <h3 class="goggins-heading">Psychological &amp; Behavioral Mechanism</h3>
        <p class="goggins-text">${ch.mechanism}</p>

        <div class="heuristics-container">
          <div class="heuristics-title">⚡ Operational Heuristics</div>
          <ul class="heuristics-list">
            ${ch.heuristics.map(h => `<li>${h}</li>`).join('\n')}
          </ul>
        </div>

        <blockquote class="goggins-quote">
          <span class="quote-symbol">“</span>
          ${ch.quote}
        </blockquote>
      </div>
    </section>
  `).join('\n');

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
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600;700;800&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-base: #0c0a09;
      --bg-surface: #1c1917;
      --bg-surface-elevated: #292524;
      --border-subtle: #44403c;
      --text-main: #fafaf9;
      --text-secondary: #a8a29e;
      --color-fire: #ea580c;
      --color-gold: #f59e0b;
      --font-display: 'Cinzel', serif;
      --font-serif: 'Merriweather', Georgia, serif;
      --font-sans: 'Inter', sans-serif;
    }

    [data-theme="light"] {
      --bg-base: #fafaf9;
      --bg-surface: #ffffff;
      --bg-surface-elevated: #f5f5f4;
      --border-subtle: #e7e5e4;
      --text-main: #1c1917;
      --text-secondary: #57534e;
      --color-fire: #c2410c;
      --color-gold: #d97706;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-serif);
      line-height: 1.85;
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
      color: var(--color-fire);
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
      color: var(--color-fire);
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
      color: var(--color-fire);
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
      background: rgba(234, 88, 12, 0.15);
      border-color: rgba(234, 88, 12, 0.35);
      color: var(--color-fire);
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
      border-left: 4px solid var(--color-fire);
      padding: 12px 18px;
      border-radius: 0 8px 8px 0;
      font-family: var(--font-sans);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    /* GOGGINS BLOCK */
    .goggins-block {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 32px;
    }

    /* CHALLENGE BOX */
    .challenge-box {
      background: rgba(234, 88, 12, 0.08);
      border: 1px solid rgba(234, 88, 12, 0.25);
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 24px;
      font-family: var(--font-sans);
    }

    .challenge-tag {
      font-size: 0.8rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-fire);
      margin-bottom: 6px;
    }

    .challenge-desc {
      font-size: 0.95rem;
      color: var(--text-main);
      line-height: 1.6;
    }

    .goggins-heading {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 8px;
    }

    .goggins-text {
      color: var(--text-main);
      margin-bottom: 20px;
      line-height: 1.85;
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
      color: var(--color-fire);
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
      color: var(--color-fire);
      font-weight: bold;
      position: absolute;
      left: 6px;
    }

    /* QUOTE */
    .goggins-quote {
      border-left: 3px solid var(--color-fire);
      padding: 12px 20px;
      margin-top: 20px;
      font-style: italic;
      color: var(--text-main);
      background: rgba(234, 88, 12, 0.05);
      border-radius: 0 6px 6px 0;
      font-size: 1.05rem;
    }

    .quote-symbol {
      color: var(--color-fire);
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
      <div class="sidebar-title">11 Chapters &amp; 10 Challenges</div>
      <nav>
        ${tocItemsHtml}
      </nav>
    </aside>

    <main class="reading-surface">
      <div class="hero-box">
        <div class="hero-kicker">BKRS Master Replacement Codex • Crucible Mindset</div>
        <h1 class="hero-title">${meta.title}</h1>
        <p class="hero-subtitle">${meta.subtitle}</p>
        <div class="meta-badges">
          <span class="badge highlight">✦ ${meta.epistemic_tier}</span>
          <span class="badge">⏱ ${meta.reading_time_saved}</span>
          <span class="badge">🔥 11 Crucible Chapters</span>
          <span class="badge">⚔ 10 Field Challenges</span>
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
console.log("Successfully rendered Can't Hurt Me index.html (Size:", (renderedHtml.length / 1024).toFixed(2), "KB)");
