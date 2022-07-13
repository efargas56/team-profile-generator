const Employee = require('../lib/Employee');

test('Created an employee class', () => {
    const employee = new Employee('jared', 'manager')

    expect(employee.name).toBe(String)
    expect(employee.id).toBe(String)
    expect(employee.email).toBe(String)
});
test('checks to see if if you pulled the ID', () => {
    const employee = new Employee('jared', 'manager')

}