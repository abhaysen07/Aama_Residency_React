import React from "react";
import "../styles/contact.css"; // place styles at src/styles/contact.css

const Contact = () => {
  return (
    <div className="site-container contact-page">

      {/* HERO */}
      <section className="contact-hero container-inner">
        <h1>Contact Us</h1>
        <p>
          We’re always happy to assist you — whether it’s booking details, travel help, or safety information.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details container-inner">
        <h2>Reach Aama Residency</h2>

        <p><strong>Address:</strong> Aama Residency, Agra Shamshabad Road, Agra, Uttar Pradesh, India</p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+918650590984">+91 86505 90984 (Abhishek Kumar)</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:abhishek.abhishek1996@gmail.com">abhishek.abhishek1996@gmail.com</a>
        </p>
        <p><strong>Reception Hours:</strong> 24/7 Available</p>

        <h3>Emergency & Local Contacts</h3>
        <ul className="contact-list">
          <li><strong>Ambulance:</strong> 108</li>
          <li><strong>Police:</strong> 100</li>
          <li><strong>UP Police Helpline:</strong> 112</li>
          <li><strong>Fire Service:</strong> 101</li>
          <li><strong>Women Helpline:</strong> 1091</li>
          <li><strong>Nearest Hospital:</strong> Pushpanjali Hospital, Shamshabad Road, Agra</li>
        </ul>

        <h3>How to Reach Us</h3>
        <ul className="contact-list">
          <li>Nearest Railway Station: Agra Cantt (approx 18 km)</li>
          <li>Nearest Airport: Agra Airport (approx 10 km)</li>
          <li>Landmark: Opposite CNG Petrol Pump, near Aama Residency main gate</li>
        </ul>

        <h3>Quick Support</h3>
        <p>For bookings, queries, or directions, call or WhatsApp us directly — we respond 24×7.</p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/918650590984" target="_blank" rel="noopener noreferrer">+91 86505 90984</a>
        </p>

        <div className="contact-cta">
          <a
            className="global-book-btn"
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open booking page"
          >
            BOOK NOW
          </a>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section container-inner">
        <h2>Find Us on Google Maps</h2>
        <div className="map-wrap">
          <iframe
            title="Aama Residency location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.979913514055!2d78.00552731504322!3d27.16091518301544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747735fbe4f2e5%3A0xbca0e9f2c6bcb7c2!2sAgra%20Shamshabad%20Road!5e0!3m2!1sen!2sin!4v1688148491231!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container-inner">
        <p>&copy; 2025 Aama Residency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
