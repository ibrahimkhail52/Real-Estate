import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
const PropertyDescription = ({ property }) => {
  return (
    <div className="p-8  min-h-screen text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Column: Description + Stats */}
        <div className="flex flex-col border border-[#262626] gap-8">
          <div className=" p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Description
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#262626] gap-4 p-6 shadow-lg">
            <div>
              <p className="text-gray-500 flex items-center mb-1">
                🏠 Bedrooms
              </p>
              <p className="text-2xl font-bold text-white">{property.beds}</p>
            </div>
            {/* The borders and padding will need adjustment when stacked vertically */}
            <div className="md:border-l md:pl-4">
              <p className="text-gray-500 flex items-center mb-1">
                🛁 Bathrooms
              </p>
              <p className="text-2xl font-bold text-white">{property.baths}</p>
            </div>
            <div className="md:border-l md:pl-4">
              <p className="text-gray-500 flex items-center mb-1">📐 Area</p>
              <p className="text-lg font-bold text-white">{property.area}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Features */}
        <div className=" p-6 rounded-md border border-[#262626] shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-white">
            Key Features and Amenities
          </h2>
          <div className="space-y-4">
            {property.features.map((feature, index) => (
              <div
                key={index}
                className="flex border-l-2 border-[#5739A4] items-center p-4 rounded-md shadow-md bg-gradient-to-r from-[#171717] to-black"
              >
                <FaBoltLightning className="mr-3" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
