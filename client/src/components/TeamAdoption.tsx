import { 
  AlertTriangle, 
  CheckCircle,
  XCircle 
} from "lucide-react";

const TeamAdoption = () => {
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

  const humanExcellence = [
    {
      title: "Relationship Building",
      description: "Strengthening personal connections with clients"
    },
    {
      title: "Negotiation Skills",
      description: "Securing the best deals for clients"
    },
    {
      title: "Trust & Empathy",
      description: "Understanding client needs on a deeper level"
    },
    {
      title: "Local Expertise",
      description: "Providing insights no AI can match"
    }
  ];

  return (
    <section id="team" className="section-padding bg-accent overflow-hidden">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Team Adoption & Change Management</h2>
          <p className="section-subheading">
            Successful AI implementation requires team buy-in. Our human-centric approach ensures your agents embrace new technology with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-6">Common Adoption Challenges</h3>
            <p className="text-gray-600 mb-6">
              We understand the barriers to new technology adoption and address them head-on:
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="text-red-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-6">Our Human-Centric Approach</h3>
            <p className="text-gray-600 mb-6">
              We focus on how AI empowers agents rather than replaces them, freeing time for the human skills that truly matter:
            </p>
            
            <ul className="space-y-4">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{approach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Real estate team collaboration" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-secondary mb-6">Emphasizing Human Excellence</h3>
            <p className="text-gray-600 mb-8">
              Our AI solutions handle routine tasks so your agents can focus on what truly differentiates them in the market:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {humanExcellence.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAdoption;
