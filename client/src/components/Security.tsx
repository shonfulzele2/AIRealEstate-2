import { 
  Shield,
  ScrollText,
  Server,
  UserX,
  Check 
} from "lucide-react";

const SecurityFeature = ({ 
  icon: Icon, 
  iconClass, 
  title, 
  description 
} : { 
  icon: React.ElementType, 
  iconClass: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${iconClass} mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      iconClass: "bg-red-100 text-red-600",
      title: "Heightened Security Measures",
      description: "We employ enterprise-grade security protocols to protect against data breaches and unauthorized access to your sensitive client information."
    },
    {
      icon: ScrollText,
      iconClass: "bg-blue-100 text-blue-600",
      title: "Regulatory Compliance",
      description: "Our solutions comply with GDPR, CCPA, and real estate industry regulations, ensuring your business remains compliant while leveraging AI."
    },
    {
      icon: Server,
      iconClass: "bg-green-100 text-green-600",
      title: "Private Infrastructure",
      description: "We can deploy solutions on private infrastructure or use private LLMs when dealing with your most sensitive information."
    },
    {
      icon: UserX,
      iconClass: "bg-purple-100 text-purple-600",
      title: "Redaction & Anonymization",
      description: "We implement automatic redaction of private information and align with your internal data security processes."
    }
  ];

  return (
    <section id="security" className="section-padding bg-accent">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Data Privacy, Security & Compliance</h2>
          <p className="section-subheading">
            We understand that real estate involves sensitive client information. Your data security is our top priority.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <SecurityFeature
              key={index}
              icon={feature.icon}
              iconClass={feature.iconClass}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:w-1/3 p-6">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
              alt="Data security professional" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
          
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Security Commitment</h3>
            <p className="text-gray-600 mb-6">
              We understand that trust is essential when handling sensitive real estate data. Our security approach includes:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-5 w-5" />
                <span>End-to-end encryption for all data transfers</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-5 w-5" />
                <span>Regular security audits and penetration testing</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-5 w-5" />
                <span>Secure authentication with multi-factor options</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-2 h-5 w-5" />
                <span>Compliance with real estate data protection standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
