import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  SiC, 
  SiMongodb, 
  SiAngular, 
  SiJira, 
  SiMysql, 
  SiPostgresql 
} from "react-icons/si";

import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaProjectDiagram, 
  FaNetworkWired,
  FaWindowMaximize 
} from "react-icons/fa";

import { DiVisualstudio, DiIntellij } from "react-icons/di";

// Floating animation class
const floatClass = "animate-float";

const skills = [
  // Languages & Frameworks
  { name: "C", category: "languages", icon: <SiC size={40} className={floatClass}/> },
  { name: "Java", category: "languages", icon: <FaJava size={40} className={floatClass}/> },
  { name: "Python", category: "languages", icon: <FaPython size={40} className={floatClass}/> },
  { name: "DSA", category: "languages", icon: <FaProjectDiagram size={40} className={floatClass}/> },
  { name: "HTML", category: "languages", icon: <FaHtml5 size={40} className={floatClass}/> },
  { name: "CSS", category: "languages", icon: <FaCss3Alt size={40} className={floatClass}/> },
  { name: "JavaScript", category: "languages", icon: <FaJs size={40} className={floatClass}/> },
  { name: "React.js", category: "languages", icon: <FaReact size={40} className={floatClass}/> },
  { name: "AngularJS", category: "languages", icon: <SiAngular size={40} className={floatClass}/> },

  // Databases
  { name: "MySQL", category: "backend", icon: <SiMysql size={40} className={floatClass}/> },
  { name: "PostgreSQL", category: "backend", icon: <SiPostgresql size={40} className={floatClass}/> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb size={40} className={floatClass}/> },

  // Tools & IDEs
  { name: "Jira", category: "tools", icon: <SiJira size={40} className={floatClass}/> },
  { name: "Data Engineering", category: "tools", icon: <FaNetworkWired size={40} className={floatClass}/> },
  { name: "VS Code", category: "tools", icon: <DiVisualstudio size={40} className={floatClass}/> },
  { name: "IntelliJ IDEA", category: "tools", icon: <DiIntellij size={40} className={floatClass}/> },
  { name: "Java Swing", category: "tools", icon: <FaWindowMaximize size={40} className={floatClass}/> }, // Added Java Swing
];

const categories = ["all", "languages", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:border-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-semibold text-center text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
