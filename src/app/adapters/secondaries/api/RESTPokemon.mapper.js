import { PokemonBuilder } from "../../../usecases/pokemon.builder";

export const mapToPokemon = (pokemon) => {
  return new PokemonBuilder()
    .withId(pokemon.id)
    .withName(pokemon.name)
    .withImg(pokemon.sprites.front_default);
};
