const menu = document.querySelector(".icon a");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  nav.classList.toggle("slider");
});
