
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  const steps = [
    {
      title: "Tell us about your situation",
      description: "Help us understand what you need assistance with",
      type: "situation"
    },
    {
      title: "Personal Information",
      description: "Basic details to determine eligibility",
      type: "personal"
    },
    {
      title: "Your Results",
      description: "Here are the programs you may qualify for",
      type: "results"
    }
  ];

  const situations = [
    { id: "housing", title: "Housing Assistance", description: "Rent relief, eviction protection, housing benefits", icon: "🏠" },
    { id: "immigration", title: "Immigration Help", description: "Visas, green cards, work permits, asylum", icon: "🌍" },
    { id: "benefits", title: "Social Benefits", description: "Food stamps, disability, unemployment, childcare", icon: "🤝" },
    { id: "taxes", title: "Tax Services", description: "Tax returns, refunds, credits, assistance", icon: "📊" },
    { id: "employment", title: "Employment & Education", description: "Job training, certifications, student aid", icon: "🎓" },
    { id: "healthcare", title: "Healthcare", description: "Medicare, Medicaid, health insurance help", icon: "❤️" }
  ];

  const handleSituationSelect = (situationId: string) => {
    setResponses({ ...responses, situation: situationId });
    setCurrentStep(1);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Badge variant="secondary">
                Step {currentStep + 1} of {steps.length}
              </Badge>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-600 mb-4">
              {steps[currentStep].description}
            </p>
            
            <Progress value={progress} className="w-full" />
          </div>

          {/* Step Content */}
          {currentStep === 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {situations.map((situation) => (
                <Card 
                  key={situation.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300"
                  onClick={() => handleSituationSelect(situation.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="text-3xl mb-2">{situation.icon}</div>
                    <CardTitle className="text-lg">{situation.title}</CardTitle>
                    <CardDescription>{situation.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}

          {currentStep === 1 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  This helps us determine which programs you qualify for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State/Province
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select your state/province</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Household Income
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select income range</option>
                    <option value="0-25000">$0 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000-75000">$50,000 - $75,000</option>
                    <option value="75000-100000">$75,000 - $100,000</option>
                    <option value="100000+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Dependents
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4 or more</option>
                  </select>
                </div>

                <Button 
                  onClick={() => setCurrentStep(2)}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Get My Results
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Great News! You May Qualify for 4 Programs
                </h2>
                <p className="text-gray-600">
                  Based on your responses, here are the government programs available to you
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Emergency Rental Assistance",
                    description: "Up to $5,000 for rent and utility payments",
                    eligibility: "High Match",
                    deadline: "Rolling applications",
                    badge: "Recommended"
                  },
                  {
                    title: "Supplemental Nutrition Assistance (SNAP)",
                    description: "Monthly food assistance for your household",
                    eligibility: "Likely Eligible",
                    deadline: "Apply anytime",
                    badge: "Popular"
                  },
                  {
                    title: "Low Income Home Energy Assistance",
                    description: "Help with heating and cooling costs",
                    eligibility: "May Qualify",
                    deadline: "Seasonal program",
                    badge: "Seasonal"
                  },
                  {
                    title: "Childcare Assistance Program",
                    description: "Subsidized childcare for working families",
                    eligibility: "Check Requirements",
                    deadline: "Waitlist available",
                    badge: "Waitlist"
                  }
                ].map((program, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{program.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {program.description}
                          </CardDescription>
                        </div>
                        <Badge variant={program.badge === "Recommended" ? "default" : "secondary"}>
                          {program.badge}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>Eligibility: {program.eligibility}</span>
                          <span>•</span>
                          <span>Deadline: {program.deadline}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Start Application
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Start My First Application
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
