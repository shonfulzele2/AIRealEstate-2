import { Button } from "@/components/ui/button";

const Integration = () => {
  // Integration platforms specifically mentioned in the requirements
  const integrationPlatforms = [
    "Make.com", 
    "n8n", 
    "Google Sheets", 
    "Instantly", 
    "Vapi", 
    "Zapier"
  ];

  const phases = [
    { label: "PHASE 1", active: true },
    { label: "PHASE 2", active: false },
    { label: "PHASE 3", active: false }
  ];

  const processSteps = [
    { number: "1", title: "Assessment", description: "Analyze your current systems and identify integration points" },
    { number: "2", title: "Design", description: "Create a custom integration plan using optimal tools" },
    { number: "3", title: "Implementation", description: "Set up automations with minimal disruption to workflow" },
    { number: "4", title: "Optimization", description: "Continuously refine automations based on performance" }
  ];

  return (
    <section id="integrate" className="section-padding bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Integration & Implementation</h2>
          <p className="section-subheading">
            We integrate with your existing tools using industry-leading automation platforms to create powerful workflows without disrupting your current systems.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-gray-600 mb-6">
                Our solutions connect with your existing CRM, listing platforms, and business tools through robust APIs and automation platforms, creating cohesive workflows across your entire tech stack.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {integrationPlatforms.map((platform, index) => (
                  <div key={index} className="px-4 py-2 bg-white rounded-md shadow-sm flex items-center">
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Phased Implementation</h3>
              <p className="text-gray-600 mb-6">
                We roll out solutions gradually, focusing on quick wins first to demonstrate value while minimizing disruption to your operations. Each phase builds on previous successes.
              </p>
              
              <div className="flex gap-4 mb-6">
                {phases.map((phase, index) => (
                  <div 
                    key={index} 
                    className={`px-4 py-2 rounded-md shadow-sm ${
                      phase.active 
                        ? "bg-primary text-white" 
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    {phase.label}
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Custom Integration Solutions</h3>
              <p className="text-gray-600">
                We create tailored integration solutions using platforms like Vapi for voice assistants, Make.com for workflow automation, and n8n for data orchestration across your entire business.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-accent rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="p-6 bg-secondary text-white">
                <h3 className="text-2xl font-semibold mb-2">Connect Everything</h3>
                <p>Our integration platform connects all your business tools into one seamless workflow</p>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                alt="Integration dashboard showing connected systems" 
                className="flex-1 object-cover w-full" 
              />
              
              <div className="p-4 bg-white border-t">
                <div className="flex flex-wrap gap-4 justify-center">
                  <img src="https://www.make.com/en/favicon.ico" alt="Make.com logo" className="h-8" />
                  <img src="https://n8n.io/favicon.ico" alt="n8n logo" className="h-8" />
                  <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets logo" className="h-8" />
                  <img src="https://zapier.com/favicon.ico" alt="Zapier logo" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8 bg-accent rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Integration Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="font-bold">{step.number}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
