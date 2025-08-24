// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import { HashLink as Link } from "react-router-hash-link";


// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled
//           ? "py-3 bg-background/60 backdrop-blur-md shadow-md"
//           : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <HashLink
//           smooth
//           to="/#hero"
//           className="text-xl font-bold text-primary flex items-center"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> Monika Dutta </span>{" "}
//             Portfolio
//           </span>
//         </HashLink>

//         {/* desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <HashLink
//               key={key}
//               smooth
//               to={`/${item.href}`}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </HashLink>
//           ))}
//         </div>

//         {/* mobile nav */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* mobile menu overlay */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <HashLink
//                 key={key}
//                 smooth
//                 to={`/${item.href}`}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </HashLink>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };



import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ThemeToggle } from "./ThemeToggle"; // ⬅️ import here

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-md shadow-md"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <HashLink
          smooth
          to="/#hero"
          className="text-xl font-bold text-primary flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Monika Dutta </span>{" "}
            Portfolio
          </span>
        </HashLink>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <HashLink
              key={key}
              smooth
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </HashLink>
          ))}

          {/* Theme Toggle (inside navbar) */}
          <ThemeToggle />
        </div>

        {/* mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <HashLink
                key={key}
                smooth
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </HashLink>
            ))}

            {/* Theme Toggle also available in mobile menu */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
