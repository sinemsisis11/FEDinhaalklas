
console.log("hi");

const menuOpenButton = document.querySelector("header > button:nth-of-type(2)");
const deNav = document.querySelector("header nav")


menuOpenButton.onclick = openMenu;


function openMenu() {
  deNav.classList.toggle ("toonMenu");
}


   // Elements for radio buttons
const lightModeRadio = document.getElementById('light-mode');
const darkModeRadio = document.getElementById('dark-mode');

// Function to set theme
function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }
  // Save the theme to localStorage
  localStorage.setItem('theme', theme);
}

// Check and apply the saved theme or system preference on load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      lightModeRadio.checked = true;
    } else {
      darkModeRadio.checked = true;
    }
  } else {
    // No saved theme, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      darkModeRadio.checked = true;
    } else {
      setTheme('light');
      lightModeRadio.checked = true;
    }
  }
}

// Event listeners for radio buttons
lightModeRadio.addEventListener('change', () => setTheme('light'));
darkModeRadio.addEventListener('change', () => setTheme('dark'));

// Load theme on page load
loadTheme();
