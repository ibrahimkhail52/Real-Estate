import React from "react";
// These are the images you imported that are now used in the component
import man1 from "../../../assets/About/EstateinTeam/man-1.png";
import woman1 from "../../../assets/About/EstateinTeam/woman-1.png";
import man2 from "../../../assets/About/EstateinTeam/man-2.png";
import woman2 from "../../../assets/About/EstateinTeam/woman-2.png";

// import { Twitter } from "lucide-react";
import { IoIosSend } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const EstateinTeam = () => {
  const teamMembers = [
    { name: "Max Mitchell", title: "Founder", imageSrc: man1 },
    {
      name: "Sarah Johnson",
      title: "Chief Real Estate Officer",
      imageSrc: woman1,
    },
    {
      name: "David Brown",
      title: "Head of Property Management",
      imageSrc: man2,
    },
    { name: "Michael Turner", title: "Legal Counsel", imageSrc: woman2 },
  ];

  return (
    <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet the Estatein Team</h1>
          <p className="max-w-3xl text-gray-400">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-lg shadow-lg border border-gray-800 overflow-hidden"
            >
              {/* Image Container with Twitter Icon */}
              <div className="relative p-4 overflow-hidden">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />

                <a
                  href="https://x.com/ibrahimkhail52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-24 bg-[#703BF7] px-6 py-3 rounded-full hover:bg-purple-700 transition duration-200 flex items-center justify-center"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Text Content (Centered) */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                <p className="text-gray-400 mb-6">{member.title}</p>

                {/* Say Hello Button */}
                <button className="flex items-center justify-between w-[15rem] bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition duration-200 mx-auto">
                  <span className="flex items-center">
                    <span>Say Hello</span>
                    <span className="ml-2 text-lg">👋</span>
                  </span>

                  <div className="w-12 h-12 bg-[#703BF7] rounded-full flex items-center justify-center">
                    <IoIosSend className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateinTeam;
