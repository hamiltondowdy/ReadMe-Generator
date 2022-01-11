// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'provide a project title (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('provide title');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter github username (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('enter github username');
                return false;
            }
        }
    },
{

}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
