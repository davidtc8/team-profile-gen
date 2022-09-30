const Manager = require('../lib/Manager');

// TODO: Create more complex tests in javascript
test('Expect setName to iqual Name', () => {
    let setName = 'David';
    const manager = new Manager(setName);
    expect(manager.name).toBe(setName)
});