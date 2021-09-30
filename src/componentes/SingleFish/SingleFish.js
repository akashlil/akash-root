import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleFish = () => {
  const { fishId } = useParams();
  const [s, setSingle] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fishId}`)
      .then((res) => res.json())
      .then((data) => setSingle(data.meals));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col mx-auto">
        <div className="card h-100  mt-4">
          <img src={s[0]?.strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{s[0]?.idMeal}</h5>
            <p className="card-text">{s[0]?.strInstructions.slice(0, 250)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFish;
