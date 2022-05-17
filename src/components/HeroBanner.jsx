import React from "react";
import food from "../video/food.mp4";
import { useRef, useEffect } from "react";

function HeroBanner() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.playbackRate = 0.3;
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
            TasteIT is recipe app which is made in REACT22K group React lessons
          </p>
          <button>Browse recipes</button>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
