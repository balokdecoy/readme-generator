const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
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