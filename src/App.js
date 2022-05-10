import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
