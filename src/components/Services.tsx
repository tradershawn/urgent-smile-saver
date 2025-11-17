import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: AlertCircle,
    title: "Emergency Tooth Extraction",
    description: "Fast, gentle emergency tooth extraction near you. Same-day service for severe tooth pain and dental emergencies.",
  },
  {
    icon: Wrench,
    title: "Urgent Dental Treatment",
    description: "Comprehensive emergency dental treatment for infections, broken teeth, jaw pain, and urgent dental issues.",
  },
  {
    icon: Clock,
    title: "Same Day Dental Appointment",
    description: "Book a dental appointment today with our emergency dentist in New Haven. Walk-ins and same-day appointments available.",
  },
  {
    icon: Shield,
    title: "24/7 Emergency Dental Care",
    description: "Round-the-clock emergency dental care near you. Our emergency dental clinic is ready when you need us most.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Emergency Dental Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted emergency dental clinic in New Haven providing urgent care when you need it most
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary hover:shadow-[var(--shadow-primary)] transition-all duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
