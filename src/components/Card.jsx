function Card({ name, gender, onClose, species, image }) {
  //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
  return (
    <div className="cardContainer">
      <div className="cardInfo">
        <button onClick={onClose}>X</button>
        <div className="cardImg">
          <img src={image} alt={name} />
          <p className="name">{name}</p>
        </div>
        <div className="charInfo">
          <p className="gender">{gender}</p>
          <p className="species">{species}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
