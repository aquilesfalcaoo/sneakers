const cart = document.querySelector(".cart");

function showCart() {
  document.querySelector(".cart-content").classList.toggle("show");
}

cart.addEventListener("click", showCart);
