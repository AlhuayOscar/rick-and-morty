import Card from "./Card";

function Cards({ characters, onClose }) {
  // [{...}, {...}, {...}]

  return (
    <div className="otherCards">
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
