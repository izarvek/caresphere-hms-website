'use client'; // Required for hooks in the App Router

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center py-2 h-13.75 w-full border-b border-gray-100">
      <div className="flex gap-2 items-center justify-center cursor-pointer">
        <Image src="/images/logo/logo.png" alt="logo" width={30} height={30} />
        <p className="">CareSphere</p>
      </div>
      <div className="hidden md:block">
        <ol className="flex md:gap-6 lg:gap-10 xl:gap-14 inter-regular">
          {["Home", "Services", "About", "Contact"].map((menu, i) => (
            <li 
              key={i} 
              // Added routing logic: "Home" goes to root, others go to their path
              onClick={() => router.push(menu === "Home" ? "/" : `/${menu.toLowerCase()}`)} 
              className="cursor-pointer inter-regular active:text-cyan-800 select-none hover:text-cyan-700"
            >
              {menu}
            </li>
          ))}
        </ol>
      </div>
      <div className="bg-linear-to-r from-cyan-500 via-cyan-600 to-cyan-700 px-2 py-0.5 md:px-4 md:py-1 rounded-full transition duration-300 ease-in-out hover:from-cyan-700 hover:via-cyan-600 hover:to-cyan-500 cursor-pointer ">
        <button className="text-gray-100 text-sm md:text-md cursor-pointer">Book Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;