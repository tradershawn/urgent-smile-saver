import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctors/doctor-1.jpg";
import doctor2 from "@/assets/doctors/doctor-2.jpg";
import doctor3 from "@/assets/doctors/doctor-3.jpg";
import doctor4 from "@/assets/doctors/doctor-4.jpg";
import doctor5 from "@/assets/doctors/doctor-5.jpg";
import doctor6 from "@/assets/doctors/doctor-6.jpg";
import doctor7 from "@/assets/doctors/doctor-7.jpg";
import doctor8 from "@/assets/doctors/doctor-8.jpg";

const doctors = [
  { name: "Dr. Shande Andinyaguev", specialty: "Doctor of Dental Surgery", image: doctor1 },
  { name: "Dr. Charles Spatz", specialty: "Doctor of Dental Surgery", image: doctor2 },
  { name: "Dr. Daniel Plishtiyev", specialty: "Doctor of Dental Surgery", image: doctor3 },
  { name: "Dr. Jakob Davydov", specialty: "Doctor of Dental Surgery", image: doctor4 },
  { name: "Dr Jacob Fakhlayev", specialty: "Doctor of Dental Surgery", image: doctor5 },
  { name: "Dr Yaakov Sulimanov", specialty: "Doctor of Dental Surgery", image: doctor6 },
  { name: "Dr Ahava Bensoussan", specialty: "Doctor of Dental Surgery", image: doctor7 },
  { name: "Dr Alex Kupchik", specialty: "Doctor of Dental Surgery", image: doctor8 },
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Dental Team</h2>
          <p className="text-xl text-muted-foreground">
            Experienced professionals ready to handle your emergency dental needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2"
            >
              <CardContent className="pt-8 pb-6 px-4">
                <div className="mb-4 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-md">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium">
                  {doctor.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
