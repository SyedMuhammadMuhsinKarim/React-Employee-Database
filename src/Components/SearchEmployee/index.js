import React from "react";

const SearchEmployee = ({ onSearch, searchTerm }) => (
  <div className="container">
    <form>
      <input
        type="text"
        placeholder="Searching Here..."
        onChange={onSearch}
        value={searchTerm}
        className="form-control"
      />
    </form>
  </div>
);

export default SearchEmployee;
