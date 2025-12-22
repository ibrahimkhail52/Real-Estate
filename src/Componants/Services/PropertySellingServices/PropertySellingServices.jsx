import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";
import { GiPieChart } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import myBackgroundImage from "../../../assets/Services/PropertySellingServices/bg-img.svg";

const MultiCircleIcon = ({ children }) => (
  <div className="relative flex items-center justify-center w-20 h-20">
    {/* Outer circle */}
    <svg
      width="72"
      height="72"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute half-spin-slow"
    >
      <circle
        cx="55"
        cy="55"
        r="50"
        stroke="#8B5CF6"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeDasharray="157 157"
        transform="rotate(-90 55 55)"
      />
    </svg>

    {/* Outer reverse */}
    <svg
      width="72"
      height="72"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute half-spin-slow reverse-spin"
    >
      <circle
        cx="55"
        cy="55"
        r="50"
        stroke="#8B5CF6"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeDasharray="157 157"
        transform="rotate(-90 55 55)"
      />
    </svg>

    {/* Inner circle */}
    <svg
      width="52"
      height="52"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute half-spin-fast"
    >
      <circle
        cx="45"
        cy="45"
        r="40"
        stroke="#8B5CF6"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="125 125"
        transform="rotate(90 45 45)"
      />
    </svg>

    {/* Inner reverse */}
    <svg
      width="52"
      height="52"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute half-spin-fast reverse-spin"
    >
      <circle
        cx="45"
        cy="45"
        r="40"
        stroke="#8B5CF6"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="125 125"
        transform="rotate(90 45 45)"
      />
    </svg>

    {/* Center icon */}
    <div className="relative z-10 text-[#BC9CFF]">{children}</div>
  </div>
);

const PropertySellingServices = () => {
  const services = [
    {
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
      Icon: AiFillSignal,
    },
    {
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
      Icon: BsDatabaseFill,
    },
    {
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
      Icon: GiPieChart,
    },
    {
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through every step.",
      Icon: HiOutlineSpeakerphone,
    },
  ];

  const bottomService = services[3];
  const BottomIcon = bottomService.Icon;

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Unlock Property Value</h1>
          <p className="max-w-4xl text-gray-400">
            Selling your property should be a rewarding experience. At
            <span className="text-purple-400 font-semibold"> Estatein</span>, we
            help you maximize your property’s value at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => {
            const Icon = service.Icon;

            return (
              <div
                key={service.title}
                className=" p-6 rounded-xl border border-[#242424]
                           hover:border-[#3a3a3a] transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MultiCircleIcon>
                    <Icon className="w-5 h-5" />
                  </MultiCircleIcon>

                  <h2 className="text-xl font-semibold leading-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}

          <div className=" p-6 rounded-xl border border-[#242424]">
            <div className="flex items-center gap-4 mb-4">
              <MultiCircleIcon>
                <BottomIcon className="w-5 h-5" />
              </MultiCircleIcon>

              <h2 className="text-xl font-semibold">{bottomService.title}</h2>
            </div>

            <p className="text-gray-400">{bottomService.description}</p>
          </div>

          <div
            className="p-8 rounded-lg bg-[#191919] col-span-1 md:col-span-2 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                myBackgroundImage.src || myBackgroundImage
              })`,
            }}
          >
            <div>
        
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                {/* The heading will take full width on mobile, and grow to fill space on medium screens */}
                <h2 className="text-2xl font-bold text-white m-0 w-full md:w-auto">
                  Unlock the Value of Your Property Today
                </h2>

                {/* The button is already set to w-fit and whitespace-nowrap, making it inherently responsive in width */}
                <button className="bg-[#141414] text-white py-3 px-6 rounded-lg hover:bg-gray-100 transition w-fit whitespace-nowrap self-start md:self-center">
                  Learn More
                </button>
              </div>

              <p className="text-purple-100 max-w-lg">
                Explore our selling services and let our experts handle every
                detail to get you the best deal possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySellingServices;
