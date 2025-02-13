const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];

// Declerations
const sectionCenterEl = document.querySelector('.section-center');
const btnContainerEl = document.querySelector('.btn-container');


// Wait for the dom to load with DOMContentLoaded event listener on the 
// window and then use a call back function to map the object array 
// (need to wait for the dom before rendering the articles)
window.addEventListener('DOMContentLoaded', () => {
  // console.log('dom is now loaded');

  // Call the Articles function passing in the menu array
  displayArticleItems(menu);

  displayMenuButtons();
});



// Display the Items function
let displayArticleItems = (eachArticle) => {

  let mapTheArticles = eachArticle.map(item => {

    // return the article item using template literals
    return `<article class="menu-item">
              <img src="${item.img}" alt="${item.title}" title="${item.title}" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });

  // Join the article map back together
  mapTheArticles = mapTheArticles.join('\n');
  // Render the articles
  sectionCenterEl.innerHTML = mapTheArticles
};

// Display the buttons function
let displayMenuButtons = () => {
// Map the categories
const categories = menu.map(function (item) {
  return item.category;
});
// Remove the duplicate categores
let uniqueCategories = [...new Set(categories)];
// unshift the all btn
uniqueCategories.unshift('all')

// Map the final buttons
let categoryBtns = uniqueCategories.map(function (eachBtn) {
  return `<button type="button" class="filter-btn" data-id="${eachBtn}">${eachBtn}</button>`
}).join('\n');

// Render the buttons
btnContainerEl.innerHTML = categoryBtns;


// Declare all the buttons after they have been mapped
const filterBtnsEl = document.querySelectorAll('.filter-btn');
// console.log(filterBtnsEl)


// Filter the items to display by button click
// find all buttons and then use the foreach to add a function on each button
// add an EventListener to each button and listen to each (e (event))
// use event.currentTarget to capture button clicked 
filterBtnsEl.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // Using the dataset property to get the category from the buttons clicked
    const category = e.currentTarget.dataset.id;

    // create a filtered array from the menu array
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItem.category);
      // Filter the array based on the button clicked (data-id)
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    // retrun the oriingal menu array if the button data-id is 'all'
    if (category === 'all') {
      displayArticleItems(menu)
    } else {
      // return the filtered array
      displayArticleItems(menuCategory)
    }
  });
});


}


