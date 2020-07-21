import axios from "axios";

import { BehaviorSubject, forkJoin } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { from } from "rxjs";

import { mapToPokemon } from "./RESTPokemon.mapper";

export class RESTPokemonLoader {
  constructor(pokemons = []) {
    this.pokemons$ = new BehaviorSubject(pokemons);
  }

  all() {}

  get(id) {
    const request = (url) => from(axios.get(url).then((res) => res.data));
    return request(
      "https://pokeapi.co/api/v2/pokemon?limit=1&offset=" + id
    ).pipe(
      switchMap((response) => forkJoin(request(response.results[0].url))),
      map((res) => mapToPokemon(res[0]))
    );
  }
}
