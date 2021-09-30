import React from "react";
import { NavLink } from "react-router-dom";

const Fish = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.fish;
  const url = `/single-fish/${idMeal}`;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0, 150)}</p>
          <NavLink to={url}>
            <button className="btn btn-link">See More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Fish;
