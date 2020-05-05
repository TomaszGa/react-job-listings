import React from "react";

const Job = ({ data }) => {
  const languages = data.languages || [];
  const tools = data.tools || [];
  const tagList = [data.role, data.level, ...languages, ...tools];
  // console.log(tagList);

  const modifierClass = data.featured ? "job-listing--featured" : null;

  return (
    <div className={`job-listing ${modifierClass ? modifierClass : ""}`}>
      <div className="job-listing__logo">
        <img src={process.env.PUBLIC_URL + data.logo} />
      </div>
      <div className="job-listing__details">
        <div className="job-listing__company">
          {data.company} {data.new ? <span>new</span> : null}
          {data.featured ? <span>featured</span> : null}
        </div>
        <div className="job-listing__title">{data.position}</div>
        <div className="job-listing__meta">
          <div className="job-listing__meta-item">{data.postedAt}</div>
          <div className="job-listing__meta-item">{data.contract}</div>
          <div className="job-listing__meta-item">{data.location}</div>
        </div>
      </div>
      <div className="job-listing__tags">
        {tagList.map((tag) => (
          <div className="job-listing__tag">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default Job;
