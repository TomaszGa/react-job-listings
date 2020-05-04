import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import "./App.scss";

import dummyData from "./assets/data/dummy-data";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    //simulate asynchronous API call
    setTimeout(() => {
      setListings(dummyData);
    }, 200);
  }, []);

  return (
    <>
      <Header />
      <Jobs listings={listings} />
    </>
  );
}

export default App;
