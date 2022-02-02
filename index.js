const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');

const promptUser = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name:",
                name: "name"
            },
            {
                type: "input",
                message: "Email:",
                name: "email"
            },
            {
                type: "list",
                name: "role",
                message: "What's Your Position At The Company?",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])
        .then(function (data) {
            switch (data.role) {
                case "Manager":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "Enter employee ID: ",
                                name: "id"
                            },
                            {
                                type: "input",
                                message: "Enter office number: ",
                                name: "office"
                            }
                        ]).then(function() {
                            addAnotherEmployee()
                        });
                    break;
                case "Engineer":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "Enter employee ID: ",
                                name: "id"
                            },
                            {
                                type: "input",
                                message: "Enter github username: ",
                                name: "github"
                            }
                        ]).then(function() {
                            addAnotherEmployee()
                        });                        
                    break;
                case "Intern":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "Enter employee ID: ",
                                name: "id"
                            },
                            {
                                type: "input",
                                message: "Enter school: ",
                                name: "school"
                            }
                        ]).then(function() {
                            addAnotherEmployee()
                        });
            }
        })
        .then(function () {
        });
};

const addAnotherEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "add",
            message: "Would You Like To Add Another Employee To The Roster?",
            choices: ["Yes", "No"]
        }
    ])
    .then(function(res) {
        if (res.add === "Yes") {
            promptUser();
        } else {
            console.log("File Completed!");            
        }
    });
};

promptUser();


