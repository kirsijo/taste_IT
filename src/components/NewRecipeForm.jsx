import axios from "axios";
import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const NewRecipeForm = () => {
  const [countryData, setCountryData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: "",
  });

  // ingredients have their own state
  const [ingredients, setIngredients] = useState([
    { id: 1, ingredient: "", quantity: "" },
  ]);

  /*FORM UPDATE AND SUBMIT HANDLERS*/

  const formUpdateHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3010/recipes", formData)
      .then((res) => console.log("res", res));
  };

  /* get country data and country change handler*/

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountryData(response.data);
    });
  }, []);

  const changeCountry = (e) => {
    const correctCountry = countryData.find((c) => c.name === e.target.value);
    setCountryData({ ...countryData, country: correctCountry.common });
  };

  /*INGREDIENT DATA */

  const changeIngrData = (e, i) => {
    const { name, value } = e.target;
    const ingrList = [...ingredients];
    ingrList[i][name] = value;
    setIngredients(ingrList);
    setFormData({ ...formData, ingredients: ingredients });
  };

  return (
    <>
      <Nav />
      <div className="recipe-form">
        <h1>Add new recipe</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={formUpdateHandler}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            onChange={formUpdateHandler}
          />
          <label htmlFor="country">Recipe is from</label>
          <select
            type="text"
            name="country"
            id="country"
            onChange={changeCountry}
          >
            {countryData.map((country) => (
              <option value="country">{country.name.common}</option>
            ))}
          </select>
          <label htmlFor="description"> Description</label>
          <input
            type="textarea"
            name="description"
            id="description"
            onChange={formUpdateHandler}
          />
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={formUpdateHandler}
          />
          <h2>Ingredients</h2>
          {ingredients.map((_, i) => {
            return (
              <div key={i}>
                <div>
                  <label htmlFor="ingredient">Ingredient</label>
                  <input
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    onChange={(e) => changeIngrData(e, i)}
                  />
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    onChange={(e) => changeIngrData(e, i)}
                  />
                </div>
              </div>
            );
          })}
          <div>
            <label htmlFor="Instructions">Instructions</label>
            <input
              type="text"
              name="instructions"
              id="instructions"
              onChange={formUpdateHandler}
            />
            <input type="submit" value="send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRecipeForm;
