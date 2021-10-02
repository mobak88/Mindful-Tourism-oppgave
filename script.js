const toggleButton = document.getElementsByClassName(
  "header-menu__hamburger"
)[0];
const navbarLinks = document.getElementsByClassName("mobile-menu")[0];
const form = document.getElementsByClassName("contact-form");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle("mobile-menu__active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
