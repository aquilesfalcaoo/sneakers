const cart = document.querySelector(".cart");
const items_product = document.querySelectorAll(".item-colections");
const imagem_principal = document.querySelector("#main_image");
const quantity = document.querySelector(".quantity");

let inputValue = 0;

function showCart() {
  document.querySelector(".cart-content").classList.toggle("show");
}

function increaseQuantity() {
  inputValue++;
  quantity.value = inputValue;
}

function decreaseQuantity() {
  inputValue--;
  quantity.value = inputValue;
  if (inputValue < 0) {
    alert("Não é possível a quantidade ser menor que 0");
    document.querySelector(".quantity").value = 0;
  }
}

cart.addEventListener("click", showCart);

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
