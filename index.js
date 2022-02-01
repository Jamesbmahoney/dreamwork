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
                        ])
                        .then(function (res) {
                            const officeNum = res.office;
                            console.log(officeNum);
                            const manager = new Manager(
                                data.name,
                                res.id,
                                data.email,
                                officeNum,
                                "Manager"
                            );
                            console.log(manager);
                            employees.push(manager);
                        }).then(function () {
                            addNext()
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
                        ])
            }
        })
        .then(function () {
        });
};

promptUser();


