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
// the variables below will be used for interaction  on the elements selected
// includes event listeners on buttons, elements that will be appends to, and elements that will be overwritten
var startBtn = document.querySelector("#start");
var resetBtn = document.querySelector("#reset");
var timerEl = document.querySelector("#timerCount");
var mainEl = document.querySelector(".question-area");
var answersEl = document.querySelector(".answers");
var answerResponse = document.querySelector(".answer-response");
var scoreboardEl = document.querySelector(".scoreboard");

// these are variables for the question list elements
// initialized outside of any functions because they are used in several functions
var a1;
var a2;
var a3;
var a4;

// variable for the timer function
var timer;

// timer count is the countdown for the timer, will write to page once the timer is started and be used for the highscore
var timerCount;

// win condition is a true/false switch that will be populated when 
var winCondition;

// empty array for the highscores
var scoreboard = [];

// late addition to hold the event listeners, will get cleared in endGame
// defining the event listeners locally created an edge case where the listeners wouldn't clear if the timer ticked to 0
var eventListener;

// function that is called when page is loaded to populate high scores if they exist
function init() {
  getHighScores();
  setHighScores();
}

// function to retrieve high scores from local stoarage if they exist
function getHighScores() {
  var storedScores = localStorage.getItem("user");
  if (storedScores !== null) {
    scoreboard = JSON.parse(storedScores);
  };
}

// function sets scores to local stoarage and creates a high score list on the page
function setHighScores() {

  // sorts the scores based on the time remaining
  scoreboard.sort((a, b) => b.score - a.score);

  // resets the high score list each time the function is called
  for (i = 0; i < scoreboardEl.childElementCount; i) {
    scoreboardEl.removeChild(scoreboardEl.firstElementChild);
  }

  // creates list items for each high score
  for (i = 0; i < scoreboard.length; i++) {
    var scoreOut = document.createElement("li");;

    scoreOut.textContent = scoreboard[i].user + " " + scoreboard[i].score;
    scoreboardEl.appendChild(scoreOut);
  }
  localStorage.setItem("user", JSON.stringify(scoreboard));
}

// function called when start button is pressed
function startGame() {

  // sets the timer to 60s
  timerCount = 60;

  // starts the timer
  startTimer();

  // turns the start button off while the game is being played
  startBtn.disabled = true;

  // win condition check for the timer
  winCondition = false;

  // displays the first question
  questionOne();

  // sets the response to empty, specifically for playing multiple rounds
  answerResponse.textContent = "";
}

function endGame() {

  // removed the latest event listener, added specifically if the timer reaches 0 with no input
  answersEl.removeEventListener("click", eventListener);


  // sets win condition to true to exit the timer
  mainEl.textContent = "You completeed the quiz with a score of " + timerCount + ". " + "Press the start button to play again!";

  // allows start button to be pressed again
  startBtn.disabled = false;

  // clears the answer elements from the page
  for (i = 0; i < answersEl.childElementCount; i) {
    answersEl.removeChild(answersEl.firstElementChild);
  }

  // prompts the user for a name and saves the most recent results to scoreboard array
  var username = prompt("Enter your name to log your high score:");
  scoreboard.push({
    user: username.trim(),
    score: timerCount
  });

  // call setHighScores to display results on page and save to local storage
  setHighScores();

}

// first question called from the start button
function questionOne() {
  mainEl.textContent = "Question 1: The setInterval function uses which unit of time as an input?";

  // created elements and appended them to an ol so that they can later be deleted
  a1 = document.createElement("li");
  a2 = document.createElement("li");
  a3 = document.createElement("li");
  a4 = document.createElement("li");

  a1.textContent = "seconds";
  a2.textContent = "minutes";
  a3.textContent = "milliseconds";
  a4.textContent = "on click";

  answersEl.appendChild(a1);
  answersEl.appendChild(a2);
  answersEl.appendChild(a3);
  answersEl.appendChild(a4);

  // function and logic for when the list elements are clicked
  // removes event listener so event listeners don't overlap
  // calls question two regardless of outcome
  eventListener = function ans1Response(event) {
    if (event.target === a3) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans1Response);
      questionTwo();

    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -= 5;
      answersEl.removeEventListener("click", ans1Response);
      questionTwo();
    }
  }

  // added an event listener to the list elements 
  answersEl.addEventListener("click", eventListener);
}

// second question called from the first function
function questionTwo() {
  mainEl.textContent = "Question 2: To view the contents of a variable, var, without writting to the page, which command must be called?";

  // only text content is changed, list items are not created and appended again
  a1.textContent = "console.log(var)";
  a2.textContent = "var.textContent";
  a3.textContent = "getLocalStorage('var')";
  a4.textContent = "var = ''";

  eventListener = function ans2Response(event) {
    if (event.target === a1) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans2Response);
      questionThree();

    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -= 5;
      answersEl.removeEventListener("click", ans2Response);
      questionThree();
    }
  }

  answersEl.addEventListener("click", eventListener);
}

// third question called from the second function
function questionThree() {
  mainEl.textContent = "Question 3: What do for loops in Javascript use to seperate the input arguments?";

  a1.textContent = ", (comma)";
  a2.textContent = "; (semicolon)";
  a3.textContent = "  (space)";
  a4.textContent = ": (colon)";

  eventListener = function ans3Response(event) {
    if (event.target === a2) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans3Response);
      questionFour();
    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -= 5;
      answersEl.removeEventListener("click", ans3Response);
      questionFour();
    }
  }

  answersEl.addEventListener("click", eventListener);
}

// fourth question called from the third funciton
function questionFour() {
  mainEl.textContent = "Question 4: JavaScript objects can contain which of the following data types?";

  a1.textContent = "Strings";
  a2.textContent = "Numbers";
  a3.textContent = "boolean";
  a4.textContent = "All of the above";

  // function 4 is different in that it will call the endgame function once an answer is selected
  eventListener = function ans4Response(event) {
    if (event.target === a4) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans4Response);
      winCondition = true;
    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -= 5;
      answersEl.removeEventListener("click", ans4Response);
      winCondition = true;
    }
  }

  answersEl.addEventListener("click", eventListener);
}

// timer function called when start button is pressed, updates every second
// very similar to examples gone over in class
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {

      // win condition is set to true in the endGame function to exit the loop after all questions have been answered
      if (winCondition === true && timerCount > 0) {
        clearInterval(timer);
        endGame();
      }
    }

    // some extra logic to catch the timer and initiate the endGame if no buttons are pressed
    if (timerCount === 0 && winCondition === false) {
      clearInterval(timer);
      endGame();
    }

    // <= 0 needed as it is possible to achieve a negative score with a wrong answer
    if (timerCount < 0) {
      clearInterval(timer);
      endGame();
    }

    
  }, 1000);
}

// function to reset the scoreboard on the page and clear local storage
function resetHighScores() {
  scoreboard = [];
  setHighScores();
}

// adds an event listener to the start game function
startBtn.addEventListener("click", startGame);

// adds an event listener to the reset scores function
resetBtn.addEventListener("click", resetHighScores);

// init will run on page load to set up the scoreboard if scores are in local storage
init();
