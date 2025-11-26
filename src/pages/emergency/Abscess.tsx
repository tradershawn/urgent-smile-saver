import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Abscess = () => {
  return (
    <>
      <Helmet>
        <title>Dental Abscess Emergency Treatment | Drain & Antibiotics Same Visit</title>
        <meta name="description" content="Dental abscess treatment same visit. Drain & antibiotics today. Avoid ER - come here. New Haven emergency dentist 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="bg-destructive text-destructive-foreground rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-8 w-8" />
                  <h2 className="text-2xl font-bold">SERIOUS INFECTION - URGENT CARE NEEDED</h2>
                </div>
                <p className="text-lg">Dental abscesses can spread to other areas - immediate treatment essential</p>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Dental Abscess Emergency Treatment
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Drain & antibiotics same visit • Avoid ER – come here
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
                  <h2 className="text-2xl font-bold mb-4">What Is a Dental Abscess?</h2>
                  <p className="text-lg mb-4">
                    A dental abscess is a pocket of pus caused by a bacterial infection. It can occur at the tooth root 
                    (periapical abscess) or in the gums (periodontal abscess). Without treatment, the infection can spread 
                    to your jaw, face, and other areas.
                  </p>
                  <div className="bg-destructive/10 rounded-lg p-4 border-l-4 border-destructive">
                    <p className="font-bold mb-2">Signs You Have a Dental Abscess:</p>
                    <ul className="space-y-2">
                      <li>• Severe, throbbing toothache</li>
                      <li>• Swelling in face, cheek, or neck</li>
                      <li>• Fever and feeling unwell</li>
                      <li>• Pus or bad taste in mouth</li>
                      <li>• Sensitivity to hot and cold</li>
                      <li>• Tender, swollen lymph nodes</li>
                      <li>• Difficulty breathing or swallowing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Same-Day Treatment Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h3 className="font-bold mb-1">Emergency Examination</h3>
                        <p className="text-muted-foreground">X-rays and assessment to locate infection source</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h3 className="font-bold mb-1">Drain the Abscess</h3>
                        <p className="text-muted-foreground">Remove infected pus to relieve pressure and pain immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h3 className="font-bold mb-1">Clean the Area</h3>
                        <p className="text-muted-foreground">Thoroughly clean infection site with saline solution</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h3 className="font-bold mb-1">Prescribe Antibiotics</h3>
                        <p className="text-muted-foreground">Medication to eliminate remaining bacteria and prevent spread</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                      <div>
                        <h3 className="font-bold mb-1">Definitive Treatment</h3>
                        <p className="text-muted-foreground">Root canal or extraction to eliminate infection source permanently</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Come Here Instead of the ER?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-primary">At Our Emergency Dental Clinic</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>Drain abscess immediately</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>Treat the infection source</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>Same-day definitive care</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>Much lower cost</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span>No long wait times</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-muted-foreground">At Hospital ER</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="text-xl">✗</span>
                          <span>Only antibiotics, no drainage</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xl">✗</span>
                          <span>Can't fix the tooth</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xl">✗</span>
                          <span>Refers you to dentist anyway</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xl">✗</span>
                          <span>Very expensive bills</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xl">✗</span>
                          <span>Hours of waiting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Open Now - Same Day Treatment</h3>
                <p className="text-lg mb-4">Get proper care - not just temporary relief</p>
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

export default Abscess;
