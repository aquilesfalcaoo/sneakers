//* Cart

const cart = document.querySelector(".cart");

function showCart() {
  document.querySelector(".cart-content").classList.toggle("show");
}

cart.addEventListener("click", showCart);

//* Product Image

const items_product = document.querySelectorAll(".item-colections");
const imagem_principal = document.querySelector("#main_image");

items_product.forEach((el) => {
  el.addEventListener("click", () => {
    for (let i = 0; i < items_product.length; i++) {
      if (items_product[i].classList.contains("active")) {
        items_product[i].classList.remove("active");
        el.classList.add("active");
      }
      if (items_product[0].classList.contains("active")) {
        imagem_principal.src = "./assets/images/image-product-1.jpg";
      } else if (items_product[1].classList.contains("active")) {
        imagem_principal.src = "./assets/images/image-product-2.jpg";
      } else if (items_product[2].classList.contains("active")) {
        imagem_principal.src = "./assets/images/image-product-3.jpg";
      } else {
        imagem_principal.src = "./assets/images/image-product-4.jpg";
      }
    }
  });
});

//* Counter Product

const button_for_minus = document.querySelector("#minus_button");
const button_for_more = document.querySelector("#more_button");
const quantity = document.querySelector(".quantity");

let count_quantity = 0;

button_for_more.addEventListener("click", () => {
  if (count_quantity >= 0) {
    count_quantity++;
    quantity.innerHTML = count_quantity;
  }
});
button_for_minus.addEventListener("click", () => {
  if (count_quantity > 0) {
    count_quantity--;
    quantity.innerHTML = count_quantity;
  }
});
