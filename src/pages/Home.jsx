import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementsSection } from "../components/AchievementSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar with ThemeToggle inside */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 md:pt-5">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};


// import { Navbar } from "../components/Navbar";
// import { ThemeToggle } from "../components/ThemeToggle";
// import { StarBackground } from "@/components/StarBackground";
// import { HeroSection } from "../components/HeroSection";
// import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "../components/SkillsSection";
// import { ProjectsSection } from "../components/ProjectsSection";
// import { ExperienceSection } from "../components/ExperienceSection";
// import { AchievementsSection } from "../components/AchievementSection";
// import { ContactSection } from "../components/ContactSection";
// import { Footer } from "../components/Footer";

// export const Home = () => {
//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       {/* Theme Toggle */}
//       <ThemeToggle />
//       {/* Background Effects */}
//       <StarBackground />

//       {/* Navbar */}
//       <Navbar />
//       {/* Main Content */}
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <ExperienceSection />
//         <AchievementsSection/>
//         <ContactSection />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };
