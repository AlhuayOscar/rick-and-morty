import "./App.css";
import Cards from "./components/Cards.jsx";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [characters, setCharacters] = useState([
    {
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ]);
  
  return (
    <div className="background">
      <div className="App" style={{ padding: "25px" }}>
        <section id="navbar">
          <Nav />
          <hr />
        </section>
        <section id="moreCards">
          <div>
            <Cards characters={characters} />
          </div>
          <hr />
        </section>
      </div>
    </div>
  );
}

export default App;
