// Assignment Code
var generateBtn = document.querySelector("#generate");


//Establish variables
var password
var pwdLength
var passwordText
var optionsArray
var solved

var numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G,", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerCase = ["a", "b", "c", "d", "e", "f","g","h","i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
var specChars = ["!","@", "$", "%", "^", "&", "*", "+" ];
//Create a new array to consolidate chosen characters. Will pick password out of this array//
var chosenCharacters = [];

//set choices to use in password - set to false to start//
var userChoice = {
    choiceUppercase: false,
    choiceLowercase: false,
    choiceSpecial: false,
    choiceNumbers: false,

}

function start(event) {
    event.preventDefault()
    console.log("Password please");
    getUserOptions()
}      
    
function getUserOptions() {
//password length defined by user response to prompt//
pwdLength = parseInt(prompt( "Please pick a password length between 8 and 128 characters" ));
//first - check to see if password length is meets parameters//
    if( pwdLength < 8 || pwdLength > 128 ) {
        alert( "Please include a number more than 8 and less than 128!" );
        getUserOptions();
    } else if ( 8 < pwdLength < 128 ) {
        //check if user wants to use uppercase//
        var choiceUppercase = confirm( "Would you like to include UPPERCASE characters in your password?" );
        if (choiceUppercase){
            userChoice.choiceUppercase = true; 
            chosenCharacters.push(upperCase)
            console.log("yes to uppercase");
        }  
        //check if user wants to use lowercase//
        var choiceLowercase = confirm( "Would you like to include lowercase characters in your password?" );
        if (choiceLowercase){
            userChoice.choiceLowercase = true;
            chosenCharacters.push(lowerCase);
            console.log("yes to lowercase");
        }
        //check if user wants to use Special Characters//
        var choiceSpecial = confirm( "Would you like to include special characters (#%&) in your password?" );
        if (choiceSpecial){
            userChoice.choiceSpecial = true;
            chosenCharacters.push(specChars);
            console.log("yes to special characters");
        } 
        //check if user wants to use Numbers//
        var choiceNumbers = confirm( "Would you like to include numbers in your password?" );
        if (choiceNumbers){
            userChoice.choiceNumbers = true;
            chosenCharacters.push(numbers); 
            console.log("yes to numbers");
        }
        //check that at least one type of character has been chosen//
        //if at least one character type has been chosen, then run function to generate password//
        if (choiceUppercase == true || choiceLowercase == true || choiceSpecial == true || choiceNumbers == true ) { 
            alert("generating password....");
        }
        //if not then start get user option function again// 
        else {alert( "Please select one or more types of characters to generate a password" );
        getUserOptions();
        }
        generatePassword(chosenCharacters)
    }
}

function generatePassword(chosenCharacters) {
    var password = [];
    var optionsArray =  [];
    var solved = '';
    //combine all the chosen character arrays to the single array chosenCharacters//

    console.log("chosen characters are ", chosenCharacters);
    //to create a selection of characters from the original arrays//
    //use concat to combine them in one array h is the number of arrays chosen//
    for (var h = 0; h < chosenCharacters.length; h++){
    optionsArray = optionsArray.concat(chosenCharacters[h]);
    }
    console.log("Options array is", optionsArray);
    //get the length of options array//
    
    var length = optionsArray.length;
    for (var i = 0; i < pwdLength; i++){
        password.push(optionsArray[Math.floor(Math.random() * length) + 1 ]);
    } 
    // create a for loop for password and add character to solved string one at a time//
    for (var x = 0; x < pwdLength; x++ ){
        solved += password[x];
    }
    password = solved
    console.log(password)
    //Set password to solved so that we can append password to the screen when donce
   
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

    // Add event listener to generate button
    generateBtn.addEventListener("click", getUserOptions);       
