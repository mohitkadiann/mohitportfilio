
import { Code, Book, Database } from "lucide-react";

const projects = [
  {
    title: "Skill-Based Career Path Recommendations, LPU",
    date: "Dec 2024",
    description: [
      "Developed a career recommendation system using Job2Vec and KMeans clustering for personalized job suggestions across industries.",
      "Enhanced career exploration by expanding opportunities into healthcare, military and sports.",
    ],
    tech: "Machine Learning & NLP, Clustering Algorithm, Data Processing and Dataset expansion"
  },
  {
    title: "Unified Spellchecking, Autocorrect, and NER System, LPU",
    date: "Oct 2024",
    description: [
      "Developed an integrated NLP system for spellchecking, autocorrect, and Named Entity Recognition (NER) using probabilistic and sequence models.",
    ],
    tech: "Hidden Markov Models(HMMs), Sequence-to-Sequence Models, N-gram, LSTM"
  },
  {
    title: "Steel Plates Fault Prediction, LPU",
    date: "Apr 2024",
    description: [
      "Built an ML model for fault detection in steel plates using Random Forest and Bagging.",
      "Implemented data preprocessing and hyperparameter tuning for maximum accuracy.",
    ],
    tech: "Random Forest, AdaBoost, Bagging, Data Preprocessing, Evaluation Metrics"
  }
];

export default function ProjectsSection() {
  const icons = [Code, Book, Database];
  return (
    <section className="bg-[#eee] text-black p-4 rounded-md shadow-md mt-8"> {/* Changed background to lighter off-white */}
      <h2 className="font-playfair text-2xl md:text-3xl text-black mb-3">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((proj, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={proj.title} className="bg-card rounded-xl px-6 py-5 shadow flex flex-col md:flex-row items-start gap-5 animate-fade-in">
              <Icon className="text-black mt-1 mx-2 min-w-9" size={36} />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{proj.title} <span className="text-xs text-black/80 font-normal">({proj.date})</span></h3>
                <ul className="list-disc ml-4 text-gray-800 text-sm mb-1">
                  {proj.description.map((desc, j) => <li key={j}>{desc}</li>)}
                </ul>
                <div className="text-xs text-gray-600"><b>Tech:</b> {proj.tech}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
