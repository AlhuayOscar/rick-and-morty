import { useState } from "react";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className="searchBar">
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
