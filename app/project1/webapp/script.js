// Show the "About Me" section by default
document.addEventListener('DOMContentLoaded', function () {
    toggleSection('about');
});

function toggleSection(sectionId, linkId) {
    // Hide all sections
    const sections = document.getElementsByClassName('portfolio-section');
    for (const section of sections) {
        section.style.display = 'none';
    }

    // Remove the 'active' class from all links
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.classList.remove('active');
    }

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Add the 'active' class to the clicked link
    const clickedLink = document.getElementById(linkId);
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}