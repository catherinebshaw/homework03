# The Password Generator

This simple tool allows users to generate random passwords using either lowercase letters, UPPERCASE letters, numbers or special characters. Based on the characters selected, the tool will generate a random combination of characters based on the password length specified by the user.

## User Experience

The user begins the process by clicking on the "Generate Password" button. The user is then taken through a series of questions, delivered through prompts, that asks how long the user would like the password to be. The minimum password length has been set at 8 characters and the maximum length set at 128. Failure to specify a length within these parameters returns the user to the password length prompt until an appropriate length has been set. 

Once a password length has been established, a series of prompts asks the user if they would like to use UPPERCASE characters, lowercase characters, numbers and/or special characters in their password. As long as the user selects *one* of the four types of characters, the password will be generated. If no character types are selected, the user is directed to select at least one through a prompt and the character selection process begins again.

At the end of the process, the generated password appears in the window. 

## Technology Used

This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. The clean, responsive user interface adapts to multiple screen sizes.

In the background, JavaScript uses multiple arrays for the various character types and employs the 'concat' function to merge the selected characters into a single array from which the password is generated. 


## Mock Up
![A password generator mock up](https://github.com/catherinebshaw/homework03/blob/master/assets/Password%20Generator%201.png)

## Try it yourself! 

[Password Generator](https://github.com/catherinebshaw/homework03)



