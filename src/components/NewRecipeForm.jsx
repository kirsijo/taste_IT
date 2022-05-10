import React from "react";
import Nav from "./Nav";

const NewRecipeForm = () => {
  return (
    <>
      <Nav />
      <div className="recipe-form">
        <h1>Add new recipe</h1>
        <form onSubmit="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" required />
          <label htmlFor="country">Recipe is from</label>
          <select type="text" name="country" id="country">
            <option value="country"></option>
          </select>
          <label htmlFor="description"> Description</label>
          <input type="textarea" name="description" id="description" />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" />
          <h2>Ingredients</h2>
          <div className="ingredients">
            <label htmlFor="quantity">Ingredient</label>
            <input type="text" name="ingredient" id="ingredient" />
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" id="quantity" />
            <label htmlFor="Instructions">Instructions</label>
            <input type="text" name="instructions" id="instructions" />
            <input type="submit" value="send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRecipeForm;
