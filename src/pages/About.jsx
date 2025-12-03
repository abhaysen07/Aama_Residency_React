import React from "react";
import "../styles/about.css";

// ===== IMPORT ALL IMAGES FROM src/assets/images =====
import lobby from "../assets/images/lobby.png";
import room from "../assets/images/room.png";
import family from "../assets/images/family-suite.png";
import rooftop from "../assets/images/rooftop.png";
import ev from "../assets/images/ev.png";

import abhi from "../assets/images/abhi.png";
import papa from "../assets/images/papa.jpg";
import mummy from "../assets/images/mummy.jpeg";
import anuj from "../assets/images/anuj.jpg";

const About = () => {
  return (
    <div className="site-container about-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero-about container-inner">
        <h1>About Aama Residency</h1>
        <p>
          A family-driven hospitality venture combining warmth, trust, and
          technology — providing affordable and reliable stays near Agra, Aligarh,
          and Greater Noida. 🌿
        </p>
      </section>

      {/* ========== STORY SECTION ========== */}
      <section className="story container-inner">
        <h2>Our Story</h2>
        <p>
          Aama Residency was founded by our family with one goal — to make
          comfortable and transparent living spaces available for everyone. From
          clean rooms to tech-enabled systems, we’ve built this place with care,
          precision, and experience drawn from years of professional excellence.
        </p>
        <p>
          Each member of our family contributes unique expertise — from power
          infrastructure and electronics to technology and finance — together shaping
          a hotel where traditional hospitality meets modern innovation.
        </p>
      </section>

      {/* ========== INFRASTRUCTURE SECTION ========== */}
      <section className="infra container-inner">
        <h2>Our Infrastructure 🏗️</h2>

        <div className="infra-grid">
          <div className="infra-card">
            <h3>Five-Storey Structure</h3>
            <p>Standard, Deluxe, and Family Suites with natural light and comfort.</p>
          </div>
          <div className="infra-card">
            <h3>EV Charging Zone</h3>
            <p>Sustainable charging points for electric vehicles.</p>
          </div>
          <div className="infra-card">
            <h3>Solar & Power Backup</h3>
            <p>Solar panels and inverter backup ensure uninterrupted power.</p>
          </div>
          <div className="infra-card">
            <h3>High-Speed Internet</h3>
            <p>Stable Wi-Fi for work, study, and entertainment.</p>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="gallery container-inner">
        <h2>Photo Gallery 📸</h2>

        <div className="gallery-grid">
          <img src={lobby} alt="Hotel Lobby" />
          <img src={room} alt="Deluxe Room" />
          <img src={family} alt="Family Suite" />
          <img src={rooftop} alt="Rooftop View" />
          <img src={ev} alt="EV Charging Zone" />
        </div>
      </section>

      {/* ========== FAMILY TEAM SECTION ========== */}
      <section className="team container-inner">
        <h2>Meet Our Family Team 👨‍👩‍👧‍👦</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src={abhi} alt="Abhishek Kumar" />
            <h4>Abhishek Kumar</h4>
            <p>Founder & Developer</p>
            <p>
              Worked with: <strong>Tech Mahindra</strong>, <strong>GlobalLogic</strong>,{" "}
              <strong>S&P Global</strong>
            </p>
          </div>

          <div className="team-card">
            <img src={papa} alt="Ashok Kumar" />
            <h4>Ashok Kumar</h4>
            <p>Deputy Chief Manager — Power Grid Corporation of India Ltd.</p>
          </div>

          <div className="team-card">
            <img src={mummy} alt="Mrs Meena Kumar" />
            <h4>Mrs. Meena Kumar</h4>
            <p>HR & Finance — Family Business Operations</p>
          </div>

          <div className="team-card">
            <img src={anuj} alt="Anuj Kumar" />
            <h4>Anuj Kumar</h4>
            <p>Executive — Amara Raja Power Systems Ltd.</p>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="map container-inner">
        <h2>Find Us 📍</h2>

        <div className="map-wrap">
          <iframe
            title="Aama Residency location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.979913514055!2d78.00552731504322!3d27.16091518301544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747735fbe4f2e5%3A0xbca0e9f2c6bcb7c2!2sAgra%20Shamshabad%20Road!5e0!3m2!1sen!2sin!4v1688148491231!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta container-inner">
        <h2>Ready to Book Your Stay?</h2>
        <p>Comfort, safety, and family warmth — just one click away.</p>

        <a
          href="/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="btn global-book-btn"
        >
          Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Aama Residency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
