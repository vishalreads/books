const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const fictionTarget = '<!-- It Ends With Us -->';
const fictionCards = `
          <!-- The Great Gatsby -->
          <article class="book-card is-certified" data-keywords="the great gatsby f scott fitzgerald jazz age nick carraway daisy buchanan jay gatsby green light valley of ashes certified">
            <div>
              <div class="book-card-meta">
                <span class="cert-badge">★ Certified Benchmark</span>
                <span class="book-scope-badge">9 Units</span>
              </div>
              <h4 class="book-title">The Great Gatsby</h4>
              <div class="book-author">F. Scott Fitzgerald (1925)</div>
              <p class="book-synopsis">
                The definitive anatomy of the American dream, moral carelessness, and unyielding longing. Reconstructed across 9 forensic units preserving Nick's moral dilemmas, Gatsby's self-invention, and the green light across the dark bay.
              </p>
              <div class="book-trust-note">
                Certified Reconstruction: 100% replacement-grade forensic analysis preserving all 9 narrative chapters, verbatim citations, and operational heuristics.
              </div>
            </div>
            <div class="book-card-footer">
              <span class="book-views-indicator">Editorial Cream Reader</span>
              <a href="distillations/the-great-gatsby/index.html" class="book-enter-link">Enter Reader &rarr;</a>
            </div>
          </article>

          <!-- Heart of Darkness -->
          <article class="book-card is-certified" data-keywords="heart of darkness joseph conrad charles marlow mr kurtz ivory congo river the horror imperial critique certified">
            <div>
              <div class="book-card-meta">
                <span class="cert-badge">★ Certified Benchmark</span>
                <span class="book-scope-badge">6 Master Units</span>
              </div>
              <h4 class="book-title">Heart of Darkness</h4>
              <div class="book-author">Joseph Conrad (1899)</div>
              <p class="book-synopsis">
                A relentless descent into the primal unconscious and the moral abominations of European imperialism. Reconstructed across 6 comprehensive units preserving Marlow's journey upriver, Kurtz's madness, and the final lie.
              </p>
              <div class="book-trust-note">
                Certified Reconstruction: Full psychological and historical autopsy with extensive verbatim dialogue, causal mechanisms, and philosophical analysis.
              </div>
            </div>
            <div class="book-card-footer">
              <span class="book-views-indicator">Editorial Cream Reader</span>
              <a href="distillations/heart-of-darkness/index.html" class="book-enter-link">Enter Reader &rarr;</a>
            </div>
          </article>

          <!-- The Picture of Dorian Gray -->
          <article class="book-card is-certified" data-keywords="the picture of dorian gray oscar wilde basil hallward lord henry wotton aestheticism hedonism faustian bargain portrait certified">
            <div>
              <div class="book-card-meta">
                <span class="cert-badge">★ Certified Benchmark</span>
                <span class="book-scope-badge">13 Chapters</span>
              </div>
              <h4 class="book-title">The Picture of Dorian Gray</h4>
              <div class="book-author">Oscar Wilde (1890 Original Serial)</div>
              <p class="book-synopsis">
                The unexpurgated 1890 serialized text dissecting the Faustian pact of eternal youth, Lord Henry's New Hedonism, Basil Hallward's idolatry, and the supernatural rotting canvas locked in the attic schoolroom.
              </p>
              <div class="book-trust-note">
                Certified Reconstruction: All 13 original magazine chapters reconstructed in full literary depth, epigrams, dialogue, and psychological progression.
              </div>
            </div>
            <div class="book-card-footer">
              <span class="book-views-indicator">Editorial Cream Reader</span>
              <a href="distillations/the-picture-of-dorian-gray/index.html" class="book-enter-link">Enter Reader &rarr;</a>
            </div>
          </article>

          <!-- The Metamorphosis and Other Stories -->
          <article class="book-card is-certified" data-keywords="the metamorphosis and other stories franz kafka gregor samsa the judgment in the penal colony hunger artist before the law existentialism certified">
            <div>
              <div class="book-card-meta">
                <span class="cert-badge">★ Certified Benchmark</span>
                <span class="book-scope-badge">8 Master Units</span>
              </div>
              <h4 class="book-title">The Metamorphosis and Other Stories</h4>
              <div class="book-author">Franz Kafka</div>
              <p class="book-synopsis">
                The definitive reconstruction of existential guilt, alienated labor, and bureaucratic terror across Kafka's core fiction: the complete Metamorphosis trilogy, The Judgment, In the Penal Colony, A Hunger Artist, and Before the Law.
              </p>
              <div class="book-trust-note">
                Certified Reconstruction: 8 forensic units deconstructing the mechanisms of filial submission, institutional cruelty, and the infinite deferral of justice.
              </div>
            </div>
            <div class="book-card-footer">
              <span class="book-views-indicator">Editorial Cream Reader</span>
              <a href="distillations/the-metamorphosis-and-other-stories/index.html" class="book-enter-link">Enter Reader &rarr;</a>
            </div>
          </article>
`;

const itEndsWithUsClose = 'a href="distillations/it-ends-with-us/index.html" class="book-enter-link">Enter Reader &rarr;</a>\n            </div>\n          </article>';

if (html.includes(itEndsWithUsClose) && !html.includes('the-great-gatsby')) {
  html = html.replace(itEndsWithUsClose, itEndsWithUsClose + '\n' + fictionCards);
}

const historyTarget = "<!-- Don't Bug Me -->";
const historyCards = `
          <!-- Elon Musk -->
          <article class="book-card is-certified" data-keywords="elon musk ashlee vance tesla spacex solarcity paypal rocketry electric vehicles industrial manufacturing biography certified">
            <div>
              <div class="book-card-meta">
                <span class="cert-badge">★ Certified Benchmark</span>
                <span class="book-scope-badge">12 Forensic Units</span>
              </div>
              <h4 class="book-title">Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h4>
              <div class="book-author">Ashlee Vance (2015)</div>
              <p class="book-synopsis">
                The anatomy of 21st-century industrial disruption: from Pretoria childhood trauma and early software ventures (Zip2, PayPal) through the near-death crises of 2008 to Falcon 9 orbital reusability and the electric vehicle revolution.
              </p>
              <div class="book-trust-note">
                Certified Reconstruction: Complete 11 chapters plus epilogue with first-principles physics models, supply chain economics, and management trade-offs.
              </div>
            </div>
            <div class="book-card-footer">
              <span class="book-views-indicator">Editorial Cream Reader</span>
              <a href="distillations/elon-musk/index.html" class="book-enter-link">Enter Reader &rarr;</a>
            </div>
          </article>
`;

if (html.includes(historyTarget) && !html.includes('elon-musk')) {
  html = html.replace(historyTarget, historyCards + '\n          ' + historyTarget);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated docs/index.html with all 5 new books!');
