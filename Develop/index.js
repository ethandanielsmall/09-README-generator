// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'please describe this project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'please give instructions for installation',
        name: 'install'
    },
    {
        type: 'input',
        message: 'please explain the purposes of the information that will be collected',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'please describe the contribution guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'please describe the test instructions',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'what is your linkedin username?',
        name: 'linkedin'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
