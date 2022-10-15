import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

function Pokegame() {
  let hand1 = [];
  let hand2 = [...pokemons];

  while (hand1.length < hand2.length) {
    let randomIndex = Math.floor(Math.random() * hand2.length);
    let randomPokemon = hand2.splice(randomIndex, 1)[0];
    hand1.push(randomPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <h1>First Player</h1>
      <h2>
        Total expirence:{exp1},{exp1 > exp2 ? "You win" : "You lose"}
      </h2>
      <Pokedex pokemons={hand1} />
      <h1>Second Player</h1>
      <h2>
        Total expirence:{exp2},{exp1 < exp2 ? "You win" : "You lose"}
      </h2>
      <Pokedex pokemons={hand2} />
    </div>
  );
}

export default Pokegame;
