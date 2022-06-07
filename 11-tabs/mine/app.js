// // Get the tabs
// tabBtnEl = document.querySelectorAll('.tab-btn');

// // Get the article Ids
// const historyArticle = document.getElementById('history'),
//         visionArticle = document.getElementById('vision'),
//         goalsArticle = document.getElementById('goals');


// // Remove the active class from each button function
// removeActiveClass = (eachElement) => {
//     eachElement.classList.remove('active');
// }


// tabBtnEl.forEach((eachBtn) => {
//     eachBtn.addEventListener('click', (thisButton) => {
//         // Using currentTarget property https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
//         // console.log(thisButton.currentTarget.dataset.id);

//         let historyClicked = () => {
//             if (!historyArticle.classList.contains('active')) {
//                 historyArticle.classList.add('active')
//                 visionArticle.classList.remove('active')
//                 goalsArticle.classList.remove('active')
//             } else {
//                 historyArticle.classList.remove('active')
//             };
//         }

//         let visionClicked = () => {
//             if (!visionArticle.classList.contains('active')) {
//                 visionArticle.classList.add('active')
//                 historyArticle.classList.remove('active')
//                 goalsArticle.classList.remove('active')
//             } else {
//                 visionArticle.classList.remove('active')
//             };
//         }

//         let goalsClicked = () => {
//             if (!goalsArticle.classList.contains('active')) {
//                 goalsArticle.classList.add('active')
//                 historyArticle.classList.remove('active')
//                 visionArticle.classList.remove('active')
//             } else {
//                 goalsArticle.classList.remove('active')
//             };
//         }


//         // Switch Statement for when each tab is clicked
//         // Get the button clicked
//         switch (thisButton.currentTarget.dataset.id) {
//             case 'history':
//                 // Remove all active classes from buttons
//                 tabBtnEl.forEach(removeActiveClass);
//                 // Apply active class to this button
//                 thisButton.currentTarget.classList.add('active')
//                 // Fire the respective function
//                 historyClicked();
//                 break;

//             case 'vision':
//                 tabBtnEl.forEach(removeActiveClass);
//                 thisButton.currentTarget.classList.add('active')
//                 visionClicked();
//                 break;

//             case 'goals':
//                 tabBtnEl.forEach(removeActiveClass);
//                 thisButton.currentTarget.classList.add('active')
//                 goalsClicked();
//                 break;
//         }
//     })
// });


const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// listen for clicks on the whole about section
about.addEventListener('click', (e) => {
    // target returns the element clicked within an element https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    console.log(e.target);
    // only return the targets with a data-id value
    console.log(e.target.dataset.id);
    // save the data-id to a varable
    const id = e.target.dataset.id;
    // if id is true
    if (id) {
        // remove the active class from all buttons first using the forEach
        btns.forEach((button) => {
            button.classList.remove('active');
        });
        // add the active class to the target clicked
        e.target.classList.add('active');

        //remove the active class from all articles
        articles.forEach((article) => {
            article.classList.remove('active')
        });

        // return the coresponding id on the document with the same data-id value passed from the target
        const element = document.getElementById(id);
        console.log(element);
        // Add the active class to the same id element classlist
        element.classList.add("active");
    };
})