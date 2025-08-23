import {
  FaSatellite,
  FaTrophy,
  FaLaptopCode,
  FaCodeBranch,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";

const experiences = [
  {
    date: "September 2023",
    title: "Industrial Visit",
    subtitle: "U.R. Rao Satellite Centre",
    description:
      "Gained insights into satellite development and space technology during an academic industrial visit.",
    icon: <FaSatellite className="text-primary h-6 w-6" />,
  },
  {
    date: "2023",
    title: "Programming Hackathon",
    subtitle: "HackerEarth Club",
    description:
      "Secured 3rd rank in a programming hackathon, demonstrating problem-solving skills, teamwork, and coding proficiency.",
    icon: <FaTrophy className="text-primary h-6 w-6" />,
  },
  {
    date: "2024",
    title: "Intern",
    subtitle: "Varcons Technologies Private Limited",
    description:
      "Developed and tested applications, collaborated with the development team, and engaged in continuous learning to support project goals.",
    icon: <FaLaptopCode className="text-primary h-6 w-6" />,
  },
  {
    date: "2024",
    title: "Intern",
    subtitle: "InternPe",
    description:
      "Assisted in the development and maintenance of web applications, collaborating with team members to meet project deadlines and deliverables.",
    icon: <FaCodeBranch className="text-primary h-6 w-6" />,
  },
  {
    date: "2021 - 2025",
    title: "Bachelors of Engineering – Information Science and Engineering",
    subtitle: "CMR Institute of Engineering, Bengaluru",
    description:
      "Graduated with an 8.72 CGPA, gaining a strong foundation in programming, problem-solving, and modern software development practices.",
    icon: <FaGraduationCap className="text-primary h-6 w-6" />,
  },
  {
    date: "2025 - Present",
    title: "Software Development Intern",
    subtitle: "HashedIn by Deloitte",
    description:
      "Working on enterprise solutions, gaining hands-on experience in Spring Boot, Angular, Python with Generative AI, and Data Engineering. Collaborating with cross-functional teams to deliver scalable applications.",
    icon: <FaCode className="text-primary h-6 w-6" />,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          My professional journey, internships, and academic milestones
        </p>

        <div className="relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center mb-12 relative"
            >
              {/* Timeline Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-6 md:mr-12">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">
                  {exp.date}
                </div>
                <h3 className="font-semibold text-xl">{exp.title}</h3>
                <h4 className="text-primary font-medium mb-2">
                  {exp.subtitle}
                </h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>

              {/* Timeline line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 h-full border-l-2 border-primary/30 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
