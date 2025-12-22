import React, { useState } from "react";
const PropertyListing = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? property.gallery.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === property.gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="p-8 bg-[#191919] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6 text-white">
          <div>
            <h1 className="text-2xl font-bold">{property.title}</h1>
            <p className="text-gray-400">📍 {property.location}</p>
          </div>
          <p className="text-3xl font-semibold">{property.price}</p>
        </header>
        <div className="flex flex-col gap-4">
          <div className="flex bg-[#141414] rounded-lg p-4 gap-4 overflow-x-auto pb-2">
            {property.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-40 h-24 object-cover rounded-lg cursor-pointer transition duration-300 flex-shrink-0 ${
                  currentIndex === index
                    ? "border-4 border-[#522BB4] shadow-xl"
                    : "border-2 opacity-35 border-transparent hover:border-blue-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <div className="relative w-full">
            <img
              src={property.gallery[currentIndex]}
              alt="Main property view"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="max-w-72 mx-auto mt-6">
          <div className="flex justify-center items-center px-4 py-3 bg-[#141414] rounded-full shadow-inner">
            <button
              onClick={goToPrevious}
              className="p-3 mr-2 bg-[#141414] text-white rounded-full hover:bg-[#191919] transition w-10 h-10 flex items-center justify-center border border-[#262626]"
            >
              ←
            </button>
            <div className="flex space-x-3 items-center">
              {property.gallery.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-6 rounded-full cursor-pointer transition-colors ${
                    currentIndex === index
                      ? "bg-[#703BF7]"
                      : "bg-[#414141] hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-3 ml-2 bg-[#141414] text-white rounded-full hover:bg-[#191919] transition w-10 h-10 flex items-center justify-center border border-[#262626]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyListing;