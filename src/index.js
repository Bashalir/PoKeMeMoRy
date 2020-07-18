import { PokemonHandler } from "./app/usecases/pokemon.handler";
import { stubPokemons } from "./__tests__/stubs/stubPokemons";
import { InMemoryPokemonLoader } from "./app/adapters/secondaries/inmemory/InMemoryPokemonLoader";
import header from "./header";
import makeMain from "./main";

const pokemonSource = new InMemoryPokemonLoader(stubPokemons());
const pokemonHandler = new PokemonHandler(pokemonSource);

document.body.appendChild(header);
document.body.appendChild(makeMain(pokemonHandler));
