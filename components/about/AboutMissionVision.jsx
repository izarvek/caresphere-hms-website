import React from "react";
import Image from "next/image";
import { missionVisionData } from "@/public/data/mission-vision-data";

const AboutMissionVision = () => {
  return (
    <div className="bg-white">
      <div className="overflow-hidden rounded-2xl">
        <div className="relative h-[360px] w-full sm:h-[600px]">
          <Image
            src="/images/about/banner.png"
            alt="Medical team standing together"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        {missionVisionData.map((item, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-slate-900">
              {item.heading}
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
              <p>{item.paragraph.para1}</p>
              <p>{item.paragraph.para2}</p>
              <p>{item.paragraph.para3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMissionVision;
