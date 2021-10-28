// Assignment code here
var passwordString = '';
var result = '';
var passwordText = document.getElementById('password');

var passwordLength = prompt('How long will your password be? Value must be between 8-128 characters.');
var lowerCase = confirm('Do you want to include lowercase letters in your password?');
var upperCase = confirm('Do you want to include uppercase letters in your password?');
var numbers = confirm('Do you want to include include numebrs in your password?');
var specialCharacters = confirm('Do you want to include special characters in your password?');

var upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz';
var numberValues = '0123456789';
var specialCharacterValues = '!@#$%^&*()-=_+[]{},./?;:.~';

// functions
function characterType() {
  if (lowerCase === true || upperCase === true || numbers === true || specialCharacters === true) {
    if (lowerCase === true) {
      passwordString += lowerCaseValues
    }
    if (upperCase === true) {
      passwordString += upperCaseValues
    }
    if (numbers === true) {
      passwordString += numberValues
    }
    if (specialCharacters === true) {
      passwordString += specialCharacterValues
    }
  } else {
    alert('Must choose at least one character type!')
    characterType()
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordResult = '';
  function prompts() {
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterType()
      for (var i = 0; i < passwordLength; i++) {
        var j = passwordString[Math.floor(Math.random() * passwordString.length)]
        result += j;
      }
      passwordResult = document.createTextNode(result);
      passwordText.innerHTML = '';
      passwordText.appendChild(passwordResult);
      result = '';
    };
  }
  prompts();
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);