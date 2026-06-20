import NewsLetter from "@/components/common/CommonNewsLetter";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesCards from "@/components/services/ServicesCards";
import ServicesHero from "@/components/services/ServicesHero";
import SearchBar from "@/components/ui/SearchBar";
import Title from "@/components/ui/Title";
import React from "react";

const searchItems = [
  {
    label: "Cardiology",
    href: "/services/cardiology",
    description: "Heart care and consultation",
    keywords: ["heart", "cardiac", "ECG"],
  },
  {
    label: "Orthopedics",
    href: "/services/orthopedics",
    description: "Bone, joint, and muscle care",
    keywords: ["bone", "fracture", "joint"],
  },
  {
    label: "Pediatrics",
    href: "/services/pediatrics",
    description: "Child healthcare services",
    keywords: ["child", "kids", "baby"],
  },
  {
    label: "Dr. Sharma",
    href: "/doctors/dr-sharma",
    description: "Cardiologist",
    keywords: ["doctor", "cardiologist"],
  },
  {
    label: "Emergency Care",
    href: "/services/emergency",
    description: "24/7 urgent medical support",
    keywords: ["emergency", "urgent", "24/7"],
  },
];

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
      <Navbar />
      <ServicesHero />
      <div className="mt-10"></div>
      <SearchBar items={searchItems} />
      <ServicesCards />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
