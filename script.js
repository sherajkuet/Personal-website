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

    // Increment visitor count
    incrementVisitorCount();
}

// Show the 'home' section by default
showSection('home');

// JavaScript function to increment the visitor count
function incrementVisitorCount() {
    var visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        var currentCount = parseInt(visitorCountElement.innerText.split(': ')[1]);
        if (!isNaN(currentCount)) {
            visitorCountElement.innerText = 'Visitors: ' + (currentCount + 1);
        } else {
            visitorCountElement.innerText = 'Visitors: 1'; // Set initial count if NaN
        }
    }
}


