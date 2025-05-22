import { useState, useEffect, useRef } from "react";
import { 
  MessageCircle,
  CalendarCheck,
  RefreshCw,
  PenTool,
  Database,
  PieChart,
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LottieAnimation } from "./LottieAnimation";
import automationAnimation from "../assets/animations/automation.json";
import realEstateHouseAnimation from "../assets/animations/real-estate-house.json";

// Interactive Solution Card component with animation
const SolutionCard = ({ 
  icon: Icon, 
  title, 
  benefit,
  stats,
  isActive,
  onClick
}: { 
  icon: React.ElementType, 
  title: string, 
  benefit: string,
  stats: string,
  isActive: boolean,
  onClick: () => void
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer transform ${
        isActive ? "scale-105 ring-2 ring-primary" : "hover:shadow-xl hover:scale-[1.02]"
      }`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center justify-center h-14 w-14 rounded-full ${
            isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
          } transition-colors duration-300`}>
            <Icon className="h-7 w-7" />
          </div>
          {isActive && <ArrowRight className="h-5 w-5 text-primary animate-pulse" />}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{benefit}</p>
        
        {isActive && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: stats, transition: "width 1s ease-in-out" }}
                ></div>
              </div>
              <span className="ml-3 font-bold text-primary">{stats}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const solutions = [
    {
      icon: MessageCircle,
      title: "Automated Lead Follow-up",
      benefit: "Never miss a lead opportunity with AI-powered follow-ups",
      stats: "4x",
      detail: "Increase in successful conversions"
    },
    {
      icon: CalendarCheck,
      title: "Intelligent Scheduling",
      benefit: "Eliminate scheduling hassles with automated booking",
      stats: "4h",
      detail: "Time saved per agent weekly"
    },
    {
      icon: RefreshCw,
      title: "Listing Management",
      benefit: "Keep listings updated across all platforms automatically",
      stats: "99%",
      detail: "Consistency across channels"
    },
    {
      icon: PenTool,
      title: "Content Generation",
      benefit: "Create engaging property descriptions and posts in seconds",
      stats: "3x",
      detail: "More marketing content"
    },
    {
      icon: Database,
      title: "CRM Integration",
      benefit: "Automate data entry and keep client records accurate",
      stats: "96%",
      detail: "Reduction in manual data entry"
    },
    {
      icon: PieChart,
      title: "Performance Analysis",
      benefit: "Get actionable insights from your business data",
      stats: "4x",
      detail: "Better-informed decisions"
    }
  ];
  
  const nextSolution = () => {
    setActiveSolution((prev) => (prev + 1) % solutions.length);
  };
  
  const prevSolution = () => {
    setActiveSolution((prev) => (prev - 1 + solutions.length) % solutions.length);
  };
  
  // Auto-scroll through solutions
  useEffect(() => {
    const interval = setInterval(() => {
      nextSolution();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation for elements when they come into view
  useEffect(() => {
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
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-white to-accent/50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-2">AI Solutions for Real Estate</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive tools that automate your most time-consuming tasks
          </p>
        </div>
        
        <div ref={carouselRef} className="solutions-panel">
          {/* Featured solution detail */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="p-8 relative">
              <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {activeSolution + 1} of {solutions.length}
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <div className="flex items-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      {(() => {
                        const Icon = solutions[activeSolution].icon;
                        return <Icon className="h-10 w-10 text-primary" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-secondary">{solutions[activeSolution].title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{solutions[activeSolution].benefit}</p>
                  
                  <div className="bg-accent p-5 rounded-lg shadow-md">
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-bold text-primary">{solutions[activeSolution].stats}</span>
                      <span className="text-gray-700 pb-1">{solutions[activeSolution].detail}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-3 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="bg-primary h-3 rounded-full animate-grow"
                        style={{ 
                          width: solutions[activeSolution].stats.includes('%') 
                            ? solutions[activeSolution].stats 
                            : '75%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-semibold mb-3">How It Works</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white mr-3 mt-0.5">1</span>
                        <span>AI analyzes your workflow and identifies optimization points</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white mr-3 mt-0.5">2</span>
                        <span>Automation tools connect with your existing systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white mr-3 mt-0.5">3</span>
                        <span>Tasks are handled automatically while you maintain control</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4 mb-6 h-24">
                      <LottieAnimation 
                        animationData={automationAnimation} 
                        loop={true} 
                        autoplay={true} 
                      />
                    </div>
                    
                    <Button 
                      className="mt-2 bg-white text-secondary hover:bg-white/90"
                      asChild
                    >
                      <a href="#contact">Schedule Demo</a>
                    </Button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-blue-400/10 blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solutions carousel */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <h3 className="text-xl font-semibold text-secondary">Explore Our Solutions</h3>
              <div className="ml-auto flex space-x-2">
                <button 
                  onClick={prevSolution}
                  className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50"
                  aria-label="Previous solution"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextSolution}
                  className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50"
                  aria-label="Next solution"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  icon={solution.icon}
                  title={solution.title}
                  benefit={solution.benefit}
                  stats={solution.stats}
                  isActive={index === activeSolution}
                  onClick={() => setActiveSolution(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Solutions;
