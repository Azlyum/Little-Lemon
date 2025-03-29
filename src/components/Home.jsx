import React from "react";
import "../App.css";

const HomePage = () => {
  return (
    <main className="homepage">
      <section className="hero">
        <h1>Little Lemon</h1>
        <p className="tagline">
          A family-owned Mediterranean restaurant blending time-honored recipes
          with a modern flair.
        </p>
      </section>

      <section className="bio">
        <h2>Our Story</h2>
        <p>
          Welcome to Little Lemon, where we serve authentic Mediterranean
          flavors crafted with love and the freshest ingredients. From tangy
          tabbouleh to savory lamb kofta, every dish tells a story of tradition
          and passion.
        </p>
      </section>

      <section className="food-gallery">
        <h2>Featured Dishes</h2>
        <div className="gallery">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Fresh Greek Salad"
            />
            <figcaption>Fresh Greek Salad</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1601315481191-7c1e1a4d63bb"
              alt="Grilled Lamb Kofta"
            />
            <figcaption>Grilled Lamb Kofta</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1589307004391-34c3efdd8e7d"
              alt="Baklava Dessert"
            />
            <figcaption>Baklava Dessert</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
