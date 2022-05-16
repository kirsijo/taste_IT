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
    flagURL: "",
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
    const correctCountry = countryData.find((c) => {
      return c.name.common === e.target.value;
    });
    console.log(correctCountry);
    setFormData({
      ...formData,
      country: correctCountry.name.common,
      flagURL: correctCountry.flags.png,
    });
  };

  /*INGREDIENT DATA AND ADDING INGREDIENTS */

  const changeIngrData = (e, i) => {
    const { name, value } = e.target;
    const ingrList = [...ingredients];
    ingrList[i][name] = value;
    setIngredients(ingrList);
    setFormData({ ...formData, ingredients: ingredients });
  };

  const addMoreIngredients = (e) => {
    e.preventDefault();
    const newIngr = {
      id: ingredients.length + 1,
      ingredient: "",
      quantity: "",
    };
    setIngredients([...ingredients, newIngr]);
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
              <option value={country.name.common}>{country.name.common}</option>
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
          <button onClick={addMoreIngredients}>Add more ingredients</button>
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
