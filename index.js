// TODO: Include packages needed for this application
//pulling in inquirer based on lesson 19    
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// TODO: Create an array of questions for user input
//const questions = [

//not showing up like it should when I run node index.js on command line




function generateReadme(promptData) {
    return `
# ${promptData.title}

# Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Credits](#Credits)
[Contributing](#Contributing)
[Testing](#Testing)
[License](#License)
[Questions](#Questions)

## Description

${promptData.description}



## Installation

${promptData.installation}

## Usage

${promptData.usage}

## Credits

N/A

## Contributing

## Testing

${promptData.test}

## License

${promptData.license}

## Questions

https://github.com/${promptData.gHubUser}
${promptData.email}


`
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadme(data), (err) => {
        if (err)
            console.log(err);
        //else is optional
        else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync(fileName, "utf8"));
        }
    }
    )

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter description of your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter installation instructions.',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Enter usage details.',
                name: 'usage',
            },
            {
                type: 'checkbox',
                message: 'Enter license details.',
                name: 'license',
                //added choices for license from github
                choices: ['a','b','c']
            },
            {
                type: 'input',
                message: 'Enter contributing information.',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Enter test information.',
                name: 'test',
            },
            {
                type: 'input',
                message: 'Enter questions',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your Github userName?',
                name: 'gHubUser',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email,'
            }
        ])
        .then(answers => {
            writeToFile('./output/Readme.md', answers)
        });
}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README