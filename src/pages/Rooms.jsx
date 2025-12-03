import React from "react";
import "../styles/rooms.css"; // create this file next

// Import images from src/assets/images
import standard from "../assets/images/standard-room.png";
import deluxe from "../assets/images/room.png";
import family from "../assets/images/family-suite.png";

const Rooms = () => {
  return (
    <div className="site-container rooms-page">

      <main>
        {/* ===== ROOMS SECTION ===== */}
        <section className="rooms-list container-inner">
          <h1>Our Rooms</h1>
          <p className="subtitle">
            Choose from Standard, Deluxe, and Family Suite options — affordable, clean, and comfortable.
          </p>

          <div className="room-grid">

            {/* Standard Room */}
            <article className="room-type">
              <h3>Standard Room</h3>
              <p>Compact and neat — ideal for solo travelers and short stays.</p>
              <img 
                src={standard} 
                alt="Standard Room" 
                className="room-img" 
              />
            </article>

            {/* Deluxe Room */}
            <article className="room-type">
              <h3>Deluxe Room</h3>
              <p>Roomier layout with upgraded furnishings for a relaxed stay.</p>
              <img 
                src={deluxe} 
                alt="Deluxe Room" 
                className="room-img" 
              />
            </article>

            {/* Family Suite */}
            <article className="room-type">
              <h3>Family Suite</h3>
              <p>Extra beds and space — perfect for families or group travellers.</p>
              <img 
                src={family} 
                alt="Family Suite" 
                className="room-img" 
              />
            </article>

          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>&copy; 2025 Aama Residency. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Rooms;
