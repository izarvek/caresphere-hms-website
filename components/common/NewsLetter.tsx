import React from "react";
import Badge from "../ui/Badge";

const NewsLetter = () => {
  return (
    <section className="bg-blue-600 rounded-xl  p-10 shadow-2xl w-full mt-14">
      <div className="flex flex-col items-center justify-center text-center space-y-12 pb-10">
        <Badge title="Newsletter" />
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
          Stay Informed, Stay Healthy
        </h1>
        <p className="text-md md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
          Get the latest health tips, expert advice, and updates delivered
          straight to your inbox.
        </p>
        <form className="w-full max-w-2xl">
          <div className="flex items-center rounded-full bg-white p-2 shadow-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-3 sm:px-5 md:px-6 py-3 text-sm md:text-base lg:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none min-w-0"
            />

            <button
              type="submit"
              className="shrink-0 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-6 md:px-8 md:text-base"
            >
              <span>Subscribe</span>
              <span className="hidden sm:inline"> Now</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
