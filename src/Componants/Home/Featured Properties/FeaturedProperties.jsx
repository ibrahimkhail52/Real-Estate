import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { propertiesData } from "../../propertiesdeatils/propertiesData";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const totalCards = propertiesData.length;

  // Number of cards visible per screen size
  const getCardsVisible = () => {
    if (window.innerWidth >= 1024) return 3; 
    if (window.innerWidth >= 640) return 2; 
    return 1;                                
  };

  const [cardsVisible, setCardsVisible] = useState(getCardsVisible());

  // Update cardsVisible on window resize
  React.useEffect(() => {
    const handleResize = () => setCardsVisible(getCardsVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = totalCards - cardsVisible;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const cardWidthPercent = 100 / cardsVisible;

  return (
    <section className=" py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Properties</h2>
            <p className="text-gray-400 max-w-xl">
              Discover handpicked properties selected for quality and value.
            </p>
          </div>

          <button
            onClick={() => navigate("/properties")}
            className="border border-[#262626] px-5 py-3 rounded-lg hover:bg-[#262626] transition w-fit"
          >
            View All Properties
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidthPercent}%)` }}
          >
            {propertiesData.map((property) => (
              <div
                key={property.id}
                className={`flex-shrink-0 w-[${cardWidthPercent}%] px-2`}
                style={{ width: `${cardWidthPercent}%` }}
              >
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <span className="text-gray-400 text-sm">
            {index + 1} / {totalCards}
          </span>
          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="border border-[#262626] p-3 rounded-full hover:bg-[#262626] disabled:opacity-40"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="border border-[#262626] p-3 rounded-full hover:bg-[#262626] disabled:opacity-40"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
