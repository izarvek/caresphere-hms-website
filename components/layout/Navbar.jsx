import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="cursor-pointer">
        <Image src="/images/logo/logo.png" alt="logo" width={80} height={80} />
      </div>
      <div>
        <ol className="flex gap-6 inter-regular">
          {["Home", "Services", "About", "Contact"].map((menu, i) => (
            <li key={i} className="cursor-pointer text-gray-600 active:text-gray-800 select-none hover:text-blue-700">{menu}</li>
          ))}
        </ol>
      </div>
      <div className="bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-1 rounded-full transition duration-300 ease-in-out hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 cursor-pointer ">
        <button className="text-gray-100 inter-regular ">Book Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
