// take a object Pokemon, and return a card with name and avatar
/**
 *
 * @param {Object: Pokemon} pokemon
 * @returns {Element}
 */
const Card = (pokemon) => {
  const card = document.createElement("div");
  const label = document.createElement("h2");
  const avatar = document.createElement("img");
  avatar.src = pokemon.img;
  avatar.height = 200;
  label.innerHTML = pokemon.name;

  card.appendChild(label);
  card.appendChild(avatar);

  return card;
};

export default Card;
