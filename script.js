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

var timer;
var timerCount;

function init() {
  getHighScores();
  setHighScores();
}

function getHighScores() {

}

function setHighScores() {

}

function startGame() {
  timerCount = 60;
  startTimer();
  startBtn.disabled = true;
  questionOne();
}

function endGame() {

}

function questionOne() {
  mainEl.textContent = "Question 1: ";
  var a1 = document.createElement("li");
  var a2 = document.createElement("li");
  var a3 = document.createElement("li");
  var a4 = document.createElement("li");

  a1.textContent = "a";
  a2.textContent = "b";
  a3.textContent = "c";
  a4.textContent = "d";

  answersEl.appendChild(a1);
  answersEl.appendChild(a2);
  answersEl.appendChild(a3);
  answersEl.appendChild(a4);

  answersEl.addEventListener("click", function(event) {
    if  (event.target === a1) {
      mainEl.textContent = "Correct";
    }
    else {
      mainEl.textContent = "incott";
      timerCount -=5;
    }
  })
}

function questionTwo() {
  mainEl.textContent = "Question 2: ";
}

function questionThree() {
  mainEl.textContent = "Question 3: ";
}

function questionFour() {
  mainEl.textContent = "Question 4: ";
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function resetHighScores() {

}

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetHighScores);

init();
