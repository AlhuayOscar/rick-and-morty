import SearchBar from "./SearchBar";

export default function Nav() {

  return (
    <div className="nav">
      <div></div>
      <div></div>
      <div></div>
      <div className="navSearch">
        <SearchBar onSearch={(characterID) => alert(characterID)} />
      </div>
    </div>
  );
}
