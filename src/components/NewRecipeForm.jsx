import axios from "axios";
import React from "react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function NewRecipeForm({
  submit,
  name,
  author,
  country,
  description,
  ingredient,
  quantity,
  image,
  instructions,
}) {
  const [countryData, setCountryData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: [
      {
        ingredient: "",
        quantity: "",
      },
    ],
    instructions: "",
  });

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountryData(response.data);
    });
  }, []);

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

  return (
    <>
      <Nav />
      <div className="recipe-form">
        <h1>Add new recipe</h1>
        <form onSubmit={submitHandler} onChange={formUpdateHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={name}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            defaultValue={author}
          />
          <label htmlFor="country">Recipe is from</label>
          <select type="text" name="country" id="country">
            {countryData.map((country) => (
              <option value="country">{country.name.common}</option>
            ))}
          </select>
          <label htmlFor="description"> Description</label>
          <input
            type="textarea"
            name="description"
            id="description"
            defaultValue={description}
          />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" defaultValue={image} />
          <h2>Ingredients</h2>
          <div className="ingredients">
            <label htmlFor="quantity">Ingredient</label>
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              defaultValue={ingredient}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              defaultValue={quantity}
            />
            <label htmlFor="Instructions">Instructions</label>
            <input
              type="text"
              name="instructions"
              id="instructions"
              defaultValue={instructions}
            />
            <input type="submit" value="send" />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewRecipeForm;
