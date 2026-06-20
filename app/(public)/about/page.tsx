import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Testimonials from "@/components/about/AboutTestimonials";
import AboutHero from "@/components/about/AboutHero";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutAchievements from "@/components/about/AboutAchievements";
import React from "react";
import NewsLetter from "@/components/common/CommonNewsLetter";

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
      <Navbar />
      <AboutHero />
      <AboutMissionVision />
      <Testimonials />
      <AboutAchievements />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
