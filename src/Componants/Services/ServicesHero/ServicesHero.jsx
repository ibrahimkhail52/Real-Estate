import React from 'react';

const ServicesHero = () => {
  return (
    // Outer div uses a dark gradient background
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-4">
            Elevate Your Real Estate Experience
          </h1>

          {/* Subtitle/Paragraph */}
          <p className="max-w-6xl text-gray-400">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
