const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'library-index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

if (!data.books.find(b => b.id === 'deep-survival')) {
  const newBook = {
    id: "deep-survival",
    title: "Deep Survival: Who Lives, Who Dies, and Why",
    subtitle: "True Stories of Miraculous Endurance and Sudden Death",
    author: "Laurence Gonzales",
    year: 2003,
    publisher: "W. W. Norton & Company / Intellectualist Survival Psychology Series",
    epistemic_tier: "Tier 1: Cognitive Neuroscience & Empirical Survival Behavior",
    tier_short: "Tier 1",
    category: "Cognitive Science & Decision Making",
    original_volume: "15 Chapters + Appendix (16 Comprehensive Units, Cognitive Models & Case Studies)",
    reading_time_saved: "14.0 hrs saved",
    hours_val: 14.0,
    core_axiom: "Survival is not determined by physical strength or technical gear, but by emotional regulation, mental models, and cognitive mastery under mortal stress.",
    tags: [
      "Survival Psychology",
      "Cognitive Science",
      "Decision Making",
      "Normal Accidents",
      "Amygdala Hijack",
      "10/80/10 Rule",
      "Extreme Environments"
    ],
    key_models: [
      "The Fast vs. Slow Visual Pathway (Amygdala Hijack vs. Neocortex)",
      "Somatic Markers & Mental Models (Memories of the Future)",
      "Bending the Map (The Psychology of Lostness & Cognitive Dissonance)",
      "The 10/80/10 Disaster Behavior Law (10% Panic, 80% Paralyzed, 10% Calm)",
      "Normal Accidents & Tight Coupling (Charles Perrow)",
      "Self-Organized Criticality & Sandpile Avalanches (Per Bak)",
      "Risk Homeostasis & Why Experts Die (Gerald Wilde)",
      "The 12 Infallible Rules of Survival"
    ],
    landmark_studies: [
      "Antonio Damasio Somatic Marker Hypothesis (Descartes' Error)",
      "Joseph LeDoux Amygdala Fear Circuitry (The Emotional Brain)",
      "Charles Perrow Normal Accidents (Living with High-Risk Technologies)",
      "Christopher Chabris & Daniel Simons Inattentional Blindness Studies",
      "National Association for Search and Rescue (NASAR) Lost Person Database",
      "Joe Simpson Peruvian Andes Glacier Survival (Touching the Void)"
    ],
    html_path: "distillations/deep-survival/index.html",
    markdown_path: "distillations/deep-survival/master-notes.md",
    featured: false
  };

  data.books.push(newBook);
  data.total_books = data.books.length;
  data.total_hours_saved += 14.0;
  fs.writeFileSync(indexPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log("Successfully added deep-survival to library-index.json!");
  console.log("Total books:", data.total_books, "Total hours saved:", data.total_hours_saved);
} else {
  console.log("deep-survival already exists in library-index.json");
}
