import React from "react";

import Navigation from "../components/Navigation.jsx";
import Hero from "../components/HeroSection.jsx";
import Solution from "../components/SolutionSection.jsx";
import TextWithImage from "../components/TextWithImage.jsx";
import OurWorks from "../components/OurWorks.jsx";

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Solution />
      <TextWithImage />
      <OurWorks />
    </>
  );
}

export default HomePage;
