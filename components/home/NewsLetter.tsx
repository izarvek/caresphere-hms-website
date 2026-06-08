import React from 'react';
import Badge from '../ui/Badge';

const NewsLetter = () => {
  return (
      <section className="bg-blue-600 rounded-xl  p-10 shadow-2xl w-full mt-14">
        <div className="flex flex-col items-center justify-center text-center space-y-12 pb-10">
          
          <Badge title='Newsletter'/>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            Stay Informed, Stay Healthy
          </h1>
          <p className="text-md md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
            Get the latest health tips, expert advice, and updates delivered straight to your inbox.
          </p>
          <form className="w-full max-w-2xl">
            <div className="flex justify-between bg-white rounded-full items-center px-2 shadow-sm">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-2 flex md:px-8 lg:px-10 xl:px-14 py-3 text-lg bg-transparent rounded-full focus:outline-none text-gray-900 placeholder:text-gray-400"
              />
              <button 
                type="submit" 
                className=" bg-blue-600 text-white font-bold px-4 sm:px-10 py-1 sm:py-2 rounded-full text-xs sm:text-md md:text-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>
  );
}

export default NewsLetter;