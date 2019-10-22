import React from "react";

const Filters = props => {
  const { getUserQuery, query } = props;
  return (
    <div>
      <input
        className="app_filters"
        type="text"
        onChange={getUserQuery}
        value={query}
      />
    </div>
  );
};

export default Filters;
