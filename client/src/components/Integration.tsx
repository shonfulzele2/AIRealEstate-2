import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  ArrowLeftRight, 
  ExternalLink, 
  Code, 
  Database, 
  FileSpreadsheet, 
  MessageSquare, 
  Workflow, 
  Check, 
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const Integration = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [activeIntegration, setActiveIntegration] = useState(0);
  const integrationRef = useRef<HTMLDivElement>(null);
  
  // Integration platforms specifically mentioned in the requirements with icons
  const integrationPlatforms = [
    { 
      name: "Make.com", 
      icon: Workflow,
      color: "#fa994e", 
      description: "Create powerful automated workflows with our no-code integration platform",
      connectsTo: ["CRM", "Email", "SMS", "Calendar", "Data Analysis"]
    },
    { 
      name: "n8n", 
      icon: Code,
      color: "#41aadf", 
      description: "Build complex automation workflows with this powerful open source platform",
      connectsTo: ["Data Processing", "API Connections", "Web Hooks", "CRM"]
    },
    { 
      name: "Google Sheets", 
      icon: FileSpreadsheet,
      color: "#0f9d58", 
      description: "Store, analyze and visualize your real estate data in convenient spreadsheets",
      connectsTo: ["Data Storage", "Reporting", "Analysis", "Collaboration"]
    },
    { 
      name: "Instantly", 
      icon: MessageSquare,
      color: "#5f6ff8", 
      description: "Automate LinkedIn outreach and multichannel marketing for lead generation",
      connectsTo: ["Lead Generation", "Email Sequences", "Social Media", "Marketing"]
    },
    { 
      name: "Vapi", 
      icon: MessageSquare,
      color: "#8055e4", 
      description: "Build AI voice assistants to automate client interactions and inquiries",
      connectsTo: ["Voice AI", "Customer Service", "Lead Qualification", "FAQ"]
    },
    { 
      name: "Zapier", 
      icon: ArrowLeftRight,
      color: "#FF4A00", 
      description: "Connect with thousands of apps without any coding knowledge required",
      connectsTo: ["Email Marketing", "CRM", "Task Management", "Lead Capture"]
    }
  ];

  const phases = [
    { 
      label: "PHASE 1", 
      title: "Quick Wins",
      description: "Implement high-impact, low-effort integrations first",
      duration: "2-4 weeks"
    },
    { 
      label: "PHASE 2", 
      title: "Core Systems",
      description: "Connect primary business systems and data flows",
      duration: "4-6 weeks"
    },
    { 
      label: "PHASE 3", 
      title: "Advanced AI",
      description: "Implement sophisticated AI automation and analytics",
      duration: "6-8 weeks"
    }
  ];

  const processSteps = [
    { 
      number: "1", 
      title: "Assessment", 
      description: "Analyze your current systems and identify integration points",
      icon: Database
    },
    { 
      number: "2", 
      title: "Design", 
      description: "Create a custom integration plan using optimal tools",
      icon: Code
    },
    { 
      number: "3", 
      title: "Implementation", 
      description: "Set up automations with minimal disruption to workflow",
      icon: ArrowLeftRight
    },
    { 
      number: "4", 
      title: "Optimization", 
      description: "Continuously refine automations based on performance",
      icon: Workflow
    }
  ];
  
  // Auto-rotate through integrations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIntegration((prev) => (prev + 1) % integrationPlatforms.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [integrationPlatforms.length]);

  // Animation for intersection observer
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
    
    if (integrationRef.current) {
      observer.observe(integrationRef.current);
    }
    
    return () => {
      if (integrationRef.current) {
        observer.unobserve(integrationRef.current);
      }
    };
  }, []);

  return (
    <section id="integrate" className="section-padding bg-gradient-to-b from-white to-accent/20">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-2">Powerful Integrations</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect your real estate business to powerful automation tools
          </p>
        </div>
        
        {/* Interactive integration showcase */}
        <div 
          ref={integrationRef} 
          className="bg-white rounded-xl shadow-lg p-8 mb-16 opacity-0 transform translate-y-6 transition-all duration-1000 integration-panel"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Integration selector */}
            <div className="lg:w-1/3">
              <h3 className="text-xl font-semibold mb-6 text-secondary">Select Integration Platform</h3>
              
              <div className="space-y-3">
                {integrationPlatforms.map((platform, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center",
                      activeIntegration === index 
                        ? "bg-secondary text-white shadow-md" 
                        : "bg-gray-50 hover:bg-gray-100"
                    )}
                    onClick={() => setActiveIntegration(index)}
                  >
                    <div 
                      className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                      style={{ 
                        backgroundColor: activeIntegration === index ? 'rgba(255,255,255,0.2)' : `${platform.color}20`, 
                        color: activeIntegration === index ? 'white' : platform.color 
                      }}
                    >
                      {(() => {
                        const Icon = platform.icon;
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{platform.name}</h4>
                    </div>
                    {activeIntegration === index && (
                      <ChevronRight className="h-5 w-5 ml-2 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side: Integration detail */}
            <div className="lg:w-2/3 bg-gray-50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div 
                    className="h-12 w-12 rounded-full flex items-center justify-center mr-4"
                    style={{ 
                      backgroundColor: `${integrationPlatforms[activeIntegration].color}20`,
                      color: integrationPlatforms[activeIntegration].color
                    }}
                  >
                    {(() => {
                      const Icon = integrationPlatforms[activeIntegration].icon;
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">{integrationPlatforms[activeIntegration].name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {integrationPlatforms[activeIntegration].description}
                </p>
                
                <h4 className="text-sm font-medium text-gray-500 mb-3">CONNECTS WITH</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {integrationPlatforms[activeIntegration].connectsTo.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-white rounded-full text-sm shadow-sm border border-gray-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-sm font-medium text-gray-500 mb-3">INTEGRATION EXAMPLE</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div 
                      className="h-8 w-8 rounded-full flex items-center justify-center mr-3"
                      style={{ 
                        backgroundColor: `${integrationPlatforms[activeIntegration].color}20`,
                        color: integrationPlatforms[activeIntegration].color
                      }}
                    >
                      {(() => {
                        const Icon = integrationPlatforms[activeIntegration].icon;
                        return <Icon className="h-4 w-4" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {integrationPlatforms[activeIntegration].name} + CRM Integration
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3 pl-11 border-l-2 border-dashed border-gray-200">
                    <div className="text-sm text-gray-600 space-y-3">
                      <p className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Automatically update property status in your CRM when listings change</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Send automated follow-ups when leads reach specific stages</span>
                      </p>
                      <p className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Generate analytics reports to identify your highest-value activities</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 bg-primary hover:bg-primary/90 group">
                  <span>Learn More</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation phases */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Phased Implementation Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={cn(
                  "p-6 rounded-xl transition-all duration-300 cursor-pointer",
                  activePhase === index 
                    ? "bg-primary text-white shadow-lg transform -translate-y-2" 
                    : "bg-white hover:shadow-md"
                )}
                onClick={() => setActivePhase(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold",
                    activePhase === index ? "bg-white/20" : "bg-primary/10 text-primary"
                  )}>
                    {phase.label}
                  </span>
                  <span className={cn(
                    "text-sm",
                    activePhase === index ? "text-white/80" : "text-gray-500"
                  )}>
                    {phase.duration}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className={activePhase === index ? "text-white/90" : "text-gray-600"}>
                  {phase.description}
                </p>
                
                {activePhase === index && (
                  <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
                    <span className="text-sm text-white/90">Current Focus</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Integration process */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Integration Process</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <div className={cn(
                      "w-48 h-48 rounded-full flex items-center justify-center p-10",
                      index % 2 === 0 ? "bg-blue-50" : "bg-green-50"
                    )}>
                      {(() => {
                        const Icon = step.icon;
                        return <Icon className={`h-full w-full ${index % 2 === 0 ? 'text-blue-500' : 'text-green-500'}`} />;
                      })()}
                    </div>
                  </div>
                  
                  <div className="relative md:w-1/2 flex items-center">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-0 md:left-auto md:right-auto md:translate-x-0 top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white transform md:translate-x-[-50%] shadow-sm"></div>
                    
                    <div className={`bg-white p-6 rounded-lg shadow-md hover-scale ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} w-full`}>
                      <div className="font-bold text-2xl text-primary mb-1">{step.number}</div>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
