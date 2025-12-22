import React, { useRef } from "react";
import useScrollToSection from "./useScrollToSection";
import emailjs from "@emailjs/browser";
import logo from "../../assets/Home/Nav/Logo.svg";

const Footer = () => {
  const form = useRef();
  const scrollToSection = useScrollToSection();

  const SERVICE_ID = "service_jl3rlii";
  const TEMPLATE_ID = "template_gdm3p9n";
  const PUBLIC_KEY = "tOBbCpkMZKUFtZ-cW";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("Email sent successfully!");
        form.current.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      () => alert("Failed to send email. Please try again later.")
    );
  };

  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12">
        {/* Logo + Email */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <img src={logo} alt="Logo" className="mx-auto lg:mx-0 mb-6" />

          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative max-w-sm mx-auto lg:mx-0"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full bg-[#1A1A1A] border border-gray-700 text-gray-300 rounded-lg py-3 pl-10 pr-14 focus:outline-none focus:border-purple-600"
              required
            />

            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
              />
            </svg>

            <button
              type="submit"
              className="absolute right-1 top-1 bg-purple-600 hover:bg-purple-700 p-2 rounded-md"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center sm:text-left">
          {[
            {
              title: "Home",
              links: [
                ["Hero Section", () => scrollToSection("/", "hero")],
                ["Features", () => scrollToSection("/", "features")],
                [
                  "Properties",
                  () => scrollToSection("/properties", "properties-page"),
                ],
                ["Testimonials", () => scrollToSection("/", "testimonials")],
                ["FAQ’s", () => scrollToSection("/", "faq")],
              ],
            },
            {
              title: "About Us",
              links: [
                ["Our Story", () => scrollToSection("/about", "story")],
                ["Our Works", () => scrollToSection("/about", "works")],
                ["How It Works", () => scrollToSection("/about", "process")],
                ["Our Team", () => scrollToSection("/about", "member")],
                ["Our Clients", () => scrollToSection("/about", "clients")],
              ],
            },
            {
              title: "Properties",
              links: [
                [
                  "Portfolio",
                  () => scrollToSection("/properties", "portfolio"),
                ],
                [
                  "Categories",
                  () => scrollToSection("/properties", "categories"),
                ],
              ],
            },
            {
              title: "Services",
              links: [
                [
                  "Valuation Mastery",
                  () => scrollToSection("/services", "valuation"),
                ],
                [
                  "Strategic Marketing",
                  () => scrollToSection("/services", "marketing"),
                ],
                [
                  "Negotiation Wizardry",
                  () => scrollToSection("/services", "negotiation"),
                ],
                [
                  "Closing Success",
                  () => scrollToSection("/services", "closing"),
                ],
                [
                  "Property Management",
                  () => scrollToSection("/services", "management"),
                ],
              ],
            },
            {
              title: "Contact Us",
              links: [
                [
                  "Contact Form",
                  () => scrollToSection("/contact", "contact-form"),
                ],
                ["Our Offices", () => scrollToSection("/contact", "offices")],
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map(([label, action], idx) => (
                  <li key={idx}>
                    <button
                      onClick={action}
                      className="hover:text-white transition"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left">
          © 2025 Estatein. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/miDevHub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C16.343 21.128 20 16.991 20 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/ibrahimkhail52"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/murtazaibrahimkhail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
