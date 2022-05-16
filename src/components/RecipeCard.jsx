import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="flag">{props.flag}</div>
      <Link to={`${props.id}`}>See more</Link>
    </div>
  );
};

export default RecipeCard;
