import React from "react";

const Filters = props => {
  const { getUserQuery, query } = props;
  return (
    <div className="app_filters">
      <input type="text" onChange={getUserQuery} value={query} />
    </div>
  );
};

export default Filters;
