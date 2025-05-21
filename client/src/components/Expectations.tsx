import { AlertTriangle, CheckCircle } from "lucide-react";

const Expectations = () => {
  const limitations = [
    {
      title: "Potential Inaccuracy",
      description: "AI systems can sometimes produce incorrect information that requires verification."
    },
    {
      title: "\"Hallucination\" Risks",
      description: "AI may occasionally generate information that appears plausible but is fabricated."
    },
    {
      title: "Potential for Bias",
      description: "Without proper oversight, AI systems can perpetuate existing biases in data."
    }
  ];

  const mitigations = [
    {
      title: "Human-in-the-Loop Design",
      description: "Our systems maintain appropriate human oversight for critical decisions and content verification."
    },
    {
      title: "Guardrails Against Hallucination",
      description: "We implement specific technical controls to minimize fabricated information."
    },
    {
      title: "Bias Detection & Correction",
      description: "We actively monitor for and address potential biases in our AI systems."
    }
  ];

  return (
    <section id="expectations" className="section-padding bg-accent">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Managing Expectations & Limitations</h2>
          <p className="section-subheading">
            We believe transparency builds trust. While AI offers powerful capabilities, we're upfront about its limitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">AI Limitations We Address</h3>
            
            {limitations.map((limitation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 mr-3 mt-1 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{limitation.title}</h4>
                    <p className="text-gray-600">
                      {limitation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Our Mitigation Strategies</h3>
            
            {mitigations.map((mitigation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 mr-3 mt-1 flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{mitigation.title}</h4>
                    <p className="text-gray-600">
                      {mitigation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
