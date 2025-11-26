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
        <meta name="description" content="Child tooth injuries - open 24/7. Calm, fast care for kids. Emergency pediatric dental care New Haven 203-350-7723." />
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
                <a href="tel:203-350-7723">
                  <Button size="lg" variant="emergency" className="text-xl h-16 px-8 animate-pulse">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 203-350-7723
                  </Button>
                </a>
              </div>

              <Card className="mb-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Gentle Emergency Care for Children</h2>
                  <p className="text-lg mb-4">
                    When your child has a dental emergency, they need compassionate care from experienced professionals 
                    who understand how to treat young patients. We make dental emergencies less scary for kids and parents alike.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Child-friendly approach and environment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Experienced with pediatric emergencies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Fast treatment to minimize stress</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Parents stay with child throughout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Common Kids Dental Emergencies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Knocked-Out Tooth
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        <strong>Baby tooth:</strong> Usually doesn't need replanting, but we check for injury<br/>
                        <strong>Permanent tooth:</strong> Time-critical - call immediately and come in under 60 minutes
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Chipped or Broken Tooth
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        Common from falls or sports. We can repair chips and fractures the same day to restore appearance and function.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Severe Toothache
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        May indicate cavity or infection. We'll eliminate pain and treat the cause immediately.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Lip, Tongue, or Cheek Injury
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        Bleeding soft tissue injuries. We'll assess for deeper damage and provide stitches if needed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Jaw Injury
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        After impact or accident. We check for fractures and provide immediate treatment or referral.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-primary">•</span> Object Stuck Between Teeth
                      </h3>
                      <p className="text-muted-foreground ml-5">
                        Food or objects causing pain or irritation. We safely remove it without damaging teeth or gums.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-muted/50">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What to Do in a Kids Dental Emergency</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">1. Stay Calm</h3>
                      <p className="text-muted-foreground">Your child will take cues from you. Speak calmly and reassure them.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">2. Control Bleeding</h3>
                      <p className="text-muted-foreground">Clean area gently with water. Apply gauze with gentle pressure for 10 minutes.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">3. Save Any Pieces</h3>
                      <p className="text-muted-foreground">If a tooth or piece broke off, save it in milk or saliva and bring it with you.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">4. Call Us Immediately</h3>
                      <p className="text-muted-foreground">We're available 24/7. We'll guide you on next steps and see your child right away.</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">5. Use Cold Compress</h3>
                      <p className="text-muted-foreground">Reduce swelling by applying ice wrapped in cloth to outside of face.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8 bg-accent/10">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Parents Choose Us for Emergency Care</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Gentle, Patient Approach</p>
                        <p className="text-sm text-muted-foreground">We explain everything to your child in age-appropriate language</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Fast Treatment</p>
                        <p className="text-sm text-muted-foreground">We work efficiently to minimize time in the chair and reduce anxiety</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Pain-Free Care</p>
                        <p className="text-sm text-muted-foreground">Modern anesthetics and gentle techniques ensure comfort</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Parent Involvement</p>
                        <p className="text-sm text-muted-foreground">You stay with your child, and we keep you informed every step</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">24/7 Availability</p>
                        <p className="text-sm text-muted-foreground">Kids emergencies don't wait - neither do we</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">After Emergency Care</h2>
                  <p className="mb-4">We'll provide:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Clear instructions for at-home care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Pain management recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Dietary guidelines during healing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>Follow-up appointment if needed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                      <span>24/7 number to call with any concerns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">We're Here for Your Child 24/7</h3>
                <p className="text-lg mb-4">Compassionate emergency care when kids need it most</p>
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
