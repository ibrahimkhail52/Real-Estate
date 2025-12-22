import React from "react";
import FAQ from "../Home/FAQSection/FAQ";

// ================= Helper Components =================
const SectionHeader = ({ title, children }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    {children}
  </div>
);

const PricingRow = ({ label, value, description, learnMore }) => (
  <div className="flex justify-between items-start py-4 border-b border-gray-700 last:border-b-0">
    <div>
      <p className="text-white font-medium">{label}</p>
      {description && (
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      )}
    </div>
    <div className="text-right">
      <p className="text-white font-semibold">{value}</p>
      {learnMore && (
        <button className="text-blue-400 text-sm mt-1 hover:underline">
          Learn More
        </button>
      )}
    </div>
  </div>
);

// ================= Main Component =================
const PricingDetails = ({ property }) => {
  const additionalFees = [
    {
      label: "Property Transfer Tax",
      value: property.tax,
      description: "Based on the sale price and local regulations",
    },
    {
      label: "Legal Fees",
      value: "$3,000",
      description:
        "Approximate cost for legal services, including title transfer",
    },
    {
      label: "Home Inspection",
      value: "$500",
      description: "Recommended for due diligence",
    },
    {
      label: "Property Insurance",
      value: "$1,200",
      description: "Annual cost for comprehensive property insurance",
    },
  ];

  const monthlyCosts = [
    {
      label: "Property Taxes",
      value: property.tax,
      description:
        "Approximate monthly property tax based on the sale price and local rates",
    },
    {
      label: "Homeowners' Association Fee",
      value: "$300",
      description: "Monthly fee for common area maintenance and security",
    },
  ];

  const totalInitialCosts = [
    {
      label: "Listing Price",
      value: property.price,
      description: "Total agreed upon sale price",
    },
    {
      label: "Additional Fees",
      value: "$29,700",
      description: "Property transfer tax, legal fees, inspection, insurance",
    },
    {
      label: "Down Payment",
      value: "$250,000",
      description: "Initial cash payment required by lender",
    },
    {
      label: "Mortgage Amount",
      value: "$1,000,000",
      description: "Total amount financed through mortgage loan",
    },
  ];

  const monthlyExpenses = [
    {
      label: "Property Taxes",
      value: property.tax,
      description: "Estimated monthly property taxes",
    },
    {
      label: "Homeowners' Association Fee",
      value: "$300",
      description: "Monthly HOA fee",
    },
    {
      label: "Mortgage Payment",
      value: "Varies",
      description: "Based on terms and interest rate; consult your lender",
    },
    {
      label: "Property Insurance",
      value: "$100",
      description: "Approximate monthly cost for insurance",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 p-6 bg-black">
          <h1 className="text-4xl font-bold text-white mb-4">
            {property.title} Pricing Details
          </h1>
          <p className="text-gray-400 max-w-2xl">{property.description}</p>
        </header>

        {/* Note */}
        <div className="bg-[#191919] p-4 rounded-t-lg flex items-center gap-4">
          <span className="text-blue-400 font-semibold">Note</span>
          <p className="text-gray-400 text-sm">
            The figures below are estimates and may vary depending on the
            property, location, and circumstances.
          </p>
        </div>

        {/* Pricing Content */}
        <div className=" shadow-xl rounded-b-lg p-6">
          {/* Listing Price & Status */}
          <div className="mb-8">
            <p className="text-gray-400 mb-1">Listing Price</p>
            <p className="text-5xl font-extrabold">
              {property.price}
            </p>
            <p className="text-gray-400 mt-2">
              Status:{" "}
              <span className="text-white capitalize">{property.status}</span>
            </p>
          </div>

          {/* Sections */}
          <div className="mb-10">
            <SectionHeader title="Additional Fees"></SectionHeader>
            <div className="space-y-4">
              {additionalFees.map((fee, idx) => (
                <PricingRow key={idx} {...fee} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <SectionHeader title="Monthly Costs"></SectionHeader>
            <div className="space-y-4">
              {monthlyCosts.map((cost, idx) => (
                <PricingRow key={idx} {...cost} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <SectionHeader title="Total Initial Costs"></SectionHeader>
            <div className="space-y-4">
              {totalInitialCosts.map((cost, idx) => (
                <PricingRow key={idx} {...cost} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Monthly Expenses"></SectionHeader>
            <div className="space-y-4">
              {monthlyExpenses.map((expense, idx) => (
                <PricingRow key={idx} {...expense} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ/>
    </div>
  );
};
export default PricingDetails;
