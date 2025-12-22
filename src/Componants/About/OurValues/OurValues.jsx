import React from "react";
import { FaStar, FaGraduationCap, FaPeopleGroup } from "react-icons/fa6";

const valuesData = [
  {
    icon: FaStar,
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    icon: FaGraduationCap,
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    icon: FaPeopleGroup,
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    icon: FaStar,
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 relative z-10">
              Our Values
            </h2>
            <p className="text-gray-400">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-2/3 p-3 rounded-2xl bg-[#191919] relative">
            <div className="rounded-xl bg-[#141414] p-4 relative">
              {/* Horizontal line aligned with title */}

              <div className="grid grid-cols-1 md:grid-cols-2 relative">
                {valuesData.map((value, index) => (
                  <div key={value.title} className="relative p-8">
                    {/* VERTICAL LINE — BROKEN */}
                    {index % 2 === 0 && (
                      <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-[#262626]"></div>
                    )}

                    {/* HORIZONTAL LINE — UNCHANGED */}
                    {index < 2 && (
                      <div className="absolute left-0 right-0 bottom-0 h-px bg-[#262626]"></div>
                    )}

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-600">
                        <value.icon className="text-[#8F72D7] text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                    </div>

                    <p className="text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
