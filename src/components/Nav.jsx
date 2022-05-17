import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Taste IT 🍓</h1>
      </Link>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/addnewrecipe">Add new recipe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
