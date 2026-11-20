
// Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close Mobile Menu After Selecting a Link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkModeEnabled ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
    );
});

// Contact Form Validation and Feedback
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formFeedback.textContent = "Please complete all fields.";
        return;
    }

    formFeedback.textContent =
        "Thank you, " + name + "! Your form was completed successfully.";

    contactForm.reset();
});
