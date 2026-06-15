import React from "react";
import { contactCardsData, formFieldsData } from "@/public/data/contact-data";

export default function ContactHelp() {
  return (
    <div className="bg-white text-slate-900">
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          {contactCardsData.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h2>

                <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] lg:col-span-1">
          <h2 className="text-xl font-semibold text-slate-900">
            Get in Touch with Us
          </h2>

          <form className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {formFieldsData.map((field) => (
                <div
                  key={field.label}
                  className={field.type === "select" ? "sm:col-span-1" : ""}
                >
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    {field.label}
                  </label>

                  {field.type === "select" ? (
                    <select className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 outline-none transition focus:border-cyan-600 focus:bg-white">
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Let us know how we can help you."
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="mt-5 h-11 w-full rounded-full bg-cyan-600 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Submit
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              By submitting, I agree to the{" "}
              <span className="font-medium text-cyan-600 underline">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
