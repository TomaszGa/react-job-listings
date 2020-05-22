import React from "react";
import Job from "./Job";

const Jobs = ({ listings, addTag, filters }) => {
  return (
    <main className="jobs">
      {listings.map((data) => {
        const languages = data.languages || [];
        const tools = data.tools || [];
        const tagList = [data.role, data.level, ...languages, ...tools];
        for (let i = 0; i < filters.length; i++) {
          if (tagList.indexOf(filters[i]) === -1) return null;
        }
        return (
          <Job
            data={data}
            key={data.id}
            addTag={addTag}
            tagList={tagList}
          ></Job>
        );
      })}
    </main>
  );
};

export default Jobs;
