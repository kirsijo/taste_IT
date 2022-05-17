import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <h2>Looking for the recipes?</h2>
      </div>

      <div className="card-container">
        <div className="footer-card">
          <h3>Browse recipes</h3>
          <p>Find your favourites in your collection</p>
          <Link to="/recipes">All recipes</Link>
        </div>
        <div className="footer-card">
          <h3>Add recipes</h3>
          <p>Missing a recipe from your country? Click here to add one!</p>
          <Link to="/addnewrecipe">Add recipe</Link>
        </div>
        <div className="footer-card">
          <h3>Want to know more about this project?</h3>
          <p>Visit our programme homepage.</p>
          <a href="https://bc.fi" target="_blank">
            Business College Helsinki
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
