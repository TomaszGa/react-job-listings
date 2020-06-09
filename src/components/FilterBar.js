import React from "react";

import closeButton from "../assets/ui/icon-x.png";

const FilterBar = ({ filters, clearFilters, removeFilter }) => {
  const modifierClass = filters.length && "filter--active";
  console.log(modifierClass);
  return (
    <section className={`filter ${modifierClass ? modifierClass : ""}`}>
      <div className="filter__bar">
        <div className="filter__bar-content">
          <ul className="filter__tags">
            {filters.map((filter) => (
              <li className="filter__tag" key={filter}>
                <div className="filter__tag-name">{filter}</div>
                <button
                  className="filter__tag-remove"
                  aria-label={`remove ${filter} filter`}
                  onClick={() => {
                    removeFilter(filter);
                  }}
                >
                  <img src={closeButton} alt="close button" />
                </button>
              </li>
            ))}
          </ul>
          <button className="filter__clear" onClick={() => clearFilters()}>
            Clear
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
