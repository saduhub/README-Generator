// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'header',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description for your project:',
    },
    // {
    //   type: 'input',
    //   name: 'tableOfContents',
    //   message: 'Please provide the sections for your table of contents:',
    //   default: '(EX: Installation Usage Credits License)',
    // },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide paragraph w/ instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is your license?',
      choices: ['MIT', 'GPL', 'Apache', 'BSD'],
      filter(val) {
      return val;
      },
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please list your collaborators:',
      default: '(If none, write N/A)',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide tests:',
      default: '(If none, write N/A)',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Please provide gitHub:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide email:',
    },
  ];

// TODO: Create a function to write README file
function writeToFile (info) {
    fs.writeFile('../README.md', info, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Data written successfully!');
        }
    });
}

// TODO: Create a function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
    console.log('Hi, welcome to README Generator');
    inquirer.prompt(questions).then((answers) => {
    // 
    let header = `${answers.header}`;
    let description = `## Description\n\n${answers.description}`;
    // let tableOfContents = `## Table of Contents\n\n${answers.tableOfContents}`;
    // let tableArray = answers.tableOfContents.split(' ')
    // let tableString = "";
    // function generateTableString() {
    //     tableArray.forEach(function (word) {
    //     tableString += `- [${word}](#${word})\n\n`
    //   });
    // }
    // generateTableString();
    let tableOfContents = `## Table of Contents\n\n- [Installation](#installation)\n\n- [Usage](#usage)\n\n- [License](#license)\n\n- [Credits](#credits)\n\n- [Tests](#tests)\n\n- [Questions](#questions)\n\n`

    let installation = `## Installation\n\n${answers.installation}`;
    let usage = `## Usage\n\n${answers.usage}`;
    let license = `## License`;
    let licenseNotice = `This application is covered under the ${answers.license} license.`;
    let badge = `[![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-green)](https://opensource.org/licenses/${answers.license.toLowerCase()})`
    let contributing = `## Credits\n\n${answers.contributing}`;
    let tests = `## Tests\n\n${answers.tests}`;
    // 
    let gitHub = `[GitHub](https://github.com/${answers.gitHub})`
    let questions = `## Questions\n\nIf you have any questions, feel free to checkout my ${gitHub} or reach out to ${answers.email}!`;
    let readMeInfo = `# ${header}\n\n${badge}\n\n${description}\n\n${tableOfContents}\n\n${installation}\n\n${usage}\n\n${license}\n\n${licenseNotice}\n\n${contributing}\n\n${tests}\n\n${questions}\n\n`
    writeToFile(readMeInfo);
});
}
// Function call to initialize app
init();

