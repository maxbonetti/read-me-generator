// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  const badges = {
      "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      "Apache 2.0": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
      "GPL 3.0": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
      "BSD 3-Clause": "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  };
  return badges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  const links = {
      "MIT": "https://opensource.org/licenses/MIT",
      "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
      "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
      "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause"
  };
  return links[license] || '';
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project is licensed under the ${license} license. [Learn more](${renderLicenseLink(license)}).
${renderLicenseBadge(license)}
`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
Find more of my work at [${data.github}](https://github.com/${data.github}).
`;
};

module.exports = generateMarkdown;
