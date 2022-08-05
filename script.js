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

//character arrays in global memory
var special = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"
]
var numeric = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]
var uppercase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
var lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
var arrays = [
  special, numeric, uppercase, lowercase
]
// console.log(arrays)
// console.log(special, numeric, uppercase, lowercase)


function generatePassword() {
  
  var charNumber = prompt("How many characters would you like to use in your password?");
    
  if (charNumber < 8){
      alert("You must use at least 8 characters.");
      return;
    } else if (charNumber > 128) {
      alert("You must use 128 characters or less");
      return;
    } else {
      
      var userSpecial = confirm("Would you like to use special characters in your password?");
      var userNumeric = confirm("Would you like to use numbers in your password?")
      var userUppercase = confirm("would you like to use uppercase letters in your password?")
      var userLowercase = confirm("Would you like to use lowercase letters in your password?")

      // select which characters to use, and run a function that only uses the selected characters. At least one type of character must be selected.
      if (
        userSpecial && userNumeric && userUppercase && userLowercase) {
          // console.log("all characters");
          for (var i = 0; i < charNumber; i++) {
            var randomArray = arrays[Math.floor(Math.random () * arrays.length)]; 
            var randomCharacter = randomArray[Math.floor(Math.random () * randomArray.length)];
            // console.log(randomCharacter)
            return randomCharacter;
          }
        // return password;

      } 
      
      else if ((userSpecial) && (userNumeric === false && userUppercase === false && userLowercase === false)) {
        console.log("only special characters")
      }

      else if ((userNumeric) && (userSpecial === false && userUppercase === false && userLowercase === false)) {
        console.log("only Numbers")
      }

      else if ((userUppercase) && (userNumeric === false && userSpecial === false && userLowercase === false)) {
        console.log("only uppercase characters")
      }

      else if ((userLowercase) && (userNumeric === false && userUppercase === false && userSpecial === false)) {
        console.log("only lowercase characters")
      }

      else if ((userSpecial && userNumeric) && (userUppercase === false && userLowercase === false)) {
        console.log("Special and Numeric Characters")
      }

      else if ((userSpecial && userUppercase) && (userNumeric === false && userLowercase === false)) {
        console.log("Special and uppercase Characters")
      }

      else if ((userSpecial && userLowercase) && (userNumeric === false && userUppercase === false)) {
        console.log("Special and Lowercase Characters")
      }

      else if ((userNumeric && userUppercase) && (userSpecial === false && userLowercase === false)){
        console.log("Numbers and uppercase")
      }

      else if ((userNumeric && userLowercase) && (userSpecial === false && userUppercase === false)){
        console.log("Numbers and lowercase")
      }

      else if ((userUppercase && userLowercase) && (userSpecial === false && userNumeric === false)) {
        console.log("uppercase & lowercase")
      }

      else if ((userSpecial && userNumeric && userUppercase) && (userLowercase === false)) {
        console.log("Special, Numeric, and uppercase")
      }

      else if ((userSpecial && userNumeric && userLowercase) && (userUppercase === false)) {
        console.log("special, numeric, and lowercase")
      }

      else if ((userSpecial && userUppercase && userLowercase) && (userNumeric === false)) {
        console.log("special, uppercase, and lowercase")
      }

      else if ((userUppercase && userNumeric && userLowercase) && (userSpecial === false)) {
        console.log("uppercase, numeric, and lowercase")
      }
      
      else {
        alert("You must select at least one type of character.");
        return;
      }
    }
}
