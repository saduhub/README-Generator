// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'header',
      message: 'What is your project title?',
    //   default: 'Add title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description for your project:',
    //   default: 'Add title',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Please provide the sections for your table of contents:',
      default: '(EX: Installation, Usage, Credits, License)',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation steps',
      default: '(EX: [step 1], [step 2], [step 3], etc.)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide paragraph w/ instructions and examples for use.',
    //   default: 'Add title',
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
      default: '([Collaborator : GitHub], [Collaborator : GitHub], etc.)',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide tests:',
    //   default: 'Add title',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide questions:',
    //   default: 'Add title',
    },
    // {
    //   type: 'input',
    //   name: 'phone',
    //   message: "What's your phone number?",
    //   validate(value) {
    //     const pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     );
    //     if (pass) {
    //       return true;
    //     }
  
    //     return 'Please enter a valid phone number';
    //   },
    // },
    // {
    //   type: 'list',
    //   name: 'size',
    //   message: 'What size do you need?',
    //   choices: ['Large', 'Medium', 'Small'],
    //   filter(val) {
    //     return val.toLowerCase();
    //   },
    // },
    // {
    //   type: 'input',
    //   name: 'quantity',
    //   message: 'How many do you need?',
    //   validate(value) {
    //     const valid = !isNaN(parseFloat(value));
    //     return valid || 'Please enter a number';
    //   },
    //   filter: Number,
    // },
    // {
    //   type: 'expand',
    //   name: 'toppings',
    //   message: 'What about the toppings?',
    //   choices: [
    //     {
    //       key: 'p',
    //       name: 'Pepperoni and cheese',
    //       value: 'PepperoniCheese',
    //     },
    //     {
    //       key: 'a',
    //       name: 'All dressed',
    //       value: 'alldressed',
    //     },
    //     {
    //       key: 'w',
    //       name: 'Hawaiian',
    //       value: 'hawaiian',
    //     },
    //   ],
    // },
    // {
    //   type: 'rawlist',
    //   name: 'beverage',
    //   message: 'You also get a free 2L beverage',
    //   choices: ['Pepsi', '7up', 'Coke'],
    // },
    // {
    //   type: 'input',
    //   name: 'comments',
    //   message: 'Any comments on your purchase experience?',
    //   default: 'Nope, all good!',
    // },
    // {
    //   type: 'list',
    //   name: 'prize',
    //   message: 'For leaving a comment, you get a freebie',
    //   choices: ['cake', 'fries'],
    //   when(answers) {
    //     return answers.comments !== 'Nope, all good!';
    //   },
    // },
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
    console.log('\nOrder receipt:');
    let header = `${answers.header}`;
    let description = `## Description\n\n${answers.description}`;
    let tableOfContents = `## Table of Contents\n\n${answers.tableOfContents}`;
    let installation = `## Installation\n\n${answers.installation}`;
    let usage = `## Usage\n\n${answers.usage}`;
    // let license = `## License\n\n${answers.license}`;
    let licenseNotice = `This application is covered under the ${answers.license} license.`;
    let badge = `[![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-green)](https://opensource.org/licenses/${answers.license.toLowerCase()})`
    let contributing = `## Contributing\n\n${answers.contributing}`;
    let tests = `## Tests\n\n${answers.tests}`;
    let questions = `## Questions\n\n${answers.questions}`;
    let readMeInfo = `# ${header}\n\n${badge}\n\n${description}\n\n${tableOfContents}\n\n${installation}\n\n${usage}\n\n${licenseNotice}\n\n${contributing}\n\n${tests}\n\n${questions}\n\n`
    writeToFile(readMeInfo);
});
}
// Function call to initialize app
init();