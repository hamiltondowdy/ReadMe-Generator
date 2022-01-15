// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
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
},
{
    type: 'checkbox',
    name: 'contents',
    message: 'additional sections?',
    choices: [
        {
            name: 'deployed application',
            checked: false
        },
        {
            name: 'installation',
            checked: false
        },
        {
            name: 'screenshots',
            checked: false
        },
        {
            name: 'built with',
            checked: false
        },
        {
            name: 'license',
            checked: false
        },
        {
            name: 'contributing',
            checked: false
        },
        {
            name: 'tests',
            checked: false
        },
        {
            name: 'questions',
            checked: true
        },
        {
            name: 'credits',
            checked: true
        },
    ]
},
{
    type: 'input',
    name: 'link',
    message: 'provide link to deployed application',
    when: ({ contents }) => {
        if (contents.indexOf('deployed application') > -1) {
            return true;
        } else {
            return false;
        }
    },
    validate: linkInput => {
        if (linkInput) {
            return true;
        } else {
            console.log('please enter a link');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'Please list any required packages for installation of your application.',
    when: ({ contents }) => {
        if (contents.indexOf('Installation') > -1) {
            return true;
        } else {
            return false;
        }
    },
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('Please enter installation instructions!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Please provide license information.',
    choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
    default: 0,
    when: ({ contents }) => {
        if (contents.indexOf('License') > -1) {
            return true;
        } else {
            return false;
        }
    },
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please provide license information!');
            return false;
        }
    }
}, 
{
    type: 'checkbox',
    name: 'built with',
    message: 'Please select the technologies that your application was built with.',
    choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'],
    default: 0,
    when: ({ contents }) => {
        if (contents.indexOf('Built With') > -1) {
            return true;
        } else {
            return false;
        }
    }
}, 
{
    type: 'input',
    name: 'contributing',
    message: 'Please enter your guidelines for contributing.',
    when: ({ contents }) => {
        if (contents.indexOf('Contributing') > -1) {
            return true;
        } else {
            return false;
        }
    },
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('Please enter guidelines for contributing!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Please enter test information for your application.',
    when: ({ contents }) => {
        if (contents.indexOf('Tests') > -1) {
            return true;
        } else {
            return false;
        }
    },
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('What packages are required to run tests for your application?');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'questions',
    message: 'Please provide an email address for others to reach you with questions.',
    when: ({ contents }) => {
        if (contents.indexOf('Questions') > -1) {
            return true;
        } else { 
            return false;
        }
    },
    validate: questionsInput => {
        if (questionsInput) {
            return true;
        } else {
            console.log('Please provide an email address!');
            return false;
        }
    }
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('readme created')
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init();
