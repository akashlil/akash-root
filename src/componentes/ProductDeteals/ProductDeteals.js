import React, { useEffect, useState } from "react";
import Fish from "../Fish/Fish";

const ProductDeteals = (props) => {
  /* const [seachData, setSeachData] = useState("");
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${seachData}`)
  const onchangeVlaue = (e) => {
    setSeachData(e.target.value);
  };
  onChange={onchangeVlaue}
  <div className="d-flex justify-content-center">
  <input
    className="search-input p-2 m-0"
    type="search"
    placeholder="Search"
    aria-label="Search"
    width="200"
  />
</div> */
  const [fishs, setFishs] = useState([]);
  console.log(props.searchValue);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchValue}`
    )
      .then((resp) => resp.json())
      .then((data) => setFishs(data.meals));
  }, [props.searchValue]);

  return (
    <div className="m-0">
      <div className="row row-cols-1 row-cols-md-4 g-4 m-1">
        {fishs?.map((fish) => (
          <Fish fish={fish} key={fish.idMeal}></Fish>
        ))}
      </div>
    </div>
  );
};

export default ProductDeteals;
