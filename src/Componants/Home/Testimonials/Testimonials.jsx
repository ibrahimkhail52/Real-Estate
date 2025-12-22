import React, { useState } from "react";
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
  const itemsPerPage = 3;
  const maxIndex = testimonialsData.length - itemsPerPage;
  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };
  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section id="testimonials" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h1>
            <p className="text-gray-400 text-lg">
              Read heartfelt testimonials from our valued clients.
            </p>
          </div>
          <button className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            View All
          </button>
        </div>
        <div className="relative">
          <Motion.div
            className="flex gap-8"
            animate={{
              x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${
                currentIndex * (32 / itemsPerPage)
              }px)`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonialsData.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[calc(33.333%-22px)] bg-[#141414] p-8 rounded-2xl border border-gray-800 flex flex-col h-full"
              >
                <StarRating rating={t.rating} />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t.title}
                </h3>
                <p className="text-gray-400 mb-8 flex-grow">"{t.quote}"</p>
                <div className="pt-6 border-t border-gray-800 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Motion.div>
        </div>
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <div className="text-gray-500">
            <span className="text-white font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            of {String(testimonialsData.length).padStart(2, "0")}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-14 h-14 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center disabled:opacity-20"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-14 h-14 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center disabled:opacity-20"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
