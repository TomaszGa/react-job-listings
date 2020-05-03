import React from "react";

const Jobs = ({ listings }) => {
  return (
    <>
      {listings.map((listing) => (
        <div>Listing</div>
      ))}
    </>
  );
};

export default Jobs;
