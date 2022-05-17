import RecipeCard from "./RecipeCard";
import Nav from "./Nav";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const RecipeList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3010/recipes/`)
      .then((res) => setData(res.data));
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchFilter = data.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Nav />
      <div className="recipe-search-div">
        <h2>Search for recipes</h2>
        <input
          className="recipe-search"
          type="text"
          placeholder="Search recipes..."
          onChange={searchHandler}
        />
      </div>
      <h2>Our recipes</h2>
      <div className="recipe-cards-list">
        {searchFilter.map((c) => (
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
