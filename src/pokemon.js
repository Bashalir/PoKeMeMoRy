// take a str, the pokemon label and return a element
/**
 *
 * @param {string} pokemonName
 * @returns {Element}
 */
const makePokemon = (pokemonName) => {
  const pokemonLabel = pokemonName;
  const label = document.createElement("h2");
  label.innerHTML = pokemonLabel;

  return label;
};

export default makePokemon;
