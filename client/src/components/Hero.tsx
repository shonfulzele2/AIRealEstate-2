import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation for stats when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      statItems.forEach(item => observer.observe(item));
    }
    
    return () => {
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        statItems.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="home" className="section-padding bg-gradient-to-b from-white to-accent/30">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 animate-fadeIn">
              <span className="text-primary">AI-Powered</span> Real Estate
              <br />
              <span className="relative">
                Less Admin. More Deals.
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Automate the grunt work. Focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
                asChild
              >
                <a href="#solutions" onClick={(e) => {
                  e.preventDefault();
                  const solutionsSection = document.getElementById("solutions");
                  if (solutionsSection) {
                    window.scrollTo({
                      top: solutionsSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}>
                  Discover Solutions
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-gray-50 transition-transform hover:scale-105"
                asChild
              >
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}>
                  Free Consultation
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900&q=80" 
                alt="Modern real estate with digital interface overlay" 
                className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105" 
              />
              {/* AI overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/70 to-transparent opacity-40"></div>
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-primary font-medium flex items-center space-x-1">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>AI Active</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg text-center">
                <span className="text-primary font-semibold">AI-Powered Real Estate Management</span>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center stat-item opacity-0 transform translate-y-4 transition-all duration-700 delay-100 ease-out">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-secondary">15+</h3>
            <h4 className="text-lg font-semibold mb-2">Hours Saved Weekly</h4>
            <p className="text-gray-600 text-sm">Eliminate admin tasks. Focus on clients.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center stat-item opacity-0 transform translate-y-4 transition-all duration-700 delay-300 ease-out">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-secondary">42%</h3>
            <h4 className="text-lg font-semibold mb-2">More Lead Responses</h4>
            <p className="text-gray-600 text-sm">Never miss a lead opportunity again.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center stat-item opacity-0 transform translate-y-4 transition-all duration-700 delay-500 ease-out">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-secondary">28%</h3>
            <h4 className="text-lg font-semibold mb-2">Revenue Growth</h4>
            <p className="text-gray-600 text-sm">Focus on relationships, not paperwork.</p>
          </div>
        </div>
      </div>
      
      {/* Animation styles handled via Tailwind CSS */}
    </section>
  );
};

export default Hero;
