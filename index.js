// Call in the required packages for this JavaScript Application:

        // fs is a Node standard library package for reading and writing files
        var fs = require("fs");

        // Inquirer is a Node library for asking questions, parsing the input, validating answers and managing heirarchal prompts
        var inquirer = require("inquirer");




// array of questions for user
const questions = [

    // the title of the readme
    
    // Description of the project

    // Installation Instructions

    // Usage Information

    // Choose License from list of licenses.

    // Contribution Guidelines

    // Test Instructions

    // Questions: 
        // Ask the user his github username.
        // Ask use email address
  

];

// Actions for the program to take to Generate Readme:
        // Display Title of the Readme:

        // Display sections of the Readme entitled Description, Installation, Usage, Contributing and Tests:

        // Display a badge for the license that is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under:

        // Add Github user name with a link to Github profile under the section titled Questions:

        // Add user's email address to the section titled Questions, with instructions on how to reach for additional questions:
        
        // Generate Table of Contents. When user clicks on lnks in the TOC, user is taken to corresponding section of the README


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
