const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', '..', 'docs', 'library-index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

if (!data.books.find(b => b.id === 'cant-hurt-me')) {
  const newBook = {
    id: "cant-hurt-me",
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    subtitle: "A Complete Operational Codification of the 11 Chapters and 10 Challenges",
    author: "David Goggins",
    year: 2018,
    publisher: "Lioncrest Publishing / Intellectualist Applied Mindset Series",
    epistemic_tier: "Tier 1: Crucible Autobiography & Applied Mental Toughness",
    tier_short: "Tier 1",
    category: "Behavioral Psychology & Habit Architecture",
    original_volume: "11 Chapters + 10 Field Challenges (11 Invariant Units, Biological Governor Architecture)",
    reading_time_saved: "11.5 hrs saved",
    hours_val: 11.5,
    core_axiom: "When your mind screams that you are completely exhausted and must quit, you have only tapped 40% of your true reserve.",
    tags: [
      "David Goggins",
      "Mental Toughness",
      "Accountability Mirror",
      "The 40% Rule",
      "Taking Souls",
      "Cookie Jar",
      "Navy SEALs"
    ],
    key_models: [
      "The 40% Rule & Overriding the Biological Governor",
      "The Accountability Mirror (Eradicating Self-Delusion)",
      "Taking Souls (Psychological Inversion in Suffering)",
      "The Armored Mind & Stress Inoculation Calluses",
      "The Cookie Jar (Dopaminergic Resilience Retrieval)",
      "The Forensic After Action Report (AAR) for Failure",
      "The 'What If?' Mindset Anchor"
    ],
    landmark_studies: [
      "Timothy Noakes Central Governor Model in Exercise Physiology",
      "Naval Special Warfare BUD/S Training Attrition Data (Class 224 & 235)",
      "US Army Ranger School Leadership Crucible Metrics",
      "San Diego One Day 100-Mile Ultramarathon Physiological Data",
      "Guinness World Record 24-Hour Pull-Up Forensic Biomechanics (4,030 Reps)"
    ],
    html_path: "distillations/cant-hurt-me/index.html",
    markdown_path: "distillations/cant-hurt-me/master-notes.md",
    featured: false
  };

  data.books.push(newBook);
  data.total_books = data.books.length;
  data.total_hours_saved += 11.5;
  fs.writeFileSync(indexPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log("Successfully added cant-hurt-me to library-index.json!");
  console.log("Total books:", data.total_books, "Total hours saved:", data.total_hours_saved);
} else {
  console.log("cant-hurt-me already exists in library-index.json");
}
