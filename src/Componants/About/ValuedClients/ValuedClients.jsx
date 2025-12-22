import React, { useState } from "react";

const ValuedClients = () => {
  const allClients = [
    {
      name: "ABC Corporation",
      since: "Since 2019",
      domain: "88 Domain",
      category: "Commercial Real Estate",
      categoryDetail: "Luxury Home Development",
      quote:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable.",
    },
    {
      name: "GreenTech Enterprises",
      since: "Since 2018",
      domain: "88 Domain",
      category: "Commercial Real Estate",
      categoryDetail: "Retail Space",
      quote:
        "Estatein's ability to identify prime retail locations helped us expand our brand presence.",
    },
    {
      name: "BlueSky Innovations",
      since: "Since 2020",
      domain: "102 Domain",
      category: "Residential Real Estate",
      categoryDetail: "Luxury Apartments",
      quote:
        "Finding the perfect apartment felt seamless with Estatein's help. The team was responsive and found exactly.",
    },
    {
      name: "Retail Giants Co.",
      since: "Since 2017",
      domain: "55 Domain",
      category: "Commercial Real Estate",
      categoryDetail: "Shopping Centers",
      quote:
        "Estatein provided excellent market analysis, helping us secure a key location that boosted our revenue significantly.",
    },
    {
      name: "Tech Solutions Ltd.",
      since: "Since 2021",
      domain: "404 Domain",
      category: "Commercial Real Estate",
      categoryDetail: "Office Space",
      quote:
        "The process was smooth and transparent. We quickly found a new HQ that perfectly fits our growing team's needs.",
    },
    {
      name: "Global Logistics Inc.",
      since: "Since 2016",
      domain: "99 Domain",
      category: "Industrial Real Estate",
      categoryDetail: "Warehousing",
      quote:
        "Their expertise in industrial properties helped us optimize our supply chain logistics with a new, strategically located warehouse.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const totalItems = allClients.length;
  const totalSlidesUI = 3;
  const currentSlideUI = Math.floor(startIndex / itemsPerPage) + 1;

  const currentClients = allClients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (startIndex + itemsPerPage < totalItems) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Valued Clients</h1>
          <p className="max-w-3xl text-gray-400">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {currentClients.map((client) => (
            <div key={client.name} className="p-[7px] rounded-xl bg-[#191919]">
              <div className="bg-[#141414] p-8 rounded-xl h-full">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{client.since}</p>
                    <h2 className="text-2xl font-bold">{client.name}</h2>
                  </div>
                  <button className="text-sm font-semibold bg-[#191919] text-white border border-gray-800 px-4 py-2 rounded-lg hover:bg-[#] transition duration-200">
                    Visit Website
                  </button>
                </div>

                {/* Domain & Category Section with vertical line */}
                <div className="grid grid-cols-2 gap-4 mb-6 relative">
                  <div className=" p-4 ">
                    <p className="text-gray-400 text-sm">{client.domain}</p>
                    <p className="font-semibold">{client.category}</p>
                  </div>
                  <div className=" p-4">
                    <p className="text-gray-400 text-sm">4 Category</p>
                    <p className="font-semibold">{client.categoryDetail}</p>
                  </div>
                  {/* Vertical line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-600 transform -translate-x-1 rounded"></div>
                </div>

                <div className="border border-gray-800 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm mb-3 font-semibold">
                    What They Said 🤗
                  </p>
                  <p className="italic">"{client.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-400">
            {String(currentSlideUI).padStart(2, "0")} of{" "}
            {String(totalSlidesUI).padStart(2, "0")}
          </p>
          <div className="flex space-x-4">
            {/* Left arrow button */}
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-3  rounded-full transition duration-200 ${
                startIndex === 0
                  ? "bg-[#414040] text-gray-500 cursor-not-allowed"
                  : "bg-[#191919] hover:bg-[#141414] text-white"
              }`}
            >
              &larr;
            </button>

            {/* Right arrow button */}
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= totalItems}
              className={`p-3 rounded-full transition duration-200 ${
                startIndex + itemsPerPage >= totalItems
                  ? "bg-[#414040] text-gray-500 cursor-not-allowed"
                  : "bg-[#191919] hover:bg-[#141414] text-white"
              }`}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuedClients;
