function SearchBar({ onSearch }) {
  return (
    <div className="searchBar">
      <input type="search" />
      <button onClick={onSearch} onChange={(e) => onSearch(e.target.value)}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
