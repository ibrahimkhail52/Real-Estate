import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero/Hero";
import Findhome from "./Find Home/Findhome";
import FeaturedProperties from "./Featured Properties/FeaturedProperties";
import TestimonialsSection from "./Testimonials/Testimonials";
import FAQSection from "./FAQSection/FAQ";

export default function Home() {
   const location = useLocation();

   useEffect(() => {
     if (location.state?.scrollTo) {
       const el = document.getElementById(location.state.scrollTo);

       if (el) {
         el.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location.state]);
  return (
    <div>
      <Hero />
      <Findhome />
      <FeaturedProperties />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
