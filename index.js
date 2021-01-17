const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter project name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation command',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Enter contribution guidelines',
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((response) => {
    let data = generateMarkdown(response);
    fs.writeFile("README2.md", data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });