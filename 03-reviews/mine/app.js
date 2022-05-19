// local reviews data
const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Declerations
const btns = document.querySelectorAll('button');

let cardIndex = 0;

const imageEl = document.getElementById('person-img'),
  authorEl = document.getElementById('author'),
  jobEl = document.getElementById('job'),
  infoEl = document.getElementById('info');


// Update the card, passing in required 
const updateCard = (image, author, job, info) => {
  imageEl.src = image;
  authorEl.textContent = author;
  jobEl.textContent = job;
  infoEl.textContent = info;
}

// Random number generator between two numbers and never the same
let lastNumber // start with undefined lastNumber

let getRandNumber = () => {
  let x = Math.floor((Math.random() * reviews.length)); // get new random number

  if (x === lastNumber) { // compare with last number
    return getRandNumber() // if they are the same, call the function again to repeat the process
  }
  return x // if they're not the same, return it
}

// Listen to the next, prev & random buttons  
  btns.forEach(function (btn) { // Grab all buttons and addEventListener for each and use each button with thisButton
    btn.addEventListener("click", (thisButton) => {
      const styles = thisButton.currentTarget.classList;
      if (styles.contains("next-btn")) {
        // Move cardIndex Forwards
        if (cardIndex === reviews.length) {
          cardIndex = 0;
        }
        reviewPosition = cardIndex++;
        updateCard(reviews[reviewPosition].img, reviews[reviewPosition].name, reviews[reviewPosition].job, reviews[reviewPosition].text);


      } else if (styles.contains("prev-btn")) {
        // Move cardIndex Backwards
        reviewPosition = cardIndex--;
        if (cardIndex === -1) {
          cardIndex = reviews.length - 1
        }
        updateCard(reviews[reviewPosition].img, reviews[reviewPosition].name, reviews[reviewPosition].job, reviews[reviewPosition].text);


      } else if (styles.contains("random-btn")) {
        // Generate random number 
        let reviewPosition = getRandNumber()
        lastNumber = reviewPosition;
        updateCard(reviews[reviewPosition].img, reviews[reviewPosition].name, reviews[reviewPosition].job, reviews[reviewPosition].text);
      }
    })
  });