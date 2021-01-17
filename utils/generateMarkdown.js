// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === 'Eclipse') {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  if (license === 'GPL') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === 'IBM') {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if (license === 'LGPL') {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license === 'None') {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === 'Eclipse') {
    return "[Eclipse 1.0](https://opensource.org/licenses/EPL-1.0)"
  }
  if (license === 'GPL') {
    return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === 'IBM') {
    return "[IPL 1.0](https://opensource.org/licenses/IPL-1.0)"
  }
  if (license === 'LGPL') {
    return "[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  if (license === 'MIT') {
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  if (license === 'Mozilla') {
    return "[MPL 2.0](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license === 'None') {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""
  }
  else {
    return `## Licenses\n Licensed under ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}\n
  ${renderLicenseBadge(response.license)}\n
  ## Table of Contents\n
  - [Description](#description)\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
  - [Licenses](#licenses)\n
  ## Description\n
  ${response.description}\n
  ## Installation\n
  \`\`\`bash
  ${response.installation}
  \`\`\`
  ## Usage\n
  ${response.usage}\n
  ## Contributing\n
  ${response.contributors}\n
  ## Tests\n
  ${response.tests}\n
  ## Questions\n
  Visit my Github profile at http://www.github.com/${response.githubProfile}.\n
  Reach me via email at ${response.email}.\n
  ${renderLicenseSection(response.license)}\n
`;
}

module.exports = generateMarkdown;