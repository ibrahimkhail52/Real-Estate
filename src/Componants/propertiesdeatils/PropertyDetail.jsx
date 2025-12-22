import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { propertiesData } from "./propertiesData";

import PropertyListing from "./PropertyListing";
import PricingDetails from "./PricingDetails";
import InquiryForm from "./InquiryForm";
import PropertyDescription from "./PropertyDescription";
const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const propertyIndex = propertiesData.findIndex(
    (item) => item.id === Number(id)
  );
  const property = propertiesData[propertyIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (property) {
      document.title = `${property.title} | Real Estate`;
    }
  }, [property]);
  if (propertyIndex === -1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <p className="mb-6">Property not found</p>
        <button
          onClick={() => navigate("/properties")}
          className="bg-[#703BF7] px-6 py-3 rounded-lg"
        >
          Back to Properties
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-16">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-sm">
        <Link to="/" className="hover:text-white">
          Home
        </Link>{" "}
        /
        <Link to="/properties" className="hover:text-white mx-1">
          Properties
        </Link>{" "}
        /<span className="text-white">{property.title}</span>
      </div>
      <PropertyListing property={property} />
      <PropertyDescription property={property} />
      <InquiryForm property={property} />
      <PricingDetails property={property} />
    </div>
  );
};
export default PropertyDetail;