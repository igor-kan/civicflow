
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
          AI-Powered Government Form Assistant
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Government forms.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Done in minutes.
          </span>
          <br />
          No lawyer required.
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Complete complex government paperwork through simple conversations. 
          From immigration to housing assistance, our AI guides you from confusion to completed forms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/assessment">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3">
              Start Free Assessment
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Forms Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15min</div>
            <div className="text-gray-600">Average Completion Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
