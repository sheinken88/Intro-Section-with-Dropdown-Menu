const features = document.getElementById("features");
const company = document.getElementById("company");
const expandedMenu = document.querySelector(".expanded-menu");

const mobileMenu = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".close");

features.addEventListener("click", () => {
  expandedMenu.classList.toggle("display-none-desktop");
});

mobileMenu.addEventListener("click", () => {
  mainNav.classList.toggle("display-none-mobile");
});

closeBtn.addEventListener("click", () => {
  mainNav.classList.toggle("display-none-mobile");
});

features.addEventListener("click", () => {
  expandedMenu.classList.toggle("display-none-mobile");
});
