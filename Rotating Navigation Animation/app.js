const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");
const container = document.querySelector(".container");
openNav.addEventListener("click", () => {
  container.classList.add("show-nav");
});
closeNav.addEventListener("click", () => {
    container.classList.remove("show-nav");
  });