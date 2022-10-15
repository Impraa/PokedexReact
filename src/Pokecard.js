import "./Pokecard.css";

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <div className="Pokecard-image-holder">
        <img className="Pokecard-image" src={props.img} alt="" />
      </div>
      <h1 className="Pokecard-title">{props.name}</h1>
      <p>Type = {props.type}</p>
      <p>Experience: {props.exp}</p>
    </div>
  );
}

export default Pokecard;
