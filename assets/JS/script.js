// Sets of arrays that contain different types of characters that can be added to password generation
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = upperCase.map(element => {
  return element.toLowerCase();
});
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '`', '~']

// A general function that asks the user a question and if yes reutrns the array it was given, otherwise it returns an empty array
function useChar(question, set){
  if (confirm("Would you like to use "+ question + " characters in your password?")){
    return set;
  } else {
    return [];
  }
}

// Fuction that determines which set of characters to use, and how long the password is and then generates the password
function generatePassword() {
  // Creates a blank array that will allow us to add accepted character sets to
  var allowedChar = [];
  // Creates a blank string that will have characters added to it to form our array
  var password = "";
  var valid = false;
  // Continues asking for a length until a valid one is obtained
  while (!valid){
    var input = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if ((input >= 8) && (input <= 128) ){
      // Breaks loop if valid inpuit is given
      valid = true;
    } else if (input == null) {
      // Cancels program if cancel is hit
      return;
    } else {
      // resets input
      alert("This is not a valid input please try again.");
    }
  }

  // Continues asking which sets to use until atleast one of the four sets is selected
  while (allowedChar.length === 0) { 
    allowedChar = allowedChar.concat(useChar("Upper Case", upperCase));
    allowedChar = allowedChar.concat(useChar("Lower Case", lowerCase));
    allowedChar = allowedChar.concat(useChar("Numerical", numbers));
    allowedChar = allowedChar.concat(useChar("Special", special));
    if (allowedChar.length === 0){
      alert("Please allow atleast one character set");
    }
  }
  // Loops the amount of times the user selected earlier for input
  for (var i = 0; i < input; i++) { 
    // appends a random character from allowed character sets to the password
    password = password.concat(allowedChar[Math.floor(Math.random() * allowedChar.length)]);
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
