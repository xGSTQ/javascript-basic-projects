// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navBtnEl = document.querySelector('button.nav-toggle');
const navLinksUlEl = document.querySelector('nav ul.links');

toggleNav = () => {
    navLinksUlEl.classList.toggle("show-links");
}

navBtnEl.addEventListener('click', toggleNav);

