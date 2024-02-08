import React from "react";

import "./SearchBar.scss";

export function SearchBar({ onSearch, searchValue }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchInput"
        placeholder="Search images by City"
        value={searchValue}
        onChange={onSearch}
      />
    </div>
  );
}
