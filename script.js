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
var answerResponse = document.querySelector(".answer-response");
var scoreboardEl = document.querySelector(".scoreboard");

var a1;
var a2;
var a3;
var a4;

var timer;
var timerCount;

var winCondition;

var scoreboard;

function init() {
  getHighScores();
  setHighScores();
}

function getHighScores() {
  localStorage.getItem();
}

function setHighScores() {
  
  localStorage.setItem("user", scoreboard);
}

function startGame() {
  timerCount = 60;
  startTimer();
  startBtn.disabled = true;
  winCondition = false;
  questionOne();
  answerResponse.textContent = "";
}

function endGame() {
  winCondition = true;
  mainEl.textContent = "You completeed the quiz with a score of " + timerCount + ". " + "Press the start button to play again!";
  startBtn.disabled = false;
  for (i = 0; i < answersEl.childElementCount; i) {
    answersEl.removeChild(answersEl.firstElementChild);
  }
  var username = prompt("Enter your name to log your high score:");
  scoreboard.push({
    user: username.trim(),
    score: timerCount
  });
  setHighScores();

}

function questionOne() {
  mainEl.textContent = "Question 1: ";
  a1 = document.createElement("li");
  a2 = document.createElement("li");
  a3 = document.createElement("li");
  a4 = document.createElement("li");

  a1.textContent = "a";
  a2.textContent = "b";
  a3.textContent = "c";
  a4.textContent = "d";

  answersEl.appendChild(a1);
  answersEl.appendChild(a2);
  answersEl.appendChild(a3);
  answersEl.appendChild(a4);


  function ans1Response(event) {
    if  (event.target === a1) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans1Response);
      questionTwo();

    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -=5;
      answersEl.removeEventListener("click", ans1Response);
      questionTwo();
    }
  }


  answersEl.addEventListener("click", ans1Response);
}

function questionTwo() {
  mainEl.textContent = "Question 2: ";

  a1.textContent = "e";
  a2.textContent = "f";
  a3.textContent = "g";
  a4.textContent = "h";

  function ans2Response(event) {
    if  (event.target === a1) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans2Response);
      questionThree();

    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -=5;
      answersEl.removeEventListener("click", ans2Response);
      questionThree();
    }
  }

  answersEl.addEventListener("click", ans2Response);
}

function questionThree() {
  mainEl.textContent = "Question 3: ";

  a1.textContent = "i";
  a2.textContent = "j";
  a3.textContent = "k";
  a4.textContent = "l";

  function ans3Response(event) {
    if  (event.target === a1) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans3Response);
      questionFour();
    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -=5;
      answersEl.removeEventListener("click", ans3Response);
      questionFour();
    }
  }

  answersEl.addEventListener("click", ans3Response);
}

function questionFour() {
  mainEl.textContent = "Question 4: ";

  a1.textContent = "e";
  a2.textContent = "f";
  a3.textContent = "g";
  a4.textContent = "h";

  function ans4Response(event) {
    if  (event.target === a1) {
      answerResponse.textContent = "Correct!";
      answersEl.removeEventListener("click", ans4Response);
      endGame();
    }
    else {
      answerResponse.textContent = "Incorrect :(";
      timerCount -=5;
      answersEl.removeEventListener("click", ans4Response);
      endGame();
    }
  }

  answersEl.addEventListener("click", ans4Response);
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      if (winCondition === true && timerCount > 0) {
        clearInterval(timer);
        endGame();
      }
    }
    if (timerCount <= 0) {
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
