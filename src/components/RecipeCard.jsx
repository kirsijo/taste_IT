import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="flag-div">
        {/* <img src={country.flag} alt={country.name} /> */}
      </div>
      <Link to={`${props.id}`}>See more</Link>
    </div>
  );
};

export default RecipeCard;
