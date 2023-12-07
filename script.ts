// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Interface to define questions and answers
interface Question {
    type: string;
    name: string;
    message: string;
    default?: string;
    choices?: string[];
    filter?: (val: string) => string;
}

interface Answers {
    header: string;
    description: string;
    installation: string;
    usage: string;
    license: 'MIT' | 'GPL' | 'Apache' | 'BSD';
    contributing: string;
    tests: string;
    gitHub: string;
    email: string;
}
// Array of questions for user input
const questions: Question[] = [
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
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instructions',
      default: '(If none, write N/A)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.',
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
function writeToFile (info: string): void {
    fs.writeFile('assets/sample.md', info, (err: Error | null) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Data written successfully!');
        }
    });
}

// TODO: Create a function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init(): void {
    console.log('Hi, welcome to README Generator');
    inquirer.prompt(questions).then((answers: Answers) => {
    let header = `${answers.header}`;
    let description = `## Description\n\n${answers.description}`;
    let tableOfContents = `## Table of Contents\n\n- [Installation](#installation)\n\n- [Usage](#usage)\n\n- [License](#license)\n\n- [Credits](#credits)\n\n- [Tests](#tests)\n\n- [Questions](#questions)\n\n`
    let installation = `## Installation\n\n${answers.installation}`;
    let usage = `## Usage\n\n${answers.usage}`;
    let license = `## License`;
    let licenseNotice = `This application is covered under the ${answers.license} license.`;
    let badge = `[![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-green)](https://opensource.org/licenses/${answers.license.toLowerCase()})`
    let contributing = `## Credits\n\n${answers.contributing}`;
    let tests = `## Tests\n\n${answers.tests}`;
    let gitHub = `[GitHub](https://github.com/${answers.gitHub})`
    let questions = `## Questions\n\nIf you have any questions, feel free to checkout my ${gitHub} or reach out to ${answers.email}!`;
    let readMeInfo = `# ${header}\n\n${badge}\n\n${description}\n\n${tableOfContents}\n\n${installation}\n\n${usage}\n\n${license}\n\n${licenseNotice}\n\n${contributing}\n\n${tests}\n\n${questions}\n\n`
    writeToFile(readMeInfo);
});
}
// Function call to initialize app
init();

