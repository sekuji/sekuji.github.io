/**
 * String to be used for each month of the year.
 */
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

/**
 * String to be used for each day of the week.
 */
const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"
];

/**
 * Current date and time.
 */
var date;

/**
 * Adds a fade transition between pages.
 */
function fade() {
  if (!window.AnimationEvent) return;

  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

/**
 * Gets the current date and time.
 */
function getDate() {
  // Get the date
  var dateNow = new Date();

  // Date components
  var dayOfWeek = days[dateNow.getDay()];
  var month = months[dateNow.getMonth()];
  var day = dateNow.getDate();
  var year = dateNow.getFullYear();

  // Time components (12-hour format)
  var hours = dateNow.getHours();
  var minutes = ('0' + dateNow.getMinutes()).slice(-2);
  var seconds = ('0' + dateNow.getSeconds()).slice(-2);
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format

  // Inserting result
  date = `${dayOfWeek}, ${month} ${day}, ${year} | ${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("date").innerHTML = date;
}

/**
 * Once the page has loaded, get the date and update every second.
 */
document.addEventListener('DOMContentLoaded', function() {
  getDate();
  setInterval(getDate, 1000);
});

/**
 * Adds a fade out animation to the page.
 */
window.addEventListener('pageshow', function(event) {
  if (!event.persisted) return;

  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});