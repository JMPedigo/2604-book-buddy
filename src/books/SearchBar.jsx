import React, { useState } from "react";
/** I need a search bar to search for a specific book title */
function SearchBar({ onSearch }) {
  const [searchBook, setSearchBook] = useState("");
  const handleChange = (event) => {
    setSearchBook(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchBook);
    setSearchBook("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchBook">Search for a particular book</label>
      <input
        type="text"
        id="searchBook"
        value={searchBook}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
