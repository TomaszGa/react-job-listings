import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import FilterBar from "./components/FilterBar";
import "./scss/App.scss";

import dummyData from "./assets/data/dummy-data";

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);
  // const [filters, setFilters] = useState([
  //   "test1",
  //   "test2",
  //   "test3",
  //   "test4",
  //   "test5",
  //   "test6",
  //   "test7",
  //   "test8",
  //   "test9",
  //   "test10",
  //   "test11",
  //   "test12",
  //   "test13",
  //   "test14",
  // ]);

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
