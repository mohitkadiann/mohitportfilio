
import { Award, Star } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="bg-white/90 text-black p-4 rounded-md shadow-md mt-8">
      <h2 className="font-playfair text-2xl md:text-3xl text-primary mb-3">Achievements</h2>
      <div className="bg-secondary rounded-xl px-6 py-4 shadow mb-5 animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <Star className="text-primary" size={20} />
          <span className="font-semibold text-gray-900">Solved 150+ problems on coding platforms</span>
        </div>
        <div className="text-gray-700 text-sm mb-2">
          Consistent problem solving in DSA and C++ on multiple platforms like Geeks for Geeks.
        </div>
        <div className="flex items-center gap-3 mb-1">
          <Award className="text-primary" size={20} />
          <span className="font-semibold text-gray-900">Dean’s List – Top 10% of University</span>
        </div>
        <div className="text-gray-700 text-sm">
          Recognized for academic excellence and active involvement in extracurriculars.
        </div>
      </div>
      <div className="text-primary text-sm font-medium px-1 mb-2">Certificates</div>
      <ul className="ml-4 list-disc text-gray-700 text-sm">
        <li>Complete Interview Preparation – Geeks For Geeks (Jul 2025)</li>
        <li>Prompt Engineering for ChatGPT – Coursera (Feb 2024)</li>
        <li>Mastering Data Structures and Algorithm – Udemy (Jan 2024)</li>
      </ul>
    </section>
  );
}
