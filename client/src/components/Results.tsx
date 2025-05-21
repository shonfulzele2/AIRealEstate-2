import { Button } from "@/components/ui/button";
import { Clock, Mail, TrendingUp } from "lucide-react";

const Results = () => {
  const metrics = [
    {
      icon: Clock,
      value: "15+",
      title: "Hours Saved Weekly",
      description: "Per agent on administrative tasks, allowing more time for client interactions and sales activities."
    },
    {
      icon: Mail,
      value: "42%",
      title: "Increase in Lead Response",
      description: "Faster, more consistent follow-up leads to higher conversion rates and more closed deals."
    },
    {
      icon: TrendingUp,
      value: "28%",
      title: "Revenue Growth",
      description: "Average increase in closed deals when agents focus on relationships instead of paperwork."
    }
  ];

  const testimonials = [
    {
      quote: "Before implementing RealEstateAI's automation tools, I was spending 20+ hours weekly on administrative tasks. Now I've redirected that time to client meetings and closed 5 additional properties last quarter alone.",
      author: "Sarah Johnson",
      title: "Luxury Home Specialist, Coastal Realty"
    },
    {
      quote: "Our agency implemented the CRM automation and listing management tools, which eliminated data entry errors and ensured consistent property information across platforms. Our team now spends 40% less time on paperwork.",
      author: "Michael Rodriguez",
      title: "Managing Broker, Metropolitan Properties"
    }
  ];

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">ROI Measurement & Success Stories</h2>
          <p className="section-subheading">
            Clear, tangible value is our priority. See how our AI automation delivers measurable results for real estate professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-4xl font-bold text-secondary mb-2">{metric.value}</h3>
                <h4 className="text-xl font-semibold mb-4">{metric.title}</h4>
                <p className="text-gray-600">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <h3 className="text-2xl font-semibold mb-8 text-center">Success Stories</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic text-gray-600 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            asChild
          >
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
              Get Your Success Story Started
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
