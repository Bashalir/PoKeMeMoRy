import { Pokemon } from "../domain/entities/pokemon";

export class PokemonBuilder {
  constructor(id = 1, name = "pickachu", img = "avatar") {
    this.id = id;
    this.name = name;
    this.img = img;
  }

  withId(id) {
    this.id = id;
    return this;
  }
  withName(name) {
    this.name = name;
    return this;
  }
  withImg(img) {
    this.img = img;
    return this;
  }

  build() {
    return new Pokemon(this.id, this.name, this.img);
  }
}
