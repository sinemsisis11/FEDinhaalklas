
console.log("hi");

const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("header nav")


menuOpenButton.onclick = openMenu;


function openMenu() {
  deNav.classList.add ("toonMenu");
}
