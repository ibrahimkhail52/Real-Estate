import React from "react";
import employees1 from "../../../assets/Contact/ContactGallery/employees-1.svg";
import employees2 from "../../../assets/Contact/ContactGallery/employees-2.svg";
import employees3 from "../../../assets/Contact/ContactGallery/employees-3.svg";
import employees4 from "../../../assets/Contact/ContactGallery/employees-4.svg";
import office from "../../../assets/Contact/ContactGallery/office.svg";
import meeting from "../../../assets/Contact/ContactGallery/meeting.svg";
import gallerybgimg from "../../../assets/Contact/ContactGallery/Gallery-bgimg.svg";

const ContactGallery = () => {
  // A shared component for consistent image styling and wrapping
  const ImageWrapper = ({ src, alt }) => (
    // Both office and meeting use the h-48 class for consistent height
    <div className="rounded-xl overflow-hidden shadow-lg h-48">
      {/* Images are constrained to h-48 height */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    // Section with background image applied as a style property
    <section
      className=" bg-[#191919] text-white p-4  md:p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${gallerybgimg})` }}
    >
      <div className="max-w-7xl mx-auto  p-4 rounded-xl">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper src={office} alt="Office space" />
            <ImageWrapper src={employees1} alt="Team member 1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <ImageWrapper src={meeting} alt="Meeting room" />
            </div>
            <ImageWrapper src={employees2} alt="Team member 2" />
            <ImageWrapper src={employees3} alt="Team member 3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className=" p-8 rounded-xl h-48 flex flex-col justify-center">
              <h1 className="text-2xl font-semibold mb-2">
                Explore Estatein's World
              </h1>
              <p className="text-gray-400 text-sm">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
            <ImageWrapper src={employees4} alt="Team member 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGallery;
