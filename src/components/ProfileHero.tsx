
import { Linkedin, Github, Mail } from "lucide-react";

const links = {
  linkedin: "https://www.linkedin.com/in/mohitkadiann/",
  github: "https://github.com/mohitkadiann",
  email: "kadian.mohit003@gmail.com",
};

export default function ProfileHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center pt-10 pb-8 md:pb-14">
      {/* Removed the img element to not show the picture */}
      <div className="text-center md:text-left max-w-lg animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-black mb-2">Mohit</h1>
        <h2 className="text-xl md:text-2xl font-inter font-semibold text-gray-800 mb-1">B.Tech CSE, 3rd Year Student</h2>
        <div className="text-gray-700 mb-4">
          Passionate about Data Structures, Algorithms, and Machine Learning. <br /> Eager learner – aspiring developer.
        </div>
        <div className="flex items-center gap-5 justify-center md:justify-start mt-2">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover-scale text-black">
            <Linkedin size={28} />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover-scale text-black">
            <Github size={28} />
          </a>
          <a href={`mailto:${links.email}`} className="hover-scale text-black">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
