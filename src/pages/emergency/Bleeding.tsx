import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Bleeding = () => {
  return (
    <>
      <Helmet>
        <title>Bleeding Gums or Mouth Emergency Treatment | New Haven CT</title>
        <meta name="description" content="Stop bleeding & treat cause today. 24-hour emergency care for bleeding gums or mouth. New Haven emergency dentist 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Bleeding Gums or Mouth Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Stop bleeding & treat cause today • 24-hour emergency care
                </p>
                <a href="tel:203-350-7723">
                  <Button size="lg" variant="emergency" className="text-xl h-16 px-8 animate-pulse">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 203-350-7723
                  </Button>
                </a>
              </div>

              <Card className="mb-8 border-destructive/50 border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Seek Immediate Care If:</h3>
                      <ul className="space-y-1">
                        <li>• Bleeding won't stop after 10 minutes of pressure</li>
                        <li>• Heavy, persistent bleeding</li>
                        <li>• Bleeding after tooth extraction or injury</li>
                        <li>• Bleeding with swelling or severe pain</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Stop the Bleeding - Get to the Cause</h2>
                  <p className="text-lg mb-4">
                    While minor gum bleeding can be normal, persistent or heavy bleeding requires professional attention. 
                    Our emergency dentists will stop the bleeding and address the underlying cause.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Immediate bleeding control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Diagnosis of underlying cause</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Treatment same day</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Prevention plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Common Causes We Treat</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Gum Disease (Gingivitis/Periodontitis)</h3>
                      <p className="text-muted-foreground">Infection causing inflamed, bleeding gums - requires professional cleaning and treatment</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Trauma or Injury</h3>
                      <p className="text-muted-foreground">Cut gums, bitten tongue or cheek, impact injuries - may need sutures</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Post-Extraction Bleeding</h3>
                      <p className="text-muted-foreground">Continued bleeding after tooth removal - blood clot may have dislodged</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Medication Effects</h3>
                      <p className="text-muted-foreground">Blood thinners can cause increased gum bleeding - requires careful management</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Dental Abscess</h3>
                      <p className="text-muted-foreground">Infection can cause bleeding along with pain and swelling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do Right Now</h2>
                  <ol className="space-y-3 list-decimal list-inside text-lg">
                    <li><strong>Apply gentle pressure</strong> with clean gauze for 10 minutes</li>
                    <li><strong>Keep head elevated</strong> - don't lie flat</li>
                    <li><strong>Use cold compress</strong> on outside of face if needed</li>
                    <li><strong>Avoid rinsing vigorously</strong> - can dislodge clots</li>
                    <li><strong>Don't use straws</strong> - suction can restart bleeding</li>
                    <li><strong>Call us immediately</strong> if bleeding doesn't stop</li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">24/7 Emergency Care Available</h3>
                <p className="text-lg mb-4">We'll stop the bleeding and treat the cause</p>
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

export default Bleeding;
