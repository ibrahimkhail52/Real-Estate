import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const RealEstateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredLocation: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
    preferredEmail: "",
    preferredPhone: "",
    contactSelection: {
      email: false,
      phone: false,
    },
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        contactSelection: { ...prev.contactSelection, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

   const handleSubmit = (e) => {
     e.preventDefault();

     const templateParams = {
       first_name: formData.firstName,
       last_name: formData.lastName,
       email: formData.email,
       phone: formData.phone,
       location: formData.preferredLocation,
       property_type: formData.propertyType,
       bedrooms: formData.bedrooms,
       bathrooms: formData.bathrooms,
       budget: formData.budget,
       preferred_email: formData.preferredEmail,
       preferred_phone: formData.preferredPhone,
       message: formData.message,
     };

     emailjs
       .send(
         "service_jl3rlii",
         "template_gdm3p9n",
         templateParams,
         "tOBbCpkMZKUFtZ-cW"
       )
       .then(
         () => {
           alert("Message sent successfully ✅");

           setFormData({
             firstName: "",
             lastName: "",
             email: "",
             phone: "",
             preferredLocation: "",
             propertyType: "",
             bathrooms: "",
             bedrooms: "",
             budget: "",
             preferredEmail: "",
             preferredPhone: "",
             contactSelection: { email: false, phone: false },
             message: "",
           });
         },
         (error) => {
           console.error(error);
           alert("Failed to send message ❌");
         }
       );
  };
  
const inputStyle =
  "w-full p-3 bg-[#191919] border border-gray-800 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 text-sm transition-all";
const labelStyle =
  "block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider";
const disabledInputStyle =
  "w-full p-3 bg-[#191919] border border-gray-900 rounded-md text-gray-600 cursor-not-allowed text-sm";


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-8  text-white"
    >
      <h1 className="text-3xl font-bold mb-2">Let's Make it Happen</h1>
      <p className="mb-10 text-gray-500 border-b border-gray-800 pb-6">
        Ready to take the first step toward your dream property? Fill out the
        form below.
      </p>

      {/* Row 1: Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <label className={labelStyle}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className={inputStyle}
          />
        </div>
      </div>

      {/* Row 2: Property Preferences & Budget Alignment */}
      {/* Row 2: 4 Columns per row layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Column 1 */}
        <div>
          <label className={labelStyle}>Preferred Location</label>
          <input
            type="text"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            placeholder="City"
            className={inputStyle}
          />
        </div>

        {/* Column 2 */}
        <div>
          <label className={labelStyle}>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>
        </div>

        {/* Column 3 */}
        <div>
          <label className={labelStyle}>No. of Bedrooms</label>
          <select
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Select Qty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>

        {/* Column 4 */}
        <div>
          <label className={labelStyle}>No. of Bathrooms</label>
          <select
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Select Qty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>
      </div>

      {/* Budget aligned with Property Type */}
      {/* Combined Row: Budget (2 cols) + Phone (1 col) + Email (1 col) = 4 Columns total */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 items-end">
        {/* Budget Section - Spans 2 columns */}
        <div className="md:col-span-2">
          <label className={labelStyle}>Budget</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter Budget Range (e.g. $500k - $1M)"
            className={inputStyle}
          />
        </div>

        {/* Phone Selection - Spans 1 column */}
        <div className="flex items-start space-x-3 pb-1">
          <input
            type="checkbox"
            name="phone"
            checked={formData.contactSelection.phone}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-purple-600 bg-gray-900 border-gray-700 rounded focus:ring-purple-500"
          />
          <div className="flex-1">
            <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-tighter">
              Contact via Phone
            </label>
            <input
              type="tel"
              name="preferredPhone"
              disabled={!formData.contactSelection.phone}
              value={formData.preferredPhone}
              onChange={handleChange}
              placeholder="Phone #"
              className={
                formData.contactSelection.phone
                  ? inputStyle
                  : disabledInputStyle
              }
            />
          </div>
        </div>

        {/* Email Selection - Spans 1 column */}
        <div className="flex items-start space-x-3 pb-1">
          <input
            type="checkbox"
            name="email"
            checked={formData.contactSelection.email}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-purple-600 bg-gray-900 border-gray-700 rounded focus:ring-purple-500"
          />
          <div className="flex-1">
            <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-tighter">
              Contact via Email
            </label>
            <input
              type="email"
              name="preferredEmail"
              disabled={!formData.contactSelection.email}
              value={formData.preferredEmail}
              onChange={handleChange}
              placeholder="Email Address"
              className={
                formData.contactSelection.email
                  ? inputStyle
                  : disabledInputStyle
              }
            />
          </div>
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="mb-8">
        <label className={labelStyle}>Message</label>
        <textarea
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here..."
          className={`${inputStyle} resize-none`}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="w-full md:w-auto px-12 py-4 bg-purple-600 hover:bg-purple-700 rounded-md font-bold text-white transition duration-200 uppercase tracking-widest text-xs"
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
};

export default RealEstateForm;
