// Sets of arrays that contain different types of characters that can be added to password generation
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = upperCase.map(element => {
  return element.toLowerCase();
});
var num = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '`', '~']

// Fuction that determines which set of characters to use, and how long the password is and then generates the password
function generatePassword() {
    // Creates a blank array that will allow us to add accepted character sets to
    var allowedChar = [];
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
  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("here");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
