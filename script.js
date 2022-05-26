// Write password to the #password input
function generatePassword() {
  // preset arrays
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "~`!@#$%^&*()_-+={[}]|;'<,>.?/\:";
  
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
  let selectedCharacterTypes = [];
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
debugger;
  // password generator given inputs
  var passwordCharacters = [];
  for (var i = 0; i <= passwordLength; i++) {
    passwordCharacters.push(selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)]);
  }

  return selectedCharacterTypes.join('');

  // for (var i = 0; i <= passwordLength; i++) {
  //   var randomNumber = Math.floor(Math.random() * lowerLetters.length);
  //   password += lowerLetters.substring(randomNumber, randomNumber + 1);
  // }
}

// var password = writePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
