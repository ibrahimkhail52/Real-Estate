import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { faqData } from "./faqData";

// FAQ Card
const FAQCard = ({ faq }) => (
  <div className="bg-[#141414] p-6 md:p-8 rounded-2xl border border-[#222222] flex flex-col h-full hover:border-[#333333] transition-colors duration-200">
    <h3 className="text-xl font-semibold text-white mb-4 leading-relaxed">
      {faq.question}
    </h3>
    <p className="text-gray-400 text-sm md:text-md mb-8 flex-grow leading-normal">
      {faq.answer}
    </p>
    <button className="self-start text-white bg-[#141414] hover:bg-[#222222] py-3 px-6 rounded-lg border border-gray-700 hover:border-gray-500 transition duration-200 text-sm">
      Read More
    </button>
  </div>
);

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1); // mobile
      else if (window.innerWidth < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(3); // desktop
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = faqData.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section id="faq" className="bg-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 md:mb-16">
          <div className="mb-6 lg:mb-0 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Find answers to common questions about Estatein's services.
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-transparent hover:bg-[#222222] text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 hover:border-gray-500 transition duration-200"
          >
            {showAll ? "Show Less" : "View All FAQ's"}
          </button>
        </div>

        {/* VIEW ALL MODE */}
        {showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {faqData.map((faq, index) => (
              <FAQCard key={index} faq={faq} />
            ))}
          </div>
        ) : (
          <>
            {/* SLIDER */}
            <div className="relative overflow-hidden">
              <Motion.div
                animate={{
                  x: `-${currentIndex * (100 / itemsPerPage)}%`,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="flex gap-6 md:gap-8"
              >
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`min-w-full ${
                      itemsPerPage === 2
                        ? "sm:min-w-[50%]"
                        : itemsPerPage === 3
                        ? "lg:min-w-[33.333%]"
                        : ""
                    }`}
                  >
                    <FAQCard faq={faq} />
                  </div>
                ))}
              </Motion.div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 sm:pt-8 mt-12 sm:mt-16 border-t border-gray-800">
              <div className="text-gray-500 text-base sm:text-lg">
                <span className="text-white font-semibold">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>{" "}
                of {String(faqData.length).padStart(2, "0")}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#141414] text-white hover:bg-[#222222] disabled:opacity-30 transition duration-200 border border-[#222222]"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#141414] text-white hover:bg-[#222222] transition duration-200 border border-[#222222]"
                >
                  ›
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FAQ;
