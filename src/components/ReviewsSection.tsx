import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "Elinora Adoniyahu",
    rating: 5,
    text: "Got a filling here and exam. Best dentist experience I've ever had. They really care, very pleasant.",
  },
  {
    name: "Roman Domatov",
    rating: 5,
    text: "I had an outstanding experience at this dental office! Dr. Jakob and his assistant Marina were exceptional from start to finish. Jakob was incredibly professional, gentle, and thorough—he took the time to explain everything clearly and made sure I felt comfortable throughout the entire visit. Marina was equally amazing, attentive, and reassuring, creating a calming environment and anticipating everything needed to make the appointment run smoothly. Together, they make a fantastic team. Highly recommend this office, especially Jakob and Marina, for anyone looking for skilled, caring, and genuinely friendly dental professionals!",
  },
  {
    name: "Charles Butler",
    rating: 5,
    text: "Divine Smiles brought my smile back to Life! They are Super Official. Do your teeth a favor and make an appointment.",
  },
  {
    name: "Jackson O'Connor",
    rating: 5,
    text: "Anna's scheduling flexibility accommodated my urgent extraction need and painless treatment was delivered immediately that day.",
  },
  {
    name: "Muhammad Kholiful Ashdiq",
    rating: 5,
    text: "Dr. Shande handled my complex extraction with such skill that it was completely painless from start to finish!",
  },
  {
    name: "David Jehudaiov",
    rating: 5,
    text: "I had an amazing experience with Dr. Yaakov when he treated a tooth with a large infection. He performed an exceptional root canal—completely pain-free and handled with great care. Dr. Yaakov explained everything clearly and made sure I was comfortable throughout the entire procedure. The infection was taken care of, and my tooth feels perfect now. The staff was friendly, the office spotless, and the whole experience was smooth from start to finish. I'm so thankful for Dr. Yaakov's skill and professionalism—highly recommend him!",
  },
];

const ReviewsSection = () => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const { ref, isVisible } = useScrollAnimation();

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section ref={ref} className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from patients we've helped with emergency dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => {
            const isExpanded = expandedReviews.has(index);
            const isLongReview = review.text.length > 200;
            
            return (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-700 hover:-translate-y-1 flex flex-col ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`text-muted-foreground leading-relaxed ${!isExpanded && isLongReview ? 'line-clamp-4' : ''}`}>
                      {review.text}
                    </p>
                    {isLongReview && (
                      <button
                        onClick={() => toggleReview(index)}
                        className="text-primary hover:underline text-sm mt-2 font-medium"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-lg">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-2xl">4.9</span>
            <span className="text-muted-foreground">out of 5 based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
