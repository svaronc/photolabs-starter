import React from "react";

import "./SearchBar.scss";

export function SearchBar({ onSearch, searchValue }) {
  return (
    <>
      <input
        type="text"
        className="search-box"
        placeholder="Search images by City"
        value={searchValue}
        onChange={onSearch}
      />
    </>
  );
}
