import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/divine-smiles-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Divine Smiles" className="h-16 w-auto" />
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:203-350-7723">
              <Button variant="emergency" size="lg" className="hidden sm:flex">
                <Phone className="mr-2 h-4 w-4" />
                203-350-7723
              </Button>
            </a>
            
            <a href="tel:203-350-7723">
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
