import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import FilterBar from "./components/FilterBar";
import "./scss/App.scss";

import dummyData from "./assets/data/dummy-data";

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    //simulate asynchronous API call
    setTimeout(() => {
      setListings(dummyData);
    }, 200);
  }, []);

  const addTagToFilter = (tag) => {
    if (filters.indexOf(tag) !== -1) return;

    const newFilters = [...filters, tag];
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <Header />
      <FilterBar filters={filters} clearFilters={clearFilters} />
      <Jobs listings={listings} addTag={addTagToFilter} filters={filters} />
    </>
  );
}

export default App;
