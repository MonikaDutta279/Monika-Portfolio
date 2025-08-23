import { ArrowDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 z-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              {" "}
              Hi, <br /> I'm{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Monika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dutta
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Software Developer | B.E. Information Science & Engineering
          </p>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3"
            style={{ textAlign: "justify" }}
          >
            Recent graduate and passionate Software Developer with a strong
            foundation in building scalable web applications, integrating
            AI-driven solutions, and delivering full-stack projects from
            concept to deployment. Skilled in translating complex ideas into
            clean, efficient code, with hands-on experience from internships,
            academic projects, and real-world collaborations. Driven to
            continuously learn, adapt, and contribute to impactful technology
            solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <HashLink smooth to="#projects" className="cosmic-button">
              View My Work
            </HashLink>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img
              src={import.meta.env.BASE_URL + "images/monikaprofile.jpg"}
              alt="Monika Dutta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
