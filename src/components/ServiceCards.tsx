
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceCards = () => {
  const services = [
    {
      title: "Immigration Services",
      description: "Visa applications, green cards, asylum claims, and refugee documentation",
      categories: ["Visas", "Green Cards", "Asylum", "Work Permits"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🌍"
    },
    {
      title: "Housing Assistance", 
      description: "Rent relief, eviction protection, and housing benefit applications",
      categories: ["Rent Relief", "Eviction Protection", "Housing Benefits", "Section 8"],
      gradient: "from-green-500 to-teal-500",
      icon: "🏠"
    },
    {
      title: "Social Benefits",
      description: "Food stamps, disability benefits, childcare assistance, and unemployment",
      categories: ["SNAP", "Disability", "Childcare", "Unemployment"],
      gradient: "from-purple-500 to-pink-500", 
      icon: "🤝"
    },
    {
      title: "Tax Services",
      description: "Tax returns, refunds, credits, and low-income assistance programs",
      categories: ["Tax Returns", "EITC", "Child Credits", "Refunds"],
      gradient: "from-orange-500 to-red-500",
      icon: "📊"
    },
    {
      title: "Employment & Education",
      description: "Job training, certifications, student loans, and career assistance",
      categories: ["Job Training", "Certifications", "Student Loans", "Career Help"],
      gradient: "from-indigo-500 to-blue-500",
      icon: "🎓"
    },
    {
      title: "Healthcare & Seniors",
      description: "Medicare, Medicaid, healthcare subsidies, and senior benefits",
      categories: ["Medicare", "Medicaid", "Health Subsidies", "Senior Benefits"],
      gradient: "from-rose-500 to-pink-500",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Any Government Form
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI understands hundreds of government programs and can help you navigate 
            any bureaucratic process with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
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

export default ServiceCards;
