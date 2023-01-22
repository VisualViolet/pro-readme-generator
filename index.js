// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter project description:",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Please enter usage information:",
      name: "usage",
    },
    {
      type: "input",
      message: "Please enter contribution guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please enter test instructions:",
      name: "test",
    },
    {
      type: "list",
      message: "Please choose a license:",
      choices: ["Apache License 2.0", "MIT License", "GPLv2", "GPLv3", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3", "Unlicensed"],
      name: "license",
    },
    {
      type: "input",
      message: "Enter GitHub username:",
      name: "username",
    },
    {
      type: "input",
      message: "Enter email address:",
      name: "email",
    }
  ])

// TODO: Create a function to write README file
    .then((answers) => {
    const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, generateMarkdown(answers), (err) =>
        err? console.log(err): console.log("README.md successfully generated!")
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
