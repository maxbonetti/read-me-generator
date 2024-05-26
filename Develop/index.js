// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const colors = require(`colors`);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How is your project tested?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BDS 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(`Failed to write file ${err}`.red);
        } else {
            console.log('Successfully created README.md!'.green);
        }
    });
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions)
        .then(answers => {
            const readmeContent = generateReadmeContent(answers);
            writeToFile(`README.md`, readmeContent);
        });
}
// Function call to initialize app
init(questions);

function generateReadmeContent(answers) {
    //add license badge to display on readme for quick links
    const licenseBadge = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'None': ''
    };
    //when function is called return this info to readme.md file
    return `
    # ${answers.title}
    ${licenseBadge[answers.license]}

    ## Description
    ${answers.description}

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [License](#license)
        - [Questions](#questions)

        ## Installation
        ${answers.installation}
    
        ## Usage
        ${answers.usage}
    
        ## Contributing
        ${answers.contributing}
    
        ## Tests
        ${answers.test}
    
        ## License
    ${answers.license !== 'None' ? `This project is licensed under the ${answers.license} license.` : 'This project is not licensed.'}

    ### GitHub
    ${answers.github}

    ### Questions
    For more information, view my GitHub profile: [${answers.github}](https://github.com/${answers.github})
    If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}).
    `;
};
