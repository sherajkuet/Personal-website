// JavaScript to toggle the visibility of the navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleNav");
    const navbar = document.getElementById("navbar");

    toggleButton.addEventListener("click", function () {
        if (navbar.style.display === "block") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    });
});
