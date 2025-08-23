import { Code, Globe, Database } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer with a Passion for Creating Scalable,
              User-Focused Solutions.
            </h3>

            <p className="text-muted-foreground">
              I am a recent graduate with a Bachelor’s degree in Information
              Science & Engineering from CMR Institute of Technology, Bengaluru.
              My academic journey, combined with hands-on projects and
              internships, has equipped me with strong programming fundamentals,
              problem-solving abilities, and a deep understanding of software
              development principles.
            </p>

            <p className="text-muted-foreground">
              I work across a variety of technologies, with expertise in C,
              Java, Python, HTML, CSS, JavaScript, React.js, AngularJS, SQL, and
              MongoDB. My experience spans full-stack development, database
              design, and creating responsive, user-friendly web applications. I
              enjoy transforming ideas into functional and efficient digital
              solutions.
            </p>

            <p className="text-muted-foreground">
              I am passionate about building impactful technology, exploring
              modern frameworks, and continuously expanding my skill set. I
              thrive in collaborative environments where I can contribute to
              innovative projects and deliver high-quality results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <HashLink smooth to="#contact" className="cosmic-button">
                Get In Touch
              </HashLink>

              <a
                href="https://drive.google.com/file/d/1I4M2IQVJsDge6Z_uDKH5AnPh3bK7yyy6/view?usp=drive_link"
                className="px-6 py-2 rounded-full border-2 border-[#228B22] text-[#228B22] hover:text-green-700 
                  hover:border-green-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS (ONLY 3) */}
          <div className="grid grid-cols-1 gap-6">
            {/* Programming Languages */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Programming Languages
                  </h4>
                  <p className="text-muted-foreground">
                    Proficient in C, Java, and Python with strong foundations in
                    problem-solving and algorithms.
                  </p>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Experienced in HTML, CSS, JavaScript, React.js, and
                    AngularJS for creating responsive web apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Databases</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience with SQL and MongoDB for designing
                    efficient database solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
