import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import Navigation from "../components/Navigation.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function ContactPage() {
  const location = useLocation();

  return (
    <>
      <Helmet key={location.pathname}>
        <title>Contact Us | PT BIKIN INOVASI TEKNOLOGI | Bikin.id</title>
        <meta
          name="description"
          content="Contact us for more information, support, or inquiries. Our team is ready to assist you | PT BIKIN INOVASI TEKNOLOGI"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | PT BIKIN INOVASI TEKNOLOGI | Bikin.id" />
        <meta
          property="og:description"
          content="Contact us for more information, support, or inquiries. Our team is ready to assist you | PT BIKIN INOVASI TEKNOLOGI"
        />
        <meta property="og:image" content="https://bikin.id/featured-image.jpg" />
        <meta property="og:url" content="https://bikin.id/" />
      </Helmet>
      <Navigation />
      <Contact />
      <Footer />
    </>
  );
}
