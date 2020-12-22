const openMenuButton = document.querySelector(".menu-icon");
const closeMenuButton = document.querySelector(".close-btn");

const menu = document.querySelector(".menu");

const toggleMenu = () => menu.classList.toggle("open");
openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
