import React from "react";

const EstateinExperience = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      description:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      step: "Step 03",
      title: "Personalized Guidance",
      description:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      step: "Step 04",
      title: "See It for Yourself",
      description:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      step: "Step 05",
      title: "Making Informed Decisions",
      description:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      step: "Step 06",
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Navigating the Estatein Experience
          </h1>
          <p className="max-w-3xl text-gray-400">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-6 pt-10 border border-gray-700 overflow-visible"
            >
              {/* STEP LABEL */}
              <span className="absolute -top-7 -left-[0.5px] px-3 py-1 text-sm font-semibold text-white border-l-2 border-[#6638DA] z-10">
                {item.step}
              </span>

              {/* LEFT BORDER WITH GRADIENT + INNER SHADOW */}
              <div className="absolute top-0 left-0 h-full w-[1px]">
                {/* Shadow behind gradient */}
                <div className="absolute inset-0 bg-purple-500/90 blur-3xl"></div>
                {/* Gradient on top */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6638DA] to-gray-700"></div>
              </div>

              {/* TOP BORDER WITH GRADIENT + INNER SHADOW */}
              <div className="absolute top-0 left-0 h-[1px] w-full">
                {/* Shadow behind gradient */}
                <div className="absolute inset-0 bg-purple-500/90 blur-3xlxl"></div>
                {/* Gradient on top */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6638DA] to-gray-700"></div>
              </div>

              {/* Card Content */}
              <h2 className="text-xl font-bold mb-3 mt-4">{item.title}</h2>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateinExperience;
