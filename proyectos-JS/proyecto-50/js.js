"use strict";
window.addEventListener("load", () => {
  let layoutProducts = document.querySelector(".layout__products");
  let cart = document.querySelector(".layout__cart");
  let cartProductsContainer = document.querySelector(".cart__products");
  let cartTotalPrice = document.querySelector(".total__price");
  let cartIcon = document.querySelector(".cart__ico");

  let products = [
    {
      id: 1,
      title: "Camiseta",
      img: "img/product-1.jpg",
      stock: 5,
      price: 14.99,
    },
    {
      id: 2,
      title: "Cámara",
      img: "img/product-2.jpg",
      stock: 7,
      price: 20.5,
    },
    {
      id: 3,
      title: "Pórtatil",
      img: "img/product-3.jpg",
      stock: 4,
      price: 12.6,
    },
    {
      id: 4,
      title: "Zapatillas",
      img: "img/product-4.jpg",
      stock: 10,
      price: 40.8,
    },
  ];

  let cartProducts = [];

  function showProducts() {
    layoutProducts.innerHTML = "";
    products.forEach((product) => {
      layoutProducts.innerHTML += `
        <article class="products__product">
            <div class="product__container-img">
                <img class="product__img" src="${product.img}" alt="${
        product.title
      }"/>
            </div>
            <div class="product__title">${product.title}</div>
            <div class="product__price">${product.price.toFixed(2)}€</div>
            <button class="product__btn" data-id="${
              product.id
            }">Comprar</button>
        </article>
      `;
    });
  }

  function updateCart() {
    cartProductsContainer.innerHTML = "";
    let total = 0;

    cartProducts.forEach((cartProduct, index) => {
      cartProductsContainer.innerHTML += `
        <div class="cart__product">
            <span>${cartProduct.title}</span>
            <span>${cartProduct.quantity}</span>
            <span>${(cartProduct.price * cartProduct.quantity).toFixed(
              2
            )}€</span>
            <button class="cart__product-decrease" data-index="${index}">-</button>
            <button class="cart__product-increase" data-index="${index}">+</button>
            <button class="cart__product-remove" data-index="${index}">Eliminar</button>
        </div>
      `;
      total += cartProduct.price * cartProduct.quantity;
    });

    cartTotalPrice.textContent = total.toFixed(2) + "€";
  }

  function addToCart(productId) {
    let product = products.find((p) => p.id == productId);
    if (product && product.stock > 0) {
      let cartProduct = cartProducts.find((p) => p.id == productId);
      if (cartProduct) {
        if (cartProduct.quantity < product.stock) {
          cartProduct.quantity++;
        } else {
          alert("No hay suficiente stock disponible.");
        }
      } else {
        cartProducts.push({ ...product, quantity: 1 });
      }
      updateCart();
    } else {
      alert("Producto no disponible.");
    }
  }

  function decreaseQuantity(index) {
    let cartProduct = cartProducts[index];
    if (cartProduct.quantity > 1) {
      cartProduct.quantity--;
    } else {
      cartProducts.splice(index, 1);
    }
    updateCart();
  }

  function increaseQuantity(index) {
    let cartProduct = cartProducts[index];
    let product = products.find((p) => p.id == cartProduct.id);
    if (cartProduct.quantity < product.stock) {
      cartProduct.quantity++;
      updateCart();
    } else {
      alert("No hay suficiente stock disponible.");
    }
  }

  function removeFromCart(index) {
    cartProducts.splice(index, 1);
    updateCart();
  }

  layoutProducts.addEventListener("click", (e) => {
    if (e.target.classList.contains("product__btn")) {
      let productId = e.target.getAttribute("data-id");
      addToCart(productId);
    }
  });

  cartProductsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart__product-decrease")) {
      let index = e.target.getAttribute("data-index");
      decreaseQuantity(index);
    } else if (e.target.classList.contains("cart__product-increase")) {
      let index = e.target.getAttribute("data-index");
      increaseQuantity(index);
    } else if (e.target.classList.contains("cart__product-remove")) {
      let index = e.target.getAttribute("data-index");
      removeFromCart(index);
    }
  });

  cartIcon.addEventListener("click", () => {
    cart.classList.toggle("layout__cart--hide");
  });

  showProducts();
});
