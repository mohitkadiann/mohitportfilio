
import { Book, Database, Code } from "lucide-react";

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

const iconBgColors = [
  "bg-gradient-to-br from-[#fddb92] to-[#d1fdff]",
  "bg-gradient-to-br from-[#fbda61] to-[#ff5acd]",
  "bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb]"
];

export default function ProjectsSection() {
  const icons = [Code, Book, Database];
  return (
    <section className="bg-[#eee] text-black p-4 rounded-md shadow-md mt-8">
      <h2 className="font-playfair text-2xl md:text-3xl text-black mb-3">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((proj, i) => {
          const Icon = icons[i % icons.length];
          const iconBg = iconBgColors[i % iconBgColors.length];
          return (
            <div
              key={proj.title}
              className={`relative transition-all duration-300 ease-out group
                bg-gradient-to-tr from-[#fffbe6] via-[#f3f2f7] to-[#ffdfe2]
                border border-gray-200
                rounded-2xl shadow-xl
                px-8 py-6
                flex flex-col md:flex-row items-start gap-6
                hover:scale-[1.03] hover:shadow-2xl hover:border-[#8B5CF6]/40
                hover:bg-gradient-to-br
                animate-fade-in
                `}
              style={{
                backgroundBlendMode: 'lighten'
              }}
            >
              <div className={`${iconBg} flex-shrink-0 rounded-full shadow-lg p-3 mb-2 md:mb-0 transition-all group-hover:rotate-6`}>
                <Icon className="text-black drop-shadow" size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="font-semibold text-lg text-black mr-2">{proj.title}</h3>
                  <span className="inline-block text-xs font-bold text-black bg-[#f2fce2] px-2 py-0.5 rounded shadow ml-1 border border-[#d6bcfa]">{proj.date}</span>
                </div>
                <ul className="list-disc ml-6 text-black text-[15px] font-inter mb-2 space-y-1">
                  {proj.description.map((desc, j) => (
                    <li key={j} className="">{desc}</li>
                  ))}
                </ul>
                <div className="mt-2 px-3 py-1 bg-[#ededfa]/95 border border-[#e0e0e4] rounded font-medium text-xs text-black inline-block shadow-sm">
                  <b>Tech:</b> {proj.tech}
                </div>
              </div>
              {/* Decorative Dot for extra effect */}
              <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ffdfe2] group-hover:bg-[#8B5CF6] transition-all shadow" />
            </div>
          )
        })}
      </div>
    </section>
  );
}
