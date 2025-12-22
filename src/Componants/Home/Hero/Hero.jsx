import React from "react";
import building from "../../../assets/Home/Hero/building.svg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-28 text-white"
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:order-2">
        <img
          src={building}
          alt="Hero building graphic"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 md:order-1">
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Discover Your Dream Property with Estatein
        </h1>

        <p className="mt-6 text-gray-400 max-w-lg">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="w-full sm:w-auto border border-solid border-[#262626] rounded-lg px-6 py-3 hover:bg-[#262626] transition duration-300">
            Learn More
          </button>
          <button className="w-full sm:w-auto bg-[#703BF7] rounded-lg px-6 py-3 hover:bg-[#5a2eba] transition duration-300">
            Browse Properties
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10 md:flex md:flex-nowrap md:gap-6">
          <div className="col-span-1 border border-solid border-[#262626] rounded-lg p-5 bg-[#1A1A1A] text-center md:w-auto md:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl">200+</h1>
            <p className="text-gray-400">Happy Customers</p>
          </div>

          <div className="col-span-1 border border-solid border-[#262626] rounded-lg p-5 bg-[#1A1A1A] text-center md:w-auto md:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl">10k+</h1>
            <p className="text-gray-400">Properties For Clients</p>
          </div>

          <div className="col-span-2 sm:col-span-1 md:block border border-solid border-[#262626] rounded-lg p-5 bg-[#1A1A1A] text-center md:w-auto md:text-left">
            <h1 className="font-semibold text-4xl">16+</h1>
            <p className="text-gray-400">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
