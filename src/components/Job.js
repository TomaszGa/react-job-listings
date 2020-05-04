import React from "react";

const Job = ({ data }) => {
  const languages = data.languages || [];
  const tools = data.tools || [];
  const tagList = [data.level, data.role, ...languages, ...tools];
  // console.log(tagList);

  const modifierClass = data.featured ? "job-listing--featured" : null;

  return (
    <div className={`job-listing ${modifierClass}`}>
      <div className="job-listing__logo">
        <img src={process.env.PUBLIC_URL + data.logo} />
      </div>
      <div className="job-listing__details">
        <div className="job-listing__company">{data.company}</div>
        <div className="job-listing__title">{data.position}</div>
        <div className="job-listing__meta">
          <div className="job-listing__meta-item">{data.postedAt}</div>
          <div className="job-listing__meta-item">{data.contract}</div>
          <div className="job-listing__meta-item">{data.location}</div>
        </div>
      </div>
      <div className="job-listing__tools">
        {tagList.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default Job;
