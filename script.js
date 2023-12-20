// psuedocode
// on page load init
// retrieve high scores from local storage and display to page
// display start button, reset scores button, high scores, and timer (empty)
// add event listeners to start and reset buttons
// when start button is pressed, start game, start timer
// start game will call function to display first question
// display question by replacing body text in main
// display answers by appending li to an ol
// add event listeners to answers
// when event clicked, check if correct
// if incorrect, subtract time from timer
// move to next question
// when all questions have been answered or timer = 0 prompt user for name
// write name and score to local storage and page
// redisplay quiz instructions
// reset scores will clear local storage and page

// variables needed
// variables on buttons for event listeners
// span on timer to update as it ticks down
// main content to be overridden by questions
// high scores

// Assignment Code
var startBtn = document.querySelector("#start");
var resetBtn = document.querySelector("#reset");
var timerEl = document.querySelector("#timerCount");
var mainEl = document.querySelector(".question-area");
var answersEl = document.querySelector(".answers");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
