import { PokemonHandler } from "../../app/usecases/pokemon.handler";
import { PokemonBuilder } from "../../app/usecases/pokemon.builder";
import { RESTPokemonLoader } from "../../app/adapters/secondaries/api/RESTPokemon.loader";
import { mapToPokemon } from "../../app/adapters/secondaries/api/RESTPokemon.mapper";
import { fakePokemon } from "../stubs/fakePokemon";
import axios from "axios";
import { of } from "rxjs";

describe("Integration | REST pokemon loader fetches", () => {
  let axiosFake = { get: null };

  it.skip("A list with some pokemons", (done) => {
    const expectedPokemon = new PokemonBuilder();
    const pokemonLoader = new RESTPokemonLoader(axiosFake);
    const pokemonHandler = new PokemonHandler(pokemonLoader);
    // const fakePokemonResponse = {
    //   id: 2,
    //   name: "salameche",
    //   img: "avatar",
    // };

    spyOn(axiosFake, "get").and.returnValue(of([fakePokemonResponse]));

    pokemonHandler.all().subscribe((pokemons) => {
      expect(pokemons).toEqual([expectedPokemon]);
      expect(axiosFake.get).toHaveBeenCalledTimes(1);
      expect(axiosFake.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      );
      done();
    });
  });

  it("A details of one pokemons", (done) => {
    const pokemonLoader = new RESTPokemonLoader();
    const pokemonHandler = new PokemonHandler(pokemonLoader);

    spyOn(pokemonHandler, "get").and.returnValue(of(mapToPokemon(fakePokemon)));
    pokemonHandler.get(0).subscribe((pokemons) => {
      expect(pokemons).toEqual(mapToPokemon(fakePokemon));
      done();
    });
  });
});
