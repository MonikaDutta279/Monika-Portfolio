import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaCertificate,
  FaTrophy,
  FaIndustry,
  FaHandshake,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaGraduationCap size={40} className="text-primary" />,
    title: "Strong Academic Record",
    description:
      "Graduated with a B.E. in Information Science & Engineering from CMR Institute of Technology, Bengaluru, securing a CGPA of 8.72. Scored 92% in Class 12 and 94.2% in Class 10.",
  },
  {
    icon: <FaBriefcase size={40} className="text-primary" />,
    title: "Industry Experience",
    description:
      "Completed internships at Varcons Technologies Pvt. Ltd. and InternPe, contributing to web application development, testing, and collaborative project work.",
  },
  {
    icon: <FaLaptopCode size={40} className="text-primary" />,
    title: "Notable Projects",
    description:
      "Developed a Furniture Store website using HTML, CSS, and VS Code, and built a Hotel Management System with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
  },
  {
    icon: <FaCertificate size={40} className="text-primary" />,
    title: "Professional Certifications",
    description:
      "Earned certifications including C for Everyone (Coursera), Java Programming (Coursera), Crash Course on Python (Coursera), Supervised Machine Learning (Coursera), and JavaScript (Udemy).",
  },
  {
    icon: <FaTrophy size={40} className="text-primary" />,
    title: "Awards & Rankings",
    description:
      "Secured 3rd Rank in HackerEarth Hackathon, 3rd Rank at National Science Exhibition (NIT Jamshedpur), and ranked 197th out of 2525 participants in HPE Code Wars 2021.",
  },
  {
    icon: <FaIndustry size={40} className="text-primary" />,
    title: "Industrial Exposure",
    description:
      "Visited U.R. Rao Satellite Centre in September 2023, gaining insights into satellite development and space technology.",
  },
  {
    icon: <FaHandshake size={40} className="text-primary" />,
    title: "Volunteering",
    description:
      "Actively volunteered with NSS during the EYSS Event at CMRIT in August 2022, contributing to event coordination and community engagement.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Recognitions, certifications, projects, awards, and milestones from my academic and technical journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="achievement-card p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 bg-card flex flex-col items-start gap-4"
            >
              <div className="achievement-icon mb-2">{ach.icon}</div>
              <h3 className="achievement-title text-lg font-semibold">
                {ach.title}
              </h3>
              <p className="achievement-description text-muted-foreground">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
