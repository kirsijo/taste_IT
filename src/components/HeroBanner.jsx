import React from "react";
import food from "../video/food.mp4";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function HeroBanner() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.4;
  }, []);

  return (
    <header>
      <div className="herobanner">
        <video autoPlay loop muted id="video" ref={videoRef}>
          <source src={food} type="video/mp4" />
        </video>
        <div className="overlay-hero">
          <h2>TasteIT</h2>
          <p>
            TasteIT is a recipe app made in REACT22K group React lessons at BC
            Helsinki.
          </p>
          <Link className="hero-button" to="/recipes">
            {" "}
            Browse recipes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
