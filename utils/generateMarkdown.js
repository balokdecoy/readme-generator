// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}\n
  ## Table of Contents\n
  - [Description](#description)\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Licenses](#licenses)\n
  - [Questions](#questions?)\n
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
  ## Questions?\n
  ## Licenses\n
`;
}

module.exports = generateMarkdown;