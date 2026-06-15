import React from "react";
import Image from "next/image";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import { servicesData } from "@/public/data/services-data";

const ServicesCards = () => {
  return (
     <section className="w-full mt-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service) => (
          <article
            key={service._id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                {service.isVerified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                    <BadgeCheck size={14} />
                    Verified
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="max-w-[75%]">
                    <h3 className="text-xl font-semibold text-white line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-1">
                      {service.canonical}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/95 px-3 py-2 text-right shadow-sm backdrop-blur">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-semibold text-slate-900">
                        {service.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {service.reviewCount.toLocaleString()} reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm leading-6 text-slate-600 line-clamp-2">
                {service.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} className="shrink-0" />
                <span className="line-clamp-1">{service.location}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.specialties.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-500">
                  Since{" "}
                  <span className="font-semibold text-slate-900">
                    {service.establishedYear}
                  </span>
                </p>

                <a
                  href={`/${service.slug}`}
                  className="inline-flex items-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesCards
