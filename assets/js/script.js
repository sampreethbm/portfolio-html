console.log("JS Loaded");


/* =====================
   DARK MODE
===================== */

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }

});


/* =====================
   FORM VALIDATION
===================== */

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        msg.textContent = "❌ All fields are required!";
        msg.style.color = "red";

    } else {

        msg.textContent = "✅ Message sent successfully!";
        msg.style.color = "green";

        form.reset();
    }

});


/* =====================
   PROJECT FILTER
===================== */

const filterBtns = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".projects-grid article");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const type = btn.getAttribute("data-filter");

        projects.forEach(project => {

            if (type === "all" || project.dataset.type === type) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


/* =====================
   SCROLL POP-UP ANIMATION
===================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {

    observer.observe(section);

});


/* =====================
   BACKGROUND PARTICLES
===================== */

const bg = document.querySelector(".bg-animation");

for (let i = 0; i < 40; i++) {

    const dot = document.createElement("span");

    dot.style.left = Math.random() * 100 + "%";
    dot.style.animationDelay = Math.random() * 20 + "s";
    dot.style.animationDuration = 15 + Math.random() * 20 + "s";

    bg.appendChild(dot);
}
