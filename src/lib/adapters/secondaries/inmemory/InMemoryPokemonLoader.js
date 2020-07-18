import { of, BehaviorSubject } from "rxjs";
import { Pokemon } from "../../../domain/entities/pokemon";

export class InMemoryPokemonLoader {
  constructor(pokemons = []) {
    this.pokemons$ = new BehaviorSubject(pokemons);
  }

  all() {
    return this.pokemons$;
  }
}
