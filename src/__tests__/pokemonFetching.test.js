import { PokemonHandler } from "../usecases/pokemon.handler";
import { PokemonLoader } from "../domain/loaders/PokemonLoarder";

describe("Pokemon handler fetches", () => {
  it("A list with zero pokemon if there is no pokemon in the source", (done) => {
    const pokemonSource = new InMemoryPokemonLoader();
    const pokemonHandler = new PokemonHandler(pokemonSource);

    pokemonHandler.all().subscribe((pokemons) => {
      expect(pokemons).toEqual([]);
      done();
    });
  });
});
