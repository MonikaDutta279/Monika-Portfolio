import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ThemeToggle } from "./ThemeToggle";

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

  // Scroll listener for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Close menu helper
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/60 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center relative z-50">
        {/* Logo and Desktop Navigation Centered */}
        <div className="flex items-center justify-center space-x-47 w-full">
          {/* Logo */}
          <HashLink
            smooth
            to="/#hero"
            className="text-xl font-bold text-primary flex items-center"
            onClick={closeMenu}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Monika Dutta</span> Portfolio
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <HashLink
                key={key}
                smooth
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.name}
              </HashLink>
            ))}

            {/* Shared Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button - stays on top right */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground absolute right-4 top-1/2 transform -translate-y-1/2 z-[10000]"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-[9999] flex items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item, key) => (
              <HashLink
                key={key}
                smooth
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.name}
              </HashLink>
            ))}

            {/* Theme Toggle for mobile */}
            <div
              className="flex justify-center"
              onClick={closeMenu} // Close menu after toggling
            >
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};