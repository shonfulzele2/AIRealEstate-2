import { Link } from "wouter";
import { Building } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="mr-2 h-5 w-5" />
              RealEstateAI
            </h3>
            <p className="text-gray-300 mb-4">
              AI automation solutions that free real estate professionals from administrative burdens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-300 hover:text-white">Lead Follow-up</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white">Scheduling</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white">Listing Management</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white">Content Generation</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white">CRM Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#legal" className="text-gray-300 hover:text-white">Ethics & Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Resource Library</a></li>
              <li><a href="#integrate" className="text-gray-300 hover:text-white">Integration Partners</a></li>
              <li><a href="#results" className="text-gray-300 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>© {currentYear} RealEstateAI. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
