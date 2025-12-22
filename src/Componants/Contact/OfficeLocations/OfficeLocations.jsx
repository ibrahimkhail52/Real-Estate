import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const officeData = [
  {
    id: 1,
    type: "Main Headquarters",
    category: "All", // HQ counts as 'All' category
    address: "123 Estatein Plaza, City Center, Metropolis",
    description:
      "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "info@estatein.com",
    phone: "+1 (123) 456-7890",
    location: "Metropolis",
  },
  {
    id: 2,
    type: "Regional Offices",
    category: "Regional",
    address: "456 Urban Avenue, Downtown District, Metropolis",
    description:
      "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: "info@restatein.com",
    phone: "+1 (123) 628-7890",
    location: "Metropolis",
  },
  {
    id: 3,
    type: "International Branch (Europe)",
    category: "International",
    address: "789 London Street, West End, London, UK",
    description:
      "Serving our clients across the globe, our London branch handles high-value international properties and investment opportunities within the European market. Our team here provides cross-border expertise.",
    email: "europe@estatein.com",
    phone: "+44 20 7946 0958",
    location: "London, UK",
  },
  {
    id: 4,
    type: "International Branch (Asia)",
    category: "International",
    address: "101 Marina Bay Financial Centre, Singapore",
    description:
      "The hub for our Asian operations, focusing on the rapidly growing markets in the East. This office connects investors with premier properties and real estate opportunities across the continent.",
    email: "asia@estatein.com",
    phone: "+65 6591 1234",
    location: "Singapore",
  },
  {
    id: 5,
    type: "Client Services Center",
    category: "Regional",
    address: "246 Suburb Way, Residential Zone, Metropolis",
    description:
      "Dedicated purely to client relations and support, this center ensures all our buyers and sellers receive prompt, excellent service throughout their journey with Estatein.",
    email: "support@estatein.com",
    phone: "+1 (123) 555-0101",
    location: "Metropolis",
  },
  {
    id: 6,
    type: "North American Regional HQ",
    category: "Regional",
    address: "321 Financial District, New York, NY, USA",
    description:
      "The base of operations for North America, managing extensive property listings and market analysis across the continent to meet diverse client needs.",
    email: "northamerica@estatein.com",
    phone: "+1 (212) 879-5432",
    location: "New York",
  },
];


const OfficeLocationsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOffices = officeData.filter((office) => {
    if (activeTab === "All") return true;
    return office.category === activeTab;
  });

  const tabs = ["All", "Regional", "International"];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            Discover Our Office Locations
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto md:mx-0 text-sm sm:text-base">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the
            Estatein office nearest to you.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center md:justify-start bg-[#191919] p-2 rounded-lg w-full md:w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-md font-medium transition duration-200 text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-[#141414] text-white border border-[#252525]"
                  : "bg-[#202020] border border-[#252525] text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className="bg-[#191919] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-500 mb-2 text-sm sm:text-base">
                  {office.type}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  {office.address}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                  {office.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex border border-[#252525] rounded-full p-2 sm:p-3 items-center text-xs sm:text-sm gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-gray-300 truncate">{office.email}</span>
                </div>

                <div className="flex border border-[#252525] rounded-full p-2 sm:p-3 items-center text-xs sm:text-sm gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-gray-300">{office.phone}</span>
                </div>

                <div className="flex border border-[#252525] rounded-full p-2 sm:p-3 items-center text-xs sm:text-sm gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-gray-300 truncate">
                    {office.location}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full sm:w-auto bg-[#703BF7] hover:bg-[#5021c9] text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-200">
                Get Direction
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsSection;

