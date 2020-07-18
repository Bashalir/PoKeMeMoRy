import makePokemon from "./pokemon";

const makeMain = (pokemonHandler) => {
  let main = document.createElement("main");

  pokemonHandler.all().subscribe((pokemons) => {
    pokemons.map((pokemon) => {
      main.appendChild(makePokemon(pokemon.name));
    });
  });
  return main;
};

export default makeMain;
