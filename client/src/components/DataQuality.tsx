const DataQuality = () => {
  return (
    <section id="data" className="section-padding bg-white">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-accent p-6 rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                alt="Real estate data analytics dashboard" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Data Quality & Governance</h2>
            <p className="text-lg text-gray-600 mb-8">
              Poor data leads to flawed insights and automation errors. Our approach ensures your AI systems operate on the highest quality information.
            </p>
            
            <div className="space-y-6">
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">High-Quality Data Standards</h3>
                <p className="text-gray-600">
                  We implement rigorous standards to ensure your data is accurate, timely, and comprehensive.
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Robust Governance Framework</h3>
                <p className="text-gray-600">
                  Our governance frameworks maintain data integrity and ethical usage throughout your systems.
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Capabilities</h3>
                <p className="text-gray-600">
                  We provide the engineering expertise needed to transform your existing data into AI-ready resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataQuality;
