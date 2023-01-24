// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [
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
      choices: ["Apache", "MIT", "GPLv2", "GPLv3", "BSD3", "BSD2", "LGPLv3", "AGPLv3", "Unlicensed"],
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
  ];

// Function to call writeFile method to create readme
function writeReadme(filename, answers){
    fs.writeFile(filename, answers, (err) =>
        err? console.log(err): console.log("README.md successfully generated!")
    );
}

// Initialize function: calls Inquirer and sends answers to write function
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;
        writeReadme(filename, generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
