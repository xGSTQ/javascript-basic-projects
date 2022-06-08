const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureFullDate = new Date(2022, 05, 10, 15, 24, 0); // Tue Dec 17 2024 15:24:00 (month is zero index based)


// Date objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const futureYear = futureFullDate.getFullYear();
const futureMonth = months[futureFullDate.getMonth()]; // Returns the month (0–11) so we can then use an array to display as full month
const futureDate = futureFullDate.getDate();
const futureDay = weekdays[futureFullDate.getDay()]; // Returns the day of the week as (0–6) so we can then use an array to display as full day
const futureHours = futureFullDate.getHours();
const futureMinutes = futureFullDate.getMinutes();

let timeOfDay = (hours) => {
  return (hours >= 12 ? 'pm' : 'am')
}

giveaway.textContent = `giveaway ends on ${futureDay}, ${futureDate} ${futureMonth} ${futureYear} ${futureHours}:${futureMinutes}${timeOfDay(futureHours)}`;


// Get the future time in milliseconds
const futureTime = futureFullDate.getTime();


getRemaindingTime = () => {

  // Get today in milliseconds
  const today = new Date().getTime();

  const t = futureTime - today;
  // console.log(t); // in ms

  // Breakdown the milliseconds
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1 day = 24hr

  // How many milliseconds are in 1 day
  // Number of milliseconds in a day = 24 * 60 * 60 * 1000 = 86400000 milliseconds
  // Number of seconds in a day = 24 * 60 * 60 = 86400 seconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // Calculate all values required
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  // Check lower numbers for leading zero
  let checkFormat = (item) => {
    if (item < 10) {
      return( item = `0${item}`);
    }
    return item;
  };

  // Loop over the items selector with a forEach()
  // This pushes the respective time (item) into each selector (indexPlacment)
  items.forEach( (item, indexPlacement) => {
    item.innerHTML = checkFormat(values[indexPlacement])
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }

}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();


