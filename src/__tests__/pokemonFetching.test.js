import { PokemonHandler } from "../lib/usecases/pokemon.handler";
import { Pokemon } from "../lib/domain/entities/pokemon";
import { PokemonLoader } from "../lib/domain/loaders/PokemonLoarder";
import { InMemoryPokemonLoader } from "../lib/adapters/secondaries/inmemory/InMemoryPokemonLoader";

describe("Pokemon handler fetches", () => {
  let pickachu;

  beforeEach(() => {
    pickachu = new Pokemon("pickachu");
  });

  describe("A list ", () => {
    it("With zero pokemon if there is no pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler();
      pokemonHandler.all().subscribe((pokemons) => {
        expect(pokemons).toEqual([]);
        done();
      });
    });

    it("With one pokemon if there is one pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler([pickachu]);
      pokemonHandler.all().subscribe((pokemons) => {
        expect(pokemons).toEqual([pickachu]);
        done();
      });
    });

    it("With two pokemon if there is one pokemon in the source", (done) => {
      const salameche = new Pokemon("salameche");
      const pokemonHandler = createPokemonHandler([pickachu, salameche]);
      pokemonHandler.all().subscribe((pokemons) => {
        expect(pokemons).toEqual([pickachu, salameche]);
        done();
      });
    });
  });

  const createPokemonHandler = (pokemons) => {
    const pokemonSource = new InMemoryPokemonLoader(pokemons);
    const pokemonHandler = new PokemonHandler(pokemonSource);
    return pokemonHandler;
  };
});
