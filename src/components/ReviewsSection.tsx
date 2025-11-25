import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    date: "2 weeks ago",
    rating: 5,
    text: "I had a terrible toothache on a Saturday night and they got me in right away. The dentist was professional and compassionate. My tooth pain was gone within hours!",
  },
  {
    name: "Michael Chen",
    date: "1 month ago",
    rating: 5,
    text: "Broke a tooth during dinner and was in panic mode. Called their emergency line and they saw me the same day. Fast, professional service. Highly recommend!",
  },
  {
    name: "Jessica Martinez",
    date: "3 weeks ago",
    rating: 5,
    text: "Amazing emergency dental care! Had severe jaw pain and they diagnosed the issue immediately. The staff was caring and explained everything clearly.",
  },
  {
    name: "David Thompson",
    date: "1 week ago",
    rating: 5,
    text: "Best emergency dental experience I've ever had. They worked with my insurance and got me out of pain quickly. The office is clean and the staff is wonderful.",
  },
  {
    name: "Emily Rodriguez",
    date: "2 months ago",
    rating: 5,
    text: "Had an urgent dental emergency on Sunday morning. They answered right away and scheduled me within hours. Professional, efficient, and caring team.",
  },
  {
    name: "Robert Wilson",
    date: "3 weeks ago",
    rating: 5,
    text: "Needed an emergency tooth extraction and was terrified. The dentist was gentle and made me feel comfortable throughout. Pain-free recovery thanks to their excellent care!",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from patients we've helped with emergency dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
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
