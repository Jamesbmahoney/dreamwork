const Employee = require('../lib/Employee.js');

test('Will create Employee object', () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe('object');
});

test('Will get the name from class constructor', () => {
    const name = 'Sue';
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
})

test('Will get the ID from class constructor', () => {
    const testEx = 100;
    const newEmp = new Employee('Foo', testEx);
    expect(newEmp.id).toBe(testEx);
});

test('Will get the Email from class constructor', () => {
    const testEx = "sue@sue.com";
    const newEmp = new Employee('Foo', 1, testEx);
    expect(newEmp.email).toBe(testEx);
})



