import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react"; 

const About = () => {
  const benefits = [
    "Deep understanding of real estate workflows and pain points",
    "Specialized AI solutions specifically for real estate, not generic tools",
    "Commitment to security, compliance, and ethical AI implementation",
    "Transparent approach with clear ROI measurement"
  ];

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About RealEstateAI</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're a team of AI specialists and real estate industry veterans who understand the unique challenges faced by agents and brokerages in today's competitive market.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to free real estate professionals from administrative burdens so they can focus on what they do best—building relationships and closing deals.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-gray-50"
              asChild
            >
              <a 
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  const solutionsSection = document.getElementById("solutions");
                  if (solutionsSection) {
                    window.scrollTo({
                      top: solutionsSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Explore Solutions
              </a>
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Real estate professionals at industry event" 
              className="rounded-xl shadow-xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
