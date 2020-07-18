export class PokemonHandler {
  constructor(pokemonSource) {
    this.pokemonSource = pokemonSource;
  }

  all() {
    return this.pokemonSource.all();
  }
}
