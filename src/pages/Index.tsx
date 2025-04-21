
import ProfileHero from "../components/ProfileHero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <nav className="w-full sticky top-0 z-10 bg-[#f3f3f3] backdrop-blur-md px-6 py-3 flex items-center justify-between shadow">
        <span className="text-xl font-playfair font-bold tracking-wide text-black">Mohit</span>
        <span className="text-sm text-black/80 font-playfair">Portfolio</span>
      </nav>
      <main className="max-w-3xl mx-auto px-2 py-0 animate-fade-in">
        <ProfileHero />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
        <footer className="text-xs text-gray-700 pt-10 pb-4 text-center">
          &copy; {new Date().getFullYear()} Mohit Kadian — Portfolio
        </footer>
      </main>
    </div>
  );
};

export default Index;
