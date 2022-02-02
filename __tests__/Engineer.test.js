const Engineer = require('../lib/Engineer.js');

test('Can get Github from class constructor', () => {
    const newEx = "githubgithub";
    const newEng = new Engineer('Foo', 1, "sue@sue.com", newEx);
    expect(newEng.github).toBe(newEx);
});