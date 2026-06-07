import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 h-13.75 w-full">
      <div className="flex gap-2 items-center jusitify-center cursor-pointer">
        <Image src="/images/logo/logo.png" alt="logo" width={30} height={30} />
        <p className="inter-semibold">CareSphere</p>
      </div>
      <div className="hidden md:block">
        <ol className="flex gap-6 inter-regular">
          {["Home", "Services", "About", "Contact"].map((menu, i) => (
            <li key={i} className="cursor-pointer inter-regular active:text-gray-800 select-none hover:text-blue-700">{menu}</li>
          ))}
        </ol>
      </div>
      <div className="bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-0.5 md:px-4 md:py-1 rounded-full transition duration-300 ease-in-out hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 cursor-pointer ">
        <button className="text-gray-100 inter-semibold text-sm md:text-md cursor-pointer">Book Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
