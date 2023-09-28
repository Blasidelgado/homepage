// Get the height of the header
const headerHeight = document.querySelector('header').offsetHeight;

// Place the dropdown menu below header when toggled
document.querySelector('#navbarToggler').style.top = `${headerHeight}px`;

// Dynamically update year
const year = document.getElementById('year');
year.innerText = new Date().getFullYear().toString();
