const burger = document.querySelector(".burger");
const list = document.querySelector(".list");
burger.addEventListener("click", () => {
  list.classList.toggle("active-nav");
});
