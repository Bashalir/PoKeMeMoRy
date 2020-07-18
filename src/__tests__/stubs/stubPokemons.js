import { PokemonBuilder } from "../../app/usecases/pokemon.builder";

export const stubPokemons = () => {
  const pickachu = new PokemonBuilder().build();
  const salameche = new PokemonBuilder()
    .withId(2)
    .withName("salameche")
    .build();
  const bash = new PokemonBuilder().withId(3).withName("bash").build();

  return [pickachu, salameche, bash];
};
