// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character sets
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

//// Function to generate password
function generatePassword() {
  var length = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return '';
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars) {
    alert("At least one character type must be selected.");
    return '';
  }

  var availableChars = '';
  if (includeLowerCase) availableChars += lowerCase;
  if (includeUpperCase) availableChars += upperCase;
  if (includeNumbers) availableChars += numbers;
  if (includeSpecialChars) availableChars += specialChars;

  var password = '';
  for (var i = 0; i < length; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
