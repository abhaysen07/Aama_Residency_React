import React from "react";
import "../styles/services.css"; // place styles at src/styles/services.css

const Services = () => {
  return (
    <div className="site-container services-page">

      {/* HERO */}
      <section className="hero-services container-inner">
        <h1>Services at Aama Residency</h1>
        <p>Comfort, convenience, and care — services designed for every guest.</p>
      </section>

      {/* WHAT WE OFFER */}
      <section className="services-list container-inner" aria-labelledby="services-heading">
        <h2 id="services-heading">What We Offer</h2>

        <div className="services-grid" role="list">
          <article className="service-card" aria-labelledby="svc-1" role="listitem">
            <h3 id="svc-1">24/7 Front Desk</h3>
            <p>Round-the-clock assistance for check-ins, local advice, and any guest requests.</p>
          </article>

          <article className="service-card" aria-labelledby="svc-2" role="listitem">
            <h3 id="svc-2">Daily Housekeeping</h3>
            <p>Clean rooms and refreshed linens every day — because small details matter.</p>
          </article>

          <article className="service-card" aria-labelledby="svc-3" role="listitem">
            <h3 id="svc-3">Free Wi-Fi</h3>
            <p>High-speed internet across the property — perfect for work or streaming.</p>
          </article>

          <article className="service-card" aria-labelledby="svc-4" role="listitem">
            <h3 id="svc-4">Airport & Local Transfers</h3>
            <p>Pick-up and drop-off services on request — affordable and reliable.</p>
          </article>

          <article className="service-card" aria-labelledby="svc-5" role="listitem">
            <h3 id="svc-5">In-Room Tea / Coffee</h3>
            <p>Tea/coffee kettle, mugs, and basic refreshments provided in every room.</p>
          </article>

          <article className="service-card" aria-labelledby="svc-6" role="listitem">
            <h3 id="svc-6">EV Charging Zone</h3>
            <p>On-site electric vehicle charging station — convenient for eco-conscious travelers.</p>
          </article>
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="addon-services container-inner">
        <h2>Extra Convenience</h2>
        <ul>
          <li>Laundry service (same-day on request)</li>
          <li>Local tour & ticket assistance</li>
          <li>Long-stay discounts and flexible check-in/out</li>
          <li>Power backup & solar-assisted electricity</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="services-cta container-inner">
        <h2>Ready to Book?</h2>
        <p>Get the best rate by contacting us directly or use our contact form.</p>
        <a href="/contact" className="btn global-book-btn" aria-label="Contact and book at Aama Residency">Contact & Book</a>
      </section>

      {/* FOOTER */}
      <footer className="container-inner">
        <p>&copy; 2025 Aama Residency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
