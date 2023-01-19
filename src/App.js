import "./App.css";
import Cards from "./components/Cards.jsx";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div>
      <div className="App" style={{ padding: "25px" }}>
        <section id="navbar">
          <Nav onSearch={onSearch} />
          <hr />
        </section>
        <section id="moreCards">
          <Cards onClose={onClose} characters={characters} />
          <hr />
        </section>
      </div>
    </div>
  );
}

export default App;
