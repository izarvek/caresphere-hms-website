import React from "react";

const ServicesHero = () => {
  return (
    <section className="mt-5 mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <div className="flex min-h-[300px] flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-4 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
          Healthcare Services
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Our Services
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Explore our comprehensive range of medical services designed to
          provide quality care, expert consultation, and a seamless healthcare
          experience for every patient.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;