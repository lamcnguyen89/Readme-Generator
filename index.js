// Call in the required packages for this JavaScript Application:

        // fs is a Node standard library package for reading and writing files
        const fs = require("fs");

        // Inquirer is a Node library for asking questions, parsing the input, validating answers and managing heirarchal prompts
        const inquirer = require("inquirer");

        // Util is a node library
        const util = require("util");

        // For writing generated data to a file
        const writeFileAsync = util.promisify(fs.writeFile);

        // We create an an empty object for the license description and badge data. Based off user prompt answers, we will push certain values to the array that can be used to write the readme.
        let licenseArray = [];

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
                            "MIT",
                            "GPL v3",
                            "AGPL v3",
                            "LGPL v3",
                            "MPL 2.0",
                            "Apache 2.0",
                            "Boost 1.0",
                            "Unlicense"
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

// Function to show Licensing badge and to display text under the Licensing section of the Readme::

        function licensing(answers) {

            if (answers.license == "MIT"){
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-MIT-yellow.svg");
                const licenseURL2 = "https://opensource.org/licenses/MIT"; 
                const licenseText = "This application is licensed under the MIT License. <br /> To read more about the conditions of this license, visit: https://opensource.org/licenses/MIT"
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "GPL v3") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-GPLv3-blue.svg");
                const licenseURL2 = new URL("https://www.gnu.org/licenses/gpl-3.0"); 
                const licenseText = "This application is licensed under the GNU General Public License. <br /> To read more about the conditions of this license, visit: https://www.gnu.org/licenses/gpl-3.0 ";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "AGPL v3") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-AGPL%20v3-blue.svg");
                const licenseURL2 = new URL("https://www.gnu.org/licenses/agpl-3.0"); 
                const licenseText = "This application is licensed under the GNU Affero General Public License. <br /> To read more about the conditions of this license, visit: https://www.gnu.org/licenses/agpl-3.0 ";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "LGPL v3") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-LGPL%20v3-blue.svg");
                const licenseURL2 = new URL("https://www.gnu.org/licenses/lgpl-3.0"); 
                const licenseText = "This application is licensed under the GNU Lesser General Public License. <br /> To read more about the conditions of this license, visit: https://www.gnu.org/licenses/lgpl-3.0";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "MPL 2.0") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg");
                const licenseURL2 = new URL("https://opensource.org/licenses/MPL-2.0"); 
                const licenseText = "This application is licensed under the Mozilla Public License 2.0. <br /> To read more about the conditions of this license, visit: https://opensource.org/licenses/MPL-2.0";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "Apache 2.0") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-Apache%202.0-blue.svg");
                const licenseURL2 = new URL("https://opensource.org/licenses/Apache-2.0"); 
                const licenseText = "This application is licensed under the Apache License 2.0. <br /> To read more about the conditions of this license, visit: https://opensource.org/licenses/Apache-2.0  ";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText);
            } else if (answers.license == "Boost 1.0") {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/License-Boost%201.0-lightblue.svg");
                const licenseURL2 = new URL("https://www.boost.org/LICENSE_1_0.txt"); 
                const licenseText = "This application is licensed under the Boost Software License. <br /> To read more about the conditions of this license, visit: https://www.boost.org/LICENSE_1_0.txt";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText); 
            } else {
                const licenseTag = answers.license;
                const licenseURL1 = new URL("https://img.shields.io/badge/license-Unlicense-blue.svg");
                const licenseURL2 = new URL("http://unlicense.org/"); 
                const licenseText = "This application is licensed under the Unlicense. <br /> To read more about the conditions of this license, visit: https://unlicense.org/";
                licenseArray.push(licenseTag, licenseURL1.href, licenseURL2.href, licenseText); 
            }

            return licenseArray;

        }

// Function to generate Markdown file for Readme. Used template literals and pulled data from the object created by the promptUser function and the licensing function:

function generateMarkdown(answers) {

        return `
# ${answers.title}

[![License: ${licenseArray[0]}](${licenseArray[1]})](${licenseArray[2]})

#### Table of Contents
* [Description](##Description)
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage 

${answers.usage}

## License

${licenseArray[3]}

## Contributing

${answers.contributing}

## Tests

${answers.test}

## Questions

For questions, email me at: ${answers.email} <br />
Or visit my Github [here](https://github.com/${answers.github})

        `
};

// function to initialize program
async function init() {
    try {
        const answers = await promptUser();

        licensing(answers);

        const mdfile = generateMarkdown(answers);

        await writeFileAsync("./createdreadmefiles/README.md", mdfile);

        console.log("Successfully created Readme file")
    } 
    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
