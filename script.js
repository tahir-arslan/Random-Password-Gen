// Write password to the #password input
function generatePassword() {
  passwordText.value = "";
  // preset arrays
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "`", "~", "{", "}", "|", ";", "<", ">"];
  
  // giving choices for options
  var passwordLength = window.prompt("How many characters would you like your password to be? Please write a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You did not select a character length between 8 and 128. Please choose a different number.");
    return generatePassword();
  }
  var useLowerLetters = window.confirm("Would you like to include lowercase letters?");
  var useUpperLetters = window.confirm("Would you like to include uppercase letters?");
  var useNumbers = window.confirm("Would you like to include numbers?");
  var useSymbols = window.confirm("Would you like to use special symbols?");

  // check if any character type was selected
  if (!useLowerLetters && !useUpperLetters && !useNumbers && !useSymbols) {
    window.alert("You must select at least one character type. Let's start again.");
    return generatePassword();
  }

  // combine selected types into array
  var selectedCharacterTypes = [];
  if (useLowerLetters) { 
    selectedCharacterTypes = selectedCharacterTypes.concat(lowerLetters);
  }
  if (useUpperLetters) {
    selectedCharacterTypes = selectedCharacterTypes.concat(upperLetters);
  }
  if (useNumbers) {
    selectedCharacterTypes = selectedCharacterTypes.concat(numbers);
  }
  if (useSymbols) { 
    selectedCharacterTypes = selectedCharacterTypes.concat(symbols);
  }

  // password generator given custom array
  var randomSelection = [];
  for (var i = 0; i < passwordLength; i++) {
    randomSelection.push(selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)]);
  }
  return randomSelection.join('');
}

var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
