import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const LostFillingCrown = () => {
  return (
    <>
      <Helmet>
        <title>Lost Filling or Crown Emergency Repair | Same-Day Fix New Haven</title>
        <meta name="description" content="Lost a filling or crown? Same-day temporary or permanent fix. Walk-ins welcome. Emergency dental care New Haven 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Lost Filling or Crown Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Same-day temporary or permanent fix • Walk-ins welcome
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
                  <h2 className="text-2xl font-bold mb-4">Fast Replacement - Same Visit</h2>
                  <p className="text-lg mb-4">
                    A lost filling or crown leaves your tooth vulnerable to damage and decay. Our New Haven 
                    emergency dentists can replace or repair it the same day you come in.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Same-day crown replacement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Emergency filling placement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Temporary or permanent solutions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Pain relief and protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do Before You Arrive</h2>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="text-lg"><strong>Save the crown or filling</strong> if you have it - bring it with you</li>
                    <li className="text-lg"><strong>Clean the area gently</strong> with warm water</li>
                    <li className="text-lg"><strong>Avoid chewing</strong> on that side</li>
                    <li className="text-lg"><strong>Use dental cement</strong> (from pharmacy) as temporary fix if needed</li>
                    <li className="text-lg"><strong>Avoid sticky or hard foods</strong> until repaired</li>
                    <li className="text-lg"><strong>Call us right away</strong> - we'll see you today</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Replacement Options</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lost Crown - Can Be Recemented</h3>
                      <p>If the crown and tooth are intact, we can clean and recement it the same day</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lost Crown - Needs Replacement</h3>
                      <p>Temporary crown today, permanent crown fabricated and placed within days</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lost Filling</h3>
                      <p>New permanent filling placed the same visit - tooth fully restored</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Tooth Damage Present</h3>
                      <p>Address decay or damage, then restore with filling or crown as needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 border-destructive/50 border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Immediate Care Matters</h2>
                  <p className="text-lg mb-3">Without a filling or crown, your tooth is at risk for:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-destructive rounded-full"></span>
                      <span>Rapid decay - exposed tooth deteriorates quickly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-destructive rounded-full"></span>
                      <span>Tooth fracture - weakened structure can break</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-destructive rounded-full"></span>
                      <span>Infection - bacteria can reach inner tooth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-destructive rounded-full"></span>
                      <span>Increased sensitivity and pain</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Walk-Ins Welcome</h3>
                <p className="text-lg mb-4">Same-day repair available now</p>
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

export default LostFillingCrown;
