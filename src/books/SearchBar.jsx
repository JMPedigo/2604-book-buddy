import { useState } from "react";
/** I need a search bar to search for a specific book title */
function SearchBar({ onSearch }) {
  const [error, setError] = useState(null);
  const [searchBook, setSearchBook] = useState("");
  const trySearch = (event) => {
    setSearchBook(event.target.value);
  };
  const trySubmit = (event) => {
    event.preventDefault();
    setError(null);
    onSearch(searchBook);
    setSearchBook("");
  };
  return (
    <form onSubmit={trySubmit}>
      <label htmlFor="searchBook">Search for a particular book</label>
      <input
        type="text"
        id="searchBook"
        value={searchBook}
        onChange={trySearch}
      />
      <button type="submit">Search</button>
      {error && <p role="alert">Book not present in library</p>}
    </form>
  );
}

export default SearchBar;
