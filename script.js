// Add dynamic publications to the publications section
const publications = [
    "Publication 1",
    "Publication 2",
    "Publication 3"
    // Add more publications as needed
];

const publicationList = document.getElementById("publication-list");
publications.forEach(publication => {
    const publicationItem = document.createElement("li");
    publicationItem.textContent = publication;
    publicationList.appendChild(publicationItem);
});

// Handle contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can implement sending the form data to a server or perform other actions here

    // Clear the form fields after submission
    contactForm.reset();
});
