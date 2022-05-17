import RecipeCard from "./RecipeCard";
import Nav from "./Nav";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const RecipeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/recipes/`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Nav />

      <div className="recipe-cards-list">
        {" "}
        {data.map((c) => (
          <RecipeCard
            name={c.name}
            key={c.id}
            image={c.image}
            id={c.id}
            flagURL={c.flagURL}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
