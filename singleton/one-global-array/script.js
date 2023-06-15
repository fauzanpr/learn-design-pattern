import store from "./store";

const btnHello = document.getElementById("buttonHello");
const btnWorld = document.getElementById("buttonWorld");
const btnYay = document.getElementById("buttonYay");

btnHello.addEventListener("click", () => {
  store.addItem("Hello");
  console.log(store.getItem());
});

btnWorld.addEventListener("click", () => {
  store.addItem("World");
  console.log(store.getItem());
});

btnYay.addEventListener("click", () => {
  store.addItem("Yay");
  console.log(store.getItem());
});

