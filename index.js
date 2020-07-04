// Call in the required packages for this JavaScript Application:

        // fs is a Node standard library package for reading and writing files
        const fs = require("fs");

        // Inquirer is a Node library for asking questions, parsing the input, validating answers and managing heirarchal prompts
        const inquirer = require("inquirer");

        // Util is a node library
        const util = require("util");

        // For writing generated data to a file
        const writeFileAsync = util.promisify(fs.writeFile);

// Function to ask the user questions, then based off responses, generate the README.md file by running various functions.

        function promptUser() {
            return inquirer.prompt(
                [
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
                        message: "Provide instructions and examples for use. Include screenshots if necessary."
                    },
                    {
                        // Contribution Guidelines
                        // I will have to read the Contributor Covenant: https://www.contributor-covenant.org to make different questions
                        type: "input",
                        name: "contributing" ,
                        message: "If you want other developers to contribute to your application, add guidelines on how to do this"
                    },
                    {
                        // Test Instructions
                        type: "input",
                        name: "test" ,
                        message: "Go the extra mile if you want and write tests for your application. Then provide examples of how to run them."
                    },
                    {
                        // Choose License from list of licenses.
                        type: "list",
                        name: "license",
                        message: "From the list below, choose the type of license you want for your application. To get help deciding on a license visit: http://www.choosealicense.com",
                        choices: [
                            "MIT License",
                            "GNU GPLv3",
                            "GNU AGPLv3",
                            "GNU LGPLv3",
                            "Mozilla Public License 2.0",
                            "Apache License 2.0",
                            "Boost Software License 1.0",
                            "The Unlicense"
                        ]
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
            ]);
        }

// Function to show Licensing:

        function licensing(answers) {

            // We create an an object with license description and badge data. Based off user prompt answers, we will destructure the object accordingly and return that value.

            let licenseArray = [];
            
            if (answers.license == "MIT License"){
                licenseArray.push(
                    
                );
            } else if (answers.license == "GNU GPLv3") {
                licenseArray.push(

                );
            } else if (answers.license == "GNU AGPLv3") {
                licenseArray.push(

                );
            } else if (answers.license == "GNU LGPLv3") {
                licenseArray.push(

                );
            } else if (answers.license == "Mozilla Public License 2.0") {
                licenseArray.push(

                );
            } else if (answers.license == "Apache License 2.0") {
                licenseArray.push(

                );
            } else if (answers.license == "Boost Software License 1.0") {
                licenseArray.push(

                );
            } else {
                licenseArray.push(

                );
            }

            return licenseArray;

        }

// Function to generate Markdown file for Readme. Use template literals:

function generateMarkdown(answers) {
        // Display Title of the Readme:
        // Display sections of the Readme entitled Description, Installation, Usage, Contributing and Tests:
        // Display a badge for the license that is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under:
        // Add Github user name with a link to Github profile under the section titled Questions:
        // Generate 1 badge specific to the repository
        // Add user's email address to the section titled Questions, with instructions on how to reach for additional questions:
        // Generate Table of Contents. When user clicks on lnks in the TOC, user is taken to corresponding section of the README

        return `

        # ${answers.title}

        #### Table of Contents
        [Description](## Description)
        [Installation](## Installation)
        [Usage](## Usage)
        [License](## License)
        [Contributing](## Contributing)
        [Tests](## Tests)
        [Questions](## Questions)

        ## Description

        ${answers.description}

        ## Installation

        ${answers.installation}

        ## Usage 

        ${answers.usage}

        ## License

        ${}

        ## Contributing

        ${answers.contributing}

        ## Tests

        ${answers.test}

        ## Questions

        For questions, email me at: ${answers.email}
        Or visit my Github
        
        
        `

};

// function to initialize program
async function init() {
    try {
        const answers = await promptUser()

        const mdfile = generateMarkdown(answers);

        await writeFileAsync("README.md", mdfile);

        console.log("Successfully created Readme file")
    } 
    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
