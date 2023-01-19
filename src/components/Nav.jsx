import SearchBar from "./SearchBar";

export default function Nav({onSearch}) {

  return (
    <div className="nav">
      <div></div>
      <div></div>
      <div></div>
      <div className="navSearch">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}
