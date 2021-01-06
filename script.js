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



// here we are returning a string from the browser char code and we are selecting a random Number, 
// we use floor to make it a whole num and multiply by 26 to as there are 26 letters in the alphabet. 
// We add 97 as that is when the lower case alphabet starts in the charset
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// we use the same equation as we got for the lowercase alphabet, however we add 65 as that's when the uppercase starts in the charset
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// we continue to use the same equation here except instead of 26 alphabets, there are 10 numbers which start at 48 in the charset
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// to get random symbols, we're creating a string variable with all the different symbols you can use and we added 
// the floor and random functions in order to grab a random symbol within the string
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
