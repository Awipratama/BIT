import React from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          PT BIKIN INOVASI TEKNOLOGI | Empowering Digital Growth | IT & Web
          Solutions | Bikin.id
        </title>
        <meta
          name="description"
          content="PT BIKIN INOVASI TEKNOLOGI - A global digital holding company delivering reliable IT solutions that connect ideas, technology, and people for a smarter, more connected future."
        />
      </Helmet>
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
