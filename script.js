// console.log("active");

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navMobile = document.querySelector(".nav_mobile");

// let isOpen = false;

menu.addEventListener("click", () => {
  navMobile.setAttribute("style", "display: block");
});

close.addEventListener("click", () => {
  navMobile.setAttribute("style", "display: none");
});
