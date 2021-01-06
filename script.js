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

// to get random symbols, we're creating a string variable with all the different symbols you can use and we added 
// the floor and random functions in order to grab a random symbol within the string
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// as we will need to randomize between symbols, nums, upper, and lower, i found an equation that would work better than my last for randomizing numbers
function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// create a function to store our password, our value (length), and our checked boxes
function generate() {

  var password = "";
  
  var length = +document.getElementById("length").value;
  var lowerCase = document.getElementById("lowercase").checked;
  var upperCase = document.getElementById("uppercase").checked;
  var number = document.getElementById("numbers").checked;
  var symbol = document.getElementById("symbols").checked;
  
  // checking to see if the above are defined, if not then return
  if (lowerCase + upperCase + number + symbol <= 0)
  return;

  
  // there are 4 var (lower, upper, symbol, num) and we are assigning and checking each 
  for (let i = 0; i < length; i++) {
    var r = generater(0, 3);
    // if lowercase is true and is equal to 0, we'll add a lowercase letter/ conversly if it was 
    // not true, we would subract i which would negate the addition to begin with and it would replay
    if (lowerCase && r === 0) {
      password += getRandomLower();
    } else if (upperCase && r === 1) {
      password += getRandomUpper();
    } else if (symbol && r === 2) {
      password += getRandomSymbol();
    } else if (number && r === 3) {
      password += generater(0,9);
    } else {
      i--;
    }
  }
  // select #password and add it to the text content
  document.getElementById("password").textContent = password;
}