import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input type="text" placeholder="Search Pokemon" onChange={handleChange} />
  );
};

export default SearchBar;
