import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.95), hsl(var(--background) / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Emergency Dental Care in <span className="text-primary">New Haven</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Same-day appointments available. Expert emergency dentist treating tooth pain, extractions, 
            and urgent dental needs. Your trusted emergency dental clinic near you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="emergency"
              className="text-lg h-14"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 203-865-1480
            </Button>
            <Button 
              size="lg" 
              variant="default"
              className="text-lg h-14"
            >
              Book Appointment Today
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full animate-pulse"></span>
              <span className="font-medium">Open 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full animate-pulse"></span>
              <span className="font-medium">Same-Day Treatment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full animate-pulse"></span>
              <span className="font-medium">Walk-Ins Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
