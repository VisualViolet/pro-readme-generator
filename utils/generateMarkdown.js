// Function to render license content based on selection
function renderLicenseContent(license, username){
  if (license !== "Unlicensed")
  {
    return `${license} Copyright(c) ${new Date().getFullYear()} ${username}`
  }
  else
  {
    return `N/A`
  }
}

// Function to generate markdown for readme
function generateMarkdown(answers) {
  return `# ${answers.title}
![Badge](https://img.shields.io/badge/license-${answers.license}-blue)

## Description

${answers.description}

## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Contribution](#contribution)

-[Test](#test)

-[License](#license)

-[Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Test

${answers.test}

## License

${renderLicenseContent(answers.license, answers.username)}

## Questions

If you have questions, please reach out to me on GitHub or via email!

GitHub: https://github.com/${answers.username}

Email: ${answers.email}
`;
}

// Export for use
module.exports = generateMarkdown;
