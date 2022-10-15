import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  for (let pokemon of props.pokemons) {
    if (pokemon.id < 10) {
      pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.id}.png`;
    } else if (pokemon.id > 9 && pokemon.id < 100) {
      pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemon.id}.png`;
    } else if (pokemon.id > 99) {
      pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
    }
  }

  return (
    <div className="Pokedex">
      {props.pokemons.map((pokemon, i) => (
        <Pokecard
          key={i}
          name={pokemon.name}
          type={pokemon.type}
          exp={pokemon.base_experience}
          img={pokemon.image}
        />
      ))}
    </div>
  );
}

export default Pokedex;
