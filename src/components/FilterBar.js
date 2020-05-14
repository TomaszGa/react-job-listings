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
                <div
                  className="filter__tag-remove"
                  onClick={() => {
                    removeFilter(filter);
                  }}
                >
                  <img src={closeButton} />
                </div>
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
