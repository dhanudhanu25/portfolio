// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }
});

// Typing Effect
const roles = [
    "Computer Science Engineer",
    "Full Stack Developer",
    "Java Programmer",
    "MERN Stack Developer",
    "MongoDB Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-text h2");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        roleElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Reveal Animation
const revealElements = document.querySelectorAll(
    ".card, .project, .box, .about-container"
);

function reveal() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";
});

window.addEventListener("scroll", reveal);

reveal();

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});