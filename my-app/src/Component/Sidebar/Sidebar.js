import React, { useContext } from "react";
import FilterContext from "../../Context/FilterContext";
import "./Style.css";

export default function Sidebar() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className="body">
      <div className="sidebar">
        <div
          className="Filter-by"
          onClick={() =>
            setFilter({
              ...filter,
              cuisine_type: "",
              ratings: "",
              neighborhood: "",
            })
          }
        >
          Select
        </div>
        <div className="category-type">
          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "Asian" })}
          >
            Asian
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "American" })}
          >
            American
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "Japanese" })}
          >
            Japanese
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "Italian" })}
          >
            Italian
          </div>

          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "Mexican" })}
          >
            Mexican
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, cuisine_type: "French" })}
          >
            French
          </div>
        </div>
        <div className="category-type">
          <div
            className="category"
            onClick={() => setFilter({ ...filter, ratings: "1 stars" })}
          >
            1 stars
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, ratings: "2 stars" })}
          >
            2 stars
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, ratings: "3 stars" })}
          >
            3 stars
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, ratings: "4 stars" })}
          >
            4 stars
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, ratings: "5 stars" })}
          >
            5 stars
          </div>
        </div>
        <div className="category-type">
          <div
            className="category"
            onClick={() => setFilter({ ...filter, neighborhood: "Manhattan" })}
          >
            Manhattan
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, neighborhood: "Queens" })}
          >
            Queens
          </div>
          <div
            className="category"
            onClick={() => setFilter({ ...filter, neighborhood: "Brooklyn" })}
          >
            Brooklyn
          </div>
        </div>
      </div>
    </div>
  );
}
