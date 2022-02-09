import React, { useContext } from "react";
import SearchContext from "../../Context/DataContext";
import FilterContext from "../../Context/FilterContext";
import "./Style.css";

export default function Input() {
  const { filter, setFilter } = useContext(FilterContext);
  const { searchCategory, setSearchCategory } = useContext(SearchContext);
  return (
    <div className="input-category">
      <select
        className="category"
        value={searchCategory.value}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option>name</option>
        <option>cuisine_type</option>
        <option>neighborhood</option>
      </select>
      <input
        placeholder="search here"
        type="text"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
    </div>
  );
}
