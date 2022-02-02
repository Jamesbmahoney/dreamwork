const Intern = require('../lib/Intern.js');

test('Can get School from class constructor', () => {
    const newEx = "UConn";
    const newInt = new Intern('Foo', 1, "sue@sue.com", newEx);
    expect(newInt.school).toBe(newEx);
});