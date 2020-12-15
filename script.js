// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create an object for the password criteria
var criteria = {

  // Create arrays for each of the character types

  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  specialCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"],

  //Set the initial length of the password to 0
  length: 0,

};

// Send the password to the #password input in the html file
function writePassword() {
  var password = generatePassword();
  var pwdChar = document.querySelector("#password");
  pwdChar.value = password;
}

//Call the generatePassword function
function generatePassword() {

  // Variables to hold user input
  var pwdReturn = "";
  var pwdLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  pwdLength = getLength();
  criteria.pwdLength = 0;
  pwdReturn = "";

  // Gets the password length from user input
  function getLength() {
    var lengthInput = prompt("How long do you want your password to be?\n (It should be between 8 and 128 characters)");
    while (lengthInput < 8 || lengthInput > 128) {
      return getLength();
    }
    return lengthInput;
  }

  // Create prompts to get password criteria from user
  function getCriteria() {
    lowerCase = confirm("Do you want to use lower case letters in your password?");
    upperCase = confirm("Do you want to use upper case letters in your password?");
    numbers = confirm("Do you want to use numbers in your password?");
    specialChar = confirm("Do you want to use any special characters in your password?");
  }

  // Show prompts for criteria
  getCriteria();

  //keep adding characters based on criteria until pwdLength is = to the length the user set
  while (criteria.length < pwdLength) {
    if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
      alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters");
      getCriteria();
    }
    else {
      if (lowerCase === true && criteria.length < pwdLength) {
        var lower = criteria.lowerCase[Math.floor(Math.random() * 26)];
        pwdReturn = pwdReturn + lower;
        criteria.length++;
      }
      if (specialChar === true && criteria.length < pwdLength) {
        var special = criteria.specialCharacter[Math.floor(Math.random() * 32)];
        pwdReturn = pwdReturn + special;
        criteria.length++;
      }
      if (numbers === true && criteria.length < pwdLength) {
        var num = criteria.number[Math.floor(Math.random() * 10)];
        pwdReturn = pwdReturn + num;
        criteria.length++;
      }
      if (upperCase === true && criteria.length < pwdLength) {
        var upper = criteria.upperCase[Math.floor(Math.random() * 26)];
        pwdReturn = pwdReturn + upper;
        criteria.length++;
      }
    }
  }
return pwdReturn;
}
