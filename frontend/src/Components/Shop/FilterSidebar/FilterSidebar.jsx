import React from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ setFilter }) => {
  return (
    <aside className="filter-sidebar">
      <h3>Categories</h3>
      <ul>
        <li onClick={() => setFilter("All")}>All</li>
        <li onClick={() => setFilter("Bottle Art")}>Bottle Art</li>
        <li onClick={() => setFilter("Wall Art")}>Wall Art</li>
        <li onClick={() => setFilter("Other")}>Other</li>
      </ul>
    </aside>
  );
};

export default FilterSidebar;
