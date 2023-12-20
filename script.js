// initial psuedo code
// when pw button clicked -> prompt length 8 - 128
// make var based on input length
// if valid continue
// if not return
// confirm for special characters, numbers, uppercase, and lower case letters
// create password based on confirmed answers
// display pw

//  var needed
// pwlength
// special characters array, numbers array, letters array
// make array based on selected properties
// for each element of password randomly select an included character


// Assignment Code
var generateBtn = document.querySelector("#generate");

// The following lines initalize seperate variables for each type of character
// Had to include some array and string operators to get the arrays to function properly
var sC = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialCharacters = sC.split("");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaU = alpha.toUpperCase();

var letters = alpha.split("");
var lettersUpper = alphaU.split("");

function generatePassword() {

  // Initialized variables for the possible included characters and the password inside the function and as empty arrays so that they reset when the function is run
  var included = [];

  var PW = [];

  var type =[];

  // Prompts user to enter a PW length, then enters into the included characters logic
  // Checks if length meets password requirements, will return if not
  var pwLength = prompt("Enter a password length between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128) {
    // Prompt for special characters
    if (confirm("Would you like special characters (&, !, ?, etc.)?")) {
      // will push to the included array as possible character selections
      included.push(specialCharacters);
      type.push("Special Characters");
      alert("Password will include special characters.")
    }
    else {
      alert("Password will not include special characters.")
    }
    // Prompt for numbers
    if (confirm("Would you like numbers (0, 1, 2, etc.)?")) {
      included.push(numbers);
      type.push("Numbers");
      alert("Password will include numbers.")
    }
    else {
      alert("Password will not include numbers.")
    }
    // Prompt for uppercase
    if (confirm("Would you like upper case letters (A, B, C, etc.)?")) {
      included.push(lettersUpper);
      type.push("Uppercase Letters");
      alert("Password will include uppercase letters.")
    }
    else {
      alert("Password will not include uppercase letters.")
    }
    // Prompt for lower case
    if (confirm("Would you like lower case letters (a, b, c, etc.)?")) {
      included.push(letters);
      type.push("Lowercase Letters");
      alert("Password will include lowercase letters.")
    }
    else {
      alert("Password will not include lowercase letters.")
    }
    // If no parameters are chosen, return
    if (included.length === 0) {
      alert("Please select at least one password parameter")
      return
    }
    alert("Your password will include: " + type.join(", "))
    // since arrays were added to an existing array
    var flatIncluded = included.flat();

    // for each character of generated password, randomly select an included character and add it to the PW array
    // uses Math.random and is not actually secure
    for (i = 0; i < pwLength; i++) {
      var randomIndex =  Math.floor(Math.random() * flatIncluded.length);
      
      PW.push(flatIncluded[randomIndex]);
    }

    // displays the password as an alert and to the page
    alert("Your secure password is " + PW.join(""))
    return PW.join("")
  }
  else {
    alert("Please enter a number between 8 and 128")
    return
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
