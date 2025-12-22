import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const form = useRef();

  // Common styling for input fields and selects
  const inputStyle =
    "bg-[#1A1A1A] border border-[#333] text-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3";
  const labelStyle = "block mb-2 text-sm font-medium text-white";

  const sendEmail = (e) => {
    e.preventDefault();

    // Environment variables provided by user in previous prompt
    const serviceId = "service_jl3rlii";
    const templateId = "template_gdm3p9n";
    const publicKey = "tOBbCpkMZKUFtZ-cW";

    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS environment variables are missing.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
          setAgreed(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Something went wrong! Please try again.");
        }
      );
  };

  return (
    // Main container with original large padding and max-width
    <div className=" p-4 md:p-8 lg:p-12 text-white font-sans max-w-7xl mx-auto">
      {/* Header section (retains original position) */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-gray-400 max-w-3xl">
          We're excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you're a prospective client, partner, or simply curious about
          our services, we're here to answer your questions and provide the
          assistance you need.
        </p>
      </header>

      {/* 
        This div wraps the form fields and provides the border and background color 
        exactly as seen in the image.
      */}
      <div className=" p-6 md:p-16 border border-gray-700 rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          {/* Row 1: First Name, Last Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="first-name" className={labelStyle}>
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first_name"
                placeholder="Enter First Name"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className={labelStyle}>
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last_name"
                placeholder="Enter Last Name"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={labelStyle}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your Email"
                className={inputStyle}
                required
              />
            </div>
          </div>

          {/* Row 2: Phone, Inquiry Type, How Did You Hear About Us? */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="phone" className={labelStyle}>
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone_number"
                placeholder="Enter Phone Number"
                className={inputStyle}
              />
            </div>
            <div className="relative">
              <label htmlFor="inquiry-type" className={labelStyle}>
                Inquiry Type
              </label>
              <select
                id="inquiry-type"
                name="inquiry_type"
                className={`${inputStyle} appearance-none cursor-pointer`}
                defaultValue=""
              >
                <option value="">Select Inquiry Type</option>
                <option value="general">General Question</option>
                <option value="technical_support">Technical Support</option>
                <option value="billing">Billing / Invoice Issue</option>
                <option value="sales">Sales Inquiry / Pricing</option>
                <option value="feedback">Feedback or Suggestion</option>
                <option value="media">Media / Press Inquiry</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 mt-1 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <label htmlFor="hear-about-us" className={labelStyle}>
                How Did You Hear About Us?
              </label>
              <select
                id="hear-about-us"
                name="how_heard"
                className={`${inputStyle} appearance-none cursor-pointer`}
                defaultValue=""
              >
                <option value="">Select</option>
                <option value="search_engine">
                  Search Engine (Google, Bing, etc.)
                </option>
                <option value="social_media">
                  Social Media (Facebook, Instagram, LinkedIn, X/Twitter)
                </option>
                <option value="word_of_mouth">Word of Mouth / Referral</option>
                <option value="online_advertisement">
                  Online Advertisement
                </option>
                <option value="print_advertisement">Print Advertisement</option>
                <option value="event">Event / Conference</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 mt-1 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div>
            <label htmlFor="message" className={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your Message here"
              className={`${inputStyle} resize-none`}
            ></textarea>
          </div>

          {/* Row 4: Checkbox and Submit Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-4 h-4 text-purple-600 bg-[#1A1A1A] border-gray-600 rounded focus:ring-purple-500 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-400 cursor-pointer"
              >
                I agree with{" "}
                <span className="text-white underline hover:no-underline">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-white underline hover:no-underline">
                  Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 w-full md:w-auto"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
