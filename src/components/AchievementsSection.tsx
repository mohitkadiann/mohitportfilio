
import { Award, Star } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="bg-[#eee] text-black p-4 rounded-md shadow-md mt-8">
      <h2 className="font-playfair text-2xl md:text-3xl text-black mb-3">Achievements</h2>
      {/* Achievements block */}
      <div className="rounded-xl px-6 py-4 shadow mb-6 bg-gradient-to-tr from-[#f2fce2] via-[#e5deff] to-[#f1f0fb] border border-[#d6bcfa] animate-fade-in relative">
        <div className="flex items-center gap-3 mb-1">
          <Star className="text-black" size={20} />
          <span className="font-semibold text-black">Solved 150+ problems on coding platforms</span>
        </div>
        <div className="text-black text-sm mb-3">
          Consistent problem solving in DSA and C++ on multiple platforms like Geeks for Geeks.
        </div>
        <div className="flex items-center gap-3 mb-1">
          <Award className="text-black" size={20} />
          <span className="font-semibold text-black">Dean’s List – Top 10% of University</span>
        </div>
        <div className="text-black text-sm">
          Recognized for academic excellence and active involvement in extracurriculars.
        </div>
      </div>
      {/* Certificates block */}
      <div className="mb-1 flex items-center gap-2">
        <div className="w-1.5 h-5 bg-[#ffdfe2] rounded-full animate-fade-in" />
        <span className="text-black text-base font-semibold font-inter tracking-wide">
          Certificates
        </span>
      </div>
      <ul className="ml-6 mt-2 bg-[#fff7fa]/70 rounded-xl p-4 shadow border border-[#ffdfe2] list-disc text-black text-[15px] space-y-2 animate-fade-in">
        <li>
          <span className="font-semibold">Complete Interview Preparation</span> – Geeks For Geeks <span className="text-xs font-bold bg-[#ffdee2] text-black px-2 py-0.5 rounded ml-1">Jul 2025</span>
        </li>
        <li>
          <span className="font-semibold">Prompt Engineering for ChatGPT</span> – Coursera <span className="text-xs font-bold bg-[#ffdee2] text-black px-2 py-0.5 rounded ml-1">Feb 2024</span>
        </li>
        <li>
          <span className="font-semibold">Mastering Data Structures and Algorithm</span> – Udemy <span className="text-xs font-bold bg-[#ffdee2] text-black px-2 py-0.5 rounded ml-1">Jan 2024</span>
        </li>
      </ul>
    </section>
  );
}
