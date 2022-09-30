// Bringing all the modules 
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');

// Variables
let managerInfo = [];
let teamInfo = [];
let companyName;
let teammateNum = 0

// Questions about the engineering team
function initializer() {
    // Asking about the company name
    inquirer.prompt([{
        type: 'input',
        message: 'What is the name of your company?',
        name: 'companyName',
        validate: companyName => {
            if (companyName) {
                return true
            } else {
                console.log('Please enter your company name')
            }
        }
    },
    // ------- Creating the manager -------
    {
        type: 'input',
        message: "What's the manager name?",
        name: 'managerName',
        validate: managerName => {
            if (managerName) {
                return true
            } else {
                console.log("Please enter the manager's name")
            }
        }
    },
    {
        type: 'input',
        message: "What's the manager email?",
        name: 'managerEmail',
        validate: managerEmail => {
            if (managerEmail) {
                return true
            } else {
                console.log("Please enter the manager email")
            }
        }
    },
    {
        type: 'input',
        message: "What's the employee ID?",
        name: 'employeeID',
        validate: employeeID => {
            if (employeeID) {
                return true
            } else {
                console.log("Please enter the employee ID")
            }
        }
    },
    {
        type: 'input',
        message: "What's the office number?",
        name: 'officeNumber',
        validate: officeNumber => {
            if (officeNumber) {
                return true
            } else {
                console.log("Please enter the office number")
            }
        }
    }])
    .then(answers => {
        // Assigning the company name to the variable
        companyName = answers.companyName
        managerInfo.push(answers.managerName, answers.managerEmail, answers.employeeID, answers.officeNumber);
        selectTeamMember()
    })
}

function selectTeamMember() {
    inquirer.prompt({
        type: 'list',
        message: 'What type of employee would you like to hire?',
        choices: ['Engineer', 'Intern'],
        name: 'employeeHire'
    })
    .then(answers => {
        switch(answers.employeeHire) {
            case 'Engineer':
                hireEngineer();
                break;
            case 'Intern':
                hireIntern();
                break;
        }
    })
}

function hireEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: "What's the engineer name?",
        name: 'engineerName',
        validate: engineerName => {
            if (engineerName) {
                return true
            } else {
                console.log("Please enter engineer's name")
            }
        }
    },
    {
        type: 'input',
        message: "What's the engineer ID?",
        name: 'engineerID',
        validate: engineerID => {
            if (engineerID) {
                return true
            } else {
                console.log('Please enter the engineer ID')
            }
        }
    },
    {
        type: 'input',
        message: "What's the engineer email?",
        name: 'engineerEmail',
        validate: engineerEmail => {
            if (engineerEmail) {
                return true
            } else {
                console.log('Please enter the engineer email')
            }
        }
    },
    {
        type: 'input',
        message: "What's the engineer GitHub Username?",
        name: 'engineerGithub',
        validate: engineerGithub => {
            if (engineerGithub) {
                return true
            } else {
                console.log('Please enter the GitHub username')
            }
        }
    }])
    .then(answers => {
        let engineer = {typeofEmployee: "Engineer", engineerName: answers.engineerName, engineerID: answers.engineerID, engineerEmail: answers.engineerEmail, engineerGithub: answers.engineerGithub}
        teamInfo.push(engineer)
        selectAnotherTeamMember();
    })
}

function hireIntern() {
    inquirer.prompt([{
        type: 'input',
        message: "What's the engineer name?",
        name: 'internName',
        validate: internName => {
            if (internName) {
                return true
            } else {
                console.log("Please enter intern name")
            }
        }
    },
    {
        type: 'input',
        message: "What's the intern ID?",
        name: 'internID',
        validate: internID => {
            if (internID) {
                return true
            } else {
                console.log('Please enter the intern ID')
            }
        }
    },
    {
        type: 'input',
        message: "What's the intern email?",
        name: 'internEmail',
        validate: internEmail => {
            if (internEmail) {
                return true
            } else {
                console.log('Please enter the intern email')
            }
        }
    },
    {
        type: 'input',
        message: "What's the intern School?",
        name: 'internSchool',
        validate: internSchool => {
            if (internSchool) {
                return true
            } else {
                console.log('Please enter the intern school')
            }
        }
    }])
    .then(answers => {
        let intern = {typeofEmployee: "Intern", internName: answers.internName, internID: answers.internID, internEmail: answers.internEmail, school: answers.internSchool}
        teamInfo.push(intern)
        selectAnotherTeamMember();
    })
}

function selectAnotherTeamMember() {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to hire someone else for your team?',
        choices: ['Yes', 'No'],
        name: 'employeeHire'
    })
    .then(answers => {
        if (answers.employeeHire === 'Yes') {
            teammateNum += 1
            selectTeamMember();
        }
        else{
            callGenerateHTML();
        }
    })
}

function callGenerateHTML() {
    fs.writeFile('./dist/team.html',generateHTML(companyName, managerInfo, teamInfo),  err => {
        if (err) {
          console.error(err);
        }
        console.log('File written successfully!')
      });
}

initializer();

// TODO: CREATE THE MISSING TESTS
// TODO: Create the logic for the HTML File
// TODO: Creat the team.html in the "dist" folder