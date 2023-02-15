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
                choices: ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license','BSD 3-clause Clear license','Creative Commons license family','Creative Commons Zero v1.0 Universal','Creative Commons Attribution 4.0','Creative Commons Attribution Share Alike 4.0','Eclipse Public License 2.0','European Union Public License 1.1','MIT','Mozilla Public License 2.0','Microsoft Public License','PostgreSQL License','The Unlicense','zLib License','SIL Open Font License 1.1','University of Illinois/NCSA Open Source License','Open Software License 3.0']
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
                name: 'email'
            }
        ])
        .then(answers => {
            writeToFile('./output/Readme.md', answers)
        });
}

// Function call to initialize app
init();

