// Assignment Code
var generateBtn = document.querySelector("#generate");

//set choices to use in password - set to false to start//
var userChoice = {
    choiceUppercase: false,
    choiceLowercase: false,
    choiceSpecial: false,
    choiceNumbers: false,

}

function start() {
        console.log("Password please");
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
}      

//create generate password function
//create link so password that is generated is posted in HTML at element ID password
function generatePassword(){
    //define the four variables//
   
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G,", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    var lowerCase = ["a", "b", "c", "d", "e", "f","g","h","i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
    var specChars = ["!","@", "$", "%", "^", "&", "*", "+" ];

    //Create a new array to consolidate chosen characters. Will pick password out of this array//
    var chosenCharacters = [];
    //prompt user to enter length of password - how many characters to include//
    var pwdLength = parseInt(prompt( "Please pick a password length between 8 and 128 characters" ));
    //start process//
    function getUserOptions() {
        //first - check to see if password length is meets parameters//
        if( pwdLength < 8 || pwdLength > 128 ) {
            alert( "Please include a number more than 8 and less than 128!" );
            getUserOptions();
        } else if ( 8 < pwdLength < 128 ) {
            //check if user wants to use uppercase//
            var choiceUppercase = confirm( "Would you like to include UPPERCASE characters in your password?" );
            if (choiceUppercase){
                userChoice.choiceUppercase = true; 
                console.log("yes to uppercase");
            }  
            //check if user wants to use lowercase//
            var choiceLowercase = confirm( "Would you like to include lowercase characters in your password?" );
            if (choiceLowercase){
                userChoice.choiceLowercase = true;
                console.log("yes to lowercase");
            }
            //check if user wants to use Special Characters//
            var choiceSpecial = confirm( "Would you like to include special characters (#%&) in your password?" );
            if (choiceSpecial){
                userChoice.choiceSpecial = true;
                console.log("yes to special characters");
            } 
            //check if user wants to use Numbers//
            var choiceNumbers = confirm( "Would you like to include numbers in your password?" );
            if (choiceNumbers){
                userChoice.choiceNumbers = true;
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
        }
    }
    

    function generatePassword(userChoice) {
        var password = [];
        var optionsArray =  [];
        var solved = '';
        //push all the chosen character sets to the single array chosenCharacters//
        if (userChoice.choiceUppercase == true){
            chosenCharacters.push(upperCase)
        }
        if (userChoice.choiceLowercase == true ){
            chosenCharacters.push(lowerCase);
        }
        if (userChoice.choiceSpecial == true ){
            chosenCharacters.push(specChars);
        }
        if (userChoice.choiceNumbers == true){
            chosenCharacters.push(numbers);
        }
        console.log("chosen characters are ", chosenCharacters);
        //to create a selection of characters from the original arrays//
        //use concat to combine them in one array//
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
        //Set password to solved so that we can append password to the screen when donce
        password = solved;

        //return a password in order to return a password from generatePasswored, the larger or primary function
        return password;
    }
    getUserOptions();
    return generatePassword(userChoice)
}   
document.getElementById("password").innerHTML = generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", start);
