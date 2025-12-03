import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // <-- ensure this file exists

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) => "nav-item" + (isActive ? " active" : "");

  return (
    <nav className="navbar">
      {/* brand */}
      <div className="nav-brand">
        <NavLink to="/" className="brand-link" onClick={() => setOpen(false)}>
          <img src={logo} alt="Aama Residency" className="brand-logo" />
          <span className="brand-title">Aama Residency</span>
        </NavLink>
      </div>

      {/* hamburger (visible on small screens per CSS) */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      {/* links */}
      <ul id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
        <li><NavLink to="/" className={navClass} end onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/rooms" className={navClass} onClick={() => setOpen(false)}>Rooms</NavLink></li>
        <li><NavLink to="/services" className={navClass} onClick={() => setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>Contact</NavLink></li>

        {/* mobile-only auth item — CSS shows/hides based on screen width */}
        <li className="nav-auth-mobile">
          <NavLink to="/auth" className={({isActive}) => "auth-btn nav-item" + (isActive ? " active" : "")} onClick={() => setOpen(false)}>
            Log In / Signup
          </NavLink>
        </li>
      </ul>

      {/* desktop auth (hidden on mobile by CSS) */}
      <div className="nav-auth">
        <NavLink to="/auth" className={({isActive}) => "auth-btn nav-item" + (isActive ? " active" : "")}>
          Log In / Signup
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
