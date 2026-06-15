import React, { memo } from "react";
import { Quote } from "lucide-react";
import Stars from "./Stars";

const TestimonialCard = ({name, role, rating,text,initial,}) => {
  return (
    <div className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
      <div className="mb-4 flex items-center justify-between">
        <Stars rating={rating} />
        <Quote className="h-5 w-5 text-cyan-600/70 " />
      </div>

      <p className="text-[15px] leading-7 text-slate-700">{text}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-sm font-semibold text-white shadow-sm">
          {initial}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialCard);