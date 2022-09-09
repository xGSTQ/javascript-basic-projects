// Elements
const slidesEl = document.querySelectorAll('.slide'),
    prevBtnEl = document.querySelector('.prevBtn'),
    nextBtnEl = document.querySelector('.nextBtn');

// Apply a left: 100% per slide to set the slides in one line (offscreen) as positioned absolute and overlow hidden, this basically replicates this CSS below

/*
.slide:nth-child(1){
    left: 0;
}
.slide:nth-child(2){
    left: 100%;
}
.slide:nth-child(3){
    left: 200%;
}
.slide:nth-child(4){
    left: 300%;
}
*/

// With the forEach and index being the nth-child()

slidesEl.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


// Set the slide counter
let counter = 0;

// Next btn event listeners
nextBtnEl.addEventListener('click', () => {
    counter++;
    console.log(counter)
    carousel();
});

// Previous btn event listeners
prevBtnEl.addEventListener('click', () => {
    counter--;
    console.log(counter)
    carousel();
});

// Carousel function
const carousel = () => {
    // Remove the next button when viewing last slide
    if (counter < slidesEl.length - 1) {
        nextBtnEl.style.display = "block";
    } else {
        nextBtnEl.style.display = "none";
    }

    // Remove the prev button when viewing first slide
    if (counter > 0) {
        prevBtnEl.style.display = "block";
    } else {
        prevBtnEl.style.display = "none";
    }

    // Move all the slides left/right depending on the counter (transform all slides)
    slidesEl.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}