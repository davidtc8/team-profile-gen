const Employee = require('../lib/Employee');

// TODO: Create more complex tests in javascript
test('Expect setName to iqual Name', () => {
    let setName = 'David';
    const employee = new Employee(setName);
    expect(employee.name).toBe(setName)
});