const Employee = require('../lib/Employee');

test('Created an employee class', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')

    expect(employee.name).toBe(String)
    expect(employee.id).toBe(String)
    expect(employee.email).toBe(String)
});
test('get employees name', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getName().toEqual(expect.any(String)))

})
test('get employee ID', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getId().toEqual(expect.any(Number)))

})
test('get employee email', () => {
    const employee = new Employee('jared', 36, 'Jared@yahoo.com')
    expect(employee.getEmail().toequal(expect.any(String)))

})
