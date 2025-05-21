import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-white">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
              Escape the Admin Trap, Focus on What Matters
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our AI automation solutions eliminate mind-numbing, repetitive grunt work so you can focus on revenue-generating activities: building relationships and closing deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
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
                className="border-secondary text-secondary hover:bg-gray-50"
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
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900" 
              alt="Real estate agent using AI technology" 
              className="rounded-xl shadow-xl w-full h-auto object-cover" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Save 15+ Hours Weekly</h3>
            <p className="text-gray-600">Eliminate administrative tasks and reclaim your time for client-focused activities.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">42% More Lead Responses</h3>
            <p className="text-gray-600">Automated follow-ups ensure no lead falls through the cracks.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">28% Revenue Growth</h3>
            <p className="text-gray-600">When agents focus on relationships instead of paperwork, sales increase.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
