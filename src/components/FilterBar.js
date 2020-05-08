import React from "react";

const FilterBar = ({ filters, clearFilters }) => {
  const modifierClass = filters.length ? "filter--active" : null;

  return (
    <div className={`filter ${modifierClass ? modifierClass : ""}`}>
      <div className="filter__bar">
        <div className="filter__bar-content">
          <div className="filter__tags">
            {filters.map((filter) => (
              <div className="filter__tag" key={filter}>
                {filter}
              </div>
            ))}
          </div>
          <div className="filter__clear" onClick={() => clearFilters()}>
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
