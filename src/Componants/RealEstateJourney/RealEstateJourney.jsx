import React from "react";
import backgroundImageURI from "../../assets/RealEstateJourney/GroupImg.svg";
import { useNavigate } from "react-router-dom";

const RealEstateJourney = () => {
    const navigate = useNavigate();
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Text content container */}
        <div className="md:max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your Real Estate Journey Today
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 md:mt-0 flex-shrink-0">
          <button
            onClick={() => navigate("/properties")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-lg shadow-lg shadow-purple-600/50 transition duration-300 w-full md:w-auto"
          >
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateJourney;
