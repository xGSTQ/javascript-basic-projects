// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set footer date ************
document.getElementById('date').innerHTML = new Date().getFullYear();

// ********** Mobile Nav links ************
const navToggleEl = document.querySelector('.nav-toggle');
const linksContainerEl = document.querySelector('.links-container');
const linksEl = document.querySelector('.links');

// Toggle mobile menu to a fixed 200px height (css class) on burger menu click. Has limitations 
// navToggleEl.addEventListener('click', () => {
//     linksContainerEl.classList.toggle('show-links');
// });

// Toggle mobile menu using the getBoundingClientRect() method - This caclulates the height of the element rendered
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
navToggleEl.addEventListener('click', () => {
    const linksHeight = linksEl.getBoundingClientRect().height;
    const containerHeight = linksContainerEl.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainerEl.classList.add('mobile-menu-open');
        linksContainerEl.style.height = `${linksHeight}px`;
    } else {
        linksContainerEl.classList.remove('mobile-menu-open');
        linksContainerEl.style.height = 0;
    }
});

// ********** Desktop fixed navbar and global back to top button ************
// use the scroll event 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

const navEl = document.getElementById('nav');
const navElHeight = navEl.getBoundingClientRect().height;

const backToTopEl = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const topOffSet = window.pageYOffset;

    if (topOffSet > navElHeight) {
        navEl.classList.add('fixed-nav');
        backToTopEl.classList.add('show-link');
    } else {
        navEl.classList.remove('fixed-nav');
        navEl.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// Select all links
const allLinks = document.querySelectorAll('.scroll-link');

// use a for each method on all the links https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
allLinks.forEach((eachLink) => {
    eachLink.addEventListener('click', (event) => {
        // Using currentTarget property https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
        // console.log(event.currentTarget.innerHTML)
        const linksHeight = linksEl.getBoundingClientRect().height;


        // Wait for page to load
        if (linksContainerEl.classList.contains('mobile-menu-open')) {
            // console.log(linksContainerEl.classList)
            // console.log(navElHeight + linksHeight)
            document.querySelector("html").style.scrollPaddingTop = `${navElHeight + linksHeight}px`;
        } else {
            // console.log(navElHeight)
            // console.log(linksContainerEl.classList)
            document.querySelector("html").style.scrollPaddingTop = `${navElHeight}px`;
        }
    })
});