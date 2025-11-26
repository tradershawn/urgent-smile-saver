import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  "Experienced emergency dentists in New Haven",
  "Same-day dental appointments available",
  "Advanced pain management for tooth pain relief",
  "Emergency dental extractions performed on-site",
  "State-of-the-art emergency dental clinic",
  "Flexible payment options and insurance accepted",
  "Convenient location - emergency dentist near you",
  "Urgent dental care with minimal wait times",
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="why-choose-us" ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Emergency Dental Clinic?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              When dental emergencies strike, you need fast, reliable care. Our New Haven emergency dental clinic 
              provides immediate treatment for tooth pain, emergency extractions, and urgent dental needs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6">Common Dental Emergencies We Treat</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Severe tooth pain and toothaches
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Emergency tooth extraction needed
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Broken or chipped teeth
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Lost fillings or crowns
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Jaw pain and TMJ issues
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent rounded-full"></span>
                Dental abscesses and infections
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
