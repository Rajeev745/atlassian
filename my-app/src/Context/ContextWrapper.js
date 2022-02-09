import React, { useState } from "react";
import SearchContext from "./DataContext";
import FilterContext from "./FilterContext";

export default function ContextWrapper({ children }) {
  const [searchCategory, setSearchCategory] = useState("name");
  const [filter, setFilter] = useState({
    cuisine_type: "",
    neighborhood: "",
    ratings: "",
    search: "",
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <SearchContext.Provider value={{ searchCategory, setSearchCategory }}>
        {children}
      </SearchContext.Provider>
    </FilterContext.Provider>
  );
}
