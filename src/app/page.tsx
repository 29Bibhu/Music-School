import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import { InfiniteMovingCards } from "@/components/UI/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "@/components/TestimonilalCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased">
     <HeroSection />
     <FeaturedCourses />
     <WhyChooseUs />
     <InfiniteMovingCardsDemo />
     <UpcomingWebinar />
     <Instructors />
     <Footer />
   </main>
  );
}
