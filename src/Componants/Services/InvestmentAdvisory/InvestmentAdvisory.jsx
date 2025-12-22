import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { IoIosSunny } from "react-icons/io";
import bgIMG from "../../../assets/Services/InvestmentAdvisory/bg-Img.svg";

/* ===============================
   Spinning Multi Circle Icon
================================ */
const MultiCircleIcon = ({ children }) => (
  <div className="relative flex items-center justify-center w-20 h-20 mb-4">
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

    {/* Center Icon */}
    <div className="relative z-10 text-[#BC9CFF]">{children}</div>
  </div>
);

/* ===============================
   Main Component
================================ */
const InvestmentAdvisory = () => {
  const services = [
    {
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert market analysis and in-depth real estate insights.",
      Icon: AiFillSignal,
    },
    {
      title: "ROI Assessment",
      description:
        "Evaluate potential returns with confidence using our comprehensive ROI assessment services.",
      Icon: FaFireAlt,
    },
    {
      title: "Customized Strategies",
      description:
        "We develop tailored investment strategies aligned with your unique financial goals.",
      Icon: TiLightbulb,
    },
    {
      title: "Diversification Mastery",
      description:
        "Spread investments wisely across property types and locations to minimize risk.",
      Icon: IoIosSunny,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Smart Investments, Informed Decisions
              </h1>
              <p className="max-w-lg text-gray-400 mb-8">
                Building a real estate portfolio requires a strategic approach.
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Estatein
                </span>{" "}
                empowers you to invest with confidence and clarity.
              </p>
            </div>

            {/* CTA with Background Image */}
            <div
              className="relative bg-cover bg-center p-8 rounded-xl border bg-[#191919] border-[#2a2a2a]"
              style={{
                backgroundImage: `url(${bgIMG.src || bgIMG})`,
              }}
            >
              <div className="relative z-10">
                <h2 className="text-xl mb-4">
                  Unlock Your Investment Potential
                </h2>
                <p className="text-gray-300 text-sm mb-6">
                  Explore our Property Management Service categories and let us
                  handle the complexities while you enjoy the benefits of
                  property ownership.
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#121212] text-white px-20 py-2 rounded-lg hover:bg-gray-200 hover:text-[#121212] transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2  bg-[#1a1a1a] p-3 rounded-xl border border-[#242424]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.Icon;

                return (
                  <div
                    key={service.title}
                    className=" p-6  bg-[#121212] rounded-xl border border-[#2a2a2a]
                               hover:border-[#3a3a3a] transition"
                  >
                    <MultiCircleIcon>
                      <Icon className="w-5 h-5" />
                    </MultiCircleIcon>

                    <h2 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvisory;
