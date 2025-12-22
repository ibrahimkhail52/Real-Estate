import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineBuildCircle } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

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

const PropertyManagementServices = () => {
  const services = [
    {
      title: "Tenant Harmony",
      description:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
      Icon: AiOutlineAppstoreAdd,
    },
    {
      title: "Maintenance Ease",
      description:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
      Icon: MdOutlineBuildCircle,
    },
    {
      title: "Financial Peace of Mind",
      description:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
      Icon: BsStars,
    },
    {
      title: "Legal Guardian",
      description:
        "Stay compliant with property laws and regulations effortlessly.",
      Icon: IoIosSunny,
    },
  ];

  const bottomService = services[3];
  const BottomIcon = bottomService.Icon;

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Effortless Property Management
          </h1>
          <p className="max-w-6xl text-gray-400">
            Owning a property should be a pleasure, not a hassle.
            <span className="text-purple-400 font-semibold"> Estatein's</span>,
            we Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you
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
              {/* 
        Container utilizes 'flex-col' on mobile screens (default) 
        and switches to 'md:flex-row' (side-by-side) on medium screens and up.
      */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                {/* Heading: Ensures it takes full width on mobile to avoid squeezing */}
                <h2 className="text-2xl font-bold text-white m-0 w-full md:w-auto">
                  Experience Effortless Property Management
                </h2>

                {/* 
          Button: The 'self-start' utility ensures the button aligns correctly 
          under the heading on mobile, and 'md:self-center' re-aligns it when side-by-side.
        */}
                <button className="bg-[#141414] text-white py-3 px-6 rounded-lg hover:bg-gray-100 transition w-fit whitespace-nowrap self-start md:self-center">
                  Learn More
                </button>
              </div>

              {/* Paragraph has max-w-3xl for good readability on large screens */}
              <p className="text-purple-100 text-sm max-w-3xl">
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementServices;
