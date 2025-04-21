
import { GraduationCap, Book } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology — CSE",
    details: "Current CGPA: 7.95",
    location: "Phagwara, Punjab",
    period: "Sept 2022 — Present",
  },
  {
    school: "R.E.D. Sr. Sec. School",
    degree: "Senior Secondary",
    details: "Percentage: 91.8%",
    location: "Jhajjar, Haryana",
    period: "2020 — 2021"
  },
  {
    school: "R.E.D. Sr. Sec. School",
    degree: "Secondary",
    details: "Percentage: 95.2%",
    location: "Jhajjar, Haryana",
    period: "2018 — 2019"
  },
];

export default function EducationSection() {
  return (
    <section>
      <h2 className="font-playfair text-2xl md:text-3xl text-primary mb-3 mt-8">Education</h2>
      <div className="flex flex-col gap-5">
        {education.map((edu, i) => (
          <div key={i} className="bg-card rounded-xl px-6 py-4 shadow flex items-start gap-5 animate-fade-in">
            <GraduationCap className="text-primary mt-1" size={28} />
            <div>
              <div className="font-bold text-lg text-gray-900">{edu.school}</div>
              <div className="text-sm text-gray-800">{edu.degree}{edu.details && <> — <span className="font-medium text-primary">{edu.details}</span></>}</div>
              <div className="text-xs text-gray-600">{edu.location}, {edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
