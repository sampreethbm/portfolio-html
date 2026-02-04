/* DARK MODE */
console.log("JS Loaded");

const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});


/* FORM VALIDATION */

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        msg.textContent = "❌ Please fill all fields";
        msg.style.color = "red";

    } else {

        msg.textContent = "✅ Message sent successfully";
        msg.style.color = "green";

        form.reset();
    }
});


/* PROJECT FILTER */

const buttons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".projects-grid article");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const type = btn.dataset.filter;

        projects.forEach(project => {

            if (type === "all" || project.dataset.type === type) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


/* BACKGROUND PARTICLES */

const bg = document.querySelector(".bg-animation");

for (let i = 0; i < 40; i++) {

    const dot = document.createElement("span");

    dot.style.left = Math.random() * 100 + "%";
    dot.style.animationDelay = Math.random() * 20 + "s";
    dot.style.animationDuration = 15 + Math.random() * 20 + "s";

    bg.appendChild(dot);
}
/* SCROLL ANIMATION */

const allSections = document.querySelectorAll("section");

const revealSection = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

allSections.forEach(section => {
    revealSection.observe(section);
});

