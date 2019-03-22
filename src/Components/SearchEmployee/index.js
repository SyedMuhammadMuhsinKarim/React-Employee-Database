import React from "react";

const SearchEmployee = ({ onSearch, searchTerm }) => (
  <div className="container">
    <form>
      <input
        type="text"
        placeholder="ملازم کو تلاش کریں"
        onChange={onSearch}
        value={searchTerm}
        className="form-control"
      />
    </form>
  </div>
);

export default SearchEmployee;
