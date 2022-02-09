import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../Context/DataContext";
import FilterContext from "../../Context/FilterContext";
import data from "../../Mockdata.json";
import "./Style.css";

export default function Content() {
  const { filter } = useContext(FilterContext);
  const { searchCategory } = useContext(SearchContext);
  console.log(searchCategory);
  let newArr;
  if (searchCategory === "name") {
    newArr = data.filter((item) =>
      item.name.toLowerCase().includes(filter.search.toLowerCase())
    );
  } else if (searchCategory === "neighborhood") {
    newArr = data.filter((item) =>
      item.neighborhood.toLowerCase().includes(filter.search.toLowerCase())
    );
  } else if (searchCategory === "cuisine_type") {
    newArr = data.filter((item) =>
      item.cuisine_type.toLowerCase().includes(filter.search.toLowerCase())
    );
  }
  const dataArr = newArr
    .filter((item) => item.cuisine_type.includes(filter.cuisine_type))
    .filter((item) => item.neighborhood.includes(filter.neighborhood))
    .filter((item) => item.ratings.includes(filter.ratings));

  return (
    <div className="body">
      <div className="content-body">
        {dataArr.map((item) => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={item.photograph} alt="No image found" />
            </div>
            <div className="res-name">{item.name}</div>
            <div className="cuisine"> Cuisine : {item.cuisine_type}</div>
            <div className="add">
              <div className="neighbor">{item.neighborhood}</div>
              <div className="rating">{item.ratings}</div>
            </div>
            <div className="address">{item.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
