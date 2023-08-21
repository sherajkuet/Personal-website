// JavaScript function to show/hide sections
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// Show the 'home' section by default
showSection('home');

