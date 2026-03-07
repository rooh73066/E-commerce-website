const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// const scrollAmount = 300; // how much to scroll per click
// const leftBtn = document.querySelector('.scroll-btn.left');
// const rightBtn = document.querySelector('.scroll-btn.right');
// const productCard = document.querySelector('.product-card');

// leftBtn.addEventListener('click', () => {
//     productCard.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// });

// rightBtn.addEventListener('click', () => {
//     productCard.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// });
