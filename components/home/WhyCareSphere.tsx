import React from "react";
import Badge from "../ui/Badge";
import Title from "../ui/Title";
import { choosingReasonsData } from "@/public/data/reasond-data";
import Image from "next/image";

const WhyCareSphere = () => {
  return (
    <section className="bg-[#faf7f0] rounded-lg mt-6 pb-14">
      <div className="container mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <Badge title="About Us" />
          <Title title="Why Choose CareSphere?" />
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-lg overflow-hidden mb-12 shadow-sm aspect-[16/7]">
          <Image
            src="/images/home/why-choose-caresphere.jpg"
            alt="Doctor smiling with a patient"
            className="w-full object-cover object-bottom hover:brightness-105 transition-all duration-300 ease-in-out"
            width={1200}
            height={600}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {choosingReasonsData.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason._id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center mb-6 text-white">
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCareSphere;
