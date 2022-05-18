// set counter
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// Listen to all the buttons and create function within event listner
// (thisButton) catches which button was clicked, and then we can use the
// thisButton.currentTarget to target each button

btns.forEach(function (btn) {
  btn.addEventListener("click", function (thisButton) {
    const styles = thisButton.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Set the styles
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    // update the count
    value.textContent = count;
  });
});