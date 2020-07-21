import { PokemonHandler } from "./app/usecases/pokemon.handler";
import { stubPokemons } from "./__tests__/stubs/stubPokemons";
import { InMemoryPokemonLoader } from "./app/adapters/secondaries/inmemory/InMemoryPokemon.loader";
import { RESTPokemonLoader } from "./app/adapters/secondaries/api/RESTPokemon.loader";

import header from "./header";
import makeMain from "./main";

//const pokemonSource = new InMemoryPokemonLoader(stubPokemons());
const pokemonSource = new RESTPokemonLoader();
const pokemonHandler = new PokemonHandler(pokemonSource);

document.body.appendChild(header);
document.body.appendChild(makeMain(pokemonHandler));
