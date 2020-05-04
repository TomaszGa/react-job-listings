import React from "react";
import Job from "./Job";

const Jobs = ({ listings }) => {
  return (
    <main className="jobs">
      {listings.map((listing) => (
        <Job data={listing} key={listing.id}></Job>
      ))}
    </main>
  );
};

export default Jobs;
