import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🦷</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">New Haven Emergency Dental</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Emergency Dentist</p>
            </div>
          </div>
          
          <Button variant="emergency" size="lg" className="hidden sm:flex">
            <Phone className="mr-2 h-4 w-4" />
            203-865-1480
          </Button>
          
          <Button variant="emergency" size="icon" className="sm:hidden">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
