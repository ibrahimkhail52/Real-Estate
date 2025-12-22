import React, { useState } from "react";

// ================= Helper Component =================
const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 bg-[#191919] border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
);

// ================= Main Component =================
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedProperty: "Seaside Serenity Villa, Malibu, California",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! Check console for data.");
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Side: Text Description */}
          <div className="p-8 text-white flex flex-col max-w-md">
            <h1 className="text-4xl mb-4">
              Inquire About Seaside Serenity Villa
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>

          {/* Right Side: The Form */}
          <div className="p-8 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Email"
                  name="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Selected Property */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Selected Property
                </label>
                <div className="w-full p-3 bg-[#191919] border border-gray-700 rounded-lg text-gray-400 flex justify-between items-center">
                  {formData.selectedProperty}
                  <span className="text-gray-500">📍</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message here"
                  className="w-full p-3 bg-[#191919] border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Checkbox and Submit */}
              <div className="flex items-center justify-between mt-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-blue-500 bg-gray-800 border-gray-600 rounded"
                    required
                  />
                  <span className="text-gray-400 text-sm">Privacy Policy</span>
                </label>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
