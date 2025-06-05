
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CivicFlow</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link to="/help" className="text-gray-600 hover:text-blue-600 transition-colors">
              Help
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/assessment">
              <Button variant="outline" className="hidden md:inline-flex">
                Get Started
              </Button>
            </Link>
            <Link to="/assessment">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Start Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
