import React from "react";

const Achievements = () => {
  return (
    <div className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
          <p className="max-w-3xl text-gray-400">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-[7px] rounded-xl bg-[#191919]">
            <div className="bg-[#141414] p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-4">
                3+ Years of Excellence
              </h2>
              <p className="text-gray-400">
                With over 3 years in the industry, we've amassed a wealth of
                knowledge and experience, becoming a go-to resource for all
                things real estate.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-[7px] rounded-xl bg-[#191919]">
            <div className="bg-[#141414] p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-4">Happy Clients</h2>
              <p className="text-gray-400">
                Our greatest achievement is the satisfaction of our clients.
                Their success stories fuel our passion for what we do.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-[7px] rounded-xl bg-[#191919]">
            <div className="bg-[#141414] p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-4">Industry Recognition</h2>
              <p className="text-gray-400">
                We've earned the respect of our peers and industry leaders, with
                accolades and awards that reflect our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
