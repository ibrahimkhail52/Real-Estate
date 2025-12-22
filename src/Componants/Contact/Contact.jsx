import React from "react";
import ContactHero from "./ContactHero/ContactHero";
import ContactCards from "./ContactCards/ContactCards";
import ContactForm from "./ContactForm/ContactForm";
import OfficeLocations from "./OfficeLocations/OfficeLocations";
import ContactGallery from "./ContactGallery/ContactGallery";

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <OfficeLocations />
      <ContactGallery/>
    </div>
  );
}
