const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML.js');

const employee = [];
const engineer = [];
const intern = [];
const manager = [];

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
                        ]).then(function(resp) {
                            const officeNum = resp.office;
                            console.log(officeNum);
                            const manager = new Manager(
                                data.name,
                                resp.id,
                                data.email,
                                officeNum,
                                "Manager"
                            );                                                       
                            employee.push(manager);                              
                        }).then(function(){
                            addAnotherEmployee();
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
                        ]).then(function(resp) {
                            const githubName = resp.github;
                            const engineer = new Engineer(
                                data.name,
                                resp.id,
                                data.email,
                                githubName,
                                "Engineer"
                            );                                                       
                            employee.push(engineer);
                        }).then(function(){
                            addAnotherEmployee();
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
                        ]).then(function(resp) {
                            const empSchool = resp.school;
                            const intern = new Intern(
                                data.name,
                                resp.id,
                                data.email,
                                empSchool,
                                "Intern"
                            );                                                       
                            employee.push(intern);
                        }).then(function(){
                            addAnotherEmployee();
                        });
                        break;
            }
        })        
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
            finishedCard(employee);            
        }
    });
};

function finishedCard(employee){
    console.log("Success!");    
    const html = generateHTML(employee);    
    fs.writeFileSync('./dist/employees.html', html, "utf-8");
}

function init(){
    console.log('Enter New Employee Information Here:');
    promptUser();
}

init();


