import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <Link to={`${props.name}`} See more>
        {" "}
      </Link>
    </div>
  );
};

export default RecipeCard;
