
console.log("hi");

const menuOpenButton = document.querySelector("header > button:nth-of-type(2)");
const deNav = document.querySelector("header nav")


menuOpenButton.onclick = openMenu;


function openMenu() {
  deNav.classList.toggle ("toonMenu");
}


   // Select the radio buttons
const lightModeRadio = document.getElementById('light-mode');
const darkModeRadio = document.getElementById('dark-mode');

// Function to apply the theme
function applyTheme() {
  if (darkModeRadio.checked) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
}

// Add event listeners to the radio buttons
lightModeRadio.addEventListener('change', applyTheme);
darkModeRadio.addEventListener('change', applyTheme);

// Apply the default theme based on the current selection
applyTheme();
