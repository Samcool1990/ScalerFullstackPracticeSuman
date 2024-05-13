// Get references to the sections
const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');

// Function to scroll to a specific section
function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle keypress events
function handleKeyPress(event) {
    switch (event.key) {
        case '1':
            scrollToSection(section1);
            break;
        case '2':
            scrollToSection(section2);
            break;
        case '3':
            scrollToSection(section3);
            break;
        case 't':
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
            break;
        case 'b':
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to bottom of the page
            break;
        default:
            break;
    }
}

// Add event listener for keypress events
document.addEventListener('keypress', handleKeyPress);
