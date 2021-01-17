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
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions',
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
  .then((response) => {
    let data = generateMarkdown(response);
    fs.writeFile("README2.md", data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });