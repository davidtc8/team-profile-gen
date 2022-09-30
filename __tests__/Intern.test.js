const Intern = require('../lib/Intern');

// TODO: Create more complex tests in javascript
test('Expect setName to iqual Name', () => {
    let setName = 'David';
    const intern = new Intern(setName);
    expect(intern.name).toBe(setName)
});