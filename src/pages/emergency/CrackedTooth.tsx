import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const CrackedTooth = () => {
  return (
    <>
      <Helmet>
        <title>Cracked Tooth Emergency Care | Save Your Tooth | New Haven CT</title>
        <meta name="description" content="Save the tooth before it splits. Open weekends & nights. Emergency cracked tooth treatment New Haven 203-350-7723." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-destructive/10 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="bg-destructive/20 rounded-lg p-6 mb-8 border-l-4 border-destructive">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <h2 className="text-2xl font-bold">Act Fast - Cracks Can Worsen Rapidly</h2>
                </div>
                <p className="text-lg">A cracked tooth that isn't treated can split completely, requiring extraction</p>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Cracked Tooth Emergency
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Save the tooth before it splits • Open weekends & nights
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
                  <h2 className="text-2xl font-bold mb-4">Don't Let a Crack Become a Break</h2>
                  <p className="text-lg mb-4">
                    A cracked tooth might seem minor, but it can quickly worsen. The crack can deepen, allow bacteria 
                    inside, or cause the tooth to split entirely. Early treatment saves your tooth.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Same-day examination and diagnosis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Immediate crack stabilization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Pain relief and protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Save the tooth when possible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Signs You Have a Cracked Tooth</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Sharp pain when biting or chewing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Pain that comes and goes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Sensitivity to hot, cold, or sweet foods</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Pain when releasing bite pressure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Visible crack line in tooth</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span>Swelling around the affected tooth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Types of Cracked Teeth & Treatment</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Craze Lines (Minor)</h3>
                      <p className="text-muted-foreground mb-1">Tiny surface cracks that don't cause pain</p>
                      <p className="text-sm">Treatment: Usually just monitoring, cosmetic bonding if desired</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Fractured Cusp (Moderate)</h3>
                      <p className="text-muted-foreground mb-1">Crack near a filling, piece may break off</p>
                      <p className="text-sm">Treatment: Crown to protect and restore the tooth</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Cracked Tooth (Serious)</h3>
                      <p className="text-muted-foreground mb-1">Crack extends from chewing surface toward root</p>
                      <p className="text-sm">Treatment: Root canal + crown to save tooth</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Split Tooth (Severe)</h3>
                      <p className="text-muted-foreground mb-1">Tooth crack has separated into distinct segments</p>
                      <p className="text-sm">Treatment: May require extraction if not salvageable</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Vertical Root Fracture (Complex)</h3>
                      <p className="text-muted-foreground mb-1">Crack begins at root and extends toward chewing surface</p>
                      <p className="text-sm">Treatment: Often requires extraction, possible endodontic surgery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do Before Your Visit</h2>
                  <ol className="space-y-3 list-decimal list-inside text-lg">
                    <li><strong>Call immediately</strong> - sooner treatment means better outcome</li>
                    <li><strong>Avoid chewing</strong> on the affected side</li>
                    <li><strong>Rinse with warm water</strong> to keep area clean</li>
                    <li><strong>Use OTC pain relief</strong> if needed (follow package directions)</li>
                    <li><strong>Apply cold compress</strong> outside face if swollen</li>
                    <li><strong>Don't use the tooth</strong> until we evaluate it</li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Open Weekends & Nights</h3>
                <p className="text-lg mb-4">Emergency care available when you need it</p>
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

export default CrackedTooth;
