import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden  aspect-auto mt-5">

      <div className="w-full h-full">
        <Image 
          src="/images/home/banner.png" 
          alt="" 
          className="w-full h-full object-cover hover:brightness-105 transition duration-300 ease-in-out" 
          width={1200}
          height={600}
        />
      </div>
       
       {/* Dark overlay for readability */}
       <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-black/0 w-2/3">
       {/* Content */}
      <div  className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24 text-white">

        {/* Rating Badge */}
        <div className="flex items-center gap-2 bg-white/90 text-black  rounded-full px-3 py-1 w-fit">
          <FaStar className="text-cyan-600 h-4 w-4 md:h-5 md:w-5" />
          <p className=" text-xs md:text-sm leading-none mt-0.5">
            4.9 (600 reviews)
          </p>
        </div>

        <div className="mt-2 md:mt-4 lg:mt-6 xl:mt-8">
           <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
            Your Health, <br />
            Our Priority
           </p>
        </div>
        <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
            <p className="text-xs sm:text-sm md:text-md lg:text-lg text-wrap">
              Trusted care with advanced solutions to support <br className="hidden sm:block"/> 
              your health and wellbeing.
            </p>
        </div>
        <div className="hidden sm:flex gap-2 sm:gap-4  mt-3 sm:mt-4 md:mt-6">
          <div className="bg-cyan-600 hover:bg-cyan-700 px-2 sm:px-4 py-1 rounded-full flex items-center justify-center">
            <button className=" text-white text-sm md:text-md lg:text-md">Book Appointment</button>
          </div>
          <div className="bg-white hover:bg-gray-200 px-2 sm:px-4 py-1 rounded-full flex items-center justify-center">
            <button className=" text-black text-sm md:text-md lg:text-md">Learn More</button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Hero;
