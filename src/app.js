import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

function App() {
  // leave top-padding equal to nav height so fixed navbar doesn't overlap content
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

export default App;
