import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Data", href: "#data" },
  { label: "Security", href: "#security" },
  { label: "Integrate", href: "#integrate" },
  { label: "Team", href: "#team" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Set navbar style based on scroll position
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Set active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-shadow duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-white"
    )}>
      <div className="container-section">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-secondary font-bold text-2xl flex items-center">
                  <Building className="mr-2 h-6 w-6" />
                  <span>RealEstateAI</span>
                </div>
              </a>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "nav-link",
                  activeSection === link.href.replace("#", "") ? "active" : ""
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace("#", "");
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact Us
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary hover:text-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-secondary hover:text-primary hover:bg-gray-100 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const targetId = link.href.replace("#", "");
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
