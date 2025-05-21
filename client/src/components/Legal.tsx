import { Scale } from "lucide-react";

const Legal = () => {
  const regulations = [
    "Liability considerations for AI-generated content",
    "Intellectual property questions when using or training models",
    "Compliance with industry-specific regulations"
  ];

  const ethics = [
    "Active bias identification and mitigation processes",
    "Transparency in AI capabilities and limitations",
    "Commitment to responsible AI development"
  ];

  return (
    <section id="legal" className="section-padding bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Legal & Ethical Considerations</h2>
          <p className="section-subheading">
            Navigating the evolving legal landscape of AI in real estate.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Evolving Regulations</h3>
              <p className="text-gray-600 mb-6">
                The legal framework for AI in real estate is still developing. We monitor regulatory changes and adapt our solutions to maintain compliance.
              </p>
              
              <ul className="space-y-4">
                {regulations.map((regulation, index) => (
                  <li key={index} className="flex items-start">
                    <Scale className="text-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>{regulation}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Ethical AI Framework</h3>
              <p className="text-gray-600 mb-6">
                We adhere to strict ethical standards in our AI implementation, focusing on fairness and transparency.
              </p>
              
              <ul className="space-y-4">
                {ethics.map((ethic, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>{ethic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-600 mb-6">
              We stay at the forefront of legal and ethical developments in AI, ensuring our clients benefit from innovative solutions while remaining compliant with current and emerging regulations.
            </p>
            <div className="text-sm text-gray-500">
              <a href="#" className="underline hover:text-primary">Privacy Policy</a> | 
              <a href="#" className="underline hover:text-primary ml-2">Terms of Service</a> | 
              <a href="#" className="underline hover:text-primary ml-2">AI Ethics Statement</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import missing component
import { CheckCircle } from "lucide-react";

export default Legal;
