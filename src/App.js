import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import FilterBar from "./components/FilterBar";
import "./scss/App.scss";

import dummyData from "./assets/data/dummy-data";

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    //simulate asynchronous API call
    setTimeout(() => {
      setListings(dummyData);
    }, 200);
  }, []);

  return (
    <>
      <Header />
      <FilterBar filters={filters} />
      <button
        onClick={() => {
          setFilter(["test", "wow", "nice"]);
        }}
      >
        Filter
      </button>
      <button
        onClick={() => {
          setFilter([]);
        }}
      >
        Filter remove
      </button>
      <Jobs listings={listings} />
    </>
  );
}

export default App;
