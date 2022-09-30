const Engineer = require('../lib/Engineer');

// TODO: Create more complex tests in javascript
test('Expect setName to iqual Name', () => {
    let setName = 'David';
    const engineer = new Engineer(setName);
    expect(engineer.name).toBe(setName)
});