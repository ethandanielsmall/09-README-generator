// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
text = "this is the text"

// TODO: Create a function to write README file

function writeReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.install}
  
  ## Usage
  
  ${answers.usage}
  
  ## Contributing
  
  ${answers.contribution}
  
  ## Tests
  
  ${answers.testing}
  
  ## Questions
  
  If you have any questions, please feel free to contact me via GitHub or LinkedIn:
  
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - LinkedIn: [${answers.linkedin}](https://www.linkedin.com/in/${answers.linkedin}/)
    `;
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = writeReadme(answers);
        fs.writeFile(`${answers.title}-README.md`, readmeContent, (err) => {
        if (err) throw err;
        console.log('File written successfully!');
      });
    });
  }

// Function call to initialize app
init();