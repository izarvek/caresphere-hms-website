import React from "react";
import { testimonialsData } from "@/public/data/testimonials-data";
import TestimonialCard from '@/components/ui/TestimonialCard'
import Badge from "../ui/Badge";

const Testimonials = () => {
  return (
    <section className="bg-blue-600 px-4 py-10 sm:px-6 lg:px-8 rounded-2xl">
      <div className="mx-auto max-w-7xl">
        <Badge title="Testimonial" />
        <div className="mb-10 text-center mt-6">
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
            <TestimonialCard key={item.name} name = {item.name} role={item.role} rating={item.rating} text={item.text} initial={item.initial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
