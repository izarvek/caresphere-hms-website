import React from "react";
import { Star } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden  aspect-auto">
      <div className="bg-green-400 w-full h-full">
        <img src="/images/home/banner.png" alt="" className="w-full h-full object-cover hover:brightness-105 transition duration-300 ease-in-out" />
      </div>
      <div>
        <div>
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
