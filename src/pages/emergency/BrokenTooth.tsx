import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const BrokenTooth = () => {
  return (
    <>
      <Helmet>
        <title>Broken or Chipped Tooth Emergency Repair | New Haven CT</title>
        <meta name="description" content="Broke or chipped a tooth? Fast same-visit repair. No wait - call now for emergency dental care. New Haven emergency dentist 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Broken or Chipped Tooth Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Fast repair – often same visit • No wait – call now
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
                  <h2 className="text-2xl font-bold mb-4">Same-Visit Tooth Repair</h2>
                  <p className="text-lg mb-4">
                    A broken or chipped tooth needs immediate attention to prevent further damage and infection. 
                    Our New Haven emergency dentists can repair most broken teeth in a single visit.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Same-day bonding and repair</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Emergency crown placement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Pain-free treatment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Natural-looking results</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do If You Break a Tooth</h2>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="text-lg"><strong>Call us immediately</strong> at 203-350-7723</li>
                    <li className="text-lg"><strong>Save any pieces</strong> of the broken tooth</li>
                    <li className="text-lg"><strong>Rinse your mouth</strong> gently with warm water</li>
                    <li className="text-lg"><strong>Apply gauze</strong> if there's bleeding</li>
                    <li className="text-lg"><strong>Use a cold compress</strong> to reduce swelling</li>
                    <li className="text-lg"><strong>Come in right away</strong> - the sooner, the better</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Repair Options for Broken Teeth</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Minor Chips</h3>
                      <p>Quick bonding procedure using tooth-colored resin - completed in one visit</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Larger Breaks</h3>
                      <p>Emergency crown or veneer to restore full function and appearance</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Severe Fractures</h3>
                      <p>Root canal if needed, followed by crown placement to save the tooth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Walk-Ins Welcome</h3>
                <p className="text-lg mb-4">No appointment needed for emergencies</p>
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

export default BrokenTooth;
