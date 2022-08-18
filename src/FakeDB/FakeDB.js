const getLocalStorage = () => {
  const getJSON = localStorage.getItem("shopping-cart");
  const getItem = JSON.parse(getJSON);
  return getItem;
};

const addToDB = (id) => {
  let shoppingCart = {};
  const exits = getLocalStorage();
  if (exits) {
    shoppingCart = exits;
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { addToDB, getLocalStorage };
