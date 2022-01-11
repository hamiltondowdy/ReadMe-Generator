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
    type: 'input',
    name: 'repo',
    message: 'enter repo name (required)',
    validate: githubRepo => {
        if (githubRepo) {
            return true;
        } else {
            console.log('enter repo name')
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'enter repo description (required)',
    validate: repoDescription => {
        if(repoDescription) {
            return true;
        } else {
            console.log('enter repo description');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'provide usage info (required)',
    validatea: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('provide usage info');
            return false;
        }
    }
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
