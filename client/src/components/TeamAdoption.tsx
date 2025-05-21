import { 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Users,
  Heart,
  Brain,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { LottieAnimation } from "./LottieAnimation";
import realEstateHouseAnimation from "../assets/animations/real-estate-house.json";

const TeamAdoption = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const challenges = [
    "Fear that AI will replace agent jobs",
    "Resistance to learning new technology",
    "Concerns about technology complexity",
    "Skepticism about AI's effectiveness"
  ];

  const approaches = [
    "Personalized training programs for all skill levels",
    "Focus on augmenting, not replacing, agent capabilities",
    "Champion programs to build internal advocates",
    "Resources for developing AI skills at every career stage"
  ];

  const humanSkills = [
    {
      title: "Relationship Building",
      description: "Strengthening personal connections with clients",
      icon: Heart,
      color: "pink"
    },
    {
      title: "Negotiation Skills",
      description: "Securing the best deals for clients",
      icon: Sparkles,
      color: "yellow"
    },
    {
      title: "Trust & Empathy",
      description: "Understanding client needs on a deeper level",
      icon: Users,
      color: "blue"
    },
    {
      title: "Local Expertise",
      description: "Providing insights no AI can match",
      icon: Brain,
      color: "purple"
    }
  ];
  
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
    
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.human-skill-card');
      cards.forEach(card => observer.observe(card));
    }
    
    return () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.human-skill-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);
  
  // Rotate through skills automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % humanSkills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [humanSkills.length]);

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-accent to-white overflow-hidden">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-2">Human-Centered AI Adoption</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technology that empowers your team instead of replacing them
          </p>
        </div>
        
        {/* Interactive comparison cards */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 relative">
          <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mr-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Common Concerns</h3>
            </div>
            
            <ul className="space-y-4 mt-6">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-red-50 hover:shadow-sm">
                  <XCircle className="text-red-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg z-10">
            <ArrowRight className="h-5 w-5" />
          </div>
          
          <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mr-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Solutions</h3>
            </div>
            
            <ul className="space-y-4 mt-6">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-green-50 hover:shadow-sm">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{approach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Human excellence showcase */}
        <div className="p-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10 relative">
              <div className="relative bg-white p-4 rounded-lg shadow-md">
                <div className="h-64 flex items-center justify-center">
                  <LottieAnimation 
                    animationData={realEstateHouseAnimation} 
                    loop={true} 
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-center mt-4 bg-gradient-to-r from-primary/20 to-secondary/20 p-3 rounded">
                  <h3 className="text-xl font-semibold text-secondary">Real Estate + AI Automation</h3>
                  <p className="text-gray-600">Technology that empowers your agents</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
              <h3 className="text-2xl font-bold text-secondary mb-3">Human Skills AI Can't Replace</h3>
              <p className="text-gray-600 mb-8">
                Our platform handles repetitive tasks so your team can focus on what makes them exceptional:
              </p>
              
              <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {humanSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "human-skill-card p-4 rounded-lg transition-all duration-500 transform opacity-0 translate-y-4",
                      activeIndex === index ? "ring-2 ring-primary shadow-md" : "bg-gray-50 hover:bg-gray-100",
                      index % 2 === 0 ? "delay-100" : "delay-300"
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-start">
                      <div className={
                        skill.color === "pink" 
                          ? "inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-600 mr-3" 
                          : skill.color === "yellow" 
                            ? "inline-flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 mr-3" 
                            : skill.color === "blue" 
                              ? "inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mr-3" 
                              : "inline-flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 text-purple-600 mr-3"
                      }>
                        {(() => {
                          const Icon = skill.icon;
                          return <Icon className="h-5 w-5" />;
                        })()}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{skill.title}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAdoption;
