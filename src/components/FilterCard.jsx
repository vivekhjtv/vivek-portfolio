import React from 'react';

const FilterCard = ({ filterItem }) => {
  return (
    <div className="container text-focus-in filter_outer">
      <div className="Filter_outer d-flex flex-wrap justify-content-center">
        <button
          className="btn-filter"
          type="button"
          onClick={() => filterItem('html/css')}
        >
          HTML / CSS
        </button>
        <button
          className="btn-filter"
          type="button"
          onClick={() => filterItem('bootstrap')}
        >
          Bootstrap
        </button>
        <button
          className="btn-filter"
          type="button"
          onClick={() => filterItem('react')}
        >
          React
        </button>
        <button
          className="btn-filter"
          type="button"
          onClick={() => filterItem('all')}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
