import Card from "./card";

const makeMain = (pokemonHandler) => {
  let main = document.createElement("main");
  pokemonHandler.get(1).subscribe((pokemon) => {
    main.appendChild(Card(pokemon));
  });
  pokemonHandler.get(2).subscribe((pokemon) => {
    main.appendChild(Card(pokemon));
  });
  pokemonHandler.get(58).subscribe((pokemon) => {
    main.appendChild(Card(pokemon));
  });
  return main;
};

export default makeMain;
