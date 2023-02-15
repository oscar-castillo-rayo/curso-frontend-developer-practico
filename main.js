const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamMenuIcon = document.querySelector(".menu");
const menuShopCarIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
const cardsContainer = document.querySelector(".cards-container");

//agregar los eventos click a los
menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamMenuIcon.addEventListener("click", toggleMobileMenu);
menuShopCarIcon.addEventListener("click", toogleShopCarMenu);

function toogleDesktopMenu() {
  const asideClose = shoppingCarContainer.classList.contains("inactive");
  if (!asideClose) {
    shoppingCarContainer.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const asideClose = shoppingCarContainer.classList.contains("inactive");
  //Implementación de la lógica: si el menú del carrito no esta cerrado(es decir, que está abierto). Entonces coloquele la clase inactive para que se cierre. de lo contrario aplique un toogle con la clase inactive para que aparezca o desaparesca el menú.
  if (!asideClose) {
    shoppingCarContainer.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toogleShopCarMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClose) {
    mobileMenu.classList.toggle("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }

  shoppingCarContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 500,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computadora",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//por producto de los productos haga esto con cada uno.. Es basicamente lo que significa.
function renderProducts(products) {
  for (product of products) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

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

renderProducts(productList);
