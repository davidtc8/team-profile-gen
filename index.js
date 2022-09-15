// Bringing all the modules 
const inquirer = require('inquirer');
const fs = require('fs');

// Variables
let companyMembers = [];

// Questions about the engineering team
function initializer() {
    inquirer.prompt({
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
    })
    .then(answers => {
        companyMembers.push(answers.companyName);

    })
}