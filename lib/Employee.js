class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.role || "Employee";
        this.getName = function () {
            return this.name;
        };
        this.getId = function () {
            return this.id;
        };
        this.getEmail = function () {
            return this.email;
        };
        this.getPosition = function () {
            return this.role;
        };      
    }       
};

const employees = [];

let joe = new Employee("joe", 1, "joe@joestar.com", "engineer");

module.exports = Employee;