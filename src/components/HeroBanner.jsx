import React from "react";
import food from "../video/food.mp4";

function HeroBanner() {
  return (
    <header>
      <div className="herobanner">
        <video autoPlay loop muted id="video">
          <source src={food} type="video/mp4" />
        </video>
        <div className="overlay-hero">
          <h2>TasteIT</h2>
          <p>
            TasteIT is recipe app which is made in REACT22K group React lessons
          </p>
          <button>Browse recipes</button>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
