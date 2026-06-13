import React from "react";
import Title from "../ui/Title";

const achievementsData = [
  {
    title: "200K+ Patients Served",
    description: "Growing numbers reflect the trust in our care.",
  },
  {
    title: "98% Patient Satisfaction",
    description: "Our commitment ensures outstanding experiences.",
  },
  {
    title: "50+ Expert Specialists",
    description: "Delivering expertise across diverse medical needs.",
  },
  {
    title: "24/7 Care Availability",
    description: "Always here to provide support when you need it.",
  },
];

const AboutAchievements = () => {
  return (
    <section className="bg-[#fbf6ed] px-4 py-14 sm:px-6 lg:px-8 mt-14 rounded-2xl">
      <div className="mx-auto max-w-6xl rounded-3xl">
        <Title title="Our Achievements" />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="grid gap-4">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Medical team discussing patient care"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAchievements;