// ****** SELECT ITEMS **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit varables
let editElement;
let editFlag = false;
let editID = '';



// ****** FUNCTIONS **********
// submit form function
addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // form logic
  if (value && !editFlag) {
    console.log('added to list');

    const element = document.createElement('article');
    element.classList.add('grocery-item');

    element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                              <button type="button" class="edit-btn">
                                  <i class="fas fa-edit"></i>
                              </button>
                              <button type="button" class="delete-btn">
                                  <i class="fas fa-trash"></i>
                              </button>
                            </div>`;

    list.appendChild(element);
    container.classList.add('show-container');


  } else if (value && editFlag) {
    console.log('editing');
  } else {
    // console.log('empty value');
    displayAlert('please enter value', 'danger')
  }
}

//display the alert function
displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}





// ****** LOCAL STORAGE **********



// ****** SETUP ITEMS **********


// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);