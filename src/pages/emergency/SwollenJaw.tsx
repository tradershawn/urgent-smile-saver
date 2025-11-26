import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const SwollenJaw = () => {
  return (
    <>
      <Helmet>
        <title>Swollen Jaw or Face Emergency Treatment | New Haven Dental</title>
        <meta name="description" content="Abscess & infection treatment now. Open right now for swollen jaw emergencies. Emergency dental care New Haven 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="bg-destructive text-destructive-foreground rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-8 w-8" />
                  <h2 className="text-2xl font-bold">SERIOUS INFECTION - SEEK CARE NOW</h2>
                </div>
                <p className="text-lg">Facial swelling can indicate a spreading infection requiring immediate treatment</p>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Swollen Jaw or Face Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Abscess & infection treatment now • Open right now
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
                  <h2 className="text-2xl font-bold mb-4">Don't Wait - This Is Serious</h2>
                  <p className="text-lg mb-4">
                    Facial swelling and jaw pain often indicate a dental abscess or infection that can spread rapidly. 
                    These infections need immediate professional treatment to prevent serious complications.
                  </p>
                  <div className="bg-destructive/10 rounded-lg p-4 border-l-4 border-destructive">
                    <p className="font-bold mb-2">Seek Emergency Care If You Have:</p>
                    <ul className="space-y-2">
                      <li>• Swelling in face, jaw, or neck</li>
                      <li>• Difficulty breathing or swallowing</li>
                      <li>• Fever or feeling unwell</li>
                      <li>• Severe throbbing pain</li>
                      <li>• Bad taste or pus drainage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Emergency Treatment We Provide</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Immediate examination</strong> to identify infection source</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Drainage of abscess</strong> to relieve pressure and pain</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Same-visit antibiotics</strong> to stop infection spread</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Root canal or extraction</strong> if needed to eliminate infection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Pain management</strong> for immediate relief</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Choose Us Over the ER?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">Emergency Dental Clinic</h3>
                      <ul className="space-y-2">
                        <li>✓ Treat the cause, not just symptoms</li>
                        <li>✓ Same-visit definitive care</li>
                        <li>✓ No long ER wait times</li>
                        <li>✓ Lower cost than ER visit</li>
                        <li>✓ Dental specialists on site</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-muted-foreground">Hospital ER</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✗ Only treats symptoms temporarily</li>
                        <li>✗ Refers you to dentist anyway</li>
                        <li>✗ Hours of waiting</li>
                        <li>✗ Very expensive</li>
                        <li>✗ No dental specialists</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Available Right Now</h3>
                <p className="text-lg mb-4">Avoid the ER - come here for expert care</p>
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

export default SwollenJaw;
