import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { testimonialsData } from "./testimonialsData";

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "text-yellow-500 fill-yellow-500"
            : "text-gray-600 fill-gray-600"
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // 🔹 Responsive items per page
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1); // Mobile
      else if (window.innerWidth < 1024) setItemsPerPage(2); // Tablet
      else setItemsPerPage(3); // Desktop
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = testimonialsData.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400">
              Read heartfelt testimonials from our valued clients.
            </p>
          </div>
          <button className="border border-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            View All
          </button>
        </div>

        {/* Slider */}
        <Motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * (100 / itemsPerPage)}%`,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 bg-[#141414] p-8 rounded-2xl border border-gray-800 flex flex-col"
            >
              <StarRating rating={t.rating} />
              <h3 className="text-xl font-semibold text-white mb-3">
                {t.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">"{t.quote}"</p>

              <div className="pt-4 border-t border-gray-800 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Motion.div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-800">
          <p className="text-gray-500">
            <span className="text-white font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(testimonialsData.length).padStart(2, "0")}
          </p>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 disabled:opacity-30"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
