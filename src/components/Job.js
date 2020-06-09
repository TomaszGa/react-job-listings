import React from "react";

const Job = ({ data, addTag, tagList }) => {
  const modifierClass = data.featured && "job-listing--featured";
  console.log(modifierClass);
  return (
    <li className={`job-listing ${modifierClass ? modifierClass : ""}`}>
      <section className="job-listing__logo">
        <img
          src={process.env.PUBLIC_URL + data.logo}
          alt={`${data.company} Logo`}
        />
      </section>
      <section className="job-listing__details">
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
        <ul className="job-listing__meta">
          <li className="job-listing__meta-item">{data.postedAt}</li>
          <li className="job-listing__meta-item">{data.contract}</li>
          <li className="job-listing__meta-item">{data.location}</li>
        </ul>
      </section>
      <section className="job-listing__tags">
        <ul>
          {tagList.map((tag) => (
            <li className="job-listing__tag">
              <button
                className="job-listing__tag-button"
                key={tag}
                onClick={() => addTag(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default Job;
