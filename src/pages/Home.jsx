import React from "react";

/*
  Home.jsx
  - Full landing page content (converted from index.html)
  - No logo under navbar (you requested that)
  - Uses styles from src/styles/styles.css
*/

const Home = () => {
  return (
    <div className="site-container home-page">

      {/* MAIN INTRODUCTION SECTION */}
      <main>
        <section className="intro">
          <div className="intro-content">
            <h1>Welcome to Aama Residency</h1>
            <p>
              Stay smart, stay comfortable! Aama Residency offers affordable rooms near Agra,
              Aligarh, and Greater Noida. Perfect for sightseeing, business trips, or quick
              getaways — our cozy rooms and essential amenities ensure a hassle-free and
              budget-friendly stay.
            </p>

            {/* BOOK NOW BUTTON */}
            <a
              href="/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="global-book-btn"
              aria-label="Open booking page in new tab"
            >
              BOOK NOW
            </a>
          </div>
        </section>
      </main>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-content">
          <h2>About Aama Residency</h2>
          <p>
            Finding a safe and hassle-free place to stay can be tricky nowadays — dodgy owners,
            hidden charges, and uncomfortable rooms are everywhere.
            At <strong>Aama Residency</strong>, we cut through all that noise.
          </p>
          <p>
            We offer affordable, clean, and cozy rooms near Agra, Aligarh, and Greater Noida,
            with transparent pricing and friendly service. No surprises — just a comfortable
            stay where you can relax, work, or explore the city.
          </p>
        </div>
      </section>

      {/* ROOMS & SERVICES SECTION */}
      <section className="rooms-services">
        <div className="rooms-services-content">
          <h2>Our Rooms & Services</h2>
          <p>
            At Aama Residency, we offer flexible and affordable stays crafted for working professionals,
            students, and families. Whether you need a place for a day, a month, or a year — we make
            your living experience smooth and stress-free.
          </p>

          <div className="room-card">
            <div className="room-card-header">
              <h3>Room Options</h3>
              <p className="subtle">Choose what fits your needs — comfort, space, or a family-friendly suite.</p>
            </div>

            <div className="room-grid">
              <article className="room-type">
                <h4>Standard Room</h4>
                <p className="room-desc">Cozy and affordable — ideal for solo travelers and short stays.</p>
                <p className="room-meta">✔ Bed • ✔ Wi-Fi • ✔ Daily Cleaning</p>
              </article>

              <article className="room-type">
                <h4>Deluxe Room</h4>
                <p className="room-desc">Spacious layout with upgraded furnishings for a relaxed stay.</p>
                <p className="room-meta">✔ Larger Space • ✔ Seating • ✔ Premium Linens</p>
              </article>

              <article className="room-type">
                <h4>Family Suite</h4>
                <p className="room-desc">Extra space for families — additional beds and room to breathe.</p>
                <p className="room-meta">✔ Extra Beds • ✔ Family-Friendly • ✔ More Luggage Space</p>
              </article>
            </div>

            <div className="services-brief">
              <h4>Our Services Include:</h4>
              <ul>
                <li>24/7 Front Desk Support</li>
                <li>Free Wi-Fi</li>
                <li>Daily Housekeeping</li>
                <li>Airport Transfers (on request)</li>
              </ul>
            </div>

            <p className="final-note">
              Your comfort and satisfaction are our top priorities.
              Book your stay with us today and experience hassle-free hospitality!
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Aama Residency. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
