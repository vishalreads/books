const fs = require('fs');
const path = require('path');

// 1. Load catalog data
const catalogPath = path.join(__dirname, '..', 'docs', 'catalog-500.json');
const catalogData = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

// 2. Load and enhance the 5 distilled books
const booksConfig = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    file: "docs/distillations/atomic-habits/index.html",
    emotional_layer: `
      <section class="section-box" style="border-left: 5px solid #d9381e; background: #fffdfc;">
        <div class="section-tag" style="color: #d9381e;">Layer 2: Emotional Resonance, Narrative Arc & Existential Stakes</div>
        <h2 class="section-title">The Human Crucible: Reclaiming Life from the Shattered Skull</h2>
        
        <div class="quote-box" style="border-left-color: #d9381e;">
          "The bat slipped from his hands, helicoptered through the air, and struck me squarely between the eyes. My nose was broken into thirty fragments. My brain swelled. My eye sockets were shattered. In an instant, normal life vanished."
        </div>

        <h3 class="sub-title">1. The Biological & Psychological Shattering</h3>
        <p>
          Most productivity books read like clinical engineering schematics. <em>Atomic Habits</em>, however, was forged in the acute trauma ward of Children's Hospital in Cincinnati. In May 1998, as a high school sophomore, James Clear was struck point-blank by a swinging baseball bat. The impact drove bone fragments into his brain tissue, induced severe respiratory collapse, triggered multiple grand mal seizures, and placed him in a medically induced coma on life support.
        </p>
        <p>
          When Clear finally woke, his vision was halved, he had lost basic motor coordination, and he could not drive or return to normal schooling for months. The emotional weight of the book is the agonizing, humiliating climb back from physical nullity. He was cut from his high school varsity baseball team and relegated to the bench.
        </p>

        <h3 class="sub-title">2. The Existential Discovery: The Microscopic Antidote to Chaos</h3>
        <p>
          Clear did not discover "atomic habits" in a business seminar; he discovered them as the only viable mechanism to escape despair. When your body is broken and the future is terrifying, grand five-year plans are cruel jokes. The only thing within human control is the next two minutes:
        </p>
        <ul style="margin-left: 24px; margin-bottom: 16px;">
          <li>Making the bed neatly every single morning to establish order against domestic chaos.</li>
          <li>Lifting weights for just ten minutes to prove to his nervous system that physical agency was returning.</li>
          <li>Going to bed at 10:00 PM every night to allow bruised brain tissue to repair itself.</li>
        </ul>
        <p>
          By his senior year at Denison University, those microscopic, invisible 1% repetitions accumulated: Clear was named the top male scholar-athlete at the university and selected to the ESPN Academic All-America team.
        </p>

        <h3 class="sub-title">3. Master Analogies & Sensory Anchors</h3>
        <div class="callout mechanism">
          <div class="callout-title">The Master Metaphors of Latent Transformation</div>
          <p><strong>The Ice Cube at 32°F:</strong> Imagine an ice cube sitting in a cold room at 25°F. You heat it: 26°, 27°, 28°, 29°, 30°, 31°. Nothing happens. The ice cube remains solid. Then you reach 32°F—a one-degree shift no larger than before—and the ice liquefies. Work is never wasted; it is stored in the Plateau of Latent Potential.</p>
          <p><strong>The Chinese Bamboo Tree:</strong> For five years, the bamboo seedling shows zero growth above ground while spinning an intricate root network deep in the soil. In the fifth year, it explodes eighty feet into the sky in six weeks.</p>
        </div>

        <h3 class="sub-title">4. The Moral & Identity Core: Habits as Votes for the Soul</h3>
        <p>
          The ultimate emotional lesson of <em>Atomic Habits</em> is that habits are not about wealth, athletic glory, or productivity metrics. <strong>They are about identity.</strong>
        </p>
        <p>
          Every action you take is a vote cast for the person you believe yourself to be. No single vote changes the election, but as the tally accumulates, you build undeniable empirical evidence of your own worth. You stop wishing for a different life, because every single morning your hands physically prove who you are.
        </p>
      </section>
    `
  },
  {
    id: "48-laws-of-power",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 2000,
    file: "docs/distillations/48-laws-of-power/index.html",
    emotional_layer: `
      <section class="section-box" style="border-left: 5px solid #85221c; background: #fffdfc;">
        <div class="section-tag" style="color: #85221c;">Layer 2: Emotional Resonance, Narrative Arc & Existential Stakes</div>
        <h2 class="section-title">The Human Crucible: The Tragedy of Innocence in a Predatory World</h2>

        <div class="quote-box" style="border-left-color: #85221c;">
          "The world is like a giant scheming court and we are trapped inside it. There is no use trying to opt out of the game of power, for that would only leave you powerless, and powerlessness is miserable."
        </div>

        <h3 class="sub-title">1. The Author's 80-Job Labyrinth of Disillusionment</h3>
        <p>
          Before writing <em>The 48 Laws of Power</em>, Robert Greene was not a cold Machiavellian political advisor. He was a frustrated, sensitive classicist drifting through more than 80 different jobs across Europe and America: construction laborer, translator, hotel receptionist, Hollywood script reader, and magazine essayist.
        </p>
        <p>
          In every workplace—from prestigious Parisian editorial offices to Hollywood film studios—Greene witnessed the same tragic pattern: sincere, talented, honest workers were routinely sidelined, humiliated, and destroyed because they believed that doing good work and being "nice" was sufficient armor. They were blindsided by passive aggression, subtle envy, and courtier vanity. Greene wrote the book not to teach villainy, but to hand vulnerable, honest people the ultimate psychological shield.
        </p>

        <h3 class="sub-title">2. The Existential Stakes: The Sin of Moral Abdication</h3>
        <p>
          Greene directly addresses the reader's moral discomfort: <em>"Can't I just opt out of power?"</em> His answer is devastating: <strong>No.</strong>
        </p>
        <p>
          To claim you are above power dynamics is itself a manipulative posture—a claim of moral superiority designed to make others feel vulgar. When you refuse to understand the mechanics of power, you do not create a peaceful world; you simply abandon the field to the ruthless, the narcissistic, and the corrupt. Understanding power is a fundamental ethical duty for self-preservation and protecting those you love.
        </p>

        <h3 class="sub-title">3. The Psychic Cost: The Chilling Solitude of Formlessness</h3>
        <p>
          The emotional undertone of the book is deeply melancholic. To master Law 48 (Assume Formlessness) and Law 4 (Always Say Less Than Necessary) requires surrendering spontaneous, naive emotional outbursts. The supreme master of power lives in an intellectual fortress—perpetually observing motives, anticipating treachery, and veiling desires. Greene forces the reader to look straight into the icy reality of human hierarchy without flinching.
        </p>
      </section>
    `
  },
  {
    id: "autobiography-of-a-yogi",
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    year: 1946,
    file: "docs/distillations/autobiography-of-a-yogi/index.html",
    emotional_layer: `
      <section class="section-box" style="border-left: 5px solid #916c16; background: #fffdfc;">
        <div class="section-tag" style="color: #916c16;">Layer 2: Emotional Resonance, Narrative Arc & Existential Stakes</div>
        <h2 class="section-title">The Human Crucible: The Devotional Longing of the Cosmic Wanderer</h2>

        <div class="quote-box" style="border-left-color: #916c16;">
          "The mother's love is unconditional; even when the child is wayward, her embrace remains open. How much more so the Divine Mother! My soul wept for her across lifetimes."
        </div>

        <h3 class="sub-title">1. Childhood Bereavement & The Cry for the Divine Mother</h3>
        <p>
          Behind the miraculous events and yogic physics lies the raw human heart of Mukunda Lal Ghosh. At age eleven, while visiting Bareilly, Mukunda experienced an inexplicable vision of his beloved mother dying in Calcutta. Rushing home on the midnight train, he arrived only to find her funeral pyre already burning.
        </p>
        <p>
          This shattering heartbreak destroyed any attachment to the transient physical world. In that moment of devastating childhood grief, Mukunda vowed never to accept a mortal substitute for love: he channeled his entire existence into demanding an audience with the Divine Mother of the Universe. He wept on temple rooftops, refused food, and fled repeatedly into the snowbound Himalayas seeking saints.
        </p>

        <h3 class="sub-title">2. Sri Yukteswar's Ferocious Spiritual Surgery</h3>
        <p>
          The emotional pinnacle of the book is the ten-year discipleship under the lion-hearted jnanavatar Swami Sri Yukteswar in Serampore. Yukteswar was not an indulgent mystic; he was a stern intellectual master who systematically crushed Mukunda's spiritual ego, romantic daydreams, and pride with razor-sharp bluntness. The narrative conveys the deep filial love, fear, gratitude, and surrender of a disciple submitting his mind to total transformation.
        </p>

        <h3 class="sub-title">3. The Loneliness of the Cultural Pioneer</h3>
        <p>
          When Sri Yukteswar instructed Yogananda in 1920 to board the <em>City of Sparta</em> for Boston, Yogananda was terrified. He did not speak fluent English, had no money, and was traveling to a foreign continent steeped in racial segregation and materialist cynicism.
        </p>
        <p>
          The emotional courage of Yogananda standing alone on American stages, confronting racial slurs and institutional hostility while radiating unconditional love, turns the autobiography from an Indian mystical memoir into an epic human testament of faith.
        </p>
      </section>
    `
  },
  {
    id: "it-ends-with-us",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    year: 2016,
    file: "docs/distillations/it-ends-with-us/index.html",
    emotional_layer: `
      <section class="section-box" style="border-left: 5px solid #2b5c8f; background: #fffdfc;">
        <div class="section-tag" style="color: #2b5c8f;">Layer 2: Emotional Resonance, Narrative Arc & Existential Stakes</div>
        <h2 class="section-title">The Human Crucible: Breaking the Intergenerational Chains of Abuse</h2>

        <div class="quote-box" style="border-left-color: #2b5c8f;">
          "Fifteen seconds. That's all it takes to completely change everything about a person. Fifteen seconds that will never be undone."
        </div>

        <h3 class="sub-title">1. Autobiographical Truth: A Daughter's Memory</h3>
        <p>
          <em>It Ends with Us</em> is not a work of manufactured commercial melodrama. In the author's note, Colleen Hoover reveals the foundational wound that dictated her entire life: growing up in a home where her father violently assaulted her mother.
        </p>
        <p>
          As a child, Hoover lay frozen in bed listening to furniture smashing and her mother's screams. Her mother eventually gathered the courage to pack their bags and leave when Colleen was a young girl. The book is Hoover's lifelong attempt to understand the impossible emotional labyrinth that keeps women tied to men who inflict terror upon them.
        </p>

        <h3 class="sub-title">2. Deconstructing the Sunk Cost of Empathy</h3>
        <p>
          The brilliance of the narrative lies in forcing the reader to fall completely in love with Ryle Kincaid—his brilliance as a neurosurgeon, his passionate devotion, his vulnerability regarding his brother's accidental childhood death—before the first violent fracture occurs.
        </p>
        <p>
          Hoover shatters the simplistic, self-righteous societal question: <em>"Why doesn't she just leave?"</em> She demonstrates that women don't stay because they are weak or stupid; they stay because of <strong>empathy</strong>. They see the wounded, broken boy inside the abuser, and their maternal, protective instincts make them believe their love can heal his trauma.
        </p>

        <h3 class="sub-title">3. The Delivery Room Breakthrough: The Cycle Ends</h3>
        <p>
          The emotional climax is one of the most powerful scenes in contemporary literature: Lily holding her newborn daughter Dory in the hospital delivery room. Looking into the eyes of the infant and then into the weeping eyes of Ryle, she asks him: <em>"If our daughter came to you and told you her husband pushed her down the stairs and struck her, what would you tell her to do?"</em>
        </p>
        <p>
          Through his tears, Ryle whispers the unbearable truth: <em>"I'd tell her to leave him."</em> In that moment of agonized lucidity, Lily makes the heroic decision to break the generational curse: <em>"It stops here. With me and you. It ends with us."</em>
        </p>
      </section>
    `
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: 1997,
    file: "docs/distillations/rich-dad-poor-dad/index.html",
    emotional_layer: `
      <section class="section-box" style="border-left: 5px solid #1e4d2b; background: #fffdfc;">
        <div class="section-tag" style="color: #1e4d2b;">Layer 2: Emotional Resonance, Narrative Arc & Existential Stakes</div>
        <h2 class="section-title">The Human Crucible: The Tragedy of the Educated Wage Slave</h2>

        <div class="quote-box" style="border-left-color: #1e4d2b;">
          "Most people work all their lives for money, living in a quiet state of chronic financial panic, because schools taught them how to work for money, but never how to make money work for them."
        </div>

        <h3 class="sub-title">1. The Child's Humiliation on the Beach</h3>
        <p>
          The emotional catalyst for Kiyosaki was the visceral sting of social exclusion at age nine in Hawaii. Attending a public school attended by affluent sugar plantation owners' children, Kiyosaki and his friend Mike were unceremoniously excluded from a weekend beach house party because their families didn't belong to the ownership caste.
        </p>
        <p>
          That burning humiliation sparked their resolve: they melted down lead toothpaste tubes in a basement furnace to counterfeit nickels before being stopped by Kiyosaki's father. That childish desperation exposed a profound reality: nobody in formal education was going to teach them how wealth actually functioned.
        </p>

        <h3 class="sub-title">2. The Dual-Father Heartbreak</h3>
        <p>
          The true emotional gravity of the book is the tragic divergence between two men Kiyosaki deeply loved:
        </p>
        <ul style="margin-left: 24px; margin-bottom: 16px;">
          <li><strong>Poor Dad (His Biological Father):</strong> A brilliant intellectual with a PhD from Stanford, head of the Hawaii Department of Education, who worked 60 hours a week, received government honors, yet died in debt, stressed about bills, and professionally blacklisted after a failed political bid.</li>
          <li><strong>Rich Dad (Mike's Father):</strong> An 8th-grade dropout who understood the geometry of cash flow, built hotels and supermarkets, and owned his time completely.</li>
        </ul>
        <p>
          Watching his educated father slowly crushed by the financial system despite his academic brilliance is the emotional warning siren of the entire book: academic intelligence without financial architecture produces sophisticated, lifelong debt-bondage.
        </p>
      </section>
    `
  },
  {
    id: "norwegian-wood",
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    year: 1987,
    file: "docs/distillations/norwegian-wood/index.html",
    emotional_layer: ""
  },
  {
    id: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    file: "docs/distillations/the-psychology-of-money/index.html",
    emotional_layer: ""
  },
  {
    id: "open-source-intelligence-techniques",
    title: "Open Source Intelligence Techniques",
    author: "Michael Bazzell",
    year: 2018,
    file: "docs/distillations/open-source-intelligence-techniques/index.html",
    emotional_layer: ""
  },
  {
    id: "dont-bug-me",
    title: "Don't Bug Me: The Latest High-Tech Spy Methods",
    author: "M.L. Shannon",
    year: 1992,
    file: "docs/distillations/dont-bug-me/index.html",
    emotional_layer: ""
  }
];

// Extract full container HTML from each book file and inject Layer 2
const extractedCodices = {};

booksConfig.forEach(cfg => {
  const fullPath = path.join(__dirname, '..', cfg.file);
  if (fs.existsSync(fullPath)) {
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const match = raw.match(/<div class="container">([\s\S]*?)<\/div>\s*<\/body>/i);
    if (match) {
      let content = match[1];
      
      // Inject Layer 2 right after the first section (Theoretical Architecture)
      if (content.includes('</section>')) {
        const firstSectionEnd = content.indexOf('</section>') + 10;
        content = content.slice(0, firstSectionEnd) + '\n\n' + cfg.emotional_layer + '\n\n' + content.slice(firstSectionEnd);
      } else {
        content = cfg.emotional_layer + content;
      }

      extractedCodices[cfg.id] = {
        title: cfg.title,
        author: cfg.author,
        year: cfg.year,
        html: content
      };
    }
  }
});

console.log(`Extracted and enhanced ${Object.keys(extractedCodices).length} complete codices!`);

// 3. Compile the comprehensive Single HTML Notebook template
const masterHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Intellectualist 500 • Grand Replacement Notebook</title>
  <style>
    :root {
      --bg-canvas: #f8f6f0;
      --bg-card: #ffffff;
      --bg-subtle: #f0ebe1;
      --bg-elevated: #faf7f2;
      --text-main: #181715;
      --text-muted: #5c574e;
      --accent-crimson: #85221c;
      --accent-slate: #1f3347;
      --accent-gold: #966e14;
      --border-light: #ded7c8;
      --border-dark: #7a7060;
      --code-bg: #ece6d8;
      --badge-ready-bg: #e6f4ea;
      --badge-ready-text: #137333;
      --badge-queue-bg: #fef7e0;
      --badge-queue-text: #b06000;
      --shadow-sm: 0 2px 6px rgba(0,0,0,0.04);
      --shadow-md: 0 6px 18px rgba(0,0,0,0.07);
      --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
      --font-scale: 16px;
    }

    body.theme-midnight {
      --bg-canvas: #0f1115;
      --bg-card: #181b22;
      --bg-subtle: #212631;
      --bg-elevated: #1a1e27;
      --text-main: #e6edf3;
      --text-muted: #8b949e;
      --accent-crimson: #ff6b6b;
      --accent-slate: #58a6ff;
      --accent-gold: #e3b341;
      --border-light: #30363d;
      --border-dark: #6e7681;
      --code-bg: #161b22;
      --badge-ready-bg: #1f3829;
      --badge-ready-text: #7ee787;
      --badge-queue-bg: #3d2f13;
      --badge-queue-text: #f2cc60;
      --shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
      --shadow-md: 0 6px 18px rgba(0,0,0,0.4);
      --shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
    }

    body.theme-sepia {
      --bg-canvas: #f4ecd8;
      --bg-card: #fcf6e8;
      --bg-subtle: #e9dec4;
      --bg-elevated: #f8f1df;
      --text-main: #33261a;
      --text-muted: #6b5541;
      --accent-crimson: #8c2d19;
      --accent-slate: #2d4559;
      --accent-gold: #825f16;
      --border-light: #d6c6a8;
      --border-dark: #826f53;
      --code-bg: #e2d5b8;
      --badge-ready-bg: #d7e8d5;
      --badge-ready-text: #1d5b24;
      --badge-queue-bg: #f2e3be;
      --badge-queue-text: #8c5b08;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: var(--font-scale);
      line-height: 1.68;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    h1, h2, h3, h4, .serif {
      font-family: "Georgia", "Cambria", "Times New Roman", serif;
      font-weight: 700;
      color: var(--text-main);
      letter-spacing: -0.015em;
    }

    .container {
      max-width: 1340px;
      margin: 0 auto;
      padding: 24px 20px 100px 20px;
    }

    /* Fixed Top App Bar */
    .top-app-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-card);
      border-bottom: 2px solid var(--accent-crimson);
      box-shadow: var(--shadow-sm);
      padding: 10px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .app-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      width: 32px;
      height: 32px;
      background: var(--accent-crimson);
      color: #ffffff;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-family: "Georgia", serif;
      font-size: 1.1rem;
    }

    .brand-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .brand-subtitle {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .app-controls {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-ctrl {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.84rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .btn-ctrl:hover {
      background: var(--accent-crimson);
      color: #ffffff;
      border-color: var(--accent-crimson);
    }

    /* Master Gazette Header */
    .gazette-header {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 6px solid var(--accent-crimson);
      padding: 32px 36px;
      margin: 24px 0;
      box-shadow: var(--shadow-sm);
    }

    .gazette-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 10px;
      margin-bottom: 16px;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent-slate);
      font-weight: 700;
    }

    .gazette-title {
      font-size: 2.8rem;
      line-height: 1.12;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }

    .gazette-tagline {
      font-size: 1.25rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 20px;
    }

    .stats-ribbon {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 16px 20px;
      border-radius: 6px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-val {
      font-size: 1.7rem;
      font-weight: 800;
      color: var(--accent-crimson);
      font-family: "Georgia", serif;
      line-height: 1.1;
    }

    .stat-lbl {
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      font-weight: 700;
      margin-top: 4px;
    }

    /* Tab Navigation */
    .tab-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      border-bottom: 2px solid var(--border-light);
      margin-bottom: 24px;
    }

    .tab-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-bottom: none;
      padding: 12px 20px;
      font-size: 0.94rem;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 6px 6px 0 0;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .tab-btn:hover {
      color: var(--accent-crimson);
      background: var(--bg-elevated);
    }

    .tab-btn.active {
      color: var(--accent-crimson);
      background: var(--bg-canvas);
      border-top: 3px solid var(--accent-crimson);
      border-left-color: var(--border-light);
      border-right-color: var(--border-light);
      position: relative;
      bottom: -2px;
      border-bottom: 2px solid var(--bg-canvas);
    }

    /* Filter & Search Bar */
    .filter-bar {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      padding: 18px 24px;
      margin-bottom: 24px;
      border-radius: 6px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .search-row { display: flex; gap: 12px; }

    .search-input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid var(--border-light);
      border-radius: 6px;
      background: var(--bg-elevated);
      color: var(--text-main);
      font-size: 1rem;
      outline: none;
    }

    .search-input:focus {
      border-color: var(--accent-crimson);
      background: var(--bg-card);
    }

    .filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip-btn {
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      color: var(--text-main);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .chip-btn:hover, .chip-btn.active {
      background: var(--accent-crimson);
      color: #ffffff;
      border-color: var(--accent-crimson);
    }

    /* Catalog Cards Grid */
    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
      gap: 24px;
    }

    .book-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 24px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .book-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .book-card.distilled-card {
      border-left: 5px solid var(--badge-ready-text);
    }

    .card-top { margin-bottom: 16px; }

    .card-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      margin-bottom: 12px;
    }

    .badge-status {
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .badge-ready { background: var(--badge-ready-bg); color: var(--badge-ready-text); }
    .badge-queue { background: var(--badge-queue-bg); color: var(--badge-queue-text); }

    .badge-pillar {
      background: var(--bg-subtle);
      color: var(--accent-slate);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      border: 1px solid var(--border-light);
    }

    .book-title {
      font-size: 1.45rem;
      line-height: 1.25;
      margin-bottom: 4px;
      color: var(--text-main);
    }

    .book-author {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--accent-crimson);
      margin-bottom: 12px;
    }

    .book-axiom-box {
      background: var(--bg-subtle);
      border-left: 3px solid var(--accent-crimson);
      padding: 10px 14px;
      font-style: italic;
      font-size: 0.88rem;
      margin-bottom: 14px;
      color: var(--text-main);
    }

    .section-title-sm {
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      margin-bottom: 6px;
      display: block;
    }

    .emotional-stakes-box {
      font-size: 0.86rem;
      color: var(--text-muted);
      margin-bottom: 14px;
      line-height: 1.55;
    }

    .model-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-bottom: 16px;
    }

    .model-tag {
      background: var(--bg-elevated);
      border: 1px solid var(--border-light);
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 0.76rem;
      color: var(--text-main);
    }

    .card-footer {
      border-top: 1px solid var(--border-light);
      padding-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .saved-time-txt {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent-gold);
    }

    .btn-read-codex {
      background: var(--accent-crimson);
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .btn-read-codex:hover { background: #6a1813; }

    /* Codex Reader Layout */
    .reader-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 28px;
      align-items: start;
    }

    @media (max-width: 960px) {
      .reader-layout { grid-template-columns: 1fr; }
    }

    .reader-sidebar {
      position: sticky;
      top: 75px;
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 20px;
      box-shadow: var(--shadow-sm);
      max-height: calc(100vh - 100px);
      overflow-y: auto;
    }

    .reader-book-picker {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--border-light);
      border-radius: 6px;
      background: var(--bg-elevated);
      color: var(--text-main);
      font-size: 0.92rem;
      font-weight: 700;
      margin-bottom: 16px;
      outline: none;
    }

    .reader-toc-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 800;
      color: var(--text-muted);
      margin-bottom: 10px;
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 6px;
    }

    .reader-toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .reader-toc-list a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.84rem;
      padding: 4px 8px;
      border-radius: 4px;
      display: block;
      transition: all 0.15s ease;
    }

    .reader-toc-list a:hover {
      background: var(--bg-subtle);
      color: var(--accent-crimson);
    }

    .reader-article {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 40px 48px;
      box-shadow: var(--shadow-sm);
      max-width: 980px;
    }

    @media (max-width: 600px) {
      .reader-article { padding: 24px 18px; }
    }

    /* Embedded Codex Typography & Elements */
    .section-box {
      border: 1px solid var(--border-light);
      padding: 32px 36px;
      margin-bottom: 35px;
      background: var(--bg-card);
      border-radius: 6px;
    }

    .section-tag {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 800;
      margin-bottom: 8px;
    }

    h2.section-title {
      font-size: 2rem;
      border-bottom: 2px solid var(--border-light);
      padding-bottom: 12px;
      margin-bottom: 24px;
    }

    h3.sub-title {
      font-size: 1.35rem;
      margin: 28px 0 14px 0;
      color: var(--accent-slate);
      border-left: 4px solid var(--accent-slate);
      padding-left: 12px;
    }

    .quote-box {
      font-family: "Georgia", serif;
      font-size: 1.1rem;
      font-style: italic;
      padding: 16px 22px;
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-slate);
      margin: 18px 0;
      border-radius: 0 6px 6px 0;
    }

    .formula-box {
      font-family: monospace;
      font-size: 0.9rem;
      background: var(--code-bg);
      border: 1px solid var(--border-light);
      padding: 14px 18px;
      margin: 16px 0;
      white-space: pre-wrap;
      border-radius: 4px;
    }

    .callout {
      border: 1px solid var(--border-light);
      padding: 20px 24px;
      margin: 22px 0;
      border-radius: 4px;
    }

    .callout.experiment { border-left: 5px solid #2b5c8f; background: rgba(43, 92, 143, 0.05); }
    .callout.mechanism { border-left: 5px solid var(--accent-crimson); background: rgba(133, 34, 28, 0.05); }
    .callout.protocol { border-left: 5px solid #1e4d2b; background: rgba(30, 77, 43, 0.05); }
    .callout.demarcation { border-left: 5px solid #9c4114; background: rgba(156, 65, 20, 0.05); }

    .callout-title {
      font-size: 0.84rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 22px 0;
      font-size: 0.92rem;
    }

    .data-table th, .data-table td {
      border: 1px solid var(--border-light);
      padding: 12px 14px;
      text-align: left;
      vertical-align: top;
    }

    .data-table th {
      background-color: var(--bg-subtle);
      font-family: "Georgia", serif;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .chapter-card {
      border: 1px solid var(--border-light);
      background: var(--bg-elevated);
      padding: 24px 28px;
      margin: 20px 0;
      border-top: 3px solid var(--accent-slate);
      border-radius: 4px;
    }

    .chapter-card h4 {
      font-size: 1.25rem;
      color: var(--accent-slate);
      margin-bottom: 8px;
    }

    .axiom-badge {
      display: inline-block;
      background: var(--bg-subtle);
      border: 1px solid var(--border-light);
      padding: 3px 8px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--accent-crimson);
      margin-bottom: 12px;
      border-radius: 4px;
    }

    .flashcard {
      border: 1px solid var(--border-light);
      background: var(--bg-elevated);
      padding: 18px 24px;
      margin: 14px 0;
      border-radius: 6px;
    }

    .fc-q {
      font-weight: 700;
      color: var(--accent-slate);
      margin-bottom: 8px;
    }

    .fc-a {
      color: var(--text-muted);
      font-size: 0.92rem;
    }

    /* Flashcard Suite */
    .flashcard-deck { max-width: 800px; margin: 0 auto; }

    .flashcard-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-top: 5px solid var(--accent-crimson);
      border-radius: 8px;
      padding: 32px;
      box-shadow: var(--shadow-md);
      margin-bottom: 24px;
    }

    .fc-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--accent-slate);
    }

    .fc-question {
      font-size: 1.3rem;
      font-family: "Georgia", serif;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--text-main);
    }

    .fc-answer-box {
      display: none;
      background: var(--bg-subtle);
      border-left: 4px solid var(--accent-gold);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
      margin-top: 16px;
      font-size: 0.95rem;
      line-height: 1.65;
    }

    .fc-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    /* Matrix & Lab Tabs */
    .matrix-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }

    .matrix-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 20px;
      box-shadow: var(--shadow-sm);
    }

    .matrix-title {
      font-size: 1.15rem;
      color: var(--accent-crimson);
      margin-bottom: 8px;
    }

    .matrix-desc {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 12px;
    }

    .matrix-books {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--accent-slate);
    }

    .lab-box {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 32px;
      box-shadow: var(--shadow-sm);
      max-width: 900px;
      margin: 0 auto;
    }

    .lab-prompt-area {
      width: 100%;
      height: 280px;
      background: var(--code-bg);
      border: 1px solid var(--border-light);
      border-radius: 6px;
      padding: 16px;
      font-family: monospace;
      font-size: 0.88rem;
      color: var(--text-main);
      margin-bottom: 16px;
      outline: none;
    }

    /* Utility */
    .tab-content { display: none; }
    .tab-content.active { display: block; }
  </style>
</head>
<body>

  <!-- Sticky Top Application Bar -->
  <header class="top-app-bar">
    <div class="app-brand">
      <div class="brand-logo">500</div>
      <div>
        <div class="brand-title">The Intellectualist 500</div>
        <div class="brand-subtitle">Universal Codex & Total Replacement Master Notebook</div>
      </div>
    </div>
    <div class="app-controls">
      <button class="btn-ctrl" onclick="setTheme('ivory')">🏛️ Ivory</button>
      <button class="btn-ctrl" onclick="setTheme('midnight')">🌙 Midnight</button>
      <button class="btn-ctrl" onclick="setTheme('sepia')">📜 Sepia</button>
      <span style="border-left: 1px solid var(--border-light); height: 20px; margin: 0 4px;"></span>
      <button class="btn-ctrl" onclick="adjustFontSize(-1)">A-</button>
      <button class="btn-ctrl" onclick="adjustFontSize(1)">A+</button>
    </div>
  </header>

  <div class="container">

    <!-- Master Header Gazette -->
    <section class="gazette-header">
      <div class="gazette-meta">
        <span>The Master Library Foundation</span>
        <span>Standard: The Golden Test of Total Replacement</span>
        <span>Version 2.0 • Offline Self-Contained Edition</span>
      </div>
      <h1 class="gazette-title">The Grand Codex of 500 Books</h1>
      <p class="gazette-tagline">
        An encyclopedic master notebook codifying 500 foundational works of human thought, psychology, strategy, and science into exhaustive notes that eliminate the need to read the original texts.
      </p>
      <div class="stats-ribbon">
        <div class="stat-item">
          <span class="stat-val">500</span>
          <span class="stat-lbl">Universal Canon Target</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">53</span>
          <span class="stat-lbl">Foundation Titles Curated</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">9</span>
          <span class="stat-lbl">Exhaustive Codices Loaded</span>
        </div>
        <div class="stat-item">
          <span class="stat-val">266.5+</span>
          <span class="stat-lbl">Hours of Reading Saved</span>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <nav class="tab-nav">
      <button class="tab-btn" onclick="switchTab('catalog')">📚 1. Foundation Catalog (53 Books)</button>
      <button class="tab-btn active" onclick="switchTab('reader')">📖 2. Embedded Codex Reader (Full Text)</button>
      <button class="tab-btn" onclick="switchTab('flashcards')">⚡ 3. Active Recall Suite</button>
      <button class="tab-btn" onclick="switchTab('models')">🧠 4. Mental Model Matrix</button>
      <button class="tab-btn" onclick="switchTab('lab')">⚙️ 5. Distillation Engine Lab</button>
    </nav>

    <!-- TAB 1: THE FOUNDATION CATALOG -->
    <section id="tab-catalog" class="tab-content">
      <div class="filter-bar">
        <div class="search-row">
          <input type="text" id="catalog-search" class="search-input" placeholder="🔍 Search across 53 books by title, author, mental model, or core thesis..." oninput="filterBooks()" />
        </div>
        <div class="filter-chips" id="pillar-chips">
          <button class="chip-btn active" onclick="filterByPillar('all', this)">All Pillars (53)</button>
          <button class="chip-btn" onclick="filterByPillar('distilled', this)">⭐ Replacement Ready (9)</button>
          <button class="chip-btn" onclick="filterByPillar(1, this)">Pillar 1: Mind & Cognition</button>
          <button class="chip-btn" onclick="filterByPillar(2, this)">Pillar 2: Power & Strategy</button>
          <button class="chip-btn" onclick="filterByPillar(3, this)">Pillar 3: Philosophy & Ethics</button>
          <button class="chip-btn" onclick="filterByPillar(4, this)">Pillar 4: Wealth & Capital</button>
          <button class="chip-btn" onclick="filterByPillar(5, this)">Pillar 5: Systems & Complexity</button>
          <button class="chip-btn" onclick="filterByPillar(6, this)">Pillar 6: Science & AI</button>
          <button class="chip-btn" onclick="filterByPillar(7, this)">Pillar 7: Leadership & Ops</button>
          <button class="chip-btn" onclick="filterByPillar(8, this)">Pillar 8: Biographies & History</button>
          <button class="chip-btn" onclick="filterByPillar(9, this)">Pillar 9: Master Fiction & Trauma</button>
          <button class="chip-btn" onclick="filterByPillar(10, this)">Pillar 10: Physiology & Sleep</button>
        </div>
      </div>

      <div class="books-grid" id="books-grid">
        <!-- Rendered via JavaScript -->
      </div>
    </section>

    <!-- TAB 2: EMBEDDED CODEX READER -->
    <section id="tab-reader" class="tab-content active">
      <div class="reader-layout">
        <aside class="reader-sidebar">
          <label class="reader-toc-title">Select Replacement Codex:</label>
          <select id="reader-select" class="reader-book-picker" onchange="loadSelectedCodex(this.value)">
            <option value="open-source-intelligence-techniques">Open Source Intelligence Techniques — Michael Bazzell (All 24 Chapters)</option>
            <option value="dont-bug-me">Don't Bug Me — M.L. Shannon (All 10 Parts & TSCM Sweep Protocols)</option>
            <option value="the-psychology-of-money">The Psychology of Money — Morgan Housel (All 20 Chapters Detailed)</option>
            <option value="norwegian-wood">Norwegian Wood — Haruki Murakami (All 11 Chapters Codified)</option>
            <option value="atomic-habits">Atomic Habits — James Clear (All 20 Chapters)</option>
            <option value="48-laws-of-power">The 48 Laws of Power — Robert Greene (All 48 Laws)</option>
            <option value="autobiography-of-a-yogi">Autobiography of a Yogi — Paramahansa Yogananda (All 49 Chapters)</option>
            <option value="it-ends-with-us">It Ends with Us — Colleen Hoover (Full Trauma Forensics)</option>
            <option value="rich-dad-poor-dad">Rich Dad Poor Dad — Robert Kiyosaki (All 9 Core Lessons)</option>
          </select>
          <div class="reader-toc-title">Table of Contents</div>
          <ul class="reader-toc-list" id="reader-toc">
            <!-- Dynamically populated -->
          </ul>
        </aside>
        <article class="reader-article" id="reader-content">
          <!-- Dynamically populated with full codex container -->
        </article>
      </div>
    </section>

    <!-- TAB 3: ACTIVE RECALL SUITE -->
    <section id="tab-flashcards" class="tab-content">
      <div class="flashcard-deck">
        <div style="margin-bottom: 24px; text-align: center;">
          <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 8px;">Spaced Repetition & Causal Recall Engine</h2>
          <p style="color: var(--text-muted);">Test your grasp of core causal mechanisms, experimental proofs, and operational algorithms across the distilled codices.</p>
        </div>
        <div id="flashcard-container">
          <!-- Rendered via JS -->
        </div>
      </div>
    </section>

    <!-- TAB 4: MENTAL MODEL MATRIX -->
    <section id="tab-models" class="tab-content">
      <div style="margin-bottom: 24px;">
        <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 8px;">The Universal Mental Model Index</h2>
        <p style="color: var(--text-muted);">Cross-indexed mental models, laws, and cognitive tools extracted from the 500-book foundation.</p>
      </div>
      <div class="matrix-grid" id="matrix-grid">
        <!-- Rendered via JS -->
      </div>
    </section>

    <!-- TAB 5: DISTILLATION ENGINE LAB -->
    <section id="tab-lab" class="tab-content">
      <div class="lab-box">
        <h2 class="serif" style="font-size: 1.8rem; margin-bottom: 12px; color: var(--accent-crimson);">The 7-Layer Distillation Engine Blueprint</h2>
        <p style="margin-bottom: 20px; color: var(--text-muted);">
          To maintain replacement-grade fidelity across all 500 books, use this exact prompt instruction blueprint when digesting and distilling raw book texts:
        </p>
        <textarea class="lab-prompt-area" readonly id="lab-prompt-template">
# CODEX DISTILLATION PROTOCOL (7-LAYER STANDARD)

Target Book: [INSERT BOOK TITLE & AUTHOR]
Objective: Produce an exhaustive, replacement-grade master codex that eliminates the need to read the source text.

Structure Required:
1. Master Theoretical Architecture: Epistemic classification, theoretical pedigree, core mechanical thesis, quantitative/compounding formulas.
2. Emotional Resonance & Narrative Arc: The human crucible, visceral personal stakes, master analogies, and emotional inflection points.
3. Forensic Chapter-by-Chapter Codification: For EVERY SINGLE chapter:
   - Irreducible Axiom
   - Causal & Mechanical Logic
   - Primary Empirical Study / Anchor Evidence (Researcher, year, sample, data)
   - Actionable Heuristics & Verbatim Formulas
   - Nuances, Edge Cases & Failure Modes
4. Landmark Empirical Corpus: Full catalog of experiments, trials, and historical case studies.
5. Operational Field Manual: Diagnostic decision trees, verbatim conversational scripts, habit tracking scorecards, and typology calibration.
6. Skeptical Auditor's Critique: Author biases, cherry-picked data, peer-reviewed limits, and shadow states.
7. Active Recall Flashcard Suite: 15-30 causal mechanism Q&As for spaced repetition.
        </textarea>
        <button class="btn-ctrl" onclick="copyLabPrompt()">📋 Copy Distillation Prompt Template</button>
      </div>
    </section>

  </div>

  <script>
    // Embedded Catalog Data & Full-Text Codices
    const BOOKS = ${JSON.stringify(catalogData.books)};
    const CODICES = ${JSON.stringify(extractedCodices)};
    const FLASHCARDS = [
      {
        book: "The Psychology of Money",
        pillar: "Wealth & Capital",
        question: "What is Morgan Housel's fundamental distinction between being 'rich' and being 'wealthy'?",
        answer: "Rich is current income spent on visible display (cars, homes, luxury brands); Wealth is financial options not yet spent—hidden in bank accounts and investments, granting autonomy, resilience, and freedom over your daily time."
      },
      {
        book: "The Psychology of Money",
        pillar: "Wealth & Capital",
        question: "How does the 'Man in the Car Paradox' expose the core delusion of conspicuous luxury consumption?",
        answer: "When you see someone driving a Ferrari, you rarely think 'That person is impressive.' Instead, you imagine yourself in the driver's seat being admired. People spend fortunes on luxury goods to gain admiration, but observers only admire the object, not the owner. True respect comes from humility, empathy, and integrity, not horsepower."
      },
      {
        book: "The Psychology of Money",
        pillar: "Wealth & Capital",
        question: "Why does Housel argue that being 'reasonable' is superior to being 'coldly rational' in investing?",
        answer: "Spreadsheet rationality optimizes for maximum theoretical returns on paper (e.g. 100% equity leverage, zero cash). But humans are emotional creatures. A 'reasonable' strategy includes sub-optimal buffers (like holding extra cash or paying off a low-interest mortgage) that reduce theoretical yield but allow you to sleep peacefully and prevent catastrophic panic-selling during bear markets."
      },
      {
        book: "Norwegian Wood",
        pillar: "Master Fiction & Trauma",
        question: "What is Haruki Murakami's central philosophical axiom regarding death in Norwegian Wood?",
        answer: "Death exists, not as the opposite but as a part of life. By living our lives, we nurture death. Death is not an external adversary arriving at the end; it is an invisible, compressed node already lodged inside our cells and hearts from the moment a loved one dies."
      },
      {
        book: "Norwegian Wood",
        pillar: "Master Fiction & Trauma",
        question: "How does Midori's 'Strawberry Shortcake' definition of love function as an operational heuristic for trauma survivors?",
        answer: "Midori defines true love as irrational, total acceptance: if she asks for strawberry shortcake, and you run out and buy it, and she throws it out the window saying 'I don't want this anymore!', you accept her without judgment or anger. Having nursed dying parents through cancer and bodily degradation, she demands a love that can withstand ugly, unreasonable emotional storms without abandonment."
      },
      {
        book: "Norwegian Wood",
        pillar: "Master Fiction & Trauma",
        question: "What spatial metaphor in Chapter 1 represents the lurking danger of clinical collapse and suicide?",
        answer: "The bottomless well hidden in the overgrown meadow. It has no fence or stone rim; if you step into it, you plunge hundreds of feet into absolute darkness, trapped alone where no one can hear your cries, dying inch by inch in the dark."
      },
      {
        book: "Atomic Habits",
        pillar: "Mind & Cognition",
        question: "Why does James Clear assert that focusing primarily on goals is a flawed behavioral strategy?",
        answer: "Clear identifies 4 fundamental flaws of goals: (1) Survivor Bias: Winners and losers share the exact same goals (e.g. every Olympian wants gold); (2) Momentary fix: Solving an outcome only fixes the symptom, not the root cause; (3) Happiness postponement: Restricts satisfaction to a distant future binary ('Once I reach X, then I will be happy'); (4) The Yo-Yo Effect: Effort ceases as soon as the goal threshold is crossed because the finish line extinguishes motivation. Systems govern continuous long-term compounding."
      },
      {
        book: "Atomic Habits",
        pillar: "Mind & Cognition",
        question: "How does Wolfram Schultz's dopamine prediction error research explain the mechanics of craving?",
        answer: "Schultz demonstrated that dopamine spikes not upon reward consumption, but upon the perception of the preceding environmental Cue. Dopamine is neurobiologically an anticipation/craving molecule, not a pleasure molecule. The brain computes a Prediction Error: if the anticipated reward exceeds reality, craving amplifies; if reward falls short, motivation is extinguished. Hence, cue visibility dictates craving intensity."
      },
      {
        book: "The 48 Laws of Power",
        pillar: "Power & Strategy",
        question: "What is the core psychological mechanism behind Law 1: 'Never Outshine the Master', as illustrated by Nicolas Fouquet?",
        answer: "All masters suffer from deep-seated vanity and insecurity regarding their status. When a subordinate displays superior brilliance, luxury, or charisma, they inflict a narcissistic injury on the superior, triggering latent envy and existential paranoia. In 1661, Fouquet threw the most extravagant fête in French history at Vaux-le-Vicomte to impress young King Louis XIV; instead of earning gratitude, Louis felt eclipsed, humiliated, and secretly threatened. Weeks later, Louis had d'Artagnan arrest Fouquet, locking him in solitary fortress confinement for life."
      },
      {
        book: "The 48 Laws of Power",
        pillar: "Power & Strategy",
        question: "What is 'The Courtier's Dilemma' and why does indirect power always outlast brute force?",
        answer: "In any court or corporate hierarchy, overt displays of aggression or raw ambition provoke immediate coalitions of defensive rivals who unite to destroy you. The courtier must therefore master the art of indirection: praising rivals while subtly undermining them, veiling orders as suggestions, yielding gracefully in public while maneuvering levers behind the scenes. Direct force creates open friction and resistance; indirection achieves aims while keeping opponents unaware they are being manipulated."
      },
      {
        book: "Autobiography of a Yogi",
        pillar: "Philosophy & Metaphysics",
        question: "Explain the physiological and energetic mechanism of Kriya Yoga decarbonization (Kevala Kumbhaka).",
        answer: "Kriya Yoga operates as an internal psychophysiological combustion engine. By mentally directing life-force energy (prana) continuously up and down the six spinal centers (chakras), venous blood is supercharged with oxygen and cellular decarbonization is accelerated. This calms the breath and slows cardiac activity into Kevala Kumbhaka (breathless stillness), freeing sensory currents from bodily servitude and allowing the practitioner to perceive consciousness as unconditioned pure light."
      },
      {
        book: "It Ends with Us",
        pillar: "Master Fiction & Human Condition",
        question: "How does Dutton & Painter's theory of Traumatic Bonding explain Lily Bloom's difficulty breaking away from Ryle Kincaid?",
        answer: "Traumatic bonding is forged through two essential conditions: an extreme power imbalance and an intermittent, unpredictable schedule of abuse followed by passionate contrition and affection. When violence is followed by tears, heartfelt apologies, and references to childhood trauma, the victim's nervous system experiences intense neurochemical relief (dopamine/oxytocin rebound). This cycle creates an addictive psychological bond far stronger than continuous kindness or continuous cruelty."
      },
      {
        book: "Rich Dad Poor Dad",
        pillar: "Wealth & Capital",
        question: "What is Robert Kiyosaki's strict structural definition of an Asset vs. a Liability, and why is a primary residence often a liability?",
        answer: "An asset is something that puts cash flow directly into your pocket without ongoing labor. A liability is something that takes cash out of your pocket. A personal primary residence is fundamentally a liability because it drains continuous cash flow through mortgage interest, property taxes, insurance, utility bills, and maintenance. It only produces wealth if sold at a speculative gain, whereas true assets (income-generating real estate, businesses, royalties, dividend stocks) generate net positive cash flow every single month."
      },
      {
        book: "Open Source Intelligence Techniques",
        pillar: "Science & AI",
        question: "Why is WebRTC considered a critical OPSEC leak when using a VPN, and how is it disabled in Firefox?",
        answer: "WebRTC enables direct peer-to-peer browser communication. To optimize streaming paths, it directly queries network interfaces, bypassing VPN routing tables and exposing true local and public IP addresses via STUN/TURN requests. In Firefox, it is neutralized by navigating to about:config and toggling media.peerconnection.enabled to false."
      },
      {
        book: "Open Source Intelligence Techniques",
        pillar: "Science & AI",
        question: "How does an investigator use Google Analytics tracking IDs (UA / GTM) to link disparate websites to a single owner?",
        answer: "Webmasters frequently deploy identical Google Analytics tracking scripts across all their web properties. By extracting the unique UA property ID or GTM container ID from HTML source code and querying reverse-analytics databases like SpyOnWeb or PublicWWW, an investigator discovers every other website on the Internet embedding that identical token, exposing shell networks and secret pseudonym blogs."
      },
      {
        book: "Open Source Intelligence Techniques",
        pillar: "Science & AI",
        question: "What is an SMTP handshake verification, and why does it fail on Catch-All mail servers?",
        answer: "The investigator connects directly to a target domain's MX mail server on port 25, sending HELO, MAIL FROM, and RCPT TO:<target@domain.com>. A 250 OK indicates mailbox existence, while 550 indicates user not found. The probe fails on Catch-All servers because the mail server is configured to accept any recipient string and return 250 OK regardless of whether an active inbox exists."
      },
      {
        book: "Don't Bug Me",
        pillar: "Science & AI",
        question: "How does a Nonlinear Junction Detector (NLJD) detect dormant or dead electronic bugs inside solid walls?",
        answer: "An NLJD transmits a pure microwave carrier (typically ~900 MHz). When illuminated by RF energy, semiconductor p-n junctions (silicon transistors, diodes, ICs) act as nonlinear generators, reflecting a strong 2nd harmonic signal (2f0 = ~1800 MHz). Corrosive metal contacts (rusty nails) generate predominantly 3rd harmonics (3f0). Because this relies on semiconductor physics rather than active circuits, it detects bugs that are powered off, out of battery, or sealed in drywall."
      },
      {
        book: "Don't Bug Me",
        pillar: "Science & AI",
        question: "What is an 'Infinity Transmitter' (harmonica bug) and how does it seize a room without causing the telephone to ring?",
        answer: "Installed in a target telephone base, the infinity transmitter intercepts incoming calls. When the eavesdropper calls the target number and sounds an acoustic tone (historically 440 Hz) during the initial ring pulse, a tone decoder activates a reed relay that electronically simulates an off-hook condition, absorbs line voltage before the bell rings, and connects the handset microphone to the line, allowing the eavesdropper to monitor room conversations indefinitely."
      },
      {
        book: "Don't Bug Me",
        pillar: "Science & AI",
        question: "Explain the difference in electrical disturbance between a Series Wiretap and a Parallel Wiretap on an analog telephone line.",
        answer: "A series wiretap is spliced in-line with one conductor (Tip or Ring), forcing line current to pass through it, creating an abnormal DC voltage drop outside the normal 6V–12V window when off-hook. A parallel wiretap bridges across both Tip and Ring conductors, stealing operating current from the loop, which pulls down the idle on-hook voltage from its normal 48V–52V DC down to 36V–44V DC, both detectable with a digital multimeter."
      }
    ];

    let currentPillarFilter = 'all';
    let currentSearchTerm = '';

    window.addEventListener('DOMContentLoaded', () => {
      renderBooksGrid();
      loadSelectedCodex('the-psychology-of-money');
      renderFlashcards();
      renderMentalModels();
    });

    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
      if (targetBtn) targetBtn.classList.add('active');

      const targetContent = document.getElementById('tab-' + tabId);
      if (targetContent) targetContent.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderBooksGrid() {
      const grid = document.getElementById('books-grid');
      grid.innerHTML = '';

      const filtered = BOOKS.filter(b => {
        const matchesPillar = (currentPillarFilter === 'all') 
          || (currentPillarFilter === 'distilled' && b.status === 'distilled')
          || (b.pillar_id == currentPillarFilter);

        const searchLower = currentSearchTerm.toLowerCase();
        const matchesSearch = !currentSearchTerm 
          || b.title.toLowerCase().includes(searchLower)
          || b.author.toLowerCase().includes(searchLower)
          || b.core_axiom.toLowerCase().includes(searchLower)
          || (b.key_models && b.key_models.some(m => m.toLowerCase().includes(searchLower)));

        return matchesPillar && matchesSearch;
      });

      filtered.forEach(b => {
        const isDistilled = b.status === 'distilled';
        const card = document.createElement('div');
        card.className = 'book-card ' + (isDistilled ? 'distilled-card' : '');

        let modelsHtml = '';
        if (b.key_models && b.key_models.length > 0) {
          modelsHtml = b.key_models.slice(0, 4).map(m => '<span class="model-tag">' + m + '</span>').join('');
        }

        card.innerHTML = \`
          <div class="card-top">
            <div class="card-badges">
              <span class="badge-status \${isDistilled ? 'badge-ready' : 'badge-queue'}">
                \${isDistilled ? '⭐ Replacement Ready' : '⏳ Queued for Ingestion'}
              </span>
              <span class="badge-pillar">Pillar \${b.pillar_id}: \${b.pillar_name.split(',')[0]}</span>
            </div>
            <h3 class="book-title serif">\${b.title}</h3>
            <div class="book-author">\${b.author} (\${b.year})</div>
            <div class="book-axiom-box">"\${b.core_axiom}"</div>
            
            <span class="section-title-sm">Emotional Stakes & Human Crucible:</span>
            <div class="emotional-stakes-box">\${b.emotional_stakes}</div>

            <span class="section-title-sm">Core Mental Models:</span>
            <div class="model-tags">\${modelsHtml}</div>
          </div>

          <div class="card-footer">
            <span class="saved-time-txt">⏱️ \${b.reading_time_saved}</span>
            \${isDistilled ? \`<button class="btn-read-codex" onclick="openBookInReader('\${b.id}')">Read Full Codex →</button>\` : \`<span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">In Pipeline</span>\`}
          </div>
        \`;
        grid.appendChild(card);
      });
    }

    function filterByPillar(pillarId, btn) {
      document.querySelectorAll('#pillar-chips .chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPillarFilter = pillarId;
      renderBooksGrid();
    }

    function filterBooks() {
      currentSearchTerm = document.getElementById('catalog-search').value;
      renderBooksGrid();
    }

    function openBookInReader(bookId) {
      switchTab('reader');
      const select = document.getElementById('reader-select');
      select.value = bookId;
      loadSelectedCodex(bookId);
    }

    function loadSelectedCodex(bookId) {
      const article = document.getElementById('reader-content');
      const toc = document.getElementById('reader-toc');
      
      const codex = CODICES[bookId];
      if (!codex) {
        article.innerHTML = '<div style="padding:40px; text-align:center;">Codex in queue for distillation.</div>';
        toc.innerHTML = '';
        return;
      }

      article.innerHTML = codex.html;

      // Extract Headings to populate TOC
      toc.innerHTML = '';
      const headings = article.querySelectorAll('h2.section-title, h3.sub-title, h4');
      headings.forEach((h, idx) => {
        if (!h.id) {
          h.id = 'heading-' + idx;
        }
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        toc.appendChild(li);
      });
    }

    function renderFlashcards() {
      const container = document.getElementById('flashcard-container');
      container.innerHTML = '';

      FLASHCARDS.forEach((fc, idx) => {
        const card = document.createElement('div');
        card.className = 'flashcard-card';
        card.innerHTML = \`
          <div class="fc-header">
            <span>\${fc.book}</span>
            <span>\${fc.pillar}</span>
          </div>
          <div class="fc-question">\${fc.question}</div>
          <div class="fc-answer-box" id="fc-ans-\${idx}">\${fc.answer}</div>
          <div class="fc-controls">
            <button class="btn-ctrl" onclick="toggleAnswer(\${idx}, this)">👁️ Reveal Causal Mechanism</button>
            <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700;">Active Recall Drill</span>
          </div>
        \`;
        container.appendChild(card);
      });
    }

    function toggleAnswer(idx, btn) {
      const ansBox = document.getElementById('fc-ans-' + idx);
      if (ansBox.style.display === 'block') {
        ansBox.style.display = 'none';
        btn.textContent = '👁️ Reveal Causal Mechanism';
      } else {
        ansBox.style.display = 'block';
        btn.textContent = 'Hide Mechanism';
      }
    }

    function renderMentalModels() {
      const grid = document.getElementById('matrix-grid');
      grid.innerHTML = '';

      const modelMap = {};
      BOOKS.forEach(b => {
        if (b.key_models) {
          b.key_models.forEach(m => {
            if (!modelMap[m]) {
              modelMap[m] = [];
            }
            modelMap[m].push(b.title);
          });
        }
      });

      Object.keys(modelMap).forEach(m => {
        const card = document.createElement('div');
        card.className = 'matrix-card';
        card.innerHTML = \`
          <h4 class="matrix-title serif">\${m}</h4>
          <div class="matrix-desc">Foundational operational heuristic and analytical model.</div>
          <div class="matrix-books">Anchored in: \${modelMap[m].join(', ')}</div>
        \`;
        grid.appendChild(card);
      });
    }

    function setTheme(theme) {
      document.body.className = '';
      if (theme === 'midnight') document.body.classList.add('theme-midnight');
      if (theme === 'sepia') document.body.classList.add('theme-sepia');
    }

    let currentFontSize = 16;
    function adjustFontSize(delta) {
      currentFontSize = Math.max(13, Math.min(22, currentFontSize + delta));
      document.documentElement.style.setProperty('--font-scale', currentFontSize + 'px');
    }

    function copyLabPrompt() {
      const text = document.getElementById('lab-prompt-template').value;
      navigator.clipboard.writeText(text).then(() => {
        alert('Distillation prompt copied to clipboard!');
      });
    }
  </script>
</body>
</html>`;

// Write compiled output
const outPath = path.join(__dirname, '..', 'docs', 'notebook.html');
fs.writeFileSync(outPath, masterHtml, 'utf-8');
console.log(`Successfully compiled FULL Master Notebook with embedded codices to: ${outPath} (${(masterHtml.length / 1024).toFixed(1)} KB)`);
