import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.95), hsl(var(--background) / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className={`max-w-2xl transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Emergency Dental Care in <span className="text-primary">New Haven</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Same-day appointments available. Expert emergency dentist treating tooth pain, extractions, 
            and urgent dental needs. Your trusted emergency dental clinic near you.
          </p>
          
          <div>
            <a href="tel:203-865-1480">
              <Button 
                size="lg" 
                variant="emergency"
                className="text-lg h-14"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: <span className="callrail-phone">203-865-1480</span>
              </Button>
            </a>
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
