const toggleButton = document.getElementsByClassName(
  "header-menu__hamburger"
)[0];
const navbarLinks = document.getElementsByClassName("mobile-menu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("mobile-menu__active");
});
