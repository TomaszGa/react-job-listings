import React from "react";

const Job = ({ data, addTag, tagList }) => {
  const modifierClass = data.featured ? "job-listing--featured" : null;

  return (
    <div className={`job-listing ${modifierClass ? modifierClass : ""}`}>
      <div className="job-listing__logo">
        <img
          src={process.env.PUBLIC_URL + data.logo}
          alt={`${data.company} Logo`}
        />
      </div>
      <div className="job-listing__details">
        <div className="job-listing__company">
          {data.company}{" "}
          {data.new ? (
            <span className="job-listing__highlight job-listing__highlight--new">
              <span>new!</span>
            </span>
          ) : null}
          {data.featured ? (
            <span className="job-listing__highlight job-listing__highlight--featured">
              <span>featured</span>
            </span>
          ) : null}
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
          <button
            className="job-listing__tag"
            key={tag}
            onClick={() => addTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
