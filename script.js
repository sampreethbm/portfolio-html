// Select button and body
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme on click
toggleBtn.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    // Check current mode
    if (body.classList.contains("dark-mode")) {

        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");

    } else {

        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");

    }

});
