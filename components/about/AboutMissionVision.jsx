import React from "react";
import Title from "../ui/Title";
import { missionVisionData } from "@/public/data/mission-vision-data";

const AboutMissionVision = () => {
  return (
    <div className="bg-white">
      <Title title="Our Mission & Vision" />

      <div className="mt-10 overflow-hidden rounded-2xl">
        <img
          src="/images/about/banner.png"
          alt="Medical team standing together"
          className="h-[360px] w-full object-cover object-top sm:h-[600px]"
        />
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