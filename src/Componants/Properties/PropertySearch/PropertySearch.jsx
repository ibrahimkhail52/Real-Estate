import React, { useState, useEffect } from "react";
import { propertiesData } from "../../propertiesdeatils/propertiesData";
import PropertyCard from "../../Home/Featured Properties/PropertyCard";

// Dropdown Filter Item (remains the same)
const DropdownFilter = ({ label, options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex-1 min-w-[150px]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#262626] text-white bg-[#1A1A1A] w-full text-sm"
      >
        {selected || label}
        <span
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>
          <ul className="absolute mt-2 w-full bg-[#1A1A1A] border border-[#262626] rounded-lg max-h-60 overflow-y-auto z-50 shadow-2xl">
            <li
              className="px-4 py-2 hover:bg-[#262626] cursor-pointer text-gray-400"
              onClick={() => {
                onSelect("");
                setOpen(false);
              }}
            >
              Any
            </li>
            {options.map((opt) => (
              <li
                key={opt}
                className="px-4 py-2 hover:bg-[#262626] cursor-pointer text-white"
                onClick={() => {
                  onSelect(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const PropertySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Slider States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState(3);

  // Handle Responsive Viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsInView(3);
      else if (window.innerWidth >= 640) setCardsInView(2);
      else setCardsInView(1);
      setCurrentIndex(0); // Reset position on resize
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const uniqueLocations = [...new Set(propertiesData.map((p) => p.location))]
    .filter(Boolean)
    .sort();
  const uniqueTypes = [...new Set(propertiesData.map((p) => p.type))];
  const uniqueStatus = [...new Set(propertiesData.map((p) => p.status))];
  const priceOptions = ["< $10000", "$10000 - $20000", "$20000 - $50000", "> $50000"];

  const filteredProperties = propertiesData.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = location ? p.location === location : true;
    const matchesType = type ? p.type === type : true;
    const matchesStatus = status ? p.status === status : true;
    const priceNum = parseInt(p.price.replace(/\D/g, ""));
    const matchesPrice =
      !priceRange ||
      (priceRange === "< $10000" && priceNum < 1000) ||
      (priceRange === "$10000 - $2000" &&
        priceNum >= 1000 &&
        priceNum <= 2000) ||
      (priceRange === "$20000 - $50000" && priceNum > 2000 && priceNum <= 5000) ||
      (priceRange === "> $50000" && priceNum > 5000);
    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesStatus &&
      matchesPrice
    );
  });

  const maxIndex = Math.max(0, filteredProperties.length - cardsInView);
  const next = () =>
    currentIndex < maxIndex && setCurrentIndex((prev) => prev + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex((prev) => prev - 1);

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-10">
          Find Your Dream Property
        </h1>

        {/* Search & Filters Container */}
     {/* Search & Filters Container */}
<div className="bg-[#141414] p-4 sm:p-6 lg:p-8 rounded-2xl border border-[#262626] mb-12 shadow-2xl mx-auto w-full">
  <div className="flex flex-col gap-4 sm:gap-6">
    
    {/* 1. Search Bar Area */}
    <div className="relative flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search for properties..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentIndex(0);
          }}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#0F0F0F] border border-[#262626] text-white placeholder-gray-500 focus:outline-none focus:border-[#703BF7] focus:ring-1 focus:ring-[#703BF7] transition-all text-base sm:text-lg"
        />
        {/* Search Icon - Hidden on very small screens to save space if needed, or kept for style */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hidden sm:block">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
      
      {/* Mobile/Tablet Search Button */}
      <button className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 bg-[#703BF7] text-white px-6 py-3 sm:py-2.5 rounded-lg font-medium hover:bg-[#5e32d1] transition-all flex items-center justify-center gap-2">
        <span className="sm:hidden lg:inline">Find Property</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>

    {/* 2. Filter Menu Grid */}
    {/* 
        grid-cols-1: Mobile (stacks vertically)
        sm:grid-cols-2: Tablet (two per row)
        lg:grid-cols-4: Desktop (four per row)
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <div className="w-full">
        <DropdownFilter 
          label="Location" 
          options={uniqueLocations} 
          selected={location} 
          onSelect={(v) => { setLocation(v); setCurrentIndex(0); }} 
        />
      </div>
      <div className="w-full">
        <DropdownFilter 
          label="Property Type" 
          options={uniqueTypes} 
          selected={type} 
          onSelect={(v) => { setType(v); setCurrentIndex(0); }} 
        />
      </div>
      <div className="w-full">
        <DropdownFilter 
          label="Status" 
          options={uniqueStatus} 
          selected={status} 
          onSelect={(v) => { setStatus(v); setCurrentIndex(0); }} 
        />
      </div>
      <div className="w-full">
        <DropdownFilter 
          label="Pricing Range" 
          options={priceOptions} 
          selected={priceRange} 
          onSelect={(v) => { setPriceRange(v); setCurrentIndex(0); }} 
        />
      </div>
    </div>
  </div>
</div>


        {/* Slider Window */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsInView)
                }%)`,
              }}
            >
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsInView}%` }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </div>

          {filteredProperties.length === 0 && (
            <p className="text-gray-500 text-center py-20">
              No properties match your criteria.
            </p>
          )}

          {/* Navigation Footer */}
          {filteredProperties.length > 0 && (
            <div className="mt-12 flex items-center justify-between border-t border-[#262626] pt-8">
              <div className="text-gray-400">
                <span className="text-white font-medium">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-1">of</span>
                {String(filteredProperties.length).padStart(2, "0")}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="p-3 rounded-full border border-[#262626] text-white hover:bg-[#703BF7] hover:border-[#703BF7] disabled:opacity-20 disabled:hover:bg-transparent transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={currentIndex >= maxIndex}
                  className="p-3 rounded-full border border-[#262626] text-white hover:bg-[#703BF7] hover:border-[#703BF7] disabled:opacity-20 disabled:hover:bg-transparent transition-all"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
