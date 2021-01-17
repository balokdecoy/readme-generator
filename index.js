// NPM Inquirer
const inquirer = require('inquirer');
// NPM File System
const fs = require('fs');
// Requires Generate Markdown file
const generateMarkdown = require('./utils/generateMarkdown');

// User prompts
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
      type: 'input',
      name: 'tests',
      message: 'Enter program test code',
    },
    {
      type: 'list',
      message: 'Select a license if applicable',
      name: 'license',
      choices: ['Apache','Eclipse','GPL','IBM','LGPL','MIT', 'Mozilla', 'None'],
    },
    {
      type: 'input',
      name: 'githubProfile',
      message: 'Enter your Github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
  ])
  // Trigger file creation
  .then((response) => {
    let data = generateMarkdown(response);
    fs.writeFile("README-custom.md", data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });