import { 
  MessageCircle,
  CalendarCheck,
  RefreshCw,
  PenTool,
  Database,
  PieChart
} from "lucide-react";

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  whyItMatters 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  whyItMatters: string 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="bg-accent p-3 rounded-md">
          <p className="text-sm text-gray-700 font-medium">Why it matters:</p>
          <p className="text-sm text-gray-600">
            {whyItMatters}
          </p>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      icon: MessageCircle,
      title: "Automated Lead Follow-up",
      description: "Never miss a lead opportunity again. Our AI system sends personalized, timely follow-ups to every inquiry, increasing conversion rates.",
      whyItMatters: "42% of leads require 5+ follow-ups before converting, but most agents stop after 2. Automation ensures consistent nurturing."
    },
    {
      icon: CalendarCheck,
      title: "Intelligent Scheduling",
      description: "Eliminate the back-and-forth of scheduling. Our system automatically books appointments, sends reminders, and handles rescheduling.",
      whyItMatters: "The average real estate agent spends 4+ hours weekly just on scheduling tasks. Automation frees this time for client interaction."
    },
    {
      icon: RefreshCw,
      title: "Listing Management",
      description: "Automatically update property listings across multiple platforms, ensuring consistent, accurate information everywhere.",
      whyItMatters: "Incorrect or outdated listing information reduces buyer interest. Automation ensures perfect consistency across all channels."
    },
    {
      icon: PenTool,
      title: "Content Generation",
      description: "Create compelling property descriptions, social media posts, email campaigns, and more with AI-powered content creation.",
      whyItMatters: "Quality marketing content drives interest, but takes considerable time to create. Our AI generates high-converting content in seconds."
    },
    {
      icon: Database,
      title: "CRM Integration & Management",
      description: "Automate data entry, contact updates, and activity logging in your CRM system, ensuring complete and accurate client records.",
      whyItMatters: "Manual CRM updates are often neglected due to time constraints, leading to missed opportunities. Automation ensures your data is always current."
    },
    {
      icon: PieChart,
      title: "Performance Analytics",
      description: "Get actionable insights from your business data with automated reporting and analysis customized for real estate metrics.",
      whyItMatters: "Data-driven decisions improve performance, but manual analysis is time-consuming. Our system delivers ready-to-use insights."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-accent">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Solutions & Services</h2>
          <p className="section-subheading">
            Our AI automation solutions target the most time-consuming tasks in real estate, giving you back hours in your day to focus on what truly matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              whyItMatters={solution.whyItMatters}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
