import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const ToothPain = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Tooth Pain Relief - Same Day Treatment | New Haven</title>
        <meta name="description" content="Severe tooth pain? Open 24/7 with walk-ins welcome. Same-day emergency treatment for toothaches in New Haven. Call 203-350-7723 now." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Emergency Tooth Pain Relief
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Same-day treatment for severe pain • Open 24/7 • Walk-ins OK
                </p>
                <a href="tel:203-350-7723">
                  <Button size="lg" variant="emergency" className="text-xl h-16 px-8 animate-pulse">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 203-350-7723
                  </Button>
                </a>
              </div>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Don't Wait - We Stop Tooth Pain Fast</h2>
                  <p className="text-lg mb-4">
                    Severe tooth pain shouldn't wait. Our New Haven emergency dentists provide immediate relief 
                    for toothaches, whether it's throbbing pain, sensitivity, or constant aching.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Same-day appointments available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Walk-ins welcome - no appointment needed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Open 24/7 for emergency calls</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Advanced pain management techniques</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Common Causes of Tooth Pain We Treat</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Dental abscess</strong> - Infection requiring immediate treatment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Severe cavity</strong> - Decay reaching the nerve</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Cracked or broken tooth</strong> - Exposing sensitive areas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Lost filling or crown</strong> - Leaving tooth vulnerable</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Gum disease</strong> - Advanced infection and inflammation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Available Right Now</h3>
                <p className="text-lg mb-4">Emergency dental care when you need it most</p>
                <p className="mb-4">📍 1574 Chapel St, New Haven, CT 06511</p>
                <a href="tel:203-350-7723">
                  <Button size="lg" variant="secondary" className="text-lg">
                    <Phone className="mr-2" />
                    203-350-7723
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ToothPain;
