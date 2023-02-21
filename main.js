const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const menuHamMenuIcon = document.querySelector(".menu");
const menuShopCarIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

//fetch
//import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1/products/";

let productList = [];
loadProducts();

function loadProducts() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", API, true);
  xhttp.setRequestHeader("contenet-type", "application/json");
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);

      renderProducts(response);
      response.forEach((element) => {
        if (element.category.name == "Shoes") {
          productList += element;
          //console.log(element);
        }
      });
      // renderProducts(productList);
      // console.log(response.category.name);
      renderProducts(response);
    }
  };
}

//agregar los eventos click a los
menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamMenuIcon.addEventListener("click", toggleMobileMenu);
menuShopCarIcon.addEventListener("click", toogleShopCarMenu);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toogleDesktopMenu() {
  const isAsideClose = shoppingCarContainer.classList.contains("inactive");
  if (!isAsideClose) {
    shoppingCarContainer.classList.toggle("inactive");
  }
  closeProductDetailAside();
  desktopMenu.classList.toggle("inactive");
}

//Implementación de la lógica: si el menú del carrito no esta cerrado(es decir, que está abierto). Entonces coloquele la clase inactive para que se cierre. de lo contrario aplique un toogle con la clase inactive para que aparezca o desaparesca el menú.
function toggleMobileMenu() {
  const asideClose = shoppingCarContainer.classList.contains("inactive");
  if (!asideClose) {
    shoppingCarContainer.classList.toggle("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toogleShopCarMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCarContainer.classList.toggle("inactive");
}

/*const menuHamMenuIcon = document.querySelector(".menu");
const menuShopCarIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");*/

function openProductDetailAside() {
  //menu

  shoppingCarContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
  desktopMenu.classList.add("inactive");
  selectedProduct();
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
  // while (productDetailContainer.firstChild) {
  //   productDetailContainer.removeChild(productDetailContainer.firstChild);
  // }
}

//por producto de los productos haga esto con cada uno.. Es basicamente lo que significa.
function renderProducts(products) {
  for (product of products) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.images);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.title;

    const productInfoDiv = document.createElement("div");
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //Se acomoda las etiquetas segun el padre y los hijos, es decir la maquetación.
    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

// Espera a que cargue todo para empezar a agregar los productos
document.addEventListener("DOMContentLoaded", function (event) {
  //renderProducts(productList);
  loadProducts;
  //getProductos();
  setTimeout(() => {
    //Filtra los productos
  }, 1000);
  //do work
});

// <div class="product-detail-close">
//   <img src="./icons/icon_close.png" alt="close">
// </div>

// <img
//   src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//   alt="bike">
// <div class="product-info">
//   <p>$35,00</p>
//   <p>Bike</p>
//   <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//   <button class="primary-button add-to-cart-button">
//     <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//     Add to cart
//   </button>
// </div>

function selectedProduct() {
  const divProduct = document.createElement("div");
  divProduct.classList.add("product-detail-close");

  const icoCloseProduct = document.createElement("img");
  icoCloseProduct.setAttribute("src", "./icons/icon_close.png alt=close");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.id);

  productDetailContainer.appendChild(productImg);
}
