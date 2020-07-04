// Call in the required packages for this JavaScript Application:

        // fs is a Node standard library package for reading and writing files
        var fs = require("fs");

        // Inquirer is a Node library for asking questions, parsing the input, validating answers and managing heirarchal prompts
        var inquirer = require("inquirer");




// array of questions for user
        const questions = [
                {
                    // the title of the readme
                    type: "input",
                    name: "title" ,
                    message: "What is the title of your README.md file?" 
                },
                {
                    // Description of the project
                    type: "input",
                    name: "description",
                    message: "Enter a description for your project. A hint would be to write it in a text editor and copy that text into this input."
                },
                {
                    // Installation Instructions
                    type: "input",
                    name: "installation",
                    message: " What are the prerequisite installation(s) required to run your application?"
                },
                {
                    // Usage Information
                    type: "input",
                    name: "usage",
                    message:
                },
                {
                    // Contribution Guidelines
                    type: "input",
                    name: "contribution" ,
                    message:
                },
                {
                    // Test Instructions
                    type: "input",
                    name: "test" ,
                    message:
                },
                {
                    // Choose License from list of licenses.
                    type: "list",
                    name: "license",
                    message: "From the list below, choose the type of license you want for your application."
                },
                {
                    // Ask the user his github username.
                    type: "input",
                    name: "github",
                    message: "What is your github username?"
                },
                {
                    // Ask user's email address
                    type: "input",
                    name: "email",
                    message: "What is your email?"
                }
        ];

// Actions for the program to take to Generate Readme:

        // Display Title of the Readme:

        // Display sections of the Readme entitled Description, Installation, Usage, Contributing and Tests:

        // Display a badge for the license that is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under:

        // Add Github user name with a link to Github profile under the section titled Questions:

        // Generate 1 badge specific to the repository

        // Add user's email address to the section titled Questions, with instructions on how to reach for additional questions:
        
        // Generate Table of Contents. When user clicks on lnks in the TOC, user is taken to corresponding section of the README

// Method of the program:
        // Call the required Modules
        // Build the object that contains questions and answers based off User inputs using the Inquirer Module
        // Create a blank markdown file called Readme using fs.writeFile
        // Create a function that will write each line of the object using some sort of loop maybe a for loop or foreach loop.
        // Within the For Loop, Use an ansychronous method using fs to append to the previously created Readme.md file. 

// Hints (These are the assignments I can look up to help do this homework):
        // Week 05 Day 03: 00-40-Stu_Mini_Project
        // Week 05 Day 01: 14-Ins_Inquirer-Demo
        // Week 04 Day 05: 05-Ins_readFile
         // Week 04 Day 05: 06-Ins_writeFile
         // Week 04 Day 05: 07-Stu_appendFile
            


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
