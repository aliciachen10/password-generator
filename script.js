// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                  's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var special = ['/', '%', '@', '!', '^', '&', '*', '#', '(', ')', '-', '+']
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  var passwordLength = window.prompt("how long do you want your password to be?");

  //if the user doesn't select a password length between 8-128 characters, tell them to re-select an appropriate length
  if (passwordLength < 8 || passwordLength > 128) {
    window.confirm("please enter a number between 8 and 128")
    return generatePassword();
  } else {
    var lowerPrompt = window.confirm("would you like any lowercase letters?");
  var upperPrompt = window.confirm("would you like any uppercase letters?");
  var specialPrompt = window.confirm("would you like any special characters?");
  var numberPrompt = window.confirm("would you like any numbers?");

  var charactersUserWants = [];
  var finalPasswordArray = []; 
  var addedChars = 0;

  // if user doesn't select any of the character types, tell them to choose at least one
  if (!lowerPrompt && !upperPrompt && !specialPrompt && !numberPrompt) {
    window.confirm("please choose at least one character type")
    return generatePassword();
  }
  //TURN THE BELOW INTO A LOOP
  if (lowerPrompt) {
    charactersUserWants = charactersUserWants.concat(lowercase);
    finalPasswordArray.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
    addedChars ++;
  };

  if (upperPrompt) {
    charactersUserWants = charactersUserWants.concat(uppercase);
    finalPasswordArray.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
    addedChars ++;
  };

  if (specialPrompt) {
    charactersUserWants = charactersUserWants.concat(special);
    finalPasswordArray.push(special[Math.floor(Math.random()*special.length)]);
    addedChars ++;
  };

  if (numberPrompt) {
    charactersUserWants = charactersUserWants.concat(number);
    finalPasswordArray.push(number[Math.floor(Math.random()*number.length)]);
    addedChars ++;
  };

  for (let i = 0; i < (passwordLength - addedChars); i++) {
    finalPasswordArray.push(charactersUserWants[Math.floor(Math.random()*charactersUserWants.length)]);
  };

  var finalPassword = finalPasswordArray.join("");

  };

  console.log(addedChars);
  return finalPassword;
};

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
