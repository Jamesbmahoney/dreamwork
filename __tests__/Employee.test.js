const Employee = require('../lib/Employee');

test('Can create Employee object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
}); 