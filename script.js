// Sticky Navbar & Scroll Button
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side Navigation Logic
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let body = document.querySelector("body");

menuBtn.onclick = function() {
    navBar.classList.add("active");
    body.style.overflow = "hidden"; // Prevent scrolling when menu open
}

const hideNav = () => {
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}

cancelBtn.onclick = hideNav;

// Close menu when clicking a link
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach(link => {
    link.addEventListener("click", hideNav);
});
