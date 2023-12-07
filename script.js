// Packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
// Array of questions for user input
var questions = [
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
        filter: function (val) {
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
function writeToFile(info) {
    fs.writeFile('assets/sample.md', info, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Data written successfully!');
        }
    });
}
// TODO: Create a function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
    console.log('Hi, welcome to README Generator');
    inquirer.prompt(questions).then(function (answers) {
        var header = "".concat(answers.header);
        var description = "## Description\n\n".concat(answers.description);
        var tableOfContents = "## Table of Contents\n\n- [Installation](#installation)\n\n- [Usage](#usage)\n\n- [License](#license)\n\n- [Credits](#credits)\n\n- [Tests](#tests)\n\n- [Questions](#questions)\n\n";
        var installation = "## Installation\n\n".concat(answers.installation);
        var usage = "## Usage\n\n".concat(answers.usage);
        var license = "## License";
        var licenseNotice = "This application is covered under the ".concat(answers.license, " license.");
        var badge = "[![License: ".concat(answers.license, "](https://img.shields.io/badge/license-").concat(answers.license, "-green)](https://opensource.org/licenses/").concat(answers.license.toLowerCase(), ")");
        var contributing = "## Credits\n\n".concat(answers.contributing);
        var tests = "## Tests\n\n".concat(answers.tests);
        var gitHub = "[GitHub](https://github.com/".concat(answers.gitHub, ")");
        var questions = "## Questions\n\nIf you have any questions, feel free to checkout my ".concat(gitHub, " or reach out to ").concat(answers.email, "!");
        var readMeInfo = "# ".concat(header, "\n\n").concat(badge, "\n\n").concat(description, "\n\n").concat(tableOfContents, "\n\n").concat(installation, "\n\n").concat(usage, "\n\n").concat(license, "\n\n").concat(licenseNotice, "\n\n").concat(contributing, "\n\n").concat(tests, "\n\n").concat(questions, "\n\n");
        writeToFile(readMeInfo);
    });
}
// Function call to initialize app
init();
