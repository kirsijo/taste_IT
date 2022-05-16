import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import NewRecipeForm from "./components/NewRecipeForm";
import IndividualRecipe from "./components/IndividualRecipe";
import { useParams } from "react-router-dom";

const RouterWrapper = (props) => {
  const params = useParams();
  return <IndividualRecipe params={params} {...props} />;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="addnewrecipe" element={<NewRecipeForm />} />
          <Route path="recipes/:id" element={<RouterWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
