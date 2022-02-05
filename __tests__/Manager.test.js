const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js')

test('Can set office number', () => {
    const newEx = 100;
    const newMgr = new Manager('Foo', 1, 'sue@sue.com', newEx);
    expect(newMgr.officeNumber).toBe(newEx);
});

test('getRole() responding to Manager response', () => {
    const newEx = "Manager";
    const newMgr = new Manager('Foo', 1, "sue@sue.com", 100);
    expect(newMgr.getRole()).toBe(newEx);
})

test('Can get Office Number from class constructor', () => {
    const newEx = "100";
    const newMgr = new Manager('Foo', 1, "sue@sue.com", newEx);
    expect(newMgr.getOfficeNumber()).toBe(newEx);
});