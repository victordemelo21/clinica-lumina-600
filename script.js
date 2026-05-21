const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link, .nav-button");
const navBar = document.querySelector(".nav-bar");
const faqItems = document.querySelectorAll(".faq-item");
const revealItems = document.querySelectorAll(".reveal");

toggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("scroll", () => {
    navBar.classList.toggle("is-scrolled", window.scrollY > 16);
});

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        item.setAttribute("aria-expanded", isOpen);
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));
