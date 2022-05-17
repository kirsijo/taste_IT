import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const IndividualRecipe = (props) => {
  const [data, setData] = useState({
    name: "",
    image: "",
    author: "",
    country: "",
    description: "",
    ingredients: [],
    instructions: "",
    flagURL: "",
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/recipes/${props.params.id}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Nav />
      <div className="individual-recipe">
        <div className="flag-container">
          <img src={data.flagURL} alt={data.country} />
        </div>
        <h3>{data.name}</h3>
        <img src={data.image} alt={data.name} />
        <div className="recipe-details">
          <p>Author: {data.author}</p>
          <p>Country: {data.country}</p>
          <p>
            <i>{data.description}</i>
          </p>
        </div>
        {
          <div>
            <h3>Ingredients</h3>
            {data.ingredients.map((p) => (
              <p>
                {p.ingredient} | {p.quantity}
              </p>
            ))}

            <h3>Method</h3>
            <p>{data.instructions}</p>
          </div>
        }
      </div>
    </>
  );
};

export default IndividualRecipe;
