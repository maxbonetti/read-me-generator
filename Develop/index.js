// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const colors = require(`colors`);
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message:'Provide a brief description of your project:'
    },
    {
        type:'input',
        name:'installation',
        message:'How is your project installed?'
    },
    {
        type:'input',
        name:'usage',
        message:'How is your project used?',
    },
    {
        type:'input',
        name:'contributing',
        message:'How can others contribute to your project?',
    },
    {
        type:'input',
        name:'test',
        message:'How is your project tested?'
    },
    {
        type:'list',
        name:'license',
        message:'Choose a license for your project:',
        choices:['MIT','GPL 3.0','Apache 2.0', 'BDS 3','None']
    },
    {
        type:'input',
        name:'github',
        message:'Enter your GitHub username:'
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email address:'
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(`Failed to write file ${err}`.red);
        } else {
            console.log(`Successfully`.green `created README.md!`.white.bgBlack);
        }
    });
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
    .prompt(questions)
    .then(answers => {
        const readmeContent = generateReadmeContent(answers);
        writeToFile(`README.md`,readmeContent);
    });
}
// Function call to initialize app
init(questions);

function generateReadmeContent(answers) {
    const licenseBadge = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'None': ''
    };

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

    ## Installation Process
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contribution's
    ${answers.contributing}

    ## How to Test
    ${answers.test}

    ## License's 
    ${answers.license}

    ### GitHub
    ${answers.github}

    ## Questions
    If you have any questions in regards to ${answers.title}, please contact me at [${answers.email}](mailto:${answers.email}).
    `;
}
