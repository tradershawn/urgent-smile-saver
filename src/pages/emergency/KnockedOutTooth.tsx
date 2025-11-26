import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const KnockedOutTooth = () => {
  return (
    <>
      <Helmet>
        <title>Knocked-Out Tooth Emergency - Come In Under 60 Minutes | New Haven</title>
        <meta name="description" content="Save your knocked-out tooth! Come in under 60 minutes for highest re-implant success. Emergency dental care New Haven 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="bg-destructive text-destructive-foreground rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-8 w-8" />
                  <h2 className="text-2xl font-bold">TIME-SENSITIVE EMERGENCY</h2>
                </div>
                <p className="text-lg">Come in within 60 minutes for best chance of saving your tooth!</p>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Knocked-Out Tooth Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Save your tooth – come in &lt;60 min • Highest re-implant success rate
                </p>
                <a href="tel:203-350-7723">
                  <Button size="lg" variant="emergency" className="text-xl h-16 px-8 animate-pulse">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 203-350-7723
                  </Button>
                </a>
              </div>

              <Card className="mb-8 border-destructive border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-destructive">IMMEDIATE STEPS - Do This NOW</h2>
                  <ol className="space-y-3 list-decimal list-inside text-lg">
                    <li><strong>Find the tooth</strong> - Pick it up by the crown (top), NOT the root</li>
                    <li><strong>Rinse gently</strong> - Use water if dirty, DON'T scrub or remove tissue</li>
                    <li><strong>Try to reinsert</strong> - Push gently back into socket if possible</li>
                    <li><strong>Keep moist</strong> - If can't reinsert, place in milk or saliva</li>
                    <li><strong>CALL US IMMEDIATELY</strong> - Every minute counts!</li>
                    <li><strong>Come in NOW</strong> - Best results within 30-60 minutes</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Time Matters</h2>
                  <p className="text-lg mb-4">
                    A knocked-out permanent tooth can often be saved if treated quickly. The cells on the root 
                    die rapidly when exposed to air, which is why immediate care is critical.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-3xl font-bold text-primary mb-2">30 min</p>
                      <p className="text-sm">Best success rate</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-3xl font-bold text-primary mb-2">60 min</p>
                      <p className="text-sm">Good success rate</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-3xl font-bold text-destructive mb-2">90+ min</p>
                      <p className="text-sm">Much lower chance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What We'll Do</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Clean and disinfect the tooth and socket</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Re-implant the tooth into the socket</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Stabilize with a splint for healing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Provide antibiotics and pain management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Schedule follow-up care to ensure proper healing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Open 24/7 for Emergencies</h3>
                <p className="text-lg mb-4">Every second counts - call now</p>
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

export default KnockedOutTooth;
