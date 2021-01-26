# 03 JavaScript: Password Generator

## Requirements

I was asked to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. Users can select from lowercase letters, UPPERCASE letters, numbers or special characters. The customer feels that employees will gain improved security from a password that is randomly generated. 

This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. The customer has asked for a clean, polished, and responsive user interface that adapts to multiple screen sizes.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Process

The starting mock-up code provided an effective framework for generating the password. I added an initial prompt that asks the user how many characters they would like their password and then subsequent prompts to define the specific types of characters they would like to include in the password. The chosen characters are amalgamated in a single array from which a password is randomly selected. The console log featuer was employed through the coding experience as a tool to help trouble-shoot.

## Site

Try the generator - https://github.com/catherinebshaw/homework03



