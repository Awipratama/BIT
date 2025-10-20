import React from "react";
import { Helmet } from "react-helmet-async";

import Navigation from "../components/Navigation.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | PT BIKIN INOVASI TEKNOLOGI | Bikin.id</title>
        <meta
          name="description"
          content="Contact us for more information, support, or inquiries. Our team is ready to assist you | PT BIKIN INOVASI TEKNOLOGI"
        />
      </Helmet>
      <Navigation />
      <Contact />
      <Footer />
    </>
  );
}
