import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/divine-smiles-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🦷</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <img src={logo} alt="Divine Smiles" className="h-12 w-auto" />
            
            <a href="tel:203-865-1480">
              <Button variant="emergency" size="lg" className="hidden sm:flex">
                <Phone className="mr-2 h-4 w-4" />
                <span className="callrail-phone">203-865-1480</span>
              </Button>
            </a>
            
            <a href="tel:203-865-1480">
              <Button variant="emergency" size="icon" className="sm:hidden">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
