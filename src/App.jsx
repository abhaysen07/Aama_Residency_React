import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Rooms from "./pages/Rooms.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div style={{ paddingTop: "var(--nav-height, 64px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  );
}
