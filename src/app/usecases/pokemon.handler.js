export class PokemonHandler {
  constructor(pokemonSource) {
    this.pokemonSource = pokemonSource;
  }

  all() {
    return this.pokemonSource.all();
  }

  get(id) {
    return this.pokemonSource.get(id);
  }
}
