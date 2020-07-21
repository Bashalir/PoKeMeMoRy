import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

export class InMemoryPokemonLoader {
  constructor(pokemons = []) {
    this.pokemons$ = new BehaviorSubject(pokemons);
  }

  all() {
    return this.pokemons$;
  }

  get(id) {
    return this.pokemons$.pipe(
      map((pokemons) => pokemons.filter((pokemon) => pokemon.id === id)[0])
    );
  }
}
