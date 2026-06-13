import React from "react";

import { testimonialsData } from "@/public/data/testimonials-data";

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 text-blue-500 ${
            i < rating ? "fill-current" : ""
          }`}
        />
      ))}
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="bg-blue-600 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-100">
            <span>Testimonial</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Real stories from patients who experienced our care, support, and
            commitment first-hand.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
