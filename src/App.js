import React, { useState } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import FilterBar from "./components/FilterBar";
import "./scss/App.scss";

import dummyData from "./assets/data/dummy-data";

function App() {
  const [listings, setListings] = useState(dummyData);
  const [filters, setFilters] = useState([]);

  const addTagToFilter = (tag) => {
    if (filters.indexOf(tag) !== -1) return;

    const newFilters = [...filters, tag];
    setFilters(newFilters);
  };

  const removeTagFromFilter = (tag) => {
    const newFilters = filters.filter((item) => {
      return item !== tag;
    });

    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <Header />
      <FilterBar
        filters={filters}
        clearFilters={clearFilters}
        removeFilter={removeTagFromFilter}
      />
      <Jobs listings={listings} addTag={addTagToFilter} filters={filters} />
    </>
  );
}

export default App;
