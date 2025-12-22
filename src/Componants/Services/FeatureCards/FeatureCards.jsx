import React from "react";

import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { FaCameraRetro } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";
import { IoSunnyOutline } from "react-icons/io5";

const DiagonalArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-500 hover:text-white transition duration-200"
  >
    <path d="M7 17l10-10M7 7h10v10" />
  </svg>
);

const MultiCircleIcon = ({ children }) => (
  <div className="relative flex items-center justify-center w-24 h-24 group">
    <svg
      width="80"
      height="80"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="www.w3.org"
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
        strokeDashoffset="0"
        transform="rotate(-90 55 55)"
      />
    </svg>
    <svg
      width="80"
      height="80"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="www.w3.org"
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
        strokeDashoffset="0"
        transform="rotate(-90 55 55)"
      />
    </svg>

    {/* Inner Circle spins in the 'reverse' direction*/}
    <svg
      width="60"
      height="60"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="www.w3.org"
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
        strokeDashoffset="0"
        transform="rotate(90 45 45)"
      />
    </svg>
    <svg
      width="60"
      height="60"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="www.w3.org"
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
        strokeDashoffset="0"
        transform="rotate(90 45 45)"
      />
    </svg>

    {/* Icon */}
    <div className="relative z-10 text-[#BC9CFF]">{children}</div>
  </div>
);

const FeatureCards = () => {
  const features = [
    { title: "Find Your Dream Home", Icon: HiMiniBuildingStorefront },
    { title: "Unlock Property Value", Icon: FaCameraRetro },
    { title: "Effortless Property Management", Icon: BiBuildings },
    { title: "Smart Investments. Informed Decisions.", Icon: IoSunnyOutline },
  ];

  return (
    <div className="bg-[#1A1A1A] py-3 px-3">
      <div className="bg-[#131313] py-5 px-4 rounded-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ title, Icon }) => (
            <div
              key={title}
              className="relative bg-[#1a1a1a] h-40 rounded-xl
                         border border-[#2a2a2a]
                         flex flex-col items-center justify-center text-center
                         hover:border-[#4a4a4a] transition duration-300 group"
            >
              {/* Arrow */}
              <button className="absolute top-2 right-2 p-2 rounded-lg hover:bg-[#2a2a2a]">
                <DiagonalArrowIcon />
              </button>

              {/* Icon + Circles */}
              <MultiCircleIcon>
                <Icon className="w-7 h-7" />
              </MultiCircleIcon>

              {/* Title */}
              <p className="text-white font-semibold text-lg max-w-[200px]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
