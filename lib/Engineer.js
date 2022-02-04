const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.getGitHub = function() {
            return this.github;
        }
    }
}

module.exports = Engineer;