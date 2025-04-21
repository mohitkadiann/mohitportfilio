
import { Code, Book, Database, Users, Settings, Languages } from "lucide-react";

const skills = [
  { name: "C++", icon: Code },
  { name: "Java", icon: Code },
  { name: "Python", icon: Code },
  { name: "HTML", icon: Book },
  { name: "CSS", icon: Book },
  { name: "MySQL", icon: Database },
  { name: "Teamwork", icon: Users },
  { name: "Project Mgmt", icon: Settings },
  { name: "Analytical", icon: Settings },
  { name: "English, Hindi", icon: Languages },
];

const interests = [
  "Data Structures and Algorithms", "Dynamic Programming"
];

export default function SkillsSection() {
  return (
    <section className="bg-white/90 text-black p-4 rounded-md shadow-md"> {/* Changed background to off-white and text to black */}
      <h2 className="font-playfair text-2xl md:text-3xl text-primary mt-4 mb-3">Skills & Interests</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        {skills.map(({ name, icon: Icon }) => (
          <div key={name} className="bg-secondary rounded-lg px-3 py-4 flex flex-col items-center shadow-md hover-scale transition-all">
            <Icon className="text-primary mb-1" size={28} />
            <span className="font-medium text-xs md:text-sm">{name}</span>
          </div>
        ))}
      </div>
      <div className="mb-2">
        <span className="font-medium">Soft Skills:</span> Effective problem-solving, Teamwork, Project management, Analytical skills, Time management
      </div>
      <div className="mb-2">
        <span className="font-medium">Area of Interest:</span> {interests.join(", ")}
      </div>
    </section>
  )
}
