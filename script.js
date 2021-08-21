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

  //FINISH WRITING THIS LOOP FOR 8-128 CHARACTERS 
  if (passwordLength < 8 || passwordLength > 128) {
    window.confirm("please enter a number between 8 and 128")
    return generatePassword();
  } else {
    var lowerPrompt = window.confirm("would you like any lowercase letters?");
  var upperPrompt = window.confirm("would you like any uppercase letters?");
  var specialPrompt = window.confirm("would you like any special characters?");
  var numberPrompt = window.confirm("would you like any numbers?");

  //empty passwordArray for user
  // var promptArray = {lowerPrompt: lowercase, upperPrompt: uppercase, specialPrompt: special, numberPrompt: number};

  var charactersUserWants = [];

  // if (prompt == true) {
  //   var charactersUserWants = passwordArray.concat(promptArray.prompt);
  // };
  
  //TURN THE BELOW INTO A LOOP
  if (lowerPrompt) {
    charactersUserWants = charactersUserWants.concat(lowercase)
  // } else {
  //   charactersUserWants = charactersUserWants
  };
  if (upperPrompt) {
    charactersUserWants = charactersUserWants.concat(uppercase)
  // } else {
  //   charactersUserWants = charactersUserWants
  };

  if (specialPrompt) {
    charactersUserWants = charactersUserWants.concat(special)
  // } else {
  //   charactersUserWants = charactersUserWants
  };

  if (numberPrompt) {
    charactersUserWants = charactersUserWants.concat(number)
  // } else {
  //   charactersUserWants = charactersUserWants
  };

  var finalPasswordArray = [];

  for (let i = 0; i < passwordLength; i++) {
    finalPasswordArray.push(charactersUserWants[Math.floor(Math.random()*charactersUserWants.length-1)]);
  };

  var finalPassword = finalPasswordArray.join("");

  };

  console.log(typeof finalPassword);
  return finalPassword;
};

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var loggedPassword = generatePassword();
// console.log(loggedPassword);

// console.log(generatePassword());
///to dos
///if cancel all cohices asks user to do again?
///insert first 4 - MUST be one of each type if user selected