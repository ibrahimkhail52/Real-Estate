import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Scroll to top on route change
import ScrollToTop from "./Componants/Home/Featured Properties/ScrollToTop";
// Shared Nav
import Nav from "./Componants/Home/Nav/Nav";

// Pages
import Home from "./Componants/Home/Home";
import About from "./Componants/About/About";
import Properties from "./Componants/Properties/Properties";
import Services from "./Componants/Services/Services";
import Contact from "./Componants/Contact/Contact";
import RealEstateJourney from "./Componants/RealEstateJourney/RealEstateJourney";
import Footer from "./Componants/footer/Footer";
import PropertyDetail from "./Componants/propertiesdeatils/PropertyDetail";

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail/>} />{" "}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <RealEstateJourney/>
      <Footer/>
    </Router>
  );
}
