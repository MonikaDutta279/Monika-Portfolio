import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Learning Platform",
    description:
      "A web-based platform with learner and tutor dashboards, enabling course management, video sharing, and interactive learning features.",
    image: import.meta.env.BASE_URL + "/images/onlineLearning.jpg",
    tags: ["PHP", "CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/MonikaDutta279/Online_Learning_Platform",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description:
      "Desktop application for tracking products, categories, and orders, with integrated billing using the iText library.",
    image: import.meta.env.BASE_URL + "/images/inventory.jpg",
    tags: ["Java Swing", "MySQL"],
    githubUrl:
      "https://github.com/MonikaDutta279/Inventory-Management-System",
    demoUrl: "",
  },
  {
    id: 3,
    title: "HotelEase",
    description:
      "A desktop hotel management application that streamlines room booking, guest records, and billing processes.",
    image: import.meta.env.BASE_URL + "/images/hoteleasy.png",
    tags: ["Java Swing", "MySQL"],
    githubUrl:
      "https://github.com/MonikaDutta279/Hotel_Booking_System",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Bank Simulator",
    description:
      "A desktop banking system simulation featuring account creation, transactions, and balance management.",
    image: import.meta.env.BASE_URL + "/images/bank.jpg",
    tags: ["Java Swing", "MySQL"],
    githubUrl:
      "https://github.com/MonikaDutta279/Banking-Simulation-System",
    demoUrl: "",
  },
  {
    id: 5,
    title: "iNotebook",
    description:
      "A secure cloud-based note-taking app built with React and MongoDB, allowing users to manage notes anytime, anywhere.",
    image: import.meta.env.BASE_URL + "/images/iNotebook.jpg",
    tags: ["React", "MongoDB"],
    githubUrl: "https://github.com/MonikaDutta279/iNotebook-App",
    demoUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A collection of my projects — from AI-powered solutions to backend applications and utility tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MonikaDutta279"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
