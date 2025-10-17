import React from "react";

import Navigation from "../components/Navigation.jsx";
import Hero from "../components/HeroSection.jsx";
import Solution from "../components/SolutionSection.jsx";
import TextWithImage from "../components/TextWithImage.jsx";
import OurWorks from "../components/OurWorks.jsx";
import Insight from "../components/Insight.jsx";
import Contact from "../components/Contact.jsx";
import CTA from "../components/CTAContact.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Solution />
      <TextWithImage />
      <OurWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
