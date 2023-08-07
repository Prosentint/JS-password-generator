// Sets of arrays that contain different types of characters that can be added to password generation
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = upperCase.map(element => {
  return element.toLowerCase();
});
var num = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '`', '~']

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
