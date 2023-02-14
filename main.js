const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogleDesktopMenu);

console.log(menuEmail);

function toogleDesktopMenu() {
  console.log("click");
  desktopMenu.classList.toggle("inactive");
}
