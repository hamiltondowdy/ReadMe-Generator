// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license} License] (https://choosealicense.com/badge/license-${license.split(' ').join('%20')}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `![${license} License] (https://choosealicense.com/license-${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    the application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${data.description}
  ${data.licenseBadge}
  [A deployed version can be viewed here.](${data.URL})
  
---
  ## Contents
  1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---
  ## About
  ${data.about}
---
  ### User Story
  
---
  ### Acceptance Criteria
  
  
---
  ## Visuals:
  ![]()
---
  ## Installation:
  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  
---
  ## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
  ## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.
---
  ## Tests:
  ${data.test}
---
  ## Authors and Acknowledgments
  ${data.author}
---
  ### Contact Information:
    *GitHub Username: ${data.userName}
    *GitHub Email: ${data.userEmail}
  
`;
}

module.exports = generateMarkdown;
