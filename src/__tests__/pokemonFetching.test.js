import { PokemonHandler } from "../app/usecases/pokemon.handler";
import { PokemonBuilder } from "../app/usecases/pokemon.builder";
import { InMemoryPokemonLoader } from "../app/adapters/secondaries/inmemory/InMemoryPokemon.loader";

import makePokemon from "../card";
import makeMain from "../main";

describe("Pokemon handler fetches", () => {
  let pickachu;
  let salameche;

  beforeEach(() => {
    pickachu = new PokemonBuilder().build();
    salameche = new PokemonBuilder().withId(2).withName("salameche").build();
  });

  describe("A list ", () => {
    it("With zero pokemon if there is no pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler();
      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, []);
        done();
      });
    });

    it("With one pokemon if there is one pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler([pickachu]);
      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, [pickachu]);
        done();
      });
    });

    it("With two pokemon if there is one pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler([pickachu, salameche]);
      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, [pickachu, salameche]);
        done();
      });
    });

    const verifyListOfPokemons = (pokemons, expectedPokemons) => {
      expect(pokemons.length).toEqual(expectedPokemons.length);
      expectedPokemons.forEach((expectedPokemon, index) =>
        verifyOnePokemon(pokemons[index], expectedPokemon)
      );
    };
  });
  it("A details of one pokemon", (done) => {
    const pokemonHandler = createPokemonHandler([pickachu, salameche]);
    pokemonHandler.get(2).subscribe((pokemon) => {
      verifyOnePokemon(pokemon, salameche);
      done();
    });
  });

  it("Show one pokemon ", (done) => {
    const pokemonHandler = createPokemonHandler([pickachu, salameche]);
    pokemonHandler.get(2).subscribe((pokemon) => {
      expect(makePokemon(pokemon.name).innerHTML).toBe(pokemon.name);
      done();
    });
  });

  it("Show a two pokemons ", (done) => {
    const pokemonHandler = createPokemonHandler([pickachu, salameche]);
    expect(makeMain(pokemonHandler).innerHTML).toEqual(
      "<h2>pickachu</h2><h2>salameche</h2>"
    );
    done();
  });

  const createPokemonHandler = (pokemons) => {
    const pokemonSource = new InMemoryPokemonLoader(pokemons);
    const pokemonHandler = new PokemonHandler(pokemonSource);
    return pokemonHandler;
  };

  const verifyOnePokemon = (pokemon, expectedPokemon) => {
    expect(pokemon.id).toEqual(expectedPokemon.id);
    expect(pokemon.name).toEqual(expectedPokemon.name);
    expect(pokemon.img).toEqual(expectedPokemon.img);
  };
});
