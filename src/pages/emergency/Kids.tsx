import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import DoctorsSection from "@/components/DoctorsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Phone, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Kids = () => {
  return (
    <>
      <Helmet>
        <title>Kids Emergency Dentist - Child Tooth Injuries | New Haven CT</title>
        <meta name="description" content="Child tooth injuries - open 24/7. Calm, fast care for kids. Emergency pediatric dental care New Haven 203-865-1480." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container px-4 mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Kids Emergency Dentist
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Child tooth injuries – open 24/7 • Calm, fast care for kids
                </p>
                <a href="tel:203-865-1480">
                  <Button size="lg" variant="emergency" className="text-xl h-16 px-8 animate-pulse">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 203-865-1480
                  </Button>
                </a>
              </div>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Gentle Care for Little Smiles</h2>
                  <p className="text-lg mb-4">
                    When your child has a dental emergency, you want a dentist who is experienced in treating kids. 
                    Our team provides compassionate, gentle care to relieve pain and anxiety.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Kid-friendly environment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Calm and reassuring approach</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Specialized pediatric equipment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Open 24/7 for emergencies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Common Kids Dental Emergencies</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Knocked-out tooth</strong> - Re-implantation possible if fast</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Broken or chipped tooth</strong> - Repair to prevent infection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Severe toothache</strong> - Could indicate abscess or decay</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Object stuck in teeth</strong> - Careful removal to avoid damage</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-accent rounded-full"></span>
                      <span><strong>Bleeding after injury</strong> - Stop bleeding and assess damage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do in a Dental Emergency</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Knocked-Out Tooth</h3>
                      <p>Handle by crown, rinse gently, try to re-implant, keep moist, call us now!</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Broken Tooth</h3>
                      <p>Rinse mouth, apply cold compress, save any pieces, call us for repair</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Toothache</h3>
                      <p>Rinse mouth, floss gently, use OTC pain relief, call if severe</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">We're Here for Your Child 24/7</h3>
                <p className="text-lg mb-4">Compassionate emergency care when kids need it most</p>
                <p className="mb-4">📍 1574 Chapel St, New Haven, CT 06511</p>
                <a href="tel:203-865-1480">
                  <Button size="lg" variant="secondary" className="text-lg">
                    <Phone className="mr-2" />
                    203-865-1480
                  </Button>
                </a>
              </div>
            </div>
          </section>
          <Services />
          <WhyChooseUs />
          <ReviewsSection />
          <DoctorsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Kids;
