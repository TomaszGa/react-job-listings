import React from "react";

import closeButton from "../assets/ui/icon-x.png";

const FilterBar = ({ filters, clearFilters, removeFilter }) => {
  const modifierClass = filters.length ? "filter--active" : null;

  return (
    <div className={`filter ${modifierClass ? modifierClass : ""}`}>
      <div className="filter__bar">
        <div className="filter__bar-content">
          <div className="filter__tags">
            {filters.map((filter) => (
              <div className="filter__tag" key={filter}>
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
              </div>
            ))}
          </div>
          <button className="filter__clear" onClick={() => clearFilters()}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
