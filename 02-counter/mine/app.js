const decreaseEl = document.querySelector('.btn.decrease');
const resetEl = document.querySelector('.btn.reset');
const increaseEl = document.querySelector('.btn.increase');
const valueEl = document.getElementById('value');

let counter = 0;

let resetCount = () => {
  counter = 0;
  valueEl.innerText = 0;
  if (counter === 0) {
    valueEl.style.color = 'initial'
  }
}

let increaseCount = () => {
  valueEl.innerText = ++counter;
  if (counter >= 1) {
    valueEl.style.color = 'green'
  } else if (counter === 0) {
    valueEl.style.color = 'initial'
  }
}

let decreaseCount = () => {
  valueEl.innerText = --counter;
  if (counter <= -1) {
    valueEl.style.color = 'red'
  } else if (counter === 0) {
    valueEl.style.color = 'initial'
  }
}


decreaseEl.addEventListener('click', decreaseCount);
resetEl.addEventListener('click', resetCount);
increaseEl.addEventListener('click', increaseCount);