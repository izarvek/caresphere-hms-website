import NewsLetter from "@/components/common/NewsLetter";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesCards from "@/components/services/ServicesCards";
import ServicesHero from "@/components/services/ServicesHero";
import Title from "@/components/ui/Title";
import React from "react";

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
      <Navbar />
      <ServicesHero/>
      <Title title="Healthcare Services"/>
      <ServicesCards />
      <NewsLetter/>
      <Footer />
    </div>
  );
};

export default page;
