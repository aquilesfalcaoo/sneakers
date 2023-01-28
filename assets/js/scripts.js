//* Cart

const cart = document.querySelector(".cart");

function showCart() {
  document.querySelector(".cart-content").classList.toggle("show");
}

cart.addEventListener("click", showCart);

//* Product Image

const items_product = document.querySelectorAll(".item-colections");
const imagem_principal = document.querySelector("#main_image");
const images = {
  image_1: "./assets/images/image-product-1.jpg",
  image_2: "./assets/images/image-product-2.jpg",
  image_3: "./assets/images/image-product-3.jpg",
  image_4: "./assets/images/image-product-4.jpg",
};

items_product.forEach((el) => {
  el.addEventListener("click", () => {
    for (let i = 0; i < items_product.length; i++) {
      if (items_product[i].classList.contains("active")) {
        items_product[i].classList.remove("active");
        el.classList.add("active");
      }
      if (items_product[0].classList.contains("active")) {
        imagem_principal.src = images.image_1;
      } else if (items_product[1].classList.contains("active")) {
        imagem_principal.src = images.image_2;
      } else if (items_product[2].classList.contains("active")) {
        imagem_principal.src = images.image_3;
      } else {
        imagem_principal.src = images.image_4;
      }
    }
  });
});

//* Counter Product

const quantity = document.querySelectorAll(".botoes_quantidade");
const count = document.querySelector(".quantity");
const quantity_cart = document.querySelector("#quantity_cart");
const total_sum = document.querySelector("#total_sum");
let count_quantity = 0;
quantity.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "more_button" && count_quantity >= 0) {
      count_quantity++;
      count.innerHTML = count_quantity;
      quantity_cart.innerHTML = count_quantity;
      total_sum.innerHTML = `$ ${(125 * count_quantity).toFixed(2)}`;
    } else if (button.id == "minus_button" && count_quantity > 0) {
      count_quantity--;
      count.innerHTML = count_quantity;
      quantity_cart.innerHTML = count_quantity;
      total_sum.innerHTML = `$ ${(125 * count_quantity).toFixed(2)}`;
    }
  });
});

//* Add a cart

const addToCart = document.querySelector(".addCart");
const countProduct = document.querySelector(".count-product");
const cartEmptyMessage = document.querySelector(".cart-text");
const cartProduct = document.querySelector(".cart-product");
const productDelete = document.querySelector("#delete");

let incrementProduct = 0;

function addProduct() {
  countProduct.style.display = "block";
  incrementProduct++;
  countProduct.innerHTML = incrementProduct;
}

function emptyCart() {
  cartEmptyMessage.style.display = "none";
}

function showProduct() {
  cartProduct.style.display = "block";
}

function deleteProduct() {
  cartProduct.style.display = "none";
  emptyCart();
}

productDelete.addEventListener("click", () => {
  deleteProduct();
  cartEmptyMessage.style.display = "block";
  incrementProduct = 0;
  countProduct.innerHTML = incrementProduct;
});

addToCart.addEventListener("click", () => {
  if (count_quantity == 0) {
    alert("A quantidade do produto não pode ser 0.");
  } else {
    addProduct();
    emptyCart();
    showProduct();
  }
});
