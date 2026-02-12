import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ReviewsSection from "@/components/ReviewsSection";
import DoctorsSection from "@/components/DoctorsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight, Shield, Clock, Heart, Sparkles, Target, Award, Star, DollarSign, CreditCard, Layers, Users, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/dental-hero.jpg";
import dentalImplantDiagram from "@/assets/dental-implant-diagram.jpg";
import dentalImplantInMouth from "@/assets/dental-implant-in-mouth.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const FREE_CONSULT_CTA = "Claim Your FREE Implant Consultation";
const PHONE_NUMBER = "203-350-7723";

const DentalImplants = () => {
  const heroAnimation = useScrollAnimation();
  const problemAnimation = useScrollAnimation();
  const waitingAnimation = useScrollAnimation();
  const whatAnimation = useScrollAnimation();
  const comparisonAnimation = useScrollAnimation();
  const whyUsAnimation = useScrollAnimation();
  const objectionsAnimation = useScrollAnimation();
  const costAnimation = useScrollAnimation();
  const financingAnimation = useScrollAnimation();
  const finalCtaAnimation = useScrollAnimation();
  const whyDivineAnimation = useScrollAnimation();
  const implantOptionsAnimation = useScrollAnimation();
  const implantProcessAnimation = useScrollAnimation();

  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>FREE Dental Implant Consultation | New Haven CT | Divine Smiles</title>
        <meta name="description" content="Schedule your FREE dental implant consultation at Divine Smiles in New Haven, CT. Permanent, natural-looking tooth replacement. Flexible financing available. Call 203-350-7723." />
        <link rel="canonical" href="https://emergency.divinesmilespc.com/dental-implants" />
      </Helmet>
      
      <div className="min-h-screen pb-24 md:pb-0">
        <Header />

        {/* STICKY DESKTOP CTA BAR */}
        <div className={`fixed top-0 left-0 right-0 z-[60] bg-accent text-accent-foreground transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between h-12">
              <p className="text-sm font-semibold hidden sm:block">
                🎉 FREE Implant Consultation — Limited Availability
              </p>
              <p className="text-sm font-semibold sm:hidden">
                🎉 FREE Consultation Available
              </p>
              <div className="flex items-center gap-3">
                <a href={`tel:${PHONE_NUMBER}`} className="hidden md:flex items-center gap-1 text-sm font-bold hover:underline">
                  <Phone className="h-3.5 w-3.5" />
                  {PHONE_NUMBER}
                </a>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Button size="sm" variant="secondary" className="font-bold text-xs h-8">
                    {FREE_CONSULT_CTA}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <main>
          {/* HERO SECTION */}
          <section 
            ref={heroAnimation.ref}
            className="relative min-h-[700px] flex items-center overflow-hidden"
          >
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.97), hsl(var(--background) / 0.85)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            <div className="container relative z-10 px-4 mx-auto">
              <div className={`max-w-3xl transition-all duration-700 ${heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                {/* Free consultation badge */}
                <div className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 px-5 py-2.5 rounded-full mb-6 text-sm font-bold">
                  <Sparkles className="h-4 w-4" />
                  FREE Implant Consultation — Schedule Today
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Restore Your Smile <br />
                  <span className="text-primary">Permanently with Dental Implants</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-3 text-foreground font-medium">
                  Durable. Functional. Beautiful. Expert care for a lasting smile.
                </p>

                <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                  A dental implant looks, feels, and works like a real tooth—because it's built 
                  the same way, from the root up. No bridges. No removable pieces. Just your smile, restored.
                </p>

                {/* Context clarification for emergency subdomain */}
                <div className="bg-muted/50 border rounded-lg px-4 py-3 mb-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Note:</span> While Divine Smiles also provides emergency dental services, this page is for <strong>scheduled implant consultations</strong>. Take your time — no rush, no pressure.
                </div>
                
                {/* Primary CTA - Large and prominent */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg h-16 px-10 w-full sm:w-auto shadow-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      {FREE_CONSULT_CTA}
                    </Button>
                  </a>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="outline" className="text-lg h-16 px-8 w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call {PHONE_NUMBER}
                    </Button>
                  </a>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9</span>
                  <span className="text-muted-foreground text-sm">Stars on Google · 200+ Reviews</span>
                </div>
                
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Precision Planning & Placement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advanced 3D Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Flexible Financing Available</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHY DIVINE SMILES - Right after hero */}
          <section
            ref={whyDivineAnimation.ref}
            className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
          >
            <div className="container px-4 mx-auto max-w-5xl">
              <div className={`transition-all duration-700 ${whyDivineAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Divine Smiles for Your Implant?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Not all implant providers are the same. Here's what sets Divine Smiles apart in New Haven.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">15+ Years of Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Our experienced team has placed hundreds of implants with a focus on lasting results.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <Target className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">Advanced 3D Technology</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed 3D imaging for precise placement — fewer surprises, better outcomes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">Patient-First Comfort</h3>
                      <p className="text-sm text-muted-foreground">
                        Gentle, personalized care where we explain every step and ensure your comfort throughout.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">All Care Under One Roof</h3>
                      <p className="text-sm text-muted-foreground">
                        From consultation to final crown — no referrals, no handoffs. One team knows your case.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">Custom-Matched Crowns</h3>
                      <p className="text-sm text-muted-foreground">
                        Your implant crown is crafted to perfectly match the color, shape, and size of your natural teeth.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">Flexible Payment Plans</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer financing options and accept most insurance to make implants accessible.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg h-14 px-10">
                      <Phone className="mr-2 h-5 w-5" />
                      {FREE_CONSULT_CTA}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* IMPLANT OPTIONS & TYPES */}
          <section
            id="implant-options"
            ref={implantOptionsAnimation.ref}
            className="py-20"
          >
            <div className="container px-4 mx-auto max-w-5xl">
              <div className={`transition-all duration-700 ${implantOptionsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Implant Options & Types
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Single, multiple & full arch. Find your perfect smile solution.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Single Tooth Implant</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Replace one missing tooth without affecting neighboring teeth. A titanium post replaces the root, topped with a custom-matched crown.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 text-left">
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Preserves adjacent healthy teeth</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Prevents bone loss at the site</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Looks and feels completely natural</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Multiple Teeth Implants</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Missing several teeth in a row? An implant-supported bridge replaces multiple teeth using just two or three implant posts.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 text-left">
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Fewer implants than individual posts</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Fixed, non-removable solution</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Restores full chewing function</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-primary">
                    <CardContent className="pt-6 text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Full Arch Restoration</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Replace an entire upper or lower arch of teeth with as few as four implants. A permanent alternative to dentures.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 text-left">
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> No more removable dentures</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Eat anything with confidence</li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Dramatic quality-of-life improvement</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Not sure which option is right for you? That's exactly what your free consultation is for.
                  </p>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg h-14 px-10">
                      <Phone className="mr-2 h-5 w-5" />
                      {FREE_CONSULT_CTA}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* THE "SLOW BURN" PROBLEM SECTION */}
          <section 
            ref={problemAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${problemAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  If You're Missing a Tooth, You've Probably Noticed...
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  These small frustrations often signal a bigger problem developing beneath the surface.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">Chewing Feels Different</h3>
                      <p className="text-muted-foreground">
                        You find yourself favoring one side, avoiding certain foods, or just not 
                        enjoying meals the way you used to. It's subtle at first—then it becomes a habit.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">Your Smile Feels Incomplete</h3>
                      <p className="text-muted-foreground">
                        Maybe you cover your mouth when you laugh. Or avoid photos. Or feel a flash of 
                        self-consciousness when meeting someone new. That gap is always there, in the back of your mind.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">Other Teeth Are Shifting</h3>
                      <p className="text-muted-foreground">
                        Without that tooth to hold the line, neighboring teeth slowly drift. Gaps widen. 
                        Your bite changes. What was one problem can become several.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">You're Worried It'll Get Worse</h3>
                      <p className="text-muted-foreground">
                        Deep down, you know this isn't something that fixes itself. The longer you wait, 
                        the more complicated—and expensive—it might become.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-10">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg h-14">
                      {FREE_CONSULT_CTA}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* WHY WAITING MAKES IT HARDER */}
          <section 
            ref={waitingAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${waitingAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    The Truth About Missing Teeth: <br />
                    <span className="text-primary">They Don't Stay the Same</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A missing tooth isn't a static problem. It's a slow process that continues 
                    quietly in the background—until it becomes harder to fix.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Bone Loss Begins Immediately</h3>
                      <p className="text-muted-foreground">
                        Your jawbone needs stimulation from tooth roots to stay strong. Without it, 
                        the bone starts shrinking within months. This affects your facial structure 
                        and limits future treatment options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Teeth Shift and Tilt</h3>
                      <p className="text-muted-foreground">
                        Neighboring teeth gradually drift into the empty space. Opposing teeth may 
                        over-erupt. Your bite changes. What started as one tooth can affect your 
                        entire dental alignment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Treatment Becomes More Complex</h3>
                      <p className="text-muted-foreground">
                        With bone loss and shifted teeth, future treatment may require bone grafting, 
                        orthodontics, or more extensive procedures. What could be straightforward 
                        now becomes complicated later.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Costs Increase Over Time</h3>
                      <p className="text-muted-foreground">
                        More complexity means more time, more procedures, and higher costs. 
                        Addressing the problem early is almost always simpler and more affordable 
                        than waiting until it compounds.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Card className="mt-12 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <p className="text-lg font-medium mb-4">
                      "I wish I had done this sooner."
                    </p>
                    <p className="text-muted-foreground mb-6">
                      This is the most common thing patients tell us after getting their implant. 
                      Not because waiting was wrong—but because they didn't realize how simple 
                      the solution could be.
                    </p>
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Button size="lg" variant="emergency" className="text-lg">
                        <Phone className="mr-2 h-5 w-5" />
                        Schedule My Free Consult
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DENTAL IMPLANT VISUAL EXPLAINER */}
          <section className="py-16">
            <div className="container px-4 mx-auto max-w-5xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Understanding Dental Implants
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See exactly how a dental implant replaces a missing tooth—from the titanium root to the natural-looking crown.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border bg-background">
                  <img 
                    src={dentalImplantDiagram} 
                    alt="Dental implant cross-section showing titanium post, abutment, and crown" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                    <p className="text-sm font-medium text-center">
                      Cross-section: Implant, Abutment & Crown
                    </p>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg border bg-background">
                  <img 
                    src={dentalImplantInMouth} 
                    alt="Dental implant placement showing how it integrates with natural teeth" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                    <p className="text-sm font-medium text-center">
                      How an implant fits with your natural teeth
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Unlike bridges or dentures, implants replace the <strong>entire tooth structure</strong>—including the root. 
                  This preserves your jawbone and provides the stability of a natural tooth.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT A DENTAL IMPLANT REALLY DOES / BENEFITS */}
          <section 
            id="benefits"
            ref={whatAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${whatAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    What a Dental Implant Actually Does
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Think of it as rebuilding your tooth from scratch—starting with a new root.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Replaces the Root</h3>
                      <p className="text-muted-foreground text-sm">
                        A small titanium post is placed in your jawbone. It's biocompatible—meaning 
                        your bone naturally fuses to it, just like a real tooth root.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Stabilizes the Bone</h3>
                      <p className="text-muted-foreground text-sm">
                        Because it functions like a root, it sends signals to your jawbone to stay 
                        strong. This stops bone loss and preserves your facial structure.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">Supports a Real Crown</h3>
                      <p className="text-muted-foreground text-sm">
                        A custom-made crown is attached on top. It's matched to your other teeth in 
                        color and shape. You brush and floss it normally.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-background rounded-2xl p-8 border">
                  <h3 className="font-semibold text-xl mb-4 text-center">The Result?</h3>
                  <p className="text-lg text-center text-muted-foreground mb-6">
                    A tooth that looks natural, feels natural, and works exactly like 
                    your other teeth. Eat what you want. Smile without thinking about it. 
                    Move on with your life.
                  </p>
                  <div className="text-center">
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Button size="lg" variant="emergency" className="text-lg">
                        {FREE_CONSULT_CTA}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IMPLANTS VS OTHER OPTIONS */}
          <section 
            ref={comparisonAnimation.ref}
            className="py-20"
          >
            <div className="container px-4 mx-auto max-w-5xl">
              <div className={`transition-all duration-700 ${comparisonAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    How Do Implants Compare?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    You have options. Here's how they actually stack up—honestly.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h3 className="font-semibold text-xl">Dental Implant vs. Dental Bridge</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-medium text-primary mb-2">Dental Implant</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Stands alone—doesn't touch neighboring teeth</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Preserves bone and prevents shifting</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Designed to last decades with proper care</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Brush and floss normally</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground mb-2">Traditional Bridge</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Requires grinding down healthy adjacent teeth</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Doesn't stimulate bone—bone loss continues</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Typically needs replacement in 10-15 years</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Harder to clean underneath</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h3 className="font-semibold text-xl">Dental Implant vs. Leaving the Gap</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-medium text-primary mb-2">Dental Implant</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Restores full chewing function</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Prevents teeth from shifting</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Maintains jawbone and facial structure</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Complete, confident smile</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground mb-2">Leaving the Gap</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Chewing becomes uneven and strained</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Adjacent teeth drift and tilt over time</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Bone loss accelerates, face may change</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Future treatment becomes more complex</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h3 className="font-semibold text-xl">Dental Implant vs. Repeated Repairs</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-medium text-primary mb-2">Dental Implant</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> One solution, done correctly</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Addresses the root of the problem</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> No ongoing repairs or replacements</li>
                            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Long-term peace of mind</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground mb-2">Patch-and-Repair Approach</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Temporary fixes need eventual replacement</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Underlying problem continues</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Multiple dental visits over years</li>
                            <li className="flex gap-2"><span className="text-muted-foreground">•</span> Costs add up significantly over time</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong className="text-foreground">Fix it once. Fix it correctly. Move on with confidence.</strong>
                  </p>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg">
                      {FREE_CONSULT_CTA}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* THE IMPLANT PROCESS */}
          <section
            id="implant-process"
            ref={implantProcessAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${implantProcessAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    The Implant Process: What to Expect
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Step-by-step implant journey. Understand your path to a new smile.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <span className="text-accent font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Free Consultation & 3D Scan</h3>
                      <p className="text-muted-foreground">
                        We evaluate your oral health, take detailed 3D images of your jaw, and discuss 
                        your goals. You'll leave with a personalized treatment plan and clear cost breakdown.
                      </p>
                      <p className="text-sm text-accent font-medium mt-2">⏱ About 45 minutes</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <span className="text-accent font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Implant Placement</h3>
                      <p className="text-muted-foreground">
                        The titanium implant post is placed into your jawbone under local anesthesia. 
                        Most patients say it's easier than they expected. You'll receive a temporary tooth so you're never without a smile.
                      </p>
                      <p className="text-sm text-accent font-medium mt-2">⏱ 1–2 hours per implant</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <span className="text-accent font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Healing & Osseointegration</h3>
                      <p className="text-muted-foreground">
                        Over 3–6 months, your jawbone naturally fuses with the implant, creating a rock-solid 
                        foundation. We monitor your progress with check-in visits during this time.
                      </p>
                      <p className="text-sm text-accent font-medium mt-2">⏱ 3–6 months (mostly waiting)</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <span className="text-accent font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Custom Crown Placement</h3>
                      <p className="text-muted-foreground">
                        Your permanent crown is custom-crafted to match the color, shape, and size of your 
                        natural teeth. It's attached to the implant — and you're done. Eat, smile, and live normally.
                      </p>
                      <p className="text-sm text-accent font-medium mt-2">⏱ About 1 hour</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg h-14">
                      <Phone className="mr-2 h-5 w-5" />
                      Start With Your Free Consult
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* WHY DIVINE SMILES - DETAILED */}
          <section 
            ref={whyUsAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${whyUsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Patients Choose Divine Smiles <br />
                    <span className="text-primary">for Their Dental Implants</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Not all dental implants are the same. The difference is in the planning, 
                    the precision, and the people who stand behind your care.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Thoughtful Planning Before Surgery</h3>
                          <p className="text-muted-foreground">
                            Every implant starts with a comprehensive evaluation. We map your bone 
                            structure, assess your overall dental health, and create a precise plan 
                            before any treatment begins.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Advanced 3D Diagnostics</h3>
                          <p className="text-muted-foreground">
                            We use detailed 3D imaging to see exactly what's happening beneath the 
                            surface. This means fewer surprises, better placement, and results that 
                            are designed to last.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Precision Placement</h3>
                          <p className="text-muted-foreground">
                            The angle, depth, and position of your implant matters for long-term 
                            success. Our experienced team takes the time to get it right—because 
                            implants done well shouldn't need to be redone.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">In-House Care From Start to Finish</h3>
                          <p className="text-muted-foreground">
                            From consultation to crown placement, your care stays under one roof 
                            with one team who knows you. No referrals, no handoffs, no starting 
                            over somewhere new.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Long-Term Thinking</h3>
                          <p className="text-muted-foreground">
                            We're not interested in quick fixes. We plan for how your implant will 
                            look and function 10, 20, even 30 years from now. That's the standard 
                            we hold ourselves to.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-10">
                  <p className="text-xl font-medium mb-2">
                    Focused on getting it right, not rushing it.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    For patients who don't want to redo this later.
                  </p>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule My Free Consult
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ / OBJECTION HANDLING */}
          <section 
            id="faq"
            ref={objectionsAnimation.ref}
            className="py-20"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${objectionsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Questions You're Probably Asking
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    These are the concerns most patients have before their consultation. 
                    You're not alone in wondering about them.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">"I'm nervous about the surgery."</h3>
                      <p className="text-muted-foreground">
                        That's completely normal. Most patients tell us it was much easier than 
                        they expected. The procedure is done with local anesthesia, and many 
                        patients say it's less uncomfortable than a tooth extraction. We take 
                        our time, explain everything beforehand, and make sure you're comfortable 
                        throughout.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">"How do I know I'm choosing the right dentist?"</h3>
                      <p className="text-muted-foreground">
                        This is one of the smartest questions you can ask. Not all implants are 
                        created equal—success depends heavily on planning, technology, and 
                        experience. During your consultation, we'll show you exactly how we 
                        approach your case. Ask questions. Take your time. You should feel 
                        confident before moving forward.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">"What will this cost?"</h3>
                      <p className="text-muted-foreground">
                        Every case is different depending on your specific situation—bone health, 
                        number of teeth, and complexity. That's why we don't give generic quotes. 
                        During your consultation, we'll give you a clear, personalized breakdown 
                        with no surprises. We also offer financing options to make treatment 
                        accessible.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">"How long is the recovery?"</h3>
                      <p className="text-muted-foreground">
                        Most patients return to normal activities within a day or two. There's 
                        typically some mild soreness, but it's manageable with over-the-counter 
                        medication. The implant then needs a few months to fully integrate with 
                        your bone before the final crown is placed—but you'll have a temporary 
                        tooth during that time.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-3">"Am I even a candidate for an implant?"</h3>
                      <p className="text-muted-foreground">
                        Most adults are good candidates. Age isn't a barrier—healthy patients in 
                        their 70s and 80s receive implants successfully. The main factors are 
                        bone health and overall health. If bone loss has occurred, we can often 
                        address that. The consultation will tell us exactly what's possible for 
                        you.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-10">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg">
                      Get Your Questions Answered — Free Consult
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* COST REFRAME */}
          <section 
            ref={costAnimation.ref}
            className="py-20 bg-muted/30"
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className={`transition-all duration-700 ${costAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        A Word About Investment
                      </h2>
                      <div className="space-y-4 text-left max-w-xl mx-auto">
                        <p className="text-muted-foreground">
                          We understand cost is a real consideration. Here's what we've seen over 
                          15 years of practice:
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Fixing one tooth now is almost always 
                          simpler than fixing multiple problems later.</strong> When teeth shift, 
                          bone shrinks, and complications develop, treatment becomes more involved—and 
                          more expensive.
                        </p>
                        <p className="text-muted-foreground">
                          The consultation is designed to give you clarity. You'll understand your 
                          options, what's involved, and what makes sense for your situation. 
                          There's no pressure to decide that day.
                        </p>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Knowledge now gives you control over 
                          your decision—whenever you're ready to make it.</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FINANCING & ACCESS - Enhanced */}
          <section 
            ref={financingAnimation.ref}
            className="py-16"
          >
            <div className="container px-4 mx-auto max-w-4xl">
              <div className={`transition-all duration-700 ${financingAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Making Implants Accessible
                  </h2>
                  <p className="text-muted-foreground">
                    We believe cost shouldn't prevent you from getting the care you need.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                  <Card className="border-2 border-accent/30">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Flexible Financing</h3>
                      <p className="text-sm text-muted-foreground">
                        Custom payment plans tailored to your budget — monthly options available
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-accent/30">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Insurance Accepted</h3>
                      <p className="text-sm text-muted-foreground">
                        We work with most major dental insurance plans and maximize your benefits
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-accent/30">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                      <p className="text-sm text-muted-foreground">
                        Your free consultation includes a personalized cost breakdown — no hidden fees
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button size="lg" variant="emergency" className="text-lg">
                      {FREE_CONSULT_CTA}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section 
            ref={finalCtaAnimation.ref}
            id="free-consultation"
            className="py-20 bg-primary text-primary-foreground"
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className={`transition-all duration-700 ${finalCtaAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/15 px-4 py-2 rounded-full mb-6 text-sm font-bold">
                    <Sparkles className="h-4 w-4" />
                    100% FREE — No Obligation
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Your FREE Implant Consultation Is Waiting
                  </h2>
                  <p className="text-xl mb-8 text-primary-foreground/90">
                    Call now to schedule. You'll leave with clear answers 
                    about what's possible, what's involved, and whether an implant is right for you.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-xl mx-auto">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Personalized treatment plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Clear cost breakdown</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Financing options discussed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>Zero pressure, zero obligation</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Button size="lg" variant="secondary" className="text-lg h-16 px-10 w-full sm:w-auto font-bold">
                        <Phone className="mr-2 h-6 w-6" />
                        Call Now: {PHONE_NUMBER}
                      </Button>
                    </a>
                  </div>
                  
                  {/* Social proof repeat */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold">4.9 Stars</span>
                    <span className="text-primary-foreground/70">· 200+ Google Reviews</span>
                  </div>
                  
                  <p className="text-sm text-primary-foreground/70">
                    Your free consultation is a conversation, not a commitment.
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                    <p className="text-primary-foreground/80 mb-2">
                      📍 1574 Chapel St, New Haven, CT 06511
                    </p>
                    <p className="text-primary-foreground/70 text-sm">
                      Serving New Haven and surrounding communities within 30 miles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ReviewsSection />
          <section id="implant-team">
            <DoctorsSection />
          </section>
          <ContactSection />
        </main>
        <Footer />
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur border-t md:hidden z-50">
        <a href={`tel:${PHONE_NUMBER}`} className="block">
          <Button size="lg" variant="emergency" className="w-full text-base h-14 font-bold">
            <Phone className="mr-2 h-5 w-5" />
            {FREE_CONSULT_CTA}
          </Button>
        </a>
      </div>
    </>
  );
};

export default DentalImplants;
