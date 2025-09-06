// ==== Read cart array from local storage ======

export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ====== Add product function ======
export function addProduct(product) {
  let cart = getDataFromLocalStorage();
  const isInCart = cart.find((p) => product.id == p.id);
  if (isInCart) {
    // we will increase the Quantity
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
