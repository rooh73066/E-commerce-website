const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const leftArrow = document.querySelector(".carousel-arrow.left");
const rightArrow = document.querySelector(".carousel-arrow.right");
const productCard = document.querySelector(".product-card");

const scrollAmount = 300; // pixels to scroll per click

leftArrow.addEventListener("click", () => {
    productCard.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
rightArrow.addEventListener("click", () => {
    productCard.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

