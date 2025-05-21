import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Building, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Data", href: "#data" },
  { label: "Security", href: "#security" },
  { label: "Integrate", href: "#integrate" },
  { label: "Team", href: "#team" },
  { label: "Results", href: "#results" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
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
      "sticky top-0 z-50 w-full transition-all duration-300 enhanced-nav",
      isScrolled ? "scrolled" : ""
    )}>
      <div className="container-section">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <div 
              onClick={() => scrollToSection('home')}
              className="cursor-pointer"
            >
              <div className="text-secondary font-bold text-2xl flex items-center group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 mr-3">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <span>RealEstateAI</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className={cn(
                  "nav-link cursor-pointer",
                  activeSection === link.href.replace("#", "") ? "active" : ""
                )}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
              >
                {link.label}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 group"
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact Us</span>
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary hover:text-primary rounded-full"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu - animated dropdown */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t space-y-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className={cn(
                  "px-4 py-3 rounded-lg flex items-center cursor-pointer transition-colors duration-200",
                  activeSection === link.href.replace("#", "") 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-secondary hover:bg-gray-100"
                )}
                onClick={() => {
                  scrollToSection(link.href.replace("#", ""));
                  setIsMenuOpen(false);
                }}
              >
                <span>{link.label}</span>
                {activeSection === link.href.replace("#", "") && (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </div>
            ))}
            
            <div 
              className="mt-3 px-4 py-3 bg-primary/5 rounded-lg text-primary font-medium cursor-pointer hover:bg-primary/10 transition-colors duration-200"
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
