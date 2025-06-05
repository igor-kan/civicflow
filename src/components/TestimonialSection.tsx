
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Single Mother",
      content: "CivicFlow helped me apply for rent assistance when I lost my job. What would have taken weeks of paperwork was done in 20 minutes.",
      avatar: "👩🏽"
    },
    {
      name: "David Chen", 
      role: "Small Business Owner",
      content: "The immigration forms for my visa extension were so complex. CivicFlow made it simple and caught errors I would have missed.",
      avatar: "👨🏻"
    },
    {
      name: "Sarah Johnson",
      role: "Senior Citizen", 
      content: "I was overwhelmed by Medicare paperwork. The AI explained everything in plain English and filled out all the forms correctly.",
      avatar: "👵🏼"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CivicFlow has helped thousands navigate government services successfully
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
