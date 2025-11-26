import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const RootCanal = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Root Canal - Same Day Treatment | No Referral Needed</title>
        <meta name="description" content="Stop the pain today with emergency root canal. No referral needed. Same-day in most cases. New Haven emergency dentist 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Emergency Root Canal
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Stop the pain today – no referral • Same-day in most cases
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
                  <h2 className="text-2xl font-bold mb-4">Same-Day Root Canal - Stop the Pain Now</h2>
                  <p className="text-lg mb-4">
                    When you need a root canal, you need it NOW. Our emergency dentists perform root canals the same day 
                    in most cases - no waiting, no referral needed. We'll eliminate your pain and save your tooth.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Same-day treatment available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>No specialist referral needed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Immediate pain relief</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Save your natural tooth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Do You Need an Emergency Root Canal?</h2>
                  <p className="mb-4">You might need immediate root canal treatment if you're experiencing:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Severe tooth pain</strong> - Constant, throbbing pain that won't go away</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Prolonged sensitivity</strong> - Lingering pain after hot or cold exposure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Tooth discoloration</strong> - Darkening of the tooth</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Swollen, tender gums</strong> - Around the affected tooth</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Pimple on gums</strong> - May ooze pus</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2"></span>
                      <span><strong>Pain when chewing</strong> - Pressure makes it worse</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Expect - Same-Day Procedure</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Emergency Exam & X-Ray</h3>
                        <p className="text-muted-foreground">Diagnose the infection and extent of damage (15 minutes)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Local Anesthesia</h3>
                        <p className="text-muted-foreground">Numb the area completely - you'll feel NO pain during treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Remove Infected Tissue</h3>
                        <p className="text-muted-foreground">Clean out infected pulp and bacteria from inside the tooth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Disinfect & Seal</h3>
                        <p className="text-muted-foreground">Thoroughly clean canals and seal with biocompatible material</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Temporary Filling</h3>
                        <p className="text-muted-foreground">Protect tooth until permanent crown is placed</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="font-bold mb-2">Total time: 60-90 minutes in most cases</p>
                    <p className="text-sm text-muted-foreground">You'll leave pain-free with your tooth saved</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/10">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Root Canal Myths vs. Reality</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-lg mb-1">❌ Myth: "Root canals are extremely painful"</p>
                      <p className="text-muted-foreground">✓ Reality: Modern root canals are no more painful than getting a filling. We numb you completely.</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">❌ Myth: "It takes multiple appointments"</p>
                      <p className="text-muted-foreground">✓ Reality: We complete most emergency root canals in a single visit.</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">❌ Myth: "Extraction is better than root canal"</p>
                      <p className="text-muted-foreground">✓ Reality: Saving your natural tooth is always preferable. Root canals have a 95% success rate.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">After Your Root Canal</h2>
                  <p className="mb-4">Most patients experience immediate pain relief. You may have mild sensitivity for a few days, easily managed with over-the-counter pain relievers.</p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-bold mb-2">Follow-Up Care:</p>
                    <ul className="space-y-2">
                      <li>• Return in 2-3 weeks for permanent crown placement</li>
                      <li>• Avoid chewing on that tooth until crowned</li>
                      <li>• Maintain good oral hygiene</li>
                      <li>• Your tooth can last a lifetime with proper care</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Same-Day Root Canal Available Now</h3>
                <p className="text-lg mb-4">No referral needed - we'll see you today</p>
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

export default RootCanal;
