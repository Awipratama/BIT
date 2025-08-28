import React from "react";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
