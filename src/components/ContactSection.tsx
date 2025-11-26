import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4">Contact Us for Emergency Dental Care</h2>
          <p className="text-xl text-muted-foreground">
            Available 24/7 for urgent dental care in New Haven
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" />
                  Call Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:203-350-7723" className="text-2xl font-bold text-primary mb-2 block hover:underline">
                  203-350-7723
                </a>
                <p className="text-muted-foreground">24/7 Emergency Line</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">New Haven Emergency Dental</p>
                <p className="text-muted-foreground">1574 Chapel St</p>
                <p className="text-muted-foreground">New Haven, CT 06511</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <p><span className="font-semibold">Monday - Thursday:</span> 9am - 4pm</p>
                  <p><span className="font-semibold">Friday:</span> 8:30am - 2:30pm</p>
                  <p><span className="font-semibold">Saturday:</span> Closed</p>
                  <p><span className="font-semibold">Sunday:</span> 10am - 4pm</p>
                  <p className="text-accent font-semibold mt-2">Emergency calls 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  );
};

export default ContactSection;
