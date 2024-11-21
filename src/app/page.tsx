import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebiner from "@/components/UpcomingWebiner";
import WhyChooseUs from "@/components/WhyChooseUs";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
  <main className="max-h-screen w-full bg-black/[0.96] antialiased ">
      
     
     <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpcomingWebiner />
    <Instructors />
    <Footer />
  </main>
  );
}
