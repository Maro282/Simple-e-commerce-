import { addProduct } from "./storage.js";

const addBtn = document.getElementById("addbtn");

addBtn.addEventListener("click", () => {
  addProduct({
    id: Math.round(Math.random() * 10),
    name: "Trade",
    price: 30,
    quantity: 1,
    inStock: 20,
  });
});
console.log(`added to cart`);
