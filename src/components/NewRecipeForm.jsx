import axios from "axios";
import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const NewRecipeForm = () => {
  const [countryData, setCountryData] = useState([]);
  const [submitted, setSubmit] = useState(false);
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
    axios.post("http://localhost:3010/recipes", formData).then((res) => {
      setSubmit(true);
      setFormData({
        name: "",
        author: "",
        description: "",
        instructions: "",
        flagURL: "",
        country: "",
        image: "",
      });
      setIngredients([
        {
          ingredient: "",
          quantity: "",
        },
      ]);
    });
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
      <h1 className="add-new-header">Add new recipe</h1>
      <div className="recipe-form">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              required
              onChange={formUpdateHandler}
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              required
              onChange={formUpdateHandler}
            />
          </div>
          <div>
            <label htmlFor="country">Recipe is from</label>
            <select
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={changeCountry}
            >
              <option defaultValue="Choose country">Choose country</option>
              {countryData
                .sort((a, b) => {
                  return a.name.common.localeCompare(b.name.common);
                })
                .map((country, i) => (
                  <option key={i} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="description"> Description</label>
            <input
              type="textarea"
              name="description"
              id="description"
              value={formData.description}
              onChange={formUpdateHandler}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="url"
              name="image"
              id="image"
              value={formData.image}
              onChange={formUpdateHandler}
            />
          </div>
          <h3>Ingredients</h3>

          {ingredients.map((_, i) => {
            return (
              <div className="ingredient-container" key={i}>
                <div>
                  <label htmlFor="ingredient">Ingredient</label>
                  <input
                    className="ingredient"
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    onChange={(e) => changeIngrData(e, i)}
                  />
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    className="quantity"
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
            <textarea
              className="instructions"
              type="text"
              name="instructions"
              id="instructions"
              value={formData.instructions}
              onChange={formUpdateHandler}
            />
            <input type="submit" value="send" />
            {submitted === true && <h3>Thank you for your recipe!</h3>}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRecipeForm;
