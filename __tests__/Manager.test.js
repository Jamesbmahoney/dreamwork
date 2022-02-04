const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js')

test('Can get Office Number from class constructor', () => {
    const newEx = "100";
    const newMgr = new Manager('Foo', 1, "sue@sue.com", newEx);
    expect(newMgr.office).toBe(newEx);
});