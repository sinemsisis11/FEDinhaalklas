
console.log("hi");

const menuOpenButton = document.querySelector("header > button:nth-of-type(2)");
const deNav = document.querySelector("header nav")


menuOpenButton.onclick = openMenu;


function openMenu() {
  deNav.classList.toggle ("toonMenu");
}




